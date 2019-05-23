/**
 * Connect to the Quid2 network.
 *
 * @param netURL
 *            the url of the Quid2 network.
 * @param onConnected
 *            A callback to invoke when the connection is established.
 */
goog.provide('quid2.connection');

goog.require('quid2.org');
goog.require("quid2.primitive");
goog.require('quid2.xhr');
goog.require("quid2.bichannel");
goog.require('quid2.modules'); //Mutual reference.

quid2.connection = (function() {
  var q = quid2;
  var p = quid2.primitive.value;
  var pt = quid2.primitive.type;
  var g = goog;

  var basicURL = quid2.org.gatewayURL+(quid2.org.gatewayPort != 80 ? ":"+quid2.org.gatewayPort : "");
  var httpURL = "http://"+basicURL;

  var isLocal = new q.Request().protocol == "file:";
  var exampleNum = isLocal ? 0 : undefined;
  //var exampleNum = undefined;
  var basicPars = g.isNumber(exampleNum) ? "?example=" + exampleNum + "&" : "?";

  //quid2.modules.addModules(quid2.org.basicModules);
  quid2.modules.initModules();

  var maybe = quid2.module.Data.Maybe.Last;
  var msg = quid2.module.Network.Msg.Last;
  var m_msg = quid2.module.Network.Msg.Last.value;
  var m_fun = quid2.module.Network.Function.Last;
  var enp = quid2.module.Network.EndPoint.Last;
  var dmn = quid2.module.Network.Domain.Last;
  var evl = quid2.module.Service.Org.Quid2.Language.Quid2.Last;
  var app = quid2.module.Service.Org.Quid2.App.Last.value;
  //console.log("Loaded basic modules");

  function onIdentity(userEndPoint,userName,publicId,secretId) {
        var userDomain = userEndPoint.parts[0];
        console.log("onIdentity",userEndPoint.show(),userDomain.show(),userName,publicId,secretId);

	/*
	 * A local space, used for callbacks. @param namespace
	 */
	function Space(namespace,path) {
		this.namespace = namespace;
		this.path = path;
		this.space = {};
	};

	// Create unique and hard-to-guess endpoint identifiers
	// BUG: in case of concurrent calls it might return a non-unique value.
	/** @return String * */
	Space.prototype.mkUnique = function() {
		//var id = this.path + "." + Math.floor(Math.random() * 100000000000);
	        var id = Math.floor(Math.random() * 1000000);
		//console.log("unique",id);
		if (this.has(id)) return this.mkUnique();
		return id;
	};

	/*
	 * Bind a function to a name in the space.
	 *  def:: String -> (p1 .. pn -> r) -> ()
	 */
	Space.prototype.def = function(name, f) {
	  if (this.has(name)) throw (name + " already exists");
	  this.space[name] = f;
	};

	/*
	 * Delete the binding of a name :: String -> ()
	 */
	Space.prototype.undef = function(name) {
	  delete this.space[name];
	};

	Space.prototype.has = function(name) {
	  return q.isDefined(this.space[name]);
	};

  	/*
	 * Creates a callback that will be invoked and then unbound after receiving the
	 * first result. callback :: (r-> ()) -> [String]
	 */
      Space.prototype.callback = function(f,persistent) {
	  var cbID = ""+this.mkUnique();
	  var s = this;
	  // Make sure that callback returns ()
	  //s.def(cbID,function (p) {f(p);return quid2.primitive.value.unit;});
	  s.def(cbID,function (isOK,r) {
	      f(isOK,r);
	      return quid2.primitive.value.unit;
	  });

	  if (! persistent) {
	    setTimeout(function() {
	    if (s.has(cbID)) {
	      console.error("Removed callback for timeout:",cbID);
	      s.err(cbID,new m_msg.ProtocolError(new p.String("Timeout")));
	    };
	    }, 60*1000);
	  };

	  return cbID;
	};

        /*
	 * Creates a permanent name.
	 */
	Space.prototype.solve = function(name) {
	  var v = this.space[name];
	  if (q.isUndefined(v)) throw ("Cannot find callback " + name);
	  return v;
	};

	Space.prototype.use = function(name) {
	  var v = this.solve(name);
	  this.undef(name);
	  return v;
	};

	Space.prototype.ok  = function(cb,result) {
	  var me = this;
	  q.later(function(){me.use(cb)(true,result.value);});
	  //q.later(function () {defer.resolve(result.value);});
	  //function () {defer.resolve(result.value);});
	};

  	Space.prototype.err = function(cb,error) {
	  var me = this;
	  q.later(function(){me.use(cb)(false,error);});
	  /*var id = cb;
	  var defer = this.use(id);
	  q.later(function () {defer.reject(error);});*/
	};

	function getCBid(cb) {
	  return cb.match(function (maybeEP,cb) {return Number(cb.value);});
	};

	/**
	 * Process messages received from the server.
	 */
	var spc;

	var send;
	function sendMsg(msg) {
	  console.log("sendMsg",msg.show());
	  //send.done(function (sendF) {sendF(p.encodedAsBytes(msg));});
	  send(p.encodedAsBytes(msg));
	};

  	function consumeMsg(msg) {
	  //console.log("consumeMsg:",msg.show());

	  function onCall(callname,pars,cb,maybeAuth) {
	    q.later(function() {
	      var rmsg;
	      try {
		var f = spc.solve(callname.parts[1].value);
		rmsg = new m_msg.Ok(p.encoded(f(pars)),cb);
	      } catch (err) {
		var errMessage = err.message ? err.message : ""+err;
		console.log("callback error",errMessage);
		rmsg = new m_msg.Err(p.encoded(new m_msg.ServerError(new p.String(errMessage))),cb);
	      };
	      sendMsg(rmsg);
	    });
	  };

	  function onOk (result,cb) {
	    spc.ok(getCBid(cb),result);
	  };
	  function onErr (err,cb) {
	    spc.err(getCBid(cb),err);
	  };
	  function onMore (more,cb) {
	    throw "Unexpected: " + msg.show();
	  };
	  msg.match(onCall,onOk,onErr,onMore);
	};

	/*function consumeMsgs(msgsBin) {
	  try {
	    //console.log("msgsBin",msgsBin,msgsBin.length());
 	    var msgs = msgType.decode(msgsBin).value;
	    for (var i=0;i<msgs.length;i++) consumeMsg(msgs[i]);
	  } catch (err) {
	    console.error("consumeMsgs " + err);
	  };
	};*/

	send = q.bichannel.open(basicURL+"/api/send",publicId,secretId,consumeMsg); //+basicPars

	function login() {
	  window.location = httpURL + "/auth/login";
	};

	function logout() {
	  window.location = httpURL + "/auth/logout";
	};

    /*
    var id = new pt.Tuple([dmn.type.Domain,pt.String]).decode(idMsg).value;
    var userDomain = id[0];
    var userName = id[1].value;
    console.log("ID",idMsg,userDomain.show(),userName);
    */
    var loggedIn = true;
    function onLogged() {loggedIn=true;}
    userDomain.match(function (anonId) {loggedIn=false;},onLogged,onLogged,onLogged,onLogged);
    q.log("Logged in",loggedIn);

    spc = new Space(); //ch.namespace,ch.path);

    function callBack(f) {
      var cb = spc.callback(f,true);
      var cb2 = new m_fun.value.Function(new maybe.value.Just(userEndPoint),new p.String(cb));
      //console.log("persistent callback",cb2.show());
      return cb2;
    };

    function callBackF(f) {
      var cb = spc.callback(f,true);
      var cb2 = new m_fun.value.Function(new maybe.value.Just(userEndPoint),new p.String(cb));
      //console.log("persistent callback",cb2.show());
	return {f:cb2,del:function () {spc.undef(cb);}};
    };  

    function fobj(fname) {
	return new m_fun.value.UFunction(new maybe.value.Nothing(),new p.String(fname));
    };

    function rpc(code,auth) {
      console.log("rpc",code,auth);
      var result = $.Deferred();

      var cb = spc.callback(function(isOK,r) {
       //console.log("eval result",isOK,r);
       if (isOK) result.resolve(r);
       else {
	 result.reject(r);
	 console.error("evaluating:",code," returned error: ",r,r.show());
       };
      });

      var call = new m_msg.Call(
	fobj("evalB")
	,new p.List([p.encoded(new p.String(code))])
	,fobj(cb)
        ,auth ? new maybe.value.Just(auth) : new maybe.value.Nothing()
      );

      sendMsg(call);
      return result;
    };

    return {
      rpc : rpc,
      //msg : msg,
      callBack : callBack,
      callBackF : callBackF,
      userDomain:userDomain,
      userName:userName,
      loggedIn : loggedIn,
      login : login,
      logout : logout
    };

  };

/*
  return $.when($.when(dmn.type.Domain.ready()
		       ,msg.type.Msg.ready()
		       ,evl.type.Exports.ready()
		       //,quid2.modules.initModules2()
		       )
		,q.xhr.get(httpURL+"/api/identity")).pipe(onIdentity);
*/
  return $.when(q.xhr.get(httpURL+"/api/identity"+basicPars)
		,new pt.Tuple([enp.type.EndPoint,pt.String,pt.String,pt.String]).ready()
	       ).pipe(function(idMsg,idType) {
    var id = idType.decode(idMsg).value;
    return onIdentity(id[0],id[1].value,id[2].value,id[3].value);
  });

  //return $.when(quid2.modules.addModules(quid2.org.basicModules),q.xhr.get(httpURL+"/api/identity")).pipe(onIdentity);
})();

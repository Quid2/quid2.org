/**
 * Connect to the Quid2 network.
 *
 * @param netURL
 *            the url of the Quid2 network.
 * @param onConnected
 *            A callback to invoke when the connection is established.
 */
goog.provide('quid2.connection');

goog.require('$');
goog.require("goog");
goog.require("quid2.std");
goog.require("quid2.util");
goog.require('quid2.xhr');
goog.require("quid2.bichannel");
goog.require("quid2.Request");
goog.require('quid2.module.Network.Base.API');
goog.require('quid2.module.Network.Msg.API');
goog.require('quid2.module.Data.Maybe.API');
goog.require('quid2.module.Service.Org.Quid2.Language.QQ.API');

quid2.connection = function(gateway) {
    var g = goog;
    var q = quid2;
    var u = quid2.util;
    var m_s = quid2.std;
    /*
    var m_maybe = quid2.module.Data.Hash_c64194f1bbd4a657196fb789304629b7aaf1e48179faf79efdf0ef16b6b85580;
    var m_msg = quid2.module.Network.Msg.Hash_cc3b8707d1ed2a5c3391dfd56b7cdc7de796278e35d6e42786877bb6e46cd683;
    var m_err = quid2.module.Network.Msg.Hash_3dda7e178e7a7ca389ab7a579611191e6580f5c0afe2d0e1c62b73e9b3bfa2e9;
    var m_fun = quid2.module.Quid2.HRT.Network.Hash_8fd1b9b4dd939899e3a8ef8bc0e6d296d505c1a130b0981c62ee74a7902205d7;
    var m_ufun = quid2.module.Quid2.HRT.Network.Hash_a4a87a5cbbfb0dd0dda507f7bdd38b95195cb8ff434fb6726f2d9c83e5fb9c77;
    var m_end = quid2.module.Quid2.HRT.Network.Hash_1b5027abc70fdff9d370f5c4632a1d95c717f57ad809c2ffc31af9fdab80e35e;
    */
    var m_maybe = quid2.module.Data.Maybe.API;
    var m_msg = quid2.module.Network.Msg.API;
    var m_err = quid2.module.Network.Msg.API;
    var m_fun = quid2.module.Network.Base.API;
    var m_ufun = quid2.module.Network.Base.API;
    var m_end = quid2.module.Network.Base.API;
    var m_qq =  quid2.module.Service.Org.Quid2.Language.QQ.API;

    var basicURL = gateway.url+(gateway.port != 80 ? ":"+gateway.port : "");
    var httpURL = "http://"+basicURL;

    var isLocal = new q.Request().protocol == "file:";
    var exampleNum = isLocal ? 0 : undefined;
    //var exampleNum = undefined;
    var basicPars = g.isNumber(exampleNum) ? "?example=" + exampleNum + "&" : "?";

    function onIdentity(userEndPoint,userName,publicId,secretId) {
        var userDomain = userEndPoint.value[0];
        u.log("onIdentity",userEndPoint.show(),userDomain.show(),userName,publicId,secretId);

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
	    return u.isDefined(this.space[name]);
	};
	
  	/*
	 * Creates a callback that will be invoked and then unbound after receiving the
	 * first result. callback :: (r-> ()) -> [String]
	 */
	Space.prototype.callback = function(f,persistent) {
	    var cbID = ""+this.mkUnique();
	    var s = this;
	    // Make sure that callback returns ()
	    s.def(cbID,function (isOK,r) {
		f(isOK,r);
		return m_s.unit;
	    });
	    
	    if (! persistent) {
		setTimeout(function() {
		    if (s.has(cbID)) {
			u.error("Removed callback for timeout:",cbID);
			s.err(cbID,new m_err.ProtocolError(new m_s.String("Timeout")));
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
	    if (u.isUndefined(v)) throw ("Cannot find callback " + name);
	    return v;
	};
	
	Space.prototype.use = function(name) {
	    var v = this.solve(name);
	    this.undef(name);
	    return v;
	};
	
	Space.prototype.ok  = function(cb,result) {
	    var me = this;
	    u.later(function(){me.use(cb)(true,result.value);});
	    //q.later(function () {defer.resolve(result.value);});
	    //function () {defer.resolve(result.value);});
	};
	
  	Space.prototype.err = function(cb,error) {
	    var me = this;
	    u.later(function(){me.use(cb)(false,error);});
	    /*var id = cb;
	      var defer = this.use(id);
	      q.later(function () {defer.reject(error);});*/
	};
	
	function getCBid(cb) {
	    return m_s.fold({UFunction:function (maybeEP,cb) {
		return Number(cb.value);
	    }})(cb);
	};
	
	/**
	 * Process messages received from the server.
	 */
	var spc;
	
	var send;
	function sendMsg(msg) {
	    u.log("sendMsg",msg.show());
	    //send.done(function (sendF) {sendF(p.encodedAsBytes(msg));});
	    send(m_s.encodedAsBytes(msg));
	};
	
  	function consumeMsg(msg) {
	    u.log("consumeMsg:",msg.show());
	    
	    function onCall(callname,pars,cb,maybeAuth) {
		u.later(function() {
		    var rmsg;
		    try {
			var f = spc.solve(callname.parts[1].value);
			rmsg = new m_msg.Ok(p.encoded(f(pars)),cb);
		    } catch (err) {
			var errMessage = err.message ? err.message : ""+err;
			u.error("callback error",errMessage);
			// CHECK
			rmsg = new m_msg.Err(m_s.encoded(new m_err.ServerError(new m_s.String(errMessage))),cb);
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
	    
	    m_s.fold({Call:onCall,Ok:onOk,Err:onErr,More:onMore})(msg);
	};

	send = q.bichannel(basicURL+"/api/send",publicId,secretId,consumeMsg);

	function login() {
	    window.location = httpURL + "/auth/login";
	};
	
	function logout() {
	    window.location = httpURL + "/auth/logout";
	};
	
	var loggedIn = m_s.fold({Anonymous:false,OpenID:true,Dir:true,Email:true})(userDomain);
	u.log("Logged in",loggedIn);

	spc = new Space(); //ch.namespace,ch.path);

	function callBack(f) {
	    var cb = spc.callback(f,true);
	    var cb2 = new m_fun.Function(new m_maybe.Just(userEndPoint),new m_s.String(cb));
	    //u.log("persistent callback",cb2.show());
	    return cb2;
	};
	
	function callBackF(f) {
	    var cb = spc.callback(f,true);
	    var cb2 = new m_fun.Function(new m_maybe.Just(userEndPoint),new m_s.String(cb));
	    //console.log("persistent callback",cb2.show());
	    return {f:cb2,del:function () {spc.undef(cb);}};
	};

	function ufun(fname,maybeEP) {
	    return new m_ufun.UFunction(maybeEP ? new m_maybe.Just(maybeEP) : new m_maybe.Nothing(),new m_s.String(fname));
	};
	
	function rpc(ep,fname,pars,auth) {
	    u.log("rpc",ep.show(),fname,pars,auth);
	    var result = $.Deferred();

	    var cb = spc.callback(function(isOK,r) {
		//u.log("eval result",isOK,r);
		if (isOK) result.resolve(r);
		else {
		    result.reject(r);
		    u.error("rpc",ep.show(),fname,pars,auth," returned error: ",r,r.show());
		};
	    });

	    var call = new m_msg.Call(
		ufun(fname,ep)
		,m_s.list(pars.map(function (p) {return m_s.encodedAsByteList(p);}))
		,ufun(cb)
		,auth ? new m_maybe.Just(auth) : new m_maybe.Nothing()
	    );
	    
	    sendMsg(call);
	    return result;
	};

	function rpcEval(code,returnType,auth) {
	    u.log("rpc",code,auth);
	    var result = $.Deferred();

	    var cb = spc.callback(function(isOK,r) {
		u.log("eval result",isOK,r);
		if (isOK) result.resolve(returnType.decode(new m_s.ByteBuffer(r)));
		else {
		    result.reject(r);
		    u.error("evaluating:",code," returned error: ",r,r.show());
		};
	    });

	    var call = new m_msg.Call(
		ufun("evalB") 
		//,new m_s.List([m_s.encoded(new m_s.String(code))])
		,new m_s.List([m_s.encodedAsByteList(new m_s.String(code))])
		,ufun(cb)
		,auth ? new m_maybe.Just(auth) : new m_maybe.Nothing()
	    );
	    
	    sendMsg(call);
	    return result;
	};

	// Inject functionality that cannot be defined in std.js
	// BAD STYLE?
	m_s.Value.prototype.value = function (ps) {
	    var code = this.qualName();
	    var retType= m_s.concreteType(this.decode());
	    if (ps) { // UGLY
		ps.map(function (v) {code += " ("+v.show()+")";});
		retType = retType.returnType();
	    }
	    return rpcEval(code,retType);
	};

	var TypeQualName = new m_qq.Type$(m_qq.QualName$);
	m_s.Value.prototype.decode = function () {
	    return TypeQualName.decode(new m_s.ByteBuffer(this.btype));
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
    
    return q.xhr.get(httpURL+"/api/identity"+basicPars).pipe(function(idMsg) {
	// TODO: define this type in a file so that we can decode on it directly.
	//var connType = m_s.Tuple.type(new m_end.EndPoint$,m_s.String,m_s.String,m_s.String);
        //var id0 = connType.decode(idMsg).value;

	//var id = m_s.Tuple.decode([g.bind(m_end.EndPoint$.decode,m_end.EndPoint$),m_s.String.decode,m_s.String.decode,m_s.String.decode])(idMsg).value;

	var connType = new m_s.Tuple$(m_end.EndPoint$,m_s.String,m_s.String,m_s.String);
	var id = connType.decode(idMsg).value;

	return onIdentity(id[0],id[1].value,id[2].value,id[3].value);
    });
    
};

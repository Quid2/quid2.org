goog.provide('quid2.modules');
goog.provide('quid2.module');

goog.require('quid2');
goog.require('quid2.org');
goog.require('quid2.primitive');
goog.require('quid2.storage');
goog.require('goog.crypt.base64');

//goog.require('quid2.connection'); //Mutual reference.

quid2.modules = (function () {
  var q = quid2;
  var g = goog;
  var p = quid2.primitive.value;
  var pt = quid2.primitive.type;
  var m = quid2.module;

  var refsCache = {};

  function makeTypeRefJ(jtyp) {
    var key = jtyp+"";
    var r = refsCache[key];
    //console.log("makeTypeRefJ",key,r);
    if (q.isDefined(r)) return r;
    return refsCache[key] = new TypeRef(jtyp);
  };

  function makeTypeRef(jsonS) {return makeTypeRefJ($.parseJSON(jsonS));}
  // Note/BUG: a ref to a type containing variables (ex: (a,b)) 
  // will always return the same type.  
  function TypeRef(jtyp) {
    this.jtyp = jtyp;
  };

  TypeRef.prototype.lastTypeRef = function() {
    var typ = this.jtyp;
    if (typeof typ == "string") return this;

    var kind = typ[0];
    var pars = typ.slice(1);
    switch(kind) {
      case ">": return makeTypeRefJ(pars[pars.length-1]);

      case "(": return this;
      case "[": return this;
      case "$": return this;

      default: throw ("lastTypeRef: " + typ);
    };
  };

  TypeRef.prototype.get = function() {
    var me = this;
      //console.log("TypeRef.prototype.get",me);
      // WARN/BUG: Disabled cache if (q.isDefined(me.type)) return me.type;
      return me.type = getType(me.jtyp);
  };

  TypeRef.prototype.getReady = function() {
    return this.get().pipe(function(t) {return t.ready();});
  };

  TypeRef.prototype.value = function() {
    if (q.isDefined(me.type)) return me.type;
    throw ("Unresolved type:",this.jtyp);
  };

  function typeRefs(jtypes) {return jtypes.map(makeTypeRef);};

  function getRefs(typeRefs) {
    return q.whenN(typeRefs.map(function (ref) {return ref.get();}));
  };

  //function getJTypes(types) {return q.whenN(types.map(getJType));};
  //function getJType(tson) {return getType($.parseJSON(tson)).pipe(function (rt) {return rt.ready();});}

  function getTypes(types) {return q.whenN(types.map(getType));};

  // Return a deferred(type) , if necessarily loading the containing module.
  //function getType(typ) {return $.when(getType_(typ)).pipe(function (rt) {return rt.ready();}).done(function(t) {console.log("getType",typ,"->",t);});}
  function getType(typ) {
    return $.when(getType_(typ)).pipe(function(t) {
      //console.log("getType",typ,"->",t);
      q.assertDefined(t,"Cannot resolve type "+typ);
      return t;
    });}

  function getType_(typ) {
    //console.log("[getType_",typ);

    if (typeof typ == "string") {
      if (typ == "()") return pt.Unit;

      if (typ == "[Char]") return pt.String;

      if (q.isLower(typ.charAt(0))) return new pt.Var(typ);//.charAt(0)

      var mn = q.nameSplit(typ);
      var isPrimitive = mn[0].length == 0;
      //if (typ == "IO") return pt.IO;
      if (isPrimitive) return pt[mn[1]];

      //console.log("get Full Module->",mn);
      return getModule(mn[0]).pipe(function (mdl) {
	//console.log("gotModule_",mdl);
	var nt = mdl.type[mn[1]];
	//console.log("gotModule",mdl,mn,nt);
	q.assertDefined(mdl,"Cannot locate module "+mn[0]);
	q.assertDefined(nt,"Cannot locate type "+mn[1] + " in " +mn[0]);
	return nt;
      });
    };

    var kind = typ[0];
    var pars = typ.slice(1);
    switch(kind) {
      case "(": return getTypes(pars).pipe(function (ts) {return new pt.Tuple(ts);});
      case "[": return (pars[0]=="Char" ? pt.String : getType(pars[0]).pipe(function (t) {return new pt.List(t);}));
      case "$": return getTypes(pars).pipe(function (ts) {return ts[0](ts.slice(1));});

      default: throw ("getType: " + typ);
    };
  };

  function functionCall(qFuncName) {
    return getFunction(qFuncName).pipe(function (f) {
      if (q.isUndefined(f))
	// Uuhm
	return new p.String("Error: " + qFuncName + " is undefined.");
      return f.call();
    });
  };

  /** JSTyped -> a **/
  function getJSTyped(t) {
    var tp = t.match(["dataTypeName","bin"]);
    //console.log("getJSTyped",tp.dataTypeName.value);
    //return getDataType(tp.dataTypeName.value).pipe(function (dt) {
    return getType($.parseJSON(tp.dataTypeName.value)).pipe(function (dt) {
      return dt.ready().pipe(function (t) {
	return decodeResultFunc(t,tp.bin.value);});});
  };

  function getTyped(t) {
    var tp = t.match(["dataTypeName","bin"]);
    //console.log("getTyped",tp.dataTypeName.value);
    return getType(tp.dataTypeName.value).pipe(function (dt) {
      return dt.ready().pipe(function (t) {
	return decodeResultFunc(t,tp.bin.value);});});
  };

  function getNJSTyped(ts) {return q.whenN(ts.map(getJSTyped));};

  function getDataType(dataTypeName) {
    var n = q.nameSplit(dataTypeName);
    return getModule(n[0]).pipe(function (mdl) {return mdl.type[n[1]];});
  };

  function getFunction(qFuncName) {
    var n = q.nameSplit(qFuncName);
    return getModule(n[0]).pipe(function (mdl) {return mdl.value[n[1]];});
  };

  function getModuleByName(mdlName,asLast) {return getModule(mdlName.split("."),asLast);};

  function getModule(mdlPath,asLast) {return $.when(getModule_(mdlPath,asLast));}

  function getModule_(mdlPath,asLast) {
    q.assert(g.isArray(mdlPath),["getModule_",mdlPath,asLast]);
    var mdlName =  mdlPath.join(".");
    if (mdlName.length == 0) return quid2.primitive;

    try {
      //console.log("Looking for: ",mdlName);
      var mdl = q.traverse(quid2.module,mdlPath);
      if (! q.isDefined(mdl)) throw ("getModule.traverse"+mdlName);
      //q.assert(isDefined(mdl),"traverse returned undefined");
      return mdl;
    } catch(err) {
      console.log("Not there yet: ",mdlName);
      return quid2.module.Service.Org.Quid2.Language.Quid2.Last.value.exports.cachedCall(new quid2.primitive.value.String(mdlName)).pipe(function (mexps) {
        var r = mexps.match(["err"],["exps"]);
	if (r.err) throw ("getModule "+mdlPath+ " " + r.err.show());
	return addModuleFromExports(mdlName,r.exps,asLast);
      });
    };
  };

  function addModuleFromExports(mdlName,exps,asLastI) {
    var asLast = !! asLastI;
    q.assert(g.isString(mdlName) && exps && g.isBoolean(asLast));
      //console.log("addModuleFromExports",mdlName);//,"exps",exps.show());
	  return exps.match(function(ds,fs) {
	    var sds = ds.value.map(
	      function (dt) {
		return dt.match(function(name,sig,numCons,cons){
		  return [name.value,sig.value.map(function(s){return s.value;}),numCons.value,cons.value.map(function (cn) {
		    return cn.match(function (cname,ctag,sig) {return [cname.value,ctag.value,sig.value.map(function(s){return s.value;})];});
		    })];
		  });
	      });
	    var sfs = fs.value.map(
	      function (f) {
		return f.match(function(name,sig) {
		  return [name.value,sig.value.map(function(s){return s.value;})];
		});
	      });
	    //console.log("loading module",mdlName,[sds,sfs]);
	    return addModule(mdlName,[sds,sfs],asLast);
	  });
    };

  function initModules() {
    addModules(quid2.org.basicModules);
  };

  /*function initModules2() {
    var t = m.Data.Either.Last.type.Either.app(new pt.Tuple(m.Language.SrcLoc.Last.type.SrcLoc,pt.String),m.Language.Quid2.Syntax.Last.type.Type);
    m.Language.Quid2.Parser.Last.value.parseType.resultType = t;
    return $.when(t.ready()).pipe(function () {
      //m.Language.Quid2.Parser.Last.value.parseType.resultType = t;
      return t;
    });
  };*/

  function addModules(mdls) {
    return mdls.map(function(mdl) {return addModule(mdl[0],mdl[1],true);});
  }

  function addModule(moduleName,exports,asLast) {
    //console.log("[addModule",moduleName);
    // Make module
    var path = moduleName.split(".");
    var tip = quid2.module;
    for (var i=0;i<path.length-1;i++) tip = tip[path[i]] = tip[path[i]] || {};

    /** NOTE: more than one call for the same module can be executed at the same time so we check if it already exists. **/
    var mdl = tip[path[path.length-1]];
    // BUG: not checking might create problems but coming back immediatly also can cause lookups for datatypes decodes to fail.
    /*if (q.isDefined(mdl)) {
      console.warn("Trying to add existing module",moduleName);
      return mdl;
     };*/

    mdl = tip[path[path.length-1]] = $.extend(tip[path[path.length-1]] || {}, {type:{},value:{}});
    if (asLast) tip.Last = mdl;
    mdl.moduleName_=moduleName;

    // Make data types
    var dataTypes = exports[0];
    var dts = dataTypes.map(function (d) {return addDataType(mdl,moduleName,d);});

    // Make functions
    var funs = exports[1];
    for (var f=0;f<funs.length;++f) addFunc(mdl,moduleName,funs[f]);

    //console.log(moduleName,"addModule]");
    return mdl;
  };

  function addDataType(mdl,moduleName,dt) {
    var dataTypeName = dt[0];
    var vars = dt[1];
    var numCons = dt[2];
    var dataCons = dt[3];
    var cs = dataCons.map(function (d) {return addDataCons(mdl,moduleName,dataTypeName,d,numCons);});
    var dt = mkDataType(moduleName,dataTypeName,vars,numCons,cs);
    if (vars.length==0)
      cs.map(function (c) {c.prototype.type=dt;});
    mdl.type[dataTypeName] = dt;
    return dt;
  };

  function addDataCons(mdl,moduleName,dataTypeName,cons,numCons) {
    var name = cons[0];
    var tag = cons[1];
    var typesNames = cons[2];

    var c = mkDataCons(qname(moduleName,dataTypeName),qname(moduleName,name),tag,typeRefs(typesNames),numCons);
    mdl.value[name] = c;
    //console.log("Added data cons",name);
    return c;
  };

  function Func(name,signature) {
    this.name = name;
    this.signature = signature;
    this.resultType = signature.lastTypeRef();
  };

  Func.prototype.isValue = function () {
    //console.log("isValue",this.name,this.signature,this.signature == this.resultType);
    return this.signature == this.resultType;
  };

  Func.prototype.show = function () {return this.name;};

  Func.prototype.callShow = function(args) {return showParts_(this.name,args);};

  Func.prototype.call = function() {return this.callAs(arguments);};

  Func.prototype.callAs = function(args,auth) {
    var me = this;
    return me.resultType.getReady().pipe(function (t) {
      return me.callRaw(args,auth).pipe(g.partial(decodeResultFunc,t));
    });
  };

  Func.prototype.callRaw = function(args,auth) {
    var me = this;
    return q.connection.pipe(function (c) {return c.rpc(me.callShow(args),auth);});
  };

/*
  Func.prototype.callSudo = function() {
    var app = quid2.module.Service.Org.Quid2.App.Last.value; // NOTE: we rely on this existing.
    var me = this;
    var args = arguments;
    return q.connection.pipe(function (c) {
      var m = c.msg(me.callShow(args));
      app.sudo.call(m[0]);
      return m[1];
    });
  };
*/
  var exprStore = q.storage("1","ExprCache");

  Func.prototype.cachedCall = function() {
    var me = this;
    var args = arguments;
    var key = me.callShow(args);
    var cached = exprStore.get(key);

    return me.resultType.getReady().pipe(function (t) {
      if (cached) return decodeResultFunc(t,goog.crypt.base64.decodeStringToByteArray(cached));

      return me.callRaw(args).pipe(function (raw) {
	//exprStore.set(key,goog.crypt.base64.encodeByteArray(p.encodedAsBytes(r))); // SLOW: received data is decoded and then reencoded.
	exprStore.set(key,goog.crypt.base64.encodeByteArray(raw));
	return decodeResultFunc(t,raw);
      });
      });
  };

  /*Func.prototype.value = function () {
    var key = me.callShow(args);
    var cached = exprStore.get(key);
    if (q.isUndefined(cached)) throw ("Unknown value of "+key);
    return decodeResultFunc(this.resultType,goog.crypt.base64.decodeStringToByteArray(cached));
  };*/

  function decodeResultFunc(resultType,bytes) {
    var buf = new quid2.ByteBuffer(bytes);
    //var obytes = bytes.slice(0);
    //var r  = fn.resultType.value().decode(bytes);
    var r  = resultType.decode(buf);
    //q.assert((p.encodedAsBytes(r)+"")==(obytes+""),"Failed encode/decode "+ fn.name + " " + r.show() + "  " + obytes + " " + obytes.length + " " + p.encodedAsBytes(r) + " " + p.encodedAsBytes(r).length);
    q.assert(buf.length()==0,"connect.js:rpc:unused bytes in return value:"+bytes);
    return r;
  };

  /*
  function Call(name,resultType,args) {
    this.name = name;
    //this.types = types;
    this.resultType = resultType;
    saturate(this,args);
  };

  // PROB: does not check number of arguments.
  function saturate(me,args) {
    console.log("saturate",me,args);
    //q.assert(me.types.length-1==args.length,"saturate " + me.name +  ": incorrect number of parameters");
    applyParts(me,args);
  };

  Call.prototype.show = showParts;

  // FIX: unnecessary, just assume that we are ready.
  // Call.prototype.ready = function() {return $.when(this.resultType.ready());};

  Call.prototype.call = callFunc;

  // TODO: can all pure functions results be automatically cached?
  Call.prototype.cachedCall = cachedCallFunc;
  */


  /*
  Func.prototype.ready = function() {
      var me = this;
      if (me.resultType) return $.when(me);

    return getJType(me.types[me.types.length-1]).pipe(function (rt) {
	q.assertDefined(rt,"getReturnType");
	me.resultType = rt;
	return me;
      });
  };*/


  /*
*/

  /*
  function cachedCallFunc() {
    var me = this;
    console.log("[cachedCall ",me.name);

    var key = me.show();
    var cached = exprStore.get(key);

    return (cached ?
	    me.resultType.get().pipe(g.partial(decodeResultFunc,me,goog.crypt.base64.decodeStringToByteArray(cached)))
	    : me.call().then(function (r) {
	      exprStore.set(key,goog.crypt.base64.encodeByteArray(p.encodedAsBytes(r))); // SLOW: received data is decoded and then reencoded.
	    })
	   );
  };
*/

  function qname (mdl,name) {
    return mdl+"."+name;
  };


  function addFunc(mdl,moduleName,f) {
    var name  = f[0];
    var types = f[1];

    var fn = new Func(qname(moduleName,name),typeRefs(types)[0]);

    /* Function as Class
    var fn = function () {applyParts(this,arguments);};
    fn.prototype.name = qname(moduleName,name);
    fn.prototype.show = showParts;
    fn.prototype.call = callFunc;
    fn.prototype.cachedCall = cachedCallFunc;
    fn.prototype.value = valueFunc;

    fn.prototype.ready = function() {
      if (fn.prototype.resultType) return $.when(fn);

      return getReturnType(types[types.length-1]).pipe(function (rt)	{//.pipe(function (rt) {return rt.ready();})
	q.assertDefined(rt,"getReturnType");
	fn.prototype.resultType = rt;
	return fn;
      });
    */

    mdl.value[name] = fn;
  };

  /*
  function DataType (name,vars,numCons,cons) {
    this.name = name;
    this.vars = vars;
    this.numCons = numCons;
    this.constr = cons;
    this.cons = [];
    for (var i=0;i<cons.length;i++) this.cons[cons[i].prototype.tag]=cons[i];
  };

  DataType.prototype.app = function () {
    var me = this;
    var types = arguments;
    q.assert(me.vars.length==types.length,"Data.Type.app "+me.name +  ": incorrect number of parameters: ", types);
    var binds = {};
    for (var i=0;i<types.length;i++) binds[me.vars[i]] = types[i];

    var cs = me.constr.map(function (c) {return c.solve(binds);});
    var dt = new DataType(me.name,[],me.numCons,cs);
    cs.map(function (c) {c.prototype.dataType=dt;});

    return dt;
  };

  DataType.prototype.decode = function (rv) {
    var tag = this.numCons==1 ? 0 : getByte(rv);
    return this.cons[tag].decode(rv);
  };
 */

  /*
  DataType.prototype.ready = function () {
    var dt = this;
    //console.log("[DataType.prototype.ready ",dt.name);
    if (dt.decode) {
      //console.log(dt.name," DataType.prototype.ready]");
      return $.when(dt);
    };

    return q.whenN(dt.cons.map(function (c) {return c.ready();})).pipe(function () {
      dt.decode = dataTypeDecode;
      //console.log(dt.name," DataType.prototype.ready]");
      return dt;
    });
  };

  function dataTypeDecode(rv) {
    var tag = this.numCons==1 ? 0 : getByte(rv);
    return this.cons[tag].decode(rv);
  };
 */

  function mkDataType(moduleName,dataTypeName,vars,numCons,cs) {
    if (vars.length==0) return new DataType(moduleName,dataTypeName,numCons,cs,{});

    //console.log("Parametric data type",dataTypeName,vars);
    return function() {
      var types = arguments[0];
      //console.log(dataTypeName,types);
      q.assert(types.length==vars.length,"incorrect number of type pars");

      var binds = {};
      for (var i=0;i<types.length;i++) binds[vars[i]] = types[i];

      return new DataType(moduleName,dataTypeName,numCons,cs,binds);
      };
  };

  function DataType (moduleName,name,numCons,cons,binds) {
    var me = this;
    me.moduleName = moduleName;
    me.name = name;
    me.numCons = numCons;
    me.binds=binds;
    me.dataTypeName = moduleName + "." + name;
    me.qualName = me.dataTypeName;
    for (var b in me.binds) {me.qualName += " ("+me.binds[b].qualName+")";}
    me.cons = [];
    for (var i=0;i<cons.length;i++) me.cons[cons[i].prototype.tag]=cons[i];
  };

  DataType.prototype.equal = function (other) {
    if (this === other) return true;

    if (q.isUndefined(other) || this.dataTypeName!=other.dataTypeName) return false;

    for (var b in this.binds) {
      if (! this.binds[b].equal(other.binds[b])) return false;
    };

    return true;
  };

  DataType.prototype.undef = function (ctx) {
    var me = this;
    return {
      show:function () {return ctx.app.value["undefined"].show() + " :: "+ me.qualName;}
    };
  };

  DataType.prototype.ready = function () {
    var me = this;
    //console.log("[DataType.prototype.ready",me.name);

    if (me.decode) {
      //console.log(me.name," already DataType.prototype.ready]");
      return $.when(me);
    };

    me.decode = function() {
      //console.error("DataType.decode",me);
      throw ("Not quite ready to decode " + me.name);
    };

    return q.whenN(me.cons.map(function (c,tag) {
	return c.decodeF(me.binds).pipe(function(df) {return [tag,df];});})).pipe(function (ds) {
      me.decodes = [];
      for (var i=0;i<ds.length;i++) me.decodes[ds[i][0]]=ds[i][1];
      me.decode = function (rv) {
	var tag = me.numCons==1 ? 0 : rv.nextByte();
	var v = me.decodes[tag](me,rv);
	return v;
      };
      //console.log(me.name," DataType.prototype.ready]");
      return me;
    });
  };

  function getViewers(ctx,fs) {
    return q.whenN(fs.map(g.partial(getViewer,ctx)));
  };

  function getViewer(ctx,jsF) {
    return getJSFunc(ctx,jsF).pipe(function (f) {
      //jsF.f = f(ctx);
      jsF.f = f;
      return jsF;
    });
  }

  function getJSFunc(ctx,jsF) {
	var view = jsF.match(["fun","pars"]);
	function onPrim(prim) {
	  var v = quid2.ui.viewers[prim.value];
	  if (!v) console.warn("Could not locate viewer "+prim.value + " using default viewer.");
	  return v || quid2.ui.viewers["defaultV"];
	};
	function onCode(code) {
	  eval("var f="+code.value);
	  return f;
	};
	var f = view.fun.match(onPrim,onCode);
	return quid2.modules.getNJSTyped(view.pars).pipe(function (pars) {
          // NOTE: when is currently unused
          if (pars.length==0) return $.when(f);
	  else {
	    var pars2 = pars.slice(0);
	    pars2.push(ctx);
	    return $.when(f.apply(f,pars2));
	  };
	});
  };

  function loadDisplay(ctx,me) {
    if (! me.display_) me.display_ =
      ctx.app.value.view.call(me.undef(ctx)).pipe(function (display) {
      //console.log("DISPLAY",display.show());
      var d = display.match(["mainView","menu","sideViews"]);
      return $.when(getViewer(ctx,d.mainView)
		    ,getViewers(ctx,d.menu)
		    ,getViewers(ctx,d.sideViews)).pipe(function (main,menu,sides) {return {mainView:main,menu:menu,sideViews:sides};});
    });

    return me.display_;
  };

  DataType.prototype.display = function (ctx) {
    return loadDisplay(ctx,this);
  };

  function addDisplay(typ,name) {
    typ.prototype.display = function (ctx) {
    return loadDisplay(ctx,this);
    };
    typ.prototype.undef = function (ctx) {
      return {show:function () {return ctx.app.value["undefined"+name].show();}};
    };
  }

  addDisplay(p.Unit,"Unit");
  addDisplay(p.Char,"Char");
  addDisplay(p.Word32,"Word32");
  addDisplay(p.Int64,"Int64");
  addDisplay(p.Float,"Float");
  addDisplay(p.Double,"Double");
  addDisplay(p.String,"String");
  addDisplay(p.ByteString,"ByteString");
  addDisplay(p.List,"List");
  addDisplay(p.Tuple,"Tuple");


  function showParts_(name,parts) {
    var s = name;
    for (var i=0;i<parts.length;i++) s += " (" + parts[i].show() + ")";
    return s;
  };

  function falseF() {return false;}
  function mkDataCons(dataTypeName,name,tag,typesRefs,numCons) {
    var c = function () {
      var l = arguments.length;
      q.assert(l==0 || l==typesRefs.length,["Wrong num of params",dataTypeName,name,arguments]);

      // Initial generic value.
      // this.type = dataTypeName;

      this.parts = [];
      for (var i=0;i<l;i++) this.parts.push(arguments[i]);
      //applyParts(this,arguments);
      /*
      var l = arguments.length;
      q.assert(l==1 || l==1+typesRefs.length,["Wrong num of params",dataTypeName,name,arguments]);
      this.type = arguments[0];
      for (var i=1;i<l;i++) this.parts.push(arguments[i]);
      */
    };
    c.isValue = falseF;
    c.prototype.dataTypeName = dataTypeName;
    c.prototype.sameTypeOf = function (other) {
      q.assert(other);
      //console.log("sameTypeOf",this,this.dataTypeName,other,this.show(),other.show());
      return this.type ? this.type.equal(other.type) : (q.isUndefined(other.type) && this.dataTypeName==other.dataTypeName);
      //return this.type.equal(other.type);
    };
    c.prototype.name = name;
    c.prototype.tag = tag;
    c.prototype.numCons = numCons;

    c.prototype.show = function() {
      var o = this;
      var s = o.name;
      for (var i=0;i<o.parts.length;i++) s += " (" + o.parts[i].show() + ")";
      return s;
    };

    c.prototype.showShort = function() {
      var o = this;
      var s = q.nameSplit(o.name)[1] + "(";
      for (var i=0;i<o.parts.length;i++) {
	var p = o.parts[i];
	s += (p.showShort ? p.showShort() : p.show());
      };
      return s  + ")";
    };

    c.prototype.views = function () {return [goog.partial(viewParts,true),goog.partial(viewParts,false)];};

    c.prototype.display = function (ctx) {
      var me = this;
      return me.type.display(ctx,me);
      //return getDataType(dataTypeName).pipe(function (dt) {
        // BUG: if it fails exception is ignored.
	return dt.display(ctx,me);
      //});
    };
    c.prototype.match = matchParts;
    c.prototype.encode = encodeParts;
    c.prototype.equal = equalParts;
    /*c.solve = function (binds) {
      return mkDataCons(name,tag,typesNames.map(function(tn) {var r = binds[tn];return q.isDefined(r) ? r : tn;}));
    };*/

    c.prototype.as = function(t) {
      q.assert(this.dataTypeName==t.dataTypeName,["as",this,t]);
      this.type=t;
      return this;
    };

    c.decodeF = function (binds) {
      return getRefs(typesRefs).pipe(function (types) {
	  return q.whenN(types.map(function (t) {
	    //if (! (t instanceof pt.Var)) return t.ready();
	    //return binds[t.name].ready();
            return t.ready(binds);
	   })).pipe(function(readyTypes) {
	     //console.log("decodeF",binds,readyTypes);
	     return function (typ,rv) {
	       var o = new c();
	       o.as(typ);
	       //console.log("decoding",typ,binds,readyTypes);	 
	       o.parts = readyTypes.map(function(t) {return t.decode(rv);});
		 //console.log("decode",o,o.show(),typ,typ.dataTypeName,ready);
	       return o;
	     };
	   });
      });
/*
	function pipeline(types) {
	    if (types.length==0) return o;
	    return $.when(types[0].decode(rv)).pipe(function (v) {
	      o.parts.push(v);
	      return pipeline(types.slice(1));
	    });
	};

	c.decode = function () {return pipeline(stypes);};
*/

    };

    /*
    c.ready = function () {
      if (c.decode) return $.when(c);

      return getJTypes(typesNames).pipe(function(types) {
	c.decode = function (rv) {
	  var o = new c();
	  o.parts = types.map(function(t) {return t.decode(rv);});
	  return o;
	};
	return c;
      });
    };*/

    return c;
  };


  function viewParts(shortName,o,elem,level) {
    var s = shortName ? q.nameSplit(o.name)[1] : o.name;
    elem.append("(" + s);
    for (var i=0;i<o.parts.length;i++) {
      elem.append("&nbsp;");
      var span = $("<span/>");
      elem.append(span);
      p.view(o.parts[i],span,level);
    };
    elem.append(")");
  };


/*
  function resultType() {
    return getType(this.resultTypeName.slice(2));
  };*/


  /*function applyParts(obj,args) {
    //q.assert(obj.types.length==args.length,obj.name +  ": incorrect number of parameters.");
    obj.parts=[];
    for (var i=0;i<args.length;i++) obj.parts[i]=args[i];
    //return obj;
  };*/

 function encodeParts(rv) {
   if (this.numCons>1) rv.push(this.tag);
   for (var i=0;i<this.parts.length;i++) this.parts[i].encode(rv);
 };

 function equalParts(other) {
   if (this.constructor !== other.constructor) return false;

   if (this.parts.length !== other.parts.length) return false;

   for (var i=0;i<this.parts.length;i++) if (! this.parts[i].equal(other.parts[i])) return false;

   return true;
 };

 function matchParts() {
   var f = arguments[this.tag];
   if ($.isFunction(f)) return f.apply(this,this.parts);
       else {
	 var o = {};
	 for (var i=0;i<this.parts.length;i++) {
	   var part = this.parts[i];
	   var handler = f[i];
	   if (typeof handler == "string")
	     if ("_" == handler) continue;
	     else o[handler] = part;
	   else $.extend(o,part.match.apply(part,handler));
	 };
	 return o;
       };
 };

  function showParts() {return showParts_(this.name,this.parts);}

  function test() {
      initModules();
      
      var t = quid2.module;
      var pt = quid2.primitive.type;
      var appt = t.Service.Org.Quid2.App.Last.type;
      var changeT1 = appt.Change([pt.String,pt.Unit]); 
      var changeT2 = appt.Change([pt.String,appt.Typed]); 
      changeT1.ready().done(function (t1) { 
	  changeT2.ready().done(function (t) {
	      var ch1 = t.decode(new quid2.ByteBuffer([2,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,12,115,116,111,99,107,87,97,114,110,105,110,103,0,0,0,0,0,0,0,6,91,67,104,97,114,93,0,0,0,0,0,0,0,44,0,0,0,0,0,0,0,36,83,116,111,99,107,32,117,110,105,112,46,109,105,32,104,97,115,32,114,101,97,99,104,101,100,32,112,114,105,99,101,32,49,46,50,50,0,0,0,0,0,0,0,4,116,111,100,111,0,0,0,0,0,0,0,6,91,67,104,97,114,93,0,0,0,0,0,0,0,33,0,0,0,0,0,0,0,25,114,101,115,116,32,116,105,109,101,44,32,116,104,101,110,32,68,101,118,101,108,111,112,101,114,0,0,0,0,0,0,0,6,117,114,103,101,110,116,0,0,0,0,0,0,0,6,91,67,104,97,114,93,0,0,0,0,0,0,0,31,0,0,0,0,0,0,0,23,65,116,32,48,48,32,114,101,115,116,32,116,104,101,110,32,82,101,110,116,105,101,114]));
	      q.assert(ch1.parts[0].value[1].value[0].value=="todo");
	      console.log(ch1,ch1.show());
	  });
      });

    var either = t.Data.Either.Last.type.Either;
    var left = t.Data.Either.Last.value.Left;
    var right = t.Data.Either.Last.value.Right;
    var t0 = new either([pt.String,pt.Int64]);
    var t1 = new either([pt.String,pt.Int64]);
    var t2 = new either([pt.String,t1]);
    var v0 = new left(new p.String("def"));
    var v1 = new right(new p.Int64(123));
    q.assert(v1.sameTypeOf(v0));
    q.assert(v1.as(t1).sameTypeOf(v0.as(t1)));

    var v2 = new left(new p.String("def"));
    var v3 = new right(new right(new p.Int64(123)));
    q.assert(! v2.sameTypeOf(v0));
    q.assert(v2.sameTypeOf(v3));

    var maybe = t.Data.Maybe.Last.type.Maybe;
    var t4 = new maybe([pt.Int64]);
    var just    = t.Data.Maybe.Last.value.Just;
    var nothing = t.Data.Maybe.Last.value.Nothing;
    var v4 = new just(new p.Int64(123));
    var v5 = new just(new p.Int64(123));
    q.assert(! v1.sameTypeOf(v4));
    q.assert(v5.sameTypeOf(v4));
  };

 return {
   initModules:initModules
   ,addModuleFromExports:addModuleFromExports
   //,initModules2:initModules2
   ,getModuleByName:getModuleByName
   ,getFunction:getFunction
   ,functionCall:functionCall
   ,getTyped:getTyped
   ,getJSTyped:getJSTyped
   ,getNJSTyped:getNJSTyped
   ,getJSFunc:getJSFunc
   ,getViewer:getViewer
   ,test:test
  };

})();

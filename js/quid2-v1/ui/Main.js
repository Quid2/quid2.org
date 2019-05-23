goog.provide("quid2.ui.Main");
goog.require('quid2.ui.Console');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('goog.History');
goog.require("quid2");
goog.require('quid2.ui.fatalError');
goog.require("quid2.connection");
goog.require('quid2.Request');
goog.require("quid2.ui.JComponent");
goog.require('quid2.ui.viewers');
goog.require('quid2.ui.View');
goog.require('quid2.modules');
goog.require("quid2.ui.DivTab");

/**
 * Entry point: establish a connection to quid2, interpret URL parameters, handle history and pass control to App.
 */
quid2.ui.Main = function(mainDiv,history) {
  var q = quid2;
  var g = goog;
  var p = quid2.primitive.value;
  var m = quid2.modules;
  var app = quid2.module.Service.Org.Quid2.App.Last.value;
  var req = new q.Request();
  var cons = new q.ui.Console(mainDiv);
  var cop = goog.bind(cons.cop,cons);
  var v = quid2.ui.View;

  // Load latest version of App.
  if (req.arg.ctx && req.arg.ctx != "private") throw ("Unsupported ctx option :" + req.arg.ctx);

  function onConnection(ctx) {
	  ctx.cop = cop;

	  ctx.mkViewer = function (hView) {
	    return hView.f(this);
	  };

	  ctx.appView = function (viewer,obj,display) {
	    var ctx = this;
	    var r = viewer.next(obj);
	    display.setLabel(r.label);
	    display.setTitle(r.title);
	    return r;
	  };

	  ctx.addMainView = function (hView,obj) {
	    var ctx = this;
	    var v = ctx.mkViewer(hView);
	    q.assert(v.ui || v.elem,"no ui");
	    var ui = v.ui || new quid2.ui.JComponent(v.elem);
	    ui.render();
            ctx.appView(v,obj,{setLabel:$.noop,setTitle:$.noop});
	    var dom = new goog.dom.DomHelper();
	    ui.resize(dom.getViewportSize());
	    return v;
	  };

	  ctx.postView = function (viewer) {
	    var ctx = this;
	    viewer.post && viewer.post();
	  };

          // TODO: complete
          ctx.addMenu = function (hCmds,hObj) {
	    var ctx = this;
	    //return hCmds.map(function (hView) {return CmdC.instance(ctx,hView,hObj);});
	  };

	  // TODO: complete
	  ctx.addSideView = function (hView,hObj) {};

	  ctx.addSideViews = function (hViews,hObj) {
	    var ctx = this;
	    return hViews.map(function (hView) {return ctx.addSideView(hView,hObj);});
	  };

    	  var values = [];

	  function saveHistory(val) {
	    values.push(val);
	    history.setToken(""+(values.length-1));
	  };

    	  history.setEnabled(true);
	  goog.events.listen(history,goog.history.EventType.NAVIGATE,function (e) {
		if (e.isNavigation) {
		  console.log("HISTORY",e,e.token);
		  var v = values[Number(e.token)];
		  v[0].displayOnly(v[1]);
		  };
		});

    	  ctx.top = function () {
	    var ctx = this;
	    if (! ctx.up) return ctx;
	    return ctx.up.top();
	  };

	  ctx.sub = function () {
	    var ctx = q.ext(this,{});
	    ctx.up = this;
	    return ctx;
	  };

	  ctx.addTab = function(ctrl) {q.assert(ctrl);};

          ctx.addSideTab = function(tab) {return this.addTab(tab);};

	  ctx.display = function (obj) {
	    q.assert(obj);
	    var ctx = this.sub();
	    ctx.displayOnly(obj).pipe(function() {
	      saveHistory([ctx,obj]);
	    });
	  };

    	  ctx.displayOnly = function (obj) {
	    var ctx = this;
	    return obj.display(ctx).pipe(function(display) {
	      ctx.main = ctx.addMainView(display.mainView,obj);
	      var sides = ctx.addSideViews(display.sideViews,obj);
	      var cmds = ctx.addMenu(display.menu,obj);
	      ctx.main.sides = sides.concat(cmds);
	    });
	  };

	  ctx.displayRef = function(target,title,ref) {
	    var ctx = this;
	    var t = v.Target;
	    switch (target) {
	    case t.WINDOW: ctx.externalRef(title,ref);break;
	    case t.TAB: ctx.topRef(title,ref);break;
	    case t.DIV:
	      	      var nctx = ctx.sub();
		      nctx.addTab = function(ctrl) {
			return new q.ui.DivTab(ctrl);
		      };
		      nctx.topRef(title,ref);
		      break;

	      throw "Unsupported target "+target;
	    default: throw "Unsupported target "+target;
	    };
	  };

    	  ctx.externalRef = function(title,ref) {
	    q.assert(g.isString(title) && g.isString(ref));
	    req.arg.title=title;// || ref;
	    req.arg.ref=ref;
	    window.open(req.getURL());
	  };

    	  ctx.topRef = function(title,ref) {
	    return this.topNamedExpr(title,m.functionCall(ref));
	  };

    	  ctx.topExpr = function(title,call) {
	    q.assert(g.isString(title) && call);
	    var ctx = this;
	    return ctx.cop(title,call).pipe(function (r) {
	      return ctx.display(r);
	    });
	  };

          ctx.topNamedExpr = function(title,call) {
	    q.assert(g.isString(title) && call);
	    var ctx = this;
	    return ctx.cop("Evaluating '" + title + "'",call).pipe(function (r) {
	      var nctx = ctx.sub();
	      nctx.addTab = function(ctrl) {
  	        var d =	ctx.addTab(ctrl);
		var oSetLabel = d.setLabel;
		d.setLabel = function () {
		  oSetLabel.call(d,title);
		};
		return d;
	      };

	      return nctx.display(r);
	    });
	  };

	  if (req.arg.ref) ctx.topRef(req.arg.title || req.arg.ref,req.arg.ref);
	  else ctx.displayOnly(new ctx.app.value.App());
	};

  function updateApp(conn,quid2ID) {
      var ctx = {conn:conn,quid2ID:quid2ID};
      var appMdl = new p.String("Service.Org.Quid2.App");
      return ((req.arg.ctx && req.arg.ctx == "private") ? app.privateAppModule.call(appMdl) : app.publicAppModuleByUser.call(ctx.quid2ID,appMdl)).pipe(function(mdlRef) {
	var appName = mdlRef.parts[0].value;
	console.log("Current App",appName);
	return quid2.modules.getModuleByName(appName,true).pipe(function(mdl){
          // Update app
	  // app = quid2.module.Service.Org.Quid2.App.Last.value;
	  console.log("Updated to new App",mdl.moduleName_);
	  return q.ext(ctx,{app:quid2.module.Service.Org.Quid2.App.Last});
	});
      });
  };

  return cop("Connect to Quid2",$.when(q.connection,app.quid2ID.cachedCall()).pipe(updateApp)).then(onConnection,quid2.ui.fatalError);
};

quid2.ui.Main.test = function() {

  quid2.ui.Main($("#main"),new goog.History(true,"blank.html",goog.dom.getElement("history_state"),goog.dom.getElement("history_frame")))
    .done(function(){
    });
};

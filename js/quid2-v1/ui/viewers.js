goog.provide('quid2.ui.viewers');
goog.provide('quid2.ui.View');
goog.require('quid2');
goog.require('quid2.primitive');
goog.require('quid2.module');
goog.require('quid2.ui.Win');
goog.require('quid2.ui.Console');
goog.require("quid2.ui.MenuFrame");
goog.require("quid2.ui.JComponent");
goog.require('quid2.ui.view.Service.Org.Quid2.App.UserModules');
goog.require('quid2.ui.GTree');
goog.require('quid2.ui.RefDisplay');
goog.require("quid2.ui.AppModule");
goog.require("quid2.ui.Event");
goog.require("quid2.ui.Mixin");
goog.require('quid2.ui.view.Graphics.Gloss.Data.Picture.Picture');

/*
 * * Test: QUnit from jquery and https://github.com/jquery/testswarm/wiki to run tests on multiple browsers
 * * Closures are very slow, use classes instead with a .run method.
 * Viewers are stateless (a class-function).
 * They render in the provided ctx.area.
 * They are passed any required parameters plus ctx and obj.
 * There are two kind of viewers:
 * - main viewers (tabs) that provide the main display for an object: can be deleted and focused upon, do not change the displayed object.
 * - side viewers (tabs or commands) that provide additional info about objects: they are persistent, cannot be focused upon, they display info regarding the currently focused object.
 */

// Display target.
quid2.ui.View.Target = {
  WINDOW: 1
  ,TAB:2
  ,DIV:3
  ,SPAN:4
};

quid2.ui.viewers = (function () {
  var q = quid2;
  var g = goog;
  var p = quid2.primitive.value;
  var pt = quid2.primitive.type;
  var m = quid2.module;
  var app = quid2.module.Service.Org.Quid2.App;
  var mix = q.ui.Mixin;

  // Viewer kinds used??
  var CMD = 1;

  function div0() {
    return $("<div/>");
  };

  function div() {
    return div0().addClass("quid2-content");
  };

  function labelOf(o) {
    return q.shortString(25,o.showShort ? o.showShort() : o.show());
  };

  function titleOf(o) {return o.show();}

  function labelTitleOf(o) {
      return {
	  label: labelOf(o)
	  ,title:titleOf(o)
	};
    };

  var defaultV = function (ctx) {
    var elem = div();
    return {
      elem:elem
      ,next: function (o) {
        p.view(o,elem);
	return labelTitleOf(o);
      }
    };
  };

  var priceV = function (ctx) {
    var elem = div();
    return {
      elem:elem
      ,next: function (o) {
	ctx.app.value.getPrettyPrice.call(o).then(function(r) {
	  elem.text(r.value);
	},function (err) {elem.text(err);});

	return labelTitleOf(o);
      }
    };
  };

  var textV = function (ctx) {
    var elem = div();
    return {
      elem:elem
      ,next: function (s) {
	elem.text(s.value);
	return {
	  label: q.esc(q.shortString(25,s.value))
	};
      }
    };
  };

  // TOFIX: need to be able to pass a title.
  var pngV = function (ctx) {
    var elem = div();
    return {
      elem:elem
      ,next: function (obj) {
	obj.match(function (dt) {elem.html('<img src="data:image/png;base64,'+dt.value+'"/>');});
	return {
	  label: "PNG Image"
	};
      }
    };
  };

  var glossPictureV = function (ctx) {
    var elem = div();
    return {
      elem:elem
      ,next: function (obj) {
	quid2.ui.view.Graphics.Gloss.Data.Picture.Picture(elem,obj);
	return {
	  label: "Gloss Picture"
	};
      }
    };
  };

    function log(msg,v) {
      console.log(msg,v);
      return v;
    };

      var sider = {
	/*accepts:function(hObj) {
	  return log(["accepts",this.hObj.show(),hObj.show()],this.hObj.sameTypeOf(hObj));
	}*/
	match: function(hView,hObj) {
	  //return hView.equal(this.hView) && this.accepts(hObj);
	  return hView.equal(this.hView);// && hObj.equal(this.hObj);// this.accepts(hObj);
	}
      };

    function CmdC(ctx,hView,hObj) {
        q.assert(ctx && hView && hObj,["CmdC",arguments]);
	var me = this;
        me.hView = hView;
      	me.hObj = hObj;
	me.viewer = ctx.mkViewer(hView);
	me.display = ctx.menu.addCmd(me);
	me.onNext(hObj);
      };

      CmdC.instance = function (ctx,hView,hObj) {
        q.assert(ctx && hView && hObj,"CmdC.instance");

	var ctrl = ctx.menu.traverse(function (curr) {
	  if (curr.getModel().match(hView,hObj)) return curr.getModel();
	});

	if (ctrl) {
	  ctrl.onNext(hObj);
	  return ctrl;
	};

	return new CmdC(ctx,hView,hObj);
      };

      CmdC.prototype.onNext = function (hObj) {
	q.assert(hObj,"CmdC.onNext");
	console.log("CmdC.prototype.onNext",hObj);
	var me = this;
	//if (me.accepts(hObj)) {
	  me.hObj = hObj;
	  me.display.onNext(me.viewer.next(hObj));
	//};
	  //else me.display.onCompleted(); // and Login??
      };
      mix.mix(CmdC,sider);

  var application = function (mainLabel,mainTitle,mainObj) {

    return function (ctx) {

      var win = new quid2.ui.Win();
      //win.render();

      function mkUI(viewer) {
	var ui = viewer.ui || new quid2.ui.JComponent(viewer.elem);
	//mix.mix(ui,controller);
        ui.visible = function() {viewer.visible && viewer.visible();};
        ui.hidden = function() {viewer.hidden && viewer.hidden();};
	return ui;
      };

      // Controllers
      /*var controller = {
	visible:function() {
	  this.viewer.visible && this.viewer.visible();
	}
	,hidden:function () {
	  this.viewer.hidden && this.viewer.hidden();
	}
      };*/

      function MainC(ctx,hView,hObj) {
	var me = this;
        me.hView = hView;
	me.hObj = hObj;
	me.viewer = ctx.mkViewer(hView);
	q.assert(me.viewer.ui || me.viewer.elem,"no ui");
	me.ui = mkUI(me.viewer);
	//me.area = me.viewer.elem;
	me.kind = quid2.ui.Win.MAIN;
	me.persistent = false;
	me.display = ctx.addTab(me);
	var r = ctx.appView(me.viewer,hObj,me.display);
	me.ctx = r.ctx || ctx;
      };
      //mix.mix(MainC,ctrl);

      MainC.prototype.match = function(hView,hObj) {
	return hView.equal(this.hView) && hObj.equal(this.hObj);
      };

      //MainC.prototype.onSelect = function(me) {ctx.focus(me.model.hObj);};

      /*MainC.prototype.accepts = function(hObj) {
	return this.hObj.constructor == hObj.constructor;
      };*/

      MainC.prototype.select = function() {this.display.select();};

      // Update to new obj.
      MainC.prototype.onNext = function(hObj) {
	var me = this;
	//if (me.accepts(hObj)) {
	me.hObj = hObj;
	ctx.appView(me.viewer,me.hObj,me.display);
	me.focus();
      };

      // Refocus on this, no obj change.
      MainC.prototype.focus = function() {
          var me = this;
	  me.sides.map(function (s) {
	    s.onNext(me.hObj);
	});
      };

      function SideC(ctx,hView,hObj) {
	q.assert(hView && hObj,["SideC",hView,hObj]);
	var me = this;
        me.hView = hView;
	me.hObj = hObj;
	me.viewer = ctx.mkViewer(hView);
	q.assert(me.viewer.ui || me.viewer.elem,"no ui");
	me.ui = mkUI(me.viewer);
	me.kind = me.viewer.kind || quid2.ui.Win.SIDE; // BAD
	me.persistent = true;
	me.display = ctx.addSideTab(me);
	ctx.appView(me.viewer,hObj,me.display);
      };
      mix.mix(SideC,sider);

      SideC.prototype.onNext = function(hObj) {
	q.assert(hObj,"SideC.onNext");
	var me = this;
	//if (me.accepts(hObj) && ! me.hObj.equal(hObj)) {
	  me.hObj = hObj;
	  ctx.appView(me.viewer,me.hObj,me.display);
	//};
      };

      ctx.addTab = function(ctrl) {
	q.assert(ctrl);
	return win.addTab(ctrl);
      };

      ctx.menu = win.menu;

      /*
      ctx.focus = function (hObj) {
	q.assert(hObj,"ctx.focus");
	var ctx = this;
      	function focus(curr) {
	  curr.getModel().onNext(hObj);
	}
	//ctx.objDisplay && ctx.objDisplay.focus && ctx.objDisplay.focus(hObj);
	ctx.menu.traverse(focus);
	win.traverseSides(focus);
      };

      $("body").on(q.ui.Event.FOCUS,function(event,hObj) {
	q.assert(event && hObj,["onFOCUS",event,hObj]);
	ctx.focus(hObj);
      });
      */

      ctx.addMainView = function (hView,hObj) {
        var ctx = this;

	var ctrl = win.traverseMains(function (curr) {
	  if (curr.getModel().match(hView,hObj)) {
	    var m = curr.getModel();
	    $.extend(ctx,m.ctx); //NOTE: should ctx be wiped out first?
	    return m;
	  }
	});

	if (ctrl) {
	  ctrl.select();
	  return ctrl;
	};

	return new MainC(ctx,hView,hObj);
      };

      ctx.addSideView = function (hView,hObj) {
	var ctx = this;

	var ctrl = win.traverseSides(function (curr) {
	  if (curr.getModel().match(hView,hObj)) return curr.getModel();
	});

	if (ctrl) {
	  ctrl.onNext(hObj);
	  return ctrl;
	};

      	return new SideC(ctx,hView,hObj);
      };

      ctx.addMenu = function (hCmds,hObj) {
	var ctx = this;
	return hCmds.map(function (hView) {return CmdC.instance(ctx,hView,hObj);});
      };

      ctx.display(mainObj);

      return {ui:win
	      ,next:function () {
	      return {
		label:"Quid2 App"
		,title:"Quid2 App"
	      };
	    }
      };
    };
  };

  var messages = function (ctx) {
    var elem = div();
    var cons = new q.ui.Console(elem);
    // NOTE: we modify ctx
    ctx.cop = goog.bind(cons.cop,cons);
    return {kind:q.ui.Win.SYSTEM
	    ,elem:elem
	    ,next:function () {
	      return {
		label:"Messages"
		,title:"Messages, Warning and Errors."
	      };
	    }
    };
  };

  var bookmarkV = function (ctx) {
    var elem = div0();
    return {elem:elem
	    ,next:function (bookmark) {
	      var b = bookmark.match(["url","title"]);
	      var loadError = setTimeout(function () {
		elem.html("Uhm, the page doesn't seem to be loading, click <a target='_blank' href='"+b.url.value+"'>here</a> to open it into another window.");
	      },20000);
	      var iframe = $("<iframe/>").addClass("quid2-iframe").attr("src",b.url.value).load(function (e) {clearTimeout(loadError);});
	      elem.empty().append(iframe);
	      return {
		label: b.title.value
		,title:b.url.value
	      };
	    }
    };
  };

  var youTubeVideoV = function (ctx) {
    var elem = div();
    return {elem:elem
	    ,next:function (obj) {
	      var o = obj.match(["id","title"]);
	      elem.html('<iframe type="text/html" width="640" height="440" src="http://www.youtube.com/embed/' + o.id.value + '?autoplay=1&origin=http://quid2.org" frameborder="0"/>');//.addClass("quid2-iframe").attr("src",b.url.value));
	      return {
		 label: o.title.value
		,title: o.title.value
	      };
	    }
    };
  };

  var allPublic = function (ctx) {
    var elem = div();

    var tree = new q.ui.GTree(elem,function(name,node) {
	  console.log("onSelectChild " + name);

	  var user = node.getModel().isChild;
	  if (user) {
	    var pname = new p.String(q.toName(node.getModel().path.slice(0,-1)));
	    ctx.topExpr("Reading version of "+ pname.show() +" by user " + user.show(),ctx.app.value.publicByUser.call(user,pname)
			.pipe(function (maybeTyped) {
			  return maybeTyped.match(function () {throw "Unexpected result Nothing";}
						  ,quid2.modules.getTyped
						 );
			}));
	  } else ctx.app.value.getVersions.call(new p.String(name)).done(function (versions) {
	      versions.map(function (version) {
		var n = tree.addPath(node,[version.value[0].value]);
		$.extend(n.getModel(),{isChild:version.value[1]});
	      });
	  });
	  //ctx.topExpr("Reading entries for "+name,app.Last.value.getVersions.call(new p.String(name)));
	  });

    ctx.cop("Reading all public information",ctx.app.value.allPublicPaths.call()).done(function (paths) {
      console.log("ALLPATHS",paths);
      tree.addHPaths(paths);
    });

    return {elem:elem
	    ,next:function () {
	      return {label:"All Public Info",title:"All public information."};
	    }
	   };
  };

  var subjects = function (ctx) {
    var elem = div();

    // Req:
    // Keep a channel open in presence of loss of connectivity 
    // Keep data flowing insofar as there is a user
    // ? No lost data (this would require to keep forever all values)
    // No duplicates.
    // Do not send data to unreachable targets.
    // Data is sent quickly after is produced.
    // Sol: if we do not receive any message for a given time, we resubscribe with a different callback.
    // Messages sent to the previous cb will fail (will they?) and the relative subscription will be removed.
    // Duplicated messages are not displayed.
    // The server should sent empty Heartbeat messages periodically to reassure that the channel is open
    // ? with a hearbeat also carring a promise for a future heartbeat at a given later time.
    // 
    // Sol: (use a professional protocol like zeromq or aqmp?)
    // Every item is sent together with a tag:
    // data Tagged = Tagged Typed (Maybe [Byte]) -- If is nothing data is self-tagged. 
   
    // When we (re)subcribe, the user provides the last seen tag if any, 
    // subscribe :: Maybe Tag  
    // the producer sends back the current value if its counter/hash is != the tag.
    // the producer send data to its subscribers as soon as is received.
    // it stops when an error is returned from the callback.
    // if consumers does not receive anything for x secs it subscribes again.

    // Heartbeat: the client every minute or so resubscribe (an idempotent operation).
    // But then this is identical to not having a subscription at all and simply reading the value periodically (pull)
    // Or: if no data has been received for a while or we know that there has been a transmission error, then we resubscribe. 
    
      function Timer(timeInSecs,f) {
	  this.timeInSecs = timeInSecs;
	  this.f = f;
	  f();
	  this.reset();
      };

      // Start timer, if not reset again will call f in timeInSecs
      Timer.prototype.reset = function () {
	  var me = this;
	  if (me.openTime) clearTimeout(me.openTime);
	  me.openTime = setTimeout(function () {me.f();me.reset();},me.timeInSecs*1000);
      }; 

      function permanentSubcription(op,f) {
	//var lastMsg;
	function mf(msg)  {
	    console.warn("got message",msg.show()); 
	    timer.reset();
	    // NOTE: to eliminate duplicate values has to be done at the channel level
	    //if (lastMsg && lastMsg.equal(msg)) return;    
	    //lastMsg=msg;
	    f(msg);
	};

	var cb;
	function subscribe() {
	    if (cb) {
		console.warn("no message received, we resubscribe");
		cb.del();
	    }
	    cb = ctx.conn.callBackF(mf);
	    op.call(cb.f);
 	};

	var timer = new Timer(45,subscribe);  
	//subscribe();
    };

      function delOne(n) {
	  var name = n.value;
	  console.log("Del "+name);
	  elem.find("#"+name).remove();
      };
      
      function addOne(n,u) {
	  console.log("Channels AddOne "+n,u);
	  var name = n.value;			   
	  quid2.modules.getTyped(u).done(function (n) {
	      console.log("TYPED",n,n.show());
	      var id = name;// BUG: fails with names with spaces  
	      var titleClass = "quid2-channel-title";
	      var bodyClass  = "quid2-channel-body"; 
	      var t,b;
	      var m = elem.find("#"+id);
	      if (m.size()==0) { 
		  m = $("<div/>").attr("id",id);
		  t = $("<div/>").addClass(titleClass);
		  b = $("<div/>").addClass(bodyClass);
		  m.append(t).append(b);
		  elem.append(m);
	      } else {
		  t = m.find("."+titleClass);
		  b = m.find("."+bodyClass);
	      };
	      t.text(name);			  
	      b.text(n.show());
	      if (name.indexOf("urgent")!=-1) alert(n.show());
	  });
      };

      function addMany(nvs) {
	  console.log("Channels AddMany: ",nvs,nvs.show());
	  //var names = nvs.map(function (t) {return t.value[0].value;});
	  nvs.map(function (t) {
	      console.log("T",t,t.show());
	      return addOne(t.value[0],t.value[1]);
	  }); 
	  //console.log("AddMany: "+names,nvs);
	  //me.cache = {};
	  //me.tree.addNames(names);
      };

      function onMessage(msgs) {
        var tp = ctx.app.type;
	console.log("Update msgs",msgs.show());
	new tp.Change([pt.String,tp.Typed]).ready().done(function (t) {
	    var change = t.decode(new quid2.ByteBuffer(msgs.value[0].value));
	    console.log("Channels change",change.show(),t,msgs.value[0].value);
	    change.match(delOne,addOne,addMany);
	});
	return p.unit;
      };

    //ctx.app.value.subscribeToPrivateTopics.call(ctx.conn.callBack(onMessage));
    permanentSubcription(ctx.app.value.subscribeToPrivateTopics,onMessage);

    return {elem:elem
	    ,next:function () {
	      return {label:"Discussions",title:"Public discussions/chats."};
	    }
	   };
  };

  var appModule = function (ctx) {
    var a = q.ui.AppModule;
    // Need: we pass something that can be resized to get the editor scrolling.
    var cm = new q.ui.QComponent();
    cm.resizeChildren = function() {
      var me = this;
      var dom = me.getDomHelper();
      var cms = dom.getElementByClass("CodeMirror-scroll",me.getElement());
      console.log("cm.resizeChildren codeMirrorNode=",cms);
      if (cms)
	goog.style.setBorderBoxSize(cms,me.getSize());
    };
    var ui = new q.ui.MenuFrame(cm);
    ctx.menu = ui.menu;
    ctx.APPMODULE=true;//??
    var editor;
    return {//kind:PAGE
	     ui:ui
	    ,visible: function() {
	      editor && editor.visible && editor.visible();
	    }
	    ,next:function (obj) {
	      var o = a.matchAppModule(obj);

	      if (!editor) {
		a.displaySource(ctx,$(ui.main().getContentElement()),obj,!ctx.conn.loggedIn).done(function(ed) {
		  editor=ed;
		  ui.resize();
		});
	      };

	      return {
		label:o.relName.value
	        ,title:"Module: "+o.absName.value
	      };
	    }
    };
  };

  var appModuleFixed = function (pos,label,title,mdl,ctx) {
    return function (ctx) {
      var elem = div();
      q.ui.AppModule.displaySource(ctx,elem,mdl,true);
      return {
	elem:elem
	,kind:pos.value
	,next:q.cnst({label:label.value,title:title.value})
      };
    };
  };

  var logV = function (pars) {
    return function (ctx) {
      var elem = div();
      //var t = "";
      //pars.map(function (p) {return p.show();});
      elem.text(pars.show());
      return {
	elem:elem
	,next:q.cnst({label:"log"})
      };
    };
  };


  var login = function (ctx) {
    return {
      kind:CMD
      ,next: function () {
	return {
	  label:"Login"
	  ,f:ctx.conn.login
	};
      }
    };
  };

  var logout = function (ctx) {
    return {
      kind:CMD
      ,next: function () {
	return {
	  label:"Logout " + ctx.conn.userName
	  ,f:ctx.conn.logout
	};
      }
    };
  };

  /*var edit = function (ctx) {
    function editModule() {
      console.log("editModule");
    };
    return {
	kind:CMD
	,next: function (obj) {
	  var o = obj.match(["absName","relName",[["source","ctx"]]]);
	  return {
	    label:"Edit"
	    ,title:"Edit module "+o.absName.value
	    ,act:function() {
	      ctx.app.value.privateAppModule.call(o.relName)
		.then(function(pri) {
			//var p = pri.match(["absName","relName",[["source","ctx"]]]);
			if (pri.equal(o)) editModule();
			else if (confirm("Do you really want to edit this module? You already have a private version of " + o.relName.value + " that will be overwritten if you proceed!")) editModule();
		      }
		      ,editModule);
	    }
	  };
	}
      };
  };*/

  var adopt = function (ctx) {
      return {
	kind:CMD
	,next: function (obj) {
	  var o = obj.match(["absName","relName",[["source","ctx"]]]);
	  var title = "Adopt module "+o.absName.value;
	  return {
	    label:"Adopt"
	    ,title:title
	    ,act:function() {
	      return ctx.cop(title,ctx.app.value.adopt.call(o.absName));
	    }
	  };
	}
      };
  };

  var reject = function (ctx) {
      return {
	kind:CMD
	,next: function (obj) {
	  var o = obj.match(["absName","relName",[["source","ctx"]]]);
	  var title = "Reject module "+o.relName.value;
	  return {
	    label:"Reject"
	    ,title:title
	    ,act:function() {
	      return ctx.cop(title,ctx.app.value.reject.call(o.relName));
	    }
	  };
	}
      };
  };

  var deleteModule = function(ctx) {
    return {
	kind:CMD
	,next: function (obj) {
	  var o = obj.match(["absName","relName",[["source","ctx"]]]);
	  var title = "Delete private module "+o.relName.value;
	  return {
	    label:"Delete"
	    ,title:title
	    ,act:function() {
	      return confirm("Do you want to delete your private version of "+o.relName.value + " ?") ? ctx.cop(title,ctx.app.value.clearPrivateModule.call(o.relName)) : $.when(0);
	    }
	  };
	}
      };
  };

  var updateContext = function (ctx) {
      return {
	kind:CMD
	,next: function (obj) {
	  var o = obj.match(["absName","relName",[["source","ctx"]]]);
	  var title = "Update context of private module "+o.relName.value;
	  return {
	    label:"Update Context"
	    ,title:title
	    ,act:function() {
	      return ctx.cop(title,ctx.app.value.updateContext.call(o.relName));
	    }
	  };
	}
      };
  };

  var updateUserContexts = function (ctx) {
      return {
	kind:CMD
	,next: function () {
	  var title = "Update contexts of my public and private modules";
	  return {
	    label:"Update All Contexts"
	    ,title:title
	    ,act:function() {
	      return ctx.cop(title,ctx.app.value.updateContexts.call());
	    }
	  };
	}
      };
  };

  var updateStandardContexts = function (ctx) {
      return {
	kind:CMD
	,next: function () {
	  var title = "Update contexts of standard modules";
	  return {
	  label:"Update Standard Contexts"
	    ,title:title
	    ,act:function() {
	      return ctx.cop(title,ctx.app.value.updateContexts.callAs([],ctx.quid2ID));
	    }
	  };
	}
      };
  };

  var adoptAsStandard = function (ctx) {
      return {
	kind:CMD
	,next: function (obj) {
	  var o = obj.match(["absName","relName",[["source","ctx"]]]);
	  var title = "Adopting as standard module "+o.absName.value;
	  return {
	    label:"Adopt as Standard"
	    ,title:title
	    ,act:function() {
	      return ctx.cop(title,ctx.app.value.adopt.callAs([o.absName],ctx.quid2ID));
	    }
	  };
	}
      };
  };

  var rejectAsStandard = function (ctx) {
      return {
	kind:CMD
	,next: function (obj) {
	  var o = obj.match(["absName","relName",[["source","ctx"]]]);
	  var title = "Rejecting standard module "+o.relName.value;
	  return {
	    label:"Reject as Standard"
	    ,title:title
	    ,act:function() {
	      return confirm("Are you sure love? When is gone is gone ...") ? ctx.cop(title,ctx.app.value.adopt.callAs([o.relName],ctx.quid2ID)) : $.when(0);
	    }
	  };
	}
      };
  };

  /*var valueV = function (ctx) {
    var elem = div();
    return {elem:elem
	    ,next:function (obj) {
	      var o = obj.match(["name"]);
	      var absName = o.name.value;
	      var n = q.nameSplit(absName);
	      var name = n[1];
	      ctx.cop(name,absName).then(
		function (r) {}// PROB: HOW DO I DISPLAY THIS?
		,function (err) {elem.text("Error while executing '"+absName + "': " + err.show());}
	      );
	      return {label:name,title:absName};
	    }
    };
  };*/

  var moduleValues = function (ctx) {
    var elem = div();
    var mainArea = div0();
    var exprArea = div0();
    elem.append(mainArea).append("<hr/>").append(exprArea);
    //var viewer = new quid2.ui.RefDisplay(ctx,exprArea);
    var tree = new q.ui.GTree(mainArea,function(name,node,funName) {
      //viewer.display({id:absName+"."+name,newWindow:false});
      exprArea.empty();

      ctx.topRef(name,funName).fail(function (err) {exprArea.text("Error while executing '"+name + "': " + err.show());});
      //ctx.display(new ctx.app.value.AValue(new p.String(funName)));//,new p.String();
    });

    return {elem:elem
	    ,next:function (obj) {
	      var o = obj.match(["absName","relName",[["source","ctx"]]]);
	      //viewer.empty();
	      tree.clear();
	      exprArea.text("Updating ...");
	      quid2.modules.getModuleByName(o.absName.value).done(function (mdl) {
	      exprArea.empty();
		for (var f in mdl.value)
		  if (mdl.value[f].isValue())
		    tree.addNameValue(f,o.absName.value+"."+f);
	      });

	      return {label:"Values",title:"Values exported by " + moduleName(o)};
	    }
	   };
  };

  var moduleVersions = function (ctx) {
    var elem = div();
    var mainArea = div0();
    var diffArea = div0();
    elem.append(mainArea).append("<hr/>").append(diffArea);

    function doDiff(name,user) {
      function showDiff(doc,diff) {
	console.log(diff.show());
	diffArea.html(q.ui.Patch.patch2html(doc.value[1].value,diff));
      };

      function errDiff(e) {
	console.error(e.show());
	diffArea.text("There is no private version to compare with.");//+e.show());
      };

      diffArea.empty();
      $.when(ctx.app.value.privateMdl.call(name).pipe(function(mref) {return ctx.app.value.getSrcCode.call(mref);}),ctx.app.value.diffWithPrivate.call(name,user)).then(showDiff,errDiff) ;
    };

    var tree = new q.ui.GTree(mainArea,function(shortUserName,node,val) {
	  var name = val[0];
	  var user = val[1];
	  var ctrl = false; // TODO: GET FROM USER
	  if (ctrl) ctx.topExpr("Reading module "+name.value,ctx.app.value.publicAppModuleByUser.call(user,name));
	  else doDiff(name,user);
    },"Versions by:");

    var visible = true;
    var obj;
    var upToDate = false;
    return {elem:elem

            ,visible:function () {
	      visible=true;
	      this.update();
	    }

            ,hidden:function () {
	      visible=false;
	    }

            ,next:function (newObj) {
	      obj=newObj;
	      upToDate=false;
	      return this.update();
	    }

	    ,update:function () {
	      if (!obj) return;

	      var o = obj.match(["absName","relName",[["source","ctx"]]]);

	      if (visible && !upToDate) {
		upToDate=true;
		tree.clear();
		diffArea.empty();
		ctx.cop("Loading versions of "+o.relName.value
		      ,ctx.app.value.getVersions.call(new p.String("Preference.Module."+o.relName.value)).done(function (versions) {
			versions.map(function (v) {tree.addPathValue([v.value[0].value],[o.relName,v.value[1]]);});
		      }));
	      };

	      return {label:"Versions",title:"Public versions of module "+ o.relName.value};
	    }
	   };
  };

  function moduleName(obj) {
    return obj.relName.value + " (" + obj.absName.value +")";
  };

  var moduleContext = function (ctx) {
    function onSelect (name,node,value) {
      console.log("moduleContext onSelect " + name);
      ctx.topExpr("Reading Module "+name,ctx.app.value.appModule2.cachedCall(new p.String(name),value));
    };
    var elem = div();
    var tree = new q.ui.GTree(elem,onSelect);

    return {elem:elem
	    ,next:function (o) {
	      var obj = o.match(["absName","relName",[["source","ctx"]]]);
	      tree.clear();
	      obj.ctx.map(function (i) {
		tree.addNameValue(i.value[0].value,i.value[1]);
	      });

	      return {
		label:"Imports"
		,title:"Modules imported by " + moduleName(obj)
	      };
	    }
	    };
  };

  var stdModules = function (ctx) {
    var elem = div();
    new quid2.ui.view.Service.Org.Quid2.App.UserModules(
		ctx
		,{readModule:function(name) {return ctx.app.value.publicAppModuleByUser.call(ctx.quid2ID,name);}
		,subscribe:function(cb) {return ctx.app.value.subscribeToPublicUserModules.call(ctx.quid2ID,cb);}
		 },elem);
    return {elem:elem
	    ,next:function () {
	      return {
		label:"Library"
		,title:"All modules adopted by Quid2."
		};
	     }
	   };
    };

  var publicModules = function (ctx) {
    var elem = div();
    new quid2.ui.view.Service.Org.Quid2.App.UserModules(
		ctx
		,{readModule:function(name) {return ctx.app.value.publicAppModuleByUser.call(ctx.conn.userDomain,name);}
		,subscribe:function(cb) {return ctx.app.value.subscribeToPublicUserModules.call(ctx.conn.userDomain,cb);}
		 },elem);
    return {elem:elem
	    ,next:function () {
	      return {
		label:"My Public",title:"All modules that I have adopted."
		};
	     }
	   };
    };

  var privateModules = function (ctx) {
    var elem = div();
    new quid2.ui.view.Service.Org.Quid2.App.UserModules(
		ctx
		,{readModule:function(name) {return ctx.app.value.privateAppModule.call(name);}
		,subscribe:function(cb) {return ctx.app.value.subscribeToPrivateModules.call(cb);}
		 },elem);
    return {elem:elem
	    ,next:function () {
	      return {label:"Private",title:"My private modules."};
	     }
	   };
    };

    /*var lblT = function (label,title,otherF,ctx) {
      return quid2.modules.getViewer(ctx,otherF).pipe(function (jsF) {
	var r = $.extend({},jsF.f);
	r.byby=22;
	r.next = function (o) {
	  var n = jsF.f.next(o);
	  n.label=label;
	  n.title=title;
	  return n;
	  };
	return function (ctx) {
	  return r;
	};
      });
    };*/

  return {
    application:application
    ,messages:messages
    ,subjects:subjects
    ,allPublic:allPublic
    ,privateModules:privateModules
    ,publicModules:publicModules
    ,appModule:appModule
    ,appModuleFixed:appModuleFixed
    ,stdModules:stdModules
    ,moduleContext:moduleContext
    ,moduleValues:moduleValues
    ,moduleVersions:moduleVersions
    ,login:login
    ,logout:logout
    ,adopt:adopt
    ,reject:reject
    ,deleteModule:deleteModule
    ,updateContext:updateContext
    ,updateUserContexts:updateUserContexts
    ,adoptAsStandard:adoptAsStandard
    ,rejectAsStandard:rejectAsStandard
    ,updateStandardContexts:updateStandardContexts
    ,textV:textV
    ,priceV:priceV
    ,pngV:pngV
    ,glossPictureV:glossPictureV
    ,logV:logV
    ,bookmarkV:bookmarkV
    ,youTubeVideoV:youTubeVideoV
    ,defaultV:defaultV
  };

})();

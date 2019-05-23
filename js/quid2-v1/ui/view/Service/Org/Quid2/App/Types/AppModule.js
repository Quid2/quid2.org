goog.provide('quid2.ui.view.Service.Org.Quid2.App.Types.AppModule');

goog.require('quid2');
goog.require('quid2.ui.View');
goog.require('quid2.ui.Tree');
goog.require('quid2.ui.view.Service.Org.Quid2.App.ModuleContext');
goog.require('quid2.ui.view.Service.Org.Quid2.App.StdModules');
goog.require('quid2.ui.view.Service.Org.Quid2.App.PublicModules');
goog.require('quid2.ui.view.Service.Org.Quid2.App.UserPublicModules');
goog.require('quid2.ui.view.Service.Org.Quid2.App.PrivateModules');
goog.require('quid2.ui.view.Service.Org.Quid2.App.PublicModule');
goog.require('quid2.ui.view.Service.Org.Quid2.App.AllPublic');
goog.require('quid2.ui.view.Service.Org.Quid2.App.HelpModule');
goog.require('quid2.ui.view.Service.Org.Quid2.App.Versions');
goog.require('quid2.ui.view.Service.Org.Quid2.App.Exports');
goog.require('quid2.ui.view.Language.Quid2.SourceCode');

quid2.ui.view.Service.Org.Quid2.App.Types.AppModule = function(ctx) {
  var q = quid2;
  var g = goog;
  var f = flapjax;
  var p = quid2.primitive.value;
  var v = quid2.ui.View;
  var k = quid2.ui.view.Service.Org.Quid2.App.Types.AppModule;
  var app = quid2.module.Service.Org.Quid2.App;
  var me = this;

  k.check(ctx);

  // BUG: incomplete.
  function close() {
    ctx.area.empty();
    ctx.menu.set([]);
  };

  var obj = k.match(ctx.obj);
  //ctx.setLabel(obj.relName.value);
  //ctx.setTitle("Module: "+obj.absName.value);

  /*
    function adopt() {
      ctx.cop("Adopting module "+obj.relName.value,app.Last.value.adopt.call(obj.absName));
    };

    function adoptAsStandard() {
      ctx.cop("Adopting as standard module "+obj.relName.value,app.Last.value.quid2ID.cachedCall().pipe(function (qid) {return app.Last.value.adopt.callAs([obj.absName],qid);}));
    };

    function reject() {
      ctx.cop("Rejecting module "+obj.relName.value,app.Last.value.reject.call(obj.relName));
    };

    function rejectAsStandard() {
      if (confirm("Are you sure love? When is gone is gone ..."))
	ctx.cop("Rejecting as standard module "+obj.relName.value,app.Last.value.quid2ID.cachedCall().pipe(function (qid) {return app.Last.value.reject.callAs([obj.relName],qid);}));
    };

    function deleteModule() {
      if (confirm("Do you want to delete your private version of "+obj.relName.value + " ?"))
	ctx.cop("Deleting private module "+obj.relName.value,app.Last.value.clearPrivateModule.call(obj.relName));
    };

    function updateContext() {
      ctx.cop("Update context of private module "+obj.relName.value,app.Last.value.updateContext.call(obj.relName));
    };

    function updateContexts() {
      ctx.cop("Update contexts of my public and private modules",app.Last.value.updateContexts.call());
    };

    function updateStandardContexts() {
      ctx.cop("Update contexts of standard modules",app.Last.value.quid2ID.cachedCall().pipe(function (qid) {return app.Last.value.updateContexts.callAs([],qid);}));
    };

    var menuItems = [
       ["Adopt",adopt]
      ,["Reject",reject]
      ,["Delete",deleteModule]
      ,["Update Context",updateContext]
      ,["Update All Contexts",updateContexts]
    ];

    if (ctx.isMe()) {
      menuItems.push(["Adopt as Standard",adoptAsStandard]);
      menuItems.push(["Reject as Standard",rejectAsStandard]);
      menuItems.push(["Update Standard Contexts",updateStandardContexts]);
    };

    if (ctx.conn.loggedIn) ctx.menu.set(menuItems);

    v.displayObj(ctx,new app.Last.value.StdModules());
    //if (ctx.isMe()) v.displayObj(ctx,new app.Last.value.PublicModules());
    // v.displayObj(ctx,new app.Last.value.AllPublic());

    if (ctx.conn.loggedIn) {
	v.displayObj(ctx,new app.Last.value.UserPublicModules());
	v.displayObj(ctx,new app.Last.value.PrivateModules());
    };

    v.displayObj(ctx,new app.Last.value.ModuleContext(obj.ctx));

    //if (ctx.isMe())
      v.displayObj(ctx,new app.Last.value.Versions(obj.relName));

    v.displayObj(ctx,new app.Last.value.Exports(obj.absName));

    v.displayObj(ctx,new app.Last.value.HelpModule(new p.String("Subject.Quid2.Help.Module." + (ctx.conn.loggedIn ? "User" : "Anon"))));

    */
    k.displaySource(ctx,obj);

};

quid2.ui.view.Service.Org.Quid2.App.Types.AppModule.kind = quid2.ui.View.PAGE;

quid2.ui.view.Service.Org.Quid2.App.Types.AppModule.match = function(obj) {
    return obj.match(["absName","relName",[["source","ctx"]]]);
};

quid2.ui.view.Service.Org.Quid2.App.Types.AppModule.displaySource = function(ctx,obj) {
  var q = quid2;
  var v = quid2.ui.View;
  var app = quid2.module.Service.Org.Quid2.App;
  var p = quid2.primitive.value;

  function saveSource(newSourceCode) {
      return ctx.cop("Saving new source code",app.Last.value.updateSource.call(obj.relName,newSourceCode).done(function (o) {

     console.log("new module",o.show());
     function onLeft() {};
     function onRight(r) {
       var newMdl = r.value[0];
       //ctx.focus(newMdl);
       ctx.area.trigger('obj.quid2',newMdl);
     };
     o.match(onLeft,onRight);
     }));
  };

  function replace(newObj,inlineAreaAll,inlineArea,rawResult) {
    (rawResult ? $.when(v.defaultViewer) : v.getViewer(newObj)).done(function (viewer) {
      //$.extend({},ctx,{obj:val,area:evalArea}));
      if (v.isPageViewer(viewer)) {inlineAreaAll.empty();close();ctx.topValue(newObj);}
      //viewer($.extend({},ctx,{obj:newObj,area:v.isPageViewer(viewer) ? ctx.area : inlineArea}));
      else viewer($.extend({},ctx,{obj:newObj,area:inlineArea}));
    });
  };

  // Not
  function eval(expr) {
    var ref = obj.absName.value+"."+expr.id;

      // FIX:
    /*if (expr.newWindow) {
      ctx.newWindow({id:ref,title:expr.title});
      return;
    };

    var evalArea2 = $("<span> = </span>");
    var evalArea = expr.elem.find(".evalArea");
    if (evalArea.length == 0) {
	evalArea = $("<span class=evalArea/>");
	expr.elem.append(evalArea2.append(evalArea));
    };
    evalArea.text("..loading..");*/

    ctx.cop("Evaluating '" + (expr.title || expr.id) + "'",q.modules.functionCall(ref)).done(function (newObj) {

      // Replace in line
      // replace(newObj,evalArea2,evalArea,expr.rawResult);
      quid2.modules.functionCall(ref).then(function (o) {ctx.display(o);},function (err) {console.log("Error while executing "+name);});

    });
  };

  var nctx = q.ext(ctx,{obj:obj.source,top:obj,save:saveSource,eval:eval});

  obj.source.match(function (o) {quid2.ui.view.Language.Quid2.Code(nctx);}
		   ,function (o) {quid2.ui.view.Language.Quid2.Literate(nctx);});

// FIX
  /*v.display($.extend({},ctx,{
     obj:obj.source

    ,top:ctx.obj

    ,eval:eval // ?? used ??

    ,save:saveSource // Called every time the source code has to be compiled and checked.

    ,update:function (tme) { // Called on editor close
      // HACK
      if (q.isDefined(tme.value)) ctx.topValue(tme.value[0]);
      else ctx.topValue(tme);
    }
    //,menu:ctx.menu.subMenu()
   }));*/
};

quid2.ui.view.Service.Org.Quid2.App.Types.AppModule.check = (function () {
    var warned = false;

    return function (ctx) {
      if ($.browser.msie && ! warned) {
	warned =true;
	ctx.warning("quid2.org works better with recent versions of Google Chrome or Firefox.");
      };
    };
})();
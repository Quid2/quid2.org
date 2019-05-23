goog.provide('quid2.ui.view.Service.Org.Quid2.App.StdModules');

goog.require('quid2');
goog.require('quid2.ui.view.Service.Org.Quid2.App.UserModules');

quid2.ui.view.Service.Org.Quid2.App.StdModules = function(ctx) {
  var q = quid2;
  var r = quid2.ui.view.Service.Org.Quid2.App.StdModules;
  var app = quid2.module.Service.Org.Quid2.App;
  var g = goog;

  if (q.isUndefined(r.tab)) {
    app.Last.value.quid2ID.cachedCall().done(function (quid2ID) {
      r.tab = new quid2.ui.view.Service.Org.Quid2.App.UserModules(
	ctx
	,{label:"Library",title:"All modules adopted by Quid2."}
	,{readModule:function(name) {return app.Last.value.publicAppModuleByUser.call(quid2ID,name);}
	  ,subscribe:function(cb) {return app.Last.value.subscribeToPublicUserModules.call(quid2ID,cb);}
	}
      );});
  };
};

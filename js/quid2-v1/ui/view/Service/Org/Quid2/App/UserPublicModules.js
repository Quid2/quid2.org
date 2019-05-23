goog.provide('quid2.ui.view.Service.Org.Quid2.App.UserPublicModules');

goog.require('quid2');
goog.require('quid2.ui.view.Service.Org.Quid2.App.UserModules');

quid2.ui.view.Service.Org.Quid2.App.UserPublicModules = function(ctx) {
  var q = quid2;
  var r = quid2.ui.view.Service.Org.Quid2.App.UserPublicModules;
  var g = goog;
  var app = quid2.module.Service.Org.Quid2.App;

  if (q.isUndefined(r.tab)) {
    r.tab = new quid2.ui.view.Service.Org.Quid2.App.UserModules(
      ctx
      ,{label:"My Public",title:"All modules that I have adopted."}
      ,{readModule:function(name) {return app.Last.value.publicAppModuleByUser.call(ctx.conn.userDomain,name);}
      ,subscribe:function(cb) {return app.Last.value.subscribeToPublicUserModules.call(ctx.conn.userDomain,cb);}
      }
    );
  };
};
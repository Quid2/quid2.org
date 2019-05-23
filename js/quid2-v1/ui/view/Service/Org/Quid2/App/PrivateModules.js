goog.provide('quid2.ui.view.Service.Org.Quid2.App.PrivateModules');

goog.require('quid2');
goog.require('quid2.ui.view.Service.Org.Quid2.App.UserModules');

quid2.ui.view.Service.Org.Quid2.App.PrivateModules = function(ctx) {
  var q = quid2;
  var r = quid2.ui.view.Service.Org.Quid2.App.PrivateModules;
  var p = quid2.primitive.value;
  var app = quid2.module.Service.Org.Quid2.App;

  if (q.isUndefined(r.tab)) {
    r.tab = new quid2.ui.view.Service.Org.Quid2.App.UserModules(
      ctx
      ,{label:"Private",title:"My private modules."}
      ,{readModule:function(name) {return app.Last.value.privateAppModule.call(name);}
        ,subscribe:function(cb) {return app.Last.value.subscribeToPrivateModules.call(cb);}
      }
    );
  };

  /*
  function tabSelected() {
    ctx.cop("Reading my private modules",app.Last.value.privateModulesPaths.call()).done(function(paths){r.tree.setPaths(paths);});
  };

  if (q.isUndefined(r.tab)) {
    r.tab = ctx.tabs.add({label:"Private",title:"My private modules.",onSelect:tabSelected});

    r.tree = new q.ui.Tree(r.tab.area,{
  	onSelectChild : function(path) {
	  console.log("onSelectChild " + path);
	  var name = q.intercalate(".",path);
	  ctx.topExpr("Reading private module "+name,app.Last.value.privateAppModule.call(new p.String(name)));
    }});

    /*var updateTree = ctx.conn.callBack(function(pars) {
      console.warning("Private Modules change",pars);
      //console.log("Private Modules change",chg.show());
    });*/

    //ctx.cop("Register for changes to my private modules",app.Last.value.subscribePrivateN.call(new app.Last.value.Private(new p.List([])),updateTree));

    /*
    ctx.cop("Reading my private modules",app.privateModulesPaths.call()).done(function(paths){
      r.tree.setPaths(paths);
      var updateTree = ctx.conn.callBack(function(pars) {
	console.warning("Private Modules change",pars);
	//console.log("Private Modules change",chg.show());
      });

      ctx.cop("Register for changes to my private modules",m_ns.subscribePrivateN.call(new m_ns.Private(new p.List([])),updateTree));
    });
  };*/

};
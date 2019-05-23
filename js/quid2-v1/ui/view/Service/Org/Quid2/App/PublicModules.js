goog.provide('quid2.ui.view.Service.Org.Quid2.App.PublicModules');

goog.require('quid2');
goog.require('quid2.ui.Tree');

quid2.ui.view.Service.Org.Quid2.App.PublicModules = function(ctx) {
  var q = quid2;
  var app = quid2.module.Service.Org.Quid2.App.Last.value;
  var r = quid2.ui.view.Service.Org.Quid2.App.PublicModules;
  //var store = ctx.env.c("Service.Org.Quid2.UserPublicRepo","Quid2UserPublicRepo");

  function tabSelected() {
    ctx.cop("Reading all public modules",app.allPublicModulesPaths.call()).done(function (paths) {r.tree.setPaths(paths);});
  };

  if (q.isUndefined(r.tab)) {
    r.tab = ctx.tabs.add({label:"Public",title:"All public modules.",onSelect:tabSelected});

    r.tree = new q.ui.Tree(r.tab.area,{
      onSelectChild : function(path,newWindow) {
	  console.log("onSelectChild " + path);

	  var name = q.intercalate(".",path);
	  ctx.cop("Loading versions of "+r.relName.value,app.getVersions.call(new p.String("Preference.Module."+r.relName.value)).done(function (versions) {
      var paths = [];
      versions.map(function (t) {paths.push([[t.value[0].value],[r.relName,t.value[1]]]);});
      r.tree.setVPaths(paths);
    }));


	  //ctx.topExpr("Reading versions of "+name,q.appN(ctx.env.v("Service.Org.Quid2.App","getVersions"),[q.lst(path)]));

	  /*ctx.cop("Reading versions of "+name,ctx.env.call(q.appN(ctx.env.v("Service.Org.Quid2.App","getVersions"),[q.lst(path)]))).done(function (versions) {
	    var aUser = versions.vs[0][1];
	    ctx.topExpr("Reading module "+name,q.appN(ctx.env.v("Service.Org.Quid2.App","getAdoptedAppModule"),[aUser,name]));
	  });*/

	}});
  };

};

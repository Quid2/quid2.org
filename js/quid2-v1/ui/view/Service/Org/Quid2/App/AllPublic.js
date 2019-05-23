goog.provide('quid2.ui.view.Service.Org.Quid2.App.AllPublic');

goog.require('quid2');
goog.require('quid2.ui.GTree');

/* TODO: subscribe for changes. */
quid2.ui.view.Service.Org.Quid2.App.AllPublic = function(ctx) {
  var q = quid2;
  var app = quid2.module.Service.Org.Quid2.App;
  var r = app.Last.type.AllPublic;
  var p = quid2.primitive.value;

  function tabSelected() {
    ctx.cop("Reading all public information",app.Last.value.allPublicPaths.call()).done(function (paths) {
      console.log("ALLPATHS",paths);
      r.tree.addHPaths(paths);
    });
  };

  if (q.isUndefined(r.tab)) {
    r.tab = ctx.tabs.add({label:"All Public Info",title:"All public information.",onSelect:tabSelected});

    r.tree = new q.ui.GTree(r.tab.area,function(name,node) {
	  console.log("onSelectChild " + name);

	  var user = node.getModel().isChild;
	  if (user) {
	    var pname = new p.String(q.toName(node.getModel().path.slice(0,-1)));
	    ctx.topExpr("Reading version of "+ pname.show() +" by user " + user.show(),app.Last.value.publicByUser.call(user,pname));
	  } else app.Last.value.getVersions.call(new p.String(name)).done(function (versions) {
	      versions.map(function (version) {
		var n = r.tree.addPath(node,[version.value[0].value]);
		$.extend(n.getModel(),{isChild:version.value[1]});
	      });
	  });

	  //ctx.topExpr("Reading entries for "+name,app.Last.value.getVersions.call(new p.String(name)));
      });
    };

};

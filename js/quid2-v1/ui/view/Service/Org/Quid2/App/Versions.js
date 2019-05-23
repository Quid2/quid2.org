goog.provide('quid2.ui.view.Service.Org.Quid2.App.Versions');

goog.require('quid2');
goog.require('quid2.ui.View');

quid2.ui.view.Service.Org.Quid2.App.Versions = function(ctx) {
  var q = quid2;
  var p = quid2.primitive.value;
  var r = quid2.ui.view.Service.Org.Quid2.App.Versions;
  var app = quid2.module.Service.Org.Quid2.App.Last.value;

  r.relName = ctx.obj.match(["relName"]).relName;

  function tabSelected() {
    // BUG: hardwired path
    ctx.cop("Loading versions of "+r.relName.value,app.getVersions.call(new p.String("Preference.Module."+r.relName.value)).done(function (versions) {
      var paths = [];
      versions.map(function (t) {paths.push([[t.value[0].value],[r.relName,t.value[1]]]);});
      r.tree.setVPaths(paths);
    }));
  };

  if (q.isUndefined(r.tab)) {
    r.tab = ctx.tabs.add({label:"Versions",title:"All public versions of the current module.",onSelect:tabSelected});

    var mainArea = $("<div/>");
    r.diffArea = $("<div/>");
    r.tab.area.append(mainArea);
    r.tab.area.append("<hr/>");
    r.tab.area.append(r.diffArea);

    function patch2html(doc, patches) {
      var txt = new q.Buffer(doc);
      var html = $("<pre/>");
      var diff = [];
      var p = 0;

      if (patches.length()==1 && patches.value[0].match(q.cnst(true),q.cnst(falsoe),q.cnst(false))) {html.text("Documents are identical");return html;}

      $.each(patches.value, function(i, patch) {
	function keep(n) {
	  var t = txt.next(n.value);
	    html.append($("<span/>").text(t));
	    diff.push([ DIFF_EQUAL, t ]);
	};
	function drop(n) {
	  var t = txt.next(n.value);
	  var elem = $("<del/>").text(t);
	  elem.click(function(e) {
	    elem.toggleClass("selected");
	    if (elem.hasClass("selected")) diff[i] = [DIFF_DELETE, t];
	    else diff[i] = [ DIFF_EQUAL, t ];
	    //me.model.saveModuleDiff(file.name, diff);
	    e.stopPropagation();
	  });
	  html.append(elem);
	  diff.push([ DIFF_EQUAL, t ]);
	};
	function ins(s) {
	  var t = s.value;
	  var elem = $("<ins/>").text(t);
	  elem.click(function(e) {
		       elem.toggleClass("selected");
		       if (elem.hasClass("selected")) diff[i] = [ DIFF_INSERT, t ];
		       else diff[i] = [ DIFF_EQUAL, t ];
		       //me.model.saveModuleDiff(file.name, diff);
		       e.stopPropagation();
		     });
	  html.append(elem);
	  diff.push([ DIFF_EQUAL, t ]);
	};
	patch.match(keep,drop,ins);
	});

	if (txt.length() > 0) throw "Incorrect diff data:" + txt + " " + html;
	console.log("DIFF", diff);
	return html;
    };

    function doDiff(name,user) {
      function showDiff(doc,diff) {
	console.log(diff.show());
	r.diffArea.html(patch2html(doc.value[1].value,diff));
      };

      function errDiff(e) {
	console.error(e.show());
	r.diffArea.text("There is no private version to compare with."+e.show());
      };

      $.when(app.privateMdl.call(name).pipe(function(mref) {return app.getSrcCode.call(mref);}),app.diffWithPrivate.call(name,user)).then(showDiff,errDiff) ;
    };

    r.tree = new q.ui.Tree(mainArea,{
        onSelectChild : function(path,ctrl,val) {
	  var name = val[0];
	  var user = val[1];
	  if (ctrl) ctx.topExpr("Reading module "+name.value,app.publicAppModuleByUser.call(user,name));
	  else doDiff(name,user);
      }});//,"Users with public versions of "+r.relName.value);
  };

  r.diffArea.empty();
};
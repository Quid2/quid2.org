goog.provide('quid2.ui.view.Service.Org.Quid2.App.Exports');

goog.require('quid2');
goog.require('quid2.ui.Tree');
goog.require('quid2.ui.RefDisplay');

quid2.ui.view.Service.Org.Quid2.App.Exports = function(ctx) {
  var q = quid2;
  var r = quid2.ui.view.Service.Org.Quid2.App.Exports;
  var app = quid2.module.Service.Org.Quid2.App.Last.value;
  var p = quid2.primitive.value;

  function tabSelected() {
    //console.log("tabselected context");
  };

  r.ctx = ctx;
  r.absName = r.ctx.obj.match(["absName"]).absName.value;

  if (q.isUndefined(r.tab)) {
    r.tab = r.ctx.tabs.add({label:"Values",title:"Values exported by the current module.",onSelect:tabSelected});

    var mainArea = $("<div/>");
    var exprArea = $("<div/>");
    r.tab.area.append(mainArea);
    r.tab.area.append("<hr/>");
    r.tab.area.append(exprArea);
    r.viewer = new quid2.ui.RefDisplay(ctx,exprArea);

    r.tree = new q.ui.Tree(mainArea,{
      onSelectChild : function(path,newWindow) {
	  r.viewer.display({id:r.absName+"."+path[0],newWindow:newWindow});
	}
    });
  } else r.viewer.empty();

  //r.tree.setNodes([]);
  quid2.modules.getModuleByName(r.absName).done(function (mdl) {
    var names = [];
    for (var f in mdl.value) {
      if (mdl.value[f].isValue()) names.push([f]);
    };

    r.tree.setNodes(names);
  });

};
goog.provide('quid2.ui.view.Service.Org.Quid2.App.ModuleContext');

goog.require('quid2');
goog.require('quid2.ui.Tree');

quid2.ui.view.Service.Org.Quid2.App.ModuleContext = function(ctx) {
  var q = quid2;
  var r = quid2.ui.view.Service.Org.Quid2.App.ModuleContext;
  var app = quid2.module.Service.Org.Quid2.App.Last.value;
  var p = quid2.primitive.value;

  r.mdlCtx = ctx.obj.parts[0]; // :: [RelName,Ref Module]

  function tabSelected() {
    console.log("tabselected context");
  };

  if (q.isUndefined(r.tab)) {
    r.tab = ctx.tabs.add({label:"Imports",title:"Modules imported by the current module.",onSelect:tabSelected});

    r.tree = new q.ui.Tree(r.tab.area,{
	onSelectChild : function(path) {
	  console.log("onSelectChild " + path);
	    var name = q.intercalate(".",path);
	    $.each(r.mdlCtx.value,function (i,v) {
	    if (v.value[0].value==name)
	      ctx.topExpr("Reading module "+name,app.appModule2.cachedCall(new p.String(name),v.value[1]));
      });

      }});
  };

  r.tree.setNodes(r.mdlCtx.map(function (i) {return i.value[0].value.split('.');}));
};
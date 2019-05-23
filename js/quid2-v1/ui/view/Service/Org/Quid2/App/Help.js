goog.provide('quid2.ui.view.Service.Org.Quid2.App.Help');

goog.require('quid2');

quid2.ui.view.Service.Org.Quid2.App.Help = function(ctx) {
  var q = quid2;
  var r = quid2.ui.view.Service.Org.Quid2.App.Help;

  if (q.isUndefined(r.tab)) {
    r.tab = ctx.tabs.add({label:"Help",title:"Help.",onSelect:$.noop});
  };

  //r.tab.area.html("<div class=help>"+ctx.obj.v+"</div>");

  quid2.ui.view.Language.Quid2.Literate.asLiterate($.extend({},ctx,{area:r.tab.area,obj:"<div class=help>"+ctx.obj.v+"</div>"}));
};

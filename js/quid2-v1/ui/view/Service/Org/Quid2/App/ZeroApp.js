goog.provide('quid2.ui.view.Service.Org.Quid2.App.ZeroApp');
goog.require('quid2');

quid2.ui.view.Service.Org.Quid2.App.App = function(ctx) {
  var q = quid2;
  var html = ctx.obj.match(["html"]).html.value;
  ctx.area.html(html);
  //quid2.ui.view.Language.Quid2.Literate.asLiterate($.extend({},ctx,{area:r.tab.area,obj:"<div class=help>"+ctx.obj.v+"</div>"}));
};

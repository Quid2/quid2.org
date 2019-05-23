goog.provide('quid2.ui.view.Service.Org.Quid2.App.View.Outline');

goog.require('quid2');

quid2.ui.view.Service.Org.Quid2.App.View.Outline = function(ctx) {
  var q = quid2;
  var r = quid2.ui.view.Service.Org.Quid2.App.View.Outline;

  if (q.isUndefined(r.tab)) {
    //r.tab = ctx.tabs.add({label:"Outline",title:"Outline.",onSelect:$.noop});
  };

  ctx.area.text("An outliner .. work in progress");
};

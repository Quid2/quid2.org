goog.provide('quid2.ui.view.Service.Org.Quid2.App.PublicModule');

goog.require('quid2');
//goog.require('quid2.ui.Tree');

quid2.ui.view.Service.Org.Quid2.App.PublicModule = function(ctx) {
  var q = quid2;
  var g = goog;

  var display = $("<div>Versions from:</div>");

  ctx.cop("Loading versions",ctx.env.call(q.app(ctx.env.v("Service.Org.Quid2.App","getVersions"),ctx.obj.v))).done(function (versions) {
    versions.vs.map(function (i) {display.append("&nbsp;").append($("<span>" + i[0] + "</span>").attr('title',q.show(i[1])));});
    ctx.area.append(display);
  });

};

quid2.ui.view.Service.Org.Quid2.App.PublicModule.kind = quid2.ui.View.PAGE;

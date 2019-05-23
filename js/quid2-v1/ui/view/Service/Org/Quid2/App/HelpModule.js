goog.provide('quid2.ui.view.Service.Org.Quid2.App.HelpModule');

goog.require('quid2');

quid2.ui.view.Service.Org.Quid2.App.HelpModule = function(ctx) {
  var q = quid2;
  var r = quid2.ui.view.Service.Org.Quid2.App.HelpModule;
  var k = quid2.ui.view.Service.Org.Quid2.App.Types.AppModule;
  var app = quid2.module.Service.Org.Quid2.App.Last.value;

  // NOTE: Help is not updated till next ui reload.
  // BUG: if loading fails is never reloaded.
  var modified = ! r.ctx || ! r.ctx.obj.equal(ctx.obj);
  r.ctx = ctx;

  if (q.isUndefined(r.tab)) {
    r.tab = ctx.tabs.add({label:"Help"
			  ,title:"Help."
			  ,onSelect:$.noop
			 });
  };

  function display () {
    var name = r.ctx.obj.parts[0];
    app.quid2ID.cachedCall().done(function (quid2ID) {
      r.ctx.cop("Reading module "+name.value
	  ,app.publicAppModuleByUser.call(quid2ID,name)
	 ).done(function (mdl) {
	   k.displaySource($.extend({},r.ctx,{area:r.tab.area,readOnly:true}),k.match(mdl));
	 });
    });
  };

  if (modified) display();

  //r.tab.area.html("<div class=help>"+ctx.obj.v+"</div>");
};


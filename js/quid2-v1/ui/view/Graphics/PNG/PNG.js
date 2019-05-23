goog.provide('quid2.ui.view.Graphics.PNG.PNG');
//goog.require('quid2');

quid2.ui.view.Graphics.PNG.PNG = function(ctx) {
  ctx.obj.match(function (dt) {ctx.area.html('<img src="data:image/png;base64,'+dt.value+'"/>');});
};

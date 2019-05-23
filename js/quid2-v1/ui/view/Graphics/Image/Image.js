goog.provide('quid2.ui.view.Graphics.Image.Image');
//goog.require('quid2');

quid2.ui.view.Graphics.Image.Image = function(ctx) {
  //var q = quid2;
  var url = ctx.obj.match(["url"]).url.value;
  ctx.area.html('<img src="'+url+'"/>');
};

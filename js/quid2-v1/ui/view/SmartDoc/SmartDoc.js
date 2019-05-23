goog.provide('quid2.ui.view.Lang.SmartDoc.SmartDoc');

quid2.ui.view.Lang.SmartDoc.SmartDoc = function(ctx) {
  var me = this;
  //me.ctx = ctx;
  me.display = ctx.area;

  this.display.html(ctx.obj.v);

  this.display.find("a").attr("target", "_blank");

  this.display.find("p").addClass("doc");

  this.display.find(".eval").click(function(e) {
    ctx.hub.publish("eval",{title:$(this).attr("title"),text: $(this).text()});
    e.stopPropagation();
  });

};
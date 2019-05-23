goog.provide("quid2.ui.MenuFrame");
goog.require("quid2");
goog.require("quid2.ui.Mixin");
goog.require("quid2.ui.MenuBar");
goog.require("quid2.ui.Status");
goog.require('quid2.ui.SplitTabs');
goog.require("quid2.ui.Event");

quid2.ui.MenuFrame = (function() {
  var q = quid2;
  var mix = q.ui.Mixin;
  var sup = q.ui.SplitTabs;

  function MenuFrame(optSecondComponent) {
    var me = this;
    me.menu = new q.ui.MenuBar();
    me.status = new q.ui.Status();
    sup.call(this
	     ,new q.ui.SplitTabs(me.menu,me.status,goog.ui.SplitPane.Orientation.HORIZONTAL,80)
	     ,optSecondComponent || new goog.ui.Component()
	     ,goog.ui.SplitPane.Orientation.VERTICAL,45,true,1);
  };

  goog.inherits(MenuFrame,sup);
  mix.mix(MenuFrame,mix.show);
  //mix.mix(MenuFrame,mix.event);

 MenuFrame.prototype.main = function() {
   return this.secondComponent_;
 };

MenuFrame.prototype.enterDocument = function() {
    var me = this;
    MenuFrame.superClass_.enterDocument.call(me);
    me.on(q.ui.Event.STATUS,function(event,chg) {
      //console.log("MENU FRAME STATUS",chg.cls,chg.msg);
      me.status.status(chg);
    });
    //$(me.secondComponentContainer_).addClass("quid2-content");
  };

  MenuFrame.prototype.exitDocument = function() {
    var me = this;
    MenuFrame.superClass_.exitDocument.call(me);
    me.off(q.ui.Event.STATUS);
  };

  return MenuFrame;

})();
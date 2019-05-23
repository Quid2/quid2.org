goog.provide("quid2.ui.MenuBar");
goog.require("quid2");
goog.require("quid2.ui.QComponent");
goog.require("quid2.ui.Button");

quid2.ui.MenuBar = (function() {
  var q = quid2;
  var sup = quid2.ui.QComponent;

  function MenuBar() {
    sup.call(this,"quid2-MenuBar");
  };

  goog.inherits(MenuBar,sup);

  /*MenuBar.prototype.createDom = function() {
    sup.createDom.call(this);
    var me = this;
    me.menu   = $("<span/>").addClass("quid2-MenuBar-menu");
    me.status = $("<span/>").addClass("quid2-MenuBar-status");
    $(this.getElement()).append(me.menu).append(me.status);
  };*/

  MenuBar.prototype.status = function(chg) {
    q.assert(chg.cls && chg.msg);
  };

  MenuBar.prototype.addCmd = function(model) {
    var cmd = new q.ui.Button();
    cmd.setModel(model);
    this.addChild(cmd,true);
    return cmd;
  };

  return MenuBar;
})();


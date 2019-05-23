goog.provide("quid2.ui.MenuBar");
goog.require("quid2");
goog.require("quid2.ui.Button");

quid2.ui.MenuBar = (function() {
  var q = quid2;

  function MenuBar(areaE,model) {
    q.assert(areaE);
    this.area = $("<span/>").addClass("menu").text("MENU AREA");
    $(areaE).append(this.area);
    this.model=model;
    this.cmds = [];
  };

  MenuBar.prototype.traverse = function(f) {
    var mb = this.cmds;
    for (var i=0;i<mb.length;i++) {
      var r = f(mb[i]);
      if (r) return r;
    };
  };

  MenuBar.prototype.addCmd = function(model) {
    var cmd = new q.ui.Button(this.area,model);
    this.cmds.push(cmd);
    return cmd;
  };

  return MenuBar;
})();


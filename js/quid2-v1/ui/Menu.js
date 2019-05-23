goog.provide("quid2.ui.Menu");
goog.require("quid2");

quid2.ui.Menu = (function() {
  var q = quid2;

  function Menu(area,model) {
    this.area = area.addClass("menu");
    this.model = model;
    this.subMenus = [];
  };

  Menu.prototype.empty = function(opts) {this.set([]);};

  /** @param opts : [(Name,Function)] **/
  Menu.prototype.set = function(opts) {
    var me = this;
    me.area.empty();
    $.each(opts,function (n,e) {me.area.append($("<span>"+e[0]+"</span>").button().click(e[1]));});
  };

  function Cmd(area) {
    this.area = $("<span/>").button();
    area.append(this.area); //???
  };

  Cmd.prototype.onNext = function (v) {
    q.assert(v.label && v.title && v.act,"Cmd.onNext");
    this.area.text(v.label).attr("title",v.title).off("click").on("click",v.act);
  };

  Cmd.prototype.onError = function (e) {
    console.log("Cmd.prototype.onError",e);
  };

  Cmd.prototype.onCompleted = function () {
    console.log("Cmd.prototype.onCompleted");
  };

  Cmd.prototype.dispose = function () {
    console.log("Cmd.prototype.dispose");
    this.area.remove();
  };

  Menu.prototype.addCmd = function() {
    return new Cmd(this.area);
  };

  Menu.prototype.subMenu = function(model) {
    var area = $("<span/>");
    this.area.append(area);
    var menu = new Menu(area,model);
    this.subMenus.push(menu);
    return menu;
  };

  return Menu;
})();


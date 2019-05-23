goog.provide("quid2.ui.Button");
goog.require("goog.ui.Component");
goog.require("quid2");
goog.require("quid2.ui.Status");

quid2.ui.Button = (function() {
  var q = quid2;
  var sup = goog.ui.Component;

  function Button() {
    sup.call(this);
  };

  goog.inherits(Button,sup);

  /*function Button(area,model) {
    q.assert(area,"Button");
    this.area = $("<span/>").button();
    area.append(this.area);
    this.model = model;
  };*/

  Button.prototype.createDom = function() {
    var me = this;
    var elem = me.dom_.createElement('span');
    //elem.className = this.className;
    //this.area =
    var jelem = $(elem);
    jelem.button();
    this.setElementInternal(elem);
    me.status = {
      ok:function () {quid2.ui.Status.setStatus(elem,"plain");}
      ,working:function () {quid2.ui.Status.setStatus(elem,"working");}
      ,error:function () {quid2.ui.Status.setStatus(elem,"error");}
    };
  };

  Button.prototype.onNext = function (v) {
    q.assert(v.label && (v.f || v.act),["Button.onNext",v,v.label]);
    var me = this;
    var button = $(this.getContentElement());
    console.log("Button.prototype.onNext",v);
    button.find(".ui-button-text").text(v.label);
    me.status.ok();
    button.attr("title",v.title || "").off("click").on("click",function() {
      if (v.f) return v.f();
      me.status.working();
      try {
	// BUG: coding errors will be detected only the first time.
	(v.act()).then(me.status.ok,me.status.error);
      } catch(err) {
	me.status.error(err);
      }
    });
    //console.log("BUTTON,",button.attr("title"),v.title);
  };

  Button.prototype.onError = function (e) {
    q.assert(e,"Button.onError");
    console.log("Button.prototype.onError",e);
  };

  Button.prototype.onCompleted = function () {
    console.log("Button.prototype.onCompleted");
  };

  Button.prototype.dispose = function () {
    console.log("Button.prototype.dispose");
    this.area.remove();
    delete this.area;
  };

  return Button;
})();


goog.provide("quid2.ui.Status");
goog.require("quid2");
goog.require("quid2.ui.QComponent");

quid2.ui.Status = (function() {
  var q = quid2;
  var g = goog;
  var sup = quid2.ui.QComponent;

  function Status() {
    sup.call(this,"quid2-Status");
  };
  goog.inherits(Status,sup);

  Status.setStatus = function (elem,cls,msg) {
    //q.assert(elem && (!cls || cls=="info" || cls=="working" || cls=="warning" || cls=="error"));
    q.assert(elem && (cls=="info" || cls=="working" || cls=="warning" || cls=="error" || cls=="plain"));
    var jelem = $(elem);
    jelem.removeClass("quid2-Status-info quid2-Status-error quid2-Status-warning quid2-Status-working");
    if (cls) jelem.addClass("quid2-Status-"+cls);
    if (g.isString(msg)) jelem.text(msg);
    console.log("Status",cls,msg);
  };
  //Status.ok = function (elem) {Status.setClass(elem);};

  Status.prototype.status = function(chg) {
    q.assert(chg.cls && g.isString(chg.msg));
    Status.setStatus(this.getElement(),chg.cls,chg.msg);
  };

  return Status;
})();


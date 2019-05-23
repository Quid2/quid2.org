goog.provide("quid2.ui.QComponent");
goog.require("quid2");
goog.require("goog.ui.Component");
goog.require("quid2.ui.Mixin");

quid2.ui.QComponent = (function() {
  var q = quid2;
  var mix = q.ui.Mixin;

  function QComponent(optClass) {
    goog.ui.Component.call(this);
    this.className = optClass || "";
  };

  goog.inherits(QComponent,goog.ui.Component);
  mix.mix(QComponent,mix.traverse);

  mix.mix(QComponent,mix.resize);
  mix.mix(QComponent,mix.show);

  QComponent.prototype.createDom = function() {
    var elem = this.dom_.createElement('div');
    elem.className = this.className;
    this.setElementInternal(elem);
  };

  return QComponent;
})();


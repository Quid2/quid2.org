goog.provide("quid2.ui.JComponent");
goog.require("quid2");
goog.require("goog.ui.Component");
goog.require("quid2.ui.Mixin");

/** Component that simply wraps a jquery elem. **/
quid2.ui.JComponent = (function() {
  var q = quid2;
  var mix = q.ui.Mixin;

  function JComponent(jelem) {
    q.assert(jelem);
    goog.ui.Component.call(this);
    this.jelem = jelem;
  };

  goog.inherits(JComponent,goog.ui.Component);
  mix.mix(JComponent,mix.event);
  mix.mix(JComponent,mix.resize);
  mix.mix(JComponent,mix.show);

  JComponent.prototype.createDom = function() {
    this.setElementInternal(this.jelem.get(0));
  };

  return JComponent;
})();


goog.provide("quid2.ui.Win");
goog.require('goog.dom');
goog.require('goog.math.Size');
goog.require("quid2");
goog.require('quid2.ui.MenuFrame');
goog.require('quid2.ui.Tabs');
goog.require("quid2.ui.Mixin");

quid2.ui.Win = (function() {
  var q = quid2;
  var mix = q.ui.Mixin;
  var sup = q.ui.MenuFrame;

  Win.MAIN = 0;
  Win.SIDE = 1;
  Win.SYSTEM = 2;

 function Win() {
   /*sup.call(this
	    ,new quid2.ui.SplitTabs(
		 new quid2.ui.SplitTabs(new quid2.ui.Tabs(),new quid2.ui.Tabs(),goog.ui.SplitPane.Orientation.VERTICAL,66)
	      ,new quid2.ui.Tabs()
	      ,goog.ui.SplitPane.Orientation.HORIZONTAL
	      ,33));*/
   sup.call(this,new quid2.ui.SplitTabs(new quid2.ui.Tabs(),new quid2.ui.Tabs(),goog.ui.SplitPane.Orientation.HORIZONTAL,33));
 };

 goog.inherits(Win,sup);

 Win.prototype.addTab = function(tab) {
   var me = this;
   return (tab.kind==Win.MAIN ? me.main().rhs() : tab.kind==Win.SYSTEM ? me.main().lhs().rhs() : me.main().lhs().lhs()).add(tab);
 };

 Win.prototype.enterDocument = function() {
   var me = this;
   Win.superClass_.enterDocument.call(me);
   /*q.resize($(window),function() {
     me.resize(new goog.math.Size($(window).width(),$(window).height()));
   });*/
   me.sizer = Rx.Observable.sizeOf(window)
      .subscribe(function (s) {
	me.resize(s);
      });
  };

  Win.prototype.exitDocument = function() {
    var me = this;
    Win.superClass_.exitDocument.call(me);
    // FIX: does not remove sizer itself.
    me.sizer.dispose();
  };

  Win.prototype.traverseSides = function(f) {
    return this.main().traverse(function (t) {
      var k = t.getModel().kind;
      if (k!=Win.SIDE && k!=Win.SYSTEM) return;
      return f(t);
    });
  };

  Win.prototype.traverseMains = function(f) {
    return this.main().traverse(function (t) {
      if (t.getModel().kind!=Win.MAIN) return;
      return f(t);
    });
  };

  return Win;
})();
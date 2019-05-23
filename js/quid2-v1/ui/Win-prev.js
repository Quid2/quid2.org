goog.provide("quid2.ui.Win");
goog.require("quid2");
goog.require("quid2.ui.View");
goog.require('quid2.ui.MenuBar');
goog.require('quid2.ui.Tabs');
goog.require('quid2.ui.SplitTabs');
//goog.require("quid2.ui.TabsSplit");
//goog.require('goog.ui.SplitPane');
goog.require('goog.dom');
goog.require('goog.math.Size');
//goog.require('goog.ui.RoundedPanel');
goog.require("quid2.ui.Mixin");

quid2.ui.Win = (function() {
  var q = quid2;
  var mix = q.ui.Mixin;

  Win.MAIN = 0;
  Win.SIDE = 1;
  Win.SYSTEM = 2;

  // TODO: inherit from MenuFrame
   /*var f = new quid2.ui.MenuFrame(
	       new quid2.ui.SplitTabs(
		 new quid2.ui.SplitTabs(new quid2.ui.Tabs()
			     ,new quid2.ui.Tabs()
			     ,goog.ui.SplitPane.Orientation.VERTICAL
			     ,66)
      ,new quid2.ui.Tabs()
      ,goog.ui.SplitPane.Orientation.HORIZONTAL
   ,33));
   me.addChild(f,true);
   me.menu = f.menu;
   me.main = f.main;
  */

 function Win(opt_domHelper) {
   goog.ui.Component.call(this,opt_domHelper);
 };

 goog.inherits(Win,goog.ui.Component);
 mix.mix(Win,mix.event);

 Win.prototype.createDom = function() {
  quid2.ui.Win.superClass_.createDom.call(this);
  this.decorateInternal(this.getDomHelper().createElement('div'));
 };

 Win.prototype.decorateInternal = function(element) {
   var me = this;
   quid2.ui.Win.superClass_.decorateInternal.call(this, element);

   // TODO: build in elem, not in body

   me.menu = new q.ui.MenuBar();
   me.main = new quid2.ui.SplitTabs(me.menu
	       ,new quid2.ui.SplitTabs(
		 new quid2.ui.SplitTabs(new quid2.ui.Tabs()
			     ,new quid2.ui.Tabs()
			     ,goog.ui.SplitPane.Orientation.VERTICAL
			     ,66)
      ,new quid2.ui.Tabs()
      ,goog.ui.SplitPane.Orientation.HORIZONTAL
   ,33),goog.ui.SplitPane.Orientation.VERTICAL,40,true,0);
   me.addChild(me.main,true);

   me.tabs = {
     add: function(tab) {
       return (tab.kind==Win.MAIN ? me.main.rhs().rhs() : tab.kind==Win.SYSTEM ? me.main.rhs().lhs().rhs() : me.main.rhs().lhs().lhs()).add(tab);
     }
   };
 };

  function mainResize(me) {
   //me.main.resize(new goog.math.Size($(window).width(),$(window).height()-me.cmdBar.outerHeight(true)));
   me.main.resize(new goog.math.Size($(window).width(),$(window).height()));
 };

 Win.prototype.enterDocument = function() {
   var me = this;
   quid2.ui.Win.superClass_.enterDocument.call(me);

   //goog.events.listen(new goog.dom.ViewportSizeMonitor(), goog.events.EventType.RESIZE,mainResize);
   function mResize() {
     return mainResize(me);
   }
   q.resize($(window),mResize);
   //q.resize(me.cmdBar,mResize);
  };

  Win.prototype.traverseMenu = function(f) {return this.menu.traverse(f);};

  Win.prototype.traverseSides = function(f) {
    return this.main.traverse(function (t) {
      var k = t.getModel().kind;
      if (k!=Win.SIDE && k!=Win.SYSTEM) return;
      return f(t);
    });
  };

  Win.prototype.traverseMains = function(f) {
    return this.main.traverse(function (t) {
      if (t.getModel().kind!=Win.MAIN) return;
      return f(t);
    });
  };

  return Win;
})();
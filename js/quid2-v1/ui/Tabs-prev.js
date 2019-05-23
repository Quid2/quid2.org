goog.provide("quid2.ui.Tabs");
goog.require("quid2");
goog.require("goog.ui.Component");
goog.require("quid2.ui.TabDrag");
goog.require('goog.ui.RoundedTabRenderer');
goog.require("goog.ui.TabBar");

quid2.ui.TabI = (function() {
  var q = quid2;

  function TabI(model,bar) {
   q.assert(model && model.area && bar,"TabI");
   var me = this;
   me.model = model;
   me.label = $("<span/>").text("   ");
   var cmds = $("<span>&nbsp;</span>");
   if (! model.persistent) {
     var deleteCmd = $("<img src='http://jslib.quicquid.org/icons/fam/delete.gif'/>").attr("title","Delete this tab.");
     cmds.append(deleteCmd);
     goog.events.listenOnce(deleteCmd.get(0),goog.events.EventType.CLICK,function() {bar.delTab(me.tab);});
   };
   var caption = $("<span/>").append(me.label).append(cmds).get(0);
   me.tab = new goog.ui.Tab(caption,goog.ui.RoundedTabRenderer.getInstance());
   me.tab.setModel(me);
   me.area = model.area;
   me.onSelect = model.onSelect;
 };
 TabI.prototype.setLabel = function(l) {this.label.text(l);};
 TabI.prototype.setTitle = function(l) {this.tab.setTooltip(l);};
 TabI.prototype.getLabel = function() {return this.label.text();};
 TabI.prototype.getTitle = function() {return this.tab.getTooltip();};
 TabI.prototype.select = function() {return this.tab.getParent().setSelectedTab(this.tab);};
 TabI.prototype.getModel = function() {return this.model;};
 return TabI;
})();

quid2.ui.Tabs = (function() {
 var q = quid2;
 var drag = new quid2.ui.TabDrag();

 function Tabs(opt_domHelper) {
   goog.ui.Component.call(this,opt_domHelper);
   this.events = [];
 };

 goog.inherits(Tabs, goog.ui.Component);

 Tabs.prototype.createDom = function() {
  quid2.ui.Tabs.superClass_.createDom.call(this);
  this.decorateInternal(this.getDomHelper().createElement('div'));
 };

 Tabs.prototype.decorateInternal = function(element) {
   quid2.ui.Tabs.superClass_.decorateInternal.call(this, element);

   var me = this;
   var dom = this.getDomHelper();

   var loc = goog.ui.TabBar.Location.TOP;
   me.tabBar = new goog.ui.TabBar(loc);
   me.addChild(me.tabBar, true);

   var content = new goog.ui.Component();
   var cnt = goog.dom.createDom('div',"goog-tab-content");
   content.setElementInternal(cnt);
   me.jContent = $(cnt);

   var sep = new goog.ui.Component();
   sep.setElementInternal(goog.dom.createDom('div',"goog-tab-clear"));

   if (loc == goog.ui.TabBar.Location.START || loc == goog.ui.TabBar.Location.END) {
     me.addChild(content, true);
     me.addChild(sep, true);
   } else {
     me.addChild(sep, true);
     me.addChild(content, true);
   };
  };

  Tabs.prototype.enterDocument = function() {
    var me = this;
    quid2.ui.Tabs.superClass_.enterDocument.call(me);
    //me.resize();

    function lpos(p,w) {
     var i = p/w;
     return i<0.33 ? "L" : i<0.66 ? "M" : "H";
    };

    function tabBodyDrop (src,epos) {
     var LEFT=0,RIGHT=1,TOP=2,BOTTOM=3,NONE=-1;
     var pos = me.jContent.offset();
     var xPos = lpos(epos.left-pos.left,me.jContent.innerWidth());
     var yPos = lpos(epos.top-pos.top  ,me.jContent.innerHeight());
     var dropKind = xPos=="L" && yPos=="M" ? LEFT : xPos=="M" && yPos=="L" ? TOP : xPos=="M" && yPos=="H" ? BOTTOM : xPos=="H" && yPos=="M" ? RIGHT : NONE;

      if (dropKind == NONE || (src.tabs==me && me.tabBar.getChildCount()==1)) return;

     console.log("tabBodyDrop",dropKind,src,arguments);
     var dest = new Tabs();
     var orientation = dropKind==LEFT || dropKind==RIGHT ? goog.ui.SplitPane.Orientation.HORIZONTAL : goog.ui.SplitPane.Orientation.VERTICAL;
     var sides = dropKind==LEFT || dropKind==TOP ? [dest,me] : [me,dest];
     me.getParent().split(me,orientation,sides[0],sides[1]);

     moveTab(src,dest);
   };

   function tabBarDrop (src) {
     if (src.tabs==me && me.tabBar.getChildCount()==1) return;
     console.log("tabBarDrop",src,arguments);
     moveTab(src,me);
   };

   drag.addTarget(me.tabBar.getContentElement(),tabBarDrop);
   drag.addTarget(me.jContent.get(0),tabBodyDrop);

   me.events.push(goog.events.listen(me.tabBar.getContentElement(),goog.events.EventType.DBLCLICK,function(e) {
    var tabs = e.target;
    console.log("DBLCLICK",tabs);
    me.getParent().toggleSizing(me);
   }));

   me.events.push(goog.events.listen(me.tabBar,goog.ui.Component.EventType.SELECT,function (e) {
    var tab = e.target;
    console.log("SELECT",tab);
    var m = tab.getModel();
    if (m.onSelect) m.onSelect(m);
    m.area.show();
    }));

   me.events.push(goog.events.listen(me.tabBar, goog.ui.Component.EventType.UNSELECT,function (e) {
      var tab = e.target;
      console.log("UNSELECT",tab);
      var m = tab.getModel();
      if (m.onUnSelect) m.onUnSelect(m);
      m.area.hide();
    }));
 };

 Tabs.prototype.exitDocument = function() {
   var me = this;
   quid2.ui.Tabs.superClass_.exitDocument.call(me);

   me.events.map(goog.events.unlistenByKey);
   me.events=[];
  };

 Tabs.prototype.lhs = function() {return this;};
 Tabs.prototype.rhs = function() {return this;};

 function moveTab(src,dest) {
   // We allow moving tabs on the same Tabs as this is useful for reordering them.
   // if (src == dest) return;
   src.tabs.delTab(src.tab);
   dest.addTab(src.tab);
 };

 /** Find the tab associated to the given value. **/
 /*Tabs.prototype.find = function(value) {
   var me = this;
   var n = me.tabBar.getChildCount();
   for (var i=0;i<n;i++) {
     var c = me.tabBar.getChildAt(i);
     console.log("FIND:",value.show(),c.getModel(),c.getModel().value && c.getModel().value.show());
     if (c.getModel().value && c.getModel().value.equal(value))
       return c.getModel();
   };
   return false;
 };*/

 Tabs.prototype.traverse = function(f) {
   var me = this;
   var n = me.tabBar.getChildCount();
   for (var i=0;i<n;i++) {
     var c = me.tabBar.getChildAt(i).getModel();
     var r = f(c);
     if (r) return r;
   };
   return false;
 };


 /* @param tb :: Model{model:*,kind:Win.Kind,persistent:Bool,area:jqueryElem[,onSelect::Tab -> IO()]} */
 Tabs.prototype.add = function(model) {
  var t = new quid2.ui.TabI(model,this);
  this.addTab(t.tab);
  return t;
 };

 Tabs.prototype.addTab = function(tab) {
   var me = this;
   me.jContent.append(tab.getModel().area);
   me.tabBar.addChild(tab,true);
   me.tabBar.setSelectedTab(tab);
   drag.addSource(tab.getContentElement(),{tabs:me,tab:tab});
 };

 Tabs.prototype.delTab = function(tab) {
   var me = this;
   tab.getModel().area.detach();
   drag.delSource(tab.getContentElement());
   me.tabBar.removeChild(tab,true);
   if (me.tabBar.getChildCount()==0) me.getParent().suicide(me);
 };

 Tabs.prototype.resize = function(size) {
   var me = this;

   /*function resizeContainer(event) {
     console.log("resizeContainer",event);
   };

   function resizeBefore(event) {
     console.log("resizeBefore",event);
   };*/

   //var containerHeight = me.area.parent().resize(resizeContainer).height();
   //var beforeHeight0 = me.area.children().first().resize(resizeBefore).outerHeight();//$(me.tabBar.getContentElement()).resize(resizeBefore).height();
   var beforeHeight = 45; // BUG: Hardwired.

   me.jContent.css('height',(size.height-beforeHeight)+'px').css('width',size.width);
 };

 return Tabs;
})();

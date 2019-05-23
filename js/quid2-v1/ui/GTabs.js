goog.provide("quid2.ui.GTabs");
goog.require("quid2");
goog.require("quid2.ui.TabDrag");
goog.require('goog.ui.RoundedTabRenderer');
goog.require("goog.ui.TabBar");

quid2.ui.GTabs = (function() {

 var drag = new quid2.ui.TabDrag();

 function GTabs(area,daddy) {
   var me = this;
   //me.ctx = ctx;
   me.area = area;
   area.empty();

   var loc = goog.ui.TabBar.Location.TOP;

   me.tabBar = new goog.ui.TabBar(loc);
   me.tabBar.render(area.get(0));

   me.contentArea = $("<div/>").addClass("goog-tab-content");
   var sep = $("<div/>").addClass("goog-tab-bar-clear");
   if (loc == goog.ui.TabBar.Location.START || loc == goog.ui.TabBar.Location.END)
    area.append(me.contentArea).append(sep);
   else area.append(sep).append(me.contentArea);

   me.resize();

  function moveTab(src,dest) {
     console.log("moveTab",src,dest);
     //src.tabBar.removeChild(src.tab,true);
     src.tabs.del(src.tab);
     drag.delSource(src.tab.getContentElement());
     var area = src.tab.getModel().area;
     area.detach();
     dest.contentArea.append(area);
     dest.addTab(src.tab);
   };

   function lpos(p,w) {
     var i = p/w;
     return i<0.33 ? "L" : i<0.66 ? "M" : "H";
   };

   function tabBodyDrop (src,epos) {
     var LEFT=0,RIGHT=1,TOP=2,BOTTOM=3,NONE=-1;
     var pos = me.contentArea.offset();
     var xPos = lpos(epos.left-pos.left,me.contentArea.innerWidth());
     var yPos = lpos(epos.top-pos.top  ,me.contentArea.innerHeight());
     var dropKind = xPos=="L" && yPos=="M" ? LEFT : xPos=="M" && yPos=="L" ? TOP : xPos=="M" && yPos=="H" ? BOTTOM : xPos=="H" && yPos=="M" ? RIGHT : NONE;

     if (dropKind == NONE) return;

     console.log("tabBodyDrop",dropKind,src,arguments);
     var other = GTabs.instance;
     var orientation = dropKind==LEFT || dropKind==RIGHT ? quid2.ui.TabsSplit.HORIZONTAL : quid2.ui.TabsSplit.VERTICAL;
     var sides = dropKind==LEFT || dropKind==TOP ? [other,me] : [me,other];
     var dest = me.up.split(orientation,sides[0],sides[1]);
     moveTab(src,dest);
   };

   function tabBarDrop (src) {
     console.log("tabBarDrop",src,arguments);
     moveTab(src,me);
     /*src.tabBar.removeChild(src.tab,true);
     drag.delSource(src.tab.getContentElement());
     var area = src.tab.getModel().area;
     area.detach();
     me.contentArea.append(area);
     me.addTab(src.tab);*/
   };

   drag.addTarget(me.tabBar.getContentElement(),tabBarDrop);
   drag.addTarget(me.contentArea.get(0),tabBodyDrop);

   goog.events.listen(me.tabBar,goog.ui.Component.EventType.SELECT,function(e) {
    var tab = e.target;
    var m = tab.getModel();
    console.log("TAB SELECT",me.tabBar.getSelectedTab().getCaption(),tab.getCaption(),m);
    if (m.onSelect) m.onSelect(m);
    m.area.show();
  });

  goog.events.listen(me.tabBar, goog.ui.Component.EventType.UNSELECT,function(e) {
    var tab = e.target;
    var m = tab.getModel();
    console.log("TAB UNSELECT",tab.getCaption(),m);

    if (m.onUnSelect) m.onUnSelect(m);
    m.area.hide();
  });
 };

 GTabs.prototype.lhs = function() {return this;};
 GTabs.prototype.rhs = function() {return this;};

 GTabs.prototype.addTab = function(tab) {
   var me = this;
   me.tabBar.addChild(tab,true);
   me.tabBar.setSelectedTab(tab);
   drag.addSource(tab.getContentElement(),{tabs:me,tab:tab});
 };

 GTabs.prototype.del = function(tab) {
   var me = this;
   me.tabBar.removeChild(tab,true);
   if (me.tabBar.getChildCount()==0) me.up.suicide();
 };

 GTabs.prototype.add = function(tb) {
  var me = this;
  var area = $("<span/>");
  me.contentArea.append(area);
  var tab = new goog.ui.Tab(tb.label,goog.ui.RoundedTabRenderer.getInstance());
  tab.setTooltip(tb.title);
  tab.setModel({area:area,onSelect:tb.onSelect});
  me.addTab(tab);
  return {area:area};
 };

 GTabs.prototype.resize = function(tb) {
   var me = this;

   function resizeContainer(event) {
     console.log("resizeContainer",event);
   };

   function resizeBefore(event) {
     console.log("resizeBefore",event);
   };

   var containerHeight = me.area.parent().resize(resizeContainer).height();
   var beforeHeight0 = me.area.children().first().resize(resizeBefore).outerHeight();//$(me.tabBar.getContentElement()).resize(resizeBefore).height();
   var beforeHeight = 45; // BUG: Hardwired.

   me.contentArea.css('height',(containerHeight-beforeHeight)+'px');
 };

 GTabs.instance = function (area,daddy) {return new GTabs(area,daddy);};

 return GTabs;
})();
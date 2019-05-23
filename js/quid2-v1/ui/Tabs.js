goog.provide("quid2.ui.Tabs");
goog.require("quid2");
goog.require("goog.ui.Component");
goog.require("quid2.ui.TabDrag");
goog.require("quid2.ui.Tab");
goog.require('goog.ui.RoundedTabRenderer');
goog.require("goog.ui.TabBar");
goog.require("quid2.ui.Mixin");
goog.require("quid2.ui.Event");
goog.require("quid2.ui.Help");

quid2.ui.Tabs = (function() {
 var q = quid2;
 var mix = q.ui.Mixin;
 var drag = new quid2.ui.TabDrag();

 function Tabs(opt_domHelper) {
   goog.ui.Component.call(this,opt_domHelper);
   this.events = [];
 };

 goog.inherits(Tabs, goog.ui.Component);
 mix.mix(Tabs,mix.event);
 mix.mix(Tabs,mix.resize);
 mix.mix(goog.ui.TabBar,mix.traverse);
 mix.mix(goog.ui.TabBar,mix.resize);

 Tabs.prototype.createDom = function() {
  quid2.ui.Tabs.superClass_.createDom.call(this);
  this.decorateInternal(this.getDomHelper().createElement('div'));
 };

 Tabs.prototype.decorateInternal = function(element) {
   quid2.ui.Tabs.superClass_.decorateInternal.call(this, element);
   var me = this;
   var dom = this.getDomHelper();
   me.getElement().className = 'quid2-Tabs';

   var loc = goog.ui.TabBar.Location.TOP;
   me.tabBar = new goog.ui.TabBar(loc);
   me.addChild(me.tabBar, true);

   me.content = new goog.ui.Component();
   var cnt = goog.dom.createDom('div',"goog-tab-content");
   me.content.setElementInternal(cnt);
   me.jContent = $(cnt);

   var sep = new goog.ui.Component();
   sep.setElementInternal(goog.dom.createDom('div',"goog-tab-clear"));

   if (loc == goog.ui.TabBar.Location.START || loc == goog.ui.TabBar.Location.END) {
     me.addChild(me.content, true);
     me.addChild(sep, true);
   } else {
     me.addChild(sep, true);
     me.addChild(me.content, true);
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
    return false;
   }));

   me.events.push(goog.events.listen(me.tabBar,goog.ui.Component.EventType.SELECT,function (e) {
    var tab = e.target;
    console.log("SELECT",tab);
    me.selectedChild = tab.content;

    //var m = tab.getModel();
    //if (m.onSelect) m.onSelect(m);
    tab.content.show();

    // We need to resize the tab as when is hidden its width is set to 0
    me.resizeChild(tab.content);//tab.content.resize && tab.content.resize(me.cntSize);

    //tab.trigger(q.ui.Event.FOCUS);
    tab.focus();

    //return false;
    }));

   me.events.push(goog.events.listen(me.tabBar, goog.ui.Component.EventType.UNSELECT,function (e) {
      var tab = e.target;
      console.log("UNSELECT",tab);
      //var m = tab.getModel();
      //if (m.onUnSelect) m.onUnSelect(m);
      tab.content.hide();
      //return false;
    }));

    me.on(q.ui.Event.DELETE,function(e,tab,closeOthers) {
      me.deleteTab(tab,closeOthers);
      return false;
    });

    /*q.resize($(me.getElement()),function() {
     me.resize(new goog.math.Size($(window).width(),$(window).height()));
    });*/

    /*new q.ui.Help(me.tabBar.getElement()
		  ,"Double-Click to toggle between full size and normal size display."
		   +"<p>Drag-and-Drop a tab to another tab bar to move it around.</p>"
		   +"<p>Create new tab bars by dragging and dropping a tab to the middle of the side of an existing tab content area.</p>"
		 );*/
 };

 Tabs.prototype.exitDocument = function() {
   var me = this;
   quid2.ui.Tabs.superClass_.exitDocument.call(me);

   me.events.map(goog.events.unlistenByKey);
   me.events=[];
   me.off();
  };

 Tabs.prototype.lhs = function() {return this;};
 Tabs.prototype.rhs = function() {return this;};

 function moveTab(src,dest) {
   // We allow moving tabs on the same Tabs as this is useful for reordering them.
   // if (src == dest) return;
   src.tabs.delTab(src.tab);
   dest.addTab(src.tab);
 };

 Tabs.prototype.getContentSize = function() {
   var me = this;
   var tabBarSize = me.tabBar.getSize();
   return new goog.math.Size(tabBarSize.width,$(me.getElement()).height() - tabBarSize.height);
 };

 Tabs.prototype.resizeChildren = function() {
   var me = this;
   var cSize = me.getContentSize();
   console.log("Tabs.prototype.resizeChildren",cSize.toString());
   goog.style.setBorderBoxSize(me.content.getElement(),cSize);
   me.content.forEachChild(me.resizeChild,me);
 };

 Tabs.prototype.resizeChild = function(ch) {
   if (ch != this.selectedChild) return;
   var contentInnerSize = q.dom.getInnerSize(this.content.getElement());
   console.log("Tabs.prototype.resizeChild",contentInnerSize.toString());
   ch.resize && ch.resize(contentInnerSize);
 };

/*
 Tabs.prototype.resizeParts = function() {
   var dom = this.getDomHelper();
   var elem = this.getElement();
   var elemSize = goog.style.getBorderBoxSize(elem);
   var bar =  dom.getFirstElementChild(elem);
   var barSize = goog.style.getBorderBoxSize(bar);
   var body = dom.getNextElementSibling(dom.getNextElementSibling(bar));
   var bodySize = elemSize.clone();
   bodySize.height = elemSize.height-barSize.height;
   console.log("Tabs.resizeParts",elemSize.toString(),barSize.toString());
   goog.style.setBorderBoxSize(body,bodySize);
 };
*/

 Tabs.prototype.traverse = function(f) {return this.tabBar.traverse(f);};

 /* @param tb :: Model{model:*,kind:Win.Kind,persistent:Bool,area:jqueryElem[,onSelect::Tab -> IO()]} */
 Tabs.prototype.add = function(model) {
  //var t = new quid2.ui.TabI(model,this);
  var t = new quid2.ui.Tab(model);
  this.addTab(t);
  return t;
 };

 Tabs.prototype.addTab = function(tab) {
   var me = this;
   //me.jContent.append(tab.getModel().area);
   me.content.addChild(tab.content,true);
   me.tabBar.addChild(tab,true);
   // BUG: do not generate select event when tab is created.
   me.tabBar.setSelectedTab(tab);
   drag.addSource(tab.getContentElement(),{tabs:me,tab:tab});
   me.resizeChild(tab.content);
   //me.resizeChildren();
 };

 Tabs.prototype.deleteTab = function(tab,closeOthers) {
   var me = this;
   if (closeOthers) {
     var chs = [];
     me.tabBar.forEachChild(function (ch) {chs.push(ch);});
     chs.map(function (ch) {
       if (ch!=tab && !ch.getModel().persistent) me.delTab_(ch);
     });
   } else me.delTab_(tab);
   if (me.tabBar.getChildCount()==0) me.getParent().suicide(me);
   else me.resizeChildren();
 };

 Tabs.prototype.delTab = function(tab) {
   var me = this;
   me.delTab_(tab);
   if (me.tabBar.getChildCount()==0) me.getParent().suicide(me);
   else me.resizeChildren();
 };

 Tabs.prototype.delTab_ = function(tab) {
   var me = this;
   //tab.getModel().area.detach();
   me.content.removeChild(tab.content,true);
   drag.delSource(tab.getContentElement());
   me.tabBar.removeChild(tab,true);
 };

 /*Tabs.prototype.resize = function(size) {
   var me = this;

   var elem = this.getElement();
   q.assert(elem);
   //goog.style.setBorderBoxSize(elem,{width:0,height:0});
   goog.style.setBorderBoxSize(elem,size);

   //var containerHeight = me.area.parent().resize(resizeContainer).height();
   //var beforeHeight0 = me.area.children().first().resize(resizeBefore).outerHeight();//$(me.tabBar.getContentElement()).resize(resizeBefore).height();

   //me.jContent.css('height',(size.height-beforeHeight)+'px').css('width',size.width-60);
   };*/

 return Tabs;
})();

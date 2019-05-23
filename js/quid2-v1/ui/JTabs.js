goog.provide("quid2.ui.JTabs");
goog.require("quid2");
goog.require("quid2.ui.View");
goog.require("quid2.ui.TabDrag");
goog.require('goog.dom');

quid2.ui.JTabs = (function() {
  var counter=0;
  function unique () {
    return "quid2-ui-JTabs-tab"+counter++;
  };

  function uniqueRef (id) {
    return "#"+id;
  };

  var drag = new quid2.ui.TabDrag();

 function JTabs(area) {
   var me = this;
   me.tabPane = $("<div><ul/><div/>");  //name='tabPaneIMade'
   me.area = area;
   me.area.append(me.tabPane);

   var ts = me.tabPane
     .tabs({
    //event: "mouseover",
     //tabTemplate: "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close'>Remove Tab</span></li>"
     // Select last added
     //add: function(event, ui) {me.tabPane.tabs('select', '#' + ui.panel.id);},
     select: function(event, ui) {
       me.tabs[ui.panel.id]();
       //me.selectedId = ui.panel.id;
     }
    }); //.sortable({ axis: "x" });

   function tabBodyDrop (src) {
     console.log("tabBodyDrop",src);
   };

   function tabBarDrop (src) {
     console.log("tabBarDrop",src);
   };
   drag.addTarget(ts.get(0),tabBodyDrop);
   drag.addTarget(ts.find(".ui-tabs-nav").get(0),tabBarDrop);

   me.tabs = {};
 };

 JTabs.prototype.add = function(tab) {
   var me = this;
   var tnum = unique();
   var tid = uniqueRef(tnum);
   var onSelect = tab.onSelect || $.noop;
   me.tabs[tnum] = onSelect;

   me.tabPane.tabs("add",tid,tab.label);
   var tabArea = me.tabPane.find(tid);
   var tabElem = me.tabPane.find("a[href=\""+tid+"\"]");
   tabElem.children().attr("title",tab.title);

   drag.addSource(tabElem.parent().get(0),tab);

   var pos = me.tabPane.tabs( "length")-1;
   me.tabPane.tabs( "select" , pos);
   if (pos==0) onSelect();

   //quid2.ui.View.display($.extend({},me.ctx,{area:tabArea,obj:obj}));
   //me.tabs({label:label,obj:obj,area:tabArea});
   return {id:tnum,area:tabArea};
 };

 /*
 JTabs.prototype.set = function(tabs) {
   var me = this;

   $.each(tabs,function (n,tab) {me.add(n,tab.label,tab.title,tab.obj);});
 };

 JTabs.prototype.add = function(n,label,title,obj) {
  var me = this;

  if (me.tabs.length<=n) {
    var tid = unique();

    me.tabPane.tabs("add",tid,label);
    var tabArea = me.tabPane.find(tid);
    me.tabPane.find("a[href=\""+tid+"\"]").children().attr("title",title);

    quid2.ui.View.display($.extend({},me.ctx,{area:tabArea,obj:obj}));

    me.tabs.push({label:label,obj:obj,area:tabArea});
    //quid2.ui.View.getViewer(obj);
  } else {
    var tab = me.tabs[n];
    if (! quid2.eq(obj,tab.obj)) {
      tab.obj=obj;
      quid2.ui.View.display($.extend({},me.ctx,{area:tab.area,obj:obj}));
    }

  }
 };
*/

 return JTabs;
})();
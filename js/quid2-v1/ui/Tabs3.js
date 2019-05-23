goog.provide("quid2.ui.Tabs3");
goog.require("quid2");
goog.require("quid2.ui.View");
goog.require("goog.ui.TabPane");

quid2.ui.Tabs3 = (function() {

  var g = goog;

 function Tabs3(ctx) {
  var me = this;
  me.ctx = ctx;
  var area = ctx.area;

  me.tabPane = new g.ui.TabPane(ctx.area.get(0));

  //this._tabs.render(g.dom.getAreaent(locID));
  //me.tabPane.render(area.get(0));

  //me.tabPane.addPage(new g.ui.TabPane.TabPage($("<div>Stuff</div>").get(0),"Help"));

  g.events.listen(me.tabPane, g.ui.Component.EventType.SELECT,function(e) {
    var tab = e.target;
    var m = tab.getModel();
    console.log("TAB SELECT",tab.getCaption(),m);
    //m.area.show();
    //if (m.onSelect) m.onSelect(m);
  });

  g.events.listen(me.tabPane, g.ui.Component.EventType.UNSELECT,function(e) {
    var tab = e.target;
    var m = tab.getModel();
    console.log("TAB UNSELECT",tab.getCaption(),m);

    //if (m.onUnSelect) m.onUnSelect(m);
    // NOTE: An alternative approach is to move this frame out of view by shifting it.
    // Maybe this way it might be sufficient to move it back and refocus it
    // for it to go back to its previous state.
    //m.area.hide();
  });
 };

 Tabs3.prototype.setSelectedTab = function(tab) {return me.tabPane.setSelectedTab(tab);};

 Tabs3.prototype.set = function(tabs) {
   var me = this;
   //area.empty();
   $.each(tabs,function (n,tab) {me.add(tab.label,tab.title,tab.obj);});
 };

   // We need to add the tab first so that its area is inserted in the DOM
 Tabs3.prototype.add = function(shortTitle,title,obj) {
   /*var tab_title = shortTitle;
   $tabs.tabs("add", "#tabs-" + tab_counter, shortTitle );
   tab_counter++;
  var area = $("<div/>");
  me.contentArea.append(area);
  var tab = new goog.ui.Tab(shortTitle);//,goog.ui.RoundedTabRenderer);
  tab.setTooltip(title);
  tab.setModel({area:area});
  return tab;
    */
  var me = this;
  var tabArea = $("<div/>");
  quid2.ui.View.display($.extend({},me.ctx,{area:tabArea,obj:obj}));
  me.tabPane.addPage(new g.ui.TabPane.TabPage(tabArea.get(0),shortTitle));
 };

   // and then we activate it to actually display  it
 Tabs3.prototype.activate = function(tab,model) {
  tab.setModel($.extend(tab.getModel(),model));
  tabPane.addChild(tab,true);
 };


 return Tabs3;
})();
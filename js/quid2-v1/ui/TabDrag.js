goog.provide("quid2.ui.TabDrag");
goog.require("quid2");
goog.require('goog.fx.DragDrop');
goog.require('goog.fx.DragDropGroup');
goog.require('goog.dom');

quid2.ui.TabDrag = (function() {

  function TabDrag() {
    var me = this;
    me.drag = new goog.fx.DragDropGroup();
    me.drag.setSourceClass('dragSource');
    me.drag.setTargetClass('dragTarget');
    me.drag.setDragClass('dragDrag');
    //me.drag.removeAllScrollableContainers();
    me.drag.init();

    function dragStart(event) {
      console.log("dragStart",event);
      //goog.style.setOpacity(event.dragSourceItem.element, 0.5);
      //$(event.dragSourceItem.element).css("z-index",1000);
    };

    function dragEnd(event) {
      console.log("dragEnd",event);
      //goog.style.setOpacity(event.dragSourceItem.element, 1.0);
    };

    //goog.events.listen(me.drag, 'dragstart', dragStart);
    //goog.events.listen(me.drag, 'dragend', dragEnd);
  };

  TabDrag.prototype.addTarget = function(elem,onDrop) {
     var t = new goog.fx.DragDrop(elem);
     t.setSourceClass('dragSource');
     t.setTargetClass('dragTarget');
     t.setDragClass('dragDrag');
     //function subTarget()
     //t.setSubtargetFunction(subTarget);
     t.init();

     this.drag.addTarget(t);

     function drop(event) {
       console.log("DROP",elem,event);
       onDrop(event.dragSourceItem.getData(),{top:event.viewportY,left:event.viewportX});
     };

     goog.events.listen(t, 'drop', drop);

    function dragOver(event) {
      console.log("dragOVER",elem,event);
      event.dropTargetItem.element.style.background = 'red';
    };

    function dragOut(event) {
      console.log("dragOUT",elem,event);
      event.dropTargetItem.element.style.background = 'white';
    };

    //goog.events.listen(t, 'dragover', dragOver);
    //goog.events.listen(t, 'dragout', dragOut);
   };

  TabDrag.prototype.addSource = function(elem,data) {
    this.drag.addItem(elem,data);
  };

  TabDrag.prototype.delSource = function(elem) {
    this.drag.removeItem(elem);
  };

  /*
  function dragOver(event) {console.log("dragover",event);}
  function dragOut(event) {console.log("dragout",event);}

  function dragDrop(event) {
    console.log("dragDrop",event);
    event.dropTargetItem.element.style.background = 'silver';
    var str = [
      event.dragSourceItem.data,
      ' dropped onto ',
      event.dropTargetItem.data
    ];
    console.log("DROP",str.join(''));
  };

  function dragDrag(event) {console.log("dragDrag",event);}
  function dragStart(event) {console.log("dragStart",event);}
  function dragEnd(event) {console.log("dragEnd",event);}

  goog.events.listen(drag, 'dragover', dragOver);
  goog.events.listen(drag, 'dragout', dragOut);
  goog.events.listen(drag, 'drop', dragDrop);
  goog.events.listen(drag, 'drag', dragDrag);
  goog.events.listen(drag, 'dragstart', dragStart);
  goog.events.listen(drag, 'dragend', dragEnd);

  function onNavDrop( event, ui ) {
     console.log("onNavDrop",event,ui,ui.draggable.find("a").attr("href"));
   };

   function onDrop( event, ui ) {
     console.log("onDrop",event,ui,ui.draggable.find("a").attr("href"));
     var newArea = me.window.splitHalf();
     var newTabs = new Tabs($.extend({},ctx,{area:newArea}));
     moveTabTo(newTabs);
     //newTabs.add(mov);
   };.droppable({
		  drop: onDrop
		})


    //drag.addTarget(new goog.fx.DragDrop(ts.find(".ui-tabs-nav").get(0)));
     .droppable({
		  drop: onNavDrop
		  ,greedy:true
		});
       //.sortable({ axis: "x" }); */

 return TabDrag;
})();
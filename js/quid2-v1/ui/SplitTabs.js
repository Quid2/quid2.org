goog.provide("quid2.ui.SplitTabs");
goog.require("quid2");
goog.require('goog.ui.SplitPane');
goog.require('goog.ui.SplitPane.Orientation');
goog.require('goog.style');
//goog.require('goog.ui.RoundedPanel');
goog.require("quid2.ui.Mixin");
goog.require('quid2.dom');

quid2.ui.SplitTabs =(function() {
  var q = quid2,g=goog;
  var mix = q.ui.Mixin;

  var NORMAL_SIZE =-1,LHS_FULLSIZE=0,RHS_FULLSIZE=1;

  function SplitTabs(firstComponent,secondComponent,orientation,lhsSize,isAbsolute,opt_sepSize,opt_domHelper) {
    var me = this;
    goog.ui.SplitPane.call(this,firstComponent,secondComponent,orientation,opt_domHelper);
    me.sizing = NORMAL_SIZE;
    me.sepSize= $.isNumeric(opt_sepSize) ? opt_sepSize : 6;
    me.lhsSize = lhsSize;
    me.isPercentage = ! isAbsolute;
    //var asize = me.getOrientation() == goog.ui.SplitPane.Orientation.VERTICAL ? size.height : size.width;
    //me.setInitialSize(Math.floor(me.isPercentage ? asize * me.lhsSize/100 : me.lhsSize));
    //if (isAbsolute) delete me.splitDragger_;//me.handleDrag_ = function() {};
    me.setHandleSize(me.sepSize);
    me.setContinuousResize(false);
  };

  goog.inherits(SplitTabs,goog.ui.SplitPane);
  mix.mix(SplitTabs,mix.event);

  SplitTabs.prototype.enterDocument = function() {
    var me = this;
    SplitTabs.superClass_.enterDocument.call(me);

    /*me.sizer = Rx.Observable.sizeOf(q.dom.getTop(me.getElement()))
      .subscribe(function (s) {
	me.resizeMe(s);
      });*/
  };

  SplitTabs.prototype.exitDocument = function() {
    var me = this;
    SplitTabs.superClass_.exitDocument.call(me);
    // FIX: does not remov sizer itslef.
    //me.sizer.dispose();
  };

  //SplitTabs.prototype.resize = function(size) {this.resizeMe(size);};

  /** Resize: called when either size or sizing (normal or full screen view) changes. **/
  SplitTabs.prototype.resize = function(optSize) {
   //q.assert(size,"SplitTabs.prototype.resize");
   //q.assert(g.isNumber(opt_size) && opt_size>=0,"SplitTabs.prototype.resize");
   var me = this;
   var size = optSize || me.getSize();
   console.log(me,"SplitTabs.resizeDown:",size.toString());
   var fullDim = me.getOrientation() == goog.ui.SplitPane.Orientation.VERTICAL ? size.height : size.width;
   var normalLeftSize = Math.floor(me.isPercentage ? fullDim * me.lhsSize/100 : me.lhsSize);
   var leftSize = me.sizing == NORMAL_SIZE ? normalLeftSize : me.sizing == LHS_FULLSIZE ? fullDim : 0;
   var handleSize = me.sizing == NORMAL_SIZE ? me.sepSize : 0;
   me.setHandleSize(handleSize);
   //me.setInitialSize(leftSize);
   //me.setFirstComponentSize(leftSize);
   me.firstComponentSize_ = leftSize;
   console.log(me,"firstComponentSize = ",leftSize);

   // NOTE: If element is hidden getBorderBoxSize will return 0 and setSize will miserably fail
   //goog.style.setBorderBoxSize(this.getElement(),size);
   //console.log(me,size.toString(),"--> size",goog.style.getBorderBoxSize(this.getElement()).toString());

   me.setSize(size);

   // This is all done by me.setSize(..)
   /*function resizeChild(c,e) {
     var cSize = goog.style.getBorderBoxSize(e);
     console.log("SplitTab.resizeChild",cSize.toString());
     c.resize && c.resize(cSize);
   };
   //resizeChild(me.firstComponent_,me.firstComponentContainer_);
   //resizeChild(me.secondComponent_,me.secondComponentContainer_);*/
  };

  SplitTabs.prototype.getSize = function() {
    return goog.style.getBorderBoxSize(this.getElement());
  };

  SplitTabs.prototype.lhs = function () {return this.firstComponent_;};
  SplitTabs.prototype.rhs = function () {return this.secondComponent_;};

  SplitTabs.prototype.getPos = function(child) {
    var pos = this.indexOfChild(child);
    q.assert(pos!=-1,"SplitTabs: not a child: "+ child);
    return pos;
  };

  SplitTabs.prototype.suicide = function(child) {
  var me = this;
  var survivalChild = me.removeChildAt(me.getPos(child)==0 ? 1 : 0,true);
  me.getParent().replaceWith(me,survivalChild,true);
  };

  SplitTabs.prototype.replaceWith = function(child,newChild,delChild) {
    var me = this;
    var pos = me.getPos(child);
    me.removeChildAt(pos,true);
    child.dispose();
    me.setSideAt(newChild,pos);
  };

  SplitTabs.prototype.split = function(child,orientation,lhs,rhs) {
    var me = this;
    var pos = me.getPos(child);
    me.removeChildAt(pos,true);
    var newSplit = new SplitTabs(lhs,rhs,orientation,50);
    me.setSideAt(newSplit,pos);
    me.setSizing(NORMAL_SIZE);
  };

  SplitTabs.prototype.setSideAt = function(newChild,pos) {
  var me = this;
  var dom = this.getDomHelper();
  if (pos==0) {
    me.firstComponent_ = newChild;
    if (!me.firstComponent_.getElement()) me.firstComponent_.createDom();
    dom.appendChild(this.firstComponentContainer_,this.firstComponent_.getElement());
  } else {
    me.secondComponent_ = newChild;
    if (!me.secondComponent_.getElement()) me.secondComponent_.createDom();
    dom.appendChild(this.secondComponentContainer_,this.secondComponent_.getElement());
  };
  me.addChildAt(newChild,pos);
  me.resize();
  };

  SplitTabs.prototype.toggleSizing = function(child) {
    var me = this;
    me.setSizing(me.sizing == NORMAL_SIZE ? me.getPos(child) : NORMAL_SIZE);
  };

  SplitTabs.prototype.setSizing = function(sizing) {
    var me = this;
    me.sizing = sizing;
    me.resize(me.getSize());
    //me.getParent().toggleSizing && me.getParent().toggleSizing(me);
    me.getParent() && me.getParent().setSizingFrom && me.getParent().setSizingFrom(me);
  };

  SplitTabs.prototype.setSizingFrom = function(child) {
    var me = this;
    me.setSizing(child.sizing == NORMAL_SIZE ? NORMAL_SIZE : me.getPos(child));
  };

  // Disable the snap facility.
  SplitTabs.prototype.handleDoubleClick = function() {};
  //SplitTabs.prototype.snapIt_ = function() {};

  SplitTabs.prototype.add = function(tb) {
   return this.lhs().add(tb);
  };

  /*SplitTabs.prototype.find = function(value) {
   var l = this.lhs().find && this.lhs().find(value);
   if (l) return l;
   return this.rhs().find && this.rhs().find(value);
  };*/

  SplitTabs.prototype.traverse = function(f) {
   var l = this.lhs().traverse && this.lhs().traverse(f);
   if (l) return l;
   return this.rhs().traverse && this.rhs().traverse(f);
  };

  return SplitTabs;
})();


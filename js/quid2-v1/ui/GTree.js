/*
 */
goog.provide('quid2.ui.GTree');
goog.require('quid2');
goog.require('goog.ui.tree.TreeControl');

quid2.ui.GTree = (function() {
  var q = quid2;
  var g = goog;

  goog.ui.tree.BaseNode.prototype.onClick_= goog.ui.tree.BaseNode.prototype.onDoubleClick_;

    function GTree (area,onSelect,rootLabel) {
  	var me = this;
	//me.area = area;

	me.root = new g.ui.tree.TreeControl(rootLabel || "",$.extend({},g.ui.tree.TreeControl.defaultConfig,{cleardotPath:'js/closure-library/closure/goog/images/tree/cleardot.gif'}));

	me.root.setModel({path:[]});
	me.root.setShowRootNode(!!rootLabel);
	me.root.setShowRootLines(true);
	me.root.setShowLines(true);
	me.root.setShowExpandIcons(true);
	me.root.render(area.get(0));

	function selected(e) {
	  var node = e.target;
	  if (node.getChildren().length == 0) onSelect(q.toName(node.getModel().path),node,node.getModel().value);
	};

	g.events.listen(me.root,g.ui.tree.BaseNode.EventType.BEFORE_EXPAND,selected);
     	g.events.listen(me.root,g.ui.tree.BaseNode.EventType.BEFORE_COLLAPSE,selected);
  };

 /*
   * @paths :: Haskell [[String]]
   * Find/Create paths.
   */
  GTree.prototype.addHPaths = function (paths) {
    var me = this;
    paths.map(function (path) {return me.addName(q.toName(path.map(function(s) {return s.value;})));});
  };

  /*
   * @names :: [String]
   */
  GTree.prototype.addNames = function(names) {
    var me = this;
    names.map(function (name) {return me.addName(name);});
  };

  /*
   * @name :: String
   * @return :: Node
   * Adding an existing name has no effect on the tree.
   */
  GTree.prototype.addName = function(name) {
    return this.addPath(this.root,q.toPath(name));
  };

  /*
   * @name  :: String
   * @value :: Any
   * @return :: Node
   */
  GTree.prototype.addNameValue = function(name,value) {
     var node = this.addName(name);
     node.setModel(q.ext(node.getModel(),{value:value}));
     return node;
  };

  /*
   * @name  :: [String]
   * @value :: Any
   * @return :: Node
   */
  GTree.prototype.addPathValue = function(path,value) {
     var node = this.addPath(this.root,path);
     node.setModel(q.ext(node.getModel(),{value:value}));
     return node;
  };

  /*
   * @path :: [String]
   * @return :: Node
   * Find/Create a path and return the corresponding node (paths are unique).
   */
  GTree.prototype.addPath = function (parent,path) {
    var n = this.addPath_(parent,path);
    n.setModel({path:parent.getModel().path.concat(path)});
    return n;
  };

  /*
   * @path :: [String]
   * @return :: Node
   * Find/Create a path and return the corresponding node (paths are unique).
   */
  GTree.prototype.addPath_ = function (parent,path) {
        //console.log("addPath",parent,path);
	var me = this;

	function newNode(txt) {
	  var node = me.root.createNode();
	  node.setText(txt);
	  return node;
	};

    function addChl(parent,txt,before) {
	  var node = newNode(txt);
	  parent.add(node,before);
	  return node;
	};

    	var isLeaf = path.length==1;
	function nextNode() {
	  var txt = path[0];
	  var chs = parent.getChildren();
	  var l = chs.length;

	  if (l==0) return addChl(parent,txt);

	  for (var i = 0; i < l; i++) {
	    var ch = chs[i];
	    var chIsLeaf = ch.getChildCount()==0;
	    var t = ch.getText();
	    if (isLeaf == chIsLeaf && txt==t) return ch;
	    if (t > txt) return addChl(parent,txt,ch);
	  };

	  return addChl(parent,txt);
	};

	var node = nextNode();
	if (isLeaf) {node.reveal();return node;}
        return this.addPath_(node,path.slice(1));
  };

  /*
   * @name :: String
   */
  GTree.prototype.delName = function(name) {this.delPath(this.root,q.toPath(name));};

  GTree.prototype.delPath = function(parent,path) {
      console.log("delPath",path);

      function delUp(node) {
	if (node.getChildCount()>0) return;
	var parent = node.getParent();
	if (!parent) return;
	parent.remove(node);
	delUp(parent);
      };
      var me = this;
      var txt = path[0];
      var chs = parent.getChildren();
      var l = chs.length;
      for (var i = 0; i < l; i++) {
	var ch = chs[i];
	if (txt == ch.getText()) {
	  if (path.length == 1) delUp(ch);
	  else me.delPath(ch,path.slice(1));
	};
      };
  };

  GTree.prototype.clear = function() {this.root.removeChildren();};

  return GTree;
})();

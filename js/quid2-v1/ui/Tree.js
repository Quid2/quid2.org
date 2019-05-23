goog.require('quid2');

goog.provide('quid2.ui.Tree');

quid2.ui.Tree = (function() {
	var q = quid2;
	var g = goog;

	var nullTreeCtrl = {
	  onSelectRoot : $.noop
	  ,onSelectChild : $.noop
	  ,getRootMenu : function() {return [];}
	  ,getChildMenu : function() {return [];}
	};

	function Tree(display ,ctrl ,optRootTitle) {
	  this.display = display;
	  this.ctrl = $.extend({},nullTreeCtrl,ctrl);
	  this.display.empty();
	  this.rootTitle = optRootTitle || "";
	};

	function onChildren(node,f) {
	  onChildren_(node,f,"");
	};

	function onChildren_(node,f,path) {
	    var newPath = ((path.length>0) ? path + "." : "") + node.data.title;
	    f(node,newPath);
 	    if (node.children) $.each(node.children,function (i,child) {onChildren_(child,f,newPath);});
	};

	/** paths :: [[quid2.primitive.String]] * */
	Tree.prototype.setPaths = function(paths) {
	  var nodes = paths.map(function (i) {return i.map(function (e) {return e.value;});});
	  this.setNodes(nodes);
	};

	/** names :: [String] * */
	Tree.prototype.setNames = function(names) {
	  this.setNodes(names.map(function (name) {return toPath(name);}));
	};

	/** paths :: [[String]] * */
	Tree.prototype.setNodes = function(paths) {
	  this.setVPaths(paths.map(function (path) {return [path];}));
	};

	/** name :: String * */
	Tree.prototype.addName = function(name) {
	  var me = this;
	  addChild(me.root,0,[toPath(name)],"open",{});
	  var currentNode = me.tree._get_node(null, false);
	  var parentNode = me.tree._get_parent(currentNode);
	  me.tree.refresh(parentNode);
	  //me.tree.refresh(-1);
	};

	/** paths :: [[[String],value]] * */
	Tree.prototype.setVPaths = function(paths) {
		var me = this;

		var nodesState = {};
		if (me.tree) {
		  onChildren($.jstree._reference(me.display).get_json(-1)[0],function (node,path) {
		    //console.log("PATH",path,node);
		    if (node.metadata.type == "folder") nodesState[path] = node.state;
		  });
		  //console.log("JSON BEFORE=",root);
		};

		me.root = {
				data : {
					title : me.rootTitle
				},
				metadata : {
				}
		};
		var defaultState = paths.length> 30 ? "" : "open";
		$.each(paths,function (i,fullPath) {
		  addChild(me.root,0,fullPath,defaultState,nodesState);
		});
		me.root.data.icon = "http://jslib.quicquid.org/icons/package.png";
		me.root.metadata.type = "root";
	        me.root.state = "open";

		if (me.tree)
		  me.tree.destroy();

		me.display //.empty()
		  .bind("click.jstree",g.partial(onClick,me))
		  //.bind("save_opened",function (o) {console.log("OPENED",o);})
		  //.bind("select_node.jstree",g.partial(onClick,me))
		  .jstree({
			plugins : [ "themes", "json_data", "ui", "crrm", "contextmenu", "sort" ],
			// [ "dnd", "search", "types", "hotkeys" ],,"unique"
			core : {
				animation : 0
			},
			json_data : {
				data : [ me.root ]
			},
			contextmenu : {
				select_node : true,
				items : g.partial(getMenu,me)
			}
		});

	        me.tree = $.jstree._reference(me.display);

		//$.jstree._reference(me.display).save_opened();
		//console.log("JSON=",$.jstree._reference(me.display).get_json(-1));
	};

	  function addChild(node,prefixLen,vpath,defaultState,nodesState) {
	        var fullPath = vpath[0];
        	var path = fullPath.slice(prefixLen);
		var txt = path[0];
		var pathS = fullPath.slice(0,prefixLen).join(".");
		var chType = path.length>1 ? "folder" : "file";

		var childNode;
		var chs = node.children || [];

		// Search existing children
		var l = chs.length;
		for ( var i = 0; i < l; i++)
			if (txt == chs[i].data.title && chs[i].metadata.type == chType) {
			  childNode = chs[i];
			  break;
			}

	        // Not found, create a new child.
		if (typeof childNode == "undefined") {
			childNode = {
				data : {
					title : txt,
					icon : "http://jslib.quicquid.org/icons/file.png"
				},
				metadata : {
					type : "file"
					,value : vpath[1]
					// mdl : pkg
				}
			};
			chs.push(childNode);
			node.children = chs;
			node.state = (nodesState[pathS] || defaultState) == "open" ? "open" : "";
			//console.log("STATE",pathS,node.state);
			node.data.icon = "http://jslib.quicquid.org/icons/folder.png";
			node.metadata.type = "folder";
		};

		if (path.length == 1) {} // childNode.metadata.unique = value;
		else addChild(childNode,prefixLen+1,vpath,defaultState,nodesState);

		return childNode;
	};

	  //function onClick(me,event,data) {

	  function onClick(me,event,data) {
		var o = me.tree._get_node(event.target);
	        //var o = me.tree._get_node(data.rslt.obj);
		var obj = getData(o);

		switch (obj.type) {
		case "root":
		  me.ctrl.onSelectRoot(event.ctrlKey);
		  break;
		case "folder":
		  break;
		case "file":
		  me.ctrl.onSelectChild(getPath(me,o),event.ctrlKey,obj.value);
		  break;
		default:
		  throw "unknown node type";
		};
	}

	function getMenu(me,obj) {
		//var obj = objs[0];
		//if (objs.length != 1) throw "getMenu(bad parameters)";
		// var o = $.data(obj, "jstree");
		var o = getData(obj);
		//console.log("getMenu", this, obj, o);

		function getMenu_(type) {
			switch (type) {
			case "root": return me.ctrl.getRootMenu();
			case "folder": return [];
			case "file": return me.ctrl.getChildMenu();
			default:
				throw "unknown node type";
			};
		};

		var menu = {};
		$.each(getMenu_(o.type),function(i,m) {
			menu[m[0]] = {
				label : m[1],
				action : function (obj) {$.proxy(me.ctrl,m[0])(getName(me,obj),obj);}
			};
		});

		return menu;
	};

	Tree.prototype.newNode = function(parent,name) {
		var me = this;

		var node = createNode(me,parent,toPath(name));
		// BUG: won't work
		me.tree.select_node(node, true);
		me.tree.sort(parent);
	};

	Tree.prototype.delNode = function(node) {
		this.tree.remove(node);
	}

	function createNode(me,parent, path) {
		if (path.length == 0) return parent;
		if (path.length == 1) return mkChild(me,parent, "file", path[0]);

		var nxt = pathExists(me,parent,[ path[0] ]);
		nxt = nxt ? nxt : mkChild(me,parent, "folder", path[0]);

		return createNode(me,nxt, path.slice(1));
	};

	function mkChild(me,parent, type, name) {
		var child = {
			data : {
				title : name,
				icon  : "http://jslib.quicquid.org/icons/" + type + ".png"
			}
		};
		if (type == "folder") child.state = "open";

		var ch = me.tree.create(parent, "inside", child, false, true);
		return ch.data("jstree", {
			type : type
			// ,mdl : getModel(parent)
		});
	};

	function pathExists(me,root, path) {
		if (path.length == 0) return root;

		// var tree = $.jstree._reference(root);
		var chs = me.tree._get_children(root);
		for ( var i = 0; i < chs.length; i++) {
			var ch = me.tree._get_node(chs[i]);
			if (me.tree.get_text(ch) == path[0]) if (getData(ch).type == "folder") return pathExists(me,ch, path.slice(1));
			else return ch;
		};
	};


	function getData(o) {
	  return o.data();
	  //return o.rslt.obj.data();
	  //		  return o.data("jstree");
	};

	function getName(me,o) {return q.intercalate(".", getPath(me,o));}

	function getPath(me,o) {
		return me.tree.get_path(o).slice(1);
	};

	function toPath(name) {return name.split(".");}

	return Tree;
})();
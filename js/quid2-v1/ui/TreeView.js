/**
 * @fileoverview Factory class to create a simple source tree from an array of
 *               data.
 *
 * var tree = new
 * quid2.ui.TreeView([["Fact","Country","Currency"],["Data","List"]]);
 * tree.render($$('experimentArea'));
 *
 */
goog.provide('quid2.ui.TreeView');
goog.require('quid2.PkgModel');

quid2.ui.TreeView = function(hub, display) {
  this.hub = hub;
  this.display = display;
};

quid2.ui.TreeView.prototype.setState = function(model) {

	function addPkg(pkg) {
		var pkgRoot = {
			data : {
				title : "Pkg"
			},
			metadata : {mdl:pkg}
		};

		var children = pkg.getTree().vs;
		for ( var i = 0; i < children.length; i++) {
			var ch = [ children[i][0].split("."), children[i][1] ];
			addChild(pkgRoot, ch, pkg);
		}

		pkgRoot.data.icon = "http://jslib.quicquid.org/icons/package.png";
		pkgRoot.metadata.type = "package";

		return pkgRoot;
	};

	function addChild(node, child, pkg) {
		var path = child[0];
		var value = child[1];
		var txt = path[0];

		var childNode;
		var chs = node.children || [];

		var l = chs.length;
		for ( var i = 0; i < l; i++)
			if (txt == chs[i].data.title) {
				childNode = chs[i];
				break;
			}

		if (typeof childNode == "undefined") {
			childNode = {
				data : {
					title : txt,
					icon : "http://jslib.quicquid.org/icons/file.png"
				},
				metadata : {
					type : "file",
					mdl : pkg
				}
			};
			chs.push(childNode);
			node.children = chs;
			node.state = "open";
			node.data.icon = "http://jslib.quicquid.org/icons/folder.png";
			node.metadata.type = "folder";
		};

		if (path.length == 1) {} //childNode.metadata.unique = value;
		else addChild(childNode, [ path.slice(1), value ], pkg);

		return childNode;
	};

	function getMenu(objs) {
		var obj = objs[0];
		if (objs.length != 1) throw "getMove(bad parameters)";
		var o = $.data(obj, "jstree");
		console.log("getMenu", this, obj, o);

		var menu = {};
		switch (o.type) {
		case "devapp":
		  //menuEntry(menu, "addPackage", "Add Package", addPackage);
		  break;
		case "package":
		  menuEntry(menu, "newModule", "New Module", addModule);
		  menuEntry(menu, "publishPkg", "Publish All Modules", publishAll);
		  break;
		case "folder":
		  break;
		case "file":
		  menuEntry(menu, "remove", "Remove", removeFile);
		  menuEntry(menu, "publish", "Publish", publishFile);
		  break;
		default:
		  throw "unknown node type";
		};

		return menu;
	}

	function menuEntry(menu, key, label, action) {
		menu[key] = {
			label : label,
			action : action
		};
	}

	function getData(o) {
		return o.data("jstree");
	}

	function getPath(o) {
		return me.tree.get_path(o).slice(2);
	};

	function getModel(o) {
	    return getData(o).mdl;
	}

  	function publishFile(o) {
	  var mdl = getModel(o);
	  if (mdl) mdl.publishModule(getPath(o));
	};

  	function publishAll(o) {
  	  var mdl = getModel(o);
  	  if (mdl) mdl.publishAllModules(getPath(o));
  	};

	function removeFile(o) {
	  var mdl = getModel(o);
	  if (mdl) mdl.delModule(getPath(o));

	  this.remove(o);
	};

  	function createNode(parent,path) {
	  if (path.length==0) return parent;
	  if (path.length==1) return mkChild(parent,"file",path[0]);

	  var nxt = pathExists(parent,[path[0]]);
	  nxt = nxt ? nxt : mkChild(parent,"folder",path[0]);

	  return createNode(nxt,path.slice(1));
	};

	function mkChild (parent,type,name) {
	  var child = {data:{title:name,icon:"http://jslib.quicquid.org/icons/"+type+".png"}};
	  if (type=="folder") child.state = "open";

	  return me.tree.create(parent,"inside",child,false,true).data("jstree",{type:type,mdl : getModel(parent)});
	};

	function pathExists(root,path) {
	  if (path.length==0) return root;

	  //var tree = $.jstree._reference(root);
	  var chs = me.tree._get_children(root);
	  for (var i=0;i<chs.length;i++) {
	    var ch =  me.tree._get_node(chs[i]);
	    if (me.tree.get_text(ch) == path[0])
	      if (getData(ch).type=="folder") return pathExists(ch,path.slice(1));
	      else return ch;
	  };
	};

  	function addModule(parent) {
	  var iname = prompt("Type the full name of the new module (e.g. Data.List)", "");
          if (! iname ) return;

	  var name = iname.replace(/ /g, "");
	  var path = name.split(".");
	  var modulePattern = /([A-Z][A-Za-z]*)(\\.[A-Z][A-Za-z]*)*/;
	  if (! modulePattern.test(name) || pathExists(parent,path)) return;

	  getModel(parent).addModule(name);

	  var node = createNode(parent,path);

	  // BUG: won't work
	  me.tree.select_node(node,true);
	  me.tree.sort(parent);
	};

  /*
    	function addPackage(parent) {
	  var iname = prompt("Enter the unique ID of the package to addType the full name of the new module (e.g. Data.List)", "");
          if (! iname ) return;
	};
*/

	var root = {
		data : {
			title : "App State",
			icon : "http://jslib.quicquid.org/icons/drive.png"
		},
		metadata : {
			type : "devapp"
		},
		state : "open",
		children : $.map(model.getPkgs(), addPkg)
	};

	var me = this;
	if (me.tree) me.tree.destroy();

	me.display.bind("click.jstree", function(event) {
		var o = me.tree._get_node(event.target);
		var obj = getData(o);

		switch (obj.type) {
		case "devapp":
		  me.hub.publish("edit",{type:"State"});
		  break;
		case "package":
		  break;
		case "folder":
		  break;
		case "file":
		  me.hub.publish("edit",{type:"SourceCode",pkg:obj.mdl,path:getPath(o)});
		  break;
		default:
		  throw "unknown node type";
		};
	})
    /*.bind("before.jstree", function (e, data) {
		  console.log("EVENT",data , data.func);
		  if data //return true;
		})
     */
    .jstree({
      	    plugins : [ "themes", "json_data", "ui", "crrm", "contextmenu" ,"sort" ],
		// [ "dnd", "search", "types", "hotkeys" ],,"unique"
		core : {
			animation : 0
		},
		json_data : {
			data : [ root ]
		},
		contextmenu : {
			select_node : true,
			items : getMenu
		}
	})
     /*
    .bind("rename_node.jstree", function(event,data) {
	    console.log("Rename");
	    var name = data.rslt.name.replace(/ /g, "");
	    var tree = data.inst;
	    var node = data.rslt.obj;
	    var meta = getData(node);
	    console.log("Rename",name,meta);

      var invalid = name.length==0 || name.substring(0,1).toLowerCase() == name.substring(0,1) || name == "NewModule" ||  name == "NewFolder";
	    if (invalid) return tree.remove(data.rslt.obj);

	    function built() {
	      meta.mdl=meta.pendingMdl;
	      delete meta.pendingMdl;
	    };

	    if (meta.type=="file") (meta.pendingMdl).addModule(name).then(function(){
	      });

})*/
  ;

  this.tree= $.jstree._reference(me.display);
};

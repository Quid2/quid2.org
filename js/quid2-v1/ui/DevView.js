goog.provide('quid2.ui.DevView');

goog.require('quid2.DevAppModel');
goog.require('quid2.ui.TreeView');
goog.require('quid2.ui.Editor');
goog.require('quid2.ui.PatchEditor');
goog.require('quid2.ui.StateEditor');
goog.require('quid2.ui.SourceEditor');

// BUG: should use own hub with main hub as parent.
quid2.ui.DevView = function(appState, conn, hub, area, appEnv) {
	var q = quid2;
	var me = this;
	this.display = $("<div/>");
	area.append(this.display);
	initUI(appState);

	function initUI(appState) {
		console.log("initUI", appState);
		var area = $("<table width=\"100%\"><tr valign=top/></table>");
		var treeArea = $("<td class=simplerPane width=\"25%\"/>");
		var fileArea = $("<td class=simplerPane/>");
		area.find("tr").append(treeArea).append(fileArea);
		me.display.append(area);

		if ($.browser.msie) hub.publish("warn",
				"Editing might not work correctly with Internet Explorer. Why not using a recent version of Google Chrome, Firefox or Opera?");

		hub.def(new q.ui.TreeView(hub, treeArea), [ "setState" ]);
		var model = new q.DevAppModel(conn, hub, appEnv, appState);
		// hub.def(new q.ui.Editor(hub,fileArea,model),
		// ["showFile","showDevApp"]);
		var editArea1 = $("<div/>");
		var editArea2 = $("<div/>");
		var editArea3 = $("<div/>");
		fileArea.append(editArea1).append(editArea2).append(editArea3);
		hub.def(new q.ui.PatchEditor(hub, editArea1, model), [ "edit" ]);
		hub.def(new q.ui.SourceEditor(hub, editArea2, model), [ "edit" ]);
		hub.def(new q.ui.StateEditor(hub, editArea3, model), [ "edit" ]);
	};

	function stateErr() {
		hub.publish("err","Cannot get application state.");
	};
};

/**
 * NOTE: saved only explicitly, not on page exit or change.
 */
goog.provide('quid2.ui.PkgStateEditor');
goog.require('quid2.ui.Editor');
goog.require('quid2');

quid2.ui.PkgStateEditor = function(hub, area, model) {
	var me = this;
	this.model = model;

	function save(obj, content) {
		console.log("Save Dev App", content);
		me.model.newStateTxt(content);
	};

	this.editor = new quid2.ui.Editor("text/x-quid2-expr", area, save);
};

quid2.ui.PkgStateEditor.prototype.edit = function(o) {
	// var q = quid2;
	var me = this;

	if (o.type != "State") return this.editor.closeDoc();

	if (this.editor.getObj()) return;

	this.model.getStateTxt().done(function(stateTxt) {
		me.editor.newDoc({
			content : stateTxt
		});
	});
};

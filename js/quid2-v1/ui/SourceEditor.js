/**
 * Editor for Quid2 source files.
 */
goog.provide('quid2.ui.SourceEditor');
goog.require('quid2.ui.Editor');
goog.require('quid2');

quid2.ui.SourceEditor = function(hub, area, model ,mimeType) {
	var me = this;
	this.model = model; // Pkg obj

	function save(file, content) {
	  me.model.saveModule(file.name, content);
	};

	this.editor = new quid2.ui.Editor(mimeType , area, save, save, save);
};

quid2.ui.SourceEditor.prototype.edit = function(o) {
	var q = quid2;
	var me = this;

	if (o.type != "SourceCode") return this.editor.closeDoc();

	var file = $.extend({}, o);

	var curr = this.editor.getObj();

	var sameFile = curr && (curr.pkg == file.pkg) && (curr.name == file.name);
	if (sameFile && ! file.pos) return;

	if (sameFile && file.pos) me.editor.moveTo(file.pos);
	else this.model.getModule(file.name).done(function(doc) {
		file.content = doc.content;
		me.editor.newDoc(file);
	});
};

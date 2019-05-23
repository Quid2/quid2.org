goog.provide('quid2.ui.Editor1');
goog.require('quid2');

quid2.ui.Editor1 = (function() {

	function Editor(mimeType, display, onSave, onChange, onClose) {
		var me = this;
		this.onClose = onClose;
		this.display = display.hide();
		this.loaded = new $.Deferred();

		var csBase = "http://jslib.quicquid.org/CodeMirror-0.92/";
		var cmFiles = {
			"application/x-javascript" : [ [ "tokenizejavascript.js", "parsejavascript.js" ], [ "jscolors.css" ] ],
			"text/html" : [ [ "parsexml.js", "parsecss.js", "tokenizejavascript.js", "parsejavascript.js", "parsehtmlmixed.js" ],
					[ "xmlcolors.css", "jscolors.css", "csscolors.css" ] ],
			"text/css" : [ [ "parsecss.js" ], [ "csscolors.css" ] ],
			"application/xml" : [ [ "parsexml.js" ], [ "xmlcolors.css" ] ],
			"text/x-haskell" : [ [ "codemirror_parse_haskell.js" ], [ "text.css", "haskell.css" ] ]
		};
		// TODO: add text.css to codemirror codebase.
		var fsDefault = [ [ "parsedummy.js" ], [ "text.css" ] ];

		var fs = cmFiles[mimeType];
		if (!fs) fs = fsDefault;

		var readOnly = false; // typeof onChange == "undefined";
		var pars = {
			height : "dynamic",
			minHeight : 444,
			width : "100%", // "800px", // TODO: adapt to actual available size
			// space
			readOnly : readOnly,
			reindentOnLoad : false,
			autoMatchParens : true,
			undoDelay : 5000,
			parserfile : fs[0],
			path : csBase + 'js/',
			stylesheet : $.map(fs[1], function(f) {
				return csBase + "css/" + f;
			}),
			content : "",
			saveFunction : function() {
				fwd(me, onSave);
			},
			onChange : function() {
				fwd(me, onChange || $.noop);
			},
			onLoad : function(e) {
				me.loaded.resolve("");
			},
			disableSpellcheck : true,
			lineNumbers : false,
			textWrapping : true
		};

		this.editor = new CodeMirror(display.get(0), pars);
	};

	Editor.prototype.getObj = function() {
		return this.obj;
	}

	/***************************************************************************
	 * @param obj.content =
	 *            text to display
	 * @param obj.pos =
	 *            {line:1..,column:1..} OPTIONAL
	 **************************************************************************/
	Editor.prototype.newDoc = function(obj) {
	console.log("Editor.newDoc",obj);
		var me = this;
		this.loaded.done(function() {
			chgState(me);
			me.obj = obj;
			me.editor.setCode(obj.content);
			me.editor.jumpToLine(me.editor.lastLine());
			toPos(me,obj.pos);
		});
	};

	Editor.prototype.closeDoc = function() {
	  	console.log("Editor.closeDoc");
		var me = this;
		this.loaded.done(function() {
			chgState(me);
			delete me.obj;
			me.display.hide();
		});
	};

	function chgState(me) {
		if (me.obj) fwd(me, me.onClose || $.noop);
		me.editor.clearHistory();
	};

	function fwd(me, f) {
		f(me.obj, me.editor.getCode());
	}

	function toPos(me, pos) {
		var line = (pos && pos.line) || 1;
		var column = pos && pos.column ? pos.column - 1 : 0;
		console.log("Pos",line,column);
		me.display.show();
		me.editor.focus();
		me.editor.selectLines(me.editor.nthLine(line), column);
		//me.editor.jumpToLine(me.editor.nthLine(1));
	};

	Editor.prototype.moveTo = function(pos) {
	  toPos(this,pos);
	};

	return Editor;
})();

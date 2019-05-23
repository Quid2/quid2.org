goog.provide('quid2.ui.Editor');
goog.require('quid2');

/** Editor based on CodeMirror2 * */
quid2.ui.Editor = (function() {
	var q = quid2;
	var mac = /Mac/.test(navigator.platform);
	var changeTimeout;
	function saved ()	{
	  if (changeTimeout) {
	    clearTimeout(changeTimeout);
	    changeTimeout = undefined;
	  }
	};

	function Notes(editor) {
	  this.editor = editor;
          this.notes = {};
	  this.current = 0;
	};

        // BUG: fails when lines are moved around.
	Notes.prototype.clear = function() {
	  var me = this;
	  for (var k in me.notes) {
	    var l = parseInt(k);
	    //var note = me.notes[n];
	    //me.editor.setLineClass(note.line,null);
	    me.editor.setLineClass(l,null);
	    me.editor.clearMarker(l);
	  };
	  me.notes = {};
	};

        //Notes.prototype.has = function(line) {return q.isDefined(this.notes[line]);};

        Notes.prototype.setNotes = function(notes) {
	  var me = this;
	  me.clear();

	  notes.map(function(note){me.add(note);});
	};

        Notes.prototype.add = function(note) {
	  var me = this;
	  var maxLine = me.editor.lineCount();
	  note.line = Math.min(note.line,maxLine);
	  this.notes[note.line] = note;
	  me.editor.setLineClass(note.line, "editorErrorLine");
	  var msg = "At column "+note.column + ": " +note.msg;
	  var marker = $("<span> %N%</span>").prepend($("<span>☹</span>").attr("title",msg).addClass('editorError')).html();
	  me.editor.setMarker(note.line,marker);
	};

        Notes.prototype.setCurrent = function(line) {
	  var me = this;

	  if (! me.notes[me.current]) me.editor.setLineClass(me.current,null);

	  if (! me.notes[line]) me.editor.setLineClass(line,"editorActiveLine");

	  me.current = line;
	};

	function Editor(mimeType, display, onSave, onChange, onClose) {
		var me = this;
		this.onSave = onSave;
		this.onClose = onClose;
		this.display = display;
	        me.freeze();
		//console.log("CodeMirror", CodeMirror.listModes(), CodeMirror.listMIMEs());

		this.editor = new CodeMirror(display.get(0),{
			mode : mimeType,
			lineNumbers : true,
			firstLineNumber : 1,
			readOnly : false,
			matchBrackets : true,
			indentUnit : 2,

		        onCursorActivity: function() {
			  me.notes.setCurrent(me.editor.getCursor().line);
			},

			onKeyEvent : function(editor, event) {
				var mod = (mac ? event.metaKey : event.ctrlKey) && !event.altKey;
				var isSave = event.type == "keydown" && mod && event.keyCode == 83;
				// console.log("onKeyEvent",isSave,event,new $.Event(event));
				var isExit = event.type == "keydown" && mod && event.keyCode == 27;

				if (isSave) {
					me.save();
					event.stop();
					return true;
				};

				return false;
			},

			onChange : function() {
			  saved();
			  changeTimeout = setTimeout(function() {
			    saved();
			    fwd(me, onChange || $.noop);
			  }, 9000);
			}
			,autoClearEmptyLines:true
			,lineWrapping:true
			,fixedGutter:true

			});
	  this.notes = new Notes(me.editor);
	};

	Editor.prototype.getObj = function() {
		return this.obj;
	};

	Editor.prototype.errors = function(notes) {
	  var me = this;
	  me.notes.setNotes(notes);
	};

	/***************************************************************************
	 * @param obj.content =
	 *            text to display
	 * @param obj.pos =
	 *            {line:1..,column:1..} OPTIONAL
	 **************************************************************************/
	  Editor.prototype.newDoc = function(obj,lineNumbers,readOnly) {
		console.log("Editor.newDoc", obj);
		var me = this;
		chgState(me);
		me.obj = obj;
		me.unfreeze();
          	me.editor.setOption("lineNumbers",lineNumbers);
          	me.editor.setOption("readOnly",readOnly);
		if (me.editor.getValue() != obj.content)
		  me.editor.setValue(obj.content);
		if (obj.pos) toPos(me, obj.pos);
	};

	Editor.prototype.save = function() {
	  console.log("Editor.save");
	  saved();
	  fwd(this, this.onSave);
	};

	Editor.prototype.getContent = function() {saved();return this.editor.getValue();};

	Editor.prototype.freeze = function() {
	  this.display.hide();
	};

	Editor.prototype.unfreeze = function() {
	  this.display.show();
	};

	Editor.prototype.closeDoc = function() {
		console.log("Editor.closeDoc");
		saved();
		var me = this;
		if (me.obj) {
		  chgState(me);
		  delete me.obj;
		}
		me.freeze();
	};

	function chgState(me) {
	  fwd(me, me.onClose || $.noop);
	};

	function fwd(me, f) {
	  if (me.obj) f(me.obj, me.editor.getValue());
	};

	function toPos(me, position) {
		var pos = q.dfl({
			line : 1,
			column : 1
		}, position);
		var line = pos.line;
		var column = pos.column - 1;
		console.log("Pos", pos);
		me.unfreeze();
		me.editor.focus();
		me.editor.setCursor(line, column - 1);// -1?
	};

	Editor.prototype.moveTo = function(pos) {
		toPos(this, pos);
	};

	return Editor;
})();

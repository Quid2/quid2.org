goog.provide('quid2.ui.Editor');
goog.require('quid2');
goog.require('quid2.Rx');

/** Editor based on CodeMirror2 * */
quid2.ui.Editor = (function() {
	var q = quid2;
	var g = goog;
	var mac = /Mac/.test(navigator.platform);

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
	    //me.editor.setLineClass(l,null);
	    me.editor.clearMarker(me.notes[l].marker);
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
	  q.assert(note && g.isNumber(note.line) && g.isNumber(note.column) && g.isString(note.msg) && note.kind);
	  var me = this;
	  var maxLine = me.editor.lineCount();
	  note.line = Math.min(note.line,maxLine);
	  this.notes[note.line] = note;
	  //me.editor.setLineClass(note.line, "editorErrorLine");
	  var msg = "At column "+note.column + ": " +note.msg;
	  var marker = $("<span> %N%</span>").prepend($("<span>☹</span>").attr("title",msg).addClass('editorError')).html();
	  note.marker = me.editor.setMarker(note.line,marker);
	};

        Notes.prototype.setCurrent = function(line) {
	  var me = this;

	  //if (! me.notes[me.current])
	    me.editor.setLineClass(me.current,null,null);

	  //if (! me.notes[line])
	  me.editor.setLineClass(line,null,"editorActiveLine");

	  me.current = line;
	};

	/***************************************************************************
	 * @param obj.content =
	 *            text to display
	 * @param obj.pos =
	 *            {line:1..,column:1..} OPTIONAL
	 **************************************************************************/
	  function Editor(m) {
	   var me = this;
	   q.assert(m && g.isString(m.mimeType) && g.isString(m.content) && q.isJElem(m.area) && g.isBoolean(m.lineNumbers) && g.isBoolean(m.readOnly));
	   //console.log("CodeMirror", CodeMirror.listModes(), CodeMirror.listMIMEs());

	   me.model = m;
	   me.obs = new Rx.Subject();
	   function out(k) {
	     me.obs.onNext({kind:k,editor:me});
	   };

	   m.area.empty();

	   me.editor = new CodeMirror(m.area.get(0),{
			mode : m.mimeType,
			lineNumbers : m.lineNumbers,
			firstLineNumber : 1,
			readOnly : m.readOnly ? "nocursor" : false,
			value:m.content,
			matchBrackets:true,
			indentUnit:2
			,autofocus:true
			,autoClearEmptyLines:true
			,lineWrapping:true
			,fixedGutter:true

			,onCursorActivity: function() {
			  me.editor.matchHighlight("CodeMirror-matchhighlight");
			  me.notes.setCurrent(me.editor.getCursor().line);
			},

			onKeyEvent : function(editor, event) {
			  // console.log("onKeyEvent",isSave,event,new $.Event(event));
			  var mod = (mac ? event.metaKey : event.ctrlKey) && !event.altKey;
			  var isSave = event.type == "keydown" && mod && event.keyCode == 83;
			  var isClose = event.type == "keydown" && event.keyCode == 27;

			  if (isSave) {
			    out("save");
			    event.stop();
			    return true;
			  };

			  if (isClose) {
			    me.freeze();
			    //out("save");
			    out("view");
			    event.stop();
			    return true;
			  };

			  return false;
			},

			// ?TODO: use passed info to directly build diff, faster on large documents.
			onChange : function() {out("change");}

			});

	  me.notes = new Notes(me.editor);
	  //if (m.pos) toPos(me,m.pos);
	  // me.editor.focus();
	  //me.editor.scrollTo(0,0);
	};

	Editor.prototype.visible = function() {
	  var e = this.editor;
	  e.focus();
	  var p = e.cursorCoords(true,"local");
	  e.scrollTo(p.x,p.y);
	  //console.log("Editor.scrollTo",p);
	  e.refresh();
	};

	Editor.prototype.toObservable = function() {
	  return this.obs;
	};

	Editor.prototype.refresh = function() {
	  this.editor.refresh();
	};

	Editor.prototype.setOption = function(n,v) {
	  this.editor.setOption(n,v);
	};

	// TODO call refresh after a resize!
	Editor.prototype.close = function() {
	  console.log("Editor.close");
	  var me = this;
	  //me.event.off();
	  //me.editor.toTextArea();
	  me.model.area.empty();
	  me.obs.onCompleted();
	};

	Editor.prototype.getValue = function() {return this.editor.getValue();};

	Editor.prototype.freeze = function() {this.model.area.hide();};

	Editor.prototype.unfreeze = function() {this.model.area.show();};

	Editor.prototype.setErrors = function(notes) {
	  var me = this;
	  me.hasErrors = notes.lenght>0;
	  me.notes.setNotes(notes);
	};

	Editor.prototype.hasErrors = function() {return !! this.hasErrors;};

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

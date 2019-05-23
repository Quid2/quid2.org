goog.require('quid2.ui.MsgView');
goog.provide('quid2.ui.NoteView');

quid2.ui.NoteView = (function() {

	var q = quid2;

	function NoteView(area) {
		this.display = $("<div/>");
		area.append(this.display);
	};

	function getMsgArea(display,problem) {
		var pid = "problem-"+ (q.isDefined(problem.ctxId) ? problem.ctxId : "");

		var msgArea = display.find("#" + pid);

		if (msgArea.length==0) {
		  msgArea= $("<div/>");
		  display.prepend(msgArea);
		};

		msgArea.empty().attr("id",pid);

		return msgArea;
	};

	/** @param msg
	 *   same as problem
	 */
	NoteView.prototype.clearProblem = function(msg) {
	  getMsgArea(this.display,msg);
	};

	/** @param msg
	 *   same as problem
	 */
	NoteView.prototype.noProblem = function(msg) {
	  var area = getMsgArea(this.display,msg);
	  MsgView.msg(area,"info",msg.ctxMsg);
	};

	/**
	 * @param problem
	 *    ctxMsg :: String -- "get an evaluation environment"
	 *    ctxId :: identifier for this kind of note
	 *    err :: [Note | String] || String
	 * **/
	NoteView.prototype.problem = function(problem) {
		var me = this;

		var msgArea = getMsgArea(this.display,problem);

		if (q.isDefined(problem.ctxMsg)) {
			msgArea = MsgView.msg(msgArea,"error",problem.ctxMsg+ ":");
		};

		//var notes = q.errorMessage(problem.err);
		var notes = problem.err;

		if (q.isUndefined(notes)) notes = q.lst([]);
		else if (q.isUndefined(notes.vs)) notes = q.lst([notes]);

		$.each(notes.vs,function (i,note) {
			q.match(note
			,[q.appN(q.relc("Language.Note.Note"),[q.v("rank"), q.v("action"), q.v("reason")]) ,function (m) {
				q.match(m.action
				,[q.relc("Language.Note.Unknown")                  ,function() {shNote(msgArea,m,m.reason);}]
				,[q.app(q.relc("Language.Note.Fix"),q.appN(q.relc("Language.SrcLoc.SrcLoc"),[q.v("filename"),q.v("line"),q.v("col")]))
				  ,function(n) {shNote(msgArea
						  		,m
						  		,n.filename + " Line " + n.line + " Column " + n.col + " ->  " + m.reason
						  		/*,function () {
								  //var mdl = problem.ctxMdl;,pkg:mdl
								  //mdl.hub.publish("edit",{type:"SourceCode",path:n.filename.split('.'),pos:getPos(n.start)});
					  			  problem.ctxPkg.onSelectChild(n.filename,getPos(n.start));
								}*/
						      );}]
				// TODO: Handle "Replace"
			    );
		  }]
		  ,[q.v("other"),function(m) {shOther(msgArea,m.other.show ? m.other.show() : m.other);}]
		  );
	 });

	};

	function shOther(display,msg) {
	  MsgView.subMsg(display,"error",q.errorMessage(msg));
	};

	function shNote(display, note, msg, f) {
		console.log("shNote", msg, f);
		function on() {
			$(this).addClass('selected');
			if (typeof f == "function") f.call(this);
		}
		function off() {
			$(this).removeClass('selected');
		}

		MsgView.subMsg(display,getCls(note.rank),msg).hover(on, off);
	};

	function getCls(rank) {
	  q.match(rank, [q.relc("Language.Note.Must"), function() {return "error";}
			 ,q.relc("Language.Note.Should"), function() {return "warning";}
			 ,q.relc("Language.Note.May"), function() {return "info";}
			]);
	}

	function showPos(pos) {
		var p = getPos(pos);
		return p.line + ":" + p.column;
	};

	function getPos(pos) {
		return q.match(pos, [ q.appN(q.c("Note.Pos"), [ q.v("line"), q.v("column") ]), function(p) {
			return p;
		} ]);
	};

	return NoteView;
})();

goog.provide('quid2.ui.Console');

quid2.ui.Console = (function() {
	var q = quid2;

	function Console(area) {
          this.area = area;
	};

	Console.prototype.cop = function (descr,op) {
	  var note = new Note(this.area,descr);
	  return op.then(goog.bind(note.done,note),goog.bind(note.fail,note));
	};

	function Note(elem, msg) {
	  var me = this;
	  me.start = new Date();
	  me.msgDiv = $("<span/>");
	  me.div = $("<div/>")
	    .addClass("working")
	    .append($("<small>"+ q.pad(me.start.getHours(), 2) + ":" + q.pad(me.start.getMinutes(), 2) + ":" + q.pad(me.start.getSeconds(), 2) + "</small>"))
	    .append($("<div/>").text(msg).append(me.msgDiv));
	  elem.prepend(me.div);
	  setTimeout(function (){me.div.remove();},120 * 1000);
	};

	Note.prototype.then = function (cls,suffix) {
	  var me = this;
	  me.div.removeClass().addClass(cls);
	  me.msgDiv.text(", "+suffix+" ("+(new Date().getTime()-me.start)+" ms).");
	};

	Note.prototype.done = function ()    {
	  this.then("info","done");
	};

	Note.prototype.fail = function (err) {
	  var errMsg = err.show ? err.show() : err;
	  console.error(errMsg,err);
	  this.then("error","failed: " + errMsg);
	};

	return Console;
})();

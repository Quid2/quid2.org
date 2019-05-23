goog.provide('quid2.ui.MsgView');

quid2.ui.MsgView = (function() {

	var q = quid2;

	MsgView = function(area) {
	  this.display = $("<div/>");
	  area.append(this.display);
	};

	MsgView.msg = function(elem, cls, msg) {
	  var now = new Date();
	  var div = $("<div/>")
	    .addClass(cls)
	    .append($("<small>"+ q.pad(now.getHours(), 2) + ":" + q.pad(now.getMinutes(), 2) + ":" + q.pad(now.getSeconds(), 2) + "</small>"))
	    .append($("<div/>").text(msg));
	  //elem.empty();
	  elem.prepend(div);

	  setTimeout(function (){div.remove();},({info:120,warning:120,error:120}[cls])*1000);
	  return div;
	};

	MsgView.subMsg = function(elem, cls, msg) {
	  var div = $("<div/>")
	    .addClass(cls)
	    .append($("<div/>").text(msg));
	  elem.append(div);
	  return div;
	};

	function msg(cls, msg) {
	  this.display.empty();
	  MsgView.msg(this.display, cls, msg);
	}

	MsgView.prototype.info = function() {
	  return goog.partial(msg,'info').apply(this, arguments);
	};

	MsgView.prototype.warn = function() {
	  return goog.partial(msg,'warning').apply(this, arguments);
	};

	MsgView.prototype.err = function() {
	  return goog.partial(msg,'error').apply(this, arguments);
	};

	return MsgView;

})();

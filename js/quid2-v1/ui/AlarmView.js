goog.provide('quid2.ui.AlarmView');

quid2.ui.AlarmView = (function() {

	var q = quid2;

	var sec = 1000;
	var min = 60 * sec;

	function plural(v,name) {
	  var i = Math.floor(v);
	  return i + " " + name + (i == 1 ? "" : "s");
	};

	function showTime(ms) {
	  var secs =  ms / 1000;
	  if (secs < 60) return plural(secs,"sec");
	  else if (secs<3600) return plural(secs/60,"minute");
	  else return plural(secs/3600,"hour");
	}

	AlarmView = function(area) {
	  this.display = $("<div/>");
	  area.append(this.display);
	};

	AlarmView.prototype.alarm = function(time,msg) {
	  var alarm = $("<span/>");
	  var div = $("<div/>")
		      .addClass("warning")
		      .text(msg)
		      .append(alarm);
	  this.display.prepend(div);

	function updateAlarm() {
		       var now = new Date();
		       var diff = time.getTime()-now.getTime();
		       //console.log("diff",diff,5*min);
		       if (diff < (6 * min)) div.attr("class","error");
		       if (diff < (-15*min)) div.remove();
	               else if (diff < 0) alarm.text(" NOW!");
			    else alarm.text(" in " + showTime(diff)+".");
	};

	  updateAlarm();
	  setInterval(updateAlarm,60*1000);
	};

	return AlarmView;
})();

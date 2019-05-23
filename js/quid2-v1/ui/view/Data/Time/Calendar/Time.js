goog.provide('quid2.ui.view.Data.Time.Calendar.Time');
goog.require('quid2');

quid2.ui.view.Data.Time.Calendar.Time = function(ctx) {
  var q = quid2;
  var utc = q.match(ctx.obj,
	  [q.appN(q.relc("Data.Time.Calendar.Time"),[q.appN(q.relc("Data.Time.Calendar.Date"),[q.v("y"),q.v("m"),q.v("d")]),q.v("ms")]), function(d) {
	     var s = Math.floor(d.ms / 1000);
	     var hours = Math.floor(s / 3600);
	     s -= hours * 3600;
	     var minutes =  Math.floor(s/60);
	     s -= minutes * 60;
	     return new Date(Date.UTC(d.y,d.m-1,d.d,hours,minutes,s));
     }]);


  ctx.area.text(utc.toString());
};

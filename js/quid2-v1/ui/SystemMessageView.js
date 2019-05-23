goog.provide('quid2.ui.SystemMessageView');

quid2.ui.SystemMessageView = (function() {

	var q = quid2;
	var app = quid2.module.Service.Org.Quid2.App;

	SystemMessageView = function(area,ctx) {
	  this.display = area;

	  var updateMessage = ctx.conn.callBack(function(pars) {
	    console.warn("System Message change",pars);
	    area.text(pars.show());
	    new quid2.module.Data.Maybe.Last.type.Maybe([app.Last.type.Typed]).ready().done(function (t) {
	      var change = t.decode(new quid2.ByteBuffer(pars.value[0].value));
	      console.log(change.show());
	      change.match(function() {area.text("No message");}
			   ,function(typed) {
			     new app.Last.type.Ref([app.Last.type.Module]).ready().done(function (t) {
			     var mdlRef = t.decode(new quid2.ByteBuffer(typed.parts[1].value));
			     area.text(mdlRef.show());
			     });
			   });

	    });
	  });

	  ctx.cop("Subscribe to system message",app.Last.value.subscribeToSystemMessage.call(updateMessage));
	};

	return SystemMessageView;
})();

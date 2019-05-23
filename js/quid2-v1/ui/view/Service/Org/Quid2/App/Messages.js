goog.provide('quid2.ui.view.Service.Org.Quid2.App.Messages');
goog.require('quid2');

quid2.ui.view.Service.Org.Quid2.App.Messages = function(ctx) {
  var q = quid2;

  var allMsgsArea = $("<div/>");
  var systemMsgArea = $("<div/>");
  allMsgsArea.append(systemMsgArea);
  var alarmView = new q.ui.AlarmView(allMsgsArea);
  var noteView = new q.ui.NoteView(allMsgsArea);
  var msgView = new q.ui.MsgView(allMsgsArea);
  
};

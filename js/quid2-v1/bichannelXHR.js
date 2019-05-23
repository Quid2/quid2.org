/*
 * Binary bi-directional channel.
 */
goog.provide('quid2.bichannelXHR');
goog.require("quid2");

/**
	 * Establish a bi-directional channel.
	 *
	 * @param httpURL
	 *            the url of the http gateway long-polling api, example:
	 *            "http://localhost:5050/api/send"
	 * @param wsURL
	 *            the url of the WebSocket gateway api, example:
	 *            "ws://localhost:5050"
	 * @param onMsg
	 *            a function :: msg -> IO () that processes one message at a time (actually every binary message is an array of messages)
	 * @return a deferred :: {send::BinaryString -> IO (),..} that is resolved when the connection is established.
 */
quid2.bichannelXHR = function (httpURL,onMsg) {
  var q = quid2;
  var pt = quid2.primitive.type;
  var msg = quid2.module.Network.Msg.Last;
  var currentCalls = 0;

  var callTimeout;
  function chkCalls(d) {
    currentCalls += d;

    if (currentCalls==1) {
      clearTimeout(callTimeout);
      callTimeout = undefined;
    } else {
      if (q.isDefined(callTimeout)) return;
      callTimeout = setTimeout(function() {
	q.error("currentCalls !=1",currentCalls);
	callTimeout = undefined;
	chkCalls(0);
      },5000);
    };
  };

  // Keep channel open to keep receiving server messages.
  function more() {
    chkCalls(-1);
    q.log(currentCalls," currentCalls]");
    if (currentCalls != 0) return;
    send([]);
  };

  var msgType;
  function onOk(msgsBin) {
    try {
      //console.log("msgsBin",msgsBin,msgsBin.length());
      var msgs = msgType.decode(msgsBin).value;
      for (var i=0;i<msgs.length;i++) onMsg(msgs[i]);
    } catch (err) {
      console.error("onOk " + err);
    };
    more();
  };

  function onErr(err) {
    q.error("onErr",err);
    setTimeout(more,2*1000);
  };

  // @param :: [Byte]
  // BUG: no timeout?
  function send(msg) {
    chkCalls(1);
    q.log("[currentCalls=",currentCalls);
    q.xhr.post(httpURL,msg).then(onOk,onErr);
  };

  return new pt.List(msg.type.Msg).ready().pipe(function(mType) {msgType=mType;return send;});
};



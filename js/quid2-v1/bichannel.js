/*
 * Binary bi-directional channel.
 */
goog.provide('quid2.bichannel');
goog.require('quid2.bichannelXHR');

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
	 *            a function :: msg -> IO () that processes one message at a time
	 * @return a deferred :: {send::BinaryString -> IO (),..} that is resolved when the connection is established.
 */
quid2.bichannel = (function () {

/**
  BUG: HTTP CHANNEL DOES NOT SEND USER INFO CORRECTLY!!!
  Client might or not support websockets
  The network (e.g. Tim Mobile) might not support websockets.
  The connection might be lost.
  Why is the server not accepting the new connection? Route has been deleted? 
**/
function open(sendURL,publicId,secretId,onMsg) {
    var q = quid2,g = goog;
    var msg = quid2.module.Network.Msg.Last;
    var httpURL = "http://" + sendURL + "?sid="+encodeURIComponent(publicId);
    var wsURL   = "ws://"   + sendURL + "?secretId="+encodeURIComponent(secretId);

  /*var send_ = $.Callbacks("unique");
  function send(msg) {
    send_.fire(msg);
  };*/
  
  // Setup by connect function.
  var send_;
  function send(msg) {
    send_.done(function(send) {send(msg);});
  };

  var openTime;
  var connect = function (useHTTP) {
    var Socket = window.WebSocket || window.MozWebSocket;
    var ws;
    //var hasWebSocket = Socket && (ws = new Socket(wsURL)) && ws.binaryType;
    var hasWebSocket = false;

    if (!hasWebSocket || useHTTP) {
      console.log("Falling back to long polling.")
      send_ = q.bichannelXHR(httpURL,onMsg);
      return;
    };

    q.log("WebSocket supported");
    send_ = $.Deferred();

    // @param :: [Byte]
    function wsSend(msg) {
      q.log("Sending WebSocket message",msg);
      var msgBuffer = new ArrayBuffer(msg.length);
      new Uint8Array(msgBuffer).set(msg);
      ws.send(msgBuffer);
    };
  
    ws.onopen = function() {
	q.log("Opened WebSocket");
	openTime=new Date().getTime();
	ws.binaryType="arraybuffer";
	send_.resolve(wsSend);
    };

    ws.onerror = function(err) {
      q.error("WebSocket error",err);
    };

    /* If there is a connection error, Closed will be called but Open won't)  */
    ws.onclose = function() {
      q.error("Closed WebSocket");
      //ws.onmessage = function() {};
      //TODO: to be tested with a mobile connection, might need to go into ws.onerror.
      if (new Date().getTime() - openTime < 3000) connect(true);
      else setTimeout(connect,5*1000);
    };

    ws.onmessage = function(event) {
      q.log("Received WebSocket message",event,event.data);
      msg.type.Msg.ready().pipe(function(msgType) {onMsg(msgType.decode(q.xhr.arrayBufferToByteBuffer(event.data)));});
    };
  };

  connect();
  return send;
};

  return {open:open};
})();


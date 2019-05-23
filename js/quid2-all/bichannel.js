/*
 * Binary bi-directional channel.
 */
goog.provide('quid2.bichannel');
goog.require('$');
goog.require('quid2.std');
goog.require('quid2.util');
goog.require('quid2.bichannelXHR');
goog.require('quid2.module.Network.Msg.API');

/**
  BUG: HTTP CHANNEL DOES NOT SEND USER INFO CORRECTLY!!!
  Client might or not support websockets
  The network (e.g. Tim Mobile) might not support websockets.
  The connection might be lost.
  Why is the server not accepting the new connection? Route has been deleted? 
**/
/**
	 * Establish a bi-directional channel.
	 *
	 * @param sendURL
	 *            the url of the gateway server, example:
	 *            localhost:5050
	 * @param publicId
	 * @param secretId
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
quid2.bichannel = function (sendURL,publicId,secretId,onMsg) {
    var g = goog;
    var q = quid2;
    var m_s = quid2.std;
    var m_msg = quid2.module.Network.Msg.API;
    var log = quid2.util.log;var err = quid2.util.error;
    var httpURL = "http://" + sendURL + "?sid="+encodeURIComponent(publicId);
    var wsURL   = "ws://"   + sendURL + "?secretId="+encodeURIComponent(secretId);
    
    // Setup by connect function.
    var send_;
    function send(msg) {
	send_.done(function(send) {
	    send(msg);
	});
    };

    var openTime;
    var connect = function (useHTTP) {
	var Socket = window.WebSocket || window.MozWebSocket;
	var ws;
	var hasWebSocket = Socket && (ws = new Socket(wsURL)) && ws.binaryType;

	//var msgDecode = g.bind(m_msg.Msg$.decode,m_msg.Msg$);
	//var msgsDecode = m_s.List.decode([msgDecode]);	
	var Msgs = new m_s.List$(m_msg.Msg$);	
	function onMsgBin(msgBin) {
	    try {
		log("msgBin",msgBin,msgBin.length());
		onMsg(m_msg.Msg$.decode(msgBin));
	    } catch (error) {
		err("onMsgBin " + error);
	    };
	};

	function onMsgsBin(msgsBin) {
	    try {
		log("msgsBin",msgsBin,msgsBin.length());
		var msgs = Msgs.decode(msgsBin).value;
		log("msgs",msgs);
		for (var i=0;i<msgs.length;i++) onMsg(msgs[i]);
	    } catch (error) {
		err("onMsgsBin " + error);
	    };
	};

	if (!hasWebSocket || useHTTP) {
	    log("Falling back to long polling.")
	    send_ = quid2.bichannelXHR(httpURL,onMsgsBin);
	    return;
	};

	log("WebSocket supported");
	send_ = $.Deferred();
	
	// @param :: [Byte]
	function wsSend(msg) {
	    log("Sending WebSocket message",msg);
	    var msgBuffer = new ArrayBuffer(msg.length);
	    new Uint8Array(msgBuffer).set(msg);
	    ws.send(msgBuffer);
	};
  
	ws.onopen = function() {
	    log("Opened WebSocket");
	    openTime=new Date().getTime();
	    ws.binaryType="arraybuffer";
	    send_.resolve(wsSend);
	};
	
	ws.onerror = function(err) {
	    err("WebSocket error",err);
	};
	
	/* If there is a connection error, Closed will be called but Open won't)  */
	ws.onclose = function() {
	    err("Closed WebSocket");
	    //ws.onmessage = function() {};
	    //TODO: to be tested with a mobile connection, might need to go into ws.onerror.
	    if (new Date().getTime() - openTime < 3000) connect(true);
	    else setTimeout(connect,5*1000);
	};
	
	ws.onmessage = function(event) {
	    log("Received WebSocket message",event,event.data);
	    onMsgBin(q.xhr.arrayBufferToByteBuffer(event.data));
	};
    };
    
    connect(true); // TODO: remove true
    return send;
};
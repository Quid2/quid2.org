/*
 * Binary bi-directional channel.
 */
goog.provide('quid2.bichannelXHR');
goog.require('$');
goog.require('quid2.std');
goog.require('quid2.util');
goog.require('quid2.xhr');

/**
	 * Establish a bi-directional channel.
	 *
	 * @param httpURL
	 *            the url of the http gateway long-polling api, example:
	 *            "http://localhost:5050/api/send"
	 * @param onMsgs
	 *            a function :: Binary -> IO () that processes one message at a time (every binary message is an array of messages)
	 * @return a deferred :: {send::BinaryString -> IO (),..} that is resolved when the connection is established.
 */
quid2.bichannelXHR = function (httpURL,onMsgs) {
    var u = quid2.util;

    var currentCalls = 0;

    var callTimeout;
    function chkCalls(d) {
	currentCalls += d;

	if (currentCalls==1) {
	    clearTimeout(callTimeout);
	    callTimeout = undefined;
	} else {
	    if (u.isDefined(callTimeout)) return;
	    callTimeout = setTimeout(function() {
		u.error("currentCalls !=1",currentCalls);
		callTimeout = undefined;
		chkCalls(0);
	    },5000);
	};
    };

    // Keep channel open to keep receiving server messages.
    function more() {
	chkCalls(-1);
	u.log(currentCalls," currentCalls]");
	if (currentCalls != 0) return;
	send([]);
    };

    function onOk(msgsBin) {
	onMsgs(msgsBin);
	more();
    };

    function onErr(err) {
	u.error("onErr",err);
	setTimeout(more,2*1000);
    };
    
    // @param :: [Byte]
    // BUG: no timeout?
    function send(msg) {
	chkCalls(1);
	u.log("[currentCalls=",currentCalls);
	quid2.xhr.post(httpURL,msg).then(onOk,onErr);
    };
    
    return $.when(send);
};
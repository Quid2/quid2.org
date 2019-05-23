/*
 * XHR call.
 */
goog.provide('quid2.xhr');

// require jquery
goog.require("quid2.std");
goog.require("quid2.util");
goog.require('goog.crypt.base64');

/* Copied from:
 * !{id:msgpack.js,ver:1.05,license:"MIT",author:"uupaa.js@gmail.com"}
 */

quid2.xhr.arrayBufferToByteBuffer = function (ar) {
  var rv = [];
  var msg = new Uint8Array(ar);
  var l = msg.length;
  for (var i=0;i<l;++i) rv.push(msg[i]);
  return new quid2.std.ByteBuffer(rv);
};

quid2.xhr.textToByteBuffer = function (ar) {
  var rv = [];
  var l = ar.length;
  for (var i=0;i<l;++i) rv.push(ar.charCodeAt(i) & 0xff);
  return new quid2.std.ByteBuffer(rv);
};

// Copied from https://github.com/vjeux/jDataView/blob/master/src/jdataview.js
quid2.xhr.convertResponseBodyToText = function (byteArray) {
		// http://jsperf.com/vbscript-binary-download/6
		var scrambledStr;
		try {
			scrambledStr = IEBinaryToArray_ByteStr(byteArray);
		} catch (e) {
			// http://stackoverflow.com/questions/1919972/how-do-i-access-xhr-responsebody-for-binary-data-from-javascript-in-ie
			// http://miskun.com/javascript/internet-explorer-and-binary-files-data-access/
			var IEBinaryToArray_ByteStr_Script =
				"Function IEBinaryToArray_ByteStr(Binary)\r\n"+
				"	IEBinaryToArray_ByteStr = CStr(Binary)\r\n"+
				"End Function\r\n"+
				"Function IEBinaryToArray_ByteStr_Last(Binary)\r\n"+
				"	Dim lastIndex\r\n"+
				"	lastIndex = LenB(Binary)\r\n"+
				"	if lastIndex mod 2 Then\r\n"+
				"		IEBinaryToArray_ByteStr_Last = AscB( MidB( Binary, lastIndex, 1 ) )\r\n"+
				"	Else\r\n"+
				"		IEBinaryToArray_ByteStr_Last = -1\r\n"+
				"	End If\r\n"+
				"End Function\r\n";

			// http://msdn.microsoft.com/en-us/library/ms536420(v=vs.85).aspx
			// proprietary IE function
			window.execScript(IEBinaryToArray_ByteStr_Script, 'vbscript');

			scrambledStr = IEBinaryToArray_ByteStr(byteArray);
		}

		var lastChr = IEBinaryToArray_ByteStr_Last(byteArray),
		result = "",
		i = 0,
		l = scrambledStr.length % 8,
		thischar;
		while (i < l) {
			thischar = scrambledStr.charCodeAt(i++);
			result += String.fromCharCode(thischar & 0xff, thischar >> 8);
		}
		l = scrambledStr.length
		while (i < l) {
			result += String.fromCharCode(
				(thischar = scrambledStr.charCodeAt(i++), thischar & 0xff), thischar >> 8,
				(thischar = scrambledStr.charCodeAt(i++), thischar & 0xff), thischar >> 8,
				(thischar = scrambledStr.charCodeAt(i++), thischar & 0xff), thischar >> 8,
				(thischar = scrambledStr.charCodeAt(i++), thischar & 0xff), thischar >> 8,
				(thischar = scrambledStr.charCodeAt(i++), thischar & 0xff), thischar >> 8,
				(thischar = scrambledStr.charCodeAt(i++), thischar & 0xff), thischar >> 8,
				(thischar = scrambledStr.charCodeAt(i++), thischar & 0xff), thischar >> 8,
				(thischar = scrambledStr.charCodeAt(i++), thischar & 0xff), thischar >> 8);
		}
		if (lastChr > -1) {
			result += String.fromCharCode(lastChr);
		}
		return result;
	};


quid2.xhr.call = (function () {

  var q = quid2.util;
  var openCalls = 0;

  function call(netURL,method,msg) {
    //quid2.assert(quid2.isDefined(msg),"call("+netURL+","+method+","+msg+")");

    var result = new $.Deferred();
    function onErr(msg) {
        console.error("xhr.onErr",msg);
	--openCalls;
	result.reject(msg);
    };

    var xhr = new XMLHttpRequest();
    //xhr.timeout = 50*1000; // BUG: It doesn't work.
    var timeoutTimer = setTimeout(
      function() { 
	//xhr.abort();
	onErr("xhr timeout");
      }
      ,60*1000);

    var hasXHR2 = ! ! window["ArrayBuffer"]; //xhr.hasOwnProperty("responseType"); //
    
    xhr.open(method, netURL, true);
    var isPOST = method == "POST";

    if (isPOST)
      xhr.setRequestHeader('Content-Type',"application/x-www-form-urlencoded");

    if (hasXHR2) xhr.responseType = 'arraybuffer';
    else
      if (xhr.overrideMimeType) xhr.overrideMimeType('text/plain; charset=x-user-defined');
      //else throw "Browser does not support binary transfers";

    // BUG: this is not called when a send fails.
    function onLoad() {
      q.log("onLoad, state=",xhr.readyState);
      if (xhr.readyState != 4) return;

      //q.log("onLoad completed");
      clearTimeout(timeoutTimer);

      q.log(--openCalls,"Open calls]");
      if (xhr.status == 200) {
	var rv = [];

	var response = ('mozResponseArrayBuffer' in xhr) ? xhr.mozResponseArrayBuffer : ('responseType' in xhr && xhr.responseType === 'arraybuffer' && xhr.response) ? xhr.response : ('responseBody' in xhr) ? quid2.xhr.convertResponseBodyToText(xhr.responseBody) : xhr.responseText;

	result.resolve(hasXHR2 ? quid2.xhr.arrayBufferToByteBuffer(response) : quid2.xhr.textToByteBuffer(response));

	//q.log("received ",rv.length);
	//result.resolve(new quid2.ByteBuffer(rv));
	//result.resolve(rv);

      } else onErr("Wrong return status: "+xhr.status);
    };

    if (typeof(xhr.onload) != 'undefined') xhr.onload = onLoad;
    else xhr.onreadystatechange = onLoad;

    //q.log("send",msg);
    var emsg = null;
    if (isPOST) {
      if (false) { //hasXHR2) {
	var msgBuffer = new ArrayBuffer(msg.length);
	new Uint8Array(msgBuffer).set(msg);
	emsg = msgBuffer;
      } else {
	emsg = "msg="+encodeURIComponent(goog.crypt.base64.encodeByteArray(msg));
      };
    };
    //xhr.setRequestHeader('Content-Length',""+emsg.length);
    //q.log("EMSG",emsg);
    xhr.send(emsg);
    q.log("[Open calls",++openCalls);

    return result.promise();
};
    return call;
})();

quid2.xhr.get = function (netURL) {return quid2.xhr.call(netURL,"GET");};

quid2.xhr.post = function (netURL,msg) {return quid2.xhr.call(netURL,"POST",msg);};


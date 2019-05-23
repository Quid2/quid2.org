/* global jQuery */
/* jslint browser:true, nomen: true, laxbreak:true */
/*
 * Quid2 channel implementation based on long polling.
 *
 * BUG: calls are apparently queued and so long-polling is very slow with multiple servers.
 *
 * BUG: if connection is lost, it keeps hitting the server wasting a lot of cpu time.
 */
goog.provide('quid2.channel');

goog.require("quid2");
goog.require('quid2.Request');

quid2.channel = function() {
	var q = quid2;

	// BUG: Clients that use libraries that call ajax won't work, a better
	// solution is to patch directly jquery.
	// Client ajax calls have to go through this function.
	// the processing of the results of all ajax calls seems to be queued
	// So: if there is a pending long call to the server, a call to, say
	// freebase, will be performed immediately
	// BUT the result won't be returned before the previous call is completed,
	// possibly long after it.
	var jqueryAjax = $.ajax;

	// NOTE: we change the standard ajax function
	$.ajax = function(pars) {
		// console.log("QQ AJAX",pars);
		jqueryAjax(pars);
		forceCall = true;
	};

	/**
	 * Establish a bi-directional channel.
	 *
	 * @param netURL
	 *            the url of the server api functions, example:
	 *            "http://localhost:5050/api/"
	 * @param process
	 *            a function (msg) that process one message at a time
	 * The deferred is called with: @param connected
	 *            a function({write1:write1,channelID:channelID}) to call after
	 *            the connection is established
	 */
	function channel(netURL, process) {
        	var result = new $.Deferred();

		var req = new quid2.Request();
		// BUG: if an invalid session is passed it won't detect it and will keep waiting.
		console.log("channel(netURL=" + netURL + "," + req.arg.sessionKey + "," + req.arg.openId + "," + req.arg.path + "," + req.arg.userName + ")");

		var noConn = false;
		function noConnection() {
			var wasConn = noConn;
			noConn = true;
			if (wasConn == false) {
			  if (q.isDefined(req.arg.userName)) logout();
			  else result.reject("Cannot get a connection");
			};
		};

		/*
		 * Perform a JSONP call, keep connection open, enforce timeout @param
		 * params = {success::Function,error::Function,<timeout::MilliSecs>}
		 */
		function jcall(params) {
			// console.log(params);
			var pars = $.extend({
				global : false,
				async : true,
				dataType : "jsonp"
				// ,type:"POST"
				,
				beforeSend : function(oXhr) {
					// console.log("BEFORE SEND");
					oXhr.setRequestHeader('Connection', 'Keep-Alive');
				}
			}, params);

			var ok = params.success;
			var bad = params.error;
			var tout = params.timeout;

			var done = false;
			function onTimeout() {
				if (done) return;
				done = true;
				bad("TIMEOUT");
			};

			pars.error = function(req, textStatus, errorThrown) {
				if (done) return;
				done = true;
				bad("CALL", req, textStatus, errorThrown);
			};

			pars.success = function(data, textStatus) {
				if (done) return;
				done = true;

				// TODO: ALWAYS USE EITHER??
				// if (data.Left) bad("API",data.Left);
				// else ok(data.Right, textStatus);
				ok(data, textStatus);
			};

			try {
				jqueryAjax(pars);
			} catch (err) {
				if (done) return;
				done = true;

				bad("JQUERY", err);
			};

			if (tout) setTimeout(onTimeout, tout);
		};

		// The outgoing messages waiting to be sent.
		var msgsToSend = [];

		// NOTE: we assume that push is an atomic operation
		function write1(msg) {
			msgsToSend.push(msg);
		}

		var currentCalls = 0;
		function received(data) {
			console.log("Received: ", data);
			--currentCalls;
		}

		var forceCall = false;
		var bads = 0;

		// The main function that take care of connecting to the remote quicquid
		// server, send the outgoing messages and receive new incoming messages.
		function deliver() {
		//console.log("deliver");
			/**
			 * Receive and deliver messages received from the remote server.
			 * data: An array of messages.
			 */
			function success(data, textStatus) {
				bads = 0;
				received([ data, textStatus ]);

				if (!(data instanceof Array)) {
					var err = data.message ? data.message : "unknown error";
					console.error("Error received from server: " + err);
					return;
				};

				// Pass msgs to processing function.
				// console.log("received " + data.length + " msgs.");
				for ( var i = 0; i < data.length; i++)
					process(data[i]);
			}

			function error(req, textStatus, errorThrown) {
				received([ req, textStatus, errorThrown ]);
				bads++;
				console.log("BADS:", bads);
				console.log("error", req, textStatus, errorThrown);
				noConnection();
			};

			// TODO : FIX THIS
			var openConn = (currentCalls === 0) || forceCall || (msgsToSend.length > 0);
			if (openConn) {
				// console.log("currentCalls=",currentCalls,"forceCall=",forceCall,"msgs",msgsToSend.length,"open=",openConn);

				forceCall = false;
				currentCalls++;

				// NOTE: we rely on 'splice' being an atomic operation
				var msgs = msgsToSend.splice(0, Math.max(msgsToSend.length, 100));
				// console.log("Converting",msgs,"as",encode(msgs));
				var data = {
					sessionKey : sessionKey,
					messages : q.encode(q.lst(msgs))
				};
				console.log("Sending: ",q.show(q.lst(msgs)));

				// TODO: use POST when on same domain
				// NOTE: timeout must be > maxAllowedHoldingTime
				jcall({
					url : netURL + "eval",
					data : data,
					success : success,
					error : error,
					timeout : 45000
				});
			};

			// Keep going
			// TODO: fine tune.
			setTimeout(deliver, 25 + 2000 * bads);
		};

		var sessionKey;

		function login() {
		  //req.page += "login";
		  req.deletePars();
    		//req.reload();
		  window.location = netURL + "login?referer=" + encodeURIComponent(req.getURL());//+ req.getQuery();
		};

		function logout() {
		  req.deletePars();
		  req.reload();
		};

		function done(session ,namespace ,path ,username) {
			sessionKey = session;
			setTimeout(deliver, 100);
			result.resolve({
			  namespace : namespace,
			  path:path,
			  // ,sessionKey: sessionKey
			  username : username,
			  write1 : write1,
			  login : login,
			  logout : logout
			});
		};

		// Have we already logged in successfully?
		if (q.isDefined(req.arg.sessionKey) && q.isDefined(req.arg.openId) && q.isDefined(req.arg.path) && q.isDefined(req.arg.userName))
		  done(req.arg.sessionKey ,q.app(q.c(req.arg.openIdNS),req.arg.openId) ,req.arg.path ,req.arg.userName);

		// No, then login anonimously.
		else jcall({
			url : netURL + "loginAnon",
			data : {},
			success : function(data) {
			  console.log("Connected anonymously to Quid2 with id: " + data);
			  //done(data[0] ,q.app(q.c("Temp") ,data[1]) ,"CB_" ,"");
			  //done(data[0] ,q.decode(data[1]) ,"CB_" ,"");
			  done(data[0] ,q.app(q.c(data[1]),data[2]) ,"CB_" ,"");
			},
			error : function(req, textStatus, errorThrown) {
				console.log("error", req, textStatus, errorThrown);
				noConnection();
			},
			timeout : 15000
		});
		return result;
	};

	return channel;
}();

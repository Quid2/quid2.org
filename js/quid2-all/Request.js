goog.provide('quid2.Request');

quid2.Request = (function() {

	// Functions to parse calls to the current page
	// The request parameters can be accessed and modified as
	// request.arg.<name_arg>, e.g. request.arg.url
	function Request() {
		// Mozilla will fail otherwise
		// if (location=="about:blank") return;

		this.protocol = location.protocol;
		this.host = location.host;
		var pos = location.pathname.lastIndexOf('/');
		this.dir = location.pathname.substring(0, pos + 1);
		this.page = location.pathname.substring(pos + 1);
		this.hash = location.hash;

		this.arg = new Object();
		var params = location.search.substr(1);
		var nvs = params.split("&");
		// alert('"'+params+'"');
		for ( var n = 0; n < nvs.length; n++) {
			nv = nvs[n].split("=");
			if (nv[0].length > 0 && nv.length>1) this.arg[this.decode(nv[0])] = this.decode(nv[1]);
		}
	}

	/**
	 * @return the complete URL, possibly modified by setting the Request
	 *         properties *
	 */
	Request.prototype.getURL = function() {		
		return this.protocol + "//" + this.host + this.dir + this.page + this.hash + this.getQuery();
		// return document.URL.substring(0,document.URL.indexOf('?')+1)+url;
	}

	/** @return "?.=..&.." or "" */ 
	Request.prototype.getQuery = function() {
		var url;
		for ( var p in this.arg) {
			if (url) url += "&";
			else url = "?";
			url += encodeURIComponent(p) + "=" + encodeURIComponent(this.arg[p]);
		};
		return url || '';
	};
	
	Request.prototype.getHost = function() {
		return this.protocol + "//" + this.host + this.dir;
	}

	Request.prototype.reload = function() {
		document.location = this.getURL();
	}

	Request.decode = function(str) {
		return decodeURIComponent(str.replace(/[+]/g, ' '));
	}
	Request.prototype.decode = Request.decode;

	Request.prototype.deletePars = function() {
		this.arg = new Object();
	}

	return Request;

})();

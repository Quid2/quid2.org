goog.provide('quid2.util');
//goog.require('goog');
quid2.util = (function () { 
    
    function dir() {
	var t = new Date();
	//var pars = [t].concat(arguments);
	var pars = arguments;
	console && console.dir && console.dir.apply && console.dir.apply(console,pars);
    };

    function log() {
	var t = new Date();
	//var pars = [t].concat(arguments);
	var pars = arguments;
	console && console.log && console.log.apply && console.log.apply(console,pars);
    };
    
    function error() {
	var t = new Date();
	//var pars = [t].concat(arguments);
	var pars = arguments;
	console && console.error && console.error.apply && console.error.apply(console,pars);
    };
    
    function assert(cond,msg) {
	if (!cond) {
	    var m = msg || "Failed assertion.";
	    error("assert:",m);
	    throw m;
	};
    };

    function mix(cls,mix) {
	assert(cls && mix);
	$.extend(cls.prototype,mix);
    };

    function mix0(cls,mix) {
	assert(cls && mix);
	$.extend(cls,mix);
    };
    
    function ext(b,e) {
	return $.extend({},b,e);
    };
    
    function isUndefined(o) {
	return typeof o == "undefined";
    };
    
    function isDefined(o) {
	return !isUndefined(o);
    };
    
    return {isDefined:isDefined,isUndefined:isUndefined
	    ,mix:mix,mix0:mix0,ext:ext
	    ,assert:assert,log:log,dir:dir,error:error
	    ,later : function (f) {setTimeout(f,0);},
	   };
})();
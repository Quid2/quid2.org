/**
 * qq.hub.subscribe("org.quid2.focus",function(name, publisherData,
 * subscriberData){console.log(name, publisherData,
 * subscriberData);},null,{mydata:"abcf"});
 * qq.hub.publish("org.quid2.focus",{fc:"333"});
 */

goog.require('quid2');
goog.provide("quid2.Hub");

quid2.Hub = function(parent) {
	this.prefix = "org.quid2.ctx." + Math.floor(Math.random() * 100000000000) + ".";
	this.parent = parent;
};

quid2.Hub.prototype.subHub = function() {
	return new quid2.Hub(this); 
};

quid2.Hub.prototype.publish = function(name, publisherData) {
	OpenAjax.hub.publish(this.prefix + name, publisherData);
	if (this.parent) this.parent.publish(name, publisherData);
};

// callback :: function(name, publisherData, subscriberData)
quid2.Hub.prototype.subscribe = function(name, refOrName, scope, subscriberData) {
	return OpenAjax.hub.subscribe(this.prefix + name, refOrName, scope, subscriberData);
};

quid2.Hub.prototype.unsubscribe = function(subscription) {
	OpenAjax.hub.unsubscribe(subscription);
};

quid2.Hub.prototype.def = function(obj, props) {
	var me = this;
	$.each(props, function(i, p) {
		me.subscribe(p, function(name, par) {
			setTimeout(function() {
				obj[p](par);
			}, 0);
			// obj[p](par);
		});
	});
};
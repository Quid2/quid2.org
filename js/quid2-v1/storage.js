goog.provide('quid2.storage');
goog.require('quid2');
//goog.require('quid2.Sha256');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.PrefixedMechanism');
goog.require('goog.storage.mechanism.HTML5LocalStorage');

// BUG: data is shared across all users -> delete storage is user changes.
quid2.storage = (function() {
  var st = window.localStorage;

  function showStorage() {
    for (var i=0;i<st.length;i++) {
      var key = st.key(i);
      console.log("CACHE",key,st.getItem(key));
    };
  };

  if (st) {
  var currentVersion = 37;
    var verKey = "storageVersion";
    var ver = new Number(st.getItem(verKey) || "0");
    if (ver < currentVersion) {
      st.clear();
      st.setItem(verKey,currentVersion+"");
      console.log("Cleared outdated cache");
    };

    //showStorage();
  };

    var stores = {};
	// No cache
	// var persistent = false;
	var persistent = new goog.storage.mechanism.HTML5LocalStorage().isAvailable();
	console.log("HTML5Storage",persistent);

	function storeKey(version,prefix) {
	  return version + "_" + prefix;
	}

	function Transient() {
	  this.store = {};
	};

	Transient.prototype.get = function (key) {
	  return this.store[key];
	};

	Transient.prototype.set = function (key,val) {
	  this.store[key]=val;
	};

	Transient.prototype.remove = function (key) {
	  delete this.store[key];
	};

	function Persistent(key) {
	  this.store = new goog.storage.Storage(new goog.storage.mechanism.PrefixedMechanism(new goog.storage.mechanism.HTML5LocalStorage(),key));
	};

	Persistent.prototype.get = function (key) {
	  return this.store.get(key);
	};

	Persistent.prototype.set = function (key,val) {
	  if (typeof key != "string" || typeof val != "string") throw ("Persistent.prototype.set("+key+","+val+") bad parameters");
	  try {
	    // May throw an exception if storage quota is exceeded.
	    this.store.set(key,val);
	    return true;
	  } catch (e) {
	    console.error("Persistent.prototype.set: "+e);
            st.clear();
	    return false;
	  };
	};

	Persistent.prototype.remove = function (key) {
	  this.store.remove(key);
	};

	return function (version,prefix) {
	  var key = storeKey(version,prefix);
	  var store = stores[key];
	  if (store) return store;

	  store = persistent ? new Persistent(key) : new Transient(key) ;

	  stores[key] = store;
	  return store;
	};
})();

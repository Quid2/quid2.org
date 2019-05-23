/*
 Deferred utilities.
 */
goog.provide('quid2.Deferred');

quid2.Deferred = (function () {


    /* (a->b) -> (a -> Defer b) */
    function lift(f) {
      return function (a) {
	var dfd = new $.Deferred();
	try {
	  dfd.resolve(f(a));
	} catch (err) {
	  dfd.reject(err);
	};
	return dfd;
      };
    };

    /* Defer a -> (a -> Defer b) -> Defer b */
    function bind(ma,a2mb) {
      return ma.pipe(a2mb);
    };

      function show(pre,d) {
	d.then(function (v) {
		 console.log(pre,"DONE",v);
	       },function (err) {
		 console.log(pre,"FAIL",err);
	       });
      };

      function delayed(v,delayInMs) {
	var dfd = new $.Deferred();
	setTimeout(function() {dfd.resolve(v);},delayInMs);
	return dfd;
      };


    /* a -> Defer a */
    function pure(a) {return $.when(a);};

    function test() {

      function err(e) {throw (e || "thrown err");}

      function inc1(x) {
	return x+1;
      };

      show("Test Defer 1",bind(bind(pure(2),lift(inc1)),lift(inc1)));
      show("Test Defer 2",bind(delayed(3),lift(inc1)));
      show("Test Defer 3",delayed(6).pipe(err));
    };

    //test();

    return {lift:lift,pure:pure,bind:bind
	    ,show:show
	    ,delayed:delayed
	   };
})();
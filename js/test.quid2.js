(function($){

   module("Quid2 API");

   /* "Borrowed" from the Functional library (http://osteele.com/sources/javascript/functional/)
    f(..args.....)
   Function.prototype.curry = function() {
     var fn = this;
     var args = Array.slice(arguments, 0);
     return function() {
       return fn.apply(this, args.concat(Array.slice(arguments, 0)));
     };
   };
   */

   var qq = $.quid2;
   //var netURL = location.protocol + "//" + location.host + "/api/";
   //var netURL = "http://quid2.net:7070"+"/api/";
   //var netURL = "http:/localhost:7070"+"/api/";
   var netURL = "http://quid2.net:8080/api/";
   qq.connect(netURL,function(spc) {

     console.log("connected with local space",spc);

     function show(v) {
       console.log("result: ",v.toString());
     };

     //var q = quid2.sig;
     //q.Money.value(spc,show,q.Finance.ExchangeRate(q.Currency.EUR,q.Currency.GBP));

       // spc.evalString("Money.value (Finance.Sec Finance.LSE \"RBS\")",show);
       spc.evalString("names env",show);

     /*
		//spc.app("Repo.Dir.getFile",[["Data","Bool"]],function (mimeObj) {console.log("mimeObj: ",mimeObj);});
		function testUser() {

		  var albert = {
		    name:"Albert Einstein"
		    ,description:"I have a <b>really</b> interesting theory."
		    ,motto: "Everything is relative."
		    ,homePage:"http://en.wikipedia.org/wiki/Albert_Einstein"
		  };
		  var mandela = {name:"Nelson Mandela",motto:"United we win."} ;

		  spc.def(["User","user"],qq.v(albert));
		  spc.def(["User","user"],qq.v(mandela));
		  spc.app(["User","user"],[],function(auser) {
		    console.log("user: ",auser);
		  });

		};
	*/


		/*
		 qq.def("alert" ,qq.k(alert));
		 qq.def("prompt",qq.k(prompt));
		 qq.def("two"   ,qq.v(2));
		 qq.undef("two");
		 qq.def("two"   ,qq.k(function() {
		 return 22; // Yeah, I know.
		 }));
		 */
		//qq.sig("alert",["hi!"]);
		//qq.sig("two",[],function (v) {alert(v);});

		//qq.sig("server",["display","HIIIIIIIII from the client!"]);
		//qq.sig("server",["plus",14,-3],function(v) {alert(v)});
		//qq.sig("server",["test",ch.me],function(v) {alert("completed test")});

		/*
		 var repo = {Cabal:{Darcs:{url:"http://darcs.ubuntu.local:8080",darcsVersion:{Patch:"20091019093401-ebd76-c08a58911c00e99d6e0f6f7ae28484739702c479.gz"},subDirectory:"haskell/package/haskelld"}}};
		 var file = {Module:"HaskellD.Test.Example1"};
		 qq.sig("server",["eval",repo,file,"four+four"],function(v) {console.log("EVAL",v)});
		 */
	      });

 })(jQuery);




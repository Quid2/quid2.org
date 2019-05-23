(function($){

   module("Channel API");

   var space = {};
   function def(name,f) {
     space[name]=f;
   };

   function undef(name) {
     delete space[name];
   }

   function isUndefined(o) {
     return typeof o == "undefined";
   }

   function isDefined(o) {return ! isUndefined(o);}

   /*
    * Modify in place a JSON object to map undefined to []
    */
     function undefined2json (o) {
       function walk(o,k) {
	 var j = o[k];

	 if (isUndefined(j)) return [];

	 if (j && typeof j === 'object') {
	   for (k in j)
	     if (Object.hasOwnProperty.call(j,k)) j[k]=walk(j,k);
	 }

	 return j;
       }

       return walk([o],0);
     };


   // Make a normal function into a continuation function
   function k(f) {
     return function(pars,cont) {
       var result = f.apply(window,pars);
       if (isDefined(cont)) cont(result);
     };
   }

   function sig(name,pars,cont) {
     console.log("SIG ",name,pars,cont);
     setTimeout(function(){space[name](pars,cont)},0);
   };

   //sig("alert",["hi!"]);
   //sig("two",[],function (v) {alert(v);});


   /** Process communication channel messages
    *  Messages format:
    **/
   function process(msg) {
       console.log("RECEIVED MSG:",msg,"space:",space);
       var call = msg[0];
       var name = call[0];
       var pars = call.slice(1);

       var cont = msg[1];
       if (isUndefined(cont)) sig(name,pars);
       else {
	 var cname = cont[0];
	 var cpars = cont.slice(1);
	 sig(name,pars,function(v) {sig(cname,cpars.concat([v]));});
       };
   };


   var netURL = "http://quid2.net:8080/api/";
   //var netURL = "http://127.0.0.1:7070"+"/api/";
   $.quid2.channel(netURL,process,function(ch) {

   console.log("CONNECTED",ch);
   var myNS = ["Temp",ch.namespace];

   // Counter used to create unique endpoint/channel identifiers.
   // BUG: easily guessable.
   var counter = 0;
   function forward(pars,cont) {
     var msg;
     if (isUndefined(cont)) msg = [pars];
     else {
       var cbID = "__callback_"+(++counter);
       def(cbID,function(pars) {
	     undef(cbID);
	     cont(pars[0]);
	   });
       msg = [pars,me.concat([cbID])];
     }

     ch.write1(undefined2json(msg));
   };

    /**
   def("alert",k(alert));
   def("prompt",k(prompt));
   def("two",k(function() {return 2;}));
   undef("two");
   def("two",k(function() {
	 return 22; // Yeah, I know.
   }));
   def("server",forward);
     */
   //sig("server",["display","HIIIIIIIII from the client!"]);
   //sig("server",["plus",14,-3],function(v) {alert(v)});
   //sig("server",["test",me],function(v) {alert("completed test")});
/*
   var repo = {Cabal:{Darcs:{url:"http://darcs.ubuntu.local:8080",darcsVersion:{Patch:"20091019093401-ebd76-c08a58911c00e99d6e0f6f7ae28484739702c479.gz"},subDirectory:"haskell/package/haskelld"}}};
   var file = {Module:"HaskellD.Test.Example1"};
   sig("server",["eval",repo,file,"four+four"],function(v) {console.log("EVAL",v)});

	   //Lift a value into a function that return the same value. : l :: r
	   // NO: into a continuation function; k :: [] (Maybe (r -> ()))
	   function v(l) {
	     return function(pars) {
	       if (pars.length != 0) throw new Error("Extra parameters:"+pars);
	       return l;
	     };
	   };



 */
 });

})(jQuery);




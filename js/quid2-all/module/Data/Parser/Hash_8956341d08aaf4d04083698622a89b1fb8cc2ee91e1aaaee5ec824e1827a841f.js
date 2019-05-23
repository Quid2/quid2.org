goog.provide('quid2.module.Data.Parser.Hash_8956341d08aaf4d04083698622a89b1fb8cc2ee91e1aaaee5ec824e1827a841f');
goog.require('quid2.std');

quid2.module.Data.Parser.Hash_8956341d08aaf4d04083698622a89b1fb8cc2ee91e1aaaee5ec824e1827a841f = (function () {
var s = quid2.std;
/*
data More  where 
  Complete :: More
  Incomplete :: More
*/

function Complete() {this.value=[];};
s.asCons(Complete,"Complete",0,function (bs) {return new Complete();});

function Incomplete() {this.value=[];};
s.asCons(Incomplete,"Incomplete",1,function (bs) {return new Incomplete();});


var More$={value:[]};
s.asType0(More$,"More$",[Complete,Incomplete]);



return s.defs("Data.Parser.Hash_8956341d08aaf4d04083698622a89b1fb8cc2ee91e1aaaee5ec824e1827a841f",{},{More$:More$,Complete:Complete,Incomplete:Incomplete});
})();

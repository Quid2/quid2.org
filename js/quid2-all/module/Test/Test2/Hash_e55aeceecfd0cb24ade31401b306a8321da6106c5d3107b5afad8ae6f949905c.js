goog.provide('quid2.module.Test.Test2.Hash_e55aeceecfd0cb24ade31401b306a8321da6106c5d3107b5afad8ae6f949905c');
goog.require('quid2.std');

quid2.module.Test.Test2.Hash_e55aeceecfd0cb24ade31401b306a8321da6106c5d3107b5afad8ae6f949905c = (function () {
var s = quid2.std;
/*
data Vegetable  where 
  Sprout :: Vegetable
  Potato :: Vegetable
*/

function Sprout() {this.value=[];};
s.asCons(Sprout,"Sprout",0,function (bs) {return new Sprout();});

function Potato() {this.value=[];};
s.asCons(Potato,"Potato",1,function (bs) {return new Potato();});


var Vegetable$={value:[]};
s.asType0(Vegetable$,"Vegetable$",[Sprout,Potato]);



return s.defs("Test.Test2.Hash_e55aeceecfd0cb24ade31401b306a8321da6106c5d3107b5afad8ae6f949905c",{},{Vegetable$:Vegetable$,Sprout:Sprout,Potato:Potato});
})();

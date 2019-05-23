goog.provide('quid2.module.Test.Test2.Hash_9595e53605636745e7bf4f87138f1491c30c628194ee9c62c591855e3c836a65');
goog.require('quid2.std');

quid2.module.Test.Test2.Hash_9595e53605636745e7bf4f87138f1491c30c628194ee9c62c591855e3c836a65 = (function () {
var s = quid2.std;
/*
data Fruit  where 
  Apple :: [Char] -> Fruit
  Prune :: Fruit
  Almond :: Fruit
*/

function Apple() {this.value=[s.string(arguments[0])];};
s.asCons(Apple,"Apple",0,function (bs) {return new Apple(s.String.decode(bs));});

function Prune() {this.value=[];};
s.asCons(Prune,"Prune",1,function (bs) {return new Prune();});

function Almond() {this.value=[];};
s.asCons(Almond,"Almond",2,function (bs) {return new Almond();});


var Fruit$={value:[]};
s.asType0(Fruit$,"Fruit$",[Apple,Prune,Almond]);



return s.defs("Test.Test2.Hash_9595e53605636745e7bf4f87138f1491c30c628194ee9c62c591855e3c836a65",{},{Fruit$:Fruit$,Apple:Apple,Prune:Prune,Almond:Almond});
})();

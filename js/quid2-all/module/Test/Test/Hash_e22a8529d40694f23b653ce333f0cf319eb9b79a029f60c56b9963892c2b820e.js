goog.provide('quid2.module.Test.Test.Hash_e22a8529d40694f23b653ce333f0cf319eb9b79a029f60c56b9963892c2b820e');
goog.require('quid2.std');
goog.require('quid2.module.Test.Test2.Hash_e55aeceecfd0cb24ade31401b306a8321da6106c5d3107b5afad8ae6f949905c');
goog.require('quid2.module.Test.Test2.Hash_9595e53605636745e7bf4f87138f1491c30c628194ee9c62c591855e3c836a65');

quid2.module.Test.Test.Hash_e22a8529d40694f23b653ce333f0cf319eb9b79a029f60c56b9963892c2b820e = (function () {
var s = quid2.std;
/*
data Recipe  where 
  Pie :: [Char] -> [Test.Test2.Hash_9595e53605636745e7bf4f87138f1491c30c628194ee9c62c591855e3c836a65.Fruit] -> Recipe
  Veg :: Test.Test2.Hash_e55aeceecfd0cb24ade31401b306a8321da6106c5d3107b5afad8ae6f949905c.Vegetable -> Recipe
*/

function Pie() {this.value=[s.string(arguments[0]),s.list(arguments[1])];};
s.asCons(Pie,"Pie",0,function (bs) {return new Pie(s.String.decode(bs),new s.List$(quid2.module.Test.Test2.Hash_9595e53605636745e7bf4f87138f1491c30c628194ee9c62c591855e3c836a65.Fruit$).decode(bs));});

function Veg() {this.value=[arguments[0]];};
s.asCons(Veg,"Veg",1,function (bs) {return new Veg(quid2.module.Test.Test2.Hash_e55aeceecfd0cb24ade31401b306a8321da6106c5d3107b5afad8ae6f949905c.Vegetable$.decode(bs));});


var Recipe$={value:[]};
s.asType0(Recipe$,"Recipe$",[Pie,Veg]);



return s.defs("Test.Test.Hash_e22a8529d40694f23b653ce333f0cf319eb9b79a029f60c56b9963892c2b820e",{},{Recipe$:Recipe$,Pie:Pie,Veg:Veg});
})();

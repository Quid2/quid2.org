goog.provide('quid2.module.Test.Test.Hash_f6719c56f12209fbfdae4c1bb48c70567d50a23bf1b1ecc689a38c580e61044e');
goog.require('quid2.std');

quid2.module.Test.Test.Hash_f6719c56f12209fbfdae4c1bb48c70567d50a23bf1b1ecc689a38c580e61044e = (function () {
var s = quid2.std;
/*
data Expr a where 
  Add :: a -> a -> Expr a
  Inc :: a -> Expr a
  Add3 :: a -> a -> a -> Expr a
*/

function Add() {this.value=[arguments[0],arguments[1]];};
s.asCons(Add,"Add",0,function (bs,types) {return new Add(types[0].decode(bs),types[0].decode(bs));});

function Inc() {this.value=[arguments[0]];};
s.asCons(Inc,"Inc",1,function (bs,types) {return new Inc(types[0].decode(bs));});

function Add3() {this.value=[arguments[0],arguments[1],arguments[2]];};
s.asCons(Add3,"Add3",2,function (bs,types) {return new Add3(types[0].decode(bs),types[0].decode(bs),types[0].decode(bs));});


function Expr$() {this.value=[arguments[0]];};
s.asType(Expr$,"Expr$",[Add,Inc,Add3]);



return s.defs("Test.Test.Hash_f6719c56f12209fbfdae4c1bb48c70567d50a23bf1b1ecc689a38c580e61044e",{},{Expr$:Expr$,Add:Add,Inc:Inc,Add3:Add3});
})();

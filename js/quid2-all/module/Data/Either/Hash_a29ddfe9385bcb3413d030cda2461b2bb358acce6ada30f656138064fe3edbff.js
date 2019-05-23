goog.provide('quid2.module.Data.Either.Hash_a29ddfe9385bcb3413d030cda2461b2bb358acce6ada30f656138064fe3edbff');
goog.require('quid2.std');

quid2.module.Data.Either.Hash_a29ddfe9385bcb3413d030cda2461b2bb358acce6ada30f656138064fe3edbff = (function () {
var s = quid2.std;
/*
data Either a b where 
  Left :: a -> Either a b
  Right :: b -> Either a b
*/

function Left() {this.value=[arguments[0]];};
s.asCons(Left,"Left",0,function (bs,types) {return new Left(types[0].decode(bs));});

function Right() {this.value=[arguments[0]];};
s.asCons(Right,"Right",1,function (bs,types) {return new Right(types[1].decode(bs));});


function Either$() {this.value=[arguments[0],arguments[1]];};
s.asType(Either$,"Either$",[Left,Right]);



return s.defs("Data.Either.Hash_a29ddfe9385bcb3413d030cda2461b2bb358acce6ada30f656138064fe3edbff",{},{Either$:Either$,Left:Left,Right:Right});
})();

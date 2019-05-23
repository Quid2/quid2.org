goog.provide('quid2.module.Test.Module.Class.Serialize.Hash_2d89a6f9292571f13b9459c9674fa85b45608c36c4f700c0f09d1b2a655773a0');
goog.require('quid2.std');

quid2.module.Test.Module.Class.Serialize.Hash_2d89a6f9292571f13b9459c9674fa85b45608c36c4f700c0f09d1b2a655773a0 = (function () {
var s = quid2.std;
/*
data List a where 
  Nil :: List a
  Cons :: a -> List a -> List a
*/

function Nil() {this.value=[];};
s.asCons(Nil,"Nil",0,function (bs,types) {return new Nil();});

function Cons() {this.value=[arguments[0],arguments[1]];};
s.asCons(Cons,"Cons",1,function (bs,types) {return new Cons(types[0].decode(bs),new List$(types[0]).decode(bs));});


function List$() {this.value=[arguments[0]];};
s.asType(List$,"List$",[Nil,Cons]);



return s.defs("Test.Module.Class.Serialize.Hash_2d89a6f9292571f13b9459c9674fa85b45608c36c4f700c0f09d1b2a655773a0",{},{List$:List$,Nil:Nil,Cons:Cons});
})();

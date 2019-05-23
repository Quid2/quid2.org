goog.provide('quid2.module.Data.Ordering.Hash_01a7df2dc12d8b92a645cd6152ad2f688719524abcfaf1d6de3d65833593f61d');
goog.require('quid2.std');

quid2.module.Data.Ordering.Hash_01a7df2dc12d8b92a645cd6152ad2f688719524abcfaf1d6de3d65833593f61d = (function () {
var s = quid2.std;
/*
data Ordering  where 
  LT :: Ordering
  EQ :: Ordering
  GT :: Ordering
*/

function LT() {this.value=[];};
s.asCons(LT,"LT",0,function (bs) {return new LT();});

function EQ() {this.value=[];};
s.asCons(EQ,"EQ",1,function (bs) {return new EQ();});

function GT() {this.value=[];};
s.asCons(GT,"GT",2,function (bs) {return new GT();});


var Ordering$={value:[]};
s.asType0(Ordering$,"Ordering$",[LT,EQ,GT]);



return s.defs("Data.Ordering.Hash_01a7df2dc12d8b92a645cd6152ad2f688719524abcfaf1d6de3d65833593f61d",{},{Ordering$:Ordering$,LT:LT,EQ:EQ,GT:GT});
})();

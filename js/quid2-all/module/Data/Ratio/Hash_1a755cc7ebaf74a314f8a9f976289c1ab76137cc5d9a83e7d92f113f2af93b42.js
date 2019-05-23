goog.provide('quid2.module.Data.Ratio.Hash_1a755cc7ebaf74a314f8a9f976289c1ab76137cc5d9a83e7d92f113f2af93b42');
goog.require('quid2.std');

quid2.module.Data.Ratio.Hash_1a755cc7ebaf74a314f8a9f976289c1ab76137cc5d9a83e7d92f113f2af93b42 = (function () {
var s = quid2.std;
/*
data Ratio a where 
  Ratio :: a -> a -> Ratio a
*/

function Ratio() {this.value=[arguments[0],arguments[1]];};
s.asCons(Ratio,"Ratio",0,function (bs,types) {return new Ratio(types[0].decode(bs),types[0].decode(bs));});


function Ratio$() {this.value=[arguments[0]];};
s.asType(Ratio$,"Ratio$",[Ratio]);



return s.defs("Data.Ratio.Hash_1a755cc7ebaf74a314f8a9f976289c1ab76137cc5d9a83e7d92f113f2af93b42",{},{Ratio$:Ratio$,Ratio:Ratio});
})();

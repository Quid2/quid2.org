goog.provide('quid2.module.Data.Typed.Hash_e552ab4dad85f0be3b274b74242e81f45ba2b54c9759697aa7dfdf95fe2e103e');
goog.require('quid2.std');

quid2.module.Data.Typed.Hash_e552ab4dad85f0be3b274b74242e81f45ba2b54c9759697aa7dfdf95fe2e103e = (function () {
var s = quid2.std;
/*
data Typed  where 
  Typed :: [Char] -> [Word8] -> Typed
*/

function Typed() {this.value=[s.string(arguments[0]),s.bytes(arguments[1])];};
s.asCons(Typed,"Typed",0,function (bs) {return new Typed(s.String.decode(bs),s.ByteList.decode(bs));});


var Typed$={value:[]};
s.asType0(Typed$,"Typed$",[Typed]);



return s.defs("Data.Typed.Hash_e552ab4dad85f0be3b274b74242e81f45ba2b54c9759697aa7dfdf95fe2e103e",{},{Typed$:Typed$,Typed:Typed});
})();

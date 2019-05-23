goog.provide('quid2.module.Network.Verbatim.Hash_1ca4b4317d2b683310ac558647701bf3238db5bf9859d5210f7c00b186d6dacd');
goog.require('quid2.std');

quid2.module.Network.Verbatim.Hash_1ca4b4317d2b683310ac558647701bf3238db5bf9859d5210f7c00b186d6dacd = (function () {
var s = quid2.std;
/*
data Verbatim  where 
  Verbatim :: [Word8] -> Verbatim
*/

function Verbatim() {this.value=[s.bytes(arguments[0])];};
s.asCons(Verbatim,"Verbatim",0,function (bs) {return new Verbatim(s.ByteList.decode(bs));});


var Verbatim$={value:[]};
s.asType0(Verbatim$,"Verbatim$",[Verbatim]);



return s.defs("Network.Verbatim.Hash_1ca4b4317d2b683310ac558647701bf3238db5bf9859d5210f7c00b186d6dacd",{},{Verbatim$:Verbatim$,Verbatim:Verbatim});
})();

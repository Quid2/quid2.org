goog.provide('quid2.module.Network.Function.Hash_60058a2876a7c433b92430f1b3e831894b9aa3480f3b0e36c858a635cb177bd5');
goog.require('quid2.std');
goog.require('quid2.module.Network.EndPoint.Hash_5b8d3169b4666ce03ae288a785a7d9f5824a8c5572abc627fff35b794f9e682b');
goog.require('quid2.module.Data.Maybe.Hash_fe1a9ed1fe3015c135b766464e0bcb971d1cd2b1aa733a473dd1055ba4b7eb60');

quid2.module.Network.Function.Hash_60058a2876a7c433b92430f1b3e831894b9aa3480f3b0e36c858a635cb177bd5 = (function () {
var s = quid2.std;
/*
data UFunction  where 
  UFunction :: Data.Maybe.Hash_fe1a9ed1fe3015c135b766464e0bcb971d1cd2b1aa733a473dd1055ba4b7eb60.Maybe Network.EndPoint.Hash_5b8d3169b4666ce03ae288a785a7d9f5824a8c5572abc627fff35b794f9e682b.EndPoint -> [Char] -> UFunction
*/

function UFunction() {this.value=[arguments[0],s.string(arguments[1])];};
s.asCons(UFunction,"UFunction",0,function (bs) {return new UFunction(new quid2.module.Data.Maybe.Hash_fe1a9ed1fe3015c135b766464e0bcb971d1cd2b1aa733a473dd1055ba4b7eb60.Maybe$(quid2.module.Network.EndPoint.Hash_5b8d3169b4666ce03ae288a785a7d9f5824a8c5572abc627fff35b794f9e682b.EndPoint$).decode(bs),s.String.decode(bs));});


var UFunction$={value:[]};
s.asType0(UFunction$,"UFunction$",[UFunction]);



return s.defs("Network.Function.Hash_60058a2876a7c433b92430f1b3e831894b9aa3480f3b0e36c858a635cb177bd5",{},{UFunction$:UFunction$,UFunction:UFunction});
})();

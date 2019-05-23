goog.provide('quid2.module.Test.Test.Hash_572da331ac4713b2420404e06bdc78d6dec44e9d5d40d8086da84303791b0f7e');
goog.require('quid2.std');

quid2.module.Test.Test.Hash_572da331ac4713b2420404e06bdc78d6dec44e9d5d40d8086da84303791b0f7e = (function () {
var s = quid2.std;
/*
data F a b where 
  F :: a -> b -> F a b
*/

function F() {this.value=[s.fun(arguments[0])];};
s.asCons(F,"F",0,function (bs,types) {return new F(s.Fun(types[0],types[1]).decode(bs));});


function F$() {this.value=[arguments[0],arguments[1]];};
s.asType(F$,"F$",[F]);



return s.defs("Test.Test.Hash_572da331ac4713b2420404e06bdc78d6dec44e9d5d40d8086da84303791b0f7e",{},{F$:F$,F:F});
})();

goog.provide('quid2.module.Network.Msg.Hash_264fef0a16c033f28a23b02b428c77ce80cb54360435df0920d8098f9d72ed74');
goog.require('quid2.std');
goog.require('quid2.module.Network.Function.Hash_60058a2876a7c433b92430f1b3e831894b9aa3480f3b0e36c858a635cb177bd5');
goog.require('quid2.module.Network.Msg.Hash_3dda7e178e7a7ca389ab7a579611191e6580f5c0afe2d0e1c62b73e9b3bfa2e9');
goog.require('quid2.module.Network.Domain.Hash_38fd29d583e084e61f43eb4a899c4f4abf29672b7111406e06c47cc4248b9267');
goog.require('quid2.module.Data.Maybe.Hash_fe1a9ed1fe3015c135b766464e0bcb971d1cd2b1aa733a473dd1055ba4b7eb60');

quid2.module.Network.Msg.Hash_264fef0a16c033f28a23b02b428c77ce80cb54360435df0920d8098f9d72ed74 = (function () {
var s = quid2.std;
/*
data Msg  where 
  Call :: Network.Function.Hash_60058a2876a7c433b92430f1b3e831894b9aa3480f3b0e36c858a635cb177bd5.UFunction -> [[Word8]] -> Network.Function.Hash_60058a2876a7c433b92430f1b3e831894b9aa3480f3b0e36c858a635cb177bd5.UFunction -> Data.Maybe.Hash_fe1a9ed1fe3015c135b766464e0bcb971d1cd2b1aa733a473dd1055ba4b7eb60.Maybe Network.Domain.Hash_38fd29d583e084e61f43eb4a899c4f4abf29672b7111406e06c47cc4248b9267.Domain -> Msg
  Ok :: [Word8] -> Network.Function.Hash_60058a2876a7c433b92430f1b3e831894b9aa3480f3b0e36c858a635cb177bd5.UFunction -> Msg
  Err :: Network.Msg.Hash_3dda7e178e7a7ca389ab7a579611191e6580f5c0afe2d0e1c62b73e9b3bfa2e9.RpcError -> Network.Function.Hash_60058a2876a7c433b92430f1b3e831894b9aa3480f3b0e36c858a635cb177bd5.UFunction -> Msg
  More :: Network.Function.Hash_60058a2876a7c433b92430f1b3e831894b9aa3480f3b0e36c858a635cb177bd5.UFunction -> Network.Function.Hash_60058a2876a7c433b92430f1b3e831894b9aa3480f3b0e36c858a635cb177bd5.UFunction -> Msg
*/

function Call() {this.value=[arguments[0],s.list(arguments[1]),arguments[2],arguments[3]];};
s.asCons(Call,"Call",0,function (bs) {return new Call(quid2.module.Network.Function.Hash_60058a2876a7c433b92430f1b3e831894b9aa3480f3b0e36c858a635cb177bd5.UFunction$.decode(bs),new s.List$(s.ByteList).decode(bs),quid2.module.Network.Function.Hash_60058a2876a7c433b92430f1b3e831894b9aa3480f3b0e36c858a635cb177bd5.UFunction$.decode(bs),new quid2.module.Data.Maybe.Hash_fe1a9ed1fe3015c135b766464e0bcb971d1cd2b1aa733a473dd1055ba4b7eb60.Maybe$(quid2.module.Network.Domain.Hash_38fd29d583e084e61f43eb4a899c4f4abf29672b7111406e06c47cc4248b9267.Domain$).decode(bs));});

function Ok() {this.value=[s.bytes(arguments[0]),arguments[1]];};
s.asCons(Ok,"Ok",1,function (bs) {return new Ok(s.ByteList.decode(bs),quid2.module.Network.Function.Hash_60058a2876a7c433b92430f1b3e831894b9aa3480f3b0e36c858a635cb177bd5.UFunction$.decode(bs));});

function Err() {this.value=[arguments[0],arguments[1]];};
s.asCons(Err,"Err",2,function (bs) {return new Err(quid2.module.Network.Msg.Hash_3dda7e178e7a7ca389ab7a579611191e6580f5c0afe2d0e1c62b73e9b3bfa2e9.RpcError$.decode(bs),quid2.module.Network.Function.Hash_60058a2876a7c433b92430f1b3e831894b9aa3480f3b0e36c858a635cb177bd5.UFunction$.decode(bs));});

function More() {this.value=[arguments[0],arguments[1]];};
s.asCons(More,"More",3,function (bs) {return new More(quid2.module.Network.Function.Hash_60058a2876a7c433b92430f1b3e831894b9aa3480f3b0e36c858a635cb177bd5.UFunction$.decode(bs),quid2.module.Network.Function.Hash_60058a2876a7c433b92430f1b3e831894b9aa3480f3b0e36c858a635cb177bd5.UFunction$.decode(bs));});


var Msg$={value:[]};
s.asType0(Msg$,"Msg$",[Call,Ok,Err,More]);



return s.defs("Network.Msg.Hash_264fef0a16c033f28a23b02b428c77ce80cb54360435df0920d8098f9d72ed74",{},{Msg$:Msg$,Call:Call,Ok:Ok,Err:Err,More:More});
})();

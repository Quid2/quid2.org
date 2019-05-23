goog.provide('quid2.module.Digest.SHA.Hash_9ab09431457018a972d386de2d85e627094a0d00f63061b1c35b801d4022e74e');
goog.require('quid2.std');

quid2.module.Digest.SHA.Hash_9ab09431457018a972d386de2d85e627094a0d00f63061b1c35b801d4022e74e = (function () {
var s = quid2.std;
/*
data SHA256  where 
  SHA256 :: [Char] -> SHA256
*/

function SHA256() {this.value=[s.string(arguments[0])];};
s.asCons(SHA256,"SHA256",0,function (bs) {return new SHA256(s.String.decode(bs));});


var SHA256$={value:[]};
s.asType0(SHA256$,"SHA256$",[SHA256]);



return s.defs("Digest.SHA.Hash_9ab09431457018a972d386de2d85e627094a0d00f63061b1c35b801d4022e74e",{},{SHA256$:SHA256$,SHA256:SHA256});
})();

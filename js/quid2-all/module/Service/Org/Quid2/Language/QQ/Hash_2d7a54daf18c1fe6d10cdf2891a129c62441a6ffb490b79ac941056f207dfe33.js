goog.provide('quid2.module.Service.Org.Quid2.Language.QQ.Hash_2d7a54daf18c1fe6d10cdf2891a129c62441a6ffb490b79ac941056f207dfe33');
goog.require('quid2.std');
goog.require('quid2.module.Service.Org.Quid2.Language.QQ.Hash_04e43b1a91a8b7b5477456786d620c53021925bb70f5bade5fc89523f5908369');
goog.require('quid2.module.Service.Org.Quid2.Language.QQ.Hash_34532b079044b6d8fcb951790a90b8f8aec83d21c28b91ea50d2115f0efd4505');

quid2.module.Service.Org.Quid2.Language.QQ.Hash_2d7a54daf18c1fe6d10cdf2891a129c62441a6ffb490b79ac941056f207dfe33 = (function () {
var s = quid2.std;
/*
data Cons a where 
  Cons :: Service.Org.Quid2.Language.QQ.Hash_34532b079044b6d8fcb951790a90b8f8aec83d21c28b91ea50d2115f0efd4505.Name -> Word8 -> Service.Org.Quid2.Language.QQ.Hash_04e43b1a91a8b7b5477456786d620c53021925bb70f5bade5fc89523f5908369.Type a -> Cons a
*/

function Cons() {this.value=[arguments[0],s.word8(arguments[1]),arguments[2]];};
s.asCons(Cons,"Cons",0,function (bs,types) {return new Cons(quid2.module.Service.Org.Quid2.Language.QQ.Hash_34532b079044b6d8fcb951790a90b8f8aec83d21c28b91ea50d2115f0efd4505.Name$.decode(bs),s.Word8.decode(bs),new quid2.module.Service.Org.Quid2.Language.QQ.Hash_04e43b1a91a8b7b5477456786d620c53021925bb70f5bade5fc89523f5908369.Type$(types[0]).decode(bs));});


function Cons$() {this.value=[arguments[0]];};
s.asType(Cons$,"Cons$",[Cons]);



return s.defs("Service.Org.Quid2.Language.QQ.Hash_2d7a54daf18c1fe6d10cdf2891a129c62441a6ffb490b79ac941056f207dfe33",{},{Cons$:Cons$,Cons:Cons});
})();

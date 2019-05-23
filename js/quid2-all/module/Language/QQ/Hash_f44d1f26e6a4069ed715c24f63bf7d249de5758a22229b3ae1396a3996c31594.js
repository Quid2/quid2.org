goog.provide('quid2.module.Language.QQ.Hash_f44d1f26e6a4069ed715c24f63bf7d249de5758a22229b3ae1396a3996c31594');
goog.require('quid2.std');
goog.require('quid2.module.Language.QQ.Hash_a25f345b9906a8b90a1ba475c9f18ff98effd320a4290f2a5dde70fa3348fefb');
goog.require('quid2.module.Language.QQ.Hash_431d514c387f5904cd468e3e8c0457fd2970548ed1f0a33e9a558a8049e9797d');

quid2.module.Language.QQ.Hash_f44d1f26e6a4069ed715c24f63bf7d249de5758a22229b3ae1396a3996c31594 = (function () {
var s = quid2.std;
/*
data Value a where 
  Value :: Language.QQ.Hash_431d514c387f5904cd468e3e8c0457fd2970548ed1f0a33e9a558a8049e9797d.QualName -> Language.QQ.Hash_a25f345b9906a8b90a1ba475c9f18ff98effd320a4290f2a5dde70fa3348fefb.Type a -> Value a
*/

function Value() {this.value=[arguments[0],arguments[1]];};
s.asCons(Value,"Value",0,function (bs,types) {return new Value(quid2.module.Language.QQ.Hash_431d514c387f5904cd468e3e8c0457fd2970548ed1f0a33e9a558a8049e9797d.QualName$.decode(bs),new quid2.module.Language.QQ.Hash_a25f345b9906a8b90a1ba475c9f18ff98effd320a4290f2a5dde70fa3348fefb.Type$(types[0]).decode(bs));});


function Value$() {this.value=[arguments[0]];};
s.asType(Value$,"Value$",[Value]);



return s.defs("Language.QQ.Hash_f44d1f26e6a4069ed715c24f63bf7d249de5758a22229b3ae1396a3996c31594",{},{Value$:Value$,Value:Value});
})();

goog.provide('quid2.module.Language.QQ.Hash_40cb36661feae3a9e62ab3fdb86f95e9a507dc6f15da7e64a6e95a1510cf930d');
goog.require('quid2.std');
goog.require('quid2.module.Language.QQ.Hash_1fafe75791bc2af0077510089018fce9f3148c2df7ab29b7a05b9cd791e1de46');
goog.require('quid2.module.Language.QQ.Hash_431d514c387f5904cd468e3e8c0457fd2970548ed1f0a33e9a558a8049e9797d');

quid2.module.Language.QQ.Hash_40cb36661feae3a9e62ab3fdb86f95e9a507dc6f15da7e64a6e95a1510cf930d = (function () {
var s = quid2.std;
/*
data DataDecl a where 
  DataDecl :: Language.QQ.Hash_431d514c387f5904cd468e3e8c0457fd2970548ed1f0a33e9a558a8049e9797d.QualName -> [Word8] -> [Language.QQ.Hash_1fafe75791bc2af0077510089018fce9f3148c2df7ab29b7a05b9cd791e1de46.Cons a] -> DataDecl a
*/

function DataDecl() {this.value=[arguments[0],s.bytes(arguments[1]),s.list(arguments[2])];};
s.asCons(DataDecl,"DataDecl",0,function (bs,types) {return new DataDecl(quid2.module.Language.QQ.Hash_431d514c387f5904cd468e3e8c0457fd2970548ed1f0a33e9a558a8049e9797d.QualName$.decode(bs),s.ByteList.decode(bs),new s.List$(new quid2.module.Language.QQ.Hash_1fafe75791bc2af0077510089018fce9f3148c2df7ab29b7a05b9cd791e1de46.Cons$(types[0])).decode(bs));});


function DataDecl$() {this.value=[arguments[0]];};
s.asType(DataDecl$,"DataDecl$",[DataDecl]);



return s.defs("Language.QQ.Hash_40cb36661feae3a9e62ab3fdb86f95e9a507dc6f15da7e64a6e95a1510cf930d",{},{DataDecl$:DataDecl$,DataDecl:DataDecl});
})();

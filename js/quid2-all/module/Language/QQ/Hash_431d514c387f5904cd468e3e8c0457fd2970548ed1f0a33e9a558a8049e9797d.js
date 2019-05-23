goog.provide('quid2.module.Language.QQ.Hash_431d514c387f5904cd468e3e8c0457fd2970548ed1f0a33e9a558a8049e9797d');
goog.require('quid2.std');
goog.require('quid2.module.Language.QQ.Hash_d03a9d16e4121f64a997cc509c27fb5c46a0a2dca60623dbc869c295280f2128');

quid2.module.Language.QQ.Hash_431d514c387f5904cd468e3e8c0457fd2970548ed1f0a33e9a558a8049e9797d = (function () {
var s = quid2.std;
/*
data QualName  where 
  QualName :: [Char] -> Language.QQ.Hash_d03a9d16e4121f64a997cc509c27fb5c46a0a2dca60623dbc869c295280f2128.Name -> QualName
*/

function QualName() {this.value=[s.string(arguments[0]),arguments[1]];};
s.asCons(QualName,"QualName",0,function (bs) {return new QualName(s.String.decode(bs),quid2.module.Language.QQ.Hash_d03a9d16e4121f64a997cc509c27fb5c46a0a2dca60623dbc869c295280f2128.Name$.decode(bs));});


var QualName$={value:[]};
s.asType0(QualName$,"QualName$",[QualName]);



return s.defs("Language.QQ.Hash_431d514c387f5904cd468e3e8c0457fd2970548ed1f0a33e9a558a8049e9797d",{},{QualName$:QualName$,QualName:QualName});
})();

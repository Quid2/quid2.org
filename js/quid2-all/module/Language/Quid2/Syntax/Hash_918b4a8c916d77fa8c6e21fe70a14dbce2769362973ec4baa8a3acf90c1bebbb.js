goog.provide('quid2.module.Language.Quid2.Syntax.Hash_918b4a8c916d77fa8c6e21fe70a14dbce2769362973ec4baa8a3acf90c1bebbb');
goog.require('quid2.std');
goog.require('quid2.module.Language.Quid2.Syntax.Hash_8a5798d23c6509fdb1af2273d7194bacee445c5730bc9fdf76e30de40cef8d71');

quid2.module.Language.Quid2.Syntax.Hash_918b4a8c916d77fa8c6e21fe70a14dbce2769362973ec4baa8a3acf90c1bebbb = (function () {
var s = quid2.std;
/*
data QOp  where 
  QVarOp :: Language.Quid2.Syntax.Hash_8a5798d23c6509fdb1af2273d7194bacee445c5730bc9fdf76e30de40cef8d71.QName -> QOp
  QConOp :: Language.Quid2.Syntax.Hash_8a5798d23c6509fdb1af2273d7194bacee445c5730bc9fdf76e30de40cef8d71.QName -> QOp
*/

function QVarOp() {this.value=[arguments[0]];};
s.asCons(QVarOp,"QVarOp",0,function (bs) {return new QVarOp(quid2.module.Language.Quid2.Syntax.Hash_8a5798d23c6509fdb1af2273d7194bacee445c5730bc9fdf76e30de40cef8d71.QName$.decode(bs));});

function QConOp() {this.value=[arguments[0]];};
s.asCons(QConOp,"QConOp",1,function (bs) {return new QConOp(quid2.module.Language.Quid2.Syntax.Hash_8a5798d23c6509fdb1af2273d7194bacee445c5730bc9fdf76e30de40cef8d71.QName$.decode(bs));});


var QOp$={value:[]};
s.asType0(QOp$,"QOp$",[QVarOp,QConOp]);



return s.defs("Language.Quid2.Syntax.Hash_918b4a8c916d77fa8c6e21fe70a14dbce2769362973ec4baa8a3acf90c1bebbb",{},{QOp$:QOp$,QVarOp:QVarOp,QConOp:QConOp});
})();

goog.provide('quid2.module.Language.Quid2.Syntax.Hash_e8f70cfc2061550198634d7045d0c8a507c133f409169107ddfd33fb0cf8ad5c');
goog.require('quid2.std');
goog.require('quid2.module.Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1');

quid2.module.Language.Quid2.Syntax.Hash_e8f70cfc2061550198634d7045d0c8a507c133f409169107ddfd33fb0cf8ad5c = (function () {
var s = quid2.std;
/*
data Op  where 
  VarOp :: Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1.Name -> Op
  ConOp :: Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1.Name -> Op
*/

function VarOp() {this.value=[arguments[0]];};
s.asCons(VarOp,"VarOp",0,function (bs) {return new VarOp(quid2.module.Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1.Name$.decode(bs));});

function ConOp() {this.value=[arguments[0]];};
s.asCons(ConOp,"ConOp",1,function (bs) {return new ConOp(quid2.module.Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1.Name$.decode(bs));});


var Op$={value:[]};
s.asType0(Op$,"Op$",[VarOp,ConOp]);



return s.defs("Language.Quid2.Syntax.Hash_e8f70cfc2061550198634d7045d0c8a507c133f409169107ddfd33fb0cf8ad5c",{},{Op$:Op$,VarOp:VarOp,ConOp:ConOp});
})();

goog.provide('quid2.module.Language.Quid2.Syntax.Hash_8ce9bfe954f8f39f7f1da11fd6d5c76f33689a7df71ed99f86a88aff516f70df');
goog.require('quid2.std');
goog.require('quid2.module.Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1');
goog.require('quid2.module.Language.Quid2.Syntax.Hash_32f26e165ed9e4b5728625dce11215a1c3364d1e6cf6aaac4945ce9b5f28867f');

quid2.module.Language.Quid2.Syntax.Hash_8ce9bfe954f8f39f7f1da11fd6d5c76f33689a7df71ed99f86a88aff516f70df = (function () {
var s = quid2.std;
/*
data TyVarBind  where 
  KindedVar :: Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1.Name -> Language.Quid2.Syntax.Hash_32f26e165ed9e4b5728625dce11215a1c3364d1e6cf6aaac4945ce9b5f28867f.Kind -> TyVarBind
  UnkindedVar :: Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1.Name -> TyVarBind
*/

function KindedVar() {this.value=[arguments[0],arguments[1]];};
s.asCons(KindedVar,"KindedVar",0,function (bs) {return new KindedVar(quid2.module.Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1.Name$.decode(bs),quid2.module.Language.Quid2.Syntax.Hash_32f26e165ed9e4b5728625dce11215a1c3364d1e6cf6aaac4945ce9b5f28867f.Kind$.decode(bs));});

function UnkindedVar() {this.value=[arguments[0]];};
s.asCons(UnkindedVar,"UnkindedVar",1,function (bs) {return new UnkindedVar(quid2.module.Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1.Name$.decode(bs));});


var TyVarBind$={value:[]};
s.asType0(TyVarBind$,"TyVarBind$",[KindedVar,UnkindedVar]);



return s.defs("Language.Quid2.Syntax.Hash_8ce9bfe954f8f39f7f1da11fd6d5c76f33689a7df71ed99f86a88aff516f70df",{},{TyVarBind$:TyVarBind$,KindedVar:KindedVar,UnkindedVar:UnkindedVar});
})();

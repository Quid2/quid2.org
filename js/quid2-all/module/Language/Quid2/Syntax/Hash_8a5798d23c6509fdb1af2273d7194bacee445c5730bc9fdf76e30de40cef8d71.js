goog.provide('quid2.module.Language.Quid2.Syntax.Hash_8a5798d23c6509fdb1af2273d7194bacee445c5730bc9fdf76e30de40cef8d71');
goog.require('quid2.std');
goog.require('quid2.module.Language.Quid2.Syntax.Hash_09435cbcf5e20dba95712529257872f53e1767d38638e4d428dfc2630c2557e0');
goog.require('quid2.module.Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1');
goog.require('quid2.module.Language.Quid2.Syntax.Hash_92fe44c07b551e4ff3b4c68da1eaaac15032a0f8d230172958f34a5fbe8e98dd');

quid2.module.Language.Quid2.Syntax.Hash_8a5798d23c6509fdb1af2273d7194bacee445c5730bc9fdf76e30de40cef8d71 = (function () {
var s = quid2.std;
/*
data QName  where 
  Qual :: Language.Quid2.Syntax.Hash_92fe44c07b551e4ff3b4c68da1eaaac15032a0f8d230172958f34a5fbe8e98dd.ModuleName -> Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1.Name -> QName
  UnQual :: Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1.Name -> QName
  Special :: Language.Quid2.Syntax.Hash_09435cbcf5e20dba95712529257872f53e1767d38638e4d428dfc2630c2557e0.SpecialCon -> QName
*/

function Qual() {this.value=[arguments[0],arguments[1]];};
s.asCons(Qual,"Qual",0,function (bs) {return new Qual(quid2.module.Language.Quid2.Syntax.Hash_92fe44c07b551e4ff3b4c68da1eaaac15032a0f8d230172958f34a5fbe8e98dd.ModuleName$.decode(bs),quid2.module.Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1.Name$.decode(bs));});

function UnQual() {this.value=[arguments[0]];};
s.asCons(UnQual,"UnQual",1,function (bs) {return new UnQual(quid2.module.Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1.Name$.decode(bs));});

function Special() {this.value=[arguments[0]];};
s.asCons(Special,"Special",2,function (bs) {return new Special(quid2.module.Language.Quid2.Syntax.Hash_09435cbcf5e20dba95712529257872f53e1767d38638e4d428dfc2630c2557e0.SpecialCon$.decode(bs));});


var QName$={value:[]};
s.asType0(QName$,"QName$",[Qual,UnQual,Special]);



return s.defs("Language.Quid2.Syntax.Hash_8a5798d23c6509fdb1af2273d7194bacee445c5730bc9fdf76e30de40cef8d71",{},{QName$:QName$,Qual:Qual,UnQual:UnQual,Special:Special});
})();

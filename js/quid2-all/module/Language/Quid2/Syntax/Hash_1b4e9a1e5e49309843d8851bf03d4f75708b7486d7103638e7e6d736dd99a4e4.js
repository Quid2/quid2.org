goog.provide('quid2.module.Language.Quid2.Syntax.Hash_1b4e9a1e5e49309843d8851bf03d4f75708b7486d7103638e7e6d736dd99a4e4');
goog.require('quid2.std');
goog.require('quid2.module.Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1');

quid2.module.Language.Quid2.Syntax.Hash_1b4e9a1e5e49309843d8851bf03d4f75708b7486d7103638e7e6d736dd99a4e4 = (function () {
var s = quid2.std;
/*
data CName  where 
  VarName :: Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1.Name -> CName
  ConName :: Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1.Name -> CName
*/

function VarName() {this.value=[arguments[0]];};
s.asCons(VarName,"VarName",0,function (bs) {return new VarName(quid2.module.Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1.Name$.decode(bs));});

function ConName() {this.value=[arguments[0]];};
s.asCons(ConName,"ConName",1,function (bs) {return new ConName(quid2.module.Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1.Name$.decode(bs));});


var CName$={value:[]};
s.asType0(CName$,"CName$",[VarName,ConName]);



return s.defs("Language.Quid2.Syntax.Hash_1b4e9a1e5e49309843d8851bf03d4f75708b7486d7103638e7e6d736dd99a4e4",{},{CName$:CName$,VarName:VarName,ConName:ConName});
})();

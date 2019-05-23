goog.provide('quid2.module.Language.Quid2.Syntax.Hash_464d71a161f35917eede0d87a32b35d2e974c0bcbb208a8db835bc718d89f20b');
goog.require('quid2.std');
goog.require('quid2.module.Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1');

quid2.module.Language.Quid2.Syntax.Hash_464d71a161f35917eede0d87a32b35d2e974c0bcbb208a8db835bc718d89f20b = (function () {
var s = quid2.std;
/*
data FunDep  where 
  FunDep :: [Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1.Name] -> [Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1.Name] -> FunDep
*/

function FunDep() {this.value=[s.list(arguments[0]),s.list(arguments[1])];};
s.asCons(FunDep,"FunDep",0,function (bs) {return new FunDep(new s.List$(quid2.module.Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1.Name$).decode(bs),new s.List$(quid2.module.Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1.Name$).decode(bs));});


var FunDep$={value:[]};
s.asType0(FunDep$,"FunDep$",[FunDep]);



return s.defs("Language.Quid2.Syntax.Hash_464d71a161f35917eede0d87a32b35d2e974c0bcbb208a8db835bc718d89f20b",{},{FunDep$:FunDep$,FunDep:FunDep});
})();

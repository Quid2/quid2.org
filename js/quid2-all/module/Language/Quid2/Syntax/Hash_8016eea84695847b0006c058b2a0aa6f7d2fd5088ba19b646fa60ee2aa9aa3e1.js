goog.provide('quid2.module.Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1');
goog.require('quid2.std');

quid2.module.Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1 = (function () {
var s = quid2.std;
/*
data Name  where 
  Ident :: [Char] -> Name
  Symbol :: [Char] -> Name
*/

function Ident() {this.value=[s.string(arguments[0])];};
s.asCons(Ident,"Ident",0,function (bs) {return new Ident(s.String.decode(bs));});

function Symbol() {this.value=[s.string(arguments[0])];};
s.asCons(Symbol,"Symbol",1,function (bs) {return new Symbol(s.String.decode(bs));});


var Name$={value:[]};
s.asType0(Name$,"Name$",[Ident,Symbol]);



return s.defs("Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1",{},{Name$:Name$,Ident:Ident,Symbol:Symbol});
})();

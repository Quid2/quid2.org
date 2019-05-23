goog.provide('quid2.module.Language.Quid2.Syntax.Hash_32f26e165ed9e4b5728625dce11215a1c3364d1e6cf6aaac4945ce9b5f28867f');
goog.require('quid2.std');
goog.require('quid2.module.Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1');

quid2.module.Language.Quid2.Syntax.Hash_32f26e165ed9e4b5728625dce11215a1c3364d1e6cf6aaac4945ce9b5f28867f = (function () {
var s = quid2.std;
/*
data Kind  where 
  KindStar :: Kind
  KindBang :: Kind
  KindFn :: Kind -> Kind -> Kind
  KindParen :: Kind -> Kind
  KindVar :: Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1.Name -> Kind
*/

function KindStar() {this.value=[];};
s.asCons(KindStar,"KindStar",0,function (bs) {return new KindStar();});

function KindBang() {this.value=[];};
s.asCons(KindBang,"KindBang",1,function (bs) {return new KindBang();});

function KindFn() {this.value=[arguments[0],arguments[1]];};
s.asCons(KindFn,"KindFn",2,function (bs) {return new KindFn(Kind$.decode(bs),Kind$.decode(bs));});

function KindParen() {this.value=[arguments[0]];};
s.asCons(KindParen,"KindParen",3,function (bs) {return new KindParen(Kind$.decode(bs));});

function KindVar() {this.value=[arguments[0]];};
s.asCons(KindVar,"KindVar",4,function (bs) {return new KindVar(quid2.module.Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1.Name$.decode(bs));});


var Kind$={value:[]};
s.asType0(Kind$,"Kind$",[KindStar,KindBang,KindFn,KindParen,KindVar]);



return s.defs("Language.Quid2.Syntax.Hash_32f26e165ed9e4b5728625dce11215a1c3364d1e6cf6aaac4945ce9b5f28867f",{},{Kind$:Kind$,KindStar:KindStar,KindBang:KindBang,KindFn:KindFn,KindParen:KindParen,KindVar:KindVar});
})();

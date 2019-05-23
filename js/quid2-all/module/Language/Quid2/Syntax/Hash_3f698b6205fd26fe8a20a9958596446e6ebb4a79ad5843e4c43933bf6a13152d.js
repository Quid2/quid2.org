goog.provide('quid2.module.Language.Quid2.Syntax.Hash_3f698b6205fd26fe8a20a9958596446e6ebb4a79ad5843e4c43933bf6a13152d');
goog.require('quid2.std');
goog.require('quid2.module.Language.Quid2.Syntax.Hash_32f26e165ed9e4b5728625dce11215a1c3364d1e6cf6aaac4945ce9b5f28867f');
goog.require('quid2.module.Language.Quid2.Syntax.Hash_8a5798d23c6509fdb1af2273d7194bacee445c5730bc9fdf76e30de40cef8d71');
goog.require('quid2.module.Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1');
goog.require('quid2.module.Language.Quid2.Syntax.Hash_8ce9bfe954f8f39f7f1da11fd6d5c76f33689a7df71ed99f86a88aff516f70df');
goog.require('quid2.module.Data.Maybe.Hash_fe1a9ed1fe3015c135b766464e0bcb971d1cd2b1aa733a473dd1055ba4b7eb60');

quid2.module.Language.Quid2.Syntax.Hash_3f698b6205fd26fe8a20a9958596446e6ebb4a79ad5843e4c43933bf6a13152d = (function () {
var s = quid2.std;
/*
data Asst  where 
  ClassA :: Language.Quid2.Syntax.Hash_8a5798d23c6509fdb1af2273d7194bacee445c5730bc9fdf76e30de40cef8d71.QName -> [Type] -> Asst
  InfixA :: Type -> Language.Quid2.Syntax.Hash_8a5798d23c6509fdb1af2273d7194bacee445c5730bc9fdf76e30de40cef8d71.QName -> Type -> Asst
  EqualP :: Type -> Type -> Asst
*/

function ClassA() {this.value=[arguments[0],s.list(arguments[1])];};
s.asCons(ClassA,"ClassA",0,function (bs) {return new ClassA(quid2.module.Language.Quid2.Syntax.Hash_8a5798d23c6509fdb1af2273d7194bacee445c5730bc9fdf76e30de40cef8d71.QName$.decode(bs),new s.List$(Type$).decode(bs));});

function InfixA() {this.value=[arguments[0],arguments[1],arguments[2]];};
s.asCons(InfixA,"InfixA",1,function (bs) {return new InfixA(Type$.decode(bs),quid2.module.Language.Quid2.Syntax.Hash_8a5798d23c6509fdb1af2273d7194bacee445c5730bc9fdf76e30de40cef8d71.QName$.decode(bs),Type$.decode(bs));});

function EqualP() {this.value=[arguments[0],arguments[1]];};
s.asCons(EqualP,"EqualP",2,function (bs) {return new EqualP(Type$.decode(bs),Type$.decode(bs));});

/*
data Type  where 
  TyForall :: Data.Maybe.Hash_fe1a9ed1fe3015c135b766464e0bcb971d1cd2b1aa733a473dd1055ba4b7eb60.Maybe [Language.Quid2.Syntax.Hash_8ce9bfe954f8f39f7f1da11fd6d5c76f33689a7df71ed99f86a88aff516f70df.TyVarBind] -> [Asst] -> Type -> Type
  TyFun :: Type -> Type -> Type
  TyTuple :: [Type] -> Type
  TyList :: Type -> Type
  TyApp :: Type -> Type -> Type
  TyVar :: Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1.Name -> Type
  TyCon :: Language.Quid2.Syntax.Hash_8a5798d23c6509fdb1af2273d7194bacee445c5730bc9fdf76e30de40cef8d71.QName -> Type
  TyParen :: Type -> Type
  TyInfix :: Type -> Language.Quid2.Syntax.Hash_8a5798d23c6509fdb1af2273d7194bacee445c5730bc9fdf76e30de40cef8d71.QName -> Type -> Type
  TyKind :: Type -> Language.Quid2.Syntax.Hash_32f26e165ed9e4b5728625dce11215a1c3364d1e6cf6aaac4945ce9b5f28867f.Kind -> Type
*/

function TyForall() {this.value=[arguments[0],s.list(arguments[1]),arguments[2]];};
s.asCons(TyForall,"TyForall",0,function (bs) {return new TyForall(new quid2.module.Data.Maybe.Hash_fe1a9ed1fe3015c135b766464e0bcb971d1cd2b1aa733a473dd1055ba4b7eb60.Maybe$(new s.List$(quid2.module.Language.Quid2.Syntax.Hash_8ce9bfe954f8f39f7f1da11fd6d5c76f33689a7df71ed99f86a88aff516f70df.TyVarBind$)).decode(bs),new s.List$(Asst$).decode(bs),Type$.decode(bs));});

function TyFun() {this.value=[arguments[0],arguments[1]];};
s.asCons(TyFun,"TyFun",1,function (bs) {return new TyFun(Type$.decode(bs),Type$.decode(bs));});

function TyTuple() {this.value=[s.list(arguments[0])];};
s.asCons(TyTuple,"TyTuple",2,function (bs) {return new TyTuple(new s.List$(Type$).decode(bs));});

function TyList() {this.value=[arguments[0]];};
s.asCons(TyList,"TyList",3,function (bs) {return new TyList(Type$.decode(bs));});

function TyApp() {this.value=[arguments[0],arguments[1]];};
s.asCons(TyApp,"TyApp",4,function (bs) {return new TyApp(Type$.decode(bs),Type$.decode(bs));});

function TyVar() {this.value=[arguments[0]];};
s.asCons(TyVar,"TyVar",5,function (bs) {return new TyVar(quid2.module.Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1.Name$.decode(bs));});

function TyCon() {this.value=[arguments[0]];};
s.asCons(TyCon,"TyCon",6,function (bs) {return new TyCon(quid2.module.Language.Quid2.Syntax.Hash_8a5798d23c6509fdb1af2273d7194bacee445c5730bc9fdf76e30de40cef8d71.QName$.decode(bs));});

function TyParen() {this.value=[arguments[0]];};
s.asCons(TyParen,"TyParen",7,function (bs) {return new TyParen(Type$.decode(bs));});

function TyInfix() {this.value=[arguments[0],arguments[1],arguments[2]];};
s.asCons(TyInfix,"TyInfix",8,function (bs) {return new TyInfix(Type$.decode(bs),quid2.module.Language.Quid2.Syntax.Hash_8a5798d23c6509fdb1af2273d7194bacee445c5730bc9fdf76e30de40cef8d71.QName$.decode(bs),Type$.decode(bs));});

function TyKind() {this.value=[arguments[0],arguments[1]];};
s.asCons(TyKind,"TyKind",9,function (bs) {return new TyKind(Type$.decode(bs),quid2.module.Language.Quid2.Syntax.Hash_32f26e165ed9e4b5728625dce11215a1c3364d1e6cf6aaac4945ce9b5f28867f.Kind$.decode(bs));});


var Asst$={value:[]};
s.asType0(Asst$,"Asst$",[ClassA,InfixA,EqualP]);

var Type$={value:[]};
s.asType0(Type$,"Type$",[TyForall,TyFun,TyTuple,TyList,TyApp,TyVar,TyCon,TyParen,TyInfix,TyKind]);



return s.defs("Language.Quid2.Syntax.Hash_3f698b6205fd26fe8a20a9958596446e6ebb4a79ad5843e4c43933bf6a13152d",{},{Asst$:Asst$,Type$:Type$,ClassA:ClassA,InfixA:InfixA,EqualP:EqualP,TyForall:TyForall,TyFun:TyFun,TyTuple:TyTuple,TyList:TyList,TyApp:TyApp,TyVar:TyVar,TyCon:TyCon,TyParen:TyParen,TyInfix:TyInfix,TyKind:TyKind});
})();

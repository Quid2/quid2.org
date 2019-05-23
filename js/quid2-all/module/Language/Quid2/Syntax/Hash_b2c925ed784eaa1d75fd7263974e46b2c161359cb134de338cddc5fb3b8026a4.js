goog.provide('quid2.module.Language.Quid2.Syntax.Hash_b2c925ed784eaa1d75fd7263974e46b2c161359cb134de338cddc5fb3b8026a4');
goog.require('quid2.std');
goog.require('quid2.module.Language.Quid2.Syntax.Hash_1b4e9a1e5e49309843d8851bf03d4f75708b7486d7103638e7e6d736dd99a4e4');
goog.require('quid2.module.Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1');

quid2.module.Language.Quid2.Syntax.Hash_b2c925ed784eaa1d75fd7263974e46b2c161359cb134de338cddc5fb3b8026a4 = (function () {
var s = quid2.std;
/*
data ImportSpec  where 
  IVar :: Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1.Name -> ImportSpec
  IAbs :: Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1.Name -> ImportSpec
  IThingAll :: Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1.Name -> ImportSpec
  IThingWith :: Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1.Name -> [Language.Quid2.Syntax.Hash_1b4e9a1e5e49309843d8851bf03d4f75708b7486d7103638e7e6d736dd99a4e4.CName] -> ImportSpec
*/

function IVar() {this.value=[arguments[0]];};
s.asCons(IVar,"IVar",0,function (bs) {return new IVar(quid2.module.Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1.Name$.decode(bs));});

function IAbs() {this.value=[arguments[0]];};
s.asCons(IAbs,"IAbs",1,function (bs) {return new IAbs(quid2.module.Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1.Name$.decode(bs));});

function IThingAll() {this.value=[arguments[0]];};
s.asCons(IThingAll,"IThingAll",2,function (bs) {return new IThingAll(quid2.module.Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1.Name$.decode(bs));});

function IThingWith() {this.value=[arguments[0],s.list(arguments[1])];};
s.asCons(IThingWith,"IThingWith",3,function (bs) {return new IThingWith(quid2.module.Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1.Name$.decode(bs),new s.List$(quid2.module.Language.Quid2.Syntax.Hash_1b4e9a1e5e49309843d8851bf03d4f75708b7486d7103638e7e6d736dd99a4e4.CName$).decode(bs));});


var ImportSpec$={value:[]};
s.asType0(ImportSpec$,"ImportSpec$",[IVar,IAbs,IThingAll,IThingWith]);



return s.defs("Language.Quid2.Syntax.Hash_b2c925ed784eaa1d75fd7263974e46b2c161359cb134de338cddc5fb3b8026a4",{},{ImportSpec$:ImportSpec$,IVar:IVar,IAbs:IAbs,IThingAll:IThingAll,IThingWith:IThingWith});
})();

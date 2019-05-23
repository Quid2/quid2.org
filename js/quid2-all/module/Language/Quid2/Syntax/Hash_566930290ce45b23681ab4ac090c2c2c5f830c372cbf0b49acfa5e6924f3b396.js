goog.provide('quid2.module.Language.Quid2.Syntax.Hash_566930290ce45b23681ab4ac090c2c2c5f830c372cbf0b49acfa5e6924f3b396');
goog.require('quid2.std');
goog.require('quid2.module.Language.Quid2.Syntax.Hash_92fe44c07b551e4ff3b4c68da1eaaac15032a0f8d230172958f34a5fbe8e98dd');
goog.require('quid2.module.Language.Quid2.Syntax.Hash_1b4e9a1e5e49309843d8851bf03d4f75708b7486d7103638e7e6d736dd99a4e4');
goog.require('quid2.module.Language.Quid2.Syntax.Hash_8a5798d23c6509fdb1af2273d7194bacee445c5730bc9fdf76e30de40cef8d71');

quid2.module.Language.Quid2.Syntax.Hash_566930290ce45b23681ab4ac090c2c2c5f830c372cbf0b49acfa5e6924f3b396 = (function () {
var s = quid2.std;
/*
data ExportSpec  where 
  EVar :: Language.Quid2.Syntax.Hash_8a5798d23c6509fdb1af2273d7194bacee445c5730bc9fdf76e30de40cef8d71.QName -> ExportSpec
  EAbs :: Language.Quid2.Syntax.Hash_8a5798d23c6509fdb1af2273d7194bacee445c5730bc9fdf76e30de40cef8d71.QName -> ExportSpec
  EThingAll :: Language.Quid2.Syntax.Hash_8a5798d23c6509fdb1af2273d7194bacee445c5730bc9fdf76e30de40cef8d71.QName -> ExportSpec
  EThingWith :: Language.Quid2.Syntax.Hash_8a5798d23c6509fdb1af2273d7194bacee445c5730bc9fdf76e30de40cef8d71.QName -> [Language.Quid2.Syntax.Hash_1b4e9a1e5e49309843d8851bf03d4f75708b7486d7103638e7e6d736dd99a4e4.CName] -> ExportSpec
  EModuleContents :: Language.Quid2.Syntax.Hash_92fe44c07b551e4ff3b4c68da1eaaac15032a0f8d230172958f34a5fbe8e98dd.ModuleName -> ExportSpec
*/

function EVar() {this.value=[arguments[0]];};
s.asCons(EVar,"EVar",0,function (bs) {return new EVar(quid2.module.Language.Quid2.Syntax.Hash_8a5798d23c6509fdb1af2273d7194bacee445c5730bc9fdf76e30de40cef8d71.QName$.decode(bs));});

function EAbs() {this.value=[arguments[0]];};
s.asCons(EAbs,"EAbs",1,function (bs) {return new EAbs(quid2.module.Language.Quid2.Syntax.Hash_8a5798d23c6509fdb1af2273d7194bacee445c5730bc9fdf76e30de40cef8d71.QName$.decode(bs));});

function EThingAll() {this.value=[arguments[0]];};
s.asCons(EThingAll,"EThingAll",2,function (bs) {return new EThingAll(quid2.module.Language.Quid2.Syntax.Hash_8a5798d23c6509fdb1af2273d7194bacee445c5730bc9fdf76e30de40cef8d71.QName$.decode(bs));});

function EThingWith() {this.value=[arguments[0],s.list(arguments[1])];};
s.asCons(EThingWith,"EThingWith",3,function (bs) {return new EThingWith(quid2.module.Language.Quid2.Syntax.Hash_8a5798d23c6509fdb1af2273d7194bacee445c5730bc9fdf76e30de40cef8d71.QName$.decode(bs),new s.List$(quid2.module.Language.Quid2.Syntax.Hash_1b4e9a1e5e49309843d8851bf03d4f75708b7486d7103638e7e6d736dd99a4e4.CName$).decode(bs));});

function EModuleContents() {this.value=[arguments[0]];};
s.asCons(EModuleContents,"EModuleContents",4,function (bs) {return new EModuleContents(quid2.module.Language.Quid2.Syntax.Hash_92fe44c07b551e4ff3b4c68da1eaaac15032a0f8d230172958f34a5fbe8e98dd.ModuleName$.decode(bs));});


var ExportSpec$={value:[]};
s.asType0(ExportSpec$,"ExportSpec$",[EVar,EAbs,EThingAll,EThingWith,EModuleContents]);



return s.defs("Language.Quid2.Syntax.Hash_566930290ce45b23681ab4ac090c2c2c5f830c372cbf0b49acfa5e6924f3b396",{},{ExportSpec$:ExportSpec$,EVar:EVar,EAbs:EAbs,EThingAll:EThingAll,EThingWith:EThingWith,EModuleContents:EModuleContents});
})();

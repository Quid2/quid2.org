goog.provide('quid2.module.Language.Quid2.Syntax.Hash_070c9e2c445eaeb80d9d900d843326c0d2f5ea0809c0bee64c2d053f6d41a3a4');
goog.require('quid2.std');

quid2.module.Language.Quid2.Syntax.Hash_070c9e2c445eaeb80d9d900d843326c0d2f5ea0809c0bee64c2d053f6d41a3a4 = (function () {
var s = quid2.std;
/*
data DataOrNew  where 
  DataType :: DataOrNew
  NewType :: DataOrNew
*/

function DataType() {this.value=[];};
s.asCons(DataType,"DataType",0,function (bs) {return new DataType();});

function NewType() {this.value=[];};
s.asCons(NewType,"NewType",1,function (bs) {return new NewType();});


var DataOrNew$={value:[]};
s.asType0(DataOrNew$,"DataOrNew$",[DataType,NewType]);



return s.defs("Language.Quid2.Syntax.Hash_070c9e2c445eaeb80d9d900d843326c0d2f5ea0809c0bee64c2d053f6d41a3a4",{},{DataOrNew$:DataOrNew$,DataType:DataType,NewType:NewType});
})();

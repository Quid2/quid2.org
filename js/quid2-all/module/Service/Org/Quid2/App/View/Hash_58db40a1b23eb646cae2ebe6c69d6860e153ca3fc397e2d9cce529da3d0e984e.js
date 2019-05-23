goog.provide('quid2.module.Service.Org.Quid2.App.View.Hash_58db40a1b23eb646cae2ebe6c69d6860e153ca3fc397e2d9cce529da3d0e984e');
goog.require('quid2.std');

quid2.module.Service.Org.Quid2.App.View.Hash_58db40a1b23eb646cae2ebe6c69d6860e153ca3fc397e2d9cce529da3d0e984e = (function () {
var s = quid2.std;
/*
data JSFunction  where 
  JSPrim :: [Char] -> JSFunction
  JSCode :: [Char] -> JSFunction
*/

function JSPrim() {this.value=[s.string(arguments[0])];};
s.asCons(JSPrim,"JSPrim",0,function (bs) {return new JSPrim(s.String.decode(bs));});

function JSCode() {this.value=[s.string(arguments[0])];};
s.asCons(JSCode,"JSCode",1,function (bs) {return new JSCode(s.String.decode(bs));});


var JSFunction$={value:[]};
s.asType0(JSFunction$,"JSFunction$",[JSPrim,JSCode]);



return s.defs("Service.Org.Quid2.App.View.Hash_58db40a1b23eb646cae2ebe6c69d6860e153ca3fc397e2d9cce529da3d0e984e",{},{JSFunction$:JSFunction$,JSPrim:JSPrim,JSCode:JSCode});
})();

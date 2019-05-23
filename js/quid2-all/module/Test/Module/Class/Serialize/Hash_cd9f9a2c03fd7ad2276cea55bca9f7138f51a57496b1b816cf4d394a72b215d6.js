goog.provide('quid2.module.Test.Module.Class.Serialize.Hash_cd9f9a2c03fd7ad2276cea55bca9f7138f51a57496b1b816cf4d394a72b215d6');
goog.require('quid2.std');

quid2.module.Test.Module.Class.Serialize.Hash_cd9f9a2c03fd7ad2276cea55bca9f7138f51a57496b1b816cf4d394a72b215d6 = (function () {
var s = quid2.std;
/*
data O  where 
  L :: O
  E :: O
  G :: O
*/

function L() {this.value=[];};
s.asCons(L,"L",0,function (bs) {return new L();});

function E() {this.value=[];};
s.asCons(E,"E",1,function (bs) {return new E();});

function G() {this.value=[];};
s.asCons(G,"G",2,function (bs) {return new G();});


var O$={value:[]};
s.asType0(O$,"O$",[L,E,G]);



return s.defs("Test.Module.Class.Serialize.Hash_cd9f9a2c03fd7ad2276cea55bca9f7138f51a57496b1b816cf4d394a72b215d6",{},{O$:O$,L:L,E:E,G:G});
})();

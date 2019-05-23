goog.provide('quid2.module.Service.Org.Quid2.App.Hash_b9fa98b57961f18f02c9b9f5de33561a9d9abe99adef72656880af693fc8961f');
goog.require('quid2.std');

quid2.module.Service.Org.Quid2.App.Hash_b9fa98b57961f18f02c9b9f5de33561a9d9abe99adef72656880af693fc8961f = (function () {
var s = quid2.std;
/*
data TestV  where 
  TestV :: [Char] -> TestV
*/

function TestV() {this.value=[s.string(arguments[0])];};
s.asCons(TestV,"TestV",0,function (bs) {return new TestV(s.String.decode(bs));});


var TestV$={value:[]};
s.asType0(TestV$,"TestV$",[TestV]);



return s.defs("Service.Org.Quid2.App.Hash_b9fa98b57961f18f02c9b9f5de33561a9d9abe99adef72656880af693fc8961f",{},{TestV$:TestV$,TestV:TestV});
})();

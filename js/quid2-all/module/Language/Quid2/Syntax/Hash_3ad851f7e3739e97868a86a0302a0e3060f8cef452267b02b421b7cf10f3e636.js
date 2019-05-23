goog.provide('quid2.module.Language.Quid2.Syntax.Hash_3ad851f7e3739e97868a86a0302a0e3060f8cef452267b02b421b7cf10f3e636');
goog.require('quid2.std');

quid2.module.Language.Quid2.Syntax.Hash_3ad851f7e3739e97868a86a0302a0e3060f8cef452267b02b421b7cf10f3e636 = (function () {
var s = quid2.std;
/*
data CallConv  where 
  StrictCall :: CallConv
  LazyCall :: CallConv
*/

function StrictCall() {this.value=[];};
s.asCons(StrictCall,"StrictCall",0,function (bs) {return new StrictCall();});

function LazyCall() {this.value=[];};
s.asCons(LazyCall,"LazyCall",1,function (bs) {return new LazyCall();});


var CallConv$={value:[]};
s.asType0(CallConv$,"CallConv$",[StrictCall,LazyCall]);



return s.defs("Language.Quid2.Syntax.Hash_3ad851f7e3739e97868a86a0302a0e3060f8cef452267b02b421b7cf10f3e636",{},{CallConv$:CallConv$,StrictCall:StrictCall,LazyCall:LazyCall});
})();

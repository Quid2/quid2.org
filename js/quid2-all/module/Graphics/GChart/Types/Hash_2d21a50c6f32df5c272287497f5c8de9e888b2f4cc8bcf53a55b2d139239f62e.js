goog.provide('quid2.module.Graphics.GChart.Types.Hash_2d21a50c6f32df5c272287497f5c8de9e888b2f4cc8bcf53a55b2d139239f62e');
goog.require('quid2.std');

quid2.module.Graphics.GChart.Types.Hash_2d21a50c6f32df5c272287497f5c8de9e888b2f4cc8bcf53a55b2d139239f62e = (function () {
var s = quid2.std;
/*
data ErrorCorrectionLevel  where 
  L' :: ErrorCorrectionLevel
  M' :: ErrorCorrectionLevel
  Q' :: ErrorCorrectionLevel
  H' :: ErrorCorrectionLevel
*/

function L'() {this.value=[];};
s.asCons(L',"L'",0,function (bs) {return new L'();});

function M'() {this.value=[];};
s.asCons(M',"M'",1,function (bs) {return new M'();});

function Q'() {this.value=[];};
s.asCons(Q',"Q'",2,function (bs) {return new Q'();});

function H'() {this.value=[];};
s.asCons(H',"H'",3,function (bs) {return new H'();});


var ErrorCorrectionLevel$={value:[]};
s.asType0(ErrorCorrectionLevel$,"ErrorCorrectionLevel$",[L',M',Q',H']);



return s.defs("Graphics.GChart.Types.Hash_2d21a50c6f32df5c272287497f5c8de9e888b2f4cc8bcf53a55b2d139239f62e",{},{ErrorCorrectionLevel$:ErrorCorrectionLevel$,L':L',M':M',Q':Q',H':H'});
})();

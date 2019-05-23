goog.provide('quid2.module.Graphics.GChart.Types.Hash_ace2f0bfbfceda7a2119917228361698d42fdacfde2d2c8fb2f878a094a53e24');
goog.require('quid2.std');

quid2.module.Graphics.GChart.Types.Hash_ace2f0bfbfceda7a2119917228361698d42fdacfde2d2c8fb2f878a094a53e24 = (function () {
var s = quid2.std;
/*
data QREncoding  where 
  UTF8 :: QREncoding
  Shift_JIS :: QREncoding
  ISO8859_1 :: QREncoding
*/

function UTF8() {this.value=[];};
s.asCons(UTF8,"UTF8",0,function (bs) {return new UTF8();});

function Shift_JIS() {this.value=[];};
s.asCons(Shift_JIS,"Shift_JIS",1,function (bs) {return new Shift_JIS();});

function ISO8859_1() {this.value=[];};
s.asCons(ISO8859_1,"ISO8859_1",2,function (bs) {return new ISO8859_1();});


var QREncoding$={value:[]};
s.asType0(QREncoding$,"QREncoding$",[UTF8,Shift_JIS,ISO8859_1]);



return s.defs("Graphics.GChart.Types.Hash_ace2f0bfbfceda7a2119917228361698d42fdacfde2d2c8fb2f878a094a53e24",{},{QREncoding$:QREncoding$,UTF8:UTF8,Shift_JIS:Shift_JIS,ISO8859_1:ISO8859_1});
})();

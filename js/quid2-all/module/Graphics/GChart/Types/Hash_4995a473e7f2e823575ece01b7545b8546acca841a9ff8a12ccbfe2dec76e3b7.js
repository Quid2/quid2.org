goog.provide('quid2.module.Graphics.GChart.Types.Hash_4995a473e7f2e823575ece01b7545b8546acca841a9ff8a12ccbfe2dec76e3b7');
goog.require('quid2.std');

quid2.module.Graphics.GChart.Types.Hash_4995a473e7f2e823575ece01b7545b8546acca841a9ff8a12ccbfe2dec76e3b7 = (function () {
var s = quid2.std;
/*
data RangeMarkerType  where 
  RangeMarkerHorizontal :: RangeMarkerType
  RangeMarkerVertical :: RangeMarkerType
*/

function RangeMarkerHorizontal() {this.value=[];};
s.asCons(RangeMarkerHorizontal,"RangeMarkerHorizontal",0,function (bs) {return new RangeMarkerHorizontal();});

function RangeMarkerVertical() {this.value=[];};
s.asCons(RangeMarkerVertical,"RangeMarkerVertical",1,function (bs) {return new RangeMarkerVertical();});


var RangeMarkerType$={value:[]};
s.asType0(RangeMarkerType$,"RangeMarkerType$",[RangeMarkerHorizontal,RangeMarkerVertical]);



return s.defs("Graphics.GChart.Types.Hash_4995a473e7f2e823575ece01b7545b8546acca841a9ff8a12ccbfe2dec76e3b7",{},{RangeMarkerType$:RangeMarkerType$,RangeMarkerHorizontal:RangeMarkerHorizontal,RangeMarkerVertical:RangeMarkerVertical});
})();

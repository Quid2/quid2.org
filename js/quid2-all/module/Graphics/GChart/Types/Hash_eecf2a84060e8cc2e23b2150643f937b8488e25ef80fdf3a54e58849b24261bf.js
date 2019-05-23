goog.provide('quid2.module.Graphics.GChart.Types.Hash_eecf2a84060e8cc2e23b2150643f937b8488e25ef80fdf3a54e58849b24261bf');
goog.require('quid2.std');

quid2.module.Graphics.GChart.Types.Hash_eecf2a84060e8cc2e23b2150643f937b8488e25ef80fdf3a54e58849b24261bf = (function () {
var s = quid2.std;
/*
data AxisStyleAlignment  where 
  AxisStyleLeft :: AxisStyleAlignment
  AxisStyleCenter :: AxisStyleAlignment
  AxisStyleRight :: AxisStyleAlignment
*/

function AxisStyleLeft() {this.value=[];};
s.asCons(AxisStyleLeft,"AxisStyleLeft",0,function (bs) {return new AxisStyleLeft();});

function AxisStyleCenter() {this.value=[];};
s.asCons(AxisStyleCenter,"AxisStyleCenter",1,function (bs) {return new AxisStyleCenter();});

function AxisStyleRight() {this.value=[];};
s.asCons(AxisStyleRight,"AxisStyleRight",2,function (bs) {return new AxisStyleRight();});


var AxisStyleAlignment$={value:[]};
s.asType0(AxisStyleAlignment$,"AxisStyleAlignment$",[AxisStyleLeft,AxisStyleCenter,AxisStyleRight]);



return s.defs("Graphics.GChart.Types.Hash_eecf2a84060e8cc2e23b2150643f937b8488e25ef80fdf3a54e58849b24261bf",{},{AxisStyleAlignment$:AxisStyleAlignment$,AxisStyleLeft:AxisStyleLeft,AxisStyleCenter:AxisStyleCenter,AxisStyleRight:AxisStyleRight});
})();

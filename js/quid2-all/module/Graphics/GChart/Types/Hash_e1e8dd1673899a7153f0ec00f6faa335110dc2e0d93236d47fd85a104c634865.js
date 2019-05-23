goog.provide('quid2.module.Graphics.GChart.Types.Hash_e1e8dd1673899a7153f0ec00f6faa335110dc2e0d93236d47fd85a104c634865');
goog.require('quid2.std');

quid2.module.Graphics.GChart.Types.Hash_e1e8dd1673899a7153f0ec00f6faa335110dc2e0d93236d47fd85a104c634865 = (function () {
var s = quid2.std;
/*
data AxisType  where 
  AxisBottom :: AxisType
  AxisTop :: AxisType
  AxisLeft :: AxisType
  AxisRight :: AxisType
*/

function AxisBottom() {this.value=[];};
s.asCons(AxisBottom,"AxisBottom",0,function (bs) {return new AxisBottom();});

function AxisTop() {this.value=[];};
s.asCons(AxisTop,"AxisTop",1,function (bs) {return new AxisTop();});

function AxisLeft() {this.value=[];};
s.asCons(AxisLeft,"AxisLeft",2,function (bs) {return new AxisLeft();});

function AxisRight() {this.value=[];};
s.asCons(AxisRight,"AxisRight",3,function (bs) {return new AxisRight();});


var AxisType$={value:[]};
s.asType0(AxisType$,"AxisType$",[AxisBottom,AxisTop,AxisLeft,AxisRight]);



return s.defs("Graphics.GChart.Types.Hash_e1e8dd1673899a7153f0ec00f6faa335110dc2e0d93236d47fd85a104c634865",{},{AxisType$:AxisType$,AxisBottom:AxisBottom,AxisTop:AxisTop,AxisLeft:AxisLeft,AxisRight:AxisRight});
})();

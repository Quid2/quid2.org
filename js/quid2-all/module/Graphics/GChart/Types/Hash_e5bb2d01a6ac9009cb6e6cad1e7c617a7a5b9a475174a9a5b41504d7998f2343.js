goog.provide('quid2.module.Graphics.GChart.Types.Hash_e5bb2d01a6ac9009cb6e6cad1e7c617a7a5b9a475174a9a5b41504d7998f2343');
goog.require('quid2.std');

quid2.module.Graphics.GChart.Types.Hash_e5bb2d01a6ac9009cb6e6cad1e7c617a7a5b9a475174a9a5b41504d7998f2343 = (function () {
var s = quid2.std;
/*
data DrawingControl  where 
  DrawLines :: DrawingControl
  DrawTicks :: DrawingControl
  DrawLinesTicks :: DrawingControl
*/

function DrawLines() {this.value=[];};
s.asCons(DrawLines,"DrawLines",0,function (bs) {return new DrawLines();});

function DrawTicks() {this.value=[];};
s.asCons(DrawTicks,"DrawTicks",1,function (bs) {return new DrawTicks();});

function DrawLinesTicks() {this.value=[];};
s.asCons(DrawLinesTicks,"DrawLinesTicks",2,function (bs) {return new DrawLinesTicks();});


var DrawingControl$={value:[]};
s.asType0(DrawingControl$,"DrawingControl$",[DrawLines,DrawTicks,DrawLinesTicks]);



return s.defs("Graphics.GChart.Types.Hash_e5bb2d01a6ac9009cb6e6cad1e7c617a7a5b9a475174a9a5b41504d7998f2343",{},{DrawingControl$:DrawingControl$,DrawLines:DrawLines,DrawTicks:DrawTicks,DrawLinesTicks:DrawLinesTicks});
})();

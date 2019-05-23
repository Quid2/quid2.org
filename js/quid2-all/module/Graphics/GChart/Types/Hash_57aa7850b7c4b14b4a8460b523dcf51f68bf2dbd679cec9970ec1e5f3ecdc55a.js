goog.provide('quid2.module.Graphics.GChart.Types.Hash_57aa7850b7c4b14b4a8460b523dcf51f68bf2dbd679cec9970ec1e5f3ecdc55a');
goog.require('quid2.std');

quid2.module.Graphics.GChart.Types.Hash_57aa7850b7c4b14b4a8460b523dcf51f68bf2dbd679cec9970ec1e5f3ecdc55a = (function () {
var s = quid2.std;
/*
data ChartLabels  where 
  ChartLabels :: [[Char]] -> ChartLabels
*/

function ChartLabels() {this.value=[s.list(arguments[0])];};
s.asCons(ChartLabels,"ChartLabels",0,function (bs) {return new ChartLabels(new s.List$(s.String).decode(bs));});


var ChartLabels$={value:[]};
s.asType0(ChartLabels$,"ChartLabels$",[ChartLabels]);



return s.defs("Graphics.GChart.Types.Hash_57aa7850b7c4b14b4a8460b523dcf51f68bf2dbd679cec9970ec1e5f3ecdc55a",{},{ChartLabels$:ChartLabels$,ChartLabels:ChartLabels});
})();

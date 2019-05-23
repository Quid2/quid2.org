goog.provide('quid2.module.Graphics.GChart.Types.Hash_4d9f0630f465315ae7dd2201591a2e6c18649a6a87b2f1893aef3a9e3bacb18c');
goog.require('quid2.std');

quid2.module.Graphics.GChart.Types.Hash_4d9f0630f465315ae7dd2201591a2e6c18649a6a87b2f1893aef3a9e3bacb18c = (function () {
var s = quid2.std;
/*
data ChartColors  where 
  ChartColors :: [[Char]] -> ChartColors
*/

function ChartColors() {this.value=[s.list(arguments[0])];};
s.asCons(ChartColors,"ChartColors",0,function (bs) {return new ChartColors(new s.List$(s.String).decode(bs));});


var ChartColors$={value:[]};
s.asType0(ChartColors$,"ChartColors$",[ChartColors]);



return s.defs("Graphics.GChart.Types.Hash_4d9f0630f465315ae7dd2201591a2e6c18649a6a87b2f1893aef3a9e3bacb18c",{},{ChartColors$:ChartColors$,ChartColors:ChartColors});
})();

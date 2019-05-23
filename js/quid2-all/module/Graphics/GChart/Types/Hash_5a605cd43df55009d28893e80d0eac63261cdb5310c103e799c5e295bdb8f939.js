goog.provide('quid2.module.Graphics.GChart.Types.Hash_5a605cd43df55009d28893e80d0eac63261cdb5310c103e799c5e295bdb8f939');
goog.require('quid2.std');

quid2.module.Graphics.GChart.Types.Hash_5a605cd43df55009d28893e80d0eac63261cdb5310c103e799c5e295bdb8f939 = (function () {
var s = quid2.std;
/*
data PieChartOrientation  where 
  PCO :: Float -> PieChartOrientation
*/

function PCO() {this.value=[s.float(arguments[0])];};
s.asCons(PCO,"PCO",0,function (bs) {return new PCO(s.Float.decode(bs));});


var PieChartOrientation$={value:[]};
s.asType0(PieChartOrientation$,"PieChartOrientation$",[PCO]);



return s.defs("Graphics.GChart.Types.Hash_5a605cd43df55009d28893e80d0eac63261cdb5310c103e799c5e295bdb8f939",{},{PieChartOrientation$:PieChartOrientation$,PCO:PCO});
})();

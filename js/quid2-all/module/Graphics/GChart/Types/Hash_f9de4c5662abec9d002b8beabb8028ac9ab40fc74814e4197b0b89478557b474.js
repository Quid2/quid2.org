goog.provide('quid2.module.Graphics.GChart.Types.Hash_f9de4c5662abec9d002b8beabb8028ac9ab40fc74814e4197b0b89478557b474');
goog.require('quid2.std');
goog.require('quid2.module.Graphics.GChart.Types.Hash_a14c94bdc3053c05dcf70a8827b93e8d6b8a9d70be71311ac40dfcf7520caf37');
goog.require('quid2.module.Data.Maybe.Hash_fe1a9ed1fe3015c135b766464e0bcb971d1cd2b1aa733a473dd1055ba4b7eb60');

quid2.module.Graphics.GChart.Types.Hash_f9de4c5662abec9d002b8beabb8028ac9ab40fc74814e4197b0b89478557b474 = (function () {
var s = quid2.std;
/*
data ChartLegend  where 
  Legend :: [[Char]] -> Data.Maybe.Hash_fe1a9ed1fe3015c135b766464e0bcb971d1cd2b1aa733a473dd1055ba4b7eb60.Maybe Graphics.GChart.Types.Hash_a14c94bdc3053c05dcf70a8827b93e8d6b8a9d70be71311ac40dfcf7520caf37.LegendPosition -> ChartLegend
*/

function Legend() {this.value=[s.list(arguments[0]),arguments[1]];};
s.asCons(Legend,"Legend",0,function (bs) {return new Legend(new s.List$(s.String).decode(bs),new quid2.module.Data.Maybe.Hash_fe1a9ed1fe3015c135b766464e0bcb971d1cd2b1aa733a473dd1055ba4b7eb60.Maybe$(quid2.module.Graphics.GChart.Types.Hash_a14c94bdc3053c05dcf70a8827b93e8d6b8a9d70be71311ac40dfcf7520caf37.LegendPosition$).decode(bs));});


var ChartLegend$={value:[]};
s.asType0(ChartLegend$,"ChartLegend$",[Legend]);



return s.defs("Graphics.GChart.Types.Hash_f9de4c5662abec9d002b8beabb8028ac9ab40fc74814e4197b0b89478557b474",{},{ChartLegend$:ChartLegend$,Legend:Legend});
})();

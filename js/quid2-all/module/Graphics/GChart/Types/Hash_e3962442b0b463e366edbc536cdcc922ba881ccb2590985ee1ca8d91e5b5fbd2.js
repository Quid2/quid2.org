goog.provide('quid2.module.Graphics.GChart.Types.Hash_e3962442b0b463e366edbc536cdcc922ba881ccb2590985ee1ca8d91e5b5fbd2');
goog.require('quid2.std');
goog.require('quid2.module.Graphics.GChart.Types.Hash_2d21a50c6f32df5c272287497f5c8de9e888b2f4cc8bcf53a55b2d139239f62e');

quid2.module.Graphics.GChart.Types.Hash_e3962442b0b463e366edbc536cdcc922ba881ccb2590985ee1ca8d91e5b5fbd2 = (function () {
var s = quid2.std;
/*
data ChartLabelData  where 
  QRLabelData :: Graphics.GChart.Types.Hash_2d21a50c6f32df5c272287497f5c8de9e888b2f4cc8bcf53a55b2d139239f62e.ErrorCorrectionLevel -> Int64 -> ChartLabelData
*/

function QRLabelData() {this.value=[arguments[0],s.int64(arguments[1])];};
s.asCons(QRLabelData,"QRLabelData",0,function (bs) {return new QRLabelData(quid2.module.Graphics.GChart.Types.Hash_2d21a50c6f32df5c272287497f5c8de9e888b2f4cc8bcf53a55b2d139239f62e.ErrorCorrectionLevel$.decode(bs),s.Int64.decode(bs));});


var ChartLabelData$={value:[]};
s.asType0(ChartLabelData$,"ChartLabelData$",[QRLabelData]);



return s.defs("Graphics.GChart.Types.Hash_e3962442b0b463e366edbc536cdcc922ba881ccb2590985ee1ca8d91e5b5fbd2",{},{ChartLabelData$:ChartLabelData$,QRLabelData:QRLabelData});
})();

goog.provide('quid2.module.Graphics.GChart.Types.Hash_15fbcd4047c9311ec7601fd704598ef72c5e9d79e175fd897e20d3082dcd4d19');
goog.require('quid2.std');
goog.require('quid2.module.Graphics.GChart.Types.Hash_dfdb50a4c47dfbb54f212eefaa992a2f26319a05be227dc91387eaab4bee09b5');
goog.require('quid2.module.Graphics.GChart.Types.Hash_f33298137724307289e7edc835155048928c4873a4ffa0ce047df9c67b7730ec');

quid2.module.Graphics.GChart.Types.Hash_15fbcd4047c9311ec7601fd704598ef72c5e9d79e175fd897e20d3082dcd4d19 = (function () {
var s = quid2.std;
/*
data Fill  where 
  Fill :: Graphics.GChart.Types.Hash_f33298137724307289e7edc835155048928c4873a4ffa0ce047df9c67b7730ec.FillKind -> Graphics.GChart.Types.Hash_dfdb50a4c47dfbb54f212eefaa992a2f26319a05be227dc91387eaab4bee09b5.FillType -> Fill
*/

function Fill() {this.value=[arguments[0],arguments[1]];};
s.asCons(Fill,"Fill",0,function (bs) {return new Fill(quid2.module.Graphics.GChart.Types.Hash_f33298137724307289e7edc835155048928c4873a4ffa0ce047df9c67b7730ec.FillKind$.decode(bs),quid2.module.Graphics.GChart.Types.Hash_dfdb50a4c47dfbb54f212eefaa992a2f26319a05be227dc91387eaab4bee09b5.FillType$.decode(bs));});


var Fill$={value:[]};
s.asType0(Fill$,"Fill$",[Fill]);



return s.defs("Graphics.GChart.Types.Hash_15fbcd4047c9311ec7601fd704598ef72c5e9d79e175fd897e20d3082dcd4d19",{},{Fill$:Fill$,Fill:Fill});
})();

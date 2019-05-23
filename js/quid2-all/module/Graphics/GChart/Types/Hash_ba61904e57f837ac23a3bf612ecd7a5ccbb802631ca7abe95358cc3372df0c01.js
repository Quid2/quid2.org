goog.provide('quid2.module.Graphics.GChart.Types.Hash_ba61904e57f837ac23a3bf612ecd7a5ccbb802631ca7abe95358cc3372df0c01');
goog.require('quid2.std');

quid2.module.Graphics.GChart.Types.Hash_ba61904e57f837ac23a3bf612ecd7a5ccbb802631ca7abe95358cc3372df0c01 = (function () {
var s = quid2.std;
/*
data BarWidth  where 
  Automatic :: BarWidth
  BarWidth :: Int64 -> BarWidth
*/

function Automatic() {this.value=[];};
s.asCons(Automatic,"Automatic",0,function (bs) {return new Automatic();});

function BarWidth() {this.value=[s.int64(arguments[0])];};
s.asCons(BarWidth,"BarWidth",1,function (bs) {return new BarWidth(s.Int64.decode(bs));});


var BarWidth$={value:[]};
s.asType0(BarWidth$,"BarWidth$",[Automatic,BarWidth]);



return s.defs("Graphics.GChart.Types.Hash_ba61904e57f837ac23a3bf612ecd7a5ccbb802631ca7abe95358cc3372df0c01",{},{BarWidth$:BarWidth$,Automatic:Automatic,BarWidth:BarWidth});
})();

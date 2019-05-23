goog.provide('quid2.module.Graphics.GChart.Types.Hash_4fec107b2d7e7ea996cbc5fea50cd01b3cae47a9b0345a306c46e23d442ff636');
goog.require('quid2.std');

quid2.module.Graphics.GChart.Types.Hash_4fec107b2d7e7ea996cbc5fea50cd01b3cae47a9b0345a306c46e23d442ff636 = (function () {
var s = quid2.std;
/*
data ChartSize  where 
  Size :: Int64 -> Int64 -> ChartSize
*/

function Size() {this.value=[s.int64(arguments[0]),s.int64(arguments[1])];};
s.asCons(Size,"Size",0,function (bs) {return new Size(s.Int64.decode(bs),s.Int64.decode(bs));});


var ChartSize$={value:[]};
s.asType0(ChartSize$,"ChartSize$",[Size]);



return s.defs("Graphics.GChart.Types.Hash_4fec107b2d7e7ea996cbc5fea50cd01b3cae47a9b0345a306c46e23d442ff636",{},{ChartSize$:ChartSize$,Size:Size});
})();

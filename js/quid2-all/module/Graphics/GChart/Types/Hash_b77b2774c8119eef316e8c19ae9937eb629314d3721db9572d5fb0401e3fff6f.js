goog.provide('quid2.module.Graphics.GChart.Types.Hash_b77b2774c8119eef316e8c19ae9937eb629314d3721db9572d5fb0401e3fff6f');
goog.require('quid2.std');

quid2.module.Graphics.GChart.Types.Hash_b77b2774c8119eef316e8c19ae9937eb629314d3721db9572d5fb0401e3fff6f = (function () {
var s = quid2.std;
/*
data ChartData  where 
  Simple :: [[Int64]] -> ChartData
  Text :: [[Float]] -> ChartData
  Extended :: [[Int64]] -> ChartData
*/

function Simple() {this.value=[s.list(arguments[0])];};
s.asCons(Simple,"Simple",0,function (bs) {return new Simple(new s.List$(new s.List$(s.Int64)).decode(bs));});

function Text() {this.value=[s.list(arguments[0])];};
s.asCons(Text,"Text",1,function (bs) {return new Text(new s.List$(new s.List$(s.Float)).decode(bs));});

function Extended() {this.value=[s.list(arguments[0])];};
s.asCons(Extended,"Extended",2,function (bs) {return new Extended(new s.List$(new s.List$(s.Int64)).decode(bs));});


var ChartData$={value:[]};
s.asType0(ChartData$,"ChartData$",[Simple,Text,Extended]);



return s.defs("Graphics.GChart.Types.Hash_b77b2774c8119eef316e8c19ae9937eb629314d3721db9572d5fb0401e3fff6f",{},{ChartData$:ChartData$,Simple:Simple,Text:Text,Extended:Extended});
})();

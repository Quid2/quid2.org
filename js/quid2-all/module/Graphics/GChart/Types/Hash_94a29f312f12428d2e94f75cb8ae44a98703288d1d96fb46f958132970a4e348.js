goog.provide('quid2.module.Graphics.GChart.Types.Hash_94a29f312f12428d2e94f75cb8ae44a98703288d1d96fb46f958132970a4e348');
goog.require('quid2.std');

quid2.module.Graphics.GChart.Types.Hash_94a29f312f12428d2e94f75cb8ae44a98703288d1d96fb46f958132970a4e348 = (function () {
var s = quid2.std;
/*
data BarGroupSpacing  where 
  Fixed :: (Int64,Int64) -> BarGroupSpacing
  Relative :: (Float,Float) -> BarGroupSpacing
*/

function Fixed() {this.value=[s.tuple(arguments[0])];};
s.asCons(Fixed,"Fixed",0,function (bs) {return new Fixed(new s.Tuple$(s.Int64,s.Int64).decode(bs));});

function Relative() {this.value=[s.tuple(arguments[0])];};
s.asCons(Relative,"Relative",1,function (bs) {return new Relative(new s.Tuple$(s.Float,s.Float).decode(bs));});


var BarGroupSpacing$={value:[]};
s.asType0(BarGroupSpacing$,"BarGroupSpacing$",[Fixed,Relative]);



return s.defs("Graphics.GChart.Types.Hash_94a29f312f12428d2e94f75cb8ae44a98703288d1d96fb46f958132970a4e348",{},{BarGroupSpacing$:BarGroupSpacing$,Fixed:Fixed,Relative:Relative});
})();

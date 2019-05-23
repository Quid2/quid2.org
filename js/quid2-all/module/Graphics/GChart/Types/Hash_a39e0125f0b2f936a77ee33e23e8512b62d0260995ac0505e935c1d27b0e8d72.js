goog.provide('quid2.module.Graphics.GChart.Types.Hash_a39e0125f0b2f936a77ee33e23e8512b62d0260995ac0505e935c1d27b0e8d72');
goog.require('quid2.std');

quid2.module.Graphics.GChart.Types.Hash_a39e0125f0b2f936a77ee33e23e8512b62d0260995ac0505e935c1d27b0e8d72 = (function () {
var s = quid2.std;
/*
data MarkerDataPoint  where 
  DataPoint :: Float -> MarkerDataPoint
  DataPointEvery :: MarkerDataPoint
  DataPointEveryN :: Int64 -> MarkerDataPoint
  DataPointEveryNRange :: (Int64,Int64) -> Int64 -> MarkerDataPoint
  DataPointXY :: (Float,Float) -> MarkerDataPoint
*/

function DataPoint() {this.value=[s.float(arguments[0])];};
s.asCons(DataPoint,"DataPoint",0,function (bs) {return new DataPoint(s.Float.decode(bs));});

function DataPointEvery() {this.value=[];};
s.asCons(DataPointEvery,"DataPointEvery",1,function (bs) {return new DataPointEvery();});

function DataPointEveryN() {this.value=[s.int64(arguments[0])];};
s.asCons(DataPointEveryN,"DataPointEveryN",2,function (bs) {return new DataPointEveryN(s.Int64.decode(bs));});

function DataPointEveryNRange() {this.value=[s.tuple(arguments[0]),s.int64(arguments[1])];};
s.asCons(DataPointEveryNRange,"DataPointEveryNRange",3,function (bs) {return new DataPointEveryNRange(new s.Tuple$(s.Int64,s.Int64).decode(bs),s.Int64.decode(bs));});

function DataPointXY() {this.value=[s.tuple(arguments[0])];};
s.asCons(DataPointXY,"DataPointXY",4,function (bs) {return new DataPointXY(new s.Tuple$(s.Float,s.Float).decode(bs));});


var MarkerDataPoint$={value:[]};
s.asType0(MarkerDataPoint$,"MarkerDataPoint$",[DataPoint,DataPointEvery,DataPointEveryN,DataPointEveryNRange,DataPointXY]);



return s.defs("Graphics.GChart.Types.Hash_a39e0125f0b2f936a77ee33e23e8512b62d0260995ac0505e935c1d27b0e8d72",{},{MarkerDataPoint$:MarkerDataPoint$,DataPoint:DataPoint,DataPointEvery:DataPointEvery,DataPointEveryN:DataPointEveryN,DataPointEveryNRange:DataPointEveryNRange,DataPointXY:DataPointXY});
})();

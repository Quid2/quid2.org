goog.provide('quid2.module.Graphics.GChart.Types.Hash_a14c94bdc3053c05dcf70a8827b93e8d6b8a9d70be71311ac40dfcf7520caf37');
goog.require('quid2.std');

quid2.module.Graphics.GChart.Types.Hash_a14c94bdc3053c05dcf70a8827b93e8d6b8a9d70be71311ac40dfcf7520caf37 = (function () {
var s = quid2.std;
/*
data LegendPosition  where 
  LegendBottom :: LegendPosition
  LegendTop :: LegendPosition
  LegendVBottom :: LegendPosition
  LegendVTop :: LegendPosition
  LegendRight :: LegendPosition
  LegendLeft :: LegendPosition
*/

function LegendBottom() {this.value=[];};
s.asCons(LegendBottom,"LegendBottom",0,function (bs) {return new LegendBottom();});

function LegendTop() {this.value=[];};
s.asCons(LegendTop,"LegendTop",1,function (bs) {return new LegendTop();});

function LegendVBottom() {this.value=[];};
s.asCons(LegendVBottom,"LegendVBottom",2,function (bs) {return new LegendVBottom();});

function LegendVTop() {this.value=[];};
s.asCons(LegendVTop,"LegendVTop",3,function (bs) {return new LegendVTop();});

function LegendRight() {this.value=[];};
s.asCons(LegendRight,"LegendRight",4,function (bs) {return new LegendRight();});

function LegendLeft() {this.value=[];};
s.asCons(LegendLeft,"LegendLeft",5,function (bs) {return new LegendLeft();});


var LegendPosition$={value:[]};
s.asType0(LegendPosition$,"LegendPosition$",[LegendBottom,LegendTop,LegendVBottom,LegendVTop,LegendRight,LegendLeft]);



return s.defs("Graphics.GChart.Types.Hash_a14c94bdc3053c05dcf70a8827b93e8d6b8a9d70be71311ac40dfcf7520caf37",{},{LegendPosition$:LegendPosition$,LegendBottom:LegendBottom,LegendTop:LegendTop,LegendVBottom:LegendVBottom,LegendVTop:LegendVTop,LegendRight:LegendRight,LegendLeft:LegendLeft});
})();

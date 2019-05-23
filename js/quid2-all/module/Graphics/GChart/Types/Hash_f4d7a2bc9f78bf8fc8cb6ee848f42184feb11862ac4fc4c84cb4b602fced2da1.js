goog.provide('quid2.module.Graphics.GChart.Types.Hash_f4d7a2bc9f78bf8fc8cb6ee848f42184feb11862ac4fc4c84cb4b602fced2da1');
goog.require('quid2.std');

quid2.module.Graphics.GChart.Types.Hash_f4d7a2bc9f78bf8fc8cb6ee848f42184feb11862ac4fc4c84cb4b602fced2da1 = (function () {
var s = quid2.std;
/*
data ChartType  where 
  Line :: ChartType
  Sparklines :: ChartType
  LineXY :: ChartType
  BarHorizontalStacked :: ChartType
  BarVerticalStacked :: ChartType
  BarHorizontalGrouped :: ChartType
  BarVerticalGrouped :: ChartType
  Pie :: ChartType
  Pie3D :: ChartType
  PieConcentric :: ChartType
  Venn :: ChartType
  ScatterPlot :: ChartType
  Radar :: ChartType
  RadarCurvedLines :: ChartType
  GoogleOMeter :: ChartType
  Formula :: ChartType
  QRCode :: ChartType
*/

function Line() {this.value=[];};
s.asCons(Line,"Line",0,function (bs) {return new Line();});

function Sparklines() {this.value=[];};
s.asCons(Sparklines,"Sparklines",1,function (bs) {return new Sparklines();});

function LineXY() {this.value=[];};
s.asCons(LineXY,"LineXY",2,function (bs) {return new LineXY();});

function BarHorizontalStacked() {this.value=[];};
s.asCons(BarHorizontalStacked,"BarHorizontalStacked",3,function (bs) {return new BarHorizontalStacked();});

function BarVerticalStacked() {this.value=[];};
s.asCons(BarVerticalStacked,"BarVerticalStacked",4,function (bs) {return new BarVerticalStacked();});

function BarHorizontalGrouped() {this.value=[];};
s.asCons(BarHorizontalGrouped,"BarHorizontalGrouped",5,function (bs) {return new BarHorizontalGrouped();});

function BarVerticalGrouped() {this.value=[];};
s.asCons(BarVerticalGrouped,"BarVerticalGrouped",6,function (bs) {return new BarVerticalGrouped();});

function Pie() {this.value=[];};
s.asCons(Pie,"Pie",7,function (bs) {return new Pie();});

function Pie3D() {this.value=[];};
s.asCons(Pie3D,"Pie3D",8,function (bs) {return new Pie3D();});

function PieConcentric() {this.value=[];};
s.asCons(PieConcentric,"PieConcentric",9,function (bs) {return new PieConcentric();});

function Venn() {this.value=[];};
s.asCons(Venn,"Venn",10,function (bs) {return new Venn();});

function ScatterPlot() {this.value=[];};
s.asCons(ScatterPlot,"ScatterPlot",11,function (bs) {return new ScatterPlot();});

function Radar() {this.value=[];};
s.asCons(Radar,"Radar",12,function (bs) {return new Radar();});

function RadarCurvedLines() {this.value=[];};
s.asCons(RadarCurvedLines,"RadarCurvedLines",13,function (bs) {return new RadarCurvedLines();});

function GoogleOMeter() {this.value=[];};
s.asCons(GoogleOMeter,"GoogleOMeter",14,function (bs) {return new GoogleOMeter();});

function Formula() {this.value=[];};
s.asCons(Formula,"Formula",15,function (bs) {return new Formula();});

function QRCode() {this.value=[];};
s.asCons(QRCode,"QRCode",16,function (bs) {return new QRCode();});


var ChartType$={value:[]};
s.asType0(ChartType$,"ChartType$",[Line,Sparklines,LineXY,BarHorizontalStacked,BarVerticalStacked,BarHorizontalGrouped,BarVerticalGrouped,Pie,Pie3D,PieConcentric,Venn,ScatterPlot,Radar,RadarCurvedLines,GoogleOMeter,Formula,QRCode]);



return s.defs("Graphics.GChart.Types.Hash_f4d7a2bc9f78bf8fc8cb6ee848f42184feb11862ac4fc4c84cb4b602fced2da1",{},{ChartType$:ChartType$,Line:Line,Sparklines:Sparklines,LineXY:LineXY,BarHorizontalStacked:BarHorizontalStacked,BarVerticalStacked:BarVerticalStacked,BarHorizontalGrouped:BarHorizontalGrouped,BarVerticalGrouped:BarVerticalGrouped,Pie:Pie,Pie3D:Pie3D,PieConcentric:PieConcentric,Venn:Venn,ScatterPlot:ScatterPlot,Radar:Radar,RadarCurvedLines:RadarCurvedLines,GoogleOMeter:GoogleOMeter,Formula:Formula,QRCode:QRCode});
})();

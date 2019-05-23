goog.provide('quid2.module.Graphics.GChart.Types.Hash_dfdb50a4c47dfbb54f212eefaa992a2f26319a05be227dc91387eaab4bee09b5');
goog.require('quid2.std');

quid2.module.Graphics.GChart.Types.Hash_dfdb50a4c47dfbb54f212eefaa992a2f26319a05be227dc91387eaab4bee09b5 = (function () {
var s = quid2.std;
/*
data FillType  where 
  Background :: FillType
  Area :: FillType
  Transparent :: FillType
*/

function Background() {this.value=[];};
s.asCons(Background,"Background",0,function (bs) {return new Background();});

function Area() {this.value=[];};
s.asCons(Area,"Area",1,function (bs) {return new Area();});

function Transparent() {this.value=[];};
s.asCons(Transparent,"Transparent",2,function (bs) {return new Transparent();});


var FillType$={value:[]};
s.asType0(FillType$,"FillType$",[Background,Area,Transparent]);



return s.defs("Graphics.GChart.Types.Hash_dfdb50a4c47dfbb54f212eefaa992a2f26319a05be227dc91387eaab4bee09b5",{},{FillType$:FillType$,Background:Background,Area:Area,Transparent:Transparent});
})();

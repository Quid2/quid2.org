goog.provide('quid2.module.Graphics.GChart.Types.Hash_a417f68e9caabab78c1aa565e65b3b7f6fb6dcabd9010991db8f285d4b627811');
goog.require('quid2.std');

quid2.module.Graphics.GChart.Types.Hash_a417f68e9caabab78c1aa565e65b3b7f6fb6dcabd9010991db8f285d4b627811 = (function () {
var s = quid2.std;
/*
data ShapeType  where 
  ShapeArrow :: ShapeType
  ShapeCross :: ShapeType
  ShapeRectangle :: ShapeType
  ShapeDiamond :: ShapeType
  ShapeErrorBarMarker :: ShapeType
  HorizontalLine :: ShapeType
  HorizontalLineFull :: ShapeType
  ShapeCircle :: ShapeType
  ShapeSquare :: ShapeType
  VerticalLine :: ShapeType
  VerticalLineFull :: ShapeType
  ShapeX :: ShapeType
*/

function ShapeArrow() {this.value=[];};
s.asCons(ShapeArrow,"ShapeArrow",0,function (bs) {return new ShapeArrow();});

function ShapeCross() {this.value=[];};
s.asCons(ShapeCross,"ShapeCross",1,function (bs) {return new ShapeCross();});

function ShapeRectangle() {this.value=[];};
s.asCons(ShapeRectangle,"ShapeRectangle",2,function (bs) {return new ShapeRectangle();});

function ShapeDiamond() {this.value=[];};
s.asCons(ShapeDiamond,"ShapeDiamond",3,function (bs) {return new ShapeDiamond();});

function ShapeErrorBarMarker() {this.value=[];};
s.asCons(ShapeErrorBarMarker,"ShapeErrorBarMarker",4,function (bs) {return new ShapeErrorBarMarker();});

function HorizontalLine() {this.value=[];};
s.asCons(HorizontalLine,"HorizontalLine",5,function (bs) {return new HorizontalLine();});

function HorizontalLineFull() {this.value=[];};
s.asCons(HorizontalLineFull,"HorizontalLineFull",6,function (bs) {return new HorizontalLineFull();});

function ShapeCircle() {this.value=[];};
s.asCons(ShapeCircle,"ShapeCircle",7,function (bs) {return new ShapeCircle();});

function ShapeSquare() {this.value=[];};
s.asCons(ShapeSquare,"ShapeSquare",8,function (bs) {return new ShapeSquare();});

function VerticalLine() {this.value=[];};
s.asCons(VerticalLine,"VerticalLine",9,function (bs) {return new VerticalLine();});

function VerticalLineFull() {this.value=[];};
s.asCons(VerticalLineFull,"VerticalLineFull",10,function (bs) {return new VerticalLineFull();});

function ShapeX() {this.value=[];};
s.asCons(ShapeX,"ShapeX",11,function (bs) {return new ShapeX();});


var ShapeType$={value:[]};
s.asType0(ShapeType$,"ShapeType$",[ShapeArrow,ShapeCross,ShapeRectangle,ShapeDiamond,ShapeErrorBarMarker,HorizontalLine,HorizontalLineFull,ShapeCircle,ShapeSquare,VerticalLine,VerticalLineFull,ShapeX]);



return s.defs("Graphics.GChart.Types.Hash_a417f68e9caabab78c1aa565e65b3b7f6fb6dcabd9010991db8f285d4b627811",{},{ShapeType$:ShapeType$,ShapeArrow:ShapeArrow,ShapeCross:ShapeCross,ShapeRectangle:ShapeRectangle,ShapeDiamond:ShapeDiamond,ShapeErrorBarMarker:ShapeErrorBarMarker,HorizontalLine:HorizontalLine,HorizontalLineFull:HorizontalLineFull,ShapeCircle:ShapeCircle,ShapeSquare:ShapeSquare,VerticalLine:VerticalLine,VerticalLineFull:VerticalLineFull,ShapeX:ShapeX});
})();

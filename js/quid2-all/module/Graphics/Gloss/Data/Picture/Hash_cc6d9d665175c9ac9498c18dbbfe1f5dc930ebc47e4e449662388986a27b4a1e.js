goog.provide('quid2.module.Graphics.Gloss.Data.Picture.Hash_cc6d9d665175c9ac9498c18dbbfe1f5dc930ebc47e4e449662388986a27b4a1e');
goog.require('quid2.std');
goog.require('quid2.module.Graphics.Gloss.Data.Color.Hash_703f10d939ed125aa6646a0ad99cf4a88310e281b7a04ac6fbcedffb1e267e82');

quid2.module.Graphics.Gloss.Data.Picture.Hash_cc6d9d665175c9ac9498c18dbbfe1f5dc930ebc47e4e449662388986a27b4a1e = (function () {
var s = quid2.std;
/*
data Picture  where 
  Blank :: Picture
  Polygon :: [(Float,Float)] -> Picture
  Line :: [(Float,Float)] -> Picture
  Circle :: Float -> Picture
  ThickCircle :: Float -> Float -> Picture
  Text :: [Char] -> Picture
  Bitmap :: Int64 -> Int64 -> [Word8] -> Picture
  Color :: Graphics.Gloss.Data.Color.Hash_703f10d939ed125aa6646a0ad99cf4a88310e281b7a04ac6fbcedffb1e267e82.Color -> Picture -> Picture
  Translate :: Float -> Float -> Picture -> Picture
  Rotate :: Float -> Picture -> Picture
  Scale :: Float -> Float -> Picture -> Picture
  Pictures :: [Picture] -> Picture
*/

function Blank() {this.value=[];};
s.asCons(Blank,"Blank",0,function (bs) {return new Blank();});

function Polygon() {this.value=[s.list(arguments[0])];};
s.asCons(Polygon,"Polygon",1,function (bs) {return new Polygon(new s.List$(new s.Tuple$(s.Float,s.Float)).decode(bs));});

function Line() {this.value=[s.list(arguments[0])];};
s.asCons(Line,"Line",2,function (bs) {return new Line(new s.List$(new s.Tuple$(s.Float,s.Float)).decode(bs));});

function Circle() {this.value=[s.float(arguments[0])];};
s.asCons(Circle,"Circle",3,function (bs) {return new Circle(s.Float.decode(bs));});

function ThickCircle() {this.value=[s.float(arguments[0]),s.float(arguments[1])];};
s.asCons(ThickCircle,"ThickCircle",4,function (bs) {return new ThickCircle(s.Float.decode(bs),s.Float.decode(bs));});

function Text() {this.value=[s.string(arguments[0])];};
s.asCons(Text,"Text",5,function (bs) {return new Text(s.String.decode(bs));});

function Bitmap() {this.value=[s.int64(arguments[0]),s.int64(arguments[1]),s.bytes(arguments[2])];};
s.asCons(Bitmap,"Bitmap",6,function (bs) {return new Bitmap(s.Int64.decode(bs),s.Int64.decode(bs),s.ByteList.decode(bs));});

function Color() {this.value=[arguments[0],arguments[1]];};
s.asCons(Color,"Color",7,function (bs) {return new Color(quid2.module.Graphics.Gloss.Data.Color.Hash_703f10d939ed125aa6646a0ad99cf4a88310e281b7a04ac6fbcedffb1e267e82.Color$.decode(bs),Picture$.decode(bs));});

function Translate() {this.value=[s.float(arguments[0]),s.float(arguments[1]),arguments[2]];};
s.asCons(Translate,"Translate",8,function (bs) {return new Translate(s.Float.decode(bs),s.Float.decode(bs),Picture$.decode(bs));});

function Rotate() {this.value=[s.float(arguments[0]),arguments[1]];};
s.asCons(Rotate,"Rotate",9,function (bs) {return new Rotate(s.Float.decode(bs),Picture$.decode(bs));});

function Scale() {this.value=[s.float(arguments[0]),s.float(arguments[1]),arguments[2]];};
s.asCons(Scale,"Scale",10,function (bs) {return new Scale(s.Float.decode(bs),s.Float.decode(bs),Picture$.decode(bs));});

function Pictures() {this.value=[s.list(arguments[0])];};
s.asCons(Pictures,"Pictures",11,function (bs) {return new Pictures(new s.List$(Picture$).decode(bs));});


var Picture$={value:[]};
s.asType0(Picture$,"Picture$",[Blank,Polygon,Line,Circle,ThickCircle,Text,Bitmap,Color,Translate,Rotate,Scale,Pictures]);



return s.defs("Graphics.Gloss.Data.Picture.Hash_cc6d9d665175c9ac9498c18dbbfe1f5dc930ebc47e4e449662388986a27b4a1e",{},{Picture$:Picture$,Blank:Blank,Polygon:Polygon,Line:Line,Circle:Circle,ThickCircle:ThickCircle,Text:Text,Bitmap:Bitmap,Color:Color,Translate:Translate,Rotate:Rotate,Scale:Scale,Pictures:Pictures});
})();

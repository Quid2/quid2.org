goog.provide('quid2.module.Language.QQ.Hash_674153fc9f03d05ec04db69dc71c335288bf2183b16e04a557900a2db1f5e3b4');
goog.require('quid2.std');
goog.require('quid2.module.Data.Int16.Verb_00000A446174612E496E743136000005496E74313600000101000005496E74313600000000000A446174612E496E743136000005496E7431360000');
goog.require('quid2.module.Data.Int8.Verb_000009446174612E496E7438000004496E743800000101000004496E7438000000000009446174612E496E7438000004496E74380000');
goog.require('quid2.module.Data.Word64.Verb_00000B446174612E576F72643634000006576F7264363400000101000006576F7264363400000000000B446174612E576F72643634000006576F726436340000');
goog.require('quid2.module.Data.Word16.Verb_00000B446174612E576F72643136000006576F7264313600000101000006576F7264313600000000000B446174612E576F72643136000006576F726431360000');
goog.require('quid2.module.Language.QQ.Hash_aa0d10cba650e2a5de4e22ab15e3ac173adc1d670c565a8bad8277892e854fad');

quid2.module.Language.QQ.Hash_674153fc9f03d05ec04db69dc71c335288bf2183b16e04a557900a2db1f5e3b4 = (function () {
var s = quid2.std;
/*
data Expr a where 
  App :: Expr a -> Expr a -> Expr a
  Fun :: a -> Expr a
  Fld :: Data.Word16.Verb_00000B446174612E576F72643136000006576F7264313600000101000006576F7264313600000000000B446174612E576F72643136000006576F726431360000.Word16 -> Expr a
  Con :: (Language.QQ.Hash_aa0d10cba650e2a5de4e22ab15e3ac173adc1d670c565a8bad8277892e854fad.AbsName,Data.Word16.Verb_00000B446174612E576F72643136000006576F7264313600000101000006576F7264313600000000000B446174612E576F72643136000006576F726431360000.Word16) -> Expr a
  Tuple :: [Expr a] -> Expr a
  List :: [Expr a] -> Expr a
  Unit :: Expr a
  Char :: Char -> Expr a
  Word8 :: Word8 -> Expr a
  Word16 :: Data.Word16.Verb_00000B446174612E576F72643136000006576F7264313600000101000006576F7264313600000000000B446174612E576F72643136000006576F726431360000.Word16 -> Expr a
  Word32 :: Word32 -> Expr a
  Word64 :: Data.Word64.Verb_00000B446174612E576F72643634000006576F7264363400000101000006576F7264363400000000000B446174612E576F72643634000006576F726436340000.Word64 -> Expr a
  Int8 :: Data.Int8.Verb_000009446174612E496E7438000004496E743800000101000004496E7438000000000009446174612E496E7438000004496E74380000.Int8 -> Expr a
  Int16 :: Data.Int16.Verb_00000A446174612E496E743136000005496E74313600000101000005496E74313600000000000A446174612E496E743136000005496E7431360000.Int16 -> Expr a
  Int32 :: Int32 -> Expr a
  Int64 :: Int64 -> Expr a
  Float :: Float -> Expr a
  Double :: Double -> Expr a
  Integer :: Integer -> Expr a
*/

function App() {this.value=[arguments[0],arguments[1]];};
s.asCons(App,"App",0,function (bs,types) {return new App(new Expr$(types[0]).decode(bs),new Expr$(types[0]).decode(bs));});

function Fun() {this.value=[arguments[0]];};
s.asCons(Fun,"Fun",1,function (bs,types) {return new Fun(types[0].decode(bs));});

function Fld() {this.value=[arguments[0]];};
s.asCons(Fld,"Fld",2,function (bs,types) {return new Fld(quid2.module.Data.Word16.Verb_00000B446174612E576F72643136000006576F7264313600000101000006576F7264313600000000000B446174612E576F72643136000006576F726431360000.Word16$.decode(bs));});

function Con() {this.value=[s.tuple(arguments[0])];};
s.asCons(Con,"Con",3,function (bs,types) {return new Con(new s.Tuple$(quid2.module.Language.QQ.Hash_aa0d10cba650e2a5de4e22ab15e3ac173adc1d670c565a8bad8277892e854fad.AbsName$,quid2.module.Data.Word16.Verb_00000B446174612E576F72643136000006576F7264313600000101000006576F7264313600000000000B446174612E576F72643136000006576F726431360000.Word16$).decode(bs));});

function Tuple() {this.value=[s.list(arguments[0])];};
s.asCons(Tuple,"Tuple",4,function (bs,types) {return new Tuple(new s.List$(new Expr$(types[0])).decode(bs));});

function List() {this.value=[s.list(arguments[0])];};
s.asCons(List,"List",5,function (bs,types) {return new List(new s.List$(new Expr$(types[0])).decode(bs));});

function Unit() {this.value=[];};
s.asCons(Unit,"Unit",6,function (bs,types) {return new Unit();});

function Char() {this.value=[s.char(arguments[0])];};
s.asCons(Char,"Char",7,function (bs,types) {return new Char(s.Char.decode(bs));});

function Word8() {this.value=[s.word8(arguments[0])];};
s.asCons(Word8,"Word8",8,function (bs,types) {return new Word8(s.Word8.decode(bs));});

function Word16() {this.value=[arguments[0]];};
s.asCons(Word16,"Word16",9,function (bs,types) {return new Word16(quid2.module.Data.Word16.Verb_00000B446174612E576F72643136000006576F7264313600000101000006576F7264313600000000000B446174612E576F72643136000006576F726431360000.Word16$.decode(bs));});

function Word32() {this.value=[s.word32(arguments[0])];};
s.asCons(Word32,"Word32",10,function (bs,types) {return new Word32(s.Word32.decode(bs));});

function Word64() {this.value=[arguments[0]];};
s.asCons(Word64,"Word64",11,function (bs,types) {return new Word64(quid2.module.Data.Word64.Verb_00000B446174612E576F72643634000006576F7264363400000101000006576F7264363400000000000B446174612E576F72643634000006576F726436340000.Word64$.decode(bs));});

function Int8() {this.value=[arguments[0]];};
s.asCons(Int8,"Int8",12,function (bs,types) {return new Int8(quid2.module.Data.Int8.Verb_000009446174612E496E7438000004496E743800000101000004496E7438000000000009446174612E496E7438000004496E74380000.Int8$.decode(bs));});

function Int16() {this.value=[arguments[0]];};
s.asCons(Int16,"Int16",13,function (bs,types) {return new Int16(quid2.module.Data.Int16.Verb_00000A446174612E496E743136000005496E74313600000101000005496E74313600000000000A446174612E496E743136000005496E7431360000.Int16$.decode(bs));});

function Int32() {this.value=[s.int32(arguments[0])];};
s.asCons(Int32,"Int32",14,function (bs,types) {return new Int32(s.Int32.decode(bs));});

function Int64() {this.value=[s.int64(arguments[0])];};
s.asCons(Int64,"Int64",15,function (bs,types) {return new Int64(s.Int64.decode(bs));});

function Float() {this.value=[s.float(arguments[0])];};
s.asCons(Float,"Float",16,function (bs,types) {return new Float(s.Float.decode(bs));});

function Double() {this.value=[s.double(arguments[0])];};
s.asCons(Double,"Double",17,function (bs,types) {return new Double(s.Double.decode(bs));});

function Integer() {this.value=[s.integer(arguments[0])];};
s.asCons(Integer,"Integer",18,function (bs,types) {return new Integer(s.Integer.decode(bs));});


function Expr$() {this.value=[arguments[0]];};
s.asType(Expr$,"Expr$",[App,Fun,Fld,Con,Tuple,List,Unit,Char,Word8,Word16,Word32,Word64,Int8,Int16,Int32,Int64,Float,Double,Integer]);



return s.defs("Language.QQ.Hash_674153fc9f03d05ec04db69dc71c335288bf2183b16e04a557900a2db1f5e3b4",{},{Expr$:Expr$,App:App,Fun:Fun,Fld:Fld,Con:Con,Tuple:Tuple,List:List,Unit:Unit,Char:Char,Word8:Word8,Word16:Word16,Word32:Word32,Word64:Word64,Int8:Int8,Int16:Int16,Int32:Int32,Int64:Int64,Float:Float,Double:Double,Integer:Integer});
})();

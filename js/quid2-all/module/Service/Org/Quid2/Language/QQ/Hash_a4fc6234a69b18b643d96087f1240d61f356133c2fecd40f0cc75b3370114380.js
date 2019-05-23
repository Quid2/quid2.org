goog.provide('quid2.module.Service.Org.Quid2.Language.QQ.Hash_a4fc6234a69b18b643d96087f1240d61f356133c2fecd40f0cc75b3370114380');
goog.require('quid2.std');
goog.require('quid2.module.Data.Int16.Verb_00000A446174612E496E743136000005496E74313600000101000005496E74313600000000000A446174612E496E743136000005496E7431360000');
goog.require('quid2.module.Data.Int8.Verb_000009446174612E496E7438000004496E743800000101000004496E7438000000000009446174612E496E7438000004496E74380000');
goog.require('quid2.module.Data.Word64.Verb_00000B446174612E576F72643634000006576F7264363400000101000006576F7264363400000000000B446174612E576F72643634000006576F726436340000');
goog.require('quid2.module.Data.Word16.Verb_00000B446174612E576F72643136000006576F7264313600000101000006576F7264313600000000000B446174612E576F72643136000006576F726431360000');
goog.require('quid2.module.Service.Org.Quid2.Language.QQ.Hash_20ee404c498d46c91318301b2829de7be66f73436a916263772975b1c314ab00');
goog.require('quid2.module.Service.Org.Quid2.Language.QQ.Hash_19060ae845a818212dd9a50bb4ef9652a2f2e8ab4a235b76fbf9111e63bd8975');

quid2.module.Service.Org.Quid2.Language.QQ.Hash_a4fc6234a69b18b643d96087f1240d61f356133c2fecd40f0cc75b3370114380 = (function () {
var s = quid2.std;
/*
data Expr  where 
  Con :: (Service.Org.Quid2.Language.QQ.Hash_19060ae845a818212dd9a50bb4ef9652a2f2e8ab4a235b76fbf9111e63bd8975.AbsName,Word8) -> Expr
  App :: Expr -> Expr -> Expr
  Fun :: Service.Org.Quid2.Language.QQ.Hash_20ee404c498d46c91318301b2829de7be66f73436a916263772975b1c314ab00.QualName -> Expr
  Tuple :: [Expr] -> Expr
  List :: [Expr] -> Expr
  LIO :: Expr -> Expr
  LUnit :: Expr
  LChar :: Char -> Expr
  LWord8 :: Word8 -> Expr
  LWord16 :: Data.Word16.Verb_00000B446174612E576F72643136000006576F7264313600000101000006576F7264313600000000000B446174612E576F72643136000006576F726431360000.Word16 -> Expr
  LWord32 :: Word32 -> Expr
  LWord64 :: Data.Word64.Verb_00000B446174612E576F72643634000006576F7264363400000101000006576F7264363400000000000B446174612E576F72643634000006576F726436340000.Word64 -> Expr
  LInt8 :: Data.Int8.Verb_000009446174612E496E7438000004496E743800000101000004496E7438000000000009446174612E496E7438000004496E74380000.Int8 -> Expr
  LInt16 :: Data.Int16.Verb_00000A446174612E496E743136000005496E74313600000101000005496E74313600000000000A446174612E496E743136000005496E7431360000.Int16 -> Expr
  LInt32 :: Int32 -> Expr
  LInt64 :: Int64 -> Expr
  LFloat :: Float -> Expr
  LDouble :: Double -> Expr
  LInteger :: Integer -> Expr
*/

function Con() {this.value=[s.tuple(arguments[0])];};
s.asCons(Con,"Con",0,function (bs) {return new Con(new s.Tuple$(quid2.module.Service.Org.Quid2.Language.QQ.Hash_19060ae845a818212dd9a50bb4ef9652a2f2e8ab4a235b76fbf9111e63bd8975.AbsName$,s.Word8).decode(bs));});

function App() {this.value=[arguments[0],arguments[1]];};
s.asCons(App,"App",1,function (bs) {return new App(Expr$.decode(bs),Expr$.decode(bs));});

function Fun() {this.value=[arguments[0]];};
s.asCons(Fun,"Fun",2,function (bs) {return new Fun(quid2.module.Service.Org.Quid2.Language.QQ.Hash_20ee404c498d46c91318301b2829de7be66f73436a916263772975b1c314ab00.QualName$.decode(bs));});

function Tuple() {this.value=[s.list(arguments[0])];};
s.asCons(Tuple,"Tuple",3,function (bs) {return new Tuple(new s.List$(Expr$).decode(bs));});

function List() {this.value=[s.list(arguments[0])];};
s.asCons(List,"List",4,function (bs) {return new List(new s.List$(Expr$).decode(bs));});

function LIO() {this.value=[arguments[0]];};
s.asCons(LIO,"LIO",5,function (bs) {return new LIO(Expr$.decode(bs));});

function LUnit() {this.value=[];};
s.asCons(LUnit,"LUnit",6,function (bs) {return new LUnit();});

function LChar() {this.value=[s.char(arguments[0])];};
s.asCons(LChar,"LChar",7,function (bs) {return new LChar(s.Char.decode(bs));});

function LWord8() {this.value=[s.word8(arguments[0])];};
s.asCons(LWord8,"LWord8",8,function (bs) {return new LWord8(s.Word8.decode(bs));});

function LWord16() {this.value=[arguments[0]];};
s.asCons(LWord16,"LWord16",9,function (bs) {return new LWord16(quid2.module.Data.Word16.Verb_00000B446174612E576F72643136000006576F7264313600000101000006576F7264313600000000000B446174612E576F72643136000006576F726431360000.Word16$.decode(bs));});

function LWord32() {this.value=[s.word32(arguments[0])];};
s.asCons(LWord32,"LWord32",10,function (bs) {return new LWord32(s.Word32.decode(bs));});

function LWord64() {this.value=[arguments[0]];};
s.asCons(LWord64,"LWord64",11,function (bs) {return new LWord64(quid2.module.Data.Word64.Verb_00000B446174612E576F72643634000006576F7264363400000101000006576F7264363400000000000B446174612E576F72643634000006576F726436340000.Word64$.decode(bs));});

function LInt8() {this.value=[arguments[0]];};
s.asCons(LInt8,"LInt8",12,function (bs) {return new LInt8(quid2.module.Data.Int8.Verb_000009446174612E496E7438000004496E743800000101000004496E7438000000000009446174612E496E7438000004496E74380000.Int8$.decode(bs));});

function LInt16() {this.value=[arguments[0]];};
s.asCons(LInt16,"LInt16",13,function (bs) {return new LInt16(quid2.module.Data.Int16.Verb_00000A446174612E496E743136000005496E74313600000101000005496E74313600000000000A446174612E496E743136000005496E7431360000.Int16$.decode(bs));});

function LInt32() {this.value=[s.int32(arguments[0])];};
s.asCons(LInt32,"LInt32",14,function (bs) {return new LInt32(s.Int32.decode(bs));});

function LInt64() {this.value=[s.int64(arguments[0])];};
s.asCons(LInt64,"LInt64",15,function (bs) {return new LInt64(s.Int64.decode(bs));});

function LFloat() {this.value=[s.float(arguments[0])];};
s.asCons(LFloat,"LFloat",16,function (bs) {return new LFloat(s.Float.decode(bs));});

function LDouble() {this.value=[s.double(arguments[0])];};
s.asCons(LDouble,"LDouble",17,function (bs) {return new LDouble(s.Double.decode(bs));});

function LInteger() {this.value=[s.integer(arguments[0])];};
s.asCons(LInteger,"LInteger",18,function (bs) {return new LInteger(s.Integer.decode(bs));});


var Expr$={value:[]};
s.asType0(Expr$,"Expr$",[Con,App,Fun,Tuple,List,LIO,LUnit,LChar,LWord8,LWord16,LWord32,LWord64,LInt8,LInt16,LInt32,LInt64,LFloat,LDouble,LInteger]);



return s.defs("Service.Org.Quid2.Language.QQ.Hash_a4fc6234a69b18b643d96087f1240d61f356133c2fecd40f0cc75b3370114380",{},{Expr$:Expr$,Con:Con,App:App,Fun:Fun,Tuple:Tuple,List:List,LIO:LIO,LUnit:LUnit,LChar:LChar,LWord8:LWord8,LWord16:LWord16,LWord32:LWord32,LWord64:LWord64,LInt8:LInt8,LInt16:LInt16,LInt32:LInt32,LInt64:LInt64,LFloat:LFloat,LDouble:LDouble,LInteger:LInteger});
})();

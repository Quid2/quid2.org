goog.provide('quid2.module.Language.Quid2.Syntax.Hash_b9a8c491cb96d031339da351913fe3ec2b11dd5edfa46afb2cedee043e976382');
goog.require('quid2.std');
goog.require('quid2.module.Data.Ratio.Hash_1a755cc7ebaf74a314f8a9f976289c1ab76137cc5d9a83e7d92f113f2af93b42');

quid2.module.Language.Quid2.Syntax.Hash_b9a8c491cb96d031339da351913fe3ec2b11dd5edfa46afb2cedee043e976382 = (function () {
var s = quid2.std;
/*
data Literal  where 
  Char :: Char -> Literal
  String :: [Char] -> Literal
  Int :: Integer -> Literal
  Frac :: Data.Ratio.Hash_1a755cc7ebaf74a314f8a9f976289c1ab76137cc5d9a83e7d92f113f2af93b42.Ratio Integer -> Literal
  Bytes :: [Word8] -> Literal
*/

function Char() {this.value=[s.char(arguments[0])];};
s.asCons(Char,"Char",0,function (bs) {return new Char(s.Char.decode(bs));});

function String() {this.value=[s.string(arguments[0])];};
s.asCons(String,"String",1,function (bs) {return new String(s.String.decode(bs));});

function Int() {this.value=[s.integer(arguments[0])];};
s.asCons(Int,"Int",2,function (bs) {return new Int(s.Integer.decode(bs));});

function Frac() {this.value=[arguments[0]];};
s.asCons(Frac,"Frac",3,function (bs) {return new Frac(new quid2.module.Data.Ratio.Hash_1a755cc7ebaf74a314f8a9f976289c1ab76137cc5d9a83e7d92f113f2af93b42.Ratio$(s.Integer).decode(bs));});

function Bytes() {this.value=[s.bytes(arguments[0])];};
s.asCons(Bytes,"Bytes",4,function (bs) {return new Bytes(s.ByteList.decode(bs));});


var Literal$={value:[]};
s.asType0(Literal$,"Literal$",[Char,String,Int,Frac,Bytes]);



return s.defs("Language.Quid2.Syntax.Hash_b9a8c491cb96d031339da351913fe3ec2b11dd5edfa46afb2cedee043e976382",{},{Literal$:Literal$,Char:Char,String:String,Int:Int,Frac:Frac,Bytes:Bytes});
})();

goog.provide('quid2.module.Network.EndPoint.Hash_5b8d3169b4666ce03ae288a785a7d9f5824a8c5572abc627fff35b794f9e682b');
goog.require('quid2.std');
goog.require('quid2.module.Network.Domain.Hash_38fd29d583e084e61f43eb4a899c4f4abf29672b7111406e06c47cc4248b9267');

quid2.module.Network.EndPoint.Hash_5b8d3169b4666ce03ae288a785a7d9f5824a8c5572abc627fff35b794f9e682b = (function () {
var s = quid2.std;
/*
data EndPoint  where 
  EndPoint :: Network.Domain.Hash_38fd29d583e084e61f43eb4a899c4f4abf29672b7111406e06c47cc4248b9267.Domain -> Via -> EndPoint
*/

function EndPoint() {this.value=[arguments[0],arguments[1]];};
s.asCons(EndPoint,"EndPoint",0,function (bs) {return new EndPoint(quid2.module.Network.Domain.Hash_38fd29d583e084e61f43eb4a899c4f4abf29672b7111406e06c47cc4248b9267.Domain$.decode(bs),Via$.decode(bs));});

/*
data Via  where 
  Via :: EndPoint -> Via -> Via
  At :: [Word8] -> Via
  RPC :: [Char] -> Word32 -> Via
*/

function Via() {this.value=[arguments[0],arguments[1]];};
s.asCons(Via,"Via",0,function (bs) {return new Via(EndPoint$.decode(bs),Via$.decode(bs));});

function At() {this.value=[s.bytes(arguments[0])];};
s.asCons(At,"At",1,function (bs) {return new At(s.ByteList.decode(bs));});

function RPC() {this.value=[s.string(arguments[0]),s.word32(arguments[1])];};
s.asCons(RPC,"RPC",2,function (bs) {return new RPC(s.String.decode(bs),s.Word32.decode(bs));});


var EndPoint$={value:[]};
s.asType0(EndPoint$,"EndPoint$",[EndPoint]);

var Via$={value:[]};
s.asType0(Via$,"Via$",[Via,At,RPC]);



return s.defs("Network.EndPoint.Hash_5b8d3169b4666ce03ae288a785a7d9f5824a8c5572abc627fff35b794f9e682b",{},{EndPoint$:EndPoint$,Via$:Via$,EndPoint:EndPoint,Via:Via,At:At,RPC:RPC});
})();

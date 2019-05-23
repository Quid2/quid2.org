goog.provide('quid2.module.Test.Test.Hash_a15139190ad1a47c126e3f92eb19668b9454b41bdff458dc4aa45b765b78fb58');
goog.require('quid2.std');

quid2.module.Test.Test.Hash_a15139190ad1a47c126e3f92eb19668b9454b41bdff458dc4aa45b765b78fb58 = (function () {
var s = quid2.std;
/*
data RpcError  where 
  ServerError :: [Char] -> RpcError
  ResultTypeError :: [Char] -> RpcError
  ProtocolError :: [Char] -> RpcError
*/

function ServerError() {this.value=[s.string(arguments[0])];};
s.asCons(ServerError,"ServerError",0,function (bs) {return new ServerError(s.String.decode(bs));});

function ResultTypeError() {this.value=[s.string(arguments[0])];};
s.asCons(ResultTypeError,"ResultTypeError",1,function (bs) {return new ResultTypeError(s.String.decode(bs));});

function ProtocolError() {this.value=[s.string(arguments[0])];};
s.asCons(ProtocolError,"ProtocolError",2,function (bs) {return new ProtocolError(s.String.decode(bs));});


var RpcError$={value:[]};
s.asType0(RpcError$,"RpcError$",[ServerError,ResultTypeError,ProtocolError]);



return s.defs("Test.Test.Hash_a15139190ad1a47c126e3f92eb19668b9454b41bdff458dc4aa45b765b78fb58",{},{RpcError$:RpcError$,ServerError:ServerError,ResultTypeError:ResultTypeError,ProtocolError:ProtocolError});
})();

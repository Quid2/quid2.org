goog.provide('quid2.module.Network.Msg.Hash_3dda7e178e7a7ca389ab7a579611191e6580f5c0afe2d0e1c62b73e9b3bfa2e9');
goog.require('quid2.std');

quid2.module.Network.Msg.Hash_3dda7e178e7a7ca389ab7a579611191e6580f5c0afe2d0e1c62b73e9b3bfa2e9 = (function () {
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



return s.defs("Network.Msg.Hash_3dda7e178e7a7ca389ab7a579611191e6580f5c0afe2d0e1c62b73e9b3bfa2e9",{},{RpcError$:RpcError$,ServerError:ServerError,ResultTypeError:ResultTypeError,ProtocolError:ProtocolError});
})();

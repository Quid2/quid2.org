goog.provide('quid2.module.Network.Function.Hash_f4d0e4f998bafe9e79a9708826e13456c6964677c3dd2289378ca961ecdd67cd');
goog.require('quid2.std');
goog.require('quid2.module.Network.EndPoint.Hash_5b8d3169b4666ce03ae288a785a7d9f5824a8c5572abc627fff35b794f9e682b');
goog.require('quid2.module.Data.Maybe.Hash_fe1a9ed1fe3015c135b766464e0bcb971d1cd2b1aa733a473dd1055ba4b7eb60');

quid2.module.Network.Function.Hash_f4d0e4f998bafe9e79a9708826e13456c6964677c3dd2289378ca961ecdd67cd = (function () {
var s = quid2.std;
/*
data Function a where 
  Function :: Data.Maybe.Hash_fe1a9ed1fe3015c135b766464e0bcb971d1cd2b1aa733a473dd1055ba4b7eb60.Maybe Network.EndPoint.Hash_5b8d3169b4666ce03ae288a785a7d9f5824a8c5572abc627fff35b794f9e682b.EndPoint -> [Char] -> Function a
*/

function Function() {this.value=[arguments[0],s.string(arguments[1])];};
s.asCons(Function,"Function",0,function (bs,types) {return new Function(new quid2.module.Data.Maybe.Hash_fe1a9ed1fe3015c135b766464e0bcb971d1cd2b1aa733a473dd1055ba4b7eb60.Maybe$(quid2.module.Network.EndPoint.Hash_5b8d3169b4666ce03ae288a785a7d9f5824a8c5572abc627fff35b794f9e682b.EndPoint$).decode(bs),s.String.decode(bs));});


function Function$() {this.value=[arguments[0]];};
s.asType(Function$,"Function$",[Function]);



return s.defs("Network.Function.Hash_f4d0e4f998bafe9e79a9708826e13456c6964677c3dd2289378ca961ecdd67cd",{},{Function$:Function$,Function:Function});
})();

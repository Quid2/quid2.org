goog.provide('quid2.module.Service.Org.Quid2.App.View.Hash_e0fc57aaf1bc60dc08e2e8902d61e31cba4e4ee661d42f52f9c41ff3a1438a86');
goog.require('quid2.std');

quid2.module.Service.Org.Quid2.App.View.Hash_e0fc57aaf1bc60dc08e2e8902d61e31cba4e4ee661d42f52f9c41ff3a1438a86 = (function () {
var s = quid2.std;
/*
data Versions  where 
  Versions :: [Char] -> Versions
*/

function Versions() {this.value=[s.string(arguments[0])];};
s.asCons(Versions,"Versions",0,function (bs) {return new Versions(s.String.decode(bs));});


var Versions$={value:[]};
s.asType0(Versions$,"Versions$",[Versions]);



return s.defs("Service.Org.Quid2.App.View.Hash_e0fc57aaf1bc60dc08e2e8902d61e31cba4e4ee661d42f52f9c41ff3a1438a86",{},{Versions$:Versions$,Versions:Versions});
})();

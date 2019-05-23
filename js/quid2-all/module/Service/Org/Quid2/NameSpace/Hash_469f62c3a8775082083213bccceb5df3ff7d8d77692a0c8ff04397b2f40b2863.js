goog.provide('quid2.module.Service.Org.Quid2.NameSpace.Hash_469f62c3a8775082083213bccceb5df3ff7d8d77692a0c8ff04397b2f40b2863');
goog.require('quid2.std');

quid2.module.Service.Org.Quid2.NameSpace.Hash_469f62c3a8775082083213bccceb5df3ff7d8d77692a0c8ff04397b2f40b2863 = (function () {
var s = quid2.std;
/*
data TRef a b where 
  TRef :: a -> [Char] -> TRef a b
*/

function TRef() {this.value=[arguments[0],s.string(arguments[1])];};
s.asCons(TRef,"TRef",0,function (bs,types) {return new TRef(types[0].decode(bs),s.String.decode(bs));});


function TRef$() {this.value=[arguments[0],arguments[1]];};
s.asType(TRef$,"TRef$",[TRef]);



return s.defs("Service.Org.Quid2.NameSpace.Hash_469f62c3a8775082083213bccceb5df3ff7d8d77692a0c8ff04397b2f40b2863",{},{TRef$:TRef$,TRef:TRef});
})();

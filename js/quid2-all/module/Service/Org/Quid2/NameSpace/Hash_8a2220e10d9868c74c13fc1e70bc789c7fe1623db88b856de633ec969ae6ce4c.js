goog.provide('quid2.module.Service.Org.Quid2.NameSpace.Hash_8a2220e10d9868c74c13fc1e70bc789c7fe1623db88b856de633ec969ae6ce4c');
goog.require('quid2.std');

quid2.module.Service.Org.Quid2.NameSpace.Hash_8a2220e10d9868c74c13fc1e70bc789c7fe1623db88b856de633ec969ae6ce4c = (function () {
var s = quid2.std;
/*
data URef a where 
  URef :: a -> [Char] -> URef a
*/

function URef() {this.value=[arguments[0],s.string(arguments[1])];};
s.asCons(URef,"URef",0,function (bs,types) {return new URef(types[0].decode(bs),s.String.decode(bs));});


function URef$() {this.value=[arguments[0]];};
s.asType(URef$,"URef$",[URef]);



return s.defs("Service.Org.Quid2.NameSpace.Hash_8a2220e10d9868c74c13fc1e70bc789c7fe1623db88b856de633ec969ae6ce4c",{},{URef$:URef$,URef:URef});
})();

goog.provide('quid2.module.Service.Org.Quid2.App.View.Hash_31c22e8dc3c6df75f6e52c0f31031aa1c6f43931f5e5bc469cd815bb377ecc21');
goog.require('quid2.std');

quid2.module.Service.Org.Quid2.App.View.Hash_31c22e8dc3c6df75f6e52c0f31031aa1c6f43931f5e5bc469cd815bb377ecc21 = (function () {
var s = quid2.std;
/*
data JSTyped  where 
  JSTyped :: [Char] -> [Word8] -> JSTyped
*/

function JSTyped() {this.value=[s.string(arguments[0]),s.bytes(arguments[1])];};
s.asCons(JSTyped,"JSTyped",0,function (bs) {return new JSTyped(s.String.decode(bs),s.ByteList.decode(bs));});


var JSTyped$={value:[]};
s.asType0(JSTyped$,"JSTyped$",[JSTyped]);



return s.defs("Service.Org.Quid2.App.View.Hash_31c22e8dc3c6df75f6e52c0f31031aa1c6f43931f5e5bc469cd815bb377ecc21",{},{JSTyped$:JSTyped$,JSTyped:JSTyped});
})();

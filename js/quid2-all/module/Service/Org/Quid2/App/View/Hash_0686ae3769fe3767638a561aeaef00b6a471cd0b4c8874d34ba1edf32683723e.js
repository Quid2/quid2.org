goog.provide('quid2.module.Service.Org.Quid2.App.View.Hash_0686ae3769fe3767638a561aeaef00b6a471cd0b4c8874d34ba1edf32683723e');
goog.require('quid2.std');
goog.require('quid2.module.Service.Org.Quid2.App.View.Hash_31c22e8dc3c6df75f6e52c0f31031aa1c6f43931f5e5bc469cd815bb377ecc21');
goog.require('quid2.module.Service.Org.Quid2.App.View.Hash_58db40a1b23eb646cae2ebe6c69d6860e153ca3fc397e2d9cce529da3d0e984e');

quid2.module.Service.Org.Quid2.App.View.Hash_0686ae3769fe3767638a561aeaef00b6a471cd0b4c8874d34ba1edf32683723e = (function () {
var s = quid2.std;
/*
data JS a where 
  JS :: Service.Org.Quid2.App.View.Hash_58db40a1b23eb646cae2ebe6c69d6860e153ca3fc397e2d9cce529da3d0e984e.JSFunction -> [Service.Org.Quid2.App.View.Hash_31c22e8dc3c6df75f6e52c0f31031aa1c6f43931f5e5bc469cd815bb377ecc21.JSTyped] -> JS a
*/

function JS() {this.value=[arguments[0],s.list(arguments[1])];};
s.asCons(JS,"JS",0,function (bs,types) {return new JS(quid2.module.Service.Org.Quid2.App.View.Hash_58db40a1b23eb646cae2ebe6c69d6860e153ca3fc397e2d9cce529da3d0e984e.JSFunction$.decode(bs),new s.List$(quid2.module.Service.Org.Quid2.App.View.Hash_31c22e8dc3c6df75f6e52c0f31031aa1c6f43931f5e5bc469cd815bb377ecc21.JSTyped$).decode(bs));});


function JS$() {this.value=[arguments[0]];};
s.asType(JS$,"JS$",[JS]);



return s.defs("Service.Org.Quid2.App.View.Hash_0686ae3769fe3767638a561aeaef00b6a471cd0b4c8874d34ba1edf32683723e",{},{JS$:JS$,JS:JS});
})();

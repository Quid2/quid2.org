goog.provide('quid2.module.Service.Org.Quid2.Language.QQ.Hash_efa99176b38e1f46af3ca7e7dc0dd9179472c069ca5f0d0a41d9b754221316d2');
goog.require('quid2.std');
goog.require('quid2.module.Service.Org.Quid2.Language.QQ.Hash_04e43b1a91a8b7b5477456786d620c53021925bb70f5bade5fc89523f5908369');
goog.require('quid2.module.Service.Org.Quid2.Language.QQ.Hash_20ee404c498d46c91318301b2829de7be66f73436a916263772975b1c314ab00');

quid2.module.Service.Org.Quid2.Language.QQ.Hash_efa99176b38e1f46af3ca7e7dc0dd9179472c069ca5f0d0a41d9b754221316d2 = (function () {
var s = quid2.std;
/*
data Value a where 
  Value :: Service.Org.Quid2.Language.QQ.Hash_20ee404c498d46c91318301b2829de7be66f73436a916263772975b1c314ab00.QualName -> Service.Org.Quid2.Language.QQ.Hash_04e43b1a91a8b7b5477456786d620c53021925bb70f5bade5fc89523f5908369.Type a -> Value a
*/

function Value() {this.value=[arguments[0],arguments[1]];};
s.asCons(Value,"Value",0,function (bs,types) {return new Value(quid2.module.Service.Org.Quid2.Language.QQ.Hash_20ee404c498d46c91318301b2829de7be66f73436a916263772975b1c314ab00.QualName$.decode(bs),new quid2.module.Service.Org.Quid2.Language.QQ.Hash_04e43b1a91a8b7b5477456786d620c53021925bb70f5bade5fc89523f5908369.Type$(types[0]).decode(bs));});


function Value$() {this.value=[arguments[0]];};
s.asType(Value$,"Value$",[Value]);



return s.defs("Service.Org.Quid2.Language.QQ.Hash_efa99176b38e1f46af3ca7e7dc0dd9179472c069ca5f0d0a41d9b754221316d2",{},{Value$:Value$,Value:Value});
})();

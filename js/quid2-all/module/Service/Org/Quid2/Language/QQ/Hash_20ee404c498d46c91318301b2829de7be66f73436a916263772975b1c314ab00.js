goog.provide('quid2.module.Service.Org.Quid2.Language.QQ.Hash_20ee404c498d46c91318301b2829de7be66f73436a916263772975b1c314ab00');
goog.require('quid2.std');
goog.require('quid2.module.Service.Org.Quid2.Language.QQ.Hash_34532b079044b6d8fcb951790a90b8f8aec83d21c28b91ea50d2115f0efd4505');

quid2.module.Service.Org.Quid2.Language.QQ.Hash_20ee404c498d46c91318301b2829de7be66f73436a916263772975b1c314ab00 = (function () {
var s = quid2.std;
/*
data QualName  where 
  QualName :: [Char] -> Service.Org.Quid2.Language.QQ.Hash_34532b079044b6d8fcb951790a90b8f8aec83d21c28b91ea50d2115f0efd4505.Name -> QualName
*/

function QualName() {this.value=[s.string(arguments[0]),arguments[1]];};
s.asCons(QualName,"QualName",0,function (bs) {return new QualName(s.String.decode(bs),quid2.module.Service.Org.Quid2.Language.QQ.Hash_34532b079044b6d8fcb951790a90b8f8aec83d21c28b91ea50d2115f0efd4505.Name$.decode(bs));});


var QualName$={value:[]};
s.asType0(QualName$,"QualName$",[QualName]);



return s.defs("Service.Org.Quid2.Language.QQ.Hash_20ee404c498d46c91318301b2829de7be66f73436a916263772975b1c314ab00",{},{QualName$:QualName$,QualName:QualName});
})();

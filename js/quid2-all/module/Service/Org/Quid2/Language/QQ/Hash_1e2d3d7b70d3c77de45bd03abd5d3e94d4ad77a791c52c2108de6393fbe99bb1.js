goog.provide('quid2.module.Service.Org.Quid2.Language.QQ.Hash_1e2d3d7b70d3c77de45bd03abd5d3e94d4ad77a791c52c2108de6393fbe99bb1');
goog.require('quid2.std');
goog.require('quid2.module.Data.Maybe.Hash_fe1a9ed1fe3015c135b766464e0bcb971d1cd2b1aa733a473dd1055ba4b7eb60');
goog.require('quid2.module.Service.Org.Quid2.Language.QQ.Hash_34532b079044b6d8fcb951790a90b8f8aec83d21c28b91ea50d2115f0efd4505');

quid2.module.Service.Org.Quid2.Language.QQ.Hash_1e2d3d7b70d3c77de45bd03abd5d3e94d4ad77a791c52c2108de6393fbe99bb1 = (function () {
var s = quid2.std;
/*
data QualNamePos  where 
  QualNamePos :: [Char] -> Service.Org.Quid2.Language.QQ.Hash_34532b079044b6d8fcb951790a90b8f8aec83d21c28b91ea50d2115f0efd4505.Name -> Data.Maybe.Hash_fe1a9ed1fe3015c135b766464e0bcb971d1cd2b1aa733a473dd1055ba4b7eb60.Maybe Int32 -> QualNamePos
*/

function QualNamePos() {this.value=[s.string(arguments[0]),arguments[1],arguments[2]];};
s.asCons(QualNamePos,"QualNamePos",0,function (bs) {return new QualNamePos(s.String.decode(bs),quid2.module.Service.Org.Quid2.Language.QQ.Hash_34532b079044b6d8fcb951790a90b8f8aec83d21c28b91ea50d2115f0efd4505.Name$.decode(bs),new quid2.module.Data.Maybe.Hash_fe1a9ed1fe3015c135b766464e0bcb971d1cd2b1aa733a473dd1055ba4b7eb60.Maybe$(s.Int32).decode(bs));});


var QualNamePos$={value:[]};
s.asType0(QualNamePos$,"QualNamePos$",[QualNamePos]);



return s.defs("Service.Org.Quid2.Language.QQ.Hash_1e2d3d7b70d3c77de45bd03abd5d3e94d4ad77a791c52c2108de6393fbe99bb1",{},{QualNamePos$:QualNamePos$,QualNamePos:QualNamePos});
})();

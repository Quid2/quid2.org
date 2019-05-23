goog.provide('quid2.module.Service.Org.Quid2.Language.QQ.Hash_aaaf360d83bef60c0f086a45d610ee4644bc017eb1e17d4f30769bdac5cba1d3');
goog.require('quid2.std');
goog.require('quid2.module.Service.Org.Quid2.Language.QQ.Hash_2d7a54daf18c1fe6d10cdf2891a129c62441a6ffb490b79ac941056f207dfe33');
goog.require('quid2.module.Service.Org.Quid2.Language.QQ.Hash_20ee404c498d46c91318301b2829de7be66f73436a916263772975b1c314ab00');

quid2.module.Service.Org.Quid2.Language.QQ.Hash_aaaf360d83bef60c0f086a45d610ee4644bc017eb1e17d4f30769bdac5cba1d3 = (function () {
var s = quid2.std;
/*
data DataDecl a where 
  DataDecl :: Service.Org.Quid2.Language.QQ.Hash_20ee404c498d46c91318301b2829de7be66f73436a916263772975b1c314ab00.QualName -> [[Char]] -> Word8 -> [Service.Org.Quid2.Language.QQ.Hash_2d7a54daf18c1fe6d10cdf2891a129c62441a6ffb490b79ac941056f207dfe33.Cons a] -> DataDecl a
*/

function DataDecl() {this.value=[arguments[0],s.list(arguments[1]),s.word8(arguments[2]),s.list(arguments[3])];};
s.asCons(DataDecl,"DataDecl",0,function (bs,types) {return new DataDecl(quid2.module.Service.Org.Quid2.Language.QQ.Hash_20ee404c498d46c91318301b2829de7be66f73436a916263772975b1c314ab00.QualName$.decode(bs),new s.List$(s.String).decode(bs),s.Word8.decode(bs),new s.List$(new quid2.module.Service.Org.Quid2.Language.QQ.Hash_2d7a54daf18c1fe6d10cdf2891a129c62441a6ffb490b79ac941056f207dfe33.Cons$(types[0])).decode(bs));});


function DataDecl$() {this.value=[arguments[0]];};
s.asType(DataDecl$,"DataDecl$",[DataDecl]);



return s.defs("Service.Org.Quid2.Language.QQ.Hash_aaaf360d83bef60c0f086a45d610ee4644bc017eb1e17d4f30769bdac5cba1d3",{},{DataDecl$:DataDecl$,DataDecl:DataDecl});
})();

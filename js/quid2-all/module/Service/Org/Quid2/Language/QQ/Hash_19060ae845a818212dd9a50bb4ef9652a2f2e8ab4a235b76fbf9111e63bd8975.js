goog.provide('quid2.module.Service.Org.Quid2.Language.QQ.Hash_19060ae845a818212dd9a50bb4ef9652a2f2e8ab4a235b76fbf9111e63bd8975');
goog.require('quid2.std');
goog.require('quid2.module.Service.Org.Quid2.Language.QQ.Hash_20ee404c498d46c91318301b2829de7be66f73436a916263772975b1c314ab00');
goog.require('quid2.module.Service.Org.Quid2.Language.QQ.Hash_aaaf360d83bef60c0f086a45d610ee4644bc017eb1e17d4f30769bdac5cba1d3');
goog.require('quid2.module.Data.Ref.Hash_380d3344c306e7f70b9cff78b9eebd922dc765caecde389796a59a35f209229f');

quid2.module.Service.Org.Quid2.Language.QQ.Hash_19060ae845a818212dd9a50bb4ef9652a2f2e8ab4a235b76fbf9111e63bd8975 = (function () {
var s = quid2.std;
/*
data AbsName  where 
  AbsName :: Data.Ref.Hash_380d3344c306e7f70b9cff78b9eebd922dc765caecde389796a59a35f209229f.Ref Service.Org.Quid2.Language.QQ.Hash_aaaf360d83bef60c0f086a45d610ee4644bc017eb1e17d4f30769bdac5cba1d3.DataDecl InternalAbsName -> AbsName
  AbsNamePart :: Data.Ref.Hash_380d3344c306e7f70b9cff78b9eebd922dc765caecde389796a59a35f209229f.Ref [Service.Org.Quid2.Language.QQ.Hash_aaaf360d83bef60c0f086a45d610ee4644bc017eb1e17d4f30769bdac5cba1d3.DataDecl InternalAbsName] -> Int64 -> AbsName
*/

function AbsName() {this.value=[arguments[0]];};
s.asCons(AbsName,"AbsName",0,function (bs) {return new AbsName(new quid2.module.Data.Ref.Hash_380d3344c306e7f70b9cff78b9eebd922dc765caecde389796a59a35f209229f.Ref$(new quid2.module.Service.Org.Quid2.Language.QQ.Hash_aaaf360d83bef60c0f086a45d610ee4644bc017eb1e17d4f30769bdac5cba1d3.DataDecl$(InternalAbsName$)).decode(bs));});

function AbsNamePart() {this.value=[arguments[0],s.int64(arguments[1])];};
s.asCons(AbsNamePart,"AbsNamePart",1,function (bs) {return new AbsNamePart(new quid2.module.Data.Ref.Hash_380d3344c306e7f70b9cff78b9eebd922dc765caecde389796a59a35f209229f.Ref$(new s.List$(new quid2.module.Service.Org.Quid2.Language.QQ.Hash_aaaf360d83bef60c0f086a45d610ee4644bc017eb1e17d4f30769bdac5cba1d3.DataDecl$(InternalAbsName$))).decode(bs),s.Int64.decode(bs));});

/*
data InternalAbsName  where 
  InternalName :: Service.Org.Quid2.Language.QQ.Hash_20ee404c498d46c91318301b2829de7be66f73436a916263772975b1c314ab00.QualName -> InternalAbsName
  ExternalName :: AbsName -> InternalAbsName
*/

function InternalName() {this.value=[arguments[0]];};
s.asCons(InternalName,"InternalName",0,function (bs) {return new InternalName(quid2.module.Service.Org.Quid2.Language.QQ.Hash_20ee404c498d46c91318301b2829de7be66f73436a916263772975b1c314ab00.QualName$.decode(bs));});

function ExternalName() {this.value=[arguments[0]];};
s.asCons(ExternalName,"ExternalName",1,function (bs) {return new ExternalName(AbsName$.decode(bs));});


var AbsName$={value:[]};
s.asType0(AbsName$,"AbsName$",[AbsName,AbsNamePart]);

var InternalAbsName$={value:[]};
s.asType0(InternalAbsName$,"InternalAbsName$",[InternalName,ExternalName]);



return s.defs("Service.Org.Quid2.Language.QQ.Hash_19060ae845a818212dd9a50bb4ef9652a2f2e8ab4a235b76fbf9111e63bd8975",{},{AbsName$:AbsName$,InternalAbsName$:InternalAbsName$,AbsName:AbsName,AbsNamePart:AbsNamePart,InternalName:InternalName,ExternalName:ExternalName});
})();

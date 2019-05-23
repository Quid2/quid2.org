goog.provide('quid2.module.Language.QQ.Hash_aa0d10cba650e2a5de4e22ab15e3ac173adc1d670c565a8bad8277892e854fad');
goog.require('quid2.std');
goog.require('quid2.module.Language.QQ.Hash_431d514c387f5904cd468e3e8c0457fd2970548ed1f0a33e9a558a8049e9797d');
goog.require('quid2.module.Language.QQ.Hash_40cb36661feae3a9e62ab3fdb86f95e9a507dc6f15da7e64a6e95a1510cf930d');
goog.require('quid2.module.Data.Ref.Hash_380d3344c306e7f70b9cff78b9eebd922dc765caecde389796a59a35f209229f');

quid2.module.Language.QQ.Hash_aa0d10cba650e2a5de4e22ab15e3ac173adc1d670c565a8bad8277892e854fad = (function () {
var s = quid2.std;
/*
data AbsName  where 
  AbsName :: Data.Ref.Hash_380d3344c306e7f70b9cff78b9eebd922dc765caecde389796a59a35f209229f.Ref Language.QQ.Hash_40cb36661feae3a9e62ab3fdb86f95e9a507dc6f15da7e64a6e95a1510cf930d.DataDecl InternalAbsName -> AbsName
  AbsNamePart :: Data.Ref.Hash_380d3344c306e7f70b9cff78b9eebd922dc765caecde389796a59a35f209229f.Ref [Language.QQ.Hash_40cb36661feae3a9e62ab3fdb86f95e9a507dc6f15da7e64a6e95a1510cf930d.DataDecl InternalAbsName] -> Int64 -> AbsName
*/

function AbsName() {this.value=[arguments[0]];};
s.asCons(AbsName,"AbsName",0,function (bs) {return new AbsName(new quid2.module.Data.Ref.Hash_380d3344c306e7f70b9cff78b9eebd922dc765caecde389796a59a35f209229f.Ref$(new quid2.module.Language.QQ.Hash_40cb36661feae3a9e62ab3fdb86f95e9a507dc6f15da7e64a6e95a1510cf930d.DataDecl$(InternalAbsName$)).decode(bs));});

function AbsNamePart() {this.value=[arguments[0],s.int64(arguments[1])];};
s.asCons(AbsNamePart,"AbsNamePart",1,function (bs) {return new AbsNamePart(new quid2.module.Data.Ref.Hash_380d3344c306e7f70b9cff78b9eebd922dc765caecde389796a59a35f209229f.Ref$(new s.List$(new quid2.module.Language.QQ.Hash_40cb36661feae3a9e62ab3fdb86f95e9a507dc6f15da7e64a6e95a1510cf930d.DataDecl$(InternalAbsName$))).decode(bs),s.Int64.decode(bs));});

/*
data InternalAbsName  where 
  InternalName :: Language.QQ.Hash_431d514c387f5904cd468e3e8c0457fd2970548ed1f0a33e9a558a8049e9797d.QualName -> InternalAbsName
  ExternalName :: AbsName -> InternalAbsName
*/

function InternalName() {this.value=[arguments[0]];};
s.asCons(InternalName,"InternalName",0,function (bs) {return new InternalName(quid2.module.Language.QQ.Hash_431d514c387f5904cd468e3e8c0457fd2970548ed1f0a33e9a558a8049e9797d.QualName$.decode(bs));});

function ExternalName() {this.value=[arguments[0]];};
s.asCons(ExternalName,"ExternalName",1,function (bs) {return new ExternalName(AbsName$.decode(bs));});


var AbsName$={value:[]};
s.asType0(AbsName$,"AbsName$",[AbsName,AbsNamePart]);

var InternalAbsName$={value:[]};
s.asType0(InternalAbsName$,"InternalAbsName$",[InternalName,ExternalName]);



return s.defs("Language.QQ.Hash_aa0d10cba650e2a5de4e22ab15e3ac173adc1d670c565a8bad8277892e854fad",{},{AbsName$:AbsName$,InternalAbsName$:InternalAbsName$,AbsName:AbsName,AbsNamePart:AbsNamePart,InternalName:InternalName,ExternalName:ExternalName});
})();

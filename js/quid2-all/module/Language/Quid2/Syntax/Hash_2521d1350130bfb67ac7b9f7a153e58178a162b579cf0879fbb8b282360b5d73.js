goog.provide('quid2.module.Language.Quid2.Syntax.Hash_2521d1350130bfb67ac7b9f7a153e58178a162b579cf0879fbb8b282360b5d73');
goog.require('quid2.std');
goog.require('quid2.module.Language.Quid2.Syntax.Hash_3f698b6205fd26fe8a20a9958596446e6ebb4a79ad5843e4c43933bf6a13152d');

quid2.module.Language.Quid2.Syntax.Hash_2521d1350130bfb67ac7b9f7a153e58178a162b579cf0879fbb8b282360b5d73 = (function () {
var s = quid2.std;
/*
data BangType  where 
  BangedTy :: Language.Quid2.Syntax.Hash_3f698b6205fd26fe8a20a9958596446e6ebb4a79ad5843e4c43933bf6a13152d.Type -> BangType
  UnBangedTy :: Language.Quid2.Syntax.Hash_3f698b6205fd26fe8a20a9958596446e6ebb4a79ad5843e4c43933bf6a13152d.Type -> BangType
*/

function BangedTy() {this.value=[arguments[0]];};
s.asCons(BangedTy,"BangedTy",0,function (bs) {return new BangedTy(quid2.module.Language.Quid2.Syntax.Hash_3f698b6205fd26fe8a20a9958596446e6ebb4a79ad5843e4c43933bf6a13152d.Type$.decode(bs));});

function UnBangedTy() {this.value=[arguments[0]];};
s.asCons(UnBangedTy,"UnBangedTy",1,function (bs) {return new UnBangedTy(quid2.module.Language.Quid2.Syntax.Hash_3f698b6205fd26fe8a20a9958596446e6ebb4a79ad5843e4c43933bf6a13152d.Type$.decode(bs));});


var BangType$={value:[]};
s.asType0(BangType$,"BangType$",[BangedTy,UnBangedTy]);



return s.defs("Language.Quid2.Syntax.Hash_2521d1350130bfb67ac7b9f7a153e58178a162b579cf0879fbb8b282360b5d73",{},{BangType$:BangType$,BangedTy:BangedTy,UnBangedTy:UnBangedTy});
})();

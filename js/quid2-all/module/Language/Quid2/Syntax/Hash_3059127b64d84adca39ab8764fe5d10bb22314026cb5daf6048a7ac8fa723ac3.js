goog.provide('quid2.module.Language.Quid2.Syntax.Hash_3059127b64d84adca39ab8764fe5d10bb22314026cb5daf6048a7ac8fa723ac3');
goog.require('quid2.std');

quid2.module.Language.Quid2.Syntax.Hash_3059127b64d84adca39ab8764fe5d10bb22314026cb5daf6048a7ac8fa723ac3 = (function () {
var s = quid2.std;
/*
data Assoc  where 
  AssocNone :: Assoc
  AssocLeft :: Assoc
  AssocRight :: Assoc
*/

function AssocNone() {this.value=[];};
s.asCons(AssocNone,"AssocNone",0,function (bs) {return new AssocNone();});

function AssocLeft() {this.value=[];};
s.asCons(AssocLeft,"AssocLeft",1,function (bs) {return new AssocLeft();});

function AssocRight() {this.value=[];};
s.asCons(AssocRight,"AssocRight",2,function (bs) {return new AssocRight();});


var Assoc$={value:[]};
s.asType0(Assoc$,"Assoc$",[AssocNone,AssocLeft,AssocRight]);



return s.defs("Language.Quid2.Syntax.Hash_3059127b64d84adca39ab8764fe5d10bb22314026cb5daf6048a7ac8fa723ac3",{},{Assoc$:Assoc$,AssocNone:AssocNone,AssocLeft:AssocLeft,AssocRight:AssocRight});
})();

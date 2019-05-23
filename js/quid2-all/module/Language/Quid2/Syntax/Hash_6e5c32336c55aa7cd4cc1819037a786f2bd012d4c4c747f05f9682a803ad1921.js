goog.provide('quid2.module.Language.Quid2.Syntax.Hash_6e5c32336c55aa7cd4cc1819037a786f2bd012d4c4c747f05f9682a803ad1921');
goog.require('quid2.std');
goog.require('quid2.module.Language.Quid2.Syntax.Hash_2521d1350130bfb67ac7b9f7a153e58178a162b579cf0879fbb8b282360b5d73');
goog.require('quid2.module.Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1');

quid2.module.Language.Quid2.Syntax.Hash_6e5c32336c55aa7cd4cc1819037a786f2bd012d4c4c747f05f9682a803ad1921 = (function () {
var s = quid2.std;
/*
data ConDecl  where 
  ConDecl :: Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1.Name -> [Language.Quid2.Syntax.Hash_2521d1350130bfb67ac7b9f7a153e58178a162b579cf0879fbb8b282360b5d73.BangType] -> ConDecl
  InfixConDecl :: Language.Quid2.Syntax.Hash_2521d1350130bfb67ac7b9f7a153e58178a162b579cf0879fbb8b282360b5d73.BangType -> Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1.Name -> Language.Quid2.Syntax.Hash_2521d1350130bfb67ac7b9f7a153e58178a162b579cf0879fbb8b282360b5d73.BangType -> ConDecl
  RecDecl :: Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1.Name -> [([Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1.Name],Language.Quid2.Syntax.Hash_2521d1350130bfb67ac7b9f7a153e58178a162b579cf0879fbb8b282360b5d73.BangType)] -> ConDecl
*/

function ConDecl() {this.value=[arguments[0],s.list(arguments[1])];};
s.asCons(ConDecl,"ConDecl",0,function (bs) {return new ConDecl(quid2.module.Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1.Name$.decode(bs),new s.List$(quid2.module.Language.Quid2.Syntax.Hash_2521d1350130bfb67ac7b9f7a153e58178a162b579cf0879fbb8b282360b5d73.BangType$).decode(bs));});

function InfixConDecl() {this.value=[arguments[0],arguments[1],arguments[2]];};
s.asCons(InfixConDecl,"InfixConDecl",1,function (bs) {return new InfixConDecl(quid2.module.Language.Quid2.Syntax.Hash_2521d1350130bfb67ac7b9f7a153e58178a162b579cf0879fbb8b282360b5d73.BangType$.decode(bs),quid2.module.Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1.Name$.decode(bs),quid2.module.Language.Quid2.Syntax.Hash_2521d1350130bfb67ac7b9f7a153e58178a162b579cf0879fbb8b282360b5d73.BangType$.decode(bs));});

function RecDecl() {this.value=[arguments[0],s.list(arguments[1])];};
s.asCons(RecDecl,"RecDecl",2,function (bs) {return new RecDecl(quid2.module.Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1.Name$.decode(bs),new s.List$(new s.Tuple$(new s.List$(quid2.module.Language.Quid2.Syntax.Hash_8016eea84695847b0006c058b2a0aa6f7d2fd5088ba19b646fa60ee2aa9aa3e1.Name$),quid2.module.Language.Quid2.Syntax.Hash_2521d1350130bfb67ac7b9f7a153e58178a162b579cf0879fbb8b282360b5d73.BangType$)).decode(bs));});


var ConDecl$={value:[]};
s.asType0(ConDecl$,"ConDecl$",[ConDecl,InfixConDecl,RecDecl]);



return s.defs("Language.Quid2.Syntax.Hash_6e5c32336c55aa7cd4cc1819037a786f2bd012d4c4c747f05f9682a803ad1921",{},{ConDecl$:ConDecl$,ConDecl:ConDecl,InfixConDecl:InfixConDecl,RecDecl:RecDecl});
})();

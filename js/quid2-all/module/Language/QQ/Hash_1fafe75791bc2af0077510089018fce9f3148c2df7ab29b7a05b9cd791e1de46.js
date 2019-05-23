goog.provide('quid2.module.Language.QQ.Hash_1fafe75791bc2af0077510089018fce9f3148c2df7ab29b7a05b9cd791e1de46');
goog.require('quid2.std');
goog.require('quid2.module.Language.QQ.Hash_a25f345b9906a8b90a1ba475c9f18ff98effd320a4290f2a5dde70fa3348fefb');
goog.require('quid2.module.Language.QQ.Hash_d03a9d16e4121f64a997cc509c27fb5c46a0a2dca60623dbc869c295280f2128');
goog.require('quid2.module.Data.Maybe.Hash_fe1a9ed1fe3015c135b766464e0bcb971d1cd2b1aa733a473dd1055ba4b7eb60');
goog.require('quid2.module.Data.Word16.Verb_00000B446174612E576F72643136000006576F7264313600000101000006576F7264313600000000000B446174612E576F72643136000006576F726431360000');

quid2.module.Language.QQ.Hash_1fafe75791bc2af0077510089018fce9f3148c2df7ab29b7a05b9cd791e1de46 = (function () {
var s = quid2.std;
/*
data Cons a where 
  Cons :: Language.QQ.Hash_d03a9d16e4121f64a997cc509c27fb5c46a0a2dca60623dbc869c295280f2128.Name -> Data.Word16.Verb_00000B446174612E576F72643136000006576F7264313600000101000006576F7264313600000000000B446174612E576F72643136000006576F726431360000.Word16 -> Data.Maybe.Hash_fe1a9ed1fe3015c135b766464e0bcb971d1cd2b1aa733a473dd1055ba4b7eb60.Maybe [Language.QQ.Hash_d03a9d16e4121f64a997cc509c27fb5c46a0a2dca60623dbc869c295280f2128.Name] -> Language.QQ.Hash_a25f345b9906a8b90a1ba475c9f18ff98effd320a4290f2a5dde70fa3348fefb.Type a -> Cons a
*/

function Cons() {this.value=[arguments[0],arguments[1],arguments[2],arguments[3]];};
s.asCons(Cons,"Cons",0,function (bs,types) {return new Cons(quid2.module.Language.QQ.Hash_d03a9d16e4121f64a997cc509c27fb5c46a0a2dca60623dbc869c295280f2128.Name$.decode(bs),quid2.module.Data.Word16.Verb_00000B446174612E576F72643136000006576F7264313600000101000006576F7264313600000000000B446174612E576F72643136000006576F726431360000.Word16$.decode(bs),new quid2.module.Data.Maybe.Hash_fe1a9ed1fe3015c135b766464e0bcb971d1cd2b1aa733a473dd1055ba4b7eb60.Maybe$(new s.List$(quid2.module.Language.QQ.Hash_d03a9d16e4121f64a997cc509c27fb5c46a0a2dca60623dbc869c295280f2128.Name$)).decode(bs),new quid2.module.Language.QQ.Hash_a25f345b9906a8b90a1ba475c9f18ff98effd320a4290f2a5dde70fa3348fefb.Type$(types[0]).decode(bs));});


function Cons$() {this.value=[arguments[0]];};
s.asType(Cons$,"Cons$",[Cons]);



return s.defs("Language.QQ.Hash_1fafe75791bc2af0077510089018fce9f3148c2df7ab29b7a05b9cd791e1de46",{},{Cons$:Cons$,Cons:Cons});
})();

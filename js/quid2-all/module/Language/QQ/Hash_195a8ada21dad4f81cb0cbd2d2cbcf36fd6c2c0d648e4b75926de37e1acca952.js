goog.provide('quid2.module.Language.QQ.Hash_195a8ada21dad4f81cb0cbd2d2cbcf36fd6c2c0d648e4b75926de37e1acca952');
goog.require('quid2.std');
goog.require('quid2.module.Data.Maybe.Hash_fe1a9ed1fe3015c135b766464e0bcb971d1cd2b1aa733a473dd1055ba4b7eb60');
goog.require('quid2.module.Language.QQ.Hash_d03a9d16e4121f64a997cc509c27fb5c46a0a2dca60623dbc869c295280f2128');

quid2.module.Language.QQ.Hash_195a8ada21dad4f81cb0cbd2d2cbcf36fd6c2c0d648e4b75926de37e1acca952 = (function () {
var s = quid2.std;
/*
data QualNamePos  where 
  QualNamePos :: [Char] -> Language.QQ.Hash_d03a9d16e4121f64a997cc509c27fb5c46a0a2dca60623dbc869c295280f2128.Name -> Data.Maybe.Hash_fe1a9ed1fe3015c135b766464e0bcb971d1cd2b1aa733a473dd1055ba4b7eb60.Maybe Int32 -> QualNamePos
*/

function QualNamePos() {this.value=[s.string(arguments[0]),arguments[1],arguments[2]];};
s.asCons(QualNamePos,"QualNamePos",0,function (bs) {return new QualNamePos(s.String.decode(bs),quid2.module.Language.QQ.Hash_d03a9d16e4121f64a997cc509c27fb5c46a0a2dca60623dbc869c295280f2128.Name$.decode(bs),new quid2.module.Data.Maybe.Hash_fe1a9ed1fe3015c135b766464e0bcb971d1cd2b1aa733a473dd1055ba4b7eb60.Maybe$(s.Int32).decode(bs));});


var QualNamePos$={value:[]};
s.asType0(QualNamePos$,"QualNamePos$",[QualNamePos]);



return s.defs("Language.QQ.Hash_195a8ada21dad4f81cb0cbd2d2cbcf36fd6c2c0d648e4b75926de37e1acca952",{},{QualNamePos$:QualNamePos$,QualNamePos:QualNamePos});
})();

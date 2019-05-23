goog.provide('quid2.module.Language.QQ.Hash_d03a9d16e4121f64a997cc509c27fb5c46a0a2dca60623dbc869c295280f2128');
goog.require('quid2.std');

quid2.module.Language.QQ.Hash_d03a9d16e4121f64a997cc509c27fb5c46a0a2dca60623dbc869c295280f2128 = (function () {
var s = quid2.std;
/*
data Name  where 
  Id :: [Char] -> Name
  Symbol :: [Char] -> Name
*/

function Id() {this.value=[s.string(arguments[0])];};
s.asCons(Id,"Id",0,function (bs) {return new Id(s.String.decode(bs));});

function Symbol() {this.value=[s.string(arguments[0])];};
s.asCons(Symbol,"Symbol",1,function (bs) {return new Symbol(s.String.decode(bs));});


var Name$={value:[]};
s.asType0(Name$,"Name$",[Id,Symbol]);



return s.defs("Language.QQ.Hash_d03a9d16e4121f64a997cc509c27fb5c46a0a2dca60623dbc869c295280f2128",{},{Name$:Name$,Id:Id,Symbol:Symbol});
})();

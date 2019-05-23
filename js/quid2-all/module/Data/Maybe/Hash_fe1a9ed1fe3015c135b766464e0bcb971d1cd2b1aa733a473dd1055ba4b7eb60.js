goog.provide('quid2.module.Data.Maybe.Hash_fe1a9ed1fe3015c135b766464e0bcb971d1cd2b1aa733a473dd1055ba4b7eb60');
goog.require('quid2.std');

quid2.module.Data.Maybe.Hash_fe1a9ed1fe3015c135b766464e0bcb971d1cd2b1aa733a473dd1055ba4b7eb60 = (function () {
var s = quid2.std;
/*
data Maybe a where 
  Nothing :: Maybe a
  Just :: a -> Maybe a
*/

function Nothing() {this.value=[];};
s.asCons(Nothing,"Nothing",0,function (bs,types) {return new Nothing();});

function Just() {this.value=[arguments[0]];};
s.asCons(Just,"Just",1,function (bs,types) {return new Just(types[0].decode(bs));});


function Maybe$() {this.value=[arguments[0]];};
s.asType(Maybe$,"Maybe$",[Nothing,Just]);



return s.defs("Data.Maybe.Hash_fe1a9ed1fe3015c135b766464e0bcb971d1cd2b1aa733a473dd1055ba4b7eb60",{},{Maybe$:Maybe$,Nothing:Nothing,Just:Just});
})();

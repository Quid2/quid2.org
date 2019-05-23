goog.provide('quid2.module.Data.Ref.Hash_380d3344c306e7f70b9cff78b9eebd922dc765caecde389796a59a35f209229f');
goog.require('quid2.std');

quid2.module.Data.Ref.Hash_380d3344c306e7f70b9cff78b9eebd922dc765caecde389796a59a35f209229f = (function () {
var s = quid2.std;
/*
data Ref a where 
  Verb :: [Char] -> Ref a
  Hash :: [Char] -> Ref a
*/

function Verb() {this.value=[s.string(arguments[0])];};
s.asCons(Verb,"Verb",0,function (bs,types) {return new Verb(s.String.decode(bs));});

function Hash() {this.value=[s.string(arguments[0])];};
s.asCons(Hash,"Hash",1,function (bs,types) {return new Hash(s.String.decode(bs));});


function Ref$() {this.value=[arguments[0]];};
s.asType(Ref$,"Ref$",[Verb,Hash]);



return s.defs("Data.Ref.Hash_380d3344c306e7f70b9cff78b9eebd922dc765caecde389796a59a35f209229f",{},{Ref$:Ref$,Verb:Verb,Hash:Hash});
})();

goog.provide('quid2.module.Language.Note.Hash_7b2f5198fdb7357399e97811b56289bff4fb4b040dee8c54d49778facba96908');
goog.require('quid2.std');

quid2.module.Language.Note.Hash_7b2f5198fdb7357399e97811b56289bff4fb4b040dee8c54d49778facba96908 = (function () {
var s = quid2.std;
/*
data Rank  where 
  Must :: Rank
  Should :: Rank
  May :: Rank
*/

function Must() {this.value=[];};
s.asCons(Must,"Must",0,function (bs) {return new Must();});

function Should() {this.value=[];};
s.asCons(Should,"Should",1,function (bs) {return new Should();});

function May() {this.value=[];};
s.asCons(May,"May",2,function (bs) {return new May();});


var Rank$={value:[]};
s.asType0(Rank$,"Rank$",[Must,Should,May]);



return s.defs("Language.Note.Hash_7b2f5198fdb7357399e97811b56289bff4fb4b040dee8c54d49778facba96908",{},{Rank$:Rank$,Must:Must,Should:Should,May:May});
})();

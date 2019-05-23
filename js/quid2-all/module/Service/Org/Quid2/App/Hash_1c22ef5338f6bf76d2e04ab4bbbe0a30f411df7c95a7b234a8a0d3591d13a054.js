goog.provide('quid2.module.Service.Org.Quid2.App.Hash_1c22ef5338f6bf76d2e04ab4bbbe0a30f411df7c95a7b234a8a0d3591d13a054');
goog.require('quid2.std');

quid2.module.Service.Org.Quid2.App.Hash_1c22ef5338f6bf76d2e04ab4bbbe0a30f411df7c95a7b234a8a0d3591d13a054 = (function () {
var s = quid2.std;
/*
data URI  where 
  URI :: [Char] -> URI
*/

function URI() {this.value=[s.string(arguments[0])];};
s.asCons(URI,"URI",0,function (bs) {return new URI(s.String.decode(bs));});


var URI$={value:[]};
s.asType0(URI$,"URI$",[URI]);



return s.defs("Service.Org.Quid2.App.Hash_1c22ef5338f6bf76d2e04ab4bbbe0a30f411df7c95a7b234a8a0d3591d13a054",{},{URI$:URI$,URI:URI});
})();

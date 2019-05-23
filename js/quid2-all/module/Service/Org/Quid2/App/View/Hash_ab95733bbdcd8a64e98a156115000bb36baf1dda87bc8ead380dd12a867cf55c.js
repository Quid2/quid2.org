goog.provide('quid2.module.Service.Org.Quid2.App.View.Hash_ab95733bbdcd8a64e98a156115000bb36baf1dda87bc8ead380dd12a867cf55c');
goog.require('quid2.std');

quid2.module.Service.Org.Quid2.App.View.Hash_ab95733bbdcd8a64e98a156115000bb36baf1dda87bc8ead380dd12a867cf55c = (function () {
var s = quid2.std;
/*
data Exports  where 
  Exports :: [Char] -> Exports
*/

function Exports() {this.value=[s.string(arguments[0])];};
s.asCons(Exports,"Exports",0,function (bs) {return new Exports(s.String.decode(bs));});


var Exports$={value:[]};
s.asType0(Exports$,"Exports$",[Exports]);



return s.defs("Service.Org.Quid2.App.View.Hash_ab95733bbdcd8a64e98a156115000bb36baf1dda87bc8ead380dd12a867cf55c",{},{Exports$:Exports$,Exports:Exports});
})();

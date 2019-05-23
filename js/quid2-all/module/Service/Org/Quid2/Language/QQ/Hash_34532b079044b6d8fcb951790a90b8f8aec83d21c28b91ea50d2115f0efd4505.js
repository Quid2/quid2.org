goog.provide('quid2.module.Service.Org.Quid2.Language.QQ.Hash_34532b079044b6d8fcb951790a90b8f8aec83d21c28b91ea50d2115f0efd4505');
goog.require('quid2.std');

quid2.module.Service.Org.Quid2.Language.QQ.Hash_34532b079044b6d8fcb951790a90b8f8aec83d21c28b91ea50d2115f0efd4505 = (function () {
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



return s.defs("Service.Org.Quid2.Language.QQ.Hash_34532b079044b6d8fcb951790a90b8f8aec83d21c28b91ea50d2115f0efd4505",{},{Name$:Name$,Id:Id,Symbol:Symbol});
})();

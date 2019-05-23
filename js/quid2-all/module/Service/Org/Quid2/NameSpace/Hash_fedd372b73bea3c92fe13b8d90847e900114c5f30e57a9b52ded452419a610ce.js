goog.provide('quid2.module.Service.Org.Quid2.NameSpace.Hash_fedd372b73bea3c92fe13b8d90847e900114c5f30e57a9b52ded452419a610ce');
goog.require('quid2.std');

quid2.module.Service.Org.Quid2.NameSpace.Hash_fedd372b73bea3c92fe13b8d90847e900114c5f30e57a9b52ded452419a610ce = (function () {
var s = quid2.std;
/*
data Change a b where 
  DelOne :: a -> Change a b
  AddOne :: a -> b -> Change a b
  AddMany :: [(a,b)] -> Change a b
*/

function DelOne() {this.value=[arguments[0]];};
s.asCons(DelOne,"DelOne",0,function (bs,types) {return new DelOne(types[0].decode(bs));});

function AddOne() {this.value=[arguments[0],arguments[1]];};
s.asCons(AddOne,"AddOne",1,function (bs,types) {return new AddOne(types[0].decode(bs),types[1].decode(bs));});

function AddMany() {this.value=[s.list(arguments[0])];};
s.asCons(AddMany,"AddMany",2,function (bs,types) {return new AddMany(new s.List$(new s.Tuple$(types[0],types[1])).decode(bs));});


function Change$() {this.value=[arguments[0],arguments[1]];};
s.asType(Change$,"Change$",[DelOne,AddOne,AddMany]);



return s.defs("Service.Org.Quid2.NameSpace.Hash_fedd372b73bea3c92fe13b8d90847e900114c5f30e57a9b52ded452419a610ce",{},{Change$:Change$,DelOne:DelOne,AddOne:AddOne,AddMany:AddMany});
})();

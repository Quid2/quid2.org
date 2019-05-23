goog.provide('quid2.module.Language.Quid2.Syntax.Hash_09435cbcf5e20dba95712529257872f53e1767d38638e4d428dfc2630c2557e0');
goog.require('quid2.std');

quid2.module.Language.Quid2.Syntax.Hash_09435cbcf5e20dba95712529257872f53e1767d38638e4d428dfc2630c2557e0 = (function () {
var s = quid2.std;
/*
data SpecialCon  where 
  UnitCon :: SpecialCon
  ListCon :: SpecialCon
  FunCon :: SpecialCon
  TupleCon :: Int64 -> SpecialCon
  Cons :: SpecialCon
*/

function UnitCon() {this.value=[];};
s.asCons(UnitCon,"UnitCon",0,function (bs) {return new UnitCon();});

function ListCon() {this.value=[];};
s.asCons(ListCon,"ListCon",1,function (bs) {return new ListCon();});

function FunCon() {this.value=[];};
s.asCons(FunCon,"FunCon",2,function (bs) {return new FunCon();});

function TupleCon() {this.value=[s.int64(arguments[0])];};
s.asCons(TupleCon,"TupleCon",3,function (bs) {return new TupleCon(s.Int64.decode(bs));});

function Cons() {this.value=[];};
s.asCons(Cons,"Cons",4,function (bs) {return new Cons();});


var SpecialCon$={value:[]};
s.asType0(SpecialCon$,"SpecialCon$",[UnitCon,ListCon,FunCon,TupleCon,Cons]);



return s.defs("Language.Quid2.Syntax.Hash_09435cbcf5e20dba95712529257872f53e1767d38638e4d428dfc2630c2557e0",{},{SpecialCon$:SpecialCon$,UnitCon:UnitCon,ListCon:ListCon,FunCon:FunCon,TupleCon:TupleCon,Cons:Cons});
})();

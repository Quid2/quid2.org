goog.provide('quid2.module.Data.String.Patch.Hash_ad09b4eb1c7a9876fcdd4031a75754b84622ecc45eb17f9838703a87d8dacd81');
goog.require('quid2.std');

quid2.module.Data.String.Patch.Hash_ad09b4eb1c7a9876fcdd4031a75754b84622ecc45eb17f9838703a87d8dacd81 = (function () {
var s = quid2.std;
/*
data PatchItem  where 
  Keep :: Word32 -> PatchItem
  Drop :: Word32 -> PatchItem
  Ins :: [Char] -> PatchItem
*/

function Keep() {this.value=[s.word32(arguments[0])];};
s.asCons(Keep,"Keep",0,function (bs) {return new Keep(s.Word32.decode(bs));});

function Drop() {this.value=[s.word32(arguments[0])];};
s.asCons(Drop,"Drop",1,function (bs) {return new Drop(s.Word32.decode(bs));});

function Ins() {this.value=[s.string(arguments[0])];};
s.asCons(Ins,"Ins",2,function (bs) {return new Ins(s.String.decode(bs));});


var PatchItem$={value:[]};
s.asType0(PatchItem$,"PatchItem$",[Keep,Drop,Ins]);



return s.defs("Data.String.Patch.Hash_ad09b4eb1c7a9876fcdd4031a75754b84622ecc45eb17f9838703a87d8dacd81",{},{PatchItem$:PatchItem$,Keep:Keep,Drop:Drop,Ins:Ins});
})();

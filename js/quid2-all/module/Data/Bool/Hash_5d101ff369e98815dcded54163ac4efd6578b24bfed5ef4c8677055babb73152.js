goog.provide('quid2.module.Data.Bool.Hash_5d101ff369e98815dcded54163ac4efd6578b24bfed5ef4c8677055babb73152');
goog.require('quid2.std');

quid2.module.Data.Bool.Hash_5d101ff369e98815dcded54163ac4efd6578b24bfed5ef4c8677055babb73152 = (function () {
var s = quid2.std;
/*
data Bool  where 
  False :: Bool
  True :: Bool
*/

function False() {this.value=[];};
s.asCons(False,"False",0,function (bs) {return new False();});

function True() {this.value=[];};
s.asCons(True,"True",1,function (bs) {return new True();});


var Bool$={value:[]};
s.asType0(Bool$,"Bool$",[False,True]);



return s.defs("Data.Bool.Hash_5d101ff369e98815dcded54163ac4efd6578b24bfed5ef4c8677055babb73152",{},{Bool$:Bool$,False:False,True:True});
})();

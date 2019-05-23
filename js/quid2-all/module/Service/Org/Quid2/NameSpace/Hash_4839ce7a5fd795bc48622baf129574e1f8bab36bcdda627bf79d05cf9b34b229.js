goog.provide('quid2.module.Service.Org.Quid2.NameSpace.Hash_4839ce7a5fd795bc48622baf129574e1f8bab36bcdda627bf79d05cf9b34b229');
goog.require('quid2.std');

quid2.module.Service.Org.Quid2.NameSpace.Hash_4839ce7a5fd795bc48622baf129574e1f8bab36bcdda627bf79d05cf9b34b229 = (function () {
var s = quid2.std;
/*
data Private  where 
  Private :: [[Char]] -> Private
*/

function Private() {this.value=[s.list(arguments[0])];};
s.asCons(Private,"Private",0,function (bs) {return new Private(new s.List$(s.String).decode(bs));});


var Private$={value:[]};
s.asType0(Private$,"Private$",[Private]);



return s.defs("Service.Org.Quid2.NameSpace.Hash_4839ce7a5fd795bc48622baf129574e1f8bab36bcdda627bf79d05cf9b34b229",{},{Private$:Private$,Private:Private});
})();

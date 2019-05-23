goog.provide('quid2.module.Service.Org.Quid2.NameSpace.Hash_f44f67c1c2efcc1340561a85cbafb1fd446ae1f83991f17f3a775e9f97fc057f');
goog.require('quid2.std');

quid2.module.Service.Org.Quid2.NameSpace.Hash_f44f67c1c2efcc1340561a85cbafb1fd446ae1f83991f17f3a775e9f97fc057f = (function () {
var s = quid2.std;
/*
data Public  where 
  Public :: [[Char]] -> Public
*/

function Public() {this.value=[s.list(arguments[0])];};
s.asCons(Public,"Public",0,function (bs) {return new Public(new s.List$(s.String).decode(bs));});


var Public$={value:[]};
s.asType0(Public$,"Public$",[Public]);



return s.defs("Service.Org.Quid2.NameSpace.Hash_f44f67c1c2efcc1340561a85cbafb1fd446ae1f83991f17f3a775e9f97fc057f",{},{Public$:Public$,Public:Public});
})();

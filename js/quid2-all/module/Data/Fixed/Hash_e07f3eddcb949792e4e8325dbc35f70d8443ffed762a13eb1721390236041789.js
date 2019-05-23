goog.provide('quid2.module.Data.Fixed.Hash_e07f3eddcb949792e4e8325dbc35f70d8443ffed762a13eb1721390236041789');
goog.require('quid2.std');

quid2.module.Data.Fixed.Hash_e07f3eddcb949792e4e8325dbc35f70d8443ffed762a13eb1721390236041789 = (function () {
var s = quid2.std;
/*
data Fixed a where 
  MkFixed :: Integer -> Fixed a
*/

function MkFixed() {this.value=[s.integer(arguments[0])];};
s.asCons(MkFixed,"MkFixed",0,function (bs,types) {return new MkFixed(s.Integer.decode(bs));});


function Fixed$() {this.value=[arguments[0]];};
s.asType(Fixed$,"Fixed$",[MkFixed]);



return s.defs("Data.Fixed.Hash_e07f3eddcb949792e4e8325dbc35f70d8443ffed762a13eb1721390236041789",{},{Fixed$:Fixed$,MkFixed:MkFixed});
})();

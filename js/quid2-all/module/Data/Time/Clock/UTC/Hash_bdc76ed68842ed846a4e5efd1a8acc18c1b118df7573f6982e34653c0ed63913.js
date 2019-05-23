goog.provide('quid2.module.Data.Time.Clock.UTC.Hash_bdc76ed68842ed846a4e5efd1a8acc18c1b118df7573f6982e34653c0ed63913');
goog.require('quid2.std');
goog.require('quid2.module.Data.Fixed.Verb_00000A446174612E46697865640000034531320000010100000345313200000000000A446174612E46697865640000034531320000');
goog.require('quid2.module.Data.Fixed.Hash_e07f3eddcb949792e4e8325dbc35f70d8443ffed762a13eb1721390236041789');

quid2.module.Data.Time.Clock.UTC.Hash_bdc76ed68842ed846a4e5efd1a8acc18c1b118df7573f6982e34653c0ed63913 = (function () {
var s = quid2.std;
/*
data NominalDiffTime  where 
  MkNominalDiffTime :: Data.Fixed.Hash_e07f3eddcb949792e4e8325dbc35f70d8443ffed762a13eb1721390236041789.Fixed Data.Fixed.Verb_00000A446174612E46697865640000034531320000010100000345313200000000000A446174612E46697865640000034531320000.E12 -> NominalDiffTime
*/

function MkNominalDiffTime() {this.value=[arguments[0]];};
s.asCons(MkNominalDiffTime,"MkNominalDiffTime",0,function (bs) {return new MkNominalDiffTime(new quid2.module.Data.Fixed.Hash_e07f3eddcb949792e4e8325dbc35f70d8443ffed762a13eb1721390236041789.Fixed$(quid2.module.Data.Fixed.Verb_00000A446174612E46697865640000034531320000010100000345313200000000000A446174612E46697865640000034531320000.E12$).decode(bs));});


var NominalDiffTime$={value:[]};
s.asType0(NominalDiffTime$,"NominalDiffTime$",[MkNominalDiffTime]);



return s.defs("Data.Time.Clock.UTC.Hash_bdc76ed68842ed846a4e5efd1a8acc18c1b118df7573f6982e34653c0ed63913",{},{NominalDiffTime$:NominalDiffTime$,MkNominalDiffTime:MkNominalDiffTime});
})();

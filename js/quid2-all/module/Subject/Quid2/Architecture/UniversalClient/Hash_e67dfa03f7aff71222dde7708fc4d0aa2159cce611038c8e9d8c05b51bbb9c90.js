goog.provide('quid2.module.Subject.Quid2.Architecture.UniversalClient.Hash_e67dfa03f7aff71222dde7708fc4d0aa2159cce611038c8e9d8c05b51bbb9c90');
goog.require('quid2.std');

quid2.module.Subject.Quid2.Architecture.UniversalClient.Hash_e67dfa03f7aff71222dde7708fc4d0aa2159cce611038c8e9d8c05b51bbb9c90 = (function () {
var s = quid2.std;
/*
data SampleValue  where 
  SampleValue :: [Char] -> SampleValue
*/

function SampleValue() {this.value=[s.string(arguments[0])];};
s.asCons(SampleValue,"SampleValue",0,function (bs) {return new SampleValue(s.String.decode(bs));});


var SampleValue$={value:[]};
s.asType0(SampleValue$,"SampleValue$",[SampleValue]);



return s.defs("Subject.Quid2.Architecture.UniversalClient.Hash_e67dfa03f7aff71222dde7708fc4d0aa2159cce611038c8e9d8c05b51bbb9c90",{},{SampleValue$:SampleValue$,SampleValue:SampleValue});
})();

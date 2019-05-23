goog.provide('quid2.module.Finance.Price.Hash_a28daede8becd5b9145341b80bb6a80f5461cf4f6b5d5fcd7bde5bd8ebf5ebff');
goog.require('quid2.std');
goog.require('quid2.module.Finance.Currency.Hash_a582e9f46ebf777e710de19a98db7bdacc6b2636b73694fffaa75885a9720a40');

quid2.module.Finance.Price.Hash_a28daede8becd5b9145341b80bb6a80f5461cf4f6b5d5fcd7bde5bd8ebf5ebff = (function () {
var s = quid2.std;
/*
data Price  where 
  Price :: Double -> Finance.Currency.Hash_a582e9f46ebf777e710de19a98db7bdacc6b2636b73694fffaa75885a9720a40.Currency -> Price
*/

function Price() {this.value=[s.double(arguments[0]),arguments[1]];};
s.asCons(Price,"Price",0,function (bs) {return new Price(s.Double.decode(bs),quid2.module.Finance.Currency.Hash_a582e9f46ebf777e710de19a98db7bdacc6b2636b73694fffaa75885a9720a40.Currency$.decode(bs));});


var Price$={value:[]};
s.asType0(Price$,"Price$",[Price]);



return s.defs("Finance.Price.Hash_a28daede8becd5b9145341b80bb6a80f5461cf4f6b5d5fcd7bde5bd8ebf5ebff",{},{Price$:Price$,Price:Price});
})();

goog.provide('quid2.module.Network.Domain.Hash_38fd29d583e084e61f43eb4a899c4f4abf29672b7111406e06c47cc4248b9267');
goog.require('quid2.std');

quid2.module.Network.Domain.Hash_38fd29d583e084e61f43eb4a899c4f4abf29672b7111406e06c47cc4248b9267 = (function () {
var s = quid2.std;
/*
data Domain  where 
  Anonymous :: Domain
  OpenID :: [Char] -> Domain
  Dir :: [Char] -> Domain
  Email :: [Char] -> Domain
*/

function Anonymous() {this.value=[];};
s.asCons(Anonymous,"Anonymous",0,function (bs) {return new Anonymous();});

function OpenID() {this.value=[s.string(arguments[0])];};
s.asCons(OpenID,"OpenID",1,function (bs) {return new OpenID(s.String.decode(bs));});

function Dir() {this.value=[s.string(arguments[0])];};
s.asCons(Dir,"Dir",2,function (bs) {return new Dir(s.String.decode(bs));});

function Email() {this.value=[s.string(arguments[0])];};
s.asCons(Email,"Email",3,function (bs) {return new Email(s.String.decode(bs));});


var Domain$={value:[]};
s.asType0(Domain$,"Domain$",[Anonymous,OpenID,Dir,Email]);



return s.defs("Network.Domain.Hash_38fd29d583e084e61f43eb4a899c4f4abf29672b7111406e06c47cc4248b9267",{},{Domain$:Domain$,Anonymous:Anonymous,OpenID:OpenID,Dir:Dir,Email:Email});
})();

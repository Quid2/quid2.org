goog.provide('quid2.module.Service.Org.Quid2.NameSpace.Hash_0ea30fa2514b96ebfbd4326bdb9a0ba7a74aefd1471561d5f9f1a11b3f493fc2');
goog.require('quid2.std');
goog.require('quid2.module.Network.Domain.Hash_38fd29d583e084e61f43eb4a899c4f4abf29672b7111406e06c47cc4248b9267');

quid2.module.Service.Org.Quid2.NameSpace.Hash_0ea30fa2514b96ebfbd4326bdb9a0ba7a74aefd1471561d5f9f1a11b3f493fc2 = (function () {
var s = quid2.std;
/*
data PublicUser  where 
  PublicUser :: [[Char]] -> Network.Domain.Hash_38fd29d583e084e61f43eb4a899c4f4abf29672b7111406e06c47cc4248b9267.Domain -> PublicUser
*/

function PublicUser() {this.value=[s.list(arguments[0]),arguments[1]];};
s.asCons(PublicUser,"PublicUser",0,function (bs) {return new PublicUser(new s.List$(s.String).decode(bs),quid2.module.Network.Domain.Hash_38fd29d583e084e61f43eb4a899c4f4abf29672b7111406e06c47cc4248b9267.Domain$.decode(bs));});


var PublicUser$={value:[]};
s.asType0(PublicUser$,"PublicUser$",[PublicUser]);



return s.defs("Service.Org.Quid2.NameSpace.Hash_0ea30fa2514b96ebfbd4326bdb9a0ba7a74aefd1471561d5f9f1a11b3f493fc2",{},{PublicUser$:PublicUser$,PublicUser:PublicUser});
})();

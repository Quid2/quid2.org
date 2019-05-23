goog.provide('quid2.module.Service.Org.Quid2.NameSpace.Hash_34bc487cff88711192c90c9f6bb0c95d58e3cd9331de8857b252a8e865904f85');
goog.require('quid2.std');

quid2.module.Service.Org.Quid2.NameSpace.Hash_34bc487cff88711192c90c9f6bb0c95d58e3cd9331de8857b252a8e865904f85 = (function () {
var s = quid2.std;
/*
data PublicUsers  where 
  PublicUsers :: [[Char]] -> PublicUsers
*/

function PublicUsers() {this.value=[s.list(arguments[0])];};
s.asCons(PublicUsers,"PublicUsers",0,function (bs) {return new PublicUsers(new s.List$(s.String).decode(bs));});


var PublicUsers$={value:[]};
s.asType0(PublicUsers$,"PublicUsers$",[PublicUsers]);



return s.defs("Service.Org.Quid2.NameSpace.Hash_34bc487cff88711192c90c9f6bb0c95d58e3cd9331de8857b252a8e865904f85",{},{PublicUsers$:PublicUsers$,PublicUsers:PublicUsers});
})();

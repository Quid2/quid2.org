goog.provide('quid2.module.Language.Quid2.Syntax.Hash_92fe44c07b551e4ff3b4c68da1eaaac15032a0f8d230172958f34a5fbe8e98dd');
goog.require('quid2.std');

quid2.module.Language.Quid2.Syntax.Hash_92fe44c07b551e4ff3b4c68da1eaaac15032a0f8d230172958f34a5fbe8e98dd = (function () {
var s = quid2.std;
/*
data ModuleName  where 
  ModuleName :: [Char] -> ModuleName
*/

function ModuleName() {this.value=[s.string(arguments[0])];};
s.asCons(ModuleName,"ModuleName",0,function (bs) {return new ModuleName(s.String.decode(bs));});


var ModuleName$={value:[]};
s.asType0(ModuleName$,"ModuleName$",[ModuleName]);



return s.defs("Language.Quid2.Syntax.Hash_92fe44c07b551e4ff3b4c68da1eaaac15032a0f8d230172958f34a5fbe8e98dd",{},{ModuleName$:ModuleName$,ModuleName:ModuleName});
})();

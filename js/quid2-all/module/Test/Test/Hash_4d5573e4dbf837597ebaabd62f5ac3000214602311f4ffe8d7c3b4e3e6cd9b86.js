goog.provide('quid2.module.Test.Test.Hash_4d5573e4dbf837597ebaabd62f5ac3000214602311f4ffe8d7c3b4e3e6cd9b86');
goog.require('quid2.std');

quid2.module.Test.Test.Hash_4d5573e4dbf837597ebaabd62f5ac3000214602311f4ffe8d7c3b4e3e6cd9b86 = (function () {
var s = quid2.std;
/*
data ModuleInterface  where 
  ModuleInterface :: [[Char]] -> [([Char],Int64)] -> [([Char],Int64)] -> ModuleInterface
*/

function ModuleInterface() {this.value=[s.list(arguments[0]),s.list(arguments[1]),s.list(arguments[2])];};
s.asCons(ModuleInterface,"ModuleInterface",0,function (bs) {return new ModuleInterface(new s.List$(s.String).decode(bs),new s.List$(new s.Tuple$(s.String,s.Int64)).decode(bs),new s.List$(new s.Tuple$(s.String,s.Int64)).decode(bs));});


var ModuleInterface$={value:[]};
s.asType0(ModuleInterface$,"ModuleInterface$",[ModuleInterface]);



return s.defs("Test.Test.Hash_4d5573e4dbf837597ebaabd62f5ac3000214602311f4ffe8d7c3b4e3e6cd9b86",{},{ModuleInterface$:ModuleInterface$,ModuleInterface:ModuleInterface});
})();

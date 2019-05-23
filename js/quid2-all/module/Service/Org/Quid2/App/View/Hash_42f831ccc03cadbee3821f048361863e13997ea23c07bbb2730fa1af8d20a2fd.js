goog.provide('quid2.module.Service.Org.Quid2.App.View.Hash_42f831ccc03cadbee3821f048361863e13997ea23c07bbb2730fa1af8d20a2fd');
goog.require('quid2.std');

quid2.module.Service.Org.Quid2.App.View.Hash_42f831ccc03cadbee3821f048361863e13997ea23c07bbb2730fa1af8d20a2fd = (function () {
var s = quid2.std;
/*
data HelpModule  where 
  HelpModule :: [Char] -> [Char] -> [Char] -> HelpModule
*/

function HelpModule() {this.value=[s.string(arguments[0]),s.string(arguments[1]),s.string(arguments[2])];};
s.asCons(HelpModule,"HelpModule",0,function (bs) {return new HelpModule(s.String.decode(bs),s.String.decode(bs),s.String.decode(bs));});


var HelpModule$={value:[]};
s.asType0(HelpModule$,"HelpModule$",[HelpModule]);



return s.defs("Service.Org.Quid2.App.View.Hash_42f831ccc03cadbee3821f048361863e13997ea23c07bbb2730fa1af8d20a2fd",{},{HelpModule$:HelpModule$,HelpModule:HelpModule});
})();

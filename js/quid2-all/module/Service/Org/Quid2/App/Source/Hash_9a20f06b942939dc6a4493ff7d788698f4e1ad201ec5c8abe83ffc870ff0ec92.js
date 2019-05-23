goog.provide('quid2.module.Service.Org.Quid2.App.Source.Hash_9a20f06b942939dc6a4493ff7d788698f4e1ad201ec5c8abe83ffc870ff0ec92');
goog.require('quid2.std');
goog.require('quid2.module.Data.PatchedString.Hash_dd1364a9fd1fbb6ef3566bd53ab21bea8fd8cf3a2637320c01931c7539d97b2a');

quid2.module.Service.Org.Quid2.App.Source.Hash_9a20f06b942939dc6a4493ff7d788698f4e1ad201ec5c8abe83ffc870ff0ec92 = (function () {
var s = quid2.std;
/*
data PatchedSource  where 
  PatchedCode :: Data.PatchedString.Hash_dd1364a9fd1fbb6ef3566bd53ab21bea8fd8cf3a2637320c01931c7539d97b2a.PatchedString -> PatchedSource
  PatchedLiterate :: Data.PatchedString.Hash_dd1364a9fd1fbb6ef3566bd53ab21bea8fd8cf3a2637320c01931c7539d97b2a.PatchedString -> PatchedSource
*/

function PatchedCode() {this.value=[arguments[0]];};
s.asCons(PatchedCode,"PatchedCode",0,function (bs) {return new PatchedCode(quid2.module.Data.PatchedString.Hash_dd1364a9fd1fbb6ef3566bd53ab21bea8fd8cf3a2637320c01931c7539d97b2a.PatchedString$.decode(bs));});

function PatchedLiterate() {this.value=[arguments[0]];};
s.asCons(PatchedLiterate,"PatchedLiterate",1,function (bs) {return new PatchedLiterate(quid2.module.Data.PatchedString.Hash_dd1364a9fd1fbb6ef3566bd53ab21bea8fd8cf3a2637320c01931c7539d97b2a.PatchedString$.decode(bs));});


var PatchedSource$={value:[]};
s.asType0(PatchedSource$,"PatchedSource$",[PatchedCode,PatchedLiterate]);



return s.defs("Service.Org.Quid2.App.Source.Hash_9a20f06b942939dc6a4493ff7d788698f4e1ad201ec5c8abe83ffc870ff0ec92",{},{PatchedSource$:PatchedSource$,PatchedCode:PatchedCode,PatchedLiterate:PatchedLiterate});
})();

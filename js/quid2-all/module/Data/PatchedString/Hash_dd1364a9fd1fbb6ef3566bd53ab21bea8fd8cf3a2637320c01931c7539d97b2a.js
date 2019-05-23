goog.provide('quid2.module.Data.PatchedString.Hash_dd1364a9fd1fbb6ef3566bd53ab21bea8fd8cf3a2637320c01931c7539d97b2a');
goog.require('quid2.std');
goog.require('quid2.module.Data.String.Patch.Hash_ad09b4eb1c7a9876fcdd4031a75754b84622ecc45eb17f9838703a87d8dacd81');
goog.require('quid2.module.Data.Ref.Hash_380d3344c306e7f70b9cff78b9eebd922dc765caecde389796a59a35f209229f');

quid2.module.Data.PatchedString.Hash_dd1364a9fd1fbb6ef3566bd53ab21bea8fd8cf3a2637320c01931c7539d97b2a = (function () {
var s = quid2.std;
/*
data PatchedString  where 
  Stored :: Data.Ref.Hash_380d3344c306e7f70b9cff78b9eebd922dc765caecde389796a59a35f209229f.Ref [Char] -> PatchedString
  Patched :: [Data.String.Patch.Hash_ad09b4eb1c7a9876fcdd4031a75754b84622ecc45eb17f9838703a87d8dacd81.PatchItem] -> PatchedString -> PatchedString
*/

function Stored() {this.value=[arguments[0]];};
s.asCons(Stored,"Stored",0,function (bs) {return new Stored(new quid2.module.Data.Ref.Hash_380d3344c306e7f70b9cff78b9eebd922dc765caecde389796a59a35f209229f.Ref$(s.String).decode(bs));});

function Patched() {this.value=[s.list(arguments[0]),arguments[1]];};
s.asCons(Patched,"Patched",1,function (bs) {return new Patched(new s.List$(quid2.module.Data.String.Patch.Hash_ad09b4eb1c7a9876fcdd4031a75754b84622ecc45eb17f9838703a87d8dacd81.PatchItem$).decode(bs),PatchedString$.decode(bs));});


var PatchedString$={value:[]};
s.asType0(PatchedString$,"PatchedString$",[Stored,Patched]);



return s.defs("Data.PatchedString.Hash_dd1364a9fd1fbb6ef3566bd53ab21bea8fd8cf3a2637320c01931c7539d97b2a",{},{PatchedString$:PatchedString$,Stored:Stored,Patched:Patched});
})();

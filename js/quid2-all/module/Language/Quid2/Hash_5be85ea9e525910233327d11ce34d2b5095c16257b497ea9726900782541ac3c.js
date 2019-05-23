goog.provide('quid2.module.Language.Quid2.Hash_5be85ea9e525910233327d11ce34d2b5095c16257b497ea9726900782541ac3c');
goog.require('quid2.std');
goog.require('quid2.module.Data.Ref.Hash_380d3344c306e7f70b9cff78b9eebd922dc765caecde389796a59a35f209229f');

quid2.module.Language.Quid2.Hash_5be85ea9e525910233327d11ce34d2b5095c16257b497ea9726900782541ac3c = (function () {
var s = quid2.std;
/*
data SourceCode  where 
  Code :: Data.Ref.Hash_380d3344c306e7f70b9cff78b9eebd922dc765caecde389796a59a35f209229f.Ref [Char] -> SourceCode
  Literate :: Data.Ref.Hash_380d3344c306e7f70b9cff78b9eebd922dc765caecde389796a59a35f209229f.Ref [Char] -> SourceCode
*/

function Code() {this.value=[arguments[0]];};
s.asCons(Code,"Code",0,function (bs) {return new Code(new quid2.module.Data.Ref.Hash_380d3344c306e7f70b9cff78b9eebd922dc765caecde389796a59a35f209229f.Ref$(s.String).decode(bs));});

function Literate() {this.value=[arguments[0]];};
s.asCons(Literate,"Literate",1,function (bs) {return new Literate(new quid2.module.Data.Ref.Hash_380d3344c306e7f70b9cff78b9eebd922dc765caecde389796a59a35f209229f.Ref$(s.String).decode(bs));});


var SourceCode$={value:[]};
s.asType0(SourceCode$,"SourceCode$",[Code,Literate]);



return s.defs("Language.Quid2.Hash_5be85ea9e525910233327d11ce34d2b5095c16257b497ea9726900782541ac3c",{},{SourceCode$:SourceCode$,Code:Code,Literate:Literate});
})();

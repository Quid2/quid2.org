goog.provide('quid2.module.Language.QQ.Hash_e3c041af612e99f87eaab1555e57ac7391bb9287e818624cc92213477f5c6cc2');
goog.require('quid2.std');
goog.require('quid2.module.Network.Verbatim.Hash_1ca4b4317d2b683310ac558647701bf3238db5bf9859d5210f7c00b186d6dacd');
goog.require('quid2.module.Language.QQ.Hash_aa0d10cba650e2a5de4e22ab15e3ac173adc1d670c565a8bad8277892e854fad');
goog.require('quid2.module.Language.QQ.Hash_a25f345b9906a8b90a1ba475c9f18ff98effd320a4290f2a5dde70fa3348fefb');

quid2.module.Language.QQ.Hash_e3c041af612e99f87eaab1555e57ac7391bb9287e818624cc92213477f5c6cc2 = (function () {
var s = quid2.std;
/*
data TypedValue  where 
  TypedValue :: Language.QQ.Hash_a25f345b9906a8b90a1ba475c9f18ff98effd320a4290f2a5dde70fa3348fefb.Type Language.QQ.Hash_aa0d10cba650e2a5de4e22ab15e3ac173adc1d670c565a8bad8277892e854fad.AbsName -> Network.Verbatim.Hash_1ca4b4317d2b683310ac558647701bf3238db5bf9859d5210f7c00b186d6dacd.Verbatim -> TypedValue
*/

function TypedValue() {this.value=[arguments[0],arguments[1]];};
s.asCons(TypedValue,"TypedValue",0,function (bs) {return new TypedValue(new quid2.module.Language.QQ.Hash_a25f345b9906a8b90a1ba475c9f18ff98effd320a4290f2a5dde70fa3348fefb.Type$(quid2.module.Language.QQ.Hash_aa0d10cba650e2a5de4e22ab15e3ac173adc1d670c565a8bad8277892e854fad.AbsName$).decode(bs),quid2.module.Network.Verbatim.Hash_1ca4b4317d2b683310ac558647701bf3238db5bf9859d5210f7c00b186d6dacd.Verbatim$.decode(bs));});


var TypedValue$={value:[]};
s.asType0(TypedValue$,"TypedValue$",[TypedValue]);



return s.defs("Language.QQ.Hash_e3c041af612e99f87eaab1555e57ac7391bb9287e818624cc92213477f5c6cc2",{},{TypedValue$:TypedValue$,TypedValue:TypedValue});
})();

goog.provide('quid2.module.Service.Org.Quid2.Subject.Hash_8785cd4fad7877f54a314bc905ae44789b13a9744c92ce542202f0c96d020211');
goog.require('quid2.std');

quid2.module.Service.Org.Quid2.Subject.Hash_8785cd4fad7877f54a314bc905ae44789b13a9744c92ce542202f0c96d020211 = (function () {
var s = quid2.std;
/*
data Comment  where 
  TextMessage :: [Char] -> Comment
*/

function TextMessage() {this.value=[s.string(arguments[0])];};
s.asCons(TextMessage,"TextMessage",0,function (bs) {return new TextMessage(s.String.decode(bs));});


var Comment$={value:[]};
s.asType0(Comment$,"Comment$",[TextMessage]);



return s.defs("Service.Org.Quid2.Subject.Hash_8785cd4fad7877f54a314bc905ae44789b13a9744c92ce542202f0c96d020211",{},{Comment$:Comment$,TextMessage:TextMessage});
})();

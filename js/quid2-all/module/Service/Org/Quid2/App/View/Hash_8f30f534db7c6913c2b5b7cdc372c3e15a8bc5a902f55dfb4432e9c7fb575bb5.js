goog.provide('quid2.module.Service.Org.Quid2.App.View.Hash_8f30f534db7c6913c2b5b7cdc372c3e15a8bc5a902f55dfb4432e9c7fb575bb5');
goog.require('quid2.std');

quid2.module.Service.Org.Quid2.App.View.Hash_8f30f534db7c6913c2b5b7cdc372c3e15a8bc5a902f55dfb4432e9c7fb575bb5 = (function () {
var s = quid2.std;
/*
data SafeHTML  where 
  SafeHTML :: [Char] -> SafeHTML
*/

function SafeHTML() {this.value=[s.string(arguments[0])];};
s.asCons(SafeHTML,"SafeHTML",0,function (bs) {return new SafeHTML(s.String.decode(bs));});


var SafeHTML$={value:[]};
s.asType0(SafeHTML$,"SafeHTML$",[SafeHTML]);



return s.defs("Service.Org.Quid2.App.View.Hash_8f30f534db7c6913c2b5b7cdc372c3e15a8bc5a902f55dfb4432e9c7fb575bb5",{},{SafeHTML$:SafeHTML$,SafeHTML:SafeHTML});
})();

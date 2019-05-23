goog.provide('quid2.module.Service.Com.Google.Doc.Hash_d67f133d677d91020519f1a3d79ec280627fa21482eaf47564061cacc15413f3');
goog.require('quid2.std');

quid2.module.Service.Com.Google.Doc.Hash_d67f133d677d91020519f1a3d79ec280627fa21482eaf47564061cacc15413f3 = (function () {
var s = quid2.std;
/*
data GoogleDoc  where 
  GoogleDoc :: [Char] -> GoogleDoc
*/

function GoogleDoc() {this.value=[s.string(arguments[0])];};
s.asCons(GoogleDoc,"GoogleDoc",0,function (bs) {return new GoogleDoc(s.String.decode(bs));});


var GoogleDoc$={value:[]};
s.asType0(GoogleDoc$,"GoogleDoc$",[GoogleDoc]);



return s.defs("Service.Com.Google.Doc.Hash_d67f133d677d91020519f1a3d79ec280627fa21482eaf47564061cacc15413f3",{},{GoogleDoc$:GoogleDoc$,GoogleDoc:GoogleDoc});
})();

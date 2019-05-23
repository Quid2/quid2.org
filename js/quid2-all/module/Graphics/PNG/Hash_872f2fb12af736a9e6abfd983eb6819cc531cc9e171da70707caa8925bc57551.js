goog.provide('quid2.module.Graphics.PNG.Hash_872f2fb12af736a9e6abfd983eb6819cc531cc9e171da70707caa8925bc57551');
goog.require('quid2.std');

quid2.module.Graphics.PNG.Hash_872f2fb12af736a9e6abfd983eb6819cc531cc9e171da70707caa8925bc57551 = (function () {
var s = quid2.std;
/*
data PNG  where 
  PNG :: [Char] -> PNG
*/

function PNG() {this.value=[s.string(arguments[0])];};
s.asCons(PNG,"PNG",0,function (bs) {return new PNG(s.String.decode(bs));});


var PNG$={value:[]};
s.asType0(PNG$,"PNG$",[PNG]);



return s.defs("Graphics.PNG.Hash_872f2fb12af736a9e6abfd983eb6819cc531cc9e171da70707caa8925bc57551",{},{PNG$:PNG$,PNG:PNG});
})();

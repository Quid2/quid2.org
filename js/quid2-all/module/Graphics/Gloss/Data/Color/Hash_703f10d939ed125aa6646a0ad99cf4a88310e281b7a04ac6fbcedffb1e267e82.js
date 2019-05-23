goog.provide('quid2.module.Graphics.Gloss.Data.Color.Hash_703f10d939ed125aa6646a0ad99cf4a88310e281b7a04ac6fbcedffb1e267e82');
goog.require('quid2.std');

quid2.module.Graphics.Gloss.Data.Color.Hash_703f10d939ed125aa6646a0ad99cf4a88310e281b7a04ac6fbcedffb1e267e82 = (function () {
var s = quid2.std;
/*
data Color  where 
  RGBA :: Float -> Float -> Float -> Float -> Color
*/

function RGBA() {this.value=[s.float(arguments[0]),s.float(arguments[1]),s.float(arguments[2]),s.float(arguments[3])];};
s.asCons(RGBA,"RGBA",0,function (bs) {return new RGBA(s.Float.decode(bs),s.Float.decode(bs),s.Float.decode(bs),s.Float.decode(bs));});


var Color$={value:[]};
s.asType0(Color$,"Color$",[RGBA]);



return s.defs("Graphics.Gloss.Data.Color.Hash_703f10d939ed125aa6646a0ad99cf4a88310e281b7a04ac6fbcedffb1e267e82",{},{Color$:Color$,RGBA:RGBA});
})();

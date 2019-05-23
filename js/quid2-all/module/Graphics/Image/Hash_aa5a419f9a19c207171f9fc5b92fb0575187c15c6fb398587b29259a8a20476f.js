goog.provide('quid2.module.Graphics.Image.Hash_aa5a419f9a19c207171f9fc5b92fb0575187c15c6fb398587b29259a8a20476f');
goog.require('quid2.std');

quid2.module.Graphics.Image.Hash_aa5a419f9a19c207171f9fc5b92fb0575187c15c6fb398587b29259a8a20476f = (function () {
var s = quid2.std;
/*
data Image  where 
  ImageURL :: [Char] -> Image
*/

function ImageURL() {this.value=[s.string(arguments[0])];};
s.asCons(ImageURL,"ImageURL",0,function (bs) {return new ImageURL(s.String.decode(bs));});


var Image$={value:[]};
s.asType0(Image$,"Image$",[ImageURL]);



return s.defs("Graphics.Image.Hash_aa5a419f9a19c207171f9fc5b92fb0575187c15c6fb398587b29259a8a20476f",{},{Image$:Image$,ImageURL:ImageURL});
})();

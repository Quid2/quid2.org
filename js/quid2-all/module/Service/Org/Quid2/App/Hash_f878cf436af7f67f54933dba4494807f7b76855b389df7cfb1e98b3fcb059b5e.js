goog.provide('quid2.module.Service.Org.Quid2.App.Hash_f878cf436af7f67f54933dba4494807f7b76855b389df7cfb1e98b3fcb059b5e');
goog.require('quid2.std');

quid2.module.Service.Org.Quid2.App.Hash_f878cf436af7f67f54933dba4494807f7b76855b389df7cfb1e98b3fcb059b5e = (function () {
var s = quid2.std;
/*
data YouTubeVideo  where 
  YouTubeVideo :: [Char] -> [Char] -> YouTubeVideo
*/

function YouTubeVideo() {this.value=[s.string(arguments[0]),s.string(arguments[1])];};
s.asCons(YouTubeVideo,"YouTubeVideo",0,function (bs) {return new YouTubeVideo(s.String.decode(bs),s.String.decode(bs));});


var YouTubeVideo$={value:[]};
s.asType0(YouTubeVideo$,"YouTubeVideo$",[YouTubeVideo]);



return s.defs("Service.Org.Quid2.App.Hash_f878cf436af7f67f54933dba4494807f7b76855b389df7cfb1e98b3fcb059b5e",{},{YouTubeVideo$:YouTubeVideo$,YouTubeVideo:YouTubeVideo});
})();

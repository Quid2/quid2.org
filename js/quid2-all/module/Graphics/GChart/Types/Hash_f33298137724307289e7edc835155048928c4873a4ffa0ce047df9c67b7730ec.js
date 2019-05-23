goog.provide('quid2.module.Graphics.GChart.Types.Hash_f33298137724307289e7edc835155048928c4873a4ffa0ce047df9c67b7730ec');
goog.require('quid2.std');

quid2.module.Graphics.GChart.Types.Hash_f33298137724307289e7edc835155048928c4873a4ffa0ce047df9c67b7730ec = (function () {
var s = quid2.std;
/*
data FillKind  where 
  Solid :: [Char] -> FillKind
  LinearGradient :: Float -> [([Char],Float)] -> FillKind
  LinearStripes :: Float -> [([Char],Float)] -> FillKind
*/

function Solid() {this.value=[s.string(arguments[0])];};
s.asCons(Solid,"Solid",0,function (bs) {return new Solid(s.String.decode(bs));});

function LinearGradient() {this.value=[s.float(arguments[0]),s.list(arguments[1])];};
s.asCons(LinearGradient,"LinearGradient",1,function (bs) {return new LinearGradient(s.Float.decode(bs),new s.List$(new s.Tuple$(s.String,s.Float)).decode(bs));});

function LinearStripes() {this.value=[s.float(arguments[0]),s.list(arguments[1])];};
s.asCons(LinearStripes,"LinearStripes",2,function (bs) {return new LinearStripes(s.Float.decode(bs),new s.List$(new s.Tuple$(s.String,s.Float)).decode(bs));});


var FillKind$={value:[]};
s.asType0(FillKind$,"FillKind$",[Solid,LinearGradient,LinearStripes]);



return s.defs("Graphics.GChart.Types.Hash_f33298137724307289e7edc835155048928c4873a4ffa0ce047df9c67b7730ec",{},{FillKind$:FillKind$,Solid:Solid,LinearGradient:LinearGradient,LinearStripes:LinearStripes});
})();

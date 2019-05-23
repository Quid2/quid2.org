goog.provide('quid2.module.Graphics.GChart.Types.Hash_bf325872b3b05469cdb2a40eeecd3d6d7bacb0cf37e5194de0e90dadee826166');
goog.require('quid2.std');
goog.require('quid2.module.Data.Maybe.Hash_fe1a9ed1fe3015c135b766464e0bcb971d1cd2b1aa733a473dd1055ba4b7eb60');

quid2.module.Graphics.GChart.Types.Hash_bf325872b3b05469cdb2a40eeecd3d6d7bacb0cf37e5194de0e90dadee826166 = (function () {
var s = quid2.std;
/*
data AxisRange  where 
  Range :: (Float,Float) -> Data.Maybe.Hash_fe1a9ed1fe3015c135b766464e0bcb971d1cd2b1aa733a473dd1055ba4b7eb60.Maybe Float -> AxisRange
*/

function Range() {this.value=[s.tuple(arguments[0]),arguments[1]];};
s.asCons(Range,"Range",0,function (bs) {return new Range(new s.Tuple$(s.Float,s.Float).decode(bs),new quid2.module.Data.Maybe.Hash_fe1a9ed1fe3015c135b766464e0bcb971d1cd2b1aa733a473dd1055ba4b7eb60.Maybe$(s.Float).decode(bs));});


var AxisRange$={value:[]};
s.asType0(AxisRange$,"AxisRange$",[Range]);



return s.defs("Graphics.GChart.Types.Hash_bf325872b3b05469cdb2a40eeecd3d6d7bacb0cf37e5194de0e90dadee826166",{},{AxisRange$:AxisRange$,Range:Range});
})();

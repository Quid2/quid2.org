goog.provide('quid2.module.Service.Org.Quid2.Language.Quid2.Hash_4e46ba8143b04ea926075d34899951fe862ef703c1da0dbeafd496500e2c9296');
goog.require('quid2.std');

quid2.module.Service.Org.Quid2.Language.Quid2.Hash_4e46ba8143b04ea926075d34899951fe862ef703c1da0dbeafd496500e2c9296 = (function () {
var s = quid2.std;
/*
data Function  where 
  Function :: [Char] -> [[Char]] -> Function
*/

function Function() {this.value=[s.string(arguments[0]),s.list(arguments[1])];};
s.asCons(Function,"Function",0,function (bs) {return new Function(s.String.decode(bs),new s.List$(s.String).decode(bs));});


var Function$={value:[]};
s.asType0(Function$,"Function$",[Function]);



return s.defs("Service.Org.Quid2.Language.Quid2.Hash_4e46ba8143b04ea926075d34899951fe862ef703c1da0dbeafd496500e2c9296",{},{Function$:Function$,Function:Function});
})();

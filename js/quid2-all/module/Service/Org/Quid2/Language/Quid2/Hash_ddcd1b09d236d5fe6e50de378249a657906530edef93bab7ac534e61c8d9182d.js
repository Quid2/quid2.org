goog.provide('quid2.module.Service.Org.Quid2.Language.Quid2.Hash_ddcd1b09d236d5fe6e50de378249a657906530edef93bab7ac534e61c8d9182d');
goog.require('quid2.std');

quid2.module.Service.Org.Quid2.Language.Quid2.Hash_ddcd1b09d236d5fe6e50de378249a657906530edef93bab7ac534e61c8d9182d = (function () {
var s = quid2.std;
/*
data DataCons  where 
  DataCons :: [Char] -> Int64 -> [[Char]] -> DataCons
*/

function DataCons() {this.value=[s.string(arguments[0]),s.int64(arguments[1]),s.list(arguments[2])];};
s.asCons(DataCons,"DataCons",0,function (bs) {return new DataCons(s.String.decode(bs),s.Int64.decode(bs),new s.List$(s.String).decode(bs));});


var DataCons$={value:[]};
s.asType0(DataCons$,"DataCons$",[DataCons]);



return s.defs("Service.Org.Quid2.Language.Quid2.Hash_ddcd1b09d236d5fe6e50de378249a657906530edef93bab7ac534e61c8d9182d",{},{DataCons$:DataCons$,DataCons:DataCons});
})();

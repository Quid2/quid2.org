goog.provide('quid2.module.Service.Org.Quid2.Language.Quid2.Hash_ae149a107b5fd4bec1362367a6bb6688b6786f1afe1ffe79d1cdd44d481be279');
goog.require('quid2.std');
goog.require('quid2.module.Service.Org.Quid2.Language.Quid2.Hash_ddcd1b09d236d5fe6e50de378249a657906530edef93bab7ac534e61c8d9182d');

quid2.module.Service.Org.Quid2.Language.Quid2.Hash_ae149a107b5fd4bec1362367a6bb6688b6786f1afe1ffe79d1cdd44d481be279 = (function () {
var s = quid2.std;
/*
data DataType  where 
  DataType :: [Char] -> [[Char]] -> Int64 -> [Service.Org.Quid2.Language.Quid2.Hash_ddcd1b09d236d5fe6e50de378249a657906530edef93bab7ac534e61c8d9182d.DataCons] -> DataType
*/

function DataType() {this.value=[s.string(arguments[0]),s.list(arguments[1]),s.int64(arguments[2]),s.list(arguments[3])];};
s.asCons(DataType,"DataType",0,function (bs) {return new DataType(s.String.decode(bs),new s.List$(s.String).decode(bs),s.Int64.decode(bs),new s.List$(quid2.module.Service.Org.Quid2.Language.Quid2.Hash_ddcd1b09d236d5fe6e50de378249a657906530edef93bab7ac534e61c8d9182d.DataCons$).decode(bs));});


var DataType$={value:[]};
s.asType0(DataType$,"DataType$",[DataType]);



return s.defs("Service.Org.Quid2.Language.Quid2.Hash_ae149a107b5fd4bec1362367a6bb6688b6786f1afe1ffe79d1cdd44d481be279",{},{DataType$:DataType$,DataType:DataType});
})();

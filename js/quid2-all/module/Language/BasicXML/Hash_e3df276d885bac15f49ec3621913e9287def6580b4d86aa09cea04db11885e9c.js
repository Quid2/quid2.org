goog.provide('quid2.module.Language.BasicXML.Hash_e3df276d885bac15f49ec3621913e9287def6580b4d86aa09cea04db11885e9c');
goog.require('quid2.std');
goog.require('quid2.module.Data.Bool.Hash_5d101ff369e98815dcded54163ac4efd6578b24bfed5ef4c8677055babb73152');
goog.require('quid2.module.Language.BasicXML.Hash_3ad7ebb67d4895d0f903dd11ea384fffde7849827edff17350c60eee447e8665');

quid2.module.Language.BasicXML.Hash_e3df276d885bac15f49ec3621913e9287def6580b4d86aa09cea04db11885e9c = (function () {
var s = quid2.std;
/*
isControlChar::Char -> Data.Bool.Hash_5d101ff369e98815dcded54163ac4efd6578b24bfed5ef4c8677055babb73152.Bool
isNameStartChar::Char -> Data.Bool.Hash_5d101ff369e98815dcded54163ac4efd6578b24bfed5ef4c8677055babb73152.Bool
isNameChar::Char -> Data.Bool.Hash_5d101ff369e98815dcded54163ac4efd6578b24bfed5ef4c8677055babb73152.Bool
isValidChar::Char -> Data.Bool.Hash_5d101ff369e98815dcded54163ac4efd6578b24bfed5ef4c8677055babb73152.Bool
renderAll::[Language.BasicXML.Hash_3ad7ebb67d4895d0f903dd11ea384fffde7849827edff17350c60eee447e8665.Node] -> [Char]
render::Language.BasicXML.Hash_3ad7ebb67d4895d0f903dd11ea384fffde7849827edff17350c60eee447e8665.Node -> [Char]
renderElement::[Char] -> [([Char],[Char])] -> [Language.BasicXML.Hash_3ad7ebb67d4895d0f903dd11ea384fffde7849827edff17350c60eee447e8665.Node] -> [Char]
renderAttribute::([Char],[Char]) -> [Char]
escaped::[Char] -> [Char] -> [Char]
entity::Char -> [Char]
*/
return s.defs("Language.BasicXML.Hash_e3df276d885bac15f49ec3621913e9287def6580b4d86aa09cea04db11885e9c",{entity:[2,3,2,8,2,5,1,8,0,0],escaped:[2,3,2,2,5,1,8,0,2,3,2,2,5,1,8,0,2,5,1,8,0,0,0],renderAttribute:[2,3,2,2,4,2,2,2,5,1,8,0,2,5,1,8,0,0,2,5,1,8,0,0],renderElement:[2,3,2,2,5,1,8,0,2,3,2,2,5,1,2,4,2,2,2,5,1,8,0,2,5,1,8,0,0,0,2,3,2,2,5,1,0,0,87,76,97,110,103,117,97,103,101,46,66,97,115,105,99,88,77,76,46,72,97,115,104,95,51,97,100,55,101,98,98,54,55,100,52,56,57,53,100,48,102,57,48,51,100,100,49,49,101,97,51,56,52,102,102,102,100,101,55,56,52,57,56,50,55,101,100,102,102,49,55,51,53,48,99,54,48,101,101,101,52,52,55,101,56,54,54,53,0,0,4,78,111,100,101,0,0,2,5,1,8,0,0,0,0],render:[2,3,2,0,0,87,76,97,110,103,117,97,103,101,46,66,97,115,105,99,88,77,76,46,72,97,115,104,95,51,97,100,55,101,98,98,54,55,100,52,56,57,53,100,48,102,57,48,51,100,100,49,49,101,97,51,56,52,102,102,102,100,101,55,56,52,57,56,50,55,101,100,102,102,49,55,51,53,48,99,54,48,101,101,101,52,52,55,101,56,54,54,53,0,0,4,78,111,100,101,0,2,5,1,8,0,0],renderAll:[2,3,2,2,5,1,0,0,87,76,97,110,103,117,97,103,101,46,66,97,115,105,99,88,77,76,46,72,97,115,104,95,51,97,100,55,101,98,98,54,55,100,52,56,57,53,100,48,102,57,48,51,100,100,49,49,101,97,51,56,52,102,102,102,100,101,55,56,52,57,56,50,55,101,100,102,102,49,55,51,53,48,99,54,48,101,101,101,52,52,55,101,56,54,54,53,0,0,4,78,111,100,101,0,0,2,5,1,8,0,0],isValidChar:[2,3,2,8,0,0,79,68,97,116,97,46,66,111,111,108,46,72,97,115,104,95,53,100,49,48,49,102,102,51,54,57,101,57,56,56,49,53,100,99,100,101,100,53,52,49,54,51,97,99,52,101,102,100,54,53,55,56,98,50,52,98,102,101,100,53,101,102,52,99,56,54,55,55,48,53,53,98,97,98,98,55,51,49,53,50,0,0,4,66,111,111,108,0,0],isNameChar:[2,3,2,8,0,0,79,68,97,116,97,46,66,111,111,108,46,72,97,115,104,95,53,100,49,48,49,102,102,51,54,57,101,57,56,56,49,53,100,99,100,101,100,53,52,49,54,51,97,99,52,101,102,100,54,53,55,56,98,50,52,98,102,101,100,53,101,102,52,99,56,54,55,55,48,53,53,98,97,98,98,55,51,49,53,50,0,0,4,66,111,111,108,0,0],isNameStartChar:[2,3,2,8,0,0,79,68,97,116,97,46,66,111,111,108,46,72,97,115,104,95,53,100,49,48,49,102,102,51,54,57,101,57,56,56,49,53,100,99,100,101,100,53,52,49,54,51,97,99,52,101,102,100,54,53,55,56,98,50,52,98,102,101,100,53,101,102,52,99,56,54,55,55,48,53,53,98,97,98,98,55,51,49,53,50,0,0,4,66,111,111,108,0,0],isControlChar:[2,3,2,8,0,0,79,68,97,116,97,46,66,111,111,108,46,72,97,115,104,95,53,100,49,48,49,102,102,51,54,57,101,57,56,56,49,53,100,99,100,101,100,53,52,49,54,51,97,99,52,101,102,100,54,53,55,56,98,50,52,98,102,101,100,53,101,102,52,99,56,54,55,55,48,53,53,98,97,98,98,55,51,49,53,50,0,0,4,66,111,111,108,0,0]},{},[quid2.module.Data.Bool.Hash_5d101ff369e98815dcded54163ac4efd6578b24bfed5ef4c8677055babb73152,quid2.module.Language.BasicXML.Hash_3ad7ebb67d4895d0f903dd11ea384fffde7849827edff17350c60eee447e8665]);
})();

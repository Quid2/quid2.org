goog.provide('quid2.module.Data.Double.Hash_eca5568ebb01cb26fbb5c8c820ce35b1b4da0e11a66f8ed32a498eb319725de3');
goog.require('quid2.std');
goog.require('quid2.module.Data.Bool.Hash_5d101ff369e98815dcded54163ac4efd6578b24bfed5ef4c8677055babb73152');
goog.require('quid2.module.Data.Ratio.Hash_1a755cc7ebaf74a314f8a9f976289c1ab76137cc5d9a83e7d92f113f2af93b42');

quid2.module.Data.Double.Hash_eca5568ebb01cb26fbb5c8c820ce35b1b4da0e11a66f8ed32a498eb319725de3 = (function () {
var s = quid2.std;
/*
timesDouble::Double -> Double -> Double
tanhDouble::Double -> Double
tanDouble::Double -> Double
sqrtDouble::Double -> Double
sinhDouble::Double -> Double
sinDouble::Double -> Double
powerDouble::Double -> Double -> Double
plusDouble::Double -> Double -> Double
negateDouble::Double -> Double
neDouble::Double -> Double -> Data.Bool.Hash_5d101ff369e98815dcded54163ac4efd6578b24bfed5ef4c8677055babb73152.Bool
minusDouble::Double -> Double -> Double
ltDouble::Double -> Double -> Data.Bool.Hash_5d101ff369e98815dcded54163ac4efd6578b24bfed5ef4c8677055babb73152.Bool
logDouble::Double -> Double
leDouble::Double -> Double -> Data.Bool.Hash_5d101ff369e98815dcded54163ac4efd6578b24bfed5ef4c8677055babb73152.Bool
gtDouble::Double -> Double -> Data.Bool.Hash_5d101ff369e98815dcded54163ac4efd6578b24bfed5ef4c8677055babb73152.Bool
geDouble::Double -> Double -> Data.Bool.Hash_5d101ff369e98815dcded54163ac4efd6578b24bfed5ef4c8677055babb73152.Bool
expDouble::Double -> Double
eqDouble::Double -> Double -> Data.Bool.Hash_5d101ff369e98815dcded54163ac4efd6578b24bfed5ef4c8677055babb73152.Bool
divideDouble::Double -> Double -> Double
coshDouble::Double -> Double
cosDouble::Double -> Double
atanDouble::Double -> Double
asinDouble::Double -> Double
acosDouble::Double -> Double
absDouble::Double -> Double
fromIntegerDouble::Integer -> Double
fromRationalDouble::Data.Ratio.Hash_1a755cc7ebaf74a314f8a9f976289c1ab76137cc5d9a83e7d92f113f2af93b42.Ratio Integer -> Double
floatRadixDouble::Double -> Integer
floatDigitsDouble::Double -> Int64
floatRangeDouble::Double -> (Int64,Int64)
decodeFloatDouble::Double -> (Integer,Int64)
encodeFloatDouble::Integer -> Int64 -> Double
exponentDouble::Double -> Int64
significandDouble::Double -> Double
scaleFloatDouble::Int64 -> Double -> Double
isNaNDouble::Double -> Data.Bool.Hash_5d101ff369e98815dcded54163ac4efd6578b24bfed5ef4c8677055babb73152.Bool
isInfiniteDouble::Double -> Data.Bool.Hash_5d101ff369e98815dcded54163ac4efd6578b24bfed5ef4c8677055babb73152.Bool
isDenormalizedDouble::Double -> Data.Bool.Hash_5d101ff369e98815dcded54163ac4efd6578b24bfed5ef4c8677055babb73152.Bool
isNegativeZeroDouble::Double -> Data.Bool.Hash_5d101ff369e98815dcded54163ac4efd6578b24bfed5ef4c8677055babb73152.Bool
isIEEEDouble::Double -> Data.Bool.Hash_5d101ff369e98815dcded54163ac4efd6578b24bfed5ef4c8677055babb73152.Bool
atan2Double::Double -> Double -> Double
*/
return s.defs("Data.Double.Hash_eca5568ebb01cb26fbb5c8c820ce35b1b4da0e11a66f8ed32a498eb319725de3",{atan2Double:[2,3,2,18,2,3,2,18,18,0,0],isIEEEDouble:[2,3,2,18,0,0,79,68,97,116,97,46,66,111,111,108,46,72,97,115,104,95,53,100,49,48,49,102,102,51,54,57,101,57,56,56,49,53,100,99,100,101,100,53,52,49,54,51,97,99,52,101,102,100,54,53,55,56,98,50,52,98,102,101,100,53,101,102,52,99,56,54,55,55,48,53,53,98,97,98,98,55,51,49,53,50,0,0,4,66,111,111,108,0,0],isNegativeZeroDouble:[2,3,2,18,0,0,79,68,97,116,97,46,66,111,111,108,46,72,97,115,104,95,53,100,49,48,49,102,102,51,54,57,101,57,56,56,49,53,100,99,100,101,100,53,52,49,54,51,97,99,52,101,102,100,54,53,55,56,98,50,52,98,102,101,100,53,101,102,52,99,56,54,55,55,48,53,53,98,97,98,98,55,51,49,53,50,0,0,4,66,111,111,108,0,0],isDenormalizedDouble:[2,3,2,18,0,0,79,68,97,116,97,46,66,111,111,108,46,72,97,115,104,95,53,100,49,48,49,102,102,51,54,57,101,57,56,56,49,53,100,99,100,101,100,53,52,49,54,51,97,99,52,101,102,100,54,53,55,56,98,50,52,98,102,101,100,53,101,102,52,99,56,54,55,55,48,53,53,98,97,98,98,55,51,49,53,50,0,0,4,66,111,111,108,0,0],isInfiniteDouble:[2,3,2,18,0,0,79,68,97,116,97,46,66,111,111,108,46,72,97,115,104,95,53,100,49,48,49,102,102,51,54,57,101,57,56,56,49,53,100,99,100,101,100,53,52,49,54,51,97,99,52,101,102,100,54,53,55,56,98,50,52,98,102,101,100,53,101,102,52,99,56,54,55,55,48,53,53,98,97,98,98,55,51,49,53,50,0,0,4,66,111,111,108,0,0],isNaNDouble:[2,3,2,18,0,0,79,68,97,116,97,46,66,111,111,108,46,72,97,115,104,95,53,100,49,48,49,102,102,51,54,57,101,57,56,56,49,53,100,99,100,101,100,53,52,49,54,51,97,99,52,101,102,100,54,53,55,56,98,50,52,98,102,101,100,53,101,102,52,99,56,54,55,55,48,53,53,98,97,98,98,55,51,49,53,50,0,0,4,66,111,111,108,0,0],scaleFloatDouble:[2,3,2,16,2,3,2,18,18,0,0],significandDouble:[2,3,2,18,18,0],exponentDouble:[2,3,2,18,16,0],encodeFloatDouble:[2,3,2,19,2,3,2,16,18,0,0],decodeFloatDouble:[2,3,2,18,2,4,2,2,19,16,0,0],floatRangeDouble:[2,3,2,18,2,4,2,2,16,16,0,0],floatDigitsDouble:[2,3,2,18,16,0],floatRadixDouble:[2,3,2,18,19,0],fromRationalDouble:[2,3,2,2,0,0,80,68,97,116,97,46,82,97,116,105,111,46,72,97,115,104,95,49,97,55,53,53,99,99,55,101,98,97,102,55,52,97,51,49,52,102,56,97,57,102,57,55,54,50,56,57,99,49,97,98,55,54,49,51,55,99,99,53,100,57,97,56,51,101,55,100,57,50,102,49,49,51,102,50,97,102,57,51,98,52,50,0,0,5,82,97,116,105,111,0,1,19,0,18,0],fromIntegerDouble:[2,3,2,19,18,0],absDouble:[2,3,2,18,18,0],acosDouble:[2,3,2,18,18,0],asinDouble:[2,3,2,18,18,0],atanDouble:[2,3,2,18,18,0],cosDouble:[2,3,2,18,18,0],coshDouble:[2,3,2,18,18,0],divideDouble:[2,3,2,18,2,3,2,18,18,0,0],eqDouble:[2,3,2,18,2,3,2,18,0,0,79,68,97,116,97,46,66,111,111,108,46,72,97,115,104,95,53,100,49,48,49,102,102,51,54,57,101,57,56,56,49,53,100,99,100,101,100,53,52,49,54,51,97,99,52,101,102,100,54,53,55,56,98,50,52,98,102,101,100,53,101,102,52,99,56,54,55,55,48,53,53,98,97,98,98,55,51,49,53,50,0,0,4,66,111,111,108,0,0,0],expDouble:[2,3,2,18,18,0],geDouble:[2,3,2,18,2,3,2,18,0,0,79,68,97,116,97,46,66,111,111,108,46,72,97,115,104,95,53,100,49,48,49,102,102,51,54,57,101,57,56,56,49,53,100,99,100,101,100,53,52,49,54,51,97,99,52,101,102,100,54,53,55,56,98,50,52,98,102,101,100,53,101,102,52,99,56,54,55,55,48,53,53,98,97,98,98,55,51,49,53,50,0,0,4,66,111,111,108,0,0,0],gtDouble:[2,3,2,18,2,3,2,18,0,0,79,68,97,116,97,46,66,111,111,108,46,72,97,115,104,95,53,100,49,48,49,102,102,51,54,57,101,57,56,56,49,53,100,99,100,101,100,53,52,49,54,51,97,99,52,101,102,100,54,53,55,56,98,50,52,98,102,101,100,53,101,102,52,99,56,54,55,55,48,53,53,98,97,98,98,55,51,49,53,50,0,0,4,66,111,111,108,0,0,0],leDouble:[2,3,2,18,2,3,2,18,0,0,79,68,97,116,97,46,66,111,111,108,46,72,97,115,104,95,53,100,49,48,49,102,102,51,54,57,101,57,56,56,49,53,100,99,100,101,100,53,52,49,54,51,97,99,52,101,102,100,54,53,55,56,98,50,52,98,102,101,100,53,101,102,52,99,56,54,55,55,48,53,53,98,97,98,98,55,51,49,53,50,0,0,4,66,111,111,108,0,0,0],logDouble:[2,3,2,18,18,0],ltDouble:[2,3,2,18,2,3,2,18,0,0,79,68,97,116,97,46,66,111,111,108,46,72,97,115,104,95,53,100,49,48,49,102,102,51,54,57,101,57,56,56,49,53,100,99,100,101,100,53,52,49,54,51,97,99,52,101,102,100,54,53,55,56,98,50,52,98,102,101,100,53,101,102,52,99,56,54,55,55,48,53,53,98,97,98,98,55,51,49,53,50,0,0,4,66,111,111,108,0,0,0],minusDouble:[2,3,2,18,2,3,2,18,18,0,0],neDouble:[2,3,2,18,2,3,2,18,0,0,79,68,97,116,97,46,66,111,111,108,46,72,97,115,104,95,53,100,49,48,49,102,102,51,54,57,101,57,56,56,49,53,100,99,100,101,100,53,52,49,54,51,97,99,52,101,102,100,54,53,55,56,98,50,52,98,102,101,100,53,101,102,52,99,56,54,55,55,48,53,53,98,97,98,98,55,51,49,53,50,0,0,4,66,111,111,108,0,0,0],negateDouble:[2,3,2,18,18,0],plusDouble:[2,3,2,18,2,3,2,18,18,0,0],powerDouble:[2,3,2,18,2,3,2,18,18,0,0],sinDouble:[2,3,2,18,18,0],sinhDouble:[2,3,2,18,18,0],sqrtDouble:[2,3,2,18,18,0],tanDouble:[2,3,2,18,18,0],tanhDouble:[2,3,2,18,18,0],timesDouble:[2,3,2,18,2,3,2,18,18,0,0]},{},[quid2.module.Data.Bool.Hash_5d101ff369e98815dcded54163ac4efd6578b24bfed5ef4c8677055babb73152,quid2.module.Data.Ratio.Hash_1a755cc7ebaf74a314f8a9f976289c1ab76137cc5d9a83e7d92f113f2af93b42]);
})();

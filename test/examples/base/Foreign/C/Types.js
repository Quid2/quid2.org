
$hs.modules.ForeignziCziTypes = new $hs.Module();
$hs.modules.ForeignziCziTypes.dependencies = ["GHC.Types", "GHC.CString", "GHC.Enum", "GHC.Num", "GHC.Real", "GHC.Float", "GHC.Show", "Data.Typeable.Internal", "GHC.Classes", "GHC.Int", "GHC.Read", "GHC.Word", "Data.Bits", "Foreign.Storable"];
$hs.modules.ForeignziCziTypes.initBeforeDependencies = function () {
    this.hs_zdfReadCChar = new $hs.Data(1);
    this.hs_zdfShowCChar = new $hs.Data(1);
    this.hs_zdfReadCSChar = new $hs.Data(1);
    this.hs_zdfShowCSChar = new $hs.Data(1);
    this.hs_zdfReadCUChar = new $hs.Data(1);
    this.hs_zdfShowCUChar = new $hs.Data(1);
    this.hs_zdfReadCShort = new $hs.Data(1);
    this.hs_zdfShowCShort = new $hs.Data(1);
    this.hs_zdfReadCUShort = new $hs.Data(1);
    this.hs_zdfShowCUShort = new $hs.Data(1);
    this.hs_zdfReadCInt = new $hs.Data(1);
    this.hs_zdfShowCInt = new $hs.Data(1);
    this.hs_zdfReadCUInt = new $hs.Data(1);
    this.hs_zdfShowCUInt = new $hs.Data(1);
    this.hs_zdfReadCLong = new $hs.Data(1);
    this.hs_zdfShowCLong = new $hs.Data(1);
    this.hs_zdfReadCULong = new $hs.Data(1);
    this.hs_zdfShowCULong = new $hs.Data(1);
    this.hs_zdfReadCLLong = new $hs.Data(1);
    this.hs_zdfShowCLLong = new $hs.Data(1);
    this.hs_zdfReadCULLong = new $hs.Data(1);
    this.hs_zdfShowCULLong = new $hs.Data(1);
    this.hs_zdfReadCFloat = new $hs.Data(1);
    this.hs_zdfShowCFloat = new $hs.Data(1);
    this.hs_zdfReadCDouble = new $hs.Data(1);
    this.hs_zdfShowCDouble = new $hs.Data(1);
    this.hs_zdfReadCPtrdiff = new $hs.Data(1);
    this.hs_zdfShowCPtrdiff = new $hs.Data(1);
    this.hs_zdfReadCSizze = new $hs.Data(1);
    this.hs_zdfShowCSizze = new $hs.Data(1);
    this.hs_zdfReadCWchar = new $hs.Data(1);
    this.hs_zdfShowCWchar = new $hs.Data(1);
    this.hs_zdfReadCSigAtomic = new $hs.Data(1);
    this.hs_zdfShowCSigAtomic = new $hs.Data(1);
    this.hs_zdfReadCClock = new $hs.Data(1);
    this.hs_zdfShowCClock = new $hs.Data(1);
    this.hs_zdfReadCTime = new $hs.Data(1);
    this.hs_zdfShowCTime = new $hs.Data(1);
    this.hs_zdfReadCUSeconds = new $hs.Data(1);
    this.hs_zdfShowCUSeconds = new $hs.Data(1);
    this.hs_zdfReadCSUSeconds = new $hs.Data(1);
    this.hs_zdfShowCSUSeconds = new $hs.Data(1);
    this.hs_zdfReadCIntPtr = new $hs.Data(1);
    this.hs_zdfShowCIntPtr = new $hs.Data(1);
    this.hs_zdfReadCUIntPtr = new $hs.Data(1);
    this.hs_zdfShowCUIntPtr = new $hs.Data(1);
    this.hs_zdfReadCIntMax = new $hs.Data(1);
    this.hs_zdfShowCIntMax = new $hs.Data(1);
    this.hs_zdfReadCUIntMax = new $hs.Data(1);
    this.hs_zdfShowCUIntMax = new $hs.Data(1);
    this.hs_zdfBoundedCUIntMax = new $hs.Data(1);
    this.hs_zdfStorableCUIntMax = new $hs.Data(1);
    this.hs_zdfEnumCUIntMax = new $hs.Data(1);
    this.hs_zdfEqCUIntMax = new $hs.Data(1);
    this.hs_zdfOrdCUIntMax = new $hs.Data(1);
    this.hs_zdfNumCUIntMax = new $hs.Data(1);
    this.hs_zdfRealCUIntMax = new $hs.Data(1);
    this.hs_zdfIntegralCUIntMax = new $hs.Data(1);
    this.hs_zdfBitsCUIntMax = new $hs.Data(1);
    this.hs_zdfBoundedCIntMax = new $hs.Data(1);
    this.hs_zdfStorableCIntMax = new $hs.Data(1);
    this.hs_zdfEnumCIntMax = new $hs.Data(1);
    this.hs_zdfEqCIntMax = new $hs.Data(1);
    this.hs_zdfOrdCIntMax = new $hs.Data(1);
    this.hs_zdfNumCIntMax = new $hs.Data(1);
    this.hs_zdfRealCIntMax = new $hs.Data(1);
    this.hs_zdfIntegralCIntMax = new $hs.Data(1);
    this.hs_zdfBitsCIntMax = new $hs.Data(1);
    this.hs_zdfBoundedCUIntPtr = new $hs.Data(1);
    this.hs_zdfStorableCUIntPtr = new $hs.Data(1);
    this.hs_zdfEnumCUIntPtr = new $hs.Data(1);
    this.hs_zdfEqCUIntPtr = new $hs.Data(1);
    this.hs_zdfOrdCUIntPtr = new $hs.Data(1);
    this.hs_zdfNumCUIntPtr = new $hs.Data(1);
    this.hs_zdfRealCUIntPtr = new $hs.Data(1);
    this.hs_zdfIntegralCUIntPtr = new $hs.Data(1);
    this.hs_zdfBitsCUIntPtr = new $hs.Data(1);
    this.hs_zdfBoundedCIntPtr = new $hs.Data(1);
    this.hs_zdfStorableCIntPtr = new $hs.Data(1);
    this.hs_zdfEnumCIntPtr = new $hs.Data(1);
    this.hs_zdfEqCIntPtr = new $hs.Data(1);
    this.hs_zdfOrdCIntPtr = new $hs.Data(1);
    this.hs_zdfNumCIntPtr = new $hs.Data(1);
    this.hs_zdfRealCIntPtr = new $hs.Data(1);
    this.hs_zdfIntegralCIntPtr = new $hs.Data(1);
    this.hs_zdfBitsCIntPtr = new $hs.Data(1);
    this.hs_zdfStorableCSUSeconds = new $hs.Data(1);
    this.hs_zdfEnumCSUSeconds = new $hs.Data(1);
    this.hs_zdfEqCSUSeconds = new $hs.Data(1);
    this.hs_zdfOrdCSUSeconds = new $hs.Data(1);
    this.hs_zdfNumCSUSeconds = new $hs.Data(1);
    this.hs_zdfRealCSUSeconds = new $hs.Data(1);
    this.hs_zdfStorableCUSeconds = new $hs.Data(1);
    this.hs_zdfEnumCUSeconds = new $hs.Data(1);
    this.hs_zdfEqCUSeconds = new $hs.Data(1);
    this.hs_zdfOrdCUSeconds = new $hs.Data(1);
    this.hs_zdfNumCUSeconds = new $hs.Data(1);
    this.hs_zdfRealCUSeconds = new $hs.Data(1);
    this.hs_zdfStorableCTime = new $hs.Data(1);
    this.hs_zdfEnumCTime = new $hs.Data(1);
    this.hs_zdfEqCTime = new $hs.Data(1);
    this.hs_zdfOrdCTime = new $hs.Data(1);
    this.hs_zdfNumCTime = new $hs.Data(1);
    this.hs_zdfRealCTime = new $hs.Data(1);
    this.hs_zdfStorableCClock = new $hs.Data(1);
    this.hs_zdfEnumCClock = new $hs.Data(1);
    this.hs_zdfEqCClock = new $hs.Data(1);
    this.hs_zdfOrdCClock = new $hs.Data(1);
    this.hs_zdfNumCClock = new $hs.Data(1);
    this.hs_zdfRealCClock = new $hs.Data(1);
    this.hs_zdfBoundedCSigAtomic = new $hs.Data(1);
    this.hs_zdfStorableCSigAtomic = new $hs.Data(1);
    this.hs_zdfEnumCSigAtomic = new $hs.Data(1);
    this.hs_zdfEqCSigAtomic = new $hs.Data(1);
    this.hs_zdfOrdCSigAtomic = new $hs.Data(1);
    this.hs_zdfNumCSigAtomic = new $hs.Data(1);
    this.hs_zdfRealCSigAtomic = new $hs.Data(1);
    this.hs_zdfIntegralCSigAtomic = new $hs.Data(1);
    this.hs_zdfBitsCSigAtomic = new $hs.Data(1);
    this.hs_zdfBoundedCWchar = new $hs.Data(1);
    this.hs_zdfStorableCWchar = new $hs.Data(1);
    this.hs_zdfEnumCWchar = new $hs.Data(1);
    this.hs_zdfEqCWchar = new $hs.Data(1);
    this.hs_zdfOrdCWchar = new $hs.Data(1);
    this.hs_zdfNumCWchar = new $hs.Data(1);
    this.hs_zdfRealCWchar = new $hs.Data(1);
    this.hs_zdfIntegralCWchar = new $hs.Data(1);
    this.hs_zdfBitsCWchar = new $hs.Data(1);
    this.hs_zdfBoundedCSizze = new $hs.Data(1);
    this.hs_zdfStorableCSizze = new $hs.Data(1);
    this.hs_zdfEnumCSizze = new $hs.Data(1);
    this.hs_zdfEqCSizze = new $hs.Data(1);
    this.hs_zdfOrdCSizze = new $hs.Data(1);
    this.hs_zdfNumCSizze = new $hs.Data(1);
    this.hs_zdfRealCSizze = new $hs.Data(1);
    this.hs_zdfIntegralCSizze = new $hs.Data(1);
    this.hs_zdfBitsCSizze = new $hs.Data(1);
    this.hs_zdfBoundedCPtrdiff = new $hs.Data(1);
    this.hs_zdfStorableCPtrdiff = new $hs.Data(1);
    this.hs_zdfEnumCPtrdiff = new $hs.Data(1);
    this.hs_zdfEqCPtrdiff = new $hs.Data(1);
    this.hs_zdfOrdCPtrdiff = new $hs.Data(1);
    this.hs_zdfNumCPtrdiff = new $hs.Data(1);
    this.hs_zdfRealCPtrdiff = new $hs.Data(1);
    this.hs_zdfIntegralCPtrdiff = new $hs.Data(1);
    this.hs_zdfBitsCPtrdiff = new $hs.Data(1);
    this.hs_zdfStorableCDouble = new $hs.Data(1);
    this.hs_zdfEnumCDouble = new $hs.Data(1);
    this.hs_zdfEqCDouble = new $hs.Data(1);
    this.hs_zdfOrdCDouble = new $hs.Data(1);
    this.hs_zdfNumCDouble = new $hs.Data(1);
    this.hs_zdfRealCDouble = new $hs.Data(1);
    this.hs_zdfFractionalCDouble = new $hs.Data(1);
    this.hs_zdfFloatingCDouble = new $hs.Data(1);
    this.hs_zdfRealFracCDouble = new $hs.Data(1);
    this.hs_zdfRealFloatCDouble = new $hs.Data(1);
    this.hs_zdfStorableCFloat = new $hs.Data(1);
    this.hs_zdfEnumCFloat = new $hs.Data(1);
    this.hs_zdfEqCFloat = new $hs.Data(1);
    this.hs_zdfOrdCFloat = new $hs.Data(1);
    this.hs_zdfNumCFloat = new $hs.Data(1);
    this.hs_zdfRealCFloat = new $hs.Data(1);
    this.hs_zdfFractionalCFloat = new $hs.Data(1);
    this.hs_zdfFloatingCFloat = new $hs.Data(1);
    this.hs_zdfRealFracCFloat = new $hs.Data(1);
    this.hs_zdfRealFloatCFloat = new $hs.Data(1);
    this.hs_zdfBoundedCULLong = new $hs.Data(1);
    this.hs_zdfStorableCULLong = new $hs.Data(1);
    this.hs_zdfEnumCULLong = new $hs.Data(1);
    this.hs_zdfEqCULLong = new $hs.Data(1);
    this.hs_zdfOrdCULLong = new $hs.Data(1);
    this.hs_zdfNumCULLong = new $hs.Data(1);
    this.hs_zdfRealCULLong = new $hs.Data(1);
    this.hs_zdfIntegralCULLong = new $hs.Data(1);
    this.hs_zdfBitsCULLong = new $hs.Data(1);
    this.hs_zdfBoundedCLLong = new $hs.Data(1);
    this.hs_zdfStorableCLLong = new $hs.Data(1);
    this.hs_zdfEnumCLLong = new $hs.Data(1);
    this.hs_zdfEqCLLong = new $hs.Data(1);
    this.hs_zdfOrdCLLong = new $hs.Data(1);
    this.hs_zdfNumCLLong = new $hs.Data(1);
    this.hs_zdfRealCLLong = new $hs.Data(1);
    this.hs_zdfIntegralCLLong = new $hs.Data(1);
    this.hs_zdfBitsCLLong = new $hs.Data(1);
    this.hs_zdfBoundedCULong = new $hs.Data(1);
    this.hs_zdfStorableCULong = new $hs.Data(1);
    this.hs_zdfEnumCULong = new $hs.Data(1);
    this.hs_zdfEqCULong = new $hs.Data(1);
    this.hs_zdfOrdCULong = new $hs.Data(1);
    this.hs_zdfNumCULong = new $hs.Data(1);
    this.hs_zdfRealCULong = new $hs.Data(1);
    this.hs_zdfIntegralCULong = new $hs.Data(1);
    this.hs_zdfBitsCULong = new $hs.Data(1);
    this.hs_zdfBoundedCLong = new $hs.Data(1);
    this.hs_zdfStorableCLong = new $hs.Data(1);
    this.hs_zdfEnumCLong = new $hs.Data(1);
    this.hs_zdfEqCLong = new $hs.Data(1);
    this.hs_zdfOrdCLong = new $hs.Data(1);
    this.hs_zdfNumCLong = new $hs.Data(1);
    this.hs_zdfRealCLong = new $hs.Data(1);
    this.hs_zdfIntegralCLong = new $hs.Data(1);
    this.hs_zdfBitsCLong = new $hs.Data(1);
    this.hs_zdfBoundedCUInt = new $hs.Data(1);
    this.hs_zdfStorableCUInt = new $hs.Data(1);
    this.hs_zdfEnumCUInt = new $hs.Data(1);
    this.hs_zdfEqCUInt = new $hs.Data(1);
    this.hs_zdfOrdCUInt = new $hs.Data(1);
    this.hs_zdfNumCUInt = new $hs.Data(1);
    this.hs_zdfRealCUInt = new $hs.Data(1);
    this.hs_zdfIntegralCUInt = new $hs.Data(1);
    this.hs_zdfBitsCUInt = new $hs.Data(1);
    this.hs_zdfBoundedCInt = new $hs.Data(1);
    this.hs_zdfStorableCInt = new $hs.Data(1);
    this.hs_zdfEnumCInt = new $hs.Data(1);
    this.hs_zdfEqCInt = new $hs.Data(1);
    this.hs_zdfOrdCInt = new $hs.Data(1);
    this.hs_zdfNumCInt = new $hs.Data(1);
    this.hs_zdfRealCInt = new $hs.Data(1);
    this.hs_zdfIntegralCInt = new $hs.Data(1);
    this.hs_zdfBitsCInt = new $hs.Data(1);
    this.hs_zdfBoundedCUShort = new $hs.Data(1);
    this.hs_zdfStorableCUShort = new $hs.Data(1);
    this.hs_zdfEnumCUShort = new $hs.Data(1);
    this.hs_zdfEqCUShort = new $hs.Data(1);
    this.hs_zdfOrdCUShort = new $hs.Data(1);
    this.hs_zdfNumCUShort = new $hs.Data(1);
    this.hs_zdfRealCUShort = new $hs.Data(1);
    this.hs_zdfIntegralCUShort = new $hs.Data(1);
    this.hs_zdfBitsCUShort = new $hs.Data(1);
    this.hs_zdfBoundedCShort = new $hs.Data(1);
    this.hs_zdfStorableCShort = new $hs.Data(1);
    this.hs_zdfEnumCShort = new $hs.Data(1);
    this.hs_zdfEqCShort = new $hs.Data(1);
    this.hs_zdfOrdCShort = new $hs.Data(1);
    this.hs_zdfNumCShort = new $hs.Data(1);
    this.hs_zdfRealCShort = new $hs.Data(1);
    this.hs_zdfIntegralCShort = new $hs.Data(1);
    this.hs_zdfBitsCShort = new $hs.Data(1);
    this.hs_zdfBoundedCUChar = new $hs.Data(1);
    this.hs_zdfStorableCUChar = new $hs.Data(1);
    this.hs_zdfEnumCUChar = new $hs.Data(1);
    this.hs_zdfEqCUChar = new $hs.Data(1);
    this.hs_zdfOrdCUChar = new $hs.Data(1);
    this.hs_zdfNumCUChar = new $hs.Data(1);
    this.hs_zdfRealCUChar = new $hs.Data(1);
    this.hs_zdfIntegralCUChar = new $hs.Data(1);
    this.hs_zdfBitsCUChar = new $hs.Data(1);
    this.hs_zdfBoundedCSChar = new $hs.Data(1);
    this.hs_zdfStorableCSChar = new $hs.Data(1);
    this.hs_zdfEnumCSChar = new $hs.Data(1);
    this.hs_zdfEqCSChar = new $hs.Data(1);
    this.hs_zdfOrdCSChar = new $hs.Data(1);
    this.hs_zdfNumCSChar = new $hs.Data(1);
    this.hs_zdfRealCSChar = new $hs.Data(1);
    this.hs_zdfIntegralCSChar = new $hs.Data(1);
    this.hs_zdfBitsCSChar = new $hs.Data(1);
    this.hs_zdfBoundedCChar = new $hs.Data(1);
    this.hs_zdfStorableCChar = new $hs.Data(1);
    this.hs_zdfEnumCChar = new $hs.Data(1);
    this.hs_zdfEqCChar = new $hs.Data(1);
    this.hs_zdfOrdCChar = new $hs.Data(1);
    this.hs_zdfNumCChar = new $hs.Data(1);
    this.hs_zdfRealCChar = new $hs.Data(1);
    this.hs_zdfIntegralCChar = new $hs.Data(1);
    this.hs_zdfBitsCChar = new $hs.Data(1);
    this.hs_zdfTypeableCChar = new $hs.Thunk();
    this.hs_zdfTypeableCSChar = new $hs.Thunk();
    this.hs_zdfTypeableCUChar = new $hs.Thunk();
    this.hs_zdfTypeableCShort = new $hs.Thunk();
    this.hs_zdfTypeableCUShort = new $hs.Thunk();
    this.hs_zdfTypeableCInt = new $hs.Thunk();
    this.hs_zdfTypeableCUInt = new $hs.Thunk();
    this.hs_zdfTypeableCLong = new $hs.Thunk();
    this.hs_zdfTypeableCULong = new $hs.Thunk();
    this.hs_zdfTypeableCLLong = new $hs.Thunk();
    this.hs_zdfTypeableCULLong = new $hs.Thunk();
    this.hs_zdfTypeableCFloat = new $hs.Thunk();
    this.hs_zdfTypeableCDouble = new $hs.Thunk();
    this.hs_zdfTypeableCPtrdiff = new $hs.Thunk();
    this.hs_zdfTypeableCSizze = new $hs.Thunk();
    this.hs_zdfTypeableCWchar = new $hs.Thunk();
    this.hs_zdfTypeableCSigAtomic = new $hs.Thunk();
    this.hs_zdfTypeableCClock = new $hs.Thunk();
    this.hs_zdfTypeableCTime = new $hs.Thunk();
    this.hs_zdfTypeableCUSeconds = new $hs.Thunk();
    this.hs_zdfTypeableCSUSeconds = new $hs.Thunk();
    this.hs_zdfTypeableCIntPtr = new $hs.Thunk();
    this.hs_zdfTypeableCUIntPtr = new $hs.Thunk();
    this.hs_zdfTypeableCIntMax = new $hs.Thunk();
    this.hs_zdfTypeableCUIntMax = new $hs.Thunk();
    this.hs_CUIntMax = new $hs.Func(1);
    this.hs_CIntMax = new $hs.Func(1);
    this.hs_CUIntPtr = new $hs.Func(1);
    this.hs_CIntPtr = new $hs.Func(1);
    this.hs_CJmpBuf = new $hs.Data(1);
    this.hs_CFpos = new $hs.Data(1);
    this.hs_CFile = new $hs.Data(1);
    this.hs_CSUSeconds = new $hs.Func(1);
    this.hs_CUSeconds = new $hs.Func(1);
    this.hs_CTime = new $hs.Func(1);
    this.hs_CClock = new $hs.Func(1);
    this.hs_CSigAtomic = new $hs.Func(1);
    this.hs_CWchar = new $hs.Func(1);
    this.hs_CSizze = new $hs.Func(1);
    this.hs_CPtrdiff = new $hs.Func(1);
    this.hs_CDouble = new $hs.Func(1);
    this.hs_CFloat = new $hs.Func(1);
    this.hs_CULLong = new $hs.Func(1);
    this.hs_CLLong = new $hs.Func(1);
    this.hs_CULong = new $hs.Func(1);
    this.hs_CLong = new $hs.Func(1);
    this.hs_CUInt = new $hs.Func(1);
    this.hs_CInt = new $hs.Func(1);
    this.hs_CUShort = new $hs.Func(1);
    this.hs_CShort = new $hs.Func(1);
    this.hs_CUChar = new $hs.Func(1);
    this.hs_CSChar = new $hs.Func(1);
    this.hs_CChar = new $hs.Func(1);
    this.hs_zdfReadCChar.notEvaluated = true;
    this.hs_zdfReadCChar.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfShowCChar.notEvaluated = true;
    this.hs_zdfShowCChar.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfReadCSChar.notEvaluated = true;
    this.hs_zdfReadCSChar.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfShowCSChar.notEvaluated = true;
    this.hs_zdfShowCSChar.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfReadCUChar.notEvaluated = true;
    this.hs_zdfReadCUChar.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfShowCUChar.notEvaluated = true;
    this.hs_zdfShowCUChar.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfReadCShort.notEvaluated = true;
    this.hs_zdfReadCShort.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfShowCShort.notEvaluated = true;
    this.hs_zdfShowCShort.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfReadCUShort.notEvaluated = true;
    this.hs_zdfReadCUShort.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfShowCUShort.notEvaluated = true;
    this.hs_zdfShowCUShort.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfReadCInt.notEvaluated = true;
    this.hs_zdfReadCInt.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfShowCInt.notEvaluated = true;
    this.hs_zdfShowCInt.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfReadCUInt.notEvaluated = true;
    this.hs_zdfReadCUInt.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfShowCUInt.notEvaluated = true;
    this.hs_zdfShowCUInt.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfReadCLong.notEvaluated = true;
    this.hs_zdfReadCLong.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfShowCLong.notEvaluated = true;
    this.hs_zdfShowCLong.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfReadCULong.notEvaluated = true;
    this.hs_zdfReadCULong.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfShowCULong.notEvaluated = true;
    this.hs_zdfShowCULong.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfReadCLLong.notEvaluated = true;
    this.hs_zdfReadCLLong.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfShowCLLong.notEvaluated = true;
    this.hs_zdfShowCLLong.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfReadCULLong.notEvaluated = true;
    this.hs_zdfReadCULLong.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfShowCULLong.notEvaluated = true;
    this.hs_zdfShowCULLong.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfReadCFloat.notEvaluated = true;
    this.hs_zdfReadCFloat.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfShowCFloat.notEvaluated = true;
    this.hs_zdfShowCFloat.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfReadCDouble.notEvaluated = true;
    this.hs_zdfReadCDouble.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfShowCDouble.notEvaluated = true;
    this.hs_zdfShowCDouble.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfReadCPtrdiff.notEvaluated = true;
    this.hs_zdfReadCPtrdiff.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfShowCPtrdiff.notEvaluated = true;
    this.hs_zdfShowCPtrdiff.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfReadCSizze.notEvaluated = true;
    this.hs_zdfReadCSizze.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfShowCSizze.notEvaluated = true;
    this.hs_zdfShowCSizze.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfReadCWchar.notEvaluated = true;
    this.hs_zdfReadCWchar.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfShowCWchar.notEvaluated = true;
    this.hs_zdfShowCWchar.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfReadCSigAtomic.notEvaluated = true;
    this.hs_zdfReadCSigAtomic.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfShowCSigAtomic.notEvaluated = true;
    this.hs_zdfShowCSigAtomic.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfReadCClock.notEvaluated = true;
    this.hs_zdfReadCClock.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfShowCClock.notEvaluated = true;
    this.hs_zdfShowCClock.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfReadCTime.notEvaluated = true;
    this.hs_zdfReadCTime.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfShowCTime.notEvaluated = true;
    this.hs_zdfShowCTime.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfReadCUSeconds.notEvaluated = true;
    this.hs_zdfReadCUSeconds.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfShowCUSeconds.notEvaluated = true;
    this.hs_zdfShowCUSeconds.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfReadCSUSeconds.notEvaluated = true;
    this.hs_zdfReadCSUSeconds.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfShowCSUSeconds.notEvaluated = true;
    this.hs_zdfShowCSUSeconds.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfReadCIntPtr.notEvaluated = true;
    this.hs_zdfReadCIntPtr.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfShowCIntPtr.notEvaluated = true;
    this.hs_zdfShowCIntPtr.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfReadCUIntPtr.notEvaluated = true;
    this.hs_zdfReadCUIntPtr.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfShowCUIntPtr.notEvaluated = true;
    this.hs_zdfShowCUIntPtr.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfReadCIntMax.notEvaluated = true;
    this.hs_zdfReadCIntMax.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfShowCIntMax.notEvaluated = true;
    this.hs_zdfShowCIntMax.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfReadCUIntMax.notEvaluated = true;
    this.hs_zdfReadCUIntMax.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfShowCUIntMax.notEvaluated = true;
    this.hs_zdfShowCUIntMax.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBoundedCUIntMax.notEvaluated = true;
    this.hs_zdfBoundedCUIntMax.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfStorableCUIntMax.notEvaluated = true;
    this.hs_zdfStorableCUIntMax.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEnumCUIntMax.notEvaluated = true;
    this.hs_zdfEnumCUIntMax.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEqCUIntMax.notEvaluated = true;
    this.hs_zdfEqCUIntMax.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfOrdCUIntMax.notEvaluated = true;
    this.hs_zdfOrdCUIntMax.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfNumCUIntMax.notEvaluated = true;
    this.hs_zdfNumCUIntMax.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfRealCUIntMax.notEvaluated = true;
    this.hs_zdfRealCUIntMax.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfIntegralCUIntMax.notEvaluated = true;
    this.hs_zdfIntegralCUIntMax.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBitsCUIntMax.notEvaluated = true;
    this.hs_zdfBitsCUIntMax.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBoundedCIntMax.notEvaluated = true;
    this.hs_zdfBoundedCIntMax.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfStorableCIntMax.notEvaluated = true;
    this.hs_zdfStorableCIntMax.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEnumCIntMax.notEvaluated = true;
    this.hs_zdfEnumCIntMax.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEqCIntMax.notEvaluated = true;
    this.hs_zdfEqCIntMax.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfOrdCIntMax.notEvaluated = true;
    this.hs_zdfOrdCIntMax.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfNumCIntMax.notEvaluated = true;
    this.hs_zdfNumCIntMax.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfRealCIntMax.notEvaluated = true;
    this.hs_zdfRealCIntMax.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfIntegralCIntMax.notEvaluated = true;
    this.hs_zdfIntegralCIntMax.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBitsCIntMax.notEvaluated = true;
    this.hs_zdfBitsCIntMax.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBoundedCUIntPtr.notEvaluated = true;
    this.hs_zdfBoundedCUIntPtr.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfStorableCUIntPtr.notEvaluated = true;
    this.hs_zdfStorableCUIntPtr.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEnumCUIntPtr.notEvaluated = true;
    this.hs_zdfEnumCUIntPtr.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEqCUIntPtr.notEvaluated = true;
    this.hs_zdfEqCUIntPtr.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfOrdCUIntPtr.notEvaluated = true;
    this.hs_zdfOrdCUIntPtr.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfNumCUIntPtr.notEvaluated = true;
    this.hs_zdfNumCUIntPtr.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfRealCUIntPtr.notEvaluated = true;
    this.hs_zdfRealCUIntPtr.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfIntegralCUIntPtr.notEvaluated = true;
    this.hs_zdfIntegralCUIntPtr.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBitsCUIntPtr.notEvaluated = true;
    this.hs_zdfBitsCUIntPtr.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBoundedCIntPtr.notEvaluated = true;
    this.hs_zdfBoundedCIntPtr.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfStorableCIntPtr.notEvaluated = true;
    this.hs_zdfStorableCIntPtr.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEnumCIntPtr.notEvaluated = true;
    this.hs_zdfEnumCIntPtr.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEqCIntPtr.notEvaluated = true;
    this.hs_zdfEqCIntPtr.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfOrdCIntPtr.notEvaluated = true;
    this.hs_zdfOrdCIntPtr.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfNumCIntPtr.notEvaluated = true;
    this.hs_zdfNumCIntPtr.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfRealCIntPtr.notEvaluated = true;
    this.hs_zdfRealCIntPtr.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfIntegralCIntPtr.notEvaluated = true;
    this.hs_zdfIntegralCIntPtr.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBitsCIntPtr.notEvaluated = true;
    this.hs_zdfBitsCIntPtr.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfStorableCSUSeconds.notEvaluated = true;
    this.hs_zdfStorableCSUSeconds.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEnumCSUSeconds.notEvaluated = true;
    this.hs_zdfEnumCSUSeconds.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEqCSUSeconds.notEvaluated = true;
    this.hs_zdfEqCSUSeconds.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfOrdCSUSeconds.notEvaluated = true;
    this.hs_zdfOrdCSUSeconds.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfNumCSUSeconds.notEvaluated = true;
    this.hs_zdfNumCSUSeconds.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfRealCSUSeconds.notEvaluated = true;
    this.hs_zdfRealCSUSeconds.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfStorableCUSeconds.notEvaluated = true;
    this.hs_zdfStorableCUSeconds.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEnumCUSeconds.notEvaluated = true;
    this.hs_zdfEnumCUSeconds.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEqCUSeconds.notEvaluated = true;
    this.hs_zdfEqCUSeconds.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfOrdCUSeconds.notEvaluated = true;
    this.hs_zdfOrdCUSeconds.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfNumCUSeconds.notEvaluated = true;
    this.hs_zdfNumCUSeconds.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfRealCUSeconds.notEvaluated = true;
    this.hs_zdfRealCUSeconds.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfStorableCTime.notEvaluated = true;
    this.hs_zdfStorableCTime.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEnumCTime.notEvaluated = true;
    this.hs_zdfEnumCTime.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEqCTime.notEvaluated = true;
    this.hs_zdfEqCTime.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfOrdCTime.notEvaluated = true;
    this.hs_zdfOrdCTime.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfNumCTime.notEvaluated = true;
    this.hs_zdfNumCTime.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfRealCTime.notEvaluated = true;
    this.hs_zdfRealCTime.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfStorableCClock.notEvaluated = true;
    this.hs_zdfStorableCClock.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEnumCClock.notEvaluated = true;
    this.hs_zdfEnumCClock.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEqCClock.notEvaluated = true;
    this.hs_zdfEqCClock.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfOrdCClock.notEvaluated = true;
    this.hs_zdfOrdCClock.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfNumCClock.notEvaluated = true;
    this.hs_zdfNumCClock.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfRealCClock.notEvaluated = true;
    this.hs_zdfRealCClock.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBoundedCSigAtomic.notEvaluated = true;
    this.hs_zdfBoundedCSigAtomic.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfStorableCSigAtomic.notEvaluated = true;
    this.hs_zdfStorableCSigAtomic.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEnumCSigAtomic.notEvaluated = true;
    this.hs_zdfEnumCSigAtomic.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEqCSigAtomic.notEvaluated = true;
    this.hs_zdfEqCSigAtomic.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfOrdCSigAtomic.notEvaluated = true;
    this.hs_zdfOrdCSigAtomic.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfNumCSigAtomic.notEvaluated = true;
    this.hs_zdfNumCSigAtomic.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfRealCSigAtomic.notEvaluated = true;
    this.hs_zdfRealCSigAtomic.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfIntegralCSigAtomic.notEvaluated = true;
    this.hs_zdfIntegralCSigAtomic.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBitsCSigAtomic.notEvaluated = true;
    this.hs_zdfBitsCSigAtomic.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBoundedCWchar.notEvaluated = true;
    this.hs_zdfBoundedCWchar.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfStorableCWchar.notEvaluated = true;
    this.hs_zdfStorableCWchar.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEnumCWchar.notEvaluated = true;
    this.hs_zdfEnumCWchar.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEqCWchar.notEvaluated = true;
    this.hs_zdfEqCWchar.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfOrdCWchar.notEvaluated = true;
    this.hs_zdfOrdCWchar.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfNumCWchar.notEvaluated = true;
    this.hs_zdfNumCWchar.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfRealCWchar.notEvaluated = true;
    this.hs_zdfRealCWchar.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfIntegralCWchar.notEvaluated = true;
    this.hs_zdfIntegralCWchar.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBitsCWchar.notEvaluated = true;
    this.hs_zdfBitsCWchar.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBoundedCSizze.notEvaluated = true;
    this.hs_zdfBoundedCSizze.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfStorableCSizze.notEvaluated = true;
    this.hs_zdfStorableCSizze.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEnumCSizze.notEvaluated = true;
    this.hs_zdfEnumCSizze.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEqCSizze.notEvaluated = true;
    this.hs_zdfEqCSizze.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfOrdCSizze.notEvaluated = true;
    this.hs_zdfOrdCSizze.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfNumCSizze.notEvaluated = true;
    this.hs_zdfNumCSizze.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfRealCSizze.notEvaluated = true;
    this.hs_zdfRealCSizze.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfIntegralCSizze.notEvaluated = true;
    this.hs_zdfIntegralCSizze.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBitsCSizze.notEvaluated = true;
    this.hs_zdfBitsCSizze.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBoundedCPtrdiff.notEvaluated = true;
    this.hs_zdfBoundedCPtrdiff.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfStorableCPtrdiff.notEvaluated = true;
    this.hs_zdfStorableCPtrdiff.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEnumCPtrdiff.notEvaluated = true;
    this.hs_zdfEnumCPtrdiff.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEqCPtrdiff.notEvaluated = true;
    this.hs_zdfEqCPtrdiff.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfOrdCPtrdiff.notEvaluated = true;
    this.hs_zdfOrdCPtrdiff.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfNumCPtrdiff.notEvaluated = true;
    this.hs_zdfNumCPtrdiff.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfRealCPtrdiff.notEvaluated = true;
    this.hs_zdfRealCPtrdiff.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfIntegralCPtrdiff.notEvaluated = true;
    this.hs_zdfIntegralCPtrdiff.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBitsCPtrdiff.notEvaluated = true;
    this.hs_zdfBitsCPtrdiff.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfStorableCDouble.notEvaluated = true;
    this.hs_zdfStorableCDouble.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEnumCDouble.notEvaluated = true;
    this.hs_zdfEnumCDouble.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEqCDouble.notEvaluated = true;
    this.hs_zdfEqCDouble.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfOrdCDouble.notEvaluated = true;
    this.hs_zdfOrdCDouble.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfNumCDouble.notEvaluated = true;
    this.hs_zdfNumCDouble.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfRealCDouble.notEvaluated = true;
    this.hs_zdfRealCDouble.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfFractionalCDouble.notEvaluated = true;
    this.hs_zdfFractionalCDouble.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfFloatingCDouble.notEvaluated = true;
    this.hs_zdfFloatingCDouble.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfRealFracCDouble.notEvaluated = true;
    this.hs_zdfRealFracCDouble.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfRealFloatCDouble.notEvaluated = true;
    this.hs_zdfRealFloatCDouble.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfStorableCFloat.notEvaluated = true;
    this.hs_zdfStorableCFloat.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEnumCFloat.notEvaluated = true;
    this.hs_zdfEnumCFloat.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEqCFloat.notEvaluated = true;
    this.hs_zdfEqCFloat.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfOrdCFloat.notEvaluated = true;
    this.hs_zdfOrdCFloat.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfNumCFloat.notEvaluated = true;
    this.hs_zdfNumCFloat.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfRealCFloat.notEvaluated = true;
    this.hs_zdfRealCFloat.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfFractionalCFloat.notEvaluated = true;
    this.hs_zdfFractionalCFloat.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfFloatingCFloat.notEvaluated = true;
    this.hs_zdfFloatingCFloat.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfRealFracCFloat.notEvaluated = true;
    this.hs_zdfRealFracCFloat.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfRealFloatCFloat.notEvaluated = true;
    this.hs_zdfRealFloatCFloat.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBoundedCULLong.notEvaluated = true;
    this.hs_zdfBoundedCULLong.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfStorableCULLong.notEvaluated = true;
    this.hs_zdfStorableCULLong.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEnumCULLong.notEvaluated = true;
    this.hs_zdfEnumCULLong.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEqCULLong.notEvaluated = true;
    this.hs_zdfEqCULLong.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfOrdCULLong.notEvaluated = true;
    this.hs_zdfOrdCULLong.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfNumCULLong.notEvaluated = true;
    this.hs_zdfNumCULLong.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfRealCULLong.notEvaluated = true;
    this.hs_zdfRealCULLong.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfIntegralCULLong.notEvaluated = true;
    this.hs_zdfIntegralCULLong.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBitsCULLong.notEvaluated = true;
    this.hs_zdfBitsCULLong.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBoundedCLLong.notEvaluated = true;
    this.hs_zdfBoundedCLLong.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfStorableCLLong.notEvaluated = true;
    this.hs_zdfStorableCLLong.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEnumCLLong.notEvaluated = true;
    this.hs_zdfEnumCLLong.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEqCLLong.notEvaluated = true;
    this.hs_zdfEqCLLong.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfOrdCLLong.notEvaluated = true;
    this.hs_zdfOrdCLLong.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfNumCLLong.notEvaluated = true;
    this.hs_zdfNumCLLong.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfRealCLLong.notEvaluated = true;
    this.hs_zdfRealCLLong.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfIntegralCLLong.notEvaluated = true;
    this.hs_zdfIntegralCLLong.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBitsCLLong.notEvaluated = true;
    this.hs_zdfBitsCLLong.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBoundedCULong.notEvaluated = true;
    this.hs_zdfBoundedCULong.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfStorableCULong.notEvaluated = true;
    this.hs_zdfStorableCULong.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEnumCULong.notEvaluated = true;
    this.hs_zdfEnumCULong.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEqCULong.notEvaluated = true;
    this.hs_zdfEqCULong.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfOrdCULong.notEvaluated = true;
    this.hs_zdfOrdCULong.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfNumCULong.notEvaluated = true;
    this.hs_zdfNumCULong.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfRealCULong.notEvaluated = true;
    this.hs_zdfRealCULong.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfIntegralCULong.notEvaluated = true;
    this.hs_zdfIntegralCULong.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBitsCULong.notEvaluated = true;
    this.hs_zdfBitsCULong.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBoundedCLong.notEvaluated = true;
    this.hs_zdfBoundedCLong.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfStorableCLong.notEvaluated = true;
    this.hs_zdfStorableCLong.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEnumCLong.notEvaluated = true;
    this.hs_zdfEnumCLong.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEqCLong.notEvaluated = true;
    this.hs_zdfEqCLong.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfOrdCLong.notEvaluated = true;
    this.hs_zdfOrdCLong.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfNumCLong.notEvaluated = true;
    this.hs_zdfNumCLong.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfRealCLong.notEvaluated = true;
    this.hs_zdfRealCLong.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfIntegralCLong.notEvaluated = true;
    this.hs_zdfIntegralCLong.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBitsCLong.notEvaluated = true;
    this.hs_zdfBitsCLong.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBoundedCUInt.notEvaluated = true;
    this.hs_zdfBoundedCUInt.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfStorableCUInt.notEvaluated = true;
    this.hs_zdfStorableCUInt.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEnumCUInt.notEvaluated = true;
    this.hs_zdfEnumCUInt.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEqCUInt.notEvaluated = true;
    this.hs_zdfEqCUInt.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfOrdCUInt.notEvaluated = true;
    this.hs_zdfOrdCUInt.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfNumCUInt.notEvaluated = true;
    this.hs_zdfNumCUInt.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfRealCUInt.notEvaluated = true;
    this.hs_zdfRealCUInt.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfIntegralCUInt.notEvaluated = true;
    this.hs_zdfIntegralCUInt.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBitsCUInt.notEvaluated = true;
    this.hs_zdfBitsCUInt.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBoundedCInt.notEvaluated = true;
    this.hs_zdfBoundedCInt.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfStorableCInt.notEvaluated = true;
    this.hs_zdfStorableCInt.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEnumCInt.notEvaluated = true;
    this.hs_zdfEnumCInt.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEqCInt.notEvaluated = true;
    this.hs_zdfEqCInt.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfOrdCInt.notEvaluated = true;
    this.hs_zdfOrdCInt.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfNumCInt.notEvaluated = true;
    this.hs_zdfNumCInt.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfRealCInt.notEvaluated = true;
    this.hs_zdfRealCInt.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfIntegralCInt.notEvaluated = true;
    this.hs_zdfIntegralCInt.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBitsCInt.notEvaluated = true;
    this.hs_zdfBitsCInt.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBoundedCUShort.notEvaluated = true;
    this.hs_zdfBoundedCUShort.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfStorableCUShort.notEvaluated = true;
    this.hs_zdfStorableCUShort.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEnumCUShort.notEvaluated = true;
    this.hs_zdfEnumCUShort.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEqCUShort.notEvaluated = true;
    this.hs_zdfEqCUShort.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfOrdCUShort.notEvaluated = true;
    this.hs_zdfOrdCUShort.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfNumCUShort.notEvaluated = true;
    this.hs_zdfNumCUShort.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfRealCUShort.notEvaluated = true;
    this.hs_zdfRealCUShort.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfIntegralCUShort.notEvaluated = true;
    this.hs_zdfIntegralCUShort.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBitsCUShort.notEvaluated = true;
    this.hs_zdfBitsCUShort.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBoundedCShort.notEvaluated = true;
    this.hs_zdfBoundedCShort.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfStorableCShort.notEvaluated = true;
    this.hs_zdfStorableCShort.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEnumCShort.notEvaluated = true;
    this.hs_zdfEnumCShort.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEqCShort.notEvaluated = true;
    this.hs_zdfEqCShort.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfOrdCShort.notEvaluated = true;
    this.hs_zdfOrdCShort.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfNumCShort.notEvaluated = true;
    this.hs_zdfNumCShort.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfRealCShort.notEvaluated = true;
    this.hs_zdfRealCShort.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfIntegralCShort.notEvaluated = true;
    this.hs_zdfIntegralCShort.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBitsCShort.notEvaluated = true;
    this.hs_zdfBitsCShort.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBoundedCUChar.notEvaluated = true;
    this.hs_zdfBoundedCUChar.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfStorableCUChar.notEvaluated = true;
    this.hs_zdfStorableCUChar.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEnumCUChar.notEvaluated = true;
    this.hs_zdfEnumCUChar.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEqCUChar.notEvaluated = true;
    this.hs_zdfEqCUChar.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfOrdCUChar.notEvaluated = true;
    this.hs_zdfOrdCUChar.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfNumCUChar.notEvaluated = true;
    this.hs_zdfNumCUChar.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfRealCUChar.notEvaluated = true;
    this.hs_zdfRealCUChar.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfIntegralCUChar.notEvaluated = true;
    this.hs_zdfIntegralCUChar.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBitsCUChar.notEvaluated = true;
    this.hs_zdfBitsCUChar.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBoundedCSChar.notEvaluated = true;
    this.hs_zdfBoundedCSChar.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfStorableCSChar.notEvaluated = true;
    this.hs_zdfStorableCSChar.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEnumCSChar.notEvaluated = true;
    this.hs_zdfEnumCSChar.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEqCSChar.notEvaluated = true;
    this.hs_zdfEqCSChar.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfOrdCSChar.notEvaluated = true;
    this.hs_zdfOrdCSChar.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfNumCSChar.notEvaluated = true;
    this.hs_zdfNumCSChar.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfRealCSChar.notEvaluated = true;
    this.hs_zdfRealCSChar.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfIntegralCSChar.notEvaluated = true;
    this.hs_zdfIntegralCSChar.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBitsCSChar.notEvaluated = true;
    this.hs_zdfBitsCSChar.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBoundedCChar.notEvaluated = true;
    this.hs_zdfBoundedCChar.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfStorableCChar.notEvaluated = true;
    this.hs_zdfStorableCChar.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEnumCChar.notEvaluated = true;
    this.hs_zdfEnumCChar.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEqCChar.notEvaluated = true;
    this.hs_zdfEqCChar.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfOrdCChar.notEvaluated = true;
    this.hs_zdfOrdCChar.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfNumCChar.notEvaluated = true;
    this.hs_zdfNumCChar.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfRealCChar.notEvaluated = true;
    this.hs_zdfRealCChar.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfIntegralCChar.notEvaluated = true;
    this.hs_zdfIntegralCChar.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBitsCChar.notEvaluated = true;
    this.hs_zdfBitsCChar.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfTypeableCChar.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfTypeableCSChar.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfTypeableCUChar.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfTypeableCShort.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfTypeableCUShort.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfTypeableCInt.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfTypeableCUInt.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfTypeableCLong.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfTypeableCULong.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfTypeableCLLong.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfTypeableCULLong.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfTypeableCFloat.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfTypeableCDouble.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfTypeableCPtrdiff.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfTypeableCSizze.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfTypeableCWchar.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfTypeableCSigAtomic.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfTypeableCClock.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfTypeableCTime.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfTypeableCUSeconds.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfTypeableCSUSeconds.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfTypeableCIntPtr.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfTypeableCUIntPtr.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfTypeableCIntMax.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfTypeableCUIntMax.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_CUIntMax.notEvaluated = true;
    this.hs_CUIntMax.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_CIntMax.notEvaluated = true;
    this.hs_CIntMax.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_CUIntPtr.notEvaluated = true;
    this.hs_CUIntPtr.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_CIntPtr.notEvaluated = true;
    this.hs_CIntPtr.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_CJmpBuf.notEvaluated = true;
    this.hs_CJmpBuf.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_CFpos.notEvaluated = true;
    this.hs_CFpos.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_CFile.notEvaluated = true;
    this.hs_CFile.evaluate = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this;
    };
    this.hs_CSUSeconds.notEvaluated = true;
    this.hs_CSUSeconds.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_CUSeconds.notEvaluated = true;
    this.hs_CUSeconds.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_CTime.notEvaluated = true;
    this.hs_CTime.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_CClock.notEvaluated = true;
    this.hs_CClock.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_CSigAtomic.notEvaluated = true;
    this.hs_CSigAtomic.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_CWchar.notEvaluated = true;
    this.hs_CWchar.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_CSizze.notEvaluated = true;
    this.hs_CSizze.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_CPtrdiff.notEvaluated = true;
    this.hs_CPtrdiff.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_CDouble.notEvaluated = true;
    this.hs_CDouble.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_CFloat.notEvaluated = true;
    this.hs_CFloat.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_CULLong.notEvaluated = true;
    this.hs_CULLong.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_CLLong.notEvaluated = true;
    this.hs_CLLong.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_CULong.notEvaluated = true;
    this.hs_CULong.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_CLong.notEvaluated = true;
    this.hs_CLong.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_CUInt.notEvaluated = true;
    this.hs_CUInt.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_CInt.notEvaluated = true;
    this.hs_CInt.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_CUShort.notEvaluated = true;
    this.hs_CUShort.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_CShort.notEvaluated = true;
    this.hs_CShort.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_CUChar.notEvaluated = true;
    this.hs_CUChar.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_CSChar.notEvaluated = true;
    this.hs_CSChar.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_CChar.notEvaluated = true;
    this.hs_CChar.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
};
$hs.modules.ForeignziCziTypes.initAfterDependencies = function () {
    this.hs_zdfReadCChar.notEvaluated = false;
    this.hs_zdfReadCChar.evaluate = function () {
        return this;
    };
    this.hs_zdfShowCChar.notEvaluated = false;
    this.hs_zdfShowCChar.evaluate = function () {
        return this;
    };
    this.hs_zdfReadCSChar.notEvaluated = false;
    this.hs_zdfReadCSChar.evaluate = function () {
        return this;
    };
    this.hs_zdfShowCSChar.notEvaluated = false;
    this.hs_zdfShowCSChar.evaluate = function () {
        return this;
    };
    this.hs_zdfReadCUChar.notEvaluated = false;
    this.hs_zdfReadCUChar.evaluate = function () {
        return this;
    };
    this.hs_zdfShowCUChar.notEvaluated = false;
    this.hs_zdfShowCUChar.evaluate = function () {
        return this;
    };
    this.hs_zdfReadCShort.notEvaluated = false;
    this.hs_zdfReadCShort.evaluate = function () {
        return this;
    };
    this.hs_zdfShowCShort.notEvaluated = false;
    this.hs_zdfShowCShort.evaluate = function () {
        return this;
    };
    this.hs_zdfReadCUShort.notEvaluated = false;
    this.hs_zdfReadCUShort.evaluate = function () {
        return this;
    };
    this.hs_zdfShowCUShort.notEvaluated = false;
    this.hs_zdfShowCUShort.evaluate = function () {
        return this;
    };
    this.hs_zdfReadCInt.notEvaluated = false;
    this.hs_zdfReadCInt.evaluate = function () {
        return this;
    };
    this.hs_zdfShowCInt.notEvaluated = false;
    this.hs_zdfShowCInt.evaluate = function () {
        return this;
    };
    this.hs_zdfReadCUInt.notEvaluated = false;
    this.hs_zdfReadCUInt.evaluate = function () {
        return this;
    };
    this.hs_zdfShowCUInt.notEvaluated = false;
    this.hs_zdfShowCUInt.evaluate = function () {
        return this;
    };
    this.hs_zdfReadCLong.notEvaluated = false;
    this.hs_zdfReadCLong.evaluate = function () {
        return this;
    };
    this.hs_zdfShowCLong.notEvaluated = false;
    this.hs_zdfShowCLong.evaluate = function () {
        return this;
    };
    this.hs_zdfReadCULong.notEvaluated = false;
    this.hs_zdfReadCULong.evaluate = function () {
        return this;
    };
    this.hs_zdfShowCULong.notEvaluated = false;
    this.hs_zdfShowCULong.evaluate = function () {
        return this;
    };
    this.hs_zdfReadCLLong.notEvaluated = false;
    this.hs_zdfReadCLLong.evaluate = function () {
        return this;
    };
    this.hs_zdfShowCLLong.notEvaluated = false;
    this.hs_zdfShowCLLong.evaluate = function () {
        return this;
    };
    this.hs_zdfReadCULLong.notEvaluated = false;
    this.hs_zdfReadCULLong.evaluate = function () {
        return this;
    };
    this.hs_zdfShowCULLong.notEvaluated = false;
    this.hs_zdfShowCULLong.evaluate = function () {
        return this;
    };
    this.hs_zdfReadCFloat.notEvaluated = false;
    this.hs_zdfReadCFloat.evaluate = function () {
        return this;
    };
    this.hs_zdfShowCFloat.notEvaluated = false;
    this.hs_zdfShowCFloat.evaluate = function () {
        return this;
    };
    this.hs_zdfReadCDouble.notEvaluated = false;
    this.hs_zdfReadCDouble.evaluate = function () {
        return this;
    };
    this.hs_zdfShowCDouble.notEvaluated = false;
    this.hs_zdfShowCDouble.evaluate = function () {
        return this;
    };
    this.hs_zdfReadCPtrdiff.notEvaluated = false;
    this.hs_zdfReadCPtrdiff.evaluate = function () {
        return this;
    };
    this.hs_zdfShowCPtrdiff.notEvaluated = false;
    this.hs_zdfShowCPtrdiff.evaluate = function () {
        return this;
    };
    this.hs_zdfReadCSizze.notEvaluated = false;
    this.hs_zdfReadCSizze.evaluate = function () {
        return this;
    };
    this.hs_zdfShowCSizze.notEvaluated = false;
    this.hs_zdfShowCSizze.evaluate = function () {
        return this;
    };
    this.hs_zdfReadCWchar.notEvaluated = false;
    this.hs_zdfReadCWchar.evaluate = function () {
        return this;
    };
    this.hs_zdfShowCWchar.notEvaluated = false;
    this.hs_zdfShowCWchar.evaluate = function () {
        return this;
    };
    this.hs_zdfReadCSigAtomic.notEvaluated = false;
    this.hs_zdfReadCSigAtomic.evaluate = function () {
        return this;
    };
    this.hs_zdfShowCSigAtomic.notEvaluated = false;
    this.hs_zdfShowCSigAtomic.evaluate = function () {
        return this;
    };
    this.hs_zdfReadCClock.notEvaluated = false;
    this.hs_zdfReadCClock.evaluate = function () {
        return this;
    };
    this.hs_zdfShowCClock.notEvaluated = false;
    this.hs_zdfShowCClock.evaluate = function () {
        return this;
    };
    this.hs_zdfReadCTime.notEvaluated = false;
    this.hs_zdfReadCTime.evaluate = function () {
        return this;
    };
    this.hs_zdfShowCTime.notEvaluated = false;
    this.hs_zdfShowCTime.evaluate = function () {
        return this;
    };
    this.hs_zdfReadCUSeconds.notEvaluated = false;
    this.hs_zdfReadCUSeconds.evaluate = function () {
        return this;
    };
    this.hs_zdfShowCUSeconds.notEvaluated = false;
    this.hs_zdfShowCUSeconds.evaluate = function () {
        return this;
    };
    this.hs_zdfReadCSUSeconds.notEvaluated = false;
    this.hs_zdfReadCSUSeconds.evaluate = function () {
        return this;
    };
    this.hs_zdfShowCSUSeconds.notEvaluated = false;
    this.hs_zdfShowCSUSeconds.evaluate = function () {
        return this;
    };
    this.hs_zdfReadCIntPtr.notEvaluated = false;
    this.hs_zdfReadCIntPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfShowCIntPtr.notEvaluated = false;
    this.hs_zdfShowCIntPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfReadCUIntPtr.notEvaluated = false;
    this.hs_zdfReadCUIntPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfShowCUIntPtr.notEvaluated = false;
    this.hs_zdfShowCUIntPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfReadCIntMax.notEvaluated = false;
    this.hs_zdfReadCIntMax.evaluate = function () {
        return this;
    };
    this.hs_zdfShowCIntMax.notEvaluated = false;
    this.hs_zdfShowCIntMax.evaluate = function () {
        return this;
    };
    this.hs_zdfReadCUIntMax.notEvaluated = false;
    this.hs_zdfReadCUIntMax.evaluate = function () {
        return this;
    };
    this.hs_zdfShowCUIntMax.notEvaluated = false;
    this.hs_zdfShowCUIntMax.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedCUIntMax.notEvaluated = false;
    this.hs_zdfBoundedCUIntMax.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableCUIntMax.notEvaluated = false;
    this.hs_zdfStorableCUIntMax.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumCUIntMax.notEvaluated = false;
    this.hs_zdfEnumCUIntMax.evaluate = function () {
        return this;
    };
    this.hs_zdfEqCUIntMax.notEvaluated = false;
    this.hs_zdfEqCUIntMax.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdCUIntMax.notEvaluated = false;
    this.hs_zdfOrdCUIntMax.evaluate = function () {
        return this;
    };
    this.hs_zdfNumCUIntMax.notEvaluated = false;
    this.hs_zdfNumCUIntMax.evaluate = function () {
        return this;
    };
    this.hs_zdfRealCUIntMax.notEvaluated = false;
    this.hs_zdfRealCUIntMax.evaluate = function () {
        return this;
    };
    this.hs_zdfIntegralCUIntMax.notEvaluated = false;
    this.hs_zdfIntegralCUIntMax.evaluate = function () {
        return this;
    };
    this.hs_zdfBitsCUIntMax.notEvaluated = false;
    this.hs_zdfBitsCUIntMax.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedCIntMax.notEvaluated = false;
    this.hs_zdfBoundedCIntMax.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableCIntMax.notEvaluated = false;
    this.hs_zdfStorableCIntMax.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumCIntMax.notEvaluated = false;
    this.hs_zdfEnumCIntMax.evaluate = function () {
        return this;
    };
    this.hs_zdfEqCIntMax.notEvaluated = false;
    this.hs_zdfEqCIntMax.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdCIntMax.notEvaluated = false;
    this.hs_zdfOrdCIntMax.evaluate = function () {
        return this;
    };
    this.hs_zdfNumCIntMax.notEvaluated = false;
    this.hs_zdfNumCIntMax.evaluate = function () {
        return this;
    };
    this.hs_zdfRealCIntMax.notEvaluated = false;
    this.hs_zdfRealCIntMax.evaluate = function () {
        return this;
    };
    this.hs_zdfIntegralCIntMax.notEvaluated = false;
    this.hs_zdfIntegralCIntMax.evaluate = function () {
        return this;
    };
    this.hs_zdfBitsCIntMax.notEvaluated = false;
    this.hs_zdfBitsCIntMax.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedCUIntPtr.notEvaluated = false;
    this.hs_zdfBoundedCUIntPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableCUIntPtr.notEvaluated = false;
    this.hs_zdfStorableCUIntPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumCUIntPtr.notEvaluated = false;
    this.hs_zdfEnumCUIntPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfEqCUIntPtr.notEvaluated = false;
    this.hs_zdfEqCUIntPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdCUIntPtr.notEvaluated = false;
    this.hs_zdfOrdCUIntPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfNumCUIntPtr.notEvaluated = false;
    this.hs_zdfNumCUIntPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfRealCUIntPtr.notEvaluated = false;
    this.hs_zdfRealCUIntPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfIntegralCUIntPtr.notEvaluated = false;
    this.hs_zdfIntegralCUIntPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfBitsCUIntPtr.notEvaluated = false;
    this.hs_zdfBitsCUIntPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedCIntPtr.notEvaluated = false;
    this.hs_zdfBoundedCIntPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableCIntPtr.notEvaluated = false;
    this.hs_zdfStorableCIntPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumCIntPtr.notEvaluated = false;
    this.hs_zdfEnumCIntPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfEqCIntPtr.notEvaluated = false;
    this.hs_zdfEqCIntPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdCIntPtr.notEvaluated = false;
    this.hs_zdfOrdCIntPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfNumCIntPtr.notEvaluated = false;
    this.hs_zdfNumCIntPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfRealCIntPtr.notEvaluated = false;
    this.hs_zdfRealCIntPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfIntegralCIntPtr.notEvaluated = false;
    this.hs_zdfIntegralCIntPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfBitsCIntPtr.notEvaluated = false;
    this.hs_zdfBitsCIntPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableCSUSeconds.notEvaluated = false;
    this.hs_zdfStorableCSUSeconds.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumCSUSeconds.notEvaluated = false;
    this.hs_zdfEnumCSUSeconds.evaluate = function () {
        return this;
    };
    this.hs_zdfEqCSUSeconds.notEvaluated = false;
    this.hs_zdfEqCSUSeconds.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdCSUSeconds.notEvaluated = false;
    this.hs_zdfOrdCSUSeconds.evaluate = function () {
        return this;
    };
    this.hs_zdfNumCSUSeconds.notEvaluated = false;
    this.hs_zdfNumCSUSeconds.evaluate = function () {
        return this;
    };
    this.hs_zdfRealCSUSeconds.notEvaluated = false;
    this.hs_zdfRealCSUSeconds.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableCUSeconds.notEvaluated = false;
    this.hs_zdfStorableCUSeconds.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumCUSeconds.notEvaluated = false;
    this.hs_zdfEnumCUSeconds.evaluate = function () {
        return this;
    };
    this.hs_zdfEqCUSeconds.notEvaluated = false;
    this.hs_zdfEqCUSeconds.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdCUSeconds.notEvaluated = false;
    this.hs_zdfOrdCUSeconds.evaluate = function () {
        return this;
    };
    this.hs_zdfNumCUSeconds.notEvaluated = false;
    this.hs_zdfNumCUSeconds.evaluate = function () {
        return this;
    };
    this.hs_zdfRealCUSeconds.notEvaluated = false;
    this.hs_zdfRealCUSeconds.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableCTime.notEvaluated = false;
    this.hs_zdfStorableCTime.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumCTime.notEvaluated = false;
    this.hs_zdfEnumCTime.evaluate = function () {
        return this;
    };
    this.hs_zdfEqCTime.notEvaluated = false;
    this.hs_zdfEqCTime.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdCTime.notEvaluated = false;
    this.hs_zdfOrdCTime.evaluate = function () {
        return this;
    };
    this.hs_zdfNumCTime.notEvaluated = false;
    this.hs_zdfNumCTime.evaluate = function () {
        return this;
    };
    this.hs_zdfRealCTime.notEvaluated = false;
    this.hs_zdfRealCTime.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableCClock.notEvaluated = false;
    this.hs_zdfStorableCClock.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumCClock.notEvaluated = false;
    this.hs_zdfEnumCClock.evaluate = function () {
        return this;
    };
    this.hs_zdfEqCClock.notEvaluated = false;
    this.hs_zdfEqCClock.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdCClock.notEvaluated = false;
    this.hs_zdfOrdCClock.evaluate = function () {
        return this;
    };
    this.hs_zdfNumCClock.notEvaluated = false;
    this.hs_zdfNumCClock.evaluate = function () {
        return this;
    };
    this.hs_zdfRealCClock.notEvaluated = false;
    this.hs_zdfRealCClock.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedCSigAtomic.notEvaluated = false;
    this.hs_zdfBoundedCSigAtomic.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableCSigAtomic.notEvaluated = false;
    this.hs_zdfStorableCSigAtomic.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumCSigAtomic.notEvaluated = false;
    this.hs_zdfEnumCSigAtomic.evaluate = function () {
        return this;
    };
    this.hs_zdfEqCSigAtomic.notEvaluated = false;
    this.hs_zdfEqCSigAtomic.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdCSigAtomic.notEvaluated = false;
    this.hs_zdfOrdCSigAtomic.evaluate = function () {
        return this;
    };
    this.hs_zdfNumCSigAtomic.notEvaluated = false;
    this.hs_zdfNumCSigAtomic.evaluate = function () {
        return this;
    };
    this.hs_zdfRealCSigAtomic.notEvaluated = false;
    this.hs_zdfRealCSigAtomic.evaluate = function () {
        return this;
    };
    this.hs_zdfIntegralCSigAtomic.notEvaluated = false;
    this.hs_zdfIntegralCSigAtomic.evaluate = function () {
        return this;
    };
    this.hs_zdfBitsCSigAtomic.notEvaluated = false;
    this.hs_zdfBitsCSigAtomic.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedCWchar.notEvaluated = false;
    this.hs_zdfBoundedCWchar.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableCWchar.notEvaluated = false;
    this.hs_zdfStorableCWchar.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumCWchar.notEvaluated = false;
    this.hs_zdfEnumCWchar.evaluate = function () {
        return this;
    };
    this.hs_zdfEqCWchar.notEvaluated = false;
    this.hs_zdfEqCWchar.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdCWchar.notEvaluated = false;
    this.hs_zdfOrdCWchar.evaluate = function () {
        return this;
    };
    this.hs_zdfNumCWchar.notEvaluated = false;
    this.hs_zdfNumCWchar.evaluate = function () {
        return this;
    };
    this.hs_zdfRealCWchar.notEvaluated = false;
    this.hs_zdfRealCWchar.evaluate = function () {
        return this;
    };
    this.hs_zdfIntegralCWchar.notEvaluated = false;
    this.hs_zdfIntegralCWchar.evaluate = function () {
        return this;
    };
    this.hs_zdfBitsCWchar.notEvaluated = false;
    this.hs_zdfBitsCWchar.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedCSizze.notEvaluated = false;
    this.hs_zdfBoundedCSizze.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableCSizze.notEvaluated = false;
    this.hs_zdfStorableCSizze.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumCSizze.notEvaluated = false;
    this.hs_zdfEnumCSizze.evaluate = function () {
        return this;
    };
    this.hs_zdfEqCSizze.notEvaluated = false;
    this.hs_zdfEqCSizze.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdCSizze.notEvaluated = false;
    this.hs_zdfOrdCSizze.evaluate = function () {
        return this;
    };
    this.hs_zdfNumCSizze.notEvaluated = false;
    this.hs_zdfNumCSizze.evaluate = function () {
        return this;
    };
    this.hs_zdfRealCSizze.notEvaluated = false;
    this.hs_zdfRealCSizze.evaluate = function () {
        return this;
    };
    this.hs_zdfIntegralCSizze.notEvaluated = false;
    this.hs_zdfIntegralCSizze.evaluate = function () {
        return this;
    };
    this.hs_zdfBitsCSizze.notEvaluated = false;
    this.hs_zdfBitsCSizze.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedCPtrdiff.notEvaluated = false;
    this.hs_zdfBoundedCPtrdiff.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableCPtrdiff.notEvaluated = false;
    this.hs_zdfStorableCPtrdiff.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumCPtrdiff.notEvaluated = false;
    this.hs_zdfEnumCPtrdiff.evaluate = function () {
        return this;
    };
    this.hs_zdfEqCPtrdiff.notEvaluated = false;
    this.hs_zdfEqCPtrdiff.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdCPtrdiff.notEvaluated = false;
    this.hs_zdfOrdCPtrdiff.evaluate = function () {
        return this;
    };
    this.hs_zdfNumCPtrdiff.notEvaluated = false;
    this.hs_zdfNumCPtrdiff.evaluate = function () {
        return this;
    };
    this.hs_zdfRealCPtrdiff.notEvaluated = false;
    this.hs_zdfRealCPtrdiff.evaluate = function () {
        return this;
    };
    this.hs_zdfIntegralCPtrdiff.notEvaluated = false;
    this.hs_zdfIntegralCPtrdiff.evaluate = function () {
        return this;
    };
    this.hs_zdfBitsCPtrdiff.notEvaluated = false;
    this.hs_zdfBitsCPtrdiff.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableCDouble.notEvaluated = false;
    this.hs_zdfStorableCDouble.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumCDouble.notEvaluated = false;
    this.hs_zdfEnumCDouble.evaluate = function () {
        return this;
    };
    this.hs_zdfEqCDouble.notEvaluated = false;
    this.hs_zdfEqCDouble.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdCDouble.notEvaluated = false;
    this.hs_zdfOrdCDouble.evaluate = function () {
        return this;
    };
    this.hs_zdfNumCDouble.notEvaluated = false;
    this.hs_zdfNumCDouble.evaluate = function () {
        return this;
    };
    this.hs_zdfRealCDouble.notEvaluated = false;
    this.hs_zdfRealCDouble.evaluate = function () {
        return this;
    };
    this.hs_zdfFractionalCDouble.notEvaluated = false;
    this.hs_zdfFractionalCDouble.evaluate = function () {
        return this;
    };
    this.hs_zdfFloatingCDouble.notEvaluated = false;
    this.hs_zdfFloatingCDouble.evaluate = function () {
        return this;
    };
    this.hs_zdfRealFracCDouble.notEvaluated = false;
    this.hs_zdfRealFracCDouble.evaluate = function () {
        return this;
    };
    this.hs_zdfRealFloatCDouble.notEvaluated = false;
    this.hs_zdfRealFloatCDouble.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableCFloat.notEvaluated = false;
    this.hs_zdfStorableCFloat.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumCFloat.notEvaluated = false;
    this.hs_zdfEnumCFloat.evaluate = function () {
        return this;
    };
    this.hs_zdfEqCFloat.notEvaluated = false;
    this.hs_zdfEqCFloat.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdCFloat.notEvaluated = false;
    this.hs_zdfOrdCFloat.evaluate = function () {
        return this;
    };
    this.hs_zdfNumCFloat.notEvaluated = false;
    this.hs_zdfNumCFloat.evaluate = function () {
        return this;
    };
    this.hs_zdfRealCFloat.notEvaluated = false;
    this.hs_zdfRealCFloat.evaluate = function () {
        return this;
    };
    this.hs_zdfFractionalCFloat.notEvaluated = false;
    this.hs_zdfFractionalCFloat.evaluate = function () {
        return this;
    };
    this.hs_zdfFloatingCFloat.notEvaluated = false;
    this.hs_zdfFloatingCFloat.evaluate = function () {
        return this;
    };
    this.hs_zdfRealFracCFloat.notEvaluated = false;
    this.hs_zdfRealFracCFloat.evaluate = function () {
        return this;
    };
    this.hs_zdfRealFloatCFloat.notEvaluated = false;
    this.hs_zdfRealFloatCFloat.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedCULLong.notEvaluated = false;
    this.hs_zdfBoundedCULLong.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableCULLong.notEvaluated = false;
    this.hs_zdfStorableCULLong.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumCULLong.notEvaluated = false;
    this.hs_zdfEnumCULLong.evaluate = function () {
        return this;
    };
    this.hs_zdfEqCULLong.notEvaluated = false;
    this.hs_zdfEqCULLong.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdCULLong.notEvaluated = false;
    this.hs_zdfOrdCULLong.evaluate = function () {
        return this;
    };
    this.hs_zdfNumCULLong.notEvaluated = false;
    this.hs_zdfNumCULLong.evaluate = function () {
        return this;
    };
    this.hs_zdfRealCULLong.notEvaluated = false;
    this.hs_zdfRealCULLong.evaluate = function () {
        return this;
    };
    this.hs_zdfIntegralCULLong.notEvaluated = false;
    this.hs_zdfIntegralCULLong.evaluate = function () {
        return this;
    };
    this.hs_zdfBitsCULLong.notEvaluated = false;
    this.hs_zdfBitsCULLong.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedCLLong.notEvaluated = false;
    this.hs_zdfBoundedCLLong.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableCLLong.notEvaluated = false;
    this.hs_zdfStorableCLLong.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumCLLong.notEvaluated = false;
    this.hs_zdfEnumCLLong.evaluate = function () {
        return this;
    };
    this.hs_zdfEqCLLong.notEvaluated = false;
    this.hs_zdfEqCLLong.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdCLLong.notEvaluated = false;
    this.hs_zdfOrdCLLong.evaluate = function () {
        return this;
    };
    this.hs_zdfNumCLLong.notEvaluated = false;
    this.hs_zdfNumCLLong.evaluate = function () {
        return this;
    };
    this.hs_zdfRealCLLong.notEvaluated = false;
    this.hs_zdfRealCLLong.evaluate = function () {
        return this;
    };
    this.hs_zdfIntegralCLLong.notEvaluated = false;
    this.hs_zdfIntegralCLLong.evaluate = function () {
        return this;
    };
    this.hs_zdfBitsCLLong.notEvaluated = false;
    this.hs_zdfBitsCLLong.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedCULong.notEvaluated = false;
    this.hs_zdfBoundedCULong.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableCULong.notEvaluated = false;
    this.hs_zdfStorableCULong.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumCULong.notEvaluated = false;
    this.hs_zdfEnumCULong.evaluate = function () {
        return this;
    };
    this.hs_zdfEqCULong.notEvaluated = false;
    this.hs_zdfEqCULong.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdCULong.notEvaluated = false;
    this.hs_zdfOrdCULong.evaluate = function () {
        return this;
    };
    this.hs_zdfNumCULong.notEvaluated = false;
    this.hs_zdfNumCULong.evaluate = function () {
        return this;
    };
    this.hs_zdfRealCULong.notEvaluated = false;
    this.hs_zdfRealCULong.evaluate = function () {
        return this;
    };
    this.hs_zdfIntegralCULong.notEvaluated = false;
    this.hs_zdfIntegralCULong.evaluate = function () {
        return this;
    };
    this.hs_zdfBitsCULong.notEvaluated = false;
    this.hs_zdfBitsCULong.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedCLong.notEvaluated = false;
    this.hs_zdfBoundedCLong.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableCLong.notEvaluated = false;
    this.hs_zdfStorableCLong.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumCLong.notEvaluated = false;
    this.hs_zdfEnumCLong.evaluate = function () {
        return this;
    };
    this.hs_zdfEqCLong.notEvaluated = false;
    this.hs_zdfEqCLong.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdCLong.notEvaluated = false;
    this.hs_zdfOrdCLong.evaluate = function () {
        return this;
    };
    this.hs_zdfNumCLong.notEvaluated = false;
    this.hs_zdfNumCLong.evaluate = function () {
        return this;
    };
    this.hs_zdfRealCLong.notEvaluated = false;
    this.hs_zdfRealCLong.evaluate = function () {
        return this;
    };
    this.hs_zdfIntegralCLong.notEvaluated = false;
    this.hs_zdfIntegralCLong.evaluate = function () {
        return this;
    };
    this.hs_zdfBitsCLong.notEvaluated = false;
    this.hs_zdfBitsCLong.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedCUInt.notEvaluated = false;
    this.hs_zdfBoundedCUInt.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableCUInt.notEvaluated = false;
    this.hs_zdfStorableCUInt.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumCUInt.notEvaluated = false;
    this.hs_zdfEnumCUInt.evaluate = function () {
        return this;
    };
    this.hs_zdfEqCUInt.notEvaluated = false;
    this.hs_zdfEqCUInt.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdCUInt.notEvaluated = false;
    this.hs_zdfOrdCUInt.evaluate = function () {
        return this;
    };
    this.hs_zdfNumCUInt.notEvaluated = false;
    this.hs_zdfNumCUInt.evaluate = function () {
        return this;
    };
    this.hs_zdfRealCUInt.notEvaluated = false;
    this.hs_zdfRealCUInt.evaluate = function () {
        return this;
    };
    this.hs_zdfIntegralCUInt.notEvaluated = false;
    this.hs_zdfIntegralCUInt.evaluate = function () {
        return this;
    };
    this.hs_zdfBitsCUInt.notEvaluated = false;
    this.hs_zdfBitsCUInt.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedCInt.notEvaluated = false;
    this.hs_zdfBoundedCInt.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableCInt.notEvaluated = false;
    this.hs_zdfStorableCInt.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumCInt.notEvaluated = false;
    this.hs_zdfEnumCInt.evaluate = function () {
        return this;
    };
    this.hs_zdfEqCInt.notEvaluated = false;
    this.hs_zdfEqCInt.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdCInt.notEvaluated = false;
    this.hs_zdfOrdCInt.evaluate = function () {
        return this;
    };
    this.hs_zdfNumCInt.notEvaluated = false;
    this.hs_zdfNumCInt.evaluate = function () {
        return this;
    };
    this.hs_zdfRealCInt.notEvaluated = false;
    this.hs_zdfRealCInt.evaluate = function () {
        return this;
    };
    this.hs_zdfIntegralCInt.notEvaluated = false;
    this.hs_zdfIntegralCInt.evaluate = function () {
        return this;
    };
    this.hs_zdfBitsCInt.notEvaluated = false;
    this.hs_zdfBitsCInt.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedCUShort.notEvaluated = false;
    this.hs_zdfBoundedCUShort.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableCUShort.notEvaluated = false;
    this.hs_zdfStorableCUShort.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumCUShort.notEvaluated = false;
    this.hs_zdfEnumCUShort.evaluate = function () {
        return this;
    };
    this.hs_zdfEqCUShort.notEvaluated = false;
    this.hs_zdfEqCUShort.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdCUShort.notEvaluated = false;
    this.hs_zdfOrdCUShort.evaluate = function () {
        return this;
    };
    this.hs_zdfNumCUShort.notEvaluated = false;
    this.hs_zdfNumCUShort.evaluate = function () {
        return this;
    };
    this.hs_zdfRealCUShort.notEvaluated = false;
    this.hs_zdfRealCUShort.evaluate = function () {
        return this;
    };
    this.hs_zdfIntegralCUShort.notEvaluated = false;
    this.hs_zdfIntegralCUShort.evaluate = function () {
        return this;
    };
    this.hs_zdfBitsCUShort.notEvaluated = false;
    this.hs_zdfBitsCUShort.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedCShort.notEvaluated = false;
    this.hs_zdfBoundedCShort.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableCShort.notEvaluated = false;
    this.hs_zdfStorableCShort.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumCShort.notEvaluated = false;
    this.hs_zdfEnumCShort.evaluate = function () {
        return this;
    };
    this.hs_zdfEqCShort.notEvaluated = false;
    this.hs_zdfEqCShort.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdCShort.notEvaluated = false;
    this.hs_zdfOrdCShort.evaluate = function () {
        return this;
    };
    this.hs_zdfNumCShort.notEvaluated = false;
    this.hs_zdfNumCShort.evaluate = function () {
        return this;
    };
    this.hs_zdfRealCShort.notEvaluated = false;
    this.hs_zdfRealCShort.evaluate = function () {
        return this;
    };
    this.hs_zdfIntegralCShort.notEvaluated = false;
    this.hs_zdfIntegralCShort.evaluate = function () {
        return this;
    };
    this.hs_zdfBitsCShort.notEvaluated = false;
    this.hs_zdfBitsCShort.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedCUChar.notEvaluated = false;
    this.hs_zdfBoundedCUChar.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableCUChar.notEvaluated = false;
    this.hs_zdfStorableCUChar.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumCUChar.notEvaluated = false;
    this.hs_zdfEnumCUChar.evaluate = function () {
        return this;
    };
    this.hs_zdfEqCUChar.notEvaluated = false;
    this.hs_zdfEqCUChar.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdCUChar.notEvaluated = false;
    this.hs_zdfOrdCUChar.evaluate = function () {
        return this;
    };
    this.hs_zdfNumCUChar.notEvaluated = false;
    this.hs_zdfNumCUChar.evaluate = function () {
        return this;
    };
    this.hs_zdfRealCUChar.notEvaluated = false;
    this.hs_zdfRealCUChar.evaluate = function () {
        return this;
    };
    this.hs_zdfIntegralCUChar.notEvaluated = false;
    this.hs_zdfIntegralCUChar.evaluate = function () {
        return this;
    };
    this.hs_zdfBitsCUChar.notEvaluated = false;
    this.hs_zdfBitsCUChar.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedCSChar.notEvaluated = false;
    this.hs_zdfBoundedCSChar.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableCSChar.notEvaluated = false;
    this.hs_zdfStorableCSChar.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumCSChar.notEvaluated = false;
    this.hs_zdfEnumCSChar.evaluate = function () {
        return this;
    };
    this.hs_zdfEqCSChar.notEvaluated = false;
    this.hs_zdfEqCSChar.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdCSChar.notEvaluated = false;
    this.hs_zdfOrdCSChar.evaluate = function () {
        return this;
    };
    this.hs_zdfNumCSChar.notEvaluated = false;
    this.hs_zdfNumCSChar.evaluate = function () {
        return this;
    };
    this.hs_zdfRealCSChar.notEvaluated = false;
    this.hs_zdfRealCSChar.evaluate = function () {
        return this;
    };
    this.hs_zdfIntegralCSChar.notEvaluated = false;
    this.hs_zdfIntegralCSChar.evaluate = function () {
        return this;
    };
    this.hs_zdfBitsCSChar.notEvaluated = false;
    this.hs_zdfBitsCSChar.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedCChar.notEvaluated = false;
    this.hs_zdfBoundedCChar.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableCChar.notEvaluated = false;
    this.hs_zdfStorableCChar.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumCChar.notEvaluated = false;
    this.hs_zdfEnumCChar.evaluate = function () {
        return this;
    };
    this.hs_zdfEqCChar.notEvaluated = false;
    this.hs_zdfEqCChar.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdCChar.notEvaluated = false;
    this.hs_zdfOrdCChar.evaluate = function () {
        return this;
    };
    this.hs_zdfNumCChar.notEvaluated = false;
    this.hs_zdfNumCChar.evaluate = function () {
        return this;
    };
    this.hs_zdfRealCChar.notEvaluated = false;
    this.hs_zdfRealCChar.evaluate = function () {
        return this;
    };
    this.hs_zdfIntegralCChar.notEvaluated = false;
    this.hs_zdfIntegralCChar.evaluate = function () {
        return this;
    };
    this.hs_zdfBitsCChar.notEvaluated = false;
    this.hs_zdfBitsCChar.evaluate = function () {
        return this;
    };
    this.hs_CUIntMax.notEvaluated = false;
    this.hs_CIntMax.notEvaluated = false;
    this.hs_CUIntPtr.notEvaluated = false;
    this.hs_CIntPtr.notEvaluated = false;
    this.hs_CJmpBuf.notEvaluated = false;
    this.hs_CJmpBuf.evaluate = function () {
        return this;
    };
    this.hs_CFpos.notEvaluated = false;
    this.hs_CFpos.evaluate = function () {
        return this;
    };
    this.hs_CFile.notEvaluated = false;
    this.hs_CFile.evaluate = function () {
        return this;
    };
    this.hs_CSUSeconds.notEvaluated = false;
    this.hs_CUSeconds.notEvaluated = false;
    this.hs_CTime.notEvaluated = false;
    this.hs_CClock.notEvaluated = false;
    this.hs_CSigAtomic.notEvaluated = false;
    this.hs_CWchar.notEvaluated = false;
    this.hs_CSizze.notEvaluated = false;
    this.hs_CPtrdiff.notEvaluated = false;
    this.hs_CDouble.notEvaluated = false;
    this.hs_CFloat.notEvaluated = false;
    this.hs_CULLong.notEvaluated = false;
    this.hs_CLLong.notEvaluated = false;
    this.hs_CULong.notEvaluated = false;
    this.hs_CLong.notEvaluated = false;
    this.hs_CUInt.notEvaluated = false;
    this.hs_CInt.notEvaluated = false;
    this.hs_CUShort.notEvaluated = false;
    this.hs_CShort.notEvaluated = false;
    this.hs_CUChar.notEvaluated = false;
    this.hs_CSChar.notEvaluated = false;
    this.hs_CChar.notEvaluated = false;
    var hs_a25uWZj = new $hs.Thunk();
    var hs_zdcreadList25uWZk = new $hs.Thunk();
    var hs_a125uWZl = new $hs.Thunk();
    var hs_zdcreadsPrec25uWZm = new $hs.Thunk();
    var hs_zdcreadListPrec25uWZn = new $hs.Thunk();
    var hs_zdcreadPrec25uWZo = new $hs.Thunk();
    var hs_a225uWZp = new $hs.Thunk();
    var hs_zdcshowList25uWZq = new $hs.Thunk();
    var hs_a325uWZr = new $hs.Thunk();
    var hs_zdcshow25uWZs = new $hs.Thunk();
    var hs_a425uWZt = new $hs.Thunk();
    var hs_zdcshowsPrec25uWZu = new $hs.Thunk();
    var hs_a525uWZv = new $hs.Thunk();
    var hs_zdcreadList125uWZw = new $hs.Thunk();
    var hs_a625uWZx = new $hs.Thunk();
    var hs_zdcreadsPrec125uWZy = new $hs.Thunk();
    var hs_zdcreadListPrec125uWZz = new $hs.Thunk();
    var hs_zdcreadPrec125uWZA = new $hs.Thunk();
    var hs_a725uWZB = new $hs.Thunk();
    var hs_zdcshowList125uWZC = new $hs.Thunk();
    var hs_a825uWZD = new $hs.Thunk();
    var hs_zdcshow125uWZE = new $hs.Thunk();
    var hs_a925uWZF = new $hs.Thunk();
    var hs_zdcshowsPrec125uWZG = new $hs.Thunk();
    var hs_a1025uWZH = new $hs.Thunk();
    var hs_zdcreadList225uWZI = new $hs.Thunk();
    var hs_a1125uWZJ = new $hs.Thunk();
    var hs_zdcreadsPrec225uWZK = new $hs.Thunk();
    var hs_zdcreadListPrec225uWZL = new $hs.Thunk();
    var hs_zdcreadPrec225uWZM = new $hs.Thunk();
    var hs_a1225uWZN = new $hs.Thunk();
    var hs_zdcshowList225uWZO = new $hs.Thunk();
    var hs_a1325uWZP = new $hs.Thunk();
    var hs_zdcshow225uWZQ = new $hs.Thunk();
    var hs_a1425uWZR = new $hs.Thunk();
    var hs_zdcshowsPrec225uWZS = new $hs.Thunk();
    var hs_a1525uWZT = new $hs.Thunk();
    var hs_zdcreadList325uWZU = new $hs.Thunk();
    var hs_a1625uWZV = new $hs.Thunk();
    var hs_zdcreadsPrec325uWZW = new $hs.Thunk();
    var hs_zdcreadListPrec325uWZX = new $hs.Thunk();
    var hs_zdcreadPrec325uWZY = new $hs.Thunk();
    var hs_a1725uWZZ = new $hs.Thunk();
    var hs_zdcshowList325uX00 = new $hs.Thunk();
    var hs_a1825uX01 = new $hs.Thunk();
    var hs_zdcshow325uX02 = new $hs.Thunk();
    var hs_a1925uX03 = new $hs.Thunk();
    var hs_zdcshowsPrec325uX04 = new $hs.Thunk();
    var hs_a2025uX05 = new $hs.Thunk();
    var hs_zdcreadList425uX06 = new $hs.Thunk();
    var hs_a2125uX07 = new $hs.Thunk();
    var hs_zdcreadsPrec425uX08 = new $hs.Thunk();
    var hs_zdcreadListPrec425uX09 = new $hs.Thunk();
    var hs_zdcreadPrec425uX0a = new $hs.Thunk();
    var hs_a2225uX0b = new $hs.Thunk();
    var hs_zdcshowList425uX0c = new $hs.Thunk();
    var hs_a2325uX0d = new $hs.Thunk();
    var hs_zdcshow425uX0e = new $hs.Thunk();
    var hs_a2425uX0f = new $hs.Thunk();
    var hs_zdcshowsPrec425uX0g = new $hs.Thunk();
    var hs_a2525uX0h = new $hs.Thunk();
    var hs_zdcreadList525uX0i = new $hs.Thunk();
    var hs_a2625uX0j = new $hs.Thunk();
    var hs_zdcreadsPrec525uX0k = new $hs.Thunk();
    var hs_zdcreadListPrec525uX0l = new $hs.Thunk();
    var hs_zdcreadPrec525uX0m = new $hs.Thunk();
    var hs_a2725uX0n = new $hs.Thunk();
    var hs_zdcshowList525uX0o = new $hs.Thunk();
    var hs_a2825uX0p = new $hs.Thunk();
    var hs_zdcshow525uX0q = new $hs.Thunk();
    var hs_a2925uX0r = new $hs.Thunk();
    var hs_zdcshowsPrec525uX0s = new $hs.Thunk();
    var hs_a3025uX0t = new $hs.Thunk();
    var hs_zdcreadList625uX0u = new $hs.Thunk();
    var hs_a3125uX0v = new $hs.Thunk();
    var hs_zdcreadsPrec625uX0w = new $hs.Thunk();
    var hs_zdcreadListPrec625uX0x = new $hs.Thunk();
    var hs_zdcreadPrec625uX0y = new $hs.Thunk();
    var hs_a3225uX0z = new $hs.Thunk();
    var hs_zdcshowList625uX0A = new $hs.Thunk();
    var hs_a3325uX0B = new $hs.Thunk();
    var hs_zdcshow625uX0C = new $hs.Thunk();
    var hs_a3425uX0D = new $hs.Thunk();
    var hs_zdcshowsPrec625uX0E = new $hs.Thunk();
    var hs_a3525uX0F = new $hs.Thunk();
    var hs_zdcreadList725uX0G = new $hs.Thunk();
    var hs_a3625uX0H = new $hs.Thunk();
    var hs_zdcreadsPrec725uX0I = new $hs.Thunk();
    var hs_zdcreadListPrec725uX0J = new $hs.Thunk();
    var hs_zdcreadPrec725uX0K = new $hs.Thunk();
    var hs_a3725uX0L = new $hs.Thunk();
    var hs_zdcshowList725uX0M = new $hs.Thunk();
    var hs_a3825uX0N = new $hs.Thunk();
    var hs_zdcshow725uX0O = new $hs.Thunk();
    var hs_a3925uX0P = new $hs.Thunk();
    var hs_zdcshowsPrec725uX0Q = new $hs.Thunk();
    var hs_a4025uX0R = new $hs.Thunk();
    var hs_zdcreadList825uX0S = new $hs.Thunk();
    var hs_a4125uX0T = new $hs.Thunk();
    var hs_zdcreadsPrec825uX0U = new $hs.Thunk();
    var hs_zdcreadListPrec825uX0V = new $hs.Thunk();
    var hs_zdcreadPrec825uX0W = new $hs.Thunk();
    var hs_a4225uX0X = new $hs.Thunk();
    var hs_zdcshowList825uX0Y = new $hs.Thunk();
    var hs_a4325uX0Z = new $hs.Thunk();
    var hs_zdcshow825uX10 = new $hs.Thunk();
    var hs_a4425uX11 = new $hs.Thunk();
    var hs_zdcshowsPrec825uX12 = new $hs.Thunk();
    var hs_a4525uX13 = new $hs.Thunk();
    var hs_zdcreadList925uX14 = new $hs.Thunk();
    var hs_a4625uX15 = new $hs.Thunk();
    var hs_zdcreadsPrec925uX16 = new $hs.Thunk();
    var hs_zdcreadListPrec925uX17 = new $hs.Thunk();
    var hs_zdcreadPrec925uX18 = new $hs.Thunk();
    var hs_a4725uX19 = new $hs.Thunk();
    var hs_zdcshowList925uX1a = new $hs.Thunk();
    var hs_a4825uX1b = new $hs.Thunk();
    var hs_zdcshow925uX1c = new $hs.Thunk();
    var hs_a4925uX1d = new $hs.Thunk();
    var hs_zdcshowsPrec925uX1e = new $hs.Thunk();
    var hs_a5025uX1f = new $hs.Thunk();
    var hs_zdcreadList1025uX1g = new $hs.Thunk();
    var hs_a5125uX1h = new $hs.Thunk();
    var hs_zdcreadsPrec1025uX1i = new $hs.Thunk();
    var hs_zdcreadListPrec1025uX1j = new $hs.Thunk();
    var hs_zdcreadPrec1025uX1k = new $hs.Thunk();
    var hs_a5225uX1l = new $hs.Thunk();
    var hs_zdcshowList1025uX1m = new $hs.Thunk();
    var hs_a5325uX1n = new $hs.Thunk();
    var hs_zdcshow1025uX1o = new $hs.Thunk();
    var hs_a5425uX1p = new $hs.Thunk();
    var hs_zdcshowsPrec1025uX1q = new $hs.Thunk();
    var hs_a5525uX1r = new $hs.Thunk();
    var hs_zdcreadList1125uX1s = new $hs.Thunk();
    var hs_a5625uX1t = new $hs.Thunk();
    var hs_zdcreadsPrec1125uX1u = new $hs.Thunk();
    var hs_zdcreadListPrec1125uX1v = new $hs.Thunk();
    var hs_zdcreadPrec1125uX1w = new $hs.Thunk();
    var hs_a5725uX1x = new $hs.Thunk();
    var hs_zdcshowList1125uX1y = new $hs.Thunk();
    var hs_a5825uX1z = new $hs.Thunk();
    var hs_zdcshow1125uX1A = new $hs.Thunk();
    var hs_a5925uX1B = new $hs.Thunk();
    var hs_zdcshowsPrec1125uX1C = new $hs.Thunk();
    var hs_a6025uX1D = new $hs.Thunk();
    var hs_zdcreadList1225uX1E = new $hs.Thunk();
    var hs_a6125uX1F = new $hs.Thunk();
    var hs_zdcreadsPrec1225uX1G = new $hs.Thunk();
    var hs_zdcreadListPrec1225uX1H = new $hs.Thunk();
    var hs_zdcreadPrec1225uX1I = new $hs.Thunk();
    var hs_a6225uX1J = new $hs.Thunk();
    var hs_zdcshowList1225uX1K = new $hs.Thunk();
    var hs_a6325uX1L = new $hs.Thunk();
    var hs_zdcshow1225uX1M = new $hs.Thunk();
    var hs_a6425uX1N = new $hs.Thunk();
    var hs_zdcshowsPrec1225uX1O = new $hs.Thunk();
    var hs_a6525uX1P = new $hs.Thunk();
    var hs_zdcreadList1325uX1Q = new $hs.Thunk();
    var hs_a6625uX1R = new $hs.Thunk();
    var hs_zdcreadsPrec1325uX1S = new $hs.Thunk();
    var hs_zdcreadListPrec1325uX1T = new $hs.Thunk();
    var hs_zdcreadPrec1325uX1U = new $hs.Thunk();
    var hs_a6725uX1V = new $hs.Thunk();
    var hs_zdcshowList1325uX1W = new $hs.Thunk();
    var hs_a6825uX1X = new $hs.Thunk();
    var hs_zdcshow1325uX1Y = new $hs.Thunk();
    var hs_a6925uX1Z = new $hs.Thunk();
    var hs_zdcshowsPrec1325uX20 = new $hs.Thunk();
    var hs_a7025uX21 = new $hs.Thunk();
    var hs_zdcreadList1425uX22 = new $hs.Thunk();
    var hs_a7125uX23 = new $hs.Thunk();
    var hs_zdcreadsPrec1425uX24 = new $hs.Thunk();
    var hs_zdcreadListPrec1425uX25 = new $hs.Thunk();
    var hs_zdcreadPrec1425uX26 = new $hs.Thunk();
    var hs_a7225uX27 = new $hs.Thunk();
    var hs_zdcshowList1425uX28 = new $hs.Thunk();
    var hs_a7325uX29 = new $hs.Thunk();
    var hs_zdcshow1425uX2a = new $hs.Thunk();
    var hs_a7425uX2b = new $hs.Thunk();
    var hs_zdcshowsPrec1425uX2c = new $hs.Thunk();
    var hs_a7525uX2d = new $hs.Thunk();
    var hs_zdcreadList1525uX2e = new $hs.Thunk();
    var hs_a7625uX2f = new $hs.Thunk();
    var hs_zdcreadsPrec1525uX2g = new $hs.Thunk();
    var hs_zdcreadListPrec1525uX2h = new $hs.Thunk();
    var hs_zdcreadPrec1525uX2i = new $hs.Thunk();
    var hs_a7725uX2j = new $hs.Thunk();
    var hs_zdcshowList1525uX2k = new $hs.Thunk();
    var hs_a7825uX2l = new $hs.Thunk();
    var hs_zdcshow1525uX2m = new $hs.Thunk();
    var hs_a7925uX2n = new $hs.Thunk();
    var hs_zdcshowsPrec1525uX2o = new $hs.Thunk();
    var hs_a8025uX2p = new $hs.Thunk();
    var hs_zdcreadList1625uX2q = new $hs.Thunk();
    var hs_a8125uX2r = new $hs.Thunk();
    var hs_zdcreadsPrec1625uX2s = new $hs.Thunk();
    var hs_zdcreadListPrec1625uX2t = new $hs.Thunk();
    var hs_zdcreadPrec1625uX2u = new $hs.Thunk();
    var hs_a8225uX2v = new $hs.Thunk();
    var hs_zdcshowList1625uX2w = new $hs.Thunk();
    var hs_a8325uX2x = new $hs.Thunk();
    var hs_zdcshow1625uX2y = new $hs.Thunk();
    var hs_a8425uX2z = new $hs.Thunk();
    var hs_zdcshowsPrec1625uX2A = new $hs.Thunk();
    var hs_a8525uX2B = new $hs.Thunk();
    var hs_zdcreadList1725uX2C = new $hs.Thunk();
    var hs_a8625uX2D = new $hs.Thunk();
    var hs_zdcreadsPrec1725uX2E = new $hs.Thunk();
    var hs_zdcreadListPrec1725uX2F = new $hs.Thunk();
    var hs_zdcreadPrec1725uX2G = new $hs.Thunk();
    var hs_a8725uX2H = new $hs.Thunk();
    var hs_zdcshowList1725uX2I = new $hs.Thunk();
    var hs_a8825uX2J = new $hs.Thunk();
    var hs_zdcshow1725uX2K = new $hs.Thunk();
    var hs_a8925uX2L = new $hs.Thunk();
    var hs_zdcshowsPrec1725uX2M = new $hs.Thunk();
    var hs_a9025uX2N = new $hs.Thunk();
    var hs_zdcreadList1825uX2O = new $hs.Thunk();
    var hs_a9125uX2P = new $hs.Thunk();
    var hs_zdcreadsPrec1825uX2Q = new $hs.Thunk();
    var hs_zdcreadListPrec1825uX2R = new $hs.Thunk();
    var hs_zdcreadPrec1825uX2S = new $hs.Thunk();
    var hs_a9225uX2T = new $hs.Thunk();
    var hs_zdcshowList1825uX2U = new $hs.Thunk();
    var hs_a9325uX2V = new $hs.Thunk();
    var hs_zdcshow1825uX2W = new $hs.Thunk();
    var hs_a9425uX2X = new $hs.Thunk();
    var hs_zdcshowsPrec1825uX2Y = new $hs.Thunk();
    var hs_a9525uX2Z = new $hs.Thunk();
    var hs_zdcreadList1925uX30 = new $hs.Thunk();
    var hs_a9625uX31 = new $hs.Thunk();
    var hs_zdcreadsPrec1925uX32 = new $hs.Thunk();
    var hs_zdcreadListPrec1925uX33 = new $hs.Thunk();
    var hs_zdcreadPrec1925uX34 = new $hs.Thunk();
    var hs_a9725uX35 = new $hs.Thunk();
    var hs_zdcshowList1925uX36 = new $hs.Thunk();
    var hs_a9825uX37 = new $hs.Thunk();
    var hs_zdcshow1925uX38 = new $hs.Thunk();
    var hs_a9925uX39 = new $hs.Thunk();
    var hs_zdcshowsPrec1925uX3a = new $hs.Thunk();
    var hs_a10025uX3b = new $hs.Thunk();
    var hs_zdcreadList2025uX3c = new $hs.Thunk();
    var hs_a10125uX3d = new $hs.Thunk();
    var hs_zdcreadsPrec2025uX3e = new $hs.Thunk();
    var hs_zdcreadListPrec2025uX3f = new $hs.Thunk();
    var hs_zdcreadPrec2025uX3g = new $hs.Thunk();
    var hs_a10225uX3h = new $hs.Thunk();
    var hs_zdcshowList2025uX3i = new $hs.Thunk();
    var hs_a10325uX3j = new $hs.Thunk();
    var hs_zdcshow2025uX3k = new $hs.Thunk();
    var hs_a10425uX3l = new $hs.Thunk();
    var hs_zdcshowsPrec2025uX3m = new $hs.Thunk();
    var hs_a10525uX3n = new $hs.Thunk();
    var hs_zdcreadList2125uX3o = new $hs.Thunk();
    var hs_a10625uX3p = new $hs.Thunk();
    var hs_zdcreadsPrec2125uX3q = new $hs.Thunk();
    var hs_zdcreadListPrec2125uX3r = new $hs.Thunk();
    var hs_zdcreadPrec2125uX3s = new $hs.Thunk();
    var hs_a10725uX3t = new $hs.Thunk();
    var hs_zdcshowList2125uX3u = new $hs.Thunk();
    var hs_a10825uX3v = new $hs.Thunk();
    var hs_zdcshow2125uX3w = new $hs.Thunk();
    var hs_a10925uX3x = new $hs.Thunk();
    var hs_zdcshowsPrec2125uX3y = new $hs.Thunk();
    var hs_a11025uX3z = new $hs.Thunk();
    var hs_zdcreadList2225uX3A = new $hs.Thunk();
    var hs_a11125uX3B = new $hs.Thunk();
    var hs_zdcreadsPrec2225uX3C = new $hs.Thunk();
    var hs_zdcreadListPrec2225uX3D = new $hs.Thunk();
    var hs_zdcreadPrec2225uX3E = new $hs.Thunk();
    var hs_a11225uX3F = new $hs.Thunk();
    var hs_zdcshowList2225uX3G = new $hs.Thunk();
    var hs_a11325uX3H = new $hs.Thunk();
    var hs_zdcshow2225uX3I = new $hs.Thunk();
    var hs_a11425uX3J = new $hs.Thunk();
    var hs_zdcshowsPrec2225uX3K = new $hs.Thunk();
    var hs_a11525uX3L = new $hs.Thunk();
    var hs_zdcreadList2325uX3M = new $hs.Thunk();
    var hs_a11625uX3N = new $hs.Thunk();
    var hs_zdcreadsPrec2325uX3O = new $hs.Thunk();
    var hs_zdcreadListPrec2325uX3P = new $hs.Thunk();
    var hs_zdcreadPrec2325uX3Q = new $hs.Thunk();
    var hs_a11725uX3R = new $hs.Thunk();
    var hs_zdcshowList2325uX3S = new $hs.Thunk();
    var hs_a11825uX3T = new $hs.Thunk();
    var hs_zdcshow2325uX3U = new $hs.Thunk();
    var hs_a11925uX3V = new $hs.Thunk();
    var hs_zdcshowsPrec2325uX3W = new $hs.Thunk();
    var hs_a12025uX3X = new $hs.Thunk();
    var hs_zdcreadList2425uX3Y = new $hs.Thunk();
    var hs_a12125uX3Z = new $hs.Thunk();
    var hs_zdcreadsPrec2425uX40 = new $hs.Thunk();
    var hs_zdcreadListPrec2425uX41 = new $hs.Thunk();
    var hs_zdcreadPrec2425uX42 = new $hs.Thunk();
    var hs_a12225uX43 = new $hs.Thunk();
    var hs_zdcshowList2425uX44 = new $hs.Thunk();
    var hs_a12325uX45 = new $hs.Thunk();
    var hs_zdcshow2425uX46 = new $hs.Thunk();
    var hs_a12425uX47 = new $hs.Thunk();
    var hs_zdcshowsPrec2425uX48 = new $hs.Thunk();
    var hs_a12525uX49 = new $hs.Thunk();
    var hs_zdczizazi25uX4a = new $hs.Thunk();
    var hs_a12625uX4b = new $hs.Thunk();
    var hs_zdczizbzi25uX4c = new $hs.Thunk();
    var hs_a12725uX4d = new $hs.Thunk();
    var hs_zdcxor25uX4e = new $hs.Thunk();
    var hs_a12825uX4f = new $hs.Thunk();
    var hs_zdccomplement25uX4g = new $hs.Thunk();
    var hs_a12925uX4h = new $hs.Thunk();
    var hs_zdcshift25uX4i = new $hs.Thunk();
    var hs_a13025uX4j = new $hs.Thunk();
    var hs_zdcrotate25uX4k = new $hs.Thunk();
    var hs_a13125uX4l = new $hs.Thunk();
    var hs_zdcbit25uX4m = new $hs.Thunk();
    var hs_a13225uX4n = new $hs.Thunk();
    var hs_zdcsetBit25uX4o = new $hs.Thunk();
    var hs_a13325uX4p = new $hs.Thunk();
    var hs_zdcclearBit25uX4q = new $hs.Thunk();
    var hs_a13425uX4r = new $hs.Thunk();
    var hs_zdccomplementBit25uX4s = new $hs.Thunk();
    var hs_a13525uX4t = new $hs.Thunk();
    var hs_zdctestBit25uX4u = new $hs.Thunk();
    var hs_a13625uX4v = new $hs.Thunk();
    var hs_zdcbitSizze25uX4w = new $hs.Thunk();
    var hs_a13725uX4x = new $hs.Thunk();
    var hs_zdcisSigned25uX4y = new $hs.Thunk();
    var hs_a13825uX4z = new $hs.Thunk();
    var hs_zdcshiftL25uX4A = new $hs.Thunk();
    var hs_a13925uX4B = new $hs.Thunk();
    var hs_zdcshiftR25uX4C = new $hs.Thunk();
    var hs_a14025uX4D = new $hs.Thunk();
    var hs_zdcrotateL25uX4E = new $hs.Thunk();
    var hs_a14125uX4F = new $hs.Thunk();
    var hs_zdcrotateR25uX4G = new $hs.Thunk();
    var hs_a14225uX4H = new $hs.Thunk();
    var hs_zdcquot25uX4I = new $hs.Thunk();
    var hs_a14325uX4J = new $hs.Thunk();
    var hs_zdcrem25uX4K = new $hs.Thunk();
    var hs_a14425uX4L = new $hs.Thunk();
    var hs_zdcdiv25uX4M = new $hs.Thunk();
    var hs_a14525uX4N = new $hs.Thunk();
    var hs_zdcmod25uX4O = new $hs.Thunk();
    var hs_a14625uX4P = new $hs.Thunk();
    var hs_zdcquotRem25uX4Q = new $hs.Thunk();
    var hs_a14725uX4R = new $hs.Thunk();
    var hs_zdcdivMod25uX4S = new $hs.Thunk();
    var hs_a14825uX4T = new $hs.Thunk();
    var hs_zdctoInteger25uX4U = new $hs.Thunk();
    var hs_a14925uX4V = new $hs.Thunk();
    var hs_zdcminBound25uX4W = new $hs.Thunk();
    var hs_a15025uX4X = new $hs.Thunk();
    var hs_zdcmaxBound25uX4Y = new $hs.Thunk();
    var hs_a15125uX4Z = new $hs.Thunk();
    var hs_zdctoRational25uX50 = new $hs.Thunk();
    var hs_a15225uX51 = new $hs.Thunk();
    var hs_zdcsizzeOf25uX52 = new $hs.Thunk();
    var hs_a15325uX53 = new $hs.Thunk();
    var hs_zdcalignment25uX54 = new $hs.Thunk();
    var hs_a15425uX55 = new $hs.Thunk();
    var hs_zdcpeekElemOff25uX56 = new $hs.Thunk();
    var hs_a15525uX57 = new $hs.Thunk();
    var hs_zdcpokeElemOff25uX58 = new $hs.Thunk();
    var hs_a15625uX59 = new $hs.Thunk();
    var hs_zdcpeekByteOff25uX5a = new $hs.Thunk();
    var hs_a15725uX5b = new $hs.Thunk();
    var hs_zdcpokeByteOff25uX5c = new $hs.Thunk();
    var hs_a15825uX5d = new $hs.Thunk();
    var hs_zdcpeek25uX5e = new $hs.Thunk();
    var hs_a15925uX5f = new $hs.Thunk();
    var hs_zdcpoke25uX5g = new $hs.Thunk();
    var hs_a16025uX5h = new $hs.Thunk();
    var hs_zdcsucc25uX5i = new $hs.Thunk();
    var hs_a16125uX5j = new $hs.Thunk();
    var hs_zdcpred25uX5k = new $hs.Thunk();
    var hs_a16225uX5l = new $hs.Thunk();
    var hs_zdctoEnum25uX5m = new $hs.Thunk();
    var hs_a16325uX5n = new $hs.Thunk();
    var hs_zdcfromEnum25uX5o = new $hs.Thunk();
    var hs_a16425uX5p = new $hs.Thunk();
    var hs_zdcenumFrom25uX5q = new $hs.Thunk();
    var hs_a16525uX5r = new $hs.Thunk();
    var hs_zdcenumFromThen25uX5s = new $hs.Thunk();
    var hs_a16625uX5t = new $hs.Thunk();
    var hs_zdcenumFromTo25uX5u = new $hs.Thunk();
    var hs_a16725uX5v = new $hs.Thunk();
    var hs_zdcenumFromThenTo25uX5w = new $hs.Thunk();
    var hs_a16825uX5x = new $hs.Thunk();
    var hs_zdczp25uX5y = new $hs.Thunk();
    var hs_a16925uX5z = new $hs.Thunk();
    var hs_zdczt25uX5A = new $hs.Thunk();
    var hs_a17025uX5B = new $hs.Thunk();
    var hs_zdczm25uX5C = new $hs.Thunk();
    var hs_a17125uX5D = new $hs.Thunk();
    var hs_zdcnegate25uX5E = new $hs.Thunk();
    var hs_a17225uX5F = new $hs.Thunk();
    var hs_zdcabs25uX5G = new $hs.Thunk();
    var hs_a17325uX5H = new $hs.Thunk();
    var hs_zdcsignum25uX5I = new $hs.Thunk();
    var hs_a17425uX5J = new $hs.Thunk();
    var hs_zdcfromInteger25uX5K = new $hs.Thunk();
    var hs_a17525uX5L = new $hs.Thunk();
    var hs_zdccompare25uX5M = new $hs.Thunk();
    var hs_a17625uX5N = new $hs.Thunk();
    var hs_zdczl25uX5O = new $hs.Thunk();
    var hs_a17725uX5P = new $hs.Thunk();
    var hs_zdczgze25uX5Q = new $hs.Thunk();
    var hs_a17825uX5R = new $hs.Thunk();
    var hs_zdczg25uX5S = new $hs.Thunk();
    var hs_a17925uX5T = new $hs.Thunk();
    var hs_zdczlze25uX5U = new $hs.Thunk();
    var hs_a18025uX5V = new $hs.Thunk();
    var hs_zdcmax25uX5W = new $hs.Thunk();
    var hs_a18125uX5X = new $hs.Thunk();
    var hs_zdcmin25uX5Y = new $hs.Thunk();
    var hs_a18225uX5Z = new $hs.Thunk();
    var hs_zdczeze25uX60 = new $hs.Thunk();
    var hs_a18325uX61 = new $hs.Thunk();
    var hs_zdczsze25uX62 = new $hs.Thunk();
    var hs_a18425uX63 = new $hs.Thunk();
    var hs_zdczizazi125uX64 = new $hs.Thunk();
    var hs_a18525uX65 = new $hs.Thunk();
    var hs_zdczizbzi125uX66 = new $hs.Thunk();
    var hs_a18625uX67 = new $hs.Thunk();
    var hs_zdcxor125uX68 = new $hs.Thunk();
    var hs_a18725uX69 = new $hs.Thunk();
    var hs_zdccomplement125uX6a = new $hs.Thunk();
    var hs_a18825uX6b = new $hs.Thunk();
    var hs_zdcshift125uX6c = new $hs.Thunk();
    var hs_a18925uX6d = new $hs.Thunk();
    var hs_zdcrotate125uX6e = new $hs.Thunk();
    var hs_a19025uX6f = new $hs.Thunk();
    var hs_zdcbit125uX6g = new $hs.Thunk();
    var hs_a19125uX6h = new $hs.Thunk();
    var hs_zdcsetBit125uX6i = new $hs.Thunk();
    var hs_a19225uX6j = new $hs.Thunk();
    var hs_zdcclearBit125uX6k = new $hs.Thunk();
    var hs_a19325uX6l = new $hs.Thunk();
    var hs_zdccomplementBit125uX6m = new $hs.Thunk();
    var hs_a19425uX6n = new $hs.Thunk();
    var hs_zdctestBit125uX6o = new $hs.Thunk();
    var hs_a19525uX6p = new $hs.Thunk();
    var hs_zdcbitSizze125uX6q = new $hs.Thunk();
    var hs_a19625uX6r = new $hs.Thunk();
    var hs_zdcisSigned125uX6s = new $hs.Thunk();
    var hs_a19725uX6t = new $hs.Thunk();
    var hs_zdcshiftL125uX6u = new $hs.Thunk();
    var hs_a19825uX6v = new $hs.Thunk();
    var hs_zdcshiftR125uX6w = new $hs.Thunk();
    var hs_a19925uX6x = new $hs.Thunk();
    var hs_zdcrotateL125uX6y = new $hs.Thunk();
    var hs_a20025uX6z = new $hs.Thunk();
    var hs_zdcrotateR125uX6A = new $hs.Thunk();
    var hs_a20125uX6B = new $hs.Thunk();
    var hs_zdcquot125uX6C = new $hs.Thunk();
    var hs_a20225uX6D = new $hs.Thunk();
    var hs_zdcrem125uX6E = new $hs.Thunk();
    var hs_a20325uX6F = new $hs.Thunk();
    var hs_zdcdiv125uX6G = new $hs.Thunk();
    var hs_a20425uX6H = new $hs.Thunk();
    var hs_zdcmod125uX6I = new $hs.Thunk();
    var hs_a20525uX6J = new $hs.Thunk();
    var hs_zdcquotRem125uX6K = new $hs.Thunk();
    var hs_a20625uX6L = new $hs.Thunk();
    var hs_zdcdivMod125uX6M = new $hs.Thunk();
    var hs_a20725uX6N = new $hs.Thunk();
    var hs_zdctoInteger125uX6O = new $hs.Thunk();
    var hs_a20825uX6P = new $hs.Thunk();
    var hs_zdcminBound125uX6Q = new $hs.Thunk();
    var hs_a20925uX6R = new $hs.Thunk();
    var hs_zdcmaxBound125uX6S = new $hs.Thunk();
    var hs_a21025uX6T = new $hs.Thunk();
    var hs_zdctoRational125uX6U = new $hs.Thunk();
    var hs_a21125uX6V = new $hs.Thunk();
    var hs_zdcsizzeOf125uX6W = new $hs.Thunk();
    var hs_a21225uX6X = new $hs.Thunk();
    var hs_zdcalignment125uX6Y = new $hs.Thunk();
    var hs_a21325uX6Z = new $hs.Thunk();
    var hs_zdcpeekElemOff125uX70 = new $hs.Thunk();
    var hs_a21425uX71 = new $hs.Thunk();
    var hs_zdcpokeElemOff125uX72 = new $hs.Thunk();
    var hs_a21525uX73 = new $hs.Thunk();
    var hs_zdcpeekByteOff125uX74 = new $hs.Thunk();
    var hs_a21625uX75 = new $hs.Thunk();
    var hs_zdcpokeByteOff125uX76 = new $hs.Thunk();
    var hs_a21725uX77 = new $hs.Thunk();
    var hs_zdcpeek125uX78 = new $hs.Thunk();
    var hs_a21825uX79 = new $hs.Thunk();
    var hs_zdcpoke125uX7a = new $hs.Thunk();
    var hs_a21925uX7b = new $hs.Thunk();
    var hs_zdcsucc125uX7c = new $hs.Thunk();
    var hs_a22025uX7d = new $hs.Thunk();
    var hs_zdcpred125uX7e = new $hs.Thunk();
    var hs_a22125uX7f = new $hs.Thunk();
    var hs_zdctoEnum125uX7g = new $hs.Thunk();
    var hs_a22225uX7h = new $hs.Thunk();
    var hs_zdcfromEnum125uX7i = new $hs.Thunk();
    var hs_a22325uX7j = new $hs.Thunk();
    var hs_zdcenumFrom125uX7k = new $hs.Thunk();
    var hs_a22425uX7l = new $hs.Thunk();
    var hs_zdcenumFromThen125uX7m = new $hs.Thunk();
    var hs_a22525uX7n = new $hs.Thunk();
    var hs_zdcenumFromTo125uX7o = new $hs.Thunk();
    var hs_a22625uX7p = new $hs.Thunk();
    var hs_zdcenumFromThenTo125uX7q = new $hs.Thunk();
    var hs_a22725uX7r = new $hs.Thunk();
    var hs_zdczp125uX7s = new $hs.Thunk();
    var hs_a22825uX7t = new $hs.Thunk();
    var hs_zdczt125uX7u = new $hs.Thunk();
    var hs_a22925uX7v = new $hs.Thunk();
    var hs_zdczm125uX7w = new $hs.Thunk();
    var hs_a23025uX7x = new $hs.Thunk();
    var hs_zdcnegate125uX7y = new $hs.Thunk();
    var hs_a23125uX7z = new $hs.Thunk();
    var hs_zdcabs125uX7A = new $hs.Thunk();
    var hs_a23225uX7B = new $hs.Thunk();
    var hs_zdcsignum125uX7C = new $hs.Thunk();
    var hs_a23325uX7D = new $hs.Thunk();
    var hs_zdcfromInteger125uX7E = new $hs.Thunk();
    var hs_a23425uX7F = new $hs.Thunk();
    var hs_zdccompare125uX7G = new $hs.Thunk();
    var hs_a23525uX7H = new $hs.Thunk();
    var hs_zdczl125uX7I = new $hs.Thunk();
    var hs_a23625uX7J = new $hs.Thunk();
    var hs_zdczgze125uX7K = new $hs.Thunk();
    var hs_a23725uX7L = new $hs.Thunk();
    var hs_zdczg125uX7M = new $hs.Thunk();
    var hs_a23825uX7N = new $hs.Thunk();
    var hs_zdczlze125uX7O = new $hs.Thunk();
    var hs_a23925uX7P = new $hs.Thunk();
    var hs_zdcmax125uX7Q = new $hs.Thunk();
    var hs_a24025uX7R = new $hs.Thunk();
    var hs_zdcmin125uX7S = new $hs.Thunk();
    var hs_a24125uX7T = new $hs.Thunk();
    var hs_zdczeze125uX7U = new $hs.Thunk();
    var hs_a24225uX7V = new $hs.Thunk();
    var hs_zdczsze125uX7W = new $hs.Thunk();
    var hs_a24325uX7X = new $hs.Thunk();
    var hs_zdczizazi225uX7Y = new $hs.Thunk();
    var hs_a24425uX7Z = new $hs.Thunk();
    var hs_zdczizbzi225uX80 = new $hs.Thunk();
    var hs_a24525uX81 = new $hs.Thunk();
    var hs_zdcxor225uX82 = new $hs.Thunk();
    var hs_a24625uX83 = new $hs.Thunk();
    var hs_zdccomplement225uX84 = new $hs.Thunk();
    var hs_a24725uX85 = new $hs.Thunk();
    var hs_zdcshift225uX86 = new $hs.Thunk();
    var hs_a24825uX87 = new $hs.Thunk();
    var hs_zdcrotate225uX88 = new $hs.Thunk();
    var hs_a24925uX89 = new $hs.Thunk();
    var hs_zdcbit225uX8a = new $hs.Thunk();
    var hs_a25025uX8b = new $hs.Thunk();
    var hs_zdcsetBit225uX8c = new $hs.Thunk();
    var hs_a25125uX8d = new $hs.Thunk();
    var hs_zdcclearBit225uX8e = new $hs.Thunk();
    var hs_a25225uX8f = new $hs.Thunk();
    var hs_zdccomplementBit225uX8g = new $hs.Thunk();
    var hs_a25325uX8h = new $hs.Thunk();
    var hs_zdctestBit225uX8i = new $hs.Thunk();
    var hs_a25425uX8j = new $hs.Thunk();
    var hs_zdcbitSizze225uX8k = new $hs.Thunk();
    var hs_a25525uX8l = new $hs.Thunk();
    var hs_zdcisSigned225uX8m = new $hs.Thunk();
    var hs_a25625uX8n = new $hs.Thunk();
    var hs_zdcshiftL225uX8o = new $hs.Thunk();
    var hs_a25725uX8p = new $hs.Thunk();
    var hs_zdcshiftR225uX8q = new $hs.Thunk();
    var hs_a25825uX8r = new $hs.Thunk();
    var hs_zdcrotateL225uX8s = new $hs.Thunk();
    var hs_a25925uX8t = new $hs.Thunk();
    var hs_zdcrotateR225uX8u = new $hs.Thunk();
    var hs_a26025uX8v = new $hs.Thunk();
    var hs_zdcquot225uX8w = new $hs.Thunk();
    var hs_a26125uX8x = new $hs.Thunk();
    var hs_zdcrem225uX8y = new $hs.Thunk();
    var hs_a26225uX8z = new $hs.Thunk();
    var hs_zdcdiv225uX8A = new $hs.Thunk();
    var hs_a26325uX8B = new $hs.Thunk();
    var hs_zdcmod225uX8C = new $hs.Thunk();
    var hs_a26425uX8D = new $hs.Thunk();
    var hs_zdcquotRem225uX8E = new $hs.Thunk();
    var hs_a26525uX8F = new $hs.Thunk();
    var hs_zdcdivMod225uX8G = new $hs.Thunk();
    var hs_a26625uX8H = new $hs.Thunk();
    var hs_zdctoInteger225uX8I = new $hs.Thunk();
    var hs_a26725uX8J = new $hs.Thunk();
    var hs_zdcminBound225uX8K = new $hs.Thunk();
    var hs_a26825uX8L = new $hs.Thunk();
    var hs_zdcmaxBound225uX8M = new $hs.Thunk();
    var hs_a26925uX8N = new $hs.Thunk();
    var hs_zdctoRational225uX8O = new $hs.Thunk();
    var hs_a27025uX8P = new $hs.Thunk();
    var hs_zdcsizzeOf225uX8Q = new $hs.Thunk();
    var hs_a27125uX8R = new $hs.Thunk();
    var hs_zdcalignment225uX8S = new $hs.Thunk();
    var hs_a27225uX8T = new $hs.Thunk();
    var hs_zdcpeekElemOff225uX8U = new $hs.Thunk();
    var hs_a27325uX8V = new $hs.Thunk();
    var hs_zdcpokeElemOff225uX8W = new $hs.Thunk();
    var hs_a27425uX8X = new $hs.Thunk();
    var hs_zdcpeekByteOff225uX8Y = new $hs.Thunk();
    var hs_a27525uX8Z = new $hs.Thunk();
    var hs_zdcpokeByteOff225uX90 = new $hs.Thunk();
    var hs_a27625uX91 = new $hs.Thunk();
    var hs_zdcpeek225uX92 = new $hs.Thunk();
    var hs_a27725uX93 = new $hs.Thunk();
    var hs_zdcpoke225uX94 = new $hs.Thunk();
    var hs_a27825uX95 = new $hs.Thunk();
    var hs_zdcsucc225uX96 = new $hs.Thunk();
    var hs_a27925uX97 = new $hs.Thunk();
    var hs_zdcpred225uX98 = new $hs.Thunk();
    var hs_a28025uX99 = new $hs.Thunk();
    var hs_zdctoEnum225uX9a = new $hs.Thunk();
    var hs_a28125uX9b = new $hs.Thunk();
    var hs_zdcfromEnum225uX9c = new $hs.Thunk();
    var hs_a28225uX9d = new $hs.Thunk();
    var hs_zdcenumFrom225uX9e = new $hs.Thunk();
    var hs_a28325uX9f = new $hs.Thunk();
    var hs_zdcenumFromThen225uX9g = new $hs.Thunk();
    var hs_a28425uX9h = new $hs.Thunk();
    var hs_zdcenumFromTo225uX9i = new $hs.Thunk();
    var hs_a28525uX9j = new $hs.Thunk();
    var hs_zdcenumFromThenTo225uX9k = new $hs.Thunk();
    var hs_a28625uX9l = new $hs.Thunk();
    var hs_zdczp225uX9m = new $hs.Thunk();
    var hs_a28725uX9n = new $hs.Thunk();
    var hs_zdczt225uX9o = new $hs.Thunk();
    var hs_a28825uX9p = new $hs.Thunk();
    var hs_zdczm225uX9q = new $hs.Thunk();
    var hs_a28925uX9r = new $hs.Thunk();
    var hs_zdcnegate225uX9s = new $hs.Thunk();
    var hs_a29025uX9t = new $hs.Thunk();
    var hs_zdcabs225uX9u = new $hs.Thunk();
    var hs_a29125uX9v = new $hs.Thunk();
    var hs_zdcsignum225uX9w = new $hs.Thunk();
    var hs_a29225uX9x = new $hs.Thunk();
    var hs_zdcfromInteger225uX9y = new $hs.Thunk();
    var hs_a29325uX9z = new $hs.Thunk();
    var hs_zdccompare225uX9A = new $hs.Thunk();
    var hs_a29425uX9B = new $hs.Thunk();
    var hs_zdczl225uX9C = new $hs.Thunk();
    var hs_a29525uX9D = new $hs.Thunk();
    var hs_zdczgze225uX9E = new $hs.Thunk();
    var hs_a29625uX9F = new $hs.Thunk();
    var hs_zdczg225uX9G = new $hs.Thunk();
    var hs_a29725uX9H = new $hs.Thunk();
    var hs_zdczlze225uX9I = new $hs.Thunk();
    var hs_a29825uX9J = new $hs.Thunk();
    var hs_zdcmax225uX9K = new $hs.Thunk();
    var hs_a29925uX9L = new $hs.Thunk();
    var hs_zdcmin225uX9M = new $hs.Thunk();
    var hs_a30025uX9N = new $hs.Thunk();
    var hs_zdczeze225uX9O = new $hs.Thunk();
    var hs_a30125uX9P = new $hs.Thunk();
    var hs_zdczsze225uX9Q = new $hs.Thunk();
    var hs_a30225uX9R = new $hs.Thunk();
    var hs_zdczizazi325uX9S = new $hs.Thunk();
    var hs_a30325uX9T = new $hs.Thunk();
    var hs_zdczizbzi325uX9U = new $hs.Thunk();
    var hs_a30425uX9V = new $hs.Thunk();
    var hs_zdcxor325uX9W = new $hs.Thunk();
    var hs_a30525uX9X = new $hs.Thunk();
    var hs_zdccomplement325uX9Y = new $hs.Thunk();
    var hs_a30625uX9Z = new $hs.Thunk();
    var hs_zdcshift325uXa0 = new $hs.Thunk();
    var hs_a30725uXa1 = new $hs.Thunk();
    var hs_zdcrotate325uXa2 = new $hs.Thunk();
    var hs_a30825uXa3 = new $hs.Thunk();
    var hs_zdcbit325uXa4 = new $hs.Thunk();
    var hs_a30925uXa5 = new $hs.Thunk();
    var hs_zdcsetBit325uXa6 = new $hs.Thunk();
    var hs_a31025uXa7 = new $hs.Thunk();
    var hs_zdcclearBit325uXa8 = new $hs.Thunk();
    var hs_a31125uXa9 = new $hs.Thunk();
    var hs_zdccomplementBit325uXaa = new $hs.Thunk();
    var hs_a31225uXab = new $hs.Thunk();
    var hs_zdctestBit325uXac = new $hs.Thunk();
    var hs_a31325uXad = new $hs.Thunk();
    var hs_zdcbitSizze325uXae = new $hs.Thunk();
    var hs_a31425uXaf = new $hs.Thunk();
    var hs_zdcisSigned325uXag = new $hs.Thunk();
    var hs_a31525uXah = new $hs.Thunk();
    var hs_zdcshiftL325uXai = new $hs.Thunk();
    var hs_a31625uXaj = new $hs.Thunk();
    var hs_zdcshiftR325uXak = new $hs.Thunk();
    var hs_a31725uXal = new $hs.Thunk();
    var hs_zdcrotateL325uXam = new $hs.Thunk();
    var hs_a31825uXan = new $hs.Thunk();
    var hs_zdcrotateR325uXao = new $hs.Thunk();
    var hs_a31925uXap = new $hs.Thunk();
    var hs_zdcquot325uXaq = new $hs.Thunk();
    var hs_a32025uXar = new $hs.Thunk();
    var hs_zdcrem325uXas = new $hs.Thunk();
    var hs_a32125uXat = new $hs.Thunk();
    var hs_zdcdiv325uXau = new $hs.Thunk();
    var hs_a32225uXav = new $hs.Thunk();
    var hs_zdcmod325uXaw = new $hs.Thunk();
    var hs_a32325uXax = new $hs.Thunk();
    var hs_zdcquotRem325uXay = new $hs.Thunk();
    var hs_a32425uXaz = new $hs.Thunk();
    var hs_zdcdivMod325uXaA = new $hs.Thunk();
    var hs_a32525uXaB = new $hs.Thunk();
    var hs_zdctoInteger325uXaC = new $hs.Thunk();
    var hs_a32625uXaD = new $hs.Thunk();
    var hs_zdcminBound325uXaE = new $hs.Thunk();
    var hs_a32725uXaF = new $hs.Thunk();
    var hs_zdcmaxBound325uXaG = new $hs.Thunk();
    var hs_a32825uXaH = new $hs.Thunk();
    var hs_zdctoRational325uXaI = new $hs.Thunk();
    var hs_a32925uXaJ = new $hs.Thunk();
    var hs_zdcsizzeOf325uXaK = new $hs.Thunk();
    var hs_a33025uXaL = new $hs.Thunk();
    var hs_zdcalignment325uXaM = new $hs.Thunk();
    var hs_a33125uXaN = new $hs.Thunk();
    var hs_zdcpeekElemOff325uXaO = new $hs.Thunk();
    var hs_a33225uXaP = new $hs.Thunk();
    var hs_zdcpokeElemOff325uXaQ = new $hs.Thunk();
    var hs_a33325uXaR = new $hs.Thunk();
    var hs_zdcpeekByteOff325uXaS = new $hs.Thunk();
    var hs_a33425uXaT = new $hs.Thunk();
    var hs_zdcpokeByteOff325uXaU = new $hs.Thunk();
    var hs_a33525uXaV = new $hs.Thunk();
    var hs_zdcpeek325uXaW = new $hs.Thunk();
    var hs_a33625uXaX = new $hs.Thunk();
    var hs_zdcpoke325uXaY = new $hs.Thunk();
    var hs_a33725uXaZ = new $hs.Thunk();
    var hs_zdcsucc325uXb0 = new $hs.Thunk();
    var hs_a33825uXb1 = new $hs.Thunk();
    var hs_zdcpred325uXb2 = new $hs.Thunk();
    var hs_a33925uXb3 = new $hs.Thunk();
    var hs_zdctoEnum325uXb4 = new $hs.Thunk();
    var hs_a34025uXb5 = new $hs.Thunk();
    var hs_zdcfromEnum325uXb6 = new $hs.Thunk();
    var hs_a34125uXb7 = new $hs.Thunk();
    var hs_zdcenumFrom325uXb8 = new $hs.Thunk();
    var hs_a34225uXb9 = new $hs.Thunk();
    var hs_zdcenumFromThen325uXba = new $hs.Thunk();
    var hs_a34325uXbb = new $hs.Thunk();
    var hs_zdcenumFromTo325uXbc = new $hs.Thunk();
    var hs_a34425uXbd = new $hs.Thunk();
    var hs_zdcenumFromThenTo325uXbe = new $hs.Thunk();
    var hs_a34525uXbf = new $hs.Thunk();
    var hs_zdczp325uXbg = new $hs.Thunk();
    var hs_a34625uXbh = new $hs.Thunk();
    var hs_zdczt325uXbi = new $hs.Thunk();
    var hs_a34725uXbj = new $hs.Thunk();
    var hs_zdczm325uXbk = new $hs.Thunk();
    var hs_a34825uXbl = new $hs.Thunk();
    var hs_zdcnegate325uXbm = new $hs.Thunk();
    var hs_a34925uXbn = new $hs.Thunk();
    var hs_zdcabs325uXbo = new $hs.Thunk();
    var hs_a35025uXbp = new $hs.Thunk();
    var hs_zdcsignum325uXbq = new $hs.Thunk();
    var hs_a35125uXbr = new $hs.Thunk();
    var hs_zdcfromInteger325uXbs = new $hs.Thunk();
    var hs_a35225uXbt = new $hs.Thunk();
    var hs_zdccompare325uXbu = new $hs.Thunk();
    var hs_a35325uXbv = new $hs.Thunk();
    var hs_zdczl325uXbw = new $hs.Thunk();
    var hs_a35425uXbx = new $hs.Thunk();
    var hs_zdczgze325uXby = new $hs.Thunk();
    var hs_a35525uXbz = new $hs.Thunk();
    var hs_zdczg325uXbA = new $hs.Thunk();
    var hs_a35625uXbB = new $hs.Thunk();
    var hs_zdczlze325uXbC = new $hs.Thunk();
    var hs_a35725uXbD = new $hs.Thunk();
    var hs_zdcmax325uXbE = new $hs.Thunk();
    var hs_a35825uXbF = new $hs.Thunk();
    var hs_zdcmin325uXbG = new $hs.Thunk();
    var hs_a35925uXbH = new $hs.Thunk();
    var hs_zdczeze325uXbI = new $hs.Thunk();
    var hs_a36025uXbJ = new $hs.Thunk();
    var hs_zdczsze325uXbK = new $hs.Thunk();
    var hs_a36125uXbL = new $hs.Thunk();
    var hs_zdctoRational425uXbM = new $hs.Thunk();
    var hs_a36225uXbN = new $hs.Thunk();
    var hs_zdcsizzeOf425uXbO = new $hs.Thunk();
    var hs_a36325uXbP = new $hs.Thunk();
    var hs_zdcalignment425uXbQ = new $hs.Thunk();
    var hs_a36425uXbR = new $hs.Thunk();
    var hs_zdcpeekElemOff425uXbS = new $hs.Thunk();
    var hs_a36525uXbT = new $hs.Thunk();
    var hs_zdcpokeElemOff425uXbU = new $hs.Thunk();
    var hs_a36625uXbV = new $hs.Thunk();
    var hs_zdcpeekByteOff425uXbW = new $hs.Thunk();
    var hs_a36725uXbX = new $hs.Thunk();
    var hs_zdcpokeByteOff425uXbY = new $hs.Thunk();
    var hs_a36825uXbZ = new $hs.Thunk();
    var hs_zdcpeek425uXc0 = new $hs.Thunk();
    var hs_a36925uXc1 = new $hs.Thunk();
    var hs_zdcpoke425uXc2 = new $hs.Thunk();
    var hs_a37025uXc3 = new $hs.Thunk();
    var hs_zdcsucc425uXc4 = new $hs.Thunk();
    var hs_a37125uXc5 = new $hs.Thunk();
    var hs_zdcpred425uXc6 = new $hs.Thunk();
    var hs_a37225uXc7 = new $hs.Thunk();
    var hs_zdctoEnum425uXc8 = new $hs.Thunk();
    var hs_a37325uXc9 = new $hs.Thunk();
    var hs_zdcfromEnum425uXca = new $hs.Thunk();
    var hs_a37425uXcb = new $hs.Thunk();
    var hs_zdcenumFrom425uXcc = new $hs.Thunk();
    var hs_a37525uXcd = new $hs.Thunk();
    var hs_zdcenumFromThen425uXce = new $hs.Thunk();
    var hs_a37625uXcf = new $hs.Thunk();
    var hs_zdcenumFromTo425uXcg = new $hs.Thunk();
    var hs_a37725uXch = new $hs.Thunk();
    var hs_zdcenumFromThenTo425uXci = new $hs.Thunk();
    var hs_a37825uXcj = new $hs.Thunk();
    var hs_zdczp425uXck = new $hs.Thunk();
    var hs_a37925uXcl = new $hs.Thunk();
    var hs_zdczt425uXcm = new $hs.Thunk();
    var hs_a38025uXcn = new $hs.Thunk();
    var hs_zdczm425uXco = new $hs.Thunk();
    var hs_a38125uXcp = new $hs.Thunk();
    var hs_zdcnegate425uXcq = new $hs.Thunk();
    var hs_a38225uXcr = new $hs.Thunk();
    var hs_zdcabs425uXcs = new $hs.Thunk();
    var hs_a38325uXct = new $hs.Thunk();
    var hs_zdcsignum425uXcu = new $hs.Thunk();
    var hs_a38425uXcv = new $hs.Thunk();
    var hs_zdcfromInteger425uXcw = new $hs.Thunk();
    var hs_a38525uXcx = new $hs.Thunk();
    var hs_zdccompare425uXcy = new $hs.Thunk();
    var hs_a38625uXcz = new $hs.Thunk();
    var hs_zdczl425uXcA = new $hs.Thunk();
    var hs_a38725uXcB = new $hs.Thunk();
    var hs_zdczgze425uXcC = new $hs.Thunk();
    var hs_a38825uXcD = new $hs.Thunk();
    var hs_zdczg425uXcE = new $hs.Thunk();
    var hs_a38925uXcF = new $hs.Thunk();
    var hs_zdczlze425uXcG = new $hs.Thunk();
    var hs_a39025uXcH = new $hs.Thunk();
    var hs_zdcmax425uXcI = new $hs.Thunk();
    var hs_a39125uXcJ = new $hs.Thunk();
    var hs_zdcmin425uXcK = new $hs.Thunk();
    var hs_a39225uXcL = new $hs.Thunk();
    var hs_zdczeze425uXcM = new $hs.Thunk();
    var hs_a39325uXcN = new $hs.Thunk();
    var hs_zdczsze425uXcO = new $hs.Thunk();
    var hs_a39425uXcP = new $hs.Thunk();
    var hs_zdctoRational525uXcQ = new $hs.Thunk();
    var hs_a39525uXcR = new $hs.Thunk();
    var hs_zdcsizzeOf525uXcS = new $hs.Thunk();
    var hs_a39625uXcT = new $hs.Thunk();
    var hs_zdcalignment525uXcU = new $hs.Thunk();
    var hs_a39725uXcV = new $hs.Thunk();
    var hs_zdcpeekElemOff525uXcW = new $hs.Thunk();
    var hs_a39825uXcX = new $hs.Thunk();
    var hs_zdcpokeElemOff525uXcY = new $hs.Thunk();
    var hs_a39925uXcZ = new $hs.Thunk();
    var hs_zdcpeekByteOff525uXd0 = new $hs.Thunk();
    var hs_a40025uXd1 = new $hs.Thunk();
    var hs_zdcpokeByteOff525uXd2 = new $hs.Thunk();
    var hs_a40125uXd3 = new $hs.Thunk();
    var hs_zdcpeek525uXd4 = new $hs.Thunk();
    var hs_a40225uXd5 = new $hs.Thunk();
    var hs_zdcpoke525uXd6 = new $hs.Thunk();
    var hs_a40325uXd7 = new $hs.Thunk();
    var hs_zdcsucc525uXd8 = new $hs.Thunk();
    var hs_a40425uXd9 = new $hs.Thunk();
    var hs_zdcpred525uXda = new $hs.Thunk();
    var hs_a40525uXdb = new $hs.Thunk();
    var hs_zdctoEnum525uXdc = new $hs.Thunk();
    var hs_a40625uXdd = new $hs.Thunk();
    var hs_zdcfromEnum525uXde = new $hs.Thunk();
    var hs_a40725uXdf = new $hs.Thunk();
    var hs_zdcenumFrom525uXdg = new $hs.Thunk();
    var hs_a40825uXdh = new $hs.Thunk();
    var hs_zdcenumFromThen525uXdi = new $hs.Thunk();
    var hs_a40925uXdj = new $hs.Thunk();
    var hs_zdcenumFromTo525uXdk = new $hs.Thunk();
    var hs_a41025uXdl = new $hs.Thunk();
    var hs_zdcenumFromThenTo525uXdm = new $hs.Thunk();
    var hs_a41125uXdn = new $hs.Thunk();
    var hs_zdczp525uXdo = new $hs.Thunk();
    var hs_a41225uXdp = new $hs.Thunk();
    var hs_zdczt525uXdq = new $hs.Thunk();
    var hs_a41325uXdr = new $hs.Thunk();
    var hs_zdczm525uXds = new $hs.Thunk();
    var hs_a41425uXdt = new $hs.Thunk();
    var hs_zdcnegate525uXdu = new $hs.Thunk();
    var hs_a41525uXdv = new $hs.Thunk();
    var hs_zdcabs525uXdw = new $hs.Thunk();
    var hs_a41625uXdx = new $hs.Thunk();
    var hs_zdcsignum525uXdy = new $hs.Thunk();
    var hs_a41725uXdz = new $hs.Thunk();
    var hs_zdcfromInteger525uXdA = new $hs.Thunk();
    var hs_a41825uXdB = new $hs.Thunk();
    var hs_zdccompare525uXdC = new $hs.Thunk();
    var hs_a41925uXdD = new $hs.Thunk();
    var hs_zdczl525uXdE = new $hs.Thunk();
    var hs_a42025uXdF = new $hs.Thunk();
    var hs_zdczgze525uXdG = new $hs.Thunk();
    var hs_a42125uXdH = new $hs.Thunk();
    var hs_zdczg525uXdI = new $hs.Thunk();
    var hs_a42225uXdJ = new $hs.Thunk();
    var hs_zdczlze525uXdK = new $hs.Thunk();
    var hs_a42325uXdL = new $hs.Thunk();
    var hs_zdcmax525uXdM = new $hs.Thunk();
    var hs_a42425uXdN = new $hs.Thunk();
    var hs_zdcmin525uXdO = new $hs.Thunk();
    var hs_a42525uXdP = new $hs.Thunk();
    var hs_zdczeze525uXdQ = new $hs.Thunk();
    var hs_a42625uXdR = new $hs.Thunk();
    var hs_zdczsze525uXdS = new $hs.Thunk();
    var hs_a42725uXdT = new $hs.Thunk();
    var hs_zdctoRational625uXdU = new $hs.Thunk();
    var hs_a42825uXdV = new $hs.Thunk();
    var hs_zdcsizzeOf625uXdW = new $hs.Thunk();
    var hs_a42925uXdX = new $hs.Thunk();
    var hs_zdcalignment625uXdY = new $hs.Thunk();
    var hs_a43025uXdZ = new $hs.Thunk();
    var hs_zdcpeekElemOff625uXe0 = new $hs.Thunk();
    var hs_a43125uXe1 = new $hs.Thunk();
    var hs_zdcpokeElemOff625uXe2 = new $hs.Thunk();
    var hs_a43225uXe3 = new $hs.Thunk();
    var hs_zdcpeekByteOff625uXe4 = new $hs.Thunk();
    var hs_a43325uXe5 = new $hs.Thunk();
    var hs_zdcpokeByteOff625uXe6 = new $hs.Thunk();
    var hs_a43425uXe7 = new $hs.Thunk();
    var hs_zdcpeek625uXe8 = new $hs.Thunk();
    var hs_a43525uXe9 = new $hs.Thunk();
    var hs_zdcpoke625uXea = new $hs.Thunk();
    var hs_a43625uXeb = new $hs.Thunk();
    var hs_zdcsucc625uXec = new $hs.Thunk();
    var hs_a43725uXed = new $hs.Thunk();
    var hs_zdcpred625uXee = new $hs.Thunk();
    var hs_a43825uXef = new $hs.Thunk();
    var hs_zdctoEnum625uXeg = new $hs.Thunk();
    var hs_a43925uXeh = new $hs.Thunk();
    var hs_zdcfromEnum625uXei = new $hs.Thunk();
    var hs_a44025uXej = new $hs.Thunk();
    var hs_zdcenumFrom625uXek = new $hs.Thunk();
    var hs_a44125uXel = new $hs.Thunk();
    var hs_zdcenumFromThen625uXem = new $hs.Thunk();
    var hs_a44225uXen = new $hs.Thunk();
    var hs_zdcenumFromTo625uXeo = new $hs.Thunk();
    var hs_a44325uXep = new $hs.Thunk();
    var hs_zdcenumFromThenTo625uXeq = new $hs.Thunk();
    var hs_a44425uXer = new $hs.Thunk();
    var hs_zdczp625uXes = new $hs.Thunk();
    var hs_a44525uXet = new $hs.Thunk();
    var hs_zdczt625uXeu = new $hs.Thunk();
    var hs_a44625uXev = new $hs.Thunk();
    var hs_zdczm625uXew = new $hs.Thunk();
    var hs_a44725uXex = new $hs.Thunk();
    var hs_zdcnegate625uXey = new $hs.Thunk();
    var hs_a44825uXez = new $hs.Thunk();
    var hs_zdcabs625uXeA = new $hs.Thunk();
    var hs_a44925uXeB = new $hs.Thunk();
    var hs_zdcsignum625uXeC = new $hs.Thunk();
    var hs_a45025uXeD = new $hs.Thunk();
    var hs_zdcfromInteger625uXeE = new $hs.Thunk();
    var hs_a45125uXeF = new $hs.Thunk();
    var hs_zdccompare625uXeG = new $hs.Thunk();
    var hs_a45225uXeH = new $hs.Thunk();
    var hs_zdczl625uXeI = new $hs.Thunk();
    var hs_a45325uXeJ = new $hs.Thunk();
    var hs_zdczgze625uXeK = new $hs.Thunk();
    var hs_a45425uXeL = new $hs.Thunk();
    var hs_zdczg625uXeM = new $hs.Thunk();
    var hs_a45525uXeN = new $hs.Thunk();
    var hs_zdczlze625uXeO = new $hs.Thunk();
    var hs_a45625uXeP = new $hs.Thunk();
    var hs_zdcmax625uXeQ = new $hs.Thunk();
    var hs_a45725uXeR = new $hs.Thunk();
    var hs_zdcmin625uXeS = new $hs.Thunk();
    var hs_a45825uXeT = new $hs.Thunk();
    var hs_zdczeze625uXeU = new $hs.Thunk();
    var hs_a45925uXeV = new $hs.Thunk();
    var hs_zdczsze625uXeW = new $hs.Thunk();
    var hs_a46025uXeX = new $hs.Thunk();
    var hs_zdctoRational725uXeY = new $hs.Thunk();
    var hs_a46125uXeZ = new $hs.Thunk();
    var hs_zdcsizzeOf725uXf0 = new $hs.Thunk();
    var hs_a46225uXf1 = new $hs.Thunk();
    var hs_zdcalignment725uXf2 = new $hs.Thunk();
    var hs_a46325uXf3 = new $hs.Thunk();
    var hs_zdcpeekElemOff725uXf4 = new $hs.Thunk();
    var hs_a46425uXf5 = new $hs.Thunk();
    var hs_zdcpokeElemOff725uXf6 = new $hs.Thunk();
    var hs_a46525uXf7 = new $hs.Thunk();
    var hs_zdcpeekByteOff725uXf8 = new $hs.Thunk();
    var hs_a46625uXf9 = new $hs.Thunk();
    var hs_zdcpokeByteOff725uXfa = new $hs.Thunk();
    var hs_a46725uXfb = new $hs.Thunk();
    var hs_zdcpeek725uXfc = new $hs.Thunk();
    var hs_a46825uXfd = new $hs.Thunk();
    var hs_zdcpoke725uXfe = new $hs.Thunk();
    var hs_a46925uXff = new $hs.Thunk();
    var hs_zdcsucc725uXfg = new $hs.Thunk();
    var hs_a47025uXfh = new $hs.Thunk();
    var hs_zdcpred725uXfi = new $hs.Thunk();
    var hs_a47125uXfj = new $hs.Thunk();
    var hs_zdctoEnum725uXfk = new $hs.Thunk();
    var hs_a47225uXfl = new $hs.Thunk();
    var hs_zdcfromEnum725uXfm = new $hs.Thunk();
    var hs_a47325uXfn = new $hs.Thunk();
    var hs_zdcenumFrom725uXfo = new $hs.Thunk();
    var hs_a47425uXfp = new $hs.Thunk();
    var hs_zdcenumFromThen725uXfq = new $hs.Thunk();
    var hs_a47525uXfr = new $hs.Thunk();
    var hs_zdcenumFromTo725uXfs = new $hs.Thunk();
    var hs_a47625uXft = new $hs.Thunk();
    var hs_zdcenumFromThenTo725uXfu = new $hs.Thunk();
    var hs_a47725uXfv = new $hs.Thunk();
    var hs_zdczp725uXfw = new $hs.Thunk();
    var hs_a47825uXfx = new $hs.Thunk();
    var hs_zdczt725uXfy = new $hs.Thunk();
    var hs_a47925uXfz = new $hs.Thunk();
    var hs_zdczm725uXfA = new $hs.Thunk();
    var hs_a48025uXfB = new $hs.Thunk();
    var hs_zdcnegate725uXfC = new $hs.Thunk();
    var hs_a48125uXfD = new $hs.Thunk();
    var hs_zdcabs725uXfE = new $hs.Thunk();
    var hs_a48225uXfF = new $hs.Thunk();
    var hs_zdcsignum725uXfG = new $hs.Thunk();
    var hs_a48325uXfH = new $hs.Thunk();
    var hs_zdcfromInteger725uXfI = new $hs.Thunk();
    var hs_a48425uXfJ = new $hs.Thunk();
    var hs_zdccompare725uXfK = new $hs.Thunk();
    var hs_a48525uXfL = new $hs.Thunk();
    var hs_zdczl725uXfM = new $hs.Thunk();
    var hs_a48625uXfN = new $hs.Thunk();
    var hs_zdczgze725uXfO = new $hs.Thunk();
    var hs_a48725uXfP = new $hs.Thunk();
    var hs_zdczg725uXfQ = new $hs.Thunk();
    var hs_a48825uXfR = new $hs.Thunk();
    var hs_zdczlze725uXfS = new $hs.Thunk();
    var hs_a48925uXfT = new $hs.Thunk();
    var hs_zdcmax725uXfU = new $hs.Thunk();
    var hs_a49025uXfV = new $hs.Thunk();
    var hs_zdcmin725uXfW = new $hs.Thunk();
    var hs_a49125uXfX = new $hs.Thunk();
    var hs_zdczeze725uXfY = new $hs.Thunk();
    var hs_a49225uXfZ = new $hs.Thunk();
    var hs_zdczsze725uXg0 = new $hs.Thunk();
    var hs_a49325uXg1 = new $hs.Thunk();
    var hs_zdczizazi425uXg2 = new $hs.Thunk();
    var hs_a49425uXg3 = new $hs.Thunk();
    var hs_zdczizbzi425uXg4 = new $hs.Thunk();
    var hs_a49525uXg5 = new $hs.Thunk();
    var hs_zdcxor425uXg6 = new $hs.Thunk();
    var hs_a49625uXg7 = new $hs.Thunk();
    var hs_zdccomplement425uXg8 = new $hs.Thunk();
    var hs_a49725uXg9 = new $hs.Thunk();
    var hs_zdcshift425uXga = new $hs.Thunk();
    var hs_a49825uXgb = new $hs.Thunk();
    var hs_zdcrotate425uXgc = new $hs.Thunk();
    var hs_a49925uXgd = new $hs.Thunk();
    var hs_zdcbit425uXge = new $hs.Thunk();
    var hs_a50025uXgf = new $hs.Thunk();
    var hs_zdcsetBit425uXgg = new $hs.Thunk();
    var hs_a50125uXgh = new $hs.Thunk();
    var hs_zdcclearBit425uXgi = new $hs.Thunk();
    var hs_a50225uXgj = new $hs.Thunk();
    var hs_zdccomplementBit425uXgk = new $hs.Thunk();
    var hs_a50325uXgl = new $hs.Thunk();
    var hs_zdctestBit425uXgm = new $hs.Thunk();
    var hs_a50425uXgn = new $hs.Thunk();
    var hs_zdcbitSizze425uXgo = new $hs.Thunk();
    var hs_a50525uXgp = new $hs.Thunk();
    var hs_zdcisSigned425uXgq = new $hs.Thunk();
    var hs_a50625uXgr = new $hs.Thunk();
    var hs_zdcshiftL425uXgs = new $hs.Thunk();
    var hs_a50725uXgt = new $hs.Thunk();
    var hs_zdcshiftR425uXgu = new $hs.Thunk();
    var hs_a50825uXgv = new $hs.Thunk();
    var hs_zdcrotateL425uXgw = new $hs.Thunk();
    var hs_a50925uXgx = new $hs.Thunk();
    var hs_zdcrotateR425uXgy = new $hs.Thunk();
    var hs_a51025uXgz = new $hs.Thunk();
    var hs_zdcquot425uXgA = new $hs.Thunk();
    var hs_a51125uXgB = new $hs.Thunk();
    var hs_zdcrem425uXgC = new $hs.Thunk();
    var hs_a51225uXgD = new $hs.Thunk();
    var hs_zdcdiv425uXgE = new $hs.Thunk();
    var hs_a51325uXgF = new $hs.Thunk();
    var hs_zdcmod425uXgG = new $hs.Thunk();
    var hs_a51425uXgH = new $hs.Thunk();
    var hs_zdcquotRem425uXgI = new $hs.Thunk();
    var hs_a51525uXgJ = new $hs.Thunk();
    var hs_zdcdivMod425uXgK = new $hs.Thunk();
    var hs_a51625uXgL = new $hs.Thunk();
    var hs_zdctoInteger425uXgM = new $hs.Thunk();
    var hs_a51725uXgN = new $hs.Thunk();
    var hs_zdcminBound425uXgO = new $hs.Thunk();
    var hs_a51825uXgP = new $hs.Thunk();
    var hs_zdcmaxBound425uXgQ = new $hs.Thunk();
    var hs_a51925uXgR = new $hs.Thunk();
    var hs_zdctoRational825uXgS = new $hs.Thunk();
    var hs_a52025uXgT = new $hs.Thunk();
    var hs_zdcsizzeOf825uXgU = new $hs.Thunk();
    var hs_a52125uXgV = new $hs.Thunk();
    var hs_zdcalignment825uXgW = new $hs.Thunk();
    var hs_a52225uXgX = new $hs.Thunk();
    var hs_zdcpeekElemOff825uXgY = new $hs.Thunk();
    var hs_a52325uXgZ = new $hs.Thunk();
    var hs_zdcpokeElemOff825uXh0 = new $hs.Thunk();
    var hs_a52425uXh1 = new $hs.Thunk();
    var hs_zdcpeekByteOff825uXh2 = new $hs.Thunk();
    var hs_a52525uXh3 = new $hs.Thunk();
    var hs_zdcpokeByteOff825uXh4 = new $hs.Thunk();
    var hs_a52625uXh5 = new $hs.Thunk();
    var hs_zdcpeek825uXh6 = new $hs.Thunk();
    var hs_a52725uXh7 = new $hs.Thunk();
    var hs_zdcpoke825uXh8 = new $hs.Thunk();
    var hs_a52825uXh9 = new $hs.Thunk();
    var hs_zdcsucc825uXha = new $hs.Thunk();
    var hs_a52925uXhb = new $hs.Thunk();
    var hs_zdcpred825uXhc = new $hs.Thunk();
    var hs_a53025uXhd = new $hs.Thunk();
    var hs_zdctoEnum825uXhe = new $hs.Thunk();
    var hs_a53125uXhf = new $hs.Thunk();
    var hs_zdcfromEnum825uXhg = new $hs.Thunk();
    var hs_a53225uXhh = new $hs.Thunk();
    var hs_zdcenumFrom825uXhi = new $hs.Thunk();
    var hs_a53325uXhj = new $hs.Thunk();
    var hs_zdcenumFromThen825uXhk = new $hs.Thunk();
    var hs_a53425uXhl = new $hs.Thunk();
    var hs_zdcenumFromTo825uXhm = new $hs.Thunk();
    var hs_a53525uXhn = new $hs.Thunk();
    var hs_zdcenumFromThenTo825uXho = new $hs.Thunk();
    var hs_a53625uXhp = new $hs.Thunk();
    var hs_zdczp825uXhq = new $hs.Thunk();
    var hs_a53725uXhr = new $hs.Thunk();
    var hs_zdczt825uXhs = new $hs.Thunk();
    var hs_a53825uXht = new $hs.Thunk();
    var hs_zdczm825uXhu = new $hs.Thunk();
    var hs_a53925uXhv = new $hs.Thunk();
    var hs_zdcnegate825uXhw = new $hs.Thunk();
    var hs_a54025uXhx = new $hs.Thunk();
    var hs_zdcabs825uXhy = new $hs.Thunk();
    var hs_a54125uXhz = new $hs.Thunk();
    var hs_zdcsignum825uXhA = new $hs.Thunk();
    var hs_a54225uXhB = new $hs.Thunk();
    var hs_zdcfromInteger825uXhC = new $hs.Thunk();
    var hs_a54325uXhD = new $hs.Thunk();
    var hs_zdccompare825uXhE = new $hs.Thunk();
    var hs_a54425uXhF = new $hs.Thunk();
    var hs_zdczl825uXhG = new $hs.Thunk();
    var hs_a54525uXhH = new $hs.Thunk();
    var hs_zdczgze825uXhI = new $hs.Thunk();
    var hs_a54625uXhJ = new $hs.Thunk();
    var hs_zdczg825uXhK = new $hs.Thunk();
    var hs_a54725uXhL = new $hs.Thunk();
    var hs_zdczlze825uXhM = new $hs.Thunk();
    var hs_a54825uXhN = new $hs.Thunk();
    var hs_zdcmax825uXhO = new $hs.Thunk();
    var hs_a54925uXhP = new $hs.Thunk();
    var hs_zdcmin825uXhQ = new $hs.Thunk();
    var hs_a55025uXhR = new $hs.Thunk();
    var hs_zdczeze825uXhS = new $hs.Thunk();
    var hs_a55125uXhT = new $hs.Thunk();
    var hs_zdczsze825uXhU = new $hs.Thunk();
    var hs_a55225uXhV = new $hs.Thunk();
    var hs_zdczizazi525uXhW = new $hs.Thunk();
    var hs_a55325uXhX = new $hs.Thunk();
    var hs_zdczizbzi525uXhY = new $hs.Thunk();
    var hs_a55425uXhZ = new $hs.Thunk();
    var hs_zdcxor525uXi0 = new $hs.Thunk();
    var hs_a55525uXi1 = new $hs.Thunk();
    var hs_zdccomplement525uXi2 = new $hs.Thunk();
    var hs_a55625uXi3 = new $hs.Thunk();
    var hs_zdcshift525uXi4 = new $hs.Thunk();
    var hs_a55725uXi5 = new $hs.Thunk();
    var hs_zdcrotate525uXi6 = new $hs.Thunk();
    var hs_a55825uXi7 = new $hs.Thunk();
    var hs_zdcbit525uXi8 = new $hs.Thunk();
    var hs_a55925uXi9 = new $hs.Thunk();
    var hs_zdcsetBit525uXia = new $hs.Thunk();
    var hs_a56025uXib = new $hs.Thunk();
    var hs_zdcclearBit525uXic = new $hs.Thunk();
    var hs_a56125uXid = new $hs.Thunk();
    var hs_zdccomplementBit525uXie = new $hs.Thunk();
    var hs_a56225uXif = new $hs.Thunk();
    var hs_zdctestBit525uXig = new $hs.Thunk();
    var hs_a56325uXih = new $hs.Thunk();
    var hs_zdcbitSizze525uXii = new $hs.Thunk();
    var hs_a56425uXij = new $hs.Thunk();
    var hs_zdcisSigned525uXik = new $hs.Thunk();
    var hs_a56525uXil = new $hs.Thunk();
    var hs_zdcshiftL525uXim = new $hs.Thunk();
    var hs_a56625uXin = new $hs.Thunk();
    var hs_zdcshiftR525uXio = new $hs.Thunk();
    var hs_a56725uXip = new $hs.Thunk();
    var hs_zdcrotateL525uXiq = new $hs.Thunk();
    var hs_a56825uXir = new $hs.Thunk();
    var hs_zdcrotateR525uXis = new $hs.Thunk();
    var hs_a56925uXit = new $hs.Thunk();
    var hs_zdcquot525uXiu = new $hs.Thunk();
    var hs_a57025uXiv = new $hs.Thunk();
    var hs_zdcrem525uXiw = new $hs.Thunk();
    var hs_a57125uXix = new $hs.Thunk();
    var hs_zdcdiv525uXiy = new $hs.Thunk();
    var hs_a57225uXiz = new $hs.Thunk();
    var hs_zdcmod525uXiA = new $hs.Thunk();
    var hs_a57325uXiB = new $hs.Thunk();
    var hs_zdcquotRem525uXiC = new $hs.Thunk();
    var hs_a57425uXiD = new $hs.Thunk();
    var hs_zdcdivMod525uXiE = new $hs.Thunk();
    var hs_a57525uXiF = new $hs.Thunk();
    var hs_zdctoInteger525uXiG = new $hs.Thunk();
    var hs_a57625uXiH = new $hs.Thunk();
    var hs_zdcminBound525uXiI = new $hs.Thunk();
    var hs_a57725uXiJ = new $hs.Thunk();
    var hs_zdcmaxBound525uXiK = new $hs.Thunk();
    var hs_a57825uXiL = new $hs.Thunk();
    var hs_zdctoRational925uXiM = new $hs.Thunk();
    var hs_a57925uXiN = new $hs.Thunk();
    var hs_zdcsizzeOf925uXiO = new $hs.Thunk();
    var hs_a58025uXiP = new $hs.Thunk();
    var hs_zdcalignment925uXiQ = new $hs.Thunk();
    var hs_a58125uXiR = new $hs.Thunk();
    var hs_zdcpeekElemOff925uXiS = new $hs.Thunk();
    var hs_a58225uXiT = new $hs.Thunk();
    var hs_zdcpokeElemOff925uXiU = new $hs.Thunk();
    var hs_a58325uXiV = new $hs.Thunk();
    var hs_zdcpeekByteOff925uXiW = new $hs.Thunk();
    var hs_a58425uXiX = new $hs.Thunk();
    var hs_zdcpokeByteOff925uXiY = new $hs.Thunk();
    var hs_a58525uXiZ = new $hs.Thunk();
    var hs_zdcpeek925uXj0 = new $hs.Thunk();
    var hs_a58625uXj1 = new $hs.Thunk();
    var hs_zdcpoke925uXj2 = new $hs.Thunk();
    var hs_a58725uXj3 = new $hs.Thunk();
    var hs_zdcsucc925uXj4 = new $hs.Thunk();
    var hs_a58825uXj5 = new $hs.Thunk();
    var hs_zdcpred925uXj6 = new $hs.Thunk();
    var hs_a58925uXj7 = new $hs.Thunk();
    var hs_zdctoEnum925uXj8 = new $hs.Thunk();
    var hs_a59025uXj9 = new $hs.Thunk();
    var hs_zdcfromEnum925uXja = new $hs.Thunk();
    var hs_a59125uXjb = new $hs.Thunk();
    var hs_zdcenumFrom925uXjc = new $hs.Thunk();
    var hs_a59225uXjd = new $hs.Thunk();
    var hs_zdcenumFromThen925uXje = new $hs.Thunk();
    var hs_a59325uXjf = new $hs.Thunk();
    var hs_zdcenumFromTo925uXjg = new $hs.Thunk();
    var hs_a59425uXjh = new $hs.Thunk();
    var hs_zdcenumFromThenTo925uXji = new $hs.Thunk();
    var hs_a59525uXjj = new $hs.Thunk();
    var hs_zdczp925uXjk = new $hs.Thunk();
    var hs_a59625uXjl = new $hs.Thunk();
    var hs_zdczt925uXjm = new $hs.Thunk();
    var hs_a59725uXjn = new $hs.Thunk();
    var hs_zdczm925uXjo = new $hs.Thunk();
    var hs_a59825uXjp = new $hs.Thunk();
    var hs_zdcnegate925uXjq = new $hs.Thunk();
    var hs_a59925uXjr = new $hs.Thunk();
    var hs_zdcabs925uXjs = new $hs.Thunk();
    var hs_a60025uXjt = new $hs.Thunk();
    var hs_zdcsignum925uXju = new $hs.Thunk();
    var hs_a60125uXjv = new $hs.Thunk();
    var hs_zdcfromInteger925uXjw = new $hs.Thunk();
    var hs_a60225uXjx = new $hs.Thunk();
    var hs_zdccompare925uXjy = new $hs.Thunk();
    var hs_a60325uXjz = new $hs.Thunk();
    var hs_zdczl925uXjA = new $hs.Thunk();
    var hs_a60425uXjB = new $hs.Thunk();
    var hs_zdczgze925uXjC = new $hs.Thunk();
    var hs_a60525uXjD = new $hs.Thunk();
    var hs_zdczg925uXjE = new $hs.Thunk();
    var hs_a60625uXjF = new $hs.Thunk();
    var hs_zdczlze925uXjG = new $hs.Thunk();
    var hs_a60725uXjH = new $hs.Thunk();
    var hs_zdcmax925uXjI = new $hs.Thunk();
    var hs_a60825uXjJ = new $hs.Thunk();
    var hs_zdcmin925uXjK = new $hs.Thunk();
    var hs_a60925uXjL = new $hs.Thunk();
    var hs_zdczeze925uXjM = new $hs.Thunk();
    var hs_a61025uXjN = new $hs.Thunk();
    var hs_zdczsze925uXjO = new $hs.Thunk();
    var hs_a61125uXjP = new $hs.Thunk();
    var hs_zdczizazi625uXjQ = new $hs.Thunk();
    var hs_a61225uXjR = new $hs.Thunk();
    var hs_zdczizbzi625uXjS = new $hs.Thunk();
    var hs_a61325uXjT = new $hs.Thunk();
    var hs_zdcxor625uXjU = new $hs.Thunk();
    var hs_a61425uXjV = new $hs.Thunk();
    var hs_zdccomplement625uXjW = new $hs.Thunk();
    var hs_a61525uXjX = new $hs.Thunk();
    var hs_zdcshift625uXjY = new $hs.Thunk();
    var hs_a61625uXjZ = new $hs.Thunk();
    var hs_zdcrotate625uXk0 = new $hs.Thunk();
    var hs_a61725uXk1 = new $hs.Thunk();
    var hs_zdcbit625uXk2 = new $hs.Thunk();
    var hs_a61825uXk3 = new $hs.Thunk();
    var hs_zdcsetBit625uXk4 = new $hs.Thunk();
    var hs_a61925uXk5 = new $hs.Thunk();
    var hs_zdcclearBit625uXk6 = new $hs.Thunk();
    var hs_a62025uXk7 = new $hs.Thunk();
    var hs_zdccomplementBit625uXk8 = new $hs.Thunk();
    var hs_a62125uXk9 = new $hs.Thunk();
    var hs_zdctestBit625uXka = new $hs.Thunk();
    var hs_a62225uXkb = new $hs.Thunk();
    var hs_zdcbitSizze625uXkc = new $hs.Thunk();
    var hs_a62325uXkd = new $hs.Thunk();
    var hs_zdcisSigned625uXke = new $hs.Thunk();
    var hs_a62425uXkf = new $hs.Thunk();
    var hs_zdcshiftL625uXkg = new $hs.Thunk();
    var hs_a62525uXkh = new $hs.Thunk();
    var hs_zdcshiftR625uXki = new $hs.Thunk();
    var hs_a62625uXkj = new $hs.Thunk();
    var hs_zdcrotateL625uXkk = new $hs.Thunk();
    var hs_a62725uXkl = new $hs.Thunk();
    var hs_zdcrotateR625uXkm = new $hs.Thunk();
    var hs_a62825uXkn = new $hs.Thunk();
    var hs_zdcquot625uXko = new $hs.Thunk();
    var hs_a62925uXkp = new $hs.Thunk();
    var hs_zdcrem625uXkq = new $hs.Thunk();
    var hs_a63025uXkr = new $hs.Thunk();
    var hs_zdcdiv625uXks = new $hs.Thunk();
    var hs_a63125uXkt = new $hs.Thunk();
    var hs_zdcmod625uXku = new $hs.Thunk();
    var hs_a63225uXkv = new $hs.Thunk();
    var hs_zdcquotRem625uXkw = new $hs.Thunk();
    var hs_a63325uXkx = new $hs.Thunk();
    var hs_zdcdivMod625uXky = new $hs.Thunk();
    var hs_a63425uXkz = new $hs.Thunk();
    var hs_zdctoInteger625uXkA = new $hs.Thunk();
    var hs_a63525uXkB = new $hs.Thunk();
    var hs_zdcminBound625uXkC = new $hs.Thunk();
    var hs_a63625uXkD = new $hs.Thunk();
    var hs_zdcmaxBound625uXkE = new $hs.Thunk();
    var hs_a63725uXkF = new $hs.Thunk();
    var hs_zdctoRational1025uXkG = new $hs.Thunk();
    var hs_a63825uXkH = new $hs.Thunk();
    var hs_zdcsizzeOf1025uXkI = new $hs.Thunk();
    var hs_a63925uXkJ = new $hs.Thunk();
    var hs_zdcalignment1025uXkK = new $hs.Thunk();
    var hs_a64025uXkL = new $hs.Thunk();
    var hs_zdcpeekElemOff1025uXkM = new $hs.Thunk();
    var hs_a64125uXkN = new $hs.Thunk();
    var hs_zdcpokeElemOff1025uXkO = new $hs.Thunk();
    var hs_a64225uXkP = new $hs.Thunk();
    var hs_zdcpeekByteOff1025uXkQ = new $hs.Thunk();
    var hs_a64325uXkR = new $hs.Thunk();
    var hs_zdcpokeByteOff1025uXkS = new $hs.Thunk();
    var hs_a64425uXkT = new $hs.Thunk();
    var hs_zdcpeek1025uXkU = new $hs.Thunk();
    var hs_a64525uXkV = new $hs.Thunk();
    var hs_zdcpoke1025uXkW = new $hs.Thunk();
    var hs_a64625uXkX = new $hs.Thunk();
    var hs_zdcsucc1025uXkY = new $hs.Thunk();
    var hs_a64725uXkZ = new $hs.Thunk();
    var hs_zdcpred1025uXl0 = new $hs.Thunk();
    var hs_a64825uXl1 = new $hs.Thunk();
    var hs_zdctoEnum1025uXl2 = new $hs.Thunk();
    var hs_a64925uXl3 = new $hs.Thunk();
    var hs_zdcfromEnum1025uXl4 = new $hs.Thunk();
    var hs_a65025uXl5 = new $hs.Thunk();
    var hs_zdcenumFrom1025uXl6 = new $hs.Thunk();
    var hs_a65125uXl7 = new $hs.Thunk();
    var hs_zdcenumFromThen1025uXl8 = new $hs.Thunk();
    var hs_a65225uXl9 = new $hs.Thunk();
    var hs_zdcenumFromTo1025uXla = new $hs.Thunk();
    var hs_a65325uXlb = new $hs.Thunk();
    var hs_zdcenumFromThenTo1025uXlc = new $hs.Thunk();
    var hs_a65425uXld = new $hs.Thunk();
    var hs_zdczp1025uXle = new $hs.Thunk();
    var hs_a65525uXlf = new $hs.Thunk();
    var hs_zdczt1025uXlg = new $hs.Thunk();
    var hs_a65625uXlh = new $hs.Thunk();
    var hs_zdczm1025uXli = new $hs.Thunk();
    var hs_a65725uXlj = new $hs.Thunk();
    var hs_zdcnegate1025uXlk = new $hs.Thunk();
    var hs_a65825uXll = new $hs.Thunk();
    var hs_zdcabs1025uXlm = new $hs.Thunk();
    var hs_a65925uXln = new $hs.Thunk();
    var hs_zdcsignum1025uXlo = new $hs.Thunk();
    var hs_a66025uXlp = new $hs.Thunk();
    var hs_zdcfromInteger1025uXlq = new $hs.Thunk();
    var hs_a66125uXlr = new $hs.Thunk();
    var hs_zdccompare1025uXls = new $hs.Thunk();
    var hs_a66225uXlt = new $hs.Thunk();
    var hs_zdczl1025uXlu = new $hs.Thunk();
    var hs_a66325uXlv = new $hs.Thunk();
    var hs_zdczgze1025uXlw = new $hs.Thunk();
    var hs_a66425uXlx = new $hs.Thunk();
    var hs_zdczg1025uXly = new $hs.Thunk();
    var hs_a66525uXlz = new $hs.Thunk();
    var hs_zdczlze1025uXlA = new $hs.Thunk();
    var hs_a66625uXlB = new $hs.Thunk();
    var hs_zdcmax1025uXlC = new $hs.Thunk();
    var hs_a66725uXlD = new $hs.Thunk();
    var hs_zdcmin1025uXlE = new $hs.Thunk();
    var hs_a66825uXlF = new $hs.Thunk();
    var hs_zdczeze1025uXlG = new $hs.Thunk();
    var hs_a66925uXlH = new $hs.Thunk();
    var hs_zdczsze1025uXlI = new $hs.Thunk();
    var hs_a67025uXlJ = new $hs.Thunk();
    var hs_zdczizazi725uXlK = new $hs.Thunk();
    var hs_a67125uXlL = new $hs.Thunk();
    var hs_zdczizbzi725uXlM = new $hs.Thunk();
    var hs_a67225uXlN = new $hs.Thunk();
    var hs_zdcxor725uXlO = new $hs.Thunk();
    var hs_a67325uXlP = new $hs.Thunk();
    var hs_zdccomplement725uXlQ = new $hs.Thunk();
    var hs_a67425uXlR = new $hs.Thunk();
    var hs_zdcshift725uXlS = new $hs.Thunk();
    var hs_a67525uXlT = new $hs.Thunk();
    var hs_zdcrotate725uXlU = new $hs.Thunk();
    var hs_a67625uXlV = new $hs.Thunk();
    var hs_zdcbit725uXlW = new $hs.Thunk();
    var hs_a67725uXlX = new $hs.Thunk();
    var hs_zdcsetBit725uXlY = new $hs.Thunk();
    var hs_a67825uXlZ = new $hs.Thunk();
    var hs_zdcclearBit725uXm0 = new $hs.Thunk();
    var hs_a67925uXm1 = new $hs.Thunk();
    var hs_zdccomplementBit725uXm2 = new $hs.Thunk();
    var hs_a68025uXm3 = new $hs.Thunk();
    var hs_zdctestBit725uXm4 = new $hs.Thunk();
    var hs_a68125uXm5 = new $hs.Thunk();
    var hs_zdcbitSizze725uXm6 = new $hs.Thunk();
    var hs_a68225uXm7 = new $hs.Thunk();
    var hs_zdcisSigned725uXm8 = new $hs.Thunk();
    var hs_a68325uXm9 = new $hs.Thunk();
    var hs_zdcshiftL725uXma = new $hs.Thunk();
    var hs_a68425uXmb = new $hs.Thunk();
    var hs_zdcshiftR725uXmc = new $hs.Thunk();
    var hs_a68525uXmd = new $hs.Thunk();
    var hs_zdcrotateL725uXme = new $hs.Thunk();
    var hs_a68625uXmf = new $hs.Thunk();
    var hs_zdcrotateR725uXmg = new $hs.Thunk();
    var hs_a68725uXmh = new $hs.Thunk();
    var hs_zdcquot725uXmi = new $hs.Thunk();
    var hs_a68825uXmj = new $hs.Thunk();
    var hs_zdcrem725uXmk = new $hs.Thunk();
    var hs_a68925uXml = new $hs.Thunk();
    var hs_zdcdiv725uXmm = new $hs.Thunk();
    var hs_a69025uXmn = new $hs.Thunk();
    var hs_zdcmod725uXmo = new $hs.Thunk();
    var hs_a69125uXmp = new $hs.Thunk();
    var hs_zdcquotRem725uXmq = new $hs.Thunk();
    var hs_a69225uXmr = new $hs.Thunk();
    var hs_zdcdivMod725uXms = new $hs.Thunk();
    var hs_a69325uXmt = new $hs.Thunk();
    var hs_zdctoInteger725uXmu = new $hs.Thunk();
    var hs_a69425uXmv = new $hs.Thunk();
    var hs_zdcminBound725uXmw = new $hs.Thunk();
    var hs_a69525uXmx = new $hs.Thunk();
    var hs_zdcmaxBound725uXmy = new $hs.Thunk();
    var hs_a69625uXmz = new $hs.Thunk();
    var hs_zdctoRational1125uXmA = new $hs.Thunk();
    var hs_a69725uXmB = new $hs.Thunk();
    var hs_zdcsizzeOf1125uXmC = new $hs.Thunk();
    var hs_a69825uXmD = new $hs.Thunk();
    var hs_zdcalignment1125uXmE = new $hs.Thunk();
    var hs_a69925uXmF = new $hs.Thunk();
    var hs_zdcpeekElemOff1125uXmG = new $hs.Thunk();
    var hs_a70025uXmH = new $hs.Thunk();
    var hs_zdcpokeElemOff1125uXmI = new $hs.Thunk();
    var hs_a70125uXmJ = new $hs.Thunk();
    var hs_zdcpeekByteOff1125uXmK = new $hs.Thunk();
    var hs_a70225uXmL = new $hs.Thunk();
    var hs_zdcpokeByteOff1125uXmM = new $hs.Thunk();
    var hs_a70325uXmN = new $hs.Thunk();
    var hs_zdcpeek1125uXmO = new $hs.Thunk();
    var hs_a70425uXmP = new $hs.Thunk();
    var hs_zdcpoke1125uXmQ = new $hs.Thunk();
    var hs_a70525uXmR = new $hs.Thunk();
    var hs_zdcsucc1125uXmS = new $hs.Thunk();
    var hs_a70625uXmT = new $hs.Thunk();
    var hs_zdcpred1125uXmU = new $hs.Thunk();
    var hs_a70725uXmV = new $hs.Thunk();
    var hs_zdctoEnum1125uXmW = new $hs.Thunk();
    var hs_a70825uXmX = new $hs.Thunk();
    var hs_zdcfromEnum1125uXmY = new $hs.Thunk();
    var hs_a70925uXmZ = new $hs.Thunk();
    var hs_zdcenumFrom1125uXn0 = new $hs.Thunk();
    var hs_a71025uXn1 = new $hs.Thunk();
    var hs_zdcenumFromThen1125uXn2 = new $hs.Thunk();
    var hs_a71125uXn3 = new $hs.Thunk();
    var hs_zdcenumFromTo1125uXn4 = new $hs.Thunk();
    var hs_a71225uXn5 = new $hs.Thunk();
    var hs_zdcenumFromThenTo1125uXn6 = new $hs.Thunk();
    var hs_a71325uXn7 = new $hs.Thunk();
    var hs_zdczp1125uXn8 = new $hs.Thunk();
    var hs_a71425uXn9 = new $hs.Thunk();
    var hs_zdczt1125uXna = new $hs.Thunk();
    var hs_a71525uXnb = new $hs.Thunk();
    var hs_zdczm1125uXnc = new $hs.Thunk();
    var hs_a71625uXnd = new $hs.Thunk();
    var hs_zdcnegate1125uXne = new $hs.Thunk();
    var hs_a71725uXnf = new $hs.Thunk();
    var hs_zdcabs1125uXng = new $hs.Thunk();
    var hs_a71825uXnh = new $hs.Thunk();
    var hs_zdcsignum1125uXni = new $hs.Thunk();
    var hs_a71925uXnj = new $hs.Thunk();
    var hs_zdcfromInteger1125uXnk = new $hs.Thunk();
    var hs_a72025uXnl = new $hs.Thunk();
    var hs_zdccompare1125uXnm = new $hs.Thunk();
    var hs_a72125uXnn = new $hs.Thunk();
    var hs_zdczl1125uXno = new $hs.Thunk();
    var hs_a72225uXnp = new $hs.Thunk();
    var hs_zdczgze1125uXnq = new $hs.Thunk();
    var hs_a72325uXnr = new $hs.Thunk();
    var hs_zdczg1125uXns = new $hs.Thunk();
    var hs_a72425uXnt = new $hs.Thunk();
    var hs_zdczlze1125uXnu = new $hs.Thunk();
    var hs_a72525uXnv = new $hs.Thunk();
    var hs_zdcmax1125uXnw = new $hs.Thunk();
    var hs_a72625uXnx = new $hs.Thunk();
    var hs_zdcmin1125uXny = new $hs.Thunk();
    var hs_a72725uXnz = new $hs.Thunk();
    var hs_zdczeze1125uXnA = new $hs.Thunk();
    var hs_a72825uXnB = new $hs.Thunk();
    var hs_zdczsze1125uXnC = new $hs.Thunk();
    var hs_a72925uXnD = new $hs.Thunk();
    var hs_zdcfloatRadix25uXnE = new $hs.Thunk();
    var hs_a73025uXnF = new $hs.Thunk();
    var hs_zdcfloatDigits25uXnG = new $hs.Thunk();
    var hs_a73125uXnH = new $hs.Thunk();
    var hs_zdcfloatRange25uXnI = new $hs.Thunk();
    var hs_a73225uXnJ = new $hs.Thunk();
    var hs_zdcdecodeFloat25uXnK = new $hs.Thunk();
    var hs_a73325uXnL = new $hs.Thunk();
    var hs_zdcencodeFloat25uXnM = new $hs.Thunk();
    var hs_a73425uXnN = new $hs.Thunk();
    var hs_zdcexponent25uXnO = new $hs.Thunk();
    var hs_a73525uXnP = new $hs.Thunk();
    var hs_zdcsignificand25uXnQ = new $hs.Thunk();
    var hs_a73625uXnR = new $hs.Thunk();
    var hs_zdcscaleFloat25uXnS = new $hs.Thunk();
    var hs_a73725uXnT = new $hs.Thunk();
    var hs_zdcisNaN25uXnU = new $hs.Thunk();
    var hs_a73825uXnV = new $hs.Thunk();
    var hs_zdcisInfinite25uXnW = new $hs.Thunk();
    var hs_a73925uXnX = new $hs.Thunk();
    var hs_zdcisDenormalizzed25uXnY = new $hs.Thunk();
    var hs_a74025uXnZ = new $hs.Thunk();
    var hs_zdcisNegativeZZero25uXo0 = new $hs.Thunk();
    var hs_a74125uXo1 = new $hs.Thunk();
    var hs_zdcisIEEE25uXo2 = new $hs.Thunk();
    var hs_a74225uXo3 = new $hs.Thunk();
    var hs_zdcatan225uXo4 = new $hs.Thunk();
    var hs_a74325uXo5 = new $hs.Thunk();
    var hs_zdcproperFraction25uXo6 = new $hs.Thunk();
    var hs_a74425uXo7 = new $hs.Thunk();
    var hs_zdctruncate25uXo8 = new $hs.Thunk();
    var hs_a74525uXo9 = new $hs.Thunk();
    var hs_zdcround25uXoa = new $hs.Thunk();
    var hs_a74625uXob = new $hs.Thunk();
    var hs_zdcceiling25uXoc = new $hs.Thunk();
    var hs_a74725uXod = new $hs.Thunk();
    var hs_zdcfloor25uXoe = new $hs.Thunk();
    var hs_a74825uXof = new $hs.Thunk();
    var hs_zdcpi25uXog = new $hs.Thunk();
    var hs_a74925uXoh = new $hs.Thunk();
    var hs_zdcexp25uXoi = new $hs.Thunk();
    var hs_a75025uXoj = new $hs.Thunk();
    var hs_zdcsqrt25uXok = new $hs.Thunk();
    var hs_a75125uXol = new $hs.Thunk();
    var hs_zdclog25uXom = new $hs.Thunk();
    var hs_a75225uXon = new $hs.Thunk();
    var hs_zdcztzt25uXoo = new $hs.Thunk();
    var hs_a75325uXop = new $hs.Thunk();
    var hs_zdclogBase25uXoq = new $hs.Thunk();
    var hs_a75425uXor = new $hs.Thunk();
    var hs_zdcsin25uXos = new $hs.Thunk();
    var hs_a75525uXot = new $hs.Thunk();
    var hs_zdctan25uXou = new $hs.Thunk();
    var hs_a75625uXov = new $hs.Thunk();
    var hs_zdccos25uXow = new $hs.Thunk();
    var hs_a75725uXox = new $hs.Thunk();
    var hs_zdcasin25uXoy = new $hs.Thunk();
    var hs_a75825uXoz = new $hs.Thunk();
    var hs_zdcatan25uXoA = new $hs.Thunk();
    var hs_a75925uXoB = new $hs.Thunk();
    var hs_zdcacos25uXoC = new $hs.Thunk();
    var hs_a76025uXoD = new $hs.Thunk();
    var hs_zdcsinh25uXoE = new $hs.Thunk();
    var hs_a76125uXoF = new $hs.Thunk();
    var hs_zdctanh25uXoG = new $hs.Thunk();
    var hs_a76225uXoH = new $hs.Thunk();
    var hs_zdccosh25uXoI = new $hs.Thunk();
    var hs_a76325uXoJ = new $hs.Thunk();
    var hs_zdcasinh25uXoK = new $hs.Thunk();
    var hs_a76425uXoL = new $hs.Thunk();
    var hs_zdcatanh25uXoM = new $hs.Thunk();
    var hs_a76525uXoN = new $hs.Thunk();
    var hs_zdcacosh25uXoO = new $hs.Thunk();
    var hs_a76625uXoP = new $hs.Thunk();
    var hs_zdczs25uXoQ = new $hs.Thunk();
    var hs_a76725uXoR = new $hs.Thunk();
    var hs_zdcrecip25uXoS = new $hs.Thunk();
    var hs_a76825uXoT = new $hs.Thunk();
    var hs_zdcfromRational25uXoU = new $hs.Thunk();
    var hs_a76925uXoV = new $hs.Thunk();
    var hs_zdctoRational1225uXoW = new $hs.Thunk();
    var hs_a77025uXoX = new $hs.Thunk();
    var hs_zdcsizzeOf1225uXoY = new $hs.Thunk();
    var hs_a77125uXoZ = new $hs.Thunk();
    var hs_zdcalignment1225uXp0 = new $hs.Thunk();
    var hs_a77225uXp1 = new $hs.Thunk();
    var hs_zdcpeekElemOff1225uXp2 = new $hs.Thunk();
    var hs_a77325uXp3 = new $hs.Thunk();
    var hs_zdcpokeElemOff1225uXp4 = new $hs.Thunk();
    var hs_a77425uXp5 = new $hs.Thunk();
    var hs_zdcpeekByteOff1225uXp6 = new $hs.Thunk();
    var hs_a77525uXp7 = new $hs.Thunk();
    var hs_zdcpokeByteOff1225uXp8 = new $hs.Thunk();
    var hs_a77625uXp9 = new $hs.Thunk();
    var hs_zdcpeek1225uXpa = new $hs.Thunk();
    var hs_a77725uXpb = new $hs.Thunk();
    var hs_zdcpoke1225uXpc = new $hs.Thunk();
    var hs_a77825uXpd = new $hs.Thunk();
    var hs_zdcsucc1225uXpe = new $hs.Thunk();
    var hs_a77925uXpf = new $hs.Thunk();
    var hs_zdcpred1225uXpg = new $hs.Thunk();
    var hs_a78025uXph = new $hs.Thunk();
    var hs_zdctoEnum1225uXpi = new $hs.Thunk();
    var hs_a78125uXpj = new $hs.Thunk();
    var hs_zdcfromEnum1225uXpk = new $hs.Thunk();
    var hs_a78225uXpl = new $hs.Thunk();
    var hs_zdcenumFrom1225uXpm = new $hs.Thunk();
    var hs_a78325uXpn = new $hs.Thunk();
    var hs_zdcenumFromThen1225uXpo = new $hs.Thunk();
    var hs_a78425uXpp = new $hs.Thunk();
    var hs_zdcenumFromTo1225uXpq = new $hs.Thunk();
    var hs_a78525uXpr = new $hs.Thunk();
    var hs_zdcenumFromThenTo1225uXps = new $hs.Thunk();
    var hs_a78625uXpt = new $hs.Thunk();
    var hs_zdczp1225uXpu = new $hs.Thunk();
    var hs_a78725uXpv = new $hs.Thunk();
    var hs_zdczt1225uXpw = new $hs.Thunk();
    var hs_a78825uXpx = new $hs.Thunk();
    var hs_zdczm1225uXpy = new $hs.Thunk();
    var hs_a78925uXpz = new $hs.Thunk();
    var hs_zdcnegate1225uXpA = new $hs.Thunk();
    var hs_a79025uXpB = new $hs.Thunk();
    var hs_zdcabs1225uXpC = new $hs.Thunk();
    var hs_a79125uXpD = new $hs.Thunk();
    var hs_zdcsignum1225uXpE = new $hs.Thunk();
    var hs_a79225uXpF = new $hs.Thunk();
    var hs_zdcfromInteger1225uXpG = new $hs.Thunk();
    var hs_a79325uXpH = new $hs.Thunk();
    var hs_zdccompare1225uXpI = new $hs.Thunk();
    var hs_a79425uXpJ = new $hs.Thunk();
    var hs_zdczl1225uXpK = new $hs.Thunk();
    var hs_a79525uXpL = new $hs.Thunk();
    var hs_zdczgze1225uXpM = new $hs.Thunk();
    var hs_a79625uXpN = new $hs.Thunk();
    var hs_zdczg1225uXpO = new $hs.Thunk();
    var hs_a79725uXpP = new $hs.Thunk();
    var hs_zdczlze1225uXpQ = new $hs.Thunk();
    var hs_a79825uXpR = new $hs.Thunk();
    var hs_zdcmax1225uXpS = new $hs.Thunk();
    var hs_a79925uXpT = new $hs.Thunk();
    var hs_zdcmin1225uXpU = new $hs.Thunk();
    var hs_a80025uXpV = new $hs.Thunk();
    var hs_zdczeze1225uXpW = new $hs.Thunk();
    var hs_a80125uXpX = new $hs.Thunk();
    var hs_zdczsze1225uXpY = new $hs.Thunk();
    var hs_a80225uXpZ = new $hs.Thunk();
    var hs_zdcfloatRadix125uXq0 = new $hs.Thunk();
    var hs_a80325uXq1 = new $hs.Thunk();
    var hs_zdcfloatDigits125uXq2 = new $hs.Thunk();
    var hs_a80425uXq3 = new $hs.Thunk();
    var hs_zdcfloatRange125uXq4 = new $hs.Thunk();
    var hs_a80525uXq5 = new $hs.Thunk();
    var hs_zdcdecodeFloat125uXq6 = new $hs.Thunk();
    var hs_a80625uXq7 = new $hs.Thunk();
    var hs_zdcencodeFloat125uXq8 = new $hs.Thunk();
    var hs_a80725uXq9 = new $hs.Thunk();
    var hs_zdcexponent125uXqa = new $hs.Thunk();
    var hs_a80825uXqb = new $hs.Thunk();
    var hs_zdcsignificand125uXqc = new $hs.Thunk();
    var hs_a80925uXqd = new $hs.Thunk();
    var hs_zdcscaleFloat125uXqe = new $hs.Thunk();
    var hs_a81025uXqf = new $hs.Thunk();
    var hs_zdcisNaN125uXqg = new $hs.Thunk();
    var hs_a81125uXqh = new $hs.Thunk();
    var hs_zdcisInfinite125uXqi = new $hs.Thunk();
    var hs_a81225uXqj = new $hs.Thunk();
    var hs_zdcisDenormalizzed125uXqk = new $hs.Thunk();
    var hs_a81325uXql = new $hs.Thunk();
    var hs_zdcisNegativeZZero125uXqm = new $hs.Thunk();
    var hs_a81425uXqn = new $hs.Thunk();
    var hs_zdcisIEEE125uXqo = new $hs.Thunk();
    var hs_a81525uXqp = new $hs.Thunk();
    var hs_zdcatan125uXqq = new $hs.Thunk();
    var hs_a81625uXqr = new $hs.Thunk();
    var hs_zdcproperFraction125uXqs = new $hs.Thunk();
    var hs_a81725uXqt = new $hs.Thunk();
    var hs_zdctruncate125uXqu = new $hs.Thunk();
    var hs_a81825uXqv = new $hs.Thunk();
    var hs_zdcround125uXqw = new $hs.Thunk();
    var hs_a81925uXqx = new $hs.Thunk();
    var hs_zdcceiling125uXqy = new $hs.Thunk();
    var hs_a82025uXqz = new $hs.Thunk();
    var hs_zdcfloor125uXqA = new $hs.Thunk();
    var hs_a82125uXqB = new $hs.Thunk();
    var hs_zdcpi125uXqC = new $hs.Thunk();
    var hs_a82225uXqD = new $hs.Thunk();
    var hs_zdcexp125uXqE = new $hs.Thunk();
    var hs_a82325uXqF = new $hs.Thunk();
    var hs_zdcsqrt125uXqG = new $hs.Thunk();
    var hs_a82425uXqH = new $hs.Thunk();
    var hs_zdclog125uXqI = new $hs.Thunk();
    var hs_a82525uXqJ = new $hs.Thunk();
    var hs_zdcztzt125uXqK = new $hs.Thunk();
    var hs_a82625uXqL = new $hs.Thunk();
    var hs_zdclogBase125uXqM = new $hs.Thunk();
    var hs_a82725uXqN = new $hs.Thunk();
    var hs_zdcsin125uXqO = new $hs.Thunk();
    var hs_a82825uXqP = new $hs.Thunk();
    var hs_zdctan125uXqQ = new $hs.Thunk();
    var hs_a82925uXqR = new $hs.Thunk();
    var hs_zdccos125uXqS = new $hs.Thunk();
    var hs_a83025uXqT = new $hs.Thunk();
    var hs_zdcasin125uXqU = new $hs.Thunk();
    var hs_a83125uXqV = new $hs.Thunk();
    var hs_zdcatan325uXqW = new $hs.Thunk();
    var hs_a83225uXqX = new $hs.Thunk();
    var hs_zdcacos125uXqY = new $hs.Thunk();
    var hs_a83325uXqZ = new $hs.Thunk();
    var hs_zdcsinh125uXr0 = new $hs.Thunk();
    var hs_a83425uXr1 = new $hs.Thunk();
    var hs_zdctanh125uXr2 = new $hs.Thunk();
    var hs_a83525uXr3 = new $hs.Thunk();
    var hs_zdccosh125uXr4 = new $hs.Thunk();
    var hs_a83625uXr5 = new $hs.Thunk();
    var hs_zdcasinh125uXr6 = new $hs.Thunk();
    var hs_a83725uXr7 = new $hs.Thunk();
    var hs_zdcatanh125uXr8 = new $hs.Thunk();
    var hs_a83825uXr9 = new $hs.Thunk();
    var hs_zdcacosh125uXra = new $hs.Thunk();
    var hs_a83925uXrb = new $hs.Thunk();
    var hs_zdczs125uXrc = new $hs.Thunk();
    var hs_a84025uXrd = new $hs.Thunk();
    var hs_zdcrecip125uXre = new $hs.Thunk();
    var hs_a84125uXrf = new $hs.Thunk();
    var hs_zdcfromRational125uXrg = new $hs.Thunk();
    var hs_a84225uXrh = new $hs.Thunk();
    var hs_zdctoRational1325uXri = new $hs.Thunk();
    var hs_a84325uXrj = new $hs.Thunk();
    var hs_zdcsizzeOf1325uXrk = new $hs.Thunk();
    var hs_a84425uXrl = new $hs.Thunk();
    var hs_zdcalignment1325uXrm = new $hs.Thunk();
    var hs_a84525uXrn = new $hs.Thunk();
    var hs_zdcpeekElemOff1325uXro = new $hs.Thunk();
    var hs_a84625uXrp = new $hs.Thunk();
    var hs_zdcpokeElemOff1325uXrq = new $hs.Thunk();
    var hs_a84725uXrr = new $hs.Thunk();
    var hs_zdcpeekByteOff1325uXrs = new $hs.Thunk();
    var hs_a84825uXrt = new $hs.Thunk();
    var hs_zdcpokeByteOff1325uXru = new $hs.Thunk();
    var hs_a84925uXrv = new $hs.Thunk();
    var hs_zdcpeek1325uXrw = new $hs.Thunk();
    var hs_a85025uXrx = new $hs.Thunk();
    var hs_zdcpoke1325uXry = new $hs.Thunk();
    var hs_a85125uXrz = new $hs.Thunk();
    var hs_zdcsucc1325uXrA = new $hs.Thunk();
    var hs_a85225uXrB = new $hs.Thunk();
    var hs_zdcpred1325uXrC = new $hs.Thunk();
    var hs_a85325uXrD = new $hs.Thunk();
    var hs_zdctoEnum1325uXrE = new $hs.Thunk();
    var hs_a85425uXrF = new $hs.Thunk();
    var hs_zdcfromEnum1325uXrG = new $hs.Thunk();
    var hs_a85525uXrH = new $hs.Thunk();
    var hs_zdcenumFrom1325uXrI = new $hs.Thunk();
    var hs_a85625uXrJ = new $hs.Thunk();
    var hs_zdcenumFromThen1325uXrK = new $hs.Thunk();
    var hs_a85725uXrL = new $hs.Thunk();
    var hs_zdcenumFromTo1325uXrM = new $hs.Thunk();
    var hs_a85825uXrN = new $hs.Thunk();
    var hs_zdcenumFromThenTo1325uXrO = new $hs.Thunk();
    var hs_a85925uXrP = new $hs.Thunk();
    var hs_zdczp1325uXrQ = new $hs.Thunk();
    var hs_a86025uXrR = new $hs.Thunk();
    var hs_zdczt1325uXrS = new $hs.Thunk();
    var hs_a86125uXrT = new $hs.Thunk();
    var hs_zdczm1325uXrU = new $hs.Thunk();
    var hs_a86225uXrV = new $hs.Thunk();
    var hs_zdcnegate1325uXrW = new $hs.Thunk();
    var hs_a86325uXrX = new $hs.Thunk();
    var hs_zdcabs1325uXrY = new $hs.Thunk();
    var hs_a86425uXrZ = new $hs.Thunk();
    var hs_zdcsignum1325uXs0 = new $hs.Thunk();
    var hs_a86525uXs1 = new $hs.Thunk();
    var hs_zdcfromInteger1325uXs2 = new $hs.Thunk();
    var hs_a86625uXs3 = new $hs.Thunk();
    var hs_zdccompare1325uXs4 = new $hs.Thunk();
    var hs_a86725uXs5 = new $hs.Thunk();
    var hs_zdczl1325uXs6 = new $hs.Thunk();
    var hs_a86825uXs7 = new $hs.Thunk();
    var hs_zdczgze1325uXs8 = new $hs.Thunk();
    var hs_a86925uXs9 = new $hs.Thunk();
    var hs_zdczg1325uXsa = new $hs.Thunk();
    var hs_a87025uXsb = new $hs.Thunk();
    var hs_zdczlze1325uXsc = new $hs.Thunk();
    var hs_a87125uXsd = new $hs.Thunk();
    var hs_zdcmax1325uXse = new $hs.Thunk();
    var hs_a87225uXsf = new $hs.Thunk();
    var hs_zdcmin1325uXsg = new $hs.Thunk();
    var hs_a87325uXsh = new $hs.Thunk();
    var hs_zdczeze1325uXsi = new $hs.Thunk();
    var hs_a87425uXsj = new $hs.Thunk();
    var hs_zdczsze1325uXsk = new $hs.Thunk();
    var hs_a87525uXsl = new $hs.Thunk();
    var hs_zdczizazi825uXsm = new $hs.Thunk();
    var hs_a87625uXsn = new $hs.Thunk();
    var hs_zdczizbzi825uXso = new $hs.Thunk();
    var hs_a87725uXsp = new $hs.Thunk();
    var hs_zdcxor825uXsq = new $hs.Thunk();
    var hs_a87825uXsr = new $hs.Thunk();
    var hs_zdccomplement825uXss = new $hs.Thunk();
    var hs_a87925uXst = new $hs.Thunk();
    var hs_zdcshift825uXsu = new $hs.Thunk();
    var hs_a88025uXsv = new $hs.Thunk();
    var hs_zdcrotate825uXsw = new $hs.Thunk();
    var hs_a88125uXsx = new $hs.Thunk();
    var hs_zdcbit825uXsy = new $hs.Thunk();
    var hs_a88225uXsz = new $hs.Thunk();
    var hs_zdcsetBit825uXsA = new $hs.Thunk();
    var hs_a88325uXsB = new $hs.Thunk();
    var hs_zdcclearBit825uXsC = new $hs.Thunk();
    var hs_a88425uXsD = new $hs.Thunk();
    var hs_zdccomplementBit825uXsE = new $hs.Thunk();
    var hs_a88525uXsF = new $hs.Thunk();
    var hs_zdctestBit825uXsG = new $hs.Thunk();
    var hs_a88625uXsH = new $hs.Thunk();
    var hs_zdcbitSizze825uXsI = new $hs.Thunk();
    var hs_a88725uXsJ = new $hs.Thunk();
    var hs_zdcisSigned825uXsK = new $hs.Thunk();
    var hs_a88825uXsL = new $hs.Thunk();
    var hs_zdcshiftL825uXsM = new $hs.Thunk();
    var hs_a88925uXsN = new $hs.Thunk();
    var hs_zdcshiftR825uXsO = new $hs.Thunk();
    var hs_a89025uXsP = new $hs.Thunk();
    var hs_zdcrotateL825uXsQ = new $hs.Thunk();
    var hs_a89125uXsR = new $hs.Thunk();
    var hs_zdcrotateR825uXsS = new $hs.Thunk();
    var hs_a89225uXsT = new $hs.Thunk();
    var hs_zdcquot825uXsU = new $hs.Thunk();
    var hs_a89325uXsV = new $hs.Thunk();
    var hs_zdcrem825uXsW = new $hs.Thunk();
    var hs_a89425uXsX = new $hs.Thunk();
    var hs_zdcdiv825uXsY = new $hs.Thunk();
    var hs_a89525uXsZ = new $hs.Thunk();
    var hs_zdcmod825uXt0 = new $hs.Thunk();
    var hs_a89625uXt1 = new $hs.Thunk();
    var hs_zdcquotRem825uXt2 = new $hs.Thunk();
    var hs_a89725uXt3 = new $hs.Thunk();
    var hs_zdcdivMod825uXt4 = new $hs.Thunk();
    var hs_a89825uXt5 = new $hs.Thunk();
    var hs_zdctoInteger825uXt6 = new $hs.Thunk();
    var hs_a89925uXt7 = new $hs.Thunk();
    var hs_zdcminBound825uXt8 = new $hs.Thunk();
    var hs_a90025uXt9 = new $hs.Thunk();
    var hs_zdcmaxBound825uXta = new $hs.Thunk();
    var hs_a90125uXtb = new $hs.Thunk();
    var hs_zdctoRational1425uXtc = new $hs.Thunk();
    var hs_a90225uXtd = new $hs.Thunk();
    var hs_zdcsizzeOf1425uXte = new $hs.Thunk();
    var hs_a90325uXtf = new $hs.Thunk();
    var hs_zdcalignment1425uXtg = new $hs.Thunk();
    var hs_a90425uXth = new $hs.Thunk();
    var hs_zdcpeekElemOff1425uXti = new $hs.Thunk();
    var hs_a90525uXtj = new $hs.Thunk();
    var hs_zdcpokeElemOff1425uXtk = new $hs.Thunk();
    var hs_a90625uXtl = new $hs.Thunk();
    var hs_zdcpeekByteOff1425uXtm = new $hs.Thunk();
    var hs_a90725uXtn = new $hs.Thunk();
    var hs_zdcpokeByteOff1425uXto = new $hs.Thunk();
    var hs_a90825uXtp = new $hs.Thunk();
    var hs_zdcpeek1425uXtq = new $hs.Thunk();
    var hs_a90925uXtr = new $hs.Thunk();
    var hs_zdcpoke1425uXts = new $hs.Thunk();
    var hs_a91025uXtt = new $hs.Thunk();
    var hs_zdcsucc1425uXtu = new $hs.Thunk();
    var hs_a91125uXtv = new $hs.Thunk();
    var hs_zdcpred1425uXtw = new $hs.Thunk();
    var hs_a91225uXtx = new $hs.Thunk();
    var hs_zdctoEnum1425uXty = new $hs.Thunk();
    var hs_a91325uXtz = new $hs.Thunk();
    var hs_zdcfromEnum1425uXtA = new $hs.Thunk();
    var hs_a91425uXtB = new $hs.Thunk();
    var hs_zdcenumFrom1425uXtC = new $hs.Thunk();
    var hs_a91525uXtD = new $hs.Thunk();
    var hs_zdcenumFromThen1425uXtE = new $hs.Thunk();
    var hs_a91625uXtF = new $hs.Thunk();
    var hs_zdcenumFromTo1425uXtG = new $hs.Thunk();
    var hs_a91725uXtH = new $hs.Thunk();
    var hs_zdcenumFromThenTo1425uXtI = new $hs.Thunk();
    var hs_a91825uXtJ = new $hs.Thunk();
    var hs_zdczp1425uXtK = new $hs.Thunk();
    var hs_a91925uXtL = new $hs.Thunk();
    var hs_zdczt1425uXtM = new $hs.Thunk();
    var hs_a92025uXtN = new $hs.Thunk();
    var hs_zdczm1425uXtO = new $hs.Thunk();
    var hs_a92125uXtP = new $hs.Thunk();
    var hs_zdcnegate1425uXtQ = new $hs.Thunk();
    var hs_a92225uXtR = new $hs.Thunk();
    var hs_zdcabs1425uXtS = new $hs.Thunk();
    var hs_a92325uXtT = new $hs.Thunk();
    var hs_zdcsignum1425uXtU = new $hs.Thunk();
    var hs_a92425uXtV = new $hs.Thunk();
    var hs_zdcfromInteger1425uXtW = new $hs.Thunk();
    var hs_a92525uXtX = new $hs.Thunk();
    var hs_zdccompare1425uXtY = new $hs.Thunk();
    var hs_a92625uXtZ = new $hs.Thunk();
    var hs_zdczl1425uXu0 = new $hs.Thunk();
    var hs_a92725uXu1 = new $hs.Thunk();
    var hs_zdczgze1425uXu2 = new $hs.Thunk();
    var hs_a92825uXu3 = new $hs.Thunk();
    var hs_zdczg1425uXu4 = new $hs.Thunk();
    var hs_a92925uXu5 = new $hs.Thunk();
    var hs_zdczlze1425uXu6 = new $hs.Thunk();
    var hs_a93025uXu7 = new $hs.Thunk();
    var hs_zdcmax1425uXu8 = new $hs.Thunk();
    var hs_a93125uXu9 = new $hs.Thunk();
    var hs_zdcmin1425uXua = new $hs.Thunk();
    var hs_a93225uXub = new $hs.Thunk();
    var hs_zdczeze1425uXuc = new $hs.Thunk();
    var hs_a93325uXud = new $hs.Thunk();
    var hs_zdczsze1425uXue = new $hs.Thunk();
    var hs_a93425uXuf = new $hs.Thunk();
    var hs_zdczizazi925uXug = new $hs.Thunk();
    var hs_a93525uXuh = new $hs.Thunk();
    var hs_zdczizbzi925uXui = new $hs.Thunk();
    var hs_a93625uXuj = new $hs.Thunk();
    var hs_zdcxor925uXuk = new $hs.Thunk();
    var hs_a93725uXul = new $hs.Thunk();
    var hs_zdccomplement925uXum = new $hs.Thunk();
    var hs_a93825uXun = new $hs.Thunk();
    var hs_zdcshift925uXuo = new $hs.Thunk();
    var hs_a93925uXup = new $hs.Thunk();
    var hs_zdcrotate925uXuq = new $hs.Thunk();
    var hs_a94025uXur = new $hs.Thunk();
    var hs_zdcbit925uXus = new $hs.Thunk();
    var hs_a94125uXut = new $hs.Thunk();
    var hs_zdcsetBit925uXuu = new $hs.Thunk();
    var hs_a94225uXuv = new $hs.Thunk();
    var hs_zdcclearBit925uXuw = new $hs.Thunk();
    var hs_a94325uXux = new $hs.Thunk();
    var hs_zdccomplementBit925uXuy = new $hs.Thunk();
    var hs_a94425uXuz = new $hs.Thunk();
    var hs_zdctestBit925uXuA = new $hs.Thunk();
    var hs_a94525uXuB = new $hs.Thunk();
    var hs_zdcbitSizze925uXuC = new $hs.Thunk();
    var hs_a94625uXuD = new $hs.Thunk();
    var hs_zdcisSigned925uXuE = new $hs.Thunk();
    var hs_a94725uXuF = new $hs.Thunk();
    var hs_zdcshiftL925uXuG = new $hs.Thunk();
    var hs_a94825uXuH = new $hs.Thunk();
    var hs_zdcshiftR925uXuI = new $hs.Thunk();
    var hs_a94925uXuJ = new $hs.Thunk();
    var hs_zdcrotateL925uXuK = new $hs.Thunk();
    var hs_a95025uXuL = new $hs.Thunk();
    var hs_zdcrotateR925uXuM = new $hs.Thunk();
    var hs_a95125uXuN = new $hs.Thunk();
    var hs_zdcquot925uXuO = new $hs.Thunk();
    var hs_a95225uXuP = new $hs.Thunk();
    var hs_zdcrem925uXuQ = new $hs.Thunk();
    var hs_a95325uXuR = new $hs.Thunk();
    var hs_zdcdiv925uXuS = new $hs.Thunk();
    var hs_a95425uXuT = new $hs.Thunk();
    var hs_zdcmod925uXuU = new $hs.Thunk();
    var hs_a95525uXuV = new $hs.Thunk();
    var hs_zdcquotRem925uXuW = new $hs.Thunk();
    var hs_a95625uXuX = new $hs.Thunk();
    var hs_zdcdivMod925uXuY = new $hs.Thunk();
    var hs_a95725uXuZ = new $hs.Thunk();
    var hs_zdctoInteger925uXv0 = new $hs.Thunk();
    var hs_a95825uXv1 = new $hs.Thunk();
    var hs_zdcminBound925uXv2 = new $hs.Thunk();
    var hs_a95925uXv3 = new $hs.Thunk();
    var hs_zdcmaxBound925uXv4 = new $hs.Thunk();
    var hs_a96025uXv5 = new $hs.Thunk();
    var hs_zdctoRational1525uXv6 = new $hs.Thunk();
    var hs_a96125uXv7 = new $hs.Thunk();
    var hs_zdcsizzeOf1525uXv8 = new $hs.Thunk();
    var hs_a96225uXv9 = new $hs.Thunk();
    var hs_zdcalignment1525uXva = new $hs.Thunk();
    var hs_a96325uXvb = new $hs.Thunk();
    var hs_zdcpeekElemOff1525uXvc = new $hs.Thunk();
    var hs_a96425uXvd = new $hs.Thunk();
    var hs_zdcpokeElemOff1525uXve = new $hs.Thunk();
    var hs_a96525uXvf = new $hs.Thunk();
    var hs_zdcpeekByteOff1525uXvg = new $hs.Thunk();
    var hs_a96625uXvh = new $hs.Thunk();
    var hs_zdcpokeByteOff1525uXvi = new $hs.Thunk();
    var hs_a96725uXvj = new $hs.Thunk();
    var hs_zdcpeek1525uXvk = new $hs.Thunk();
    var hs_a96825uXvl = new $hs.Thunk();
    var hs_zdcpoke1525uXvm = new $hs.Thunk();
    var hs_a96925uXvn = new $hs.Thunk();
    var hs_zdcsucc1525uXvo = new $hs.Thunk();
    var hs_a97025uXvp = new $hs.Thunk();
    var hs_zdcpred1525uXvq = new $hs.Thunk();
    var hs_a97125uXvr = new $hs.Thunk();
    var hs_zdctoEnum1525uXvs = new $hs.Thunk();
    var hs_a97225uXvt = new $hs.Thunk();
    var hs_zdcfromEnum1525uXvu = new $hs.Thunk();
    var hs_a97325uXvv = new $hs.Thunk();
    var hs_zdcenumFrom1525uXvw = new $hs.Thunk();
    var hs_a97425uXvx = new $hs.Thunk();
    var hs_zdcenumFromThen1525uXvy = new $hs.Thunk();
    var hs_a97525uXvz = new $hs.Thunk();
    var hs_zdcenumFromTo1525uXvA = new $hs.Thunk();
    var hs_a97625uXvB = new $hs.Thunk();
    var hs_zdcenumFromThenTo1525uXvC = new $hs.Thunk();
    var hs_a97725uXvD = new $hs.Thunk();
    var hs_zdczp1525uXvE = new $hs.Thunk();
    var hs_a97825uXvF = new $hs.Thunk();
    var hs_zdczt1525uXvG = new $hs.Thunk();
    var hs_a97925uXvH = new $hs.Thunk();
    var hs_zdczm1525uXvI = new $hs.Thunk();
    var hs_a98025uXvJ = new $hs.Thunk();
    var hs_zdcnegate1525uXvK = new $hs.Thunk();
    var hs_a98125uXvL = new $hs.Thunk();
    var hs_zdcabs1525uXvM = new $hs.Thunk();
    var hs_a98225uXvN = new $hs.Thunk();
    var hs_zdcsignum1525uXvO = new $hs.Thunk();
    var hs_a98325uXvP = new $hs.Thunk();
    var hs_zdcfromInteger1525uXvQ = new $hs.Thunk();
    var hs_a98425uXvR = new $hs.Thunk();
    var hs_zdccompare1525uXvS = new $hs.Thunk();
    var hs_a98525uXvT = new $hs.Thunk();
    var hs_zdczl1525uXvU = new $hs.Thunk();
    var hs_a98625uXvV = new $hs.Thunk();
    var hs_zdczgze1525uXvW = new $hs.Thunk();
    var hs_a98725uXvX = new $hs.Thunk();
    var hs_zdczg1525uXvY = new $hs.Thunk();
    var hs_a98825uXvZ = new $hs.Thunk();
    var hs_zdczlze1525uXw0 = new $hs.Thunk();
    var hs_a98925uXw1 = new $hs.Thunk();
    var hs_zdcmax1525uXw2 = new $hs.Thunk();
    var hs_a99025uXw3 = new $hs.Thunk();
    var hs_zdcmin1525uXw4 = new $hs.Thunk();
    var hs_a99125uXw5 = new $hs.Thunk();
    var hs_zdczeze1525uXw6 = new $hs.Thunk();
    var hs_a99225uXw7 = new $hs.Thunk();
    var hs_zdczsze1525uXw8 = new $hs.Thunk();
    var hs_a99325uXw9 = new $hs.Thunk();
    var hs_zdczizazi1025uXwa = new $hs.Thunk();
    var hs_a99425uXwb = new $hs.Thunk();
    var hs_zdczizbzi1025uXwc = new $hs.Thunk();
    var hs_a99525uXwd = new $hs.Thunk();
    var hs_zdcxor1025uXwe = new $hs.Thunk();
    var hs_a99625uXwf = new $hs.Thunk();
    var hs_zdccomplement1025uXwg = new $hs.Thunk();
    var hs_a99725uXwh = new $hs.Thunk();
    var hs_zdcshift1025uXwi = new $hs.Thunk();
    var hs_a99825uXwj = new $hs.Thunk();
    var hs_zdcrotate1025uXwk = new $hs.Thunk();
    var hs_a99925uXwl = new $hs.Thunk();
    var hs_zdcbit1025uXwm = new $hs.Thunk();
    var hs_a100025uXwn = new $hs.Thunk();
    var hs_zdcsetBit1025uXwo = new $hs.Thunk();
    var hs_a100125uXwp = new $hs.Thunk();
    var hs_zdcclearBit1025uXwq = new $hs.Thunk();
    var hs_a100225uXwr = new $hs.Thunk();
    var hs_zdccomplementBit1025uXws = new $hs.Thunk();
    var hs_a100325uXwt = new $hs.Thunk();
    var hs_zdctestBit1025uXwu = new $hs.Thunk();
    var hs_a100425uXwv = new $hs.Thunk();
    var hs_zdcbitSizze1025uXww = new $hs.Thunk();
    var hs_a100525uXwx = new $hs.Thunk();
    var hs_zdcisSigned1025uXwy = new $hs.Thunk();
    var hs_a100625uXwz = new $hs.Thunk();
    var hs_zdcshiftL1025uXwA = new $hs.Thunk();
    var hs_a100725uXwB = new $hs.Thunk();
    var hs_zdcshiftR1025uXwC = new $hs.Thunk();
    var hs_a100825uXwD = new $hs.Thunk();
    var hs_zdcrotateL1025uXwE = new $hs.Thunk();
    var hs_a100925uXwF = new $hs.Thunk();
    var hs_zdcrotateR1025uXwG = new $hs.Thunk();
    var hs_a101025uXwH = new $hs.Thunk();
    var hs_zdcquot1025uXwI = new $hs.Thunk();
    var hs_a101125uXwJ = new $hs.Thunk();
    var hs_zdcrem1025uXwK = new $hs.Thunk();
    var hs_a101225uXwL = new $hs.Thunk();
    var hs_zdcdiv1025uXwM = new $hs.Thunk();
    var hs_a101325uXwN = new $hs.Thunk();
    var hs_zdcmod1025uXwO = new $hs.Thunk();
    var hs_a101425uXwP = new $hs.Thunk();
    var hs_zdcquotRem1025uXwQ = new $hs.Thunk();
    var hs_a101525uXwR = new $hs.Thunk();
    var hs_zdcdivMod1025uXwS = new $hs.Thunk();
    var hs_a101625uXwT = new $hs.Thunk();
    var hs_zdctoInteger1025uXwU = new $hs.Thunk();
    var hs_a101725uXwV = new $hs.Thunk();
    var hs_zdcminBound1025uXwW = new $hs.Thunk();
    var hs_a101825uXwX = new $hs.Thunk();
    var hs_zdcmaxBound1025uXwY = new $hs.Thunk();
    var hs_a101925uXwZ = new $hs.Thunk();
    var hs_zdctoRational1625uXx0 = new $hs.Thunk();
    var hs_a102025uXx1 = new $hs.Thunk();
    var hs_zdcsizzeOf1625uXx2 = new $hs.Thunk();
    var hs_a102125uXx3 = new $hs.Thunk();
    var hs_zdcalignment1625uXx4 = new $hs.Thunk();
    var hs_a102225uXx5 = new $hs.Thunk();
    var hs_zdcpeekElemOff1625uXx6 = new $hs.Thunk();
    var hs_a102325uXx7 = new $hs.Thunk();
    var hs_zdcpokeElemOff1625uXx8 = new $hs.Thunk();
    var hs_a102425uXx9 = new $hs.Thunk();
    var hs_zdcpeekByteOff1625uXxa = new $hs.Thunk();
    var hs_a102525uXxb = new $hs.Thunk();
    var hs_zdcpokeByteOff1625uXxc = new $hs.Thunk();
    var hs_a102625uXxd = new $hs.Thunk();
    var hs_zdcpeek1625uXxe = new $hs.Thunk();
    var hs_a102725uXxf = new $hs.Thunk();
    var hs_zdcpoke1625uXxg = new $hs.Thunk();
    var hs_a102825uXxh = new $hs.Thunk();
    var hs_zdcsucc1625uXxi = new $hs.Thunk();
    var hs_a102925uXxj = new $hs.Thunk();
    var hs_zdcpred1625uXxk = new $hs.Thunk();
    var hs_a103025uXxl = new $hs.Thunk();
    var hs_zdctoEnum1625uXxm = new $hs.Thunk();
    var hs_a103125uXxn = new $hs.Thunk();
    var hs_zdcfromEnum1625uXxo = new $hs.Thunk();
    var hs_a103225uXxp = new $hs.Thunk();
    var hs_zdcenumFrom1625uXxq = new $hs.Thunk();
    var hs_a103325uXxr = new $hs.Thunk();
    var hs_zdcenumFromThen1625uXxs = new $hs.Thunk();
    var hs_a103425uXxt = new $hs.Thunk();
    var hs_zdcenumFromTo1625uXxu = new $hs.Thunk();
    var hs_a103525uXxv = new $hs.Thunk();
    var hs_zdcenumFromThenTo1625uXxw = new $hs.Thunk();
    var hs_a103625uXxx = new $hs.Thunk();
    var hs_zdczp1625uXxy = new $hs.Thunk();
    var hs_a103725uXxz = new $hs.Thunk();
    var hs_zdczt1625uXxA = new $hs.Thunk();
    var hs_a103825uXxB = new $hs.Thunk();
    var hs_zdczm1625uXxC = new $hs.Thunk();
    var hs_a103925uXxD = new $hs.Thunk();
    var hs_zdcnegate1625uXxE = new $hs.Thunk();
    var hs_a104025uXxF = new $hs.Thunk();
    var hs_zdcabs1625uXxG = new $hs.Thunk();
    var hs_a104125uXxH = new $hs.Thunk();
    var hs_zdcsignum1625uXxI = new $hs.Thunk();
    var hs_a104225uXxJ = new $hs.Thunk();
    var hs_zdcfromInteger1625uXxK = new $hs.Thunk();
    var hs_a104325uXxL = new $hs.Thunk();
    var hs_zdccompare1625uXxM = new $hs.Thunk();
    var hs_a104425uXxN = new $hs.Thunk();
    var hs_zdczl1625uXxO = new $hs.Thunk();
    var hs_a104525uXxP = new $hs.Thunk();
    var hs_zdczgze1625uXxQ = new $hs.Thunk();
    var hs_a104625uXxR = new $hs.Thunk();
    var hs_zdczg1625uXxS = new $hs.Thunk();
    var hs_a104725uXxT = new $hs.Thunk();
    var hs_zdczlze1625uXxU = new $hs.Thunk();
    var hs_a104825uXxV = new $hs.Thunk();
    var hs_zdcmax1625uXxW = new $hs.Thunk();
    var hs_a104925uXxX = new $hs.Thunk();
    var hs_zdcmin1625uXxY = new $hs.Thunk();
    var hs_a105025uXxZ = new $hs.Thunk();
    var hs_zdczeze1625uXy0 = new $hs.Thunk();
    var hs_a105125uXy1 = new $hs.Thunk();
    var hs_zdczsze1625uXy2 = new $hs.Thunk();
    var hs_a105225uXy3 = new $hs.Thunk();
    var hs_zdczizazi1125uXy4 = new $hs.Thunk();
    var hs_a105325uXy5 = new $hs.Thunk();
    var hs_zdczizbzi1125uXy6 = new $hs.Thunk();
    var hs_a105425uXy7 = new $hs.Thunk();
    var hs_zdcxor1125uXy8 = new $hs.Thunk();
    var hs_a105525uXy9 = new $hs.Thunk();
    var hs_zdccomplement1125uXya = new $hs.Thunk();
    var hs_a105625uXyb = new $hs.Thunk();
    var hs_zdcshift1125uXyc = new $hs.Thunk();
    var hs_a105725uXyd = new $hs.Thunk();
    var hs_zdcrotate1125uXye = new $hs.Thunk();
    var hs_a105825uXyf = new $hs.Thunk();
    var hs_zdcbit1125uXyg = new $hs.Thunk();
    var hs_a105925uXyh = new $hs.Thunk();
    var hs_zdcsetBit1125uXyi = new $hs.Thunk();
    var hs_a106025uXyj = new $hs.Thunk();
    var hs_zdcclearBit1125uXyk = new $hs.Thunk();
    var hs_a106125uXyl = new $hs.Thunk();
    var hs_zdccomplementBit1125uXym = new $hs.Thunk();
    var hs_a106225uXyn = new $hs.Thunk();
    var hs_zdctestBit1125uXyo = new $hs.Thunk();
    var hs_a106325uXyp = new $hs.Thunk();
    var hs_zdcbitSizze1125uXyq = new $hs.Thunk();
    var hs_a106425uXyr = new $hs.Thunk();
    var hs_zdcisSigned1125uXys = new $hs.Thunk();
    var hs_a106525uXyt = new $hs.Thunk();
    var hs_zdcshiftL1125uXyu = new $hs.Thunk();
    var hs_a106625uXyv = new $hs.Thunk();
    var hs_zdcshiftR1125uXyw = new $hs.Thunk();
    var hs_a106725uXyx = new $hs.Thunk();
    var hs_zdcrotateL1125uXyy = new $hs.Thunk();
    var hs_a106825uXyz = new $hs.Thunk();
    var hs_zdcrotateR1125uXyA = new $hs.Thunk();
    var hs_a106925uXyB = new $hs.Thunk();
    var hs_zdcquot1125uXyC = new $hs.Thunk();
    var hs_a107025uXyD = new $hs.Thunk();
    var hs_zdcrem1125uXyE = new $hs.Thunk();
    var hs_a107125uXyF = new $hs.Thunk();
    var hs_zdcdiv1125uXyG = new $hs.Thunk();
    var hs_a107225uXyH = new $hs.Thunk();
    var hs_zdcmod1125uXyI = new $hs.Thunk();
    var hs_a107325uXyJ = new $hs.Thunk();
    var hs_zdcquotRem1125uXyK = new $hs.Thunk();
    var hs_a107425uXyL = new $hs.Thunk();
    var hs_zdcdivMod1125uXyM = new $hs.Thunk();
    var hs_a107525uXyN = new $hs.Thunk();
    var hs_zdctoInteger1125uXyO = new $hs.Thunk();
    var hs_a107625uXyP = new $hs.Thunk();
    var hs_zdcminBound1125uXyQ = new $hs.Thunk();
    var hs_a107725uXyR = new $hs.Thunk();
    var hs_zdcmaxBound1125uXyS = new $hs.Thunk();
    var hs_a107825uXyT = new $hs.Thunk();
    var hs_zdctoRational1725uXyU = new $hs.Thunk();
    var hs_a107925uXyV = new $hs.Thunk();
    var hs_zdcsizzeOf1725uXyW = new $hs.Thunk();
    var hs_a108025uXyX = new $hs.Thunk();
    var hs_zdcalignment1725uXyY = new $hs.Thunk();
    var hs_a108125uXyZ = new $hs.Thunk();
    var hs_zdcpeekElemOff1725uXz0 = new $hs.Thunk();
    var hs_a108225uXz1 = new $hs.Thunk();
    var hs_zdcpokeElemOff1725uXz2 = new $hs.Thunk();
    var hs_a108325uXz3 = new $hs.Thunk();
    var hs_zdcpeekByteOff1725uXz4 = new $hs.Thunk();
    var hs_a108425uXz5 = new $hs.Thunk();
    var hs_zdcpokeByteOff1725uXz6 = new $hs.Thunk();
    var hs_a108525uXz7 = new $hs.Thunk();
    var hs_zdcpeek1725uXz8 = new $hs.Thunk();
    var hs_a108625uXz9 = new $hs.Thunk();
    var hs_zdcpoke1725uXza = new $hs.Thunk();
    var hs_a108725uXzb = new $hs.Thunk();
    var hs_zdcsucc1725uXzc = new $hs.Thunk();
    var hs_a108825uXzd = new $hs.Thunk();
    var hs_zdcpred1725uXze = new $hs.Thunk();
    var hs_a108925uXzf = new $hs.Thunk();
    var hs_zdctoEnum1725uXzg = new $hs.Thunk();
    var hs_a109025uXzh = new $hs.Thunk();
    var hs_zdcfromEnum1725uXzi = new $hs.Thunk();
    var hs_a109125uXzj = new $hs.Thunk();
    var hs_zdcenumFrom1725uXzk = new $hs.Thunk();
    var hs_a109225uXzl = new $hs.Thunk();
    var hs_zdcenumFromThen1725uXzm = new $hs.Thunk();
    var hs_a109325uXzn = new $hs.Thunk();
    var hs_zdcenumFromTo1725uXzo = new $hs.Thunk();
    var hs_a109425uXzp = new $hs.Thunk();
    var hs_zdcenumFromThenTo1725uXzq = new $hs.Thunk();
    var hs_a109525uXzr = new $hs.Thunk();
    var hs_zdczp1725uXzs = new $hs.Thunk();
    var hs_a109625uXzt = new $hs.Thunk();
    var hs_zdczt1725uXzu = new $hs.Thunk();
    var hs_a109725uXzv = new $hs.Thunk();
    var hs_zdczm1725uXzw = new $hs.Thunk();
    var hs_a109825uXzx = new $hs.Thunk();
    var hs_zdcnegate1725uXzy = new $hs.Thunk();
    var hs_a109925uXzz = new $hs.Thunk();
    var hs_zdcabs1725uXzA = new $hs.Thunk();
    var hs_a110025uXzB = new $hs.Thunk();
    var hs_zdcsignum1725uXzC = new $hs.Thunk();
    var hs_a110125uXzD = new $hs.Thunk();
    var hs_zdcfromInteger1725uXzE = new $hs.Thunk();
    var hs_a110225uXzF = new $hs.Thunk();
    var hs_zdccompare1725uXzG = new $hs.Thunk();
    var hs_a110325uXzH = new $hs.Thunk();
    var hs_zdczl1725uXzI = new $hs.Thunk();
    var hs_a110425uXzJ = new $hs.Thunk();
    var hs_zdczgze1725uXzK = new $hs.Thunk();
    var hs_a110525uXzL = new $hs.Thunk();
    var hs_zdczg1725uXzM = new $hs.Thunk();
    var hs_a110625uXzN = new $hs.Thunk();
    var hs_zdczlze1725uXzO = new $hs.Thunk();
    var hs_a110725uXzP = new $hs.Thunk();
    var hs_zdcmax1725uXzQ = new $hs.Thunk();
    var hs_a110825uXzR = new $hs.Thunk();
    var hs_zdcmin1725uXzS = new $hs.Thunk();
    var hs_a110925uXzT = new $hs.Thunk();
    var hs_zdczeze1725uXzU = new $hs.Thunk();
    var hs_a111025uXzV = new $hs.Thunk();
    var hs_zdczsze1725uXzW = new $hs.Thunk();
    var hs_a111125uXzX = new $hs.Thunk();
    var hs_zdczizazi1225uXzY = new $hs.Thunk();
    var hs_a111225uXzZ = new $hs.Thunk();
    var hs_zdczizbzi1225uXA0 = new $hs.Thunk();
    var hs_a111325uXA1 = new $hs.Thunk();
    var hs_zdcxor1225uXA2 = new $hs.Thunk();
    var hs_a111425uXA3 = new $hs.Thunk();
    var hs_zdccomplement1225uXA4 = new $hs.Thunk();
    var hs_a111525uXA5 = new $hs.Thunk();
    var hs_zdcshift1225uXA6 = new $hs.Thunk();
    var hs_a111625uXA7 = new $hs.Thunk();
    var hs_zdcrotate1225uXA8 = new $hs.Thunk();
    var hs_a111725uXA9 = new $hs.Thunk();
    var hs_zdcbit1225uXAa = new $hs.Thunk();
    var hs_a111825uXAb = new $hs.Thunk();
    var hs_zdcsetBit1225uXAc = new $hs.Thunk();
    var hs_a111925uXAd = new $hs.Thunk();
    var hs_zdcclearBit1225uXAe = new $hs.Thunk();
    var hs_a112025uXAf = new $hs.Thunk();
    var hs_zdccomplementBit1225uXAg = new $hs.Thunk();
    var hs_a112125uXAh = new $hs.Thunk();
    var hs_zdctestBit1225uXAi = new $hs.Thunk();
    var hs_a112225uXAj = new $hs.Thunk();
    var hs_zdcbitSizze1225uXAk = new $hs.Thunk();
    var hs_a112325uXAl = new $hs.Thunk();
    var hs_zdcisSigned1225uXAm = new $hs.Thunk();
    var hs_a112425uXAn = new $hs.Thunk();
    var hs_zdcshiftL1225uXAo = new $hs.Thunk();
    var hs_a112525uXAp = new $hs.Thunk();
    var hs_zdcshiftR1225uXAq = new $hs.Thunk();
    var hs_a112625uXAr = new $hs.Thunk();
    var hs_zdcrotateL1225uXAs = new $hs.Thunk();
    var hs_a112725uXAt = new $hs.Thunk();
    var hs_zdcrotateR1225uXAu = new $hs.Thunk();
    var hs_a112825uXAv = new $hs.Thunk();
    var hs_zdcquot1225uXAw = new $hs.Thunk();
    var hs_a112925uXAx = new $hs.Thunk();
    var hs_zdcrem1225uXAy = new $hs.Thunk();
    var hs_a113025uXAz = new $hs.Thunk();
    var hs_zdcdiv1225uXAA = new $hs.Thunk();
    var hs_a113125uXAB = new $hs.Thunk();
    var hs_zdcmod1225uXAC = new $hs.Thunk();
    var hs_a113225uXAD = new $hs.Thunk();
    var hs_zdcquotRem1225uXAE = new $hs.Thunk();
    var hs_a113325uXAF = new $hs.Thunk();
    var hs_zdcdivMod1225uXAG = new $hs.Thunk();
    var hs_a113425uXAH = new $hs.Thunk();
    var hs_zdctoInteger1225uXAI = new $hs.Thunk();
    var hs_a113525uXAJ = new $hs.Thunk();
    var hs_zdcminBound1225uXAK = new $hs.Thunk();
    var hs_a113625uXAL = new $hs.Thunk();
    var hs_zdcmaxBound1225uXAM = new $hs.Thunk();
    var hs_a113725uXAN = new $hs.Thunk();
    var hs_zdctoRational1825uXAO = new $hs.Thunk();
    var hs_a113825uXAP = new $hs.Thunk();
    var hs_zdcsizzeOf1825uXAQ = new $hs.Thunk();
    var hs_a113925uXAR = new $hs.Thunk();
    var hs_zdcalignment1825uXAS = new $hs.Thunk();
    var hs_a114025uXAT = new $hs.Thunk();
    var hs_zdcpeekElemOff1825uXAU = new $hs.Thunk();
    var hs_a114125uXAV = new $hs.Thunk();
    var hs_zdcpokeElemOff1825uXAW = new $hs.Thunk();
    var hs_a114225uXAX = new $hs.Thunk();
    var hs_zdcpeekByteOff1825uXAY = new $hs.Thunk();
    var hs_a114325uXAZ = new $hs.Thunk();
    var hs_zdcpokeByteOff1825uXB0 = new $hs.Thunk();
    var hs_a114425uXB1 = new $hs.Thunk();
    var hs_zdcpeek1825uXB2 = new $hs.Thunk();
    var hs_a114525uXB3 = new $hs.Thunk();
    var hs_zdcpoke1825uXB4 = new $hs.Thunk();
    var hs_a114625uXB5 = new $hs.Thunk();
    var hs_zdcsucc1825uXB6 = new $hs.Thunk();
    var hs_a114725uXB7 = new $hs.Thunk();
    var hs_zdcpred1825uXB8 = new $hs.Thunk();
    var hs_a114825uXB9 = new $hs.Thunk();
    var hs_zdctoEnum1825uXBa = new $hs.Thunk();
    var hs_a114925uXBb = new $hs.Thunk();
    var hs_zdcfromEnum1825uXBc = new $hs.Thunk();
    var hs_a115025uXBd = new $hs.Thunk();
    var hs_zdcenumFrom1825uXBe = new $hs.Thunk();
    var hs_a115125uXBf = new $hs.Thunk();
    var hs_zdcenumFromThen1825uXBg = new $hs.Thunk();
    var hs_a115225uXBh = new $hs.Thunk();
    var hs_zdcenumFromTo1825uXBi = new $hs.Thunk();
    var hs_a115325uXBj = new $hs.Thunk();
    var hs_zdcenumFromThenTo1825uXBk = new $hs.Thunk();
    var hs_a115425uXBl = new $hs.Thunk();
    var hs_zdczp1825uXBm = new $hs.Thunk();
    var hs_a115525uXBn = new $hs.Thunk();
    var hs_zdczt1825uXBo = new $hs.Thunk();
    var hs_a115625uXBp = new $hs.Thunk();
    var hs_zdczm1825uXBq = new $hs.Thunk();
    var hs_a115725uXBr = new $hs.Thunk();
    var hs_zdcnegate1825uXBs = new $hs.Thunk();
    var hs_a115825uXBt = new $hs.Thunk();
    var hs_zdcabs1825uXBu = new $hs.Thunk();
    var hs_a115925uXBv = new $hs.Thunk();
    var hs_zdcsignum1825uXBw = new $hs.Thunk();
    var hs_a116025uXBx = new $hs.Thunk();
    var hs_zdcfromInteger1825uXBy = new $hs.Thunk();
    var hs_a116125uXBz = new $hs.Thunk();
    var hs_zdccompare1825uXBA = new $hs.Thunk();
    var hs_a116225uXBB = new $hs.Thunk();
    var hs_zdczl1825uXBC = new $hs.Thunk();
    var hs_a116325uXBD = new $hs.Thunk();
    var hs_zdczgze1825uXBE = new $hs.Thunk();
    var hs_a116425uXBF = new $hs.Thunk();
    var hs_zdczg1825uXBG = new $hs.Thunk();
    var hs_a116525uXBH = new $hs.Thunk();
    var hs_zdczlze1825uXBI = new $hs.Thunk();
    var hs_a116625uXBJ = new $hs.Thunk();
    var hs_zdcmax1825uXBK = new $hs.Thunk();
    var hs_a116725uXBL = new $hs.Thunk();
    var hs_zdcmin1825uXBM = new $hs.Thunk();
    var hs_a116825uXBN = new $hs.Thunk();
    var hs_zdczeze1825uXBO = new $hs.Thunk();
    var hs_a116925uXBP = new $hs.Thunk();
    var hs_zdczsze1825uXBQ = new $hs.Thunk();
    var hs_a117025uXBR = new $hs.Thunk();
    var hs_zdczizazi1325uXBS = new $hs.Thunk();
    var hs_a117125uXBT = new $hs.Thunk();
    var hs_zdczizbzi1325uXBU = new $hs.Thunk();
    var hs_a117225uXBV = new $hs.Thunk();
    var hs_zdcxor1325uXBW = new $hs.Thunk();
    var hs_a117325uXBX = new $hs.Thunk();
    var hs_zdccomplement1325uXBY = new $hs.Thunk();
    var hs_a117425uXBZ = new $hs.Thunk();
    var hs_zdcshift1325uXC0 = new $hs.Thunk();
    var hs_a117525uXC1 = new $hs.Thunk();
    var hs_zdcrotate1325uXC2 = new $hs.Thunk();
    var hs_a117625uXC3 = new $hs.Thunk();
    var hs_zdcbit1325uXC4 = new $hs.Thunk();
    var hs_a117725uXC5 = new $hs.Thunk();
    var hs_zdcsetBit1325uXC6 = new $hs.Thunk();
    var hs_a117825uXC7 = new $hs.Thunk();
    var hs_zdcclearBit1325uXC8 = new $hs.Thunk();
    var hs_a117925uXC9 = new $hs.Thunk();
    var hs_zdccomplementBit1325uXCa = new $hs.Thunk();
    var hs_a118025uXCb = new $hs.Thunk();
    var hs_zdctestBit1325uXCc = new $hs.Thunk();
    var hs_a118125uXCd = new $hs.Thunk();
    var hs_zdcbitSizze1325uXCe = new $hs.Thunk();
    var hs_a118225uXCf = new $hs.Thunk();
    var hs_zdcisSigned1325uXCg = new $hs.Thunk();
    var hs_a118325uXCh = new $hs.Thunk();
    var hs_zdcshiftL1325uXCi = new $hs.Thunk();
    var hs_a118425uXCj = new $hs.Thunk();
    var hs_zdcshiftR1325uXCk = new $hs.Thunk();
    var hs_a118525uXCl = new $hs.Thunk();
    var hs_zdcrotateL1325uXCm = new $hs.Thunk();
    var hs_a118625uXCn = new $hs.Thunk();
    var hs_zdcrotateR1325uXCo = new $hs.Thunk();
    var hs_a118725uXCp = new $hs.Thunk();
    var hs_zdcquot1325uXCq = new $hs.Thunk();
    var hs_a118825uXCr = new $hs.Thunk();
    var hs_zdcrem1325uXCs = new $hs.Thunk();
    var hs_a118925uXCt = new $hs.Thunk();
    var hs_zdcdiv1325uXCu = new $hs.Thunk();
    var hs_a119025uXCv = new $hs.Thunk();
    var hs_zdcmod1325uXCw = new $hs.Thunk();
    var hs_a119125uXCx = new $hs.Thunk();
    var hs_zdcquotRem1325uXCy = new $hs.Thunk();
    var hs_a119225uXCz = new $hs.Thunk();
    var hs_zdcdivMod1325uXCA = new $hs.Thunk();
    var hs_a119325uXCB = new $hs.Thunk();
    var hs_zdctoInteger1325uXCC = new $hs.Thunk();
    var hs_a119425uXCD = new $hs.Thunk();
    var hs_zdcminBound1325uXCE = new $hs.Thunk();
    var hs_a119525uXCF = new $hs.Thunk();
    var hs_zdcmaxBound1325uXCG = new $hs.Thunk();
    var hs_a119625uXCH = new $hs.Thunk();
    var hs_zdctoRational1925uXCI = new $hs.Thunk();
    var hs_a119725uXCJ = new $hs.Thunk();
    var hs_zdcsizzeOf1925uXCK = new $hs.Thunk();
    var hs_a119825uXCL = new $hs.Thunk();
    var hs_zdcalignment1925uXCM = new $hs.Thunk();
    var hs_a119925uXCN = new $hs.Thunk();
    var hs_zdcpeekElemOff1925uXCO = new $hs.Thunk();
    var hs_a120025uXCP = new $hs.Thunk();
    var hs_zdcpokeElemOff1925uXCQ = new $hs.Thunk();
    var hs_a120125uXCR = new $hs.Thunk();
    var hs_zdcpeekByteOff1925uXCS = new $hs.Thunk();
    var hs_a120225uXCT = new $hs.Thunk();
    var hs_zdcpokeByteOff1925uXCU = new $hs.Thunk();
    var hs_a120325uXCV = new $hs.Thunk();
    var hs_zdcpeek1925uXCW = new $hs.Thunk();
    var hs_a120425uXCX = new $hs.Thunk();
    var hs_zdcpoke1925uXCY = new $hs.Thunk();
    var hs_a120525uXCZ = new $hs.Thunk();
    var hs_zdcsucc1925uXD0 = new $hs.Thunk();
    var hs_a120625uXD1 = new $hs.Thunk();
    var hs_zdcpred1925uXD2 = new $hs.Thunk();
    var hs_a120725uXD3 = new $hs.Thunk();
    var hs_zdctoEnum1925uXD4 = new $hs.Thunk();
    var hs_a120825uXD5 = new $hs.Thunk();
    var hs_zdcfromEnum1925uXD6 = new $hs.Thunk();
    var hs_a120925uXD7 = new $hs.Thunk();
    var hs_zdcenumFrom1925uXD8 = new $hs.Thunk();
    var hs_a121025uXD9 = new $hs.Thunk();
    var hs_zdcenumFromThen1925uXDa = new $hs.Thunk();
    var hs_a121125uXDb = new $hs.Thunk();
    var hs_zdcenumFromTo1925uXDc = new $hs.Thunk();
    var hs_a121225uXDd = new $hs.Thunk();
    var hs_zdcenumFromThenTo1925uXDe = new $hs.Thunk();
    var hs_a121325uXDf = new $hs.Thunk();
    var hs_zdczp1925uXDg = new $hs.Thunk();
    var hs_a121425uXDh = new $hs.Thunk();
    var hs_zdczt1925uXDi = new $hs.Thunk();
    var hs_a121525uXDj = new $hs.Thunk();
    var hs_zdczm1925uXDk = new $hs.Thunk();
    var hs_a121625uXDl = new $hs.Thunk();
    var hs_zdcnegate1925uXDm = new $hs.Thunk();
    var hs_a121725uXDn = new $hs.Thunk();
    var hs_zdcabs1925uXDo = new $hs.Thunk();
    var hs_a121825uXDp = new $hs.Thunk();
    var hs_zdcsignum1925uXDq = new $hs.Thunk();
    var hs_a121925uXDr = new $hs.Thunk();
    var hs_zdcfromInteger1925uXDs = new $hs.Thunk();
    var hs_a122025uXDt = new $hs.Thunk();
    var hs_zdccompare1925uXDu = new $hs.Thunk();
    var hs_a122125uXDv = new $hs.Thunk();
    var hs_zdczl1925uXDw = new $hs.Thunk();
    var hs_a122225uXDx = new $hs.Thunk();
    var hs_zdczgze1925uXDy = new $hs.Thunk();
    var hs_a122325uXDz = new $hs.Thunk();
    var hs_zdczg1925uXDA = new $hs.Thunk();
    var hs_a122425uXDB = new $hs.Thunk();
    var hs_zdczlze1925uXDC = new $hs.Thunk();
    var hs_a122525uXDD = new $hs.Thunk();
    var hs_zdcmax1925uXDE = new $hs.Thunk();
    var hs_a122625uXDF = new $hs.Thunk();
    var hs_zdcmin1925uXDG = new $hs.Thunk();
    var hs_a122725uXDH = new $hs.Thunk();
    var hs_zdczeze1925uXDI = new $hs.Thunk();
    var hs_a122825uXDJ = new $hs.Thunk();
    var hs_zdczsze1925uXDK = new $hs.Thunk();
    var hs_a122925uXDL = new $hs.Thunk();
    var hs_zdczizazi1425uXDM = new $hs.Thunk();
    var hs_a123025uXDN = new $hs.Thunk();
    var hs_zdczizbzi1425uXDO = new $hs.Thunk();
    var hs_a123125uXDP = new $hs.Thunk();
    var hs_zdcxor1425uXDQ = new $hs.Thunk();
    var hs_a123225uXDR = new $hs.Thunk();
    var hs_zdccomplement1425uXDS = new $hs.Thunk();
    var hs_a123325uXDT = new $hs.Thunk();
    var hs_zdcshift1425uXDU = new $hs.Thunk();
    var hs_a123425uXDV = new $hs.Thunk();
    var hs_zdcrotate1425uXDW = new $hs.Thunk();
    var hs_a123525uXDX = new $hs.Thunk();
    var hs_zdcbit1425uXDY = new $hs.Thunk();
    var hs_a123625uXDZ = new $hs.Thunk();
    var hs_zdcsetBit1425uXE0 = new $hs.Thunk();
    var hs_a123725uXE1 = new $hs.Thunk();
    var hs_zdcclearBit1425uXE2 = new $hs.Thunk();
    var hs_a123825uXE3 = new $hs.Thunk();
    var hs_zdccomplementBit1425uXE4 = new $hs.Thunk();
    var hs_a123925uXE5 = new $hs.Thunk();
    var hs_zdctestBit1425uXE6 = new $hs.Thunk();
    var hs_a124025uXE7 = new $hs.Thunk();
    var hs_zdcbitSizze1425uXE8 = new $hs.Thunk();
    var hs_a124125uXE9 = new $hs.Thunk();
    var hs_zdcisSigned1425uXEa = new $hs.Thunk();
    var hs_a124225uXEb = new $hs.Thunk();
    var hs_zdcshiftL1425uXEc = new $hs.Thunk();
    var hs_a124325uXEd = new $hs.Thunk();
    var hs_zdcshiftR1425uXEe = new $hs.Thunk();
    var hs_a124425uXEf = new $hs.Thunk();
    var hs_zdcrotateL1425uXEg = new $hs.Thunk();
    var hs_a124525uXEh = new $hs.Thunk();
    var hs_zdcrotateR1425uXEi = new $hs.Thunk();
    var hs_a124625uXEj = new $hs.Thunk();
    var hs_zdcquot1425uXEk = new $hs.Thunk();
    var hs_a124725uXEl = new $hs.Thunk();
    var hs_zdcrem1425uXEm = new $hs.Thunk();
    var hs_a124825uXEn = new $hs.Thunk();
    var hs_zdcdiv1425uXEo = new $hs.Thunk();
    var hs_a124925uXEp = new $hs.Thunk();
    var hs_zdcmod1425uXEq = new $hs.Thunk();
    var hs_a125025uXEr = new $hs.Thunk();
    var hs_zdcquotRem1425uXEs = new $hs.Thunk();
    var hs_a125125uXEt = new $hs.Thunk();
    var hs_zdcdivMod1425uXEu = new $hs.Thunk();
    var hs_a125225uXEv = new $hs.Thunk();
    var hs_zdctoInteger1425uXEw = new $hs.Thunk();
    var hs_a125325uXEx = new $hs.Thunk();
    var hs_zdcminBound1425uXEy = new $hs.Thunk();
    var hs_a125425uXEz = new $hs.Thunk();
    var hs_zdcmaxBound1425uXEA = new $hs.Thunk();
    var hs_a125525uXEB = new $hs.Thunk();
    var hs_zdctoRational2025uXEC = new $hs.Thunk();
    var hs_a125625uXED = new $hs.Thunk();
    var hs_zdcsizzeOf2025uXEE = new $hs.Thunk();
    var hs_a125725uXEF = new $hs.Thunk();
    var hs_zdcalignment2025uXEG = new $hs.Thunk();
    var hs_a125825uXEH = new $hs.Thunk();
    var hs_zdcpeekElemOff2025uXEI = new $hs.Thunk();
    var hs_a125925uXEJ = new $hs.Thunk();
    var hs_zdcpokeElemOff2025uXEK = new $hs.Thunk();
    var hs_a126025uXEL = new $hs.Thunk();
    var hs_zdcpeekByteOff2025uXEM = new $hs.Thunk();
    var hs_a126125uXEN = new $hs.Thunk();
    var hs_zdcpokeByteOff2025uXEO = new $hs.Thunk();
    var hs_a126225uXEP = new $hs.Thunk();
    var hs_zdcpeek2025uXEQ = new $hs.Thunk();
    var hs_a126325uXER = new $hs.Thunk();
    var hs_zdcpoke2025uXES = new $hs.Thunk();
    var hs_a126425uXET = new $hs.Thunk();
    var hs_zdcsucc2025uXEU = new $hs.Thunk();
    var hs_a126525uXEV = new $hs.Thunk();
    var hs_zdcpred2025uXEW = new $hs.Thunk();
    var hs_a126625uXEX = new $hs.Thunk();
    var hs_zdctoEnum2025uXEY = new $hs.Thunk();
    var hs_a126725uXEZ = new $hs.Thunk();
    var hs_zdcfromEnum2025uXF0 = new $hs.Thunk();
    var hs_a126825uXF1 = new $hs.Thunk();
    var hs_zdcenumFrom2025uXF2 = new $hs.Thunk();
    var hs_a126925uXF3 = new $hs.Thunk();
    var hs_zdcenumFromThen2025uXF4 = new $hs.Thunk();
    var hs_a127025uXF5 = new $hs.Thunk();
    var hs_zdcenumFromTo2025uXF6 = new $hs.Thunk();
    var hs_a127125uXF7 = new $hs.Thunk();
    var hs_zdcenumFromThenTo2025uXF8 = new $hs.Thunk();
    var hs_a127225uXF9 = new $hs.Thunk();
    var hs_zdczp2025uXFa = new $hs.Thunk();
    var hs_a127325uXFb = new $hs.Thunk();
    var hs_zdczt2025uXFc = new $hs.Thunk();
    var hs_a127425uXFd = new $hs.Thunk();
    var hs_zdczm2025uXFe = new $hs.Thunk();
    var hs_a127525uXFf = new $hs.Thunk();
    var hs_zdcnegate2025uXFg = new $hs.Thunk();
    var hs_a127625uXFh = new $hs.Thunk();
    var hs_zdcabs2025uXFi = new $hs.Thunk();
    var hs_a127725uXFj = new $hs.Thunk();
    var hs_zdcsignum2025uXFk = new $hs.Thunk();
    var hs_a127825uXFl = new $hs.Thunk();
    var hs_zdcfromInteger2025uXFm = new $hs.Thunk();
    var hs_a127925uXFn = new $hs.Thunk();
    var hs_zdccompare2025uXFo = new $hs.Thunk();
    var hs_a128025uXFp = new $hs.Thunk();
    var hs_zdczl2025uXFq = new $hs.Thunk();
    var hs_a128125uXFr = new $hs.Thunk();
    var hs_zdczgze2025uXFs = new $hs.Thunk();
    var hs_a128225uXFt = new $hs.Thunk();
    var hs_zdczg2025uXFu = new $hs.Thunk();
    var hs_a128325uXFv = new $hs.Thunk();
    var hs_zdczlze2025uXFw = new $hs.Thunk();
    var hs_a128425uXFx = new $hs.Thunk();
    var hs_zdcmax2025uXFy = new $hs.Thunk();
    var hs_a128525uXFz = new $hs.Thunk();
    var hs_zdcmin2025uXFA = new $hs.Thunk();
    var hs_a128625uXFB = new $hs.Thunk();
    var hs_zdczeze2025uXFC = new $hs.Thunk();
    var hs_a128725uXFD = new $hs.Thunk();
    var hs_zdczsze2025uXFE = new $hs.Thunk();
    var hs_a128825uXFF = new $hs.Thunk();
    var hs_zdczizazi1525uXFG = new $hs.Thunk();
    var hs_a128925uXFH = new $hs.Thunk();
    var hs_zdczizbzi1525uXFI = new $hs.Thunk();
    var hs_a129025uXFJ = new $hs.Thunk();
    var hs_zdcxor1525uXFK = new $hs.Thunk();
    var hs_a129125uXFL = new $hs.Thunk();
    var hs_zdccomplement1525uXFM = new $hs.Thunk();
    var hs_a129225uXFN = new $hs.Thunk();
    var hs_zdcshift1525uXFO = new $hs.Thunk();
    var hs_a129325uXFP = new $hs.Thunk();
    var hs_zdcrotate1525uXFQ = new $hs.Thunk();
    var hs_a129425uXFR = new $hs.Thunk();
    var hs_zdcbit1525uXFS = new $hs.Thunk();
    var hs_a129525uXFT = new $hs.Thunk();
    var hs_zdcsetBit1525uXFU = new $hs.Thunk();
    var hs_a129625uXFV = new $hs.Thunk();
    var hs_zdcclearBit1525uXFW = new $hs.Thunk();
    var hs_a129725uXFX = new $hs.Thunk();
    var hs_zdccomplementBit1525uXFY = new $hs.Thunk();
    var hs_a129825uXFZ = new $hs.Thunk();
    var hs_zdctestBit1525uXG0 = new $hs.Thunk();
    var hs_a129925uXG1 = new $hs.Thunk();
    var hs_zdcbitSizze1525uXG2 = new $hs.Thunk();
    var hs_a130025uXG3 = new $hs.Thunk();
    var hs_zdcisSigned1525uXG4 = new $hs.Thunk();
    var hs_a130125uXG5 = new $hs.Thunk();
    var hs_zdcshiftL1525uXG6 = new $hs.Thunk();
    var hs_a130225uXG7 = new $hs.Thunk();
    var hs_zdcshiftR1525uXG8 = new $hs.Thunk();
    var hs_a130325uXG9 = new $hs.Thunk();
    var hs_zdcrotateL1525uXGa = new $hs.Thunk();
    var hs_a130425uXGb = new $hs.Thunk();
    var hs_zdcrotateR1525uXGc = new $hs.Thunk();
    var hs_a130525uXGd = new $hs.Thunk();
    var hs_zdcquot1525uXGe = new $hs.Thunk();
    var hs_a130625uXGf = new $hs.Thunk();
    var hs_zdcrem1525uXGg = new $hs.Thunk();
    var hs_a130725uXGh = new $hs.Thunk();
    var hs_zdcdiv1525uXGi = new $hs.Thunk();
    var hs_a130825uXGj = new $hs.Thunk();
    var hs_zdcmod1525uXGk = new $hs.Thunk();
    var hs_a130925uXGl = new $hs.Thunk();
    var hs_zdcquotRem1525uXGm = new $hs.Thunk();
    var hs_a131025uXGn = new $hs.Thunk();
    var hs_zdcdivMod1525uXGo = new $hs.Thunk();
    var hs_a131125uXGp = new $hs.Thunk();
    var hs_zdctoInteger1525uXGq = new $hs.Thunk();
    var hs_a131225uXGr = new $hs.Thunk();
    var hs_zdcminBound1525uXGs = new $hs.Thunk();
    var hs_a131325uXGt = new $hs.Thunk();
    var hs_zdcmaxBound1525uXGu = new $hs.Thunk();
    var hs_a131425uXGv = new $hs.Thunk();
    var hs_zdctoRational2125uXGw = new $hs.Thunk();
    var hs_a131525uXGx = new $hs.Thunk();
    var hs_zdcsizzeOf2125uXGy = new $hs.Thunk();
    var hs_a131625uXGz = new $hs.Thunk();
    var hs_zdcalignment2125uXGA = new $hs.Thunk();
    var hs_a131725uXGB = new $hs.Thunk();
    var hs_zdcpeekElemOff2125uXGC = new $hs.Thunk();
    var hs_a131825uXGD = new $hs.Thunk();
    var hs_zdcpokeElemOff2125uXGE = new $hs.Thunk();
    var hs_a131925uXGF = new $hs.Thunk();
    var hs_zdcpeekByteOff2125uXGG = new $hs.Thunk();
    var hs_a132025uXGH = new $hs.Thunk();
    var hs_zdcpokeByteOff2125uXGI = new $hs.Thunk();
    var hs_a132125uXGJ = new $hs.Thunk();
    var hs_zdcpeek2125uXGK = new $hs.Thunk();
    var hs_a132225uXGL = new $hs.Thunk();
    var hs_zdcpoke2125uXGM = new $hs.Thunk();
    var hs_a132325uXGN = new $hs.Thunk();
    var hs_zdcsucc2125uXGO = new $hs.Thunk();
    var hs_a132425uXGP = new $hs.Thunk();
    var hs_zdcpred2125uXGQ = new $hs.Thunk();
    var hs_a132525uXGR = new $hs.Thunk();
    var hs_zdctoEnum2125uXGS = new $hs.Thunk();
    var hs_a132625uXGT = new $hs.Thunk();
    var hs_zdcfromEnum2125uXGU = new $hs.Thunk();
    var hs_a132725uXGV = new $hs.Thunk();
    var hs_zdcenumFrom2125uXGW = new $hs.Thunk();
    var hs_a132825uXGX = new $hs.Thunk();
    var hs_zdcenumFromThen2125uXGY = new $hs.Thunk();
    var hs_a132925uXGZ = new $hs.Thunk();
    var hs_zdcenumFromTo2125uXH0 = new $hs.Thunk();
    var hs_a133025uXH1 = new $hs.Thunk();
    var hs_zdcenumFromThenTo2125uXH2 = new $hs.Thunk();
    var hs_a133125uXH3 = new $hs.Thunk();
    var hs_zdczp2125uXH4 = new $hs.Thunk();
    var hs_a133225uXH5 = new $hs.Thunk();
    var hs_zdczt2125uXH6 = new $hs.Thunk();
    var hs_a133325uXH7 = new $hs.Thunk();
    var hs_zdczm2125uXH8 = new $hs.Thunk();
    var hs_a133425uXH9 = new $hs.Thunk();
    var hs_zdcnegate2125uXHa = new $hs.Thunk();
    var hs_a133525uXHb = new $hs.Thunk();
    var hs_zdcabs2125uXHc = new $hs.Thunk();
    var hs_a133625uXHd = new $hs.Thunk();
    var hs_zdcsignum2125uXHe = new $hs.Thunk();
    var hs_a133725uXHf = new $hs.Thunk();
    var hs_zdcfromInteger2125uXHg = new $hs.Thunk();
    var hs_a133825uXHh = new $hs.Thunk();
    var hs_zdccompare2125uXHi = new $hs.Thunk();
    var hs_a133925uXHj = new $hs.Thunk();
    var hs_zdczl2125uXHk = new $hs.Thunk();
    var hs_a134025uXHl = new $hs.Thunk();
    var hs_zdczgze2125uXHm = new $hs.Thunk();
    var hs_a134125uXHn = new $hs.Thunk();
    var hs_zdczg2125uXHo = new $hs.Thunk();
    var hs_a134225uXHp = new $hs.Thunk();
    var hs_zdczlze2125uXHq = new $hs.Thunk();
    var hs_a134325uXHr = new $hs.Thunk();
    var hs_zdcmax2125uXHs = new $hs.Thunk();
    var hs_a134425uXHt = new $hs.Thunk();
    var hs_zdcmin2125uXHu = new $hs.Thunk();
    var hs_a134525uXHv = new $hs.Thunk();
    var hs_zdczeze2125uXHw = new $hs.Thunk();
    var hs_a134625uXHx = new $hs.Thunk();
    var hs_zdczsze2125uXHy = new $hs.Thunk();
    var hs_a134725uXHz = new $hs.Thunk();
    var hs_zdczizazi1625uXHA = new $hs.Thunk();
    var hs_a134825uXHB = new $hs.Thunk();
    var hs_zdczizbzi1625uXHC = new $hs.Thunk();
    var hs_a134925uXHD = new $hs.Thunk();
    var hs_zdcxor1625uXHE = new $hs.Thunk();
    var hs_a135025uXHF = new $hs.Thunk();
    var hs_zdccomplement1625uXHG = new $hs.Thunk();
    var hs_a135125uXHH = new $hs.Thunk();
    var hs_zdcshift1625uXHI = new $hs.Thunk();
    var hs_a135225uXHJ = new $hs.Thunk();
    var hs_zdcrotate1625uXHK = new $hs.Thunk();
    var hs_a135325uXHL = new $hs.Thunk();
    var hs_zdcbit1625uXHM = new $hs.Thunk();
    var hs_a135425uXHN = new $hs.Thunk();
    var hs_zdcsetBit1625uXHO = new $hs.Thunk();
    var hs_a135525uXHP = new $hs.Thunk();
    var hs_zdcclearBit1625uXHQ = new $hs.Thunk();
    var hs_a135625uXHR = new $hs.Thunk();
    var hs_zdccomplementBit1625uXHS = new $hs.Thunk();
    var hs_a135725uXHT = new $hs.Thunk();
    var hs_zdctestBit1625uXHU = new $hs.Thunk();
    var hs_a135825uXHV = new $hs.Thunk();
    var hs_zdcbitSizze1625uXHW = new $hs.Thunk();
    var hs_a135925uXHX = new $hs.Thunk();
    var hs_zdcisSigned1625uXHY = new $hs.Thunk();
    var hs_a136025uXHZ = new $hs.Thunk();
    var hs_zdcshiftL1625uXI0 = new $hs.Thunk();
    var hs_a136125uXI1 = new $hs.Thunk();
    var hs_zdcshiftR1625uXI2 = new $hs.Thunk();
    var hs_a136225uXI3 = new $hs.Thunk();
    var hs_zdcrotateL1625uXI4 = new $hs.Thunk();
    var hs_a136325uXI5 = new $hs.Thunk();
    var hs_zdcrotateR1625uXI6 = new $hs.Thunk();
    var hs_a136425uXI7 = new $hs.Thunk();
    var hs_zdcquot1625uXI8 = new $hs.Thunk();
    var hs_a136525uXI9 = new $hs.Thunk();
    var hs_zdcrem1625uXIa = new $hs.Thunk();
    var hs_a136625uXIb = new $hs.Thunk();
    var hs_zdcdiv1625uXIc = new $hs.Thunk();
    var hs_a136725uXId = new $hs.Thunk();
    var hs_zdcmod1625uXIe = new $hs.Thunk();
    var hs_a136825uXIf = new $hs.Thunk();
    var hs_zdcquotRem1625uXIg = new $hs.Thunk();
    var hs_a136925uXIh = new $hs.Thunk();
    var hs_zdcdivMod1625uXIi = new $hs.Thunk();
    var hs_a137025uXIj = new $hs.Thunk();
    var hs_zdctoInteger1625uXIk = new $hs.Thunk();
    var hs_a137125uXIl = new $hs.Thunk();
    var hs_zdcminBound1625uXIm = new $hs.Thunk();
    var hs_a137225uXIn = new $hs.Thunk();
    var hs_zdcmaxBound1625uXIo = new $hs.Thunk();
    var hs_a137325uXIp = new $hs.Thunk();
    var hs_zdctoRational2225uXIq = new $hs.Thunk();
    var hs_a137425uXIr = new $hs.Thunk();
    var hs_zdcsizzeOf2225uXIs = new $hs.Thunk();
    var hs_a137525uXIt = new $hs.Thunk();
    var hs_zdcalignment2225uXIu = new $hs.Thunk();
    var hs_a137625uXIv = new $hs.Thunk();
    var hs_zdcpeekElemOff2225uXIw = new $hs.Thunk();
    var hs_a137725uXIx = new $hs.Thunk();
    var hs_zdcpokeElemOff2225uXIy = new $hs.Thunk();
    var hs_a137825uXIz = new $hs.Thunk();
    var hs_zdcpeekByteOff2225uXIA = new $hs.Thunk();
    var hs_a137925uXIB = new $hs.Thunk();
    var hs_zdcpokeByteOff2225uXIC = new $hs.Thunk();
    var hs_a138025uXID = new $hs.Thunk();
    var hs_zdcpeek2225uXIE = new $hs.Thunk();
    var hs_a138125uXIF = new $hs.Thunk();
    var hs_zdcpoke2225uXIG = new $hs.Thunk();
    var hs_a138225uXIH = new $hs.Thunk();
    var hs_zdcsucc2225uXII = new $hs.Thunk();
    var hs_a138325uXIJ = new $hs.Thunk();
    var hs_zdcpred2225uXIK = new $hs.Thunk();
    var hs_a138425uXIL = new $hs.Thunk();
    var hs_zdctoEnum2225uXIM = new $hs.Thunk();
    var hs_a138525uXIN = new $hs.Thunk();
    var hs_zdcfromEnum2225uXIO = new $hs.Thunk();
    var hs_a138625uXIP = new $hs.Thunk();
    var hs_zdcenumFrom2225uXIQ = new $hs.Thunk();
    var hs_a138725uXIR = new $hs.Thunk();
    var hs_zdcenumFromThen2225uXIS = new $hs.Thunk();
    var hs_a138825uXIT = new $hs.Thunk();
    var hs_zdcenumFromTo2225uXIU = new $hs.Thunk();
    var hs_a138925uXIV = new $hs.Thunk();
    var hs_zdcenumFromThenTo2225uXIW = new $hs.Thunk();
    var hs_a139025uXIX = new $hs.Thunk();
    var hs_zdczp2225uXIY = new $hs.Thunk();
    var hs_a139125uXIZ = new $hs.Thunk();
    var hs_zdczt2225uXJ0 = new $hs.Thunk();
    var hs_a139225uXJ1 = new $hs.Thunk();
    var hs_zdczm2225uXJ2 = new $hs.Thunk();
    var hs_a139325uXJ3 = new $hs.Thunk();
    var hs_zdcnegate2225uXJ4 = new $hs.Thunk();
    var hs_a139425uXJ5 = new $hs.Thunk();
    var hs_zdcabs2225uXJ6 = new $hs.Thunk();
    var hs_a139525uXJ7 = new $hs.Thunk();
    var hs_zdcsignum2225uXJ8 = new $hs.Thunk();
    var hs_a139625uXJ9 = new $hs.Thunk();
    var hs_zdcfromInteger2225uXJa = new $hs.Thunk();
    var hs_a139725uXJb = new $hs.Thunk();
    var hs_zdccompare2225uXJc = new $hs.Thunk();
    var hs_a139825uXJd = new $hs.Thunk();
    var hs_zdczl2225uXJe = new $hs.Thunk();
    var hs_a139925uXJf = new $hs.Thunk();
    var hs_zdczgze2225uXJg = new $hs.Thunk();
    var hs_a140025uXJh = new $hs.Thunk();
    var hs_zdczg2225uXJi = new $hs.Thunk();
    var hs_a140125uXJj = new $hs.Thunk();
    var hs_zdczlze2225uXJk = new $hs.Thunk();
    var hs_a140225uXJl = new $hs.Thunk();
    var hs_zdcmax2225uXJm = new $hs.Thunk();
    var hs_a140325uXJn = new $hs.Thunk();
    var hs_zdcmin2225uXJo = new $hs.Thunk();
    var hs_a140425uXJp = new $hs.Thunk();
    var hs_zdczeze2225uXJq = new $hs.Thunk();
    var hs_a140525uXJr = new $hs.Thunk();
    var hs_zdczsze2225uXJs = new $hs.Thunk();
    var hs_a140625uXJt = new $hs.Thunk();
    var hs_zdczizazi1725uXJu = new $hs.Thunk();
    var hs_a140725uXJv = new $hs.Thunk();
    var hs_zdczizbzi1725uXJw = new $hs.Thunk();
    var hs_a140825uXJx = new $hs.Thunk();
    var hs_zdcxor1725uXJy = new $hs.Thunk();
    var hs_a140925uXJz = new $hs.Thunk();
    var hs_zdccomplement1725uXJA = new $hs.Thunk();
    var hs_a141025uXJB = new $hs.Thunk();
    var hs_zdcshift1725uXJC = new $hs.Thunk();
    var hs_a141125uXJD = new $hs.Thunk();
    var hs_zdcrotate1725uXJE = new $hs.Thunk();
    var hs_a141225uXJF = new $hs.Thunk();
    var hs_zdcbit1725uXJG = new $hs.Thunk();
    var hs_a141325uXJH = new $hs.Thunk();
    var hs_zdcsetBit1725uXJI = new $hs.Thunk();
    var hs_a141425uXJJ = new $hs.Thunk();
    var hs_zdcclearBit1725uXJK = new $hs.Thunk();
    var hs_a141525uXJL = new $hs.Thunk();
    var hs_zdccomplementBit1725uXJM = new $hs.Thunk();
    var hs_a141625uXJN = new $hs.Thunk();
    var hs_zdctestBit1725uXJO = new $hs.Thunk();
    var hs_a141725uXJP = new $hs.Thunk();
    var hs_zdcbitSizze1725uXJQ = new $hs.Thunk();
    var hs_a141825uXJR = new $hs.Thunk();
    var hs_zdcisSigned1725uXJS = new $hs.Thunk();
    var hs_a141925uXJT = new $hs.Thunk();
    var hs_zdcshiftL1725uXJU = new $hs.Thunk();
    var hs_a142025uXJV = new $hs.Thunk();
    var hs_zdcshiftR1725uXJW = new $hs.Thunk();
    var hs_a142125uXJX = new $hs.Thunk();
    var hs_zdcrotateL1725uXJY = new $hs.Thunk();
    var hs_a142225uXJZ = new $hs.Thunk();
    var hs_zdcrotateR1725uXK0 = new $hs.Thunk();
    var hs_a142325uXK1 = new $hs.Thunk();
    var hs_zdcquot1725uXK2 = new $hs.Thunk();
    var hs_a142425uXK3 = new $hs.Thunk();
    var hs_zdcrem1725uXK4 = new $hs.Thunk();
    var hs_a142525uXK5 = new $hs.Thunk();
    var hs_zdcdiv1725uXK6 = new $hs.Thunk();
    var hs_a142625uXK7 = new $hs.Thunk();
    var hs_zdcmod1725uXK8 = new $hs.Thunk();
    var hs_a142725uXK9 = new $hs.Thunk();
    var hs_zdcquotRem1725uXKa = new $hs.Thunk();
    var hs_a142825uXKb = new $hs.Thunk();
    var hs_zdcdivMod1725uXKc = new $hs.Thunk();
    var hs_a142925uXKd = new $hs.Thunk();
    var hs_zdctoInteger1725uXKe = new $hs.Thunk();
    var hs_a143025uXKf = new $hs.Thunk();
    var hs_zdcminBound1725uXKg = new $hs.Thunk();
    var hs_a143125uXKh = new $hs.Thunk();
    var hs_zdcmaxBound1725uXKi = new $hs.Thunk();
    var hs_a143225uXKj = new $hs.Thunk();
    var hs_zdctoRational2325uXKk = new $hs.Thunk();
    var hs_a143325uXKl = new $hs.Thunk();
    var hs_zdcsizzeOf2325uXKm = new $hs.Thunk();
    var hs_a143425uXKn = new $hs.Thunk();
    var hs_zdcalignment2325uXKo = new $hs.Thunk();
    var hs_a143525uXKp = new $hs.Thunk();
    var hs_zdcpeekElemOff2325uXKq = new $hs.Thunk();
    var hs_a143625uXKr = new $hs.Thunk();
    var hs_zdcpokeElemOff2325uXKs = new $hs.Thunk();
    var hs_a143725uXKt = new $hs.Thunk();
    var hs_zdcpeekByteOff2325uXKu = new $hs.Thunk();
    var hs_a143825uXKv = new $hs.Thunk();
    var hs_zdcpokeByteOff2325uXKw = new $hs.Thunk();
    var hs_a143925uXKx = new $hs.Thunk();
    var hs_zdcpeek2325uXKy = new $hs.Thunk();
    var hs_a144025uXKz = new $hs.Thunk();
    var hs_zdcpoke2325uXKA = new $hs.Thunk();
    var hs_a144125uXKB = new $hs.Thunk();
    var hs_zdcsucc2325uXKC = new $hs.Thunk();
    var hs_a144225uXKD = new $hs.Thunk();
    var hs_zdcpred2325uXKE = new $hs.Thunk();
    var hs_a144325uXKF = new $hs.Thunk();
    var hs_zdctoEnum2325uXKG = new $hs.Thunk();
    var hs_a144425uXKH = new $hs.Thunk();
    var hs_zdcfromEnum2325uXKI = new $hs.Thunk();
    var hs_a144525uXKJ = new $hs.Thunk();
    var hs_zdcenumFrom2325uXKK = new $hs.Thunk();
    var hs_a144625uXKL = new $hs.Thunk();
    var hs_zdcenumFromThen2325uXKM = new $hs.Thunk();
    var hs_a144725uXKN = new $hs.Thunk();
    var hs_zdcenumFromTo2325uXKO = new $hs.Thunk();
    var hs_a144825uXKP = new $hs.Thunk();
    var hs_zdcenumFromThenTo2325uXKQ = new $hs.Thunk();
    var hs_a144925uXKR = new $hs.Thunk();
    var hs_zdczp2325uXKS = new $hs.Thunk();
    var hs_a145025uXKT = new $hs.Thunk();
    var hs_zdczt2325uXKU = new $hs.Thunk();
    var hs_a145125uXKV = new $hs.Thunk();
    var hs_zdczm2325uXKW = new $hs.Thunk();
    var hs_a145225uXKX = new $hs.Thunk();
    var hs_zdcnegate2325uXKY = new $hs.Thunk();
    var hs_a145325uXKZ = new $hs.Thunk();
    var hs_zdcabs2325uXL0 = new $hs.Thunk();
    var hs_a145425uXL1 = new $hs.Thunk();
    var hs_zdcsignum2325uXL2 = new $hs.Thunk();
    var hs_a145525uXL3 = new $hs.Thunk();
    var hs_zdcfromInteger2325uXL4 = new $hs.Thunk();
    var hs_a145625uXL5 = new $hs.Thunk();
    var hs_zdccompare2325uXL6 = new $hs.Thunk();
    var hs_a145725uXL7 = new $hs.Thunk();
    var hs_zdczl2325uXL8 = new $hs.Thunk();
    var hs_a145825uXL9 = new $hs.Thunk();
    var hs_zdczgze2325uXLa = new $hs.Thunk();
    var hs_a145925uXLb = new $hs.Thunk();
    var hs_zdczg2325uXLc = new $hs.Thunk();
    var hs_a146025uXLd = new $hs.Thunk();
    var hs_zdczlze2325uXLe = new $hs.Thunk();
    var hs_a146125uXLf = new $hs.Thunk();
    var hs_zdcmax2325uXLg = new $hs.Thunk();
    var hs_a146225uXLh = new $hs.Thunk();
    var hs_zdcmin2325uXLi = new $hs.Thunk();
    var hs_a146325uXLj = new $hs.Thunk();
    var hs_zdczeze2325uXLk = new $hs.Thunk();
    var hs_a146425uXLl = new $hs.Thunk();
    var hs_zdczsze2325uXLm = new $hs.Thunk();
    var hs_a146525uXLn = new $hs.Thunk();
    var hs_zdczizazi1825uXLo = new $hs.Thunk();
    var hs_a146625uXLp = new $hs.Thunk();
    var hs_zdczizbzi1825uXLq = new $hs.Thunk();
    var hs_a146725uXLr = new $hs.Thunk();
    var hs_zdcxor1825uXLs = new $hs.Thunk();
    var hs_a146825uXLt = new $hs.Thunk();
    var hs_zdccomplement1825uXLu = new $hs.Thunk();
    var hs_a146925uXLv = new $hs.Thunk();
    var hs_zdcshift1825uXLw = new $hs.Thunk();
    var hs_a147025uXLx = new $hs.Thunk();
    var hs_zdcrotate1825uXLy = new $hs.Thunk();
    var hs_a147125uXLz = new $hs.Thunk();
    var hs_zdcbit1825uXLA = new $hs.Thunk();
    var hs_a147225uXLB = new $hs.Thunk();
    var hs_zdcsetBit1825uXLC = new $hs.Thunk();
    var hs_a147325uXLD = new $hs.Thunk();
    var hs_zdcclearBit1825uXLE = new $hs.Thunk();
    var hs_a147425uXLF = new $hs.Thunk();
    var hs_zdccomplementBit1825uXLG = new $hs.Thunk();
    var hs_a147525uXLH = new $hs.Thunk();
    var hs_zdctestBit1825uXLI = new $hs.Thunk();
    var hs_a147625uXLJ = new $hs.Thunk();
    var hs_zdcbitSizze1825uXLK = new $hs.Thunk();
    var hs_a147725uXLL = new $hs.Thunk();
    var hs_zdcisSigned1825uXLM = new $hs.Thunk();
    var hs_a147825uXLN = new $hs.Thunk();
    var hs_zdcshiftL1825uXLO = new $hs.Thunk();
    var hs_a147925uXLP = new $hs.Thunk();
    var hs_zdcshiftR1825uXLQ = new $hs.Thunk();
    var hs_a148025uXLR = new $hs.Thunk();
    var hs_zdcrotateL1825uXLS = new $hs.Thunk();
    var hs_a148125uXLT = new $hs.Thunk();
    var hs_zdcrotateR1825uXLU = new $hs.Thunk();
    var hs_a148225uXLV = new $hs.Thunk();
    var hs_zdcquot1825uXLW = new $hs.Thunk();
    var hs_a148325uXLX = new $hs.Thunk();
    var hs_zdcrem1825uXLY = new $hs.Thunk();
    var hs_a148425uXLZ = new $hs.Thunk();
    var hs_zdcdiv1825uXM0 = new $hs.Thunk();
    var hs_a148525uXM1 = new $hs.Thunk();
    var hs_zdcmod1825uXM2 = new $hs.Thunk();
    var hs_a148625uXM3 = new $hs.Thunk();
    var hs_zdcquotRem1825uXM4 = new $hs.Thunk();
    var hs_a148725uXM5 = new $hs.Thunk();
    var hs_zdcdivMod1825uXM6 = new $hs.Thunk();
    var hs_a148825uXM7 = new $hs.Thunk();
    var hs_zdctoInteger1825uXM8 = new $hs.Thunk();
    var hs_a148925uXM9 = new $hs.Thunk();
    var hs_zdcminBound1825uXMa = new $hs.Thunk();
    var hs_a149025uXMb = new $hs.Thunk();
    var hs_zdcmaxBound1825uXMc = new $hs.Thunk();
    var hs_a149125uXMd = new $hs.Thunk();
    var hs_zdctoRational2425uXMe = new $hs.Thunk();
    var hs_a149225uXMf = new $hs.Thunk();
    var hs_zdcsizzeOf2425uXMg = new $hs.Thunk();
    var hs_a149325uXMh = new $hs.Thunk();
    var hs_zdcalignment2425uXMi = new $hs.Thunk();
    var hs_a149425uXMj = new $hs.Thunk();
    var hs_zdcpeekElemOff2425uXMk = new $hs.Thunk();
    var hs_a149525uXMl = new $hs.Thunk();
    var hs_zdcpokeElemOff2425uXMm = new $hs.Thunk();
    var hs_a149625uXMn = new $hs.Thunk();
    var hs_zdcpeekByteOff2425uXMo = new $hs.Thunk();
    var hs_a149725uXMp = new $hs.Thunk();
    var hs_zdcpokeByteOff2425uXMq = new $hs.Thunk();
    var hs_a149825uXMr = new $hs.Thunk();
    var hs_zdcpeek2425uXMs = new $hs.Thunk();
    var hs_a149925uXMt = new $hs.Thunk();
    var hs_zdcpoke2425uXMu = new $hs.Thunk();
    var hs_a150025uXMv = new $hs.Thunk();
    var hs_zdcsucc2425uXMw = new $hs.Thunk();
    var hs_a150125uXMx = new $hs.Thunk();
    var hs_zdcpred2425uXMy = new $hs.Thunk();
    var hs_a150225uXMz = new $hs.Thunk();
    var hs_zdctoEnum2425uXMA = new $hs.Thunk();
    var hs_a150325uXMB = new $hs.Thunk();
    var hs_zdcfromEnum2425uXMC = new $hs.Thunk();
    var hs_a150425uXMD = new $hs.Thunk();
    var hs_zdcenumFrom2425uXME = new $hs.Thunk();
    var hs_a150525uXMF = new $hs.Thunk();
    var hs_zdcenumFromThen2425uXMG = new $hs.Thunk();
    var hs_a150625uXMH = new $hs.Thunk();
    var hs_zdcenumFromTo2425uXMI = new $hs.Thunk();
    var hs_a150725uXMJ = new $hs.Thunk();
    var hs_zdcenumFromThenTo2425uXMK = new $hs.Thunk();
    var hs_a150825uXML = new $hs.Thunk();
    var hs_zdczp2425uXMM = new $hs.Thunk();
    var hs_a150925uXMN = new $hs.Thunk();
    var hs_zdczt2425uXMO = new $hs.Thunk();
    var hs_a151025uXMP = new $hs.Thunk();
    var hs_zdczm2425uXMQ = new $hs.Thunk();
    var hs_a151125uXMR = new $hs.Thunk();
    var hs_zdcnegate2425uXMS = new $hs.Thunk();
    var hs_a151225uXMT = new $hs.Thunk();
    var hs_zdcabs2425uXMU = new $hs.Thunk();
    var hs_a151325uXMV = new $hs.Thunk();
    var hs_zdcsignum2425uXMW = new $hs.Thunk();
    var hs_a151425uXMX = new $hs.Thunk();
    var hs_zdcfromInteger2425uXMY = new $hs.Thunk();
    var hs_a151525uXMZ = new $hs.Thunk();
    var hs_zdccompare2425uXN0 = new $hs.Thunk();
    var hs_a151625uXN1 = new $hs.Thunk();
    var hs_zdczl2425uXN2 = new $hs.Thunk();
    var hs_a151725uXN3 = new $hs.Thunk();
    var hs_zdczgze2425uXN4 = new $hs.Thunk();
    var hs_a151825uXN5 = new $hs.Thunk();
    var hs_zdczg2425uXN6 = new $hs.Thunk();
    var hs_a151925uXN7 = new $hs.Thunk();
    var hs_zdczlze2425uXN8 = new $hs.Thunk();
    var hs_a152025uXN9 = new $hs.Thunk();
    var hs_zdcmax2425uXNa = new $hs.Thunk();
    var hs_a152125uXNb = new $hs.Thunk();
    var hs_zdcmin2425uXNc = new $hs.Thunk();
    var hs_a152225uXNd = new $hs.Thunk();
    var hs_zdczeze2425uXNe = new $hs.Thunk();
    var hs_a152325uXNf = new $hs.Thunk();
    var hs_zdczsze2425uXNg = new $hs.Thunk();
    var hs_zdctypeOf25uXNh = new $hs.Func(1);
    var hs_zdctypeOf125uXNo = new $hs.Func(1);
    var hs_zdctypeOf225uXNv = new $hs.Func(1);
    var hs_zdctypeOf325uXNC = new $hs.Func(1);
    var hs_zdctypeOf425uXNJ = new $hs.Func(1);
    var hs_zdctypeOf525uXNQ = new $hs.Func(1);
    var hs_zdctypeOf625uXNX = new $hs.Func(1);
    var hs_zdctypeOf725uXO4 = new $hs.Func(1);
    var hs_zdctypeOf825uXOb = new $hs.Func(1);
    var hs_zdctypeOf925uXOi = new $hs.Func(1);
    var hs_zdctypeOf1025uXOp = new $hs.Func(1);
    var hs_zdctypeOf1125uXOw = new $hs.Func(1);
    var hs_zdctypeOf1225uXOD = new $hs.Func(1);
    var hs_zdctypeOf1325uXOK = new $hs.Func(1);
    var hs_zdctypeOf1425uXOR = new $hs.Func(1);
    var hs_zdctypeOf1525uXOY = new $hs.Func(1);
    var hs_zdctypeOf1625uXP5 = new $hs.Func(1);
    var hs_zdctypeOf1725uXPc = new $hs.Func(1);
    var hs_zdctypeOf1825uXPj = new $hs.Func(1);
    var hs_zdctypeOf1925uXPq = new $hs.Func(1);
    var hs_zdctypeOf2025uXPx = new $hs.Func(1);
    var hs_zdctypeOf2125uXPE = new $hs.Func(1);
    var hs_zdctypeOf2225uXPL = new $hs.Func(1);
    var hs_zdctypeOf2325uXPS = new $hs.Func(1);
    var hs_zdctypeOf2425uXPZ = new $hs.Func(1);
    hs_a25uWZj.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziInt.hs_zdfReadInt8);
    };
    hs_zdcreadList25uWZk.evaluateOnce = function () {
        if (hs_a25uWZj.notEvaluated) {
            return hs_a25uWZj.hscall();
        } else {
            return hs_a25uWZj;
        }
    };
    hs_a125uWZl.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziInt.hs_zdfReadInt8);
    };
    hs_zdcreadsPrec25uWZm.evaluateOnce = function () {
        if (hs_a125uWZl.notEvaluated) {
            return hs_a125uWZl.hscall();
        } else {
            return hs_a125uWZl;
        }
    };
    this.hs_zdfReadCChar.data = [hs_a125uWZl, hs_a25uWZj, hs_zdcreadPrec25uWZo, hs_zdcreadListPrec25uWZn];
    hs_zdcreadListPrec25uWZn.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCChar);
    };
    hs_zdcreadPrec25uWZo.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCChar);
    };
    hs_a225uWZp.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziInt.hs_zdfShowInt8);
    };
    hs_zdcshowList25uWZq.evaluateOnce = function () {
        if (hs_a225uWZp.notEvaluated) {
            return hs_a225uWZp.hscall();
        } else {
            return hs_a225uWZp;
        }
    };
    hs_a325uWZr.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziInt.hs_zdfShowInt8);
    };
    hs_zdcshow25uWZs.evaluateOnce = function () {
        if (hs_a325uWZr.notEvaluated) {
            return hs_a325uWZr.hscall();
        } else {
            return hs_a325uWZr;
        }
    };
    hs_a425uWZt.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziInt.hs_zdfShowInt8);
    };
    hs_zdcshowsPrec25uWZu.evaluateOnce = function () {
        if (hs_a425uWZt.notEvaluated) {
            return hs_a425uWZt.hscall();
        } else {
            return hs_a425uWZt;
        }
    };
    this.hs_zdfShowCChar.data = [hs_a425uWZt, hs_a325uWZr, hs_a225uWZp];
    hs_a525uWZv.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziInt.hs_zdfReadInt8);
    };
    hs_zdcreadList125uWZw.evaluateOnce = function () {
        if (hs_a525uWZv.notEvaluated) {
            return hs_a525uWZv.hscall();
        } else {
            return hs_a525uWZv;
        }
    };
    hs_a625uWZx.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziInt.hs_zdfReadInt8);
    };
    hs_zdcreadsPrec125uWZy.evaluateOnce = function () {
        if (hs_a625uWZx.notEvaluated) {
            return hs_a625uWZx.hscall();
        } else {
            return hs_a625uWZx;
        }
    };
    this.hs_zdfReadCSChar.data = [hs_a625uWZx, hs_a525uWZv, hs_zdcreadPrec125uWZA, hs_zdcreadListPrec125uWZz];
    hs_zdcreadListPrec125uWZz.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCSChar);
    };
    hs_zdcreadPrec125uWZA.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCSChar);
    };
    hs_a725uWZB.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziInt.hs_zdfShowInt8);
    };
    hs_zdcshowList125uWZC.evaluateOnce = function () {
        if (hs_a725uWZB.notEvaluated) {
            return hs_a725uWZB.hscall();
        } else {
            return hs_a725uWZB;
        }
    };
    hs_a825uWZD.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziInt.hs_zdfShowInt8);
    };
    hs_zdcshow125uWZE.evaluateOnce = function () {
        if (hs_a825uWZD.notEvaluated) {
            return hs_a825uWZD.hscall();
        } else {
            return hs_a825uWZD;
        }
    };
    hs_a925uWZF.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziInt.hs_zdfShowInt8);
    };
    hs_zdcshowsPrec125uWZG.evaluateOnce = function () {
        if (hs_a925uWZF.notEvaluated) {
            return hs_a925uWZF.hscall();
        } else {
            return hs_a925uWZF;
        }
    };
    this.hs_zdfShowCSChar.data = [hs_a925uWZF, hs_a825uWZD, hs_a725uWZB];
    hs_a1025uWZH.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziWord.hs_zdfReadWord8);
    };
    hs_zdcreadList225uWZI.evaluateOnce = function () {
        if (hs_a1025uWZH.notEvaluated) {
            return hs_a1025uWZH.hscall();
        } else {
            return hs_a1025uWZH;
        }
    };
    hs_a1125uWZJ.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord8);
    };
    hs_zdcreadsPrec225uWZK.evaluateOnce = function () {
        if (hs_a1125uWZJ.notEvaluated) {
            return hs_a1125uWZJ.hscall();
        } else {
            return hs_a1125uWZJ;
        }
    };
    this.hs_zdfReadCUChar.data = [hs_a1125uWZJ, hs_a1025uWZH, hs_zdcreadPrec225uWZM, hs_zdcreadListPrec225uWZL];
    hs_zdcreadListPrec225uWZL.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCUChar);
    };
    hs_zdcreadPrec225uWZM.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCUChar);
    };
    hs_a1225uWZN.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziWord.hs_zdfShowWord8);
    };
    hs_zdcshowList225uWZO.evaluateOnce = function () {
        if (hs_a1225uWZN.notEvaluated) {
            return hs_a1225uWZN.hscall();
        } else {
            return hs_a1225uWZN;
        }
    };
    hs_a1325uWZP.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziWord.hs_zdfShowWord8);
    };
    hs_zdcshow225uWZQ.evaluateOnce = function () {
        if (hs_a1325uWZP.notEvaluated) {
            return hs_a1325uWZP.hscall();
        } else {
            return hs_a1325uWZP;
        }
    };
    hs_a1425uWZR.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziWord.hs_zdfShowWord8);
    };
    hs_zdcshowsPrec225uWZS.evaluateOnce = function () {
        if (hs_a1425uWZR.notEvaluated) {
            return hs_a1425uWZR.hscall();
        } else {
            return hs_a1425uWZR;
        }
    };
    this.hs_zdfShowCUChar.data = [hs_a1425uWZR, hs_a1325uWZP, hs_a1225uWZN];
    hs_a1525uWZT.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziInt.hs_zdfReadInt16);
    };
    hs_zdcreadList325uWZU.evaluateOnce = function () {
        if (hs_a1525uWZT.notEvaluated) {
            return hs_a1525uWZT.hscall();
        } else {
            return hs_a1525uWZT;
        }
    };
    hs_a1625uWZV.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziInt.hs_zdfReadInt16);
    };
    hs_zdcreadsPrec325uWZW.evaluateOnce = function () {
        if (hs_a1625uWZV.notEvaluated) {
            return hs_a1625uWZV.hscall();
        } else {
            return hs_a1625uWZV;
        }
    };
    this.hs_zdfReadCShort.data = [hs_a1625uWZV, hs_a1525uWZT, hs_zdcreadPrec325uWZY, hs_zdcreadListPrec325uWZX];
    hs_zdcreadListPrec325uWZX.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCShort);
    };
    hs_zdcreadPrec325uWZY.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCShort);
    };
    hs_a1725uWZZ.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziInt.hs_zdfShowInt16);
    };
    hs_zdcshowList325uX00.evaluateOnce = function () {
        if (hs_a1725uWZZ.notEvaluated) {
            return hs_a1725uWZZ.hscall();
        } else {
            return hs_a1725uWZZ;
        }
    };
    hs_a1825uX01.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziInt.hs_zdfShowInt16);
    };
    hs_zdcshow325uX02.evaluateOnce = function () {
        if (hs_a1825uX01.notEvaluated) {
            return hs_a1825uX01.hscall();
        } else {
            return hs_a1825uX01;
        }
    };
    hs_a1925uX03.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziInt.hs_zdfShowInt16);
    };
    hs_zdcshowsPrec325uX04.evaluateOnce = function () {
        if (hs_a1925uX03.notEvaluated) {
            return hs_a1925uX03.hscall();
        } else {
            return hs_a1925uX03;
        }
    };
    this.hs_zdfShowCShort.data = [hs_a1925uX03, hs_a1825uX01, hs_a1725uWZZ];
    hs_a2025uX05.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziWord.hs_zdfReadWord16);
    };
    hs_zdcreadList425uX06.evaluateOnce = function () {
        if (hs_a2025uX05.notEvaluated) {
            return hs_a2025uX05.hscall();
        } else {
            return hs_a2025uX05;
        }
    };
    hs_a2125uX07.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord16);
    };
    hs_zdcreadsPrec425uX08.evaluateOnce = function () {
        if (hs_a2125uX07.notEvaluated) {
            return hs_a2125uX07.hscall();
        } else {
            return hs_a2125uX07;
        }
    };
    this.hs_zdfReadCUShort.data = [hs_a2125uX07, hs_a2025uX05, hs_zdcreadPrec425uX0a, hs_zdcreadListPrec425uX09];
    hs_zdcreadListPrec425uX09.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCUShort);
    };
    hs_zdcreadPrec425uX0a.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCUShort);
    };
    hs_a2225uX0b.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziWord.hs_zdfShowWord16);
    };
    hs_zdcshowList425uX0c.evaluateOnce = function () {
        if (hs_a2225uX0b.notEvaluated) {
            return hs_a2225uX0b.hscall();
        } else {
            return hs_a2225uX0b;
        }
    };
    hs_a2325uX0d.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziWord.hs_zdfShowWord16);
    };
    hs_zdcshow425uX0e.evaluateOnce = function () {
        if (hs_a2325uX0d.notEvaluated) {
            return hs_a2325uX0d.hscall();
        } else {
            return hs_a2325uX0d;
        }
    };
    hs_a2425uX0f.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziWord.hs_zdfShowWord16);
    };
    hs_zdcshowsPrec425uX0g.evaluateOnce = function () {
        if (hs_a2425uX0f.notEvaluated) {
            return hs_a2425uX0f.hscall();
        } else {
            return hs_a2425uX0f;
        }
    };
    this.hs_zdfShowCUShort.data = [hs_a2425uX0f, hs_a2325uX0d, hs_a2225uX0b];
    hs_a2525uX0h.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziInt.hs_zdfReadInt32);
    };
    hs_zdcreadList525uX0i.evaluateOnce = function () {
        if (hs_a2525uX0h.notEvaluated) {
            return hs_a2525uX0h.hscall();
        } else {
            return hs_a2525uX0h;
        }
    };
    hs_a2625uX0j.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziInt.hs_zdfReadInt32);
    };
    hs_zdcreadsPrec525uX0k.evaluateOnce = function () {
        if (hs_a2625uX0j.notEvaluated) {
            return hs_a2625uX0j.hscall();
        } else {
            return hs_a2625uX0j;
        }
    };
    this.hs_zdfReadCInt.data = [hs_a2625uX0j, hs_a2525uX0h, hs_zdcreadPrec525uX0m, hs_zdcreadListPrec525uX0l];
    hs_zdcreadListPrec525uX0l.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCInt);
    };
    hs_zdcreadPrec525uX0m.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCInt);
    };
    hs_a2725uX0n.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshowList525uX0o.evaluateOnce = function () {
        if (hs_a2725uX0n.notEvaluated) {
            return hs_a2725uX0n.hscall();
        } else {
            return hs_a2725uX0n;
        }
    };
    hs_a2825uX0p.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshow525uX0q.evaluateOnce = function () {
        if (hs_a2825uX0p.notEvaluated) {
            return hs_a2825uX0p.hscall();
        } else {
            return hs_a2825uX0p;
        }
    };
    hs_a2925uX0r.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshowsPrec525uX0s.evaluateOnce = function () {
        if (hs_a2925uX0r.notEvaluated) {
            return hs_a2925uX0r.hscall();
        } else {
            return hs_a2925uX0r;
        }
    };
    this.hs_zdfShowCInt.data = [hs_a2925uX0r, hs_a2825uX0p, hs_a2725uX0n];
    hs_a3025uX0t.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadList625uX0u.evaluateOnce = function () {
        if (hs_a3025uX0t.notEvaluated) {
            return hs_a3025uX0t.hscall();
        } else {
            return hs_a3025uX0t;
        }
    };
    hs_a3125uX0v.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadsPrec625uX0w.evaluateOnce = function () {
        if (hs_a3125uX0v.notEvaluated) {
            return hs_a3125uX0v.hscall();
        } else {
            return hs_a3125uX0v;
        }
    };
    this.hs_zdfReadCUInt.data = [hs_a3125uX0v, hs_a3025uX0t, hs_zdcreadPrec625uX0y, hs_zdcreadListPrec625uX0x];
    hs_zdcreadListPrec625uX0x.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCUInt);
    };
    hs_zdcreadPrec625uX0y.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCUInt);
    };
    hs_a3225uX0z.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshowList625uX0A.evaluateOnce = function () {
        if (hs_a3225uX0z.notEvaluated) {
            return hs_a3225uX0z.hscall();
        } else {
            return hs_a3225uX0z;
        }
    };
    hs_a3325uX0B.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshow625uX0C.evaluateOnce = function () {
        if (hs_a3325uX0B.notEvaluated) {
            return hs_a3325uX0B.hscall();
        } else {
            return hs_a3325uX0B;
        }
    };
    hs_a3425uX0D.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshowsPrec625uX0E.evaluateOnce = function () {
        if (hs_a3425uX0D.notEvaluated) {
            return hs_a3425uX0D.hscall();
        } else {
            return hs_a3425uX0D;
        }
    };
    this.hs_zdfShowCUInt.data = [hs_a3425uX0D, hs_a3325uX0B, hs_a3225uX0z];
    hs_a3525uX0F.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziInt.hs_zdfReadInt32);
    };
    hs_zdcreadList725uX0G.evaluateOnce = function () {
        if (hs_a3525uX0F.notEvaluated) {
            return hs_a3525uX0F.hscall();
        } else {
            return hs_a3525uX0F;
        }
    };
    hs_a3625uX0H.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziInt.hs_zdfReadInt32);
    };
    hs_zdcreadsPrec725uX0I.evaluateOnce = function () {
        if (hs_a3625uX0H.notEvaluated) {
            return hs_a3625uX0H.hscall();
        } else {
            return hs_a3625uX0H;
        }
    };
    this.hs_zdfReadCLong.data = [hs_a3625uX0H, hs_a3525uX0F, hs_zdcreadPrec725uX0K, hs_zdcreadListPrec725uX0J];
    hs_zdcreadListPrec725uX0J.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCLong);
    };
    hs_zdcreadPrec725uX0K.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCLong);
    };
    hs_a3725uX0L.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshowList725uX0M.evaluateOnce = function () {
        if (hs_a3725uX0L.notEvaluated) {
            return hs_a3725uX0L.hscall();
        } else {
            return hs_a3725uX0L;
        }
    };
    hs_a3825uX0N.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshow725uX0O.evaluateOnce = function () {
        if (hs_a3825uX0N.notEvaluated) {
            return hs_a3825uX0N.hscall();
        } else {
            return hs_a3825uX0N;
        }
    };
    hs_a3925uX0P.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshowsPrec725uX0Q.evaluateOnce = function () {
        if (hs_a3925uX0P.notEvaluated) {
            return hs_a3925uX0P.hscall();
        } else {
            return hs_a3925uX0P;
        }
    };
    this.hs_zdfShowCLong.data = [hs_a3925uX0P, hs_a3825uX0N, hs_a3725uX0L];
    hs_a4025uX0R.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadList825uX0S.evaluateOnce = function () {
        if (hs_a4025uX0R.notEvaluated) {
            return hs_a4025uX0R.hscall();
        } else {
            return hs_a4025uX0R;
        }
    };
    hs_a4125uX0T.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadsPrec825uX0U.evaluateOnce = function () {
        if (hs_a4125uX0T.notEvaluated) {
            return hs_a4125uX0T.hscall();
        } else {
            return hs_a4125uX0T;
        }
    };
    this.hs_zdfReadCULong.data = [hs_a4125uX0T, hs_a4025uX0R, hs_zdcreadPrec825uX0W, hs_zdcreadListPrec825uX0V];
    hs_zdcreadListPrec825uX0V.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCULong);
    };
    hs_zdcreadPrec825uX0W.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCULong);
    };
    hs_a4225uX0X.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshowList825uX0Y.evaluateOnce = function () {
        if (hs_a4225uX0X.notEvaluated) {
            return hs_a4225uX0X.hscall();
        } else {
            return hs_a4225uX0X;
        }
    };
    hs_a4325uX0Z.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshow825uX10.evaluateOnce = function () {
        if (hs_a4325uX0Z.notEvaluated) {
            return hs_a4325uX0Z.hscall();
        } else {
            return hs_a4325uX0Z;
        }
    };
    hs_a4425uX11.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshowsPrec825uX12.evaluateOnce = function () {
        if (hs_a4425uX11.notEvaluated) {
            return hs_a4425uX11.hscall();
        } else {
            return hs_a4425uX11;
        }
    };
    this.hs_zdfShowCULong.data = [hs_a4425uX11, hs_a4325uX0Z, hs_a4225uX0X];
    hs_a4525uX13.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziInt.hs_zdfReadInt64);
    };
    hs_zdcreadList925uX14.evaluateOnce = function () {
        if (hs_a4525uX13.notEvaluated) {
            return hs_a4525uX13.hscall();
        } else {
            return hs_a4525uX13;
        }
    };
    hs_a4625uX15.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziInt.hs_zdfReadInt64);
    };
    hs_zdcreadsPrec925uX16.evaluateOnce = function () {
        if (hs_a4625uX15.notEvaluated) {
            return hs_a4625uX15.hscall();
        } else {
            return hs_a4625uX15;
        }
    };
    this.hs_zdfReadCLLong.data = [hs_a4625uX15, hs_a4525uX13, hs_zdcreadPrec925uX18, hs_zdcreadListPrec925uX17];
    hs_zdcreadListPrec925uX17.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCLLong);
    };
    hs_zdcreadPrec925uX18.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCLLong);
    };
    hs_a4725uX19.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziInt.hs_zdfShowInt64);
    };
    hs_zdcshowList925uX1a.evaluateOnce = function () {
        if (hs_a4725uX19.notEvaluated) {
            return hs_a4725uX19.hscall();
        } else {
            return hs_a4725uX19;
        }
    };
    hs_a4825uX1b.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziInt.hs_zdfShowInt64);
    };
    hs_zdcshow925uX1c.evaluateOnce = function () {
        if (hs_a4825uX1b.notEvaluated) {
            return hs_a4825uX1b.hscall();
        } else {
            return hs_a4825uX1b;
        }
    };
    hs_a4925uX1d.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziInt.hs_zdfShowInt64);
    };
    hs_zdcshowsPrec925uX1e.evaluateOnce = function () {
        if (hs_a4925uX1d.notEvaluated) {
            return hs_a4925uX1d.hscall();
        } else {
            return hs_a4925uX1d;
        }
    };
    this.hs_zdfShowCLLong.data = [hs_a4925uX1d, hs_a4825uX1b, hs_a4725uX19];
    hs_a5025uX1f.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziWord.hs_zdfReadWord64);
    };
    hs_zdcreadList1025uX1g.evaluateOnce = function () {
        if (hs_a5025uX1f.notEvaluated) {
            return hs_a5025uX1f.hscall();
        } else {
            return hs_a5025uX1f;
        }
    };
    hs_a5125uX1h.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord64);
    };
    hs_zdcreadsPrec1025uX1i.evaluateOnce = function () {
        if (hs_a5125uX1h.notEvaluated) {
            return hs_a5125uX1h.hscall();
        } else {
            return hs_a5125uX1h;
        }
    };
    this.hs_zdfReadCULLong.data = [hs_a5125uX1h, hs_a5025uX1f, hs_zdcreadPrec1025uX1k, hs_zdcreadListPrec1025uX1j];
    hs_zdcreadListPrec1025uX1j.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCULLong);
    };
    hs_zdcreadPrec1025uX1k.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCULLong);
    };
    hs_a5225uX1l.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziWord.hs_zdfShowWord64);
    };
    hs_zdcshowList1025uX1m.evaluateOnce = function () {
        if (hs_a5225uX1l.notEvaluated) {
            return hs_a5225uX1l.hscall();
        } else {
            return hs_a5225uX1l;
        }
    };
    hs_a5325uX1n.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziWord.hs_zdfShowWord64);
    };
    hs_zdcshow1025uX1o.evaluateOnce = function () {
        if (hs_a5325uX1n.notEvaluated) {
            return hs_a5325uX1n.hscall();
        } else {
            return hs_a5325uX1n;
        }
    };
    hs_a5425uX1p.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziWord.hs_zdfShowWord64);
    };
    hs_zdcshowsPrec1025uX1q.evaluateOnce = function () {
        if (hs_a5425uX1p.notEvaluated) {
            return hs_a5425uX1p.hscall();
        } else {
            return hs_a5425uX1p;
        }
    };
    this.hs_zdfShowCULLong.data = [hs_a5425uX1p, hs_a5325uX1n, hs_a5225uX1l];
    hs_a5525uX1r.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziRead.hs_zdfReadFloat);
    };
    hs_zdcreadList1125uX1s.evaluateOnce = function () {
        if (hs_a5525uX1r.notEvaluated) {
            return hs_a5525uX1r.hscall();
        } else {
            return hs_a5525uX1r;
        }
    };
    hs_a5625uX1t.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziRead.hs_zdfReadFloat);
    };
    hs_zdcreadsPrec1125uX1u.evaluateOnce = function () {
        if (hs_a5625uX1t.notEvaluated) {
            return hs_a5625uX1t.hscall();
        } else {
            return hs_a5625uX1t;
        }
    };
    this.hs_zdfReadCFloat.data = [hs_a5625uX1t, hs_a5525uX1r, hs_zdcreadPrec1125uX1w, hs_zdcreadListPrec1125uX1v];
    hs_zdcreadListPrec1125uX1v.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCFloat);
    };
    hs_zdcreadPrec1125uX1w.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCFloat);
    };
    hs_a5725uX1x.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziFloat.hs_zdfShowFloat);
    };
    hs_zdcshowList1125uX1y.evaluateOnce = function () {
        if (hs_a5725uX1x.notEvaluated) {
            return hs_a5725uX1x.hscall();
        } else {
            return hs_a5725uX1x;
        }
    };
    hs_a5825uX1z.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziFloat.hs_zdfShowFloat);
    };
    hs_zdcshow1125uX1A.evaluateOnce = function () {
        if (hs_a5825uX1z.notEvaluated) {
            return hs_a5825uX1z.hscall();
        } else {
            return hs_a5825uX1z;
        }
    };
    hs_a5925uX1B.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziFloat.hs_zdfShowFloat);
    };
    hs_zdcshowsPrec1125uX1C.evaluateOnce = function () {
        if (hs_a5925uX1B.notEvaluated) {
            return hs_a5925uX1B.hscall();
        } else {
            return hs_a5925uX1B;
        }
    };
    this.hs_zdfShowCFloat.data = [hs_a5925uX1B, hs_a5825uX1z, hs_a5725uX1x];
    hs_a6025uX1D.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziRead.hs_zdfReadDouble);
    };
    hs_zdcreadList1225uX1E.evaluateOnce = function () {
        if (hs_a6025uX1D.notEvaluated) {
            return hs_a6025uX1D.hscall();
        } else {
            return hs_a6025uX1D;
        }
    };
    hs_a6125uX1F.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziRead.hs_zdfReadDouble);
    };
    hs_zdcreadsPrec1225uX1G.evaluateOnce = function () {
        if (hs_a6125uX1F.notEvaluated) {
            return hs_a6125uX1F.hscall();
        } else {
            return hs_a6125uX1F;
        }
    };
    this.hs_zdfReadCDouble.data = [hs_a6125uX1F, hs_a6025uX1D, hs_zdcreadPrec1225uX1I, hs_zdcreadListPrec1225uX1H];
    hs_zdcreadListPrec1225uX1H.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCDouble);
    };
    hs_zdcreadPrec1225uX1I.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCDouble);
    };
    hs_a6225uX1J.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziFloat.hs_zdfShowDouble);
    };
    hs_zdcshowList1225uX1K.evaluateOnce = function () {
        if (hs_a6225uX1J.notEvaluated) {
            return hs_a6225uX1J.hscall();
        } else {
            return hs_a6225uX1J;
        }
    };
    hs_a6325uX1L.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziFloat.hs_zdfShowDouble);
    };
    hs_zdcshow1225uX1M.evaluateOnce = function () {
        if (hs_a6325uX1L.notEvaluated) {
            return hs_a6325uX1L.hscall();
        } else {
            return hs_a6325uX1L;
        }
    };
    hs_a6425uX1N.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziFloat.hs_zdfShowDouble);
    };
    hs_zdcshowsPrec1225uX1O.evaluateOnce = function () {
        if (hs_a6425uX1N.notEvaluated) {
            return hs_a6425uX1N.hscall();
        } else {
            return hs_a6425uX1N;
        }
    };
    this.hs_zdfShowCDouble.data = [hs_a6425uX1N, hs_a6325uX1L, hs_a6225uX1J];
    hs_a6525uX1P.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziInt.hs_zdfReadInt32);
    };
    hs_zdcreadList1325uX1Q.evaluateOnce = function () {
        if (hs_a6525uX1P.notEvaluated) {
            return hs_a6525uX1P.hscall();
        } else {
            return hs_a6525uX1P;
        }
    };
    hs_a6625uX1R.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziInt.hs_zdfReadInt32);
    };
    hs_zdcreadsPrec1325uX1S.evaluateOnce = function () {
        if (hs_a6625uX1R.notEvaluated) {
            return hs_a6625uX1R.hscall();
        } else {
            return hs_a6625uX1R;
        }
    };
    this.hs_zdfReadCPtrdiff.data = [hs_a6625uX1R, hs_a6525uX1P, hs_zdcreadPrec1325uX1U, hs_zdcreadListPrec1325uX1T];
    hs_zdcreadListPrec1325uX1T.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCPtrdiff);
    };
    hs_zdcreadPrec1325uX1U.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCPtrdiff);
    };
    hs_a6725uX1V.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshowList1325uX1W.evaluateOnce = function () {
        if (hs_a6725uX1V.notEvaluated) {
            return hs_a6725uX1V.hscall();
        } else {
            return hs_a6725uX1V;
        }
    };
    hs_a6825uX1X.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshow1325uX1Y.evaluateOnce = function () {
        if (hs_a6825uX1X.notEvaluated) {
            return hs_a6825uX1X.hscall();
        } else {
            return hs_a6825uX1X;
        }
    };
    hs_a6925uX1Z.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshowsPrec1325uX20.evaluateOnce = function () {
        if (hs_a6925uX1Z.notEvaluated) {
            return hs_a6925uX1Z.hscall();
        } else {
            return hs_a6925uX1Z;
        }
    };
    this.hs_zdfShowCPtrdiff.data = [hs_a6925uX1Z, hs_a6825uX1X, hs_a6725uX1V];
    hs_a7025uX21.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadList1425uX22.evaluateOnce = function () {
        if (hs_a7025uX21.notEvaluated) {
            return hs_a7025uX21.hscall();
        } else {
            return hs_a7025uX21;
        }
    };
    hs_a7125uX23.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadsPrec1425uX24.evaluateOnce = function () {
        if (hs_a7125uX23.notEvaluated) {
            return hs_a7125uX23.hscall();
        } else {
            return hs_a7125uX23;
        }
    };
    this.hs_zdfReadCSizze.data = [hs_a7125uX23, hs_a7025uX21, hs_zdcreadPrec1425uX26, hs_zdcreadListPrec1425uX25];
    hs_zdcreadListPrec1425uX25.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCSizze);
    };
    hs_zdcreadPrec1425uX26.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCSizze);
    };
    hs_a7225uX27.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshowList1425uX28.evaluateOnce = function () {
        if (hs_a7225uX27.notEvaluated) {
            return hs_a7225uX27.hscall();
        } else {
            return hs_a7225uX27;
        }
    };
    hs_a7325uX29.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshow1425uX2a.evaluateOnce = function () {
        if (hs_a7325uX29.notEvaluated) {
            return hs_a7325uX29.hscall();
        } else {
            return hs_a7325uX29;
        }
    };
    hs_a7425uX2b.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshowsPrec1425uX2c.evaluateOnce = function () {
        if (hs_a7425uX2b.notEvaluated) {
            return hs_a7425uX2b.hscall();
        } else {
            return hs_a7425uX2b;
        }
    };
    this.hs_zdfShowCSizze.data = [hs_a7425uX2b, hs_a7325uX29, hs_a7225uX27];
    hs_a7525uX2d.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziInt.hs_zdfReadInt32);
    };
    hs_zdcreadList1525uX2e.evaluateOnce = function () {
        if (hs_a7525uX2d.notEvaluated) {
            return hs_a7525uX2d.hscall();
        } else {
            return hs_a7525uX2d;
        }
    };
    hs_a7625uX2f.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziInt.hs_zdfReadInt32);
    };
    hs_zdcreadsPrec1525uX2g.evaluateOnce = function () {
        if (hs_a7625uX2f.notEvaluated) {
            return hs_a7625uX2f.hscall();
        } else {
            return hs_a7625uX2f;
        }
    };
    this.hs_zdfReadCWchar.data = [hs_a7625uX2f, hs_a7525uX2d, hs_zdcreadPrec1525uX2i, hs_zdcreadListPrec1525uX2h];
    hs_zdcreadListPrec1525uX2h.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCWchar);
    };
    hs_zdcreadPrec1525uX2i.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCWchar);
    };
    hs_a7725uX2j.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshowList1525uX2k.evaluateOnce = function () {
        if (hs_a7725uX2j.notEvaluated) {
            return hs_a7725uX2j.hscall();
        } else {
            return hs_a7725uX2j;
        }
    };
    hs_a7825uX2l.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshow1525uX2m.evaluateOnce = function () {
        if (hs_a7825uX2l.notEvaluated) {
            return hs_a7825uX2l.hscall();
        } else {
            return hs_a7825uX2l;
        }
    };
    hs_a7925uX2n.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshowsPrec1525uX2o.evaluateOnce = function () {
        if (hs_a7925uX2n.notEvaluated) {
            return hs_a7925uX2n.hscall();
        } else {
            return hs_a7925uX2n;
        }
    };
    this.hs_zdfShowCWchar.data = [hs_a7925uX2n, hs_a7825uX2l, hs_a7725uX2j];
    hs_a8025uX2p.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziInt.hs_zdfReadInt32);
    };
    hs_zdcreadList1625uX2q.evaluateOnce = function () {
        if (hs_a8025uX2p.notEvaluated) {
            return hs_a8025uX2p.hscall();
        } else {
            return hs_a8025uX2p;
        }
    };
    hs_a8125uX2r.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziInt.hs_zdfReadInt32);
    };
    hs_zdcreadsPrec1625uX2s.evaluateOnce = function () {
        if (hs_a8125uX2r.notEvaluated) {
            return hs_a8125uX2r.hscall();
        } else {
            return hs_a8125uX2r;
        }
    };
    this.hs_zdfReadCSigAtomic.data = [hs_a8125uX2r, hs_a8025uX2p, hs_zdcreadPrec1625uX2u, hs_zdcreadListPrec1625uX2t];
    hs_zdcreadListPrec1625uX2t.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCSigAtomic);
    };
    hs_zdcreadPrec1625uX2u.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCSigAtomic);
    };
    hs_a8225uX2v.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshowList1625uX2w.evaluateOnce = function () {
        if (hs_a8225uX2v.notEvaluated) {
            return hs_a8225uX2v.hscall();
        } else {
            return hs_a8225uX2v;
        }
    };
    hs_a8325uX2x.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshow1625uX2y.evaluateOnce = function () {
        if (hs_a8325uX2x.notEvaluated) {
            return hs_a8325uX2x.hscall();
        } else {
            return hs_a8325uX2x;
        }
    };
    hs_a8425uX2z.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshowsPrec1625uX2A.evaluateOnce = function () {
        if (hs_a8425uX2z.notEvaluated) {
            return hs_a8425uX2z.hscall();
        } else {
            return hs_a8425uX2z;
        }
    };
    this.hs_zdfShowCSigAtomic.data = [hs_a8425uX2z, hs_a8325uX2x, hs_a8225uX2v];
    hs_a8525uX2B.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziInt.hs_zdfReadInt32);
    };
    hs_zdcreadList1725uX2C.evaluateOnce = function () {
        if (hs_a8525uX2B.notEvaluated) {
            return hs_a8525uX2B.hscall();
        } else {
            return hs_a8525uX2B;
        }
    };
    hs_a8625uX2D.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziInt.hs_zdfReadInt32);
    };
    hs_zdcreadsPrec1725uX2E.evaluateOnce = function () {
        if (hs_a8625uX2D.notEvaluated) {
            return hs_a8625uX2D.hscall();
        } else {
            return hs_a8625uX2D;
        }
    };
    this.hs_zdfReadCClock.data = [hs_a8625uX2D, hs_a8525uX2B, hs_zdcreadPrec1725uX2G, hs_zdcreadListPrec1725uX2F];
    hs_zdcreadListPrec1725uX2F.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCClock);
    };
    hs_zdcreadPrec1725uX2G.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCClock);
    };
    hs_a8725uX2H.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshowList1725uX2I.evaluateOnce = function () {
        if (hs_a8725uX2H.notEvaluated) {
            return hs_a8725uX2H.hscall();
        } else {
            return hs_a8725uX2H;
        }
    };
    hs_a8825uX2J.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshow1725uX2K.evaluateOnce = function () {
        if (hs_a8825uX2J.notEvaluated) {
            return hs_a8825uX2J.hscall();
        } else {
            return hs_a8825uX2J;
        }
    };
    hs_a8925uX2L.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshowsPrec1725uX2M.evaluateOnce = function () {
        if (hs_a8925uX2L.notEvaluated) {
            return hs_a8925uX2L.hscall();
        } else {
            return hs_a8925uX2L;
        }
    };
    this.hs_zdfShowCClock.data = [hs_a8925uX2L, hs_a8825uX2J, hs_a8725uX2H];
    hs_a9025uX2N.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziInt.hs_zdfReadInt32);
    };
    hs_zdcreadList1825uX2O.evaluateOnce = function () {
        if (hs_a9025uX2N.notEvaluated) {
            return hs_a9025uX2N.hscall();
        } else {
            return hs_a9025uX2N;
        }
    };
    hs_a9125uX2P.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziInt.hs_zdfReadInt32);
    };
    hs_zdcreadsPrec1825uX2Q.evaluateOnce = function () {
        if (hs_a9125uX2P.notEvaluated) {
            return hs_a9125uX2P.hscall();
        } else {
            return hs_a9125uX2P;
        }
    };
    this.hs_zdfReadCTime.data = [hs_a9125uX2P, hs_a9025uX2N, hs_zdcreadPrec1825uX2S, hs_zdcreadListPrec1825uX2R];
    hs_zdcreadListPrec1825uX2R.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCTime);
    };
    hs_zdcreadPrec1825uX2S.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCTime);
    };
    hs_a9225uX2T.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshowList1825uX2U.evaluateOnce = function () {
        if (hs_a9225uX2T.notEvaluated) {
            return hs_a9225uX2T.hscall();
        } else {
            return hs_a9225uX2T;
        }
    };
    hs_a9325uX2V.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshow1825uX2W.evaluateOnce = function () {
        if (hs_a9325uX2V.notEvaluated) {
            return hs_a9325uX2V.hscall();
        } else {
            return hs_a9325uX2V;
        }
    };
    hs_a9425uX2X.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshowsPrec1825uX2Y.evaluateOnce = function () {
        if (hs_a9425uX2X.notEvaluated) {
            return hs_a9425uX2X.hscall();
        } else {
            return hs_a9425uX2X;
        }
    };
    this.hs_zdfShowCTime.data = [hs_a9425uX2X, hs_a9325uX2V, hs_a9225uX2T];
    hs_a9525uX2Z.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadList1925uX30.evaluateOnce = function () {
        if (hs_a9525uX2Z.notEvaluated) {
            return hs_a9525uX2Z.hscall();
        } else {
            return hs_a9525uX2Z;
        }
    };
    hs_a9625uX31.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadsPrec1925uX32.evaluateOnce = function () {
        if (hs_a9625uX31.notEvaluated) {
            return hs_a9625uX31.hscall();
        } else {
            return hs_a9625uX31;
        }
    };
    this.hs_zdfReadCUSeconds.data = [hs_a9625uX31, hs_a9525uX2Z, hs_zdcreadPrec1925uX34, hs_zdcreadListPrec1925uX33];
    hs_zdcreadListPrec1925uX33.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCUSeconds);
    };
    hs_zdcreadPrec1925uX34.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCUSeconds);
    };
    hs_a9725uX35.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshowList1925uX36.evaluateOnce = function () {
        if (hs_a9725uX35.notEvaluated) {
            return hs_a9725uX35.hscall();
        } else {
            return hs_a9725uX35;
        }
    };
    hs_a9825uX37.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshow1925uX38.evaluateOnce = function () {
        if (hs_a9825uX37.notEvaluated) {
            return hs_a9825uX37.hscall();
        } else {
            return hs_a9825uX37;
        }
    };
    hs_a9925uX39.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshowsPrec1925uX3a.evaluateOnce = function () {
        if (hs_a9925uX39.notEvaluated) {
            return hs_a9925uX39.hscall();
        } else {
            return hs_a9925uX39;
        }
    };
    this.hs_zdfShowCUSeconds.data = [hs_a9925uX39, hs_a9825uX37, hs_a9725uX35];
    hs_a10025uX3b.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziInt.hs_zdfReadInt32);
    };
    hs_zdcreadList2025uX3c.evaluateOnce = function () {
        if (hs_a10025uX3b.notEvaluated) {
            return hs_a10025uX3b.hscall();
        } else {
            return hs_a10025uX3b;
        }
    };
    hs_a10125uX3d.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziInt.hs_zdfReadInt32);
    };
    hs_zdcreadsPrec2025uX3e.evaluateOnce = function () {
        if (hs_a10125uX3d.notEvaluated) {
            return hs_a10125uX3d.hscall();
        } else {
            return hs_a10125uX3d;
        }
    };
    this.hs_zdfReadCSUSeconds.data = [hs_a10125uX3d, hs_a10025uX3b, hs_zdcreadPrec2025uX3g, hs_zdcreadListPrec2025uX3f];
    hs_zdcreadListPrec2025uX3f.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCSUSeconds);
    };
    hs_zdcreadPrec2025uX3g.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCSUSeconds);
    };
    hs_a10225uX3h.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshowList2025uX3i.evaluateOnce = function () {
        if (hs_a10225uX3h.notEvaluated) {
            return hs_a10225uX3h.hscall();
        } else {
            return hs_a10225uX3h;
        }
    };
    hs_a10325uX3j.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshow2025uX3k.evaluateOnce = function () {
        if (hs_a10325uX3j.notEvaluated) {
            return hs_a10325uX3j.hscall();
        } else {
            return hs_a10325uX3j;
        }
    };
    hs_a10425uX3l.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshowsPrec2025uX3m.evaluateOnce = function () {
        if (hs_a10425uX3l.notEvaluated) {
            return hs_a10425uX3l.hscall();
        } else {
            return hs_a10425uX3l;
        }
    };
    this.hs_zdfShowCSUSeconds.data = [hs_a10425uX3l, hs_a10325uX3j, hs_a10225uX3h];
    hs_a10525uX3n.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziInt.hs_zdfReadInt32);
    };
    hs_zdcreadList2125uX3o.evaluateOnce = function () {
        if (hs_a10525uX3n.notEvaluated) {
            return hs_a10525uX3n.hscall();
        } else {
            return hs_a10525uX3n;
        }
    };
    hs_a10625uX3p.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziInt.hs_zdfReadInt32);
    };
    hs_zdcreadsPrec2125uX3q.evaluateOnce = function () {
        if (hs_a10625uX3p.notEvaluated) {
            return hs_a10625uX3p.hscall();
        } else {
            return hs_a10625uX3p;
        }
    };
    this.hs_zdfReadCIntPtr.data = [hs_a10625uX3p, hs_a10525uX3n, hs_zdcreadPrec2125uX3s, hs_zdcreadListPrec2125uX3r];
    hs_zdcreadListPrec2125uX3r.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCIntPtr);
    };
    hs_zdcreadPrec2125uX3s.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCIntPtr);
    };
    hs_a10725uX3t.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshowList2125uX3u.evaluateOnce = function () {
        if (hs_a10725uX3t.notEvaluated) {
            return hs_a10725uX3t.hscall();
        } else {
            return hs_a10725uX3t;
        }
    };
    hs_a10825uX3v.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshow2125uX3w.evaluateOnce = function () {
        if (hs_a10825uX3v.notEvaluated) {
            return hs_a10825uX3v.hscall();
        } else {
            return hs_a10825uX3v;
        }
    };
    hs_a10925uX3x.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshowsPrec2125uX3y.evaluateOnce = function () {
        if (hs_a10925uX3x.notEvaluated) {
            return hs_a10925uX3x.hscall();
        } else {
            return hs_a10925uX3x;
        }
    };
    this.hs_zdfShowCIntPtr.data = [hs_a10925uX3x, hs_a10825uX3v, hs_a10725uX3t];
    hs_a11025uX3z.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadList2225uX3A.evaluateOnce = function () {
        if (hs_a11025uX3z.notEvaluated) {
            return hs_a11025uX3z.hscall();
        } else {
            return hs_a11025uX3z;
        }
    };
    hs_a11125uX3B.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadsPrec2225uX3C.evaluateOnce = function () {
        if (hs_a11125uX3B.notEvaluated) {
            return hs_a11125uX3B.hscall();
        } else {
            return hs_a11125uX3B;
        }
    };
    this.hs_zdfReadCUIntPtr.data = [hs_a11125uX3B, hs_a11025uX3z, hs_zdcreadPrec2225uX3E, hs_zdcreadListPrec2225uX3D];
    hs_zdcreadListPrec2225uX3D.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCUIntPtr);
    };
    hs_zdcreadPrec2225uX3E.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCUIntPtr);
    };
    hs_a11225uX3F.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshowList2225uX3G.evaluateOnce = function () {
        if (hs_a11225uX3F.notEvaluated) {
            return hs_a11225uX3F.hscall();
        } else {
            return hs_a11225uX3F;
        }
    };
    hs_a11325uX3H.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshow2225uX3I.evaluateOnce = function () {
        if (hs_a11325uX3H.notEvaluated) {
            return hs_a11325uX3H.hscall();
        } else {
            return hs_a11325uX3H;
        }
    };
    hs_a11425uX3J.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshowsPrec2225uX3K.evaluateOnce = function () {
        if (hs_a11425uX3J.notEvaluated) {
            return hs_a11425uX3J.hscall();
        } else {
            return hs_a11425uX3J;
        }
    };
    this.hs_zdfShowCUIntPtr.data = [hs_a11425uX3J, hs_a11325uX3H, hs_a11225uX3F];
    hs_a11525uX3L.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziInt.hs_zdfReadInt64);
    };
    hs_zdcreadList2325uX3M.evaluateOnce = function () {
        if (hs_a11525uX3L.notEvaluated) {
            return hs_a11525uX3L.hscall();
        } else {
            return hs_a11525uX3L;
        }
    };
    hs_a11625uX3N.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziInt.hs_zdfReadInt64);
    };
    hs_zdcreadsPrec2325uX3O.evaluateOnce = function () {
        if (hs_a11625uX3N.notEvaluated) {
            return hs_a11625uX3N.hscall();
        } else {
            return hs_a11625uX3N;
        }
    };
    this.hs_zdfReadCIntMax.data = [hs_a11625uX3N, hs_a11525uX3L, hs_zdcreadPrec2325uX3Q, hs_zdcreadListPrec2325uX3P];
    hs_zdcreadListPrec2325uX3P.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCIntMax);
    };
    hs_zdcreadPrec2325uX3Q.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCIntMax);
    };
    hs_a11725uX3R.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziInt.hs_zdfShowInt64);
    };
    hs_zdcshowList2325uX3S.evaluateOnce = function () {
        if (hs_a11725uX3R.notEvaluated) {
            return hs_a11725uX3R.hscall();
        } else {
            return hs_a11725uX3R;
        }
    };
    hs_a11825uX3T.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziInt.hs_zdfShowInt64);
    };
    hs_zdcshow2325uX3U.evaluateOnce = function () {
        if (hs_a11825uX3T.notEvaluated) {
            return hs_a11825uX3T.hscall();
        } else {
            return hs_a11825uX3T;
        }
    };
    hs_a11925uX3V.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziInt.hs_zdfShowInt64);
    };
    hs_zdcshowsPrec2325uX3W.evaluateOnce = function () {
        if (hs_a11925uX3V.notEvaluated) {
            return hs_a11925uX3V.hscall();
        } else {
            return hs_a11925uX3V;
        }
    };
    this.hs_zdfShowCIntMax.data = [hs_a11925uX3V, hs_a11825uX3T, hs_a11725uX3R];
    hs_a12025uX3X.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziWord.hs_zdfReadWord64);
    };
    hs_zdcreadList2425uX3Y.evaluateOnce = function () {
        if (hs_a12025uX3X.notEvaluated) {
            return hs_a12025uX3X.hscall();
        } else {
            return hs_a12025uX3X;
        }
    };
    hs_a12125uX3Z.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord64);
    };
    hs_zdcreadsPrec2425uX40.evaluateOnce = function () {
        if (hs_a12125uX3Z.notEvaluated) {
            return hs_a12125uX3Z.hscall();
        } else {
            return hs_a12125uX3Z;
        }
    };
    this.hs_zdfReadCUIntMax.data = [hs_a12125uX3Z, hs_a12025uX3X, hs_zdcreadPrec2425uX42, hs_zdcreadListPrec2425uX41];
    hs_zdcreadListPrec2425uX41.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCUIntMax);
    };
    hs_zdcreadPrec2425uX42.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCUIntMax);
    };
    hs_a12225uX43.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziWord.hs_zdfShowWord64);
    };
    hs_zdcshowList2425uX44.evaluateOnce = function () {
        if (hs_a12225uX43.notEvaluated) {
            return hs_a12225uX43.hscall();
        } else {
            return hs_a12225uX43;
        }
    };
    hs_a12325uX45.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziWord.hs_zdfShowWord64);
    };
    hs_zdcshow2425uX46.evaluateOnce = function () {
        if (hs_a12325uX45.notEvaluated) {
            return hs_a12325uX45.hscall();
        } else {
            return hs_a12325uX45;
        }
    };
    hs_a12425uX47.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziWord.hs_zdfShowWord64);
    };
    hs_zdcshowsPrec2425uX48.evaluateOnce = function () {
        if (hs_a12425uX47.notEvaluated) {
            return hs_a12425uX47.hscall();
        } else {
            return hs_a12425uX47;
        }
    };
    this.hs_zdfShowCUIntMax.data = [hs_a12425uX47, hs_a12325uX45, hs_a12225uX43];
    hs_a12525uX49.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdczizazi25uX4a.evaluateOnce = function () {
        if (hs_a12525uX49.notEvaluated) {
            return hs_a12525uX49.hscall();
        } else {
            return hs_a12525uX49;
        }
    };
    hs_a12625uX4b.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdczizbzi25uX4c.evaluateOnce = function () {
        if (hs_a12625uX4b.notEvaluated) {
            return hs_a12625uX4b.hscall();
        } else {
            return hs_a12625uX4b;
        }
    };
    hs_a12725uX4d.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcxor25uX4e.evaluateOnce = function () {
        if (hs_a12725uX4d.notEvaluated) {
            return hs_a12725uX4d.hscall();
        } else {
            return hs_a12725uX4d;
        }
    };
    hs_a12825uX4f.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdccomplement25uX4g.evaluateOnce = function () {
        if (hs_a12825uX4f.notEvaluated) {
            return hs_a12825uX4f.hscall();
        } else {
            return hs_a12825uX4f;
        }
    };
    hs_a12925uX4h.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcshift25uX4i.evaluateOnce = function () {
        if (hs_a12925uX4h.notEvaluated) {
            return hs_a12925uX4h.hscall();
        } else {
            return hs_a12925uX4h;
        }
    };
    hs_a13025uX4j.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcrotate25uX4k.evaluateOnce = function () {
        if (hs_a13025uX4j.notEvaluated) {
            return hs_a13025uX4j.hscall();
        } else {
            return hs_a13025uX4j;
        }
    };
    hs_a13125uX4l.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcbit25uX4m.evaluateOnce = function () {
        if (hs_a13125uX4l.notEvaluated) {
            return hs_a13125uX4l.hscall();
        } else {
            return hs_a13125uX4l;
        }
    };
    hs_a13225uX4n.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcsetBit25uX4o.evaluateOnce = function () {
        if (hs_a13225uX4n.notEvaluated) {
            return hs_a13225uX4n.hscall();
        } else {
            return hs_a13225uX4n;
        }
    };
    hs_a13325uX4p.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcclearBit25uX4q.evaluateOnce = function () {
        if (hs_a13325uX4p.notEvaluated) {
            return hs_a13325uX4p.hscall();
        } else {
            return hs_a13325uX4p;
        }
    };
    hs_a13425uX4r.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdccomplementBit25uX4s.evaluateOnce = function () {
        if (hs_a13425uX4r.notEvaluated) {
            return hs_a13425uX4r.hscall();
        } else {
            return hs_a13425uX4r;
        }
    };
    hs_a13525uX4t.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdctestBit25uX4u.evaluateOnce = function () {
        if (hs_a13525uX4t.notEvaluated) {
            return hs_a13525uX4t.hscall();
        } else {
            return hs_a13525uX4t;
        }
    };
    hs_a13625uX4v.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcbitSizze25uX4w.evaluateOnce = function () {
        if (hs_a13625uX4v.notEvaluated) {
            return hs_a13625uX4v.hscall();
        } else {
            return hs_a13625uX4v;
        }
    };
    hs_a13725uX4x.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcisSigned25uX4y.evaluateOnce = function () {
        if (hs_a13725uX4x.notEvaluated) {
            return hs_a13725uX4x.hscall();
        } else {
            return hs_a13725uX4x;
        }
    };
    hs_a13825uX4z.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcshiftL25uX4A.evaluateOnce = function () {
        if (hs_a13825uX4z.notEvaluated) {
            return hs_a13825uX4z.hscall();
        } else {
            return hs_a13825uX4z;
        }
    };
    hs_a13925uX4B.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcshiftR25uX4C.evaluateOnce = function () {
        if (hs_a13925uX4B.notEvaluated) {
            return hs_a13925uX4B.hscall();
        } else {
            return hs_a13925uX4B;
        }
    };
    hs_a14025uX4D.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcrotateL25uX4E.evaluateOnce = function () {
        if (hs_a14025uX4D.notEvaluated) {
            return hs_a14025uX4D.hscall();
        } else {
            return hs_a14025uX4D;
        }
    };
    hs_a14125uX4F.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcrotateR25uX4G.evaluateOnce = function () {
        if (hs_a14125uX4F.notEvaluated) {
            return hs_a14125uX4F.hscall();
        } else {
            return hs_a14125uX4F;
        }
    };
    hs_a14225uX4H.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcquot25uX4I.evaluateOnce = function () {
        if (hs_a14225uX4H.notEvaluated) {
            return hs_a14225uX4H.hscall();
        } else {
            return hs_a14225uX4H;
        }
    };
    hs_a14325uX4J.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcrem25uX4K.evaluateOnce = function () {
        if (hs_a14325uX4J.notEvaluated) {
            return hs_a14325uX4J.hscall();
        } else {
            return hs_a14325uX4J;
        }
    };
    hs_a14425uX4L.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcdiv25uX4M.evaluateOnce = function () {
        if (hs_a14425uX4L.notEvaluated) {
            return hs_a14425uX4L.hscall();
        } else {
            return hs_a14425uX4L;
        }
    };
    hs_a14525uX4N.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcmod25uX4O.evaluateOnce = function () {
        if (hs_a14525uX4N.notEvaluated) {
            return hs_a14525uX4N.hscall();
        } else {
            return hs_a14525uX4N;
        }
    };
    hs_a14625uX4P.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcquotRem25uX4Q.evaluateOnce = function () {
        if (hs_a14625uX4P.notEvaluated) {
            return hs_a14625uX4P.hscall();
        } else {
            return hs_a14625uX4P;
        }
    };
    hs_a14725uX4R.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcdivMod25uX4S.evaluateOnce = function () {
        if (hs_a14725uX4R.notEvaluated) {
            return hs_a14725uX4R.hscall();
        } else {
            return hs_a14725uX4R;
        }
    };
    hs_a14825uX4T.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdctoInteger25uX4U.evaluateOnce = function () {
        if (hs_a14825uX4T.notEvaluated) {
            return hs_a14825uX4T.hscall();
        } else {
            return hs_a14825uX4T;
        }
    };
    hs_a14925uX4V.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord64);
    };
    hs_zdcminBound25uX4W.evaluateOnce = function () {
        if (hs_a14925uX4V.notEvaluated) {
            return hs_a14925uX4V.hscall();
        } else {
            return hs_a14925uX4V;
        }
    };
    hs_a15025uX4X.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord64);
    };
    hs_zdcmaxBound25uX4Y.evaluateOnce = function () {
        if (hs_a15025uX4X.notEvaluated) {
            return hs_a15025uX4X.hscall();
        } else {
            return hs_a15025uX4X;
        }
    };
    this.hs_zdfBoundedCUIntMax.data = [hs_a14925uX4V, hs_a15025uX4X];
    hs_a15125uX4Z.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziWord.hs_zdfRealWord64);
    };
    hs_zdctoRational25uX50.evaluateOnce = function () {
        if (hs_a15125uX4Z.notEvaluated) {
            return hs_a15125uX4Z.hscall();
        } else {
            return hs_a15125uX4Z;
        }
    };
    hs_a15225uX51.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcsizzeOf25uX52.evaluateOnce = function () {
        if (hs_a15225uX51.notEvaluated) {
            return hs_a15225uX51.hscall();
        } else {
            return hs_a15225uX51;
        }
    };
    hs_a15325uX53.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcalignment25uX54.evaluateOnce = function () {
        if (hs_a15325uX53.notEvaluated) {
            return hs_a15325uX53.hscall();
        } else {
            return hs_a15325uX53;
        }
    };
    hs_a15425uX55.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpeekElemOff25uX56.evaluateOnce = function () {
        if (hs_a15425uX55.notEvaluated) {
            return hs_a15425uX55.hscall();
        } else {
            return hs_a15425uX55;
        }
    };
    hs_a15525uX57.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpokeElemOff25uX58.evaluateOnce = function () {
        if (hs_a15525uX57.notEvaluated) {
            return hs_a15525uX57.hscall();
        } else {
            return hs_a15525uX57;
        }
    };
    hs_a15625uX59.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpeekByteOff25uX5a.evaluateOnce = function () {
        if (hs_a15625uX59.notEvaluated) {
            return hs_a15625uX59.hscall();
        } else {
            return hs_a15625uX59;
        }
    };
    hs_a15725uX5b.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpokeByteOff25uX5c.evaluateOnce = function () {
        if (hs_a15725uX5b.notEvaluated) {
            return hs_a15725uX5b.hscall();
        } else {
            return hs_a15725uX5b;
        }
    };
    hs_a15825uX5d.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpeek25uX5e.evaluateOnce = function () {
        if (hs_a15825uX5d.notEvaluated) {
            return hs_a15825uX5d.hscall();
        } else {
            return hs_a15825uX5d;
        }
    };
    hs_a15925uX5f.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpoke25uX5g.evaluateOnce = function () {
        if (hs_a15925uX5f.notEvaluated) {
            return hs_a15925uX5f.hscall();
        } else {
            return hs_a15925uX5f;
        }
    };
    this.hs_zdfStorableCUIntMax.data = [hs_a15225uX51, hs_a15325uX53, hs_a15425uX55, hs_a15525uX57, hs_a15625uX59, hs_a15725uX5b, hs_a15825uX5d, hs_a15925uX5f];
    hs_a16025uX5h.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcsucc25uX5i.evaluateOnce = function () {
        if (hs_a16025uX5h.notEvaluated) {
            return hs_a16025uX5h.hscall();
        } else {
            return hs_a16025uX5h;
        }
    };
    hs_a16125uX5j.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcpred25uX5k.evaluateOnce = function () {
        if (hs_a16125uX5j.notEvaluated) {
            return hs_a16125uX5j.hscall();
        } else {
            return hs_a16125uX5j;
        }
    };
    hs_a16225uX5l.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdctoEnum25uX5m.evaluateOnce = function () {
        if (hs_a16225uX5l.notEvaluated) {
            return hs_a16225uX5l.hscall();
        } else {
            return hs_a16225uX5l;
        }
    };
    hs_a16325uX5n.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcfromEnum25uX5o.evaluateOnce = function () {
        if (hs_a16325uX5n.notEvaluated) {
            return hs_a16325uX5n.hscall();
        } else {
            return hs_a16325uX5n;
        }
    };
    hs_a16425uX5p.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcenumFrom25uX5q.evaluateOnce = function () {
        if (hs_a16425uX5p.notEvaluated) {
            return hs_a16425uX5p.hscall();
        } else {
            return hs_a16425uX5p;
        }
    };
    hs_a16525uX5r.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcenumFromThen25uX5s.evaluateOnce = function () {
        if (hs_a16525uX5r.notEvaluated) {
            return hs_a16525uX5r.hscall();
        } else {
            return hs_a16525uX5r;
        }
    };
    hs_a16625uX5t.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcenumFromTo25uX5u.evaluateOnce = function () {
        if (hs_a16625uX5t.notEvaluated) {
            return hs_a16625uX5t.hscall();
        } else {
            return hs_a16625uX5t;
        }
    };
    hs_a16725uX5v.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcenumFromThenTo25uX5w.evaluateOnce = function () {
        if (hs_a16725uX5v.notEvaluated) {
            return hs_a16725uX5v.hscall();
        } else {
            return hs_a16725uX5v;
        }
    };
    this.hs_zdfEnumCUIntMax.data = [hs_a16025uX5h, hs_a16125uX5j, hs_a16225uX5l, hs_a16325uX5n, hs_a16425uX5p, hs_a16525uX5r, hs_a16625uX5t, hs_a16725uX5v];
    hs_a16825uX5x.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdczp25uX5y.evaluateOnce = function () {
        if (hs_a16825uX5x.notEvaluated) {
            return hs_a16825uX5x.hscall();
        } else {
            return hs_a16825uX5x;
        }
    };
    hs_a16925uX5z.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdczt25uX5A.evaluateOnce = function () {
        if (hs_a16925uX5z.notEvaluated) {
            return hs_a16925uX5z.hscall();
        } else {
            return hs_a16925uX5z;
        }
    };
    hs_a17025uX5B.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdczm25uX5C.evaluateOnce = function () {
        if (hs_a17025uX5B.notEvaluated) {
            return hs_a17025uX5B.hscall();
        } else {
            return hs_a17025uX5B;
        }
    };
    hs_a17125uX5D.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdcnegate25uX5E.evaluateOnce = function () {
        if (hs_a17125uX5D.notEvaluated) {
            return hs_a17125uX5D.hscall();
        } else {
            return hs_a17125uX5D;
        }
    };
    hs_a17225uX5F.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdcabs25uX5G.evaluateOnce = function () {
        if (hs_a17225uX5F.notEvaluated) {
            return hs_a17225uX5F.hscall();
        } else {
            return hs_a17225uX5F;
        }
    };
    hs_a17325uX5H.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdcsignum25uX5I.evaluateOnce = function () {
        if (hs_a17325uX5H.notEvaluated) {
            return hs_a17325uX5H.hscall();
        } else {
            return hs_a17325uX5H;
        }
    };
    hs_a17425uX5J.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdcfromInteger25uX5K.evaluateOnce = function () {
        if (hs_a17425uX5J.notEvaluated) {
            return hs_a17425uX5J.hscall();
        } else {
            return hs_a17425uX5J;
        }
    };
    hs_a17525uX5L.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdccompare25uX5M.evaluateOnce = function () {
        if (hs_a17525uX5L.notEvaluated) {
            return hs_a17525uX5L.hscall();
        } else {
            return hs_a17525uX5L;
        }
    };
    hs_a17625uX5N.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdczl25uX5O.evaluateOnce = function () {
        if (hs_a17625uX5N.notEvaluated) {
            return hs_a17625uX5N.hscall();
        } else {
            return hs_a17625uX5N;
        }
    };
    hs_a17725uX5P.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdczgze25uX5Q.evaluateOnce = function () {
        if (hs_a17725uX5P.notEvaluated) {
            return hs_a17725uX5P.hscall();
        } else {
            return hs_a17725uX5P;
        }
    };
    hs_a17825uX5R.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdczg25uX5S.evaluateOnce = function () {
        if (hs_a17825uX5R.notEvaluated) {
            return hs_a17825uX5R.hscall();
        } else {
            return hs_a17825uX5R;
        }
    };
    hs_a17925uX5T.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdczlze25uX5U.evaluateOnce = function () {
        if (hs_a17925uX5T.notEvaluated) {
            return hs_a17925uX5T.hscall();
        } else {
            return hs_a17925uX5T;
        }
    };
    hs_a18025uX5V.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdcmax25uX5W.evaluateOnce = function () {
        if (hs_a18025uX5V.notEvaluated) {
            return hs_a18025uX5V.hscall();
        } else {
            return hs_a18025uX5V;
        }
    };
    hs_a18125uX5X.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdcmin25uX5Y.evaluateOnce = function () {
        if (hs_a18125uX5X.notEvaluated) {
            return hs_a18125uX5X.hscall();
        } else {
            return hs_a18125uX5X;
        }
    };
    hs_a18225uX5Z.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord64);
    };
    hs_zdczeze25uX60.evaluateOnce = function () {
        if (hs_a18225uX5Z.notEvaluated) {
            return hs_a18225uX5Z.hscall();
        } else {
            return hs_a18225uX5Z;
        }
    };
    hs_a18325uX61.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord64);
    };
    hs_zdczsze25uX62.evaluateOnce = function () {
        if (hs_a18325uX61.notEvaluated) {
            return hs_a18325uX61.hscall();
        } else {
            return hs_a18325uX61;
        }
    };
    this.hs_zdfEqCUIntMax.data = [hs_a18225uX5Z, hs_a18325uX61];
    this.hs_zdfOrdCUIntMax.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCUIntMax, hs_a17525uX5L, hs_a17625uX5N, hs_a17725uX5P, hs_a17825uX5R, hs_a17925uX5T, hs_a18025uX5V, hs_a18125uX5X];
    this.hs_zdfNumCUIntMax.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCUIntMax, $hs.modules.ForeignziCziTypes.hs_zdfShowCUIntMax, hs_a16825uX5x, hs_a16925uX5z, hs_a17025uX5B, hs_a17125uX5D, hs_a17225uX5F, hs_a17325uX5H, hs_a17425uX5J];
    this.hs_zdfRealCUIntMax.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCUIntMax, $hs.modules.ForeignziCziTypes.hs_zdfOrdCUIntMax, hs_a15125uX4Z];
    this.hs_zdfIntegralCUIntMax.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealCUIntMax, $hs.modules.ForeignziCziTypes.hs_zdfEnumCUIntMax, hs_a14225uX4H, hs_a14325uX4J, hs_a14425uX4L, hs_a14525uX4N, hs_a14625uX4P, hs_a14725uX4R, hs_a14825uX4T];
    this.hs_zdfBitsCUIntMax.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCUIntMax, hs_a12525uX49, hs_a12625uX4b, hs_a12725uX4d, hs_a12825uX4f, hs_a12925uX4h, hs_a13025uX4j, hs_a13125uX4l, hs_a13225uX4n, hs_a13325uX4p, hs_a13425uX4r, hs_a13525uX4t, hs_a13625uX4v, hs_a13725uX4x, hs_a13825uX4z, hs_a13925uX4B, hs_a14025uX4D, hs_a14125uX4F];
    hs_a18425uX63.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdczizazi125uX64.evaluateOnce = function () {
        if (hs_a18425uX63.notEvaluated) {
            return hs_a18425uX63.hscall();
        } else {
            return hs_a18425uX63;
        }
    };
    hs_a18525uX65.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdczizbzi125uX66.evaluateOnce = function () {
        if (hs_a18525uX65.notEvaluated) {
            return hs_a18525uX65.hscall();
        } else {
            return hs_a18525uX65;
        }
    };
    hs_a18625uX67.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcxor125uX68.evaluateOnce = function () {
        if (hs_a18625uX67.notEvaluated) {
            return hs_a18625uX67.hscall();
        } else {
            return hs_a18625uX67;
        }
    };
    hs_a18725uX69.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdccomplement125uX6a.evaluateOnce = function () {
        if (hs_a18725uX69.notEvaluated) {
            return hs_a18725uX69.hscall();
        } else {
            return hs_a18725uX69;
        }
    };
    hs_a18825uX6b.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcshift125uX6c.evaluateOnce = function () {
        if (hs_a18825uX6b.notEvaluated) {
            return hs_a18825uX6b.hscall();
        } else {
            return hs_a18825uX6b;
        }
    };
    hs_a18925uX6d.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcrotate125uX6e.evaluateOnce = function () {
        if (hs_a18925uX6d.notEvaluated) {
            return hs_a18925uX6d.hscall();
        } else {
            return hs_a18925uX6d;
        }
    };
    hs_a19025uX6f.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcbit125uX6g.evaluateOnce = function () {
        if (hs_a19025uX6f.notEvaluated) {
            return hs_a19025uX6f.hscall();
        } else {
            return hs_a19025uX6f;
        }
    };
    hs_a19125uX6h.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcsetBit125uX6i.evaluateOnce = function () {
        if (hs_a19125uX6h.notEvaluated) {
            return hs_a19125uX6h.hscall();
        } else {
            return hs_a19125uX6h;
        }
    };
    hs_a19225uX6j.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcclearBit125uX6k.evaluateOnce = function () {
        if (hs_a19225uX6j.notEvaluated) {
            return hs_a19225uX6j.hscall();
        } else {
            return hs_a19225uX6j;
        }
    };
    hs_a19325uX6l.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdccomplementBit125uX6m.evaluateOnce = function () {
        if (hs_a19325uX6l.notEvaluated) {
            return hs_a19325uX6l.hscall();
        } else {
            return hs_a19325uX6l;
        }
    };
    hs_a19425uX6n.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdctestBit125uX6o.evaluateOnce = function () {
        if (hs_a19425uX6n.notEvaluated) {
            return hs_a19425uX6n.hscall();
        } else {
            return hs_a19425uX6n;
        }
    };
    hs_a19525uX6p.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcbitSizze125uX6q.evaluateOnce = function () {
        if (hs_a19525uX6p.notEvaluated) {
            return hs_a19525uX6p.hscall();
        } else {
            return hs_a19525uX6p;
        }
    };
    hs_a19625uX6r.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcisSigned125uX6s.evaluateOnce = function () {
        if (hs_a19625uX6r.notEvaluated) {
            return hs_a19625uX6r.hscall();
        } else {
            return hs_a19625uX6r;
        }
    };
    hs_a19725uX6t.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcshiftL125uX6u.evaluateOnce = function () {
        if (hs_a19725uX6t.notEvaluated) {
            return hs_a19725uX6t.hscall();
        } else {
            return hs_a19725uX6t;
        }
    };
    hs_a19825uX6v.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcshiftR125uX6w.evaluateOnce = function () {
        if (hs_a19825uX6v.notEvaluated) {
            return hs_a19825uX6v.hscall();
        } else {
            return hs_a19825uX6v;
        }
    };
    hs_a19925uX6x.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcrotateL125uX6y.evaluateOnce = function () {
        if (hs_a19925uX6x.notEvaluated) {
            return hs_a19925uX6x.hscall();
        } else {
            return hs_a19925uX6x;
        }
    };
    hs_a20025uX6z.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcrotateR125uX6A.evaluateOnce = function () {
        if (hs_a20025uX6z.notEvaluated) {
            return hs_a20025uX6z.hscall();
        } else {
            return hs_a20025uX6z;
        }
    };
    hs_a20125uX6B.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64);
    };
    hs_zdcquot125uX6C.evaluateOnce = function () {
        if (hs_a20125uX6B.notEvaluated) {
            return hs_a20125uX6B.hscall();
        } else {
            return hs_a20125uX6B;
        }
    };
    hs_a20225uX6D.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64);
    };
    hs_zdcrem125uX6E.evaluateOnce = function () {
        if (hs_a20225uX6D.notEvaluated) {
            return hs_a20225uX6D.hscall();
        } else {
            return hs_a20225uX6D;
        }
    };
    hs_a20325uX6F.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64);
    };
    hs_zdcdiv125uX6G.evaluateOnce = function () {
        if (hs_a20325uX6F.notEvaluated) {
            return hs_a20325uX6F.hscall();
        } else {
            return hs_a20325uX6F;
        }
    };
    hs_a20425uX6H.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64);
    };
    hs_zdcmod125uX6I.evaluateOnce = function () {
        if (hs_a20425uX6H.notEvaluated) {
            return hs_a20425uX6H.hscall();
        } else {
            return hs_a20425uX6H;
        }
    };
    hs_a20525uX6J.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64);
    };
    hs_zdcquotRem125uX6K.evaluateOnce = function () {
        if (hs_a20525uX6J.notEvaluated) {
            return hs_a20525uX6J.hscall();
        } else {
            return hs_a20525uX6J;
        }
    };
    hs_a20625uX6L.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64);
    };
    hs_zdcdivMod125uX6M.evaluateOnce = function () {
        if (hs_a20625uX6L.notEvaluated) {
            return hs_a20625uX6L.hscall();
        } else {
            return hs_a20625uX6L;
        }
    };
    hs_a20725uX6N.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64);
    };
    hs_zdctoInteger125uX6O.evaluateOnce = function () {
        if (hs_a20725uX6N.notEvaluated) {
            return hs_a20725uX6N.hscall();
        } else {
            return hs_a20725uX6N;
        }
    };
    hs_a20825uX6P.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt64);
    };
    hs_zdcminBound125uX6Q.evaluateOnce = function () {
        if (hs_a20825uX6P.notEvaluated) {
            return hs_a20825uX6P.hscall();
        } else {
            return hs_a20825uX6P;
        }
    };
    hs_a20925uX6R.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt64);
    };
    hs_zdcmaxBound125uX6S.evaluateOnce = function () {
        if (hs_a20925uX6R.notEvaluated) {
            return hs_a20925uX6R.hscall();
        } else {
            return hs_a20925uX6R;
        }
    };
    this.hs_zdfBoundedCIntMax.data = [hs_a20825uX6P, hs_a20925uX6R];
    hs_a21025uX6T.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziInt.hs_zdfRealInt64);
    };
    hs_zdctoRational125uX6U.evaluateOnce = function () {
        if (hs_a21025uX6T.notEvaluated) {
            return hs_a21025uX6T.hscall();
        } else {
            return hs_a21025uX6T;
        }
    };
    hs_a21125uX6V.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcsizzeOf125uX6W.evaluateOnce = function () {
        if (hs_a21125uX6V.notEvaluated) {
            return hs_a21125uX6V.hscall();
        } else {
            return hs_a21125uX6V;
        }
    };
    hs_a21225uX6X.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcalignment125uX6Y.evaluateOnce = function () {
        if (hs_a21225uX6X.notEvaluated) {
            return hs_a21225uX6X.hscall();
        } else {
            return hs_a21225uX6X;
        }
    };
    hs_a21325uX6Z.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcpeekElemOff125uX70.evaluateOnce = function () {
        if (hs_a21325uX6Z.notEvaluated) {
            return hs_a21325uX6Z.hscall();
        } else {
            return hs_a21325uX6Z;
        }
    };
    hs_a21425uX71.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcpokeElemOff125uX72.evaluateOnce = function () {
        if (hs_a21425uX71.notEvaluated) {
            return hs_a21425uX71.hscall();
        } else {
            return hs_a21425uX71;
        }
    };
    hs_a21525uX73.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcpeekByteOff125uX74.evaluateOnce = function () {
        if (hs_a21525uX73.notEvaluated) {
            return hs_a21525uX73.hscall();
        } else {
            return hs_a21525uX73;
        }
    };
    hs_a21625uX75.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcpokeByteOff125uX76.evaluateOnce = function () {
        if (hs_a21625uX75.notEvaluated) {
            return hs_a21625uX75.hscall();
        } else {
            return hs_a21625uX75;
        }
    };
    hs_a21725uX77.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcpeek125uX78.evaluateOnce = function () {
        if (hs_a21725uX77.notEvaluated) {
            return hs_a21725uX77.hscall();
        } else {
            return hs_a21725uX77;
        }
    };
    hs_a21825uX79.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcpoke125uX7a.evaluateOnce = function () {
        if (hs_a21825uX79.notEvaluated) {
            return hs_a21825uX79.hscall();
        } else {
            return hs_a21825uX79;
        }
    };
    this.hs_zdfStorableCIntMax.data = [hs_a21125uX6V, hs_a21225uX6X, hs_a21325uX6Z, hs_a21425uX71, hs_a21525uX73, hs_a21625uX75, hs_a21725uX77, hs_a21825uX79];
    hs_a21925uX7b.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdcsucc125uX7c.evaluateOnce = function () {
        if (hs_a21925uX7b.notEvaluated) {
            return hs_a21925uX7b.hscall();
        } else {
            return hs_a21925uX7b;
        }
    };
    hs_a22025uX7d.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdcpred125uX7e.evaluateOnce = function () {
        if (hs_a22025uX7d.notEvaluated) {
            return hs_a22025uX7d.hscall();
        } else {
            return hs_a22025uX7d;
        }
    };
    hs_a22125uX7f.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdctoEnum125uX7g.evaluateOnce = function () {
        if (hs_a22125uX7f.notEvaluated) {
            return hs_a22125uX7f.hscall();
        } else {
            return hs_a22125uX7f;
        }
    };
    hs_a22225uX7h.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdcfromEnum125uX7i.evaluateOnce = function () {
        if (hs_a22225uX7h.notEvaluated) {
            return hs_a22225uX7h.hscall();
        } else {
            return hs_a22225uX7h;
        }
    };
    hs_a22325uX7j.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdcenumFrom125uX7k.evaluateOnce = function () {
        if (hs_a22325uX7j.notEvaluated) {
            return hs_a22325uX7j.hscall();
        } else {
            return hs_a22325uX7j;
        }
    };
    hs_a22425uX7l.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdcenumFromThen125uX7m.evaluateOnce = function () {
        if (hs_a22425uX7l.notEvaluated) {
            return hs_a22425uX7l.hscall();
        } else {
            return hs_a22425uX7l;
        }
    };
    hs_a22525uX7n.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdcenumFromTo125uX7o.evaluateOnce = function () {
        if (hs_a22525uX7n.notEvaluated) {
            return hs_a22525uX7n.hscall();
        } else {
            return hs_a22525uX7n;
        }
    };
    hs_a22625uX7p.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdcenumFromThenTo125uX7q.evaluateOnce = function () {
        if (hs_a22625uX7p.notEvaluated) {
            return hs_a22625uX7p.hscall();
        } else {
            return hs_a22625uX7p;
        }
    };
    this.hs_zdfEnumCIntMax.data = [hs_a21925uX7b, hs_a22025uX7d, hs_a22125uX7f, hs_a22225uX7h, hs_a22325uX7j, hs_a22425uX7l, hs_a22525uX7n, hs_a22625uX7p];
    hs_a22725uX7r.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdczp125uX7s.evaluateOnce = function () {
        if (hs_a22725uX7r.notEvaluated) {
            return hs_a22725uX7r.hscall();
        } else {
            return hs_a22725uX7r;
        }
    };
    hs_a22825uX7t.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdczt125uX7u.evaluateOnce = function () {
        if (hs_a22825uX7t.notEvaluated) {
            return hs_a22825uX7t.hscall();
        } else {
            return hs_a22825uX7t;
        }
    };
    hs_a22925uX7v.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdczm125uX7w.evaluateOnce = function () {
        if (hs_a22925uX7v.notEvaluated) {
            return hs_a22925uX7v.hscall();
        } else {
            return hs_a22925uX7v;
        }
    };
    hs_a23025uX7x.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdcnegate125uX7y.evaluateOnce = function () {
        if (hs_a23025uX7x.notEvaluated) {
            return hs_a23025uX7x.hscall();
        } else {
            return hs_a23025uX7x;
        }
    };
    hs_a23125uX7z.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdcabs125uX7A.evaluateOnce = function () {
        if (hs_a23125uX7z.notEvaluated) {
            return hs_a23125uX7z.hscall();
        } else {
            return hs_a23125uX7z;
        }
    };
    hs_a23225uX7B.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdcsignum125uX7C.evaluateOnce = function () {
        if (hs_a23225uX7B.notEvaluated) {
            return hs_a23225uX7B.hscall();
        } else {
            return hs_a23225uX7B;
        }
    };
    hs_a23325uX7D.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdcfromInteger125uX7E.evaluateOnce = function () {
        if (hs_a23325uX7D.notEvaluated) {
            return hs_a23325uX7D.hscall();
        } else {
            return hs_a23325uX7D;
        }
    };
    hs_a23425uX7F.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdccompare125uX7G.evaluateOnce = function () {
        if (hs_a23425uX7F.notEvaluated) {
            return hs_a23425uX7F.hscall();
        } else {
            return hs_a23425uX7F;
        }
    };
    hs_a23525uX7H.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdczl125uX7I.evaluateOnce = function () {
        if (hs_a23525uX7H.notEvaluated) {
            return hs_a23525uX7H.hscall();
        } else {
            return hs_a23525uX7H;
        }
    };
    hs_a23625uX7J.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdczgze125uX7K.evaluateOnce = function () {
        if (hs_a23625uX7J.notEvaluated) {
            return hs_a23625uX7J.hscall();
        } else {
            return hs_a23625uX7J;
        }
    };
    hs_a23725uX7L.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdczg125uX7M.evaluateOnce = function () {
        if (hs_a23725uX7L.notEvaluated) {
            return hs_a23725uX7L.hscall();
        } else {
            return hs_a23725uX7L;
        }
    };
    hs_a23825uX7N.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdczlze125uX7O.evaluateOnce = function () {
        if (hs_a23825uX7N.notEvaluated) {
            return hs_a23825uX7N.hscall();
        } else {
            return hs_a23825uX7N;
        }
    };
    hs_a23925uX7P.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdcmax125uX7Q.evaluateOnce = function () {
        if (hs_a23925uX7P.notEvaluated) {
            return hs_a23925uX7P.hscall();
        } else {
            return hs_a23925uX7P;
        }
    };
    hs_a24025uX7R.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdcmin125uX7S.evaluateOnce = function () {
        if (hs_a24025uX7R.notEvaluated) {
            return hs_a24025uX7R.hscall();
        } else {
            return hs_a24025uX7R;
        }
    };
    hs_a24125uX7T.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt64);
    };
    hs_zdczeze125uX7U.evaluateOnce = function () {
        if (hs_a24125uX7T.notEvaluated) {
            return hs_a24125uX7T.hscall();
        } else {
            return hs_a24125uX7T;
        }
    };
    hs_a24225uX7V.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt64);
    };
    hs_zdczsze125uX7W.evaluateOnce = function () {
        if (hs_a24225uX7V.notEvaluated) {
            return hs_a24225uX7V.hscall();
        } else {
            return hs_a24225uX7V;
        }
    };
    this.hs_zdfEqCIntMax.data = [hs_a24125uX7T, hs_a24225uX7V];
    this.hs_zdfOrdCIntMax.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCIntMax, hs_a23425uX7F, hs_a23525uX7H, hs_a23625uX7J, hs_a23725uX7L, hs_a23825uX7N, hs_a23925uX7P, hs_a24025uX7R];
    this.hs_zdfNumCIntMax.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCIntMax, $hs.modules.ForeignziCziTypes.hs_zdfShowCIntMax, hs_a22725uX7r, hs_a22825uX7t, hs_a22925uX7v, hs_a23025uX7x, hs_a23125uX7z, hs_a23225uX7B, hs_a23325uX7D];
    this.hs_zdfRealCIntMax.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCIntMax, $hs.modules.ForeignziCziTypes.hs_zdfOrdCIntMax, hs_a21025uX6T];
    this.hs_zdfIntegralCIntMax.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealCIntMax, $hs.modules.ForeignziCziTypes.hs_zdfEnumCIntMax, hs_a20125uX6B, hs_a20225uX6D, hs_a20325uX6F, hs_a20425uX6H, hs_a20525uX6J, hs_a20625uX6L, hs_a20725uX6N];
    this.hs_zdfBitsCIntMax.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCIntMax, hs_a18425uX63, hs_a18525uX65, hs_a18625uX67, hs_a18725uX69, hs_a18825uX6b, hs_a18925uX6d, hs_a19025uX6f, hs_a19125uX6h, hs_a19225uX6j, hs_a19325uX6l, hs_a19425uX6n, hs_a19525uX6p, hs_a19625uX6r, hs_a19725uX6t, hs_a19825uX6v, hs_a19925uX6x, hs_a20025uX6z];
    hs_a24325uX7X.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdczizazi225uX7Y.evaluateOnce = function () {
        if (hs_a24325uX7X.notEvaluated) {
            return hs_a24325uX7X.hscall();
        } else {
            return hs_a24325uX7X;
        }
    };
    hs_a24425uX7Z.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdczizbzi225uX80.evaluateOnce = function () {
        if (hs_a24425uX7Z.notEvaluated) {
            return hs_a24425uX7Z.hscall();
        } else {
            return hs_a24425uX7Z;
        }
    };
    hs_a24525uX81.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcxor225uX82.evaluateOnce = function () {
        if (hs_a24525uX81.notEvaluated) {
            return hs_a24525uX81.hscall();
        } else {
            return hs_a24525uX81;
        }
    };
    hs_a24625uX83.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdccomplement225uX84.evaluateOnce = function () {
        if (hs_a24625uX83.notEvaluated) {
            return hs_a24625uX83.hscall();
        } else {
            return hs_a24625uX83;
        }
    };
    hs_a24725uX85.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshift225uX86.evaluateOnce = function () {
        if (hs_a24725uX85.notEvaluated) {
            return hs_a24725uX85.hscall();
        } else {
            return hs_a24725uX85;
        }
    };
    hs_a24825uX87.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotate225uX88.evaluateOnce = function () {
        if (hs_a24825uX87.notEvaluated) {
            return hs_a24825uX87.hscall();
        } else {
            return hs_a24825uX87;
        }
    };
    hs_a24925uX89.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcbit225uX8a.evaluateOnce = function () {
        if (hs_a24925uX89.notEvaluated) {
            return hs_a24925uX89.hscall();
        } else {
            return hs_a24925uX89;
        }
    };
    hs_a25025uX8b.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcsetBit225uX8c.evaluateOnce = function () {
        if (hs_a25025uX8b.notEvaluated) {
            return hs_a25025uX8b.hscall();
        } else {
            return hs_a25025uX8b;
        }
    };
    hs_a25125uX8d.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcclearBit225uX8e.evaluateOnce = function () {
        if (hs_a25125uX8d.notEvaluated) {
            return hs_a25125uX8d.hscall();
        } else {
            return hs_a25125uX8d;
        }
    };
    hs_a25225uX8f.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdccomplementBit225uX8g.evaluateOnce = function () {
        if (hs_a25225uX8f.notEvaluated) {
            return hs_a25225uX8f.hscall();
        } else {
            return hs_a25225uX8f;
        }
    };
    hs_a25325uX8h.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdctestBit225uX8i.evaluateOnce = function () {
        if (hs_a25325uX8h.notEvaluated) {
            return hs_a25325uX8h.hscall();
        } else {
            return hs_a25325uX8h;
        }
    };
    hs_a25425uX8j.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcbitSizze225uX8k.evaluateOnce = function () {
        if (hs_a25425uX8j.notEvaluated) {
            return hs_a25425uX8j.hscall();
        } else {
            return hs_a25425uX8j;
        }
    };
    hs_a25525uX8l.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcisSigned225uX8m.evaluateOnce = function () {
        if (hs_a25525uX8l.notEvaluated) {
            return hs_a25525uX8l.hscall();
        } else {
            return hs_a25525uX8l;
        }
    };
    hs_a25625uX8n.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshiftL225uX8o.evaluateOnce = function () {
        if (hs_a25625uX8n.notEvaluated) {
            return hs_a25625uX8n.hscall();
        } else {
            return hs_a25625uX8n;
        }
    };
    hs_a25725uX8p.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshiftR225uX8q.evaluateOnce = function () {
        if (hs_a25725uX8p.notEvaluated) {
            return hs_a25725uX8p.hscall();
        } else {
            return hs_a25725uX8p;
        }
    };
    hs_a25825uX8r.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotateL225uX8s.evaluateOnce = function () {
        if (hs_a25825uX8r.notEvaluated) {
            return hs_a25825uX8r.hscall();
        } else {
            return hs_a25825uX8r;
        }
    };
    hs_a25925uX8t.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotateR225uX8u.evaluateOnce = function () {
        if (hs_a25925uX8t.notEvaluated) {
            return hs_a25925uX8t.hscall();
        } else {
            return hs_a25925uX8t;
        }
    };
    hs_a26025uX8v.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcquot225uX8w.evaluateOnce = function () {
        if (hs_a26025uX8v.notEvaluated) {
            return hs_a26025uX8v.hscall();
        } else {
            return hs_a26025uX8v;
        }
    };
    hs_a26125uX8x.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcrem225uX8y.evaluateOnce = function () {
        if (hs_a26125uX8x.notEvaluated) {
            return hs_a26125uX8x.hscall();
        } else {
            return hs_a26125uX8x;
        }
    };
    hs_a26225uX8z.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcdiv225uX8A.evaluateOnce = function () {
        if (hs_a26225uX8z.notEvaluated) {
            return hs_a26225uX8z.hscall();
        } else {
            return hs_a26225uX8z;
        }
    };
    hs_a26325uX8B.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcmod225uX8C.evaluateOnce = function () {
        if (hs_a26325uX8B.notEvaluated) {
            return hs_a26325uX8B.hscall();
        } else {
            return hs_a26325uX8B;
        }
    };
    hs_a26425uX8D.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcquotRem225uX8E.evaluateOnce = function () {
        if (hs_a26425uX8D.notEvaluated) {
            return hs_a26425uX8D.hscall();
        } else {
            return hs_a26425uX8D;
        }
    };
    hs_a26525uX8F.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcdivMod225uX8G.evaluateOnce = function () {
        if (hs_a26525uX8F.notEvaluated) {
            return hs_a26525uX8F.hscall();
        } else {
            return hs_a26525uX8F;
        }
    };
    hs_a26625uX8H.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdctoInteger225uX8I.evaluateOnce = function () {
        if (hs_a26625uX8H.notEvaluated) {
            return hs_a26625uX8H.hscall();
        } else {
            return hs_a26625uX8H;
        }
    };
    hs_a26725uX8J.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
    };
    hs_zdcminBound225uX8K.evaluateOnce = function () {
        if (hs_a26725uX8J.notEvaluated) {
            return hs_a26725uX8J.hscall();
        } else {
            return hs_a26725uX8J;
        }
    };
    hs_a26825uX8L.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
    };
    hs_zdcmaxBound225uX8M.evaluateOnce = function () {
        if (hs_a26825uX8L.notEvaluated) {
            return hs_a26825uX8L.hscall();
        } else {
            return hs_a26825uX8L;
        }
    };
    this.hs_zdfBoundedCUIntPtr.data = [hs_a26725uX8J, hs_a26825uX8L];
    hs_a26925uX8N.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziWord.hs_zdfRealWord32);
    };
    hs_zdctoRational225uX8O.evaluateOnce = function () {
        if (hs_a26925uX8N.notEvaluated) {
            return hs_a26925uX8N.hscall();
        } else {
            return hs_a26925uX8N;
        }
    };
    hs_a27025uX8P.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcsizzeOf225uX8Q.evaluateOnce = function () {
        if (hs_a27025uX8P.notEvaluated) {
            return hs_a27025uX8P.hscall();
        } else {
            return hs_a27025uX8P;
        }
    };
    hs_a27125uX8R.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcalignment225uX8S.evaluateOnce = function () {
        if (hs_a27125uX8R.notEvaluated) {
            return hs_a27125uX8R.hscall();
        } else {
            return hs_a27125uX8R;
        }
    };
    hs_a27225uX8T.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeekElemOff225uX8U.evaluateOnce = function () {
        if (hs_a27225uX8T.notEvaluated) {
            return hs_a27225uX8T.hscall();
        } else {
            return hs_a27225uX8T;
        }
    };
    hs_a27325uX8V.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpokeElemOff225uX8W.evaluateOnce = function () {
        if (hs_a27325uX8V.notEvaluated) {
            return hs_a27325uX8V.hscall();
        } else {
            return hs_a27325uX8V;
        }
    };
    hs_a27425uX8X.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeekByteOff225uX8Y.evaluateOnce = function () {
        if (hs_a27425uX8X.notEvaluated) {
            return hs_a27425uX8X.hscall();
        } else {
            return hs_a27425uX8X;
        }
    };
    hs_a27525uX8Z.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpokeByteOff225uX90.evaluateOnce = function () {
        if (hs_a27525uX8Z.notEvaluated) {
            return hs_a27525uX8Z.hscall();
        } else {
            return hs_a27525uX8Z;
        }
    };
    hs_a27625uX91.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeek225uX92.evaluateOnce = function () {
        if (hs_a27625uX91.notEvaluated) {
            return hs_a27625uX91.hscall();
        } else {
            return hs_a27625uX91;
        }
    };
    hs_a27725uX93.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpoke225uX94.evaluateOnce = function () {
        if (hs_a27725uX93.notEvaluated) {
            return hs_a27725uX93.hscall();
        } else {
            return hs_a27725uX93;
        }
    };
    this.hs_zdfStorableCUIntPtr.data = [hs_a27025uX8P, hs_a27125uX8R, hs_a27225uX8T, hs_a27325uX8V, hs_a27425uX8X, hs_a27525uX8Z, hs_a27625uX91, hs_a27725uX93];
    hs_a27825uX95.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcsucc225uX96.evaluateOnce = function () {
        if (hs_a27825uX95.notEvaluated) {
            return hs_a27825uX95.hscall();
        } else {
            return hs_a27825uX95;
        }
    };
    hs_a27925uX97.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcpred225uX98.evaluateOnce = function () {
        if (hs_a27925uX97.notEvaluated) {
            return hs_a27925uX97.hscall();
        } else {
            return hs_a27925uX97;
        }
    };
    hs_a28025uX99.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdctoEnum225uX9a.evaluateOnce = function () {
        if (hs_a28025uX99.notEvaluated) {
            return hs_a28025uX99.hscall();
        } else {
            return hs_a28025uX99;
        }
    };
    hs_a28125uX9b.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcfromEnum225uX9c.evaluateOnce = function () {
        if (hs_a28125uX9b.notEvaluated) {
            return hs_a28125uX9b.hscall();
        } else {
            return hs_a28125uX9b;
        }
    };
    hs_a28225uX9d.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFrom225uX9e.evaluateOnce = function () {
        if (hs_a28225uX9d.notEvaluated) {
            return hs_a28225uX9d.hscall();
        } else {
            return hs_a28225uX9d;
        }
    };
    hs_a28325uX9f.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromThen225uX9g.evaluateOnce = function () {
        if (hs_a28325uX9f.notEvaluated) {
            return hs_a28325uX9f.hscall();
        } else {
            return hs_a28325uX9f;
        }
    };
    hs_a28425uX9h.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromTo225uX9i.evaluateOnce = function () {
        if (hs_a28425uX9h.notEvaluated) {
            return hs_a28425uX9h.hscall();
        } else {
            return hs_a28425uX9h;
        }
    };
    hs_a28525uX9j.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromThenTo225uX9k.evaluateOnce = function () {
        if (hs_a28525uX9j.notEvaluated) {
            return hs_a28525uX9j.hscall();
        } else {
            return hs_a28525uX9j;
        }
    };
    this.hs_zdfEnumCUIntPtr.data = [hs_a27825uX95, hs_a27925uX97, hs_a28025uX99, hs_a28125uX9b, hs_a28225uX9d, hs_a28325uX9f, hs_a28425uX9h, hs_a28525uX9j];
    hs_a28625uX9l.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczp225uX9m.evaluateOnce = function () {
        if (hs_a28625uX9l.notEvaluated) {
            return hs_a28625uX9l.hscall();
        } else {
            return hs_a28625uX9l;
        }
    };
    hs_a28725uX9n.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczt225uX9o.evaluateOnce = function () {
        if (hs_a28725uX9n.notEvaluated) {
            return hs_a28725uX9n.hscall();
        } else {
            return hs_a28725uX9n;
        }
    };
    hs_a28825uX9p.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczm225uX9q.evaluateOnce = function () {
        if (hs_a28825uX9p.notEvaluated) {
            return hs_a28825uX9p.hscall();
        } else {
            return hs_a28825uX9p;
        }
    };
    hs_a28925uX9r.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcnegate225uX9s.evaluateOnce = function () {
        if (hs_a28925uX9r.notEvaluated) {
            return hs_a28925uX9r.hscall();
        } else {
            return hs_a28925uX9r;
        }
    };
    hs_a29025uX9t.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcabs225uX9u.evaluateOnce = function () {
        if (hs_a29025uX9t.notEvaluated) {
            return hs_a29025uX9t.hscall();
        } else {
            return hs_a29025uX9t;
        }
    };
    hs_a29125uX9v.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcsignum225uX9w.evaluateOnce = function () {
        if (hs_a29125uX9v.notEvaluated) {
            return hs_a29125uX9v.hscall();
        } else {
            return hs_a29125uX9v;
        }
    };
    hs_a29225uX9x.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcfromInteger225uX9y.evaluateOnce = function () {
        if (hs_a29225uX9x.notEvaluated) {
            return hs_a29225uX9x.hscall();
        } else {
            return hs_a29225uX9x;
        }
    };
    hs_a29325uX9z.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdccompare225uX9A.evaluateOnce = function () {
        if (hs_a29325uX9z.notEvaluated) {
            return hs_a29325uX9z.hscall();
        } else {
            return hs_a29325uX9z;
        }
    };
    hs_a29425uX9B.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczl225uX9C.evaluateOnce = function () {
        if (hs_a29425uX9B.notEvaluated) {
            return hs_a29425uX9B.hscall();
        } else {
            return hs_a29425uX9B;
        }
    };
    hs_a29525uX9D.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczgze225uX9E.evaluateOnce = function () {
        if (hs_a29525uX9D.notEvaluated) {
            return hs_a29525uX9D.hscall();
        } else {
            return hs_a29525uX9D;
        }
    };
    hs_a29625uX9F.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczg225uX9G.evaluateOnce = function () {
        if (hs_a29625uX9F.notEvaluated) {
            return hs_a29625uX9F.hscall();
        } else {
            return hs_a29625uX9F;
        }
    };
    hs_a29725uX9H.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczlze225uX9I.evaluateOnce = function () {
        if (hs_a29725uX9H.notEvaluated) {
            return hs_a29725uX9H.hscall();
        } else {
            return hs_a29725uX9H;
        }
    };
    hs_a29825uX9J.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcmax225uX9K.evaluateOnce = function () {
        if (hs_a29825uX9J.notEvaluated) {
            return hs_a29825uX9J.hscall();
        } else {
            return hs_a29825uX9J;
        }
    };
    hs_a29925uX9L.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcmin225uX9M.evaluateOnce = function () {
        if (hs_a29925uX9L.notEvaluated) {
            return hs_a29925uX9L.hscall();
        } else {
            return hs_a29925uX9L;
        }
    };
    hs_a30025uX9N.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczeze225uX9O.evaluateOnce = function () {
        if (hs_a30025uX9N.notEvaluated) {
            return hs_a30025uX9N.hscall();
        } else {
            return hs_a30025uX9N;
        }
    };
    hs_a30125uX9P.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczsze225uX9Q.evaluateOnce = function () {
        if (hs_a30125uX9P.notEvaluated) {
            return hs_a30125uX9P.hscall();
        } else {
            return hs_a30125uX9P;
        }
    };
    this.hs_zdfEqCUIntPtr.data = [hs_a30025uX9N, hs_a30125uX9P];
    this.hs_zdfOrdCUIntPtr.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCUIntPtr, hs_a29325uX9z, hs_a29425uX9B, hs_a29525uX9D, hs_a29625uX9F, hs_a29725uX9H, hs_a29825uX9J, hs_a29925uX9L];
    this.hs_zdfNumCUIntPtr.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCUIntPtr, $hs.modules.ForeignziCziTypes.hs_zdfShowCUIntPtr, hs_a28625uX9l, hs_a28725uX9n, hs_a28825uX9p, hs_a28925uX9r, hs_a29025uX9t, hs_a29125uX9v, hs_a29225uX9x];
    this.hs_zdfRealCUIntPtr.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCUIntPtr, $hs.modules.ForeignziCziTypes.hs_zdfOrdCUIntPtr, hs_a26925uX8N];
    this.hs_zdfIntegralCUIntPtr.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealCUIntPtr, $hs.modules.ForeignziCziTypes.hs_zdfEnumCUIntPtr, hs_a26025uX8v, hs_a26125uX8x, hs_a26225uX8z, hs_a26325uX8B, hs_a26425uX8D, hs_a26525uX8F, hs_a26625uX8H];
    this.hs_zdfBitsCUIntPtr.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCUIntPtr, hs_a24325uX7X, hs_a24425uX7Z, hs_a24525uX81, hs_a24625uX83, hs_a24725uX85, hs_a24825uX87, hs_a24925uX89, hs_a25025uX8b, hs_a25125uX8d, hs_a25225uX8f, hs_a25325uX8h, hs_a25425uX8j, hs_a25525uX8l, hs_a25625uX8n, hs_a25725uX8p, hs_a25825uX8r, hs_a25925uX8t];
    hs_a30225uX9R.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdczizazi325uX9S.evaluateOnce = function () {
        if (hs_a30225uX9R.notEvaluated) {
            return hs_a30225uX9R.hscall();
        } else {
            return hs_a30225uX9R;
        }
    };
    hs_a30325uX9T.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdczizbzi325uX9U.evaluateOnce = function () {
        if (hs_a30325uX9T.notEvaluated) {
            return hs_a30325uX9T.hscall();
        } else {
            return hs_a30325uX9T;
        }
    };
    hs_a30425uX9V.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcxor325uX9W.evaluateOnce = function () {
        if (hs_a30425uX9V.notEvaluated) {
            return hs_a30425uX9V.hscall();
        } else {
            return hs_a30425uX9V;
        }
    };
    hs_a30525uX9X.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdccomplement325uX9Y.evaluateOnce = function () {
        if (hs_a30525uX9X.notEvaluated) {
            return hs_a30525uX9X.hscall();
        } else {
            return hs_a30525uX9X;
        }
    };
    hs_a30625uX9Z.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshift325uXa0.evaluateOnce = function () {
        if (hs_a30625uX9Z.notEvaluated) {
            return hs_a30625uX9Z.hscall();
        } else {
            return hs_a30625uX9Z;
        }
    };
    hs_a30725uXa1.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotate325uXa2.evaluateOnce = function () {
        if (hs_a30725uXa1.notEvaluated) {
            return hs_a30725uXa1.hscall();
        } else {
            return hs_a30725uXa1;
        }
    };
    hs_a30825uXa3.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcbit325uXa4.evaluateOnce = function () {
        if (hs_a30825uXa3.notEvaluated) {
            return hs_a30825uXa3.hscall();
        } else {
            return hs_a30825uXa3;
        }
    };
    hs_a30925uXa5.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcsetBit325uXa6.evaluateOnce = function () {
        if (hs_a30925uXa5.notEvaluated) {
            return hs_a30925uXa5.hscall();
        } else {
            return hs_a30925uXa5;
        }
    };
    hs_a31025uXa7.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcclearBit325uXa8.evaluateOnce = function () {
        if (hs_a31025uXa7.notEvaluated) {
            return hs_a31025uXa7.hscall();
        } else {
            return hs_a31025uXa7;
        }
    };
    hs_a31125uXa9.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdccomplementBit325uXaa.evaluateOnce = function () {
        if (hs_a31125uXa9.notEvaluated) {
            return hs_a31125uXa9.hscall();
        } else {
            return hs_a31125uXa9;
        }
    };
    hs_a31225uXab.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdctestBit325uXac.evaluateOnce = function () {
        if (hs_a31225uXab.notEvaluated) {
            return hs_a31225uXab.hscall();
        } else {
            return hs_a31225uXab;
        }
    };
    hs_a31325uXad.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcbitSizze325uXae.evaluateOnce = function () {
        if (hs_a31325uXad.notEvaluated) {
            return hs_a31325uXad.hscall();
        } else {
            return hs_a31325uXad;
        }
    };
    hs_a31425uXaf.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcisSigned325uXag.evaluateOnce = function () {
        if (hs_a31425uXaf.notEvaluated) {
            return hs_a31425uXaf.hscall();
        } else {
            return hs_a31425uXaf;
        }
    };
    hs_a31525uXah.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshiftL325uXai.evaluateOnce = function () {
        if (hs_a31525uXah.notEvaluated) {
            return hs_a31525uXah.hscall();
        } else {
            return hs_a31525uXah;
        }
    };
    hs_a31625uXaj.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshiftR325uXak.evaluateOnce = function () {
        if (hs_a31625uXaj.notEvaluated) {
            return hs_a31625uXaj.hscall();
        } else {
            return hs_a31625uXaj;
        }
    };
    hs_a31725uXal.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotateL325uXam.evaluateOnce = function () {
        if (hs_a31725uXal.notEvaluated) {
            return hs_a31725uXal.hscall();
        } else {
            return hs_a31725uXal;
        }
    };
    hs_a31825uXan.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotateR325uXao.evaluateOnce = function () {
        if (hs_a31825uXan.notEvaluated) {
            return hs_a31825uXan.hscall();
        } else {
            return hs_a31825uXan;
        }
    };
    hs_a31925uXap.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcquot325uXaq.evaluateOnce = function () {
        if (hs_a31925uXap.notEvaluated) {
            return hs_a31925uXap.hscall();
        } else {
            return hs_a31925uXap;
        }
    };
    hs_a32025uXar.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcrem325uXas.evaluateOnce = function () {
        if (hs_a32025uXar.notEvaluated) {
            return hs_a32025uXar.hscall();
        } else {
            return hs_a32025uXar;
        }
    };
    hs_a32125uXat.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcdiv325uXau.evaluateOnce = function () {
        if (hs_a32125uXat.notEvaluated) {
            return hs_a32125uXat.hscall();
        } else {
            return hs_a32125uXat;
        }
    };
    hs_a32225uXav.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcmod325uXaw.evaluateOnce = function () {
        if (hs_a32225uXav.notEvaluated) {
            return hs_a32225uXav.hscall();
        } else {
            return hs_a32225uXav;
        }
    };
    hs_a32325uXax.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcquotRem325uXay.evaluateOnce = function () {
        if (hs_a32325uXax.notEvaluated) {
            return hs_a32325uXax.hscall();
        } else {
            return hs_a32325uXax;
        }
    };
    hs_a32425uXaz.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcdivMod325uXaA.evaluateOnce = function () {
        if (hs_a32425uXaz.notEvaluated) {
            return hs_a32425uXaz.hscall();
        } else {
            return hs_a32425uXaz;
        }
    };
    hs_a32525uXaB.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdctoInteger325uXaC.evaluateOnce = function () {
        if (hs_a32525uXaB.notEvaluated) {
            return hs_a32525uXaB.hscall();
        } else {
            return hs_a32525uXaB;
        }
    };
    hs_a32625uXaD.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt32);
    };
    hs_zdcminBound325uXaE.evaluateOnce = function () {
        if (hs_a32625uXaD.notEvaluated) {
            return hs_a32625uXaD.hscall();
        } else {
            return hs_a32625uXaD;
        }
    };
    hs_a32725uXaF.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt32);
    };
    hs_zdcmaxBound325uXaG.evaluateOnce = function () {
        if (hs_a32725uXaF.notEvaluated) {
            return hs_a32725uXaF.hscall();
        } else {
            return hs_a32725uXaF;
        }
    };
    this.hs_zdfBoundedCIntPtr.data = [hs_a32625uXaD, hs_a32725uXaF];
    hs_a32825uXaH.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziInt.hs_zdfRealInt32);
    };
    hs_zdctoRational325uXaI.evaluateOnce = function () {
        if (hs_a32825uXaH.notEvaluated) {
            return hs_a32825uXaH.hscall();
        } else {
            return hs_a32825uXaH;
        }
    };
    hs_a32925uXaJ.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcsizzeOf325uXaK.evaluateOnce = function () {
        if (hs_a32925uXaJ.notEvaluated) {
            return hs_a32925uXaJ.hscall();
        } else {
            return hs_a32925uXaJ;
        }
    };
    hs_a33025uXaL.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcalignment325uXaM.evaluateOnce = function () {
        if (hs_a33025uXaL.notEvaluated) {
            return hs_a33025uXaL.hscall();
        } else {
            return hs_a33025uXaL;
        }
    };
    hs_a33125uXaN.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeekElemOff325uXaO.evaluateOnce = function () {
        if (hs_a33125uXaN.notEvaluated) {
            return hs_a33125uXaN.hscall();
        } else {
            return hs_a33125uXaN;
        }
    };
    hs_a33225uXaP.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpokeElemOff325uXaQ.evaluateOnce = function () {
        if (hs_a33225uXaP.notEvaluated) {
            return hs_a33225uXaP.hscall();
        } else {
            return hs_a33225uXaP;
        }
    };
    hs_a33325uXaR.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeekByteOff325uXaS.evaluateOnce = function () {
        if (hs_a33325uXaR.notEvaluated) {
            return hs_a33325uXaR.hscall();
        } else {
            return hs_a33325uXaR;
        }
    };
    hs_a33425uXaT.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpokeByteOff325uXaU.evaluateOnce = function () {
        if (hs_a33425uXaT.notEvaluated) {
            return hs_a33425uXaT.hscall();
        } else {
            return hs_a33425uXaT;
        }
    };
    hs_a33525uXaV.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeek325uXaW.evaluateOnce = function () {
        if (hs_a33525uXaV.notEvaluated) {
            return hs_a33525uXaV.hscall();
        } else {
            return hs_a33525uXaV;
        }
    };
    hs_a33625uXaX.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpoke325uXaY.evaluateOnce = function () {
        if (hs_a33625uXaX.notEvaluated) {
            return hs_a33625uXaX.hscall();
        } else {
            return hs_a33625uXaX;
        }
    };
    this.hs_zdfStorableCIntPtr.data = [hs_a32925uXaJ, hs_a33025uXaL, hs_a33125uXaN, hs_a33225uXaP, hs_a33325uXaR, hs_a33425uXaT, hs_a33525uXaV, hs_a33625uXaX];
    hs_a33725uXaZ.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcsucc325uXb0.evaluateOnce = function () {
        if (hs_a33725uXaZ.notEvaluated) {
            return hs_a33725uXaZ.hscall();
        } else {
            return hs_a33725uXaZ;
        }
    };
    hs_a33825uXb1.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcpred325uXb2.evaluateOnce = function () {
        if (hs_a33825uXb1.notEvaluated) {
            return hs_a33825uXb1.hscall();
        } else {
            return hs_a33825uXb1;
        }
    };
    hs_a33925uXb3.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdctoEnum325uXb4.evaluateOnce = function () {
        if (hs_a33925uXb3.notEvaluated) {
            return hs_a33925uXb3.hscall();
        } else {
            return hs_a33925uXb3;
        }
    };
    hs_a34025uXb5.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcfromEnum325uXb6.evaluateOnce = function () {
        if (hs_a34025uXb5.notEvaluated) {
            return hs_a34025uXb5.hscall();
        } else {
            return hs_a34025uXb5;
        }
    };
    hs_a34125uXb7.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFrom325uXb8.evaluateOnce = function () {
        if (hs_a34125uXb7.notEvaluated) {
            return hs_a34125uXb7.hscall();
        } else {
            return hs_a34125uXb7;
        }
    };
    hs_a34225uXb9.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromThen325uXba.evaluateOnce = function () {
        if (hs_a34225uXb9.notEvaluated) {
            return hs_a34225uXb9.hscall();
        } else {
            return hs_a34225uXb9;
        }
    };
    hs_a34325uXbb.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromTo325uXbc.evaluateOnce = function () {
        if (hs_a34325uXbb.notEvaluated) {
            return hs_a34325uXbb.hscall();
        } else {
            return hs_a34325uXbb;
        }
    };
    hs_a34425uXbd.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromThenTo325uXbe.evaluateOnce = function () {
        if (hs_a34425uXbd.notEvaluated) {
            return hs_a34425uXbd.hscall();
        } else {
            return hs_a34425uXbd;
        }
    };
    this.hs_zdfEnumCIntPtr.data = [hs_a33725uXaZ, hs_a33825uXb1, hs_a33925uXb3, hs_a34025uXb5, hs_a34125uXb7, hs_a34225uXb9, hs_a34325uXbb, hs_a34425uXbd];
    hs_a34525uXbf.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczp325uXbg.evaluateOnce = function () {
        if (hs_a34525uXbf.notEvaluated) {
            return hs_a34525uXbf.hscall();
        } else {
            return hs_a34525uXbf;
        }
    };
    hs_a34625uXbh.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczt325uXbi.evaluateOnce = function () {
        if (hs_a34625uXbh.notEvaluated) {
            return hs_a34625uXbh.hscall();
        } else {
            return hs_a34625uXbh;
        }
    };
    hs_a34725uXbj.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczm325uXbk.evaluateOnce = function () {
        if (hs_a34725uXbj.notEvaluated) {
            return hs_a34725uXbj.hscall();
        } else {
            return hs_a34725uXbj;
        }
    };
    hs_a34825uXbl.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcnegate325uXbm.evaluateOnce = function () {
        if (hs_a34825uXbl.notEvaluated) {
            return hs_a34825uXbl.hscall();
        } else {
            return hs_a34825uXbl;
        }
    };
    hs_a34925uXbn.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcabs325uXbo.evaluateOnce = function () {
        if (hs_a34925uXbn.notEvaluated) {
            return hs_a34925uXbn.hscall();
        } else {
            return hs_a34925uXbn;
        }
    };
    hs_a35025uXbp.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcsignum325uXbq.evaluateOnce = function () {
        if (hs_a35025uXbp.notEvaluated) {
            return hs_a35025uXbp.hscall();
        } else {
            return hs_a35025uXbp;
        }
    };
    hs_a35125uXbr.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcfromInteger325uXbs.evaluateOnce = function () {
        if (hs_a35125uXbr.notEvaluated) {
            return hs_a35125uXbr.hscall();
        } else {
            return hs_a35125uXbr;
        }
    };
    hs_a35225uXbt.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdccompare325uXbu.evaluateOnce = function () {
        if (hs_a35225uXbt.notEvaluated) {
            return hs_a35225uXbt.hscall();
        } else {
            return hs_a35225uXbt;
        }
    };
    hs_a35325uXbv.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczl325uXbw.evaluateOnce = function () {
        if (hs_a35325uXbv.notEvaluated) {
            return hs_a35325uXbv.hscall();
        } else {
            return hs_a35325uXbv;
        }
    };
    hs_a35425uXbx.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczgze325uXby.evaluateOnce = function () {
        if (hs_a35425uXbx.notEvaluated) {
            return hs_a35425uXbx.hscall();
        } else {
            return hs_a35425uXbx;
        }
    };
    hs_a35525uXbz.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczg325uXbA.evaluateOnce = function () {
        if (hs_a35525uXbz.notEvaluated) {
            return hs_a35525uXbz.hscall();
        } else {
            return hs_a35525uXbz;
        }
    };
    hs_a35625uXbB.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczlze325uXbC.evaluateOnce = function () {
        if (hs_a35625uXbB.notEvaluated) {
            return hs_a35625uXbB.hscall();
        } else {
            return hs_a35625uXbB;
        }
    };
    hs_a35725uXbD.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdcmax325uXbE.evaluateOnce = function () {
        if (hs_a35725uXbD.notEvaluated) {
            return hs_a35725uXbD.hscall();
        } else {
            return hs_a35725uXbD;
        }
    };
    hs_a35825uXbF.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdcmin325uXbG.evaluateOnce = function () {
        if (hs_a35825uXbF.notEvaluated) {
            return hs_a35825uXbF.hscall();
        } else {
            return hs_a35825uXbF;
        }
    };
    hs_a35925uXbH.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32);
    };
    hs_zdczeze325uXbI.evaluateOnce = function () {
        if (hs_a35925uXbH.notEvaluated) {
            return hs_a35925uXbH.hscall();
        } else {
            return hs_a35925uXbH;
        }
    };
    hs_a36025uXbJ.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32);
    };
    hs_zdczsze325uXbK.evaluateOnce = function () {
        if (hs_a36025uXbJ.notEvaluated) {
            return hs_a36025uXbJ.hscall();
        } else {
            return hs_a36025uXbJ;
        }
    };
    this.hs_zdfEqCIntPtr.data = [hs_a35925uXbH, hs_a36025uXbJ];
    this.hs_zdfOrdCIntPtr.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCIntPtr, hs_a35225uXbt, hs_a35325uXbv, hs_a35425uXbx, hs_a35525uXbz, hs_a35625uXbB, hs_a35725uXbD, hs_a35825uXbF];
    this.hs_zdfNumCIntPtr.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCIntPtr, $hs.modules.ForeignziCziTypes.hs_zdfShowCIntPtr, hs_a34525uXbf, hs_a34625uXbh, hs_a34725uXbj, hs_a34825uXbl, hs_a34925uXbn, hs_a35025uXbp, hs_a35125uXbr];
    this.hs_zdfRealCIntPtr.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCIntPtr, $hs.modules.ForeignziCziTypes.hs_zdfOrdCIntPtr, hs_a32825uXaH];
    this.hs_zdfIntegralCIntPtr.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealCIntPtr, $hs.modules.ForeignziCziTypes.hs_zdfEnumCIntPtr, hs_a31925uXap, hs_a32025uXar, hs_a32125uXat, hs_a32225uXav, hs_a32325uXax, hs_a32425uXaz, hs_a32525uXaB];
    this.hs_zdfBitsCIntPtr.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCIntPtr, hs_a30225uX9R, hs_a30325uX9T, hs_a30425uX9V, hs_a30525uX9X, hs_a30625uX9Z, hs_a30725uXa1, hs_a30825uXa3, hs_a30925uXa5, hs_a31025uXa7, hs_a31125uXa9, hs_a31225uXab, hs_a31325uXad, hs_a31425uXaf, hs_a31525uXah, hs_a31625uXaj, hs_a31725uXal, hs_a31825uXan];
    hs_a36125uXbL.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziInt.hs_zdfRealInt32);
    };
    hs_zdctoRational425uXbM.evaluateOnce = function () {
        if (hs_a36125uXbL.notEvaluated) {
            return hs_a36125uXbL.hscall();
        } else {
            return hs_a36125uXbL;
        }
    };
    hs_a36225uXbN.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcsizzeOf425uXbO.evaluateOnce = function () {
        if (hs_a36225uXbN.notEvaluated) {
            return hs_a36225uXbN.hscall();
        } else {
            return hs_a36225uXbN;
        }
    };
    hs_a36325uXbP.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcalignment425uXbQ.evaluateOnce = function () {
        if (hs_a36325uXbP.notEvaluated) {
            return hs_a36325uXbP.hscall();
        } else {
            return hs_a36325uXbP;
        }
    };
    hs_a36425uXbR.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeekElemOff425uXbS.evaluateOnce = function () {
        if (hs_a36425uXbR.notEvaluated) {
            return hs_a36425uXbR.hscall();
        } else {
            return hs_a36425uXbR;
        }
    };
    hs_a36525uXbT.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpokeElemOff425uXbU.evaluateOnce = function () {
        if (hs_a36525uXbT.notEvaluated) {
            return hs_a36525uXbT.hscall();
        } else {
            return hs_a36525uXbT;
        }
    };
    hs_a36625uXbV.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeekByteOff425uXbW.evaluateOnce = function () {
        if (hs_a36625uXbV.notEvaluated) {
            return hs_a36625uXbV.hscall();
        } else {
            return hs_a36625uXbV;
        }
    };
    hs_a36725uXbX.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpokeByteOff425uXbY.evaluateOnce = function () {
        if (hs_a36725uXbX.notEvaluated) {
            return hs_a36725uXbX.hscall();
        } else {
            return hs_a36725uXbX;
        }
    };
    hs_a36825uXbZ.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeek425uXc0.evaluateOnce = function () {
        if (hs_a36825uXbZ.notEvaluated) {
            return hs_a36825uXbZ.hscall();
        } else {
            return hs_a36825uXbZ;
        }
    };
    hs_a36925uXc1.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpoke425uXc2.evaluateOnce = function () {
        if (hs_a36925uXc1.notEvaluated) {
            return hs_a36925uXc1.hscall();
        } else {
            return hs_a36925uXc1;
        }
    };
    this.hs_zdfStorableCSUSeconds.data = [hs_a36225uXbN, hs_a36325uXbP, hs_a36425uXbR, hs_a36525uXbT, hs_a36625uXbV, hs_a36725uXbX, hs_a36825uXbZ, hs_a36925uXc1];
    hs_a37025uXc3.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcsucc425uXc4.evaluateOnce = function () {
        if (hs_a37025uXc3.notEvaluated) {
            return hs_a37025uXc3.hscall();
        } else {
            return hs_a37025uXc3;
        }
    };
    hs_a37125uXc5.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcpred425uXc6.evaluateOnce = function () {
        if (hs_a37125uXc5.notEvaluated) {
            return hs_a37125uXc5.hscall();
        } else {
            return hs_a37125uXc5;
        }
    };
    hs_a37225uXc7.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdctoEnum425uXc8.evaluateOnce = function () {
        if (hs_a37225uXc7.notEvaluated) {
            return hs_a37225uXc7.hscall();
        } else {
            return hs_a37225uXc7;
        }
    };
    hs_a37325uXc9.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcfromEnum425uXca.evaluateOnce = function () {
        if (hs_a37325uXc9.notEvaluated) {
            return hs_a37325uXc9.hscall();
        } else {
            return hs_a37325uXc9;
        }
    };
    hs_a37425uXcb.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFrom425uXcc.evaluateOnce = function () {
        if (hs_a37425uXcb.notEvaluated) {
            return hs_a37425uXcb.hscall();
        } else {
            return hs_a37425uXcb;
        }
    };
    hs_a37525uXcd.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromThen425uXce.evaluateOnce = function () {
        if (hs_a37525uXcd.notEvaluated) {
            return hs_a37525uXcd.hscall();
        } else {
            return hs_a37525uXcd;
        }
    };
    hs_a37625uXcf.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromTo425uXcg.evaluateOnce = function () {
        if (hs_a37625uXcf.notEvaluated) {
            return hs_a37625uXcf.hscall();
        } else {
            return hs_a37625uXcf;
        }
    };
    hs_a37725uXch.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromThenTo425uXci.evaluateOnce = function () {
        if (hs_a37725uXch.notEvaluated) {
            return hs_a37725uXch.hscall();
        } else {
            return hs_a37725uXch;
        }
    };
    this.hs_zdfEnumCSUSeconds.data = [hs_a37025uXc3, hs_a37125uXc5, hs_a37225uXc7, hs_a37325uXc9, hs_a37425uXcb, hs_a37525uXcd, hs_a37625uXcf, hs_a37725uXch];
    hs_a37825uXcj.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczp425uXck.evaluateOnce = function () {
        if (hs_a37825uXcj.notEvaluated) {
            return hs_a37825uXcj.hscall();
        } else {
            return hs_a37825uXcj;
        }
    };
    hs_a37925uXcl.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczt425uXcm.evaluateOnce = function () {
        if (hs_a37925uXcl.notEvaluated) {
            return hs_a37925uXcl.hscall();
        } else {
            return hs_a37925uXcl;
        }
    };
    hs_a38025uXcn.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczm425uXco.evaluateOnce = function () {
        if (hs_a38025uXcn.notEvaluated) {
            return hs_a38025uXcn.hscall();
        } else {
            return hs_a38025uXcn;
        }
    };
    hs_a38125uXcp.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcnegate425uXcq.evaluateOnce = function () {
        if (hs_a38125uXcp.notEvaluated) {
            return hs_a38125uXcp.hscall();
        } else {
            return hs_a38125uXcp;
        }
    };
    hs_a38225uXcr.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcabs425uXcs.evaluateOnce = function () {
        if (hs_a38225uXcr.notEvaluated) {
            return hs_a38225uXcr.hscall();
        } else {
            return hs_a38225uXcr;
        }
    };
    hs_a38325uXct.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcsignum425uXcu.evaluateOnce = function () {
        if (hs_a38325uXct.notEvaluated) {
            return hs_a38325uXct.hscall();
        } else {
            return hs_a38325uXct;
        }
    };
    hs_a38425uXcv.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcfromInteger425uXcw.evaluateOnce = function () {
        if (hs_a38425uXcv.notEvaluated) {
            return hs_a38425uXcv.hscall();
        } else {
            return hs_a38425uXcv;
        }
    };
    hs_a38525uXcx.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdccompare425uXcy.evaluateOnce = function () {
        if (hs_a38525uXcx.notEvaluated) {
            return hs_a38525uXcx.hscall();
        } else {
            return hs_a38525uXcx;
        }
    };
    hs_a38625uXcz.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczl425uXcA.evaluateOnce = function () {
        if (hs_a38625uXcz.notEvaluated) {
            return hs_a38625uXcz.hscall();
        } else {
            return hs_a38625uXcz;
        }
    };
    hs_a38725uXcB.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczgze425uXcC.evaluateOnce = function () {
        if (hs_a38725uXcB.notEvaluated) {
            return hs_a38725uXcB.hscall();
        } else {
            return hs_a38725uXcB;
        }
    };
    hs_a38825uXcD.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczg425uXcE.evaluateOnce = function () {
        if (hs_a38825uXcD.notEvaluated) {
            return hs_a38825uXcD.hscall();
        } else {
            return hs_a38825uXcD;
        }
    };
    hs_a38925uXcF.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczlze425uXcG.evaluateOnce = function () {
        if (hs_a38925uXcF.notEvaluated) {
            return hs_a38925uXcF.hscall();
        } else {
            return hs_a38925uXcF;
        }
    };
    hs_a39025uXcH.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdcmax425uXcI.evaluateOnce = function () {
        if (hs_a39025uXcH.notEvaluated) {
            return hs_a39025uXcH.hscall();
        } else {
            return hs_a39025uXcH;
        }
    };
    hs_a39125uXcJ.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdcmin425uXcK.evaluateOnce = function () {
        if (hs_a39125uXcJ.notEvaluated) {
            return hs_a39125uXcJ.hscall();
        } else {
            return hs_a39125uXcJ;
        }
    };
    hs_a39225uXcL.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32);
    };
    hs_zdczeze425uXcM.evaluateOnce = function () {
        if (hs_a39225uXcL.notEvaluated) {
            return hs_a39225uXcL.hscall();
        } else {
            return hs_a39225uXcL;
        }
    };
    hs_a39325uXcN.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32);
    };
    hs_zdczsze425uXcO.evaluateOnce = function () {
        if (hs_a39325uXcN.notEvaluated) {
            return hs_a39325uXcN.hscall();
        } else {
            return hs_a39325uXcN;
        }
    };
    this.hs_zdfEqCSUSeconds.data = [hs_a39225uXcL, hs_a39325uXcN];
    this.hs_zdfOrdCSUSeconds.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCSUSeconds, hs_a38525uXcx, hs_a38625uXcz, hs_a38725uXcB, hs_a38825uXcD, hs_a38925uXcF, hs_a39025uXcH, hs_a39125uXcJ];
    this.hs_zdfNumCSUSeconds.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCSUSeconds, $hs.modules.ForeignziCziTypes.hs_zdfShowCSUSeconds, hs_a37825uXcj, hs_a37925uXcl, hs_a38025uXcn, hs_a38125uXcp, hs_a38225uXcr, hs_a38325uXct, hs_a38425uXcv];
    this.hs_zdfRealCSUSeconds.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCSUSeconds, $hs.modules.ForeignziCziTypes.hs_zdfOrdCSUSeconds, hs_a36125uXbL];
    hs_a39425uXcP.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziWord.hs_zdfRealWord32);
    };
    hs_zdctoRational525uXcQ.evaluateOnce = function () {
        if (hs_a39425uXcP.notEvaluated) {
            return hs_a39425uXcP.hscall();
        } else {
            return hs_a39425uXcP;
        }
    };
    hs_a39525uXcR.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcsizzeOf525uXcS.evaluateOnce = function () {
        if (hs_a39525uXcR.notEvaluated) {
            return hs_a39525uXcR.hscall();
        } else {
            return hs_a39525uXcR;
        }
    };
    hs_a39625uXcT.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcalignment525uXcU.evaluateOnce = function () {
        if (hs_a39625uXcT.notEvaluated) {
            return hs_a39625uXcT.hscall();
        } else {
            return hs_a39625uXcT;
        }
    };
    hs_a39725uXcV.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeekElemOff525uXcW.evaluateOnce = function () {
        if (hs_a39725uXcV.notEvaluated) {
            return hs_a39725uXcV.hscall();
        } else {
            return hs_a39725uXcV;
        }
    };
    hs_a39825uXcX.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpokeElemOff525uXcY.evaluateOnce = function () {
        if (hs_a39825uXcX.notEvaluated) {
            return hs_a39825uXcX.hscall();
        } else {
            return hs_a39825uXcX;
        }
    };
    hs_a39925uXcZ.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeekByteOff525uXd0.evaluateOnce = function () {
        if (hs_a39925uXcZ.notEvaluated) {
            return hs_a39925uXcZ.hscall();
        } else {
            return hs_a39925uXcZ;
        }
    };
    hs_a40025uXd1.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpokeByteOff525uXd2.evaluateOnce = function () {
        if (hs_a40025uXd1.notEvaluated) {
            return hs_a40025uXd1.hscall();
        } else {
            return hs_a40025uXd1;
        }
    };
    hs_a40125uXd3.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeek525uXd4.evaluateOnce = function () {
        if (hs_a40125uXd3.notEvaluated) {
            return hs_a40125uXd3.hscall();
        } else {
            return hs_a40125uXd3;
        }
    };
    hs_a40225uXd5.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpoke525uXd6.evaluateOnce = function () {
        if (hs_a40225uXd5.notEvaluated) {
            return hs_a40225uXd5.hscall();
        } else {
            return hs_a40225uXd5;
        }
    };
    this.hs_zdfStorableCUSeconds.data = [hs_a39525uXcR, hs_a39625uXcT, hs_a39725uXcV, hs_a39825uXcX, hs_a39925uXcZ, hs_a40025uXd1, hs_a40125uXd3, hs_a40225uXd5];
    hs_a40325uXd7.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcsucc525uXd8.evaluateOnce = function () {
        if (hs_a40325uXd7.notEvaluated) {
            return hs_a40325uXd7.hscall();
        } else {
            return hs_a40325uXd7;
        }
    };
    hs_a40425uXd9.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcpred525uXda.evaluateOnce = function () {
        if (hs_a40425uXd9.notEvaluated) {
            return hs_a40425uXd9.hscall();
        } else {
            return hs_a40425uXd9;
        }
    };
    hs_a40525uXdb.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdctoEnum525uXdc.evaluateOnce = function () {
        if (hs_a40525uXdb.notEvaluated) {
            return hs_a40525uXdb.hscall();
        } else {
            return hs_a40525uXdb;
        }
    };
    hs_a40625uXdd.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcfromEnum525uXde.evaluateOnce = function () {
        if (hs_a40625uXdd.notEvaluated) {
            return hs_a40625uXdd.hscall();
        } else {
            return hs_a40625uXdd;
        }
    };
    hs_a40725uXdf.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFrom525uXdg.evaluateOnce = function () {
        if (hs_a40725uXdf.notEvaluated) {
            return hs_a40725uXdf.hscall();
        } else {
            return hs_a40725uXdf;
        }
    };
    hs_a40825uXdh.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromThen525uXdi.evaluateOnce = function () {
        if (hs_a40825uXdh.notEvaluated) {
            return hs_a40825uXdh.hscall();
        } else {
            return hs_a40825uXdh;
        }
    };
    hs_a40925uXdj.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromTo525uXdk.evaluateOnce = function () {
        if (hs_a40925uXdj.notEvaluated) {
            return hs_a40925uXdj.hscall();
        } else {
            return hs_a40925uXdj;
        }
    };
    hs_a41025uXdl.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromThenTo525uXdm.evaluateOnce = function () {
        if (hs_a41025uXdl.notEvaluated) {
            return hs_a41025uXdl.hscall();
        } else {
            return hs_a41025uXdl;
        }
    };
    this.hs_zdfEnumCUSeconds.data = [hs_a40325uXd7, hs_a40425uXd9, hs_a40525uXdb, hs_a40625uXdd, hs_a40725uXdf, hs_a40825uXdh, hs_a40925uXdj, hs_a41025uXdl];
    hs_a41125uXdn.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczp525uXdo.evaluateOnce = function () {
        if (hs_a41125uXdn.notEvaluated) {
            return hs_a41125uXdn.hscall();
        } else {
            return hs_a41125uXdn;
        }
    };
    hs_a41225uXdp.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczt525uXdq.evaluateOnce = function () {
        if (hs_a41225uXdp.notEvaluated) {
            return hs_a41225uXdp.hscall();
        } else {
            return hs_a41225uXdp;
        }
    };
    hs_a41325uXdr.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczm525uXds.evaluateOnce = function () {
        if (hs_a41325uXdr.notEvaluated) {
            return hs_a41325uXdr.hscall();
        } else {
            return hs_a41325uXdr;
        }
    };
    hs_a41425uXdt.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcnegate525uXdu.evaluateOnce = function () {
        if (hs_a41425uXdt.notEvaluated) {
            return hs_a41425uXdt.hscall();
        } else {
            return hs_a41425uXdt;
        }
    };
    hs_a41525uXdv.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcabs525uXdw.evaluateOnce = function () {
        if (hs_a41525uXdv.notEvaluated) {
            return hs_a41525uXdv.hscall();
        } else {
            return hs_a41525uXdv;
        }
    };
    hs_a41625uXdx.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcsignum525uXdy.evaluateOnce = function () {
        if (hs_a41625uXdx.notEvaluated) {
            return hs_a41625uXdx.hscall();
        } else {
            return hs_a41625uXdx;
        }
    };
    hs_a41725uXdz.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcfromInteger525uXdA.evaluateOnce = function () {
        if (hs_a41725uXdz.notEvaluated) {
            return hs_a41725uXdz.hscall();
        } else {
            return hs_a41725uXdz;
        }
    };
    hs_a41825uXdB.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdccompare525uXdC.evaluateOnce = function () {
        if (hs_a41825uXdB.notEvaluated) {
            return hs_a41825uXdB.hscall();
        } else {
            return hs_a41825uXdB;
        }
    };
    hs_a41925uXdD.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczl525uXdE.evaluateOnce = function () {
        if (hs_a41925uXdD.notEvaluated) {
            return hs_a41925uXdD.hscall();
        } else {
            return hs_a41925uXdD;
        }
    };
    hs_a42025uXdF.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczgze525uXdG.evaluateOnce = function () {
        if (hs_a42025uXdF.notEvaluated) {
            return hs_a42025uXdF.hscall();
        } else {
            return hs_a42025uXdF;
        }
    };
    hs_a42125uXdH.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczg525uXdI.evaluateOnce = function () {
        if (hs_a42125uXdH.notEvaluated) {
            return hs_a42125uXdH.hscall();
        } else {
            return hs_a42125uXdH;
        }
    };
    hs_a42225uXdJ.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczlze525uXdK.evaluateOnce = function () {
        if (hs_a42225uXdJ.notEvaluated) {
            return hs_a42225uXdJ.hscall();
        } else {
            return hs_a42225uXdJ;
        }
    };
    hs_a42325uXdL.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcmax525uXdM.evaluateOnce = function () {
        if (hs_a42325uXdL.notEvaluated) {
            return hs_a42325uXdL.hscall();
        } else {
            return hs_a42325uXdL;
        }
    };
    hs_a42425uXdN.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcmin525uXdO.evaluateOnce = function () {
        if (hs_a42425uXdN.notEvaluated) {
            return hs_a42425uXdN.hscall();
        } else {
            return hs_a42425uXdN;
        }
    };
    hs_a42525uXdP.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczeze525uXdQ.evaluateOnce = function () {
        if (hs_a42525uXdP.notEvaluated) {
            return hs_a42525uXdP.hscall();
        } else {
            return hs_a42525uXdP;
        }
    };
    hs_a42625uXdR.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczsze525uXdS.evaluateOnce = function () {
        if (hs_a42625uXdR.notEvaluated) {
            return hs_a42625uXdR.hscall();
        } else {
            return hs_a42625uXdR;
        }
    };
    this.hs_zdfEqCUSeconds.data = [hs_a42525uXdP, hs_a42625uXdR];
    this.hs_zdfOrdCUSeconds.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCUSeconds, hs_a41825uXdB, hs_a41925uXdD, hs_a42025uXdF, hs_a42125uXdH, hs_a42225uXdJ, hs_a42325uXdL, hs_a42425uXdN];
    this.hs_zdfNumCUSeconds.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCUSeconds, $hs.modules.ForeignziCziTypes.hs_zdfShowCUSeconds, hs_a41125uXdn, hs_a41225uXdp, hs_a41325uXdr, hs_a41425uXdt, hs_a41525uXdv, hs_a41625uXdx, hs_a41725uXdz];
    this.hs_zdfRealCUSeconds.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCUSeconds, $hs.modules.ForeignziCziTypes.hs_zdfOrdCUSeconds, hs_a39425uXcP];
    hs_a42725uXdT.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziInt.hs_zdfRealInt32);
    };
    hs_zdctoRational625uXdU.evaluateOnce = function () {
        if (hs_a42725uXdT.notEvaluated) {
            return hs_a42725uXdT.hscall();
        } else {
            return hs_a42725uXdT;
        }
    };
    hs_a42825uXdV.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcsizzeOf625uXdW.evaluateOnce = function () {
        if (hs_a42825uXdV.notEvaluated) {
            return hs_a42825uXdV.hscall();
        } else {
            return hs_a42825uXdV;
        }
    };
    hs_a42925uXdX.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcalignment625uXdY.evaluateOnce = function () {
        if (hs_a42925uXdX.notEvaluated) {
            return hs_a42925uXdX.hscall();
        } else {
            return hs_a42925uXdX;
        }
    };
    hs_a43025uXdZ.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeekElemOff625uXe0.evaluateOnce = function () {
        if (hs_a43025uXdZ.notEvaluated) {
            return hs_a43025uXdZ.hscall();
        } else {
            return hs_a43025uXdZ;
        }
    };
    hs_a43125uXe1.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpokeElemOff625uXe2.evaluateOnce = function () {
        if (hs_a43125uXe1.notEvaluated) {
            return hs_a43125uXe1.hscall();
        } else {
            return hs_a43125uXe1;
        }
    };
    hs_a43225uXe3.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeekByteOff625uXe4.evaluateOnce = function () {
        if (hs_a43225uXe3.notEvaluated) {
            return hs_a43225uXe3.hscall();
        } else {
            return hs_a43225uXe3;
        }
    };
    hs_a43325uXe5.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpokeByteOff625uXe6.evaluateOnce = function () {
        if (hs_a43325uXe5.notEvaluated) {
            return hs_a43325uXe5.hscall();
        } else {
            return hs_a43325uXe5;
        }
    };
    hs_a43425uXe7.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeek625uXe8.evaluateOnce = function () {
        if (hs_a43425uXe7.notEvaluated) {
            return hs_a43425uXe7.hscall();
        } else {
            return hs_a43425uXe7;
        }
    };
    hs_a43525uXe9.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpoke625uXea.evaluateOnce = function () {
        if (hs_a43525uXe9.notEvaluated) {
            return hs_a43525uXe9.hscall();
        } else {
            return hs_a43525uXe9;
        }
    };
    this.hs_zdfStorableCTime.data = [hs_a42825uXdV, hs_a42925uXdX, hs_a43025uXdZ, hs_a43125uXe1, hs_a43225uXe3, hs_a43325uXe5, hs_a43425uXe7, hs_a43525uXe9];
    hs_a43625uXeb.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcsucc625uXec.evaluateOnce = function () {
        if (hs_a43625uXeb.notEvaluated) {
            return hs_a43625uXeb.hscall();
        } else {
            return hs_a43625uXeb;
        }
    };
    hs_a43725uXed.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcpred625uXee.evaluateOnce = function () {
        if (hs_a43725uXed.notEvaluated) {
            return hs_a43725uXed.hscall();
        } else {
            return hs_a43725uXed;
        }
    };
    hs_a43825uXef.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdctoEnum625uXeg.evaluateOnce = function () {
        if (hs_a43825uXef.notEvaluated) {
            return hs_a43825uXef.hscall();
        } else {
            return hs_a43825uXef;
        }
    };
    hs_a43925uXeh.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcfromEnum625uXei.evaluateOnce = function () {
        if (hs_a43925uXeh.notEvaluated) {
            return hs_a43925uXeh.hscall();
        } else {
            return hs_a43925uXeh;
        }
    };
    hs_a44025uXej.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFrom625uXek.evaluateOnce = function () {
        if (hs_a44025uXej.notEvaluated) {
            return hs_a44025uXej.hscall();
        } else {
            return hs_a44025uXej;
        }
    };
    hs_a44125uXel.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromThen625uXem.evaluateOnce = function () {
        if (hs_a44125uXel.notEvaluated) {
            return hs_a44125uXel.hscall();
        } else {
            return hs_a44125uXel;
        }
    };
    hs_a44225uXen.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromTo625uXeo.evaluateOnce = function () {
        if (hs_a44225uXen.notEvaluated) {
            return hs_a44225uXen.hscall();
        } else {
            return hs_a44225uXen;
        }
    };
    hs_a44325uXep.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromThenTo625uXeq.evaluateOnce = function () {
        if (hs_a44325uXep.notEvaluated) {
            return hs_a44325uXep.hscall();
        } else {
            return hs_a44325uXep;
        }
    };
    this.hs_zdfEnumCTime.data = [hs_a43625uXeb, hs_a43725uXed, hs_a43825uXef, hs_a43925uXeh, hs_a44025uXej, hs_a44125uXel, hs_a44225uXen, hs_a44325uXep];
    hs_a44425uXer.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczp625uXes.evaluateOnce = function () {
        if (hs_a44425uXer.notEvaluated) {
            return hs_a44425uXer.hscall();
        } else {
            return hs_a44425uXer;
        }
    };
    hs_a44525uXet.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczt625uXeu.evaluateOnce = function () {
        if (hs_a44525uXet.notEvaluated) {
            return hs_a44525uXet.hscall();
        } else {
            return hs_a44525uXet;
        }
    };
    hs_a44625uXev.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczm625uXew.evaluateOnce = function () {
        if (hs_a44625uXev.notEvaluated) {
            return hs_a44625uXev.hscall();
        } else {
            return hs_a44625uXev;
        }
    };
    hs_a44725uXex.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcnegate625uXey.evaluateOnce = function () {
        if (hs_a44725uXex.notEvaluated) {
            return hs_a44725uXex.hscall();
        } else {
            return hs_a44725uXex;
        }
    };
    hs_a44825uXez.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcabs625uXeA.evaluateOnce = function () {
        if (hs_a44825uXez.notEvaluated) {
            return hs_a44825uXez.hscall();
        } else {
            return hs_a44825uXez;
        }
    };
    hs_a44925uXeB.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcsignum625uXeC.evaluateOnce = function () {
        if (hs_a44925uXeB.notEvaluated) {
            return hs_a44925uXeB.hscall();
        } else {
            return hs_a44925uXeB;
        }
    };
    hs_a45025uXeD.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcfromInteger625uXeE.evaluateOnce = function () {
        if (hs_a45025uXeD.notEvaluated) {
            return hs_a45025uXeD.hscall();
        } else {
            return hs_a45025uXeD;
        }
    };
    hs_a45125uXeF.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdccompare625uXeG.evaluateOnce = function () {
        if (hs_a45125uXeF.notEvaluated) {
            return hs_a45125uXeF.hscall();
        } else {
            return hs_a45125uXeF;
        }
    };
    hs_a45225uXeH.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczl625uXeI.evaluateOnce = function () {
        if (hs_a45225uXeH.notEvaluated) {
            return hs_a45225uXeH.hscall();
        } else {
            return hs_a45225uXeH;
        }
    };
    hs_a45325uXeJ.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczgze625uXeK.evaluateOnce = function () {
        if (hs_a45325uXeJ.notEvaluated) {
            return hs_a45325uXeJ.hscall();
        } else {
            return hs_a45325uXeJ;
        }
    };
    hs_a45425uXeL.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczg625uXeM.evaluateOnce = function () {
        if (hs_a45425uXeL.notEvaluated) {
            return hs_a45425uXeL.hscall();
        } else {
            return hs_a45425uXeL;
        }
    };
    hs_a45525uXeN.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczlze625uXeO.evaluateOnce = function () {
        if (hs_a45525uXeN.notEvaluated) {
            return hs_a45525uXeN.hscall();
        } else {
            return hs_a45525uXeN;
        }
    };
    hs_a45625uXeP.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdcmax625uXeQ.evaluateOnce = function () {
        if (hs_a45625uXeP.notEvaluated) {
            return hs_a45625uXeP.hscall();
        } else {
            return hs_a45625uXeP;
        }
    };
    hs_a45725uXeR.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdcmin625uXeS.evaluateOnce = function () {
        if (hs_a45725uXeR.notEvaluated) {
            return hs_a45725uXeR.hscall();
        } else {
            return hs_a45725uXeR;
        }
    };
    hs_a45825uXeT.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32);
    };
    hs_zdczeze625uXeU.evaluateOnce = function () {
        if (hs_a45825uXeT.notEvaluated) {
            return hs_a45825uXeT.hscall();
        } else {
            return hs_a45825uXeT;
        }
    };
    hs_a45925uXeV.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32);
    };
    hs_zdczsze625uXeW.evaluateOnce = function () {
        if (hs_a45925uXeV.notEvaluated) {
            return hs_a45925uXeV.hscall();
        } else {
            return hs_a45925uXeV;
        }
    };
    this.hs_zdfEqCTime.data = [hs_a45825uXeT, hs_a45925uXeV];
    this.hs_zdfOrdCTime.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCTime, hs_a45125uXeF, hs_a45225uXeH, hs_a45325uXeJ, hs_a45425uXeL, hs_a45525uXeN, hs_a45625uXeP, hs_a45725uXeR];
    this.hs_zdfNumCTime.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCTime, $hs.modules.ForeignziCziTypes.hs_zdfShowCTime, hs_a44425uXer, hs_a44525uXet, hs_a44625uXev, hs_a44725uXex, hs_a44825uXez, hs_a44925uXeB, hs_a45025uXeD];
    this.hs_zdfRealCTime.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCTime, $hs.modules.ForeignziCziTypes.hs_zdfOrdCTime, hs_a42725uXdT];
    hs_a46025uXeX.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziInt.hs_zdfRealInt32);
    };
    hs_zdctoRational725uXeY.evaluateOnce = function () {
        if (hs_a46025uXeX.notEvaluated) {
            return hs_a46025uXeX.hscall();
        } else {
            return hs_a46025uXeX;
        }
    };
    hs_a46125uXeZ.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcsizzeOf725uXf0.evaluateOnce = function () {
        if (hs_a46125uXeZ.notEvaluated) {
            return hs_a46125uXeZ.hscall();
        } else {
            return hs_a46125uXeZ;
        }
    };
    hs_a46225uXf1.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcalignment725uXf2.evaluateOnce = function () {
        if (hs_a46225uXf1.notEvaluated) {
            return hs_a46225uXf1.hscall();
        } else {
            return hs_a46225uXf1;
        }
    };
    hs_a46325uXf3.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeekElemOff725uXf4.evaluateOnce = function () {
        if (hs_a46325uXf3.notEvaluated) {
            return hs_a46325uXf3.hscall();
        } else {
            return hs_a46325uXf3;
        }
    };
    hs_a46425uXf5.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpokeElemOff725uXf6.evaluateOnce = function () {
        if (hs_a46425uXf5.notEvaluated) {
            return hs_a46425uXf5.hscall();
        } else {
            return hs_a46425uXf5;
        }
    };
    hs_a46525uXf7.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeekByteOff725uXf8.evaluateOnce = function () {
        if (hs_a46525uXf7.notEvaluated) {
            return hs_a46525uXf7.hscall();
        } else {
            return hs_a46525uXf7;
        }
    };
    hs_a46625uXf9.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpokeByteOff725uXfa.evaluateOnce = function () {
        if (hs_a46625uXf9.notEvaluated) {
            return hs_a46625uXf9.hscall();
        } else {
            return hs_a46625uXf9;
        }
    };
    hs_a46725uXfb.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeek725uXfc.evaluateOnce = function () {
        if (hs_a46725uXfb.notEvaluated) {
            return hs_a46725uXfb.hscall();
        } else {
            return hs_a46725uXfb;
        }
    };
    hs_a46825uXfd.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpoke725uXfe.evaluateOnce = function () {
        if (hs_a46825uXfd.notEvaluated) {
            return hs_a46825uXfd.hscall();
        } else {
            return hs_a46825uXfd;
        }
    };
    this.hs_zdfStorableCClock.data = [hs_a46125uXeZ, hs_a46225uXf1, hs_a46325uXf3, hs_a46425uXf5, hs_a46525uXf7, hs_a46625uXf9, hs_a46725uXfb, hs_a46825uXfd];
    hs_a46925uXff.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcsucc725uXfg.evaluateOnce = function () {
        if (hs_a46925uXff.notEvaluated) {
            return hs_a46925uXff.hscall();
        } else {
            return hs_a46925uXff;
        }
    };
    hs_a47025uXfh.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcpred725uXfi.evaluateOnce = function () {
        if (hs_a47025uXfh.notEvaluated) {
            return hs_a47025uXfh.hscall();
        } else {
            return hs_a47025uXfh;
        }
    };
    hs_a47125uXfj.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdctoEnum725uXfk.evaluateOnce = function () {
        if (hs_a47125uXfj.notEvaluated) {
            return hs_a47125uXfj.hscall();
        } else {
            return hs_a47125uXfj;
        }
    };
    hs_a47225uXfl.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcfromEnum725uXfm.evaluateOnce = function () {
        if (hs_a47225uXfl.notEvaluated) {
            return hs_a47225uXfl.hscall();
        } else {
            return hs_a47225uXfl;
        }
    };
    hs_a47325uXfn.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFrom725uXfo.evaluateOnce = function () {
        if (hs_a47325uXfn.notEvaluated) {
            return hs_a47325uXfn.hscall();
        } else {
            return hs_a47325uXfn;
        }
    };
    hs_a47425uXfp.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromThen725uXfq.evaluateOnce = function () {
        if (hs_a47425uXfp.notEvaluated) {
            return hs_a47425uXfp.hscall();
        } else {
            return hs_a47425uXfp;
        }
    };
    hs_a47525uXfr.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromTo725uXfs.evaluateOnce = function () {
        if (hs_a47525uXfr.notEvaluated) {
            return hs_a47525uXfr.hscall();
        } else {
            return hs_a47525uXfr;
        }
    };
    hs_a47625uXft.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromThenTo725uXfu.evaluateOnce = function () {
        if (hs_a47625uXft.notEvaluated) {
            return hs_a47625uXft.hscall();
        } else {
            return hs_a47625uXft;
        }
    };
    this.hs_zdfEnumCClock.data = [hs_a46925uXff, hs_a47025uXfh, hs_a47125uXfj, hs_a47225uXfl, hs_a47325uXfn, hs_a47425uXfp, hs_a47525uXfr, hs_a47625uXft];
    hs_a47725uXfv.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczp725uXfw.evaluateOnce = function () {
        if (hs_a47725uXfv.notEvaluated) {
            return hs_a47725uXfv.hscall();
        } else {
            return hs_a47725uXfv;
        }
    };
    hs_a47825uXfx.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczt725uXfy.evaluateOnce = function () {
        if (hs_a47825uXfx.notEvaluated) {
            return hs_a47825uXfx.hscall();
        } else {
            return hs_a47825uXfx;
        }
    };
    hs_a47925uXfz.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczm725uXfA.evaluateOnce = function () {
        if (hs_a47925uXfz.notEvaluated) {
            return hs_a47925uXfz.hscall();
        } else {
            return hs_a47925uXfz;
        }
    };
    hs_a48025uXfB.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcnegate725uXfC.evaluateOnce = function () {
        if (hs_a48025uXfB.notEvaluated) {
            return hs_a48025uXfB.hscall();
        } else {
            return hs_a48025uXfB;
        }
    };
    hs_a48125uXfD.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcabs725uXfE.evaluateOnce = function () {
        if (hs_a48125uXfD.notEvaluated) {
            return hs_a48125uXfD.hscall();
        } else {
            return hs_a48125uXfD;
        }
    };
    hs_a48225uXfF.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcsignum725uXfG.evaluateOnce = function () {
        if (hs_a48225uXfF.notEvaluated) {
            return hs_a48225uXfF.hscall();
        } else {
            return hs_a48225uXfF;
        }
    };
    hs_a48325uXfH.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcfromInteger725uXfI.evaluateOnce = function () {
        if (hs_a48325uXfH.notEvaluated) {
            return hs_a48325uXfH.hscall();
        } else {
            return hs_a48325uXfH;
        }
    };
    hs_a48425uXfJ.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdccompare725uXfK.evaluateOnce = function () {
        if (hs_a48425uXfJ.notEvaluated) {
            return hs_a48425uXfJ.hscall();
        } else {
            return hs_a48425uXfJ;
        }
    };
    hs_a48525uXfL.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczl725uXfM.evaluateOnce = function () {
        if (hs_a48525uXfL.notEvaluated) {
            return hs_a48525uXfL.hscall();
        } else {
            return hs_a48525uXfL;
        }
    };
    hs_a48625uXfN.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczgze725uXfO.evaluateOnce = function () {
        if (hs_a48625uXfN.notEvaluated) {
            return hs_a48625uXfN.hscall();
        } else {
            return hs_a48625uXfN;
        }
    };
    hs_a48725uXfP.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczg725uXfQ.evaluateOnce = function () {
        if (hs_a48725uXfP.notEvaluated) {
            return hs_a48725uXfP.hscall();
        } else {
            return hs_a48725uXfP;
        }
    };
    hs_a48825uXfR.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczlze725uXfS.evaluateOnce = function () {
        if (hs_a48825uXfR.notEvaluated) {
            return hs_a48825uXfR.hscall();
        } else {
            return hs_a48825uXfR;
        }
    };
    hs_a48925uXfT.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdcmax725uXfU.evaluateOnce = function () {
        if (hs_a48925uXfT.notEvaluated) {
            return hs_a48925uXfT.hscall();
        } else {
            return hs_a48925uXfT;
        }
    };
    hs_a49025uXfV.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdcmin725uXfW.evaluateOnce = function () {
        if (hs_a49025uXfV.notEvaluated) {
            return hs_a49025uXfV.hscall();
        } else {
            return hs_a49025uXfV;
        }
    };
    hs_a49125uXfX.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32);
    };
    hs_zdczeze725uXfY.evaluateOnce = function () {
        if (hs_a49125uXfX.notEvaluated) {
            return hs_a49125uXfX.hscall();
        } else {
            return hs_a49125uXfX;
        }
    };
    hs_a49225uXfZ.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32);
    };
    hs_zdczsze725uXg0.evaluateOnce = function () {
        if (hs_a49225uXfZ.notEvaluated) {
            return hs_a49225uXfZ.hscall();
        } else {
            return hs_a49225uXfZ;
        }
    };
    this.hs_zdfEqCClock.data = [hs_a49125uXfX, hs_a49225uXfZ];
    this.hs_zdfOrdCClock.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCClock, hs_a48425uXfJ, hs_a48525uXfL, hs_a48625uXfN, hs_a48725uXfP, hs_a48825uXfR, hs_a48925uXfT, hs_a49025uXfV];
    this.hs_zdfNumCClock.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCClock, $hs.modules.ForeignziCziTypes.hs_zdfShowCClock, hs_a47725uXfv, hs_a47825uXfx, hs_a47925uXfz, hs_a48025uXfB, hs_a48125uXfD, hs_a48225uXfF, hs_a48325uXfH];
    this.hs_zdfRealCClock.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCClock, $hs.modules.ForeignziCziTypes.hs_zdfOrdCClock, hs_a46025uXeX];
    hs_a49325uXg1.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdczizazi425uXg2.evaluateOnce = function () {
        if (hs_a49325uXg1.notEvaluated) {
            return hs_a49325uXg1.hscall();
        } else {
            return hs_a49325uXg1;
        }
    };
    hs_a49425uXg3.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdczizbzi425uXg4.evaluateOnce = function () {
        if (hs_a49425uXg3.notEvaluated) {
            return hs_a49425uXg3.hscall();
        } else {
            return hs_a49425uXg3;
        }
    };
    hs_a49525uXg5.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcxor425uXg6.evaluateOnce = function () {
        if (hs_a49525uXg5.notEvaluated) {
            return hs_a49525uXg5.hscall();
        } else {
            return hs_a49525uXg5;
        }
    };
    hs_a49625uXg7.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdccomplement425uXg8.evaluateOnce = function () {
        if (hs_a49625uXg7.notEvaluated) {
            return hs_a49625uXg7.hscall();
        } else {
            return hs_a49625uXg7;
        }
    };
    hs_a49725uXg9.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshift425uXga.evaluateOnce = function () {
        if (hs_a49725uXg9.notEvaluated) {
            return hs_a49725uXg9.hscall();
        } else {
            return hs_a49725uXg9;
        }
    };
    hs_a49825uXgb.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotate425uXgc.evaluateOnce = function () {
        if (hs_a49825uXgb.notEvaluated) {
            return hs_a49825uXgb.hscall();
        } else {
            return hs_a49825uXgb;
        }
    };
    hs_a49925uXgd.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcbit425uXge.evaluateOnce = function () {
        if (hs_a49925uXgd.notEvaluated) {
            return hs_a49925uXgd.hscall();
        } else {
            return hs_a49925uXgd;
        }
    };
    hs_a50025uXgf.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcsetBit425uXgg.evaluateOnce = function () {
        if (hs_a50025uXgf.notEvaluated) {
            return hs_a50025uXgf.hscall();
        } else {
            return hs_a50025uXgf;
        }
    };
    hs_a50125uXgh.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcclearBit425uXgi.evaluateOnce = function () {
        if (hs_a50125uXgh.notEvaluated) {
            return hs_a50125uXgh.hscall();
        } else {
            return hs_a50125uXgh;
        }
    };
    hs_a50225uXgj.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdccomplementBit425uXgk.evaluateOnce = function () {
        if (hs_a50225uXgj.notEvaluated) {
            return hs_a50225uXgj.hscall();
        } else {
            return hs_a50225uXgj;
        }
    };
    hs_a50325uXgl.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdctestBit425uXgm.evaluateOnce = function () {
        if (hs_a50325uXgl.notEvaluated) {
            return hs_a50325uXgl.hscall();
        } else {
            return hs_a50325uXgl;
        }
    };
    hs_a50425uXgn.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcbitSizze425uXgo.evaluateOnce = function () {
        if (hs_a50425uXgn.notEvaluated) {
            return hs_a50425uXgn.hscall();
        } else {
            return hs_a50425uXgn;
        }
    };
    hs_a50525uXgp.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcisSigned425uXgq.evaluateOnce = function () {
        if (hs_a50525uXgp.notEvaluated) {
            return hs_a50525uXgp.hscall();
        } else {
            return hs_a50525uXgp;
        }
    };
    hs_a50625uXgr.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshiftL425uXgs.evaluateOnce = function () {
        if (hs_a50625uXgr.notEvaluated) {
            return hs_a50625uXgr.hscall();
        } else {
            return hs_a50625uXgr;
        }
    };
    hs_a50725uXgt.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshiftR425uXgu.evaluateOnce = function () {
        if (hs_a50725uXgt.notEvaluated) {
            return hs_a50725uXgt.hscall();
        } else {
            return hs_a50725uXgt;
        }
    };
    hs_a50825uXgv.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotateL425uXgw.evaluateOnce = function () {
        if (hs_a50825uXgv.notEvaluated) {
            return hs_a50825uXgv.hscall();
        } else {
            return hs_a50825uXgv;
        }
    };
    hs_a50925uXgx.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotateR425uXgy.evaluateOnce = function () {
        if (hs_a50925uXgx.notEvaluated) {
            return hs_a50925uXgx.hscall();
        } else {
            return hs_a50925uXgx;
        }
    };
    hs_a51025uXgz.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcquot425uXgA.evaluateOnce = function () {
        if (hs_a51025uXgz.notEvaluated) {
            return hs_a51025uXgz.hscall();
        } else {
            return hs_a51025uXgz;
        }
    };
    hs_a51125uXgB.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcrem425uXgC.evaluateOnce = function () {
        if (hs_a51125uXgB.notEvaluated) {
            return hs_a51125uXgB.hscall();
        } else {
            return hs_a51125uXgB;
        }
    };
    hs_a51225uXgD.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcdiv425uXgE.evaluateOnce = function () {
        if (hs_a51225uXgD.notEvaluated) {
            return hs_a51225uXgD.hscall();
        } else {
            return hs_a51225uXgD;
        }
    };
    hs_a51325uXgF.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcmod425uXgG.evaluateOnce = function () {
        if (hs_a51325uXgF.notEvaluated) {
            return hs_a51325uXgF.hscall();
        } else {
            return hs_a51325uXgF;
        }
    };
    hs_a51425uXgH.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcquotRem425uXgI.evaluateOnce = function () {
        if (hs_a51425uXgH.notEvaluated) {
            return hs_a51425uXgH.hscall();
        } else {
            return hs_a51425uXgH;
        }
    };
    hs_a51525uXgJ.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcdivMod425uXgK.evaluateOnce = function () {
        if (hs_a51525uXgJ.notEvaluated) {
            return hs_a51525uXgJ.hscall();
        } else {
            return hs_a51525uXgJ;
        }
    };
    hs_a51625uXgL.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdctoInteger425uXgM.evaluateOnce = function () {
        if (hs_a51625uXgL.notEvaluated) {
            return hs_a51625uXgL.hscall();
        } else {
            return hs_a51625uXgL;
        }
    };
    hs_a51725uXgN.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt32);
    };
    hs_zdcminBound425uXgO.evaluateOnce = function () {
        if (hs_a51725uXgN.notEvaluated) {
            return hs_a51725uXgN.hscall();
        } else {
            return hs_a51725uXgN;
        }
    };
    hs_a51825uXgP.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt32);
    };
    hs_zdcmaxBound425uXgQ.evaluateOnce = function () {
        if (hs_a51825uXgP.notEvaluated) {
            return hs_a51825uXgP.hscall();
        } else {
            return hs_a51825uXgP;
        }
    };
    this.hs_zdfBoundedCSigAtomic.data = [hs_a51725uXgN, hs_a51825uXgP];
    hs_a51925uXgR.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziInt.hs_zdfRealInt32);
    };
    hs_zdctoRational825uXgS.evaluateOnce = function () {
        if (hs_a51925uXgR.notEvaluated) {
            return hs_a51925uXgR.hscall();
        } else {
            return hs_a51925uXgR;
        }
    };
    hs_a52025uXgT.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcsizzeOf825uXgU.evaluateOnce = function () {
        if (hs_a52025uXgT.notEvaluated) {
            return hs_a52025uXgT.hscall();
        } else {
            return hs_a52025uXgT;
        }
    };
    hs_a52125uXgV.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcalignment825uXgW.evaluateOnce = function () {
        if (hs_a52125uXgV.notEvaluated) {
            return hs_a52125uXgV.hscall();
        } else {
            return hs_a52125uXgV;
        }
    };
    hs_a52225uXgX.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeekElemOff825uXgY.evaluateOnce = function () {
        if (hs_a52225uXgX.notEvaluated) {
            return hs_a52225uXgX.hscall();
        } else {
            return hs_a52225uXgX;
        }
    };
    hs_a52325uXgZ.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpokeElemOff825uXh0.evaluateOnce = function () {
        if (hs_a52325uXgZ.notEvaluated) {
            return hs_a52325uXgZ.hscall();
        } else {
            return hs_a52325uXgZ;
        }
    };
    hs_a52425uXh1.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeekByteOff825uXh2.evaluateOnce = function () {
        if (hs_a52425uXh1.notEvaluated) {
            return hs_a52425uXh1.hscall();
        } else {
            return hs_a52425uXh1;
        }
    };
    hs_a52525uXh3.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpokeByteOff825uXh4.evaluateOnce = function () {
        if (hs_a52525uXh3.notEvaluated) {
            return hs_a52525uXh3.hscall();
        } else {
            return hs_a52525uXh3;
        }
    };
    hs_a52625uXh5.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeek825uXh6.evaluateOnce = function () {
        if (hs_a52625uXh5.notEvaluated) {
            return hs_a52625uXh5.hscall();
        } else {
            return hs_a52625uXh5;
        }
    };
    hs_a52725uXh7.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpoke825uXh8.evaluateOnce = function () {
        if (hs_a52725uXh7.notEvaluated) {
            return hs_a52725uXh7.hscall();
        } else {
            return hs_a52725uXh7;
        }
    };
    this.hs_zdfStorableCSigAtomic.data = [hs_a52025uXgT, hs_a52125uXgV, hs_a52225uXgX, hs_a52325uXgZ, hs_a52425uXh1, hs_a52525uXh3, hs_a52625uXh5, hs_a52725uXh7];
    hs_a52825uXh9.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcsucc825uXha.evaluateOnce = function () {
        if (hs_a52825uXh9.notEvaluated) {
            return hs_a52825uXh9.hscall();
        } else {
            return hs_a52825uXh9;
        }
    };
    hs_a52925uXhb.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcpred825uXhc.evaluateOnce = function () {
        if (hs_a52925uXhb.notEvaluated) {
            return hs_a52925uXhb.hscall();
        } else {
            return hs_a52925uXhb;
        }
    };
    hs_a53025uXhd.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdctoEnum825uXhe.evaluateOnce = function () {
        if (hs_a53025uXhd.notEvaluated) {
            return hs_a53025uXhd.hscall();
        } else {
            return hs_a53025uXhd;
        }
    };
    hs_a53125uXhf.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcfromEnum825uXhg.evaluateOnce = function () {
        if (hs_a53125uXhf.notEvaluated) {
            return hs_a53125uXhf.hscall();
        } else {
            return hs_a53125uXhf;
        }
    };
    hs_a53225uXhh.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFrom825uXhi.evaluateOnce = function () {
        if (hs_a53225uXhh.notEvaluated) {
            return hs_a53225uXhh.hscall();
        } else {
            return hs_a53225uXhh;
        }
    };
    hs_a53325uXhj.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromThen825uXhk.evaluateOnce = function () {
        if (hs_a53325uXhj.notEvaluated) {
            return hs_a53325uXhj.hscall();
        } else {
            return hs_a53325uXhj;
        }
    };
    hs_a53425uXhl.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromTo825uXhm.evaluateOnce = function () {
        if (hs_a53425uXhl.notEvaluated) {
            return hs_a53425uXhl.hscall();
        } else {
            return hs_a53425uXhl;
        }
    };
    hs_a53525uXhn.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromThenTo825uXho.evaluateOnce = function () {
        if (hs_a53525uXhn.notEvaluated) {
            return hs_a53525uXhn.hscall();
        } else {
            return hs_a53525uXhn;
        }
    };
    this.hs_zdfEnumCSigAtomic.data = [hs_a52825uXh9, hs_a52925uXhb, hs_a53025uXhd, hs_a53125uXhf, hs_a53225uXhh, hs_a53325uXhj, hs_a53425uXhl, hs_a53525uXhn];
    hs_a53625uXhp.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczp825uXhq.evaluateOnce = function () {
        if (hs_a53625uXhp.notEvaluated) {
            return hs_a53625uXhp.hscall();
        } else {
            return hs_a53625uXhp;
        }
    };
    hs_a53725uXhr.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczt825uXhs.evaluateOnce = function () {
        if (hs_a53725uXhr.notEvaluated) {
            return hs_a53725uXhr.hscall();
        } else {
            return hs_a53725uXhr;
        }
    };
    hs_a53825uXht.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczm825uXhu.evaluateOnce = function () {
        if (hs_a53825uXht.notEvaluated) {
            return hs_a53825uXht.hscall();
        } else {
            return hs_a53825uXht;
        }
    };
    hs_a53925uXhv.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcnegate825uXhw.evaluateOnce = function () {
        if (hs_a53925uXhv.notEvaluated) {
            return hs_a53925uXhv.hscall();
        } else {
            return hs_a53925uXhv;
        }
    };
    hs_a54025uXhx.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcabs825uXhy.evaluateOnce = function () {
        if (hs_a54025uXhx.notEvaluated) {
            return hs_a54025uXhx.hscall();
        } else {
            return hs_a54025uXhx;
        }
    };
    hs_a54125uXhz.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcsignum825uXhA.evaluateOnce = function () {
        if (hs_a54125uXhz.notEvaluated) {
            return hs_a54125uXhz.hscall();
        } else {
            return hs_a54125uXhz;
        }
    };
    hs_a54225uXhB.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcfromInteger825uXhC.evaluateOnce = function () {
        if (hs_a54225uXhB.notEvaluated) {
            return hs_a54225uXhB.hscall();
        } else {
            return hs_a54225uXhB;
        }
    };
    hs_a54325uXhD.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdccompare825uXhE.evaluateOnce = function () {
        if (hs_a54325uXhD.notEvaluated) {
            return hs_a54325uXhD.hscall();
        } else {
            return hs_a54325uXhD;
        }
    };
    hs_a54425uXhF.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczl825uXhG.evaluateOnce = function () {
        if (hs_a54425uXhF.notEvaluated) {
            return hs_a54425uXhF.hscall();
        } else {
            return hs_a54425uXhF;
        }
    };
    hs_a54525uXhH.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczgze825uXhI.evaluateOnce = function () {
        if (hs_a54525uXhH.notEvaluated) {
            return hs_a54525uXhH.hscall();
        } else {
            return hs_a54525uXhH;
        }
    };
    hs_a54625uXhJ.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczg825uXhK.evaluateOnce = function () {
        if (hs_a54625uXhJ.notEvaluated) {
            return hs_a54625uXhJ.hscall();
        } else {
            return hs_a54625uXhJ;
        }
    };
    hs_a54725uXhL.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczlze825uXhM.evaluateOnce = function () {
        if (hs_a54725uXhL.notEvaluated) {
            return hs_a54725uXhL.hscall();
        } else {
            return hs_a54725uXhL;
        }
    };
    hs_a54825uXhN.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdcmax825uXhO.evaluateOnce = function () {
        if (hs_a54825uXhN.notEvaluated) {
            return hs_a54825uXhN.hscall();
        } else {
            return hs_a54825uXhN;
        }
    };
    hs_a54925uXhP.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdcmin825uXhQ.evaluateOnce = function () {
        if (hs_a54925uXhP.notEvaluated) {
            return hs_a54925uXhP.hscall();
        } else {
            return hs_a54925uXhP;
        }
    };
    hs_a55025uXhR.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32);
    };
    hs_zdczeze825uXhS.evaluateOnce = function () {
        if (hs_a55025uXhR.notEvaluated) {
            return hs_a55025uXhR.hscall();
        } else {
            return hs_a55025uXhR;
        }
    };
    hs_a55125uXhT.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32);
    };
    hs_zdczsze825uXhU.evaluateOnce = function () {
        if (hs_a55125uXhT.notEvaluated) {
            return hs_a55125uXhT.hscall();
        } else {
            return hs_a55125uXhT;
        }
    };
    this.hs_zdfEqCSigAtomic.data = [hs_a55025uXhR, hs_a55125uXhT];
    this.hs_zdfOrdCSigAtomic.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCSigAtomic, hs_a54325uXhD, hs_a54425uXhF, hs_a54525uXhH, hs_a54625uXhJ, hs_a54725uXhL, hs_a54825uXhN, hs_a54925uXhP];
    this.hs_zdfNumCSigAtomic.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCSigAtomic, $hs.modules.ForeignziCziTypes.hs_zdfShowCSigAtomic, hs_a53625uXhp, hs_a53725uXhr, hs_a53825uXht, hs_a53925uXhv, hs_a54025uXhx, hs_a54125uXhz, hs_a54225uXhB];
    this.hs_zdfRealCSigAtomic.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCSigAtomic, $hs.modules.ForeignziCziTypes.hs_zdfOrdCSigAtomic, hs_a51925uXgR];
    this.hs_zdfIntegralCSigAtomic.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealCSigAtomic, $hs.modules.ForeignziCziTypes.hs_zdfEnumCSigAtomic, hs_a51025uXgz, hs_a51125uXgB, hs_a51225uXgD, hs_a51325uXgF, hs_a51425uXgH, hs_a51525uXgJ, hs_a51625uXgL];
    this.hs_zdfBitsCSigAtomic.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCSigAtomic, hs_a49325uXg1, hs_a49425uXg3, hs_a49525uXg5, hs_a49625uXg7, hs_a49725uXg9, hs_a49825uXgb, hs_a49925uXgd, hs_a50025uXgf, hs_a50125uXgh, hs_a50225uXgj, hs_a50325uXgl, hs_a50425uXgn, hs_a50525uXgp, hs_a50625uXgr, hs_a50725uXgt, hs_a50825uXgv, hs_a50925uXgx];
    hs_a55225uXhV.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdczizazi525uXhW.evaluateOnce = function () {
        if (hs_a55225uXhV.notEvaluated) {
            return hs_a55225uXhV.hscall();
        } else {
            return hs_a55225uXhV;
        }
    };
    hs_a55325uXhX.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdczizbzi525uXhY.evaluateOnce = function () {
        if (hs_a55325uXhX.notEvaluated) {
            return hs_a55325uXhX.hscall();
        } else {
            return hs_a55325uXhX;
        }
    };
    hs_a55425uXhZ.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcxor525uXi0.evaluateOnce = function () {
        if (hs_a55425uXhZ.notEvaluated) {
            return hs_a55425uXhZ.hscall();
        } else {
            return hs_a55425uXhZ;
        }
    };
    hs_a55525uXi1.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdccomplement525uXi2.evaluateOnce = function () {
        if (hs_a55525uXi1.notEvaluated) {
            return hs_a55525uXi1.hscall();
        } else {
            return hs_a55525uXi1;
        }
    };
    hs_a55625uXi3.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshift525uXi4.evaluateOnce = function () {
        if (hs_a55625uXi3.notEvaluated) {
            return hs_a55625uXi3.hscall();
        } else {
            return hs_a55625uXi3;
        }
    };
    hs_a55725uXi5.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotate525uXi6.evaluateOnce = function () {
        if (hs_a55725uXi5.notEvaluated) {
            return hs_a55725uXi5.hscall();
        } else {
            return hs_a55725uXi5;
        }
    };
    hs_a55825uXi7.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcbit525uXi8.evaluateOnce = function () {
        if (hs_a55825uXi7.notEvaluated) {
            return hs_a55825uXi7.hscall();
        } else {
            return hs_a55825uXi7;
        }
    };
    hs_a55925uXi9.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcsetBit525uXia.evaluateOnce = function () {
        if (hs_a55925uXi9.notEvaluated) {
            return hs_a55925uXi9.hscall();
        } else {
            return hs_a55925uXi9;
        }
    };
    hs_a56025uXib.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcclearBit525uXic.evaluateOnce = function () {
        if (hs_a56025uXib.notEvaluated) {
            return hs_a56025uXib.hscall();
        } else {
            return hs_a56025uXib;
        }
    };
    hs_a56125uXid.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdccomplementBit525uXie.evaluateOnce = function () {
        if (hs_a56125uXid.notEvaluated) {
            return hs_a56125uXid.hscall();
        } else {
            return hs_a56125uXid;
        }
    };
    hs_a56225uXif.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdctestBit525uXig.evaluateOnce = function () {
        if (hs_a56225uXif.notEvaluated) {
            return hs_a56225uXif.hscall();
        } else {
            return hs_a56225uXif;
        }
    };
    hs_a56325uXih.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcbitSizze525uXii.evaluateOnce = function () {
        if (hs_a56325uXih.notEvaluated) {
            return hs_a56325uXih.hscall();
        } else {
            return hs_a56325uXih;
        }
    };
    hs_a56425uXij.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcisSigned525uXik.evaluateOnce = function () {
        if (hs_a56425uXij.notEvaluated) {
            return hs_a56425uXij.hscall();
        } else {
            return hs_a56425uXij;
        }
    };
    hs_a56525uXil.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshiftL525uXim.evaluateOnce = function () {
        if (hs_a56525uXil.notEvaluated) {
            return hs_a56525uXil.hscall();
        } else {
            return hs_a56525uXil;
        }
    };
    hs_a56625uXin.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshiftR525uXio.evaluateOnce = function () {
        if (hs_a56625uXin.notEvaluated) {
            return hs_a56625uXin.hscall();
        } else {
            return hs_a56625uXin;
        }
    };
    hs_a56725uXip.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotateL525uXiq.evaluateOnce = function () {
        if (hs_a56725uXip.notEvaluated) {
            return hs_a56725uXip.hscall();
        } else {
            return hs_a56725uXip;
        }
    };
    hs_a56825uXir.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotateR525uXis.evaluateOnce = function () {
        if (hs_a56825uXir.notEvaluated) {
            return hs_a56825uXir.hscall();
        } else {
            return hs_a56825uXir;
        }
    };
    hs_a56925uXit.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcquot525uXiu.evaluateOnce = function () {
        if (hs_a56925uXit.notEvaluated) {
            return hs_a56925uXit.hscall();
        } else {
            return hs_a56925uXit;
        }
    };
    hs_a57025uXiv.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcrem525uXiw.evaluateOnce = function () {
        if (hs_a57025uXiv.notEvaluated) {
            return hs_a57025uXiv.hscall();
        } else {
            return hs_a57025uXiv;
        }
    };
    hs_a57125uXix.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcdiv525uXiy.evaluateOnce = function () {
        if (hs_a57125uXix.notEvaluated) {
            return hs_a57125uXix.hscall();
        } else {
            return hs_a57125uXix;
        }
    };
    hs_a57225uXiz.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcmod525uXiA.evaluateOnce = function () {
        if (hs_a57225uXiz.notEvaluated) {
            return hs_a57225uXiz.hscall();
        } else {
            return hs_a57225uXiz;
        }
    };
    hs_a57325uXiB.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcquotRem525uXiC.evaluateOnce = function () {
        if (hs_a57325uXiB.notEvaluated) {
            return hs_a57325uXiB.hscall();
        } else {
            return hs_a57325uXiB;
        }
    };
    hs_a57425uXiD.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcdivMod525uXiE.evaluateOnce = function () {
        if (hs_a57425uXiD.notEvaluated) {
            return hs_a57425uXiD.hscall();
        } else {
            return hs_a57425uXiD;
        }
    };
    hs_a57525uXiF.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdctoInteger525uXiG.evaluateOnce = function () {
        if (hs_a57525uXiF.notEvaluated) {
            return hs_a57525uXiF.hscall();
        } else {
            return hs_a57525uXiF;
        }
    };
    hs_a57625uXiH.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt32);
    };
    hs_zdcminBound525uXiI.evaluateOnce = function () {
        if (hs_a57625uXiH.notEvaluated) {
            return hs_a57625uXiH.hscall();
        } else {
            return hs_a57625uXiH;
        }
    };
    hs_a57725uXiJ.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt32);
    };
    hs_zdcmaxBound525uXiK.evaluateOnce = function () {
        if (hs_a57725uXiJ.notEvaluated) {
            return hs_a57725uXiJ.hscall();
        } else {
            return hs_a57725uXiJ;
        }
    };
    this.hs_zdfBoundedCWchar.data = [hs_a57625uXiH, hs_a57725uXiJ];
    hs_a57825uXiL.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziInt.hs_zdfRealInt32);
    };
    hs_zdctoRational925uXiM.evaluateOnce = function () {
        if (hs_a57825uXiL.notEvaluated) {
            return hs_a57825uXiL.hscall();
        } else {
            return hs_a57825uXiL;
        }
    };
    hs_a57925uXiN.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcsizzeOf925uXiO.evaluateOnce = function () {
        if (hs_a57925uXiN.notEvaluated) {
            return hs_a57925uXiN.hscall();
        } else {
            return hs_a57925uXiN;
        }
    };
    hs_a58025uXiP.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcalignment925uXiQ.evaluateOnce = function () {
        if (hs_a58025uXiP.notEvaluated) {
            return hs_a58025uXiP.hscall();
        } else {
            return hs_a58025uXiP;
        }
    };
    hs_a58125uXiR.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeekElemOff925uXiS.evaluateOnce = function () {
        if (hs_a58125uXiR.notEvaluated) {
            return hs_a58125uXiR.hscall();
        } else {
            return hs_a58125uXiR;
        }
    };
    hs_a58225uXiT.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpokeElemOff925uXiU.evaluateOnce = function () {
        if (hs_a58225uXiT.notEvaluated) {
            return hs_a58225uXiT.hscall();
        } else {
            return hs_a58225uXiT;
        }
    };
    hs_a58325uXiV.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeekByteOff925uXiW.evaluateOnce = function () {
        if (hs_a58325uXiV.notEvaluated) {
            return hs_a58325uXiV.hscall();
        } else {
            return hs_a58325uXiV;
        }
    };
    hs_a58425uXiX.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpokeByteOff925uXiY.evaluateOnce = function () {
        if (hs_a58425uXiX.notEvaluated) {
            return hs_a58425uXiX.hscall();
        } else {
            return hs_a58425uXiX;
        }
    };
    hs_a58525uXiZ.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeek925uXj0.evaluateOnce = function () {
        if (hs_a58525uXiZ.notEvaluated) {
            return hs_a58525uXiZ.hscall();
        } else {
            return hs_a58525uXiZ;
        }
    };
    hs_a58625uXj1.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpoke925uXj2.evaluateOnce = function () {
        if (hs_a58625uXj1.notEvaluated) {
            return hs_a58625uXj1.hscall();
        } else {
            return hs_a58625uXj1;
        }
    };
    this.hs_zdfStorableCWchar.data = [hs_a57925uXiN, hs_a58025uXiP, hs_a58125uXiR, hs_a58225uXiT, hs_a58325uXiV, hs_a58425uXiX, hs_a58525uXiZ, hs_a58625uXj1];
    hs_a58725uXj3.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcsucc925uXj4.evaluateOnce = function () {
        if (hs_a58725uXj3.notEvaluated) {
            return hs_a58725uXj3.hscall();
        } else {
            return hs_a58725uXj3;
        }
    };
    hs_a58825uXj5.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcpred925uXj6.evaluateOnce = function () {
        if (hs_a58825uXj5.notEvaluated) {
            return hs_a58825uXj5.hscall();
        } else {
            return hs_a58825uXj5;
        }
    };
    hs_a58925uXj7.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdctoEnum925uXj8.evaluateOnce = function () {
        if (hs_a58925uXj7.notEvaluated) {
            return hs_a58925uXj7.hscall();
        } else {
            return hs_a58925uXj7;
        }
    };
    hs_a59025uXj9.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcfromEnum925uXja.evaluateOnce = function () {
        if (hs_a59025uXj9.notEvaluated) {
            return hs_a59025uXj9.hscall();
        } else {
            return hs_a59025uXj9;
        }
    };
    hs_a59125uXjb.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFrom925uXjc.evaluateOnce = function () {
        if (hs_a59125uXjb.notEvaluated) {
            return hs_a59125uXjb.hscall();
        } else {
            return hs_a59125uXjb;
        }
    };
    hs_a59225uXjd.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromThen925uXje.evaluateOnce = function () {
        if (hs_a59225uXjd.notEvaluated) {
            return hs_a59225uXjd.hscall();
        } else {
            return hs_a59225uXjd;
        }
    };
    hs_a59325uXjf.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromTo925uXjg.evaluateOnce = function () {
        if (hs_a59325uXjf.notEvaluated) {
            return hs_a59325uXjf.hscall();
        } else {
            return hs_a59325uXjf;
        }
    };
    hs_a59425uXjh.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromThenTo925uXji.evaluateOnce = function () {
        if (hs_a59425uXjh.notEvaluated) {
            return hs_a59425uXjh.hscall();
        } else {
            return hs_a59425uXjh;
        }
    };
    this.hs_zdfEnumCWchar.data = [hs_a58725uXj3, hs_a58825uXj5, hs_a58925uXj7, hs_a59025uXj9, hs_a59125uXjb, hs_a59225uXjd, hs_a59325uXjf, hs_a59425uXjh];
    hs_a59525uXjj.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczp925uXjk.evaluateOnce = function () {
        if (hs_a59525uXjj.notEvaluated) {
            return hs_a59525uXjj.hscall();
        } else {
            return hs_a59525uXjj;
        }
    };
    hs_a59625uXjl.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczt925uXjm.evaluateOnce = function () {
        if (hs_a59625uXjl.notEvaluated) {
            return hs_a59625uXjl.hscall();
        } else {
            return hs_a59625uXjl;
        }
    };
    hs_a59725uXjn.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczm925uXjo.evaluateOnce = function () {
        if (hs_a59725uXjn.notEvaluated) {
            return hs_a59725uXjn.hscall();
        } else {
            return hs_a59725uXjn;
        }
    };
    hs_a59825uXjp.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcnegate925uXjq.evaluateOnce = function () {
        if (hs_a59825uXjp.notEvaluated) {
            return hs_a59825uXjp.hscall();
        } else {
            return hs_a59825uXjp;
        }
    };
    hs_a59925uXjr.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcabs925uXjs.evaluateOnce = function () {
        if (hs_a59925uXjr.notEvaluated) {
            return hs_a59925uXjr.hscall();
        } else {
            return hs_a59925uXjr;
        }
    };
    hs_a60025uXjt.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcsignum925uXju.evaluateOnce = function () {
        if (hs_a60025uXjt.notEvaluated) {
            return hs_a60025uXjt.hscall();
        } else {
            return hs_a60025uXjt;
        }
    };
    hs_a60125uXjv.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcfromInteger925uXjw.evaluateOnce = function () {
        if (hs_a60125uXjv.notEvaluated) {
            return hs_a60125uXjv.hscall();
        } else {
            return hs_a60125uXjv;
        }
    };
    hs_a60225uXjx.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdccompare925uXjy.evaluateOnce = function () {
        if (hs_a60225uXjx.notEvaluated) {
            return hs_a60225uXjx.hscall();
        } else {
            return hs_a60225uXjx;
        }
    };
    hs_a60325uXjz.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczl925uXjA.evaluateOnce = function () {
        if (hs_a60325uXjz.notEvaluated) {
            return hs_a60325uXjz.hscall();
        } else {
            return hs_a60325uXjz;
        }
    };
    hs_a60425uXjB.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczgze925uXjC.evaluateOnce = function () {
        if (hs_a60425uXjB.notEvaluated) {
            return hs_a60425uXjB.hscall();
        } else {
            return hs_a60425uXjB;
        }
    };
    hs_a60525uXjD.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczg925uXjE.evaluateOnce = function () {
        if (hs_a60525uXjD.notEvaluated) {
            return hs_a60525uXjD.hscall();
        } else {
            return hs_a60525uXjD;
        }
    };
    hs_a60625uXjF.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczlze925uXjG.evaluateOnce = function () {
        if (hs_a60625uXjF.notEvaluated) {
            return hs_a60625uXjF.hscall();
        } else {
            return hs_a60625uXjF;
        }
    };
    hs_a60725uXjH.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdcmax925uXjI.evaluateOnce = function () {
        if (hs_a60725uXjH.notEvaluated) {
            return hs_a60725uXjH.hscall();
        } else {
            return hs_a60725uXjH;
        }
    };
    hs_a60825uXjJ.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdcmin925uXjK.evaluateOnce = function () {
        if (hs_a60825uXjJ.notEvaluated) {
            return hs_a60825uXjJ.hscall();
        } else {
            return hs_a60825uXjJ;
        }
    };
    hs_a60925uXjL.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32);
    };
    hs_zdczeze925uXjM.evaluateOnce = function () {
        if (hs_a60925uXjL.notEvaluated) {
            return hs_a60925uXjL.hscall();
        } else {
            return hs_a60925uXjL;
        }
    };
    hs_a61025uXjN.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32);
    };
    hs_zdczsze925uXjO.evaluateOnce = function () {
        if (hs_a61025uXjN.notEvaluated) {
            return hs_a61025uXjN.hscall();
        } else {
            return hs_a61025uXjN;
        }
    };
    this.hs_zdfEqCWchar.data = [hs_a60925uXjL, hs_a61025uXjN];
    this.hs_zdfOrdCWchar.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCWchar, hs_a60225uXjx, hs_a60325uXjz, hs_a60425uXjB, hs_a60525uXjD, hs_a60625uXjF, hs_a60725uXjH, hs_a60825uXjJ];
    this.hs_zdfNumCWchar.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCWchar, $hs.modules.ForeignziCziTypes.hs_zdfShowCWchar, hs_a59525uXjj, hs_a59625uXjl, hs_a59725uXjn, hs_a59825uXjp, hs_a59925uXjr, hs_a60025uXjt, hs_a60125uXjv];
    this.hs_zdfRealCWchar.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCWchar, $hs.modules.ForeignziCziTypes.hs_zdfOrdCWchar, hs_a57825uXiL];
    this.hs_zdfIntegralCWchar.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealCWchar, $hs.modules.ForeignziCziTypes.hs_zdfEnumCWchar, hs_a56925uXit, hs_a57025uXiv, hs_a57125uXix, hs_a57225uXiz, hs_a57325uXiB, hs_a57425uXiD, hs_a57525uXiF];
    this.hs_zdfBitsCWchar.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCWchar, hs_a55225uXhV, hs_a55325uXhX, hs_a55425uXhZ, hs_a55525uXi1, hs_a55625uXi3, hs_a55725uXi5, hs_a55825uXi7, hs_a55925uXi9, hs_a56025uXib, hs_a56125uXid, hs_a56225uXif, hs_a56325uXih, hs_a56425uXij, hs_a56525uXil, hs_a56625uXin, hs_a56725uXip, hs_a56825uXir];
    hs_a61125uXjP.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdczizazi625uXjQ.evaluateOnce = function () {
        if (hs_a61125uXjP.notEvaluated) {
            return hs_a61125uXjP.hscall();
        } else {
            return hs_a61125uXjP;
        }
    };
    hs_a61225uXjR.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdczizbzi625uXjS.evaluateOnce = function () {
        if (hs_a61225uXjR.notEvaluated) {
            return hs_a61225uXjR.hscall();
        } else {
            return hs_a61225uXjR;
        }
    };
    hs_a61325uXjT.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcxor625uXjU.evaluateOnce = function () {
        if (hs_a61325uXjT.notEvaluated) {
            return hs_a61325uXjT.hscall();
        } else {
            return hs_a61325uXjT;
        }
    };
    hs_a61425uXjV.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdccomplement625uXjW.evaluateOnce = function () {
        if (hs_a61425uXjV.notEvaluated) {
            return hs_a61425uXjV.hscall();
        } else {
            return hs_a61425uXjV;
        }
    };
    hs_a61525uXjX.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshift625uXjY.evaluateOnce = function () {
        if (hs_a61525uXjX.notEvaluated) {
            return hs_a61525uXjX.hscall();
        } else {
            return hs_a61525uXjX;
        }
    };
    hs_a61625uXjZ.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotate625uXk0.evaluateOnce = function () {
        if (hs_a61625uXjZ.notEvaluated) {
            return hs_a61625uXjZ.hscall();
        } else {
            return hs_a61625uXjZ;
        }
    };
    hs_a61725uXk1.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcbit625uXk2.evaluateOnce = function () {
        if (hs_a61725uXk1.notEvaluated) {
            return hs_a61725uXk1.hscall();
        } else {
            return hs_a61725uXk1;
        }
    };
    hs_a61825uXk3.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcsetBit625uXk4.evaluateOnce = function () {
        if (hs_a61825uXk3.notEvaluated) {
            return hs_a61825uXk3.hscall();
        } else {
            return hs_a61825uXk3;
        }
    };
    hs_a61925uXk5.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcclearBit625uXk6.evaluateOnce = function () {
        if (hs_a61925uXk5.notEvaluated) {
            return hs_a61925uXk5.hscall();
        } else {
            return hs_a61925uXk5;
        }
    };
    hs_a62025uXk7.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdccomplementBit625uXk8.evaluateOnce = function () {
        if (hs_a62025uXk7.notEvaluated) {
            return hs_a62025uXk7.hscall();
        } else {
            return hs_a62025uXk7;
        }
    };
    hs_a62125uXk9.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdctestBit625uXka.evaluateOnce = function () {
        if (hs_a62125uXk9.notEvaluated) {
            return hs_a62125uXk9.hscall();
        } else {
            return hs_a62125uXk9;
        }
    };
    hs_a62225uXkb.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcbitSizze625uXkc.evaluateOnce = function () {
        if (hs_a62225uXkb.notEvaluated) {
            return hs_a62225uXkb.hscall();
        } else {
            return hs_a62225uXkb;
        }
    };
    hs_a62325uXkd.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcisSigned625uXke.evaluateOnce = function () {
        if (hs_a62325uXkd.notEvaluated) {
            return hs_a62325uXkd.hscall();
        } else {
            return hs_a62325uXkd;
        }
    };
    hs_a62425uXkf.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshiftL625uXkg.evaluateOnce = function () {
        if (hs_a62425uXkf.notEvaluated) {
            return hs_a62425uXkf.hscall();
        } else {
            return hs_a62425uXkf;
        }
    };
    hs_a62525uXkh.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshiftR625uXki.evaluateOnce = function () {
        if (hs_a62525uXkh.notEvaluated) {
            return hs_a62525uXkh.hscall();
        } else {
            return hs_a62525uXkh;
        }
    };
    hs_a62625uXkj.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotateL625uXkk.evaluateOnce = function () {
        if (hs_a62625uXkj.notEvaluated) {
            return hs_a62625uXkj.hscall();
        } else {
            return hs_a62625uXkj;
        }
    };
    hs_a62725uXkl.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotateR625uXkm.evaluateOnce = function () {
        if (hs_a62725uXkl.notEvaluated) {
            return hs_a62725uXkl.hscall();
        } else {
            return hs_a62725uXkl;
        }
    };
    hs_a62825uXkn.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcquot625uXko.evaluateOnce = function () {
        if (hs_a62825uXkn.notEvaluated) {
            return hs_a62825uXkn.hscall();
        } else {
            return hs_a62825uXkn;
        }
    };
    hs_a62925uXkp.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcrem625uXkq.evaluateOnce = function () {
        if (hs_a62925uXkp.notEvaluated) {
            return hs_a62925uXkp.hscall();
        } else {
            return hs_a62925uXkp;
        }
    };
    hs_a63025uXkr.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcdiv625uXks.evaluateOnce = function () {
        if (hs_a63025uXkr.notEvaluated) {
            return hs_a63025uXkr.hscall();
        } else {
            return hs_a63025uXkr;
        }
    };
    hs_a63125uXkt.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcmod625uXku.evaluateOnce = function () {
        if (hs_a63125uXkt.notEvaluated) {
            return hs_a63125uXkt.hscall();
        } else {
            return hs_a63125uXkt;
        }
    };
    hs_a63225uXkv.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcquotRem625uXkw.evaluateOnce = function () {
        if (hs_a63225uXkv.notEvaluated) {
            return hs_a63225uXkv.hscall();
        } else {
            return hs_a63225uXkv;
        }
    };
    hs_a63325uXkx.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcdivMod625uXky.evaluateOnce = function () {
        if (hs_a63325uXkx.notEvaluated) {
            return hs_a63325uXkx.hscall();
        } else {
            return hs_a63325uXkx;
        }
    };
    hs_a63425uXkz.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdctoInteger625uXkA.evaluateOnce = function () {
        if (hs_a63425uXkz.notEvaluated) {
            return hs_a63425uXkz.hscall();
        } else {
            return hs_a63425uXkz;
        }
    };
    hs_a63525uXkB.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
    };
    hs_zdcminBound625uXkC.evaluateOnce = function () {
        if (hs_a63525uXkB.notEvaluated) {
            return hs_a63525uXkB.hscall();
        } else {
            return hs_a63525uXkB;
        }
    };
    hs_a63625uXkD.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
    };
    hs_zdcmaxBound625uXkE.evaluateOnce = function () {
        if (hs_a63625uXkD.notEvaluated) {
            return hs_a63625uXkD.hscall();
        } else {
            return hs_a63625uXkD;
        }
    };
    this.hs_zdfBoundedCSizze.data = [hs_a63525uXkB, hs_a63625uXkD];
    hs_a63725uXkF.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziWord.hs_zdfRealWord32);
    };
    hs_zdctoRational1025uXkG.evaluateOnce = function () {
        if (hs_a63725uXkF.notEvaluated) {
            return hs_a63725uXkF.hscall();
        } else {
            return hs_a63725uXkF;
        }
    };
    hs_a63825uXkH.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcsizzeOf1025uXkI.evaluateOnce = function () {
        if (hs_a63825uXkH.notEvaluated) {
            return hs_a63825uXkH.hscall();
        } else {
            return hs_a63825uXkH;
        }
    };
    hs_a63925uXkJ.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcalignment1025uXkK.evaluateOnce = function () {
        if (hs_a63925uXkJ.notEvaluated) {
            return hs_a63925uXkJ.hscall();
        } else {
            return hs_a63925uXkJ;
        }
    };
    hs_a64025uXkL.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeekElemOff1025uXkM.evaluateOnce = function () {
        if (hs_a64025uXkL.notEvaluated) {
            return hs_a64025uXkL.hscall();
        } else {
            return hs_a64025uXkL;
        }
    };
    hs_a64125uXkN.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpokeElemOff1025uXkO.evaluateOnce = function () {
        if (hs_a64125uXkN.notEvaluated) {
            return hs_a64125uXkN.hscall();
        } else {
            return hs_a64125uXkN;
        }
    };
    hs_a64225uXkP.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeekByteOff1025uXkQ.evaluateOnce = function () {
        if (hs_a64225uXkP.notEvaluated) {
            return hs_a64225uXkP.hscall();
        } else {
            return hs_a64225uXkP;
        }
    };
    hs_a64325uXkR.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpokeByteOff1025uXkS.evaluateOnce = function () {
        if (hs_a64325uXkR.notEvaluated) {
            return hs_a64325uXkR.hscall();
        } else {
            return hs_a64325uXkR;
        }
    };
    hs_a64425uXkT.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeek1025uXkU.evaluateOnce = function () {
        if (hs_a64425uXkT.notEvaluated) {
            return hs_a64425uXkT.hscall();
        } else {
            return hs_a64425uXkT;
        }
    };
    hs_a64525uXkV.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpoke1025uXkW.evaluateOnce = function () {
        if (hs_a64525uXkV.notEvaluated) {
            return hs_a64525uXkV.hscall();
        } else {
            return hs_a64525uXkV;
        }
    };
    this.hs_zdfStorableCSizze.data = [hs_a63825uXkH, hs_a63925uXkJ, hs_a64025uXkL, hs_a64125uXkN, hs_a64225uXkP, hs_a64325uXkR, hs_a64425uXkT, hs_a64525uXkV];
    hs_a64625uXkX.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcsucc1025uXkY.evaluateOnce = function () {
        if (hs_a64625uXkX.notEvaluated) {
            return hs_a64625uXkX.hscall();
        } else {
            return hs_a64625uXkX;
        }
    };
    hs_a64725uXkZ.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcpred1025uXl0.evaluateOnce = function () {
        if (hs_a64725uXkZ.notEvaluated) {
            return hs_a64725uXkZ.hscall();
        } else {
            return hs_a64725uXkZ;
        }
    };
    hs_a64825uXl1.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdctoEnum1025uXl2.evaluateOnce = function () {
        if (hs_a64825uXl1.notEvaluated) {
            return hs_a64825uXl1.hscall();
        } else {
            return hs_a64825uXl1;
        }
    };
    hs_a64925uXl3.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcfromEnum1025uXl4.evaluateOnce = function () {
        if (hs_a64925uXl3.notEvaluated) {
            return hs_a64925uXl3.hscall();
        } else {
            return hs_a64925uXl3;
        }
    };
    hs_a65025uXl5.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFrom1025uXl6.evaluateOnce = function () {
        if (hs_a65025uXl5.notEvaluated) {
            return hs_a65025uXl5.hscall();
        } else {
            return hs_a65025uXl5;
        }
    };
    hs_a65125uXl7.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromThen1025uXl8.evaluateOnce = function () {
        if (hs_a65125uXl7.notEvaluated) {
            return hs_a65125uXl7.hscall();
        } else {
            return hs_a65125uXl7;
        }
    };
    hs_a65225uXl9.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromTo1025uXla.evaluateOnce = function () {
        if (hs_a65225uXl9.notEvaluated) {
            return hs_a65225uXl9.hscall();
        } else {
            return hs_a65225uXl9;
        }
    };
    hs_a65325uXlb.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromThenTo1025uXlc.evaluateOnce = function () {
        if (hs_a65325uXlb.notEvaluated) {
            return hs_a65325uXlb.hscall();
        } else {
            return hs_a65325uXlb;
        }
    };
    this.hs_zdfEnumCSizze.data = [hs_a64625uXkX, hs_a64725uXkZ, hs_a64825uXl1, hs_a64925uXl3, hs_a65025uXl5, hs_a65125uXl7, hs_a65225uXl9, hs_a65325uXlb];
    hs_a65425uXld.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczp1025uXle.evaluateOnce = function () {
        if (hs_a65425uXld.notEvaluated) {
            return hs_a65425uXld.hscall();
        } else {
            return hs_a65425uXld;
        }
    };
    hs_a65525uXlf.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczt1025uXlg.evaluateOnce = function () {
        if (hs_a65525uXlf.notEvaluated) {
            return hs_a65525uXlf.hscall();
        } else {
            return hs_a65525uXlf;
        }
    };
    hs_a65625uXlh.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczm1025uXli.evaluateOnce = function () {
        if (hs_a65625uXlh.notEvaluated) {
            return hs_a65625uXlh.hscall();
        } else {
            return hs_a65625uXlh;
        }
    };
    hs_a65725uXlj.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcnegate1025uXlk.evaluateOnce = function () {
        if (hs_a65725uXlj.notEvaluated) {
            return hs_a65725uXlj.hscall();
        } else {
            return hs_a65725uXlj;
        }
    };
    hs_a65825uXll.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcabs1025uXlm.evaluateOnce = function () {
        if (hs_a65825uXll.notEvaluated) {
            return hs_a65825uXll.hscall();
        } else {
            return hs_a65825uXll;
        }
    };
    hs_a65925uXln.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcsignum1025uXlo.evaluateOnce = function () {
        if (hs_a65925uXln.notEvaluated) {
            return hs_a65925uXln.hscall();
        } else {
            return hs_a65925uXln;
        }
    };
    hs_a66025uXlp.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcfromInteger1025uXlq.evaluateOnce = function () {
        if (hs_a66025uXlp.notEvaluated) {
            return hs_a66025uXlp.hscall();
        } else {
            return hs_a66025uXlp;
        }
    };
    hs_a66125uXlr.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdccompare1025uXls.evaluateOnce = function () {
        if (hs_a66125uXlr.notEvaluated) {
            return hs_a66125uXlr.hscall();
        } else {
            return hs_a66125uXlr;
        }
    };
    hs_a66225uXlt.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczl1025uXlu.evaluateOnce = function () {
        if (hs_a66225uXlt.notEvaluated) {
            return hs_a66225uXlt.hscall();
        } else {
            return hs_a66225uXlt;
        }
    };
    hs_a66325uXlv.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczgze1025uXlw.evaluateOnce = function () {
        if (hs_a66325uXlv.notEvaluated) {
            return hs_a66325uXlv.hscall();
        } else {
            return hs_a66325uXlv;
        }
    };
    hs_a66425uXlx.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczg1025uXly.evaluateOnce = function () {
        if (hs_a66425uXlx.notEvaluated) {
            return hs_a66425uXlx.hscall();
        } else {
            return hs_a66425uXlx;
        }
    };
    hs_a66525uXlz.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczlze1025uXlA.evaluateOnce = function () {
        if (hs_a66525uXlz.notEvaluated) {
            return hs_a66525uXlz.hscall();
        } else {
            return hs_a66525uXlz;
        }
    };
    hs_a66625uXlB.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcmax1025uXlC.evaluateOnce = function () {
        if (hs_a66625uXlB.notEvaluated) {
            return hs_a66625uXlB.hscall();
        } else {
            return hs_a66625uXlB;
        }
    };
    hs_a66725uXlD.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcmin1025uXlE.evaluateOnce = function () {
        if (hs_a66725uXlD.notEvaluated) {
            return hs_a66725uXlD.hscall();
        } else {
            return hs_a66725uXlD;
        }
    };
    hs_a66825uXlF.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczeze1025uXlG.evaluateOnce = function () {
        if (hs_a66825uXlF.notEvaluated) {
            return hs_a66825uXlF.hscall();
        } else {
            return hs_a66825uXlF;
        }
    };
    hs_a66925uXlH.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczsze1025uXlI.evaluateOnce = function () {
        if (hs_a66925uXlH.notEvaluated) {
            return hs_a66925uXlH.hscall();
        } else {
            return hs_a66925uXlH;
        }
    };
    this.hs_zdfEqCSizze.data = [hs_a66825uXlF, hs_a66925uXlH];
    this.hs_zdfOrdCSizze.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCSizze, hs_a66125uXlr, hs_a66225uXlt, hs_a66325uXlv, hs_a66425uXlx, hs_a66525uXlz, hs_a66625uXlB, hs_a66725uXlD];
    this.hs_zdfNumCSizze.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCSizze, $hs.modules.ForeignziCziTypes.hs_zdfShowCSizze, hs_a65425uXld, hs_a65525uXlf, hs_a65625uXlh, hs_a65725uXlj, hs_a65825uXll, hs_a65925uXln, hs_a66025uXlp];
    this.hs_zdfRealCSizze.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, $hs.modules.ForeignziCziTypes.hs_zdfOrdCSizze, hs_a63725uXkF];
    this.hs_zdfIntegralCSizze.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealCSizze, $hs.modules.ForeignziCziTypes.hs_zdfEnumCSizze, hs_a62825uXkn, hs_a62925uXkp, hs_a63025uXkr, hs_a63125uXkt, hs_a63225uXkv, hs_a63325uXkx, hs_a63425uXkz];
    this.hs_zdfBitsCSizze.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_a61125uXjP, hs_a61225uXjR, hs_a61325uXjT, hs_a61425uXjV, hs_a61525uXjX, hs_a61625uXjZ, hs_a61725uXk1, hs_a61825uXk3, hs_a61925uXk5, hs_a62025uXk7, hs_a62125uXk9, hs_a62225uXkb, hs_a62325uXkd, hs_a62425uXkf, hs_a62525uXkh, hs_a62625uXkj, hs_a62725uXkl];
    hs_a67025uXlJ.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdczizazi725uXlK.evaluateOnce = function () {
        if (hs_a67025uXlJ.notEvaluated) {
            return hs_a67025uXlJ.hscall();
        } else {
            return hs_a67025uXlJ;
        }
    };
    hs_a67125uXlL.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdczizbzi725uXlM.evaluateOnce = function () {
        if (hs_a67125uXlL.notEvaluated) {
            return hs_a67125uXlL.hscall();
        } else {
            return hs_a67125uXlL;
        }
    };
    hs_a67225uXlN.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcxor725uXlO.evaluateOnce = function () {
        if (hs_a67225uXlN.notEvaluated) {
            return hs_a67225uXlN.hscall();
        } else {
            return hs_a67225uXlN;
        }
    };
    hs_a67325uXlP.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdccomplement725uXlQ.evaluateOnce = function () {
        if (hs_a67325uXlP.notEvaluated) {
            return hs_a67325uXlP.hscall();
        } else {
            return hs_a67325uXlP;
        }
    };
    hs_a67425uXlR.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshift725uXlS.evaluateOnce = function () {
        if (hs_a67425uXlR.notEvaluated) {
            return hs_a67425uXlR.hscall();
        } else {
            return hs_a67425uXlR;
        }
    };
    hs_a67525uXlT.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotate725uXlU.evaluateOnce = function () {
        if (hs_a67525uXlT.notEvaluated) {
            return hs_a67525uXlT.hscall();
        } else {
            return hs_a67525uXlT;
        }
    };
    hs_a67625uXlV.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcbit725uXlW.evaluateOnce = function () {
        if (hs_a67625uXlV.notEvaluated) {
            return hs_a67625uXlV.hscall();
        } else {
            return hs_a67625uXlV;
        }
    };
    hs_a67725uXlX.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcsetBit725uXlY.evaluateOnce = function () {
        if (hs_a67725uXlX.notEvaluated) {
            return hs_a67725uXlX.hscall();
        } else {
            return hs_a67725uXlX;
        }
    };
    hs_a67825uXlZ.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcclearBit725uXm0.evaluateOnce = function () {
        if (hs_a67825uXlZ.notEvaluated) {
            return hs_a67825uXlZ.hscall();
        } else {
            return hs_a67825uXlZ;
        }
    };
    hs_a67925uXm1.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdccomplementBit725uXm2.evaluateOnce = function () {
        if (hs_a67925uXm1.notEvaluated) {
            return hs_a67925uXm1.hscall();
        } else {
            return hs_a67925uXm1;
        }
    };
    hs_a68025uXm3.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdctestBit725uXm4.evaluateOnce = function () {
        if (hs_a68025uXm3.notEvaluated) {
            return hs_a68025uXm3.hscall();
        } else {
            return hs_a68025uXm3;
        }
    };
    hs_a68125uXm5.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcbitSizze725uXm6.evaluateOnce = function () {
        if (hs_a68125uXm5.notEvaluated) {
            return hs_a68125uXm5.hscall();
        } else {
            return hs_a68125uXm5;
        }
    };
    hs_a68225uXm7.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcisSigned725uXm8.evaluateOnce = function () {
        if (hs_a68225uXm7.notEvaluated) {
            return hs_a68225uXm7.hscall();
        } else {
            return hs_a68225uXm7;
        }
    };
    hs_a68325uXm9.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshiftL725uXma.evaluateOnce = function () {
        if (hs_a68325uXm9.notEvaluated) {
            return hs_a68325uXm9.hscall();
        } else {
            return hs_a68325uXm9;
        }
    };
    hs_a68425uXmb.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshiftR725uXmc.evaluateOnce = function () {
        if (hs_a68425uXmb.notEvaluated) {
            return hs_a68425uXmb.hscall();
        } else {
            return hs_a68425uXmb;
        }
    };
    hs_a68525uXmd.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotateL725uXme.evaluateOnce = function () {
        if (hs_a68525uXmd.notEvaluated) {
            return hs_a68525uXmd.hscall();
        } else {
            return hs_a68525uXmd;
        }
    };
    hs_a68625uXmf.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotateR725uXmg.evaluateOnce = function () {
        if (hs_a68625uXmf.notEvaluated) {
            return hs_a68625uXmf.hscall();
        } else {
            return hs_a68625uXmf;
        }
    };
    hs_a68725uXmh.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcquot725uXmi.evaluateOnce = function () {
        if (hs_a68725uXmh.notEvaluated) {
            return hs_a68725uXmh.hscall();
        } else {
            return hs_a68725uXmh;
        }
    };
    hs_a68825uXmj.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcrem725uXmk.evaluateOnce = function () {
        if (hs_a68825uXmj.notEvaluated) {
            return hs_a68825uXmj.hscall();
        } else {
            return hs_a68825uXmj;
        }
    };
    hs_a68925uXml.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcdiv725uXmm.evaluateOnce = function () {
        if (hs_a68925uXml.notEvaluated) {
            return hs_a68925uXml.hscall();
        } else {
            return hs_a68925uXml;
        }
    };
    hs_a69025uXmn.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcmod725uXmo.evaluateOnce = function () {
        if (hs_a69025uXmn.notEvaluated) {
            return hs_a69025uXmn.hscall();
        } else {
            return hs_a69025uXmn;
        }
    };
    hs_a69125uXmp.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcquotRem725uXmq.evaluateOnce = function () {
        if (hs_a69125uXmp.notEvaluated) {
            return hs_a69125uXmp.hscall();
        } else {
            return hs_a69125uXmp;
        }
    };
    hs_a69225uXmr.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcdivMod725uXms.evaluateOnce = function () {
        if (hs_a69225uXmr.notEvaluated) {
            return hs_a69225uXmr.hscall();
        } else {
            return hs_a69225uXmr;
        }
    };
    hs_a69325uXmt.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdctoInteger725uXmu.evaluateOnce = function () {
        if (hs_a69325uXmt.notEvaluated) {
            return hs_a69325uXmt.hscall();
        } else {
            return hs_a69325uXmt;
        }
    };
    hs_a69425uXmv.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt32);
    };
    hs_zdcminBound725uXmw.evaluateOnce = function () {
        if (hs_a69425uXmv.notEvaluated) {
            return hs_a69425uXmv.hscall();
        } else {
            return hs_a69425uXmv;
        }
    };
    hs_a69525uXmx.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt32);
    };
    hs_zdcmaxBound725uXmy.evaluateOnce = function () {
        if (hs_a69525uXmx.notEvaluated) {
            return hs_a69525uXmx.hscall();
        } else {
            return hs_a69525uXmx;
        }
    };
    this.hs_zdfBoundedCPtrdiff.data = [hs_a69425uXmv, hs_a69525uXmx];
    hs_a69625uXmz.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziInt.hs_zdfRealInt32);
    };
    hs_zdctoRational1125uXmA.evaluateOnce = function () {
        if (hs_a69625uXmz.notEvaluated) {
            return hs_a69625uXmz.hscall();
        } else {
            return hs_a69625uXmz;
        }
    };
    hs_a69725uXmB.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcsizzeOf1125uXmC.evaluateOnce = function () {
        if (hs_a69725uXmB.notEvaluated) {
            return hs_a69725uXmB.hscall();
        } else {
            return hs_a69725uXmB;
        }
    };
    hs_a69825uXmD.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcalignment1125uXmE.evaluateOnce = function () {
        if (hs_a69825uXmD.notEvaluated) {
            return hs_a69825uXmD.hscall();
        } else {
            return hs_a69825uXmD;
        }
    };
    hs_a69925uXmF.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeekElemOff1125uXmG.evaluateOnce = function () {
        if (hs_a69925uXmF.notEvaluated) {
            return hs_a69925uXmF.hscall();
        } else {
            return hs_a69925uXmF;
        }
    };
    hs_a70025uXmH.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpokeElemOff1125uXmI.evaluateOnce = function () {
        if (hs_a70025uXmH.notEvaluated) {
            return hs_a70025uXmH.hscall();
        } else {
            return hs_a70025uXmH;
        }
    };
    hs_a70125uXmJ.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeekByteOff1125uXmK.evaluateOnce = function () {
        if (hs_a70125uXmJ.notEvaluated) {
            return hs_a70125uXmJ.hscall();
        } else {
            return hs_a70125uXmJ;
        }
    };
    hs_a70225uXmL.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpokeByteOff1125uXmM.evaluateOnce = function () {
        if (hs_a70225uXmL.notEvaluated) {
            return hs_a70225uXmL.hscall();
        } else {
            return hs_a70225uXmL;
        }
    };
    hs_a70325uXmN.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeek1125uXmO.evaluateOnce = function () {
        if (hs_a70325uXmN.notEvaluated) {
            return hs_a70325uXmN.hscall();
        } else {
            return hs_a70325uXmN;
        }
    };
    hs_a70425uXmP.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpoke1125uXmQ.evaluateOnce = function () {
        if (hs_a70425uXmP.notEvaluated) {
            return hs_a70425uXmP.hscall();
        } else {
            return hs_a70425uXmP;
        }
    };
    this.hs_zdfStorableCPtrdiff.data = [hs_a69725uXmB, hs_a69825uXmD, hs_a69925uXmF, hs_a70025uXmH, hs_a70125uXmJ, hs_a70225uXmL, hs_a70325uXmN, hs_a70425uXmP];
    hs_a70525uXmR.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcsucc1125uXmS.evaluateOnce = function () {
        if (hs_a70525uXmR.notEvaluated) {
            return hs_a70525uXmR.hscall();
        } else {
            return hs_a70525uXmR;
        }
    };
    hs_a70625uXmT.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcpred1125uXmU.evaluateOnce = function () {
        if (hs_a70625uXmT.notEvaluated) {
            return hs_a70625uXmT.hscall();
        } else {
            return hs_a70625uXmT;
        }
    };
    hs_a70725uXmV.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdctoEnum1125uXmW.evaluateOnce = function () {
        if (hs_a70725uXmV.notEvaluated) {
            return hs_a70725uXmV.hscall();
        } else {
            return hs_a70725uXmV;
        }
    };
    hs_a70825uXmX.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcfromEnum1125uXmY.evaluateOnce = function () {
        if (hs_a70825uXmX.notEvaluated) {
            return hs_a70825uXmX.hscall();
        } else {
            return hs_a70825uXmX;
        }
    };
    hs_a70925uXmZ.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFrom1125uXn0.evaluateOnce = function () {
        if (hs_a70925uXmZ.notEvaluated) {
            return hs_a70925uXmZ.hscall();
        } else {
            return hs_a70925uXmZ;
        }
    };
    hs_a71025uXn1.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromThen1125uXn2.evaluateOnce = function () {
        if (hs_a71025uXn1.notEvaluated) {
            return hs_a71025uXn1.hscall();
        } else {
            return hs_a71025uXn1;
        }
    };
    hs_a71125uXn3.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromTo1125uXn4.evaluateOnce = function () {
        if (hs_a71125uXn3.notEvaluated) {
            return hs_a71125uXn3.hscall();
        } else {
            return hs_a71125uXn3;
        }
    };
    hs_a71225uXn5.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromThenTo1125uXn6.evaluateOnce = function () {
        if (hs_a71225uXn5.notEvaluated) {
            return hs_a71225uXn5.hscall();
        } else {
            return hs_a71225uXn5;
        }
    };
    this.hs_zdfEnumCPtrdiff.data = [hs_a70525uXmR, hs_a70625uXmT, hs_a70725uXmV, hs_a70825uXmX, hs_a70925uXmZ, hs_a71025uXn1, hs_a71125uXn3, hs_a71225uXn5];
    hs_a71325uXn7.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczp1125uXn8.evaluateOnce = function () {
        if (hs_a71325uXn7.notEvaluated) {
            return hs_a71325uXn7.hscall();
        } else {
            return hs_a71325uXn7;
        }
    };
    hs_a71425uXn9.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczt1125uXna.evaluateOnce = function () {
        if (hs_a71425uXn9.notEvaluated) {
            return hs_a71425uXn9.hscall();
        } else {
            return hs_a71425uXn9;
        }
    };
    hs_a71525uXnb.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczm1125uXnc.evaluateOnce = function () {
        if (hs_a71525uXnb.notEvaluated) {
            return hs_a71525uXnb.hscall();
        } else {
            return hs_a71525uXnb;
        }
    };
    hs_a71625uXnd.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcnegate1125uXne.evaluateOnce = function () {
        if (hs_a71625uXnd.notEvaluated) {
            return hs_a71625uXnd.hscall();
        } else {
            return hs_a71625uXnd;
        }
    };
    hs_a71725uXnf.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcabs1125uXng.evaluateOnce = function () {
        if (hs_a71725uXnf.notEvaluated) {
            return hs_a71725uXnf.hscall();
        } else {
            return hs_a71725uXnf;
        }
    };
    hs_a71825uXnh.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcsignum1125uXni.evaluateOnce = function () {
        if (hs_a71825uXnh.notEvaluated) {
            return hs_a71825uXnh.hscall();
        } else {
            return hs_a71825uXnh;
        }
    };
    hs_a71925uXnj.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcfromInteger1125uXnk.evaluateOnce = function () {
        if (hs_a71925uXnj.notEvaluated) {
            return hs_a71925uXnj.hscall();
        } else {
            return hs_a71925uXnj;
        }
    };
    hs_a72025uXnl.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdccompare1125uXnm.evaluateOnce = function () {
        if (hs_a72025uXnl.notEvaluated) {
            return hs_a72025uXnl.hscall();
        } else {
            return hs_a72025uXnl;
        }
    };
    hs_a72125uXnn.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczl1125uXno.evaluateOnce = function () {
        if (hs_a72125uXnn.notEvaluated) {
            return hs_a72125uXnn.hscall();
        } else {
            return hs_a72125uXnn;
        }
    };
    hs_a72225uXnp.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczgze1125uXnq.evaluateOnce = function () {
        if (hs_a72225uXnp.notEvaluated) {
            return hs_a72225uXnp.hscall();
        } else {
            return hs_a72225uXnp;
        }
    };
    hs_a72325uXnr.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczg1125uXns.evaluateOnce = function () {
        if (hs_a72325uXnr.notEvaluated) {
            return hs_a72325uXnr.hscall();
        } else {
            return hs_a72325uXnr;
        }
    };
    hs_a72425uXnt.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczlze1125uXnu.evaluateOnce = function () {
        if (hs_a72425uXnt.notEvaluated) {
            return hs_a72425uXnt.hscall();
        } else {
            return hs_a72425uXnt;
        }
    };
    hs_a72525uXnv.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdcmax1125uXnw.evaluateOnce = function () {
        if (hs_a72525uXnv.notEvaluated) {
            return hs_a72525uXnv.hscall();
        } else {
            return hs_a72525uXnv;
        }
    };
    hs_a72625uXnx.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdcmin1125uXny.evaluateOnce = function () {
        if (hs_a72625uXnx.notEvaluated) {
            return hs_a72625uXnx.hscall();
        } else {
            return hs_a72625uXnx;
        }
    };
    hs_a72725uXnz.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32);
    };
    hs_zdczeze1125uXnA.evaluateOnce = function () {
        if (hs_a72725uXnz.notEvaluated) {
            return hs_a72725uXnz.hscall();
        } else {
            return hs_a72725uXnz;
        }
    };
    hs_a72825uXnB.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32);
    };
    hs_zdczsze1125uXnC.evaluateOnce = function () {
        if (hs_a72825uXnB.notEvaluated) {
            return hs_a72825uXnB.hscall();
        } else {
            return hs_a72825uXnB;
        }
    };
    this.hs_zdfEqCPtrdiff.data = [hs_a72725uXnz, hs_a72825uXnB];
    this.hs_zdfOrdCPtrdiff.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCPtrdiff, hs_a72025uXnl, hs_a72125uXnn, hs_a72225uXnp, hs_a72325uXnr, hs_a72425uXnt, hs_a72525uXnv, hs_a72625uXnx];
    this.hs_zdfNumCPtrdiff.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCPtrdiff, $hs.modules.ForeignziCziTypes.hs_zdfShowCPtrdiff, hs_a71325uXn7, hs_a71425uXn9, hs_a71525uXnb, hs_a71625uXnd, hs_a71725uXnf, hs_a71825uXnh, hs_a71925uXnj];
    this.hs_zdfRealCPtrdiff.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCPtrdiff, $hs.modules.ForeignziCziTypes.hs_zdfOrdCPtrdiff, hs_a69625uXmz];
    this.hs_zdfIntegralCPtrdiff.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealCPtrdiff, $hs.modules.ForeignziCziTypes.hs_zdfEnumCPtrdiff, hs_a68725uXmh, hs_a68825uXmj, hs_a68925uXml, hs_a69025uXmn, hs_a69125uXmp, hs_a69225uXmr, hs_a69325uXmt];
    this.hs_zdfBitsCPtrdiff.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCPtrdiff, hs_a67025uXlJ, hs_a67125uXlL, hs_a67225uXlN, hs_a67325uXlP, hs_a67425uXlR, hs_a67525uXlT, hs_a67625uXlV, hs_a67725uXlX, hs_a67825uXlZ, hs_a67925uXm1, hs_a68025uXm3, hs_a68125uXm5, hs_a68225uXm7, hs_a68325uXm9, hs_a68425uXmb, hs_a68525uXmd, hs_a68625uXmf];
    hs_a72925uXnD.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_floatRadix.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble);
    };
    hs_zdcfloatRadix25uXnE.evaluateOnce = function () {
        if (hs_a72925uXnD.notEvaluated) {
            return hs_a72925uXnD.hscall();
        } else {
            return hs_a72925uXnD;
        }
    };
    hs_a73025uXnF.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_floatDigits.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble);
    };
    hs_zdcfloatDigits25uXnG.evaluateOnce = function () {
        if (hs_a73025uXnF.notEvaluated) {
            return hs_a73025uXnF.hscall();
        } else {
            return hs_a73025uXnF;
        }
    };
    hs_a73125uXnH.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_floatRange.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble);
    };
    hs_zdcfloatRange25uXnI.evaluateOnce = function () {
        if (hs_a73125uXnH.notEvaluated) {
            return hs_a73125uXnH.hscall();
        } else {
            return hs_a73125uXnH;
        }
    };
    hs_a73225uXnJ.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_decodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble);
    };
    hs_zdcdecodeFloat25uXnK.evaluateOnce = function () {
        if (hs_a73225uXnJ.notEvaluated) {
            return hs_a73225uXnJ.hscall();
        } else {
            return hs_a73225uXnJ;
        }
    };
    hs_a73325uXnL.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble);
    };
    hs_zdcencodeFloat25uXnM.evaluateOnce = function () {
        if (hs_a73325uXnL.notEvaluated) {
            return hs_a73325uXnL.hscall();
        } else {
            return hs_a73325uXnL;
        }
    };
    hs_a73425uXnN.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_exponent.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble);
    };
    hs_zdcexponent25uXnO.evaluateOnce = function () {
        if (hs_a73425uXnN.notEvaluated) {
            return hs_a73425uXnN.hscall();
        } else {
            return hs_a73425uXnN;
        }
    };
    hs_a73525uXnP.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_significand.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble);
    };
    hs_zdcsignificand25uXnQ.evaluateOnce = function () {
        if (hs_a73525uXnP.notEvaluated) {
            return hs_a73525uXnP.hscall();
        } else {
            return hs_a73525uXnP;
        }
    };
    hs_a73625uXnR.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_scaleFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble);
    };
    hs_zdcscaleFloat25uXnS.evaluateOnce = function () {
        if (hs_a73625uXnR.notEvaluated) {
            return hs_a73625uXnR.hscall();
        } else {
            return hs_a73625uXnR;
        }
    };
    hs_a73725uXnT.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_isNaN.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble);
    };
    hs_zdcisNaN25uXnU.evaluateOnce = function () {
        if (hs_a73725uXnT.notEvaluated) {
            return hs_a73725uXnT.hscall();
        } else {
            return hs_a73725uXnT;
        }
    };
    hs_a73825uXnV.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_isInfinite.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble);
    };
    hs_zdcisInfinite25uXnW.evaluateOnce = function () {
        if (hs_a73825uXnV.notEvaluated) {
            return hs_a73825uXnV.hscall();
        } else {
            return hs_a73825uXnV;
        }
    };
    hs_a73925uXnX.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_isDenormalizzed.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble);
    };
    hs_zdcisDenormalizzed25uXnY.evaluateOnce = function () {
        if (hs_a73925uXnX.notEvaluated) {
            return hs_a73925uXnX.hscall();
        } else {
            return hs_a73925uXnX;
        }
    };
    hs_a74025uXnZ.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_isNegativeZZero.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble);
    };
    hs_zdcisNegativeZZero25uXo0.evaluateOnce = function () {
        if (hs_a74025uXnZ.notEvaluated) {
            return hs_a74025uXnZ.hscall();
        } else {
            return hs_a74025uXnZ;
        }
    };
    hs_a74125uXo1.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_isIEEE.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble);
    };
    hs_zdcisIEEE25uXo2.evaluateOnce = function () {
        if (hs_a74125uXo1.notEvaluated) {
            return hs_a74125uXo1.hscall();
        } else {
            return hs_a74125uXo1;
        }
    };
    hs_a74225uXo3.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_atan2.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble);
    };
    hs_zdcatan225uXo4.evaluateOnce = function () {
        if (hs_a74225uXo3.notEvaluated) {
            return hs_a74225uXo3.hscall();
        } else {
            return hs_a74225uXo3;
        }
    };
    hs_a74325uXo5.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_properFraction.hscall($hs.modules.GHCziFloat.hs_zdfRealFracDouble);
    };
    hs_zdcproperFraction25uXo6.evaluateOnce = function () {
        if (hs_a74325uXo5.notEvaluated) {
            return hs_a74325uXo5.hscall();
        } else {
            return hs_a74325uXo5;
        }
    };
    hs_a74425uXo7.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_truncate.hscall($hs.modules.GHCziFloat.hs_zdfRealFracDouble);
    };
    hs_zdctruncate25uXo8.evaluateOnce = function () {
        if (hs_a74425uXo7.notEvaluated) {
            return hs_a74425uXo7.hscall();
        } else {
            return hs_a74425uXo7;
        }
    };
    hs_a74525uXo9.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_round.hscall($hs.modules.GHCziFloat.hs_zdfRealFracDouble);
    };
    hs_zdcround25uXoa.evaluateOnce = function () {
        if (hs_a74525uXo9.notEvaluated) {
            return hs_a74525uXo9.hscall();
        } else {
            return hs_a74525uXo9;
        }
    };
    hs_a74625uXob.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_ceiling.hscall($hs.modules.GHCziFloat.hs_zdfRealFracDouble);
    };
    hs_zdcceiling25uXoc.evaluateOnce = function () {
        if (hs_a74625uXob.notEvaluated) {
            return hs_a74625uXob.hscall();
        } else {
            return hs_a74625uXob;
        }
    };
    hs_a74725uXod.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_floor.hscall($hs.modules.GHCziFloat.hs_zdfRealFracDouble);
    };
    hs_zdcfloor25uXoe.evaluateOnce = function () {
        if (hs_a74725uXod.notEvaluated) {
            return hs_a74725uXod.hscall();
        } else {
            return hs_a74725uXod;
        }
    };
    hs_a74825uXof.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_pi.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble);
    };
    hs_zdcpi25uXog.evaluateOnce = function () {
        if (hs_a74825uXof.notEvaluated) {
            return hs_a74825uXof.hscall();
        } else {
            return hs_a74825uXof;
        }
    };
    hs_a74925uXoh.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_exp.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble);
    };
    hs_zdcexp25uXoi.evaluateOnce = function () {
        if (hs_a74925uXoh.notEvaluated) {
            return hs_a74925uXoh.hscall();
        } else {
            return hs_a74925uXoh;
        }
    };
    hs_a75025uXoj.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_sqrt.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble);
    };
    hs_zdcsqrt25uXok.evaluateOnce = function () {
        if (hs_a75025uXoj.notEvaluated) {
            return hs_a75025uXoj.hscall();
        } else {
            return hs_a75025uXoj;
        }
    };
    hs_a75125uXol.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_log.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble);
    };
    hs_zdclog25uXom.evaluateOnce = function () {
        if (hs_a75125uXol.notEvaluated) {
            return hs_a75125uXol.hscall();
        } else {
            return hs_a75125uXol;
        }
    };
    hs_a75225uXon.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_ztzt.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble);
    };
    hs_zdcztzt25uXoo.evaluateOnce = function () {
        if (hs_a75225uXon.notEvaluated) {
            return hs_a75225uXon.hscall();
        } else {
            return hs_a75225uXon;
        }
    };
    hs_a75325uXop.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_logBase.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble);
    };
    hs_zdclogBase25uXoq.evaluateOnce = function () {
        if (hs_a75325uXop.notEvaluated) {
            return hs_a75325uXop.hscall();
        } else {
            return hs_a75325uXop;
        }
    };
    hs_a75425uXor.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_sin.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble);
    };
    hs_zdcsin25uXos.evaluateOnce = function () {
        if (hs_a75425uXor.notEvaluated) {
            return hs_a75425uXor.hscall();
        } else {
            return hs_a75425uXor;
        }
    };
    hs_a75525uXot.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_tan.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble);
    };
    hs_zdctan25uXou.evaluateOnce = function () {
        if (hs_a75525uXot.notEvaluated) {
            return hs_a75525uXot.hscall();
        } else {
            return hs_a75525uXot;
        }
    };
    hs_a75625uXov.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_cos.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble);
    };
    hs_zdccos25uXow.evaluateOnce = function () {
        if (hs_a75625uXov.notEvaluated) {
            return hs_a75625uXov.hscall();
        } else {
            return hs_a75625uXov;
        }
    };
    hs_a75725uXox.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_asin.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble);
    };
    hs_zdcasin25uXoy.evaluateOnce = function () {
        if (hs_a75725uXox.notEvaluated) {
            return hs_a75725uXox.hscall();
        } else {
            return hs_a75725uXox;
        }
    };
    hs_a75825uXoz.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_atan.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble);
    };
    hs_zdcatan25uXoA.evaluateOnce = function () {
        if (hs_a75825uXoz.notEvaluated) {
            return hs_a75825uXoz.hscall();
        } else {
            return hs_a75825uXoz;
        }
    };
    hs_a75925uXoB.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_acos.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble);
    };
    hs_zdcacos25uXoC.evaluateOnce = function () {
        if (hs_a75925uXoB.notEvaluated) {
            return hs_a75925uXoB.hscall();
        } else {
            return hs_a75925uXoB;
        }
    };
    hs_a76025uXoD.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_sinh.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble);
    };
    hs_zdcsinh25uXoE.evaluateOnce = function () {
        if (hs_a76025uXoD.notEvaluated) {
            return hs_a76025uXoD.hscall();
        } else {
            return hs_a76025uXoD;
        }
    };
    hs_a76125uXoF.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_tanh.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble);
    };
    hs_zdctanh25uXoG.evaluateOnce = function () {
        if (hs_a76125uXoF.notEvaluated) {
            return hs_a76125uXoF.hscall();
        } else {
            return hs_a76125uXoF;
        }
    };
    hs_a76225uXoH.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_cosh.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble);
    };
    hs_zdccosh25uXoI.evaluateOnce = function () {
        if (hs_a76225uXoH.notEvaluated) {
            return hs_a76225uXoH.hscall();
        } else {
            return hs_a76225uXoH;
        }
    };
    hs_a76325uXoJ.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_asinh.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble);
    };
    hs_zdcasinh25uXoK.evaluateOnce = function () {
        if (hs_a76325uXoJ.notEvaluated) {
            return hs_a76325uXoJ.hscall();
        } else {
            return hs_a76325uXoJ;
        }
    };
    hs_a76425uXoL.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_atanh.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble);
    };
    hs_zdcatanh25uXoM.evaluateOnce = function () {
        if (hs_a76425uXoL.notEvaluated) {
            return hs_a76425uXoL.hscall();
        } else {
            return hs_a76425uXoL;
        }
    };
    hs_a76525uXoN.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_acosh.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble);
    };
    hs_zdcacosh25uXoO.evaluateOnce = function () {
        if (hs_a76525uXoN.notEvaluated) {
            return hs_a76525uXoN.hscall();
        } else {
            return hs_a76525uXoN;
        }
    };
    hs_a76625uXoP.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zs.hscall($hs.modules.GHCziFloat.hs_zdfFractionalDouble);
    };
    hs_zdczs25uXoQ.evaluateOnce = function () {
        if (hs_a76625uXoP.notEvaluated) {
            return hs_a76625uXoP.hscall();
        } else {
            return hs_a76625uXoP;
        }
    };
    hs_a76725uXoR.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_recip.hscall($hs.modules.GHCziFloat.hs_zdfFractionalDouble);
    };
    hs_zdcrecip25uXoS.evaluateOnce = function () {
        if (hs_a76725uXoR.notEvaluated) {
            return hs_a76725uXoR.hscall();
        } else {
            return hs_a76725uXoR;
        }
    };
    hs_a76825uXoT.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_fromRational.hscall($hs.modules.GHCziFloat.hs_zdfFractionalDouble);
    };
    hs_zdcfromRational25uXoU.evaluateOnce = function () {
        if (hs_a76825uXoT.notEvaluated) {
            return hs_a76825uXoT.hscall();
        } else {
            return hs_a76825uXoT;
        }
    };
    hs_a76925uXoV.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziFloat.hs_zdfRealDouble);
    };
    hs_zdctoRational1225uXoW.evaluateOnce = function () {
        if (hs_a76925uXoV.notEvaluated) {
            return hs_a76925uXoV.hscall();
        } else {
            return hs_a76925uXoV;
        }
    };
    hs_a77025uXoX.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableDouble);
    };
    hs_zdcsizzeOf1225uXoY.evaluateOnce = function () {
        if (hs_a77025uXoX.notEvaluated) {
            return hs_a77025uXoX.hscall();
        } else {
            return hs_a77025uXoX;
        }
    };
    hs_a77125uXoZ.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableDouble);
    };
    hs_zdcalignment1225uXp0.evaluateOnce = function () {
        if (hs_a77125uXoZ.notEvaluated) {
            return hs_a77125uXoZ.hscall();
        } else {
            return hs_a77125uXoZ;
        }
    };
    hs_a77225uXp1.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableDouble);
    };
    hs_zdcpeekElemOff1225uXp2.evaluateOnce = function () {
        if (hs_a77225uXp1.notEvaluated) {
            return hs_a77225uXp1.hscall();
        } else {
            return hs_a77225uXp1;
        }
    };
    hs_a77325uXp3.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableDouble);
    };
    hs_zdcpokeElemOff1225uXp4.evaluateOnce = function () {
        if (hs_a77325uXp3.notEvaluated) {
            return hs_a77325uXp3.hscall();
        } else {
            return hs_a77325uXp3;
        }
    };
    hs_a77425uXp5.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableDouble);
    };
    hs_zdcpeekByteOff1225uXp6.evaluateOnce = function () {
        if (hs_a77425uXp5.notEvaluated) {
            return hs_a77425uXp5.hscall();
        } else {
            return hs_a77425uXp5;
        }
    };
    hs_a77525uXp7.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableDouble);
    };
    hs_zdcpokeByteOff1225uXp8.evaluateOnce = function () {
        if (hs_a77525uXp7.notEvaluated) {
            return hs_a77525uXp7.hscall();
        } else {
            return hs_a77525uXp7;
        }
    };
    hs_a77625uXp9.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableDouble);
    };
    hs_zdcpeek1225uXpa.evaluateOnce = function () {
        if (hs_a77625uXp9.notEvaluated) {
            return hs_a77625uXp9.hscall();
        } else {
            return hs_a77625uXp9;
        }
    };
    hs_a77725uXpb.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableDouble);
    };
    hs_zdcpoke1225uXpc.evaluateOnce = function () {
        if (hs_a77725uXpb.notEvaluated) {
            return hs_a77725uXpb.hscall();
        } else {
            return hs_a77725uXpb;
        }
    };
    this.hs_zdfStorableCDouble.data = [hs_a77025uXoX, hs_a77125uXoZ, hs_a77225uXp1, hs_a77325uXp3, hs_a77425uXp5, hs_a77525uXp7, hs_a77625uXp9, hs_a77725uXpb];
    hs_a77825uXpd.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziFloat.hs_zdfEnumDouble);
    };
    hs_zdcsucc1225uXpe.evaluateOnce = function () {
        if (hs_a77825uXpd.notEvaluated) {
            return hs_a77825uXpd.hscall();
        } else {
            return hs_a77825uXpd;
        }
    };
    hs_a77925uXpf.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziFloat.hs_zdfEnumDouble);
    };
    hs_zdcpred1225uXpg.evaluateOnce = function () {
        if (hs_a77925uXpf.notEvaluated) {
            return hs_a77925uXpf.hscall();
        } else {
            return hs_a77925uXpf;
        }
    };
    hs_a78025uXph.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziFloat.hs_zdfEnumDouble);
    };
    hs_zdctoEnum1225uXpi.evaluateOnce = function () {
        if (hs_a78025uXph.notEvaluated) {
            return hs_a78025uXph.hscall();
        } else {
            return hs_a78025uXph;
        }
    };
    hs_a78125uXpj.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziFloat.hs_zdfEnumDouble);
    };
    hs_zdcfromEnum1225uXpk.evaluateOnce = function () {
        if (hs_a78125uXpj.notEvaluated) {
            return hs_a78125uXpj.hscall();
        } else {
            return hs_a78125uXpj;
        }
    };
    hs_a78225uXpl.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziFloat.hs_zdfEnumDouble);
    };
    hs_zdcenumFrom1225uXpm.evaluateOnce = function () {
        if (hs_a78225uXpl.notEvaluated) {
            return hs_a78225uXpl.hscall();
        } else {
            return hs_a78225uXpl;
        }
    };
    hs_a78325uXpn.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziFloat.hs_zdfEnumDouble);
    };
    hs_zdcenumFromThen1225uXpo.evaluateOnce = function () {
        if (hs_a78325uXpn.notEvaluated) {
            return hs_a78325uXpn.hscall();
        } else {
            return hs_a78325uXpn;
        }
    };
    hs_a78425uXpp.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziFloat.hs_zdfEnumDouble);
    };
    hs_zdcenumFromTo1225uXpq.evaluateOnce = function () {
        if (hs_a78425uXpp.notEvaluated) {
            return hs_a78425uXpp.hscall();
        } else {
            return hs_a78425uXpp;
        }
    };
    hs_a78525uXpr.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziFloat.hs_zdfEnumDouble);
    };
    hs_zdcenumFromThenTo1225uXps.evaluateOnce = function () {
        if (hs_a78525uXpr.notEvaluated) {
            return hs_a78525uXpr.hscall();
        } else {
            return hs_a78525uXpr;
        }
    };
    this.hs_zdfEnumCDouble.data = [hs_a77825uXpd, hs_a77925uXpf, hs_a78025uXph, hs_a78125uXpj, hs_a78225uXpl, hs_a78325uXpn, hs_a78425uXpp, hs_a78525uXpr];
    hs_a78625uXpt.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble);
    };
    hs_zdczp1225uXpu.evaluateOnce = function () {
        if (hs_a78625uXpt.notEvaluated) {
            return hs_a78625uXpt.hscall();
        } else {
            return hs_a78625uXpt;
        }
    };
    hs_a78725uXpv.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble);
    };
    hs_zdczt1225uXpw.evaluateOnce = function () {
        if (hs_a78725uXpv.notEvaluated) {
            return hs_a78725uXpv.hscall();
        } else {
            return hs_a78725uXpv;
        }
    };
    hs_a78825uXpx.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble);
    };
    hs_zdczm1225uXpy.evaluateOnce = function () {
        if (hs_a78825uXpx.notEvaluated) {
            return hs_a78825uXpx.hscall();
        } else {
            return hs_a78825uXpx;
        }
    };
    hs_a78925uXpz.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble);
    };
    hs_zdcnegate1225uXpA.evaluateOnce = function () {
        if (hs_a78925uXpz.notEvaluated) {
            return hs_a78925uXpz.hscall();
        } else {
            return hs_a78925uXpz;
        }
    };
    hs_a79025uXpB.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble);
    };
    hs_zdcabs1225uXpC.evaluateOnce = function () {
        if (hs_a79025uXpB.notEvaluated) {
            return hs_a79025uXpB.hscall();
        } else {
            return hs_a79025uXpB;
        }
    };
    hs_a79125uXpD.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble);
    };
    hs_zdcsignum1225uXpE.evaluateOnce = function () {
        if (hs_a79125uXpD.notEvaluated) {
            return hs_a79125uXpD.hscall();
        } else {
            return hs_a79125uXpD;
        }
    };
    hs_a79225uXpF.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble);
    };
    hs_zdcfromInteger1225uXpG.evaluateOnce = function () {
        if (hs_a79225uXpF.notEvaluated) {
            return hs_a79225uXpF.hscall();
        } else {
            return hs_a79225uXpF;
        }
    };
    hs_a79325uXpH.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble);
    };
    hs_zdccompare1225uXpI.evaluateOnce = function () {
        if (hs_a79325uXpH.notEvaluated) {
            return hs_a79325uXpH.hscall();
        } else {
            return hs_a79325uXpH;
        }
    };
    hs_a79425uXpJ.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble);
    };
    hs_zdczl1225uXpK.evaluateOnce = function () {
        if (hs_a79425uXpJ.notEvaluated) {
            return hs_a79425uXpJ.hscall();
        } else {
            return hs_a79425uXpJ;
        }
    };
    hs_a79525uXpL.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble);
    };
    hs_zdczgze1225uXpM.evaluateOnce = function () {
        if (hs_a79525uXpL.notEvaluated) {
            return hs_a79525uXpL.hscall();
        } else {
            return hs_a79525uXpL;
        }
    };
    hs_a79625uXpN.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble);
    };
    hs_zdczg1225uXpO.evaluateOnce = function () {
        if (hs_a79625uXpN.notEvaluated) {
            return hs_a79625uXpN.hscall();
        } else {
            return hs_a79625uXpN;
        }
    };
    hs_a79725uXpP.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble);
    };
    hs_zdczlze1225uXpQ.evaluateOnce = function () {
        if (hs_a79725uXpP.notEvaluated) {
            return hs_a79725uXpP.hscall();
        } else {
            return hs_a79725uXpP;
        }
    };
    hs_a79825uXpR.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble);
    };
    hs_zdcmax1225uXpS.evaluateOnce = function () {
        if (hs_a79825uXpR.notEvaluated) {
            return hs_a79825uXpR.hscall();
        } else {
            return hs_a79825uXpR;
        }
    };
    hs_a79925uXpT.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble);
    };
    hs_zdcmin1225uXpU.evaluateOnce = function () {
        if (hs_a79925uXpT.notEvaluated) {
            return hs_a79925uXpT.hscall();
        } else {
            return hs_a79925uXpT;
        }
    };
    hs_a80025uXpV.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqDouble);
    };
    hs_zdczeze1225uXpW.evaluateOnce = function () {
        if (hs_a80025uXpV.notEvaluated) {
            return hs_a80025uXpV.hscall();
        } else {
            return hs_a80025uXpV;
        }
    };
    hs_a80125uXpX.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziClasses.hs_zdfEqDouble);
    };
    hs_zdczsze1225uXpY.evaluateOnce = function () {
        if (hs_a80125uXpX.notEvaluated) {
            return hs_a80125uXpX.hscall();
        } else {
            return hs_a80125uXpX;
        }
    };
    this.hs_zdfEqCDouble.data = [hs_a80025uXpV, hs_a80125uXpX];
    this.hs_zdfOrdCDouble.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCDouble, hs_a79325uXpH, hs_a79425uXpJ, hs_a79525uXpL, hs_a79625uXpN, hs_a79725uXpP, hs_a79825uXpR, hs_a79925uXpT];
    this.hs_zdfNumCDouble.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCDouble, $hs.modules.ForeignziCziTypes.hs_zdfShowCDouble, hs_a78625uXpt, hs_a78725uXpv, hs_a78825uXpx, hs_a78925uXpz, hs_a79025uXpB, hs_a79125uXpD, hs_a79225uXpF];
    this.hs_zdfRealCDouble.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCDouble, $hs.modules.ForeignziCziTypes.hs_zdfOrdCDouble, hs_a76925uXoV];
    this.hs_zdfFractionalCDouble.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCDouble, hs_a76625uXoP, hs_a76725uXoR, hs_a76825uXoT];
    this.hs_zdfFloatingCDouble.data = [$hs.modules.ForeignziCziTypes.hs_zdfFractionalCDouble, hs_a74825uXof, hs_a74925uXoh, hs_a75025uXoj, hs_a75125uXol, hs_a75225uXon, hs_a75325uXop, hs_a75425uXor, hs_a75525uXot, hs_a75625uXov, hs_a75725uXox, hs_a75825uXoz, hs_a75925uXoB, hs_a76025uXoD, hs_a76125uXoF, hs_a76225uXoH, hs_a76325uXoJ, hs_a76425uXoL, hs_a76525uXoN];
    this.hs_zdfRealFracCDouble.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealCDouble, $hs.modules.ForeignziCziTypes.hs_zdfFractionalCDouble, hs_a74325uXo5, hs_a74425uXo7, hs_a74525uXo9, hs_a74625uXob, hs_a74725uXod];
    this.hs_zdfRealFloatCDouble.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealFracCDouble, $hs.modules.ForeignziCziTypes.hs_zdfFloatingCDouble, hs_a72925uXnD, hs_a73025uXnF, hs_a73125uXnH, hs_a73225uXnJ, hs_a73325uXnL, hs_a73425uXnN, hs_a73525uXnP, hs_a73625uXnR, hs_a73725uXnT, hs_a73825uXnV, hs_a73925uXnX, hs_a74025uXnZ, hs_a74125uXo1, hs_a74225uXo3];
    hs_a80225uXpZ.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_floatRadix.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat);
    };
    hs_zdcfloatRadix125uXq0.evaluateOnce = function () {
        if (hs_a80225uXpZ.notEvaluated) {
            return hs_a80225uXpZ.hscall();
        } else {
            return hs_a80225uXpZ;
        }
    };
    hs_a80325uXq1.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_floatDigits.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat);
    };
    hs_zdcfloatDigits125uXq2.evaluateOnce = function () {
        if (hs_a80325uXq1.notEvaluated) {
            return hs_a80325uXq1.hscall();
        } else {
            return hs_a80325uXq1;
        }
    };
    hs_a80425uXq3.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_floatRange.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat);
    };
    hs_zdcfloatRange125uXq4.evaluateOnce = function () {
        if (hs_a80425uXq3.notEvaluated) {
            return hs_a80425uXq3.hscall();
        } else {
            return hs_a80425uXq3;
        }
    };
    hs_a80525uXq5.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_decodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat);
    };
    hs_zdcdecodeFloat125uXq6.evaluateOnce = function () {
        if (hs_a80525uXq5.notEvaluated) {
            return hs_a80525uXq5.hscall();
        } else {
            return hs_a80525uXq5;
        }
    };
    hs_a80625uXq7.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat);
    };
    hs_zdcencodeFloat125uXq8.evaluateOnce = function () {
        if (hs_a80625uXq7.notEvaluated) {
            return hs_a80625uXq7.hscall();
        } else {
            return hs_a80625uXq7;
        }
    };
    hs_a80725uXq9.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_exponent.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat);
    };
    hs_zdcexponent125uXqa.evaluateOnce = function () {
        if (hs_a80725uXq9.notEvaluated) {
            return hs_a80725uXq9.hscall();
        } else {
            return hs_a80725uXq9;
        }
    };
    hs_a80825uXqb.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_significand.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat);
    };
    hs_zdcsignificand125uXqc.evaluateOnce = function () {
        if (hs_a80825uXqb.notEvaluated) {
            return hs_a80825uXqb.hscall();
        } else {
            return hs_a80825uXqb;
        }
    };
    hs_a80925uXqd.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_scaleFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat);
    };
    hs_zdcscaleFloat125uXqe.evaluateOnce = function () {
        if (hs_a80925uXqd.notEvaluated) {
            return hs_a80925uXqd.hscall();
        } else {
            return hs_a80925uXqd;
        }
    };
    hs_a81025uXqf.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_isNaN.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat);
    };
    hs_zdcisNaN125uXqg.evaluateOnce = function () {
        if (hs_a81025uXqf.notEvaluated) {
            return hs_a81025uXqf.hscall();
        } else {
            return hs_a81025uXqf;
        }
    };
    hs_a81125uXqh.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_isInfinite.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat);
    };
    hs_zdcisInfinite125uXqi.evaluateOnce = function () {
        if (hs_a81125uXqh.notEvaluated) {
            return hs_a81125uXqh.hscall();
        } else {
            return hs_a81125uXqh;
        }
    };
    hs_a81225uXqj.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_isDenormalizzed.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat);
    };
    hs_zdcisDenormalizzed125uXqk.evaluateOnce = function () {
        if (hs_a81225uXqj.notEvaluated) {
            return hs_a81225uXqj.hscall();
        } else {
            return hs_a81225uXqj;
        }
    };
    hs_a81325uXql.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_isNegativeZZero.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat);
    };
    hs_zdcisNegativeZZero125uXqm.evaluateOnce = function () {
        if (hs_a81325uXql.notEvaluated) {
            return hs_a81325uXql.hscall();
        } else {
            return hs_a81325uXql;
        }
    };
    hs_a81425uXqn.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_isIEEE.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat);
    };
    hs_zdcisIEEE125uXqo.evaluateOnce = function () {
        if (hs_a81425uXqn.notEvaluated) {
            return hs_a81425uXqn.hscall();
        } else {
            return hs_a81425uXqn;
        }
    };
    hs_a81525uXqp.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_atan2.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat);
    };
    hs_zdcatan125uXqq.evaluateOnce = function () {
        if (hs_a81525uXqp.notEvaluated) {
            return hs_a81525uXqp.hscall();
        } else {
            return hs_a81525uXqp;
        }
    };
    hs_a81625uXqr.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_properFraction.hscall($hs.modules.GHCziFloat.hs_zdfRealFracFloat);
    };
    hs_zdcproperFraction125uXqs.evaluateOnce = function () {
        if (hs_a81625uXqr.notEvaluated) {
            return hs_a81625uXqr.hscall();
        } else {
            return hs_a81625uXqr;
        }
    };
    hs_a81725uXqt.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_truncate.hscall($hs.modules.GHCziFloat.hs_zdfRealFracFloat);
    };
    hs_zdctruncate125uXqu.evaluateOnce = function () {
        if (hs_a81725uXqt.notEvaluated) {
            return hs_a81725uXqt.hscall();
        } else {
            return hs_a81725uXqt;
        }
    };
    hs_a81825uXqv.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_round.hscall($hs.modules.GHCziFloat.hs_zdfRealFracFloat);
    };
    hs_zdcround125uXqw.evaluateOnce = function () {
        if (hs_a81825uXqv.notEvaluated) {
            return hs_a81825uXqv.hscall();
        } else {
            return hs_a81825uXqv;
        }
    };
    hs_a81925uXqx.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_ceiling.hscall($hs.modules.GHCziFloat.hs_zdfRealFracFloat);
    };
    hs_zdcceiling125uXqy.evaluateOnce = function () {
        if (hs_a81925uXqx.notEvaluated) {
            return hs_a81925uXqx.hscall();
        } else {
            return hs_a81925uXqx;
        }
    };
    hs_a82025uXqz.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_floor.hscall($hs.modules.GHCziFloat.hs_zdfRealFracFloat);
    };
    hs_zdcfloor125uXqA.evaluateOnce = function () {
        if (hs_a82025uXqz.notEvaluated) {
            return hs_a82025uXqz.hscall();
        } else {
            return hs_a82025uXqz;
        }
    };
    hs_a82125uXqB.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_pi.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat);
    };
    hs_zdcpi125uXqC.evaluateOnce = function () {
        if (hs_a82125uXqB.notEvaluated) {
            return hs_a82125uXqB.hscall();
        } else {
            return hs_a82125uXqB;
        }
    };
    hs_a82225uXqD.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_exp.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat);
    };
    hs_zdcexp125uXqE.evaluateOnce = function () {
        if (hs_a82225uXqD.notEvaluated) {
            return hs_a82225uXqD.hscall();
        } else {
            return hs_a82225uXqD;
        }
    };
    hs_a82325uXqF.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_sqrt.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat);
    };
    hs_zdcsqrt125uXqG.evaluateOnce = function () {
        if (hs_a82325uXqF.notEvaluated) {
            return hs_a82325uXqF.hscall();
        } else {
            return hs_a82325uXqF;
        }
    };
    hs_a82425uXqH.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_log.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat);
    };
    hs_zdclog125uXqI.evaluateOnce = function () {
        if (hs_a82425uXqH.notEvaluated) {
            return hs_a82425uXqH.hscall();
        } else {
            return hs_a82425uXqH;
        }
    };
    hs_a82525uXqJ.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_ztzt.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat);
    };
    hs_zdcztzt125uXqK.evaluateOnce = function () {
        if (hs_a82525uXqJ.notEvaluated) {
            return hs_a82525uXqJ.hscall();
        } else {
            return hs_a82525uXqJ;
        }
    };
    hs_a82625uXqL.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_logBase.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat);
    };
    hs_zdclogBase125uXqM.evaluateOnce = function () {
        if (hs_a82625uXqL.notEvaluated) {
            return hs_a82625uXqL.hscall();
        } else {
            return hs_a82625uXqL;
        }
    };
    hs_a82725uXqN.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_sin.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat);
    };
    hs_zdcsin125uXqO.evaluateOnce = function () {
        if (hs_a82725uXqN.notEvaluated) {
            return hs_a82725uXqN.hscall();
        } else {
            return hs_a82725uXqN;
        }
    };
    hs_a82825uXqP.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_tan.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat);
    };
    hs_zdctan125uXqQ.evaluateOnce = function () {
        if (hs_a82825uXqP.notEvaluated) {
            return hs_a82825uXqP.hscall();
        } else {
            return hs_a82825uXqP;
        }
    };
    hs_a82925uXqR.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_cos.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat);
    };
    hs_zdccos125uXqS.evaluateOnce = function () {
        if (hs_a82925uXqR.notEvaluated) {
            return hs_a82925uXqR.hscall();
        } else {
            return hs_a82925uXqR;
        }
    };
    hs_a83025uXqT.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_asin.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat);
    };
    hs_zdcasin125uXqU.evaluateOnce = function () {
        if (hs_a83025uXqT.notEvaluated) {
            return hs_a83025uXqT.hscall();
        } else {
            return hs_a83025uXqT;
        }
    };
    hs_a83125uXqV.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_atan.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat);
    };
    hs_zdcatan325uXqW.evaluateOnce = function () {
        if (hs_a83125uXqV.notEvaluated) {
            return hs_a83125uXqV.hscall();
        } else {
            return hs_a83125uXqV;
        }
    };
    hs_a83225uXqX.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_acos.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat);
    };
    hs_zdcacos125uXqY.evaluateOnce = function () {
        if (hs_a83225uXqX.notEvaluated) {
            return hs_a83225uXqX.hscall();
        } else {
            return hs_a83225uXqX;
        }
    };
    hs_a83325uXqZ.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_sinh.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat);
    };
    hs_zdcsinh125uXr0.evaluateOnce = function () {
        if (hs_a83325uXqZ.notEvaluated) {
            return hs_a83325uXqZ.hscall();
        } else {
            return hs_a83325uXqZ;
        }
    };
    hs_a83425uXr1.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_tanh.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat);
    };
    hs_zdctanh125uXr2.evaluateOnce = function () {
        if (hs_a83425uXr1.notEvaluated) {
            return hs_a83425uXr1.hscall();
        } else {
            return hs_a83425uXr1;
        }
    };
    hs_a83525uXr3.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_cosh.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat);
    };
    hs_zdccosh125uXr4.evaluateOnce = function () {
        if (hs_a83525uXr3.notEvaluated) {
            return hs_a83525uXr3.hscall();
        } else {
            return hs_a83525uXr3;
        }
    };
    hs_a83625uXr5.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_asinh.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat);
    };
    hs_zdcasinh125uXr6.evaluateOnce = function () {
        if (hs_a83625uXr5.notEvaluated) {
            return hs_a83625uXr5.hscall();
        } else {
            return hs_a83625uXr5;
        }
    };
    hs_a83725uXr7.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_atanh.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat);
    };
    hs_zdcatanh125uXr8.evaluateOnce = function () {
        if (hs_a83725uXr7.notEvaluated) {
            return hs_a83725uXr7.hscall();
        } else {
            return hs_a83725uXr7;
        }
    };
    hs_a83825uXr9.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_acosh.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat);
    };
    hs_zdcacosh125uXra.evaluateOnce = function () {
        if (hs_a83825uXr9.notEvaluated) {
            return hs_a83825uXr9.hscall();
        } else {
            return hs_a83825uXr9;
        }
    };
    hs_a83925uXrb.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zs.hscall($hs.modules.GHCziFloat.hs_zdfFractionalFloat);
    };
    hs_zdczs125uXrc.evaluateOnce = function () {
        if (hs_a83925uXrb.notEvaluated) {
            return hs_a83925uXrb.hscall();
        } else {
            return hs_a83925uXrb;
        }
    };
    hs_a84025uXrd.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_recip.hscall($hs.modules.GHCziFloat.hs_zdfFractionalFloat);
    };
    hs_zdcrecip125uXre.evaluateOnce = function () {
        if (hs_a84025uXrd.notEvaluated) {
            return hs_a84025uXrd.hscall();
        } else {
            return hs_a84025uXrd;
        }
    };
    hs_a84125uXrf.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_fromRational.hscall($hs.modules.GHCziFloat.hs_zdfFractionalFloat);
    };
    hs_zdcfromRational125uXrg.evaluateOnce = function () {
        if (hs_a84125uXrf.notEvaluated) {
            return hs_a84125uXrf.hscall();
        } else {
            return hs_a84125uXrf;
        }
    };
    hs_a84225uXrh.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziFloat.hs_zdfRealFloat);
    };
    hs_zdctoRational1325uXri.evaluateOnce = function () {
        if (hs_a84225uXrh.notEvaluated) {
            return hs_a84225uXrh.hscall();
        } else {
            return hs_a84225uXrh;
        }
    };
    hs_a84325uXrj.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableFloat);
    };
    hs_zdcsizzeOf1325uXrk.evaluateOnce = function () {
        if (hs_a84325uXrj.notEvaluated) {
            return hs_a84325uXrj.hscall();
        } else {
            return hs_a84325uXrj;
        }
    };
    hs_a84425uXrl.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableFloat);
    };
    hs_zdcalignment1325uXrm.evaluateOnce = function () {
        if (hs_a84425uXrl.notEvaluated) {
            return hs_a84425uXrl.hscall();
        } else {
            return hs_a84425uXrl;
        }
    };
    hs_a84525uXrn.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableFloat);
    };
    hs_zdcpeekElemOff1325uXro.evaluateOnce = function () {
        if (hs_a84525uXrn.notEvaluated) {
            return hs_a84525uXrn.hscall();
        } else {
            return hs_a84525uXrn;
        }
    };
    hs_a84625uXrp.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableFloat);
    };
    hs_zdcpokeElemOff1325uXrq.evaluateOnce = function () {
        if (hs_a84625uXrp.notEvaluated) {
            return hs_a84625uXrp.hscall();
        } else {
            return hs_a84625uXrp;
        }
    };
    hs_a84725uXrr.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableFloat);
    };
    hs_zdcpeekByteOff1325uXrs.evaluateOnce = function () {
        if (hs_a84725uXrr.notEvaluated) {
            return hs_a84725uXrr.hscall();
        } else {
            return hs_a84725uXrr;
        }
    };
    hs_a84825uXrt.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableFloat);
    };
    hs_zdcpokeByteOff1325uXru.evaluateOnce = function () {
        if (hs_a84825uXrt.notEvaluated) {
            return hs_a84825uXrt.hscall();
        } else {
            return hs_a84825uXrt;
        }
    };
    hs_a84925uXrv.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableFloat);
    };
    hs_zdcpeek1325uXrw.evaluateOnce = function () {
        if (hs_a84925uXrv.notEvaluated) {
            return hs_a84925uXrv.hscall();
        } else {
            return hs_a84925uXrv;
        }
    };
    hs_a85025uXrx.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableFloat);
    };
    hs_zdcpoke1325uXry.evaluateOnce = function () {
        if (hs_a85025uXrx.notEvaluated) {
            return hs_a85025uXrx.hscall();
        } else {
            return hs_a85025uXrx;
        }
    };
    this.hs_zdfStorableCFloat.data = [hs_a84325uXrj, hs_a84425uXrl, hs_a84525uXrn, hs_a84625uXrp, hs_a84725uXrr, hs_a84825uXrt, hs_a84925uXrv, hs_a85025uXrx];
    hs_a85125uXrz.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziFloat.hs_zdfEnumFloat);
    };
    hs_zdcsucc1325uXrA.evaluateOnce = function () {
        if (hs_a85125uXrz.notEvaluated) {
            return hs_a85125uXrz.hscall();
        } else {
            return hs_a85125uXrz;
        }
    };
    hs_a85225uXrB.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziFloat.hs_zdfEnumFloat);
    };
    hs_zdcpred1325uXrC.evaluateOnce = function () {
        if (hs_a85225uXrB.notEvaluated) {
            return hs_a85225uXrB.hscall();
        } else {
            return hs_a85225uXrB;
        }
    };
    hs_a85325uXrD.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziFloat.hs_zdfEnumFloat);
    };
    hs_zdctoEnum1325uXrE.evaluateOnce = function () {
        if (hs_a85325uXrD.notEvaluated) {
            return hs_a85325uXrD.hscall();
        } else {
            return hs_a85325uXrD;
        }
    };
    hs_a85425uXrF.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziFloat.hs_zdfEnumFloat);
    };
    hs_zdcfromEnum1325uXrG.evaluateOnce = function () {
        if (hs_a85425uXrF.notEvaluated) {
            return hs_a85425uXrF.hscall();
        } else {
            return hs_a85425uXrF;
        }
    };
    hs_a85525uXrH.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziFloat.hs_zdfEnumFloat);
    };
    hs_zdcenumFrom1325uXrI.evaluateOnce = function () {
        if (hs_a85525uXrH.notEvaluated) {
            return hs_a85525uXrH.hscall();
        } else {
            return hs_a85525uXrH;
        }
    };
    hs_a85625uXrJ.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziFloat.hs_zdfEnumFloat);
    };
    hs_zdcenumFromThen1325uXrK.evaluateOnce = function () {
        if (hs_a85625uXrJ.notEvaluated) {
            return hs_a85625uXrJ.hscall();
        } else {
            return hs_a85625uXrJ;
        }
    };
    hs_a85725uXrL.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziFloat.hs_zdfEnumFloat);
    };
    hs_zdcenumFromTo1325uXrM.evaluateOnce = function () {
        if (hs_a85725uXrL.notEvaluated) {
            return hs_a85725uXrL.hscall();
        } else {
            return hs_a85725uXrL;
        }
    };
    hs_a85825uXrN.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziFloat.hs_zdfEnumFloat);
    };
    hs_zdcenumFromThenTo1325uXrO.evaluateOnce = function () {
        if (hs_a85825uXrN.notEvaluated) {
            return hs_a85825uXrN.hscall();
        } else {
            return hs_a85825uXrN;
        }
    };
    this.hs_zdfEnumCFloat.data = [hs_a85125uXrz, hs_a85225uXrB, hs_a85325uXrD, hs_a85425uXrF, hs_a85525uXrH, hs_a85625uXrJ, hs_a85725uXrL, hs_a85825uXrN];
    hs_a85925uXrP.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat);
    };
    hs_zdczp1325uXrQ.evaluateOnce = function () {
        if (hs_a85925uXrP.notEvaluated) {
            return hs_a85925uXrP.hscall();
        } else {
            return hs_a85925uXrP;
        }
    };
    hs_a86025uXrR.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat);
    };
    hs_zdczt1325uXrS.evaluateOnce = function () {
        if (hs_a86025uXrR.notEvaluated) {
            return hs_a86025uXrR.hscall();
        } else {
            return hs_a86025uXrR;
        }
    };
    hs_a86125uXrT.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat);
    };
    hs_zdczm1325uXrU.evaluateOnce = function () {
        if (hs_a86125uXrT.notEvaluated) {
            return hs_a86125uXrT.hscall();
        } else {
            return hs_a86125uXrT;
        }
    };
    hs_a86225uXrV.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat);
    };
    hs_zdcnegate1325uXrW.evaluateOnce = function () {
        if (hs_a86225uXrV.notEvaluated) {
            return hs_a86225uXrV.hscall();
        } else {
            return hs_a86225uXrV;
        }
    };
    hs_a86325uXrX.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat);
    };
    hs_zdcabs1325uXrY.evaluateOnce = function () {
        if (hs_a86325uXrX.notEvaluated) {
            return hs_a86325uXrX.hscall();
        } else {
            return hs_a86325uXrX;
        }
    };
    hs_a86425uXrZ.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat);
    };
    hs_zdcsignum1325uXs0.evaluateOnce = function () {
        if (hs_a86425uXrZ.notEvaluated) {
            return hs_a86425uXrZ.hscall();
        } else {
            return hs_a86425uXrZ;
        }
    };
    hs_a86525uXs1.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat);
    };
    hs_zdcfromInteger1325uXs2.evaluateOnce = function () {
        if (hs_a86525uXs1.notEvaluated) {
            return hs_a86525uXs1.hscall();
        } else {
            return hs_a86525uXs1;
        }
    };
    hs_a86625uXs3.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziClasses.hs_zdfOrdFloat);
    };
    hs_zdccompare1325uXs4.evaluateOnce = function () {
        if (hs_a86625uXs3.notEvaluated) {
            return hs_a86625uXs3.hscall();
        } else {
            return hs_a86625uXs3;
        }
    };
    hs_a86725uXs5.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdFloat);
    };
    hs_zdczl1325uXs6.evaluateOnce = function () {
        if (hs_a86725uXs5.notEvaluated) {
            return hs_a86725uXs5.hscall();
        } else {
            return hs_a86725uXs5;
        }
    };
    hs_a86825uXs7.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdFloat);
    };
    hs_zdczgze1325uXs8.evaluateOnce = function () {
        if (hs_a86825uXs7.notEvaluated) {
            return hs_a86825uXs7.hscall();
        } else {
            return hs_a86825uXs7;
        }
    };
    hs_a86925uXs9.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdFloat);
    };
    hs_zdczg1325uXsa.evaluateOnce = function () {
        if (hs_a86925uXs9.notEvaluated) {
            return hs_a86925uXs9.hscall();
        } else {
            return hs_a86925uXs9;
        }
    };
    hs_a87025uXsb.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdFloat);
    };
    hs_zdczlze1325uXsc.evaluateOnce = function () {
        if (hs_a87025uXsb.notEvaluated) {
            return hs_a87025uXsb.hscall();
        } else {
            return hs_a87025uXsb;
        }
    };
    hs_a87125uXsd.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziClasses.hs_zdfOrdFloat);
    };
    hs_zdcmax1325uXse.evaluateOnce = function () {
        if (hs_a87125uXsd.notEvaluated) {
            return hs_a87125uXsd.hscall();
        } else {
            return hs_a87125uXsd;
        }
    };
    hs_a87225uXsf.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziClasses.hs_zdfOrdFloat);
    };
    hs_zdcmin1325uXsg.evaluateOnce = function () {
        if (hs_a87225uXsf.notEvaluated) {
            return hs_a87225uXsf.hscall();
        } else {
            return hs_a87225uXsf;
        }
    };
    hs_a87325uXsh.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqFloat);
    };
    hs_zdczeze1325uXsi.evaluateOnce = function () {
        if (hs_a87325uXsh.notEvaluated) {
            return hs_a87325uXsh.hscall();
        } else {
            return hs_a87325uXsh;
        }
    };
    hs_a87425uXsj.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziClasses.hs_zdfEqFloat);
    };
    hs_zdczsze1325uXsk.evaluateOnce = function () {
        if (hs_a87425uXsj.notEvaluated) {
            return hs_a87425uXsj.hscall();
        } else {
            return hs_a87425uXsj;
        }
    };
    this.hs_zdfEqCFloat.data = [hs_a87325uXsh, hs_a87425uXsj];
    this.hs_zdfOrdCFloat.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCFloat, hs_a86625uXs3, hs_a86725uXs5, hs_a86825uXs7, hs_a86925uXs9, hs_a87025uXsb, hs_a87125uXsd, hs_a87225uXsf];
    this.hs_zdfNumCFloat.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCFloat, $hs.modules.ForeignziCziTypes.hs_zdfShowCFloat, hs_a85925uXrP, hs_a86025uXrR, hs_a86125uXrT, hs_a86225uXrV, hs_a86325uXrX, hs_a86425uXrZ, hs_a86525uXs1];
    this.hs_zdfRealCFloat.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCFloat, $hs.modules.ForeignziCziTypes.hs_zdfOrdCFloat, hs_a84225uXrh];
    this.hs_zdfFractionalCFloat.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCFloat, hs_a83925uXrb, hs_a84025uXrd, hs_a84125uXrf];
    this.hs_zdfFloatingCFloat.data = [$hs.modules.ForeignziCziTypes.hs_zdfFractionalCFloat, hs_a82125uXqB, hs_a82225uXqD, hs_a82325uXqF, hs_a82425uXqH, hs_a82525uXqJ, hs_a82625uXqL, hs_a82725uXqN, hs_a82825uXqP, hs_a82925uXqR, hs_a83025uXqT, hs_a83125uXqV, hs_a83225uXqX, hs_a83325uXqZ, hs_a83425uXr1, hs_a83525uXr3, hs_a83625uXr5, hs_a83725uXr7, hs_a83825uXr9];
    this.hs_zdfRealFracCFloat.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealCFloat, $hs.modules.ForeignziCziTypes.hs_zdfFractionalCFloat, hs_a81625uXqr, hs_a81725uXqt, hs_a81825uXqv, hs_a81925uXqx, hs_a82025uXqz];
    this.hs_zdfRealFloatCFloat.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealFracCFloat, $hs.modules.ForeignziCziTypes.hs_zdfFloatingCFloat, hs_a80225uXpZ, hs_a80325uXq1, hs_a80425uXq3, hs_a80525uXq5, hs_a80625uXq7, hs_a80725uXq9, hs_a80825uXqb, hs_a80925uXqd, hs_a81025uXqf, hs_a81125uXqh, hs_a81225uXqj, hs_a81325uXql, hs_a81425uXqn, hs_a81525uXqp];
    hs_a87525uXsl.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdczizazi825uXsm.evaluateOnce = function () {
        if (hs_a87525uXsl.notEvaluated) {
            return hs_a87525uXsl.hscall();
        } else {
            return hs_a87525uXsl;
        }
    };
    hs_a87625uXsn.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdczizbzi825uXso.evaluateOnce = function () {
        if (hs_a87625uXsn.notEvaluated) {
            return hs_a87625uXsn.hscall();
        } else {
            return hs_a87625uXsn;
        }
    };
    hs_a87725uXsp.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcxor825uXsq.evaluateOnce = function () {
        if (hs_a87725uXsp.notEvaluated) {
            return hs_a87725uXsp.hscall();
        } else {
            return hs_a87725uXsp;
        }
    };
    hs_a87825uXsr.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdccomplement825uXss.evaluateOnce = function () {
        if (hs_a87825uXsr.notEvaluated) {
            return hs_a87825uXsr.hscall();
        } else {
            return hs_a87825uXsr;
        }
    };
    hs_a87925uXst.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcshift825uXsu.evaluateOnce = function () {
        if (hs_a87925uXst.notEvaluated) {
            return hs_a87925uXst.hscall();
        } else {
            return hs_a87925uXst;
        }
    };
    hs_a88025uXsv.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcrotate825uXsw.evaluateOnce = function () {
        if (hs_a88025uXsv.notEvaluated) {
            return hs_a88025uXsv.hscall();
        } else {
            return hs_a88025uXsv;
        }
    };
    hs_a88125uXsx.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcbit825uXsy.evaluateOnce = function () {
        if (hs_a88125uXsx.notEvaluated) {
            return hs_a88125uXsx.hscall();
        } else {
            return hs_a88125uXsx;
        }
    };
    hs_a88225uXsz.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcsetBit825uXsA.evaluateOnce = function () {
        if (hs_a88225uXsz.notEvaluated) {
            return hs_a88225uXsz.hscall();
        } else {
            return hs_a88225uXsz;
        }
    };
    hs_a88325uXsB.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcclearBit825uXsC.evaluateOnce = function () {
        if (hs_a88325uXsB.notEvaluated) {
            return hs_a88325uXsB.hscall();
        } else {
            return hs_a88325uXsB;
        }
    };
    hs_a88425uXsD.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdccomplementBit825uXsE.evaluateOnce = function () {
        if (hs_a88425uXsD.notEvaluated) {
            return hs_a88425uXsD.hscall();
        } else {
            return hs_a88425uXsD;
        }
    };
    hs_a88525uXsF.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdctestBit825uXsG.evaluateOnce = function () {
        if (hs_a88525uXsF.notEvaluated) {
            return hs_a88525uXsF.hscall();
        } else {
            return hs_a88525uXsF;
        }
    };
    hs_a88625uXsH.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcbitSizze825uXsI.evaluateOnce = function () {
        if (hs_a88625uXsH.notEvaluated) {
            return hs_a88625uXsH.hscall();
        } else {
            return hs_a88625uXsH;
        }
    };
    hs_a88725uXsJ.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcisSigned825uXsK.evaluateOnce = function () {
        if (hs_a88725uXsJ.notEvaluated) {
            return hs_a88725uXsJ.hscall();
        } else {
            return hs_a88725uXsJ;
        }
    };
    hs_a88825uXsL.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcshiftL825uXsM.evaluateOnce = function () {
        if (hs_a88825uXsL.notEvaluated) {
            return hs_a88825uXsL.hscall();
        } else {
            return hs_a88825uXsL;
        }
    };
    hs_a88925uXsN.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcshiftR825uXsO.evaluateOnce = function () {
        if (hs_a88925uXsN.notEvaluated) {
            return hs_a88925uXsN.hscall();
        } else {
            return hs_a88925uXsN;
        }
    };
    hs_a89025uXsP.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcrotateL825uXsQ.evaluateOnce = function () {
        if (hs_a89025uXsP.notEvaluated) {
            return hs_a89025uXsP.hscall();
        } else {
            return hs_a89025uXsP;
        }
    };
    hs_a89125uXsR.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcrotateR825uXsS.evaluateOnce = function () {
        if (hs_a89125uXsR.notEvaluated) {
            return hs_a89125uXsR.hscall();
        } else {
            return hs_a89125uXsR;
        }
    };
    hs_a89225uXsT.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcquot825uXsU.evaluateOnce = function () {
        if (hs_a89225uXsT.notEvaluated) {
            return hs_a89225uXsT.hscall();
        } else {
            return hs_a89225uXsT;
        }
    };
    hs_a89325uXsV.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcrem825uXsW.evaluateOnce = function () {
        if (hs_a89325uXsV.notEvaluated) {
            return hs_a89325uXsV.hscall();
        } else {
            return hs_a89325uXsV;
        }
    };
    hs_a89425uXsX.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcdiv825uXsY.evaluateOnce = function () {
        if (hs_a89425uXsX.notEvaluated) {
            return hs_a89425uXsX.hscall();
        } else {
            return hs_a89425uXsX;
        }
    };
    hs_a89525uXsZ.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcmod825uXt0.evaluateOnce = function () {
        if (hs_a89525uXsZ.notEvaluated) {
            return hs_a89525uXsZ.hscall();
        } else {
            return hs_a89525uXsZ;
        }
    };
    hs_a89625uXt1.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcquotRem825uXt2.evaluateOnce = function () {
        if (hs_a89625uXt1.notEvaluated) {
            return hs_a89625uXt1.hscall();
        } else {
            return hs_a89625uXt1;
        }
    };
    hs_a89725uXt3.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcdivMod825uXt4.evaluateOnce = function () {
        if (hs_a89725uXt3.notEvaluated) {
            return hs_a89725uXt3.hscall();
        } else {
            return hs_a89725uXt3;
        }
    };
    hs_a89825uXt5.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdctoInteger825uXt6.evaluateOnce = function () {
        if (hs_a89825uXt5.notEvaluated) {
            return hs_a89825uXt5.hscall();
        } else {
            return hs_a89825uXt5;
        }
    };
    hs_a89925uXt7.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord64);
    };
    hs_zdcminBound825uXt8.evaluateOnce = function () {
        if (hs_a89925uXt7.notEvaluated) {
            return hs_a89925uXt7.hscall();
        } else {
            return hs_a89925uXt7;
        }
    };
    hs_a90025uXt9.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord64);
    };
    hs_zdcmaxBound825uXta.evaluateOnce = function () {
        if (hs_a90025uXt9.notEvaluated) {
            return hs_a90025uXt9.hscall();
        } else {
            return hs_a90025uXt9;
        }
    };
    this.hs_zdfBoundedCULLong.data = [hs_a89925uXt7, hs_a90025uXt9];
    hs_a90125uXtb.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziWord.hs_zdfRealWord64);
    };
    hs_zdctoRational1425uXtc.evaluateOnce = function () {
        if (hs_a90125uXtb.notEvaluated) {
            return hs_a90125uXtb.hscall();
        } else {
            return hs_a90125uXtb;
        }
    };
    hs_a90225uXtd.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcsizzeOf1425uXte.evaluateOnce = function () {
        if (hs_a90225uXtd.notEvaluated) {
            return hs_a90225uXtd.hscall();
        } else {
            return hs_a90225uXtd;
        }
    };
    hs_a90325uXtf.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcalignment1425uXtg.evaluateOnce = function () {
        if (hs_a90325uXtf.notEvaluated) {
            return hs_a90325uXtf.hscall();
        } else {
            return hs_a90325uXtf;
        }
    };
    hs_a90425uXth.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpeekElemOff1425uXti.evaluateOnce = function () {
        if (hs_a90425uXth.notEvaluated) {
            return hs_a90425uXth.hscall();
        } else {
            return hs_a90425uXth;
        }
    };
    hs_a90525uXtj.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpokeElemOff1425uXtk.evaluateOnce = function () {
        if (hs_a90525uXtj.notEvaluated) {
            return hs_a90525uXtj.hscall();
        } else {
            return hs_a90525uXtj;
        }
    };
    hs_a90625uXtl.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpeekByteOff1425uXtm.evaluateOnce = function () {
        if (hs_a90625uXtl.notEvaluated) {
            return hs_a90625uXtl.hscall();
        } else {
            return hs_a90625uXtl;
        }
    };
    hs_a90725uXtn.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpokeByteOff1425uXto.evaluateOnce = function () {
        if (hs_a90725uXtn.notEvaluated) {
            return hs_a90725uXtn.hscall();
        } else {
            return hs_a90725uXtn;
        }
    };
    hs_a90825uXtp.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpeek1425uXtq.evaluateOnce = function () {
        if (hs_a90825uXtp.notEvaluated) {
            return hs_a90825uXtp.hscall();
        } else {
            return hs_a90825uXtp;
        }
    };
    hs_a90925uXtr.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpoke1425uXts.evaluateOnce = function () {
        if (hs_a90925uXtr.notEvaluated) {
            return hs_a90925uXtr.hscall();
        } else {
            return hs_a90925uXtr;
        }
    };
    this.hs_zdfStorableCULLong.data = [hs_a90225uXtd, hs_a90325uXtf, hs_a90425uXth, hs_a90525uXtj, hs_a90625uXtl, hs_a90725uXtn, hs_a90825uXtp, hs_a90925uXtr];
    hs_a91025uXtt.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcsucc1425uXtu.evaluateOnce = function () {
        if (hs_a91025uXtt.notEvaluated) {
            return hs_a91025uXtt.hscall();
        } else {
            return hs_a91025uXtt;
        }
    };
    hs_a91125uXtv.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcpred1425uXtw.evaluateOnce = function () {
        if (hs_a91125uXtv.notEvaluated) {
            return hs_a91125uXtv.hscall();
        } else {
            return hs_a91125uXtv;
        }
    };
    hs_a91225uXtx.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdctoEnum1425uXty.evaluateOnce = function () {
        if (hs_a91225uXtx.notEvaluated) {
            return hs_a91225uXtx.hscall();
        } else {
            return hs_a91225uXtx;
        }
    };
    hs_a91325uXtz.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcfromEnum1425uXtA.evaluateOnce = function () {
        if (hs_a91325uXtz.notEvaluated) {
            return hs_a91325uXtz.hscall();
        } else {
            return hs_a91325uXtz;
        }
    };
    hs_a91425uXtB.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcenumFrom1425uXtC.evaluateOnce = function () {
        if (hs_a91425uXtB.notEvaluated) {
            return hs_a91425uXtB.hscall();
        } else {
            return hs_a91425uXtB;
        }
    };
    hs_a91525uXtD.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcenumFromThen1425uXtE.evaluateOnce = function () {
        if (hs_a91525uXtD.notEvaluated) {
            return hs_a91525uXtD.hscall();
        } else {
            return hs_a91525uXtD;
        }
    };
    hs_a91625uXtF.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcenumFromTo1425uXtG.evaluateOnce = function () {
        if (hs_a91625uXtF.notEvaluated) {
            return hs_a91625uXtF.hscall();
        } else {
            return hs_a91625uXtF;
        }
    };
    hs_a91725uXtH.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcenumFromThenTo1425uXtI.evaluateOnce = function () {
        if (hs_a91725uXtH.notEvaluated) {
            return hs_a91725uXtH.hscall();
        } else {
            return hs_a91725uXtH;
        }
    };
    this.hs_zdfEnumCULLong.data = [hs_a91025uXtt, hs_a91125uXtv, hs_a91225uXtx, hs_a91325uXtz, hs_a91425uXtB, hs_a91525uXtD, hs_a91625uXtF, hs_a91725uXtH];
    hs_a91825uXtJ.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdczp1425uXtK.evaluateOnce = function () {
        if (hs_a91825uXtJ.notEvaluated) {
            return hs_a91825uXtJ.hscall();
        } else {
            return hs_a91825uXtJ;
        }
    };
    hs_a91925uXtL.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdczt1425uXtM.evaluateOnce = function () {
        if (hs_a91925uXtL.notEvaluated) {
            return hs_a91925uXtL.hscall();
        } else {
            return hs_a91925uXtL;
        }
    };
    hs_a92025uXtN.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdczm1425uXtO.evaluateOnce = function () {
        if (hs_a92025uXtN.notEvaluated) {
            return hs_a92025uXtN.hscall();
        } else {
            return hs_a92025uXtN;
        }
    };
    hs_a92125uXtP.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdcnegate1425uXtQ.evaluateOnce = function () {
        if (hs_a92125uXtP.notEvaluated) {
            return hs_a92125uXtP.hscall();
        } else {
            return hs_a92125uXtP;
        }
    };
    hs_a92225uXtR.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdcabs1425uXtS.evaluateOnce = function () {
        if (hs_a92225uXtR.notEvaluated) {
            return hs_a92225uXtR.hscall();
        } else {
            return hs_a92225uXtR;
        }
    };
    hs_a92325uXtT.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdcsignum1425uXtU.evaluateOnce = function () {
        if (hs_a92325uXtT.notEvaluated) {
            return hs_a92325uXtT.hscall();
        } else {
            return hs_a92325uXtT;
        }
    };
    hs_a92425uXtV.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdcfromInteger1425uXtW.evaluateOnce = function () {
        if (hs_a92425uXtV.notEvaluated) {
            return hs_a92425uXtV.hscall();
        } else {
            return hs_a92425uXtV;
        }
    };
    hs_a92525uXtX.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdccompare1425uXtY.evaluateOnce = function () {
        if (hs_a92525uXtX.notEvaluated) {
            return hs_a92525uXtX.hscall();
        } else {
            return hs_a92525uXtX;
        }
    };
    hs_a92625uXtZ.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdczl1425uXu0.evaluateOnce = function () {
        if (hs_a92625uXtZ.notEvaluated) {
            return hs_a92625uXtZ.hscall();
        } else {
            return hs_a92625uXtZ;
        }
    };
    hs_a92725uXu1.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdczgze1425uXu2.evaluateOnce = function () {
        if (hs_a92725uXu1.notEvaluated) {
            return hs_a92725uXu1.hscall();
        } else {
            return hs_a92725uXu1;
        }
    };
    hs_a92825uXu3.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdczg1425uXu4.evaluateOnce = function () {
        if (hs_a92825uXu3.notEvaluated) {
            return hs_a92825uXu3.hscall();
        } else {
            return hs_a92825uXu3;
        }
    };
    hs_a92925uXu5.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdczlze1425uXu6.evaluateOnce = function () {
        if (hs_a92925uXu5.notEvaluated) {
            return hs_a92925uXu5.hscall();
        } else {
            return hs_a92925uXu5;
        }
    };
    hs_a93025uXu7.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdcmax1425uXu8.evaluateOnce = function () {
        if (hs_a93025uXu7.notEvaluated) {
            return hs_a93025uXu7.hscall();
        } else {
            return hs_a93025uXu7;
        }
    };
    hs_a93125uXu9.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdcmin1425uXua.evaluateOnce = function () {
        if (hs_a93125uXu9.notEvaluated) {
            return hs_a93125uXu9.hscall();
        } else {
            return hs_a93125uXu9;
        }
    };
    hs_a93225uXub.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord64);
    };
    hs_zdczeze1425uXuc.evaluateOnce = function () {
        if (hs_a93225uXub.notEvaluated) {
            return hs_a93225uXub.hscall();
        } else {
            return hs_a93225uXub;
        }
    };
    hs_a93325uXud.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord64);
    };
    hs_zdczsze1425uXue.evaluateOnce = function () {
        if (hs_a93325uXud.notEvaluated) {
            return hs_a93325uXud.hscall();
        } else {
            return hs_a93325uXud;
        }
    };
    this.hs_zdfEqCULLong.data = [hs_a93225uXub, hs_a93325uXud];
    this.hs_zdfOrdCULLong.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCULLong, hs_a92525uXtX, hs_a92625uXtZ, hs_a92725uXu1, hs_a92825uXu3, hs_a92925uXu5, hs_a93025uXu7, hs_a93125uXu9];
    this.hs_zdfNumCULLong.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCULLong, $hs.modules.ForeignziCziTypes.hs_zdfShowCULLong, hs_a91825uXtJ, hs_a91925uXtL, hs_a92025uXtN, hs_a92125uXtP, hs_a92225uXtR, hs_a92325uXtT, hs_a92425uXtV];
    this.hs_zdfRealCULLong.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCULLong, $hs.modules.ForeignziCziTypes.hs_zdfOrdCULLong, hs_a90125uXtb];
    this.hs_zdfIntegralCULLong.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealCULLong, $hs.modules.ForeignziCziTypes.hs_zdfEnumCULLong, hs_a89225uXsT, hs_a89325uXsV, hs_a89425uXsX, hs_a89525uXsZ, hs_a89625uXt1, hs_a89725uXt3, hs_a89825uXt5];
    this.hs_zdfBitsCULLong.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCULLong, hs_a87525uXsl, hs_a87625uXsn, hs_a87725uXsp, hs_a87825uXsr, hs_a87925uXst, hs_a88025uXsv, hs_a88125uXsx, hs_a88225uXsz, hs_a88325uXsB, hs_a88425uXsD, hs_a88525uXsF, hs_a88625uXsH, hs_a88725uXsJ, hs_a88825uXsL, hs_a88925uXsN, hs_a89025uXsP, hs_a89125uXsR];
    hs_a93425uXuf.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdczizazi925uXug.evaluateOnce = function () {
        if (hs_a93425uXuf.notEvaluated) {
            return hs_a93425uXuf.hscall();
        } else {
            return hs_a93425uXuf;
        }
    };
    hs_a93525uXuh.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdczizbzi925uXui.evaluateOnce = function () {
        if (hs_a93525uXuh.notEvaluated) {
            return hs_a93525uXuh.hscall();
        } else {
            return hs_a93525uXuh;
        }
    };
    hs_a93625uXuj.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcxor925uXuk.evaluateOnce = function () {
        if (hs_a93625uXuj.notEvaluated) {
            return hs_a93625uXuj.hscall();
        } else {
            return hs_a93625uXuj;
        }
    };
    hs_a93725uXul.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdccomplement925uXum.evaluateOnce = function () {
        if (hs_a93725uXul.notEvaluated) {
            return hs_a93725uXul.hscall();
        } else {
            return hs_a93725uXul;
        }
    };
    hs_a93825uXun.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcshift925uXuo.evaluateOnce = function () {
        if (hs_a93825uXun.notEvaluated) {
            return hs_a93825uXun.hscall();
        } else {
            return hs_a93825uXun;
        }
    };
    hs_a93925uXup.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcrotate925uXuq.evaluateOnce = function () {
        if (hs_a93925uXup.notEvaluated) {
            return hs_a93925uXup.hscall();
        } else {
            return hs_a93925uXup;
        }
    };
    hs_a94025uXur.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcbit925uXus.evaluateOnce = function () {
        if (hs_a94025uXur.notEvaluated) {
            return hs_a94025uXur.hscall();
        } else {
            return hs_a94025uXur;
        }
    };
    hs_a94125uXut.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcsetBit925uXuu.evaluateOnce = function () {
        if (hs_a94125uXut.notEvaluated) {
            return hs_a94125uXut.hscall();
        } else {
            return hs_a94125uXut;
        }
    };
    hs_a94225uXuv.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcclearBit925uXuw.evaluateOnce = function () {
        if (hs_a94225uXuv.notEvaluated) {
            return hs_a94225uXuv.hscall();
        } else {
            return hs_a94225uXuv;
        }
    };
    hs_a94325uXux.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdccomplementBit925uXuy.evaluateOnce = function () {
        if (hs_a94325uXux.notEvaluated) {
            return hs_a94325uXux.hscall();
        } else {
            return hs_a94325uXux;
        }
    };
    hs_a94425uXuz.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdctestBit925uXuA.evaluateOnce = function () {
        if (hs_a94425uXuz.notEvaluated) {
            return hs_a94425uXuz.hscall();
        } else {
            return hs_a94425uXuz;
        }
    };
    hs_a94525uXuB.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcbitSizze925uXuC.evaluateOnce = function () {
        if (hs_a94525uXuB.notEvaluated) {
            return hs_a94525uXuB.hscall();
        } else {
            return hs_a94525uXuB;
        }
    };
    hs_a94625uXuD.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcisSigned925uXuE.evaluateOnce = function () {
        if (hs_a94625uXuD.notEvaluated) {
            return hs_a94625uXuD.hscall();
        } else {
            return hs_a94625uXuD;
        }
    };
    hs_a94725uXuF.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcshiftL925uXuG.evaluateOnce = function () {
        if (hs_a94725uXuF.notEvaluated) {
            return hs_a94725uXuF.hscall();
        } else {
            return hs_a94725uXuF;
        }
    };
    hs_a94825uXuH.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcshiftR925uXuI.evaluateOnce = function () {
        if (hs_a94825uXuH.notEvaluated) {
            return hs_a94825uXuH.hscall();
        } else {
            return hs_a94825uXuH;
        }
    };
    hs_a94925uXuJ.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcrotateL925uXuK.evaluateOnce = function () {
        if (hs_a94925uXuJ.notEvaluated) {
            return hs_a94925uXuJ.hscall();
        } else {
            return hs_a94925uXuJ;
        }
    };
    hs_a95025uXuL.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcrotateR925uXuM.evaluateOnce = function () {
        if (hs_a95025uXuL.notEvaluated) {
            return hs_a95025uXuL.hscall();
        } else {
            return hs_a95025uXuL;
        }
    };
    hs_a95125uXuN.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64);
    };
    hs_zdcquot925uXuO.evaluateOnce = function () {
        if (hs_a95125uXuN.notEvaluated) {
            return hs_a95125uXuN.hscall();
        } else {
            return hs_a95125uXuN;
        }
    };
    hs_a95225uXuP.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64);
    };
    hs_zdcrem925uXuQ.evaluateOnce = function () {
        if (hs_a95225uXuP.notEvaluated) {
            return hs_a95225uXuP.hscall();
        } else {
            return hs_a95225uXuP;
        }
    };
    hs_a95325uXuR.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64);
    };
    hs_zdcdiv925uXuS.evaluateOnce = function () {
        if (hs_a95325uXuR.notEvaluated) {
            return hs_a95325uXuR.hscall();
        } else {
            return hs_a95325uXuR;
        }
    };
    hs_a95425uXuT.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64);
    };
    hs_zdcmod925uXuU.evaluateOnce = function () {
        if (hs_a95425uXuT.notEvaluated) {
            return hs_a95425uXuT.hscall();
        } else {
            return hs_a95425uXuT;
        }
    };
    hs_a95525uXuV.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64);
    };
    hs_zdcquotRem925uXuW.evaluateOnce = function () {
        if (hs_a95525uXuV.notEvaluated) {
            return hs_a95525uXuV.hscall();
        } else {
            return hs_a95525uXuV;
        }
    };
    hs_a95625uXuX.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64);
    };
    hs_zdcdivMod925uXuY.evaluateOnce = function () {
        if (hs_a95625uXuX.notEvaluated) {
            return hs_a95625uXuX.hscall();
        } else {
            return hs_a95625uXuX;
        }
    };
    hs_a95725uXuZ.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64);
    };
    hs_zdctoInteger925uXv0.evaluateOnce = function () {
        if (hs_a95725uXuZ.notEvaluated) {
            return hs_a95725uXuZ.hscall();
        } else {
            return hs_a95725uXuZ;
        }
    };
    hs_a95825uXv1.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt64);
    };
    hs_zdcminBound925uXv2.evaluateOnce = function () {
        if (hs_a95825uXv1.notEvaluated) {
            return hs_a95825uXv1.hscall();
        } else {
            return hs_a95825uXv1;
        }
    };
    hs_a95925uXv3.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt64);
    };
    hs_zdcmaxBound925uXv4.evaluateOnce = function () {
        if (hs_a95925uXv3.notEvaluated) {
            return hs_a95925uXv3.hscall();
        } else {
            return hs_a95925uXv3;
        }
    };
    this.hs_zdfBoundedCLLong.data = [hs_a95825uXv1, hs_a95925uXv3];
    hs_a96025uXv5.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziInt.hs_zdfRealInt64);
    };
    hs_zdctoRational1525uXv6.evaluateOnce = function () {
        if (hs_a96025uXv5.notEvaluated) {
            return hs_a96025uXv5.hscall();
        } else {
            return hs_a96025uXv5;
        }
    };
    hs_a96125uXv7.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcsizzeOf1525uXv8.evaluateOnce = function () {
        if (hs_a96125uXv7.notEvaluated) {
            return hs_a96125uXv7.hscall();
        } else {
            return hs_a96125uXv7;
        }
    };
    hs_a96225uXv9.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcalignment1525uXva.evaluateOnce = function () {
        if (hs_a96225uXv9.notEvaluated) {
            return hs_a96225uXv9.hscall();
        } else {
            return hs_a96225uXv9;
        }
    };
    hs_a96325uXvb.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcpeekElemOff1525uXvc.evaluateOnce = function () {
        if (hs_a96325uXvb.notEvaluated) {
            return hs_a96325uXvb.hscall();
        } else {
            return hs_a96325uXvb;
        }
    };
    hs_a96425uXvd.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcpokeElemOff1525uXve.evaluateOnce = function () {
        if (hs_a96425uXvd.notEvaluated) {
            return hs_a96425uXvd.hscall();
        } else {
            return hs_a96425uXvd;
        }
    };
    hs_a96525uXvf.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcpeekByteOff1525uXvg.evaluateOnce = function () {
        if (hs_a96525uXvf.notEvaluated) {
            return hs_a96525uXvf.hscall();
        } else {
            return hs_a96525uXvf;
        }
    };
    hs_a96625uXvh.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcpokeByteOff1525uXvi.evaluateOnce = function () {
        if (hs_a96625uXvh.notEvaluated) {
            return hs_a96625uXvh.hscall();
        } else {
            return hs_a96625uXvh;
        }
    };
    hs_a96725uXvj.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcpeek1525uXvk.evaluateOnce = function () {
        if (hs_a96725uXvj.notEvaluated) {
            return hs_a96725uXvj.hscall();
        } else {
            return hs_a96725uXvj;
        }
    };
    hs_a96825uXvl.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcpoke1525uXvm.evaluateOnce = function () {
        if (hs_a96825uXvl.notEvaluated) {
            return hs_a96825uXvl.hscall();
        } else {
            return hs_a96825uXvl;
        }
    };
    this.hs_zdfStorableCLLong.data = [hs_a96125uXv7, hs_a96225uXv9, hs_a96325uXvb, hs_a96425uXvd, hs_a96525uXvf, hs_a96625uXvh, hs_a96725uXvj, hs_a96825uXvl];
    hs_a96925uXvn.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdcsucc1525uXvo.evaluateOnce = function () {
        if (hs_a96925uXvn.notEvaluated) {
            return hs_a96925uXvn.hscall();
        } else {
            return hs_a96925uXvn;
        }
    };
    hs_a97025uXvp.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdcpred1525uXvq.evaluateOnce = function () {
        if (hs_a97025uXvp.notEvaluated) {
            return hs_a97025uXvp.hscall();
        } else {
            return hs_a97025uXvp;
        }
    };
    hs_a97125uXvr.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdctoEnum1525uXvs.evaluateOnce = function () {
        if (hs_a97125uXvr.notEvaluated) {
            return hs_a97125uXvr.hscall();
        } else {
            return hs_a97125uXvr;
        }
    };
    hs_a97225uXvt.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdcfromEnum1525uXvu.evaluateOnce = function () {
        if (hs_a97225uXvt.notEvaluated) {
            return hs_a97225uXvt.hscall();
        } else {
            return hs_a97225uXvt;
        }
    };
    hs_a97325uXvv.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdcenumFrom1525uXvw.evaluateOnce = function () {
        if (hs_a97325uXvv.notEvaluated) {
            return hs_a97325uXvv.hscall();
        } else {
            return hs_a97325uXvv;
        }
    };
    hs_a97425uXvx.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdcenumFromThen1525uXvy.evaluateOnce = function () {
        if (hs_a97425uXvx.notEvaluated) {
            return hs_a97425uXvx.hscall();
        } else {
            return hs_a97425uXvx;
        }
    };
    hs_a97525uXvz.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdcenumFromTo1525uXvA.evaluateOnce = function () {
        if (hs_a97525uXvz.notEvaluated) {
            return hs_a97525uXvz.hscall();
        } else {
            return hs_a97525uXvz;
        }
    };
    hs_a97625uXvB.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdcenumFromThenTo1525uXvC.evaluateOnce = function () {
        if (hs_a97625uXvB.notEvaluated) {
            return hs_a97625uXvB.hscall();
        } else {
            return hs_a97625uXvB;
        }
    };
    this.hs_zdfEnumCLLong.data = [hs_a96925uXvn, hs_a97025uXvp, hs_a97125uXvr, hs_a97225uXvt, hs_a97325uXvv, hs_a97425uXvx, hs_a97525uXvz, hs_a97625uXvB];
    hs_a97725uXvD.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdczp1525uXvE.evaluateOnce = function () {
        if (hs_a97725uXvD.notEvaluated) {
            return hs_a97725uXvD.hscall();
        } else {
            return hs_a97725uXvD;
        }
    };
    hs_a97825uXvF.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdczt1525uXvG.evaluateOnce = function () {
        if (hs_a97825uXvF.notEvaluated) {
            return hs_a97825uXvF.hscall();
        } else {
            return hs_a97825uXvF;
        }
    };
    hs_a97925uXvH.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdczm1525uXvI.evaluateOnce = function () {
        if (hs_a97925uXvH.notEvaluated) {
            return hs_a97925uXvH.hscall();
        } else {
            return hs_a97925uXvH;
        }
    };
    hs_a98025uXvJ.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdcnegate1525uXvK.evaluateOnce = function () {
        if (hs_a98025uXvJ.notEvaluated) {
            return hs_a98025uXvJ.hscall();
        } else {
            return hs_a98025uXvJ;
        }
    };
    hs_a98125uXvL.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdcabs1525uXvM.evaluateOnce = function () {
        if (hs_a98125uXvL.notEvaluated) {
            return hs_a98125uXvL.hscall();
        } else {
            return hs_a98125uXvL;
        }
    };
    hs_a98225uXvN.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdcsignum1525uXvO.evaluateOnce = function () {
        if (hs_a98225uXvN.notEvaluated) {
            return hs_a98225uXvN.hscall();
        } else {
            return hs_a98225uXvN;
        }
    };
    hs_a98325uXvP.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdcfromInteger1525uXvQ.evaluateOnce = function () {
        if (hs_a98325uXvP.notEvaluated) {
            return hs_a98325uXvP.hscall();
        } else {
            return hs_a98325uXvP;
        }
    };
    hs_a98425uXvR.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdccompare1525uXvS.evaluateOnce = function () {
        if (hs_a98425uXvR.notEvaluated) {
            return hs_a98425uXvR.hscall();
        } else {
            return hs_a98425uXvR;
        }
    };
    hs_a98525uXvT.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdczl1525uXvU.evaluateOnce = function () {
        if (hs_a98525uXvT.notEvaluated) {
            return hs_a98525uXvT.hscall();
        } else {
            return hs_a98525uXvT;
        }
    };
    hs_a98625uXvV.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdczgze1525uXvW.evaluateOnce = function () {
        if (hs_a98625uXvV.notEvaluated) {
            return hs_a98625uXvV.hscall();
        } else {
            return hs_a98625uXvV;
        }
    };
    hs_a98725uXvX.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdczg1525uXvY.evaluateOnce = function () {
        if (hs_a98725uXvX.notEvaluated) {
            return hs_a98725uXvX.hscall();
        } else {
            return hs_a98725uXvX;
        }
    };
    hs_a98825uXvZ.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdczlze1525uXw0.evaluateOnce = function () {
        if (hs_a98825uXvZ.notEvaluated) {
            return hs_a98825uXvZ.hscall();
        } else {
            return hs_a98825uXvZ;
        }
    };
    hs_a98925uXw1.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdcmax1525uXw2.evaluateOnce = function () {
        if (hs_a98925uXw1.notEvaluated) {
            return hs_a98925uXw1.hscall();
        } else {
            return hs_a98925uXw1;
        }
    };
    hs_a99025uXw3.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdcmin1525uXw4.evaluateOnce = function () {
        if (hs_a99025uXw3.notEvaluated) {
            return hs_a99025uXw3.hscall();
        } else {
            return hs_a99025uXw3;
        }
    };
    hs_a99125uXw5.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt64);
    };
    hs_zdczeze1525uXw6.evaluateOnce = function () {
        if (hs_a99125uXw5.notEvaluated) {
            return hs_a99125uXw5.hscall();
        } else {
            return hs_a99125uXw5;
        }
    };
    hs_a99225uXw7.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt64);
    };
    hs_zdczsze1525uXw8.evaluateOnce = function () {
        if (hs_a99225uXw7.notEvaluated) {
            return hs_a99225uXw7.hscall();
        } else {
            return hs_a99225uXw7;
        }
    };
    this.hs_zdfEqCLLong.data = [hs_a99125uXw5, hs_a99225uXw7];
    this.hs_zdfOrdCLLong.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCLLong, hs_a98425uXvR, hs_a98525uXvT, hs_a98625uXvV, hs_a98725uXvX, hs_a98825uXvZ, hs_a98925uXw1, hs_a99025uXw3];
    this.hs_zdfNumCLLong.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCLLong, $hs.modules.ForeignziCziTypes.hs_zdfShowCLLong, hs_a97725uXvD, hs_a97825uXvF, hs_a97925uXvH, hs_a98025uXvJ, hs_a98125uXvL, hs_a98225uXvN, hs_a98325uXvP];
    this.hs_zdfRealCLLong.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCLLong, $hs.modules.ForeignziCziTypes.hs_zdfOrdCLLong, hs_a96025uXv5];
    this.hs_zdfIntegralCLLong.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealCLLong, $hs.modules.ForeignziCziTypes.hs_zdfEnumCLLong, hs_a95125uXuN, hs_a95225uXuP, hs_a95325uXuR, hs_a95425uXuT, hs_a95525uXuV, hs_a95625uXuX, hs_a95725uXuZ];
    this.hs_zdfBitsCLLong.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCLLong, hs_a93425uXuf, hs_a93525uXuh, hs_a93625uXuj, hs_a93725uXul, hs_a93825uXun, hs_a93925uXup, hs_a94025uXur, hs_a94125uXut, hs_a94225uXuv, hs_a94325uXux, hs_a94425uXuz, hs_a94525uXuB, hs_a94625uXuD, hs_a94725uXuF, hs_a94825uXuH, hs_a94925uXuJ, hs_a95025uXuL];
    hs_a99325uXw9.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdczizazi1025uXwa.evaluateOnce = function () {
        if (hs_a99325uXw9.notEvaluated) {
            return hs_a99325uXw9.hscall();
        } else {
            return hs_a99325uXw9;
        }
    };
    hs_a99425uXwb.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdczizbzi1025uXwc.evaluateOnce = function () {
        if (hs_a99425uXwb.notEvaluated) {
            return hs_a99425uXwb.hscall();
        } else {
            return hs_a99425uXwb;
        }
    };
    hs_a99525uXwd.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcxor1025uXwe.evaluateOnce = function () {
        if (hs_a99525uXwd.notEvaluated) {
            return hs_a99525uXwd.hscall();
        } else {
            return hs_a99525uXwd;
        }
    };
    hs_a99625uXwf.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdccomplement1025uXwg.evaluateOnce = function () {
        if (hs_a99625uXwf.notEvaluated) {
            return hs_a99625uXwf.hscall();
        } else {
            return hs_a99625uXwf;
        }
    };
    hs_a99725uXwh.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshift1025uXwi.evaluateOnce = function () {
        if (hs_a99725uXwh.notEvaluated) {
            return hs_a99725uXwh.hscall();
        } else {
            return hs_a99725uXwh;
        }
    };
    hs_a99825uXwj.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotate1025uXwk.evaluateOnce = function () {
        if (hs_a99825uXwj.notEvaluated) {
            return hs_a99825uXwj.hscall();
        } else {
            return hs_a99825uXwj;
        }
    };
    hs_a99925uXwl.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcbit1025uXwm.evaluateOnce = function () {
        if (hs_a99925uXwl.notEvaluated) {
            return hs_a99925uXwl.hscall();
        } else {
            return hs_a99925uXwl;
        }
    };
    hs_a100025uXwn.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcsetBit1025uXwo.evaluateOnce = function () {
        if (hs_a100025uXwn.notEvaluated) {
            return hs_a100025uXwn.hscall();
        } else {
            return hs_a100025uXwn;
        }
    };
    hs_a100125uXwp.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcclearBit1025uXwq.evaluateOnce = function () {
        if (hs_a100125uXwp.notEvaluated) {
            return hs_a100125uXwp.hscall();
        } else {
            return hs_a100125uXwp;
        }
    };
    hs_a100225uXwr.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdccomplementBit1025uXws.evaluateOnce = function () {
        if (hs_a100225uXwr.notEvaluated) {
            return hs_a100225uXwr.hscall();
        } else {
            return hs_a100225uXwr;
        }
    };
    hs_a100325uXwt.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdctestBit1025uXwu.evaluateOnce = function () {
        if (hs_a100325uXwt.notEvaluated) {
            return hs_a100325uXwt.hscall();
        } else {
            return hs_a100325uXwt;
        }
    };
    hs_a100425uXwv.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcbitSizze1025uXww.evaluateOnce = function () {
        if (hs_a100425uXwv.notEvaluated) {
            return hs_a100425uXwv.hscall();
        } else {
            return hs_a100425uXwv;
        }
    };
    hs_a100525uXwx.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcisSigned1025uXwy.evaluateOnce = function () {
        if (hs_a100525uXwx.notEvaluated) {
            return hs_a100525uXwx.hscall();
        } else {
            return hs_a100525uXwx;
        }
    };
    hs_a100625uXwz.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshiftL1025uXwA.evaluateOnce = function () {
        if (hs_a100625uXwz.notEvaluated) {
            return hs_a100625uXwz.hscall();
        } else {
            return hs_a100625uXwz;
        }
    };
    hs_a100725uXwB.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshiftR1025uXwC.evaluateOnce = function () {
        if (hs_a100725uXwB.notEvaluated) {
            return hs_a100725uXwB.hscall();
        } else {
            return hs_a100725uXwB;
        }
    };
    hs_a100825uXwD.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotateL1025uXwE.evaluateOnce = function () {
        if (hs_a100825uXwD.notEvaluated) {
            return hs_a100825uXwD.hscall();
        } else {
            return hs_a100825uXwD;
        }
    };
    hs_a100925uXwF.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotateR1025uXwG.evaluateOnce = function () {
        if (hs_a100925uXwF.notEvaluated) {
            return hs_a100925uXwF.hscall();
        } else {
            return hs_a100925uXwF;
        }
    };
    hs_a101025uXwH.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcquot1025uXwI.evaluateOnce = function () {
        if (hs_a101025uXwH.notEvaluated) {
            return hs_a101025uXwH.hscall();
        } else {
            return hs_a101025uXwH;
        }
    };
    hs_a101125uXwJ.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcrem1025uXwK.evaluateOnce = function () {
        if (hs_a101125uXwJ.notEvaluated) {
            return hs_a101125uXwJ.hscall();
        } else {
            return hs_a101125uXwJ;
        }
    };
    hs_a101225uXwL.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcdiv1025uXwM.evaluateOnce = function () {
        if (hs_a101225uXwL.notEvaluated) {
            return hs_a101225uXwL.hscall();
        } else {
            return hs_a101225uXwL;
        }
    };
    hs_a101325uXwN.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcmod1025uXwO.evaluateOnce = function () {
        if (hs_a101325uXwN.notEvaluated) {
            return hs_a101325uXwN.hscall();
        } else {
            return hs_a101325uXwN;
        }
    };
    hs_a101425uXwP.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcquotRem1025uXwQ.evaluateOnce = function () {
        if (hs_a101425uXwP.notEvaluated) {
            return hs_a101425uXwP.hscall();
        } else {
            return hs_a101425uXwP;
        }
    };
    hs_a101525uXwR.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcdivMod1025uXwS.evaluateOnce = function () {
        if (hs_a101525uXwR.notEvaluated) {
            return hs_a101525uXwR.hscall();
        } else {
            return hs_a101525uXwR;
        }
    };
    hs_a101625uXwT.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdctoInteger1025uXwU.evaluateOnce = function () {
        if (hs_a101625uXwT.notEvaluated) {
            return hs_a101625uXwT.hscall();
        } else {
            return hs_a101625uXwT;
        }
    };
    hs_a101725uXwV.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
    };
    hs_zdcminBound1025uXwW.evaluateOnce = function () {
        if (hs_a101725uXwV.notEvaluated) {
            return hs_a101725uXwV.hscall();
        } else {
            return hs_a101725uXwV;
        }
    };
    hs_a101825uXwX.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
    };
    hs_zdcmaxBound1025uXwY.evaluateOnce = function () {
        if (hs_a101825uXwX.notEvaluated) {
            return hs_a101825uXwX.hscall();
        } else {
            return hs_a101825uXwX;
        }
    };
    this.hs_zdfBoundedCULong.data = [hs_a101725uXwV, hs_a101825uXwX];
    hs_a101925uXwZ.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziWord.hs_zdfRealWord32);
    };
    hs_zdctoRational1625uXx0.evaluateOnce = function () {
        if (hs_a101925uXwZ.notEvaluated) {
            return hs_a101925uXwZ.hscall();
        } else {
            return hs_a101925uXwZ;
        }
    };
    hs_a102025uXx1.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcsizzeOf1625uXx2.evaluateOnce = function () {
        if (hs_a102025uXx1.notEvaluated) {
            return hs_a102025uXx1.hscall();
        } else {
            return hs_a102025uXx1;
        }
    };
    hs_a102125uXx3.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcalignment1625uXx4.evaluateOnce = function () {
        if (hs_a102125uXx3.notEvaluated) {
            return hs_a102125uXx3.hscall();
        } else {
            return hs_a102125uXx3;
        }
    };
    hs_a102225uXx5.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeekElemOff1625uXx6.evaluateOnce = function () {
        if (hs_a102225uXx5.notEvaluated) {
            return hs_a102225uXx5.hscall();
        } else {
            return hs_a102225uXx5;
        }
    };
    hs_a102325uXx7.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpokeElemOff1625uXx8.evaluateOnce = function () {
        if (hs_a102325uXx7.notEvaluated) {
            return hs_a102325uXx7.hscall();
        } else {
            return hs_a102325uXx7;
        }
    };
    hs_a102425uXx9.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeekByteOff1625uXxa.evaluateOnce = function () {
        if (hs_a102425uXx9.notEvaluated) {
            return hs_a102425uXx9.hscall();
        } else {
            return hs_a102425uXx9;
        }
    };
    hs_a102525uXxb.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpokeByteOff1625uXxc.evaluateOnce = function () {
        if (hs_a102525uXxb.notEvaluated) {
            return hs_a102525uXxb.hscall();
        } else {
            return hs_a102525uXxb;
        }
    };
    hs_a102625uXxd.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeek1625uXxe.evaluateOnce = function () {
        if (hs_a102625uXxd.notEvaluated) {
            return hs_a102625uXxd.hscall();
        } else {
            return hs_a102625uXxd;
        }
    };
    hs_a102725uXxf.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpoke1625uXxg.evaluateOnce = function () {
        if (hs_a102725uXxf.notEvaluated) {
            return hs_a102725uXxf.hscall();
        } else {
            return hs_a102725uXxf;
        }
    };
    this.hs_zdfStorableCULong.data = [hs_a102025uXx1, hs_a102125uXx3, hs_a102225uXx5, hs_a102325uXx7, hs_a102425uXx9, hs_a102525uXxb, hs_a102625uXxd, hs_a102725uXxf];
    hs_a102825uXxh.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcsucc1625uXxi.evaluateOnce = function () {
        if (hs_a102825uXxh.notEvaluated) {
            return hs_a102825uXxh.hscall();
        } else {
            return hs_a102825uXxh;
        }
    };
    hs_a102925uXxj.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcpred1625uXxk.evaluateOnce = function () {
        if (hs_a102925uXxj.notEvaluated) {
            return hs_a102925uXxj.hscall();
        } else {
            return hs_a102925uXxj;
        }
    };
    hs_a103025uXxl.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdctoEnum1625uXxm.evaluateOnce = function () {
        if (hs_a103025uXxl.notEvaluated) {
            return hs_a103025uXxl.hscall();
        } else {
            return hs_a103025uXxl;
        }
    };
    hs_a103125uXxn.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcfromEnum1625uXxo.evaluateOnce = function () {
        if (hs_a103125uXxn.notEvaluated) {
            return hs_a103125uXxn.hscall();
        } else {
            return hs_a103125uXxn;
        }
    };
    hs_a103225uXxp.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFrom1625uXxq.evaluateOnce = function () {
        if (hs_a103225uXxp.notEvaluated) {
            return hs_a103225uXxp.hscall();
        } else {
            return hs_a103225uXxp;
        }
    };
    hs_a103325uXxr.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromThen1625uXxs.evaluateOnce = function () {
        if (hs_a103325uXxr.notEvaluated) {
            return hs_a103325uXxr.hscall();
        } else {
            return hs_a103325uXxr;
        }
    };
    hs_a103425uXxt.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromTo1625uXxu.evaluateOnce = function () {
        if (hs_a103425uXxt.notEvaluated) {
            return hs_a103425uXxt.hscall();
        } else {
            return hs_a103425uXxt;
        }
    };
    hs_a103525uXxv.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromThenTo1625uXxw.evaluateOnce = function () {
        if (hs_a103525uXxv.notEvaluated) {
            return hs_a103525uXxv.hscall();
        } else {
            return hs_a103525uXxv;
        }
    };
    this.hs_zdfEnumCULong.data = [hs_a102825uXxh, hs_a102925uXxj, hs_a103025uXxl, hs_a103125uXxn, hs_a103225uXxp, hs_a103325uXxr, hs_a103425uXxt, hs_a103525uXxv];
    hs_a103625uXxx.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczp1625uXxy.evaluateOnce = function () {
        if (hs_a103625uXxx.notEvaluated) {
            return hs_a103625uXxx.hscall();
        } else {
            return hs_a103625uXxx;
        }
    };
    hs_a103725uXxz.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczt1625uXxA.evaluateOnce = function () {
        if (hs_a103725uXxz.notEvaluated) {
            return hs_a103725uXxz.hscall();
        } else {
            return hs_a103725uXxz;
        }
    };
    hs_a103825uXxB.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczm1625uXxC.evaluateOnce = function () {
        if (hs_a103825uXxB.notEvaluated) {
            return hs_a103825uXxB.hscall();
        } else {
            return hs_a103825uXxB;
        }
    };
    hs_a103925uXxD.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcnegate1625uXxE.evaluateOnce = function () {
        if (hs_a103925uXxD.notEvaluated) {
            return hs_a103925uXxD.hscall();
        } else {
            return hs_a103925uXxD;
        }
    };
    hs_a104025uXxF.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcabs1625uXxG.evaluateOnce = function () {
        if (hs_a104025uXxF.notEvaluated) {
            return hs_a104025uXxF.hscall();
        } else {
            return hs_a104025uXxF;
        }
    };
    hs_a104125uXxH.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcsignum1625uXxI.evaluateOnce = function () {
        if (hs_a104125uXxH.notEvaluated) {
            return hs_a104125uXxH.hscall();
        } else {
            return hs_a104125uXxH;
        }
    };
    hs_a104225uXxJ.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcfromInteger1625uXxK.evaluateOnce = function () {
        if (hs_a104225uXxJ.notEvaluated) {
            return hs_a104225uXxJ.hscall();
        } else {
            return hs_a104225uXxJ;
        }
    };
    hs_a104325uXxL.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdccompare1625uXxM.evaluateOnce = function () {
        if (hs_a104325uXxL.notEvaluated) {
            return hs_a104325uXxL.hscall();
        } else {
            return hs_a104325uXxL;
        }
    };
    hs_a104425uXxN.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczl1625uXxO.evaluateOnce = function () {
        if (hs_a104425uXxN.notEvaluated) {
            return hs_a104425uXxN.hscall();
        } else {
            return hs_a104425uXxN;
        }
    };
    hs_a104525uXxP.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczgze1625uXxQ.evaluateOnce = function () {
        if (hs_a104525uXxP.notEvaluated) {
            return hs_a104525uXxP.hscall();
        } else {
            return hs_a104525uXxP;
        }
    };
    hs_a104625uXxR.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczg1625uXxS.evaluateOnce = function () {
        if (hs_a104625uXxR.notEvaluated) {
            return hs_a104625uXxR.hscall();
        } else {
            return hs_a104625uXxR;
        }
    };
    hs_a104725uXxT.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczlze1625uXxU.evaluateOnce = function () {
        if (hs_a104725uXxT.notEvaluated) {
            return hs_a104725uXxT.hscall();
        } else {
            return hs_a104725uXxT;
        }
    };
    hs_a104825uXxV.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcmax1625uXxW.evaluateOnce = function () {
        if (hs_a104825uXxV.notEvaluated) {
            return hs_a104825uXxV.hscall();
        } else {
            return hs_a104825uXxV;
        }
    };
    hs_a104925uXxX.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcmin1625uXxY.evaluateOnce = function () {
        if (hs_a104925uXxX.notEvaluated) {
            return hs_a104925uXxX.hscall();
        } else {
            return hs_a104925uXxX;
        }
    };
    hs_a105025uXxZ.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczeze1625uXy0.evaluateOnce = function () {
        if (hs_a105025uXxZ.notEvaluated) {
            return hs_a105025uXxZ.hscall();
        } else {
            return hs_a105025uXxZ;
        }
    };
    hs_a105125uXy1.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczsze1625uXy2.evaluateOnce = function () {
        if (hs_a105125uXy1.notEvaluated) {
            return hs_a105125uXy1.hscall();
        } else {
            return hs_a105125uXy1;
        }
    };
    this.hs_zdfEqCULong.data = [hs_a105025uXxZ, hs_a105125uXy1];
    this.hs_zdfOrdCULong.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCULong, hs_a104325uXxL, hs_a104425uXxN, hs_a104525uXxP, hs_a104625uXxR, hs_a104725uXxT, hs_a104825uXxV, hs_a104925uXxX];
    this.hs_zdfNumCULong.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCULong, $hs.modules.ForeignziCziTypes.hs_zdfShowCULong, hs_a103625uXxx, hs_a103725uXxz, hs_a103825uXxB, hs_a103925uXxD, hs_a104025uXxF, hs_a104125uXxH, hs_a104225uXxJ];
    this.hs_zdfRealCULong.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCULong, $hs.modules.ForeignziCziTypes.hs_zdfOrdCULong, hs_a101925uXwZ];
    this.hs_zdfIntegralCULong.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealCULong, $hs.modules.ForeignziCziTypes.hs_zdfEnumCULong, hs_a101025uXwH, hs_a101125uXwJ, hs_a101225uXwL, hs_a101325uXwN, hs_a101425uXwP, hs_a101525uXwR, hs_a101625uXwT];
    this.hs_zdfBitsCULong.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCULong, hs_a99325uXw9, hs_a99425uXwb, hs_a99525uXwd, hs_a99625uXwf, hs_a99725uXwh, hs_a99825uXwj, hs_a99925uXwl, hs_a100025uXwn, hs_a100125uXwp, hs_a100225uXwr, hs_a100325uXwt, hs_a100425uXwv, hs_a100525uXwx, hs_a100625uXwz, hs_a100725uXwB, hs_a100825uXwD, hs_a100925uXwF];
    hs_a105225uXy3.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdczizazi1125uXy4.evaluateOnce = function () {
        if (hs_a105225uXy3.notEvaluated) {
            return hs_a105225uXy3.hscall();
        } else {
            return hs_a105225uXy3;
        }
    };
    hs_a105325uXy5.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdczizbzi1125uXy6.evaluateOnce = function () {
        if (hs_a105325uXy5.notEvaluated) {
            return hs_a105325uXy5.hscall();
        } else {
            return hs_a105325uXy5;
        }
    };
    hs_a105425uXy7.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcxor1125uXy8.evaluateOnce = function () {
        if (hs_a105425uXy7.notEvaluated) {
            return hs_a105425uXy7.hscall();
        } else {
            return hs_a105425uXy7;
        }
    };
    hs_a105525uXy9.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdccomplement1125uXya.evaluateOnce = function () {
        if (hs_a105525uXy9.notEvaluated) {
            return hs_a105525uXy9.hscall();
        } else {
            return hs_a105525uXy9;
        }
    };
    hs_a105625uXyb.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshift1125uXyc.evaluateOnce = function () {
        if (hs_a105625uXyb.notEvaluated) {
            return hs_a105625uXyb.hscall();
        } else {
            return hs_a105625uXyb;
        }
    };
    hs_a105725uXyd.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotate1125uXye.evaluateOnce = function () {
        if (hs_a105725uXyd.notEvaluated) {
            return hs_a105725uXyd.hscall();
        } else {
            return hs_a105725uXyd;
        }
    };
    hs_a105825uXyf.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcbit1125uXyg.evaluateOnce = function () {
        if (hs_a105825uXyf.notEvaluated) {
            return hs_a105825uXyf.hscall();
        } else {
            return hs_a105825uXyf;
        }
    };
    hs_a105925uXyh.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcsetBit1125uXyi.evaluateOnce = function () {
        if (hs_a105925uXyh.notEvaluated) {
            return hs_a105925uXyh.hscall();
        } else {
            return hs_a105925uXyh;
        }
    };
    hs_a106025uXyj.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcclearBit1125uXyk.evaluateOnce = function () {
        if (hs_a106025uXyj.notEvaluated) {
            return hs_a106025uXyj.hscall();
        } else {
            return hs_a106025uXyj;
        }
    };
    hs_a106125uXyl.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdccomplementBit1125uXym.evaluateOnce = function () {
        if (hs_a106125uXyl.notEvaluated) {
            return hs_a106125uXyl.hscall();
        } else {
            return hs_a106125uXyl;
        }
    };
    hs_a106225uXyn.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdctestBit1125uXyo.evaluateOnce = function () {
        if (hs_a106225uXyn.notEvaluated) {
            return hs_a106225uXyn.hscall();
        } else {
            return hs_a106225uXyn;
        }
    };
    hs_a106325uXyp.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcbitSizze1125uXyq.evaluateOnce = function () {
        if (hs_a106325uXyp.notEvaluated) {
            return hs_a106325uXyp.hscall();
        } else {
            return hs_a106325uXyp;
        }
    };
    hs_a106425uXyr.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcisSigned1125uXys.evaluateOnce = function () {
        if (hs_a106425uXyr.notEvaluated) {
            return hs_a106425uXyr.hscall();
        } else {
            return hs_a106425uXyr;
        }
    };
    hs_a106525uXyt.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshiftL1125uXyu.evaluateOnce = function () {
        if (hs_a106525uXyt.notEvaluated) {
            return hs_a106525uXyt.hscall();
        } else {
            return hs_a106525uXyt;
        }
    };
    hs_a106625uXyv.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshiftR1125uXyw.evaluateOnce = function () {
        if (hs_a106625uXyv.notEvaluated) {
            return hs_a106625uXyv.hscall();
        } else {
            return hs_a106625uXyv;
        }
    };
    hs_a106725uXyx.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotateL1125uXyy.evaluateOnce = function () {
        if (hs_a106725uXyx.notEvaluated) {
            return hs_a106725uXyx.hscall();
        } else {
            return hs_a106725uXyx;
        }
    };
    hs_a106825uXyz.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotateR1125uXyA.evaluateOnce = function () {
        if (hs_a106825uXyz.notEvaluated) {
            return hs_a106825uXyz.hscall();
        } else {
            return hs_a106825uXyz;
        }
    };
    hs_a106925uXyB.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcquot1125uXyC.evaluateOnce = function () {
        if (hs_a106925uXyB.notEvaluated) {
            return hs_a106925uXyB.hscall();
        } else {
            return hs_a106925uXyB;
        }
    };
    hs_a107025uXyD.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcrem1125uXyE.evaluateOnce = function () {
        if (hs_a107025uXyD.notEvaluated) {
            return hs_a107025uXyD.hscall();
        } else {
            return hs_a107025uXyD;
        }
    };
    hs_a107125uXyF.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcdiv1125uXyG.evaluateOnce = function () {
        if (hs_a107125uXyF.notEvaluated) {
            return hs_a107125uXyF.hscall();
        } else {
            return hs_a107125uXyF;
        }
    };
    hs_a107225uXyH.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcmod1125uXyI.evaluateOnce = function () {
        if (hs_a107225uXyH.notEvaluated) {
            return hs_a107225uXyH.hscall();
        } else {
            return hs_a107225uXyH;
        }
    };
    hs_a107325uXyJ.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcquotRem1125uXyK.evaluateOnce = function () {
        if (hs_a107325uXyJ.notEvaluated) {
            return hs_a107325uXyJ.hscall();
        } else {
            return hs_a107325uXyJ;
        }
    };
    hs_a107425uXyL.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcdivMod1125uXyM.evaluateOnce = function () {
        if (hs_a107425uXyL.notEvaluated) {
            return hs_a107425uXyL.hscall();
        } else {
            return hs_a107425uXyL;
        }
    };
    hs_a107525uXyN.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdctoInteger1125uXyO.evaluateOnce = function () {
        if (hs_a107525uXyN.notEvaluated) {
            return hs_a107525uXyN.hscall();
        } else {
            return hs_a107525uXyN;
        }
    };
    hs_a107625uXyP.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt32);
    };
    hs_zdcminBound1125uXyQ.evaluateOnce = function () {
        if (hs_a107625uXyP.notEvaluated) {
            return hs_a107625uXyP.hscall();
        } else {
            return hs_a107625uXyP;
        }
    };
    hs_a107725uXyR.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt32);
    };
    hs_zdcmaxBound1125uXyS.evaluateOnce = function () {
        if (hs_a107725uXyR.notEvaluated) {
            return hs_a107725uXyR.hscall();
        } else {
            return hs_a107725uXyR;
        }
    };
    this.hs_zdfBoundedCLong.data = [hs_a107625uXyP, hs_a107725uXyR];
    hs_a107825uXyT.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziInt.hs_zdfRealInt32);
    };
    hs_zdctoRational1725uXyU.evaluateOnce = function () {
        if (hs_a107825uXyT.notEvaluated) {
            return hs_a107825uXyT.hscall();
        } else {
            return hs_a107825uXyT;
        }
    };
    hs_a107925uXyV.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcsizzeOf1725uXyW.evaluateOnce = function () {
        if (hs_a107925uXyV.notEvaluated) {
            return hs_a107925uXyV.hscall();
        } else {
            return hs_a107925uXyV;
        }
    };
    hs_a108025uXyX.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcalignment1725uXyY.evaluateOnce = function () {
        if (hs_a108025uXyX.notEvaluated) {
            return hs_a108025uXyX.hscall();
        } else {
            return hs_a108025uXyX;
        }
    };
    hs_a108125uXyZ.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeekElemOff1725uXz0.evaluateOnce = function () {
        if (hs_a108125uXyZ.notEvaluated) {
            return hs_a108125uXyZ.hscall();
        } else {
            return hs_a108125uXyZ;
        }
    };
    hs_a108225uXz1.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpokeElemOff1725uXz2.evaluateOnce = function () {
        if (hs_a108225uXz1.notEvaluated) {
            return hs_a108225uXz1.hscall();
        } else {
            return hs_a108225uXz1;
        }
    };
    hs_a108325uXz3.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeekByteOff1725uXz4.evaluateOnce = function () {
        if (hs_a108325uXz3.notEvaluated) {
            return hs_a108325uXz3.hscall();
        } else {
            return hs_a108325uXz3;
        }
    };
    hs_a108425uXz5.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpokeByteOff1725uXz6.evaluateOnce = function () {
        if (hs_a108425uXz5.notEvaluated) {
            return hs_a108425uXz5.hscall();
        } else {
            return hs_a108425uXz5;
        }
    };
    hs_a108525uXz7.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeek1725uXz8.evaluateOnce = function () {
        if (hs_a108525uXz7.notEvaluated) {
            return hs_a108525uXz7.hscall();
        } else {
            return hs_a108525uXz7;
        }
    };
    hs_a108625uXz9.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpoke1725uXza.evaluateOnce = function () {
        if (hs_a108625uXz9.notEvaluated) {
            return hs_a108625uXz9.hscall();
        } else {
            return hs_a108625uXz9;
        }
    };
    this.hs_zdfStorableCLong.data = [hs_a107925uXyV, hs_a108025uXyX, hs_a108125uXyZ, hs_a108225uXz1, hs_a108325uXz3, hs_a108425uXz5, hs_a108525uXz7, hs_a108625uXz9];
    hs_a108725uXzb.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcsucc1725uXzc.evaluateOnce = function () {
        if (hs_a108725uXzb.notEvaluated) {
            return hs_a108725uXzb.hscall();
        } else {
            return hs_a108725uXzb;
        }
    };
    hs_a108825uXzd.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcpred1725uXze.evaluateOnce = function () {
        if (hs_a108825uXzd.notEvaluated) {
            return hs_a108825uXzd.hscall();
        } else {
            return hs_a108825uXzd;
        }
    };
    hs_a108925uXzf.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdctoEnum1725uXzg.evaluateOnce = function () {
        if (hs_a108925uXzf.notEvaluated) {
            return hs_a108925uXzf.hscall();
        } else {
            return hs_a108925uXzf;
        }
    };
    hs_a109025uXzh.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcfromEnum1725uXzi.evaluateOnce = function () {
        if (hs_a109025uXzh.notEvaluated) {
            return hs_a109025uXzh.hscall();
        } else {
            return hs_a109025uXzh;
        }
    };
    hs_a109125uXzj.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFrom1725uXzk.evaluateOnce = function () {
        if (hs_a109125uXzj.notEvaluated) {
            return hs_a109125uXzj.hscall();
        } else {
            return hs_a109125uXzj;
        }
    };
    hs_a109225uXzl.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromThen1725uXzm.evaluateOnce = function () {
        if (hs_a109225uXzl.notEvaluated) {
            return hs_a109225uXzl.hscall();
        } else {
            return hs_a109225uXzl;
        }
    };
    hs_a109325uXzn.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromTo1725uXzo.evaluateOnce = function () {
        if (hs_a109325uXzn.notEvaluated) {
            return hs_a109325uXzn.hscall();
        } else {
            return hs_a109325uXzn;
        }
    };
    hs_a109425uXzp.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromThenTo1725uXzq.evaluateOnce = function () {
        if (hs_a109425uXzp.notEvaluated) {
            return hs_a109425uXzp.hscall();
        } else {
            return hs_a109425uXzp;
        }
    };
    this.hs_zdfEnumCLong.data = [hs_a108725uXzb, hs_a108825uXzd, hs_a108925uXzf, hs_a109025uXzh, hs_a109125uXzj, hs_a109225uXzl, hs_a109325uXzn, hs_a109425uXzp];
    hs_a109525uXzr.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczp1725uXzs.evaluateOnce = function () {
        if (hs_a109525uXzr.notEvaluated) {
            return hs_a109525uXzr.hscall();
        } else {
            return hs_a109525uXzr;
        }
    };
    hs_a109625uXzt.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczt1725uXzu.evaluateOnce = function () {
        if (hs_a109625uXzt.notEvaluated) {
            return hs_a109625uXzt.hscall();
        } else {
            return hs_a109625uXzt;
        }
    };
    hs_a109725uXzv.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczm1725uXzw.evaluateOnce = function () {
        if (hs_a109725uXzv.notEvaluated) {
            return hs_a109725uXzv.hscall();
        } else {
            return hs_a109725uXzv;
        }
    };
    hs_a109825uXzx.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcnegate1725uXzy.evaluateOnce = function () {
        if (hs_a109825uXzx.notEvaluated) {
            return hs_a109825uXzx.hscall();
        } else {
            return hs_a109825uXzx;
        }
    };
    hs_a109925uXzz.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcabs1725uXzA.evaluateOnce = function () {
        if (hs_a109925uXzz.notEvaluated) {
            return hs_a109925uXzz.hscall();
        } else {
            return hs_a109925uXzz;
        }
    };
    hs_a110025uXzB.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcsignum1725uXzC.evaluateOnce = function () {
        if (hs_a110025uXzB.notEvaluated) {
            return hs_a110025uXzB.hscall();
        } else {
            return hs_a110025uXzB;
        }
    };
    hs_a110125uXzD.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcfromInteger1725uXzE.evaluateOnce = function () {
        if (hs_a110125uXzD.notEvaluated) {
            return hs_a110125uXzD.hscall();
        } else {
            return hs_a110125uXzD;
        }
    };
    hs_a110225uXzF.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdccompare1725uXzG.evaluateOnce = function () {
        if (hs_a110225uXzF.notEvaluated) {
            return hs_a110225uXzF.hscall();
        } else {
            return hs_a110225uXzF;
        }
    };
    hs_a110325uXzH.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczl1725uXzI.evaluateOnce = function () {
        if (hs_a110325uXzH.notEvaluated) {
            return hs_a110325uXzH.hscall();
        } else {
            return hs_a110325uXzH;
        }
    };
    hs_a110425uXzJ.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczgze1725uXzK.evaluateOnce = function () {
        if (hs_a110425uXzJ.notEvaluated) {
            return hs_a110425uXzJ.hscall();
        } else {
            return hs_a110425uXzJ;
        }
    };
    hs_a110525uXzL.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczg1725uXzM.evaluateOnce = function () {
        if (hs_a110525uXzL.notEvaluated) {
            return hs_a110525uXzL.hscall();
        } else {
            return hs_a110525uXzL;
        }
    };
    hs_a110625uXzN.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczlze1725uXzO.evaluateOnce = function () {
        if (hs_a110625uXzN.notEvaluated) {
            return hs_a110625uXzN.hscall();
        } else {
            return hs_a110625uXzN;
        }
    };
    hs_a110725uXzP.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdcmax1725uXzQ.evaluateOnce = function () {
        if (hs_a110725uXzP.notEvaluated) {
            return hs_a110725uXzP.hscall();
        } else {
            return hs_a110725uXzP;
        }
    };
    hs_a110825uXzR.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdcmin1725uXzS.evaluateOnce = function () {
        if (hs_a110825uXzR.notEvaluated) {
            return hs_a110825uXzR.hscall();
        } else {
            return hs_a110825uXzR;
        }
    };
    hs_a110925uXzT.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32);
    };
    hs_zdczeze1725uXzU.evaluateOnce = function () {
        if (hs_a110925uXzT.notEvaluated) {
            return hs_a110925uXzT.hscall();
        } else {
            return hs_a110925uXzT;
        }
    };
    hs_a111025uXzV.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32);
    };
    hs_zdczsze1725uXzW.evaluateOnce = function () {
        if (hs_a111025uXzV.notEvaluated) {
            return hs_a111025uXzV.hscall();
        } else {
            return hs_a111025uXzV;
        }
    };
    this.hs_zdfEqCLong.data = [hs_a110925uXzT, hs_a111025uXzV];
    this.hs_zdfOrdCLong.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCLong, hs_a110225uXzF, hs_a110325uXzH, hs_a110425uXzJ, hs_a110525uXzL, hs_a110625uXzN, hs_a110725uXzP, hs_a110825uXzR];
    this.hs_zdfNumCLong.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCLong, $hs.modules.ForeignziCziTypes.hs_zdfShowCLong, hs_a109525uXzr, hs_a109625uXzt, hs_a109725uXzv, hs_a109825uXzx, hs_a109925uXzz, hs_a110025uXzB, hs_a110125uXzD];
    this.hs_zdfRealCLong.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCLong, $hs.modules.ForeignziCziTypes.hs_zdfOrdCLong, hs_a107825uXyT];
    this.hs_zdfIntegralCLong.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealCLong, $hs.modules.ForeignziCziTypes.hs_zdfEnumCLong, hs_a106925uXyB, hs_a107025uXyD, hs_a107125uXyF, hs_a107225uXyH, hs_a107325uXyJ, hs_a107425uXyL, hs_a107525uXyN];
    this.hs_zdfBitsCLong.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCLong, hs_a105225uXy3, hs_a105325uXy5, hs_a105425uXy7, hs_a105525uXy9, hs_a105625uXyb, hs_a105725uXyd, hs_a105825uXyf, hs_a105925uXyh, hs_a106025uXyj, hs_a106125uXyl, hs_a106225uXyn, hs_a106325uXyp, hs_a106425uXyr, hs_a106525uXyt, hs_a106625uXyv, hs_a106725uXyx, hs_a106825uXyz];
    hs_a111125uXzX.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdczizazi1225uXzY.evaluateOnce = function () {
        if (hs_a111125uXzX.notEvaluated) {
            return hs_a111125uXzX.hscall();
        } else {
            return hs_a111125uXzX;
        }
    };
    hs_a111225uXzZ.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdczizbzi1225uXA0.evaluateOnce = function () {
        if (hs_a111225uXzZ.notEvaluated) {
            return hs_a111225uXzZ.hscall();
        } else {
            return hs_a111225uXzZ;
        }
    };
    hs_a111325uXA1.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcxor1225uXA2.evaluateOnce = function () {
        if (hs_a111325uXA1.notEvaluated) {
            return hs_a111325uXA1.hscall();
        } else {
            return hs_a111325uXA1;
        }
    };
    hs_a111425uXA3.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdccomplement1225uXA4.evaluateOnce = function () {
        if (hs_a111425uXA3.notEvaluated) {
            return hs_a111425uXA3.hscall();
        } else {
            return hs_a111425uXA3;
        }
    };
    hs_a111525uXA5.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshift1225uXA6.evaluateOnce = function () {
        if (hs_a111525uXA5.notEvaluated) {
            return hs_a111525uXA5.hscall();
        } else {
            return hs_a111525uXA5;
        }
    };
    hs_a111625uXA7.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotate1225uXA8.evaluateOnce = function () {
        if (hs_a111625uXA7.notEvaluated) {
            return hs_a111625uXA7.hscall();
        } else {
            return hs_a111625uXA7;
        }
    };
    hs_a111725uXA9.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcbit1225uXAa.evaluateOnce = function () {
        if (hs_a111725uXA9.notEvaluated) {
            return hs_a111725uXA9.hscall();
        } else {
            return hs_a111725uXA9;
        }
    };
    hs_a111825uXAb.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcsetBit1225uXAc.evaluateOnce = function () {
        if (hs_a111825uXAb.notEvaluated) {
            return hs_a111825uXAb.hscall();
        } else {
            return hs_a111825uXAb;
        }
    };
    hs_a111925uXAd.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcclearBit1225uXAe.evaluateOnce = function () {
        if (hs_a111925uXAd.notEvaluated) {
            return hs_a111925uXAd.hscall();
        } else {
            return hs_a111925uXAd;
        }
    };
    hs_a112025uXAf.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdccomplementBit1225uXAg.evaluateOnce = function () {
        if (hs_a112025uXAf.notEvaluated) {
            return hs_a112025uXAf.hscall();
        } else {
            return hs_a112025uXAf;
        }
    };
    hs_a112125uXAh.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdctestBit1225uXAi.evaluateOnce = function () {
        if (hs_a112125uXAh.notEvaluated) {
            return hs_a112125uXAh.hscall();
        } else {
            return hs_a112125uXAh;
        }
    };
    hs_a112225uXAj.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcbitSizze1225uXAk.evaluateOnce = function () {
        if (hs_a112225uXAj.notEvaluated) {
            return hs_a112225uXAj.hscall();
        } else {
            return hs_a112225uXAj;
        }
    };
    hs_a112325uXAl.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcisSigned1225uXAm.evaluateOnce = function () {
        if (hs_a112325uXAl.notEvaluated) {
            return hs_a112325uXAl.hscall();
        } else {
            return hs_a112325uXAl;
        }
    };
    hs_a112425uXAn.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshiftL1225uXAo.evaluateOnce = function () {
        if (hs_a112425uXAn.notEvaluated) {
            return hs_a112425uXAn.hscall();
        } else {
            return hs_a112425uXAn;
        }
    };
    hs_a112525uXAp.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshiftR1225uXAq.evaluateOnce = function () {
        if (hs_a112525uXAp.notEvaluated) {
            return hs_a112525uXAp.hscall();
        } else {
            return hs_a112525uXAp;
        }
    };
    hs_a112625uXAr.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotateL1225uXAs.evaluateOnce = function () {
        if (hs_a112625uXAr.notEvaluated) {
            return hs_a112625uXAr.hscall();
        } else {
            return hs_a112625uXAr;
        }
    };
    hs_a112725uXAt.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotateR1225uXAu.evaluateOnce = function () {
        if (hs_a112725uXAt.notEvaluated) {
            return hs_a112725uXAt.hscall();
        } else {
            return hs_a112725uXAt;
        }
    };
    hs_a112825uXAv.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcquot1225uXAw.evaluateOnce = function () {
        if (hs_a112825uXAv.notEvaluated) {
            return hs_a112825uXAv.hscall();
        } else {
            return hs_a112825uXAv;
        }
    };
    hs_a112925uXAx.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcrem1225uXAy.evaluateOnce = function () {
        if (hs_a112925uXAx.notEvaluated) {
            return hs_a112925uXAx.hscall();
        } else {
            return hs_a112925uXAx;
        }
    };
    hs_a113025uXAz.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcdiv1225uXAA.evaluateOnce = function () {
        if (hs_a113025uXAz.notEvaluated) {
            return hs_a113025uXAz.hscall();
        } else {
            return hs_a113025uXAz;
        }
    };
    hs_a113125uXAB.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcmod1225uXAC.evaluateOnce = function () {
        if (hs_a113125uXAB.notEvaluated) {
            return hs_a113125uXAB.hscall();
        } else {
            return hs_a113125uXAB;
        }
    };
    hs_a113225uXAD.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcquotRem1225uXAE.evaluateOnce = function () {
        if (hs_a113225uXAD.notEvaluated) {
            return hs_a113225uXAD.hscall();
        } else {
            return hs_a113225uXAD;
        }
    };
    hs_a113325uXAF.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcdivMod1225uXAG.evaluateOnce = function () {
        if (hs_a113325uXAF.notEvaluated) {
            return hs_a113325uXAF.hscall();
        } else {
            return hs_a113325uXAF;
        }
    };
    hs_a113425uXAH.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdctoInteger1225uXAI.evaluateOnce = function () {
        if (hs_a113425uXAH.notEvaluated) {
            return hs_a113425uXAH.hscall();
        } else {
            return hs_a113425uXAH;
        }
    };
    hs_a113525uXAJ.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
    };
    hs_zdcminBound1225uXAK.evaluateOnce = function () {
        if (hs_a113525uXAJ.notEvaluated) {
            return hs_a113525uXAJ.hscall();
        } else {
            return hs_a113525uXAJ;
        }
    };
    hs_a113625uXAL.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
    };
    hs_zdcmaxBound1225uXAM.evaluateOnce = function () {
        if (hs_a113625uXAL.notEvaluated) {
            return hs_a113625uXAL.hscall();
        } else {
            return hs_a113625uXAL;
        }
    };
    this.hs_zdfBoundedCUInt.data = [hs_a113525uXAJ, hs_a113625uXAL];
    hs_a113725uXAN.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziWord.hs_zdfRealWord32);
    };
    hs_zdctoRational1825uXAO.evaluateOnce = function () {
        if (hs_a113725uXAN.notEvaluated) {
            return hs_a113725uXAN.hscall();
        } else {
            return hs_a113725uXAN;
        }
    };
    hs_a113825uXAP.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcsizzeOf1825uXAQ.evaluateOnce = function () {
        if (hs_a113825uXAP.notEvaluated) {
            return hs_a113825uXAP.hscall();
        } else {
            return hs_a113825uXAP;
        }
    };
    hs_a113925uXAR.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcalignment1825uXAS.evaluateOnce = function () {
        if (hs_a113925uXAR.notEvaluated) {
            return hs_a113925uXAR.hscall();
        } else {
            return hs_a113925uXAR;
        }
    };
    hs_a114025uXAT.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeekElemOff1825uXAU.evaluateOnce = function () {
        if (hs_a114025uXAT.notEvaluated) {
            return hs_a114025uXAT.hscall();
        } else {
            return hs_a114025uXAT;
        }
    };
    hs_a114125uXAV.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpokeElemOff1825uXAW.evaluateOnce = function () {
        if (hs_a114125uXAV.notEvaluated) {
            return hs_a114125uXAV.hscall();
        } else {
            return hs_a114125uXAV;
        }
    };
    hs_a114225uXAX.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeekByteOff1825uXAY.evaluateOnce = function () {
        if (hs_a114225uXAX.notEvaluated) {
            return hs_a114225uXAX.hscall();
        } else {
            return hs_a114225uXAX;
        }
    };
    hs_a114325uXAZ.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpokeByteOff1825uXB0.evaluateOnce = function () {
        if (hs_a114325uXAZ.notEvaluated) {
            return hs_a114325uXAZ.hscall();
        } else {
            return hs_a114325uXAZ;
        }
    };
    hs_a114425uXB1.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeek1825uXB2.evaluateOnce = function () {
        if (hs_a114425uXB1.notEvaluated) {
            return hs_a114425uXB1.hscall();
        } else {
            return hs_a114425uXB1;
        }
    };
    hs_a114525uXB3.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpoke1825uXB4.evaluateOnce = function () {
        if (hs_a114525uXB3.notEvaluated) {
            return hs_a114525uXB3.hscall();
        } else {
            return hs_a114525uXB3;
        }
    };
    this.hs_zdfStorableCUInt.data = [hs_a113825uXAP, hs_a113925uXAR, hs_a114025uXAT, hs_a114125uXAV, hs_a114225uXAX, hs_a114325uXAZ, hs_a114425uXB1, hs_a114525uXB3];
    hs_a114625uXB5.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcsucc1825uXB6.evaluateOnce = function () {
        if (hs_a114625uXB5.notEvaluated) {
            return hs_a114625uXB5.hscall();
        } else {
            return hs_a114625uXB5;
        }
    };
    hs_a114725uXB7.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcpred1825uXB8.evaluateOnce = function () {
        if (hs_a114725uXB7.notEvaluated) {
            return hs_a114725uXB7.hscall();
        } else {
            return hs_a114725uXB7;
        }
    };
    hs_a114825uXB9.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdctoEnum1825uXBa.evaluateOnce = function () {
        if (hs_a114825uXB9.notEvaluated) {
            return hs_a114825uXB9.hscall();
        } else {
            return hs_a114825uXB9;
        }
    };
    hs_a114925uXBb.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcfromEnum1825uXBc.evaluateOnce = function () {
        if (hs_a114925uXBb.notEvaluated) {
            return hs_a114925uXBb.hscall();
        } else {
            return hs_a114925uXBb;
        }
    };
    hs_a115025uXBd.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFrom1825uXBe.evaluateOnce = function () {
        if (hs_a115025uXBd.notEvaluated) {
            return hs_a115025uXBd.hscall();
        } else {
            return hs_a115025uXBd;
        }
    };
    hs_a115125uXBf.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromThen1825uXBg.evaluateOnce = function () {
        if (hs_a115125uXBf.notEvaluated) {
            return hs_a115125uXBf.hscall();
        } else {
            return hs_a115125uXBf;
        }
    };
    hs_a115225uXBh.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromTo1825uXBi.evaluateOnce = function () {
        if (hs_a115225uXBh.notEvaluated) {
            return hs_a115225uXBh.hscall();
        } else {
            return hs_a115225uXBh;
        }
    };
    hs_a115325uXBj.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromThenTo1825uXBk.evaluateOnce = function () {
        if (hs_a115325uXBj.notEvaluated) {
            return hs_a115325uXBj.hscall();
        } else {
            return hs_a115325uXBj;
        }
    };
    this.hs_zdfEnumCUInt.data = [hs_a114625uXB5, hs_a114725uXB7, hs_a114825uXB9, hs_a114925uXBb, hs_a115025uXBd, hs_a115125uXBf, hs_a115225uXBh, hs_a115325uXBj];
    hs_a115425uXBl.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczp1825uXBm.evaluateOnce = function () {
        if (hs_a115425uXBl.notEvaluated) {
            return hs_a115425uXBl.hscall();
        } else {
            return hs_a115425uXBl;
        }
    };
    hs_a115525uXBn.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczt1825uXBo.evaluateOnce = function () {
        if (hs_a115525uXBn.notEvaluated) {
            return hs_a115525uXBn.hscall();
        } else {
            return hs_a115525uXBn;
        }
    };
    hs_a115625uXBp.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczm1825uXBq.evaluateOnce = function () {
        if (hs_a115625uXBp.notEvaluated) {
            return hs_a115625uXBp.hscall();
        } else {
            return hs_a115625uXBp;
        }
    };
    hs_a115725uXBr.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcnegate1825uXBs.evaluateOnce = function () {
        if (hs_a115725uXBr.notEvaluated) {
            return hs_a115725uXBr.hscall();
        } else {
            return hs_a115725uXBr;
        }
    };
    hs_a115825uXBt.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcabs1825uXBu.evaluateOnce = function () {
        if (hs_a115825uXBt.notEvaluated) {
            return hs_a115825uXBt.hscall();
        } else {
            return hs_a115825uXBt;
        }
    };
    hs_a115925uXBv.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcsignum1825uXBw.evaluateOnce = function () {
        if (hs_a115925uXBv.notEvaluated) {
            return hs_a115925uXBv.hscall();
        } else {
            return hs_a115925uXBv;
        }
    };
    hs_a116025uXBx.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcfromInteger1825uXBy.evaluateOnce = function () {
        if (hs_a116025uXBx.notEvaluated) {
            return hs_a116025uXBx.hscall();
        } else {
            return hs_a116025uXBx;
        }
    };
    hs_a116125uXBz.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdccompare1825uXBA.evaluateOnce = function () {
        if (hs_a116125uXBz.notEvaluated) {
            return hs_a116125uXBz.hscall();
        } else {
            return hs_a116125uXBz;
        }
    };
    hs_a116225uXBB.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczl1825uXBC.evaluateOnce = function () {
        if (hs_a116225uXBB.notEvaluated) {
            return hs_a116225uXBB.hscall();
        } else {
            return hs_a116225uXBB;
        }
    };
    hs_a116325uXBD.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczgze1825uXBE.evaluateOnce = function () {
        if (hs_a116325uXBD.notEvaluated) {
            return hs_a116325uXBD.hscall();
        } else {
            return hs_a116325uXBD;
        }
    };
    hs_a116425uXBF.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczg1825uXBG.evaluateOnce = function () {
        if (hs_a116425uXBF.notEvaluated) {
            return hs_a116425uXBF.hscall();
        } else {
            return hs_a116425uXBF;
        }
    };
    hs_a116525uXBH.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczlze1825uXBI.evaluateOnce = function () {
        if (hs_a116525uXBH.notEvaluated) {
            return hs_a116525uXBH.hscall();
        } else {
            return hs_a116525uXBH;
        }
    };
    hs_a116625uXBJ.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcmax1825uXBK.evaluateOnce = function () {
        if (hs_a116625uXBJ.notEvaluated) {
            return hs_a116625uXBJ.hscall();
        } else {
            return hs_a116625uXBJ;
        }
    };
    hs_a116725uXBL.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcmin1825uXBM.evaluateOnce = function () {
        if (hs_a116725uXBL.notEvaluated) {
            return hs_a116725uXBL.hscall();
        } else {
            return hs_a116725uXBL;
        }
    };
    hs_a116825uXBN.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczeze1825uXBO.evaluateOnce = function () {
        if (hs_a116825uXBN.notEvaluated) {
            return hs_a116825uXBN.hscall();
        } else {
            return hs_a116825uXBN;
        }
    };
    hs_a116925uXBP.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczsze1825uXBQ.evaluateOnce = function () {
        if (hs_a116925uXBP.notEvaluated) {
            return hs_a116925uXBP.hscall();
        } else {
            return hs_a116925uXBP;
        }
    };
    this.hs_zdfEqCUInt.data = [hs_a116825uXBN, hs_a116925uXBP];
    this.hs_zdfOrdCUInt.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCUInt, hs_a116125uXBz, hs_a116225uXBB, hs_a116325uXBD, hs_a116425uXBF, hs_a116525uXBH, hs_a116625uXBJ, hs_a116725uXBL];
    this.hs_zdfNumCUInt.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCUInt, $hs.modules.ForeignziCziTypes.hs_zdfShowCUInt, hs_a115425uXBl, hs_a115525uXBn, hs_a115625uXBp, hs_a115725uXBr, hs_a115825uXBt, hs_a115925uXBv, hs_a116025uXBx];
    this.hs_zdfRealCUInt.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCUInt, $hs.modules.ForeignziCziTypes.hs_zdfOrdCUInt, hs_a113725uXAN];
    this.hs_zdfIntegralCUInt.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealCUInt, $hs.modules.ForeignziCziTypes.hs_zdfEnumCUInt, hs_a112825uXAv, hs_a112925uXAx, hs_a113025uXAz, hs_a113125uXAB, hs_a113225uXAD, hs_a113325uXAF, hs_a113425uXAH];
    this.hs_zdfBitsCUInt.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCUInt, hs_a111125uXzX, hs_a111225uXzZ, hs_a111325uXA1, hs_a111425uXA3, hs_a111525uXA5, hs_a111625uXA7, hs_a111725uXA9, hs_a111825uXAb, hs_a111925uXAd, hs_a112025uXAf, hs_a112125uXAh, hs_a112225uXAj, hs_a112325uXAl, hs_a112425uXAn, hs_a112525uXAp, hs_a112625uXAr, hs_a112725uXAt];
    hs_a117025uXBR.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdczizazi1325uXBS.evaluateOnce = function () {
        if (hs_a117025uXBR.notEvaluated) {
            return hs_a117025uXBR.hscall();
        } else {
            return hs_a117025uXBR;
        }
    };
    hs_a117125uXBT.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdczizbzi1325uXBU.evaluateOnce = function () {
        if (hs_a117125uXBT.notEvaluated) {
            return hs_a117125uXBT.hscall();
        } else {
            return hs_a117125uXBT;
        }
    };
    hs_a117225uXBV.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcxor1325uXBW.evaluateOnce = function () {
        if (hs_a117225uXBV.notEvaluated) {
            return hs_a117225uXBV.hscall();
        } else {
            return hs_a117225uXBV;
        }
    };
    hs_a117325uXBX.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdccomplement1325uXBY.evaluateOnce = function () {
        if (hs_a117325uXBX.notEvaluated) {
            return hs_a117325uXBX.hscall();
        } else {
            return hs_a117325uXBX;
        }
    };
    hs_a117425uXBZ.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshift1325uXC0.evaluateOnce = function () {
        if (hs_a117425uXBZ.notEvaluated) {
            return hs_a117425uXBZ.hscall();
        } else {
            return hs_a117425uXBZ;
        }
    };
    hs_a117525uXC1.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotate1325uXC2.evaluateOnce = function () {
        if (hs_a117525uXC1.notEvaluated) {
            return hs_a117525uXC1.hscall();
        } else {
            return hs_a117525uXC1;
        }
    };
    hs_a117625uXC3.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcbit1325uXC4.evaluateOnce = function () {
        if (hs_a117625uXC3.notEvaluated) {
            return hs_a117625uXC3.hscall();
        } else {
            return hs_a117625uXC3;
        }
    };
    hs_a117725uXC5.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcsetBit1325uXC6.evaluateOnce = function () {
        if (hs_a117725uXC5.notEvaluated) {
            return hs_a117725uXC5.hscall();
        } else {
            return hs_a117725uXC5;
        }
    };
    hs_a117825uXC7.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcclearBit1325uXC8.evaluateOnce = function () {
        if (hs_a117825uXC7.notEvaluated) {
            return hs_a117825uXC7.hscall();
        } else {
            return hs_a117825uXC7;
        }
    };
    hs_a117925uXC9.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdccomplementBit1325uXCa.evaluateOnce = function () {
        if (hs_a117925uXC9.notEvaluated) {
            return hs_a117925uXC9.hscall();
        } else {
            return hs_a117925uXC9;
        }
    };
    hs_a118025uXCb.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdctestBit1325uXCc.evaluateOnce = function () {
        if (hs_a118025uXCb.notEvaluated) {
            return hs_a118025uXCb.hscall();
        } else {
            return hs_a118025uXCb;
        }
    };
    hs_a118125uXCd.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcbitSizze1325uXCe.evaluateOnce = function () {
        if (hs_a118125uXCd.notEvaluated) {
            return hs_a118125uXCd.hscall();
        } else {
            return hs_a118125uXCd;
        }
    };
    hs_a118225uXCf.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcisSigned1325uXCg.evaluateOnce = function () {
        if (hs_a118225uXCf.notEvaluated) {
            return hs_a118225uXCf.hscall();
        } else {
            return hs_a118225uXCf;
        }
    };
    hs_a118325uXCh.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshiftL1325uXCi.evaluateOnce = function () {
        if (hs_a118325uXCh.notEvaluated) {
            return hs_a118325uXCh.hscall();
        } else {
            return hs_a118325uXCh;
        }
    };
    hs_a118425uXCj.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshiftR1325uXCk.evaluateOnce = function () {
        if (hs_a118425uXCj.notEvaluated) {
            return hs_a118425uXCj.hscall();
        } else {
            return hs_a118425uXCj;
        }
    };
    hs_a118525uXCl.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotateL1325uXCm.evaluateOnce = function () {
        if (hs_a118525uXCl.notEvaluated) {
            return hs_a118525uXCl.hscall();
        } else {
            return hs_a118525uXCl;
        }
    };
    hs_a118625uXCn.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotateR1325uXCo.evaluateOnce = function () {
        if (hs_a118625uXCn.notEvaluated) {
            return hs_a118625uXCn.hscall();
        } else {
            return hs_a118625uXCn;
        }
    };
    hs_a118725uXCp.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcquot1325uXCq.evaluateOnce = function () {
        if (hs_a118725uXCp.notEvaluated) {
            return hs_a118725uXCp.hscall();
        } else {
            return hs_a118725uXCp;
        }
    };
    hs_a118825uXCr.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcrem1325uXCs.evaluateOnce = function () {
        if (hs_a118825uXCr.notEvaluated) {
            return hs_a118825uXCr.hscall();
        } else {
            return hs_a118825uXCr;
        }
    };
    hs_a118925uXCt.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcdiv1325uXCu.evaluateOnce = function () {
        if (hs_a118925uXCt.notEvaluated) {
            return hs_a118925uXCt.hscall();
        } else {
            return hs_a118925uXCt;
        }
    };
    hs_a119025uXCv.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcmod1325uXCw.evaluateOnce = function () {
        if (hs_a119025uXCv.notEvaluated) {
            return hs_a119025uXCv.hscall();
        } else {
            return hs_a119025uXCv;
        }
    };
    hs_a119125uXCx.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcquotRem1325uXCy.evaluateOnce = function () {
        if (hs_a119125uXCx.notEvaluated) {
            return hs_a119125uXCx.hscall();
        } else {
            return hs_a119125uXCx;
        }
    };
    hs_a119225uXCz.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcdivMod1325uXCA.evaluateOnce = function () {
        if (hs_a119225uXCz.notEvaluated) {
            return hs_a119225uXCz.hscall();
        } else {
            return hs_a119225uXCz;
        }
    };
    hs_a119325uXCB.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdctoInteger1325uXCC.evaluateOnce = function () {
        if (hs_a119325uXCB.notEvaluated) {
            return hs_a119325uXCB.hscall();
        } else {
            return hs_a119325uXCB;
        }
    };
    hs_a119425uXCD.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt32);
    };
    hs_zdcminBound1325uXCE.evaluateOnce = function () {
        if (hs_a119425uXCD.notEvaluated) {
            return hs_a119425uXCD.hscall();
        } else {
            return hs_a119425uXCD;
        }
    };
    hs_a119525uXCF.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt32);
    };
    hs_zdcmaxBound1325uXCG.evaluateOnce = function () {
        if (hs_a119525uXCF.notEvaluated) {
            return hs_a119525uXCF.hscall();
        } else {
            return hs_a119525uXCF;
        }
    };
    this.hs_zdfBoundedCInt.data = [hs_a119425uXCD, hs_a119525uXCF];
    hs_a119625uXCH.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziInt.hs_zdfRealInt32);
    };
    hs_zdctoRational1925uXCI.evaluateOnce = function () {
        if (hs_a119625uXCH.notEvaluated) {
            return hs_a119625uXCH.hscall();
        } else {
            return hs_a119625uXCH;
        }
    };
    hs_a119725uXCJ.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcsizzeOf1925uXCK.evaluateOnce = function () {
        if (hs_a119725uXCJ.notEvaluated) {
            return hs_a119725uXCJ.hscall();
        } else {
            return hs_a119725uXCJ;
        }
    };
    hs_a119825uXCL.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcalignment1925uXCM.evaluateOnce = function () {
        if (hs_a119825uXCL.notEvaluated) {
            return hs_a119825uXCL.hscall();
        } else {
            return hs_a119825uXCL;
        }
    };
    hs_a119925uXCN.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeekElemOff1925uXCO.evaluateOnce = function () {
        if (hs_a119925uXCN.notEvaluated) {
            return hs_a119925uXCN.hscall();
        } else {
            return hs_a119925uXCN;
        }
    };
    hs_a120025uXCP.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpokeElemOff1925uXCQ.evaluateOnce = function () {
        if (hs_a120025uXCP.notEvaluated) {
            return hs_a120025uXCP.hscall();
        } else {
            return hs_a120025uXCP;
        }
    };
    hs_a120125uXCR.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeekByteOff1925uXCS.evaluateOnce = function () {
        if (hs_a120125uXCR.notEvaluated) {
            return hs_a120125uXCR.hscall();
        } else {
            return hs_a120125uXCR;
        }
    };
    hs_a120225uXCT.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpokeByteOff1925uXCU.evaluateOnce = function () {
        if (hs_a120225uXCT.notEvaluated) {
            return hs_a120225uXCT.hscall();
        } else {
            return hs_a120225uXCT;
        }
    };
    hs_a120325uXCV.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeek1925uXCW.evaluateOnce = function () {
        if (hs_a120325uXCV.notEvaluated) {
            return hs_a120325uXCV.hscall();
        } else {
            return hs_a120325uXCV;
        }
    };
    hs_a120425uXCX.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpoke1925uXCY.evaluateOnce = function () {
        if (hs_a120425uXCX.notEvaluated) {
            return hs_a120425uXCX.hscall();
        } else {
            return hs_a120425uXCX;
        }
    };
    this.hs_zdfStorableCInt.data = [hs_a119725uXCJ, hs_a119825uXCL, hs_a119925uXCN, hs_a120025uXCP, hs_a120125uXCR, hs_a120225uXCT, hs_a120325uXCV, hs_a120425uXCX];
    hs_a120525uXCZ.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcsucc1925uXD0.evaluateOnce = function () {
        if (hs_a120525uXCZ.notEvaluated) {
            return hs_a120525uXCZ.hscall();
        } else {
            return hs_a120525uXCZ;
        }
    };
    hs_a120625uXD1.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcpred1925uXD2.evaluateOnce = function () {
        if (hs_a120625uXD1.notEvaluated) {
            return hs_a120625uXD1.hscall();
        } else {
            return hs_a120625uXD1;
        }
    };
    hs_a120725uXD3.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdctoEnum1925uXD4.evaluateOnce = function () {
        if (hs_a120725uXD3.notEvaluated) {
            return hs_a120725uXD3.hscall();
        } else {
            return hs_a120725uXD3;
        }
    };
    hs_a120825uXD5.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcfromEnum1925uXD6.evaluateOnce = function () {
        if (hs_a120825uXD5.notEvaluated) {
            return hs_a120825uXD5.hscall();
        } else {
            return hs_a120825uXD5;
        }
    };
    hs_a120925uXD7.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFrom1925uXD8.evaluateOnce = function () {
        if (hs_a120925uXD7.notEvaluated) {
            return hs_a120925uXD7.hscall();
        } else {
            return hs_a120925uXD7;
        }
    };
    hs_a121025uXD9.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromThen1925uXDa.evaluateOnce = function () {
        if (hs_a121025uXD9.notEvaluated) {
            return hs_a121025uXD9.hscall();
        } else {
            return hs_a121025uXD9;
        }
    };
    hs_a121125uXDb.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromTo1925uXDc.evaluateOnce = function () {
        if (hs_a121125uXDb.notEvaluated) {
            return hs_a121125uXDb.hscall();
        } else {
            return hs_a121125uXDb;
        }
    };
    hs_a121225uXDd.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromThenTo1925uXDe.evaluateOnce = function () {
        if (hs_a121225uXDd.notEvaluated) {
            return hs_a121225uXDd.hscall();
        } else {
            return hs_a121225uXDd;
        }
    };
    this.hs_zdfEnumCInt.data = [hs_a120525uXCZ, hs_a120625uXD1, hs_a120725uXD3, hs_a120825uXD5, hs_a120925uXD7, hs_a121025uXD9, hs_a121125uXDb, hs_a121225uXDd];
    hs_a121325uXDf.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczp1925uXDg.evaluateOnce = function () {
        if (hs_a121325uXDf.notEvaluated) {
            return hs_a121325uXDf.hscall();
        } else {
            return hs_a121325uXDf;
        }
    };
    hs_a121425uXDh.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczt1925uXDi.evaluateOnce = function () {
        if (hs_a121425uXDh.notEvaluated) {
            return hs_a121425uXDh.hscall();
        } else {
            return hs_a121425uXDh;
        }
    };
    hs_a121525uXDj.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczm1925uXDk.evaluateOnce = function () {
        if (hs_a121525uXDj.notEvaluated) {
            return hs_a121525uXDj.hscall();
        } else {
            return hs_a121525uXDj;
        }
    };
    hs_a121625uXDl.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcnegate1925uXDm.evaluateOnce = function () {
        if (hs_a121625uXDl.notEvaluated) {
            return hs_a121625uXDl.hscall();
        } else {
            return hs_a121625uXDl;
        }
    };
    hs_a121725uXDn.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcabs1925uXDo.evaluateOnce = function () {
        if (hs_a121725uXDn.notEvaluated) {
            return hs_a121725uXDn.hscall();
        } else {
            return hs_a121725uXDn;
        }
    };
    hs_a121825uXDp.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcsignum1925uXDq.evaluateOnce = function () {
        if (hs_a121825uXDp.notEvaluated) {
            return hs_a121825uXDp.hscall();
        } else {
            return hs_a121825uXDp;
        }
    };
    hs_a121925uXDr.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcfromInteger1925uXDs.evaluateOnce = function () {
        if (hs_a121925uXDr.notEvaluated) {
            return hs_a121925uXDr.hscall();
        } else {
            return hs_a121925uXDr;
        }
    };
    hs_a122025uXDt.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdccompare1925uXDu.evaluateOnce = function () {
        if (hs_a122025uXDt.notEvaluated) {
            return hs_a122025uXDt.hscall();
        } else {
            return hs_a122025uXDt;
        }
    };
    hs_a122125uXDv.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczl1925uXDw.evaluateOnce = function () {
        if (hs_a122125uXDv.notEvaluated) {
            return hs_a122125uXDv.hscall();
        } else {
            return hs_a122125uXDv;
        }
    };
    hs_a122225uXDx.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczgze1925uXDy.evaluateOnce = function () {
        if (hs_a122225uXDx.notEvaluated) {
            return hs_a122225uXDx.hscall();
        } else {
            return hs_a122225uXDx;
        }
    };
    hs_a122325uXDz.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczg1925uXDA.evaluateOnce = function () {
        if (hs_a122325uXDz.notEvaluated) {
            return hs_a122325uXDz.hscall();
        } else {
            return hs_a122325uXDz;
        }
    };
    hs_a122425uXDB.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczlze1925uXDC.evaluateOnce = function () {
        if (hs_a122425uXDB.notEvaluated) {
            return hs_a122425uXDB.hscall();
        } else {
            return hs_a122425uXDB;
        }
    };
    hs_a122525uXDD.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdcmax1925uXDE.evaluateOnce = function () {
        if (hs_a122525uXDD.notEvaluated) {
            return hs_a122525uXDD.hscall();
        } else {
            return hs_a122525uXDD;
        }
    };
    hs_a122625uXDF.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdcmin1925uXDG.evaluateOnce = function () {
        if (hs_a122625uXDF.notEvaluated) {
            return hs_a122625uXDF.hscall();
        } else {
            return hs_a122625uXDF;
        }
    };
    hs_a122725uXDH.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32);
    };
    hs_zdczeze1925uXDI.evaluateOnce = function () {
        if (hs_a122725uXDH.notEvaluated) {
            return hs_a122725uXDH.hscall();
        } else {
            return hs_a122725uXDH;
        }
    };
    hs_a122825uXDJ.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32);
    };
    hs_zdczsze1925uXDK.evaluateOnce = function () {
        if (hs_a122825uXDJ.notEvaluated) {
            return hs_a122825uXDJ.hscall();
        } else {
            return hs_a122825uXDJ;
        }
    };
    this.hs_zdfEqCInt.data = [hs_a122725uXDH, hs_a122825uXDJ];
    this.hs_zdfOrdCInt.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_a122025uXDt, hs_a122125uXDv, hs_a122225uXDx, hs_a122325uXDz, hs_a122425uXDB, hs_a122525uXDD, hs_a122625uXDF];
    this.hs_zdfNumCInt.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCInt, $hs.modules.ForeignziCziTypes.hs_zdfShowCInt, hs_a121325uXDf, hs_a121425uXDh, hs_a121525uXDj, hs_a121625uXDl, hs_a121725uXDn, hs_a121825uXDp, hs_a121925uXDr];
    this.hs_zdfRealCInt.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCInt, $hs.modules.ForeignziCziTypes.hs_zdfOrdCInt, hs_a119625uXCH];
    this.hs_zdfIntegralCInt.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealCInt, $hs.modules.ForeignziCziTypes.hs_zdfEnumCInt, hs_a118725uXCp, hs_a118825uXCr, hs_a118925uXCt, hs_a119025uXCv, hs_a119125uXCx, hs_a119225uXCz, hs_a119325uXCB];
    this.hs_zdfBitsCInt.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_a117025uXBR, hs_a117125uXBT, hs_a117225uXBV, hs_a117325uXBX, hs_a117425uXBZ, hs_a117525uXC1, hs_a117625uXC3, hs_a117725uXC5, hs_a117825uXC7, hs_a117925uXC9, hs_a118025uXCb, hs_a118125uXCd, hs_a118225uXCf, hs_a118325uXCh, hs_a118425uXCj, hs_a118525uXCl, hs_a118625uXCn];
    hs_a122925uXDL.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdczizazi1425uXDM.evaluateOnce = function () {
        if (hs_a122925uXDL.notEvaluated) {
            return hs_a122925uXDL.hscall();
        } else {
            return hs_a122925uXDL;
        }
    };
    hs_a123025uXDN.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdczizbzi1425uXDO.evaluateOnce = function () {
        if (hs_a123025uXDN.notEvaluated) {
            return hs_a123025uXDN.hscall();
        } else {
            return hs_a123025uXDN;
        }
    };
    hs_a123125uXDP.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdcxor1425uXDQ.evaluateOnce = function () {
        if (hs_a123125uXDP.notEvaluated) {
            return hs_a123125uXDP.hscall();
        } else {
            return hs_a123125uXDP;
        }
    };
    hs_a123225uXDR.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdccomplement1425uXDS.evaluateOnce = function () {
        if (hs_a123225uXDR.notEvaluated) {
            return hs_a123225uXDR.hscall();
        } else {
            return hs_a123225uXDR;
        }
    };
    hs_a123325uXDT.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdcshift1425uXDU.evaluateOnce = function () {
        if (hs_a123325uXDT.notEvaluated) {
            return hs_a123325uXDT.hscall();
        } else {
            return hs_a123325uXDT;
        }
    };
    hs_a123425uXDV.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdcrotate1425uXDW.evaluateOnce = function () {
        if (hs_a123425uXDV.notEvaluated) {
            return hs_a123425uXDV.hscall();
        } else {
            return hs_a123425uXDV;
        }
    };
    hs_a123525uXDX.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdcbit1425uXDY.evaluateOnce = function () {
        if (hs_a123525uXDX.notEvaluated) {
            return hs_a123525uXDX.hscall();
        } else {
            return hs_a123525uXDX;
        }
    };
    hs_a123625uXDZ.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdcsetBit1425uXE0.evaluateOnce = function () {
        if (hs_a123625uXDZ.notEvaluated) {
            return hs_a123625uXDZ.hscall();
        } else {
            return hs_a123625uXDZ;
        }
    };
    hs_a123725uXE1.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdcclearBit1425uXE2.evaluateOnce = function () {
        if (hs_a123725uXE1.notEvaluated) {
            return hs_a123725uXE1.hscall();
        } else {
            return hs_a123725uXE1;
        }
    };
    hs_a123825uXE3.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdccomplementBit1425uXE4.evaluateOnce = function () {
        if (hs_a123825uXE3.notEvaluated) {
            return hs_a123825uXE3.hscall();
        } else {
            return hs_a123825uXE3;
        }
    };
    hs_a123925uXE5.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdctestBit1425uXE6.evaluateOnce = function () {
        if (hs_a123925uXE5.notEvaluated) {
            return hs_a123925uXE5.hscall();
        } else {
            return hs_a123925uXE5;
        }
    };
    hs_a124025uXE7.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdcbitSizze1425uXE8.evaluateOnce = function () {
        if (hs_a124025uXE7.notEvaluated) {
            return hs_a124025uXE7.hscall();
        } else {
            return hs_a124025uXE7;
        }
    };
    hs_a124125uXE9.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdcisSigned1425uXEa.evaluateOnce = function () {
        if (hs_a124125uXE9.notEvaluated) {
            return hs_a124125uXE9.hscall();
        } else {
            return hs_a124125uXE9;
        }
    };
    hs_a124225uXEb.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdcshiftL1425uXEc.evaluateOnce = function () {
        if (hs_a124225uXEb.notEvaluated) {
            return hs_a124225uXEb.hscall();
        } else {
            return hs_a124225uXEb;
        }
    };
    hs_a124325uXEd.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdcshiftR1425uXEe.evaluateOnce = function () {
        if (hs_a124325uXEd.notEvaluated) {
            return hs_a124325uXEd.hscall();
        } else {
            return hs_a124325uXEd;
        }
    };
    hs_a124425uXEf.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdcrotateL1425uXEg.evaluateOnce = function () {
        if (hs_a124425uXEf.notEvaluated) {
            return hs_a124425uXEf.hscall();
        } else {
            return hs_a124425uXEf;
        }
    };
    hs_a124525uXEh.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdcrotateR1425uXEi.evaluateOnce = function () {
        if (hs_a124525uXEh.notEvaluated) {
            return hs_a124525uXEh.hscall();
        } else {
            return hs_a124525uXEh;
        }
    };
    hs_a124625uXEj.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord16);
    };
    hs_zdcquot1425uXEk.evaluateOnce = function () {
        if (hs_a124625uXEj.notEvaluated) {
            return hs_a124625uXEj.hscall();
        } else {
            return hs_a124625uXEj;
        }
    };
    hs_a124725uXEl.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord16);
    };
    hs_zdcrem1425uXEm.evaluateOnce = function () {
        if (hs_a124725uXEl.notEvaluated) {
            return hs_a124725uXEl.hscall();
        } else {
            return hs_a124725uXEl;
        }
    };
    hs_a124825uXEn.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord16);
    };
    hs_zdcdiv1425uXEo.evaluateOnce = function () {
        if (hs_a124825uXEn.notEvaluated) {
            return hs_a124825uXEn.hscall();
        } else {
            return hs_a124825uXEn;
        }
    };
    hs_a124925uXEp.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord16);
    };
    hs_zdcmod1425uXEq.evaluateOnce = function () {
        if (hs_a124925uXEp.notEvaluated) {
            return hs_a124925uXEp.hscall();
        } else {
            return hs_a124925uXEp;
        }
    };
    hs_a125025uXEr.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord16);
    };
    hs_zdcquotRem1425uXEs.evaluateOnce = function () {
        if (hs_a125025uXEr.notEvaluated) {
            return hs_a125025uXEr.hscall();
        } else {
            return hs_a125025uXEr;
        }
    };
    hs_a125125uXEt.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord16);
    };
    hs_zdcdivMod1425uXEu.evaluateOnce = function () {
        if (hs_a125125uXEt.notEvaluated) {
            return hs_a125125uXEt.hscall();
        } else {
            return hs_a125125uXEt;
        }
    };
    hs_a125225uXEv.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord16);
    };
    hs_zdctoInteger1425uXEw.evaluateOnce = function () {
        if (hs_a125225uXEv.notEvaluated) {
            return hs_a125225uXEv.hscall();
        } else {
            return hs_a125225uXEv;
        }
    };
    hs_a125325uXEx.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord16);
    };
    hs_zdcminBound1425uXEy.evaluateOnce = function () {
        if (hs_a125325uXEx.notEvaluated) {
            return hs_a125325uXEx.hscall();
        } else {
            return hs_a125325uXEx;
        }
    };
    hs_a125425uXEz.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord16);
    };
    hs_zdcmaxBound1425uXEA.evaluateOnce = function () {
        if (hs_a125425uXEz.notEvaluated) {
            return hs_a125425uXEz.hscall();
        } else {
            return hs_a125425uXEz;
        }
    };
    this.hs_zdfBoundedCUShort.data = [hs_a125325uXEx, hs_a125425uXEz];
    hs_a125525uXEB.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziWord.hs_zdfRealWord16);
    };
    hs_zdctoRational2025uXEC.evaluateOnce = function () {
        if (hs_a125525uXEB.notEvaluated) {
            return hs_a125525uXEB.hscall();
        } else {
            return hs_a125525uXEB;
        }
    };
    hs_a125625uXED.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord16);
    };
    hs_zdcsizzeOf2025uXEE.evaluateOnce = function () {
        if (hs_a125625uXED.notEvaluated) {
            return hs_a125625uXED.hscall();
        } else {
            return hs_a125625uXED;
        }
    };
    hs_a125725uXEF.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord16);
    };
    hs_zdcalignment2025uXEG.evaluateOnce = function () {
        if (hs_a125725uXEF.notEvaluated) {
            return hs_a125725uXEF.hscall();
        } else {
            return hs_a125725uXEF;
        }
    };
    hs_a125825uXEH.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord16);
    };
    hs_zdcpeekElemOff2025uXEI.evaluateOnce = function () {
        if (hs_a125825uXEH.notEvaluated) {
            return hs_a125825uXEH.hscall();
        } else {
            return hs_a125825uXEH;
        }
    };
    hs_a125925uXEJ.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord16);
    };
    hs_zdcpokeElemOff2025uXEK.evaluateOnce = function () {
        if (hs_a125925uXEJ.notEvaluated) {
            return hs_a125925uXEJ.hscall();
        } else {
            return hs_a125925uXEJ;
        }
    };
    hs_a126025uXEL.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord16);
    };
    hs_zdcpeekByteOff2025uXEM.evaluateOnce = function () {
        if (hs_a126025uXEL.notEvaluated) {
            return hs_a126025uXEL.hscall();
        } else {
            return hs_a126025uXEL;
        }
    };
    hs_a126125uXEN.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord16);
    };
    hs_zdcpokeByteOff2025uXEO.evaluateOnce = function () {
        if (hs_a126125uXEN.notEvaluated) {
            return hs_a126125uXEN.hscall();
        } else {
            return hs_a126125uXEN;
        }
    };
    hs_a126225uXEP.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord16);
    };
    hs_zdcpeek2025uXEQ.evaluateOnce = function () {
        if (hs_a126225uXEP.notEvaluated) {
            return hs_a126225uXEP.hscall();
        } else {
            return hs_a126225uXEP;
        }
    };
    hs_a126325uXER.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord16);
    };
    hs_zdcpoke2025uXES.evaluateOnce = function () {
        if (hs_a126325uXER.notEvaluated) {
            return hs_a126325uXER.hscall();
        } else {
            return hs_a126325uXER;
        }
    };
    this.hs_zdfStorableCUShort.data = [hs_a125625uXED, hs_a125725uXEF, hs_a125825uXEH, hs_a125925uXEJ, hs_a126025uXEL, hs_a126125uXEN, hs_a126225uXEP, hs_a126325uXER];
    hs_a126425uXET.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziWord.hs_zdfEnumWord16);
    };
    hs_zdcsucc2025uXEU.evaluateOnce = function () {
        if (hs_a126425uXET.notEvaluated) {
            return hs_a126425uXET.hscall();
        } else {
            return hs_a126425uXET;
        }
    };
    hs_a126525uXEV.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziWord.hs_zdfEnumWord16);
    };
    hs_zdcpred2025uXEW.evaluateOnce = function () {
        if (hs_a126525uXEV.notEvaluated) {
            return hs_a126525uXEV.hscall();
        } else {
            return hs_a126525uXEV;
        }
    };
    hs_a126625uXEX.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord16);
    };
    hs_zdctoEnum2025uXEY.evaluateOnce = function () {
        if (hs_a126625uXEX.notEvaluated) {
            return hs_a126625uXEX.hscall();
        } else {
            return hs_a126625uXEX;
        }
    };
    hs_a126725uXEZ.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord16);
    };
    hs_zdcfromEnum2025uXF0.evaluateOnce = function () {
        if (hs_a126725uXEZ.notEvaluated) {
            return hs_a126725uXEZ.hscall();
        } else {
            return hs_a126725uXEZ;
        }
    };
    hs_a126825uXF1.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziWord.hs_zdfEnumWord16);
    };
    hs_zdcenumFrom2025uXF2.evaluateOnce = function () {
        if (hs_a126825uXF1.notEvaluated) {
            return hs_a126825uXF1.hscall();
        } else {
            return hs_a126825uXF1;
        }
    };
    hs_a126925uXF3.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziWord.hs_zdfEnumWord16);
    };
    hs_zdcenumFromThen2025uXF4.evaluateOnce = function () {
        if (hs_a126925uXF3.notEvaluated) {
            return hs_a126925uXF3.hscall();
        } else {
            return hs_a126925uXF3;
        }
    };
    hs_a127025uXF5.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord16);
    };
    hs_zdcenumFromTo2025uXF6.evaluateOnce = function () {
        if (hs_a127025uXF5.notEvaluated) {
            return hs_a127025uXF5.hscall();
        } else {
            return hs_a127025uXF5;
        }
    };
    hs_a127125uXF7.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord16);
    };
    hs_zdcenumFromThenTo2025uXF8.evaluateOnce = function () {
        if (hs_a127125uXF7.notEvaluated) {
            return hs_a127125uXF7.hscall();
        } else {
            return hs_a127125uXF7;
        }
    };
    this.hs_zdfEnumCUShort.data = [hs_a126425uXET, hs_a126525uXEV, hs_a126625uXEX, hs_a126725uXEZ, hs_a126825uXF1, hs_a126925uXF3, hs_a127025uXF5, hs_a127125uXF7];
    hs_a127225uXF9.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord16);
    };
    hs_zdczp2025uXFa.evaluateOnce = function () {
        if (hs_a127225uXF9.notEvaluated) {
            return hs_a127225uXF9.hscall();
        } else {
            return hs_a127225uXF9;
        }
    };
    hs_a127325uXFb.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziWord.hs_zdfNumWord16);
    };
    hs_zdczt2025uXFc.evaluateOnce = function () {
        if (hs_a127325uXFb.notEvaluated) {
            return hs_a127325uXFb.hscall();
        } else {
            return hs_a127325uXFb;
        }
    };
    hs_a127425uXFd.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord16);
    };
    hs_zdczm2025uXFe.evaluateOnce = function () {
        if (hs_a127425uXFd.notEvaluated) {
            return hs_a127425uXFd.hscall();
        } else {
            return hs_a127425uXFd;
        }
    };
    hs_a127525uXFf.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziWord.hs_zdfNumWord16);
    };
    hs_zdcnegate2025uXFg.evaluateOnce = function () {
        if (hs_a127525uXFf.notEvaluated) {
            return hs_a127525uXFf.hscall();
        } else {
            return hs_a127525uXFf;
        }
    };
    hs_a127625uXFh.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziWord.hs_zdfNumWord16);
    };
    hs_zdcabs2025uXFi.evaluateOnce = function () {
        if (hs_a127625uXFh.notEvaluated) {
            return hs_a127625uXFh.hscall();
        } else {
            return hs_a127625uXFh;
        }
    };
    hs_a127725uXFj.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziWord.hs_zdfNumWord16);
    };
    hs_zdcsignum2025uXFk.evaluateOnce = function () {
        if (hs_a127725uXFj.notEvaluated) {
            return hs_a127725uXFj.hscall();
        } else {
            return hs_a127725uXFj;
        }
    };
    hs_a127825uXFl.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16);
    };
    hs_zdcfromInteger2025uXFm.evaluateOnce = function () {
        if (hs_a127825uXFl.notEvaluated) {
            return hs_a127825uXFl.hscall();
        } else {
            return hs_a127825uXFl;
        }
    };
    hs_a127925uXFn.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord16);
    };
    hs_zdccompare2025uXFo.evaluateOnce = function () {
        if (hs_a127925uXFn.notEvaluated) {
            return hs_a127925uXFn.hscall();
        } else {
            return hs_a127925uXFn;
        }
    };
    hs_a128025uXFp.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziWord.hs_zdfOrdWord16);
    };
    hs_zdczl2025uXFq.evaluateOnce = function () {
        if (hs_a128025uXFp.notEvaluated) {
            return hs_a128025uXFp.hscall();
        } else {
            return hs_a128025uXFp;
        }
    };
    hs_a128125uXFr.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord16);
    };
    hs_zdczgze2025uXFs.evaluateOnce = function () {
        if (hs_a128125uXFr.notEvaluated) {
            return hs_a128125uXFr.hscall();
        } else {
            return hs_a128125uXFr;
        }
    };
    hs_a128225uXFt.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziWord.hs_zdfOrdWord16);
    };
    hs_zdczg2025uXFu.evaluateOnce = function () {
        if (hs_a128225uXFt.notEvaluated) {
            return hs_a128225uXFt.hscall();
        } else {
            return hs_a128225uXFt;
        }
    };
    hs_a128325uXFv.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord16);
    };
    hs_zdczlze2025uXFw.evaluateOnce = function () {
        if (hs_a128325uXFv.notEvaluated) {
            return hs_a128325uXFv.hscall();
        } else {
            return hs_a128325uXFv;
        }
    };
    hs_a128425uXFx.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziWord.hs_zdfOrdWord16);
    };
    hs_zdcmax2025uXFy.evaluateOnce = function () {
        if (hs_a128425uXFx.notEvaluated) {
            return hs_a128425uXFx.hscall();
        } else {
            return hs_a128425uXFx;
        }
    };
    hs_a128525uXFz.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziWord.hs_zdfOrdWord16);
    };
    hs_zdcmin2025uXFA.evaluateOnce = function () {
        if (hs_a128525uXFz.notEvaluated) {
            return hs_a128525uXFz.hscall();
        } else {
            return hs_a128525uXFz;
        }
    };
    hs_a128625uXFB.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord16);
    };
    hs_zdczeze2025uXFC.evaluateOnce = function () {
        if (hs_a128625uXFB.notEvaluated) {
            return hs_a128625uXFB.hscall();
        } else {
            return hs_a128625uXFB;
        }
    };
    hs_a128725uXFD.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord16);
    };
    hs_zdczsze2025uXFE.evaluateOnce = function () {
        if (hs_a128725uXFD.notEvaluated) {
            return hs_a128725uXFD.hscall();
        } else {
            return hs_a128725uXFD;
        }
    };
    this.hs_zdfEqCUShort.data = [hs_a128625uXFB, hs_a128725uXFD];
    this.hs_zdfOrdCUShort.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCUShort, hs_a127925uXFn, hs_a128025uXFp, hs_a128125uXFr, hs_a128225uXFt, hs_a128325uXFv, hs_a128425uXFx, hs_a128525uXFz];
    this.hs_zdfNumCUShort.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCUShort, $hs.modules.ForeignziCziTypes.hs_zdfShowCUShort, hs_a127225uXF9, hs_a127325uXFb, hs_a127425uXFd, hs_a127525uXFf, hs_a127625uXFh, hs_a127725uXFj, hs_a127825uXFl];
    this.hs_zdfRealCUShort.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCUShort, $hs.modules.ForeignziCziTypes.hs_zdfOrdCUShort, hs_a125525uXEB];
    this.hs_zdfIntegralCUShort.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealCUShort, $hs.modules.ForeignziCziTypes.hs_zdfEnumCUShort, hs_a124625uXEj, hs_a124725uXEl, hs_a124825uXEn, hs_a124925uXEp, hs_a125025uXEr, hs_a125125uXEt, hs_a125225uXEv];
    this.hs_zdfBitsCUShort.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCUShort, hs_a122925uXDL, hs_a123025uXDN, hs_a123125uXDP, hs_a123225uXDR, hs_a123325uXDT, hs_a123425uXDV, hs_a123525uXDX, hs_a123625uXDZ, hs_a123725uXE1, hs_a123825uXE3, hs_a123925uXE5, hs_a124025uXE7, hs_a124125uXE9, hs_a124225uXEb, hs_a124325uXEd, hs_a124425uXEf, hs_a124525uXEh];
    hs_a128825uXFF.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt16);
    };
    hs_zdczizazi1525uXFG.evaluateOnce = function () {
        if (hs_a128825uXFF.notEvaluated) {
            return hs_a128825uXFF.hscall();
        } else {
            return hs_a128825uXFF;
        }
    };
    hs_a128925uXFH.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt16);
    };
    hs_zdczizbzi1525uXFI.evaluateOnce = function () {
        if (hs_a128925uXFH.notEvaluated) {
            return hs_a128925uXFH.hscall();
        } else {
            return hs_a128925uXFH;
        }
    };
    hs_a129025uXFJ.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziInt.hs_zdfBitsInt16);
    };
    hs_zdcxor1525uXFK.evaluateOnce = function () {
        if (hs_a129025uXFJ.notEvaluated) {
            return hs_a129025uXFJ.hscall();
        } else {
            return hs_a129025uXFJ;
        }
    };
    hs_a129125uXFL.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziInt.hs_zdfBitsInt16);
    };
    hs_zdccomplement1525uXFM.evaluateOnce = function () {
        if (hs_a129125uXFL.notEvaluated) {
            return hs_a129125uXFL.hscall();
        } else {
            return hs_a129125uXFL;
        }
    };
    hs_a129225uXFN.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziInt.hs_zdfBitsInt16);
    };
    hs_zdcshift1525uXFO.evaluateOnce = function () {
        if (hs_a129225uXFN.notEvaluated) {
            return hs_a129225uXFN.hscall();
        } else {
            return hs_a129225uXFN;
        }
    };
    hs_a129325uXFP.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziInt.hs_zdfBitsInt16);
    };
    hs_zdcrotate1525uXFQ.evaluateOnce = function () {
        if (hs_a129325uXFP.notEvaluated) {
            return hs_a129325uXFP.hscall();
        } else {
            return hs_a129325uXFP;
        }
    };
    hs_a129425uXFR.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt16);
    };
    hs_zdcbit1525uXFS.evaluateOnce = function () {
        if (hs_a129425uXFR.notEvaluated) {
            return hs_a129425uXFR.hscall();
        } else {
            return hs_a129425uXFR;
        }
    };
    hs_a129525uXFT.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt16);
    };
    hs_zdcsetBit1525uXFU.evaluateOnce = function () {
        if (hs_a129525uXFT.notEvaluated) {
            return hs_a129525uXFT.hscall();
        } else {
            return hs_a129525uXFT;
        }
    };
    hs_a129625uXFV.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt16);
    };
    hs_zdcclearBit1525uXFW.evaluateOnce = function () {
        if (hs_a129625uXFV.notEvaluated) {
            return hs_a129625uXFV.hscall();
        } else {
            return hs_a129625uXFV;
        }
    };
    hs_a129725uXFX.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt16);
    };
    hs_zdccomplementBit1525uXFY.evaluateOnce = function () {
        if (hs_a129725uXFX.notEvaluated) {
            return hs_a129725uXFX.hscall();
        } else {
            return hs_a129725uXFX;
        }
    };
    hs_a129825uXFZ.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt16);
    };
    hs_zdctestBit1525uXG0.evaluateOnce = function () {
        if (hs_a129825uXFZ.notEvaluated) {
            return hs_a129825uXFZ.hscall();
        } else {
            return hs_a129825uXFZ;
        }
    };
    hs_a129925uXG1.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziInt.hs_zdfBitsInt16);
    };
    hs_zdcbitSizze1525uXG2.evaluateOnce = function () {
        if (hs_a129925uXG1.notEvaluated) {
            return hs_a129925uXG1.hscall();
        } else {
            return hs_a129925uXG1;
        }
    };
    hs_a130025uXG3.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziInt.hs_zdfBitsInt16);
    };
    hs_zdcisSigned1525uXG4.evaluateOnce = function () {
        if (hs_a130025uXG3.notEvaluated) {
            return hs_a130025uXG3.hscall();
        } else {
            return hs_a130025uXG3;
        }
    };
    hs_a130125uXG5.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt16);
    };
    hs_zdcshiftL1525uXG6.evaluateOnce = function () {
        if (hs_a130125uXG5.notEvaluated) {
            return hs_a130125uXG5.hscall();
        } else {
            return hs_a130125uXG5;
        }
    };
    hs_a130225uXG7.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt16);
    };
    hs_zdcshiftR1525uXG8.evaluateOnce = function () {
        if (hs_a130225uXG7.notEvaluated) {
            return hs_a130225uXG7.hscall();
        } else {
            return hs_a130225uXG7;
        }
    };
    hs_a130325uXG9.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt16);
    };
    hs_zdcrotateL1525uXGa.evaluateOnce = function () {
        if (hs_a130325uXG9.notEvaluated) {
            return hs_a130325uXG9.hscall();
        } else {
            return hs_a130325uXG9;
        }
    };
    hs_a130425uXGb.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt16);
    };
    hs_zdcrotateR1525uXGc.evaluateOnce = function () {
        if (hs_a130425uXGb.notEvaluated) {
            return hs_a130425uXGb.hscall();
        } else {
            return hs_a130425uXGb;
        }
    };
    hs_a130525uXGd.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt16);
    };
    hs_zdcquot1525uXGe.evaluateOnce = function () {
        if (hs_a130525uXGd.notEvaluated) {
            return hs_a130525uXGd.hscall();
        } else {
            return hs_a130525uXGd;
        }
    };
    hs_a130625uXGf.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt16);
    };
    hs_zdcrem1525uXGg.evaluateOnce = function () {
        if (hs_a130625uXGf.notEvaluated) {
            return hs_a130625uXGf.hscall();
        } else {
            return hs_a130625uXGf;
        }
    };
    hs_a130725uXGh.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt16);
    };
    hs_zdcdiv1525uXGi.evaluateOnce = function () {
        if (hs_a130725uXGh.notEvaluated) {
            return hs_a130725uXGh.hscall();
        } else {
            return hs_a130725uXGh;
        }
    };
    hs_a130825uXGj.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt16);
    };
    hs_zdcmod1525uXGk.evaluateOnce = function () {
        if (hs_a130825uXGj.notEvaluated) {
            return hs_a130825uXGj.hscall();
        } else {
            return hs_a130825uXGj;
        }
    };
    hs_a130925uXGl.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt16);
    };
    hs_zdcquotRem1525uXGm.evaluateOnce = function () {
        if (hs_a130925uXGl.notEvaluated) {
            return hs_a130925uXGl.hscall();
        } else {
            return hs_a130925uXGl;
        }
    };
    hs_a131025uXGn.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt16);
    };
    hs_zdcdivMod1525uXGo.evaluateOnce = function () {
        if (hs_a131025uXGn.notEvaluated) {
            return hs_a131025uXGn.hscall();
        } else {
            return hs_a131025uXGn;
        }
    };
    hs_a131125uXGp.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt16);
    };
    hs_zdctoInteger1525uXGq.evaluateOnce = function () {
        if (hs_a131125uXGp.notEvaluated) {
            return hs_a131125uXGp.hscall();
        } else {
            return hs_a131125uXGp;
        }
    };
    hs_a131225uXGr.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt16);
    };
    hs_zdcminBound1525uXGs.evaluateOnce = function () {
        if (hs_a131225uXGr.notEvaluated) {
            return hs_a131225uXGr.hscall();
        } else {
            return hs_a131225uXGr;
        }
    };
    hs_a131325uXGt.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt16);
    };
    hs_zdcmaxBound1525uXGu.evaluateOnce = function () {
        if (hs_a131325uXGt.notEvaluated) {
            return hs_a131325uXGt.hscall();
        } else {
            return hs_a131325uXGt;
        }
    };
    this.hs_zdfBoundedCShort.data = [hs_a131225uXGr, hs_a131325uXGt];
    hs_a131425uXGv.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziInt.hs_zdfRealInt16);
    };
    hs_zdctoRational2125uXGw.evaluateOnce = function () {
        if (hs_a131425uXGv.notEvaluated) {
            return hs_a131425uXGv.hscall();
        } else {
            return hs_a131425uXGv;
        }
    };
    hs_a131525uXGx.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt16);
    };
    hs_zdcsizzeOf2125uXGy.evaluateOnce = function () {
        if (hs_a131525uXGx.notEvaluated) {
            return hs_a131525uXGx.hscall();
        } else {
            return hs_a131525uXGx;
        }
    };
    hs_a131625uXGz.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt16);
    };
    hs_zdcalignment2125uXGA.evaluateOnce = function () {
        if (hs_a131625uXGz.notEvaluated) {
            return hs_a131625uXGz.hscall();
        } else {
            return hs_a131625uXGz;
        }
    };
    hs_a131725uXGB.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt16);
    };
    hs_zdcpeekElemOff2125uXGC.evaluateOnce = function () {
        if (hs_a131725uXGB.notEvaluated) {
            return hs_a131725uXGB.hscall();
        } else {
            return hs_a131725uXGB;
        }
    };
    hs_a131825uXGD.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt16);
    };
    hs_zdcpokeElemOff2125uXGE.evaluateOnce = function () {
        if (hs_a131825uXGD.notEvaluated) {
            return hs_a131825uXGD.hscall();
        } else {
            return hs_a131825uXGD;
        }
    };
    hs_a131925uXGF.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt16);
    };
    hs_zdcpeekByteOff2125uXGG.evaluateOnce = function () {
        if (hs_a131925uXGF.notEvaluated) {
            return hs_a131925uXGF.hscall();
        } else {
            return hs_a131925uXGF;
        }
    };
    hs_a132025uXGH.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt16);
    };
    hs_zdcpokeByteOff2125uXGI.evaluateOnce = function () {
        if (hs_a132025uXGH.notEvaluated) {
            return hs_a132025uXGH.hscall();
        } else {
            return hs_a132025uXGH;
        }
    };
    hs_a132125uXGJ.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt16);
    };
    hs_zdcpeek2125uXGK.evaluateOnce = function () {
        if (hs_a132125uXGJ.notEvaluated) {
            return hs_a132125uXGJ.hscall();
        } else {
            return hs_a132125uXGJ;
        }
    };
    hs_a132225uXGL.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt16);
    };
    hs_zdcpoke2125uXGM.evaluateOnce = function () {
        if (hs_a132225uXGL.notEvaluated) {
            return hs_a132225uXGL.hscall();
        } else {
            return hs_a132225uXGL;
        }
    };
    this.hs_zdfStorableCShort.data = [hs_a131525uXGx, hs_a131625uXGz, hs_a131725uXGB, hs_a131825uXGD, hs_a131925uXGF, hs_a132025uXGH, hs_a132125uXGJ, hs_a132225uXGL];
    hs_a132325uXGN.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziInt.hs_zdfEnumInt16);
    };
    hs_zdcsucc2125uXGO.evaluateOnce = function () {
        if (hs_a132325uXGN.notEvaluated) {
            return hs_a132325uXGN.hscall();
        } else {
            return hs_a132325uXGN;
        }
    };
    hs_a132425uXGP.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziInt.hs_zdfEnumInt16);
    };
    hs_zdcpred2125uXGQ.evaluateOnce = function () {
        if (hs_a132425uXGP.notEvaluated) {
            return hs_a132425uXGP.hscall();
        } else {
            return hs_a132425uXGP;
        }
    };
    hs_a132525uXGR.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt16);
    };
    hs_zdctoEnum2125uXGS.evaluateOnce = function () {
        if (hs_a132525uXGR.notEvaluated) {
            return hs_a132525uXGR.hscall();
        } else {
            return hs_a132525uXGR;
        }
    };
    hs_a132625uXGT.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt16);
    };
    hs_zdcfromEnum2125uXGU.evaluateOnce = function () {
        if (hs_a132625uXGT.notEvaluated) {
            return hs_a132625uXGT.hscall();
        } else {
            return hs_a132625uXGT;
        }
    };
    hs_a132725uXGV.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziInt.hs_zdfEnumInt16);
    };
    hs_zdcenumFrom2125uXGW.evaluateOnce = function () {
        if (hs_a132725uXGV.notEvaluated) {
            return hs_a132725uXGV.hscall();
        } else {
            return hs_a132725uXGV;
        }
    };
    hs_a132825uXGX.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziInt.hs_zdfEnumInt16);
    };
    hs_zdcenumFromThen2125uXGY.evaluateOnce = function () {
        if (hs_a132825uXGX.notEvaluated) {
            return hs_a132825uXGX.hscall();
        } else {
            return hs_a132825uXGX;
        }
    };
    hs_a132925uXGZ.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt16);
    };
    hs_zdcenumFromTo2125uXH0.evaluateOnce = function () {
        if (hs_a132925uXGZ.notEvaluated) {
            return hs_a132925uXGZ.hscall();
        } else {
            return hs_a132925uXGZ;
        }
    };
    hs_a133025uXH1.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt16);
    };
    hs_zdcenumFromThenTo2125uXH2.evaluateOnce = function () {
        if (hs_a133025uXH1.notEvaluated) {
            return hs_a133025uXH1.hscall();
        } else {
            return hs_a133025uXH1;
        }
    };
    this.hs_zdfEnumCShort.data = [hs_a132325uXGN, hs_a132425uXGP, hs_a132525uXGR, hs_a132625uXGT, hs_a132725uXGV, hs_a132825uXGX, hs_a132925uXGZ, hs_a133025uXH1];
    hs_a133125uXH3.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt16);
    };
    hs_zdczp2125uXH4.evaluateOnce = function () {
        if (hs_a133125uXH3.notEvaluated) {
            return hs_a133125uXH3.hscall();
        } else {
            return hs_a133125uXH3;
        }
    };
    hs_a133225uXH5.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziInt.hs_zdfNumInt16);
    };
    hs_zdczt2125uXH6.evaluateOnce = function () {
        if (hs_a133225uXH5.notEvaluated) {
            return hs_a133225uXH5.hscall();
        } else {
            return hs_a133225uXH5;
        }
    };
    hs_a133325uXH7.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziInt.hs_zdfNumInt16);
    };
    hs_zdczm2125uXH8.evaluateOnce = function () {
        if (hs_a133325uXH7.notEvaluated) {
            return hs_a133325uXH7.hscall();
        } else {
            return hs_a133325uXH7;
        }
    };
    hs_a133425uXH9.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt16);
    };
    hs_zdcnegate2125uXHa.evaluateOnce = function () {
        if (hs_a133425uXH9.notEvaluated) {
            return hs_a133425uXH9.hscall();
        } else {
            return hs_a133425uXH9;
        }
    };
    hs_a133525uXHb.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziInt.hs_zdfNumInt16);
    };
    hs_zdcabs2125uXHc.evaluateOnce = function () {
        if (hs_a133525uXHb.notEvaluated) {
            return hs_a133525uXHb.hscall();
        } else {
            return hs_a133525uXHb;
        }
    };
    hs_a133625uXHd.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziInt.hs_zdfNumInt16);
    };
    hs_zdcsignum2125uXHe.evaluateOnce = function () {
        if (hs_a133625uXHd.notEvaluated) {
            return hs_a133625uXHd.hscall();
        } else {
            return hs_a133625uXHd;
        }
    };
    hs_a133725uXHf.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt16);
    };
    hs_zdcfromInteger2125uXHg.evaluateOnce = function () {
        if (hs_a133725uXHf.notEvaluated) {
            return hs_a133725uXHf.hscall();
        } else {
            return hs_a133725uXHf;
        }
    };
    hs_a133825uXHh.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziInt.hs_zdfOrdInt16);
    };
    hs_zdccompare2125uXHi.evaluateOnce = function () {
        if (hs_a133825uXHh.notEvaluated) {
            return hs_a133825uXHh.hscall();
        } else {
            return hs_a133825uXHh;
        }
    };
    hs_a133925uXHj.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziInt.hs_zdfOrdInt16);
    };
    hs_zdczl2125uXHk.evaluateOnce = function () {
        if (hs_a133925uXHj.notEvaluated) {
            return hs_a133925uXHj.hscall();
        } else {
            return hs_a133925uXHj;
        }
    };
    hs_a134025uXHl.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt16);
    };
    hs_zdczgze2125uXHm.evaluateOnce = function () {
        if (hs_a134025uXHl.notEvaluated) {
            return hs_a134025uXHl.hscall();
        } else {
            return hs_a134025uXHl;
        }
    };
    hs_a134125uXHn.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziInt.hs_zdfOrdInt16);
    };
    hs_zdczg2125uXHo.evaluateOnce = function () {
        if (hs_a134125uXHn.notEvaluated) {
            return hs_a134125uXHn.hscall();
        } else {
            return hs_a134125uXHn;
        }
    };
    hs_a134225uXHp.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt16);
    };
    hs_zdczlze2125uXHq.evaluateOnce = function () {
        if (hs_a134225uXHp.notEvaluated) {
            return hs_a134225uXHp.hscall();
        } else {
            return hs_a134225uXHp;
        }
    };
    hs_a134325uXHr.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziInt.hs_zdfOrdInt16);
    };
    hs_zdcmax2125uXHs.evaluateOnce = function () {
        if (hs_a134325uXHr.notEvaluated) {
            return hs_a134325uXHr.hscall();
        } else {
            return hs_a134325uXHr;
        }
    };
    hs_a134425uXHt.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziInt.hs_zdfOrdInt16);
    };
    hs_zdcmin2125uXHu.evaluateOnce = function () {
        if (hs_a134425uXHt.notEvaluated) {
            return hs_a134425uXHt.hscall();
        } else {
            return hs_a134425uXHt;
        }
    };
    hs_a134525uXHv.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt16);
    };
    hs_zdczeze2125uXHw.evaluateOnce = function () {
        if (hs_a134525uXHv.notEvaluated) {
            return hs_a134525uXHv.hscall();
        } else {
            return hs_a134525uXHv;
        }
    };
    hs_a134625uXHx.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt16);
    };
    hs_zdczsze2125uXHy.evaluateOnce = function () {
        if (hs_a134625uXHx.notEvaluated) {
            return hs_a134625uXHx.hscall();
        } else {
            return hs_a134625uXHx;
        }
    };
    this.hs_zdfEqCShort.data = [hs_a134525uXHv, hs_a134625uXHx];
    this.hs_zdfOrdCShort.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCShort, hs_a133825uXHh, hs_a133925uXHj, hs_a134025uXHl, hs_a134125uXHn, hs_a134225uXHp, hs_a134325uXHr, hs_a134425uXHt];
    this.hs_zdfNumCShort.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCShort, $hs.modules.ForeignziCziTypes.hs_zdfShowCShort, hs_a133125uXH3, hs_a133225uXH5, hs_a133325uXH7, hs_a133425uXH9, hs_a133525uXHb, hs_a133625uXHd, hs_a133725uXHf];
    this.hs_zdfRealCShort.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCShort, $hs.modules.ForeignziCziTypes.hs_zdfOrdCShort, hs_a131425uXGv];
    this.hs_zdfIntegralCShort.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealCShort, $hs.modules.ForeignziCziTypes.hs_zdfEnumCShort, hs_a130525uXGd, hs_a130625uXGf, hs_a130725uXGh, hs_a130825uXGj, hs_a130925uXGl, hs_a131025uXGn, hs_a131125uXGp];
    this.hs_zdfBitsCShort.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCShort, hs_a128825uXFF, hs_a128925uXFH, hs_a129025uXFJ, hs_a129125uXFL, hs_a129225uXFN, hs_a129325uXFP, hs_a129425uXFR, hs_a129525uXFT, hs_a129625uXFV, hs_a129725uXFX, hs_a129825uXFZ, hs_a129925uXG1, hs_a130025uXG3, hs_a130125uXG5, hs_a130225uXG7, hs_a130325uXG9, hs_a130425uXGb];
    hs_a134725uXHz.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdczizazi1625uXHA.evaluateOnce = function () {
        if (hs_a134725uXHz.notEvaluated) {
            return hs_a134725uXHz.hscall();
        } else {
            return hs_a134725uXHz;
        }
    };
    hs_a134825uXHB.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdczizbzi1625uXHC.evaluateOnce = function () {
        if (hs_a134825uXHB.notEvaluated) {
            return hs_a134825uXHB.hscall();
        } else {
            return hs_a134825uXHB;
        }
    };
    hs_a134925uXHD.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdcxor1625uXHE.evaluateOnce = function () {
        if (hs_a134925uXHD.notEvaluated) {
            return hs_a134925uXHD.hscall();
        } else {
            return hs_a134925uXHD;
        }
    };
    hs_a135025uXHF.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdccomplement1625uXHG.evaluateOnce = function () {
        if (hs_a135025uXHF.notEvaluated) {
            return hs_a135025uXHF.hscall();
        } else {
            return hs_a135025uXHF;
        }
    };
    hs_a135125uXHH.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdcshift1625uXHI.evaluateOnce = function () {
        if (hs_a135125uXHH.notEvaluated) {
            return hs_a135125uXHH.hscall();
        } else {
            return hs_a135125uXHH;
        }
    };
    hs_a135225uXHJ.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdcrotate1625uXHK.evaluateOnce = function () {
        if (hs_a135225uXHJ.notEvaluated) {
            return hs_a135225uXHJ.hscall();
        } else {
            return hs_a135225uXHJ;
        }
    };
    hs_a135325uXHL.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdcbit1625uXHM.evaluateOnce = function () {
        if (hs_a135325uXHL.notEvaluated) {
            return hs_a135325uXHL.hscall();
        } else {
            return hs_a135325uXHL;
        }
    };
    hs_a135425uXHN.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdcsetBit1625uXHO.evaluateOnce = function () {
        if (hs_a135425uXHN.notEvaluated) {
            return hs_a135425uXHN.hscall();
        } else {
            return hs_a135425uXHN;
        }
    };
    hs_a135525uXHP.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdcclearBit1625uXHQ.evaluateOnce = function () {
        if (hs_a135525uXHP.notEvaluated) {
            return hs_a135525uXHP.hscall();
        } else {
            return hs_a135525uXHP;
        }
    };
    hs_a135625uXHR.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdccomplementBit1625uXHS.evaluateOnce = function () {
        if (hs_a135625uXHR.notEvaluated) {
            return hs_a135625uXHR.hscall();
        } else {
            return hs_a135625uXHR;
        }
    };
    hs_a135725uXHT.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdctestBit1625uXHU.evaluateOnce = function () {
        if (hs_a135725uXHT.notEvaluated) {
            return hs_a135725uXHT.hscall();
        } else {
            return hs_a135725uXHT;
        }
    };
    hs_a135825uXHV.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdcbitSizze1625uXHW.evaluateOnce = function () {
        if (hs_a135825uXHV.notEvaluated) {
            return hs_a135825uXHV.hscall();
        } else {
            return hs_a135825uXHV;
        }
    };
    hs_a135925uXHX.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdcisSigned1625uXHY.evaluateOnce = function () {
        if (hs_a135925uXHX.notEvaluated) {
            return hs_a135925uXHX.hscall();
        } else {
            return hs_a135925uXHX;
        }
    };
    hs_a136025uXHZ.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdcshiftL1625uXI0.evaluateOnce = function () {
        if (hs_a136025uXHZ.notEvaluated) {
            return hs_a136025uXHZ.hscall();
        } else {
            return hs_a136025uXHZ;
        }
    };
    hs_a136125uXI1.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdcshiftR1625uXI2.evaluateOnce = function () {
        if (hs_a136125uXI1.notEvaluated) {
            return hs_a136125uXI1.hscall();
        } else {
            return hs_a136125uXI1;
        }
    };
    hs_a136225uXI3.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdcrotateL1625uXI4.evaluateOnce = function () {
        if (hs_a136225uXI3.notEvaluated) {
            return hs_a136225uXI3.hscall();
        } else {
            return hs_a136225uXI3;
        }
    };
    hs_a136325uXI5.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdcrotateR1625uXI6.evaluateOnce = function () {
        if (hs_a136325uXI5.notEvaluated) {
            return hs_a136325uXI5.hscall();
        } else {
            return hs_a136325uXI5;
        }
    };
    hs_a136425uXI7.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8);
    };
    hs_zdcquot1625uXI8.evaluateOnce = function () {
        if (hs_a136425uXI7.notEvaluated) {
            return hs_a136425uXI7.hscall();
        } else {
            return hs_a136425uXI7;
        }
    };
    hs_a136525uXI9.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8);
    };
    hs_zdcrem1625uXIa.evaluateOnce = function () {
        if (hs_a136525uXI9.notEvaluated) {
            return hs_a136525uXI9.hscall();
        } else {
            return hs_a136525uXI9;
        }
    };
    hs_a136625uXIb.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8);
    };
    hs_zdcdiv1625uXIc.evaluateOnce = function () {
        if (hs_a136625uXIb.notEvaluated) {
            return hs_a136625uXIb.hscall();
        } else {
            return hs_a136625uXIb;
        }
    };
    hs_a136725uXId.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8);
    };
    hs_zdcmod1625uXIe.evaluateOnce = function () {
        if (hs_a136725uXId.notEvaluated) {
            return hs_a136725uXId.hscall();
        } else {
            return hs_a136725uXId;
        }
    };
    hs_a136825uXIf.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8);
    };
    hs_zdcquotRem1625uXIg.evaluateOnce = function () {
        if (hs_a136825uXIf.notEvaluated) {
            return hs_a136825uXIf.hscall();
        } else {
            return hs_a136825uXIf;
        }
    };
    hs_a136925uXIh.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8);
    };
    hs_zdcdivMod1625uXIi.evaluateOnce = function () {
        if (hs_a136925uXIh.notEvaluated) {
            return hs_a136925uXIh.hscall();
        } else {
            return hs_a136925uXIh;
        }
    };
    hs_a137025uXIj.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8);
    };
    hs_zdctoInteger1625uXIk.evaluateOnce = function () {
        if (hs_a137025uXIj.notEvaluated) {
            return hs_a137025uXIj.hscall();
        } else {
            return hs_a137025uXIj;
        }
    };
    hs_a137125uXIl.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord8);
    };
    hs_zdcminBound1625uXIm.evaluateOnce = function () {
        if (hs_a137125uXIl.notEvaluated) {
            return hs_a137125uXIl.hscall();
        } else {
            return hs_a137125uXIl;
        }
    };
    hs_a137225uXIn.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord8);
    };
    hs_zdcmaxBound1625uXIo.evaluateOnce = function () {
        if (hs_a137225uXIn.notEvaluated) {
            return hs_a137225uXIn.hscall();
        } else {
            return hs_a137225uXIn;
        }
    };
    this.hs_zdfBoundedCUChar.data = [hs_a137125uXIl, hs_a137225uXIn];
    hs_a137325uXIp.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziWord.hs_zdfRealWord8);
    };
    hs_zdctoRational2225uXIq.evaluateOnce = function () {
        if (hs_a137325uXIp.notEvaluated) {
            return hs_a137325uXIp.hscall();
        } else {
            return hs_a137325uXIp;
        }
    };
    hs_a137425uXIr.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8);
    };
    hs_zdcsizzeOf2225uXIs.evaluateOnce = function () {
        if (hs_a137425uXIr.notEvaluated) {
            return hs_a137425uXIr.hscall();
        } else {
            return hs_a137425uXIr;
        }
    };
    hs_a137525uXIt.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8);
    };
    hs_zdcalignment2225uXIu.evaluateOnce = function () {
        if (hs_a137525uXIt.notEvaluated) {
            return hs_a137525uXIt.hscall();
        } else {
            return hs_a137525uXIt;
        }
    };
    hs_a137625uXIv.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8);
    };
    hs_zdcpeekElemOff2225uXIw.evaluateOnce = function () {
        if (hs_a137625uXIv.notEvaluated) {
            return hs_a137625uXIv.hscall();
        } else {
            return hs_a137625uXIv;
        }
    };
    hs_a137725uXIx.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8);
    };
    hs_zdcpokeElemOff2225uXIy.evaluateOnce = function () {
        if (hs_a137725uXIx.notEvaluated) {
            return hs_a137725uXIx.hscall();
        } else {
            return hs_a137725uXIx;
        }
    };
    hs_a137825uXIz.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8);
    };
    hs_zdcpeekByteOff2225uXIA.evaluateOnce = function () {
        if (hs_a137825uXIz.notEvaluated) {
            return hs_a137825uXIz.hscall();
        } else {
            return hs_a137825uXIz;
        }
    };
    hs_a137925uXIB.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8);
    };
    hs_zdcpokeByteOff2225uXIC.evaluateOnce = function () {
        if (hs_a137925uXIB.notEvaluated) {
            return hs_a137925uXIB.hscall();
        } else {
            return hs_a137925uXIB;
        }
    };
    hs_a138025uXID.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8);
    };
    hs_zdcpeek2225uXIE.evaluateOnce = function () {
        if (hs_a138025uXID.notEvaluated) {
            return hs_a138025uXID.hscall();
        } else {
            return hs_a138025uXID;
        }
    };
    hs_a138125uXIF.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8);
    };
    hs_zdcpoke2225uXIG.evaluateOnce = function () {
        if (hs_a138125uXIF.notEvaluated) {
            return hs_a138125uXIF.hscall();
        } else {
            return hs_a138125uXIF;
        }
    };
    this.hs_zdfStorableCUChar.data = [hs_a137425uXIr, hs_a137525uXIt, hs_a137625uXIv, hs_a137725uXIx, hs_a137825uXIz, hs_a137925uXIB, hs_a138025uXID, hs_a138125uXIF];
    hs_a138225uXIH.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziWord.hs_zdfEnumWord8);
    };
    hs_zdcsucc2225uXII.evaluateOnce = function () {
        if (hs_a138225uXIH.notEvaluated) {
            return hs_a138225uXIH.hscall();
        } else {
            return hs_a138225uXIH;
        }
    };
    hs_a138325uXIJ.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziWord.hs_zdfEnumWord8);
    };
    hs_zdcpred2225uXIK.evaluateOnce = function () {
        if (hs_a138325uXIJ.notEvaluated) {
            return hs_a138325uXIJ.hscall();
        } else {
            return hs_a138325uXIJ;
        }
    };
    hs_a138425uXIL.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord8);
    };
    hs_zdctoEnum2225uXIM.evaluateOnce = function () {
        if (hs_a138425uXIL.notEvaluated) {
            return hs_a138425uXIL.hscall();
        } else {
            return hs_a138425uXIL;
        }
    };
    hs_a138525uXIN.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord8);
    };
    hs_zdcfromEnum2225uXIO.evaluateOnce = function () {
        if (hs_a138525uXIN.notEvaluated) {
            return hs_a138525uXIN.hscall();
        } else {
            return hs_a138525uXIN;
        }
    };
    hs_a138625uXIP.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziWord.hs_zdfEnumWord8);
    };
    hs_zdcenumFrom2225uXIQ.evaluateOnce = function () {
        if (hs_a138625uXIP.notEvaluated) {
            return hs_a138625uXIP.hscall();
        } else {
            return hs_a138625uXIP;
        }
    };
    hs_a138725uXIR.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziWord.hs_zdfEnumWord8);
    };
    hs_zdcenumFromThen2225uXIS.evaluateOnce = function () {
        if (hs_a138725uXIR.notEvaluated) {
            return hs_a138725uXIR.hscall();
        } else {
            return hs_a138725uXIR;
        }
    };
    hs_a138825uXIT.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord8);
    };
    hs_zdcenumFromTo2225uXIU.evaluateOnce = function () {
        if (hs_a138825uXIT.notEvaluated) {
            return hs_a138825uXIT.hscall();
        } else {
            return hs_a138825uXIT;
        }
    };
    hs_a138925uXIV.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord8);
    };
    hs_zdcenumFromThenTo2225uXIW.evaluateOnce = function () {
        if (hs_a138925uXIV.notEvaluated) {
            return hs_a138925uXIV.hscall();
        } else {
            return hs_a138925uXIV;
        }
    };
    this.hs_zdfEnumCUChar.data = [hs_a138225uXIH, hs_a138325uXIJ, hs_a138425uXIL, hs_a138525uXIN, hs_a138625uXIP, hs_a138725uXIR, hs_a138825uXIT, hs_a138925uXIV];
    hs_a139025uXIX.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord8);
    };
    hs_zdczp2225uXIY.evaluateOnce = function () {
        if (hs_a139025uXIX.notEvaluated) {
            return hs_a139025uXIX.hscall();
        } else {
            return hs_a139025uXIX;
        }
    };
    hs_a139125uXIZ.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziWord.hs_zdfNumWord8);
    };
    hs_zdczt2225uXJ0.evaluateOnce = function () {
        if (hs_a139125uXIZ.notEvaluated) {
            return hs_a139125uXIZ.hscall();
        } else {
            return hs_a139125uXIZ;
        }
    };
    hs_a139225uXJ1.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord8);
    };
    hs_zdczm2225uXJ2.evaluateOnce = function () {
        if (hs_a139225uXJ1.notEvaluated) {
            return hs_a139225uXJ1.hscall();
        } else {
            return hs_a139225uXJ1;
        }
    };
    hs_a139325uXJ3.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziWord.hs_zdfNumWord8);
    };
    hs_zdcnegate2225uXJ4.evaluateOnce = function () {
        if (hs_a139325uXJ3.notEvaluated) {
            return hs_a139325uXJ3.hscall();
        } else {
            return hs_a139325uXJ3;
        }
    };
    hs_a139425uXJ5.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziWord.hs_zdfNumWord8);
    };
    hs_zdcabs2225uXJ6.evaluateOnce = function () {
        if (hs_a139425uXJ5.notEvaluated) {
            return hs_a139425uXJ5.hscall();
        } else {
            return hs_a139425uXJ5;
        }
    };
    hs_a139525uXJ7.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziWord.hs_zdfNumWord8);
    };
    hs_zdcsignum2225uXJ8.evaluateOnce = function () {
        if (hs_a139525uXJ7.notEvaluated) {
            return hs_a139525uXJ7.hscall();
        } else {
            return hs_a139525uXJ7;
        }
    };
    hs_a139625uXJ9.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8);
    };
    hs_zdcfromInteger2225uXJa.evaluateOnce = function () {
        if (hs_a139625uXJ9.notEvaluated) {
            return hs_a139625uXJ9.hscall();
        } else {
            return hs_a139625uXJ9;
        }
    };
    hs_a139725uXJb.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord8);
    };
    hs_zdccompare2225uXJc.evaluateOnce = function () {
        if (hs_a139725uXJb.notEvaluated) {
            return hs_a139725uXJb.hscall();
        } else {
            return hs_a139725uXJb;
        }
    };
    hs_a139825uXJd.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziWord.hs_zdfOrdWord8);
    };
    hs_zdczl2225uXJe.evaluateOnce = function () {
        if (hs_a139825uXJd.notEvaluated) {
            return hs_a139825uXJd.hscall();
        } else {
            return hs_a139825uXJd;
        }
    };
    hs_a139925uXJf.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord8);
    };
    hs_zdczgze2225uXJg.evaluateOnce = function () {
        if (hs_a139925uXJf.notEvaluated) {
            return hs_a139925uXJf.hscall();
        } else {
            return hs_a139925uXJf;
        }
    };
    hs_a140025uXJh.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziWord.hs_zdfOrdWord8);
    };
    hs_zdczg2225uXJi.evaluateOnce = function () {
        if (hs_a140025uXJh.notEvaluated) {
            return hs_a140025uXJh.hscall();
        } else {
            return hs_a140025uXJh;
        }
    };
    hs_a140125uXJj.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord8);
    };
    hs_zdczlze2225uXJk.evaluateOnce = function () {
        if (hs_a140125uXJj.notEvaluated) {
            return hs_a140125uXJj.hscall();
        } else {
            return hs_a140125uXJj;
        }
    };
    hs_a140225uXJl.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziWord.hs_zdfOrdWord8);
    };
    hs_zdcmax2225uXJm.evaluateOnce = function () {
        if (hs_a140225uXJl.notEvaluated) {
            return hs_a140225uXJl.hscall();
        } else {
            return hs_a140225uXJl;
        }
    };
    hs_a140325uXJn.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziWord.hs_zdfOrdWord8);
    };
    hs_zdcmin2225uXJo.evaluateOnce = function () {
        if (hs_a140325uXJn.notEvaluated) {
            return hs_a140325uXJn.hscall();
        } else {
            return hs_a140325uXJn;
        }
    };
    hs_a140425uXJp.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8);
    };
    hs_zdczeze2225uXJq.evaluateOnce = function () {
        if (hs_a140425uXJp.notEvaluated) {
            return hs_a140425uXJp.hscall();
        } else {
            return hs_a140425uXJp;
        }
    };
    hs_a140525uXJr.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8);
    };
    hs_zdczsze2225uXJs.evaluateOnce = function () {
        if (hs_a140525uXJr.notEvaluated) {
            return hs_a140525uXJr.hscall();
        } else {
            return hs_a140525uXJr;
        }
    };
    this.hs_zdfEqCUChar.data = [hs_a140425uXJp, hs_a140525uXJr];
    this.hs_zdfOrdCUChar.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCUChar, hs_a139725uXJb, hs_a139825uXJd, hs_a139925uXJf, hs_a140025uXJh, hs_a140125uXJj, hs_a140225uXJl, hs_a140325uXJn];
    this.hs_zdfNumCUChar.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCUChar, $hs.modules.ForeignziCziTypes.hs_zdfShowCUChar, hs_a139025uXIX, hs_a139125uXIZ, hs_a139225uXJ1, hs_a139325uXJ3, hs_a139425uXJ5, hs_a139525uXJ7, hs_a139625uXJ9];
    this.hs_zdfRealCUChar.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCUChar, $hs.modules.ForeignziCziTypes.hs_zdfOrdCUChar, hs_a137325uXIp];
    this.hs_zdfIntegralCUChar.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealCUChar, $hs.modules.ForeignziCziTypes.hs_zdfEnumCUChar, hs_a136425uXI7, hs_a136525uXI9, hs_a136625uXIb, hs_a136725uXId, hs_a136825uXIf, hs_a136925uXIh, hs_a137025uXIj];
    this.hs_zdfBitsCUChar.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCUChar, hs_a134725uXHz, hs_a134825uXHB, hs_a134925uXHD, hs_a135025uXHF, hs_a135125uXHH, hs_a135225uXHJ, hs_a135325uXHL, hs_a135425uXHN, hs_a135525uXHP, hs_a135625uXHR, hs_a135725uXHT, hs_a135825uXHV, hs_a135925uXHX, hs_a136025uXHZ, hs_a136125uXI1, hs_a136225uXI3, hs_a136325uXI5];
    hs_a140625uXJt.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdczizazi1725uXJu.evaluateOnce = function () {
        if (hs_a140625uXJt.notEvaluated) {
            return hs_a140625uXJt.hscall();
        } else {
            return hs_a140625uXJt;
        }
    };
    hs_a140725uXJv.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdczizbzi1725uXJw.evaluateOnce = function () {
        if (hs_a140725uXJv.notEvaluated) {
            return hs_a140725uXJv.hscall();
        } else {
            return hs_a140725uXJv;
        }
    };
    hs_a140825uXJx.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcxor1725uXJy.evaluateOnce = function () {
        if (hs_a140825uXJx.notEvaluated) {
            return hs_a140825uXJx.hscall();
        } else {
            return hs_a140825uXJx;
        }
    };
    hs_a140925uXJz.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdccomplement1725uXJA.evaluateOnce = function () {
        if (hs_a140925uXJz.notEvaluated) {
            return hs_a140925uXJz.hscall();
        } else {
            return hs_a140925uXJz;
        }
    };
    hs_a141025uXJB.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcshift1725uXJC.evaluateOnce = function () {
        if (hs_a141025uXJB.notEvaluated) {
            return hs_a141025uXJB.hscall();
        } else {
            return hs_a141025uXJB;
        }
    };
    hs_a141125uXJD.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcrotate1725uXJE.evaluateOnce = function () {
        if (hs_a141125uXJD.notEvaluated) {
            return hs_a141125uXJD.hscall();
        } else {
            return hs_a141125uXJD;
        }
    };
    hs_a141225uXJF.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcbit1725uXJG.evaluateOnce = function () {
        if (hs_a141225uXJF.notEvaluated) {
            return hs_a141225uXJF.hscall();
        } else {
            return hs_a141225uXJF;
        }
    };
    hs_a141325uXJH.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcsetBit1725uXJI.evaluateOnce = function () {
        if (hs_a141325uXJH.notEvaluated) {
            return hs_a141325uXJH.hscall();
        } else {
            return hs_a141325uXJH;
        }
    };
    hs_a141425uXJJ.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcclearBit1725uXJK.evaluateOnce = function () {
        if (hs_a141425uXJJ.notEvaluated) {
            return hs_a141425uXJJ.hscall();
        } else {
            return hs_a141425uXJJ;
        }
    };
    hs_a141525uXJL.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdccomplementBit1725uXJM.evaluateOnce = function () {
        if (hs_a141525uXJL.notEvaluated) {
            return hs_a141525uXJL.hscall();
        } else {
            return hs_a141525uXJL;
        }
    };
    hs_a141625uXJN.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdctestBit1725uXJO.evaluateOnce = function () {
        if (hs_a141625uXJN.notEvaluated) {
            return hs_a141625uXJN.hscall();
        } else {
            return hs_a141625uXJN;
        }
    };
    hs_a141725uXJP.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcbitSizze1725uXJQ.evaluateOnce = function () {
        if (hs_a141725uXJP.notEvaluated) {
            return hs_a141725uXJP.hscall();
        } else {
            return hs_a141725uXJP;
        }
    };
    hs_a141825uXJR.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcisSigned1725uXJS.evaluateOnce = function () {
        if (hs_a141825uXJR.notEvaluated) {
            return hs_a141825uXJR.hscall();
        } else {
            return hs_a141825uXJR;
        }
    };
    hs_a141925uXJT.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcshiftL1725uXJU.evaluateOnce = function () {
        if (hs_a141925uXJT.notEvaluated) {
            return hs_a141925uXJT.hscall();
        } else {
            return hs_a141925uXJT;
        }
    };
    hs_a142025uXJV.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcshiftR1725uXJW.evaluateOnce = function () {
        if (hs_a142025uXJV.notEvaluated) {
            return hs_a142025uXJV.hscall();
        } else {
            return hs_a142025uXJV;
        }
    };
    hs_a142125uXJX.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcrotateL1725uXJY.evaluateOnce = function () {
        if (hs_a142125uXJX.notEvaluated) {
            return hs_a142125uXJX.hscall();
        } else {
            return hs_a142125uXJX;
        }
    };
    hs_a142225uXJZ.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcrotateR1725uXK0.evaluateOnce = function () {
        if (hs_a142225uXJZ.notEvaluated) {
            return hs_a142225uXJZ.hscall();
        } else {
            return hs_a142225uXJZ;
        }
    };
    hs_a142325uXK1.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt8);
    };
    hs_zdcquot1725uXK2.evaluateOnce = function () {
        if (hs_a142325uXK1.notEvaluated) {
            return hs_a142325uXK1.hscall();
        } else {
            return hs_a142325uXK1;
        }
    };
    hs_a142425uXK3.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt8);
    };
    hs_zdcrem1725uXK4.evaluateOnce = function () {
        if (hs_a142425uXK3.notEvaluated) {
            return hs_a142425uXK3.hscall();
        } else {
            return hs_a142425uXK3;
        }
    };
    hs_a142525uXK5.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt8);
    };
    hs_zdcdiv1725uXK6.evaluateOnce = function () {
        if (hs_a142525uXK5.notEvaluated) {
            return hs_a142525uXK5.hscall();
        } else {
            return hs_a142525uXK5;
        }
    };
    hs_a142625uXK7.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt8);
    };
    hs_zdcmod1725uXK8.evaluateOnce = function () {
        if (hs_a142625uXK7.notEvaluated) {
            return hs_a142625uXK7.hscall();
        } else {
            return hs_a142625uXK7;
        }
    };
    hs_a142725uXK9.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt8);
    };
    hs_zdcquotRem1725uXKa.evaluateOnce = function () {
        if (hs_a142725uXK9.notEvaluated) {
            return hs_a142725uXK9.hscall();
        } else {
            return hs_a142725uXK9;
        }
    };
    hs_a142825uXKb.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt8);
    };
    hs_zdcdivMod1725uXKc.evaluateOnce = function () {
        if (hs_a142825uXKb.notEvaluated) {
            return hs_a142825uXKb.hscall();
        } else {
            return hs_a142825uXKb;
        }
    };
    hs_a142925uXKd.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt8);
    };
    hs_zdctoInteger1725uXKe.evaluateOnce = function () {
        if (hs_a142925uXKd.notEvaluated) {
            return hs_a142925uXKd.hscall();
        } else {
            return hs_a142925uXKd;
        }
    };
    hs_a143025uXKf.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt8);
    };
    hs_zdcminBound1725uXKg.evaluateOnce = function () {
        if (hs_a143025uXKf.notEvaluated) {
            return hs_a143025uXKf.hscall();
        } else {
            return hs_a143025uXKf;
        }
    };
    hs_a143125uXKh.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt8);
    };
    hs_zdcmaxBound1725uXKi.evaluateOnce = function () {
        if (hs_a143125uXKh.notEvaluated) {
            return hs_a143125uXKh.hscall();
        } else {
            return hs_a143125uXKh;
        }
    };
    this.hs_zdfBoundedCSChar.data = [hs_a143025uXKf, hs_a143125uXKh];
    hs_a143225uXKj.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziInt.hs_zdfRealInt8);
    };
    hs_zdctoRational2325uXKk.evaluateOnce = function () {
        if (hs_a143225uXKj.notEvaluated) {
            return hs_a143225uXKj.hscall();
        } else {
            return hs_a143225uXKj;
        }
    };
    hs_a143325uXKl.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt8);
    };
    hs_zdcsizzeOf2325uXKm.evaluateOnce = function () {
        if (hs_a143325uXKl.notEvaluated) {
            return hs_a143325uXKl.hscall();
        } else {
            return hs_a143325uXKl;
        }
    };
    hs_a143425uXKn.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt8);
    };
    hs_zdcalignment2325uXKo.evaluateOnce = function () {
        if (hs_a143425uXKn.notEvaluated) {
            return hs_a143425uXKn.hscall();
        } else {
            return hs_a143425uXKn;
        }
    };
    hs_a143525uXKp.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt8);
    };
    hs_zdcpeekElemOff2325uXKq.evaluateOnce = function () {
        if (hs_a143525uXKp.notEvaluated) {
            return hs_a143525uXKp.hscall();
        } else {
            return hs_a143525uXKp;
        }
    };
    hs_a143625uXKr.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt8);
    };
    hs_zdcpokeElemOff2325uXKs.evaluateOnce = function () {
        if (hs_a143625uXKr.notEvaluated) {
            return hs_a143625uXKr.hscall();
        } else {
            return hs_a143625uXKr;
        }
    };
    hs_a143725uXKt.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt8);
    };
    hs_zdcpeekByteOff2325uXKu.evaluateOnce = function () {
        if (hs_a143725uXKt.notEvaluated) {
            return hs_a143725uXKt.hscall();
        } else {
            return hs_a143725uXKt;
        }
    };
    hs_a143825uXKv.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt8);
    };
    hs_zdcpokeByteOff2325uXKw.evaluateOnce = function () {
        if (hs_a143825uXKv.notEvaluated) {
            return hs_a143825uXKv.hscall();
        } else {
            return hs_a143825uXKv;
        }
    };
    hs_a143925uXKx.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt8);
    };
    hs_zdcpeek2325uXKy.evaluateOnce = function () {
        if (hs_a143925uXKx.notEvaluated) {
            return hs_a143925uXKx.hscall();
        } else {
            return hs_a143925uXKx;
        }
    };
    hs_a144025uXKz.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt8);
    };
    hs_zdcpoke2325uXKA.evaluateOnce = function () {
        if (hs_a144025uXKz.notEvaluated) {
            return hs_a144025uXKz.hscall();
        } else {
            return hs_a144025uXKz;
        }
    };
    this.hs_zdfStorableCSChar.data = [hs_a143325uXKl, hs_a143425uXKn, hs_a143525uXKp, hs_a143625uXKr, hs_a143725uXKt, hs_a143825uXKv, hs_a143925uXKx, hs_a144025uXKz];
    hs_a144125uXKB.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziInt.hs_zdfEnumInt8);
    };
    hs_zdcsucc2325uXKC.evaluateOnce = function () {
        if (hs_a144125uXKB.notEvaluated) {
            return hs_a144125uXKB.hscall();
        } else {
            return hs_a144125uXKB;
        }
    };
    hs_a144225uXKD.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziInt.hs_zdfEnumInt8);
    };
    hs_zdcpred2325uXKE.evaluateOnce = function () {
        if (hs_a144225uXKD.notEvaluated) {
            return hs_a144225uXKD.hscall();
        } else {
            return hs_a144225uXKD;
        }
    };
    hs_a144325uXKF.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt8);
    };
    hs_zdctoEnum2325uXKG.evaluateOnce = function () {
        if (hs_a144325uXKF.notEvaluated) {
            return hs_a144325uXKF.hscall();
        } else {
            return hs_a144325uXKF;
        }
    };
    hs_a144425uXKH.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt8);
    };
    hs_zdcfromEnum2325uXKI.evaluateOnce = function () {
        if (hs_a144425uXKH.notEvaluated) {
            return hs_a144425uXKH.hscall();
        } else {
            return hs_a144425uXKH;
        }
    };
    hs_a144525uXKJ.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziInt.hs_zdfEnumInt8);
    };
    hs_zdcenumFrom2325uXKK.evaluateOnce = function () {
        if (hs_a144525uXKJ.notEvaluated) {
            return hs_a144525uXKJ.hscall();
        } else {
            return hs_a144525uXKJ;
        }
    };
    hs_a144625uXKL.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziInt.hs_zdfEnumInt8);
    };
    hs_zdcenumFromThen2325uXKM.evaluateOnce = function () {
        if (hs_a144625uXKL.notEvaluated) {
            return hs_a144625uXKL.hscall();
        } else {
            return hs_a144625uXKL;
        }
    };
    hs_a144725uXKN.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt8);
    };
    hs_zdcenumFromTo2325uXKO.evaluateOnce = function () {
        if (hs_a144725uXKN.notEvaluated) {
            return hs_a144725uXKN.hscall();
        } else {
            return hs_a144725uXKN;
        }
    };
    hs_a144825uXKP.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt8);
    };
    hs_zdcenumFromThenTo2325uXKQ.evaluateOnce = function () {
        if (hs_a144825uXKP.notEvaluated) {
            return hs_a144825uXKP.hscall();
        } else {
            return hs_a144825uXKP;
        }
    };
    this.hs_zdfEnumCSChar.data = [hs_a144125uXKB, hs_a144225uXKD, hs_a144325uXKF, hs_a144425uXKH, hs_a144525uXKJ, hs_a144625uXKL, hs_a144725uXKN, hs_a144825uXKP];
    hs_a144925uXKR.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt8);
    };
    hs_zdczp2325uXKS.evaluateOnce = function () {
        if (hs_a144925uXKR.notEvaluated) {
            return hs_a144925uXKR.hscall();
        } else {
            return hs_a144925uXKR;
        }
    };
    hs_a145025uXKT.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziInt.hs_zdfNumInt8);
    };
    hs_zdczt2325uXKU.evaluateOnce = function () {
        if (hs_a145025uXKT.notEvaluated) {
            return hs_a145025uXKT.hscall();
        } else {
            return hs_a145025uXKT;
        }
    };
    hs_a145125uXKV.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziInt.hs_zdfNumInt8);
    };
    hs_zdczm2325uXKW.evaluateOnce = function () {
        if (hs_a145125uXKV.notEvaluated) {
            return hs_a145125uXKV.hscall();
        } else {
            return hs_a145125uXKV;
        }
    };
    hs_a145225uXKX.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt8);
    };
    hs_zdcnegate2325uXKY.evaluateOnce = function () {
        if (hs_a145225uXKX.notEvaluated) {
            return hs_a145225uXKX.hscall();
        } else {
            return hs_a145225uXKX;
        }
    };
    hs_a145325uXKZ.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziInt.hs_zdfNumInt8);
    };
    hs_zdcabs2325uXL0.evaluateOnce = function () {
        if (hs_a145325uXKZ.notEvaluated) {
            return hs_a145325uXKZ.hscall();
        } else {
            return hs_a145325uXKZ;
        }
    };
    hs_a145425uXL1.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziInt.hs_zdfNumInt8);
    };
    hs_zdcsignum2325uXL2.evaluateOnce = function () {
        if (hs_a145425uXL1.notEvaluated) {
            return hs_a145425uXL1.hscall();
        } else {
            return hs_a145425uXL1;
        }
    };
    hs_a145525uXL3.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt8);
    };
    hs_zdcfromInteger2325uXL4.evaluateOnce = function () {
        if (hs_a145525uXL3.notEvaluated) {
            return hs_a145525uXL3.hscall();
        } else {
            return hs_a145525uXL3;
        }
    };
    hs_a145625uXL5.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziInt.hs_zdfOrdInt8);
    };
    hs_zdccompare2325uXL6.evaluateOnce = function () {
        if (hs_a145625uXL5.notEvaluated) {
            return hs_a145625uXL5.hscall();
        } else {
            return hs_a145625uXL5;
        }
    };
    hs_a145725uXL7.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziInt.hs_zdfOrdInt8);
    };
    hs_zdczl2325uXL8.evaluateOnce = function () {
        if (hs_a145725uXL7.notEvaluated) {
            return hs_a145725uXL7.hscall();
        } else {
            return hs_a145725uXL7;
        }
    };
    hs_a145825uXL9.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt8);
    };
    hs_zdczgze2325uXLa.evaluateOnce = function () {
        if (hs_a145825uXL9.notEvaluated) {
            return hs_a145825uXL9.hscall();
        } else {
            return hs_a145825uXL9;
        }
    };
    hs_a145925uXLb.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziInt.hs_zdfOrdInt8);
    };
    hs_zdczg2325uXLc.evaluateOnce = function () {
        if (hs_a145925uXLb.notEvaluated) {
            return hs_a145925uXLb.hscall();
        } else {
            return hs_a145925uXLb;
        }
    };
    hs_a146025uXLd.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt8);
    };
    hs_zdczlze2325uXLe.evaluateOnce = function () {
        if (hs_a146025uXLd.notEvaluated) {
            return hs_a146025uXLd.hscall();
        } else {
            return hs_a146025uXLd;
        }
    };
    hs_a146125uXLf.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziInt.hs_zdfOrdInt8);
    };
    hs_zdcmax2325uXLg.evaluateOnce = function () {
        if (hs_a146125uXLf.notEvaluated) {
            return hs_a146125uXLf.hscall();
        } else {
            return hs_a146125uXLf;
        }
    };
    hs_a146225uXLh.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziInt.hs_zdfOrdInt8);
    };
    hs_zdcmin2325uXLi.evaluateOnce = function () {
        if (hs_a146225uXLh.notEvaluated) {
            return hs_a146225uXLh.hscall();
        } else {
            return hs_a146225uXLh;
        }
    };
    hs_a146325uXLj.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt8);
    };
    hs_zdczeze2325uXLk.evaluateOnce = function () {
        if (hs_a146325uXLj.notEvaluated) {
            return hs_a146325uXLj.hscall();
        } else {
            return hs_a146325uXLj;
        }
    };
    hs_a146425uXLl.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt8);
    };
    hs_zdczsze2325uXLm.evaluateOnce = function () {
        if (hs_a146425uXLl.notEvaluated) {
            return hs_a146425uXLl.hscall();
        } else {
            return hs_a146425uXLl;
        }
    };
    this.hs_zdfEqCSChar.data = [hs_a146325uXLj, hs_a146425uXLl];
    this.hs_zdfOrdCSChar.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCSChar, hs_a145625uXL5, hs_a145725uXL7, hs_a145825uXL9, hs_a145925uXLb, hs_a146025uXLd, hs_a146125uXLf, hs_a146225uXLh];
    this.hs_zdfNumCSChar.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCSChar, $hs.modules.ForeignziCziTypes.hs_zdfShowCSChar, hs_a144925uXKR, hs_a145025uXKT, hs_a145125uXKV, hs_a145225uXKX, hs_a145325uXKZ, hs_a145425uXL1, hs_a145525uXL3];
    this.hs_zdfRealCSChar.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCSChar, $hs.modules.ForeignziCziTypes.hs_zdfOrdCSChar, hs_a143225uXKj];
    this.hs_zdfIntegralCSChar.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealCSChar, $hs.modules.ForeignziCziTypes.hs_zdfEnumCSChar, hs_a142325uXK1, hs_a142425uXK3, hs_a142525uXK5, hs_a142625uXK7, hs_a142725uXK9, hs_a142825uXKb, hs_a142925uXKd];
    this.hs_zdfBitsCSChar.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCSChar, hs_a140625uXJt, hs_a140725uXJv, hs_a140825uXJx, hs_a140925uXJz, hs_a141025uXJB, hs_a141125uXJD, hs_a141225uXJF, hs_a141325uXJH, hs_a141425uXJJ, hs_a141525uXJL, hs_a141625uXJN, hs_a141725uXJP, hs_a141825uXJR, hs_a141925uXJT, hs_a142025uXJV, hs_a142125uXJX, hs_a142225uXJZ];
    hs_a146525uXLn.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdczizazi1825uXLo.evaluateOnce = function () {
        if (hs_a146525uXLn.notEvaluated) {
            return hs_a146525uXLn.hscall();
        } else {
            return hs_a146525uXLn;
        }
    };
    hs_a146625uXLp.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdczizbzi1825uXLq.evaluateOnce = function () {
        if (hs_a146625uXLp.notEvaluated) {
            return hs_a146625uXLp.hscall();
        } else {
            return hs_a146625uXLp;
        }
    };
    hs_a146725uXLr.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcxor1825uXLs.evaluateOnce = function () {
        if (hs_a146725uXLr.notEvaluated) {
            return hs_a146725uXLr.hscall();
        } else {
            return hs_a146725uXLr;
        }
    };
    hs_a146825uXLt.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdccomplement1825uXLu.evaluateOnce = function () {
        if (hs_a146825uXLt.notEvaluated) {
            return hs_a146825uXLt.hscall();
        } else {
            return hs_a146825uXLt;
        }
    };
    hs_a146925uXLv.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcshift1825uXLw.evaluateOnce = function () {
        if (hs_a146925uXLv.notEvaluated) {
            return hs_a146925uXLv.hscall();
        } else {
            return hs_a146925uXLv;
        }
    };
    hs_a147025uXLx.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcrotate1825uXLy.evaluateOnce = function () {
        if (hs_a147025uXLx.notEvaluated) {
            return hs_a147025uXLx.hscall();
        } else {
            return hs_a147025uXLx;
        }
    };
    hs_a147125uXLz.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcbit1825uXLA.evaluateOnce = function () {
        if (hs_a147125uXLz.notEvaluated) {
            return hs_a147125uXLz.hscall();
        } else {
            return hs_a147125uXLz;
        }
    };
    hs_a147225uXLB.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcsetBit1825uXLC.evaluateOnce = function () {
        if (hs_a147225uXLB.notEvaluated) {
            return hs_a147225uXLB.hscall();
        } else {
            return hs_a147225uXLB;
        }
    };
    hs_a147325uXLD.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcclearBit1825uXLE.evaluateOnce = function () {
        if (hs_a147325uXLD.notEvaluated) {
            return hs_a147325uXLD.hscall();
        } else {
            return hs_a147325uXLD;
        }
    };
    hs_a147425uXLF.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdccomplementBit1825uXLG.evaluateOnce = function () {
        if (hs_a147425uXLF.notEvaluated) {
            return hs_a147425uXLF.hscall();
        } else {
            return hs_a147425uXLF;
        }
    };
    hs_a147525uXLH.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdctestBit1825uXLI.evaluateOnce = function () {
        if (hs_a147525uXLH.notEvaluated) {
            return hs_a147525uXLH.hscall();
        } else {
            return hs_a147525uXLH;
        }
    };
    hs_a147625uXLJ.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcbitSizze1825uXLK.evaluateOnce = function () {
        if (hs_a147625uXLJ.notEvaluated) {
            return hs_a147625uXLJ.hscall();
        } else {
            return hs_a147625uXLJ;
        }
    };
    hs_a147725uXLL.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcisSigned1825uXLM.evaluateOnce = function () {
        if (hs_a147725uXLL.notEvaluated) {
            return hs_a147725uXLL.hscall();
        } else {
            return hs_a147725uXLL;
        }
    };
    hs_a147825uXLN.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcshiftL1825uXLO.evaluateOnce = function () {
        if (hs_a147825uXLN.notEvaluated) {
            return hs_a147825uXLN.hscall();
        } else {
            return hs_a147825uXLN;
        }
    };
    hs_a147925uXLP.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcshiftR1825uXLQ.evaluateOnce = function () {
        if (hs_a147925uXLP.notEvaluated) {
            return hs_a147925uXLP.hscall();
        } else {
            return hs_a147925uXLP;
        }
    };
    hs_a148025uXLR.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcrotateL1825uXLS.evaluateOnce = function () {
        if (hs_a148025uXLR.notEvaluated) {
            return hs_a148025uXLR.hscall();
        } else {
            return hs_a148025uXLR;
        }
    };
    hs_a148125uXLT.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcrotateR1825uXLU.evaluateOnce = function () {
        if (hs_a148125uXLT.notEvaluated) {
            return hs_a148125uXLT.hscall();
        } else {
            return hs_a148125uXLT;
        }
    };
    hs_a148225uXLV.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt8);
    };
    hs_zdcquot1825uXLW.evaluateOnce = function () {
        if (hs_a148225uXLV.notEvaluated) {
            return hs_a148225uXLV.hscall();
        } else {
            return hs_a148225uXLV;
        }
    };
    hs_a148325uXLX.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt8);
    };
    hs_zdcrem1825uXLY.evaluateOnce = function () {
        if (hs_a148325uXLX.notEvaluated) {
            return hs_a148325uXLX.hscall();
        } else {
            return hs_a148325uXLX;
        }
    };
    hs_a148425uXLZ.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt8);
    };
    hs_zdcdiv1825uXM0.evaluateOnce = function () {
        if (hs_a148425uXLZ.notEvaluated) {
            return hs_a148425uXLZ.hscall();
        } else {
            return hs_a148425uXLZ;
        }
    };
    hs_a148525uXM1.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt8);
    };
    hs_zdcmod1825uXM2.evaluateOnce = function () {
        if (hs_a148525uXM1.notEvaluated) {
            return hs_a148525uXM1.hscall();
        } else {
            return hs_a148525uXM1;
        }
    };
    hs_a148625uXM3.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt8);
    };
    hs_zdcquotRem1825uXM4.evaluateOnce = function () {
        if (hs_a148625uXM3.notEvaluated) {
            return hs_a148625uXM3.hscall();
        } else {
            return hs_a148625uXM3;
        }
    };
    hs_a148725uXM5.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt8);
    };
    hs_zdcdivMod1825uXM6.evaluateOnce = function () {
        if (hs_a148725uXM5.notEvaluated) {
            return hs_a148725uXM5.hscall();
        } else {
            return hs_a148725uXM5;
        }
    };
    hs_a148825uXM7.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt8);
    };
    hs_zdctoInteger1825uXM8.evaluateOnce = function () {
        if (hs_a148825uXM7.notEvaluated) {
            return hs_a148825uXM7.hscall();
        } else {
            return hs_a148825uXM7;
        }
    };
    hs_a148925uXM9.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt8);
    };
    hs_zdcminBound1825uXMa.evaluateOnce = function () {
        if (hs_a148925uXM9.notEvaluated) {
            return hs_a148925uXM9.hscall();
        } else {
            return hs_a148925uXM9;
        }
    };
    hs_a149025uXMb.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt8);
    };
    hs_zdcmaxBound1825uXMc.evaluateOnce = function () {
        if (hs_a149025uXMb.notEvaluated) {
            return hs_a149025uXMb.hscall();
        } else {
            return hs_a149025uXMb;
        }
    };
    this.hs_zdfBoundedCChar.data = [hs_a148925uXM9, hs_a149025uXMb];
    hs_a149125uXMd.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziInt.hs_zdfRealInt8);
    };
    hs_zdctoRational2425uXMe.evaluateOnce = function () {
        if (hs_a149125uXMd.notEvaluated) {
            return hs_a149125uXMd.hscall();
        } else {
            return hs_a149125uXMd;
        }
    };
    hs_a149225uXMf.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt8);
    };
    hs_zdcsizzeOf2425uXMg.evaluateOnce = function () {
        if (hs_a149225uXMf.notEvaluated) {
            return hs_a149225uXMf.hscall();
        } else {
            return hs_a149225uXMf;
        }
    };
    hs_a149325uXMh.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt8);
    };
    hs_zdcalignment2425uXMi.evaluateOnce = function () {
        if (hs_a149325uXMh.notEvaluated) {
            return hs_a149325uXMh.hscall();
        } else {
            return hs_a149325uXMh;
        }
    };
    hs_a149425uXMj.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt8);
    };
    hs_zdcpeekElemOff2425uXMk.evaluateOnce = function () {
        if (hs_a149425uXMj.notEvaluated) {
            return hs_a149425uXMj.hscall();
        } else {
            return hs_a149425uXMj;
        }
    };
    hs_a149525uXMl.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt8);
    };
    hs_zdcpokeElemOff2425uXMm.evaluateOnce = function () {
        if (hs_a149525uXMl.notEvaluated) {
            return hs_a149525uXMl.hscall();
        } else {
            return hs_a149525uXMl;
        }
    };
    hs_a149625uXMn.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt8);
    };
    hs_zdcpeekByteOff2425uXMo.evaluateOnce = function () {
        if (hs_a149625uXMn.notEvaluated) {
            return hs_a149625uXMn.hscall();
        } else {
            return hs_a149625uXMn;
        }
    };
    hs_a149725uXMp.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt8);
    };
    hs_zdcpokeByteOff2425uXMq.evaluateOnce = function () {
        if (hs_a149725uXMp.notEvaluated) {
            return hs_a149725uXMp.hscall();
        } else {
            return hs_a149725uXMp;
        }
    };
    hs_a149825uXMr.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt8);
    };
    hs_zdcpeek2425uXMs.evaluateOnce = function () {
        if (hs_a149825uXMr.notEvaluated) {
            return hs_a149825uXMr.hscall();
        } else {
            return hs_a149825uXMr;
        }
    };
    hs_a149925uXMt.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt8);
    };
    hs_zdcpoke2425uXMu.evaluateOnce = function () {
        if (hs_a149925uXMt.notEvaluated) {
            return hs_a149925uXMt.hscall();
        } else {
            return hs_a149925uXMt;
        }
    };
    this.hs_zdfStorableCChar.data = [hs_a149225uXMf, hs_a149325uXMh, hs_a149425uXMj, hs_a149525uXMl, hs_a149625uXMn, hs_a149725uXMp, hs_a149825uXMr, hs_a149925uXMt];
    hs_a150025uXMv.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziInt.hs_zdfEnumInt8);
    };
    hs_zdcsucc2425uXMw.evaluateOnce = function () {
        if (hs_a150025uXMv.notEvaluated) {
            return hs_a150025uXMv.hscall();
        } else {
            return hs_a150025uXMv;
        }
    };
    hs_a150125uXMx.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziInt.hs_zdfEnumInt8);
    };
    hs_zdcpred2425uXMy.evaluateOnce = function () {
        if (hs_a150125uXMx.notEvaluated) {
            return hs_a150125uXMx.hscall();
        } else {
            return hs_a150125uXMx;
        }
    };
    hs_a150225uXMz.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt8);
    };
    hs_zdctoEnum2425uXMA.evaluateOnce = function () {
        if (hs_a150225uXMz.notEvaluated) {
            return hs_a150225uXMz.hscall();
        } else {
            return hs_a150225uXMz;
        }
    };
    hs_a150325uXMB.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt8);
    };
    hs_zdcfromEnum2425uXMC.evaluateOnce = function () {
        if (hs_a150325uXMB.notEvaluated) {
            return hs_a150325uXMB.hscall();
        } else {
            return hs_a150325uXMB;
        }
    };
    hs_a150425uXMD.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziInt.hs_zdfEnumInt8);
    };
    hs_zdcenumFrom2425uXME.evaluateOnce = function () {
        if (hs_a150425uXMD.notEvaluated) {
            return hs_a150425uXMD.hscall();
        } else {
            return hs_a150425uXMD;
        }
    };
    hs_a150525uXMF.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziInt.hs_zdfEnumInt8);
    };
    hs_zdcenumFromThen2425uXMG.evaluateOnce = function () {
        if (hs_a150525uXMF.notEvaluated) {
            return hs_a150525uXMF.hscall();
        } else {
            return hs_a150525uXMF;
        }
    };
    hs_a150625uXMH.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt8);
    };
    hs_zdcenumFromTo2425uXMI.evaluateOnce = function () {
        if (hs_a150625uXMH.notEvaluated) {
            return hs_a150625uXMH.hscall();
        } else {
            return hs_a150625uXMH;
        }
    };
    hs_a150725uXMJ.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt8);
    };
    hs_zdcenumFromThenTo2425uXMK.evaluateOnce = function () {
        if (hs_a150725uXMJ.notEvaluated) {
            return hs_a150725uXMJ.hscall();
        } else {
            return hs_a150725uXMJ;
        }
    };
    this.hs_zdfEnumCChar.data = [hs_a150025uXMv, hs_a150125uXMx, hs_a150225uXMz, hs_a150325uXMB, hs_a150425uXMD, hs_a150525uXMF, hs_a150625uXMH, hs_a150725uXMJ];
    hs_a150825uXML.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt8);
    };
    hs_zdczp2425uXMM.evaluateOnce = function () {
        if (hs_a150825uXML.notEvaluated) {
            return hs_a150825uXML.hscall();
        } else {
            return hs_a150825uXML;
        }
    };
    hs_a150925uXMN.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziInt.hs_zdfNumInt8);
    };
    hs_zdczt2425uXMO.evaluateOnce = function () {
        if (hs_a150925uXMN.notEvaluated) {
            return hs_a150925uXMN.hscall();
        } else {
            return hs_a150925uXMN;
        }
    };
    hs_a151025uXMP.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziInt.hs_zdfNumInt8);
    };
    hs_zdczm2425uXMQ.evaluateOnce = function () {
        if (hs_a151025uXMP.notEvaluated) {
            return hs_a151025uXMP.hscall();
        } else {
            return hs_a151025uXMP;
        }
    };
    hs_a151125uXMR.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt8);
    };
    hs_zdcnegate2425uXMS.evaluateOnce = function () {
        if (hs_a151125uXMR.notEvaluated) {
            return hs_a151125uXMR.hscall();
        } else {
            return hs_a151125uXMR;
        }
    };
    hs_a151225uXMT.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziInt.hs_zdfNumInt8);
    };
    hs_zdcabs2425uXMU.evaluateOnce = function () {
        if (hs_a151225uXMT.notEvaluated) {
            return hs_a151225uXMT.hscall();
        } else {
            return hs_a151225uXMT;
        }
    };
    hs_a151325uXMV.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziInt.hs_zdfNumInt8);
    };
    hs_zdcsignum2425uXMW.evaluateOnce = function () {
        if (hs_a151325uXMV.notEvaluated) {
            return hs_a151325uXMV.hscall();
        } else {
            return hs_a151325uXMV;
        }
    };
    hs_a151425uXMX.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt8);
    };
    hs_zdcfromInteger2425uXMY.evaluateOnce = function () {
        if (hs_a151425uXMX.notEvaluated) {
            return hs_a151425uXMX.hscall();
        } else {
            return hs_a151425uXMX;
        }
    };
    hs_a151525uXMZ.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziInt.hs_zdfOrdInt8);
    };
    hs_zdccompare2425uXN0.evaluateOnce = function () {
        if (hs_a151525uXMZ.notEvaluated) {
            return hs_a151525uXMZ.hscall();
        } else {
            return hs_a151525uXMZ;
        }
    };
    hs_a151625uXN1.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziInt.hs_zdfOrdInt8);
    };
    hs_zdczl2425uXN2.evaluateOnce = function () {
        if (hs_a151625uXN1.notEvaluated) {
            return hs_a151625uXN1.hscall();
        } else {
            return hs_a151625uXN1;
        }
    };
    hs_a151725uXN3.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt8);
    };
    hs_zdczgze2425uXN4.evaluateOnce = function () {
        if (hs_a151725uXN3.notEvaluated) {
            return hs_a151725uXN3.hscall();
        } else {
            return hs_a151725uXN3;
        }
    };
    hs_a151825uXN5.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziInt.hs_zdfOrdInt8);
    };
    hs_zdczg2425uXN6.evaluateOnce = function () {
        if (hs_a151825uXN5.notEvaluated) {
            return hs_a151825uXN5.hscall();
        } else {
            return hs_a151825uXN5;
        }
    };
    hs_a151925uXN7.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt8);
    };
    hs_zdczlze2425uXN8.evaluateOnce = function () {
        if (hs_a151925uXN7.notEvaluated) {
            return hs_a151925uXN7.hscall();
        } else {
            return hs_a151925uXN7;
        }
    };
    hs_a152025uXN9.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziInt.hs_zdfOrdInt8);
    };
    hs_zdcmax2425uXNa.evaluateOnce = function () {
        if (hs_a152025uXN9.notEvaluated) {
            return hs_a152025uXN9.hscall();
        } else {
            return hs_a152025uXN9;
        }
    };
    hs_a152125uXNb.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziInt.hs_zdfOrdInt8);
    };
    hs_zdcmin2425uXNc.evaluateOnce = function () {
        if (hs_a152125uXNb.notEvaluated) {
            return hs_a152125uXNb.hscall();
        } else {
            return hs_a152125uXNb;
        }
    };
    hs_a152225uXNd.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt8);
    };
    hs_zdczeze2425uXNe.evaluateOnce = function () {
        if (hs_a152225uXNd.notEvaluated) {
            return hs_a152225uXNd.hscall();
        } else {
            return hs_a152225uXNd;
        }
    };
    hs_a152325uXNf.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt8);
    };
    hs_zdczsze2425uXNg.evaluateOnce = function () {
        if (hs_a152325uXNf.notEvaluated) {
            return hs_a152325uXNf.hscall();
        } else {
            return hs_a152325uXNf;
        }
    };
    this.hs_zdfEqCChar.data = [hs_a152225uXNd, hs_a152325uXNf];
    this.hs_zdfOrdCChar.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCChar, hs_a151525uXMZ, hs_a151625uXN1, hs_a151725uXN3, hs_a151825uXN5, hs_a151925uXN7, hs_a152025uXN9, hs_a152125uXNb];
    this.hs_zdfNumCChar.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCChar, $hs.modules.ForeignziCziTypes.hs_zdfShowCChar, hs_a150825uXML, hs_a150925uXMN, hs_a151025uXMP, hs_a151125uXMR, hs_a151225uXMT, hs_a151325uXMV, hs_a151425uXMX];
    this.hs_zdfRealCChar.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCChar, $hs.modules.ForeignziCziTypes.hs_zdfOrdCChar, hs_a149125uXMd];
    this.hs_zdfIntegralCChar.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealCChar, $hs.modules.ForeignziCziTypes.hs_zdfEnumCChar, hs_a148225uXLV, hs_a148325uXLX, hs_a148425uXLZ, hs_a148525uXM1, hs_a148625uXM3, hs_a148725uXM5, hs_a148825uXM7];
    this.hs_zdfBitsCChar.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCChar, hs_a146525uXLn, hs_a146625uXLp, hs_a146725uXLr, hs_a146825uXLt, hs_a146925uXLv, hs_a147025uXLx, hs_a147125uXLz, hs_a147225uXLB, hs_a147325uXLD, hs_a147425uXLF, hs_a147525uXLH, hs_a147625uXLJ, hs_a147725uXLL, hs_a147825uXLN, hs_a147925uXLP, hs_a148025uXLR, hs_a148125uXLT];
    hs_zdctypeOf25uXNh.evaluate = function (hs_ds26DmjD) {
        var hs_sat26Dmmm = new $hs.Thunk();
        hs_sat26Dmmm.evaluateOnce = function () {
            var hs_sat26Dmmo = new $hs.Thunk();
            hs_sat26Dmmo.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CChar\x00");
            };
            var hs_sat26Dmmp = new $hs.Thunk();
            hs_sat26Dmmp.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Foreign.C.Types\x00");
            };
            var hs_sat26Dmmn = new $hs.Thunk();
            hs_sat26Dmmn.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26Dmmn, hs_sat26Dmmp, hs_sat26Dmmo);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26Dmmm, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCChar.evaluateOnce = function () {
        if (hs_zdctypeOf25uXNh.notEvaluated) {
            return hs_zdctypeOf25uXNh.hscall();
        } else {
            return hs_zdctypeOf25uXNh;
        }
    };
    hs_zdctypeOf125uXNo.evaluate = function (hs_ds26DmjK) {
        var hs_sat26Dmmq = new $hs.Thunk();
        hs_sat26Dmmq.evaluateOnce = function () {
            var hs_sat26Dmms = new $hs.Thunk();
            hs_sat26Dmms.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CSChar\x00");
            };
            var hs_sat26Dmmt = new $hs.Thunk();
            hs_sat26Dmmt.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Foreign.C.Types\x00");
            };
            var hs_sat26Dmmr = new $hs.Thunk();
            hs_sat26Dmmr.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26Dmmr, hs_sat26Dmmt, hs_sat26Dmms);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26Dmmq, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCSChar.evaluateOnce = function () {
        if (hs_zdctypeOf125uXNo.notEvaluated) {
            return hs_zdctypeOf125uXNo.hscall();
        } else {
            return hs_zdctypeOf125uXNo;
        }
    };
    hs_zdctypeOf225uXNv.evaluate = function (hs_ds26DmjR) {
        var hs_sat26Dmmu = new $hs.Thunk();
        hs_sat26Dmmu.evaluateOnce = function () {
            var hs_sat26Dmmw = new $hs.Thunk();
            hs_sat26Dmmw.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CUChar\x00");
            };
            var hs_sat26Dmmx = new $hs.Thunk();
            hs_sat26Dmmx.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Foreign.C.Types\x00");
            };
            var hs_sat26Dmmv = new $hs.Thunk();
            hs_sat26Dmmv.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26Dmmv, hs_sat26Dmmx, hs_sat26Dmmw);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26Dmmu, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCUChar.evaluateOnce = function () {
        if (hs_zdctypeOf225uXNv.notEvaluated) {
            return hs_zdctypeOf225uXNv.hscall();
        } else {
            return hs_zdctypeOf225uXNv;
        }
    };
    hs_zdctypeOf325uXNC.evaluate = function (hs_ds26DmjY) {
        var hs_sat26Dmmy = new $hs.Thunk();
        hs_sat26Dmmy.evaluateOnce = function () {
            var hs_sat26DmmA = new $hs.Thunk();
            hs_sat26DmmA.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CShort\x00");
            };
            var hs_sat26DmmB = new $hs.Thunk();
            hs_sat26DmmB.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Foreign.C.Types\x00");
            };
            var hs_sat26Dmmz = new $hs.Thunk();
            hs_sat26Dmmz.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26Dmmz, hs_sat26DmmB, hs_sat26DmmA);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26Dmmy, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCShort.evaluateOnce = function () {
        if (hs_zdctypeOf325uXNC.notEvaluated) {
            return hs_zdctypeOf325uXNC.hscall();
        } else {
            return hs_zdctypeOf325uXNC;
        }
    };
    hs_zdctypeOf425uXNJ.evaluate = function (hs_ds26Dmk5) {
        var hs_sat26DmmC = new $hs.Thunk();
        hs_sat26DmmC.evaluateOnce = function () {
            var hs_sat26DmmE = new $hs.Thunk();
            hs_sat26DmmE.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CUShort\x00");
            };
            var hs_sat26DmmF = new $hs.Thunk();
            hs_sat26DmmF.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Foreign.C.Types\x00");
            };
            var hs_sat26DmmD = new $hs.Thunk();
            hs_sat26DmmD.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26DmmD, hs_sat26DmmF, hs_sat26DmmE);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26DmmC, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCUShort.evaluateOnce = function () {
        if (hs_zdctypeOf425uXNJ.notEvaluated) {
            return hs_zdctypeOf425uXNJ.hscall();
        } else {
            return hs_zdctypeOf425uXNJ;
        }
    };
    hs_zdctypeOf525uXNQ.evaluate = function (hs_ds26Dmkc) {
        var hs_sat26DmmG = new $hs.Thunk();
        hs_sat26DmmG.evaluateOnce = function () {
            var hs_sat26DmmI = new $hs.Thunk();
            hs_sat26DmmI.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CInt\x00");
            };
            var hs_sat26DmmJ = new $hs.Thunk();
            hs_sat26DmmJ.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Foreign.C.Types\x00");
            };
            var hs_sat26DmmH = new $hs.Thunk();
            hs_sat26DmmH.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26DmmH, hs_sat26DmmJ, hs_sat26DmmI);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26DmmG, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCInt.evaluateOnce = function () {
        if (hs_zdctypeOf525uXNQ.notEvaluated) {
            return hs_zdctypeOf525uXNQ.hscall();
        } else {
            return hs_zdctypeOf525uXNQ;
        }
    };
    hs_zdctypeOf625uXNX.evaluate = function (hs_ds26Dmkj) {
        var hs_sat26DmmK = new $hs.Thunk();
        hs_sat26DmmK.evaluateOnce = function () {
            var hs_sat26DmmM = new $hs.Thunk();
            hs_sat26DmmM.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CUInt\x00");
            };
            var hs_sat26DmmN = new $hs.Thunk();
            hs_sat26DmmN.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Foreign.C.Types\x00");
            };
            var hs_sat26DmmL = new $hs.Thunk();
            hs_sat26DmmL.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26DmmL, hs_sat26DmmN, hs_sat26DmmM);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26DmmK, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCUInt.evaluateOnce = function () {
        if (hs_zdctypeOf625uXNX.notEvaluated) {
            return hs_zdctypeOf625uXNX.hscall();
        } else {
            return hs_zdctypeOf625uXNX;
        }
    };
    hs_zdctypeOf725uXO4.evaluate = function (hs_ds26Dmkq) {
        var hs_sat26DmmO = new $hs.Thunk();
        hs_sat26DmmO.evaluateOnce = function () {
            var hs_sat26DmmQ = new $hs.Thunk();
            hs_sat26DmmQ.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CLong\x00");
            };
            var hs_sat26DmmR = new $hs.Thunk();
            hs_sat26DmmR.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Foreign.C.Types\x00");
            };
            var hs_sat26DmmP = new $hs.Thunk();
            hs_sat26DmmP.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26DmmP, hs_sat26DmmR, hs_sat26DmmQ);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26DmmO, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCLong.evaluateOnce = function () {
        if (hs_zdctypeOf725uXO4.notEvaluated) {
            return hs_zdctypeOf725uXO4.hscall();
        } else {
            return hs_zdctypeOf725uXO4;
        }
    };
    hs_zdctypeOf825uXOb.evaluate = function (hs_ds26Dmkx) {
        var hs_sat26DmmS = new $hs.Thunk();
        hs_sat26DmmS.evaluateOnce = function () {
            var hs_sat26DmmU = new $hs.Thunk();
            hs_sat26DmmU.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CULong\x00");
            };
            var hs_sat26DmmV = new $hs.Thunk();
            hs_sat26DmmV.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Foreign.C.Types\x00");
            };
            var hs_sat26DmmT = new $hs.Thunk();
            hs_sat26DmmT.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26DmmT, hs_sat26DmmV, hs_sat26DmmU);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26DmmS, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCULong.evaluateOnce = function () {
        if (hs_zdctypeOf825uXOb.notEvaluated) {
            return hs_zdctypeOf825uXOb.hscall();
        } else {
            return hs_zdctypeOf825uXOb;
        }
    };
    hs_zdctypeOf925uXOi.evaluate = function (hs_ds26DmkE) {
        var hs_sat26DmmW = new $hs.Thunk();
        hs_sat26DmmW.evaluateOnce = function () {
            var hs_sat26DmmY = new $hs.Thunk();
            hs_sat26DmmY.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CLLong\x00");
            };
            var hs_sat26DmmZ = new $hs.Thunk();
            hs_sat26DmmZ.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Foreign.C.Types\x00");
            };
            var hs_sat26DmmX = new $hs.Thunk();
            hs_sat26DmmX.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26DmmX, hs_sat26DmmZ, hs_sat26DmmY);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26DmmW, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCLLong.evaluateOnce = function () {
        if (hs_zdctypeOf925uXOi.notEvaluated) {
            return hs_zdctypeOf925uXOi.hscall();
        } else {
            return hs_zdctypeOf925uXOi;
        }
    };
    hs_zdctypeOf1025uXOp.evaluate = function (hs_ds26DmkL) {
        var hs_sat26Dmn0 = new $hs.Thunk();
        hs_sat26Dmn0.evaluateOnce = function () {
            var hs_sat26Dmn2 = new $hs.Thunk();
            hs_sat26Dmn2.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CULLong\x00");
            };
            var hs_sat26Dmn3 = new $hs.Thunk();
            hs_sat26Dmn3.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Foreign.C.Types\x00");
            };
            var hs_sat26Dmn1 = new $hs.Thunk();
            hs_sat26Dmn1.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26Dmn1, hs_sat26Dmn3, hs_sat26Dmn2);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26Dmn0, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCULLong.evaluateOnce = function () {
        if (hs_zdctypeOf1025uXOp.notEvaluated) {
            return hs_zdctypeOf1025uXOp.hscall();
        } else {
            return hs_zdctypeOf1025uXOp;
        }
    };
    hs_zdctypeOf1125uXOw.evaluate = function (hs_ds26DmkS) {
        var hs_sat26Dmn4 = new $hs.Thunk();
        hs_sat26Dmn4.evaluateOnce = function () {
            var hs_sat26Dmn6 = new $hs.Thunk();
            hs_sat26Dmn6.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CFloat\x00");
            };
            var hs_sat26Dmn7 = new $hs.Thunk();
            hs_sat26Dmn7.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Foreign.C.Types\x00");
            };
            var hs_sat26Dmn5 = new $hs.Thunk();
            hs_sat26Dmn5.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26Dmn5, hs_sat26Dmn7, hs_sat26Dmn6);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26Dmn4, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCFloat.evaluateOnce = function () {
        if (hs_zdctypeOf1125uXOw.notEvaluated) {
            return hs_zdctypeOf1125uXOw.hscall();
        } else {
            return hs_zdctypeOf1125uXOw;
        }
    };
    hs_zdctypeOf1225uXOD.evaluate = function (hs_ds26DmkZ) {
        var hs_sat26Dmn8 = new $hs.Thunk();
        hs_sat26Dmn8.evaluateOnce = function () {
            var hs_sat26Dmna = new $hs.Thunk();
            hs_sat26Dmna.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CDouble\x00");
            };
            var hs_sat26Dmnb = new $hs.Thunk();
            hs_sat26Dmnb.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Foreign.C.Types\x00");
            };
            var hs_sat26Dmn9 = new $hs.Thunk();
            hs_sat26Dmn9.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26Dmn9, hs_sat26Dmnb, hs_sat26Dmna);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26Dmn8, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCDouble.evaluateOnce = function () {
        if (hs_zdctypeOf1225uXOD.notEvaluated) {
            return hs_zdctypeOf1225uXOD.hscall();
        } else {
            return hs_zdctypeOf1225uXOD;
        }
    };
    hs_zdctypeOf1325uXOK.evaluate = function (hs_ds26Dml6) {
        var hs_sat26Dmnc = new $hs.Thunk();
        hs_sat26Dmnc.evaluateOnce = function () {
            var hs_sat26Dmne = new $hs.Thunk();
            hs_sat26Dmne.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CPtrdiff\x00");
            };
            var hs_sat26Dmnf = new $hs.Thunk();
            hs_sat26Dmnf.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Foreign.C.Types\x00");
            };
            var hs_sat26Dmnd = new $hs.Thunk();
            hs_sat26Dmnd.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26Dmnd, hs_sat26Dmnf, hs_sat26Dmne);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26Dmnc, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCPtrdiff.evaluateOnce = function () {
        if (hs_zdctypeOf1325uXOK.notEvaluated) {
            return hs_zdctypeOf1325uXOK.hscall();
        } else {
            return hs_zdctypeOf1325uXOK;
        }
    };
    hs_zdctypeOf1425uXOR.evaluate = function (hs_ds26Dmld) {
        var hs_sat26Dmng = new $hs.Thunk();
        hs_sat26Dmng.evaluateOnce = function () {
            var hs_sat26Dmni = new $hs.Thunk();
            hs_sat26Dmni.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CSize\x00");
            };
            var hs_sat26Dmnj = new $hs.Thunk();
            hs_sat26Dmnj.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Foreign.C.Types\x00");
            };
            var hs_sat26Dmnh = new $hs.Thunk();
            hs_sat26Dmnh.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26Dmnh, hs_sat26Dmnj, hs_sat26Dmni);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26Dmng, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCSizze.evaluateOnce = function () {
        if (hs_zdctypeOf1425uXOR.notEvaluated) {
            return hs_zdctypeOf1425uXOR.hscall();
        } else {
            return hs_zdctypeOf1425uXOR;
        }
    };
    hs_zdctypeOf1525uXOY.evaluate = function (hs_ds26Dmlk) {
        var hs_sat26Dmnk = new $hs.Thunk();
        hs_sat26Dmnk.evaluateOnce = function () {
            var hs_sat26Dmnm = new $hs.Thunk();
            hs_sat26Dmnm.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CWchar\x00");
            };
            var hs_sat26Dmnn = new $hs.Thunk();
            hs_sat26Dmnn.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Foreign.C.Types\x00");
            };
            var hs_sat26Dmnl = new $hs.Thunk();
            hs_sat26Dmnl.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26Dmnl, hs_sat26Dmnn, hs_sat26Dmnm);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26Dmnk, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCWchar.evaluateOnce = function () {
        if (hs_zdctypeOf1525uXOY.notEvaluated) {
            return hs_zdctypeOf1525uXOY.hscall();
        } else {
            return hs_zdctypeOf1525uXOY;
        }
    };
    hs_zdctypeOf1625uXP5.evaluate = function (hs_ds26Dmlr) {
        var hs_sat26Dmno = new $hs.Thunk();
        hs_sat26Dmno.evaluateOnce = function () {
            var hs_sat26Dmnq = new $hs.Thunk();
            hs_sat26Dmnq.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CSigAtomic\x00");
            };
            var hs_sat26Dmnr = new $hs.Thunk();
            hs_sat26Dmnr.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Foreign.C.Types\x00");
            };
            var hs_sat26Dmnp = new $hs.Thunk();
            hs_sat26Dmnp.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26Dmnp, hs_sat26Dmnr, hs_sat26Dmnq);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26Dmno, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCSigAtomic.evaluateOnce = function () {
        if (hs_zdctypeOf1625uXP5.notEvaluated) {
            return hs_zdctypeOf1625uXP5.hscall();
        } else {
            return hs_zdctypeOf1625uXP5;
        }
    };
    hs_zdctypeOf1725uXPc.evaluate = function (hs_ds26Dmly) {
        var hs_sat26Dmns = new $hs.Thunk();
        hs_sat26Dmns.evaluateOnce = function () {
            var hs_sat26Dmnu = new $hs.Thunk();
            hs_sat26Dmnu.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CClock\x00");
            };
            var hs_sat26Dmnv = new $hs.Thunk();
            hs_sat26Dmnv.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Foreign.C.Types\x00");
            };
            var hs_sat26Dmnt = new $hs.Thunk();
            hs_sat26Dmnt.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26Dmnt, hs_sat26Dmnv, hs_sat26Dmnu);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26Dmns, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCClock.evaluateOnce = function () {
        if (hs_zdctypeOf1725uXPc.notEvaluated) {
            return hs_zdctypeOf1725uXPc.hscall();
        } else {
            return hs_zdctypeOf1725uXPc;
        }
    };
    hs_zdctypeOf1825uXPj.evaluate = function (hs_ds26DmlF) {
        var hs_sat26Dmnw = new $hs.Thunk();
        hs_sat26Dmnw.evaluateOnce = function () {
            var hs_sat26Dmny = new $hs.Thunk();
            hs_sat26Dmny.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CTime\x00");
            };
            var hs_sat26Dmnz = new $hs.Thunk();
            hs_sat26Dmnz.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Foreign.C.Types\x00");
            };
            var hs_sat26Dmnx = new $hs.Thunk();
            hs_sat26Dmnx.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26Dmnx, hs_sat26Dmnz, hs_sat26Dmny);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26Dmnw, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCTime.evaluateOnce = function () {
        if (hs_zdctypeOf1825uXPj.notEvaluated) {
            return hs_zdctypeOf1825uXPj.hscall();
        } else {
            return hs_zdctypeOf1825uXPj;
        }
    };
    hs_zdctypeOf1925uXPq.evaluate = function (hs_ds26DmlM) {
        var hs_sat26DmnA = new $hs.Thunk();
        hs_sat26DmnA.evaluateOnce = function () {
            var hs_sat26DmnC = new $hs.Thunk();
            hs_sat26DmnC.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CUSeconds\x00");
            };
            var hs_sat26DmnD = new $hs.Thunk();
            hs_sat26DmnD.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Foreign.C.Types\x00");
            };
            var hs_sat26DmnB = new $hs.Thunk();
            hs_sat26DmnB.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26DmnB, hs_sat26DmnD, hs_sat26DmnC);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26DmnA, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCUSeconds.evaluateOnce = function () {
        if (hs_zdctypeOf1925uXPq.notEvaluated) {
            return hs_zdctypeOf1925uXPq.hscall();
        } else {
            return hs_zdctypeOf1925uXPq;
        }
    };
    hs_zdctypeOf2025uXPx.evaluate = function (hs_ds26DmlT) {
        var hs_sat26DmnE = new $hs.Thunk();
        hs_sat26DmnE.evaluateOnce = function () {
            var hs_sat26DmnG = new $hs.Thunk();
            hs_sat26DmnG.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CSUSeconds\x00");
            };
            var hs_sat26DmnH = new $hs.Thunk();
            hs_sat26DmnH.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Foreign.C.Types\x00");
            };
            var hs_sat26DmnF = new $hs.Thunk();
            hs_sat26DmnF.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26DmnF, hs_sat26DmnH, hs_sat26DmnG);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26DmnE, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCSUSeconds.evaluateOnce = function () {
        if (hs_zdctypeOf2025uXPx.notEvaluated) {
            return hs_zdctypeOf2025uXPx.hscall();
        } else {
            return hs_zdctypeOf2025uXPx;
        }
    };
    hs_zdctypeOf2125uXPE.evaluate = function (hs_ds26Dmm0) {
        var hs_sat26DmnI = new $hs.Thunk();
        hs_sat26DmnI.evaluateOnce = function () {
            var hs_sat26DmnK = new $hs.Thunk();
            hs_sat26DmnK.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CIntPtr\x00");
            };
            var hs_sat26DmnL = new $hs.Thunk();
            hs_sat26DmnL.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Foreign.C.Types\x00");
            };
            var hs_sat26DmnJ = new $hs.Thunk();
            hs_sat26DmnJ.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26DmnJ, hs_sat26DmnL, hs_sat26DmnK);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26DmnI, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCIntPtr.evaluateOnce = function () {
        if (hs_zdctypeOf2125uXPE.notEvaluated) {
            return hs_zdctypeOf2125uXPE.hscall();
        } else {
            return hs_zdctypeOf2125uXPE;
        }
    };
    hs_zdctypeOf2225uXPL.evaluate = function (hs_ds26Dmm7) {
        var hs_sat26DmnM = new $hs.Thunk();
        hs_sat26DmnM.evaluateOnce = function () {
            var hs_sat26DmnO = new $hs.Thunk();
            hs_sat26DmnO.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CUIntPtr\x00");
            };
            var hs_sat26DmnP = new $hs.Thunk();
            hs_sat26DmnP.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Foreign.C.Types\x00");
            };
            var hs_sat26DmnN = new $hs.Thunk();
            hs_sat26DmnN.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26DmnN, hs_sat26DmnP, hs_sat26DmnO);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26DmnM, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCUIntPtr.evaluateOnce = function () {
        if (hs_zdctypeOf2225uXPL.notEvaluated) {
            return hs_zdctypeOf2225uXPL.hscall();
        } else {
            return hs_zdctypeOf2225uXPL;
        }
    };
    hs_zdctypeOf2325uXPS.evaluate = function (hs_ds26Dmme) {
        var hs_sat26DmnQ = new $hs.Thunk();
        hs_sat26DmnQ.evaluateOnce = function () {
            var hs_sat26DmnS = new $hs.Thunk();
            hs_sat26DmnS.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CIntMax\x00");
            };
            var hs_sat26DmnT = new $hs.Thunk();
            hs_sat26DmnT.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Foreign.C.Types\x00");
            };
            var hs_sat26DmnR = new $hs.Thunk();
            hs_sat26DmnR.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26DmnR, hs_sat26DmnT, hs_sat26DmnS);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26DmnQ, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCIntMax.evaluateOnce = function () {
        if (hs_zdctypeOf2325uXPS.notEvaluated) {
            return hs_zdctypeOf2325uXPS.hscall();
        } else {
            return hs_zdctypeOf2325uXPS;
        }
    };
    hs_zdctypeOf2425uXPZ.evaluate = function (hs_ds26Dmml) {
        var hs_sat26DmnU = new $hs.Thunk();
        hs_sat26DmnU.evaluateOnce = function () {
            var hs_sat26DmnW = new $hs.Thunk();
            hs_sat26DmnW.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CUIntMax\x00");
            };
            var hs_sat26DmnX = new $hs.Thunk();
            hs_sat26DmnX.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Foreign.C.Types\x00");
            };
            var hs_sat26DmnV = new $hs.Thunk();
            hs_sat26DmnV.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26DmnV, hs_sat26DmnX, hs_sat26DmnW);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26DmnU, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCUIntMax.evaluateOnce = function () {
        if (hs_zdctypeOf2425uXPZ.notEvaluated) {
            return hs_zdctypeOf2425uXPZ.hscall();
        } else {
            return hs_zdctypeOf2425uXPZ;
        }
    };
    this.hs_CUIntMax.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.ForeignziCziTypes.hs_CUIntMax.hscall(hs_eta1cW6l3);
    };
    this.hs_CIntMax.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.ForeignziCziTypes.hs_CIntMax.hscall(hs_eta1cW6l3);
    };
    this.hs_CUIntPtr.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.ForeignziCziTypes.hs_CUIntPtr.hscall(hs_eta1cW6l3);
    };
    this.hs_CIntPtr.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.ForeignziCziTypes.hs_CIntPtr.hscall(hs_eta1cW6l3);
    };
    this.hs_CJmpBuf.data = [];
    this.hs_CFpos.data = [];
    this.hs_CFile.data = [];
    this.hs_CSUSeconds.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.ForeignziCziTypes.hs_CSUSeconds.hscall(hs_eta1cW6l3);
    };
    this.hs_CUSeconds.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.ForeignziCziTypes.hs_CUSeconds.hscall(hs_eta1cW6l3);
    };
    this.hs_CTime.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.ForeignziCziTypes.hs_CTime.hscall(hs_eta1cW6l3);
    };
    this.hs_CClock.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.ForeignziCziTypes.hs_CClock.hscall(hs_eta1cW6l3);
    };
    this.hs_CSigAtomic.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.ForeignziCziTypes.hs_CSigAtomic.hscall(hs_eta1cW6l3);
    };
    this.hs_CWchar.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.ForeignziCziTypes.hs_CWchar.hscall(hs_eta1cW6l3);
    };
    this.hs_CSizze.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.ForeignziCziTypes.hs_CSizze.hscall(hs_eta1cW6l3);
    };
    this.hs_CPtrdiff.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.ForeignziCziTypes.hs_CPtrdiff.hscall(hs_eta1cW6l3);
    };
    this.hs_CDouble.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.ForeignziCziTypes.hs_CDouble.hscall(hs_eta1cW6l3);
    };
    this.hs_CFloat.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.ForeignziCziTypes.hs_CFloat.hscall(hs_eta1cW6l3);
    };
    this.hs_CULLong.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.ForeignziCziTypes.hs_CULLong.hscall(hs_eta1cW6l3);
    };
    this.hs_CLLong.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.ForeignziCziTypes.hs_CLLong.hscall(hs_eta1cW6l3);
    };
    this.hs_CULong.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.ForeignziCziTypes.hs_CULong.hscall(hs_eta1cW6l3);
    };
    this.hs_CLong.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.ForeignziCziTypes.hs_CLong.hscall(hs_eta1cW6l3);
    };
    this.hs_CUInt.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.ForeignziCziTypes.hs_CUInt.hscall(hs_eta1cW6l3);
    };
    this.hs_CInt.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.ForeignziCziTypes.hs_CInt.hscall(hs_eta1cW6l3);
    };
    this.hs_CUShort.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.ForeignziCziTypes.hs_CUShort.hscall(hs_eta1cW6l3);
    };
    this.hs_CShort.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.ForeignziCziTypes.hs_CShort.hscall(hs_eta1cW6l3);
    };
    this.hs_CUChar.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.ForeignziCziTypes.hs_CUChar.hscall(hs_eta1cW6l3);
    };
    this.hs_CSChar.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.ForeignziCziTypes.hs_CSChar.hscall(hs_eta1cW6l3);
    };
    this.hs_CChar.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.ForeignziCziTypes.hs_CChar.hscall(hs_eta1cW6l3);
    };
};

$hs.modules.ForeignziCziTypes = new $hs.Module();
$hs.modules.ForeignziCziTypes.dependencies = ["GHC.Types", "GHC.Base", "GHC.Enum", "GHC.Num", "GHC.Real", "GHC.Float", "GHC.Show", "Data.Typeable", "GHC.Classes", "GHC.Int", "GHC.Read", "GHC.Word", "Data.Bits", "Foreign.Storable"];
$hs.modules.ForeignziCziTypes.initBeforeDependencies = function () {
    this.hs_zdfReadCChar = new $hs.Data(1);
    this.hs_zdfShowCChar = new $hs.Data(1);
    this.hs_zdfTypeableCChar = new $hs.Thunk();
    this.hs_zdfReadCSChar = new $hs.Data(1);
    this.hs_zdfShowCSChar = new $hs.Data(1);
    this.hs_zdfTypeableCSChar = new $hs.Thunk();
    this.hs_zdfReadCUChar = new $hs.Data(1);
    this.hs_zdfShowCUChar = new $hs.Data(1);
    this.hs_zdfTypeableCUChar = new $hs.Thunk();
    this.hs_zdfReadCShort = new $hs.Data(1);
    this.hs_zdfShowCShort = new $hs.Data(1);
    this.hs_zdfTypeableCShort = new $hs.Thunk();
    this.hs_zdfReadCUShort = new $hs.Data(1);
    this.hs_zdfShowCUShort = new $hs.Data(1);
    this.hs_zdfTypeableCUShort = new $hs.Thunk();
    this.hs_zdfReadCInt = new $hs.Data(1);
    this.hs_zdfShowCInt = new $hs.Data(1);
    this.hs_zdfTypeableCInt = new $hs.Thunk();
    this.hs_zdfReadCUInt = new $hs.Data(1);
    this.hs_zdfShowCUInt = new $hs.Data(1);
    this.hs_zdfTypeableCUInt = new $hs.Thunk();
    this.hs_zdfReadCLong = new $hs.Data(1);
    this.hs_zdfShowCLong = new $hs.Data(1);
    this.hs_zdfTypeableCLong = new $hs.Thunk();
    this.hs_zdfReadCULong = new $hs.Data(1);
    this.hs_zdfShowCULong = new $hs.Data(1);
    this.hs_zdfTypeableCULong = new $hs.Thunk();
    this.hs_zdfReadCLLong = new $hs.Data(1);
    this.hs_zdfShowCLLong = new $hs.Data(1);
    this.hs_zdfTypeableCLLong = new $hs.Thunk();
    this.hs_zdfReadCULLong = new $hs.Data(1);
    this.hs_zdfShowCULLong = new $hs.Data(1);
    this.hs_zdfTypeableCULLong = new $hs.Thunk();
    this.hs_zdfReadCFloat = new $hs.Data(1);
    this.hs_zdfShowCFloat = new $hs.Data(1);
    this.hs_zdfTypeableCFloat = new $hs.Thunk();
    this.hs_zdfReadCDouble = new $hs.Data(1);
    this.hs_zdfShowCDouble = new $hs.Data(1);
    this.hs_zdfTypeableCDouble = new $hs.Thunk();
    this.hs_zdfReadCPtrdiff = new $hs.Data(1);
    this.hs_zdfShowCPtrdiff = new $hs.Data(1);
    this.hs_zdfTypeableCPtrdiff = new $hs.Thunk();
    this.hs_zdfReadCSizze = new $hs.Data(1);
    this.hs_zdfShowCSizze = new $hs.Data(1);
    this.hs_zdfTypeableCSizze = new $hs.Thunk();
    this.hs_zdfReadCWchar = new $hs.Data(1);
    this.hs_zdfShowCWchar = new $hs.Data(1);
    this.hs_zdfTypeableCWchar = new $hs.Thunk();
    this.hs_zdfReadCSigAtomic = new $hs.Data(1);
    this.hs_zdfShowCSigAtomic = new $hs.Data(1);
    this.hs_zdfTypeableCSigAtomic = new $hs.Thunk();
    this.hs_zdfReadCClock = new $hs.Data(1);
    this.hs_zdfShowCClock = new $hs.Data(1);
    this.hs_zdfTypeableCClock = new $hs.Thunk();
    this.hs_zdfReadCTime = new $hs.Data(1);
    this.hs_zdfShowCTime = new $hs.Data(1);
    this.hs_zdfTypeableCTime = new $hs.Thunk();
    this.hs_zdfReadCIntPtr = new $hs.Data(1);
    this.hs_zdfShowCIntPtr = new $hs.Data(1);
    this.hs_zdfTypeableCIntPtr = new $hs.Thunk();
    this.hs_zdfReadCUIntPtr = new $hs.Data(1);
    this.hs_zdfShowCUIntPtr = new $hs.Data(1);
    this.hs_zdfTypeableCUIntPtr = new $hs.Thunk();
    this.hs_zdfReadCIntMax = new $hs.Data(1);
    this.hs_zdfShowCIntMax = new $hs.Data(1);
    this.hs_zdfTypeableCIntMax = new $hs.Thunk();
    this.hs_zdfReadCUIntMax = new $hs.Data(1);
    this.hs_zdfShowCUIntMax = new $hs.Data(1);
    this.hs_zdfTypeableCUIntMax = new $hs.Thunk();
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
    this.hs_CUIntMax = new $hs.Func(1);
    this.hs_CIntMax = new $hs.Func(1);
    this.hs_CUIntPtr = new $hs.Func(1);
    this.hs_CIntPtr = new $hs.Func(1);
    this.hs_CJmpBuf = new $hs.Data(1);
    this.hs_CFpos = new $hs.Data(1);
    this.hs_CFile = new $hs.Data(1);
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
    this.hs_zdfTypeableCChar.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
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
    this.hs_zdfTypeableCSChar.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
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
    this.hs_zdfTypeableCUChar.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
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
    this.hs_zdfTypeableCShort.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
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
    this.hs_zdfTypeableCUShort.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
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
    this.hs_zdfTypeableCInt.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
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
    this.hs_zdfTypeableCUInt.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
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
    this.hs_zdfTypeableCLong.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
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
    this.hs_zdfTypeableCULong.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
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
    this.hs_zdfTypeableCLLong.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
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
    this.hs_zdfTypeableCULLong.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
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
    this.hs_zdfTypeableCFloat.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
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
    this.hs_zdfTypeableCDouble.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
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
    this.hs_zdfTypeableCPtrdiff.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
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
    this.hs_zdfTypeableCSizze.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
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
    this.hs_zdfTypeableCWchar.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
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
    this.hs_zdfTypeableCSigAtomic.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
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
    this.hs_zdfTypeableCClock.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
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
    this.hs_zdfTypeableCTime.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
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
    this.hs_zdfTypeableCIntPtr.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
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
    this.hs_zdfTypeableCUIntPtr.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
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
    this.hs_zdfTypeableCIntMax.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
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
    this.hs_zdfTypeableCUIntMax.evaluateOnce = function () {
        $hs.modules.ForeignziCziTypes.loadDependencies();
        return this.evaluateOnce();
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
    var hs_sat26DL2B = new $hs.Thunk();
    var hs_tyConCUIntMax25sEQC = new $hs.Thunk();
    var hs_sat26DL2C = new $hs.Thunk();
    var hs_tyConCIntMax25sEQA = new $hs.Thunk();
    var hs_sat26DL2D = new $hs.Thunk();
    var hs_tyConCUIntPtr25sEQy = new $hs.Thunk();
    var hs_sat26DL2E = new $hs.Thunk();
    var hs_tyConCIntPtr25sEQw = new $hs.Thunk();
    var hs_sat26DL2F = new $hs.Thunk();
    var hs_tyConCTime25sEQu = new $hs.Thunk();
    var hs_sat26DL2G = new $hs.Thunk();
    var hs_tyConCClock25sEQs = new $hs.Thunk();
    var hs_sat26DL2H = new $hs.Thunk();
    var hs_tyConCSigAtomic25sEQq = new $hs.Thunk();
    var hs_sat26DL2I = new $hs.Thunk();
    var hs_tyConCWchar25sEQo = new $hs.Thunk();
    var hs_sat26DL2J = new $hs.Thunk();
    var hs_tyConCSizze25sEQm = new $hs.Thunk();
    var hs_sat26DL2K = new $hs.Thunk();
    var hs_tyConCPtrdiff25sEQk = new $hs.Thunk();
    var hs_sat26DL2L = new $hs.Thunk();
    var hs_tyConCDouble25sEQi = new $hs.Thunk();
    var hs_sat26DL2M = new $hs.Thunk();
    var hs_tyConCFloat25sEQg = new $hs.Thunk();
    var hs_sat26DL2N = new $hs.Thunk();
    var hs_tyConCULLong25sEQe = new $hs.Thunk();
    var hs_sat26DL2O = new $hs.Thunk();
    var hs_tyConCLLong25sEQc = new $hs.Thunk();
    var hs_sat26DL2P = new $hs.Thunk();
    var hs_tyConCULong25sEQa = new $hs.Thunk();
    var hs_sat26DL2Q = new $hs.Thunk();
    var hs_tyConCLong25sEQ8 = new $hs.Thunk();
    var hs_sat26DL2R = new $hs.Thunk();
    var hs_tyConCUInt25sEQ6 = new $hs.Thunk();
    var hs_sat26DL2S = new $hs.Thunk();
    var hs_tyConCInt25sEQ4 = new $hs.Thunk();
    var hs_sat26DL2T = new $hs.Thunk();
    var hs_tyConCUShort25sEQ2 = new $hs.Thunk();
    var hs_sat26DL2U = new $hs.Thunk();
    var hs_tyConCShort25sEQ0 = new $hs.Thunk();
    var hs_sat26DL2V = new $hs.Thunk();
    var hs_tyConCUChar25sEPY = new $hs.Thunk();
    var hs_sat26DL2W = new $hs.Thunk();
    var hs_tyConCSChar25sEPW = new $hs.Thunk();
    var hs_sat26DL2X = new $hs.Thunk();
    var hs_tyConCChar25sEPU = new $hs.Thunk();
    var hs_a25vkXY = new $hs.Thunk();
    var hs_zdcreadList25vkY0 = new $hs.Thunk();
    var hs_a125vkY2 = new $hs.Thunk();
    var hs_zdcreadsPrec25vkY4 = new $hs.Thunk();
    var hs_zdcreadListPrec25vkY6 = new $hs.Thunk();
    var hs_zdcreadPrec25vkY8 = new $hs.Thunk();
    var hs_a225vkYa = new $hs.Thunk();
    var hs_zdcshowList25vkYc = new $hs.Thunk();
    var hs_a325vkYe = new $hs.Thunk();
    var hs_zdcshow25vkYg = new $hs.Thunk();
    var hs_a425vkYi = new $hs.Thunk();
    var hs_zdcshowsPrec25vkYk = new $hs.Thunk();
    var hs_zdctypeOf25vkYm = new $hs.Func(1);
    var hs_a525vkYq = new $hs.Thunk();
    var hs_zdcreadList125vkYs = new $hs.Thunk();
    var hs_a625vkYu = new $hs.Thunk();
    var hs_zdcreadsPrec125vkYw = new $hs.Thunk();
    var hs_zdcreadListPrec125vkYy = new $hs.Thunk();
    var hs_zdcreadPrec125vkYA = new $hs.Thunk();
    var hs_a725vkYC = new $hs.Thunk();
    var hs_zdcshowList125vkYE = new $hs.Thunk();
    var hs_a825vkYG = new $hs.Thunk();
    var hs_zdcshow125vkYI = new $hs.Thunk();
    var hs_a925vkYK = new $hs.Thunk();
    var hs_zdcshowsPrec125vkYM = new $hs.Thunk();
    var hs_zdctypeOf125vkYO = new $hs.Func(1);
    var hs_a1025vkYS = new $hs.Thunk();
    var hs_zdcreadList225vkYU = new $hs.Thunk();
    var hs_a1125vkYW = new $hs.Thunk();
    var hs_zdcreadsPrec225vkYY = new $hs.Thunk();
    var hs_zdcreadListPrec225vkZ0 = new $hs.Thunk();
    var hs_zdcreadPrec225vkZ2 = new $hs.Thunk();
    var hs_a1225vkZ4 = new $hs.Thunk();
    var hs_zdcshowList225vkZ6 = new $hs.Thunk();
    var hs_a1325vkZ8 = new $hs.Thunk();
    var hs_zdcshow225vkZa = new $hs.Thunk();
    var hs_a1425vkZc = new $hs.Thunk();
    var hs_zdcshowsPrec225vkZe = new $hs.Thunk();
    var hs_zdctypeOf225vkZg = new $hs.Func(1);
    var hs_a1525vkZk = new $hs.Thunk();
    var hs_zdcreadList325vkZm = new $hs.Thunk();
    var hs_a1625vkZo = new $hs.Thunk();
    var hs_zdcreadsPrec325vkZq = new $hs.Thunk();
    var hs_zdcreadListPrec325vkZs = new $hs.Thunk();
    var hs_zdcreadPrec325vkZu = new $hs.Thunk();
    var hs_a1725vkZw = new $hs.Thunk();
    var hs_zdcshowList325vkZy = new $hs.Thunk();
    var hs_a1825vkZA = new $hs.Thunk();
    var hs_zdcshow325vkZC = new $hs.Thunk();
    var hs_a1925vkZE = new $hs.Thunk();
    var hs_zdcshowsPrec325vkZG = new $hs.Thunk();
    var hs_zdctypeOf325vkZI = new $hs.Func(1);
    var hs_a2025vkZM = new $hs.Thunk();
    var hs_zdcreadList425vkZO = new $hs.Thunk();
    var hs_a2125vkZQ = new $hs.Thunk();
    var hs_zdcreadsPrec425vkZS = new $hs.Thunk();
    var hs_zdcreadListPrec425vkZU = new $hs.Thunk();
    var hs_zdcreadPrec425vkZW = new $hs.Thunk();
    var hs_a2225vkZY = new $hs.Thunk();
    var hs_zdcshowList425vl00 = new $hs.Thunk();
    var hs_a2325vl02 = new $hs.Thunk();
    var hs_zdcshow425vl04 = new $hs.Thunk();
    var hs_a2425vl06 = new $hs.Thunk();
    var hs_zdcshowsPrec425vl08 = new $hs.Thunk();
    var hs_zdctypeOf425vl0a = new $hs.Func(1);
    var hs_a2525vl0e = new $hs.Thunk();
    var hs_zdcreadList525vl0g = new $hs.Thunk();
    var hs_a2625vl0i = new $hs.Thunk();
    var hs_zdcreadsPrec525vl0k = new $hs.Thunk();
    var hs_zdcreadListPrec525vl0m = new $hs.Thunk();
    var hs_zdcreadPrec525vl0o = new $hs.Thunk();
    var hs_a2725vl0q = new $hs.Thunk();
    var hs_zdcshowList525vl0s = new $hs.Thunk();
    var hs_a2825vl0u = new $hs.Thunk();
    var hs_zdcshow525vl0w = new $hs.Thunk();
    var hs_a2925vl0y = new $hs.Thunk();
    var hs_zdcshowsPrec525vl0A = new $hs.Thunk();
    var hs_zdctypeOf525vl0C = new $hs.Func(1);
    var hs_a3025vl0G = new $hs.Thunk();
    var hs_zdcreadList625vl0I = new $hs.Thunk();
    var hs_a3125vl0K = new $hs.Thunk();
    var hs_zdcreadsPrec625vl0M = new $hs.Thunk();
    var hs_zdcreadListPrec625vl0O = new $hs.Thunk();
    var hs_zdcreadPrec625vl0Q = new $hs.Thunk();
    var hs_a3225vl0S = new $hs.Thunk();
    var hs_zdcshowList625vl0U = new $hs.Thunk();
    var hs_a3325vl0W = new $hs.Thunk();
    var hs_zdcshow625vl0Y = new $hs.Thunk();
    var hs_a3425vl10 = new $hs.Thunk();
    var hs_zdcshowsPrec625vl12 = new $hs.Thunk();
    var hs_zdctypeOf625vl14 = new $hs.Func(1);
    var hs_a3525vl18 = new $hs.Thunk();
    var hs_zdcreadList725vl1a = new $hs.Thunk();
    var hs_a3625vl1c = new $hs.Thunk();
    var hs_zdcreadsPrec725vl1e = new $hs.Thunk();
    var hs_zdcreadListPrec725vl1g = new $hs.Thunk();
    var hs_zdcreadPrec725vl1i = new $hs.Thunk();
    var hs_a3725vl1k = new $hs.Thunk();
    var hs_zdcshowList725vl1m = new $hs.Thunk();
    var hs_a3825vl1o = new $hs.Thunk();
    var hs_zdcshow725vl1q = new $hs.Thunk();
    var hs_a3925vl1s = new $hs.Thunk();
    var hs_zdcshowsPrec725vl1u = new $hs.Thunk();
    var hs_zdctypeOf725vl1w = new $hs.Func(1);
    var hs_a4025vl1A = new $hs.Thunk();
    var hs_zdcreadList825vl1C = new $hs.Thunk();
    var hs_a4125vl1E = new $hs.Thunk();
    var hs_zdcreadsPrec825vl1G = new $hs.Thunk();
    var hs_zdcreadListPrec825vl1I = new $hs.Thunk();
    var hs_zdcreadPrec825vl1K = new $hs.Thunk();
    var hs_a4225vl1M = new $hs.Thunk();
    var hs_zdcshowList825vl1O = new $hs.Thunk();
    var hs_a4325vl1Q = new $hs.Thunk();
    var hs_zdcshow825vl1S = new $hs.Thunk();
    var hs_a4425vl1U = new $hs.Thunk();
    var hs_zdcshowsPrec825vl1W = new $hs.Thunk();
    var hs_zdctypeOf825vl1Y = new $hs.Func(1);
    var hs_a4525vl22 = new $hs.Thunk();
    var hs_zdcreadList925vl24 = new $hs.Thunk();
    var hs_a4625vl26 = new $hs.Thunk();
    var hs_zdcreadsPrec925vl28 = new $hs.Thunk();
    var hs_zdcreadListPrec925vl2a = new $hs.Thunk();
    var hs_zdcreadPrec925vl2c = new $hs.Thunk();
    var hs_a4725vl2e = new $hs.Thunk();
    var hs_zdcshowList925vl2g = new $hs.Thunk();
    var hs_a4825vl2i = new $hs.Thunk();
    var hs_zdcshow925vl2k = new $hs.Thunk();
    var hs_a4925vl2m = new $hs.Thunk();
    var hs_zdcshowsPrec925vl2o = new $hs.Thunk();
    var hs_zdctypeOf925vl2q = new $hs.Func(1);
    var hs_a5025vl2u = new $hs.Thunk();
    var hs_zdcreadList1025vl2w = new $hs.Thunk();
    var hs_a5125vl2y = new $hs.Thunk();
    var hs_zdcreadsPrec1025vl2A = new $hs.Thunk();
    var hs_zdcreadListPrec1025vl2C = new $hs.Thunk();
    var hs_zdcreadPrec1025vl2E = new $hs.Thunk();
    var hs_a5225vl2G = new $hs.Thunk();
    var hs_zdcshowList1025vl2I = new $hs.Thunk();
    var hs_a5325vl2K = new $hs.Thunk();
    var hs_zdcshow1025vl2M = new $hs.Thunk();
    var hs_a5425vl2O = new $hs.Thunk();
    var hs_zdcshowsPrec1025vl2Q = new $hs.Thunk();
    var hs_zdctypeOf1025vl2S = new $hs.Func(1);
    var hs_a5525vl2W = new $hs.Thunk();
    var hs_zdcreadList1125vl2Y = new $hs.Thunk();
    var hs_a5625vl30 = new $hs.Thunk();
    var hs_zdcreadsPrec1125vl32 = new $hs.Thunk();
    var hs_zdcreadListPrec1125vl34 = new $hs.Thunk();
    var hs_zdcreadPrec1125vl36 = new $hs.Thunk();
    var hs_a5725vl38 = new $hs.Thunk();
    var hs_zdcshowList1125vl3a = new $hs.Thunk();
    var hs_a5825vl3c = new $hs.Thunk();
    var hs_zdcshow1125vl3e = new $hs.Thunk();
    var hs_a5925vl3g = new $hs.Thunk();
    var hs_zdcshowsPrec1125vl3i = new $hs.Thunk();
    var hs_zdctypeOf1125vl3k = new $hs.Func(1);
    var hs_a6025vl3o = new $hs.Thunk();
    var hs_zdcreadList1225vl3q = new $hs.Thunk();
    var hs_a6125vl3s = new $hs.Thunk();
    var hs_zdcreadsPrec1225vl3u = new $hs.Thunk();
    var hs_zdcreadListPrec1225vl3w = new $hs.Thunk();
    var hs_zdcreadPrec1225vl3y = new $hs.Thunk();
    var hs_a6225vl3A = new $hs.Thunk();
    var hs_zdcshowList1225vl3C = new $hs.Thunk();
    var hs_a6325vl3E = new $hs.Thunk();
    var hs_zdcshow1225vl3G = new $hs.Thunk();
    var hs_a6425vl3I = new $hs.Thunk();
    var hs_zdcshowsPrec1225vl3K = new $hs.Thunk();
    var hs_zdctypeOf1225vl3M = new $hs.Func(1);
    var hs_a6525vl3Q = new $hs.Thunk();
    var hs_zdcreadList1325vl3S = new $hs.Thunk();
    var hs_a6625vl3U = new $hs.Thunk();
    var hs_zdcreadsPrec1325vl3W = new $hs.Thunk();
    var hs_zdcreadListPrec1325vl3Y = new $hs.Thunk();
    var hs_zdcreadPrec1325vl40 = new $hs.Thunk();
    var hs_a6725vl42 = new $hs.Thunk();
    var hs_zdcshowList1325vl44 = new $hs.Thunk();
    var hs_a6825vl46 = new $hs.Thunk();
    var hs_zdcshow1325vl48 = new $hs.Thunk();
    var hs_a6925vl4a = new $hs.Thunk();
    var hs_zdcshowsPrec1325vl4c = new $hs.Thunk();
    var hs_zdctypeOf1325vl4e = new $hs.Func(1);
    var hs_a7025vl4i = new $hs.Thunk();
    var hs_zdcreadList1425vl4k = new $hs.Thunk();
    var hs_a7125vl4m = new $hs.Thunk();
    var hs_zdcreadsPrec1425vl4o = new $hs.Thunk();
    var hs_zdcreadListPrec1425vl4q = new $hs.Thunk();
    var hs_zdcreadPrec1425vl4s = new $hs.Thunk();
    var hs_a7225vl4u = new $hs.Thunk();
    var hs_zdcshowList1425vl4w = new $hs.Thunk();
    var hs_a7325vl4y = new $hs.Thunk();
    var hs_zdcshow1425vl4A = new $hs.Thunk();
    var hs_a7425vl4C = new $hs.Thunk();
    var hs_zdcshowsPrec1425vl4E = new $hs.Thunk();
    var hs_zdctypeOf1425vl4G = new $hs.Func(1);
    var hs_a7525vl4K = new $hs.Thunk();
    var hs_zdcreadList1525vl4M = new $hs.Thunk();
    var hs_a7625vl4O = new $hs.Thunk();
    var hs_zdcreadsPrec1525vl4Q = new $hs.Thunk();
    var hs_zdcreadListPrec1525vl4S = new $hs.Thunk();
    var hs_zdcreadPrec1525vl4U = new $hs.Thunk();
    var hs_a7725vl4W = new $hs.Thunk();
    var hs_zdcshowList1525vl4Y = new $hs.Thunk();
    var hs_a7825vl50 = new $hs.Thunk();
    var hs_zdcshow1525vl52 = new $hs.Thunk();
    var hs_a7925vl54 = new $hs.Thunk();
    var hs_zdcshowsPrec1525vl56 = new $hs.Thunk();
    var hs_zdctypeOf1525vl58 = new $hs.Func(1);
    var hs_a8025vl5c = new $hs.Thunk();
    var hs_zdcreadList1625vl5e = new $hs.Thunk();
    var hs_a8125vl5g = new $hs.Thunk();
    var hs_zdcreadsPrec1625vl5i = new $hs.Thunk();
    var hs_zdcreadListPrec1625vl5k = new $hs.Thunk();
    var hs_zdcreadPrec1625vl5m = new $hs.Thunk();
    var hs_a8225vl5o = new $hs.Thunk();
    var hs_zdcshowList1625vl5q = new $hs.Thunk();
    var hs_a8325vl5s = new $hs.Thunk();
    var hs_zdcshow1625vl5u = new $hs.Thunk();
    var hs_a8425vl5w = new $hs.Thunk();
    var hs_zdcshowsPrec1625vl5y = new $hs.Thunk();
    var hs_zdctypeOf1625vl5A = new $hs.Func(1);
    var hs_a8525vl5E = new $hs.Thunk();
    var hs_zdcreadList1725vl5G = new $hs.Thunk();
    var hs_a8625vl5I = new $hs.Thunk();
    var hs_zdcreadsPrec1725vl5K = new $hs.Thunk();
    var hs_zdcreadListPrec1725vl5M = new $hs.Thunk();
    var hs_zdcreadPrec1725vl5O = new $hs.Thunk();
    var hs_a8725vl5Q = new $hs.Thunk();
    var hs_zdcshowList1725vl5S = new $hs.Thunk();
    var hs_a8825vl5U = new $hs.Thunk();
    var hs_zdcshow1725vl5W = new $hs.Thunk();
    var hs_a8925vl5Y = new $hs.Thunk();
    var hs_zdcshowsPrec1725vl60 = new $hs.Thunk();
    var hs_zdctypeOf1725vl62 = new $hs.Func(1);
    var hs_a9025vl66 = new $hs.Thunk();
    var hs_zdcreadList1825vl68 = new $hs.Thunk();
    var hs_a9125vl6a = new $hs.Thunk();
    var hs_zdcreadsPrec1825vl6c = new $hs.Thunk();
    var hs_zdcreadListPrec1825vl6e = new $hs.Thunk();
    var hs_zdcreadPrec1825vl6g = new $hs.Thunk();
    var hs_a9225vl6i = new $hs.Thunk();
    var hs_zdcshowList1825vl6k = new $hs.Thunk();
    var hs_a9325vl6m = new $hs.Thunk();
    var hs_zdcshow1825vl6o = new $hs.Thunk();
    var hs_a9425vl6q = new $hs.Thunk();
    var hs_zdcshowsPrec1825vl6s = new $hs.Thunk();
    var hs_zdctypeOf1825vl6u = new $hs.Func(1);
    var hs_a9525vl6y = new $hs.Thunk();
    var hs_zdcreadList1925vl6A = new $hs.Thunk();
    var hs_a9625vl6C = new $hs.Thunk();
    var hs_zdcreadsPrec1925vl6E = new $hs.Thunk();
    var hs_zdcreadListPrec1925vl6G = new $hs.Thunk();
    var hs_zdcreadPrec1925vl6I = new $hs.Thunk();
    var hs_a9725vl6K = new $hs.Thunk();
    var hs_zdcshowList1925vl6M = new $hs.Thunk();
    var hs_a9825vl6O = new $hs.Thunk();
    var hs_zdcshow1925vl6Q = new $hs.Thunk();
    var hs_a9925vl6S = new $hs.Thunk();
    var hs_zdcshowsPrec1925vl6U = new $hs.Thunk();
    var hs_zdctypeOf1925vl6W = new $hs.Func(1);
    var hs_a10025vl70 = new $hs.Thunk();
    var hs_zdcreadList2025vl72 = new $hs.Thunk();
    var hs_a10125vl74 = new $hs.Thunk();
    var hs_zdcreadsPrec2025vl76 = new $hs.Thunk();
    var hs_zdcreadListPrec2025vl78 = new $hs.Thunk();
    var hs_zdcreadPrec2025vl7a = new $hs.Thunk();
    var hs_a10225vl7c = new $hs.Thunk();
    var hs_zdcshowList2025vl7e = new $hs.Thunk();
    var hs_a10325vl7g = new $hs.Thunk();
    var hs_zdcshow2025vl7i = new $hs.Thunk();
    var hs_a10425vl7k = new $hs.Thunk();
    var hs_zdcshowsPrec2025vl7m = new $hs.Thunk();
    var hs_zdctypeOf2025vl7o = new $hs.Func(1);
    var hs_a10525vl7s = new $hs.Thunk();
    var hs_zdcreadList2125vl7u = new $hs.Thunk();
    var hs_a10625vl7w = new $hs.Thunk();
    var hs_zdcreadsPrec2125vl7y = new $hs.Thunk();
    var hs_zdcreadListPrec2125vl7A = new $hs.Thunk();
    var hs_zdcreadPrec2125vl7C = new $hs.Thunk();
    var hs_a10725vl7E = new $hs.Thunk();
    var hs_zdcshowList2125vl7G = new $hs.Thunk();
    var hs_a10825vl7I = new $hs.Thunk();
    var hs_zdcshow2125vl7K = new $hs.Thunk();
    var hs_a10925vl7M = new $hs.Thunk();
    var hs_zdcshowsPrec2125vl7O = new $hs.Thunk();
    var hs_zdctypeOf2125vl7Q = new $hs.Func(1);
    var hs_a11025vl7U = new $hs.Thunk();
    var hs_zdcreadList2225vl7W = new $hs.Thunk();
    var hs_a11125vl7Y = new $hs.Thunk();
    var hs_zdcreadsPrec2225vl80 = new $hs.Thunk();
    var hs_zdcreadListPrec2225vl82 = new $hs.Thunk();
    var hs_zdcreadPrec2225vl84 = new $hs.Thunk();
    var hs_a11225vl86 = new $hs.Thunk();
    var hs_zdcshowList2225vl88 = new $hs.Thunk();
    var hs_a11325vl8a = new $hs.Thunk();
    var hs_zdcshow2225vl8c = new $hs.Thunk();
    var hs_a11425vl8e = new $hs.Thunk();
    var hs_zdcshowsPrec2225vl8g = new $hs.Thunk();
    var hs_zdctypeOf2225vl8i = new $hs.Func(1);
    var hs_a11525vl8m = new $hs.Thunk();
    var hs_zdczizazi25vl8o = new $hs.Thunk();
    var hs_a11625vl8q = new $hs.Thunk();
    var hs_zdczizbzi25vl8s = new $hs.Thunk();
    var hs_a11725vl8u = new $hs.Thunk();
    var hs_zdcxor25vl8w = new $hs.Thunk();
    var hs_a11825vl8y = new $hs.Thunk();
    var hs_zdccomplement25vl8A = new $hs.Thunk();
    var hs_a11925vl8C = new $hs.Thunk();
    var hs_zdcshift25vl8E = new $hs.Thunk();
    var hs_a12025vl8G = new $hs.Thunk();
    var hs_zdcrotate25vl8I = new $hs.Thunk();
    var hs_a12125vl8K = new $hs.Thunk();
    var hs_zdcbit25vl8M = new $hs.Thunk();
    var hs_a12225vl8O = new $hs.Thunk();
    var hs_zdcsetBit25vl8Q = new $hs.Thunk();
    var hs_a12325vl8S = new $hs.Thunk();
    var hs_zdcclearBit25vl8U = new $hs.Thunk();
    var hs_a12425vl8W = new $hs.Thunk();
    var hs_zdccomplementBit25vl8Y = new $hs.Thunk();
    var hs_a12525vl90 = new $hs.Thunk();
    var hs_zdctestBit25vl92 = new $hs.Thunk();
    var hs_a12625vl94 = new $hs.Thunk();
    var hs_zdcbitSizze25vl96 = new $hs.Thunk();
    var hs_a12725vl98 = new $hs.Thunk();
    var hs_zdcisSigned25vl9a = new $hs.Thunk();
    var hs_a12825vl9c = new $hs.Thunk();
    var hs_zdcshiftL25vl9e = new $hs.Thunk();
    var hs_a12925vl9g = new $hs.Thunk();
    var hs_zdcshiftR25vl9i = new $hs.Thunk();
    var hs_a13025vl9k = new $hs.Thunk();
    var hs_zdcrotateL25vl9m = new $hs.Thunk();
    var hs_a13125vl9o = new $hs.Thunk();
    var hs_zdcrotateR25vl9q = new $hs.Thunk();
    var hs_a13225vl9s = new $hs.Thunk();
    var hs_zdcquot25vl9u = new $hs.Thunk();
    var hs_a13325vl9w = new $hs.Thunk();
    var hs_zdcrem25vl9y = new $hs.Thunk();
    var hs_a13425vl9A = new $hs.Thunk();
    var hs_zdcdiv25vl9C = new $hs.Thunk();
    var hs_a13525vl9E = new $hs.Thunk();
    var hs_zdcmod25vl9G = new $hs.Thunk();
    var hs_a13625vl9I = new $hs.Thunk();
    var hs_zdcquotRem25vl9K = new $hs.Thunk();
    var hs_a13725vl9M = new $hs.Thunk();
    var hs_zdcdivMod25vl9O = new $hs.Thunk();
    var hs_a13825vl9Q = new $hs.Thunk();
    var hs_zdctoInteger25vl9S = new $hs.Thunk();
    var hs_a13925vl9U = new $hs.Thunk();
    var hs_zdcminBound25vl9W = new $hs.Thunk();
    var hs_a14025vl9Y = new $hs.Thunk();
    var hs_zdcmaxBound25vla0 = new $hs.Thunk();
    var hs_a14125vla2 = new $hs.Thunk();
    var hs_zdctoRational25vla4 = new $hs.Thunk();
    var hs_a14225vla6 = new $hs.Thunk();
    var hs_zdcsizzeOf25vla8 = new $hs.Thunk();
    var hs_a14325vlaa = new $hs.Thunk();
    var hs_zdcalignment25vlac = new $hs.Thunk();
    var hs_a14425vlae = new $hs.Thunk();
    var hs_zdcpeekElemOff25vlag = new $hs.Thunk();
    var hs_a14525vlai = new $hs.Thunk();
    var hs_zdcpokeElemOff25vlak = new $hs.Thunk();
    var hs_a14625vlam = new $hs.Thunk();
    var hs_zdcpeekByteOff25vlao = new $hs.Thunk();
    var hs_a14725vlaq = new $hs.Thunk();
    var hs_zdcpokeByteOff25vlas = new $hs.Thunk();
    var hs_a14825vlau = new $hs.Thunk();
    var hs_zdcpeek25vlaw = new $hs.Thunk();
    var hs_a14925vlay = new $hs.Thunk();
    var hs_zdcpoke25vlaA = new $hs.Thunk();
    var hs_a15025vlaC = new $hs.Thunk();
    var hs_zdcsucc25vlaE = new $hs.Thunk();
    var hs_a15125vlaG = new $hs.Thunk();
    var hs_zdcpred25vlaI = new $hs.Thunk();
    var hs_a15225vlaK = new $hs.Thunk();
    var hs_zdctoEnum25vlaM = new $hs.Thunk();
    var hs_a15325vlaO = new $hs.Thunk();
    var hs_zdcfromEnum25vlaQ = new $hs.Thunk();
    var hs_a15425vlaS = new $hs.Thunk();
    var hs_zdcenumFrom25vlaU = new $hs.Thunk();
    var hs_a15525vlaW = new $hs.Thunk();
    var hs_zdcenumFromThen25vlaY = new $hs.Thunk();
    var hs_a15625vlb0 = new $hs.Thunk();
    var hs_zdcenumFromTo25vlb2 = new $hs.Thunk();
    var hs_a15725vlb4 = new $hs.Thunk();
    var hs_zdcenumFromThenTo25vlb6 = new $hs.Thunk();
    var hs_a15825vlb8 = new $hs.Thunk();
    var hs_zdczp25vlba = new $hs.Thunk();
    var hs_a15925vlbc = new $hs.Thunk();
    var hs_zdczt25vlbe = new $hs.Thunk();
    var hs_a16025vlbg = new $hs.Thunk();
    var hs_zdczm25vlbi = new $hs.Thunk();
    var hs_a16125vlbk = new $hs.Thunk();
    var hs_zdcnegate25vlbm = new $hs.Thunk();
    var hs_a16225vlbo = new $hs.Thunk();
    var hs_zdcabs25vlbq = new $hs.Thunk();
    var hs_a16325vlbs = new $hs.Thunk();
    var hs_zdcsignum25vlbu = new $hs.Thunk();
    var hs_a16425vlbw = new $hs.Thunk();
    var hs_zdcfromInteger25vlby = new $hs.Thunk();
    var hs_a16525vlbA = new $hs.Thunk();
    var hs_zdccompare25vlbC = new $hs.Thunk();
    var hs_a16625vlbE = new $hs.Thunk();
    var hs_zdczl25vlbG = new $hs.Thunk();
    var hs_a16725vlbI = new $hs.Thunk();
    var hs_zdczgze25vlbK = new $hs.Thunk();
    var hs_a16825vlbM = new $hs.Thunk();
    var hs_zdczg25vlbO = new $hs.Thunk();
    var hs_a16925vlbQ = new $hs.Thunk();
    var hs_zdczlze25vlbS = new $hs.Thunk();
    var hs_a17025vlbU = new $hs.Thunk();
    var hs_zdcmax25vlbW = new $hs.Thunk();
    var hs_a17125vlbY = new $hs.Thunk();
    var hs_zdcmin25vlc0 = new $hs.Thunk();
    var hs_a17225vlc2 = new $hs.Thunk();
    var hs_zdczeze25vlc4 = new $hs.Thunk();
    var hs_a17325vlc6 = new $hs.Thunk();
    var hs_zdczsze25vlc8 = new $hs.Thunk();
    var hs_a17425vlca = new $hs.Thunk();
    var hs_zdczizazi125vlcc = new $hs.Thunk();
    var hs_a17525vlce = new $hs.Thunk();
    var hs_zdczizbzi125vlcg = new $hs.Thunk();
    var hs_a17625vlci = new $hs.Thunk();
    var hs_zdcxor125vlck = new $hs.Thunk();
    var hs_a17725vlcm = new $hs.Thunk();
    var hs_zdccomplement125vlco = new $hs.Thunk();
    var hs_a17825vlcq = new $hs.Thunk();
    var hs_zdcshift125vlcs = new $hs.Thunk();
    var hs_a17925vlcu = new $hs.Thunk();
    var hs_zdcrotate125vlcw = new $hs.Thunk();
    var hs_a18025vlcy = new $hs.Thunk();
    var hs_zdcbit125vlcA = new $hs.Thunk();
    var hs_a18125vlcC = new $hs.Thunk();
    var hs_zdcsetBit125vlcE = new $hs.Thunk();
    var hs_a18225vlcG = new $hs.Thunk();
    var hs_zdcclearBit125vlcI = new $hs.Thunk();
    var hs_a18325vlcK = new $hs.Thunk();
    var hs_zdccomplementBit125vlcM = new $hs.Thunk();
    var hs_a18425vlcO = new $hs.Thunk();
    var hs_zdctestBit125vlcQ = new $hs.Thunk();
    var hs_a18525vlcS = new $hs.Thunk();
    var hs_zdcbitSizze125vlcU = new $hs.Thunk();
    var hs_a18625vlcW = new $hs.Thunk();
    var hs_zdcisSigned125vlcY = new $hs.Thunk();
    var hs_a18725vld0 = new $hs.Thunk();
    var hs_zdcshiftL125vld2 = new $hs.Thunk();
    var hs_a18825vld4 = new $hs.Thunk();
    var hs_zdcshiftR125vld6 = new $hs.Thunk();
    var hs_a18925vld8 = new $hs.Thunk();
    var hs_zdcrotateL125vlda = new $hs.Thunk();
    var hs_a19025vldc = new $hs.Thunk();
    var hs_zdcrotateR125vlde = new $hs.Thunk();
    var hs_a19125vldg = new $hs.Thunk();
    var hs_zdcquot125vldi = new $hs.Thunk();
    var hs_a19225vldk = new $hs.Thunk();
    var hs_zdcrem125vldm = new $hs.Thunk();
    var hs_a19325vldo = new $hs.Thunk();
    var hs_zdcdiv125vldq = new $hs.Thunk();
    var hs_a19425vlds = new $hs.Thunk();
    var hs_zdcmod125vldu = new $hs.Thunk();
    var hs_a19525vldw = new $hs.Thunk();
    var hs_zdcquotRem125vldy = new $hs.Thunk();
    var hs_a19625vldA = new $hs.Thunk();
    var hs_zdcdivMod125vldC = new $hs.Thunk();
    var hs_a19725vldE = new $hs.Thunk();
    var hs_zdctoInteger125vldG = new $hs.Thunk();
    var hs_a19825vldI = new $hs.Thunk();
    var hs_zdcminBound125vldK = new $hs.Thunk();
    var hs_a19925vldM = new $hs.Thunk();
    var hs_zdcmaxBound125vldO = new $hs.Thunk();
    var hs_a20025vldQ = new $hs.Thunk();
    var hs_zdctoRational125vldS = new $hs.Thunk();
    var hs_a20125vldU = new $hs.Thunk();
    var hs_zdcsizzeOf125vldW = new $hs.Thunk();
    var hs_a20225vldY = new $hs.Thunk();
    var hs_zdcalignment125vle0 = new $hs.Thunk();
    var hs_a20325vle2 = new $hs.Thunk();
    var hs_zdcpeekElemOff125vle4 = new $hs.Thunk();
    var hs_a20425vle6 = new $hs.Thunk();
    var hs_zdcpokeElemOff125vle8 = new $hs.Thunk();
    var hs_a20525vlea = new $hs.Thunk();
    var hs_zdcpeekByteOff125vlec = new $hs.Thunk();
    var hs_a20625vlee = new $hs.Thunk();
    var hs_zdcpokeByteOff125vleg = new $hs.Thunk();
    var hs_a20725vlei = new $hs.Thunk();
    var hs_zdcpeek125vlek = new $hs.Thunk();
    var hs_a20825vlem = new $hs.Thunk();
    var hs_zdcpoke125vleo = new $hs.Thunk();
    var hs_a20925vleq = new $hs.Thunk();
    var hs_zdcsucc125vles = new $hs.Thunk();
    var hs_a21025vleu = new $hs.Thunk();
    var hs_zdcpred125vlew = new $hs.Thunk();
    var hs_a21125vley = new $hs.Thunk();
    var hs_zdctoEnum125vleA = new $hs.Thunk();
    var hs_a21225vleC = new $hs.Thunk();
    var hs_zdcfromEnum125vleE = new $hs.Thunk();
    var hs_a21325vleG = new $hs.Thunk();
    var hs_zdcenumFrom125vleI = new $hs.Thunk();
    var hs_a21425vleK = new $hs.Thunk();
    var hs_zdcenumFromThen125vleM = new $hs.Thunk();
    var hs_a21525vleO = new $hs.Thunk();
    var hs_zdcenumFromTo125vleQ = new $hs.Thunk();
    var hs_a21625vleS = new $hs.Thunk();
    var hs_zdcenumFromThenTo125vleU = new $hs.Thunk();
    var hs_a21725vleW = new $hs.Thunk();
    var hs_zdczp125vleY = new $hs.Thunk();
    var hs_a21825vlf0 = new $hs.Thunk();
    var hs_zdczt125vlf2 = new $hs.Thunk();
    var hs_a21925vlf4 = new $hs.Thunk();
    var hs_zdczm125vlf6 = new $hs.Thunk();
    var hs_a22025vlf8 = new $hs.Thunk();
    var hs_zdcnegate125vlfa = new $hs.Thunk();
    var hs_a22125vlfc = new $hs.Thunk();
    var hs_zdcabs125vlfe = new $hs.Thunk();
    var hs_a22225vlfg = new $hs.Thunk();
    var hs_zdcsignum125vlfi = new $hs.Thunk();
    var hs_a22325vlfk = new $hs.Thunk();
    var hs_zdcfromInteger125vlfm = new $hs.Thunk();
    var hs_a22425vlfo = new $hs.Thunk();
    var hs_zdccompare125vlfq = new $hs.Thunk();
    var hs_a22525vlfs = new $hs.Thunk();
    var hs_zdczl125vlfu = new $hs.Thunk();
    var hs_a22625vlfw = new $hs.Thunk();
    var hs_zdczgze125vlfy = new $hs.Thunk();
    var hs_a22725vlfA = new $hs.Thunk();
    var hs_zdczg125vlfC = new $hs.Thunk();
    var hs_a22825vlfE = new $hs.Thunk();
    var hs_zdczlze125vlfG = new $hs.Thunk();
    var hs_a22925vlfI = new $hs.Thunk();
    var hs_zdcmax125vlfK = new $hs.Thunk();
    var hs_a23025vlfM = new $hs.Thunk();
    var hs_zdcmin125vlfO = new $hs.Thunk();
    var hs_a23125vlfQ = new $hs.Thunk();
    var hs_zdczeze125vlfS = new $hs.Thunk();
    var hs_a23225vlfU = new $hs.Thunk();
    var hs_zdczsze125vlfW = new $hs.Thunk();
    var hs_a23325vlfY = new $hs.Thunk();
    var hs_zdczizazi225vlg0 = new $hs.Thunk();
    var hs_a23425vlg2 = new $hs.Thunk();
    var hs_zdczizbzi225vlg4 = new $hs.Thunk();
    var hs_a23525vlg6 = new $hs.Thunk();
    var hs_zdcxor225vlg8 = new $hs.Thunk();
    var hs_a23625vlga = new $hs.Thunk();
    var hs_zdccomplement225vlgc = new $hs.Thunk();
    var hs_a23725vlge = new $hs.Thunk();
    var hs_zdcshift225vlgg = new $hs.Thunk();
    var hs_a23825vlgi = new $hs.Thunk();
    var hs_zdcrotate225vlgk = new $hs.Thunk();
    var hs_a23925vlgm = new $hs.Thunk();
    var hs_zdcbit225vlgo = new $hs.Thunk();
    var hs_a24025vlgq = new $hs.Thunk();
    var hs_zdcsetBit225vlgs = new $hs.Thunk();
    var hs_a24125vlgu = new $hs.Thunk();
    var hs_zdcclearBit225vlgw = new $hs.Thunk();
    var hs_a24225vlgy = new $hs.Thunk();
    var hs_zdccomplementBit225vlgA = new $hs.Thunk();
    var hs_a24325vlgC = new $hs.Thunk();
    var hs_zdctestBit225vlgE = new $hs.Thunk();
    var hs_a24425vlgG = new $hs.Thunk();
    var hs_zdcbitSizze225vlgI = new $hs.Thunk();
    var hs_a24525vlgK = new $hs.Thunk();
    var hs_zdcisSigned225vlgM = new $hs.Thunk();
    var hs_a24625vlgO = new $hs.Thunk();
    var hs_zdcshiftL225vlgQ = new $hs.Thunk();
    var hs_a24725vlgS = new $hs.Thunk();
    var hs_zdcshiftR225vlgU = new $hs.Thunk();
    var hs_a24825vlgW = new $hs.Thunk();
    var hs_zdcrotateL225vlgY = new $hs.Thunk();
    var hs_a24925vlh0 = new $hs.Thunk();
    var hs_zdcrotateR225vlh2 = new $hs.Thunk();
    var hs_a25025vlh4 = new $hs.Thunk();
    var hs_zdcquot225vlh6 = new $hs.Thunk();
    var hs_a25125vlh8 = new $hs.Thunk();
    var hs_zdcrem225vlha = new $hs.Thunk();
    var hs_a25225vlhc = new $hs.Thunk();
    var hs_zdcdiv225vlhe = new $hs.Thunk();
    var hs_a25325vlhg = new $hs.Thunk();
    var hs_zdcmod225vlhi = new $hs.Thunk();
    var hs_a25425vlhk = new $hs.Thunk();
    var hs_zdcquotRem225vlhm = new $hs.Thunk();
    var hs_a25525vlho = new $hs.Thunk();
    var hs_zdcdivMod225vlhq = new $hs.Thunk();
    var hs_a25625vlhs = new $hs.Thunk();
    var hs_zdctoInteger225vlhu = new $hs.Thunk();
    var hs_a25725vlhw = new $hs.Thunk();
    var hs_zdcminBound225vlhy = new $hs.Thunk();
    var hs_a25825vlhA = new $hs.Thunk();
    var hs_zdcmaxBound225vlhC = new $hs.Thunk();
    var hs_a25925vlhE = new $hs.Thunk();
    var hs_zdctoRational225vlhG = new $hs.Thunk();
    var hs_a26025vlhI = new $hs.Thunk();
    var hs_zdcsizzeOf225vlhK = new $hs.Thunk();
    var hs_a26125vlhM = new $hs.Thunk();
    var hs_zdcalignment225vlhO = new $hs.Thunk();
    var hs_a26225vlhQ = new $hs.Thunk();
    var hs_zdcpeekElemOff225vlhS = new $hs.Thunk();
    var hs_a26325vlhU = new $hs.Thunk();
    var hs_zdcpokeElemOff225vlhW = new $hs.Thunk();
    var hs_a26425vlhY = new $hs.Thunk();
    var hs_zdcpeekByteOff225vli0 = new $hs.Thunk();
    var hs_a26525vli2 = new $hs.Thunk();
    var hs_zdcpokeByteOff225vli4 = new $hs.Thunk();
    var hs_a26625vli6 = new $hs.Thunk();
    var hs_zdcpeek225vli8 = new $hs.Thunk();
    var hs_a26725vlia = new $hs.Thunk();
    var hs_zdcpoke225vlic = new $hs.Thunk();
    var hs_a26825vlie = new $hs.Thunk();
    var hs_zdcsucc225vlig = new $hs.Thunk();
    var hs_a26925vlii = new $hs.Thunk();
    var hs_zdcpred225vlik = new $hs.Thunk();
    var hs_a27025vlim = new $hs.Thunk();
    var hs_zdctoEnum225vlio = new $hs.Thunk();
    var hs_a27125vliq = new $hs.Thunk();
    var hs_zdcfromEnum225vlis = new $hs.Thunk();
    var hs_a27225vliu = new $hs.Thunk();
    var hs_zdcenumFrom225vliw = new $hs.Thunk();
    var hs_a27325vliy = new $hs.Thunk();
    var hs_zdcenumFromThen225vliA = new $hs.Thunk();
    var hs_a27425vliC = new $hs.Thunk();
    var hs_zdcenumFromTo225vliE = new $hs.Thunk();
    var hs_a27525vliG = new $hs.Thunk();
    var hs_zdcenumFromThenTo225vliI = new $hs.Thunk();
    var hs_a27625vliK = new $hs.Thunk();
    var hs_zdczp225vliM = new $hs.Thunk();
    var hs_a27725vliO = new $hs.Thunk();
    var hs_zdczt225vliQ = new $hs.Thunk();
    var hs_a27825vliS = new $hs.Thunk();
    var hs_zdczm225vliU = new $hs.Thunk();
    var hs_a27925vliW = new $hs.Thunk();
    var hs_zdcnegate225vliY = new $hs.Thunk();
    var hs_a28025vlj0 = new $hs.Thunk();
    var hs_zdcabs225vlj2 = new $hs.Thunk();
    var hs_a28125vlj4 = new $hs.Thunk();
    var hs_zdcsignum225vlj6 = new $hs.Thunk();
    var hs_a28225vlj8 = new $hs.Thunk();
    var hs_zdcfromInteger225vlja = new $hs.Thunk();
    var hs_a28325vljc = new $hs.Thunk();
    var hs_zdccompare225vlje = new $hs.Thunk();
    var hs_a28425vljg = new $hs.Thunk();
    var hs_zdczl225vlji = new $hs.Thunk();
    var hs_a28525vljk = new $hs.Thunk();
    var hs_zdczgze225vljm = new $hs.Thunk();
    var hs_a28625vljo = new $hs.Thunk();
    var hs_zdczg225vljq = new $hs.Thunk();
    var hs_a28725vljs = new $hs.Thunk();
    var hs_zdczlze225vlju = new $hs.Thunk();
    var hs_a28825vljw = new $hs.Thunk();
    var hs_zdcmax225vljy = new $hs.Thunk();
    var hs_a28925vljA = new $hs.Thunk();
    var hs_zdcmin225vljC = new $hs.Thunk();
    var hs_a29025vljE = new $hs.Thunk();
    var hs_zdczeze225vljG = new $hs.Thunk();
    var hs_a29125vljI = new $hs.Thunk();
    var hs_zdczsze225vljK = new $hs.Thunk();
    var hs_a29225vljM = new $hs.Thunk();
    var hs_zdczizazi325vljO = new $hs.Thunk();
    var hs_a29325vljQ = new $hs.Thunk();
    var hs_zdczizbzi325vljS = new $hs.Thunk();
    var hs_a29425vljU = new $hs.Thunk();
    var hs_zdcxor325vljW = new $hs.Thunk();
    var hs_a29525vljY = new $hs.Thunk();
    var hs_zdccomplement325vlk0 = new $hs.Thunk();
    var hs_a29625vlk2 = new $hs.Thunk();
    var hs_zdcshift325vlk4 = new $hs.Thunk();
    var hs_a29725vlk6 = new $hs.Thunk();
    var hs_zdcrotate325vlk8 = new $hs.Thunk();
    var hs_a29825vlka = new $hs.Thunk();
    var hs_zdcbit325vlkc = new $hs.Thunk();
    var hs_a29925vlke = new $hs.Thunk();
    var hs_zdcsetBit325vlkg = new $hs.Thunk();
    var hs_a30025vlki = new $hs.Thunk();
    var hs_zdcclearBit325vlkk = new $hs.Thunk();
    var hs_a30125vlkm = new $hs.Thunk();
    var hs_zdccomplementBit325vlko = new $hs.Thunk();
    var hs_a30225vlkq = new $hs.Thunk();
    var hs_zdctestBit325vlks = new $hs.Thunk();
    var hs_a30325vlku = new $hs.Thunk();
    var hs_zdcbitSizze325vlkw = new $hs.Thunk();
    var hs_a30425vlky = new $hs.Thunk();
    var hs_zdcisSigned325vlkA = new $hs.Thunk();
    var hs_a30525vlkC = new $hs.Thunk();
    var hs_zdcshiftL325vlkE = new $hs.Thunk();
    var hs_a30625vlkG = new $hs.Thunk();
    var hs_zdcshiftR325vlkI = new $hs.Thunk();
    var hs_a30725vlkK = new $hs.Thunk();
    var hs_zdcrotateL325vlkM = new $hs.Thunk();
    var hs_a30825vlkO = new $hs.Thunk();
    var hs_zdcrotateR325vlkQ = new $hs.Thunk();
    var hs_a30925vlkS = new $hs.Thunk();
    var hs_zdcquot325vlkU = new $hs.Thunk();
    var hs_a31025vlkW = new $hs.Thunk();
    var hs_zdcrem325vlkY = new $hs.Thunk();
    var hs_a31125vll0 = new $hs.Thunk();
    var hs_zdcdiv325vll2 = new $hs.Thunk();
    var hs_a31225vll4 = new $hs.Thunk();
    var hs_zdcmod325vll6 = new $hs.Thunk();
    var hs_a31325vll8 = new $hs.Thunk();
    var hs_zdcquotRem325vlla = new $hs.Thunk();
    var hs_a31425vllc = new $hs.Thunk();
    var hs_zdcdivMod325vlle = new $hs.Thunk();
    var hs_a31525vllg = new $hs.Thunk();
    var hs_zdctoInteger325vlli = new $hs.Thunk();
    var hs_a31625vllk = new $hs.Thunk();
    var hs_zdcminBound325vllm = new $hs.Thunk();
    var hs_a31725vllo = new $hs.Thunk();
    var hs_zdcmaxBound325vllq = new $hs.Thunk();
    var hs_a31825vlls = new $hs.Thunk();
    var hs_zdctoRational325vllu = new $hs.Thunk();
    var hs_a31925vllw = new $hs.Thunk();
    var hs_zdcsizzeOf325vlly = new $hs.Thunk();
    var hs_a32025vllA = new $hs.Thunk();
    var hs_zdcalignment325vllC = new $hs.Thunk();
    var hs_a32125vllE = new $hs.Thunk();
    var hs_zdcpeekElemOff325vllG = new $hs.Thunk();
    var hs_a32225vllI = new $hs.Thunk();
    var hs_zdcpokeElemOff325vllK = new $hs.Thunk();
    var hs_a32325vllM = new $hs.Thunk();
    var hs_zdcpeekByteOff325vllO = new $hs.Thunk();
    var hs_a32425vllQ = new $hs.Thunk();
    var hs_zdcpokeByteOff325vllS = new $hs.Thunk();
    var hs_a32525vllU = new $hs.Thunk();
    var hs_zdcpeek325vllW = new $hs.Thunk();
    var hs_a32625vllY = new $hs.Thunk();
    var hs_zdcpoke325vlm0 = new $hs.Thunk();
    var hs_a32725vlm2 = new $hs.Thunk();
    var hs_zdcsucc325vlm4 = new $hs.Thunk();
    var hs_a32825vlm6 = new $hs.Thunk();
    var hs_zdcpred325vlm8 = new $hs.Thunk();
    var hs_a32925vlma = new $hs.Thunk();
    var hs_zdctoEnum325vlmc = new $hs.Thunk();
    var hs_a33025vlme = new $hs.Thunk();
    var hs_zdcfromEnum325vlmg = new $hs.Thunk();
    var hs_a33125vlmi = new $hs.Thunk();
    var hs_zdcenumFrom325vlmk = new $hs.Thunk();
    var hs_a33225vlmm = new $hs.Thunk();
    var hs_zdcenumFromThen325vlmo = new $hs.Thunk();
    var hs_a33325vlmq = new $hs.Thunk();
    var hs_zdcenumFromTo325vlms = new $hs.Thunk();
    var hs_a33425vlmu = new $hs.Thunk();
    var hs_zdcenumFromThenTo325vlmw = new $hs.Thunk();
    var hs_a33525vlmy = new $hs.Thunk();
    var hs_zdczp325vlmA = new $hs.Thunk();
    var hs_a33625vlmC = new $hs.Thunk();
    var hs_zdczt325vlmE = new $hs.Thunk();
    var hs_a33725vlmG = new $hs.Thunk();
    var hs_zdczm325vlmI = new $hs.Thunk();
    var hs_a33825vlmK = new $hs.Thunk();
    var hs_zdcnegate325vlmM = new $hs.Thunk();
    var hs_a33925vlmO = new $hs.Thunk();
    var hs_zdcabs325vlmQ = new $hs.Thunk();
    var hs_a34025vlmS = new $hs.Thunk();
    var hs_zdcsignum325vlmU = new $hs.Thunk();
    var hs_a34125vlmW = new $hs.Thunk();
    var hs_zdcfromInteger325vlmY = new $hs.Thunk();
    var hs_a34225vln0 = new $hs.Thunk();
    var hs_zdccompare325vln2 = new $hs.Thunk();
    var hs_a34325vln4 = new $hs.Thunk();
    var hs_zdczl325vln6 = new $hs.Thunk();
    var hs_a34425vln8 = new $hs.Thunk();
    var hs_zdczgze325vlna = new $hs.Thunk();
    var hs_a34525vlnc = new $hs.Thunk();
    var hs_zdczg325vlne = new $hs.Thunk();
    var hs_a34625vlng = new $hs.Thunk();
    var hs_zdczlze325vlni = new $hs.Thunk();
    var hs_a34725vlnk = new $hs.Thunk();
    var hs_zdcmax325vlnm = new $hs.Thunk();
    var hs_a34825vlno = new $hs.Thunk();
    var hs_zdcmin325vlnq = new $hs.Thunk();
    var hs_a34925vlns = new $hs.Thunk();
    var hs_zdczeze325vlnu = new $hs.Thunk();
    var hs_a35025vlnw = new $hs.Thunk();
    var hs_zdczsze325vlny = new $hs.Thunk();
    var hs_a35125vlnA = new $hs.Thunk();
    var hs_zdctoRational425vlnC = new $hs.Thunk();
    var hs_a35225vlnE = new $hs.Thunk();
    var hs_zdcsizzeOf425vlnG = new $hs.Thunk();
    var hs_a35325vlnI = new $hs.Thunk();
    var hs_zdcalignment425vlnK = new $hs.Thunk();
    var hs_a35425vlnM = new $hs.Thunk();
    var hs_zdcpeekElemOff425vlnO = new $hs.Thunk();
    var hs_a35525vlnQ = new $hs.Thunk();
    var hs_zdcpokeElemOff425vlnS = new $hs.Thunk();
    var hs_a35625vlnU = new $hs.Thunk();
    var hs_zdcpeekByteOff425vlnW = new $hs.Thunk();
    var hs_a35725vlnY = new $hs.Thunk();
    var hs_zdcpokeByteOff425vlo0 = new $hs.Thunk();
    var hs_a35825vlo2 = new $hs.Thunk();
    var hs_zdcpeek425vlo4 = new $hs.Thunk();
    var hs_a35925vlo6 = new $hs.Thunk();
    var hs_zdcpoke425vlo8 = new $hs.Thunk();
    var hs_a36025vloa = new $hs.Thunk();
    var hs_zdcsucc425vloc = new $hs.Thunk();
    var hs_a36125vloe = new $hs.Thunk();
    var hs_zdcpred425vlog = new $hs.Thunk();
    var hs_a36225vloi = new $hs.Thunk();
    var hs_zdctoEnum425vlok = new $hs.Thunk();
    var hs_a36325vlom = new $hs.Thunk();
    var hs_zdcfromEnum425vloo = new $hs.Thunk();
    var hs_a36425vloq = new $hs.Thunk();
    var hs_zdcenumFrom425vlos = new $hs.Thunk();
    var hs_a36525vlou = new $hs.Thunk();
    var hs_zdcenumFromThen425vlow = new $hs.Thunk();
    var hs_a36625vloy = new $hs.Thunk();
    var hs_zdcenumFromTo425vloA = new $hs.Thunk();
    var hs_a36725vloC = new $hs.Thunk();
    var hs_zdcenumFromThenTo425vloE = new $hs.Thunk();
    var hs_a36825vloG = new $hs.Thunk();
    var hs_zdczp425vloI = new $hs.Thunk();
    var hs_a36925vloK = new $hs.Thunk();
    var hs_zdczt425vloM = new $hs.Thunk();
    var hs_a37025vloO = new $hs.Thunk();
    var hs_zdczm425vloQ = new $hs.Thunk();
    var hs_a37125vloS = new $hs.Thunk();
    var hs_zdcnegate425vloU = new $hs.Thunk();
    var hs_a37225vloW = new $hs.Thunk();
    var hs_zdcabs425vloY = new $hs.Thunk();
    var hs_a37325vlp0 = new $hs.Thunk();
    var hs_zdcsignum425vlp2 = new $hs.Thunk();
    var hs_a37425vlp4 = new $hs.Thunk();
    var hs_zdcfromInteger425vlp6 = new $hs.Thunk();
    var hs_a37525vlp8 = new $hs.Thunk();
    var hs_zdccompare425vlpa = new $hs.Thunk();
    var hs_a37625vlpc = new $hs.Thunk();
    var hs_zdczl425vlpe = new $hs.Thunk();
    var hs_a37725vlpg = new $hs.Thunk();
    var hs_zdczgze425vlpi = new $hs.Thunk();
    var hs_a37825vlpk = new $hs.Thunk();
    var hs_zdczg425vlpm = new $hs.Thunk();
    var hs_a37925vlpo = new $hs.Thunk();
    var hs_zdczlze425vlpq = new $hs.Thunk();
    var hs_a38025vlps = new $hs.Thunk();
    var hs_zdcmax425vlpu = new $hs.Thunk();
    var hs_a38125vlpw = new $hs.Thunk();
    var hs_zdcmin425vlpy = new $hs.Thunk();
    var hs_a38225vlpA = new $hs.Thunk();
    var hs_zdczeze425vlpC = new $hs.Thunk();
    var hs_a38325vlpE = new $hs.Thunk();
    var hs_zdczsze425vlpG = new $hs.Thunk();
    var hs_a38425vlpI = new $hs.Thunk();
    var hs_zdctoRational525vlpK = new $hs.Thunk();
    var hs_a38525vlpM = new $hs.Thunk();
    var hs_zdcsizzeOf525vlpO = new $hs.Thunk();
    var hs_a38625vlpQ = new $hs.Thunk();
    var hs_zdcalignment525vlpS = new $hs.Thunk();
    var hs_a38725vlpU = new $hs.Thunk();
    var hs_zdcpeekElemOff525vlpW = new $hs.Thunk();
    var hs_a38825vlpY = new $hs.Thunk();
    var hs_zdcpokeElemOff525vlq0 = new $hs.Thunk();
    var hs_a38925vlq2 = new $hs.Thunk();
    var hs_zdcpeekByteOff525vlq4 = new $hs.Thunk();
    var hs_a39025vlq6 = new $hs.Thunk();
    var hs_zdcpokeByteOff525vlq8 = new $hs.Thunk();
    var hs_a39125vlqa = new $hs.Thunk();
    var hs_zdcpeek525vlqc = new $hs.Thunk();
    var hs_a39225vlqe = new $hs.Thunk();
    var hs_zdcpoke525vlqg = new $hs.Thunk();
    var hs_a39325vlqi = new $hs.Thunk();
    var hs_zdcsucc525vlqk = new $hs.Thunk();
    var hs_a39425vlqm = new $hs.Thunk();
    var hs_zdcpred525vlqo = new $hs.Thunk();
    var hs_a39525vlqq = new $hs.Thunk();
    var hs_zdctoEnum525vlqs = new $hs.Thunk();
    var hs_a39625vlqu = new $hs.Thunk();
    var hs_zdcfromEnum525vlqw = new $hs.Thunk();
    var hs_a39725vlqy = new $hs.Thunk();
    var hs_zdcenumFrom525vlqA = new $hs.Thunk();
    var hs_a39825vlqC = new $hs.Thunk();
    var hs_zdcenumFromThen525vlqE = new $hs.Thunk();
    var hs_a39925vlqG = new $hs.Thunk();
    var hs_zdcenumFromTo525vlqI = new $hs.Thunk();
    var hs_a40025vlqK = new $hs.Thunk();
    var hs_zdcenumFromThenTo525vlqM = new $hs.Thunk();
    var hs_a40125vlqO = new $hs.Thunk();
    var hs_zdczp525vlqQ = new $hs.Thunk();
    var hs_a40225vlqS = new $hs.Thunk();
    var hs_zdczt525vlqU = new $hs.Thunk();
    var hs_a40325vlqW = new $hs.Thunk();
    var hs_zdczm525vlqY = new $hs.Thunk();
    var hs_a40425vlr0 = new $hs.Thunk();
    var hs_zdcnegate525vlr2 = new $hs.Thunk();
    var hs_a40525vlr4 = new $hs.Thunk();
    var hs_zdcabs525vlr6 = new $hs.Thunk();
    var hs_a40625vlr8 = new $hs.Thunk();
    var hs_zdcsignum525vlra = new $hs.Thunk();
    var hs_a40725vlrc = new $hs.Thunk();
    var hs_zdcfromInteger525vlre = new $hs.Thunk();
    var hs_a40825vlrg = new $hs.Thunk();
    var hs_zdccompare525vlri = new $hs.Thunk();
    var hs_a40925vlrk = new $hs.Thunk();
    var hs_zdczl525vlrm = new $hs.Thunk();
    var hs_a41025vlro = new $hs.Thunk();
    var hs_zdczgze525vlrq = new $hs.Thunk();
    var hs_a41125vlrs = new $hs.Thunk();
    var hs_zdczg525vlru = new $hs.Thunk();
    var hs_a41225vlrw = new $hs.Thunk();
    var hs_zdczlze525vlry = new $hs.Thunk();
    var hs_a41325vlrA = new $hs.Thunk();
    var hs_zdcmax525vlrC = new $hs.Thunk();
    var hs_a41425vlrE = new $hs.Thunk();
    var hs_zdcmin525vlrG = new $hs.Thunk();
    var hs_a41525vlrI = new $hs.Thunk();
    var hs_zdczeze525vlrK = new $hs.Thunk();
    var hs_a41625vlrM = new $hs.Thunk();
    var hs_zdczsze525vlrO = new $hs.Thunk();
    var hs_a41725vlrQ = new $hs.Thunk();
    var hs_zdczizazi425vlrS = new $hs.Thunk();
    var hs_a41825vlrU = new $hs.Thunk();
    var hs_zdczizbzi425vlrW = new $hs.Thunk();
    var hs_a41925vlrY = new $hs.Thunk();
    var hs_zdcxor425vls0 = new $hs.Thunk();
    var hs_a42025vls2 = new $hs.Thunk();
    var hs_zdccomplement425vls4 = new $hs.Thunk();
    var hs_a42125vls6 = new $hs.Thunk();
    var hs_zdcshift425vls8 = new $hs.Thunk();
    var hs_a42225vlsa = new $hs.Thunk();
    var hs_zdcrotate425vlsc = new $hs.Thunk();
    var hs_a42325vlse = new $hs.Thunk();
    var hs_zdcbit425vlsg = new $hs.Thunk();
    var hs_a42425vlsi = new $hs.Thunk();
    var hs_zdcsetBit425vlsk = new $hs.Thunk();
    var hs_a42525vlsm = new $hs.Thunk();
    var hs_zdcclearBit425vlso = new $hs.Thunk();
    var hs_a42625vlsq = new $hs.Thunk();
    var hs_zdccomplementBit425vlss = new $hs.Thunk();
    var hs_a42725vlsu = new $hs.Thunk();
    var hs_zdctestBit425vlsw = new $hs.Thunk();
    var hs_a42825vlsy = new $hs.Thunk();
    var hs_zdcbitSizze425vlsA = new $hs.Thunk();
    var hs_a42925vlsC = new $hs.Thunk();
    var hs_zdcisSigned425vlsE = new $hs.Thunk();
    var hs_a43025vlsG = new $hs.Thunk();
    var hs_zdcshiftL425vlsI = new $hs.Thunk();
    var hs_a43125vlsK = new $hs.Thunk();
    var hs_zdcshiftR425vlsM = new $hs.Thunk();
    var hs_a43225vlsO = new $hs.Thunk();
    var hs_zdcrotateL425vlsQ = new $hs.Thunk();
    var hs_a43325vlsS = new $hs.Thunk();
    var hs_zdcrotateR425vlsU = new $hs.Thunk();
    var hs_a43425vlsW = new $hs.Thunk();
    var hs_zdcquot425vlsY = new $hs.Thunk();
    var hs_a43525vlt0 = new $hs.Thunk();
    var hs_zdcrem425vlt2 = new $hs.Thunk();
    var hs_a43625vlt4 = new $hs.Thunk();
    var hs_zdcdiv425vlt6 = new $hs.Thunk();
    var hs_a43725vlt8 = new $hs.Thunk();
    var hs_zdcmod425vlta = new $hs.Thunk();
    var hs_a43825vltc = new $hs.Thunk();
    var hs_zdcquotRem425vlte = new $hs.Thunk();
    var hs_a43925vltg = new $hs.Thunk();
    var hs_zdcdivMod425vlti = new $hs.Thunk();
    var hs_a44025vltk = new $hs.Thunk();
    var hs_zdctoInteger425vltm = new $hs.Thunk();
    var hs_a44125vlto = new $hs.Thunk();
    var hs_zdcminBound425vltq = new $hs.Thunk();
    var hs_a44225vlts = new $hs.Thunk();
    var hs_zdcmaxBound425vltu = new $hs.Thunk();
    var hs_a44325vltw = new $hs.Thunk();
    var hs_zdctoRational625vlty = new $hs.Thunk();
    var hs_a44425vltA = new $hs.Thunk();
    var hs_zdcsizzeOf625vltC = new $hs.Thunk();
    var hs_a44525vltE = new $hs.Thunk();
    var hs_zdcalignment625vltG = new $hs.Thunk();
    var hs_a44625vltI = new $hs.Thunk();
    var hs_zdcpeekElemOff625vltK = new $hs.Thunk();
    var hs_a44725vltM = new $hs.Thunk();
    var hs_zdcpokeElemOff625vltO = new $hs.Thunk();
    var hs_a44825vltQ = new $hs.Thunk();
    var hs_zdcpeekByteOff625vltS = new $hs.Thunk();
    var hs_a44925vltU = new $hs.Thunk();
    var hs_zdcpokeByteOff625vltW = new $hs.Thunk();
    var hs_a45025vltY = new $hs.Thunk();
    var hs_zdcpeek625vlu0 = new $hs.Thunk();
    var hs_a45125vlu2 = new $hs.Thunk();
    var hs_zdcpoke625vlu4 = new $hs.Thunk();
    var hs_a45225vlu6 = new $hs.Thunk();
    var hs_zdcsucc625vlu8 = new $hs.Thunk();
    var hs_a45325vlua = new $hs.Thunk();
    var hs_zdcpred625vluc = new $hs.Thunk();
    var hs_a45425vlue = new $hs.Thunk();
    var hs_zdctoEnum625vlug = new $hs.Thunk();
    var hs_a45525vlui = new $hs.Thunk();
    var hs_zdcfromEnum625vluk = new $hs.Thunk();
    var hs_a45625vlum = new $hs.Thunk();
    var hs_zdcenumFrom625vluo = new $hs.Thunk();
    var hs_a45725vluq = new $hs.Thunk();
    var hs_zdcenumFromThen625vlus = new $hs.Thunk();
    var hs_a45825vluu = new $hs.Thunk();
    var hs_zdcenumFromTo625vluw = new $hs.Thunk();
    var hs_a45925vluy = new $hs.Thunk();
    var hs_zdcenumFromThenTo625vluA = new $hs.Thunk();
    var hs_a46025vluC = new $hs.Thunk();
    var hs_zdczp625vluE = new $hs.Thunk();
    var hs_a46125vluG = new $hs.Thunk();
    var hs_zdczt625vluI = new $hs.Thunk();
    var hs_a46225vluK = new $hs.Thunk();
    var hs_zdczm625vluM = new $hs.Thunk();
    var hs_a46325vluO = new $hs.Thunk();
    var hs_zdcnegate625vluQ = new $hs.Thunk();
    var hs_a46425vluS = new $hs.Thunk();
    var hs_zdcabs625vluU = new $hs.Thunk();
    var hs_a46525vluW = new $hs.Thunk();
    var hs_zdcsignum625vluY = new $hs.Thunk();
    var hs_a46625vlv0 = new $hs.Thunk();
    var hs_zdcfromInteger625vlv2 = new $hs.Thunk();
    var hs_a46725vlv4 = new $hs.Thunk();
    var hs_zdccompare625vlv6 = new $hs.Thunk();
    var hs_a46825vlv8 = new $hs.Thunk();
    var hs_zdczl625vlva = new $hs.Thunk();
    var hs_a46925vlvc = new $hs.Thunk();
    var hs_zdczgze625vlve = new $hs.Thunk();
    var hs_a47025vlvg = new $hs.Thunk();
    var hs_zdczg625vlvi = new $hs.Thunk();
    var hs_a47125vlvk = new $hs.Thunk();
    var hs_zdczlze625vlvm = new $hs.Thunk();
    var hs_a47225vlvo = new $hs.Thunk();
    var hs_zdcmax625vlvq = new $hs.Thunk();
    var hs_a47325vlvs = new $hs.Thunk();
    var hs_zdcmin625vlvu = new $hs.Thunk();
    var hs_a47425vlvw = new $hs.Thunk();
    var hs_zdczeze625vlvy = new $hs.Thunk();
    var hs_a47525vlvA = new $hs.Thunk();
    var hs_zdczsze625vlvC = new $hs.Thunk();
    var hs_a47625vlvE = new $hs.Thunk();
    var hs_zdczizazi525vlvG = new $hs.Thunk();
    var hs_a47725vlvI = new $hs.Thunk();
    var hs_zdczizbzi525vlvK = new $hs.Thunk();
    var hs_a47825vlvM = new $hs.Thunk();
    var hs_zdcxor525vlvO = new $hs.Thunk();
    var hs_a47925vlvQ = new $hs.Thunk();
    var hs_zdccomplement525vlvS = new $hs.Thunk();
    var hs_a48025vlvU = new $hs.Thunk();
    var hs_zdcshift525vlvW = new $hs.Thunk();
    var hs_a48125vlvY = new $hs.Thunk();
    var hs_zdcrotate525vlw0 = new $hs.Thunk();
    var hs_a48225vlw2 = new $hs.Thunk();
    var hs_zdcbit525vlw4 = new $hs.Thunk();
    var hs_a48325vlw6 = new $hs.Thunk();
    var hs_zdcsetBit525vlw8 = new $hs.Thunk();
    var hs_a48425vlwa = new $hs.Thunk();
    var hs_zdcclearBit525vlwc = new $hs.Thunk();
    var hs_a48525vlwe = new $hs.Thunk();
    var hs_zdccomplementBit525vlwg = new $hs.Thunk();
    var hs_a48625vlwi = new $hs.Thunk();
    var hs_zdctestBit525vlwk = new $hs.Thunk();
    var hs_a48725vlwm = new $hs.Thunk();
    var hs_zdcbitSizze525vlwo = new $hs.Thunk();
    var hs_a48825vlwq = new $hs.Thunk();
    var hs_zdcisSigned525vlws = new $hs.Thunk();
    var hs_a48925vlwu = new $hs.Thunk();
    var hs_zdcshiftL525vlww = new $hs.Thunk();
    var hs_a49025vlwy = new $hs.Thunk();
    var hs_zdcshiftR525vlwA = new $hs.Thunk();
    var hs_a49125vlwC = new $hs.Thunk();
    var hs_zdcrotateL525vlwE = new $hs.Thunk();
    var hs_a49225vlwG = new $hs.Thunk();
    var hs_zdcrotateR525vlwI = new $hs.Thunk();
    var hs_a49325vlwK = new $hs.Thunk();
    var hs_zdcquot525vlwM = new $hs.Thunk();
    var hs_a49425vlwO = new $hs.Thunk();
    var hs_zdcrem525vlwQ = new $hs.Thunk();
    var hs_a49525vlwS = new $hs.Thunk();
    var hs_zdcdiv525vlwU = new $hs.Thunk();
    var hs_a49625vlwW = new $hs.Thunk();
    var hs_zdcmod525vlwY = new $hs.Thunk();
    var hs_a49725vlx0 = new $hs.Thunk();
    var hs_zdcquotRem525vlx2 = new $hs.Thunk();
    var hs_a49825vlx4 = new $hs.Thunk();
    var hs_zdcdivMod525vlx6 = new $hs.Thunk();
    var hs_a49925vlx8 = new $hs.Thunk();
    var hs_zdctoInteger525vlxa = new $hs.Thunk();
    var hs_a50025vlxc = new $hs.Thunk();
    var hs_zdcminBound525vlxe = new $hs.Thunk();
    var hs_a50125vlxg = new $hs.Thunk();
    var hs_zdcmaxBound525vlxi = new $hs.Thunk();
    var hs_a50225vlxk = new $hs.Thunk();
    var hs_zdctoRational725vlxm = new $hs.Thunk();
    var hs_a50325vlxo = new $hs.Thunk();
    var hs_zdcsizzeOf725vlxq = new $hs.Thunk();
    var hs_a50425vlxs = new $hs.Thunk();
    var hs_zdcalignment725vlxu = new $hs.Thunk();
    var hs_a50525vlxw = new $hs.Thunk();
    var hs_zdcpeekElemOff725vlxy = new $hs.Thunk();
    var hs_a50625vlxA = new $hs.Thunk();
    var hs_zdcpokeElemOff725vlxC = new $hs.Thunk();
    var hs_a50725vlxE = new $hs.Thunk();
    var hs_zdcpeekByteOff725vlxG = new $hs.Thunk();
    var hs_a50825vlxI = new $hs.Thunk();
    var hs_zdcpokeByteOff725vlxK = new $hs.Thunk();
    var hs_a50925vlxM = new $hs.Thunk();
    var hs_zdcpeek725vlxO = new $hs.Thunk();
    var hs_a51025vlxQ = new $hs.Thunk();
    var hs_zdcpoke725vlxS = new $hs.Thunk();
    var hs_a51125vlxU = new $hs.Thunk();
    var hs_zdcsucc725vlxW = new $hs.Thunk();
    var hs_a51225vlxY = new $hs.Thunk();
    var hs_zdcpred725vly0 = new $hs.Thunk();
    var hs_a51325vly2 = new $hs.Thunk();
    var hs_zdctoEnum725vly4 = new $hs.Thunk();
    var hs_a51425vly6 = new $hs.Thunk();
    var hs_zdcfromEnum725vly8 = new $hs.Thunk();
    var hs_a51525vlya = new $hs.Thunk();
    var hs_zdcenumFrom725vlyc = new $hs.Thunk();
    var hs_a51625vlye = new $hs.Thunk();
    var hs_zdcenumFromThen725vlyg = new $hs.Thunk();
    var hs_a51725vlyi = new $hs.Thunk();
    var hs_zdcenumFromTo725vlyk = new $hs.Thunk();
    var hs_a51825vlym = new $hs.Thunk();
    var hs_zdcenumFromThenTo725vlyo = new $hs.Thunk();
    var hs_a51925vlyq = new $hs.Thunk();
    var hs_zdczp725vlys = new $hs.Thunk();
    var hs_a52025vlyu = new $hs.Thunk();
    var hs_zdczt725vlyw = new $hs.Thunk();
    var hs_a52125vlyy = new $hs.Thunk();
    var hs_zdczm725vlyA = new $hs.Thunk();
    var hs_a52225vlyC = new $hs.Thunk();
    var hs_zdcnegate725vlyE = new $hs.Thunk();
    var hs_a52325vlyG = new $hs.Thunk();
    var hs_zdcabs725vlyI = new $hs.Thunk();
    var hs_a52425vlyK = new $hs.Thunk();
    var hs_zdcsignum725vlyM = new $hs.Thunk();
    var hs_a52525vlyO = new $hs.Thunk();
    var hs_zdcfromInteger725vlyQ = new $hs.Thunk();
    var hs_a52625vlyS = new $hs.Thunk();
    var hs_zdccompare725vlyU = new $hs.Thunk();
    var hs_a52725vlyW = new $hs.Thunk();
    var hs_zdczl725vlyY = new $hs.Thunk();
    var hs_a52825vlz0 = new $hs.Thunk();
    var hs_zdczgze725vlz2 = new $hs.Thunk();
    var hs_a52925vlz4 = new $hs.Thunk();
    var hs_zdczg725vlz6 = new $hs.Thunk();
    var hs_a53025vlz8 = new $hs.Thunk();
    var hs_zdczlze725vlza = new $hs.Thunk();
    var hs_a53125vlzc = new $hs.Thunk();
    var hs_zdcmax725vlze = new $hs.Thunk();
    var hs_a53225vlzg = new $hs.Thunk();
    var hs_zdcmin725vlzi = new $hs.Thunk();
    var hs_a53325vlzk = new $hs.Thunk();
    var hs_zdczeze725vlzm = new $hs.Thunk();
    var hs_a53425vlzo = new $hs.Thunk();
    var hs_zdczsze725vlzq = new $hs.Thunk();
    var hs_a53525vlzs = new $hs.Thunk();
    var hs_zdczizazi625vlzu = new $hs.Thunk();
    var hs_a53625vlzw = new $hs.Thunk();
    var hs_zdczizbzi625vlzy = new $hs.Thunk();
    var hs_a53725vlzA = new $hs.Thunk();
    var hs_zdcxor625vlzC = new $hs.Thunk();
    var hs_a53825vlzE = new $hs.Thunk();
    var hs_zdccomplement625vlzG = new $hs.Thunk();
    var hs_a53925vlzI = new $hs.Thunk();
    var hs_zdcshift625vlzK = new $hs.Thunk();
    var hs_a54025vlzM = new $hs.Thunk();
    var hs_zdcrotate625vlzO = new $hs.Thunk();
    var hs_a54125vlzQ = new $hs.Thunk();
    var hs_zdcbit625vlzS = new $hs.Thunk();
    var hs_a54225vlzU = new $hs.Thunk();
    var hs_zdcsetBit625vlzW = new $hs.Thunk();
    var hs_a54325vlzY = new $hs.Thunk();
    var hs_zdcclearBit625vlA0 = new $hs.Thunk();
    var hs_a54425vlA2 = new $hs.Thunk();
    var hs_zdccomplementBit625vlA4 = new $hs.Thunk();
    var hs_a54525vlA6 = new $hs.Thunk();
    var hs_zdctestBit625vlA8 = new $hs.Thunk();
    var hs_a54625vlAa = new $hs.Thunk();
    var hs_zdcbitSizze625vlAc = new $hs.Thunk();
    var hs_a54725vlAe = new $hs.Thunk();
    var hs_zdcisSigned625vlAg = new $hs.Thunk();
    var hs_a54825vlAi = new $hs.Thunk();
    var hs_zdcshiftL625vlAk = new $hs.Thunk();
    var hs_a54925vlAm = new $hs.Thunk();
    var hs_zdcshiftR625vlAo = new $hs.Thunk();
    var hs_a55025vlAq = new $hs.Thunk();
    var hs_zdcrotateL625vlAs = new $hs.Thunk();
    var hs_a55125vlAu = new $hs.Thunk();
    var hs_zdcrotateR625vlAw = new $hs.Thunk();
    var hs_a55225vlAy = new $hs.Thunk();
    var hs_zdcquot625vlAA = new $hs.Thunk();
    var hs_a55325vlAC = new $hs.Thunk();
    var hs_zdcrem625vlAE = new $hs.Thunk();
    var hs_a55425vlAG = new $hs.Thunk();
    var hs_zdcdiv625vlAI = new $hs.Thunk();
    var hs_a55525vlAK = new $hs.Thunk();
    var hs_zdcmod625vlAM = new $hs.Thunk();
    var hs_a55625vlAO = new $hs.Thunk();
    var hs_zdcquotRem625vlAQ = new $hs.Thunk();
    var hs_a55725vlAS = new $hs.Thunk();
    var hs_zdcdivMod625vlAU = new $hs.Thunk();
    var hs_a55825vlAW = new $hs.Thunk();
    var hs_zdctoInteger625vlAY = new $hs.Thunk();
    var hs_a55925vlB0 = new $hs.Thunk();
    var hs_zdcminBound625vlB2 = new $hs.Thunk();
    var hs_a56025vlB4 = new $hs.Thunk();
    var hs_zdcmaxBound625vlB6 = new $hs.Thunk();
    var hs_a56125vlB8 = new $hs.Thunk();
    var hs_zdctoRational825vlBa = new $hs.Thunk();
    var hs_a56225vlBc = new $hs.Thunk();
    var hs_zdcsizzeOf825vlBe = new $hs.Thunk();
    var hs_a56325vlBg = new $hs.Thunk();
    var hs_zdcalignment825vlBi = new $hs.Thunk();
    var hs_a56425vlBk = new $hs.Thunk();
    var hs_zdcpeekElemOff825vlBm = new $hs.Thunk();
    var hs_a56525vlBo = new $hs.Thunk();
    var hs_zdcpokeElemOff825vlBq = new $hs.Thunk();
    var hs_a56625vlBs = new $hs.Thunk();
    var hs_zdcpeekByteOff825vlBu = new $hs.Thunk();
    var hs_a56725vlBw = new $hs.Thunk();
    var hs_zdcpokeByteOff825vlBy = new $hs.Thunk();
    var hs_a56825vlBA = new $hs.Thunk();
    var hs_zdcpeek825vlBC = new $hs.Thunk();
    var hs_a56925vlBE = new $hs.Thunk();
    var hs_zdcpoke825vlBG = new $hs.Thunk();
    var hs_a57025vlBI = new $hs.Thunk();
    var hs_zdcsucc825vlBK = new $hs.Thunk();
    var hs_a57125vlBM = new $hs.Thunk();
    var hs_zdcpred825vlBO = new $hs.Thunk();
    var hs_a57225vlBQ = new $hs.Thunk();
    var hs_zdctoEnum825vlBS = new $hs.Thunk();
    var hs_a57325vlBU = new $hs.Thunk();
    var hs_zdcfromEnum825vlBW = new $hs.Thunk();
    var hs_a57425vlBY = new $hs.Thunk();
    var hs_zdcenumFrom825vlC0 = new $hs.Thunk();
    var hs_a57525vlC2 = new $hs.Thunk();
    var hs_zdcenumFromThen825vlC4 = new $hs.Thunk();
    var hs_a57625vlC6 = new $hs.Thunk();
    var hs_zdcenumFromTo825vlC8 = new $hs.Thunk();
    var hs_a57725vlCa = new $hs.Thunk();
    var hs_zdcenumFromThenTo825vlCc = new $hs.Thunk();
    var hs_a57825vlCe = new $hs.Thunk();
    var hs_zdczp825vlCg = new $hs.Thunk();
    var hs_a57925vlCi = new $hs.Thunk();
    var hs_zdczt825vlCk = new $hs.Thunk();
    var hs_a58025vlCm = new $hs.Thunk();
    var hs_zdczm825vlCo = new $hs.Thunk();
    var hs_a58125vlCq = new $hs.Thunk();
    var hs_zdcnegate825vlCs = new $hs.Thunk();
    var hs_a58225vlCu = new $hs.Thunk();
    var hs_zdcabs825vlCw = new $hs.Thunk();
    var hs_a58325vlCy = new $hs.Thunk();
    var hs_zdcsignum825vlCA = new $hs.Thunk();
    var hs_a58425vlCC = new $hs.Thunk();
    var hs_zdcfromInteger825vlCE = new $hs.Thunk();
    var hs_a58525vlCG = new $hs.Thunk();
    var hs_zdccompare825vlCI = new $hs.Thunk();
    var hs_a58625vlCK = new $hs.Thunk();
    var hs_zdczl825vlCM = new $hs.Thunk();
    var hs_a58725vlCO = new $hs.Thunk();
    var hs_zdczgze825vlCQ = new $hs.Thunk();
    var hs_a58825vlCS = new $hs.Thunk();
    var hs_zdczg825vlCU = new $hs.Thunk();
    var hs_a58925vlCW = new $hs.Thunk();
    var hs_zdczlze825vlCY = new $hs.Thunk();
    var hs_a59025vlD0 = new $hs.Thunk();
    var hs_zdcmax825vlD2 = new $hs.Thunk();
    var hs_a59125vlD4 = new $hs.Thunk();
    var hs_zdcmin825vlD6 = new $hs.Thunk();
    var hs_a59225vlD8 = new $hs.Thunk();
    var hs_zdczeze825vlDa = new $hs.Thunk();
    var hs_a59325vlDc = new $hs.Thunk();
    var hs_zdczsze825vlDe = new $hs.Thunk();
    var hs_a59425vlDg = new $hs.Thunk();
    var hs_zdczizazi725vlDi = new $hs.Thunk();
    var hs_a59525vlDk = new $hs.Thunk();
    var hs_zdczizbzi725vlDm = new $hs.Thunk();
    var hs_a59625vlDo = new $hs.Thunk();
    var hs_zdcxor725vlDq = new $hs.Thunk();
    var hs_a59725vlDs = new $hs.Thunk();
    var hs_zdccomplement725vlDu = new $hs.Thunk();
    var hs_a59825vlDw = new $hs.Thunk();
    var hs_zdcshift725vlDy = new $hs.Thunk();
    var hs_a59925vlDA = new $hs.Thunk();
    var hs_zdcrotate725vlDC = new $hs.Thunk();
    var hs_a60025vlDE = new $hs.Thunk();
    var hs_zdcbit725vlDG = new $hs.Thunk();
    var hs_a60125vlDI = new $hs.Thunk();
    var hs_zdcsetBit725vlDK = new $hs.Thunk();
    var hs_a60225vlDM = new $hs.Thunk();
    var hs_zdcclearBit725vlDO = new $hs.Thunk();
    var hs_a60325vlDQ = new $hs.Thunk();
    var hs_zdccomplementBit725vlDS = new $hs.Thunk();
    var hs_a60425vlDU = new $hs.Thunk();
    var hs_zdctestBit725vlDW = new $hs.Thunk();
    var hs_a60525vlDY = new $hs.Thunk();
    var hs_zdcbitSizze725vlE0 = new $hs.Thunk();
    var hs_a60625vlE2 = new $hs.Thunk();
    var hs_zdcisSigned725vlE4 = new $hs.Thunk();
    var hs_a60725vlE6 = new $hs.Thunk();
    var hs_zdcshiftL725vlE8 = new $hs.Thunk();
    var hs_a60825vlEa = new $hs.Thunk();
    var hs_zdcshiftR725vlEc = new $hs.Thunk();
    var hs_a60925vlEe = new $hs.Thunk();
    var hs_zdcrotateL725vlEg = new $hs.Thunk();
    var hs_a61025vlEi = new $hs.Thunk();
    var hs_zdcrotateR725vlEk = new $hs.Thunk();
    var hs_a61125vlEm = new $hs.Thunk();
    var hs_zdcquot725vlEo = new $hs.Thunk();
    var hs_a61225vlEq = new $hs.Thunk();
    var hs_zdcrem725vlEs = new $hs.Thunk();
    var hs_a61325vlEu = new $hs.Thunk();
    var hs_zdcdiv725vlEw = new $hs.Thunk();
    var hs_a61425vlEy = new $hs.Thunk();
    var hs_zdcmod725vlEA = new $hs.Thunk();
    var hs_a61525vlEC = new $hs.Thunk();
    var hs_zdcquotRem725vlEE = new $hs.Thunk();
    var hs_a61625vlEG = new $hs.Thunk();
    var hs_zdcdivMod725vlEI = new $hs.Thunk();
    var hs_a61725vlEK = new $hs.Thunk();
    var hs_zdctoInteger725vlEM = new $hs.Thunk();
    var hs_a61825vlEO = new $hs.Thunk();
    var hs_zdcminBound725vlEQ = new $hs.Thunk();
    var hs_a61925vlES = new $hs.Thunk();
    var hs_zdcmaxBound725vlEU = new $hs.Thunk();
    var hs_a62025vlEW = new $hs.Thunk();
    var hs_zdctoRational925vlEY = new $hs.Thunk();
    var hs_a62125vlF0 = new $hs.Thunk();
    var hs_zdcsizzeOf925vlF2 = new $hs.Thunk();
    var hs_a62225vlF4 = new $hs.Thunk();
    var hs_zdcalignment925vlF6 = new $hs.Thunk();
    var hs_a62325vlF8 = new $hs.Thunk();
    var hs_zdcpeekElemOff925vlFa = new $hs.Thunk();
    var hs_a62425vlFc = new $hs.Thunk();
    var hs_zdcpokeElemOff925vlFe = new $hs.Thunk();
    var hs_a62525vlFg = new $hs.Thunk();
    var hs_zdcpeekByteOff925vlFi = new $hs.Thunk();
    var hs_a62625vlFk = new $hs.Thunk();
    var hs_zdcpokeByteOff925vlFm = new $hs.Thunk();
    var hs_a62725vlFo = new $hs.Thunk();
    var hs_zdcpeek925vlFq = new $hs.Thunk();
    var hs_a62825vlFs = new $hs.Thunk();
    var hs_zdcpoke925vlFu = new $hs.Thunk();
    var hs_a62925vlFw = new $hs.Thunk();
    var hs_zdcsucc925vlFy = new $hs.Thunk();
    var hs_a63025vlFA = new $hs.Thunk();
    var hs_zdcpred925vlFC = new $hs.Thunk();
    var hs_a63125vlFE = new $hs.Thunk();
    var hs_zdctoEnum925vlFG = new $hs.Thunk();
    var hs_a63225vlFI = new $hs.Thunk();
    var hs_zdcfromEnum925vlFK = new $hs.Thunk();
    var hs_a63325vlFM = new $hs.Thunk();
    var hs_zdcenumFrom925vlFO = new $hs.Thunk();
    var hs_a63425vlFQ = new $hs.Thunk();
    var hs_zdcenumFromThen925vlFS = new $hs.Thunk();
    var hs_a63525vlFU = new $hs.Thunk();
    var hs_zdcenumFromTo925vlFW = new $hs.Thunk();
    var hs_a63625vlFY = new $hs.Thunk();
    var hs_zdcenumFromThenTo925vlG0 = new $hs.Thunk();
    var hs_a63725vlG2 = new $hs.Thunk();
    var hs_zdczp925vlG4 = new $hs.Thunk();
    var hs_a63825vlG6 = new $hs.Thunk();
    var hs_zdczt925vlG8 = new $hs.Thunk();
    var hs_a63925vlGa = new $hs.Thunk();
    var hs_zdczm925vlGc = new $hs.Thunk();
    var hs_a64025vlGe = new $hs.Thunk();
    var hs_zdcnegate925vlGg = new $hs.Thunk();
    var hs_a64125vlGi = new $hs.Thunk();
    var hs_zdcabs925vlGk = new $hs.Thunk();
    var hs_a64225vlGm = new $hs.Thunk();
    var hs_zdcsignum925vlGo = new $hs.Thunk();
    var hs_a64325vlGq = new $hs.Thunk();
    var hs_zdcfromInteger925vlGs = new $hs.Thunk();
    var hs_a64425vlGu = new $hs.Thunk();
    var hs_zdccompare925vlGw = new $hs.Thunk();
    var hs_a64525vlGy = new $hs.Thunk();
    var hs_zdczl925vlGA = new $hs.Thunk();
    var hs_a64625vlGC = new $hs.Thunk();
    var hs_zdczgze925vlGE = new $hs.Thunk();
    var hs_a64725vlGG = new $hs.Thunk();
    var hs_zdczg925vlGI = new $hs.Thunk();
    var hs_a64825vlGK = new $hs.Thunk();
    var hs_zdczlze925vlGM = new $hs.Thunk();
    var hs_a64925vlGO = new $hs.Thunk();
    var hs_zdcmax925vlGQ = new $hs.Thunk();
    var hs_a65025vlGS = new $hs.Thunk();
    var hs_zdcmin925vlGU = new $hs.Thunk();
    var hs_a65125vlGW = new $hs.Thunk();
    var hs_zdczeze925vlGY = new $hs.Thunk();
    var hs_a65225vlH0 = new $hs.Thunk();
    var hs_zdczsze925vlH2 = new $hs.Thunk();
    var hs_a65325vlH4 = new $hs.Thunk();
    var hs_zdcfloatRadix25vlH6 = new $hs.Thunk();
    var hs_a65425vlH8 = new $hs.Thunk();
    var hs_zdcfloatDigits25vlHa = new $hs.Thunk();
    var hs_a65525vlHc = new $hs.Thunk();
    var hs_zdcfloatRange25vlHe = new $hs.Thunk();
    var hs_a65625vlHg = new $hs.Thunk();
    var hs_zdcdecodeFloat25vlHi = new $hs.Thunk();
    var hs_a65725vlHk = new $hs.Thunk();
    var hs_zdcencodeFloat25vlHm = new $hs.Thunk();
    var hs_a65825vlHo = new $hs.Thunk();
    var hs_zdcexponent25vlHq = new $hs.Thunk();
    var hs_a65925vlHs = new $hs.Thunk();
    var hs_zdcsignificand25vlHu = new $hs.Thunk();
    var hs_a66025vlHw = new $hs.Thunk();
    var hs_zdcscaleFloat25vlHy = new $hs.Thunk();
    var hs_a66125vlHA = new $hs.Thunk();
    var hs_zdcisNaN25vlHC = new $hs.Thunk();
    var hs_a66225vlHE = new $hs.Thunk();
    var hs_zdcisInfinite25vlHG = new $hs.Thunk();
    var hs_a66325vlHI = new $hs.Thunk();
    var hs_zdcisDenormalizzed25vlHK = new $hs.Thunk();
    var hs_a66425vlHM = new $hs.Thunk();
    var hs_zdcisNegativeZZero25vlHO = new $hs.Thunk();
    var hs_a66525vlHQ = new $hs.Thunk();
    var hs_zdcisIEEE25vlHS = new $hs.Thunk();
    var hs_a66625vlHU = new $hs.Thunk();
    var hs_zdcatan225vlHW = new $hs.Thunk();
    var hs_a66725vlHY = new $hs.Thunk();
    var hs_zdcproperFraction25vlI0 = new $hs.Thunk();
    var hs_a66825vlI2 = new $hs.Thunk();
    var hs_zdctruncate25vlI4 = new $hs.Thunk();
    var hs_a66925vlI6 = new $hs.Thunk();
    var hs_zdcround25vlI8 = new $hs.Thunk();
    var hs_a67025vlIa = new $hs.Thunk();
    var hs_zdcceiling25vlIc = new $hs.Thunk();
    var hs_a67125vlIe = new $hs.Thunk();
    var hs_zdcfloor25vlIg = new $hs.Thunk();
    var hs_a67225vlIi = new $hs.Thunk();
    var hs_zdcpi25vlIk = new $hs.Thunk();
    var hs_a67325vlIm = new $hs.Thunk();
    var hs_zdcexp25vlIo = new $hs.Thunk();
    var hs_a67425vlIq = new $hs.Thunk();
    var hs_zdcsqrt25vlIs = new $hs.Thunk();
    var hs_a67525vlIu = new $hs.Thunk();
    var hs_zdclog25vlIw = new $hs.Thunk();
    var hs_a67625vlIy = new $hs.Thunk();
    var hs_zdcztzt25vlIA = new $hs.Thunk();
    var hs_a67725vlIC = new $hs.Thunk();
    var hs_zdclogBase25vlIE = new $hs.Thunk();
    var hs_a67825vlIG = new $hs.Thunk();
    var hs_zdcsin25vlII = new $hs.Thunk();
    var hs_a67925vlIK = new $hs.Thunk();
    var hs_zdctan25vlIM = new $hs.Thunk();
    var hs_a68025vlIO = new $hs.Thunk();
    var hs_zdccos25vlIQ = new $hs.Thunk();
    var hs_a68125vlIS = new $hs.Thunk();
    var hs_zdcasin25vlIU = new $hs.Thunk();
    var hs_a68225vlIW = new $hs.Thunk();
    var hs_zdcatan25vlIY = new $hs.Thunk();
    var hs_a68325vlJ0 = new $hs.Thunk();
    var hs_zdcacos25vlJ2 = new $hs.Thunk();
    var hs_a68425vlJ4 = new $hs.Thunk();
    var hs_zdcsinh25vlJ6 = new $hs.Thunk();
    var hs_a68525vlJ8 = new $hs.Thunk();
    var hs_zdctanh25vlJa = new $hs.Thunk();
    var hs_a68625vlJc = new $hs.Thunk();
    var hs_zdccosh25vlJe = new $hs.Thunk();
    var hs_a68725vlJg = new $hs.Thunk();
    var hs_zdcasinh25vlJi = new $hs.Thunk();
    var hs_a68825vlJk = new $hs.Thunk();
    var hs_zdcatanh25vlJm = new $hs.Thunk();
    var hs_a68925vlJo = new $hs.Thunk();
    var hs_zdcacosh25vlJq = new $hs.Thunk();
    var hs_a69025vlJs = new $hs.Thunk();
    var hs_zdczs25vlJu = new $hs.Thunk();
    var hs_a69125vlJw = new $hs.Thunk();
    var hs_zdcrecip25vlJy = new $hs.Thunk();
    var hs_a69225vlJA = new $hs.Thunk();
    var hs_zdcfromRational25vlJC = new $hs.Thunk();
    var hs_a69325vlJE = new $hs.Thunk();
    var hs_zdctoRational1025vlJG = new $hs.Thunk();
    var hs_a69425vlJI = new $hs.Thunk();
    var hs_zdcsizzeOf1025vlJK = new $hs.Thunk();
    var hs_a69525vlJM = new $hs.Thunk();
    var hs_zdcalignment1025vlJO = new $hs.Thunk();
    var hs_a69625vlJQ = new $hs.Thunk();
    var hs_zdcpeekElemOff1025vlJS = new $hs.Thunk();
    var hs_a69725vlJU = new $hs.Thunk();
    var hs_zdcpokeElemOff1025vlJW = new $hs.Thunk();
    var hs_a69825vlJY = new $hs.Thunk();
    var hs_zdcpeekByteOff1025vlK0 = new $hs.Thunk();
    var hs_a69925vlK2 = new $hs.Thunk();
    var hs_zdcpokeByteOff1025vlK4 = new $hs.Thunk();
    var hs_a70025vlK6 = new $hs.Thunk();
    var hs_zdcpeek1025vlK8 = new $hs.Thunk();
    var hs_a70125vlKa = new $hs.Thunk();
    var hs_zdcpoke1025vlKc = new $hs.Thunk();
    var hs_a70225vlKe = new $hs.Thunk();
    var hs_zdcsucc1025vlKg = new $hs.Thunk();
    var hs_a70325vlKi = new $hs.Thunk();
    var hs_zdcpred1025vlKk = new $hs.Thunk();
    var hs_a70425vlKm = new $hs.Thunk();
    var hs_zdctoEnum1025vlKo = new $hs.Thunk();
    var hs_a70525vlKq = new $hs.Thunk();
    var hs_zdcfromEnum1025vlKs = new $hs.Thunk();
    var hs_a70625vlKu = new $hs.Thunk();
    var hs_zdcenumFrom1025vlKw = new $hs.Thunk();
    var hs_a70725vlKy = new $hs.Thunk();
    var hs_zdcenumFromThen1025vlKA = new $hs.Thunk();
    var hs_a70825vlKC = new $hs.Thunk();
    var hs_zdcenumFromTo1025vlKE = new $hs.Thunk();
    var hs_a70925vlKG = new $hs.Thunk();
    var hs_zdcenumFromThenTo1025vlKI = new $hs.Thunk();
    var hs_a71025vlKK = new $hs.Thunk();
    var hs_zdczp1025vlKM = new $hs.Thunk();
    var hs_a71125vlKO = new $hs.Thunk();
    var hs_zdczt1025vlKQ = new $hs.Thunk();
    var hs_a71225vlKS = new $hs.Thunk();
    var hs_zdczm1025vlKU = new $hs.Thunk();
    var hs_a71325vlKW = new $hs.Thunk();
    var hs_zdcnegate1025vlKY = new $hs.Thunk();
    var hs_a71425vlL0 = new $hs.Thunk();
    var hs_zdcabs1025vlL2 = new $hs.Thunk();
    var hs_a71525vlL4 = new $hs.Thunk();
    var hs_zdcsignum1025vlL6 = new $hs.Thunk();
    var hs_a71625vlL8 = new $hs.Thunk();
    var hs_zdcfromInteger1025vlLa = new $hs.Thunk();
    var hs_a71725vlLc = new $hs.Thunk();
    var hs_zdccompare1025vlLe = new $hs.Thunk();
    var hs_a71825vlLg = new $hs.Thunk();
    var hs_zdczl1025vlLi = new $hs.Thunk();
    var hs_a71925vlLk = new $hs.Thunk();
    var hs_zdczgze1025vlLm = new $hs.Thunk();
    var hs_a72025vlLo = new $hs.Thunk();
    var hs_zdczg1025vlLq = new $hs.Thunk();
    var hs_a72125vlLs = new $hs.Thunk();
    var hs_zdczlze1025vlLu = new $hs.Thunk();
    var hs_a72225vlLw = new $hs.Thunk();
    var hs_zdcmax1025vlLy = new $hs.Thunk();
    var hs_a72325vlLA = new $hs.Thunk();
    var hs_zdcmin1025vlLC = new $hs.Thunk();
    var hs_a72425vlLE = new $hs.Thunk();
    var hs_zdczeze1025vlLG = new $hs.Thunk();
    var hs_a72525vlLI = new $hs.Thunk();
    var hs_zdczsze1025vlLK = new $hs.Thunk();
    var hs_a72625vlLM = new $hs.Thunk();
    var hs_zdcfloatRadix125vlLO = new $hs.Thunk();
    var hs_a72725vlLQ = new $hs.Thunk();
    var hs_zdcfloatDigits125vlLS = new $hs.Thunk();
    var hs_a72825vlLU = new $hs.Thunk();
    var hs_zdcfloatRange125vlLW = new $hs.Thunk();
    var hs_a72925vlLY = new $hs.Thunk();
    var hs_zdcdecodeFloat125vlM0 = new $hs.Thunk();
    var hs_a73025vlM2 = new $hs.Thunk();
    var hs_zdcencodeFloat125vlM4 = new $hs.Thunk();
    var hs_a73125vlM6 = new $hs.Thunk();
    var hs_zdcexponent125vlM8 = new $hs.Thunk();
    var hs_a73225vlMa = new $hs.Thunk();
    var hs_zdcsignificand125vlMc = new $hs.Thunk();
    var hs_a73325vlMe = new $hs.Thunk();
    var hs_zdcscaleFloat125vlMg = new $hs.Thunk();
    var hs_a73425vlMi = new $hs.Thunk();
    var hs_zdcisNaN125vlMk = new $hs.Thunk();
    var hs_a73525vlMm = new $hs.Thunk();
    var hs_zdcisInfinite125vlMo = new $hs.Thunk();
    var hs_a73625vlMq = new $hs.Thunk();
    var hs_zdcisDenormalizzed125vlMs = new $hs.Thunk();
    var hs_a73725vlMu = new $hs.Thunk();
    var hs_zdcisNegativeZZero125vlMw = new $hs.Thunk();
    var hs_a73825vlMy = new $hs.Thunk();
    var hs_zdcisIEEE125vlMA = new $hs.Thunk();
    var hs_a73925vlMC = new $hs.Thunk();
    var hs_zdcatan125vlME = new $hs.Thunk();
    var hs_a74025vlMG = new $hs.Thunk();
    var hs_zdcproperFraction125vlMI = new $hs.Thunk();
    var hs_a74125vlMK = new $hs.Thunk();
    var hs_zdctruncate125vlMM = new $hs.Thunk();
    var hs_a74225vlMO = new $hs.Thunk();
    var hs_zdcround125vlMQ = new $hs.Thunk();
    var hs_a74325vlMS = new $hs.Thunk();
    var hs_zdcceiling125vlMU = new $hs.Thunk();
    var hs_a74425vlMW = new $hs.Thunk();
    var hs_zdcfloor125vlMY = new $hs.Thunk();
    var hs_a74525vlN0 = new $hs.Thunk();
    var hs_zdcpi125vlN2 = new $hs.Thunk();
    var hs_a74625vlN4 = new $hs.Thunk();
    var hs_zdcexp125vlN6 = new $hs.Thunk();
    var hs_a74725vlN8 = new $hs.Thunk();
    var hs_zdcsqrt125vlNa = new $hs.Thunk();
    var hs_a74825vlNc = new $hs.Thunk();
    var hs_zdclog125vlNe = new $hs.Thunk();
    var hs_a74925vlNg = new $hs.Thunk();
    var hs_zdcztzt125vlNi = new $hs.Thunk();
    var hs_a75025vlNk = new $hs.Thunk();
    var hs_zdclogBase125vlNm = new $hs.Thunk();
    var hs_a75125vlNo = new $hs.Thunk();
    var hs_zdcsin125vlNq = new $hs.Thunk();
    var hs_a75225vlNs = new $hs.Thunk();
    var hs_zdctan125vlNu = new $hs.Thunk();
    var hs_a75325vlNw = new $hs.Thunk();
    var hs_zdccos125vlNy = new $hs.Thunk();
    var hs_a75425vlNA = new $hs.Thunk();
    var hs_zdcasin125vlNC = new $hs.Thunk();
    var hs_a75525vlNE = new $hs.Thunk();
    var hs_zdcatan325vlNG = new $hs.Thunk();
    var hs_a75625vlNI = new $hs.Thunk();
    var hs_zdcacos125vlNK = new $hs.Thunk();
    var hs_a75725vlNM = new $hs.Thunk();
    var hs_zdcsinh125vlNO = new $hs.Thunk();
    var hs_a75825vlNQ = new $hs.Thunk();
    var hs_zdctanh125vlNS = new $hs.Thunk();
    var hs_a75925vlNU = new $hs.Thunk();
    var hs_zdccosh125vlNW = new $hs.Thunk();
    var hs_a76025vlNY = new $hs.Thunk();
    var hs_zdcasinh125vlO0 = new $hs.Thunk();
    var hs_a76125vlO2 = new $hs.Thunk();
    var hs_zdcatanh125vlO4 = new $hs.Thunk();
    var hs_a76225vlO6 = new $hs.Thunk();
    var hs_zdcacosh125vlO8 = new $hs.Thunk();
    var hs_a76325vlOa = new $hs.Thunk();
    var hs_zdczs125vlOc = new $hs.Thunk();
    var hs_a76425vlOe = new $hs.Thunk();
    var hs_zdcrecip125vlOg = new $hs.Thunk();
    var hs_a76525vlOi = new $hs.Thunk();
    var hs_zdcfromRational125vlOk = new $hs.Thunk();
    var hs_a76625vlOm = new $hs.Thunk();
    var hs_zdctoRational1125vlOo = new $hs.Thunk();
    var hs_a76725vlOq = new $hs.Thunk();
    var hs_zdcsizzeOf1125vlOs = new $hs.Thunk();
    var hs_a76825vlOu = new $hs.Thunk();
    var hs_zdcalignment1125vlOw = new $hs.Thunk();
    var hs_a76925vlOy = new $hs.Thunk();
    var hs_zdcpeekElemOff1125vlOA = new $hs.Thunk();
    var hs_a77025vlOC = new $hs.Thunk();
    var hs_zdcpokeElemOff1125vlOE = new $hs.Thunk();
    var hs_a77125vlOG = new $hs.Thunk();
    var hs_zdcpeekByteOff1125vlOI = new $hs.Thunk();
    var hs_a77225vlOK = new $hs.Thunk();
    var hs_zdcpokeByteOff1125vlOM = new $hs.Thunk();
    var hs_a77325vlOO = new $hs.Thunk();
    var hs_zdcpeek1125vlOQ = new $hs.Thunk();
    var hs_a77425vlOS = new $hs.Thunk();
    var hs_zdcpoke1125vlOU = new $hs.Thunk();
    var hs_a77525vlOW = new $hs.Thunk();
    var hs_zdcsucc1125vlOY = new $hs.Thunk();
    var hs_a77625vlP0 = new $hs.Thunk();
    var hs_zdcpred1125vlP2 = new $hs.Thunk();
    var hs_a77725vlP4 = new $hs.Thunk();
    var hs_zdctoEnum1125vlP6 = new $hs.Thunk();
    var hs_a77825vlP8 = new $hs.Thunk();
    var hs_zdcfromEnum1125vlPa = new $hs.Thunk();
    var hs_a77925vlPc = new $hs.Thunk();
    var hs_zdcenumFrom1125vlPe = new $hs.Thunk();
    var hs_a78025vlPg = new $hs.Thunk();
    var hs_zdcenumFromThen1125vlPi = new $hs.Thunk();
    var hs_a78125vlPk = new $hs.Thunk();
    var hs_zdcenumFromTo1125vlPm = new $hs.Thunk();
    var hs_a78225vlPo = new $hs.Thunk();
    var hs_zdcenumFromThenTo1125vlPq = new $hs.Thunk();
    var hs_a78325vlPs = new $hs.Thunk();
    var hs_zdczp1125vlPu = new $hs.Thunk();
    var hs_a78425vlPw = new $hs.Thunk();
    var hs_zdczt1125vlPy = new $hs.Thunk();
    var hs_a78525vlPA = new $hs.Thunk();
    var hs_zdczm1125vlPC = new $hs.Thunk();
    var hs_a78625vlPE = new $hs.Thunk();
    var hs_zdcnegate1125vlPG = new $hs.Thunk();
    var hs_a78725vlPI = new $hs.Thunk();
    var hs_zdcabs1125vlPK = new $hs.Thunk();
    var hs_a78825vlPM = new $hs.Thunk();
    var hs_zdcsignum1125vlPO = new $hs.Thunk();
    var hs_a78925vlPQ = new $hs.Thunk();
    var hs_zdcfromInteger1125vlPS = new $hs.Thunk();
    var hs_a79025vlPU = new $hs.Thunk();
    var hs_zdccompare1125vlPW = new $hs.Thunk();
    var hs_a79125vlPY = new $hs.Thunk();
    var hs_zdczl1125vlQ0 = new $hs.Thunk();
    var hs_a79225vlQ2 = new $hs.Thunk();
    var hs_zdczgze1125vlQ4 = new $hs.Thunk();
    var hs_a79325vlQ6 = new $hs.Thunk();
    var hs_zdczg1125vlQ8 = new $hs.Thunk();
    var hs_a79425vlQa = new $hs.Thunk();
    var hs_zdczlze1125vlQc = new $hs.Thunk();
    var hs_a79525vlQe = new $hs.Thunk();
    var hs_zdcmax1125vlQg = new $hs.Thunk();
    var hs_a79625vlQi = new $hs.Thunk();
    var hs_zdcmin1125vlQk = new $hs.Thunk();
    var hs_a79725vlQm = new $hs.Thunk();
    var hs_zdczeze1125vlQo = new $hs.Thunk();
    var hs_a79825vlQq = new $hs.Thunk();
    var hs_zdczsze1125vlQs = new $hs.Thunk();
    var hs_a79925vlQu = new $hs.Thunk();
    var hs_zdczizazi825vlQw = new $hs.Thunk();
    var hs_a80025vlQy = new $hs.Thunk();
    var hs_zdczizbzi825vlQA = new $hs.Thunk();
    var hs_a80125vlQC = new $hs.Thunk();
    var hs_zdcxor825vlQE = new $hs.Thunk();
    var hs_a80225vlQG = new $hs.Thunk();
    var hs_zdccomplement825vlQI = new $hs.Thunk();
    var hs_a80325vlQK = new $hs.Thunk();
    var hs_zdcshift825vlQM = new $hs.Thunk();
    var hs_a80425vlQO = new $hs.Thunk();
    var hs_zdcrotate825vlQQ = new $hs.Thunk();
    var hs_a80525vlQS = new $hs.Thunk();
    var hs_zdcbit825vlQU = new $hs.Thunk();
    var hs_a80625vlQW = new $hs.Thunk();
    var hs_zdcsetBit825vlQY = new $hs.Thunk();
    var hs_a80725vlR0 = new $hs.Thunk();
    var hs_zdcclearBit825vlR2 = new $hs.Thunk();
    var hs_a80825vlR4 = new $hs.Thunk();
    var hs_zdccomplementBit825vlR6 = new $hs.Thunk();
    var hs_a80925vlR8 = new $hs.Thunk();
    var hs_zdctestBit825vlRa = new $hs.Thunk();
    var hs_a81025vlRc = new $hs.Thunk();
    var hs_zdcbitSizze825vlRe = new $hs.Thunk();
    var hs_a81125vlRg = new $hs.Thunk();
    var hs_zdcisSigned825vlRi = new $hs.Thunk();
    var hs_a81225vlRk = new $hs.Thunk();
    var hs_zdcshiftL825vlRm = new $hs.Thunk();
    var hs_a81325vlRo = new $hs.Thunk();
    var hs_zdcshiftR825vlRq = new $hs.Thunk();
    var hs_a81425vlRs = new $hs.Thunk();
    var hs_zdcrotateL825vlRu = new $hs.Thunk();
    var hs_a81525vlRw = new $hs.Thunk();
    var hs_zdcrotateR825vlRy = new $hs.Thunk();
    var hs_a81625vlRA = new $hs.Thunk();
    var hs_zdcquot825vlRC = new $hs.Thunk();
    var hs_a81725vlRE = new $hs.Thunk();
    var hs_zdcrem825vlRG = new $hs.Thunk();
    var hs_a81825vlRI = new $hs.Thunk();
    var hs_zdcdiv825vlRK = new $hs.Thunk();
    var hs_a81925vlRM = new $hs.Thunk();
    var hs_zdcmod825vlRO = new $hs.Thunk();
    var hs_a82025vlRQ = new $hs.Thunk();
    var hs_zdcquotRem825vlRS = new $hs.Thunk();
    var hs_a82125vlRU = new $hs.Thunk();
    var hs_zdcdivMod825vlRW = new $hs.Thunk();
    var hs_a82225vlRY = new $hs.Thunk();
    var hs_zdctoInteger825vlS0 = new $hs.Thunk();
    var hs_a82325vlS2 = new $hs.Thunk();
    var hs_zdcminBound825vlS4 = new $hs.Thunk();
    var hs_a82425vlS6 = new $hs.Thunk();
    var hs_zdcmaxBound825vlS8 = new $hs.Thunk();
    var hs_a82525vlSa = new $hs.Thunk();
    var hs_zdctoRational1225vlSc = new $hs.Thunk();
    var hs_a82625vlSe = new $hs.Thunk();
    var hs_zdcsizzeOf1225vlSg = new $hs.Thunk();
    var hs_a82725vlSi = new $hs.Thunk();
    var hs_zdcalignment1225vlSk = new $hs.Thunk();
    var hs_a82825vlSm = new $hs.Thunk();
    var hs_zdcpeekElemOff1225vlSo = new $hs.Thunk();
    var hs_a82925vlSq = new $hs.Thunk();
    var hs_zdcpokeElemOff1225vlSs = new $hs.Thunk();
    var hs_a83025vlSu = new $hs.Thunk();
    var hs_zdcpeekByteOff1225vlSw = new $hs.Thunk();
    var hs_a83125vlSy = new $hs.Thunk();
    var hs_zdcpokeByteOff1225vlSA = new $hs.Thunk();
    var hs_a83225vlSC = new $hs.Thunk();
    var hs_zdcpeek1225vlSE = new $hs.Thunk();
    var hs_a83325vlSG = new $hs.Thunk();
    var hs_zdcpoke1225vlSI = new $hs.Thunk();
    var hs_a83425vlSK = new $hs.Thunk();
    var hs_zdcsucc1225vlSM = new $hs.Thunk();
    var hs_a83525vlSO = new $hs.Thunk();
    var hs_zdcpred1225vlSQ = new $hs.Thunk();
    var hs_a83625vlSS = new $hs.Thunk();
    var hs_zdctoEnum1225vlSU = new $hs.Thunk();
    var hs_a83725vlSW = new $hs.Thunk();
    var hs_zdcfromEnum1225vlSY = new $hs.Thunk();
    var hs_a83825vlT0 = new $hs.Thunk();
    var hs_zdcenumFrom1225vlT2 = new $hs.Thunk();
    var hs_a83925vlT4 = new $hs.Thunk();
    var hs_zdcenumFromThen1225vlT6 = new $hs.Thunk();
    var hs_a84025vlT8 = new $hs.Thunk();
    var hs_zdcenumFromTo1225vlTa = new $hs.Thunk();
    var hs_a84125vlTc = new $hs.Thunk();
    var hs_zdcenumFromThenTo1225vlTe = new $hs.Thunk();
    var hs_a84225vlTg = new $hs.Thunk();
    var hs_zdczp1225vlTi = new $hs.Thunk();
    var hs_a84325vlTk = new $hs.Thunk();
    var hs_zdczt1225vlTm = new $hs.Thunk();
    var hs_a84425vlTo = new $hs.Thunk();
    var hs_zdczm1225vlTq = new $hs.Thunk();
    var hs_a84525vlTs = new $hs.Thunk();
    var hs_zdcnegate1225vlTu = new $hs.Thunk();
    var hs_a84625vlTw = new $hs.Thunk();
    var hs_zdcabs1225vlTy = new $hs.Thunk();
    var hs_a84725vlTA = new $hs.Thunk();
    var hs_zdcsignum1225vlTC = new $hs.Thunk();
    var hs_a84825vlTE = new $hs.Thunk();
    var hs_zdcfromInteger1225vlTG = new $hs.Thunk();
    var hs_a84925vlTI = new $hs.Thunk();
    var hs_zdccompare1225vlTK = new $hs.Thunk();
    var hs_a85025vlTM = new $hs.Thunk();
    var hs_zdczl1225vlTO = new $hs.Thunk();
    var hs_a85125vlTQ = new $hs.Thunk();
    var hs_zdczgze1225vlTS = new $hs.Thunk();
    var hs_a85225vlTU = new $hs.Thunk();
    var hs_zdczg1225vlTW = new $hs.Thunk();
    var hs_a85325vlTY = new $hs.Thunk();
    var hs_zdczlze1225vlU0 = new $hs.Thunk();
    var hs_a85425vlU2 = new $hs.Thunk();
    var hs_zdcmax1225vlU4 = new $hs.Thunk();
    var hs_a85525vlU6 = new $hs.Thunk();
    var hs_zdcmin1225vlU8 = new $hs.Thunk();
    var hs_a85625vlUa = new $hs.Thunk();
    var hs_zdczeze1225vlUc = new $hs.Thunk();
    var hs_a85725vlUe = new $hs.Thunk();
    var hs_zdczsze1225vlUg = new $hs.Thunk();
    var hs_a85825vlUi = new $hs.Thunk();
    var hs_zdczizazi925vlUk = new $hs.Thunk();
    var hs_a85925vlUm = new $hs.Thunk();
    var hs_zdczizbzi925vlUo = new $hs.Thunk();
    var hs_a86025vlUq = new $hs.Thunk();
    var hs_zdcxor925vlUs = new $hs.Thunk();
    var hs_a86125vlUu = new $hs.Thunk();
    var hs_zdccomplement925vlUw = new $hs.Thunk();
    var hs_a86225vlUy = new $hs.Thunk();
    var hs_zdcshift925vlUA = new $hs.Thunk();
    var hs_a86325vlUC = new $hs.Thunk();
    var hs_zdcrotate925vlUE = new $hs.Thunk();
    var hs_a86425vlUG = new $hs.Thunk();
    var hs_zdcbit925vlUI = new $hs.Thunk();
    var hs_a86525vlUK = new $hs.Thunk();
    var hs_zdcsetBit925vlUM = new $hs.Thunk();
    var hs_a86625vlUO = new $hs.Thunk();
    var hs_zdcclearBit925vlUQ = new $hs.Thunk();
    var hs_a86725vlUS = new $hs.Thunk();
    var hs_zdccomplementBit925vlUU = new $hs.Thunk();
    var hs_a86825vlUW = new $hs.Thunk();
    var hs_zdctestBit925vlUY = new $hs.Thunk();
    var hs_a86925vlV0 = new $hs.Thunk();
    var hs_zdcbitSizze925vlV2 = new $hs.Thunk();
    var hs_a87025vlV4 = new $hs.Thunk();
    var hs_zdcisSigned925vlV6 = new $hs.Thunk();
    var hs_a87125vlV8 = new $hs.Thunk();
    var hs_zdcshiftL925vlVa = new $hs.Thunk();
    var hs_a87225vlVc = new $hs.Thunk();
    var hs_zdcshiftR925vlVe = new $hs.Thunk();
    var hs_a87325vlVg = new $hs.Thunk();
    var hs_zdcrotateL925vlVi = new $hs.Thunk();
    var hs_a87425vlVk = new $hs.Thunk();
    var hs_zdcrotateR925vlVm = new $hs.Thunk();
    var hs_a87525vlVo = new $hs.Thunk();
    var hs_zdcquot925vlVq = new $hs.Thunk();
    var hs_a87625vlVs = new $hs.Thunk();
    var hs_zdcrem925vlVu = new $hs.Thunk();
    var hs_a87725vlVw = new $hs.Thunk();
    var hs_zdcdiv925vlVy = new $hs.Thunk();
    var hs_a87825vlVA = new $hs.Thunk();
    var hs_zdcmod925vlVC = new $hs.Thunk();
    var hs_a87925vlVE = new $hs.Thunk();
    var hs_zdcquotRem925vlVG = new $hs.Thunk();
    var hs_a88025vlVI = new $hs.Thunk();
    var hs_zdcdivMod925vlVK = new $hs.Thunk();
    var hs_a88125vlVM = new $hs.Thunk();
    var hs_zdctoInteger925vlVO = new $hs.Thunk();
    var hs_a88225vlVQ = new $hs.Thunk();
    var hs_zdcminBound925vlVS = new $hs.Thunk();
    var hs_a88325vlVU = new $hs.Thunk();
    var hs_zdcmaxBound925vlVW = new $hs.Thunk();
    var hs_a88425vlVY = new $hs.Thunk();
    var hs_zdctoRational1325vlW0 = new $hs.Thunk();
    var hs_a88525vlW2 = new $hs.Thunk();
    var hs_zdcsizzeOf1325vlW4 = new $hs.Thunk();
    var hs_a88625vlW6 = new $hs.Thunk();
    var hs_zdcalignment1325vlW8 = new $hs.Thunk();
    var hs_a88725vlWa = new $hs.Thunk();
    var hs_zdcpeekElemOff1325vlWc = new $hs.Thunk();
    var hs_a88825vlWe = new $hs.Thunk();
    var hs_zdcpokeElemOff1325vlWg = new $hs.Thunk();
    var hs_a88925vlWi = new $hs.Thunk();
    var hs_zdcpeekByteOff1325vlWk = new $hs.Thunk();
    var hs_a89025vlWm = new $hs.Thunk();
    var hs_zdcpokeByteOff1325vlWo = new $hs.Thunk();
    var hs_a89125vlWq = new $hs.Thunk();
    var hs_zdcpeek1325vlWs = new $hs.Thunk();
    var hs_a89225vlWu = new $hs.Thunk();
    var hs_zdcpoke1325vlWw = new $hs.Thunk();
    var hs_a89325vlWy = new $hs.Thunk();
    var hs_zdcsucc1325vlWA = new $hs.Thunk();
    var hs_a89425vlWC = new $hs.Thunk();
    var hs_zdcpred1325vlWE = new $hs.Thunk();
    var hs_a89525vlWG = new $hs.Thunk();
    var hs_zdctoEnum1325vlWI = new $hs.Thunk();
    var hs_a89625vlWK = new $hs.Thunk();
    var hs_zdcfromEnum1325vlWM = new $hs.Thunk();
    var hs_a89725vlWO = new $hs.Thunk();
    var hs_zdcenumFrom1325vlWQ = new $hs.Thunk();
    var hs_a89825vlWS = new $hs.Thunk();
    var hs_zdcenumFromThen1325vlWU = new $hs.Thunk();
    var hs_a89925vlWW = new $hs.Thunk();
    var hs_zdcenumFromTo1325vlWY = new $hs.Thunk();
    var hs_a90025vlX0 = new $hs.Thunk();
    var hs_zdcenumFromThenTo1325vlX2 = new $hs.Thunk();
    var hs_a90125vlX4 = new $hs.Thunk();
    var hs_zdczp1325vlX6 = new $hs.Thunk();
    var hs_a90225vlX8 = new $hs.Thunk();
    var hs_zdczt1325vlXa = new $hs.Thunk();
    var hs_a90325vlXc = new $hs.Thunk();
    var hs_zdczm1325vlXe = new $hs.Thunk();
    var hs_a90425vlXg = new $hs.Thunk();
    var hs_zdcnegate1325vlXi = new $hs.Thunk();
    var hs_a90525vlXk = new $hs.Thunk();
    var hs_zdcabs1325vlXm = new $hs.Thunk();
    var hs_a90625vlXo = new $hs.Thunk();
    var hs_zdcsignum1325vlXq = new $hs.Thunk();
    var hs_a90725vlXs = new $hs.Thunk();
    var hs_zdcfromInteger1325vlXu = new $hs.Thunk();
    var hs_a90825vlXw = new $hs.Thunk();
    var hs_zdccompare1325vlXy = new $hs.Thunk();
    var hs_a90925vlXA = new $hs.Thunk();
    var hs_zdczl1325vlXC = new $hs.Thunk();
    var hs_a91025vlXE = new $hs.Thunk();
    var hs_zdczgze1325vlXG = new $hs.Thunk();
    var hs_a91125vlXI = new $hs.Thunk();
    var hs_zdczg1325vlXK = new $hs.Thunk();
    var hs_a91225vlXM = new $hs.Thunk();
    var hs_zdczlze1325vlXO = new $hs.Thunk();
    var hs_a91325vlXQ = new $hs.Thunk();
    var hs_zdcmax1325vlXS = new $hs.Thunk();
    var hs_a91425vlXU = new $hs.Thunk();
    var hs_zdcmin1325vlXW = new $hs.Thunk();
    var hs_a91525vlXY = new $hs.Thunk();
    var hs_zdczeze1325vlY0 = new $hs.Thunk();
    var hs_a91625vlY2 = new $hs.Thunk();
    var hs_zdczsze1325vlY4 = new $hs.Thunk();
    var hs_a91725vlY6 = new $hs.Thunk();
    var hs_zdczizazi1025vlY8 = new $hs.Thunk();
    var hs_a91825vlYa = new $hs.Thunk();
    var hs_zdczizbzi1025vlYc = new $hs.Thunk();
    var hs_a91925vlYe = new $hs.Thunk();
    var hs_zdcxor1025vlYg = new $hs.Thunk();
    var hs_a92025vlYi = new $hs.Thunk();
    var hs_zdccomplement1025vlYk = new $hs.Thunk();
    var hs_a92125vlYm = new $hs.Thunk();
    var hs_zdcshift1025vlYo = new $hs.Thunk();
    var hs_a92225vlYq = new $hs.Thunk();
    var hs_zdcrotate1025vlYs = new $hs.Thunk();
    var hs_a92325vlYu = new $hs.Thunk();
    var hs_zdcbit1025vlYw = new $hs.Thunk();
    var hs_a92425vlYy = new $hs.Thunk();
    var hs_zdcsetBit1025vlYA = new $hs.Thunk();
    var hs_a92525vlYC = new $hs.Thunk();
    var hs_zdcclearBit1025vlYE = new $hs.Thunk();
    var hs_a92625vlYG = new $hs.Thunk();
    var hs_zdccomplementBit1025vlYI = new $hs.Thunk();
    var hs_a92725vlYK = new $hs.Thunk();
    var hs_zdctestBit1025vlYM = new $hs.Thunk();
    var hs_a92825vlYO = new $hs.Thunk();
    var hs_zdcbitSizze1025vlYQ = new $hs.Thunk();
    var hs_a92925vlYS = new $hs.Thunk();
    var hs_zdcisSigned1025vlYU = new $hs.Thunk();
    var hs_a93025vlYW = new $hs.Thunk();
    var hs_zdcshiftL1025vlYY = new $hs.Thunk();
    var hs_a93125vlZ0 = new $hs.Thunk();
    var hs_zdcshiftR1025vlZ2 = new $hs.Thunk();
    var hs_a93225vlZ4 = new $hs.Thunk();
    var hs_zdcrotateL1025vlZ6 = new $hs.Thunk();
    var hs_a93325vlZ8 = new $hs.Thunk();
    var hs_zdcrotateR1025vlZa = new $hs.Thunk();
    var hs_a93425vlZc = new $hs.Thunk();
    var hs_zdcquot1025vlZe = new $hs.Thunk();
    var hs_a93525vlZg = new $hs.Thunk();
    var hs_zdcrem1025vlZi = new $hs.Thunk();
    var hs_a93625vlZk = new $hs.Thunk();
    var hs_zdcdiv1025vlZm = new $hs.Thunk();
    var hs_a93725vlZo = new $hs.Thunk();
    var hs_zdcmod1025vlZq = new $hs.Thunk();
    var hs_a93825vlZs = new $hs.Thunk();
    var hs_zdcquotRem1025vlZu = new $hs.Thunk();
    var hs_a93925vlZw = new $hs.Thunk();
    var hs_zdcdivMod1025vlZy = new $hs.Thunk();
    var hs_a94025vlZA = new $hs.Thunk();
    var hs_zdctoInteger1025vlZC = new $hs.Thunk();
    var hs_a94125vlZE = new $hs.Thunk();
    var hs_zdcminBound1025vlZG = new $hs.Thunk();
    var hs_a94225vlZI = new $hs.Thunk();
    var hs_zdcmaxBound1025vlZK = new $hs.Thunk();
    var hs_a94325vlZM = new $hs.Thunk();
    var hs_zdctoRational1425vlZO = new $hs.Thunk();
    var hs_a94425vlZQ = new $hs.Thunk();
    var hs_zdcsizzeOf1425vlZS = new $hs.Thunk();
    var hs_a94525vlZU = new $hs.Thunk();
    var hs_zdcalignment1425vlZW = new $hs.Thunk();
    var hs_a94625vlZY = new $hs.Thunk();
    var hs_zdcpeekElemOff1425vm00 = new $hs.Thunk();
    var hs_a94725vm02 = new $hs.Thunk();
    var hs_zdcpokeElemOff1425vm04 = new $hs.Thunk();
    var hs_a94825vm06 = new $hs.Thunk();
    var hs_zdcpeekByteOff1425vm08 = new $hs.Thunk();
    var hs_a94925vm0a = new $hs.Thunk();
    var hs_zdcpokeByteOff1425vm0c = new $hs.Thunk();
    var hs_a95025vm0e = new $hs.Thunk();
    var hs_zdcpeek1425vm0g = new $hs.Thunk();
    var hs_a95125vm0i = new $hs.Thunk();
    var hs_zdcpoke1425vm0k = new $hs.Thunk();
    var hs_a95225vm0m = new $hs.Thunk();
    var hs_zdcsucc1425vm0o = new $hs.Thunk();
    var hs_a95325vm0q = new $hs.Thunk();
    var hs_zdcpred1425vm0s = new $hs.Thunk();
    var hs_a95425vm0u = new $hs.Thunk();
    var hs_zdctoEnum1425vm0w = new $hs.Thunk();
    var hs_a95525vm0y = new $hs.Thunk();
    var hs_zdcfromEnum1425vm0A = new $hs.Thunk();
    var hs_a95625vm0C = new $hs.Thunk();
    var hs_zdcenumFrom1425vm0E = new $hs.Thunk();
    var hs_a95725vm0G = new $hs.Thunk();
    var hs_zdcenumFromThen1425vm0I = new $hs.Thunk();
    var hs_a95825vm0K = new $hs.Thunk();
    var hs_zdcenumFromTo1425vm0M = new $hs.Thunk();
    var hs_a95925vm0O = new $hs.Thunk();
    var hs_zdcenumFromThenTo1425vm0Q = new $hs.Thunk();
    var hs_a96025vm0S = new $hs.Thunk();
    var hs_zdczp1425vm0U = new $hs.Thunk();
    var hs_a96125vm0W = new $hs.Thunk();
    var hs_zdczt1425vm0Y = new $hs.Thunk();
    var hs_a96225vm10 = new $hs.Thunk();
    var hs_zdczm1425vm12 = new $hs.Thunk();
    var hs_a96325vm14 = new $hs.Thunk();
    var hs_zdcnegate1425vm16 = new $hs.Thunk();
    var hs_a96425vm18 = new $hs.Thunk();
    var hs_zdcabs1425vm1a = new $hs.Thunk();
    var hs_a96525vm1c = new $hs.Thunk();
    var hs_zdcsignum1425vm1e = new $hs.Thunk();
    var hs_a96625vm1g = new $hs.Thunk();
    var hs_zdcfromInteger1425vm1i = new $hs.Thunk();
    var hs_a96725vm1k = new $hs.Thunk();
    var hs_zdccompare1425vm1m = new $hs.Thunk();
    var hs_a96825vm1o = new $hs.Thunk();
    var hs_zdczl1425vm1q = new $hs.Thunk();
    var hs_a96925vm1s = new $hs.Thunk();
    var hs_zdczgze1425vm1u = new $hs.Thunk();
    var hs_a97025vm1w = new $hs.Thunk();
    var hs_zdczg1425vm1y = new $hs.Thunk();
    var hs_a97125vm1A = new $hs.Thunk();
    var hs_zdczlze1425vm1C = new $hs.Thunk();
    var hs_a97225vm1E = new $hs.Thunk();
    var hs_zdcmax1425vm1G = new $hs.Thunk();
    var hs_a97325vm1I = new $hs.Thunk();
    var hs_zdcmin1425vm1K = new $hs.Thunk();
    var hs_a97425vm1M = new $hs.Thunk();
    var hs_zdczeze1425vm1O = new $hs.Thunk();
    var hs_a97525vm1Q = new $hs.Thunk();
    var hs_zdczsze1425vm1S = new $hs.Thunk();
    var hs_a97625vm1U = new $hs.Thunk();
    var hs_zdczizazi1125vm1W = new $hs.Thunk();
    var hs_a97725vm1Y = new $hs.Thunk();
    var hs_zdczizbzi1125vm20 = new $hs.Thunk();
    var hs_a97825vm22 = new $hs.Thunk();
    var hs_zdcxor1125vm24 = new $hs.Thunk();
    var hs_a97925vm26 = new $hs.Thunk();
    var hs_zdccomplement1125vm28 = new $hs.Thunk();
    var hs_a98025vm2a = new $hs.Thunk();
    var hs_zdcshift1125vm2c = new $hs.Thunk();
    var hs_a98125vm2e = new $hs.Thunk();
    var hs_zdcrotate1125vm2g = new $hs.Thunk();
    var hs_a98225vm2i = new $hs.Thunk();
    var hs_zdcbit1125vm2k = new $hs.Thunk();
    var hs_a98325vm2m = new $hs.Thunk();
    var hs_zdcsetBit1125vm2o = new $hs.Thunk();
    var hs_a98425vm2q = new $hs.Thunk();
    var hs_zdcclearBit1125vm2s = new $hs.Thunk();
    var hs_a98525vm2u = new $hs.Thunk();
    var hs_zdccomplementBit1125vm2w = new $hs.Thunk();
    var hs_a98625vm2y = new $hs.Thunk();
    var hs_zdctestBit1125vm2A = new $hs.Thunk();
    var hs_a98725vm2C = new $hs.Thunk();
    var hs_zdcbitSizze1125vm2E = new $hs.Thunk();
    var hs_a98825vm2G = new $hs.Thunk();
    var hs_zdcisSigned1125vm2I = new $hs.Thunk();
    var hs_a98925vm2K = new $hs.Thunk();
    var hs_zdcshiftL1125vm2M = new $hs.Thunk();
    var hs_a99025vm2O = new $hs.Thunk();
    var hs_zdcshiftR1125vm2Q = new $hs.Thunk();
    var hs_a99125vm2S = new $hs.Thunk();
    var hs_zdcrotateL1125vm2U = new $hs.Thunk();
    var hs_a99225vm2W = new $hs.Thunk();
    var hs_zdcrotateR1125vm2Y = new $hs.Thunk();
    var hs_a99325vm30 = new $hs.Thunk();
    var hs_zdcquot1125vm32 = new $hs.Thunk();
    var hs_a99425vm34 = new $hs.Thunk();
    var hs_zdcrem1125vm36 = new $hs.Thunk();
    var hs_a99525vm38 = new $hs.Thunk();
    var hs_zdcdiv1125vm3a = new $hs.Thunk();
    var hs_a99625vm3c = new $hs.Thunk();
    var hs_zdcmod1125vm3e = new $hs.Thunk();
    var hs_a99725vm3g = new $hs.Thunk();
    var hs_zdcquotRem1125vm3i = new $hs.Thunk();
    var hs_a99825vm3k = new $hs.Thunk();
    var hs_zdcdivMod1125vm3m = new $hs.Thunk();
    var hs_a99925vm3o = new $hs.Thunk();
    var hs_zdctoInteger1125vm3q = new $hs.Thunk();
    var hs_a100025vm3s = new $hs.Thunk();
    var hs_zdcminBound1125vm3u = new $hs.Thunk();
    var hs_a100125vm3w = new $hs.Thunk();
    var hs_zdcmaxBound1125vm3y = new $hs.Thunk();
    var hs_a100225vm3A = new $hs.Thunk();
    var hs_zdctoRational1525vm3C = new $hs.Thunk();
    var hs_a100325vm3E = new $hs.Thunk();
    var hs_zdcsizzeOf1525vm3G = new $hs.Thunk();
    var hs_a100425vm3I = new $hs.Thunk();
    var hs_zdcalignment1525vm3K = new $hs.Thunk();
    var hs_a100525vm3M = new $hs.Thunk();
    var hs_zdcpeekElemOff1525vm3O = new $hs.Thunk();
    var hs_a100625vm3Q = new $hs.Thunk();
    var hs_zdcpokeElemOff1525vm3S = new $hs.Thunk();
    var hs_a100725vm3U = new $hs.Thunk();
    var hs_zdcpeekByteOff1525vm3W = new $hs.Thunk();
    var hs_a100825vm3Y = new $hs.Thunk();
    var hs_zdcpokeByteOff1525vm40 = new $hs.Thunk();
    var hs_a100925vm42 = new $hs.Thunk();
    var hs_zdcpeek1525vm44 = new $hs.Thunk();
    var hs_a101025vm46 = new $hs.Thunk();
    var hs_zdcpoke1525vm48 = new $hs.Thunk();
    var hs_a101125vm4a = new $hs.Thunk();
    var hs_zdcsucc1525vm4c = new $hs.Thunk();
    var hs_a101225vm4e = new $hs.Thunk();
    var hs_zdcpred1525vm4g = new $hs.Thunk();
    var hs_a101325vm4i = new $hs.Thunk();
    var hs_zdctoEnum1525vm4k = new $hs.Thunk();
    var hs_a101425vm4m = new $hs.Thunk();
    var hs_zdcfromEnum1525vm4o = new $hs.Thunk();
    var hs_a101525vm4q = new $hs.Thunk();
    var hs_zdcenumFrom1525vm4s = new $hs.Thunk();
    var hs_a101625vm4u = new $hs.Thunk();
    var hs_zdcenumFromThen1525vm4w = new $hs.Thunk();
    var hs_a101725vm4y = new $hs.Thunk();
    var hs_zdcenumFromTo1525vm4A = new $hs.Thunk();
    var hs_a101825vm4C = new $hs.Thunk();
    var hs_zdcenumFromThenTo1525vm4E = new $hs.Thunk();
    var hs_a101925vm4G = new $hs.Thunk();
    var hs_zdczp1525vm4I = new $hs.Thunk();
    var hs_a102025vm4K = new $hs.Thunk();
    var hs_zdczt1525vm4M = new $hs.Thunk();
    var hs_a102125vm4O = new $hs.Thunk();
    var hs_zdczm1525vm4Q = new $hs.Thunk();
    var hs_a102225vm4S = new $hs.Thunk();
    var hs_zdcnegate1525vm4U = new $hs.Thunk();
    var hs_a102325vm4W = new $hs.Thunk();
    var hs_zdcabs1525vm4Y = new $hs.Thunk();
    var hs_a102425vm50 = new $hs.Thunk();
    var hs_zdcsignum1525vm52 = new $hs.Thunk();
    var hs_a102525vm54 = new $hs.Thunk();
    var hs_zdcfromInteger1525vm56 = new $hs.Thunk();
    var hs_a102625vm58 = new $hs.Thunk();
    var hs_zdccompare1525vm5a = new $hs.Thunk();
    var hs_a102725vm5c = new $hs.Thunk();
    var hs_zdczl1525vm5e = new $hs.Thunk();
    var hs_a102825vm5g = new $hs.Thunk();
    var hs_zdczgze1525vm5i = new $hs.Thunk();
    var hs_a102925vm5k = new $hs.Thunk();
    var hs_zdczg1525vm5m = new $hs.Thunk();
    var hs_a103025vm5o = new $hs.Thunk();
    var hs_zdczlze1525vm5q = new $hs.Thunk();
    var hs_a103125vm5s = new $hs.Thunk();
    var hs_zdcmax1525vm5u = new $hs.Thunk();
    var hs_a103225vm5w = new $hs.Thunk();
    var hs_zdcmin1525vm5y = new $hs.Thunk();
    var hs_a103325vm5A = new $hs.Thunk();
    var hs_zdczeze1525vm5C = new $hs.Thunk();
    var hs_a103425vm5E = new $hs.Thunk();
    var hs_zdczsze1525vm5G = new $hs.Thunk();
    var hs_a103525vm5I = new $hs.Thunk();
    var hs_zdczizazi1225vm5K = new $hs.Thunk();
    var hs_a103625vm5M = new $hs.Thunk();
    var hs_zdczizbzi1225vm5O = new $hs.Thunk();
    var hs_a103725vm5Q = new $hs.Thunk();
    var hs_zdcxor1225vm5S = new $hs.Thunk();
    var hs_a103825vm5U = new $hs.Thunk();
    var hs_zdccomplement1225vm5W = new $hs.Thunk();
    var hs_a103925vm5Y = new $hs.Thunk();
    var hs_zdcshift1225vm60 = new $hs.Thunk();
    var hs_a104025vm62 = new $hs.Thunk();
    var hs_zdcrotate1225vm64 = new $hs.Thunk();
    var hs_a104125vm66 = new $hs.Thunk();
    var hs_zdcbit1225vm68 = new $hs.Thunk();
    var hs_a104225vm6a = new $hs.Thunk();
    var hs_zdcsetBit1225vm6c = new $hs.Thunk();
    var hs_a104325vm6e = new $hs.Thunk();
    var hs_zdcclearBit1225vm6g = new $hs.Thunk();
    var hs_a104425vm6i = new $hs.Thunk();
    var hs_zdccomplementBit1225vm6k = new $hs.Thunk();
    var hs_a104525vm6m = new $hs.Thunk();
    var hs_zdctestBit1225vm6o = new $hs.Thunk();
    var hs_a104625vm6q = new $hs.Thunk();
    var hs_zdcbitSizze1225vm6s = new $hs.Thunk();
    var hs_a104725vm6u = new $hs.Thunk();
    var hs_zdcisSigned1225vm6w = new $hs.Thunk();
    var hs_a104825vm6y = new $hs.Thunk();
    var hs_zdcshiftL1225vm6A = new $hs.Thunk();
    var hs_a104925vm6C = new $hs.Thunk();
    var hs_zdcshiftR1225vm6E = new $hs.Thunk();
    var hs_a105025vm6G = new $hs.Thunk();
    var hs_zdcrotateL1225vm6I = new $hs.Thunk();
    var hs_a105125vm6K = new $hs.Thunk();
    var hs_zdcrotateR1225vm6M = new $hs.Thunk();
    var hs_a105225vm6O = new $hs.Thunk();
    var hs_zdcquot1225vm6Q = new $hs.Thunk();
    var hs_a105325vm6S = new $hs.Thunk();
    var hs_zdcrem1225vm6U = new $hs.Thunk();
    var hs_a105425vm6W = new $hs.Thunk();
    var hs_zdcdiv1225vm6Y = new $hs.Thunk();
    var hs_a105525vm70 = new $hs.Thunk();
    var hs_zdcmod1225vm72 = new $hs.Thunk();
    var hs_a105625vm74 = new $hs.Thunk();
    var hs_zdcquotRem1225vm76 = new $hs.Thunk();
    var hs_a105725vm78 = new $hs.Thunk();
    var hs_zdcdivMod1225vm7a = new $hs.Thunk();
    var hs_a105825vm7c = new $hs.Thunk();
    var hs_zdctoInteger1225vm7e = new $hs.Thunk();
    var hs_a105925vm7g = new $hs.Thunk();
    var hs_zdcminBound1225vm7i = new $hs.Thunk();
    var hs_a106025vm7k = new $hs.Thunk();
    var hs_zdcmaxBound1225vm7m = new $hs.Thunk();
    var hs_a106125vm7o = new $hs.Thunk();
    var hs_zdctoRational1625vm7q = new $hs.Thunk();
    var hs_a106225vm7s = new $hs.Thunk();
    var hs_zdcsizzeOf1625vm7u = new $hs.Thunk();
    var hs_a106325vm7w = new $hs.Thunk();
    var hs_zdcalignment1625vm7y = new $hs.Thunk();
    var hs_a106425vm7A = new $hs.Thunk();
    var hs_zdcpeekElemOff1625vm7C = new $hs.Thunk();
    var hs_a106525vm7E = new $hs.Thunk();
    var hs_zdcpokeElemOff1625vm7G = new $hs.Thunk();
    var hs_a106625vm7I = new $hs.Thunk();
    var hs_zdcpeekByteOff1625vm7K = new $hs.Thunk();
    var hs_a106725vm7M = new $hs.Thunk();
    var hs_zdcpokeByteOff1625vm7O = new $hs.Thunk();
    var hs_a106825vm7Q = new $hs.Thunk();
    var hs_zdcpeek1625vm7S = new $hs.Thunk();
    var hs_a106925vm7U = new $hs.Thunk();
    var hs_zdcpoke1625vm7W = new $hs.Thunk();
    var hs_a107025vm7Y = new $hs.Thunk();
    var hs_zdcsucc1625vm80 = new $hs.Thunk();
    var hs_a107125vm82 = new $hs.Thunk();
    var hs_zdcpred1625vm84 = new $hs.Thunk();
    var hs_a107225vm86 = new $hs.Thunk();
    var hs_zdctoEnum1625vm88 = new $hs.Thunk();
    var hs_a107325vm8a = new $hs.Thunk();
    var hs_zdcfromEnum1625vm8c = new $hs.Thunk();
    var hs_a107425vm8e = new $hs.Thunk();
    var hs_zdcenumFrom1625vm8g = new $hs.Thunk();
    var hs_a107525vm8i = new $hs.Thunk();
    var hs_zdcenumFromThen1625vm8k = new $hs.Thunk();
    var hs_a107625vm8m = new $hs.Thunk();
    var hs_zdcenumFromTo1625vm8o = new $hs.Thunk();
    var hs_a107725vm8q = new $hs.Thunk();
    var hs_zdcenumFromThenTo1625vm8s = new $hs.Thunk();
    var hs_a107825vm8u = new $hs.Thunk();
    var hs_zdczp1625vm8w = new $hs.Thunk();
    var hs_a107925vm8y = new $hs.Thunk();
    var hs_zdczt1625vm8A = new $hs.Thunk();
    var hs_a108025vm8C = new $hs.Thunk();
    var hs_zdczm1625vm8E = new $hs.Thunk();
    var hs_a108125vm8G = new $hs.Thunk();
    var hs_zdcnegate1625vm8I = new $hs.Thunk();
    var hs_a108225vm8K = new $hs.Thunk();
    var hs_zdcabs1625vm8M = new $hs.Thunk();
    var hs_a108325vm8O = new $hs.Thunk();
    var hs_zdcsignum1625vm8Q = new $hs.Thunk();
    var hs_a108425vm8S = new $hs.Thunk();
    var hs_zdcfromInteger1625vm8U = new $hs.Thunk();
    var hs_a108525vm8W = new $hs.Thunk();
    var hs_zdccompare1625vm8Y = new $hs.Thunk();
    var hs_a108625vm90 = new $hs.Thunk();
    var hs_zdczl1625vm92 = new $hs.Thunk();
    var hs_a108725vm94 = new $hs.Thunk();
    var hs_zdczgze1625vm96 = new $hs.Thunk();
    var hs_a108825vm98 = new $hs.Thunk();
    var hs_zdczg1625vm9a = new $hs.Thunk();
    var hs_a108925vm9c = new $hs.Thunk();
    var hs_zdczlze1625vm9e = new $hs.Thunk();
    var hs_a109025vm9g = new $hs.Thunk();
    var hs_zdcmax1625vm9i = new $hs.Thunk();
    var hs_a109125vm9k = new $hs.Thunk();
    var hs_zdcmin1625vm9m = new $hs.Thunk();
    var hs_a109225vm9o = new $hs.Thunk();
    var hs_zdczeze1625vm9q = new $hs.Thunk();
    var hs_a109325vm9s = new $hs.Thunk();
    var hs_zdczsze1625vm9u = new $hs.Thunk();
    var hs_a109425vm9w = new $hs.Thunk();
    var hs_zdczizazi1325vm9y = new $hs.Thunk();
    var hs_a109525vm9A = new $hs.Thunk();
    var hs_zdczizbzi1325vm9C = new $hs.Thunk();
    var hs_a109625vm9E = new $hs.Thunk();
    var hs_zdcxor1325vm9G = new $hs.Thunk();
    var hs_a109725vm9I = new $hs.Thunk();
    var hs_zdccomplement1325vm9K = new $hs.Thunk();
    var hs_a109825vm9M = new $hs.Thunk();
    var hs_zdcshift1325vm9O = new $hs.Thunk();
    var hs_a109925vm9Q = new $hs.Thunk();
    var hs_zdcrotate1325vm9S = new $hs.Thunk();
    var hs_a110025vm9U = new $hs.Thunk();
    var hs_zdcbit1325vm9W = new $hs.Thunk();
    var hs_a110125vm9Y = new $hs.Thunk();
    var hs_zdcsetBit1325vma0 = new $hs.Thunk();
    var hs_a110225vma2 = new $hs.Thunk();
    var hs_zdcclearBit1325vma4 = new $hs.Thunk();
    var hs_a110325vma6 = new $hs.Thunk();
    var hs_zdccomplementBit1325vma8 = new $hs.Thunk();
    var hs_a110425vmaa = new $hs.Thunk();
    var hs_zdctestBit1325vmac = new $hs.Thunk();
    var hs_a110525vmae = new $hs.Thunk();
    var hs_zdcbitSizze1325vmag = new $hs.Thunk();
    var hs_a110625vmai = new $hs.Thunk();
    var hs_zdcisSigned1325vmak = new $hs.Thunk();
    var hs_a110725vmam = new $hs.Thunk();
    var hs_zdcshiftL1325vmao = new $hs.Thunk();
    var hs_a110825vmaq = new $hs.Thunk();
    var hs_zdcshiftR1325vmas = new $hs.Thunk();
    var hs_a110925vmau = new $hs.Thunk();
    var hs_zdcrotateL1325vmaw = new $hs.Thunk();
    var hs_a111025vmay = new $hs.Thunk();
    var hs_zdcrotateR1325vmaA = new $hs.Thunk();
    var hs_a111125vmaC = new $hs.Thunk();
    var hs_zdcquot1325vmaE = new $hs.Thunk();
    var hs_a111225vmaG = new $hs.Thunk();
    var hs_zdcrem1325vmaI = new $hs.Thunk();
    var hs_a111325vmaK = new $hs.Thunk();
    var hs_zdcdiv1325vmaM = new $hs.Thunk();
    var hs_a111425vmaO = new $hs.Thunk();
    var hs_zdcmod1325vmaQ = new $hs.Thunk();
    var hs_a111525vmaS = new $hs.Thunk();
    var hs_zdcquotRem1325vmaU = new $hs.Thunk();
    var hs_a111625vmaW = new $hs.Thunk();
    var hs_zdcdivMod1325vmaY = new $hs.Thunk();
    var hs_a111725vmb0 = new $hs.Thunk();
    var hs_zdctoInteger1325vmb2 = new $hs.Thunk();
    var hs_a111825vmb4 = new $hs.Thunk();
    var hs_zdcminBound1325vmb6 = new $hs.Thunk();
    var hs_a111925vmb8 = new $hs.Thunk();
    var hs_zdcmaxBound1325vmba = new $hs.Thunk();
    var hs_a112025vmbc = new $hs.Thunk();
    var hs_zdctoRational1725vmbe = new $hs.Thunk();
    var hs_a112125vmbg = new $hs.Thunk();
    var hs_zdcsizzeOf1725vmbi = new $hs.Thunk();
    var hs_a112225vmbk = new $hs.Thunk();
    var hs_zdcalignment1725vmbm = new $hs.Thunk();
    var hs_a112325vmbo = new $hs.Thunk();
    var hs_zdcpeekElemOff1725vmbq = new $hs.Thunk();
    var hs_a112425vmbs = new $hs.Thunk();
    var hs_zdcpokeElemOff1725vmbu = new $hs.Thunk();
    var hs_a112525vmbw = new $hs.Thunk();
    var hs_zdcpeekByteOff1725vmby = new $hs.Thunk();
    var hs_a112625vmbA = new $hs.Thunk();
    var hs_zdcpokeByteOff1725vmbC = new $hs.Thunk();
    var hs_a112725vmbE = new $hs.Thunk();
    var hs_zdcpeek1725vmbG = new $hs.Thunk();
    var hs_a112825vmbI = new $hs.Thunk();
    var hs_zdcpoke1725vmbK = new $hs.Thunk();
    var hs_a112925vmbM = new $hs.Thunk();
    var hs_zdcsucc1725vmbO = new $hs.Thunk();
    var hs_a113025vmbQ = new $hs.Thunk();
    var hs_zdcpred1725vmbS = new $hs.Thunk();
    var hs_a113125vmbU = new $hs.Thunk();
    var hs_zdctoEnum1725vmbW = new $hs.Thunk();
    var hs_a113225vmbY = new $hs.Thunk();
    var hs_zdcfromEnum1725vmc0 = new $hs.Thunk();
    var hs_a113325vmc2 = new $hs.Thunk();
    var hs_zdcenumFrom1725vmc4 = new $hs.Thunk();
    var hs_a113425vmc6 = new $hs.Thunk();
    var hs_zdcenumFromThen1725vmc8 = new $hs.Thunk();
    var hs_a113525vmca = new $hs.Thunk();
    var hs_zdcenumFromTo1725vmcc = new $hs.Thunk();
    var hs_a113625vmce = new $hs.Thunk();
    var hs_zdcenumFromThenTo1725vmcg = new $hs.Thunk();
    var hs_a113725vmci = new $hs.Thunk();
    var hs_zdczp1725vmck = new $hs.Thunk();
    var hs_a113825vmcm = new $hs.Thunk();
    var hs_zdczt1725vmco = new $hs.Thunk();
    var hs_a113925vmcq = new $hs.Thunk();
    var hs_zdczm1725vmcs = new $hs.Thunk();
    var hs_a114025vmcu = new $hs.Thunk();
    var hs_zdcnegate1725vmcw = new $hs.Thunk();
    var hs_a114125vmcy = new $hs.Thunk();
    var hs_zdcabs1725vmcA = new $hs.Thunk();
    var hs_a114225vmcC = new $hs.Thunk();
    var hs_zdcsignum1725vmcE = new $hs.Thunk();
    var hs_a114325vmcG = new $hs.Thunk();
    var hs_zdcfromInteger1725vmcI = new $hs.Thunk();
    var hs_a114425vmcK = new $hs.Thunk();
    var hs_zdccompare1725vmcM = new $hs.Thunk();
    var hs_a114525vmcO = new $hs.Thunk();
    var hs_zdczl1725vmcQ = new $hs.Thunk();
    var hs_a114625vmcS = new $hs.Thunk();
    var hs_zdczgze1725vmcU = new $hs.Thunk();
    var hs_a114725vmcW = new $hs.Thunk();
    var hs_zdczg1725vmcY = new $hs.Thunk();
    var hs_a114825vmd0 = new $hs.Thunk();
    var hs_zdczlze1725vmd2 = new $hs.Thunk();
    var hs_a114925vmd4 = new $hs.Thunk();
    var hs_zdcmax1725vmd6 = new $hs.Thunk();
    var hs_a115025vmd8 = new $hs.Thunk();
    var hs_zdcmin1725vmda = new $hs.Thunk();
    var hs_a115125vmdc = new $hs.Thunk();
    var hs_zdczeze1725vmde = new $hs.Thunk();
    var hs_a115225vmdg = new $hs.Thunk();
    var hs_zdczsze1725vmdi = new $hs.Thunk();
    var hs_a115325vmdk = new $hs.Thunk();
    var hs_zdczizazi1425vmdm = new $hs.Thunk();
    var hs_a115425vmdo = new $hs.Thunk();
    var hs_zdczizbzi1425vmdq = new $hs.Thunk();
    var hs_a115525vmds = new $hs.Thunk();
    var hs_zdcxor1425vmdu = new $hs.Thunk();
    var hs_a115625vmdw = new $hs.Thunk();
    var hs_zdccomplement1425vmdy = new $hs.Thunk();
    var hs_a115725vmdA = new $hs.Thunk();
    var hs_zdcshift1425vmdC = new $hs.Thunk();
    var hs_a115825vmdE = new $hs.Thunk();
    var hs_zdcrotate1425vmdG = new $hs.Thunk();
    var hs_a115925vmdI = new $hs.Thunk();
    var hs_zdcbit1425vmdK = new $hs.Thunk();
    var hs_a116025vmdM = new $hs.Thunk();
    var hs_zdcsetBit1425vmdO = new $hs.Thunk();
    var hs_a116125vmdQ = new $hs.Thunk();
    var hs_zdcclearBit1425vmdS = new $hs.Thunk();
    var hs_a116225vmdU = new $hs.Thunk();
    var hs_zdccomplementBit1425vmdW = new $hs.Thunk();
    var hs_a116325vmdY = new $hs.Thunk();
    var hs_zdctestBit1425vme0 = new $hs.Thunk();
    var hs_a116425vme2 = new $hs.Thunk();
    var hs_zdcbitSizze1425vme4 = new $hs.Thunk();
    var hs_a116525vme6 = new $hs.Thunk();
    var hs_zdcisSigned1425vme8 = new $hs.Thunk();
    var hs_a116625vmea = new $hs.Thunk();
    var hs_zdcshiftL1425vmec = new $hs.Thunk();
    var hs_a116725vmee = new $hs.Thunk();
    var hs_zdcshiftR1425vmeg = new $hs.Thunk();
    var hs_a116825vmei = new $hs.Thunk();
    var hs_zdcrotateL1425vmek = new $hs.Thunk();
    var hs_a116925vmem = new $hs.Thunk();
    var hs_zdcrotateR1425vmeo = new $hs.Thunk();
    var hs_a117025vmeq = new $hs.Thunk();
    var hs_zdcquot1425vmes = new $hs.Thunk();
    var hs_a117125vmeu = new $hs.Thunk();
    var hs_zdcrem1425vmew = new $hs.Thunk();
    var hs_a117225vmey = new $hs.Thunk();
    var hs_zdcdiv1425vmeA = new $hs.Thunk();
    var hs_a117325vmeC = new $hs.Thunk();
    var hs_zdcmod1425vmeE = new $hs.Thunk();
    var hs_a117425vmeG = new $hs.Thunk();
    var hs_zdcquotRem1425vmeI = new $hs.Thunk();
    var hs_a117525vmeK = new $hs.Thunk();
    var hs_zdcdivMod1425vmeM = new $hs.Thunk();
    var hs_a117625vmeO = new $hs.Thunk();
    var hs_zdctoInteger1425vmeQ = new $hs.Thunk();
    var hs_a117725vmeS = new $hs.Thunk();
    var hs_zdcminBound1425vmeU = new $hs.Thunk();
    var hs_a117825vmeW = new $hs.Thunk();
    var hs_zdcmaxBound1425vmeY = new $hs.Thunk();
    var hs_a117925vmf0 = new $hs.Thunk();
    var hs_zdctoRational1825vmf2 = new $hs.Thunk();
    var hs_a118025vmf4 = new $hs.Thunk();
    var hs_zdcsizzeOf1825vmf6 = new $hs.Thunk();
    var hs_a118125vmf8 = new $hs.Thunk();
    var hs_zdcalignment1825vmfa = new $hs.Thunk();
    var hs_a118225vmfc = new $hs.Thunk();
    var hs_zdcpeekElemOff1825vmfe = new $hs.Thunk();
    var hs_a118325vmfg = new $hs.Thunk();
    var hs_zdcpokeElemOff1825vmfi = new $hs.Thunk();
    var hs_a118425vmfk = new $hs.Thunk();
    var hs_zdcpeekByteOff1825vmfm = new $hs.Thunk();
    var hs_a118525vmfo = new $hs.Thunk();
    var hs_zdcpokeByteOff1825vmfq = new $hs.Thunk();
    var hs_a118625vmfs = new $hs.Thunk();
    var hs_zdcpeek1825vmfu = new $hs.Thunk();
    var hs_a118725vmfw = new $hs.Thunk();
    var hs_zdcpoke1825vmfy = new $hs.Thunk();
    var hs_a118825vmfA = new $hs.Thunk();
    var hs_zdcsucc1825vmfC = new $hs.Thunk();
    var hs_a118925vmfE = new $hs.Thunk();
    var hs_zdcpred1825vmfG = new $hs.Thunk();
    var hs_a119025vmfI = new $hs.Thunk();
    var hs_zdctoEnum1825vmfK = new $hs.Thunk();
    var hs_a119125vmfM = new $hs.Thunk();
    var hs_zdcfromEnum1825vmfO = new $hs.Thunk();
    var hs_a119225vmfQ = new $hs.Thunk();
    var hs_zdcenumFrom1825vmfS = new $hs.Thunk();
    var hs_a119325vmfU = new $hs.Thunk();
    var hs_zdcenumFromThen1825vmfW = new $hs.Thunk();
    var hs_a119425vmfY = new $hs.Thunk();
    var hs_zdcenumFromTo1825vmg0 = new $hs.Thunk();
    var hs_a119525vmg2 = new $hs.Thunk();
    var hs_zdcenumFromThenTo1825vmg4 = new $hs.Thunk();
    var hs_a119625vmg6 = new $hs.Thunk();
    var hs_zdczp1825vmg8 = new $hs.Thunk();
    var hs_a119725vmga = new $hs.Thunk();
    var hs_zdczt1825vmgc = new $hs.Thunk();
    var hs_a119825vmge = new $hs.Thunk();
    var hs_zdczm1825vmgg = new $hs.Thunk();
    var hs_a119925vmgi = new $hs.Thunk();
    var hs_zdcnegate1825vmgk = new $hs.Thunk();
    var hs_a120025vmgm = new $hs.Thunk();
    var hs_zdcabs1825vmgo = new $hs.Thunk();
    var hs_a120125vmgq = new $hs.Thunk();
    var hs_zdcsignum1825vmgs = new $hs.Thunk();
    var hs_a120225vmgu = new $hs.Thunk();
    var hs_zdcfromInteger1825vmgw = new $hs.Thunk();
    var hs_a120325vmgy = new $hs.Thunk();
    var hs_zdccompare1825vmgA = new $hs.Thunk();
    var hs_a120425vmgC = new $hs.Thunk();
    var hs_zdczl1825vmgE = new $hs.Thunk();
    var hs_a120525vmgG = new $hs.Thunk();
    var hs_zdczgze1825vmgI = new $hs.Thunk();
    var hs_a120625vmgK = new $hs.Thunk();
    var hs_zdczg1825vmgM = new $hs.Thunk();
    var hs_a120725vmgO = new $hs.Thunk();
    var hs_zdczlze1825vmgQ = new $hs.Thunk();
    var hs_a120825vmgS = new $hs.Thunk();
    var hs_zdcmax1825vmgU = new $hs.Thunk();
    var hs_a120925vmgW = new $hs.Thunk();
    var hs_zdcmin1825vmgY = new $hs.Thunk();
    var hs_a121025vmh0 = new $hs.Thunk();
    var hs_zdczeze1825vmh2 = new $hs.Thunk();
    var hs_a121125vmh4 = new $hs.Thunk();
    var hs_zdczsze1825vmh6 = new $hs.Thunk();
    var hs_a121225vmh8 = new $hs.Thunk();
    var hs_zdczizazi1525vmha = new $hs.Thunk();
    var hs_a121325vmhc = new $hs.Thunk();
    var hs_zdczizbzi1525vmhe = new $hs.Thunk();
    var hs_a121425vmhg = new $hs.Thunk();
    var hs_zdcxor1525vmhi = new $hs.Thunk();
    var hs_a121525vmhk = new $hs.Thunk();
    var hs_zdccomplement1525vmhm = new $hs.Thunk();
    var hs_a121625vmho = new $hs.Thunk();
    var hs_zdcshift1525vmhq = new $hs.Thunk();
    var hs_a121725vmhs = new $hs.Thunk();
    var hs_zdcrotate1525vmhu = new $hs.Thunk();
    var hs_a121825vmhw = new $hs.Thunk();
    var hs_zdcbit1525vmhy = new $hs.Thunk();
    var hs_a121925vmhA = new $hs.Thunk();
    var hs_zdcsetBit1525vmhC = new $hs.Thunk();
    var hs_a122025vmhE = new $hs.Thunk();
    var hs_zdcclearBit1525vmhG = new $hs.Thunk();
    var hs_a122125vmhI = new $hs.Thunk();
    var hs_zdccomplementBit1525vmhK = new $hs.Thunk();
    var hs_a122225vmhM = new $hs.Thunk();
    var hs_zdctestBit1525vmhO = new $hs.Thunk();
    var hs_a122325vmhQ = new $hs.Thunk();
    var hs_zdcbitSizze1525vmhS = new $hs.Thunk();
    var hs_a122425vmhU = new $hs.Thunk();
    var hs_zdcisSigned1525vmhW = new $hs.Thunk();
    var hs_a122525vmhY = new $hs.Thunk();
    var hs_zdcshiftL1525vmi0 = new $hs.Thunk();
    var hs_a122625vmi2 = new $hs.Thunk();
    var hs_zdcshiftR1525vmi4 = new $hs.Thunk();
    var hs_a122725vmi6 = new $hs.Thunk();
    var hs_zdcrotateL1525vmi8 = new $hs.Thunk();
    var hs_a122825vmia = new $hs.Thunk();
    var hs_zdcrotateR1525vmic = new $hs.Thunk();
    var hs_a122925vmie = new $hs.Thunk();
    var hs_zdcquot1525vmig = new $hs.Thunk();
    var hs_a123025vmii = new $hs.Thunk();
    var hs_zdcrem1525vmik = new $hs.Thunk();
    var hs_a123125vmim = new $hs.Thunk();
    var hs_zdcdiv1525vmio = new $hs.Thunk();
    var hs_a123225vmiq = new $hs.Thunk();
    var hs_zdcmod1525vmis = new $hs.Thunk();
    var hs_a123325vmiu = new $hs.Thunk();
    var hs_zdcquotRem1525vmiw = new $hs.Thunk();
    var hs_a123425vmiy = new $hs.Thunk();
    var hs_zdcdivMod1525vmiA = new $hs.Thunk();
    var hs_a123525vmiC = new $hs.Thunk();
    var hs_zdctoInteger1525vmiE = new $hs.Thunk();
    var hs_a123625vmiG = new $hs.Thunk();
    var hs_zdcminBound1525vmiI = new $hs.Thunk();
    var hs_a123725vmiK = new $hs.Thunk();
    var hs_zdcmaxBound1525vmiM = new $hs.Thunk();
    var hs_a123825vmiO = new $hs.Thunk();
    var hs_zdctoRational1925vmiQ = new $hs.Thunk();
    var hs_a123925vmiS = new $hs.Thunk();
    var hs_zdcsizzeOf1925vmiU = new $hs.Thunk();
    var hs_a124025vmiW = new $hs.Thunk();
    var hs_zdcalignment1925vmiY = new $hs.Thunk();
    var hs_a124125vmj0 = new $hs.Thunk();
    var hs_zdcpeekElemOff1925vmj2 = new $hs.Thunk();
    var hs_a124225vmj4 = new $hs.Thunk();
    var hs_zdcpokeElemOff1925vmj6 = new $hs.Thunk();
    var hs_a124325vmj8 = new $hs.Thunk();
    var hs_zdcpeekByteOff1925vmja = new $hs.Thunk();
    var hs_a124425vmjc = new $hs.Thunk();
    var hs_zdcpokeByteOff1925vmje = new $hs.Thunk();
    var hs_a124525vmjg = new $hs.Thunk();
    var hs_zdcpeek1925vmji = new $hs.Thunk();
    var hs_a124625vmjk = new $hs.Thunk();
    var hs_zdcpoke1925vmjm = new $hs.Thunk();
    var hs_a124725vmjo = new $hs.Thunk();
    var hs_zdcsucc1925vmjq = new $hs.Thunk();
    var hs_a124825vmjs = new $hs.Thunk();
    var hs_zdcpred1925vmju = new $hs.Thunk();
    var hs_a124925vmjw = new $hs.Thunk();
    var hs_zdctoEnum1925vmjy = new $hs.Thunk();
    var hs_a125025vmjA = new $hs.Thunk();
    var hs_zdcfromEnum1925vmjC = new $hs.Thunk();
    var hs_a125125vmjE = new $hs.Thunk();
    var hs_zdcenumFrom1925vmjG = new $hs.Thunk();
    var hs_a125225vmjI = new $hs.Thunk();
    var hs_zdcenumFromThen1925vmjK = new $hs.Thunk();
    var hs_a125325vmjM = new $hs.Thunk();
    var hs_zdcenumFromTo1925vmjO = new $hs.Thunk();
    var hs_a125425vmjQ = new $hs.Thunk();
    var hs_zdcenumFromThenTo1925vmjS = new $hs.Thunk();
    var hs_a125525vmjU = new $hs.Thunk();
    var hs_zdczp1925vmjW = new $hs.Thunk();
    var hs_a125625vmjY = new $hs.Thunk();
    var hs_zdczt1925vmk0 = new $hs.Thunk();
    var hs_a125725vmk2 = new $hs.Thunk();
    var hs_zdczm1925vmk4 = new $hs.Thunk();
    var hs_a125825vmk6 = new $hs.Thunk();
    var hs_zdcnegate1925vmk8 = new $hs.Thunk();
    var hs_a125925vmka = new $hs.Thunk();
    var hs_zdcabs1925vmkc = new $hs.Thunk();
    var hs_a126025vmke = new $hs.Thunk();
    var hs_zdcsignum1925vmkg = new $hs.Thunk();
    var hs_a126125vmki = new $hs.Thunk();
    var hs_zdcfromInteger1925vmkk = new $hs.Thunk();
    var hs_a126225vmkm = new $hs.Thunk();
    var hs_zdccompare1925vmko = new $hs.Thunk();
    var hs_a126325vmkq = new $hs.Thunk();
    var hs_zdczl1925vmks = new $hs.Thunk();
    var hs_a126425vmku = new $hs.Thunk();
    var hs_zdczgze1925vmkw = new $hs.Thunk();
    var hs_a126525vmky = new $hs.Thunk();
    var hs_zdczg1925vmkA = new $hs.Thunk();
    var hs_a126625vmkC = new $hs.Thunk();
    var hs_zdczlze1925vmkE = new $hs.Thunk();
    var hs_a126725vmkG = new $hs.Thunk();
    var hs_zdcmax1925vmkI = new $hs.Thunk();
    var hs_a126825vmkK = new $hs.Thunk();
    var hs_zdcmin1925vmkM = new $hs.Thunk();
    var hs_a126925vmkO = new $hs.Thunk();
    var hs_zdczeze1925vmkQ = new $hs.Thunk();
    var hs_a127025vmkS = new $hs.Thunk();
    var hs_zdczsze1925vmkU = new $hs.Thunk();
    var hs_a127125vmkW = new $hs.Thunk();
    var hs_zdczizazi1625vmkY = new $hs.Thunk();
    var hs_a127225vml0 = new $hs.Thunk();
    var hs_zdczizbzi1625vml2 = new $hs.Thunk();
    var hs_a127325vml4 = new $hs.Thunk();
    var hs_zdcxor1625vml6 = new $hs.Thunk();
    var hs_a127425vml8 = new $hs.Thunk();
    var hs_zdccomplement1625vmla = new $hs.Thunk();
    var hs_a127525vmlc = new $hs.Thunk();
    var hs_zdcshift1625vmle = new $hs.Thunk();
    var hs_a127625vmlg = new $hs.Thunk();
    var hs_zdcrotate1625vmli = new $hs.Thunk();
    var hs_a127725vmlk = new $hs.Thunk();
    var hs_zdcbit1625vmlm = new $hs.Thunk();
    var hs_a127825vmlo = new $hs.Thunk();
    var hs_zdcsetBit1625vmlq = new $hs.Thunk();
    var hs_a127925vmls = new $hs.Thunk();
    var hs_zdcclearBit1625vmlu = new $hs.Thunk();
    var hs_a128025vmlw = new $hs.Thunk();
    var hs_zdccomplementBit1625vmly = new $hs.Thunk();
    var hs_a128125vmlA = new $hs.Thunk();
    var hs_zdctestBit1625vmlC = new $hs.Thunk();
    var hs_a128225vmlE = new $hs.Thunk();
    var hs_zdcbitSizze1625vmlG = new $hs.Thunk();
    var hs_a128325vmlI = new $hs.Thunk();
    var hs_zdcisSigned1625vmlK = new $hs.Thunk();
    var hs_a128425vmlM = new $hs.Thunk();
    var hs_zdcshiftL1625vmlO = new $hs.Thunk();
    var hs_a128525vmlQ = new $hs.Thunk();
    var hs_zdcshiftR1625vmlS = new $hs.Thunk();
    var hs_a128625vmlU = new $hs.Thunk();
    var hs_zdcrotateL1625vmlW = new $hs.Thunk();
    var hs_a128725vmlY = new $hs.Thunk();
    var hs_zdcrotateR1625vmm0 = new $hs.Thunk();
    var hs_a128825vmm2 = new $hs.Thunk();
    var hs_zdcquot1625vmm4 = new $hs.Thunk();
    var hs_a128925vmm6 = new $hs.Thunk();
    var hs_zdcrem1625vmm8 = new $hs.Thunk();
    var hs_a129025vmma = new $hs.Thunk();
    var hs_zdcdiv1625vmmc = new $hs.Thunk();
    var hs_a129125vmme = new $hs.Thunk();
    var hs_zdcmod1625vmmg = new $hs.Thunk();
    var hs_a129225vmmi = new $hs.Thunk();
    var hs_zdcquotRem1625vmmk = new $hs.Thunk();
    var hs_a129325vmmm = new $hs.Thunk();
    var hs_zdcdivMod1625vmmo = new $hs.Thunk();
    var hs_a129425vmmq = new $hs.Thunk();
    var hs_zdctoInteger1625vmms = new $hs.Thunk();
    var hs_a129525vmmu = new $hs.Thunk();
    var hs_zdcminBound1625vmmw = new $hs.Thunk();
    var hs_a129625vmmy = new $hs.Thunk();
    var hs_zdcmaxBound1625vmmA = new $hs.Thunk();
    var hs_a129725vmmC = new $hs.Thunk();
    var hs_zdctoRational2025vmmE = new $hs.Thunk();
    var hs_a129825vmmG = new $hs.Thunk();
    var hs_zdcsizzeOf2025vmmI = new $hs.Thunk();
    var hs_a129925vmmK = new $hs.Thunk();
    var hs_zdcalignment2025vmmM = new $hs.Thunk();
    var hs_a130025vmmO = new $hs.Thunk();
    var hs_zdcpeekElemOff2025vmmQ = new $hs.Thunk();
    var hs_a130125vmmS = new $hs.Thunk();
    var hs_zdcpokeElemOff2025vmmU = new $hs.Thunk();
    var hs_a130225vmmW = new $hs.Thunk();
    var hs_zdcpeekByteOff2025vmmY = new $hs.Thunk();
    var hs_a130325vmn0 = new $hs.Thunk();
    var hs_zdcpokeByteOff2025vmn2 = new $hs.Thunk();
    var hs_a130425vmn4 = new $hs.Thunk();
    var hs_zdcpeek2025vmn6 = new $hs.Thunk();
    var hs_a130525vmn8 = new $hs.Thunk();
    var hs_zdcpoke2025vmna = new $hs.Thunk();
    var hs_a130625vmnc = new $hs.Thunk();
    var hs_zdcsucc2025vmne = new $hs.Thunk();
    var hs_a130725vmng = new $hs.Thunk();
    var hs_zdcpred2025vmni = new $hs.Thunk();
    var hs_a130825vmnk = new $hs.Thunk();
    var hs_zdctoEnum2025vmnm = new $hs.Thunk();
    var hs_a130925vmno = new $hs.Thunk();
    var hs_zdcfromEnum2025vmnq = new $hs.Thunk();
    var hs_a131025vmns = new $hs.Thunk();
    var hs_zdcenumFrom2025vmnu = new $hs.Thunk();
    var hs_a131125vmnw = new $hs.Thunk();
    var hs_zdcenumFromThen2025vmny = new $hs.Thunk();
    var hs_a131225vmnA = new $hs.Thunk();
    var hs_zdcenumFromTo2025vmnC = new $hs.Thunk();
    var hs_a131325vmnE = new $hs.Thunk();
    var hs_zdcenumFromThenTo2025vmnG = new $hs.Thunk();
    var hs_a131425vmnI = new $hs.Thunk();
    var hs_zdczp2025vmnK = new $hs.Thunk();
    var hs_a131525vmnM = new $hs.Thunk();
    var hs_zdczt2025vmnO = new $hs.Thunk();
    var hs_a131625vmnQ = new $hs.Thunk();
    var hs_zdczm2025vmnS = new $hs.Thunk();
    var hs_a131725vmnU = new $hs.Thunk();
    var hs_zdcnegate2025vmnW = new $hs.Thunk();
    var hs_a131825vmnY = new $hs.Thunk();
    var hs_zdcabs2025vmo0 = new $hs.Thunk();
    var hs_a131925vmo2 = new $hs.Thunk();
    var hs_zdcsignum2025vmo4 = new $hs.Thunk();
    var hs_a132025vmo6 = new $hs.Thunk();
    var hs_zdcfromInteger2025vmo8 = new $hs.Thunk();
    var hs_a132125vmoa = new $hs.Thunk();
    var hs_zdccompare2025vmoc = new $hs.Thunk();
    var hs_a132225vmoe = new $hs.Thunk();
    var hs_zdczl2025vmog = new $hs.Thunk();
    var hs_a132325vmoi = new $hs.Thunk();
    var hs_zdczgze2025vmok = new $hs.Thunk();
    var hs_a132425vmom = new $hs.Thunk();
    var hs_zdczg2025vmoo = new $hs.Thunk();
    var hs_a132525vmoq = new $hs.Thunk();
    var hs_zdczlze2025vmos = new $hs.Thunk();
    var hs_a132625vmou = new $hs.Thunk();
    var hs_zdcmax2025vmow = new $hs.Thunk();
    var hs_a132725vmoy = new $hs.Thunk();
    var hs_zdcmin2025vmoA = new $hs.Thunk();
    var hs_a132825vmoC = new $hs.Thunk();
    var hs_zdczeze2025vmoE = new $hs.Thunk();
    var hs_a132925vmoG = new $hs.Thunk();
    var hs_zdczsze2025vmoI = new $hs.Thunk();
    var hs_a133025vmoK = new $hs.Thunk();
    var hs_zdczizazi1725vmoM = new $hs.Thunk();
    var hs_a133125vmoO = new $hs.Thunk();
    var hs_zdczizbzi1725vmoQ = new $hs.Thunk();
    var hs_a133225vmoS = new $hs.Thunk();
    var hs_zdcxor1725vmoU = new $hs.Thunk();
    var hs_a133325vmoW = new $hs.Thunk();
    var hs_zdccomplement1725vmoY = new $hs.Thunk();
    var hs_a133425vmp0 = new $hs.Thunk();
    var hs_zdcshift1725vmp2 = new $hs.Thunk();
    var hs_a133525vmp4 = new $hs.Thunk();
    var hs_zdcrotate1725vmp6 = new $hs.Thunk();
    var hs_a133625vmp8 = new $hs.Thunk();
    var hs_zdcbit1725vmpa = new $hs.Thunk();
    var hs_a133725vmpc = new $hs.Thunk();
    var hs_zdcsetBit1725vmpe = new $hs.Thunk();
    var hs_a133825vmpg = new $hs.Thunk();
    var hs_zdcclearBit1725vmpi = new $hs.Thunk();
    var hs_a133925vmpk = new $hs.Thunk();
    var hs_zdccomplementBit1725vmpm = new $hs.Thunk();
    var hs_a134025vmpo = new $hs.Thunk();
    var hs_zdctestBit1725vmpq = new $hs.Thunk();
    var hs_a134125vmps = new $hs.Thunk();
    var hs_zdcbitSizze1725vmpu = new $hs.Thunk();
    var hs_a134225vmpw = new $hs.Thunk();
    var hs_zdcisSigned1725vmpy = new $hs.Thunk();
    var hs_a134325vmpA = new $hs.Thunk();
    var hs_zdcshiftL1725vmpC = new $hs.Thunk();
    var hs_a134425vmpE = new $hs.Thunk();
    var hs_zdcshiftR1725vmpG = new $hs.Thunk();
    var hs_a134525vmpI = new $hs.Thunk();
    var hs_zdcrotateL1725vmpK = new $hs.Thunk();
    var hs_a134625vmpM = new $hs.Thunk();
    var hs_zdcrotateR1725vmpO = new $hs.Thunk();
    var hs_a134725vmpQ = new $hs.Thunk();
    var hs_zdcquot1725vmpS = new $hs.Thunk();
    var hs_a134825vmpU = new $hs.Thunk();
    var hs_zdcrem1725vmpW = new $hs.Thunk();
    var hs_a134925vmpY = new $hs.Thunk();
    var hs_zdcdiv1725vmq0 = new $hs.Thunk();
    var hs_a135025vmq2 = new $hs.Thunk();
    var hs_zdcmod1725vmq4 = new $hs.Thunk();
    var hs_a135125vmq6 = new $hs.Thunk();
    var hs_zdcquotRem1725vmq8 = new $hs.Thunk();
    var hs_a135225vmqa = new $hs.Thunk();
    var hs_zdcdivMod1725vmqc = new $hs.Thunk();
    var hs_a135325vmqe = new $hs.Thunk();
    var hs_zdctoInteger1725vmqg = new $hs.Thunk();
    var hs_a135425vmqi = new $hs.Thunk();
    var hs_zdcminBound1725vmqk = new $hs.Thunk();
    var hs_a135525vmqm = new $hs.Thunk();
    var hs_zdcmaxBound1725vmqo = new $hs.Thunk();
    var hs_a135625vmqq = new $hs.Thunk();
    var hs_zdctoRational2125vmqs = new $hs.Thunk();
    var hs_a135725vmqu = new $hs.Thunk();
    var hs_zdcsizzeOf2125vmqw = new $hs.Thunk();
    var hs_a135825vmqy = new $hs.Thunk();
    var hs_zdcalignment2125vmqA = new $hs.Thunk();
    var hs_a135925vmqC = new $hs.Thunk();
    var hs_zdcpeekElemOff2125vmqE = new $hs.Thunk();
    var hs_a136025vmqG = new $hs.Thunk();
    var hs_zdcpokeElemOff2125vmqI = new $hs.Thunk();
    var hs_a136125vmqK = new $hs.Thunk();
    var hs_zdcpeekByteOff2125vmqM = new $hs.Thunk();
    var hs_a136225vmqO = new $hs.Thunk();
    var hs_zdcpokeByteOff2125vmqQ = new $hs.Thunk();
    var hs_a136325vmqS = new $hs.Thunk();
    var hs_zdcpeek2125vmqU = new $hs.Thunk();
    var hs_a136425vmqW = new $hs.Thunk();
    var hs_zdcpoke2125vmqY = new $hs.Thunk();
    var hs_a136525vmr0 = new $hs.Thunk();
    var hs_zdcsucc2125vmr2 = new $hs.Thunk();
    var hs_a136625vmr4 = new $hs.Thunk();
    var hs_zdcpred2125vmr6 = new $hs.Thunk();
    var hs_a136725vmr8 = new $hs.Thunk();
    var hs_zdctoEnum2125vmra = new $hs.Thunk();
    var hs_a136825vmrc = new $hs.Thunk();
    var hs_zdcfromEnum2125vmre = new $hs.Thunk();
    var hs_a136925vmrg = new $hs.Thunk();
    var hs_zdcenumFrom2125vmri = new $hs.Thunk();
    var hs_a137025vmrk = new $hs.Thunk();
    var hs_zdcenumFromThen2125vmrm = new $hs.Thunk();
    var hs_a137125vmro = new $hs.Thunk();
    var hs_zdcenumFromTo2125vmrq = new $hs.Thunk();
    var hs_a137225vmrs = new $hs.Thunk();
    var hs_zdcenumFromThenTo2125vmru = new $hs.Thunk();
    var hs_a137325vmrw = new $hs.Thunk();
    var hs_zdczp2125vmry = new $hs.Thunk();
    var hs_a137425vmrA = new $hs.Thunk();
    var hs_zdczt2125vmrC = new $hs.Thunk();
    var hs_a137525vmrE = new $hs.Thunk();
    var hs_zdczm2125vmrG = new $hs.Thunk();
    var hs_a137625vmrI = new $hs.Thunk();
    var hs_zdcnegate2125vmrK = new $hs.Thunk();
    var hs_a137725vmrM = new $hs.Thunk();
    var hs_zdcabs2125vmrO = new $hs.Thunk();
    var hs_a137825vmrQ = new $hs.Thunk();
    var hs_zdcsignum2125vmrS = new $hs.Thunk();
    var hs_a137925vmrU = new $hs.Thunk();
    var hs_zdcfromInteger2125vmrW = new $hs.Thunk();
    var hs_a138025vmrY = new $hs.Thunk();
    var hs_zdccompare2125vms0 = new $hs.Thunk();
    var hs_a138125vms2 = new $hs.Thunk();
    var hs_zdczl2125vms4 = new $hs.Thunk();
    var hs_a138225vms6 = new $hs.Thunk();
    var hs_zdczgze2125vms8 = new $hs.Thunk();
    var hs_a138325vmsa = new $hs.Thunk();
    var hs_zdczg2125vmsc = new $hs.Thunk();
    var hs_a138425vmse = new $hs.Thunk();
    var hs_zdczlze2125vmsg = new $hs.Thunk();
    var hs_a138525vmsi = new $hs.Thunk();
    var hs_zdcmax2125vmsk = new $hs.Thunk();
    var hs_a138625vmsm = new $hs.Thunk();
    var hs_zdcmin2125vmso = new $hs.Thunk();
    var hs_a138725vmsq = new $hs.Thunk();
    var hs_zdczeze2125vmss = new $hs.Thunk();
    var hs_a138825vmsu = new $hs.Thunk();
    var hs_zdczsze2125vmsw = new $hs.Thunk();
    var hs_a138925vmsy = new $hs.Thunk();
    var hs_zdczizazi1825vmsA = new $hs.Thunk();
    var hs_a139025vmsC = new $hs.Thunk();
    var hs_zdczizbzi1825vmsE = new $hs.Thunk();
    var hs_a139125vmsG = new $hs.Thunk();
    var hs_zdcxor1825vmsI = new $hs.Thunk();
    var hs_a139225vmsK = new $hs.Thunk();
    var hs_zdccomplement1825vmsM = new $hs.Thunk();
    var hs_a139325vmsO = new $hs.Thunk();
    var hs_zdcshift1825vmsQ = new $hs.Thunk();
    var hs_a139425vmsS = new $hs.Thunk();
    var hs_zdcrotate1825vmsU = new $hs.Thunk();
    var hs_a139525vmsW = new $hs.Thunk();
    var hs_zdcbit1825vmsY = new $hs.Thunk();
    var hs_a139625vmt0 = new $hs.Thunk();
    var hs_zdcsetBit1825vmt2 = new $hs.Thunk();
    var hs_a139725vmt4 = new $hs.Thunk();
    var hs_zdcclearBit1825vmt6 = new $hs.Thunk();
    var hs_a139825vmt8 = new $hs.Thunk();
    var hs_zdccomplementBit1825vmta = new $hs.Thunk();
    var hs_a139925vmtc = new $hs.Thunk();
    var hs_zdctestBit1825vmte = new $hs.Thunk();
    var hs_a140025vmtg = new $hs.Thunk();
    var hs_zdcbitSizze1825vmti = new $hs.Thunk();
    var hs_a140125vmtk = new $hs.Thunk();
    var hs_zdcisSigned1825vmtm = new $hs.Thunk();
    var hs_a140225vmto = new $hs.Thunk();
    var hs_zdcshiftL1825vmtq = new $hs.Thunk();
    var hs_a140325vmts = new $hs.Thunk();
    var hs_zdcshiftR1825vmtu = new $hs.Thunk();
    var hs_a140425vmtw = new $hs.Thunk();
    var hs_zdcrotateL1825vmty = new $hs.Thunk();
    var hs_a140525vmtA = new $hs.Thunk();
    var hs_zdcrotateR1825vmtC = new $hs.Thunk();
    var hs_a140625vmtE = new $hs.Thunk();
    var hs_zdcquot1825vmtG = new $hs.Thunk();
    var hs_a140725vmtI = new $hs.Thunk();
    var hs_zdcrem1825vmtK = new $hs.Thunk();
    var hs_a140825vmtM = new $hs.Thunk();
    var hs_zdcdiv1825vmtO = new $hs.Thunk();
    var hs_a140925vmtQ = new $hs.Thunk();
    var hs_zdcmod1825vmtS = new $hs.Thunk();
    var hs_a141025vmtU = new $hs.Thunk();
    var hs_zdcquotRem1825vmtW = new $hs.Thunk();
    var hs_a141125vmtY = new $hs.Thunk();
    var hs_zdcdivMod1825vmu0 = new $hs.Thunk();
    var hs_a141225vmu2 = new $hs.Thunk();
    var hs_zdctoInteger1825vmu4 = new $hs.Thunk();
    var hs_a141325vmu6 = new $hs.Thunk();
    var hs_zdcminBound1825vmu8 = new $hs.Thunk();
    var hs_a141425vmua = new $hs.Thunk();
    var hs_zdcmaxBound1825vmuc = new $hs.Thunk();
    var hs_a141525vmue = new $hs.Thunk();
    var hs_zdctoRational2225vmug = new $hs.Thunk();
    var hs_a141625vmui = new $hs.Thunk();
    var hs_zdcsizzeOf2225vmuk = new $hs.Thunk();
    var hs_a141725vmum = new $hs.Thunk();
    var hs_zdcalignment2225vmuo = new $hs.Thunk();
    var hs_a141825vmuq = new $hs.Thunk();
    var hs_zdcpeekElemOff2225vmus = new $hs.Thunk();
    var hs_a141925vmuu = new $hs.Thunk();
    var hs_zdcpokeElemOff2225vmuw = new $hs.Thunk();
    var hs_a142025vmuy = new $hs.Thunk();
    var hs_zdcpeekByteOff2225vmuA = new $hs.Thunk();
    var hs_a142125vmuC = new $hs.Thunk();
    var hs_zdcpokeByteOff2225vmuE = new $hs.Thunk();
    var hs_a142225vmuG = new $hs.Thunk();
    var hs_zdcpeek2225vmuI = new $hs.Thunk();
    var hs_a142325vmuK = new $hs.Thunk();
    var hs_zdcpoke2225vmuM = new $hs.Thunk();
    var hs_a142425vmuO = new $hs.Thunk();
    var hs_zdcsucc2225vmuQ = new $hs.Thunk();
    var hs_a142525vmuS = new $hs.Thunk();
    var hs_zdcpred2225vmuU = new $hs.Thunk();
    var hs_a142625vmuW = new $hs.Thunk();
    var hs_zdctoEnum2225vmuY = new $hs.Thunk();
    var hs_a142725vmv0 = new $hs.Thunk();
    var hs_zdcfromEnum2225vmv2 = new $hs.Thunk();
    var hs_a142825vmv4 = new $hs.Thunk();
    var hs_zdcenumFrom2225vmv6 = new $hs.Thunk();
    var hs_a142925vmv8 = new $hs.Thunk();
    var hs_zdcenumFromThen2225vmva = new $hs.Thunk();
    var hs_a143025vmvc = new $hs.Thunk();
    var hs_zdcenumFromTo2225vmve = new $hs.Thunk();
    var hs_a143125vmvg = new $hs.Thunk();
    var hs_zdcenumFromThenTo2225vmvi = new $hs.Thunk();
    var hs_a143225vmvk = new $hs.Thunk();
    var hs_zdczp2225vmvm = new $hs.Thunk();
    var hs_a143325vmvo = new $hs.Thunk();
    var hs_zdczt2225vmvq = new $hs.Thunk();
    var hs_a143425vmvs = new $hs.Thunk();
    var hs_zdczm2225vmvu = new $hs.Thunk();
    var hs_a143525vmvw = new $hs.Thunk();
    var hs_zdcnegate2225vmvy = new $hs.Thunk();
    var hs_a143625vmvA = new $hs.Thunk();
    var hs_zdcabs2225vmvC = new $hs.Thunk();
    var hs_a143725vmvE = new $hs.Thunk();
    var hs_zdcsignum2225vmvG = new $hs.Thunk();
    var hs_a143825vmvI = new $hs.Thunk();
    var hs_zdcfromInteger2225vmvK = new $hs.Thunk();
    var hs_a143925vmvM = new $hs.Thunk();
    var hs_zdccompare2225vmvO = new $hs.Thunk();
    var hs_a144025vmvQ = new $hs.Thunk();
    var hs_zdczl2225vmvS = new $hs.Thunk();
    var hs_a144125vmvU = new $hs.Thunk();
    var hs_zdczgze2225vmvW = new $hs.Thunk();
    var hs_a144225vmvY = new $hs.Thunk();
    var hs_zdczg2225vmw0 = new $hs.Thunk();
    var hs_a144325vmw2 = new $hs.Thunk();
    var hs_zdczlze2225vmw4 = new $hs.Thunk();
    var hs_a144425vmw6 = new $hs.Thunk();
    var hs_zdcmax2225vmw8 = new $hs.Thunk();
    var hs_a144525vmwa = new $hs.Thunk();
    var hs_zdcmin2225vmwc = new $hs.Thunk();
    var hs_a144625vmwe = new $hs.Thunk();
    var hs_zdczeze2225vmwg = new $hs.Thunk();
    var hs_a144725vmwi = new $hs.Thunk();
    var hs_zdczsze2225vmwk = new $hs.Thunk();
    hs_sat26DL2B.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CUIntMax\x00");
    };
    hs_tyConCUIntMax25sEQC.evaluateOnce = function () {
        return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26DL2B);
    };
    hs_sat26DL2C.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CIntMax\x00");
    };
    hs_tyConCIntMax25sEQA.evaluateOnce = function () {
        return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26DL2C);
    };
    hs_sat26DL2D.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CUIntPtr\x00");
    };
    hs_tyConCUIntPtr25sEQy.evaluateOnce = function () {
        return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26DL2D);
    };
    hs_sat26DL2E.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CIntPtr\x00");
    };
    hs_tyConCIntPtr25sEQw.evaluateOnce = function () {
        return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26DL2E);
    };
    hs_sat26DL2F.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CTime\x00");
    };
    hs_tyConCTime25sEQu.evaluateOnce = function () {
        return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26DL2F);
    };
    hs_sat26DL2G.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CClock\x00");
    };
    hs_tyConCClock25sEQs.evaluateOnce = function () {
        return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26DL2G);
    };
    hs_sat26DL2H.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CSigAtomic\x00");
    };
    hs_tyConCSigAtomic25sEQq.evaluateOnce = function () {
        return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26DL2H);
    };
    hs_sat26DL2I.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CWchar\x00");
    };
    hs_tyConCWchar25sEQo.evaluateOnce = function () {
        return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26DL2I);
    };
    hs_sat26DL2J.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CSize\x00");
    };
    hs_tyConCSizze25sEQm.evaluateOnce = function () {
        return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26DL2J);
    };
    hs_sat26DL2K.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CPtrdiff\x00");
    };
    hs_tyConCPtrdiff25sEQk.evaluateOnce = function () {
        return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26DL2K);
    };
    hs_sat26DL2L.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CDouble\x00");
    };
    hs_tyConCDouble25sEQi.evaluateOnce = function () {
        return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26DL2L);
    };
    hs_sat26DL2M.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CFloat\x00");
    };
    hs_tyConCFloat25sEQg.evaluateOnce = function () {
        return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26DL2M);
    };
    hs_sat26DL2N.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CULLong\x00");
    };
    hs_tyConCULLong25sEQe.evaluateOnce = function () {
        return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26DL2N);
    };
    hs_sat26DL2O.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CLLong\x00");
    };
    hs_tyConCLLong25sEQc.evaluateOnce = function () {
        return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26DL2O);
    };
    hs_sat26DL2P.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CULong\x00");
    };
    hs_tyConCULong25sEQa.evaluateOnce = function () {
        return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26DL2P);
    };
    hs_sat26DL2Q.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CLong\x00");
    };
    hs_tyConCLong25sEQ8.evaluateOnce = function () {
        return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26DL2Q);
    };
    hs_sat26DL2R.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CUInt\x00");
    };
    hs_tyConCUInt25sEQ6.evaluateOnce = function () {
        return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26DL2R);
    };
    hs_sat26DL2S.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CInt\x00");
    };
    hs_tyConCInt25sEQ4.evaluateOnce = function () {
        return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26DL2S);
    };
    hs_sat26DL2T.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CUShort\x00");
    };
    hs_tyConCUShort25sEQ2.evaluateOnce = function () {
        return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26DL2T);
    };
    hs_sat26DL2U.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CShort\x00");
    };
    hs_tyConCShort25sEQ0.evaluateOnce = function () {
        return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26DL2U);
    };
    hs_sat26DL2V.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CUChar\x00");
    };
    hs_tyConCUChar25sEPY.evaluateOnce = function () {
        return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26DL2V);
    };
    hs_sat26DL2W.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CSChar\x00");
    };
    hs_tyConCSChar25sEPW.evaluateOnce = function () {
        return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26DL2W);
    };
    hs_sat26DL2X.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CChar\x00");
    };
    hs_tyConCChar25sEPU.evaluateOnce = function () {
        return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26DL2X);
    };
    hs_a25vkXY.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziInt.hs_zdfReadInt8);
    };
    hs_zdcreadList25vkY0.evaluateOnce = function () {
        if (hs_a25vkXY.notEvaluated) {
            return hs_a25vkXY.hscall();
        } else {
            return hs_a25vkXY;
        }
    };
    hs_a125vkY2.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziInt.hs_zdfReadInt8);
    };
    hs_zdcreadsPrec25vkY4.evaluateOnce = function () {
        if (hs_a125vkY2.notEvaluated) {
            return hs_a125vkY2.hscall();
        } else {
            return hs_a125vkY2;
        }
    };
    this.hs_zdfReadCChar.data = [hs_a125vkY2, hs_a25vkXY, hs_zdcreadPrec25vkY8, hs_zdcreadListPrec25vkY6];
    hs_zdcreadListPrec25vkY6.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCChar);
    };
    hs_zdcreadPrec25vkY8.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCChar);
    };
    hs_a225vkYa.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziInt.hs_zdfShowInt8);
    };
    hs_zdcshowList25vkYc.evaluateOnce = function () {
        if (hs_a225vkYa.notEvaluated) {
            return hs_a225vkYa.hscall();
        } else {
            return hs_a225vkYa;
        }
    };
    hs_a325vkYe.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziInt.hs_zdfShowInt8);
    };
    hs_zdcshow25vkYg.evaluateOnce = function () {
        if (hs_a325vkYe.notEvaluated) {
            return hs_a325vkYe.hscall();
        } else {
            return hs_a325vkYe;
        }
    };
    hs_a425vkYi.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziInt.hs_zdfShowInt8);
    };
    hs_zdcshowsPrec25vkYk.evaluateOnce = function () {
        if (hs_a425vkYi.notEvaluated) {
            return hs_a425vkYi.hscall();
        } else {
            return hs_a425vkYi;
        }
    };
    this.hs_zdfShowCChar.data = [hs_a425vkYi, hs_a325vkYe, hs_a225vkYa];
    hs_zdctypeOf25vkYm.evaluate = function (hs_ds26DJuE) {
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_tyConCChar25sEPU, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCChar.evaluateOnce = function () {
        if (hs_zdctypeOf25vkYm.notEvaluated) {
            return hs_zdctypeOf25vkYm.hscall();
        } else {
            return hs_zdctypeOf25vkYm;
        }
    };
    hs_a525vkYq.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziInt.hs_zdfReadInt8);
    };
    hs_zdcreadList125vkYs.evaluateOnce = function () {
        if (hs_a525vkYq.notEvaluated) {
            return hs_a525vkYq.hscall();
        } else {
            return hs_a525vkYq;
        }
    };
    hs_a625vkYu.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziInt.hs_zdfReadInt8);
    };
    hs_zdcreadsPrec125vkYw.evaluateOnce = function () {
        if (hs_a625vkYu.notEvaluated) {
            return hs_a625vkYu.hscall();
        } else {
            return hs_a625vkYu;
        }
    };
    this.hs_zdfReadCSChar.data = [hs_a625vkYu, hs_a525vkYq, hs_zdcreadPrec125vkYA, hs_zdcreadListPrec125vkYy];
    hs_zdcreadListPrec125vkYy.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCSChar);
    };
    hs_zdcreadPrec125vkYA.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCSChar);
    };
    hs_a725vkYC.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziInt.hs_zdfShowInt8);
    };
    hs_zdcshowList125vkYE.evaluateOnce = function () {
        if (hs_a725vkYC.notEvaluated) {
            return hs_a725vkYC.hscall();
        } else {
            return hs_a725vkYC;
        }
    };
    hs_a825vkYG.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziInt.hs_zdfShowInt8);
    };
    hs_zdcshow125vkYI.evaluateOnce = function () {
        if (hs_a825vkYG.notEvaluated) {
            return hs_a825vkYG.hscall();
        } else {
            return hs_a825vkYG;
        }
    };
    hs_a925vkYK.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziInt.hs_zdfShowInt8);
    };
    hs_zdcshowsPrec125vkYM.evaluateOnce = function () {
        if (hs_a925vkYK.notEvaluated) {
            return hs_a925vkYK.hscall();
        } else {
            return hs_a925vkYK;
        }
    };
    this.hs_zdfShowCSChar.data = [hs_a925vkYK, hs_a825vkYG, hs_a725vkYC];
    hs_zdctypeOf125vkYO.evaluate = function (hs_ds26DJv6) {
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_tyConCSChar25sEPW, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCSChar.evaluateOnce = function () {
        if (hs_zdctypeOf125vkYO.notEvaluated) {
            return hs_zdctypeOf125vkYO.hscall();
        } else {
            return hs_zdctypeOf125vkYO;
        }
    };
    hs_a1025vkYS.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziWord.hs_zdfReadWord8);
    };
    hs_zdcreadList225vkYU.evaluateOnce = function () {
        if (hs_a1025vkYS.notEvaluated) {
            return hs_a1025vkYS.hscall();
        } else {
            return hs_a1025vkYS;
        }
    };
    hs_a1125vkYW.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord8);
    };
    hs_zdcreadsPrec225vkYY.evaluateOnce = function () {
        if (hs_a1125vkYW.notEvaluated) {
            return hs_a1125vkYW.hscall();
        } else {
            return hs_a1125vkYW;
        }
    };
    this.hs_zdfReadCUChar.data = [hs_a1125vkYW, hs_a1025vkYS, hs_zdcreadPrec225vkZ2, hs_zdcreadListPrec225vkZ0];
    hs_zdcreadListPrec225vkZ0.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCUChar);
    };
    hs_zdcreadPrec225vkZ2.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCUChar);
    };
    hs_a1225vkZ4.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziWord.hs_zdfShowWord8);
    };
    hs_zdcshowList225vkZ6.evaluateOnce = function () {
        if (hs_a1225vkZ4.notEvaluated) {
            return hs_a1225vkZ4.hscall();
        } else {
            return hs_a1225vkZ4;
        }
    };
    hs_a1325vkZ8.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziWord.hs_zdfShowWord8);
    };
    hs_zdcshow225vkZa.evaluateOnce = function () {
        if (hs_a1325vkZ8.notEvaluated) {
            return hs_a1325vkZ8.hscall();
        } else {
            return hs_a1325vkZ8;
        }
    };
    hs_a1425vkZc.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziWord.hs_zdfShowWord8);
    };
    hs_zdcshowsPrec225vkZe.evaluateOnce = function () {
        if (hs_a1425vkZc.notEvaluated) {
            return hs_a1425vkZc.hscall();
        } else {
            return hs_a1425vkZc;
        }
    };
    this.hs_zdfShowCUChar.data = [hs_a1425vkZc, hs_a1325vkZ8, hs_a1225vkZ4];
    hs_zdctypeOf225vkZg.evaluate = function (hs_ds26DJvy) {
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_tyConCUChar25sEPY, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCUChar.evaluateOnce = function () {
        if (hs_zdctypeOf225vkZg.notEvaluated) {
            return hs_zdctypeOf225vkZg.hscall();
        } else {
            return hs_zdctypeOf225vkZg;
        }
    };
    hs_a1525vkZk.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziInt.hs_zdfReadInt16);
    };
    hs_zdcreadList325vkZm.evaluateOnce = function () {
        if (hs_a1525vkZk.notEvaluated) {
            return hs_a1525vkZk.hscall();
        } else {
            return hs_a1525vkZk;
        }
    };
    hs_a1625vkZo.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziInt.hs_zdfReadInt16);
    };
    hs_zdcreadsPrec325vkZq.evaluateOnce = function () {
        if (hs_a1625vkZo.notEvaluated) {
            return hs_a1625vkZo.hscall();
        } else {
            return hs_a1625vkZo;
        }
    };
    this.hs_zdfReadCShort.data = [hs_a1625vkZo, hs_a1525vkZk, hs_zdcreadPrec325vkZu, hs_zdcreadListPrec325vkZs];
    hs_zdcreadListPrec325vkZs.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCShort);
    };
    hs_zdcreadPrec325vkZu.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCShort);
    };
    hs_a1725vkZw.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziInt.hs_zdfShowInt16);
    };
    hs_zdcshowList325vkZy.evaluateOnce = function () {
        if (hs_a1725vkZw.notEvaluated) {
            return hs_a1725vkZw.hscall();
        } else {
            return hs_a1725vkZw;
        }
    };
    hs_a1825vkZA.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziInt.hs_zdfShowInt16);
    };
    hs_zdcshow325vkZC.evaluateOnce = function () {
        if (hs_a1825vkZA.notEvaluated) {
            return hs_a1825vkZA.hscall();
        } else {
            return hs_a1825vkZA;
        }
    };
    hs_a1925vkZE.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziInt.hs_zdfShowInt16);
    };
    hs_zdcshowsPrec325vkZG.evaluateOnce = function () {
        if (hs_a1925vkZE.notEvaluated) {
            return hs_a1925vkZE.hscall();
        } else {
            return hs_a1925vkZE;
        }
    };
    this.hs_zdfShowCShort.data = [hs_a1925vkZE, hs_a1825vkZA, hs_a1725vkZw];
    hs_zdctypeOf325vkZI.evaluate = function (hs_ds26DJw0) {
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_tyConCShort25sEQ0, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCShort.evaluateOnce = function () {
        if (hs_zdctypeOf325vkZI.notEvaluated) {
            return hs_zdctypeOf325vkZI.hscall();
        } else {
            return hs_zdctypeOf325vkZI;
        }
    };
    hs_a2025vkZM.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziWord.hs_zdfReadWord16);
    };
    hs_zdcreadList425vkZO.evaluateOnce = function () {
        if (hs_a2025vkZM.notEvaluated) {
            return hs_a2025vkZM.hscall();
        } else {
            return hs_a2025vkZM;
        }
    };
    hs_a2125vkZQ.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord16);
    };
    hs_zdcreadsPrec425vkZS.evaluateOnce = function () {
        if (hs_a2125vkZQ.notEvaluated) {
            return hs_a2125vkZQ.hscall();
        } else {
            return hs_a2125vkZQ;
        }
    };
    this.hs_zdfReadCUShort.data = [hs_a2125vkZQ, hs_a2025vkZM, hs_zdcreadPrec425vkZW, hs_zdcreadListPrec425vkZU];
    hs_zdcreadListPrec425vkZU.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCUShort);
    };
    hs_zdcreadPrec425vkZW.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCUShort);
    };
    hs_a2225vkZY.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziWord.hs_zdfShowWord16);
    };
    hs_zdcshowList425vl00.evaluateOnce = function () {
        if (hs_a2225vkZY.notEvaluated) {
            return hs_a2225vkZY.hscall();
        } else {
            return hs_a2225vkZY;
        }
    };
    hs_a2325vl02.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziWord.hs_zdfShowWord16);
    };
    hs_zdcshow425vl04.evaluateOnce = function () {
        if (hs_a2325vl02.notEvaluated) {
            return hs_a2325vl02.hscall();
        } else {
            return hs_a2325vl02;
        }
    };
    hs_a2425vl06.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziWord.hs_zdfShowWord16);
    };
    hs_zdcshowsPrec425vl08.evaluateOnce = function () {
        if (hs_a2425vl06.notEvaluated) {
            return hs_a2425vl06.hscall();
        } else {
            return hs_a2425vl06;
        }
    };
    this.hs_zdfShowCUShort.data = [hs_a2425vl06, hs_a2325vl02, hs_a2225vkZY];
    hs_zdctypeOf425vl0a.evaluate = function (hs_ds26DJws) {
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_tyConCUShort25sEQ2, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCUShort.evaluateOnce = function () {
        if (hs_zdctypeOf425vl0a.notEvaluated) {
            return hs_zdctypeOf425vl0a.hscall();
        } else {
            return hs_zdctypeOf425vl0a;
        }
    };
    hs_a2525vl0e.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziInt.hs_zdfReadInt32);
    };
    hs_zdcreadList525vl0g.evaluateOnce = function () {
        if (hs_a2525vl0e.notEvaluated) {
            return hs_a2525vl0e.hscall();
        } else {
            return hs_a2525vl0e;
        }
    };
    hs_a2625vl0i.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziInt.hs_zdfReadInt32);
    };
    hs_zdcreadsPrec525vl0k.evaluateOnce = function () {
        if (hs_a2625vl0i.notEvaluated) {
            return hs_a2625vl0i.hscall();
        } else {
            return hs_a2625vl0i;
        }
    };
    this.hs_zdfReadCInt.data = [hs_a2625vl0i, hs_a2525vl0e, hs_zdcreadPrec525vl0o, hs_zdcreadListPrec525vl0m];
    hs_zdcreadListPrec525vl0m.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCInt);
    };
    hs_zdcreadPrec525vl0o.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCInt);
    };
    hs_a2725vl0q.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshowList525vl0s.evaluateOnce = function () {
        if (hs_a2725vl0q.notEvaluated) {
            return hs_a2725vl0q.hscall();
        } else {
            return hs_a2725vl0q;
        }
    };
    hs_a2825vl0u.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshow525vl0w.evaluateOnce = function () {
        if (hs_a2825vl0u.notEvaluated) {
            return hs_a2825vl0u.hscall();
        } else {
            return hs_a2825vl0u;
        }
    };
    hs_a2925vl0y.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshowsPrec525vl0A.evaluateOnce = function () {
        if (hs_a2925vl0y.notEvaluated) {
            return hs_a2925vl0y.hscall();
        } else {
            return hs_a2925vl0y;
        }
    };
    this.hs_zdfShowCInt.data = [hs_a2925vl0y, hs_a2825vl0u, hs_a2725vl0q];
    hs_zdctypeOf525vl0C.evaluate = function (hs_ds26DJwU) {
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_tyConCInt25sEQ4, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCInt.evaluateOnce = function () {
        if (hs_zdctypeOf525vl0C.notEvaluated) {
            return hs_zdctypeOf525vl0C.hscall();
        } else {
            return hs_zdctypeOf525vl0C;
        }
    };
    hs_a3025vl0G.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadList625vl0I.evaluateOnce = function () {
        if (hs_a3025vl0G.notEvaluated) {
            return hs_a3025vl0G.hscall();
        } else {
            return hs_a3025vl0G;
        }
    };
    hs_a3125vl0K.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadsPrec625vl0M.evaluateOnce = function () {
        if (hs_a3125vl0K.notEvaluated) {
            return hs_a3125vl0K.hscall();
        } else {
            return hs_a3125vl0K;
        }
    };
    this.hs_zdfReadCUInt.data = [hs_a3125vl0K, hs_a3025vl0G, hs_zdcreadPrec625vl0Q, hs_zdcreadListPrec625vl0O];
    hs_zdcreadListPrec625vl0O.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCUInt);
    };
    hs_zdcreadPrec625vl0Q.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCUInt);
    };
    hs_a3225vl0S.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshowList625vl0U.evaluateOnce = function () {
        if (hs_a3225vl0S.notEvaluated) {
            return hs_a3225vl0S.hscall();
        } else {
            return hs_a3225vl0S;
        }
    };
    hs_a3325vl0W.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshow625vl0Y.evaluateOnce = function () {
        if (hs_a3325vl0W.notEvaluated) {
            return hs_a3325vl0W.hscall();
        } else {
            return hs_a3325vl0W;
        }
    };
    hs_a3425vl10.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshowsPrec625vl12.evaluateOnce = function () {
        if (hs_a3425vl10.notEvaluated) {
            return hs_a3425vl10.hscall();
        } else {
            return hs_a3425vl10;
        }
    };
    this.hs_zdfShowCUInt.data = [hs_a3425vl10, hs_a3325vl0W, hs_a3225vl0S];
    hs_zdctypeOf625vl14.evaluate = function (hs_ds26DJxm) {
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_tyConCUInt25sEQ6, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCUInt.evaluateOnce = function () {
        if (hs_zdctypeOf625vl14.notEvaluated) {
            return hs_zdctypeOf625vl14.hscall();
        } else {
            return hs_zdctypeOf625vl14;
        }
    };
    hs_a3525vl18.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziInt.hs_zdfReadInt32);
    };
    hs_zdcreadList725vl1a.evaluateOnce = function () {
        if (hs_a3525vl18.notEvaluated) {
            return hs_a3525vl18.hscall();
        } else {
            return hs_a3525vl18;
        }
    };
    hs_a3625vl1c.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziInt.hs_zdfReadInt32);
    };
    hs_zdcreadsPrec725vl1e.evaluateOnce = function () {
        if (hs_a3625vl1c.notEvaluated) {
            return hs_a3625vl1c.hscall();
        } else {
            return hs_a3625vl1c;
        }
    };
    this.hs_zdfReadCLong.data = [hs_a3625vl1c, hs_a3525vl18, hs_zdcreadPrec725vl1i, hs_zdcreadListPrec725vl1g];
    hs_zdcreadListPrec725vl1g.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCLong);
    };
    hs_zdcreadPrec725vl1i.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCLong);
    };
    hs_a3725vl1k.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshowList725vl1m.evaluateOnce = function () {
        if (hs_a3725vl1k.notEvaluated) {
            return hs_a3725vl1k.hscall();
        } else {
            return hs_a3725vl1k;
        }
    };
    hs_a3825vl1o.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshow725vl1q.evaluateOnce = function () {
        if (hs_a3825vl1o.notEvaluated) {
            return hs_a3825vl1o.hscall();
        } else {
            return hs_a3825vl1o;
        }
    };
    hs_a3925vl1s.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshowsPrec725vl1u.evaluateOnce = function () {
        if (hs_a3925vl1s.notEvaluated) {
            return hs_a3925vl1s.hscall();
        } else {
            return hs_a3925vl1s;
        }
    };
    this.hs_zdfShowCLong.data = [hs_a3925vl1s, hs_a3825vl1o, hs_a3725vl1k];
    hs_zdctypeOf725vl1w.evaluate = function (hs_ds26DJxO) {
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_tyConCLong25sEQ8, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCLong.evaluateOnce = function () {
        if (hs_zdctypeOf725vl1w.notEvaluated) {
            return hs_zdctypeOf725vl1w.hscall();
        } else {
            return hs_zdctypeOf725vl1w;
        }
    };
    hs_a4025vl1A.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadList825vl1C.evaluateOnce = function () {
        if (hs_a4025vl1A.notEvaluated) {
            return hs_a4025vl1A.hscall();
        } else {
            return hs_a4025vl1A;
        }
    };
    hs_a4125vl1E.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadsPrec825vl1G.evaluateOnce = function () {
        if (hs_a4125vl1E.notEvaluated) {
            return hs_a4125vl1E.hscall();
        } else {
            return hs_a4125vl1E;
        }
    };
    this.hs_zdfReadCULong.data = [hs_a4125vl1E, hs_a4025vl1A, hs_zdcreadPrec825vl1K, hs_zdcreadListPrec825vl1I];
    hs_zdcreadListPrec825vl1I.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCULong);
    };
    hs_zdcreadPrec825vl1K.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCULong);
    };
    hs_a4225vl1M.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshowList825vl1O.evaluateOnce = function () {
        if (hs_a4225vl1M.notEvaluated) {
            return hs_a4225vl1M.hscall();
        } else {
            return hs_a4225vl1M;
        }
    };
    hs_a4325vl1Q.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshow825vl1S.evaluateOnce = function () {
        if (hs_a4325vl1Q.notEvaluated) {
            return hs_a4325vl1Q.hscall();
        } else {
            return hs_a4325vl1Q;
        }
    };
    hs_a4425vl1U.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshowsPrec825vl1W.evaluateOnce = function () {
        if (hs_a4425vl1U.notEvaluated) {
            return hs_a4425vl1U.hscall();
        } else {
            return hs_a4425vl1U;
        }
    };
    this.hs_zdfShowCULong.data = [hs_a4425vl1U, hs_a4325vl1Q, hs_a4225vl1M];
    hs_zdctypeOf825vl1Y.evaluate = function (hs_ds26DJyg) {
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_tyConCULong25sEQa, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCULong.evaluateOnce = function () {
        if (hs_zdctypeOf825vl1Y.notEvaluated) {
            return hs_zdctypeOf825vl1Y.hscall();
        } else {
            return hs_zdctypeOf825vl1Y;
        }
    };
    hs_a4525vl22.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziInt.hs_zdfReadInt64);
    };
    hs_zdcreadList925vl24.evaluateOnce = function () {
        if (hs_a4525vl22.notEvaluated) {
            return hs_a4525vl22.hscall();
        } else {
            return hs_a4525vl22;
        }
    };
    hs_a4625vl26.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziInt.hs_zdfReadInt64);
    };
    hs_zdcreadsPrec925vl28.evaluateOnce = function () {
        if (hs_a4625vl26.notEvaluated) {
            return hs_a4625vl26.hscall();
        } else {
            return hs_a4625vl26;
        }
    };
    this.hs_zdfReadCLLong.data = [hs_a4625vl26, hs_a4525vl22, hs_zdcreadPrec925vl2c, hs_zdcreadListPrec925vl2a];
    hs_zdcreadListPrec925vl2a.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCLLong);
    };
    hs_zdcreadPrec925vl2c.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCLLong);
    };
    hs_a4725vl2e.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziInt.hs_zdfShowInt64);
    };
    hs_zdcshowList925vl2g.evaluateOnce = function () {
        if (hs_a4725vl2e.notEvaluated) {
            return hs_a4725vl2e.hscall();
        } else {
            return hs_a4725vl2e;
        }
    };
    hs_a4825vl2i.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziInt.hs_zdfShowInt64);
    };
    hs_zdcshow925vl2k.evaluateOnce = function () {
        if (hs_a4825vl2i.notEvaluated) {
            return hs_a4825vl2i.hscall();
        } else {
            return hs_a4825vl2i;
        }
    };
    hs_a4925vl2m.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziInt.hs_zdfShowInt64);
    };
    hs_zdcshowsPrec925vl2o.evaluateOnce = function () {
        if (hs_a4925vl2m.notEvaluated) {
            return hs_a4925vl2m.hscall();
        } else {
            return hs_a4925vl2m;
        }
    };
    this.hs_zdfShowCLLong.data = [hs_a4925vl2m, hs_a4825vl2i, hs_a4725vl2e];
    hs_zdctypeOf925vl2q.evaluate = function (hs_ds26DJyI) {
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_tyConCLLong25sEQc, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCLLong.evaluateOnce = function () {
        if (hs_zdctypeOf925vl2q.notEvaluated) {
            return hs_zdctypeOf925vl2q.hscall();
        } else {
            return hs_zdctypeOf925vl2q;
        }
    };
    hs_a5025vl2u.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziWord.hs_zdfReadWord64);
    };
    hs_zdcreadList1025vl2w.evaluateOnce = function () {
        if (hs_a5025vl2u.notEvaluated) {
            return hs_a5025vl2u.hscall();
        } else {
            return hs_a5025vl2u;
        }
    };
    hs_a5125vl2y.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord64);
    };
    hs_zdcreadsPrec1025vl2A.evaluateOnce = function () {
        if (hs_a5125vl2y.notEvaluated) {
            return hs_a5125vl2y.hscall();
        } else {
            return hs_a5125vl2y;
        }
    };
    this.hs_zdfReadCULLong.data = [hs_a5125vl2y, hs_a5025vl2u, hs_zdcreadPrec1025vl2E, hs_zdcreadListPrec1025vl2C];
    hs_zdcreadListPrec1025vl2C.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCULLong);
    };
    hs_zdcreadPrec1025vl2E.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCULLong);
    };
    hs_a5225vl2G.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziWord.hs_zdfShowWord64);
    };
    hs_zdcshowList1025vl2I.evaluateOnce = function () {
        if (hs_a5225vl2G.notEvaluated) {
            return hs_a5225vl2G.hscall();
        } else {
            return hs_a5225vl2G;
        }
    };
    hs_a5325vl2K.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziWord.hs_zdfShowWord64);
    };
    hs_zdcshow1025vl2M.evaluateOnce = function () {
        if (hs_a5325vl2K.notEvaluated) {
            return hs_a5325vl2K.hscall();
        } else {
            return hs_a5325vl2K;
        }
    };
    hs_a5425vl2O.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziWord.hs_zdfShowWord64);
    };
    hs_zdcshowsPrec1025vl2Q.evaluateOnce = function () {
        if (hs_a5425vl2O.notEvaluated) {
            return hs_a5425vl2O.hscall();
        } else {
            return hs_a5425vl2O;
        }
    };
    this.hs_zdfShowCULLong.data = [hs_a5425vl2O, hs_a5325vl2K, hs_a5225vl2G];
    hs_zdctypeOf1025vl2S.evaluate = function (hs_ds26DJza) {
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_tyConCULLong25sEQe, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCULLong.evaluateOnce = function () {
        if (hs_zdctypeOf1025vl2S.notEvaluated) {
            return hs_zdctypeOf1025vl2S.hscall();
        } else {
            return hs_zdctypeOf1025vl2S;
        }
    };
    hs_a5525vl2W.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziRead.hs_zdfReadFloat);
    };
    hs_zdcreadList1125vl2Y.evaluateOnce = function () {
        if (hs_a5525vl2W.notEvaluated) {
            return hs_a5525vl2W.hscall();
        } else {
            return hs_a5525vl2W;
        }
    };
    hs_a5625vl30.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziRead.hs_zdfReadFloat);
    };
    hs_zdcreadsPrec1125vl32.evaluateOnce = function () {
        if (hs_a5625vl30.notEvaluated) {
            return hs_a5625vl30.hscall();
        } else {
            return hs_a5625vl30;
        }
    };
    this.hs_zdfReadCFloat.data = [hs_a5625vl30, hs_a5525vl2W, hs_zdcreadPrec1125vl36, hs_zdcreadListPrec1125vl34];
    hs_zdcreadListPrec1125vl34.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCFloat);
    };
    hs_zdcreadPrec1125vl36.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCFloat);
    };
    hs_a5725vl38.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziFloat.hs_zdfShowFloat);
    };
    hs_zdcshowList1125vl3a.evaluateOnce = function () {
        if (hs_a5725vl38.notEvaluated) {
            return hs_a5725vl38.hscall();
        } else {
            return hs_a5725vl38;
        }
    };
    hs_a5825vl3c.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziFloat.hs_zdfShowFloat);
    };
    hs_zdcshow1125vl3e.evaluateOnce = function () {
        if (hs_a5825vl3c.notEvaluated) {
            return hs_a5825vl3c.hscall();
        } else {
            return hs_a5825vl3c;
        }
    };
    hs_a5925vl3g.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziFloat.hs_zdfShowFloat);
    };
    hs_zdcshowsPrec1125vl3i.evaluateOnce = function () {
        if (hs_a5925vl3g.notEvaluated) {
            return hs_a5925vl3g.hscall();
        } else {
            return hs_a5925vl3g;
        }
    };
    this.hs_zdfShowCFloat.data = [hs_a5925vl3g, hs_a5825vl3c, hs_a5725vl38];
    hs_zdctypeOf1125vl3k.evaluate = function (hs_ds26DJzC) {
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_tyConCFloat25sEQg, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCFloat.evaluateOnce = function () {
        if (hs_zdctypeOf1125vl3k.notEvaluated) {
            return hs_zdctypeOf1125vl3k.hscall();
        } else {
            return hs_zdctypeOf1125vl3k;
        }
    };
    hs_a6025vl3o.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziRead.hs_zdfReadDouble);
    };
    hs_zdcreadList1225vl3q.evaluateOnce = function () {
        if (hs_a6025vl3o.notEvaluated) {
            return hs_a6025vl3o.hscall();
        } else {
            return hs_a6025vl3o;
        }
    };
    hs_a6125vl3s.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziRead.hs_zdfReadDouble);
    };
    hs_zdcreadsPrec1225vl3u.evaluateOnce = function () {
        if (hs_a6125vl3s.notEvaluated) {
            return hs_a6125vl3s.hscall();
        } else {
            return hs_a6125vl3s;
        }
    };
    this.hs_zdfReadCDouble.data = [hs_a6125vl3s, hs_a6025vl3o, hs_zdcreadPrec1225vl3y, hs_zdcreadListPrec1225vl3w];
    hs_zdcreadListPrec1225vl3w.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCDouble);
    };
    hs_zdcreadPrec1225vl3y.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCDouble);
    };
    hs_a6225vl3A.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziFloat.hs_zdfShowDouble);
    };
    hs_zdcshowList1225vl3C.evaluateOnce = function () {
        if (hs_a6225vl3A.notEvaluated) {
            return hs_a6225vl3A.hscall();
        } else {
            return hs_a6225vl3A;
        }
    };
    hs_a6325vl3E.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziFloat.hs_zdfShowDouble);
    };
    hs_zdcshow1225vl3G.evaluateOnce = function () {
        if (hs_a6325vl3E.notEvaluated) {
            return hs_a6325vl3E.hscall();
        } else {
            return hs_a6325vl3E;
        }
    };
    hs_a6425vl3I.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziFloat.hs_zdfShowDouble);
    };
    hs_zdcshowsPrec1225vl3K.evaluateOnce = function () {
        if (hs_a6425vl3I.notEvaluated) {
            return hs_a6425vl3I.hscall();
        } else {
            return hs_a6425vl3I;
        }
    };
    this.hs_zdfShowCDouble.data = [hs_a6425vl3I, hs_a6325vl3E, hs_a6225vl3A];
    hs_zdctypeOf1225vl3M.evaluate = function (hs_ds26DJA4) {
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_tyConCDouble25sEQi, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCDouble.evaluateOnce = function () {
        if (hs_zdctypeOf1225vl3M.notEvaluated) {
            return hs_zdctypeOf1225vl3M.hscall();
        } else {
            return hs_zdctypeOf1225vl3M;
        }
    };
    hs_a6525vl3Q.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziInt.hs_zdfReadInt32);
    };
    hs_zdcreadList1325vl3S.evaluateOnce = function () {
        if (hs_a6525vl3Q.notEvaluated) {
            return hs_a6525vl3Q.hscall();
        } else {
            return hs_a6525vl3Q;
        }
    };
    hs_a6625vl3U.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziInt.hs_zdfReadInt32);
    };
    hs_zdcreadsPrec1325vl3W.evaluateOnce = function () {
        if (hs_a6625vl3U.notEvaluated) {
            return hs_a6625vl3U.hscall();
        } else {
            return hs_a6625vl3U;
        }
    };
    this.hs_zdfReadCPtrdiff.data = [hs_a6625vl3U, hs_a6525vl3Q, hs_zdcreadPrec1325vl40, hs_zdcreadListPrec1325vl3Y];
    hs_zdcreadListPrec1325vl3Y.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCPtrdiff);
    };
    hs_zdcreadPrec1325vl40.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCPtrdiff);
    };
    hs_a6725vl42.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshowList1325vl44.evaluateOnce = function () {
        if (hs_a6725vl42.notEvaluated) {
            return hs_a6725vl42.hscall();
        } else {
            return hs_a6725vl42;
        }
    };
    hs_a6825vl46.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshow1325vl48.evaluateOnce = function () {
        if (hs_a6825vl46.notEvaluated) {
            return hs_a6825vl46.hscall();
        } else {
            return hs_a6825vl46;
        }
    };
    hs_a6925vl4a.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshowsPrec1325vl4c.evaluateOnce = function () {
        if (hs_a6925vl4a.notEvaluated) {
            return hs_a6925vl4a.hscall();
        } else {
            return hs_a6925vl4a;
        }
    };
    this.hs_zdfShowCPtrdiff.data = [hs_a6925vl4a, hs_a6825vl46, hs_a6725vl42];
    hs_zdctypeOf1325vl4e.evaluate = function (hs_ds26DJAw) {
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_tyConCPtrdiff25sEQk, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCPtrdiff.evaluateOnce = function () {
        if (hs_zdctypeOf1325vl4e.notEvaluated) {
            return hs_zdctypeOf1325vl4e.hscall();
        } else {
            return hs_zdctypeOf1325vl4e;
        }
    };
    hs_a7025vl4i.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadList1425vl4k.evaluateOnce = function () {
        if (hs_a7025vl4i.notEvaluated) {
            return hs_a7025vl4i.hscall();
        } else {
            return hs_a7025vl4i;
        }
    };
    hs_a7125vl4m.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadsPrec1425vl4o.evaluateOnce = function () {
        if (hs_a7125vl4m.notEvaluated) {
            return hs_a7125vl4m.hscall();
        } else {
            return hs_a7125vl4m;
        }
    };
    this.hs_zdfReadCSizze.data = [hs_a7125vl4m, hs_a7025vl4i, hs_zdcreadPrec1425vl4s, hs_zdcreadListPrec1425vl4q];
    hs_zdcreadListPrec1425vl4q.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCSizze);
    };
    hs_zdcreadPrec1425vl4s.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCSizze);
    };
    hs_a7225vl4u.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshowList1425vl4w.evaluateOnce = function () {
        if (hs_a7225vl4u.notEvaluated) {
            return hs_a7225vl4u.hscall();
        } else {
            return hs_a7225vl4u;
        }
    };
    hs_a7325vl4y.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshow1425vl4A.evaluateOnce = function () {
        if (hs_a7325vl4y.notEvaluated) {
            return hs_a7325vl4y.hscall();
        } else {
            return hs_a7325vl4y;
        }
    };
    hs_a7425vl4C.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshowsPrec1425vl4E.evaluateOnce = function () {
        if (hs_a7425vl4C.notEvaluated) {
            return hs_a7425vl4C.hscall();
        } else {
            return hs_a7425vl4C;
        }
    };
    this.hs_zdfShowCSizze.data = [hs_a7425vl4C, hs_a7325vl4y, hs_a7225vl4u];
    hs_zdctypeOf1425vl4G.evaluate = function (hs_ds26DJAY) {
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_tyConCSizze25sEQm, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCSizze.evaluateOnce = function () {
        if (hs_zdctypeOf1425vl4G.notEvaluated) {
            return hs_zdctypeOf1425vl4G.hscall();
        } else {
            return hs_zdctypeOf1425vl4G;
        }
    };
    hs_a7525vl4K.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziInt.hs_zdfReadInt32);
    };
    hs_zdcreadList1525vl4M.evaluateOnce = function () {
        if (hs_a7525vl4K.notEvaluated) {
            return hs_a7525vl4K.hscall();
        } else {
            return hs_a7525vl4K;
        }
    };
    hs_a7625vl4O.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziInt.hs_zdfReadInt32);
    };
    hs_zdcreadsPrec1525vl4Q.evaluateOnce = function () {
        if (hs_a7625vl4O.notEvaluated) {
            return hs_a7625vl4O.hscall();
        } else {
            return hs_a7625vl4O;
        }
    };
    this.hs_zdfReadCWchar.data = [hs_a7625vl4O, hs_a7525vl4K, hs_zdcreadPrec1525vl4U, hs_zdcreadListPrec1525vl4S];
    hs_zdcreadListPrec1525vl4S.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCWchar);
    };
    hs_zdcreadPrec1525vl4U.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCWchar);
    };
    hs_a7725vl4W.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshowList1525vl4Y.evaluateOnce = function () {
        if (hs_a7725vl4W.notEvaluated) {
            return hs_a7725vl4W.hscall();
        } else {
            return hs_a7725vl4W;
        }
    };
    hs_a7825vl50.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshow1525vl52.evaluateOnce = function () {
        if (hs_a7825vl50.notEvaluated) {
            return hs_a7825vl50.hscall();
        } else {
            return hs_a7825vl50;
        }
    };
    hs_a7925vl54.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshowsPrec1525vl56.evaluateOnce = function () {
        if (hs_a7925vl54.notEvaluated) {
            return hs_a7925vl54.hscall();
        } else {
            return hs_a7925vl54;
        }
    };
    this.hs_zdfShowCWchar.data = [hs_a7925vl54, hs_a7825vl50, hs_a7725vl4W];
    hs_zdctypeOf1525vl58.evaluate = function (hs_ds26DJBq) {
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_tyConCWchar25sEQo, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCWchar.evaluateOnce = function () {
        if (hs_zdctypeOf1525vl58.notEvaluated) {
            return hs_zdctypeOf1525vl58.hscall();
        } else {
            return hs_zdctypeOf1525vl58;
        }
    };
    hs_a8025vl5c.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziInt.hs_zdfReadInt32);
    };
    hs_zdcreadList1625vl5e.evaluateOnce = function () {
        if (hs_a8025vl5c.notEvaluated) {
            return hs_a8025vl5c.hscall();
        } else {
            return hs_a8025vl5c;
        }
    };
    hs_a8125vl5g.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziInt.hs_zdfReadInt32);
    };
    hs_zdcreadsPrec1625vl5i.evaluateOnce = function () {
        if (hs_a8125vl5g.notEvaluated) {
            return hs_a8125vl5g.hscall();
        } else {
            return hs_a8125vl5g;
        }
    };
    this.hs_zdfReadCSigAtomic.data = [hs_a8125vl5g, hs_a8025vl5c, hs_zdcreadPrec1625vl5m, hs_zdcreadListPrec1625vl5k];
    hs_zdcreadListPrec1625vl5k.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCSigAtomic);
    };
    hs_zdcreadPrec1625vl5m.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCSigAtomic);
    };
    hs_a8225vl5o.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshowList1625vl5q.evaluateOnce = function () {
        if (hs_a8225vl5o.notEvaluated) {
            return hs_a8225vl5o.hscall();
        } else {
            return hs_a8225vl5o;
        }
    };
    hs_a8325vl5s.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshow1625vl5u.evaluateOnce = function () {
        if (hs_a8325vl5s.notEvaluated) {
            return hs_a8325vl5s.hscall();
        } else {
            return hs_a8325vl5s;
        }
    };
    hs_a8425vl5w.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshowsPrec1625vl5y.evaluateOnce = function () {
        if (hs_a8425vl5w.notEvaluated) {
            return hs_a8425vl5w.hscall();
        } else {
            return hs_a8425vl5w;
        }
    };
    this.hs_zdfShowCSigAtomic.data = [hs_a8425vl5w, hs_a8325vl5s, hs_a8225vl5o];
    hs_zdctypeOf1625vl5A.evaluate = function (hs_ds26DJBS) {
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_tyConCSigAtomic25sEQq, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCSigAtomic.evaluateOnce = function () {
        if (hs_zdctypeOf1625vl5A.notEvaluated) {
            return hs_zdctypeOf1625vl5A.hscall();
        } else {
            return hs_zdctypeOf1625vl5A;
        }
    };
    hs_a8525vl5E.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziInt.hs_zdfReadInt32);
    };
    hs_zdcreadList1725vl5G.evaluateOnce = function () {
        if (hs_a8525vl5E.notEvaluated) {
            return hs_a8525vl5E.hscall();
        } else {
            return hs_a8525vl5E;
        }
    };
    hs_a8625vl5I.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziInt.hs_zdfReadInt32);
    };
    hs_zdcreadsPrec1725vl5K.evaluateOnce = function () {
        if (hs_a8625vl5I.notEvaluated) {
            return hs_a8625vl5I.hscall();
        } else {
            return hs_a8625vl5I;
        }
    };
    this.hs_zdfReadCClock.data = [hs_a8625vl5I, hs_a8525vl5E, hs_zdcreadPrec1725vl5O, hs_zdcreadListPrec1725vl5M];
    hs_zdcreadListPrec1725vl5M.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCClock);
    };
    hs_zdcreadPrec1725vl5O.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCClock);
    };
    hs_a8725vl5Q.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshowList1725vl5S.evaluateOnce = function () {
        if (hs_a8725vl5Q.notEvaluated) {
            return hs_a8725vl5Q.hscall();
        } else {
            return hs_a8725vl5Q;
        }
    };
    hs_a8825vl5U.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshow1725vl5W.evaluateOnce = function () {
        if (hs_a8825vl5U.notEvaluated) {
            return hs_a8825vl5U.hscall();
        } else {
            return hs_a8825vl5U;
        }
    };
    hs_a8925vl5Y.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshowsPrec1725vl60.evaluateOnce = function () {
        if (hs_a8925vl5Y.notEvaluated) {
            return hs_a8925vl5Y.hscall();
        } else {
            return hs_a8925vl5Y;
        }
    };
    this.hs_zdfShowCClock.data = [hs_a8925vl5Y, hs_a8825vl5U, hs_a8725vl5Q];
    hs_zdctypeOf1725vl62.evaluate = function (hs_ds26DJCk) {
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_tyConCClock25sEQs, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCClock.evaluateOnce = function () {
        if (hs_zdctypeOf1725vl62.notEvaluated) {
            return hs_zdctypeOf1725vl62.hscall();
        } else {
            return hs_zdctypeOf1725vl62;
        }
    };
    hs_a9025vl66.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziInt.hs_zdfReadInt32);
    };
    hs_zdcreadList1825vl68.evaluateOnce = function () {
        if (hs_a9025vl66.notEvaluated) {
            return hs_a9025vl66.hscall();
        } else {
            return hs_a9025vl66;
        }
    };
    hs_a9125vl6a.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziInt.hs_zdfReadInt32);
    };
    hs_zdcreadsPrec1825vl6c.evaluateOnce = function () {
        if (hs_a9125vl6a.notEvaluated) {
            return hs_a9125vl6a.hscall();
        } else {
            return hs_a9125vl6a;
        }
    };
    this.hs_zdfReadCTime.data = [hs_a9125vl6a, hs_a9025vl66, hs_zdcreadPrec1825vl6g, hs_zdcreadListPrec1825vl6e];
    hs_zdcreadListPrec1825vl6e.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCTime);
    };
    hs_zdcreadPrec1825vl6g.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCTime);
    };
    hs_a9225vl6i.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshowList1825vl6k.evaluateOnce = function () {
        if (hs_a9225vl6i.notEvaluated) {
            return hs_a9225vl6i.hscall();
        } else {
            return hs_a9225vl6i;
        }
    };
    hs_a9325vl6m.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshow1825vl6o.evaluateOnce = function () {
        if (hs_a9325vl6m.notEvaluated) {
            return hs_a9325vl6m.hscall();
        } else {
            return hs_a9325vl6m;
        }
    };
    hs_a9425vl6q.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshowsPrec1825vl6s.evaluateOnce = function () {
        if (hs_a9425vl6q.notEvaluated) {
            return hs_a9425vl6q.hscall();
        } else {
            return hs_a9425vl6q;
        }
    };
    this.hs_zdfShowCTime.data = [hs_a9425vl6q, hs_a9325vl6m, hs_a9225vl6i];
    hs_zdctypeOf1825vl6u.evaluate = function (hs_ds26DJCM) {
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_tyConCTime25sEQu, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCTime.evaluateOnce = function () {
        if (hs_zdctypeOf1825vl6u.notEvaluated) {
            return hs_zdctypeOf1825vl6u.hscall();
        } else {
            return hs_zdctypeOf1825vl6u;
        }
    };
    hs_a9525vl6y.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziInt.hs_zdfReadInt32);
    };
    hs_zdcreadList1925vl6A.evaluateOnce = function () {
        if (hs_a9525vl6y.notEvaluated) {
            return hs_a9525vl6y.hscall();
        } else {
            return hs_a9525vl6y;
        }
    };
    hs_a9625vl6C.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziInt.hs_zdfReadInt32);
    };
    hs_zdcreadsPrec1925vl6E.evaluateOnce = function () {
        if (hs_a9625vl6C.notEvaluated) {
            return hs_a9625vl6C.hscall();
        } else {
            return hs_a9625vl6C;
        }
    };
    this.hs_zdfReadCIntPtr.data = [hs_a9625vl6C, hs_a9525vl6y, hs_zdcreadPrec1925vl6I, hs_zdcreadListPrec1925vl6G];
    hs_zdcreadListPrec1925vl6G.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCIntPtr);
    };
    hs_zdcreadPrec1925vl6I.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCIntPtr);
    };
    hs_a9725vl6K.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshowList1925vl6M.evaluateOnce = function () {
        if (hs_a9725vl6K.notEvaluated) {
            return hs_a9725vl6K.hscall();
        } else {
            return hs_a9725vl6K;
        }
    };
    hs_a9825vl6O.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshow1925vl6Q.evaluateOnce = function () {
        if (hs_a9825vl6O.notEvaluated) {
            return hs_a9825vl6O.hscall();
        } else {
            return hs_a9825vl6O;
        }
    };
    hs_a9925vl6S.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshowsPrec1925vl6U.evaluateOnce = function () {
        if (hs_a9925vl6S.notEvaluated) {
            return hs_a9925vl6S.hscall();
        } else {
            return hs_a9925vl6S;
        }
    };
    this.hs_zdfShowCIntPtr.data = [hs_a9925vl6S, hs_a9825vl6O, hs_a9725vl6K];
    hs_zdctypeOf1925vl6W.evaluate = function (hs_ds26DJDe) {
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_tyConCIntPtr25sEQw, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCIntPtr.evaluateOnce = function () {
        if (hs_zdctypeOf1925vl6W.notEvaluated) {
            return hs_zdctypeOf1925vl6W.hscall();
        } else {
            return hs_zdctypeOf1925vl6W;
        }
    };
    hs_a10025vl70.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadList2025vl72.evaluateOnce = function () {
        if (hs_a10025vl70.notEvaluated) {
            return hs_a10025vl70.hscall();
        } else {
            return hs_a10025vl70;
        }
    };
    hs_a10125vl74.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadsPrec2025vl76.evaluateOnce = function () {
        if (hs_a10125vl74.notEvaluated) {
            return hs_a10125vl74.hscall();
        } else {
            return hs_a10125vl74;
        }
    };
    this.hs_zdfReadCUIntPtr.data = [hs_a10125vl74, hs_a10025vl70, hs_zdcreadPrec2025vl7a, hs_zdcreadListPrec2025vl78];
    hs_zdcreadListPrec2025vl78.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCUIntPtr);
    };
    hs_zdcreadPrec2025vl7a.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCUIntPtr);
    };
    hs_a10225vl7c.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshowList2025vl7e.evaluateOnce = function () {
        if (hs_a10225vl7c.notEvaluated) {
            return hs_a10225vl7c.hscall();
        } else {
            return hs_a10225vl7c;
        }
    };
    hs_a10325vl7g.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshow2025vl7i.evaluateOnce = function () {
        if (hs_a10325vl7g.notEvaluated) {
            return hs_a10325vl7g.hscall();
        } else {
            return hs_a10325vl7g;
        }
    };
    hs_a10425vl7k.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshowsPrec2025vl7m.evaluateOnce = function () {
        if (hs_a10425vl7k.notEvaluated) {
            return hs_a10425vl7k.hscall();
        } else {
            return hs_a10425vl7k;
        }
    };
    this.hs_zdfShowCUIntPtr.data = [hs_a10425vl7k, hs_a10325vl7g, hs_a10225vl7c];
    hs_zdctypeOf2025vl7o.evaluate = function (hs_ds26DJDG) {
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_tyConCUIntPtr25sEQy, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCUIntPtr.evaluateOnce = function () {
        if (hs_zdctypeOf2025vl7o.notEvaluated) {
            return hs_zdctypeOf2025vl7o.hscall();
        } else {
            return hs_zdctypeOf2025vl7o;
        }
    };
    hs_a10525vl7s.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziInt.hs_zdfReadInt64);
    };
    hs_zdcreadList2125vl7u.evaluateOnce = function () {
        if (hs_a10525vl7s.notEvaluated) {
            return hs_a10525vl7s.hscall();
        } else {
            return hs_a10525vl7s;
        }
    };
    hs_a10625vl7w.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziInt.hs_zdfReadInt64);
    };
    hs_zdcreadsPrec2125vl7y.evaluateOnce = function () {
        if (hs_a10625vl7w.notEvaluated) {
            return hs_a10625vl7w.hscall();
        } else {
            return hs_a10625vl7w;
        }
    };
    this.hs_zdfReadCIntMax.data = [hs_a10625vl7w, hs_a10525vl7s, hs_zdcreadPrec2125vl7C, hs_zdcreadListPrec2125vl7A];
    hs_zdcreadListPrec2125vl7A.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCIntMax);
    };
    hs_zdcreadPrec2125vl7C.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCIntMax);
    };
    hs_a10725vl7E.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziInt.hs_zdfShowInt64);
    };
    hs_zdcshowList2125vl7G.evaluateOnce = function () {
        if (hs_a10725vl7E.notEvaluated) {
            return hs_a10725vl7E.hscall();
        } else {
            return hs_a10725vl7E;
        }
    };
    hs_a10825vl7I.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziInt.hs_zdfShowInt64);
    };
    hs_zdcshow2125vl7K.evaluateOnce = function () {
        if (hs_a10825vl7I.notEvaluated) {
            return hs_a10825vl7I.hscall();
        } else {
            return hs_a10825vl7I;
        }
    };
    hs_a10925vl7M.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziInt.hs_zdfShowInt64);
    };
    hs_zdcshowsPrec2125vl7O.evaluateOnce = function () {
        if (hs_a10925vl7M.notEvaluated) {
            return hs_a10925vl7M.hscall();
        } else {
            return hs_a10925vl7M;
        }
    };
    this.hs_zdfShowCIntMax.data = [hs_a10925vl7M, hs_a10825vl7I, hs_a10725vl7E];
    hs_zdctypeOf2125vl7Q.evaluate = function (hs_ds26DJE8) {
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_tyConCIntMax25sEQA, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCIntMax.evaluateOnce = function () {
        if (hs_zdctypeOf2125vl7Q.notEvaluated) {
            return hs_zdctypeOf2125vl7Q.hscall();
        } else {
            return hs_zdctypeOf2125vl7Q;
        }
    };
    hs_a11025vl7U.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziWord.hs_zdfReadWord64);
    };
    hs_zdcreadList2225vl7W.evaluateOnce = function () {
        if (hs_a11025vl7U.notEvaluated) {
            return hs_a11025vl7U.hscall();
        } else {
            return hs_a11025vl7U;
        }
    };
    hs_a11125vl7Y.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord64);
    };
    hs_zdcreadsPrec2225vl80.evaluateOnce = function () {
        if (hs_a11125vl7Y.notEvaluated) {
            return hs_a11125vl7Y.hscall();
        } else {
            return hs_a11125vl7Y;
        }
    };
    this.hs_zdfReadCUIntMax.data = [hs_a11125vl7Y, hs_a11025vl7U, hs_zdcreadPrec2225vl84, hs_zdcreadListPrec2225vl82];
    hs_zdcreadListPrec2225vl82.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCUIntMax);
    };
    hs_zdcreadPrec2225vl84.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCUIntMax);
    };
    hs_a11225vl86.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziWord.hs_zdfShowWord64);
    };
    hs_zdcshowList2225vl88.evaluateOnce = function () {
        if (hs_a11225vl86.notEvaluated) {
            return hs_a11225vl86.hscall();
        } else {
            return hs_a11225vl86;
        }
    };
    hs_a11325vl8a.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziWord.hs_zdfShowWord64);
    };
    hs_zdcshow2225vl8c.evaluateOnce = function () {
        if (hs_a11325vl8a.notEvaluated) {
            return hs_a11325vl8a.hscall();
        } else {
            return hs_a11325vl8a;
        }
    };
    hs_a11425vl8e.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziWord.hs_zdfShowWord64);
    };
    hs_zdcshowsPrec2225vl8g.evaluateOnce = function () {
        if (hs_a11425vl8e.notEvaluated) {
            return hs_a11425vl8e.hscall();
        } else {
            return hs_a11425vl8e;
        }
    };
    this.hs_zdfShowCUIntMax.data = [hs_a11425vl8e, hs_a11325vl8a, hs_a11225vl86];
    hs_zdctypeOf2225vl8i.evaluate = function (hs_ds26DJEA) {
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_tyConCUIntMax25sEQC, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCUIntMax.evaluateOnce = function () {
        if (hs_zdctypeOf2225vl8i.notEvaluated) {
            return hs_zdctypeOf2225vl8i.hscall();
        } else {
            return hs_zdctypeOf2225vl8i;
        }
    };
    hs_a11525vl8m.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdczizazi25vl8o.evaluateOnce = function () {
        if (hs_a11525vl8m.notEvaluated) {
            return hs_a11525vl8m.hscall();
        } else {
            return hs_a11525vl8m;
        }
    };
    hs_a11625vl8q.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdczizbzi25vl8s.evaluateOnce = function () {
        if (hs_a11625vl8q.notEvaluated) {
            return hs_a11625vl8q.hscall();
        } else {
            return hs_a11625vl8q;
        }
    };
    hs_a11725vl8u.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcxor25vl8w.evaluateOnce = function () {
        if (hs_a11725vl8u.notEvaluated) {
            return hs_a11725vl8u.hscall();
        } else {
            return hs_a11725vl8u;
        }
    };
    hs_a11825vl8y.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdccomplement25vl8A.evaluateOnce = function () {
        if (hs_a11825vl8y.notEvaluated) {
            return hs_a11825vl8y.hscall();
        } else {
            return hs_a11825vl8y;
        }
    };
    hs_a11925vl8C.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcshift25vl8E.evaluateOnce = function () {
        if (hs_a11925vl8C.notEvaluated) {
            return hs_a11925vl8C.hscall();
        } else {
            return hs_a11925vl8C;
        }
    };
    hs_a12025vl8G.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcrotate25vl8I.evaluateOnce = function () {
        if (hs_a12025vl8G.notEvaluated) {
            return hs_a12025vl8G.hscall();
        } else {
            return hs_a12025vl8G;
        }
    };
    hs_a12125vl8K.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcbit25vl8M.evaluateOnce = function () {
        if (hs_a12125vl8K.notEvaluated) {
            return hs_a12125vl8K.hscall();
        } else {
            return hs_a12125vl8K;
        }
    };
    hs_a12225vl8O.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcsetBit25vl8Q.evaluateOnce = function () {
        if (hs_a12225vl8O.notEvaluated) {
            return hs_a12225vl8O.hscall();
        } else {
            return hs_a12225vl8O;
        }
    };
    hs_a12325vl8S.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcclearBit25vl8U.evaluateOnce = function () {
        if (hs_a12325vl8S.notEvaluated) {
            return hs_a12325vl8S.hscall();
        } else {
            return hs_a12325vl8S;
        }
    };
    hs_a12425vl8W.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdccomplementBit25vl8Y.evaluateOnce = function () {
        if (hs_a12425vl8W.notEvaluated) {
            return hs_a12425vl8W.hscall();
        } else {
            return hs_a12425vl8W;
        }
    };
    hs_a12525vl90.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdctestBit25vl92.evaluateOnce = function () {
        if (hs_a12525vl90.notEvaluated) {
            return hs_a12525vl90.hscall();
        } else {
            return hs_a12525vl90;
        }
    };
    hs_a12625vl94.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcbitSizze25vl96.evaluateOnce = function () {
        if (hs_a12625vl94.notEvaluated) {
            return hs_a12625vl94.hscall();
        } else {
            return hs_a12625vl94;
        }
    };
    hs_a12725vl98.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcisSigned25vl9a.evaluateOnce = function () {
        if (hs_a12725vl98.notEvaluated) {
            return hs_a12725vl98.hscall();
        } else {
            return hs_a12725vl98;
        }
    };
    hs_a12825vl9c.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcshiftL25vl9e.evaluateOnce = function () {
        if (hs_a12825vl9c.notEvaluated) {
            return hs_a12825vl9c.hscall();
        } else {
            return hs_a12825vl9c;
        }
    };
    hs_a12925vl9g.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcshiftR25vl9i.evaluateOnce = function () {
        if (hs_a12925vl9g.notEvaluated) {
            return hs_a12925vl9g.hscall();
        } else {
            return hs_a12925vl9g;
        }
    };
    hs_a13025vl9k.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcrotateL25vl9m.evaluateOnce = function () {
        if (hs_a13025vl9k.notEvaluated) {
            return hs_a13025vl9k.hscall();
        } else {
            return hs_a13025vl9k;
        }
    };
    hs_a13125vl9o.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcrotateR25vl9q.evaluateOnce = function () {
        if (hs_a13125vl9o.notEvaluated) {
            return hs_a13125vl9o.hscall();
        } else {
            return hs_a13125vl9o;
        }
    };
    hs_a13225vl9s.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcquot25vl9u.evaluateOnce = function () {
        if (hs_a13225vl9s.notEvaluated) {
            return hs_a13225vl9s.hscall();
        } else {
            return hs_a13225vl9s;
        }
    };
    hs_a13325vl9w.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcrem25vl9y.evaluateOnce = function () {
        if (hs_a13325vl9w.notEvaluated) {
            return hs_a13325vl9w.hscall();
        } else {
            return hs_a13325vl9w;
        }
    };
    hs_a13425vl9A.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcdiv25vl9C.evaluateOnce = function () {
        if (hs_a13425vl9A.notEvaluated) {
            return hs_a13425vl9A.hscall();
        } else {
            return hs_a13425vl9A;
        }
    };
    hs_a13525vl9E.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcmod25vl9G.evaluateOnce = function () {
        if (hs_a13525vl9E.notEvaluated) {
            return hs_a13525vl9E.hscall();
        } else {
            return hs_a13525vl9E;
        }
    };
    hs_a13625vl9I.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcquotRem25vl9K.evaluateOnce = function () {
        if (hs_a13625vl9I.notEvaluated) {
            return hs_a13625vl9I.hscall();
        } else {
            return hs_a13625vl9I;
        }
    };
    hs_a13725vl9M.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcdivMod25vl9O.evaluateOnce = function () {
        if (hs_a13725vl9M.notEvaluated) {
            return hs_a13725vl9M.hscall();
        } else {
            return hs_a13725vl9M;
        }
    };
    hs_a13825vl9Q.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdctoInteger25vl9S.evaluateOnce = function () {
        if (hs_a13825vl9Q.notEvaluated) {
            return hs_a13825vl9Q.hscall();
        } else {
            return hs_a13825vl9Q;
        }
    };
    hs_a13925vl9U.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord64);
    };
    hs_zdcminBound25vl9W.evaluateOnce = function () {
        if (hs_a13925vl9U.notEvaluated) {
            return hs_a13925vl9U.hscall();
        } else {
            return hs_a13925vl9U;
        }
    };
    hs_a14025vl9Y.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord64);
    };
    hs_zdcmaxBound25vla0.evaluateOnce = function () {
        if (hs_a14025vl9Y.notEvaluated) {
            return hs_a14025vl9Y.hscall();
        } else {
            return hs_a14025vl9Y;
        }
    };
    this.hs_zdfBoundedCUIntMax.data = [hs_a13925vl9U, hs_a14025vl9Y];
    hs_a14125vla2.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziWord.hs_zdfRealWord64);
    };
    hs_zdctoRational25vla4.evaluateOnce = function () {
        if (hs_a14125vla2.notEvaluated) {
            return hs_a14125vla2.hscall();
        } else {
            return hs_a14125vla2;
        }
    };
    hs_a14225vla6.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcsizzeOf25vla8.evaluateOnce = function () {
        if (hs_a14225vla6.notEvaluated) {
            return hs_a14225vla6.hscall();
        } else {
            return hs_a14225vla6;
        }
    };
    hs_a14325vlaa.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcalignment25vlac.evaluateOnce = function () {
        if (hs_a14325vlaa.notEvaluated) {
            return hs_a14325vlaa.hscall();
        } else {
            return hs_a14325vlaa;
        }
    };
    hs_a14425vlae.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpeekElemOff25vlag.evaluateOnce = function () {
        if (hs_a14425vlae.notEvaluated) {
            return hs_a14425vlae.hscall();
        } else {
            return hs_a14425vlae;
        }
    };
    hs_a14525vlai.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpokeElemOff25vlak.evaluateOnce = function () {
        if (hs_a14525vlai.notEvaluated) {
            return hs_a14525vlai.hscall();
        } else {
            return hs_a14525vlai;
        }
    };
    hs_a14625vlam.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpeekByteOff25vlao.evaluateOnce = function () {
        if (hs_a14625vlam.notEvaluated) {
            return hs_a14625vlam.hscall();
        } else {
            return hs_a14625vlam;
        }
    };
    hs_a14725vlaq.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpokeByteOff25vlas.evaluateOnce = function () {
        if (hs_a14725vlaq.notEvaluated) {
            return hs_a14725vlaq.hscall();
        } else {
            return hs_a14725vlaq;
        }
    };
    hs_a14825vlau.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpeek25vlaw.evaluateOnce = function () {
        if (hs_a14825vlau.notEvaluated) {
            return hs_a14825vlau.hscall();
        } else {
            return hs_a14825vlau;
        }
    };
    hs_a14925vlay.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpoke25vlaA.evaluateOnce = function () {
        if (hs_a14925vlay.notEvaluated) {
            return hs_a14925vlay.hscall();
        } else {
            return hs_a14925vlay;
        }
    };
    this.hs_zdfStorableCUIntMax.data = [hs_a14225vla6, hs_a14325vlaa, hs_a14425vlae, hs_a14525vlai, hs_a14625vlam, hs_a14725vlaq, hs_a14825vlau, hs_a14925vlay];
    hs_a15025vlaC.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcsucc25vlaE.evaluateOnce = function () {
        if (hs_a15025vlaC.notEvaluated) {
            return hs_a15025vlaC.hscall();
        } else {
            return hs_a15025vlaC;
        }
    };
    hs_a15125vlaG.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcpred25vlaI.evaluateOnce = function () {
        if (hs_a15125vlaG.notEvaluated) {
            return hs_a15125vlaG.hscall();
        } else {
            return hs_a15125vlaG;
        }
    };
    hs_a15225vlaK.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdctoEnum25vlaM.evaluateOnce = function () {
        if (hs_a15225vlaK.notEvaluated) {
            return hs_a15225vlaK.hscall();
        } else {
            return hs_a15225vlaK;
        }
    };
    hs_a15325vlaO.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcfromEnum25vlaQ.evaluateOnce = function () {
        if (hs_a15325vlaO.notEvaluated) {
            return hs_a15325vlaO.hscall();
        } else {
            return hs_a15325vlaO;
        }
    };
    hs_a15425vlaS.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcenumFrom25vlaU.evaluateOnce = function () {
        if (hs_a15425vlaS.notEvaluated) {
            return hs_a15425vlaS.hscall();
        } else {
            return hs_a15425vlaS;
        }
    };
    hs_a15525vlaW.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcenumFromThen25vlaY.evaluateOnce = function () {
        if (hs_a15525vlaW.notEvaluated) {
            return hs_a15525vlaW.hscall();
        } else {
            return hs_a15525vlaW;
        }
    };
    hs_a15625vlb0.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcenumFromTo25vlb2.evaluateOnce = function () {
        if (hs_a15625vlb0.notEvaluated) {
            return hs_a15625vlb0.hscall();
        } else {
            return hs_a15625vlb0;
        }
    };
    hs_a15725vlb4.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcenumFromThenTo25vlb6.evaluateOnce = function () {
        if (hs_a15725vlb4.notEvaluated) {
            return hs_a15725vlb4.hscall();
        } else {
            return hs_a15725vlb4;
        }
    };
    this.hs_zdfEnumCUIntMax.data = [hs_a15025vlaC, hs_a15125vlaG, hs_a15225vlaK, hs_a15325vlaO, hs_a15425vlaS, hs_a15525vlaW, hs_a15625vlb0, hs_a15725vlb4];
    hs_a15825vlb8.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdczp25vlba.evaluateOnce = function () {
        if (hs_a15825vlb8.notEvaluated) {
            return hs_a15825vlb8.hscall();
        } else {
            return hs_a15825vlb8;
        }
    };
    hs_a15925vlbc.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdczt25vlbe.evaluateOnce = function () {
        if (hs_a15925vlbc.notEvaluated) {
            return hs_a15925vlbc.hscall();
        } else {
            return hs_a15925vlbc;
        }
    };
    hs_a16025vlbg.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdczm25vlbi.evaluateOnce = function () {
        if (hs_a16025vlbg.notEvaluated) {
            return hs_a16025vlbg.hscall();
        } else {
            return hs_a16025vlbg;
        }
    };
    hs_a16125vlbk.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdcnegate25vlbm.evaluateOnce = function () {
        if (hs_a16125vlbk.notEvaluated) {
            return hs_a16125vlbk.hscall();
        } else {
            return hs_a16125vlbk;
        }
    };
    hs_a16225vlbo.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdcabs25vlbq.evaluateOnce = function () {
        if (hs_a16225vlbo.notEvaluated) {
            return hs_a16225vlbo.hscall();
        } else {
            return hs_a16225vlbo;
        }
    };
    hs_a16325vlbs.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdcsignum25vlbu.evaluateOnce = function () {
        if (hs_a16325vlbs.notEvaluated) {
            return hs_a16325vlbs.hscall();
        } else {
            return hs_a16325vlbs;
        }
    };
    hs_a16425vlbw.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdcfromInteger25vlby.evaluateOnce = function () {
        if (hs_a16425vlbw.notEvaluated) {
            return hs_a16425vlbw.hscall();
        } else {
            return hs_a16425vlbw;
        }
    };
    hs_a16525vlbA.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdccompare25vlbC.evaluateOnce = function () {
        if (hs_a16525vlbA.notEvaluated) {
            return hs_a16525vlbA.hscall();
        } else {
            return hs_a16525vlbA;
        }
    };
    hs_a16625vlbE.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdczl25vlbG.evaluateOnce = function () {
        if (hs_a16625vlbE.notEvaluated) {
            return hs_a16625vlbE.hscall();
        } else {
            return hs_a16625vlbE;
        }
    };
    hs_a16725vlbI.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdczgze25vlbK.evaluateOnce = function () {
        if (hs_a16725vlbI.notEvaluated) {
            return hs_a16725vlbI.hscall();
        } else {
            return hs_a16725vlbI;
        }
    };
    hs_a16825vlbM.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdczg25vlbO.evaluateOnce = function () {
        if (hs_a16825vlbM.notEvaluated) {
            return hs_a16825vlbM.hscall();
        } else {
            return hs_a16825vlbM;
        }
    };
    hs_a16925vlbQ.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdczlze25vlbS.evaluateOnce = function () {
        if (hs_a16925vlbQ.notEvaluated) {
            return hs_a16925vlbQ.hscall();
        } else {
            return hs_a16925vlbQ;
        }
    };
    hs_a17025vlbU.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdcmax25vlbW.evaluateOnce = function () {
        if (hs_a17025vlbU.notEvaluated) {
            return hs_a17025vlbU.hscall();
        } else {
            return hs_a17025vlbU;
        }
    };
    hs_a17125vlbY.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdcmin25vlc0.evaluateOnce = function () {
        if (hs_a17125vlbY.notEvaluated) {
            return hs_a17125vlbY.hscall();
        } else {
            return hs_a17125vlbY;
        }
    };
    hs_a17225vlc2.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord64);
    };
    hs_zdczeze25vlc4.evaluateOnce = function () {
        if (hs_a17225vlc2.notEvaluated) {
            return hs_a17225vlc2.hscall();
        } else {
            return hs_a17225vlc2;
        }
    };
    hs_a17325vlc6.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord64);
    };
    hs_zdczsze25vlc8.evaluateOnce = function () {
        if (hs_a17325vlc6.notEvaluated) {
            return hs_a17325vlc6.hscall();
        } else {
            return hs_a17325vlc6;
        }
    };
    this.hs_zdfEqCUIntMax.data = [hs_a17225vlc2, hs_a17325vlc6];
    this.hs_zdfOrdCUIntMax.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCUIntMax, hs_a16525vlbA, hs_a16625vlbE, hs_a16725vlbI, hs_a16825vlbM, hs_a16925vlbQ, hs_a17025vlbU, hs_a17125vlbY];
    this.hs_zdfNumCUIntMax.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCUIntMax, $hs.modules.ForeignziCziTypes.hs_zdfShowCUIntMax, hs_a15825vlb8, hs_a15925vlbc, hs_a16025vlbg, hs_a16125vlbk, hs_a16225vlbo, hs_a16325vlbs, hs_a16425vlbw];
    this.hs_zdfRealCUIntMax.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCUIntMax, $hs.modules.ForeignziCziTypes.hs_zdfOrdCUIntMax, hs_a14125vla2];
    this.hs_zdfIntegralCUIntMax.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealCUIntMax, $hs.modules.ForeignziCziTypes.hs_zdfEnumCUIntMax, hs_a13225vl9s, hs_a13325vl9w, hs_a13425vl9A, hs_a13525vl9E, hs_a13625vl9I, hs_a13725vl9M, hs_a13825vl9Q];
    this.hs_zdfBitsCUIntMax.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCUIntMax, hs_a11525vl8m, hs_a11625vl8q, hs_a11725vl8u, hs_a11825vl8y, hs_a11925vl8C, hs_a12025vl8G, hs_a12125vl8K, hs_a12225vl8O, hs_a12325vl8S, hs_a12425vl8W, hs_a12525vl90, hs_a12625vl94, hs_a12725vl98, hs_a12825vl9c, hs_a12925vl9g, hs_a13025vl9k, hs_a13125vl9o];
    hs_a17425vlca.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdczizazi125vlcc.evaluateOnce = function () {
        if (hs_a17425vlca.notEvaluated) {
            return hs_a17425vlca.hscall();
        } else {
            return hs_a17425vlca;
        }
    };
    hs_a17525vlce.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdczizbzi125vlcg.evaluateOnce = function () {
        if (hs_a17525vlce.notEvaluated) {
            return hs_a17525vlce.hscall();
        } else {
            return hs_a17525vlce;
        }
    };
    hs_a17625vlci.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcxor125vlck.evaluateOnce = function () {
        if (hs_a17625vlci.notEvaluated) {
            return hs_a17625vlci.hscall();
        } else {
            return hs_a17625vlci;
        }
    };
    hs_a17725vlcm.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdccomplement125vlco.evaluateOnce = function () {
        if (hs_a17725vlcm.notEvaluated) {
            return hs_a17725vlcm.hscall();
        } else {
            return hs_a17725vlcm;
        }
    };
    hs_a17825vlcq.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcshift125vlcs.evaluateOnce = function () {
        if (hs_a17825vlcq.notEvaluated) {
            return hs_a17825vlcq.hscall();
        } else {
            return hs_a17825vlcq;
        }
    };
    hs_a17925vlcu.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcrotate125vlcw.evaluateOnce = function () {
        if (hs_a17925vlcu.notEvaluated) {
            return hs_a17925vlcu.hscall();
        } else {
            return hs_a17925vlcu;
        }
    };
    hs_a18025vlcy.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcbit125vlcA.evaluateOnce = function () {
        if (hs_a18025vlcy.notEvaluated) {
            return hs_a18025vlcy.hscall();
        } else {
            return hs_a18025vlcy;
        }
    };
    hs_a18125vlcC.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcsetBit125vlcE.evaluateOnce = function () {
        if (hs_a18125vlcC.notEvaluated) {
            return hs_a18125vlcC.hscall();
        } else {
            return hs_a18125vlcC;
        }
    };
    hs_a18225vlcG.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcclearBit125vlcI.evaluateOnce = function () {
        if (hs_a18225vlcG.notEvaluated) {
            return hs_a18225vlcG.hscall();
        } else {
            return hs_a18225vlcG;
        }
    };
    hs_a18325vlcK.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdccomplementBit125vlcM.evaluateOnce = function () {
        if (hs_a18325vlcK.notEvaluated) {
            return hs_a18325vlcK.hscall();
        } else {
            return hs_a18325vlcK;
        }
    };
    hs_a18425vlcO.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdctestBit125vlcQ.evaluateOnce = function () {
        if (hs_a18425vlcO.notEvaluated) {
            return hs_a18425vlcO.hscall();
        } else {
            return hs_a18425vlcO;
        }
    };
    hs_a18525vlcS.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcbitSizze125vlcU.evaluateOnce = function () {
        if (hs_a18525vlcS.notEvaluated) {
            return hs_a18525vlcS.hscall();
        } else {
            return hs_a18525vlcS;
        }
    };
    hs_a18625vlcW.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcisSigned125vlcY.evaluateOnce = function () {
        if (hs_a18625vlcW.notEvaluated) {
            return hs_a18625vlcW.hscall();
        } else {
            return hs_a18625vlcW;
        }
    };
    hs_a18725vld0.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcshiftL125vld2.evaluateOnce = function () {
        if (hs_a18725vld0.notEvaluated) {
            return hs_a18725vld0.hscall();
        } else {
            return hs_a18725vld0;
        }
    };
    hs_a18825vld4.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcshiftR125vld6.evaluateOnce = function () {
        if (hs_a18825vld4.notEvaluated) {
            return hs_a18825vld4.hscall();
        } else {
            return hs_a18825vld4;
        }
    };
    hs_a18925vld8.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcrotateL125vlda.evaluateOnce = function () {
        if (hs_a18925vld8.notEvaluated) {
            return hs_a18925vld8.hscall();
        } else {
            return hs_a18925vld8;
        }
    };
    hs_a19025vldc.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcrotateR125vlde.evaluateOnce = function () {
        if (hs_a19025vldc.notEvaluated) {
            return hs_a19025vldc.hscall();
        } else {
            return hs_a19025vldc;
        }
    };
    hs_a19125vldg.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64);
    };
    hs_zdcquot125vldi.evaluateOnce = function () {
        if (hs_a19125vldg.notEvaluated) {
            return hs_a19125vldg.hscall();
        } else {
            return hs_a19125vldg;
        }
    };
    hs_a19225vldk.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64);
    };
    hs_zdcrem125vldm.evaluateOnce = function () {
        if (hs_a19225vldk.notEvaluated) {
            return hs_a19225vldk.hscall();
        } else {
            return hs_a19225vldk;
        }
    };
    hs_a19325vldo.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64);
    };
    hs_zdcdiv125vldq.evaluateOnce = function () {
        if (hs_a19325vldo.notEvaluated) {
            return hs_a19325vldo.hscall();
        } else {
            return hs_a19325vldo;
        }
    };
    hs_a19425vlds.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64);
    };
    hs_zdcmod125vldu.evaluateOnce = function () {
        if (hs_a19425vlds.notEvaluated) {
            return hs_a19425vlds.hscall();
        } else {
            return hs_a19425vlds;
        }
    };
    hs_a19525vldw.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64);
    };
    hs_zdcquotRem125vldy.evaluateOnce = function () {
        if (hs_a19525vldw.notEvaluated) {
            return hs_a19525vldw.hscall();
        } else {
            return hs_a19525vldw;
        }
    };
    hs_a19625vldA.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64);
    };
    hs_zdcdivMod125vldC.evaluateOnce = function () {
        if (hs_a19625vldA.notEvaluated) {
            return hs_a19625vldA.hscall();
        } else {
            return hs_a19625vldA;
        }
    };
    hs_a19725vldE.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64);
    };
    hs_zdctoInteger125vldG.evaluateOnce = function () {
        if (hs_a19725vldE.notEvaluated) {
            return hs_a19725vldE.hscall();
        } else {
            return hs_a19725vldE;
        }
    };
    hs_a19825vldI.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt64);
    };
    hs_zdcminBound125vldK.evaluateOnce = function () {
        if (hs_a19825vldI.notEvaluated) {
            return hs_a19825vldI.hscall();
        } else {
            return hs_a19825vldI;
        }
    };
    hs_a19925vldM.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt64);
    };
    hs_zdcmaxBound125vldO.evaluateOnce = function () {
        if (hs_a19925vldM.notEvaluated) {
            return hs_a19925vldM.hscall();
        } else {
            return hs_a19925vldM;
        }
    };
    this.hs_zdfBoundedCIntMax.data = [hs_a19825vldI, hs_a19925vldM];
    hs_a20025vldQ.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziInt.hs_zdfRealInt64);
    };
    hs_zdctoRational125vldS.evaluateOnce = function () {
        if (hs_a20025vldQ.notEvaluated) {
            return hs_a20025vldQ.hscall();
        } else {
            return hs_a20025vldQ;
        }
    };
    hs_a20125vldU.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcsizzeOf125vldW.evaluateOnce = function () {
        if (hs_a20125vldU.notEvaluated) {
            return hs_a20125vldU.hscall();
        } else {
            return hs_a20125vldU;
        }
    };
    hs_a20225vldY.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcalignment125vle0.evaluateOnce = function () {
        if (hs_a20225vldY.notEvaluated) {
            return hs_a20225vldY.hscall();
        } else {
            return hs_a20225vldY;
        }
    };
    hs_a20325vle2.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcpeekElemOff125vle4.evaluateOnce = function () {
        if (hs_a20325vle2.notEvaluated) {
            return hs_a20325vle2.hscall();
        } else {
            return hs_a20325vle2;
        }
    };
    hs_a20425vle6.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcpokeElemOff125vle8.evaluateOnce = function () {
        if (hs_a20425vle6.notEvaluated) {
            return hs_a20425vle6.hscall();
        } else {
            return hs_a20425vle6;
        }
    };
    hs_a20525vlea.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcpeekByteOff125vlec.evaluateOnce = function () {
        if (hs_a20525vlea.notEvaluated) {
            return hs_a20525vlea.hscall();
        } else {
            return hs_a20525vlea;
        }
    };
    hs_a20625vlee.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcpokeByteOff125vleg.evaluateOnce = function () {
        if (hs_a20625vlee.notEvaluated) {
            return hs_a20625vlee.hscall();
        } else {
            return hs_a20625vlee;
        }
    };
    hs_a20725vlei.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcpeek125vlek.evaluateOnce = function () {
        if (hs_a20725vlei.notEvaluated) {
            return hs_a20725vlei.hscall();
        } else {
            return hs_a20725vlei;
        }
    };
    hs_a20825vlem.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcpoke125vleo.evaluateOnce = function () {
        if (hs_a20825vlem.notEvaluated) {
            return hs_a20825vlem.hscall();
        } else {
            return hs_a20825vlem;
        }
    };
    this.hs_zdfStorableCIntMax.data = [hs_a20125vldU, hs_a20225vldY, hs_a20325vle2, hs_a20425vle6, hs_a20525vlea, hs_a20625vlee, hs_a20725vlei, hs_a20825vlem];
    hs_a20925vleq.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdcsucc125vles.evaluateOnce = function () {
        if (hs_a20925vleq.notEvaluated) {
            return hs_a20925vleq.hscall();
        } else {
            return hs_a20925vleq;
        }
    };
    hs_a21025vleu.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdcpred125vlew.evaluateOnce = function () {
        if (hs_a21025vleu.notEvaluated) {
            return hs_a21025vleu.hscall();
        } else {
            return hs_a21025vleu;
        }
    };
    hs_a21125vley.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdctoEnum125vleA.evaluateOnce = function () {
        if (hs_a21125vley.notEvaluated) {
            return hs_a21125vley.hscall();
        } else {
            return hs_a21125vley;
        }
    };
    hs_a21225vleC.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdcfromEnum125vleE.evaluateOnce = function () {
        if (hs_a21225vleC.notEvaluated) {
            return hs_a21225vleC.hscall();
        } else {
            return hs_a21225vleC;
        }
    };
    hs_a21325vleG.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdcenumFrom125vleI.evaluateOnce = function () {
        if (hs_a21325vleG.notEvaluated) {
            return hs_a21325vleG.hscall();
        } else {
            return hs_a21325vleG;
        }
    };
    hs_a21425vleK.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdcenumFromThen125vleM.evaluateOnce = function () {
        if (hs_a21425vleK.notEvaluated) {
            return hs_a21425vleK.hscall();
        } else {
            return hs_a21425vleK;
        }
    };
    hs_a21525vleO.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdcenumFromTo125vleQ.evaluateOnce = function () {
        if (hs_a21525vleO.notEvaluated) {
            return hs_a21525vleO.hscall();
        } else {
            return hs_a21525vleO;
        }
    };
    hs_a21625vleS.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdcenumFromThenTo125vleU.evaluateOnce = function () {
        if (hs_a21625vleS.notEvaluated) {
            return hs_a21625vleS.hscall();
        } else {
            return hs_a21625vleS;
        }
    };
    this.hs_zdfEnumCIntMax.data = [hs_a20925vleq, hs_a21025vleu, hs_a21125vley, hs_a21225vleC, hs_a21325vleG, hs_a21425vleK, hs_a21525vleO, hs_a21625vleS];
    hs_a21725vleW.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdczp125vleY.evaluateOnce = function () {
        if (hs_a21725vleW.notEvaluated) {
            return hs_a21725vleW.hscall();
        } else {
            return hs_a21725vleW;
        }
    };
    hs_a21825vlf0.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdczt125vlf2.evaluateOnce = function () {
        if (hs_a21825vlf0.notEvaluated) {
            return hs_a21825vlf0.hscall();
        } else {
            return hs_a21825vlf0;
        }
    };
    hs_a21925vlf4.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdczm125vlf6.evaluateOnce = function () {
        if (hs_a21925vlf4.notEvaluated) {
            return hs_a21925vlf4.hscall();
        } else {
            return hs_a21925vlf4;
        }
    };
    hs_a22025vlf8.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdcnegate125vlfa.evaluateOnce = function () {
        if (hs_a22025vlf8.notEvaluated) {
            return hs_a22025vlf8.hscall();
        } else {
            return hs_a22025vlf8;
        }
    };
    hs_a22125vlfc.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdcabs125vlfe.evaluateOnce = function () {
        if (hs_a22125vlfc.notEvaluated) {
            return hs_a22125vlfc.hscall();
        } else {
            return hs_a22125vlfc;
        }
    };
    hs_a22225vlfg.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdcsignum125vlfi.evaluateOnce = function () {
        if (hs_a22225vlfg.notEvaluated) {
            return hs_a22225vlfg.hscall();
        } else {
            return hs_a22225vlfg;
        }
    };
    hs_a22325vlfk.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdcfromInteger125vlfm.evaluateOnce = function () {
        if (hs_a22325vlfk.notEvaluated) {
            return hs_a22325vlfk.hscall();
        } else {
            return hs_a22325vlfk;
        }
    };
    hs_a22425vlfo.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdccompare125vlfq.evaluateOnce = function () {
        if (hs_a22425vlfo.notEvaluated) {
            return hs_a22425vlfo.hscall();
        } else {
            return hs_a22425vlfo;
        }
    };
    hs_a22525vlfs.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdczl125vlfu.evaluateOnce = function () {
        if (hs_a22525vlfs.notEvaluated) {
            return hs_a22525vlfs.hscall();
        } else {
            return hs_a22525vlfs;
        }
    };
    hs_a22625vlfw.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdczgze125vlfy.evaluateOnce = function () {
        if (hs_a22625vlfw.notEvaluated) {
            return hs_a22625vlfw.hscall();
        } else {
            return hs_a22625vlfw;
        }
    };
    hs_a22725vlfA.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdczg125vlfC.evaluateOnce = function () {
        if (hs_a22725vlfA.notEvaluated) {
            return hs_a22725vlfA.hscall();
        } else {
            return hs_a22725vlfA;
        }
    };
    hs_a22825vlfE.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdczlze125vlfG.evaluateOnce = function () {
        if (hs_a22825vlfE.notEvaluated) {
            return hs_a22825vlfE.hscall();
        } else {
            return hs_a22825vlfE;
        }
    };
    hs_a22925vlfI.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdcmax125vlfK.evaluateOnce = function () {
        if (hs_a22925vlfI.notEvaluated) {
            return hs_a22925vlfI.hscall();
        } else {
            return hs_a22925vlfI;
        }
    };
    hs_a23025vlfM.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdcmin125vlfO.evaluateOnce = function () {
        if (hs_a23025vlfM.notEvaluated) {
            return hs_a23025vlfM.hscall();
        } else {
            return hs_a23025vlfM;
        }
    };
    hs_a23125vlfQ.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt64);
    };
    hs_zdczeze125vlfS.evaluateOnce = function () {
        if (hs_a23125vlfQ.notEvaluated) {
            return hs_a23125vlfQ.hscall();
        } else {
            return hs_a23125vlfQ;
        }
    };
    hs_a23225vlfU.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt64);
    };
    hs_zdczsze125vlfW.evaluateOnce = function () {
        if (hs_a23225vlfU.notEvaluated) {
            return hs_a23225vlfU.hscall();
        } else {
            return hs_a23225vlfU;
        }
    };
    this.hs_zdfEqCIntMax.data = [hs_a23125vlfQ, hs_a23225vlfU];
    this.hs_zdfOrdCIntMax.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCIntMax, hs_a22425vlfo, hs_a22525vlfs, hs_a22625vlfw, hs_a22725vlfA, hs_a22825vlfE, hs_a22925vlfI, hs_a23025vlfM];
    this.hs_zdfNumCIntMax.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCIntMax, $hs.modules.ForeignziCziTypes.hs_zdfShowCIntMax, hs_a21725vleW, hs_a21825vlf0, hs_a21925vlf4, hs_a22025vlf8, hs_a22125vlfc, hs_a22225vlfg, hs_a22325vlfk];
    this.hs_zdfRealCIntMax.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCIntMax, $hs.modules.ForeignziCziTypes.hs_zdfOrdCIntMax, hs_a20025vldQ];
    this.hs_zdfIntegralCIntMax.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealCIntMax, $hs.modules.ForeignziCziTypes.hs_zdfEnumCIntMax, hs_a19125vldg, hs_a19225vldk, hs_a19325vldo, hs_a19425vlds, hs_a19525vldw, hs_a19625vldA, hs_a19725vldE];
    this.hs_zdfBitsCIntMax.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCIntMax, hs_a17425vlca, hs_a17525vlce, hs_a17625vlci, hs_a17725vlcm, hs_a17825vlcq, hs_a17925vlcu, hs_a18025vlcy, hs_a18125vlcC, hs_a18225vlcG, hs_a18325vlcK, hs_a18425vlcO, hs_a18525vlcS, hs_a18625vlcW, hs_a18725vld0, hs_a18825vld4, hs_a18925vld8, hs_a19025vldc];
    hs_a23325vlfY.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdczizazi225vlg0.evaluateOnce = function () {
        if (hs_a23325vlfY.notEvaluated) {
            return hs_a23325vlfY.hscall();
        } else {
            return hs_a23325vlfY;
        }
    };
    hs_a23425vlg2.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdczizbzi225vlg4.evaluateOnce = function () {
        if (hs_a23425vlg2.notEvaluated) {
            return hs_a23425vlg2.hscall();
        } else {
            return hs_a23425vlg2;
        }
    };
    hs_a23525vlg6.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcxor225vlg8.evaluateOnce = function () {
        if (hs_a23525vlg6.notEvaluated) {
            return hs_a23525vlg6.hscall();
        } else {
            return hs_a23525vlg6;
        }
    };
    hs_a23625vlga.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdccomplement225vlgc.evaluateOnce = function () {
        if (hs_a23625vlga.notEvaluated) {
            return hs_a23625vlga.hscall();
        } else {
            return hs_a23625vlga;
        }
    };
    hs_a23725vlge.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshift225vlgg.evaluateOnce = function () {
        if (hs_a23725vlge.notEvaluated) {
            return hs_a23725vlge.hscall();
        } else {
            return hs_a23725vlge;
        }
    };
    hs_a23825vlgi.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotate225vlgk.evaluateOnce = function () {
        if (hs_a23825vlgi.notEvaluated) {
            return hs_a23825vlgi.hscall();
        } else {
            return hs_a23825vlgi;
        }
    };
    hs_a23925vlgm.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcbit225vlgo.evaluateOnce = function () {
        if (hs_a23925vlgm.notEvaluated) {
            return hs_a23925vlgm.hscall();
        } else {
            return hs_a23925vlgm;
        }
    };
    hs_a24025vlgq.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcsetBit225vlgs.evaluateOnce = function () {
        if (hs_a24025vlgq.notEvaluated) {
            return hs_a24025vlgq.hscall();
        } else {
            return hs_a24025vlgq;
        }
    };
    hs_a24125vlgu.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcclearBit225vlgw.evaluateOnce = function () {
        if (hs_a24125vlgu.notEvaluated) {
            return hs_a24125vlgu.hscall();
        } else {
            return hs_a24125vlgu;
        }
    };
    hs_a24225vlgy.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdccomplementBit225vlgA.evaluateOnce = function () {
        if (hs_a24225vlgy.notEvaluated) {
            return hs_a24225vlgy.hscall();
        } else {
            return hs_a24225vlgy;
        }
    };
    hs_a24325vlgC.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdctestBit225vlgE.evaluateOnce = function () {
        if (hs_a24325vlgC.notEvaluated) {
            return hs_a24325vlgC.hscall();
        } else {
            return hs_a24325vlgC;
        }
    };
    hs_a24425vlgG.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcbitSizze225vlgI.evaluateOnce = function () {
        if (hs_a24425vlgG.notEvaluated) {
            return hs_a24425vlgG.hscall();
        } else {
            return hs_a24425vlgG;
        }
    };
    hs_a24525vlgK.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcisSigned225vlgM.evaluateOnce = function () {
        if (hs_a24525vlgK.notEvaluated) {
            return hs_a24525vlgK.hscall();
        } else {
            return hs_a24525vlgK;
        }
    };
    hs_a24625vlgO.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshiftL225vlgQ.evaluateOnce = function () {
        if (hs_a24625vlgO.notEvaluated) {
            return hs_a24625vlgO.hscall();
        } else {
            return hs_a24625vlgO;
        }
    };
    hs_a24725vlgS.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshiftR225vlgU.evaluateOnce = function () {
        if (hs_a24725vlgS.notEvaluated) {
            return hs_a24725vlgS.hscall();
        } else {
            return hs_a24725vlgS;
        }
    };
    hs_a24825vlgW.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotateL225vlgY.evaluateOnce = function () {
        if (hs_a24825vlgW.notEvaluated) {
            return hs_a24825vlgW.hscall();
        } else {
            return hs_a24825vlgW;
        }
    };
    hs_a24925vlh0.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotateR225vlh2.evaluateOnce = function () {
        if (hs_a24925vlh0.notEvaluated) {
            return hs_a24925vlh0.hscall();
        } else {
            return hs_a24925vlh0;
        }
    };
    hs_a25025vlh4.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcquot225vlh6.evaluateOnce = function () {
        if (hs_a25025vlh4.notEvaluated) {
            return hs_a25025vlh4.hscall();
        } else {
            return hs_a25025vlh4;
        }
    };
    hs_a25125vlh8.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcrem225vlha.evaluateOnce = function () {
        if (hs_a25125vlh8.notEvaluated) {
            return hs_a25125vlh8.hscall();
        } else {
            return hs_a25125vlh8;
        }
    };
    hs_a25225vlhc.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcdiv225vlhe.evaluateOnce = function () {
        if (hs_a25225vlhc.notEvaluated) {
            return hs_a25225vlhc.hscall();
        } else {
            return hs_a25225vlhc;
        }
    };
    hs_a25325vlhg.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcmod225vlhi.evaluateOnce = function () {
        if (hs_a25325vlhg.notEvaluated) {
            return hs_a25325vlhg.hscall();
        } else {
            return hs_a25325vlhg;
        }
    };
    hs_a25425vlhk.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcquotRem225vlhm.evaluateOnce = function () {
        if (hs_a25425vlhk.notEvaluated) {
            return hs_a25425vlhk.hscall();
        } else {
            return hs_a25425vlhk;
        }
    };
    hs_a25525vlho.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcdivMod225vlhq.evaluateOnce = function () {
        if (hs_a25525vlho.notEvaluated) {
            return hs_a25525vlho.hscall();
        } else {
            return hs_a25525vlho;
        }
    };
    hs_a25625vlhs.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdctoInteger225vlhu.evaluateOnce = function () {
        if (hs_a25625vlhs.notEvaluated) {
            return hs_a25625vlhs.hscall();
        } else {
            return hs_a25625vlhs;
        }
    };
    hs_a25725vlhw.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
    };
    hs_zdcminBound225vlhy.evaluateOnce = function () {
        if (hs_a25725vlhw.notEvaluated) {
            return hs_a25725vlhw.hscall();
        } else {
            return hs_a25725vlhw;
        }
    };
    hs_a25825vlhA.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
    };
    hs_zdcmaxBound225vlhC.evaluateOnce = function () {
        if (hs_a25825vlhA.notEvaluated) {
            return hs_a25825vlhA.hscall();
        } else {
            return hs_a25825vlhA;
        }
    };
    this.hs_zdfBoundedCUIntPtr.data = [hs_a25725vlhw, hs_a25825vlhA];
    hs_a25925vlhE.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziWord.hs_zdfRealWord32);
    };
    hs_zdctoRational225vlhG.evaluateOnce = function () {
        if (hs_a25925vlhE.notEvaluated) {
            return hs_a25925vlhE.hscall();
        } else {
            return hs_a25925vlhE;
        }
    };
    hs_a26025vlhI.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcsizzeOf225vlhK.evaluateOnce = function () {
        if (hs_a26025vlhI.notEvaluated) {
            return hs_a26025vlhI.hscall();
        } else {
            return hs_a26025vlhI;
        }
    };
    hs_a26125vlhM.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcalignment225vlhO.evaluateOnce = function () {
        if (hs_a26125vlhM.notEvaluated) {
            return hs_a26125vlhM.hscall();
        } else {
            return hs_a26125vlhM;
        }
    };
    hs_a26225vlhQ.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeekElemOff225vlhS.evaluateOnce = function () {
        if (hs_a26225vlhQ.notEvaluated) {
            return hs_a26225vlhQ.hscall();
        } else {
            return hs_a26225vlhQ;
        }
    };
    hs_a26325vlhU.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpokeElemOff225vlhW.evaluateOnce = function () {
        if (hs_a26325vlhU.notEvaluated) {
            return hs_a26325vlhU.hscall();
        } else {
            return hs_a26325vlhU;
        }
    };
    hs_a26425vlhY.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeekByteOff225vli0.evaluateOnce = function () {
        if (hs_a26425vlhY.notEvaluated) {
            return hs_a26425vlhY.hscall();
        } else {
            return hs_a26425vlhY;
        }
    };
    hs_a26525vli2.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpokeByteOff225vli4.evaluateOnce = function () {
        if (hs_a26525vli2.notEvaluated) {
            return hs_a26525vli2.hscall();
        } else {
            return hs_a26525vli2;
        }
    };
    hs_a26625vli6.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeek225vli8.evaluateOnce = function () {
        if (hs_a26625vli6.notEvaluated) {
            return hs_a26625vli6.hscall();
        } else {
            return hs_a26625vli6;
        }
    };
    hs_a26725vlia.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpoke225vlic.evaluateOnce = function () {
        if (hs_a26725vlia.notEvaluated) {
            return hs_a26725vlia.hscall();
        } else {
            return hs_a26725vlia;
        }
    };
    this.hs_zdfStorableCUIntPtr.data = [hs_a26025vlhI, hs_a26125vlhM, hs_a26225vlhQ, hs_a26325vlhU, hs_a26425vlhY, hs_a26525vli2, hs_a26625vli6, hs_a26725vlia];
    hs_a26825vlie.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcsucc225vlig.evaluateOnce = function () {
        if (hs_a26825vlie.notEvaluated) {
            return hs_a26825vlie.hscall();
        } else {
            return hs_a26825vlie;
        }
    };
    hs_a26925vlii.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcpred225vlik.evaluateOnce = function () {
        if (hs_a26925vlii.notEvaluated) {
            return hs_a26925vlii.hscall();
        } else {
            return hs_a26925vlii;
        }
    };
    hs_a27025vlim.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdctoEnum225vlio.evaluateOnce = function () {
        if (hs_a27025vlim.notEvaluated) {
            return hs_a27025vlim.hscall();
        } else {
            return hs_a27025vlim;
        }
    };
    hs_a27125vliq.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcfromEnum225vlis.evaluateOnce = function () {
        if (hs_a27125vliq.notEvaluated) {
            return hs_a27125vliq.hscall();
        } else {
            return hs_a27125vliq;
        }
    };
    hs_a27225vliu.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFrom225vliw.evaluateOnce = function () {
        if (hs_a27225vliu.notEvaluated) {
            return hs_a27225vliu.hscall();
        } else {
            return hs_a27225vliu;
        }
    };
    hs_a27325vliy.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromThen225vliA.evaluateOnce = function () {
        if (hs_a27325vliy.notEvaluated) {
            return hs_a27325vliy.hscall();
        } else {
            return hs_a27325vliy;
        }
    };
    hs_a27425vliC.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromTo225vliE.evaluateOnce = function () {
        if (hs_a27425vliC.notEvaluated) {
            return hs_a27425vliC.hscall();
        } else {
            return hs_a27425vliC;
        }
    };
    hs_a27525vliG.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromThenTo225vliI.evaluateOnce = function () {
        if (hs_a27525vliG.notEvaluated) {
            return hs_a27525vliG.hscall();
        } else {
            return hs_a27525vliG;
        }
    };
    this.hs_zdfEnumCUIntPtr.data = [hs_a26825vlie, hs_a26925vlii, hs_a27025vlim, hs_a27125vliq, hs_a27225vliu, hs_a27325vliy, hs_a27425vliC, hs_a27525vliG];
    hs_a27625vliK.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczp225vliM.evaluateOnce = function () {
        if (hs_a27625vliK.notEvaluated) {
            return hs_a27625vliK.hscall();
        } else {
            return hs_a27625vliK;
        }
    };
    hs_a27725vliO.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczt225vliQ.evaluateOnce = function () {
        if (hs_a27725vliO.notEvaluated) {
            return hs_a27725vliO.hscall();
        } else {
            return hs_a27725vliO;
        }
    };
    hs_a27825vliS.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczm225vliU.evaluateOnce = function () {
        if (hs_a27825vliS.notEvaluated) {
            return hs_a27825vliS.hscall();
        } else {
            return hs_a27825vliS;
        }
    };
    hs_a27925vliW.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcnegate225vliY.evaluateOnce = function () {
        if (hs_a27925vliW.notEvaluated) {
            return hs_a27925vliW.hscall();
        } else {
            return hs_a27925vliW;
        }
    };
    hs_a28025vlj0.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcabs225vlj2.evaluateOnce = function () {
        if (hs_a28025vlj0.notEvaluated) {
            return hs_a28025vlj0.hscall();
        } else {
            return hs_a28025vlj0;
        }
    };
    hs_a28125vlj4.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcsignum225vlj6.evaluateOnce = function () {
        if (hs_a28125vlj4.notEvaluated) {
            return hs_a28125vlj4.hscall();
        } else {
            return hs_a28125vlj4;
        }
    };
    hs_a28225vlj8.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcfromInteger225vlja.evaluateOnce = function () {
        if (hs_a28225vlj8.notEvaluated) {
            return hs_a28225vlj8.hscall();
        } else {
            return hs_a28225vlj8;
        }
    };
    hs_a28325vljc.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdccompare225vlje.evaluateOnce = function () {
        if (hs_a28325vljc.notEvaluated) {
            return hs_a28325vljc.hscall();
        } else {
            return hs_a28325vljc;
        }
    };
    hs_a28425vljg.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczl225vlji.evaluateOnce = function () {
        if (hs_a28425vljg.notEvaluated) {
            return hs_a28425vljg.hscall();
        } else {
            return hs_a28425vljg;
        }
    };
    hs_a28525vljk.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczgze225vljm.evaluateOnce = function () {
        if (hs_a28525vljk.notEvaluated) {
            return hs_a28525vljk.hscall();
        } else {
            return hs_a28525vljk;
        }
    };
    hs_a28625vljo.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczg225vljq.evaluateOnce = function () {
        if (hs_a28625vljo.notEvaluated) {
            return hs_a28625vljo.hscall();
        } else {
            return hs_a28625vljo;
        }
    };
    hs_a28725vljs.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczlze225vlju.evaluateOnce = function () {
        if (hs_a28725vljs.notEvaluated) {
            return hs_a28725vljs.hscall();
        } else {
            return hs_a28725vljs;
        }
    };
    hs_a28825vljw.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcmax225vljy.evaluateOnce = function () {
        if (hs_a28825vljw.notEvaluated) {
            return hs_a28825vljw.hscall();
        } else {
            return hs_a28825vljw;
        }
    };
    hs_a28925vljA.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcmin225vljC.evaluateOnce = function () {
        if (hs_a28925vljA.notEvaluated) {
            return hs_a28925vljA.hscall();
        } else {
            return hs_a28925vljA;
        }
    };
    hs_a29025vljE.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczeze225vljG.evaluateOnce = function () {
        if (hs_a29025vljE.notEvaluated) {
            return hs_a29025vljE.hscall();
        } else {
            return hs_a29025vljE;
        }
    };
    hs_a29125vljI.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczsze225vljK.evaluateOnce = function () {
        if (hs_a29125vljI.notEvaluated) {
            return hs_a29125vljI.hscall();
        } else {
            return hs_a29125vljI;
        }
    };
    this.hs_zdfEqCUIntPtr.data = [hs_a29025vljE, hs_a29125vljI];
    this.hs_zdfOrdCUIntPtr.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCUIntPtr, hs_a28325vljc, hs_a28425vljg, hs_a28525vljk, hs_a28625vljo, hs_a28725vljs, hs_a28825vljw, hs_a28925vljA];
    this.hs_zdfNumCUIntPtr.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCUIntPtr, $hs.modules.ForeignziCziTypes.hs_zdfShowCUIntPtr, hs_a27625vliK, hs_a27725vliO, hs_a27825vliS, hs_a27925vliW, hs_a28025vlj0, hs_a28125vlj4, hs_a28225vlj8];
    this.hs_zdfRealCUIntPtr.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCUIntPtr, $hs.modules.ForeignziCziTypes.hs_zdfOrdCUIntPtr, hs_a25925vlhE];
    this.hs_zdfIntegralCUIntPtr.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealCUIntPtr, $hs.modules.ForeignziCziTypes.hs_zdfEnumCUIntPtr, hs_a25025vlh4, hs_a25125vlh8, hs_a25225vlhc, hs_a25325vlhg, hs_a25425vlhk, hs_a25525vlho, hs_a25625vlhs];
    this.hs_zdfBitsCUIntPtr.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCUIntPtr, hs_a23325vlfY, hs_a23425vlg2, hs_a23525vlg6, hs_a23625vlga, hs_a23725vlge, hs_a23825vlgi, hs_a23925vlgm, hs_a24025vlgq, hs_a24125vlgu, hs_a24225vlgy, hs_a24325vlgC, hs_a24425vlgG, hs_a24525vlgK, hs_a24625vlgO, hs_a24725vlgS, hs_a24825vlgW, hs_a24925vlh0];
    hs_a29225vljM.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdczizazi325vljO.evaluateOnce = function () {
        if (hs_a29225vljM.notEvaluated) {
            return hs_a29225vljM.hscall();
        } else {
            return hs_a29225vljM;
        }
    };
    hs_a29325vljQ.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdczizbzi325vljS.evaluateOnce = function () {
        if (hs_a29325vljQ.notEvaluated) {
            return hs_a29325vljQ.hscall();
        } else {
            return hs_a29325vljQ;
        }
    };
    hs_a29425vljU.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcxor325vljW.evaluateOnce = function () {
        if (hs_a29425vljU.notEvaluated) {
            return hs_a29425vljU.hscall();
        } else {
            return hs_a29425vljU;
        }
    };
    hs_a29525vljY.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdccomplement325vlk0.evaluateOnce = function () {
        if (hs_a29525vljY.notEvaluated) {
            return hs_a29525vljY.hscall();
        } else {
            return hs_a29525vljY;
        }
    };
    hs_a29625vlk2.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshift325vlk4.evaluateOnce = function () {
        if (hs_a29625vlk2.notEvaluated) {
            return hs_a29625vlk2.hscall();
        } else {
            return hs_a29625vlk2;
        }
    };
    hs_a29725vlk6.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotate325vlk8.evaluateOnce = function () {
        if (hs_a29725vlk6.notEvaluated) {
            return hs_a29725vlk6.hscall();
        } else {
            return hs_a29725vlk6;
        }
    };
    hs_a29825vlka.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcbit325vlkc.evaluateOnce = function () {
        if (hs_a29825vlka.notEvaluated) {
            return hs_a29825vlka.hscall();
        } else {
            return hs_a29825vlka;
        }
    };
    hs_a29925vlke.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcsetBit325vlkg.evaluateOnce = function () {
        if (hs_a29925vlke.notEvaluated) {
            return hs_a29925vlke.hscall();
        } else {
            return hs_a29925vlke;
        }
    };
    hs_a30025vlki.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcclearBit325vlkk.evaluateOnce = function () {
        if (hs_a30025vlki.notEvaluated) {
            return hs_a30025vlki.hscall();
        } else {
            return hs_a30025vlki;
        }
    };
    hs_a30125vlkm.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdccomplementBit325vlko.evaluateOnce = function () {
        if (hs_a30125vlkm.notEvaluated) {
            return hs_a30125vlkm.hscall();
        } else {
            return hs_a30125vlkm;
        }
    };
    hs_a30225vlkq.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdctestBit325vlks.evaluateOnce = function () {
        if (hs_a30225vlkq.notEvaluated) {
            return hs_a30225vlkq.hscall();
        } else {
            return hs_a30225vlkq;
        }
    };
    hs_a30325vlku.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcbitSizze325vlkw.evaluateOnce = function () {
        if (hs_a30325vlku.notEvaluated) {
            return hs_a30325vlku.hscall();
        } else {
            return hs_a30325vlku;
        }
    };
    hs_a30425vlky.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcisSigned325vlkA.evaluateOnce = function () {
        if (hs_a30425vlky.notEvaluated) {
            return hs_a30425vlky.hscall();
        } else {
            return hs_a30425vlky;
        }
    };
    hs_a30525vlkC.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshiftL325vlkE.evaluateOnce = function () {
        if (hs_a30525vlkC.notEvaluated) {
            return hs_a30525vlkC.hscall();
        } else {
            return hs_a30525vlkC;
        }
    };
    hs_a30625vlkG.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshiftR325vlkI.evaluateOnce = function () {
        if (hs_a30625vlkG.notEvaluated) {
            return hs_a30625vlkG.hscall();
        } else {
            return hs_a30625vlkG;
        }
    };
    hs_a30725vlkK.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotateL325vlkM.evaluateOnce = function () {
        if (hs_a30725vlkK.notEvaluated) {
            return hs_a30725vlkK.hscall();
        } else {
            return hs_a30725vlkK;
        }
    };
    hs_a30825vlkO.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotateR325vlkQ.evaluateOnce = function () {
        if (hs_a30825vlkO.notEvaluated) {
            return hs_a30825vlkO.hscall();
        } else {
            return hs_a30825vlkO;
        }
    };
    hs_a30925vlkS.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcquot325vlkU.evaluateOnce = function () {
        if (hs_a30925vlkS.notEvaluated) {
            return hs_a30925vlkS.hscall();
        } else {
            return hs_a30925vlkS;
        }
    };
    hs_a31025vlkW.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcrem325vlkY.evaluateOnce = function () {
        if (hs_a31025vlkW.notEvaluated) {
            return hs_a31025vlkW.hscall();
        } else {
            return hs_a31025vlkW;
        }
    };
    hs_a31125vll0.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcdiv325vll2.evaluateOnce = function () {
        if (hs_a31125vll0.notEvaluated) {
            return hs_a31125vll0.hscall();
        } else {
            return hs_a31125vll0;
        }
    };
    hs_a31225vll4.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcmod325vll6.evaluateOnce = function () {
        if (hs_a31225vll4.notEvaluated) {
            return hs_a31225vll4.hscall();
        } else {
            return hs_a31225vll4;
        }
    };
    hs_a31325vll8.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcquotRem325vlla.evaluateOnce = function () {
        if (hs_a31325vll8.notEvaluated) {
            return hs_a31325vll8.hscall();
        } else {
            return hs_a31325vll8;
        }
    };
    hs_a31425vllc.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcdivMod325vlle.evaluateOnce = function () {
        if (hs_a31425vllc.notEvaluated) {
            return hs_a31425vllc.hscall();
        } else {
            return hs_a31425vllc;
        }
    };
    hs_a31525vllg.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdctoInteger325vlli.evaluateOnce = function () {
        if (hs_a31525vllg.notEvaluated) {
            return hs_a31525vllg.hscall();
        } else {
            return hs_a31525vllg;
        }
    };
    hs_a31625vllk.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt32);
    };
    hs_zdcminBound325vllm.evaluateOnce = function () {
        if (hs_a31625vllk.notEvaluated) {
            return hs_a31625vllk.hscall();
        } else {
            return hs_a31625vllk;
        }
    };
    hs_a31725vllo.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt32);
    };
    hs_zdcmaxBound325vllq.evaluateOnce = function () {
        if (hs_a31725vllo.notEvaluated) {
            return hs_a31725vllo.hscall();
        } else {
            return hs_a31725vllo;
        }
    };
    this.hs_zdfBoundedCIntPtr.data = [hs_a31625vllk, hs_a31725vllo];
    hs_a31825vlls.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziInt.hs_zdfRealInt32);
    };
    hs_zdctoRational325vllu.evaluateOnce = function () {
        if (hs_a31825vlls.notEvaluated) {
            return hs_a31825vlls.hscall();
        } else {
            return hs_a31825vlls;
        }
    };
    hs_a31925vllw.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcsizzeOf325vlly.evaluateOnce = function () {
        if (hs_a31925vllw.notEvaluated) {
            return hs_a31925vllw.hscall();
        } else {
            return hs_a31925vllw;
        }
    };
    hs_a32025vllA.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcalignment325vllC.evaluateOnce = function () {
        if (hs_a32025vllA.notEvaluated) {
            return hs_a32025vllA.hscall();
        } else {
            return hs_a32025vllA;
        }
    };
    hs_a32125vllE.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeekElemOff325vllG.evaluateOnce = function () {
        if (hs_a32125vllE.notEvaluated) {
            return hs_a32125vllE.hscall();
        } else {
            return hs_a32125vllE;
        }
    };
    hs_a32225vllI.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpokeElemOff325vllK.evaluateOnce = function () {
        if (hs_a32225vllI.notEvaluated) {
            return hs_a32225vllI.hscall();
        } else {
            return hs_a32225vllI;
        }
    };
    hs_a32325vllM.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeekByteOff325vllO.evaluateOnce = function () {
        if (hs_a32325vllM.notEvaluated) {
            return hs_a32325vllM.hscall();
        } else {
            return hs_a32325vllM;
        }
    };
    hs_a32425vllQ.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpokeByteOff325vllS.evaluateOnce = function () {
        if (hs_a32425vllQ.notEvaluated) {
            return hs_a32425vllQ.hscall();
        } else {
            return hs_a32425vllQ;
        }
    };
    hs_a32525vllU.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeek325vllW.evaluateOnce = function () {
        if (hs_a32525vllU.notEvaluated) {
            return hs_a32525vllU.hscall();
        } else {
            return hs_a32525vllU;
        }
    };
    hs_a32625vllY.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpoke325vlm0.evaluateOnce = function () {
        if (hs_a32625vllY.notEvaluated) {
            return hs_a32625vllY.hscall();
        } else {
            return hs_a32625vllY;
        }
    };
    this.hs_zdfStorableCIntPtr.data = [hs_a31925vllw, hs_a32025vllA, hs_a32125vllE, hs_a32225vllI, hs_a32325vllM, hs_a32425vllQ, hs_a32525vllU, hs_a32625vllY];
    hs_a32725vlm2.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcsucc325vlm4.evaluateOnce = function () {
        if (hs_a32725vlm2.notEvaluated) {
            return hs_a32725vlm2.hscall();
        } else {
            return hs_a32725vlm2;
        }
    };
    hs_a32825vlm6.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcpred325vlm8.evaluateOnce = function () {
        if (hs_a32825vlm6.notEvaluated) {
            return hs_a32825vlm6.hscall();
        } else {
            return hs_a32825vlm6;
        }
    };
    hs_a32925vlma.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdctoEnum325vlmc.evaluateOnce = function () {
        if (hs_a32925vlma.notEvaluated) {
            return hs_a32925vlma.hscall();
        } else {
            return hs_a32925vlma;
        }
    };
    hs_a33025vlme.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcfromEnum325vlmg.evaluateOnce = function () {
        if (hs_a33025vlme.notEvaluated) {
            return hs_a33025vlme.hscall();
        } else {
            return hs_a33025vlme;
        }
    };
    hs_a33125vlmi.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFrom325vlmk.evaluateOnce = function () {
        if (hs_a33125vlmi.notEvaluated) {
            return hs_a33125vlmi.hscall();
        } else {
            return hs_a33125vlmi;
        }
    };
    hs_a33225vlmm.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromThen325vlmo.evaluateOnce = function () {
        if (hs_a33225vlmm.notEvaluated) {
            return hs_a33225vlmm.hscall();
        } else {
            return hs_a33225vlmm;
        }
    };
    hs_a33325vlmq.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromTo325vlms.evaluateOnce = function () {
        if (hs_a33325vlmq.notEvaluated) {
            return hs_a33325vlmq.hscall();
        } else {
            return hs_a33325vlmq;
        }
    };
    hs_a33425vlmu.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromThenTo325vlmw.evaluateOnce = function () {
        if (hs_a33425vlmu.notEvaluated) {
            return hs_a33425vlmu.hscall();
        } else {
            return hs_a33425vlmu;
        }
    };
    this.hs_zdfEnumCIntPtr.data = [hs_a32725vlm2, hs_a32825vlm6, hs_a32925vlma, hs_a33025vlme, hs_a33125vlmi, hs_a33225vlmm, hs_a33325vlmq, hs_a33425vlmu];
    hs_a33525vlmy.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczp325vlmA.evaluateOnce = function () {
        if (hs_a33525vlmy.notEvaluated) {
            return hs_a33525vlmy.hscall();
        } else {
            return hs_a33525vlmy;
        }
    };
    hs_a33625vlmC.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczt325vlmE.evaluateOnce = function () {
        if (hs_a33625vlmC.notEvaluated) {
            return hs_a33625vlmC.hscall();
        } else {
            return hs_a33625vlmC;
        }
    };
    hs_a33725vlmG.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczm325vlmI.evaluateOnce = function () {
        if (hs_a33725vlmG.notEvaluated) {
            return hs_a33725vlmG.hscall();
        } else {
            return hs_a33725vlmG;
        }
    };
    hs_a33825vlmK.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcnegate325vlmM.evaluateOnce = function () {
        if (hs_a33825vlmK.notEvaluated) {
            return hs_a33825vlmK.hscall();
        } else {
            return hs_a33825vlmK;
        }
    };
    hs_a33925vlmO.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcabs325vlmQ.evaluateOnce = function () {
        if (hs_a33925vlmO.notEvaluated) {
            return hs_a33925vlmO.hscall();
        } else {
            return hs_a33925vlmO;
        }
    };
    hs_a34025vlmS.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcsignum325vlmU.evaluateOnce = function () {
        if (hs_a34025vlmS.notEvaluated) {
            return hs_a34025vlmS.hscall();
        } else {
            return hs_a34025vlmS;
        }
    };
    hs_a34125vlmW.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcfromInteger325vlmY.evaluateOnce = function () {
        if (hs_a34125vlmW.notEvaluated) {
            return hs_a34125vlmW.hscall();
        } else {
            return hs_a34125vlmW;
        }
    };
    hs_a34225vln0.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdccompare325vln2.evaluateOnce = function () {
        if (hs_a34225vln0.notEvaluated) {
            return hs_a34225vln0.hscall();
        } else {
            return hs_a34225vln0;
        }
    };
    hs_a34325vln4.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczl325vln6.evaluateOnce = function () {
        if (hs_a34325vln4.notEvaluated) {
            return hs_a34325vln4.hscall();
        } else {
            return hs_a34325vln4;
        }
    };
    hs_a34425vln8.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczgze325vlna.evaluateOnce = function () {
        if (hs_a34425vln8.notEvaluated) {
            return hs_a34425vln8.hscall();
        } else {
            return hs_a34425vln8;
        }
    };
    hs_a34525vlnc.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczg325vlne.evaluateOnce = function () {
        if (hs_a34525vlnc.notEvaluated) {
            return hs_a34525vlnc.hscall();
        } else {
            return hs_a34525vlnc;
        }
    };
    hs_a34625vlng.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczlze325vlni.evaluateOnce = function () {
        if (hs_a34625vlng.notEvaluated) {
            return hs_a34625vlng.hscall();
        } else {
            return hs_a34625vlng;
        }
    };
    hs_a34725vlnk.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdcmax325vlnm.evaluateOnce = function () {
        if (hs_a34725vlnk.notEvaluated) {
            return hs_a34725vlnk.hscall();
        } else {
            return hs_a34725vlnk;
        }
    };
    hs_a34825vlno.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdcmin325vlnq.evaluateOnce = function () {
        if (hs_a34825vlno.notEvaluated) {
            return hs_a34825vlno.hscall();
        } else {
            return hs_a34825vlno;
        }
    };
    hs_a34925vlns.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32);
    };
    hs_zdczeze325vlnu.evaluateOnce = function () {
        if (hs_a34925vlns.notEvaluated) {
            return hs_a34925vlns.hscall();
        } else {
            return hs_a34925vlns;
        }
    };
    hs_a35025vlnw.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32);
    };
    hs_zdczsze325vlny.evaluateOnce = function () {
        if (hs_a35025vlnw.notEvaluated) {
            return hs_a35025vlnw.hscall();
        } else {
            return hs_a35025vlnw;
        }
    };
    this.hs_zdfEqCIntPtr.data = [hs_a34925vlns, hs_a35025vlnw];
    this.hs_zdfOrdCIntPtr.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCIntPtr, hs_a34225vln0, hs_a34325vln4, hs_a34425vln8, hs_a34525vlnc, hs_a34625vlng, hs_a34725vlnk, hs_a34825vlno];
    this.hs_zdfNumCIntPtr.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCIntPtr, $hs.modules.ForeignziCziTypes.hs_zdfShowCIntPtr, hs_a33525vlmy, hs_a33625vlmC, hs_a33725vlmG, hs_a33825vlmK, hs_a33925vlmO, hs_a34025vlmS, hs_a34125vlmW];
    this.hs_zdfRealCIntPtr.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCIntPtr, $hs.modules.ForeignziCziTypes.hs_zdfOrdCIntPtr, hs_a31825vlls];
    this.hs_zdfIntegralCIntPtr.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealCIntPtr, $hs.modules.ForeignziCziTypes.hs_zdfEnumCIntPtr, hs_a30925vlkS, hs_a31025vlkW, hs_a31125vll0, hs_a31225vll4, hs_a31325vll8, hs_a31425vllc, hs_a31525vllg];
    this.hs_zdfBitsCIntPtr.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCIntPtr, hs_a29225vljM, hs_a29325vljQ, hs_a29425vljU, hs_a29525vljY, hs_a29625vlk2, hs_a29725vlk6, hs_a29825vlka, hs_a29925vlke, hs_a30025vlki, hs_a30125vlkm, hs_a30225vlkq, hs_a30325vlku, hs_a30425vlky, hs_a30525vlkC, hs_a30625vlkG, hs_a30725vlkK, hs_a30825vlkO];
    hs_a35125vlnA.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziInt.hs_zdfRealInt32);
    };
    hs_zdctoRational425vlnC.evaluateOnce = function () {
        if (hs_a35125vlnA.notEvaluated) {
            return hs_a35125vlnA.hscall();
        } else {
            return hs_a35125vlnA;
        }
    };
    hs_a35225vlnE.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcsizzeOf425vlnG.evaluateOnce = function () {
        if (hs_a35225vlnE.notEvaluated) {
            return hs_a35225vlnE.hscall();
        } else {
            return hs_a35225vlnE;
        }
    };
    hs_a35325vlnI.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcalignment425vlnK.evaluateOnce = function () {
        if (hs_a35325vlnI.notEvaluated) {
            return hs_a35325vlnI.hscall();
        } else {
            return hs_a35325vlnI;
        }
    };
    hs_a35425vlnM.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeekElemOff425vlnO.evaluateOnce = function () {
        if (hs_a35425vlnM.notEvaluated) {
            return hs_a35425vlnM.hscall();
        } else {
            return hs_a35425vlnM;
        }
    };
    hs_a35525vlnQ.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpokeElemOff425vlnS.evaluateOnce = function () {
        if (hs_a35525vlnQ.notEvaluated) {
            return hs_a35525vlnQ.hscall();
        } else {
            return hs_a35525vlnQ;
        }
    };
    hs_a35625vlnU.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeekByteOff425vlnW.evaluateOnce = function () {
        if (hs_a35625vlnU.notEvaluated) {
            return hs_a35625vlnU.hscall();
        } else {
            return hs_a35625vlnU;
        }
    };
    hs_a35725vlnY.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpokeByteOff425vlo0.evaluateOnce = function () {
        if (hs_a35725vlnY.notEvaluated) {
            return hs_a35725vlnY.hscall();
        } else {
            return hs_a35725vlnY;
        }
    };
    hs_a35825vlo2.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeek425vlo4.evaluateOnce = function () {
        if (hs_a35825vlo2.notEvaluated) {
            return hs_a35825vlo2.hscall();
        } else {
            return hs_a35825vlo2;
        }
    };
    hs_a35925vlo6.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpoke425vlo8.evaluateOnce = function () {
        if (hs_a35925vlo6.notEvaluated) {
            return hs_a35925vlo6.hscall();
        } else {
            return hs_a35925vlo6;
        }
    };
    this.hs_zdfStorableCTime.data = [hs_a35225vlnE, hs_a35325vlnI, hs_a35425vlnM, hs_a35525vlnQ, hs_a35625vlnU, hs_a35725vlnY, hs_a35825vlo2, hs_a35925vlo6];
    hs_a36025vloa.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcsucc425vloc.evaluateOnce = function () {
        if (hs_a36025vloa.notEvaluated) {
            return hs_a36025vloa.hscall();
        } else {
            return hs_a36025vloa;
        }
    };
    hs_a36125vloe.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcpred425vlog.evaluateOnce = function () {
        if (hs_a36125vloe.notEvaluated) {
            return hs_a36125vloe.hscall();
        } else {
            return hs_a36125vloe;
        }
    };
    hs_a36225vloi.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdctoEnum425vlok.evaluateOnce = function () {
        if (hs_a36225vloi.notEvaluated) {
            return hs_a36225vloi.hscall();
        } else {
            return hs_a36225vloi;
        }
    };
    hs_a36325vlom.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcfromEnum425vloo.evaluateOnce = function () {
        if (hs_a36325vlom.notEvaluated) {
            return hs_a36325vlom.hscall();
        } else {
            return hs_a36325vlom;
        }
    };
    hs_a36425vloq.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFrom425vlos.evaluateOnce = function () {
        if (hs_a36425vloq.notEvaluated) {
            return hs_a36425vloq.hscall();
        } else {
            return hs_a36425vloq;
        }
    };
    hs_a36525vlou.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromThen425vlow.evaluateOnce = function () {
        if (hs_a36525vlou.notEvaluated) {
            return hs_a36525vlou.hscall();
        } else {
            return hs_a36525vlou;
        }
    };
    hs_a36625vloy.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromTo425vloA.evaluateOnce = function () {
        if (hs_a36625vloy.notEvaluated) {
            return hs_a36625vloy.hscall();
        } else {
            return hs_a36625vloy;
        }
    };
    hs_a36725vloC.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromThenTo425vloE.evaluateOnce = function () {
        if (hs_a36725vloC.notEvaluated) {
            return hs_a36725vloC.hscall();
        } else {
            return hs_a36725vloC;
        }
    };
    this.hs_zdfEnumCTime.data = [hs_a36025vloa, hs_a36125vloe, hs_a36225vloi, hs_a36325vlom, hs_a36425vloq, hs_a36525vlou, hs_a36625vloy, hs_a36725vloC];
    hs_a36825vloG.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczp425vloI.evaluateOnce = function () {
        if (hs_a36825vloG.notEvaluated) {
            return hs_a36825vloG.hscall();
        } else {
            return hs_a36825vloG;
        }
    };
    hs_a36925vloK.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczt425vloM.evaluateOnce = function () {
        if (hs_a36925vloK.notEvaluated) {
            return hs_a36925vloK.hscall();
        } else {
            return hs_a36925vloK;
        }
    };
    hs_a37025vloO.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczm425vloQ.evaluateOnce = function () {
        if (hs_a37025vloO.notEvaluated) {
            return hs_a37025vloO.hscall();
        } else {
            return hs_a37025vloO;
        }
    };
    hs_a37125vloS.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcnegate425vloU.evaluateOnce = function () {
        if (hs_a37125vloS.notEvaluated) {
            return hs_a37125vloS.hscall();
        } else {
            return hs_a37125vloS;
        }
    };
    hs_a37225vloW.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcabs425vloY.evaluateOnce = function () {
        if (hs_a37225vloW.notEvaluated) {
            return hs_a37225vloW.hscall();
        } else {
            return hs_a37225vloW;
        }
    };
    hs_a37325vlp0.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcsignum425vlp2.evaluateOnce = function () {
        if (hs_a37325vlp0.notEvaluated) {
            return hs_a37325vlp0.hscall();
        } else {
            return hs_a37325vlp0;
        }
    };
    hs_a37425vlp4.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcfromInteger425vlp6.evaluateOnce = function () {
        if (hs_a37425vlp4.notEvaluated) {
            return hs_a37425vlp4.hscall();
        } else {
            return hs_a37425vlp4;
        }
    };
    hs_a37525vlp8.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdccompare425vlpa.evaluateOnce = function () {
        if (hs_a37525vlp8.notEvaluated) {
            return hs_a37525vlp8.hscall();
        } else {
            return hs_a37525vlp8;
        }
    };
    hs_a37625vlpc.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczl425vlpe.evaluateOnce = function () {
        if (hs_a37625vlpc.notEvaluated) {
            return hs_a37625vlpc.hscall();
        } else {
            return hs_a37625vlpc;
        }
    };
    hs_a37725vlpg.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczgze425vlpi.evaluateOnce = function () {
        if (hs_a37725vlpg.notEvaluated) {
            return hs_a37725vlpg.hscall();
        } else {
            return hs_a37725vlpg;
        }
    };
    hs_a37825vlpk.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczg425vlpm.evaluateOnce = function () {
        if (hs_a37825vlpk.notEvaluated) {
            return hs_a37825vlpk.hscall();
        } else {
            return hs_a37825vlpk;
        }
    };
    hs_a37925vlpo.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczlze425vlpq.evaluateOnce = function () {
        if (hs_a37925vlpo.notEvaluated) {
            return hs_a37925vlpo.hscall();
        } else {
            return hs_a37925vlpo;
        }
    };
    hs_a38025vlps.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdcmax425vlpu.evaluateOnce = function () {
        if (hs_a38025vlps.notEvaluated) {
            return hs_a38025vlps.hscall();
        } else {
            return hs_a38025vlps;
        }
    };
    hs_a38125vlpw.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdcmin425vlpy.evaluateOnce = function () {
        if (hs_a38125vlpw.notEvaluated) {
            return hs_a38125vlpw.hscall();
        } else {
            return hs_a38125vlpw;
        }
    };
    hs_a38225vlpA.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32);
    };
    hs_zdczeze425vlpC.evaluateOnce = function () {
        if (hs_a38225vlpA.notEvaluated) {
            return hs_a38225vlpA.hscall();
        } else {
            return hs_a38225vlpA;
        }
    };
    hs_a38325vlpE.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32);
    };
    hs_zdczsze425vlpG.evaluateOnce = function () {
        if (hs_a38325vlpE.notEvaluated) {
            return hs_a38325vlpE.hscall();
        } else {
            return hs_a38325vlpE;
        }
    };
    this.hs_zdfEqCTime.data = [hs_a38225vlpA, hs_a38325vlpE];
    this.hs_zdfOrdCTime.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCTime, hs_a37525vlp8, hs_a37625vlpc, hs_a37725vlpg, hs_a37825vlpk, hs_a37925vlpo, hs_a38025vlps, hs_a38125vlpw];
    this.hs_zdfNumCTime.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCTime, $hs.modules.ForeignziCziTypes.hs_zdfShowCTime, hs_a36825vloG, hs_a36925vloK, hs_a37025vloO, hs_a37125vloS, hs_a37225vloW, hs_a37325vlp0, hs_a37425vlp4];
    this.hs_zdfRealCTime.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCTime, $hs.modules.ForeignziCziTypes.hs_zdfOrdCTime, hs_a35125vlnA];
    hs_a38425vlpI.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziInt.hs_zdfRealInt32);
    };
    hs_zdctoRational525vlpK.evaluateOnce = function () {
        if (hs_a38425vlpI.notEvaluated) {
            return hs_a38425vlpI.hscall();
        } else {
            return hs_a38425vlpI;
        }
    };
    hs_a38525vlpM.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcsizzeOf525vlpO.evaluateOnce = function () {
        if (hs_a38525vlpM.notEvaluated) {
            return hs_a38525vlpM.hscall();
        } else {
            return hs_a38525vlpM;
        }
    };
    hs_a38625vlpQ.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcalignment525vlpS.evaluateOnce = function () {
        if (hs_a38625vlpQ.notEvaluated) {
            return hs_a38625vlpQ.hscall();
        } else {
            return hs_a38625vlpQ;
        }
    };
    hs_a38725vlpU.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeekElemOff525vlpW.evaluateOnce = function () {
        if (hs_a38725vlpU.notEvaluated) {
            return hs_a38725vlpU.hscall();
        } else {
            return hs_a38725vlpU;
        }
    };
    hs_a38825vlpY.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpokeElemOff525vlq0.evaluateOnce = function () {
        if (hs_a38825vlpY.notEvaluated) {
            return hs_a38825vlpY.hscall();
        } else {
            return hs_a38825vlpY;
        }
    };
    hs_a38925vlq2.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeekByteOff525vlq4.evaluateOnce = function () {
        if (hs_a38925vlq2.notEvaluated) {
            return hs_a38925vlq2.hscall();
        } else {
            return hs_a38925vlq2;
        }
    };
    hs_a39025vlq6.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpokeByteOff525vlq8.evaluateOnce = function () {
        if (hs_a39025vlq6.notEvaluated) {
            return hs_a39025vlq6.hscall();
        } else {
            return hs_a39025vlq6;
        }
    };
    hs_a39125vlqa.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeek525vlqc.evaluateOnce = function () {
        if (hs_a39125vlqa.notEvaluated) {
            return hs_a39125vlqa.hscall();
        } else {
            return hs_a39125vlqa;
        }
    };
    hs_a39225vlqe.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpoke525vlqg.evaluateOnce = function () {
        if (hs_a39225vlqe.notEvaluated) {
            return hs_a39225vlqe.hscall();
        } else {
            return hs_a39225vlqe;
        }
    };
    this.hs_zdfStorableCClock.data = [hs_a38525vlpM, hs_a38625vlpQ, hs_a38725vlpU, hs_a38825vlpY, hs_a38925vlq2, hs_a39025vlq6, hs_a39125vlqa, hs_a39225vlqe];
    hs_a39325vlqi.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcsucc525vlqk.evaluateOnce = function () {
        if (hs_a39325vlqi.notEvaluated) {
            return hs_a39325vlqi.hscall();
        } else {
            return hs_a39325vlqi;
        }
    };
    hs_a39425vlqm.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcpred525vlqo.evaluateOnce = function () {
        if (hs_a39425vlqm.notEvaluated) {
            return hs_a39425vlqm.hscall();
        } else {
            return hs_a39425vlqm;
        }
    };
    hs_a39525vlqq.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdctoEnum525vlqs.evaluateOnce = function () {
        if (hs_a39525vlqq.notEvaluated) {
            return hs_a39525vlqq.hscall();
        } else {
            return hs_a39525vlqq;
        }
    };
    hs_a39625vlqu.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcfromEnum525vlqw.evaluateOnce = function () {
        if (hs_a39625vlqu.notEvaluated) {
            return hs_a39625vlqu.hscall();
        } else {
            return hs_a39625vlqu;
        }
    };
    hs_a39725vlqy.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFrom525vlqA.evaluateOnce = function () {
        if (hs_a39725vlqy.notEvaluated) {
            return hs_a39725vlqy.hscall();
        } else {
            return hs_a39725vlqy;
        }
    };
    hs_a39825vlqC.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromThen525vlqE.evaluateOnce = function () {
        if (hs_a39825vlqC.notEvaluated) {
            return hs_a39825vlqC.hscall();
        } else {
            return hs_a39825vlqC;
        }
    };
    hs_a39925vlqG.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromTo525vlqI.evaluateOnce = function () {
        if (hs_a39925vlqG.notEvaluated) {
            return hs_a39925vlqG.hscall();
        } else {
            return hs_a39925vlqG;
        }
    };
    hs_a40025vlqK.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromThenTo525vlqM.evaluateOnce = function () {
        if (hs_a40025vlqK.notEvaluated) {
            return hs_a40025vlqK.hscall();
        } else {
            return hs_a40025vlqK;
        }
    };
    this.hs_zdfEnumCClock.data = [hs_a39325vlqi, hs_a39425vlqm, hs_a39525vlqq, hs_a39625vlqu, hs_a39725vlqy, hs_a39825vlqC, hs_a39925vlqG, hs_a40025vlqK];
    hs_a40125vlqO.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczp525vlqQ.evaluateOnce = function () {
        if (hs_a40125vlqO.notEvaluated) {
            return hs_a40125vlqO.hscall();
        } else {
            return hs_a40125vlqO;
        }
    };
    hs_a40225vlqS.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczt525vlqU.evaluateOnce = function () {
        if (hs_a40225vlqS.notEvaluated) {
            return hs_a40225vlqS.hscall();
        } else {
            return hs_a40225vlqS;
        }
    };
    hs_a40325vlqW.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczm525vlqY.evaluateOnce = function () {
        if (hs_a40325vlqW.notEvaluated) {
            return hs_a40325vlqW.hscall();
        } else {
            return hs_a40325vlqW;
        }
    };
    hs_a40425vlr0.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcnegate525vlr2.evaluateOnce = function () {
        if (hs_a40425vlr0.notEvaluated) {
            return hs_a40425vlr0.hscall();
        } else {
            return hs_a40425vlr0;
        }
    };
    hs_a40525vlr4.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcabs525vlr6.evaluateOnce = function () {
        if (hs_a40525vlr4.notEvaluated) {
            return hs_a40525vlr4.hscall();
        } else {
            return hs_a40525vlr4;
        }
    };
    hs_a40625vlr8.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcsignum525vlra.evaluateOnce = function () {
        if (hs_a40625vlr8.notEvaluated) {
            return hs_a40625vlr8.hscall();
        } else {
            return hs_a40625vlr8;
        }
    };
    hs_a40725vlrc.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcfromInteger525vlre.evaluateOnce = function () {
        if (hs_a40725vlrc.notEvaluated) {
            return hs_a40725vlrc.hscall();
        } else {
            return hs_a40725vlrc;
        }
    };
    hs_a40825vlrg.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdccompare525vlri.evaluateOnce = function () {
        if (hs_a40825vlrg.notEvaluated) {
            return hs_a40825vlrg.hscall();
        } else {
            return hs_a40825vlrg;
        }
    };
    hs_a40925vlrk.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczl525vlrm.evaluateOnce = function () {
        if (hs_a40925vlrk.notEvaluated) {
            return hs_a40925vlrk.hscall();
        } else {
            return hs_a40925vlrk;
        }
    };
    hs_a41025vlro.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczgze525vlrq.evaluateOnce = function () {
        if (hs_a41025vlro.notEvaluated) {
            return hs_a41025vlro.hscall();
        } else {
            return hs_a41025vlro;
        }
    };
    hs_a41125vlrs.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczg525vlru.evaluateOnce = function () {
        if (hs_a41125vlrs.notEvaluated) {
            return hs_a41125vlrs.hscall();
        } else {
            return hs_a41125vlrs;
        }
    };
    hs_a41225vlrw.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczlze525vlry.evaluateOnce = function () {
        if (hs_a41225vlrw.notEvaluated) {
            return hs_a41225vlrw.hscall();
        } else {
            return hs_a41225vlrw;
        }
    };
    hs_a41325vlrA.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdcmax525vlrC.evaluateOnce = function () {
        if (hs_a41325vlrA.notEvaluated) {
            return hs_a41325vlrA.hscall();
        } else {
            return hs_a41325vlrA;
        }
    };
    hs_a41425vlrE.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdcmin525vlrG.evaluateOnce = function () {
        if (hs_a41425vlrE.notEvaluated) {
            return hs_a41425vlrE.hscall();
        } else {
            return hs_a41425vlrE;
        }
    };
    hs_a41525vlrI.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32);
    };
    hs_zdczeze525vlrK.evaluateOnce = function () {
        if (hs_a41525vlrI.notEvaluated) {
            return hs_a41525vlrI.hscall();
        } else {
            return hs_a41525vlrI;
        }
    };
    hs_a41625vlrM.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32);
    };
    hs_zdczsze525vlrO.evaluateOnce = function () {
        if (hs_a41625vlrM.notEvaluated) {
            return hs_a41625vlrM.hscall();
        } else {
            return hs_a41625vlrM;
        }
    };
    this.hs_zdfEqCClock.data = [hs_a41525vlrI, hs_a41625vlrM];
    this.hs_zdfOrdCClock.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCClock, hs_a40825vlrg, hs_a40925vlrk, hs_a41025vlro, hs_a41125vlrs, hs_a41225vlrw, hs_a41325vlrA, hs_a41425vlrE];
    this.hs_zdfNumCClock.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCClock, $hs.modules.ForeignziCziTypes.hs_zdfShowCClock, hs_a40125vlqO, hs_a40225vlqS, hs_a40325vlqW, hs_a40425vlr0, hs_a40525vlr4, hs_a40625vlr8, hs_a40725vlrc];
    this.hs_zdfRealCClock.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCClock, $hs.modules.ForeignziCziTypes.hs_zdfOrdCClock, hs_a38425vlpI];
    hs_a41725vlrQ.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdczizazi425vlrS.evaluateOnce = function () {
        if (hs_a41725vlrQ.notEvaluated) {
            return hs_a41725vlrQ.hscall();
        } else {
            return hs_a41725vlrQ;
        }
    };
    hs_a41825vlrU.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdczizbzi425vlrW.evaluateOnce = function () {
        if (hs_a41825vlrU.notEvaluated) {
            return hs_a41825vlrU.hscall();
        } else {
            return hs_a41825vlrU;
        }
    };
    hs_a41925vlrY.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcxor425vls0.evaluateOnce = function () {
        if (hs_a41925vlrY.notEvaluated) {
            return hs_a41925vlrY.hscall();
        } else {
            return hs_a41925vlrY;
        }
    };
    hs_a42025vls2.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdccomplement425vls4.evaluateOnce = function () {
        if (hs_a42025vls2.notEvaluated) {
            return hs_a42025vls2.hscall();
        } else {
            return hs_a42025vls2;
        }
    };
    hs_a42125vls6.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshift425vls8.evaluateOnce = function () {
        if (hs_a42125vls6.notEvaluated) {
            return hs_a42125vls6.hscall();
        } else {
            return hs_a42125vls6;
        }
    };
    hs_a42225vlsa.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotate425vlsc.evaluateOnce = function () {
        if (hs_a42225vlsa.notEvaluated) {
            return hs_a42225vlsa.hscall();
        } else {
            return hs_a42225vlsa;
        }
    };
    hs_a42325vlse.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcbit425vlsg.evaluateOnce = function () {
        if (hs_a42325vlse.notEvaluated) {
            return hs_a42325vlse.hscall();
        } else {
            return hs_a42325vlse;
        }
    };
    hs_a42425vlsi.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcsetBit425vlsk.evaluateOnce = function () {
        if (hs_a42425vlsi.notEvaluated) {
            return hs_a42425vlsi.hscall();
        } else {
            return hs_a42425vlsi;
        }
    };
    hs_a42525vlsm.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcclearBit425vlso.evaluateOnce = function () {
        if (hs_a42525vlsm.notEvaluated) {
            return hs_a42525vlsm.hscall();
        } else {
            return hs_a42525vlsm;
        }
    };
    hs_a42625vlsq.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdccomplementBit425vlss.evaluateOnce = function () {
        if (hs_a42625vlsq.notEvaluated) {
            return hs_a42625vlsq.hscall();
        } else {
            return hs_a42625vlsq;
        }
    };
    hs_a42725vlsu.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdctestBit425vlsw.evaluateOnce = function () {
        if (hs_a42725vlsu.notEvaluated) {
            return hs_a42725vlsu.hscall();
        } else {
            return hs_a42725vlsu;
        }
    };
    hs_a42825vlsy.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcbitSizze425vlsA.evaluateOnce = function () {
        if (hs_a42825vlsy.notEvaluated) {
            return hs_a42825vlsy.hscall();
        } else {
            return hs_a42825vlsy;
        }
    };
    hs_a42925vlsC.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcisSigned425vlsE.evaluateOnce = function () {
        if (hs_a42925vlsC.notEvaluated) {
            return hs_a42925vlsC.hscall();
        } else {
            return hs_a42925vlsC;
        }
    };
    hs_a43025vlsG.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshiftL425vlsI.evaluateOnce = function () {
        if (hs_a43025vlsG.notEvaluated) {
            return hs_a43025vlsG.hscall();
        } else {
            return hs_a43025vlsG;
        }
    };
    hs_a43125vlsK.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshiftR425vlsM.evaluateOnce = function () {
        if (hs_a43125vlsK.notEvaluated) {
            return hs_a43125vlsK.hscall();
        } else {
            return hs_a43125vlsK;
        }
    };
    hs_a43225vlsO.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotateL425vlsQ.evaluateOnce = function () {
        if (hs_a43225vlsO.notEvaluated) {
            return hs_a43225vlsO.hscall();
        } else {
            return hs_a43225vlsO;
        }
    };
    hs_a43325vlsS.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotateR425vlsU.evaluateOnce = function () {
        if (hs_a43325vlsS.notEvaluated) {
            return hs_a43325vlsS.hscall();
        } else {
            return hs_a43325vlsS;
        }
    };
    hs_a43425vlsW.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcquot425vlsY.evaluateOnce = function () {
        if (hs_a43425vlsW.notEvaluated) {
            return hs_a43425vlsW.hscall();
        } else {
            return hs_a43425vlsW;
        }
    };
    hs_a43525vlt0.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcrem425vlt2.evaluateOnce = function () {
        if (hs_a43525vlt0.notEvaluated) {
            return hs_a43525vlt0.hscall();
        } else {
            return hs_a43525vlt0;
        }
    };
    hs_a43625vlt4.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcdiv425vlt6.evaluateOnce = function () {
        if (hs_a43625vlt4.notEvaluated) {
            return hs_a43625vlt4.hscall();
        } else {
            return hs_a43625vlt4;
        }
    };
    hs_a43725vlt8.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcmod425vlta.evaluateOnce = function () {
        if (hs_a43725vlt8.notEvaluated) {
            return hs_a43725vlt8.hscall();
        } else {
            return hs_a43725vlt8;
        }
    };
    hs_a43825vltc.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcquotRem425vlte.evaluateOnce = function () {
        if (hs_a43825vltc.notEvaluated) {
            return hs_a43825vltc.hscall();
        } else {
            return hs_a43825vltc;
        }
    };
    hs_a43925vltg.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcdivMod425vlti.evaluateOnce = function () {
        if (hs_a43925vltg.notEvaluated) {
            return hs_a43925vltg.hscall();
        } else {
            return hs_a43925vltg;
        }
    };
    hs_a44025vltk.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdctoInteger425vltm.evaluateOnce = function () {
        if (hs_a44025vltk.notEvaluated) {
            return hs_a44025vltk.hscall();
        } else {
            return hs_a44025vltk;
        }
    };
    hs_a44125vlto.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt32);
    };
    hs_zdcminBound425vltq.evaluateOnce = function () {
        if (hs_a44125vlto.notEvaluated) {
            return hs_a44125vlto.hscall();
        } else {
            return hs_a44125vlto;
        }
    };
    hs_a44225vlts.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt32);
    };
    hs_zdcmaxBound425vltu.evaluateOnce = function () {
        if (hs_a44225vlts.notEvaluated) {
            return hs_a44225vlts.hscall();
        } else {
            return hs_a44225vlts;
        }
    };
    this.hs_zdfBoundedCSigAtomic.data = [hs_a44125vlto, hs_a44225vlts];
    hs_a44325vltw.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziInt.hs_zdfRealInt32);
    };
    hs_zdctoRational625vlty.evaluateOnce = function () {
        if (hs_a44325vltw.notEvaluated) {
            return hs_a44325vltw.hscall();
        } else {
            return hs_a44325vltw;
        }
    };
    hs_a44425vltA.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcsizzeOf625vltC.evaluateOnce = function () {
        if (hs_a44425vltA.notEvaluated) {
            return hs_a44425vltA.hscall();
        } else {
            return hs_a44425vltA;
        }
    };
    hs_a44525vltE.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcalignment625vltG.evaluateOnce = function () {
        if (hs_a44525vltE.notEvaluated) {
            return hs_a44525vltE.hscall();
        } else {
            return hs_a44525vltE;
        }
    };
    hs_a44625vltI.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeekElemOff625vltK.evaluateOnce = function () {
        if (hs_a44625vltI.notEvaluated) {
            return hs_a44625vltI.hscall();
        } else {
            return hs_a44625vltI;
        }
    };
    hs_a44725vltM.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpokeElemOff625vltO.evaluateOnce = function () {
        if (hs_a44725vltM.notEvaluated) {
            return hs_a44725vltM.hscall();
        } else {
            return hs_a44725vltM;
        }
    };
    hs_a44825vltQ.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeekByteOff625vltS.evaluateOnce = function () {
        if (hs_a44825vltQ.notEvaluated) {
            return hs_a44825vltQ.hscall();
        } else {
            return hs_a44825vltQ;
        }
    };
    hs_a44925vltU.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpokeByteOff625vltW.evaluateOnce = function () {
        if (hs_a44925vltU.notEvaluated) {
            return hs_a44925vltU.hscall();
        } else {
            return hs_a44925vltU;
        }
    };
    hs_a45025vltY.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeek625vlu0.evaluateOnce = function () {
        if (hs_a45025vltY.notEvaluated) {
            return hs_a45025vltY.hscall();
        } else {
            return hs_a45025vltY;
        }
    };
    hs_a45125vlu2.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpoke625vlu4.evaluateOnce = function () {
        if (hs_a45125vlu2.notEvaluated) {
            return hs_a45125vlu2.hscall();
        } else {
            return hs_a45125vlu2;
        }
    };
    this.hs_zdfStorableCSigAtomic.data = [hs_a44425vltA, hs_a44525vltE, hs_a44625vltI, hs_a44725vltM, hs_a44825vltQ, hs_a44925vltU, hs_a45025vltY, hs_a45125vlu2];
    hs_a45225vlu6.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcsucc625vlu8.evaluateOnce = function () {
        if (hs_a45225vlu6.notEvaluated) {
            return hs_a45225vlu6.hscall();
        } else {
            return hs_a45225vlu6;
        }
    };
    hs_a45325vlua.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcpred625vluc.evaluateOnce = function () {
        if (hs_a45325vlua.notEvaluated) {
            return hs_a45325vlua.hscall();
        } else {
            return hs_a45325vlua;
        }
    };
    hs_a45425vlue.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdctoEnum625vlug.evaluateOnce = function () {
        if (hs_a45425vlue.notEvaluated) {
            return hs_a45425vlue.hscall();
        } else {
            return hs_a45425vlue;
        }
    };
    hs_a45525vlui.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcfromEnum625vluk.evaluateOnce = function () {
        if (hs_a45525vlui.notEvaluated) {
            return hs_a45525vlui.hscall();
        } else {
            return hs_a45525vlui;
        }
    };
    hs_a45625vlum.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFrom625vluo.evaluateOnce = function () {
        if (hs_a45625vlum.notEvaluated) {
            return hs_a45625vlum.hscall();
        } else {
            return hs_a45625vlum;
        }
    };
    hs_a45725vluq.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromThen625vlus.evaluateOnce = function () {
        if (hs_a45725vluq.notEvaluated) {
            return hs_a45725vluq.hscall();
        } else {
            return hs_a45725vluq;
        }
    };
    hs_a45825vluu.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromTo625vluw.evaluateOnce = function () {
        if (hs_a45825vluu.notEvaluated) {
            return hs_a45825vluu.hscall();
        } else {
            return hs_a45825vluu;
        }
    };
    hs_a45925vluy.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromThenTo625vluA.evaluateOnce = function () {
        if (hs_a45925vluy.notEvaluated) {
            return hs_a45925vluy.hscall();
        } else {
            return hs_a45925vluy;
        }
    };
    this.hs_zdfEnumCSigAtomic.data = [hs_a45225vlu6, hs_a45325vlua, hs_a45425vlue, hs_a45525vlui, hs_a45625vlum, hs_a45725vluq, hs_a45825vluu, hs_a45925vluy];
    hs_a46025vluC.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczp625vluE.evaluateOnce = function () {
        if (hs_a46025vluC.notEvaluated) {
            return hs_a46025vluC.hscall();
        } else {
            return hs_a46025vluC;
        }
    };
    hs_a46125vluG.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczt625vluI.evaluateOnce = function () {
        if (hs_a46125vluG.notEvaluated) {
            return hs_a46125vluG.hscall();
        } else {
            return hs_a46125vluG;
        }
    };
    hs_a46225vluK.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczm625vluM.evaluateOnce = function () {
        if (hs_a46225vluK.notEvaluated) {
            return hs_a46225vluK.hscall();
        } else {
            return hs_a46225vluK;
        }
    };
    hs_a46325vluO.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcnegate625vluQ.evaluateOnce = function () {
        if (hs_a46325vluO.notEvaluated) {
            return hs_a46325vluO.hscall();
        } else {
            return hs_a46325vluO;
        }
    };
    hs_a46425vluS.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcabs625vluU.evaluateOnce = function () {
        if (hs_a46425vluS.notEvaluated) {
            return hs_a46425vluS.hscall();
        } else {
            return hs_a46425vluS;
        }
    };
    hs_a46525vluW.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcsignum625vluY.evaluateOnce = function () {
        if (hs_a46525vluW.notEvaluated) {
            return hs_a46525vluW.hscall();
        } else {
            return hs_a46525vluW;
        }
    };
    hs_a46625vlv0.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcfromInteger625vlv2.evaluateOnce = function () {
        if (hs_a46625vlv0.notEvaluated) {
            return hs_a46625vlv0.hscall();
        } else {
            return hs_a46625vlv0;
        }
    };
    hs_a46725vlv4.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdccompare625vlv6.evaluateOnce = function () {
        if (hs_a46725vlv4.notEvaluated) {
            return hs_a46725vlv4.hscall();
        } else {
            return hs_a46725vlv4;
        }
    };
    hs_a46825vlv8.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczl625vlva.evaluateOnce = function () {
        if (hs_a46825vlv8.notEvaluated) {
            return hs_a46825vlv8.hscall();
        } else {
            return hs_a46825vlv8;
        }
    };
    hs_a46925vlvc.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczgze625vlve.evaluateOnce = function () {
        if (hs_a46925vlvc.notEvaluated) {
            return hs_a46925vlvc.hscall();
        } else {
            return hs_a46925vlvc;
        }
    };
    hs_a47025vlvg.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczg625vlvi.evaluateOnce = function () {
        if (hs_a47025vlvg.notEvaluated) {
            return hs_a47025vlvg.hscall();
        } else {
            return hs_a47025vlvg;
        }
    };
    hs_a47125vlvk.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczlze625vlvm.evaluateOnce = function () {
        if (hs_a47125vlvk.notEvaluated) {
            return hs_a47125vlvk.hscall();
        } else {
            return hs_a47125vlvk;
        }
    };
    hs_a47225vlvo.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdcmax625vlvq.evaluateOnce = function () {
        if (hs_a47225vlvo.notEvaluated) {
            return hs_a47225vlvo.hscall();
        } else {
            return hs_a47225vlvo;
        }
    };
    hs_a47325vlvs.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdcmin625vlvu.evaluateOnce = function () {
        if (hs_a47325vlvs.notEvaluated) {
            return hs_a47325vlvs.hscall();
        } else {
            return hs_a47325vlvs;
        }
    };
    hs_a47425vlvw.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32);
    };
    hs_zdczeze625vlvy.evaluateOnce = function () {
        if (hs_a47425vlvw.notEvaluated) {
            return hs_a47425vlvw.hscall();
        } else {
            return hs_a47425vlvw;
        }
    };
    hs_a47525vlvA.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32);
    };
    hs_zdczsze625vlvC.evaluateOnce = function () {
        if (hs_a47525vlvA.notEvaluated) {
            return hs_a47525vlvA.hscall();
        } else {
            return hs_a47525vlvA;
        }
    };
    this.hs_zdfEqCSigAtomic.data = [hs_a47425vlvw, hs_a47525vlvA];
    this.hs_zdfOrdCSigAtomic.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCSigAtomic, hs_a46725vlv4, hs_a46825vlv8, hs_a46925vlvc, hs_a47025vlvg, hs_a47125vlvk, hs_a47225vlvo, hs_a47325vlvs];
    this.hs_zdfNumCSigAtomic.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCSigAtomic, $hs.modules.ForeignziCziTypes.hs_zdfShowCSigAtomic, hs_a46025vluC, hs_a46125vluG, hs_a46225vluK, hs_a46325vluO, hs_a46425vluS, hs_a46525vluW, hs_a46625vlv0];
    this.hs_zdfRealCSigAtomic.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCSigAtomic, $hs.modules.ForeignziCziTypes.hs_zdfOrdCSigAtomic, hs_a44325vltw];
    this.hs_zdfIntegralCSigAtomic.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealCSigAtomic, $hs.modules.ForeignziCziTypes.hs_zdfEnumCSigAtomic, hs_a43425vlsW, hs_a43525vlt0, hs_a43625vlt4, hs_a43725vlt8, hs_a43825vltc, hs_a43925vltg, hs_a44025vltk];
    this.hs_zdfBitsCSigAtomic.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCSigAtomic, hs_a41725vlrQ, hs_a41825vlrU, hs_a41925vlrY, hs_a42025vls2, hs_a42125vls6, hs_a42225vlsa, hs_a42325vlse, hs_a42425vlsi, hs_a42525vlsm, hs_a42625vlsq, hs_a42725vlsu, hs_a42825vlsy, hs_a42925vlsC, hs_a43025vlsG, hs_a43125vlsK, hs_a43225vlsO, hs_a43325vlsS];
    hs_a47625vlvE.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdczizazi525vlvG.evaluateOnce = function () {
        if (hs_a47625vlvE.notEvaluated) {
            return hs_a47625vlvE.hscall();
        } else {
            return hs_a47625vlvE;
        }
    };
    hs_a47725vlvI.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdczizbzi525vlvK.evaluateOnce = function () {
        if (hs_a47725vlvI.notEvaluated) {
            return hs_a47725vlvI.hscall();
        } else {
            return hs_a47725vlvI;
        }
    };
    hs_a47825vlvM.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcxor525vlvO.evaluateOnce = function () {
        if (hs_a47825vlvM.notEvaluated) {
            return hs_a47825vlvM.hscall();
        } else {
            return hs_a47825vlvM;
        }
    };
    hs_a47925vlvQ.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdccomplement525vlvS.evaluateOnce = function () {
        if (hs_a47925vlvQ.notEvaluated) {
            return hs_a47925vlvQ.hscall();
        } else {
            return hs_a47925vlvQ;
        }
    };
    hs_a48025vlvU.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshift525vlvW.evaluateOnce = function () {
        if (hs_a48025vlvU.notEvaluated) {
            return hs_a48025vlvU.hscall();
        } else {
            return hs_a48025vlvU;
        }
    };
    hs_a48125vlvY.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotate525vlw0.evaluateOnce = function () {
        if (hs_a48125vlvY.notEvaluated) {
            return hs_a48125vlvY.hscall();
        } else {
            return hs_a48125vlvY;
        }
    };
    hs_a48225vlw2.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcbit525vlw4.evaluateOnce = function () {
        if (hs_a48225vlw2.notEvaluated) {
            return hs_a48225vlw2.hscall();
        } else {
            return hs_a48225vlw2;
        }
    };
    hs_a48325vlw6.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcsetBit525vlw8.evaluateOnce = function () {
        if (hs_a48325vlw6.notEvaluated) {
            return hs_a48325vlw6.hscall();
        } else {
            return hs_a48325vlw6;
        }
    };
    hs_a48425vlwa.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcclearBit525vlwc.evaluateOnce = function () {
        if (hs_a48425vlwa.notEvaluated) {
            return hs_a48425vlwa.hscall();
        } else {
            return hs_a48425vlwa;
        }
    };
    hs_a48525vlwe.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdccomplementBit525vlwg.evaluateOnce = function () {
        if (hs_a48525vlwe.notEvaluated) {
            return hs_a48525vlwe.hscall();
        } else {
            return hs_a48525vlwe;
        }
    };
    hs_a48625vlwi.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdctestBit525vlwk.evaluateOnce = function () {
        if (hs_a48625vlwi.notEvaluated) {
            return hs_a48625vlwi.hscall();
        } else {
            return hs_a48625vlwi;
        }
    };
    hs_a48725vlwm.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcbitSizze525vlwo.evaluateOnce = function () {
        if (hs_a48725vlwm.notEvaluated) {
            return hs_a48725vlwm.hscall();
        } else {
            return hs_a48725vlwm;
        }
    };
    hs_a48825vlwq.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcisSigned525vlws.evaluateOnce = function () {
        if (hs_a48825vlwq.notEvaluated) {
            return hs_a48825vlwq.hscall();
        } else {
            return hs_a48825vlwq;
        }
    };
    hs_a48925vlwu.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshiftL525vlww.evaluateOnce = function () {
        if (hs_a48925vlwu.notEvaluated) {
            return hs_a48925vlwu.hscall();
        } else {
            return hs_a48925vlwu;
        }
    };
    hs_a49025vlwy.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshiftR525vlwA.evaluateOnce = function () {
        if (hs_a49025vlwy.notEvaluated) {
            return hs_a49025vlwy.hscall();
        } else {
            return hs_a49025vlwy;
        }
    };
    hs_a49125vlwC.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotateL525vlwE.evaluateOnce = function () {
        if (hs_a49125vlwC.notEvaluated) {
            return hs_a49125vlwC.hscall();
        } else {
            return hs_a49125vlwC;
        }
    };
    hs_a49225vlwG.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotateR525vlwI.evaluateOnce = function () {
        if (hs_a49225vlwG.notEvaluated) {
            return hs_a49225vlwG.hscall();
        } else {
            return hs_a49225vlwG;
        }
    };
    hs_a49325vlwK.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcquot525vlwM.evaluateOnce = function () {
        if (hs_a49325vlwK.notEvaluated) {
            return hs_a49325vlwK.hscall();
        } else {
            return hs_a49325vlwK;
        }
    };
    hs_a49425vlwO.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcrem525vlwQ.evaluateOnce = function () {
        if (hs_a49425vlwO.notEvaluated) {
            return hs_a49425vlwO.hscall();
        } else {
            return hs_a49425vlwO;
        }
    };
    hs_a49525vlwS.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcdiv525vlwU.evaluateOnce = function () {
        if (hs_a49525vlwS.notEvaluated) {
            return hs_a49525vlwS.hscall();
        } else {
            return hs_a49525vlwS;
        }
    };
    hs_a49625vlwW.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcmod525vlwY.evaluateOnce = function () {
        if (hs_a49625vlwW.notEvaluated) {
            return hs_a49625vlwW.hscall();
        } else {
            return hs_a49625vlwW;
        }
    };
    hs_a49725vlx0.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcquotRem525vlx2.evaluateOnce = function () {
        if (hs_a49725vlx0.notEvaluated) {
            return hs_a49725vlx0.hscall();
        } else {
            return hs_a49725vlx0;
        }
    };
    hs_a49825vlx4.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcdivMod525vlx6.evaluateOnce = function () {
        if (hs_a49825vlx4.notEvaluated) {
            return hs_a49825vlx4.hscall();
        } else {
            return hs_a49825vlx4;
        }
    };
    hs_a49925vlx8.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdctoInteger525vlxa.evaluateOnce = function () {
        if (hs_a49925vlx8.notEvaluated) {
            return hs_a49925vlx8.hscall();
        } else {
            return hs_a49925vlx8;
        }
    };
    hs_a50025vlxc.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt32);
    };
    hs_zdcminBound525vlxe.evaluateOnce = function () {
        if (hs_a50025vlxc.notEvaluated) {
            return hs_a50025vlxc.hscall();
        } else {
            return hs_a50025vlxc;
        }
    };
    hs_a50125vlxg.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt32);
    };
    hs_zdcmaxBound525vlxi.evaluateOnce = function () {
        if (hs_a50125vlxg.notEvaluated) {
            return hs_a50125vlxg.hscall();
        } else {
            return hs_a50125vlxg;
        }
    };
    this.hs_zdfBoundedCWchar.data = [hs_a50025vlxc, hs_a50125vlxg];
    hs_a50225vlxk.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziInt.hs_zdfRealInt32);
    };
    hs_zdctoRational725vlxm.evaluateOnce = function () {
        if (hs_a50225vlxk.notEvaluated) {
            return hs_a50225vlxk.hscall();
        } else {
            return hs_a50225vlxk;
        }
    };
    hs_a50325vlxo.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcsizzeOf725vlxq.evaluateOnce = function () {
        if (hs_a50325vlxo.notEvaluated) {
            return hs_a50325vlxo.hscall();
        } else {
            return hs_a50325vlxo;
        }
    };
    hs_a50425vlxs.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcalignment725vlxu.evaluateOnce = function () {
        if (hs_a50425vlxs.notEvaluated) {
            return hs_a50425vlxs.hscall();
        } else {
            return hs_a50425vlxs;
        }
    };
    hs_a50525vlxw.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeekElemOff725vlxy.evaluateOnce = function () {
        if (hs_a50525vlxw.notEvaluated) {
            return hs_a50525vlxw.hscall();
        } else {
            return hs_a50525vlxw;
        }
    };
    hs_a50625vlxA.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpokeElemOff725vlxC.evaluateOnce = function () {
        if (hs_a50625vlxA.notEvaluated) {
            return hs_a50625vlxA.hscall();
        } else {
            return hs_a50625vlxA;
        }
    };
    hs_a50725vlxE.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeekByteOff725vlxG.evaluateOnce = function () {
        if (hs_a50725vlxE.notEvaluated) {
            return hs_a50725vlxE.hscall();
        } else {
            return hs_a50725vlxE;
        }
    };
    hs_a50825vlxI.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpokeByteOff725vlxK.evaluateOnce = function () {
        if (hs_a50825vlxI.notEvaluated) {
            return hs_a50825vlxI.hscall();
        } else {
            return hs_a50825vlxI;
        }
    };
    hs_a50925vlxM.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeek725vlxO.evaluateOnce = function () {
        if (hs_a50925vlxM.notEvaluated) {
            return hs_a50925vlxM.hscall();
        } else {
            return hs_a50925vlxM;
        }
    };
    hs_a51025vlxQ.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpoke725vlxS.evaluateOnce = function () {
        if (hs_a51025vlxQ.notEvaluated) {
            return hs_a51025vlxQ.hscall();
        } else {
            return hs_a51025vlxQ;
        }
    };
    this.hs_zdfStorableCWchar.data = [hs_a50325vlxo, hs_a50425vlxs, hs_a50525vlxw, hs_a50625vlxA, hs_a50725vlxE, hs_a50825vlxI, hs_a50925vlxM, hs_a51025vlxQ];
    hs_a51125vlxU.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcsucc725vlxW.evaluateOnce = function () {
        if (hs_a51125vlxU.notEvaluated) {
            return hs_a51125vlxU.hscall();
        } else {
            return hs_a51125vlxU;
        }
    };
    hs_a51225vlxY.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcpred725vly0.evaluateOnce = function () {
        if (hs_a51225vlxY.notEvaluated) {
            return hs_a51225vlxY.hscall();
        } else {
            return hs_a51225vlxY;
        }
    };
    hs_a51325vly2.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdctoEnum725vly4.evaluateOnce = function () {
        if (hs_a51325vly2.notEvaluated) {
            return hs_a51325vly2.hscall();
        } else {
            return hs_a51325vly2;
        }
    };
    hs_a51425vly6.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcfromEnum725vly8.evaluateOnce = function () {
        if (hs_a51425vly6.notEvaluated) {
            return hs_a51425vly6.hscall();
        } else {
            return hs_a51425vly6;
        }
    };
    hs_a51525vlya.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFrom725vlyc.evaluateOnce = function () {
        if (hs_a51525vlya.notEvaluated) {
            return hs_a51525vlya.hscall();
        } else {
            return hs_a51525vlya;
        }
    };
    hs_a51625vlye.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromThen725vlyg.evaluateOnce = function () {
        if (hs_a51625vlye.notEvaluated) {
            return hs_a51625vlye.hscall();
        } else {
            return hs_a51625vlye;
        }
    };
    hs_a51725vlyi.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromTo725vlyk.evaluateOnce = function () {
        if (hs_a51725vlyi.notEvaluated) {
            return hs_a51725vlyi.hscall();
        } else {
            return hs_a51725vlyi;
        }
    };
    hs_a51825vlym.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromThenTo725vlyo.evaluateOnce = function () {
        if (hs_a51825vlym.notEvaluated) {
            return hs_a51825vlym.hscall();
        } else {
            return hs_a51825vlym;
        }
    };
    this.hs_zdfEnumCWchar.data = [hs_a51125vlxU, hs_a51225vlxY, hs_a51325vly2, hs_a51425vly6, hs_a51525vlya, hs_a51625vlye, hs_a51725vlyi, hs_a51825vlym];
    hs_a51925vlyq.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczp725vlys.evaluateOnce = function () {
        if (hs_a51925vlyq.notEvaluated) {
            return hs_a51925vlyq.hscall();
        } else {
            return hs_a51925vlyq;
        }
    };
    hs_a52025vlyu.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczt725vlyw.evaluateOnce = function () {
        if (hs_a52025vlyu.notEvaluated) {
            return hs_a52025vlyu.hscall();
        } else {
            return hs_a52025vlyu;
        }
    };
    hs_a52125vlyy.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczm725vlyA.evaluateOnce = function () {
        if (hs_a52125vlyy.notEvaluated) {
            return hs_a52125vlyy.hscall();
        } else {
            return hs_a52125vlyy;
        }
    };
    hs_a52225vlyC.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcnegate725vlyE.evaluateOnce = function () {
        if (hs_a52225vlyC.notEvaluated) {
            return hs_a52225vlyC.hscall();
        } else {
            return hs_a52225vlyC;
        }
    };
    hs_a52325vlyG.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcabs725vlyI.evaluateOnce = function () {
        if (hs_a52325vlyG.notEvaluated) {
            return hs_a52325vlyG.hscall();
        } else {
            return hs_a52325vlyG;
        }
    };
    hs_a52425vlyK.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcsignum725vlyM.evaluateOnce = function () {
        if (hs_a52425vlyK.notEvaluated) {
            return hs_a52425vlyK.hscall();
        } else {
            return hs_a52425vlyK;
        }
    };
    hs_a52525vlyO.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcfromInteger725vlyQ.evaluateOnce = function () {
        if (hs_a52525vlyO.notEvaluated) {
            return hs_a52525vlyO.hscall();
        } else {
            return hs_a52525vlyO;
        }
    };
    hs_a52625vlyS.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdccompare725vlyU.evaluateOnce = function () {
        if (hs_a52625vlyS.notEvaluated) {
            return hs_a52625vlyS.hscall();
        } else {
            return hs_a52625vlyS;
        }
    };
    hs_a52725vlyW.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczl725vlyY.evaluateOnce = function () {
        if (hs_a52725vlyW.notEvaluated) {
            return hs_a52725vlyW.hscall();
        } else {
            return hs_a52725vlyW;
        }
    };
    hs_a52825vlz0.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczgze725vlz2.evaluateOnce = function () {
        if (hs_a52825vlz0.notEvaluated) {
            return hs_a52825vlz0.hscall();
        } else {
            return hs_a52825vlz0;
        }
    };
    hs_a52925vlz4.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczg725vlz6.evaluateOnce = function () {
        if (hs_a52925vlz4.notEvaluated) {
            return hs_a52925vlz4.hscall();
        } else {
            return hs_a52925vlz4;
        }
    };
    hs_a53025vlz8.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczlze725vlza.evaluateOnce = function () {
        if (hs_a53025vlz8.notEvaluated) {
            return hs_a53025vlz8.hscall();
        } else {
            return hs_a53025vlz8;
        }
    };
    hs_a53125vlzc.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdcmax725vlze.evaluateOnce = function () {
        if (hs_a53125vlzc.notEvaluated) {
            return hs_a53125vlzc.hscall();
        } else {
            return hs_a53125vlzc;
        }
    };
    hs_a53225vlzg.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdcmin725vlzi.evaluateOnce = function () {
        if (hs_a53225vlzg.notEvaluated) {
            return hs_a53225vlzg.hscall();
        } else {
            return hs_a53225vlzg;
        }
    };
    hs_a53325vlzk.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32);
    };
    hs_zdczeze725vlzm.evaluateOnce = function () {
        if (hs_a53325vlzk.notEvaluated) {
            return hs_a53325vlzk.hscall();
        } else {
            return hs_a53325vlzk;
        }
    };
    hs_a53425vlzo.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32);
    };
    hs_zdczsze725vlzq.evaluateOnce = function () {
        if (hs_a53425vlzo.notEvaluated) {
            return hs_a53425vlzo.hscall();
        } else {
            return hs_a53425vlzo;
        }
    };
    this.hs_zdfEqCWchar.data = [hs_a53325vlzk, hs_a53425vlzo];
    this.hs_zdfOrdCWchar.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCWchar, hs_a52625vlyS, hs_a52725vlyW, hs_a52825vlz0, hs_a52925vlz4, hs_a53025vlz8, hs_a53125vlzc, hs_a53225vlzg];
    this.hs_zdfNumCWchar.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCWchar, $hs.modules.ForeignziCziTypes.hs_zdfShowCWchar, hs_a51925vlyq, hs_a52025vlyu, hs_a52125vlyy, hs_a52225vlyC, hs_a52325vlyG, hs_a52425vlyK, hs_a52525vlyO];
    this.hs_zdfRealCWchar.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCWchar, $hs.modules.ForeignziCziTypes.hs_zdfOrdCWchar, hs_a50225vlxk];
    this.hs_zdfIntegralCWchar.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealCWchar, $hs.modules.ForeignziCziTypes.hs_zdfEnumCWchar, hs_a49325vlwK, hs_a49425vlwO, hs_a49525vlwS, hs_a49625vlwW, hs_a49725vlx0, hs_a49825vlx4, hs_a49925vlx8];
    this.hs_zdfBitsCWchar.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCWchar, hs_a47625vlvE, hs_a47725vlvI, hs_a47825vlvM, hs_a47925vlvQ, hs_a48025vlvU, hs_a48125vlvY, hs_a48225vlw2, hs_a48325vlw6, hs_a48425vlwa, hs_a48525vlwe, hs_a48625vlwi, hs_a48725vlwm, hs_a48825vlwq, hs_a48925vlwu, hs_a49025vlwy, hs_a49125vlwC, hs_a49225vlwG];
    hs_a53525vlzs.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdczizazi625vlzu.evaluateOnce = function () {
        if (hs_a53525vlzs.notEvaluated) {
            return hs_a53525vlzs.hscall();
        } else {
            return hs_a53525vlzs;
        }
    };
    hs_a53625vlzw.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdczizbzi625vlzy.evaluateOnce = function () {
        if (hs_a53625vlzw.notEvaluated) {
            return hs_a53625vlzw.hscall();
        } else {
            return hs_a53625vlzw;
        }
    };
    hs_a53725vlzA.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcxor625vlzC.evaluateOnce = function () {
        if (hs_a53725vlzA.notEvaluated) {
            return hs_a53725vlzA.hscall();
        } else {
            return hs_a53725vlzA;
        }
    };
    hs_a53825vlzE.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdccomplement625vlzG.evaluateOnce = function () {
        if (hs_a53825vlzE.notEvaluated) {
            return hs_a53825vlzE.hscall();
        } else {
            return hs_a53825vlzE;
        }
    };
    hs_a53925vlzI.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshift625vlzK.evaluateOnce = function () {
        if (hs_a53925vlzI.notEvaluated) {
            return hs_a53925vlzI.hscall();
        } else {
            return hs_a53925vlzI;
        }
    };
    hs_a54025vlzM.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotate625vlzO.evaluateOnce = function () {
        if (hs_a54025vlzM.notEvaluated) {
            return hs_a54025vlzM.hscall();
        } else {
            return hs_a54025vlzM;
        }
    };
    hs_a54125vlzQ.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcbit625vlzS.evaluateOnce = function () {
        if (hs_a54125vlzQ.notEvaluated) {
            return hs_a54125vlzQ.hscall();
        } else {
            return hs_a54125vlzQ;
        }
    };
    hs_a54225vlzU.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcsetBit625vlzW.evaluateOnce = function () {
        if (hs_a54225vlzU.notEvaluated) {
            return hs_a54225vlzU.hscall();
        } else {
            return hs_a54225vlzU;
        }
    };
    hs_a54325vlzY.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcclearBit625vlA0.evaluateOnce = function () {
        if (hs_a54325vlzY.notEvaluated) {
            return hs_a54325vlzY.hscall();
        } else {
            return hs_a54325vlzY;
        }
    };
    hs_a54425vlA2.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdccomplementBit625vlA4.evaluateOnce = function () {
        if (hs_a54425vlA2.notEvaluated) {
            return hs_a54425vlA2.hscall();
        } else {
            return hs_a54425vlA2;
        }
    };
    hs_a54525vlA6.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdctestBit625vlA8.evaluateOnce = function () {
        if (hs_a54525vlA6.notEvaluated) {
            return hs_a54525vlA6.hscall();
        } else {
            return hs_a54525vlA6;
        }
    };
    hs_a54625vlAa.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcbitSizze625vlAc.evaluateOnce = function () {
        if (hs_a54625vlAa.notEvaluated) {
            return hs_a54625vlAa.hscall();
        } else {
            return hs_a54625vlAa;
        }
    };
    hs_a54725vlAe.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcisSigned625vlAg.evaluateOnce = function () {
        if (hs_a54725vlAe.notEvaluated) {
            return hs_a54725vlAe.hscall();
        } else {
            return hs_a54725vlAe;
        }
    };
    hs_a54825vlAi.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshiftL625vlAk.evaluateOnce = function () {
        if (hs_a54825vlAi.notEvaluated) {
            return hs_a54825vlAi.hscall();
        } else {
            return hs_a54825vlAi;
        }
    };
    hs_a54925vlAm.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshiftR625vlAo.evaluateOnce = function () {
        if (hs_a54925vlAm.notEvaluated) {
            return hs_a54925vlAm.hscall();
        } else {
            return hs_a54925vlAm;
        }
    };
    hs_a55025vlAq.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotateL625vlAs.evaluateOnce = function () {
        if (hs_a55025vlAq.notEvaluated) {
            return hs_a55025vlAq.hscall();
        } else {
            return hs_a55025vlAq;
        }
    };
    hs_a55125vlAu.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotateR625vlAw.evaluateOnce = function () {
        if (hs_a55125vlAu.notEvaluated) {
            return hs_a55125vlAu.hscall();
        } else {
            return hs_a55125vlAu;
        }
    };
    hs_a55225vlAy.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcquot625vlAA.evaluateOnce = function () {
        if (hs_a55225vlAy.notEvaluated) {
            return hs_a55225vlAy.hscall();
        } else {
            return hs_a55225vlAy;
        }
    };
    hs_a55325vlAC.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcrem625vlAE.evaluateOnce = function () {
        if (hs_a55325vlAC.notEvaluated) {
            return hs_a55325vlAC.hscall();
        } else {
            return hs_a55325vlAC;
        }
    };
    hs_a55425vlAG.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcdiv625vlAI.evaluateOnce = function () {
        if (hs_a55425vlAG.notEvaluated) {
            return hs_a55425vlAG.hscall();
        } else {
            return hs_a55425vlAG;
        }
    };
    hs_a55525vlAK.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcmod625vlAM.evaluateOnce = function () {
        if (hs_a55525vlAK.notEvaluated) {
            return hs_a55525vlAK.hscall();
        } else {
            return hs_a55525vlAK;
        }
    };
    hs_a55625vlAO.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcquotRem625vlAQ.evaluateOnce = function () {
        if (hs_a55625vlAO.notEvaluated) {
            return hs_a55625vlAO.hscall();
        } else {
            return hs_a55625vlAO;
        }
    };
    hs_a55725vlAS.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcdivMod625vlAU.evaluateOnce = function () {
        if (hs_a55725vlAS.notEvaluated) {
            return hs_a55725vlAS.hscall();
        } else {
            return hs_a55725vlAS;
        }
    };
    hs_a55825vlAW.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdctoInteger625vlAY.evaluateOnce = function () {
        if (hs_a55825vlAW.notEvaluated) {
            return hs_a55825vlAW.hscall();
        } else {
            return hs_a55825vlAW;
        }
    };
    hs_a55925vlB0.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
    };
    hs_zdcminBound625vlB2.evaluateOnce = function () {
        if (hs_a55925vlB0.notEvaluated) {
            return hs_a55925vlB0.hscall();
        } else {
            return hs_a55925vlB0;
        }
    };
    hs_a56025vlB4.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
    };
    hs_zdcmaxBound625vlB6.evaluateOnce = function () {
        if (hs_a56025vlB4.notEvaluated) {
            return hs_a56025vlB4.hscall();
        } else {
            return hs_a56025vlB4;
        }
    };
    this.hs_zdfBoundedCSizze.data = [hs_a55925vlB0, hs_a56025vlB4];
    hs_a56125vlB8.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziWord.hs_zdfRealWord32);
    };
    hs_zdctoRational825vlBa.evaluateOnce = function () {
        if (hs_a56125vlB8.notEvaluated) {
            return hs_a56125vlB8.hscall();
        } else {
            return hs_a56125vlB8;
        }
    };
    hs_a56225vlBc.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcsizzeOf825vlBe.evaluateOnce = function () {
        if (hs_a56225vlBc.notEvaluated) {
            return hs_a56225vlBc.hscall();
        } else {
            return hs_a56225vlBc;
        }
    };
    hs_a56325vlBg.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcalignment825vlBi.evaluateOnce = function () {
        if (hs_a56325vlBg.notEvaluated) {
            return hs_a56325vlBg.hscall();
        } else {
            return hs_a56325vlBg;
        }
    };
    hs_a56425vlBk.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeekElemOff825vlBm.evaluateOnce = function () {
        if (hs_a56425vlBk.notEvaluated) {
            return hs_a56425vlBk.hscall();
        } else {
            return hs_a56425vlBk;
        }
    };
    hs_a56525vlBo.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpokeElemOff825vlBq.evaluateOnce = function () {
        if (hs_a56525vlBo.notEvaluated) {
            return hs_a56525vlBo.hscall();
        } else {
            return hs_a56525vlBo;
        }
    };
    hs_a56625vlBs.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeekByteOff825vlBu.evaluateOnce = function () {
        if (hs_a56625vlBs.notEvaluated) {
            return hs_a56625vlBs.hscall();
        } else {
            return hs_a56625vlBs;
        }
    };
    hs_a56725vlBw.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpokeByteOff825vlBy.evaluateOnce = function () {
        if (hs_a56725vlBw.notEvaluated) {
            return hs_a56725vlBw.hscall();
        } else {
            return hs_a56725vlBw;
        }
    };
    hs_a56825vlBA.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeek825vlBC.evaluateOnce = function () {
        if (hs_a56825vlBA.notEvaluated) {
            return hs_a56825vlBA.hscall();
        } else {
            return hs_a56825vlBA;
        }
    };
    hs_a56925vlBE.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpoke825vlBG.evaluateOnce = function () {
        if (hs_a56925vlBE.notEvaluated) {
            return hs_a56925vlBE.hscall();
        } else {
            return hs_a56925vlBE;
        }
    };
    this.hs_zdfStorableCSizze.data = [hs_a56225vlBc, hs_a56325vlBg, hs_a56425vlBk, hs_a56525vlBo, hs_a56625vlBs, hs_a56725vlBw, hs_a56825vlBA, hs_a56925vlBE];
    hs_a57025vlBI.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcsucc825vlBK.evaluateOnce = function () {
        if (hs_a57025vlBI.notEvaluated) {
            return hs_a57025vlBI.hscall();
        } else {
            return hs_a57025vlBI;
        }
    };
    hs_a57125vlBM.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcpred825vlBO.evaluateOnce = function () {
        if (hs_a57125vlBM.notEvaluated) {
            return hs_a57125vlBM.hscall();
        } else {
            return hs_a57125vlBM;
        }
    };
    hs_a57225vlBQ.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdctoEnum825vlBS.evaluateOnce = function () {
        if (hs_a57225vlBQ.notEvaluated) {
            return hs_a57225vlBQ.hscall();
        } else {
            return hs_a57225vlBQ;
        }
    };
    hs_a57325vlBU.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcfromEnum825vlBW.evaluateOnce = function () {
        if (hs_a57325vlBU.notEvaluated) {
            return hs_a57325vlBU.hscall();
        } else {
            return hs_a57325vlBU;
        }
    };
    hs_a57425vlBY.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFrom825vlC0.evaluateOnce = function () {
        if (hs_a57425vlBY.notEvaluated) {
            return hs_a57425vlBY.hscall();
        } else {
            return hs_a57425vlBY;
        }
    };
    hs_a57525vlC2.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromThen825vlC4.evaluateOnce = function () {
        if (hs_a57525vlC2.notEvaluated) {
            return hs_a57525vlC2.hscall();
        } else {
            return hs_a57525vlC2;
        }
    };
    hs_a57625vlC6.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromTo825vlC8.evaluateOnce = function () {
        if (hs_a57625vlC6.notEvaluated) {
            return hs_a57625vlC6.hscall();
        } else {
            return hs_a57625vlC6;
        }
    };
    hs_a57725vlCa.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromThenTo825vlCc.evaluateOnce = function () {
        if (hs_a57725vlCa.notEvaluated) {
            return hs_a57725vlCa.hscall();
        } else {
            return hs_a57725vlCa;
        }
    };
    this.hs_zdfEnumCSizze.data = [hs_a57025vlBI, hs_a57125vlBM, hs_a57225vlBQ, hs_a57325vlBU, hs_a57425vlBY, hs_a57525vlC2, hs_a57625vlC6, hs_a57725vlCa];
    hs_a57825vlCe.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczp825vlCg.evaluateOnce = function () {
        if (hs_a57825vlCe.notEvaluated) {
            return hs_a57825vlCe.hscall();
        } else {
            return hs_a57825vlCe;
        }
    };
    hs_a57925vlCi.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczt825vlCk.evaluateOnce = function () {
        if (hs_a57925vlCi.notEvaluated) {
            return hs_a57925vlCi.hscall();
        } else {
            return hs_a57925vlCi;
        }
    };
    hs_a58025vlCm.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczm825vlCo.evaluateOnce = function () {
        if (hs_a58025vlCm.notEvaluated) {
            return hs_a58025vlCm.hscall();
        } else {
            return hs_a58025vlCm;
        }
    };
    hs_a58125vlCq.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcnegate825vlCs.evaluateOnce = function () {
        if (hs_a58125vlCq.notEvaluated) {
            return hs_a58125vlCq.hscall();
        } else {
            return hs_a58125vlCq;
        }
    };
    hs_a58225vlCu.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcabs825vlCw.evaluateOnce = function () {
        if (hs_a58225vlCu.notEvaluated) {
            return hs_a58225vlCu.hscall();
        } else {
            return hs_a58225vlCu;
        }
    };
    hs_a58325vlCy.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcsignum825vlCA.evaluateOnce = function () {
        if (hs_a58325vlCy.notEvaluated) {
            return hs_a58325vlCy.hscall();
        } else {
            return hs_a58325vlCy;
        }
    };
    hs_a58425vlCC.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcfromInteger825vlCE.evaluateOnce = function () {
        if (hs_a58425vlCC.notEvaluated) {
            return hs_a58425vlCC.hscall();
        } else {
            return hs_a58425vlCC;
        }
    };
    hs_a58525vlCG.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdccompare825vlCI.evaluateOnce = function () {
        if (hs_a58525vlCG.notEvaluated) {
            return hs_a58525vlCG.hscall();
        } else {
            return hs_a58525vlCG;
        }
    };
    hs_a58625vlCK.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczl825vlCM.evaluateOnce = function () {
        if (hs_a58625vlCK.notEvaluated) {
            return hs_a58625vlCK.hscall();
        } else {
            return hs_a58625vlCK;
        }
    };
    hs_a58725vlCO.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczgze825vlCQ.evaluateOnce = function () {
        if (hs_a58725vlCO.notEvaluated) {
            return hs_a58725vlCO.hscall();
        } else {
            return hs_a58725vlCO;
        }
    };
    hs_a58825vlCS.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczg825vlCU.evaluateOnce = function () {
        if (hs_a58825vlCS.notEvaluated) {
            return hs_a58825vlCS.hscall();
        } else {
            return hs_a58825vlCS;
        }
    };
    hs_a58925vlCW.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczlze825vlCY.evaluateOnce = function () {
        if (hs_a58925vlCW.notEvaluated) {
            return hs_a58925vlCW.hscall();
        } else {
            return hs_a58925vlCW;
        }
    };
    hs_a59025vlD0.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcmax825vlD2.evaluateOnce = function () {
        if (hs_a59025vlD0.notEvaluated) {
            return hs_a59025vlD0.hscall();
        } else {
            return hs_a59025vlD0;
        }
    };
    hs_a59125vlD4.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcmin825vlD6.evaluateOnce = function () {
        if (hs_a59125vlD4.notEvaluated) {
            return hs_a59125vlD4.hscall();
        } else {
            return hs_a59125vlD4;
        }
    };
    hs_a59225vlD8.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczeze825vlDa.evaluateOnce = function () {
        if (hs_a59225vlD8.notEvaluated) {
            return hs_a59225vlD8.hscall();
        } else {
            return hs_a59225vlD8;
        }
    };
    hs_a59325vlDc.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczsze825vlDe.evaluateOnce = function () {
        if (hs_a59325vlDc.notEvaluated) {
            return hs_a59325vlDc.hscall();
        } else {
            return hs_a59325vlDc;
        }
    };
    this.hs_zdfEqCSizze.data = [hs_a59225vlD8, hs_a59325vlDc];
    this.hs_zdfOrdCSizze.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCSizze, hs_a58525vlCG, hs_a58625vlCK, hs_a58725vlCO, hs_a58825vlCS, hs_a58925vlCW, hs_a59025vlD0, hs_a59125vlD4];
    this.hs_zdfNumCSizze.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCSizze, $hs.modules.ForeignziCziTypes.hs_zdfShowCSizze, hs_a57825vlCe, hs_a57925vlCi, hs_a58025vlCm, hs_a58125vlCq, hs_a58225vlCu, hs_a58325vlCy, hs_a58425vlCC];
    this.hs_zdfRealCSizze.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, $hs.modules.ForeignziCziTypes.hs_zdfOrdCSizze, hs_a56125vlB8];
    this.hs_zdfIntegralCSizze.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealCSizze, $hs.modules.ForeignziCziTypes.hs_zdfEnumCSizze, hs_a55225vlAy, hs_a55325vlAC, hs_a55425vlAG, hs_a55525vlAK, hs_a55625vlAO, hs_a55725vlAS, hs_a55825vlAW];
    this.hs_zdfBitsCSizze.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_a53525vlzs, hs_a53625vlzw, hs_a53725vlzA, hs_a53825vlzE, hs_a53925vlzI, hs_a54025vlzM, hs_a54125vlzQ, hs_a54225vlzU, hs_a54325vlzY, hs_a54425vlA2, hs_a54525vlA6, hs_a54625vlAa, hs_a54725vlAe, hs_a54825vlAi, hs_a54925vlAm, hs_a55025vlAq, hs_a55125vlAu];
    hs_a59425vlDg.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdczizazi725vlDi.evaluateOnce = function () {
        if (hs_a59425vlDg.notEvaluated) {
            return hs_a59425vlDg.hscall();
        } else {
            return hs_a59425vlDg;
        }
    };
    hs_a59525vlDk.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdczizbzi725vlDm.evaluateOnce = function () {
        if (hs_a59525vlDk.notEvaluated) {
            return hs_a59525vlDk.hscall();
        } else {
            return hs_a59525vlDk;
        }
    };
    hs_a59625vlDo.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcxor725vlDq.evaluateOnce = function () {
        if (hs_a59625vlDo.notEvaluated) {
            return hs_a59625vlDo.hscall();
        } else {
            return hs_a59625vlDo;
        }
    };
    hs_a59725vlDs.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdccomplement725vlDu.evaluateOnce = function () {
        if (hs_a59725vlDs.notEvaluated) {
            return hs_a59725vlDs.hscall();
        } else {
            return hs_a59725vlDs;
        }
    };
    hs_a59825vlDw.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshift725vlDy.evaluateOnce = function () {
        if (hs_a59825vlDw.notEvaluated) {
            return hs_a59825vlDw.hscall();
        } else {
            return hs_a59825vlDw;
        }
    };
    hs_a59925vlDA.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotate725vlDC.evaluateOnce = function () {
        if (hs_a59925vlDA.notEvaluated) {
            return hs_a59925vlDA.hscall();
        } else {
            return hs_a59925vlDA;
        }
    };
    hs_a60025vlDE.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcbit725vlDG.evaluateOnce = function () {
        if (hs_a60025vlDE.notEvaluated) {
            return hs_a60025vlDE.hscall();
        } else {
            return hs_a60025vlDE;
        }
    };
    hs_a60125vlDI.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcsetBit725vlDK.evaluateOnce = function () {
        if (hs_a60125vlDI.notEvaluated) {
            return hs_a60125vlDI.hscall();
        } else {
            return hs_a60125vlDI;
        }
    };
    hs_a60225vlDM.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcclearBit725vlDO.evaluateOnce = function () {
        if (hs_a60225vlDM.notEvaluated) {
            return hs_a60225vlDM.hscall();
        } else {
            return hs_a60225vlDM;
        }
    };
    hs_a60325vlDQ.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdccomplementBit725vlDS.evaluateOnce = function () {
        if (hs_a60325vlDQ.notEvaluated) {
            return hs_a60325vlDQ.hscall();
        } else {
            return hs_a60325vlDQ;
        }
    };
    hs_a60425vlDU.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdctestBit725vlDW.evaluateOnce = function () {
        if (hs_a60425vlDU.notEvaluated) {
            return hs_a60425vlDU.hscall();
        } else {
            return hs_a60425vlDU;
        }
    };
    hs_a60525vlDY.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcbitSizze725vlE0.evaluateOnce = function () {
        if (hs_a60525vlDY.notEvaluated) {
            return hs_a60525vlDY.hscall();
        } else {
            return hs_a60525vlDY;
        }
    };
    hs_a60625vlE2.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcisSigned725vlE4.evaluateOnce = function () {
        if (hs_a60625vlE2.notEvaluated) {
            return hs_a60625vlE2.hscall();
        } else {
            return hs_a60625vlE2;
        }
    };
    hs_a60725vlE6.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshiftL725vlE8.evaluateOnce = function () {
        if (hs_a60725vlE6.notEvaluated) {
            return hs_a60725vlE6.hscall();
        } else {
            return hs_a60725vlE6;
        }
    };
    hs_a60825vlEa.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshiftR725vlEc.evaluateOnce = function () {
        if (hs_a60825vlEa.notEvaluated) {
            return hs_a60825vlEa.hscall();
        } else {
            return hs_a60825vlEa;
        }
    };
    hs_a60925vlEe.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotateL725vlEg.evaluateOnce = function () {
        if (hs_a60925vlEe.notEvaluated) {
            return hs_a60925vlEe.hscall();
        } else {
            return hs_a60925vlEe;
        }
    };
    hs_a61025vlEi.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotateR725vlEk.evaluateOnce = function () {
        if (hs_a61025vlEi.notEvaluated) {
            return hs_a61025vlEi.hscall();
        } else {
            return hs_a61025vlEi;
        }
    };
    hs_a61125vlEm.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcquot725vlEo.evaluateOnce = function () {
        if (hs_a61125vlEm.notEvaluated) {
            return hs_a61125vlEm.hscall();
        } else {
            return hs_a61125vlEm;
        }
    };
    hs_a61225vlEq.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcrem725vlEs.evaluateOnce = function () {
        if (hs_a61225vlEq.notEvaluated) {
            return hs_a61225vlEq.hscall();
        } else {
            return hs_a61225vlEq;
        }
    };
    hs_a61325vlEu.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcdiv725vlEw.evaluateOnce = function () {
        if (hs_a61325vlEu.notEvaluated) {
            return hs_a61325vlEu.hscall();
        } else {
            return hs_a61325vlEu;
        }
    };
    hs_a61425vlEy.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcmod725vlEA.evaluateOnce = function () {
        if (hs_a61425vlEy.notEvaluated) {
            return hs_a61425vlEy.hscall();
        } else {
            return hs_a61425vlEy;
        }
    };
    hs_a61525vlEC.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcquotRem725vlEE.evaluateOnce = function () {
        if (hs_a61525vlEC.notEvaluated) {
            return hs_a61525vlEC.hscall();
        } else {
            return hs_a61525vlEC;
        }
    };
    hs_a61625vlEG.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcdivMod725vlEI.evaluateOnce = function () {
        if (hs_a61625vlEG.notEvaluated) {
            return hs_a61625vlEG.hscall();
        } else {
            return hs_a61625vlEG;
        }
    };
    hs_a61725vlEK.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdctoInteger725vlEM.evaluateOnce = function () {
        if (hs_a61725vlEK.notEvaluated) {
            return hs_a61725vlEK.hscall();
        } else {
            return hs_a61725vlEK;
        }
    };
    hs_a61825vlEO.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt32);
    };
    hs_zdcminBound725vlEQ.evaluateOnce = function () {
        if (hs_a61825vlEO.notEvaluated) {
            return hs_a61825vlEO.hscall();
        } else {
            return hs_a61825vlEO;
        }
    };
    hs_a61925vlES.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt32);
    };
    hs_zdcmaxBound725vlEU.evaluateOnce = function () {
        if (hs_a61925vlES.notEvaluated) {
            return hs_a61925vlES.hscall();
        } else {
            return hs_a61925vlES;
        }
    };
    this.hs_zdfBoundedCPtrdiff.data = [hs_a61825vlEO, hs_a61925vlES];
    hs_a62025vlEW.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziInt.hs_zdfRealInt32);
    };
    hs_zdctoRational925vlEY.evaluateOnce = function () {
        if (hs_a62025vlEW.notEvaluated) {
            return hs_a62025vlEW.hscall();
        } else {
            return hs_a62025vlEW;
        }
    };
    hs_a62125vlF0.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcsizzeOf925vlF2.evaluateOnce = function () {
        if (hs_a62125vlF0.notEvaluated) {
            return hs_a62125vlF0.hscall();
        } else {
            return hs_a62125vlF0;
        }
    };
    hs_a62225vlF4.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcalignment925vlF6.evaluateOnce = function () {
        if (hs_a62225vlF4.notEvaluated) {
            return hs_a62225vlF4.hscall();
        } else {
            return hs_a62225vlF4;
        }
    };
    hs_a62325vlF8.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeekElemOff925vlFa.evaluateOnce = function () {
        if (hs_a62325vlF8.notEvaluated) {
            return hs_a62325vlF8.hscall();
        } else {
            return hs_a62325vlF8;
        }
    };
    hs_a62425vlFc.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpokeElemOff925vlFe.evaluateOnce = function () {
        if (hs_a62425vlFc.notEvaluated) {
            return hs_a62425vlFc.hscall();
        } else {
            return hs_a62425vlFc;
        }
    };
    hs_a62525vlFg.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeekByteOff925vlFi.evaluateOnce = function () {
        if (hs_a62525vlFg.notEvaluated) {
            return hs_a62525vlFg.hscall();
        } else {
            return hs_a62525vlFg;
        }
    };
    hs_a62625vlFk.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpokeByteOff925vlFm.evaluateOnce = function () {
        if (hs_a62625vlFk.notEvaluated) {
            return hs_a62625vlFk.hscall();
        } else {
            return hs_a62625vlFk;
        }
    };
    hs_a62725vlFo.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeek925vlFq.evaluateOnce = function () {
        if (hs_a62725vlFo.notEvaluated) {
            return hs_a62725vlFo.hscall();
        } else {
            return hs_a62725vlFo;
        }
    };
    hs_a62825vlFs.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpoke925vlFu.evaluateOnce = function () {
        if (hs_a62825vlFs.notEvaluated) {
            return hs_a62825vlFs.hscall();
        } else {
            return hs_a62825vlFs;
        }
    };
    this.hs_zdfStorableCPtrdiff.data = [hs_a62125vlF0, hs_a62225vlF4, hs_a62325vlF8, hs_a62425vlFc, hs_a62525vlFg, hs_a62625vlFk, hs_a62725vlFo, hs_a62825vlFs];
    hs_a62925vlFw.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcsucc925vlFy.evaluateOnce = function () {
        if (hs_a62925vlFw.notEvaluated) {
            return hs_a62925vlFw.hscall();
        } else {
            return hs_a62925vlFw;
        }
    };
    hs_a63025vlFA.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcpred925vlFC.evaluateOnce = function () {
        if (hs_a63025vlFA.notEvaluated) {
            return hs_a63025vlFA.hscall();
        } else {
            return hs_a63025vlFA;
        }
    };
    hs_a63125vlFE.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdctoEnum925vlFG.evaluateOnce = function () {
        if (hs_a63125vlFE.notEvaluated) {
            return hs_a63125vlFE.hscall();
        } else {
            return hs_a63125vlFE;
        }
    };
    hs_a63225vlFI.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcfromEnum925vlFK.evaluateOnce = function () {
        if (hs_a63225vlFI.notEvaluated) {
            return hs_a63225vlFI.hscall();
        } else {
            return hs_a63225vlFI;
        }
    };
    hs_a63325vlFM.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFrom925vlFO.evaluateOnce = function () {
        if (hs_a63325vlFM.notEvaluated) {
            return hs_a63325vlFM.hscall();
        } else {
            return hs_a63325vlFM;
        }
    };
    hs_a63425vlFQ.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromThen925vlFS.evaluateOnce = function () {
        if (hs_a63425vlFQ.notEvaluated) {
            return hs_a63425vlFQ.hscall();
        } else {
            return hs_a63425vlFQ;
        }
    };
    hs_a63525vlFU.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromTo925vlFW.evaluateOnce = function () {
        if (hs_a63525vlFU.notEvaluated) {
            return hs_a63525vlFU.hscall();
        } else {
            return hs_a63525vlFU;
        }
    };
    hs_a63625vlFY.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromThenTo925vlG0.evaluateOnce = function () {
        if (hs_a63625vlFY.notEvaluated) {
            return hs_a63625vlFY.hscall();
        } else {
            return hs_a63625vlFY;
        }
    };
    this.hs_zdfEnumCPtrdiff.data = [hs_a62925vlFw, hs_a63025vlFA, hs_a63125vlFE, hs_a63225vlFI, hs_a63325vlFM, hs_a63425vlFQ, hs_a63525vlFU, hs_a63625vlFY];
    hs_a63725vlG2.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczp925vlG4.evaluateOnce = function () {
        if (hs_a63725vlG2.notEvaluated) {
            return hs_a63725vlG2.hscall();
        } else {
            return hs_a63725vlG2;
        }
    };
    hs_a63825vlG6.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczt925vlG8.evaluateOnce = function () {
        if (hs_a63825vlG6.notEvaluated) {
            return hs_a63825vlG6.hscall();
        } else {
            return hs_a63825vlG6;
        }
    };
    hs_a63925vlGa.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczm925vlGc.evaluateOnce = function () {
        if (hs_a63925vlGa.notEvaluated) {
            return hs_a63925vlGa.hscall();
        } else {
            return hs_a63925vlGa;
        }
    };
    hs_a64025vlGe.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcnegate925vlGg.evaluateOnce = function () {
        if (hs_a64025vlGe.notEvaluated) {
            return hs_a64025vlGe.hscall();
        } else {
            return hs_a64025vlGe;
        }
    };
    hs_a64125vlGi.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcabs925vlGk.evaluateOnce = function () {
        if (hs_a64125vlGi.notEvaluated) {
            return hs_a64125vlGi.hscall();
        } else {
            return hs_a64125vlGi;
        }
    };
    hs_a64225vlGm.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcsignum925vlGo.evaluateOnce = function () {
        if (hs_a64225vlGm.notEvaluated) {
            return hs_a64225vlGm.hscall();
        } else {
            return hs_a64225vlGm;
        }
    };
    hs_a64325vlGq.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcfromInteger925vlGs.evaluateOnce = function () {
        if (hs_a64325vlGq.notEvaluated) {
            return hs_a64325vlGq.hscall();
        } else {
            return hs_a64325vlGq;
        }
    };
    hs_a64425vlGu.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdccompare925vlGw.evaluateOnce = function () {
        if (hs_a64425vlGu.notEvaluated) {
            return hs_a64425vlGu.hscall();
        } else {
            return hs_a64425vlGu;
        }
    };
    hs_a64525vlGy.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczl925vlGA.evaluateOnce = function () {
        if (hs_a64525vlGy.notEvaluated) {
            return hs_a64525vlGy.hscall();
        } else {
            return hs_a64525vlGy;
        }
    };
    hs_a64625vlGC.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczgze925vlGE.evaluateOnce = function () {
        if (hs_a64625vlGC.notEvaluated) {
            return hs_a64625vlGC.hscall();
        } else {
            return hs_a64625vlGC;
        }
    };
    hs_a64725vlGG.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczg925vlGI.evaluateOnce = function () {
        if (hs_a64725vlGG.notEvaluated) {
            return hs_a64725vlGG.hscall();
        } else {
            return hs_a64725vlGG;
        }
    };
    hs_a64825vlGK.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczlze925vlGM.evaluateOnce = function () {
        if (hs_a64825vlGK.notEvaluated) {
            return hs_a64825vlGK.hscall();
        } else {
            return hs_a64825vlGK;
        }
    };
    hs_a64925vlGO.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdcmax925vlGQ.evaluateOnce = function () {
        if (hs_a64925vlGO.notEvaluated) {
            return hs_a64925vlGO.hscall();
        } else {
            return hs_a64925vlGO;
        }
    };
    hs_a65025vlGS.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdcmin925vlGU.evaluateOnce = function () {
        if (hs_a65025vlGS.notEvaluated) {
            return hs_a65025vlGS.hscall();
        } else {
            return hs_a65025vlGS;
        }
    };
    hs_a65125vlGW.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32);
    };
    hs_zdczeze925vlGY.evaluateOnce = function () {
        if (hs_a65125vlGW.notEvaluated) {
            return hs_a65125vlGW.hscall();
        } else {
            return hs_a65125vlGW;
        }
    };
    hs_a65225vlH0.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32);
    };
    hs_zdczsze925vlH2.evaluateOnce = function () {
        if (hs_a65225vlH0.notEvaluated) {
            return hs_a65225vlH0.hscall();
        } else {
            return hs_a65225vlH0;
        }
    };
    this.hs_zdfEqCPtrdiff.data = [hs_a65125vlGW, hs_a65225vlH0];
    this.hs_zdfOrdCPtrdiff.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCPtrdiff, hs_a64425vlGu, hs_a64525vlGy, hs_a64625vlGC, hs_a64725vlGG, hs_a64825vlGK, hs_a64925vlGO, hs_a65025vlGS];
    this.hs_zdfNumCPtrdiff.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCPtrdiff, $hs.modules.ForeignziCziTypes.hs_zdfShowCPtrdiff, hs_a63725vlG2, hs_a63825vlG6, hs_a63925vlGa, hs_a64025vlGe, hs_a64125vlGi, hs_a64225vlGm, hs_a64325vlGq];
    this.hs_zdfRealCPtrdiff.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCPtrdiff, $hs.modules.ForeignziCziTypes.hs_zdfOrdCPtrdiff, hs_a62025vlEW];
    this.hs_zdfIntegralCPtrdiff.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealCPtrdiff, $hs.modules.ForeignziCziTypes.hs_zdfEnumCPtrdiff, hs_a61125vlEm, hs_a61225vlEq, hs_a61325vlEu, hs_a61425vlEy, hs_a61525vlEC, hs_a61625vlEG, hs_a61725vlEK];
    this.hs_zdfBitsCPtrdiff.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCPtrdiff, hs_a59425vlDg, hs_a59525vlDk, hs_a59625vlDo, hs_a59725vlDs, hs_a59825vlDw, hs_a59925vlDA, hs_a60025vlDE, hs_a60125vlDI, hs_a60225vlDM, hs_a60325vlDQ, hs_a60425vlDU, hs_a60525vlDY, hs_a60625vlE2, hs_a60725vlE6, hs_a60825vlEa, hs_a60925vlEe, hs_a61025vlEi];
    hs_a65325vlH4.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_floatRadix.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble);
    };
    hs_zdcfloatRadix25vlH6.evaluateOnce = function () {
        if (hs_a65325vlH4.notEvaluated) {
            return hs_a65325vlH4.hscall();
        } else {
            return hs_a65325vlH4;
        }
    };
    hs_a65425vlH8.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_floatDigits.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble);
    };
    hs_zdcfloatDigits25vlHa.evaluateOnce = function () {
        if (hs_a65425vlH8.notEvaluated) {
            return hs_a65425vlH8.hscall();
        } else {
            return hs_a65425vlH8;
        }
    };
    hs_a65525vlHc.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_floatRange.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble);
    };
    hs_zdcfloatRange25vlHe.evaluateOnce = function () {
        if (hs_a65525vlHc.notEvaluated) {
            return hs_a65525vlHc.hscall();
        } else {
            return hs_a65525vlHc;
        }
    };
    hs_a65625vlHg.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_decodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble);
    };
    hs_zdcdecodeFloat25vlHi.evaluateOnce = function () {
        if (hs_a65625vlHg.notEvaluated) {
            return hs_a65625vlHg.hscall();
        } else {
            return hs_a65625vlHg;
        }
    };
    hs_a65725vlHk.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble);
    };
    hs_zdcencodeFloat25vlHm.evaluateOnce = function () {
        if (hs_a65725vlHk.notEvaluated) {
            return hs_a65725vlHk.hscall();
        } else {
            return hs_a65725vlHk;
        }
    };
    hs_a65825vlHo.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_exponent.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble);
    };
    hs_zdcexponent25vlHq.evaluateOnce = function () {
        if (hs_a65825vlHo.notEvaluated) {
            return hs_a65825vlHo.hscall();
        } else {
            return hs_a65825vlHo;
        }
    };
    hs_a65925vlHs.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_significand.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble);
    };
    hs_zdcsignificand25vlHu.evaluateOnce = function () {
        if (hs_a65925vlHs.notEvaluated) {
            return hs_a65925vlHs.hscall();
        } else {
            return hs_a65925vlHs;
        }
    };
    hs_a66025vlHw.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_scaleFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble);
    };
    hs_zdcscaleFloat25vlHy.evaluateOnce = function () {
        if (hs_a66025vlHw.notEvaluated) {
            return hs_a66025vlHw.hscall();
        } else {
            return hs_a66025vlHw;
        }
    };
    hs_a66125vlHA.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_isNaN.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble);
    };
    hs_zdcisNaN25vlHC.evaluateOnce = function () {
        if (hs_a66125vlHA.notEvaluated) {
            return hs_a66125vlHA.hscall();
        } else {
            return hs_a66125vlHA;
        }
    };
    hs_a66225vlHE.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_isInfinite.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble);
    };
    hs_zdcisInfinite25vlHG.evaluateOnce = function () {
        if (hs_a66225vlHE.notEvaluated) {
            return hs_a66225vlHE.hscall();
        } else {
            return hs_a66225vlHE;
        }
    };
    hs_a66325vlHI.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_isDenormalizzed.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble);
    };
    hs_zdcisDenormalizzed25vlHK.evaluateOnce = function () {
        if (hs_a66325vlHI.notEvaluated) {
            return hs_a66325vlHI.hscall();
        } else {
            return hs_a66325vlHI;
        }
    };
    hs_a66425vlHM.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_isNegativeZZero.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble);
    };
    hs_zdcisNegativeZZero25vlHO.evaluateOnce = function () {
        if (hs_a66425vlHM.notEvaluated) {
            return hs_a66425vlHM.hscall();
        } else {
            return hs_a66425vlHM;
        }
    };
    hs_a66525vlHQ.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_isIEEE.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble);
    };
    hs_zdcisIEEE25vlHS.evaluateOnce = function () {
        if (hs_a66525vlHQ.notEvaluated) {
            return hs_a66525vlHQ.hscall();
        } else {
            return hs_a66525vlHQ;
        }
    };
    hs_a66625vlHU.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_atan2.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble);
    };
    hs_zdcatan225vlHW.evaluateOnce = function () {
        if (hs_a66625vlHU.notEvaluated) {
            return hs_a66625vlHU.hscall();
        } else {
            return hs_a66625vlHU;
        }
    };
    hs_a66725vlHY.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_properFraction.hscall($hs.modules.GHCziFloat.hs_zdfRealFracDouble);
    };
    hs_zdcproperFraction25vlI0.evaluateOnce = function () {
        if (hs_a66725vlHY.notEvaluated) {
            return hs_a66725vlHY.hscall();
        } else {
            return hs_a66725vlHY;
        }
    };
    hs_a66825vlI2.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_truncate.hscall($hs.modules.GHCziFloat.hs_zdfRealFracDouble);
    };
    hs_zdctruncate25vlI4.evaluateOnce = function () {
        if (hs_a66825vlI2.notEvaluated) {
            return hs_a66825vlI2.hscall();
        } else {
            return hs_a66825vlI2;
        }
    };
    hs_a66925vlI6.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_round.hscall($hs.modules.GHCziFloat.hs_zdfRealFracDouble);
    };
    hs_zdcround25vlI8.evaluateOnce = function () {
        if (hs_a66925vlI6.notEvaluated) {
            return hs_a66925vlI6.hscall();
        } else {
            return hs_a66925vlI6;
        }
    };
    hs_a67025vlIa.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_ceiling.hscall($hs.modules.GHCziFloat.hs_zdfRealFracDouble);
    };
    hs_zdcceiling25vlIc.evaluateOnce = function () {
        if (hs_a67025vlIa.notEvaluated) {
            return hs_a67025vlIa.hscall();
        } else {
            return hs_a67025vlIa;
        }
    };
    hs_a67125vlIe.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_floor.hscall($hs.modules.GHCziFloat.hs_zdfRealFracDouble);
    };
    hs_zdcfloor25vlIg.evaluateOnce = function () {
        if (hs_a67125vlIe.notEvaluated) {
            return hs_a67125vlIe.hscall();
        } else {
            return hs_a67125vlIe;
        }
    };
    hs_a67225vlIi.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_pi.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble);
    };
    hs_zdcpi25vlIk.evaluateOnce = function () {
        if (hs_a67225vlIi.notEvaluated) {
            return hs_a67225vlIi.hscall();
        } else {
            return hs_a67225vlIi;
        }
    };
    hs_a67325vlIm.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_exp.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble);
    };
    hs_zdcexp25vlIo.evaluateOnce = function () {
        if (hs_a67325vlIm.notEvaluated) {
            return hs_a67325vlIm.hscall();
        } else {
            return hs_a67325vlIm;
        }
    };
    hs_a67425vlIq.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_sqrt.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble);
    };
    hs_zdcsqrt25vlIs.evaluateOnce = function () {
        if (hs_a67425vlIq.notEvaluated) {
            return hs_a67425vlIq.hscall();
        } else {
            return hs_a67425vlIq;
        }
    };
    hs_a67525vlIu.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_log.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble);
    };
    hs_zdclog25vlIw.evaluateOnce = function () {
        if (hs_a67525vlIu.notEvaluated) {
            return hs_a67525vlIu.hscall();
        } else {
            return hs_a67525vlIu;
        }
    };
    hs_a67625vlIy.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_ztzt.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble);
    };
    hs_zdcztzt25vlIA.evaluateOnce = function () {
        if (hs_a67625vlIy.notEvaluated) {
            return hs_a67625vlIy.hscall();
        } else {
            return hs_a67625vlIy;
        }
    };
    hs_a67725vlIC.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_logBase.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble);
    };
    hs_zdclogBase25vlIE.evaluateOnce = function () {
        if (hs_a67725vlIC.notEvaluated) {
            return hs_a67725vlIC.hscall();
        } else {
            return hs_a67725vlIC;
        }
    };
    hs_a67825vlIG.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_sin.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble);
    };
    hs_zdcsin25vlII.evaluateOnce = function () {
        if (hs_a67825vlIG.notEvaluated) {
            return hs_a67825vlIG.hscall();
        } else {
            return hs_a67825vlIG;
        }
    };
    hs_a67925vlIK.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_tan.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble);
    };
    hs_zdctan25vlIM.evaluateOnce = function () {
        if (hs_a67925vlIK.notEvaluated) {
            return hs_a67925vlIK.hscall();
        } else {
            return hs_a67925vlIK;
        }
    };
    hs_a68025vlIO.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_cos.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble);
    };
    hs_zdccos25vlIQ.evaluateOnce = function () {
        if (hs_a68025vlIO.notEvaluated) {
            return hs_a68025vlIO.hscall();
        } else {
            return hs_a68025vlIO;
        }
    };
    hs_a68125vlIS.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_asin.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble);
    };
    hs_zdcasin25vlIU.evaluateOnce = function () {
        if (hs_a68125vlIS.notEvaluated) {
            return hs_a68125vlIS.hscall();
        } else {
            return hs_a68125vlIS;
        }
    };
    hs_a68225vlIW.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_atan.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble);
    };
    hs_zdcatan25vlIY.evaluateOnce = function () {
        if (hs_a68225vlIW.notEvaluated) {
            return hs_a68225vlIW.hscall();
        } else {
            return hs_a68225vlIW;
        }
    };
    hs_a68325vlJ0.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_acos.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble);
    };
    hs_zdcacos25vlJ2.evaluateOnce = function () {
        if (hs_a68325vlJ0.notEvaluated) {
            return hs_a68325vlJ0.hscall();
        } else {
            return hs_a68325vlJ0;
        }
    };
    hs_a68425vlJ4.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_sinh.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble);
    };
    hs_zdcsinh25vlJ6.evaluateOnce = function () {
        if (hs_a68425vlJ4.notEvaluated) {
            return hs_a68425vlJ4.hscall();
        } else {
            return hs_a68425vlJ4;
        }
    };
    hs_a68525vlJ8.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_tanh.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble);
    };
    hs_zdctanh25vlJa.evaluateOnce = function () {
        if (hs_a68525vlJ8.notEvaluated) {
            return hs_a68525vlJ8.hscall();
        } else {
            return hs_a68525vlJ8;
        }
    };
    hs_a68625vlJc.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_cosh.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble);
    };
    hs_zdccosh25vlJe.evaluateOnce = function () {
        if (hs_a68625vlJc.notEvaluated) {
            return hs_a68625vlJc.hscall();
        } else {
            return hs_a68625vlJc;
        }
    };
    hs_a68725vlJg.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_asinh.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble);
    };
    hs_zdcasinh25vlJi.evaluateOnce = function () {
        if (hs_a68725vlJg.notEvaluated) {
            return hs_a68725vlJg.hscall();
        } else {
            return hs_a68725vlJg;
        }
    };
    hs_a68825vlJk.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_atanh.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble);
    };
    hs_zdcatanh25vlJm.evaluateOnce = function () {
        if (hs_a68825vlJk.notEvaluated) {
            return hs_a68825vlJk.hscall();
        } else {
            return hs_a68825vlJk;
        }
    };
    hs_a68925vlJo.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_acosh.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble);
    };
    hs_zdcacosh25vlJq.evaluateOnce = function () {
        if (hs_a68925vlJo.notEvaluated) {
            return hs_a68925vlJo.hscall();
        } else {
            return hs_a68925vlJo;
        }
    };
    hs_a69025vlJs.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zs.hscall($hs.modules.GHCziFloat.hs_zdfFractionalDouble);
    };
    hs_zdczs25vlJu.evaluateOnce = function () {
        if (hs_a69025vlJs.notEvaluated) {
            return hs_a69025vlJs.hscall();
        } else {
            return hs_a69025vlJs;
        }
    };
    hs_a69125vlJw.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_recip.hscall($hs.modules.GHCziFloat.hs_zdfFractionalDouble);
    };
    hs_zdcrecip25vlJy.evaluateOnce = function () {
        if (hs_a69125vlJw.notEvaluated) {
            return hs_a69125vlJw.hscall();
        } else {
            return hs_a69125vlJw;
        }
    };
    hs_a69225vlJA.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_fromRational.hscall($hs.modules.GHCziFloat.hs_zdfFractionalDouble);
    };
    hs_zdcfromRational25vlJC.evaluateOnce = function () {
        if (hs_a69225vlJA.notEvaluated) {
            return hs_a69225vlJA.hscall();
        } else {
            return hs_a69225vlJA;
        }
    };
    hs_a69325vlJE.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziFloat.hs_zdfRealDouble);
    };
    hs_zdctoRational1025vlJG.evaluateOnce = function () {
        if (hs_a69325vlJE.notEvaluated) {
            return hs_a69325vlJE.hscall();
        } else {
            return hs_a69325vlJE;
        }
    };
    hs_a69425vlJI.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableDouble);
    };
    hs_zdcsizzeOf1025vlJK.evaluateOnce = function () {
        if (hs_a69425vlJI.notEvaluated) {
            return hs_a69425vlJI.hscall();
        } else {
            return hs_a69425vlJI;
        }
    };
    hs_a69525vlJM.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableDouble);
    };
    hs_zdcalignment1025vlJO.evaluateOnce = function () {
        if (hs_a69525vlJM.notEvaluated) {
            return hs_a69525vlJM.hscall();
        } else {
            return hs_a69525vlJM;
        }
    };
    hs_a69625vlJQ.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableDouble);
    };
    hs_zdcpeekElemOff1025vlJS.evaluateOnce = function () {
        if (hs_a69625vlJQ.notEvaluated) {
            return hs_a69625vlJQ.hscall();
        } else {
            return hs_a69625vlJQ;
        }
    };
    hs_a69725vlJU.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableDouble);
    };
    hs_zdcpokeElemOff1025vlJW.evaluateOnce = function () {
        if (hs_a69725vlJU.notEvaluated) {
            return hs_a69725vlJU.hscall();
        } else {
            return hs_a69725vlJU;
        }
    };
    hs_a69825vlJY.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableDouble);
    };
    hs_zdcpeekByteOff1025vlK0.evaluateOnce = function () {
        if (hs_a69825vlJY.notEvaluated) {
            return hs_a69825vlJY.hscall();
        } else {
            return hs_a69825vlJY;
        }
    };
    hs_a69925vlK2.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableDouble);
    };
    hs_zdcpokeByteOff1025vlK4.evaluateOnce = function () {
        if (hs_a69925vlK2.notEvaluated) {
            return hs_a69925vlK2.hscall();
        } else {
            return hs_a69925vlK2;
        }
    };
    hs_a70025vlK6.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableDouble);
    };
    hs_zdcpeek1025vlK8.evaluateOnce = function () {
        if (hs_a70025vlK6.notEvaluated) {
            return hs_a70025vlK6.hscall();
        } else {
            return hs_a70025vlK6;
        }
    };
    hs_a70125vlKa.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableDouble);
    };
    hs_zdcpoke1025vlKc.evaluateOnce = function () {
        if (hs_a70125vlKa.notEvaluated) {
            return hs_a70125vlKa.hscall();
        } else {
            return hs_a70125vlKa;
        }
    };
    this.hs_zdfStorableCDouble.data = [hs_a69425vlJI, hs_a69525vlJM, hs_a69625vlJQ, hs_a69725vlJU, hs_a69825vlJY, hs_a69925vlK2, hs_a70025vlK6, hs_a70125vlKa];
    hs_a70225vlKe.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziFloat.hs_zdfEnumDouble);
    };
    hs_zdcsucc1025vlKg.evaluateOnce = function () {
        if (hs_a70225vlKe.notEvaluated) {
            return hs_a70225vlKe.hscall();
        } else {
            return hs_a70225vlKe;
        }
    };
    hs_a70325vlKi.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziFloat.hs_zdfEnumDouble);
    };
    hs_zdcpred1025vlKk.evaluateOnce = function () {
        if (hs_a70325vlKi.notEvaluated) {
            return hs_a70325vlKi.hscall();
        } else {
            return hs_a70325vlKi;
        }
    };
    hs_a70425vlKm.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziFloat.hs_zdfEnumDouble);
    };
    hs_zdctoEnum1025vlKo.evaluateOnce = function () {
        if (hs_a70425vlKm.notEvaluated) {
            return hs_a70425vlKm.hscall();
        } else {
            return hs_a70425vlKm;
        }
    };
    hs_a70525vlKq.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziFloat.hs_zdfEnumDouble);
    };
    hs_zdcfromEnum1025vlKs.evaluateOnce = function () {
        if (hs_a70525vlKq.notEvaluated) {
            return hs_a70525vlKq.hscall();
        } else {
            return hs_a70525vlKq;
        }
    };
    hs_a70625vlKu.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziFloat.hs_zdfEnumDouble);
    };
    hs_zdcenumFrom1025vlKw.evaluateOnce = function () {
        if (hs_a70625vlKu.notEvaluated) {
            return hs_a70625vlKu.hscall();
        } else {
            return hs_a70625vlKu;
        }
    };
    hs_a70725vlKy.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziFloat.hs_zdfEnumDouble);
    };
    hs_zdcenumFromThen1025vlKA.evaluateOnce = function () {
        if (hs_a70725vlKy.notEvaluated) {
            return hs_a70725vlKy.hscall();
        } else {
            return hs_a70725vlKy;
        }
    };
    hs_a70825vlKC.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziFloat.hs_zdfEnumDouble);
    };
    hs_zdcenumFromTo1025vlKE.evaluateOnce = function () {
        if (hs_a70825vlKC.notEvaluated) {
            return hs_a70825vlKC.hscall();
        } else {
            return hs_a70825vlKC;
        }
    };
    hs_a70925vlKG.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziFloat.hs_zdfEnumDouble);
    };
    hs_zdcenumFromThenTo1025vlKI.evaluateOnce = function () {
        if (hs_a70925vlKG.notEvaluated) {
            return hs_a70925vlKG.hscall();
        } else {
            return hs_a70925vlKG;
        }
    };
    this.hs_zdfEnumCDouble.data = [hs_a70225vlKe, hs_a70325vlKi, hs_a70425vlKm, hs_a70525vlKq, hs_a70625vlKu, hs_a70725vlKy, hs_a70825vlKC, hs_a70925vlKG];
    hs_a71025vlKK.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble);
    };
    hs_zdczp1025vlKM.evaluateOnce = function () {
        if (hs_a71025vlKK.notEvaluated) {
            return hs_a71025vlKK.hscall();
        } else {
            return hs_a71025vlKK;
        }
    };
    hs_a71125vlKO.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble);
    };
    hs_zdczt1025vlKQ.evaluateOnce = function () {
        if (hs_a71125vlKO.notEvaluated) {
            return hs_a71125vlKO.hscall();
        } else {
            return hs_a71125vlKO;
        }
    };
    hs_a71225vlKS.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble);
    };
    hs_zdczm1025vlKU.evaluateOnce = function () {
        if (hs_a71225vlKS.notEvaluated) {
            return hs_a71225vlKS.hscall();
        } else {
            return hs_a71225vlKS;
        }
    };
    hs_a71325vlKW.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble);
    };
    hs_zdcnegate1025vlKY.evaluateOnce = function () {
        if (hs_a71325vlKW.notEvaluated) {
            return hs_a71325vlKW.hscall();
        } else {
            return hs_a71325vlKW;
        }
    };
    hs_a71425vlL0.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble);
    };
    hs_zdcabs1025vlL2.evaluateOnce = function () {
        if (hs_a71425vlL0.notEvaluated) {
            return hs_a71425vlL0.hscall();
        } else {
            return hs_a71425vlL0;
        }
    };
    hs_a71525vlL4.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble);
    };
    hs_zdcsignum1025vlL6.evaluateOnce = function () {
        if (hs_a71525vlL4.notEvaluated) {
            return hs_a71525vlL4.hscall();
        } else {
            return hs_a71525vlL4;
        }
    };
    hs_a71625vlL8.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble);
    };
    hs_zdcfromInteger1025vlLa.evaluateOnce = function () {
        if (hs_a71625vlL8.notEvaluated) {
            return hs_a71625vlL8.hscall();
        } else {
            return hs_a71625vlL8;
        }
    };
    hs_a71725vlLc.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble);
    };
    hs_zdccompare1025vlLe.evaluateOnce = function () {
        if (hs_a71725vlLc.notEvaluated) {
            return hs_a71725vlLc.hscall();
        } else {
            return hs_a71725vlLc;
        }
    };
    hs_a71825vlLg.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble);
    };
    hs_zdczl1025vlLi.evaluateOnce = function () {
        if (hs_a71825vlLg.notEvaluated) {
            return hs_a71825vlLg.hscall();
        } else {
            return hs_a71825vlLg;
        }
    };
    hs_a71925vlLk.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble);
    };
    hs_zdczgze1025vlLm.evaluateOnce = function () {
        if (hs_a71925vlLk.notEvaluated) {
            return hs_a71925vlLk.hscall();
        } else {
            return hs_a71925vlLk;
        }
    };
    hs_a72025vlLo.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble);
    };
    hs_zdczg1025vlLq.evaluateOnce = function () {
        if (hs_a72025vlLo.notEvaluated) {
            return hs_a72025vlLo.hscall();
        } else {
            return hs_a72025vlLo;
        }
    };
    hs_a72125vlLs.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble);
    };
    hs_zdczlze1025vlLu.evaluateOnce = function () {
        if (hs_a72125vlLs.notEvaluated) {
            return hs_a72125vlLs.hscall();
        } else {
            return hs_a72125vlLs;
        }
    };
    hs_a72225vlLw.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble);
    };
    hs_zdcmax1025vlLy.evaluateOnce = function () {
        if (hs_a72225vlLw.notEvaluated) {
            return hs_a72225vlLw.hscall();
        } else {
            return hs_a72225vlLw;
        }
    };
    hs_a72325vlLA.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble);
    };
    hs_zdcmin1025vlLC.evaluateOnce = function () {
        if (hs_a72325vlLA.notEvaluated) {
            return hs_a72325vlLA.hscall();
        } else {
            return hs_a72325vlLA;
        }
    };
    hs_a72425vlLE.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqDouble);
    };
    hs_zdczeze1025vlLG.evaluateOnce = function () {
        if (hs_a72425vlLE.notEvaluated) {
            return hs_a72425vlLE.hscall();
        } else {
            return hs_a72425vlLE;
        }
    };
    hs_a72525vlLI.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziClasses.hs_zdfEqDouble);
    };
    hs_zdczsze1025vlLK.evaluateOnce = function () {
        if (hs_a72525vlLI.notEvaluated) {
            return hs_a72525vlLI.hscall();
        } else {
            return hs_a72525vlLI;
        }
    };
    this.hs_zdfEqCDouble.data = [hs_a72425vlLE, hs_a72525vlLI];
    this.hs_zdfOrdCDouble.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCDouble, hs_a71725vlLc, hs_a71825vlLg, hs_a71925vlLk, hs_a72025vlLo, hs_a72125vlLs, hs_a72225vlLw, hs_a72325vlLA];
    this.hs_zdfNumCDouble.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCDouble, $hs.modules.ForeignziCziTypes.hs_zdfShowCDouble, hs_a71025vlKK, hs_a71125vlKO, hs_a71225vlKS, hs_a71325vlKW, hs_a71425vlL0, hs_a71525vlL4, hs_a71625vlL8];
    this.hs_zdfRealCDouble.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCDouble, $hs.modules.ForeignziCziTypes.hs_zdfOrdCDouble, hs_a69325vlJE];
    this.hs_zdfFractionalCDouble.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCDouble, hs_a69025vlJs, hs_a69125vlJw, hs_a69225vlJA];
    this.hs_zdfFloatingCDouble.data = [$hs.modules.ForeignziCziTypes.hs_zdfFractionalCDouble, hs_a67225vlIi, hs_a67325vlIm, hs_a67425vlIq, hs_a67525vlIu, hs_a67625vlIy, hs_a67725vlIC, hs_a67825vlIG, hs_a67925vlIK, hs_a68025vlIO, hs_a68125vlIS, hs_a68225vlIW, hs_a68325vlJ0, hs_a68425vlJ4, hs_a68525vlJ8, hs_a68625vlJc, hs_a68725vlJg, hs_a68825vlJk, hs_a68925vlJo];
    this.hs_zdfRealFracCDouble.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealCDouble, $hs.modules.ForeignziCziTypes.hs_zdfFractionalCDouble, hs_a66725vlHY, hs_a66825vlI2, hs_a66925vlI6, hs_a67025vlIa, hs_a67125vlIe];
    this.hs_zdfRealFloatCDouble.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealFracCDouble, $hs.modules.ForeignziCziTypes.hs_zdfFloatingCDouble, hs_a65325vlH4, hs_a65425vlH8, hs_a65525vlHc, hs_a65625vlHg, hs_a65725vlHk, hs_a65825vlHo, hs_a65925vlHs, hs_a66025vlHw, hs_a66125vlHA, hs_a66225vlHE, hs_a66325vlHI, hs_a66425vlHM, hs_a66525vlHQ, hs_a66625vlHU];
    hs_a72625vlLM.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_floatRadix.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat);
    };
    hs_zdcfloatRadix125vlLO.evaluateOnce = function () {
        if (hs_a72625vlLM.notEvaluated) {
            return hs_a72625vlLM.hscall();
        } else {
            return hs_a72625vlLM;
        }
    };
    hs_a72725vlLQ.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_floatDigits.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat);
    };
    hs_zdcfloatDigits125vlLS.evaluateOnce = function () {
        if (hs_a72725vlLQ.notEvaluated) {
            return hs_a72725vlLQ.hscall();
        } else {
            return hs_a72725vlLQ;
        }
    };
    hs_a72825vlLU.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_floatRange.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat);
    };
    hs_zdcfloatRange125vlLW.evaluateOnce = function () {
        if (hs_a72825vlLU.notEvaluated) {
            return hs_a72825vlLU.hscall();
        } else {
            return hs_a72825vlLU;
        }
    };
    hs_a72925vlLY.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_decodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat);
    };
    hs_zdcdecodeFloat125vlM0.evaluateOnce = function () {
        if (hs_a72925vlLY.notEvaluated) {
            return hs_a72925vlLY.hscall();
        } else {
            return hs_a72925vlLY;
        }
    };
    hs_a73025vlM2.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat);
    };
    hs_zdcencodeFloat125vlM4.evaluateOnce = function () {
        if (hs_a73025vlM2.notEvaluated) {
            return hs_a73025vlM2.hscall();
        } else {
            return hs_a73025vlM2;
        }
    };
    hs_a73125vlM6.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_exponent.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat);
    };
    hs_zdcexponent125vlM8.evaluateOnce = function () {
        if (hs_a73125vlM6.notEvaluated) {
            return hs_a73125vlM6.hscall();
        } else {
            return hs_a73125vlM6;
        }
    };
    hs_a73225vlMa.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_significand.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat);
    };
    hs_zdcsignificand125vlMc.evaluateOnce = function () {
        if (hs_a73225vlMa.notEvaluated) {
            return hs_a73225vlMa.hscall();
        } else {
            return hs_a73225vlMa;
        }
    };
    hs_a73325vlMe.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_scaleFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat);
    };
    hs_zdcscaleFloat125vlMg.evaluateOnce = function () {
        if (hs_a73325vlMe.notEvaluated) {
            return hs_a73325vlMe.hscall();
        } else {
            return hs_a73325vlMe;
        }
    };
    hs_a73425vlMi.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_isNaN.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat);
    };
    hs_zdcisNaN125vlMk.evaluateOnce = function () {
        if (hs_a73425vlMi.notEvaluated) {
            return hs_a73425vlMi.hscall();
        } else {
            return hs_a73425vlMi;
        }
    };
    hs_a73525vlMm.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_isInfinite.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat);
    };
    hs_zdcisInfinite125vlMo.evaluateOnce = function () {
        if (hs_a73525vlMm.notEvaluated) {
            return hs_a73525vlMm.hscall();
        } else {
            return hs_a73525vlMm;
        }
    };
    hs_a73625vlMq.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_isDenormalizzed.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat);
    };
    hs_zdcisDenormalizzed125vlMs.evaluateOnce = function () {
        if (hs_a73625vlMq.notEvaluated) {
            return hs_a73625vlMq.hscall();
        } else {
            return hs_a73625vlMq;
        }
    };
    hs_a73725vlMu.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_isNegativeZZero.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat);
    };
    hs_zdcisNegativeZZero125vlMw.evaluateOnce = function () {
        if (hs_a73725vlMu.notEvaluated) {
            return hs_a73725vlMu.hscall();
        } else {
            return hs_a73725vlMu;
        }
    };
    hs_a73825vlMy.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_isIEEE.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat);
    };
    hs_zdcisIEEE125vlMA.evaluateOnce = function () {
        if (hs_a73825vlMy.notEvaluated) {
            return hs_a73825vlMy.hscall();
        } else {
            return hs_a73825vlMy;
        }
    };
    hs_a73925vlMC.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_atan2.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat);
    };
    hs_zdcatan125vlME.evaluateOnce = function () {
        if (hs_a73925vlMC.notEvaluated) {
            return hs_a73925vlMC.hscall();
        } else {
            return hs_a73925vlMC;
        }
    };
    hs_a74025vlMG.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_properFraction.hscall($hs.modules.GHCziFloat.hs_zdfRealFracFloat);
    };
    hs_zdcproperFraction125vlMI.evaluateOnce = function () {
        if (hs_a74025vlMG.notEvaluated) {
            return hs_a74025vlMG.hscall();
        } else {
            return hs_a74025vlMG;
        }
    };
    hs_a74125vlMK.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_truncate.hscall($hs.modules.GHCziFloat.hs_zdfRealFracFloat);
    };
    hs_zdctruncate125vlMM.evaluateOnce = function () {
        if (hs_a74125vlMK.notEvaluated) {
            return hs_a74125vlMK.hscall();
        } else {
            return hs_a74125vlMK;
        }
    };
    hs_a74225vlMO.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_round.hscall($hs.modules.GHCziFloat.hs_zdfRealFracFloat);
    };
    hs_zdcround125vlMQ.evaluateOnce = function () {
        if (hs_a74225vlMO.notEvaluated) {
            return hs_a74225vlMO.hscall();
        } else {
            return hs_a74225vlMO;
        }
    };
    hs_a74325vlMS.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_ceiling.hscall($hs.modules.GHCziFloat.hs_zdfRealFracFloat);
    };
    hs_zdcceiling125vlMU.evaluateOnce = function () {
        if (hs_a74325vlMS.notEvaluated) {
            return hs_a74325vlMS.hscall();
        } else {
            return hs_a74325vlMS;
        }
    };
    hs_a74425vlMW.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_floor.hscall($hs.modules.GHCziFloat.hs_zdfRealFracFloat);
    };
    hs_zdcfloor125vlMY.evaluateOnce = function () {
        if (hs_a74425vlMW.notEvaluated) {
            return hs_a74425vlMW.hscall();
        } else {
            return hs_a74425vlMW;
        }
    };
    hs_a74525vlN0.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_pi.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat);
    };
    hs_zdcpi125vlN2.evaluateOnce = function () {
        if (hs_a74525vlN0.notEvaluated) {
            return hs_a74525vlN0.hscall();
        } else {
            return hs_a74525vlN0;
        }
    };
    hs_a74625vlN4.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_exp.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat);
    };
    hs_zdcexp125vlN6.evaluateOnce = function () {
        if (hs_a74625vlN4.notEvaluated) {
            return hs_a74625vlN4.hscall();
        } else {
            return hs_a74625vlN4;
        }
    };
    hs_a74725vlN8.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_sqrt.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat);
    };
    hs_zdcsqrt125vlNa.evaluateOnce = function () {
        if (hs_a74725vlN8.notEvaluated) {
            return hs_a74725vlN8.hscall();
        } else {
            return hs_a74725vlN8;
        }
    };
    hs_a74825vlNc.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_log.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat);
    };
    hs_zdclog125vlNe.evaluateOnce = function () {
        if (hs_a74825vlNc.notEvaluated) {
            return hs_a74825vlNc.hscall();
        } else {
            return hs_a74825vlNc;
        }
    };
    hs_a74925vlNg.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_ztzt.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat);
    };
    hs_zdcztzt125vlNi.evaluateOnce = function () {
        if (hs_a74925vlNg.notEvaluated) {
            return hs_a74925vlNg.hscall();
        } else {
            return hs_a74925vlNg;
        }
    };
    hs_a75025vlNk.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_logBase.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat);
    };
    hs_zdclogBase125vlNm.evaluateOnce = function () {
        if (hs_a75025vlNk.notEvaluated) {
            return hs_a75025vlNk.hscall();
        } else {
            return hs_a75025vlNk;
        }
    };
    hs_a75125vlNo.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_sin.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat);
    };
    hs_zdcsin125vlNq.evaluateOnce = function () {
        if (hs_a75125vlNo.notEvaluated) {
            return hs_a75125vlNo.hscall();
        } else {
            return hs_a75125vlNo;
        }
    };
    hs_a75225vlNs.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_tan.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat);
    };
    hs_zdctan125vlNu.evaluateOnce = function () {
        if (hs_a75225vlNs.notEvaluated) {
            return hs_a75225vlNs.hscall();
        } else {
            return hs_a75225vlNs;
        }
    };
    hs_a75325vlNw.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_cos.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat);
    };
    hs_zdccos125vlNy.evaluateOnce = function () {
        if (hs_a75325vlNw.notEvaluated) {
            return hs_a75325vlNw.hscall();
        } else {
            return hs_a75325vlNw;
        }
    };
    hs_a75425vlNA.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_asin.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat);
    };
    hs_zdcasin125vlNC.evaluateOnce = function () {
        if (hs_a75425vlNA.notEvaluated) {
            return hs_a75425vlNA.hscall();
        } else {
            return hs_a75425vlNA;
        }
    };
    hs_a75525vlNE.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_atan.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat);
    };
    hs_zdcatan325vlNG.evaluateOnce = function () {
        if (hs_a75525vlNE.notEvaluated) {
            return hs_a75525vlNE.hscall();
        } else {
            return hs_a75525vlNE;
        }
    };
    hs_a75625vlNI.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_acos.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat);
    };
    hs_zdcacos125vlNK.evaluateOnce = function () {
        if (hs_a75625vlNI.notEvaluated) {
            return hs_a75625vlNI.hscall();
        } else {
            return hs_a75625vlNI;
        }
    };
    hs_a75725vlNM.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_sinh.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat);
    };
    hs_zdcsinh125vlNO.evaluateOnce = function () {
        if (hs_a75725vlNM.notEvaluated) {
            return hs_a75725vlNM.hscall();
        } else {
            return hs_a75725vlNM;
        }
    };
    hs_a75825vlNQ.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_tanh.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat);
    };
    hs_zdctanh125vlNS.evaluateOnce = function () {
        if (hs_a75825vlNQ.notEvaluated) {
            return hs_a75825vlNQ.hscall();
        } else {
            return hs_a75825vlNQ;
        }
    };
    hs_a75925vlNU.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_cosh.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat);
    };
    hs_zdccosh125vlNW.evaluateOnce = function () {
        if (hs_a75925vlNU.notEvaluated) {
            return hs_a75925vlNU.hscall();
        } else {
            return hs_a75925vlNU;
        }
    };
    hs_a76025vlNY.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_asinh.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat);
    };
    hs_zdcasinh125vlO0.evaluateOnce = function () {
        if (hs_a76025vlNY.notEvaluated) {
            return hs_a76025vlNY.hscall();
        } else {
            return hs_a76025vlNY;
        }
    };
    hs_a76125vlO2.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_atanh.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat);
    };
    hs_zdcatanh125vlO4.evaluateOnce = function () {
        if (hs_a76125vlO2.notEvaluated) {
            return hs_a76125vlO2.hscall();
        } else {
            return hs_a76125vlO2;
        }
    };
    hs_a76225vlO6.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_acosh.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat);
    };
    hs_zdcacosh125vlO8.evaluateOnce = function () {
        if (hs_a76225vlO6.notEvaluated) {
            return hs_a76225vlO6.hscall();
        } else {
            return hs_a76225vlO6;
        }
    };
    hs_a76325vlOa.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zs.hscall($hs.modules.GHCziFloat.hs_zdfFractionalFloat);
    };
    hs_zdczs125vlOc.evaluateOnce = function () {
        if (hs_a76325vlOa.notEvaluated) {
            return hs_a76325vlOa.hscall();
        } else {
            return hs_a76325vlOa;
        }
    };
    hs_a76425vlOe.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_recip.hscall($hs.modules.GHCziFloat.hs_zdfFractionalFloat);
    };
    hs_zdcrecip125vlOg.evaluateOnce = function () {
        if (hs_a76425vlOe.notEvaluated) {
            return hs_a76425vlOe.hscall();
        } else {
            return hs_a76425vlOe;
        }
    };
    hs_a76525vlOi.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_fromRational.hscall($hs.modules.GHCziFloat.hs_zdfFractionalFloat);
    };
    hs_zdcfromRational125vlOk.evaluateOnce = function () {
        if (hs_a76525vlOi.notEvaluated) {
            return hs_a76525vlOi.hscall();
        } else {
            return hs_a76525vlOi;
        }
    };
    hs_a76625vlOm.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziFloat.hs_zdfRealFloat);
    };
    hs_zdctoRational1125vlOo.evaluateOnce = function () {
        if (hs_a76625vlOm.notEvaluated) {
            return hs_a76625vlOm.hscall();
        } else {
            return hs_a76625vlOm;
        }
    };
    hs_a76725vlOq.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableFloat);
    };
    hs_zdcsizzeOf1125vlOs.evaluateOnce = function () {
        if (hs_a76725vlOq.notEvaluated) {
            return hs_a76725vlOq.hscall();
        } else {
            return hs_a76725vlOq;
        }
    };
    hs_a76825vlOu.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableFloat);
    };
    hs_zdcalignment1125vlOw.evaluateOnce = function () {
        if (hs_a76825vlOu.notEvaluated) {
            return hs_a76825vlOu.hscall();
        } else {
            return hs_a76825vlOu;
        }
    };
    hs_a76925vlOy.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableFloat);
    };
    hs_zdcpeekElemOff1125vlOA.evaluateOnce = function () {
        if (hs_a76925vlOy.notEvaluated) {
            return hs_a76925vlOy.hscall();
        } else {
            return hs_a76925vlOy;
        }
    };
    hs_a77025vlOC.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableFloat);
    };
    hs_zdcpokeElemOff1125vlOE.evaluateOnce = function () {
        if (hs_a77025vlOC.notEvaluated) {
            return hs_a77025vlOC.hscall();
        } else {
            return hs_a77025vlOC;
        }
    };
    hs_a77125vlOG.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableFloat);
    };
    hs_zdcpeekByteOff1125vlOI.evaluateOnce = function () {
        if (hs_a77125vlOG.notEvaluated) {
            return hs_a77125vlOG.hscall();
        } else {
            return hs_a77125vlOG;
        }
    };
    hs_a77225vlOK.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableFloat);
    };
    hs_zdcpokeByteOff1125vlOM.evaluateOnce = function () {
        if (hs_a77225vlOK.notEvaluated) {
            return hs_a77225vlOK.hscall();
        } else {
            return hs_a77225vlOK;
        }
    };
    hs_a77325vlOO.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableFloat);
    };
    hs_zdcpeek1125vlOQ.evaluateOnce = function () {
        if (hs_a77325vlOO.notEvaluated) {
            return hs_a77325vlOO.hscall();
        } else {
            return hs_a77325vlOO;
        }
    };
    hs_a77425vlOS.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableFloat);
    };
    hs_zdcpoke1125vlOU.evaluateOnce = function () {
        if (hs_a77425vlOS.notEvaluated) {
            return hs_a77425vlOS.hscall();
        } else {
            return hs_a77425vlOS;
        }
    };
    this.hs_zdfStorableCFloat.data = [hs_a76725vlOq, hs_a76825vlOu, hs_a76925vlOy, hs_a77025vlOC, hs_a77125vlOG, hs_a77225vlOK, hs_a77325vlOO, hs_a77425vlOS];
    hs_a77525vlOW.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziFloat.hs_zdfEnumFloat);
    };
    hs_zdcsucc1125vlOY.evaluateOnce = function () {
        if (hs_a77525vlOW.notEvaluated) {
            return hs_a77525vlOW.hscall();
        } else {
            return hs_a77525vlOW;
        }
    };
    hs_a77625vlP0.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziFloat.hs_zdfEnumFloat);
    };
    hs_zdcpred1125vlP2.evaluateOnce = function () {
        if (hs_a77625vlP0.notEvaluated) {
            return hs_a77625vlP0.hscall();
        } else {
            return hs_a77625vlP0;
        }
    };
    hs_a77725vlP4.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziFloat.hs_zdfEnumFloat);
    };
    hs_zdctoEnum1125vlP6.evaluateOnce = function () {
        if (hs_a77725vlP4.notEvaluated) {
            return hs_a77725vlP4.hscall();
        } else {
            return hs_a77725vlP4;
        }
    };
    hs_a77825vlP8.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziFloat.hs_zdfEnumFloat);
    };
    hs_zdcfromEnum1125vlPa.evaluateOnce = function () {
        if (hs_a77825vlP8.notEvaluated) {
            return hs_a77825vlP8.hscall();
        } else {
            return hs_a77825vlP8;
        }
    };
    hs_a77925vlPc.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziFloat.hs_zdfEnumFloat);
    };
    hs_zdcenumFrom1125vlPe.evaluateOnce = function () {
        if (hs_a77925vlPc.notEvaluated) {
            return hs_a77925vlPc.hscall();
        } else {
            return hs_a77925vlPc;
        }
    };
    hs_a78025vlPg.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziFloat.hs_zdfEnumFloat);
    };
    hs_zdcenumFromThen1125vlPi.evaluateOnce = function () {
        if (hs_a78025vlPg.notEvaluated) {
            return hs_a78025vlPg.hscall();
        } else {
            return hs_a78025vlPg;
        }
    };
    hs_a78125vlPk.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziFloat.hs_zdfEnumFloat);
    };
    hs_zdcenumFromTo1125vlPm.evaluateOnce = function () {
        if (hs_a78125vlPk.notEvaluated) {
            return hs_a78125vlPk.hscall();
        } else {
            return hs_a78125vlPk;
        }
    };
    hs_a78225vlPo.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziFloat.hs_zdfEnumFloat);
    };
    hs_zdcenumFromThenTo1125vlPq.evaluateOnce = function () {
        if (hs_a78225vlPo.notEvaluated) {
            return hs_a78225vlPo.hscall();
        } else {
            return hs_a78225vlPo;
        }
    };
    this.hs_zdfEnumCFloat.data = [hs_a77525vlOW, hs_a77625vlP0, hs_a77725vlP4, hs_a77825vlP8, hs_a77925vlPc, hs_a78025vlPg, hs_a78125vlPk, hs_a78225vlPo];
    hs_a78325vlPs.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat);
    };
    hs_zdczp1125vlPu.evaluateOnce = function () {
        if (hs_a78325vlPs.notEvaluated) {
            return hs_a78325vlPs.hscall();
        } else {
            return hs_a78325vlPs;
        }
    };
    hs_a78425vlPw.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat);
    };
    hs_zdczt1125vlPy.evaluateOnce = function () {
        if (hs_a78425vlPw.notEvaluated) {
            return hs_a78425vlPw.hscall();
        } else {
            return hs_a78425vlPw;
        }
    };
    hs_a78525vlPA.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat);
    };
    hs_zdczm1125vlPC.evaluateOnce = function () {
        if (hs_a78525vlPA.notEvaluated) {
            return hs_a78525vlPA.hscall();
        } else {
            return hs_a78525vlPA;
        }
    };
    hs_a78625vlPE.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat);
    };
    hs_zdcnegate1125vlPG.evaluateOnce = function () {
        if (hs_a78625vlPE.notEvaluated) {
            return hs_a78625vlPE.hscall();
        } else {
            return hs_a78625vlPE;
        }
    };
    hs_a78725vlPI.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat);
    };
    hs_zdcabs1125vlPK.evaluateOnce = function () {
        if (hs_a78725vlPI.notEvaluated) {
            return hs_a78725vlPI.hscall();
        } else {
            return hs_a78725vlPI;
        }
    };
    hs_a78825vlPM.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat);
    };
    hs_zdcsignum1125vlPO.evaluateOnce = function () {
        if (hs_a78825vlPM.notEvaluated) {
            return hs_a78825vlPM.hscall();
        } else {
            return hs_a78825vlPM;
        }
    };
    hs_a78925vlPQ.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat);
    };
    hs_zdcfromInteger1125vlPS.evaluateOnce = function () {
        if (hs_a78925vlPQ.notEvaluated) {
            return hs_a78925vlPQ.hscall();
        } else {
            return hs_a78925vlPQ;
        }
    };
    hs_a79025vlPU.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziClasses.hs_zdfOrdFloat);
    };
    hs_zdccompare1125vlPW.evaluateOnce = function () {
        if (hs_a79025vlPU.notEvaluated) {
            return hs_a79025vlPU.hscall();
        } else {
            return hs_a79025vlPU;
        }
    };
    hs_a79125vlPY.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdFloat);
    };
    hs_zdczl1125vlQ0.evaluateOnce = function () {
        if (hs_a79125vlPY.notEvaluated) {
            return hs_a79125vlPY.hscall();
        } else {
            return hs_a79125vlPY;
        }
    };
    hs_a79225vlQ2.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdFloat);
    };
    hs_zdczgze1125vlQ4.evaluateOnce = function () {
        if (hs_a79225vlQ2.notEvaluated) {
            return hs_a79225vlQ2.hscall();
        } else {
            return hs_a79225vlQ2;
        }
    };
    hs_a79325vlQ6.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdFloat);
    };
    hs_zdczg1125vlQ8.evaluateOnce = function () {
        if (hs_a79325vlQ6.notEvaluated) {
            return hs_a79325vlQ6.hscall();
        } else {
            return hs_a79325vlQ6;
        }
    };
    hs_a79425vlQa.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdFloat);
    };
    hs_zdczlze1125vlQc.evaluateOnce = function () {
        if (hs_a79425vlQa.notEvaluated) {
            return hs_a79425vlQa.hscall();
        } else {
            return hs_a79425vlQa;
        }
    };
    hs_a79525vlQe.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziClasses.hs_zdfOrdFloat);
    };
    hs_zdcmax1125vlQg.evaluateOnce = function () {
        if (hs_a79525vlQe.notEvaluated) {
            return hs_a79525vlQe.hscall();
        } else {
            return hs_a79525vlQe;
        }
    };
    hs_a79625vlQi.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziClasses.hs_zdfOrdFloat);
    };
    hs_zdcmin1125vlQk.evaluateOnce = function () {
        if (hs_a79625vlQi.notEvaluated) {
            return hs_a79625vlQi.hscall();
        } else {
            return hs_a79625vlQi;
        }
    };
    hs_a79725vlQm.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqFloat);
    };
    hs_zdczeze1125vlQo.evaluateOnce = function () {
        if (hs_a79725vlQm.notEvaluated) {
            return hs_a79725vlQm.hscall();
        } else {
            return hs_a79725vlQm;
        }
    };
    hs_a79825vlQq.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziClasses.hs_zdfEqFloat);
    };
    hs_zdczsze1125vlQs.evaluateOnce = function () {
        if (hs_a79825vlQq.notEvaluated) {
            return hs_a79825vlQq.hscall();
        } else {
            return hs_a79825vlQq;
        }
    };
    this.hs_zdfEqCFloat.data = [hs_a79725vlQm, hs_a79825vlQq];
    this.hs_zdfOrdCFloat.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCFloat, hs_a79025vlPU, hs_a79125vlPY, hs_a79225vlQ2, hs_a79325vlQ6, hs_a79425vlQa, hs_a79525vlQe, hs_a79625vlQi];
    this.hs_zdfNumCFloat.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCFloat, $hs.modules.ForeignziCziTypes.hs_zdfShowCFloat, hs_a78325vlPs, hs_a78425vlPw, hs_a78525vlPA, hs_a78625vlPE, hs_a78725vlPI, hs_a78825vlPM, hs_a78925vlPQ];
    this.hs_zdfRealCFloat.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCFloat, $hs.modules.ForeignziCziTypes.hs_zdfOrdCFloat, hs_a76625vlOm];
    this.hs_zdfFractionalCFloat.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCFloat, hs_a76325vlOa, hs_a76425vlOe, hs_a76525vlOi];
    this.hs_zdfFloatingCFloat.data = [$hs.modules.ForeignziCziTypes.hs_zdfFractionalCFloat, hs_a74525vlN0, hs_a74625vlN4, hs_a74725vlN8, hs_a74825vlNc, hs_a74925vlNg, hs_a75025vlNk, hs_a75125vlNo, hs_a75225vlNs, hs_a75325vlNw, hs_a75425vlNA, hs_a75525vlNE, hs_a75625vlNI, hs_a75725vlNM, hs_a75825vlNQ, hs_a75925vlNU, hs_a76025vlNY, hs_a76125vlO2, hs_a76225vlO6];
    this.hs_zdfRealFracCFloat.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealCFloat, $hs.modules.ForeignziCziTypes.hs_zdfFractionalCFloat, hs_a74025vlMG, hs_a74125vlMK, hs_a74225vlMO, hs_a74325vlMS, hs_a74425vlMW];
    this.hs_zdfRealFloatCFloat.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealFracCFloat, $hs.modules.ForeignziCziTypes.hs_zdfFloatingCFloat, hs_a72625vlLM, hs_a72725vlLQ, hs_a72825vlLU, hs_a72925vlLY, hs_a73025vlM2, hs_a73125vlM6, hs_a73225vlMa, hs_a73325vlMe, hs_a73425vlMi, hs_a73525vlMm, hs_a73625vlMq, hs_a73725vlMu, hs_a73825vlMy, hs_a73925vlMC];
    hs_a79925vlQu.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdczizazi825vlQw.evaluateOnce = function () {
        if (hs_a79925vlQu.notEvaluated) {
            return hs_a79925vlQu.hscall();
        } else {
            return hs_a79925vlQu;
        }
    };
    hs_a80025vlQy.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdczizbzi825vlQA.evaluateOnce = function () {
        if (hs_a80025vlQy.notEvaluated) {
            return hs_a80025vlQy.hscall();
        } else {
            return hs_a80025vlQy;
        }
    };
    hs_a80125vlQC.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcxor825vlQE.evaluateOnce = function () {
        if (hs_a80125vlQC.notEvaluated) {
            return hs_a80125vlQC.hscall();
        } else {
            return hs_a80125vlQC;
        }
    };
    hs_a80225vlQG.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdccomplement825vlQI.evaluateOnce = function () {
        if (hs_a80225vlQG.notEvaluated) {
            return hs_a80225vlQG.hscall();
        } else {
            return hs_a80225vlQG;
        }
    };
    hs_a80325vlQK.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcshift825vlQM.evaluateOnce = function () {
        if (hs_a80325vlQK.notEvaluated) {
            return hs_a80325vlQK.hscall();
        } else {
            return hs_a80325vlQK;
        }
    };
    hs_a80425vlQO.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcrotate825vlQQ.evaluateOnce = function () {
        if (hs_a80425vlQO.notEvaluated) {
            return hs_a80425vlQO.hscall();
        } else {
            return hs_a80425vlQO;
        }
    };
    hs_a80525vlQS.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcbit825vlQU.evaluateOnce = function () {
        if (hs_a80525vlQS.notEvaluated) {
            return hs_a80525vlQS.hscall();
        } else {
            return hs_a80525vlQS;
        }
    };
    hs_a80625vlQW.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcsetBit825vlQY.evaluateOnce = function () {
        if (hs_a80625vlQW.notEvaluated) {
            return hs_a80625vlQW.hscall();
        } else {
            return hs_a80625vlQW;
        }
    };
    hs_a80725vlR0.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcclearBit825vlR2.evaluateOnce = function () {
        if (hs_a80725vlR0.notEvaluated) {
            return hs_a80725vlR0.hscall();
        } else {
            return hs_a80725vlR0;
        }
    };
    hs_a80825vlR4.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdccomplementBit825vlR6.evaluateOnce = function () {
        if (hs_a80825vlR4.notEvaluated) {
            return hs_a80825vlR4.hscall();
        } else {
            return hs_a80825vlR4;
        }
    };
    hs_a80925vlR8.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdctestBit825vlRa.evaluateOnce = function () {
        if (hs_a80925vlR8.notEvaluated) {
            return hs_a80925vlR8.hscall();
        } else {
            return hs_a80925vlR8;
        }
    };
    hs_a81025vlRc.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcbitSizze825vlRe.evaluateOnce = function () {
        if (hs_a81025vlRc.notEvaluated) {
            return hs_a81025vlRc.hscall();
        } else {
            return hs_a81025vlRc;
        }
    };
    hs_a81125vlRg.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcisSigned825vlRi.evaluateOnce = function () {
        if (hs_a81125vlRg.notEvaluated) {
            return hs_a81125vlRg.hscall();
        } else {
            return hs_a81125vlRg;
        }
    };
    hs_a81225vlRk.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcshiftL825vlRm.evaluateOnce = function () {
        if (hs_a81225vlRk.notEvaluated) {
            return hs_a81225vlRk.hscall();
        } else {
            return hs_a81225vlRk;
        }
    };
    hs_a81325vlRo.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcshiftR825vlRq.evaluateOnce = function () {
        if (hs_a81325vlRo.notEvaluated) {
            return hs_a81325vlRo.hscall();
        } else {
            return hs_a81325vlRo;
        }
    };
    hs_a81425vlRs.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcrotateL825vlRu.evaluateOnce = function () {
        if (hs_a81425vlRs.notEvaluated) {
            return hs_a81425vlRs.hscall();
        } else {
            return hs_a81425vlRs;
        }
    };
    hs_a81525vlRw.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcrotateR825vlRy.evaluateOnce = function () {
        if (hs_a81525vlRw.notEvaluated) {
            return hs_a81525vlRw.hscall();
        } else {
            return hs_a81525vlRw;
        }
    };
    hs_a81625vlRA.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcquot825vlRC.evaluateOnce = function () {
        if (hs_a81625vlRA.notEvaluated) {
            return hs_a81625vlRA.hscall();
        } else {
            return hs_a81625vlRA;
        }
    };
    hs_a81725vlRE.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcrem825vlRG.evaluateOnce = function () {
        if (hs_a81725vlRE.notEvaluated) {
            return hs_a81725vlRE.hscall();
        } else {
            return hs_a81725vlRE;
        }
    };
    hs_a81825vlRI.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcdiv825vlRK.evaluateOnce = function () {
        if (hs_a81825vlRI.notEvaluated) {
            return hs_a81825vlRI.hscall();
        } else {
            return hs_a81825vlRI;
        }
    };
    hs_a81925vlRM.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcmod825vlRO.evaluateOnce = function () {
        if (hs_a81925vlRM.notEvaluated) {
            return hs_a81925vlRM.hscall();
        } else {
            return hs_a81925vlRM;
        }
    };
    hs_a82025vlRQ.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcquotRem825vlRS.evaluateOnce = function () {
        if (hs_a82025vlRQ.notEvaluated) {
            return hs_a82025vlRQ.hscall();
        } else {
            return hs_a82025vlRQ;
        }
    };
    hs_a82125vlRU.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcdivMod825vlRW.evaluateOnce = function () {
        if (hs_a82125vlRU.notEvaluated) {
            return hs_a82125vlRU.hscall();
        } else {
            return hs_a82125vlRU;
        }
    };
    hs_a82225vlRY.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdctoInteger825vlS0.evaluateOnce = function () {
        if (hs_a82225vlRY.notEvaluated) {
            return hs_a82225vlRY.hscall();
        } else {
            return hs_a82225vlRY;
        }
    };
    hs_a82325vlS2.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord64);
    };
    hs_zdcminBound825vlS4.evaluateOnce = function () {
        if (hs_a82325vlS2.notEvaluated) {
            return hs_a82325vlS2.hscall();
        } else {
            return hs_a82325vlS2;
        }
    };
    hs_a82425vlS6.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord64);
    };
    hs_zdcmaxBound825vlS8.evaluateOnce = function () {
        if (hs_a82425vlS6.notEvaluated) {
            return hs_a82425vlS6.hscall();
        } else {
            return hs_a82425vlS6;
        }
    };
    this.hs_zdfBoundedCULLong.data = [hs_a82325vlS2, hs_a82425vlS6];
    hs_a82525vlSa.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziWord.hs_zdfRealWord64);
    };
    hs_zdctoRational1225vlSc.evaluateOnce = function () {
        if (hs_a82525vlSa.notEvaluated) {
            return hs_a82525vlSa.hscall();
        } else {
            return hs_a82525vlSa;
        }
    };
    hs_a82625vlSe.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcsizzeOf1225vlSg.evaluateOnce = function () {
        if (hs_a82625vlSe.notEvaluated) {
            return hs_a82625vlSe.hscall();
        } else {
            return hs_a82625vlSe;
        }
    };
    hs_a82725vlSi.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcalignment1225vlSk.evaluateOnce = function () {
        if (hs_a82725vlSi.notEvaluated) {
            return hs_a82725vlSi.hscall();
        } else {
            return hs_a82725vlSi;
        }
    };
    hs_a82825vlSm.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpeekElemOff1225vlSo.evaluateOnce = function () {
        if (hs_a82825vlSm.notEvaluated) {
            return hs_a82825vlSm.hscall();
        } else {
            return hs_a82825vlSm;
        }
    };
    hs_a82925vlSq.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpokeElemOff1225vlSs.evaluateOnce = function () {
        if (hs_a82925vlSq.notEvaluated) {
            return hs_a82925vlSq.hscall();
        } else {
            return hs_a82925vlSq;
        }
    };
    hs_a83025vlSu.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpeekByteOff1225vlSw.evaluateOnce = function () {
        if (hs_a83025vlSu.notEvaluated) {
            return hs_a83025vlSu.hscall();
        } else {
            return hs_a83025vlSu;
        }
    };
    hs_a83125vlSy.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpokeByteOff1225vlSA.evaluateOnce = function () {
        if (hs_a83125vlSy.notEvaluated) {
            return hs_a83125vlSy.hscall();
        } else {
            return hs_a83125vlSy;
        }
    };
    hs_a83225vlSC.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpeek1225vlSE.evaluateOnce = function () {
        if (hs_a83225vlSC.notEvaluated) {
            return hs_a83225vlSC.hscall();
        } else {
            return hs_a83225vlSC;
        }
    };
    hs_a83325vlSG.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpoke1225vlSI.evaluateOnce = function () {
        if (hs_a83325vlSG.notEvaluated) {
            return hs_a83325vlSG.hscall();
        } else {
            return hs_a83325vlSG;
        }
    };
    this.hs_zdfStorableCULLong.data = [hs_a82625vlSe, hs_a82725vlSi, hs_a82825vlSm, hs_a82925vlSq, hs_a83025vlSu, hs_a83125vlSy, hs_a83225vlSC, hs_a83325vlSG];
    hs_a83425vlSK.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcsucc1225vlSM.evaluateOnce = function () {
        if (hs_a83425vlSK.notEvaluated) {
            return hs_a83425vlSK.hscall();
        } else {
            return hs_a83425vlSK;
        }
    };
    hs_a83525vlSO.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcpred1225vlSQ.evaluateOnce = function () {
        if (hs_a83525vlSO.notEvaluated) {
            return hs_a83525vlSO.hscall();
        } else {
            return hs_a83525vlSO;
        }
    };
    hs_a83625vlSS.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdctoEnum1225vlSU.evaluateOnce = function () {
        if (hs_a83625vlSS.notEvaluated) {
            return hs_a83625vlSS.hscall();
        } else {
            return hs_a83625vlSS;
        }
    };
    hs_a83725vlSW.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcfromEnum1225vlSY.evaluateOnce = function () {
        if (hs_a83725vlSW.notEvaluated) {
            return hs_a83725vlSW.hscall();
        } else {
            return hs_a83725vlSW;
        }
    };
    hs_a83825vlT0.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcenumFrom1225vlT2.evaluateOnce = function () {
        if (hs_a83825vlT0.notEvaluated) {
            return hs_a83825vlT0.hscall();
        } else {
            return hs_a83825vlT0;
        }
    };
    hs_a83925vlT4.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcenumFromThen1225vlT6.evaluateOnce = function () {
        if (hs_a83925vlT4.notEvaluated) {
            return hs_a83925vlT4.hscall();
        } else {
            return hs_a83925vlT4;
        }
    };
    hs_a84025vlT8.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcenumFromTo1225vlTa.evaluateOnce = function () {
        if (hs_a84025vlT8.notEvaluated) {
            return hs_a84025vlT8.hscall();
        } else {
            return hs_a84025vlT8;
        }
    };
    hs_a84125vlTc.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcenumFromThenTo1225vlTe.evaluateOnce = function () {
        if (hs_a84125vlTc.notEvaluated) {
            return hs_a84125vlTc.hscall();
        } else {
            return hs_a84125vlTc;
        }
    };
    this.hs_zdfEnumCULLong.data = [hs_a83425vlSK, hs_a83525vlSO, hs_a83625vlSS, hs_a83725vlSW, hs_a83825vlT0, hs_a83925vlT4, hs_a84025vlT8, hs_a84125vlTc];
    hs_a84225vlTg.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdczp1225vlTi.evaluateOnce = function () {
        if (hs_a84225vlTg.notEvaluated) {
            return hs_a84225vlTg.hscall();
        } else {
            return hs_a84225vlTg;
        }
    };
    hs_a84325vlTk.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdczt1225vlTm.evaluateOnce = function () {
        if (hs_a84325vlTk.notEvaluated) {
            return hs_a84325vlTk.hscall();
        } else {
            return hs_a84325vlTk;
        }
    };
    hs_a84425vlTo.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdczm1225vlTq.evaluateOnce = function () {
        if (hs_a84425vlTo.notEvaluated) {
            return hs_a84425vlTo.hscall();
        } else {
            return hs_a84425vlTo;
        }
    };
    hs_a84525vlTs.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdcnegate1225vlTu.evaluateOnce = function () {
        if (hs_a84525vlTs.notEvaluated) {
            return hs_a84525vlTs.hscall();
        } else {
            return hs_a84525vlTs;
        }
    };
    hs_a84625vlTw.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdcabs1225vlTy.evaluateOnce = function () {
        if (hs_a84625vlTw.notEvaluated) {
            return hs_a84625vlTw.hscall();
        } else {
            return hs_a84625vlTw;
        }
    };
    hs_a84725vlTA.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdcsignum1225vlTC.evaluateOnce = function () {
        if (hs_a84725vlTA.notEvaluated) {
            return hs_a84725vlTA.hscall();
        } else {
            return hs_a84725vlTA;
        }
    };
    hs_a84825vlTE.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdcfromInteger1225vlTG.evaluateOnce = function () {
        if (hs_a84825vlTE.notEvaluated) {
            return hs_a84825vlTE.hscall();
        } else {
            return hs_a84825vlTE;
        }
    };
    hs_a84925vlTI.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdccompare1225vlTK.evaluateOnce = function () {
        if (hs_a84925vlTI.notEvaluated) {
            return hs_a84925vlTI.hscall();
        } else {
            return hs_a84925vlTI;
        }
    };
    hs_a85025vlTM.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdczl1225vlTO.evaluateOnce = function () {
        if (hs_a85025vlTM.notEvaluated) {
            return hs_a85025vlTM.hscall();
        } else {
            return hs_a85025vlTM;
        }
    };
    hs_a85125vlTQ.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdczgze1225vlTS.evaluateOnce = function () {
        if (hs_a85125vlTQ.notEvaluated) {
            return hs_a85125vlTQ.hscall();
        } else {
            return hs_a85125vlTQ;
        }
    };
    hs_a85225vlTU.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdczg1225vlTW.evaluateOnce = function () {
        if (hs_a85225vlTU.notEvaluated) {
            return hs_a85225vlTU.hscall();
        } else {
            return hs_a85225vlTU;
        }
    };
    hs_a85325vlTY.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdczlze1225vlU0.evaluateOnce = function () {
        if (hs_a85325vlTY.notEvaluated) {
            return hs_a85325vlTY.hscall();
        } else {
            return hs_a85325vlTY;
        }
    };
    hs_a85425vlU2.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdcmax1225vlU4.evaluateOnce = function () {
        if (hs_a85425vlU2.notEvaluated) {
            return hs_a85425vlU2.hscall();
        } else {
            return hs_a85425vlU2;
        }
    };
    hs_a85525vlU6.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdcmin1225vlU8.evaluateOnce = function () {
        if (hs_a85525vlU6.notEvaluated) {
            return hs_a85525vlU6.hscall();
        } else {
            return hs_a85525vlU6;
        }
    };
    hs_a85625vlUa.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord64);
    };
    hs_zdczeze1225vlUc.evaluateOnce = function () {
        if (hs_a85625vlUa.notEvaluated) {
            return hs_a85625vlUa.hscall();
        } else {
            return hs_a85625vlUa;
        }
    };
    hs_a85725vlUe.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord64);
    };
    hs_zdczsze1225vlUg.evaluateOnce = function () {
        if (hs_a85725vlUe.notEvaluated) {
            return hs_a85725vlUe.hscall();
        } else {
            return hs_a85725vlUe;
        }
    };
    this.hs_zdfEqCULLong.data = [hs_a85625vlUa, hs_a85725vlUe];
    this.hs_zdfOrdCULLong.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCULLong, hs_a84925vlTI, hs_a85025vlTM, hs_a85125vlTQ, hs_a85225vlTU, hs_a85325vlTY, hs_a85425vlU2, hs_a85525vlU6];
    this.hs_zdfNumCULLong.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCULLong, $hs.modules.ForeignziCziTypes.hs_zdfShowCULLong, hs_a84225vlTg, hs_a84325vlTk, hs_a84425vlTo, hs_a84525vlTs, hs_a84625vlTw, hs_a84725vlTA, hs_a84825vlTE];
    this.hs_zdfRealCULLong.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCULLong, $hs.modules.ForeignziCziTypes.hs_zdfOrdCULLong, hs_a82525vlSa];
    this.hs_zdfIntegralCULLong.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealCULLong, $hs.modules.ForeignziCziTypes.hs_zdfEnumCULLong, hs_a81625vlRA, hs_a81725vlRE, hs_a81825vlRI, hs_a81925vlRM, hs_a82025vlRQ, hs_a82125vlRU, hs_a82225vlRY];
    this.hs_zdfBitsCULLong.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCULLong, hs_a79925vlQu, hs_a80025vlQy, hs_a80125vlQC, hs_a80225vlQG, hs_a80325vlQK, hs_a80425vlQO, hs_a80525vlQS, hs_a80625vlQW, hs_a80725vlR0, hs_a80825vlR4, hs_a80925vlR8, hs_a81025vlRc, hs_a81125vlRg, hs_a81225vlRk, hs_a81325vlRo, hs_a81425vlRs, hs_a81525vlRw];
    hs_a85825vlUi.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdczizazi925vlUk.evaluateOnce = function () {
        if (hs_a85825vlUi.notEvaluated) {
            return hs_a85825vlUi.hscall();
        } else {
            return hs_a85825vlUi;
        }
    };
    hs_a85925vlUm.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdczizbzi925vlUo.evaluateOnce = function () {
        if (hs_a85925vlUm.notEvaluated) {
            return hs_a85925vlUm.hscall();
        } else {
            return hs_a85925vlUm;
        }
    };
    hs_a86025vlUq.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcxor925vlUs.evaluateOnce = function () {
        if (hs_a86025vlUq.notEvaluated) {
            return hs_a86025vlUq.hscall();
        } else {
            return hs_a86025vlUq;
        }
    };
    hs_a86125vlUu.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdccomplement925vlUw.evaluateOnce = function () {
        if (hs_a86125vlUu.notEvaluated) {
            return hs_a86125vlUu.hscall();
        } else {
            return hs_a86125vlUu;
        }
    };
    hs_a86225vlUy.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcshift925vlUA.evaluateOnce = function () {
        if (hs_a86225vlUy.notEvaluated) {
            return hs_a86225vlUy.hscall();
        } else {
            return hs_a86225vlUy;
        }
    };
    hs_a86325vlUC.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcrotate925vlUE.evaluateOnce = function () {
        if (hs_a86325vlUC.notEvaluated) {
            return hs_a86325vlUC.hscall();
        } else {
            return hs_a86325vlUC;
        }
    };
    hs_a86425vlUG.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcbit925vlUI.evaluateOnce = function () {
        if (hs_a86425vlUG.notEvaluated) {
            return hs_a86425vlUG.hscall();
        } else {
            return hs_a86425vlUG;
        }
    };
    hs_a86525vlUK.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcsetBit925vlUM.evaluateOnce = function () {
        if (hs_a86525vlUK.notEvaluated) {
            return hs_a86525vlUK.hscall();
        } else {
            return hs_a86525vlUK;
        }
    };
    hs_a86625vlUO.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcclearBit925vlUQ.evaluateOnce = function () {
        if (hs_a86625vlUO.notEvaluated) {
            return hs_a86625vlUO.hscall();
        } else {
            return hs_a86625vlUO;
        }
    };
    hs_a86725vlUS.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdccomplementBit925vlUU.evaluateOnce = function () {
        if (hs_a86725vlUS.notEvaluated) {
            return hs_a86725vlUS.hscall();
        } else {
            return hs_a86725vlUS;
        }
    };
    hs_a86825vlUW.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdctestBit925vlUY.evaluateOnce = function () {
        if (hs_a86825vlUW.notEvaluated) {
            return hs_a86825vlUW.hscall();
        } else {
            return hs_a86825vlUW;
        }
    };
    hs_a86925vlV0.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcbitSizze925vlV2.evaluateOnce = function () {
        if (hs_a86925vlV0.notEvaluated) {
            return hs_a86925vlV0.hscall();
        } else {
            return hs_a86925vlV0;
        }
    };
    hs_a87025vlV4.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcisSigned925vlV6.evaluateOnce = function () {
        if (hs_a87025vlV4.notEvaluated) {
            return hs_a87025vlV4.hscall();
        } else {
            return hs_a87025vlV4;
        }
    };
    hs_a87125vlV8.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcshiftL925vlVa.evaluateOnce = function () {
        if (hs_a87125vlV8.notEvaluated) {
            return hs_a87125vlV8.hscall();
        } else {
            return hs_a87125vlV8;
        }
    };
    hs_a87225vlVc.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcshiftR925vlVe.evaluateOnce = function () {
        if (hs_a87225vlVc.notEvaluated) {
            return hs_a87225vlVc.hscall();
        } else {
            return hs_a87225vlVc;
        }
    };
    hs_a87325vlVg.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcrotateL925vlVi.evaluateOnce = function () {
        if (hs_a87325vlVg.notEvaluated) {
            return hs_a87325vlVg.hscall();
        } else {
            return hs_a87325vlVg;
        }
    };
    hs_a87425vlVk.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcrotateR925vlVm.evaluateOnce = function () {
        if (hs_a87425vlVk.notEvaluated) {
            return hs_a87425vlVk.hscall();
        } else {
            return hs_a87425vlVk;
        }
    };
    hs_a87525vlVo.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64);
    };
    hs_zdcquot925vlVq.evaluateOnce = function () {
        if (hs_a87525vlVo.notEvaluated) {
            return hs_a87525vlVo.hscall();
        } else {
            return hs_a87525vlVo;
        }
    };
    hs_a87625vlVs.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64);
    };
    hs_zdcrem925vlVu.evaluateOnce = function () {
        if (hs_a87625vlVs.notEvaluated) {
            return hs_a87625vlVs.hscall();
        } else {
            return hs_a87625vlVs;
        }
    };
    hs_a87725vlVw.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64);
    };
    hs_zdcdiv925vlVy.evaluateOnce = function () {
        if (hs_a87725vlVw.notEvaluated) {
            return hs_a87725vlVw.hscall();
        } else {
            return hs_a87725vlVw;
        }
    };
    hs_a87825vlVA.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64);
    };
    hs_zdcmod925vlVC.evaluateOnce = function () {
        if (hs_a87825vlVA.notEvaluated) {
            return hs_a87825vlVA.hscall();
        } else {
            return hs_a87825vlVA;
        }
    };
    hs_a87925vlVE.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64);
    };
    hs_zdcquotRem925vlVG.evaluateOnce = function () {
        if (hs_a87925vlVE.notEvaluated) {
            return hs_a87925vlVE.hscall();
        } else {
            return hs_a87925vlVE;
        }
    };
    hs_a88025vlVI.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64);
    };
    hs_zdcdivMod925vlVK.evaluateOnce = function () {
        if (hs_a88025vlVI.notEvaluated) {
            return hs_a88025vlVI.hscall();
        } else {
            return hs_a88025vlVI;
        }
    };
    hs_a88125vlVM.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64);
    };
    hs_zdctoInteger925vlVO.evaluateOnce = function () {
        if (hs_a88125vlVM.notEvaluated) {
            return hs_a88125vlVM.hscall();
        } else {
            return hs_a88125vlVM;
        }
    };
    hs_a88225vlVQ.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt64);
    };
    hs_zdcminBound925vlVS.evaluateOnce = function () {
        if (hs_a88225vlVQ.notEvaluated) {
            return hs_a88225vlVQ.hscall();
        } else {
            return hs_a88225vlVQ;
        }
    };
    hs_a88325vlVU.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt64);
    };
    hs_zdcmaxBound925vlVW.evaluateOnce = function () {
        if (hs_a88325vlVU.notEvaluated) {
            return hs_a88325vlVU.hscall();
        } else {
            return hs_a88325vlVU;
        }
    };
    this.hs_zdfBoundedCLLong.data = [hs_a88225vlVQ, hs_a88325vlVU];
    hs_a88425vlVY.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziInt.hs_zdfRealInt64);
    };
    hs_zdctoRational1325vlW0.evaluateOnce = function () {
        if (hs_a88425vlVY.notEvaluated) {
            return hs_a88425vlVY.hscall();
        } else {
            return hs_a88425vlVY;
        }
    };
    hs_a88525vlW2.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcsizzeOf1325vlW4.evaluateOnce = function () {
        if (hs_a88525vlW2.notEvaluated) {
            return hs_a88525vlW2.hscall();
        } else {
            return hs_a88525vlW2;
        }
    };
    hs_a88625vlW6.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcalignment1325vlW8.evaluateOnce = function () {
        if (hs_a88625vlW6.notEvaluated) {
            return hs_a88625vlW6.hscall();
        } else {
            return hs_a88625vlW6;
        }
    };
    hs_a88725vlWa.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcpeekElemOff1325vlWc.evaluateOnce = function () {
        if (hs_a88725vlWa.notEvaluated) {
            return hs_a88725vlWa.hscall();
        } else {
            return hs_a88725vlWa;
        }
    };
    hs_a88825vlWe.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcpokeElemOff1325vlWg.evaluateOnce = function () {
        if (hs_a88825vlWe.notEvaluated) {
            return hs_a88825vlWe.hscall();
        } else {
            return hs_a88825vlWe;
        }
    };
    hs_a88925vlWi.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcpeekByteOff1325vlWk.evaluateOnce = function () {
        if (hs_a88925vlWi.notEvaluated) {
            return hs_a88925vlWi.hscall();
        } else {
            return hs_a88925vlWi;
        }
    };
    hs_a89025vlWm.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcpokeByteOff1325vlWo.evaluateOnce = function () {
        if (hs_a89025vlWm.notEvaluated) {
            return hs_a89025vlWm.hscall();
        } else {
            return hs_a89025vlWm;
        }
    };
    hs_a89125vlWq.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcpeek1325vlWs.evaluateOnce = function () {
        if (hs_a89125vlWq.notEvaluated) {
            return hs_a89125vlWq.hscall();
        } else {
            return hs_a89125vlWq;
        }
    };
    hs_a89225vlWu.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcpoke1325vlWw.evaluateOnce = function () {
        if (hs_a89225vlWu.notEvaluated) {
            return hs_a89225vlWu.hscall();
        } else {
            return hs_a89225vlWu;
        }
    };
    this.hs_zdfStorableCLLong.data = [hs_a88525vlW2, hs_a88625vlW6, hs_a88725vlWa, hs_a88825vlWe, hs_a88925vlWi, hs_a89025vlWm, hs_a89125vlWq, hs_a89225vlWu];
    hs_a89325vlWy.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdcsucc1325vlWA.evaluateOnce = function () {
        if (hs_a89325vlWy.notEvaluated) {
            return hs_a89325vlWy.hscall();
        } else {
            return hs_a89325vlWy;
        }
    };
    hs_a89425vlWC.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdcpred1325vlWE.evaluateOnce = function () {
        if (hs_a89425vlWC.notEvaluated) {
            return hs_a89425vlWC.hscall();
        } else {
            return hs_a89425vlWC;
        }
    };
    hs_a89525vlWG.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdctoEnum1325vlWI.evaluateOnce = function () {
        if (hs_a89525vlWG.notEvaluated) {
            return hs_a89525vlWG.hscall();
        } else {
            return hs_a89525vlWG;
        }
    };
    hs_a89625vlWK.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdcfromEnum1325vlWM.evaluateOnce = function () {
        if (hs_a89625vlWK.notEvaluated) {
            return hs_a89625vlWK.hscall();
        } else {
            return hs_a89625vlWK;
        }
    };
    hs_a89725vlWO.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdcenumFrom1325vlWQ.evaluateOnce = function () {
        if (hs_a89725vlWO.notEvaluated) {
            return hs_a89725vlWO.hscall();
        } else {
            return hs_a89725vlWO;
        }
    };
    hs_a89825vlWS.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdcenumFromThen1325vlWU.evaluateOnce = function () {
        if (hs_a89825vlWS.notEvaluated) {
            return hs_a89825vlWS.hscall();
        } else {
            return hs_a89825vlWS;
        }
    };
    hs_a89925vlWW.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdcenumFromTo1325vlWY.evaluateOnce = function () {
        if (hs_a89925vlWW.notEvaluated) {
            return hs_a89925vlWW.hscall();
        } else {
            return hs_a89925vlWW;
        }
    };
    hs_a90025vlX0.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdcenumFromThenTo1325vlX2.evaluateOnce = function () {
        if (hs_a90025vlX0.notEvaluated) {
            return hs_a90025vlX0.hscall();
        } else {
            return hs_a90025vlX0;
        }
    };
    this.hs_zdfEnumCLLong.data = [hs_a89325vlWy, hs_a89425vlWC, hs_a89525vlWG, hs_a89625vlWK, hs_a89725vlWO, hs_a89825vlWS, hs_a89925vlWW, hs_a90025vlX0];
    hs_a90125vlX4.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdczp1325vlX6.evaluateOnce = function () {
        if (hs_a90125vlX4.notEvaluated) {
            return hs_a90125vlX4.hscall();
        } else {
            return hs_a90125vlX4;
        }
    };
    hs_a90225vlX8.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdczt1325vlXa.evaluateOnce = function () {
        if (hs_a90225vlX8.notEvaluated) {
            return hs_a90225vlX8.hscall();
        } else {
            return hs_a90225vlX8;
        }
    };
    hs_a90325vlXc.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdczm1325vlXe.evaluateOnce = function () {
        if (hs_a90325vlXc.notEvaluated) {
            return hs_a90325vlXc.hscall();
        } else {
            return hs_a90325vlXc;
        }
    };
    hs_a90425vlXg.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdcnegate1325vlXi.evaluateOnce = function () {
        if (hs_a90425vlXg.notEvaluated) {
            return hs_a90425vlXg.hscall();
        } else {
            return hs_a90425vlXg;
        }
    };
    hs_a90525vlXk.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdcabs1325vlXm.evaluateOnce = function () {
        if (hs_a90525vlXk.notEvaluated) {
            return hs_a90525vlXk.hscall();
        } else {
            return hs_a90525vlXk;
        }
    };
    hs_a90625vlXo.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdcsignum1325vlXq.evaluateOnce = function () {
        if (hs_a90625vlXo.notEvaluated) {
            return hs_a90625vlXo.hscall();
        } else {
            return hs_a90625vlXo;
        }
    };
    hs_a90725vlXs.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdcfromInteger1325vlXu.evaluateOnce = function () {
        if (hs_a90725vlXs.notEvaluated) {
            return hs_a90725vlXs.hscall();
        } else {
            return hs_a90725vlXs;
        }
    };
    hs_a90825vlXw.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdccompare1325vlXy.evaluateOnce = function () {
        if (hs_a90825vlXw.notEvaluated) {
            return hs_a90825vlXw.hscall();
        } else {
            return hs_a90825vlXw;
        }
    };
    hs_a90925vlXA.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdczl1325vlXC.evaluateOnce = function () {
        if (hs_a90925vlXA.notEvaluated) {
            return hs_a90925vlXA.hscall();
        } else {
            return hs_a90925vlXA;
        }
    };
    hs_a91025vlXE.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdczgze1325vlXG.evaluateOnce = function () {
        if (hs_a91025vlXE.notEvaluated) {
            return hs_a91025vlXE.hscall();
        } else {
            return hs_a91025vlXE;
        }
    };
    hs_a91125vlXI.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdczg1325vlXK.evaluateOnce = function () {
        if (hs_a91125vlXI.notEvaluated) {
            return hs_a91125vlXI.hscall();
        } else {
            return hs_a91125vlXI;
        }
    };
    hs_a91225vlXM.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdczlze1325vlXO.evaluateOnce = function () {
        if (hs_a91225vlXM.notEvaluated) {
            return hs_a91225vlXM.hscall();
        } else {
            return hs_a91225vlXM;
        }
    };
    hs_a91325vlXQ.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdcmax1325vlXS.evaluateOnce = function () {
        if (hs_a91325vlXQ.notEvaluated) {
            return hs_a91325vlXQ.hscall();
        } else {
            return hs_a91325vlXQ;
        }
    };
    hs_a91425vlXU.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdcmin1325vlXW.evaluateOnce = function () {
        if (hs_a91425vlXU.notEvaluated) {
            return hs_a91425vlXU.hscall();
        } else {
            return hs_a91425vlXU;
        }
    };
    hs_a91525vlXY.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt64);
    };
    hs_zdczeze1325vlY0.evaluateOnce = function () {
        if (hs_a91525vlXY.notEvaluated) {
            return hs_a91525vlXY.hscall();
        } else {
            return hs_a91525vlXY;
        }
    };
    hs_a91625vlY2.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt64);
    };
    hs_zdczsze1325vlY4.evaluateOnce = function () {
        if (hs_a91625vlY2.notEvaluated) {
            return hs_a91625vlY2.hscall();
        } else {
            return hs_a91625vlY2;
        }
    };
    this.hs_zdfEqCLLong.data = [hs_a91525vlXY, hs_a91625vlY2];
    this.hs_zdfOrdCLLong.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCLLong, hs_a90825vlXw, hs_a90925vlXA, hs_a91025vlXE, hs_a91125vlXI, hs_a91225vlXM, hs_a91325vlXQ, hs_a91425vlXU];
    this.hs_zdfNumCLLong.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCLLong, $hs.modules.ForeignziCziTypes.hs_zdfShowCLLong, hs_a90125vlX4, hs_a90225vlX8, hs_a90325vlXc, hs_a90425vlXg, hs_a90525vlXk, hs_a90625vlXo, hs_a90725vlXs];
    this.hs_zdfRealCLLong.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCLLong, $hs.modules.ForeignziCziTypes.hs_zdfOrdCLLong, hs_a88425vlVY];
    this.hs_zdfIntegralCLLong.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealCLLong, $hs.modules.ForeignziCziTypes.hs_zdfEnumCLLong, hs_a87525vlVo, hs_a87625vlVs, hs_a87725vlVw, hs_a87825vlVA, hs_a87925vlVE, hs_a88025vlVI, hs_a88125vlVM];
    this.hs_zdfBitsCLLong.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCLLong, hs_a85825vlUi, hs_a85925vlUm, hs_a86025vlUq, hs_a86125vlUu, hs_a86225vlUy, hs_a86325vlUC, hs_a86425vlUG, hs_a86525vlUK, hs_a86625vlUO, hs_a86725vlUS, hs_a86825vlUW, hs_a86925vlV0, hs_a87025vlV4, hs_a87125vlV8, hs_a87225vlVc, hs_a87325vlVg, hs_a87425vlVk];
    hs_a91725vlY6.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdczizazi1025vlY8.evaluateOnce = function () {
        if (hs_a91725vlY6.notEvaluated) {
            return hs_a91725vlY6.hscall();
        } else {
            return hs_a91725vlY6;
        }
    };
    hs_a91825vlYa.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdczizbzi1025vlYc.evaluateOnce = function () {
        if (hs_a91825vlYa.notEvaluated) {
            return hs_a91825vlYa.hscall();
        } else {
            return hs_a91825vlYa;
        }
    };
    hs_a91925vlYe.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcxor1025vlYg.evaluateOnce = function () {
        if (hs_a91925vlYe.notEvaluated) {
            return hs_a91925vlYe.hscall();
        } else {
            return hs_a91925vlYe;
        }
    };
    hs_a92025vlYi.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdccomplement1025vlYk.evaluateOnce = function () {
        if (hs_a92025vlYi.notEvaluated) {
            return hs_a92025vlYi.hscall();
        } else {
            return hs_a92025vlYi;
        }
    };
    hs_a92125vlYm.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshift1025vlYo.evaluateOnce = function () {
        if (hs_a92125vlYm.notEvaluated) {
            return hs_a92125vlYm.hscall();
        } else {
            return hs_a92125vlYm;
        }
    };
    hs_a92225vlYq.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotate1025vlYs.evaluateOnce = function () {
        if (hs_a92225vlYq.notEvaluated) {
            return hs_a92225vlYq.hscall();
        } else {
            return hs_a92225vlYq;
        }
    };
    hs_a92325vlYu.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcbit1025vlYw.evaluateOnce = function () {
        if (hs_a92325vlYu.notEvaluated) {
            return hs_a92325vlYu.hscall();
        } else {
            return hs_a92325vlYu;
        }
    };
    hs_a92425vlYy.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcsetBit1025vlYA.evaluateOnce = function () {
        if (hs_a92425vlYy.notEvaluated) {
            return hs_a92425vlYy.hscall();
        } else {
            return hs_a92425vlYy;
        }
    };
    hs_a92525vlYC.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcclearBit1025vlYE.evaluateOnce = function () {
        if (hs_a92525vlYC.notEvaluated) {
            return hs_a92525vlYC.hscall();
        } else {
            return hs_a92525vlYC;
        }
    };
    hs_a92625vlYG.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdccomplementBit1025vlYI.evaluateOnce = function () {
        if (hs_a92625vlYG.notEvaluated) {
            return hs_a92625vlYG.hscall();
        } else {
            return hs_a92625vlYG;
        }
    };
    hs_a92725vlYK.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdctestBit1025vlYM.evaluateOnce = function () {
        if (hs_a92725vlYK.notEvaluated) {
            return hs_a92725vlYK.hscall();
        } else {
            return hs_a92725vlYK;
        }
    };
    hs_a92825vlYO.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcbitSizze1025vlYQ.evaluateOnce = function () {
        if (hs_a92825vlYO.notEvaluated) {
            return hs_a92825vlYO.hscall();
        } else {
            return hs_a92825vlYO;
        }
    };
    hs_a92925vlYS.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcisSigned1025vlYU.evaluateOnce = function () {
        if (hs_a92925vlYS.notEvaluated) {
            return hs_a92925vlYS.hscall();
        } else {
            return hs_a92925vlYS;
        }
    };
    hs_a93025vlYW.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshiftL1025vlYY.evaluateOnce = function () {
        if (hs_a93025vlYW.notEvaluated) {
            return hs_a93025vlYW.hscall();
        } else {
            return hs_a93025vlYW;
        }
    };
    hs_a93125vlZ0.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshiftR1025vlZ2.evaluateOnce = function () {
        if (hs_a93125vlZ0.notEvaluated) {
            return hs_a93125vlZ0.hscall();
        } else {
            return hs_a93125vlZ0;
        }
    };
    hs_a93225vlZ4.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotateL1025vlZ6.evaluateOnce = function () {
        if (hs_a93225vlZ4.notEvaluated) {
            return hs_a93225vlZ4.hscall();
        } else {
            return hs_a93225vlZ4;
        }
    };
    hs_a93325vlZ8.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotateR1025vlZa.evaluateOnce = function () {
        if (hs_a93325vlZ8.notEvaluated) {
            return hs_a93325vlZ8.hscall();
        } else {
            return hs_a93325vlZ8;
        }
    };
    hs_a93425vlZc.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcquot1025vlZe.evaluateOnce = function () {
        if (hs_a93425vlZc.notEvaluated) {
            return hs_a93425vlZc.hscall();
        } else {
            return hs_a93425vlZc;
        }
    };
    hs_a93525vlZg.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcrem1025vlZi.evaluateOnce = function () {
        if (hs_a93525vlZg.notEvaluated) {
            return hs_a93525vlZg.hscall();
        } else {
            return hs_a93525vlZg;
        }
    };
    hs_a93625vlZk.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcdiv1025vlZm.evaluateOnce = function () {
        if (hs_a93625vlZk.notEvaluated) {
            return hs_a93625vlZk.hscall();
        } else {
            return hs_a93625vlZk;
        }
    };
    hs_a93725vlZo.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcmod1025vlZq.evaluateOnce = function () {
        if (hs_a93725vlZo.notEvaluated) {
            return hs_a93725vlZo.hscall();
        } else {
            return hs_a93725vlZo;
        }
    };
    hs_a93825vlZs.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcquotRem1025vlZu.evaluateOnce = function () {
        if (hs_a93825vlZs.notEvaluated) {
            return hs_a93825vlZs.hscall();
        } else {
            return hs_a93825vlZs;
        }
    };
    hs_a93925vlZw.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcdivMod1025vlZy.evaluateOnce = function () {
        if (hs_a93925vlZw.notEvaluated) {
            return hs_a93925vlZw.hscall();
        } else {
            return hs_a93925vlZw;
        }
    };
    hs_a94025vlZA.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdctoInteger1025vlZC.evaluateOnce = function () {
        if (hs_a94025vlZA.notEvaluated) {
            return hs_a94025vlZA.hscall();
        } else {
            return hs_a94025vlZA;
        }
    };
    hs_a94125vlZE.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
    };
    hs_zdcminBound1025vlZG.evaluateOnce = function () {
        if (hs_a94125vlZE.notEvaluated) {
            return hs_a94125vlZE.hscall();
        } else {
            return hs_a94125vlZE;
        }
    };
    hs_a94225vlZI.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
    };
    hs_zdcmaxBound1025vlZK.evaluateOnce = function () {
        if (hs_a94225vlZI.notEvaluated) {
            return hs_a94225vlZI.hscall();
        } else {
            return hs_a94225vlZI;
        }
    };
    this.hs_zdfBoundedCULong.data = [hs_a94125vlZE, hs_a94225vlZI];
    hs_a94325vlZM.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziWord.hs_zdfRealWord32);
    };
    hs_zdctoRational1425vlZO.evaluateOnce = function () {
        if (hs_a94325vlZM.notEvaluated) {
            return hs_a94325vlZM.hscall();
        } else {
            return hs_a94325vlZM;
        }
    };
    hs_a94425vlZQ.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcsizzeOf1425vlZS.evaluateOnce = function () {
        if (hs_a94425vlZQ.notEvaluated) {
            return hs_a94425vlZQ.hscall();
        } else {
            return hs_a94425vlZQ;
        }
    };
    hs_a94525vlZU.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcalignment1425vlZW.evaluateOnce = function () {
        if (hs_a94525vlZU.notEvaluated) {
            return hs_a94525vlZU.hscall();
        } else {
            return hs_a94525vlZU;
        }
    };
    hs_a94625vlZY.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeekElemOff1425vm00.evaluateOnce = function () {
        if (hs_a94625vlZY.notEvaluated) {
            return hs_a94625vlZY.hscall();
        } else {
            return hs_a94625vlZY;
        }
    };
    hs_a94725vm02.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpokeElemOff1425vm04.evaluateOnce = function () {
        if (hs_a94725vm02.notEvaluated) {
            return hs_a94725vm02.hscall();
        } else {
            return hs_a94725vm02;
        }
    };
    hs_a94825vm06.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeekByteOff1425vm08.evaluateOnce = function () {
        if (hs_a94825vm06.notEvaluated) {
            return hs_a94825vm06.hscall();
        } else {
            return hs_a94825vm06;
        }
    };
    hs_a94925vm0a.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpokeByteOff1425vm0c.evaluateOnce = function () {
        if (hs_a94925vm0a.notEvaluated) {
            return hs_a94925vm0a.hscall();
        } else {
            return hs_a94925vm0a;
        }
    };
    hs_a95025vm0e.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeek1425vm0g.evaluateOnce = function () {
        if (hs_a95025vm0e.notEvaluated) {
            return hs_a95025vm0e.hscall();
        } else {
            return hs_a95025vm0e;
        }
    };
    hs_a95125vm0i.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpoke1425vm0k.evaluateOnce = function () {
        if (hs_a95125vm0i.notEvaluated) {
            return hs_a95125vm0i.hscall();
        } else {
            return hs_a95125vm0i;
        }
    };
    this.hs_zdfStorableCULong.data = [hs_a94425vlZQ, hs_a94525vlZU, hs_a94625vlZY, hs_a94725vm02, hs_a94825vm06, hs_a94925vm0a, hs_a95025vm0e, hs_a95125vm0i];
    hs_a95225vm0m.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcsucc1425vm0o.evaluateOnce = function () {
        if (hs_a95225vm0m.notEvaluated) {
            return hs_a95225vm0m.hscall();
        } else {
            return hs_a95225vm0m;
        }
    };
    hs_a95325vm0q.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcpred1425vm0s.evaluateOnce = function () {
        if (hs_a95325vm0q.notEvaluated) {
            return hs_a95325vm0q.hscall();
        } else {
            return hs_a95325vm0q;
        }
    };
    hs_a95425vm0u.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdctoEnum1425vm0w.evaluateOnce = function () {
        if (hs_a95425vm0u.notEvaluated) {
            return hs_a95425vm0u.hscall();
        } else {
            return hs_a95425vm0u;
        }
    };
    hs_a95525vm0y.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcfromEnum1425vm0A.evaluateOnce = function () {
        if (hs_a95525vm0y.notEvaluated) {
            return hs_a95525vm0y.hscall();
        } else {
            return hs_a95525vm0y;
        }
    };
    hs_a95625vm0C.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFrom1425vm0E.evaluateOnce = function () {
        if (hs_a95625vm0C.notEvaluated) {
            return hs_a95625vm0C.hscall();
        } else {
            return hs_a95625vm0C;
        }
    };
    hs_a95725vm0G.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromThen1425vm0I.evaluateOnce = function () {
        if (hs_a95725vm0G.notEvaluated) {
            return hs_a95725vm0G.hscall();
        } else {
            return hs_a95725vm0G;
        }
    };
    hs_a95825vm0K.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromTo1425vm0M.evaluateOnce = function () {
        if (hs_a95825vm0K.notEvaluated) {
            return hs_a95825vm0K.hscall();
        } else {
            return hs_a95825vm0K;
        }
    };
    hs_a95925vm0O.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromThenTo1425vm0Q.evaluateOnce = function () {
        if (hs_a95925vm0O.notEvaluated) {
            return hs_a95925vm0O.hscall();
        } else {
            return hs_a95925vm0O;
        }
    };
    this.hs_zdfEnumCULong.data = [hs_a95225vm0m, hs_a95325vm0q, hs_a95425vm0u, hs_a95525vm0y, hs_a95625vm0C, hs_a95725vm0G, hs_a95825vm0K, hs_a95925vm0O];
    hs_a96025vm0S.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczp1425vm0U.evaluateOnce = function () {
        if (hs_a96025vm0S.notEvaluated) {
            return hs_a96025vm0S.hscall();
        } else {
            return hs_a96025vm0S;
        }
    };
    hs_a96125vm0W.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczt1425vm0Y.evaluateOnce = function () {
        if (hs_a96125vm0W.notEvaluated) {
            return hs_a96125vm0W.hscall();
        } else {
            return hs_a96125vm0W;
        }
    };
    hs_a96225vm10.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczm1425vm12.evaluateOnce = function () {
        if (hs_a96225vm10.notEvaluated) {
            return hs_a96225vm10.hscall();
        } else {
            return hs_a96225vm10;
        }
    };
    hs_a96325vm14.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcnegate1425vm16.evaluateOnce = function () {
        if (hs_a96325vm14.notEvaluated) {
            return hs_a96325vm14.hscall();
        } else {
            return hs_a96325vm14;
        }
    };
    hs_a96425vm18.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcabs1425vm1a.evaluateOnce = function () {
        if (hs_a96425vm18.notEvaluated) {
            return hs_a96425vm18.hscall();
        } else {
            return hs_a96425vm18;
        }
    };
    hs_a96525vm1c.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcsignum1425vm1e.evaluateOnce = function () {
        if (hs_a96525vm1c.notEvaluated) {
            return hs_a96525vm1c.hscall();
        } else {
            return hs_a96525vm1c;
        }
    };
    hs_a96625vm1g.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcfromInteger1425vm1i.evaluateOnce = function () {
        if (hs_a96625vm1g.notEvaluated) {
            return hs_a96625vm1g.hscall();
        } else {
            return hs_a96625vm1g;
        }
    };
    hs_a96725vm1k.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdccompare1425vm1m.evaluateOnce = function () {
        if (hs_a96725vm1k.notEvaluated) {
            return hs_a96725vm1k.hscall();
        } else {
            return hs_a96725vm1k;
        }
    };
    hs_a96825vm1o.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczl1425vm1q.evaluateOnce = function () {
        if (hs_a96825vm1o.notEvaluated) {
            return hs_a96825vm1o.hscall();
        } else {
            return hs_a96825vm1o;
        }
    };
    hs_a96925vm1s.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczgze1425vm1u.evaluateOnce = function () {
        if (hs_a96925vm1s.notEvaluated) {
            return hs_a96925vm1s.hscall();
        } else {
            return hs_a96925vm1s;
        }
    };
    hs_a97025vm1w.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczg1425vm1y.evaluateOnce = function () {
        if (hs_a97025vm1w.notEvaluated) {
            return hs_a97025vm1w.hscall();
        } else {
            return hs_a97025vm1w;
        }
    };
    hs_a97125vm1A.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczlze1425vm1C.evaluateOnce = function () {
        if (hs_a97125vm1A.notEvaluated) {
            return hs_a97125vm1A.hscall();
        } else {
            return hs_a97125vm1A;
        }
    };
    hs_a97225vm1E.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcmax1425vm1G.evaluateOnce = function () {
        if (hs_a97225vm1E.notEvaluated) {
            return hs_a97225vm1E.hscall();
        } else {
            return hs_a97225vm1E;
        }
    };
    hs_a97325vm1I.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcmin1425vm1K.evaluateOnce = function () {
        if (hs_a97325vm1I.notEvaluated) {
            return hs_a97325vm1I.hscall();
        } else {
            return hs_a97325vm1I;
        }
    };
    hs_a97425vm1M.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczeze1425vm1O.evaluateOnce = function () {
        if (hs_a97425vm1M.notEvaluated) {
            return hs_a97425vm1M.hscall();
        } else {
            return hs_a97425vm1M;
        }
    };
    hs_a97525vm1Q.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczsze1425vm1S.evaluateOnce = function () {
        if (hs_a97525vm1Q.notEvaluated) {
            return hs_a97525vm1Q.hscall();
        } else {
            return hs_a97525vm1Q;
        }
    };
    this.hs_zdfEqCULong.data = [hs_a97425vm1M, hs_a97525vm1Q];
    this.hs_zdfOrdCULong.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCULong, hs_a96725vm1k, hs_a96825vm1o, hs_a96925vm1s, hs_a97025vm1w, hs_a97125vm1A, hs_a97225vm1E, hs_a97325vm1I];
    this.hs_zdfNumCULong.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCULong, $hs.modules.ForeignziCziTypes.hs_zdfShowCULong, hs_a96025vm0S, hs_a96125vm0W, hs_a96225vm10, hs_a96325vm14, hs_a96425vm18, hs_a96525vm1c, hs_a96625vm1g];
    this.hs_zdfRealCULong.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCULong, $hs.modules.ForeignziCziTypes.hs_zdfOrdCULong, hs_a94325vlZM];
    this.hs_zdfIntegralCULong.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealCULong, $hs.modules.ForeignziCziTypes.hs_zdfEnumCULong, hs_a93425vlZc, hs_a93525vlZg, hs_a93625vlZk, hs_a93725vlZo, hs_a93825vlZs, hs_a93925vlZw, hs_a94025vlZA];
    this.hs_zdfBitsCULong.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCULong, hs_a91725vlY6, hs_a91825vlYa, hs_a91925vlYe, hs_a92025vlYi, hs_a92125vlYm, hs_a92225vlYq, hs_a92325vlYu, hs_a92425vlYy, hs_a92525vlYC, hs_a92625vlYG, hs_a92725vlYK, hs_a92825vlYO, hs_a92925vlYS, hs_a93025vlYW, hs_a93125vlZ0, hs_a93225vlZ4, hs_a93325vlZ8];
    hs_a97625vm1U.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdczizazi1125vm1W.evaluateOnce = function () {
        if (hs_a97625vm1U.notEvaluated) {
            return hs_a97625vm1U.hscall();
        } else {
            return hs_a97625vm1U;
        }
    };
    hs_a97725vm1Y.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdczizbzi1125vm20.evaluateOnce = function () {
        if (hs_a97725vm1Y.notEvaluated) {
            return hs_a97725vm1Y.hscall();
        } else {
            return hs_a97725vm1Y;
        }
    };
    hs_a97825vm22.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcxor1125vm24.evaluateOnce = function () {
        if (hs_a97825vm22.notEvaluated) {
            return hs_a97825vm22.hscall();
        } else {
            return hs_a97825vm22;
        }
    };
    hs_a97925vm26.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdccomplement1125vm28.evaluateOnce = function () {
        if (hs_a97925vm26.notEvaluated) {
            return hs_a97925vm26.hscall();
        } else {
            return hs_a97925vm26;
        }
    };
    hs_a98025vm2a.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshift1125vm2c.evaluateOnce = function () {
        if (hs_a98025vm2a.notEvaluated) {
            return hs_a98025vm2a.hscall();
        } else {
            return hs_a98025vm2a;
        }
    };
    hs_a98125vm2e.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotate1125vm2g.evaluateOnce = function () {
        if (hs_a98125vm2e.notEvaluated) {
            return hs_a98125vm2e.hscall();
        } else {
            return hs_a98125vm2e;
        }
    };
    hs_a98225vm2i.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcbit1125vm2k.evaluateOnce = function () {
        if (hs_a98225vm2i.notEvaluated) {
            return hs_a98225vm2i.hscall();
        } else {
            return hs_a98225vm2i;
        }
    };
    hs_a98325vm2m.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcsetBit1125vm2o.evaluateOnce = function () {
        if (hs_a98325vm2m.notEvaluated) {
            return hs_a98325vm2m.hscall();
        } else {
            return hs_a98325vm2m;
        }
    };
    hs_a98425vm2q.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcclearBit1125vm2s.evaluateOnce = function () {
        if (hs_a98425vm2q.notEvaluated) {
            return hs_a98425vm2q.hscall();
        } else {
            return hs_a98425vm2q;
        }
    };
    hs_a98525vm2u.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdccomplementBit1125vm2w.evaluateOnce = function () {
        if (hs_a98525vm2u.notEvaluated) {
            return hs_a98525vm2u.hscall();
        } else {
            return hs_a98525vm2u;
        }
    };
    hs_a98625vm2y.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdctestBit1125vm2A.evaluateOnce = function () {
        if (hs_a98625vm2y.notEvaluated) {
            return hs_a98625vm2y.hscall();
        } else {
            return hs_a98625vm2y;
        }
    };
    hs_a98725vm2C.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcbitSizze1125vm2E.evaluateOnce = function () {
        if (hs_a98725vm2C.notEvaluated) {
            return hs_a98725vm2C.hscall();
        } else {
            return hs_a98725vm2C;
        }
    };
    hs_a98825vm2G.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcisSigned1125vm2I.evaluateOnce = function () {
        if (hs_a98825vm2G.notEvaluated) {
            return hs_a98825vm2G.hscall();
        } else {
            return hs_a98825vm2G;
        }
    };
    hs_a98925vm2K.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshiftL1125vm2M.evaluateOnce = function () {
        if (hs_a98925vm2K.notEvaluated) {
            return hs_a98925vm2K.hscall();
        } else {
            return hs_a98925vm2K;
        }
    };
    hs_a99025vm2O.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshiftR1125vm2Q.evaluateOnce = function () {
        if (hs_a99025vm2O.notEvaluated) {
            return hs_a99025vm2O.hscall();
        } else {
            return hs_a99025vm2O;
        }
    };
    hs_a99125vm2S.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotateL1125vm2U.evaluateOnce = function () {
        if (hs_a99125vm2S.notEvaluated) {
            return hs_a99125vm2S.hscall();
        } else {
            return hs_a99125vm2S;
        }
    };
    hs_a99225vm2W.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotateR1125vm2Y.evaluateOnce = function () {
        if (hs_a99225vm2W.notEvaluated) {
            return hs_a99225vm2W.hscall();
        } else {
            return hs_a99225vm2W;
        }
    };
    hs_a99325vm30.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcquot1125vm32.evaluateOnce = function () {
        if (hs_a99325vm30.notEvaluated) {
            return hs_a99325vm30.hscall();
        } else {
            return hs_a99325vm30;
        }
    };
    hs_a99425vm34.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcrem1125vm36.evaluateOnce = function () {
        if (hs_a99425vm34.notEvaluated) {
            return hs_a99425vm34.hscall();
        } else {
            return hs_a99425vm34;
        }
    };
    hs_a99525vm38.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcdiv1125vm3a.evaluateOnce = function () {
        if (hs_a99525vm38.notEvaluated) {
            return hs_a99525vm38.hscall();
        } else {
            return hs_a99525vm38;
        }
    };
    hs_a99625vm3c.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcmod1125vm3e.evaluateOnce = function () {
        if (hs_a99625vm3c.notEvaluated) {
            return hs_a99625vm3c.hscall();
        } else {
            return hs_a99625vm3c;
        }
    };
    hs_a99725vm3g.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcquotRem1125vm3i.evaluateOnce = function () {
        if (hs_a99725vm3g.notEvaluated) {
            return hs_a99725vm3g.hscall();
        } else {
            return hs_a99725vm3g;
        }
    };
    hs_a99825vm3k.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcdivMod1125vm3m.evaluateOnce = function () {
        if (hs_a99825vm3k.notEvaluated) {
            return hs_a99825vm3k.hscall();
        } else {
            return hs_a99825vm3k;
        }
    };
    hs_a99925vm3o.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdctoInteger1125vm3q.evaluateOnce = function () {
        if (hs_a99925vm3o.notEvaluated) {
            return hs_a99925vm3o.hscall();
        } else {
            return hs_a99925vm3o;
        }
    };
    hs_a100025vm3s.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt32);
    };
    hs_zdcminBound1125vm3u.evaluateOnce = function () {
        if (hs_a100025vm3s.notEvaluated) {
            return hs_a100025vm3s.hscall();
        } else {
            return hs_a100025vm3s;
        }
    };
    hs_a100125vm3w.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt32);
    };
    hs_zdcmaxBound1125vm3y.evaluateOnce = function () {
        if (hs_a100125vm3w.notEvaluated) {
            return hs_a100125vm3w.hscall();
        } else {
            return hs_a100125vm3w;
        }
    };
    this.hs_zdfBoundedCLong.data = [hs_a100025vm3s, hs_a100125vm3w];
    hs_a100225vm3A.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziInt.hs_zdfRealInt32);
    };
    hs_zdctoRational1525vm3C.evaluateOnce = function () {
        if (hs_a100225vm3A.notEvaluated) {
            return hs_a100225vm3A.hscall();
        } else {
            return hs_a100225vm3A;
        }
    };
    hs_a100325vm3E.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcsizzeOf1525vm3G.evaluateOnce = function () {
        if (hs_a100325vm3E.notEvaluated) {
            return hs_a100325vm3E.hscall();
        } else {
            return hs_a100325vm3E;
        }
    };
    hs_a100425vm3I.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcalignment1525vm3K.evaluateOnce = function () {
        if (hs_a100425vm3I.notEvaluated) {
            return hs_a100425vm3I.hscall();
        } else {
            return hs_a100425vm3I;
        }
    };
    hs_a100525vm3M.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeekElemOff1525vm3O.evaluateOnce = function () {
        if (hs_a100525vm3M.notEvaluated) {
            return hs_a100525vm3M.hscall();
        } else {
            return hs_a100525vm3M;
        }
    };
    hs_a100625vm3Q.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpokeElemOff1525vm3S.evaluateOnce = function () {
        if (hs_a100625vm3Q.notEvaluated) {
            return hs_a100625vm3Q.hscall();
        } else {
            return hs_a100625vm3Q;
        }
    };
    hs_a100725vm3U.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeekByteOff1525vm3W.evaluateOnce = function () {
        if (hs_a100725vm3U.notEvaluated) {
            return hs_a100725vm3U.hscall();
        } else {
            return hs_a100725vm3U;
        }
    };
    hs_a100825vm3Y.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpokeByteOff1525vm40.evaluateOnce = function () {
        if (hs_a100825vm3Y.notEvaluated) {
            return hs_a100825vm3Y.hscall();
        } else {
            return hs_a100825vm3Y;
        }
    };
    hs_a100925vm42.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeek1525vm44.evaluateOnce = function () {
        if (hs_a100925vm42.notEvaluated) {
            return hs_a100925vm42.hscall();
        } else {
            return hs_a100925vm42;
        }
    };
    hs_a101025vm46.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpoke1525vm48.evaluateOnce = function () {
        if (hs_a101025vm46.notEvaluated) {
            return hs_a101025vm46.hscall();
        } else {
            return hs_a101025vm46;
        }
    };
    this.hs_zdfStorableCLong.data = [hs_a100325vm3E, hs_a100425vm3I, hs_a100525vm3M, hs_a100625vm3Q, hs_a100725vm3U, hs_a100825vm3Y, hs_a100925vm42, hs_a101025vm46];
    hs_a101125vm4a.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcsucc1525vm4c.evaluateOnce = function () {
        if (hs_a101125vm4a.notEvaluated) {
            return hs_a101125vm4a.hscall();
        } else {
            return hs_a101125vm4a;
        }
    };
    hs_a101225vm4e.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcpred1525vm4g.evaluateOnce = function () {
        if (hs_a101225vm4e.notEvaluated) {
            return hs_a101225vm4e.hscall();
        } else {
            return hs_a101225vm4e;
        }
    };
    hs_a101325vm4i.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdctoEnum1525vm4k.evaluateOnce = function () {
        if (hs_a101325vm4i.notEvaluated) {
            return hs_a101325vm4i.hscall();
        } else {
            return hs_a101325vm4i;
        }
    };
    hs_a101425vm4m.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcfromEnum1525vm4o.evaluateOnce = function () {
        if (hs_a101425vm4m.notEvaluated) {
            return hs_a101425vm4m.hscall();
        } else {
            return hs_a101425vm4m;
        }
    };
    hs_a101525vm4q.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFrom1525vm4s.evaluateOnce = function () {
        if (hs_a101525vm4q.notEvaluated) {
            return hs_a101525vm4q.hscall();
        } else {
            return hs_a101525vm4q;
        }
    };
    hs_a101625vm4u.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromThen1525vm4w.evaluateOnce = function () {
        if (hs_a101625vm4u.notEvaluated) {
            return hs_a101625vm4u.hscall();
        } else {
            return hs_a101625vm4u;
        }
    };
    hs_a101725vm4y.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromTo1525vm4A.evaluateOnce = function () {
        if (hs_a101725vm4y.notEvaluated) {
            return hs_a101725vm4y.hscall();
        } else {
            return hs_a101725vm4y;
        }
    };
    hs_a101825vm4C.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromThenTo1525vm4E.evaluateOnce = function () {
        if (hs_a101825vm4C.notEvaluated) {
            return hs_a101825vm4C.hscall();
        } else {
            return hs_a101825vm4C;
        }
    };
    this.hs_zdfEnumCLong.data = [hs_a101125vm4a, hs_a101225vm4e, hs_a101325vm4i, hs_a101425vm4m, hs_a101525vm4q, hs_a101625vm4u, hs_a101725vm4y, hs_a101825vm4C];
    hs_a101925vm4G.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczp1525vm4I.evaluateOnce = function () {
        if (hs_a101925vm4G.notEvaluated) {
            return hs_a101925vm4G.hscall();
        } else {
            return hs_a101925vm4G;
        }
    };
    hs_a102025vm4K.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczt1525vm4M.evaluateOnce = function () {
        if (hs_a102025vm4K.notEvaluated) {
            return hs_a102025vm4K.hscall();
        } else {
            return hs_a102025vm4K;
        }
    };
    hs_a102125vm4O.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczm1525vm4Q.evaluateOnce = function () {
        if (hs_a102125vm4O.notEvaluated) {
            return hs_a102125vm4O.hscall();
        } else {
            return hs_a102125vm4O;
        }
    };
    hs_a102225vm4S.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcnegate1525vm4U.evaluateOnce = function () {
        if (hs_a102225vm4S.notEvaluated) {
            return hs_a102225vm4S.hscall();
        } else {
            return hs_a102225vm4S;
        }
    };
    hs_a102325vm4W.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcabs1525vm4Y.evaluateOnce = function () {
        if (hs_a102325vm4W.notEvaluated) {
            return hs_a102325vm4W.hscall();
        } else {
            return hs_a102325vm4W;
        }
    };
    hs_a102425vm50.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcsignum1525vm52.evaluateOnce = function () {
        if (hs_a102425vm50.notEvaluated) {
            return hs_a102425vm50.hscall();
        } else {
            return hs_a102425vm50;
        }
    };
    hs_a102525vm54.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcfromInteger1525vm56.evaluateOnce = function () {
        if (hs_a102525vm54.notEvaluated) {
            return hs_a102525vm54.hscall();
        } else {
            return hs_a102525vm54;
        }
    };
    hs_a102625vm58.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdccompare1525vm5a.evaluateOnce = function () {
        if (hs_a102625vm58.notEvaluated) {
            return hs_a102625vm58.hscall();
        } else {
            return hs_a102625vm58;
        }
    };
    hs_a102725vm5c.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczl1525vm5e.evaluateOnce = function () {
        if (hs_a102725vm5c.notEvaluated) {
            return hs_a102725vm5c.hscall();
        } else {
            return hs_a102725vm5c;
        }
    };
    hs_a102825vm5g.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczgze1525vm5i.evaluateOnce = function () {
        if (hs_a102825vm5g.notEvaluated) {
            return hs_a102825vm5g.hscall();
        } else {
            return hs_a102825vm5g;
        }
    };
    hs_a102925vm5k.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczg1525vm5m.evaluateOnce = function () {
        if (hs_a102925vm5k.notEvaluated) {
            return hs_a102925vm5k.hscall();
        } else {
            return hs_a102925vm5k;
        }
    };
    hs_a103025vm5o.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczlze1525vm5q.evaluateOnce = function () {
        if (hs_a103025vm5o.notEvaluated) {
            return hs_a103025vm5o.hscall();
        } else {
            return hs_a103025vm5o;
        }
    };
    hs_a103125vm5s.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdcmax1525vm5u.evaluateOnce = function () {
        if (hs_a103125vm5s.notEvaluated) {
            return hs_a103125vm5s.hscall();
        } else {
            return hs_a103125vm5s;
        }
    };
    hs_a103225vm5w.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdcmin1525vm5y.evaluateOnce = function () {
        if (hs_a103225vm5w.notEvaluated) {
            return hs_a103225vm5w.hscall();
        } else {
            return hs_a103225vm5w;
        }
    };
    hs_a103325vm5A.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32);
    };
    hs_zdczeze1525vm5C.evaluateOnce = function () {
        if (hs_a103325vm5A.notEvaluated) {
            return hs_a103325vm5A.hscall();
        } else {
            return hs_a103325vm5A;
        }
    };
    hs_a103425vm5E.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32);
    };
    hs_zdczsze1525vm5G.evaluateOnce = function () {
        if (hs_a103425vm5E.notEvaluated) {
            return hs_a103425vm5E.hscall();
        } else {
            return hs_a103425vm5E;
        }
    };
    this.hs_zdfEqCLong.data = [hs_a103325vm5A, hs_a103425vm5E];
    this.hs_zdfOrdCLong.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCLong, hs_a102625vm58, hs_a102725vm5c, hs_a102825vm5g, hs_a102925vm5k, hs_a103025vm5o, hs_a103125vm5s, hs_a103225vm5w];
    this.hs_zdfNumCLong.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCLong, $hs.modules.ForeignziCziTypes.hs_zdfShowCLong, hs_a101925vm4G, hs_a102025vm4K, hs_a102125vm4O, hs_a102225vm4S, hs_a102325vm4W, hs_a102425vm50, hs_a102525vm54];
    this.hs_zdfRealCLong.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCLong, $hs.modules.ForeignziCziTypes.hs_zdfOrdCLong, hs_a100225vm3A];
    this.hs_zdfIntegralCLong.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealCLong, $hs.modules.ForeignziCziTypes.hs_zdfEnumCLong, hs_a99325vm30, hs_a99425vm34, hs_a99525vm38, hs_a99625vm3c, hs_a99725vm3g, hs_a99825vm3k, hs_a99925vm3o];
    this.hs_zdfBitsCLong.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCLong, hs_a97625vm1U, hs_a97725vm1Y, hs_a97825vm22, hs_a97925vm26, hs_a98025vm2a, hs_a98125vm2e, hs_a98225vm2i, hs_a98325vm2m, hs_a98425vm2q, hs_a98525vm2u, hs_a98625vm2y, hs_a98725vm2C, hs_a98825vm2G, hs_a98925vm2K, hs_a99025vm2O, hs_a99125vm2S, hs_a99225vm2W];
    hs_a103525vm5I.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdczizazi1225vm5K.evaluateOnce = function () {
        if (hs_a103525vm5I.notEvaluated) {
            return hs_a103525vm5I.hscall();
        } else {
            return hs_a103525vm5I;
        }
    };
    hs_a103625vm5M.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdczizbzi1225vm5O.evaluateOnce = function () {
        if (hs_a103625vm5M.notEvaluated) {
            return hs_a103625vm5M.hscall();
        } else {
            return hs_a103625vm5M;
        }
    };
    hs_a103725vm5Q.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcxor1225vm5S.evaluateOnce = function () {
        if (hs_a103725vm5Q.notEvaluated) {
            return hs_a103725vm5Q.hscall();
        } else {
            return hs_a103725vm5Q;
        }
    };
    hs_a103825vm5U.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdccomplement1225vm5W.evaluateOnce = function () {
        if (hs_a103825vm5U.notEvaluated) {
            return hs_a103825vm5U.hscall();
        } else {
            return hs_a103825vm5U;
        }
    };
    hs_a103925vm5Y.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshift1225vm60.evaluateOnce = function () {
        if (hs_a103925vm5Y.notEvaluated) {
            return hs_a103925vm5Y.hscall();
        } else {
            return hs_a103925vm5Y;
        }
    };
    hs_a104025vm62.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotate1225vm64.evaluateOnce = function () {
        if (hs_a104025vm62.notEvaluated) {
            return hs_a104025vm62.hscall();
        } else {
            return hs_a104025vm62;
        }
    };
    hs_a104125vm66.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcbit1225vm68.evaluateOnce = function () {
        if (hs_a104125vm66.notEvaluated) {
            return hs_a104125vm66.hscall();
        } else {
            return hs_a104125vm66;
        }
    };
    hs_a104225vm6a.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcsetBit1225vm6c.evaluateOnce = function () {
        if (hs_a104225vm6a.notEvaluated) {
            return hs_a104225vm6a.hscall();
        } else {
            return hs_a104225vm6a;
        }
    };
    hs_a104325vm6e.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcclearBit1225vm6g.evaluateOnce = function () {
        if (hs_a104325vm6e.notEvaluated) {
            return hs_a104325vm6e.hscall();
        } else {
            return hs_a104325vm6e;
        }
    };
    hs_a104425vm6i.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdccomplementBit1225vm6k.evaluateOnce = function () {
        if (hs_a104425vm6i.notEvaluated) {
            return hs_a104425vm6i.hscall();
        } else {
            return hs_a104425vm6i;
        }
    };
    hs_a104525vm6m.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdctestBit1225vm6o.evaluateOnce = function () {
        if (hs_a104525vm6m.notEvaluated) {
            return hs_a104525vm6m.hscall();
        } else {
            return hs_a104525vm6m;
        }
    };
    hs_a104625vm6q.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcbitSizze1225vm6s.evaluateOnce = function () {
        if (hs_a104625vm6q.notEvaluated) {
            return hs_a104625vm6q.hscall();
        } else {
            return hs_a104625vm6q;
        }
    };
    hs_a104725vm6u.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcisSigned1225vm6w.evaluateOnce = function () {
        if (hs_a104725vm6u.notEvaluated) {
            return hs_a104725vm6u.hscall();
        } else {
            return hs_a104725vm6u;
        }
    };
    hs_a104825vm6y.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshiftL1225vm6A.evaluateOnce = function () {
        if (hs_a104825vm6y.notEvaluated) {
            return hs_a104825vm6y.hscall();
        } else {
            return hs_a104825vm6y;
        }
    };
    hs_a104925vm6C.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshiftR1225vm6E.evaluateOnce = function () {
        if (hs_a104925vm6C.notEvaluated) {
            return hs_a104925vm6C.hscall();
        } else {
            return hs_a104925vm6C;
        }
    };
    hs_a105025vm6G.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotateL1225vm6I.evaluateOnce = function () {
        if (hs_a105025vm6G.notEvaluated) {
            return hs_a105025vm6G.hscall();
        } else {
            return hs_a105025vm6G;
        }
    };
    hs_a105125vm6K.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotateR1225vm6M.evaluateOnce = function () {
        if (hs_a105125vm6K.notEvaluated) {
            return hs_a105125vm6K.hscall();
        } else {
            return hs_a105125vm6K;
        }
    };
    hs_a105225vm6O.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcquot1225vm6Q.evaluateOnce = function () {
        if (hs_a105225vm6O.notEvaluated) {
            return hs_a105225vm6O.hscall();
        } else {
            return hs_a105225vm6O;
        }
    };
    hs_a105325vm6S.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcrem1225vm6U.evaluateOnce = function () {
        if (hs_a105325vm6S.notEvaluated) {
            return hs_a105325vm6S.hscall();
        } else {
            return hs_a105325vm6S;
        }
    };
    hs_a105425vm6W.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcdiv1225vm6Y.evaluateOnce = function () {
        if (hs_a105425vm6W.notEvaluated) {
            return hs_a105425vm6W.hscall();
        } else {
            return hs_a105425vm6W;
        }
    };
    hs_a105525vm70.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcmod1225vm72.evaluateOnce = function () {
        if (hs_a105525vm70.notEvaluated) {
            return hs_a105525vm70.hscall();
        } else {
            return hs_a105525vm70;
        }
    };
    hs_a105625vm74.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcquotRem1225vm76.evaluateOnce = function () {
        if (hs_a105625vm74.notEvaluated) {
            return hs_a105625vm74.hscall();
        } else {
            return hs_a105625vm74;
        }
    };
    hs_a105725vm78.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcdivMod1225vm7a.evaluateOnce = function () {
        if (hs_a105725vm78.notEvaluated) {
            return hs_a105725vm78.hscall();
        } else {
            return hs_a105725vm78;
        }
    };
    hs_a105825vm7c.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdctoInteger1225vm7e.evaluateOnce = function () {
        if (hs_a105825vm7c.notEvaluated) {
            return hs_a105825vm7c.hscall();
        } else {
            return hs_a105825vm7c;
        }
    };
    hs_a105925vm7g.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
    };
    hs_zdcminBound1225vm7i.evaluateOnce = function () {
        if (hs_a105925vm7g.notEvaluated) {
            return hs_a105925vm7g.hscall();
        } else {
            return hs_a105925vm7g;
        }
    };
    hs_a106025vm7k.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
    };
    hs_zdcmaxBound1225vm7m.evaluateOnce = function () {
        if (hs_a106025vm7k.notEvaluated) {
            return hs_a106025vm7k.hscall();
        } else {
            return hs_a106025vm7k;
        }
    };
    this.hs_zdfBoundedCUInt.data = [hs_a105925vm7g, hs_a106025vm7k];
    hs_a106125vm7o.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziWord.hs_zdfRealWord32);
    };
    hs_zdctoRational1625vm7q.evaluateOnce = function () {
        if (hs_a106125vm7o.notEvaluated) {
            return hs_a106125vm7o.hscall();
        } else {
            return hs_a106125vm7o;
        }
    };
    hs_a106225vm7s.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcsizzeOf1625vm7u.evaluateOnce = function () {
        if (hs_a106225vm7s.notEvaluated) {
            return hs_a106225vm7s.hscall();
        } else {
            return hs_a106225vm7s;
        }
    };
    hs_a106325vm7w.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcalignment1625vm7y.evaluateOnce = function () {
        if (hs_a106325vm7w.notEvaluated) {
            return hs_a106325vm7w.hscall();
        } else {
            return hs_a106325vm7w;
        }
    };
    hs_a106425vm7A.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeekElemOff1625vm7C.evaluateOnce = function () {
        if (hs_a106425vm7A.notEvaluated) {
            return hs_a106425vm7A.hscall();
        } else {
            return hs_a106425vm7A;
        }
    };
    hs_a106525vm7E.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpokeElemOff1625vm7G.evaluateOnce = function () {
        if (hs_a106525vm7E.notEvaluated) {
            return hs_a106525vm7E.hscall();
        } else {
            return hs_a106525vm7E;
        }
    };
    hs_a106625vm7I.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeekByteOff1625vm7K.evaluateOnce = function () {
        if (hs_a106625vm7I.notEvaluated) {
            return hs_a106625vm7I.hscall();
        } else {
            return hs_a106625vm7I;
        }
    };
    hs_a106725vm7M.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpokeByteOff1625vm7O.evaluateOnce = function () {
        if (hs_a106725vm7M.notEvaluated) {
            return hs_a106725vm7M.hscall();
        } else {
            return hs_a106725vm7M;
        }
    };
    hs_a106825vm7Q.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeek1625vm7S.evaluateOnce = function () {
        if (hs_a106825vm7Q.notEvaluated) {
            return hs_a106825vm7Q.hscall();
        } else {
            return hs_a106825vm7Q;
        }
    };
    hs_a106925vm7U.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpoke1625vm7W.evaluateOnce = function () {
        if (hs_a106925vm7U.notEvaluated) {
            return hs_a106925vm7U.hscall();
        } else {
            return hs_a106925vm7U;
        }
    };
    this.hs_zdfStorableCUInt.data = [hs_a106225vm7s, hs_a106325vm7w, hs_a106425vm7A, hs_a106525vm7E, hs_a106625vm7I, hs_a106725vm7M, hs_a106825vm7Q, hs_a106925vm7U];
    hs_a107025vm7Y.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcsucc1625vm80.evaluateOnce = function () {
        if (hs_a107025vm7Y.notEvaluated) {
            return hs_a107025vm7Y.hscall();
        } else {
            return hs_a107025vm7Y;
        }
    };
    hs_a107125vm82.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcpred1625vm84.evaluateOnce = function () {
        if (hs_a107125vm82.notEvaluated) {
            return hs_a107125vm82.hscall();
        } else {
            return hs_a107125vm82;
        }
    };
    hs_a107225vm86.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdctoEnum1625vm88.evaluateOnce = function () {
        if (hs_a107225vm86.notEvaluated) {
            return hs_a107225vm86.hscall();
        } else {
            return hs_a107225vm86;
        }
    };
    hs_a107325vm8a.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcfromEnum1625vm8c.evaluateOnce = function () {
        if (hs_a107325vm8a.notEvaluated) {
            return hs_a107325vm8a.hscall();
        } else {
            return hs_a107325vm8a;
        }
    };
    hs_a107425vm8e.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFrom1625vm8g.evaluateOnce = function () {
        if (hs_a107425vm8e.notEvaluated) {
            return hs_a107425vm8e.hscall();
        } else {
            return hs_a107425vm8e;
        }
    };
    hs_a107525vm8i.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromThen1625vm8k.evaluateOnce = function () {
        if (hs_a107525vm8i.notEvaluated) {
            return hs_a107525vm8i.hscall();
        } else {
            return hs_a107525vm8i;
        }
    };
    hs_a107625vm8m.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromTo1625vm8o.evaluateOnce = function () {
        if (hs_a107625vm8m.notEvaluated) {
            return hs_a107625vm8m.hscall();
        } else {
            return hs_a107625vm8m;
        }
    };
    hs_a107725vm8q.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromThenTo1625vm8s.evaluateOnce = function () {
        if (hs_a107725vm8q.notEvaluated) {
            return hs_a107725vm8q.hscall();
        } else {
            return hs_a107725vm8q;
        }
    };
    this.hs_zdfEnumCUInt.data = [hs_a107025vm7Y, hs_a107125vm82, hs_a107225vm86, hs_a107325vm8a, hs_a107425vm8e, hs_a107525vm8i, hs_a107625vm8m, hs_a107725vm8q];
    hs_a107825vm8u.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczp1625vm8w.evaluateOnce = function () {
        if (hs_a107825vm8u.notEvaluated) {
            return hs_a107825vm8u.hscall();
        } else {
            return hs_a107825vm8u;
        }
    };
    hs_a107925vm8y.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczt1625vm8A.evaluateOnce = function () {
        if (hs_a107925vm8y.notEvaluated) {
            return hs_a107925vm8y.hscall();
        } else {
            return hs_a107925vm8y;
        }
    };
    hs_a108025vm8C.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczm1625vm8E.evaluateOnce = function () {
        if (hs_a108025vm8C.notEvaluated) {
            return hs_a108025vm8C.hscall();
        } else {
            return hs_a108025vm8C;
        }
    };
    hs_a108125vm8G.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcnegate1625vm8I.evaluateOnce = function () {
        if (hs_a108125vm8G.notEvaluated) {
            return hs_a108125vm8G.hscall();
        } else {
            return hs_a108125vm8G;
        }
    };
    hs_a108225vm8K.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcabs1625vm8M.evaluateOnce = function () {
        if (hs_a108225vm8K.notEvaluated) {
            return hs_a108225vm8K.hscall();
        } else {
            return hs_a108225vm8K;
        }
    };
    hs_a108325vm8O.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcsignum1625vm8Q.evaluateOnce = function () {
        if (hs_a108325vm8O.notEvaluated) {
            return hs_a108325vm8O.hscall();
        } else {
            return hs_a108325vm8O;
        }
    };
    hs_a108425vm8S.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcfromInteger1625vm8U.evaluateOnce = function () {
        if (hs_a108425vm8S.notEvaluated) {
            return hs_a108425vm8S.hscall();
        } else {
            return hs_a108425vm8S;
        }
    };
    hs_a108525vm8W.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdccompare1625vm8Y.evaluateOnce = function () {
        if (hs_a108525vm8W.notEvaluated) {
            return hs_a108525vm8W.hscall();
        } else {
            return hs_a108525vm8W;
        }
    };
    hs_a108625vm90.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczl1625vm92.evaluateOnce = function () {
        if (hs_a108625vm90.notEvaluated) {
            return hs_a108625vm90.hscall();
        } else {
            return hs_a108625vm90;
        }
    };
    hs_a108725vm94.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczgze1625vm96.evaluateOnce = function () {
        if (hs_a108725vm94.notEvaluated) {
            return hs_a108725vm94.hscall();
        } else {
            return hs_a108725vm94;
        }
    };
    hs_a108825vm98.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczg1625vm9a.evaluateOnce = function () {
        if (hs_a108825vm98.notEvaluated) {
            return hs_a108825vm98.hscall();
        } else {
            return hs_a108825vm98;
        }
    };
    hs_a108925vm9c.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczlze1625vm9e.evaluateOnce = function () {
        if (hs_a108925vm9c.notEvaluated) {
            return hs_a108925vm9c.hscall();
        } else {
            return hs_a108925vm9c;
        }
    };
    hs_a109025vm9g.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcmax1625vm9i.evaluateOnce = function () {
        if (hs_a109025vm9g.notEvaluated) {
            return hs_a109025vm9g.hscall();
        } else {
            return hs_a109025vm9g;
        }
    };
    hs_a109125vm9k.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcmin1625vm9m.evaluateOnce = function () {
        if (hs_a109125vm9k.notEvaluated) {
            return hs_a109125vm9k.hscall();
        } else {
            return hs_a109125vm9k;
        }
    };
    hs_a109225vm9o.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczeze1625vm9q.evaluateOnce = function () {
        if (hs_a109225vm9o.notEvaluated) {
            return hs_a109225vm9o.hscall();
        } else {
            return hs_a109225vm9o;
        }
    };
    hs_a109325vm9s.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczsze1625vm9u.evaluateOnce = function () {
        if (hs_a109325vm9s.notEvaluated) {
            return hs_a109325vm9s.hscall();
        } else {
            return hs_a109325vm9s;
        }
    };
    this.hs_zdfEqCUInt.data = [hs_a109225vm9o, hs_a109325vm9s];
    this.hs_zdfOrdCUInt.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCUInt, hs_a108525vm8W, hs_a108625vm90, hs_a108725vm94, hs_a108825vm98, hs_a108925vm9c, hs_a109025vm9g, hs_a109125vm9k];
    this.hs_zdfNumCUInt.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCUInt, $hs.modules.ForeignziCziTypes.hs_zdfShowCUInt, hs_a107825vm8u, hs_a107925vm8y, hs_a108025vm8C, hs_a108125vm8G, hs_a108225vm8K, hs_a108325vm8O, hs_a108425vm8S];
    this.hs_zdfRealCUInt.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCUInt, $hs.modules.ForeignziCziTypes.hs_zdfOrdCUInt, hs_a106125vm7o];
    this.hs_zdfIntegralCUInt.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealCUInt, $hs.modules.ForeignziCziTypes.hs_zdfEnumCUInt, hs_a105225vm6O, hs_a105325vm6S, hs_a105425vm6W, hs_a105525vm70, hs_a105625vm74, hs_a105725vm78, hs_a105825vm7c];
    this.hs_zdfBitsCUInt.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCUInt, hs_a103525vm5I, hs_a103625vm5M, hs_a103725vm5Q, hs_a103825vm5U, hs_a103925vm5Y, hs_a104025vm62, hs_a104125vm66, hs_a104225vm6a, hs_a104325vm6e, hs_a104425vm6i, hs_a104525vm6m, hs_a104625vm6q, hs_a104725vm6u, hs_a104825vm6y, hs_a104925vm6C, hs_a105025vm6G, hs_a105125vm6K];
    hs_a109425vm9w.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdczizazi1325vm9y.evaluateOnce = function () {
        if (hs_a109425vm9w.notEvaluated) {
            return hs_a109425vm9w.hscall();
        } else {
            return hs_a109425vm9w;
        }
    };
    hs_a109525vm9A.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdczizbzi1325vm9C.evaluateOnce = function () {
        if (hs_a109525vm9A.notEvaluated) {
            return hs_a109525vm9A.hscall();
        } else {
            return hs_a109525vm9A;
        }
    };
    hs_a109625vm9E.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcxor1325vm9G.evaluateOnce = function () {
        if (hs_a109625vm9E.notEvaluated) {
            return hs_a109625vm9E.hscall();
        } else {
            return hs_a109625vm9E;
        }
    };
    hs_a109725vm9I.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdccomplement1325vm9K.evaluateOnce = function () {
        if (hs_a109725vm9I.notEvaluated) {
            return hs_a109725vm9I.hscall();
        } else {
            return hs_a109725vm9I;
        }
    };
    hs_a109825vm9M.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshift1325vm9O.evaluateOnce = function () {
        if (hs_a109825vm9M.notEvaluated) {
            return hs_a109825vm9M.hscall();
        } else {
            return hs_a109825vm9M;
        }
    };
    hs_a109925vm9Q.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotate1325vm9S.evaluateOnce = function () {
        if (hs_a109925vm9Q.notEvaluated) {
            return hs_a109925vm9Q.hscall();
        } else {
            return hs_a109925vm9Q;
        }
    };
    hs_a110025vm9U.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcbit1325vm9W.evaluateOnce = function () {
        if (hs_a110025vm9U.notEvaluated) {
            return hs_a110025vm9U.hscall();
        } else {
            return hs_a110025vm9U;
        }
    };
    hs_a110125vm9Y.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcsetBit1325vma0.evaluateOnce = function () {
        if (hs_a110125vm9Y.notEvaluated) {
            return hs_a110125vm9Y.hscall();
        } else {
            return hs_a110125vm9Y;
        }
    };
    hs_a110225vma2.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcclearBit1325vma4.evaluateOnce = function () {
        if (hs_a110225vma2.notEvaluated) {
            return hs_a110225vma2.hscall();
        } else {
            return hs_a110225vma2;
        }
    };
    hs_a110325vma6.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdccomplementBit1325vma8.evaluateOnce = function () {
        if (hs_a110325vma6.notEvaluated) {
            return hs_a110325vma6.hscall();
        } else {
            return hs_a110325vma6;
        }
    };
    hs_a110425vmaa.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdctestBit1325vmac.evaluateOnce = function () {
        if (hs_a110425vmaa.notEvaluated) {
            return hs_a110425vmaa.hscall();
        } else {
            return hs_a110425vmaa;
        }
    };
    hs_a110525vmae.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcbitSizze1325vmag.evaluateOnce = function () {
        if (hs_a110525vmae.notEvaluated) {
            return hs_a110525vmae.hscall();
        } else {
            return hs_a110525vmae;
        }
    };
    hs_a110625vmai.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcisSigned1325vmak.evaluateOnce = function () {
        if (hs_a110625vmai.notEvaluated) {
            return hs_a110625vmai.hscall();
        } else {
            return hs_a110625vmai;
        }
    };
    hs_a110725vmam.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshiftL1325vmao.evaluateOnce = function () {
        if (hs_a110725vmam.notEvaluated) {
            return hs_a110725vmam.hscall();
        } else {
            return hs_a110725vmam;
        }
    };
    hs_a110825vmaq.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshiftR1325vmas.evaluateOnce = function () {
        if (hs_a110825vmaq.notEvaluated) {
            return hs_a110825vmaq.hscall();
        } else {
            return hs_a110825vmaq;
        }
    };
    hs_a110925vmau.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotateL1325vmaw.evaluateOnce = function () {
        if (hs_a110925vmau.notEvaluated) {
            return hs_a110925vmau.hscall();
        } else {
            return hs_a110925vmau;
        }
    };
    hs_a111025vmay.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotateR1325vmaA.evaluateOnce = function () {
        if (hs_a111025vmay.notEvaluated) {
            return hs_a111025vmay.hscall();
        } else {
            return hs_a111025vmay;
        }
    };
    hs_a111125vmaC.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcquot1325vmaE.evaluateOnce = function () {
        if (hs_a111125vmaC.notEvaluated) {
            return hs_a111125vmaC.hscall();
        } else {
            return hs_a111125vmaC;
        }
    };
    hs_a111225vmaG.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcrem1325vmaI.evaluateOnce = function () {
        if (hs_a111225vmaG.notEvaluated) {
            return hs_a111225vmaG.hscall();
        } else {
            return hs_a111225vmaG;
        }
    };
    hs_a111325vmaK.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcdiv1325vmaM.evaluateOnce = function () {
        if (hs_a111325vmaK.notEvaluated) {
            return hs_a111325vmaK.hscall();
        } else {
            return hs_a111325vmaK;
        }
    };
    hs_a111425vmaO.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcmod1325vmaQ.evaluateOnce = function () {
        if (hs_a111425vmaO.notEvaluated) {
            return hs_a111425vmaO.hscall();
        } else {
            return hs_a111425vmaO;
        }
    };
    hs_a111525vmaS.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcquotRem1325vmaU.evaluateOnce = function () {
        if (hs_a111525vmaS.notEvaluated) {
            return hs_a111525vmaS.hscall();
        } else {
            return hs_a111525vmaS;
        }
    };
    hs_a111625vmaW.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcdivMod1325vmaY.evaluateOnce = function () {
        if (hs_a111625vmaW.notEvaluated) {
            return hs_a111625vmaW.hscall();
        } else {
            return hs_a111625vmaW;
        }
    };
    hs_a111725vmb0.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdctoInteger1325vmb2.evaluateOnce = function () {
        if (hs_a111725vmb0.notEvaluated) {
            return hs_a111725vmb0.hscall();
        } else {
            return hs_a111725vmb0;
        }
    };
    hs_a111825vmb4.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt32);
    };
    hs_zdcminBound1325vmb6.evaluateOnce = function () {
        if (hs_a111825vmb4.notEvaluated) {
            return hs_a111825vmb4.hscall();
        } else {
            return hs_a111825vmb4;
        }
    };
    hs_a111925vmb8.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt32);
    };
    hs_zdcmaxBound1325vmba.evaluateOnce = function () {
        if (hs_a111925vmb8.notEvaluated) {
            return hs_a111925vmb8.hscall();
        } else {
            return hs_a111925vmb8;
        }
    };
    this.hs_zdfBoundedCInt.data = [hs_a111825vmb4, hs_a111925vmb8];
    hs_a112025vmbc.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziInt.hs_zdfRealInt32);
    };
    hs_zdctoRational1725vmbe.evaluateOnce = function () {
        if (hs_a112025vmbc.notEvaluated) {
            return hs_a112025vmbc.hscall();
        } else {
            return hs_a112025vmbc;
        }
    };
    hs_a112125vmbg.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcsizzeOf1725vmbi.evaluateOnce = function () {
        if (hs_a112125vmbg.notEvaluated) {
            return hs_a112125vmbg.hscall();
        } else {
            return hs_a112125vmbg;
        }
    };
    hs_a112225vmbk.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcalignment1725vmbm.evaluateOnce = function () {
        if (hs_a112225vmbk.notEvaluated) {
            return hs_a112225vmbk.hscall();
        } else {
            return hs_a112225vmbk;
        }
    };
    hs_a112325vmbo.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeekElemOff1725vmbq.evaluateOnce = function () {
        if (hs_a112325vmbo.notEvaluated) {
            return hs_a112325vmbo.hscall();
        } else {
            return hs_a112325vmbo;
        }
    };
    hs_a112425vmbs.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpokeElemOff1725vmbu.evaluateOnce = function () {
        if (hs_a112425vmbs.notEvaluated) {
            return hs_a112425vmbs.hscall();
        } else {
            return hs_a112425vmbs;
        }
    };
    hs_a112525vmbw.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeekByteOff1725vmby.evaluateOnce = function () {
        if (hs_a112525vmbw.notEvaluated) {
            return hs_a112525vmbw.hscall();
        } else {
            return hs_a112525vmbw;
        }
    };
    hs_a112625vmbA.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpokeByteOff1725vmbC.evaluateOnce = function () {
        if (hs_a112625vmbA.notEvaluated) {
            return hs_a112625vmbA.hscall();
        } else {
            return hs_a112625vmbA;
        }
    };
    hs_a112725vmbE.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeek1725vmbG.evaluateOnce = function () {
        if (hs_a112725vmbE.notEvaluated) {
            return hs_a112725vmbE.hscall();
        } else {
            return hs_a112725vmbE;
        }
    };
    hs_a112825vmbI.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpoke1725vmbK.evaluateOnce = function () {
        if (hs_a112825vmbI.notEvaluated) {
            return hs_a112825vmbI.hscall();
        } else {
            return hs_a112825vmbI;
        }
    };
    this.hs_zdfStorableCInt.data = [hs_a112125vmbg, hs_a112225vmbk, hs_a112325vmbo, hs_a112425vmbs, hs_a112525vmbw, hs_a112625vmbA, hs_a112725vmbE, hs_a112825vmbI];
    hs_a112925vmbM.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcsucc1725vmbO.evaluateOnce = function () {
        if (hs_a112925vmbM.notEvaluated) {
            return hs_a112925vmbM.hscall();
        } else {
            return hs_a112925vmbM;
        }
    };
    hs_a113025vmbQ.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcpred1725vmbS.evaluateOnce = function () {
        if (hs_a113025vmbQ.notEvaluated) {
            return hs_a113025vmbQ.hscall();
        } else {
            return hs_a113025vmbQ;
        }
    };
    hs_a113125vmbU.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdctoEnum1725vmbW.evaluateOnce = function () {
        if (hs_a113125vmbU.notEvaluated) {
            return hs_a113125vmbU.hscall();
        } else {
            return hs_a113125vmbU;
        }
    };
    hs_a113225vmbY.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcfromEnum1725vmc0.evaluateOnce = function () {
        if (hs_a113225vmbY.notEvaluated) {
            return hs_a113225vmbY.hscall();
        } else {
            return hs_a113225vmbY;
        }
    };
    hs_a113325vmc2.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFrom1725vmc4.evaluateOnce = function () {
        if (hs_a113325vmc2.notEvaluated) {
            return hs_a113325vmc2.hscall();
        } else {
            return hs_a113325vmc2;
        }
    };
    hs_a113425vmc6.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromThen1725vmc8.evaluateOnce = function () {
        if (hs_a113425vmc6.notEvaluated) {
            return hs_a113425vmc6.hscall();
        } else {
            return hs_a113425vmc6;
        }
    };
    hs_a113525vmca.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromTo1725vmcc.evaluateOnce = function () {
        if (hs_a113525vmca.notEvaluated) {
            return hs_a113525vmca.hscall();
        } else {
            return hs_a113525vmca;
        }
    };
    hs_a113625vmce.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromThenTo1725vmcg.evaluateOnce = function () {
        if (hs_a113625vmce.notEvaluated) {
            return hs_a113625vmce.hscall();
        } else {
            return hs_a113625vmce;
        }
    };
    this.hs_zdfEnumCInt.data = [hs_a112925vmbM, hs_a113025vmbQ, hs_a113125vmbU, hs_a113225vmbY, hs_a113325vmc2, hs_a113425vmc6, hs_a113525vmca, hs_a113625vmce];
    hs_a113725vmci.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczp1725vmck.evaluateOnce = function () {
        if (hs_a113725vmci.notEvaluated) {
            return hs_a113725vmci.hscall();
        } else {
            return hs_a113725vmci;
        }
    };
    hs_a113825vmcm.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczt1725vmco.evaluateOnce = function () {
        if (hs_a113825vmcm.notEvaluated) {
            return hs_a113825vmcm.hscall();
        } else {
            return hs_a113825vmcm;
        }
    };
    hs_a113925vmcq.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczm1725vmcs.evaluateOnce = function () {
        if (hs_a113925vmcq.notEvaluated) {
            return hs_a113925vmcq.hscall();
        } else {
            return hs_a113925vmcq;
        }
    };
    hs_a114025vmcu.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcnegate1725vmcw.evaluateOnce = function () {
        if (hs_a114025vmcu.notEvaluated) {
            return hs_a114025vmcu.hscall();
        } else {
            return hs_a114025vmcu;
        }
    };
    hs_a114125vmcy.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcabs1725vmcA.evaluateOnce = function () {
        if (hs_a114125vmcy.notEvaluated) {
            return hs_a114125vmcy.hscall();
        } else {
            return hs_a114125vmcy;
        }
    };
    hs_a114225vmcC.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcsignum1725vmcE.evaluateOnce = function () {
        if (hs_a114225vmcC.notEvaluated) {
            return hs_a114225vmcC.hscall();
        } else {
            return hs_a114225vmcC;
        }
    };
    hs_a114325vmcG.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcfromInteger1725vmcI.evaluateOnce = function () {
        if (hs_a114325vmcG.notEvaluated) {
            return hs_a114325vmcG.hscall();
        } else {
            return hs_a114325vmcG;
        }
    };
    hs_a114425vmcK.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdccompare1725vmcM.evaluateOnce = function () {
        if (hs_a114425vmcK.notEvaluated) {
            return hs_a114425vmcK.hscall();
        } else {
            return hs_a114425vmcK;
        }
    };
    hs_a114525vmcO.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczl1725vmcQ.evaluateOnce = function () {
        if (hs_a114525vmcO.notEvaluated) {
            return hs_a114525vmcO.hscall();
        } else {
            return hs_a114525vmcO;
        }
    };
    hs_a114625vmcS.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczgze1725vmcU.evaluateOnce = function () {
        if (hs_a114625vmcS.notEvaluated) {
            return hs_a114625vmcS.hscall();
        } else {
            return hs_a114625vmcS;
        }
    };
    hs_a114725vmcW.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczg1725vmcY.evaluateOnce = function () {
        if (hs_a114725vmcW.notEvaluated) {
            return hs_a114725vmcW.hscall();
        } else {
            return hs_a114725vmcW;
        }
    };
    hs_a114825vmd0.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczlze1725vmd2.evaluateOnce = function () {
        if (hs_a114825vmd0.notEvaluated) {
            return hs_a114825vmd0.hscall();
        } else {
            return hs_a114825vmd0;
        }
    };
    hs_a114925vmd4.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdcmax1725vmd6.evaluateOnce = function () {
        if (hs_a114925vmd4.notEvaluated) {
            return hs_a114925vmd4.hscall();
        } else {
            return hs_a114925vmd4;
        }
    };
    hs_a115025vmd8.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdcmin1725vmda.evaluateOnce = function () {
        if (hs_a115025vmd8.notEvaluated) {
            return hs_a115025vmd8.hscall();
        } else {
            return hs_a115025vmd8;
        }
    };
    hs_a115125vmdc.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32);
    };
    hs_zdczeze1725vmde.evaluateOnce = function () {
        if (hs_a115125vmdc.notEvaluated) {
            return hs_a115125vmdc.hscall();
        } else {
            return hs_a115125vmdc;
        }
    };
    hs_a115225vmdg.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32);
    };
    hs_zdczsze1725vmdi.evaluateOnce = function () {
        if (hs_a115225vmdg.notEvaluated) {
            return hs_a115225vmdg.hscall();
        } else {
            return hs_a115225vmdg;
        }
    };
    this.hs_zdfEqCInt.data = [hs_a115125vmdc, hs_a115225vmdg];
    this.hs_zdfOrdCInt.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_a114425vmcK, hs_a114525vmcO, hs_a114625vmcS, hs_a114725vmcW, hs_a114825vmd0, hs_a114925vmd4, hs_a115025vmd8];
    this.hs_zdfNumCInt.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCInt, $hs.modules.ForeignziCziTypes.hs_zdfShowCInt, hs_a113725vmci, hs_a113825vmcm, hs_a113925vmcq, hs_a114025vmcu, hs_a114125vmcy, hs_a114225vmcC, hs_a114325vmcG];
    this.hs_zdfRealCInt.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCInt, $hs.modules.ForeignziCziTypes.hs_zdfOrdCInt, hs_a112025vmbc];
    this.hs_zdfIntegralCInt.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealCInt, $hs.modules.ForeignziCziTypes.hs_zdfEnumCInt, hs_a111125vmaC, hs_a111225vmaG, hs_a111325vmaK, hs_a111425vmaO, hs_a111525vmaS, hs_a111625vmaW, hs_a111725vmb0];
    this.hs_zdfBitsCInt.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_a109425vm9w, hs_a109525vm9A, hs_a109625vm9E, hs_a109725vm9I, hs_a109825vm9M, hs_a109925vm9Q, hs_a110025vm9U, hs_a110125vm9Y, hs_a110225vma2, hs_a110325vma6, hs_a110425vmaa, hs_a110525vmae, hs_a110625vmai, hs_a110725vmam, hs_a110825vmaq, hs_a110925vmau, hs_a111025vmay];
    hs_a115325vmdk.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdczizazi1425vmdm.evaluateOnce = function () {
        if (hs_a115325vmdk.notEvaluated) {
            return hs_a115325vmdk.hscall();
        } else {
            return hs_a115325vmdk;
        }
    };
    hs_a115425vmdo.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdczizbzi1425vmdq.evaluateOnce = function () {
        if (hs_a115425vmdo.notEvaluated) {
            return hs_a115425vmdo.hscall();
        } else {
            return hs_a115425vmdo;
        }
    };
    hs_a115525vmds.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdcxor1425vmdu.evaluateOnce = function () {
        if (hs_a115525vmds.notEvaluated) {
            return hs_a115525vmds.hscall();
        } else {
            return hs_a115525vmds;
        }
    };
    hs_a115625vmdw.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdccomplement1425vmdy.evaluateOnce = function () {
        if (hs_a115625vmdw.notEvaluated) {
            return hs_a115625vmdw.hscall();
        } else {
            return hs_a115625vmdw;
        }
    };
    hs_a115725vmdA.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdcshift1425vmdC.evaluateOnce = function () {
        if (hs_a115725vmdA.notEvaluated) {
            return hs_a115725vmdA.hscall();
        } else {
            return hs_a115725vmdA;
        }
    };
    hs_a115825vmdE.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdcrotate1425vmdG.evaluateOnce = function () {
        if (hs_a115825vmdE.notEvaluated) {
            return hs_a115825vmdE.hscall();
        } else {
            return hs_a115825vmdE;
        }
    };
    hs_a115925vmdI.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdcbit1425vmdK.evaluateOnce = function () {
        if (hs_a115925vmdI.notEvaluated) {
            return hs_a115925vmdI.hscall();
        } else {
            return hs_a115925vmdI;
        }
    };
    hs_a116025vmdM.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdcsetBit1425vmdO.evaluateOnce = function () {
        if (hs_a116025vmdM.notEvaluated) {
            return hs_a116025vmdM.hscall();
        } else {
            return hs_a116025vmdM;
        }
    };
    hs_a116125vmdQ.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdcclearBit1425vmdS.evaluateOnce = function () {
        if (hs_a116125vmdQ.notEvaluated) {
            return hs_a116125vmdQ.hscall();
        } else {
            return hs_a116125vmdQ;
        }
    };
    hs_a116225vmdU.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdccomplementBit1425vmdW.evaluateOnce = function () {
        if (hs_a116225vmdU.notEvaluated) {
            return hs_a116225vmdU.hscall();
        } else {
            return hs_a116225vmdU;
        }
    };
    hs_a116325vmdY.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdctestBit1425vme0.evaluateOnce = function () {
        if (hs_a116325vmdY.notEvaluated) {
            return hs_a116325vmdY.hscall();
        } else {
            return hs_a116325vmdY;
        }
    };
    hs_a116425vme2.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdcbitSizze1425vme4.evaluateOnce = function () {
        if (hs_a116425vme2.notEvaluated) {
            return hs_a116425vme2.hscall();
        } else {
            return hs_a116425vme2;
        }
    };
    hs_a116525vme6.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdcisSigned1425vme8.evaluateOnce = function () {
        if (hs_a116525vme6.notEvaluated) {
            return hs_a116525vme6.hscall();
        } else {
            return hs_a116525vme6;
        }
    };
    hs_a116625vmea.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdcshiftL1425vmec.evaluateOnce = function () {
        if (hs_a116625vmea.notEvaluated) {
            return hs_a116625vmea.hscall();
        } else {
            return hs_a116625vmea;
        }
    };
    hs_a116725vmee.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdcshiftR1425vmeg.evaluateOnce = function () {
        if (hs_a116725vmee.notEvaluated) {
            return hs_a116725vmee.hscall();
        } else {
            return hs_a116725vmee;
        }
    };
    hs_a116825vmei.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdcrotateL1425vmek.evaluateOnce = function () {
        if (hs_a116825vmei.notEvaluated) {
            return hs_a116825vmei.hscall();
        } else {
            return hs_a116825vmei;
        }
    };
    hs_a116925vmem.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdcrotateR1425vmeo.evaluateOnce = function () {
        if (hs_a116925vmem.notEvaluated) {
            return hs_a116925vmem.hscall();
        } else {
            return hs_a116925vmem;
        }
    };
    hs_a117025vmeq.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord16);
    };
    hs_zdcquot1425vmes.evaluateOnce = function () {
        if (hs_a117025vmeq.notEvaluated) {
            return hs_a117025vmeq.hscall();
        } else {
            return hs_a117025vmeq;
        }
    };
    hs_a117125vmeu.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord16);
    };
    hs_zdcrem1425vmew.evaluateOnce = function () {
        if (hs_a117125vmeu.notEvaluated) {
            return hs_a117125vmeu.hscall();
        } else {
            return hs_a117125vmeu;
        }
    };
    hs_a117225vmey.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord16);
    };
    hs_zdcdiv1425vmeA.evaluateOnce = function () {
        if (hs_a117225vmey.notEvaluated) {
            return hs_a117225vmey.hscall();
        } else {
            return hs_a117225vmey;
        }
    };
    hs_a117325vmeC.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord16);
    };
    hs_zdcmod1425vmeE.evaluateOnce = function () {
        if (hs_a117325vmeC.notEvaluated) {
            return hs_a117325vmeC.hscall();
        } else {
            return hs_a117325vmeC;
        }
    };
    hs_a117425vmeG.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord16);
    };
    hs_zdcquotRem1425vmeI.evaluateOnce = function () {
        if (hs_a117425vmeG.notEvaluated) {
            return hs_a117425vmeG.hscall();
        } else {
            return hs_a117425vmeG;
        }
    };
    hs_a117525vmeK.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord16);
    };
    hs_zdcdivMod1425vmeM.evaluateOnce = function () {
        if (hs_a117525vmeK.notEvaluated) {
            return hs_a117525vmeK.hscall();
        } else {
            return hs_a117525vmeK;
        }
    };
    hs_a117625vmeO.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord16);
    };
    hs_zdctoInteger1425vmeQ.evaluateOnce = function () {
        if (hs_a117625vmeO.notEvaluated) {
            return hs_a117625vmeO.hscall();
        } else {
            return hs_a117625vmeO;
        }
    };
    hs_a117725vmeS.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord16);
    };
    hs_zdcminBound1425vmeU.evaluateOnce = function () {
        if (hs_a117725vmeS.notEvaluated) {
            return hs_a117725vmeS.hscall();
        } else {
            return hs_a117725vmeS;
        }
    };
    hs_a117825vmeW.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord16);
    };
    hs_zdcmaxBound1425vmeY.evaluateOnce = function () {
        if (hs_a117825vmeW.notEvaluated) {
            return hs_a117825vmeW.hscall();
        } else {
            return hs_a117825vmeW;
        }
    };
    this.hs_zdfBoundedCUShort.data = [hs_a117725vmeS, hs_a117825vmeW];
    hs_a117925vmf0.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziWord.hs_zdfRealWord16);
    };
    hs_zdctoRational1825vmf2.evaluateOnce = function () {
        if (hs_a117925vmf0.notEvaluated) {
            return hs_a117925vmf0.hscall();
        } else {
            return hs_a117925vmf0;
        }
    };
    hs_a118025vmf4.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord16);
    };
    hs_zdcsizzeOf1825vmf6.evaluateOnce = function () {
        if (hs_a118025vmf4.notEvaluated) {
            return hs_a118025vmf4.hscall();
        } else {
            return hs_a118025vmf4;
        }
    };
    hs_a118125vmf8.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord16);
    };
    hs_zdcalignment1825vmfa.evaluateOnce = function () {
        if (hs_a118125vmf8.notEvaluated) {
            return hs_a118125vmf8.hscall();
        } else {
            return hs_a118125vmf8;
        }
    };
    hs_a118225vmfc.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord16);
    };
    hs_zdcpeekElemOff1825vmfe.evaluateOnce = function () {
        if (hs_a118225vmfc.notEvaluated) {
            return hs_a118225vmfc.hscall();
        } else {
            return hs_a118225vmfc;
        }
    };
    hs_a118325vmfg.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord16);
    };
    hs_zdcpokeElemOff1825vmfi.evaluateOnce = function () {
        if (hs_a118325vmfg.notEvaluated) {
            return hs_a118325vmfg.hscall();
        } else {
            return hs_a118325vmfg;
        }
    };
    hs_a118425vmfk.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord16);
    };
    hs_zdcpeekByteOff1825vmfm.evaluateOnce = function () {
        if (hs_a118425vmfk.notEvaluated) {
            return hs_a118425vmfk.hscall();
        } else {
            return hs_a118425vmfk;
        }
    };
    hs_a118525vmfo.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord16);
    };
    hs_zdcpokeByteOff1825vmfq.evaluateOnce = function () {
        if (hs_a118525vmfo.notEvaluated) {
            return hs_a118525vmfo.hscall();
        } else {
            return hs_a118525vmfo;
        }
    };
    hs_a118625vmfs.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord16);
    };
    hs_zdcpeek1825vmfu.evaluateOnce = function () {
        if (hs_a118625vmfs.notEvaluated) {
            return hs_a118625vmfs.hscall();
        } else {
            return hs_a118625vmfs;
        }
    };
    hs_a118725vmfw.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord16);
    };
    hs_zdcpoke1825vmfy.evaluateOnce = function () {
        if (hs_a118725vmfw.notEvaluated) {
            return hs_a118725vmfw.hscall();
        } else {
            return hs_a118725vmfw;
        }
    };
    this.hs_zdfStorableCUShort.data = [hs_a118025vmf4, hs_a118125vmf8, hs_a118225vmfc, hs_a118325vmfg, hs_a118425vmfk, hs_a118525vmfo, hs_a118625vmfs, hs_a118725vmfw];
    hs_a118825vmfA.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziWord.hs_zdfEnumWord16);
    };
    hs_zdcsucc1825vmfC.evaluateOnce = function () {
        if (hs_a118825vmfA.notEvaluated) {
            return hs_a118825vmfA.hscall();
        } else {
            return hs_a118825vmfA;
        }
    };
    hs_a118925vmfE.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziWord.hs_zdfEnumWord16);
    };
    hs_zdcpred1825vmfG.evaluateOnce = function () {
        if (hs_a118925vmfE.notEvaluated) {
            return hs_a118925vmfE.hscall();
        } else {
            return hs_a118925vmfE;
        }
    };
    hs_a119025vmfI.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord16);
    };
    hs_zdctoEnum1825vmfK.evaluateOnce = function () {
        if (hs_a119025vmfI.notEvaluated) {
            return hs_a119025vmfI.hscall();
        } else {
            return hs_a119025vmfI;
        }
    };
    hs_a119125vmfM.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord16);
    };
    hs_zdcfromEnum1825vmfO.evaluateOnce = function () {
        if (hs_a119125vmfM.notEvaluated) {
            return hs_a119125vmfM.hscall();
        } else {
            return hs_a119125vmfM;
        }
    };
    hs_a119225vmfQ.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziWord.hs_zdfEnumWord16);
    };
    hs_zdcenumFrom1825vmfS.evaluateOnce = function () {
        if (hs_a119225vmfQ.notEvaluated) {
            return hs_a119225vmfQ.hscall();
        } else {
            return hs_a119225vmfQ;
        }
    };
    hs_a119325vmfU.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziWord.hs_zdfEnumWord16);
    };
    hs_zdcenumFromThen1825vmfW.evaluateOnce = function () {
        if (hs_a119325vmfU.notEvaluated) {
            return hs_a119325vmfU.hscall();
        } else {
            return hs_a119325vmfU;
        }
    };
    hs_a119425vmfY.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord16);
    };
    hs_zdcenumFromTo1825vmg0.evaluateOnce = function () {
        if (hs_a119425vmfY.notEvaluated) {
            return hs_a119425vmfY.hscall();
        } else {
            return hs_a119425vmfY;
        }
    };
    hs_a119525vmg2.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord16);
    };
    hs_zdcenumFromThenTo1825vmg4.evaluateOnce = function () {
        if (hs_a119525vmg2.notEvaluated) {
            return hs_a119525vmg2.hscall();
        } else {
            return hs_a119525vmg2;
        }
    };
    this.hs_zdfEnumCUShort.data = [hs_a118825vmfA, hs_a118925vmfE, hs_a119025vmfI, hs_a119125vmfM, hs_a119225vmfQ, hs_a119325vmfU, hs_a119425vmfY, hs_a119525vmg2];
    hs_a119625vmg6.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord16);
    };
    hs_zdczp1825vmg8.evaluateOnce = function () {
        if (hs_a119625vmg6.notEvaluated) {
            return hs_a119625vmg6.hscall();
        } else {
            return hs_a119625vmg6;
        }
    };
    hs_a119725vmga.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziWord.hs_zdfNumWord16);
    };
    hs_zdczt1825vmgc.evaluateOnce = function () {
        if (hs_a119725vmga.notEvaluated) {
            return hs_a119725vmga.hscall();
        } else {
            return hs_a119725vmga;
        }
    };
    hs_a119825vmge.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord16);
    };
    hs_zdczm1825vmgg.evaluateOnce = function () {
        if (hs_a119825vmge.notEvaluated) {
            return hs_a119825vmge.hscall();
        } else {
            return hs_a119825vmge;
        }
    };
    hs_a119925vmgi.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziWord.hs_zdfNumWord16);
    };
    hs_zdcnegate1825vmgk.evaluateOnce = function () {
        if (hs_a119925vmgi.notEvaluated) {
            return hs_a119925vmgi.hscall();
        } else {
            return hs_a119925vmgi;
        }
    };
    hs_a120025vmgm.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziWord.hs_zdfNumWord16);
    };
    hs_zdcabs1825vmgo.evaluateOnce = function () {
        if (hs_a120025vmgm.notEvaluated) {
            return hs_a120025vmgm.hscall();
        } else {
            return hs_a120025vmgm;
        }
    };
    hs_a120125vmgq.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziWord.hs_zdfNumWord16);
    };
    hs_zdcsignum1825vmgs.evaluateOnce = function () {
        if (hs_a120125vmgq.notEvaluated) {
            return hs_a120125vmgq.hscall();
        } else {
            return hs_a120125vmgq;
        }
    };
    hs_a120225vmgu.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16);
    };
    hs_zdcfromInteger1825vmgw.evaluateOnce = function () {
        if (hs_a120225vmgu.notEvaluated) {
            return hs_a120225vmgu.hscall();
        } else {
            return hs_a120225vmgu;
        }
    };
    hs_a120325vmgy.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord16);
    };
    hs_zdccompare1825vmgA.evaluateOnce = function () {
        if (hs_a120325vmgy.notEvaluated) {
            return hs_a120325vmgy.hscall();
        } else {
            return hs_a120325vmgy;
        }
    };
    hs_a120425vmgC.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziWord.hs_zdfOrdWord16);
    };
    hs_zdczl1825vmgE.evaluateOnce = function () {
        if (hs_a120425vmgC.notEvaluated) {
            return hs_a120425vmgC.hscall();
        } else {
            return hs_a120425vmgC;
        }
    };
    hs_a120525vmgG.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord16);
    };
    hs_zdczgze1825vmgI.evaluateOnce = function () {
        if (hs_a120525vmgG.notEvaluated) {
            return hs_a120525vmgG.hscall();
        } else {
            return hs_a120525vmgG;
        }
    };
    hs_a120625vmgK.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziWord.hs_zdfOrdWord16);
    };
    hs_zdczg1825vmgM.evaluateOnce = function () {
        if (hs_a120625vmgK.notEvaluated) {
            return hs_a120625vmgK.hscall();
        } else {
            return hs_a120625vmgK;
        }
    };
    hs_a120725vmgO.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord16);
    };
    hs_zdczlze1825vmgQ.evaluateOnce = function () {
        if (hs_a120725vmgO.notEvaluated) {
            return hs_a120725vmgO.hscall();
        } else {
            return hs_a120725vmgO;
        }
    };
    hs_a120825vmgS.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziWord.hs_zdfOrdWord16);
    };
    hs_zdcmax1825vmgU.evaluateOnce = function () {
        if (hs_a120825vmgS.notEvaluated) {
            return hs_a120825vmgS.hscall();
        } else {
            return hs_a120825vmgS;
        }
    };
    hs_a120925vmgW.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziWord.hs_zdfOrdWord16);
    };
    hs_zdcmin1825vmgY.evaluateOnce = function () {
        if (hs_a120925vmgW.notEvaluated) {
            return hs_a120925vmgW.hscall();
        } else {
            return hs_a120925vmgW;
        }
    };
    hs_a121025vmh0.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord16);
    };
    hs_zdczeze1825vmh2.evaluateOnce = function () {
        if (hs_a121025vmh0.notEvaluated) {
            return hs_a121025vmh0.hscall();
        } else {
            return hs_a121025vmh0;
        }
    };
    hs_a121125vmh4.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord16);
    };
    hs_zdczsze1825vmh6.evaluateOnce = function () {
        if (hs_a121125vmh4.notEvaluated) {
            return hs_a121125vmh4.hscall();
        } else {
            return hs_a121125vmh4;
        }
    };
    this.hs_zdfEqCUShort.data = [hs_a121025vmh0, hs_a121125vmh4];
    this.hs_zdfOrdCUShort.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCUShort, hs_a120325vmgy, hs_a120425vmgC, hs_a120525vmgG, hs_a120625vmgK, hs_a120725vmgO, hs_a120825vmgS, hs_a120925vmgW];
    this.hs_zdfNumCUShort.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCUShort, $hs.modules.ForeignziCziTypes.hs_zdfShowCUShort, hs_a119625vmg6, hs_a119725vmga, hs_a119825vmge, hs_a119925vmgi, hs_a120025vmgm, hs_a120125vmgq, hs_a120225vmgu];
    this.hs_zdfRealCUShort.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCUShort, $hs.modules.ForeignziCziTypes.hs_zdfOrdCUShort, hs_a117925vmf0];
    this.hs_zdfIntegralCUShort.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealCUShort, $hs.modules.ForeignziCziTypes.hs_zdfEnumCUShort, hs_a117025vmeq, hs_a117125vmeu, hs_a117225vmey, hs_a117325vmeC, hs_a117425vmeG, hs_a117525vmeK, hs_a117625vmeO];
    this.hs_zdfBitsCUShort.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCUShort, hs_a115325vmdk, hs_a115425vmdo, hs_a115525vmds, hs_a115625vmdw, hs_a115725vmdA, hs_a115825vmdE, hs_a115925vmdI, hs_a116025vmdM, hs_a116125vmdQ, hs_a116225vmdU, hs_a116325vmdY, hs_a116425vme2, hs_a116525vme6, hs_a116625vmea, hs_a116725vmee, hs_a116825vmei, hs_a116925vmem];
    hs_a121225vmh8.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt16);
    };
    hs_zdczizazi1525vmha.evaluateOnce = function () {
        if (hs_a121225vmh8.notEvaluated) {
            return hs_a121225vmh8.hscall();
        } else {
            return hs_a121225vmh8;
        }
    };
    hs_a121325vmhc.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt16);
    };
    hs_zdczizbzi1525vmhe.evaluateOnce = function () {
        if (hs_a121325vmhc.notEvaluated) {
            return hs_a121325vmhc.hscall();
        } else {
            return hs_a121325vmhc;
        }
    };
    hs_a121425vmhg.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziInt.hs_zdfBitsInt16);
    };
    hs_zdcxor1525vmhi.evaluateOnce = function () {
        if (hs_a121425vmhg.notEvaluated) {
            return hs_a121425vmhg.hscall();
        } else {
            return hs_a121425vmhg;
        }
    };
    hs_a121525vmhk.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziInt.hs_zdfBitsInt16);
    };
    hs_zdccomplement1525vmhm.evaluateOnce = function () {
        if (hs_a121525vmhk.notEvaluated) {
            return hs_a121525vmhk.hscall();
        } else {
            return hs_a121525vmhk;
        }
    };
    hs_a121625vmho.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziInt.hs_zdfBitsInt16);
    };
    hs_zdcshift1525vmhq.evaluateOnce = function () {
        if (hs_a121625vmho.notEvaluated) {
            return hs_a121625vmho.hscall();
        } else {
            return hs_a121625vmho;
        }
    };
    hs_a121725vmhs.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziInt.hs_zdfBitsInt16);
    };
    hs_zdcrotate1525vmhu.evaluateOnce = function () {
        if (hs_a121725vmhs.notEvaluated) {
            return hs_a121725vmhs.hscall();
        } else {
            return hs_a121725vmhs;
        }
    };
    hs_a121825vmhw.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt16);
    };
    hs_zdcbit1525vmhy.evaluateOnce = function () {
        if (hs_a121825vmhw.notEvaluated) {
            return hs_a121825vmhw.hscall();
        } else {
            return hs_a121825vmhw;
        }
    };
    hs_a121925vmhA.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt16);
    };
    hs_zdcsetBit1525vmhC.evaluateOnce = function () {
        if (hs_a121925vmhA.notEvaluated) {
            return hs_a121925vmhA.hscall();
        } else {
            return hs_a121925vmhA;
        }
    };
    hs_a122025vmhE.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt16);
    };
    hs_zdcclearBit1525vmhG.evaluateOnce = function () {
        if (hs_a122025vmhE.notEvaluated) {
            return hs_a122025vmhE.hscall();
        } else {
            return hs_a122025vmhE;
        }
    };
    hs_a122125vmhI.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt16);
    };
    hs_zdccomplementBit1525vmhK.evaluateOnce = function () {
        if (hs_a122125vmhI.notEvaluated) {
            return hs_a122125vmhI.hscall();
        } else {
            return hs_a122125vmhI;
        }
    };
    hs_a122225vmhM.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt16);
    };
    hs_zdctestBit1525vmhO.evaluateOnce = function () {
        if (hs_a122225vmhM.notEvaluated) {
            return hs_a122225vmhM.hscall();
        } else {
            return hs_a122225vmhM;
        }
    };
    hs_a122325vmhQ.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziInt.hs_zdfBitsInt16);
    };
    hs_zdcbitSizze1525vmhS.evaluateOnce = function () {
        if (hs_a122325vmhQ.notEvaluated) {
            return hs_a122325vmhQ.hscall();
        } else {
            return hs_a122325vmhQ;
        }
    };
    hs_a122425vmhU.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziInt.hs_zdfBitsInt16);
    };
    hs_zdcisSigned1525vmhW.evaluateOnce = function () {
        if (hs_a122425vmhU.notEvaluated) {
            return hs_a122425vmhU.hscall();
        } else {
            return hs_a122425vmhU;
        }
    };
    hs_a122525vmhY.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt16);
    };
    hs_zdcshiftL1525vmi0.evaluateOnce = function () {
        if (hs_a122525vmhY.notEvaluated) {
            return hs_a122525vmhY.hscall();
        } else {
            return hs_a122525vmhY;
        }
    };
    hs_a122625vmi2.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt16);
    };
    hs_zdcshiftR1525vmi4.evaluateOnce = function () {
        if (hs_a122625vmi2.notEvaluated) {
            return hs_a122625vmi2.hscall();
        } else {
            return hs_a122625vmi2;
        }
    };
    hs_a122725vmi6.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt16);
    };
    hs_zdcrotateL1525vmi8.evaluateOnce = function () {
        if (hs_a122725vmi6.notEvaluated) {
            return hs_a122725vmi6.hscall();
        } else {
            return hs_a122725vmi6;
        }
    };
    hs_a122825vmia.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt16);
    };
    hs_zdcrotateR1525vmic.evaluateOnce = function () {
        if (hs_a122825vmia.notEvaluated) {
            return hs_a122825vmia.hscall();
        } else {
            return hs_a122825vmia;
        }
    };
    hs_a122925vmie.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt16);
    };
    hs_zdcquot1525vmig.evaluateOnce = function () {
        if (hs_a122925vmie.notEvaluated) {
            return hs_a122925vmie.hscall();
        } else {
            return hs_a122925vmie;
        }
    };
    hs_a123025vmii.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt16);
    };
    hs_zdcrem1525vmik.evaluateOnce = function () {
        if (hs_a123025vmii.notEvaluated) {
            return hs_a123025vmii.hscall();
        } else {
            return hs_a123025vmii;
        }
    };
    hs_a123125vmim.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt16);
    };
    hs_zdcdiv1525vmio.evaluateOnce = function () {
        if (hs_a123125vmim.notEvaluated) {
            return hs_a123125vmim.hscall();
        } else {
            return hs_a123125vmim;
        }
    };
    hs_a123225vmiq.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt16);
    };
    hs_zdcmod1525vmis.evaluateOnce = function () {
        if (hs_a123225vmiq.notEvaluated) {
            return hs_a123225vmiq.hscall();
        } else {
            return hs_a123225vmiq;
        }
    };
    hs_a123325vmiu.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt16);
    };
    hs_zdcquotRem1525vmiw.evaluateOnce = function () {
        if (hs_a123325vmiu.notEvaluated) {
            return hs_a123325vmiu.hscall();
        } else {
            return hs_a123325vmiu;
        }
    };
    hs_a123425vmiy.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt16);
    };
    hs_zdcdivMod1525vmiA.evaluateOnce = function () {
        if (hs_a123425vmiy.notEvaluated) {
            return hs_a123425vmiy.hscall();
        } else {
            return hs_a123425vmiy;
        }
    };
    hs_a123525vmiC.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt16);
    };
    hs_zdctoInteger1525vmiE.evaluateOnce = function () {
        if (hs_a123525vmiC.notEvaluated) {
            return hs_a123525vmiC.hscall();
        } else {
            return hs_a123525vmiC;
        }
    };
    hs_a123625vmiG.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt16);
    };
    hs_zdcminBound1525vmiI.evaluateOnce = function () {
        if (hs_a123625vmiG.notEvaluated) {
            return hs_a123625vmiG.hscall();
        } else {
            return hs_a123625vmiG;
        }
    };
    hs_a123725vmiK.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt16);
    };
    hs_zdcmaxBound1525vmiM.evaluateOnce = function () {
        if (hs_a123725vmiK.notEvaluated) {
            return hs_a123725vmiK.hscall();
        } else {
            return hs_a123725vmiK;
        }
    };
    this.hs_zdfBoundedCShort.data = [hs_a123625vmiG, hs_a123725vmiK];
    hs_a123825vmiO.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziInt.hs_zdfRealInt16);
    };
    hs_zdctoRational1925vmiQ.evaluateOnce = function () {
        if (hs_a123825vmiO.notEvaluated) {
            return hs_a123825vmiO.hscall();
        } else {
            return hs_a123825vmiO;
        }
    };
    hs_a123925vmiS.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt16);
    };
    hs_zdcsizzeOf1925vmiU.evaluateOnce = function () {
        if (hs_a123925vmiS.notEvaluated) {
            return hs_a123925vmiS.hscall();
        } else {
            return hs_a123925vmiS;
        }
    };
    hs_a124025vmiW.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt16);
    };
    hs_zdcalignment1925vmiY.evaluateOnce = function () {
        if (hs_a124025vmiW.notEvaluated) {
            return hs_a124025vmiW.hscall();
        } else {
            return hs_a124025vmiW;
        }
    };
    hs_a124125vmj0.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt16);
    };
    hs_zdcpeekElemOff1925vmj2.evaluateOnce = function () {
        if (hs_a124125vmj0.notEvaluated) {
            return hs_a124125vmj0.hscall();
        } else {
            return hs_a124125vmj0;
        }
    };
    hs_a124225vmj4.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt16);
    };
    hs_zdcpokeElemOff1925vmj6.evaluateOnce = function () {
        if (hs_a124225vmj4.notEvaluated) {
            return hs_a124225vmj4.hscall();
        } else {
            return hs_a124225vmj4;
        }
    };
    hs_a124325vmj8.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt16);
    };
    hs_zdcpeekByteOff1925vmja.evaluateOnce = function () {
        if (hs_a124325vmj8.notEvaluated) {
            return hs_a124325vmj8.hscall();
        } else {
            return hs_a124325vmj8;
        }
    };
    hs_a124425vmjc.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt16);
    };
    hs_zdcpokeByteOff1925vmje.evaluateOnce = function () {
        if (hs_a124425vmjc.notEvaluated) {
            return hs_a124425vmjc.hscall();
        } else {
            return hs_a124425vmjc;
        }
    };
    hs_a124525vmjg.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt16);
    };
    hs_zdcpeek1925vmji.evaluateOnce = function () {
        if (hs_a124525vmjg.notEvaluated) {
            return hs_a124525vmjg.hscall();
        } else {
            return hs_a124525vmjg;
        }
    };
    hs_a124625vmjk.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt16);
    };
    hs_zdcpoke1925vmjm.evaluateOnce = function () {
        if (hs_a124625vmjk.notEvaluated) {
            return hs_a124625vmjk.hscall();
        } else {
            return hs_a124625vmjk;
        }
    };
    this.hs_zdfStorableCShort.data = [hs_a123925vmiS, hs_a124025vmiW, hs_a124125vmj0, hs_a124225vmj4, hs_a124325vmj8, hs_a124425vmjc, hs_a124525vmjg, hs_a124625vmjk];
    hs_a124725vmjo.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziInt.hs_zdfEnumInt16);
    };
    hs_zdcsucc1925vmjq.evaluateOnce = function () {
        if (hs_a124725vmjo.notEvaluated) {
            return hs_a124725vmjo.hscall();
        } else {
            return hs_a124725vmjo;
        }
    };
    hs_a124825vmjs.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziInt.hs_zdfEnumInt16);
    };
    hs_zdcpred1925vmju.evaluateOnce = function () {
        if (hs_a124825vmjs.notEvaluated) {
            return hs_a124825vmjs.hscall();
        } else {
            return hs_a124825vmjs;
        }
    };
    hs_a124925vmjw.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt16);
    };
    hs_zdctoEnum1925vmjy.evaluateOnce = function () {
        if (hs_a124925vmjw.notEvaluated) {
            return hs_a124925vmjw.hscall();
        } else {
            return hs_a124925vmjw;
        }
    };
    hs_a125025vmjA.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt16);
    };
    hs_zdcfromEnum1925vmjC.evaluateOnce = function () {
        if (hs_a125025vmjA.notEvaluated) {
            return hs_a125025vmjA.hscall();
        } else {
            return hs_a125025vmjA;
        }
    };
    hs_a125125vmjE.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziInt.hs_zdfEnumInt16);
    };
    hs_zdcenumFrom1925vmjG.evaluateOnce = function () {
        if (hs_a125125vmjE.notEvaluated) {
            return hs_a125125vmjE.hscall();
        } else {
            return hs_a125125vmjE;
        }
    };
    hs_a125225vmjI.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziInt.hs_zdfEnumInt16);
    };
    hs_zdcenumFromThen1925vmjK.evaluateOnce = function () {
        if (hs_a125225vmjI.notEvaluated) {
            return hs_a125225vmjI.hscall();
        } else {
            return hs_a125225vmjI;
        }
    };
    hs_a125325vmjM.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt16);
    };
    hs_zdcenumFromTo1925vmjO.evaluateOnce = function () {
        if (hs_a125325vmjM.notEvaluated) {
            return hs_a125325vmjM.hscall();
        } else {
            return hs_a125325vmjM;
        }
    };
    hs_a125425vmjQ.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt16);
    };
    hs_zdcenumFromThenTo1925vmjS.evaluateOnce = function () {
        if (hs_a125425vmjQ.notEvaluated) {
            return hs_a125425vmjQ.hscall();
        } else {
            return hs_a125425vmjQ;
        }
    };
    this.hs_zdfEnumCShort.data = [hs_a124725vmjo, hs_a124825vmjs, hs_a124925vmjw, hs_a125025vmjA, hs_a125125vmjE, hs_a125225vmjI, hs_a125325vmjM, hs_a125425vmjQ];
    hs_a125525vmjU.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt16);
    };
    hs_zdczp1925vmjW.evaluateOnce = function () {
        if (hs_a125525vmjU.notEvaluated) {
            return hs_a125525vmjU.hscall();
        } else {
            return hs_a125525vmjU;
        }
    };
    hs_a125625vmjY.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziInt.hs_zdfNumInt16);
    };
    hs_zdczt1925vmk0.evaluateOnce = function () {
        if (hs_a125625vmjY.notEvaluated) {
            return hs_a125625vmjY.hscall();
        } else {
            return hs_a125625vmjY;
        }
    };
    hs_a125725vmk2.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziInt.hs_zdfNumInt16);
    };
    hs_zdczm1925vmk4.evaluateOnce = function () {
        if (hs_a125725vmk2.notEvaluated) {
            return hs_a125725vmk2.hscall();
        } else {
            return hs_a125725vmk2;
        }
    };
    hs_a125825vmk6.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt16);
    };
    hs_zdcnegate1925vmk8.evaluateOnce = function () {
        if (hs_a125825vmk6.notEvaluated) {
            return hs_a125825vmk6.hscall();
        } else {
            return hs_a125825vmk6;
        }
    };
    hs_a125925vmka.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziInt.hs_zdfNumInt16);
    };
    hs_zdcabs1925vmkc.evaluateOnce = function () {
        if (hs_a125925vmka.notEvaluated) {
            return hs_a125925vmka.hscall();
        } else {
            return hs_a125925vmka;
        }
    };
    hs_a126025vmke.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziInt.hs_zdfNumInt16);
    };
    hs_zdcsignum1925vmkg.evaluateOnce = function () {
        if (hs_a126025vmke.notEvaluated) {
            return hs_a126025vmke.hscall();
        } else {
            return hs_a126025vmke;
        }
    };
    hs_a126125vmki.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt16);
    };
    hs_zdcfromInteger1925vmkk.evaluateOnce = function () {
        if (hs_a126125vmki.notEvaluated) {
            return hs_a126125vmki.hscall();
        } else {
            return hs_a126125vmki;
        }
    };
    hs_a126225vmkm.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziInt.hs_zdfOrdInt16);
    };
    hs_zdccompare1925vmko.evaluateOnce = function () {
        if (hs_a126225vmkm.notEvaluated) {
            return hs_a126225vmkm.hscall();
        } else {
            return hs_a126225vmkm;
        }
    };
    hs_a126325vmkq.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziInt.hs_zdfOrdInt16);
    };
    hs_zdczl1925vmks.evaluateOnce = function () {
        if (hs_a126325vmkq.notEvaluated) {
            return hs_a126325vmkq.hscall();
        } else {
            return hs_a126325vmkq;
        }
    };
    hs_a126425vmku.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt16);
    };
    hs_zdczgze1925vmkw.evaluateOnce = function () {
        if (hs_a126425vmku.notEvaluated) {
            return hs_a126425vmku.hscall();
        } else {
            return hs_a126425vmku;
        }
    };
    hs_a126525vmky.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziInt.hs_zdfOrdInt16);
    };
    hs_zdczg1925vmkA.evaluateOnce = function () {
        if (hs_a126525vmky.notEvaluated) {
            return hs_a126525vmky.hscall();
        } else {
            return hs_a126525vmky;
        }
    };
    hs_a126625vmkC.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt16);
    };
    hs_zdczlze1925vmkE.evaluateOnce = function () {
        if (hs_a126625vmkC.notEvaluated) {
            return hs_a126625vmkC.hscall();
        } else {
            return hs_a126625vmkC;
        }
    };
    hs_a126725vmkG.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziInt.hs_zdfOrdInt16);
    };
    hs_zdcmax1925vmkI.evaluateOnce = function () {
        if (hs_a126725vmkG.notEvaluated) {
            return hs_a126725vmkG.hscall();
        } else {
            return hs_a126725vmkG;
        }
    };
    hs_a126825vmkK.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziInt.hs_zdfOrdInt16);
    };
    hs_zdcmin1925vmkM.evaluateOnce = function () {
        if (hs_a126825vmkK.notEvaluated) {
            return hs_a126825vmkK.hscall();
        } else {
            return hs_a126825vmkK;
        }
    };
    hs_a126925vmkO.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt16);
    };
    hs_zdczeze1925vmkQ.evaluateOnce = function () {
        if (hs_a126925vmkO.notEvaluated) {
            return hs_a126925vmkO.hscall();
        } else {
            return hs_a126925vmkO;
        }
    };
    hs_a127025vmkS.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt16);
    };
    hs_zdczsze1925vmkU.evaluateOnce = function () {
        if (hs_a127025vmkS.notEvaluated) {
            return hs_a127025vmkS.hscall();
        } else {
            return hs_a127025vmkS;
        }
    };
    this.hs_zdfEqCShort.data = [hs_a126925vmkO, hs_a127025vmkS];
    this.hs_zdfOrdCShort.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCShort, hs_a126225vmkm, hs_a126325vmkq, hs_a126425vmku, hs_a126525vmky, hs_a126625vmkC, hs_a126725vmkG, hs_a126825vmkK];
    this.hs_zdfNumCShort.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCShort, $hs.modules.ForeignziCziTypes.hs_zdfShowCShort, hs_a125525vmjU, hs_a125625vmjY, hs_a125725vmk2, hs_a125825vmk6, hs_a125925vmka, hs_a126025vmke, hs_a126125vmki];
    this.hs_zdfRealCShort.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCShort, $hs.modules.ForeignziCziTypes.hs_zdfOrdCShort, hs_a123825vmiO];
    this.hs_zdfIntegralCShort.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealCShort, $hs.modules.ForeignziCziTypes.hs_zdfEnumCShort, hs_a122925vmie, hs_a123025vmii, hs_a123125vmim, hs_a123225vmiq, hs_a123325vmiu, hs_a123425vmiy, hs_a123525vmiC];
    this.hs_zdfBitsCShort.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCShort, hs_a121225vmh8, hs_a121325vmhc, hs_a121425vmhg, hs_a121525vmhk, hs_a121625vmho, hs_a121725vmhs, hs_a121825vmhw, hs_a121925vmhA, hs_a122025vmhE, hs_a122125vmhI, hs_a122225vmhM, hs_a122325vmhQ, hs_a122425vmhU, hs_a122525vmhY, hs_a122625vmi2, hs_a122725vmi6, hs_a122825vmia];
    hs_a127125vmkW.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdczizazi1625vmkY.evaluateOnce = function () {
        if (hs_a127125vmkW.notEvaluated) {
            return hs_a127125vmkW.hscall();
        } else {
            return hs_a127125vmkW;
        }
    };
    hs_a127225vml0.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdczizbzi1625vml2.evaluateOnce = function () {
        if (hs_a127225vml0.notEvaluated) {
            return hs_a127225vml0.hscall();
        } else {
            return hs_a127225vml0;
        }
    };
    hs_a127325vml4.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdcxor1625vml6.evaluateOnce = function () {
        if (hs_a127325vml4.notEvaluated) {
            return hs_a127325vml4.hscall();
        } else {
            return hs_a127325vml4;
        }
    };
    hs_a127425vml8.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdccomplement1625vmla.evaluateOnce = function () {
        if (hs_a127425vml8.notEvaluated) {
            return hs_a127425vml8.hscall();
        } else {
            return hs_a127425vml8;
        }
    };
    hs_a127525vmlc.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdcshift1625vmle.evaluateOnce = function () {
        if (hs_a127525vmlc.notEvaluated) {
            return hs_a127525vmlc.hscall();
        } else {
            return hs_a127525vmlc;
        }
    };
    hs_a127625vmlg.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdcrotate1625vmli.evaluateOnce = function () {
        if (hs_a127625vmlg.notEvaluated) {
            return hs_a127625vmlg.hscall();
        } else {
            return hs_a127625vmlg;
        }
    };
    hs_a127725vmlk.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdcbit1625vmlm.evaluateOnce = function () {
        if (hs_a127725vmlk.notEvaluated) {
            return hs_a127725vmlk.hscall();
        } else {
            return hs_a127725vmlk;
        }
    };
    hs_a127825vmlo.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdcsetBit1625vmlq.evaluateOnce = function () {
        if (hs_a127825vmlo.notEvaluated) {
            return hs_a127825vmlo.hscall();
        } else {
            return hs_a127825vmlo;
        }
    };
    hs_a127925vmls.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdcclearBit1625vmlu.evaluateOnce = function () {
        if (hs_a127925vmls.notEvaluated) {
            return hs_a127925vmls.hscall();
        } else {
            return hs_a127925vmls;
        }
    };
    hs_a128025vmlw.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdccomplementBit1625vmly.evaluateOnce = function () {
        if (hs_a128025vmlw.notEvaluated) {
            return hs_a128025vmlw.hscall();
        } else {
            return hs_a128025vmlw;
        }
    };
    hs_a128125vmlA.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdctestBit1625vmlC.evaluateOnce = function () {
        if (hs_a128125vmlA.notEvaluated) {
            return hs_a128125vmlA.hscall();
        } else {
            return hs_a128125vmlA;
        }
    };
    hs_a128225vmlE.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdcbitSizze1625vmlG.evaluateOnce = function () {
        if (hs_a128225vmlE.notEvaluated) {
            return hs_a128225vmlE.hscall();
        } else {
            return hs_a128225vmlE;
        }
    };
    hs_a128325vmlI.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdcisSigned1625vmlK.evaluateOnce = function () {
        if (hs_a128325vmlI.notEvaluated) {
            return hs_a128325vmlI.hscall();
        } else {
            return hs_a128325vmlI;
        }
    };
    hs_a128425vmlM.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdcshiftL1625vmlO.evaluateOnce = function () {
        if (hs_a128425vmlM.notEvaluated) {
            return hs_a128425vmlM.hscall();
        } else {
            return hs_a128425vmlM;
        }
    };
    hs_a128525vmlQ.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdcshiftR1625vmlS.evaluateOnce = function () {
        if (hs_a128525vmlQ.notEvaluated) {
            return hs_a128525vmlQ.hscall();
        } else {
            return hs_a128525vmlQ;
        }
    };
    hs_a128625vmlU.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdcrotateL1625vmlW.evaluateOnce = function () {
        if (hs_a128625vmlU.notEvaluated) {
            return hs_a128625vmlU.hscall();
        } else {
            return hs_a128625vmlU;
        }
    };
    hs_a128725vmlY.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdcrotateR1625vmm0.evaluateOnce = function () {
        if (hs_a128725vmlY.notEvaluated) {
            return hs_a128725vmlY.hscall();
        } else {
            return hs_a128725vmlY;
        }
    };
    hs_a128825vmm2.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8);
    };
    hs_zdcquot1625vmm4.evaluateOnce = function () {
        if (hs_a128825vmm2.notEvaluated) {
            return hs_a128825vmm2.hscall();
        } else {
            return hs_a128825vmm2;
        }
    };
    hs_a128925vmm6.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8);
    };
    hs_zdcrem1625vmm8.evaluateOnce = function () {
        if (hs_a128925vmm6.notEvaluated) {
            return hs_a128925vmm6.hscall();
        } else {
            return hs_a128925vmm6;
        }
    };
    hs_a129025vmma.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8);
    };
    hs_zdcdiv1625vmmc.evaluateOnce = function () {
        if (hs_a129025vmma.notEvaluated) {
            return hs_a129025vmma.hscall();
        } else {
            return hs_a129025vmma;
        }
    };
    hs_a129125vmme.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8);
    };
    hs_zdcmod1625vmmg.evaluateOnce = function () {
        if (hs_a129125vmme.notEvaluated) {
            return hs_a129125vmme.hscall();
        } else {
            return hs_a129125vmme;
        }
    };
    hs_a129225vmmi.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8);
    };
    hs_zdcquotRem1625vmmk.evaluateOnce = function () {
        if (hs_a129225vmmi.notEvaluated) {
            return hs_a129225vmmi.hscall();
        } else {
            return hs_a129225vmmi;
        }
    };
    hs_a129325vmmm.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8);
    };
    hs_zdcdivMod1625vmmo.evaluateOnce = function () {
        if (hs_a129325vmmm.notEvaluated) {
            return hs_a129325vmmm.hscall();
        } else {
            return hs_a129325vmmm;
        }
    };
    hs_a129425vmmq.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8);
    };
    hs_zdctoInteger1625vmms.evaluateOnce = function () {
        if (hs_a129425vmmq.notEvaluated) {
            return hs_a129425vmmq.hscall();
        } else {
            return hs_a129425vmmq;
        }
    };
    hs_a129525vmmu.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord8);
    };
    hs_zdcminBound1625vmmw.evaluateOnce = function () {
        if (hs_a129525vmmu.notEvaluated) {
            return hs_a129525vmmu.hscall();
        } else {
            return hs_a129525vmmu;
        }
    };
    hs_a129625vmmy.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord8);
    };
    hs_zdcmaxBound1625vmmA.evaluateOnce = function () {
        if (hs_a129625vmmy.notEvaluated) {
            return hs_a129625vmmy.hscall();
        } else {
            return hs_a129625vmmy;
        }
    };
    this.hs_zdfBoundedCUChar.data = [hs_a129525vmmu, hs_a129625vmmy];
    hs_a129725vmmC.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziWord.hs_zdfRealWord8);
    };
    hs_zdctoRational2025vmmE.evaluateOnce = function () {
        if (hs_a129725vmmC.notEvaluated) {
            return hs_a129725vmmC.hscall();
        } else {
            return hs_a129725vmmC;
        }
    };
    hs_a129825vmmG.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8);
    };
    hs_zdcsizzeOf2025vmmI.evaluateOnce = function () {
        if (hs_a129825vmmG.notEvaluated) {
            return hs_a129825vmmG.hscall();
        } else {
            return hs_a129825vmmG;
        }
    };
    hs_a129925vmmK.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8);
    };
    hs_zdcalignment2025vmmM.evaluateOnce = function () {
        if (hs_a129925vmmK.notEvaluated) {
            return hs_a129925vmmK.hscall();
        } else {
            return hs_a129925vmmK;
        }
    };
    hs_a130025vmmO.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8);
    };
    hs_zdcpeekElemOff2025vmmQ.evaluateOnce = function () {
        if (hs_a130025vmmO.notEvaluated) {
            return hs_a130025vmmO.hscall();
        } else {
            return hs_a130025vmmO;
        }
    };
    hs_a130125vmmS.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8);
    };
    hs_zdcpokeElemOff2025vmmU.evaluateOnce = function () {
        if (hs_a130125vmmS.notEvaluated) {
            return hs_a130125vmmS.hscall();
        } else {
            return hs_a130125vmmS;
        }
    };
    hs_a130225vmmW.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8);
    };
    hs_zdcpeekByteOff2025vmmY.evaluateOnce = function () {
        if (hs_a130225vmmW.notEvaluated) {
            return hs_a130225vmmW.hscall();
        } else {
            return hs_a130225vmmW;
        }
    };
    hs_a130325vmn0.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8);
    };
    hs_zdcpokeByteOff2025vmn2.evaluateOnce = function () {
        if (hs_a130325vmn0.notEvaluated) {
            return hs_a130325vmn0.hscall();
        } else {
            return hs_a130325vmn0;
        }
    };
    hs_a130425vmn4.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8);
    };
    hs_zdcpeek2025vmn6.evaluateOnce = function () {
        if (hs_a130425vmn4.notEvaluated) {
            return hs_a130425vmn4.hscall();
        } else {
            return hs_a130425vmn4;
        }
    };
    hs_a130525vmn8.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8);
    };
    hs_zdcpoke2025vmna.evaluateOnce = function () {
        if (hs_a130525vmn8.notEvaluated) {
            return hs_a130525vmn8.hscall();
        } else {
            return hs_a130525vmn8;
        }
    };
    this.hs_zdfStorableCUChar.data = [hs_a129825vmmG, hs_a129925vmmK, hs_a130025vmmO, hs_a130125vmmS, hs_a130225vmmW, hs_a130325vmn0, hs_a130425vmn4, hs_a130525vmn8];
    hs_a130625vmnc.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziWord.hs_zdfEnumWord8);
    };
    hs_zdcsucc2025vmne.evaluateOnce = function () {
        if (hs_a130625vmnc.notEvaluated) {
            return hs_a130625vmnc.hscall();
        } else {
            return hs_a130625vmnc;
        }
    };
    hs_a130725vmng.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziWord.hs_zdfEnumWord8);
    };
    hs_zdcpred2025vmni.evaluateOnce = function () {
        if (hs_a130725vmng.notEvaluated) {
            return hs_a130725vmng.hscall();
        } else {
            return hs_a130725vmng;
        }
    };
    hs_a130825vmnk.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord8);
    };
    hs_zdctoEnum2025vmnm.evaluateOnce = function () {
        if (hs_a130825vmnk.notEvaluated) {
            return hs_a130825vmnk.hscall();
        } else {
            return hs_a130825vmnk;
        }
    };
    hs_a130925vmno.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord8);
    };
    hs_zdcfromEnum2025vmnq.evaluateOnce = function () {
        if (hs_a130925vmno.notEvaluated) {
            return hs_a130925vmno.hscall();
        } else {
            return hs_a130925vmno;
        }
    };
    hs_a131025vmns.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziWord.hs_zdfEnumWord8);
    };
    hs_zdcenumFrom2025vmnu.evaluateOnce = function () {
        if (hs_a131025vmns.notEvaluated) {
            return hs_a131025vmns.hscall();
        } else {
            return hs_a131025vmns;
        }
    };
    hs_a131125vmnw.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziWord.hs_zdfEnumWord8);
    };
    hs_zdcenumFromThen2025vmny.evaluateOnce = function () {
        if (hs_a131125vmnw.notEvaluated) {
            return hs_a131125vmnw.hscall();
        } else {
            return hs_a131125vmnw;
        }
    };
    hs_a131225vmnA.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord8);
    };
    hs_zdcenumFromTo2025vmnC.evaluateOnce = function () {
        if (hs_a131225vmnA.notEvaluated) {
            return hs_a131225vmnA.hscall();
        } else {
            return hs_a131225vmnA;
        }
    };
    hs_a131325vmnE.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord8);
    };
    hs_zdcenumFromThenTo2025vmnG.evaluateOnce = function () {
        if (hs_a131325vmnE.notEvaluated) {
            return hs_a131325vmnE.hscall();
        } else {
            return hs_a131325vmnE;
        }
    };
    this.hs_zdfEnumCUChar.data = [hs_a130625vmnc, hs_a130725vmng, hs_a130825vmnk, hs_a130925vmno, hs_a131025vmns, hs_a131125vmnw, hs_a131225vmnA, hs_a131325vmnE];
    hs_a131425vmnI.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord8);
    };
    hs_zdczp2025vmnK.evaluateOnce = function () {
        if (hs_a131425vmnI.notEvaluated) {
            return hs_a131425vmnI.hscall();
        } else {
            return hs_a131425vmnI;
        }
    };
    hs_a131525vmnM.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziWord.hs_zdfNumWord8);
    };
    hs_zdczt2025vmnO.evaluateOnce = function () {
        if (hs_a131525vmnM.notEvaluated) {
            return hs_a131525vmnM.hscall();
        } else {
            return hs_a131525vmnM;
        }
    };
    hs_a131625vmnQ.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord8);
    };
    hs_zdczm2025vmnS.evaluateOnce = function () {
        if (hs_a131625vmnQ.notEvaluated) {
            return hs_a131625vmnQ.hscall();
        } else {
            return hs_a131625vmnQ;
        }
    };
    hs_a131725vmnU.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziWord.hs_zdfNumWord8);
    };
    hs_zdcnegate2025vmnW.evaluateOnce = function () {
        if (hs_a131725vmnU.notEvaluated) {
            return hs_a131725vmnU.hscall();
        } else {
            return hs_a131725vmnU;
        }
    };
    hs_a131825vmnY.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziWord.hs_zdfNumWord8);
    };
    hs_zdcabs2025vmo0.evaluateOnce = function () {
        if (hs_a131825vmnY.notEvaluated) {
            return hs_a131825vmnY.hscall();
        } else {
            return hs_a131825vmnY;
        }
    };
    hs_a131925vmo2.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziWord.hs_zdfNumWord8);
    };
    hs_zdcsignum2025vmo4.evaluateOnce = function () {
        if (hs_a131925vmo2.notEvaluated) {
            return hs_a131925vmo2.hscall();
        } else {
            return hs_a131925vmo2;
        }
    };
    hs_a132025vmo6.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8);
    };
    hs_zdcfromInteger2025vmo8.evaluateOnce = function () {
        if (hs_a132025vmo6.notEvaluated) {
            return hs_a132025vmo6.hscall();
        } else {
            return hs_a132025vmo6;
        }
    };
    hs_a132125vmoa.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord8);
    };
    hs_zdccompare2025vmoc.evaluateOnce = function () {
        if (hs_a132125vmoa.notEvaluated) {
            return hs_a132125vmoa.hscall();
        } else {
            return hs_a132125vmoa;
        }
    };
    hs_a132225vmoe.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziWord.hs_zdfOrdWord8);
    };
    hs_zdczl2025vmog.evaluateOnce = function () {
        if (hs_a132225vmoe.notEvaluated) {
            return hs_a132225vmoe.hscall();
        } else {
            return hs_a132225vmoe;
        }
    };
    hs_a132325vmoi.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord8);
    };
    hs_zdczgze2025vmok.evaluateOnce = function () {
        if (hs_a132325vmoi.notEvaluated) {
            return hs_a132325vmoi.hscall();
        } else {
            return hs_a132325vmoi;
        }
    };
    hs_a132425vmom.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziWord.hs_zdfOrdWord8);
    };
    hs_zdczg2025vmoo.evaluateOnce = function () {
        if (hs_a132425vmom.notEvaluated) {
            return hs_a132425vmom.hscall();
        } else {
            return hs_a132425vmom;
        }
    };
    hs_a132525vmoq.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord8);
    };
    hs_zdczlze2025vmos.evaluateOnce = function () {
        if (hs_a132525vmoq.notEvaluated) {
            return hs_a132525vmoq.hscall();
        } else {
            return hs_a132525vmoq;
        }
    };
    hs_a132625vmou.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziWord.hs_zdfOrdWord8);
    };
    hs_zdcmax2025vmow.evaluateOnce = function () {
        if (hs_a132625vmou.notEvaluated) {
            return hs_a132625vmou.hscall();
        } else {
            return hs_a132625vmou;
        }
    };
    hs_a132725vmoy.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziWord.hs_zdfOrdWord8);
    };
    hs_zdcmin2025vmoA.evaluateOnce = function () {
        if (hs_a132725vmoy.notEvaluated) {
            return hs_a132725vmoy.hscall();
        } else {
            return hs_a132725vmoy;
        }
    };
    hs_a132825vmoC.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8);
    };
    hs_zdczeze2025vmoE.evaluateOnce = function () {
        if (hs_a132825vmoC.notEvaluated) {
            return hs_a132825vmoC.hscall();
        } else {
            return hs_a132825vmoC;
        }
    };
    hs_a132925vmoG.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8);
    };
    hs_zdczsze2025vmoI.evaluateOnce = function () {
        if (hs_a132925vmoG.notEvaluated) {
            return hs_a132925vmoG.hscall();
        } else {
            return hs_a132925vmoG;
        }
    };
    this.hs_zdfEqCUChar.data = [hs_a132825vmoC, hs_a132925vmoG];
    this.hs_zdfOrdCUChar.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCUChar, hs_a132125vmoa, hs_a132225vmoe, hs_a132325vmoi, hs_a132425vmom, hs_a132525vmoq, hs_a132625vmou, hs_a132725vmoy];
    this.hs_zdfNumCUChar.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCUChar, $hs.modules.ForeignziCziTypes.hs_zdfShowCUChar, hs_a131425vmnI, hs_a131525vmnM, hs_a131625vmnQ, hs_a131725vmnU, hs_a131825vmnY, hs_a131925vmo2, hs_a132025vmo6];
    this.hs_zdfRealCUChar.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCUChar, $hs.modules.ForeignziCziTypes.hs_zdfOrdCUChar, hs_a129725vmmC];
    this.hs_zdfIntegralCUChar.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealCUChar, $hs.modules.ForeignziCziTypes.hs_zdfEnumCUChar, hs_a128825vmm2, hs_a128925vmm6, hs_a129025vmma, hs_a129125vmme, hs_a129225vmmi, hs_a129325vmmm, hs_a129425vmmq];
    this.hs_zdfBitsCUChar.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCUChar, hs_a127125vmkW, hs_a127225vml0, hs_a127325vml4, hs_a127425vml8, hs_a127525vmlc, hs_a127625vmlg, hs_a127725vmlk, hs_a127825vmlo, hs_a127925vmls, hs_a128025vmlw, hs_a128125vmlA, hs_a128225vmlE, hs_a128325vmlI, hs_a128425vmlM, hs_a128525vmlQ, hs_a128625vmlU, hs_a128725vmlY];
    hs_a133025vmoK.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdczizazi1725vmoM.evaluateOnce = function () {
        if (hs_a133025vmoK.notEvaluated) {
            return hs_a133025vmoK.hscall();
        } else {
            return hs_a133025vmoK;
        }
    };
    hs_a133125vmoO.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdczizbzi1725vmoQ.evaluateOnce = function () {
        if (hs_a133125vmoO.notEvaluated) {
            return hs_a133125vmoO.hscall();
        } else {
            return hs_a133125vmoO;
        }
    };
    hs_a133225vmoS.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcxor1725vmoU.evaluateOnce = function () {
        if (hs_a133225vmoS.notEvaluated) {
            return hs_a133225vmoS.hscall();
        } else {
            return hs_a133225vmoS;
        }
    };
    hs_a133325vmoW.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdccomplement1725vmoY.evaluateOnce = function () {
        if (hs_a133325vmoW.notEvaluated) {
            return hs_a133325vmoW.hscall();
        } else {
            return hs_a133325vmoW;
        }
    };
    hs_a133425vmp0.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcshift1725vmp2.evaluateOnce = function () {
        if (hs_a133425vmp0.notEvaluated) {
            return hs_a133425vmp0.hscall();
        } else {
            return hs_a133425vmp0;
        }
    };
    hs_a133525vmp4.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcrotate1725vmp6.evaluateOnce = function () {
        if (hs_a133525vmp4.notEvaluated) {
            return hs_a133525vmp4.hscall();
        } else {
            return hs_a133525vmp4;
        }
    };
    hs_a133625vmp8.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcbit1725vmpa.evaluateOnce = function () {
        if (hs_a133625vmp8.notEvaluated) {
            return hs_a133625vmp8.hscall();
        } else {
            return hs_a133625vmp8;
        }
    };
    hs_a133725vmpc.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcsetBit1725vmpe.evaluateOnce = function () {
        if (hs_a133725vmpc.notEvaluated) {
            return hs_a133725vmpc.hscall();
        } else {
            return hs_a133725vmpc;
        }
    };
    hs_a133825vmpg.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcclearBit1725vmpi.evaluateOnce = function () {
        if (hs_a133825vmpg.notEvaluated) {
            return hs_a133825vmpg.hscall();
        } else {
            return hs_a133825vmpg;
        }
    };
    hs_a133925vmpk.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdccomplementBit1725vmpm.evaluateOnce = function () {
        if (hs_a133925vmpk.notEvaluated) {
            return hs_a133925vmpk.hscall();
        } else {
            return hs_a133925vmpk;
        }
    };
    hs_a134025vmpo.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdctestBit1725vmpq.evaluateOnce = function () {
        if (hs_a134025vmpo.notEvaluated) {
            return hs_a134025vmpo.hscall();
        } else {
            return hs_a134025vmpo;
        }
    };
    hs_a134125vmps.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcbitSizze1725vmpu.evaluateOnce = function () {
        if (hs_a134125vmps.notEvaluated) {
            return hs_a134125vmps.hscall();
        } else {
            return hs_a134125vmps;
        }
    };
    hs_a134225vmpw.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcisSigned1725vmpy.evaluateOnce = function () {
        if (hs_a134225vmpw.notEvaluated) {
            return hs_a134225vmpw.hscall();
        } else {
            return hs_a134225vmpw;
        }
    };
    hs_a134325vmpA.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcshiftL1725vmpC.evaluateOnce = function () {
        if (hs_a134325vmpA.notEvaluated) {
            return hs_a134325vmpA.hscall();
        } else {
            return hs_a134325vmpA;
        }
    };
    hs_a134425vmpE.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcshiftR1725vmpG.evaluateOnce = function () {
        if (hs_a134425vmpE.notEvaluated) {
            return hs_a134425vmpE.hscall();
        } else {
            return hs_a134425vmpE;
        }
    };
    hs_a134525vmpI.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcrotateL1725vmpK.evaluateOnce = function () {
        if (hs_a134525vmpI.notEvaluated) {
            return hs_a134525vmpI.hscall();
        } else {
            return hs_a134525vmpI;
        }
    };
    hs_a134625vmpM.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcrotateR1725vmpO.evaluateOnce = function () {
        if (hs_a134625vmpM.notEvaluated) {
            return hs_a134625vmpM.hscall();
        } else {
            return hs_a134625vmpM;
        }
    };
    hs_a134725vmpQ.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt8);
    };
    hs_zdcquot1725vmpS.evaluateOnce = function () {
        if (hs_a134725vmpQ.notEvaluated) {
            return hs_a134725vmpQ.hscall();
        } else {
            return hs_a134725vmpQ;
        }
    };
    hs_a134825vmpU.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt8);
    };
    hs_zdcrem1725vmpW.evaluateOnce = function () {
        if (hs_a134825vmpU.notEvaluated) {
            return hs_a134825vmpU.hscall();
        } else {
            return hs_a134825vmpU;
        }
    };
    hs_a134925vmpY.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt8);
    };
    hs_zdcdiv1725vmq0.evaluateOnce = function () {
        if (hs_a134925vmpY.notEvaluated) {
            return hs_a134925vmpY.hscall();
        } else {
            return hs_a134925vmpY;
        }
    };
    hs_a135025vmq2.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt8);
    };
    hs_zdcmod1725vmq4.evaluateOnce = function () {
        if (hs_a135025vmq2.notEvaluated) {
            return hs_a135025vmq2.hscall();
        } else {
            return hs_a135025vmq2;
        }
    };
    hs_a135125vmq6.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt8);
    };
    hs_zdcquotRem1725vmq8.evaluateOnce = function () {
        if (hs_a135125vmq6.notEvaluated) {
            return hs_a135125vmq6.hscall();
        } else {
            return hs_a135125vmq6;
        }
    };
    hs_a135225vmqa.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt8);
    };
    hs_zdcdivMod1725vmqc.evaluateOnce = function () {
        if (hs_a135225vmqa.notEvaluated) {
            return hs_a135225vmqa.hscall();
        } else {
            return hs_a135225vmqa;
        }
    };
    hs_a135325vmqe.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt8);
    };
    hs_zdctoInteger1725vmqg.evaluateOnce = function () {
        if (hs_a135325vmqe.notEvaluated) {
            return hs_a135325vmqe.hscall();
        } else {
            return hs_a135325vmqe;
        }
    };
    hs_a135425vmqi.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt8);
    };
    hs_zdcminBound1725vmqk.evaluateOnce = function () {
        if (hs_a135425vmqi.notEvaluated) {
            return hs_a135425vmqi.hscall();
        } else {
            return hs_a135425vmqi;
        }
    };
    hs_a135525vmqm.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt8);
    };
    hs_zdcmaxBound1725vmqo.evaluateOnce = function () {
        if (hs_a135525vmqm.notEvaluated) {
            return hs_a135525vmqm.hscall();
        } else {
            return hs_a135525vmqm;
        }
    };
    this.hs_zdfBoundedCSChar.data = [hs_a135425vmqi, hs_a135525vmqm];
    hs_a135625vmqq.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziInt.hs_zdfRealInt8);
    };
    hs_zdctoRational2125vmqs.evaluateOnce = function () {
        if (hs_a135625vmqq.notEvaluated) {
            return hs_a135625vmqq.hscall();
        } else {
            return hs_a135625vmqq;
        }
    };
    hs_a135725vmqu.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt8);
    };
    hs_zdcsizzeOf2125vmqw.evaluateOnce = function () {
        if (hs_a135725vmqu.notEvaluated) {
            return hs_a135725vmqu.hscall();
        } else {
            return hs_a135725vmqu;
        }
    };
    hs_a135825vmqy.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt8);
    };
    hs_zdcalignment2125vmqA.evaluateOnce = function () {
        if (hs_a135825vmqy.notEvaluated) {
            return hs_a135825vmqy.hscall();
        } else {
            return hs_a135825vmqy;
        }
    };
    hs_a135925vmqC.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt8);
    };
    hs_zdcpeekElemOff2125vmqE.evaluateOnce = function () {
        if (hs_a135925vmqC.notEvaluated) {
            return hs_a135925vmqC.hscall();
        } else {
            return hs_a135925vmqC;
        }
    };
    hs_a136025vmqG.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt8);
    };
    hs_zdcpokeElemOff2125vmqI.evaluateOnce = function () {
        if (hs_a136025vmqG.notEvaluated) {
            return hs_a136025vmqG.hscall();
        } else {
            return hs_a136025vmqG;
        }
    };
    hs_a136125vmqK.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt8);
    };
    hs_zdcpeekByteOff2125vmqM.evaluateOnce = function () {
        if (hs_a136125vmqK.notEvaluated) {
            return hs_a136125vmqK.hscall();
        } else {
            return hs_a136125vmqK;
        }
    };
    hs_a136225vmqO.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt8);
    };
    hs_zdcpokeByteOff2125vmqQ.evaluateOnce = function () {
        if (hs_a136225vmqO.notEvaluated) {
            return hs_a136225vmqO.hscall();
        } else {
            return hs_a136225vmqO;
        }
    };
    hs_a136325vmqS.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt8);
    };
    hs_zdcpeek2125vmqU.evaluateOnce = function () {
        if (hs_a136325vmqS.notEvaluated) {
            return hs_a136325vmqS.hscall();
        } else {
            return hs_a136325vmqS;
        }
    };
    hs_a136425vmqW.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt8);
    };
    hs_zdcpoke2125vmqY.evaluateOnce = function () {
        if (hs_a136425vmqW.notEvaluated) {
            return hs_a136425vmqW.hscall();
        } else {
            return hs_a136425vmqW;
        }
    };
    this.hs_zdfStorableCSChar.data = [hs_a135725vmqu, hs_a135825vmqy, hs_a135925vmqC, hs_a136025vmqG, hs_a136125vmqK, hs_a136225vmqO, hs_a136325vmqS, hs_a136425vmqW];
    hs_a136525vmr0.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziInt.hs_zdfEnumInt8);
    };
    hs_zdcsucc2125vmr2.evaluateOnce = function () {
        if (hs_a136525vmr0.notEvaluated) {
            return hs_a136525vmr0.hscall();
        } else {
            return hs_a136525vmr0;
        }
    };
    hs_a136625vmr4.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziInt.hs_zdfEnumInt8);
    };
    hs_zdcpred2125vmr6.evaluateOnce = function () {
        if (hs_a136625vmr4.notEvaluated) {
            return hs_a136625vmr4.hscall();
        } else {
            return hs_a136625vmr4;
        }
    };
    hs_a136725vmr8.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt8);
    };
    hs_zdctoEnum2125vmra.evaluateOnce = function () {
        if (hs_a136725vmr8.notEvaluated) {
            return hs_a136725vmr8.hscall();
        } else {
            return hs_a136725vmr8;
        }
    };
    hs_a136825vmrc.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt8);
    };
    hs_zdcfromEnum2125vmre.evaluateOnce = function () {
        if (hs_a136825vmrc.notEvaluated) {
            return hs_a136825vmrc.hscall();
        } else {
            return hs_a136825vmrc;
        }
    };
    hs_a136925vmrg.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziInt.hs_zdfEnumInt8);
    };
    hs_zdcenumFrom2125vmri.evaluateOnce = function () {
        if (hs_a136925vmrg.notEvaluated) {
            return hs_a136925vmrg.hscall();
        } else {
            return hs_a136925vmrg;
        }
    };
    hs_a137025vmrk.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziInt.hs_zdfEnumInt8);
    };
    hs_zdcenumFromThen2125vmrm.evaluateOnce = function () {
        if (hs_a137025vmrk.notEvaluated) {
            return hs_a137025vmrk.hscall();
        } else {
            return hs_a137025vmrk;
        }
    };
    hs_a137125vmro.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt8);
    };
    hs_zdcenumFromTo2125vmrq.evaluateOnce = function () {
        if (hs_a137125vmro.notEvaluated) {
            return hs_a137125vmro.hscall();
        } else {
            return hs_a137125vmro;
        }
    };
    hs_a137225vmrs.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt8);
    };
    hs_zdcenumFromThenTo2125vmru.evaluateOnce = function () {
        if (hs_a137225vmrs.notEvaluated) {
            return hs_a137225vmrs.hscall();
        } else {
            return hs_a137225vmrs;
        }
    };
    this.hs_zdfEnumCSChar.data = [hs_a136525vmr0, hs_a136625vmr4, hs_a136725vmr8, hs_a136825vmrc, hs_a136925vmrg, hs_a137025vmrk, hs_a137125vmro, hs_a137225vmrs];
    hs_a137325vmrw.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt8);
    };
    hs_zdczp2125vmry.evaluateOnce = function () {
        if (hs_a137325vmrw.notEvaluated) {
            return hs_a137325vmrw.hscall();
        } else {
            return hs_a137325vmrw;
        }
    };
    hs_a137425vmrA.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziInt.hs_zdfNumInt8);
    };
    hs_zdczt2125vmrC.evaluateOnce = function () {
        if (hs_a137425vmrA.notEvaluated) {
            return hs_a137425vmrA.hscall();
        } else {
            return hs_a137425vmrA;
        }
    };
    hs_a137525vmrE.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziInt.hs_zdfNumInt8);
    };
    hs_zdczm2125vmrG.evaluateOnce = function () {
        if (hs_a137525vmrE.notEvaluated) {
            return hs_a137525vmrE.hscall();
        } else {
            return hs_a137525vmrE;
        }
    };
    hs_a137625vmrI.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt8);
    };
    hs_zdcnegate2125vmrK.evaluateOnce = function () {
        if (hs_a137625vmrI.notEvaluated) {
            return hs_a137625vmrI.hscall();
        } else {
            return hs_a137625vmrI;
        }
    };
    hs_a137725vmrM.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziInt.hs_zdfNumInt8);
    };
    hs_zdcabs2125vmrO.evaluateOnce = function () {
        if (hs_a137725vmrM.notEvaluated) {
            return hs_a137725vmrM.hscall();
        } else {
            return hs_a137725vmrM;
        }
    };
    hs_a137825vmrQ.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziInt.hs_zdfNumInt8);
    };
    hs_zdcsignum2125vmrS.evaluateOnce = function () {
        if (hs_a137825vmrQ.notEvaluated) {
            return hs_a137825vmrQ.hscall();
        } else {
            return hs_a137825vmrQ;
        }
    };
    hs_a137925vmrU.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt8);
    };
    hs_zdcfromInteger2125vmrW.evaluateOnce = function () {
        if (hs_a137925vmrU.notEvaluated) {
            return hs_a137925vmrU.hscall();
        } else {
            return hs_a137925vmrU;
        }
    };
    hs_a138025vmrY.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziInt.hs_zdfOrdInt8);
    };
    hs_zdccompare2125vms0.evaluateOnce = function () {
        if (hs_a138025vmrY.notEvaluated) {
            return hs_a138025vmrY.hscall();
        } else {
            return hs_a138025vmrY;
        }
    };
    hs_a138125vms2.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziInt.hs_zdfOrdInt8);
    };
    hs_zdczl2125vms4.evaluateOnce = function () {
        if (hs_a138125vms2.notEvaluated) {
            return hs_a138125vms2.hscall();
        } else {
            return hs_a138125vms2;
        }
    };
    hs_a138225vms6.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt8);
    };
    hs_zdczgze2125vms8.evaluateOnce = function () {
        if (hs_a138225vms6.notEvaluated) {
            return hs_a138225vms6.hscall();
        } else {
            return hs_a138225vms6;
        }
    };
    hs_a138325vmsa.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziInt.hs_zdfOrdInt8);
    };
    hs_zdczg2125vmsc.evaluateOnce = function () {
        if (hs_a138325vmsa.notEvaluated) {
            return hs_a138325vmsa.hscall();
        } else {
            return hs_a138325vmsa;
        }
    };
    hs_a138425vmse.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt8);
    };
    hs_zdczlze2125vmsg.evaluateOnce = function () {
        if (hs_a138425vmse.notEvaluated) {
            return hs_a138425vmse.hscall();
        } else {
            return hs_a138425vmse;
        }
    };
    hs_a138525vmsi.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziInt.hs_zdfOrdInt8);
    };
    hs_zdcmax2125vmsk.evaluateOnce = function () {
        if (hs_a138525vmsi.notEvaluated) {
            return hs_a138525vmsi.hscall();
        } else {
            return hs_a138525vmsi;
        }
    };
    hs_a138625vmsm.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziInt.hs_zdfOrdInt8);
    };
    hs_zdcmin2125vmso.evaluateOnce = function () {
        if (hs_a138625vmsm.notEvaluated) {
            return hs_a138625vmsm.hscall();
        } else {
            return hs_a138625vmsm;
        }
    };
    hs_a138725vmsq.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt8);
    };
    hs_zdczeze2125vmss.evaluateOnce = function () {
        if (hs_a138725vmsq.notEvaluated) {
            return hs_a138725vmsq.hscall();
        } else {
            return hs_a138725vmsq;
        }
    };
    hs_a138825vmsu.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt8);
    };
    hs_zdczsze2125vmsw.evaluateOnce = function () {
        if (hs_a138825vmsu.notEvaluated) {
            return hs_a138825vmsu.hscall();
        } else {
            return hs_a138825vmsu;
        }
    };
    this.hs_zdfEqCSChar.data = [hs_a138725vmsq, hs_a138825vmsu];
    this.hs_zdfOrdCSChar.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCSChar, hs_a138025vmrY, hs_a138125vms2, hs_a138225vms6, hs_a138325vmsa, hs_a138425vmse, hs_a138525vmsi, hs_a138625vmsm];
    this.hs_zdfNumCSChar.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCSChar, $hs.modules.ForeignziCziTypes.hs_zdfShowCSChar, hs_a137325vmrw, hs_a137425vmrA, hs_a137525vmrE, hs_a137625vmrI, hs_a137725vmrM, hs_a137825vmrQ, hs_a137925vmrU];
    this.hs_zdfRealCSChar.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCSChar, $hs.modules.ForeignziCziTypes.hs_zdfOrdCSChar, hs_a135625vmqq];
    this.hs_zdfIntegralCSChar.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealCSChar, $hs.modules.ForeignziCziTypes.hs_zdfEnumCSChar, hs_a134725vmpQ, hs_a134825vmpU, hs_a134925vmpY, hs_a135025vmq2, hs_a135125vmq6, hs_a135225vmqa, hs_a135325vmqe];
    this.hs_zdfBitsCSChar.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCSChar, hs_a133025vmoK, hs_a133125vmoO, hs_a133225vmoS, hs_a133325vmoW, hs_a133425vmp0, hs_a133525vmp4, hs_a133625vmp8, hs_a133725vmpc, hs_a133825vmpg, hs_a133925vmpk, hs_a134025vmpo, hs_a134125vmps, hs_a134225vmpw, hs_a134325vmpA, hs_a134425vmpE, hs_a134525vmpI, hs_a134625vmpM];
    hs_a138925vmsy.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdczizazi1825vmsA.evaluateOnce = function () {
        if (hs_a138925vmsy.notEvaluated) {
            return hs_a138925vmsy.hscall();
        } else {
            return hs_a138925vmsy;
        }
    };
    hs_a139025vmsC.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdczizbzi1825vmsE.evaluateOnce = function () {
        if (hs_a139025vmsC.notEvaluated) {
            return hs_a139025vmsC.hscall();
        } else {
            return hs_a139025vmsC;
        }
    };
    hs_a139125vmsG.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcxor1825vmsI.evaluateOnce = function () {
        if (hs_a139125vmsG.notEvaluated) {
            return hs_a139125vmsG.hscall();
        } else {
            return hs_a139125vmsG;
        }
    };
    hs_a139225vmsK.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdccomplement1825vmsM.evaluateOnce = function () {
        if (hs_a139225vmsK.notEvaluated) {
            return hs_a139225vmsK.hscall();
        } else {
            return hs_a139225vmsK;
        }
    };
    hs_a139325vmsO.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcshift1825vmsQ.evaluateOnce = function () {
        if (hs_a139325vmsO.notEvaluated) {
            return hs_a139325vmsO.hscall();
        } else {
            return hs_a139325vmsO;
        }
    };
    hs_a139425vmsS.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcrotate1825vmsU.evaluateOnce = function () {
        if (hs_a139425vmsS.notEvaluated) {
            return hs_a139425vmsS.hscall();
        } else {
            return hs_a139425vmsS;
        }
    };
    hs_a139525vmsW.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcbit1825vmsY.evaluateOnce = function () {
        if (hs_a139525vmsW.notEvaluated) {
            return hs_a139525vmsW.hscall();
        } else {
            return hs_a139525vmsW;
        }
    };
    hs_a139625vmt0.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcsetBit1825vmt2.evaluateOnce = function () {
        if (hs_a139625vmt0.notEvaluated) {
            return hs_a139625vmt0.hscall();
        } else {
            return hs_a139625vmt0;
        }
    };
    hs_a139725vmt4.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcclearBit1825vmt6.evaluateOnce = function () {
        if (hs_a139725vmt4.notEvaluated) {
            return hs_a139725vmt4.hscall();
        } else {
            return hs_a139725vmt4;
        }
    };
    hs_a139825vmt8.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdccomplementBit1825vmta.evaluateOnce = function () {
        if (hs_a139825vmt8.notEvaluated) {
            return hs_a139825vmt8.hscall();
        } else {
            return hs_a139825vmt8;
        }
    };
    hs_a139925vmtc.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdctestBit1825vmte.evaluateOnce = function () {
        if (hs_a139925vmtc.notEvaluated) {
            return hs_a139925vmtc.hscall();
        } else {
            return hs_a139925vmtc;
        }
    };
    hs_a140025vmtg.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcbitSizze1825vmti.evaluateOnce = function () {
        if (hs_a140025vmtg.notEvaluated) {
            return hs_a140025vmtg.hscall();
        } else {
            return hs_a140025vmtg;
        }
    };
    hs_a140125vmtk.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcisSigned1825vmtm.evaluateOnce = function () {
        if (hs_a140125vmtk.notEvaluated) {
            return hs_a140125vmtk.hscall();
        } else {
            return hs_a140125vmtk;
        }
    };
    hs_a140225vmto.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcshiftL1825vmtq.evaluateOnce = function () {
        if (hs_a140225vmto.notEvaluated) {
            return hs_a140225vmto.hscall();
        } else {
            return hs_a140225vmto;
        }
    };
    hs_a140325vmts.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcshiftR1825vmtu.evaluateOnce = function () {
        if (hs_a140325vmts.notEvaluated) {
            return hs_a140325vmts.hscall();
        } else {
            return hs_a140325vmts;
        }
    };
    hs_a140425vmtw.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcrotateL1825vmty.evaluateOnce = function () {
        if (hs_a140425vmtw.notEvaluated) {
            return hs_a140425vmtw.hscall();
        } else {
            return hs_a140425vmtw;
        }
    };
    hs_a140525vmtA.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcrotateR1825vmtC.evaluateOnce = function () {
        if (hs_a140525vmtA.notEvaluated) {
            return hs_a140525vmtA.hscall();
        } else {
            return hs_a140525vmtA;
        }
    };
    hs_a140625vmtE.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt8);
    };
    hs_zdcquot1825vmtG.evaluateOnce = function () {
        if (hs_a140625vmtE.notEvaluated) {
            return hs_a140625vmtE.hscall();
        } else {
            return hs_a140625vmtE;
        }
    };
    hs_a140725vmtI.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt8);
    };
    hs_zdcrem1825vmtK.evaluateOnce = function () {
        if (hs_a140725vmtI.notEvaluated) {
            return hs_a140725vmtI.hscall();
        } else {
            return hs_a140725vmtI;
        }
    };
    hs_a140825vmtM.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt8);
    };
    hs_zdcdiv1825vmtO.evaluateOnce = function () {
        if (hs_a140825vmtM.notEvaluated) {
            return hs_a140825vmtM.hscall();
        } else {
            return hs_a140825vmtM;
        }
    };
    hs_a140925vmtQ.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt8);
    };
    hs_zdcmod1825vmtS.evaluateOnce = function () {
        if (hs_a140925vmtQ.notEvaluated) {
            return hs_a140925vmtQ.hscall();
        } else {
            return hs_a140925vmtQ;
        }
    };
    hs_a141025vmtU.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt8);
    };
    hs_zdcquotRem1825vmtW.evaluateOnce = function () {
        if (hs_a141025vmtU.notEvaluated) {
            return hs_a141025vmtU.hscall();
        } else {
            return hs_a141025vmtU;
        }
    };
    hs_a141125vmtY.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt8);
    };
    hs_zdcdivMod1825vmu0.evaluateOnce = function () {
        if (hs_a141125vmtY.notEvaluated) {
            return hs_a141125vmtY.hscall();
        } else {
            return hs_a141125vmtY;
        }
    };
    hs_a141225vmu2.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt8);
    };
    hs_zdctoInteger1825vmu4.evaluateOnce = function () {
        if (hs_a141225vmu2.notEvaluated) {
            return hs_a141225vmu2.hscall();
        } else {
            return hs_a141225vmu2;
        }
    };
    hs_a141325vmu6.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt8);
    };
    hs_zdcminBound1825vmu8.evaluateOnce = function () {
        if (hs_a141325vmu6.notEvaluated) {
            return hs_a141325vmu6.hscall();
        } else {
            return hs_a141325vmu6;
        }
    };
    hs_a141425vmua.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt8);
    };
    hs_zdcmaxBound1825vmuc.evaluateOnce = function () {
        if (hs_a141425vmua.notEvaluated) {
            return hs_a141425vmua.hscall();
        } else {
            return hs_a141425vmua;
        }
    };
    this.hs_zdfBoundedCChar.data = [hs_a141325vmu6, hs_a141425vmua];
    hs_a141525vmue.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziInt.hs_zdfRealInt8);
    };
    hs_zdctoRational2225vmug.evaluateOnce = function () {
        if (hs_a141525vmue.notEvaluated) {
            return hs_a141525vmue.hscall();
        } else {
            return hs_a141525vmue;
        }
    };
    hs_a141625vmui.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt8);
    };
    hs_zdcsizzeOf2225vmuk.evaluateOnce = function () {
        if (hs_a141625vmui.notEvaluated) {
            return hs_a141625vmui.hscall();
        } else {
            return hs_a141625vmui;
        }
    };
    hs_a141725vmum.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt8);
    };
    hs_zdcalignment2225vmuo.evaluateOnce = function () {
        if (hs_a141725vmum.notEvaluated) {
            return hs_a141725vmum.hscall();
        } else {
            return hs_a141725vmum;
        }
    };
    hs_a141825vmuq.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt8);
    };
    hs_zdcpeekElemOff2225vmus.evaluateOnce = function () {
        if (hs_a141825vmuq.notEvaluated) {
            return hs_a141825vmuq.hscall();
        } else {
            return hs_a141825vmuq;
        }
    };
    hs_a141925vmuu.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt8);
    };
    hs_zdcpokeElemOff2225vmuw.evaluateOnce = function () {
        if (hs_a141925vmuu.notEvaluated) {
            return hs_a141925vmuu.hscall();
        } else {
            return hs_a141925vmuu;
        }
    };
    hs_a142025vmuy.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt8);
    };
    hs_zdcpeekByteOff2225vmuA.evaluateOnce = function () {
        if (hs_a142025vmuy.notEvaluated) {
            return hs_a142025vmuy.hscall();
        } else {
            return hs_a142025vmuy;
        }
    };
    hs_a142125vmuC.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt8);
    };
    hs_zdcpokeByteOff2225vmuE.evaluateOnce = function () {
        if (hs_a142125vmuC.notEvaluated) {
            return hs_a142125vmuC.hscall();
        } else {
            return hs_a142125vmuC;
        }
    };
    hs_a142225vmuG.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt8);
    };
    hs_zdcpeek2225vmuI.evaluateOnce = function () {
        if (hs_a142225vmuG.notEvaluated) {
            return hs_a142225vmuG.hscall();
        } else {
            return hs_a142225vmuG;
        }
    };
    hs_a142325vmuK.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt8);
    };
    hs_zdcpoke2225vmuM.evaluateOnce = function () {
        if (hs_a142325vmuK.notEvaluated) {
            return hs_a142325vmuK.hscall();
        } else {
            return hs_a142325vmuK;
        }
    };
    this.hs_zdfStorableCChar.data = [hs_a141625vmui, hs_a141725vmum, hs_a141825vmuq, hs_a141925vmuu, hs_a142025vmuy, hs_a142125vmuC, hs_a142225vmuG, hs_a142325vmuK];
    hs_a142425vmuO.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziInt.hs_zdfEnumInt8);
    };
    hs_zdcsucc2225vmuQ.evaluateOnce = function () {
        if (hs_a142425vmuO.notEvaluated) {
            return hs_a142425vmuO.hscall();
        } else {
            return hs_a142425vmuO;
        }
    };
    hs_a142525vmuS.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziInt.hs_zdfEnumInt8);
    };
    hs_zdcpred2225vmuU.evaluateOnce = function () {
        if (hs_a142525vmuS.notEvaluated) {
            return hs_a142525vmuS.hscall();
        } else {
            return hs_a142525vmuS;
        }
    };
    hs_a142625vmuW.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt8);
    };
    hs_zdctoEnum2225vmuY.evaluateOnce = function () {
        if (hs_a142625vmuW.notEvaluated) {
            return hs_a142625vmuW.hscall();
        } else {
            return hs_a142625vmuW;
        }
    };
    hs_a142725vmv0.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt8);
    };
    hs_zdcfromEnum2225vmv2.evaluateOnce = function () {
        if (hs_a142725vmv0.notEvaluated) {
            return hs_a142725vmv0.hscall();
        } else {
            return hs_a142725vmv0;
        }
    };
    hs_a142825vmv4.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziInt.hs_zdfEnumInt8);
    };
    hs_zdcenumFrom2225vmv6.evaluateOnce = function () {
        if (hs_a142825vmv4.notEvaluated) {
            return hs_a142825vmv4.hscall();
        } else {
            return hs_a142825vmv4;
        }
    };
    hs_a142925vmv8.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziInt.hs_zdfEnumInt8);
    };
    hs_zdcenumFromThen2225vmva.evaluateOnce = function () {
        if (hs_a142925vmv8.notEvaluated) {
            return hs_a142925vmv8.hscall();
        } else {
            return hs_a142925vmv8;
        }
    };
    hs_a143025vmvc.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt8);
    };
    hs_zdcenumFromTo2225vmve.evaluateOnce = function () {
        if (hs_a143025vmvc.notEvaluated) {
            return hs_a143025vmvc.hscall();
        } else {
            return hs_a143025vmvc;
        }
    };
    hs_a143125vmvg.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt8);
    };
    hs_zdcenumFromThenTo2225vmvi.evaluateOnce = function () {
        if (hs_a143125vmvg.notEvaluated) {
            return hs_a143125vmvg.hscall();
        } else {
            return hs_a143125vmvg;
        }
    };
    this.hs_zdfEnumCChar.data = [hs_a142425vmuO, hs_a142525vmuS, hs_a142625vmuW, hs_a142725vmv0, hs_a142825vmv4, hs_a142925vmv8, hs_a143025vmvc, hs_a143125vmvg];
    hs_a143225vmvk.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt8);
    };
    hs_zdczp2225vmvm.evaluateOnce = function () {
        if (hs_a143225vmvk.notEvaluated) {
            return hs_a143225vmvk.hscall();
        } else {
            return hs_a143225vmvk;
        }
    };
    hs_a143325vmvo.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziInt.hs_zdfNumInt8);
    };
    hs_zdczt2225vmvq.evaluateOnce = function () {
        if (hs_a143325vmvo.notEvaluated) {
            return hs_a143325vmvo.hscall();
        } else {
            return hs_a143325vmvo;
        }
    };
    hs_a143425vmvs.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziInt.hs_zdfNumInt8);
    };
    hs_zdczm2225vmvu.evaluateOnce = function () {
        if (hs_a143425vmvs.notEvaluated) {
            return hs_a143425vmvs.hscall();
        } else {
            return hs_a143425vmvs;
        }
    };
    hs_a143525vmvw.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt8);
    };
    hs_zdcnegate2225vmvy.evaluateOnce = function () {
        if (hs_a143525vmvw.notEvaluated) {
            return hs_a143525vmvw.hscall();
        } else {
            return hs_a143525vmvw;
        }
    };
    hs_a143625vmvA.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziInt.hs_zdfNumInt8);
    };
    hs_zdcabs2225vmvC.evaluateOnce = function () {
        if (hs_a143625vmvA.notEvaluated) {
            return hs_a143625vmvA.hscall();
        } else {
            return hs_a143625vmvA;
        }
    };
    hs_a143725vmvE.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziInt.hs_zdfNumInt8);
    };
    hs_zdcsignum2225vmvG.evaluateOnce = function () {
        if (hs_a143725vmvE.notEvaluated) {
            return hs_a143725vmvE.hscall();
        } else {
            return hs_a143725vmvE;
        }
    };
    hs_a143825vmvI.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt8);
    };
    hs_zdcfromInteger2225vmvK.evaluateOnce = function () {
        if (hs_a143825vmvI.notEvaluated) {
            return hs_a143825vmvI.hscall();
        } else {
            return hs_a143825vmvI;
        }
    };
    hs_a143925vmvM.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziInt.hs_zdfOrdInt8);
    };
    hs_zdccompare2225vmvO.evaluateOnce = function () {
        if (hs_a143925vmvM.notEvaluated) {
            return hs_a143925vmvM.hscall();
        } else {
            return hs_a143925vmvM;
        }
    };
    hs_a144025vmvQ.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziInt.hs_zdfOrdInt8);
    };
    hs_zdczl2225vmvS.evaluateOnce = function () {
        if (hs_a144025vmvQ.notEvaluated) {
            return hs_a144025vmvQ.hscall();
        } else {
            return hs_a144025vmvQ;
        }
    };
    hs_a144125vmvU.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt8);
    };
    hs_zdczgze2225vmvW.evaluateOnce = function () {
        if (hs_a144125vmvU.notEvaluated) {
            return hs_a144125vmvU.hscall();
        } else {
            return hs_a144125vmvU;
        }
    };
    hs_a144225vmvY.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziInt.hs_zdfOrdInt8);
    };
    hs_zdczg2225vmw0.evaluateOnce = function () {
        if (hs_a144225vmvY.notEvaluated) {
            return hs_a144225vmvY.hscall();
        } else {
            return hs_a144225vmvY;
        }
    };
    hs_a144325vmw2.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt8);
    };
    hs_zdczlze2225vmw4.evaluateOnce = function () {
        if (hs_a144325vmw2.notEvaluated) {
            return hs_a144325vmw2.hscall();
        } else {
            return hs_a144325vmw2;
        }
    };
    hs_a144425vmw6.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziInt.hs_zdfOrdInt8);
    };
    hs_zdcmax2225vmw8.evaluateOnce = function () {
        if (hs_a144425vmw6.notEvaluated) {
            return hs_a144425vmw6.hscall();
        } else {
            return hs_a144425vmw6;
        }
    };
    hs_a144525vmwa.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziInt.hs_zdfOrdInt8);
    };
    hs_zdcmin2225vmwc.evaluateOnce = function () {
        if (hs_a144525vmwa.notEvaluated) {
            return hs_a144525vmwa.hscall();
        } else {
            return hs_a144525vmwa;
        }
    };
    hs_a144625vmwe.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt8);
    };
    hs_zdczeze2225vmwg.evaluateOnce = function () {
        if (hs_a144625vmwe.notEvaluated) {
            return hs_a144625vmwe.hscall();
        } else {
            return hs_a144625vmwe;
        }
    };
    hs_a144725vmwi.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt8);
    };
    hs_zdczsze2225vmwk.evaluateOnce = function () {
        if (hs_a144725vmwi.notEvaluated) {
            return hs_a144725vmwi.hscall();
        } else {
            return hs_a144725vmwi;
        }
    };
    this.hs_zdfEqCChar.data = [hs_a144625vmwe, hs_a144725vmwi];
    this.hs_zdfOrdCChar.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCChar, hs_a143925vmvM, hs_a144025vmvQ, hs_a144125vmvU, hs_a144225vmvY, hs_a144325vmw2, hs_a144425vmw6, hs_a144525vmwa];
    this.hs_zdfNumCChar.data = [$hs.modules.ForeignziCziTypes.hs_zdfEqCChar, $hs.modules.ForeignziCziTypes.hs_zdfShowCChar, hs_a143225vmvk, hs_a143325vmvo, hs_a143425vmvs, hs_a143525vmvw, hs_a143625vmvA, hs_a143725vmvE, hs_a143825vmvI];
    this.hs_zdfRealCChar.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCChar, $hs.modules.ForeignziCziTypes.hs_zdfOrdCChar, hs_a141525vmue];
    this.hs_zdfIntegralCChar.data = [$hs.modules.ForeignziCziTypes.hs_zdfRealCChar, $hs.modules.ForeignziCziTypes.hs_zdfEnumCChar, hs_a140625vmtE, hs_a140725vmtI, hs_a140825vmtM, hs_a140925vmtQ, hs_a141025vmtU, hs_a141125vmtY, hs_a141225vmu2];
    this.hs_zdfBitsCChar.data = [$hs.modules.ForeignziCziTypes.hs_zdfNumCChar, hs_a138925vmsy, hs_a139025vmsC, hs_a139125vmsG, hs_a139225vmsK, hs_a139325vmsO, hs_a139425vmsS, hs_a139525vmsW, hs_a139625vmt0, hs_a139725vmt4, hs_a139825vmt8, hs_a139925vmtc, hs_a140025vmtg, hs_a140125vmtk, hs_a140225vmto, hs_a140325vmts, hs_a140425vmtw, hs_a140525vmtA];
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
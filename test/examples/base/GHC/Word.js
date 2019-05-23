
$hs.modules.GHCziWord = new $hs.Module();
$hs.modules.GHCziWord.dependencies = ["GHC.Prim", "GHC.CString", "GHC.IntWord64", "GHC.Integer", "GHC.Base", "GHC.Enum", "GHC.Num", "GHC.Real", "GHC.Show", "GHC.Err", "GHC.Classes", "GHC.Arr", "GHC.Read", "Data.Bits"];
$hs.modules.GHCziWord.initBeforeDependencies = function () {
    this.hs_predError = new $hs.Func(1);
    this.hs_succError = new $hs.Func(1);
    this.hs_fromEnumError = new $hs.Func(1);
    this.hs_toEnumError = new $hs.Func(1);
    this.hs_zdfBoundedWord = new $hs.Data(1);
    this.hs_zdfEqWord64 = new $hs.Data(1);
    this.hs_zdfOrdWord64 = new $hs.Data(1);
    this.hs_zdfBoundedWord64 = new $hs.Data(1);
    this.hs_zdfEnumWord64 = new $hs.Data(1);
    this.hs_zdfShowWord64 = new $hs.Data(1);
    this.hs_zdfNumWord64 = new $hs.Data(1);
    this.hs_zdfRealWord64 = new $hs.Data(1);
    this.hs_zdfIntegralWord64 = new $hs.Data(1);
    this.hs_zdfBitsWord64 = new $hs.Data(1);
    this.hs_zdfIxWord64 = new $hs.Data(1);
    this.hs_zdfReadWord64 = new $hs.Data(1);
    this.hs_zdfEqWord = new $hs.Data(1);
    this.hs_zdfOrdWord = new $hs.Data(1);
    this.hs_zdfShowWord = new $hs.Data(1);
    this.hs_zdfNumWord = new $hs.Data(1);
    this.hs_zdfRealWord = new $hs.Data(1);
    this.hs_zdfEnumWord = new $hs.Data(1);
    this.hs_zdfIntegralWord = new $hs.Data(1);
    this.hs_zdfBitsWord = new $hs.Data(1);
    this.hs_zdfReadWord = new $hs.Data(1);
    this.hs_zdfIxWord = new $hs.Data(1);
    this.hs_zdfEqWord8 = new $hs.Data(1);
    this.hs_zdfOrdWord8 = new $hs.Data(1);
    this.hs_zdfBoundedWord8 = new $hs.Data(1);
    this.hs_zdfShowWord8 = new $hs.Data(1);
    this.hs_zdfEnumWord8 = new $hs.Data(1);
    this.hs_zdfNumWord8 = new $hs.Data(1);
    this.hs_zdfRealWord8 = new $hs.Data(1);
    this.hs_zdfIntegralWord8 = new $hs.Data(1);
    this.hs_zdfReadWord8 = new $hs.Data(1);
    this.hs_zdfBitsWord8 = new $hs.Data(1);
    this.hs_zdfIxWord8 = new $hs.Data(1);
    this.hs_zdfEqWord16 = new $hs.Data(1);
    this.hs_zdfOrdWord16 = new $hs.Data(1);
    this.hs_zdfBoundedWord16 = new $hs.Data(1);
    this.hs_zdfShowWord16 = new $hs.Data(1);
    this.hs_zdfEnumWord16 = new $hs.Data(1);
    this.hs_zdfNumWord16 = new $hs.Data(1);
    this.hs_zdfRealWord16 = new $hs.Data(1);
    this.hs_zdfIntegralWord16 = new $hs.Data(1);
    this.hs_zdfReadWord16 = new $hs.Data(1);
    this.hs_zdfBitsWord16 = new $hs.Data(1);
    this.hs_zdfIxWord16 = new $hs.Data(1);
    this.hs_zdfEqWord32 = new $hs.Data(1);
    this.hs_zdfOrdWord32 = new $hs.Data(1);
    this.hs_zdfBoundedWord32 = new $hs.Data(1);
    this.hs_zdfEnumWord32 = new $hs.Data(1);
    this.hs_zdfShowWord32 = new $hs.Data(1);
    this.hs_zdfNumWord32 = new $hs.Data(1);
    this.hs_zdfRealWord32 = new $hs.Data(1);
    this.hs_zdfIntegralWord32 = new $hs.Data(1);
    this.hs_zdfReadWord32 = new $hs.Data(1);
    this.hs_zdfBitsWord32 = new $hs.Data(1);
    this.hs_zdfIxWord32 = new $hs.Data(1);
    this.hs_Wzh = new $hs.Func(1);
    this.hs_W8zh = new $hs.Func(1);
    this.hs_W16zh = new $hs.Func(1);
    this.hs_W32zh = new $hs.Func(1);
    this.hs_W64zh = new $hs.Func(1);
    this.hs_predError.notEvaluated = true;
    this.hs_predError.evaluate = function (hs_instzuty26Dfha) {
        $hs.modules.GHCziWord.loadDependencies();
        return this.evaluate(hs_instzuty26Dfha);
    };
    this.hs_succError.notEvaluated = true;
    this.hs_succError.evaluate = function (hs_instzuty26Dfhg) {
        $hs.modules.GHCziWord.loadDependencies();
        return this.evaluate(hs_instzuty26Dfhg);
    };
    this.hs_fromEnumError.notEvaluated = true;
    this.hs_fromEnumError.evaluate = function (hs_zddShow26Dfhs) {
        $hs.modules.GHCziWord.loadDependencies();
        return this.evaluate(hs_zddShow26Dfhs);
    };
    this.hs_toEnumError.notEvaluated = true;
    this.hs_toEnumError.evaluate = function (hs_zddShow26DfhU) {
        $hs.modules.GHCziWord.loadDependencies();
        return this.evaluate(hs_zddShow26DfhU);
    };
    this.hs_zdfBoundedWord.notEvaluated = true;
    this.hs_zdfBoundedWord.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfEqWord64.notEvaluated = true;
    this.hs_zdfEqWord64.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfOrdWord64.notEvaluated = true;
    this.hs_zdfOrdWord64.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfBoundedWord64.notEvaluated = true;
    this.hs_zdfBoundedWord64.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfEnumWord64.notEvaluated = true;
    this.hs_zdfEnumWord64.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfShowWord64.notEvaluated = true;
    this.hs_zdfShowWord64.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfNumWord64.notEvaluated = true;
    this.hs_zdfNumWord64.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfRealWord64.notEvaluated = true;
    this.hs_zdfRealWord64.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfIntegralWord64.notEvaluated = true;
    this.hs_zdfIntegralWord64.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfBitsWord64.notEvaluated = true;
    this.hs_zdfBitsWord64.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfIxWord64.notEvaluated = true;
    this.hs_zdfIxWord64.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfReadWord64.notEvaluated = true;
    this.hs_zdfReadWord64.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfEqWord.notEvaluated = true;
    this.hs_zdfEqWord.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfOrdWord.notEvaluated = true;
    this.hs_zdfOrdWord.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfShowWord.notEvaluated = true;
    this.hs_zdfShowWord.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfNumWord.notEvaluated = true;
    this.hs_zdfNumWord.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfRealWord.notEvaluated = true;
    this.hs_zdfRealWord.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfEnumWord.notEvaluated = true;
    this.hs_zdfEnumWord.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfIntegralWord.notEvaluated = true;
    this.hs_zdfIntegralWord.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfBitsWord.notEvaluated = true;
    this.hs_zdfBitsWord.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfReadWord.notEvaluated = true;
    this.hs_zdfReadWord.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfIxWord.notEvaluated = true;
    this.hs_zdfIxWord.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfEqWord8.notEvaluated = true;
    this.hs_zdfEqWord8.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfOrdWord8.notEvaluated = true;
    this.hs_zdfOrdWord8.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfBoundedWord8.notEvaluated = true;
    this.hs_zdfBoundedWord8.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfShowWord8.notEvaluated = true;
    this.hs_zdfShowWord8.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfEnumWord8.notEvaluated = true;
    this.hs_zdfEnumWord8.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfNumWord8.notEvaluated = true;
    this.hs_zdfNumWord8.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfRealWord8.notEvaluated = true;
    this.hs_zdfRealWord8.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfIntegralWord8.notEvaluated = true;
    this.hs_zdfIntegralWord8.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfReadWord8.notEvaluated = true;
    this.hs_zdfReadWord8.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfBitsWord8.notEvaluated = true;
    this.hs_zdfBitsWord8.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfIxWord8.notEvaluated = true;
    this.hs_zdfIxWord8.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfEqWord16.notEvaluated = true;
    this.hs_zdfEqWord16.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfOrdWord16.notEvaluated = true;
    this.hs_zdfOrdWord16.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfBoundedWord16.notEvaluated = true;
    this.hs_zdfBoundedWord16.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfShowWord16.notEvaluated = true;
    this.hs_zdfShowWord16.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfEnumWord16.notEvaluated = true;
    this.hs_zdfEnumWord16.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfNumWord16.notEvaluated = true;
    this.hs_zdfNumWord16.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfRealWord16.notEvaluated = true;
    this.hs_zdfRealWord16.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfIntegralWord16.notEvaluated = true;
    this.hs_zdfIntegralWord16.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfReadWord16.notEvaluated = true;
    this.hs_zdfReadWord16.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfBitsWord16.notEvaluated = true;
    this.hs_zdfBitsWord16.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfIxWord16.notEvaluated = true;
    this.hs_zdfIxWord16.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfEqWord32.notEvaluated = true;
    this.hs_zdfEqWord32.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfOrdWord32.notEvaluated = true;
    this.hs_zdfOrdWord32.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfBoundedWord32.notEvaluated = true;
    this.hs_zdfBoundedWord32.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfEnumWord32.notEvaluated = true;
    this.hs_zdfEnumWord32.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfShowWord32.notEvaluated = true;
    this.hs_zdfShowWord32.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfNumWord32.notEvaluated = true;
    this.hs_zdfNumWord32.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfRealWord32.notEvaluated = true;
    this.hs_zdfRealWord32.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfIntegralWord32.notEvaluated = true;
    this.hs_zdfIntegralWord32.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfReadWord32.notEvaluated = true;
    this.hs_zdfReadWord32.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfBitsWord32.notEvaluated = true;
    this.hs_zdfBitsWord32.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_zdfIxWord32.notEvaluated = true;
    this.hs_zdfIxWord32.evaluate = function () {
        $hs.modules.GHCziWord.loadDependencies();
        return this;
    };
    this.hs_Wzh.notEvaluated = true;
    this.hs_Wzh.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziWord.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_W8zh.notEvaluated = true;
    this.hs_W8zh.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziWord.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_W16zh.notEvaluated = true;
    this.hs_W16zh.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziWord.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_W32zh.notEvaluated = true;
    this.hs_W32zh.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziWord.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_W64zh.notEvaluated = true;
    this.hs_W64zh.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziWord.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
};
$hs.modules.GHCziWord.initAfterDependencies = function () {
    this.hs_predError.notEvaluated = false;
    this.hs_succError.notEvaluated = false;
    this.hs_fromEnumError.notEvaluated = false;
    this.hs_toEnumError.notEvaluated = false;
    this.hs_zdfBoundedWord.notEvaluated = false;
    this.hs_zdfBoundedWord.evaluate = function () {
        return this;
    };
    this.hs_zdfEqWord64.notEvaluated = false;
    this.hs_zdfEqWord64.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdWord64.notEvaluated = false;
    this.hs_zdfOrdWord64.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedWord64.notEvaluated = false;
    this.hs_zdfBoundedWord64.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumWord64.notEvaluated = false;
    this.hs_zdfEnumWord64.evaluate = function () {
        return this;
    };
    this.hs_zdfShowWord64.notEvaluated = false;
    this.hs_zdfShowWord64.evaluate = function () {
        return this;
    };
    this.hs_zdfNumWord64.notEvaluated = false;
    this.hs_zdfNumWord64.evaluate = function () {
        return this;
    };
    this.hs_zdfRealWord64.notEvaluated = false;
    this.hs_zdfRealWord64.evaluate = function () {
        return this;
    };
    this.hs_zdfIntegralWord64.notEvaluated = false;
    this.hs_zdfIntegralWord64.evaluate = function () {
        return this;
    };
    this.hs_zdfBitsWord64.notEvaluated = false;
    this.hs_zdfBitsWord64.evaluate = function () {
        return this;
    };
    this.hs_zdfIxWord64.notEvaluated = false;
    this.hs_zdfIxWord64.evaluate = function () {
        return this;
    };
    this.hs_zdfReadWord64.notEvaluated = false;
    this.hs_zdfReadWord64.evaluate = function () {
        return this;
    };
    this.hs_zdfEqWord.notEvaluated = false;
    this.hs_zdfEqWord.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdWord.notEvaluated = false;
    this.hs_zdfOrdWord.evaluate = function () {
        return this;
    };
    this.hs_zdfShowWord.notEvaluated = false;
    this.hs_zdfShowWord.evaluate = function () {
        return this;
    };
    this.hs_zdfNumWord.notEvaluated = false;
    this.hs_zdfNumWord.evaluate = function () {
        return this;
    };
    this.hs_zdfRealWord.notEvaluated = false;
    this.hs_zdfRealWord.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumWord.notEvaluated = false;
    this.hs_zdfEnumWord.evaluate = function () {
        return this;
    };
    this.hs_zdfIntegralWord.notEvaluated = false;
    this.hs_zdfIntegralWord.evaluate = function () {
        return this;
    };
    this.hs_zdfBitsWord.notEvaluated = false;
    this.hs_zdfBitsWord.evaluate = function () {
        return this;
    };
    this.hs_zdfReadWord.notEvaluated = false;
    this.hs_zdfReadWord.evaluate = function () {
        return this;
    };
    this.hs_zdfIxWord.notEvaluated = false;
    this.hs_zdfIxWord.evaluate = function () {
        return this;
    };
    this.hs_zdfEqWord8.notEvaluated = false;
    this.hs_zdfEqWord8.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdWord8.notEvaluated = false;
    this.hs_zdfOrdWord8.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedWord8.notEvaluated = false;
    this.hs_zdfBoundedWord8.evaluate = function () {
        return this;
    };
    this.hs_zdfShowWord8.notEvaluated = false;
    this.hs_zdfShowWord8.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumWord8.notEvaluated = false;
    this.hs_zdfEnumWord8.evaluate = function () {
        return this;
    };
    this.hs_zdfNumWord8.notEvaluated = false;
    this.hs_zdfNumWord8.evaluate = function () {
        return this;
    };
    this.hs_zdfRealWord8.notEvaluated = false;
    this.hs_zdfRealWord8.evaluate = function () {
        return this;
    };
    this.hs_zdfIntegralWord8.notEvaluated = false;
    this.hs_zdfIntegralWord8.evaluate = function () {
        return this;
    };
    this.hs_zdfReadWord8.notEvaluated = false;
    this.hs_zdfReadWord8.evaluate = function () {
        return this;
    };
    this.hs_zdfBitsWord8.notEvaluated = false;
    this.hs_zdfBitsWord8.evaluate = function () {
        return this;
    };
    this.hs_zdfIxWord8.notEvaluated = false;
    this.hs_zdfIxWord8.evaluate = function () {
        return this;
    };
    this.hs_zdfEqWord16.notEvaluated = false;
    this.hs_zdfEqWord16.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdWord16.notEvaluated = false;
    this.hs_zdfOrdWord16.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedWord16.notEvaluated = false;
    this.hs_zdfBoundedWord16.evaluate = function () {
        return this;
    };
    this.hs_zdfShowWord16.notEvaluated = false;
    this.hs_zdfShowWord16.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumWord16.notEvaluated = false;
    this.hs_zdfEnumWord16.evaluate = function () {
        return this;
    };
    this.hs_zdfNumWord16.notEvaluated = false;
    this.hs_zdfNumWord16.evaluate = function () {
        return this;
    };
    this.hs_zdfRealWord16.notEvaluated = false;
    this.hs_zdfRealWord16.evaluate = function () {
        return this;
    };
    this.hs_zdfIntegralWord16.notEvaluated = false;
    this.hs_zdfIntegralWord16.evaluate = function () {
        return this;
    };
    this.hs_zdfReadWord16.notEvaluated = false;
    this.hs_zdfReadWord16.evaluate = function () {
        return this;
    };
    this.hs_zdfBitsWord16.notEvaluated = false;
    this.hs_zdfBitsWord16.evaluate = function () {
        return this;
    };
    this.hs_zdfIxWord16.notEvaluated = false;
    this.hs_zdfIxWord16.evaluate = function () {
        return this;
    };
    this.hs_zdfEqWord32.notEvaluated = false;
    this.hs_zdfEqWord32.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdWord32.notEvaluated = false;
    this.hs_zdfOrdWord32.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedWord32.notEvaluated = false;
    this.hs_zdfBoundedWord32.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumWord32.notEvaluated = false;
    this.hs_zdfEnumWord32.evaluate = function () {
        return this;
    };
    this.hs_zdfShowWord32.notEvaluated = false;
    this.hs_zdfShowWord32.evaluate = function () {
        return this;
    };
    this.hs_zdfNumWord32.notEvaluated = false;
    this.hs_zdfNumWord32.evaluate = function () {
        return this;
    };
    this.hs_zdfRealWord32.notEvaluated = false;
    this.hs_zdfRealWord32.evaluate = function () {
        return this;
    };
    this.hs_zdfIntegralWord32.notEvaluated = false;
    this.hs_zdfIntegralWord32.evaluate = function () {
        return this;
    };
    this.hs_zdfReadWord32.notEvaluated = false;
    this.hs_zdfReadWord32.evaluate = function () {
        return this;
    };
    this.hs_zdfBitsWord32.notEvaluated = false;
    this.hs_zdfBitsWord32.evaluate = function () {
        return this;
    };
    this.hs_zdfIxWord32.notEvaluated = false;
    this.hs_zdfIxWord32.evaluate = function () {
        return this;
    };
    this.hs_Wzh.notEvaluated = false;
    this.hs_W8zh.notEvaluated = false;
    this.hs_W16zh.notEvaluated = false;
    this.hs_W32zh.notEvaluated = false;
    this.hs_W64zh.notEvaluated = false;
    var hs_shiftRL64zh25s8bU = new $hs.Func(2);
    var hs_shiftL64zh25s8bT = new $hs.Func(2);
    var hs_zdcfromInteger25uQM6 = new $hs.Func(1);
    var hs_zdcsignum25uQMb = new $hs.Func(1);
    var hs_zdcabs25uQMi = new $hs.Func(1);
    var hs_zdcnegate25uQMl = new $hs.Func(1);
    var hs_zdczm25uQMu = new $hs.Func(2);
    var hs_zdczt25uQMG = new $hs.Func(2);
    var hs_zdczp25uQMS = new $hs.Func(2);
    var hs_zdctoInteger25uQN4 = new $hs.Func(1);
    var hs_zdcmaxBound25uQNd = new $hs.Data(1);
    var hs_zdcminBound25uQNe = new $hs.Data(1);
    var hs_zdcisSigned25uQNf = new $hs.Func(1);
    var hs_zdcbitSizze25uQNi = new $hs.Func(1);
    var hs_zdcrotate25uQNl = new $hs.Func(2);
    var hs_zdcshift25uQNE = new $hs.Func(2);
    var hs_zdccomplement25uQNV = new $hs.Func(1);
    var hs_zdcxor25uQO5 = new $hs.Func(2);
    var hs_zdczizbzi25uQOh = new $hs.Func(2);
    var hs_zdczizazi25uQOt = new $hs.Func(2);
    var hs_zdcfromInteger125uQOF = new $hs.Func(1);
    var hs_zdcabs125uQOL = new $hs.Func(1);
    var hs_zdcnegate125uQOO = new $hs.Func(1);
    var hs_zdczm125uQOY = new $hs.Func(2);
    var hs_zdczt125uQPb = new $hs.Func(2);
    var hs_zdczp125uQPo = new $hs.Func(2);
    var hs_zdcfromEnum25uQPB = new $hs.Func(1);
    var hs_zdctoInteger125uQPI = new $hs.Func(1);
    var hs_zdcisSigned125uQPP = new $hs.Func(1);
    var hs_zdcbitSizze125uQPS = new $hs.Func(1);
    var hs_zdcrotate125uQPV = new $hs.Func(2);
    var hs_zdcshift125uQQf = new $hs.Func(2);
    var hs_zdcxor125uQQx = new $hs.Func(2);
    var hs_zdczizbzi125uQQJ = new $hs.Func(2);
    var hs_zdczizazi125uQQV = new $hs.Func(2);
    var hs_zdcfromInteger225uQR7 = new $hs.Func(1);
    var hs_zdcabs225uQRd = new $hs.Func(1);
    var hs_zdcnegate225uQRg = new $hs.Func(1);
    var hs_zdczm225uQRq = new $hs.Func(2);
    var hs_zdczt225uQRD = new $hs.Func(2);
    var hs_zdczp225uQRQ = new $hs.Func(2);
    var hs_zdcfromEnum125uQS3 = new $hs.Func(1);
    var hs_zdctoInteger225uQSa = new $hs.Func(1);
    var hs_zdcisSigned225uQSh = new $hs.Func(1);
    var hs_zdcbitSizze225uQSk = new $hs.Func(1);
    var hs_zdcrotate225uQSn = new $hs.Func(2);
    var hs_zdcshift225uQSH = new $hs.Func(2);
    var hs_zdcxor225uQSZ = new $hs.Func(2);
    var hs_zdczizbzi225uQTb = new $hs.Func(2);
    var hs_zdczizazi225uQTn = new $hs.Func(2);
    var hs_zdcfromInteger325uQTz = new $hs.Func(1);
    var hs_zdcabs325uQTF = new $hs.Func(1);
    var hs_zdcnegate325uQTI = new $hs.Func(1);
    var hs_zdczm325uQTS = new $hs.Func(2);
    var hs_zdczt325uQU5 = new $hs.Func(2);
    var hs_zdczp325uQUi = new $hs.Func(2);
    var hs_zdctoInteger325uQUv = new $hs.Func(1);
    var hs_zdcisSigned325uQUE = new $hs.Func(1);
    var hs_zdcbitSizze325uQUH = new $hs.Func(1);
    var hs_zdcrotate325uQUK = new $hs.Func(2);
    var hs_zdcshift325uQV4 = new $hs.Func(2);
    var hs_zdcxor325uQVm = new $hs.Func(2);
    var hs_zdczizbzi325uQVy = new $hs.Func(2);
    var hs_zdczizazi325uQVK = new $hs.Func(2);
    var hs_zdczsze25uQVW = new $hs.Func(2);
    var hs_zdczeze25uQW7 = new $hs.Func(2);
    var hs_zdczlze25uQWi = new $hs.Func(2);
    var hs_zdczg25uQWt = new $hs.Func(2);
    var hs_zdczgze25uQWE = new $hs.Func(2);
    var hs_zdczl25uQWP = new $hs.Func(2);
    var hs_zdcmin25uQX0 = new $hs.Thunk();
    var hs_zdcmax25uQX1 = new $hs.Thunk();
    var hs_zdccompare25uQX2 = new $hs.Thunk();
    var hs_zdcfromInteger425uQX3 = new $hs.Func(1);
    var hs_zdcabs425uQX8 = new $hs.Func(1);
    var hs_zdcnegate425uQXb = new $hs.Func(1);
    var hs_zdczm425uQXz = new $hs.Func(2);
    var hs_zdczt425uQY8 = new $hs.Func(2);
    var hs_zdczp425uQYH = new $hs.Func(2);
    var hs_zdctoInteger425uQZg = new $hs.Func(1);
    var hs_zdcisSigned425uQZm = new $hs.Func(1);
    var hs_zdcbitSizze425uQZp = new $hs.Func(1);
    var hs_zdcrotate425uQZs = new $hs.Func(2);
    var hs_zdcshift425uR00 = new $hs.Func(2);
    var hs_zdccomplement125uR0E = new $hs.Func(1);
    var hs_zdcxor425uR0Q = new $hs.Func(2);
    var hs_zdczizbzi425uR17 = new $hs.Func(2);
    var hs_zdczizazi425uR1o = new $hs.Func(2);
    var hs_sat26Dg2K = new $hs.Thunk();
    var hs_sat26Dg2L = new $hs.Thunk();
    var hs_zdczdp2Num25uR1F = new $hs.Thunk();
    var hs_zdczdp2Integral25uR1G = new $hs.Thunk();
    var hs_zdczdp1Real25uR1H = new $hs.Thunk();
    var hs_zdczdp1Integral25uR1I = new $hs.Thunk();
    var hs_zdcsignum125uR1J = new $hs.Func(1);
    var hs_zdcshowList25uR1K = new $hs.Thunk();
    var hs_zdcshow25uR1L = new $hs.Thunk();
    var hs_zdcdivMod25uR1M = new $hs.Func(2);
    var hs_zdcquotRem25uR1N = new $hs.Func(2);
    var hs_zdcmod25uR1O = new $hs.Func(2);
    var hs_zdcdiv25uR1P = new $hs.Func(2);
    var hs_zdcrem25uR1Q = new $hs.Func(2);
    var hs_zdcquot25uR1R = new $hs.Func(2);
    var hs_zdcenumFromThenTo25uR1S = new $hs.Thunk();
    var hs_zdcenumFromTo25uR1T = new $hs.Thunk();
    var hs_zdcenumFromThen25uR1U = new $hs.Thunk();
    var hs_zdcenumFrom25uR1V = new $hs.Thunk();
    var hs_zdcfromEnum225uR1W = new $hs.Func(1);
    var hs_zdctoEnum25uR1X = new $hs.Func(1);
    var hs_zdcpred25uR1Y = new $hs.Func(1);
    var hs_zdcsucc25uR1Z = new $hs.Func(1);
    var hs_zdctoRational25uR20 = new $hs.Func(1);
    var hs_zdcshowsPrec25uR21 = new $hs.Func(2);
    var hs_zdcmaxBound125uR22 = new $hs.Thunk();
    var hs_zdcminBound125uR23 = new $hs.Thunk();
    var hs_zdcrotateR25uR5u = new $hs.Thunk();
    var hs_zdcrotateL25uR5v = new $hs.Thunk();
    var hs_zdcshiftR25uR5w = new $hs.Thunk();
    var hs_zdcshiftL25uR5x = new $hs.Thunk();
    var hs_zdctestBit25uR5y = new $hs.Thunk();
    var hs_zdccomplementBit25uR5z = new $hs.Thunk();
    var hs_zdcclearBit25uR5A = new $hs.Thunk();
    var hs_zdcsetBit25uR5B = new $hs.Thunk();
    var hs_zdcbit25uR5C = new $hs.Thunk();
    var hs_zdcinRange25uR5D = new $hs.Func(2);
    var hs_zdcunsafeIndex25uR5P = new $hs.Func(2);
    var hs_zdcrange25uR5Z = new $hs.Func(1);
    var hs_zdcunsafeRangeSizze25uR67 = new $hs.Thunk();
    var hs_zdcrangeSizze25uR68 = new $hs.Thunk();
    var hs_zdcindex25uR69 = new $hs.Thunk();
    var hs_zdcreadsPrec25uR6a = new $hs.Func(2);
    var hs_zdcreadListPrec25uR6x = new $hs.Thunk();
    var hs_zdcreadPrec25uR6y = new $hs.Thunk();
    var hs_zdcreadList25uR6z = new $hs.Thunk();
    var hs_zdczlze125uR6A = new $hs.Func(2);
    var hs_zdczg125uR6L = new $hs.Func(2);
    var hs_zdczgze125uR6W = new $hs.Func(2);
    var hs_zdczl125uR77 = new $hs.Func(2);
    var hs_zdccompare125uR7i = new $hs.Func(2);
    var hs_zdczeze125uR7v = new $hs.Func(2);
    var hs_zdczsze125uR7G = new $hs.Func(2);
    var hs_zdcmin125uR7M = new $hs.Thunk();
    var hs_zdcmax125uR7N = new $hs.Thunk();
    var hs_zdcinRange125uR7O = new $hs.Func(2);
    var hs_zdcquot125uR80 = new $hs.Func(2);
    var hs_zdcrem125uR8g = new $hs.Func(2);
    var hs_zdcdiv125uR8w = new $hs.Func(2);
    var hs_zdcmod125uR8M = new $hs.Func(2);
    var hs_zdcquotRem125uR92 = new $hs.Func(2);
    var hs_zdcdivMod125uR9m = new $hs.Func(2);
    var hs_zdcshowList125uR9G = new $hs.Thunk();
    var hs_zdcshow125uR9H = new $hs.Thunk();
    var hs_zdczdp2Num125uR9I = new $hs.Thunk();
    var hs_zdcfromEnum325uR9J = new $hs.Func(1);
    var hs_zdctoEnum125uR9K = new $hs.Func(1);
    var hs_zdcpred125uR9L = new $hs.Func(1);
    var hs_zdcsucc125uR9M = new $hs.Func(1);
    var hs_zdczdp1Integral125uR9N = new $hs.Thunk();
    var hs_zdczdp2Integral125uR9O = new $hs.Thunk();
    var hs_zdcenumFromThenTo125uR9P = new $hs.Thunk();
    var hs_zdcenumFromTo125uR9Q = new $hs.Thunk();
    var hs_zdcenumFromThen125uR9R = new $hs.Thunk();
    var hs_zdcenumFrom125uR9S = new $hs.Thunk();
    var hs_zdcshowsPrec125uR9T = new $hs.Func(2);
    var hs_zdctoRational125uR9U = new $hs.Func(1);
    var hs_zdcrotateR125uRaE = new $hs.Thunk();
    var hs_zdcrotateL125uRaF = new $hs.Thunk();
    var hs_zdcshiftR125uRaG = new $hs.Thunk();
    var hs_zdcshiftL125uRaH = new $hs.Thunk();
    var hs_zdctestBit125uRaI = new $hs.Thunk();
    var hs_zdccomplementBit125uRaJ = new $hs.Thunk();
    var hs_zdcclearBit125uRaK = new $hs.Thunk();
    var hs_zdcsetBit125uRaL = new $hs.Thunk();
    var hs_zdcbit125uRaM = new $hs.Thunk();
    var hs_zdcreadsPrec125uRaN = new $hs.Func(2);
    var hs_zdcreadListPrec125uRba = new $hs.Thunk();
    var hs_zdcreadPrec125uRbb = new $hs.Thunk();
    var hs_zdcreadList125uRbc = new $hs.Thunk();
    var hs_zdcunsafeIndex125uRbd = new $hs.Func(2);
    var hs_zdcrange125uRbn = new $hs.Func(1);
    var hs_zdcunsafeRangeSizze125uRbv = new $hs.Thunk();
    var hs_zdcrangeSizze125uRbw = new $hs.Thunk();
    var hs_zdcindex125uRbx = new $hs.Thunk();
    var hs_zdczlze225uRby = new $hs.Func(2);
    var hs_zdczg225uRbJ = new $hs.Func(2);
    var hs_zdczgze225uRbU = new $hs.Func(2);
    var hs_zdczl225uRc5 = new $hs.Func(2);
    var hs_zdccompare225uRcg = new $hs.Func(2);
    var hs_zdczeze225uRct = new $hs.Func(2);
    var hs_zdczsze225uRcE = new $hs.Func(2);
    var hs_zdcmin225uRcK = new $hs.Thunk();
    var hs_zdcmax225uRcL = new $hs.Thunk();
    var hs_zdcinRange225uRcM = new $hs.Func(2);
    var hs_sat26Dg5I = new $hs.Thunk();
    var hs_sat26Dg5J = new $hs.Thunk();
    var hs_zdczdp2Num225uRcY = new $hs.Thunk();
    var hs_zdczdp1Real125uRcZ = new $hs.Thunk();
    var hs_zdczdp2Integral225uRd0 = new $hs.Thunk();
    var hs_zdczdp1Integral225uRd1 = new $hs.Thunk();
    var hs_zdctoRational225uRd2 = new $hs.Func(1);
    var hs_zdcsignum225uRd3 = new $hs.Func(1);
    var hs_zdcshowList225uRd4 = new $hs.Thunk();
    var hs_zdcshow225uRd5 = new $hs.Thunk();
    var hs_zdcdivMod225uRd6 = new $hs.Func(2);
    var hs_zdcquotRem225uRd7 = new $hs.Func(2);
    var hs_zdcmod225uRd8 = new $hs.Func(2);
    var hs_zdcdiv225uRd9 = new $hs.Func(2);
    var hs_zdcrem225uRda = new $hs.Func(2);
    var hs_zdcquot225uRdb = new $hs.Func(2);
    var hs_zdcenumFromThenTo225uRdc = new $hs.Thunk();
    var hs_zdcenumFromTo225uRdd = new $hs.Thunk();
    var hs_zdcenumFromThen225uRde = new $hs.Thunk();
    var hs_zdcenumFrom225uRdf = new $hs.Thunk();
    var hs_zdctoEnum225uRdg = new $hs.Func(1);
    var hs_zdcpred225uRdh = new $hs.Func(1);
    var hs_zdcsucc225uRdi = new $hs.Func(1);
    var hs_zdcshowsPrec225uRdj = new $hs.Func(2);
    var hs_zdcmaxBound225uRdk = new $hs.Thunk();
    var hs_zdcminBound225uRdl = new $hs.Thunk();
    var hs_zdcreadsPrec225uRfP = new $hs.Func(2);
    var hs_zdcreadListPrec225uRgc = new $hs.Thunk();
    var hs_zdcreadPrec225uRgd = new $hs.Thunk();
    var hs_zdcreadList225uRge = new $hs.Thunk();
    var hs_zdccomplement225uRgf = new $hs.Func(1);
    var hs_zdcrotateR225uRgp = new $hs.Thunk();
    var hs_zdcrotateL225uRgq = new $hs.Thunk();
    var hs_zdcshiftR225uRgr = new $hs.Thunk();
    var hs_zdcshiftL225uRgs = new $hs.Thunk();
    var hs_zdctestBit225uRgt = new $hs.Thunk();
    var hs_zdccomplementBit225uRgu = new $hs.Thunk();
    var hs_zdcclearBit225uRgv = new $hs.Thunk();
    var hs_zdcsetBit225uRgw = new $hs.Thunk();
    var hs_zdcbit225uRgx = new $hs.Thunk();
    var hs_zdcunsafeIndex225uRgy = new $hs.Func(2);
    var hs_zdcrange225uRgI = new $hs.Func(1);
    var hs_zdcunsafeRangeSizze225uRgQ = new $hs.Thunk();
    var hs_zdcrangeSizze225uRgR = new $hs.Thunk();
    var hs_zdcindex225uRgS = new $hs.Thunk();
    var hs_zdczlze325uRgT = new $hs.Func(2);
    var hs_zdczg325uRh4 = new $hs.Func(2);
    var hs_zdczgze325uRhf = new $hs.Func(2);
    var hs_zdczl325uRhq = new $hs.Func(2);
    var hs_zdccompare325uRhB = new $hs.Func(2);
    var hs_zdczeze325uRhO = new $hs.Func(2);
    var hs_zdczsze325uRhZ = new $hs.Func(2);
    var hs_zdcmin325uRi5 = new $hs.Thunk();
    var hs_zdcmax325uRi6 = new $hs.Thunk();
    var hs_zdcinRange325uRi7 = new $hs.Func(2);
    var hs_sat26Dg7a = new $hs.Thunk();
    var hs_sat26Dg7b = new $hs.Thunk();
    var hs_zdczdp2Num325uRij = new $hs.Thunk();
    var hs_zdczdp1Real225uRik = new $hs.Thunk();
    var hs_zdczdp2Integral325uRil = new $hs.Thunk();
    var hs_zdczdp1Integral325uRim = new $hs.Thunk();
    var hs_zdctoRational325uRin = new $hs.Func(1);
    var hs_zdcsignum325uRio = new $hs.Func(1);
    var hs_zdcshowList325uRip = new $hs.Thunk();
    var hs_zdcshow325uRiq = new $hs.Thunk();
    var hs_zdcdivMod325uRir = new $hs.Func(2);
    var hs_zdcquotRem325uRis = new $hs.Func(2);
    var hs_zdcmod325uRit = new $hs.Func(2);
    var hs_zdcdiv325uRiu = new $hs.Func(2);
    var hs_zdcrem325uRiv = new $hs.Func(2);
    var hs_zdcquot325uRiw = new $hs.Func(2);
    var hs_zdcenumFromThenTo325uRix = new $hs.Thunk();
    var hs_zdcenumFromTo325uRiy = new $hs.Thunk();
    var hs_zdcenumFromThen325uRiz = new $hs.Thunk();
    var hs_zdcenumFrom325uRiA = new $hs.Thunk();
    var hs_zdctoEnum325uRiB = new $hs.Func(1);
    var hs_zdcpred325uRiC = new $hs.Func(1);
    var hs_zdcsucc325uRiD = new $hs.Func(1);
    var hs_zdcshowsPrec325uRiE = new $hs.Func(2);
    var hs_zdcmaxBound325uRiF = new $hs.Thunk();
    var hs_zdcminBound325uRiG = new $hs.Thunk();
    var hs_zdcreadsPrec325uRla = new $hs.Func(2);
    var hs_zdcreadListPrec325uRlx = new $hs.Thunk();
    var hs_zdcreadPrec325uRly = new $hs.Thunk();
    var hs_zdcreadList325uRlz = new $hs.Thunk();
    var hs_zdccomplement325uRlA = new $hs.Func(1);
    var hs_zdcrotateR325uRlK = new $hs.Thunk();
    var hs_zdcrotateL325uRlL = new $hs.Thunk();
    var hs_zdcshiftR325uRlM = new $hs.Thunk();
    var hs_zdcshiftL325uRlN = new $hs.Thunk();
    var hs_zdctestBit325uRlO = new $hs.Thunk();
    var hs_zdccomplementBit325uRlP = new $hs.Thunk();
    var hs_zdcclearBit325uRlQ = new $hs.Thunk();
    var hs_zdcsetBit325uRlR = new $hs.Thunk();
    var hs_zdcbit325uRlS = new $hs.Thunk();
    var hs_zdcunsafeIndex325uRlT = new $hs.Func(2);
    var hs_zdcrange325uRm3 = new $hs.Func(1);
    var hs_zdcunsafeRangeSizze325uRmb = new $hs.Thunk();
    var hs_zdcrangeSizze325uRmc = new $hs.Thunk();
    var hs_zdcindex325uRmd = new $hs.Thunk();
    var hs_zdczlze425uRme = new $hs.Func(2);
    var hs_zdczg425uRmp = new $hs.Func(2);
    var hs_zdczgze425uRmA = new $hs.Func(2);
    var hs_zdczl425uRmL = new $hs.Func(2);
    var hs_zdccompare425uRmW = new $hs.Func(2);
    var hs_zdczeze425uRn9 = new $hs.Func(2);
    var hs_zdczsze425uRnk = new $hs.Func(2);
    var hs_zdcmin425uRnq = new $hs.Thunk();
    var hs_zdcmax425uRnr = new $hs.Thunk();
    var hs_zdcinRange425uRns = new $hs.Func(2);
    var hs_sat26Dg8G = new $hs.Thunk();
    var hs_sat26Dg8H = new $hs.Thunk();
    var hs_zdczdp2Num425uRnE = new $hs.Thunk();
    var hs_zdczdp2Integral425uRnF = new $hs.Thunk();
    var hs_zdczdp1Real325uRnG = new $hs.Thunk();
    var hs_zdczdp1Integral425uRnH = new $hs.Thunk();
    var hs_zdcsignum425uRnI = new $hs.Func(1);
    var hs_zdcshowList425uRnJ = new $hs.Thunk();
    var hs_zdcshow425uRnK = new $hs.Thunk();
    var hs_zdcdivMod425uRnL = new $hs.Func(2);
    var hs_zdcquotRem425uRnM = new $hs.Func(2);
    var hs_zdcmod425uRnN = new $hs.Func(2);
    var hs_zdcdiv425uRnO = new $hs.Func(2);
    var hs_zdcrem425uRnP = new $hs.Func(2);
    var hs_zdcquot425uRnQ = new $hs.Func(2);
    var hs_zdcenumFromThenTo425uRnR = new $hs.Thunk();
    var hs_zdcenumFromTo425uRnS = new $hs.Thunk();
    var hs_zdcenumFromThen425uRnT = new $hs.Thunk();
    var hs_zdcenumFrom425uRnU = new $hs.Thunk();
    var hs_zdcfromEnum425uRnV = new $hs.Func(1);
    var hs_zdctoEnum425uRnW = new $hs.Func(1);
    var hs_zdcpred425uRnX = new $hs.Func(1);
    var hs_zdcsucc425uRnY = new $hs.Func(1);
    var hs_zdctoRational425uRnZ = new $hs.Func(1);
    var hs_zdcshowsPrec425uRo0 = new $hs.Func(2);
    var hs_zdcmaxBound425uRo1 = new $hs.Thunk();
    var hs_zdcminBound425uRo2 = new $hs.Thunk();
    var hs_zdcreadsPrec425uRqH = new $hs.Func(2);
    var hs_zdcreadListPrec425uRr4 = new $hs.Thunk();
    var hs_zdcreadPrec425uRr5 = new $hs.Thunk();
    var hs_zdcreadList425uRr6 = new $hs.Thunk();
    var hs_zdccomplement425uRr7 = new $hs.Func(1);
    var hs_zdcrotateR425uRrh = new $hs.Thunk();
    var hs_zdcrotateL425uRri = new $hs.Thunk();
    var hs_zdcshiftR425uRrj = new $hs.Thunk();
    var hs_zdcshiftL425uRrk = new $hs.Thunk();
    var hs_zdctestBit425uRrl = new $hs.Thunk();
    var hs_zdccomplementBit425uRrm = new $hs.Thunk();
    var hs_zdcclearBit425uRrn = new $hs.Thunk();
    var hs_zdcsetBit425uRro = new $hs.Thunk();
    var hs_zdcbit425uRrp = new $hs.Thunk();
    var hs_zdcrange425uRrq = new $hs.Func(1);
    var hs_zdcunsafeIndex425uRry = new $hs.Func(2);
    var hs_zdcunsafeRangeSizze425uRrI = new $hs.Thunk();
    var hs_zdcrangeSizze425uRrJ = new $hs.Thunk();
    var hs_zdcindex425uRrK = new $hs.Thunk();
    hs_shiftRL64zh25s8bU.evaluate = function (hs_a26DfgQ, hs_b26DfgO) {
        var hs_wild26DfY2 = hs_b26DfgO >= 64 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26DfY2.tag) {
        case 1:
            return $hs.modules.GHCziIntWord64.hs_uncheckedShiftRL64zh.hscall(hs_a26DfgQ, hs_b26DfgO);
        case 2:
            var hs_wild126DfY3 = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_wordToWord64(0)];
            var hs_ds226DfgW = hs_wild126DfY3[1];
            if (hs_ds226DfgW.notEvaluated) {
                return hs_ds226DfgW.hscall();
            } else {
                return hs_ds226DfgW;
            }
        }
    };
    hs_shiftL64zh25s8bT.evaluate = function (hs_a26Dfh1, hs_b26DfgZ) {
        var hs_wild26DfY5 = hs_b26DfgZ >= 64 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26DfY5.tag) {
        case 1:
            return $hs.modules.GHCziIntWord64.hs_uncheckedShiftL64zh.hscall(hs_a26Dfh1, hs_b26DfgZ);
        case 2:
            var hs_wild126DfY6 = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_wordToWord64(0)];
            var hs_ds226Dfh7 = hs_wild126DfY6[1];
            if (hs_ds226Dfh7.notEvaluated) {
                return hs_ds226Dfh7.hscall();
            } else {
                return hs_ds226Dfh7;
            }
        }
    };
    this.hs_predError.evaluate = function (hs_instzuty26Dfha) {
        var hs_sat26DfY7 = new $hs.Thunk();
        hs_sat26DfY7.evaluateOnce = function () {
            var hs_sat26DfY9 = new $hs.Thunk();
            hs_sat26DfY9.evaluateOnce = function () {
                var hs_sat26DfYa = new $hs.Thunk();
                hs_sat26DfYa.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("}: tried to take `pred' of minBound\x00");
                };
                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_instzuty26Dfha, hs_sat26DfYa);
            };
            var hs_sat26DfY8 = new $hs.Thunk();
            hs_sat26DfY8.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Enum.pred{\x00");
            };
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DfY8, hs_sat26DfY9);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziErr.hs_error, hs_sat26DfY7);
    };
    this.hs_succError.evaluate = function (hs_instzuty26Dfhg) {
        var hs_sat26DfYb = new $hs.Thunk();
        hs_sat26DfYb.evaluateOnce = function () {
            var hs_sat26DfYd = new $hs.Thunk();
            hs_sat26DfYd.evaluateOnce = function () {
                var hs_sat26DfYe = new $hs.Thunk();
                hs_sat26DfYe.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("}: tried to take `succ' of maxBound\x00");
                };
                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_instzuty26Dfhg, hs_sat26DfYe);
            };
            var hs_sat26DfYc = new $hs.Thunk();
            hs_sat26DfYc.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Enum.succ{\x00");
            };
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DfYc, hs_sat26DfYd);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziErr.hs_error, hs_sat26DfYb);
    };
    this.hs_fromEnumError.evaluate = function (hs_zddShow26Dfhs) {
        var hs_zddShow126Dfhm = new $hs.Thunk();
        hs_zddShow126Dfhm.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUZR.hscall($hs.modules.GHCziShow.hs_zdfShowInt, $hs.modules.GHCziShow.hs_zdfShowInt);
        };
        var hs_sat26DfYf = new $hs.Func(2);
        hs_sat26DfYf.evaluate = function (hs_instzuty26Dfhq, hs_x26Dfht) {
            var hs_sat26DfYg = new $hs.Thunk();
            hs_sat26DfYg.evaluateOnce = function () {
                var hs_sat26DfhP = new $hs.Thunk();
                hs_sat26DfhP.evaluateOnce = function () {
                    var hs_sat26DfhO = new $hs.Thunk();
                    hs_sat26DfhO.evaluateOnce = function () {
                        var hs_sat26DfhM = new $hs.Thunk();
                        hs_sat26DfhM.evaluateOnce = function () {
                            var hs_sat26DfhK = new $hs.Thunk();
                            hs_sat26DfhK.evaluateOnce = function () {
                                var hs_sat26DfhI = new $hs.Thunk();
                                hs_sat26DfhI.evaluateOnce = function () {
                                    var hs_sat26DfhF = new $hs.Thunk();
                                    hs_sat26DfhF.evaluateOnce = function () {
                                        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziEnum.hs_zdfBoundedInt);
                                    };
                                    var hs_sat26DfhG = new $hs.Thunk();
                                    hs_sat26DfhG.evaluateOnce = function () {
                                        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziEnum.hs_zdfBoundedInt);
                                    };
                                    var hs_sat26DfhH = new $hs.Data(1);
                                    hs_sat26DfhH.data = [hs_sat26DfhG, hs_sat26DfhF];
                                    return $hs.modules.GHCziShow.hs_show.hscall(hs_zddShow126Dfhm, hs_sat26DfhH);
                                };
                                var hs_sat26DfhJ = new $hs.Thunk();
                                hs_sat26DfhJ.evaluateOnce = function () {
                                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall(") is outside of Int's bounds \x00");
                                };
                                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DfhJ, hs_sat26DfhI);
                            };
                            var hs_sat26DfhL = new $hs.Thunk();
                            hs_sat26DfhL.evaluateOnce = function () {
                                return $hs.modules.GHCziShow.hs_show.hscall(hs_zddShow26Dfhs, hs_x26Dfht);
                            };
                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DfhL, hs_sat26DfhK);
                        };
                        var hs_sat26DfhN = new $hs.Thunk();
                        hs_sat26DfhN.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("}: value (\x00");
                        };
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DfhN, hs_sat26DfhM);
                    };
                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_instzuty26Dfhq, hs_sat26DfhO);
                };
                var hs_sat26DfhQ = new $hs.Thunk();
                hs_sat26DfhQ.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Enum.fromEnum{\x00");
                };
                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DfhQ, hs_sat26DfhP);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziErr.hs_error, hs_sat26DfYg);
        };
        if (hs_sat26DfYf.notEvaluated) {
            return hs_sat26DfYf.hscall();
        } else {
            return hs_sat26DfYf;
        }
    };
    this.hs_toEnumError.evaluate = function (hs_zddShow26DfhU) {
        var hs_zddShow126DfhV = new $hs.Thunk();
        hs_zddShow126DfhV.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUZR.hscall(hs_zddShow26DfhU, hs_zddShow26DfhU);
        };
        var hs_sat26DfYh = new $hs.Func(3);
        hs_sat26DfYh.evaluate = function (hs_instzuty26Dfi0, hs_i26Dfi2, hs_bnds26Dfi5) {
            var hs_sat26DfYi = new $hs.Thunk();
            hs_sat26DfYi.evaluateOnce = function () {
                var hs_sat26Dfij = new $hs.Thunk();
                hs_sat26Dfij.evaluateOnce = function () {
                    var hs_sat26Dfii = new $hs.Thunk();
                    hs_sat26Dfii.evaluateOnce = function () {
                        var hs_sat26Dfig = new $hs.Thunk();
                        hs_sat26Dfig.evaluateOnce = function () {
                            var hs_sat26Dfie = new $hs.Thunk();
                            hs_sat26Dfie.evaluateOnce = function () {
                                var hs_sat26Dfic = new $hs.Thunk();
                                hs_sat26Dfic.evaluateOnce = function () {
                                    return $hs.modules.GHCziShow.hs_show.hscall(hs_zddShow126DfhV, hs_bnds26Dfi5);
                                };
                                var hs_sat26Dfid = new $hs.Thunk();
                                hs_sat26Dfid.evaluateOnce = function () {
                                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall(") is outside of bounds \x00");
                                };
                                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Dfid, hs_sat26Dfic);
                            };
                            var hs_sat26Dfif = new $hs.Thunk();
                            hs_sat26Dfif.evaluateOnce = function () {
                                return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_i26Dfi2);
                            };
                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Dfif, hs_sat26Dfie);
                        };
                        var hs_sat26Dfih = new $hs.Thunk();
                        hs_sat26Dfih.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("}: tag (\x00");
                        };
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Dfih, hs_sat26Dfig);
                    };
                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_instzuty26Dfi0, hs_sat26Dfii);
                };
                var hs_sat26Dfik = new $hs.Thunk();
                hs_sat26Dfik.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Enum.toEnum{\x00");
                };
                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Dfik, hs_sat26Dfij);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziErr.hs_error, hs_sat26DfYi);
        };
        if (hs_sat26DfYh.notEvaluated) {
            return hs_sat26DfYh.hscall();
        } else {
            return hs_sat26DfYh;
        }
    };
    hs_zdcfromInteger25uQM6.evaluate = function (hs_i26Dfio) {
        var hs_wild26Dfiq = $hs.modules.GHCziInteger.hs_integerToWord.hscall(hs_i26Dfio);
        var $res = new $hs.Data(1);
        $res.data = [hs_wild26Dfiq];
        return $res;
    };
    hs_zdcsignum25uQMb.evaluate = function (hs_ds26Dfit) {
        var hs_wild26DfYk = hs_ds26Dfit;
        if (hs_ds26Dfit.notEvaluated) {
            hs_wild26DfYk = hs_ds26Dfit.hscall();
        }
        var hs_ds126Dfiw = hs_wild26DfYk.data[0];
        var hs_ds226DfYj = hs_ds126Dfiw;
        if (hs_ds126Dfiw.notEvaluated) {
            hs_ds226DfYj = hs_ds126Dfiw.hscall();
        }
        switch (hs_ds226DfYj) {
        case 0:
            var $res = new $hs.Data(1);
            $res.data = [0];
            return $res;
        default:
            var $res = new $hs.Data(1);
            $res.data = [1];
            return $res;
        }
    };
    hs_zdcabs25uQMi.evaluate = function (hs_x26DfiA) {
        if (hs_x26DfiA.notEvaluated) {
            return hs_x26DfiA.hscall();
        } else {
            return hs_x26DfiA;
        }
    };
    hs_zdcnegate25uQMl.evaluate = function (hs_ds26DfiD) {
        var hs_wild26DfYl = hs_ds26DfiD;
        if (hs_ds26DfiD.notEvaluated) {
            hs_wild26DfYl = hs_ds26DfiD.hscall();
        }
        var hs_xzh26DfiG = hs_wild26DfYl.data[0];
        var hs_sat26DfYm = hs_xzh26DfiG;
        var hs_sat26DfYn = -hs_sat26DfYm;
        var hs_sat26DfYo = hs_sat26DfYn;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DfYo];
        return $res;
    };
    hs_zdczm25uQMu.evaluate = function (hs_ds26DfiN, hs_ds126DfiQ) {
        var hs_wild26DfYq = hs_ds26DfiN;
        if (hs_ds26DfiN.notEvaluated) {
            hs_wild26DfYq = hs_ds26DfiN.hscall();
        }
        var hs_xzh26DfiT = hs_wild26DfYq.data[0];
        var hs_wild126DfYp = hs_ds126DfiQ;
        if (hs_ds126DfiQ.notEvaluated) {
            hs_wild126DfYp = hs_ds126DfiQ.hscall();
        }
        var hs_yzh26DfiU = hs_wild126DfYp.data[0];
        var hs_sat26DfYr = ($hs.Int.addCarry(hs_xzh26DfiT, ~hs_yzh26DfiU, 1))[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DfYr];
        return $res;
    };
    hs_zdczt25uQMG.evaluate = function (hs_ds26DfiZ, hs_ds126Dfj2) {
        var hs_wild26DfYt = hs_ds26DfiZ;
        if (hs_ds26DfiZ.notEvaluated) {
            hs_wild26DfYt = hs_ds26DfiZ.hscall();
        }
        var hs_xzh26Dfj5 = hs_wild26DfYt.data[0];
        var hs_wild126DfYs = hs_ds126Dfj2;
        if (hs_ds126Dfj2.notEvaluated) {
            hs_wild126DfYs = hs_ds126Dfj2.hscall();
        }
        var hs_yzh26Dfj6 = hs_wild126DfYs.data[0];
        var hs_sat26DfYu = $hs.Int.mul(hs_xzh26Dfj5, hs_yzh26Dfj6);
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DfYu];
        return $res;
    };
    hs_zdczp25uQMS.evaluate = function (hs_ds26Dfjb, hs_ds126Dfje) {
        var hs_wild26DfYw = hs_ds26Dfjb;
        if (hs_ds26Dfjb.notEvaluated) {
            hs_wild26DfYw = hs_ds26Dfjb.hscall();
        }
        var hs_xzh26Dfjh = hs_wild26DfYw.data[0];
        var hs_wild126DfYv = hs_ds126Dfje;
        if (hs_ds126Dfje.notEvaluated) {
            hs_wild126DfYv = hs_ds126Dfje.hscall();
        }
        var hs_yzh26Dfji = hs_wild126DfYv.data[0];
        var hs_sat26DfYx = ($hs.Int.addCarry(hs_xzh26Dfjh, hs_yzh26Dfji, 0))[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DfYx];
        return $res;
    };
    hs_zdctoInteger25uQN4.evaluate = function (hs_ds26Dfjm) {
        var hs_wild26DfYy = hs_ds26Dfjm;
        if (hs_ds26Dfjm.notEvaluated) {
            hs_wild26DfYy = hs_ds26Dfjm.hscall();
        }
        var hs_xzh26Dfjp = hs_wild26DfYy.data[0];
        var hs_sat26DfYz = hs_xzh26Dfjp;
        var hs_wild126DfYA = hs_sat26DfYz >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild126DfYA.tag) {
        case 1:
            return $hs.modules.GHCziInteger.hs_wordToInteger.hscall(hs_xzh26Dfjp);
        case 2:
            var hs_sat26DfYB = hs_xzh26Dfjp;
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(hs_sat26DfYB);
        }
    };
    hs_zdcmaxBound25uQNd.data = [0];
    hs_zdcminBound25uQNe.data = [0];
    this.hs_zdfBoundedWord.data = [hs_zdcminBound25uQNe, hs_zdcmaxBound25uQNd];
    hs_zdcisSigned25uQNf.evaluate = function (hs_ds26Dfjx) {
        var $res = new $hs.Data(1);
        $res.data = [];
        return $res;
    };
    hs_zdcbitSizze25uQNi.evaluate = function (hs_ds26DfjA) {
        var $res = new $hs.Data(1);
        $res.data = [32];
        return $res;
    };
    hs_zdcrotate25uQNl.evaluate = function (hs_ds26DfjE, hs_ds126DfjH) {
        var hs_wild26DfYD = hs_ds26DfjE;
        if (hs_ds26DfjE.notEvaluated) {
            hs_wild26DfYD = hs_ds26DfjE.hscall();
        }
        var hs_xzh26DfjO = hs_wild26DfYD.data[0];
        var hs_wild126DfYC = hs_ds126DfjH;
        if (hs_ds126DfjH.notEvaluated) {
            hs_wild126DfYC = hs_ds126DfjH.hscall();
        }
        var hs_izh26DfjK = hs_wild126DfYC.data[0];
        var hs_sat26DfYE = hs_izh26DfjK;
        var hs_sat26DfYF = hs_sat26DfYE & 31;
        var hs_wild226DfjP = hs_sat26DfYF;
        switch (hs_wild226DfjP) {
        case 0:
            var $res = new $hs.Data(1);
            $res.data = [hs_xzh26DfjO];
            return $res;
        default:
            var hs_sat26DfYG = ($hs.Int.addCarry(32, ~hs_wild226DfjP, 1))[0];
            var hs_sat26DfYH = hs_xzh26DfjO >> hs_sat26DfYG;
            var hs_sat26DfYI = hs_xzh26DfjO << hs_wild226DfjP;
            var hs_sat26DfYJ = hs_sat26DfYI | hs_sat26DfYH;
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DfYJ];
            return $res;
        }
    };
    hs_zdcshift25uQNE.evaluate = function (hs_eta26DfjX, hs_eta126Dfk0) {
        var hs_wild26DfYL = hs_eta26DfjX;
        if (hs_eta26DfjX.notEvaluated) {
            hs_wild26DfYL = hs_eta26DfjX.hscall();
        }
        var hs_xzh26Dfk5 = hs_wild26DfYL.data[0];
        var hs_wild126DfYK = hs_eta126Dfk0;
        if (hs_eta126Dfk0.notEvaluated) {
            hs_wild126DfYK = hs_eta126Dfk0.hscall();
        }
        var hs_izh26Dfk3 = hs_wild126DfYK.data[0];
        var hs_wild226DfYM = hs_izh26Dfk3 >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226DfYM.tag) {
        case 1:
            var hs_sat26DfYN = -hs_izh26Dfk3;
            var hs_wild326Dfk8 = $hs.modules.GHCziBase.hs_shiftRLzh.hscall(hs_xzh26Dfk5, hs_sat26DfYN);
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326Dfk8];
            return $res;
        case 2:
            var hs_wild326Dfka = $hs.modules.GHCziBase.hs_shiftLzh.hscall(hs_xzh26Dfk5, hs_izh26Dfk3);
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326Dfka];
            return $res;
        }
    };
    hs_zdccomplement25uQNV.evaluate = function (hs_ds26Dfkd) {
        var hs_wild26DfYO = hs_ds26Dfkd;
        if (hs_ds26Dfkd.notEvaluated) {
            hs_wild26DfYO = hs_ds26Dfkd.hscall();
        }
        var hs_xzh26Dfki = hs_wild26DfYO.data[0];
        var hs_wild126DfYP = $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord);
        var hs_mbzh26Dfkj = hs_wild126DfYP.data[0];
        var hs_sat26DfYQ = hs_xzh26Dfki ^ hs_mbzh26Dfkj;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DfYQ];
        return $res;
    };
    hs_zdcxor25uQO5.evaluate = function (hs_ds26Dfko, hs_ds126Dfkr) {
        var hs_wild26DfYS = hs_ds26Dfko;
        if (hs_ds26Dfko.notEvaluated) {
            hs_wild26DfYS = hs_ds26Dfko.hscall();
        }
        var hs_xzh26Dfku = hs_wild26DfYS.data[0];
        var hs_wild126DfYR = hs_ds126Dfkr;
        if (hs_ds126Dfkr.notEvaluated) {
            hs_wild126DfYR = hs_ds126Dfkr.hscall();
        }
        var hs_yzh26Dfkv = hs_wild126DfYR.data[0];
        var hs_sat26DfYT = hs_xzh26Dfku ^ hs_yzh26Dfkv;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DfYT];
        return $res;
    };
    hs_zdczizbzi25uQOh.evaluate = function (hs_ds26DfkA, hs_ds126DfkD) {
        var hs_wild26DfYV = hs_ds26DfkA;
        if (hs_ds26DfkA.notEvaluated) {
            hs_wild26DfYV = hs_ds26DfkA.hscall();
        }
        var hs_xzh26DfkG = hs_wild26DfYV.data[0];
        var hs_wild126DfYU = hs_ds126DfkD;
        if (hs_ds126DfkD.notEvaluated) {
            hs_wild126DfYU = hs_ds126DfkD.hscall();
        }
        var hs_yzh26DfkH = hs_wild126DfYU.data[0];
        var hs_sat26DfYW = hs_xzh26DfkG | hs_yzh26DfkH;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DfYW];
        return $res;
    };
    hs_zdczizazi25uQOt.evaluate = function (hs_ds26DfkM, hs_ds126DfkP) {
        var hs_wild26DfYY = hs_ds26DfkM;
        if (hs_ds26DfkM.notEvaluated) {
            hs_wild26DfYY = hs_ds26DfkM.hscall();
        }
        var hs_xzh26DfkS = hs_wild26DfYY.data[0];
        var hs_wild126DfYX = hs_ds126DfkP;
        if (hs_ds126DfkP.notEvaluated) {
            hs_wild126DfYX = hs_ds126DfkP.hscall();
        }
        var hs_yzh26DfkT = hs_wild126DfYX.data[0];
        var hs_sat26DfYZ = hs_xzh26DfkS & hs_yzh26DfkT;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DfYZ];
        return $res;
    };
    hs_zdcfromInteger125uQOF.evaluate = function (hs_i26DfkX) {
        var hs_wild26DfkZ = $hs.modules.GHCziInteger.hs_integerToWord.hscall(hs_i26DfkX);
        var hs_sat26DfZ0 = (hs_wild26DfkZ & 127) - (hs_wild26DfkZ & 128);
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DfZ0];
        return $res;
    };
    hs_zdcabs125uQOL.evaluate = function (hs_x26Dfl3) {
        if (hs_x26Dfl3.notEvaluated) {
            return hs_x26Dfl3.hscall();
        } else {
            return hs_x26Dfl3;
        }
    };
    hs_zdcnegate125uQOO.evaluate = function (hs_ds26Dfl6) {
        var hs_wild26DfZ1 = hs_ds26Dfl6;
        if (hs_ds26Dfl6.notEvaluated) {
            hs_wild26DfZ1 = hs_ds26Dfl6.hscall();
        }
        var hs_xzh26Dfl9 = hs_wild26DfZ1.data[0];
        var hs_sat26DfZ2 = hs_xzh26Dfl9;
        var hs_sat26DfZ3 = -hs_sat26DfZ2;
        var hs_sat26DfZ4 = hs_sat26DfZ3;
        var hs_sat26DfZ5 = (hs_sat26DfZ4 & 127) - (hs_sat26DfZ4 & 128);
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DfZ5];
        return $res;
    };
    hs_zdczm125uQOY.evaluate = function (hs_ds26Dflh, hs_ds126Dflk) {
        var hs_wild26DfZ7 = hs_ds26Dflh;
        if (hs_ds26Dflh.notEvaluated) {
            hs_wild26DfZ7 = hs_ds26Dflh.hscall();
        }
        var hs_xzh26Dfln = hs_wild26DfZ7.data[0];
        var hs_wild126DfZ6 = hs_ds126Dflk;
        if (hs_ds126Dflk.notEvaluated) {
            hs_wild126DfZ6 = hs_ds126Dflk.hscall();
        }
        var hs_yzh26Dflo = hs_wild126DfZ6.data[0];
        var hs_sat26DfZ8 = ($hs.Int.addCarry(hs_xzh26Dfln, ~hs_yzh26Dflo, 1))[0];
        var hs_sat26DfZ9 = (hs_sat26DfZ8 & 127) - (hs_sat26DfZ8 & 128);
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DfZ9];
        return $res;
    };
    hs_zdczt125uQPb.evaluate = function (hs_ds26Dflu, hs_ds126Dflx) {
        var hs_wild26DfZb = hs_ds26Dflu;
        if (hs_ds26Dflu.notEvaluated) {
            hs_wild26DfZb = hs_ds26Dflu.hscall();
        }
        var hs_xzh26DflA = hs_wild26DfZb.data[0];
        var hs_wild126DfZa = hs_ds126Dflx;
        if (hs_ds126Dflx.notEvaluated) {
            hs_wild126DfZa = hs_ds126Dflx.hscall();
        }
        var hs_yzh26DflB = hs_wild126DfZa.data[0];
        var hs_sat26DfZc = $hs.Int.mul(hs_xzh26DflA, hs_yzh26DflB);
        var hs_sat26DfZd = (hs_sat26DfZc & 127) - (hs_sat26DfZc & 128);
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DfZd];
        return $res;
    };
    hs_zdczp125uQPo.evaluate = function (hs_ds26DflH, hs_ds126DflK) {
        var hs_wild26DfZf = hs_ds26DflH;
        if (hs_ds26DflH.notEvaluated) {
            hs_wild26DfZf = hs_ds26DflH.hscall();
        }
        var hs_xzh26DflN = hs_wild26DfZf.data[0];
        var hs_wild126DfZe = hs_ds126DflK;
        if (hs_ds126DflK.notEvaluated) {
            hs_wild126DfZe = hs_ds126DflK.hscall();
        }
        var hs_yzh26DflO = hs_wild126DfZe.data[0];
        var hs_sat26DfZg = ($hs.Int.addCarry(hs_xzh26DflN, hs_yzh26DflO, 0))[0];
        var hs_sat26DfZh = (hs_sat26DfZg & 127) - (hs_sat26DfZg & 128);
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DfZh];
        return $res;
    };
    hs_zdcfromEnum25uQPB.evaluate = function (hs_ds26DflT) {
        var hs_wild26DfZi = hs_ds26DflT;
        if (hs_ds26DflT.notEvaluated) {
            hs_wild26DfZi = hs_ds26DflT.hscall();
        }
        var hs_xzh26DflW = hs_wild26DfZi.data[0];
        var hs_sat26DfZj = hs_xzh26DflW;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DfZj];
        return $res;
    };
    hs_zdctoInteger125uQPI.evaluate = function (hs_ds26Dfm0) {
        var hs_wild26DfZk = hs_ds26Dfm0;
        if (hs_ds26Dfm0.notEvaluated) {
            hs_wild26DfZk = hs_ds26Dfm0.hscall();
        }
        var hs_xzh26Dfm3 = hs_wild26DfZk.data[0];
        var hs_sat26DfZl = hs_xzh26Dfm3;
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(hs_sat26DfZl);
    };
    hs_zdcisSigned125uQPP.evaluate = function (hs_ds26Dfm7) {
        var $res = new $hs.Data(1);
        $res.data = [];
        return $res;
    };
    hs_zdcbitSizze125uQPS.evaluate = function (hs_ds26Dfma) {
        var $res = new $hs.Data(1);
        $res.data = [8];
        return $res;
    };
    hs_zdcrotate125uQPV.evaluate = function (hs_ds26Dfme, hs_ds126Dfmh) {
        var hs_wild26DfZn = hs_ds26Dfme;
        if (hs_ds26Dfme.notEvaluated) {
            hs_wild26DfZn = hs_ds26Dfme.hscall();
        }
        var hs_xzh26Dfmo = hs_wild26DfZn.data[0];
        var hs_wild126DfZm = hs_ds126Dfmh;
        if (hs_ds126Dfmh.notEvaluated) {
            hs_wild126DfZm = hs_ds126Dfmh.hscall();
        }
        var hs_izh26Dfmk = hs_wild126DfZm.data[0];
        var hs_sat26DfZo = hs_izh26Dfmk;
        var hs_sat26DfZp = hs_sat26DfZo & 7;
        var hs_wild226Dfmp = hs_sat26DfZp;
        switch (hs_wild226Dfmp) {
        case 0:
            var $res = new $hs.Data(1);
            $res.data = [hs_xzh26Dfmo];
            return $res;
        default:
            var hs_sat26DfZq = ($hs.Int.addCarry(8, ~hs_wild226Dfmp, 1))[0];
            var hs_sat26DfZr = hs_xzh26Dfmo >> hs_sat26DfZq;
            var hs_sat26DfZs = hs_xzh26Dfmo << hs_wild226Dfmp;
            var hs_sat26DfZt = hs_sat26DfZs | hs_sat26DfZr;
            var hs_sat26DfZu = (hs_sat26DfZt & 127) - (hs_sat26DfZt & 128);
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DfZu];
            return $res;
        }
    };
    hs_zdcshift125uQQf.evaluate = function (hs_eta26Dfmy, hs_eta126DfmB) {
        var hs_wild26DfZw = hs_eta26Dfmy;
        if (hs_eta26Dfmy.notEvaluated) {
            hs_wild26DfZw = hs_eta26Dfmy.hscall();
        }
        var hs_xzh26DfmG = hs_wild26DfZw.data[0];
        var hs_wild126DfZv = hs_eta126DfmB;
        if (hs_eta126DfmB.notEvaluated) {
            hs_wild126DfZv = hs_eta126DfmB.hscall();
        }
        var hs_izh26DfmE = hs_wild126DfZv.data[0];
        var hs_wild226DfZx = hs_izh26DfmE >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226DfZx.tag) {
        case 1:
            var hs_sat26DfZz = -hs_izh26DfmE;
            var hs_wild326DfmJ = $hs.modules.GHCziBase.hs_shiftRLzh.hscall(hs_xzh26DfmG, hs_sat26DfZz);
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DfmJ];
            return $res;
        case 2:
            var hs_wild326DfmL = $hs.modules.GHCziBase.hs_shiftLzh.hscall(hs_xzh26DfmG, hs_izh26DfmE);
            var hs_sat26DfZy = (hs_wild326DfmL & 127) - (hs_wild326DfmL & 128);
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DfZy];
            return $res;
        }
    };
    hs_zdcxor125uQQx.evaluate = function (hs_ds26DfmQ, hs_ds126DfmT) {
        var hs_wild26DfZB = hs_ds26DfmQ;
        if (hs_ds26DfmQ.notEvaluated) {
            hs_wild26DfZB = hs_ds26DfmQ.hscall();
        }
        var hs_xzh26DfmW = hs_wild26DfZB.data[0];
        var hs_wild126DfZA = hs_ds126DfmT;
        if (hs_ds126DfmT.notEvaluated) {
            hs_wild126DfZA = hs_ds126DfmT.hscall();
        }
        var hs_yzh26DfmX = hs_wild126DfZA.data[0];
        var hs_sat26DfZC = hs_xzh26DfmW ^ hs_yzh26DfmX;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DfZC];
        return $res;
    };
    hs_zdczizbzi125uQQJ.evaluate = function (hs_ds26Dfn2, hs_ds126Dfn5) {
        var hs_wild26DfZE = hs_ds26Dfn2;
        if (hs_ds26Dfn2.notEvaluated) {
            hs_wild26DfZE = hs_ds26Dfn2.hscall();
        }
        var hs_xzh26Dfn8 = hs_wild26DfZE.data[0];
        var hs_wild126DfZD = hs_ds126Dfn5;
        if (hs_ds126Dfn5.notEvaluated) {
            hs_wild126DfZD = hs_ds126Dfn5.hscall();
        }
        var hs_yzh26Dfn9 = hs_wild126DfZD.data[0];
        var hs_sat26DfZF = hs_xzh26Dfn8 | hs_yzh26Dfn9;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DfZF];
        return $res;
    };
    hs_zdczizazi125uQQV.evaluate = function (hs_ds26Dfne, hs_ds126Dfnh) {
        var hs_wild26DfZH = hs_ds26Dfne;
        if (hs_ds26Dfne.notEvaluated) {
            hs_wild26DfZH = hs_ds26Dfne.hscall();
        }
        var hs_xzh26Dfnk = hs_wild26DfZH.data[0];
        var hs_wild126DfZG = hs_ds126Dfnh;
        if (hs_ds126Dfnh.notEvaluated) {
            hs_wild126DfZG = hs_ds126Dfnh.hscall();
        }
        var hs_yzh26Dfnl = hs_wild126DfZG.data[0];
        var hs_sat26DfZI = hs_xzh26Dfnk & hs_yzh26Dfnl;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DfZI];
        return $res;
    };
    hs_zdcfromInteger225uQR7.evaluate = function (hs_i26Dfnp) {
        var hs_wild26Dfnr = $hs.modules.GHCziInteger.hs_integerToWord.hscall(hs_i26Dfnp);
        var hs_sat26DfZJ = (hs_wild26Dfnr & 32767) - (hs_wild26Dfnr & 32768);
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DfZJ];
        return $res;
    };
    hs_zdcabs225uQRd.evaluate = function (hs_x26Dfnv) {
        if (hs_x26Dfnv.notEvaluated) {
            return hs_x26Dfnv.hscall();
        } else {
            return hs_x26Dfnv;
        }
    };
    hs_zdcnegate225uQRg.evaluate = function (hs_ds26Dfny) {
        var hs_wild26DfZK = hs_ds26Dfny;
        if (hs_ds26Dfny.notEvaluated) {
            hs_wild26DfZK = hs_ds26Dfny.hscall();
        }
        var hs_xzh26DfnB = hs_wild26DfZK.data[0];
        var hs_sat26DfZL = hs_xzh26DfnB;
        var hs_sat26DfZM = -hs_sat26DfZL;
        var hs_sat26DfZN = hs_sat26DfZM;
        var hs_sat26DfZO = (hs_sat26DfZN & 32767) - (hs_sat26DfZN & 32768);
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DfZO];
        return $res;
    };
    hs_zdczm225uQRq.evaluate = function (hs_ds26DfnJ, hs_ds126DfnM) {
        var hs_wild26DfZQ = hs_ds26DfnJ;
        if (hs_ds26DfnJ.notEvaluated) {
            hs_wild26DfZQ = hs_ds26DfnJ.hscall();
        }
        var hs_xzh26DfnP = hs_wild26DfZQ.data[0];
        var hs_wild126DfZP = hs_ds126DfnM;
        if (hs_ds126DfnM.notEvaluated) {
            hs_wild126DfZP = hs_ds126DfnM.hscall();
        }
        var hs_yzh26DfnQ = hs_wild126DfZP.data[0];
        var hs_sat26DfZR = ($hs.Int.addCarry(hs_xzh26DfnP, ~hs_yzh26DfnQ, 1))[0];
        var hs_sat26DfZS = (hs_sat26DfZR & 32767) - (hs_sat26DfZR & 32768);
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DfZS];
        return $res;
    };
    hs_zdczt225uQRD.evaluate = function (hs_ds26DfnW, hs_ds126DfnZ) {
        var hs_wild26DfZU = hs_ds26DfnW;
        if (hs_ds26DfnW.notEvaluated) {
            hs_wild26DfZU = hs_ds26DfnW.hscall();
        }
        var hs_xzh26Dfo2 = hs_wild26DfZU.data[0];
        var hs_wild126DfZT = hs_ds126DfnZ;
        if (hs_ds126DfnZ.notEvaluated) {
            hs_wild126DfZT = hs_ds126DfnZ.hscall();
        }
        var hs_yzh26Dfo3 = hs_wild126DfZT.data[0];
        var hs_sat26DfZV = $hs.Int.mul(hs_xzh26Dfo2, hs_yzh26Dfo3);
        var hs_sat26DfZW = (hs_sat26DfZV & 32767) - (hs_sat26DfZV & 32768);
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DfZW];
        return $res;
    };
    hs_zdczp225uQRQ.evaluate = function (hs_ds26Dfo9, hs_ds126Dfoc) {
        var hs_wild26DfZY = hs_ds26Dfo9;
        if (hs_ds26Dfo9.notEvaluated) {
            hs_wild26DfZY = hs_ds26Dfo9.hscall();
        }
        var hs_xzh26Dfof = hs_wild26DfZY.data[0];
        var hs_wild126DfZX = hs_ds126Dfoc;
        if (hs_ds126Dfoc.notEvaluated) {
            hs_wild126DfZX = hs_ds126Dfoc.hscall();
        }
        var hs_yzh26Dfog = hs_wild126DfZX.data[0];
        var hs_sat26DfZZ = ($hs.Int.addCarry(hs_xzh26Dfof, hs_yzh26Dfog, 0))[0];
        var hs_sat26Dg00 = (hs_sat26DfZZ & 32767) - (hs_sat26DfZZ & 32768);
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dg00];
        return $res;
    };
    hs_zdcfromEnum125uQS3.evaluate = function (hs_ds26Dfol) {
        var hs_wild26Dg01 = hs_ds26Dfol;
        if (hs_ds26Dfol.notEvaluated) {
            hs_wild26Dg01 = hs_ds26Dfol.hscall();
        }
        var hs_xzh26Dfoo = hs_wild26Dg01.data[0];
        var hs_sat26Dg02 = hs_xzh26Dfoo;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dg02];
        return $res;
    };
    hs_zdctoInteger225uQSa.evaluate = function (hs_ds26Dfos) {
        var hs_wild26Dg03 = hs_ds26Dfos;
        if (hs_ds26Dfos.notEvaluated) {
            hs_wild26Dg03 = hs_ds26Dfos.hscall();
        }
        var hs_xzh26Dfov = hs_wild26Dg03.data[0];
        var hs_sat26Dg04 = hs_xzh26Dfov;
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(hs_sat26Dg04);
    };
    hs_zdcisSigned225uQSh.evaluate = function (hs_ds26Dfoz) {
        var $res = new $hs.Data(1);
        $res.data = [];
        return $res;
    };
    hs_zdcbitSizze225uQSk.evaluate = function (hs_ds26DfoC) {
        var $res = new $hs.Data(1);
        $res.data = [16];
        return $res;
    };
    hs_zdcrotate225uQSn.evaluate = function (hs_ds26DfoG, hs_ds126DfoJ) {
        var hs_wild26Dg06 = hs_ds26DfoG;
        if (hs_ds26DfoG.notEvaluated) {
            hs_wild26Dg06 = hs_ds26DfoG.hscall();
        }
        var hs_xzh26DfoQ = hs_wild26Dg06.data[0];
        var hs_wild126Dg05 = hs_ds126DfoJ;
        if (hs_ds126DfoJ.notEvaluated) {
            hs_wild126Dg05 = hs_ds126DfoJ.hscall();
        }
        var hs_izh26DfoM = hs_wild126Dg05.data[0];
        var hs_sat26Dg07 = hs_izh26DfoM;
        var hs_sat26Dg08 = hs_sat26Dg07 & 15;
        var hs_wild226DfoR = hs_sat26Dg08;
        switch (hs_wild226DfoR) {
        case 0:
            var $res = new $hs.Data(1);
            $res.data = [hs_xzh26DfoQ];
            return $res;
        default:
            var hs_sat26Dg09 = ($hs.Int.addCarry(16, ~hs_wild226DfoR, 1))[0];
            var hs_sat26Dg0a = hs_xzh26DfoQ >> hs_sat26Dg09;
            var hs_sat26Dg0b = hs_xzh26DfoQ << hs_wild226DfoR;
            var hs_sat26Dg0c = hs_sat26Dg0b | hs_sat26Dg0a;
            var hs_sat26Dg0d = (hs_sat26Dg0c & 32767) - (hs_sat26Dg0c & 32768);
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26Dg0d];
            return $res;
        }
    };
    hs_zdcshift225uQSH.evaluate = function (hs_eta26Dfp0, hs_eta126Dfp3) {
        var hs_wild26Dg0f = hs_eta26Dfp0;
        if (hs_eta26Dfp0.notEvaluated) {
            hs_wild26Dg0f = hs_eta26Dfp0.hscall();
        }
        var hs_xzh26Dfp8 = hs_wild26Dg0f.data[0];
        var hs_wild126Dg0e = hs_eta126Dfp3;
        if (hs_eta126Dfp3.notEvaluated) {
            hs_wild126Dg0e = hs_eta126Dfp3.hscall();
        }
        var hs_izh26Dfp6 = hs_wild126Dg0e.data[0];
        var hs_wild226Dg0g = hs_izh26Dfp6 >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226Dg0g.tag) {
        case 1:
            var hs_sat26Dg0i = -hs_izh26Dfp6;
            var hs_wild326Dfpb = $hs.modules.GHCziBase.hs_shiftRLzh.hscall(hs_xzh26Dfp8, hs_sat26Dg0i);
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326Dfpb];
            return $res;
        case 2:
            var hs_wild326Dfpd = $hs.modules.GHCziBase.hs_shiftLzh.hscall(hs_xzh26Dfp8, hs_izh26Dfp6);
            var hs_sat26Dg0h = (hs_wild326Dfpd & 32767) - (hs_wild326Dfpd & 32768);
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26Dg0h];
            return $res;
        }
    };
    hs_zdcxor225uQSZ.evaluate = function (hs_ds26Dfpi, hs_ds126Dfpl) {
        var hs_wild26Dg0k = hs_ds26Dfpi;
        if (hs_ds26Dfpi.notEvaluated) {
            hs_wild26Dg0k = hs_ds26Dfpi.hscall();
        }
        var hs_xzh26Dfpo = hs_wild26Dg0k.data[0];
        var hs_wild126Dg0j = hs_ds126Dfpl;
        if (hs_ds126Dfpl.notEvaluated) {
            hs_wild126Dg0j = hs_ds126Dfpl.hscall();
        }
        var hs_yzh26Dfpp = hs_wild126Dg0j.data[0];
        var hs_sat26Dg0l = hs_xzh26Dfpo ^ hs_yzh26Dfpp;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dg0l];
        return $res;
    };
    hs_zdczizbzi225uQTb.evaluate = function (hs_ds26Dfpu, hs_ds126Dfpx) {
        var hs_wild26Dg0n = hs_ds26Dfpu;
        if (hs_ds26Dfpu.notEvaluated) {
            hs_wild26Dg0n = hs_ds26Dfpu.hscall();
        }
        var hs_xzh26DfpA = hs_wild26Dg0n.data[0];
        var hs_wild126Dg0m = hs_ds126Dfpx;
        if (hs_ds126Dfpx.notEvaluated) {
            hs_wild126Dg0m = hs_ds126Dfpx.hscall();
        }
        var hs_yzh26DfpB = hs_wild126Dg0m.data[0];
        var hs_sat26Dg0o = hs_xzh26DfpA | hs_yzh26DfpB;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dg0o];
        return $res;
    };
    hs_zdczizazi225uQTn.evaluate = function (hs_ds26DfpG, hs_ds126DfpJ) {
        var hs_wild26Dg0q = hs_ds26DfpG;
        if (hs_ds26DfpG.notEvaluated) {
            hs_wild26Dg0q = hs_ds26DfpG.hscall();
        }
        var hs_xzh26DfpM = hs_wild26Dg0q.data[0];
        var hs_wild126Dg0p = hs_ds126DfpJ;
        if (hs_ds126DfpJ.notEvaluated) {
            hs_wild126Dg0p = hs_ds126DfpJ.hscall();
        }
        var hs_yzh26DfpN = hs_wild126Dg0p.data[0];
        var hs_sat26Dg0r = hs_xzh26DfpM & hs_yzh26DfpN;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dg0r];
        return $res;
    };
    hs_zdcfromInteger325uQTz.evaluate = function (hs_i26DfpR) {
        var hs_wild26DfpT = $hs.modules.GHCziInteger.hs_integerToWord.hscall(hs_i26DfpR);
        var hs_sat26Dg0s = hs_wild26DfpT;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dg0s];
        return $res;
    };
    hs_zdcabs325uQTF.evaluate = function (hs_x26DfpX) {
        if (hs_x26DfpX.notEvaluated) {
            return hs_x26DfpX.hscall();
        } else {
            return hs_x26DfpX;
        }
    };
    hs_zdcnegate325uQTI.evaluate = function (hs_ds26Dfq0) {
        var hs_wild26Dg0t = hs_ds26Dfq0;
        if (hs_ds26Dfq0.notEvaluated) {
            hs_wild26Dg0t = hs_ds26Dfq0.hscall();
        }
        var hs_xzh26Dfq3 = hs_wild26Dg0t.data[0];
        var hs_sat26Dg0u = hs_xzh26Dfq3;
        var hs_sat26Dg0v = -hs_sat26Dg0u;
        var hs_sat26Dg0w = hs_sat26Dg0v;
        var hs_sat26Dg0x = hs_sat26Dg0w;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dg0x];
        return $res;
    };
    hs_zdczm325uQTS.evaluate = function (hs_ds26Dfqb, hs_ds126Dfqe) {
        var hs_wild26Dg0z = hs_ds26Dfqb;
        if (hs_ds26Dfqb.notEvaluated) {
            hs_wild26Dg0z = hs_ds26Dfqb.hscall();
        }
        var hs_xzh26Dfqh = hs_wild26Dg0z.data[0];
        var hs_wild126Dg0y = hs_ds126Dfqe;
        if (hs_ds126Dfqe.notEvaluated) {
            hs_wild126Dg0y = hs_ds126Dfqe.hscall();
        }
        var hs_yzh26Dfqi = hs_wild126Dg0y.data[0];
        var hs_sat26Dg0A = ($hs.Int.addCarry(hs_xzh26Dfqh, ~hs_yzh26Dfqi, 1))[0];
        var hs_sat26Dg0B = hs_sat26Dg0A;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dg0B];
        return $res;
    };
    hs_zdczt325uQU5.evaluate = function (hs_ds26Dfqo, hs_ds126Dfqr) {
        var hs_wild26Dg0D = hs_ds26Dfqo;
        if (hs_ds26Dfqo.notEvaluated) {
            hs_wild26Dg0D = hs_ds26Dfqo.hscall();
        }
        var hs_xzh26Dfqu = hs_wild26Dg0D.data[0];
        var hs_wild126Dg0C = hs_ds126Dfqr;
        if (hs_ds126Dfqr.notEvaluated) {
            hs_wild126Dg0C = hs_ds126Dfqr.hscall();
        }
        var hs_yzh26Dfqv = hs_wild126Dg0C.data[0];
        var hs_sat26Dg0E = $hs.Int.mul(hs_xzh26Dfqu, hs_yzh26Dfqv);
        var hs_sat26Dg0F = hs_sat26Dg0E;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dg0F];
        return $res;
    };
    hs_zdczp325uQUi.evaluate = function (hs_ds26DfqB, hs_ds126DfqE) {
        var hs_wild26Dg0H = hs_ds26DfqB;
        if (hs_ds26DfqB.notEvaluated) {
            hs_wild26Dg0H = hs_ds26DfqB.hscall();
        }
        var hs_xzh26DfqH = hs_wild26Dg0H.data[0];
        var hs_wild126Dg0G = hs_ds126DfqE;
        if (hs_ds126DfqE.notEvaluated) {
            hs_wild126Dg0G = hs_ds126DfqE.hscall();
        }
        var hs_yzh26DfqI = hs_wild126Dg0G.data[0];
        var hs_sat26Dg0I = ($hs.Int.addCarry(hs_xzh26DfqH, hs_yzh26DfqI, 0))[0];
        var hs_sat26Dg0J = hs_sat26Dg0I;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dg0J];
        return $res;
    };
    hs_zdctoInteger325uQUv.evaluate = function (hs_ds26DfqN) {
        var hs_wild26Dg0K = hs_ds26DfqN;
        if (hs_ds26DfqN.notEvaluated) {
            hs_wild26Dg0K = hs_ds26DfqN.hscall();
        }
        var hs_xzh26DfqQ = hs_wild26Dg0K.data[0];
        var hs_sat26Dg0L = hs_xzh26DfqQ;
        var hs_wild126Dg0M = hs_sat26Dg0L >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild126Dg0M.tag) {
        case 1:
            return $hs.modules.GHCziInteger.hs_wordToInteger.hscall(hs_xzh26DfqQ);
        case 2:
            var hs_sat26Dg0N = hs_xzh26DfqQ;
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(hs_sat26Dg0N);
        }
    };
    hs_zdcisSigned325uQUE.evaluate = function (hs_ds26DfqW) {
        var $res = new $hs.Data(1);
        $res.data = [];
        return $res;
    };
    hs_zdcbitSizze325uQUH.evaluate = function (hs_ds26DfqZ) {
        var $res = new $hs.Data(1);
        $res.data = [32];
        return $res;
    };
    hs_zdcrotate325uQUK.evaluate = function (hs_ds26Dfr3, hs_ds126Dfr6) {
        var hs_wild26Dg0P = hs_ds26Dfr3;
        if (hs_ds26Dfr3.notEvaluated) {
            hs_wild26Dg0P = hs_ds26Dfr3.hscall();
        }
        var hs_xzh26Dfrd = hs_wild26Dg0P.data[0];
        var hs_wild126Dg0O = hs_ds126Dfr6;
        if (hs_ds126Dfr6.notEvaluated) {
            hs_wild126Dg0O = hs_ds126Dfr6.hscall();
        }
        var hs_izh26Dfr9 = hs_wild126Dg0O.data[0];
        var hs_sat26Dg0Q = hs_izh26Dfr9;
        var hs_sat26Dg0R = hs_sat26Dg0Q & 31;
        var hs_wild226Dfre = hs_sat26Dg0R;
        switch (hs_wild226Dfre) {
        case 0:
            var $res = new $hs.Data(1);
            $res.data = [hs_xzh26Dfrd];
            return $res;
        default:
            var hs_sat26Dg0S = ($hs.Int.addCarry(32, ~hs_wild226Dfre, 1))[0];
            var hs_sat26Dg0T = hs_xzh26Dfrd >> hs_sat26Dg0S;
            var hs_sat26Dg0U = hs_xzh26Dfrd << hs_wild226Dfre;
            var hs_sat26Dg0V = hs_sat26Dg0U | hs_sat26Dg0T;
            var hs_sat26Dg0W = hs_sat26Dg0V;
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26Dg0W];
            return $res;
        }
    };
    hs_zdcshift325uQV4.evaluate = function (hs_eta26Dfrn, hs_eta126Dfrq) {
        var hs_wild26Dg0Y = hs_eta26Dfrn;
        if (hs_eta26Dfrn.notEvaluated) {
            hs_wild26Dg0Y = hs_eta26Dfrn.hscall();
        }
        var hs_xzh26Dfrv = hs_wild26Dg0Y.data[0];
        var hs_wild126Dg0X = hs_eta126Dfrq;
        if (hs_eta126Dfrq.notEvaluated) {
            hs_wild126Dg0X = hs_eta126Dfrq.hscall();
        }
        var hs_izh26Dfrt = hs_wild126Dg0X.data[0];
        var hs_wild226Dg0Z = hs_izh26Dfrt >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226Dg0Z.tag) {
        case 1:
            var hs_sat26Dg11 = -hs_izh26Dfrt;
            var hs_wild326Dfry = $hs.modules.GHCziBase.hs_shiftRLzh.hscall(hs_xzh26Dfrv, hs_sat26Dg11);
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326Dfry];
            return $res;
        case 2:
            var hs_wild326DfrA = $hs.modules.GHCziBase.hs_shiftLzh.hscall(hs_xzh26Dfrv, hs_izh26Dfrt);
            var hs_sat26Dg10 = hs_wild326DfrA;
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26Dg10];
            return $res;
        }
    };
    hs_zdcxor325uQVm.evaluate = function (hs_ds26DfrF, hs_ds126DfrI) {
        var hs_wild26Dg13 = hs_ds26DfrF;
        if (hs_ds26DfrF.notEvaluated) {
            hs_wild26Dg13 = hs_ds26DfrF.hscall();
        }
        var hs_xzh26DfrL = hs_wild26Dg13.data[0];
        var hs_wild126Dg12 = hs_ds126DfrI;
        if (hs_ds126DfrI.notEvaluated) {
            hs_wild126Dg12 = hs_ds126DfrI.hscall();
        }
        var hs_yzh26DfrM = hs_wild126Dg12.data[0];
        var hs_sat26Dg14 = hs_xzh26DfrL ^ hs_yzh26DfrM;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dg14];
        return $res;
    };
    hs_zdczizbzi325uQVy.evaluate = function (hs_ds26DfrR, hs_ds126DfrU) {
        var hs_wild26Dg16 = hs_ds26DfrR;
        if (hs_ds26DfrR.notEvaluated) {
            hs_wild26Dg16 = hs_ds26DfrR.hscall();
        }
        var hs_xzh26DfrX = hs_wild26Dg16.data[0];
        var hs_wild126Dg15 = hs_ds126DfrU;
        if (hs_ds126DfrU.notEvaluated) {
            hs_wild126Dg15 = hs_ds126DfrU.hscall();
        }
        var hs_yzh26DfrY = hs_wild126Dg15.data[0];
        var hs_sat26Dg17 = hs_xzh26DfrX | hs_yzh26DfrY;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dg17];
        return $res;
    };
    hs_zdczizazi325uQVK.evaluate = function (hs_ds26Dfs3, hs_ds126Dfs6) {
        var hs_wild26Dg19 = hs_ds26Dfs3;
        if (hs_ds26Dfs3.notEvaluated) {
            hs_wild26Dg19 = hs_ds26Dfs3.hscall();
        }
        var hs_xzh26Dfs9 = hs_wild26Dg19.data[0];
        var hs_wild126Dg18 = hs_ds126Dfs6;
        if (hs_ds126Dfs6.notEvaluated) {
            hs_wild126Dg18 = hs_ds126Dfs6.hscall();
        }
        var hs_yzh26Dfsa = hs_wild126Dg18.data[0];
        var hs_sat26Dg1a = hs_xzh26Dfs9 & hs_yzh26Dfsa;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dg1a];
        return $res;
    };
    hs_zdczsze25uQVW.evaluate = function (hs_ds26Dfsf, hs_ds126Dfsi) {
        var hs_wild26Dg1c = hs_ds26Dfsf;
        if (hs_ds26Dfsf.notEvaluated) {
            hs_wild26Dg1c = hs_ds26Dfsf.hscall();
        }
        var hs_xzh26Dfsl = hs_wild26Dg1c.data[0];
        var hs_wild126Dg1b = hs_ds126Dfsi;
        if (hs_ds126Dfsi.notEvaluated) {
            hs_wild126Dg1b = hs_ds126Dfsi.hscall();
        }
        var hs_yzh26Dfsm = hs_wild126Dg1b.data[0];
        return $hs.modules.GHCziIntWord64.hs_neWord64zh.hscall(hs_xzh26Dfsl, hs_yzh26Dfsm);
    };
    hs_zdczeze25uQW7.evaluate = function (hs_ds26Dfsq, hs_ds126Dfst) {
        var hs_wild26Dg1e = hs_ds26Dfsq;
        if (hs_ds26Dfsq.notEvaluated) {
            hs_wild26Dg1e = hs_ds26Dfsq.hscall();
        }
        var hs_xzh26Dfsw = hs_wild26Dg1e.data[0];
        var hs_wild126Dg1d = hs_ds126Dfst;
        if (hs_ds126Dfst.notEvaluated) {
            hs_wild126Dg1d = hs_ds126Dfst.hscall();
        }
        var hs_yzh26Dfsx = hs_wild126Dg1d.data[0];
        return $hs.modules.GHCziIntWord64.hs_eqWord64zh.hscall(hs_xzh26Dfsw, hs_yzh26Dfsx);
    };
    this.hs_zdfEqWord64.data = [hs_zdczeze25uQW7, hs_zdczsze25uQVW];
    hs_zdczlze25uQWi.evaluate = function (hs_ds26DfsB, hs_ds126DfsE) {
        var hs_wild26Dg1g = hs_ds26DfsB;
        if (hs_ds26DfsB.notEvaluated) {
            hs_wild26Dg1g = hs_ds26DfsB.hscall();
        }
        var hs_xzh26DfsH = hs_wild26Dg1g.data[0];
        var hs_wild126Dg1f = hs_ds126DfsE;
        if (hs_ds126DfsE.notEvaluated) {
            hs_wild126Dg1f = hs_ds126DfsE.hscall();
        }
        var hs_yzh26DfsI = hs_wild126Dg1f.data[0];
        return $hs.modules.GHCziIntWord64.hs_leWord64zh.hscall(hs_xzh26DfsH, hs_yzh26DfsI);
    };
    hs_zdczg25uQWt.evaluate = function (hs_ds26DfsM, hs_ds126DfsP) {
        var hs_wild26Dg1i = hs_ds26DfsM;
        if (hs_ds26DfsM.notEvaluated) {
            hs_wild26Dg1i = hs_ds26DfsM.hscall();
        }
        var hs_xzh26DfsS = hs_wild26Dg1i.data[0];
        var hs_wild126Dg1h = hs_ds126DfsP;
        if (hs_ds126DfsP.notEvaluated) {
            hs_wild126Dg1h = hs_ds126DfsP.hscall();
        }
        var hs_yzh26DfsT = hs_wild126Dg1h.data[0];
        return $hs.modules.GHCziIntWord64.hs_gtWord64zh.hscall(hs_xzh26DfsS, hs_yzh26DfsT);
    };
    hs_zdczgze25uQWE.evaluate = function (hs_ds26DfsX, hs_ds126Dft0) {
        var hs_wild26Dg1k = hs_ds26DfsX;
        if (hs_ds26DfsX.notEvaluated) {
            hs_wild26Dg1k = hs_ds26DfsX.hscall();
        }
        var hs_xzh26Dft3 = hs_wild26Dg1k.data[0];
        var hs_wild126Dg1j = hs_ds126Dft0;
        if (hs_ds126Dft0.notEvaluated) {
            hs_wild126Dg1j = hs_ds126Dft0.hscall();
        }
        var hs_yzh26Dft4 = hs_wild126Dg1j.data[0];
        return $hs.modules.GHCziIntWord64.hs_geWord64zh.hscall(hs_xzh26Dft3, hs_yzh26Dft4);
    };
    hs_zdczl25uQWP.evaluate = function (hs_ds26Dft8, hs_ds126Dftb) {
        var hs_wild26Dg1m = hs_ds26Dft8;
        if (hs_ds26Dft8.notEvaluated) {
            hs_wild26Dg1m = hs_ds26Dft8.hscall();
        }
        var hs_xzh26Dfte = hs_wild26Dg1m.data[0];
        var hs_wild126Dg1l = hs_ds126Dftb;
        if (hs_ds126Dftb.notEvaluated) {
            hs_wild126Dg1l = hs_ds126Dftb.hscall();
        }
        var hs_yzh26Dftf = hs_wild126Dg1l.data[0];
        return $hs.modules.GHCziIntWord64.hs_ltWord64zh.hscall(hs_xzh26Dfte, hs_yzh26Dftf);
    };
    this.hs_zdfOrdWord64.data = [$hs.modules.GHCziWord.hs_zdfEqWord64, hs_zdccompare25uQX2, hs_zdczl25uQWP, hs_zdczgze25uQWE, hs_zdczg25uQWt, hs_zdczlze25uQWi, hs_zdcmax25uQX1, hs_zdcmin25uQX0];
    hs_zdcmin25uQX0.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmin.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdcmax25uQX1.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmax.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdccompare25uQX2.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmcompare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdcfromInteger425uQX3.evaluate = function (hs_i26Dftl) {
        var hs_wild26Dftn = $hs.modules.GHCziInteger.hs_integerToWord64.hscall(hs_i26Dftl);
        var $res = new $hs.Data(1);
        $res.data = [hs_wild26Dftn];
        return $res;
    };
    hs_zdcabs425uQX8.evaluate = function (hs_x26Dftq) {
        if (hs_x26Dftq.notEvaluated) {
            return hs_x26Dftq.hscall();
        } else {
            return hs_x26Dftq;
        }
    };
    hs_zdcnegate425uQXb.evaluate = function (hs_ds26Dftt) {
        var hs_wild26Dg1o = hs_ds26Dftt;
        if (hs_ds26Dftt.notEvaluated) {
            hs_wild26Dg1o = hs_ds26Dftt.hscall();
        }
        var hs_xzh26Dftx = hs_wild26Dg1o.data[0];
        var hs_wild126Dg1p = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_word64ToInt64(hs_xzh26Dftx)];
        var hs_ds226DftD = hs_wild126Dg1p[1];
        var hs_wild226Dg1r = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_negateInt64(hs_ds226DftD)];
        var hs_ds426DftJ = hs_wild226Dg1r[1];
        var hs_wild326Dg1t = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_int64ToWord64(hs_ds426DftJ)];
        var hs_ds626DftO = hs_wild326Dg1t[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds626DftO];
        return $res;
    };
    hs_zdczm425uQXz.evaluate = function (hs_ds26DftS, hs_ds126DftV) {
        var hs_wild26Dg1w = hs_ds26DftS;
        if (hs_ds26DftS.notEvaluated) {
            hs_wild26Dg1w = hs_ds26DftS.hscall();
        }
        var hs_xzh26Dfu5 = hs_wild26Dg1w.data[0];
        var hs_wild126Dg1v = hs_ds126DftV;
        if (hs_ds126DftV.notEvaluated) {
            hs_wild126Dg1v = hs_ds126DftV.hscall();
        }
        var hs_yzh26DftZ = hs_wild126Dg1v.data[0];
        var hs_wild226Dg1x = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_word64ToInt64(hs_yzh26DftZ)];
        var hs_ds326Dfuc = hs_wild226Dg1x[1];
        var hs_wild326Dg1z = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_word64ToInt64(hs_xzh26Dfu5)];
        var hs_ds526Dfub = hs_wild326Dg1z[1];
        var hs_wild426Dg1B = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_minusInt64(hs_ds526Dfub, hs_ds326Dfuc)];
        var hs_ds726Dfui = hs_wild426Dg1B[1];
        var hs_wild526Dg1D = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_int64ToWord64(hs_ds726Dfui)];
        var hs_ds926Dfun = hs_wild526Dg1D[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds926Dfun];
        return $res;
    };
    hs_zdczt425uQY8.evaluate = function (hs_ds26Dfur, hs_ds126Dfuu) {
        var hs_wild26Dg1G = hs_ds26Dfur;
        if (hs_ds26Dfur.notEvaluated) {
            hs_wild26Dg1G = hs_ds26Dfur.hscall();
        }
        var hs_xzh26DfuE = hs_wild26Dg1G.data[0];
        var hs_wild126Dg1F = hs_ds126Dfuu;
        if (hs_ds126Dfuu.notEvaluated) {
            hs_wild126Dg1F = hs_ds126Dfuu.hscall();
        }
        var hs_yzh26Dfuy = hs_wild126Dg1F.data[0];
        var hs_wild226Dg1H = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_word64ToInt64(hs_yzh26Dfuy)];
        var hs_ds326DfuL = hs_wild226Dg1H[1];
        var hs_wild326Dg1J = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_word64ToInt64(hs_xzh26DfuE)];
        var hs_ds526DfuK = hs_wild326Dg1J[1];
        var hs_wild426Dg1L = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_timesInt64(hs_ds526DfuK, hs_ds326DfuL)];
        var hs_ds726DfuR = hs_wild426Dg1L[1];
        var hs_wild526Dg1N = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_int64ToWord64(hs_ds726DfuR)];
        var hs_ds926DfuW = hs_wild526Dg1N[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds926DfuW];
        return $res;
    };
    hs_zdczp425uQYH.evaluate = function (hs_ds26Dfv0, hs_ds126Dfv3) {
        var hs_wild26Dg1Q = hs_ds26Dfv0;
        if (hs_ds26Dfv0.notEvaluated) {
            hs_wild26Dg1Q = hs_ds26Dfv0.hscall();
        }
        var hs_xzh26Dfvd = hs_wild26Dg1Q.data[0];
        var hs_wild126Dg1P = hs_ds126Dfv3;
        if (hs_ds126Dfv3.notEvaluated) {
            hs_wild126Dg1P = hs_ds126Dfv3.hscall();
        }
        var hs_yzh26Dfv7 = hs_wild126Dg1P.data[0];
        var hs_wild226Dg1R = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_word64ToInt64(hs_yzh26Dfv7)];
        var hs_ds326Dfvk = hs_wild226Dg1R[1];
        var hs_wild326Dg1T = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_word64ToInt64(hs_xzh26Dfvd)];
        var hs_ds526Dfvj = hs_wild326Dg1T[1];
        var hs_wild426Dg1V = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_plusInt64(hs_ds526Dfvj, hs_ds326Dfvk)];
        var hs_ds726Dfvq = hs_wild426Dg1V[1];
        var hs_wild526Dg1X = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_int64ToWord64(hs_ds726Dfvq)];
        var hs_ds926Dfvv = hs_wild526Dg1X[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds926Dfvv];
        return $res;
    };
    hs_zdctoInteger425uQZg.evaluate = function (hs_ds26Dfvy) {
        var hs_wild26Dg1Y = hs_ds26Dfvy;
        if (hs_ds26Dfvy.notEvaluated) {
            hs_wild26Dg1Y = hs_ds26Dfvy.hscall();
        }
        var hs_xzh26DfvB = hs_wild26Dg1Y.data[0];
        return $hs.modules.GHCziInteger.hs_word64ToInteger.hscall(hs_xzh26DfvB);
    };
    hs_zdcisSigned425uQZm.evaluate = function (hs_ds26DfvE) {
        var $res = new $hs.Data(1);
        $res.data = [];
        return $res;
    };
    hs_zdcbitSizze425uQZp.evaluate = function (hs_ds26DfvH) {
        var $res = new $hs.Data(1);
        $res.data = [64];
        return $res;
    };
    hs_zdcrotate425uQZs.evaluate = function (hs_ds26DfvL, hs_ds126DfvO) {
        var hs_wild26Dg20 = hs_ds26DfvL;
        if (hs_ds26DfvL.notEvaluated) {
            hs_wild26Dg20 = hs_ds26DfvL.hscall();
        }
        var hs_xzh26DfvW = hs_wild26Dg20.data[0];
        var hs_wild126Dg1Z = hs_ds126DfvO;
        if (hs_ds126DfvO.notEvaluated) {
            hs_wild126Dg1Z = hs_ds126DfvO.hscall();
        }
        var hs_izh26DfvR = hs_wild126Dg1Z.data[0];
        var hs_sat26Dg21 = hs_izh26DfvR;
        var hs_sat26Dg22 = hs_sat26Dg21 & 63;
        var hs_wild226DfvX = hs_sat26Dg22;
        switch (hs_wild226DfvX) {
        case 0:
            var $res = new $hs.Data(1);
            $res.data = [hs_xzh26DfvW];
            return $res;
        default:
            var hs_sat26Dg24 = ($hs.Int.addCarry(64, ~hs_wild226DfvX, 1))[0];
            var hs_wild326Dg25 = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_uncheckedShiftRL64(hs_xzh26DfvW, hs_sat26Dg24)];
            var hs_ds326Dfwa = hs_wild326Dg25[1];
            var hs_wild426Dg27 = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_uncheckedShiftL64(hs_xzh26DfvW, hs_wild226DfvX)];
            var hs_ds526Dfw9 = hs_wild426Dg27[1];
            var hs_wild526Dg29 = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_or64(hs_ds526Dfw9, hs_ds326Dfwa)];
            var hs_ds726Dfwf = hs_wild526Dg29[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds726Dfwf];
            return $res;
        }
    };
    hs_zdcshift425uR00.evaluate = function (hs_eta26Dfwj, hs_eta126Dfwm) {
        var hs_wild26Dg2c = hs_eta26Dfwj;
        if (hs_eta26Dfwj.notEvaluated) {
            hs_wild26Dg2c = hs_eta26Dfwj.hscall();
        }
        var hs_xzh26Dfwv = hs_wild26Dg2c.data[0];
        var hs_wild126Dg2b = hs_eta126Dfwm;
        if (hs_eta126Dfwm.notEvaluated) {
            hs_wild126Dg2b = hs_eta126Dfwm.hscall();
        }
        var hs_izh26Dfwp = hs_wild126Dg2b.data[0];
        var hs_wild226Dg2d = hs_izh26Dfwp >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226Dg2d.tag) {
        case 1:
            var hs_b26Dfws = -hs_izh26Dfwp;
            var hs_wild326Dg2j = hs_b26Dfws >= 64 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild326Dg2j.tag) {
            case 1:
                var hs_wild426Dg2m = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_uncheckedShiftRL64(hs_xzh26Dfwv, hs_b26Dfws)];
                var hs_ds326DfwA = hs_wild426Dg2m[1];
                var $res = new $hs.Data(1);
                $res.data = [hs_ds326DfwA];
                return $res;
            case 2:
                var hs_wild426Dg2k = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_wordToWord64(0)];
                var hs_ds226DfwG = hs_wild426Dg2k[1];
                var $res = new $hs.Data(1);
                $res.data = [hs_ds226DfwG];
                return $res;
            }
        case 2:
            var hs_wild326Dg2e = hs_izh26Dfwp >= 64 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild326Dg2e.tag) {
            case 1:
                var hs_wild426Dg2h = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_uncheckedShiftL64(hs_xzh26Dfwv, hs_izh26Dfwp)];
                var hs_ds326DfwN = hs_wild426Dg2h[1];
                var $res = new $hs.Data(1);
                $res.data = [hs_ds326DfwN];
                return $res;
            case 2:
                var hs_wild426Dg2f = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_wordToWord64(0)];
                var hs_ds226DfwT = hs_wild426Dg2f[1];
                var $res = new $hs.Data(1);
                $res.data = [hs_ds226DfwT];
                return $res;
            }
        }
    };
    hs_zdccomplement125uR0E.evaluate = function (hs_ds26DfwW) {
        var hs_wild26Dg2o = hs_ds26DfwW;
        if (hs_ds26DfwW.notEvaluated) {
            hs_wild26Dg2o = hs_ds26DfwW.hscall();
        }
        var hs_xzh26Dfx0 = hs_wild26Dg2o.data[0];
        var hs_wild126Dg2p = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_not64(hs_xzh26Dfx0)];
        var hs_ds226Dfx5 = hs_wild126Dg2p[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds226Dfx5];
        return $res;
    };
    hs_zdcxor425uR0Q.evaluate = function (hs_ds26Dfx9, hs_ds126Dfxc) {
        var hs_wild26Dg2s = hs_ds26Dfx9;
        if (hs_ds26Dfx9.notEvaluated) {
            hs_wild26Dg2s = hs_ds26Dfx9.hscall();
        }
        var hs_xzh26Dfxg = hs_wild26Dg2s.data[0];
        var hs_wild126Dg2r = hs_ds126Dfxc;
        if (hs_ds126Dfxc.notEvaluated) {
            hs_wild126Dg2r = hs_ds126Dfxc.hscall();
        }
        var hs_yzh26Dfxh = hs_wild126Dg2r.data[0];
        var hs_wild226Dg2t = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_xor64(hs_xzh26Dfxg, hs_yzh26Dfxh)];
        var hs_ds326Dfxm = hs_wild226Dg2t[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds326Dfxm];
        return $res;
    };
    hs_zdczizbzi425uR17.evaluate = function (hs_ds26Dfxq, hs_ds126Dfxt) {
        var hs_wild26Dg2w = hs_ds26Dfxq;
        if (hs_ds26Dfxq.notEvaluated) {
            hs_wild26Dg2w = hs_ds26Dfxq.hscall();
        }
        var hs_xzh26Dfxx = hs_wild26Dg2w.data[0];
        var hs_wild126Dg2v = hs_ds126Dfxt;
        if (hs_ds126Dfxt.notEvaluated) {
            hs_wild126Dg2v = hs_ds126Dfxt.hscall();
        }
        var hs_yzh26Dfxy = hs_wild126Dg2v.data[0];
        var hs_wild226Dg2x = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_or64(hs_xzh26Dfxx, hs_yzh26Dfxy)];
        var hs_ds326DfxD = hs_wild226Dg2x[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds326DfxD];
        return $res;
    };
    hs_zdczizazi425uR1o.evaluate = function (hs_ds26DfxH, hs_ds126DfxK) {
        var hs_wild26Dg2A = hs_ds26DfxH;
        if (hs_ds26DfxH.notEvaluated) {
            hs_wild26Dg2A = hs_ds26DfxH.hscall();
        }
        var hs_xzh26DfxO = hs_wild26Dg2A.data[0];
        var hs_wild126Dg2z = hs_ds126DfxK;
        if (hs_ds126DfxK.notEvaluated) {
            hs_wild126Dg2z = hs_ds126DfxK.hscall();
        }
        var hs_yzh26DfxP = hs_wild126Dg2z.data[0];
        var hs_wild226Dg2B = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_and64(hs_xzh26DfxO, hs_yzh26DfxP)];
        var hs_ds326DfxU = hs_wild226Dg2B[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds326DfxU];
        return $res;
    };
    hs_sat26Dg2K.evaluateOnce = function () {
        var hs_sat26Dg2D = new $hs.Thunk();
        hs_sat26Dg2D.evaluateOnce = function () {
            var hs_sat26Dg2F = new $hs.Thunk();
            hs_sat26Dg2F.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2147483647);
            };
            var hs_sat26Dg2E = new $hs.Thunk();
            hs_sat26Dg2E.evaluateOnce = function () {
                var hs_sat26Dg2H = new $hs.Thunk();
                hs_sat26Dg2H.evaluateOnce = function () {
                    var hs_sat26Dg2J = new $hs.Thunk();
                    hs_sat26Dg2J.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2147483647);
                    };
                    var hs_sat26Dg2I = new $hs.Thunk();
                    hs_sat26Dg2I.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(4);
                    };
                    return $hs.modules.GHCziInteger.hs_timesInteger.hscall(hs_sat26Dg2I, hs_sat26Dg2J);
                };
                var hs_sat26Dg2G = new $hs.Thunk();
                hs_sat26Dg2G.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(8);
                };
                return $hs.modules.GHCziInteger.hs_plusInteger.hscall(hs_sat26Dg2G, hs_sat26Dg2H);
            };
            return $hs.modules.GHCziInteger.hs_timesInteger.hscall(hs_sat26Dg2E, hs_sat26Dg2F);
        };
        var hs_sat26Dg2C = new $hs.Thunk();
        hs_sat26Dg2C.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(3);
        };
        return $hs.modules.GHCziInteger.hs_plusInteger.hscall(hs_sat26Dg2C, hs_sat26Dg2D);
    };
    hs_sat26Dg2L.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
    };
    this.hs_zdfBoundedWord64.data = [hs_zdcminBound125uR23, hs_zdcmaxBound125uR22];
    this.hs_zdfEnumWord64.data = [hs_zdcsucc25uR1Z, hs_zdcpred25uR1Y, hs_zdctoEnum25uR1X, hs_zdcfromEnum225uR1W, hs_zdcenumFrom25uR1V, hs_zdcenumFromThen25uR1U, hs_zdcenumFromTo25uR1T, hs_zdcenumFromThenTo25uR1S];
    this.hs_zdfShowWord64.data = [hs_zdcshowsPrec25uR21, hs_zdcshow25uR1L, hs_zdcshowList25uR1K];
    hs_zdczdp2Num25uR1F.evaluateOnce = function () {
        if ($hs.modules.GHCziWord.hs_zdfShowWord64.notEvaluated) {
            return $hs.modules.GHCziWord.hs_zdfShowWord64.hscall();
        } else {
            return $hs.modules.GHCziWord.hs_zdfShowWord64;
        }
    };
    this.hs_zdfNumWord64.data = [$hs.modules.GHCziWord.hs_zdfEqWord64, $hs.modules.GHCziWord.hs_zdfShowWord64, hs_zdczp425uQYH, hs_zdczt425uQY8, hs_zdczm425uQXz, hs_zdcnegate425uQXb, hs_zdcabs425uQX8, hs_zdcsignum125uR1J, hs_zdcfromInteger425uQX3];
    hs_zdczdp2Integral25uR1G.evaluateOnce = function () {
        if ($hs.modules.GHCziWord.hs_zdfEnumWord64.notEvaluated) {
            return $hs.modules.GHCziWord.hs_zdfEnumWord64.hscall();
        } else {
            return $hs.modules.GHCziWord.hs_zdfEnumWord64;
        }
    };
    hs_zdczdp1Real25uR1H.evaluateOnce = function () {
        if ($hs.modules.GHCziWord.hs_zdfNumWord64.notEvaluated) {
            return $hs.modules.GHCziWord.hs_zdfNumWord64.hscall();
        } else {
            return $hs.modules.GHCziWord.hs_zdfNumWord64;
        }
    };
    this.hs_zdfRealWord64.data = [$hs.modules.GHCziWord.hs_zdfNumWord64, $hs.modules.GHCziWord.hs_zdfOrdWord64, hs_zdctoRational25uR20];
    hs_zdczdp1Integral25uR1I.evaluateOnce = function () {
        if ($hs.modules.GHCziWord.hs_zdfRealWord64.notEvaluated) {
            return $hs.modules.GHCziWord.hs_zdfRealWord64.hscall();
        } else {
            return $hs.modules.GHCziWord.hs_zdfRealWord64;
        }
    };
    this.hs_zdfIntegralWord64.data = [$hs.modules.GHCziWord.hs_zdfRealWord64, $hs.modules.GHCziWord.hs_zdfEnumWord64, hs_zdcquot25uR1R, hs_zdcrem25uR1Q, hs_zdcdiv25uR1P, hs_zdcmod25uR1O, hs_zdcquotRem25uR1N, hs_zdcdivMod25uR1M, hs_zdctoInteger425uQZg];
    hs_zdcsignum125uR1J.evaluate = function (hs_ds26Dfyl) {
        var hs_sat26Dg3e = new $hs.Thunk();
        hs_sat26Dg3e.evaluateOnce = function () {
            var hs_sat26Dg3h = new $hs.Thunk();
            hs_sat26Dg3h.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26Dg3h);
        };
        var hs_wild26Dg3f = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord64, hs_ds26Dfyl, hs_sat26Dg3e);
        switch (hs_wild26Dg3f.tag) {
        case 1:
            var hs_sat26Dg3g = new $hs.Thunk();
            hs_sat26Dg3g.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26Dg3g);
        case 2:
            var hs_sat26Dg3d = new $hs.Thunk();
            hs_sat26Dg3d.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26Dg3d);
        }
    };
    hs_zdcshowList25uR1K.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall($hs.modules.GHCziWord.hs_zdfShowWord64);
    };
    hs_zdcshow25uR1L.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziWord.hs_zdfShowWord64);
    };
    hs_zdcdivMod25uR1M.evaluate = function (hs_ds26Dfyt, hs_y26Dfyw) {
        var hs_wild26Dg3l = hs_ds26Dfyt;
        if (hs_ds26Dfyt.notEvaluated) {
            hs_wild26Dg3l = hs_ds26Dfyt.hscall();
        }
        var hs_xzh26DfyE = hs_wild26Dg3l.data[0];
        var hs_wild126Dfyz = hs_y26Dfyw;
        if (hs_y26Dfyw.notEvaluated) {
            hs_wild126Dfyz = hs_y26Dfyw.hscall();
        }
        var hs_yzh26DfyF = hs_wild126Dfyz.data[0];
        var hs_sat26Dg3m = new $hs.Thunk();
        hs_sat26Dg3m.evaluateOnce = function () {
            var hs_sat26Dg3t = new $hs.Thunk();
            hs_sat26Dg3t.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26Dg3t);
        };
        var hs_wild226Dg3n = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord64, hs_wild126Dfyz, hs_sat26Dg3m);
        switch (hs_wild226Dg3n.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            var hs_sat26Dg3o = new $hs.Thunk();
            hs_sat26Dg3o.evaluateOnce = function () {
                var hs_wild326Dg3s = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_remWord64(hs_xzh26DfyE, hs_yzh26DfyF)];
                var hs_ds326DfyR = hs_wild326Dg3s[1];
                var $res = new $hs.Data(1);
                $res.data = [hs_ds326DfyR];
                return $res;
            };
            var hs_sat26Dg3k = new $hs.Thunk();
            hs_sat26Dg3k.evaluateOnce = function () {
                var hs_wild326Dg3q = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_quotWord64(hs_xzh26DfyE, hs_yzh26DfyF)];
                var hs_ds326DfyK = hs_wild326Dg3q[1];
                var $res = new $hs.Data(1);
                $res.data = [hs_ds326DfyK];
                return $res;
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26Dg3k, hs_sat26Dg3o];
            return $res;
        }
    };
    hs_zdcquotRem25uR1N.evaluate = function (hs_ds26DfyV, hs_y26DfyY) {
        var hs_wild26Dg3v = hs_ds26DfyV;
        if (hs_ds26DfyV.notEvaluated) {
            hs_wild26Dg3v = hs_ds26DfyV.hscall();
        }
        var hs_xzh26Dfz6 = hs_wild26Dg3v.data[0];
        var hs_wild126Dfz1 = hs_y26DfyY;
        if (hs_y26DfyY.notEvaluated) {
            hs_wild126Dfz1 = hs_y26DfyY.hscall();
        }
        var hs_yzh26Dfz7 = hs_wild126Dfz1.data[0];
        var hs_sat26Dg3w = new $hs.Thunk();
        hs_sat26Dg3w.evaluateOnce = function () {
            var hs_sat26Dg3D = new $hs.Thunk();
            hs_sat26Dg3D.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26Dg3D);
        };
        var hs_wild226Dg3x = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord64, hs_wild126Dfz1, hs_sat26Dg3w);
        switch (hs_wild226Dg3x.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            var hs_sat26Dg3y = new $hs.Thunk();
            hs_sat26Dg3y.evaluateOnce = function () {
                var hs_wild326Dg3C = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_remWord64(hs_xzh26Dfz6, hs_yzh26Dfz7)];
                var hs_ds326Dfzj = hs_wild326Dg3C[1];
                var $res = new $hs.Data(1);
                $res.data = [hs_ds326Dfzj];
                return $res;
            };
            var hs_sat26Dg3u = new $hs.Thunk();
            hs_sat26Dg3u.evaluateOnce = function () {
                var hs_wild326Dg3A = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_quotWord64(hs_xzh26Dfz6, hs_yzh26Dfz7)];
                var hs_ds326Dfzc = hs_wild326Dg3A[1];
                var $res = new $hs.Data(1);
                $res.data = [hs_ds326Dfzc];
                return $res;
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26Dg3u, hs_sat26Dg3y];
            return $res;
        }
    };
    hs_zdcmod25uR1O.evaluate = function (hs_ds26Dfzn, hs_y26Dfzq) {
        var hs_wild26Dg3F = hs_ds26Dfzn;
        if (hs_ds26Dfzn.notEvaluated) {
            hs_wild26Dg3F = hs_ds26Dfzn.hscall();
        }
        var hs_xzh26Dfzy = hs_wild26Dg3F.data[0];
        var hs_wild126Dfzt = hs_y26Dfzq;
        if (hs_y26Dfzq.notEvaluated) {
            hs_wild126Dfzt = hs_y26Dfzq.hscall();
        }
        var hs_yzh26Dfzz = hs_wild126Dfzt.data[0];
        var hs_sat26Dg3G = new $hs.Thunk();
        hs_sat26Dg3G.evaluateOnce = function () {
            var hs_sat26Dg3J = new $hs.Thunk();
            hs_sat26Dg3J.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26Dg3J);
        };
        var hs_wild226Dg3H = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord64, hs_wild126Dfzt, hs_sat26Dg3G);
        switch (hs_wild226Dg3H.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            var hs_wild326Dg3I = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_remWord64(hs_xzh26Dfzy, hs_yzh26Dfzz)];
            var hs_ds326DfzE = hs_wild326Dg3I[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds326DfzE];
            return $res;
        }
    };
    hs_zdcdiv25uR1P.evaluate = function (hs_ds26DfzH, hs_y26DfzK) {
        var hs_wild26Dg3L = hs_ds26DfzH;
        if (hs_ds26DfzH.notEvaluated) {
            hs_wild26Dg3L = hs_ds26DfzH.hscall();
        }
        var hs_xzh26DfzS = hs_wild26Dg3L.data[0];
        var hs_wild126DfzN = hs_y26DfzK;
        if (hs_y26DfzK.notEvaluated) {
            hs_wild126DfzN = hs_y26DfzK.hscall();
        }
        var hs_yzh26DfzT = hs_wild126DfzN.data[0];
        var hs_sat26Dg3M = new $hs.Thunk();
        hs_sat26Dg3M.evaluateOnce = function () {
            var hs_sat26Dg3P = new $hs.Thunk();
            hs_sat26Dg3P.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26Dg3P);
        };
        var hs_wild226Dg3N = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord64, hs_wild126DfzN, hs_sat26Dg3M);
        switch (hs_wild226Dg3N.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            var hs_wild326Dg3O = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_quotWord64(hs_xzh26DfzS, hs_yzh26DfzT)];
            var hs_ds326DfzY = hs_wild326Dg3O[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds326DfzY];
            return $res;
        }
    };
    hs_zdcrem25uR1Q.evaluate = function (hs_ds26DfA1, hs_y26DfA4) {
        var hs_wild26Dg3R = hs_ds26DfA1;
        if (hs_ds26DfA1.notEvaluated) {
            hs_wild26Dg3R = hs_ds26DfA1.hscall();
        }
        var hs_xzh26DfAc = hs_wild26Dg3R.data[0];
        var hs_wild126DfA7 = hs_y26DfA4;
        if (hs_y26DfA4.notEvaluated) {
            hs_wild126DfA7 = hs_y26DfA4.hscall();
        }
        var hs_yzh26DfAd = hs_wild126DfA7.data[0];
        var hs_sat26Dg3S = new $hs.Thunk();
        hs_sat26Dg3S.evaluateOnce = function () {
            var hs_sat26Dg3V = new $hs.Thunk();
            hs_sat26Dg3V.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26Dg3V);
        };
        var hs_wild226Dg3T = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord64, hs_wild126DfA7, hs_sat26Dg3S);
        switch (hs_wild226Dg3T.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            var hs_wild326Dg3U = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_remWord64(hs_xzh26DfAc, hs_yzh26DfAd)];
            var hs_ds326DfAi = hs_wild326Dg3U[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds326DfAi];
            return $res;
        }
    };
    hs_zdcquot25uR1R.evaluate = function (hs_ds26DfAl, hs_y26DfAo) {
        var hs_wild26Dg3X = hs_ds26DfAl;
        if (hs_ds26DfAl.notEvaluated) {
            hs_wild26Dg3X = hs_ds26DfAl.hscall();
        }
        var hs_xzh26DfAw = hs_wild26Dg3X.data[0];
        var hs_wild126DfAr = hs_y26DfAo;
        if (hs_y26DfAo.notEvaluated) {
            hs_wild126DfAr = hs_y26DfAo.hscall();
        }
        var hs_yzh26DfAx = hs_wild126DfAr.data[0];
        var hs_sat26Dg3Y = new $hs.Thunk();
        hs_sat26Dg3Y.evaluateOnce = function () {
            var hs_sat26Dg41 = new $hs.Thunk();
            hs_sat26Dg41.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26Dg41);
        };
        var hs_wild226Dg3Z = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord64, hs_wild126DfAr, hs_sat26Dg3Y);
        switch (hs_wild226Dg3Z.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            var hs_wild326Dg40 = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_quotWord64(hs_xzh26DfAw, hs_yzh26DfAx)];
            var hs_ds326DfAC = hs_wild326Dg40[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds326DfAC];
            return $res;
        }
    };
    hs_zdcenumFromThenTo25uR1S.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_integralEnumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcenumFromTo25uR1T.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_integralEnumFromTo.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcenumFromThen25uR1U.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_integralEnumFromThen.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64, $hs.modules.GHCziWord.hs_zdfBoundedWord64);
    };
    hs_zdcenumFrom25uR1V.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_integralEnumFrom.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64, $hs.modules.GHCziWord.hs_zdfBoundedWord64);
    };
    hs_zdcfromEnum225uR1W.evaluate = function (hs_x26DfAE) {
        var hs_wild26DfAH = hs_x26DfAE;
        if (hs_x26DfAE.notEvaluated) {
            hs_wild26DfAH = hs_x26DfAE.hscall();
        }
        var hs_xzh26DfAN = hs_wild26DfAH.data[0];
        var hs_sat26Dg2M = new $hs.Thunk();
        hs_sat26Dg2M.evaluateOnce = function () {
            var hs_sat26Dg2S = new $hs.Thunk();
            hs_sat26Dg2S.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziEnum.hs_zdfBoundedInt);
            };
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26Dg2S);
        };
        var hs_wild126Dg2N = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64, hs_wild26DfAH, hs_sat26Dg2M);
        switch (hs_wild126Dg2N.tag) {
        case 1:
            var hs_sat26Dg2R = new $hs.Thunk();
            hs_sat26Dg2R.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Word64\x00");
            };
            return $hs.modules.GHCziWord.hs_fromEnumError.hscall($hs.modules.GHCziWord.hs_zdfShowWord64, hs_sat26Dg2R, hs_wild26DfAH);
        case 2:
            var hs_wild226Dg2O = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_word64ToWord(hs_xzh26DfAN)];
            var hs_ds226DfAS = hs_wild226Dg2O[1];
            var hs_sat26Dg2Q = hs_ds226DfAS;
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26Dg2Q];
            return $res;
        }
    };
    hs_zdctoEnum25uR1X.evaluate = function (hs_i26DfAV) {
        var hs_wild26DfAY = hs_i26DfAV;
        if (hs_i26DfAV.notEvaluated) {
            hs_wild26DfAY = hs_i26DfAV.hscall();
        }
        var hs_izh26DfB6 = hs_wild26DfAY.data[0];
        var hs_sat26Dg2U = new $hs.Data(1);
        hs_sat26Dg2U.data = [0];
        var hs_wild126Dg2V = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_wild26DfAY, hs_sat26Dg2U);
        switch (hs_wild126Dg2V.tag) {
        case 1:
            var hs_sat26Dg2Z = new $hs.Thunk();
            hs_sat26Dg2Z.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord64);
            };
            var hs_sat26Dg30 = new $hs.Thunk();
            hs_sat26Dg30.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord64);
            };
            var hs_sat26Dg31 = new $hs.Data(1);
            hs_sat26Dg31.data = [hs_sat26Dg30, hs_sat26Dg2Z];
            var hs_sat26Dg2Y = new $hs.Thunk();
            hs_sat26Dg2Y.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Word64\x00");
            };
            return $hs.modules.GHCziWord.hs_toEnumError.hscall($hs.modules.GHCziWord.hs_zdfShowWord64, hs_sat26Dg2Y, hs_wild26DfAY, hs_sat26Dg31);
        case 2:
            var hs_sat26Dg2W = hs_izh26DfB6;
            var hs_wild226Dg2X = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_wordToWord64(hs_sat26Dg2W)];
            var hs_ds226DfBc = hs_wild226Dg2X[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds226DfBc];
            return $res;
        }
    };
    hs_zdcpred25uR1Y.evaluate = function (hs_x26DfBe) {
        var hs_sat26Dg33 = new $hs.Thunk();
        hs_sat26Dg33.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord64);
        };
        var hs_wild26Dg34 = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord64, hs_x26DfBe, hs_sat26Dg33);
        switch (hs_wild26Dg34.tag) {
        case 1:
            var hs_sat26Dg36 = new $hs.Thunk();
            hs_sat26Dg36.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Word64\x00");
            };
            return $hs.modules.GHCziWord.hs_predError.hscall(hs_sat26Dg36);
        case 2:
            var hs_sat26Dg32 = new $hs.Thunk();
            hs_sat26Dg32.evaluateOnce = function () {
                var hs_sat26Dg35 = new $hs.Thunk();
                hs_sat26Dg35.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26Dg35);
            };
            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_x26DfBe, hs_sat26Dg32);
        }
    };
    hs_zdcsucc25uR1Z.evaluate = function (hs_x26DfBl) {
        var hs_sat26Dg38 = new $hs.Thunk();
        hs_sat26Dg38.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord64);
        };
        var hs_wild26Dg39 = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord64, hs_x26DfBl, hs_sat26Dg38);
        switch (hs_wild26Dg39.tag) {
        case 1:
            var hs_sat26Dg3b = new $hs.Thunk();
            hs_sat26Dg3b.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Word64\x00");
            };
            return $hs.modules.GHCziWord.hs_succError.hscall(hs_sat26Dg3b);
        case 2:
            var hs_sat26Dg37 = new $hs.Thunk();
            hs_sat26Dg37.evaluateOnce = function () {
                var hs_sat26Dg3a = new $hs.Thunk();
                hs_sat26Dg3a.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26Dg3a);
            };
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_x26DfBl, hs_sat26Dg37);
        }
    };
    hs_zdctoRational25uR20.evaluate = function (hs_x26DfBs) {
        var hs_sat26Dg3j = new $hs.Thunk();
        hs_sat26Dg3j.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        var hs_sat26Dg3i = new $hs.Thunk();
        hs_sat26Dg3i.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64, hs_x26DfBs);
        };
        return $hs.modules.GHCziReal.hs_zv.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26Dg3i, hs_sat26Dg3j);
    };
    hs_zdcshowsPrec25uR21.evaluate = function (hs_p26DfBx, hs_x26DfBy) {
        var hs_sat26Dg3c = new $hs.Thunk();
        hs_sat26Dg3c.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64, hs_x26DfBy);
        };
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziNum.hs_zdfShowInteger, hs_p26DfBx, hs_sat26Dg3c);
    };
    hs_zdcmaxBound125uR22.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26Dg2K);
    };
    hs_zdcminBound125uR23.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26Dg2L);
    };
    this.hs_zdfBitsWord64.data = [$hs.modules.GHCziWord.hs_zdfNumWord64, hs_zdczizazi425uR1o, hs_zdczizbzi425uR17, hs_zdcxor425uR0Q, hs_zdccomplement125uR0E, hs_zdcshift425uR00, hs_zdcrotate425uQZs, hs_zdcbit25uR5C, hs_zdcsetBit25uR5B, hs_zdcclearBit25uR5A, hs_zdccomplementBit25uR5z, hs_zdctestBit25uR5y, hs_zdcbitSizze425uQZp, hs_zdcisSigned425uQZm, hs_zdcshiftL25uR5x, hs_zdcshiftR25uR5w, hs_zdcrotateL25uR5v, hs_zdcrotateR25uR5u];
    hs_zdcrotateR25uR5u.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmrotateR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcrotateL25uR5v.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmrotateL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcshiftR25uR5w.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmshiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcshiftL25uR5x.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmshiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdctestBit25uR5y.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmtestBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdccomplementBit25uR5z.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmcomplementBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcclearBit25uR5A.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmclearBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcsetBit25uR5B.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmsetBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcbit25uR5C.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmbit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcinRange25uR5D.evaluate = function (hs_ds26DfBW, hs_i26DfC1) {
        var hs_wild26Dg43 = hs_ds26DfBW;
        if (hs_ds26DfBW.notEvaluated) {
            hs_wild26Dg43 = hs_ds26DfBW.hscall();
        }
        var hs_m26DfC0 = hs_wild26Dg43.data[0];
        var hs_n26DfC3 = hs_wild26Dg43.data[1];
        var hs_sat26Dg44 = new $hs.Thunk();
        hs_sat26Dg44.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64, hs_i26DfC1, hs_n26DfC3);
        };
        var hs_sat26Dg42 = new $hs.Thunk();
        hs_sat26Dg42.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64, hs_m26DfC0, hs_i26DfC1);
        };
        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dg42, hs_sat26Dg44);
    };
    hs_zdcunsafeIndex25uR5P.evaluate = function (hs_ds26DfC8, hs_i26DfCc) {
        var hs_wild26Dg46 = hs_ds26DfC8;
        if (hs_ds26DfC8.notEvaluated) {
            hs_wild26Dg46 = hs_ds26DfC8.hscall();
        }
        var hs_m26DfCd = hs_wild26Dg46.data[0];
        var hs_sat26Dg45 = new $hs.Thunk();
        hs_sat26Dg45.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_i26DfCc, hs_m26DfCd);
        };
        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dg45);
    };
    hs_zdcrange25uR5Z.evaluate = function (hs_ds26DfCh) {
        var hs_wild26Dg48 = hs_ds26DfCh;
        if (hs_ds26DfCh.notEvaluated) {
            hs_wild26Dg48 = hs_ds26DfCh.hscall();
        }
        var hs_m26DfCl = hs_wild26Dg48.data[0];
        var hs_n26DfCm = hs_wild26Dg48.data[1];
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64, hs_m26DfCl, hs_n26DfCm);
    };
    this.hs_zdfIxWord64.data = [$hs.modules.GHCziWord.hs_zdfOrdWord64, hs_zdcrange25uR5Z, hs_zdcindex25uR69, hs_zdcunsafeIndex25uR5P, hs_zdcinRange25uR5D, hs_zdcrangeSizze25uR68, hs_zdcunsafeRangeSizze25uR67];
    hs_zdcunsafeRangeSizze25uR67.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmunsafeRangeSizze.hscall($hs.modules.GHCziWord.hs_zdfIxWord64);
    };
    hs_zdcrangeSizze25uR68.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmrangeSizze.hscall($hs.modules.GHCziWord.hs_zdfIxWord64);
    };
    hs_zdcindex25uR69.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmindex.hscall($hs.modules.GHCziWord.hs_zdfIxWord64);
    };
    hs_zdcreadsPrec25uR6a.evaluate = function (hs_p26DfCK, hs_s26DfCL) {
        var hs_ds26DfCI = new $hs.Func(1);
        hs_ds26DfCI.evaluate = function (hs_ds126DfCv) {
            var hs_ds226Dg4c = hs_ds126DfCv;
            if (hs_ds126DfCv.notEvaluated) {
                hs_ds226Dg4c = hs_ds126DfCv.hscall();
            }
            switch (hs_ds226Dg4c.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_ds326DfCz = hs_ds226Dg4c.data[0];
                var hs_ds426DfCH = hs_ds226Dg4c.data[1];
                var hs_wild26Dg4b = hs_ds326DfCz;
                if (hs_ds326DfCz.notEvaluated) {
                    hs_wild26Dg4b = hs_ds326DfCz.hscall();
                }
                var hs_x26DfCD = hs_wild26Dg4b.data[0];
                var hs_r26DfCF = hs_wild26Dg4b.data[1];
                var hs_sat26Dg4d = new $hs.Thunk();
                hs_sat26Dg4d.evaluateOnce = function () {
                    return hs_ds26DfCI.hscall(hs_ds426DfCH);
                };
                var hs_sat26Dg4e = new $hs.Thunk();
                hs_sat26Dg4e.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_x26DfCD);
                };
                var hs_sat26Dg4a = new $hs.Data(1);
                hs_sat26Dg4a.data = [hs_sat26Dg4e, hs_r26DfCF];
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26Dg4a, hs_sat26Dg4d];
                return $res;
            }
        };
        var hs_sat26Dg49 = new $hs.Thunk();
        hs_sat26Dg49.evaluateOnce = function () {
            return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziRead.hs_zdfReadInteger, hs_p26DfCK, hs_s26DfCL);
        };
        return hs_ds26DfCI.hscall(hs_sat26Dg49);
    };
    this.hs_zdfReadWord64.data = [hs_zdcreadsPrec25uR6a, hs_zdcreadList25uR6z, hs_zdcreadPrec25uR6y, hs_zdcreadListPrec25uR6x];
    hs_zdcreadListPrec25uR6x.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord64);
    };
    hs_zdcreadPrec25uR6y.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord64);
    };
    hs_zdcreadList25uR6z.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadList.hscall($hs.modules.GHCziWord.hs_zdfReadWord64);
    };
    hs_zdczlze125uR6A.evaluate = function (hs_a26DfCT, hs_b26DfCW) {
        var hs_wild26Dg4g = hs_a26DfCT;
        if (hs_a26DfCT.notEvaluated) {
            hs_wild26Dg4g = hs_a26DfCT.hscall();
        }
        var hs_a126DfCZ = hs_wild26Dg4g.data[0];
        var hs_wild126Dg4f = hs_b26DfCW;
        if (hs_b26DfCW.notEvaluated) {
            hs_wild126Dg4f = hs_b26DfCW.hscall();
        }
        var hs_b126DfD0 = hs_wild126Dg4f.data[0];
        return $hs.Word.le(hs_a126DfCZ, hs_b126DfD0) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczg125uR6L.evaluate = function (hs_a26DfD4, hs_b26DfD7) {
        var hs_wild26Dg4i = hs_a26DfD4;
        if (hs_a26DfD4.notEvaluated) {
            hs_wild26Dg4i = hs_a26DfD4.hscall();
        }
        var hs_a126DfDa = hs_wild26Dg4i.data[0];
        var hs_wild126Dg4h = hs_b26DfD7;
        if (hs_b26DfD7.notEvaluated) {
            hs_wild126Dg4h = hs_b26DfD7.hscall();
        }
        var hs_b126DfDb = hs_wild126Dg4h.data[0];
        return $hs.Word.gt(hs_a126DfDa, hs_b126DfDb) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczgze125uR6W.evaluate = function (hs_a26DfDf, hs_b26DfDi) {
        var hs_wild26Dg4k = hs_a26DfDf;
        if (hs_a26DfDf.notEvaluated) {
            hs_wild26Dg4k = hs_a26DfDf.hscall();
        }
        var hs_a126DfDl = hs_wild26Dg4k.data[0];
        var hs_wild126Dg4j = hs_b26DfDi;
        if (hs_b26DfDi.notEvaluated) {
            hs_wild126Dg4j = hs_b26DfDi.hscall();
        }
        var hs_b126DfDm = hs_wild126Dg4j.data[0];
        return $hs.Word.ge(hs_a126DfDl, hs_b126DfDm) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczl125uR77.evaluate = function (hs_a26DfDq, hs_b26DfDt) {
        var hs_wild26Dg4m = hs_a26DfDq;
        if (hs_a26DfDq.notEvaluated) {
            hs_wild26Dg4m = hs_a26DfDq.hscall();
        }
        var hs_a126DfDw = hs_wild26Dg4m.data[0];
        var hs_wild126Dg4l = hs_b26DfDt;
        if (hs_b26DfDt.notEvaluated) {
            hs_wild126Dg4l = hs_b26DfDt.hscall();
        }
        var hs_b126DfDx = hs_wild126Dg4l.data[0];
        return $hs.Word.lt(hs_a126DfDw, hs_b126DfDx) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdccompare125uR7i.evaluate = function (hs_a26DfDB, hs_b26DfDE) {
        var hs_wild26Dg4o = hs_a26DfDB;
        if (hs_a26DfDB.notEvaluated) {
            hs_wild26Dg4o = hs_a26DfDB.hscall();
        }
        var hs_a126DfDH = hs_wild26Dg4o.data[0];
        var hs_wild126Dg4n = hs_b26DfDE;
        if (hs_b26DfDE.notEvaluated) {
            hs_wild126Dg4n = hs_b26DfDE.hscall();
        }
        var hs_b126DfDI = hs_wild126Dg4n.data[0];
        var hs_wild226Dg4p = $hs.Word.lt(hs_a126DfDH, hs_b126DfDI) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226Dg4p.tag) {
        case 1:
            var hs_wild326Dg4q = hs_a126DfDH == hs_b126DfDI ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild326Dg4q.tag) {
            case 1:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczeze125uR7v.evaluate = function (hs_ds26DfDO, hs_ds126DfDR) {
        var hs_wild26Dg4s = hs_ds26DfDO;
        if (hs_ds26DfDO.notEvaluated) {
            hs_wild26Dg4s = hs_ds26DfDO.hscall();
        }
        var hs_a126DfDU = hs_wild26Dg4s.data[0];
        var hs_wild126Dg4r = hs_ds126DfDR;
        if (hs_ds126DfDR.notEvaluated) {
            hs_wild126Dg4r = hs_ds126DfDR.hscall();
        }
        var hs_b126DfDV = hs_wild126Dg4r.data[0];
        return hs_a126DfDU == hs_b126DfDV ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    this.hs_zdfEqWord.data = [hs_zdczeze125uR7v, hs_zdczsze125uR7G];
    hs_zdczsze125uR7G.evaluate = function (hs_a26DfDZ, hs_b26DfE0) {
        var hs_sat26Dg4t = new $hs.Thunk();
        hs_sat26Dg4t.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord, hs_a26DfDZ, hs_b26DfE0);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26Dg4t);
    };
    this.hs_zdfOrdWord.data = [$hs.modules.GHCziWord.hs_zdfEqWord, hs_zdccompare125uR7i, hs_zdczl125uR77, hs_zdczgze125uR6W, hs_zdczg125uR6L, hs_zdczlze125uR6A, hs_zdcmax125uR7N, hs_zdcmin125uR7M];
    hs_zdcmin125uR7M.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmin.hscall($hs.modules.GHCziWord.hs_zdfOrdWord);
    };
    hs_zdcmax125uR7N.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmax.hscall($hs.modules.GHCziWord.hs_zdfOrdWord);
    };
    hs_zdcinRange125uR7O.evaluate = function (hs_ds26DfE7, hs_i26DfEc) {
        var hs_wild26Dg4v = hs_ds26DfE7;
        if (hs_ds26DfE7.notEvaluated) {
            hs_wild26Dg4v = hs_ds26DfE7.hscall();
        }
        var hs_m26DfEb = hs_wild26Dg4v.data[0];
        var hs_n26DfEe = hs_wild26Dg4v.data[1];
        var hs_sat26Dg4w = new $hs.Thunk();
        hs_sat26Dg4w.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord, hs_i26DfEc, hs_n26DfEe);
        };
        var hs_sat26Dg4u = new $hs.Thunk();
        hs_sat26Dg4u.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord, hs_m26DfEb, hs_i26DfEc);
        };
        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dg4u, hs_sat26Dg4w);
    };
    hs_zdcquot125uR80.evaluate = function (hs_ds26DfEj, hs_y26DfEm) {
        var hs_wild26Dg4x = hs_ds26DfEj;
        if (hs_ds26DfEj.notEvaluated) {
            hs_wild26Dg4x = hs_ds26DfEj.hscall();
        }
        var hs_xzh26DfEs = hs_wild26Dg4x.data[0];
        var hs_wild126DfEp = hs_y26DfEm;
        if (hs_y26DfEm.notEvaluated) {
            hs_wild126DfEp = hs_y26DfEm.hscall();
        }
        var hs_yzh26DfEt = hs_wild126DfEp.data[0];
        var hs_sat26Dg4y = new $hs.Data(1);
        hs_sat26Dg4y.data = [0];
        var hs_wild226Dg4z = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord, hs_wild126DfEp, hs_sat26Dg4y);
        switch (hs_wild226Dg4z.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            throw "primitive operation quotWord#. Not implemeted yet.";
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DfEv];
            return $res;
        }
    };
    hs_zdcrem125uR8g.evaluate = function (hs_ds26DfEz, hs_y26DfEC) {
        var hs_wild26Dg4A = hs_ds26DfEz;
        if (hs_ds26DfEz.notEvaluated) {
            hs_wild26Dg4A = hs_ds26DfEz.hscall();
        }
        var hs_xzh26DfEI = hs_wild26Dg4A.data[0];
        var hs_wild126DfEF = hs_y26DfEC;
        if (hs_y26DfEC.notEvaluated) {
            hs_wild126DfEF = hs_y26DfEC.hscall();
        }
        var hs_yzh26DfEJ = hs_wild126DfEF.data[0];
        var hs_sat26Dg4B = new $hs.Data(1);
        hs_sat26Dg4B.data = [0];
        var hs_wild226Dg4C = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord, hs_wild126DfEF, hs_sat26Dg4B);
        switch (hs_wild226Dg4C.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            throw "primitive operation remWord#. Not implemeted yet.";
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DfEL];
            return $res;
        }
    };
    hs_zdcdiv125uR8w.evaluate = function (hs_ds26DfEP, hs_y26DfES) {
        var hs_wild26Dg4D = hs_ds26DfEP;
        if (hs_ds26DfEP.notEvaluated) {
            hs_wild26Dg4D = hs_ds26DfEP.hscall();
        }
        var hs_xzh26DfEY = hs_wild26Dg4D.data[0];
        var hs_wild126DfEV = hs_y26DfES;
        if (hs_y26DfES.notEvaluated) {
            hs_wild126DfEV = hs_y26DfES.hscall();
        }
        var hs_yzh26DfEZ = hs_wild126DfEV.data[0];
        var hs_sat26Dg4E = new $hs.Data(1);
        hs_sat26Dg4E.data = [0];
        var hs_wild226Dg4F = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord, hs_wild126DfEV, hs_sat26Dg4E);
        switch (hs_wild226Dg4F.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            throw "primitive operation quotWord#. Not implemeted yet.";
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DfF1];
            return $res;
        }
    };
    hs_zdcmod125uR8M.evaluate = function (hs_ds26DfF5, hs_y26DfF8) {
        var hs_wild26Dg4G = hs_ds26DfF5;
        if (hs_ds26DfF5.notEvaluated) {
            hs_wild26Dg4G = hs_ds26DfF5.hscall();
        }
        var hs_xzh26DfFe = hs_wild26Dg4G.data[0];
        var hs_wild126DfFb = hs_y26DfF8;
        if (hs_y26DfF8.notEvaluated) {
            hs_wild126DfFb = hs_y26DfF8.hscall();
        }
        var hs_yzh26DfFf = hs_wild126DfFb.data[0];
        var hs_sat26Dg4H = new $hs.Data(1);
        hs_sat26Dg4H.data = [0];
        var hs_wild226Dg4I = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord, hs_wild126DfFb, hs_sat26Dg4H);
        switch (hs_wild226Dg4I.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            throw "primitive operation remWord#. Not implemeted yet.";
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DfFh];
            return $res;
        }
    };
    hs_zdcquotRem125uR92.evaluate = function (hs_ds26DfFl, hs_y26DfFo) {
        var hs_wild26Dg4K = hs_ds26DfFl;
        if (hs_ds26DfFl.notEvaluated) {
            hs_wild26Dg4K = hs_ds26DfFl.hscall();
        }
        var hs_xzh26DfFu = hs_wild26Dg4K.data[0];
        var hs_wild126DfFr = hs_y26DfFo;
        if (hs_y26DfFo.notEvaluated) {
            hs_wild126DfFr = hs_y26DfFo.hscall();
        }
        var hs_yzh26DfFv = hs_wild126DfFr.data[0];
        var hs_sat26Dg4L = new $hs.Data(1);
        hs_sat26Dg4L.data = [0];
        var hs_wild226Dg4M = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord, hs_wild126DfFr, hs_sat26Dg4L);
        switch (hs_wild226Dg4M.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            var hs_sat26Dg4N = new $hs.Thunk();
            hs_sat26Dg4N.evaluateOnce = function () {
                throw "primitive operation remWord#. Not implemeted yet.";
                var $res = new $hs.Data(1);
                $res.data = [hs_wild326DfFA];
                return $res;
            };
            var hs_sat26Dg4J = new $hs.Thunk();
            hs_sat26Dg4J.evaluateOnce = function () {
                throw "primitive operation quotWord#. Not implemeted yet.";
                var $res = new $hs.Data(1);
                $res.data = [hs_wild326DfFx];
                return $res;
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26Dg4J, hs_sat26Dg4N];
            return $res;
        }
    };
    hs_zdcdivMod125uR9m.evaluate = function (hs_ds26DfFF, hs_y26DfFI) {
        var hs_wild26Dg4P = hs_ds26DfFF;
        if (hs_ds26DfFF.notEvaluated) {
            hs_wild26Dg4P = hs_ds26DfFF.hscall();
        }
        var hs_xzh26DfFO = hs_wild26Dg4P.data[0];
        var hs_wild126DfFL = hs_y26DfFI;
        if (hs_y26DfFI.notEvaluated) {
            hs_wild126DfFL = hs_y26DfFI.hscall();
        }
        var hs_yzh26DfFP = hs_wild126DfFL.data[0];
        var hs_sat26Dg4Q = new $hs.Data(1);
        hs_sat26Dg4Q.data = [0];
        var hs_wild226Dg4R = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord, hs_wild126DfFL, hs_sat26Dg4Q);
        switch (hs_wild226Dg4R.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            var hs_sat26Dg4S = new $hs.Thunk();
            hs_sat26Dg4S.evaluateOnce = function () {
                throw "primitive operation remWord#. Not implemeted yet.";
                var $res = new $hs.Data(1);
                $res.data = [hs_wild326DfFU];
                return $res;
            };
            var hs_sat26Dg4O = new $hs.Thunk();
            hs_sat26Dg4O.evaluateOnce = function () {
                throw "primitive operation quotWord#. Not implemeted yet.";
                var $res = new $hs.Data(1);
                $res.data = [hs_wild326DfFR];
                return $res;
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26Dg4O, hs_sat26Dg4S];
            return $res;
        }
    };
    this.hs_zdfShowWord.data = [hs_zdcshowsPrec125uR9T, hs_zdcshow125uR9H, hs_zdcshowList125uR9G];
    hs_zdcshowList125uR9G.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall($hs.modules.GHCziWord.hs_zdfShowWord);
    };
    hs_zdcshow125uR9H.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziWord.hs_zdfShowWord);
    };
    hs_zdczdp2Num125uR9I.evaluateOnce = function () {
        if ($hs.modules.GHCziWord.hs_zdfShowWord.notEvaluated) {
            return $hs.modules.GHCziWord.hs_zdfShowWord.hscall();
        } else {
            return $hs.modules.GHCziWord.hs_zdfShowWord;
        }
    };
    this.hs_zdfNumWord.data = [$hs.modules.GHCziWord.hs_zdfEqWord, $hs.modules.GHCziWord.hs_zdfShowWord, hs_zdczp25uQMS, hs_zdczt25uQMG, hs_zdczm25uQMu, hs_zdcnegate25uQMl, hs_zdcabs25uQMi, hs_zdcsignum25uQMb, hs_zdcfromInteger25uQM6];
    this.hs_zdfRealWord.data = [$hs.modules.GHCziWord.hs_zdfNumWord, $hs.modules.GHCziWord.hs_zdfOrdWord, hs_zdctoRational125uR9U];
    hs_zdcfromEnum325uR9J.evaluate = function (hs_x26DfGc) {
        var hs_wild26DfGf = hs_x26DfGc;
        if (hs_x26DfGc.notEvaluated) {
            hs_wild26DfGf = hs_x26DfGc.hscall();
        }
        var hs_xzh26DfGk = hs_wild26DfGf.data[0];
        var hs_sat26Dg4W = new $hs.Thunk();
        hs_sat26Dg4W.evaluateOnce = function () {
            var hs_sat26Dg50 = new $hs.Thunk();
            hs_sat26Dg50.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziEnum.hs_zdfBoundedInt);
            };
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord, hs_sat26Dg50);
        };
        var hs_wild126Dg4X = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord, hs_wild26DfGf, hs_sat26Dg4W);
        switch (hs_wild126Dg4X.tag) {
        case 1:
            var hs_sat26Dg4Z = new $hs.Thunk();
            hs_sat26Dg4Z.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Word\x00");
            };
            return $hs.modules.GHCziWord.hs_fromEnumError.hscall($hs.modules.GHCziWord.hs_zdfShowWord, hs_sat26Dg4Z, hs_wild26DfGf);
        case 2:
            var hs_sat26Dg4Y = hs_xzh26DfGk;
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26Dg4Y];
            return $res;
        }
    };
    hs_zdctoEnum125uR9K.evaluate = function (hs_i26DfGn) {
        var hs_wild26DfGq = hs_i26DfGn;
        if (hs_i26DfGn.notEvaluated) {
            hs_wild26DfGq = hs_i26DfGn.hscall();
        }
        var hs_izh26DfGx = hs_wild26DfGq.data[0];
        var hs_sat26Dg51 = new $hs.Data(1);
        hs_sat26Dg51.data = [0];
        var hs_wild126Dg52 = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_wild26DfGq, hs_sat26Dg51);
        switch (hs_wild126Dg52.tag) {
        case 1:
            var hs_sat26Dg55 = new $hs.Thunk();
            hs_sat26Dg55.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord);
            };
            var hs_sat26Dg56 = new $hs.Thunk();
            hs_sat26Dg56.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord);
            };
            var hs_sat26Dg57 = new $hs.Data(1);
            hs_sat26Dg57.data = [hs_sat26Dg56, hs_sat26Dg55];
            var hs_sat26Dg54 = new $hs.Thunk();
            hs_sat26Dg54.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Word\x00");
            };
            return $hs.modules.GHCziWord.hs_toEnumError.hscall($hs.modules.GHCziWord.hs_zdfShowWord, hs_sat26Dg54, hs_wild26DfGq, hs_sat26Dg57);
        case 2:
            var hs_sat26Dg53 = hs_izh26DfGx;
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26Dg53];
            return $res;
        }
    };
    hs_zdcpred125uR9L.evaluate = function (hs_x26DfGA) {
        var hs_sat26Dg59 = new $hs.Thunk();
        hs_sat26Dg59.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord);
        };
        var hs_wild26Dg5a = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord, hs_x26DfGA, hs_sat26Dg59);
        switch (hs_wild26Dg5a.tag) {
        case 1:
            var hs_sat26Dg5b = new $hs.Thunk();
            hs_sat26Dg5b.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Word\x00");
            };
            return $hs.modules.GHCziWord.hs_predError.hscall(hs_sat26Dg5b);
        case 2:
            var hs_sat26Dg58 = new $hs.Data(1);
            hs_sat26Dg58.data = [1];
            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord, hs_x26DfGA, hs_sat26Dg58);
        }
    };
    hs_zdcsucc125uR9M.evaluate = function (hs_x26DfGG) {
        var hs_sat26Dg5d = new $hs.Thunk();
        hs_sat26Dg5d.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord);
        };
        var hs_wild26Dg5e = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord, hs_x26DfGG, hs_sat26Dg5d);
        switch (hs_wild26Dg5e.tag) {
        case 1:
            var hs_sat26Dg5f = new $hs.Thunk();
            hs_sat26Dg5f.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Word\x00");
            };
            return $hs.modules.GHCziWord.hs_succError.hscall(hs_sat26Dg5f);
        case 2:
            var hs_sat26Dg5c = new $hs.Data(1);
            hs_sat26Dg5c.data = [1];
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord, hs_x26DfGG, hs_sat26Dg5c);
        }
    };
    hs_zdczdp1Integral125uR9N.evaluateOnce = function () {
        if ($hs.modules.GHCziWord.hs_zdfRealWord.notEvaluated) {
            return $hs.modules.GHCziWord.hs_zdfRealWord.hscall();
        } else {
            return $hs.modules.GHCziWord.hs_zdfRealWord;
        }
    };
    this.hs_zdfEnumWord.data = [hs_zdcsucc125uR9M, hs_zdcpred125uR9L, hs_zdctoEnum125uR9K, hs_zdcfromEnum325uR9J, hs_zdcenumFrom125uR9S, hs_zdcenumFromThen125uR9R, hs_zdcenumFromTo125uR9Q, hs_zdcenumFromThenTo125uR9P];
    hs_zdczdp2Integral125uR9O.evaluateOnce = function () {
        if ($hs.modules.GHCziWord.hs_zdfEnumWord.notEvaluated) {
            return $hs.modules.GHCziWord.hs_zdfEnumWord.hscall();
        } else {
            return $hs.modules.GHCziWord.hs_zdfEnumWord;
        }
    };
    this.hs_zdfIntegralWord.data = [$hs.modules.GHCziWord.hs_zdfRealWord, $hs.modules.GHCziWord.hs_zdfEnumWord, hs_zdcquot125uR80, hs_zdcrem125uR8g, hs_zdcdiv125uR8w, hs_zdcmod125uR8M, hs_zdcquotRem125uR92, hs_zdcdivMod125uR9m, hs_zdctoInteger25uQN4];
    hs_zdcenumFromThenTo125uR9P.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_integralEnumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord);
    };
    hs_zdcenumFromTo125uR9Q.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_integralEnumFromTo.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord);
    };
    hs_zdcenumFromThen125uR9R.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_integralEnumFromThen.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord, $hs.modules.GHCziWord.hs_zdfBoundedWord);
    };
    hs_zdcenumFrom125uR9S.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_integralEnumFrom.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord, $hs.modules.GHCziWord.hs_zdfBoundedWord);
    };
    hs_zdcshowsPrec125uR9T.evaluate = function (hs_p26DfGN, hs_x26DfGO) {
        var hs_sat26Dg4T = new $hs.Thunk();
        hs_sat26Dg4T.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord, hs_x26DfGO);
        };
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziNum.hs_zdfShowInteger, hs_p26DfGN, hs_sat26Dg4T);
    };
    hs_zdctoRational125uR9U.evaluate = function (hs_x26DfGR) {
        var hs_sat26Dg4V = new $hs.Thunk();
        hs_sat26Dg4V.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        var hs_sat26Dg4U = new $hs.Thunk();
        hs_sat26Dg4U.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord, hs_x26DfGR);
        };
        return $hs.modules.GHCziReal.hs_zv.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26Dg4U, hs_sat26Dg4V);
    };
    this.hs_zdfBitsWord.data = [$hs.modules.GHCziWord.hs_zdfNumWord, hs_zdczizazi25uQOt, hs_zdczizbzi25uQOh, hs_zdcxor25uQO5, hs_zdccomplement25uQNV, hs_zdcshift25uQNE, hs_zdcrotate25uQNl, hs_zdcbit125uRaM, hs_zdcsetBit125uRaL, hs_zdcclearBit125uRaK, hs_zdccomplementBit125uRaJ, hs_zdctestBit125uRaI, hs_zdcbitSizze25uQNi, hs_zdcisSigned25uQNf, hs_zdcshiftL125uRaH, hs_zdcshiftR125uRaG, hs_zdcrotateL125uRaF, hs_zdcrotateR125uRaE];
    hs_zdcrotateR125uRaE.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmrotateR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdcrotateL125uRaF.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmrotateL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdcshiftR125uRaG.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmshiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdcshiftL125uRaH.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmshiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdctestBit125uRaI.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmtestBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdccomplementBit125uRaJ.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmcomplementBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdcclearBit125uRaK.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmclearBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdcsetBit125uRaL.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmsetBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdcbit125uRaM.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmbit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdcreadsPrec125uRaN.evaluate = function (hs_p26DfHn, hs_s26DfHo) {
        var hs_ds26DfHl = new $hs.Func(1);
        hs_ds26DfHl.evaluate = function (hs_ds126DfH8) {
            var hs_ds226Dg5j = hs_ds126DfH8;
            if (hs_ds126DfH8.notEvaluated) {
                hs_ds226Dg5j = hs_ds126DfH8.hscall();
            }
            switch (hs_ds226Dg5j.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_ds326DfHc = hs_ds226Dg5j.data[0];
                var hs_ds426DfHk = hs_ds226Dg5j.data[1];
                var hs_wild26Dg5i = hs_ds326DfHc;
                if (hs_ds326DfHc.notEvaluated) {
                    hs_wild26Dg5i = hs_ds326DfHc.hscall();
                }
                var hs_x26DfHg = hs_wild26Dg5i.data[0];
                var hs_r26DfHi = hs_wild26Dg5i.data[1];
                var hs_sat26Dg5k = new $hs.Thunk();
                hs_sat26Dg5k.evaluateOnce = function () {
                    return hs_ds26DfHl.hscall(hs_ds426DfHk);
                };
                var hs_sat26Dg5l = new $hs.Thunk();
                hs_sat26Dg5l.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord, hs_x26DfHg);
                };
                var hs_sat26Dg5h = new $hs.Data(1);
                hs_sat26Dg5h.data = [hs_sat26Dg5l, hs_r26DfHi];
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26Dg5h, hs_sat26Dg5k];
                return $res;
            }
        };
        var hs_sat26Dg5g = new $hs.Thunk();
        hs_sat26Dg5g.evaluateOnce = function () {
            return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziRead.hs_zdfReadInteger, hs_p26DfHn, hs_s26DfHo);
        };
        return hs_ds26DfHl.hscall(hs_sat26Dg5g);
    };
    this.hs_zdfReadWord.data = [hs_zdcreadsPrec125uRaN, hs_zdcreadList125uRbc, hs_zdcreadPrec125uRbb, hs_zdcreadListPrec125uRba];
    hs_zdcreadListPrec125uRba.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord);
    };
    hs_zdcreadPrec125uRbb.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord);
    };
    hs_zdcreadList125uRbc.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadList.hscall($hs.modules.GHCziWord.hs_zdfReadWord);
    };
    hs_zdcunsafeIndex125uRbd.evaluate = function (hs_ds26DfHw, hs_i26DfHA) {
        var hs_wild26Dg5n = hs_ds26DfHw;
        if (hs_ds26DfHw.notEvaluated) {
            hs_wild26Dg5n = hs_ds26DfHw.hscall();
        }
        var hs_m26DfHB = hs_wild26Dg5n.data[0];
        var hs_sat26Dg5m = new $hs.Thunk();
        hs_sat26Dg5m.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord, hs_i26DfHA, hs_m26DfHB);
        };
        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dg5m);
    };
    hs_zdcrange125uRbn.evaluate = function (hs_ds26DfHF) {
        var hs_wild26Dg5p = hs_ds26DfHF;
        if (hs_ds26DfHF.notEvaluated) {
            hs_wild26Dg5p = hs_ds26DfHF.hscall();
        }
        var hs_m26DfHJ = hs_wild26Dg5p.data[0];
        var hs_n26DfHK = hs_wild26Dg5p.data[1];
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord, hs_m26DfHJ, hs_n26DfHK);
    };
    this.hs_zdfIxWord.data = [$hs.modules.GHCziWord.hs_zdfOrdWord, hs_zdcrange125uRbn, hs_zdcindex125uRbx, hs_zdcunsafeIndex125uRbd, hs_zdcinRange125uR7O, hs_zdcrangeSizze125uRbw, hs_zdcunsafeRangeSizze125uRbv];
    hs_zdcunsafeRangeSizze125uRbv.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmunsafeRangeSizze.hscall($hs.modules.GHCziWord.hs_zdfIxWord);
    };
    hs_zdcrangeSizze125uRbw.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmrangeSizze.hscall($hs.modules.GHCziWord.hs_zdfIxWord);
    };
    hs_zdcindex125uRbx.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmindex.hscall($hs.modules.GHCziWord.hs_zdfIxWord);
    };
    hs_zdczlze225uRby.evaluate = function (hs_a26DfHR, hs_b26DfHU) {
        var hs_wild26Dg5r = hs_a26DfHR;
        if (hs_a26DfHR.notEvaluated) {
            hs_wild26Dg5r = hs_a26DfHR.hscall();
        }
        var hs_a126DfHX = hs_wild26Dg5r.data[0];
        var hs_wild126Dg5q = hs_b26DfHU;
        if (hs_b26DfHU.notEvaluated) {
            hs_wild126Dg5q = hs_b26DfHU.hscall();
        }
        var hs_b126DfHY = hs_wild126Dg5q.data[0];
        return $hs.Word.le(hs_a126DfHX, hs_b126DfHY) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczg225uRbJ.evaluate = function (hs_a26DfI2, hs_b26DfI5) {
        var hs_wild26Dg5t = hs_a26DfI2;
        if (hs_a26DfI2.notEvaluated) {
            hs_wild26Dg5t = hs_a26DfI2.hscall();
        }
        var hs_a126DfI8 = hs_wild26Dg5t.data[0];
        var hs_wild126Dg5s = hs_b26DfI5;
        if (hs_b26DfI5.notEvaluated) {
            hs_wild126Dg5s = hs_b26DfI5.hscall();
        }
        var hs_b126DfI9 = hs_wild126Dg5s.data[0];
        return $hs.Word.gt(hs_a126DfI8, hs_b126DfI9) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczgze225uRbU.evaluate = function (hs_a26DfId, hs_b26DfIg) {
        var hs_wild26Dg5v = hs_a26DfId;
        if (hs_a26DfId.notEvaluated) {
            hs_wild26Dg5v = hs_a26DfId.hscall();
        }
        var hs_a126DfIj = hs_wild26Dg5v.data[0];
        var hs_wild126Dg5u = hs_b26DfIg;
        if (hs_b26DfIg.notEvaluated) {
            hs_wild126Dg5u = hs_b26DfIg.hscall();
        }
        var hs_b126DfIk = hs_wild126Dg5u.data[0];
        return $hs.Word.ge(hs_a126DfIj, hs_b126DfIk) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczl225uRc5.evaluate = function (hs_a26DfIo, hs_b26DfIr) {
        var hs_wild26Dg5x = hs_a26DfIo;
        if (hs_a26DfIo.notEvaluated) {
            hs_wild26Dg5x = hs_a26DfIo.hscall();
        }
        var hs_a126DfIu = hs_wild26Dg5x.data[0];
        var hs_wild126Dg5w = hs_b26DfIr;
        if (hs_b26DfIr.notEvaluated) {
            hs_wild126Dg5w = hs_b26DfIr.hscall();
        }
        var hs_b126DfIv = hs_wild126Dg5w.data[0];
        return $hs.Word.lt(hs_a126DfIu, hs_b126DfIv) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdccompare225uRcg.evaluate = function (hs_a26DfIz, hs_b26DfIC) {
        var hs_wild26Dg5z = hs_a26DfIz;
        if (hs_a26DfIz.notEvaluated) {
            hs_wild26Dg5z = hs_a26DfIz.hscall();
        }
        var hs_a126DfIF = hs_wild26Dg5z.data[0];
        var hs_wild126Dg5y = hs_b26DfIC;
        if (hs_b26DfIC.notEvaluated) {
            hs_wild126Dg5y = hs_b26DfIC.hscall();
        }
        var hs_b126DfIG = hs_wild126Dg5y.data[0];
        var hs_wild226Dg5A = $hs.Word.lt(hs_a126DfIF, hs_b126DfIG) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226Dg5A.tag) {
        case 1:
            var hs_wild326Dg5B = hs_a126DfIF == hs_b126DfIG ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild326Dg5B.tag) {
            case 1:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczeze225uRct.evaluate = function (hs_ds26DfIM, hs_ds126DfIP) {
        var hs_wild26Dg5D = hs_ds26DfIM;
        if (hs_ds26DfIM.notEvaluated) {
            hs_wild26Dg5D = hs_ds26DfIM.hscall();
        }
        var hs_a126DfIS = hs_wild26Dg5D.data[0];
        var hs_wild126Dg5C = hs_ds126DfIP;
        if (hs_ds126DfIP.notEvaluated) {
            hs_wild126Dg5C = hs_ds126DfIP.hscall();
        }
        var hs_b126DfIT = hs_wild126Dg5C.data[0];
        return hs_a126DfIS == hs_b126DfIT ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    this.hs_zdfEqWord8.data = [hs_zdczeze225uRct, hs_zdczsze225uRcE];
    hs_zdczsze225uRcE.evaluate = function (hs_a26DfIX, hs_b26DfIY) {
        var hs_sat26Dg5E = new $hs.Thunk();
        hs_sat26Dg5E.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_a26DfIX, hs_b26DfIY);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26Dg5E);
    };
    this.hs_zdfOrdWord8.data = [$hs.modules.GHCziWord.hs_zdfEqWord8, hs_zdccompare225uRcg, hs_zdczl225uRc5, hs_zdczgze225uRbU, hs_zdczg225uRbJ, hs_zdczlze225uRby, hs_zdcmax225uRcL, hs_zdcmin225uRcK];
    hs_zdcmin225uRcK.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmin.hscall($hs.modules.GHCziWord.hs_zdfOrdWord8);
    };
    hs_zdcmax225uRcL.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmax.hscall($hs.modules.GHCziWord.hs_zdfOrdWord8);
    };
    hs_zdcinRange225uRcM.evaluate = function (hs_ds26DfJ5, hs_i26DfJa) {
        var hs_wild26Dg5G = hs_ds26DfJ5;
        if (hs_ds26DfJ5.notEvaluated) {
            hs_wild26Dg5G = hs_ds26DfJ5.hscall();
        }
        var hs_m26DfJ9 = hs_wild26Dg5G.data[0];
        var hs_n26DfJc = hs_wild26Dg5G.data[1];
        var hs_sat26Dg5H = new $hs.Thunk();
        hs_sat26Dg5H.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord8, hs_i26DfJa, hs_n26DfJc);
        };
        var hs_sat26Dg5F = new $hs.Thunk();
        hs_sat26Dg5F.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord8, hs_m26DfJ9, hs_i26DfJa);
        };
        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dg5F, hs_sat26Dg5H);
    };
    hs_sat26Dg5I.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(255);
    };
    hs_sat26Dg5J.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
    };
    this.hs_zdfBoundedWord8.data = [hs_zdcminBound225uRdl, hs_zdcmaxBound225uRdk];
    this.hs_zdfShowWord8.data = [hs_zdcshowsPrec225uRdj, hs_zdcshow225uRd5, hs_zdcshowList225uRd4];
    this.hs_zdfEnumWord8.data = [hs_zdcsucc225uRdi, hs_zdcpred225uRdh, hs_zdctoEnum225uRdg, hs_zdcfromEnum25uQPB, hs_zdcenumFrom225uRdf, hs_zdcenumFromThen225uRde, hs_zdcenumFromTo225uRdd, hs_zdcenumFromThenTo225uRdc];
    hs_zdczdp2Num225uRcY.evaluateOnce = function () {
        if ($hs.modules.GHCziWord.hs_zdfShowWord8.notEvaluated) {
            return $hs.modules.GHCziWord.hs_zdfShowWord8.hscall();
        } else {
            return $hs.modules.GHCziWord.hs_zdfShowWord8;
        }
    };
    this.hs_zdfNumWord8.data = [$hs.modules.GHCziWord.hs_zdfEqWord8, $hs.modules.GHCziWord.hs_zdfShowWord8, hs_zdczp125uQPo, hs_zdczt125uQPb, hs_zdczm125uQOY, hs_zdcnegate125uQOO, hs_zdcabs125uQOL, hs_zdcsignum225uRd3, hs_zdcfromInteger125uQOF];
    hs_zdczdp1Real125uRcZ.evaluateOnce = function () {
        if ($hs.modules.GHCziWord.hs_zdfNumWord8.notEvaluated) {
            return $hs.modules.GHCziWord.hs_zdfNumWord8.hscall();
        } else {
            return $hs.modules.GHCziWord.hs_zdfNumWord8;
        }
    };
    this.hs_zdfRealWord8.data = [$hs.modules.GHCziWord.hs_zdfNumWord8, $hs.modules.GHCziWord.hs_zdfOrdWord8, hs_zdctoRational225uRd2];
    hs_zdczdp2Integral225uRd0.evaluateOnce = function () {
        if ($hs.modules.GHCziWord.hs_zdfEnumWord8.notEvaluated) {
            return $hs.modules.GHCziWord.hs_zdfEnumWord8.hscall();
        } else {
            return $hs.modules.GHCziWord.hs_zdfEnumWord8;
        }
    };
    hs_zdczdp1Integral225uRd1.evaluateOnce = function () {
        if ($hs.modules.GHCziWord.hs_zdfRealWord8.notEvaluated) {
            return $hs.modules.GHCziWord.hs_zdfRealWord8.hscall();
        } else {
            return $hs.modules.GHCziWord.hs_zdfRealWord8;
        }
    };
    this.hs_zdfIntegralWord8.data = [$hs.modules.GHCziWord.hs_zdfRealWord8, $hs.modules.GHCziWord.hs_zdfEnumWord8, hs_zdcquot225uRdb, hs_zdcrem225uRda, hs_zdcdiv225uRd9, hs_zdcmod225uRd8, hs_zdcquotRem225uRd7, hs_zdcdivMod225uRd6, hs_zdctoInteger125uQPI];
    hs_zdctoRational225uRd2.evaluate = function (hs_x26DfJD) {
        var hs_sat26Dg6c = new $hs.Thunk();
        hs_sat26Dg6c.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        var hs_sat26Dg6b = new $hs.Thunk();
        hs_sat26Dg6b.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, hs_x26DfJD);
        };
        return $hs.modules.GHCziReal.hs_zv.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26Dg6b, hs_sat26Dg6c);
    };
    hs_zdcsignum225uRd3.evaluate = function (hs_ds26DfJH) {
        var hs_sat26Dg67 = new $hs.Thunk();
        hs_sat26Dg67.evaluateOnce = function () {
            var hs_sat26Dg6a = new $hs.Thunk();
            hs_sat26Dg6a.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26Dg6a);
        };
        var hs_wild26Dg68 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_ds26DfJH, hs_sat26Dg67);
        switch (hs_wild26Dg68.tag) {
        case 1:
            var hs_sat26Dg69 = new $hs.Thunk();
            hs_sat26Dg69.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26Dg69);
        case 2:
            var hs_sat26Dg66 = new $hs.Thunk();
            hs_sat26Dg66.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26Dg66);
        }
    };
    hs_zdcshowList225uRd4.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall($hs.modules.GHCziWord.hs_zdfShowWord8);
    };
    hs_zdcshow225uRd5.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziWord.hs_zdfShowWord8);
    };
    hs_zdcdivMod225uRd6.evaluate = function (hs_ds26DfJP, hs_y26DfJS) {
        var hs_wild26Dg6e = hs_ds26DfJP;
        if (hs_ds26DfJP.notEvaluated) {
            hs_wild26Dg6e = hs_ds26DfJP.hscall();
        }
        var hs_xzh26DfJZ = hs_wild26Dg6e.data[0];
        var hs_wild126DfJV = hs_y26DfJS;
        if (hs_y26DfJS.notEvaluated) {
            hs_wild126DfJV = hs_y26DfJS.hscall();
        }
        var hs_yzh26DfK0 = hs_wild126DfJV.data[0];
        var hs_sat26Dg6f = new $hs.Thunk();
        hs_sat26Dg6f.evaluateOnce = function () {
            var hs_sat26Dg6i = new $hs.Thunk();
            hs_sat26Dg6i.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26Dg6i);
        };
        var hs_wild226Dg6g = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_wild126DfJV, hs_sat26Dg6f);
        switch (hs_wild226Dg6g.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            var hs_sat26Dg6h = new $hs.Thunk();
            hs_sat26Dg6h.evaluateOnce = function () {
                throw "primitive operation remWord#. Not implemeted yet.";
                var $res = new $hs.Data(1);
                $res.data = [hs_wild326DfK5];
                return $res;
            };
            var hs_sat26Dg6d = new $hs.Thunk();
            hs_sat26Dg6d.evaluateOnce = function () {
                throw "primitive operation quotWord#. Not implemeted yet.";
                var $res = new $hs.Data(1);
                $res.data = [hs_wild326DfK2];
                return $res;
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26Dg6d, hs_sat26Dg6h];
            return $res;
        }
    };
    hs_zdcquotRem225uRd7.evaluate = function (hs_ds26DfK9, hs_y26DfKc) {
        var hs_wild26Dg6k = hs_ds26DfK9;
        if (hs_ds26DfK9.notEvaluated) {
            hs_wild26Dg6k = hs_ds26DfK9.hscall();
        }
        var hs_xzh26DfKj = hs_wild26Dg6k.data[0];
        var hs_wild126DfKf = hs_y26DfKc;
        if (hs_y26DfKc.notEvaluated) {
            hs_wild126DfKf = hs_y26DfKc.hscall();
        }
        var hs_yzh26DfKk = hs_wild126DfKf.data[0];
        var hs_sat26Dg6l = new $hs.Thunk();
        hs_sat26Dg6l.evaluateOnce = function () {
            var hs_sat26Dg6o = new $hs.Thunk();
            hs_sat26Dg6o.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26Dg6o);
        };
        var hs_wild226Dg6m = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_wild126DfKf, hs_sat26Dg6l);
        switch (hs_wild226Dg6m.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            var hs_sat26Dg6n = new $hs.Thunk();
            hs_sat26Dg6n.evaluateOnce = function () {
                throw "primitive operation remWord#. Not implemeted yet.";
                var $res = new $hs.Data(1);
                $res.data = [hs_wild326DfKp];
                return $res;
            };
            var hs_sat26Dg6j = new $hs.Thunk();
            hs_sat26Dg6j.evaluateOnce = function () {
                throw "primitive operation quotWord#. Not implemeted yet.";
                var $res = new $hs.Data(1);
                $res.data = [hs_wild326DfKm];
                return $res;
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26Dg6j, hs_sat26Dg6n];
            return $res;
        }
    };
    hs_zdcmod225uRd8.evaluate = function (hs_ds26DfKt, hs_y26DfKw) {
        var hs_wild26Dg6p = hs_ds26DfKt;
        if (hs_ds26DfKt.notEvaluated) {
            hs_wild26Dg6p = hs_ds26DfKt.hscall();
        }
        var hs_xzh26DfKD = hs_wild26Dg6p.data[0];
        var hs_wild126DfKz = hs_y26DfKw;
        if (hs_y26DfKw.notEvaluated) {
            hs_wild126DfKz = hs_y26DfKw.hscall();
        }
        var hs_yzh26DfKE = hs_wild126DfKz.data[0];
        var hs_sat26Dg6q = new $hs.Thunk();
        hs_sat26Dg6q.evaluateOnce = function () {
            var hs_sat26Dg6s = new $hs.Thunk();
            hs_sat26Dg6s.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26Dg6s);
        };
        var hs_wild226Dg6r = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_wild126DfKz, hs_sat26Dg6q);
        switch (hs_wild226Dg6r.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            throw "primitive operation remWord#. Not implemeted yet.";
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DfKG];
            return $res;
        }
    };
    hs_zdcdiv225uRd9.evaluate = function (hs_ds26DfKJ, hs_y26DfKM) {
        var hs_wild26Dg6t = hs_ds26DfKJ;
        if (hs_ds26DfKJ.notEvaluated) {
            hs_wild26Dg6t = hs_ds26DfKJ.hscall();
        }
        var hs_xzh26DfKT = hs_wild26Dg6t.data[0];
        var hs_wild126DfKP = hs_y26DfKM;
        if (hs_y26DfKM.notEvaluated) {
            hs_wild126DfKP = hs_y26DfKM.hscall();
        }
        var hs_yzh26DfKU = hs_wild126DfKP.data[0];
        var hs_sat26Dg6u = new $hs.Thunk();
        hs_sat26Dg6u.evaluateOnce = function () {
            var hs_sat26Dg6w = new $hs.Thunk();
            hs_sat26Dg6w.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26Dg6w);
        };
        var hs_wild226Dg6v = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_wild126DfKP, hs_sat26Dg6u);
        switch (hs_wild226Dg6v.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            throw "primitive operation quotWord#. Not implemeted yet.";
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DfKW];
            return $res;
        }
    };
    hs_zdcrem225uRda.evaluate = function (hs_ds26DfKZ, hs_y26DfL2) {
        var hs_wild26Dg6x = hs_ds26DfKZ;
        if (hs_ds26DfKZ.notEvaluated) {
            hs_wild26Dg6x = hs_ds26DfKZ.hscall();
        }
        var hs_xzh26DfL9 = hs_wild26Dg6x.data[0];
        var hs_wild126DfL5 = hs_y26DfL2;
        if (hs_y26DfL2.notEvaluated) {
            hs_wild126DfL5 = hs_y26DfL2.hscall();
        }
        var hs_yzh26DfLa = hs_wild126DfL5.data[0];
        var hs_sat26Dg6y = new $hs.Thunk();
        hs_sat26Dg6y.evaluateOnce = function () {
            var hs_sat26Dg6A = new $hs.Thunk();
            hs_sat26Dg6A.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26Dg6A);
        };
        var hs_wild226Dg6z = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_wild126DfL5, hs_sat26Dg6y);
        switch (hs_wild226Dg6z.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            throw "primitive operation remWord#. Not implemeted yet.";
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DfLc];
            return $res;
        }
    };
    hs_zdcquot225uRdb.evaluate = function (hs_ds26DfLf, hs_y26DfLi) {
        var hs_wild26Dg6B = hs_ds26DfLf;
        if (hs_ds26DfLf.notEvaluated) {
            hs_wild26Dg6B = hs_ds26DfLf.hscall();
        }
        var hs_xzh26DfLp = hs_wild26Dg6B.data[0];
        var hs_wild126DfLl = hs_y26DfLi;
        if (hs_y26DfLi.notEvaluated) {
            hs_wild126DfLl = hs_y26DfLi.hscall();
        }
        var hs_yzh26DfLq = hs_wild126DfLl.data[0];
        var hs_sat26Dg6C = new $hs.Thunk();
        hs_sat26Dg6C.evaluateOnce = function () {
            var hs_sat26Dg6E = new $hs.Thunk();
            hs_sat26Dg6E.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26Dg6E);
        };
        var hs_wild226Dg6D = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_wild126DfLl, hs_sat26Dg6C);
        switch (hs_wild226Dg6D.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            throw "primitive operation quotWord#. Not implemeted yet.";
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DfLs];
            return $res;
        }
    };
    hs_zdcenumFromThenTo225uRdc.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_zddmenumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord8);
    };
    hs_zdcenumFromTo225uRdd.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_zddmenumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord8);
    };
    hs_zdcenumFromThen225uRde.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_boundedEnumFromThen.hscall($hs.modules.GHCziWord.hs_zdfEnumWord8, $hs.modules.GHCziWord.hs_zdfBoundedWord8);
    };
    hs_zdcenumFrom225uRdf.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_boundedEnumFrom.hscall($hs.modules.GHCziWord.hs_zdfEnumWord8, $hs.modules.GHCziWord.hs_zdfBoundedWord8);
    };
    hs_zdctoEnum225uRdg.evaluate = function (hs_i26DfLu) {
        var hs_wild26DfLx = hs_i26DfLu;
        if (hs_i26DfLu.notEvaluated) {
            hs_wild26DfLx = hs_i26DfLu.hscall();
        }
        var hs_izh26DfLI = hs_wild26DfLx.data[0];
        var hs_sat26Dg5L = new $hs.Thunk();
        hs_sat26Dg5L.evaluateOnce = function () {
            var hs_sat26Dg5U = new $hs.Thunk();
            hs_sat26Dg5U.evaluateOnce = function () {
                var hs_sat26Dg5V = new $hs.Thunk();
                hs_sat26Dg5V.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord8);
                };
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dg5V);
            };
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_wild26DfLx, hs_sat26Dg5U);
        };
        var hs_sat26Dg5M = new $hs.Thunk();
        hs_sat26Dg5M.evaluateOnce = function () {
            var hs_sat26Dg5T = new $hs.Data(1);
            hs_sat26Dg5T.data = [0];
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_wild26DfLx, hs_sat26Dg5T);
        };
        var hs_wild126Dg5N = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dg5M, hs_sat26Dg5L);
        switch (hs_wild126Dg5N.tag) {
        case 1:
            var hs_sat26Dg5Q = new $hs.Thunk();
            hs_sat26Dg5Q.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord8);
            };
            var hs_sat26Dg5R = new $hs.Thunk();
            hs_sat26Dg5R.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord8);
            };
            var hs_sat26Dg5S = new $hs.Data(1);
            hs_sat26Dg5S.data = [hs_sat26Dg5R, hs_sat26Dg5Q];
            var hs_sat26Dg5P = new $hs.Thunk();
            hs_sat26Dg5P.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Word8\x00");
            };
            return $hs.modules.GHCziWord.hs_toEnumError.hscall($hs.modules.GHCziWord.hs_zdfShowWord8, hs_sat26Dg5P, hs_wild26DfLx, hs_sat26Dg5S);
        case 2:
            var hs_sat26Dg5O = hs_izh26DfLI;
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26Dg5O];
            return $res;
        }
    };
    hs_zdcpred225uRdh.evaluate = function (hs_x26DfLL) {
        var hs_sat26Dg5X = new $hs.Thunk();
        hs_sat26Dg5X.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord8);
        };
        var hs_wild26Dg5Y = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_x26DfLL, hs_sat26Dg5X);
        switch (hs_wild26Dg5Y.tag) {
        case 1:
            var hs_sat26Dg60 = new $hs.Thunk();
            hs_sat26Dg60.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Word8\x00");
            };
            return $hs.modules.GHCziWord.hs_predError.hscall(hs_sat26Dg60);
        case 2:
            var hs_sat26Dg5W = new $hs.Thunk();
            hs_sat26Dg5W.evaluateOnce = function () {
                var hs_sat26Dg5Z = new $hs.Thunk();
                hs_sat26Dg5Z.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26Dg5Z);
            };
            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_x26DfLL, hs_sat26Dg5W);
        }
    };
    hs_zdcsucc225uRdi.evaluate = function (hs_x26DfLS) {
        var hs_sat26Dg62 = new $hs.Thunk();
        hs_sat26Dg62.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord8);
        };
        var hs_wild26Dg63 = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_x26DfLS, hs_sat26Dg62);
        switch (hs_wild26Dg63.tag) {
        case 1:
            var hs_sat26Dg65 = new $hs.Thunk();
            hs_sat26Dg65.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Word8\x00");
            };
            return $hs.modules.GHCziWord.hs_succError.hscall(hs_sat26Dg65);
        case 2:
            var hs_sat26Dg61 = new $hs.Thunk();
            hs_sat26Dg61.evaluateOnce = function () {
                var hs_sat26Dg64 = new $hs.Thunk();
                hs_sat26Dg64.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26Dg64);
            };
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_x26DfLS, hs_sat26Dg61);
        }
    };
    hs_zdcshowsPrec225uRdj.evaluate = function (hs_p26DfM0, hs_x26DfM1) {
        var hs_sat26Dg5K = new $hs.Thunk();
        hs_sat26Dg5K.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziNum.hs_zdfNumInt, hs_x26DfM1);
        };
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_p26DfM0, hs_sat26Dg5K);
    };
    hs_zdcmaxBound225uRdk.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26Dg5I);
    };
    hs_zdcminBound225uRdl.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26Dg5J);
    };
    hs_zdcreadsPrec225uRfP.evaluate = function (hs_p26DfMp, hs_s26DfMq) {
        var hs_ds26DfMn = new $hs.Func(1);
        hs_ds26DfMn.evaluate = function (hs_ds126DfMa) {
            var hs_ds226Dg6I = hs_ds126DfMa;
            if (hs_ds126DfMa.notEvaluated) {
                hs_ds226Dg6I = hs_ds126DfMa.hscall();
            }
            switch (hs_ds226Dg6I.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_ds326DfMe = hs_ds226Dg6I.data[0];
                var hs_ds426DfMm = hs_ds226Dg6I.data[1];
                var hs_wild26Dg6H = hs_ds326DfMe;
                if (hs_ds326DfMe.notEvaluated) {
                    hs_wild26Dg6H = hs_ds326DfMe.hscall();
                }
                var hs_x26DfMi = hs_wild26Dg6H.data[0];
                var hs_r26DfMk = hs_wild26Dg6H.data[1];
                var hs_sat26Dg6J = new $hs.Thunk();
                hs_sat26Dg6J.evaluateOnce = function () {
                    return hs_ds26DfMn.hscall(hs_ds426DfMm);
                };
                var hs_sat26Dg6K = new $hs.Thunk();
                hs_sat26Dg6K.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_x26DfMi);
                };
                var hs_sat26Dg6G = new $hs.Data(1);
                hs_sat26Dg6G.data = [hs_sat26Dg6K, hs_r26DfMk];
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26Dg6G, hs_sat26Dg6J];
                return $res;
            }
        };
        var hs_sat26Dg6F = new $hs.Thunk();
        hs_sat26Dg6F.evaluateOnce = function () {
            return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziRead.hs_zdfReadInt, hs_p26DfMp, hs_s26DfMq);
        };
        return hs_ds26DfMn.hscall(hs_sat26Dg6F);
    };
    this.hs_zdfReadWord8.data = [hs_zdcreadsPrec225uRfP, hs_zdcreadList225uRge, hs_zdcreadPrec225uRgd, hs_zdcreadListPrec225uRgc];
    hs_zdcreadListPrec225uRgc.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord8);
    };
    hs_zdcreadPrec225uRgd.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord8);
    };
    hs_zdcreadList225uRge.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadList.hscall($hs.modules.GHCziWord.hs_zdfReadWord8);
    };
    hs_zdccomplement225uRgf.evaluate = function (hs_ds26DfMx) {
        var hs_wild26Dg6L = hs_ds26DfMx;
        if (hs_ds26DfMx.notEvaluated) {
            hs_wild26Dg6L = hs_ds26DfMx.hscall();
        }
        var hs_xzh26DfMC = hs_wild26Dg6L.data[0];
        var hs_wild126Dg6M = $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord8);
        var hs_mbzh26DfMD = hs_wild126Dg6M.data[0];
        var hs_sat26Dg6N = hs_xzh26DfMC ^ hs_mbzh26DfMD;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dg6N];
        return $res;
    };
    this.hs_zdfBitsWord8.data = [$hs.modules.GHCziWord.hs_zdfNumWord8, hs_zdczizazi125uQQV, hs_zdczizbzi125uQQJ, hs_zdcxor125uQQx, hs_zdccomplement225uRgf, hs_zdcshift125uQQf, hs_zdcrotate125uQPV, hs_zdcbit225uRgx, hs_zdcsetBit225uRgw, hs_zdcclearBit225uRgv, hs_zdccomplementBit225uRgu, hs_zdctestBit225uRgt, hs_zdcbitSizze125uQPS, hs_zdcisSigned125uQPP, hs_zdcshiftL225uRgs, hs_zdcshiftR225uRgr, hs_zdcrotateL225uRgq, hs_zdcrotateR225uRgp];
    hs_zdcrotateR225uRgp.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmrotateR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdcrotateL225uRgq.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmrotateL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdcshiftR225uRgr.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmshiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdcshiftL225uRgs.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmshiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdctestBit225uRgt.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmtestBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdccomplementBit225uRgu.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmcomplementBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdcclearBit225uRgv.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmclearBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdcsetBit225uRgw.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmsetBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdcbit225uRgx.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmbit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdcunsafeIndex225uRgy.evaluate = function (hs_ds26DfMR, hs_i26DfMV) {
        var hs_wild26Dg6P = hs_ds26DfMR;
        if (hs_ds26DfMR.notEvaluated) {
            hs_wild26Dg6P = hs_ds26DfMR.hscall();
        }
        var hs_m26DfMW = hs_wild26Dg6P.data[0];
        var hs_sat26Dg6O = new $hs.Thunk();
        hs_sat26Dg6O.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_i26DfMV, hs_m26DfMW);
        };
        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dg6O);
    };
    hs_zdcrange225uRgI.evaluate = function (hs_ds26DfN0) {
        var hs_wild26Dg6R = hs_ds26DfN0;
        if (hs_ds26DfN0.notEvaluated) {
            hs_wild26Dg6R = hs_ds26DfN0.hscall();
        }
        var hs_m26DfN4 = hs_wild26Dg6R.data[0];
        var hs_n26DfN5 = hs_wild26Dg6R.data[1];
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord8, hs_m26DfN4, hs_n26DfN5);
    };
    this.hs_zdfIxWord8.data = [$hs.modules.GHCziWord.hs_zdfOrdWord8, hs_zdcrange225uRgI, hs_zdcindex225uRgS, hs_zdcunsafeIndex225uRgy, hs_zdcinRange225uRcM, hs_zdcrangeSizze225uRgR, hs_zdcunsafeRangeSizze225uRgQ];
    hs_zdcunsafeRangeSizze225uRgQ.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmunsafeRangeSizze.hscall($hs.modules.GHCziWord.hs_zdfIxWord8);
    };
    hs_zdcrangeSizze225uRgR.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmrangeSizze.hscall($hs.modules.GHCziWord.hs_zdfIxWord8);
    };
    hs_zdcindex225uRgS.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmindex.hscall($hs.modules.GHCziWord.hs_zdfIxWord8);
    };
    hs_zdczlze325uRgT.evaluate = function (hs_a26DfNc, hs_b26DfNf) {
        var hs_wild26Dg6T = hs_a26DfNc;
        if (hs_a26DfNc.notEvaluated) {
            hs_wild26Dg6T = hs_a26DfNc.hscall();
        }
        var hs_a126DfNi = hs_wild26Dg6T.data[0];
        var hs_wild126Dg6S = hs_b26DfNf;
        if (hs_b26DfNf.notEvaluated) {
            hs_wild126Dg6S = hs_b26DfNf.hscall();
        }
        var hs_b126DfNj = hs_wild126Dg6S.data[0];
        return $hs.Word.le(hs_a126DfNi, hs_b126DfNj) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczg325uRh4.evaluate = function (hs_a26DfNn, hs_b26DfNq) {
        var hs_wild26Dg6V = hs_a26DfNn;
        if (hs_a26DfNn.notEvaluated) {
            hs_wild26Dg6V = hs_a26DfNn.hscall();
        }
        var hs_a126DfNt = hs_wild26Dg6V.data[0];
        var hs_wild126Dg6U = hs_b26DfNq;
        if (hs_b26DfNq.notEvaluated) {
            hs_wild126Dg6U = hs_b26DfNq.hscall();
        }
        var hs_b126DfNu = hs_wild126Dg6U.data[0];
        return $hs.Word.gt(hs_a126DfNt, hs_b126DfNu) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczgze325uRhf.evaluate = function (hs_a26DfNy, hs_b26DfNB) {
        var hs_wild26Dg6X = hs_a26DfNy;
        if (hs_a26DfNy.notEvaluated) {
            hs_wild26Dg6X = hs_a26DfNy.hscall();
        }
        var hs_a126DfNE = hs_wild26Dg6X.data[0];
        var hs_wild126Dg6W = hs_b26DfNB;
        if (hs_b26DfNB.notEvaluated) {
            hs_wild126Dg6W = hs_b26DfNB.hscall();
        }
        var hs_b126DfNF = hs_wild126Dg6W.data[0];
        return $hs.Word.ge(hs_a126DfNE, hs_b126DfNF) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczl325uRhq.evaluate = function (hs_a26DfNJ, hs_b26DfNM) {
        var hs_wild26Dg6Z = hs_a26DfNJ;
        if (hs_a26DfNJ.notEvaluated) {
            hs_wild26Dg6Z = hs_a26DfNJ.hscall();
        }
        var hs_a126DfNP = hs_wild26Dg6Z.data[0];
        var hs_wild126Dg6Y = hs_b26DfNM;
        if (hs_b26DfNM.notEvaluated) {
            hs_wild126Dg6Y = hs_b26DfNM.hscall();
        }
        var hs_b126DfNQ = hs_wild126Dg6Y.data[0];
        return $hs.Word.lt(hs_a126DfNP, hs_b126DfNQ) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdccompare325uRhB.evaluate = function (hs_a26DfNU, hs_b26DfNX) {
        var hs_wild26Dg71 = hs_a26DfNU;
        if (hs_a26DfNU.notEvaluated) {
            hs_wild26Dg71 = hs_a26DfNU.hscall();
        }
        var hs_a126DfO0 = hs_wild26Dg71.data[0];
        var hs_wild126Dg70 = hs_b26DfNX;
        if (hs_b26DfNX.notEvaluated) {
            hs_wild126Dg70 = hs_b26DfNX.hscall();
        }
        var hs_b126DfO1 = hs_wild126Dg70.data[0];
        var hs_wild226Dg72 = $hs.Word.lt(hs_a126DfO0, hs_b126DfO1) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226Dg72.tag) {
        case 1:
            var hs_wild326Dg73 = hs_a126DfO0 == hs_b126DfO1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild326Dg73.tag) {
            case 1:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczeze325uRhO.evaluate = function (hs_ds26DfO7, hs_ds126DfOa) {
        var hs_wild26Dg75 = hs_ds26DfO7;
        if (hs_ds26DfO7.notEvaluated) {
            hs_wild26Dg75 = hs_ds26DfO7.hscall();
        }
        var hs_a126DfOd = hs_wild26Dg75.data[0];
        var hs_wild126Dg74 = hs_ds126DfOa;
        if (hs_ds126DfOa.notEvaluated) {
            hs_wild126Dg74 = hs_ds126DfOa.hscall();
        }
        var hs_b126DfOe = hs_wild126Dg74.data[0];
        return hs_a126DfOd == hs_b126DfOe ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    this.hs_zdfEqWord16.data = [hs_zdczeze325uRhO, hs_zdczsze325uRhZ];
    hs_zdczsze325uRhZ.evaluate = function (hs_a26DfOi, hs_b26DfOj) {
        var hs_sat26Dg76 = new $hs.Thunk();
        hs_sat26Dg76.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord16, hs_a26DfOi, hs_b26DfOj);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26Dg76);
    };
    this.hs_zdfOrdWord16.data = [$hs.modules.GHCziWord.hs_zdfEqWord16, hs_zdccompare325uRhB, hs_zdczl325uRhq, hs_zdczgze325uRhf, hs_zdczg325uRh4, hs_zdczlze325uRgT, hs_zdcmax325uRi6, hs_zdcmin325uRi5];
    hs_zdcmin325uRi5.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmin.hscall($hs.modules.GHCziWord.hs_zdfOrdWord16);
    };
    hs_zdcmax325uRi6.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmax.hscall($hs.modules.GHCziWord.hs_zdfOrdWord16);
    };
    hs_zdcinRange325uRi7.evaluate = function (hs_ds26DfOq, hs_i26DfOv) {
        var hs_wild26Dg78 = hs_ds26DfOq;
        if (hs_ds26DfOq.notEvaluated) {
            hs_wild26Dg78 = hs_ds26DfOq.hscall();
        }
        var hs_m26DfOu = hs_wild26Dg78.data[0];
        var hs_n26DfOx = hs_wild26Dg78.data[1];
        var hs_sat26Dg79 = new $hs.Thunk();
        hs_sat26Dg79.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord16, hs_i26DfOv, hs_n26DfOx);
        };
        var hs_sat26Dg77 = new $hs.Thunk();
        hs_sat26Dg77.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord16, hs_m26DfOu, hs_i26DfOv);
        };
        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dg77, hs_sat26Dg79);
    };
    hs_sat26Dg7a.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(65535);
    };
    hs_sat26Dg7b.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
    };
    this.hs_zdfBoundedWord16.data = [hs_zdcminBound325uRiG, hs_zdcmaxBound325uRiF];
    this.hs_zdfShowWord16.data = [hs_zdcshowsPrec325uRiE, hs_zdcshow325uRiq, hs_zdcshowList325uRip];
    this.hs_zdfEnumWord16.data = [hs_zdcsucc325uRiD, hs_zdcpred325uRiC, hs_zdctoEnum325uRiB, hs_zdcfromEnum125uQS3, hs_zdcenumFrom325uRiA, hs_zdcenumFromThen325uRiz, hs_zdcenumFromTo325uRiy, hs_zdcenumFromThenTo325uRix];
    hs_zdczdp2Num325uRij.evaluateOnce = function () {
        if ($hs.modules.GHCziWord.hs_zdfShowWord16.notEvaluated) {
            return $hs.modules.GHCziWord.hs_zdfShowWord16.hscall();
        } else {
            return $hs.modules.GHCziWord.hs_zdfShowWord16;
        }
    };
    this.hs_zdfNumWord16.data = [$hs.modules.GHCziWord.hs_zdfEqWord16, $hs.modules.GHCziWord.hs_zdfShowWord16, hs_zdczp225uQRQ, hs_zdczt225uQRD, hs_zdczm225uQRq, hs_zdcnegate225uQRg, hs_zdcabs225uQRd, hs_zdcsignum325uRio, hs_zdcfromInteger225uQR7];
    hs_zdczdp1Real225uRik.evaluateOnce = function () {
        if ($hs.modules.GHCziWord.hs_zdfNumWord16.notEvaluated) {
            return $hs.modules.GHCziWord.hs_zdfNumWord16.hscall();
        } else {
            return $hs.modules.GHCziWord.hs_zdfNumWord16;
        }
    };
    this.hs_zdfRealWord16.data = [$hs.modules.GHCziWord.hs_zdfNumWord16, $hs.modules.GHCziWord.hs_zdfOrdWord16, hs_zdctoRational325uRin];
    hs_zdczdp2Integral325uRil.evaluateOnce = function () {
        if ($hs.modules.GHCziWord.hs_zdfEnumWord16.notEvaluated) {
            return $hs.modules.GHCziWord.hs_zdfEnumWord16.hscall();
        } else {
            return $hs.modules.GHCziWord.hs_zdfEnumWord16;
        }
    };
    hs_zdczdp1Integral325uRim.evaluateOnce = function () {
        if ($hs.modules.GHCziWord.hs_zdfRealWord16.notEvaluated) {
            return $hs.modules.GHCziWord.hs_zdfRealWord16.hscall();
        } else {
            return $hs.modules.GHCziWord.hs_zdfRealWord16;
        }
    };
    this.hs_zdfIntegralWord16.data = [$hs.modules.GHCziWord.hs_zdfRealWord16, $hs.modules.GHCziWord.hs_zdfEnumWord16, hs_zdcquot325uRiw, hs_zdcrem325uRiv, hs_zdcdiv325uRiu, hs_zdcmod325uRit, hs_zdcquotRem325uRis, hs_zdcdivMod325uRir, hs_zdctoInteger225uQSa];
    hs_zdctoRational325uRin.evaluate = function (hs_x26DfOY) {
        var hs_sat26Dg7E = new $hs.Thunk();
        hs_sat26Dg7E.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        var hs_sat26Dg7D = new $hs.Thunk();
        hs_sat26Dg7D.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord16, hs_x26DfOY);
        };
        return $hs.modules.GHCziReal.hs_zv.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26Dg7D, hs_sat26Dg7E);
    };
    hs_zdcsignum325uRio.evaluate = function (hs_ds26DfP2) {
        var hs_sat26Dg7z = new $hs.Thunk();
        hs_sat26Dg7z.evaluateOnce = function () {
            var hs_sat26Dg7C = new $hs.Thunk();
            hs_sat26Dg7C.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26Dg7C);
        };
        var hs_wild26Dg7A = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord16, hs_ds26DfP2, hs_sat26Dg7z);
        switch (hs_wild26Dg7A.tag) {
        case 1:
            var hs_sat26Dg7B = new $hs.Thunk();
            hs_sat26Dg7B.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26Dg7B);
        case 2:
            var hs_sat26Dg7y = new $hs.Thunk();
            hs_sat26Dg7y.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26Dg7y);
        }
    };
    hs_zdcshowList325uRip.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall($hs.modules.GHCziWord.hs_zdfShowWord16);
    };
    hs_zdcshow325uRiq.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziWord.hs_zdfShowWord16);
    };
    hs_zdcdivMod325uRir.evaluate = function (hs_ds26DfPa, hs_y26DfPd) {
        var hs_wild26Dg7G = hs_ds26DfPa;
        if (hs_ds26DfPa.notEvaluated) {
            hs_wild26Dg7G = hs_ds26DfPa.hscall();
        }
        var hs_xzh26DfPk = hs_wild26Dg7G.data[0];
        var hs_wild126DfPg = hs_y26DfPd;
        if (hs_y26DfPd.notEvaluated) {
            hs_wild126DfPg = hs_y26DfPd.hscall();
        }
        var hs_yzh26DfPl = hs_wild126DfPg.data[0];
        var hs_sat26Dg7H = new $hs.Thunk();
        hs_sat26Dg7H.evaluateOnce = function () {
            var hs_sat26Dg7K = new $hs.Thunk();
            hs_sat26Dg7K.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26Dg7K);
        };
        var hs_wild226Dg7I = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord16, hs_wild126DfPg, hs_sat26Dg7H);
        switch (hs_wild226Dg7I.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            var hs_sat26Dg7J = new $hs.Thunk();
            hs_sat26Dg7J.evaluateOnce = function () {
                throw "primitive operation remWord#. Not implemeted yet.";
                var $res = new $hs.Data(1);
                $res.data = [hs_wild326DfPq];
                return $res;
            };
            var hs_sat26Dg7F = new $hs.Thunk();
            hs_sat26Dg7F.evaluateOnce = function () {
                throw "primitive operation quotWord#. Not implemeted yet.";
                var $res = new $hs.Data(1);
                $res.data = [hs_wild326DfPn];
                return $res;
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26Dg7F, hs_sat26Dg7J];
            return $res;
        }
    };
    hs_zdcquotRem325uRis.evaluate = function (hs_ds26DfPu, hs_y26DfPx) {
        var hs_wild26Dg7M = hs_ds26DfPu;
        if (hs_ds26DfPu.notEvaluated) {
            hs_wild26Dg7M = hs_ds26DfPu.hscall();
        }
        var hs_xzh26DfPE = hs_wild26Dg7M.data[0];
        var hs_wild126DfPA = hs_y26DfPx;
        if (hs_y26DfPx.notEvaluated) {
            hs_wild126DfPA = hs_y26DfPx.hscall();
        }
        var hs_yzh26DfPF = hs_wild126DfPA.data[0];
        var hs_sat26Dg7N = new $hs.Thunk();
        hs_sat26Dg7N.evaluateOnce = function () {
            var hs_sat26Dg7Q = new $hs.Thunk();
            hs_sat26Dg7Q.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26Dg7Q);
        };
        var hs_wild226Dg7O = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord16, hs_wild126DfPA, hs_sat26Dg7N);
        switch (hs_wild226Dg7O.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            var hs_sat26Dg7P = new $hs.Thunk();
            hs_sat26Dg7P.evaluateOnce = function () {
                throw "primitive operation remWord#. Not implemeted yet.";
                var $res = new $hs.Data(1);
                $res.data = [hs_wild326DfPK];
                return $res;
            };
            var hs_sat26Dg7L = new $hs.Thunk();
            hs_sat26Dg7L.evaluateOnce = function () {
                throw "primitive operation quotWord#. Not implemeted yet.";
                var $res = new $hs.Data(1);
                $res.data = [hs_wild326DfPH];
                return $res;
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26Dg7L, hs_sat26Dg7P];
            return $res;
        }
    };
    hs_zdcmod325uRit.evaluate = function (hs_ds26DfPO, hs_y26DfPR) {
        var hs_wild26Dg7R = hs_ds26DfPO;
        if (hs_ds26DfPO.notEvaluated) {
            hs_wild26Dg7R = hs_ds26DfPO.hscall();
        }
        var hs_xzh26DfPY = hs_wild26Dg7R.data[0];
        var hs_wild126DfPU = hs_y26DfPR;
        if (hs_y26DfPR.notEvaluated) {
            hs_wild126DfPU = hs_y26DfPR.hscall();
        }
        var hs_yzh26DfPZ = hs_wild126DfPU.data[0];
        var hs_sat26Dg7S = new $hs.Thunk();
        hs_sat26Dg7S.evaluateOnce = function () {
            var hs_sat26Dg7U = new $hs.Thunk();
            hs_sat26Dg7U.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26Dg7U);
        };
        var hs_wild226Dg7T = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord16, hs_wild126DfPU, hs_sat26Dg7S);
        switch (hs_wild226Dg7T.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            throw "primitive operation remWord#. Not implemeted yet.";
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DfQ1];
            return $res;
        }
    };
    hs_zdcdiv325uRiu.evaluate = function (hs_ds26DfQ4, hs_y26DfQ7) {
        var hs_wild26Dg7V = hs_ds26DfQ4;
        if (hs_ds26DfQ4.notEvaluated) {
            hs_wild26Dg7V = hs_ds26DfQ4.hscall();
        }
        var hs_xzh26DfQe = hs_wild26Dg7V.data[0];
        var hs_wild126DfQa = hs_y26DfQ7;
        if (hs_y26DfQ7.notEvaluated) {
            hs_wild126DfQa = hs_y26DfQ7.hscall();
        }
        var hs_yzh26DfQf = hs_wild126DfQa.data[0];
        var hs_sat26Dg7W = new $hs.Thunk();
        hs_sat26Dg7W.evaluateOnce = function () {
            var hs_sat26Dg7Y = new $hs.Thunk();
            hs_sat26Dg7Y.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26Dg7Y);
        };
        var hs_wild226Dg7X = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord16, hs_wild126DfQa, hs_sat26Dg7W);
        switch (hs_wild226Dg7X.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            throw "primitive operation quotWord#. Not implemeted yet.";
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DfQh];
            return $res;
        }
    };
    hs_zdcrem325uRiv.evaluate = function (hs_ds26DfQk, hs_y26DfQn) {
        var hs_wild26Dg7Z = hs_ds26DfQk;
        if (hs_ds26DfQk.notEvaluated) {
            hs_wild26Dg7Z = hs_ds26DfQk.hscall();
        }
        var hs_xzh26DfQu = hs_wild26Dg7Z.data[0];
        var hs_wild126DfQq = hs_y26DfQn;
        if (hs_y26DfQn.notEvaluated) {
            hs_wild126DfQq = hs_y26DfQn.hscall();
        }
        var hs_yzh26DfQv = hs_wild126DfQq.data[0];
        var hs_sat26Dg80 = new $hs.Thunk();
        hs_sat26Dg80.evaluateOnce = function () {
            var hs_sat26Dg82 = new $hs.Thunk();
            hs_sat26Dg82.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26Dg82);
        };
        var hs_wild226Dg81 = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord16, hs_wild126DfQq, hs_sat26Dg80);
        switch (hs_wild226Dg81.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            throw "primitive operation remWord#. Not implemeted yet.";
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DfQx];
            return $res;
        }
    };
    hs_zdcquot325uRiw.evaluate = function (hs_ds26DfQA, hs_y26DfQD) {
        var hs_wild26Dg83 = hs_ds26DfQA;
        if (hs_ds26DfQA.notEvaluated) {
            hs_wild26Dg83 = hs_ds26DfQA.hscall();
        }
        var hs_xzh26DfQK = hs_wild26Dg83.data[0];
        var hs_wild126DfQG = hs_y26DfQD;
        if (hs_y26DfQD.notEvaluated) {
            hs_wild126DfQG = hs_y26DfQD.hscall();
        }
        var hs_yzh26DfQL = hs_wild126DfQG.data[0];
        var hs_sat26Dg84 = new $hs.Thunk();
        hs_sat26Dg84.evaluateOnce = function () {
            var hs_sat26Dg86 = new $hs.Thunk();
            hs_sat26Dg86.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26Dg86);
        };
        var hs_wild226Dg85 = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord16, hs_wild126DfQG, hs_sat26Dg84);
        switch (hs_wild226Dg85.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            throw "primitive operation quotWord#. Not implemeted yet.";
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DfQN];
            return $res;
        }
    };
    hs_zdcenumFromThenTo325uRix.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_zddmenumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord16);
    };
    hs_zdcenumFromTo325uRiy.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_zddmenumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord16);
    };
    hs_zdcenumFromThen325uRiz.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_boundedEnumFromThen.hscall($hs.modules.GHCziWord.hs_zdfEnumWord16, $hs.modules.GHCziWord.hs_zdfBoundedWord16);
    };
    hs_zdcenumFrom325uRiA.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_boundedEnumFrom.hscall($hs.modules.GHCziWord.hs_zdfEnumWord16, $hs.modules.GHCziWord.hs_zdfBoundedWord16);
    };
    hs_zdctoEnum325uRiB.evaluate = function (hs_i26DfQP) {
        var hs_wild26DfQS = hs_i26DfQP;
        if (hs_i26DfQP.notEvaluated) {
            hs_wild26DfQS = hs_i26DfQP.hscall();
        }
        var hs_izh26DfR3 = hs_wild26DfQS.data[0];
        var hs_sat26Dg7d = new $hs.Thunk();
        hs_sat26Dg7d.evaluateOnce = function () {
            var hs_sat26Dg7m = new $hs.Thunk();
            hs_sat26Dg7m.evaluateOnce = function () {
                var hs_sat26Dg7n = new $hs.Thunk();
                hs_sat26Dg7n.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord16);
                };
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord16, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dg7n);
            };
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_wild26DfQS, hs_sat26Dg7m);
        };
        var hs_sat26Dg7e = new $hs.Thunk();
        hs_sat26Dg7e.evaluateOnce = function () {
            var hs_sat26Dg7l = new $hs.Data(1);
            hs_sat26Dg7l.data = [0];
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_wild26DfQS, hs_sat26Dg7l);
        };
        var hs_wild126Dg7f = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dg7e, hs_sat26Dg7d);
        switch (hs_wild126Dg7f.tag) {
        case 1:
            var hs_sat26Dg7i = new $hs.Thunk();
            hs_sat26Dg7i.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord16);
            };
            var hs_sat26Dg7j = new $hs.Thunk();
            hs_sat26Dg7j.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord16);
            };
            var hs_sat26Dg7k = new $hs.Data(1);
            hs_sat26Dg7k.data = [hs_sat26Dg7j, hs_sat26Dg7i];
            var hs_sat26Dg7h = new $hs.Thunk();
            hs_sat26Dg7h.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Word16\x00");
            };
            return $hs.modules.GHCziWord.hs_toEnumError.hscall($hs.modules.GHCziWord.hs_zdfShowWord16, hs_sat26Dg7h, hs_wild26DfQS, hs_sat26Dg7k);
        case 2:
            var hs_sat26Dg7g = hs_izh26DfR3;
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26Dg7g];
            return $res;
        }
    };
    hs_zdcpred325uRiC.evaluate = function (hs_x26DfR6) {
        var hs_sat26Dg7p = new $hs.Thunk();
        hs_sat26Dg7p.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord16);
        };
        var hs_wild26Dg7q = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord16, hs_x26DfR6, hs_sat26Dg7p);
        switch (hs_wild26Dg7q.tag) {
        case 1:
            var hs_sat26Dg7s = new $hs.Thunk();
            hs_sat26Dg7s.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Word16\x00");
            };
            return $hs.modules.GHCziWord.hs_predError.hscall(hs_sat26Dg7s);
        case 2:
            var hs_sat26Dg7o = new $hs.Thunk();
            hs_sat26Dg7o.evaluateOnce = function () {
                var hs_sat26Dg7r = new $hs.Thunk();
                hs_sat26Dg7r.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26Dg7r);
            };
            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_x26DfR6, hs_sat26Dg7o);
        }
    };
    hs_zdcsucc325uRiD.evaluate = function (hs_x26DfRd) {
        var hs_sat26Dg7u = new $hs.Thunk();
        hs_sat26Dg7u.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord16);
        };
        var hs_wild26Dg7v = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord16, hs_x26DfRd, hs_sat26Dg7u);
        switch (hs_wild26Dg7v.tag) {
        case 1:
            var hs_sat26Dg7x = new $hs.Thunk();
            hs_sat26Dg7x.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Word16\x00");
            };
            return $hs.modules.GHCziWord.hs_succError.hscall(hs_sat26Dg7x);
        case 2:
            var hs_sat26Dg7t = new $hs.Thunk();
            hs_sat26Dg7t.evaluateOnce = function () {
                var hs_sat26Dg7w = new $hs.Thunk();
                hs_sat26Dg7w.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26Dg7w);
            };
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_x26DfRd, hs_sat26Dg7t);
        }
    };
    hs_zdcshowsPrec325uRiE.evaluate = function (hs_p26DfRl, hs_x26DfRm) {
        var hs_sat26Dg7c = new $hs.Thunk();
        hs_sat26Dg7c.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord16, $hs.modules.GHCziNum.hs_zdfNumInt, hs_x26DfRm);
        };
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_p26DfRl, hs_sat26Dg7c);
    };
    hs_zdcmaxBound325uRiF.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26Dg7a);
    };
    hs_zdcminBound325uRiG.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26Dg7b);
    };
    hs_zdcreadsPrec325uRla.evaluate = function (hs_p26DfRK, hs_s26DfRL) {
        var hs_ds26DfRI = new $hs.Func(1);
        hs_ds26DfRI.evaluate = function (hs_ds126DfRv) {
            var hs_ds226Dg8a = hs_ds126DfRv;
            if (hs_ds126DfRv.notEvaluated) {
                hs_ds226Dg8a = hs_ds126DfRv.hscall();
            }
            switch (hs_ds226Dg8a.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_ds326DfRz = hs_ds226Dg8a.data[0];
                var hs_ds426DfRH = hs_ds226Dg8a.data[1];
                var hs_wild26Dg89 = hs_ds326DfRz;
                if (hs_ds326DfRz.notEvaluated) {
                    hs_wild26Dg89 = hs_ds326DfRz.hscall();
                }
                var hs_x26DfRD = hs_wild26Dg89.data[0];
                var hs_r26DfRF = hs_wild26Dg89.data[1];
                var hs_sat26Dg8b = new $hs.Thunk();
                hs_sat26Dg8b.evaluateOnce = function () {
                    return hs_ds26DfRI.hscall(hs_ds426DfRH);
                };
                var hs_sat26Dg8c = new $hs.Thunk();
                hs_sat26Dg8c.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord16, hs_x26DfRD);
                };
                var hs_sat26Dg88 = new $hs.Data(1);
                hs_sat26Dg88.data = [hs_sat26Dg8c, hs_r26DfRF];
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26Dg88, hs_sat26Dg8b];
                return $res;
            }
        };
        var hs_sat26Dg87 = new $hs.Thunk();
        hs_sat26Dg87.evaluateOnce = function () {
            return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziRead.hs_zdfReadInt, hs_p26DfRK, hs_s26DfRL);
        };
        return hs_ds26DfRI.hscall(hs_sat26Dg87);
    };
    this.hs_zdfReadWord16.data = [hs_zdcreadsPrec325uRla, hs_zdcreadList325uRlz, hs_zdcreadPrec325uRly, hs_zdcreadListPrec325uRlx];
    hs_zdcreadListPrec325uRlx.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord16);
    };
    hs_zdcreadPrec325uRly.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord16);
    };
    hs_zdcreadList325uRlz.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadList.hscall($hs.modules.GHCziWord.hs_zdfReadWord16);
    };
    hs_zdccomplement325uRlA.evaluate = function (hs_ds26DfRS) {
        var hs_wild26Dg8d = hs_ds26DfRS;
        if (hs_ds26DfRS.notEvaluated) {
            hs_wild26Dg8d = hs_ds26DfRS.hscall();
        }
        var hs_xzh26DfRX = hs_wild26Dg8d.data[0];
        var hs_wild126Dg8e = $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord16);
        var hs_mbzh26DfRY = hs_wild126Dg8e.data[0];
        var hs_sat26Dg8f = hs_xzh26DfRX ^ hs_mbzh26DfRY;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dg8f];
        return $res;
    };
    this.hs_zdfBitsWord16.data = [$hs.modules.GHCziWord.hs_zdfNumWord16, hs_zdczizazi225uQTn, hs_zdczizbzi225uQTb, hs_zdcxor225uQSZ, hs_zdccomplement325uRlA, hs_zdcshift225uQSH, hs_zdcrotate225uQSn, hs_zdcbit325uRlS, hs_zdcsetBit325uRlR, hs_zdcclearBit325uRlQ, hs_zdccomplementBit325uRlP, hs_zdctestBit325uRlO, hs_zdcbitSizze225uQSk, hs_zdcisSigned225uQSh, hs_zdcshiftL325uRlN, hs_zdcshiftR325uRlM, hs_zdcrotateL325uRlL, hs_zdcrotateR325uRlK];
    hs_zdcrotateR325uRlK.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmrotateR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdcrotateL325uRlL.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmrotateL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdcshiftR325uRlM.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmshiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdcshiftL325uRlN.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmshiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdctestBit325uRlO.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmtestBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdccomplementBit325uRlP.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmcomplementBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdcclearBit325uRlQ.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmclearBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdcsetBit325uRlR.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmsetBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdcbit325uRlS.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmbit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdcunsafeIndex325uRlT.evaluate = function (hs_ds26DfSc, hs_i26DfSg) {
        var hs_wild26Dg8h = hs_ds26DfSc;
        if (hs_ds26DfSc.notEvaluated) {
            hs_wild26Dg8h = hs_ds26DfSc.hscall();
        }
        var hs_m26DfSh = hs_wild26Dg8h.data[0];
        var hs_sat26Dg8g = new $hs.Thunk();
        hs_sat26Dg8g.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_i26DfSg, hs_m26DfSh);
        };
        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord16, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dg8g);
    };
    hs_zdcrange325uRm3.evaluate = function (hs_ds26DfSl) {
        var hs_wild26Dg8j = hs_ds26DfSl;
        if (hs_ds26DfSl.notEvaluated) {
            hs_wild26Dg8j = hs_ds26DfSl.hscall();
        }
        var hs_m26DfSp = hs_wild26Dg8j.data[0];
        var hs_n26DfSq = hs_wild26Dg8j.data[1];
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord16, hs_m26DfSp, hs_n26DfSq);
    };
    this.hs_zdfIxWord16.data = [$hs.modules.GHCziWord.hs_zdfOrdWord16, hs_zdcrange325uRm3, hs_zdcindex325uRmd, hs_zdcunsafeIndex325uRlT, hs_zdcinRange325uRi7, hs_zdcrangeSizze325uRmc, hs_zdcunsafeRangeSizze325uRmb];
    hs_zdcunsafeRangeSizze325uRmb.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmunsafeRangeSizze.hscall($hs.modules.GHCziWord.hs_zdfIxWord16);
    };
    hs_zdcrangeSizze325uRmc.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmrangeSizze.hscall($hs.modules.GHCziWord.hs_zdfIxWord16);
    };
    hs_zdcindex325uRmd.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmindex.hscall($hs.modules.GHCziWord.hs_zdfIxWord16);
    };
    hs_zdczlze425uRme.evaluate = function (hs_a26DfSx, hs_b26DfSA) {
        var hs_wild26Dg8l = hs_a26DfSx;
        if (hs_a26DfSx.notEvaluated) {
            hs_wild26Dg8l = hs_a26DfSx.hscall();
        }
        var hs_a126DfSD = hs_wild26Dg8l.data[0];
        var hs_wild126Dg8k = hs_b26DfSA;
        if (hs_b26DfSA.notEvaluated) {
            hs_wild126Dg8k = hs_b26DfSA.hscall();
        }
        var hs_b126DfSE = hs_wild126Dg8k.data[0];
        return $hs.Word.le(hs_a126DfSD, hs_b126DfSE) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczg425uRmp.evaluate = function (hs_a26DfSI, hs_b26DfSL) {
        var hs_wild26Dg8n = hs_a26DfSI;
        if (hs_a26DfSI.notEvaluated) {
            hs_wild26Dg8n = hs_a26DfSI.hscall();
        }
        var hs_a126DfSO = hs_wild26Dg8n.data[0];
        var hs_wild126Dg8m = hs_b26DfSL;
        if (hs_b26DfSL.notEvaluated) {
            hs_wild126Dg8m = hs_b26DfSL.hscall();
        }
        var hs_b126DfSP = hs_wild126Dg8m.data[0];
        return $hs.Word.gt(hs_a126DfSO, hs_b126DfSP) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczgze425uRmA.evaluate = function (hs_a26DfST, hs_b26DfSW) {
        var hs_wild26Dg8p = hs_a26DfST;
        if (hs_a26DfST.notEvaluated) {
            hs_wild26Dg8p = hs_a26DfST.hscall();
        }
        var hs_a126DfSZ = hs_wild26Dg8p.data[0];
        var hs_wild126Dg8o = hs_b26DfSW;
        if (hs_b26DfSW.notEvaluated) {
            hs_wild126Dg8o = hs_b26DfSW.hscall();
        }
        var hs_b126DfT0 = hs_wild126Dg8o.data[0];
        return $hs.Word.ge(hs_a126DfSZ, hs_b126DfT0) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczl425uRmL.evaluate = function (hs_a26DfT4, hs_b26DfT7) {
        var hs_wild26Dg8r = hs_a26DfT4;
        if (hs_a26DfT4.notEvaluated) {
            hs_wild26Dg8r = hs_a26DfT4.hscall();
        }
        var hs_a126DfTa = hs_wild26Dg8r.data[0];
        var hs_wild126Dg8q = hs_b26DfT7;
        if (hs_b26DfT7.notEvaluated) {
            hs_wild126Dg8q = hs_b26DfT7.hscall();
        }
        var hs_b126DfTb = hs_wild126Dg8q.data[0];
        return $hs.Word.lt(hs_a126DfTa, hs_b126DfTb) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdccompare425uRmW.evaluate = function (hs_a26DfTf, hs_b26DfTi) {
        var hs_wild26Dg8t = hs_a26DfTf;
        if (hs_a26DfTf.notEvaluated) {
            hs_wild26Dg8t = hs_a26DfTf.hscall();
        }
        var hs_a126DfTl = hs_wild26Dg8t.data[0];
        var hs_wild126Dg8s = hs_b26DfTi;
        if (hs_b26DfTi.notEvaluated) {
            hs_wild126Dg8s = hs_b26DfTi.hscall();
        }
        var hs_b126DfTm = hs_wild126Dg8s.data[0];
        var hs_wild226Dg8u = $hs.Word.lt(hs_a126DfTl, hs_b126DfTm) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226Dg8u.tag) {
        case 1:
            var hs_wild326Dg8v = hs_a126DfTl == hs_b126DfTm ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild326Dg8v.tag) {
            case 1:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczeze425uRn9.evaluate = function (hs_ds26DfTs, hs_ds126DfTv) {
        var hs_wild26Dg8x = hs_ds26DfTs;
        if (hs_ds26DfTs.notEvaluated) {
            hs_wild26Dg8x = hs_ds26DfTs.hscall();
        }
        var hs_a126DfTy = hs_wild26Dg8x.data[0];
        var hs_wild126Dg8w = hs_ds126DfTv;
        if (hs_ds126DfTv.notEvaluated) {
            hs_wild126Dg8w = hs_ds126DfTv.hscall();
        }
        var hs_b126DfTz = hs_wild126Dg8w.data[0];
        return hs_a126DfTy == hs_b126DfTz ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    this.hs_zdfEqWord32.data = [hs_zdczeze425uRn9, hs_zdczsze425uRnk];
    hs_zdczsze425uRnk.evaluate = function (hs_a26DfTD, hs_b26DfTE) {
        var hs_sat26Dg8y = new $hs.Thunk();
        hs_sat26Dg8y.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32, hs_a26DfTD, hs_b26DfTE);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26Dg8y);
    };
    this.hs_zdfOrdWord32.data = [$hs.modules.GHCziWord.hs_zdfEqWord32, hs_zdccompare425uRmW, hs_zdczl425uRmL, hs_zdczgze425uRmA, hs_zdczg425uRmp, hs_zdczlze425uRme, hs_zdcmax425uRnr, hs_zdcmin425uRnq];
    hs_zdcmin425uRnq.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmin.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcmax425uRnr.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmax.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcinRange425uRns.evaluate = function (hs_ds26DfTL, hs_i26DfTQ) {
        var hs_wild26Dg8A = hs_ds26DfTL;
        if (hs_ds26DfTL.notEvaluated) {
            hs_wild26Dg8A = hs_ds26DfTL.hscall();
        }
        var hs_m26DfTP = hs_wild26Dg8A.data[0];
        var hs_n26DfTS = hs_wild26Dg8A.data[1];
        var hs_sat26Dg8B = new $hs.Thunk();
        hs_sat26Dg8B.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32, hs_i26DfTQ, hs_n26DfTS);
        };
        var hs_sat26Dg8z = new $hs.Thunk();
        hs_sat26Dg8z.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32, hs_m26DfTP, hs_i26DfTQ);
        };
        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dg8z, hs_sat26Dg8B);
    };
    hs_sat26Dg8G.evaluateOnce = function () {
        var hs_sat26Dg8D = new $hs.Thunk();
        hs_sat26Dg8D.evaluateOnce = function () {
            var hs_sat26Dg8F = new $hs.Thunk();
            hs_sat26Dg8F.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2147483647);
            };
            var hs_sat26Dg8E = new $hs.Thunk();
            hs_sat26Dg8E.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
            };
            return $hs.modules.GHCziInteger.hs_timesInteger.hscall(hs_sat26Dg8E, hs_sat26Dg8F);
        };
        var hs_sat26Dg8C = new $hs.Thunk();
        hs_sat26Dg8C.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        return $hs.modules.GHCziInteger.hs_plusInteger.hscall(hs_sat26Dg8C, hs_sat26Dg8D);
    };
    hs_sat26Dg8H.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
    };
    this.hs_zdfBoundedWord32.data = [hs_zdcminBound425uRo2, hs_zdcmaxBound425uRo1];
    this.hs_zdfEnumWord32.data = [hs_zdcsucc425uRnY, hs_zdcpred425uRnX, hs_zdctoEnum425uRnW, hs_zdcfromEnum425uRnV, hs_zdcenumFrom425uRnU, hs_zdcenumFromThen425uRnT, hs_zdcenumFromTo425uRnS, hs_zdcenumFromThenTo425uRnR];
    this.hs_zdfShowWord32.data = [hs_zdcshowsPrec425uRo0, hs_zdcshow425uRnK, hs_zdcshowList425uRnJ];
    hs_zdczdp2Num425uRnE.evaluateOnce = function () {
        if ($hs.modules.GHCziWord.hs_zdfShowWord32.notEvaluated) {
            return $hs.modules.GHCziWord.hs_zdfShowWord32.hscall();
        } else {
            return $hs.modules.GHCziWord.hs_zdfShowWord32;
        }
    };
    this.hs_zdfNumWord32.data = [$hs.modules.GHCziWord.hs_zdfEqWord32, $hs.modules.GHCziWord.hs_zdfShowWord32, hs_zdczp325uQUi, hs_zdczt325uQU5, hs_zdczm325uQTS, hs_zdcnegate325uQTI, hs_zdcabs325uQTF, hs_zdcsignum425uRnI, hs_zdcfromInteger325uQTz];
    hs_zdczdp2Integral425uRnF.evaluateOnce = function () {
        if ($hs.modules.GHCziWord.hs_zdfEnumWord32.notEvaluated) {
            return $hs.modules.GHCziWord.hs_zdfEnumWord32.hscall();
        } else {
            return $hs.modules.GHCziWord.hs_zdfEnumWord32;
        }
    };
    hs_zdczdp1Real325uRnG.evaluateOnce = function () {
        if ($hs.modules.GHCziWord.hs_zdfNumWord32.notEvaluated) {
            return $hs.modules.GHCziWord.hs_zdfNumWord32.hscall();
        } else {
            return $hs.modules.GHCziWord.hs_zdfNumWord32;
        }
    };
    this.hs_zdfRealWord32.data = [$hs.modules.GHCziWord.hs_zdfNumWord32, $hs.modules.GHCziWord.hs_zdfOrdWord32, hs_zdctoRational425uRnZ];
    hs_zdczdp1Integral425uRnH.evaluateOnce = function () {
        if ($hs.modules.GHCziWord.hs_zdfRealWord32.notEvaluated) {
            return $hs.modules.GHCziWord.hs_zdfRealWord32.hscall();
        } else {
            return $hs.modules.GHCziWord.hs_zdfRealWord32;
        }
    };
    this.hs_zdfIntegralWord32.data = [$hs.modules.GHCziWord.hs_zdfRealWord32, $hs.modules.GHCziWord.hs_zdfEnumWord32, hs_zdcquot425uRnQ, hs_zdcrem425uRnP, hs_zdcdiv425uRnO, hs_zdcmod425uRnN, hs_zdcquotRem425uRnM, hs_zdcdivMod425uRnL, hs_zdctoInteger325uQUv];
    hs_zdcsignum425uRnI.evaluate = function (hs_ds26DfUk) {
        var hs_sat26Dg96 = new $hs.Thunk();
        hs_sat26Dg96.evaluateOnce = function () {
            var hs_sat26Dg99 = new $hs.Thunk();
            hs_sat26Dg99.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26Dg99);
        };
        var hs_wild26Dg97 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32, hs_ds26DfUk, hs_sat26Dg96);
        switch (hs_wild26Dg97.tag) {
        case 1:
            var hs_sat26Dg98 = new $hs.Thunk();
            hs_sat26Dg98.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26Dg98);
        case 2:
            var hs_sat26Dg95 = new $hs.Thunk();
            hs_sat26Dg95.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26Dg95);
        }
    };
    hs_zdcshowList425uRnJ.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshow425uRnK.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcdivMod425uRnL.evaluate = function (hs_ds26DfUs, hs_y26DfUv) {
        var hs_wild26Dg9d = hs_ds26DfUs;
        if (hs_ds26DfUs.notEvaluated) {
            hs_wild26Dg9d = hs_ds26DfUs.hscall();
        }
        var hs_xzh26DfUC = hs_wild26Dg9d.data[0];
        var hs_wild126DfUy = hs_y26DfUv;
        if (hs_y26DfUv.notEvaluated) {
            hs_wild126DfUy = hs_y26DfUv.hscall();
        }
        var hs_yzh26DfUD = hs_wild126DfUy.data[0];
        var hs_sat26Dg9e = new $hs.Thunk();
        hs_sat26Dg9e.evaluateOnce = function () {
            var hs_sat26Dg9h = new $hs.Thunk();
            hs_sat26Dg9h.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26Dg9h);
        };
        var hs_wild226Dg9f = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32, hs_wild126DfUy, hs_sat26Dg9e);
        switch (hs_wild226Dg9f.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            var hs_sat26Dg9g = new $hs.Thunk();
            hs_sat26Dg9g.evaluateOnce = function () {
                throw "primitive operation remWord#. Not implemeted yet.";
                var $res = new $hs.Data(1);
                $res.data = [hs_wild326DfUI];
                return $res;
            };
            var hs_sat26Dg9c = new $hs.Thunk();
            hs_sat26Dg9c.evaluateOnce = function () {
                throw "primitive operation quotWord#. Not implemeted yet.";
                var $res = new $hs.Data(1);
                $res.data = [hs_wild326DfUF];
                return $res;
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26Dg9c, hs_sat26Dg9g];
            return $res;
        }
    };
    hs_zdcquotRem425uRnM.evaluate = function (hs_ds26DfUM, hs_y26DfUP) {
        var hs_wild26Dg9j = hs_ds26DfUM;
        if (hs_ds26DfUM.notEvaluated) {
            hs_wild26Dg9j = hs_ds26DfUM.hscall();
        }
        var hs_xzh26DfUW = hs_wild26Dg9j.data[0];
        var hs_wild126DfUS = hs_y26DfUP;
        if (hs_y26DfUP.notEvaluated) {
            hs_wild126DfUS = hs_y26DfUP.hscall();
        }
        var hs_yzh26DfUX = hs_wild126DfUS.data[0];
        var hs_sat26Dg9k = new $hs.Thunk();
        hs_sat26Dg9k.evaluateOnce = function () {
            var hs_sat26Dg9n = new $hs.Thunk();
            hs_sat26Dg9n.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26Dg9n);
        };
        var hs_wild226Dg9l = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32, hs_wild126DfUS, hs_sat26Dg9k);
        switch (hs_wild226Dg9l.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            var hs_sat26Dg9m = new $hs.Thunk();
            hs_sat26Dg9m.evaluateOnce = function () {
                throw "primitive operation remWord#. Not implemeted yet.";
                var $res = new $hs.Data(1);
                $res.data = [hs_wild326DfV2];
                return $res;
            };
            var hs_sat26Dg9i = new $hs.Thunk();
            hs_sat26Dg9i.evaluateOnce = function () {
                throw "primitive operation quotWord#. Not implemeted yet.";
                var $res = new $hs.Data(1);
                $res.data = [hs_wild326DfUZ];
                return $res;
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26Dg9i, hs_sat26Dg9m];
            return $res;
        }
    };
    hs_zdcmod425uRnN.evaluate = function (hs_ds26DfV6, hs_y26DfV9) {
        var hs_wild26Dg9o = hs_ds26DfV6;
        if (hs_ds26DfV6.notEvaluated) {
            hs_wild26Dg9o = hs_ds26DfV6.hscall();
        }
        var hs_xzh26DfVg = hs_wild26Dg9o.data[0];
        var hs_wild126DfVc = hs_y26DfV9;
        if (hs_y26DfV9.notEvaluated) {
            hs_wild126DfVc = hs_y26DfV9.hscall();
        }
        var hs_yzh26DfVh = hs_wild126DfVc.data[0];
        var hs_sat26Dg9p = new $hs.Thunk();
        hs_sat26Dg9p.evaluateOnce = function () {
            var hs_sat26Dg9r = new $hs.Thunk();
            hs_sat26Dg9r.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26Dg9r);
        };
        var hs_wild226Dg9q = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32, hs_wild126DfVc, hs_sat26Dg9p);
        switch (hs_wild226Dg9q.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            throw "primitive operation remWord#. Not implemeted yet.";
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DfVj];
            return $res;
        }
    };
    hs_zdcdiv425uRnO.evaluate = function (hs_ds26DfVm, hs_y26DfVp) {
        var hs_wild26Dg9s = hs_ds26DfVm;
        if (hs_ds26DfVm.notEvaluated) {
            hs_wild26Dg9s = hs_ds26DfVm.hscall();
        }
        var hs_xzh26DfVw = hs_wild26Dg9s.data[0];
        var hs_wild126DfVs = hs_y26DfVp;
        if (hs_y26DfVp.notEvaluated) {
            hs_wild126DfVs = hs_y26DfVp.hscall();
        }
        var hs_yzh26DfVx = hs_wild126DfVs.data[0];
        var hs_sat26Dg9t = new $hs.Thunk();
        hs_sat26Dg9t.evaluateOnce = function () {
            var hs_sat26Dg9v = new $hs.Thunk();
            hs_sat26Dg9v.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26Dg9v);
        };
        var hs_wild226Dg9u = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32, hs_wild126DfVs, hs_sat26Dg9t);
        switch (hs_wild226Dg9u.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            throw "primitive operation quotWord#. Not implemeted yet.";
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DfVz];
            return $res;
        }
    };
    hs_zdcrem425uRnP.evaluate = function (hs_ds26DfVC, hs_y26DfVF) {
        var hs_wild26Dg9w = hs_ds26DfVC;
        if (hs_ds26DfVC.notEvaluated) {
            hs_wild26Dg9w = hs_ds26DfVC.hscall();
        }
        var hs_xzh26DfVM = hs_wild26Dg9w.data[0];
        var hs_wild126DfVI = hs_y26DfVF;
        if (hs_y26DfVF.notEvaluated) {
            hs_wild126DfVI = hs_y26DfVF.hscall();
        }
        var hs_yzh26DfVN = hs_wild126DfVI.data[0];
        var hs_sat26Dg9x = new $hs.Thunk();
        hs_sat26Dg9x.evaluateOnce = function () {
            var hs_sat26Dg9z = new $hs.Thunk();
            hs_sat26Dg9z.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26Dg9z);
        };
        var hs_wild226Dg9y = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32, hs_wild126DfVI, hs_sat26Dg9x);
        switch (hs_wild226Dg9y.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            throw "primitive operation remWord#. Not implemeted yet.";
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DfVP];
            return $res;
        }
    };
    hs_zdcquot425uRnQ.evaluate = function (hs_ds26DfVS, hs_y26DfVV) {
        var hs_wild26Dg9A = hs_ds26DfVS;
        if (hs_ds26DfVS.notEvaluated) {
            hs_wild26Dg9A = hs_ds26DfVS.hscall();
        }
        var hs_xzh26DfW2 = hs_wild26Dg9A.data[0];
        var hs_wild126DfVY = hs_y26DfVV;
        if (hs_y26DfVV.notEvaluated) {
            hs_wild126DfVY = hs_y26DfVV.hscall();
        }
        var hs_yzh26DfW3 = hs_wild126DfVY.data[0];
        var hs_sat26Dg9B = new $hs.Thunk();
        hs_sat26Dg9B.evaluateOnce = function () {
            var hs_sat26Dg9D = new $hs.Thunk();
            hs_sat26Dg9D.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26Dg9D);
        };
        var hs_wild226Dg9C = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32, hs_wild126DfVY, hs_sat26Dg9B);
        switch (hs_wild226Dg9C.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            throw "primitive operation quotWord#. Not implemeted yet.";
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DfW5];
            return $res;
        }
    };
    hs_zdcenumFromThenTo425uRnR.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_integralEnumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcenumFromTo425uRnS.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_integralEnumFromTo.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcenumFromThen425uRnT.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_integralEnumFromThen.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32, $hs.modules.GHCziWord.hs_zdfBoundedWord32);
    };
    hs_zdcenumFrom425uRnU.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_integralEnumFrom.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32, $hs.modules.GHCziWord.hs_zdfBoundedWord32);
    };
    hs_zdcfromEnum425uRnV.evaluate = function (hs_x26DfW7) {
        var hs_wild26DfWa = hs_x26DfW7;
        if (hs_x26DfW7.notEvaluated) {
            hs_wild26DfWa = hs_x26DfW7.hscall();
        }
        var hs_xzh26DfWf = hs_wild26DfWa.data[0];
        var hs_sat26Dg8I = new $hs.Thunk();
        hs_sat26Dg8I.evaluateOnce = function () {
            var hs_sat26Dg8M = new $hs.Thunk();
            hs_sat26Dg8M.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziEnum.hs_zdfBoundedInt);
            };
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26Dg8M);
        };
        var hs_wild126Dg8J = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32, hs_wild26DfWa, hs_sat26Dg8I);
        switch (hs_wild126Dg8J.tag) {
        case 1:
            var hs_sat26Dg8L = new $hs.Thunk();
            hs_sat26Dg8L.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Word32\x00");
            };
            return $hs.modules.GHCziWord.hs_fromEnumError.hscall($hs.modules.GHCziWord.hs_zdfShowWord32, hs_sat26Dg8L, hs_wild26DfWa);
        case 2:
            var hs_sat26Dg8K = hs_xzh26DfWf;
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26Dg8K];
            return $res;
        }
    };
    hs_zdctoEnum425uRnW.evaluate = function (hs_i26DfWi) {
        var hs_wild26DfWl = hs_i26DfWi;
        if (hs_i26DfWi.notEvaluated) {
            hs_wild26DfWl = hs_i26DfWi.hscall();
        }
        var hs_izh26DfWs = hs_wild26DfWl.data[0];
        var hs_sat26Dg8N = new $hs.Data(1);
        hs_sat26Dg8N.data = [0];
        var hs_wild126Dg8O = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_wild26DfWl, hs_sat26Dg8N);
        switch (hs_wild126Dg8O.tag) {
        case 1:
            var hs_sat26Dg8R = new $hs.Thunk();
            hs_sat26Dg8R.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
            };
            var hs_sat26Dg8S = new $hs.Thunk();
            hs_sat26Dg8S.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
            };
            var hs_sat26Dg8T = new $hs.Data(1);
            hs_sat26Dg8T.data = [hs_sat26Dg8S, hs_sat26Dg8R];
            var hs_sat26Dg8Q = new $hs.Thunk();
            hs_sat26Dg8Q.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Word32\x00");
            };
            return $hs.modules.GHCziWord.hs_toEnumError.hscall($hs.modules.GHCziWord.hs_zdfShowWord32, hs_sat26Dg8Q, hs_wild26DfWl, hs_sat26Dg8T);
        case 2:
            var hs_sat26Dg8P = hs_izh26DfWs;
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26Dg8P];
            return $res;
        }
    };
    hs_zdcpred425uRnX.evaluate = function (hs_x26DfWv) {
        var hs_sat26Dg8V = new $hs.Thunk();
        hs_sat26Dg8V.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
        };
        var hs_wild26Dg8W = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32, hs_x26DfWv, hs_sat26Dg8V);
        switch (hs_wild26Dg8W.tag) {
        case 1:
            var hs_sat26Dg8Y = new $hs.Thunk();
            hs_sat26Dg8Y.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Word32\x00");
            };
            return $hs.modules.GHCziWord.hs_predError.hscall(hs_sat26Dg8Y);
        case 2:
            var hs_sat26Dg8U = new $hs.Thunk();
            hs_sat26Dg8U.evaluateOnce = function () {
                var hs_sat26Dg8X = new $hs.Thunk();
                hs_sat26Dg8X.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26Dg8X);
            };
            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord32, hs_x26DfWv, hs_sat26Dg8U);
        }
    };
    hs_zdcsucc425uRnY.evaluate = function (hs_x26DfWC) {
        var hs_sat26Dg90 = new $hs.Thunk();
        hs_sat26Dg90.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
        };
        var hs_wild26Dg91 = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32, hs_x26DfWC, hs_sat26Dg90);
        switch (hs_wild26Dg91.tag) {
        case 1:
            var hs_sat26Dg93 = new $hs.Thunk();
            hs_sat26Dg93.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Word32\x00");
            };
            return $hs.modules.GHCziWord.hs_succError.hscall(hs_sat26Dg93);
        case 2:
            var hs_sat26Dg8Z = new $hs.Thunk();
            hs_sat26Dg8Z.evaluateOnce = function () {
                var hs_sat26Dg92 = new $hs.Thunk();
                hs_sat26Dg92.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26Dg92);
            };
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord32, hs_x26DfWC, hs_sat26Dg8Z);
        }
    };
    hs_zdctoRational425uRnZ.evaluate = function (hs_x26DfWJ) {
        var hs_sat26Dg9b = new $hs.Thunk();
        hs_sat26Dg9b.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        var hs_sat26Dg9a = new $hs.Thunk();
        hs_sat26Dg9a.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32, hs_x26DfWJ);
        };
        return $hs.modules.GHCziReal.hs_zv.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26Dg9a, hs_sat26Dg9b);
    };
    hs_zdcshowsPrec425uRo0.evaluate = function (hs_p26DfWO, hs_x26DfWP) {
        var hs_sat26Dg94 = new $hs.Thunk();
        hs_sat26Dg94.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32, hs_x26DfWP);
        };
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziNum.hs_zdfShowInteger, hs_p26DfWO, hs_sat26Dg94);
    };
    hs_zdcmaxBound425uRo1.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26Dg8G);
    };
    hs_zdcminBound425uRo2.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26Dg8H);
    };
    hs_zdcreadsPrec425uRqH.evaluate = function (hs_p26DfXh, hs_s26DfXi) {
        var hs_ds26DfXf = new $hs.Func(1);
        hs_ds26DfXf.evaluate = function (hs_ds126DfX2) {
            var hs_ds226Dg9H = hs_ds126DfX2;
            if (hs_ds126DfX2.notEvaluated) {
                hs_ds226Dg9H = hs_ds126DfX2.hscall();
            }
            switch (hs_ds226Dg9H.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_ds326DfX6 = hs_ds226Dg9H.data[0];
                var hs_ds426DfXe = hs_ds226Dg9H.data[1];
                var hs_wild26Dg9G = hs_ds326DfX6;
                if (hs_ds326DfX6.notEvaluated) {
                    hs_wild26Dg9G = hs_ds326DfX6.hscall();
                }
                var hs_x26DfXa = hs_wild26Dg9G.data[0];
                var hs_r26DfXc = hs_wild26Dg9G.data[1];
                var hs_sat26Dg9I = new $hs.Thunk();
                hs_sat26Dg9I.evaluateOnce = function () {
                    return hs_ds26DfXf.hscall(hs_ds426DfXe);
                };
                var hs_sat26Dg9J = new $hs.Thunk();
                hs_sat26Dg9J.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32, hs_x26DfXa);
                };
                var hs_sat26Dg9F = new $hs.Data(1);
                hs_sat26Dg9F.data = [hs_sat26Dg9J, hs_r26DfXc];
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26Dg9F, hs_sat26Dg9I];
                return $res;
            }
        };
        var hs_sat26Dg9E = new $hs.Thunk();
        hs_sat26Dg9E.evaluateOnce = function () {
            return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziRead.hs_zdfReadInteger, hs_p26DfXh, hs_s26DfXi);
        };
        return hs_ds26DfXf.hscall(hs_sat26Dg9E);
    };
    this.hs_zdfReadWord32.data = [hs_zdcreadsPrec425uRqH, hs_zdcreadList425uRr6, hs_zdcreadPrec425uRr5, hs_zdcreadListPrec425uRr4];
    hs_zdcreadListPrec425uRr4.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadPrec425uRr5.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadList425uRr6.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadList.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdccomplement425uRr7.evaluate = function (hs_ds26DfXp) {
        var hs_wild26Dg9K = hs_ds26DfXp;
        if (hs_ds26DfXp.notEvaluated) {
            hs_wild26Dg9K = hs_ds26DfXp.hscall();
        }
        var hs_xzh26DfXu = hs_wild26Dg9K.data[0];
        var hs_wild126Dg9L = $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
        var hs_mbzh26DfXv = hs_wild126Dg9L.data[0];
        var hs_sat26Dg9M = hs_xzh26DfXu ^ hs_mbzh26DfXv;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dg9M];
        return $res;
    };
    this.hs_zdfBitsWord32.data = [$hs.modules.GHCziWord.hs_zdfNumWord32, hs_zdczizazi325uQVK, hs_zdczizbzi325uQVy, hs_zdcxor325uQVm, hs_zdccomplement425uRr7, hs_zdcshift325uQV4, hs_zdcrotate325uQUK, hs_zdcbit425uRrp, hs_zdcsetBit425uRro, hs_zdcclearBit425uRrn, hs_zdccomplementBit425uRrm, hs_zdctestBit425uRrl, hs_zdcbitSizze325uQUH, hs_zdcisSigned325uQUE, hs_zdcshiftL425uRrk, hs_zdcshiftR425uRrj, hs_zdcrotateL425uRri, hs_zdcrotateR425uRrh];
    hs_zdcrotateR425uRrh.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmrotateR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotateL425uRri.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmrotateL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshiftR425uRrj.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmshiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshiftL425uRrk.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmshiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdctestBit425uRrl.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmtestBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdccomplementBit425uRrm.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmcomplementBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcclearBit425uRrn.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmclearBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcsetBit425uRro.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmsetBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcbit425uRrp.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmbit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrange425uRrq.evaluate = function (hs_ds26DfXI) {
        var hs_wild26Dg9N = hs_ds26DfXI;
        if (hs_ds26DfXI.notEvaluated) {
            hs_wild26Dg9N = hs_ds26DfXI.hscall();
        }
        var hs_m26DfXM = hs_wild26Dg9N.data[0];
        var hs_n26DfXN = hs_wild26Dg9N.data[1];
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32, hs_m26DfXM, hs_n26DfXN);
    };
    hs_zdcunsafeIndex425uRry.evaluate = function (hs_ds26DfXR, hs_i26DfXV) {
        var hs_wild26Dg9P = hs_ds26DfXR;
        if (hs_ds26DfXR.notEvaluated) {
            hs_wild26Dg9P = hs_ds26DfXR.hscall();
        }
        var hs_m26DfXW = hs_wild26Dg9P.data[0];
        var hs_sat26Dg9O = new $hs.Thunk();
        hs_sat26Dg9O.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord32, hs_i26DfXV, hs_m26DfXW);
        };
        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dg9O);
    };
    this.hs_zdfIxWord32.data = [$hs.modules.GHCziWord.hs_zdfOrdWord32, hs_zdcrange425uRrq, hs_zdcindex425uRrK, hs_zdcunsafeIndex425uRry, hs_zdcinRange425uRns, hs_zdcrangeSizze425uRrJ, hs_zdcunsafeRangeSizze425uRrI];
    hs_zdcunsafeRangeSizze425uRrI.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmunsafeRangeSizze.hscall($hs.modules.GHCziWord.hs_zdfIxWord32);
    };
    hs_zdcrangeSizze425uRrJ.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmrangeSizze.hscall($hs.modules.GHCziWord.hs_zdfIxWord32);
    };
    hs_zdcindex425uRrK.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmindex.hscall($hs.modules.GHCziWord.hs_zdfIxWord32);
    };
    this.hs_Wzh.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
    this.hs_W8zh.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
    this.hs_W16zh.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
    this.hs_W32zh.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
    this.hs_W64zh.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
};
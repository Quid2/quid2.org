
$hs.modules.GHCziWord = new $hs.Module();
$hs.modules.GHCziWord.dependencies = ["GHC.IntWord64", "GHC.Integer", "GHC.Base", "GHC.Enum", "GHC.Num", "GHC.Real", "GHC.Show", "GHC.Err", "GHC.Classes", "GHC.Arr", "GHC.Read", "Data.Bits"];
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
    this.hs_zdfNumWord8 = new $hs.Data(1);
    this.hs_zdfRealWord8 = new $hs.Data(1);
    this.hs_zdfEnumWord8 = new $hs.Data(1);
    this.hs_zdfIntegralWord8 = new $hs.Data(1);
    this.hs_zdfReadWord8 = new $hs.Data(1);
    this.hs_zdfBitsWord8 = new $hs.Data(1);
    this.hs_zdfIxWord8 = new $hs.Data(1);
    this.hs_zdfEqWord16 = new $hs.Data(1);
    this.hs_zdfOrdWord16 = new $hs.Data(1);
    this.hs_zdfBoundedWord16 = new $hs.Data(1);
    this.hs_zdfShowWord16 = new $hs.Data(1);
    this.hs_zdfNumWord16 = new $hs.Data(1);
    this.hs_zdfRealWord16 = new $hs.Data(1);
    this.hs_zdfEnumWord16 = new $hs.Data(1);
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
    this.hs_predError.evaluate = function (hs_instzuty26DCzc) {
        $hs.modules.GHCziWord.loadDependencies();
        return this.evaluate(hs_instzuty26DCzc);
    };
    this.hs_succError.notEvaluated = true;
    this.hs_succError.evaluate = function (hs_instzuty26DCzi) {
        $hs.modules.GHCziWord.loadDependencies();
        return this.evaluate(hs_instzuty26DCzi);
    };
    this.hs_fromEnumError.notEvaluated = true;
    this.hs_fromEnumError.evaluate = function (hs_zddShow26DCzu) {
        $hs.modules.GHCziWord.loadDependencies();
        return this.evaluate(hs_zddShow26DCzu);
    };
    this.hs_toEnumError.notEvaluated = true;
    this.hs_toEnumError.evaluate = function (hs_zddShow26DCzW) {
        $hs.modules.GHCziWord.loadDependencies();
        return this.evaluate(hs_zddShow26DCzW);
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
    this.hs_zdfEnumWord8.notEvaluated = true;
    this.hs_zdfEnumWord8.evaluate = function () {
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
    this.hs_zdfEnumWord16.notEvaluated = true;
    this.hs_zdfEnumWord16.evaluate = function () {
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
    this.hs_zdfNumWord8.notEvaluated = false;
    this.hs_zdfNumWord8.evaluate = function () {
        return this;
    };
    this.hs_zdfRealWord8.notEvaluated = false;
    this.hs_zdfRealWord8.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumWord8.notEvaluated = false;
    this.hs_zdfEnumWord8.evaluate = function () {
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
    this.hs_zdfNumWord16.notEvaluated = false;
    this.hs_zdfNumWord16.evaluate = function () {
        return this;
    };
    this.hs_zdfRealWord16.notEvaluated = false;
    this.hs_zdfRealWord16.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumWord16.notEvaluated = false;
    this.hs_zdfEnumWord16.evaluate = function () {
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
    var hs_shiftRL64zh25sepm = new $hs.Func(2);
    var hs_shiftL64zh25sepk = new $hs.Func(2);
    var hs_zdcfromInteger25ve49 = new $hs.Func(1);
    var hs_zdcsignum25ve4f = new $hs.Func(1);
    var hs_zdcabs25ve4n = new $hs.Func(1);
    var hs_zdcnegate25ve4r = new $hs.Func(1);
    var hs_zdczm25ve4B = new $hs.Func(2);
    var hs_zdczt25ve4O = new $hs.Func(2);
    var hs_zdczp25ve51 = new $hs.Func(2);
    var hs_zdctoInteger25ve5e = new $hs.Func(1);
    var hs_zdcmaxBound25ve5o = new $hs.Thunk();
    var hs_zdcminBound25ve5r = new $hs.Data(1);
    var hs_zdcisSigned25ve5t = new $hs.Func(1);
    var hs_zdcbitSizze25ve5x = new $hs.Func(1);
    var hs_zdcrotate25ve5B = new $hs.Func(2);
    var hs_zdcshift25ve5Y = new $hs.Func(2);
    var hs_zdccomplement25ve6g = new $hs.Func(1);
    var hs_zdcxor25ve6r = new $hs.Func(2);
    var hs_zdczizbzi25ve6E = new $hs.Func(2);
    var hs_zdczizazi25ve6R = new $hs.Func(2);
    var hs_zdcfromInteger125ve74 = new $hs.Func(1);
    var hs_zdcabs125ve7b = new $hs.Func(1);
    var hs_zdcnegate125ve7f = new $hs.Func(1);
    var hs_zdczm125ve7q = new $hs.Func(2);
    var hs_zdczt125ve7E = new $hs.Func(2);
    var hs_zdczp125ve7S = new $hs.Func(2);
    var hs_zdcfromEnum25ve86 = new $hs.Func(1);
    var hs_zdctoInteger125ve8e = new $hs.Func(1);
    var hs_zdcisSigned125ve8m = new $hs.Func(1);
    var hs_zdcbitSizze125ve8q = new $hs.Func(1);
    var hs_zdcrotate125ve8u = new $hs.Func(2);
    var hs_zdcshift125ve8R = new $hs.Func(2);
    var hs_zdcxor125ve9a = new $hs.Func(2);
    var hs_zdczizbzi125ve9n = new $hs.Func(2);
    var hs_zdczizazi125ve9A = new $hs.Func(2);
    var hs_zdcfromInteger225ve9N = new $hs.Func(1);
    var hs_zdcabs225ve9U = new $hs.Func(1);
    var hs_zdcnegate225ve9Y = new $hs.Func(1);
    var hs_zdczm225vea9 = new $hs.Func(2);
    var hs_zdczt225vean = new $hs.Func(2);
    var hs_zdczp225veaB = new $hs.Func(2);
    var hs_zdcfromEnum125veaP = new $hs.Func(1);
    var hs_zdctoInteger225veaX = new $hs.Func(1);
    var hs_zdcisSigned225veb5 = new $hs.Func(1);
    var hs_zdcbitSizze225veb9 = new $hs.Func(1);
    var hs_zdcrotate225vebd = new $hs.Func(2);
    var hs_zdcshift225vebA = new $hs.Func(2);
    var hs_zdcxor225vebT = new $hs.Func(2);
    var hs_zdczizbzi225vec6 = new $hs.Func(2);
    var hs_zdczizazi225vecj = new $hs.Func(2);
    var hs_zdcfromInteger325vecw = new $hs.Func(1);
    var hs_zdcabs325vecD = new $hs.Func(1);
    var hs_zdcnegate325vecH = new $hs.Func(1);
    var hs_zdczm325vecS = new $hs.Func(2);
    var hs_zdczt325ved6 = new $hs.Func(2);
    var hs_zdczp325vedk = new $hs.Func(2);
    var hs_zdctoInteger325vedy = new $hs.Func(1);
    var hs_zdcisSigned325vedI = new $hs.Func(1);
    var hs_zdcbitSizze325vedM = new $hs.Func(1);
    var hs_zdcrotate325vedQ = new $hs.Func(2);
    var hs_zdcshift325veed = new $hs.Func(2);
    var hs_zdcxor325veew = new $hs.Func(2);
    var hs_zdczizbzi325veeJ = new $hs.Func(2);
    var hs_zdczizazi325veeW = new $hs.Func(2);
    var hs_zdczsze25vef9 = new $hs.Func(2);
    var hs_zdczeze25vefl = new $hs.Func(2);
    var hs_zdczlze25vefx = new $hs.Func(2);
    var hs_zdczg25vefJ = new $hs.Func(2);
    var hs_zdczgze25vefV = new $hs.Func(2);
    var hs_zdczl25veg7 = new $hs.Func(2);
    var hs_zdcmin25vegj = new $hs.Thunk();
    var hs_zdcmax25vegl = new $hs.Thunk();
    var hs_zdccompare25vegn = new $hs.Thunk();
    var hs_zdcfromInteger425vegp = new $hs.Func(1);
    var hs_zdcabs425vegv = new $hs.Func(1);
    var hs_zdcnegate425vegz = new $hs.Func(1);
    var hs_zdczm425vegM = new $hs.Func(2);
    var hs_zdczt425veh6 = new $hs.Func(2);
    var hs_zdczp425vehq = new $hs.Func(2);
    var hs_zdctoInteger425vehK = new $hs.Func(1);
    var hs_zdcisSigned425vehR = new $hs.Func(1);
    var hs_zdcbitSizze425vehV = new $hs.Func(1);
    var hs_zdcrotate425vehZ = new $hs.Func(2);
    var hs_zdcshift425veio = new $hs.Func(2);
    var hs_zdccomplement125veiP = new $hs.Func(1);
    var hs_zdcxor425veiY = new $hs.Func(2);
    var hs_zdczizbzi425vejc = new $hs.Func(2);
    var hs_zdczizazi425vejq = new $hs.Func(2);
    var hs_sat26DDmH = new $hs.Thunk();
    var hs_sat26DDmI = new $hs.Thunk();
    var hs_zdcenumFromThenTo25vejE = new $hs.Thunk();
    var hs_zdcenumFromTo25vejG = new $hs.Thunk();
    var hs_zdcenumFromThen25vejI = new $hs.Thunk();
    var hs_zdcenumFrom25vejK = new $hs.Thunk();
    var hs_zdcfromEnum225vejM = new $hs.Func(1);
    var hs_zdctoEnum25vejO = new $hs.Func(1);
    var hs_zdcpred25vejQ = new $hs.Func(1);
    var hs_zdcsucc25vejS = new $hs.Func(1);
    var hs_zdcdivMod25vejU = new $hs.Func(2);
    var hs_zdcquotRem25vejW = new $hs.Func(2);
    var hs_zdcmod25vejY = new $hs.Func(2);
    var hs_zdcdiv25vek0 = new $hs.Func(2);
    var hs_zdcrem25vek2 = new $hs.Func(2);
    var hs_zdcshowList25vek4 = new $hs.Thunk();
    var hs_zdcshow25vek6 = new $hs.Thunk();
    var hs_zdcshowsPrec25vek8 = new $hs.Func(2);
    var hs_zdcsignum125veka = new $hs.Func(1);
    var hs_zdcquot25vekc = new $hs.Func(2);
    var hs_zdctoRational25veke = new $hs.Func(1);
    var hs_zdcmaxBound125vekg = new $hs.Thunk();
    var hs_zdcminBound125veki = new $hs.Thunk();
    var hs_zdcrotateR25ven6 = new $hs.Thunk();
    var hs_zdcrotateL25ven8 = new $hs.Thunk();
    var hs_zdcshiftR25vena = new $hs.Thunk();
    var hs_zdcshiftL25venc = new $hs.Thunk();
    var hs_zdctestBit25vene = new $hs.Thunk();
    var hs_zdccomplementBit25veng = new $hs.Thunk();
    var hs_zdcclearBit25veni = new $hs.Thunk();
    var hs_zdcsetBit25venk = new $hs.Thunk();
    var hs_zdcbit25venm = new $hs.Thunk();
    var hs_zdcinRange25veno = new $hs.Func(2);
    var hs_zdcunsafeIndex25venB = new $hs.Func(2);
    var hs_zdcrange25venM = new $hs.Func(1);
    var hs_zdcunsafeRangeSizze25venV = new $hs.Thunk();
    var hs_zdcrangeSizze25venX = new $hs.Thunk();
    var hs_zdcindex25venZ = new $hs.Thunk();
    var hs_zdcreadsPrec25veo1 = new $hs.Func(2);
    var hs_zdcreadListPrec25veop = new $hs.Thunk();
    var hs_zdcreadPrec25veor = new $hs.Thunk();
    var hs_zdcreadList25veot = new $hs.Thunk();
    var hs_zdczlze125veov = new $hs.Func(2);
    var hs_zdczg125veoH = new $hs.Func(2);
    var hs_zdczgze125veoT = new $hs.Func(2);
    var hs_zdczl125vep5 = new $hs.Func(2);
    var hs_zdccompare125veph = new $hs.Func(2);
    var hs_zdczeze125vepv = new $hs.Func(2);
    var hs_zdczsze125vepH = new $hs.Func(2);
    var hs_zdcmin125vepO = new $hs.Thunk();
    var hs_zdcmax125vepQ = new $hs.Thunk();
    var hs_zdcinRange125vepS = new $hs.Func(2);
    var hs_zdcquot125veq5 = new $hs.Func(2);
    var hs_zdcrem125veqm = new $hs.Func(2);
    var hs_zdcdiv125veqD = new $hs.Func(2);
    var hs_zdcmod125veqU = new $hs.Func(2);
    var hs_zdcquotRem125verb = new $hs.Func(2);
    var hs_zdcdivMod125verw = new $hs.Func(2);
    var hs_zdcshowList125verR = new $hs.Thunk();
    var hs_zdcshow125verT = new $hs.Thunk();
    var hs_zdctoRational125verV = new $hs.Func(1);
    var hs_zdcenumFromThenTo125verX = new $hs.Thunk();
    var hs_zdcenumFromTo125verZ = new $hs.Thunk();
    var hs_zdcenumFromThen125ves1 = new $hs.Thunk();
    var hs_zdcenumFrom125ves3 = new $hs.Thunk();
    var hs_zdcfromEnum325ves5 = new $hs.Func(1);
    var hs_zdcshowsPrec125ves7 = new $hs.Func(2);
    var hs_zdctoEnum125ves9 = new $hs.Func(1);
    var hs_zdcpred125vesb = new $hs.Func(1);
    var hs_zdcsucc125vesd = new $hs.Func(1);
    var hs_zdcrotateR125vesY = new $hs.Thunk();
    var hs_zdcrotateL125vet0 = new $hs.Thunk();
    var hs_zdcshiftR125vet2 = new $hs.Thunk();
    var hs_zdcshiftL125vet4 = new $hs.Thunk();
    var hs_zdctestBit125vet6 = new $hs.Thunk();
    var hs_zdccomplementBit125vet8 = new $hs.Thunk();
    var hs_zdcclearBit125veta = new $hs.Thunk();
    var hs_zdcsetBit125vetc = new $hs.Thunk();
    var hs_zdcbit125vete = new $hs.Thunk();
    var hs_zdcreadsPrec125vetg = new $hs.Func(2);
    var hs_zdcreadListPrec125vetE = new $hs.Thunk();
    var hs_zdcreadPrec125vetG = new $hs.Thunk();
    var hs_zdcreadList125vetI = new $hs.Thunk();
    var hs_zdcunsafeIndex125vetK = new $hs.Func(2);
    var hs_zdcrange125vetV = new $hs.Func(1);
    var hs_zdcunsafeRangeSizze125veu4 = new $hs.Thunk();
    var hs_zdcrangeSizze125veu6 = new $hs.Thunk();
    var hs_zdcindex125veu8 = new $hs.Thunk();
    var hs_zdczlze225veua = new $hs.Func(2);
    var hs_zdczg225veum = new $hs.Func(2);
    var hs_zdczgze225veuy = new $hs.Func(2);
    var hs_zdczl225veuK = new $hs.Func(2);
    var hs_zdccompare225veuW = new $hs.Func(2);
    var hs_zdczeze225veva = new $hs.Func(2);
    var hs_zdczsze225vevm = new $hs.Func(2);
    var hs_zdcmin225vevt = new $hs.Thunk();
    var hs_zdcmax225vevv = new $hs.Thunk();
    var hs_zdcinRange225vevx = new $hs.Func(2);
    var hs_sat26DDpt = new $hs.Thunk();
    var hs_sat26DDpu = new $hs.Thunk();
    var hs_zdcshowList225vevK = new $hs.Thunk();
    var hs_zdcshow225vevM = new $hs.Thunk();
    var hs_zdctoRational225vevO = new $hs.Func(1);
    var hs_zdcenumFromThenTo225vevQ = new $hs.Thunk();
    var hs_zdcenumFromTo225vevS = new $hs.Thunk();
    var hs_zdcenumFromThen225vevU = new $hs.Thunk();
    var hs_zdcenumFrom225vevW = new $hs.Thunk();
    var hs_zdctoEnum225vevY = new $hs.Func(1);
    var hs_zdcpred225vew0 = new $hs.Func(1);
    var hs_zdcsucc225vew2 = new $hs.Func(1);
    var hs_zdcdivMod225vew4 = new $hs.Func(2);
    var hs_zdcquotRem225vew6 = new $hs.Func(2);
    var hs_zdcmod225vew8 = new $hs.Func(2);
    var hs_zdcdiv225vewa = new $hs.Func(2);
    var hs_zdcrem225vewc = new $hs.Func(2);
    var hs_zdcshowsPrec225vewe = new $hs.Func(2);
    var hs_zdcsignum225vewg = new $hs.Func(1);
    var hs_zdcquot225vewi = new $hs.Func(2);
    var hs_zdcmaxBound225vewk = new $hs.Thunk();
    var hs_zdcminBound225vewm = new $hs.Thunk();
    var hs_zdcreadsPrec225veyR = new $hs.Func(2);
    var hs_zdcreadListPrec225vezf = new $hs.Thunk();
    var hs_zdcreadPrec225vezh = new $hs.Thunk();
    var hs_zdcreadList225vezj = new $hs.Thunk();
    var hs_zdccomplement225vezl = new $hs.Func(1);
    var hs_zdcrotateR225vezw = new $hs.Thunk();
    var hs_zdcrotateL225vezy = new $hs.Thunk();
    var hs_zdcshiftR225vezA = new $hs.Thunk();
    var hs_zdcshiftL225vezC = new $hs.Thunk();
    var hs_zdctestBit225vezE = new $hs.Thunk();
    var hs_zdccomplementBit225vezG = new $hs.Thunk();
    var hs_zdcclearBit225vezI = new $hs.Thunk();
    var hs_zdcsetBit225vezK = new $hs.Thunk();
    var hs_zdcbit225vezM = new $hs.Thunk();
    var hs_zdcunsafeIndex225vezO = new $hs.Func(2);
    var hs_zdcrange225vezZ = new $hs.Func(1);
    var hs_zdcunsafeRangeSizze225veA8 = new $hs.Thunk();
    var hs_zdcrangeSizze225veAa = new $hs.Thunk();
    var hs_zdcindex225veAc = new $hs.Thunk();
    var hs_zdczlze325veAe = new $hs.Func(2);
    var hs_zdczg325veAq = new $hs.Func(2);
    var hs_zdczgze325veAC = new $hs.Func(2);
    var hs_zdczl325veAO = new $hs.Func(2);
    var hs_zdccompare325veB0 = new $hs.Func(2);
    var hs_zdczeze325veBe = new $hs.Func(2);
    var hs_zdczsze325veBq = new $hs.Func(2);
    var hs_zdcmin325veBx = new $hs.Thunk();
    var hs_zdcmax325veBz = new $hs.Thunk();
    var hs_zdcinRange325veBB = new $hs.Func(2);
    var hs_sat26DDqV = new $hs.Thunk();
    var hs_sat26DDqW = new $hs.Thunk();
    var hs_zdcshowList325veBO = new $hs.Thunk();
    var hs_zdcshow325veBQ = new $hs.Thunk();
    var hs_zdctoRational325veBS = new $hs.Func(1);
    var hs_zdcenumFromThenTo325veBU = new $hs.Thunk();
    var hs_zdcenumFromTo325veBW = new $hs.Thunk();
    var hs_zdcenumFromThen325veBY = new $hs.Thunk();
    var hs_zdcenumFrom325veC0 = new $hs.Thunk();
    var hs_zdctoEnum325veC2 = new $hs.Func(1);
    var hs_zdcpred325veC4 = new $hs.Func(1);
    var hs_zdcsucc325veC6 = new $hs.Func(1);
    var hs_zdcdivMod325veC8 = new $hs.Func(2);
    var hs_zdcquotRem325veCa = new $hs.Func(2);
    var hs_zdcmod325veCc = new $hs.Func(2);
    var hs_zdcdiv325veCe = new $hs.Func(2);
    var hs_zdcrem325veCg = new $hs.Func(2);
    var hs_zdcshowsPrec325veCi = new $hs.Func(2);
    var hs_zdcsignum325veCk = new $hs.Func(1);
    var hs_zdcquot325veCm = new $hs.Func(2);
    var hs_zdcmaxBound325veCo = new $hs.Thunk();
    var hs_zdcminBound325veCq = new $hs.Thunk();
    var hs_zdcreadsPrec325veEV = new $hs.Func(2);
    var hs_zdcreadListPrec325veFj = new $hs.Thunk();
    var hs_zdcreadPrec325veFl = new $hs.Thunk();
    var hs_zdcreadList325veFn = new $hs.Thunk();
    var hs_zdccomplement325veFp = new $hs.Func(1);
    var hs_zdcrotateR325veFA = new $hs.Thunk();
    var hs_zdcrotateL325veFC = new $hs.Thunk();
    var hs_zdcshiftR325veFE = new $hs.Thunk();
    var hs_zdcshiftL325veFG = new $hs.Thunk();
    var hs_zdctestBit325veFI = new $hs.Thunk();
    var hs_zdccomplementBit325veFK = new $hs.Thunk();
    var hs_zdcclearBit325veFM = new $hs.Thunk();
    var hs_zdcsetBit325veFO = new $hs.Thunk();
    var hs_zdcbit325veFQ = new $hs.Thunk();
    var hs_zdcunsafeIndex325veFS = new $hs.Func(2);
    var hs_zdcrange325veG3 = new $hs.Func(1);
    var hs_zdcunsafeRangeSizze325veGc = new $hs.Thunk();
    var hs_zdcrangeSizze325veGe = new $hs.Thunk();
    var hs_zdcindex325veGg = new $hs.Thunk();
    var hs_zdczlze425veGi = new $hs.Func(2);
    var hs_zdczg425veGu = new $hs.Func(2);
    var hs_zdczgze425veGG = new $hs.Func(2);
    var hs_zdczl425veGS = new $hs.Func(2);
    var hs_zdccompare425veH4 = new $hs.Func(2);
    var hs_zdczeze425veHi = new $hs.Func(2);
    var hs_zdczsze425veHu = new $hs.Func(2);
    var hs_zdcmin425veHB = new $hs.Thunk();
    var hs_zdcmax425veHD = new $hs.Thunk();
    var hs_zdcinRange425veHF = new $hs.Func(2);
    var hs_sat26DDsn = new $hs.Thunk();
    var hs_sat26DDso = new $hs.Thunk();
    var hs_zdcenumFromThenTo425veHS = new $hs.Thunk();
    var hs_zdcenumFromTo425veHU = new $hs.Thunk();
    var hs_zdcenumFromThen425veHW = new $hs.Thunk();
    var hs_zdcenumFrom425veHY = new $hs.Thunk();
    var hs_zdcfromEnum425veI0 = new $hs.Func(1);
    var hs_zdctoEnum425veI2 = new $hs.Func(1);
    var hs_zdcpred425veI4 = new $hs.Func(1);
    var hs_zdcsucc425veI6 = new $hs.Func(1);
    var hs_zdcdivMod425veI8 = new $hs.Func(2);
    var hs_zdcquotRem425veIa = new $hs.Func(2);
    var hs_zdcmod425veIc = new $hs.Func(2);
    var hs_zdcdiv425veIe = new $hs.Func(2);
    var hs_zdcrem425veIg = new $hs.Func(2);
    var hs_zdcshowList425veIi = new $hs.Thunk();
    var hs_zdcshow425veIk = new $hs.Thunk();
    var hs_zdcshowsPrec425veIm = new $hs.Func(2);
    var hs_zdcsignum425veIo = new $hs.Func(1);
    var hs_zdcquot425veIq = new $hs.Func(2);
    var hs_zdctoRational425veIs = new $hs.Func(1);
    var hs_zdcmaxBound425veIu = new $hs.Thunk();
    var hs_zdcminBound425veIw = new $hs.Thunk();
    var hs_zdcreadsPrec425veLc = new $hs.Func(2);
    var hs_zdcreadListPrec425veLA = new $hs.Thunk();
    var hs_zdcreadPrec425veLC = new $hs.Thunk();
    var hs_zdcreadList425veLE = new $hs.Thunk();
    var hs_zdccomplement425veLG = new $hs.Func(1);
    var hs_zdcrotateR425veLR = new $hs.Thunk();
    var hs_zdcrotateL425veLT = new $hs.Thunk();
    var hs_zdcshiftR425veLV = new $hs.Thunk();
    var hs_zdcshiftL425veLX = new $hs.Thunk();
    var hs_zdctestBit425veLZ = new $hs.Thunk();
    var hs_zdccomplementBit425veM1 = new $hs.Thunk();
    var hs_zdcclearBit425veM3 = new $hs.Thunk();
    var hs_zdcsetBit425veM5 = new $hs.Thunk();
    var hs_zdcbit425veM7 = new $hs.Thunk();
    var hs_zdcrange425veM9 = new $hs.Func(1);
    var hs_zdcunsafeIndex425veMi = new $hs.Func(2);
    var hs_zdcunsafeRangeSizze425veMt = new $hs.Thunk();
    var hs_zdcrangeSizze425veMv = new $hs.Thunk();
    var hs_zdcindex425veMx = new $hs.Thunk();
    hs_shiftRL64zh25sepm.evaluate = function (hs_a26DCz2, hs_b26DCz0) {
        var hs_wild26DDiO = hs_b26DCz0 >= 64 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26DDiO.tag) {
        case 1:
            return $hs.modules.GHCziIntWord64.hs_uncheckedShiftRL64zh.hscall(hs_a26DCz2, hs_b26DCz0);
        case 2:
            var hs_sat26DDiP = 0;
            return $hs.modules.GHCziIntWord64.hs_wordToWord64zh.hscall(hs_sat26DDiP);
        }
    };
    hs_shiftL64zh25sepk.evaluate = function (hs_a26DCz8, hs_b26DCz6) {
        var hs_wild26DDiQ = hs_b26DCz6 >= 64 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26DDiQ.tag) {
        case 1:
            return $hs.modules.GHCziIntWord64.hs_uncheckedShiftL64zh.hscall(hs_a26DCz8, hs_b26DCz6);
        case 2:
            var hs_sat26DDiR = 0;
            return $hs.modules.GHCziIntWord64.hs_wordToWord64zh.hscall(hs_sat26DDiR);
        }
    };
    this.hs_predError.evaluate = function (hs_instzuty26DCzc) {
        var hs_sat26DDiV = new $hs.Thunk();
        hs_sat26DDiV.evaluateOnce = function () {
            var hs_sat26DDiT = new $hs.Thunk();
            hs_sat26DDiT.evaluateOnce = function () {
                var hs_sat26DDiS = new $hs.Thunk();
                hs_sat26DDiS.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("}: tried to take `pred' of minBound\x00");
                };
                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_instzuty26DCzc, hs_sat26DDiS);
            };
            var hs_sat26DDiU = new $hs.Thunk();
            hs_sat26DDiU.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Enum.pred{\x00");
            };
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DDiU, hs_sat26DDiT);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziErr.hs_error, hs_sat26DDiV);
    };
    this.hs_succError.evaluate = function (hs_instzuty26DCzi) {
        var hs_sat26DDiZ = new $hs.Thunk();
        hs_sat26DDiZ.evaluateOnce = function () {
            var hs_sat26DDiX = new $hs.Thunk();
            hs_sat26DDiX.evaluateOnce = function () {
                var hs_sat26DDiW = new $hs.Thunk();
                hs_sat26DDiW.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("}: tried to take `succ' of maxBound\x00");
                };
                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_instzuty26DCzi, hs_sat26DDiW);
            };
            var hs_sat26DDiY = new $hs.Thunk();
            hs_sat26DDiY.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Enum.succ{\x00");
            };
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DDiY, hs_sat26DDiX);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziErr.hs_error, hs_sat26DDiZ);
    };
    this.hs_fromEnumError.evaluate = function (hs_zddShow26DCzu) {
        var hs_zddShow126DCzo = new $hs.Thunk();
        hs_zddShow126DCzo.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUZR.hscall($hs.modules.GHCziShow.hs_zdfShowInt, $hs.modules.GHCziShow.hs_zdfShowInt);
        };
        var hs_sat26DDj1 = new $hs.Func(2);
        hs_sat26DDj1.evaluate = function (hs_instzuty26DCzs, hs_x26DCzv) {
            var hs_sat26DDj0 = new $hs.Thunk();
            hs_sat26DDj0.evaluateOnce = function () {
                var hs_sat26DCzR = new $hs.Thunk();
                hs_sat26DCzR.evaluateOnce = function () {
                    var hs_sat26DCzQ = new $hs.Thunk();
                    hs_sat26DCzQ.evaluateOnce = function () {
                        var hs_sat26DCzO = new $hs.Thunk();
                        hs_sat26DCzO.evaluateOnce = function () {
                            var hs_sat26DCzM = new $hs.Thunk();
                            hs_sat26DCzM.evaluateOnce = function () {
                                var hs_sat26DCzK = new $hs.Thunk();
                                hs_sat26DCzK.evaluateOnce = function () {
                                    var hs_sat26DCzH = new $hs.Thunk();
                                    hs_sat26DCzH.evaluateOnce = function () {
                                        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziEnum.hs_zdfBoundedInt);
                                    };
                                    var hs_sat26DCzI = new $hs.Thunk();
                                    hs_sat26DCzI.evaluateOnce = function () {
                                        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziEnum.hs_zdfBoundedInt);
                                    };
                                    var hs_sat26DCzJ = new $hs.Data(1);
                                    hs_sat26DCzJ.data = [hs_sat26DCzI, hs_sat26DCzH];
                                    return $hs.modules.GHCziShow.hs_show.hscall(hs_zddShow126DCzo, hs_sat26DCzJ);
                                };
                                var hs_sat26DCzL = new $hs.Thunk();
                                hs_sat26DCzL.evaluateOnce = function () {
                                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall(") is outside of Int's bounds \x00");
                                };
                                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DCzL, hs_sat26DCzK);
                            };
                            var hs_sat26DCzN = new $hs.Thunk();
                            hs_sat26DCzN.evaluateOnce = function () {
                                return $hs.modules.GHCziShow.hs_show.hscall(hs_zddShow26DCzu, hs_x26DCzv);
                            };
                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DCzN, hs_sat26DCzM);
                        };
                        var hs_sat26DCzP = new $hs.Thunk();
                        hs_sat26DCzP.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("}: value (\x00");
                        };
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DCzP, hs_sat26DCzO);
                    };
                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_instzuty26DCzs, hs_sat26DCzQ);
                };
                var hs_sat26DCzS = new $hs.Thunk();
                hs_sat26DCzS.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Enum.fromEnum{\x00");
                };
                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DCzS, hs_sat26DCzR);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziErr.hs_error, hs_sat26DDj0);
        };
        if (hs_sat26DDj1.notEvaluated) {
            return hs_sat26DDj1.hscall();
        } else {
            return hs_sat26DDj1;
        }
    };
    this.hs_toEnumError.evaluate = function (hs_zddShow26DCzW) {
        var hs_zddShow126DCzX = new $hs.Thunk();
        hs_zddShow126DCzX.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUZR.hscall(hs_zddShow26DCzW, hs_zddShow26DCzW);
        };
        var hs_sat26DDj3 = new $hs.Func(3);
        hs_sat26DDj3.evaluate = function (hs_instzuty26DCA2, hs_i26DCA4, hs_bnds26DCA7) {
            var hs_sat26DDj2 = new $hs.Thunk();
            hs_sat26DDj2.evaluateOnce = function () {
                var hs_sat26DCAl = new $hs.Thunk();
                hs_sat26DCAl.evaluateOnce = function () {
                    var hs_sat26DCAk = new $hs.Thunk();
                    hs_sat26DCAk.evaluateOnce = function () {
                        var hs_sat26DCAi = new $hs.Thunk();
                        hs_sat26DCAi.evaluateOnce = function () {
                            var hs_sat26DCAg = new $hs.Thunk();
                            hs_sat26DCAg.evaluateOnce = function () {
                                var hs_sat26DCAe = new $hs.Thunk();
                                hs_sat26DCAe.evaluateOnce = function () {
                                    return $hs.modules.GHCziShow.hs_show.hscall(hs_zddShow126DCzX, hs_bnds26DCA7);
                                };
                                var hs_sat26DCAf = new $hs.Thunk();
                                hs_sat26DCAf.evaluateOnce = function () {
                                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall(") is outside of bounds \x00");
                                };
                                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DCAf, hs_sat26DCAe);
                            };
                            var hs_sat26DCAh = new $hs.Thunk();
                            hs_sat26DCAh.evaluateOnce = function () {
                                return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_i26DCA4);
                            };
                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DCAh, hs_sat26DCAg);
                        };
                        var hs_sat26DCAj = new $hs.Thunk();
                        hs_sat26DCAj.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("}: tag (\x00");
                        };
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DCAj, hs_sat26DCAi);
                    };
                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_instzuty26DCA2, hs_sat26DCAk);
                };
                var hs_sat26DCAm = new $hs.Thunk();
                hs_sat26DCAm.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Enum.toEnum{\x00");
                };
                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DCAm, hs_sat26DCAl);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziErr.hs_error, hs_sat26DDj2);
        };
        if (hs_sat26DDj3.notEvaluated) {
            return hs_sat26DDj3.hscall();
        } else {
            return hs_sat26DDj3;
        }
    };
    hs_zdcfromInteger25ve49.evaluate = function (hs_i26DCAr) {
        var hs_wild26DCAt = $hs.modules.GHCziInteger.hs_integerToWord.hscall(hs_i26DCAr);
        var $res = new $hs.Data(1);
        $res.data = [hs_wild26DCAt];
        return $res;
    };
    hs_zdcsignum25ve4f.evaluate = function (hs_ds26DCAx) {
        var hs_wild26DDj5 = hs_ds26DCAx;
        if (hs_ds26DCAx.notEvaluated) {
            hs_wild26DDj5 = hs_ds26DCAx.hscall();
        }
        var hs_ds126DCAA = hs_wild26DDj5.data[0];
        var hs_ds226DDj4 = hs_ds126DCAA;
        if (hs_ds126DCAA.notEvaluated) {
            hs_ds226DDj4 = hs_ds126DCAA.hscall();
        }
        switch (hs_ds226DDj4) {
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
    hs_zdcabs25ve4n.evaluate = function (hs_x26DCAF) {
        if (hs_x26DCAF.notEvaluated) {
            return hs_x26DCAF.hscall();
        } else {
            return hs_x26DCAF;
        }
    };
    hs_zdcnegate25ve4r.evaluate = function (hs_ds26DCAJ) {
        var hs_wild26DDj9 = hs_ds26DCAJ;
        if (hs_ds26DCAJ.notEvaluated) {
            hs_wild26DDj9 = hs_ds26DCAJ.hscall();
        }
        var hs_xzh26DCAM = hs_wild26DDj9.data[0];
        var hs_sat26DDj8 = hs_xzh26DCAM;
        var hs_sat26DDj7 = -hs_sat26DDj8;
        var hs_sat26DDj6 = hs_sat26DDj7;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DDj6];
        return $res;
    };
    hs_zdczm25ve4B.evaluate = function (hs_ds26DCAU, hs_ds126DCAX) {
        var hs_wild26DDjc = hs_ds26DCAU;
        if (hs_ds26DCAU.notEvaluated) {
            hs_wild26DDjc = hs_ds26DCAU.hscall();
        }
        var hs_xzh26DCB0 = hs_wild26DDjc.data[0];
        var hs_wild126DDjb = hs_ds126DCAX;
        if (hs_ds126DCAX.notEvaluated) {
            hs_wild126DDjb = hs_ds126DCAX.hscall();
        }
        var hs_yzh26DCB1 = hs_wild126DDjb.data[0];
        var hs_sat26DDja = ($hs.Int.addCarry(hs_xzh26DCB0, ~hs_yzh26DCB1, 1))[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DDja];
        return $res;
    };
    hs_zdczt25ve4O.evaluate = function (hs_ds26DCB7, hs_ds126DCBa) {
        var hs_wild26DDjf = hs_ds26DCB7;
        if (hs_ds26DCB7.notEvaluated) {
            hs_wild26DDjf = hs_ds26DCB7.hscall();
        }
        var hs_xzh26DCBd = hs_wild26DDjf.data[0];
        var hs_wild126DDje = hs_ds126DCBa;
        if (hs_ds126DCBa.notEvaluated) {
            hs_wild126DDje = hs_ds126DCBa.hscall();
        }
        var hs_yzh26DCBe = hs_wild126DDje.data[0];
        var hs_sat26DDjd = $hs.Int.mul(hs_xzh26DCBd, hs_yzh26DCBe);
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DDjd];
        return $res;
    };
    hs_zdczp25ve51.evaluate = function (hs_ds26DCBk, hs_ds126DCBn) {
        var hs_wild26DDji = hs_ds26DCBk;
        if (hs_ds26DCBk.notEvaluated) {
            hs_wild26DDji = hs_ds26DCBk.hscall();
        }
        var hs_xzh26DCBq = hs_wild26DDji.data[0];
        var hs_wild126DDjh = hs_ds126DCBn;
        if (hs_ds126DCBn.notEvaluated) {
            hs_wild126DDjh = hs_ds126DCBn.hscall();
        }
        var hs_yzh26DCBr = hs_wild126DDjh.data[0];
        var hs_sat26DDjg = ($hs.Int.addCarry(hs_xzh26DCBq, hs_yzh26DCBr, 0))[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DDjg];
        return $res;
    };
    hs_zdctoInteger25ve5e.evaluate = function (hs_ds26DCBw) {
        var hs_wild26DDjk = hs_ds26DCBw;
        if (hs_ds26DCBw.notEvaluated) {
            hs_wild26DDjk = hs_ds26DCBw.hscall();
        }
        var hs_xzh26DCBA = hs_wild26DDjk.data[0];
        var hs_izh26DCBB = hs_xzh26DCBA;
        var hs_wild126DDjj = hs_izh26DCBB >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild126DDjj.tag) {
        case 1:
            return $hs.modules.GHCziInteger.hs_wordToInteger.hscall(hs_xzh26DCBA);
        case 2:
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(hs_izh26DCBB);
        }
    };
    hs_zdcmaxBound25ve5o.evaluateOnce = function () {
        var hs_sat26DDjl = 4294967295;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DDjl];
        return $res;
    };
    hs_zdcminBound25ve5r.data = [0];
    this.hs_zdfBoundedWord.data = [hs_zdcminBound25ve5r, hs_zdcmaxBound25ve5o];
    hs_zdcisSigned25ve5t.evaluate = function (hs_ds26DCBL) {
        var $res = new $hs.Data(1);
        $res.data = [];
        return $res;
    };
    hs_zdcbitSizze25ve5x.evaluate = function (hs_ds26DCBP) {
        var $res = new $hs.Data(1);
        $res.data = [32];
        return $res;
    };
    hs_zdcrotate25ve5B.evaluate = function (hs_ds26DCBU, hs_ds126DCBX) {
        var hs_wild26DDjw = hs_ds26DCBU;
        if (hs_ds26DCBU.notEvaluated) {
            hs_wild26DDjw = hs_ds26DCBU.hscall();
        }
        var hs_xzh26DCC8 = hs_wild26DDjw.data[0];
        var hs_wild126DDjv = hs_ds126DCBX;
        if (hs_ds126DCBX.notEvaluated) {
            hs_wild126DDjv = hs_ds126DCBX.hscall();
        }
        var hs_izh26DCC1 = hs_wild126DDjv.data[0];
        var hs_sat26DDju = ($hs.Int.addCarry(32, ~1, 1))[0];
        var hs_sat26DDjt = hs_sat26DDju;
        var hs_sat26DDjs = hs_izh26DCC1;
        var hs_sat26DDjr = hs_sat26DDjs & hs_sat26DDjt;
        var hs_izqzh26DCC6 = hs_sat26DDjr;
        var hs_wild226DDjq = hs_izqzh26DCC6 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226DDjq.tag) {
        case 1:
            var hs_sat26DDjp = ($hs.Int.addCarry(32, ~hs_izqzh26DCC6, 1))[0];
            var hs_sat26DDjo = hs_xzh26DCC8 >> hs_sat26DDjp;
            var hs_sat26DDjn = hs_xzh26DCC8 << hs_izqzh26DCC6;
            var hs_sat26DDjm = hs_sat26DDjn | hs_sat26DDjo;
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DDjm];
            return $res;
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [hs_xzh26DCC8];
            return $res;
        }
    };
    hs_zdcshift25ve5Y.evaluate = function (hs_eta26DCCh, hs_eta126DCCk) {
        var hs_wild26DDjA = hs_eta26DCCh;
        if (hs_eta26DCCh.notEvaluated) {
            hs_wild26DDjA = hs_eta26DCCh.hscall();
        }
        var hs_xzh26DCCp = hs_wild26DDjA.data[0];
        var hs_wild126DDjz = hs_eta126DCCk;
        if (hs_eta126DCCk.notEvaluated) {
            hs_wild126DDjz = hs_eta126DCCk.hscall();
        }
        var hs_izh26DCCn = hs_wild126DDjz.data[0];
        var hs_wild226DDjy = hs_izh26DCCn >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226DDjy.tag) {
        case 1:
            var hs_sat26DDjx = -hs_izh26DCCn;
            var hs_wild326DCCs = $hs.modules.GHCziBase.hs_shiftRLzh.hscall(hs_xzh26DCCp, hs_sat26DDjx);
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DCCs];
            return $res;
        case 2:
            var hs_wild326DCCu = $hs.modules.GHCziBase.hs_shiftLzh.hscall(hs_xzh26DCCp, hs_izh26DCCn);
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DCCu];
            return $res;
        }
    };
    hs_zdccomplement25ve6g.evaluate = function (hs_ds26DCCy) {
        var hs_wild26DDjD = hs_ds26DCCy;
        if (hs_ds26DCCy.notEvaluated) {
            hs_wild26DDjD = hs_ds26DCCy.hscall();
        }
        var hs_xzh26DCCD = hs_wild26DDjD.data[0];
        var hs_wild126DDjC = $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord);
        var hs_mbzh26DCCE = hs_wild126DDjC.data[0];
        var hs_sat26DDjB = hs_xzh26DCCD ^ hs_mbzh26DCCE;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DDjB];
        return $res;
    };
    hs_zdcxor25ve6r.evaluate = function (hs_ds26DCCK, hs_ds126DCCN) {
        var hs_wild26DDjG = hs_ds26DCCK;
        if (hs_ds26DCCK.notEvaluated) {
            hs_wild26DDjG = hs_ds26DCCK.hscall();
        }
        var hs_xzh26DCCQ = hs_wild26DDjG.data[0];
        var hs_wild126DDjF = hs_ds126DCCN;
        if (hs_ds126DCCN.notEvaluated) {
            hs_wild126DDjF = hs_ds126DCCN.hscall();
        }
        var hs_yzh26DCCR = hs_wild126DDjF.data[0];
        var hs_sat26DDjE = hs_xzh26DCCQ ^ hs_yzh26DCCR;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DDjE];
        return $res;
    };
    hs_zdczizbzi25ve6E.evaluate = function (hs_ds26DCCX, hs_ds126DCD0) {
        var hs_wild26DDjJ = hs_ds26DCCX;
        if (hs_ds26DCCX.notEvaluated) {
            hs_wild26DDjJ = hs_ds26DCCX.hscall();
        }
        var hs_xzh26DCD3 = hs_wild26DDjJ.data[0];
        var hs_wild126DDjI = hs_ds126DCD0;
        if (hs_ds126DCD0.notEvaluated) {
            hs_wild126DDjI = hs_ds126DCD0.hscall();
        }
        var hs_yzh26DCD4 = hs_wild126DDjI.data[0];
        var hs_sat26DDjH = hs_xzh26DCD3 | hs_yzh26DCD4;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DDjH];
        return $res;
    };
    hs_zdczizazi25ve6R.evaluate = function (hs_ds26DCDa, hs_ds126DCDd) {
        var hs_wild26DDjM = hs_ds26DCDa;
        if (hs_ds26DCDa.notEvaluated) {
            hs_wild26DDjM = hs_ds26DCDa.hscall();
        }
        var hs_xzh26DCDg = hs_wild26DDjM.data[0];
        var hs_wild126DDjL = hs_ds126DCDd;
        if (hs_ds126DCDd.notEvaluated) {
            hs_wild126DDjL = hs_ds126DCDd.hscall();
        }
        var hs_yzh26DCDh = hs_wild126DDjL.data[0];
        var hs_sat26DDjK = hs_xzh26DCDg & hs_yzh26DCDh;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DDjK];
        return $res;
    };
    hs_zdcfromInteger125ve74.evaluate = function (hs_i26DCDm) {
        var hs_wild26DCDo = $hs.modules.GHCziInteger.hs_integerToWord.hscall(hs_i26DCDm);
        var hs_sat26DDjN = hs_wild26DCDo & 255;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DDjN];
        return $res;
    };
    hs_zdcabs125ve7b.evaluate = function (hs_x26DCDt) {
        if (hs_x26DCDt.notEvaluated) {
            return hs_x26DCDt.hscall();
        } else {
            return hs_x26DCDt;
        }
    };
    hs_zdcnegate125ve7f.evaluate = function (hs_ds26DCDx) {
        var hs_wild26DDjS = hs_ds26DCDx;
        if (hs_ds26DCDx.notEvaluated) {
            hs_wild26DDjS = hs_ds26DCDx.hscall();
        }
        var hs_xzh26DCDA = hs_wild26DDjS.data[0];
        var hs_sat26DDjR = hs_xzh26DCDA;
        var hs_sat26DDjQ = -hs_sat26DDjR;
        var hs_sat26DDjP = hs_sat26DDjQ;
        var hs_sat26DDjO = hs_sat26DDjP & 255;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DDjO];
        return $res;
    };
    hs_zdczm125ve7q.evaluate = function (hs_ds26DCDJ, hs_ds126DCDM) {
        var hs_wild26DDjW = hs_ds26DCDJ;
        if (hs_ds26DCDJ.notEvaluated) {
            hs_wild26DDjW = hs_ds26DCDJ.hscall();
        }
        var hs_xzh26DCDP = hs_wild26DDjW.data[0];
        var hs_wild126DDjV = hs_ds126DCDM;
        if (hs_ds126DCDM.notEvaluated) {
            hs_wild126DDjV = hs_ds126DCDM.hscall();
        }
        var hs_yzh26DCDQ = hs_wild126DDjV.data[0];
        var hs_sat26DDjU = ($hs.Int.addCarry(hs_xzh26DCDP, ~hs_yzh26DCDQ, 1))[0];
        var hs_sat26DDjT = hs_sat26DDjU & 255;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DDjT];
        return $res;
    };
    hs_zdczt125ve7E.evaluate = function (hs_ds26DCDX, hs_ds126DCE0) {
        var hs_wild26DDk0 = hs_ds26DCDX;
        if (hs_ds26DCDX.notEvaluated) {
            hs_wild26DDk0 = hs_ds26DCDX.hscall();
        }
        var hs_xzh26DCE3 = hs_wild26DDk0.data[0];
        var hs_wild126DDjZ = hs_ds126DCE0;
        if (hs_ds126DCE0.notEvaluated) {
            hs_wild126DDjZ = hs_ds126DCE0.hscall();
        }
        var hs_yzh26DCE4 = hs_wild126DDjZ.data[0];
        var hs_sat26DDjY = $hs.Int.mul(hs_xzh26DCE3, hs_yzh26DCE4);
        var hs_sat26DDjX = hs_sat26DDjY & 255;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DDjX];
        return $res;
    };
    hs_zdczp125ve7S.evaluate = function (hs_ds26DCEb, hs_ds126DCEe) {
        var hs_wild26DDk4 = hs_ds26DCEb;
        if (hs_ds26DCEb.notEvaluated) {
            hs_wild26DDk4 = hs_ds26DCEb.hscall();
        }
        var hs_xzh26DCEh = hs_wild26DDk4.data[0];
        var hs_wild126DDk3 = hs_ds126DCEe;
        if (hs_ds126DCEe.notEvaluated) {
            hs_wild126DDk3 = hs_ds126DCEe.hscall();
        }
        var hs_yzh26DCEi = hs_wild126DDk3.data[0];
        var hs_sat26DDk2 = ($hs.Int.addCarry(hs_xzh26DCEh, hs_yzh26DCEi, 0))[0];
        var hs_sat26DDk1 = hs_sat26DDk2 & 255;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DDk1];
        return $res;
    };
    hs_zdcfromEnum25ve86.evaluate = function (hs_ds26DCEo) {
        var hs_wild26DDk6 = hs_ds26DCEo;
        if (hs_ds26DCEo.notEvaluated) {
            hs_wild26DDk6 = hs_ds26DCEo.hscall();
        }
        var hs_xzh26DCEr = hs_wild26DDk6.data[0];
        var hs_sat26DDk5 = hs_xzh26DCEr;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DDk5];
        return $res;
    };
    hs_zdctoInteger125ve8e.evaluate = function (hs_ds26DCEw) {
        var hs_wild26DDk8 = hs_ds26DCEw;
        if (hs_ds26DCEw.notEvaluated) {
            hs_wild26DDk8 = hs_ds26DCEw.hscall();
        }
        var hs_xzh26DCEz = hs_wild26DDk8.data[0];
        var hs_sat26DDk7 = hs_xzh26DCEz;
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(hs_sat26DDk7);
    };
    hs_zdcisSigned125ve8m.evaluate = function (hs_ds26DCEE) {
        var $res = new $hs.Data(1);
        $res.data = [];
        return $res;
    };
    hs_zdcbitSizze125ve8q.evaluate = function (hs_ds26DCEI) {
        var $res = new $hs.Data(1);
        $res.data = [8];
        return $res;
    };
    hs_zdcrotate125ve8u.evaluate = function (hs_ds26DCEN, hs_ds126DCEQ) {
        var hs_wild26DDkj = hs_ds26DCEN;
        if (hs_ds26DCEN.notEvaluated) {
            hs_wild26DDkj = hs_ds26DCEN.hscall();
        }
        var hs_xzh26DCF0 = hs_wild26DDkj.data[0];
        var hs_wild126DDki = hs_ds126DCEQ;
        if (hs_ds126DCEQ.notEvaluated) {
            hs_wild126DDki = hs_ds126DCEQ.hscall();
        }
        var hs_izh26DCEU = hs_wild126DDki.data[0];
        var hs_sat26DDkh = 7;
        var hs_sat26DDkg = hs_izh26DCEU;
        var hs_sat26DDkf = hs_sat26DDkg & hs_sat26DDkh;
        var hs_izqzh26DCEY = hs_sat26DDkf;
        var hs_wild226DDke = hs_izqzh26DCEY == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226DDke.tag) {
        case 1:
            var hs_sat26DDkd = ($hs.Int.addCarry(8, ~hs_izqzh26DCEY, 1))[0];
            var hs_sat26DDkc = hs_xzh26DCF0 >> hs_sat26DDkd;
            var hs_sat26DDkb = hs_xzh26DCF0 << hs_izqzh26DCEY;
            var hs_sat26DDka = hs_sat26DDkb | hs_sat26DDkc;
            var hs_sat26DDk9 = hs_sat26DDka & 255;
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DDk9];
            return $res;
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [hs_xzh26DCF0];
            return $res;
        }
    };
    hs_zdcshift125ve8R.evaluate = function (hs_eta26DCFa, hs_eta126DCFd) {
        var hs_wild26DDkn = hs_eta26DCFa;
        if (hs_eta26DCFa.notEvaluated) {
            hs_wild26DDkn = hs_eta26DCFa.hscall();
        }
        var hs_xzh26DCFi = hs_wild26DDkn.data[0];
        var hs_wild126DDkm = hs_eta126DCFd;
        if (hs_eta126DCFd.notEvaluated) {
            hs_wild126DDkm = hs_eta126DCFd.hscall();
        }
        var hs_izh26DCFg = hs_wild126DDkm.data[0];
        var hs_wild226DDkl = hs_izh26DCFg >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226DDkl.tag) {
        case 1:
            var hs_sat26DDkk = -hs_izh26DCFg;
            var hs_wild326DCFl = $hs.modules.GHCziBase.hs_shiftRLzh.hscall(hs_xzh26DCFi, hs_sat26DDkk);
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DCFl];
            return $res;
        case 2:
            var hs_wild326DCFn = $hs.modules.GHCziBase.hs_shiftLzh.hscall(hs_xzh26DCFi, hs_izh26DCFg);
            var hs_sat26DDko = hs_wild326DCFn & 255;
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DDko];
            return $res;
        }
    };
    hs_zdcxor125ve9a.evaluate = function (hs_ds26DCFt, hs_ds126DCFw) {
        var hs_wild26DDkr = hs_ds26DCFt;
        if (hs_ds26DCFt.notEvaluated) {
            hs_wild26DDkr = hs_ds26DCFt.hscall();
        }
        var hs_xzh26DCFz = hs_wild26DDkr.data[0];
        var hs_wild126DDkq = hs_ds126DCFw;
        if (hs_ds126DCFw.notEvaluated) {
            hs_wild126DDkq = hs_ds126DCFw.hscall();
        }
        var hs_yzh26DCFA = hs_wild126DDkq.data[0];
        var hs_sat26DDkp = hs_xzh26DCFz ^ hs_yzh26DCFA;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DDkp];
        return $res;
    };
    hs_zdczizbzi125ve9n.evaluate = function (hs_ds26DCFG, hs_ds126DCFJ) {
        var hs_wild26DDku = hs_ds26DCFG;
        if (hs_ds26DCFG.notEvaluated) {
            hs_wild26DDku = hs_ds26DCFG.hscall();
        }
        var hs_xzh26DCFM = hs_wild26DDku.data[0];
        var hs_wild126DDkt = hs_ds126DCFJ;
        if (hs_ds126DCFJ.notEvaluated) {
            hs_wild126DDkt = hs_ds126DCFJ.hscall();
        }
        var hs_yzh26DCFN = hs_wild126DDkt.data[0];
        var hs_sat26DDks = hs_xzh26DCFM | hs_yzh26DCFN;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DDks];
        return $res;
    };
    hs_zdczizazi125ve9A.evaluate = function (hs_ds26DCFT, hs_ds126DCFW) {
        var hs_wild26DDkx = hs_ds26DCFT;
        if (hs_ds26DCFT.notEvaluated) {
            hs_wild26DDkx = hs_ds26DCFT.hscall();
        }
        var hs_xzh26DCFZ = hs_wild26DDkx.data[0];
        var hs_wild126DDkw = hs_ds126DCFW;
        if (hs_ds126DCFW.notEvaluated) {
            hs_wild126DDkw = hs_ds126DCFW.hscall();
        }
        var hs_yzh26DCG0 = hs_wild126DDkw.data[0];
        var hs_sat26DDkv = hs_xzh26DCFZ & hs_yzh26DCG0;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DDkv];
        return $res;
    };
    hs_zdcfromInteger225ve9N.evaluate = function (hs_i26DCG5) {
        var hs_wild26DCG7 = $hs.modules.GHCziInteger.hs_integerToWord.hscall(hs_i26DCG5);
        var hs_sat26DDky = hs_wild26DCG7 & 65535;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DDky];
        return $res;
    };
    hs_zdcabs225ve9U.evaluate = function (hs_x26DCGc) {
        if (hs_x26DCGc.notEvaluated) {
            return hs_x26DCGc.hscall();
        } else {
            return hs_x26DCGc;
        }
    };
    hs_zdcnegate225ve9Y.evaluate = function (hs_ds26DCGg) {
        var hs_wild26DDkD = hs_ds26DCGg;
        if (hs_ds26DCGg.notEvaluated) {
            hs_wild26DDkD = hs_ds26DCGg.hscall();
        }
        var hs_xzh26DCGj = hs_wild26DDkD.data[0];
        var hs_sat26DDkC = hs_xzh26DCGj;
        var hs_sat26DDkB = -hs_sat26DDkC;
        var hs_sat26DDkA = hs_sat26DDkB;
        var hs_sat26DDkz = hs_sat26DDkA & 65535;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DDkz];
        return $res;
    };
    hs_zdczm225vea9.evaluate = function (hs_ds26DCGs, hs_ds126DCGv) {
        var hs_wild26DDkH = hs_ds26DCGs;
        if (hs_ds26DCGs.notEvaluated) {
            hs_wild26DDkH = hs_ds26DCGs.hscall();
        }
        var hs_xzh26DCGy = hs_wild26DDkH.data[0];
        var hs_wild126DDkG = hs_ds126DCGv;
        if (hs_ds126DCGv.notEvaluated) {
            hs_wild126DDkG = hs_ds126DCGv.hscall();
        }
        var hs_yzh26DCGz = hs_wild126DDkG.data[0];
        var hs_sat26DDkF = ($hs.Int.addCarry(hs_xzh26DCGy, ~hs_yzh26DCGz, 1))[0];
        var hs_sat26DDkE = hs_sat26DDkF & 65535;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DDkE];
        return $res;
    };
    hs_zdczt225vean.evaluate = function (hs_ds26DCGG, hs_ds126DCGJ) {
        var hs_wild26DDkL = hs_ds26DCGG;
        if (hs_ds26DCGG.notEvaluated) {
            hs_wild26DDkL = hs_ds26DCGG.hscall();
        }
        var hs_xzh26DCGM = hs_wild26DDkL.data[0];
        var hs_wild126DDkK = hs_ds126DCGJ;
        if (hs_ds126DCGJ.notEvaluated) {
            hs_wild126DDkK = hs_ds126DCGJ.hscall();
        }
        var hs_yzh26DCGN = hs_wild126DDkK.data[0];
        var hs_sat26DDkJ = $hs.Int.mul(hs_xzh26DCGM, hs_yzh26DCGN);
        var hs_sat26DDkI = hs_sat26DDkJ & 65535;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DDkI];
        return $res;
    };
    hs_zdczp225veaB.evaluate = function (hs_ds26DCGU, hs_ds126DCGX) {
        var hs_wild26DDkP = hs_ds26DCGU;
        if (hs_ds26DCGU.notEvaluated) {
            hs_wild26DDkP = hs_ds26DCGU.hscall();
        }
        var hs_xzh26DCH0 = hs_wild26DDkP.data[0];
        var hs_wild126DDkO = hs_ds126DCGX;
        if (hs_ds126DCGX.notEvaluated) {
            hs_wild126DDkO = hs_ds126DCGX.hscall();
        }
        var hs_yzh26DCH1 = hs_wild126DDkO.data[0];
        var hs_sat26DDkN = ($hs.Int.addCarry(hs_xzh26DCH0, hs_yzh26DCH1, 0))[0];
        var hs_sat26DDkM = hs_sat26DDkN & 65535;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DDkM];
        return $res;
    };
    hs_zdcfromEnum125veaP.evaluate = function (hs_ds26DCH7) {
        var hs_wild26DDkR = hs_ds26DCH7;
        if (hs_ds26DCH7.notEvaluated) {
            hs_wild26DDkR = hs_ds26DCH7.hscall();
        }
        var hs_xzh26DCHa = hs_wild26DDkR.data[0];
        var hs_sat26DDkQ = hs_xzh26DCHa;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DDkQ];
        return $res;
    };
    hs_zdctoInteger225veaX.evaluate = function (hs_ds26DCHf) {
        var hs_wild26DDkT = hs_ds26DCHf;
        if (hs_ds26DCHf.notEvaluated) {
            hs_wild26DDkT = hs_ds26DCHf.hscall();
        }
        var hs_xzh26DCHi = hs_wild26DDkT.data[0];
        var hs_sat26DDkS = hs_xzh26DCHi;
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(hs_sat26DDkS);
    };
    hs_zdcisSigned225veb5.evaluate = function (hs_ds26DCHn) {
        var $res = new $hs.Data(1);
        $res.data = [];
        return $res;
    };
    hs_zdcbitSizze225veb9.evaluate = function (hs_ds26DCHr) {
        var $res = new $hs.Data(1);
        $res.data = [16];
        return $res;
    };
    hs_zdcrotate225vebd.evaluate = function (hs_ds26DCHw, hs_ds126DCHz) {
        var hs_wild26DDl4 = hs_ds26DCHw;
        if (hs_ds26DCHw.notEvaluated) {
            hs_wild26DDl4 = hs_ds26DCHw.hscall();
        }
        var hs_xzh26DCHJ = hs_wild26DDl4.data[0];
        var hs_wild126DDl3 = hs_ds126DCHz;
        if (hs_ds126DCHz.notEvaluated) {
            hs_wild126DDl3 = hs_ds126DCHz.hscall();
        }
        var hs_izh26DCHD = hs_wild126DDl3.data[0];
        var hs_sat26DDl2 = 15;
        var hs_sat26DDl1 = hs_izh26DCHD;
        var hs_sat26DDl0 = hs_sat26DDl1 & hs_sat26DDl2;
        var hs_izqzh26DCHH = hs_sat26DDl0;
        var hs_wild226DDkZ = hs_izqzh26DCHH == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226DDkZ.tag) {
        case 1:
            var hs_sat26DDkY = ($hs.Int.addCarry(16, ~hs_izqzh26DCHH, 1))[0];
            var hs_sat26DDkX = hs_xzh26DCHJ >> hs_sat26DDkY;
            var hs_sat26DDkW = hs_xzh26DCHJ << hs_izqzh26DCHH;
            var hs_sat26DDkV = hs_sat26DDkW | hs_sat26DDkX;
            var hs_sat26DDkU = hs_sat26DDkV & 65535;
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DDkU];
            return $res;
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [hs_xzh26DCHJ];
            return $res;
        }
    };
    hs_zdcshift225vebA.evaluate = function (hs_eta26DCHT, hs_eta126DCHW) {
        var hs_wild26DDl8 = hs_eta26DCHT;
        if (hs_eta26DCHT.notEvaluated) {
            hs_wild26DDl8 = hs_eta26DCHT.hscall();
        }
        var hs_xzh26DCI1 = hs_wild26DDl8.data[0];
        var hs_wild126DDl7 = hs_eta126DCHW;
        if (hs_eta126DCHW.notEvaluated) {
            hs_wild126DDl7 = hs_eta126DCHW.hscall();
        }
        var hs_izh26DCHZ = hs_wild126DDl7.data[0];
        var hs_wild226DDl6 = hs_izh26DCHZ >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226DDl6.tag) {
        case 1:
            var hs_sat26DDl5 = -hs_izh26DCHZ;
            var hs_wild326DCI4 = $hs.modules.GHCziBase.hs_shiftRLzh.hscall(hs_xzh26DCI1, hs_sat26DDl5);
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DCI4];
            return $res;
        case 2:
            var hs_wild326DCI6 = $hs.modules.GHCziBase.hs_shiftLzh.hscall(hs_xzh26DCI1, hs_izh26DCHZ);
            var hs_sat26DDl9 = hs_wild326DCI6 & 65535;
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DDl9];
            return $res;
        }
    };
    hs_zdcxor225vebT.evaluate = function (hs_ds26DCIc, hs_ds126DCIf) {
        var hs_wild26DDlc = hs_ds26DCIc;
        if (hs_ds26DCIc.notEvaluated) {
            hs_wild26DDlc = hs_ds26DCIc.hscall();
        }
        var hs_xzh26DCIi = hs_wild26DDlc.data[0];
        var hs_wild126DDlb = hs_ds126DCIf;
        if (hs_ds126DCIf.notEvaluated) {
            hs_wild126DDlb = hs_ds126DCIf.hscall();
        }
        var hs_yzh26DCIj = hs_wild126DDlb.data[0];
        var hs_sat26DDla = hs_xzh26DCIi ^ hs_yzh26DCIj;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DDla];
        return $res;
    };
    hs_zdczizbzi225vec6.evaluate = function (hs_ds26DCIp, hs_ds126DCIs) {
        var hs_wild26DDlf = hs_ds26DCIp;
        if (hs_ds26DCIp.notEvaluated) {
            hs_wild26DDlf = hs_ds26DCIp.hscall();
        }
        var hs_xzh26DCIv = hs_wild26DDlf.data[0];
        var hs_wild126DDle = hs_ds126DCIs;
        if (hs_ds126DCIs.notEvaluated) {
            hs_wild126DDle = hs_ds126DCIs.hscall();
        }
        var hs_yzh26DCIw = hs_wild126DDle.data[0];
        var hs_sat26DDld = hs_xzh26DCIv | hs_yzh26DCIw;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DDld];
        return $res;
    };
    hs_zdczizazi225vecj.evaluate = function (hs_ds26DCIC, hs_ds126DCIF) {
        var hs_wild26DDli = hs_ds26DCIC;
        if (hs_ds26DCIC.notEvaluated) {
            hs_wild26DDli = hs_ds26DCIC.hscall();
        }
        var hs_xzh26DCII = hs_wild26DDli.data[0];
        var hs_wild126DDlh = hs_ds126DCIF;
        if (hs_ds126DCIF.notEvaluated) {
            hs_wild126DDlh = hs_ds126DCIF.hscall();
        }
        var hs_yzh26DCIJ = hs_wild126DDlh.data[0];
        var hs_sat26DDlg = hs_xzh26DCII & hs_yzh26DCIJ;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DDlg];
        return $res;
    };
    hs_zdcfromInteger325vecw.evaluate = function (hs_i26DCIO) {
        var hs_wild26DCIQ = $hs.modules.GHCziInteger.hs_integerToWord.hscall(hs_i26DCIO);
        var hs_sat26DDlj = hs_wild26DCIQ;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DDlj];
        return $res;
    };
    hs_zdcabs325vecD.evaluate = function (hs_x26DCIV) {
        if (hs_x26DCIV.notEvaluated) {
            return hs_x26DCIV.hscall();
        } else {
            return hs_x26DCIV;
        }
    };
    hs_zdcnegate325vecH.evaluate = function (hs_ds26DCIZ) {
        var hs_wild26DDlo = hs_ds26DCIZ;
        if (hs_ds26DCIZ.notEvaluated) {
            hs_wild26DDlo = hs_ds26DCIZ.hscall();
        }
        var hs_xzh26DCJ2 = hs_wild26DDlo.data[0];
        var hs_sat26DDln = hs_xzh26DCJ2;
        var hs_sat26DDlm = -hs_sat26DDln;
        var hs_sat26DDll = hs_sat26DDlm;
        var hs_sat26DDlk = hs_sat26DDll;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DDlk];
        return $res;
    };
    hs_zdczm325vecS.evaluate = function (hs_ds26DCJb, hs_ds126DCJe) {
        var hs_wild26DDls = hs_ds26DCJb;
        if (hs_ds26DCJb.notEvaluated) {
            hs_wild26DDls = hs_ds26DCJb.hscall();
        }
        var hs_xzh26DCJh = hs_wild26DDls.data[0];
        var hs_wild126DDlr = hs_ds126DCJe;
        if (hs_ds126DCJe.notEvaluated) {
            hs_wild126DDlr = hs_ds126DCJe.hscall();
        }
        var hs_yzh26DCJi = hs_wild126DDlr.data[0];
        var hs_sat26DDlq = ($hs.Int.addCarry(hs_xzh26DCJh, ~hs_yzh26DCJi, 1))[0];
        var hs_sat26DDlp = hs_sat26DDlq;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DDlp];
        return $res;
    };
    hs_zdczt325ved6.evaluate = function (hs_ds26DCJp, hs_ds126DCJs) {
        var hs_wild26DDlw = hs_ds26DCJp;
        if (hs_ds26DCJp.notEvaluated) {
            hs_wild26DDlw = hs_ds26DCJp.hscall();
        }
        var hs_xzh26DCJv = hs_wild26DDlw.data[0];
        var hs_wild126DDlv = hs_ds126DCJs;
        if (hs_ds126DCJs.notEvaluated) {
            hs_wild126DDlv = hs_ds126DCJs.hscall();
        }
        var hs_yzh26DCJw = hs_wild126DDlv.data[0];
        var hs_sat26DDlu = $hs.Int.mul(hs_xzh26DCJv, hs_yzh26DCJw);
        var hs_sat26DDlt = hs_sat26DDlu;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DDlt];
        return $res;
    };
    hs_zdczp325vedk.evaluate = function (hs_ds26DCJD, hs_ds126DCJG) {
        var hs_wild26DDlA = hs_ds26DCJD;
        if (hs_ds26DCJD.notEvaluated) {
            hs_wild26DDlA = hs_ds26DCJD.hscall();
        }
        var hs_xzh26DCJJ = hs_wild26DDlA.data[0];
        var hs_wild126DDlz = hs_ds126DCJG;
        if (hs_ds126DCJG.notEvaluated) {
            hs_wild126DDlz = hs_ds126DCJG.hscall();
        }
        var hs_yzh26DCJK = hs_wild126DDlz.data[0];
        var hs_sat26DDly = ($hs.Int.addCarry(hs_xzh26DCJJ, hs_yzh26DCJK, 0))[0];
        var hs_sat26DDlx = hs_sat26DDly;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DDlx];
        return $res;
    };
    hs_zdctoInteger325vedy.evaluate = function (hs_ds26DCJQ) {
        var hs_wild26DDlC = hs_ds26DCJQ;
        if (hs_ds26DCJQ.notEvaluated) {
            hs_wild26DDlC = hs_ds26DCJQ.hscall();
        }
        var hs_xzh26DCJU = hs_wild26DDlC.data[0];
        var hs_izh26DCJV = hs_xzh26DCJU;
        var hs_wild126DDlB = hs_izh26DCJV >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild126DDlB.tag) {
        case 1:
            return $hs.modules.GHCziInteger.hs_wordToInteger.hscall(hs_xzh26DCJU);
        case 2:
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(hs_izh26DCJV);
        }
    };
    hs_zdcisSigned325vedI.evaluate = function (hs_ds26DCK0) {
        var $res = new $hs.Data(1);
        $res.data = [];
        return $res;
    };
    hs_zdcbitSizze325vedM.evaluate = function (hs_ds26DCK4) {
        var $res = new $hs.Data(1);
        $res.data = [32];
        return $res;
    };
    hs_zdcrotate325vedQ.evaluate = function (hs_ds26DCK9, hs_ds126DCKc) {
        var hs_wild26DDlN = hs_ds26DCK9;
        if (hs_ds26DCK9.notEvaluated) {
            hs_wild26DDlN = hs_ds26DCK9.hscall();
        }
        var hs_xzh26DCKm = hs_wild26DDlN.data[0];
        var hs_wild126DDlM = hs_ds126DCKc;
        if (hs_ds126DCKc.notEvaluated) {
            hs_wild126DDlM = hs_ds126DCKc.hscall();
        }
        var hs_izh26DCKg = hs_wild126DDlM.data[0];
        var hs_sat26DDlL = 31;
        var hs_sat26DDlK = hs_izh26DCKg;
        var hs_sat26DDlJ = hs_sat26DDlK & hs_sat26DDlL;
        var hs_izqzh26DCKk = hs_sat26DDlJ;
        var hs_wild226DDlI = hs_izqzh26DCKk == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226DDlI.tag) {
        case 1:
            var hs_sat26DDlH = ($hs.Int.addCarry(32, ~hs_izqzh26DCKk, 1))[0];
            var hs_sat26DDlG = hs_xzh26DCKm >> hs_sat26DDlH;
            var hs_sat26DDlF = hs_xzh26DCKm << hs_izqzh26DCKk;
            var hs_sat26DDlE = hs_sat26DDlF | hs_sat26DDlG;
            var hs_sat26DDlD = hs_sat26DDlE;
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DDlD];
            return $res;
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [hs_xzh26DCKm];
            return $res;
        }
    };
    hs_zdcshift325veed.evaluate = function (hs_eta26DCKw, hs_eta126DCKz) {
        var hs_wild26DDlR = hs_eta26DCKw;
        if (hs_eta26DCKw.notEvaluated) {
            hs_wild26DDlR = hs_eta26DCKw.hscall();
        }
        var hs_xzh26DCKE = hs_wild26DDlR.data[0];
        var hs_wild126DDlQ = hs_eta126DCKz;
        if (hs_eta126DCKz.notEvaluated) {
            hs_wild126DDlQ = hs_eta126DCKz.hscall();
        }
        var hs_izh26DCKC = hs_wild126DDlQ.data[0];
        var hs_wild226DDlP = hs_izh26DCKC >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226DDlP.tag) {
        case 1:
            var hs_sat26DDlO = -hs_izh26DCKC;
            var hs_wild326DCKH = $hs.modules.GHCziBase.hs_shiftRLzh.hscall(hs_xzh26DCKE, hs_sat26DDlO);
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DCKH];
            return $res;
        case 2:
            var hs_wild326DCKJ = $hs.modules.GHCziBase.hs_shiftLzh.hscall(hs_xzh26DCKE, hs_izh26DCKC);
            var hs_sat26DDlS = hs_wild326DCKJ;
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DDlS];
            return $res;
        }
    };
    hs_zdcxor325veew.evaluate = function (hs_ds26DCKP, hs_ds126DCKS) {
        var hs_wild26DDlV = hs_ds26DCKP;
        if (hs_ds26DCKP.notEvaluated) {
            hs_wild26DDlV = hs_ds26DCKP.hscall();
        }
        var hs_xzh26DCKV = hs_wild26DDlV.data[0];
        var hs_wild126DDlU = hs_ds126DCKS;
        if (hs_ds126DCKS.notEvaluated) {
            hs_wild126DDlU = hs_ds126DCKS.hscall();
        }
        var hs_yzh26DCKW = hs_wild126DDlU.data[0];
        var hs_sat26DDlT = hs_xzh26DCKV ^ hs_yzh26DCKW;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DDlT];
        return $res;
    };
    hs_zdczizbzi325veeJ.evaluate = function (hs_ds26DCL2, hs_ds126DCL5) {
        var hs_wild26DDlY = hs_ds26DCL2;
        if (hs_ds26DCL2.notEvaluated) {
            hs_wild26DDlY = hs_ds26DCL2.hscall();
        }
        var hs_xzh26DCL8 = hs_wild26DDlY.data[0];
        var hs_wild126DDlX = hs_ds126DCL5;
        if (hs_ds126DCL5.notEvaluated) {
            hs_wild126DDlX = hs_ds126DCL5.hscall();
        }
        var hs_yzh26DCL9 = hs_wild126DDlX.data[0];
        var hs_sat26DDlW = hs_xzh26DCL8 | hs_yzh26DCL9;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DDlW];
        return $res;
    };
    hs_zdczizazi325veeW.evaluate = function (hs_ds26DCLf, hs_ds126DCLi) {
        var hs_wild26DDm1 = hs_ds26DCLf;
        if (hs_ds26DCLf.notEvaluated) {
            hs_wild26DDm1 = hs_ds26DCLf.hscall();
        }
        var hs_xzh26DCLl = hs_wild26DDm1.data[0];
        var hs_wild126DDm0 = hs_ds126DCLi;
        if (hs_ds126DCLi.notEvaluated) {
            hs_wild126DDm0 = hs_ds126DCLi.hscall();
        }
        var hs_yzh26DCLm = hs_wild126DDm0.data[0];
        var hs_sat26DDlZ = hs_xzh26DCLl & hs_yzh26DCLm;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DDlZ];
        return $res;
    };
    hs_zdczsze25vef9.evaluate = function (hs_ds26DCLs, hs_ds126DCLv) {
        var hs_wild26DDm3 = hs_ds26DCLs;
        if (hs_ds26DCLs.notEvaluated) {
            hs_wild26DDm3 = hs_ds26DCLs.hscall();
        }
        var hs_xzh26DCLy = hs_wild26DDm3.data[0];
        var hs_wild126DDm2 = hs_ds126DCLv;
        if (hs_ds126DCLv.notEvaluated) {
            hs_wild126DDm2 = hs_ds126DCLv.hscall();
        }
        var hs_yzh26DCLz = hs_wild126DDm2.data[0];
        return $hs.modules.GHCziIntWord64.hs_neWord64zh.hscall(hs_xzh26DCLy, hs_yzh26DCLz);
    };
    hs_zdczeze25vefl.evaluate = function (hs_ds26DCLE, hs_ds126DCLH) {
        var hs_wild26DDm5 = hs_ds26DCLE;
        if (hs_ds26DCLE.notEvaluated) {
            hs_wild26DDm5 = hs_ds26DCLE.hscall();
        }
        var hs_xzh26DCLK = hs_wild26DDm5.data[0];
        var hs_wild126DDm4 = hs_ds126DCLH;
        if (hs_ds126DCLH.notEvaluated) {
            hs_wild126DDm4 = hs_ds126DCLH.hscall();
        }
        var hs_yzh26DCLL = hs_wild126DDm4.data[0];
        return $hs.modules.GHCziIntWord64.hs_eqWord64zh.hscall(hs_xzh26DCLK, hs_yzh26DCLL);
    };
    this.hs_zdfEqWord64.data = [hs_zdczeze25vefl, hs_zdczsze25vef9];
    hs_zdczlze25vefx.evaluate = function (hs_ds26DCLQ, hs_ds126DCLT) {
        var hs_wild26DDm7 = hs_ds26DCLQ;
        if (hs_ds26DCLQ.notEvaluated) {
            hs_wild26DDm7 = hs_ds26DCLQ.hscall();
        }
        var hs_xzh26DCLW = hs_wild26DDm7.data[0];
        var hs_wild126DDm6 = hs_ds126DCLT;
        if (hs_ds126DCLT.notEvaluated) {
            hs_wild126DDm6 = hs_ds126DCLT.hscall();
        }
        var hs_yzh26DCLX = hs_wild126DDm6.data[0];
        return $hs.modules.GHCziIntWord64.hs_leWord64zh.hscall(hs_xzh26DCLW, hs_yzh26DCLX);
    };
    hs_zdczg25vefJ.evaluate = function (hs_ds26DCM2, hs_ds126DCM5) {
        var hs_wild26DDm9 = hs_ds26DCM2;
        if (hs_ds26DCM2.notEvaluated) {
            hs_wild26DDm9 = hs_ds26DCM2.hscall();
        }
        var hs_xzh26DCM8 = hs_wild26DDm9.data[0];
        var hs_wild126DDm8 = hs_ds126DCM5;
        if (hs_ds126DCM5.notEvaluated) {
            hs_wild126DDm8 = hs_ds126DCM5.hscall();
        }
        var hs_yzh26DCM9 = hs_wild126DDm8.data[0];
        return $hs.modules.GHCziIntWord64.hs_gtWord64zh.hscall(hs_xzh26DCM8, hs_yzh26DCM9);
    };
    hs_zdczgze25vefV.evaluate = function (hs_ds26DCMe, hs_ds126DCMh) {
        var hs_wild26DDmb = hs_ds26DCMe;
        if (hs_ds26DCMe.notEvaluated) {
            hs_wild26DDmb = hs_ds26DCMe.hscall();
        }
        var hs_xzh26DCMk = hs_wild26DDmb.data[0];
        var hs_wild126DDma = hs_ds126DCMh;
        if (hs_ds126DCMh.notEvaluated) {
            hs_wild126DDma = hs_ds126DCMh.hscall();
        }
        var hs_yzh26DCMl = hs_wild126DDma.data[0];
        return $hs.modules.GHCziIntWord64.hs_geWord64zh.hscall(hs_xzh26DCMk, hs_yzh26DCMl);
    };
    hs_zdczl25veg7.evaluate = function (hs_ds26DCMq, hs_ds126DCMt) {
        var hs_wild26DDmd = hs_ds26DCMq;
        if (hs_ds26DCMq.notEvaluated) {
            hs_wild26DDmd = hs_ds26DCMq.hscall();
        }
        var hs_xzh26DCMw = hs_wild26DDmd.data[0];
        var hs_wild126DDmc = hs_ds126DCMt;
        if (hs_ds126DCMt.notEvaluated) {
            hs_wild126DDmc = hs_ds126DCMt.hscall();
        }
        var hs_yzh26DCMx = hs_wild126DDmc.data[0];
        return $hs.modules.GHCziIntWord64.hs_ltWord64zh.hscall(hs_xzh26DCMw, hs_yzh26DCMx);
    };
    this.hs_zdfOrdWord64.data = [$hs.modules.GHCziWord.hs_zdfEqWord64, hs_zdccompare25vegn, hs_zdczl25veg7, hs_zdczgze25vefV, hs_zdczg25vefJ, hs_zdczlze25vefx, hs_zdcmax25vegl, hs_zdcmin25vegj];
    hs_zdcmin25vegj.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmin.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdcmax25vegl.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmax.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdccompare25vegn.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmcompare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdcfromInteger425vegp.evaluate = function (hs_i26DCMH) {
        var hs_wild26DCMJ = $hs.modules.GHCziInteger.hs_integerToWord64.hscall(hs_i26DCMH);
        var $res = new $hs.Data(1);
        $res.data = [hs_wild26DCMJ];
        return $res;
    };
    hs_zdcabs425vegv.evaluate = function (hs_x26DCMN) {
        if (hs_x26DCMN.notEvaluated) {
            return hs_x26DCMN.hscall();
        } else {
            return hs_x26DCMN;
        }
    };
    hs_zdcnegate425vegz.evaluate = function (hs_ds26DCMR) {
        var hs_wild26DDme = hs_ds26DCMR;
        if (hs_ds26DCMR.notEvaluated) {
            hs_wild26DDme = hs_ds26DCMR.hscall();
        }
        var hs_xzh26DCMU = hs_wild26DDme.data[0];
        var hs_wild126DCMW = $hs.modules.GHCziIntWord64.hs_word64ToInt64zh.hscall(hs_xzh26DCMU);
        var hs_wild226DCMY = $hs.modules.GHCziIntWord64.hs_negateInt64zh.hscall(hs_wild126DCMW);
        var hs_wild326DCN0 = $hs.modules.GHCziIntWord64.hs_int64ToWord64zh.hscall(hs_wild226DCMY);
        var $res = new $hs.Data(1);
        $res.data = [hs_wild326DCN0];
        return $res;
    };
    hs_zdczm425vegM.evaluate = function (hs_ds26DCN5, hs_ds126DCN8) {
        var hs_wild26DDmg = hs_ds26DCN5;
        if (hs_ds26DCN5.notEvaluated) {
            hs_wild26DDmg = hs_ds26DCN5.hscall();
        }
        var hs_xzh26DCNd = hs_wild26DDmg.data[0];
        var hs_wild126DDmf = hs_ds126DCN8;
        if (hs_ds126DCN8.notEvaluated) {
            hs_wild126DDmf = hs_ds126DCN8.hscall();
        }
        var hs_yzh26DCNb = hs_wild126DDmf.data[0];
        var hs_wild226DCNg = $hs.modules.GHCziIntWord64.hs_word64ToInt64zh.hscall(hs_yzh26DCNb);
        var hs_wild326DCNf = $hs.modules.GHCziIntWord64.hs_word64ToInt64zh.hscall(hs_xzh26DCNd);
        var hs_wild426DCNi = $hs.modules.GHCziIntWord64.hs_minusInt64zh.hscall(hs_wild326DCNf, hs_wild226DCNg);
        var hs_wild526DCNk = $hs.modules.GHCziIntWord64.hs_int64ToWord64zh.hscall(hs_wild426DCNi);
        var $res = new $hs.Data(1);
        $res.data = [hs_wild526DCNk];
        return $res;
    };
    hs_zdczt425veh6.evaluate = function (hs_ds26DCNp, hs_ds126DCNs) {
        var hs_wild26DDmi = hs_ds26DCNp;
        if (hs_ds26DCNp.notEvaluated) {
            hs_wild26DDmi = hs_ds26DCNp.hscall();
        }
        var hs_xzh26DCNx = hs_wild26DDmi.data[0];
        var hs_wild126DDmh = hs_ds126DCNs;
        if (hs_ds126DCNs.notEvaluated) {
            hs_wild126DDmh = hs_ds126DCNs.hscall();
        }
        var hs_yzh26DCNv = hs_wild126DDmh.data[0];
        var hs_wild226DCNA = $hs.modules.GHCziIntWord64.hs_word64ToInt64zh.hscall(hs_yzh26DCNv);
        var hs_wild326DCNz = $hs.modules.GHCziIntWord64.hs_word64ToInt64zh.hscall(hs_xzh26DCNx);
        var hs_wild426DCNC = $hs.modules.GHCziIntWord64.hs_timesInt64zh.hscall(hs_wild326DCNz, hs_wild226DCNA);
        var hs_wild526DCNE = $hs.modules.GHCziIntWord64.hs_int64ToWord64zh.hscall(hs_wild426DCNC);
        var $res = new $hs.Data(1);
        $res.data = [hs_wild526DCNE];
        return $res;
    };
    hs_zdczp425vehq.evaluate = function (hs_ds26DCNJ, hs_ds126DCNM) {
        var hs_wild26DDmk = hs_ds26DCNJ;
        if (hs_ds26DCNJ.notEvaluated) {
            hs_wild26DDmk = hs_ds26DCNJ.hscall();
        }
        var hs_xzh26DCNR = hs_wild26DDmk.data[0];
        var hs_wild126DDmj = hs_ds126DCNM;
        if (hs_ds126DCNM.notEvaluated) {
            hs_wild126DDmj = hs_ds126DCNM.hscall();
        }
        var hs_yzh26DCNP = hs_wild126DDmj.data[0];
        var hs_wild226DCNU = $hs.modules.GHCziIntWord64.hs_word64ToInt64zh.hscall(hs_yzh26DCNP);
        var hs_wild326DCNT = $hs.modules.GHCziIntWord64.hs_word64ToInt64zh.hscall(hs_xzh26DCNR);
        var hs_wild426DCNW = $hs.modules.GHCziIntWord64.hs_plusInt64zh.hscall(hs_wild326DCNT, hs_wild226DCNU);
        var hs_wild526DCNY = $hs.modules.GHCziIntWord64.hs_int64ToWord64zh.hscall(hs_wild426DCNW);
        var $res = new $hs.Data(1);
        $res.data = [hs_wild526DCNY];
        return $res;
    };
    hs_zdctoInteger425vehK.evaluate = function (hs_ds26DCO2) {
        var hs_wild26DDml = hs_ds26DCO2;
        if (hs_ds26DCO2.notEvaluated) {
            hs_wild26DDml = hs_ds26DCO2.hscall();
        }
        var hs_xzh26DCO5 = hs_wild26DDml.data[0];
        return $hs.modules.GHCziInteger.hs_word64ToInteger.hscall(hs_xzh26DCO5);
    };
    hs_zdcisSigned425vehR.evaluate = function (hs_ds26DCO9) {
        var $res = new $hs.Data(1);
        $res.data = [];
        return $res;
    };
    hs_zdcbitSizze425vehV.evaluate = function (hs_ds26DCOd) {
        var $res = new $hs.Data(1);
        $res.data = [64];
        return $res;
    };
    hs_zdcrotate425vehZ.evaluate = function (hs_ds26DCOi, hs_ds126DCOl) {
        var hs_wild26DDms = hs_ds26DCOi;
        if (hs_ds26DCOi.notEvaluated) {
            hs_wild26DDms = hs_ds26DCOi.hscall();
        }
        var hs_xzh26DCOv = hs_wild26DDms.data[0];
        var hs_wild126DDmr = hs_ds126DCOl;
        if (hs_ds126DCOl.notEvaluated) {
            hs_wild126DDmr = hs_ds126DCOl.hscall();
        }
        var hs_izh26DCOp = hs_wild126DDmr.data[0];
        var hs_sat26DDmq = 63;
        var hs_sat26DDmp = hs_izh26DCOp;
        var hs_sat26DDmo = hs_sat26DDmp & hs_sat26DDmq;
        var hs_izqzh26DCOt = hs_sat26DDmo;
        var hs_wild226DDmn = hs_izqzh26DCOt == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226DDmn.tag) {
        case 1:
            var hs_sat26DDmm = ($hs.Int.addCarry(64, ~hs_izqzh26DCOt, 1))[0];
            var hs_wild326DCOA = $hs.modules.GHCziIntWord64.hs_uncheckedShiftRL64zh.hscall(hs_xzh26DCOv, hs_sat26DDmm);
            var hs_wild426DCOz = $hs.modules.GHCziIntWord64.hs_uncheckedShiftL64zh.hscall(hs_xzh26DCOv, hs_izqzh26DCOt);
            var hs_wild526DCOC = $hs.modules.GHCziIntWord64.hs_or64zh.hscall(hs_wild426DCOz, hs_wild326DCOA);
            var $res = new $hs.Data(1);
            $res.data = [hs_wild526DCOC];
            return $res;
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [hs_xzh26DCOv];
            return $res;
        }
    };
    hs_zdcshift425veio.evaluate = function (hs_eta26DCOH, hs_eta126DCOK) {
        var hs_wild26DDmw = hs_eta26DCOH;
        if (hs_eta26DCOH.notEvaluated) {
            hs_wild26DDmw = hs_eta26DCOH.hscall();
        }
        var hs_xzh26DCOS = hs_wild26DDmw.data[0];
        var hs_wild126DDmv = hs_eta126DCOK;
        if (hs_eta126DCOK.notEvaluated) {
            hs_wild126DDmv = hs_eta126DCOK.hscall();
        }
        var hs_izh26DCON = hs_wild126DDmv.data[0];
        var hs_wild226DDmu = hs_izh26DCON >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226DDmu.tag) {
        case 1:
            var hs_b26DCOQ = -hs_izh26DCON;
            var hs_wild326DDmt = hs_b26DCOQ >= 64 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild326DDmt.tag) {
            case 1:
                var hs_wild426DCOU = $hs.modules.GHCziIntWord64.hs_uncheckedShiftRL64zh.hscall(hs_xzh26DCOS, hs_b26DCOQ);
                var $res = new $hs.Data(1);
                $res.data = [hs_wild426DCOU];
                return $res;
            case 2:
                var hs_sat26DDmx = 0;
                var hs_wild426DCOX = $hs.modules.GHCziIntWord64.hs_wordToWord64zh.hscall(hs_sat26DDmx);
                var $res = new $hs.Data(1);
                $res.data = [hs_wild426DCOX];
                return $res;
            }
        case 2:
            var hs_wild326DDmy = hs_izh26DCON >= 64 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild326DDmy.tag) {
            case 1:
                var hs_wild426DCP0 = $hs.modules.GHCziIntWord64.hs_uncheckedShiftL64zh.hscall(hs_xzh26DCOS, hs_izh26DCON);
                var $res = new $hs.Data(1);
                $res.data = [hs_wild426DCP0];
                return $res;
            case 2:
                var hs_sat26DDmz = 0;
                var hs_wild426DCP3 = $hs.modules.GHCziIntWord64.hs_wordToWord64zh.hscall(hs_sat26DDmz);
                var $res = new $hs.Data(1);
                $res.data = [hs_wild426DCP3];
                return $res;
            }
        }
    };
    hs_zdccomplement125veiP.evaluate = function (hs_ds26DCP7) {
        var hs_wild26DDmA = hs_ds26DCP7;
        if (hs_ds26DCP7.notEvaluated) {
            hs_wild26DDmA = hs_ds26DCP7.hscall();
        }
        var hs_xzh26DCPa = hs_wild26DDmA.data[0];
        var hs_wild126DCPc = $hs.modules.GHCziIntWord64.hs_not64zh.hscall(hs_xzh26DCPa);
        var $res = new $hs.Data(1);
        $res.data = [hs_wild126DCPc];
        return $res;
    };
    hs_zdcxor425veiY.evaluate = function (hs_ds26DCPh, hs_ds126DCPk) {
        var hs_wild26DDmC = hs_ds26DCPh;
        if (hs_ds26DCPh.notEvaluated) {
            hs_wild26DDmC = hs_ds26DCPh.hscall();
        }
        var hs_xzh26DCPn = hs_wild26DDmC.data[0];
        var hs_wild126DDmB = hs_ds126DCPk;
        if (hs_ds126DCPk.notEvaluated) {
            hs_wild126DDmB = hs_ds126DCPk.hscall();
        }
        var hs_yzh26DCPo = hs_wild126DDmB.data[0];
        var hs_wild226DCPq = $hs.modules.GHCziIntWord64.hs_xor64zh.hscall(hs_xzh26DCPn, hs_yzh26DCPo);
        var $res = new $hs.Data(1);
        $res.data = [hs_wild226DCPq];
        return $res;
    };
    hs_zdczizbzi425vejc.evaluate = function (hs_ds26DCPv, hs_ds126DCPy) {
        var hs_wild26DDmE = hs_ds26DCPv;
        if (hs_ds26DCPv.notEvaluated) {
            hs_wild26DDmE = hs_ds26DCPv.hscall();
        }
        var hs_xzh26DCPB = hs_wild26DDmE.data[0];
        var hs_wild126DDmD = hs_ds126DCPy;
        if (hs_ds126DCPy.notEvaluated) {
            hs_wild126DDmD = hs_ds126DCPy.hscall();
        }
        var hs_yzh26DCPC = hs_wild126DDmD.data[0];
        var hs_wild226DCPE = $hs.modules.GHCziIntWord64.hs_or64zh.hscall(hs_xzh26DCPB, hs_yzh26DCPC);
        var $res = new $hs.Data(1);
        $res.data = [hs_wild226DCPE];
        return $res;
    };
    hs_zdczizazi425vejq.evaluate = function (hs_ds26DCPJ, hs_ds126DCPM) {
        var hs_wild26DDmG = hs_ds26DCPJ;
        if (hs_ds26DCPJ.notEvaluated) {
            hs_wild26DDmG = hs_ds26DCPJ.hscall();
        }
        var hs_xzh26DCPP = hs_wild26DDmG.data[0];
        var hs_wild126DDmF = hs_ds126DCPM;
        if (hs_ds126DCPM.notEvaluated) {
            hs_wild126DDmF = hs_ds126DCPM.hscall();
        }
        var hs_yzh26DCPQ = hs_wild126DDmF.data[0];
        var hs_wild226DCPS = $hs.modules.GHCziIntWord64.hs_and64zh.hscall(hs_xzh26DCPP, hs_yzh26DCPQ);
        var $res = new $hs.Data(1);
        $res.data = [hs_wild226DCPS];
        return $res;
    };
    hs_sat26DDmH.evaluateOnce = function () {
        var hs_sat26DDmP = new $hs.Thunk();
        hs_sat26DDmP.evaluateOnce = function () {
            var hs_sat26DDmJ = new $hs.Thunk();
            hs_sat26DDmJ.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2147483647);
            };
            var hs_sat26DDmO = new $hs.Thunk();
            hs_sat26DDmO.evaluateOnce = function () {
                var hs_sat26DDmM = new $hs.Thunk();
                hs_sat26DDmM.evaluateOnce = function () {
                    var hs_sat26DDmK = new $hs.Thunk();
                    hs_sat26DDmK.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2147483647);
                    };
                    var hs_sat26DDmL = new $hs.Thunk();
                    hs_sat26DDmL.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(4);
                    };
                    return $hs.modules.GHCziInteger.hs_timesInteger.hscall(hs_sat26DDmL, hs_sat26DDmK);
                };
                var hs_sat26DDmN = new $hs.Thunk();
                hs_sat26DDmN.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(8);
                };
                return $hs.modules.GHCziInteger.hs_plusInteger.hscall(hs_sat26DDmN, hs_sat26DDmM);
            };
            return $hs.modules.GHCziInteger.hs_timesInteger.hscall(hs_sat26DDmO, hs_sat26DDmJ);
        };
        var hs_sat26DDmQ = new $hs.Thunk();
        hs_sat26DDmQ.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(3);
        };
        return $hs.modules.GHCziInteger.hs_plusInteger.hscall(hs_sat26DDmQ, hs_sat26DDmP);
    };
    hs_sat26DDmI.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
    };
    this.hs_zdfBoundedWord64.data = [hs_zdcminBound125veki, hs_zdcmaxBound125vekg];
    this.hs_zdfEnumWord64.data = [hs_zdcsucc25vejS, hs_zdcpred25vejQ, hs_zdctoEnum25vejO, hs_zdcfromEnum225vejM, hs_zdcenumFrom25vejK, hs_zdcenumFromThen25vejI, hs_zdcenumFromTo25vejG, hs_zdcenumFromThenTo25vejE];
    this.hs_zdfShowWord64.data = [hs_zdcshowsPrec25vek8, hs_zdcshow25vek6, hs_zdcshowList25vek4];
    this.hs_zdfNumWord64.data = [$hs.modules.GHCziWord.hs_zdfEqWord64, $hs.modules.GHCziWord.hs_zdfShowWord64, hs_zdczp425vehq, hs_zdczt425veh6, hs_zdczm425vegM, hs_zdcnegate425vegz, hs_zdcabs425vegv, hs_zdcsignum125veka, hs_zdcfromInteger425vegp];
    this.hs_zdfRealWord64.data = [$hs.modules.GHCziWord.hs_zdfNumWord64, $hs.modules.GHCziWord.hs_zdfOrdWord64, hs_zdctoRational25veke];
    this.hs_zdfIntegralWord64.data = [$hs.modules.GHCziWord.hs_zdfRealWord64, $hs.modules.GHCziWord.hs_zdfEnumWord64, hs_zdcquot25vekc, hs_zdcrem25vek2, hs_zdcdiv25vek0, hs_zdcmod25vejY, hs_zdcquotRem25vejW, hs_zdcdivMod25vejU, hs_zdctoInteger425vehK];
    hs_zdcenumFromThenTo25vejE.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_integralEnumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcenumFromTo25vejG.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_integralEnumFromTo.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcenumFromThen25vejI.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_integralEnumFromThen.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64, $hs.modules.GHCziWord.hs_zdfBoundedWord64);
    };
    hs_zdcenumFrom25vejK.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_integralEnumFrom.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64, $hs.modules.GHCziWord.hs_zdfBoundedWord64);
    };
    hs_zdcfromEnum225vejM.evaluate = function (hs_x26DCQA) {
        var hs_wild26DCQD = hs_x26DCQA;
        if (hs_x26DCQA.notEvaluated) {
            hs_wild26DCQD = hs_x26DCQA.hscall();
        }
        var hs_xzh26DCQI = hs_wild26DCQD.data[0];
        var hs_sat26DDmT = new $hs.Thunk();
        hs_sat26DDmT.evaluateOnce = function () {
            var hs_sat26DDmR = new $hs.Thunk();
            hs_sat26DDmR.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziEnum.hs_zdfBoundedInt);
            };
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26DDmR);
        };
        var hs_wild126DDmS = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64, hs_wild26DCQD, hs_sat26DDmT);
        switch (hs_wild126DDmS.tag) {
        case 1:
            var hs_sat26DDmU = new $hs.Thunk();
            hs_sat26DDmU.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Word64\x00");
            };
            return $hs.modules.GHCziWord.hs_fromEnumError.hscall($hs.modules.GHCziWord.hs_zdfShowWord64, hs_sat26DDmU, hs_wild26DCQD);
        case 2:
            var hs_wild226DCQK = $hs.modules.GHCziIntWord64.hs_word64ToWordzh.hscall(hs_xzh26DCQI);
            var hs_sat26DDmV = hs_wild226DCQK;
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DDmV];
            return $res;
        }
    };
    hs_zdctoEnum25vejO.evaluate = function (hs_i26DCQN) {
        var hs_wild26DCQQ = hs_i26DCQN;
        if (hs_i26DCQN.notEvaluated) {
            hs_wild26DCQQ = hs_i26DCQN.hscall();
        }
        var hs_izh26DCQX = hs_wild26DCQQ.data[0];
        var hs_sat26DDmX = new $hs.Data(1);
        hs_sat26DDmX.data = [0];
        var hs_wild126DDmW = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_wild26DCQQ, hs_sat26DDmX);
        switch (hs_wild126DDmW.tag) {
        case 1:
            var hs_sat26DDmY = new $hs.Thunk();
            hs_sat26DDmY.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord64);
            };
            var hs_sat26DDmZ = new $hs.Thunk();
            hs_sat26DDmZ.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord64);
            };
            var hs_sat26DDn0 = new $hs.Data(1);
            hs_sat26DDn0.data = [hs_sat26DDmZ, hs_sat26DDmY];
            var hs_sat26DDn1 = new $hs.Thunk();
            hs_sat26DDn1.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Word64\x00");
            };
            return $hs.modules.GHCziWord.hs_toEnumError.hscall($hs.modules.GHCziWord.hs_zdfShowWord64, hs_sat26DDn1, hs_wild26DCQQ, hs_sat26DDn0);
        case 2:
            var hs_sat26DDn2 = hs_izh26DCQX;
            var hs_wild226DCR0 = $hs.modules.GHCziIntWord64.hs_wordToWord64zh.hscall(hs_sat26DDn2);
            var $res = new $hs.Data(1);
            $res.data = [hs_wild226DCR0];
            return $res;
        }
    };
    hs_zdcpred25vejQ.evaluate = function (hs_x26DCR2) {
        var hs_sat26DDn4 = new $hs.Thunk();
        hs_sat26DDn4.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord64);
        };
        var hs_wild26DDn3 = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord64, hs_x26DCR2, hs_sat26DDn4);
        switch (hs_wild26DDn3.tag) {
        case 1:
            var hs_sat26DDn5 = new $hs.Thunk();
            hs_sat26DDn5.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Word64\x00");
            };
            return $hs.modules.GHCziWord.hs_predError.hscall(hs_sat26DDn5);
        case 2:
            var hs_sat26DDn7 = new $hs.Thunk();
            hs_sat26DDn7.evaluateOnce = function () {
                var hs_sat26DDn6 = new $hs.Thunk();
                hs_sat26DDn6.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26DDn6);
            };
            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_x26DCR2, hs_sat26DDn7);
        }
    };
    hs_zdcsucc25vejS.evaluate = function (hs_x26DCR9) {
        var hs_sat26DDn9 = new $hs.Thunk();
        hs_sat26DDn9.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord64);
        };
        var hs_wild26DDn8 = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord64, hs_x26DCR9, hs_sat26DDn9);
        switch (hs_wild26DDn8.tag) {
        case 1:
            var hs_sat26DDna = new $hs.Thunk();
            hs_sat26DDna.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Word64\x00");
            };
            return $hs.modules.GHCziWord.hs_succError.hscall(hs_sat26DDna);
        case 2:
            var hs_sat26DDnc = new $hs.Thunk();
            hs_sat26DDnc.evaluateOnce = function () {
                var hs_sat26DDnb = new $hs.Thunk();
                hs_sat26DDnb.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26DDnb);
            };
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_x26DCR9, hs_sat26DDnc);
        }
    };
    hs_zdcdivMod25vejU.evaluate = function (hs_ds26DCRh, hs_y26DCRk) {
        var hs_wild26DDnd = hs_ds26DCRh;
        if (hs_ds26DCRh.notEvaluated) {
            hs_wild26DDnd = hs_ds26DCRh.hscall();
        }
        var hs_xzh26DCRr = hs_wild26DDnd.data[0];
        var hs_wild126DCRn = hs_y26DCRk;
        if (hs_y26DCRk.notEvaluated) {
            hs_wild126DCRn = hs_y26DCRk.hscall();
        }
        var hs_yzh26DCRs = hs_wild126DCRn.data[0];
        var hs_sat26DDng = new $hs.Thunk();
        hs_sat26DDng.evaluateOnce = function () {
            var hs_sat26DDne = new $hs.Thunk();
            hs_sat26DDne.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26DDne);
        };
        var hs_wild226DDnf = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord64, hs_wild126DCRn, hs_sat26DDng);
        switch (hs_wild226DDnf.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            var hs_sat26DDnh = new $hs.Thunk();
            hs_sat26DDnh.evaluateOnce = function () {
                var hs_wild326DCRx = $hs.modules.GHCziIntWord64.hs_remWord64zh.hscall(hs_xzh26DCRr, hs_yzh26DCRs);
                var $res = new $hs.Data(1);
                $res.data = [hs_wild326DCRx];
                return $res;
            };
            var hs_sat26DDni = new $hs.Thunk();
            hs_sat26DDni.evaluateOnce = function () {
                var hs_wild326DCRu = $hs.modules.GHCziIntWord64.hs_quotWord64zh.hscall(hs_xzh26DCRr, hs_yzh26DCRs);
                var $res = new $hs.Data(1);
                $res.data = [hs_wild326DCRu];
                return $res;
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DDni, hs_sat26DDnh];
            return $res;
        }
    };
    hs_zdcquotRem25vejW.evaluate = function (hs_ds26DCRB, hs_y26DCRE) {
        var hs_wild26DDnj = hs_ds26DCRB;
        if (hs_ds26DCRB.notEvaluated) {
            hs_wild26DDnj = hs_ds26DCRB.hscall();
        }
        var hs_xzh26DCRL = hs_wild26DDnj.data[0];
        var hs_wild126DCRH = hs_y26DCRE;
        if (hs_y26DCRE.notEvaluated) {
            hs_wild126DCRH = hs_y26DCRE.hscall();
        }
        var hs_yzh26DCRM = hs_wild126DCRH.data[0];
        var hs_sat26DDnm = new $hs.Thunk();
        hs_sat26DDnm.evaluateOnce = function () {
            var hs_sat26DDnk = new $hs.Thunk();
            hs_sat26DDnk.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26DDnk);
        };
        var hs_wild226DDnl = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord64, hs_wild126DCRH, hs_sat26DDnm);
        switch (hs_wild226DDnl.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            var hs_sat26DDnn = new $hs.Thunk();
            hs_sat26DDnn.evaluateOnce = function () {
                var hs_wild326DCRR = $hs.modules.GHCziIntWord64.hs_remWord64zh.hscall(hs_xzh26DCRL, hs_yzh26DCRM);
                var $res = new $hs.Data(1);
                $res.data = [hs_wild326DCRR];
                return $res;
            };
            var hs_sat26DDno = new $hs.Thunk();
            hs_sat26DDno.evaluateOnce = function () {
                var hs_wild326DCRO = $hs.modules.GHCziIntWord64.hs_quotWord64zh.hscall(hs_xzh26DCRL, hs_yzh26DCRM);
                var $res = new $hs.Data(1);
                $res.data = [hs_wild326DCRO];
                return $res;
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DDno, hs_sat26DDnn];
            return $res;
        }
    };
    hs_zdcmod25vejY.evaluate = function (hs_ds26DCRV, hs_y26DCRY) {
        var hs_wild26DDnp = hs_ds26DCRV;
        if (hs_ds26DCRV.notEvaluated) {
            hs_wild26DDnp = hs_ds26DCRV.hscall();
        }
        var hs_xzh26DCS5 = hs_wild26DDnp.data[0];
        var hs_wild126DCS1 = hs_y26DCRY;
        if (hs_y26DCRY.notEvaluated) {
            hs_wild126DCS1 = hs_y26DCRY.hscall();
        }
        var hs_yzh26DCS6 = hs_wild126DCS1.data[0];
        var hs_sat26DDns = new $hs.Thunk();
        hs_sat26DDns.evaluateOnce = function () {
            var hs_sat26DDnq = new $hs.Thunk();
            hs_sat26DDnq.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26DDnq);
        };
        var hs_wild226DDnr = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord64, hs_wild126DCS1, hs_sat26DDns);
        switch (hs_wild226DDnr.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            var hs_wild326DCS8 = $hs.modules.GHCziIntWord64.hs_remWord64zh.hscall(hs_xzh26DCS5, hs_yzh26DCS6);
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DCS8];
            return $res;
        }
    };
    hs_zdcdiv25vek0.evaluate = function (hs_ds26DCSb, hs_y26DCSe) {
        var hs_wild26DDnt = hs_ds26DCSb;
        if (hs_ds26DCSb.notEvaluated) {
            hs_wild26DDnt = hs_ds26DCSb.hscall();
        }
        var hs_xzh26DCSl = hs_wild26DDnt.data[0];
        var hs_wild126DCSh = hs_y26DCSe;
        if (hs_y26DCSe.notEvaluated) {
            hs_wild126DCSh = hs_y26DCSe.hscall();
        }
        var hs_yzh26DCSm = hs_wild126DCSh.data[0];
        var hs_sat26DDnw = new $hs.Thunk();
        hs_sat26DDnw.evaluateOnce = function () {
            var hs_sat26DDnu = new $hs.Thunk();
            hs_sat26DDnu.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26DDnu);
        };
        var hs_wild226DDnv = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord64, hs_wild126DCSh, hs_sat26DDnw);
        switch (hs_wild226DDnv.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            var hs_wild326DCSo = $hs.modules.GHCziIntWord64.hs_quotWord64zh.hscall(hs_xzh26DCSl, hs_yzh26DCSm);
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DCSo];
            return $res;
        }
    };
    hs_zdcrem25vek2.evaluate = function (hs_ds26DCSr, hs_y26DCSu) {
        var hs_wild26DDnx = hs_ds26DCSr;
        if (hs_ds26DCSr.notEvaluated) {
            hs_wild26DDnx = hs_ds26DCSr.hscall();
        }
        var hs_xzh26DCSB = hs_wild26DDnx.data[0];
        var hs_wild126DCSx = hs_y26DCSu;
        if (hs_y26DCSu.notEvaluated) {
            hs_wild126DCSx = hs_y26DCSu.hscall();
        }
        var hs_yzh26DCSC = hs_wild126DCSx.data[0];
        var hs_sat26DDnA = new $hs.Thunk();
        hs_sat26DDnA.evaluateOnce = function () {
            var hs_sat26DDny = new $hs.Thunk();
            hs_sat26DDny.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26DDny);
        };
        var hs_wild226DDnz = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord64, hs_wild126DCSx, hs_sat26DDnA);
        switch (hs_wild226DDnz.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            var hs_wild326DCSE = $hs.modules.GHCziIntWord64.hs_remWord64zh.hscall(hs_xzh26DCSB, hs_yzh26DCSC);
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DCSE];
            return $res;
        }
    };
    hs_zdcshowList25vek4.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall($hs.modules.GHCziWord.hs_zdfShowWord64);
    };
    hs_zdcshow25vek6.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziWord.hs_zdfShowWord64);
    };
    hs_zdcshowsPrec25vek8.evaluate = function (hs_p26DCSH, hs_x26DCSI) {
        var hs_sat26DDnB = new $hs.Thunk();
        hs_sat26DDnB.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64, hs_x26DCSI);
        };
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziNum.hs_zdfShowInteger, hs_p26DCSH, hs_sat26DDnB);
    };
    hs_zdcsignum125veka.evaluate = function (hs_ds26DCSL) {
        var hs_sat26DDnE = new $hs.Thunk();
        hs_sat26DDnE.evaluateOnce = function () {
            var hs_sat26DDnC = new $hs.Thunk();
            hs_sat26DDnC.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26DDnC);
        };
        var hs_wild26DDnD = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord64, hs_ds26DCSL, hs_sat26DDnE);
        switch (hs_wild26DDnD.tag) {
        case 1:
            var hs_sat26DDnF = new $hs.Thunk();
            hs_sat26DDnF.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26DDnF);
        case 2:
            var hs_sat26DDnG = new $hs.Thunk();
            hs_sat26DDnG.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26DDnG);
        }
    };
    hs_zdcquot25vekc.evaluate = function (hs_ds26DCST, hs_y26DCSW) {
        var hs_wild26DDnH = hs_ds26DCST;
        if (hs_ds26DCST.notEvaluated) {
            hs_wild26DDnH = hs_ds26DCST.hscall();
        }
        var hs_xzh26DCT3 = hs_wild26DDnH.data[0];
        var hs_wild126DCSZ = hs_y26DCSW;
        if (hs_y26DCSW.notEvaluated) {
            hs_wild126DCSZ = hs_y26DCSW.hscall();
        }
        var hs_yzh26DCT4 = hs_wild126DCSZ.data[0];
        var hs_sat26DDnK = new $hs.Thunk();
        hs_sat26DDnK.evaluateOnce = function () {
            var hs_sat26DDnI = new $hs.Thunk();
            hs_sat26DDnI.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26DDnI);
        };
        var hs_wild226DDnJ = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord64, hs_wild126DCSZ, hs_sat26DDnK);
        switch (hs_wild226DDnJ.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            var hs_wild326DCT6 = $hs.modules.GHCziIntWord64.hs_quotWord64zh.hscall(hs_xzh26DCT3, hs_yzh26DCT4);
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DCT6];
            return $res;
        }
    };
    hs_zdctoRational25veke.evaluate = function (hs_x26DCT8) {
        var hs_sat26DDnL = new $hs.Thunk();
        hs_sat26DDnL.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        var hs_sat26DDnM = new $hs.Thunk();
        hs_sat26DDnM.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64, hs_x26DCT8);
        };
        return $hs.modules.GHCziReal.hs_zv.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26DDnM, hs_sat26DDnL);
    };
    hs_zdcmaxBound125vekg.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26DDmH);
    };
    hs_zdcminBound125veki.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26DDmI);
    };
    this.hs_zdfBitsWord64.data = [$hs.modules.GHCziWord.hs_zdfNumWord64, hs_zdczizazi425vejq, hs_zdczizbzi425vejc, hs_zdcxor425veiY, hs_zdccomplement125veiP, hs_zdcshift425veio, hs_zdcrotate425vehZ, hs_zdcbit25venm, hs_zdcsetBit25venk, hs_zdcclearBit25veni, hs_zdccomplementBit25veng, hs_zdctestBit25vene, hs_zdcbitSizze425vehV, hs_zdcisSigned425vehR, hs_zdcshiftL25venc, hs_zdcshiftR25vena, hs_zdcrotateL25ven8, hs_zdcrotateR25ven6];
    hs_zdcrotateR25ven6.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmrotateR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcrotateL25ven8.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmrotateL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcshiftR25vena.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmshiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcshiftL25venc.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmshiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdctestBit25vene.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmtestBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdccomplementBit25veng.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmcomplementBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcclearBit25veni.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmclearBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcsetBit25venk.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmsetBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcbit25venm.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmbit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcinRange25veno.evaluate = function (hs_ds26DCTH, hs_i26DCTM) {
        var hs_wild26DDnN = hs_ds26DCTH;
        if (hs_ds26DCTH.notEvaluated) {
            hs_wild26DDnN = hs_ds26DCTH.hscall();
        }
        var hs_m26DCTL = hs_wild26DDnN.data[0];
        var hs_n26DCTO = hs_wild26DDnN.data[1];
        var hs_sat26DDnO = new $hs.Thunk();
        hs_sat26DDnO.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64, hs_i26DCTM, hs_n26DCTO);
        };
        var hs_sat26DDnP = new $hs.Thunk();
        hs_sat26DDnP.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64, hs_m26DCTL, hs_i26DCTM);
        };
        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DDnP, hs_sat26DDnO);
    };
    hs_zdcunsafeIndex25venB.evaluate = function (hs_ds26DCTU, hs_i26DCTY) {
        var hs_wild26DDnQ = hs_ds26DCTU;
        if (hs_ds26DCTU.notEvaluated) {
            hs_wild26DDnQ = hs_ds26DCTU.hscall();
        }
        var hs_m26DCTZ = hs_wild26DDnQ.data[0];
        var hs_sat26DDnS = new $hs.Thunk();
        hs_sat26DDnS.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_i26DCTY, hs_m26DCTZ);
        };
        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DDnS);
    };
    hs_zdcrange25venM.evaluate = function (hs_ds26DCU4) {
        var hs_wild26DDnT = hs_ds26DCU4;
        if (hs_ds26DCU4.notEvaluated) {
            hs_wild26DDnT = hs_ds26DCU4.hscall();
        }
        var hs_m26DCU8 = hs_wild26DDnT.data[0];
        var hs_n26DCU9 = hs_wild26DDnT.data[1];
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64, hs_m26DCU8, hs_n26DCU9);
    };
    this.hs_zdfIxWord64.data = [$hs.modules.GHCziWord.hs_zdfOrdWord64, hs_zdcrange25venM, hs_zdcindex25venZ, hs_zdcunsafeIndex25venB, hs_zdcinRange25veno, hs_zdcrangeSizze25venX, hs_zdcunsafeRangeSizze25venV];
    hs_zdcunsafeRangeSizze25venV.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmunsafeRangeSizze.hscall($hs.modules.GHCziWord.hs_zdfIxWord64);
    };
    hs_zdcrangeSizze25venX.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmrangeSizze.hscall($hs.modules.GHCziWord.hs_zdfIxWord64);
    };
    hs_zdcindex25venZ.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmindex.hscall($hs.modules.GHCziWord.hs_zdfIxWord64);
    };
    hs_zdcreadsPrec25veo1.evaluate = function (hs_p26DCUB, hs_s26DCUC) {
        var hs_ds26DCUz = new $hs.Func(1);
        hs_ds26DCUz.evaluate = function (hs_ds126DCUm) {
            var hs_ds226DDnU = hs_ds126DCUm;
            if (hs_ds126DCUm.notEvaluated) {
                hs_ds226DDnU = hs_ds126DCUm.hscall();
            }
            switch (hs_ds226DDnU.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_ds326DCUq = hs_ds226DDnU.data[0];
                var hs_ds426DCUy = hs_ds226DDnU.data[1];
                var hs_wild26DDnV = hs_ds326DCUq;
                if (hs_ds326DCUq.notEvaluated) {
                    hs_wild26DDnV = hs_ds326DCUq.hscall();
                }
                var hs_x26DCUu = hs_wild26DDnV.data[0];
                var hs_r26DCUw = hs_wild26DDnV.data[1];
                var hs_sat26DDnW = new $hs.Thunk();
                hs_sat26DDnW.evaluateOnce = function () {
                    return hs_ds26DCUz.hscall(hs_ds426DCUy);
                };
                var hs_sat26DDnX = new $hs.Thunk();
                hs_sat26DDnX.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_x26DCUu);
                };
                var hs_sat26DDnY = new $hs.Data(1);
                hs_sat26DDnY.data = [hs_sat26DDnX, hs_r26DCUw];
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26DDnY, hs_sat26DDnW];
                return $res;
            }
        };
        var hs_sat26DDnZ = new $hs.Thunk();
        hs_sat26DDnZ.evaluateOnce = function () {
            return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziRead.hs_zdfReadInteger, hs_p26DCUB, hs_s26DCUC);
        };
        return hs_ds26DCUz.hscall(hs_sat26DDnZ);
    };
    this.hs_zdfReadWord64.data = [hs_zdcreadsPrec25veo1, hs_zdcreadList25veot, hs_zdcreadPrec25veor, hs_zdcreadListPrec25veop];
    hs_zdcreadListPrec25veop.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord64);
    };
    hs_zdcreadPrec25veor.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord64);
    };
    hs_zdcreadList25veot.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadList.hscall($hs.modules.GHCziWord.hs_zdfReadWord64);
    };
    hs_zdczlze125veov.evaluate = function (hs_a26DCUO, hs_b26DCUR) {
        var hs_wild26DDo1 = hs_a26DCUO;
        if (hs_a26DCUO.notEvaluated) {
            hs_wild26DDo1 = hs_a26DCUO.hscall();
        }
        var hs_a126DCUU = hs_wild26DDo1.data[0];
        var hs_wild126DDo0 = hs_b26DCUR;
        if (hs_b26DCUR.notEvaluated) {
            hs_wild126DDo0 = hs_b26DCUR.hscall();
        }
        var hs_b126DCUV = hs_wild126DDo0.data[0];
        return $hs.Word.le(hs_a126DCUU, hs_b126DCUV) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczg125veoH.evaluate = function (hs_a26DCV0, hs_b26DCV3) {
        var hs_wild26DDo3 = hs_a26DCV0;
        if (hs_a26DCV0.notEvaluated) {
            hs_wild26DDo3 = hs_a26DCV0.hscall();
        }
        var hs_a126DCV6 = hs_wild26DDo3.data[0];
        var hs_wild126DDo2 = hs_b26DCV3;
        if (hs_b26DCV3.notEvaluated) {
            hs_wild126DDo2 = hs_b26DCV3.hscall();
        }
        var hs_b126DCV7 = hs_wild126DDo2.data[0];
        return $hs.Word.gt(hs_a126DCV6, hs_b126DCV7) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczgze125veoT.evaluate = function (hs_a26DCVc, hs_b26DCVf) {
        var hs_wild26DDo5 = hs_a26DCVc;
        if (hs_a26DCVc.notEvaluated) {
            hs_wild26DDo5 = hs_a26DCVc.hscall();
        }
        var hs_a126DCVi = hs_wild26DDo5.data[0];
        var hs_wild126DDo4 = hs_b26DCVf;
        if (hs_b26DCVf.notEvaluated) {
            hs_wild126DDo4 = hs_b26DCVf.hscall();
        }
        var hs_b126DCVj = hs_wild126DDo4.data[0];
        return $hs.Word.ge(hs_a126DCVi, hs_b126DCVj) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczl125vep5.evaluate = function (hs_a26DCVo, hs_b26DCVr) {
        var hs_wild26DDo7 = hs_a26DCVo;
        if (hs_a26DCVo.notEvaluated) {
            hs_wild26DDo7 = hs_a26DCVo.hscall();
        }
        var hs_a126DCVu = hs_wild26DDo7.data[0];
        var hs_wild126DDo6 = hs_b26DCVr;
        if (hs_b26DCVr.notEvaluated) {
            hs_wild126DDo6 = hs_b26DCVr.hscall();
        }
        var hs_b126DCVv = hs_wild126DDo6.data[0];
        return $hs.Word.lt(hs_a126DCVu, hs_b126DCVv) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdccompare125veph.evaluate = function (hs_a26DCVA, hs_b26DCVD) {
        var hs_wild26DDob = hs_a26DCVA;
        if (hs_a26DCVA.notEvaluated) {
            hs_wild26DDob = hs_a26DCVA.hscall();
        }
        var hs_a126DCVG = hs_wild26DDob.data[0];
        var hs_wild126DDoa = hs_b26DCVD;
        if (hs_b26DCVD.notEvaluated) {
            hs_wild126DDoa = hs_b26DCVD.hscall();
        }
        var hs_b126DCVH = hs_wild126DDoa.data[0];
        var hs_wild226DDo9 = $hs.Word.lt(hs_a126DCVG, hs_b126DCVH) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226DDo9.tag) {
        case 1:
            var hs_wild326DDo8 = hs_a126DCVG == hs_b126DCVH ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild326DDo8.tag) {
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
    hs_zdczeze125vepv.evaluate = function (hs_ds26DCVO, hs_ds126DCVR) {
        var hs_wild26DDod = hs_ds26DCVO;
        if (hs_ds26DCVO.notEvaluated) {
            hs_wild26DDod = hs_ds26DCVO.hscall();
        }
        var hs_a126DCVU = hs_wild26DDod.data[0];
        var hs_wild126DDoc = hs_ds126DCVR;
        if (hs_ds126DCVR.notEvaluated) {
            hs_wild126DDoc = hs_ds126DCVR.hscall();
        }
        var hs_b126DCVV = hs_wild126DDoc.data[0];
        return hs_a126DCVU == hs_b126DCVV ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    this.hs_zdfEqWord.data = [hs_zdczeze125vepv, hs_zdczsze125vepH];
    hs_zdczsze125vepH.evaluate = function (hs_a26DCW0, hs_b26DCW1) {
        var hs_sat26DDoe = new $hs.Thunk();
        hs_sat26DDoe.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord, hs_a26DCW0, hs_b26DCW1);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DDoe);
    };
    this.hs_zdfOrdWord.data = [$hs.modules.GHCziWord.hs_zdfEqWord, hs_zdccompare125veph, hs_zdczl125vep5, hs_zdczgze125veoT, hs_zdczg125veoH, hs_zdczlze125veov, hs_zdcmax125vepQ, hs_zdcmin125vepO];
    hs_zdcmin125vepO.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmin.hscall($hs.modules.GHCziWord.hs_zdfOrdWord);
    };
    hs_zdcmax125vepQ.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmax.hscall($hs.modules.GHCziWord.hs_zdfOrdWord);
    };
    hs_zdcinRange125vepS.evaluate = function (hs_ds26DCWb, hs_i26DCWg) {
        var hs_wild26DDof = hs_ds26DCWb;
        if (hs_ds26DCWb.notEvaluated) {
            hs_wild26DDof = hs_ds26DCWb.hscall();
        }
        var hs_m26DCWf = hs_wild26DDof.data[0];
        var hs_n26DCWi = hs_wild26DDof.data[1];
        var hs_sat26DDog = new $hs.Thunk();
        hs_sat26DDog.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord, hs_i26DCWg, hs_n26DCWi);
        };
        var hs_sat26DDoh = new $hs.Thunk();
        hs_sat26DDoh.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord, hs_m26DCWf, hs_i26DCWg);
        };
        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DDoh, hs_sat26DDog);
    };
    hs_zdcquot125veq5.evaluate = function (hs_ds26DCWo, hs_y26DCWr) {
        var hs_wild26DDoi = hs_ds26DCWo;
        if (hs_ds26DCWo.notEvaluated) {
            hs_wild26DDoi = hs_ds26DCWo.hscall();
        }
        var hs_xzh26DCWx = hs_wild26DDoi.data[0];
        var hs_wild126DCWu = hs_y26DCWr;
        if (hs_y26DCWr.notEvaluated) {
            hs_wild126DCWu = hs_y26DCWr.hscall();
        }
        var hs_yzh26DCWy = hs_wild126DCWu.data[0];
        var hs_sat26DDok = new $hs.Data(1);
        hs_sat26DDok.data = [0];
        var hs_wild226DDoj = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord, hs_wild126DCWu, hs_sat26DDok);
        switch (hs_wild226DDoj.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            throw "primitive operation quotWord#. Not implemeted yet.";
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DCWA];
            return $res;
        }
    };
    hs_zdcrem125veqm.evaluate = function (hs_ds26DCWF, hs_y26DCWI) {
        var hs_wild26DDol = hs_ds26DCWF;
        if (hs_ds26DCWF.notEvaluated) {
            hs_wild26DDol = hs_ds26DCWF.hscall();
        }
        var hs_xzh26DCWO = hs_wild26DDol.data[0];
        var hs_wild126DCWL = hs_y26DCWI;
        if (hs_y26DCWI.notEvaluated) {
            hs_wild126DCWL = hs_y26DCWI.hscall();
        }
        var hs_yzh26DCWP = hs_wild126DCWL.data[0];
        var hs_sat26DDon = new $hs.Data(1);
        hs_sat26DDon.data = [0];
        var hs_wild226DDom = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord, hs_wild126DCWL, hs_sat26DDon);
        switch (hs_wild226DDom.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            throw "primitive operation remWord#. Not implemeted yet.";
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DCWR];
            return $res;
        }
    };
    hs_zdcdiv125veqD.evaluate = function (hs_ds26DCWW, hs_y26DCWZ) {
        var hs_wild26DDoo = hs_ds26DCWW;
        if (hs_ds26DCWW.notEvaluated) {
            hs_wild26DDoo = hs_ds26DCWW.hscall();
        }
        var hs_xzh26DCX5 = hs_wild26DDoo.data[0];
        var hs_wild126DCX2 = hs_y26DCWZ;
        if (hs_y26DCWZ.notEvaluated) {
            hs_wild126DCX2 = hs_y26DCWZ.hscall();
        }
        var hs_yzh26DCX6 = hs_wild126DCX2.data[0];
        var hs_sat26DDoq = new $hs.Data(1);
        hs_sat26DDoq.data = [0];
        var hs_wild226DDop = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord, hs_wild126DCX2, hs_sat26DDoq);
        switch (hs_wild226DDop.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            throw "primitive operation quotWord#. Not implemeted yet.";
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DCX8];
            return $res;
        }
    };
    hs_zdcmod125veqU.evaluate = function (hs_ds26DCXd, hs_y26DCXg) {
        var hs_wild26DDor = hs_ds26DCXd;
        if (hs_ds26DCXd.notEvaluated) {
            hs_wild26DDor = hs_ds26DCXd.hscall();
        }
        var hs_xzh26DCXm = hs_wild26DDor.data[0];
        var hs_wild126DCXj = hs_y26DCXg;
        if (hs_y26DCXg.notEvaluated) {
            hs_wild126DCXj = hs_y26DCXg.hscall();
        }
        var hs_yzh26DCXn = hs_wild126DCXj.data[0];
        var hs_sat26DDot = new $hs.Data(1);
        hs_sat26DDot.data = [0];
        var hs_wild226DDos = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord, hs_wild126DCXj, hs_sat26DDot);
        switch (hs_wild226DDos.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            throw "primitive operation remWord#. Not implemeted yet.";
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DCXp];
            return $res;
        }
    };
    hs_zdcquotRem125verb.evaluate = function (hs_ds26DCXu, hs_y26DCXx) {
        var hs_wild26DDou = hs_ds26DCXu;
        if (hs_ds26DCXu.notEvaluated) {
            hs_wild26DDou = hs_ds26DCXu.hscall();
        }
        var hs_xzh26DCXD = hs_wild26DDou.data[0];
        var hs_wild126DCXA = hs_y26DCXx;
        if (hs_y26DCXx.notEvaluated) {
            hs_wild126DCXA = hs_y26DCXx.hscall();
        }
        var hs_yzh26DCXE = hs_wild126DCXA.data[0];
        var hs_sat26DDow = new $hs.Data(1);
        hs_sat26DDow.data = [0];
        var hs_wild226DDov = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord, hs_wild126DCXA, hs_sat26DDow);
        switch (hs_wild226DDov.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            var hs_sat26DDox = new $hs.Thunk();
            hs_sat26DDox.evaluateOnce = function () {
                throw "primitive operation remWord#. Not implemeted yet.";
                var $res = new $hs.Data(1);
                $res.data = [hs_wild326DCXJ];
                return $res;
            };
            var hs_sat26DDoy = new $hs.Thunk();
            hs_sat26DDoy.evaluateOnce = function () {
                throw "primitive operation quotWord#. Not implemeted yet.";
                var $res = new $hs.Data(1);
                $res.data = [hs_wild326DCXG];
                return $res;
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DDoy, hs_sat26DDox];
            return $res;
        }
    };
    hs_zdcdivMod125verw.evaluate = function (hs_ds26DCXP, hs_y26DCXS) {
        var hs_wild26DDoz = hs_ds26DCXP;
        if (hs_ds26DCXP.notEvaluated) {
            hs_wild26DDoz = hs_ds26DCXP.hscall();
        }
        var hs_xzh26DCXY = hs_wild26DDoz.data[0];
        var hs_wild126DCXV = hs_y26DCXS;
        if (hs_y26DCXS.notEvaluated) {
            hs_wild126DCXV = hs_y26DCXS.hscall();
        }
        var hs_yzh26DCXZ = hs_wild126DCXV.data[0];
        var hs_sat26DDoB = new $hs.Data(1);
        hs_sat26DDoB.data = [0];
        var hs_wild226DDoA = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord, hs_wild126DCXV, hs_sat26DDoB);
        switch (hs_wild226DDoA.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            var hs_sat26DDoC = new $hs.Thunk();
            hs_sat26DDoC.evaluateOnce = function () {
                throw "primitive operation remWord#. Not implemeted yet.";
                var $res = new $hs.Data(1);
                $res.data = [hs_wild326DCY4];
                return $res;
            };
            var hs_sat26DDoD = new $hs.Thunk();
            hs_sat26DDoD.evaluateOnce = function () {
                throw "primitive operation quotWord#. Not implemeted yet.";
                var $res = new $hs.Data(1);
                $res.data = [hs_wild326DCY1];
                return $res;
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DDoD, hs_sat26DDoC];
            return $res;
        }
    };
    this.hs_zdfShowWord.data = [hs_zdcshowsPrec125ves7, hs_zdcshow125verT, hs_zdcshowList125verR];
    this.hs_zdfNumWord.data = [$hs.modules.GHCziWord.hs_zdfEqWord, $hs.modules.GHCziWord.hs_zdfShowWord, hs_zdczp25ve51, hs_zdczt25ve4O, hs_zdczm25ve4B, hs_zdcnegate25ve4r, hs_zdcabs25ve4n, hs_zdcsignum25ve4f, hs_zdcfromInteger25ve49];
    this.hs_zdfRealWord.data = [$hs.modules.GHCziWord.hs_zdfNumWord, $hs.modules.GHCziWord.hs_zdfOrdWord, hs_zdctoRational125verV];
    this.hs_zdfEnumWord.data = [hs_zdcsucc125vesd, hs_zdcpred125vesb, hs_zdctoEnum125ves9, hs_zdcfromEnum325ves5, hs_zdcenumFrom125ves3, hs_zdcenumFromThen125ves1, hs_zdcenumFromTo125verZ, hs_zdcenumFromThenTo125verX];
    this.hs_zdfIntegralWord.data = [$hs.modules.GHCziWord.hs_zdfRealWord, $hs.modules.GHCziWord.hs_zdfEnumWord, hs_zdcquot125veq5, hs_zdcrem125veqm, hs_zdcdiv125veqD, hs_zdcmod125veqU, hs_zdcquotRem125verb, hs_zdcdivMod125verw, hs_zdctoInteger25ve5e];
    hs_zdcshowList125verR.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall($hs.modules.GHCziWord.hs_zdfShowWord);
    };
    hs_zdcshow125verT.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziWord.hs_zdfShowWord);
    };
    hs_zdctoRational125verV.evaluate = function (hs_x26DCYv) {
        var hs_sat26DDoE = new $hs.Thunk();
        hs_sat26DDoE.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        var hs_sat26DDoF = new $hs.Thunk();
        hs_sat26DDoF.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord, hs_x26DCYv);
        };
        return $hs.modules.GHCziReal.hs_zv.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26DDoF, hs_sat26DDoE);
    };
    hs_zdcenumFromThenTo125verX.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_integralEnumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord);
    };
    hs_zdcenumFromTo125verZ.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_integralEnumFromTo.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord);
    };
    hs_zdcenumFromThen125ves1.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_integralEnumFromThen.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord, $hs.modules.GHCziWord.hs_zdfBoundedWord);
    };
    hs_zdcenumFrom125ves3.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_integralEnumFrom.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord, $hs.modules.GHCziWord.hs_zdfBoundedWord);
    };
    hs_zdcfromEnum325ves5.evaluate = function (hs_x26DCYz) {
        var hs_wild26DCYC = hs_x26DCYz;
        if (hs_x26DCYz.notEvaluated) {
            hs_wild26DCYC = hs_x26DCYz.hscall();
        }
        var hs_xzh26DCYH = hs_wild26DCYC.data[0];
        var hs_sat26DDoI = new $hs.Thunk();
        hs_sat26DDoI.evaluateOnce = function () {
            var hs_sat26DDoG = new $hs.Thunk();
            hs_sat26DDoG.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziEnum.hs_zdfBoundedInt);
            };
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord, hs_sat26DDoG);
        };
        var hs_wild126DDoH = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord, hs_wild26DCYC, hs_sat26DDoI);
        switch (hs_wild126DDoH.tag) {
        case 1:
            var hs_sat26DDoJ = new $hs.Thunk();
            hs_sat26DDoJ.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Word\x00");
            };
            return $hs.modules.GHCziWord.hs_fromEnumError.hscall($hs.modules.GHCziWord.hs_zdfShowWord, hs_sat26DDoJ, hs_wild26DCYC);
        case 2:
            var hs_sat26DDoK = hs_xzh26DCYH;
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DDoK];
            return $res;
        }
    };
    hs_zdcshowsPrec125ves7.evaluate = function (hs_p26DCYL, hs_x26DCYM) {
        var hs_sat26DDoL = new $hs.Thunk();
        hs_sat26DDoL.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord, hs_x26DCYM);
        };
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziNum.hs_zdfShowInteger, hs_p26DCYL, hs_sat26DDoL);
    };
    hs_zdctoEnum125ves9.evaluate = function (hs_i26DCYP) {
        var hs_wild26DCYS = hs_i26DCYP;
        if (hs_i26DCYP.notEvaluated) {
            hs_wild26DCYS = hs_i26DCYP.hscall();
        }
        var hs_izh26DCYZ = hs_wild26DCYS.data[0];
        var hs_sat26DDoN = new $hs.Data(1);
        hs_sat26DDoN.data = [0];
        var hs_wild126DDoM = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_wild26DCYS, hs_sat26DDoN);
        switch (hs_wild126DDoM.tag) {
        case 1:
            var hs_sat26DDoO = new $hs.Thunk();
            hs_sat26DDoO.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord);
            };
            var hs_sat26DDoP = new $hs.Thunk();
            hs_sat26DDoP.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord);
            };
            var hs_sat26DDoQ = new $hs.Data(1);
            hs_sat26DDoQ.data = [hs_sat26DDoP, hs_sat26DDoO];
            var hs_sat26DDoR = new $hs.Thunk();
            hs_sat26DDoR.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Word\x00");
            };
            return $hs.modules.GHCziWord.hs_toEnumError.hscall($hs.modules.GHCziWord.hs_zdfShowWord, hs_sat26DDoR, hs_wild26DCYS, hs_sat26DDoQ);
        case 2:
            var hs_sat26DDoS = hs_izh26DCYZ;
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DDoS];
            return $res;
        }
    };
    hs_zdcpred125vesb.evaluate = function (hs_x26DCZ2) {
        var hs_sat26DDoU = new $hs.Thunk();
        hs_sat26DDoU.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord);
        };
        var hs_wild26DDoT = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord, hs_x26DCZ2, hs_sat26DDoU);
        switch (hs_wild26DDoT.tag) {
        case 1:
            var hs_sat26DDoV = new $hs.Thunk();
            hs_sat26DDoV.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Word\x00");
            };
            return $hs.modules.GHCziWord.hs_predError.hscall(hs_sat26DDoV);
        case 2:
            var hs_sat26DDoW = new $hs.Data(1);
            hs_sat26DDoW.data = [1];
            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord, hs_x26DCZ2, hs_sat26DDoW);
        }
    };
    hs_zdcsucc125vesd.evaluate = function (hs_x26DCZ8) {
        var hs_sat26DDoY = new $hs.Thunk();
        hs_sat26DDoY.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord);
        };
        var hs_wild26DDoX = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord, hs_x26DCZ8, hs_sat26DDoY);
        switch (hs_wild26DDoX.tag) {
        case 1:
            var hs_sat26DDoZ = new $hs.Thunk();
            hs_sat26DDoZ.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Word\x00");
            };
            return $hs.modules.GHCziWord.hs_succError.hscall(hs_sat26DDoZ);
        case 2:
            var hs_sat26DDp0 = new $hs.Data(1);
            hs_sat26DDp0.data = [1];
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord, hs_x26DCZ8, hs_sat26DDp0);
        }
    };
    this.hs_zdfBitsWord.data = [$hs.modules.GHCziWord.hs_zdfNumWord, hs_zdczizazi25ve6R, hs_zdczizbzi25ve6E, hs_zdcxor25ve6r, hs_zdccomplement25ve6g, hs_zdcshift25ve5Y, hs_zdcrotate25ve5B, hs_zdcbit125vete, hs_zdcsetBit125vetc, hs_zdcclearBit125veta, hs_zdccomplementBit125vet8, hs_zdctestBit125vet6, hs_zdcbitSizze25ve5x, hs_zdcisSigned25ve5t, hs_zdcshiftL125vet4, hs_zdcshiftR125vet2, hs_zdcrotateL125vet0, hs_zdcrotateR125vesY];
    hs_zdcrotateR125vesY.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmrotateR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdcrotateL125vet0.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmrotateL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdcshiftR125vet2.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmshiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdcshiftL125vet4.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmshiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdctestBit125vet6.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmtestBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdccomplementBit125vet8.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmcomplementBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdcclearBit125veta.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmclearBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdcsetBit125vetc.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmsetBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdcbit125vete.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmbit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdcreadsPrec125vetg.evaluate = function (hs_p26DCZQ, hs_s26DCZR) {
        var hs_ds26DCZO = new $hs.Func(1);
        hs_ds26DCZO.evaluate = function (hs_ds126DCZB) {
            var hs_ds226DDp1 = hs_ds126DCZB;
            if (hs_ds126DCZB.notEvaluated) {
                hs_ds226DDp1 = hs_ds126DCZB.hscall();
            }
            switch (hs_ds226DDp1.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_ds326DCZF = hs_ds226DDp1.data[0];
                var hs_ds426DCZN = hs_ds226DDp1.data[1];
                var hs_wild26DDp2 = hs_ds326DCZF;
                if (hs_ds326DCZF.notEvaluated) {
                    hs_wild26DDp2 = hs_ds326DCZF.hscall();
                }
                var hs_x26DCZJ = hs_wild26DDp2.data[0];
                var hs_r26DCZL = hs_wild26DDp2.data[1];
                var hs_sat26DDp3 = new $hs.Thunk();
                hs_sat26DDp3.evaluateOnce = function () {
                    return hs_ds26DCZO.hscall(hs_ds426DCZN);
                };
                var hs_sat26DDp4 = new $hs.Thunk();
                hs_sat26DDp4.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord, hs_x26DCZJ);
                };
                var hs_sat26DDp5 = new $hs.Data(1);
                hs_sat26DDp5.data = [hs_sat26DDp4, hs_r26DCZL];
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26DDp5, hs_sat26DDp3];
                return $res;
            }
        };
        var hs_sat26DDp6 = new $hs.Thunk();
        hs_sat26DDp6.evaluateOnce = function () {
            return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziRead.hs_zdfReadInteger, hs_p26DCZQ, hs_s26DCZR);
        };
        return hs_ds26DCZO.hscall(hs_sat26DDp6);
    };
    this.hs_zdfReadWord.data = [hs_zdcreadsPrec125vetg, hs_zdcreadList125vetI, hs_zdcreadPrec125vetG, hs_zdcreadListPrec125vetE];
    hs_zdcreadListPrec125vetE.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord);
    };
    hs_zdcreadPrec125vetG.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord);
    };
    hs_zdcreadList125vetI.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadList.hscall($hs.modules.GHCziWord.hs_zdfReadWord);
    };
    hs_zdcunsafeIndex125vetK.evaluate = function (hs_ds26DD03, hs_i26DD07) {
        var hs_wild26DDp7 = hs_ds26DD03;
        if (hs_ds26DD03.notEvaluated) {
            hs_wild26DDp7 = hs_ds26DD03.hscall();
        }
        var hs_m26DD08 = hs_wild26DDp7.data[0];
        var hs_sat26DDp9 = new $hs.Thunk();
        hs_sat26DDp9.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord, hs_i26DD07, hs_m26DD08);
        };
        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DDp9);
    };
    hs_zdcrange125vetV.evaluate = function (hs_ds26DD0d) {
        var hs_wild26DDpa = hs_ds26DD0d;
        if (hs_ds26DD0d.notEvaluated) {
            hs_wild26DDpa = hs_ds26DD0d.hscall();
        }
        var hs_m26DD0h = hs_wild26DDpa.data[0];
        var hs_n26DD0i = hs_wild26DDpa.data[1];
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord, hs_m26DD0h, hs_n26DD0i);
    };
    this.hs_zdfIxWord.data = [$hs.modules.GHCziWord.hs_zdfOrdWord, hs_zdcrange125vetV, hs_zdcindex125veu8, hs_zdcunsafeIndex125vetK, hs_zdcinRange125vepS, hs_zdcrangeSizze125veu6, hs_zdcunsafeRangeSizze125veu4];
    hs_zdcunsafeRangeSizze125veu4.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmunsafeRangeSizze.hscall($hs.modules.GHCziWord.hs_zdfIxWord);
    };
    hs_zdcrangeSizze125veu6.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmrangeSizze.hscall($hs.modules.GHCziWord.hs_zdfIxWord);
    };
    hs_zdcindex125veu8.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmindex.hscall($hs.modules.GHCziWord.hs_zdfIxWord);
    };
    hs_zdczlze225veua.evaluate = function (hs_a26DD0t, hs_b26DD0w) {
        var hs_wild26DDpc = hs_a26DD0t;
        if (hs_a26DD0t.notEvaluated) {
            hs_wild26DDpc = hs_a26DD0t.hscall();
        }
        var hs_a126DD0z = hs_wild26DDpc.data[0];
        var hs_wild126DDpb = hs_b26DD0w;
        if (hs_b26DD0w.notEvaluated) {
            hs_wild126DDpb = hs_b26DD0w.hscall();
        }
        var hs_b126DD0A = hs_wild126DDpb.data[0];
        return $hs.Word.le(hs_a126DD0z, hs_b126DD0A) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczg225veum.evaluate = function (hs_a26DD0F, hs_b26DD0I) {
        var hs_wild26DDpe = hs_a26DD0F;
        if (hs_a26DD0F.notEvaluated) {
            hs_wild26DDpe = hs_a26DD0F.hscall();
        }
        var hs_a126DD0L = hs_wild26DDpe.data[0];
        var hs_wild126DDpd = hs_b26DD0I;
        if (hs_b26DD0I.notEvaluated) {
            hs_wild126DDpd = hs_b26DD0I.hscall();
        }
        var hs_b126DD0M = hs_wild126DDpd.data[0];
        return $hs.Word.gt(hs_a126DD0L, hs_b126DD0M) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczgze225veuy.evaluate = function (hs_a26DD0R, hs_b26DD0U) {
        var hs_wild26DDpg = hs_a26DD0R;
        if (hs_a26DD0R.notEvaluated) {
            hs_wild26DDpg = hs_a26DD0R.hscall();
        }
        var hs_a126DD0X = hs_wild26DDpg.data[0];
        var hs_wild126DDpf = hs_b26DD0U;
        if (hs_b26DD0U.notEvaluated) {
            hs_wild126DDpf = hs_b26DD0U.hscall();
        }
        var hs_b126DD0Y = hs_wild126DDpf.data[0];
        return $hs.Word.ge(hs_a126DD0X, hs_b126DD0Y) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczl225veuK.evaluate = function (hs_a26DD13, hs_b26DD16) {
        var hs_wild26DDpi = hs_a26DD13;
        if (hs_a26DD13.notEvaluated) {
            hs_wild26DDpi = hs_a26DD13.hscall();
        }
        var hs_a126DD19 = hs_wild26DDpi.data[0];
        var hs_wild126DDph = hs_b26DD16;
        if (hs_b26DD16.notEvaluated) {
            hs_wild126DDph = hs_b26DD16.hscall();
        }
        var hs_b126DD1a = hs_wild126DDph.data[0];
        return $hs.Word.lt(hs_a126DD19, hs_b126DD1a) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdccompare225veuW.evaluate = function (hs_a26DD1f, hs_b26DD1i) {
        var hs_wild26DDpm = hs_a26DD1f;
        if (hs_a26DD1f.notEvaluated) {
            hs_wild26DDpm = hs_a26DD1f.hscall();
        }
        var hs_a126DD1l = hs_wild26DDpm.data[0];
        var hs_wild126DDpl = hs_b26DD1i;
        if (hs_b26DD1i.notEvaluated) {
            hs_wild126DDpl = hs_b26DD1i.hscall();
        }
        var hs_b126DD1m = hs_wild126DDpl.data[0];
        var hs_wild226DDpk = $hs.Word.lt(hs_a126DD1l, hs_b126DD1m) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226DDpk.tag) {
        case 1:
            var hs_wild326DDpj = hs_a126DD1l == hs_b126DD1m ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild326DDpj.tag) {
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
    hs_zdczeze225veva.evaluate = function (hs_ds26DD1t, hs_ds126DD1w) {
        var hs_wild26DDpo = hs_ds26DD1t;
        if (hs_ds26DD1t.notEvaluated) {
            hs_wild26DDpo = hs_ds26DD1t.hscall();
        }
        var hs_a126DD1z = hs_wild26DDpo.data[0];
        var hs_wild126DDpn = hs_ds126DD1w;
        if (hs_ds126DD1w.notEvaluated) {
            hs_wild126DDpn = hs_ds126DD1w.hscall();
        }
        var hs_b126DD1A = hs_wild126DDpn.data[0];
        return hs_a126DD1z == hs_b126DD1A ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    this.hs_zdfEqWord8.data = [hs_zdczeze225veva, hs_zdczsze225vevm];
    hs_zdczsze225vevm.evaluate = function (hs_a26DD1F, hs_b26DD1G) {
        var hs_sat26DDpp = new $hs.Thunk();
        hs_sat26DDpp.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_a26DD1F, hs_b26DD1G);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DDpp);
    };
    this.hs_zdfOrdWord8.data = [$hs.modules.GHCziWord.hs_zdfEqWord8, hs_zdccompare225veuW, hs_zdczl225veuK, hs_zdczgze225veuy, hs_zdczg225veum, hs_zdczlze225veua, hs_zdcmax225vevv, hs_zdcmin225vevt];
    hs_zdcmin225vevt.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmin.hscall($hs.modules.GHCziWord.hs_zdfOrdWord8);
    };
    hs_zdcmax225vevv.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmax.hscall($hs.modules.GHCziWord.hs_zdfOrdWord8);
    };
    hs_zdcinRange225vevx.evaluate = function (hs_ds26DD1Q, hs_i26DD1V) {
        var hs_wild26DDpq = hs_ds26DD1Q;
        if (hs_ds26DD1Q.notEvaluated) {
            hs_wild26DDpq = hs_ds26DD1Q.hscall();
        }
        var hs_m26DD1U = hs_wild26DDpq.data[0];
        var hs_n26DD1X = hs_wild26DDpq.data[1];
        var hs_sat26DDpr = new $hs.Thunk();
        hs_sat26DDpr.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord8, hs_i26DD1V, hs_n26DD1X);
        };
        var hs_sat26DDps = new $hs.Thunk();
        hs_sat26DDps.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord8, hs_m26DD1U, hs_i26DD1V);
        };
        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DDps, hs_sat26DDpr);
    };
    hs_sat26DDpt.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(255);
    };
    hs_sat26DDpu.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
    };
    this.hs_zdfBoundedWord8.data = [hs_zdcminBound225vewm, hs_zdcmaxBound225vewk];
    this.hs_zdfShowWord8.data = [hs_zdcshowsPrec225vewe, hs_zdcshow225vevM, hs_zdcshowList225vevK];
    this.hs_zdfNumWord8.data = [$hs.modules.GHCziWord.hs_zdfEqWord8, $hs.modules.GHCziWord.hs_zdfShowWord8, hs_zdczp125ve7S, hs_zdczt125ve7E, hs_zdczm125ve7q, hs_zdcnegate125ve7f, hs_zdcabs125ve7b, hs_zdcsignum225vewg, hs_zdcfromInteger125ve74];
    this.hs_zdfRealWord8.data = [$hs.modules.GHCziWord.hs_zdfNumWord8, $hs.modules.GHCziWord.hs_zdfOrdWord8, hs_zdctoRational225vevO];
    this.hs_zdfEnumWord8.data = [hs_zdcsucc225vew2, hs_zdcpred225vew0, hs_zdctoEnum225vevY, hs_zdcfromEnum25ve86, hs_zdcenumFrom225vevW, hs_zdcenumFromThen225vevU, hs_zdcenumFromTo225vevS, hs_zdcenumFromThenTo225vevQ];
    this.hs_zdfIntegralWord8.data = [$hs.modules.GHCziWord.hs_zdfRealWord8, $hs.modules.GHCziWord.hs_zdfEnumWord8, hs_zdcquot225vewi, hs_zdcrem225vewc, hs_zdcdiv225vewa, hs_zdcmod225vew8, hs_zdcquotRem225vew6, hs_zdcdivMod225vew4, hs_zdctoInteger125ve8e];
    hs_zdcshowList225vevK.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall($hs.modules.GHCziWord.hs_zdfShowWord8);
    };
    hs_zdcshow225vevM.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziWord.hs_zdfShowWord8);
    };
    hs_zdctoRational225vevO.evaluate = function (hs_x26DD2E) {
        var hs_sat26DDpv = new $hs.Thunk();
        hs_sat26DDpv.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        var hs_sat26DDpw = new $hs.Thunk();
        hs_sat26DDpw.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, hs_x26DD2E);
        };
        return $hs.modules.GHCziReal.hs_zv.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26DDpw, hs_sat26DDpv);
    };
    hs_zdcenumFromThenTo225vevQ.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_zddmenumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord8);
    };
    hs_zdcenumFromTo225vevS.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_zddmenumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord8);
    };
    hs_zdcenumFromThen225vevU.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_boundedEnumFromThen.hscall($hs.modules.GHCziWord.hs_zdfEnumWord8, $hs.modules.GHCziWord.hs_zdfBoundedWord8);
    };
    hs_zdcenumFrom225vevW.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_boundedEnumFrom.hscall($hs.modules.GHCziWord.hs_zdfEnumWord8, $hs.modules.GHCziWord.hs_zdfBoundedWord8);
    };
    hs_zdctoEnum225vevY.evaluate = function (hs_i26DD2I) {
        var hs_wild26DD2L = hs_i26DD2I;
        if (hs_i26DD2I.notEvaluated) {
            hs_wild26DD2L = hs_i26DD2I.hscall();
        }
        var hs_izh26DD2W = hs_wild26DD2L.data[0];
        var hs_sat26DDpz = new $hs.Thunk();
        hs_sat26DDpz.evaluateOnce = function () {
            var hs_sat26DDpy = new $hs.Thunk();
            hs_sat26DDpy.evaluateOnce = function () {
                var hs_sat26DDpx = new $hs.Thunk();
                hs_sat26DDpx.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord8);
                };
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DDpx);
            };
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_wild26DD2L, hs_sat26DDpy);
        };
        var hs_sat26DDpC = new $hs.Thunk();
        hs_sat26DDpC.evaluateOnce = function () {
            var hs_sat26DDpA = new $hs.Data(1);
            hs_sat26DDpA.data = [0];
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_wild26DD2L, hs_sat26DDpA);
        };
        var hs_wild126DDpB = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DDpC, hs_sat26DDpz);
        switch (hs_wild126DDpB.tag) {
        case 1:
            var hs_sat26DDpD = new $hs.Thunk();
            hs_sat26DDpD.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord8);
            };
            var hs_sat26DDpE = new $hs.Thunk();
            hs_sat26DDpE.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord8);
            };
            var hs_sat26DDpF = new $hs.Data(1);
            hs_sat26DDpF.data = [hs_sat26DDpE, hs_sat26DDpD];
            var hs_sat26DDpG = new $hs.Thunk();
            hs_sat26DDpG.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Word8\x00");
            };
            return $hs.modules.GHCziWord.hs_toEnumError.hscall($hs.modules.GHCziWord.hs_zdfShowWord8, hs_sat26DDpG, hs_wild26DD2L, hs_sat26DDpF);
        case 2:
            var hs_sat26DDpH = hs_izh26DD2W;
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DDpH];
            return $res;
        }
    };
    hs_zdcpred225vew0.evaluate = function (hs_x26DD2Z) {
        var hs_sat26DDpJ = new $hs.Thunk();
        hs_sat26DDpJ.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord8);
        };
        var hs_wild26DDpI = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_x26DD2Z, hs_sat26DDpJ);
        switch (hs_wild26DDpI.tag) {
        case 1:
            var hs_sat26DDpK = new $hs.Thunk();
            hs_sat26DDpK.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Word8\x00");
            };
            return $hs.modules.GHCziWord.hs_predError.hscall(hs_sat26DDpK);
        case 2:
            var hs_sat26DDpM = new $hs.Thunk();
            hs_sat26DDpM.evaluateOnce = function () {
                var hs_sat26DDpL = new $hs.Thunk();
                hs_sat26DDpL.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26DDpL);
            };
            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_x26DD2Z, hs_sat26DDpM);
        }
    };
    hs_zdcsucc225vew2.evaluate = function (hs_x26DD36) {
        var hs_sat26DDpO = new $hs.Thunk();
        hs_sat26DDpO.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord8);
        };
        var hs_wild26DDpN = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_x26DD36, hs_sat26DDpO);
        switch (hs_wild26DDpN.tag) {
        case 1:
            var hs_sat26DDpP = new $hs.Thunk();
            hs_sat26DDpP.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Word8\x00");
            };
            return $hs.modules.GHCziWord.hs_succError.hscall(hs_sat26DDpP);
        case 2:
            var hs_sat26DDpR = new $hs.Thunk();
            hs_sat26DDpR.evaluateOnce = function () {
                var hs_sat26DDpQ = new $hs.Thunk();
                hs_sat26DDpQ.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26DDpQ);
            };
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_x26DD36, hs_sat26DDpR);
        }
    };
    hs_zdcdivMod225vew4.evaluate = function (hs_ds26DD3e, hs_y26DD3h) {
        var hs_wild26DDpS = hs_ds26DD3e;
        if (hs_ds26DD3e.notEvaluated) {
            hs_wild26DDpS = hs_ds26DD3e.hscall();
        }
        var hs_xzh26DD3o = hs_wild26DDpS.data[0];
        var hs_wild126DD3k = hs_y26DD3h;
        if (hs_y26DD3h.notEvaluated) {
            hs_wild126DD3k = hs_y26DD3h.hscall();
        }
        var hs_yzh26DD3p = hs_wild126DD3k.data[0];
        var hs_sat26DDpV = new $hs.Thunk();
        hs_sat26DDpV.evaluateOnce = function () {
            var hs_sat26DDpT = new $hs.Thunk();
            hs_sat26DDpT.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26DDpT);
        };
        var hs_wild226DDpU = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_wild126DD3k, hs_sat26DDpV);
        switch (hs_wild226DDpU.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            var hs_sat26DDpW = new $hs.Thunk();
            hs_sat26DDpW.evaluateOnce = function () {
                throw "primitive operation remWord#. Not implemeted yet.";
                var $res = new $hs.Data(1);
                $res.data = [hs_wild326DD3u];
                return $res;
            };
            var hs_sat26DDpX = new $hs.Thunk();
            hs_sat26DDpX.evaluateOnce = function () {
                throw "primitive operation quotWord#. Not implemeted yet.";
                var $res = new $hs.Data(1);
                $res.data = [hs_wild326DD3r];
                return $res;
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DDpX, hs_sat26DDpW];
            return $res;
        }
    };
    hs_zdcquotRem225vew6.evaluate = function (hs_ds26DD3y, hs_y26DD3B) {
        var hs_wild26DDpY = hs_ds26DD3y;
        if (hs_ds26DD3y.notEvaluated) {
            hs_wild26DDpY = hs_ds26DD3y.hscall();
        }
        var hs_xzh26DD3I = hs_wild26DDpY.data[0];
        var hs_wild126DD3E = hs_y26DD3B;
        if (hs_y26DD3B.notEvaluated) {
            hs_wild126DD3E = hs_y26DD3B.hscall();
        }
        var hs_yzh26DD3J = hs_wild126DD3E.data[0];
        var hs_sat26DDq1 = new $hs.Thunk();
        hs_sat26DDq1.evaluateOnce = function () {
            var hs_sat26DDpZ = new $hs.Thunk();
            hs_sat26DDpZ.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26DDpZ);
        };
        var hs_wild226DDq0 = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_wild126DD3E, hs_sat26DDq1);
        switch (hs_wild226DDq0.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            var hs_sat26DDq2 = new $hs.Thunk();
            hs_sat26DDq2.evaluateOnce = function () {
                throw "primitive operation remWord#. Not implemeted yet.";
                var $res = new $hs.Data(1);
                $res.data = [hs_wild326DD3O];
                return $res;
            };
            var hs_sat26DDq3 = new $hs.Thunk();
            hs_sat26DDq3.evaluateOnce = function () {
                throw "primitive operation quotWord#. Not implemeted yet.";
                var $res = new $hs.Data(1);
                $res.data = [hs_wild326DD3L];
                return $res;
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DDq3, hs_sat26DDq2];
            return $res;
        }
    };
    hs_zdcmod225vew8.evaluate = function (hs_ds26DD3S, hs_y26DD3V) {
        var hs_wild26DDq4 = hs_ds26DD3S;
        if (hs_ds26DD3S.notEvaluated) {
            hs_wild26DDq4 = hs_ds26DD3S.hscall();
        }
        var hs_xzh26DD42 = hs_wild26DDq4.data[0];
        var hs_wild126DD3Y = hs_y26DD3V;
        if (hs_y26DD3V.notEvaluated) {
            hs_wild126DD3Y = hs_y26DD3V.hscall();
        }
        var hs_yzh26DD43 = hs_wild126DD3Y.data[0];
        var hs_sat26DDq7 = new $hs.Thunk();
        hs_sat26DDq7.evaluateOnce = function () {
            var hs_sat26DDq5 = new $hs.Thunk();
            hs_sat26DDq5.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26DDq5);
        };
        var hs_wild226DDq6 = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_wild126DD3Y, hs_sat26DDq7);
        switch (hs_wild226DDq6.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            throw "primitive operation remWord#. Not implemeted yet.";
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DD45];
            return $res;
        }
    };
    hs_zdcdiv225vewa.evaluate = function (hs_ds26DD48, hs_y26DD4b) {
        var hs_wild26DDq8 = hs_ds26DD48;
        if (hs_ds26DD48.notEvaluated) {
            hs_wild26DDq8 = hs_ds26DD48.hscall();
        }
        var hs_xzh26DD4i = hs_wild26DDq8.data[0];
        var hs_wild126DD4e = hs_y26DD4b;
        if (hs_y26DD4b.notEvaluated) {
            hs_wild126DD4e = hs_y26DD4b.hscall();
        }
        var hs_yzh26DD4j = hs_wild126DD4e.data[0];
        var hs_sat26DDqb = new $hs.Thunk();
        hs_sat26DDqb.evaluateOnce = function () {
            var hs_sat26DDq9 = new $hs.Thunk();
            hs_sat26DDq9.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26DDq9);
        };
        var hs_wild226DDqa = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_wild126DD4e, hs_sat26DDqb);
        switch (hs_wild226DDqa.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            throw "primitive operation quotWord#. Not implemeted yet.";
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DD4l];
            return $res;
        }
    };
    hs_zdcrem225vewc.evaluate = function (hs_ds26DD4o, hs_y26DD4r) {
        var hs_wild26DDqc = hs_ds26DD4o;
        if (hs_ds26DD4o.notEvaluated) {
            hs_wild26DDqc = hs_ds26DD4o.hscall();
        }
        var hs_xzh26DD4y = hs_wild26DDqc.data[0];
        var hs_wild126DD4u = hs_y26DD4r;
        if (hs_y26DD4r.notEvaluated) {
            hs_wild126DD4u = hs_y26DD4r.hscall();
        }
        var hs_yzh26DD4z = hs_wild126DD4u.data[0];
        var hs_sat26DDqf = new $hs.Thunk();
        hs_sat26DDqf.evaluateOnce = function () {
            var hs_sat26DDqd = new $hs.Thunk();
            hs_sat26DDqd.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26DDqd);
        };
        var hs_wild226DDqe = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_wild126DD4u, hs_sat26DDqf);
        switch (hs_wild226DDqe.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            throw "primitive operation remWord#. Not implemeted yet.";
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DD4B];
            return $res;
        }
    };
    hs_zdcshowsPrec225vewe.evaluate = function (hs_p26DD4E, hs_x26DD4F) {
        var hs_sat26DDqg = new $hs.Thunk();
        hs_sat26DDqg.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziNum.hs_zdfNumInt, hs_x26DD4F);
        };
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_p26DD4E, hs_sat26DDqg);
    };
    hs_zdcsignum225vewg.evaluate = function (hs_ds26DD4I) {
        var hs_sat26DDqj = new $hs.Thunk();
        hs_sat26DDqj.evaluateOnce = function () {
            var hs_sat26DDqh = new $hs.Thunk();
            hs_sat26DDqh.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26DDqh);
        };
        var hs_wild26DDqi = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_ds26DD4I, hs_sat26DDqj);
        switch (hs_wild26DDqi.tag) {
        case 1:
            var hs_sat26DDqk = new $hs.Thunk();
            hs_sat26DDqk.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26DDqk);
        case 2:
            var hs_sat26DDql = new $hs.Thunk();
            hs_sat26DDql.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26DDql);
        }
    };
    hs_zdcquot225vewi.evaluate = function (hs_ds26DD4Q, hs_y26DD4T) {
        var hs_wild26DDqm = hs_ds26DD4Q;
        if (hs_ds26DD4Q.notEvaluated) {
            hs_wild26DDqm = hs_ds26DD4Q.hscall();
        }
        var hs_xzh26DD50 = hs_wild26DDqm.data[0];
        var hs_wild126DD4W = hs_y26DD4T;
        if (hs_y26DD4T.notEvaluated) {
            hs_wild126DD4W = hs_y26DD4T.hscall();
        }
        var hs_yzh26DD51 = hs_wild126DD4W.data[0];
        var hs_sat26DDqp = new $hs.Thunk();
        hs_sat26DDqp.evaluateOnce = function () {
            var hs_sat26DDqn = new $hs.Thunk();
            hs_sat26DDqn.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26DDqn);
        };
        var hs_wild226DDqo = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_wild126DD4W, hs_sat26DDqp);
        switch (hs_wild226DDqo.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            throw "primitive operation quotWord#. Not implemeted yet.";
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DD53];
            return $res;
        }
    };
    hs_zdcmaxBound225vewk.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26DDpt);
    };
    hs_zdcminBound225vewm.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26DDpu);
    };
    hs_zdcreadsPrec225veyR.evaluate = function (hs_p26DD5r, hs_s26DD5s) {
        var hs_ds26DD5p = new $hs.Func(1);
        hs_ds26DD5p.evaluate = function (hs_ds126DD5c) {
            var hs_ds226DDqq = hs_ds126DD5c;
            if (hs_ds126DD5c.notEvaluated) {
                hs_ds226DDqq = hs_ds126DD5c.hscall();
            }
            switch (hs_ds226DDqq.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_ds326DD5g = hs_ds226DDqq.data[0];
                var hs_ds426DD5o = hs_ds226DDqq.data[1];
                var hs_wild26DDqr = hs_ds326DD5g;
                if (hs_ds326DD5g.notEvaluated) {
                    hs_wild26DDqr = hs_ds326DD5g.hscall();
                }
                var hs_x26DD5k = hs_wild26DDqr.data[0];
                var hs_r26DD5m = hs_wild26DDqr.data[1];
                var hs_sat26DDqs = new $hs.Thunk();
                hs_sat26DDqs.evaluateOnce = function () {
                    return hs_ds26DD5p.hscall(hs_ds426DD5o);
                };
                var hs_sat26DDqt = new $hs.Thunk();
                hs_sat26DDqt.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_x26DD5k);
                };
                var hs_sat26DDqu = new $hs.Data(1);
                hs_sat26DDqu.data = [hs_sat26DDqt, hs_r26DD5m];
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26DDqu, hs_sat26DDqs];
                return $res;
            }
        };
        var hs_sat26DDqv = new $hs.Thunk();
        hs_sat26DDqv.evaluateOnce = function () {
            return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziRead.hs_zdfReadInt, hs_p26DD5r, hs_s26DD5s);
        };
        return hs_ds26DD5p.hscall(hs_sat26DDqv);
    };
    this.hs_zdfReadWord8.data = [hs_zdcreadsPrec225veyR, hs_zdcreadList225vezj, hs_zdcreadPrec225vezh, hs_zdcreadListPrec225vezf];
    hs_zdcreadListPrec225vezf.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord8);
    };
    hs_zdcreadPrec225vezh.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord8);
    };
    hs_zdcreadList225vezj.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadList.hscall($hs.modules.GHCziWord.hs_zdfReadWord8);
    };
    hs_zdccomplement225vezl.evaluate = function (hs_ds26DD5D) {
        var hs_wild26DDqy = hs_ds26DD5D;
        if (hs_ds26DD5D.notEvaluated) {
            hs_wild26DDqy = hs_ds26DD5D.hscall();
        }
        var hs_xzh26DD5I = hs_wild26DDqy.data[0];
        var hs_wild126DDqx = $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord8);
        var hs_mbzh26DD5J = hs_wild126DDqx.data[0];
        var hs_sat26DDqw = hs_xzh26DD5I ^ hs_mbzh26DD5J;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DDqw];
        return $res;
    };
    this.hs_zdfBitsWord8.data = [$hs.modules.GHCziWord.hs_zdfNumWord8, hs_zdczizazi125ve9A, hs_zdczizbzi125ve9n, hs_zdcxor125ve9a, hs_zdccomplement225vezl, hs_zdcshift125ve8R, hs_zdcrotate125ve8u, hs_zdcbit225vezM, hs_zdcsetBit225vezK, hs_zdcclearBit225vezI, hs_zdccomplementBit225vezG, hs_zdctestBit225vezE, hs_zdcbitSizze125ve8q, hs_zdcisSigned125ve8m, hs_zdcshiftL225vezC, hs_zdcshiftR225vezA, hs_zdcrotateL225vezy, hs_zdcrotateR225vezw];
    hs_zdcrotateR225vezw.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmrotateR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdcrotateL225vezy.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmrotateL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdcshiftR225vezA.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmshiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdcshiftL225vezC.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmshiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdctestBit225vezE.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmtestBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdccomplementBit225vezG.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmcomplementBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdcclearBit225vezI.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmclearBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdcsetBit225vezK.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmsetBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdcbit225vezM.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmbit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8);
    };
    hs_zdcunsafeIndex225vezO.evaluate = function (hs_ds26DD67, hs_i26DD6b) {
        var hs_wild26DDqz = hs_ds26DD67;
        if (hs_ds26DD67.notEvaluated) {
            hs_wild26DDqz = hs_ds26DD67.hscall();
        }
        var hs_m26DD6c = hs_wild26DDqz.data[0];
        var hs_sat26DDqB = new $hs.Thunk();
        hs_sat26DDqB.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_i26DD6b, hs_m26DD6c);
        };
        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DDqB);
    };
    hs_zdcrange225vezZ.evaluate = function (hs_ds26DD6h) {
        var hs_wild26DDqC = hs_ds26DD6h;
        if (hs_ds26DD6h.notEvaluated) {
            hs_wild26DDqC = hs_ds26DD6h.hscall();
        }
        var hs_m26DD6l = hs_wild26DDqC.data[0];
        var hs_n26DD6m = hs_wild26DDqC.data[1];
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord8, hs_m26DD6l, hs_n26DD6m);
    };
    this.hs_zdfIxWord8.data = [$hs.modules.GHCziWord.hs_zdfOrdWord8, hs_zdcrange225vezZ, hs_zdcindex225veAc, hs_zdcunsafeIndex225vezO, hs_zdcinRange225vevx, hs_zdcrangeSizze225veAa, hs_zdcunsafeRangeSizze225veA8];
    hs_zdcunsafeRangeSizze225veA8.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmunsafeRangeSizze.hscall($hs.modules.GHCziWord.hs_zdfIxWord8);
    };
    hs_zdcrangeSizze225veAa.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmrangeSizze.hscall($hs.modules.GHCziWord.hs_zdfIxWord8);
    };
    hs_zdcindex225veAc.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmindex.hscall($hs.modules.GHCziWord.hs_zdfIxWord8);
    };
    hs_zdczlze325veAe.evaluate = function (hs_a26DD6x, hs_b26DD6A) {
        var hs_wild26DDqE = hs_a26DD6x;
        if (hs_a26DD6x.notEvaluated) {
            hs_wild26DDqE = hs_a26DD6x.hscall();
        }
        var hs_a126DD6D = hs_wild26DDqE.data[0];
        var hs_wild126DDqD = hs_b26DD6A;
        if (hs_b26DD6A.notEvaluated) {
            hs_wild126DDqD = hs_b26DD6A.hscall();
        }
        var hs_b126DD6E = hs_wild126DDqD.data[0];
        return $hs.Word.le(hs_a126DD6D, hs_b126DD6E) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczg325veAq.evaluate = function (hs_a26DD6J, hs_b26DD6M) {
        var hs_wild26DDqG = hs_a26DD6J;
        if (hs_a26DD6J.notEvaluated) {
            hs_wild26DDqG = hs_a26DD6J.hscall();
        }
        var hs_a126DD6P = hs_wild26DDqG.data[0];
        var hs_wild126DDqF = hs_b26DD6M;
        if (hs_b26DD6M.notEvaluated) {
            hs_wild126DDqF = hs_b26DD6M.hscall();
        }
        var hs_b126DD6Q = hs_wild126DDqF.data[0];
        return $hs.Word.gt(hs_a126DD6P, hs_b126DD6Q) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczgze325veAC.evaluate = function (hs_a26DD6V, hs_b26DD6Y) {
        var hs_wild26DDqI = hs_a26DD6V;
        if (hs_a26DD6V.notEvaluated) {
            hs_wild26DDqI = hs_a26DD6V.hscall();
        }
        var hs_a126DD71 = hs_wild26DDqI.data[0];
        var hs_wild126DDqH = hs_b26DD6Y;
        if (hs_b26DD6Y.notEvaluated) {
            hs_wild126DDqH = hs_b26DD6Y.hscall();
        }
        var hs_b126DD72 = hs_wild126DDqH.data[0];
        return $hs.Word.ge(hs_a126DD71, hs_b126DD72) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczl325veAO.evaluate = function (hs_a26DD77, hs_b26DD7a) {
        var hs_wild26DDqK = hs_a26DD77;
        if (hs_a26DD77.notEvaluated) {
            hs_wild26DDqK = hs_a26DD77.hscall();
        }
        var hs_a126DD7d = hs_wild26DDqK.data[0];
        var hs_wild126DDqJ = hs_b26DD7a;
        if (hs_b26DD7a.notEvaluated) {
            hs_wild126DDqJ = hs_b26DD7a.hscall();
        }
        var hs_b126DD7e = hs_wild126DDqJ.data[0];
        return $hs.Word.lt(hs_a126DD7d, hs_b126DD7e) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdccompare325veB0.evaluate = function (hs_a26DD7j, hs_b26DD7m) {
        var hs_wild26DDqO = hs_a26DD7j;
        if (hs_a26DD7j.notEvaluated) {
            hs_wild26DDqO = hs_a26DD7j.hscall();
        }
        var hs_a126DD7p = hs_wild26DDqO.data[0];
        var hs_wild126DDqN = hs_b26DD7m;
        if (hs_b26DD7m.notEvaluated) {
            hs_wild126DDqN = hs_b26DD7m.hscall();
        }
        var hs_b126DD7q = hs_wild126DDqN.data[0];
        var hs_wild226DDqM = $hs.Word.lt(hs_a126DD7p, hs_b126DD7q) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226DDqM.tag) {
        case 1:
            var hs_wild326DDqL = hs_a126DD7p == hs_b126DD7q ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild326DDqL.tag) {
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
    hs_zdczeze325veBe.evaluate = function (hs_ds26DD7x, hs_ds126DD7A) {
        var hs_wild26DDqQ = hs_ds26DD7x;
        if (hs_ds26DD7x.notEvaluated) {
            hs_wild26DDqQ = hs_ds26DD7x.hscall();
        }
        var hs_a126DD7D = hs_wild26DDqQ.data[0];
        var hs_wild126DDqP = hs_ds126DD7A;
        if (hs_ds126DD7A.notEvaluated) {
            hs_wild126DDqP = hs_ds126DD7A.hscall();
        }
        var hs_b126DD7E = hs_wild126DDqP.data[0];
        return hs_a126DD7D == hs_b126DD7E ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    this.hs_zdfEqWord16.data = [hs_zdczeze325veBe, hs_zdczsze325veBq];
    hs_zdczsze325veBq.evaluate = function (hs_a26DD7J, hs_b26DD7K) {
        var hs_sat26DDqR = new $hs.Thunk();
        hs_sat26DDqR.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord16, hs_a26DD7J, hs_b26DD7K);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DDqR);
    };
    this.hs_zdfOrdWord16.data = [$hs.modules.GHCziWord.hs_zdfEqWord16, hs_zdccompare325veB0, hs_zdczl325veAO, hs_zdczgze325veAC, hs_zdczg325veAq, hs_zdczlze325veAe, hs_zdcmax325veBz, hs_zdcmin325veBx];
    hs_zdcmin325veBx.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmin.hscall($hs.modules.GHCziWord.hs_zdfOrdWord16);
    };
    hs_zdcmax325veBz.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmax.hscall($hs.modules.GHCziWord.hs_zdfOrdWord16);
    };
    hs_zdcinRange325veBB.evaluate = function (hs_ds26DD7U, hs_i26DD7Z) {
        var hs_wild26DDqS = hs_ds26DD7U;
        if (hs_ds26DD7U.notEvaluated) {
            hs_wild26DDqS = hs_ds26DD7U.hscall();
        }
        var hs_m26DD7Y = hs_wild26DDqS.data[0];
        var hs_n26DD81 = hs_wild26DDqS.data[1];
        var hs_sat26DDqT = new $hs.Thunk();
        hs_sat26DDqT.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord16, hs_i26DD7Z, hs_n26DD81);
        };
        var hs_sat26DDqU = new $hs.Thunk();
        hs_sat26DDqU.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord16, hs_m26DD7Y, hs_i26DD7Z);
        };
        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DDqU, hs_sat26DDqT);
    };
    hs_sat26DDqV.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(65535);
    };
    hs_sat26DDqW.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
    };
    this.hs_zdfBoundedWord16.data = [hs_zdcminBound325veCq, hs_zdcmaxBound325veCo];
    this.hs_zdfShowWord16.data = [hs_zdcshowsPrec325veCi, hs_zdcshow325veBQ, hs_zdcshowList325veBO];
    this.hs_zdfNumWord16.data = [$hs.modules.GHCziWord.hs_zdfEqWord16, $hs.modules.GHCziWord.hs_zdfShowWord16, hs_zdczp225veaB, hs_zdczt225vean, hs_zdczm225vea9, hs_zdcnegate225ve9Y, hs_zdcabs225ve9U, hs_zdcsignum325veCk, hs_zdcfromInteger225ve9N];
    this.hs_zdfRealWord16.data = [$hs.modules.GHCziWord.hs_zdfNumWord16, $hs.modules.GHCziWord.hs_zdfOrdWord16, hs_zdctoRational325veBS];
    this.hs_zdfEnumWord16.data = [hs_zdcsucc325veC6, hs_zdcpred325veC4, hs_zdctoEnum325veC2, hs_zdcfromEnum125veaP, hs_zdcenumFrom325veC0, hs_zdcenumFromThen325veBY, hs_zdcenumFromTo325veBW, hs_zdcenumFromThenTo325veBU];
    this.hs_zdfIntegralWord16.data = [$hs.modules.GHCziWord.hs_zdfRealWord16, $hs.modules.GHCziWord.hs_zdfEnumWord16, hs_zdcquot325veCm, hs_zdcrem325veCg, hs_zdcdiv325veCe, hs_zdcmod325veCc, hs_zdcquotRem325veCa, hs_zdcdivMod325veC8, hs_zdctoInteger225veaX];
    hs_zdcshowList325veBO.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall($hs.modules.GHCziWord.hs_zdfShowWord16);
    };
    hs_zdcshow325veBQ.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziWord.hs_zdfShowWord16);
    };
    hs_zdctoRational325veBS.evaluate = function (hs_x26DD8I) {
        var hs_sat26DDqX = new $hs.Thunk();
        hs_sat26DDqX.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        var hs_sat26DDqY = new $hs.Thunk();
        hs_sat26DDqY.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord16, hs_x26DD8I);
        };
        return $hs.modules.GHCziReal.hs_zv.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26DDqY, hs_sat26DDqX);
    };
    hs_zdcenumFromThenTo325veBU.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_zddmenumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord16);
    };
    hs_zdcenumFromTo325veBW.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_zddmenumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord16);
    };
    hs_zdcenumFromThen325veBY.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_boundedEnumFromThen.hscall($hs.modules.GHCziWord.hs_zdfEnumWord16, $hs.modules.GHCziWord.hs_zdfBoundedWord16);
    };
    hs_zdcenumFrom325veC0.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_boundedEnumFrom.hscall($hs.modules.GHCziWord.hs_zdfEnumWord16, $hs.modules.GHCziWord.hs_zdfBoundedWord16);
    };
    hs_zdctoEnum325veC2.evaluate = function (hs_i26DD8M) {
        var hs_wild26DD8P = hs_i26DD8M;
        if (hs_i26DD8M.notEvaluated) {
            hs_wild26DD8P = hs_i26DD8M.hscall();
        }
        var hs_izh26DD90 = hs_wild26DD8P.data[0];
        var hs_sat26DDr1 = new $hs.Thunk();
        hs_sat26DDr1.evaluateOnce = function () {
            var hs_sat26DDr0 = new $hs.Thunk();
            hs_sat26DDr0.evaluateOnce = function () {
                var hs_sat26DDqZ = new $hs.Thunk();
                hs_sat26DDqZ.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord16);
                };
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord16, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DDqZ);
            };
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_wild26DD8P, hs_sat26DDr0);
        };
        var hs_sat26DDr4 = new $hs.Thunk();
        hs_sat26DDr4.evaluateOnce = function () {
            var hs_sat26DDr2 = new $hs.Data(1);
            hs_sat26DDr2.data = [0];
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_wild26DD8P, hs_sat26DDr2);
        };
        var hs_wild126DDr3 = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DDr4, hs_sat26DDr1);
        switch (hs_wild126DDr3.tag) {
        case 1:
            var hs_sat26DDr5 = new $hs.Thunk();
            hs_sat26DDr5.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord16);
            };
            var hs_sat26DDr6 = new $hs.Thunk();
            hs_sat26DDr6.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord16);
            };
            var hs_sat26DDr7 = new $hs.Data(1);
            hs_sat26DDr7.data = [hs_sat26DDr6, hs_sat26DDr5];
            var hs_sat26DDr8 = new $hs.Thunk();
            hs_sat26DDr8.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Word16\x00");
            };
            return $hs.modules.GHCziWord.hs_toEnumError.hscall($hs.modules.GHCziWord.hs_zdfShowWord16, hs_sat26DDr8, hs_wild26DD8P, hs_sat26DDr7);
        case 2:
            var hs_sat26DDr9 = hs_izh26DD90;
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DDr9];
            return $res;
        }
    };
    hs_zdcpred325veC4.evaluate = function (hs_x26DD93) {
        var hs_sat26DDrb = new $hs.Thunk();
        hs_sat26DDrb.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord16);
        };
        var hs_wild26DDra = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord16, hs_x26DD93, hs_sat26DDrb);
        switch (hs_wild26DDra.tag) {
        case 1:
            var hs_sat26DDrc = new $hs.Thunk();
            hs_sat26DDrc.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Word16\x00");
            };
            return $hs.modules.GHCziWord.hs_predError.hscall(hs_sat26DDrc);
        case 2:
            var hs_sat26DDre = new $hs.Thunk();
            hs_sat26DDre.evaluateOnce = function () {
                var hs_sat26DDrd = new $hs.Thunk();
                hs_sat26DDrd.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26DDrd);
            };
            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_x26DD93, hs_sat26DDre);
        }
    };
    hs_zdcsucc325veC6.evaluate = function (hs_x26DD9a) {
        var hs_sat26DDrg = new $hs.Thunk();
        hs_sat26DDrg.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord16);
        };
        var hs_wild26DDrf = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord16, hs_x26DD9a, hs_sat26DDrg);
        switch (hs_wild26DDrf.tag) {
        case 1:
            var hs_sat26DDrh = new $hs.Thunk();
            hs_sat26DDrh.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Word16\x00");
            };
            return $hs.modules.GHCziWord.hs_succError.hscall(hs_sat26DDrh);
        case 2:
            var hs_sat26DDrj = new $hs.Thunk();
            hs_sat26DDrj.evaluateOnce = function () {
                var hs_sat26DDri = new $hs.Thunk();
                hs_sat26DDri.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26DDri);
            };
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_x26DD9a, hs_sat26DDrj);
        }
    };
    hs_zdcdivMod325veC8.evaluate = function (hs_ds26DD9i, hs_y26DD9l) {
        var hs_wild26DDrk = hs_ds26DD9i;
        if (hs_ds26DD9i.notEvaluated) {
            hs_wild26DDrk = hs_ds26DD9i.hscall();
        }
        var hs_xzh26DD9s = hs_wild26DDrk.data[0];
        var hs_wild126DD9o = hs_y26DD9l;
        if (hs_y26DD9l.notEvaluated) {
            hs_wild126DD9o = hs_y26DD9l.hscall();
        }
        var hs_yzh26DD9t = hs_wild126DD9o.data[0];
        var hs_sat26DDrn = new $hs.Thunk();
        hs_sat26DDrn.evaluateOnce = function () {
            var hs_sat26DDrl = new $hs.Thunk();
            hs_sat26DDrl.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26DDrl);
        };
        var hs_wild226DDrm = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord16, hs_wild126DD9o, hs_sat26DDrn);
        switch (hs_wild226DDrm.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            var hs_sat26DDro = new $hs.Thunk();
            hs_sat26DDro.evaluateOnce = function () {
                throw "primitive operation remWord#. Not implemeted yet.";
                var $res = new $hs.Data(1);
                $res.data = [hs_wild326DD9y];
                return $res;
            };
            var hs_sat26DDrp = new $hs.Thunk();
            hs_sat26DDrp.evaluateOnce = function () {
                throw "primitive operation quotWord#. Not implemeted yet.";
                var $res = new $hs.Data(1);
                $res.data = [hs_wild326DD9v];
                return $res;
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DDrp, hs_sat26DDro];
            return $res;
        }
    };
    hs_zdcquotRem325veCa.evaluate = function (hs_ds26DD9C, hs_y26DD9F) {
        var hs_wild26DDrq = hs_ds26DD9C;
        if (hs_ds26DD9C.notEvaluated) {
            hs_wild26DDrq = hs_ds26DD9C.hscall();
        }
        var hs_xzh26DD9M = hs_wild26DDrq.data[0];
        var hs_wild126DD9I = hs_y26DD9F;
        if (hs_y26DD9F.notEvaluated) {
            hs_wild126DD9I = hs_y26DD9F.hscall();
        }
        var hs_yzh26DD9N = hs_wild126DD9I.data[0];
        var hs_sat26DDrt = new $hs.Thunk();
        hs_sat26DDrt.evaluateOnce = function () {
            var hs_sat26DDrr = new $hs.Thunk();
            hs_sat26DDrr.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26DDrr);
        };
        var hs_wild226DDrs = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord16, hs_wild126DD9I, hs_sat26DDrt);
        switch (hs_wild226DDrs.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            var hs_sat26DDru = new $hs.Thunk();
            hs_sat26DDru.evaluateOnce = function () {
                throw "primitive operation remWord#. Not implemeted yet.";
                var $res = new $hs.Data(1);
                $res.data = [hs_wild326DD9S];
                return $res;
            };
            var hs_sat26DDrv = new $hs.Thunk();
            hs_sat26DDrv.evaluateOnce = function () {
                throw "primitive operation quotWord#. Not implemeted yet.";
                var $res = new $hs.Data(1);
                $res.data = [hs_wild326DD9P];
                return $res;
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DDrv, hs_sat26DDru];
            return $res;
        }
    };
    hs_zdcmod325veCc.evaluate = function (hs_ds26DD9W, hs_y26DD9Z) {
        var hs_wild26DDrw = hs_ds26DD9W;
        if (hs_ds26DD9W.notEvaluated) {
            hs_wild26DDrw = hs_ds26DD9W.hscall();
        }
        var hs_xzh26DDa6 = hs_wild26DDrw.data[0];
        var hs_wild126DDa2 = hs_y26DD9Z;
        if (hs_y26DD9Z.notEvaluated) {
            hs_wild126DDa2 = hs_y26DD9Z.hscall();
        }
        var hs_yzh26DDa7 = hs_wild126DDa2.data[0];
        var hs_sat26DDrz = new $hs.Thunk();
        hs_sat26DDrz.evaluateOnce = function () {
            var hs_sat26DDrx = new $hs.Thunk();
            hs_sat26DDrx.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26DDrx);
        };
        var hs_wild226DDry = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord16, hs_wild126DDa2, hs_sat26DDrz);
        switch (hs_wild226DDry.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            throw "primitive operation remWord#. Not implemeted yet.";
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DDa9];
            return $res;
        }
    };
    hs_zdcdiv325veCe.evaluate = function (hs_ds26DDac, hs_y26DDaf) {
        var hs_wild26DDrA = hs_ds26DDac;
        if (hs_ds26DDac.notEvaluated) {
            hs_wild26DDrA = hs_ds26DDac.hscall();
        }
        var hs_xzh26DDam = hs_wild26DDrA.data[0];
        var hs_wild126DDai = hs_y26DDaf;
        if (hs_y26DDaf.notEvaluated) {
            hs_wild126DDai = hs_y26DDaf.hscall();
        }
        var hs_yzh26DDan = hs_wild126DDai.data[0];
        var hs_sat26DDrD = new $hs.Thunk();
        hs_sat26DDrD.evaluateOnce = function () {
            var hs_sat26DDrB = new $hs.Thunk();
            hs_sat26DDrB.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26DDrB);
        };
        var hs_wild226DDrC = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord16, hs_wild126DDai, hs_sat26DDrD);
        switch (hs_wild226DDrC.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            throw "primitive operation quotWord#. Not implemeted yet.";
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DDap];
            return $res;
        }
    };
    hs_zdcrem325veCg.evaluate = function (hs_ds26DDas, hs_y26DDav) {
        var hs_wild26DDrE = hs_ds26DDas;
        if (hs_ds26DDas.notEvaluated) {
            hs_wild26DDrE = hs_ds26DDas.hscall();
        }
        var hs_xzh26DDaC = hs_wild26DDrE.data[0];
        var hs_wild126DDay = hs_y26DDav;
        if (hs_y26DDav.notEvaluated) {
            hs_wild126DDay = hs_y26DDav.hscall();
        }
        var hs_yzh26DDaD = hs_wild126DDay.data[0];
        var hs_sat26DDrH = new $hs.Thunk();
        hs_sat26DDrH.evaluateOnce = function () {
            var hs_sat26DDrF = new $hs.Thunk();
            hs_sat26DDrF.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26DDrF);
        };
        var hs_wild226DDrG = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord16, hs_wild126DDay, hs_sat26DDrH);
        switch (hs_wild226DDrG.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            throw "primitive operation remWord#. Not implemeted yet.";
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DDaF];
            return $res;
        }
    };
    hs_zdcshowsPrec325veCi.evaluate = function (hs_p26DDaI, hs_x26DDaJ) {
        var hs_sat26DDrI = new $hs.Thunk();
        hs_sat26DDrI.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord16, $hs.modules.GHCziNum.hs_zdfNumInt, hs_x26DDaJ);
        };
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_p26DDaI, hs_sat26DDrI);
    };
    hs_zdcsignum325veCk.evaluate = function (hs_ds26DDaM) {
        var hs_sat26DDrL = new $hs.Thunk();
        hs_sat26DDrL.evaluateOnce = function () {
            var hs_sat26DDrJ = new $hs.Thunk();
            hs_sat26DDrJ.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26DDrJ);
        };
        var hs_wild26DDrK = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord16, hs_ds26DDaM, hs_sat26DDrL);
        switch (hs_wild26DDrK.tag) {
        case 1:
            var hs_sat26DDrM = new $hs.Thunk();
            hs_sat26DDrM.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26DDrM);
        case 2:
            var hs_sat26DDrN = new $hs.Thunk();
            hs_sat26DDrN.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26DDrN);
        }
    };
    hs_zdcquot325veCm.evaluate = function (hs_ds26DDaU, hs_y26DDaX) {
        var hs_wild26DDrO = hs_ds26DDaU;
        if (hs_ds26DDaU.notEvaluated) {
            hs_wild26DDrO = hs_ds26DDaU.hscall();
        }
        var hs_xzh26DDb4 = hs_wild26DDrO.data[0];
        var hs_wild126DDb0 = hs_y26DDaX;
        if (hs_y26DDaX.notEvaluated) {
            hs_wild126DDb0 = hs_y26DDaX.hscall();
        }
        var hs_yzh26DDb5 = hs_wild126DDb0.data[0];
        var hs_sat26DDrR = new $hs.Thunk();
        hs_sat26DDrR.evaluateOnce = function () {
            var hs_sat26DDrP = new $hs.Thunk();
            hs_sat26DDrP.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26DDrP);
        };
        var hs_wild226DDrQ = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord16, hs_wild126DDb0, hs_sat26DDrR);
        switch (hs_wild226DDrQ.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            throw "primitive operation quotWord#. Not implemeted yet.";
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DDb7];
            return $res;
        }
    };
    hs_zdcmaxBound325veCo.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26DDqV);
    };
    hs_zdcminBound325veCq.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26DDqW);
    };
    hs_zdcreadsPrec325veEV.evaluate = function (hs_p26DDbv, hs_s26DDbw) {
        var hs_ds26DDbt = new $hs.Func(1);
        hs_ds26DDbt.evaluate = function (hs_ds126DDbg) {
            var hs_ds226DDrS = hs_ds126DDbg;
            if (hs_ds126DDbg.notEvaluated) {
                hs_ds226DDrS = hs_ds126DDbg.hscall();
            }
            switch (hs_ds226DDrS.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_ds326DDbk = hs_ds226DDrS.data[0];
                var hs_ds426DDbs = hs_ds226DDrS.data[1];
                var hs_wild26DDrT = hs_ds326DDbk;
                if (hs_ds326DDbk.notEvaluated) {
                    hs_wild26DDrT = hs_ds326DDbk.hscall();
                }
                var hs_x26DDbo = hs_wild26DDrT.data[0];
                var hs_r26DDbq = hs_wild26DDrT.data[1];
                var hs_sat26DDrU = new $hs.Thunk();
                hs_sat26DDrU.evaluateOnce = function () {
                    return hs_ds26DDbt.hscall(hs_ds426DDbs);
                };
                var hs_sat26DDrV = new $hs.Thunk();
                hs_sat26DDrV.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord16, hs_x26DDbo);
                };
                var hs_sat26DDrW = new $hs.Data(1);
                hs_sat26DDrW.data = [hs_sat26DDrV, hs_r26DDbq];
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26DDrW, hs_sat26DDrU];
                return $res;
            }
        };
        var hs_sat26DDrX = new $hs.Thunk();
        hs_sat26DDrX.evaluateOnce = function () {
            return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziRead.hs_zdfReadInt, hs_p26DDbv, hs_s26DDbw);
        };
        return hs_ds26DDbt.hscall(hs_sat26DDrX);
    };
    this.hs_zdfReadWord16.data = [hs_zdcreadsPrec325veEV, hs_zdcreadList325veFn, hs_zdcreadPrec325veFl, hs_zdcreadListPrec325veFj];
    hs_zdcreadListPrec325veFj.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord16);
    };
    hs_zdcreadPrec325veFl.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord16);
    };
    hs_zdcreadList325veFn.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadList.hscall($hs.modules.GHCziWord.hs_zdfReadWord16);
    };
    hs_zdccomplement325veFp.evaluate = function (hs_ds26DDbH) {
        var hs_wild26DDs0 = hs_ds26DDbH;
        if (hs_ds26DDbH.notEvaluated) {
            hs_wild26DDs0 = hs_ds26DDbH.hscall();
        }
        var hs_xzh26DDbM = hs_wild26DDs0.data[0];
        var hs_wild126DDrZ = $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord16);
        var hs_mbzh26DDbN = hs_wild126DDrZ.data[0];
        var hs_sat26DDrY = hs_xzh26DDbM ^ hs_mbzh26DDbN;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DDrY];
        return $res;
    };
    this.hs_zdfBitsWord16.data = [$hs.modules.GHCziWord.hs_zdfNumWord16, hs_zdczizazi225vecj, hs_zdczizbzi225vec6, hs_zdcxor225vebT, hs_zdccomplement325veFp, hs_zdcshift225vebA, hs_zdcrotate225vebd, hs_zdcbit325veFQ, hs_zdcsetBit325veFO, hs_zdcclearBit325veFM, hs_zdccomplementBit325veFK, hs_zdctestBit325veFI, hs_zdcbitSizze225veb9, hs_zdcisSigned225veb5, hs_zdcshiftL325veFG, hs_zdcshiftR325veFE, hs_zdcrotateL325veFC, hs_zdcrotateR325veFA];
    hs_zdcrotateR325veFA.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmrotateR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdcrotateL325veFC.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmrotateL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdcshiftR325veFE.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmshiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdcshiftL325veFG.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmshiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdctestBit325veFI.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmtestBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdccomplementBit325veFK.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmcomplementBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdcclearBit325veFM.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmclearBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdcsetBit325veFO.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmsetBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdcbit325veFQ.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmbit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16);
    };
    hs_zdcunsafeIndex325veFS.evaluate = function (hs_ds26DDcb, hs_i26DDcf) {
        var hs_wild26DDs1 = hs_ds26DDcb;
        if (hs_ds26DDcb.notEvaluated) {
            hs_wild26DDs1 = hs_ds26DDcb.hscall();
        }
        var hs_m26DDcg = hs_wild26DDs1.data[0];
        var hs_sat26DDs3 = new $hs.Thunk();
        hs_sat26DDs3.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_i26DDcf, hs_m26DDcg);
        };
        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord16, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DDs3);
    };
    hs_zdcrange325veG3.evaluate = function (hs_ds26DDcl) {
        var hs_wild26DDs4 = hs_ds26DDcl;
        if (hs_ds26DDcl.notEvaluated) {
            hs_wild26DDs4 = hs_ds26DDcl.hscall();
        }
        var hs_m26DDcp = hs_wild26DDs4.data[0];
        var hs_n26DDcq = hs_wild26DDs4.data[1];
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord16, hs_m26DDcp, hs_n26DDcq);
    };
    this.hs_zdfIxWord16.data = [$hs.modules.GHCziWord.hs_zdfOrdWord16, hs_zdcrange325veG3, hs_zdcindex325veGg, hs_zdcunsafeIndex325veFS, hs_zdcinRange325veBB, hs_zdcrangeSizze325veGe, hs_zdcunsafeRangeSizze325veGc];
    hs_zdcunsafeRangeSizze325veGc.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmunsafeRangeSizze.hscall($hs.modules.GHCziWord.hs_zdfIxWord16);
    };
    hs_zdcrangeSizze325veGe.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmrangeSizze.hscall($hs.modules.GHCziWord.hs_zdfIxWord16);
    };
    hs_zdcindex325veGg.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmindex.hscall($hs.modules.GHCziWord.hs_zdfIxWord16);
    };
    hs_zdczlze425veGi.evaluate = function (hs_a26DDcB, hs_b26DDcE) {
        var hs_wild26DDs6 = hs_a26DDcB;
        if (hs_a26DDcB.notEvaluated) {
            hs_wild26DDs6 = hs_a26DDcB.hscall();
        }
        var hs_a126DDcH = hs_wild26DDs6.data[0];
        var hs_wild126DDs5 = hs_b26DDcE;
        if (hs_b26DDcE.notEvaluated) {
            hs_wild126DDs5 = hs_b26DDcE.hscall();
        }
        var hs_b126DDcI = hs_wild126DDs5.data[0];
        return $hs.Word.le(hs_a126DDcH, hs_b126DDcI) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczg425veGu.evaluate = function (hs_a26DDcN, hs_b26DDcQ) {
        var hs_wild26DDs8 = hs_a26DDcN;
        if (hs_a26DDcN.notEvaluated) {
            hs_wild26DDs8 = hs_a26DDcN.hscall();
        }
        var hs_a126DDcT = hs_wild26DDs8.data[0];
        var hs_wild126DDs7 = hs_b26DDcQ;
        if (hs_b26DDcQ.notEvaluated) {
            hs_wild126DDs7 = hs_b26DDcQ.hscall();
        }
        var hs_b126DDcU = hs_wild126DDs7.data[0];
        return $hs.Word.gt(hs_a126DDcT, hs_b126DDcU) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczgze425veGG.evaluate = function (hs_a26DDcZ, hs_b26DDd2) {
        var hs_wild26DDsa = hs_a26DDcZ;
        if (hs_a26DDcZ.notEvaluated) {
            hs_wild26DDsa = hs_a26DDcZ.hscall();
        }
        var hs_a126DDd5 = hs_wild26DDsa.data[0];
        var hs_wild126DDs9 = hs_b26DDd2;
        if (hs_b26DDd2.notEvaluated) {
            hs_wild126DDs9 = hs_b26DDd2.hscall();
        }
        var hs_b126DDd6 = hs_wild126DDs9.data[0];
        return $hs.Word.ge(hs_a126DDd5, hs_b126DDd6) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczl425veGS.evaluate = function (hs_a26DDdb, hs_b26DDde) {
        var hs_wild26DDsc = hs_a26DDdb;
        if (hs_a26DDdb.notEvaluated) {
            hs_wild26DDsc = hs_a26DDdb.hscall();
        }
        var hs_a126DDdh = hs_wild26DDsc.data[0];
        var hs_wild126DDsb = hs_b26DDde;
        if (hs_b26DDde.notEvaluated) {
            hs_wild126DDsb = hs_b26DDde.hscall();
        }
        var hs_b126DDdi = hs_wild126DDsb.data[0];
        return $hs.Word.lt(hs_a126DDdh, hs_b126DDdi) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdccompare425veH4.evaluate = function (hs_a26DDdn, hs_b26DDdq) {
        var hs_wild26DDsg = hs_a26DDdn;
        if (hs_a26DDdn.notEvaluated) {
            hs_wild26DDsg = hs_a26DDdn.hscall();
        }
        var hs_a126DDdt = hs_wild26DDsg.data[0];
        var hs_wild126DDsf = hs_b26DDdq;
        if (hs_b26DDdq.notEvaluated) {
            hs_wild126DDsf = hs_b26DDdq.hscall();
        }
        var hs_b126DDdu = hs_wild126DDsf.data[0];
        var hs_wild226DDse = $hs.Word.lt(hs_a126DDdt, hs_b126DDdu) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226DDse.tag) {
        case 1:
            var hs_wild326DDsd = hs_a126DDdt == hs_b126DDdu ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild326DDsd.tag) {
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
    hs_zdczeze425veHi.evaluate = function (hs_ds26DDdB, hs_ds126DDdE) {
        var hs_wild26DDsi = hs_ds26DDdB;
        if (hs_ds26DDdB.notEvaluated) {
            hs_wild26DDsi = hs_ds26DDdB.hscall();
        }
        var hs_a126DDdH = hs_wild26DDsi.data[0];
        var hs_wild126DDsh = hs_ds126DDdE;
        if (hs_ds126DDdE.notEvaluated) {
            hs_wild126DDsh = hs_ds126DDdE.hscall();
        }
        var hs_b126DDdI = hs_wild126DDsh.data[0];
        return hs_a126DDdH == hs_b126DDdI ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    this.hs_zdfEqWord32.data = [hs_zdczeze425veHi, hs_zdczsze425veHu];
    hs_zdczsze425veHu.evaluate = function (hs_a26DDdN, hs_b26DDdO) {
        var hs_sat26DDsj = new $hs.Thunk();
        hs_sat26DDsj.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32, hs_a26DDdN, hs_b26DDdO);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DDsj);
    };
    this.hs_zdfOrdWord32.data = [$hs.modules.GHCziWord.hs_zdfEqWord32, hs_zdccompare425veH4, hs_zdczl425veGS, hs_zdczgze425veGG, hs_zdczg425veGu, hs_zdczlze425veGi, hs_zdcmax425veHD, hs_zdcmin425veHB];
    hs_zdcmin425veHB.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmin.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcmax425veHD.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmax.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcinRange425veHF.evaluate = function (hs_ds26DDdY, hs_i26DDe3) {
        var hs_wild26DDsk = hs_ds26DDdY;
        if (hs_ds26DDdY.notEvaluated) {
            hs_wild26DDsk = hs_ds26DDdY.hscall();
        }
        var hs_m26DDe2 = hs_wild26DDsk.data[0];
        var hs_n26DDe5 = hs_wild26DDsk.data[1];
        var hs_sat26DDsl = new $hs.Thunk();
        hs_sat26DDsl.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32, hs_i26DDe3, hs_n26DDe5);
        };
        var hs_sat26DDsm = new $hs.Thunk();
        hs_sat26DDsm.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32, hs_m26DDe2, hs_i26DDe3);
        };
        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DDsm, hs_sat26DDsl);
    };
    hs_sat26DDsn.evaluateOnce = function () {
        var hs_sat26DDsr = new $hs.Thunk();
        hs_sat26DDsr.evaluateOnce = function () {
            var hs_sat26DDsp = new $hs.Thunk();
            hs_sat26DDsp.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2147483647);
            };
            var hs_sat26DDsq = new $hs.Thunk();
            hs_sat26DDsq.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
            };
            return $hs.modules.GHCziInteger.hs_timesInteger.hscall(hs_sat26DDsq, hs_sat26DDsp);
        };
        var hs_sat26DDss = new $hs.Thunk();
        hs_sat26DDss.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        return $hs.modules.GHCziInteger.hs_plusInteger.hscall(hs_sat26DDss, hs_sat26DDsr);
    };
    hs_sat26DDso.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
    };
    this.hs_zdfBoundedWord32.data = [hs_zdcminBound425veIw, hs_zdcmaxBound425veIu];
    this.hs_zdfEnumWord32.data = [hs_zdcsucc425veI6, hs_zdcpred425veI4, hs_zdctoEnum425veI2, hs_zdcfromEnum425veI0, hs_zdcenumFrom425veHY, hs_zdcenumFromThen425veHW, hs_zdcenumFromTo425veHU, hs_zdcenumFromThenTo425veHS];
    this.hs_zdfShowWord32.data = [hs_zdcshowsPrec425veIm, hs_zdcshow425veIk, hs_zdcshowList425veIi];
    this.hs_zdfNumWord32.data = [$hs.modules.GHCziWord.hs_zdfEqWord32, $hs.modules.GHCziWord.hs_zdfShowWord32, hs_zdczp325vedk, hs_zdczt325ved6, hs_zdczm325vecS, hs_zdcnegate325vecH, hs_zdcabs325vecD, hs_zdcsignum425veIo, hs_zdcfromInteger325vecw];
    this.hs_zdfRealWord32.data = [$hs.modules.GHCziWord.hs_zdfNumWord32, $hs.modules.GHCziWord.hs_zdfOrdWord32, hs_zdctoRational425veIs];
    this.hs_zdfIntegralWord32.data = [$hs.modules.GHCziWord.hs_zdfRealWord32, $hs.modules.GHCziWord.hs_zdfEnumWord32, hs_zdcquot425veIq, hs_zdcrem425veIg, hs_zdcdiv425veIe, hs_zdcmod425veIc, hs_zdcquotRem425veIa, hs_zdcdivMod425veI8, hs_zdctoInteger325vedy];
    hs_zdcenumFromThenTo425veHS.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_integralEnumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcenumFromTo425veHU.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_integralEnumFromTo.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcenumFromThen425veHW.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_integralEnumFromThen.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32, $hs.modules.GHCziWord.hs_zdfBoundedWord32);
    };
    hs_zdcenumFrom425veHY.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_integralEnumFrom.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32, $hs.modules.GHCziWord.hs_zdfBoundedWord32);
    };
    hs_zdcfromEnum425veI0.evaluate = function (hs_x26DDeO) {
        var hs_wild26DDeR = hs_x26DDeO;
        if (hs_x26DDeO.notEvaluated) {
            hs_wild26DDeR = hs_x26DDeO.hscall();
        }
        var hs_xzh26DDeW = hs_wild26DDeR.data[0];
        var hs_sat26DDsv = new $hs.Thunk();
        hs_sat26DDsv.evaluateOnce = function () {
            var hs_sat26DDst = new $hs.Thunk();
            hs_sat26DDst.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziEnum.hs_zdfBoundedInt);
            };
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26DDst);
        };
        var hs_wild126DDsu = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32, hs_wild26DDeR, hs_sat26DDsv);
        switch (hs_wild126DDsu.tag) {
        case 1:
            var hs_sat26DDsw = new $hs.Thunk();
            hs_sat26DDsw.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Word32\x00");
            };
            return $hs.modules.GHCziWord.hs_fromEnumError.hscall($hs.modules.GHCziWord.hs_zdfShowWord32, hs_sat26DDsw, hs_wild26DDeR);
        case 2:
            var hs_sat26DDsx = hs_xzh26DDeW;
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DDsx];
            return $res;
        }
    };
    hs_zdctoEnum425veI2.evaluate = function (hs_i26DDeZ) {
        var hs_wild26DDf2 = hs_i26DDeZ;
        if (hs_i26DDeZ.notEvaluated) {
            hs_wild26DDf2 = hs_i26DDeZ.hscall();
        }
        var hs_izh26DDf9 = hs_wild26DDf2.data[0];
        var hs_sat26DDsz = new $hs.Data(1);
        hs_sat26DDsz.data = [0];
        var hs_wild126DDsy = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_wild26DDf2, hs_sat26DDsz);
        switch (hs_wild126DDsy.tag) {
        case 1:
            var hs_sat26DDsA = new $hs.Thunk();
            hs_sat26DDsA.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
            };
            var hs_sat26DDsB = new $hs.Thunk();
            hs_sat26DDsB.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
            };
            var hs_sat26DDsC = new $hs.Data(1);
            hs_sat26DDsC.data = [hs_sat26DDsB, hs_sat26DDsA];
            var hs_sat26DDsD = new $hs.Thunk();
            hs_sat26DDsD.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Word32\x00");
            };
            return $hs.modules.GHCziWord.hs_toEnumError.hscall($hs.modules.GHCziWord.hs_zdfShowWord32, hs_sat26DDsD, hs_wild26DDf2, hs_sat26DDsC);
        case 2:
            var hs_sat26DDsE = hs_izh26DDf9;
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DDsE];
            return $res;
        }
    };
    hs_zdcpred425veI4.evaluate = function (hs_x26DDfc) {
        var hs_sat26DDsG = new $hs.Thunk();
        hs_sat26DDsG.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
        };
        var hs_wild26DDsF = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32, hs_x26DDfc, hs_sat26DDsG);
        switch (hs_wild26DDsF.tag) {
        case 1:
            var hs_sat26DDsH = new $hs.Thunk();
            hs_sat26DDsH.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Word32\x00");
            };
            return $hs.modules.GHCziWord.hs_predError.hscall(hs_sat26DDsH);
        case 2:
            var hs_sat26DDsJ = new $hs.Thunk();
            hs_sat26DDsJ.evaluateOnce = function () {
                var hs_sat26DDsI = new $hs.Thunk();
                hs_sat26DDsI.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26DDsI);
            };
            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord32, hs_x26DDfc, hs_sat26DDsJ);
        }
    };
    hs_zdcsucc425veI6.evaluate = function (hs_x26DDfj) {
        var hs_sat26DDsL = new $hs.Thunk();
        hs_sat26DDsL.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
        };
        var hs_wild26DDsK = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32, hs_x26DDfj, hs_sat26DDsL);
        switch (hs_wild26DDsK.tag) {
        case 1:
            var hs_sat26DDsM = new $hs.Thunk();
            hs_sat26DDsM.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Word32\x00");
            };
            return $hs.modules.GHCziWord.hs_succError.hscall(hs_sat26DDsM);
        case 2:
            var hs_sat26DDsO = new $hs.Thunk();
            hs_sat26DDsO.evaluateOnce = function () {
                var hs_sat26DDsN = new $hs.Thunk();
                hs_sat26DDsN.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26DDsN);
            };
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord32, hs_x26DDfj, hs_sat26DDsO);
        }
    };
    hs_zdcdivMod425veI8.evaluate = function (hs_ds26DDfr, hs_y26DDfu) {
        var hs_wild26DDsP = hs_ds26DDfr;
        if (hs_ds26DDfr.notEvaluated) {
            hs_wild26DDsP = hs_ds26DDfr.hscall();
        }
        var hs_xzh26DDfB = hs_wild26DDsP.data[0];
        var hs_wild126DDfx = hs_y26DDfu;
        if (hs_y26DDfu.notEvaluated) {
            hs_wild126DDfx = hs_y26DDfu.hscall();
        }
        var hs_yzh26DDfC = hs_wild126DDfx.data[0];
        var hs_sat26DDsS = new $hs.Thunk();
        hs_sat26DDsS.evaluateOnce = function () {
            var hs_sat26DDsQ = new $hs.Thunk();
            hs_sat26DDsQ.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26DDsQ);
        };
        var hs_wild226DDsR = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32, hs_wild126DDfx, hs_sat26DDsS);
        switch (hs_wild226DDsR.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            var hs_sat26DDsT = new $hs.Thunk();
            hs_sat26DDsT.evaluateOnce = function () {
                throw "primitive operation remWord#. Not implemeted yet.";
                var $res = new $hs.Data(1);
                $res.data = [hs_wild326DDfH];
                return $res;
            };
            var hs_sat26DDsU = new $hs.Thunk();
            hs_sat26DDsU.evaluateOnce = function () {
                throw "primitive operation quotWord#. Not implemeted yet.";
                var $res = new $hs.Data(1);
                $res.data = [hs_wild326DDfE];
                return $res;
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DDsU, hs_sat26DDsT];
            return $res;
        }
    };
    hs_zdcquotRem425veIa.evaluate = function (hs_ds26DDfL, hs_y26DDfO) {
        var hs_wild26DDsV = hs_ds26DDfL;
        if (hs_ds26DDfL.notEvaluated) {
            hs_wild26DDsV = hs_ds26DDfL.hscall();
        }
        var hs_xzh26DDfV = hs_wild26DDsV.data[0];
        var hs_wild126DDfR = hs_y26DDfO;
        if (hs_y26DDfO.notEvaluated) {
            hs_wild126DDfR = hs_y26DDfO.hscall();
        }
        var hs_yzh26DDfW = hs_wild126DDfR.data[0];
        var hs_sat26DDsY = new $hs.Thunk();
        hs_sat26DDsY.evaluateOnce = function () {
            var hs_sat26DDsW = new $hs.Thunk();
            hs_sat26DDsW.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26DDsW);
        };
        var hs_wild226DDsX = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32, hs_wild126DDfR, hs_sat26DDsY);
        switch (hs_wild226DDsX.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            var hs_sat26DDsZ = new $hs.Thunk();
            hs_sat26DDsZ.evaluateOnce = function () {
                throw "primitive operation remWord#. Not implemeted yet.";
                var $res = new $hs.Data(1);
                $res.data = [hs_wild326DDg1];
                return $res;
            };
            var hs_sat26DDt0 = new $hs.Thunk();
            hs_sat26DDt0.evaluateOnce = function () {
                throw "primitive operation quotWord#. Not implemeted yet.";
                var $res = new $hs.Data(1);
                $res.data = [hs_wild326DDfY];
                return $res;
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DDt0, hs_sat26DDsZ];
            return $res;
        }
    };
    hs_zdcmod425veIc.evaluate = function (hs_ds26DDg5, hs_y26DDg8) {
        var hs_wild26DDt1 = hs_ds26DDg5;
        if (hs_ds26DDg5.notEvaluated) {
            hs_wild26DDt1 = hs_ds26DDg5.hscall();
        }
        var hs_xzh26DDgf = hs_wild26DDt1.data[0];
        var hs_wild126DDgb = hs_y26DDg8;
        if (hs_y26DDg8.notEvaluated) {
            hs_wild126DDgb = hs_y26DDg8.hscall();
        }
        var hs_yzh26DDgg = hs_wild126DDgb.data[0];
        var hs_sat26DDt4 = new $hs.Thunk();
        hs_sat26DDt4.evaluateOnce = function () {
            var hs_sat26DDt2 = new $hs.Thunk();
            hs_sat26DDt2.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26DDt2);
        };
        var hs_wild226DDt3 = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32, hs_wild126DDgb, hs_sat26DDt4);
        switch (hs_wild226DDt3.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            throw "primitive operation remWord#. Not implemeted yet.";
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DDgi];
            return $res;
        }
    };
    hs_zdcdiv425veIe.evaluate = function (hs_ds26DDgl, hs_y26DDgo) {
        var hs_wild26DDt5 = hs_ds26DDgl;
        if (hs_ds26DDgl.notEvaluated) {
            hs_wild26DDt5 = hs_ds26DDgl.hscall();
        }
        var hs_xzh26DDgv = hs_wild26DDt5.data[0];
        var hs_wild126DDgr = hs_y26DDgo;
        if (hs_y26DDgo.notEvaluated) {
            hs_wild126DDgr = hs_y26DDgo.hscall();
        }
        var hs_yzh26DDgw = hs_wild126DDgr.data[0];
        var hs_sat26DDt8 = new $hs.Thunk();
        hs_sat26DDt8.evaluateOnce = function () {
            var hs_sat26DDt6 = new $hs.Thunk();
            hs_sat26DDt6.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26DDt6);
        };
        var hs_wild226DDt7 = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32, hs_wild126DDgr, hs_sat26DDt8);
        switch (hs_wild226DDt7.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            throw "primitive operation quotWord#. Not implemeted yet.";
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DDgy];
            return $res;
        }
    };
    hs_zdcrem425veIg.evaluate = function (hs_ds26DDgB, hs_y26DDgE) {
        var hs_wild26DDt9 = hs_ds26DDgB;
        if (hs_ds26DDgB.notEvaluated) {
            hs_wild26DDt9 = hs_ds26DDgB.hscall();
        }
        var hs_xzh26DDgL = hs_wild26DDt9.data[0];
        var hs_wild126DDgH = hs_y26DDgE;
        if (hs_y26DDgE.notEvaluated) {
            hs_wild126DDgH = hs_y26DDgE.hscall();
        }
        var hs_yzh26DDgM = hs_wild126DDgH.data[0];
        var hs_sat26DDtc = new $hs.Thunk();
        hs_sat26DDtc.evaluateOnce = function () {
            var hs_sat26DDta = new $hs.Thunk();
            hs_sat26DDta.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26DDta);
        };
        var hs_wild226DDtb = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32, hs_wild126DDgH, hs_sat26DDtc);
        switch (hs_wild226DDtb.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            throw "primitive operation remWord#. Not implemeted yet.";
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DDgO];
            return $res;
        }
    };
    hs_zdcshowList425veIi.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshow425veIk.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshowsPrec425veIm.evaluate = function (hs_p26DDgR, hs_x26DDgS) {
        var hs_sat26DDtd = new $hs.Thunk();
        hs_sat26DDtd.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32, hs_x26DDgS);
        };
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziNum.hs_zdfShowInteger, hs_p26DDgR, hs_sat26DDtd);
    };
    hs_zdcsignum425veIo.evaluate = function (hs_ds26DDgV) {
        var hs_sat26DDtg = new $hs.Thunk();
        hs_sat26DDtg.evaluateOnce = function () {
            var hs_sat26DDte = new $hs.Thunk();
            hs_sat26DDte.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26DDte);
        };
        var hs_wild26DDtf = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32, hs_ds26DDgV, hs_sat26DDtg);
        switch (hs_wild26DDtf.tag) {
        case 1:
            var hs_sat26DDth = new $hs.Thunk();
            hs_sat26DDth.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26DDth);
        case 2:
            var hs_sat26DDti = new $hs.Thunk();
            hs_sat26DDti.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26DDti);
        }
    };
    hs_zdcquot425veIq.evaluate = function (hs_ds26DDh3, hs_y26DDh6) {
        var hs_wild26DDtj = hs_ds26DDh3;
        if (hs_ds26DDh3.notEvaluated) {
            hs_wild26DDtj = hs_ds26DDh3.hscall();
        }
        var hs_xzh26DDhd = hs_wild26DDtj.data[0];
        var hs_wild126DDh9 = hs_y26DDh6;
        if (hs_y26DDh6.notEvaluated) {
            hs_wild126DDh9 = hs_y26DDh6.hscall();
        }
        var hs_yzh26DDhe = hs_wild126DDh9.data[0];
        var hs_sat26DDtm = new $hs.Thunk();
        hs_sat26DDtm.evaluateOnce = function () {
            var hs_sat26DDtk = new $hs.Thunk();
            hs_sat26DDtk.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26DDtk);
        };
        var hs_wild226DDtl = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32, hs_wild126DDh9, hs_sat26DDtm);
        switch (hs_wild226DDtl.tag) {
        case 1:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        case 2:
            throw "primitive operation quotWord#. Not implemeted yet.";
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DDhg];
            return $res;
        }
    };
    hs_zdctoRational425veIs.evaluate = function (hs_x26DDhi) {
        var hs_sat26DDtn = new $hs.Thunk();
        hs_sat26DDtn.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        var hs_sat26DDto = new $hs.Thunk();
        hs_sat26DDto.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32, hs_x26DDhi);
        };
        return $hs.modules.GHCziReal.hs_zv.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26DDto, hs_sat26DDtn);
    };
    hs_zdcmaxBound425veIu.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26DDsn);
    };
    hs_zdcminBound425veIw.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26DDso);
    };
    hs_zdcreadsPrec425veLc.evaluate = function (hs_p26DDhM, hs_s26DDhN) {
        var hs_ds26DDhK = new $hs.Func(1);
        hs_ds26DDhK.evaluate = function (hs_ds126DDhx) {
            var hs_ds226DDtp = hs_ds126DDhx;
            if (hs_ds126DDhx.notEvaluated) {
                hs_ds226DDtp = hs_ds126DDhx.hscall();
            }
            switch (hs_ds226DDtp.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_ds326DDhB = hs_ds226DDtp.data[0];
                var hs_ds426DDhJ = hs_ds226DDtp.data[1];
                var hs_wild26DDtq = hs_ds326DDhB;
                if (hs_ds326DDhB.notEvaluated) {
                    hs_wild26DDtq = hs_ds326DDhB.hscall();
                }
                var hs_x26DDhF = hs_wild26DDtq.data[0];
                var hs_r26DDhH = hs_wild26DDtq.data[1];
                var hs_sat26DDtr = new $hs.Thunk();
                hs_sat26DDtr.evaluateOnce = function () {
                    return hs_ds26DDhK.hscall(hs_ds426DDhJ);
                };
                var hs_sat26DDts = new $hs.Thunk();
                hs_sat26DDts.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32, hs_x26DDhF);
                };
                var hs_sat26DDtt = new $hs.Data(1);
                hs_sat26DDtt.data = [hs_sat26DDts, hs_r26DDhH];
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26DDtt, hs_sat26DDtr];
                return $res;
            }
        };
        var hs_sat26DDtu = new $hs.Thunk();
        hs_sat26DDtu.evaluateOnce = function () {
            return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziRead.hs_zdfReadInteger, hs_p26DDhM, hs_s26DDhN);
        };
        return hs_ds26DDhK.hscall(hs_sat26DDtu);
    };
    this.hs_zdfReadWord32.data = [hs_zdcreadsPrec425veLc, hs_zdcreadList425veLE, hs_zdcreadPrec425veLC, hs_zdcreadListPrec425veLA];
    hs_zdcreadListPrec425veLA.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadPrec425veLC.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadList425veLE.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadList.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdccomplement425veLG.evaluate = function (hs_ds26DDhY) {
        var hs_wild26DDtx = hs_ds26DDhY;
        if (hs_ds26DDhY.notEvaluated) {
            hs_wild26DDtx = hs_ds26DDhY.hscall();
        }
        var hs_xzh26DDi3 = hs_wild26DDtx.data[0];
        var hs_wild126DDtw = $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
        var hs_mbzh26DDi4 = hs_wild126DDtw.data[0];
        var hs_sat26DDtv = hs_xzh26DDi3 ^ hs_mbzh26DDi4;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DDtv];
        return $res;
    };
    this.hs_zdfBitsWord32.data = [$hs.modules.GHCziWord.hs_zdfNumWord32, hs_zdczizazi325veeW, hs_zdczizbzi325veeJ, hs_zdcxor325veew, hs_zdccomplement425veLG, hs_zdcshift325veed, hs_zdcrotate325vedQ, hs_zdcbit425veM7, hs_zdcsetBit425veM5, hs_zdcclearBit425veM3, hs_zdccomplementBit425veM1, hs_zdctestBit425veLZ, hs_zdcbitSizze325vedM, hs_zdcisSigned325vedI, hs_zdcshiftL425veLX, hs_zdcshiftR425veLV, hs_zdcrotateL425veLT, hs_zdcrotateR425veLR];
    hs_zdcrotateR425veLR.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmrotateR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotateL425veLT.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmrotateL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshiftR425veLV.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmshiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshiftL425veLX.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmshiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdctestBit425veLZ.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmtestBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdccomplementBit425veM1.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmcomplementBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcclearBit425veM3.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmclearBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcsetBit425veM5.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmsetBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcbit425veM7.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmbit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrange425veM9.evaluate = function (hs_ds26DDir) {
        var hs_wild26DDty = hs_ds26DDir;
        if (hs_ds26DDir.notEvaluated) {
            hs_wild26DDty = hs_ds26DDir.hscall();
        }
        var hs_m26DDiv = hs_wild26DDty.data[0];
        var hs_n26DDiw = hs_wild26DDty.data[1];
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32, hs_m26DDiv, hs_n26DDiw);
    };
    hs_zdcunsafeIndex425veMi.evaluate = function (hs_ds26DDiB, hs_i26DDiF) {
        var hs_wild26DDtz = hs_ds26DDiB;
        if (hs_ds26DDiB.notEvaluated) {
            hs_wild26DDtz = hs_ds26DDiB.hscall();
        }
        var hs_m26DDiG = hs_wild26DDtz.data[0];
        var hs_sat26DDtB = new $hs.Thunk();
        hs_sat26DDtB.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord32, hs_i26DDiF, hs_m26DDiG);
        };
        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DDtB);
    };
    this.hs_zdfIxWord32.data = [$hs.modules.GHCziWord.hs_zdfOrdWord32, hs_zdcrange425veM9, hs_zdcindex425veMx, hs_zdcunsafeIndex425veMi, hs_zdcinRange425veHF, hs_zdcrangeSizze425veMv, hs_zdcunsafeRangeSizze425veMt];
    hs_zdcunsafeRangeSizze425veMt.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmunsafeRangeSizze.hscall($hs.modules.GHCziWord.hs_zdfIxWord32);
    };
    hs_zdcrangeSizze425veMv.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmrangeSizze.hscall($hs.modules.GHCziWord.hs_zdfIxWord32);
    };
    hs_zdcindex425veMx.evaluateOnce = function () {
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
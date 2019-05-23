
$hs.modules.GHCziIOArray = new $hs.Module();
$hs.modules.GHCziIOArray.dependencies = ["GHC.Base", "GHC.Classes", "GHC.IO", "GHC.Arr", "GHC.ST"];
$hs.modules.GHCziIOArray.initBeforeDependencies = function () {
    this.hs_boundsIOArray = new $hs.Func(1);
    this.hs_writeIOArray = new $hs.Func(4);
    this.hs_readIOArray = new $hs.Func(3);
    this.hs_unsafeWriteIOArray = new $hs.Func(4);
    this.hs_unsafeReadIOArray = new $hs.Func(3);
    this.hs_newIOArray = new $hs.Func(3);
    this.hs_zdfEqIOArray = new $hs.Data(1);
    this.hs_IOArray = new $hs.Func(1);
    this.hs_boundsIOArray.notEvaluated = true;
    this.hs_boundsIOArray.evaluate = function (hs_eta26DwBt) {
        $hs.modules.GHCziIOArray.loadDependencies();
        return this.evaluate(hs_eta26DwBt);
    };
    this.hs_writeIOArray.notEvaluated = true;
    this.hs_writeIOArray.evaluate = function (hs_zddIx26DwBy, hs_ds26DwBz, hs_i26DwBA, hs_e26DwBB) {
        $hs.modules.GHCziIOArray.loadDependencies();
        return this.evaluate(hs_zddIx26DwBy, hs_ds26DwBz, hs_i26DwBA, hs_e26DwBB);
    };
    this.hs_readIOArray.notEvaluated = true;
    this.hs_readIOArray.evaluate = function (hs_zddIx26DwBG, hs_ds26DwBH, hs_i26DwBI) {
        $hs.modules.GHCziIOArray.loadDependencies();
        return this.evaluate(hs_zddIx26DwBG, hs_ds26DwBH, hs_i26DwBI);
    };
    this.hs_unsafeWriteIOArray.notEvaluated = true;
    this.hs_unsafeWriteIOArray.evaluate = function (hs_zddIx26DwBO, hs_eta26DwBP, hs_eta126DwBQ, hs_eta226DwBR) {
        $hs.modules.GHCziIOArray.loadDependencies();
        return this.evaluate(hs_zddIx26DwBO, hs_eta26DwBP, hs_eta126DwBQ, hs_eta226DwBR);
    };
    this.hs_unsafeReadIOArray.notEvaluated = true;
    this.hs_unsafeReadIOArray.evaluate = function (hs_zddIx26DwBW, hs_eta26DwBX, hs_eta126DwBY) {
        $hs.modules.GHCziIOArray.loadDependencies();
        return this.evaluate(hs_zddIx26DwBW, hs_eta26DwBX, hs_eta126DwBY);
    };
    this.hs_newIOArray.notEvaluated = true;
    this.hs_newIOArray.evaluate = function (hs_zddIx26DwC3, hs_eta26DwC4, hs_eta126DwC5) {
        $hs.modules.GHCziIOArray.loadDependencies();
        return this.evaluate(hs_zddIx26DwC3, hs_eta26DwC4, hs_eta126DwC5);
    };
    this.hs_zdfEqIOArray.notEvaluated = true;
    this.hs_zdfEqIOArray.evaluate = function () {
        $hs.modules.GHCziIOArray.loadDependencies();
        return this;
    };
    this.hs_IOArray.notEvaluated = true;
    this.hs_IOArray.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziIOArray.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
};
$hs.modules.GHCziIOArray.initAfterDependencies = function () {
    this.hs_boundsIOArray.notEvaluated = false;
    this.hs_writeIOArray.notEvaluated = false;
    this.hs_readIOArray.notEvaluated = false;
    this.hs_unsafeWriteIOArray.notEvaluated = false;
    this.hs_unsafeReadIOArray.notEvaluated = false;
    this.hs_newIOArray.notEvaluated = false;
    this.hs_zdfEqIOArray.notEvaluated = false;
    this.hs_zdfEqIOArray.evaluate = function () {
        return this;
    };
    this.hs_IOArray.notEvaluated = false;
    var hs_zdczeze25v85W = new $hs.Func(2);
    var hs_zdczsze25v862 = new $hs.Thunk();
    this.hs_boundsIOArray.evaluate = function (hs_eta26DwBt) {
        return $hs.modules.GHCziArr.hs_boundsSTArray.hscall(hs_eta26DwBt);
    };
    this.hs_writeIOArray.evaluate = function (hs_zddIx26DwBy, hs_ds26DwBz, hs_i26DwBA, hs_e26DwBB) {
        var hs_sat26DwCj = new $hs.Thunk();
        hs_sat26DwCj.evaluateOnce = function () {
            return $hs.modules.GHCziArr.hs_writeSTArray.hscall(hs_zddIx26DwBy, hs_ds26DwBz, hs_i26DwBA, hs_e26DwBB);
        };
        return $hs.modules.GHCziIO.hs_stToIO.hscall(hs_sat26DwCj);
    };
    this.hs_readIOArray.evaluate = function (hs_zddIx26DwBG, hs_ds26DwBH, hs_i26DwBI) {
        var hs_sat26DwCk = new $hs.Thunk();
        hs_sat26DwCk.evaluateOnce = function () {
            return $hs.modules.GHCziArr.hs_readSTArray.hscall(hs_zddIx26DwBG, hs_ds26DwBH, hs_i26DwBI);
        };
        return $hs.modules.GHCziIO.hs_stToIO.hscall(hs_sat26DwCk);
    };
    this.hs_unsafeWriteIOArray.evaluate = function (hs_zddIx26DwBO, hs_eta26DwBP, hs_eta126DwBQ, hs_eta226DwBR) {
        var hs_sat26DwCl = new $hs.Thunk();
        hs_sat26DwCl.evaluateOnce = function () {
            return $hs.modules.GHCziArr.hs_unsafeWriteSTArray.hscall(hs_zddIx26DwBO, hs_eta26DwBP, hs_eta126DwBQ, hs_eta226DwBR);
        };
        return $hs.modules.GHCziIO.hs_stToIO.hscall(hs_sat26DwCl);
    };
    this.hs_unsafeReadIOArray.evaluate = function (hs_zddIx26DwBW, hs_eta26DwBX, hs_eta126DwBY) {
        var hs_sat26DwCm = new $hs.Thunk();
        hs_sat26DwCm.evaluateOnce = function () {
            return $hs.modules.GHCziArr.hs_unsafeReadSTArray.hscall(hs_zddIx26DwBW, hs_eta26DwBX, hs_eta126DwBY);
        };
        return $hs.modules.GHCziIO.hs_stToIO.hscall(hs_sat26DwCm);
    };
    this.hs_newIOArray.evaluate = function (hs_zddIx26DwC3, hs_eta26DwC4, hs_eta126DwC5) {
        var hs_sat26DwCp = new $hs.Thunk();
        hs_sat26DwCp.evaluateOnce = function () {
            var hs_sat26DwCn = new $hs.Func(1);
            hs_sat26DwCn.evaluate = function (hs_marr26DwC8) {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziST.hs_zdfMonadST, hs_marr26DwC8);
            };
            var hs_sat26DwCo = new $hs.Thunk();
            hs_sat26DwCo.evaluateOnce = function () {
                return $hs.modules.GHCziArr.hs_newSTArray.hscall(hs_zddIx26DwC3, hs_eta26DwC4, hs_eta126DwC5);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziST.hs_zdfMonadST, hs_sat26DwCo, hs_sat26DwCn);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_stToIO, hs_sat26DwCp);
    };
    hs_zdczeze25v85W.evaluate = function (hs_ds26DwCf, hs_ds126DwCg) {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziArr.hs_zdfEqSTArray, hs_ds26DwCf, hs_ds126DwCg);
    };
    this.hs_zdfEqIOArray.data = [hs_zdczeze25v85W, hs_zdczsze25v862];
    hs_zdczsze25v862.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmzsze.hscall($hs.modules.GHCziIOArray.hs_zdfEqIOArray);
    };
    this.hs_IOArray.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.GHCziIOArray.hs_IOArray.hscall(hs_eta1cW6l3);
    };
};
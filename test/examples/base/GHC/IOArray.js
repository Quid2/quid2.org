
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
    this.hs_boundsIOArray.evaluate = function (hs_eta26D997) {
        $hs.modules.GHCziIOArray.loadDependencies();
        return this.evaluate(hs_eta26D997);
    };
    this.hs_writeIOArray.notEvaluated = true;
    this.hs_writeIOArray.evaluate = function (hs_zddIx26D99c, hs_ds26D99d, hs_i26D99e, hs_e26D99f) {
        $hs.modules.GHCziIOArray.loadDependencies();
        return this.evaluate(hs_zddIx26D99c, hs_ds26D99d, hs_i26D99e, hs_e26D99f);
    };
    this.hs_readIOArray.notEvaluated = true;
    this.hs_readIOArray.evaluate = function (hs_zddIx26D99k, hs_ds26D99l, hs_i26D99m) {
        $hs.modules.GHCziIOArray.loadDependencies();
        return this.evaluate(hs_zddIx26D99k, hs_ds26D99l, hs_i26D99m);
    };
    this.hs_unsafeWriteIOArray.notEvaluated = true;
    this.hs_unsafeWriteIOArray.evaluate = function (hs_zddIx26D99s, hs_eta26D99t, hs_eta126D99u, hs_eta226D99v) {
        $hs.modules.GHCziIOArray.loadDependencies();
        return this.evaluate(hs_zddIx26D99s, hs_eta26D99t, hs_eta126D99u, hs_eta226D99v);
    };
    this.hs_unsafeReadIOArray.notEvaluated = true;
    this.hs_unsafeReadIOArray.evaluate = function (hs_zddIx26D99A, hs_eta26D99B, hs_eta126D99C) {
        $hs.modules.GHCziIOArray.loadDependencies();
        return this.evaluate(hs_zddIx26D99A, hs_eta26D99B, hs_eta126D99C);
    };
    this.hs_newIOArray.notEvaluated = true;
    this.hs_newIOArray.evaluate = function (hs_zddIx26D99H, hs_eta26D99I, hs_eta126D99J) {
        $hs.modules.GHCziIOArray.loadDependencies();
        return this.evaluate(hs_zddIx26D99H, hs_eta26D99I, hs_eta126D99J);
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
    var hs_zdczeze25uKDz = new $hs.Func(2);
    var hs_zdczsze25uKDE = new $hs.Thunk();
    this.hs_boundsIOArray.evaluate = function (hs_eta26D997) {
        return $hs.modules.GHCziArr.hs_boundsSTArray.hscall(hs_eta26D997);
    };
    this.hs_writeIOArray.evaluate = function (hs_zddIx26D99c, hs_ds26D99d, hs_i26D99e, hs_e26D99f) {
        var hs_sat26D99V = new $hs.Thunk();
        hs_sat26D99V.evaluateOnce = function () {
            return $hs.modules.GHCziArr.hs_writeSTArray.hscall(hs_zddIx26D99c, hs_ds26D99d, hs_i26D99e, hs_e26D99f);
        };
        return $hs.modules.GHCziIO.hs_stToIO.hscall(hs_sat26D99V);
    };
    this.hs_readIOArray.evaluate = function (hs_zddIx26D99k, hs_ds26D99l, hs_i26D99m) {
        var hs_sat26D99W = new $hs.Thunk();
        hs_sat26D99W.evaluateOnce = function () {
            return $hs.modules.GHCziArr.hs_readSTArray.hscall(hs_zddIx26D99k, hs_ds26D99l, hs_i26D99m);
        };
        return $hs.modules.GHCziIO.hs_stToIO.hscall(hs_sat26D99W);
    };
    this.hs_unsafeWriteIOArray.evaluate = function (hs_zddIx26D99s, hs_eta26D99t, hs_eta126D99u, hs_eta226D99v) {
        var hs_sat26D99X = new $hs.Thunk();
        hs_sat26D99X.evaluateOnce = function () {
            return $hs.modules.GHCziArr.hs_unsafeWriteSTArray.hscall(hs_zddIx26D99s, hs_eta26D99t, hs_eta126D99u, hs_eta226D99v);
        };
        return $hs.modules.GHCziIO.hs_stToIO.hscall(hs_sat26D99X);
    };
    this.hs_unsafeReadIOArray.evaluate = function (hs_zddIx26D99A, hs_eta26D99B, hs_eta126D99C) {
        var hs_sat26D99Y = new $hs.Thunk();
        hs_sat26D99Y.evaluateOnce = function () {
            return $hs.modules.GHCziArr.hs_unsafeReadSTArray.hscall(hs_zddIx26D99A, hs_eta26D99B, hs_eta126D99C);
        };
        return $hs.modules.GHCziIO.hs_stToIO.hscall(hs_sat26D99Y);
    };
    this.hs_newIOArray.evaluate = function (hs_zddIx26D99H, hs_eta26D99I, hs_eta126D99J) {
        var hs_sat26D99Z = new $hs.Thunk();
        hs_sat26D99Z.evaluateOnce = function () {
            var hs_sat26D9a1 = new $hs.Func(1);
            hs_sat26D9a1.evaluate = function (hs_marr26D99M) {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziST.hs_zdfMonadST, hs_marr26D99M);
            };
            var hs_sat26D9a0 = new $hs.Thunk();
            hs_sat26D9a0.evaluateOnce = function () {
                return $hs.modules.GHCziArr.hs_newSTArray.hscall(hs_zddIx26D99H, hs_eta26D99I, hs_eta126D99J);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziST.hs_zdfMonadST, hs_sat26D9a0, hs_sat26D9a1);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_stToIO, hs_sat26D99Z);
    };
    hs_zdczeze25uKDz.evaluate = function (hs_ds26D99S, hs_ds126D99T) {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziArr.hs_zdfEqSTArray, hs_ds26D99S, hs_ds126D99T);
    };
    this.hs_zdfEqIOArray.data = [hs_zdczeze25uKDz, hs_zdczsze25uKDE];
    hs_zdczsze25uKDE.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmzsze.hscall($hs.modules.GHCziIOArray.hs_zdfEqIOArray);
    };
    this.hs_IOArray.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.GHCziIOArray.hs_IOArray.hscall(hs_eta1cW6l3);
    };
};
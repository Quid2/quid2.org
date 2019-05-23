
$hs.modules.GHCziStable = new $hs.Module();
$hs.modules.GHCziStable.dependencies = ["GHC.Unit", "GHC.Base", "GHC.Classes"];
$hs.modules.GHCziStable.initBeforeDependencies = function () {
    this.hs_castPtrToStablePtr = new $hs.Func(1);
    this.hs_castStablePtrToPtr = new $hs.Func(1);
    this.hs_deRefStablePtr = new $hs.Func(1);
    this.hs_freeStablePtr = new $hs.Func(2);
    this.hs_zdfEqStablePtr = new $hs.Data(1);
    this.hs_newStablePtr = new $hs.Func(1);
    this.hs_StablePtr = new $hs.Func(1);
    this.hs_castPtrToStablePtr.notEvaluated = true;
    this.hs_castPtrToStablePtr.evaluate = function (hs_ds26DB1F) {
        $hs.modules.GHCziStable.loadDependencies();
        return this.evaluate(hs_ds26DB1F);
    };
    this.hs_castStablePtrToPtr.notEvaluated = true;
    this.hs_castStablePtrToPtr.evaluate = function (hs_ds26DB1K) {
        $hs.modules.GHCziStable.loadDependencies();
        return this.evaluate(hs_ds26DB1K);
    };
    this.hs_deRefStablePtr.notEvaluated = true;
    this.hs_deRefStablePtr.evaluate = function (hs_ds26DB1P) {
        $hs.modules.GHCziStable.loadDependencies();
        return this.evaluate(hs_ds26DB1P);
    };
    this.hs_freeStablePtr.notEvaluated = true;
    this.hs_freeStablePtr.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziStable.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_zdfEqStablePtr.notEvaluated = true;
    this.hs_zdfEqStablePtr.evaluate = function () {
        $hs.modules.GHCziStable.loadDependencies();
        return this;
    };
    this.hs_newStablePtr.notEvaluated = true;
    this.hs_newStablePtr.evaluate = function (hs_a126DB2z) {
        $hs.modules.GHCziStable.loadDependencies();
        return this.evaluate(hs_a126DB2z);
    };
    this.hs_StablePtr.notEvaluated = true;
    this.hs_StablePtr.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziStable.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
};
$hs.modules.GHCziStable.initAfterDependencies = function () {
    this.hs_castPtrToStablePtr.notEvaluated = false;
    this.hs_castStablePtrToPtr.notEvaluated = false;
    this.hs_deRefStablePtr.notEvaluated = false;
    this.hs_freeStablePtr.notEvaluated = false;
    this.hs_zdfEqStablePtr.notEvaluated = false;
    this.hs_zdfEqStablePtr.evaluate = function () {
        return this;
    };
    this.hs_newStablePtr.notEvaluated = false;
    this.hs_StablePtr.notEvaluated = false;
    var hs_a25vcvK = new $hs.Func(2);
    var hs_zdczeze25vcvY = new $hs.Func(2);
    var hs_zdczsze25vcwd = new $hs.Thunk();
    this.hs_castPtrToStablePtr.evaluate = function (hs_ds26DB1F) {
        var hs_wild26DB2I = hs_ds26DB1F;
        if (hs_ds26DB1F.notEvaluated) {
            hs_wild26DB2I = hs_ds26DB1F.hscall();
        }
        var hs_a126DB1I = hs_wild26DB2I.data[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_a126DB1I];
        return $res;
    };
    this.hs_castStablePtrToPtr.evaluate = function (hs_ds26DB1K) {
        var hs_wild26DB2J = hs_ds26DB1K;
        if (hs_ds26DB1K.notEvaluated) {
            hs_wild26DB2J = hs_ds26DB1K.hscall();
        }
        var hs_s26DB1N = hs_wild26DB2J.data[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_s26DB1N];
        return $res;
    };
    this.hs_deRefStablePtr.evaluate = function (hs_ds26DB1P) {
        var hs_wild26DB2K = hs_ds26DB1P;
        if (hs_ds26DB1P.notEvaluated) {
            hs_wild26DB2K = hs_ds26DB1P.hscall();
        }
        var hs_sp26DB1W = hs_wild26DB2K.data[0];
        var hs_sat26DB2L = new $hs.Func(1);
        hs_sat26DB2L.evaluate = function (hs_s26DB1X) {
            throw "primitive operation deRefStablePtr#. Not implemeted yet.";
        };
        var hs_sat26DB2M = new $hs.Func(1);
        hs_sat26DB2M.evaluate = function (hs_tpl26DB1T) {
            if (hs_tpl26DB1T.notEvaluated) {
                return hs_tpl26DB1T.hscall();
            } else {
                return hs_tpl26DB1T;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DB2M, hs_sat26DB2L);
    };
    hs_a25vcvK.evaluate = function (hs_ds26DB23, hs_eta26DB28) {
        var hs_ds126DB2O = hs_ds26DB23;
        if (hs_ds26DB23.notEvaluated) {
            hs_ds126DB2O = hs_ds26DB23.hscall();
        }
        var hs_ds226DB27 = hs_ds126DB2O.data[0];
        var hs_wild26DB2N = [hs_eta26DB28, hs_free_stable_ptr(hs_ds226DB27)];
        var hs_ds326DB2c = hs_wild26DB2N[0];
        return [hs_ds326DB2c, $hs.modules.GHCziUnit.hs_Z0T];
    };
    this.hs_freeStablePtr.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a25vcvK.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_zdczeze25vcvY.evaluate = function (hs_ds26DB2h, hs_ds126DB2k) {
        var hs_wild26DB2R = hs_ds26DB2h;
        if (hs_ds26DB2h.notEvaluated) {
            hs_wild26DB2R = hs_ds26DB2h.hscall();
        }
        var hs_sp126DB2n = hs_wild26DB2R.data[0];
        var hs_wild126DB2Q = hs_ds126DB2k;
        if (hs_ds126DB2k.notEvaluated) {
            hs_wild126DB2Q = hs_ds126DB2k.hscall();
        }
        var hs_sp226DB2o = hs_wild126DB2Q.data[0];
        throw "primitive operation eqStablePtr#. Not implemeted yet.";
        var hs_ds326DB2P = hs_ds226DB2q;
        if (hs_ds226DB2q.notEvaluated) {
            hs_ds326DB2P = hs_ds226DB2q.hscall();
        }
        switch (hs_ds326DB2P) {
        case 0:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        default:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    this.hs_zdfEqStablePtr.data = [hs_zdczeze25vcvY, hs_zdczsze25vcwd];
    hs_zdczsze25vcwd.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmzsze.hscall($hs.modules.GHCziStable.hs_zdfEqStablePtr);
    };
    this.hs_newStablePtr.evaluate = function (hs_a126DB2z) {
        var hs_sat26DB2U = new $hs.Func(1);
        hs_sat26DB2U.evaluate = function (hs_s26DB2A) {
            throw "primitive operation makeStablePtr#. Not implemeted yet.";
            var hs_szq26DB2E = hs_wild26DB2S[0];
            var hs_sp26DB2F = hs_wild26DB2S[1];
            var hs_sat26DB2T = new $hs.Data(1);
            hs_sat26DB2T.data = [hs_sp26DB2F];
            return [hs_szq26DB2E, hs_sat26DB2T];
        };
        var hs_sat26DB2V = new $hs.Func(1);
        hs_sat26DB2V.evaluate = function (hs_tpl26DB2w) {
            if (hs_tpl26DB2w.notEvaluated) {
                return hs_tpl26DB2w.hscall();
            } else {
                return hs_tpl26DB2w;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DB2V, hs_sat26DB2U);
    };
    this.hs_StablePtr.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
};
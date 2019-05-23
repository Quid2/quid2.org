
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
    this.hs_castPtrToStablePtr.evaluate = function (hs_ds26DdFD) {
        $hs.modules.GHCziStable.loadDependencies();
        return this.evaluate(hs_ds26DdFD);
    };
    this.hs_castStablePtrToPtr.notEvaluated = true;
    this.hs_castStablePtrToPtr.evaluate = function (hs_ds26DdFI) {
        $hs.modules.GHCziStable.loadDependencies();
        return this.evaluate(hs_ds26DdFI);
    };
    this.hs_deRefStablePtr.notEvaluated = true;
    this.hs_deRefStablePtr.evaluate = function (hs_ds26DdFN) {
        $hs.modules.GHCziStable.loadDependencies();
        return this.evaluate(hs_ds26DdFN);
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
    this.hs_newStablePtr.evaluate = function (hs_a126DdGu) {
        $hs.modules.GHCziStable.loadDependencies();
        return this.evaluate(hs_a126DdGu);
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
    var hs_a25uP9H = new $hs.Func(2);
    var hs_zdczeze25uP9U = new $hs.Func(2);
    var hs_zdczsze25uPa8 = new $hs.Thunk();
    this.hs_castPtrToStablePtr.evaluate = function (hs_ds26DdFD) {
        var hs_wild26DdGD = hs_ds26DdFD;
        if (hs_ds26DdFD.notEvaluated) {
            hs_wild26DdGD = hs_ds26DdFD.hscall();
        }
        var hs_a126DdFG = hs_wild26DdGD.data[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_a126DdFG];
        return $res;
    };
    this.hs_castStablePtrToPtr.evaluate = function (hs_ds26DdFI) {
        var hs_wild26DdGE = hs_ds26DdFI;
        if (hs_ds26DdFI.notEvaluated) {
            hs_wild26DdGE = hs_ds26DdFI.hscall();
        }
        var hs_s26DdFL = hs_wild26DdGE.data[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_s26DdFL];
        return $res;
    };
    this.hs_deRefStablePtr.evaluate = function (hs_ds26DdFN) {
        var hs_wild26DdGG = hs_ds26DdFN;
        if (hs_ds26DdFN.notEvaluated) {
            hs_wild26DdGG = hs_ds26DdFN.hscall();
        }
        var hs_sp26DdFU = hs_wild26DdGG.data[0];
        var hs_sat26DdGH = new $hs.Func(1);
        hs_sat26DdGH.evaluate = function (hs_s26DdFV) {
            return [hs_s26DdFV, hs_sp26DdFU];
        };
        var hs_sat26DdGF = new $hs.Func(1);
        hs_sat26DdGF.evaluate = function (hs_tpl26DdFR) {
            if (hs_tpl26DdFR.notEvaluated) {
                return hs_tpl26DdFR.hscall();
            } else {
                return hs_tpl26DdFR;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DdGF, hs_sat26DdGH);
    };
    hs_a25uP9H.evaluate = function (hs_ds26DdG0, hs_eta26DdG5) {
        var hs_ds126DdGI = hs_ds26DdG0;
        if (hs_ds26DdG0.notEvaluated) {
            hs_ds126DdGI = hs_ds26DdG0.hscall();
        }
        var hs_ds226DdG4 = hs_ds126DdGI.data[0];
        var hs_wild26DdGJ = [hs_eta26DdG5, hs_free_stable_ptr(hs_ds226DdG4)];
        var hs_ds326DdG9 = hs_wild26DdGJ[0];
        return [hs_ds326DdG9, $hs.modules.GHCziUnit.hs_Z0T];
    };
    this.hs_freeStablePtr.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a25uP9H.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_zdczeze25uP9U.evaluate = function (hs_ds26DdGd, hs_ds126DdGg) {
        var hs_wild26DdGM = hs_ds26DdGd;
        if (hs_ds26DdGd.notEvaluated) {
            hs_wild26DdGM = hs_ds26DdGd.hscall();
        }
        var hs_sp126DdGj = hs_wild26DdGM.data[0];
        var hs_wild126DdGL = hs_ds126DdGg;
        if (hs_ds126DdGg.notEvaluated) {
            hs_wild126DdGL = hs_ds126DdGg.hscall();
        }
        var hs_sp226DdGk = hs_wild126DdGL.data[0];
        throw "primitive operation eqStablePtr#. Not implemeted yet.";
        var hs_ds326DdGK = hs_ds226DdGm;
        if (hs_ds226DdGm.notEvaluated) {
            hs_ds326DdGK = hs_ds226DdGm.hscall();
        }
        switch (hs_ds326DdGK) {
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
    this.hs_zdfEqStablePtr.data = [hs_zdczeze25uP9U, hs_zdczsze25uPa8];
    hs_zdczsze25uPa8.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmzsze.hscall($hs.modules.GHCziStable.hs_zdfEqStablePtr);
    };
    this.hs_newStablePtr.evaluate = function (hs_a126DdGu) {
        var hs_sat26DdGO = new $hs.Func(1);
        hs_sat26DdGO.evaluate = function (hs_s26DdGv) {
            var hs_wild26DdGQ = [hs_s26DdGv, hs_a126DdGu];
            var hs_szq26DdGz = hs_wild26DdGQ[0];
            var hs_sp26DdGA = hs_wild26DdGQ[1];
            var hs_sat26DdGP = new $hs.Data(1);
            hs_sat26DdGP.data = [hs_sp26DdGA];
            return [hs_szq26DdGz, hs_sat26DdGP];
        };
        var hs_sat26DdGN = new $hs.Func(1);
        hs_sat26DdGN.evaluate = function (hs_tpl26DdGr) {
            if (hs_tpl26DdGr.notEvaluated) {
                return hs_tpl26DdGr.hscall();
            } else {
                return hs_tpl26DdGr;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DdGN, hs_sat26DdGO);
    };
    this.hs_StablePtr.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
};
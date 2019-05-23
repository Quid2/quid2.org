
$hs.modules.DataziIORef = new $hs.Module();
$hs.modules.DataziIORef.dependencies = ["GHC.Base", "GHC.IORef"];
$hs.modules.DataziIORef.initBeforeDependencies = function () {
    this.hs_atomicModifyIORef = new $hs.Thunk();
    this.hs_modifyIORef = new $hs.Func(2);
    this.hs_mkWeakIORef = new $hs.Func(2);
    this.hs_atomicModifyIORef.evaluateOnce = function () {
        $hs.modules.DataziIORef.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_modifyIORef.notEvaluated = true;
    this.hs_modifyIORef.evaluate = function (hs_ref26DFek, hs_f26DFen) {
        $hs.modules.DataziIORef.loadDependencies();
        return this.evaluate(hs_ref26DFek, hs_f26DFen);
    };
    this.hs_mkWeakIORef.notEvaluated = true;
    this.hs_mkWeakIORef.evaluate = function (hs_r26DFer, hs_f26DFeA) {
        $hs.modules.DataziIORef.loadDependencies();
        return this.evaluate(hs_r26DFer, hs_f26DFeA);
    };
};
$hs.modules.DataziIORef.initAfterDependencies = function () {
    this.hs_modifyIORef.notEvaluated = false;
    this.hs_mkWeakIORef.notEvaluated = false;
    this.hs_atomicModifyIORef.evaluateOnce = function () {
        if ($hs.modules.GHCziIORef.hs_atomicModifyIORef.notEvaluated) {
            return $hs.modules.GHCziIORef.hs_atomicModifyIORef.hscall();
        } else {
            return $hs.modules.GHCziIORef.hs_atomicModifyIORef;
        }
    };
    this.hs_modifyIORef.evaluate = function (hs_ref26DFek, hs_f26DFen) {
        var hs_sat26DFeK = new $hs.Thunk();
        hs_sat26DFeK.evaluateOnce = function () {
            var hs_sat26DFeJ = new $hs.Thunk();
            hs_sat26DFeJ.evaluateOnce = function () {
                return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_ref26DFek);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DFeJ, hs_f26DFen);
        };
        var hs_sat26DFeL = new $hs.Thunk();
        hs_sat26DFeL.evaluateOnce = function () {
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_ref26DFek);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFeL, hs_sat26DFeK);
    };
    this.hs_mkWeakIORef.evaluate = function (hs_r26DFer, hs_f26DFeA) {
        var hs_wild26DFez = hs_r26DFer;
        if (hs_r26DFer.notEvaluated) {
            hs_wild26DFez = hs_r26DFer.hscall();
        }
        var hs_rzh26DFey = hs_wild26DFez.data[0];
        var hs_sat26DFeO = new $hs.Func(1);
        hs_sat26DFeO.evaluate = function (hs_s26DFeB) {
            throw "primitive operation mkWeak#. Not implemeted yet.";
            var hs_s126DFeF = hs_wild126DFeM[0];
            var hs_w26DFeG = hs_wild126DFeM[1];
            var hs_sat26DFeN = new $hs.Data(1);
            hs_sat26DFeN.data = [hs_w26DFeG];
            return [hs_s126DFeF, hs_sat26DFeN];
        };
        var hs_sat26DFeP = new $hs.Func(1);
        hs_sat26DFeP.evaluate = function (hs_tpl26DFev) {
            if (hs_tpl26DFev.notEvaluated) {
                return hs_tpl26DFev.hscall();
            } else {
                return hs_tpl26DFev;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DFeP, hs_sat26DFeO);
    };
};
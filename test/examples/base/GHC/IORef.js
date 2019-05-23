
$hs.modules.GHCziIORef = new $hs.Module();
$hs.modules.GHCziIORef.dependencies = ["GHC.Base", "GHC.Classes", "GHC.IO", "GHC.STRef"];
$hs.modules.GHCziIORef.initBeforeDependencies = function () {
    this.hs_atomicModifyIORef = new $hs.Func(2);
    this.hs_writeIORef = new $hs.Func(2);
    this.hs_readIORef = new $hs.Func(1);
    this.hs_newIORef = new $hs.Func(1);
    this.hs_zdfEqIORef = new $hs.Data(1);
    this.hs_IORef = new $hs.Func(1);
    this.hs_atomicModifyIORef.notEvaluated = true;
    this.hs_atomicModifyIORef.evaluate = function (hs_ds26D9aZ, hs_f26D9b7) {
        $hs.modules.GHCziIORef.loadDependencies();
        return this.evaluate(hs_ds26D9aZ, hs_f26D9b7);
    };
    this.hs_writeIORef.notEvaluated = true;
    this.hs_writeIORef.evaluate = function (hs_ds26D9bc, hs_v26D9bd) {
        $hs.modules.GHCziIORef.loadDependencies();
        return this.evaluate(hs_ds26D9bc, hs_v26D9bd);
    };
    this.hs_readIORef.notEvaluated = true;
    this.hs_readIORef.evaluate = function (hs_ds26D9bg) {
        $hs.modules.GHCziIORef.loadDependencies();
        return this.evaluate(hs_ds26D9bg);
    };
    this.hs_newIORef.notEvaluated = true;
    this.hs_newIORef.evaluate = function (hs_v26D9bj) {
        $hs.modules.GHCziIORef.loadDependencies();
        return this.evaluate(hs_v26D9bj);
    };
    this.hs_zdfEqIORef.notEvaluated = true;
    this.hs_zdfEqIORef.evaluate = function () {
        $hs.modules.GHCziIORef.loadDependencies();
        return this;
    };
    this.hs_IORef.notEvaluated = true;
    this.hs_IORef.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziIORef.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
};
$hs.modules.GHCziIORef.initAfterDependencies = function () {
    this.hs_atomicModifyIORef.notEvaluated = false;
    this.hs_writeIORef.notEvaluated = false;
    this.hs_readIORef.notEvaluated = false;
    this.hs_newIORef.notEvaluated = false;
    this.hs_zdfEqIORef.notEvaluated = false;
    this.hs_zdfEqIORef.evaluate = function () {
        return this;
    };
    this.hs_IORef.notEvaluated = false;
    var hs_zdczeze25uKF9 = new $hs.Func(2);
    var hs_zdczsze25uKFe = new $hs.Thunk();
    this.hs_atomicModifyIORef.evaluate = function (hs_ds26D9aZ, hs_f26D9b7) {
        var hs_wild26D9bw = hs_ds26D9aZ;
        if (hs_ds26D9aZ.notEvaluated) {
            hs_wild26D9bw = hs_ds26D9aZ.hscall();
        }
        var hs_rzh26D9b6 = hs_wild26D9bw.data[0];
        var hs_sat26D9bx = new $hs.Func(1);
        hs_sat26D9bx.evaluate = function (hs_s26D9b8) {
            throw "primitive operation atomicModifyMutVar#. Not implemeted yet.";
        };
        var hs_sat26D9bv = new $hs.Func(1);
        hs_sat26D9bv.evaluate = function (hs_tpl26D9b3) {
            if (hs_tpl26D9b3.notEvaluated) {
                return hs_tpl26D9b3.hscall();
            } else {
                return hs_tpl26D9b3;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D9bv, hs_sat26D9bx);
    };
    this.hs_writeIORef.evaluate = function (hs_ds26D9bc, hs_v26D9bd) {
        var hs_sat26D9by = new $hs.Thunk();
        hs_sat26D9by.evaluateOnce = function () {
            return $hs.modules.GHCziSTRef.hs_writeSTRef.hscall(hs_ds26D9bc, hs_v26D9bd);
        };
        return $hs.modules.GHCziIO.hs_stToIO.hscall(hs_sat26D9by);
    };
    this.hs_readIORef.evaluate = function (hs_ds26D9bg) {
        var hs_sat26D9bz = new $hs.Thunk();
        hs_sat26D9bz.evaluateOnce = function () {
            return $hs.modules.GHCziSTRef.hs_readSTRef.hscall(hs_ds26D9bg);
        };
        return $hs.modules.GHCziIO.hs_stToIO.hscall(hs_sat26D9bz);
    };
    this.hs_newIORef.evaluate = function (hs_v26D9bj) {
        var hs_sat26D9bB = new $hs.Func(1);
        hs_sat26D9bB.evaluate = function (hs_var26D9bn) {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_var26D9bn);
        };
        var hs_sat26D9bA = new $hs.Thunk();
        hs_sat26D9bA.evaluateOnce = function () {
            var hs_sat26D9bC = new $hs.Thunk();
            hs_sat26D9bC.evaluateOnce = function () {
                return $hs.modules.GHCziSTRef.hs_newSTRef.hscall(hs_v26D9bj);
            };
            return $hs.modules.GHCziIO.hs_stToIO.hscall(hs_sat26D9bC);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D9bA, hs_sat26D9bB);
    };
    hs_zdczeze25uKF9.evaluate = function (hs_ds26D9bs, hs_ds126D9bt) {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziSTRef.hs_zdfEqSTRef, hs_ds26D9bs, hs_ds126D9bt);
    };
    this.hs_zdfEqIORef.data = [hs_zdczeze25uKF9, hs_zdczsze25uKFe];
    hs_zdczsze25uKFe.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmzsze.hscall($hs.modules.GHCziIORef.hs_zdfEqIORef);
    };
    this.hs_IORef.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.GHCziIORef.hs_IORef.hscall(hs_eta1cW6l3);
    };
};
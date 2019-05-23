
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
    this.hs_atomicModifyIORef.evaluate = function (hs_ds26DwyV, hs_f26Dwz3) {
        $hs.modules.GHCziIORef.loadDependencies();
        return this.evaluate(hs_ds26DwyV, hs_f26Dwz3);
    };
    this.hs_writeIORef.notEvaluated = true;
    this.hs_writeIORef.evaluate = function (hs_ds26Dwz8, hs_v26Dwz9) {
        $hs.modules.GHCziIORef.loadDependencies();
        return this.evaluate(hs_ds26Dwz8, hs_v26Dwz9);
    };
    this.hs_readIORef.notEvaluated = true;
    this.hs_readIORef.evaluate = function (hs_ds26Dwzc) {
        $hs.modules.GHCziIORef.loadDependencies();
        return this.evaluate(hs_ds26Dwzc);
    };
    this.hs_newIORef.notEvaluated = true;
    this.hs_newIORef.evaluate = function (hs_v26Dwzf) {
        $hs.modules.GHCziIORef.loadDependencies();
        return this.evaluate(hs_v26Dwzf);
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
    var hs_zdczeze25v836 = new $hs.Func(2);
    var hs_zdczsze25v83c = new $hs.Thunk();
    this.hs_atomicModifyIORef.evaluate = function (hs_ds26DwyV, hs_f26Dwz3) {
        var hs_wild26Dwzt = hs_ds26DwyV;
        if (hs_ds26DwyV.notEvaluated) {
            hs_wild26Dwzt = hs_ds26DwyV.hscall();
        }
        var hs_rzh26Dwz2 = hs_wild26Dwzt.data[0];
        var hs_sat26Dwzu = new $hs.Func(1);
        hs_sat26Dwzu.evaluate = function (hs_s26Dwz4) {
            throw "primitive operation atomicModifyMutVar#. Not implemeted yet.";
        };
        var hs_sat26Dwzv = new $hs.Func(1);
        hs_sat26Dwzv.evaluate = function (hs_tpl26DwyZ) {
            if (hs_tpl26DwyZ.notEvaluated) {
                return hs_tpl26DwyZ.hscall();
            } else {
                return hs_tpl26DwyZ;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dwzv, hs_sat26Dwzu);
    };
    this.hs_writeIORef.evaluate = function (hs_ds26Dwz8, hs_v26Dwz9) {
        var hs_sat26Dwzw = new $hs.Thunk();
        hs_sat26Dwzw.evaluateOnce = function () {
            return $hs.modules.GHCziSTRef.hs_writeSTRef.hscall(hs_ds26Dwz8, hs_v26Dwz9);
        };
        return $hs.modules.GHCziIO.hs_stToIO.hscall(hs_sat26Dwzw);
    };
    this.hs_readIORef.evaluate = function (hs_ds26Dwzc) {
        var hs_sat26Dwzx = new $hs.Thunk();
        hs_sat26Dwzx.evaluateOnce = function () {
            return $hs.modules.GHCziSTRef.hs_readSTRef.hscall(hs_ds26Dwzc);
        };
        return $hs.modules.GHCziIO.hs_stToIO.hscall(hs_sat26Dwzx);
    };
    this.hs_newIORef.evaluate = function (hs_v26Dwzf) {
        var hs_sat26Dwzy = new $hs.Func(1);
        hs_sat26Dwzy.evaluate = function (hs_var26Dwzj) {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_var26Dwzj);
        };
        var hs_sat26DwzA = new $hs.Thunk();
        hs_sat26DwzA.evaluateOnce = function () {
            var hs_sat26Dwzz = new $hs.Thunk();
            hs_sat26Dwzz.evaluateOnce = function () {
                return $hs.modules.GHCziSTRef.hs_newSTRef.hscall(hs_v26Dwzf);
            };
            return $hs.modules.GHCziIO.hs_stToIO.hscall(hs_sat26Dwzz);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwzA, hs_sat26Dwzy);
    };
    hs_zdczeze25v836.evaluate = function (hs_ds26Dwzp, hs_ds126Dwzq) {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziSTRef.hs_zdfEqSTRef, hs_ds26Dwzp, hs_ds126Dwzq);
    };
    this.hs_zdfEqIORef.data = [hs_zdczeze25v836, hs_zdczsze25v83c];
    hs_zdczsze25v83c.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmzsze.hscall($hs.modules.GHCziIORef.hs_zdfEqIORef);
    };
    this.hs_IORef.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.GHCziIORef.hs_IORef.hscall(hs_eta1cW6l3);
    };
};

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
    this.hs_modifyIORef.evaluate = function (hs_ref26DhbS, hs_f26DhbV) {
        $hs.modules.DataziIORef.loadDependencies();
        return this.evaluate(hs_ref26DhbS, hs_f26DhbV);
    };
    this.hs_mkWeakIORef.notEvaluated = true;
    this.hs_mkWeakIORef.evaluate = function (hs_r26DhbZ, hs_f26Dhc8) {
        $hs.modules.DataziIORef.loadDependencies();
        return this.evaluate(hs_r26DhbZ, hs_f26Dhc8);
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
    this.hs_modifyIORef.evaluate = function (hs_ref26DhbS, hs_f26DhbV) {
        var hs_sat26Dhci = new $hs.Thunk();
        hs_sat26Dhci.evaluateOnce = function () {
            var hs_sat26Dhcj = new $hs.Thunk();
            hs_sat26Dhcj.evaluateOnce = function () {
                return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_ref26DhbS);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26Dhcj, hs_f26DhbV);
        };
        var hs_sat26Dhch = new $hs.Thunk();
        hs_sat26Dhch.evaluateOnce = function () {
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_ref26DhbS);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dhch, hs_sat26Dhci);
    };
    this.hs_mkWeakIORef.evaluate = function (hs_r26DhbZ, hs_f26Dhc8) {
        var hs_wild26Dhc7 = hs_r26DhbZ;
        if (hs_r26DhbZ.notEvaluated) {
            hs_wild26Dhc7 = hs_r26DhbZ.hscall();
        }
        var hs_rzh26Dhc6 = hs_wild26Dhc7.data[0];
        var hs_sat26Dhcl = new $hs.Func(1);
        hs_sat26Dhcl.evaluate = function (hs_s26Dhc9) {
            throw "primitive operation mkWeak#. Not implemeted yet.";
            var hs_s126Dhcd = hs_wild126Dhcn[0];
            var hs_w26Dhce = hs_wild126Dhcn[1];
            var hs_sat26Dhcm = new $hs.Data(1);
            hs_sat26Dhcm.data = [hs_w26Dhce];
            return [hs_s126Dhcd, hs_sat26Dhcm];
        };
        var hs_sat26Dhck = new $hs.Func(1);
        hs_sat26Dhck.evaluate = function (hs_tpl26Dhc3) {
            if (hs_tpl26Dhc3.notEvaluated) {
                return hs_tpl26Dhc3.hscall();
            } else {
                return hs_tpl26Dhc3;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dhck, hs_sat26Dhcl);
    };
};
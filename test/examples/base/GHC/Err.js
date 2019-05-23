
$hs.modules.GHCziErr = new $hs.Module();
$hs.modules.GHCziErr.dependencies = ["GHC.CString", "GHC.Exception"];
$hs.modules.GHCziErr.initBeforeDependencies = function () {
    this.hs_overflowError = new $hs.Thunk();
    this.hs_divZZeroError = new $hs.Thunk();
    this.hs_error = new $hs.Func(1);
    this.hs_undefined = new $hs.Thunk();
    this.hs_absentErr = new $hs.Thunk();
    this.hs_overflowError.evaluateOnce = function () {
        $hs.modules.GHCziErr.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_divZZeroError.evaluateOnce = function () {
        $hs.modules.GHCziErr.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_error.notEvaluated = true;
    this.hs_error.evaluate = function (hs_s26CQ7m) {
        $hs.modules.GHCziErr.loadDependencies();
        return this.evaluate(hs_s26CQ7m);
    };
    this.hs_undefined.evaluateOnce = function () {
        $hs.modules.GHCziErr.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_absentErr.evaluateOnce = function () {
        $hs.modules.GHCziErr.loadDependencies();
        return this.evaluateOnce();
    };
};
$hs.modules.GHCziErr.initAfterDependencies = function () {
    this.hs_error.notEvaluated = false;
    this.hs_overflowError.evaluateOnce = function () {
        return $hs.modules.GHCziException.hs_throw.hscall($hs.modules.GHCziException.hs_zdfExceptionArithException, $hs.modules.GHCziException.hs_Overflow);
    };
    this.hs_divZZeroError.evaluateOnce = function () {
        return $hs.modules.GHCziException.hs_throw.hscall($hs.modules.GHCziException.hs_zdfExceptionArithException, $hs.modules.GHCziException.hs_DivideByZZero);
    };
    this.hs_error.evaluate = function (hs_s26CQ7m) {
        var hs_sat26CQ7s = new $hs.Data(1);
        hs_sat26CQ7s.data = [hs_s26CQ7m];
        return $hs.modules.GHCziException.hs_throw.hscall($hs.modules.GHCziException.hs_zdfExceptionErrorCall, hs_sat26CQ7s);
    };
    this.hs_undefined.evaluateOnce = function () {
        var hs_sat26CQ7u = new $hs.Thunk();
        hs_sat26CQ7u.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Prelude.undefined\x00");
        };
        var hs_sat26CQ7t = new $hs.Data(1);
        hs_sat26CQ7t.data = [hs_sat26CQ7u];
        return $hs.modules.GHCziException.hs_throw.hscall($hs.modules.GHCziException.hs_zdfExceptionErrorCall, hs_sat26CQ7t);
    };
    this.hs_absentErr.evaluateOnce = function () {
        var hs_sat26CQ7w = new $hs.Thunk();
        hs_sat26CQ7w.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Oops! The program has entered an `absent' argument!\n\x00");
        };
        var hs_sat26CQ7v = new $hs.Data(1);
        hs_sat26CQ7v.data = [hs_sat26CQ7w];
        return $hs.modules.GHCziException.hs_throw.hscall($hs.modules.GHCziException.hs_zdfExceptionErrorCall, hs_sat26CQ7v);
    };
};
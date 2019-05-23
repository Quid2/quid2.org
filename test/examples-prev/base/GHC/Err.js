
$hs.modules.GHCziErr = new $hs.Module();
$hs.modules.GHCziErr.dependencies = ["GHC.Base", "GHC.Exception"];
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
    this.hs_error.evaluate = function (hs_s26DeU0) {
        $hs.modules.GHCziErr.loadDependencies();
        return this.evaluate(hs_s26DeU0);
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
    this.hs_error.evaluate = function (hs_s26DeU0) {
        var hs_sat26DeU6 = new $hs.Data(1);
        hs_sat26DeU6.data = [hs_s26DeU0];
        return $hs.modules.GHCziException.hs_throw.hscall($hs.modules.GHCziException.hs_zdfExceptionErrorCall, hs_sat26DeU6);
    };
    this.hs_undefined.evaluateOnce = function () {
        var hs_sat26DeU7 = new $hs.Thunk();
        hs_sat26DeU7.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Prelude.undefined\x00");
        };
        var hs_sat26DeU8 = new $hs.Data(1);
        hs_sat26DeU8.data = [hs_sat26DeU7];
        return $hs.modules.GHCziException.hs_throw.hscall($hs.modules.GHCziException.hs_zdfExceptionErrorCall, hs_sat26DeU8);
    };
    this.hs_absentErr.evaluateOnce = function () {
        var hs_sat26DeU9 = new $hs.Thunk();
        hs_sat26DeU9.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Oops! The program has entered an `absent' argument!\n\x00");
        };
        var hs_sat26DeUa = new $hs.Data(1);
        hs_sat26DeUa.data = [hs_sat26DeU9];
        return $hs.modules.GHCziException.hs_throw.hscall($hs.modules.GHCziException.hs_zdfExceptionErrorCall, hs_sat26DeUa);
    };
};
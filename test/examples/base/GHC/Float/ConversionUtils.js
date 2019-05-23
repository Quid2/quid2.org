
$hs.modules.GHCziFloatziConversionUtils = new $hs.Module();
$hs.modules.GHCziFloatziConversionUtils.dependencies = ["GHC.Prim", "GHC.Integer"];
$hs.modules.GHCziFloatziConversionUtils.initBeforeDependencies = function () {
    this.hs_elimZZerosIntzh = new $hs.Func(2);
    this.hs_elimZZerosInteger = new $hs.Func(2);
    this.hs_BA = new $hs.Func(1);
    this.hs_elimZZerosIntzh.notEvaluated = true;
    this.hs_elimZZerosIntzh.evaluate = function (hs_n26CYW7, hs_e26CYWc) {
        $hs.modules.GHCziFloatziConversionUtils.loadDependencies();
        return this.evaluate(hs_n26CYW7, hs_e26CYWc);
    };
    this.hs_elimZZerosInteger.notEvaluated = true;
    this.hs_elimZZerosInteger.evaluate = function (hs_m26CYX4, hs_e26CYX7) {
        $hs.modules.GHCziFloatziConversionUtils.loadDependencies();
        return this.evaluate(hs_m26CYX4, hs_e26CYX7);
    };
    this.hs_BA.notEvaluated = true;
    this.hs_BA.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziFloatziConversionUtils.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
};
$hs.modules.GHCziFloatziConversionUtils.initAfterDependencies = function () {
    this.hs_elimZZerosIntzh.notEvaluated = false;
    this.hs_elimZZerosInteger.notEvaluated = false;
    this.hs_BA.notEvaluated = false;
    var hs_zzeroCountArr25rkw9 = new $hs.Thunk();
    var hs_elim64zh25rkw4 = new $hs.Func(2);
    hs_zzeroCountArr25rkw9.evaluateOnce = function () {
        throw "primitive operation newByteArray#. Not implemeted yet.";
        var hs_s126CYVB = hs_wild26CYX9[0];
        var hs_mba26CYVA = hs_wild26CYX9[1];
        throw "primitive operation writeInt8Array#. Not implemeted yet.";
        var hs_fillA26CYVN = new $hs.Func(4);
        hs_fillA26CYVN.evaluate = function (hs_step26CYVK, hs_val26CYVP, hs_idx26CYVI, hs_st26CYVM) {
            var hs_wild126CYXb = hs_idx26CYVI < 256 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild126CYXb.tag) {
            case 1:
                var hs_wild226CYXd = hs_step26CYVK < 256 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                switch (hs_wild226CYXd.tag) {
                case 1:
                    if (hs_st26CYVM.notEvaluated) {
                        return hs_st26CYVM.hscall();
                    } else {
                        return hs_st26CYVM;
                    }
                case 2:
                    var hs_sat26CYXe = ($hs.Int.addCarry(hs_val26CYVP, 1, 0))[0];
                    var hs_sat26CYXf = $hs.Int.mul(2, hs_step26CYVK);
                    return hs_fillA26CYVN.hscall(hs_sat26CYXf, hs_sat26CYXe, hs_step26CYVK, hs_st26CYVM);
                }
            case 2:
                throw "primitive operation writeInt8Array#. Not implemeted yet.";
                var hs_sat26CYXc = ($hs.Int.addCarry(hs_idx26CYVI, hs_step26CYVK, 0))[0];
                return hs_fillA26CYVN.hscall(hs_step26CYVK, hs_val26CYVP, hs_sat26CYXc, hs_nx26CYVT);
            }
        };
        var hs_s326CYVW = hs_fillA26CYVN.hscall(2, 0, 1, hs_s226CYVU);
        throw "primitive operation unsafeFreezeByteArray#. Not implemeted yet.";
        var hs_ba26CYW0 = hs_wild126CYXa[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ba26CYW0];
        return $res;
    };
    this.hs_elimZZerosIntzh.evaluate = function (hs_n26CYW7, hs_e26CYWc) {
        var hs_wild26CYXh = hs_zzeroCountArr25rkw9;
        if (hs_zzeroCountArr25rkw9.notEvaluated) {
            hs_wild26CYXh = hs_zzeroCountArr25rkw9.hscall();
        }
        var hs_ba26CYW6 = hs_wild26CYXh.data[0];
        var hs_sat26CYXi = hs_n26CYW7;
        var hs_sat26CYXj = 255 & hs_sat26CYXi;
        var hs_sat26CYXk = hs_sat26CYXj;
        throw "primitive operation indexInt8Array#. Not implemeted yet.";
        var hs_wild126CYXl = hs_e26CYWc <= hs_t26CYWb ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild126CYXl.tag) {
        case 1:
            var hs_wild226CYXo = hs_t26CYWb < 8 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild226CYXo.tag) {
            case 1:
                var hs_sat26CYXr = ($hs.Int.addCarry(hs_e26CYWc, ~8, 1))[0];
                var hs_sat26CYXs = hs_n26CYW7 >>> 8;
                return $hs.modules.GHCziFloatziConversionUtils.hs_elimZZerosIntzh.hscall(hs_sat26CYXs, hs_sat26CYXr);
            case 2:
                var hs_sat26CYXp = ($hs.Int.addCarry(hs_e26CYWc, ~hs_t26CYWb, 1))[0];
                var hs_sat26CYXn = new $hs.Thunk();
                hs_sat26CYXn.evaluateOnce = function () {
                    var hs_sat26CYXq = hs_n26CYW7 >>> hs_t26CYWb;
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(hs_sat26CYXq);
                };
                return [hs_sat26CYXn, hs_sat26CYXp];
            }
        case 2:
            var hs_sat26CYXg = new $hs.Thunk();
            hs_sat26CYXg.evaluateOnce = function () {
                var hs_sat26CYXm = hs_n26CYW7 >>> hs_e26CYWc;
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(hs_sat26CYXm);
            };
            return [hs_sat26CYXg, 0];
        }
    };
    hs_elim64zh25rkw4.evaluate = function (hs_n26CYWp, hs_e26CYWD) {
        var hs_wild26CYXt = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_int64ToInt(hs_n26CYWp)];
        var hs_ds226CYWy = hs_wild26CYXt[1];
        var hs_wild126CYXw = hs_zzeroCountArr25rkw9;
        if (hs_zzeroCountArr25rkw9.notEvaluated) {
            hs_wild126CYXw = hs_zzeroCountArr25rkw9.hscall();
        }
        var hs_ba26CYWx = hs_wild126CYXw.data[0];
        var hs_sat26CYXx = hs_ds226CYWy;
        var hs_sat26CYXy = 255 & hs_sat26CYXx;
        var hs_sat26CYXz = hs_sat26CYXy;
        throw "primitive operation indexInt8Array#. Not implemeted yet.";
        var hs_wild226CYXA = hs_e26CYWD <= hs_t26CYWC ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226CYXA.tag) {
        case 1:
            var hs_wild326CYXE = hs_t26CYWC < 8 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild326CYXE.tag) {
            case 1:
                var hs_wild426CYXI = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_uncheckedIShiftRA64(hs_n26CYWp, 8)];
                var hs_ds426CYWL = hs_wild426CYXI[1];
                var hs_sat26CYXK = ($hs.Int.addCarry(hs_e26CYWD, ~8, 1))[0];
                return hs_elim64zh25rkw4.hscall(hs_ds426CYWL, hs_sat26CYXK);
            case 2:
                var hs_sat26CYXF = ($hs.Int.addCarry(hs_e26CYWD, ~hs_t26CYWC, 1))[0];
                var hs_sat26CYXD = new $hs.Thunk();
                hs_sat26CYXD.evaluateOnce = function () {
                    var hs_wild426CYXH = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_uncheckedIShiftRA64(hs_n26CYWp, hs_t26CYWC)];
                    var hs_ds426CYWS = hs_wild426CYXH[1];
                    return $hs.modules.GHCziInteger.hs_int64ToInteger.hscall(hs_ds426CYWS);
                };
                return [hs_sat26CYXD, hs_sat26CYXF];
            }
        case 2:
            var hs_sat26CYXv = new $hs.Thunk();
            hs_sat26CYXv.evaluateOnce = function () {
                var hs_wild326CYXC = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_uncheckedIShiftRA64(hs_n26CYWp, hs_e26CYWD)];
                var hs_ds426CYX0 = hs_wild326CYXC[1];
                return $hs.modules.GHCziInteger.hs_int64ToInteger.hscall(hs_ds426CYX0);
            };
            return [hs_sat26CYXv, 0];
        }
    };
    this.hs_elimZZerosInteger.evaluate = function (hs_m26CYX4, hs_e26CYX7) {
        var hs_wild26CYX6 = $hs.modules.GHCziInteger.hs_integerToInt64.hscall(hs_m26CYX4);
        return hs_elim64zh25rkw4.hscall(hs_wild26CYX6, hs_e26CYX7);
    };
    this.hs_BA.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
};
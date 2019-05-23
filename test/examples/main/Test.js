
$hs.modules.Test = new $hs.Module();
$hs.modules.Test.dependencies = ["GHC.Integer", "GHC.Base", "GHC.Classes", "GHC.Enum", "GHC.List", "GHC.Num", "GHC.Real", "GHC.Show", "Control.Exception.Base"];
$hs.modules.Test.initBeforeDependencies = function () {
    this.hs_addN = new $hs.Func(3);
    this.hs_primesStr = new $hs.Func(1);
    this.hs_firstPrimes = new $hs.Thunk();
    this.hs_ServerError = new $hs.Func(1);
    this.hs_ResultTypeError = new $hs.Func(1);
    this.hs_ProtocolError = new $hs.Func(1);
    this.hs_Add = new $hs.Func(2);
    this.hs_Inc = new $hs.Func(1);
    this.hs_Add3 = new $hs.Func(3);
    this.hs_addN.notEvaluated = true;
    this.hs_addN.evaluate = function (hs_n126zuGI, hs_n226zuGJ, hs_n326zuGL) {
        $hs.modules.Test.loadDependencies();
        return this.evaluate(hs_n126zuGI, hs_n226zuGJ, hs_n326zuGL);
    };
    this.hs_primesStr.notEvaluated = true;
    this.hs_primesStr.evaluate = function (hs_n26zuHj) {
        $hs.modules.Test.loadDependencies();
        return this.evaluate(hs_n26zuHj);
    };
    this.hs_firstPrimes.evaluateOnce = function () {
        $hs.modules.Test.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_ServerError.notEvaluated = true;
    this.hs_ServerError.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.Test.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_ResultTypeError.notEvaluated = true;
    this.hs_ResultTypeError.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.Test.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_ProtocolError.notEvaluated = true;
    this.hs_ProtocolError.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.Test.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_Add.notEvaluated = true;
    this.hs_Add.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.Test.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_Inc.notEvaluated = true;
    this.hs_Inc.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.Test.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_Add3.notEvaluated = true;
    this.hs_Add3.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.Test.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
};
$hs.modules.Test.initAfterDependencies = function () {
    this.hs_addN.notEvaluated = false;
    this.hs_primesStr.notEvaluated = false;
    this.hs_ServerError.notEvaluated = false;
    this.hs_ResultTypeError.notEvaluated = false;
    this.hs_ProtocolError.notEvaluated = false;
    this.hs_Add.notEvaluated = false;
    this.hs_Inc.notEvaluated = false;
    this.hs_Add3.notEvaluated = false;
    var hs_zddShow25r6aw = new $hs.Thunk();
    var hs_zddReal25r6ax = new $hs.Thunk();
    var hs_zddNum25r6ay = new $hs.Thunk();
    var hs_a25r6az = new $hs.Thunk();
    var hs_zddEq25r6aA = new $hs.Thunk();
    var hs_sieve25r6aB = new $hs.Func(1);
    var hs_sat26zuHz = new $hs.Thunk();
    var hs_primes25r5v0 = new $hs.Thunk();
    var hs_sat26zuHD = new $hs.Thunk();
    var hs_sat26zuHE = new $hs.Thunk();
    this.hs_addN.evaluate = function (hs_n126zuGI, hs_n226zuGJ, hs_n326zuGL) {
        var hs_sat26zuHo = new $hs.Thunk();
        hs_sat26zuHo.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n126zuGI, hs_n226zuGJ);
        };
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26zuHo, hs_n326zuGL);
    };
    hs_zddShow25r6aw.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zdfShowZMZN.hscall($hs.modules.GHCziShow.hs_zdfShowInt);
    };
    hs_zddReal25r6ax.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt);
    };
    hs_zddNum25r6ay.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal25r6ax);
    };
    hs_a25r6az.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal25r6ax);
    };
    hs_zddEq25r6aA.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_a25r6az);
    };
    hs_sieve25r6aB.evaluate = function (hs_ds26zuGT) {
        var hs_wild26zuHq = hs_ds26zuGT;
        if (hs_ds26zuGT.notEvaluated) {
            hs_wild26zuHq = hs_ds26zuGT.hscall();
        }
        switch (hs_wild26zuHq.tag) {
        case 1:
            return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("Test.hs:27:9-62|function sieve\x00");
        case 2:
            var hs_x26zuGX = hs_wild26zuHq.data[0];
            var hs_xs26zuHc = hs_wild26zuHq.data[1];
            var hs_sat26zuHp = new $hs.Thunk();
            hs_sat26zuHp.evaluateOnce = function () {
                var hs_sat26zuHr = new $hs.Thunk();
                hs_sat26zuHr.evaluateOnce = function () {
                    var hs_ds126zuHa = new $hs.Func(1);
                    hs_ds126zuHa.evaluate = function (hs_ds226zuH0) {
                        var hs_ds326zuHt = hs_ds226zuH0;
                        if (hs_ds226zuH0.notEvaluated) {
                            hs_ds326zuHt = hs_ds226zuH0.hscall();
                        }
                        switch (hs_ds326zuHt.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_ds426zuH4 = hs_ds326zuHt.data[0];
                            var hs_ds526zuH9 = hs_ds326zuHt.data[1];
                            var hs_sat26zuHu = new $hs.Thunk();
                            hs_sat26zuHu.evaluateOnce = function () {
                                var hs_sat26zuHx = new $hs.Thunk();
                                hs_sat26zuHx.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                };
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum25r6ay, hs_sat26zuHx);
                            };
                            var hs_sat26zuHv = new $hs.Thunk();
                            hs_sat26zuHv.evaluateOnce = function () {
                                return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_ds426zuH4, hs_x26zuGX);
                            };
                            var hs_wild126zuHw = $hs.modules.GHCziClasses.hs_zsze.hscall(hs_zddEq25r6aA, hs_sat26zuHv, hs_sat26zuHu);
                            switch (hs_wild126zuHw.tag) {
                            case 1:
                                return hs_ds126zuHa.hscall(hs_ds526zuH9);
                            case 2:
                                var hs_sat26zuHs = new $hs.Thunk();
                                hs_sat26zuHs.evaluateOnce = function () {
                                    return hs_ds126zuHa.hscall(hs_ds526zuH9);
                                };
                                var $res = new $hs.Data(2);
                                $res.data = [hs_ds426zuH4, hs_sat26zuHs];
                                return $res;
                            }
                        }
                    };
                    return hs_ds126zuHa.hscall(hs_xs26zuHc);
                };
                return hs_sieve25r6aB.hscall(hs_sat26zuHr);
            };
            var $res = new $hs.Data(2);
            $res.data = [hs_x26zuGX, hs_sat26zuHp];
            return $res;
        }
    };
    hs_sat26zuHz.evaluateOnce = function () {
        var hs_sat26zuHy = new $hs.Data(1);
        hs_sat26zuHy.data = [2];
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26zuHy);
    };
    hs_primes25r5v0.evaluateOnce = function () {
        return hs_sieve25r6aB.hscall(hs_sat26zuHz);
    };
    this.hs_primesStr.evaluate = function (hs_n26zuHj) {
        var hs_sat26zuHB = new $hs.Thunk();
        hs_sat26zuHB.evaluateOnce = function () {
            return $hs.modules.GHCziList.hs_take.hscall(hs_n26zuHj, hs_primes25r5v0);
        };
        var hs_sat26zuHA = new $hs.Thunk();
        hs_sat26zuHA.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_show.hscall(hs_zddShow25r6aw);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26zuHA, hs_sat26zuHB);
    };
    hs_sat26zuHD.evaluateOnce = function () {
        var hs_sat26zuHC = new $hs.Data(1);
        hs_sat26zuHC.data = [7];
        return $hs.modules.GHCziList.hs_take.hscall(hs_sat26zuHC, hs_primes25r5v0);
    };
    hs_sat26zuHE.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall(hs_zddShow25r6aw);
    };
    this.hs_firstPrimes.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26zuHE, hs_sat26zuHD);
    };
    this.hs_ServerError.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
    this.hs_ResultTypeError.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(2);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
    this.hs_ProtocolError.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(3);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
    this.hs_Add.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_Inc.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(2);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
    this.hs_Add3.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(3);
        $res.data = [hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
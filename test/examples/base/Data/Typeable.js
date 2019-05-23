
$hs.modules.DataziTypeable = new $hs.Module();
$hs.modules.DataziTypeable.dependencies = ["GHC.Types", "Data.Maybe", "GHC.Base", "GHC.Err", "Data.Typeable.Internal", "GHC.Classes", "GHC.Fingerprint", "GHC.Fingerprint.Type", "Unsafe.Coerce"];
$hs.modules.DataziTypeable.initBeforeDependencies = function () {
    this.hs_gcast2 = new $hs.Func(3);
    this.hs_gcast1 = new $hs.Func(3);
    this.hs_gcast = new $hs.Func(3);
    this.hs_mkTyCon = new $hs.Func(1);
    this.hs_cast = new $hs.Func(3);
    this.hs_zdfEqTypeRepKey = new $hs.Data(1);
    this.hs_zdfOrdTypeRepKey = new $hs.Data(1);
    this.hs_typeRepKey = new $hs.Func(1);
    this.hs_TypeRepKey = new $hs.Func(1);
    this.hs_gcast2.notEvaluated = true;
    this.hs_gcast2.evaluate = function (hs_zddTypeable226CQj0, hs_zddTypeable126CQj4, hs_x26CQj1) {
        $hs.modules.DataziTypeable.loadDependencies();
        return this.evaluate(hs_zddTypeable226CQj0, hs_zddTypeable126CQj4, hs_x26CQj1);
    };
    this.hs_gcast1.notEvaluated = true;
    this.hs_gcast1.evaluate = function (hs_zddTypeable126CQjf, hs_zddTypeable226CQjj, hs_x26CQjg) {
        $hs.modules.DataziTypeable.loadDependencies();
        return this.evaluate(hs_zddTypeable126CQjf, hs_zddTypeable226CQjj, hs_x26CQjg);
    };
    this.hs_gcast.notEvaluated = true;
    this.hs_gcast.evaluate = function (hs_zddTypeable26CQju, hs_zddTypeable126CQjy, hs_x26CQjv) {
        $hs.modules.DataziTypeable.loadDependencies();
        return this.evaluate(hs_zddTypeable26CQju, hs_zddTypeable126CQjy, hs_x26CQjv);
    };
    this.hs_mkTyCon.notEvaluated = true;
    this.hs_mkTyCon.evaluate = function (hs_name26CQjG) {
        $hs.modules.DataziTypeable.loadDependencies();
        return this.evaluate(hs_name26CQjG);
    };
    this.hs_cast.notEvaluated = true;
    this.hs_cast.evaluate = function (hs_zddTypeable26CQjP, hs_zddTypeable126CQjS, hs_x26CQjQ) {
        $hs.modules.DataziTypeable.loadDependencies();
        return this.evaluate(hs_zddTypeable26CQjP, hs_zddTypeable126CQjS, hs_x26CQjQ);
    };
    this.hs_zdfEqTypeRepKey.notEvaluated = true;
    this.hs_zdfEqTypeRepKey.evaluate = function () {
        $hs.modules.DataziTypeable.loadDependencies();
        return this;
    };
    this.hs_zdfOrdTypeRepKey.notEvaluated = true;
    this.hs_zdfOrdTypeRepKey.evaluate = function () {
        $hs.modules.DataziTypeable.loadDependencies();
        return this;
    };
    this.hs_typeRepKey.notEvaluated = true;
    this.hs_typeRepKey.evaluate = function (hs_ds26CQkh) {
        $hs.modules.DataziTypeable.loadDependencies();
        return this.evaluate(hs_ds26CQkh);
    };
    this.hs_TypeRepKey.notEvaluated = true;
    this.hs_TypeRepKey.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.DataziTypeable.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
};
$hs.modules.DataziTypeable.initAfterDependencies = function () {
    this.hs_gcast2.notEvaluated = false;
    this.hs_gcast1.notEvaluated = false;
    this.hs_gcast.notEvaluated = false;
    this.hs_mkTyCon.notEvaluated = false;
    this.hs_cast.notEvaluated = false;
    this.hs_zdfEqTypeRepKey.notEvaluated = false;
    this.hs_zdfEqTypeRepKey.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdTypeRepKey.notEvaluated = false;
    this.hs_zdfOrdTypeRepKey.evaluate = function () {
        return this;
    };
    this.hs_typeRepKey.notEvaluated = false;
    this.hs_TypeRepKey.notEvaluated = false;
    var hs_a25urNI = new $hs.Thunk();
    var hs_zdccompare25urNJ = new $hs.Thunk();
    var hs_a125urNK = new $hs.Thunk();
    var hs_zdczl25urNL = new $hs.Thunk();
    var hs_a225urNM = new $hs.Thunk();
    var hs_zdczgze25urNN = new $hs.Thunk();
    var hs_a325urNO = new $hs.Thunk();
    var hs_zdczg25urNP = new $hs.Thunk();
    var hs_a425urNQ = new $hs.Thunk();
    var hs_zdczlze25urNR = new $hs.Thunk();
    var hs_a525urNS = new $hs.Thunk();
    var hs_zdcmax25urNT = new $hs.Thunk();
    var hs_a625urNU = new $hs.Thunk();
    var hs_zdcmin25urNV = new $hs.Thunk();
    var hs_a725urNW = new $hs.Thunk();
    var hs_zdczeze25urNX = new $hs.Thunk();
    var hs_a825urNY = new $hs.Thunk();
    var hs_zdczsze25urNZ = new $hs.Thunk();
    this.hs_gcast2.evaluate = function (hs_zddTypeable226CQj0, hs_zddTypeable126CQj4, hs_x26CQj1) {
        var hs_r26CQj5 = new $hs.Thunk();
        hs_r26CQj5.evaluateOnce = function () {
            var hs_sat26CQko = new $hs.Thunk();
            hs_sat26CQko.evaluateOnce = function () {
                var hs_sat26CQks = new $hs.Thunk();
                hs_sat26CQks.evaluateOnce = function () {
                    var hs_sat26CQkt = new $hs.Thunk();
                    hs_sat26CQkt.evaluateOnce = function () {
                        return $hs.modules.DataziMaybe.hs_fromJust.hscall(hs_r26CQj5);
                    };
                    return $hs.modules.GHCziErr.hs_undefined.hscall(hs_sat26CQkt);
                };
                return $hs.modules.DataziTypeableziInternal.hs_typeOf2.hscall(hs_zddTypeable126CQj4, hs_sat26CQks);
            };
            var hs_sat26CQkp = new $hs.Thunk();
            hs_sat26CQkp.evaluateOnce = function () {
                var hs_sat26CQkr = new $hs.Thunk();
                hs_sat26CQkr.evaluateOnce = function () {
                    return $hs.modules.GHCziErr.hs_undefined.hscall(hs_x26CQj1);
                };
                return $hs.modules.DataziTypeableziInternal.hs_typeOf2.hscall(hs_zddTypeable226CQj0, hs_sat26CQkr);
            };
            var hs_wild26CQkq = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.DataziTypeableziInternal.hs_zdfEqTypeRep, hs_sat26CQkp, hs_sat26CQko);
            switch (hs_wild26CQkq.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_sat26CQkn = new $hs.Thunk();
                hs_sat26CQkn.evaluateOnce = function () {
                    return $hs.modules.UnsafeziCoerce.hs_unsafeCoerce.hscall(hs_x26CQj1);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.DataziMaybe.hs_Just, hs_sat26CQkn);
            }
        };
        if (hs_r26CQj5.notEvaluated) {
            return hs_r26CQj5.hscall();
        } else {
            return hs_r26CQj5;
        }
    };
    this.hs_gcast1.evaluate = function (hs_zddTypeable126CQjf, hs_zddTypeable226CQjj, hs_x26CQjg) {
        var hs_r26CQjk = new $hs.Thunk();
        hs_r26CQjk.evaluateOnce = function () {
            var hs_sat26CQkv = new $hs.Thunk();
            hs_sat26CQkv.evaluateOnce = function () {
                var hs_sat26CQkz = new $hs.Thunk();
                hs_sat26CQkz.evaluateOnce = function () {
                    var hs_sat26CQkA = new $hs.Thunk();
                    hs_sat26CQkA.evaluateOnce = function () {
                        return $hs.modules.DataziMaybe.hs_fromJust.hscall(hs_r26CQjk);
                    };
                    return $hs.modules.GHCziErr.hs_undefined.hscall(hs_sat26CQkA);
                };
                return $hs.modules.DataziTypeableziInternal.hs_typeOf1.hscall(hs_zddTypeable226CQjj, hs_sat26CQkz);
            };
            var hs_sat26CQkw = new $hs.Thunk();
            hs_sat26CQkw.evaluateOnce = function () {
                var hs_sat26CQky = new $hs.Thunk();
                hs_sat26CQky.evaluateOnce = function () {
                    return $hs.modules.GHCziErr.hs_undefined.hscall(hs_x26CQjg);
                };
                return $hs.modules.DataziTypeableziInternal.hs_typeOf1.hscall(hs_zddTypeable126CQjf, hs_sat26CQky);
            };
            var hs_wild26CQkx = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.DataziTypeableziInternal.hs_zdfEqTypeRep, hs_sat26CQkw, hs_sat26CQkv);
            switch (hs_wild26CQkx.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_sat26CQku = new $hs.Thunk();
                hs_sat26CQku.evaluateOnce = function () {
                    return $hs.modules.UnsafeziCoerce.hs_unsafeCoerce.hscall(hs_x26CQjg);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.DataziMaybe.hs_Just, hs_sat26CQku);
            }
        };
        if (hs_r26CQjk.notEvaluated) {
            return hs_r26CQjk.hscall();
        } else {
            return hs_r26CQjk;
        }
    };
    this.hs_gcast.evaluate = function (hs_zddTypeable26CQju, hs_zddTypeable126CQjy, hs_x26CQjv) {
        var hs_r26CQjz = new $hs.Thunk();
        hs_r26CQjz.evaluateOnce = function () {
            var hs_sat26CQkC = new $hs.Thunk();
            hs_sat26CQkC.evaluateOnce = function () {
                var hs_sat26CQkG = new $hs.Thunk();
                hs_sat26CQkG.evaluateOnce = function () {
                    var hs_sat26CQkH = new $hs.Thunk();
                    hs_sat26CQkH.evaluateOnce = function () {
                        return $hs.modules.DataziMaybe.hs_fromJust.hscall(hs_r26CQjz);
                    };
                    return $hs.modules.GHCziErr.hs_undefined.hscall(hs_sat26CQkH);
                };
                return $hs.modules.DataziTypeableziInternal.hs_typeOf.hscall(hs_zddTypeable126CQjy, hs_sat26CQkG);
            };
            var hs_sat26CQkD = new $hs.Thunk();
            hs_sat26CQkD.evaluateOnce = function () {
                var hs_sat26CQkF = new $hs.Thunk();
                hs_sat26CQkF.evaluateOnce = function () {
                    return $hs.modules.GHCziErr.hs_undefined.hscall(hs_x26CQjv);
                };
                return $hs.modules.DataziTypeableziInternal.hs_typeOf.hscall(hs_zddTypeable26CQju, hs_sat26CQkF);
            };
            var hs_wild26CQkE = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.DataziTypeableziInternal.hs_zdfEqTypeRep, hs_sat26CQkD, hs_sat26CQkC);
            switch (hs_wild26CQkE.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_sat26CQkB = new $hs.Thunk();
                hs_sat26CQkB.evaluateOnce = function () {
                    return $hs.modules.UnsafeziCoerce.hs_unsafeCoerce.hscall(hs_x26CQjv);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.DataziMaybe.hs_Just, hs_sat26CQkB);
            }
        };
        if (hs_r26CQjz.notEvaluated) {
            return hs_r26CQjz.hscall();
        } else {
            return hs_r26CQjz;
        }
    };
    this.hs_mkTyCon.evaluate = function (hs_name26CQjG) {
        var hs_tpl26CQjK = $hs.modules.GHCziFingerprint.hs_fingerprintString.hscall(hs_name26CQjG);
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26CQjK, $hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN, hs_name26CQjG];
        return $res;
    };
    this.hs_cast.evaluate = function (hs_zddTypeable26CQjP, hs_zddTypeable126CQjS, hs_x26CQjQ) {
        var hs_r26CQjT = new $hs.Thunk();
        hs_r26CQjT.evaluateOnce = function () {
            var hs_sat26CQkL = new $hs.Thunk();
            hs_sat26CQkL.evaluateOnce = function () {
                var hs_sat26CQkO = new $hs.Thunk();
                hs_sat26CQkO.evaluateOnce = function () {
                    return $hs.modules.DataziMaybe.hs_fromJust.hscall(hs_r26CQjT);
                };
                return $hs.modules.DataziTypeableziInternal.hs_typeOf.hscall(hs_zddTypeable126CQjS, hs_sat26CQkO);
            };
            var hs_sat26CQkM = new $hs.Thunk();
            hs_sat26CQkM.evaluateOnce = function () {
                return $hs.modules.DataziTypeableziInternal.hs_typeOf.hscall(hs_zddTypeable26CQjP, hs_x26CQjQ);
            };
            var hs_wild26CQkN = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.DataziTypeableziInternal.hs_zdfEqTypeRep, hs_sat26CQkM, hs_sat26CQkL);
            switch (hs_wild26CQkN.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_sat26CQkK = new $hs.Thunk();
                hs_sat26CQkK.evaluateOnce = function () {
                    return $hs.modules.UnsafeziCoerce.hs_unsafeCoerce.hscall(hs_x26CQjQ);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.DataziMaybe.hs_Just, hs_sat26CQkK);
            }
        };
        if (hs_r26CQjT.notEvaluated) {
            return hs_r26CQjT.hscall();
        } else {
            return hs_r26CQjT;
        }
    };
    hs_a25urNI.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziFingerprintziType.hs_zdfOrdFingerprint);
    };
    hs_zdccompare25urNJ.evaluateOnce = function () {
        if (hs_a25urNI.notEvaluated) {
            return hs_a25urNI.hscall();
        } else {
            return hs_a25urNI;
        }
    };
    hs_a125urNK.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziFingerprintziType.hs_zdfOrdFingerprint);
    };
    hs_zdczl25urNL.evaluateOnce = function () {
        if (hs_a125urNK.notEvaluated) {
            return hs_a125urNK.hscall();
        } else {
            return hs_a125urNK;
        }
    };
    hs_a225urNM.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziFingerprintziType.hs_zdfOrdFingerprint);
    };
    hs_zdczgze25urNN.evaluateOnce = function () {
        if (hs_a225urNM.notEvaluated) {
            return hs_a225urNM.hscall();
        } else {
            return hs_a225urNM;
        }
    };
    hs_a325urNO.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziFingerprintziType.hs_zdfOrdFingerprint);
    };
    hs_zdczg25urNP.evaluateOnce = function () {
        if (hs_a325urNO.notEvaluated) {
            return hs_a325urNO.hscall();
        } else {
            return hs_a325urNO;
        }
    };
    hs_a425urNQ.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziFingerprintziType.hs_zdfOrdFingerprint);
    };
    hs_zdczlze25urNR.evaluateOnce = function () {
        if (hs_a425urNQ.notEvaluated) {
            return hs_a425urNQ.hscall();
        } else {
            return hs_a425urNQ;
        }
    };
    hs_a525urNS.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziFingerprintziType.hs_zdfOrdFingerprint);
    };
    hs_zdcmax25urNT.evaluateOnce = function () {
        if (hs_a525urNS.notEvaluated) {
            return hs_a525urNS.hscall();
        } else {
            return hs_a525urNS;
        }
    };
    hs_a625urNU.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziFingerprintziType.hs_zdfOrdFingerprint);
    };
    hs_zdcmin25urNV.evaluateOnce = function () {
        if (hs_a625urNU.notEvaluated) {
            return hs_a625urNU.hscall();
        } else {
            return hs_a625urNU;
        }
    };
    hs_a725urNW.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziFingerprintziType.hs_zdfEqFingerprint);
    };
    hs_zdczeze25urNX.evaluateOnce = function () {
        if (hs_a725urNW.notEvaluated) {
            return hs_a725urNW.hscall();
        } else {
            return hs_a725urNW;
        }
    };
    hs_a825urNY.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziFingerprintziType.hs_zdfEqFingerprint);
    };
    hs_zdczsze25urNZ.evaluateOnce = function () {
        if (hs_a825urNY.notEvaluated) {
            return hs_a825urNY.hscall();
        } else {
            return hs_a825urNY;
        }
    };
    this.hs_zdfEqTypeRepKey.data = [hs_a725urNW, hs_a825urNY];
    this.hs_zdfOrdTypeRepKey.data = [$hs.modules.DataziTypeable.hs_zdfEqTypeRepKey, hs_a25urNI, hs_a125urNK, hs_a225urNM, hs_a325urNO, hs_a425urNQ, hs_a525urNS, hs_a625urNU];
    this.hs_typeRepKey.evaluate = function (hs_ds26CQkh) {
        var hs_wild26CQkR = hs_ds26CQkh;
        if (hs_ds26CQkh.notEvaluated) {
            hs_wild26CQkR = hs_ds26CQkh.hscall();
        }
        var hs_f26CQkm = hs_wild26CQkR.data[0];
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_f26CQkm);
    };
    this.hs_TypeRepKey.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.DataziTypeable.hs_TypeRepKey.hscall(hs_eta1cW6l3);
    };
};
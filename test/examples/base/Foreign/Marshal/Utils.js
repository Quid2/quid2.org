
$hs.modules.ForeignziMarshalziUtils = new $hs.Module();
$hs.modules.ForeignziMarshalziUtils.dependencies = ["GHC.Types", "GHC.Unit", "GHC.Integer", "Data.Maybe", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.Classes", "GHC.Ptr", "Foreign.C.Types", "Foreign.Marshal.Alloc", "Foreign.Storable"];
$hs.modules.ForeignziMarshalziUtils.initBeforeDependencies = function () {
    this.hs_withMany = new $hs.Func(3);
    this.hs_maybePeek = new $hs.Func(2);
    this.hs_maybeWith = new $hs.Thunk();
    this.hs_maybeNew = new $hs.Thunk();
    this.hs_toBool = new $hs.Func(1);
    this.hs_fromBool = new $hs.Func(2);
    this.hs_with = new $hs.Func(3);
    this.hs_new = new $hs.Func(2);
    this.hs_copyBytes = new $hs.Func(3);
    this.hs_moveBytes = new $hs.Func(3);
    this.hs_withMany.notEvaluated = true;
    this.hs_withMany.evaluate = function (hs_ds26DmVW, hs_ds126DmVQ, hs_f26DmVS) {
        $hs.modules.ForeignziMarshalziUtils.loadDependencies();
        return this.evaluate(hs_ds26DmVW, hs_ds126DmVQ, hs_f26DmVS);
    };
    this.hs_maybePeek.notEvaluated = true;
    this.hs_maybePeek.evaluate = function (hs_peek26DmWa, hs_ptr26DmW8) {
        $hs.modules.ForeignziMarshalziUtils.loadDependencies();
        return this.evaluate(hs_peek26DmWa, hs_ptr26DmW8);
    };
    this.hs_maybeWith.evaluateOnce = function () {
        $hs.modules.ForeignziMarshalziUtils.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_maybeNew.evaluateOnce = function () {
        $hs.modules.ForeignziMarshalziUtils.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_toBool.notEvaluated = true;
    this.hs_toBool.evaluate = function (hs_zddNum26DmWm) {
        $hs.modules.ForeignziMarshalziUtils.loadDependencies();
        return this.evaluate(hs_zddNum26DmWm);
    };
    this.hs_fromBool.notEvaluated = true;
    this.hs_fromBool.evaluate = function (hs_zddNum26DmWy, hs_ds26DmWw) {
        $hs.modules.ForeignziMarshalziUtils.loadDependencies();
        return this.evaluate(hs_zddNum26DmWy, hs_ds26DmWw);
    };
    this.hs_with.notEvaluated = true;
    this.hs_with.evaluate = function (hs_zddStorable26DmWE, hs_val26DmWI, hs_f26DmWK) {
        $hs.modules.ForeignziMarshalziUtils.loadDependencies();
        return this.evaluate(hs_zddStorable26DmWE, hs_val26DmWI, hs_f26DmWK);
    };
    this.hs_new.notEvaluated = true;
    this.hs_new.evaluate = function (hs_zddStorable26DmWT, hs_val26DmWX) {
        $hs.modules.ForeignziMarshalziUtils.loadDependencies();
        return this.evaluate(hs_zddStorable26DmWT, hs_val26DmWX);
    };
    this.hs_copyBytes.notEvaluated = true;
    this.hs_copyBytes.evaluate = function (hs_dest26DmX4, hs_src26DmX7, hs_sizze26DmXa) {
        $hs.modules.ForeignziMarshalziUtils.loadDependencies();
        return this.evaluate(hs_dest26DmX4, hs_src26DmX7, hs_sizze26DmXa);
    };
    this.hs_moveBytes.notEvaluated = true;
    this.hs_moveBytes.evaluate = function (hs_dest26DmXy, hs_src26DmXB, hs_sizze26DmXE) {
        $hs.modules.ForeignziMarshalziUtils.loadDependencies();
        return this.evaluate(hs_dest26DmXy, hs_src26DmXB, hs_sizze26DmXE);
    };
};
$hs.modules.ForeignziMarshalziUtils.initAfterDependencies = function () {
    this.hs_withMany.notEvaluated = false;
    this.hs_maybePeek.notEvaluated = false;
    this.hs_toBool.notEvaluated = false;
    this.hs_fromBool.notEvaluated = false;
    this.hs_with.notEvaluated = false;
    this.hs_new.notEvaluated = false;
    this.hs_copyBytes.notEvaluated = false;
    this.hs_moveBytes.notEvaluated = false;
    this.hs_withMany.evaluate = function (hs_ds26DmVW, hs_ds126DmVQ, hs_f26DmVS) {
        var hs_wild26DmY0 = hs_ds126DmVQ;
        if (hs_ds126DmVQ.notEvaluated) {
            hs_wild26DmY0 = hs_ds126DmVQ.hscall();
        }
        switch (hs_wild26DmY0.tag) {
        case 1:
            return hs_f26DmVS.hscall($hs.modules.GHCziTypes.hs_ZMZN);
        case 2:
            var hs_x26DmVV = hs_wild26DmY0.data[0];
            var hs_xs26DmVZ = hs_wild26DmY0.data[1];
            var hs_sat26DmY1 = new $hs.Func(1);
            hs_sat26DmY1.evaluate = function (hs_xzq26DmW1) {
                var hs_sat26DmY2 = new $hs.Func(1);
                hs_sat26DmY2.evaluate = function (hs_xszq26DmW2) {
                    var hs_sat26DmY3 = new $hs.Data(2);
                    hs_sat26DmY3.data = [hs_xzq26DmW1, hs_xszq26DmW2];
                    return hs_f26DmVS.hscall(hs_sat26DmY3);
                };
                return $hs.modules.ForeignziMarshalziUtils.hs_withMany.hscall(hs_ds26DmVW, hs_xs26DmVZ, hs_sat26DmY2);
            };
            var hs_sat26DmXZ = new $hs.Thunk();
            hs_sat26DmXZ.evaluateOnce = function () {
                return hs_ds26DmVW.hscall(hs_x26DmVV);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DmXZ, hs_sat26DmY1);
        }
    };
    this.hs_maybePeek.evaluate = function (hs_peek26DmWa, hs_ptr26DmW8) {
        var hs_wild26DmY4 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziPtr.hs_zdfEqPtr, hs_ptr26DmW8, $hs.modules.GHCziPtr.hs_nullPtr);
        switch (hs_wild26DmY4.tag) {
        case 1:
            var hs_sat26DmY6 = new $hs.Func(1);
            hs_sat26DmY6.evaluate = function (hs_a26DmWd) {
                var hs_sat26DmY7 = new $hs.Data(2);
                hs_sat26DmY7.data = [hs_a26DmWd];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmY7);
            };
            var hs_sat26DmY5 = new $hs.Thunk();
            hs_sat26DmY5.evaluateOnce = function () {
                return hs_peek26DmWa.hscall(hs_ptr26DmW8);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmY5, hs_sat26DmY6);
        case 2:
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.DataziMaybe.hs_Nothing);
        }
    };
    this.hs_maybeWith.evaluateOnce = function () {
        var hs_sat26DmY8 = new $hs.Func(1);
        hs_sat26DmY8.evaluate = function (hs_ds26DmWh) {
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_ds26DmWh, $hs.modules.GHCziPtr.hs_nullPtr);
        };
        return $hs.modules.DataziMaybe.hs_maybe.hscall(hs_sat26DmY8);
    };
    this.hs_maybeNew.evaluateOnce = function () {
        var hs_sat26DmY9 = new $hs.Thunk();
        hs_sat26DmY9.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziPtr.hs_nullPtr);
        };
        return $hs.modules.DataziMaybe.hs_maybe.hscall(hs_sat26DmY9);
    };
    this.hs_toBool.evaluate = function (hs_zddNum26DmWm) {
        var hs_zddEq26DmWn = new $hs.Thunk();
        hs_zddEq26DmWn.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum26DmWm);
        };
        var hs_ds26DmWq = new $hs.Thunk();
        hs_ds26DmWq.evaluateOnce = function () {
            var hs_sat26DmYb = new $hs.Thunk();
            hs_sat26DmYb.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DmWm, hs_sat26DmYb);
        };
        var hs_sat26DmYa = new $hs.Func(1);
        hs_sat26DmYa.evaluate = function (hs_ds126DmWs) {
            return $hs.modules.GHCziClasses.hs_zsze.hscall(hs_zddEq26DmWn, hs_ds126DmWs, hs_ds26DmWq);
        };
        if (hs_sat26DmYa.notEvaluated) {
            return hs_sat26DmYa.hscall();
        } else {
            return hs_sat26DmYa;
        }
    };
    this.hs_fromBool.evaluate = function (hs_zddNum26DmWy, hs_ds26DmWw) {
        var hs_wild26DmYd = hs_ds26DmWw;
        if (hs_ds26DmWw.notEvaluated) {
            hs_wild26DmYd = hs_ds26DmWw.hscall();
        }
        switch (hs_wild26DmYd.tag) {
        case 1:
            var hs_sat26DmYe = new $hs.Thunk();
            hs_sat26DmYe.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DmWy, hs_sat26DmYe);
        case 2:
            var hs_sat26DmYc = new $hs.Thunk();
            hs_sat26DmYc.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DmWy, hs_sat26DmYc);
        }
    };
    this.hs_with.evaluate = function (hs_zddStorable26DmWE, hs_val26DmWI, hs_f26DmWK) {
        var hs_sat26DmYg = new $hs.Func(1);
        hs_sat26DmYg.evaluate = function (hs_ptr26DmWH) {
            var hs_sat26DmYi = new $hs.Thunk();
            hs_sat26DmYi.evaluateOnce = function () {
                var hs_sat26DmYk = new $hs.Func(1);
                hs_sat26DmYk.evaluate = function (hs_res26DmWN) {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_res26DmWN);
                };
                var hs_sat26DmYj = new $hs.Thunk();
                hs_sat26DmYj.evaluateOnce = function () {
                    return hs_f26DmWK.hscall(hs_ptr26DmWH);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmYj, hs_sat26DmYk);
            };
            var hs_sat26DmYh = new $hs.Thunk();
            hs_sat26DmYh.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_poke.hscall(hs_zddStorable26DmWE, hs_ptr26DmWH, hs_val26DmWI);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmYh, hs_sat26DmYi);
        };
        var hs_sat26DmYf = new $hs.Thunk();
        hs_sat26DmYf.evaluateOnce = function () {
            return $hs.modules.ForeignziMarshalziAlloc.hs_alloca.hscall(hs_zddStorable26DmWE);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DmYf, hs_sat26DmYg);
    };
    this.hs_new.evaluate = function (hs_zddStorable26DmWT, hs_val26DmWX) {
        var hs_sat26DmYm = new $hs.Func(1);
        hs_sat26DmYm.evaluate = function (hs_ptr26DmWW) {
            var hs_sat26DmYo = new $hs.Thunk();
            hs_sat26DmYo.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ptr26DmWW);
            };
            var hs_sat26DmYn = new $hs.Thunk();
            hs_sat26DmYn.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_poke.hscall(hs_zddStorable26DmWT, hs_ptr26DmWW, hs_val26DmWX);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmYn, hs_sat26DmYo);
        };
        var hs_sat26DmYl = new $hs.Thunk();
        hs_sat26DmYl.evaluateOnce = function () {
            return $hs.modules.ForeignziMarshalziAlloc.hs_malloc.hscall(hs_zddStorable26DmWT);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmYl, hs_sat26DmYm);
    };
    this.hs_copyBytes.evaluate = function (hs_dest26DmX4, hs_src26DmX7, hs_sizze26DmXa) {
        var hs_sat26DmYq = new $hs.Func(1);
        hs_sat26DmYq.evaluate = function (hs_ds26DmXt) {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        };
        var hs_sat26DmYp = new $hs.Thunk();
        hs_sat26DmYp.evaluateOnce = function () {
            var hs_ds26DmYt = hs_dest26DmX4;
            if (hs_dest26DmX4.notEvaluated) {
                hs_ds26DmYt = hs_dest26DmX4.hscall();
            }
            var hs_ds126DmXf = hs_ds26DmYt.data[0];
            var hs_ds226DmYs = hs_src26DmX7;
            if (hs_src26DmX7.notEvaluated) {
                hs_ds226DmYs = hs_src26DmX7.hscall();
            }
            var hs_ds326DmXg = hs_ds226DmYs.data[0];
            var hs_ds426DmYu = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_sizze26DmXa);
            var hs_ds526DmXh = hs_ds426DmYu.data[0];
            var hs_sat26DmYr = new $hs.Func(1);
            hs_sat26DmYr.evaluate = function (hs_ds626DmXi) {
                var hs_wild26DmYw = [hs_ds626DmXi, memcpy(hs_ds126DmXf, hs_ds326DmXg, hs_ds526DmXh)];
                var hs_ds726DmXn = hs_wild26DmYw[0];
                var hs_ds826DmXo = hs_wild26DmYw[1];
                var hs_sat26DmYv = new $hs.Data(1);
                hs_sat26DmYv.data = [hs_ds826DmXo];
                return [hs_ds726DmXn, hs_sat26DmYv];
            };
            if (hs_sat26DmYr.notEvaluated) {
                return hs_sat26DmYr.hscall();
            } else {
                return hs_sat26DmYr;
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmYp, hs_sat26DmYq);
    };
    this.hs_moveBytes.evaluate = function (hs_dest26DmXy, hs_src26DmXB, hs_sizze26DmXE) {
        var hs_sat26DmYy = new $hs.Func(1);
        hs_sat26DmYy.evaluate = function (hs_ds26DmXX) {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        };
        var hs_sat26DmYx = new $hs.Thunk();
        hs_sat26DmYx.evaluateOnce = function () {
            var hs_ds26DmYB = hs_dest26DmXy;
            if (hs_dest26DmXy.notEvaluated) {
                hs_ds26DmYB = hs_dest26DmXy.hscall();
            }
            var hs_ds126DmXJ = hs_ds26DmYB.data[0];
            var hs_ds226DmYA = hs_src26DmXB;
            if (hs_src26DmXB.notEvaluated) {
                hs_ds226DmYA = hs_src26DmXB.hscall();
            }
            var hs_ds326DmXK = hs_ds226DmYA.data[0];
            var hs_ds426DmYC = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_sizze26DmXE);
            var hs_ds526DmXL = hs_ds426DmYC.data[0];
            var hs_sat26DmYz = new $hs.Func(1);
            hs_sat26DmYz.evaluate = function (hs_ds626DmXM) {
                var hs_wild26DmYE = [hs_ds626DmXM, memmove(hs_ds126DmXJ, hs_ds326DmXK, hs_ds526DmXL)];
                var hs_ds726DmXR = hs_wild26DmYE[0];
                var hs_ds826DmXS = hs_wild26DmYE[1];
                var hs_sat26DmYD = new $hs.Data(1);
                hs_sat26DmYD.data = [hs_ds826DmXS];
                return [hs_ds726DmXR, hs_sat26DmYD];
            };
            if (hs_sat26DmYz.notEvaluated) {
                return hs_sat26DmYz.hscall();
            } else {
                return hs_sat26DmYz;
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmYx, hs_sat26DmYy);
    };
};
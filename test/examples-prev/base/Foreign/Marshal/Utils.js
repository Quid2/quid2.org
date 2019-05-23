
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
    this.hs_withMany.evaluate = function (hs_ds26DLDg, hs_ds126DLDa, hs_f26DLDc) {
        $hs.modules.ForeignziMarshalziUtils.loadDependencies();
        return this.evaluate(hs_ds26DLDg, hs_ds126DLDa, hs_f26DLDc);
    };
    this.hs_maybePeek.notEvaluated = true;
    this.hs_maybePeek.evaluate = function (hs_peek26DLDu, hs_ptr26DLDs) {
        $hs.modules.ForeignziMarshalziUtils.loadDependencies();
        return this.evaluate(hs_peek26DLDu, hs_ptr26DLDs);
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
    this.hs_toBool.evaluate = function (hs_zddNum26DLDG) {
        $hs.modules.ForeignziMarshalziUtils.loadDependencies();
        return this.evaluate(hs_zddNum26DLDG);
    };
    this.hs_fromBool.notEvaluated = true;
    this.hs_fromBool.evaluate = function (hs_zddNum26DLDS, hs_ds26DLDQ) {
        $hs.modules.ForeignziMarshalziUtils.loadDependencies();
        return this.evaluate(hs_zddNum26DLDS, hs_ds26DLDQ);
    };
    this.hs_with.notEvaluated = true;
    this.hs_with.evaluate = function (hs_zddStorable26DLDY, hs_val26DLE2, hs_f26DLE4) {
        $hs.modules.ForeignziMarshalziUtils.loadDependencies();
        return this.evaluate(hs_zddStorable26DLDY, hs_val26DLE2, hs_f26DLE4);
    };
    this.hs_new.notEvaluated = true;
    this.hs_new.evaluate = function (hs_zddStorable26DLEd, hs_val26DLEh) {
        $hs.modules.ForeignziMarshalziUtils.loadDependencies();
        return this.evaluate(hs_zddStorable26DLEd, hs_val26DLEh);
    };
    this.hs_copyBytes.notEvaluated = true;
    this.hs_copyBytes.evaluate = function (hs_dest26DLEo, hs_src26DLEr, hs_sizze26DLEu) {
        $hs.modules.ForeignziMarshalziUtils.loadDependencies();
        return this.evaluate(hs_dest26DLEo, hs_src26DLEr, hs_sizze26DLEu);
    };
    this.hs_moveBytes.notEvaluated = true;
    this.hs_moveBytes.evaluate = function (hs_dest26DLER, hs_src26DLEU, hs_sizze26DLEX) {
        $hs.modules.ForeignziMarshalziUtils.loadDependencies();
        return this.evaluate(hs_dest26DLER, hs_src26DLEU, hs_sizze26DLEX);
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
    this.hs_withMany.evaluate = function (hs_ds26DLDg, hs_ds126DLDa, hs_f26DLDc) {
        var hs_wild26DLFh = hs_ds126DLDa;
        if (hs_ds126DLDa.notEvaluated) {
            hs_wild26DLFh = hs_ds126DLDa.hscall();
        }
        switch (hs_wild26DLFh.tag) {
        case 1:
            return hs_f26DLDc.hscall($hs.modules.GHCziTypes.hs_ZMZN);
        case 2:
            var hs_x26DLDf = hs_wild26DLFh.data[0];
            var hs_xs26DLDj = hs_wild26DLFh.data[1];
            var hs_sat26DLFk = new $hs.Func(1);
            hs_sat26DLFk.evaluate = function (hs_xzq26DLDl) {
                var hs_sat26DLFj = new $hs.Func(1);
                hs_sat26DLFj.evaluate = function (hs_xszq26DLDm) {
                    var hs_sat26DLFi = new $hs.Data(2);
                    hs_sat26DLFi.data = [hs_xzq26DLDl, hs_xszq26DLDm];
                    return hs_f26DLDc.hscall(hs_sat26DLFi);
                };
                return $hs.modules.ForeignziMarshalziUtils.hs_withMany.hscall(hs_ds26DLDg, hs_xs26DLDj, hs_sat26DLFj);
            };
            var hs_sat26DLFl = new $hs.Thunk();
            hs_sat26DLFl.evaluateOnce = function () {
                return hs_ds26DLDg.hscall(hs_x26DLDf);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DLFl, hs_sat26DLFk);
        }
    };
    this.hs_maybePeek.evaluate = function (hs_peek26DLDu, hs_ptr26DLDs) {
        var hs_wild26DLFm = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziPtr.hs_zdfEqPtr, hs_ptr26DLDs, $hs.modules.GHCziPtr.hs_nullPtr);
        switch (hs_wild26DLFm.tag) {
        case 1:
            var hs_sat26DLFo = new $hs.Func(1);
            hs_sat26DLFo.evaluate = function (hs_a26DLDx) {
                var hs_sat26DLFn = new $hs.Data(2);
                hs_sat26DLFn.data = [hs_a26DLDx];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DLFn);
            };
            var hs_sat26DLFp = new $hs.Thunk();
            hs_sat26DLFp.evaluateOnce = function () {
                return hs_peek26DLDu.hscall(hs_ptr26DLDs);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DLFp, hs_sat26DLFo);
        case 2:
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.DataziMaybe.hs_Nothing);
        }
    };
    this.hs_maybeWith.evaluateOnce = function () {
        var hs_sat26DLFq = new $hs.Func(1);
        hs_sat26DLFq.evaluate = function (hs_ds26DLDB) {
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_ds26DLDB, $hs.modules.GHCziPtr.hs_nullPtr);
        };
        return $hs.modules.DataziMaybe.hs_maybe.hscall(hs_sat26DLFq);
    };
    this.hs_maybeNew.evaluateOnce = function () {
        var hs_sat26DLFr = new $hs.Thunk();
        hs_sat26DLFr.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziPtr.hs_nullPtr);
        };
        return $hs.modules.DataziMaybe.hs_maybe.hscall(hs_sat26DLFr);
    };
    this.hs_toBool.evaluate = function (hs_zddNum26DLDG) {
        var hs_zddEq26DLDH = new $hs.Thunk();
        hs_zddEq26DLDH.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum26DLDG);
        };
        var hs_ds26DLDK = new $hs.Thunk();
        hs_ds26DLDK.evaluateOnce = function () {
            var hs_sat26DLFs = new $hs.Thunk();
            hs_sat26DLFs.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DLDG, hs_sat26DLFs);
        };
        var hs_sat26DLFt = new $hs.Func(1);
        hs_sat26DLFt.evaluate = function (hs_ds126DLDM) {
            return $hs.modules.GHCziClasses.hs_zsze.hscall(hs_zddEq26DLDH, hs_ds126DLDM, hs_ds26DLDK);
        };
        if (hs_sat26DLFt.notEvaluated) {
            return hs_sat26DLFt.hscall();
        } else {
            return hs_sat26DLFt;
        }
    };
    this.hs_fromBool.evaluate = function (hs_zddNum26DLDS, hs_ds26DLDQ) {
        var hs_wild26DLFu = hs_ds26DLDQ;
        if (hs_ds26DLDQ.notEvaluated) {
            hs_wild26DLFu = hs_ds26DLDQ.hscall();
        }
        switch (hs_wild26DLFu.tag) {
        case 1:
            var hs_sat26DLFv = new $hs.Thunk();
            hs_sat26DLFv.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DLDS, hs_sat26DLFv);
        case 2:
            var hs_sat26DLFw = new $hs.Thunk();
            hs_sat26DLFw.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DLDS, hs_sat26DLFw);
        }
    };
    this.hs_with.evaluate = function (hs_zddStorable26DLDY, hs_val26DLE2, hs_f26DLE4) {
        var hs_sat26DLFB = new $hs.Func(1);
        hs_sat26DLFB.evaluate = function (hs_ptr26DLE1) {
            var hs_sat26DLFz = new $hs.Thunk();
            hs_sat26DLFz.evaluateOnce = function () {
                var hs_sat26DLFx = new $hs.Func(1);
                hs_sat26DLFx.evaluate = function (hs_res26DLE7) {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_res26DLE7);
                };
                var hs_sat26DLFy = new $hs.Thunk();
                hs_sat26DLFy.evaluateOnce = function () {
                    return hs_f26DLE4.hscall(hs_ptr26DLE1);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DLFy, hs_sat26DLFx);
            };
            var hs_sat26DLFA = new $hs.Thunk();
            hs_sat26DLFA.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_poke.hscall(hs_zddStorable26DLDY, hs_ptr26DLE1, hs_val26DLE2);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DLFA, hs_sat26DLFz);
        };
        var hs_sat26DLFC = new $hs.Thunk();
        hs_sat26DLFC.evaluateOnce = function () {
            return $hs.modules.ForeignziMarshalziAlloc.hs_alloca.hscall(hs_zddStorable26DLDY);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DLFC, hs_sat26DLFB);
    };
    this.hs_new.evaluate = function (hs_zddStorable26DLEd, hs_val26DLEh) {
        var hs_sat26DLFF = new $hs.Func(1);
        hs_sat26DLFF.evaluate = function (hs_ptr26DLEg) {
            var hs_sat26DLFD = new $hs.Thunk();
            hs_sat26DLFD.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ptr26DLEg);
            };
            var hs_sat26DLFE = new $hs.Thunk();
            hs_sat26DLFE.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_poke.hscall(hs_zddStorable26DLEd, hs_ptr26DLEg, hs_val26DLEh);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DLFE, hs_sat26DLFD);
        };
        var hs_sat26DLFG = new $hs.Thunk();
        hs_sat26DLFG.evaluateOnce = function () {
            return $hs.modules.ForeignziMarshalziAlloc.hs_malloc.hscall(hs_zddStorable26DLEd);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DLFG, hs_sat26DLFF);
    };
    this.hs_copyBytes.evaluate = function (hs_dest26DLEo, hs_src26DLEr, hs_sizze26DLEu) {
        var hs_sat26DLFM = new $hs.Func(1);
        hs_sat26DLFM.evaluate = function (hs_ds26DLFH) {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        };
        var hs_sat26DLFP = new $hs.Thunk();
        hs_sat26DLFP.evaluateOnce = function () {
            var hs_ds26DLFL = hs_dest26DLEo;
            if (hs_dest26DLEo.notEvaluated) {
                hs_ds26DLFL = hs_dest26DLEo.hscall();
            }
            var hs_ds126DLEz = hs_ds26DLFL.data[0];
            var hs_ds226DLFK = hs_src26DLEr;
            if (hs_src26DLEr.notEvaluated) {
                hs_ds226DLFK = hs_src26DLEr.hscall();
            }
            var hs_ds326DLEA = hs_ds226DLFK.data[0];
            var hs_ds426DLFJ = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_sizze26DLEu);
            var hs_ds526DLEB = hs_ds426DLFJ.data[0];
            var hs_sat26DLFO = new $hs.Func(1);
            hs_sat26DLFO.evaluate = function (hs_ds626DLEC) {
                var hs_wild26DLFI = [hs_ds626DLEC, memcpy(hs_ds126DLEz, hs_ds326DLEA, hs_ds526DLEB)];
                var hs_ds726DLEH = hs_wild26DLFI[0];
                var hs_ds826DLEI = hs_wild26DLFI[1];
                var hs_sat26DLFN = new $hs.Data(1);
                hs_sat26DLFN.data = [hs_ds826DLEI];
                return [hs_ds726DLEH, hs_sat26DLFN];
            };
            if (hs_sat26DLFO.notEvaluated) {
                return hs_sat26DLFO.hscall();
            } else {
                return hs_sat26DLFO;
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DLFP, hs_sat26DLFM);
    };
    this.hs_moveBytes.evaluate = function (hs_dest26DLER, hs_src26DLEU, hs_sizze26DLEX) {
        var hs_sat26DLFV = new $hs.Func(1);
        hs_sat26DLFV.evaluate = function (hs_ds26DLFQ) {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        };
        var hs_sat26DLFY = new $hs.Thunk();
        hs_sat26DLFY.evaluateOnce = function () {
            var hs_ds26DLFU = hs_dest26DLER;
            if (hs_dest26DLER.notEvaluated) {
                hs_ds26DLFU = hs_dest26DLER.hscall();
            }
            var hs_ds126DLF2 = hs_ds26DLFU.data[0];
            var hs_ds226DLFT = hs_src26DLEU;
            if (hs_src26DLEU.notEvaluated) {
                hs_ds226DLFT = hs_src26DLEU.hscall();
            }
            var hs_ds326DLF3 = hs_ds226DLFT.data[0];
            var hs_ds426DLFS = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_sizze26DLEX);
            var hs_ds526DLF4 = hs_ds426DLFS.data[0];
            var hs_sat26DLFX = new $hs.Func(1);
            hs_sat26DLFX.evaluate = function (hs_ds626DLF5) {
                var hs_wild26DLFR = [hs_ds626DLF5, memmove(hs_ds126DLF2, hs_ds326DLF3, hs_ds526DLF4)];
                var hs_ds726DLFa = hs_wild26DLFR[0];
                var hs_ds826DLFb = hs_wild26DLFR[1];
                var hs_sat26DLFW = new $hs.Data(1);
                hs_sat26DLFW.data = [hs_ds826DLFb];
                return [hs_ds726DLFa, hs_sat26DLFW];
            };
            if (hs_sat26DLFX.notEvaluated) {
                return hs_sat26DLFX.hscall();
            } else {
                return hs_sat26DLFX;
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DLFY, hs_sat26DLFV);
    };
};
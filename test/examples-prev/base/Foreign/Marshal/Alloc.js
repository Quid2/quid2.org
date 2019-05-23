
$hs.modules.ForeignziMarshalziAlloc = new $hs.Module();
$hs.modules.ForeignziMarshalziAlloc.dependencies = ["GHC.Unit", "Data.Maybe", "GHC.Base", "GHC.Real", "GHC.Err", "GHC.Classes", "GHC.IO.Exception", "GHC.Ptr", "Foreign.C.Types", "Foreign.Storable"];
$hs.modules.ForeignziMarshalziAlloc.initBeforeDependencies = function () {
    this.hs_allocaBytesAligned = new $hs.Func(3);
    this.hs_allocaBytes = new $hs.Func(2);
    this.hs_alloca = new $hs.Func(1);
    this.hs_finalizzerFree = new $hs.Data(1);
    this.hs_mallocBytes = new $hs.Func(1);
    this.hs_malloc = new $hs.Func(1);
    this.hs_realloc = new $hs.Func(2);
    this.hs_free = new $hs.Func(2);
    this.hs_reallocBytes = new $hs.Func(2);
    this.hs_allocaBytesAligned.notEvaluated = true;
    this.hs_allocaBytesAligned.evaluate = function (hs_ds26DL9p, hs_ds126DL9s, hs_action26DL9M) {
        $hs.modules.ForeignziMarshalziAlloc.loadDependencies();
        return this.evaluate(hs_ds26DL9p, hs_ds126DL9s, hs_action26DL9M);
    };
    this.hs_allocaBytes.notEvaluated = true;
    this.hs_allocaBytes.evaluate = function (hs_ds26DL9Z, hs_action26DLai) {
        $hs.modules.ForeignziMarshalziAlloc.loadDependencies();
        return this.evaluate(hs_ds26DL9Z, hs_action26DLai);
    };
    this.hs_alloca.notEvaluated = true;
    this.hs_alloca.evaluate = function (hs_zddStorable26DLau) {
        $hs.modules.ForeignziMarshalziAlloc.loadDependencies();
        return this.evaluate(hs_zddStorable26DLau);
    };
    this.hs_finalizzerFree.notEvaluated = true;
    this.hs_finalizzerFree.evaluate = function () {
        $hs.modules.ForeignziMarshalziAlloc.loadDependencies();
        return this;
    };
    this.hs_mallocBytes.notEvaluated = true;
    this.hs_mallocBytes.evaluate = function (hs_sizze26DLaz) {
        $hs.modules.ForeignziMarshalziAlloc.loadDependencies();
        return this.evaluate(hs_sizze26DLaz);
    };
    this.hs_malloc.notEvaluated = true;
    this.hs_malloc.evaluate = function (hs_zddStorable26DLaQ) {
        $hs.modules.ForeignziMarshalziAlloc.loadDependencies();
        return this.evaluate(hs_zddStorable26DLaQ);
    };
    this.hs_realloc.notEvaluated = true;
    this.hs_realloc.evaluate = function (hs_zddStorable26DLaY, hs_ptr26DLaV) {
        $hs.modules.ForeignziMarshalziAlloc.loadDependencies();
        return this.evaluate(hs_zddStorable26DLaY, hs_ptr26DLaV);
    };
    this.hs_free.notEvaluated = true;
    this.hs_free.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.ForeignziMarshalziAlloc.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_reallocBytes.notEvaluated = true;
    this.hs_reallocBytes.evaluate = function (hs_ptr26DLbJ, hs_ds26DLbD) {
        $hs.modules.ForeignziMarshalziAlloc.loadDependencies();
        return this.evaluate(hs_ptr26DLbJ, hs_ds26DLbD);
    };
};
$hs.modules.ForeignziMarshalziAlloc.initAfterDependencies = function () {
    this.hs_allocaBytesAligned.notEvaluated = false;
    this.hs_allocaBytes.notEvaluated = false;
    this.hs_alloca.notEvaluated = false;
    this.hs_finalizzerFree.notEvaluated = false;
    this.hs_finalizzerFree.evaluate = function () {
        return this;
    };
    this.hs_mallocBytes.notEvaluated = false;
    this.hs_malloc.notEvaluated = false;
    this.hs_realloc.notEvaluated = false;
    this.hs_free.notEvaluated = false;
    this.hs_reallocBytes.notEvaluated = false;
    var hs_failWhenNULL25tDDE = new $hs.Func(2);
    var hs_zdwccall25vmF1 = new $hs.Func(2);
    var hs_a25vmF8 = new $hs.Func(2);
    hs_failWhenNULL25tDDE.evaluate = function (hs_name26DL9i, hs_f26DL9e) {
        var hs_sat26DLcj = new $hs.Func(1);
        hs_sat26DLcj.evaluate = function (hs_addr26DL9g) {
            var hs_wild26DLcg = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziPtr.hs_zdfEqPtr, hs_addr26DL9g, $hs.modules.GHCziPtr.hs_nullPtr);
            switch (hs_wild26DLcg.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_addr26DL9g);
            case 2:
                var hs_sat26DLch = new $hs.Thunk();
                hs_sat26DLch.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("out of memory\x00");
                };
                var hs_sat26DLci = new $hs.Data(1);
                hs_sat26DLci.data = [$hs.modules.DataziMaybe.hs_Nothing, $hs.modules.GHCziIOziException.hs_ResourceExhausted, hs_name26DL9i, hs_sat26DLch, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing];
                return $hs.modules.GHCziIOziException.hs_ioError.hscall(hs_sat26DLci);
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_f26DL9e, hs_sat26DLcj);
    };
    this.hs_allocaBytesAligned.evaluate = function (hs_ds26DL9p, hs_ds126DL9s, hs_action26DL9M) {
        var hs_wild26DLco = hs_ds26DL9p;
        if (hs_ds26DL9p.notEvaluated) {
            hs_wild26DLco = hs_ds26DL9p.hscall();
        }
        var hs_sizze26DL9z = hs_wild26DLco.data[0];
        var hs_wild126DLcn = hs_ds126DL9s;
        if (hs_ds126DL9s.notEvaluated) {
            hs_wild126DLcn = hs_ds126DL9s.hscall();
        }
        var hs_align26DL9A = hs_wild126DLcn.data[0];
        var hs_sat26DLcr = new $hs.Func(1);
        hs_sat26DLcr.evaluate = function (hs_s026DL9B) {
            throw "primitive operation newAlignedPinnedByteArray#. Not implemeted yet.";
            var hs_s126DL9G = hs_wild226DLcm[0];
            var hs_mbarrzh26DL9F = hs_wild226DLcm[1];
            throw "primitive operation unsafeFreezeByteArray#. Not implemeted yet.";
            var hs_s226DL9O = hs_wild326DLcl[0];
            var hs_barrzh26DL9K = hs_wild326DLcl[1];
            throw "primitive operation byteArrayContents#. Not implemeted yet.";
            var hs_sat26DLcq = new $hs.Data(1);
            hs_sat26DLcq.data = [hs_sat26DLck];
            var hs_wild426DLcp = hs_action26DL9M.hscall(hs_sat26DLcq, hs_s226DL9O);
            var hs_s326DL9S = hs_wild426DLcp[0];
            var hs_r26DL9V = hs_wild426DLcp[1];
            throw "primitive operation touch#. Not implemeted yet.";
            return [hs_s426DL9U, hs_r26DL9V];
        };
        var hs_sat26DLcs = new $hs.Func(1);
        hs_sat26DLcs.evaluate = function (hs_tpl26DL9w) {
            if (hs_tpl26DL9w.notEvaluated) {
                return hs_tpl26DL9w.hscall();
            } else {
                return hs_tpl26DL9w;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DLcs, hs_sat26DLcr);
    };
    this.hs_allocaBytes.evaluate = function (hs_ds26DL9Z, hs_action26DLai) {
        var hs_wild26DLcw = hs_ds26DL9Z;
        if (hs_ds26DL9Z.notEvaluated) {
            hs_wild26DLcw = hs_ds26DL9Z.hscall();
        }
        var hs_sizze26DLa6 = hs_wild26DLcw.data[0];
        var hs_sat26DLcz = new $hs.Func(1);
        hs_sat26DLcz.evaluate = function (hs_s026DLa7) {
            throw "primitive operation newPinnedByteArray#. Not implemeted yet.";
            var hs_s126DLac = hs_wild126DLcv[0];
            var hs_mbarrzh26DLab = hs_wild126DLcv[1];
            throw "primitive operation unsafeFreezeByteArray#. Not implemeted yet.";
            var hs_s226DLak = hs_wild226DLcu[0];
            var hs_barrzh26DLag = hs_wild226DLcu[1];
            throw "primitive operation byteArrayContents#. Not implemeted yet.";
            var hs_sat26DLcy = new $hs.Data(1);
            hs_sat26DLcy.data = [hs_sat26DLct];
            var hs_wild326DLcx = hs_action26DLai.hscall(hs_sat26DLcy, hs_s226DLak);
            var hs_s326DLao = hs_wild326DLcx[0];
            var hs_r26DLar = hs_wild326DLcx[1];
            throw "primitive operation touch#. Not implemeted yet.";
            return [hs_s426DLaq, hs_r26DLar];
        };
        var hs_sat26DLcA = new $hs.Func(1);
        hs_sat26DLcA.evaluate = function (hs_tpl26DLa3) {
            if (hs_tpl26DLa3.notEvaluated) {
                return hs_tpl26DLa3.hscall();
            } else {
                return hs_tpl26DLa3;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DLcA, hs_sat26DLcz);
    };
    this.hs_alloca.evaluate = function (hs_zddStorable26DLau) {
        var hs_sat26DLcB = new $hs.Thunk();
        hs_sat26DLcB.evaluateOnce = function () {
            return $hs.modules.ForeignziStorable.hs_alignment.hscall(hs_zddStorable26DLau, $hs.modules.GHCziErr.hs_undefined);
        };
        var hs_sat26DLcC = new $hs.Thunk();
        hs_sat26DLcC.evaluateOnce = function () {
            return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26DLau, $hs.modules.GHCziErr.hs_undefined);
        };
        return $hs.modules.ForeignziMarshalziAlloc.hs_allocaBytesAligned.hscall(hs_sat26DLcC, hs_sat26DLcB);
    };
    this.hs_finalizzerFree.data = [$hs.alert("Unsupported literal: MachLabel")];
    this.hs_mallocBytes.evaluate = function (hs_sizze26DLaz) {
        var hs_sat26DLcH = new $hs.Thunk();
        hs_sat26DLcH.evaluateOnce = function () {
            var hs_ds26DLcE = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_sizze26DLaz);
            var hs_ds126DLaE = hs_ds26DLcE.data[0];
            var hs_sat26DLcG = new $hs.Func(1);
            hs_sat26DLcG.evaluate = function (hs_ds226DLaF) {
                var hs_wild26DLcD = [hs_ds226DLaF, malloc(hs_ds126DLaE)];
                var hs_ds326DLaK = hs_wild26DLcD[0];
                var hs_ds426DLaL = hs_wild26DLcD[1];
                var hs_sat26DLcF = new $hs.Data(1);
                hs_sat26DLcF.data = [hs_ds426DLaL];
                return [hs_ds326DLaK, hs_sat26DLcF];
            };
            if (hs_sat26DLcG.notEvaluated) {
                return hs_sat26DLcG.hscall();
            } else {
                return hs_sat26DLcG;
            }
        };
        var hs_sat26DLcI = new $hs.Thunk();
        hs_sat26DLcI.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("malloc\x00");
        };
        return hs_failWhenNULL25tDDE.hscall(hs_sat26DLcI, hs_sat26DLcH);
    };
    this.hs_malloc.evaluate = function (hs_zddStorable26DLaQ) {
        var hs_sat26DLcJ = new $hs.Thunk();
        hs_sat26DLcJ.evaluateOnce = function () {
            return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26DLaQ, $hs.modules.GHCziErr.hs_undefined);
        };
        return $hs.modules.ForeignziMarshalziAlloc.hs_mallocBytes.hscall(hs_sat26DLcJ);
    };
    this.hs_realloc.evaluate = function (hs_zddStorable26DLaY, hs_ptr26DLaV) {
        var hs_sat26DLcQ = new $hs.Thunk();
        hs_sat26DLcQ.evaluateOnce = function () {
            var hs_ds26DLcK = hs_ptr26DLaV;
            if (hs_ptr26DLaV.notEvaluated) {
                hs_ds26DLcK = hs_ptr26DLaV.hscall();
            }
            var hs_ds126DLb4 = hs_ds26DLcK.data[0];
            var hs_sat26DLcN = new $hs.Thunk();
            hs_sat26DLcN.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26DLaY, $hs.modules.GHCziErr.hs_undefined);
            };
            var hs_ds226DLcM = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_sat26DLcN);
            var hs_ds326DLb5 = hs_ds226DLcM.data[0];
            var hs_sat26DLcP = new $hs.Func(1);
            hs_sat26DLcP.evaluate = function (hs_ds426DLb6) {
                var hs_wild26DLcL = [hs_ds426DLb6, realloc(hs_ds126DLb4, hs_ds326DLb5)];
                var hs_ds526DLbb = hs_wild26DLcL[0];
                var hs_ds626DLbc = hs_wild26DLcL[1];
                var hs_sat26DLcO = new $hs.Data(1);
                hs_sat26DLcO.data = [hs_ds626DLbc];
                return [hs_ds526DLbb, hs_sat26DLcO];
            };
            if (hs_sat26DLcP.notEvaluated) {
                return hs_sat26DLcP.hscall();
            } else {
                return hs_sat26DLcP;
            }
        };
        var hs_sat26DLcR = new $hs.Thunk();
        hs_sat26DLcR.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("realloc\x00");
        };
        return hs_failWhenNULL25tDDE.hscall(hs_sat26DLcR, hs_sat26DLcQ);
    };
    hs_zdwccall25vmF1.evaluate = function (hs_ds26DLbk, hs_eta1cW6l3) {
        var hs_sat26DLcS = new $hs.Func(1);
        hs_sat26DLcS.evaluate = function (hs_eta1cW6l3) {
            return [hs_eta1cW6l3, free(hs_ds26DLbk)];
        };
        return hs_sat26DLcS.hscall(hs_eta1cW6l3);
    };
    hs_a25vmF8.evaluate = function (hs_ds26DLbr, hs_eta26DLbw) {
        var hs_ds126DLcU = hs_ds26DLbr;
        if (hs_ds26DLbr.notEvaluated) {
            hs_ds126DLcU = hs_ds26DLbr.hscall();
        }
        var hs_ds226DLbv = hs_ds126DLcU.data[0];
        var hs_wild26DLcT = [hs_eta26DLbw, free(hs_ds226DLbv)];
        var hs_ds326DLbA = hs_wild26DLcT[0];
        return [hs_ds326DLbA, $hs.modules.GHCziUnit.hs_Z0T];
    };
    this.hs_free.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a25vmF8.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_reallocBytes.evaluate = function (hs_ptr26DLbJ, hs_ds26DLbD) {
        var hs_wild26DLbM = hs_ds26DLbD;
        if (hs_ds26DLbD.notEvaluated) {
            hs_wild26DLbM = hs_ds26DLbD.hscall();
        }
        var hs_ds126DLbG = hs_wild26DLbM.data[0];
        var hs_ds226DLcY = hs_ds126DLbG;
        if (hs_ds126DLbG.notEvaluated) {
            hs_ds226DLcY = hs_ds126DLbG.hscall();
        }
        switch (hs_ds226DLcY) {
        case 0:
            var hs_sat26DLd5 = new $hs.Thunk();
            hs_sat26DLd5.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziPtr.hs_nullPtr);
            };
            var hs_sat26DLd7 = new $hs.Thunk();
            hs_sat26DLd7.evaluateOnce = function () {
                var hs_ds326DLd4 = hs_ptr26DLbJ;
                if (hs_ptr26DLbJ.notEvaluated) {
                    hs_ds326DLd4 = hs_ptr26DLbJ.hscall();
                }
                var hs_ds426DLc7 = hs_ds326DLd4.data[0];
                var hs_sat26DLd6 = new $hs.Func(1);
                hs_sat26DLd6.evaluate = function (hs_ds526DLc8) {
                    var hs_wild126DLd3 = [hs_ds526DLc8, free(hs_ds426DLc7)];
                    var hs_ds626DLcc = hs_wild126DLd3[0];
                    return [hs_ds626DLcc, $hs.modules.GHCziUnit.hs_Z0T];
                };
                if (hs_sat26DLd6.notEvaluated) {
                    return hs_sat26DLd6.hscall();
                } else {
                    return hs_sat26DLd6;
                }
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DLd7, hs_sat26DLd5);
        default:
            var hs_sat26DLd1 = new $hs.Thunk();
            hs_sat26DLd1.evaluateOnce = function () {
                var hs_ds326DLcX = hs_ptr26DLbJ;
                if (hs_ptr26DLbJ.notEvaluated) {
                    hs_ds326DLcX = hs_ptr26DLbJ.hscall();
                }
                var hs_ds426DLbR = hs_ds326DLcX.data[0];
                var hs_ds526DLcW = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_wild26DLbM);
                var hs_ds626DLbS = hs_ds526DLcW.data[0];
                var hs_sat26DLd0 = new $hs.Func(1);
                hs_sat26DLd0.evaluate = function (hs_ds726DLbT) {
                    var hs_wild126DLcV = [hs_ds726DLbT, realloc(hs_ds426DLbR, hs_ds626DLbS)];
                    var hs_ds826DLbY = hs_wild126DLcV[0];
                    var hs_ds926DLbZ = hs_wild126DLcV[1];
                    var hs_sat26DLcZ = new $hs.Data(1);
                    hs_sat26DLcZ.data = [hs_ds926DLbZ];
                    return [hs_ds826DLbY, hs_sat26DLcZ];
                };
                if (hs_sat26DLd0.notEvaluated) {
                    return hs_sat26DLd0.hscall();
                } else {
                    return hs_sat26DLd0;
                }
            };
            var hs_sat26DLd2 = new $hs.Thunk();
            hs_sat26DLd2.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("realloc\x00");
            };
            return hs_failWhenNULL25tDDE.hscall(hs_sat26DLd2, hs_sat26DLd1);
        }
    };
};
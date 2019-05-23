
$hs.modules.ForeignziMarshalziAlloc = new $hs.Module();
$hs.modules.ForeignziMarshalziAlloc.dependencies = ["GHC.CString", "GHC.Unit", "Data.Maybe", "GHC.Base", "GHC.Real", "GHC.Err", "GHC.Classes", "GHC.IO.Exception", "GHC.Ptr", "Foreign.C.Types", "Foreign.Storable"];
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
    this.hs_allocaBytesAligned.evaluate = function (hs_ds26DmrY, hs_ds126Dms1, hs_action26Dmsl) {
        $hs.modules.ForeignziMarshalziAlloc.loadDependencies();
        return this.evaluate(hs_ds26DmrY, hs_ds126Dms1, hs_action26Dmsl);
    };
    this.hs_allocaBytes.notEvaluated = true;
    this.hs_allocaBytes.evaluate = function (hs_ds26Dmsy, hs_action26DmsR) {
        $hs.modules.ForeignziMarshalziAlloc.loadDependencies();
        return this.evaluate(hs_ds26Dmsy, hs_action26DmsR);
    };
    this.hs_alloca.notEvaluated = true;
    this.hs_alloca.evaluate = function (hs_zddStorable26Dmt3) {
        $hs.modules.ForeignziMarshalziAlloc.loadDependencies();
        return this.evaluate(hs_zddStorable26Dmt3);
    };
    this.hs_finalizzerFree.notEvaluated = true;
    this.hs_finalizzerFree.evaluate = function () {
        $hs.modules.ForeignziMarshalziAlloc.loadDependencies();
        return this;
    };
    this.hs_mallocBytes.notEvaluated = true;
    this.hs_mallocBytes.evaluate = function (hs_sizze26Dmt8) {
        $hs.modules.ForeignziMarshalziAlloc.loadDependencies();
        return this.evaluate(hs_sizze26Dmt8);
    };
    this.hs_malloc.notEvaluated = true;
    this.hs_malloc.evaluate = function (hs_zddStorable26Dmtp) {
        $hs.modules.ForeignziMarshalziAlloc.loadDependencies();
        return this.evaluate(hs_zddStorable26Dmtp);
    };
    this.hs_realloc.notEvaluated = true;
    this.hs_realloc.evaluate = function (hs_zddStorable26Dmtx, hs_ptr26Dmtu) {
        $hs.modules.ForeignziMarshalziAlloc.loadDependencies();
        return this.evaluate(hs_zddStorable26Dmtx, hs_ptr26Dmtu);
    };
    this.hs_free.notEvaluated = true;
    this.hs_free.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.ForeignziMarshalziAlloc.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_reallocBytes.notEvaluated = true;
    this.hs_reallocBytes.evaluate = function (hs_ptr26Dmuh, hs_ds26Dmub) {
        $hs.modules.ForeignziMarshalziAlloc.loadDependencies();
        return this.evaluate(hs_ptr26Dmuh, hs_ds26Dmub);
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
    var hs_failWhenNULL25tm9N = new $hs.Func(2);
    var hs_zdwccall25uXXz = new $hs.Func(2);
    var hs_a25uXXG = new $hs.Func(2);
    hs_failWhenNULL25tm9N.evaluate = function (hs_name26DmrR, hs_f26DmrN) {
        var hs_sat26DmuO = new $hs.Func(1);
        hs_sat26DmuO.evaluate = function (hs_addr26DmrP) {
            var hs_wild26DmuQ = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziPtr.hs_zdfEqPtr, hs_addr26DmrP, $hs.modules.GHCziPtr.hs_nullPtr);
            switch (hs_wild26DmuQ.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_addr26DmrP);
            case 2:
                var hs_sat26DmuR = new $hs.Thunk();
                hs_sat26DmuR.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("out of memory\x00");
                };
                var hs_sat26DmuP = new $hs.Data(1);
                hs_sat26DmuP.data = [$hs.modules.DataziMaybe.hs_Nothing, $hs.modules.GHCziIOziException.hs_ResourceExhausted, hs_name26DmrR, hs_sat26DmuR, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing];
                return $hs.modules.GHCziIOziException.hs_ioError.hscall(hs_sat26DmuP);
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_f26DmrN, hs_sat26DmuO);
    };
    this.hs_allocaBytesAligned.evaluate = function (hs_ds26DmrY, hs_ds126Dms1, hs_action26Dmsl) {
        var hs_wild26DmuU = hs_ds26DmrY;
        if (hs_ds26DmrY.notEvaluated) {
            hs_wild26DmuU = hs_ds26DmrY.hscall();
        }
        var hs_sizze26Dms8 = hs_wild26DmuU.data[0];
        var hs_wild126DmuT = hs_ds126Dms1;
        if (hs_ds126Dms1.notEvaluated) {
            hs_wild126DmuT = hs_ds126Dms1.hscall();
        }
        var hs_align26Dms9 = hs_wild126DmuT.data[0];
        var hs_sat26DmuV = new $hs.Func(1);
        hs_sat26DmuV.evaluate = function (hs_s026Dmsa) {
            throw "primitive operation newAlignedPinnedByteArray#. Not implemeted yet.";
            var hs_s126Dmsf = hs_wild226DmuW[0];
            var hs_mbarrzh26Dmse = hs_wild226DmuW[1];
            throw "primitive operation unsafeFreezeByteArray#. Not implemeted yet.";
            var hs_s226Dmsn = hs_wild326DmuX[0];
            var hs_barrzh26Dmsj = hs_wild326DmuX[1];
            throw "primitive operation byteArrayContents#. Not implemeted yet.";
            var hs_sat26DmuZ = new $hs.Data(1);
            hs_sat26DmuZ.data = [hs_sat26DmuY];
            var hs_wild426Dmv0 = hs_action26Dmsl.hscall(hs_sat26DmuZ, hs_s226Dmsn);
            var hs_s326Dmsr = hs_wild426Dmv0[0];
            var hs_r26Dmsu = hs_wild426Dmv0[1];
            throw "primitive operation touch#. Not implemeted yet.";
            return [hs_s426Dmst, hs_r26Dmsu];
        };
        var hs_sat26DmuS = new $hs.Func(1);
        hs_sat26DmuS.evaluate = function (hs_tpl26Dms5) {
            if (hs_tpl26Dms5.notEvaluated) {
                return hs_tpl26Dms5.hscall();
            } else {
                return hs_tpl26Dms5;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DmuS, hs_sat26DmuV);
    };
    this.hs_allocaBytes.evaluate = function (hs_ds26Dmsy, hs_action26DmsR) {
        var hs_wild26Dmv2 = hs_ds26Dmsy;
        if (hs_ds26Dmsy.notEvaluated) {
            hs_wild26Dmv2 = hs_ds26Dmsy.hscall();
        }
        var hs_sizze26DmsF = hs_wild26Dmv2.data[0];
        var hs_sat26Dmv3 = new $hs.Func(1);
        hs_sat26Dmv3.evaluate = function (hs_s026DmsG) {
            throw "primitive operation newPinnedByteArray#. Not implemeted yet.";
            var hs_s126DmsL = hs_wild126Dmv4[0];
            var hs_mbarrzh26DmsK = hs_wild126Dmv4[1];
            throw "primitive operation unsafeFreezeByteArray#. Not implemeted yet.";
            var hs_s226DmsT = hs_wild226Dmv5[0];
            var hs_barrzh26DmsP = hs_wild226Dmv5[1];
            throw "primitive operation byteArrayContents#. Not implemeted yet.";
            var hs_sat26Dmv7 = new $hs.Data(1);
            hs_sat26Dmv7.data = [hs_sat26Dmv6];
            var hs_wild326Dmv8 = hs_action26DmsR.hscall(hs_sat26Dmv7, hs_s226DmsT);
            var hs_s326DmsX = hs_wild326Dmv8[0];
            var hs_r26Dmt0 = hs_wild326Dmv8[1];
            throw "primitive operation touch#. Not implemeted yet.";
            return [hs_s426DmsZ, hs_r26Dmt0];
        };
        var hs_sat26Dmv1 = new $hs.Func(1);
        hs_sat26Dmv1.evaluate = function (hs_tpl26DmsC) {
            if (hs_tpl26DmsC.notEvaluated) {
                return hs_tpl26DmsC.hscall();
            } else {
                return hs_tpl26DmsC;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dmv1, hs_sat26Dmv3);
    };
    this.hs_alloca.evaluate = function (hs_zddStorable26Dmt3) {
        var hs_sat26Dmva = new $hs.Thunk();
        hs_sat26Dmva.evaluateOnce = function () {
            return $hs.modules.ForeignziStorable.hs_alignment.hscall(hs_zddStorable26Dmt3, $hs.modules.GHCziErr.hs_undefined);
        };
        var hs_sat26Dmv9 = new $hs.Thunk();
        hs_sat26Dmv9.evaluateOnce = function () {
            return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26Dmt3, $hs.modules.GHCziErr.hs_undefined);
        };
        return $hs.modules.ForeignziMarshalziAlloc.hs_allocaBytesAligned.hscall(hs_sat26Dmv9, hs_sat26Dmva);
    };
    this.hs_finalizzerFree.data = [$hs.alert("Unsupported literal: MachLabel")];
    this.hs_mallocBytes.evaluate = function (hs_sizze26Dmt8) {
        var hs_sat26Dmvc = new $hs.Thunk();
        hs_sat26Dmvc.evaluateOnce = function () {
            var hs_ds26Dmve = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_sizze26Dmt8);
            var hs_ds126Dmtd = hs_ds26Dmve.data[0];
            var hs_sat26Dmvd = new $hs.Func(1);
            hs_sat26Dmvd.evaluate = function (hs_ds226Dmte) {
                var hs_wild26Dmvg = [hs_ds226Dmte, malloc(hs_ds126Dmtd)];
                var hs_ds326Dmtj = hs_wild26Dmvg[0];
                var hs_ds426Dmtk = hs_wild26Dmvg[1];
                var hs_sat26Dmvf = new $hs.Data(1);
                hs_sat26Dmvf.data = [hs_ds426Dmtk];
                return [hs_ds326Dmtj, hs_sat26Dmvf];
            };
            if (hs_sat26Dmvd.notEvaluated) {
                return hs_sat26Dmvd.hscall();
            } else {
                return hs_sat26Dmvd;
            }
        };
        var hs_sat26Dmvb = new $hs.Thunk();
        hs_sat26Dmvb.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("malloc\x00");
        };
        return hs_failWhenNULL25tm9N.hscall(hs_sat26Dmvb, hs_sat26Dmvc);
    };
    this.hs_malloc.evaluate = function (hs_zddStorable26Dmtp) {
        var hs_sat26Dmvh = new $hs.Thunk();
        hs_sat26Dmvh.evaluateOnce = function () {
            return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26Dmtp, $hs.modules.GHCziErr.hs_undefined);
        };
        return $hs.modules.ForeignziMarshalziAlloc.hs_mallocBytes.hscall(hs_sat26Dmvh);
    };
    this.hs_realloc.evaluate = function (hs_zddStorable26Dmtx, hs_ptr26Dmtu) {
        var hs_sat26Dmvj = new $hs.Thunk();
        hs_sat26Dmvj.evaluateOnce = function () {
            var hs_ds26Dmvl = hs_ptr26Dmtu;
            if (hs_ptr26Dmtu.notEvaluated) {
                hs_ds26Dmvl = hs_ptr26Dmtu.hscall();
            }
            var hs_ds126DmtD = hs_ds26Dmvl.data[0];
            var hs_sat26Dmvm = new $hs.Thunk();
            hs_sat26Dmvm.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26Dmtx, $hs.modules.GHCziErr.hs_undefined);
            };
            var hs_ds226Dmvn = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_sat26Dmvm);
            var hs_ds326DmtE = hs_ds226Dmvn.data[0];
            var hs_sat26Dmvk = new $hs.Func(1);
            hs_sat26Dmvk.evaluate = function (hs_ds426DmtF) {
                var hs_wild26Dmvp = [hs_ds426DmtF, realloc(hs_ds126DmtD, hs_ds326DmtE)];
                var hs_ds526DmtK = hs_wild26Dmvp[0];
                var hs_ds626DmtL = hs_wild26Dmvp[1];
                var hs_sat26Dmvo = new $hs.Data(1);
                hs_sat26Dmvo.data = [hs_ds626DmtL];
                return [hs_ds526DmtK, hs_sat26Dmvo];
            };
            if (hs_sat26Dmvk.notEvaluated) {
                return hs_sat26Dmvk.hscall();
            } else {
                return hs_sat26Dmvk;
            }
        };
        var hs_sat26Dmvi = new $hs.Thunk();
        hs_sat26Dmvi.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("realloc\x00");
        };
        return hs_failWhenNULL25tm9N.hscall(hs_sat26Dmvi, hs_sat26Dmvj);
    };
    hs_zdwccall25uXXz.evaluate = function (hs_ds26DmtT, hs_eta26DmtU) {
        return [hs_eta26DmtU, free(hs_ds26DmtT)];
    };
    hs_a25uXXG.evaluate = function (hs_ds26DmtZ, hs_eta26Dmu4) {
        var hs_ds126Dmvq = hs_ds26DmtZ;
        if (hs_ds26DmtZ.notEvaluated) {
            hs_ds126Dmvq = hs_ds26DmtZ.hscall();
        }
        var hs_ds226Dmu3 = hs_ds126Dmvq.data[0];
        var hs_wild26Dmvr = [hs_eta26Dmu4, free(hs_ds226Dmu3)];
        var hs_ds326Dmu8 = hs_wild26Dmvr[0];
        return [hs_ds326Dmu8, $hs.modules.GHCziUnit.hs_Z0T];
    };
    this.hs_free.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a25uXXG.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_reallocBytes.evaluate = function (hs_ptr26Dmuh, hs_ds26Dmub) {
        var hs_wild26Dmuk = hs_ds26Dmub;
        if (hs_ds26Dmub.notEvaluated) {
            hs_wild26Dmuk = hs_ds26Dmub.hscall();
        }
        var hs_ds126Dmue = hs_wild26Dmuk.data[0];
        var hs_ds226Dmvt = hs_ds126Dmue;
        if (hs_ds126Dmue.notEvaluated) {
            hs_ds226Dmvt = hs_ds126Dmue.hscall();
        }
        switch (hs_ds226Dmvt) {
        case 0:
            var hs_sat26Dmvu = new $hs.Thunk();
            hs_sat26Dmvu.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziPtr.hs_nullPtr);
            };
            var hs_sat26Dmvs = new $hs.Thunk();
            hs_sat26Dmvs.evaluateOnce = function () {
                var hs_ds326Dmvw = hs_ptr26Dmuh;
                if (hs_ptr26Dmuh.notEvaluated) {
                    hs_ds326Dmvw = hs_ptr26Dmuh.hscall();
                }
                var hs_ds426DmuF = hs_ds326Dmvw.data[0];
                var hs_sat26Dmvv = new $hs.Func(1);
                hs_sat26Dmvv.evaluate = function (hs_ds526DmuG) {
                    var hs_wild126Dmvx = [hs_ds526DmuG, free(hs_ds426DmuF)];
                    var hs_ds626DmuK = hs_wild126Dmvx[0];
                    return [hs_ds626DmuK, $hs.modules.GHCziUnit.hs_Z0T];
                };
                if (hs_sat26Dmvv.notEvaluated) {
                    return hs_sat26Dmvv.hscall();
                } else {
                    return hs_sat26Dmvv;
                }
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dmvs, hs_sat26Dmvu);
        default:
            var hs_sat26Dmvz = new $hs.Thunk();
            hs_sat26Dmvz.evaluateOnce = function () {
                var hs_ds326DmvB = hs_ptr26Dmuh;
                if (hs_ptr26Dmuh.notEvaluated) {
                    hs_ds326DmvB = hs_ptr26Dmuh.hscall();
                }
                var hs_ds426Dmup = hs_ds326DmvB.data[0];
                var hs_ds526DmvC = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_wild26Dmuk);
                var hs_ds626Dmuq = hs_ds526DmvC.data[0];
                var hs_sat26DmvA = new $hs.Func(1);
                hs_sat26DmvA.evaluate = function (hs_ds726Dmur) {
                    var hs_wild126DmvE = [hs_ds726Dmur, realloc(hs_ds426Dmup, hs_ds626Dmuq)];
                    var hs_ds826Dmuw = hs_wild126DmvE[0];
                    var hs_ds926Dmux = hs_wild126DmvE[1];
                    var hs_sat26DmvD = new $hs.Data(1);
                    hs_sat26DmvD.data = [hs_ds926Dmux];
                    return [hs_ds826Dmuw, hs_sat26DmvD];
                };
                if (hs_sat26DmvA.notEvaluated) {
                    return hs_sat26DmvA.hscall();
                } else {
                    return hs_sat26DmvA;
                }
            };
            var hs_sat26Dmvy = new $hs.Thunk();
            hs_sat26Dmvy.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("realloc\x00");
            };
            return hs_failWhenNULL25tm9N.hscall(hs_sat26Dmvy, hs_sat26Dmvz);
        }
    };
};
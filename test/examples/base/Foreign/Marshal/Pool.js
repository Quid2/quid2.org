
$hs.modules.ForeignziMarshalziPool = new $hs.Module();
$hs.modules.ForeignziMarshalziPool.dependencies = ["GHC.Types", "GHC.CString", "GHC.Unit", "Control.Monad", "Data.List", "GHC.Base", "GHC.Num", "GHC.Err", "GHC.Exception", "GHC.Classes", "GHC.IO", "GHC.IORef", "GHC.List", "GHC.Ptr", "Foreign.Marshal.Alloc", "Foreign.Marshal.Array", "Foreign.Marshal.Error", "Foreign.Storable"];
$hs.modules.ForeignziMarshalziPool.initBeforeDependencies = function () {
    this.hs_pooledReallocBytes = new $hs.Func(3);
    this.hs_pooledReallocArray = new $hs.Func(4);
    this.hs_pooledReallocArray0 = new $hs.Func(4);
    this.hs_pooledRealloc = new $hs.Func(3);
    this.hs_pooledMallocBytes = new $hs.Func(2);
    this.hs_pooledMallocArray = new $hs.Func(3);
    this.hs_pooledMallocArray0 = new $hs.Func(3);
    this.hs_pooledNewArray0 = new $hs.Func(4);
    this.hs_pooledNewArray = new $hs.Func(3);
    this.hs_pooledMalloc = new $hs.Func(2);
    this.hs_pooledNew = new $hs.Func(3);
    this.hs_newPool = new $hs.Thunk();
    this.hs_freePool = new $hs.Func(1);
    this.hs_withPool = new $hs.Func(1);
    this.hs_Pool = new $hs.Func(1);
    this.hs_pooledReallocBytes.notEvaluated = true;
    this.hs_pooledReallocBytes.evaluate = function (hs_ds26DmOA, hs_ptr26DmOt, hs_sizze26DmOE) {
        $hs.modules.ForeignziMarshalziPool.loadDependencies();
        return this.evaluate(hs_ds26DmOA, hs_ptr26DmOt, hs_sizze26DmOE);
    };
    this.hs_pooledReallocArray.notEvaluated = true;
    this.hs_pooledReallocArray.evaluate = function (hs_zddStorable26DmP1, hs_pool26DmOY, hs_ptr26DmOZ, hs_sizze26DmP0) {
        $hs.modules.ForeignziMarshalziPool.loadDependencies();
        return this.evaluate(hs_zddStorable26DmP1, hs_pool26DmOY, hs_ptr26DmOZ, hs_sizze26DmP0);
    };
    this.hs_pooledReallocArray0.notEvaluated = true;
    this.hs_pooledReallocArray0.evaluate = function (hs_zddStorable26DmPd, hs_pool26DmP8, hs_ptr26DmP9, hs_sizze26DmPa) {
        $hs.modules.ForeignziMarshalziPool.loadDependencies();
        return this.evaluate(hs_zddStorable26DmPd, hs_pool26DmP8, hs_ptr26DmP9, hs_sizze26DmPa);
    };
    this.hs_pooledRealloc.notEvaluated = true;
    this.hs_pooledRealloc.evaluate = function (hs_zddStorable26DmPl, hs_pool26DmPj, hs_ptr26DmPk) {
        $hs.modules.ForeignziMarshalziPool.loadDependencies();
        return this.evaluate(hs_zddStorable26DmPl, hs_pool26DmPj, hs_ptr26DmPk);
    };
    this.hs_pooledMallocBytes.notEvaluated = true;
    this.hs_pooledMallocBytes.evaluate = function (hs_ds26DmPs, hs_sizze26DmPp) {
        $hs.modules.ForeignziMarshalziPool.loadDependencies();
        return this.evaluate(hs_ds26DmPs, hs_sizze26DmPp);
    };
    this.hs_pooledMallocArray.notEvaluated = true;
    this.hs_pooledMallocArray.evaluate = function (hs_zddStorable26DmPI, hs_pool26DmPG, hs_sizze26DmPH) {
        $hs.modules.ForeignziMarshalziPool.loadDependencies();
        return this.evaluate(hs_zddStorable26DmPI, hs_pool26DmPG, hs_sizze26DmPH);
    };
    this.hs_pooledMallocArray0.notEvaluated = true;
    this.hs_pooledMallocArray0.evaluate = function (hs_zddStorable26DmPS, hs_pool26DmPO, hs_sizze26DmPP) {
        $hs.modules.ForeignziMarshalziPool.loadDependencies();
        return this.evaluate(hs_zddStorable26DmPS, hs_pool26DmPO, hs_sizze26DmPP);
    };
    this.hs_pooledNewArray0.notEvaluated = true;
    this.hs_pooledNewArray0.evaluate = function (hs_zddStorable26DmPZ, hs_pool26DmQ0, hs_marker26DmQ5, hs_vals26DmQ1) {
        $hs.modules.ForeignziMarshalziPool.loadDependencies();
        return this.evaluate(hs_zddStorable26DmPZ, hs_pool26DmQ0, hs_marker26DmQ5, hs_vals26DmQ1);
    };
    this.hs_pooledNewArray.notEvaluated = true;
    this.hs_pooledNewArray.evaluate = function (hs_zddStorable26DmQg, hs_pool26DmQd, hs_vals26DmQe) {
        $hs.modules.ForeignziMarshalziPool.loadDependencies();
        return this.evaluate(hs_zddStorable26DmQg, hs_pool26DmQd, hs_vals26DmQe);
    };
    this.hs_pooledMalloc.notEvaluated = true;
    this.hs_pooledMalloc.evaluate = function (hs_zddStorable26DmQs, hs_pool26DmQr) {
        $hs.modules.ForeignziMarshalziPool.loadDependencies();
        return this.evaluate(hs_zddStorable26DmQs, hs_pool26DmQr);
    };
    this.hs_pooledNew.notEvaluated = true;
    this.hs_pooledNew.evaluate = function (hs_zddStorable26DmQy, hs_pool26DmQx, hs_val26DmQD) {
        $hs.modules.ForeignziMarshalziPool.loadDependencies();
        return this.evaluate(hs_zddStorable26DmQy, hs_pool26DmQx, hs_val26DmQD);
    };
    this.hs_newPool.evaluateOnce = function () {
        $hs.modules.ForeignziMarshalziPool.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_freePool.notEvaluated = true;
    this.hs_freePool.evaluate = function (hs_ds26DmQM) {
        $hs.modules.ForeignziMarshalziPool.loadDependencies();
        return this.evaluate(hs_ds26DmQM);
    };
    this.hs_withPool.notEvaluated = true;
    this.hs_withPool.evaluate = function (hs_act26DmR3) {
        $hs.modules.ForeignziMarshalziPool.loadDependencies();
        return this.evaluate(hs_act26DmR3);
    };
    this.hs_Pool.notEvaluated = true;
    this.hs_Pool.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.ForeignziMarshalziPool.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
};
$hs.modules.ForeignziMarshalziPool.initAfterDependencies = function () {
    this.hs_pooledReallocBytes.notEvaluated = false;
    this.hs_pooledReallocArray.notEvaluated = false;
    this.hs_pooledReallocArray0.notEvaluated = false;
    this.hs_pooledRealloc.notEvaluated = false;
    this.hs_pooledMallocBytes.notEvaluated = false;
    this.hs_pooledMallocArray.notEvaluated = false;
    this.hs_pooledMallocArray0.notEvaluated = false;
    this.hs_pooledNewArray0.notEvaluated = false;
    this.hs_pooledNewArray.notEvaluated = false;
    this.hs_pooledMalloc.notEvaluated = false;
    this.hs_pooledNew.notEvaluated = false;
    this.hs_freePool.notEvaluated = false;
    this.hs_withPool.notEvaluated = false;
    this.hs_Pool.notEvaluated = false;
    var hs_sat26DmSe = new $hs.Thunk();
    var hs_sat26DmSf = new $hs.Func(1);
    this.hs_pooledReallocBytes.evaluate = function (hs_ds26DmOA, hs_ptr26DmOt, hs_sizze26DmOE) {
        var hs_cPtr26DmOu = new $hs.Thunk();
        hs_cPtr26DmOu.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_ptr26DmOt);
        };
        var hs_sat26DmRn = new $hs.Func(1);
        hs_sat26DmRn.evaluate = function (hs_ds126DmOS) {
            var hs_sat26DmRt = new $hs.Func(1);
            hs_sat26DmRt.evaluate = function (hs_newPtr26DmOJ) {
                var hs_sat26DmRv = new $hs.Func(1);
                hs_sat26DmRv.evaluate = function (hs_ptrs26DmOK) {
                    var hs_sat26DmRx = new $hs.Thunk();
                    hs_sat26DmRx.evaluateOnce = function () {
                        var hs_sat26DmRA = new $hs.Thunk();
                        hs_sat26DmRA.evaluateOnce = function () {
                            return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_newPtr26DmOJ);
                        };
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmRA);
                    };
                    var hs_sat26DmRw = new $hs.Thunk();
                    hs_sat26DmRw.evaluateOnce = function () {
                        var hs_sat26DmRz = new $hs.Thunk();
                        hs_sat26DmRz.evaluateOnce = function () {
                            return $hs.modules.DataziList.hs_delete.hscall($hs.modules.GHCziPtr.hs_zdfEqPtr, hs_cPtr26DmOu, hs_ptrs26DmOK);
                        };
                        var hs_sat26DmRy = new $hs.Data(2);
                        hs_sat26DmRy.data = [hs_newPtr26DmOJ, hs_sat26DmRz];
                        return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_ds26DmOA, hs_sat26DmRy);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmRw, hs_sat26DmRx);
                };
                var hs_sat26DmRu = new $hs.Thunk();
                hs_sat26DmRu.evaluateOnce = function () {
                    return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_ds26DmOA);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmRu, hs_sat26DmRv);
            };
            var hs_sat26DmRs = new $hs.Thunk();
            hs_sat26DmRs.evaluateOnce = function () {
                return $hs.modules.ForeignziMarshalziAlloc.hs_reallocBytes.hscall(hs_cPtr26DmOu, hs_sizze26DmOE);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmRs, hs_sat26DmRt);
        };
        var hs_sat26DmRm = new $hs.Thunk();
        hs_sat26DmRm.evaluateOnce = function () {
            var hs_sat26DmRp = new $hs.Thunk();
            hs_sat26DmRp.evaluateOnce = function () {
                return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_ds26DmOA);
            };
            var hs_sat26DmRq = new $hs.Func(1);
            hs_sat26DmRq.evaluate = function (hs_ds126DmOy) {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("pointer not in pool\x00");
            };
            var hs_sat26DmRo = new $hs.Thunk();
            hs_sat26DmRo.evaluateOnce = function () {
                var hs_sat26DmRr = new $hs.Thunk();
                hs_sat26DmRr.evaluateOnce = function () {
                    return $hs.modules.GHCziList.hs_elem.hscall($hs.modules.GHCziPtr.hs_zdfEqPtr, hs_cPtr26DmOu);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.GHCziClasses.hs_not, hs_sat26DmRr);
            };
            return $hs.modules.ForeignziMarshalziError.hs_throwIf.hscall(hs_sat26DmRo, hs_sat26DmRq, hs_sat26DmRp);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmRm, hs_sat26DmRn);
    };
    this.hs_pooledReallocArray.evaluate = function (hs_zddStorable26DmP1, hs_pool26DmOY, hs_ptr26DmOZ, hs_sizze26DmP0) {
        var hs_sat26DmRB = new $hs.Thunk();
        hs_sat26DmRB.evaluateOnce = function () {
            var hs_sat26DmRC = new $hs.Thunk();
            hs_sat26DmRC.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26DmP1, $hs.modules.GHCziErr.hs_undefined);
            };
            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sizze26DmP0, hs_sat26DmRC);
        };
        return $hs.modules.ForeignziMarshalziPool.hs_pooledReallocBytes.hscall(hs_pool26DmOY, hs_ptr26DmOZ, hs_sat26DmRB);
    };
    this.hs_pooledReallocArray0.evaluate = function (hs_zddStorable26DmPd, hs_pool26DmP8, hs_ptr26DmP9, hs_sizze26DmPa) {
        var hs_sat26DmRD = new $hs.Thunk();
        hs_sat26DmRD.evaluateOnce = function () {
            var hs_sat26DmRF = new $hs.Thunk();
            hs_sat26DmRF.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26DmPd, $hs.modules.GHCziErr.hs_undefined);
            };
            var hs_sat26DmRE = new $hs.Thunk();
            hs_sat26DmRE.evaluateOnce = function () {
                var hs_sat26DmRG = new $hs.Data(1);
                hs_sat26DmRG.data = [1];
                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sizze26DmPa, hs_sat26DmRG);
            };
            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DmRE, hs_sat26DmRF);
        };
        return $hs.modules.ForeignziMarshalziPool.hs_pooledReallocBytes.hscall(hs_pool26DmP8, hs_ptr26DmP9, hs_sat26DmRD);
    };
    this.hs_pooledRealloc.evaluate = function (hs_zddStorable26DmPl, hs_pool26DmPj, hs_ptr26DmPk) {
        var hs_sat26DmRH = new $hs.Thunk();
        hs_sat26DmRH.evaluateOnce = function () {
            return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26DmPl, $hs.modules.GHCziErr.hs_undefined);
        };
        return $hs.modules.ForeignziMarshalziPool.hs_pooledReallocBytes.hscall(hs_pool26DmPj, hs_ptr26DmPk, hs_sat26DmRH);
    };
    this.hs_pooledMallocBytes.evaluate = function (hs_ds26DmPs, hs_sizze26DmPp) {
        var hs_sat26DmRJ = new $hs.Func(1);
        hs_sat26DmRJ.evaluate = function (hs_ptr26DmPv) {
            var hs_sat26DmRL = new $hs.Func(1);
            hs_sat26DmRL.evaluate = function (hs_ptrs26DmPw) {
                var hs_sat26DmRN = new $hs.Thunk();
                hs_sat26DmRN.evaluateOnce = function () {
                    var hs_sat26DmRP = new $hs.Thunk();
                    hs_sat26DmRP.evaluateOnce = function () {
                        return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_ptr26DmPv);
                    };
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmRP);
                };
                var hs_sat26DmRM = new $hs.Thunk();
                hs_sat26DmRM.evaluateOnce = function () {
                    var hs_sat26DmRO = new $hs.Data(2);
                    hs_sat26DmRO.data = [hs_ptr26DmPv, hs_ptrs26DmPw];
                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_ds26DmPs, hs_sat26DmRO);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmRM, hs_sat26DmRN);
            };
            var hs_sat26DmRK = new $hs.Thunk();
            hs_sat26DmRK.evaluateOnce = function () {
                return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_ds26DmPs);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmRK, hs_sat26DmRL);
        };
        var hs_sat26DmRI = new $hs.Thunk();
        hs_sat26DmRI.evaluateOnce = function () {
            return $hs.modules.ForeignziMarshalziAlloc.hs_mallocBytes.hscall(hs_sizze26DmPp);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmRI, hs_sat26DmRJ);
    };
    this.hs_pooledMallocArray.evaluate = function (hs_zddStorable26DmPI, hs_pool26DmPG, hs_sizze26DmPH) {
        var hs_sat26DmRQ = new $hs.Thunk();
        hs_sat26DmRQ.evaluateOnce = function () {
            var hs_sat26DmRR = new $hs.Thunk();
            hs_sat26DmRR.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26DmPI, $hs.modules.GHCziErr.hs_undefined);
            };
            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sizze26DmPH, hs_sat26DmRR);
        };
        return $hs.modules.ForeignziMarshalziPool.hs_pooledMallocBytes.hscall(hs_pool26DmPG, hs_sat26DmRQ);
    };
    this.hs_pooledMallocArray0.evaluate = function (hs_zddStorable26DmPS, hs_pool26DmPO, hs_sizze26DmPP) {
        var hs_sat26DmRS = new $hs.Thunk();
        hs_sat26DmRS.evaluateOnce = function () {
            var hs_sat26DmRU = new $hs.Thunk();
            hs_sat26DmRU.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26DmPS, $hs.modules.GHCziErr.hs_undefined);
            };
            var hs_sat26DmRT = new $hs.Thunk();
            hs_sat26DmRT.evaluateOnce = function () {
                var hs_sat26DmRV = new $hs.Data(1);
                hs_sat26DmRV.data = [1];
                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sizze26DmPP, hs_sat26DmRV);
            };
            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DmRT, hs_sat26DmRU);
        };
        return $hs.modules.ForeignziMarshalziPool.hs_pooledMallocBytes.hscall(hs_pool26DmPO, hs_sat26DmRS);
    };
    this.hs_pooledNewArray0.evaluate = function (hs_zddStorable26DmPZ, hs_pool26DmQ0, hs_marker26DmQ5, hs_vals26DmQ1) {
        var hs_sat26DmRX = new $hs.Func(1);
        hs_sat26DmRX.evaluate = function (hs_ptr26DmQ6) {
            var hs_sat26DmS0 = new $hs.Thunk();
            hs_sat26DmS0.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ptr26DmQ6);
            };
            var hs_sat26DmRZ = new $hs.Thunk();
            hs_sat26DmRZ.evaluateOnce = function () {
                return $hs.modules.ForeignziMarshalziArray.hs_pokeArray0.hscall(hs_zddStorable26DmPZ, hs_marker26DmQ5, hs_ptr26DmQ6, hs_vals26DmQ1);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmRZ, hs_sat26DmS0);
        };
        var hs_sat26DmRW = new $hs.Thunk();
        hs_sat26DmRW.evaluateOnce = function () {
            var hs_sat26DmRY = new $hs.Thunk();
            hs_sat26DmRY.evaluateOnce = function () {
                return $hs.modules.GHCziList.hs_length.hscall(hs_vals26DmQ1);
            };
            return $hs.modules.ForeignziMarshalziPool.hs_pooledMallocArray0.hscall(hs_zddStorable26DmPZ, hs_pool26DmQ0, hs_sat26DmRY);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmRW, hs_sat26DmRX);
    };
    this.hs_pooledNewArray.evaluate = function (hs_zddStorable26DmQg, hs_pool26DmQd, hs_vals26DmQe) {
        var hs_sat26DmS2 = new $hs.Func(1);
        hs_sat26DmS2.evaluate = function (hs_ptr26DmQl) {
            var hs_sat26DmS7 = new $hs.Thunk();
            hs_sat26DmS7.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ptr26DmQl);
            };
            var hs_sat26DmS6 = new $hs.Thunk();
            hs_sat26DmS6.evaluateOnce = function () {
                return $hs.modules.ForeignziMarshalziArray.hs_pokeArray.hscall(hs_zddStorable26DmQg, hs_ptr26DmQl, hs_vals26DmQe);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmS6, hs_sat26DmS7);
        };
        var hs_sat26DmS1 = new $hs.Thunk();
        hs_sat26DmS1.evaluateOnce = function () {
            var hs_sat26DmS3 = new $hs.Thunk();
            hs_sat26DmS3.evaluateOnce = function () {
                var hs_sat26DmS5 = new $hs.Thunk();
                hs_sat26DmS5.evaluateOnce = function () {
                    return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26DmQg, $hs.modules.GHCziErr.hs_undefined);
                };
                var hs_sat26DmS4 = new $hs.Thunk();
                hs_sat26DmS4.evaluateOnce = function () {
                    return $hs.modules.GHCziList.hs_length.hscall(hs_vals26DmQe);
                };
                return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DmS4, hs_sat26DmS5);
            };
            return $hs.modules.ForeignziMarshalziPool.hs_pooledMallocBytes.hscall(hs_pool26DmQd, hs_sat26DmS3);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmS1, hs_sat26DmS2);
    };
    this.hs_pooledMalloc.evaluate = function (hs_zddStorable26DmQs, hs_pool26DmQr) {
        var hs_sat26DmS8 = new $hs.Thunk();
        hs_sat26DmS8.evaluateOnce = function () {
            return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26DmQs, $hs.modules.GHCziErr.hs_undefined);
        };
        return $hs.modules.ForeignziMarshalziPool.hs_pooledMallocBytes.hscall(hs_pool26DmQr, hs_sat26DmS8);
    };
    this.hs_pooledNew.evaluate = function (hs_zddStorable26DmQy, hs_pool26DmQx, hs_val26DmQD) {
        var hs_sat26DmSa = new $hs.Func(1);
        hs_sat26DmSa.evaluate = function (hs_ptr26DmQC) {
            var hs_sat26DmSd = new $hs.Thunk();
            hs_sat26DmSd.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ptr26DmQC);
            };
            var hs_sat26DmSc = new $hs.Thunk();
            hs_sat26DmSc.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_poke.hscall(hs_zddStorable26DmQy, hs_ptr26DmQC, hs_val26DmQD);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmSc, hs_sat26DmSd);
        };
        var hs_sat26DmS9 = new $hs.Thunk();
        hs_sat26DmS9.evaluateOnce = function () {
            var hs_sat26DmSb = new $hs.Thunk();
            hs_sat26DmSb.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26DmQy, $hs.modules.GHCziErr.hs_undefined);
            };
            return $hs.modules.ForeignziMarshalziPool.hs_pooledMallocBytes.hscall(hs_pool26DmQx, hs_sat26DmSb);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmS9, hs_sat26DmSa);
    };
    hs_sat26DmSe.evaluateOnce = function () {
        return $hs.modules.GHCziIORef.hs_newIORef.hscall($hs.modules.GHCziTypes.hs_ZMZN);
    };
    hs_sat26DmSf.evaluate = function (hs_tpl26DmQI) {
        if (hs_tpl26DmQI.notEvaluated) {
            return hs_tpl26DmQI.hscall();
        } else {
            return hs_tpl26DmQI;
        }
    };
    this.hs_newPool.evaluateOnce = function () {
        return $hs.modules.ControlziMonad.hs_liftM.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmSf, hs_sat26DmSe);
    };
    this.hs_freePool.evaluate = function (hs_ds26DmQM) {
        var hs_freeAll26DmQX = new $hs.Func(1);
        hs_freeAll26DmQX.evaluate = function (hs_ds126DmQQ) {
            var hs_wild26DmSi = hs_ds126DmQQ;
            if (hs_ds126DmQQ.notEvaluated) {
                hs_wild26DmSi = hs_ds126DmQQ.hscall();
            }
            switch (hs_wild26DmSi.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            case 2:
                var hs_p26DmQU = hs_wild26DmSi.data[0];
                var hs_ps26DmQW = hs_wild26DmSi.data[1];
                var hs_sat26DmSj = new $hs.Thunk();
                hs_sat26DmSj.evaluateOnce = function () {
                    return hs_freeAll26DmQX.hscall(hs_ps26DmQW);
                };
                var hs_sat26DmSh = new $hs.Thunk();
                hs_sat26DmSh.evaluateOnce = function () {
                    return $hs.modules.ForeignziMarshalziAlloc.hs_free.hscall(hs_p26DmQU);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmSh, hs_sat26DmSj);
            }
        };
        var hs_sat26DmSg = new $hs.Thunk();
        hs_sat26DmSg.evaluateOnce = function () {
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_ds26DmQM);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmSg, hs_freeAll26DmQX);
    };
    this.hs_withPool.evaluate = function (hs_act26DmR3) {
        var hs_sat26DmSk = new $hs.Func(1);
        hs_sat26DmSk.evaluate = function (hs_restore26DmR4) {
            var hs_sat26DmSl = new $hs.Func(1);
            hs_sat26DmSl.evaluate = function (hs_pool26DmR2) {
                var hs_sat26DmSn = new $hs.Func(1);
                hs_sat26DmSn.evaluate = function (hs_val26DmRh) {
                    var hs_sat26DmSu = new $hs.Thunk();
                    hs_sat26DmSu.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_val26DmRh);
                    };
                    var hs_sat26DmSt = new $hs.Thunk();
                    hs_sat26DmSt.evaluateOnce = function () {
                        return $hs.modules.ForeignziMarshalziPool.hs_freePool.hscall(hs_pool26DmR2);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmSt, hs_sat26DmSu);
                };
                var hs_sat26DmSm = new $hs.Thunk();
                hs_sat26DmSm.evaluateOnce = function () {
                    var hs_sat26DmSp = new $hs.Func(2);
                    hs_sat26DmSp.evaluate = function (hs_zddException26DmRa, hs_e26DmRb) {
                        var hs_sat26DmSs = new $hs.Thunk();
                        hs_sat26DmSs.evaluateOnce = function () {
                            return $hs.modules.GHCziException.hs_throw.hscall(hs_zddException26DmRa, hs_e26DmRb);
                        };
                        var hs_sat26DmSr = new $hs.Thunk();
                        hs_sat26DmSr.evaluateOnce = function () {
                            return $hs.modules.ForeignziMarshalziPool.hs_freePool.hscall(hs_pool26DmR2);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmSr, hs_sat26DmSs);
                    };
                    var hs_sat26DmSo = new $hs.Thunk();
                    hs_sat26DmSo.evaluateOnce = function () {
                        var hs_sat26DmSq = new $hs.Thunk();
                        hs_sat26DmSq.evaluateOnce = function () {
                            return hs_act26DmR3.hscall(hs_pool26DmR2);
                        };
                        return hs_restore26DmR4.hscall(hs_sat26DmSq);
                    };
                    return $hs.modules.GHCziIO.hs_catchAny.hscall(hs_sat26DmSo, hs_sat26DmSp);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmSm, hs_sat26DmSn);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.ForeignziMarshalziPool.hs_newPool, hs_sat26DmSl);
        };
        return $hs.modules.GHCziIO.hs_mask.hscall(hs_sat26DmSk);
    };
    this.hs_Pool.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.ForeignziMarshalziPool.hs_Pool.hscall(hs_eta1cW6l3);
    };
};
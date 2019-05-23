
$hs.modules.ForeignziMarshalziPool = new $hs.Module();
$hs.modules.ForeignziMarshalziPool.dependencies = ["GHC.Types", "GHC.Unit", "Control.Monad", "Data.List", "GHC.Base", "GHC.Num", "GHC.Err", "GHC.Exception", "GHC.Classes", "GHC.IO", "GHC.IORef", "GHC.List", "GHC.Ptr", "Foreign.Marshal.Alloc", "Foreign.Marshal.Array", "Foreign.Marshal.Error", "Foreign.Storable"];
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
    this.hs_pooledReallocBytes.evaluate = function (hs_ds26DLvW, hs_ptr26DLvQ, hs_sizze26DLw0) {
        $hs.modules.ForeignziMarshalziPool.loadDependencies();
        return this.evaluate(hs_ds26DLvW, hs_ptr26DLvQ, hs_sizze26DLw0);
    };
    this.hs_pooledReallocArray.notEvaluated = true;
    this.hs_pooledReallocArray.evaluate = function (hs_zddStorable26DLwm, hs_pool26DLwj, hs_ptr26DLwk, hs_sizze26DLwl) {
        $hs.modules.ForeignziMarshalziPool.loadDependencies();
        return this.evaluate(hs_zddStorable26DLwm, hs_pool26DLwj, hs_ptr26DLwk, hs_sizze26DLwl);
    };
    this.hs_pooledReallocArray0.notEvaluated = true;
    this.hs_pooledReallocArray0.evaluate = function (hs_zddStorable26DLwy, hs_pool26DLwt, hs_ptr26DLwu, hs_sizze26DLwv) {
        $hs.modules.ForeignziMarshalziPool.loadDependencies();
        return this.evaluate(hs_zddStorable26DLwy, hs_pool26DLwt, hs_ptr26DLwu, hs_sizze26DLwv);
    };
    this.hs_pooledRealloc.notEvaluated = true;
    this.hs_pooledRealloc.evaluate = function (hs_zddStorable26DLwG, hs_pool26DLwE, hs_ptr26DLwF) {
        $hs.modules.ForeignziMarshalziPool.loadDependencies();
        return this.evaluate(hs_zddStorable26DLwG, hs_pool26DLwE, hs_ptr26DLwF);
    };
    this.hs_pooledMallocBytes.notEvaluated = true;
    this.hs_pooledMallocBytes.evaluate = function (hs_ds26DLwN, hs_sizze26DLwK) {
        $hs.modules.ForeignziMarshalziPool.loadDependencies();
        return this.evaluate(hs_ds26DLwN, hs_sizze26DLwK);
    };
    this.hs_pooledMallocArray.notEvaluated = true;
    this.hs_pooledMallocArray.evaluate = function (hs_zddStorable26DLx3, hs_pool26DLx1, hs_sizze26DLx2) {
        $hs.modules.ForeignziMarshalziPool.loadDependencies();
        return this.evaluate(hs_zddStorable26DLx3, hs_pool26DLx1, hs_sizze26DLx2);
    };
    this.hs_pooledMallocArray0.notEvaluated = true;
    this.hs_pooledMallocArray0.evaluate = function (hs_zddStorable26DLxd, hs_pool26DLx9, hs_sizze26DLxa) {
        $hs.modules.ForeignziMarshalziPool.loadDependencies();
        return this.evaluate(hs_zddStorable26DLxd, hs_pool26DLx9, hs_sizze26DLxa);
    };
    this.hs_pooledNewArray0.notEvaluated = true;
    this.hs_pooledNewArray0.evaluate = function (hs_zddStorable26DLxk, hs_pool26DLxl, hs_marker26DLxq, hs_vals26DLxm) {
        $hs.modules.ForeignziMarshalziPool.loadDependencies();
        return this.evaluate(hs_zddStorable26DLxk, hs_pool26DLxl, hs_marker26DLxq, hs_vals26DLxm);
    };
    this.hs_pooledNewArray.notEvaluated = true;
    this.hs_pooledNewArray.evaluate = function (hs_zddStorable26DLxB, hs_pool26DLxy, hs_vals26DLxz) {
        $hs.modules.ForeignziMarshalziPool.loadDependencies();
        return this.evaluate(hs_zddStorable26DLxB, hs_pool26DLxy, hs_vals26DLxz);
    };
    this.hs_pooledMalloc.notEvaluated = true;
    this.hs_pooledMalloc.evaluate = function (hs_zddStorable26DLxN, hs_pool26DLxM) {
        $hs.modules.ForeignziMarshalziPool.loadDependencies();
        return this.evaluate(hs_zddStorable26DLxN, hs_pool26DLxM);
    };
    this.hs_pooledNew.notEvaluated = true;
    this.hs_pooledNew.evaluate = function (hs_zddStorable26DLxT, hs_pool26DLxS, hs_val26DLxY) {
        $hs.modules.ForeignziMarshalziPool.loadDependencies();
        return this.evaluate(hs_zddStorable26DLxT, hs_pool26DLxS, hs_val26DLxY);
    };
    this.hs_newPool.evaluateOnce = function () {
        $hs.modules.ForeignziMarshalziPool.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_freePool.notEvaluated = true;
    this.hs_freePool.evaluate = function (hs_ds26DLy7) {
        $hs.modules.ForeignziMarshalziPool.loadDependencies();
        return this.evaluate(hs_ds26DLy7);
    };
    this.hs_withPool.notEvaluated = true;
    this.hs_withPool.evaluate = function (hs_act26DLyp) {
        $hs.modules.ForeignziMarshalziPool.loadDependencies();
        return this.evaluate(hs_act26DLyp);
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
    var hs_sat26DLzC = new $hs.Thunk();
    var hs_sat26DLzD = new $hs.Func(1);
    this.hs_pooledReallocBytes.evaluate = function (hs_ds26DLvW, hs_ptr26DLvQ, hs_sizze26DLw0) {
        var hs_cPtr26DLvR = new $hs.Thunk();
        hs_cPtr26DLvR.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_ptr26DLvQ);
        };
        var hs_sat26DLyS = new $hs.Func(1);
        hs_sat26DLyS.evaluate = function (hs_ds126DLyI) {
            var hs_sat26DLyQ = new $hs.Func(1);
            hs_sat26DLyQ.evaluate = function (hs_newPtr26DLw5) {
                var hs_sat26DLyO = new $hs.Func(1);
                hs_sat26DLyO.evaluate = function (hs_ptrs26DLw6) {
                    var hs_sat26DLyK = new $hs.Thunk();
                    hs_sat26DLyK.evaluateOnce = function () {
                        var hs_sat26DLyJ = new $hs.Thunk();
                        hs_sat26DLyJ.evaluateOnce = function () {
                            return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_newPtr26DLw5);
                        };
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DLyJ);
                    };
                    var hs_sat26DLyN = new $hs.Thunk();
                    hs_sat26DLyN.evaluateOnce = function () {
                        var hs_sat26DLyL = new $hs.Thunk();
                        hs_sat26DLyL.evaluateOnce = function () {
                            return $hs.modules.DataziList.hs_delete.hscall($hs.modules.GHCziPtr.hs_zdfEqPtr, hs_cPtr26DLvR, hs_ptrs26DLw6);
                        };
                        var hs_sat26DLyM = new $hs.Data(2);
                        hs_sat26DLyM.data = [hs_newPtr26DLw5, hs_sat26DLyL];
                        return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_ds26DLvW, hs_sat26DLyM);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DLyN, hs_sat26DLyK);
                };
                var hs_sat26DLyP = new $hs.Thunk();
                hs_sat26DLyP.evaluateOnce = function () {
                    return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_ds26DLvW);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DLyP, hs_sat26DLyO);
            };
            var hs_sat26DLyR = new $hs.Thunk();
            hs_sat26DLyR.evaluateOnce = function () {
                return $hs.modules.ForeignziMarshalziAlloc.hs_reallocBytes.hscall(hs_cPtr26DLvR, hs_sizze26DLw0);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DLyR, hs_sat26DLyQ);
        };
        var hs_sat26DLyY = new $hs.Thunk();
        hs_sat26DLyY.evaluateOnce = function () {
            var hs_sat26DLyU = new $hs.Thunk();
            hs_sat26DLyU.evaluateOnce = function () {
                return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_ds26DLvW);
            };
            var hs_sat26DLyV = new $hs.Func(1);
            hs_sat26DLyV.evaluate = function (hs_ds126DLyT) {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("pointer not in pool\x00");
            };
            var hs_sat26DLyX = new $hs.Thunk();
            hs_sat26DLyX.evaluateOnce = function () {
                var hs_sat26DLyW = new $hs.Thunk();
                hs_sat26DLyW.evaluateOnce = function () {
                    return $hs.modules.GHCziList.hs_elem.hscall($hs.modules.GHCziPtr.hs_zdfEqPtr, hs_cPtr26DLvR);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.GHCziClasses.hs_not, hs_sat26DLyW);
            };
            return $hs.modules.ForeignziMarshalziError.hs_throwIf.hscall(hs_sat26DLyX, hs_sat26DLyV, hs_sat26DLyU);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DLyY, hs_sat26DLyS);
    };
    this.hs_pooledReallocArray.evaluate = function (hs_zddStorable26DLwm, hs_pool26DLwj, hs_ptr26DLwk, hs_sizze26DLwl) {
        var hs_sat26DLz0 = new $hs.Thunk();
        hs_sat26DLz0.evaluateOnce = function () {
            var hs_sat26DLyZ = new $hs.Thunk();
            hs_sat26DLyZ.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26DLwm, $hs.modules.GHCziErr.hs_undefined);
            };
            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sizze26DLwl, hs_sat26DLyZ);
        };
        return $hs.modules.ForeignziMarshalziPool.hs_pooledReallocBytes.hscall(hs_pool26DLwj, hs_ptr26DLwk, hs_sat26DLz0);
    };
    this.hs_pooledReallocArray0.evaluate = function (hs_zddStorable26DLwy, hs_pool26DLwt, hs_ptr26DLwu, hs_sizze26DLwv) {
        var hs_sat26DLz4 = new $hs.Thunk();
        hs_sat26DLz4.evaluateOnce = function () {
            var hs_sat26DLz1 = new $hs.Thunk();
            hs_sat26DLz1.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26DLwy, $hs.modules.GHCziErr.hs_undefined);
            };
            var hs_sat26DLz3 = new $hs.Thunk();
            hs_sat26DLz3.evaluateOnce = function () {
                var hs_sat26DLz2 = new $hs.Data(1);
                hs_sat26DLz2.data = [1];
                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sizze26DLwv, hs_sat26DLz2);
            };
            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DLz3, hs_sat26DLz1);
        };
        return $hs.modules.ForeignziMarshalziPool.hs_pooledReallocBytes.hscall(hs_pool26DLwt, hs_ptr26DLwu, hs_sat26DLz4);
    };
    this.hs_pooledRealloc.evaluate = function (hs_zddStorable26DLwG, hs_pool26DLwE, hs_ptr26DLwF) {
        var hs_sat26DLz5 = new $hs.Thunk();
        hs_sat26DLz5.evaluateOnce = function () {
            return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26DLwG, $hs.modules.GHCziErr.hs_undefined);
        };
        return $hs.modules.ForeignziMarshalziPool.hs_pooledReallocBytes.hscall(hs_pool26DLwE, hs_ptr26DLwF, hs_sat26DLz5);
    };
    this.hs_pooledMallocBytes.evaluate = function (hs_ds26DLwN, hs_sizze26DLwK) {
        var hs_sat26DLzc = new $hs.Func(1);
        hs_sat26DLzc.evaluate = function (hs_ptr26DLwQ) {
            var hs_sat26DLza = new $hs.Func(1);
            hs_sat26DLza.evaluate = function (hs_ptrs26DLwR) {
                var hs_sat26DLz7 = new $hs.Thunk();
                hs_sat26DLz7.evaluateOnce = function () {
                    var hs_sat26DLz6 = new $hs.Thunk();
                    hs_sat26DLz6.evaluateOnce = function () {
                        return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_ptr26DLwQ);
                    };
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DLz6);
                };
                var hs_sat26DLz9 = new $hs.Thunk();
                hs_sat26DLz9.evaluateOnce = function () {
                    var hs_sat26DLz8 = new $hs.Data(2);
                    hs_sat26DLz8.data = [hs_ptr26DLwQ, hs_ptrs26DLwR];
                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_ds26DLwN, hs_sat26DLz8);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DLz9, hs_sat26DLz7);
            };
            var hs_sat26DLzb = new $hs.Thunk();
            hs_sat26DLzb.evaluateOnce = function () {
                return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_ds26DLwN);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DLzb, hs_sat26DLza);
        };
        var hs_sat26DLzd = new $hs.Thunk();
        hs_sat26DLzd.evaluateOnce = function () {
            return $hs.modules.ForeignziMarshalziAlloc.hs_mallocBytes.hscall(hs_sizze26DLwK);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DLzd, hs_sat26DLzc);
    };
    this.hs_pooledMallocArray.evaluate = function (hs_zddStorable26DLx3, hs_pool26DLx1, hs_sizze26DLx2) {
        var hs_sat26DLzf = new $hs.Thunk();
        hs_sat26DLzf.evaluateOnce = function () {
            var hs_sat26DLze = new $hs.Thunk();
            hs_sat26DLze.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26DLx3, $hs.modules.GHCziErr.hs_undefined);
            };
            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sizze26DLx2, hs_sat26DLze);
        };
        return $hs.modules.ForeignziMarshalziPool.hs_pooledMallocBytes.hscall(hs_pool26DLx1, hs_sat26DLzf);
    };
    this.hs_pooledMallocArray0.evaluate = function (hs_zddStorable26DLxd, hs_pool26DLx9, hs_sizze26DLxa) {
        var hs_sat26DLzj = new $hs.Thunk();
        hs_sat26DLzj.evaluateOnce = function () {
            var hs_sat26DLzg = new $hs.Thunk();
            hs_sat26DLzg.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26DLxd, $hs.modules.GHCziErr.hs_undefined);
            };
            var hs_sat26DLzi = new $hs.Thunk();
            hs_sat26DLzi.evaluateOnce = function () {
                var hs_sat26DLzh = new $hs.Data(1);
                hs_sat26DLzh.data = [1];
                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sizze26DLxa, hs_sat26DLzh);
            };
            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DLzi, hs_sat26DLzg);
        };
        return $hs.modules.ForeignziMarshalziPool.hs_pooledMallocBytes.hscall(hs_pool26DLx9, hs_sat26DLzj);
    };
    this.hs_pooledNewArray0.evaluate = function (hs_zddStorable26DLxk, hs_pool26DLxl, hs_marker26DLxq, hs_vals26DLxm) {
        var hs_sat26DLzm = new $hs.Func(1);
        hs_sat26DLzm.evaluate = function (hs_ptr26DLxr) {
            var hs_sat26DLzk = new $hs.Thunk();
            hs_sat26DLzk.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ptr26DLxr);
            };
            var hs_sat26DLzl = new $hs.Thunk();
            hs_sat26DLzl.evaluateOnce = function () {
                return $hs.modules.ForeignziMarshalziArray.hs_pokeArray0.hscall(hs_zddStorable26DLxk, hs_marker26DLxq, hs_ptr26DLxr, hs_vals26DLxm);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DLzl, hs_sat26DLzk);
        };
        var hs_sat26DLzo = new $hs.Thunk();
        hs_sat26DLzo.evaluateOnce = function () {
            var hs_sat26DLzn = new $hs.Thunk();
            hs_sat26DLzn.evaluateOnce = function () {
                return $hs.modules.GHCziList.hs_length.hscall(hs_vals26DLxm);
            };
            return $hs.modules.ForeignziMarshalziPool.hs_pooledMallocArray0.hscall(hs_zddStorable26DLxk, hs_pool26DLxl, hs_sat26DLzn);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DLzo, hs_sat26DLzm);
    };
    this.hs_pooledNewArray.evaluate = function (hs_zddStorable26DLxB, hs_pool26DLxy, hs_vals26DLxz) {
        var hs_sat26DLzr = new $hs.Func(1);
        hs_sat26DLzr.evaluate = function (hs_ptr26DLxG) {
            var hs_sat26DLzp = new $hs.Thunk();
            hs_sat26DLzp.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ptr26DLxG);
            };
            var hs_sat26DLzq = new $hs.Thunk();
            hs_sat26DLzq.evaluateOnce = function () {
                return $hs.modules.ForeignziMarshalziArray.hs_pokeArray.hscall(hs_zddStorable26DLxB, hs_ptr26DLxG, hs_vals26DLxz);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DLzq, hs_sat26DLzp);
        };
        var hs_sat26DLzv = new $hs.Thunk();
        hs_sat26DLzv.evaluateOnce = function () {
            var hs_sat26DLzu = new $hs.Thunk();
            hs_sat26DLzu.evaluateOnce = function () {
                var hs_sat26DLzs = new $hs.Thunk();
                hs_sat26DLzs.evaluateOnce = function () {
                    return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26DLxB, $hs.modules.GHCziErr.hs_undefined);
                };
                var hs_sat26DLzt = new $hs.Thunk();
                hs_sat26DLzt.evaluateOnce = function () {
                    return $hs.modules.GHCziList.hs_length.hscall(hs_vals26DLxz);
                };
                return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DLzt, hs_sat26DLzs);
            };
            return $hs.modules.ForeignziMarshalziPool.hs_pooledMallocBytes.hscall(hs_pool26DLxy, hs_sat26DLzu);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DLzv, hs_sat26DLzr);
    };
    this.hs_pooledMalloc.evaluate = function (hs_zddStorable26DLxN, hs_pool26DLxM) {
        var hs_sat26DLzw = new $hs.Thunk();
        hs_sat26DLzw.evaluateOnce = function () {
            return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26DLxN, $hs.modules.GHCziErr.hs_undefined);
        };
        return $hs.modules.ForeignziMarshalziPool.hs_pooledMallocBytes.hscall(hs_pool26DLxM, hs_sat26DLzw);
    };
    this.hs_pooledNew.evaluate = function (hs_zddStorable26DLxT, hs_pool26DLxS, hs_val26DLxY) {
        var hs_sat26DLzz = new $hs.Func(1);
        hs_sat26DLzz.evaluate = function (hs_ptr26DLxX) {
            var hs_sat26DLzx = new $hs.Thunk();
            hs_sat26DLzx.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ptr26DLxX);
            };
            var hs_sat26DLzy = new $hs.Thunk();
            hs_sat26DLzy.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_poke.hscall(hs_zddStorable26DLxT, hs_ptr26DLxX, hs_val26DLxY);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DLzy, hs_sat26DLzx);
        };
        var hs_sat26DLzB = new $hs.Thunk();
        hs_sat26DLzB.evaluateOnce = function () {
            var hs_sat26DLzA = new $hs.Thunk();
            hs_sat26DLzA.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26DLxT, $hs.modules.GHCziErr.hs_undefined);
            };
            return $hs.modules.ForeignziMarshalziPool.hs_pooledMallocBytes.hscall(hs_pool26DLxS, hs_sat26DLzA);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DLzB, hs_sat26DLzz);
    };
    hs_sat26DLzC.evaluateOnce = function () {
        return $hs.modules.GHCziIORef.hs_newIORef.hscall($hs.modules.GHCziTypes.hs_ZMZN);
    };
    hs_sat26DLzD.evaluate = function (hs_tpl26DLy3) {
        if (hs_tpl26DLy3.notEvaluated) {
            return hs_tpl26DLy3.hscall();
        } else {
            return hs_tpl26DLy3;
        }
    };
    this.hs_newPool.evaluateOnce = function () {
        return $hs.modules.ControlziMonad.hs_liftM.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DLzD, hs_sat26DLzC);
    };
    this.hs_freePool.evaluate = function (hs_ds26DLy7) {
        var hs_freeAll26DLyi = new $hs.Func(1);
        hs_freeAll26DLyi.evaluate = function (hs_ds126DLyb) {
            var hs_wild26DLzE = hs_ds126DLyb;
            if (hs_ds126DLyb.notEvaluated) {
                hs_wild26DLzE = hs_ds126DLyb.hscall();
            }
            switch (hs_wild26DLzE.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            case 2:
                var hs_p26DLyf = hs_wild26DLzE.data[0];
                var hs_ps26DLyh = hs_wild26DLzE.data[1];
                var hs_sat26DLzF = new $hs.Thunk();
                hs_sat26DLzF.evaluateOnce = function () {
                    return hs_freeAll26DLyi.hscall(hs_ps26DLyh);
                };
                var hs_sat26DLzG = new $hs.Thunk();
                hs_sat26DLzG.evaluateOnce = function () {
                    return $hs.modules.ForeignziMarshalziAlloc.hs_free.hscall(hs_p26DLyf);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DLzG, hs_sat26DLzF);
            }
        };
        var hs_sat26DLzH = new $hs.Func(1);
        hs_sat26DLzH.evaluate = function (hs_eta1cW6l3) {
            return hs_freeAll26DLyi.hscall(hs_eta1cW6l3);
        };
        var hs_sat26DLzI = new $hs.Thunk();
        hs_sat26DLzI.evaluateOnce = function () {
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_ds26DLy7);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DLzI, hs_sat26DLzH);
    };
    this.hs_withPool.evaluate = function (hs_act26DLyp) {
        var hs_sat26DLzT = new $hs.Func(1);
        hs_sat26DLzT.evaluate = function (hs_restore26DLyq) {
            var hs_sat26DLzS = new $hs.Func(1);
            hs_sat26DLzS.evaluate = function (hs_pool26DLyo) {
                var hs_sat26DLzL = new $hs.Func(1);
                hs_sat26DLzL.evaluate = function (hs_val26DLyD) {
                    var hs_sat26DLzJ = new $hs.Thunk();
                    hs_sat26DLzJ.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_val26DLyD);
                    };
                    var hs_sat26DLzK = new $hs.Thunk();
                    hs_sat26DLzK.evaluateOnce = function () {
                        return $hs.modules.ForeignziMarshalziPool.hs_freePool.hscall(hs_pool26DLyo);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DLzK, hs_sat26DLzJ);
                };
                var hs_sat26DLzR = new $hs.Thunk();
                hs_sat26DLzR.evaluateOnce = function () {
                    var hs_sat26DLzO = new $hs.Func(2);
                    hs_sat26DLzO.evaluate = function (hs_zddException26DLyw, hs_e26DLyx) {
                        var hs_sat26DLzM = new $hs.Thunk();
                        hs_sat26DLzM.evaluateOnce = function () {
                            return $hs.modules.GHCziException.hs_throw.hscall(hs_zddException26DLyw, hs_e26DLyx);
                        };
                        var hs_sat26DLzN = new $hs.Thunk();
                        hs_sat26DLzN.evaluateOnce = function () {
                            return $hs.modules.ForeignziMarshalziPool.hs_freePool.hscall(hs_pool26DLyo);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DLzN, hs_sat26DLzM);
                    };
                    var hs_sat26DLzQ = new $hs.Thunk();
                    hs_sat26DLzQ.evaluateOnce = function () {
                        var hs_sat26DLzP = new $hs.Thunk();
                        hs_sat26DLzP.evaluateOnce = function () {
                            return hs_act26DLyp.hscall(hs_pool26DLyo);
                        };
                        return hs_restore26DLyq.hscall(hs_sat26DLzP);
                    };
                    return $hs.modules.GHCziIO.hs_catchAny.hscall(hs_sat26DLzQ, hs_sat26DLzO);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DLzR, hs_sat26DLzL);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.ForeignziMarshalziPool.hs_newPool, hs_sat26DLzS);
        };
        return $hs.modules.GHCziIO.hs_mask.hscall(hs_sat26DLzT);
    };
    this.hs_Pool.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.ForeignziMarshalziPool.hs_Pool.hscall(hs_eta1cW6l3);
    };
};
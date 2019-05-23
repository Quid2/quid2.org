
$hs.modules.ForeignziForeignPtrziImp = new $hs.Module();
$hs.modules.ForeignziForeignPtrziImp.dependencies = ["GHC.Base", "GHC.Num", "GHC.Err", "GHC.ForeignPtr", "Foreign.Storable"];
$hs.modules.ForeignziForeignPtrziImp.initBeforeDependencies = function () {
    this.hs_mallocForeignPtrArray = new $hs.Func(2);
    this.hs_mallocForeignPtrArray0 = new $hs.Func(2);
    this.hs_newForeignPtrEnv = new $hs.Func(3);
    this.hs_withForeignPtr = new $hs.Func(2);
    this.hs_newForeignPtr = new $hs.Func(2);
    this.hs_mallocForeignPtrArray.notEvaluated = true;
    this.hs_mallocForeignPtrArray.evaluate = function (hs_zddStorable26DvRZ, hs_sizze26DvRY) {
        $hs.modules.ForeignziForeignPtrziImp.loadDependencies();
        return this.evaluate(hs_zddStorable26DvRZ, hs_sizze26DvRY);
    };
    this.hs_mallocForeignPtrArray0.notEvaluated = true;
    this.hs_mallocForeignPtrArray0.evaluate = function (hs_zddStorable26DvS7, hs_sizze26DvS4) {
        $hs.modules.ForeignziForeignPtrziImp.loadDependencies();
        return this.evaluate(hs_zddStorable26DvS7, hs_sizze26DvS4);
    };
    this.hs_newForeignPtrEnv.notEvaluated = true;
    this.hs_newForeignPtrEnv.evaluate = function (hs_finalizzer26DvSg, hs_env26DvSh, hs_p26DvSd) {
        $hs.modules.ForeignziForeignPtrziImp.loadDependencies();
        return this.evaluate(hs_finalizzer26DvSg, hs_env26DvSh, hs_p26DvSd);
    };
    this.hs_withForeignPtr.notEvaluated = true;
    this.hs_withForeignPtr.evaluate = function (hs_fo26DvSo, hs_io26DvSp) {
        $hs.modules.ForeignziForeignPtrziImp.loadDependencies();
        return this.evaluate(hs_fo26DvSo, hs_io26DvSp);
    };
    this.hs_newForeignPtr.notEvaluated = true;
    this.hs_newForeignPtr.evaluate = function (hs_finalizzer26DvSC, hs_p26DvSz) {
        $hs.modules.ForeignziForeignPtrziImp.loadDependencies();
        return this.evaluate(hs_finalizzer26DvSC, hs_p26DvSz);
    };
};
$hs.modules.ForeignziForeignPtrziImp.initAfterDependencies = function () {
    this.hs_mallocForeignPtrArray.notEvaluated = false;
    this.hs_mallocForeignPtrArray0.notEvaluated = false;
    this.hs_newForeignPtrEnv.notEvaluated = false;
    this.hs_withForeignPtr.notEvaluated = false;
    this.hs_newForeignPtr.notEvaluated = false;
    this.hs_mallocForeignPtrArray.evaluate = function (hs_zddStorable26DvRZ, hs_sizze26DvRY) {
        var hs_sat26DvSH = new $hs.Thunk();
        hs_sat26DvSH.evaluateOnce = function () {
            var hs_sat26DvSI = new $hs.Thunk();
            hs_sat26DvSI.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26DvRZ, $hs.modules.GHCziErr.hs_undefined);
            };
            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sizze26DvRY, hs_sat26DvSI);
        };
        return $hs.modules.GHCziForeignPtr.hs_mallocForeignPtrBytes.hscall(hs_sat26DvSH);
    };
    this.hs_mallocForeignPtrArray0.evaluate = function (hs_zddStorable26DvS7, hs_sizze26DvS4) {
        var hs_sat26DvSJ = new $hs.Thunk();
        hs_sat26DvSJ.evaluateOnce = function () {
            var hs_sat26DvSL = new $hs.Thunk();
            hs_sat26DvSL.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26DvS7, $hs.modules.GHCziErr.hs_undefined);
            };
            var hs_sat26DvSK = new $hs.Thunk();
            hs_sat26DvSK.evaluateOnce = function () {
                var hs_sat26DvSM = new $hs.Data(1);
                hs_sat26DvSM.data = [1];
                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sizze26DvS4, hs_sat26DvSM);
            };
            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DvSK, hs_sat26DvSL);
        };
        return $hs.modules.GHCziForeignPtr.hs_mallocForeignPtrBytes.hscall(hs_sat26DvSJ);
    };
    this.hs_newForeignPtrEnv.evaluate = function (hs_finalizzer26DvSg, hs_env26DvSh, hs_p26DvSd) {
        var hs_sat26DvSO = new $hs.Func(1);
        hs_sat26DvSO.evaluate = function (hs_fObj26DvSi) {
            var hs_sat26DvSQ = new $hs.Thunk();
            hs_sat26DvSQ.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_fObj26DvSi);
            };
            var hs_sat26DvSP = new $hs.Thunk();
            hs_sat26DvSP.evaluateOnce = function () {
                return $hs.modules.GHCziForeignPtr.hs_addForeignPtrFinalizzerEnv.hscall(hs_finalizzer26DvSg, hs_env26DvSh, hs_fObj26DvSi);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DvSP, hs_sat26DvSQ);
        };
        var hs_sat26DvSN = new $hs.Thunk();
        hs_sat26DvSN.evaluateOnce = function () {
            return $hs.modules.GHCziForeignPtr.hs_newForeignPtrzu.hscall(hs_p26DvSd);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DvSN, hs_sat26DvSO);
    };
    this.hs_withForeignPtr.evaluate = function (hs_fo26DvSo, hs_io26DvSp) {
        var hs_sat26DvSS = new $hs.Func(1);
        hs_sat26DvSS.evaluate = function (hs_r26DvSu) {
            var hs_sat26DvSV = new $hs.Thunk();
            hs_sat26DvSV.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_r26DvSu);
            };
            var hs_sat26DvSU = new $hs.Thunk();
            hs_sat26DvSU.evaluateOnce = function () {
                return $hs.modules.GHCziForeignPtr.hs_touchForeignPtr.hscall(hs_fo26DvSo);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DvSU, hs_sat26DvSV);
        };
        var hs_sat26DvSR = new $hs.Thunk();
        hs_sat26DvSR.evaluateOnce = function () {
            var hs_sat26DvST = new $hs.Thunk();
            hs_sat26DvST.evaluateOnce = function () {
                return $hs.modules.GHCziForeignPtr.hs_unsafeForeignPtrToPtr.hscall(hs_fo26DvSo);
            };
            return hs_io26DvSp.hscall(hs_sat26DvST);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DvSR, hs_sat26DvSS);
    };
    this.hs_newForeignPtr.evaluate = function (hs_finalizzer26DvSC, hs_p26DvSz) {
        var hs_sat26DvSX = new $hs.Func(1);
        hs_sat26DvSX.evaluate = function (hs_fObj26DvSD) {
            var hs_sat26DvSZ = new $hs.Thunk();
            hs_sat26DvSZ.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_fObj26DvSD);
            };
            var hs_sat26DvSY = new $hs.Thunk();
            hs_sat26DvSY.evaluateOnce = function () {
                return $hs.modules.GHCziForeignPtr.hs_addForeignPtrFinalizzer.hscall(hs_finalizzer26DvSC, hs_fObj26DvSD);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DvSY, hs_sat26DvSZ);
        };
        var hs_sat26DvSW = new $hs.Thunk();
        hs_sat26DvSW.evaluateOnce = function () {
            return $hs.modules.GHCziForeignPtr.hs_newForeignPtrzu.hscall(hs_p26DvSz);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DvSW, hs_sat26DvSX);
    };
};
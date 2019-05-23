
$hs.modules.ForeignziForeignPtr = new $hs.Module();
$hs.modules.ForeignziForeignPtr.dependencies = ["GHC.Base", "GHC.Num", "GHC.Err", "GHC.ForeignPtr", "Foreign.Storable"];
$hs.modules.ForeignziForeignPtr.initBeforeDependencies = function () {
    this.hs_mallocForeignPtrArray = new $hs.Func(2);
    this.hs_mallocForeignPtrArray0 = new $hs.Func(2);
    this.hs_newForeignPtrEnv = new $hs.Func(3);
    this.hs_withForeignPtr = new $hs.Func(2);
    this.hs_newForeignPtr = new $hs.Func(2);
    this.hs_mallocForeignPtrArray.notEvaluated = true;
    this.hs_mallocForeignPtrArray.evaluate = function (hs_zddStorable26DL4x, hs_sizze26DL4w) {
        $hs.modules.ForeignziForeignPtr.loadDependencies();
        return this.evaluate(hs_zddStorable26DL4x, hs_sizze26DL4w);
    };
    this.hs_mallocForeignPtrArray0.notEvaluated = true;
    this.hs_mallocForeignPtrArray0.evaluate = function (hs_zddStorable26DL4F, hs_sizze26DL4C) {
        $hs.modules.ForeignziForeignPtr.loadDependencies();
        return this.evaluate(hs_zddStorable26DL4F, hs_sizze26DL4C);
    };
    this.hs_newForeignPtrEnv.notEvaluated = true;
    this.hs_newForeignPtrEnv.evaluate = function (hs_finalizzer26DL4O, hs_env26DL4P, hs_p26DL4L) {
        $hs.modules.ForeignziForeignPtr.loadDependencies();
        return this.evaluate(hs_finalizzer26DL4O, hs_env26DL4P, hs_p26DL4L);
    };
    this.hs_withForeignPtr.notEvaluated = true;
    this.hs_withForeignPtr.evaluate = function (hs_fo26DL4W, hs_io26DL4X) {
        $hs.modules.ForeignziForeignPtr.loadDependencies();
        return this.evaluate(hs_fo26DL4W, hs_io26DL4X);
    };
    this.hs_newForeignPtr.notEvaluated = true;
    this.hs_newForeignPtr.evaluate = function (hs_finalizzer26DL5a, hs_p26DL57) {
        $hs.modules.ForeignziForeignPtr.loadDependencies();
        return this.evaluate(hs_finalizzer26DL5a, hs_p26DL57);
    };
};
$hs.modules.ForeignziForeignPtr.initAfterDependencies = function () {
    this.hs_mallocForeignPtrArray.notEvaluated = false;
    this.hs_mallocForeignPtrArray0.notEvaluated = false;
    this.hs_newForeignPtrEnv.notEvaluated = false;
    this.hs_withForeignPtr.notEvaluated = false;
    this.hs_newForeignPtr.notEvaluated = false;
    this.hs_mallocForeignPtrArray.evaluate = function (hs_zddStorable26DL4x, hs_sizze26DL4w) {
        var hs_sat26DL5g = new $hs.Thunk();
        hs_sat26DL5g.evaluateOnce = function () {
            var hs_sat26DL5f = new $hs.Thunk();
            hs_sat26DL5f.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26DL4x, $hs.modules.GHCziErr.hs_undefined);
            };
            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sizze26DL4w, hs_sat26DL5f);
        };
        return $hs.modules.GHCziForeignPtr.hs_mallocForeignPtrBytes.hscall(hs_sat26DL5g);
    };
    this.hs_mallocForeignPtrArray0.evaluate = function (hs_zddStorable26DL4F, hs_sizze26DL4C) {
        var hs_sat26DL5k = new $hs.Thunk();
        hs_sat26DL5k.evaluateOnce = function () {
            var hs_sat26DL5h = new $hs.Thunk();
            hs_sat26DL5h.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26DL4F, $hs.modules.GHCziErr.hs_undefined);
            };
            var hs_sat26DL5j = new $hs.Thunk();
            hs_sat26DL5j.evaluateOnce = function () {
                var hs_sat26DL5i = new $hs.Data(1);
                hs_sat26DL5i.data = [1];
                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sizze26DL4C, hs_sat26DL5i);
            };
            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DL5j, hs_sat26DL5h);
        };
        return $hs.modules.GHCziForeignPtr.hs_mallocForeignPtrBytes.hscall(hs_sat26DL5k);
    };
    this.hs_newForeignPtrEnv.evaluate = function (hs_finalizzer26DL4O, hs_env26DL4P, hs_p26DL4L) {
        var hs_sat26DL5n = new $hs.Func(1);
        hs_sat26DL5n.evaluate = function (hs_fObj26DL4Q) {
            var hs_sat26DL5l = new $hs.Thunk();
            hs_sat26DL5l.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_fObj26DL4Q);
            };
            var hs_sat26DL5m = new $hs.Thunk();
            hs_sat26DL5m.evaluateOnce = function () {
                return $hs.modules.GHCziForeignPtr.hs_addForeignPtrFinalizzerEnv.hscall(hs_finalizzer26DL4O, hs_env26DL4P, hs_fObj26DL4Q);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DL5m, hs_sat26DL5l);
        };
        var hs_sat26DL5o = new $hs.Thunk();
        hs_sat26DL5o.evaluateOnce = function () {
            return $hs.modules.GHCziForeignPtr.hs_newForeignPtrzu.hscall(hs_p26DL4L);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DL5o, hs_sat26DL5n);
    };
    this.hs_withForeignPtr.evaluate = function (hs_fo26DL4W, hs_io26DL4X) {
        var hs_sat26DL5r = new $hs.Func(1);
        hs_sat26DL5r.evaluate = function (hs_r26DL52) {
            var hs_sat26DL5p = new $hs.Thunk();
            hs_sat26DL5p.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_r26DL52);
            };
            var hs_sat26DL5q = new $hs.Thunk();
            hs_sat26DL5q.evaluateOnce = function () {
                return $hs.modules.GHCziForeignPtr.hs_touchForeignPtr.hscall(hs_fo26DL4W);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DL5q, hs_sat26DL5p);
        };
        var hs_sat26DL5t = new $hs.Thunk();
        hs_sat26DL5t.evaluateOnce = function () {
            var hs_sat26DL5s = new $hs.Thunk();
            hs_sat26DL5s.evaluateOnce = function () {
                return $hs.modules.GHCziForeignPtr.hs_unsafeForeignPtrToPtr.hscall(hs_fo26DL4W);
            };
            return hs_io26DL4X.hscall(hs_sat26DL5s);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DL5t, hs_sat26DL5r);
    };
    this.hs_newForeignPtr.evaluate = function (hs_finalizzer26DL5a, hs_p26DL57) {
        var hs_sat26DL5w = new $hs.Func(1);
        hs_sat26DL5w.evaluate = function (hs_fObj26DL5b) {
            var hs_sat26DL5u = new $hs.Thunk();
            hs_sat26DL5u.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_fObj26DL5b);
            };
            var hs_sat26DL5v = new $hs.Thunk();
            hs_sat26DL5v.evaluateOnce = function () {
                return $hs.modules.GHCziForeignPtr.hs_addForeignPtrFinalizzer.hscall(hs_finalizzer26DL5a, hs_fObj26DL5b);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DL5v, hs_sat26DL5u);
        };
        var hs_sat26DL5x = new $hs.Thunk();
        hs_sat26DL5x.evaluateOnce = function () {
            return $hs.modules.GHCziForeignPtr.hs_newForeignPtrzu.hscall(hs_p26DL57);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DL5x, hs_sat26DL5w);
    };
};
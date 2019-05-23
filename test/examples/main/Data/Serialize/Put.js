
$hs.modules.DataziSerializzeziPut = new $hs.Module();
$hs.modules.DataziSerializzeziPut.dependencies = ["Data.Sequence", "Data.IntMap", "Data.IntSet", "Data.Map", "Data.Set", "Data.Array.Base", "GHC.Unit", "GHC.Integer", "GHC.Base", "GHC.Num", "GHC.Word", "Control.Applicative", "Data.Monoid", "Data.Serialize.Builder"];
$hs.modules.DataziSerializzeziPut.initBeforeDependencies = function () {
    this.hs_zdWPairS = new $hs.Func(2);
    this.hs_flush = new $hs.Thunk();
    this.hs_putBuilder = new $hs.Func(1);
    this.hs_putByteString = new $hs.Thunk();
    this.hs_putLazzyByteString = new $hs.Thunk();
    this.hs_putWord16be = new $hs.Thunk();
    this.hs_putWord16host = new $hs.Thunk();
    this.hs_putWord16le = new $hs.Thunk();
    this.hs_putWord32be = new $hs.Thunk();
    this.hs_putWord32host = new $hs.Thunk();
    this.hs_putWord32le = new $hs.Thunk();
    this.hs_putWord64be = new $hs.Thunk();
    this.hs_putWord64host = new $hs.Thunk();
    this.hs_putWord64le = new $hs.Thunk();
    this.hs_putWord8 = new $hs.Thunk();
    this.hs_putWordhost = new $hs.Thunk();
    this.hs_runPutM = new $hs.Func(1);
    this.hs_runPutMLazzy = new $hs.Func(1);
    this.hs_unPut = new $hs.Func(1);
    this.hs_runPutLazzy = new $hs.Thunk();
    this.hs_runPut = new $hs.Thunk();
    this.hs_execPut = new $hs.Thunk();
    this.hs_zdfFunctorPutM = new $hs.Data(1);
    this.hs_zdfMonadPutM = new $hs.Data(1);
    this.hs_zdfApplicativePutM = new $hs.Data(1);
    this.hs_putTwoOf = new $hs.Func(3);
    this.hs_putSeqOf = new $hs.Func(1);
    this.hs_putMaybeOf = new $hs.Func(2);
    this.hs_putListOf = new $hs.Func(1);
    this.hs_putTreeOf = new $hs.Func(2);
    this.hs_putSetOf = new $hs.Func(1);
    this.hs_putMapOf = new $hs.Func(3);
    this.hs_putIntSetOf = new $hs.Func(1);
    this.hs_putIntMapOf = new $hs.Func(2);
    this.hs_putIArrayOf = new $hs.Func(5);
    this.hs_putEitherOf = new $hs.Func(3);
    this.hs_PairS = new $hs.Func(2);
    this.hs_Put = new $hs.Func(1);
    this.hs_zdWPairS.notEvaluated = true;
    this.hs_zdWPairS.evaluate = function (hs_tpl26zy91, hs_tpl26zy8Z) {
        $hs.modules.DataziSerializzeziPut.loadDependencies();
        return this.evaluate(hs_tpl26zy91, hs_tpl26zy8Z);
    };
    this.hs_flush.evaluateOnce = function () {
        $hs.modules.DataziSerializzeziPut.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_putBuilder.notEvaluated = true;
    this.hs_putBuilder.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.DataziSerializzeziPut.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_putByteString.evaluateOnce = function () {
        $hs.modules.DataziSerializzeziPut.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_putLazzyByteString.evaluateOnce = function () {
        $hs.modules.DataziSerializzeziPut.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_putWord16be.evaluateOnce = function () {
        $hs.modules.DataziSerializzeziPut.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_putWord16host.evaluateOnce = function () {
        $hs.modules.DataziSerializzeziPut.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_putWord16le.evaluateOnce = function () {
        $hs.modules.DataziSerializzeziPut.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_putWord32be.evaluateOnce = function () {
        $hs.modules.DataziSerializzeziPut.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_putWord32host.evaluateOnce = function () {
        $hs.modules.DataziSerializzeziPut.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_putWord32le.evaluateOnce = function () {
        $hs.modules.DataziSerializzeziPut.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_putWord64be.evaluateOnce = function () {
        $hs.modules.DataziSerializzeziPut.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_putWord64host.evaluateOnce = function () {
        $hs.modules.DataziSerializzeziPut.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_putWord64le.evaluateOnce = function () {
        $hs.modules.DataziSerializzeziPut.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_putWord8.evaluateOnce = function () {
        $hs.modules.DataziSerializzeziPut.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_putWordhost.evaluateOnce = function () {
        $hs.modules.DataziSerializzeziPut.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_runPutM.notEvaluated = true;
    this.hs_runPutM.evaluate = function (hs_eta26zy9o) {
        $hs.modules.DataziSerializzeziPut.loadDependencies();
        return this.evaluate(hs_eta26zy9o);
    };
    this.hs_runPutMLazzy.notEvaluated = true;
    this.hs_runPutMLazzy.evaluate = function (hs_eta26zy9w) {
        $hs.modules.DataziSerializzeziPut.loadDependencies();
        return this.evaluate(hs_eta26zy9w);
    };
    this.hs_unPut.notEvaluated = true;
    this.hs_unPut.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.DataziSerializzeziPut.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_runPutLazzy.evaluateOnce = function () {
        $hs.modules.DataziSerializzeziPut.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_runPut.evaluateOnce = function () {
        $hs.modules.DataziSerializzeziPut.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_execPut.evaluateOnce = function () {
        $hs.modules.DataziSerializzeziPut.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfFunctorPutM.notEvaluated = true;
    this.hs_zdfFunctorPutM.evaluate = function () {
        $hs.modules.DataziSerializzeziPut.loadDependencies();
        return this;
    };
    this.hs_zdfMonadPutM.notEvaluated = true;
    this.hs_zdfMonadPutM.evaluate = function () {
        $hs.modules.DataziSerializzeziPut.loadDependencies();
        return this;
    };
    this.hs_zdfApplicativePutM.notEvaluated = true;
    this.hs_zdfApplicativePutM.evaluate = function () {
        $hs.modules.DataziSerializzeziPut.loadDependencies();
        return this;
    };
    this.hs_putTwoOf.notEvaluated = true;
    this.hs_putTwoOf.evaluate = function (hs_eta26zybP, hs_eta126zybS, hs_eta226zybK) {
        $hs.modules.DataziSerializzeziPut.loadDependencies();
        return this.evaluate(hs_eta26zybP, hs_eta126zybS, hs_eta226zybK);
    };
    this.hs_putSeqOf.notEvaluated = true;
    this.hs_putSeqOf.evaluate = function (hs_eta26zycc) {
        $hs.modules.DataziSerializzeziPut.loadDependencies();
        return this.evaluate(hs_eta26zycc);
    };
    this.hs_putMaybeOf.notEvaluated = true;
    this.hs_putMaybeOf.evaluate = function (hs_eta26zycv, hs_eta126zycm) {
        $hs.modules.DataziSerializzeziPut.loadDependencies();
        return this.evaluate(hs_eta26zycv, hs_eta126zycm);
    };
    this.hs_putListOf.notEvaluated = true;
    this.hs_putListOf.evaluate = function (hs_eta26zycP) {
        $hs.modules.DataziSerializzeziPut.loadDependencies();
        return this.evaluate(hs_eta26zycP);
    };
    this.hs_putTreeOf.notEvaluated = true;
    this.hs_putTreeOf.evaluate = function (hs_eta26zyd4, hs_eta126zycZ) {
        $hs.modules.DataziSerializzeziPut.loadDependencies();
        return this.evaluate(hs_eta26zyd4, hs_eta126zycZ);
    };
    this.hs_putSetOf.notEvaluated = true;
    this.hs_putSetOf.evaluate = function (hs_eta26zydx) {
        $hs.modules.DataziSerializzeziPut.loadDependencies();
        return this.evaluate(hs_eta26zydx);
    };
    this.hs_putMapOf.notEvaluated = true;
    this.hs_putMapOf.evaluate = function (hs_zddOrd26zyea, hs_eta26zydX, hs_eta126zye0) {
        $hs.modules.DataziSerializzeziPut.loadDependencies();
        return this.evaluate(hs_zddOrd26zyea, hs_eta26zydX, hs_eta126zye0);
    };
    this.hs_putIntSetOf.notEvaluated = true;
    this.hs_putIntSetOf.evaluate = function (hs_pix26zyec) {
        $hs.modules.DataziSerializzeziPut.loadDependencies();
        return this.evaluate(hs_pix26zyec);
    };
    this.hs_putIntMapOf.notEvaluated = true;
    this.hs_putIntMapOf.evaluate = function (hs_eta26zyeB, hs_eta126zyeE) {
        $hs.modules.DataziSerializzeziPut.loadDependencies();
        return this.evaluate(hs_eta26zyeB, hs_eta126zyeE);
    };
    this.hs_putIArrayOf.notEvaluated = true;
    this.hs_putIArrayOf.evaluate = function (hs_zddIx26zyeU, hs_zddIArray26zyeT, hs_eta26zyf0, hs_eta126zyfm, hs_eta226zyeV) {
        $hs.modules.DataziSerializzeziPut.loadDependencies();
        return this.evaluate(hs_zddIx26zyeU, hs_zddIArray26zyeT, hs_eta26zyf0, hs_eta126zyfm, hs_eta226zyeV);
    };
    this.hs_putEitherOf.notEvaluated = true;
    this.hs_putEitherOf.evaluate = function (hs_eta26zyfG, hs_eta126zyfN, hs_eta226zyfz) {
        $hs.modules.DataziSerializzeziPut.loadDependencies();
        return this.evaluate(hs_eta26zyfG, hs_eta126zyfN, hs_eta226zyfz);
    };
    this.hs_PairS.notEvaluated = true;
    this.hs_PairS.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.DataziSerializzeziPut.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_Put.notEvaluated = true;
    this.hs_Put.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.DataziSerializzeziPut.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
};
$hs.modules.DataziSerializzeziPut.initAfterDependencies = function () {
    this.hs_zdWPairS.notEvaluated = false;
    this.hs_putBuilder.notEvaluated = false;
    this.hs_runPutM.notEvaluated = false;
    this.hs_runPutMLazzy.notEvaluated = false;
    this.hs_unPut.notEvaluated = false;
    this.hs_zdfFunctorPutM.notEvaluated = false;
    this.hs_zdfFunctorPutM.evaluate = function () {
        return this;
    };
    this.hs_zdfMonadPutM.notEvaluated = false;
    this.hs_zdfMonadPutM.evaluate = function () {
        return this;
    };
    this.hs_zdfApplicativePutM.notEvaluated = false;
    this.hs_zdfApplicativePutM.evaluate = function () {
        return this;
    };
    this.hs_putTwoOf.notEvaluated = false;
    this.hs_putSeqOf.notEvaluated = false;
    this.hs_putMaybeOf.notEvaluated = false;
    this.hs_putListOf.notEvaluated = false;
    this.hs_putTreeOf.notEvaluated = false;
    this.hs_putSetOf.notEvaluated = false;
    this.hs_putMapOf.notEvaluated = false;
    this.hs_putIntSetOf.notEvaluated = false;
    this.hs_putIntMapOf.notEvaluated = false;
    this.hs_putIArrayOf.notEvaluated = false;
    this.hs_putEitherOf.notEvaluated = false;
    this.hs_PairS.notEvaluated = false;
    this.hs_Put.notEvaluated = false;
    var hs_tell25r9wl = new $hs.Func(1);
    var hs_sndS25r9wk = new $hs.Func(1);
    var hs_sat26zyfT = new $hs.Thunk();
    var hs_sat26zyfU = new $hs.Func(1);
    var hs_a25r9Dq = new $hs.Func(1);
    var hs_sat26zyfZ = new $hs.Thunk();
    var hs_sat26zyg0 = new $hs.Thunk();
    var hs_zdcfmap25r9Dv = new $hs.Func(2);
    var hs_zdczlzd25r9DP = new $hs.Thunk();
    var hs_zdczlztzg25r9DQ = new $hs.Func(2);
    var hs_zdcreturn25r9El = new $hs.Func(1);
    var hs_zdczgzg25r9Eq = new $hs.Func(2);
    var hs_zdczgzgze25r9EQ = new $hs.Func(2);
    var hs_zdcfail25r9Fn = new $hs.Thunk();
    var hs_zdcpure25r9Fo = new $hs.Thunk();
    var hs_zdczlzt25r9Fp = new $hs.Thunk();
    var hs_zdcztzg25r9Fq = new $hs.Thunk();
    this.hs_zdWPairS.evaluate = function (hs_tpl26zy91, hs_tpl26zy8Z) {
        var hs_tpl26zy92 = hs_tpl26zy8Z;
        if (hs_tpl26zy8Z.notEvaluated) {
            hs_tpl26zy92 = hs_tpl26zy8Z.hscall();
        }
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26zy91, hs_tpl26zy92];
        return $res;
    };
    hs_tell25r9wl.evaluate = function (hs_b26zy97) {
        var hs_sat26zyfQ = new $hs.Thunk();
        hs_sat26zyfQ.evaluateOnce = function () {
            var hs_tpl26zy99 = hs_b26zy97;
            if (hs_b26zy97.notEvaluated) {
                hs_tpl26zy99 = hs_b26zy97.hscall();
            }
            var $res = new $hs.Data(1);
            $res.data = [$hs.modules.GHCziUnit.hs_Z0T, hs_tpl26zy99];
            return $res;
        };
        var hs_sat26zyfP = new $hs.Func(1);
        hs_sat26zyfP.evaluate = function (hs_tpl26zy95) {
            if (hs_tpl26zy95.notEvaluated) {
                return hs_tpl26zy95.hscall();
            } else {
                return hs_tpl26zy95;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26zyfP, hs_sat26zyfQ);
    };
    hs_sndS25r9wk.evaluate = function (hs_ds26zy9c) {
        var hs_wild26zyfS = hs_ds26zy9c;
        if (hs_ds26zy9c.notEvaluated) {
            hs_wild26zyfS = hs_ds26zy9c.hscall();
        }
        var hs_b26zy9g = hs_wild26zyfS.data[1];
        if (hs_b26zy9g.notEvaluated) {
            return hs_b26zy9g.hscall();
        } else {
            return hs_b26zy9g;
        }
    };
    hs_sat26zyfT.evaluateOnce = function () {
        var hs_tpl26zy9l = $hs.modules.DataziSerializzeziBuilder.hs_flush;
        if ($hs.modules.DataziSerializzeziBuilder.hs_flush.notEvaluated) {
            hs_tpl26zy9l = $hs.modules.DataziSerializzeziBuilder.hs_flush.hscall();
        }
        var $res = new $hs.Data(1);
        $res.data = [$hs.modules.GHCziUnit.hs_Z0T, hs_tpl26zy9l];
        return $res;
    };
    hs_sat26zyfU.evaluate = function (hs_tpl26zy9i) {
        if (hs_tpl26zy9i.notEvaluated) {
            return hs_tpl26zy9i.hscall();
        } else {
            return hs_tpl26zy9i;
        }
    };
    this.hs_flush.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26zyfU, hs_sat26zyfT);
    };
    this.hs_putBuilder.evaluate = function (hs_eta1cW6l3) {
        return hs_tell25r9wl.hscall(hs_eta1cW6l3);
    };
    this.hs_putByteString.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_tell25r9wl, $hs.modules.DataziSerializzeziBuilder.hs_fromByteString);
    };
    this.hs_putLazzyByteString.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_tell25r9wl, $hs.modules.DataziSerializzeziBuilder.hs_fromLazzyByteString);
    };
    this.hs_putWord16be.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_tell25r9wl, $hs.modules.DataziSerializzeziBuilder.hs_putWord16be);
    };
    this.hs_putWord16host.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_tell25r9wl, $hs.modules.DataziSerializzeziBuilder.hs_putWord16host);
    };
    this.hs_putWord16le.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_tell25r9wl, $hs.modules.DataziSerializzeziBuilder.hs_putWord16le);
    };
    this.hs_putWord32be.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_tell25r9wl, $hs.modules.DataziSerializzeziBuilder.hs_putWord32be);
    };
    this.hs_putWord32host.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_tell25r9wl, $hs.modules.DataziSerializzeziBuilder.hs_putWord32host);
    };
    this.hs_putWord32le.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_tell25r9wl, $hs.modules.DataziSerializzeziBuilder.hs_putWord32le);
    };
    this.hs_putWord64be.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_tell25r9wl, $hs.modules.DataziSerializzeziBuilder.hs_putWord64be);
    };
    this.hs_putWord64host.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_tell25r9wl, $hs.modules.DataziSerializzeziBuilder.hs_putWord64host);
    };
    this.hs_putWord64le.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_tell25r9wl, $hs.modules.DataziSerializzeziBuilder.hs_putWord64le);
    };
    this.hs_putWord8.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_tell25r9wl, $hs.modules.DataziSerializzeziBuilder.hs_singleton);
    };
    this.hs_putWordhost.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_tell25r9wl, $hs.modules.DataziSerializzeziBuilder.hs_putWordhost);
    };
    this.hs_runPutM.evaluate = function (hs_eta26zy9o) {
        var hs_wild26zyfW = hs_eta26zy9o;
        if (hs_eta26zy9o.notEvaluated) {
            hs_wild26zyfW = hs_eta26zy9o.hscall();
        }
        var hs_f26zy9s = hs_wild26zyfW.data[0];
        var hs_s26zy9t = hs_wild26zyfW.data[1];
        var hs_sat26zyfV = new $hs.Thunk();
        hs_sat26zyfV.evaluateOnce = function () {
            return $hs.modules.DataziSerializzeziBuilder.hs_toByteString.hscall(hs_s26zy9t);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_f26zy9s, hs_sat26zyfV];
        return $res;
    };
    this.hs_runPutMLazzy.evaluate = function (hs_eta26zy9w) {
        var hs_wild26zyfY = hs_eta26zy9w;
        if (hs_eta26zy9w.notEvaluated) {
            hs_wild26zyfY = hs_eta26zy9w.hscall();
        }
        var hs_f26zy9A = hs_wild26zyfY.data[0];
        var hs_s26zy9B = hs_wild26zyfY.data[1];
        var hs_sat26zyfX = new $hs.Thunk();
        hs_sat26zyfX.evaluateOnce = function () {
            return $hs.modules.DataziSerializzeziBuilder.hs_toLazzyByteString.hscall(hs_s26zy9B);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_f26zy9A, hs_sat26zyfX];
        return $res;
    };
    hs_a25r9Dq.evaluate = function (hs_ds26zy9I) {
        if (hs_ds26zy9I.notEvaluated) {
            return hs_ds26zy9I.hscall();
        } else {
            return hs_ds26zy9I;
        }
    };
    this.hs_unPut.evaluate = function (hs_eta1cW6l3) {
        return hs_a25r9Dq.hscall(hs_eta1cW6l3);
    };
    hs_sat26zyfZ.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sndS25r9wk, hs_a25r9Dq);
    };
    this.hs_runPutLazzy.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.DataziSerializzeziBuilder.hs_toLazzyByteString, hs_sat26zyfZ);
    };
    hs_sat26zyg0.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sndS25r9wk, hs_a25r9Dq);
    };
    this.hs_runPut.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.DataziSerializzeziBuilder.hs_toByteString, hs_sat26zyg0);
    };
    this.hs_execPut.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sndS25r9wk, hs_a25r9Dq);
    };
    hs_zdcfmap25r9Dv.evaluate = function (hs_eta26zya0, hs_eta126zy9R) {
        var hs_sat26zyg2 = new $hs.Thunk();
        hs_sat26zyg2.evaluateOnce = function () {
            var hs_wild26zy9V = hs_eta126zy9R;
            if (hs_eta126zy9R.notEvaluated) {
                hs_wild26zy9V = hs_eta126zy9R.hscall();
            }
            var hs_w26zya3 = hs_wild26zy9V.data[1];
            var hs_sat26zyg3 = new $hs.Thunk();
            hs_sat26zyg3.evaluateOnce = function () {
                var hs_sat26zyg5 = new $hs.Thunk();
                hs_sat26zyg5.evaluateOnce = function () {
                    var hs_wild126zyg7 = hs_wild26zy9V;
                    if (hs_wild26zy9V.notEvaluated) {
                        hs_wild126zyg7 = hs_wild26zy9V.hscall();
                    }
                    var hs_a226zy9Z = hs_wild126zyg7.data[0];
                    if (hs_a226zy9Z.notEvaluated) {
                        return hs_a226zy9Z.hscall();
                    } else {
                        return hs_a226zy9Z;
                    }
                };
                return hs_eta26zya0.hscall(hs_sat26zyg5);
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26zyg3, hs_w26zya3];
            return $res;
        };
        var hs_sat26zyg1 = new $hs.Func(1);
        hs_sat26zyg1.evaluate = function (hs_tpl26zy9P) {
            if (hs_tpl26zy9P.notEvaluated) {
                return hs_tpl26zy9P.hscall();
            } else {
                return hs_tpl26zy9P;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26zyg1, hs_sat26zyg2);
    };
    this.hs_zdfFunctorPutM.data = [hs_zdcfmap25r9Dv, hs_zdczlzd25r9DP];
    hs_zdczlzd25r9DP.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zddmzlzd.hscall($hs.modules.DataziSerializzeziPut.hs_zdfFunctorPutM);
    };
    hs_zdczlztzg25r9DQ.evaluate = function (hs_eta26zyac, hs_eta126zyai) {
        var hs_sat26zyg9 = new $hs.Thunk();
        hs_sat26zyg9.evaluateOnce = function () {
            var hs_sat26zygb = new $hs.Thunk();
            hs_sat26zygb.evaluateOnce = function () {
                var hs_wild26zygl = hs_eta126zyai;
                if (hs_eta126zyai.notEvaluated) {
                    hs_wild26zygl = hs_eta126zyai.hscall();
                }
                var hs_wzq26zyam = hs_wild26zygl.data[1];
                if (hs_wzq26zyam.notEvaluated) {
                    return hs_wzq26zyam.hscall();
                } else {
                    return hs_wzq26zyam;
                }
            };
            var hs_sat26zygc = new $hs.Thunk();
            hs_sat26zygc.evaluateOnce = function () {
                var hs_wild26zygj = hs_eta26zyac;
                if (hs_eta26zyac.notEvaluated) {
                    hs_wild26zygj = hs_eta26zyac.hscall();
                }
                var hs_w26zyag = hs_wild26zygj.data[1];
                if (hs_w26zyag.notEvaluated) {
                    return hs_w26zyag.hscall();
                } else {
                    return hs_w26zyag;
                }
            };
            var hs_tpl26zyaz = $hs.modules.DataziMonoid.hs_mappend.hscall($hs.modules.DataziSerializzeziBuilder.hs_zdfMonoidBuilder, hs_sat26zygc, hs_sat26zygb);
            var hs_sat26zyga = new $hs.Thunk();
            hs_sat26zyga.evaluateOnce = function () {
                var hs_wild26zygf = hs_eta26zyac;
                if (hs_eta26zyac.notEvaluated) {
                    hs_wild26zygf = hs_eta26zyac.hscall();
                }
                var hs_f26zyaw = hs_wild26zygf.data[0];
                var hs_sat26zygd = new $hs.Thunk();
                hs_sat26zygd.evaluateOnce = function () {
                    var hs_wild126zygh = hs_eta126zyai;
                    if (hs_eta126zyai.notEvaluated) {
                        hs_wild126zygh = hs_eta126zyai.hscall();
                    }
                    var hs_x26zyav = hs_wild126zygh.data[0];
                    if (hs_x26zyav.notEvaluated) {
                        return hs_x26zyav.hscall();
                    } else {
                        return hs_x26zyav;
                    }
                };
                return hs_f26zyaw.hscall(hs_sat26zygd);
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26zyga, hs_tpl26zyaz];
            return $res;
        };
        var hs_sat26zyg8 = new $hs.Func(1);
        hs_sat26zyg8.evaluate = function (hs_tpl26zyaa) {
            if (hs_tpl26zyaa.notEvaluated) {
                return hs_tpl26zyaa.hscall();
            } else {
                return hs_tpl26zyaa;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26zyg8, hs_sat26zyg9);
    };
    hs_zdcreturn25r9El.evaluate = function (hs_eta26zyaE) {
        var hs_tpl26zyaF = $hs.modules.DataziMonoid.hs_mempty.hscall($hs.modules.DataziSerializzeziBuilder.hs_zdfMonoidBuilder);
        var $res = new $hs.Data(1);
        $res.data = [hs_eta26zyaE, hs_tpl26zyaF];
        return $res;
    };
    hs_zdczgzg25r9Eq.evaluate = function (hs_eta26zyaM, hs_eta126zyaS) {
        var hs_sat26zygn = new $hs.Thunk();
        hs_sat26zygn.evaluateOnce = function () {
            var hs_sat26zygp = new $hs.Thunk();
            hs_sat26zygp.evaluateOnce = function () {
                var hs_wild26zygw = hs_eta126zyaS;
                if (hs_eta126zyaS.notEvaluated) {
                    hs_wild26zygw = hs_eta126zyaS.hscall();
                }
                var hs_wzq26zyaW = hs_wild26zygw.data[1];
                if (hs_wzq26zyaW.notEvaluated) {
                    return hs_wzq26zyaW.hscall();
                } else {
                    return hs_wzq26zyaW;
                }
            };
            var hs_sat26zygq = new $hs.Thunk();
            hs_sat26zygq.evaluateOnce = function () {
                var hs_wild26zygu = hs_eta26zyaM;
                if (hs_eta26zyaM.notEvaluated) {
                    hs_wild26zygu = hs_eta26zyaM.hscall();
                }
                var hs_w26zyaQ = hs_wild26zygu.data[1];
                if (hs_w26zyaQ.notEvaluated) {
                    return hs_w26zyaQ.hscall();
                } else {
                    return hs_w26zyaQ;
                }
            };
            var hs_tpl26zyb4 = $hs.modules.DataziMonoid.hs_mappend.hscall($hs.modules.DataziSerializzeziBuilder.hs_zdfMonoidBuilder, hs_sat26zygq, hs_sat26zygp);
            var hs_sat26zygo = new $hs.Thunk();
            hs_sat26zygo.evaluateOnce = function () {
                var hs_wild26zygs = hs_eta126zyaS;
                if (hs_eta126zyaS.notEvaluated) {
                    hs_wild26zygs = hs_eta126zyaS.hscall();
                }
                var hs_b26zyb2 = hs_wild26zygs.data[0];
                if (hs_b26zyb2.notEvaluated) {
                    return hs_b26zyb2.hscall();
                } else {
                    return hs_b26zyb2;
                }
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26zygo, hs_tpl26zyb4];
            return $res;
        };
        var hs_sat26zygm = new $hs.Func(1);
        hs_sat26zygm.evaluate = function (hs_tpl26zyaK) {
            if (hs_tpl26zyaK.notEvaluated) {
                return hs_tpl26zyaK.hscall();
            } else {
                return hs_tpl26zyaK;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26zygm, hs_sat26zygn);
    };
    hs_zdczgzgze25r9EQ.evaluate = function (hs_eta26zybd, hs_eta126zybi) {
        var hs_sat26zygy = new $hs.Thunk();
        hs_sat26zygy.evaluateOnce = function () {
            var hs_a126zybk = new $hs.Thunk();
            hs_a126zybk.evaluateOnce = function () {
                var hs_sat26zygI = new $hs.Thunk();
                hs_sat26zygI.evaluateOnce = function () {
                    var hs_wild26zygK = hs_eta26zybd;
                    if (hs_eta26zybd.notEvaluated) {
                        hs_wild26zygK = hs_eta26zybd.hscall();
                    }
                    var hs_a226zybh = hs_wild26zygK.data[0];
                    if (hs_a226zybh.notEvaluated) {
                        return hs_a226zybh.hscall();
                    } else {
                        return hs_a226zybh;
                    }
                };
                return hs_eta126zybi.hscall(hs_sat26zygI);
            };
            var hs_sat26zygA = new $hs.Thunk();
            hs_sat26zygA.evaluateOnce = function () {
                var hs_wild26zygH = hs_a126zybk;
                if (hs_a126zybk.notEvaluated) {
                    hs_wild26zygH = hs_a126zybk.hscall();
                }
                var hs_wzq26zybt = hs_wild26zygH.data[1];
                if (hs_wzq26zybt.notEvaluated) {
                    return hs_wzq26zybt.hscall();
                } else {
                    return hs_wzq26zybt;
                }
            };
            var hs_sat26zygB = new $hs.Thunk();
            hs_sat26zygB.evaluateOnce = function () {
                var hs_wild26zygF = hs_eta26zybd;
                if (hs_eta26zybd.notEvaluated) {
                    hs_wild26zygF = hs_eta26zybd.hscall();
                }
                var hs_w26zybo = hs_wild26zygF.data[1];
                if (hs_w26zybo.notEvaluated) {
                    return hs_w26zybo.hscall();
                } else {
                    return hs_w26zybo;
                }
            };
            var hs_tpl26zybB = $hs.modules.DataziMonoid.hs_mappend.hscall($hs.modules.DataziSerializzeziBuilder.hs_zdfMonoidBuilder, hs_sat26zygB, hs_sat26zygA);
            var hs_sat26zygz = new $hs.Thunk();
            hs_sat26zygz.evaluateOnce = function () {
                var hs_wild26zygD = hs_a126zybk;
                if (hs_a126zybk.notEvaluated) {
                    hs_wild26zygD = hs_a126zybk.hscall();
                }
                var hs_b26zybz = hs_wild26zygD.data[0];
                if (hs_b26zybz.notEvaluated) {
                    return hs_b26zybz.hscall();
                } else {
                    return hs_b26zybz;
                }
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26zygz, hs_tpl26zybB];
            return $res;
        };
        var hs_sat26zygx = new $hs.Func(1);
        hs_sat26zygx.evaluate = function (hs_tpl26zyba) {
            if (hs_tpl26zyba.notEvaluated) {
                return hs_tpl26zyba.hscall();
            } else {
                return hs_tpl26zyba;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26zygx, hs_sat26zygy);
    };
    this.hs_zdfMonadPutM.data = [hs_zdczgzgze25r9EQ, hs_zdczgzg25r9Eq, hs_zdcreturn25r9El, hs_zdcfail25r9Fn];
    hs_zdcfail25r9Fn.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zddmfail.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM);
    };
    hs_zdcpure25r9Fo.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM);
    };
    this.hs_zdfApplicativePutM.data = [$hs.modules.DataziSerializzeziPut.hs_zdfFunctorPutM, hs_zdcpure25r9Fo, hs_zdczlztzg25r9DQ, hs_zdcztzg25r9Fq, hs_zdczlzt25r9Fp];
    hs_zdczlzt25r9Fp.evaluateOnce = function () {
        return $hs.modules.ControlziApplicative.hs_zddmzlzt.hscall($hs.modules.DataziSerializzeziPut.hs_zdfApplicativePutM);
    };
    hs_zdcztzg25r9Fq.evaluateOnce = function () {
        return $hs.modules.ControlziApplicative.hs_zddmztzg.hscall($hs.modules.DataziSerializzeziPut.hs_zdfApplicativePutM);
    };
    this.hs_putTwoOf.evaluate = function (hs_eta26zybP, hs_eta126zybS, hs_eta226zybK) {
        var hs_wild26zygM = hs_eta226zybK;
        if (hs_eta226zybK.notEvaluated) {
            hs_wild26zygM = hs_eta226zybK.hscall();
        }
        var hs_a126zybO = hs_wild26zygM.data[0];
        var hs_b26zybR = hs_wild26zygM.data[1];
        var hs_sat26zygN = new $hs.Thunk();
        hs_sat26zygN.evaluateOnce = function () {
            return hs_eta126zybS.hscall(hs_b26zybR);
        };
        var hs_sat26zygL = new $hs.Thunk();
        hs_sat26zygL.evaluateOnce = function () {
            return hs_eta26zybP.hscall(hs_a126zybO);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, hs_sat26zygL, hs_sat26zygN);
    };
    this.hs_putSeqOf.evaluate = function (hs_eta26zycc) {
        var hs_go26zyce = new $hs.Func(3);
        hs_go26zyce.evaluate = function (hs_n26zyc1, hs_body26zyc3, hs_s26zybZ) {
            var hs_wild26zygT = $hs.modules.DataziSequence.hs_viewl.hscall(hs_s26zybZ);
            switch (hs_wild26zygT.tag) {
            case 1:
                var hs_sat26zygX = new $hs.Thunk();
                hs_sat26zygX.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_tell25r9wl, $hs.modules.DataziSerializzeziBuilder.hs_putWord64be, hs_n26zyc1);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, hs_sat26zygX, hs_body26zyc3);
            case 2:
                var hs_a126zycb = hs_wild26zygT.data[0];
                var hs_as26zycg = hs_wild26zygT.data[1];
                var hs_sat26zygU = new $hs.Thunk();
                hs_sat26zygU.evaluateOnce = function () {
                    var hs_sat26zygW = new $hs.Thunk();
                    hs_sat26zygW.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26zygW);
                };
                var hs_nzq26zyca = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_n26zyc1, hs_sat26zygU);
                var hs_sat26zygR = new $hs.Thunk();
                hs_sat26zygR.evaluateOnce = function () {
                    var hs_sat26zygV = new $hs.Thunk();
                    hs_sat26zygV.evaluateOnce = function () {
                        return hs_eta26zycc.hscall(hs_a126zycb);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, hs_body26zyc3, hs_sat26zygV);
                };
                return hs_go26zyce.hscall(hs_nzq26zyca, hs_sat26zygR, hs_as26zycg);
            }
        };
        var hs_sat26zygP = new $hs.Thunk();
        hs_sat26zygP.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, $hs.modules.GHCziUnit.hs_Z0T);
        };
        var hs_sat26zygO = new $hs.Thunk();
        hs_sat26zygO.evaluateOnce = function () {
            var hs_sat26zygQ = new $hs.Thunk();
            hs_sat26zygQ.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26zygQ);
        };
        return hs_go26zyce.hscall(hs_sat26zygO, hs_sat26zygP);
    };
    this.hs_putMaybeOf.evaluate = function (hs_eta26zycv, hs_eta126zycm) {
        var hs_wild26zygZ = hs_eta126zycm;
        if (hs_eta126zycm.notEvaluated) {
            hs_wild26zygZ = hs_eta126zycm.hscall();
        }
        switch (hs_wild26zygZ.tag) {
        case 1:
            var hs_sat26zyh3 = new $hs.Thunk();
            hs_sat26zyh3.evaluateOnce = function () {
                var hs_sat26zyh4 = new $hs.Thunk();
                hs_sat26zyh4.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26zyh4);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_tell25r9wl, $hs.modules.DataziSerializzeziBuilder.hs_singleton, hs_sat26zyh3);
        case 2:
            var hs_a126zycu = hs_wild26zygZ.data[0];
            var hs_sat26zyh0 = new $hs.Thunk();
            hs_sat26zyh0.evaluateOnce = function () {
                return hs_eta26zycv.hscall(hs_a126zycu);
            };
            var hs_sat26zygY = new $hs.Thunk();
            hs_sat26zygY.evaluateOnce = function () {
                var hs_sat26zyh1 = new $hs.Thunk();
                hs_sat26zyh1.evaluateOnce = function () {
                    var hs_sat26zyh2 = new $hs.Thunk();
                    hs_sat26zyh2.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26zyh2);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_tell25r9wl, $hs.modules.DataziSerializzeziBuilder.hs_singleton, hs_sat26zyh1);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, hs_sat26zygY, hs_sat26zyh0);
        }
    };
    this.hs_putListOf.evaluate = function (hs_eta26zycP) {
        var hs_go26zycR = new $hs.Func(3);
        hs_go26zycR.evaluate = function (hs_n26zycE, hs_body26zycG, hs_ds26zycC) {
            var hs_wild26zyha = hs_ds26zycC;
            if (hs_ds26zycC.notEvaluated) {
                hs_wild26zyha = hs_ds26zycC.hscall();
            }
            switch (hs_wild26zyha.tag) {
            case 1:
                var hs_sat26zyhe = new $hs.Thunk();
                hs_sat26zyhe.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_tell25r9wl, $hs.modules.DataziSerializzeziBuilder.hs_putWord64be, hs_n26zycE);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, hs_sat26zyhe, hs_body26zycG);
            case 2:
                var hs_x26zycO = hs_wild26zyha.data[0];
                var hs_xs26zycT = hs_wild26zyha.data[1];
                var hs_sat26zyhb = new $hs.Thunk();
                hs_sat26zyhb.evaluateOnce = function () {
                    var hs_sat26zyhd = new $hs.Thunk();
                    hs_sat26zyhd.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26zyhd);
                };
                var hs_nzq26zycN = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_n26zycE, hs_sat26zyhb);
                var hs_sat26zyh8 = new $hs.Thunk();
                hs_sat26zyh8.evaluateOnce = function () {
                    var hs_sat26zyhc = new $hs.Thunk();
                    hs_sat26zyhc.evaluateOnce = function () {
                        return hs_eta26zycP.hscall(hs_x26zycO);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, hs_body26zycG, hs_sat26zyhc);
                };
                return hs_go26zycR.hscall(hs_nzq26zycN, hs_sat26zyh8, hs_xs26zycT);
            }
        };
        var hs_sat26zyh6 = new $hs.Thunk();
        hs_sat26zyh6.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, $hs.modules.GHCziUnit.hs_Z0T);
        };
        var hs_sat26zyh5 = new $hs.Thunk();
        hs_sat26zyh5.evaluateOnce = function () {
            var hs_sat26zyh7 = new $hs.Thunk();
            hs_sat26zyh7.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26zyh7);
        };
        return hs_go26zycR.hscall(hs_sat26zyh5, hs_sat26zyh6);
    };
    this.hs_putTreeOf.evaluate = function (hs_eta26zyd4, hs_eta126zycZ) {
        var hs_wild26zyhg = hs_eta126zycZ;
        if (hs_eta126zycZ.notEvaluated) {
            hs_wild26zyhg = hs_eta126zycZ.hscall();
        }
        var hs_r26zyd3 = hs_wild26zyhg.data[0];
        var hs_s26zydu = hs_wild26zyhg.data[1];
        var hs_sat26zyhh = new $hs.Thunk();
        hs_sat26zyhh.evaluateOnce = function () {
            var hs_go26zydo = new $hs.Func(3);
            hs_go26zydo.evaluate = function (hs_n26zydc, hs_body26zyde, hs_ds26zyda) {
                var hs_wild126zyhn = hs_ds26zyda;
                if (hs_ds26zyda.notEvaluated) {
                    hs_wild126zyhn = hs_ds26zyda.hscall();
                }
                switch (hs_wild126zyhn.tag) {
                case 1:
                    var hs_sat26zyhr = new $hs.Thunk();
                    hs_sat26zyhr.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_tell25r9wl, $hs.modules.DataziSerializzeziBuilder.hs_putWord64be, hs_n26zydc);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, hs_sat26zyhr, hs_body26zyde);
                case 2:
                    var hs_x26zydm = hs_wild126zyhn.data[0];
                    var hs_xs26zydq = hs_wild126zyhn.data[1];
                    var hs_sat26zyho = new $hs.Thunk();
                    hs_sat26zyho.evaluateOnce = function () {
                        var hs_sat26zyhq = new $hs.Thunk();
                        hs_sat26zyhq.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26zyhq);
                    };
                    var hs_nzq26zydl = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_n26zydc, hs_sat26zyho);
                    var hs_sat26zyhl = new $hs.Thunk();
                    hs_sat26zyhl.evaluateOnce = function () {
                        var hs_sat26zyhp = new $hs.Thunk();
                        hs_sat26zyhp.evaluateOnce = function () {
                            return $hs.modules.DataziSerializzeziPut.hs_putTreeOf.hscall(hs_eta26zyd4, hs_x26zydm);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, hs_body26zyde, hs_sat26zyhp);
                    };
                    return hs_go26zydo.hscall(hs_nzq26zydl, hs_sat26zyhl, hs_xs26zydq);
                }
            };
            var hs_sat26zyhj = new $hs.Thunk();
            hs_sat26zyhj.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, $hs.modules.GHCziUnit.hs_Z0T);
            };
            var hs_sat26zyhi = new $hs.Thunk();
            hs_sat26zyhi.evaluateOnce = function () {
                var hs_sat26zyhk = new $hs.Thunk();
                hs_sat26zyhk.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26zyhk);
            };
            return hs_go26zydo.hscall(hs_sat26zyhi, hs_sat26zyhj, hs_s26zydu);
        };
        var hs_sat26zyhf = new $hs.Thunk();
        hs_sat26zyhf.evaluateOnce = function () {
            return hs_eta26zyd4.hscall(hs_r26zyd3);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, hs_sat26zyhf, hs_sat26zyhh);
    };
    this.hs_putSetOf.evaluate = function (hs_eta26zydx) {
        var hs_sat26zyhs = new $hs.Thunk();
        hs_sat26zyhs.evaluateOnce = function () {
            return $hs.modules.DataziSerializzeziPut.hs_putListOf.hscall(hs_eta26zydx);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26zyhs, $hs.modules.DataziSet.hs_toAscList);
    };
    this.hs_putMapOf.evaluate = function (hs_zddOrd26zyea, hs_eta26zydX, hs_eta126zye0) {
        var hs_go26zye3 = new $hs.Func(3);
        hs_go26zye3.evaluate = function (hs_n26zydI, hs_body26zydK, hs_ds26zydG) {
            var hs_wild26zyhz = hs_ds26zydG;
            if (hs_ds26zydG.notEvaluated) {
                hs_wild26zyhz = hs_ds26zydG.hscall();
            }
            switch (hs_wild26zyhz.tag) {
            case 1:
                var hs_sat26zyhG = new $hs.Thunk();
                hs_sat26zyhG.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_tell25r9wl, $hs.modules.DataziSerializzeziBuilder.hs_putWord64be, hs_n26zydI);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, hs_sat26zyhG, hs_body26zydK);
            case 2:
                var hs_x26zydS = hs_wild26zyhz.data[0];
                var hs_xs26zye5 = hs_wild26zyhz.data[1];
                var hs_sat26zyhA = new $hs.Thunk();
                hs_sat26zyhA.evaluateOnce = function () {
                    var hs_sat26zyhF = new $hs.Thunk();
                    hs_sat26zyhF.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26zyhF);
                };
                var hs_nzq26zydR = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_n26zydI, hs_sat26zyhA);
                var hs_sat26zyhx = new $hs.Thunk();
                hs_sat26zyhx.evaluateOnce = function () {
                    var hs_sat26zyhB = new $hs.Thunk();
                    hs_sat26zyhB.evaluateOnce = function () {
                        var hs_wild126zyhD = hs_x26zydS;
                        if (hs_x26zydS.notEvaluated) {
                            hs_wild126zyhD = hs_x26zydS.hscall();
                        }
                        var hs_a126zydW = hs_wild126zyhD.data[0];
                        var hs_b26zydZ = hs_wild126zyhD.data[1];
                        var hs_sat26zyhE = new $hs.Thunk();
                        hs_sat26zyhE.evaluateOnce = function () {
                            return hs_eta126zye0.hscall(hs_b26zydZ);
                        };
                        var hs_sat26zyhC = new $hs.Thunk();
                        hs_sat26zyhC.evaluateOnce = function () {
                            return hs_eta26zydX.hscall(hs_a126zydW);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, hs_sat26zyhC, hs_sat26zyhE);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, hs_body26zydK, hs_sat26zyhB);
                };
                return hs_go26zye3.hscall(hs_nzq26zydR, hs_sat26zyhx, hs_xs26zye5);
            }
        };
        var hs_sat26zyhu = new $hs.Thunk();
        hs_sat26zyhu.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, $hs.modules.GHCziUnit.hs_Z0T);
        };
        var hs_sat26zyhv = new $hs.Thunk();
        hs_sat26zyhv.evaluateOnce = function () {
            var hs_sat26zyhw = new $hs.Thunk();
            hs_sat26zyhw.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26zyhw);
        };
        var hs_sat26zyht = new $hs.Func(1);
        hs_sat26zyht.evaluate = function (hs_eta1cW6l3) {
            return hs_go26zye3.hscall(hs_sat26zyhv, hs_sat26zyhu, hs_eta1cW6l3);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26zyht, $hs.modules.DataziMap.hs_toAscList);
    };
    this.hs_putIntSetOf.evaluate = function (hs_pix26zyec) {
        var hs_sat26zyhH = new $hs.Thunk();
        hs_sat26zyhH.evaluateOnce = function () {
            return $hs.modules.DataziSerializzeziPut.hs_putListOf.hscall(hs_pix26zyec);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26zyhH, $hs.modules.DataziIntSet.hs_toAscList);
    };
    this.hs_putIntMapOf.evaluate = function (hs_eta26zyeB, hs_eta126zyeE) {
        var hs_go26zyeH = new $hs.Func(3);
        hs_go26zyeH.evaluate = function (hs_n26zyem, hs_body26zyeo, hs_ds26zyek) {
            var hs_wild26zyhO = hs_ds26zyek;
            if (hs_ds26zyek.notEvaluated) {
                hs_wild26zyhO = hs_ds26zyek.hscall();
            }
            switch (hs_wild26zyhO.tag) {
            case 1:
                var hs_sat26zyhV = new $hs.Thunk();
                hs_sat26zyhV.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_tell25r9wl, $hs.modules.DataziSerializzeziBuilder.hs_putWord64be, hs_n26zyem);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, hs_sat26zyhV, hs_body26zyeo);
            case 2:
                var hs_x26zyew = hs_wild26zyhO.data[0];
                var hs_xs26zyeJ = hs_wild26zyhO.data[1];
                var hs_sat26zyhP = new $hs.Thunk();
                hs_sat26zyhP.evaluateOnce = function () {
                    var hs_sat26zyhU = new $hs.Thunk();
                    hs_sat26zyhU.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26zyhU);
                };
                var hs_nzq26zyev = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_n26zyem, hs_sat26zyhP);
                var hs_sat26zyhM = new $hs.Thunk();
                hs_sat26zyhM.evaluateOnce = function () {
                    var hs_sat26zyhQ = new $hs.Thunk();
                    hs_sat26zyhQ.evaluateOnce = function () {
                        var hs_wild126zyhS = hs_x26zyew;
                        if (hs_x26zyew.notEvaluated) {
                            hs_wild126zyhS = hs_x26zyew.hscall();
                        }
                        var hs_a126zyeA = hs_wild126zyhS.data[0];
                        var hs_b26zyeD = hs_wild126zyhS.data[1];
                        var hs_sat26zyhT = new $hs.Thunk();
                        hs_sat26zyhT.evaluateOnce = function () {
                            return hs_eta126zyeE.hscall(hs_b26zyeD);
                        };
                        var hs_sat26zyhR = new $hs.Thunk();
                        hs_sat26zyhR.evaluateOnce = function () {
                            return hs_eta26zyeB.hscall(hs_a126zyeA);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, hs_sat26zyhR, hs_sat26zyhT);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, hs_body26zyeo, hs_sat26zyhQ);
                };
                return hs_go26zyeH.hscall(hs_nzq26zyev, hs_sat26zyhM, hs_xs26zyeJ);
            }
        };
        var hs_sat26zyhJ = new $hs.Thunk();
        hs_sat26zyhJ.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, $hs.modules.GHCziUnit.hs_Z0T);
        };
        var hs_sat26zyhK = new $hs.Thunk();
        hs_sat26zyhK.evaluateOnce = function () {
            var hs_sat26zyhL = new $hs.Thunk();
            hs_sat26zyhL.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26zyhL);
        };
        var hs_sat26zyhI = new $hs.Func(1);
        hs_sat26zyhI.evaluate = function (hs_eta1cW6l3) {
            return hs_go26zyeH.hscall(hs_sat26zyhK, hs_sat26zyhJ, hs_eta1cW6l3);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26zyhI, $hs.modules.DataziIntMap.hs_toAscList);
    };
    this.hs_putIArrayOf.evaluate = function (hs_zddIx26zyeU, hs_zddIArray26zyeT, hs_eta26zyf0, hs_eta126zyfm, hs_eta226zyeV) {
        var hs_sat26zyhX = new $hs.Thunk();
        hs_sat26zyhX.evaluateOnce = function () {
            var hs_go26zyfo = new $hs.Func(3);
            hs_go26zyfo.evaluate = function (hs_n26zyfb, hs_body26zyfd, hs_ds26zyf9) {
                var hs_wild26zyi7 = hs_ds26zyf9;
                if (hs_ds26zyf9.notEvaluated) {
                    hs_wild26zyi7 = hs_ds26zyf9.hscall();
                }
                switch (hs_wild26zyi7.tag) {
                case 1:
                    var hs_sat26zyib = new $hs.Thunk();
                    hs_sat26zyib.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_tell25r9wl, $hs.modules.DataziSerializzeziBuilder.hs_putWord64be, hs_n26zyfb);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, hs_sat26zyib, hs_body26zyfd);
                case 2:
                    var hs_x26zyfl = hs_wild26zyi7.data[0];
                    var hs_xs26zyfq = hs_wild26zyi7.data[1];
                    var hs_sat26zyi8 = new $hs.Thunk();
                    hs_sat26zyi8.evaluateOnce = function () {
                        var hs_sat26zyia = new $hs.Thunk();
                        hs_sat26zyia.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26zyia);
                    };
                    var hs_nzq26zyfk = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_n26zyfb, hs_sat26zyi8);
                    var hs_sat26zyi5 = new $hs.Thunk();
                    hs_sat26zyi5.evaluateOnce = function () {
                        var hs_sat26zyi9 = new $hs.Thunk();
                        hs_sat26zyi9.evaluateOnce = function () {
                            return hs_eta126zyfm.hscall(hs_x26zyfl);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, hs_body26zyfd, hs_sat26zyi9);
                    };
                    return hs_go26zyfo.hscall(hs_nzq26zyfk, hs_sat26zyi5, hs_xs26zyfq);
                }
            };
            var hs_sat26zyi2 = new $hs.Thunk();
            hs_sat26zyi2.evaluateOnce = function () {
                return $hs.modules.DataziArrayziBase.hs_elems.hscall(hs_zddIArray26zyeT, hs_zddIx26zyeU, hs_eta226zyeV);
            };
            var hs_sat26zyi3 = new $hs.Thunk();
            hs_sat26zyi3.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, $hs.modules.GHCziUnit.hs_Z0T);
            };
            var hs_sat26zyi1 = new $hs.Thunk();
            hs_sat26zyi1.evaluateOnce = function () {
                var hs_sat26zyi4 = new $hs.Thunk();
                hs_sat26zyi4.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26zyi4);
            };
            return hs_go26zyfo.hscall(hs_sat26zyi1, hs_sat26zyi3, hs_sat26zyi2);
        };
        var hs_sat26zyhW = new $hs.Thunk();
        hs_sat26zyhW.evaluateOnce = function () {
            var hs_wild26zyhZ = $hs.modules.DataziArrayziBase.hs_bounds.hscall(hs_zddIArray26zyeT, hs_zddIx26zyeU, hs_eta226zyeV);
            var hs_a126zyeZ = hs_wild26zyhZ.data[0];
            var hs_b26zyf2 = hs_wild26zyhZ.data[1];
            var hs_sat26zyi0 = new $hs.Thunk();
            hs_sat26zyi0.evaluateOnce = function () {
                return hs_eta26zyf0.hscall(hs_b26zyf2);
            };
            var hs_sat26zyhY = new $hs.Thunk();
            hs_sat26zyhY.evaluateOnce = function () {
                return hs_eta26zyf0.hscall(hs_a126zyeZ);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, hs_sat26zyhY, hs_sat26zyi0);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, hs_sat26zyhW, hs_sat26zyhX);
    };
    this.hs_putEitherOf.evaluate = function (hs_eta26zyfG, hs_eta126zyfN, hs_eta226zyfz) {
        var hs_wild26zyid = hs_eta226zyfz;
        if (hs_eta226zyfz.notEvaluated) {
            hs_wild26zyid = hs_eta226zyfz.hscall();
        }
        switch (hs_wild26zyid.tag) {
        case 1:
            var hs_a126zyfF = hs_wild26zyid.data[0];
            var hs_sat26zyii = new $hs.Thunk();
            hs_sat26zyii.evaluateOnce = function () {
                return hs_eta26zyfG.hscall(hs_a126zyfF);
            };
            var hs_sat26zyih = new $hs.Thunk();
            hs_sat26zyih.evaluateOnce = function () {
                var hs_sat26zyij = new $hs.Thunk();
                hs_sat26zyij.evaluateOnce = function () {
                    var hs_sat26zyik = new $hs.Thunk();
                    hs_sat26zyik.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26zyik);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_tell25r9wl, $hs.modules.DataziSerializzeziBuilder.hs_singleton, hs_sat26zyij);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, hs_sat26zyih, hs_sat26zyii);
        case 2:
            var hs_b26zyfM = hs_wild26zyid.data[0];
            var hs_sat26zyie = new $hs.Thunk();
            hs_sat26zyie.evaluateOnce = function () {
                return hs_eta126zyfN.hscall(hs_b26zyfM);
            };
            var hs_sat26zyic = new $hs.Thunk();
            hs_sat26zyic.evaluateOnce = function () {
                var hs_sat26zyif = new $hs.Thunk();
                hs_sat26zyif.evaluateOnce = function () {
                    var hs_sat26zyig = new $hs.Thunk();
                    hs_sat26zyig.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26zyig);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_tell25r9wl, $hs.modules.DataziSerializzeziBuilder.hs_singleton, hs_sat26zyif);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, hs_sat26zyic, hs_sat26zyie);
        }
    };
    this.hs_PairS.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_Put.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.DataziSerializzeziPut.hs_Put.hscall(hs_eta1cW6l3);
    };
};
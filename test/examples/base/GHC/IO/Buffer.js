
$hs.modules.GHCziIOziBuffer = new $hs.Module();
$hs.modules.GHCziIOziBuffer.dependencies = ["GHC.Types", "GHC.CString", "GHC.Unit", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.Show", "GHC.Err", "GHC.Classes", "GHC.ForeignPtr", "GHC.Ptr", "Foreign.C.Types", "Foreign.Storable", "Foreign.ForeignPtr.Imp"];
$hs.modules.GHCziIOziBuffer.initBeforeDependencies = function () {
    this.hs_zdWBuffer = new $hs.Func(5);
    this.hs_emptyBuffer = new $hs.Func(3);
    this.hs_newBuffer = new $hs.Func(3);
    this.hs_newByteBuffer = new $hs.Func(2);
    this.hs_bufferAdd = new $hs.Func(2);
    this.hs_bufferAdjustL = new $hs.Func(2);
    this.hs_bufferRemove = new $hs.Func(2);
    this.hs_bufferAvailable = new $hs.Func(1);
    this.hs_bufferElems = new $hs.Func(1);
    this.hs_isFullBuffer = new $hs.Func(1);
    this.hs_isFullCharBuffer = new $hs.Func(1);
    this.hs_isEmptyBuffer = new $hs.Func(1);
    this.hs_withRawBuffer = new $hs.Func(2);
    this.hs_withBuffer = new $hs.Func(2);
    this.hs_charSizze = new $hs.Data(1);
    this.hs_bufR = new $hs.Func(1);
    this.hs_bufL = new $hs.Func(1);
    this.hs_bufSizze = new $hs.Func(1);
    this.hs_summaryBuffer = new $hs.Func(1);
    this.hs_bufState = new $hs.Func(1);
    this.hs_isWriteBuffer = new $hs.Func(1);
    this.hs_bufRaw = new $hs.Func(1);
    this.hs_zdfEqBufferState = new $hs.Data(1);
    this.hs_checkBuffer = new $hs.Func(1);
    this.hs_readWord8Buf = new $hs.Func(2);
    this.hs_writeWord8Buf = new $hs.Func(3);
    this.hs_readCharBufPtr = new $hs.Func(2);
    this.hs_peekCharBuf = new $hs.Func(2);
    this.hs_readCharBuf = new $hs.Func(2);
    this.hs_writeCharBufPtr = new $hs.Func(3);
    this.hs_writeCharBuf = new $hs.Func(3);
    this.hs_newCharBuffer = new $hs.Func(2);
    this.hs_slideContents = new $hs.Func(1);
    this.hs_ReadBuffer = new $hs.Data(1);
    this.hs_WriteBuffer = new $hs.Data(2);
    this.hs_Buffer = new $hs.Func(6);
    this.hs_zdWBuffer.notEvaluated = true;
    this.hs_zdWBuffer.evaluate = function (hs_tpl26CZZi, hs_tpl26CZZx, hs_tpl26CZZm, hs_tpl26CZZp, hs_tpl26CZZs) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_tpl26CZZi, hs_tpl26CZZx, hs_tpl26CZZm, hs_tpl26CZZp, hs_tpl26CZZs);
    };
    this.hs_emptyBuffer.notEvaluated = true;
    this.hs_emptyBuffer.evaluate = function (hs_raw26CZZE, hs_szz26CZZI, hs_state26CZZN) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_raw26CZZE, hs_szz26CZZI, hs_state26CZZN);
    };
    this.hs_newBuffer.notEvaluated = true;
    this.hs_newBuffer.evaluate = function (hs_bytes26CZZS, hs_szz26CZZZ, hs_state26D004) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_bytes26CZZS, hs_szz26CZZZ, hs_state26D004);
    };
    this.hs_newByteBuffer.notEvaluated = true;
    this.hs_newByteBuffer.evaluate = function (hs_c26D00a, hs_st26D00b) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_c26D00a, hs_st26D00b);
    };
    this.hs_bufferAdd.notEvaluated = true;
    this.hs_bufferAdd.evaluate = function (hs_i26D00w, hs_buf26D00e) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_i26D00w, hs_buf26D00e);
    };
    this.hs_bufferAdjustL.notEvaluated = true;
    this.hs_bufferAdjustL.evaluate = function (hs_l26D00S, hs_buf26D00H) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_l26D00S, hs_buf26D00H);
    };
    this.hs_bufferRemove.notEvaluated = true;
    this.hs_bufferRemove.evaluate = function (hs_i26D01z, hs_buf26D01p) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_i26D01z, hs_buf26D01p);
    };
    this.hs_bufferAvailable.notEvaluated = true;
    this.hs_bufferAvailable.evaluate = function (hs_ds26D01D) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_ds26D01D);
    };
    this.hs_bufferElems.notEvaluated = true;
    this.hs_bufferElems.evaluate = function (hs_ds26D01Q) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_ds26D01Q);
    };
    this.hs_isFullBuffer.notEvaluated = true;
    this.hs_isFullBuffer.evaluate = function (hs_ds26D023) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_ds26D023);
    };
    this.hs_isFullCharBuffer.notEvaluated = true;
    this.hs_isFullCharBuffer.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_isEmptyBuffer.notEvaluated = true;
    this.hs_isEmptyBuffer.evaluate = function (hs_ds26D02g) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_ds26D02g);
    };
    this.hs_withRawBuffer.notEvaluated = true;
    this.hs_withRawBuffer.evaluate = function (hs_raw26D02u, hs_f26D02w) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_raw26D02u, hs_f26D02w);
    };
    this.hs_withBuffer.notEvaluated = true;
    this.hs_withBuffer.evaluate = function (hs_ds26D02z, hs_f26D02L) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_ds26D02z, hs_f26D02L);
    };
    this.hs_charSizze.notEvaluated = true;
    this.hs_charSizze.evaluate = function () {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this;
    };
    this.hs_bufR.notEvaluated = true;
    this.hs_bufR.evaluate = function (hs_ds26D02N) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_ds26D02N);
    };
    this.hs_bufL.notEvaluated = true;
    this.hs_bufL.evaluate = function (hs_ds26D02X) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_ds26D02X);
    };
    this.hs_bufSizze.notEvaluated = true;
    this.hs_bufSizze.evaluate = function (hs_ds26D037) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_ds26D037);
    };
    this.hs_summaryBuffer.notEvaluated = true;
    this.hs_summaryBuffer.evaluate = function (hs_buf26D03i) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_buf26D03i);
    };
    this.hs_bufState.notEvaluated = true;
    this.hs_bufState.evaluate = function (hs_ds26D03Z) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_ds26D03Z);
    };
    this.hs_isWriteBuffer.notEvaluated = true;
    this.hs_isWriteBuffer.evaluate = function (hs_buf26D049) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_buf26D049);
    };
    this.hs_bufRaw.notEvaluated = true;
    this.hs_bufRaw.evaluate = function (hs_ds26D04k) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_ds26D04k);
    };
    this.hs_zdfEqBufferState.notEvaluated = true;
    this.hs_zdfEqBufferState.evaluate = function () {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this;
    };
    this.hs_checkBuffer.notEvaluated = true;
    this.hs_checkBuffer.evaluate = function (hs_buf26D04J) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_buf26D04J);
    };
    this.hs_readWord8Buf.notEvaluated = true;
    this.hs_readWord8Buf.evaluate = function (hs_arr26D05r, hs_ix26D05v) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_arr26D05r, hs_ix26D05v);
    };
    this.hs_writeWord8Buf.notEvaluated = true;
    this.hs_writeWord8Buf.evaluate = function (hs_arr26D05A, hs_ix26D05E, hs_w26D05F) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_arr26D05A, hs_ix26D05E, hs_w26D05F);
    };
    this.hs_readCharBufPtr.notEvaluated = true;
    this.hs_readCharBufPtr.evaluate = function (hs_p26D05J, hs_ix26D05L) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_p26D05J, hs_ix26D05L);
    };
    this.hs_peekCharBuf.notEvaluated = true;
    this.hs_peekCharBuf.evaluate = function (hs_arr26D05V, hs_ix26D060) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_arr26D05V, hs_ix26D060);
    };
    this.hs_readCharBuf.notEvaluated = true;
    this.hs_readCharBuf.evaluate = function (hs_arr26D06j, hs_ix26D06n) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_arr26D06j, hs_ix26D06n);
    };
    this.hs_writeCharBufPtr.notEvaluated = true;
    this.hs_writeCharBufPtr.evaluate = function (hs_p26D06s, hs_ix26D06u, hs_ch26D06v) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_p26D06s, hs_ix26D06u, hs_ch26D06v);
    };
    this.hs_writeCharBuf.notEvaluated = true;
    this.hs_writeCharBuf.evaluate = function (hs_arr26D06D, hs_ix26D06H, hs_c26D06I) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_arr26D06D, hs_ix26D06H, hs_c26D06I);
    };
    this.hs_newCharBuffer.notEvaluated = true;
    this.hs_newCharBuffer.evaluate = function (hs_c26D06M, hs_st26D06O) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_c26D06M, hs_st26D06O);
    };
    this.hs_slideContents.notEvaluated = true;
    this.hs_slideContents.evaluate = function (hs_buf26D06Q) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_buf26D06Q);
    };
    this.hs_ReadBuffer.notEvaluated = true;
    this.hs_ReadBuffer.evaluate = function () {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this;
    };
    this.hs_WriteBuffer.notEvaluated = true;
    this.hs_WriteBuffer.evaluate = function () {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this;
    };
    this.hs_Buffer.notEvaluated = true;
    this.hs_Buffer.evaluate = function (hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
};
$hs.modules.GHCziIOziBuffer.initAfterDependencies = function () {
    this.hs_zdWBuffer.notEvaluated = false;
    this.hs_emptyBuffer.notEvaluated = false;
    this.hs_newBuffer.notEvaluated = false;
    this.hs_newByteBuffer.notEvaluated = false;
    this.hs_bufferAdd.notEvaluated = false;
    this.hs_bufferAdjustL.notEvaluated = false;
    this.hs_bufferRemove.notEvaluated = false;
    this.hs_bufferAvailable.notEvaluated = false;
    this.hs_bufferElems.notEvaluated = false;
    this.hs_isFullBuffer.notEvaluated = false;
    this.hs_isFullCharBuffer.notEvaluated = false;
    this.hs_isEmptyBuffer.notEvaluated = false;
    this.hs_withRawBuffer.notEvaluated = false;
    this.hs_withBuffer.notEvaluated = false;
    this.hs_charSizze.notEvaluated = false;
    this.hs_charSizze.evaluate = function () {
        return this;
    };
    this.hs_bufR.notEvaluated = false;
    this.hs_bufL.notEvaluated = false;
    this.hs_bufSizze.notEvaluated = false;
    this.hs_summaryBuffer.notEvaluated = false;
    this.hs_bufState.notEvaluated = false;
    this.hs_isWriteBuffer.notEvaluated = false;
    this.hs_bufRaw.notEvaluated = false;
    this.hs_zdfEqBufferState.notEvaluated = false;
    this.hs_zdfEqBufferState.evaluate = function () {
        return this;
    };
    this.hs_checkBuffer.notEvaluated = false;
    this.hs_readWord8Buf.notEvaluated = false;
    this.hs_writeWord8Buf.notEvaluated = false;
    this.hs_readCharBufPtr.notEvaluated = false;
    this.hs_peekCharBuf.notEvaluated = false;
    this.hs_readCharBuf.notEvaluated = false;
    this.hs_writeCharBufPtr.notEvaluated = false;
    this.hs_writeCharBuf.notEvaluated = false;
    this.hs_newCharBuffer.notEvaluated = false;
    this.hs_slideContents.notEvaluated = false;
    this.hs_ReadBuffer.notEvaluated = false;
    this.hs_ReadBuffer.evaluate = function () {
        return this;
    };
    this.hs_WriteBuffer.notEvaluated = false;
    this.hs_WriteBuffer.evaluate = function () {
        return this;
    };
    this.hs_Buffer.notEvaluated = false;
    var hs_zdczeze25uBye = new $hs.Func(2);
    var hs_zdczsze25uBym = new $hs.Func(2);
    this.hs_zdWBuffer.evaluate = function (hs_tpl26CZZi, hs_tpl26CZZx, hs_tpl26CZZm, hs_tpl26CZZp, hs_tpl26CZZs) {
        var hs_tpl26D080 = hs_tpl26CZZi;
        if (hs_tpl26CZZi.notEvaluated) {
            hs_tpl26D080 = hs_tpl26CZZi.hscall();
        }
        var hs_tpl26CZZv = hs_tpl26D080.data[0];
        var hs_tpl26CZZw = hs_tpl26D080.data[1];
        var hs_tpl26D07Z = hs_tpl26CZZm;
        if (hs_tpl26CZZm.notEvaluated) {
            hs_tpl26D07Z = hs_tpl26CZZm.hscall();
        }
        var hs_tpl26CZZy = hs_tpl26D07Z.data[0];
        var hs_tpl26D07Y = hs_tpl26CZZp;
        if (hs_tpl26CZZp.notEvaluated) {
            hs_tpl26D07Y = hs_tpl26CZZp.hscall();
        }
        var hs_tpl26CZZz = hs_tpl26D07Y.data[0];
        var hs_tpl26D07X = hs_tpl26CZZs;
        if (hs_tpl26CZZs.notEvaluated) {
            hs_tpl26D07X = hs_tpl26CZZs.hscall();
        }
        var hs_tpl26CZZA = hs_tpl26D07X.data[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26CZZv, hs_tpl26CZZw, hs_tpl26CZZx, hs_tpl26CZZy, hs_tpl26CZZz, hs_tpl26CZZA];
        return $res;
    };
    this.hs_emptyBuffer.evaluate = function (hs_raw26CZZE, hs_szz26CZZI, hs_state26CZZN) {
        var hs_tpl26D082 = hs_raw26CZZE;
        if (hs_raw26CZZE.notEvaluated) {
            hs_tpl26D082 = hs_raw26CZZE.hscall();
        }
        var hs_tpl126CZZL = hs_tpl26D082.data[0];
        var hs_tpl226CZZM = hs_tpl26D082.data[1];
        var hs_tpl326D081 = hs_szz26CZZI;
        if (hs_szz26CZZI.notEvaluated) {
            hs_tpl326D081 = hs_szz26CZZI.hscall();
        }
        var hs_tpl426CZZO = hs_tpl326D081.data[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl126CZZL, hs_tpl226CZZM, hs_state26CZZN, hs_tpl426CZZO, 0, 0];
        return $res;
    };
    this.hs_newBuffer.evaluate = function (hs_bytes26CZZS, hs_szz26CZZZ, hs_state26D004) {
        var hs_sat26D084 = new $hs.Func(1);
        hs_sat26D084.evaluate = function (hs_fp26CZZV) {
            var hs_sat26D085 = new $hs.Thunk();
            hs_sat26D085.evaluateOnce = function () {
                var hs_tpl26D087 = hs_fp26CZZV;
                if (hs_fp26CZZV.notEvaluated) {
                    hs_tpl26D087 = hs_fp26CZZV.hscall();
                }
                var hs_tpl126D002 = hs_tpl26D087.data[0];
                var hs_tpl226D003 = hs_tpl26D087.data[1];
                var hs_tpl326D086 = hs_szz26CZZZ;
                if (hs_szz26CZZZ.notEvaluated) {
                    hs_tpl326D086 = hs_szz26CZZZ.hscall();
                }
                var hs_tpl426D005 = hs_tpl326D086.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_tpl126D002, hs_tpl226D003, hs_state26D004, hs_tpl426D005, 0, 0];
                return $res;
            };
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D085);
        };
        var hs_sat26D083 = new $hs.Thunk();
        hs_sat26D083.evaluateOnce = function () {
            return $hs.modules.GHCziForeignPtr.hs_mallocForeignPtrBytes.hscall(hs_bytes26CZZS);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D083, hs_sat26D084);
    };
    this.hs_newByteBuffer.evaluate = function (hs_c26D00a, hs_st26D00b) {
        return $hs.modules.GHCziIOziBuffer.hs_newBuffer.hscall(hs_c26D00a, hs_c26D00a, hs_st26D00b);
    };
    this.hs_bufferAdd.evaluate = function (hs_i26D00w, hs_buf26D00e) {
        var hs_wild26D00m = hs_buf26D00e;
        if (hs_buf26D00e.notEvaluated) {
            hs_wild26D00m = hs_buf26D00e.hscall();
        }
        var hs_rb426D00u = hs_wild26D00m.data[5];
        var hs_wild126D088 = hs_wild26D00m;
        if (hs_wild26D00m.notEvaluated) {
            hs_wild126D088 = hs_wild26D00m.hscall();
        }
        var hs_rb526D00z = hs_wild126D088.data[0];
        var hs_rb626D00A = hs_wild126D088.data[1];
        var hs_ds126D00B = hs_wild126D088.data[2];
        var hs_rb726D00C = hs_wild126D088.data[3];
        var hs_rb826D00D = hs_wild126D088.data[4];
        var hs_sat26D08f = new $hs.Data(1);
        hs_sat26D08f.data = [hs_rb426D00u];
        var hs_tpl26D08g = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26D08f, hs_i26D00w);
        var hs_tpl126D00E = hs_tpl26D08g.data[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_rb526D00z, hs_rb626D00A, hs_ds126D00B, hs_rb726D00C, hs_rb826D00D, hs_tpl126D00E];
        return $res;
    };
    this.hs_bufferAdjustL.evaluate = function (hs_l26D00S, hs_buf26D00H) {
        var hs_wild26D00U = hs_buf26D00H;
        if (hs_buf26D00H.notEvaluated) {
            hs_wild26D00U = hs_buf26D00H.hscall();
        }
        var hs_rb426D00Q = hs_wild26D00U.data[5];
        var hs_w26D00R = new $hs.Data(1);
        hs_w26D00R.data = [hs_rb426D00Q];
        var hs_wild126D08p = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_l26D00S, hs_w26D00R);
        switch (hs_wild126D08p.tag) {
        case 1:
            var hs_wild226D08s = hs_wild26D00U;
            if (hs_wild26D00U.notEvaluated) {
                hs_wild226D08s = hs_wild26D00U.hscall();
            }
            var hs_rb526D016 = hs_wild226D08s.data[0];
            var hs_rb626D017 = hs_wild226D08s.data[1];
            var hs_ds126D018 = hs_wild226D08s.data[2];
            var hs_rb726D019 = hs_wild226D08s.data[3];
            var hs_tpl26D08r = hs_l26D00S;
            if (hs_l26D00S.notEvaluated) {
                hs_tpl26D08r = hs_l26D00S.hscall();
            }
            var hs_tpl126D01a = hs_tpl26D08r.data[0];
            var hs_tpl226D08q = hs_w26D00R;
            if (hs_w26D00R.notEvaluated) {
                hs_tpl226D08q = hs_w26D00R.hscall();
            }
            var hs_tpl326D01b = hs_tpl226D08q.data[0];
            var $res = new $hs.Data(1);
            $res.data = [hs_rb526D016, hs_rb626D017, hs_ds126D018, hs_rb726D019, hs_tpl126D01a, hs_tpl326D01b];
            return $res;
        case 2:
            var hs_wild226D08j = hs_wild26D00U;
            if (hs_wild26D00U.notEvaluated) {
                hs_wild226D08j = hs_wild26D00U.hscall();
            }
            var hs_rb526D01j = hs_wild226D08j.data[0];
            var hs_rb626D01k = hs_wild226D08j.data[1];
            var hs_ds126D01l = hs_wild226D08j.data[2];
            var hs_rb726D01m = hs_wild226D08j.data[3];
            var $res = new $hs.Data(1);
            $res.data = [hs_rb526D01j, hs_rb626D01k, hs_ds126D01l, hs_rb726D01m, 0, 0];
            return $res;
        }
    };
    this.hs_bufferRemove.evaluate = function (hs_i26D01z, hs_buf26D01p) {
        var hs_wild26D01B = hs_buf26D01p;
        if (hs_buf26D01p.notEvaluated) {
            hs_wild26D01B = hs_buf26D01p.hscall();
        }
        var hs_rb326D01x = hs_wild26D01B.data[4];
        var hs_sat26D08v = new $hs.Thunk();
        hs_sat26D08v.evaluateOnce = function () {
            var hs_sat26D08B = new $hs.Data(1);
            hs_sat26D08B.data = [hs_rb326D01x];
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26D08B, hs_i26D01z);
        };
        return $hs.modules.GHCziIOziBuffer.hs_bufferAdjustL.hscall(hs_sat26D08v, hs_wild26D01B);
    };
    this.hs_bufferAvailable.evaluate = function (hs_ds26D01D) {
        var hs_wild26D08D = hs_ds26D01D;
        if (hs_ds26D01D.notEvaluated) {
            hs_wild26D08D = hs_ds26D01D.hscall();
        }
        var hs_rb226D01L = hs_wild26D08D.data[3];
        var hs_rb426D01N = hs_wild26D08D.data[5];
        var hs_sat26D08I = new $hs.Data(1);
        hs_sat26D08I.data = [hs_rb426D01N];
        var hs_sat26D08C = new $hs.Data(1);
        hs_sat26D08C.data = [hs_rb226D01L];
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26D08C, hs_sat26D08I);
    };
    this.hs_bufferElems.evaluate = function (hs_ds26D01Q) {
        var hs_wild26D08K = hs_ds26D01Q;
        if (hs_ds26D01Q.notEvaluated) {
            hs_wild26D08K = hs_ds26D01Q.hscall();
        }
        var hs_rb326D020 = hs_wild26D08K.data[4];
        var hs_rb426D01Y = hs_wild26D08K.data[5];
        var hs_sat26D08P = new $hs.Data(1);
        hs_sat26D08P.data = [hs_rb326D020];
        var hs_sat26D08J = new $hs.Data(1);
        hs_sat26D08J.data = [hs_rb426D01Y];
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26D08J, hs_sat26D08P);
    };
    this.hs_isFullBuffer.evaluate = function (hs_ds26D023) {
        var hs_wild26D08R = hs_ds26D023;
        if (hs_ds26D023.notEvaluated) {
            hs_wild26D08R = hs_ds26D023.hscall();
        }
        var hs_rb226D02b = hs_wild26D08R.data[3];
        var hs_rb426D02d = hs_wild26D08R.data[5];
        var hs_sat26D08W = new $hs.Data(1);
        hs_sat26D08W.data = [hs_rb426D02d];
        var hs_sat26D08Q = new $hs.Data(1);
        hs_sat26D08Q.data = [hs_rb226D02b];
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_sat26D08Q, hs_sat26D08W);
    };
    this.hs_isFullCharBuffer.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.GHCziIOziBuffer.hs_isFullBuffer.hscall(hs_eta1cW6l3);
    };
    this.hs_isEmptyBuffer.evaluate = function (hs_ds26D02g) {
        var hs_wild26D08Y = hs_ds26D02g;
        if (hs_ds26D02g.notEvaluated) {
            hs_wild26D08Y = hs_ds26D02g.hscall();
        }
        var hs_rb326D02o = hs_wild26D08Y.data[4];
        var hs_rb426D02q = hs_wild26D08Y.data[5];
        var hs_sat26D093 = new $hs.Data(1);
        hs_sat26D093.data = [hs_rb426D02q];
        var hs_sat26D08X = new $hs.Data(1);
        hs_sat26D08X.data = [hs_rb326D02o];
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_sat26D08X, hs_sat26D093);
    };
    this.hs_withRawBuffer.evaluate = function (hs_raw26D02u, hs_f26D02w) {
        var hs_sat26D094 = new $hs.Thunk();
        hs_sat26D094.evaluateOnce = function () {
            return $hs.modules.GHCziForeignPtr.hs_castForeignPtr.hscall(hs_raw26D02u);
        };
        return $hs.modules.ForeignziForeignPtrziImp.hs_withForeignPtr.hscall(hs_sat26D094, hs_f26D02w);
    };
    this.hs_withBuffer.evaluate = function (hs_ds26D02z, hs_f26D02L) {
        var hs_wild26D096 = hs_ds26D02z;
        if (hs_ds26D02z.notEvaluated) {
            hs_wild26D096 = hs_ds26D02z.hscall();
        }
        var hs_rb26D02H = hs_wild26D096.data[0];
        var hs_rb126D02I = hs_wild26D096.data[1];
        var hs_sat26D095 = new $hs.Thunk();
        hs_sat26D095.evaluateOnce = function () {
            var hs_sat26D09b = new $hs.Data(1);
            hs_sat26D09b.data = [hs_rb26D02H, hs_rb126D02I];
            return $hs.modules.GHCziForeignPtr.hs_castForeignPtr.hscall(hs_sat26D09b);
        };
        return $hs.modules.ForeignziForeignPtrziImp.hs_withForeignPtr.hscall(hs_sat26D095, hs_f26D02L);
    };
    this.hs_charSizze.data = [4];
    this.hs_bufR.evaluate = function (hs_ds26D02N) {
        var hs_wild26D09h = hs_ds26D02N;
        if (hs_ds26D02N.notEvaluated) {
            hs_wild26D09h = hs_ds26D02N.hscall();
        }
        var hs_rb426D02V = hs_wild26D09h.data[5];
        var $res = new $hs.Data(1);
        $res.data = [hs_rb426D02V];
        return $res;
    };
    this.hs_bufL.evaluate = function (hs_ds26D02X) {
        var hs_wild26D09n = hs_ds26D02X;
        if (hs_ds26D02X.notEvaluated) {
            hs_wild26D09n = hs_ds26D02X.hscall();
        }
        var hs_rb326D035 = hs_wild26D09n.data[4];
        var $res = new $hs.Data(1);
        $res.data = [hs_rb326D035];
        return $res;
    };
    this.hs_bufSizze.evaluate = function (hs_ds26D037) {
        var hs_wild26D09t = hs_ds26D037;
        if (hs_ds26D037.notEvaluated) {
            hs_wild26D09t = hs_ds26D037.hscall();
        }
        var hs_rb226D03f = hs_wild26D09t.data[3];
        var $res = new $hs.Data(1);
        $res.data = [hs_rb226D03f];
        return $res;
    };
    this.hs_summaryBuffer.evaluate = function (hs_buf26D03i) {
        var hs_sat26D09v = new $hs.Thunk();
        hs_sat26D09v.evaluateOnce = function () {
            var hs_sat26D09x = new $hs.Thunk();
            hs_sat26D09x.evaluateOnce = function () {
                var hs_sat26D09G = new $hs.Thunk();
                hs_sat26D09G.evaluateOnce = function () {
                    var hs_sat26D09J = new $hs.Thunk();
                    hs_sat26D09J.evaluateOnce = function () {
                        var hs_sat26D09S = new $hs.Thunk();
                        hs_sat26D09S.evaluateOnce = function () {
                            var hs_sat26D09V = new $hs.Data(1);
                            hs_sat26D09V.data = [")"];
                            var hs_sat26D09W = new $hs.Data(2);
                            hs_sat26D09W.data = [hs_sat26D09V, $hs.modules.GHCziTypes.hs_ZMZN];
                            var hs_sat26D09U = new $hs.Thunk();
                            hs_sat26D09U.evaluateOnce = function () {
                                var hs_sat26D09X = new $hs.Thunk();
                                hs_sat26D09X.evaluateOnce = function () {
                                    var hs_wild26D0a3 = hs_buf26D03i;
                                    if (hs_buf26D03i.notEvaluated) {
                                        hs_wild26D0a3 = hs_buf26D03i.hscall();
                                    }
                                    var hs_rb426D03O = hs_wild26D0a3.data[5];
                                    var $res = new $hs.Data(1);
                                    $res.data = [hs_rb426D03O];
                                    return $res;
                                };
                                return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_sat26D09X);
                            };
                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D09U, hs_sat26D09W);
                        };
                        var hs_sat26D09T = new $hs.Data(1);
                        hs_sat26D09T.data = ["-"];
                        var hs_sat26D09R = new $hs.Data(2);
                        hs_sat26D09R.data = [hs_sat26D09T, $hs.modules.GHCziTypes.hs_ZMZN];
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D09R, hs_sat26D09S);
                    };
                    var hs_sat26D09I = new $hs.Thunk();
                    hs_sat26D09I.evaluateOnce = function () {
                        var hs_sat26D09K = new $hs.Thunk();
                        hs_sat26D09K.evaluateOnce = function () {
                            var hs_wild26D09Q = hs_buf26D03i;
                            if (hs_buf26D03i.notEvaluated) {
                                hs_wild26D09Q = hs_buf26D03i.hscall();
                            }
                            var hs_rb326D03C = hs_wild26D09Q.data[4];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb326D03C];
                            return $res;
                        };
                        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_sat26D09K);
                    };
                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D09I, hs_sat26D09J);
                };
                var hs_sat26D09H = new $hs.Data(1);
                hs_sat26D09H.data = ["("];
                var hs_sat26D09F = new $hs.Data(2);
                hs_sat26D09F.data = [hs_sat26D09H, $hs.modules.GHCziTypes.hs_ZMZN];
                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D09F, hs_sat26D09G);
            };
            var hs_sat26D09w = new $hs.Thunk();
            hs_sat26D09w.evaluateOnce = function () {
                var hs_sat26D09y = new $hs.Thunk();
                hs_sat26D09y.evaluateOnce = function () {
                    var hs_wild26D09E = hs_buf26D03i;
                    if (hs_buf26D03i.notEvaluated) {
                        hs_wild26D09E = hs_buf26D03i.hscall();
                    }
                    var hs_rb226D03q = hs_wild26D09E.data[3];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb226D03q];
                    return $res;
                };
                return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_sat26D09y);
            };
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D09w, hs_sat26D09x);
        };
        var hs_sat26D09u = new $hs.Thunk();
        hs_sat26D09u.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("buf\x00");
        };
        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D09u, hs_sat26D09v);
    };
    this.hs_bufState.evaluate = function (hs_ds26D03Z) {
        var hs_wild26D0a9 = hs_ds26D03Z;
        if (hs_ds26D03Z.notEvaluated) {
            hs_wild26D0a9 = hs_ds26D03Z.hscall();
        }
        var hs_ds126D047 = hs_wild26D0a9.data[2];
        if (hs_ds126D047.notEvaluated) {
            return hs_ds126D047.hscall();
        } else {
            return hs_ds126D047;
        }
    };
    this.hs_isWriteBuffer.evaluate = function (hs_buf26D049) {
        var hs_wild26D0ab = hs_buf26D049;
        if (hs_buf26D049.notEvaluated) {
            hs_wild26D0ab = hs_buf26D049.hscall();
        }
        var hs_ds26D04h = hs_wild26D0ab.data[2];
        var hs_wild126D0aa = hs_ds26D04h;
        if (hs_ds26D04h.notEvaluated) {
            hs_wild126D0aa = hs_ds26D04h.hscall();
        }
        switch (hs_wild126D0aa.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    this.hs_bufRaw.evaluate = function (hs_ds26D04k) {
        var hs_wild26D0al = hs_ds26D04k;
        if (hs_ds26D04k.notEvaluated) {
            hs_wild26D0al = hs_ds26D04k.hscall();
        }
        var hs_rb26D04s = hs_wild26D0al.data[0];
        var hs_rb126D04t = hs_wild26D0al.data[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_rb26D04s, hs_rb126D04t];
        return $res;
    };
    hs_zdczeze25uBye.evaluate = function (hs_a26D04x, hs_b26D04z) {
        var hs_wild26D0an = hs_a26D04x;
        if (hs_a26D04x.notEvaluated) {
            hs_wild26D0an = hs_a26D04x.hscall();
        }
        switch (hs_wild26D0an.tag) {
        case 1:
            var hs_wild126D0ao = hs_b26D04z;
            if (hs_b26D04z.notEvaluated) {
                hs_wild126D0ao = hs_b26D04z.hscall();
            }
            switch (hs_wild126D0ao.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_wild126D0am = hs_b26D04z;
            if (hs_b26D04z.notEvaluated) {
                hs_wild126D0am = hs_b26D04z.hscall();
            }
            switch (hs_wild126D0am.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        }
    };
    this.hs_zdfEqBufferState.data = [hs_zdczeze25uBye, hs_zdczsze25uBym];
    hs_zdczsze25uBym.evaluate = function (hs_a26D04F, hs_b26D04G) {
        var hs_sat26D0ap = new $hs.Thunk();
        hs_sat26D0ap.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziBuffer.hs_zdfEqBufferState, hs_a26D04F, hs_b26D04G);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26D0ap);
    };
    this.hs_checkBuffer.evaluate = function (hs_buf26D04J) {
        var hs_wild26D05m = hs_buf26D04J;
        if (hs_buf26D04J.notEvaluated) {
            hs_wild26D05m = hs_buf26D04J.hscall();
        }
        var hs_ds26D055 = hs_wild26D05m.data[2];
        var hs_rb226D04Y = hs_wild26D05m.data[3];
        var hs_rb326D04S = hs_wild26D05m.data[4];
        var hs_rb426D04V = hs_wild26D05m.data[5];
        var hs_r26D04T = new $hs.Data(1);
        hs_r26D04T.data = [hs_rb326D04S];
        var hs_w26D04W = new $hs.Data(1);
        hs_w26D04W.data = [hs_rb426D04V];
        var hs_sizze26D04Z = new $hs.Data(1);
        hs_sizze26D04Z.data = [hs_rb226D04Y];
        var hs_sat26D0as = new $hs.Thunk();
        hs_sat26D0as.evaluateOnce = function () {
            var hs_sat26D0aA = new $hs.Thunk();
            hs_sat26D0aA.evaluateOnce = function () {
                var hs_sat26D0aC = new $hs.Thunk();
                hs_sat26D0aC.evaluateOnce = function () {
                    var hs_sat26D0aE = new $hs.Thunk();
                    hs_sat26D0aE.evaluateOnce = function () {
                        var hs_sat26D0aO = new $hs.Thunk();
                        hs_sat26D0aO.evaluateOnce = function () {
                            return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_w26D04W, hs_sizze26D04Z);
                        };
                        var hs_sat26D0aN = new $hs.Thunk();
                        hs_sat26D0aN.evaluateOnce = function () {
                            return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziIOziBuffer.hs_zdfEqBufferState, hs_ds26D055, $hs.modules.GHCziIOziBuffer.hs_WriteBuffer);
                        };
                        return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26D0aN, hs_sat26D0aO);
                    };
                    var hs_sat26D0aD = new $hs.Thunk();
                    hs_sat26D0aD.evaluateOnce = function () {
                        var hs_sat26D0aG = new $hs.Thunk();
                        hs_sat26D0aG.evaluateOnce = function () {
                            var hs_sat26D0aI = new $hs.Thunk();
                            hs_sat26D0aI.evaluateOnce = function () {
                                var hs_sat26D0aK = new $hs.Thunk();
                                hs_sat26D0aK.evaluateOnce = function () {
                                    var hs_sat26D0aM = new $hs.Data(1);
                                    hs_sat26D0aM.data = [0];
                                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_w26D04W, hs_sat26D0aM);
                                };
                                var hs_sat26D0aJ = new $hs.Thunk();
                                hs_sat26D0aJ.evaluateOnce = function () {
                                    var hs_sat26D0aL = new $hs.Data(1);
                                    hs_sat26D0aL.data = [0];
                                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_r26D04T, hs_sat26D0aL);
                                };
                                return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26D0aJ, hs_sat26D0aK);
                            };
                            var hs_sat26D0aH = new $hs.Thunk();
                            hs_sat26D0aH.evaluateOnce = function () {
                                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziBuffer.hs_zdfEqBufferState, hs_ds26D055, $hs.modules.GHCziIOziBuffer.hs_WriteBuffer);
                            };
                            return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26D0aH, hs_sat26D0aI);
                        };
                        var hs_sat26D0aF = new $hs.Thunk();
                        hs_sat26D0aF.evaluateOnce = function () {
                            return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_r26D04T, hs_w26D04W);
                        };
                        return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26D0aF, hs_sat26D0aG);
                    };
                    return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26D0aD, hs_sat26D0aE);
                };
                var hs_sat26D0aB = new $hs.Thunk();
                hs_sat26D0aB.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_w26D04W, hs_sizze26D04Z);
                };
                return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26D0aB, hs_sat26D0aC);
            };
            var hs_sat26D0az = new $hs.Thunk();
            hs_sat26D0az.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_r26D04T, hs_w26D04W);
            };
            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26D0az, hs_sat26D0aA);
        };
        var hs_sat26D0at = new $hs.Thunk();
        hs_sat26D0at.evaluateOnce = function () {
            var hs_sat26D0ay = new $hs.Data(1);
            hs_sat26D0ay.data = [0];
            return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sizze26D04Z, hs_sat26D0ay);
        };
        var hs_wild126D0au = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26D0at, hs_sat26D0as);
        switch (hs_wild126D0au.tag) {
        case 1:
            var hs_sat26D0av = new $hs.Thunk();
            hs_sat26D0av.evaluateOnce = function () {
                return $hs.modules.GHCziIOziBuffer.hs_summaryBuffer.hscall(hs_wild26D05m);
            };
            var hs_sat26D0aw = new $hs.Thunk();
            hs_sat26D0aw.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("buffer invariant violation: \x00");
            };
            var hs_sat26D0ax = $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D0aw, hs_sat26D0av);
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26D0ax);
        case 2:
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        }
    };
    this.hs_readWord8Buf.evaluate = function (hs_arr26D05r, hs_ix26D05v) {
        var hs_sat26D0aQ = new $hs.Func(1);
        hs_sat26D0aQ.evaluate = function (hs_p26D05u) {
            return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_p26D05u, hs_ix26D05v);
        };
        var hs_sat26D0aP = new $hs.Thunk();
        hs_sat26D0aP.evaluateOnce = function () {
            return $hs.modules.ForeignziForeignPtrziImp.hs_withForeignPtr.hscall(hs_arr26D05r);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D0aP, hs_sat26D0aQ);
    };
    this.hs_writeWord8Buf.evaluate = function (hs_arr26D05A, hs_ix26D05E, hs_w26D05F) {
        var hs_sat26D0aS = new $hs.Func(1);
        hs_sat26D0aS.evaluate = function (hs_p26D05D) {
            return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_p26D05D, hs_ix26D05E, hs_w26D05F);
        };
        var hs_sat26D0aR = new $hs.Thunk();
        hs_sat26D0aR.evaluateOnce = function () {
            return $hs.modules.ForeignziForeignPtrziImp.hs_withForeignPtr.hscall(hs_arr26D05A);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D0aR, hs_sat26D0aS);
    };
    this.hs_readCharBufPtr.evaluate = function (hs_p26D05J, hs_ix26D05L) {
        var hs_sat26D0aU = new $hs.Func(1);
        hs_sat26D0aU.evaluate = function (hs_c26D05O) {
            var hs_sat26D0aX = new $hs.Thunk();
            hs_sat26D0aX.evaluateOnce = function () {
                var hs_sat26D0aY = new $hs.Data(1);
                hs_sat26D0aY.data = [1];
                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ix26D05L, hs_sat26D0aY);
            };
            var hs_sat26D0aW = new $hs.Data(1);
            hs_sat26D0aW.data = [hs_c26D05O, hs_sat26D0aX];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D0aW);
        };
        var hs_sat26D0aT = new $hs.Thunk();
        hs_sat26D0aT.evaluateOnce = function () {
            var hs_sat26D0aV = new $hs.Thunk();
            hs_sat26D0aV.evaluateOnce = function () {
                return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_p26D05J);
            };
            return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableChar, hs_sat26D0aV, hs_ix26D05L);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D0aT, hs_sat26D0aU);
    };
    this.hs_peekCharBuf.evaluate = function (hs_arr26D05V, hs_ix26D060) {
        var hs_sat26D0b0 = new $hs.Func(1);
        hs_sat26D0b0.evaluate = function (hs_p26D05Y) {
            var hs_sat26D0b2 = new $hs.Func(1);
            hs_sat26D0b2.evaluate = function (hs_ds26D06a) {
                var hs_wild26D0ba = hs_ds26D06a;
                if (hs_ds26D06a.notEvaluated) {
                    hs_wild26D0ba = hs_ds26D06a.hscall();
                }
                var hs_c26D06e = hs_wild26D0ba.data[0];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_c26D06e);
            };
            var hs_sat26D0b1 = new $hs.Thunk();
            hs_sat26D0b1.evaluateOnce = function () {
                var hs_sat26D0b4 = new $hs.Func(1);
                hs_sat26D0b4.evaluate = function (hs_c26D063) {
                    var hs_sat26D0b7 = new $hs.Thunk();
                    hs_sat26D0b7.evaluateOnce = function () {
                        var hs_sat26D0b8 = new $hs.Data(1);
                        hs_sat26D0b8.data = [1];
                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ix26D060, hs_sat26D0b8);
                    };
                    var hs_sat26D0b6 = new $hs.Data(1);
                    hs_sat26D0b6.data = [hs_c26D063, hs_sat26D0b7];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D0b6);
                };
                var hs_sat26D0b3 = new $hs.Thunk();
                hs_sat26D0b3.evaluateOnce = function () {
                    var hs_sat26D0b5 = new $hs.Thunk();
                    hs_sat26D0b5.evaluateOnce = function () {
                        return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_p26D05Y);
                    };
                    return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableChar, hs_sat26D0b5, hs_ix26D060);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D0b3, hs_sat26D0b4);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D0b1, hs_sat26D0b2);
        };
        var hs_sat26D0aZ = new $hs.Thunk();
        hs_sat26D0aZ.evaluateOnce = function () {
            return $hs.modules.ForeignziForeignPtrziImp.hs_withForeignPtr.hscall(hs_arr26D05V);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D0aZ, hs_sat26D0b0);
    };
    this.hs_readCharBuf.evaluate = function (hs_arr26D06j, hs_ix26D06n) {
        var hs_sat26D0bc = new $hs.Func(1);
        hs_sat26D0bc.evaluate = function (hs_p26D06m) {
            return $hs.modules.GHCziIOziBuffer.hs_readCharBufPtr.hscall(hs_p26D06m, hs_ix26D06n);
        };
        var hs_sat26D0bb = new $hs.Thunk();
        hs_sat26D0bb.evaluateOnce = function () {
            return $hs.modules.ForeignziForeignPtrziImp.hs_withForeignPtr.hscall(hs_arr26D06j);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D0bb, hs_sat26D0bc);
    };
    this.hs_writeCharBufPtr.evaluate = function (hs_p26D06s, hs_ix26D06u, hs_ch26D06v) {
        var hs_sat26D0be = new $hs.Thunk();
        hs_sat26D0be.evaluateOnce = function () {
            var hs_sat26D0bg = new $hs.Thunk();
            hs_sat26D0bg.evaluateOnce = function () {
                var hs_sat26D0bh = new $hs.Data(1);
                hs_sat26D0bh.data = [1];
                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ix26D06u, hs_sat26D0bh);
            };
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D0bg);
        };
        var hs_sat26D0bd = new $hs.Thunk();
        hs_sat26D0bd.evaluateOnce = function () {
            var hs_sat26D0bf = new $hs.Thunk();
            hs_sat26D0bf.evaluateOnce = function () {
                return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_p26D06s);
            };
            return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableChar, hs_sat26D0bf, hs_ix26D06u, hs_ch26D06v);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D0bd, hs_sat26D0be);
    };
    this.hs_writeCharBuf.evaluate = function (hs_arr26D06D, hs_ix26D06H, hs_c26D06I) {
        var hs_sat26D0bj = new $hs.Func(1);
        hs_sat26D0bj.evaluate = function (hs_p26D06G) {
            return $hs.modules.GHCziIOziBuffer.hs_writeCharBufPtr.hscall(hs_p26D06G, hs_ix26D06H, hs_c26D06I);
        };
        var hs_sat26D0bi = new $hs.Thunk();
        hs_sat26D0bi.evaluateOnce = function () {
            return $hs.modules.ForeignziForeignPtrziImp.hs_withForeignPtr.hscall(hs_arr26D06D);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D0bi, hs_sat26D0bj);
    };
    this.hs_newCharBuffer.evaluate = function (hs_c26D06M, hs_st26D06O) {
        var hs_sat26D0bk = new $hs.Thunk();
        hs_sat26D0bk.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_c26D06M, $hs.modules.GHCziIOziBuffer.hs_charSizze);
        };
        return $hs.modules.GHCziIOziBuffer.hs_newBuffer.hscall(hs_sat26D0bk, hs_c26D06M, hs_st26D06O);
    };
    this.hs_slideContents.evaluate = function (hs_buf26D06Q) {
        var hs_wild26D07G = hs_buf26D06Q;
        if (hs_buf26D06Q.notEvaluated) {
            hs_wild26D07G = hs_buf26D06Q.hscall();
        }
        var hs_rb26D076 = hs_wild26D07G.data[0];
        var hs_rb126D077 = hs_wild26D07G.data[1];
        var hs_rb326D06Z = hs_wild26D07G.data[4];
        var hs_rb426D072 = hs_wild26D07G.data[5];
        var hs_l26D070 = new $hs.Data(1);
        hs_l26D070.data = [hs_rb326D06Z];
        var hs_elems26D074 = new $hs.Thunk();
        hs_elems26D074.evaluateOnce = function () {
            var hs_sat26D0bE = new $hs.Data(1);
            hs_sat26D0bE.data = [hs_rb426D072];
            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26D0bE, hs_l26D070);
        };
        var hs_sat26D0bo = new $hs.Thunk();
        hs_sat26D0bo.evaluateOnce = function () {
            var hs_sat26D0bz = new $hs.Thunk();
            hs_sat26D0bz.evaluateOnce = function () {
                var hs_wild126D0bB = hs_wild26D07G;
                if (hs_wild26D07G.notEvaluated) {
                    hs_wild126D0bB = hs_wild26D07G.hscall();
                }
                var hs_rb526D07Q = hs_wild126D0bB.data[0];
                var hs_rb626D07R = hs_wild126D0bB.data[1];
                var hs_ds126D07S = hs_wild126D0bB.data[2];
                var hs_rb726D07T = hs_wild126D0bB.data[3];
                var hs_tpl26D0bA = hs_elems26D074;
                if (hs_elems26D074.notEvaluated) {
                    hs_tpl26D0bA = hs_elems26D074.hscall();
                }
                var hs_tpl126D07U = hs_tpl26D0bA.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb526D07Q, hs_rb626D07R, hs_ds126D07S, hs_rb726D07T, 0, hs_tpl126D07U];
                return $res;
            };
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D0bz);
        };
        var hs_sat26D0bl = new $hs.Thunk();
        hs_sat26D0bl.evaluateOnce = function () {
            var hs_sat26D0bq = new $hs.Func(1);
            hs_sat26D0bq.evaluate = function (hs_p26D07e) {
                var hs_sat26D0bt = new $hs.Func(1);
                hs_sat26D0bt.evaluate = function (hs_ds126D07C) {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                };
                var hs_sat26D0bs = new $hs.Thunk();
                hs_sat26D0bs.evaluateOnce = function () {
                    var hs_ds126D07h = hs_p26D07e;
                    if (hs_p26D07e.notEvaluated) {
                        hs_ds126D07h = hs_p26D07e.hscall();
                    }
                    var hs_ds226D07o = hs_ds126D07h.data[0];
                    var hs_ds326D0bv = $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ds126D07h, hs_l26D070);
                    var hs_ds426D07p = hs_ds326D0bv.data[0];
                    var hs_ds526D0bw = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_elems26D074);
                    var hs_ds626D07q = hs_ds526D0bw.data[0];
                    var hs_sat26D0bu = new $hs.Func(1);
                    hs_sat26D0bu.evaluate = function (hs_ds726D07r) {
                        var hs_wild126D0by = [hs_ds726D07r, memcpy(hs_ds226D07o, hs_ds426D07p, hs_ds626D07q)];
                        var hs_ds826D07w = hs_wild126D0by[0];
                        var hs_ds926D07x = hs_wild126D0by[1];
                        var hs_sat26D0bx = new $hs.Data(1);
                        hs_sat26D0bx.data = [hs_ds926D07x];
                        return [hs_ds826D07w, hs_sat26D0bx];
                    };
                    if (hs_sat26D0bu.notEvaluated) {
                        return hs_sat26D0bu.hscall();
                    } else {
                        return hs_sat26D0bu;
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D0bs, hs_sat26D0bt);
            };
            var hs_raw26D078 = new $hs.Data(1);
            hs_raw26D078.data = [hs_rb26D076, hs_rb126D077];
            var hs_sat26D0bp = new $hs.Func(1);
            hs_sat26D0bp.evaluate = function (hs_f26D07b) {
                var hs_sat26D0br = new $hs.Thunk();
                hs_sat26D0br.evaluateOnce = function () {
                    return $hs.modules.GHCziForeignPtr.hs_castForeignPtr.hscall(hs_raw26D078);
                };
                return $hs.modules.ForeignziForeignPtrziImp.hs_withForeignPtr.hscall(hs_sat26D0br, hs_f26D07b);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D0bp, hs_sat26D0bq);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D0bl, hs_sat26D0bo);
    };
    this.hs_ReadBuffer.data = [];
    this.hs_WriteBuffer.data = [];
    this.hs_Buffer.evaluate = function (hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
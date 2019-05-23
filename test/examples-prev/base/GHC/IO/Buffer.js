
$hs.modules.GHCziIOziBuffer = new $hs.Module();
$hs.modules.GHCziIOziBuffer.dependencies = ["GHC.Types", "GHC.Unit", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.Show", "GHC.Err", "GHC.Classes", "GHC.ForeignPtr", "GHC.Ptr", "Foreign.C.Types", "Foreign.ForeignPtr", "Foreign.Storable"];
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
    this.hs_zdWBuffer.evaluate = function (hs_tpl26DnVl, hs_tpl26DnVA, hs_tpl26DnVp, hs_tpl26DnVs, hs_tpl26DnVv) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_tpl26DnVl, hs_tpl26DnVA, hs_tpl26DnVp, hs_tpl26DnVs, hs_tpl26DnVv);
    };
    this.hs_emptyBuffer.notEvaluated = true;
    this.hs_emptyBuffer.evaluate = function (hs_raw26DnVH, hs_szz26DnVL, hs_state26DnVQ) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_raw26DnVH, hs_szz26DnVL, hs_state26DnVQ);
    };
    this.hs_newBuffer.notEvaluated = true;
    this.hs_newBuffer.evaluate = function (hs_bytes26DnVV, hs_szz26DnW2, hs_state26DnW7) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_bytes26DnVV, hs_szz26DnW2, hs_state26DnW7);
    };
    this.hs_newByteBuffer.notEvaluated = true;
    this.hs_newByteBuffer.evaluate = function (hs_c26DnWd, hs_st26DnWe) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_c26DnWd, hs_st26DnWe);
    };
    this.hs_bufferAdd.notEvaluated = true;
    this.hs_bufferAdd.evaluate = function (hs_i26DnWz, hs_buf26DnWh) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_i26DnWz, hs_buf26DnWh);
    };
    this.hs_bufferAdjustL.notEvaluated = true;
    this.hs_bufferAdjustL.evaluate = function (hs_l26DnWV, hs_buf26DnWK) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_l26DnWV, hs_buf26DnWK);
    };
    this.hs_bufferRemove.notEvaluated = true;
    this.hs_bufferRemove.evaluate = function (hs_i26DnXC, hs_buf26DnXs) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_i26DnXC, hs_buf26DnXs);
    };
    this.hs_bufferAvailable.notEvaluated = true;
    this.hs_bufferAvailable.evaluate = function (hs_ds26DnXG) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_ds26DnXG);
    };
    this.hs_bufferElems.notEvaluated = true;
    this.hs_bufferElems.evaluate = function (hs_ds26DnXT) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_ds26DnXT);
    };
    this.hs_isFullBuffer.notEvaluated = true;
    this.hs_isFullBuffer.evaluate = function (hs_ds26DnY6) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_ds26DnY6);
    };
    this.hs_isFullCharBuffer.notEvaluated = true;
    this.hs_isFullCharBuffer.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_isEmptyBuffer.notEvaluated = true;
    this.hs_isEmptyBuffer.evaluate = function (hs_ds26DnYj) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_ds26DnYj);
    };
    this.hs_withRawBuffer.notEvaluated = true;
    this.hs_withRawBuffer.evaluate = function (hs_raw26DnYx, hs_f26DnYz) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_raw26DnYx, hs_f26DnYz);
    };
    this.hs_withBuffer.notEvaluated = true;
    this.hs_withBuffer.evaluate = function (hs_ds26DnYC, hs_f26DnYO) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_ds26DnYC, hs_f26DnYO);
    };
    this.hs_charSizze.notEvaluated = true;
    this.hs_charSizze.evaluate = function () {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this;
    };
    this.hs_bufR.notEvaluated = true;
    this.hs_bufR.evaluate = function (hs_ds26DnYQ) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_ds26DnYQ);
    };
    this.hs_bufL.notEvaluated = true;
    this.hs_bufL.evaluate = function (hs_ds26DnZ0) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_ds26DnZ0);
    };
    this.hs_bufSizze.notEvaluated = true;
    this.hs_bufSizze.evaluate = function (hs_ds26DnZa) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_ds26DnZa);
    };
    this.hs_summaryBuffer.notEvaluated = true;
    this.hs_summaryBuffer.evaluate = function (hs_buf26DnZl) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_buf26DnZl);
    };
    this.hs_bufState.notEvaluated = true;
    this.hs_bufState.evaluate = function (hs_ds26Do02) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_ds26Do02);
    };
    this.hs_isWriteBuffer.notEvaluated = true;
    this.hs_isWriteBuffer.evaluate = function (hs_buf26Do0c) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_buf26Do0c);
    };
    this.hs_bufRaw.notEvaluated = true;
    this.hs_bufRaw.evaluate = function (hs_ds26Do0n) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_ds26Do0n);
    };
    this.hs_zdfEqBufferState.notEvaluated = true;
    this.hs_zdfEqBufferState.evaluate = function () {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this;
    };
    this.hs_checkBuffer.notEvaluated = true;
    this.hs_checkBuffer.evaluate = function (hs_buf26Do0O) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_buf26Do0O);
    };
    this.hs_readWord8Buf.notEvaluated = true;
    this.hs_readWord8Buf.evaluate = function (hs_arr26Do1w, hs_ix26Do1A) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_arr26Do1w, hs_ix26Do1A);
    };
    this.hs_writeWord8Buf.notEvaluated = true;
    this.hs_writeWord8Buf.evaluate = function (hs_arr26Do1F, hs_ix26Do1J, hs_w26Do1K) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_arr26Do1F, hs_ix26Do1J, hs_w26Do1K);
    };
    this.hs_readCharBufPtr.notEvaluated = true;
    this.hs_readCharBufPtr.evaluate = function (hs_p26Do1O, hs_ix26Do1Q) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_p26Do1O, hs_ix26Do1Q);
    };
    this.hs_peekCharBuf.notEvaluated = true;
    this.hs_peekCharBuf.evaluate = function (hs_arr26Do20, hs_ix26Do25) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_arr26Do20, hs_ix26Do25);
    };
    this.hs_readCharBuf.notEvaluated = true;
    this.hs_readCharBuf.evaluate = function (hs_arr26Do2o, hs_ix26Do2s) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_arr26Do2o, hs_ix26Do2s);
    };
    this.hs_writeCharBufPtr.notEvaluated = true;
    this.hs_writeCharBufPtr.evaluate = function (hs_p26Do2x, hs_ix26Do2z, hs_ch26Do2A) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_p26Do2x, hs_ix26Do2z, hs_ch26Do2A);
    };
    this.hs_writeCharBuf.notEvaluated = true;
    this.hs_writeCharBuf.evaluate = function (hs_arr26Do2I, hs_ix26Do2M, hs_c26Do2N) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_arr26Do2I, hs_ix26Do2M, hs_c26Do2N);
    };
    this.hs_newCharBuffer.notEvaluated = true;
    this.hs_newCharBuffer.evaluate = function (hs_c26Do2R, hs_st26Do2T) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_c26Do2R, hs_st26Do2T);
    };
    this.hs_slideContents.notEvaluated = true;
    this.hs_slideContents.evaluate = function (hs_buf26Do2V) {
        $hs.modules.GHCziIOziBuffer.loadDependencies();
        return this.evaluate(hs_buf26Do2V);
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
    var hs_zdczeze25uZui = new $hs.Func(2);
    var hs_zdczsze25uZur = new $hs.Func(2);
    this.hs_zdWBuffer.evaluate = function (hs_tpl26DnVl, hs_tpl26DnVA, hs_tpl26DnVp, hs_tpl26DnVs, hs_tpl26DnVv) {
        var hs_tpl26Do44 = hs_tpl26DnVl;
        if (hs_tpl26DnVl.notEvaluated) {
            hs_tpl26Do44 = hs_tpl26DnVl.hscall();
        }
        var hs_tpl26DnVy = hs_tpl26Do44.data[0];
        var hs_tpl26DnVz = hs_tpl26Do44.data[1];
        var hs_tpl26Do43 = hs_tpl26DnVp;
        if (hs_tpl26DnVp.notEvaluated) {
            hs_tpl26Do43 = hs_tpl26DnVp.hscall();
        }
        var hs_tpl26DnVB = hs_tpl26Do43.data[0];
        var hs_tpl26Do42 = hs_tpl26DnVs;
        if (hs_tpl26DnVs.notEvaluated) {
            hs_tpl26Do42 = hs_tpl26DnVs.hscall();
        }
        var hs_tpl26DnVC = hs_tpl26Do42.data[0];
        var hs_tpl26Do41 = hs_tpl26DnVv;
        if (hs_tpl26DnVv.notEvaluated) {
            hs_tpl26Do41 = hs_tpl26DnVv.hscall();
        }
        var hs_tpl26DnVD = hs_tpl26Do41.data[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26DnVy, hs_tpl26DnVz, hs_tpl26DnVA, hs_tpl26DnVB, hs_tpl26DnVC, hs_tpl26DnVD];
        return $res;
    };
    this.hs_emptyBuffer.evaluate = function (hs_raw26DnVH, hs_szz26DnVL, hs_state26DnVQ) {
        var hs_tpl26Do46 = hs_raw26DnVH;
        if (hs_raw26DnVH.notEvaluated) {
            hs_tpl26Do46 = hs_raw26DnVH.hscall();
        }
        var hs_tpl126DnVO = hs_tpl26Do46.data[0];
        var hs_tpl226DnVP = hs_tpl26Do46.data[1];
        var hs_tpl326Do45 = hs_szz26DnVL;
        if (hs_szz26DnVL.notEvaluated) {
            hs_tpl326Do45 = hs_szz26DnVL.hscall();
        }
        var hs_tpl426DnVR = hs_tpl326Do45.data[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl126DnVO, hs_tpl226DnVP, hs_state26DnVQ, hs_tpl426DnVR, 0, 0];
        return $res;
    };
    this.hs_newBuffer.evaluate = function (hs_bytes26DnVV, hs_szz26DnW2, hs_state26DnW7) {
        var hs_sat26Do4a = new $hs.Func(1);
        hs_sat26Do4a.evaluate = function (hs_fp26DnVY) {
            var hs_sat26Do49 = new $hs.Thunk();
            hs_sat26Do49.evaluateOnce = function () {
                var hs_tpl26Do48 = hs_fp26DnVY;
                if (hs_fp26DnVY.notEvaluated) {
                    hs_tpl26Do48 = hs_fp26DnVY.hscall();
                }
                var hs_tpl126DnW5 = hs_tpl26Do48.data[0];
                var hs_tpl226DnW6 = hs_tpl26Do48.data[1];
                var hs_tpl326Do47 = hs_szz26DnW2;
                if (hs_szz26DnW2.notEvaluated) {
                    hs_tpl326Do47 = hs_szz26DnW2.hscall();
                }
                var hs_tpl426DnW8 = hs_tpl326Do47.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_tpl126DnW5, hs_tpl226DnW6, hs_state26DnW7, hs_tpl426DnW8, 0, 0];
                return $res;
            };
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Do49);
        };
        var hs_sat26Do4b = new $hs.Thunk();
        hs_sat26Do4b.evaluateOnce = function () {
            return $hs.modules.GHCziForeignPtr.hs_mallocForeignPtrBytes.hscall(hs_bytes26DnVV);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Do4b, hs_sat26Do4a);
    };
    this.hs_newByteBuffer.evaluate = function (hs_c26DnWd, hs_st26DnWe) {
        return $hs.modules.GHCziIOziBuffer.hs_newBuffer.hscall(hs_c26DnWd, hs_c26DnWd, hs_st26DnWe);
    };
    this.hs_bufferAdd.evaluate = function (hs_i26DnWz, hs_buf26DnWh) {
        var hs_wild26DnWp = hs_buf26DnWh;
        if (hs_buf26DnWh.notEvaluated) {
            hs_wild26DnWp = hs_buf26DnWh.hscall();
        }
        var hs_rb426DnWx = hs_wild26DnWp.data[5];
        var hs_wild126Do4c = hs_wild26DnWp;
        if (hs_wild26DnWp.notEvaluated) {
            hs_wild126Do4c = hs_wild26DnWp.hscall();
        }
        var hs_rb526DnWC = hs_wild126Do4c.data[0];
        var hs_rb626DnWD = hs_wild126Do4c.data[1];
        var hs_ds126DnWE = hs_wild126Do4c.data[2];
        var hs_rb726DnWF = hs_wild126Do4c.data[3];
        var hs_rb826DnWG = hs_wild126Do4c.data[4];
        var hs_sat26Do4k = new $hs.Data(1);
        hs_sat26Do4k.data = [hs_rb426DnWx];
        var hs_tpl26Do4j = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Do4k, hs_i26DnWz);
        var hs_tpl126DnWH = hs_tpl26Do4j.data[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_rb526DnWC, hs_rb626DnWD, hs_ds126DnWE, hs_rb726DnWF, hs_rb826DnWG, hs_tpl126DnWH];
        return $res;
    };
    this.hs_bufferAdjustL.evaluate = function (hs_l26DnWV, hs_buf26DnWK) {
        var hs_wild26DnWX = hs_buf26DnWK;
        if (hs_buf26DnWK.notEvaluated) {
            hs_wild26DnWX = hs_buf26DnWK.hscall();
        }
        var hs_rb426DnWT = hs_wild26DnWX.data[5];
        var hs_w26DnWU = new $hs.Data(1);
        hs_w26DnWU.data = [hs_rb426DnWT];
        var hs_wild126Do4t = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_l26DnWV, hs_w26DnWU);
        switch (hs_wild126Do4t.tag) {
        case 1:
            var hs_wild226Do4s = hs_wild26DnWX;
            if (hs_wild26DnWX.notEvaluated) {
                hs_wild226Do4s = hs_wild26DnWX.hscall();
            }
            var hs_rb526DnX9 = hs_wild226Do4s.data[0];
            var hs_rb626DnXa = hs_wild226Do4s.data[1];
            var hs_ds126DnXb = hs_wild226Do4s.data[2];
            var hs_rb726DnXc = hs_wild226Do4s.data[3];
            var hs_tpl26Do4r = hs_l26DnWV;
            if (hs_l26DnWV.notEvaluated) {
                hs_tpl26Do4r = hs_l26DnWV.hscall();
            }
            var hs_tpl126DnXd = hs_tpl26Do4r.data[0];
            var hs_tpl226Do4q = hs_w26DnWU;
            if (hs_w26DnWU.notEvaluated) {
                hs_tpl226Do4q = hs_w26DnWU.hscall();
            }
            var hs_tpl326DnXe = hs_tpl226Do4q.data[0];
            var $res = new $hs.Data(1);
            $res.data = [hs_rb526DnX9, hs_rb626DnXa, hs_ds126DnXb, hs_rb726DnXc, hs_tpl126DnXd, hs_tpl326DnXe];
            return $res;
        case 2:
            var hs_wild226Do4w = hs_wild26DnWX;
            if (hs_wild26DnWX.notEvaluated) {
                hs_wild226Do4w = hs_wild26DnWX.hscall();
            }
            var hs_rb526DnXm = hs_wild226Do4w.data[0];
            var hs_rb626DnXn = hs_wild226Do4w.data[1];
            var hs_ds126DnXo = hs_wild226Do4w.data[2];
            var hs_rb726DnXp = hs_wild226Do4w.data[3];
            var $res = new $hs.Data(1);
            $res.data = [hs_rb526DnXm, hs_rb626DnXn, hs_ds126DnXo, hs_rb726DnXp, 0, 0];
            return $res;
        }
    };
    this.hs_bufferRemove.evaluate = function (hs_i26DnXC, hs_buf26DnXs) {
        var hs_wild26DnXE = hs_buf26DnXs;
        if (hs_buf26DnXs.notEvaluated) {
            hs_wild26DnXE = hs_buf26DnXs.hscall();
        }
        var hs_rb326DnXA = hs_wild26DnXE.data[4];
        var hs_sat26Do4F = new $hs.Thunk();
        hs_sat26Do4F.evaluateOnce = function () {
            var hs_sat26Do4E = new $hs.Data(1);
            hs_sat26Do4E.data = [hs_rb326DnXA];
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Do4E, hs_i26DnXC);
        };
        return $hs.modules.GHCziIOziBuffer.hs_bufferAdjustL.hscall(hs_sat26Do4F, hs_wild26DnXE);
    };
    this.hs_bufferAvailable.evaluate = function (hs_ds26DnXG) {
        var hs_wild26Do4H = hs_ds26DnXG;
        if (hs_ds26DnXG.notEvaluated) {
            hs_wild26Do4H = hs_ds26DnXG.hscall();
        }
        var hs_rb226DnXO = hs_wild26Do4H.data[3];
        var hs_rb426DnXQ = hs_wild26Do4H.data[5];
        var hs_sat26Do4L = new $hs.Data(1);
        hs_sat26Do4L.data = [hs_rb426DnXQ];
        var hs_sat26Do4M = new $hs.Data(1);
        hs_sat26Do4M.data = [hs_rb226DnXO];
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Do4M, hs_sat26Do4L);
    };
    this.hs_bufferElems.evaluate = function (hs_ds26DnXT) {
        var hs_wild26Do4O = hs_ds26DnXT;
        if (hs_ds26DnXT.notEvaluated) {
            hs_wild26Do4O = hs_ds26DnXT.hscall();
        }
        var hs_rb326DnY3 = hs_wild26Do4O.data[4];
        var hs_rb426DnY1 = hs_wild26Do4O.data[5];
        var hs_sat26Do4S = new $hs.Data(1);
        hs_sat26Do4S.data = [hs_rb326DnY3];
        var hs_sat26Do4T = new $hs.Data(1);
        hs_sat26Do4T.data = [hs_rb426DnY1];
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Do4T, hs_sat26Do4S);
    };
    this.hs_isFullBuffer.evaluate = function (hs_ds26DnY6) {
        var hs_wild26Do4V = hs_ds26DnY6;
        if (hs_ds26DnY6.notEvaluated) {
            hs_wild26Do4V = hs_ds26DnY6.hscall();
        }
        var hs_rb226DnYe = hs_wild26Do4V.data[3];
        var hs_rb426DnYg = hs_wild26Do4V.data[5];
        var hs_sat26Do4Z = new $hs.Data(1);
        hs_sat26Do4Z.data = [hs_rb426DnYg];
        var hs_sat26Do50 = new $hs.Data(1);
        hs_sat26Do50.data = [hs_rb226DnYe];
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_sat26Do50, hs_sat26Do4Z);
    };
    this.hs_isFullCharBuffer.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.GHCziIOziBuffer.hs_isFullBuffer.hscall(hs_eta1cW6l3);
    };
    this.hs_isEmptyBuffer.evaluate = function (hs_ds26DnYj) {
        var hs_wild26Do52 = hs_ds26DnYj;
        if (hs_ds26DnYj.notEvaluated) {
            hs_wild26Do52 = hs_ds26DnYj.hscall();
        }
        var hs_rb326DnYr = hs_wild26Do52.data[4];
        var hs_rb426DnYt = hs_wild26Do52.data[5];
        var hs_sat26Do56 = new $hs.Data(1);
        hs_sat26Do56.data = [hs_rb426DnYt];
        var hs_sat26Do57 = new $hs.Data(1);
        hs_sat26Do57.data = [hs_rb326DnYr];
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_sat26Do57, hs_sat26Do56);
    };
    this.hs_withRawBuffer.evaluate = function (hs_raw26DnYx, hs_f26DnYz) {
        var hs_sat26Do58 = new $hs.Thunk();
        hs_sat26Do58.evaluateOnce = function () {
            return $hs.modules.GHCziForeignPtr.hs_castForeignPtr.hscall(hs_raw26DnYx);
        };
        return $hs.modules.ForeignziForeignPtr.hs_withForeignPtr.hscall(hs_sat26Do58, hs_f26DnYz);
    };
    this.hs_withBuffer.evaluate = function (hs_ds26DnYC, hs_f26DnYO) {
        var hs_wild26Do59 = hs_ds26DnYC;
        if (hs_ds26DnYC.notEvaluated) {
            hs_wild26Do59 = hs_ds26DnYC.hscall();
        }
        var hs_rb26DnYK = hs_wild26Do59.data[0];
        var hs_rb126DnYL = hs_wild26Do59.data[1];
        var hs_sat26Do5f = new $hs.Thunk();
        hs_sat26Do5f.evaluateOnce = function () {
            var hs_sat26Do5e = new $hs.Data(1);
            hs_sat26Do5e.data = [hs_rb26DnYK, hs_rb126DnYL];
            return $hs.modules.GHCziForeignPtr.hs_castForeignPtr.hscall(hs_sat26Do5e);
        };
        return $hs.modules.ForeignziForeignPtr.hs_withForeignPtr.hscall(hs_sat26Do5f, hs_f26DnYO);
    };
    this.hs_charSizze.data = [4];
    this.hs_bufR.evaluate = function (hs_ds26DnYQ) {
        var hs_wild26Do5h = hs_ds26DnYQ;
        if (hs_ds26DnYQ.notEvaluated) {
            hs_wild26Do5h = hs_ds26DnYQ.hscall();
        }
        var hs_rb426DnYY = hs_wild26Do5h.data[5];
        var $res = new $hs.Data(1);
        $res.data = [hs_rb426DnYY];
        return $res;
    };
    this.hs_bufL.evaluate = function (hs_ds26DnZ0) {
        var hs_wild26Do5n = hs_ds26DnZ0;
        if (hs_ds26DnZ0.notEvaluated) {
            hs_wild26Do5n = hs_ds26DnZ0.hscall();
        }
        var hs_rb326DnZ8 = hs_wild26Do5n.data[4];
        var $res = new $hs.Data(1);
        $res.data = [hs_rb326DnZ8];
        return $res;
    };
    this.hs_bufSizze.evaluate = function (hs_ds26DnZa) {
        var hs_wild26Do5t = hs_ds26DnZa;
        if (hs_ds26DnZa.notEvaluated) {
            hs_wild26Do5t = hs_ds26DnZa.hscall();
        }
        var hs_rb226DnZi = hs_wild26Do5t.data[3];
        var $res = new $hs.Data(1);
        $res.data = [hs_rb226DnZi];
        return $res;
    };
    this.hs_summaryBuffer.evaluate = function (hs_buf26DnZl) {
        var hs_sat26Do66 = new $hs.Thunk();
        hs_sat26Do66.evaluateOnce = function () {
            var hs_sat26Do5Z = new $hs.Thunk();
            hs_sat26Do5Z.evaluateOnce = function () {
                var hs_sat26Do5U = new $hs.Thunk();
                hs_sat26Do5U.evaluateOnce = function () {
                    var hs_sat26Do5N = new $hs.Thunk();
                    hs_sat26Do5N.evaluateOnce = function () {
                        var hs_sat26Do5I = new $hs.Thunk();
                        hs_sat26Do5I.evaluateOnce = function () {
                            var hs_sat26Do5y = new $hs.Data(1);
                            hs_sat26Do5y.data = [")"];
                            var hs_sat26Do5B = new $hs.Data(2);
                            hs_sat26Do5B.data = [hs_sat26Do5y, $hs.modules.GHCziTypes.hs_ZMZN];
                            var hs_sat26Do5H = new $hs.Thunk();
                            hs_sat26Do5H.evaluateOnce = function () {
                                var hs_sat26Do5G = new $hs.Thunk();
                                hs_sat26Do5G.evaluateOnce = function () {
                                    var hs_wild26Do5A = hs_buf26DnZl;
                                    if (hs_buf26DnZl.notEvaluated) {
                                        hs_wild26Do5A = hs_buf26DnZl.hscall();
                                    }
                                    var hs_rb426DnZR = hs_wild26Do5A.data[5];
                                    var $res = new $hs.Data(1);
                                    $res.data = [hs_rb426DnZR];
                                    return $res;
                                };
                                return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_sat26Do5G);
                            };
                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Do5H, hs_sat26Do5B);
                        };
                        var hs_sat26Do5J = new $hs.Data(1);
                        hs_sat26Do5J.data = ["-"];
                        var hs_sat26Do5K = new $hs.Data(2);
                        hs_sat26Do5K.data = [hs_sat26Do5J, $hs.modules.GHCziTypes.hs_ZMZN];
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Do5K, hs_sat26Do5I);
                    };
                    var hs_sat26Do5T = new $hs.Thunk();
                    hs_sat26Do5T.evaluateOnce = function () {
                        var hs_sat26Do5S = new $hs.Thunk();
                        hs_sat26Do5S.evaluateOnce = function () {
                            var hs_wild26Do5M = hs_buf26DnZl;
                            if (hs_buf26DnZl.notEvaluated) {
                                hs_wild26Do5M = hs_buf26DnZl.hscall();
                            }
                            var hs_rb326DnZF = hs_wild26Do5M.data[4];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb326DnZF];
                            return $res;
                        };
                        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_sat26Do5S);
                    };
                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Do5T, hs_sat26Do5N);
                };
                var hs_sat26Do5V = new $hs.Data(1);
                hs_sat26Do5V.data = ["("];
                var hs_sat26Do5W = new $hs.Data(2);
                hs_sat26Do5W.data = [hs_sat26Do5V, $hs.modules.GHCziTypes.hs_ZMZN];
                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Do5W, hs_sat26Do5U);
            };
            var hs_sat26Do65 = new $hs.Thunk();
            hs_sat26Do65.evaluateOnce = function () {
                var hs_sat26Do64 = new $hs.Thunk();
                hs_sat26Do64.evaluateOnce = function () {
                    var hs_wild26Do5Y = hs_buf26DnZl;
                    if (hs_buf26DnZl.notEvaluated) {
                        hs_wild26Do5Y = hs_buf26DnZl.hscall();
                    }
                    var hs_rb226DnZt = hs_wild26Do5Y.data[3];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb226DnZt];
                    return $res;
                };
                return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_sat26Do64);
            };
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Do65, hs_sat26Do5Z);
        };
        var hs_sat26Do67 = new $hs.Thunk();
        hs_sat26Do67.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("buf\x00");
        };
        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Do67, hs_sat26Do66);
    };
    this.hs_bufState.evaluate = function (hs_ds26Do02) {
        var hs_wild26Do69 = hs_ds26Do02;
        if (hs_ds26Do02.notEvaluated) {
            hs_wild26Do69 = hs_ds26Do02.hscall();
        }
        var hs_ds126Do0a = hs_wild26Do69.data[2];
        if (hs_ds126Do0a.notEvaluated) {
            return hs_ds126Do0a.hscall();
        } else {
            return hs_ds126Do0a;
        }
    };
    this.hs_isWriteBuffer.evaluate = function (hs_buf26Do0c) {
        var hs_wild26Do6g = hs_buf26Do0c;
        if (hs_buf26Do0c.notEvaluated) {
            hs_wild26Do6g = hs_buf26Do0c.hscall();
        }
        var hs_ds26Do0k = hs_wild26Do6g.data[2];
        var hs_wild126Do6e = hs_ds26Do0k;
        if (hs_ds26Do0k.notEvaluated) {
            hs_wild126Do6e = hs_ds26Do0k.hscall();
        }
        switch (hs_wild126Do6e.tag) {
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
    this.hs_bufRaw.evaluate = function (hs_ds26Do0n) {
        var hs_wild26Do6l = hs_ds26Do0n;
        if (hs_ds26Do0n.notEvaluated) {
            hs_wild26Do6l = hs_ds26Do0n.hscall();
        }
        var hs_rb26Do0v = hs_wild26Do6l.data[0];
        var hs_rb126Do0w = hs_wild26Do6l.data[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_rb26Do0v, hs_rb126Do0w];
        return $res;
    };
    hs_zdczeze25uZui.evaluate = function (hs_a26Do0B, hs_b26Do0D) {
        var hs_wild26Do6r = hs_a26Do0B;
        if (hs_a26Do0B.notEvaluated) {
            hs_wild26Do6r = hs_a26Do0B.hscall();
        }
        switch (hs_wild26Do6r.tag) {
        case 1:
            var hs_wild126Do6q = hs_b26Do0D;
            if (hs_b26Do0D.notEvaluated) {
                hs_wild126Do6q = hs_b26Do0D.hscall();
            }
            switch (hs_wild126Do6q.tag) {
            case 1:
                return 0 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 0 == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 2:
            var hs_wild126Do6s = hs_b26Do0D;
            if (hs_b26Do0D.notEvaluated) {
                hs_wild126Do6s = hs_b26Do0D.hscall();
            }
            switch (hs_wild126Do6s.tag) {
            case 1:
                return 1 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 1 == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        }
    };
    this.hs_zdfEqBufferState.data = [hs_zdczeze25uZui, hs_zdczsze25uZur];
    hs_zdczsze25uZur.evaluate = function (hs_a26Do0K, hs_b26Do0L) {
        var hs_sat26Do6t = new $hs.Thunk();
        hs_sat26Do6t.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziBuffer.hs_zdfEqBufferState, hs_a26Do0K, hs_b26Do0L);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26Do6t);
    };
    this.hs_checkBuffer.evaluate = function (hs_buf26Do0O) {
        var hs_wild26Do1r = hs_buf26Do0O;
        if (hs_buf26Do0O.notEvaluated) {
            hs_wild26Do1r = hs_buf26Do0O.hscall();
        }
        var hs_ds26Do1a = hs_wild26Do1r.data[2];
        var hs_rb226Do13 = hs_wild26Do1r.data[3];
        var hs_rb326Do0X = hs_wild26Do1r.data[4];
        var hs_rb426Do10 = hs_wild26Do1r.data[5];
        var hs_r26Do0Y = new $hs.Data(1);
        hs_r26Do0Y.data = [hs_rb326Do0X];
        var hs_w26Do11 = new $hs.Data(1);
        hs_w26Do11.data = [hs_rb426Do10];
        var hs_sizze26Do14 = new $hs.Data(1);
        hs_sizze26Do14.data = [hs_rb226Do13];
        var hs_sat26Do6M = new $hs.Thunk();
        hs_sat26Do6M.evaluateOnce = function () {
            var hs_sat26Do6K = new $hs.Thunk();
            hs_sat26Do6K.evaluateOnce = function () {
                var hs_sat26Do6I = new $hs.Thunk();
                hs_sat26Do6I.evaluateOnce = function () {
                    var hs_sat26Do6y = new $hs.Thunk();
                    hs_sat26Do6y.evaluateOnce = function () {
                        var hs_sat26Do6w = new $hs.Thunk();
                        hs_sat26Do6w.evaluateOnce = function () {
                            return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_w26Do11, hs_sizze26Do14);
                        };
                        var hs_sat26Do6x = new $hs.Thunk();
                        hs_sat26Do6x.evaluateOnce = function () {
                            return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziIOziBuffer.hs_zdfEqBufferState, hs_ds26Do1a, $hs.modules.GHCziIOziBuffer.hs_WriteBuffer);
                        };
                        return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26Do6x, hs_sat26Do6w);
                    };
                    var hs_sat26Do6H = new $hs.Thunk();
                    hs_sat26Do6H.evaluateOnce = function () {
                        var hs_sat26Do6F = new $hs.Thunk();
                        hs_sat26Do6F.evaluateOnce = function () {
                            var hs_sat26Do6D = new $hs.Thunk();
                            hs_sat26Do6D.evaluateOnce = function () {
                                var hs_sat26Do6A = new $hs.Thunk();
                                hs_sat26Do6A.evaluateOnce = function () {
                                    var hs_sat26Do6z = new $hs.Data(1);
                                    hs_sat26Do6z.data = [0];
                                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_w26Do11, hs_sat26Do6z);
                                };
                                var hs_sat26Do6C = new $hs.Thunk();
                                hs_sat26Do6C.evaluateOnce = function () {
                                    var hs_sat26Do6B = new $hs.Data(1);
                                    hs_sat26Do6B.data = [0];
                                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_r26Do0Y, hs_sat26Do6B);
                                };
                                return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Do6C, hs_sat26Do6A);
                            };
                            var hs_sat26Do6E = new $hs.Thunk();
                            hs_sat26Do6E.evaluateOnce = function () {
                                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziBuffer.hs_zdfEqBufferState, hs_ds26Do1a, $hs.modules.GHCziIOziBuffer.hs_WriteBuffer);
                            };
                            return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26Do6E, hs_sat26Do6D);
                        };
                        var hs_sat26Do6G = new $hs.Thunk();
                        hs_sat26Do6G.evaluateOnce = function () {
                            return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_r26Do0Y, hs_w26Do11);
                        };
                        return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26Do6G, hs_sat26Do6F);
                    };
                    return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Do6H, hs_sat26Do6y);
                };
                var hs_sat26Do6J = new $hs.Thunk();
                hs_sat26Do6J.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_w26Do11, hs_sizze26Do14);
                };
                return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Do6J, hs_sat26Do6I);
            };
            var hs_sat26Do6L = new $hs.Thunk();
            hs_sat26Do6L.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_r26Do0Y, hs_w26Do11);
            };
            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Do6L, hs_sat26Do6K);
        };
        var hs_sat26Do6P = new $hs.Thunk();
        hs_sat26Do6P.evaluateOnce = function () {
            var hs_sat26Do6N = new $hs.Data(1);
            hs_sat26Do6N.data = [0];
            return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_sizze26Do14, hs_sat26Do6N);
        };
        var hs_wild126Do6O = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Do6P, hs_sat26Do6M);
        switch (hs_wild126Do6O.tag) {
        case 1:
            var hs_sat26Do6Q = new $hs.Thunk();
            hs_sat26Do6Q.evaluateOnce = function () {
                return $hs.modules.GHCziIOziBuffer.hs_summaryBuffer.hscall(hs_wild26Do1r);
            };
            var hs_sat26Do6S = new $hs.Thunk();
            hs_sat26Do6S.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("buffer invariant violation: \x00");
            };
            var hs_sat26Do6R = $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Do6S, hs_sat26Do6Q);
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26Do6R);
        case 2:
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        }
    };
    this.hs_readWord8Buf.evaluate = function (hs_arr26Do1w, hs_ix26Do1A) {
        var hs_sat26Do6T = new $hs.Func(1);
        hs_sat26Do6T.evaluate = function (hs_p26Do1z) {
            return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_p26Do1z, hs_ix26Do1A);
        };
        var hs_sat26Do6U = new $hs.Thunk();
        hs_sat26Do6U.evaluateOnce = function () {
            return $hs.modules.ForeignziForeignPtr.hs_withForeignPtr.hscall(hs_arr26Do1w);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Do6U, hs_sat26Do6T);
    };
    this.hs_writeWord8Buf.evaluate = function (hs_arr26Do1F, hs_ix26Do1J, hs_w26Do1K) {
        var hs_sat26Do6V = new $hs.Func(1);
        hs_sat26Do6V.evaluate = function (hs_p26Do1I) {
            return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_p26Do1I, hs_ix26Do1J, hs_w26Do1K);
        };
        var hs_sat26Do6W = new $hs.Thunk();
        hs_sat26Do6W.evaluateOnce = function () {
            return $hs.modules.ForeignziForeignPtr.hs_withForeignPtr.hscall(hs_arr26Do1F);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Do6W, hs_sat26Do6V);
    };
    this.hs_readCharBufPtr.evaluate = function (hs_p26Do1O, hs_ix26Do1Q) {
        var hs_sat26Do70 = new $hs.Func(1);
        hs_sat26Do70.evaluate = function (hs_c26Do1T) {
            var hs_sat26Do6Y = new $hs.Thunk();
            hs_sat26Do6Y.evaluateOnce = function () {
                var hs_sat26Do6X = new $hs.Data(1);
                hs_sat26Do6X.data = [1];
                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ix26Do1Q, hs_sat26Do6X);
            };
            var hs_sat26Do6Z = new $hs.Data(1);
            hs_sat26Do6Z.data = [hs_c26Do1T, hs_sat26Do6Y];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Do6Z);
        };
        var hs_sat26Do72 = new $hs.Thunk();
        hs_sat26Do72.evaluateOnce = function () {
            var hs_sat26Do71 = new $hs.Thunk();
            hs_sat26Do71.evaluateOnce = function () {
                return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_p26Do1O);
            };
            return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableChar, hs_sat26Do71, hs_ix26Do1Q);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Do72, hs_sat26Do70);
    };
    this.hs_peekCharBuf.evaluate = function (hs_arr26Do20, hs_ix26Do25) {
        var hs_sat26Do7d = new $hs.Func(1);
        hs_sat26Do7d.evaluate = function (hs_p26Do23) {
            var hs_sat26Do75 = new $hs.Func(1);
            hs_sat26Do75.evaluate = function (hs_ds26Do2f) {
                var hs_wild26Do73 = hs_ds26Do2f;
                if (hs_ds26Do2f.notEvaluated) {
                    hs_wild26Do73 = hs_ds26Do2f.hscall();
                }
                var hs_c26Do2j = hs_wild26Do73.data[0];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_c26Do2j);
            };
            var hs_sat26Do7c = new $hs.Thunk();
            hs_sat26Do7c.evaluateOnce = function () {
                var hs_sat26Do79 = new $hs.Func(1);
                hs_sat26Do79.evaluate = function (hs_c26Do28) {
                    var hs_sat26Do77 = new $hs.Thunk();
                    hs_sat26Do77.evaluateOnce = function () {
                        var hs_sat26Do76 = new $hs.Data(1);
                        hs_sat26Do76.data = [1];
                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ix26Do25, hs_sat26Do76);
                    };
                    var hs_sat26Do78 = new $hs.Data(1);
                    hs_sat26Do78.data = [hs_c26Do28, hs_sat26Do77];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Do78);
                };
                var hs_sat26Do7b = new $hs.Thunk();
                hs_sat26Do7b.evaluateOnce = function () {
                    var hs_sat26Do7a = new $hs.Thunk();
                    hs_sat26Do7a.evaluateOnce = function () {
                        return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_p26Do23);
                    };
                    return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableChar, hs_sat26Do7a, hs_ix26Do25);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Do7b, hs_sat26Do79);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Do7c, hs_sat26Do75);
        };
        var hs_sat26Do7e = new $hs.Thunk();
        hs_sat26Do7e.evaluateOnce = function () {
            return $hs.modules.ForeignziForeignPtr.hs_withForeignPtr.hscall(hs_arr26Do20);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Do7e, hs_sat26Do7d);
    };
    this.hs_readCharBuf.evaluate = function (hs_arr26Do2o, hs_ix26Do2s) {
        var hs_sat26Do7f = new $hs.Func(1);
        hs_sat26Do7f.evaluate = function (hs_p26Do2r) {
            return $hs.modules.GHCziIOziBuffer.hs_readCharBufPtr.hscall(hs_p26Do2r, hs_ix26Do2s);
        };
        var hs_sat26Do7g = new $hs.Thunk();
        hs_sat26Do7g.evaluateOnce = function () {
            return $hs.modules.ForeignziForeignPtr.hs_withForeignPtr.hscall(hs_arr26Do2o);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Do7g, hs_sat26Do7f);
    };
    this.hs_writeCharBufPtr.evaluate = function (hs_p26Do2x, hs_ix26Do2z, hs_ch26Do2A) {
        var hs_sat26Do7j = new $hs.Thunk();
        hs_sat26Do7j.evaluateOnce = function () {
            var hs_sat26Do7i = new $hs.Thunk();
            hs_sat26Do7i.evaluateOnce = function () {
                var hs_sat26Do7h = new $hs.Data(1);
                hs_sat26Do7h.data = [1];
                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ix26Do2z, hs_sat26Do7h);
            };
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Do7i);
        };
        var hs_sat26Do7l = new $hs.Thunk();
        hs_sat26Do7l.evaluateOnce = function () {
            var hs_sat26Do7k = new $hs.Thunk();
            hs_sat26Do7k.evaluateOnce = function () {
                return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_p26Do2x);
            };
            return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableChar, hs_sat26Do7k, hs_ix26Do2z, hs_ch26Do2A);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Do7l, hs_sat26Do7j);
    };
    this.hs_writeCharBuf.evaluate = function (hs_arr26Do2I, hs_ix26Do2M, hs_c26Do2N) {
        var hs_sat26Do7m = new $hs.Func(1);
        hs_sat26Do7m.evaluate = function (hs_p26Do2L) {
            return $hs.modules.GHCziIOziBuffer.hs_writeCharBufPtr.hscall(hs_p26Do2L, hs_ix26Do2M, hs_c26Do2N);
        };
        var hs_sat26Do7n = new $hs.Thunk();
        hs_sat26Do7n.evaluateOnce = function () {
            return $hs.modules.ForeignziForeignPtr.hs_withForeignPtr.hscall(hs_arr26Do2I);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Do7n, hs_sat26Do7m);
    };
    this.hs_newCharBuffer.evaluate = function (hs_c26Do2R, hs_st26Do2T) {
        var hs_sat26Do7o = new $hs.Thunk();
        hs_sat26Do7o.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_c26Do2R, $hs.modules.GHCziIOziBuffer.hs_charSizze);
        };
        return $hs.modules.GHCziIOziBuffer.hs_newBuffer.hscall(hs_sat26Do7o, hs_c26Do2R, hs_st26Do2T);
    };
    this.hs_slideContents.evaluate = function (hs_buf26Do2V) {
        var hs_wild26Do3K = hs_buf26Do2V;
        if (hs_buf26Do2V.notEvaluated) {
            hs_wild26Do3K = hs_buf26Do2V.hscall();
        }
        var hs_rb26Do3b = hs_wild26Do3K.data[0];
        var hs_rb126Do3c = hs_wild26Do3K.data[1];
        var hs_rb326Do34 = hs_wild26Do3K.data[4];
        var hs_rb426Do37 = hs_wild26Do3K.data[5];
        var hs_l26Do35 = new $hs.Data(1);
        hs_l26Do35.data = [hs_rb326Do34];
        var hs_elems26Do39 = new $hs.Thunk();
        hs_elems26Do39.evaluateOnce = function () {
            var hs_sat26Do7r = new $hs.Data(1);
            hs_sat26Do7r.data = [hs_rb426Do37];
            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Do7r, hs_l26Do35);
        };
        var hs_sat26Do7y = new $hs.Thunk();
        hs_sat26Do7y.evaluateOnce = function () {
            var hs_sat26Do7w = new $hs.Thunk();
            hs_sat26Do7w.evaluateOnce = function () {
                var hs_wild126Do7t = hs_wild26Do3K;
                if (hs_wild26Do3K.notEvaluated) {
                    hs_wild126Do7t = hs_wild26Do3K.hscall();
                }
                var hs_rb526Do3U = hs_wild126Do7t.data[0];
                var hs_rb626Do3V = hs_wild126Do7t.data[1];
                var hs_ds126Do3W = hs_wild126Do7t.data[2];
                var hs_rb726Do3X = hs_wild126Do7t.data[3];
                var hs_tpl26Do7s = hs_elems26Do39;
                if (hs_elems26Do39.notEvaluated) {
                    hs_tpl26Do7s = hs_elems26Do39.hscall();
                }
                var hs_tpl126Do3Y = hs_tpl26Do7s.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb526Do3U, hs_rb626Do3V, hs_ds126Do3W, hs_rb726Do3X, 0, hs_tpl126Do3Y];
                return $res;
            };
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Do7w);
        };
        var hs_sat26Do7J = new $hs.Thunk();
        hs_sat26Do7J.evaluateOnce = function () {
            var hs_sat26Do7G = new $hs.Func(1);
            hs_sat26Do7G.evaluate = function (hs_p26Do3j) {
                var hs_sat26Do7C = new $hs.Func(1);
                hs_sat26Do7C.evaluate = function (hs_ds126Do7x) {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                };
                var hs_sat26Do7F = new $hs.Thunk();
                hs_sat26Do7F.evaluateOnce = function () {
                    var hs_ds126Do3m = hs_p26Do3j;
                    if (hs_p26Do3j.notEvaluated) {
                        hs_ds126Do3m = hs_p26Do3j.hscall();
                    }
                    var hs_ds226Do3t = hs_ds126Do3m.data[0];
                    var hs_ds326Do7B = $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ds126Do3m, hs_l26Do35);
                    var hs_ds426Do3u = hs_ds326Do7B.data[0];
                    var hs_ds526Do7A = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_elems26Do39);
                    var hs_ds626Do3v = hs_ds526Do7A.data[0];
                    var hs_sat26Do7E = new $hs.Func(1);
                    hs_sat26Do7E.evaluate = function (hs_ds726Do3w) {
                        var hs_wild126Do7z = [hs_ds726Do3w, memcpy(hs_ds226Do3t, hs_ds426Do3u, hs_ds626Do3v)];
                        var hs_ds826Do3B = hs_wild126Do7z[0];
                        var hs_ds926Do3C = hs_wild126Do7z[1];
                        var hs_sat26Do7D = new $hs.Data(1);
                        hs_sat26Do7D.data = [hs_ds926Do3C];
                        return [hs_ds826Do3B, hs_sat26Do7D];
                    };
                    if (hs_sat26Do7E.notEvaluated) {
                        return hs_sat26Do7E.hscall();
                    } else {
                        return hs_sat26Do7E;
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Do7F, hs_sat26Do7C);
            };
            var hs_raw26Do3d = new $hs.Data(1);
            hs_raw26Do3d.data = [hs_rb26Do3b, hs_rb126Do3c];
            var hs_sat26Do7I = new $hs.Func(1);
            hs_sat26Do7I.evaluate = function (hs_f26Do3g) {
                var hs_sat26Do7H = new $hs.Thunk();
                hs_sat26Do7H.evaluateOnce = function () {
                    return $hs.modules.GHCziForeignPtr.hs_castForeignPtr.hscall(hs_raw26Do3d);
                };
                return $hs.modules.ForeignziForeignPtr.hs_withForeignPtr.hscall(hs_sat26Do7H, hs_f26Do3g);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Do7I, hs_sat26Do7G);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Do7J, hs_sat26Do7y);
    };
    this.hs_ReadBuffer.data = [];
    this.hs_WriteBuffer.data = [];
    this.hs_Buffer.evaluate = function (hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
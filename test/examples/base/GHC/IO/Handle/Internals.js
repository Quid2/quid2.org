
$hs.modules.GHCziIOziHandleziInternals = new $hs.Module();
$hs.modules.GHCziIOziHandleziInternals.dependencies = ["GHC.Types", "GHC.CString", "GHC.Unit", "Control.Monad", "Data.Maybe", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.Show", "GHC.Err", "GHC.Exception", "GHC.Classes", "GHC.IO", "GHC.Conc.Sync", "GHC.IO.Buffer", "GHC.IO.BufferedIO", "GHC.IO.Device", "GHC.IO.Encoding", "GHC.IO.Encoding.Types", "GHC.IO.Exception", "GHC.IO.Handle.Types", "GHC.IORef", "GHC.MVar"];
$hs.modules.GHCziIOziHandleziInternals.initBeforeDependencies = function () {
    this.hs_closeTextCodecs = new $hs.Func(1);
    this.hs_openTextEncoding = new $hs.Func(3);
    this.hs_initBufferState = new $hs.Func(1);
    this.hs_flushByteWriteBuffer = new $hs.Func(1);
    this.hs_flushWriteBuffer = new $hs.Func(1);
    this.hs_dEFAULTzuCHARzuBUFFERzuSIZZE = new $hs.Data(1);
    this.hs_decodeByteBuf = new $hs.Func(2);
    this.hs_ioezubufsizz = new $hs.Func(1);
    this.hs_ioezunotWritable = new $hs.Thunk();
    this.hs_ioezunotReadable = new $hs.Thunk();
    this.hs_ioezuEOF = new $hs.Thunk();
    this.hs_readTextDeviceNonBlocking = new $hs.Func(2);
    this.hs_ioezuclosedHandle = new $hs.Thunk();
    this.hs_augmentIOError = new $hs.Func(3);
    this.hs_withHandlezq = new $hs.Func(4);
    this.hs_withHandlezuzq = new $hs.Func(4);
    this.hs_withHandlezu = new $hs.Func(3);
    this.hs_wantReadableHandlezu = new $hs.Func(3);
    this.hs_wantSeekableHandle = new $hs.Func(3);
    this.hs_withHandle = new $hs.Func(3);
    this.hs_wantReadableHandle = new $hs.Func(3);
    this.hs_debugIO = new $hs.Func(1);
    this.hs_writeCharBuffer = new $hs.Func(2);
    this.hs_flushCharReadBuffer = new $hs.Func(1);
    this.hs_flushCharBuffer = new $hs.Func(1);
    this.hs_flushByteReadBuffer = new $hs.Func(1);
    this.hs_wantWritableHandle = new $hs.Func(3);
    this.hs_flushBuffer = new $hs.Func(1);
    this.hs_readTextDevice = new $hs.Func(2);
    this.hs_hLookAheadzu = new $hs.Func(1);
    this.hs_withHandlezuzuzq = new $hs.Func(4);
    this.hs_withAllHandleszuzu = new $hs.Func(3);
    this.hs_ioezufinalizzedHandle = new $hs.Func(1);
    this.hs_mkHandle = new $hs.Func(11);
    this.hs_hClosezuhelp = new $hs.Func(1);
    this.hs_handleFinalizzer = new $hs.Func(2);
    this.hs_mkFileHandle = new $hs.Func(8);
    this.hs_mkDuplexHandle = new $hs.Func(7);
    this.hs_closeTextCodecs.notEvaluated = true;
    this.hs_closeTextCodecs.evaluate = function (hs_ds26D6bD) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_ds26D6bD);
    };
    this.hs_openTextEncoding.notEvaluated = true;
    this.hs_openTextEncoding.evaluate = function (hs_ds26D6c8, hs_hazutype26D6ch, hs_cont26D6ca) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_ds26D6c8, hs_hazutype26D6ch, hs_cont26D6ca);
    };
    this.hs_initBufferState.notEvaluated = true;
    this.hs_initBufferState.evaluate = function (hs_ds26D6cD) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_ds26D6cD);
    };
    this.hs_flushByteWriteBuffer.notEvaluated = true;
    this.hs_flushByteWriteBuffer.evaluate = function (hs_hzu26D6cG) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_hzu26D6cG);
    };
    this.hs_flushWriteBuffer.notEvaluated = true;
    this.hs_flushWriteBuffer.evaluate = function (hs_hzu26D6dg) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_hzu26D6dg);
    };
    this.hs_dEFAULTzuCHARzuBUFFERzuSIZZE.notEvaluated = true;
    this.hs_dEFAULTzuCHARzuBUFFERzuSIZZE.evaluate = function () {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this;
    };
    this.hs_decodeByteBuf.notEvaluated = true;
    this.hs_decodeByteBuf.evaluate = function (hs_hzu26D6ei, hs_cbuf26D6eP) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_hzu26D6ei, hs_cbuf26D6eP);
    };
    this.hs_ioezubufsizz.notEvaluated = true;
    this.hs_ioezubufsizz.evaluate = function (hs_n26D6fg) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_n26D6fg);
    };
    this.hs_ioezunotWritable.evaluateOnce = function () {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_ioezunotReadable.evaluateOnce = function () {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_ioezuEOF.evaluateOnce = function () {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_readTextDeviceNonBlocking.notEvaluated = true;
    this.hs_readTextDeviceNonBlocking.evaluate = function (hs_hzu26D6fx, hs_cbuf26D6gc) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_hzu26D6fx, hs_cbuf26D6gc);
    };
    this.hs_ioezuclosedHandle.evaluateOnce = function () {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_augmentIOError.notEvaluated = true;
    this.hs_augmentIOError.evaluate = function (hs_ioe26D6hD, hs_fun26D6hW, hs_h26D6hT) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_ioe26D6hD, hs_fun26D6hW, hs_h26D6hT);
    };
    this.hs_withHandlezq.notEvaluated = true;
    this.hs_withHandlezq.evaluate = function (hs_fun26D6jh, hs_h26D6ji, hs_m26D6jk, hs_act26D6jj) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_fun26D6jh, hs_h26D6ji, hs_m26D6jk, hs_act26D6jj);
    };
    this.hs_withHandlezuzq.notEvaluated = true;
    this.hs_withHandlezuzq.evaluate = function (hs_fun26D6jD, hs_h26D6jE, hs_m26D6jF, hs_act26D6jJ) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_fun26D6jD, hs_h26D6jE, hs_m26D6jF, hs_act26D6jJ);
    };
    this.hs_withHandlezu.notEvaluated = true;
    this.hs_withHandlezu.evaluate = function (hs_eta26D6jX, hs_eta126D6jT, hs_eta226D6k1) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_eta26D6jX, hs_eta126D6jT, hs_eta226D6k1);
    };
    this.hs_wantReadableHandlezu.notEvaluated = true;
    this.hs_wantReadableHandlezu.evaluate = function (hs_fun26D6kv, hs_h26D6kr, hs_act26D6kz) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_fun26D6kv, hs_h26D6kr, hs_act26D6kz);
    };
    this.hs_wantSeekableHandle.notEvaluated = true;
    this.hs_wantSeekableHandle.evaluate = function (hs_fun26D6kM, hs_h26D6kI, hs_zuact26D6li) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_fun26D6kM, hs_h26D6kI, hs_zuact26D6li);
    };
    this.hs_withHandle.notEvaluated = true;
    this.hs_withHandle.evaluate = function (hs_eta26D6lD, hs_eta126D6lz, hs_eta226D6lH) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_eta26D6lD, hs_eta126D6lz, hs_eta226D6lH);
    };
    this.hs_wantReadableHandle.notEvaluated = true;
    this.hs_wantReadableHandle.evaluate = function (hs_fun26D6lU, hs_h26D6lQ, hs_act26D6lY) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_fun26D6lU, hs_h26D6lQ, hs_act26D6lY);
    };
    this.hs_debugIO.notEvaluated = true;
    this.hs_debugIO.evaluate = function (hs_s26D6m7) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_s26D6m7);
    };
    this.hs_writeCharBuffer.notEvaluated = true;
    this.hs_writeCharBuffer.evaluate = function (hs_hzu26D6ma, hs_cbuf26D6mv) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_hzu26D6ma, hs_cbuf26D6mv);
    };
    this.hs_flushCharReadBuffer.notEvaluated = true;
    this.hs_flushCharReadBuffer.evaluate = function (hs_ds26D6nt) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_ds26D6nt);
    };
    this.hs_flushCharBuffer.notEvaluated = true;
    this.hs_flushCharBuffer.evaluate = function (hs_hzu26D6po) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_hzu26D6po);
    };
    this.hs_flushByteReadBuffer.notEvaluated = true;
    this.hs_flushByteReadBuffer.evaluate = function (hs_hzu26D6pU) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_hzu26D6pU);
    };
    this.hs_wantWritableHandle.notEvaluated = true;
    this.hs_wantWritableHandle.evaluate = function (hs_fun26D6sk, hs_h26D6sg, hs_act26D6so) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_fun26D6sk, hs_h26D6sg, hs_act26D6so);
    };
    this.hs_flushBuffer.notEvaluated = true;
    this.hs_flushBuffer.evaluate = function (hs_hzu26D6sv) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_hzu26D6sv);
    };
    this.hs_readTextDevice.notEvaluated = true;
    this.hs_readTextDevice.evaluate = function (hs_hzu26D6um, hs_cbuf26D6vd) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_hzu26D6um, hs_cbuf26D6vd);
    };
    this.hs_hLookAheadzu.notEvaluated = true;
    this.hs_hLookAheadzu.evaluate = function (hs_handlezu26D6vK) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_handlezu26D6vK);
    };
    this.hs_withHandlezuzuzq.notEvaluated = true;
    this.hs_withHandlezuzuzq.evaluate = function (hs_fun26D6wn, hs_h26D6wo, hs_m26D6wq, hs_act26D6wp) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_fun26D6wn, hs_h26D6wo, hs_m26D6wq, hs_act26D6wp);
    };
    this.hs_withAllHandleszuzu.notEvaluated = true;
    this.hs_withAllHandleszuzu.evaluate = function (hs_fun26D6wH, hs_h26D6wD, hs_act26D6wL) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_fun26D6wH, hs_h26D6wD, hs_act26D6wL);
    };
    this.hs_ioezufinalizzedHandle.notEvaluated = true;
    this.hs_ioezufinalizzedHandle.evaluate = function (hs_fp26D6wX) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_fp26D6wX);
    };
    this.hs_mkHandle.notEvaluated = true;
    this.hs_mkHandle.evaluate = function (hs_zddIODevice26D6xL, hs_zddBufferedIO26D6xj, hs_zddTypeable26D6yh, hs_dev26D6xk, hs_filepath26D6yB, hs_hazutype26D6xc, hs_buffered26D6xv, hs_mbzucodec26D6xb, hs_nl26D6yq, hs_finalizzer26D6yx, hs_otherzuside26D6yt) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_zddIODevice26D6xL, hs_zddBufferedIO26D6xj, hs_zddTypeable26D6yh, hs_dev26D6xk, hs_filepath26D6yB, hs_hazutype26D6xc, hs_buffered26D6xv, hs_mbzucodec26D6xb, hs_nl26D6yq, hs_finalizzer26D6yx, hs_otherzuside26D6yt);
    };
    this.hs_hClosezuhelp.notEvaluated = true;
    this.hs_hClosezuhelp.evaluate = function (hs_handlezu26D6z0) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_handlezu26D6z0);
    };
    this.hs_handleFinalizzer.notEvaluated = true;
    this.hs_handleFinalizzer.evaluate = function (hs_fp26D6AE, hs_m26D6Ap) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_fp26D6AE, hs_m26D6Ap);
    };
    this.hs_mkFileHandle.notEvaluated = true;
    this.hs_mkFileHandle.evaluate = function (hs_zddIODevice26D6AN, hs_zddBufferedIO26D6AO, hs_zddTypeable26D6AP, hs_dev26D6AQ, hs_filepath26D6AR, hs_iomode26D6AS, hs_mbzucodec26D6AV, hs_trzunewlines26D6AW) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_zddIODevice26D6AN, hs_zddBufferedIO26D6AO, hs_zddTypeable26D6AP, hs_dev26D6AQ, hs_filepath26D6AR, hs_iomode26D6AS, hs_mbzucodec26D6AV, hs_trzunewlines26D6AW);
    };
    this.hs_mkDuplexHandle.notEvaluated = true;
    this.hs_mkDuplexHandle.evaluate = function (hs_zddIODevice26D6B5, hs_zddBufferedIO26D6B6, hs_zddTypeable26D6B7, hs_dev26D6B8, hs_filepath26D6B9, hs_mbzucodec26D6Ba, hs_trzunewlines26D6Bb) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_zddIODevice26D6B5, hs_zddBufferedIO26D6B6, hs_zddTypeable26D6B7, hs_dev26D6B8, hs_filepath26D6B9, hs_mbzucodec26D6Ba, hs_trzunewlines26D6Bb);
    };
};
$hs.modules.GHCziIOziHandleziInternals.initAfterDependencies = function () {
    this.hs_closeTextCodecs.notEvaluated = false;
    this.hs_openTextEncoding.notEvaluated = false;
    this.hs_initBufferState.notEvaluated = false;
    this.hs_flushByteWriteBuffer.notEvaluated = false;
    this.hs_flushWriteBuffer.notEvaluated = false;
    this.hs_dEFAULTzuCHARzuBUFFERzuSIZZE.notEvaluated = false;
    this.hs_dEFAULTzuCHARzuBUFFERzuSIZZE.evaluate = function () {
        return this;
    };
    this.hs_decodeByteBuf.notEvaluated = false;
    this.hs_ioezubufsizz.notEvaluated = false;
    this.hs_readTextDeviceNonBlocking.notEvaluated = false;
    this.hs_augmentIOError.notEvaluated = false;
    this.hs_withHandlezq.notEvaluated = false;
    this.hs_withHandlezuzq.notEvaluated = false;
    this.hs_withHandlezu.notEvaluated = false;
    this.hs_wantReadableHandlezu.notEvaluated = false;
    this.hs_wantSeekableHandle.notEvaluated = false;
    this.hs_withHandle.notEvaluated = false;
    this.hs_wantReadableHandle.notEvaluated = false;
    this.hs_debugIO.notEvaluated = false;
    this.hs_writeCharBuffer.notEvaluated = false;
    this.hs_flushCharReadBuffer.notEvaluated = false;
    this.hs_flushCharBuffer.notEvaluated = false;
    this.hs_flushByteReadBuffer.notEvaluated = false;
    this.hs_wantWritableHandle.notEvaluated = false;
    this.hs_flushBuffer.notEvaluated = false;
    this.hs_readTextDevice.notEvaluated = false;
    this.hs_hLookAheadzu.notEvaluated = false;
    this.hs_withHandlezuzuzq.notEvaluated = false;
    this.hs_withAllHandleszuzu.notEvaluated = false;
    this.hs_ioezufinalizzedHandle.notEvaluated = false;
    this.hs_mkHandle.notEvaluated = false;
    this.hs_hClosezuhelp.notEvaluated = false;
    this.hs_handleFinalizzer.notEvaluated = false;
    this.hs_mkFileHandle.notEvaluated = false;
    this.hs_mkDuplexHandle.notEvaluated = false;
    var hs_sat26D6BJ = new $hs.Thunk();
    var hs_noByteBuffer25tVLu = new $hs.Thunk();
    var hs_sat26D6BL = new $hs.Thunk();
    var hs_noCharBuffer25tVLt = new $hs.Thunk();
    var hs_streamEncode25tVL7 = new $hs.Func(3);
    var hs_ioezuinvalidCharacter25tVL4 = new $hs.Thunk();
    var hs_ioezucannotFlushNotSeekable25tVL3 = new $hs.Thunk();
    var hs_ioezunotSeekable25tVL2 = new $hs.Thunk();
    var hs_checkReadableHandle25tVKV = new $hs.Func(2);
    var hs_dozuoperation25tVKN = new $hs.Func(4);
    var hs_wantReadableHandlezq25tVKU = new $hs.Func(4);
    var hs_wantWritableHandlezq25tVKQ = new $hs.Func(4);
    var hs_readTextDevicezq25tVLy = new $hs.Func(3);
    var hs_trymaybe25tVLr = new $hs.Func(1);
    hs_sat26D6BJ.evaluateOnce = function () {
        var hs_sat26D6BI = new $hs.Data(1);
        hs_sat26D6BI.data = [1];
        return $hs.modules.GHCziIOziBuffer.hs_newByteBuffer.hscall(hs_sat26D6BI, $hs.modules.GHCziIOziBuffer.hs_ReadBuffer);
    };
    hs_noByteBuffer25tVLu.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_unsafePerformIO, hs_sat26D6BJ);
    };
    hs_sat26D6BL.evaluateOnce = function () {
        var hs_sat26D6BK = new $hs.Data(1);
        hs_sat26D6BK.data = [1];
        return $hs.modules.GHCziIOziBuffer.hs_newCharBuffer.hscall(hs_sat26D6BK, $hs.modules.GHCziIOziBuffer.hs_ReadBuffer);
    };
    hs_noCharBuffer25tVLt.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_unsafePerformIO, hs_sat26D6BL);
    };
    this.hs_closeTextCodecs.evaluate = function (hs_ds26D6bD) {
        var hs_wild26D6BN = hs_ds26D6bD;
        if (hs_ds26D6bD.notEvaluated) {
            hs_wild26D6BN = hs_ds26D6bD.hscall();
        }
        var hs_ds426D6c0 = hs_wild26D6BN.data[10];
        var hs_ds526D6bV = hs_wild26D6BN.data[11];
        var hs_sat26D6C2 = new $hs.Thunk();
        hs_sat26D6C2.evaluateOnce = function () {
            var hs_wild126D6C4 = hs_ds426D6c0;
            if (hs_ds426D6c0.notEvaluated) {
                hs_wild126D6C4 = hs_ds426D6c0.hscall();
            }
            switch (hs_wild126D6C4.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            case 2:
                var hs_d26D6c3 = hs_wild126D6C4.data[0];
                return $hs.modules.GHCziIOziEncodingziTypes.hs_close.hscall(hs_d26D6c3);
            }
        };
        var hs_sat26D6BM = new $hs.Thunk();
        hs_sat26D6BM.evaluateOnce = function () {
            var hs_wild126D6C3 = hs_ds526D6bV;
            if (hs_ds526D6bV.notEvaluated) {
                hs_wild126D6C3 = hs_ds526D6bV.hscall();
            }
            switch (hs_wild126D6C3.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            case 2:
                var hs_d26D6bY = hs_wild126D6C3.data[0];
                return $hs.modules.GHCziIOziEncodingziTypes.hs_close.hscall(hs_d26D6bY);
            }
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6BM, hs_sat26D6C2);
    };
    this.hs_openTextEncoding.evaluate = function (hs_ds26D6c8, hs_hazutype26D6ch, hs_cont26D6ca) {
        var hs_wild26D6C8 = hs_ds26D6c8;
        if (hs_ds26D6c8.notEvaluated) {
            hs_wild26D6C8 = hs_ds26D6c8.hscall();
        }
        switch (hs_wild26D6C8.tag) {
        case 1:
            return hs_cont26D6ca.hscall($hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing);
        case 2:
            var hs_ds126D6cc = hs_wild26D6C8.data[0];
            var hs_wild126D6C6 = hs_ds126D6cc;
            if (hs_ds126D6cc.notEvaluated) {
                hs_wild126D6C6 = hs_ds126D6cc.hscall();
            }
            var hs_ds326D6cj = hs_wild126D6C6.data[1];
            var hs_ds426D6cr = hs_wild126D6C6.data[2];
            var hs_sat26D6C9 = new $hs.Func(1);
            hs_sat26D6C9.evaluate = function (hs_mbzudecoder26D6cz) {
                var hs_sat26D6Ce = new $hs.Func(1);
                hs_sat26D6Ce.evaluate = function (hs_mbzuencoder26D6cy) {
                    return hs_cont26D6ca.hscall(hs_mbzuencoder26D6cy, hs_mbzudecoder26D6cz);
                };
                var hs_sat26D6Cd = new $hs.Thunk();
                hs_sat26D6Cd.evaluateOnce = function () {
                    var hs_wild226D6Cg = $hs.modules.GHCziIOziHandleziTypes.hs_isWritableHandleType.hscall(hs_hazutype26D6ch);
                    switch (hs_wild226D6Cg.tag) {
                    case 1:
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.DataziMaybe.hs_Nothing);
                    case 2:
                        var hs_sat26D6Cf = new $hs.Func(1);
                        hs_sat26D6Cf.evaluate = function (hs_encoder26D6ct) {
                            var hs_sat26D6Ch = new $hs.Data(2);
                            hs_sat26D6Ch.data = [hs_encoder26D6ct];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Ch);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ds426D6cr, hs_sat26D6Cf);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Cd, hs_sat26D6Ce);
            };
            var hs_sat26D6C5 = new $hs.Thunk();
            hs_sat26D6C5.evaluateOnce = function () {
                var hs_wild226D6Cb = $hs.modules.GHCziIOziHandleziTypes.hs_isReadableHandleType.hscall(hs_hazutype26D6ch);
                switch (hs_wild226D6Cb.tag) {
                case 1:
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.DataziMaybe.hs_Nothing);
                case 2:
                    var hs_sat26D6Ca = new $hs.Func(1);
                    hs_sat26D6Ca.evaluate = function (hs_decoder26D6cl) {
                        var hs_sat26D6Cc = new $hs.Data(2);
                        hs_sat26D6Cc.data = [hs_decoder26D6cl];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Cc);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ds326D6cj, hs_sat26D6Ca);
                }
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6C5, hs_sat26D6C9);
        }
    };
    this.hs_initBufferState.evaluate = function (hs_ds26D6cD) {
        var hs_wild26D6Ci = hs_ds26D6cD;
        if (hs_ds26D6cD.notEvaluated) {
            hs_wild26D6Ci = hs_ds26D6cD.hscall();
        }
        switch (hs_wild26D6Ci.tag) {
        case 3:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        default:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    this.hs_flushByteWriteBuffer.evaluate = function (hs_hzu26D6cG) {
        var hs_wild26D6Ck = hs_hzu26D6cG;
        if (hs_hzu26D6cG.notEvaluated) {
            hs_wild26D6Ck = hs_hzu26D6cG.hscall();
        }
        var hs_zddBufferedIO26D6d7 = hs_wild26D6Ck.data[1];
        var hs_ds26D6d8 = hs_wild26D6Ck.data[3];
        var hs_rb26D6cZ = hs_wild26D6Ck.data[5];
        var hs_a26D6d0 = new $hs.Data(1);
        hs_a26D6d0.data = [hs_rb26D6cZ];
        var hs_sat26D6Cy = new $hs.Func(1);
        hs_sat26D6Cy.evaluate = function (hs_bbuf26D6d3) {
            var hs_sat26D6CA = new $hs.Thunk();
            hs_sat26D6CA.evaluateOnce = function () {
                var hs_sat26D6CE = new $hs.Func(1);
                hs_sat26D6CE.evaluate = function (hs_bbufzq26D6db) {
                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a26D6d0, hs_bbufzq26D6db);
                };
                var hs_sat26D6CD = new $hs.Thunk();
                hs_sat26D6CD.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziBufferedIO.hs_flushWriteBuffer.hscall(hs_zddBufferedIO26D6d7, hs_ds26D6d8, hs_bbuf26D6d3);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6CD, hs_sat26D6CE);
            };
            var hs_sat26D6Cz = new $hs.Thunk();
            hs_sat26D6Cz.evaluateOnce = function () {
                var hs_sat26D6CB = new $hs.Thunk();
                hs_sat26D6CB.evaluateOnce = function () {
                    var hs_sat26D6CC = new $hs.Thunk();
                    hs_sat26D6CC.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBuffer.hs_isEmptyBuffer.hscall(hs_bbuf26D6d3);
                    };
                    return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26D6CC);
                };
                return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6CB);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D6Cz, hs_sat26D6CA);
        };
        var hs_sat26D6Cj = new $hs.Thunk();
        hs_sat26D6Cj.evaluateOnce = function () {
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a26D6d0);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Cj, hs_sat26D6Cy);
    };
    this.hs_flushWriteBuffer.evaluate = function (hs_hzu26D6dg) {
        var hs_wild26D6dF = hs_hzu26D6dg;
        if (hs_hzu26D6dg.notEvaluated) {
            hs_wild26D6dF = hs_hzu26D6dg.hscall();
        }
        var hs_rb26D6dy = hs_wild26D6dF.data[5];
        var hs_sat26D6CV = new $hs.Func(1);
        hs_sat26D6CV.evaluate = function (hs_buf26D6dC) {
            var hs_sat26D6CY = new $hs.Thunk();
            hs_sat26D6CY.evaluateOnce = function () {
                return $hs.modules.GHCziIOziHandleziInternals.hs_flushByteWriteBuffer.hscall(hs_wild26D6dF);
            };
            var hs_sat26D6CX = new $hs.Thunk();
            hs_sat26D6CX.evaluateOnce = function () {
                var hs_sat26D6CZ = new $hs.Thunk();
                hs_sat26D6CZ.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziBuffer.hs_isWriteBuffer.hscall(hs_buf26D6dC);
                };
                return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6CZ);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D6CX, hs_sat26D6CY);
        };
        var hs_sat26D6CF = new $hs.Thunk();
        hs_sat26D6CF.evaluateOnce = function () {
            var hs_sat26D6CW = new $hs.Data(1);
            hs_sat26D6CW.data = [hs_rb26D6dy];
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_sat26D6CW);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6CF, hs_sat26D6CV);
    };
    this.hs_dEFAULTzuCHARzuBUFFERzuSIZZE.data = [2048];
    hs_streamEncode25tVL7.evaluate = function (hs_codec26D6dR, hs_from26D6ed, hs_to26D6ee) {
        var hs_go26D6eb = new $hs.Func(1);
        hs_go26D6eb.evaluate = function (hs_ds26D6dN) {
            var hs_wild26D6D2 = hs_ds26D6dN;
            if (hs_ds26D6dN.notEvaluated) {
                hs_wild26D6D2 = hs_ds26D6dN.hscall();
            }
            var hs_from126D6dS = hs_wild26D6D2.data[0];
            var hs_to126D6dT = hs_wild26D6D2.data[1];
            var hs_sat26D6D3 = new $hs.Func(1);
            hs_sat26D6D3.evaluate = function (hs_ds126D6dW) {
                var hs_wild126D6D6 = hs_ds126D6dW;
                if (hs_ds126D6dW.notEvaluated) {
                    hs_wild126D6D6 = hs_ds126D6dW.hscall();
                }
                var hs_why26D6e1 = hs_wild126D6D6.data[0];
                var hs_fromzq26D6e3 = hs_wild126D6D6.data[1];
                var hs_tozq26D6e4 = hs_wild126D6D6.data[2];
                var hs_wild226D6D5 = hs_why26D6e1;
                if (hs_why26D6e1.notEvaluated) {
                    hs_wild226D6D5 = hs_why26D6e1.hscall();
                }
                switch (hs_wild226D6D5.tag) {
                case 3:
                    var hs_sat26D6D7 = new $hs.Thunk();
                    hs_sat26D6D7.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBuffer.hs_bufL.hscall(hs_fromzq26D6e3);
                    };
                    var hs_sat26D6D8 = new $hs.Thunk();
                    hs_sat26D6D8.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBuffer.hs_bufL.hscall(hs_from126D6dS);
                    };
                    var hs_wild326D6D9 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_sat26D6D8, hs_sat26D6D7);
                    switch (hs_wild326D6D9.tag) {
                    case 1:
                        var hs_sat26D6Da = new $hs.Data(1);
                        hs_sat26D6Da.data = [hs_fromzq26D6e3, hs_tozq26D6e4];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Da);
                    case 2:
                        var hs_sat26D6D4 = new $hs.Thunk();
                        hs_sat26D6D4.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziEncodingziTypes.hs_recover.hscall(hs_codec26D6dR, hs_fromzq26D6e3, hs_tozq26D6e4);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6D4, hs_go26D6eb);
                    }
                default:
                    var hs_sat26D6Db = new $hs.Data(1);
                    hs_sat26D6Db.data = [hs_fromzq26D6e3, hs_tozq26D6e4];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Db);
                }
            };
            var hs_sat26D6D1 = new $hs.Thunk();
            hs_sat26D6D1.evaluateOnce = function () {
                return $hs.modules.GHCziIOziEncodingziTypes.hs_encode.hscall(hs_codec26D6dR, hs_from126D6dS, hs_to126D6dT);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6D1, hs_sat26D6D3);
        };
        var hs_sat26D6D0 = new $hs.Data(1);
        hs_sat26D6D0.data = [hs_from26D6ed, hs_to26D6ee];
        return hs_go26D6eb.hscall(hs_sat26D6D0);
    };
    this.hs_decodeByteBuf.evaluate = function (hs_hzu26D6ei, hs_cbuf26D6eP) {
        var hs_wild26D6Dd = hs_hzu26D6ei;
        if (hs_hzu26D6ei.notEvaluated) {
            hs_wild26D6Dd = hs_hzu26D6ei.hscall();
        }
        var hs_rb26D6eB = hs_wild26D6Dd.data[5];
        var hs_rb126D6eE = hs_wild26D6Dd.data[7];
        var hs_ds426D6eI = hs_wild26D6Dd.data[11];
        var hs_a26D6eC = new $hs.Data(1);
        hs_a26D6eC.data = [hs_rb26D6eB];
        var hs_a126D6eF = new $hs.Data(1);
        hs_a126D6eF.data = [hs_rb126D6eE];
        var hs_sat26D6Dr = new $hs.Func(1);
        hs_sat26D6Dr.evaluate = function (hs_bbuf026D6eM) {
            var hs_sat26D6Dt = new $hs.Func(1);
            hs_sat26D6Dt.evaluate = function (hs_ds926D6f2) {
                var hs_wild126D6DG = hs_ds926D6f2;
                if (hs_ds926D6f2.notEvaluated) {
                    hs_wild126D6DG = hs_ds926D6f2.hscall();
                }
                var hs_bbuf226D6f6 = hs_wild126D6DG.data[0];
                var hs_cbufzq26D6f8 = hs_wild126D6DG.data[1];
                var hs_sat26D6DH = new $hs.Thunk();
                hs_sat26D6DH.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_cbufzq26D6f8);
                };
                var hs_sat26D6DF = new $hs.Thunk();
                hs_sat26D6DF.evaluateOnce = function () {
                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a26D6eC, hs_bbuf226D6f6);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6DF, hs_sat26D6DH);
            };
            var hs_sat26D6Ds = new $hs.Thunk();
            hs_sat26D6Ds.evaluateOnce = function () {
                var hs_wild126D6Dv = hs_ds426D6eI;
                if (hs_ds426D6eI.notEvaluated) {
                    hs_wild126D6Dv = hs_ds426D6eI.hscall();
                }
                switch (hs_wild126D6Dv.tag) {
                case 1:
                    var hs_sat26D6DB = new $hs.Thunk();
                    hs_sat26D6DB.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziEncoding.hs_latin1zudecode.hscall(hs_bbuf026D6eM, hs_cbuf26D6eP);
                    };
                    var hs_sat26D6DA = new $hs.Thunk();
                    hs_sat26D6DA.evaluateOnce = function () {
                        var hs_sat26D6DD = new $hs.Thunk();
                        hs_sat26D6DD.evaluateOnce = function () {
                            var hs_sat26D6DE = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("codec_state\x00");
                            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26D6DE);
                        };
                        var hs_sat26D6DC = new $hs.Data(1);
                        hs_sat26D6DC.data = [hs_sat26D6DD, hs_bbuf026D6eM];
                        return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126D6eF, hs_sat26D6DC);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6DA, hs_sat26D6DB);
                case 2:
                    var hs_decoder26D6eS = hs_wild126D6Dv.data[0];
                    var hs_sat26D6Dw = new $hs.Func(1);
                    hs_sat26D6Dw.evaluate = function (hs_state26D6eV) {
                        var hs_sat26D6Dy = new $hs.Thunk();
                        hs_sat26D6Dy.evaluateOnce = function () {
                            return hs_streamEncode25tVL7.hscall(hs_decoder26D6eS, hs_bbuf026D6eM, hs_cbuf26D6eP);
                        };
                        var hs_sat26D6Dx = new $hs.Thunk();
                        hs_sat26D6Dx.evaluateOnce = function () {
                            var hs_sat26D6Dz = new $hs.Data(1);
                            hs_sat26D6Dz.data = [hs_state26D6eV, hs_bbuf026D6eM];
                            return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126D6eF, hs_sat26D6Dz);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Dx, hs_sat26D6Dy);
                    };
                    var hs_sat26D6Du = new $hs.Thunk();
                    hs_sat26D6Du.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziEncodingziTypes.hs_getState.hscall(hs_decoder26D6eS);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Du, hs_sat26D6Dw);
                }
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Ds, hs_sat26D6Dt);
        };
        var hs_sat26D6Dc = new $hs.Thunk();
        hs_sat26D6Dc.evaluateOnce = function () {
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a26D6eC);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Dc, hs_sat26D6Dr);
    };
    this.hs_ioezubufsizz.evaluate = function (hs_n26D6fg) {
        var hs_sat26D6DJ = new $hs.Thunk();
        hs_sat26D6DJ.evaluateOnce = function () {
            var hs_sat26D6DM = new $hs.Thunk();
            hs_sat26D6DM.evaluateOnce = function () {
                var hs_sat26D6DN = new $hs.Data(1);
                hs_sat26D6DN.data = [9];
                return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_sat26D6DN, hs_n26D6fg, $hs.modules.GHCziTypes.hs_ZMZN);
            };
            var hs_sat26D6DL = new $hs.Thunk();
            hs_sat26D6DL.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("illegal buffer size \x00");
            };
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D6DL, hs_sat26D6DM);
        };
        var hs_sat26D6DK = new $hs.Thunk();
        hs_sat26D6DK.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hSetBuffering\x00");
        };
        var hs_sat26D6DI = new $hs.Data(1);
        hs_sat26D6DI.data = [$hs.modules.DataziMaybe.hs_Nothing, $hs.modules.GHCziIOziException.hs_InvalidArgument, hs_sat26D6DK, hs_sat26D6DJ, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing];
        return $hs.modules.GHCziIOziException.hs_ioException.hscall(hs_sat26D6DI);
    };
    hs_ioezuinvalidCharacter25tVL4.evaluateOnce = function () {
        var hs_sat26D6DP = new $hs.Thunk();
        hs_sat26D6DP.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("invalid byte sequence for this encoding\x00");
        };
        var hs_sat26D6DO = new $hs.Data(1);
        hs_sat26D6DO.data = [$hs.modules.DataziMaybe.hs_Nothing, $hs.modules.GHCziIOziException.hs_InvalidArgument, $hs.modules.GHCziTypes.hs_ZMZN, hs_sat26D6DP, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing];
        return $hs.modules.GHCziIOziException.hs_ioException.hscall(hs_sat26D6DO);
    };
    hs_ioezucannotFlushNotSeekable25tVL3.evaluateOnce = function () {
        var hs_sat26D6DR = new $hs.Thunk();
        hs_sat26D6DR.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("cannot flush the read buffer: underlying device is not seekable\x00");
        };
        var hs_sat26D6DQ = new $hs.Data(1);
        hs_sat26D6DQ.data = [$hs.modules.DataziMaybe.hs_Nothing, $hs.modules.GHCziIOziException.hs_IllegalOperation, $hs.modules.GHCziTypes.hs_ZMZN, hs_sat26D6DR, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing];
        return $hs.modules.GHCziIOziException.hs_ioException.hscall(hs_sat26D6DQ);
    };
    hs_ioezunotSeekable25tVL2.evaluateOnce = function () {
        var hs_sat26D6DT = new $hs.Thunk();
        hs_sat26D6DT.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("handle is not seekable\x00");
        };
        var hs_sat26D6DS = new $hs.Data(1);
        hs_sat26D6DS.data = [$hs.modules.DataziMaybe.hs_Nothing, $hs.modules.GHCziIOziException.hs_IllegalOperation, $hs.modules.GHCziTypes.hs_ZMZN, hs_sat26D6DT, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing];
        return $hs.modules.GHCziIOziException.hs_ioException.hscall(hs_sat26D6DS);
    };
    this.hs_ioezunotWritable.evaluateOnce = function () {
        var hs_sat26D6DV = new $hs.Thunk();
        hs_sat26D6DV.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("handle is not open for writing\x00");
        };
        var hs_sat26D6DU = new $hs.Data(1);
        hs_sat26D6DU.data = [$hs.modules.DataziMaybe.hs_Nothing, $hs.modules.GHCziIOziException.hs_IllegalOperation, $hs.modules.GHCziTypes.hs_ZMZN, hs_sat26D6DV, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing];
        return $hs.modules.GHCziIOziException.hs_ioException.hscall(hs_sat26D6DU);
    };
    this.hs_ioezunotReadable.evaluateOnce = function () {
        var hs_sat26D6DX = new $hs.Thunk();
        hs_sat26D6DX.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("handle is not open for reading\x00");
        };
        var hs_sat26D6DW = new $hs.Data(1);
        hs_sat26D6DW.data = [$hs.modules.DataziMaybe.hs_Nothing, $hs.modules.GHCziIOziException.hs_IllegalOperation, $hs.modules.GHCziTypes.hs_ZMZN, hs_sat26D6DX, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing];
        return $hs.modules.GHCziIOziException.hs_ioException.hscall(hs_sat26D6DW);
    };
    this.hs_ioezuEOF.evaluateOnce = function () {
        var hs_sat26D6DY = new $hs.Data(1);
        hs_sat26D6DY.data = [$hs.modules.DataziMaybe.hs_Nothing, $hs.modules.GHCziIOziException.hs_EOF, $hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing];
        return $hs.modules.GHCziIOziException.hs_ioException.hscall(hs_sat26D6DY);
    };
    this.hs_readTextDeviceNonBlocking.evaluate = function (hs_hzu26D6fx, hs_cbuf26D6gc) {
        var hs_wild26D6gb = hs_hzu26D6fx;
        if (hs_hzu26D6fx.notEvaluated) {
            hs_wild26D6gb = hs_hzu26D6fx.hscall();
        }
        var hs_zddBufferedIO26D6fX = hs_wild26D6gb.data[1];
        var hs_ds26D6fY = hs_wild26D6gb.data[3];
        var hs_rb26D6fQ = hs_wild26D6gb.data[5];
        var hs_a26D6fR = new $hs.Data(1);
        hs_a26D6fR.data = [hs_rb26D6fQ];
        var hs_sat26D6Ed = new $hs.Func(1);
        hs_sat26D6Ed.evaluate = function (hs_bbuf026D6fU) {
            var hs_sat26D6Ef = new $hs.Thunk();
            hs_sat26D6Ef.evaluateOnce = function () {
                return $hs.modules.GHCziIOziHandleziInternals.hs_decodeByteBuf.hscall(hs_wild26D6gb, hs_cbuf26D6gc);
            };
            var hs_sat26D6Ee = new $hs.Thunk();
            hs_sat26D6Ee.evaluateOnce = function () {
                var hs_sat26D6Eh = new $hs.Thunk();
                hs_sat26D6Eh.evaluateOnce = function () {
                    var hs_sat26D6Ek = new $hs.Func(1);
                    hs_sat26D6Ek.evaluate = function (hs_ds926D6g1) {
                        var hs_wild126D6El = hs_ds926D6g1;
                        if (hs_ds926D6g1.notEvaluated) {
                            hs_wild126D6El = hs_ds926D6g1.hscall();
                        }
                        var hs_r26D6g5 = hs_wild126D6El.data[0];
                        var hs_bbuf126D6g7 = hs_wild126D6El.data[1];
                        var hs_wild226D6Em = $hs.modules.DataziMaybe.hs_isNothing.hscall(hs_r26D6g5);
                        switch (hs_wild226D6Em.tag) {
                        case 1:
                            return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a26D6fR, hs_bbuf126D6g7);
                        case 2:
                            if ($hs.modules.GHCziIOziHandleziInternals.hs_ioezuEOF.notEvaluated) {
                                return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuEOF.hscall();
                            } else {
                                return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuEOF;
                            }
                        }
                    };
                    var hs_sat26D6Ej = new $hs.Thunk();
                    hs_sat26D6Ej.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBufferedIO.hs_fillReadBuffer0.hscall(hs_zddBufferedIO26D6fX, hs_ds26D6fY, hs_bbuf026D6fU);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Ej, hs_sat26D6Ek);
                };
                var hs_sat26D6Eg = new $hs.Thunk();
                hs_sat26D6Eg.evaluateOnce = function () {
                    var hs_sat26D6Ei = new $hs.Thunk();
                    hs_sat26D6Ei.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBuffer.hs_isEmptyBuffer.hscall(hs_bbuf026D6fU);
                    };
                    return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Ei);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D6Eg, hs_sat26D6Eh);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Ee, hs_sat26D6Ef);
        };
        var hs_sat26D6DZ = new $hs.Thunk();
        hs_sat26D6DZ.evaluateOnce = function () {
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a26D6fR);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6DZ, hs_sat26D6Ed);
    };
    this.hs_ioezuclosedHandle.evaluateOnce = function () {
        var hs_sat26D6Eo = new $hs.Thunk();
        hs_sat26D6Eo.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("handle is closed\x00");
        };
        var hs_sat26D6En = new $hs.Data(1);
        hs_sat26D6En.data = [$hs.modules.DataziMaybe.hs_Nothing, $hs.modules.GHCziIOziException.hs_IllegalOperation, $hs.modules.GHCziTypes.hs_ZMZN, hs_sat26D6Eo, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing];
        return $hs.modules.GHCziIOziException.hs_ioException.hscall(hs_sat26D6En);
    };
    hs_checkReadableHandle25tVKV.evaluate = function (hs_act26D6gK, hs_hzu26D6gj) {
        var hs_wild26D6gJ = hs_hzu26D6gj;
        if (hs_hzu26D6gj.notEvaluated) {
            hs_wild26D6gJ = hs_hzu26D6gj.hscall();
        }
        var hs_ds126D6gH = hs_wild26D6gJ.data[4];
        var hs_rb26D6gC = hs_wild26D6gJ.data[5];
        var hs_rb226D6gF = hs_wild26D6gJ.data[8];
        var hs_a26D6gD = new $hs.Data(1);
        hs_a26D6gD.data = [hs_rb26D6gC];
        var hs_a126D6gG = new $hs.Data(1);
        hs_a126D6gG.data = [hs_rb226D6gF];
        var hs_wild126D6Ep = hs_ds126D6gH;
        if (hs_ds126D6gH.notEvaluated) {
            hs_wild126D6Ep = hs_ds126D6gH.hscall();
        }
        switch (hs_wild126D6Ep.tag) {
        case 3:
            return hs_act26D6gK.hscall(hs_wild26D6gJ);
        case 4:
            if ($hs.modules.GHCziIOziHandleziInternals.hs_ioezunotReadable.notEvaluated) {
                return $hs.modules.GHCziIOziHandleziInternals.hs_ioezunotReadable.hscall();
            } else {
                return $hs.modules.GHCziIOziHandleziInternals.hs_ioezunotReadable;
            }
        case 5:
            if ($hs.modules.GHCziIOziHandleziInternals.hs_ioezunotReadable.notEvaluated) {
                return $hs.modules.GHCziIOziHandleziInternals.hs_ioezunotReadable.hscall();
            } else {
                return $hs.modules.GHCziIOziHandleziInternals.hs_ioezunotReadable;
            }
        case 6:
            var hs_sat26D6EE = new $hs.Func(1);
            hs_sat26D6EE.evaluate = function (hs_bbuf26D6gN) {
                var hs_sat26D6EG = new $hs.Thunk();
                hs_sat26D6EG.evaluateOnce = function () {
                    return hs_act26D6gK.hscall(hs_wild26D6gJ);
                };
                var hs_sat26D6EF = new $hs.Thunk();
                hs_sat26D6EF.evaluateOnce = function () {
                    var hs_sat26D6EI = new $hs.Thunk();
                    hs_sat26D6EI.evaluateOnce = function () {
                        var hs_sat26D6EL = new $hs.Thunk();
                        hs_sat26D6EL.evaluateOnce = function () {
                            var hs_sat26D6ER = new $hs.Func(1);
                            hs_sat26D6ER.evaluate = function (hs_cbufzq26D6gX) {
                                var hs_sat26D6ET = new $hs.Thunk();
                                hs_sat26D6ET.evaluateOnce = function () {
                                    var hs_sat26D6EY = new $hs.Func(1);
                                    hs_sat26D6EY.evaluate = function (hs_bbuf126D6he) {
                                        var hs_sat26D6EZ = new $hs.Thunk();
                                        hs_sat26D6EZ.evaluateOnce = function () {
                                            var hs_wild226D6F1 = hs_bbuf126D6he;
                                            if (hs_bbuf126D6he.notEvaluated) {
                                                hs_wild226D6F1 = hs_bbuf126D6he.hscall();
                                            }
                                            var hs_rb426D6hm = hs_wild226D6F1.data[0];
                                            var hs_rb526D6hn = hs_wild226D6F1.data[1];
                                            var hs_rb626D6ho = hs_wild226D6F1.data[3];
                                            var hs_rb726D6hp = hs_wild226D6F1.data[4];
                                            var hs_rb826D6hq = hs_wild226D6F1.data[5];
                                            var $res = new $hs.Data(1);
                                            $res.data = [hs_rb426D6hm, hs_rb526D6hn, $hs.modules.GHCziIOziBuffer.hs_ReadBuffer, hs_rb626D6ho, hs_rb726D6hp, hs_rb826D6hq];
                                            return $res;
                                        };
                                        return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a26D6gD, hs_sat26D6EZ);
                                    };
                                    var hs_sat26D6EX = new $hs.Thunk();
                                    hs_sat26D6EX.evaluateOnce = function () {
                                        return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a26D6gD);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6EX, hs_sat26D6EY);
                                };
                                var hs_sat26D6ES = new $hs.Thunk();
                                hs_sat26D6ES.evaluateOnce = function () {
                                    var hs_sat26D6EU = new $hs.Thunk();
                                    hs_sat26D6EU.evaluateOnce = function () {
                                        var hs_wild226D6EW = hs_cbufzq26D6gX;
                                        if (hs_cbufzq26D6gX.notEvaluated) {
                                            hs_wild226D6EW = hs_cbufzq26D6gX.hscall();
                                        }
                                        var hs_rb426D6h5 = hs_wild226D6EW.data[0];
                                        var hs_rb526D6h6 = hs_wild226D6EW.data[1];
                                        var hs_rb626D6h7 = hs_wild226D6EW.data[3];
                                        var hs_rb726D6h8 = hs_wild226D6EW.data[4];
                                        var hs_rb826D6h9 = hs_wild226D6EW.data[5];
                                        var $res = new $hs.Data(1);
                                        $res.data = [hs_rb426D6h5, hs_rb526D6h6, $hs.modules.GHCziIOziBuffer.hs_ReadBuffer, hs_rb626D6h7, hs_rb726D6h8, hs_rb826D6h9];
                                        return $res;
                                    };
                                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126D6gG, hs_sat26D6EU);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6ES, hs_sat26D6ET);
                            };
                            var hs_sat26D6EQ = new $hs.Thunk();
                            hs_sat26D6EQ.evaluateOnce = function () {
                                return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a126D6gG);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6EQ, hs_sat26D6ER);
                        };
                        var hs_sat26D6EK = new $hs.Thunk();
                        hs_sat26D6EK.evaluateOnce = function () {
                            var hs_sat26D6EN = new $hs.Thunk();
                            hs_sat26D6EN.evaluateOnce = function () {
                                return $hs.modules.GHCziIOziHandleziInternals.hs_flushByteWriteBuffer.hscall(hs_wild26D6gJ);
                            };
                            var hs_sat26D6EM = new $hs.Thunk();
                            hs_sat26D6EM.evaluateOnce = function () {
                                var hs_sat26D6EO = new $hs.Thunk();
                                hs_sat26D6EO.evaluateOnce = function () {
                                    var hs_sat26D6EP = new $hs.Thunk();
                                    hs_sat26D6EP.evaluateOnce = function () {
                                        return $hs.modules.GHCziIOziBuffer.hs_isEmptyBuffer.hscall(hs_bbuf26D6gN);
                                    };
                                    return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26D6EP);
                                };
                                return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6EO);
                            };
                            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D6EM, hs_sat26D6EN);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6EK, hs_sat26D6EL);
                    };
                    var hs_sat26D6EH = new $hs.Thunk();
                    hs_sat26D6EH.evaluateOnce = function () {
                        var hs_sat26D6EJ = new $hs.Thunk();
                        hs_sat26D6EJ.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziBuffer.hs_isWriteBuffer.hscall(hs_bbuf26D6gN);
                        };
                        return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6EJ);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D6EH, hs_sat26D6EI);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6EF, hs_sat26D6EG);
            };
            var hs_sat26D6ED = new $hs.Thunk();
            hs_sat26D6ED.evaluateOnce = function () {
                return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a26D6gD);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6ED, hs_sat26D6EE);
        default:
            if ($hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.notEvaluated) {
                return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.hscall();
            } else {
                return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle;
            }
        }
    };
    this.hs_augmentIOError.evaluate = function (hs_ioe26D6hD, hs_fun26D6hW, hs_h26D6hT) {
        var hs_wild26D6hL = hs_ioe26D6hD;
        if (hs_ioe26D6hD.notEvaluated) {
            hs_wild26D6hL = hs_ioe26D6hD.hscall();
        }
        var hs_ds526D6hZ = hs_wild26D6hL.data[5];
        var hs_wild126D6F3 = hs_wild26D6hL;
        if (hs_wild26D6hL.notEvaluated) {
            hs_wild126D6F3 = hs_wild26D6hL.hscall();
        }
        var hs_ds726D6hV = hs_wild126D6F3.data[1];
        var hs_ds926D6hX = hs_wild126D6F3.data[3];
        var hs_ds1026D6hY = hs_wild126D6F3.data[4];
        var hs_sat26D6Fc = new $hs.Thunk();
        hs_sat26D6Fc.evaluateOnce = function () {
            var hs_wild226D6ia = hs_ds526D6hZ;
            if (hs_ds526D6hZ.notEvaluated) {
                hs_wild226D6ia = hs_ds526D6hZ.hscall();
            }
            switch (hs_wild226D6ia.tag) {
            case 1:
                var hs_wild326D6Fg = hs_h26D6hT;
                if (hs_h26D6hT.notEvaluated) {
                    hs_wild326D6Fg = hs_h26D6hT.hscall();
                }
                switch (hs_wild326D6Fg.tag) {
                case 1:
                    var hs_path26D6i4 = hs_wild326D6Fg.data[0];
                    var $res = new $hs.Data(2);
                    $res.data = [hs_path26D6i4];
                    return $res;
                case 2:
                    var hs_path26D6i8 = hs_wild326D6Fg.data[0];
                    var $res = new $hs.Data(2);
                    $res.data = [hs_path26D6i8];
                    return $res;
                }
            case 2:
                if (hs_wild226D6ia.notEvaluated) {
                    return hs_wild226D6ia.hscall();
                } else {
                    return hs_wild226D6ia;
                }
            }
        };
        var hs_sat26D6F2 = new $hs.Data(2);
        hs_sat26D6F2.data = [hs_h26D6hT];
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26D6F2, hs_ds726D6hV, hs_fun26D6hW, hs_ds926D6hX, hs_ds1026D6hY, hs_sat26D6Fc];
        return $res;
    };
    hs_dozuoperation25tVKN.evaluate = function (hs_fun26D6iw, hs_h26D6ix, hs_act26D6il, hs_m26D6ig) {
        var hs_sat26D6Fj = new $hs.Func(1);
        hs_sat26D6Fj.evaluate = function (hs_hzu26D6ij) {
            var hs_sat26D6Fl = new $hs.Thunk();
            hs_sat26D6Fl.evaluateOnce = function () {
                var hs_sat26D6Fn = new $hs.Func(1);
                hs_sat26D6Fn.evaluate = function (hs_e26D6ip) {
                    var hs_sat26D6Fp = new $hs.Thunk();
                    hs_sat26D6Fp.evaluateOnce = function () {
                        var hs_wild26D6Fr = $hs.modules.GHCziException.hs_fromException.hscall($hs.modules.GHCziIOziException.hs_zdfExceptionIOException, hs_e26D6ip);
                        switch (hs_wild26D6Fr.tag) {
                        case 1:
                            var hs_wild126D6FJ = $hs.modules.GHCziException.hs_fromException.hscall($hs.modules.GHCziIOziException.hs_zdfExceptionAsyncException, hs_e26D6ip);
                            switch (hs_wild126D6FJ.tag) {
                            case 1:
                                return $hs.modules.GHCziIO.hs_throwIO.hscall($hs.modules.GHCziException.hs_zdfExceptionSomeException, hs_e26D6ip);
                            case 2:
                                var hs_sat26D6FI = new $hs.Func(1);
                                hs_sat26D6FI.evaluate = function (hs_t26D6iu) {
                                    var hs_sat26D6FM = new $hs.Thunk();
                                    hs_sat26D6FM.evaluateOnce = function () {
                                        return hs_dozuoperation25tVKN.hscall(hs_fun26D6iw, hs_h26D6ix, hs_act26D6il, hs_m26D6ig);
                                    };
                                    var hs_sat26D6FL = new $hs.Thunk();
                                    hs_sat26D6FL.evaluateOnce = function () {
                                        return $hs.modules.GHCziConcziSync.hs_throwTo.hscall($hs.modules.GHCziException.hs_zdfExceptionSomeException, hs_t26D6iu, hs_e26D6ip);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6FL, hs_sat26D6FM);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziConcziSync.hs_myThreadId, hs_sat26D6FI);
                            }
                        case 2:
                            var hs_ioe26D6iB = hs_wild26D6Fr.data[0];
                            var hs_sat26D6Fq = new $hs.Thunk();
                            hs_sat26D6Fq.evaluateOnce = function () {
                                var hs_wild126D6iJ = hs_ioe26D6iB;
                                if (hs_ioe26D6iB.notEvaluated) {
                                    hs_wild126D6iJ = hs_ioe26D6iB.hscall();
                                }
                                var hs_ds526D6iV = hs_wild126D6iJ.data[5];
                                var hs_wild226D6Ft = hs_wild126D6iJ;
                                if (hs_wild126D6iJ.notEvaluated) {
                                    hs_wild226D6Ft = hs_wild126D6iJ.hscall();
                                }
                                var hs_ds726D6iS = hs_wild226D6Ft.data[1];
                                var hs_ds926D6iT = hs_wild226D6Ft.data[3];
                                var hs_ds1026D6iU = hs_wild226D6Ft.data[4];
                                var hs_sat26D6FC = new $hs.Thunk();
                                hs_sat26D6FC.evaluateOnce = function () {
                                    var hs_wild326D6j6 = hs_ds526D6iV;
                                    if (hs_ds526D6iV.notEvaluated) {
                                        hs_wild326D6j6 = hs_ds526D6iV.hscall();
                                    }
                                    switch (hs_wild326D6j6.tag) {
                                    case 1:
                                        var hs_wild426D6FG = hs_h26D6ix;
                                        if (hs_h26D6ix.notEvaluated) {
                                            hs_wild426D6FG = hs_h26D6ix.hscall();
                                        }
                                        switch (hs_wild426D6FG.tag) {
                                        case 1:
                                            var hs_path26D6j0 = hs_wild426D6FG.data[0];
                                            var $res = new $hs.Data(2);
                                            $res.data = [hs_path26D6j0];
                                            return $res;
                                        case 2:
                                            var hs_path26D6j4 = hs_wild426D6FG.data[0];
                                            var $res = new $hs.Data(2);
                                            $res.data = [hs_path26D6j4];
                                            return $res;
                                        }
                                    case 2:
                                        if (hs_wild326D6j6.notEvaluated) {
                                            return hs_wild326D6j6.hscall();
                                        } else {
                                            return hs_wild326D6j6;
                                        }
                                    }
                                };
                                var hs_sat26D6Fs = new $hs.Data(2);
                                hs_sat26D6Fs.data = [hs_h26D6ix];
                                var $res = new $hs.Data(1);
                                $res.data = [hs_sat26D6Fs, hs_ds726D6iS, hs_fun26D6iw, hs_ds926D6iT, hs_ds1026D6iU, hs_sat26D6FC];
                                return $res;
                            };
                            return $hs.modules.GHCziIOziException.hs_ioError.hscall(hs_sat26D6Fq);
                        }
                    };
                    var hs_sat26D6Fo = new $hs.Thunk();
                    hs_sat26D6Fo.evaluateOnce = function () {
                        return $hs.modules.GHCziMVar.hs_putMVar.hscall(hs_m26D6ig, hs_hzu26D6ij);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Fo, hs_sat26D6Fp);
                };
                var hs_sat26D6Fm = new $hs.Thunk();
                hs_sat26D6Fm.evaluateOnce = function () {
                    return hs_act26D6il.hscall(hs_hzu26D6ij);
                };
                return $hs.modules.GHCziIO.hs_catchException.hscall($hs.modules.GHCziException.hs_zdfExceptionSomeException, hs_sat26D6Fm, hs_sat26D6Fn);
            };
            var hs_sat26D6Fk = new $hs.Thunk();
            hs_sat26D6Fk.evaluateOnce = function () {
                return $hs.modules.GHCziIOziHandleziTypes.hs_checkHandleInvariants.hscall(hs_hzu26D6ij);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Fk, hs_sat26D6Fl);
        };
        var hs_sat26D6Fi = new $hs.Thunk();
        hs_sat26D6Fi.evaluateOnce = function () {
            return $hs.modules.GHCziMVar.hs_takeMVar.hscall(hs_m26D6ig);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Fi, hs_sat26D6Fj);
    };
    this.hs_withHandlezq.evaluate = function (hs_fun26D6jh, hs_h26D6ji, hs_m26D6jk, hs_act26D6jj) {
        var hs_sat26D6FN = new $hs.Thunk();
        hs_sat26D6FN.evaluateOnce = function () {
            var hs_sat26D6FP = new $hs.Func(1);
            hs_sat26D6FP.evaluate = function (hs_ds26D6jn) {
                var hs_wild26D6FR = hs_ds26D6jn;
                if (hs_ds26D6jn.notEvaluated) {
                    hs_wild26D6FR = hs_ds26D6jn.hscall();
                }
                var hs_hzq26D6jr = hs_wild26D6FR.data[0];
                var hs_v26D6ju = hs_wild26D6FR.data[1];
                var hs_sat26D6FS = new $hs.Thunk();
                hs_sat26D6FS.evaluateOnce = function () {
                    var hs_sat26D6FU = new $hs.Thunk();
                    hs_sat26D6FU.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_v26D6ju);
                    };
                    var hs_sat26D6FT = new $hs.Thunk();
                    hs_sat26D6FT.evaluateOnce = function () {
                        return $hs.modules.GHCziMVar.hs_putMVar.hscall(hs_m26D6jk, hs_hzq26D6jr);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6FT, hs_sat26D6FU);
                };
                var hs_sat26D6FQ = new $hs.Thunk();
                hs_sat26D6FQ.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziHandleziTypes.hs_checkHandleInvariants.hscall(hs_hzq26D6jr);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6FQ, hs_sat26D6FS);
            };
            var hs_sat26D6FO = new $hs.Thunk();
            hs_sat26D6FO.evaluateOnce = function () {
                return hs_dozuoperation25tVKN.hscall(hs_fun26D6jh, hs_h26D6ji, hs_act26D6jj, hs_m26D6jk);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6FO, hs_sat26D6FP);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_maskzu, hs_sat26D6FN);
    };
    this.hs_withHandlezuzq.evaluate = function (hs_fun26D6jD, hs_h26D6jE, hs_m26D6jF, hs_act26D6jJ) {
        var hs_sat26D6FW = new $hs.Func(1);
        hs_sat26D6FW.evaluate = function (hs_hzu26D6jI) {
            var hs_sat26D6FY = new $hs.Func(1);
            hs_sat26D6FY.evaluate = function (hs_a26D6jM) {
                var hs_sat26D6FZ = new $hs.Data(1);
                hs_sat26D6FZ.data = [hs_hzu26D6jI, hs_a26D6jM];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6FZ);
            };
            var hs_sat26D6FX = new $hs.Thunk();
            hs_sat26D6FX.evaluateOnce = function () {
                return hs_act26D6jJ.hscall(hs_hzu26D6jI);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6FX, hs_sat26D6FY);
        };
        var hs_sat26D6FV = new $hs.Func(1);
        hs_sat26D6FV.evaluate = function (hs_eta1cW6l3) {
            return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezq.hscall(hs_fun26D6jD, hs_h26D6jE, hs_m26D6jF, hs_eta1cW6l3);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D6FV, hs_sat26D6FW);
    };
    this.hs_withHandlezu.evaluate = function (hs_eta26D6jX, hs_eta126D6jT, hs_eta226D6k1) {
        var hs_wild26D6jY = hs_eta126D6jT;
        if (hs_eta126D6jT.notEvaluated) {
            hs_wild26D6jY = hs_eta126D6jT.hscall();
        }
        switch (hs_wild26D6jY.tag) {
        case 1:
            var hs_rb26D6jZ = hs_wild26D6jY.data[1];
            var hs_sat26D6G3 = new $hs.Data(1);
            hs_sat26D6G3.data = [hs_rb26D6jZ];
            return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezuzq.hscall(hs_eta26D6jX, hs_wild26D6jY, hs_sat26D6G3, hs_eta226D6k1);
        case 2:
            var hs_rb26D6k5 = hs_wild26D6jY.data[1];
            var hs_sat26D6G0 = new $hs.Data(1);
            hs_sat26D6G0.data = [hs_rb26D6k5];
            return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezuzq.hscall(hs_eta26D6jX, hs_wild26D6jY, hs_sat26D6G0, hs_eta226D6k1);
        }
    };
    hs_wantReadableHandlezq25tVKU.evaluate = function (hs_fun26D6kb, hs_h26D6kc, hs_m26D6kd, hs_act26D6kg) {
        var hs_sat26D6G6 = new $hs.Func(1);
        hs_sat26D6G6.evaluate = function (hs_hzu26D6kh) {
            var hs_sat26D6G8 = new $hs.Func(1);
            hs_sat26D6G8.evaluate = function (hs_a26D6kk) {
                var hs_sat26D6G9 = new $hs.Data(1);
                hs_sat26D6G9.data = [hs_hzu26D6kh, hs_a26D6kk];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6G9);
            };
            var hs_sat26D6G7 = new $hs.Thunk();
            hs_sat26D6G7.evaluateOnce = function () {
                return hs_checkReadableHandle25tVKV.hscall(hs_act26D6kg, hs_hzu26D6kh);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6G7, hs_sat26D6G8);
        };
        var hs_sat26D6G5 = new $hs.Func(1);
        hs_sat26D6G5.evaluate = function (hs_eta1cW6l3) {
            return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezq.hscall(hs_fun26D6kb, hs_h26D6kc, hs_m26D6kd, hs_eta1cW6l3);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D6G5, hs_sat26D6G6);
    };
    this.hs_wantReadableHandlezu.evaluate = function (hs_fun26D6kv, hs_h26D6kr, hs_act26D6kz) {
        var hs_wild26D6kw = hs_h26D6kr;
        if (hs_h26D6kr.notEvaluated) {
            hs_wild26D6kw = hs_h26D6kr.hscall();
        }
        switch (hs_wild26D6kw.tag) {
        case 1:
            var hs_rb26D6kx = hs_wild26D6kw.data[1];
            var hs_sat26D6Gd = new $hs.Data(1);
            hs_sat26D6Gd.data = [hs_rb26D6kx];
            return hs_wantReadableHandlezq25tVKU.hscall(hs_fun26D6kv, hs_wild26D6kw, hs_sat26D6Gd, hs_act26D6kz);
        case 2:
            var hs_rb26D6kD = hs_wild26D6kw.data[1];
            var hs_sat26D6Ga = new $hs.Data(1);
            hs_sat26D6Ga.data = [hs_rb26D6kD];
            return hs_wantReadableHandlezq25tVKU.hscall(hs_fun26D6kv, hs_wild26D6kw, hs_sat26D6Ga, hs_act26D6kz);
        }
    };
    this.hs_wantSeekableHandle.evaluate = function (hs_fun26D6kM, hs_h26D6kI, hs_zuact26D6li) {
        var hs_wild26D6kN = hs_h26D6kI;
        if (hs_h26D6kI.notEvaluated) {
            hs_wild26D6kN = hs_h26D6kI.hscall();
        }
        switch (hs_wild26D6kN.tag) {
        case 1:
            var hs_rb26D6kO = hs_wild26D6kN.data[1];
            var hs_sat26D6Gn = new $hs.Func(1);
            hs_sat26D6Gn.evaluate = function (hs_hzu26D6kS) {
                var hs_sat26D6Gq = new $hs.Func(1);
                hs_sat26D6Gq.evaluate = function (hs_a26D6lm) {
                    var hs_sat26D6GJ = new $hs.Data(1);
                    hs_sat26D6GJ.data = [hs_hzu26D6kS, hs_a26D6lm];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6GJ);
                };
                var hs_sat26D6Gp = new $hs.Thunk();
                hs_sat26D6Gp.evaluateOnce = function () {
                    var hs_wild126D6la = hs_hzu26D6kS;
                    if (hs_hzu26D6kS.notEvaluated) {
                        hs_wild126D6la = hs_hzu26D6kS.hscall();
                    }
                    var hs_zddIODevice26D6lc = hs_wild126D6la.data[0];
                    var hs_ds126D6ld = hs_wild126D6la.data[3];
                    var hs_wild226D6GF = $hs.modules.GHCziIOziHandleziTypes.hs_haType.hscall(hs_wild126D6la);
                    switch (hs_wild226D6GF.tag) {
                    case 1:
                        if ($hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.notEvaluated) {
                            return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.hscall();
                        } else {
                            return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle;
                        }
                    case 2:
                        if ($hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.notEvaluated) {
                            return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.hscall();
                        } else {
                            return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle;
                        }
                    case 5:
                        if (hs_ioezunotSeekable25tVL2.notEvaluated) {
                            return hs_ioezunotSeekable25tVL2.hscall();
                        } else {
                            return hs_ioezunotSeekable25tVL2;
                        }
                    default:
                        var hs_sat26D6GH = new $hs.Func(1);
                        hs_sat26D6GH.evaluate = function (hs_b26D6lg) {
                            var hs_wild326D6GI = hs_b26D6lg;
                            if (hs_b26D6lg.notEvaluated) {
                                hs_wild326D6GI = hs_b26D6lg.hscall();
                            }
                            switch (hs_wild326D6GI.tag) {
                            case 1:
                                if (hs_ioezunotSeekable25tVL2.notEvaluated) {
                                    return hs_ioezunotSeekable25tVL2.hscall();
                                } else {
                                    return hs_ioezunotSeekable25tVL2;
                                }
                            case 2:
                                return hs_zuact26D6li.hscall(hs_wild126D6la);
                            }
                        };
                        var hs_sat26D6GG = new $hs.Thunk();
                        hs_sat26D6GG.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziDevice.hs_isSeekable.hscall(hs_zddIODevice26D6lc, hs_ds126D6ld);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6GG, hs_sat26D6GH);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Gp, hs_sat26D6Gq);
            };
            var hs_sat26D6Go = new $hs.Data(1);
            hs_sat26D6Go.data = [hs_rb26D6kO];
            var hs_sat26D6Gl = new $hs.Func(1);
            hs_sat26D6Gl.evaluate = function (hs_eta1cW6l3) {
                return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezq.hscall(hs_fun26D6kM, hs_wild26D6kN, hs_sat26D6Go, hs_eta1cW6l3);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D6Gl, hs_sat26D6Gn);
        case 2:
            var hs_sat26D6Gj = new $hs.Thunk();
            hs_sat26D6Gj.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("handle is not seekable\x00");
            };
            var hs_sat26D6Gk = new $hs.Data(2);
            hs_sat26D6Gk.data = [hs_wild26D6kN];
            var hs_sat26D6Gf = new $hs.Data(1);
            hs_sat26D6Gf.data = [hs_sat26D6Gk, $hs.modules.GHCziIOziException.hs_IllegalOperation, hs_fun26D6kM, hs_sat26D6Gj, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing];
            return $hs.modules.GHCziIOziException.hs_ioException.hscall(hs_sat26D6Gf);
        }
    };
    this.hs_withHandle.evaluate = function (hs_eta26D6lD, hs_eta126D6lz, hs_eta226D6lH) {
        var hs_wild26D6lE = hs_eta126D6lz;
        if (hs_eta126D6lz.notEvaluated) {
            hs_wild26D6lE = hs_eta126D6lz.hscall();
        }
        switch (hs_wild26D6lE.tag) {
        case 1:
            var hs_rb26D6lF = hs_wild26D6lE.data[1];
            var hs_sat26D6GN = new $hs.Data(1);
            hs_sat26D6GN.data = [hs_rb26D6lF];
            return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezq.hscall(hs_eta26D6lD, hs_wild26D6lE, hs_sat26D6GN, hs_eta226D6lH);
        case 2:
            var hs_rb26D6lL = hs_wild26D6lE.data[1];
            var hs_sat26D6GK = new $hs.Data(1);
            hs_sat26D6GK.data = [hs_rb26D6lL];
            return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezq.hscall(hs_eta26D6lD, hs_wild26D6lE, hs_sat26D6GK, hs_eta226D6lH);
        }
    };
    this.hs_wantReadableHandle.evaluate = function (hs_fun26D6lU, hs_h26D6lQ, hs_act26D6lY) {
        var hs_wild26D6lV = hs_h26D6lQ;
        if (hs_h26D6lQ.notEvaluated) {
            hs_wild26D6lV = hs_h26D6lQ.hscall();
        }
        switch (hs_wild26D6lV.tag) {
        case 1:
            var hs_rb26D6lW = hs_wild26D6lV.data[1];
            var hs_sat26D6GV = new $hs.Func(1);
            hs_sat26D6GV.evaluate = function (hs_eta1cW6l3) {
                return hs_checkReadableHandle25tVKV.hscall(hs_act26D6lY, hs_eta1cW6l3);
            };
            var hs_sat26D6GT = new $hs.Data(1);
            hs_sat26D6GT.data = [hs_rb26D6lW];
            return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezq.hscall(hs_fun26D6lU, hs_wild26D6lV, hs_sat26D6GT, hs_sat26D6GV);
        case 2:
            var hs_rb26D6m3 = hs_wild26D6lV.data[1];
            var hs_sat26D6GS = new $hs.Func(1);
            hs_sat26D6GS.evaluate = function (hs_eta1cW6l3) {
                return hs_checkReadableHandle25tVKV.hscall(hs_act26D6lY, hs_eta1cW6l3);
            };
            var hs_sat26D6GP = new $hs.Data(1);
            hs_sat26D6GP.data = [hs_rb26D6m3];
            return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezq.hscall(hs_fun26D6lU, hs_wild26D6lV, hs_sat26D6GP, hs_sat26D6GS);
        }
    };
    this.hs_debugIO.evaluate = function (hs_s26D6m7) {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
    };
    this.hs_writeCharBuffer.evaluate = function (hs_hzu26D6ma, hs_cbuf26D6mv) {
        var hs_wild26D6nm = hs_hzu26D6ma;
        if (hs_hzu26D6ma.notEvaluated) {
            hs_wild26D6nm = hs_hzu26D6ma.hscall();
        }
        var hs_zddBufferedIO26D6nd = hs_wild26D6nm.data[1];
        var hs_ds26D6ne = hs_wild26D6nm.data[3];
        var hs_rb26D6mt = hs_wild26D6nm.data[5];
        var hs_ds226D6n2 = hs_wild26D6nm.data[6];
        var hs_ds326D6mG = hs_wild26D6nm.data[10];
        var hs_a26D6mu = new $hs.Data(1);
        hs_a26D6mu.data = [hs_rb26D6mt];
        var hs_cbuf126D6mI = hs_cbuf26D6mv;
        if (hs_cbuf26D6mv.notEvaluated) {
            hs_cbuf126D6mI = hs_cbuf26D6mv.hscall();
        }
        var hs_sat26D6He = new $hs.Func(1);
        hs_sat26D6He.evaluate = function (hs_bbuf26D6mJ) {
            var hs_sat26D6Hg = new $hs.Thunk();
            hs_sat26D6Hg.evaluateOnce = function () {
                var hs_sat26D6Hi = new $hs.Func(1);
                hs_sat26D6Hi.evaluate = function (hs_ds926D6mO) {
                    var hs_wild126D6Hl = hs_ds926D6mO;
                    if (hs_ds926D6mO.notEvaluated) {
                        hs_wild126D6Hl = hs_ds926D6mO.hscall();
                    }
                    var hs_cbufzq26D6mV = hs_wild126D6Hl.data[0];
                    var hs_bbufzq26D6mT = hs_wild126D6Hl.data[1];
                    var hs_sat26D6Hm = new $hs.Thunk();
                    hs_sat26D6Hm.evaluateOnce = function () {
                        var hs_sat26D6Ho = new $hs.Thunk();
                        hs_sat26D6Ho.evaluateOnce = function () {
                            var hs_sat26D6HE = new $hs.Thunk();
                            hs_sat26D6HE.evaluateOnce = function () {
                                return $hs.modules.GHCziIOziBuffer.hs_isEmptyBuffer.hscall(hs_cbufzq26D6mV);
                            };
                            var hs_wild226D6HF = $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26D6HE);
                            switch (hs_wild226D6HF.tag) {
                            case 1:
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                            case 2:
                                return $hs.modules.GHCziIOziHandleziInternals.hs_writeCharBuffer.hscall(hs_wild26D6nm, hs_cbufzq26D6mV);
                            }
                        };
                        var hs_sat26D6Hn = new $hs.Thunk();
                        hs_sat26D6Hn.evaluateOnce = function () {
                            var hs_sat26D6Hq = new $hs.Thunk();
                            hs_sat26D6Hq.evaluateOnce = function () {
                                var hs_sat26D6Hv = new $hs.Thunk();
                                hs_sat26D6Hv.evaluateOnce = function () {
                                    var hs_wild226D6HB = hs_ds226D6n2;
                                    if (hs_ds226D6n2.notEvaluated) {
                                        hs_wild226D6HB = hs_ds226D6n2.hscall();
                                    }
                                    switch (hs_wild226D6HB.tag) {
                                    case 1:
                                        var $res = new $hs.Data(2);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 3:
                                        var hs_ds1026D6n5 = hs_wild226D6HB.data[0];
                                        var hs_wild326D6HD = hs_ds1026D6n5;
                                        if (hs_ds1026D6n5.notEvaluated) {
                                            hs_wild326D6HD = hs_ds1026D6n5.hscall();
                                        }
                                        switch (hs_wild326D6HD.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_s26D6n9 = hs_wild326D6HD.data[0];
                                            var hs_sat26D6HC = new $hs.Thunk();
                                            hs_sat26D6HC.evaluateOnce = function () {
                                                return $hs.modules.GHCziIOziBuffer.hs_bufferElems.hscall(hs_bbufzq26D6mT);
                                            };
                                            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26D6HC, hs_s26D6n9);
                                        }
                                    }
                                };
                                var hs_sat26D6Hu = new $hs.Thunk();
                                hs_sat26D6Hu.evaluateOnce = function () {
                                    var hs_sat26D6Hx = new $hs.Thunk();
                                    hs_sat26D6Hx.evaluateOnce = function () {
                                        var hs_sat26D6HA = new $hs.Thunk();
                                        hs_sat26D6HA.evaluateOnce = function () {
                                            return $hs.modules.GHCziIOziBuffer.hs_bufL.hscall(hs_cbuf126D6mI);
                                        };
                                        var hs_sat26D6Hz = new $hs.Thunk();
                                        hs_sat26D6Hz.evaluateOnce = function () {
                                            return $hs.modules.GHCziIOziBuffer.hs_bufL.hscall(hs_cbufzq26D6mV);
                                        };
                                        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_sat26D6Hz, hs_sat26D6HA);
                                    };
                                    var hs_sat26D6Hw = new $hs.Thunk();
                                    hs_sat26D6Hw.evaluateOnce = function () {
                                        var hs_sat26D6Hy = new $hs.Thunk();
                                        hs_sat26D6Hy.evaluateOnce = function () {
                                            return $hs.modules.GHCziIOziBuffer.hs_isEmptyBuffer.hscall(hs_cbufzq26D6mV);
                                        };
                                        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26D6Hy);
                                    };
                                    return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26D6Hw, hs_sat26D6Hx);
                                };
                                return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26D6Hu, hs_sat26D6Hv);
                            };
                            var hs_sat26D6Hr = new $hs.Thunk();
                            hs_sat26D6Hr.evaluateOnce = function () {
                                return $hs.modules.GHCziIOziBuffer.hs_isFullBuffer.hscall(hs_bbufzq26D6mT);
                            };
                            var hs_wild226D6Hs = $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26D6Hr, hs_sat26D6Hq);
                            switch (hs_wild226D6Hs.tag) {
                            case 1:
                                return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a26D6mu, hs_bbufzq26D6mT);
                            case 2:
                                var hs_sat26D6Ht = new $hs.Func(1);
                                hs_sat26D6Ht.evaluate = function (hs_bbufzqzq26D6nh) {
                                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a26D6mu, hs_bbufzqzq26D6nh);
                                };
                                var hs_sat26D6Hp = new $hs.Thunk();
                                hs_sat26D6Hp.evaluateOnce = function () {
                                    return $hs.modules.GHCziIOziBufferedIO.hs_flushWriteBuffer.hscall(hs_zddBufferedIO26D6nd, hs_ds26D6ne, hs_bbufzq26D6mT);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Hp, hs_sat26D6Ht);
                            }
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Hn, hs_sat26D6Ho);
                    };
                    var hs_sat26D6Hk = new $hs.Thunk();
                    hs_sat26D6Hk.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Hk, hs_sat26D6Hm);
                };
                var hs_sat26D6Hh = new $hs.Thunk();
                hs_sat26D6Hh.evaluateOnce = function () {
                    var hs_wild126D6Hj = hs_ds326D6mG;
                    if (hs_ds326D6mG.notEvaluated) {
                        hs_wild126D6Hj = hs_ds326D6mG.hscall();
                    }
                    switch (hs_wild126D6Hj.tag) {
                    case 1:
                        return $hs.modules.GHCziIOziEncoding.hs_latin1zuencode.hscall(hs_cbuf126D6mI, hs_bbuf26D6mJ);
                    case 2:
                        var hs_encoder26D6mL = hs_wild126D6Hj.data[0];
                        return hs_streamEncode25tVL7.hscall(hs_encoder26D6mL, hs_cbuf126D6mI, hs_bbuf26D6mJ);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Hh, hs_sat26D6Hi);
            };
            var hs_sat26D6Hf = new $hs.Thunk();
            hs_sat26D6Hf.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Hf, hs_sat26D6Hg);
        };
        var hs_sat26D6GW = new $hs.Thunk();
        hs_sat26D6GW.evaluateOnce = function () {
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a26D6mu);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6GW, hs_sat26D6He);
    };
    this.hs_flushCharReadBuffer.evaluate = function (hs_ds26D6nt) {
        var hs_wild26D6HH = hs_ds26D6nt;
        if (hs_ds26D6nt.notEvaluated) {
            hs_wild26D6HH = hs_ds26D6nt.hscall();
        }
        var hs_rb26D6nM = hs_wild26D6HH.data[5];
        var hs_rb126D6nP = hs_wild26D6HH.data[7];
        var hs_rb226D6nS = hs_wild26D6HH.data[8];
        var hs_ds526D6op = hs_wild26D6HH.data[11];
        var hs_a26D6nN = new $hs.Data(1);
        hs_a26D6nN.data = [hs_rb26D6nM];
        var hs_a126D6nQ = new $hs.Data(1);
        hs_a126D6nQ.data = [hs_rb126D6nP];
        var hs_a226D6nT = new $hs.Data(1);
        hs_a226D6nT.data = [hs_rb226D6nS];
        var hs_sat26D6HU = new $hs.Func(1);
        hs_sat26D6HU.evaluate = function (hs_cbuf26D6nW) {
            var hs_sat26D6HV = new $hs.Thunk();
            hs_sat26D6HV.evaluateOnce = function () {
                return $hs.modules.GHCziIOziBuffer.hs_isEmptyBuffer.hscall(hs_cbuf26D6nW);
            };
            var hs_sat26D6HW = new $hs.Thunk();
            hs_sat26D6HW.evaluateOnce = function () {
                return $hs.modules.GHCziIOziBuffer.hs_isWriteBuffer.hscall(hs_cbuf26D6nW);
            };
            var hs_wild126D6HX = $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26D6HW, hs_sat26D6HV);
            switch (hs_wild126D6HX.tag) {
            case 1:
                var hs_sat26D6HZ = new $hs.Func(1);
                hs_sat26D6HZ.evaluate = function (hs_ds1026D6o2) {
                    var hs_wild226D6I1 = hs_ds1026D6o2;
                    if (hs_ds1026D6o2.notEvaluated) {
                        hs_wild226D6I1 = hs_ds1026D6o2.hscall();
                    }
                    var hs_codeczustate26D6oO = hs_wild226D6I1.data[0];
                    var hs_bbuf026D6or = hs_wild226D6I1.data[1];
                    var hs_sat26D6I2 = new $hs.Func(1);
                    hs_sat26D6I2.evaluate = function (hs_cbuf026D6o8) {
                        var hs_sat26D6I4 = new $hs.Thunk();
                        hs_sat26D6I4.evaluateOnce = function () {
                            var hs_sat26D6Ia = new $hs.Data(1);
                            hs_sat26D6Ia.data = [0];
                            var hs_sat26D6Ib = new $hs.Thunk();
                            hs_sat26D6Ib.evaluateOnce = function () {
                                return $hs.modules.GHCziIOziBuffer.hs_bufL.hscall(hs_cbuf026D6o8);
                            };
                            var hs_wild326D6Ic = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_sat26D6Ib, hs_sat26D6Ia);
                            switch (hs_wild326D6Ic.tag) {
                            case 1:
                                var hs_wild426D6If = hs_ds526D6op;
                                if (hs_ds526D6op.notEvaluated) {
                                    hs_wild426D6If = hs_ds526D6op.hscall();
                                }
                                switch (hs_wild426D6If.tag) {
                                case 1:
                                    var hs_sat26D6Iu = new $hs.Thunk();
                                    hs_sat26D6Iu.evaluateOnce = function () {
                                        var hs_wild526D6oz = hs_bbuf026D6or;
                                        if (hs_bbuf026D6or.notEvaluated) {
                                            hs_wild526D6oz = hs_bbuf026D6or.hscall();
                                        }
                                        var hs_rb426D6oE = hs_wild526D6oz.data[0];
                                        var hs_rb526D6oF = hs_wild526D6oz.data[1];
                                        var hs_ds1126D6oG = hs_wild526D6oz.data[2];
                                        var hs_rb626D6oH = hs_wild526D6oz.data[3];
                                        var hs_rb826D6oJ = hs_wild526D6oz.data[5];
                                        var hs_sat26D6Iw = new $hs.Thunk();
                                        hs_sat26D6Iw.evaluateOnce = function () {
                                            return $hs.modules.GHCziIOziBuffer.hs_bufL.hscall(hs_cbuf026D6o8);
                                        };
                                        var hs_sat26D6Ix = new $hs.Thunk();
                                        hs_sat26D6Ix.evaluateOnce = function () {
                                            return $hs.modules.GHCziIOziBuffer.hs_bufL.hscall(hs_wild526D6oz);
                                        };
                                        var hs_tpl26D6Iy = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26D6Ix, hs_sat26D6Iw);
                                        var hs_tpl126D6oI = hs_tpl26D6Iy.data[0];
                                        var $res = new $hs.Data(1);
                                        $res.data = [hs_rb426D6oE, hs_rb526D6oF, hs_ds1126D6oG, hs_rb626D6oH, hs_tpl126D6oI, hs_rb826D6oJ];
                                        return $res;
                                    };
                                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a26D6nN, hs_sat26D6Iu);
                                case 2:
                                    var hs_decoder26D6oN = hs_wild426D6If.data[0];
                                    var hs_sat26D6Ig = new $hs.Thunk();
                                    hs_sat26D6Ig.evaluateOnce = function () {
                                        var hs_sat26D6Ii = new $hs.Thunk();
                                        hs_sat26D6Ii.evaluateOnce = function () {
                                            var hs_sat26D6Ik = new $hs.Func(1);
                                            hs_sat26D6Ik.evaluate = function (hs_ds1126D6p7) {
                                                var hs_wild526D6Ir = hs_ds1126D6p7;
                                                if (hs_ds1126D6p7.notEvaluated) {
                                                    hs_wild526D6Ir = hs_ds1126D6p7.hscall();
                                                }
                                                var hs_bbuf126D6pc = hs_wild526D6Ir.data[0];
                                                var hs_sat26D6It = new $hs.Thunk();
                                                hs_sat26D6It.evaluateOnce = function () {
                                                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a26D6nN, hs_bbuf126D6pc);
                                                };
                                                var hs_sat26D6Iq = new $hs.Thunk();
                                                hs_sat26D6Iq.evaluateOnce = function () {
                                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                                                };
                                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Iq, hs_sat26D6It);
                                            };
                                            var hs_sat26D6Ij = new $hs.Thunk();
                                            hs_sat26D6Ij.evaluateOnce = function () {
                                                var hs_sat26D6Il = new $hs.Thunk();
                                                hs_sat26D6Il.evaluateOnce = function () {
                                                    var hs_wild526D6oX = hs_cbuf026D6o8;
                                                    if (hs_cbuf026D6o8.notEvaluated) {
                                                        hs_wild526D6oX = hs_cbuf026D6o8.hscall();
                                                    }
                                                    var hs_rb426D6p0 = hs_wild526D6oX.data[0];
                                                    var hs_rb526D6p1 = hs_wild526D6oX.data[1];
                                                    var hs_ds1126D6p2 = hs_wild526D6oX.data[2];
                                                    var hs_tpl26D6Ip = $hs.modules.GHCziIOziBuffer.hs_bufL.hscall(hs_wild526D6oX);
                                                    var hs_tpl126D6p3 = hs_tpl26D6Ip.data[0];
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [hs_rb426D6p0, hs_rb526D6p1, hs_ds1126D6p2, hs_tpl126D6p3, 0, 0];
                                                    return $res;
                                                };
                                                return hs_streamEncode25tVL7.hscall(hs_decoder26D6oN, hs_bbuf026D6or, hs_sat26D6Il);
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Ij, hs_sat26D6Ik);
                                        };
                                        var hs_sat26D6Ih = new $hs.Thunk();
                                        hs_sat26D6Ih.evaluateOnce = function () {
                                            return $hs.modules.GHCziIOziEncodingziTypes.hs_setState.hscall(hs_decoder26D6oN, hs_codeczustate26D6oO);
                                        };
                                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Ih, hs_sat26D6Ii);
                                    };
                                    var hs_sat26D6Ie = new $hs.Thunk();
                                    hs_sat26D6Ie.evaluateOnce = function () {
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Ie, hs_sat26D6Ig);
                                }
                            case 2:
                                var hs_sat26D6Id = new $hs.Thunk();
                                hs_sat26D6Id.evaluateOnce = function () {
                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                                };
                                var hs_sat26D6I9 = new $hs.Thunk();
                                hs_sat26D6I9.evaluateOnce = function () {
                                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a26D6nN, hs_bbuf026D6or);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6I9, hs_sat26D6Id);
                            }
                        };
                        var hs_sat26D6I3 = new $hs.Thunk();
                        hs_sat26D6I3.evaluateOnce = function () {
                            var hs_sat26D6I5 = new $hs.Thunk();
                            hs_sat26D6I5.evaluateOnce = function () {
                                var hs_wild326D6I8 = hs_cbuf026D6o8;
                                if (hs_cbuf026D6o8.notEvaluated) {
                                    hs_wild326D6I8 = hs_cbuf026D6o8.hscall();
                                }
                                var hs_rb426D6og = hs_wild326D6I8.data[0];
                                var hs_rb526D6oh = hs_wild326D6I8.data[1];
                                var hs_ds1126D6oi = hs_wild326D6I8.data[2];
                                var hs_rb626D6oj = hs_wild326D6I8.data[3];
                                var $res = new $hs.Data(1);
                                $res.data = [hs_rb426D6og, hs_rb526D6oh, hs_ds1126D6oi, hs_rb626D6oj, 0, 0];
                                return $res;
                            };
                            return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a226D6nT, hs_sat26D6I5);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6I3, hs_sat26D6I4);
                    };
                    var hs_sat26D6I0 = new $hs.Thunk();
                    hs_sat26D6I0.evaluateOnce = function () {
                        return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a226D6nT);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6I0, hs_sat26D6I2);
                };
                var hs_sat26D6HY = new $hs.Thunk();
                hs_sat26D6HY.evaluateOnce = function () {
                    return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a126D6nQ);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6HY, hs_sat26D6HZ);
            case 2:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            }
        };
        var hs_sat26D6HG = new $hs.Thunk();
        hs_sat26D6HG.evaluateOnce = function () {
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a226D6nT);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6HG, hs_sat26D6HU);
    };
    this.hs_flushCharBuffer.evaluate = function (hs_hzu26D6po) {
        var hs_wild26D6pM = hs_hzu26D6po;
        if (hs_hzu26D6po.notEvaluated) {
            hs_wild26D6pM = hs_hzu26D6po.hscall();
        }
        var hs_rb226D6pG = hs_wild26D6pM.data[8];
        var hs_sat26D6IP = new $hs.Func(1);
        hs_sat26D6IP.evaluate = function (hs_cbuf26D6pK) {
            var hs_wild126D6IS = $hs.modules.GHCziIOziBuffer.hs_bufState.hscall(hs_cbuf26D6pK);
            switch (hs_wild126D6IS.tag) {
            case 1:
                return $hs.modules.GHCziIOziHandleziInternals.hs_flushCharReadBuffer.hscall(hs_wild26D6pM);
            case 2:
                var hs_sat26D6IT = new $hs.Thunk();
                hs_sat26D6IT.evaluateOnce = function () {
                    var hs_sat26D6IW = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("internal IO library error: Char buffer non-empty\x00");
                    return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26D6IW);
                };
                var hs_sat26D6IR = new $hs.Thunk();
                hs_sat26D6IR.evaluateOnce = function () {
                    var hs_sat26D6IU = new $hs.Thunk();
                    hs_sat26D6IU.evaluateOnce = function () {
                        var hs_sat26D6IV = new $hs.Thunk();
                        hs_sat26D6IV.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziBuffer.hs_isEmptyBuffer.hscall(hs_cbuf26D6pK);
                        };
                        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26D6IV);
                    };
                    return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6IU);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D6IR, hs_sat26D6IT);
            }
        };
        var hs_sat26D6Iz = new $hs.Thunk();
        hs_sat26D6Iz.evaluateOnce = function () {
            var hs_sat26D6IQ = new $hs.Data(1);
            hs_sat26D6IQ.data = [hs_rb226D6pG];
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_sat26D6IQ);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Iz, hs_sat26D6IP);
    };
    this.hs_flushByteReadBuffer.evaluate = function (hs_hzu26D6pU) {
        var hs_wild26D6IY = hs_hzu26D6pU;
        if (hs_hzu26D6pU.notEvaluated) {
            hs_wild26D6IY = hs_hzu26D6pU.hscall();
        }
        var hs_zddIODevice26D6qj = hs_wild26D6IY.data[0];
        var hs_ds26D6qk = hs_wild26D6IY.data[3];
        var hs_rb26D6qd = hs_wild26D6IY.data[5];
        var hs_a26D6qe = new $hs.Data(1);
        hs_a26D6qe.data = [hs_rb26D6qd];
        var hs_sat26D6Jc = new $hs.Func(1);
        hs_sat26D6Jc.evaluate = function (hs_bbuf26D6qh) {
            var hs_wild126D6Jd = $hs.modules.GHCziIOziBuffer.hs_isEmptyBuffer.hscall(hs_bbuf26D6qh);
            switch (hs_wild126D6Jd.tag) {
            case 1:
                var hs_sat26D6Jf = new $hs.Func(1);
                hs_sat26D6Jf.evaluate = function (hs_seekable26D6qn) {
                    var hs_sat26D6Jh = new $hs.Thunk();
                    hs_sat26D6Jh.evaluateOnce = function () {
                        var hs_sat26D6Jl = new $hs.Thunk();
                        hs_sat26D6Jl.evaluateOnce = function () {
                            var hs_sat26D6Jn = new $hs.Thunk();
                            hs_sat26D6Jn.evaluateOnce = function () {
                                var hs_sat26D6Jt = new $hs.Thunk();
                                hs_sat26D6Jt.evaluateOnce = function () {
                                    var hs_wild226D6Jw = hs_bbuf26D6qh;
                                    if (hs_bbuf26D6qh.notEvaluated) {
                                        hs_wild226D6Jw = hs_bbuf26D6qh.hscall();
                                    }
                                    var hs_rb426D6qF = hs_wild226D6Jw.data[0];
                                    var hs_rb526D6qG = hs_wild226D6Jw.data[1];
                                    var hs_ds926D6qH = hs_wild226D6Jw.data[2];
                                    var hs_rb626D6qI = hs_wild226D6Jw.data[3];
                                    var $res = new $hs.Data(1);
                                    $res.data = [hs_rb426D6qF, hs_rb526D6qG, hs_ds926D6qH, hs_rb626D6qI, 0, 0];
                                    return $res;
                                };
                                return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a26D6qe, hs_sat26D6Jt);
                            };
                            var hs_sat26D6Jm = new $hs.Thunk();
                            hs_sat26D6Jm.evaluateOnce = function () {
                                var hs_sat26D6Jo = new $hs.Thunk();
                                hs_sat26D6Jo.evaluateOnce = function () {
                                    var hs_sat26D6Jp = new $hs.Thunk();
                                    hs_sat26D6Jp.evaluateOnce = function () {
                                        var hs_sat26D6Jq = new $hs.Thunk();
                                        hs_sat26D6Jq.evaluateOnce = function () {
                                            var hs_sat26D6Js = new $hs.Thunk();
                                            hs_sat26D6Js.evaluateOnce = function () {
                                                return $hs.modules.GHCziIOziBuffer.hs_bufL.hscall(hs_bbuf26D6qh);
                                            };
                                            var hs_sat26D6Jr = new $hs.Thunk();
                                            hs_sat26D6Jr.evaluateOnce = function () {
                                                return $hs.modules.GHCziIOziBuffer.hs_bufR.hscall(hs_bbuf26D6qh);
                                            };
                                            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26D6Jr, hs_sat26D6Js);
                                        };
                                        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26D6Jq);
                                    };
                                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26D6Jp);
                                };
                                return $hs.modules.GHCziIOziDevice.hs_seek.hscall(hs_zddIODevice26D6qj, hs_ds26D6qk, $hs.modules.GHCziIOziDevice.hs_RelativeSeek, hs_sat26D6Jo);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Jm, hs_sat26D6Jn);
                        };
                        var hs_sat26D6Jk = new $hs.Thunk();
                        hs_sat26D6Jk.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Jk, hs_sat26D6Jl);
                    };
                    var hs_sat26D6Jg = new $hs.Thunk();
                    hs_sat26D6Jg.evaluateOnce = function () {
                        var hs_sat26D6Ji = new $hs.Thunk();
                        hs_sat26D6Ji.evaluateOnce = function () {
                            var hs_sat26D6Jj = new $hs.Thunk();
                            hs_sat26D6Jj.evaluateOnce = function () {
                                return $hs.modules.GHCziClasses.hs_not.hscall(hs_seekable26D6qn);
                            };
                            return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Jj);
                        };
                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D6Ji, hs_ioezucannotFlushNotSeekable25tVL3);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Jg, hs_sat26D6Jh);
                };
                var hs_sat26D6Je = new $hs.Thunk();
                hs_sat26D6Je.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziDevice.hs_isSeekable.hscall(hs_zddIODevice26D6qj, hs_ds26D6qk);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Je, hs_sat26D6Jf);
            case 2:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            }
        };
        var hs_sat26D6IX = new $hs.Thunk();
        hs_sat26D6IX.evaluateOnce = function () {
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a26D6qe);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6IX, hs_sat26D6Jc);
    };
    hs_wantWritableHandlezq25tVKQ.evaluate = function (hs_fun26D6qT, hs_h26D6qU, hs_m26D6qV, hs_act26D6rp) {
        var hs_sat26D6Jy = new $hs.Func(1);
        hs_sat26D6Jy.evaluate = function (hs_hzu26D6qY) {
            var hs_sat26D6JA = new $hs.Func(1);
            hs_sat26D6JA.evaluate = function (hs_a26D6s9) {
                var hs_sat26D6Ka = new $hs.Data(1);
                hs_sat26D6Ka.data = [hs_hzu26D6qY, hs_a26D6s9];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Ka);
            };
            var hs_sat26D6Jz = new $hs.Thunk();
            hs_sat26D6Jz.evaluateOnce = function () {
                var hs_wild26D6ro = hs_hzu26D6qY;
                if (hs_hzu26D6qY.notEvaluated) {
                    hs_wild26D6ro = hs_hzu26D6qY.hscall();
                }
                var hs_zddBufferedIO26D6rR = hs_wild26D6ro.data[1];
                var hs_ds26D6rS = hs_wild26D6ro.data[3];
                var hs_ds126D6rm = hs_wild26D6ro.data[4];
                var hs_rb26D6rh = hs_wild26D6ro.data[5];
                var hs_rb226D6rk = hs_wild26D6ro.data[8];
                var hs_a26D6ri = new $hs.Data(1);
                hs_a26D6ri.data = [hs_rb26D6rh];
                var hs_a126D6rl = new $hs.Data(1);
                hs_a126D6rl.data = [hs_rb226D6rk];
                var hs_wild126D6JB = hs_ds126D6rm;
                if (hs_ds126D6rm.notEvaluated) {
                    hs_wild126D6JB = hs_ds126D6rm.hscall();
                }
                switch (hs_wild126D6JB.tag) {
                case 1:
                    if ($hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.notEvaluated) {
                        return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.hscall();
                    } else {
                        return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle;
                    }
                case 2:
                    if ($hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.notEvaluated) {
                        return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.hscall();
                    } else {
                        return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle;
                    }
                case 3:
                    if ($hs.modules.GHCziIOziHandleziInternals.hs_ioezunotWritable.notEvaluated) {
                        return $hs.modules.GHCziIOziHandleziInternals.hs_ioezunotWritable.hscall();
                    } else {
                        return $hs.modules.GHCziIOziHandleziInternals.hs_ioezunotWritable;
                    }
                case 6:
                    var hs_sat26D6JO = new $hs.Func(1);
                    hs_sat26D6JO.evaluate = function (hs_buf26D6rs) {
                        var hs_sat26D6JQ = new $hs.Thunk();
                        hs_sat26D6JQ.evaluateOnce = function () {
                            return hs_act26D6rp.hscall(hs_wild26D6ro);
                        };
                        var hs_sat26D6JP = new $hs.Thunk();
                        hs_sat26D6JP.evaluateOnce = function () {
                            var hs_sat26D6JS = new $hs.Thunk();
                            hs_sat26D6JS.evaluateOnce = function () {
                                var hs_sat26D6JW = new $hs.Thunk();
                                hs_sat26D6JW.evaluateOnce = function () {
                                    var hs_sat26D6JY = new $hs.Thunk();
                                    hs_sat26D6JY.evaluateOnce = function () {
                                        var hs_sat26D6K0 = new $hs.Func(1);
                                        hs_sat26D6K0.evaluate = function (hs_buf126D6rA) {
                                            var hs_sat26D6K2 = new $hs.Thunk();
                                            hs_sat26D6K2.evaluateOnce = function () {
                                                var hs_sat26D6K7 = new $hs.Func(1);
                                                hs_sat26D6K7.evaluate = function (hs_buf226D6rT) {
                                                    var hs_sat26D6K9 = new $hs.Func(1);
                                                    hs_sat26D6K9.evaluate = function (hs_bufzq26D6rW) {
                                                        return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a26D6ri, hs_bufzq26D6rW);
                                                    };
                                                    var hs_sat26D6K8 = new $hs.Thunk();
                                                    hs_sat26D6K8.evaluateOnce = function () {
                                                        return $hs.modules.GHCziIOziBufferedIO.hs_emptyWriteBuffer.hscall(hs_zddBufferedIO26D6rR, hs_ds26D6rS, hs_buf226D6rT);
                                                    };
                                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6K8, hs_sat26D6K9);
                                                };
                                                var hs_sat26D6K6 = new $hs.Thunk();
                                                hs_sat26D6K6.evaluateOnce = function () {
                                                    return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a26D6ri);
                                                };
                                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6K6, hs_sat26D6K7);
                                            };
                                            var hs_sat26D6K1 = new $hs.Thunk();
                                            hs_sat26D6K1.evaluateOnce = function () {
                                                var hs_sat26D6K3 = new $hs.Thunk();
                                                hs_sat26D6K3.evaluateOnce = function () {
                                                    var hs_wild226D6K5 = hs_buf126D6rA;
                                                    if (hs_buf126D6rA.notEvaluated) {
                                                        hs_wild226D6K5 = hs_buf126D6rA.hscall();
                                                    }
                                                    var hs_rb426D6rI = hs_wild226D6K5.data[0];
                                                    var hs_rb526D6rJ = hs_wild226D6K5.data[1];
                                                    var hs_rb626D6rK = hs_wild226D6K5.data[3];
                                                    var hs_rb726D6rL = hs_wild226D6K5.data[4];
                                                    var hs_rb826D6rM = hs_wild226D6K5.data[5];
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [hs_rb426D6rI, hs_rb526D6rJ, $hs.modules.GHCziIOziBuffer.hs_WriteBuffer, hs_rb626D6rK, hs_rb726D6rL, hs_rb826D6rM];
                                                    return $res;
                                                };
                                                return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126D6rl, hs_sat26D6K3);
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6K1, hs_sat26D6K2);
                                        };
                                        var hs_sat26D6JZ = new $hs.Thunk();
                                        hs_sat26D6JZ.evaluateOnce = function () {
                                            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a126D6rl);
                                        };
                                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6JZ, hs_sat26D6K0);
                                    };
                                    var hs_sat26D6JX = new $hs.Thunk();
                                    hs_sat26D6JX.evaluateOnce = function () {
                                        return $hs.modules.GHCziIOziHandleziInternals.hs_flushByteReadBuffer.hscall(hs_wild26D6ro);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6JX, hs_sat26D6JY);
                                };
                                var hs_sat26D6JV = new $hs.Thunk();
                                hs_sat26D6JV.evaluateOnce = function () {
                                    return $hs.modules.GHCziIOziHandleziInternals.hs_flushCharReadBuffer.hscall(hs_wild26D6ro);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6JV, hs_sat26D6JW);
                            };
                            var hs_sat26D6JR = new $hs.Thunk();
                            hs_sat26D6JR.evaluateOnce = function () {
                                var hs_sat26D6JT = new $hs.Thunk();
                                hs_sat26D6JT.evaluateOnce = function () {
                                    var hs_sat26D6JU = new $hs.Thunk();
                                    hs_sat26D6JU.evaluateOnce = function () {
                                        return $hs.modules.GHCziIOziBuffer.hs_isWriteBuffer.hscall(hs_buf26D6rs);
                                    };
                                    return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26D6JU);
                                };
                                return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6JT);
                            };
                            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D6JR, hs_sat26D6JS);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6JP, hs_sat26D6JQ);
                    };
                    var hs_sat26D6JN = new $hs.Thunk();
                    hs_sat26D6JN.evaluateOnce = function () {
                        return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a126D6rl);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6JN, hs_sat26D6JO);
                default:
                    return hs_act26D6rp.hscall(hs_wild26D6ro);
                }
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Jz, hs_sat26D6JA);
        };
        var hs_sat26D6Jx = new $hs.Func(1);
        hs_sat26D6Jx.evaluate = function (hs_eta1cW6l3) {
            return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezq.hscall(hs_fun26D6qT, hs_h26D6qU, hs_m26D6qV, hs_eta1cW6l3);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D6Jx, hs_sat26D6Jy);
    };
    this.hs_wantWritableHandle.evaluate = function (hs_fun26D6sk, hs_h26D6sg, hs_act26D6so) {
        var hs_wild26D6sl = hs_h26D6sg;
        if (hs_h26D6sg.notEvaluated) {
            hs_wild26D6sl = hs_h26D6sg.hscall();
        }
        switch (hs_wild26D6sl.tag) {
        case 1:
            var hs_rb26D6sm = hs_wild26D6sl.data[1];
            var hs_sat26D6Ke = new $hs.Data(1);
            hs_sat26D6Ke.data = [hs_rb26D6sm];
            return hs_wantWritableHandlezq25tVKQ.hscall(hs_fun26D6sk, hs_wild26D6sl, hs_sat26D6Ke, hs_act26D6so);
        case 2:
            var hs_rb126D6ss = hs_wild26D6sl.data[2];
            var hs_sat26D6Kb = new $hs.Data(1);
            hs_sat26D6Kb.data = [hs_rb126D6ss];
            return hs_wantWritableHandlezq25tVKQ.hscall(hs_fun26D6sk, hs_wild26D6sl, hs_sat26D6Kb, hs_act26D6so);
        }
    };
    this.hs_flushBuffer.evaluate = function (hs_hzu26D6sv) {
        var hs_wild26D6sT = hs_hzu26D6sv;
        if (hs_hzu26D6sv.notEvaluated) {
            hs_wild26D6sT = hs_hzu26D6sv.hscall();
        }
        var hs_rb226D6sN = hs_wild26D6sT.data[8];
        var hs_sat26D6Kw = new $hs.Func(1);
        hs_sat26D6Kw.evaluate = function (hs_buf26D6sR) {
            var hs_wild126D6Ky = $hs.modules.GHCziIOziBuffer.hs_bufState.hscall(hs_buf26D6sR);
            switch (hs_wild126D6Ky.tag) {
            case 1:
                var hs_sat26D6KA = new $hs.Thunk();
                hs_sat26D6KA.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziHandleziInternals.hs_flushByteReadBuffer.hscall(hs_wild26D6sT);
                };
                var hs_sat26D6Kz = new $hs.Thunk();
                hs_sat26D6Kz.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziHandleziInternals.hs_flushCharReadBuffer.hscall(hs_wild26D6sT);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Kz, hs_sat26D6KA);
            case 2:
                return $hs.modules.GHCziIOziHandleziInternals.hs_flushByteWriteBuffer.hscall(hs_wild26D6sT);
            }
        };
        var hs_sat26D6Kg = new $hs.Thunk();
        hs_sat26D6Kg.evaluateOnce = function () {
            var hs_sat26D6Kx = new $hs.Data(1);
            hs_sat26D6Kx.data = [hs_rb226D6sN];
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_sat26D6Kx);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Kg, hs_sat26D6Kw);
    };
    hs_readTextDevicezq25tVLy.evaluate = function (hs_hzu26D6t0, hs_bbuf026D6to, hs_cbuf26D6tP) {
        var hs_wild26D6ud = hs_hzu26D6t0;
        if (hs_hzu26D6t0.notEvaluated) {
            hs_wild26D6ud = hs_hzu26D6t0.hscall();
        }
        var hs_zddBufferedIO26D6tr = hs_wild26D6ud.data[1];
        var hs_ds26D6ts = hs_wild26D6ud.data[3];
        var hs_rb26D6tj = hs_wild26D6ud.data[5];
        var hs_rb126D6tm = hs_wild26D6ud.data[7];
        var hs_ds426D6tI = hs_wild26D6ud.data[11];
        var hs_a26D6tk = new $hs.Data(1);
        hs_a26D6tk.data = [hs_rb26D6tj];
        var hs_a126D6tn = new $hs.Data(1);
        hs_a126D6tn.data = [hs_rb126D6tm];
        var hs_sat26D6KN = new $hs.Func(1);
        hs_sat26D6KN.evaluate = function (hs_bbuf126D6tt) {
            var hs_sat26D6KP = new $hs.Func(1);
            hs_sat26D6KP.evaluate = function (hs_bbuf226D6tM) {
                var hs_sat26D6KW = new $hs.Thunk();
                hs_sat26D6KW.evaluateOnce = function () {
                    var hs_sat26D6KY = new $hs.Func(1);
                    hs_sat26D6KY.evaluate = function (hs_ds926D6u2) {
                        var hs_wild126D6Lb = hs_ds926D6u2;
                        if (hs_ds926D6u2.notEvaluated) {
                            hs_wild126D6Lb = hs_ds926D6u2.hscall();
                        }
                        var hs_bbuf326D6u7 = hs_wild126D6Lb.data[0];
                        var hs_cbufzq26D6ua = hs_wild126D6Lb.data[1];
                        var hs_sat26D6Lc = new $hs.Thunk();
                        hs_sat26D6Lc.evaluateOnce = function () {
                            var hs_sat26D6Le = new $hs.Thunk();
                            hs_sat26D6Le.evaluateOnce = function () {
                                var hs_sat26D6Lf = new $hs.Thunk();
                                hs_sat26D6Lf.evaluateOnce = function () {
                                    return $hs.modules.GHCziIOziBuffer.hs_bufR.hscall(hs_cbufzq26D6ua);
                                };
                                var hs_sat26D6Lg = new $hs.Thunk();
                                hs_sat26D6Lg.evaluateOnce = function () {
                                    return $hs.modules.GHCziIOziBuffer.hs_bufR.hscall(hs_cbuf26D6tP);
                                };
                                var hs_wild226D6Lh = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_sat26D6Lg, hs_sat26D6Lf);
                                switch (hs_wild226D6Lh.tag) {
                                case 1:
                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_cbufzq26D6ua);
                                case 2:
                                    return hs_readTextDevicezq25tVLy.hscall(hs_wild26D6ud, hs_bbuf326D6u7, hs_cbufzq26D6ua);
                                }
                            };
                            var hs_sat26D6Ld = new $hs.Thunk();
                            hs_sat26D6Ld.evaluateOnce = function () {
                                return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a26D6tk, hs_bbuf326D6u7);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Ld, hs_sat26D6Le);
                        };
                        var hs_sat26D6La = new $hs.Thunk();
                        hs_sat26D6La.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6La, hs_sat26D6Lc);
                    };
                    var hs_sat26D6KX = new $hs.Thunk();
                    hs_sat26D6KX.evaluateOnce = function () {
                        var hs_wild126D6L0 = hs_ds426D6tI;
                        if (hs_ds426D6tI.notEvaluated) {
                            hs_wild126D6L0 = hs_ds426D6tI.hscall();
                        }
                        switch (hs_wild126D6L0.tag) {
                        case 1:
                            var hs_sat26D6L6 = new $hs.Thunk();
                            hs_sat26D6L6.evaluateOnce = function () {
                                return $hs.modules.GHCziIOziEncoding.hs_latin1zudecode.hscall(hs_bbuf226D6tM, hs_cbuf26D6tP);
                            };
                            var hs_sat26D6L5 = new $hs.Thunk();
                            hs_sat26D6L5.evaluateOnce = function () {
                                var hs_sat26D6L8 = new $hs.Thunk();
                                hs_sat26D6L8.evaluateOnce = function () {
                                    var hs_sat26D6L9 = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("codec_state\x00");
                                    return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26D6L9);
                                };
                                var hs_sat26D6L7 = new $hs.Data(1);
                                hs_sat26D6L7.data = [hs_sat26D6L8, hs_bbuf226D6tM];
                                return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126D6tn, hs_sat26D6L7);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6L5, hs_sat26D6L6);
                        case 2:
                            var hs_decoder26D6tS = hs_wild126D6L0.data[0];
                            var hs_sat26D6L1 = new $hs.Func(1);
                            hs_sat26D6L1.evaluate = function (hs_state26D6tV) {
                                var hs_sat26D6L3 = new $hs.Thunk();
                                hs_sat26D6L3.evaluateOnce = function () {
                                    return hs_streamEncode25tVL7.hscall(hs_decoder26D6tS, hs_bbuf226D6tM, hs_cbuf26D6tP);
                                };
                                var hs_sat26D6L2 = new $hs.Thunk();
                                hs_sat26D6L2.evaluateOnce = function () {
                                    var hs_sat26D6L4 = new $hs.Data(1);
                                    hs_sat26D6L4.data = [hs_state26D6tV, hs_bbuf226D6tM];
                                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126D6tn, hs_sat26D6L4);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6L2, hs_sat26D6L3);
                            };
                            var hs_sat26D6KZ = new $hs.Thunk();
                            hs_sat26D6KZ.evaluateOnce = function () {
                                return $hs.modules.GHCziIOziEncodingziTypes.hs_getState.hscall(hs_decoder26D6tS);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6KZ, hs_sat26D6L1);
                        }
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6KX, hs_sat26D6KY);
                };
                var hs_sat26D6KV = new $hs.Thunk();
                hs_sat26D6KV.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6KV, hs_sat26D6KW);
            };
            var hs_sat26D6KO = new $hs.Thunk();
            hs_sat26D6KO.evaluateOnce = function () {
                var hs_sat26D6KR = new $hs.Func(1);
                hs_sat26D6KR.evaluate = function (hs_ds926D6tw) {
                    var hs_wild126D6KS = hs_ds926D6tw;
                    if (hs_ds926D6tw.notEvaluated) {
                        hs_wild126D6KS = hs_ds926D6tw.hscall();
                    }
                    var hs_r26D6tA = hs_wild126D6KS.data[0];
                    var hs_bbuf226D6tD = hs_wild126D6KS.data[1];
                    var hs_sat26D6KT = new $hs.Data(1);
                    hs_sat26D6KT.data = [0];
                    var hs_wild226D6KU = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_r26D6tA, hs_sat26D6KT);
                    switch (hs_wild226D6KU.tag) {
                    case 1:
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_bbuf226D6tD);
                    case 2:
                        if (hs_ioezuinvalidCharacter25tVL4.notEvaluated) {
                            return hs_ioezuinvalidCharacter25tVL4.hscall();
                        } else {
                            return hs_ioezuinvalidCharacter25tVL4;
                        }
                    }
                };
                var hs_sat26D6KQ = new $hs.Thunk();
                hs_sat26D6KQ.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziBufferedIO.hs_fillReadBuffer.hscall(hs_zddBufferedIO26D6tr, hs_ds26D6ts, hs_bbuf126D6tt);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6KQ, hs_sat26D6KR);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6KO, hs_sat26D6KP);
        };
        var hs_sat26D6KB = new $hs.Thunk();
        hs_sat26D6KB.evaluateOnce = function () {
            return $hs.modules.GHCziIOziBuffer.hs_slideContents.hscall(hs_bbuf026D6to);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6KB, hs_sat26D6KN);
    };
    this.hs_readTextDevice.evaluate = function (hs_hzu26D6um, hs_cbuf26D6vd) {
        var hs_wild26D6vB = hs_hzu26D6um;
        if (hs_hzu26D6um.notEvaluated) {
            hs_wild26D6vB = hs_hzu26D6um.hscall();
        }
        var hs_zddBufferedIO26D6uQ = hs_wild26D6vB.data[1];
        var hs_ds26D6uR = hs_wild26D6vB.data[3];
        var hs_rb26D6uF = hs_wild26D6vB.data[5];
        var hs_rb126D6uI = hs_wild26D6vB.data[7];
        var hs_ds426D6v6 = hs_wild26D6vB.data[11];
        var hs_a26D6uG = new $hs.Data(1);
        hs_a26D6uG.data = [hs_rb26D6uF];
        var hs_a126D6uJ = new $hs.Data(1);
        hs_a126D6uJ.data = [hs_rb126D6uI];
        var hs_sat26D6Lu = new $hs.Func(1);
        hs_sat26D6Lu.evaluate = function (hs_bbuf026D6uN) {
            var hs_sat26D6Lw = new $hs.Thunk();
            hs_sat26D6Lw.evaluateOnce = function () {
                var hs_sat26D6Ly = new $hs.Func(1);
                hs_sat26D6Ly.evaluate = function (hs_bbuf126D6va) {
                    var hs_sat26D6LH = new $hs.Thunk();
                    hs_sat26D6LH.evaluateOnce = function () {
                        var hs_sat26D6LJ = new $hs.Func(1);
                        hs_sat26D6LJ.evaluate = function (hs_ds926D6vq) {
                            var hs_wild126D6LW = hs_ds926D6vq;
                            if (hs_ds926D6vq.notEvaluated) {
                                hs_wild126D6LW = hs_ds926D6vq.hscall();
                            }
                            var hs_bbuf226D6vv = hs_wild126D6LW.data[0];
                            var hs_cbufzq26D6vx = hs_wild126D6LW.data[1];
                            var hs_sat26D6LX = new $hs.Thunk();
                            hs_sat26D6LX.evaluateOnce = function () {
                                var hs_sat26D6LZ = new $hs.Thunk();
                                hs_sat26D6LZ.evaluateOnce = function () {
                                    var hs_sat26D6M0 = new $hs.Thunk();
                                    hs_sat26D6M0.evaluateOnce = function () {
                                        return $hs.modules.GHCziIOziBuffer.hs_bufR.hscall(hs_cbuf26D6vd);
                                    };
                                    var hs_sat26D6M1 = new $hs.Thunk();
                                    hs_sat26D6M1.evaluateOnce = function () {
                                        return $hs.modules.GHCziIOziBuffer.hs_bufR.hscall(hs_cbufzq26D6vx);
                                    };
                                    var hs_wild226D6M2 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_sat26D6M1, hs_sat26D6M0);
                                    switch (hs_wild226D6M2.tag) {
                                    case 1:
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_cbufzq26D6vx);
                                    case 2:
                                        return hs_readTextDevicezq25tVLy.hscall(hs_wild26D6vB, hs_bbuf226D6vv, hs_cbuf26D6vd);
                                    }
                                };
                                var hs_sat26D6LY = new $hs.Thunk();
                                hs_sat26D6LY.evaluateOnce = function () {
                                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a26D6uG, hs_bbuf226D6vv);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6LY, hs_sat26D6LZ);
                            };
                            var hs_sat26D6LV = new $hs.Thunk();
                            hs_sat26D6LV.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6LV, hs_sat26D6LX);
                        };
                        var hs_sat26D6LI = new $hs.Thunk();
                        hs_sat26D6LI.evaluateOnce = function () {
                            var hs_wild126D6LL = hs_ds426D6v6;
                            if (hs_ds426D6v6.notEvaluated) {
                                hs_wild126D6LL = hs_ds426D6v6.hscall();
                            }
                            switch (hs_wild126D6LL.tag) {
                            case 1:
                                var hs_sat26D6LR = new $hs.Thunk();
                                hs_sat26D6LR.evaluateOnce = function () {
                                    return $hs.modules.GHCziIOziEncoding.hs_latin1zudecode.hscall(hs_bbuf126D6va, hs_cbuf26D6vd);
                                };
                                var hs_sat26D6LQ = new $hs.Thunk();
                                hs_sat26D6LQ.evaluateOnce = function () {
                                    var hs_sat26D6LT = new $hs.Thunk();
                                    hs_sat26D6LT.evaluateOnce = function () {
                                        var hs_sat26D6LU = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("codec_state\x00");
                                        return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26D6LU);
                                    };
                                    var hs_sat26D6LS = new $hs.Data(1);
                                    hs_sat26D6LS.data = [hs_sat26D6LT, hs_bbuf126D6va];
                                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126D6uJ, hs_sat26D6LS);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6LQ, hs_sat26D6LR);
                            case 2:
                                var hs_decoder26D6vg = hs_wild126D6LL.data[0];
                                var hs_sat26D6LM = new $hs.Func(1);
                                hs_sat26D6LM.evaluate = function (hs_state26D6vj) {
                                    var hs_sat26D6LO = new $hs.Thunk();
                                    hs_sat26D6LO.evaluateOnce = function () {
                                        return hs_streamEncode25tVL7.hscall(hs_decoder26D6vg, hs_bbuf126D6va, hs_cbuf26D6vd);
                                    };
                                    var hs_sat26D6LN = new $hs.Thunk();
                                    hs_sat26D6LN.evaluateOnce = function () {
                                        var hs_sat26D6LP = new $hs.Data(1);
                                        hs_sat26D6LP.data = [hs_state26D6vj, hs_bbuf126D6va];
                                        return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126D6uJ, hs_sat26D6LP);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6LN, hs_sat26D6LO);
                                };
                                var hs_sat26D6LK = new $hs.Thunk();
                                hs_sat26D6LK.evaluateOnce = function () {
                                    return $hs.modules.GHCziIOziEncodingziTypes.hs_getState.hscall(hs_decoder26D6vg);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6LK, hs_sat26D6LM);
                            }
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6LI, hs_sat26D6LJ);
                    };
                    var hs_sat26D6LG = new $hs.Thunk();
                    hs_sat26D6LG.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6LG, hs_sat26D6LH);
                };
                var hs_sat26D6Lx = new $hs.Thunk();
                hs_sat26D6Lx.evaluateOnce = function () {
                    var hs_sat26D6Lz = new $hs.Thunk();
                    hs_sat26D6Lz.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBuffer.hs_isEmptyBuffer.hscall(hs_bbuf026D6uN);
                    };
                    var hs_wild126D6LA = $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26D6Lz);
                    switch (hs_wild126D6LA.tag) {
                    case 1:
                        var hs_sat26D6LC = new $hs.Func(1);
                        hs_sat26D6LC.evaluate = function (hs_ds926D6uU) {
                            var hs_wild226D6LD = hs_ds926D6uU;
                            if (hs_ds926D6uU.notEvaluated) {
                                hs_wild226D6LD = hs_ds926D6uU.hscall();
                            }
                            var hs_r26D6uY = hs_wild226D6LD.data[0];
                            var hs_bbuf126D6v1 = hs_wild226D6LD.data[1];
                            var hs_sat26D6LE = new $hs.Data(1);
                            hs_sat26D6LE.data = [0];
                            var hs_wild326D6LF = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_r26D6uY, hs_sat26D6LE);
                            switch (hs_wild326D6LF.tag) {
                            case 1:
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_bbuf126D6v1);
                            case 2:
                                if ($hs.modules.GHCziIOziHandleziInternals.hs_ioezuEOF.notEvaluated) {
                                    return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuEOF.hscall();
                                } else {
                                    return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuEOF;
                                }
                            }
                        };
                        var hs_sat26D6LB = new $hs.Thunk();
                        hs_sat26D6LB.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziBufferedIO.hs_fillReadBuffer.hscall(hs_zddBufferedIO26D6uQ, hs_ds26D6uR, hs_bbuf026D6uN);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6LB, hs_sat26D6LC);
                    case 2:
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_bbuf026D6uN);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Lx, hs_sat26D6Ly);
            };
            var hs_sat26D6Lv = new $hs.Thunk();
            hs_sat26D6Lv.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Lv, hs_sat26D6Lw);
        };
        var hs_sat26D6Li = new $hs.Thunk();
        hs_sat26D6Li.evaluateOnce = function () {
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a26D6uG);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Li, hs_sat26D6Lu);
    };
    this.hs_hLookAheadzu.evaluate = function (hs_handlezu26D6vK) {
        var hs_wild26D6w9 = hs_handlezu26D6vK;
        if (hs_handlezu26D6vK.notEvaluated) {
            hs_wild26D6w9 = hs_handlezu26D6vK.hscall();
        }
        var hs_rb226D6w3 = hs_wild26D6w9.data[8];
        var hs_a26D6w4 = new $hs.Data(1);
        hs_a26D6w4.data = [hs_rb226D6w3];
        var hs_sat26D6Mj = new $hs.Func(1);
        hs_sat26D6Mj.evaluate = function (hs_buf26D6w7) {
            var hs_sat26D6Ml = new $hs.Func(1);
            hs_sat26D6Ml.evaluate = function (hs_newzubuf26D6wc) {
                var hs_sat26D6Mo = new $hs.Thunk();
                hs_sat26D6Mo.evaluateOnce = function () {
                    var hs_sat26D6Mq = new $hs.Thunk();
                    hs_sat26D6Mq.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBuffer.hs_bufL.hscall(hs_buf26D6w7);
                    };
                    var hs_sat26D6Mp = new $hs.Thunk();
                    hs_sat26D6Mp.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBuffer.hs_bufRaw.hscall(hs_buf26D6w7);
                    };
                    return $hs.modules.GHCziIOziBuffer.hs_peekCharBuf.hscall(hs_sat26D6Mp, hs_sat26D6Mq);
                };
                var hs_sat26D6Mn = new $hs.Thunk();
                hs_sat26D6Mn.evaluateOnce = function () {
                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a26D6w4, hs_newzubuf26D6wc);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Mn, hs_sat26D6Mo);
            };
            var hs_sat26D6Mk = new $hs.Thunk();
            hs_sat26D6Mk.evaluateOnce = function () {
                var hs_wild126D6Mm = $hs.modules.GHCziIOziBuffer.hs_isEmptyBuffer.hscall(hs_buf26D6w7);
                switch (hs_wild126D6Mm.tag) {
                case 1:
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_buf26D6w7);
                case 2:
                    return $hs.modules.GHCziIOziHandleziInternals.hs_readTextDevice.hscall(hs_wild26D6w9, hs_buf26D6w7);
                }
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Mk, hs_sat26D6Ml);
        };
        var hs_sat26D6M3 = new $hs.Thunk();
        hs_sat26D6M3.evaluateOnce = function () {
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a26D6w4);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6M3, hs_sat26D6Mj);
    };
    this.hs_withHandlezuzuzq.evaluate = function (hs_fun26D6wn, hs_h26D6wo, hs_m26D6wq, hs_act26D6wp) {
        var hs_sat26D6Mr = new $hs.Thunk();
        hs_sat26D6Mr.evaluateOnce = function () {
            var hs_sat26D6Mt = new $hs.Func(1);
            hs_sat26D6Mt.evaluate = function (hs_hzq26D6wt) {
                var hs_sat26D6Mv = new $hs.Thunk();
                hs_sat26D6Mv.evaluateOnce = function () {
                    var hs_sat26D6Mx = new $hs.Thunk();
                    hs_sat26D6Mx.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                    };
                    var hs_sat26D6Mw = new $hs.Thunk();
                    hs_sat26D6Mw.evaluateOnce = function () {
                        return $hs.modules.GHCziMVar.hs_putMVar.hscall(hs_m26D6wq, hs_hzq26D6wt);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Mw, hs_sat26D6Mx);
                };
                var hs_sat26D6Mu = new $hs.Thunk();
                hs_sat26D6Mu.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziHandleziTypes.hs_checkHandleInvariants.hscall(hs_hzq26D6wt);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Mu, hs_sat26D6Mv);
            };
            var hs_sat26D6Ms = new $hs.Thunk();
            hs_sat26D6Ms.evaluateOnce = function () {
                return hs_dozuoperation25tVKN.hscall(hs_fun26D6wn, hs_h26D6wo, hs_act26D6wp, hs_m26D6wq);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Ms, hs_sat26D6Mt);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_maskzu, hs_sat26D6Mr);
    };
    this.hs_withAllHandleszuzu.evaluate = function (hs_fun26D6wH, hs_h26D6wD, hs_act26D6wL) {
        var hs_wild26D6wI = hs_h26D6wD;
        if (hs_h26D6wD.notEvaluated) {
            hs_wild26D6wI = hs_h26D6wD.hscall();
        }
        switch (hs_wild26D6wI.tag) {
        case 1:
            var hs_rb26D6wJ = hs_wild26D6wI.data[1];
            var hs_sat26D6MD = new $hs.Data(1);
            hs_sat26D6MD.data = [hs_rb26D6wJ];
            return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezuzuzq.hscall(hs_fun26D6wH, hs_wild26D6wI, hs_sat26D6MD, hs_act26D6wL);
        case 2:
            var hs_rb26D6wP = hs_wild26D6wI.data[1];
            var hs_rb126D6wS = hs_wild26D6wI.data[2];
            var hs_sat26D6MA = new $hs.Thunk();
            hs_sat26D6MA.evaluateOnce = function () {
                var hs_sat26D6MC = new $hs.Data(1);
                hs_sat26D6MC.data = [hs_rb126D6wS];
                return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezuzuzq.hscall(hs_fun26D6wH, hs_wild26D6wI, hs_sat26D6MC, hs_act26D6wL);
            };
            var hs_sat26D6My = new $hs.Thunk();
            hs_sat26D6My.evaluateOnce = function () {
                var hs_sat26D6MB = new $hs.Data(1);
                hs_sat26D6MB.data = [hs_rb26D6wP];
                return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezuzuzq.hscall(hs_fun26D6wH, hs_wild26D6wI, hs_sat26D6MB, hs_act26D6wL);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6My, hs_sat26D6MA);
        }
    };
    this.hs_ioezufinalizzedHandle.evaluate = function (hs_fp26D6wX) {
        var hs_sat26D6MG = new $hs.Data(2);
        hs_sat26D6MG.data = [hs_fp26D6wX];
        var hs_sat26D6MH = new $hs.Thunk();
        hs_sat26D6MH.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("handle is finalized\x00");
        };
        var hs_sat26D6MF = new $hs.Data(1);
        hs_sat26D6MF.data = [$hs.modules.DataziMaybe.hs_Nothing, $hs.modules.GHCziIOziException.hs_IllegalOperation, $hs.modules.GHCziTypes.hs_ZMZN, hs_sat26D6MH, $hs.modules.DataziMaybe.hs_Nothing, hs_sat26D6MG];
        return $hs.modules.GHCziException.hs_throw.hscall($hs.modules.GHCziIOziException.hs_zdfExceptionIOException, hs_sat26D6MF);
    };
    this.hs_mkHandle.evaluate = function (hs_zddIODevice26D6xL, hs_zddBufferedIO26D6xj, hs_zddTypeable26D6yh, hs_dev26D6xk, hs_filepath26D6yB, hs_hazutype26D6xc, hs_buffered26D6xv, hs_mbzucodec26D6xb, hs_nl26D6yq, hs_finalizzer26D6yx, hs_otherzuside26D6yt) {
        var hs_sat26D6MJ = new $hs.Func(2);
        hs_sat26D6MJ.evaluate = function (hs_mbzuencoder26D6yo, hs_mbzudecoder26D6yp) {
            var hs_bufzustate26D6xi = new $hs.Thunk();
            hs_bufzustate26D6xi.evaluateOnce = function () {
                var hs_wild26D6Ns = hs_hazutype26D6xc;
                if (hs_hazutype26D6xc.notEvaluated) {
                    hs_wild26D6Ns = hs_hazutype26D6xc.hscall();
                }
                switch (hs_wild26D6Ns.tag) {
                case 3:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                default:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                }
            };
            var hs_sat26D6ML = new $hs.Func(1);
            hs_sat26D6ML.evaluate = function (hs_bbuf26D6xn) {
                var hs_sat26D6MN = new $hs.Func(1);
                hs_sat26D6MN.evaluate = function (hs_bbufref26D6y5) {
                    var hs_sat26D6MP = new $hs.Func(1);
                    hs_sat26D6MP.evaluate = function (hs_lastzudecode26D6y8) {
                        var hs_sat26D6MU = new $hs.Func(1);
                        hs_sat26D6MU.evaluate = function (hs_ds26D6xY) {
                            var hs_wild26D6Nb = hs_ds26D6xY;
                            if (hs_ds26D6xY.notEvaluated) {
                                hs_wild26D6Nb = hs_ds26D6xY.hscall();
                            }
                            var hs_cbufref26D6yb = hs_wild26D6Nb.data[0];
                            var hs_bmode26D6yk = hs_wild26D6Nb.data[1];
                            var hs_sat26D6Nc = new $hs.Func(1);
                            hs_sat26D6Nc.evaluate = function (hs_spares26D6ye) {
                                var hs_sat26D6Ne = new $hs.Func(1);
                                hs_sat26D6Ne.evaluate = function (hs_m26D6yA) {
                                    var hs_sat26D6Nn = new $hs.Thunk();
                                    hs_sat26D6Nn.evaluateOnce = function () {
                                        var hs_sat26D6Nq = new $hs.Thunk();
                                        hs_sat26D6Nq.evaluateOnce = function () {
                                            var hs_tpl26D6Nr = hs_m26D6yA;
                                            if (hs_m26D6yA.notEvaluated) {
                                                hs_tpl26D6Nr = hs_m26D6yA.hscall();
                                            }
                                            var hs_tpl126D6yH = hs_tpl26D6Nr.data[0];
                                            var $res = new $hs.Data(1);
                                            $res.data = [hs_filepath26D6yB, hs_tpl126D6yH];
                                            return $res;
                                        };
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Nq);
                                    };
                                    var hs_sat26D6Nm = new $hs.Thunk();
                                    hs_sat26D6Nm.evaluateOnce = function () {
                                        var hs_wild126D6Np = hs_finalizzer26D6yx;
                                        if (hs_finalizzer26D6yx.notEvaluated) {
                                            hs_wild126D6Np = hs_finalizzer26D6yx.hscall();
                                        }
                                        switch (hs_wild126D6Np.tag) {
                                        case 1:
                                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                                        case 2:
                                            var hs_finalizzer126D6yC = hs_wild126D6Np.data[0];
                                            var hs_sat26D6No = new $hs.Thunk();
                                            hs_sat26D6No.evaluateOnce = function () {
                                                return hs_finalizzer126D6yC.hscall(hs_filepath26D6yB, hs_m26D6yA);
                                            };
                                            return $hs.modules.GHCziMVar.hs_addMVarFinalizzer.hscall(hs_m26D6yA, hs_sat26D6No);
                                        }
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Nm, hs_sat26D6Nn);
                                };
                                var hs_sat26D6Nd = new $hs.Thunk();
                                hs_sat26D6Nd.evaluateOnce = function () {
                                    var hs_sat26D6Nf = new $hs.Thunk();
                                    hs_sat26D6Nf.evaluateOnce = function () {
                                        var hs_tpl26D6yi = hs_dev26D6xk;
                                        if (hs_dev26D6xk.notEvaluated) {
                                            hs_tpl26D6yi = hs_dev26D6xk.hscall();
                                        }
                                        var hs_tpl126D6Nk = hs_bbufref26D6y5;
                                        if (hs_bbufref26D6y5.notEvaluated) {
                                            hs_tpl126D6Nk = hs_bbufref26D6y5.hscall();
                                        }
                                        var hs_tpl226D6yj = hs_tpl126D6Nk.data[0];
                                        var hs_tpl326D6Nj = hs_lastzudecode26D6y8;
                                        if (hs_lastzudecode26D6y8.notEvaluated) {
                                            hs_tpl326D6Nj = hs_lastzudecode26D6y8.hscall();
                                        }
                                        var hs_tpl426D6yl = hs_tpl326D6Nj.data[0];
                                        var hs_tpl526D6Ni = hs_cbufref26D6yb;
                                        if (hs_cbufref26D6yb.notEvaluated) {
                                            hs_tpl526D6Ni = hs_cbufref26D6yb.hscall();
                                        }
                                        var hs_tpl626D6ym = hs_tpl526D6Ni.data[0];
                                        var hs_tpl726D6Nh = hs_spares26D6ye;
                                        if (hs_spares26D6ye.notEvaluated) {
                                            hs_tpl726D6Nh = hs_spares26D6ye.hscall();
                                        }
                                        var hs_tpl826D6yn = hs_tpl726D6Nh.data[0];
                                        var hs_sat26D6Nl = new $hs.Thunk();
                                        hs_sat26D6Nl.evaluateOnce = function () {
                                            return $hs.modules.GHCziIOziHandleziTypes.hs_outputNL.hscall(hs_nl26D6yq);
                                        };
                                        var hs_sat26D6Ng = new $hs.Thunk();
                                        hs_sat26D6Ng.evaluateOnce = function () {
                                            return $hs.modules.GHCziIOziHandleziTypes.hs_inputNL.hscall(hs_nl26D6yq);
                                        };
                                        var $res = new $hs.Data(1);
                                        $res.data = [hs_zddIODevice26D6xL, hs_zddBufferedIO26D6xj, hs_zddTypeable26D6yh, hs_tpl26D6yi, hs_hazutype26D6xc, hs_tpl226D6yj, hs_bmode26D6yk, hs_tpl426D6yl, hs_tpl626D6ym, hs_tpl826D6yn, hs_mbzuencoder26D6yo, hs_mbzudecoder26D6yp, hs_mbzucodec26D6xb, hs_sat26D6Ng, hs_sat26D6Nl, hs_otherzuside26D6yt];
                                        return $res;
                                    };
                                    return $hs.modules.GHCziMVar.hs_newMVar.hscall(hs_sat26D6Nf);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Nd, hs_sat26D6Ne);
                            };
                            var hs_sat26D6Na = new $hs.Thunk();
                            hs_sat26D6Na.evaluateOnce = function () {
                                return $hs.modules.GHCziIORef.hs_newIORef.hscall($hs.modules.GHCziIOziHandleziTypes.hs_BufferListNil);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Na, hs_sat26D6Nc);
                        };
                        var hs_sat26D6MT = new $hs.Thunk();
                        hs_sat26D6MT.evaluateOnce = function () {
                            var hs_wild26D6MW = hs_buffered26D6xv;
                            if (hs_buffered26D6xv.notEvaluated) {
                                hs_wild26D6MW = hs_buffered26D6xv.hscall();
                            }
                            switch (hs_wild26D6MW.tag) {
                            case 1:
                                var hs_sat26D6N6 = new $hs.Func(1);
                                hs_sat26D6N6.evaluate = function (hs_buffer26D6xz) {
                                    var hs_sat26D6N8 = new $hs.Func(1);
                                    hs_sat26D6N8.evaluate = function (hs_ref26D6xC) {
                                        var hs_sat26D6N9 = new $hs.Data(1);
                                        hs_sat26D6N9.data = [hs_ref26D6xC, $hs.modules.GHCziIOziHandleziTypes.hs_NoBuffering];
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6N9);
                                    };
                                    var hs_sat26D6N7 = new $hs.Thunk();
                                    hs_sat26D6N7.evaluateOnce = function () {
                                        return $hs.modules.GHCziIORef.hs_newIORef.hscall(hs_buffer26D6xz);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6N7, hs_sat26D6N8);
                                };
                                var hs_sat26D6N5 = new $hs.Thunk();
                                hs_sat26D6N5.evaluateOnce = function () {
                                    return $hs.modules.GHCziIOziBuffer.hs_newCharBuffer.hscall($hs.modules.GHCziIOziHandleziInternals.hs_dEFAULTzuCHARzuBUFFERzuSIZZE, hs_bufzustate26D6xi);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6N5, hs_sat26D6N6);
                            case 2:
                                var hs_sat26D6MX = new $hs.Func(1);
                                hs_sat26D6MX.evaluate = function (hs_buffer26D6xI) {
                                    var hs_sat26D6MZ = new $hs.Func(1);
                                    hs_sat26D6MZ.evaluate = function (hs_ioref26D6xO) {
                                        var hs_sat26D6N1 = new $hs.Func(1);
                                        hs_sat26D6N1.evaluate = function (hs_iszutty26D6xP) {
                                            var hs_sat26D6N3 = new $hs.Thunk();
                                            hs_sat26D6N3.evaluateOnce = function () {
                                                var hs_wild126D6N4 = hs_iszutty26D6xP;
                                                if (hs_iszutty26D6xP.notEvaluated) {
                                                    hs_wild126D6N4 = hs_iszutty26D6xP.hscall();
                                                }
                                                switch (hs_wild126D6N4.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(3);
                                                    $res.data = [$hs.modules.DataziMaybe.hs_Nothing];
                                                    return $res;
                                                case 2:
                                                    var $res = new $hs.Data(2);
                                                    $res.data = [];
                                                    return $res;
                                                }
                                            };
                                            var hs_sat26D6N2 = new $hs.Data(1);
                                            hs_sat26D6N2.data = [hs_ioref26D6xO, hs_sat26D6N3];
                                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6N2);
                                        };
                                        var hs_sat26D6N0 = new $hs.Thunk();
                                        hs_sat26D6N0.evaluateOnce = function () {
                                            return $hs.modules.GHCziIOziDevice.hs_isTerminal.hscall(hs_zddIODevice26D6xL, hs_dev26D6xk);
                                        };
                                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6N0, hs_sat26D6N1);
                                    };
                                    var hs_sat26D6MY = new $hs.Thunk();
                                    hs_sat26D6MY.evaluateOnce = function () {
                                        return $hs.modules.GHCziIORef.hs_newIORef.hscall(hs_buffer26D6xI);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6MY, hs_sat26D6MZ);
                                };
                                var hs_sat26D6MV = new $hs.Thunk();
                                hs_sat26D6MV.evaluateOnce = function () {
                                    return $hs.modules.GHCziIOziBuffer.hs_newCharBuffer.hscall($hs.modules.GHCziIOziHandleziInternals.hs_dEFAULTzuCHARzuBUFFERzuSIZZE, hs_bufzustate26D6xi);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6MV, hs_sat26D6MX);
                            }
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6MT, hs_sat26D6MU);
                    };
                    var hs_sat26D6MO = new $hs.Thunk();
                    hs_sat26D6MO.evaluateOnce = function () {
                        var hs_sat26D6MR = new $hs.Thunk();
                        hs_sat26D6MR.evaluateOnce = function () {
                            var hs_sat26D6MS = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("codec_state\x00");
                            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26D6MS);
                        };
                        var hs_sat26D6MQ = new $hs.Data(1);
                        hs_sat26D6MQ.data = [hs_sat26D6MR, hs_bbuf26D6xn];
                        return $hs.modules.GHCziIORef.hs_newIORef.hscall(hs_sat26D6MQ);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6MO, hs_sat26D6MP);
                };
                var hs_sat26D6MM = new $hs.Thunk();
                hs_sat26D6MM.evaluateOnce = function () {
                    return $hs.modules.GHCziIORef.hs_newIORef.hscall(hs_bbuf26D6xn);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6MM, hs_sat26D6MN);
            };
            var hs_sat26D6MK = new $hs.Thunk();
            hs_sat26D6MK.evaluateOnce = function () {
                return $hs.modules.GHCziIOziBufferedIO.hs_newBuffer.hscall(hs_zddBufferedIO26D6xj, hs_dev26D6xk, hs_bufzustate26D6xi);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6MK, hs_sat26D6ML);
        };
        var hs_sat26D6MI = new $hs.Func(1);
        hs_sat26D6MI.evaluate = function (hs_eta1cW6l3) {
            return $hs.modules.GHCziIOziHandleziInternals.hs_openTextEncoding.hscall(hs_mbzucodec26D6xb, hs_hazutype26D6xc, hs_eta1cW6l3);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D6MI, hs_sat26D6MJ);
    };
    hs_trymaybe25tVLr.evaluate = function (hs_io26D6yS) {
        var hs_sat26D6Nu = new $hs.Func(1);
        hs_sat26D6Nu.evaluate = function (hs_e26D6yW) {
            var hs_sat26D6Nw = new $hs.Data(2);
            hs_sat26D6Nw.data = [hs_e26D6yW];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Nw);
        };
        var hs_sat26D6Nt = new $hs.Thunk();
        hs_sat26D6Nt.evaluateOnce = function () {
            var hs_sat26D6Nv = new $hs.Thunk();
            hs_sat26D6Nv.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.DataziMaybe.hs_Nothing);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_io26D6yS, hs_sat26D6Nv);
        };
        return $hs.modules.GHCziIO.hs_catchException.hscall($hs.modules.GHCziException.hs_zdfExceptionSomeException, hs_sat26D6Nt, hs_sat26D6Nu);
    };
    this.hs_hClosezuhelp.evaluate = function (hs_handlezu26D6z0) {
        var hs_wild26D6Ny = $hs.modules.GHCziIOziHandleziTypes.hs_haType.hscall(hs_handlezu26D6z0);
        switch (hs_wild26D6Ny.tag) {
        case 1:
            var hs_sat26D6Nx = new $hs.Data(1);
            hs_sat26D6Nx.data = [hs_handlezu26D6z0, $hs.modules.DataziMaybe.hs_Nothing];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Nx);
        default:
            var hs_sat26D6NA = new $hs.Func(1);
            hs_sat26D6NA.evaluate = function (hs_mbzuexc126D6Af) {
                var hs_sat26D6ND = new $hs.Func(1);
                hs_sat26D6ND.evaluate = function (hs_ds26D6Aa) {
                    var hs_wild126D6NY = hs_ds26D6Aa;
                    if (hs_ds26D6Aa.notEvaluated) {
                        hs_wild126D6NY = hs_ds26D6Aa.hscall();
                    }
                    var hs_hzu26D6Ae = hs_wild126D6NY.data[0];
                    var hs_mbzuexc226D6Ah = hs_wild126D6NY.data[1];
                    var hs_sat26D6NZ = new $hs.Thunk();
                    hs_sat26D6NZ.evaluateOnce = function () {
                        var hs_wild226D6O0 = $hs.modules.DataziMaybe.hs_isJust.hscall(hs_mbzuexc126D6Af);
                        switch (hs_wild226D6O0.tag) {
                        case 1:
                            if (hs_mbzuexc226D6Ah.notEvaluated) {
                                return hs_mbzuexc226D6Ah.hscall();
                            } else {
                                return hs_mbzuexc226D6Ah;
                            }
                        case 2:
                            if (hs_mbzuexc126D6Af.notEvaluated) {
                                return hs_mbzuexc126D6Af.hscall();
                            } else {
                                return hs_mbzuexc126D6Af;
                            }
                        }
                    };
                    var hs_sat26D6NX = new $hs.Data(1);
                    hs_sat26D6NX.data = [hs_hzu26D6Ae, hs_sat26D6NZ];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6NX);
                };
                var hs_sat26D6NC = new $hs.Thunk();
                hs_sat26D6NC.evaluateOnce = function () {
                    var hs_wild126D6zG = hs_handlezu26D6z0;
                    if (hs_handlezu26D6z0.notEvaluated) {
                        hs_wild126D6zG = hs_handlezu26D6z0.hscall();
                    }
                    var hs_zddIODevice26D6zx = hs_wild126D6zG.data[0];
                    var hs_zddBufferedIO26D6zO = hs_wild126D6zG.data[1];
                    var hs_zddTypeable26D6zP = hs_wild126D6zG.data[2];
                    var hs_ds26D6zy = hs_wild126D6zG.data[3];
                    var hs_rb26D6zn = hs_wild126D6zG.data[5];
                    var hs_ds226D6zR = hs_wild126D6zG.data[6];
                    var hs_rb126D6zS = hs_wild126D6zG.data[7];
                    var hs_rb226D6zq = hs_wild126D6zG.data[8];
                    var hs_rb326D6zt = hs_wild126D6zG.data[9];
                    var hs_ds326D6zV = hs_wild126D6zG.data[10];
                    var hs_ds426D6zW = hs_wild126D6zG.data[11];
                    var hs_ds526D6zX = hs_wild126D6zG.data[12];
                    var hs_ds626D6zY = hs_wild126D6zG.data[13];
                    var hs_ds726D6zZ = hs_wild126D6zG.data[14];
                    var hs_ds826D6zv = hs_wild126D6zG.data[15];
                    var hs_a26D6zo = new $hs.Data(1);
                    hs_a26D6zo.data = [hs_rb26D6zn];
                    var hs_a126D6zr = new $hs.Data(1);
                    hs_a126D6zr.data = [hs_rb226D6zq];
                    var hs_a226D6zu = new $hs.Data(1);
                    hs_a226D6zu.data = [hs_rb326D6zt];
                    var hs_sat26D6NG = new $hs.Func(1);
                    hs_sat26D6NG.evaluate = function (hs_maybezuexception26D6A1) {
                        var hs_sat26D6NL = new $hs.Thunk();
                        hs_sat26D6NL.evaluateOnce = function () {
                            var hs_sat26D6NN = new $hs.Thunk();
                            hs_sat26D6NN.evaluateOnce = function () {
                                var hs_sat26D6NP = new $hs.Thunk();
                                hs_sat26D6NP.evaluateOnce = function () {
                                    var hs_sat26D6NR = new $hs.Thunk();
                                    hs_sat26D6NR.evaluateOnce = function () {
                                        var hs_sat26D6NT = new $hs.Thunk();
                                        hs_sat26D6NT.evaluateOnce = function () {
                                            var hs_tpl26D6NW = hs_a26D6zo;
                                            if (hs_a26D6zo.notEvaluated) {
                                                hs_tpl26D6NW = hs_a26D6zo.hscall();
                                            }
                                            var hs_tpl126D6zQ = hs_tpl26D6NW.data[0];
                                            var hs_tpl226D6NV = hs_a126D6zr;
                                            if (hs_a126D6zr.notEvaluated) {
                                                hs_tpl226D6NV = hs_a126D6zr.hscall();
                                            }
                                            var hs_tpl326D6zT = hs_tpl226D6NV.data[0];
                                            var hs_tpl426D6NU = hs_a226D6zu;
                                            if (hs_a226D6zu.notEvaluated) {
                                                hs_tpl426D6NU = hs_a226D6zu.hscall();
                                            }
                                            var hs_tpl526D6zU = hs_tpl426D6NU.data[0];
                                            var $res = new $hs.Data(1);
                                            $res.data = [hs_zddIODevice26D6zx, hs_zddBufferedIO26D6zO, hs_zddTypeable26D6zP, hs_ds26D6zy, $hs.modules.GHCziIOziHandleziTypes.hs_ClosedHandle, hs_tpl126D6zQ, hs_ds226D6zR, hs_rb126D6zS, hs_tpl326D6zT, hs_tpl526D6zU, hs_ds326D6zV, hs_ds426D6zW, hs_ds526D6zX, hs_ds626D6zY, hs_ds726D6zZ, hs_ds826D6zv];
                                            return $res;
                                        };
                                        var hs_sat26D6NS = new $hs.Data(1);
                                        hs_sat26D6NS.data = [hs_sat26D6NT, hs_maybezuexception26D6A1];
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6NS);
                                    };
                                    var hs_sat26D6NQ = new $hs.Thunk();
                                    hs_sat26D6NQ.evaluateOnce = function () {
                                        return $hs.modules.GHCziIOziHandleziInternals.hs_closeTextCodecs.hscall(hs_wild126D6zG);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6NQ, hs_sat26D6NR);
                                };
                                var hs_sat26D6NO = new $hs.Thunk();
                                hs_sat26D6NO.evaluateOnce = function () {
                                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a26D6zo, hs_noByteBuffer25tVLu);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6NO, hs_sat26D6NP);
                            };
                            var hs_sat26D6NM = new $hs.Thunk();
                            hs_sat26D6NM.evaluateOnce = function () {
                                return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126D6zr, hs_noCharBuffer25tVLt);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6NM, hs_sat26D6NN);
                        };
                        var hs_sat26D6NK = new $hs.Thunk();
                        hs_sat26D6NK.evaluateOnce = function () {
                            return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a226D6zu, $hs.modules.GHCziIOziHandleziTypes.hs_BufferListNil);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6NK, hs_sat26D6NL);
                    };
                    var hs_sat26D6NE = new $hs.Thunk();
                    hs_sat26D6NE.evaluateOnce = function () {
                        var hs_wild226D6NI = hs_ds826D6zv;
                        if (hs_ds826D6zv.notEvaluated) {
                            hs_wild226D6NI = hs_ds826D6zv.hscall();
                        }
                        switch (hs_wild226D6NI.tag) {
                        case 1:
                            var hs_sat26D6NJ = new $hs.Thunk();
                            hs_sat26D6NJ.evaluateOnce = function () {
                                return $hs.modules.GHCziIOziDevice.hs_close.hscall(hs_zddIODevice26D6zx, hs_ds26D6zy);
                            };
                            return $hs.modules.GHCziBase.hs_zd.hscall(hs_trymaybe25tVLr, hs_sat26D6NJ);
                        case 2:
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.DataziMaybe.hs_Nothing);
                        }
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6NE, hs_sat26D6NG);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6NC, hs_sat26D6ND);
            };
            var hs_sat26D6Nz = new $hs.Thunk();
            hs_sat26D6Nz.evaluateOnce = function () {
                var hs_sat26D6NB = new $hs.Thunk();
                hs_sat26D6NB.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziHandleziInternals.hs_flushWriteBuffer.hscall(hs_handlezu26D6z0);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_trymaybe25tVLr, hs_sat26D6NB);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Nz, hs_sat26D6NA);
        }
    };
    this.hs_handleFinalizzer.evaluate = function (hs_fp26D6AE, hs_m26D6Ap) {
        var hs_sat26D6O2 = new $hs.Func(1);
        hs_sat26D6O2.evaluate = function (hs_handlezu26D6As) {
            var hs_sat26D6O4 = new $hs.Func(1);
            hs_sat26D6O4.evaluate = function (hs_ds26D6Av) {
                var hs_wild26D6O6 = hs_ds26D6Av;
                if (hs_ds26D6Av.notEvaluated) {
                    hs_wild26D6O6 = hs_ds26D6Av.hscall();
                }
                var hs_handlezuzq26D6Az = hs_wild26D6O6.data[0];
                var hs_sat26D6O8 = new $hs.Thunk();
                hs_sat26D6O8.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                };
                var hs_sat26D6O5 = new $hs.Thunk();
                hs_sat26D6O5.evaluateOnce = function () {
                    return $hs.modules.GHCziMVar.hs_putMVar.hscall(hs_m26D6Ap, hs_handlezuzq26D6Az);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6O5, hs_sat26D6O8);
            };
            var hs_sat26D6O3 = new $hs.Thunk();
            hs_sat26D6O3.evaluateOnce = function () {
                return $hs.modules.GHCziIOziHandleziInternals.hs_hClosezuhelp.hscall(hs_handlezu26D6As);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6O3, hs_sat26D6O4);
        };
        var hs_sat26D6O1 = new $hs.Thunk();
        hs_sat26D6O1.evaluateOnce = function () {
            return $hs.modules.GHCziMVar.hs_takeMVar.hscall(hs_m26D6Ap);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6O1, hs_sat26D6O2);
    };
    this.hs_mkFileHandle.evaluate = function (hs_zddIODevice26D6AN, hs_zddBufferedIO26D6AO, hs_zddTypeable26D6AP, hs_dev26D6AQ, hs_filepath26D6AR, hs_iomode26D6AS, hs_mbzucodec26D6AV, hs_trzunewlines26D6AW) {
        var hs_sat26D6Oa = new $hs.Data(2);
        hs_sat26D6Oa.data = [$hs.modules.GHCziIOziHandleziInternals.hs_handleFinalizzer];
        var hs_sat26D6O9 = new $hs.Thunk();
        hs_sat26D6O9.evaluateOnce = function () {
            var hs_wild26D6Ob = hs_iomode26D6AS;
            if (hs_iomode26D6AS.notEvaluated) {
                hs_wild26D6Ob = hs_iomode26D6AS.hscall();
            }
            switch (hs_wild26D6Ob.tag) {
            case 1:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(4);
                $res.data = [];
                return $res;
            case 3:
                var $res = new $hs.Data(5);
                $res.data = [];
                return $res;
            case 4:
                var $res = new $hs.Data(6);
                $res.data = [];
                return $res;
            }
        };
        return $hs.modules.GHCziIOziHandleziInternals.hs_mkHandle.hscall(hs_zddIODevice26D6AN, hs_zddBufferedIO26D6AO, hs_zddTypeable26D6AP, hs_dev26D6AQ, hs_filepath26D6AR, hs_sat26D6O9, $hs.modules.GHCziTypes.hs_True, hs_mbzucodec26D6AV, hs_trzunewlines26D6AW, hs_sat26D6Oa, $hs.modules.DataziMaybe.hs_Nothing);
    };
    this.hs_mkDuplexHandle.evaluate = function (hs_zddIODevice26D6B5, hs_zddBufferedIO26D6B6, hs_zddTypeable26D6B7, hs_dev26D6B8, hs_filepath26D6B9, hs_mbzucodec26D6Ba, hs_trzunewlines26D6Bb) {
        var hs_sat26D6Od = new $hs.Func(1);
        hs_sat26D6Od.evaluate = function (hs_writezuside26D6Bf) {
            var hs_wild26D6Og = hs_writezuside26D6Bf;
            if (hs_writezuside26D6Bf.notEvaluated) {
                hs_wild26D6Og = hs_writezuside26D6Bf.hscall();
            }
            switch (hs_wild26D6Og.tag) {
            case 1:
                var hs_rb26D6Bk = hs_wild26D6Og.data[1];
                var hs_writezum26D6Bl = new $hs.Data(1);
                hs_writezum26D6Bl.data = [hs_rb26D6Bk];
                var hs_sat26D6Om = new $hs.Func(1);
                hs_sat26D6Om.evaluate = function (hs_readzuside26D6Bp) {
                    var hs_wild126D6Op = hs_readzuside26D6Bp;
                    if (hs_readzuside26D6Bp.notEvaluated) {
                        hs_wild126D6Op = hs_readzuside26D6Bp.hscall();
                    }
                    switch (hs_wild126D6Op.tag) {
                    case 1:
                        var hs_rb126D6Bv = hs_wild126D6Op.data[1];
                        var hs_sat26D6Ot = new $hs.Thunk();
                        hs_sat26D6Ot.evaluateOnce = function () {
                            var hs_tpl26D6Ov = hs_writezum26D6Bl;
                            if (hs_writezum26D6Bl.notEvaluated) {
                                hs_tpl26D6Ov = hs_writezum26D6Bl.hscall();
                            }
                            var hs_tpl126D6Bw = hs_tpl26D6Ov.data[0];
                            var $res = new $hs.Data(2);
                            $res.data = [hs_filepath26D6B9, hs_rb126D6Bv, hs_tpl126D6Bw];
                            return $res;
                        };
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Ot);
                    case 2:
                        var hs_sat26D6Oo = new $hs.Thunk();
                        hs_sat26D6Oo.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at /home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/IO/Handle/Internals.hs:676:3-33\x00");
                        };
                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Oo);
                    }
                };
                var hs_sat26D6Ok = new $hs.Thunk();
                hs_sat26D6Ok.evaluateOnce = function () {
                    var hs_sat26D6On = new $hs.Data(2);
                    hs_sat26D6On.data = [hs_writezum26D6Bl];
                    return $hs.modules.GHCziIOziHandleziInternals.hs_mkHandle.hscall(hs_zddIODevice26D6B5, hs_zddBufferedIO26D6B6, hs_zddTypeable26D6B7, hs_dev26D6B8, hs_filepath26D6B9, $hs.modules.GHCziIOziHandleziTypes.hs_ReadHandle, $hs.modules.GHCziTypes.hs_True, hs_mbzucodec26D6Ba, hs_trzunewlines26D6Bb, $hs.modules.DataziMaybe.hs_Nothing, hs_sat26D6On);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Ok, hs_sat26D6Om);
            case 2:
                var hs_sat26D6Of = new $hs.Thunk();
                hs_sat26D6Of.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at /home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/IO/Handle/Internals.hs:670:3-35\x00");
                };
                return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Of);
            }
        };
        var hs_sat26D6Oc = new $hs.Thunk();
        hs_sat26D6Oc.evaluateOnce = function () {
            var hs_sat26D6Oe = new $hs.Data(2);
            hs_sat26D6Oe.data = [$hs.modules.GHCziIOziHandleziInternals.hs_handleFinalizzer];
            return $hs.modules.GHCziIOziHandleziInternals.hs_mkHandle.hscall(hs_zddIODevice26D6B5, hs_zddBufferedIO26D6B6, hs_zddTypeable26D6B7, hs_dev26D6B8, hs_filepath26D6B9, $hs.modules.GHCziIOziHandleziTypes.hs_WriteHandle, $hs.modules.GHCziTypes.hs_True, hs_mbzucodec26D6Ba, hs_trzunewlines26D6Bb, hs_sat26D6Oe, $hs.modules.DataziMaybe.hs_Nothing);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6Oc, hs_sat26D6Od);
    };
};
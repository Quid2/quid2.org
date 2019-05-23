
$hs.modules.GHCziIOziHandleziInternals = new $hs.Module();
$hs.modules.GHCziIOziHandleziInternals.dependencies = ["GHC.Types", "GHC.Bool", "GHC.Unit", "Control.Monad", "Data.Maybe", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.Show", "GHC.Err", "GHC.Exception", "GHC.Classes", "GHC.IO", "GHC.Conc.Sync", "GHC.MVar", "GHC.IO.Buffer", "GHC.IO.Device", "GHC.IO.BufferedIO", "GHC.IO.Exception", "GHC.IO.Encoding", "GHC.IO.Encoding.Types", "GHC.IO.Handle.Types", "GHC.IORef"];
$hs.modules.GHCziIOziHandleziInternals.initBeforeDependencies = function () {
    this.hs_decodeByteBuf = new $hs.Func(2);
    this.hs_closeTextCodecs = new $hs.Func(1);
    this.hs_openTextEncoding = new $hs.Func(3);
    this.hs_initBufferState = new $hs.Func(1);
    this.hs_flushByteWriteBuffer = new $hs.Func(1);
    this.hs_flushWriteBuffer = new $hs.Func(1);
    this.hs_dEFAULTzuCHARzuBUFFERzuSIZZE = new $hs.Data(1);
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
    this.hs_decodeByteBuf.notEvaluated = true;
    this.hs_decodeByteBuf.evaluate = function (hs_hzu26DujP, hs_cbuf26Dukm) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_hzu26DujP, hs_cbuf26Dukm);
    };
    this.hs_closeTextCodecs.notEvaluated = true;
    this.hs_closeTextCodecs.evaluate = function (hs_ds26DukO) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_ds26DukO);
    };
    this.hs_openTextEncoding.notEvaluated = true;
    this.hs_openTextEncoding.evaluate = function (hs_ds26Dulj, hs_hazutype26Duls, hs_cont26Dull) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_ds26Dulj, hs_hazutype26Duls, hs_cont26Dull);
    };
    this.hs_initBufferState.notEvaluated = true;
    this.hs_initBufferState.evaluate = function (hs_ds26DulO) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_ds26DulO);
    };
    this.hs_flushByteWriteBuffer.notEvaluated = true;
    this.hs_flushByteWriteBuffer.evaluate = function (hs_hzu26DulR) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_hzu26DulR);
    };
    this.hs_flushWriteBuffer.notEvaluated = true;
    this.hs_flushWriteBuffer.evaluate = function (hs_hzu26Dumr) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_hzu26Dumr);
    };
    this.hs_dEFAULTzuCHARzuBUFFERzuSIZZE.notEvaluated = true;
    this.hs_dEFAULTzuCHARzuBUFFERzuSIZZE.evaluate = function () {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this;
    };
    this.hs_ioezubufsizz.notEvaluated = true;
    this.hs_ioezubufsizz.evaluate = function (hs_n26DumX) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_n26DumX);
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
    this.hs_readTextDeviceNonBlocking.evaluate = function (hs_hzu26Dune, hs_cbuf26DunT) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_hzu26Dune, hs_cbuf26DunT);
    };
    this.hs_ioezuclosedHandle.evaluateOnce = function () {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_augmentIOError.notEvaluated = true;
    this.hs_augmentIOError.evaluate = function (hs_ioe26Dupk, hs_fun26DupD, hs_h26DupA) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_ioe26Dupk, hs_fun26DupD, hs_h26DupA);
    };
    this.hs_withHandlezq.notEvaluated = true;
    this.hs_withHandlezq.evaluate = function (hs_fun26DuqY, hs_h26DuqZ, hs_m26Dur1, hs_act26Dur0) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_fun26DuqY, hs_h26DuqZ, hs_m26Dur1, hs_act26Dur0);
    };
    this.hs_withHandlezuzq.notEvaluated = true;
    this.hs_withHandlezuzq.evaluate = function (hs_fun26Durk, hs_h26Durl, hs_m26Durm, hs_act26Durq) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_fun26Durk, hs_h26Durl, hs_m26Durm, hs_act26Durq);
    };
    this.hs_withHandlezu.notEvaluated = true;
    this.hs_withHandlezu.evaluate = function (hs_eta26DurE, hs_eta126DurA, hs_eta226DurI) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_eta26DurE, hs_eta126DurA, hs_eta226DurI);
    };
    this.hs_wantReadableHandlezu.notEvaluated = true;
    this.hs_wantReadableHandlezu.evaluate = function (hs_fun26Dusc, hs_h26Dus8, hs_act26Dusg) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_fun26Dusc, hs_h26Dus8, hs_act26Dusg);
    };
    this.hs_wantSeekableHandle.notEvaluated = true;
    this.hs_wantSeekableHandle.evaluate = function (hs_fun26Dust, hs_h26Dusp, hs_zuact26DusZ) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_fun26Dust, hs_h26Dusp, hs_zuact26DusZ);
    };
    this.hs_withHandle.notEvaluated = true;
    this.hs_withHandle.evaluate = function (hs_eta26Dutk, hs_eta126Dutg, hs_eta226Duto) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_eta26Dutk, hs_eta126Dutg, hs_eta226Duto);
    };
    this.hs_wantReadableHandle.notEvaluated = true;
    this.hs_wantReadableHandle.evaluate = function (hs_fun26DutB, hs_h26Dutx, hs_act26DutF) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_fun26DutB, hs_h26Dutx, hs_act26DutF);
    };
    this.hs_debugIO.notEvaluated = true;
    this.hs_debugIO.evaluate = function (hs_s26DutO) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_s26DutO);
    };
    this.hs_writeCharBuffer.notEvaluated = true;
    this.hs_writeCharBuffer.evaluate = function (hs_hzu26DutR, hs_cbuf26Duuc) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_hzu26DutR, hs_cbuf26Duuc);
    };
    this.hs_flushCharReadBuffer.notEvaluated = true;
    this.hs_flushCharReadBuffer.evaluate = function (hs_ds26Duva) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_ds26Duva);
    };
    this.hs_flushCharBuffer.notEvaluated = true;
    this.hs_flushCharBuffer.evaluate = function (hs_hzu26Dux5) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_hzu26Dux5);
    };
    this.hs_flushByteReadBuffer.notEvaluated = true;
    this.hs_flushByteReadBuffer.evaluate = function (hs_hzu26DuxB) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_hzu26DuxB);
    };
    this.hs_wantWritableHandle.notEvaluated = true;
    this.hs_wantWritableHandle.evaluate = function (hs_fun26DuA1, hs_h26DuzX, hs_act26DuA5) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_fun26DuA1, hs_h26DuzX, hs_act26DuA5);
    };
    this.hs_flushBuffer.notEvaluated = true;
    this.hs_flushBuffer.evaluate = function (hs_hzu26DuAc) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_hzu26DuAc);
    };
    this.hs_readTextDevice.notEvaluated = true;
    this.hs_readTextDevice.evaluate = function (hs_hzu26DuC3, hs_cbuf26DuCU) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_hzu26DuC3, hs_cbuf26DuCU);
    };
    this.hs_hLookAheadzu.notEvaluated = true;
    this.hs_hLookAheadzu.evaluate = function (hs_handlezu26DuDr) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_handlezu26DuDr);
    };
    this.hs_withHandlezuzuzq.notEvaluated = true;
    this.hs_withHandlezuzuzq.evaluate = function (hs_fun26DuE4, hs_h26DuE5, hs_m26DuE7, hs_act26DuE6) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_fun26DuE4, hs_h26DuE5, hs_m26DuE7, hs_act26DuE6);
    };
    this.hs_withAllHandleszuzu.notEvaluated = true;
    this.hs_withAllHandleszuzu.evaluate = function (hs_fun26DuEo, hs_h26DuEk, hs_act26DuEs) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_fun26DuEo, hs_h26DuEk, hs_act26DuEs);
    };
    this.hs_ioezufinalizzedHandle.notEvaluated = true;
    this.hs_ioezufinalizzedHandle.evaluate = function (hs_fp26DuEE) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_fp26DuEE);
    };
    this.hs_mkHandle.notEvaluated = true;
    this.hs_mkHandle.evaluate = function (hs_zddIODevice26DuFs, hs_zddBufferedIO26DuF0, hs_zddTypeable26DuFY, hs_dev26DuF1, hs_filepath26DuGi, hs_hazutype26DuET, hs_buffered26DuFc, hs_mbzucodec26DuES, hs_nl26DuG7, hs_finalizzer26DuGe, hs_otherzuside26DuGa) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_zddIODevice26DuFs, hs_zddBufferedIO26DuF0, hs_zddTypeable26DuFY, hs_dev26DuF1, hs_filepath26DuGi, hs_hazutype26DuET, hs_buffered26DuFc, hs_mbzucodec26DuES, hs_nl26DuG7, hs_finalizzer26DuGe, hs_otherzuside26DuGa);
    };
    this.hs_hClosezuhelp.notEvaluated = true;
    this.hs_hClosezuhelp.evaluate = function (hs_handlezu26DuGH) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_handlezu26DuGH);
    };
    this.hs_handleFinalizzer.notEvaluated = true;
    this.hs_handleFinalizzer.evaluate = function (hs_fp26DuIl, hs_m26DuI6) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_fp26DuIl, hs_m26DuI6);
    };
    this.hs_mkFileHandle.notEvaluated = true;
    this.hs_mkFileHandle.evaluate = function (hs_zddIODevice26DuIu, hs_zddBufferedIO26DuIv, hs_zddTypeable26DuIw, hs_dev26DuIx, hs_filepath26DuIy, hs_iomode26DuIz, hs_mbzucodec26DuIC, hs_trzunewlines26DuID) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_zddIODevice26DuIu, hs_zddBufferedIO26DuIv, hs_zddTypeable26DuIw, hs_dev26DuIx, hs_filepath26DuIy, hs_iomode26DuIz, hs_mbzucodec26DuIC, hs_trzunewlines26DuID);
    };
    this.hs_mkDuplexHandle.notEvaluated = true;
    this.hs_mkDuplexHandle.evaluate = function (hs_zddIODevice26DuIM, hs_zddBufferedIO26DuIN, hs_zddTypeable26DuIO, hs_dev26DuIP, hs_filepath26DuIQ, hs_mbzucodec26DuIR, hs_trzunewlines26DuIS) {
        $hs.modules.GHCziIOziHandleziInternals.loadDependencies();
        return this.evaluate(hs_zddIODevice26DuIM, hs_zddBufferedIO26DuIN, hs_zddTypeable26DuIO, hs_dev26DuIP, hs_filepath26DuIQ, hs_mbzucodec26DuIR, hs_trzunewlines26DuIS);
    };
};
$hs.modules.GHCziIOziHandleziInternals.initAfterDependencies = function () {
    this.hs_decodeByteBuf.notEvaluated = false;
    this.hs_closeTextCodecs.notEvaluated = false;
    this.hs_openTextEncoding.notEvaluated = false;
    this.hs_initBufferState.notEvaluated = false;
    this.hs_flushByteWriteBuffer.notEvaluated = false;
    this.hs_flushWriteBuffer.notEvaluated = false;
    this.hs_dEFAULTzuCHARzuBUFFERzuSIZZE.notEvaluated = false;
    this.hs_dEFAULTzuCHARzuBUFFERzuSIZZE.evaluate = function () {
        return this;
    };
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
    var hs_sat26DuJW = new $hs.Thunk();
    var hs_noByteBuffer25ufHA = new $hs.Thunk();
    var hs_sat26DuJY = new $hs.Thunk();
    var hs_noCharBuffer25ufHy = new $hs.Thunk();
    var hs_ioezuinvalidCharacter25ufGM = new $hs.Thunk();
    var hs_ioezucannotFlushNotSeekable25ufGK = new $hs.Thunk();
    var hs_ioezunotSeekable25ufGI = new $hs.Thunk();
    var hs_checkReadableHandle25ufGu = new $hs.Func(2);
    var hs_dozuoperation25ufGe = new $hs.Func(4);
    var hs_wantReadableHandlezq25ufGs = new $hs.Func(4);
    var hs_wantWritableHandlezq25ufGk = new $hs.Func(4);
    var hs_readTextDevicezq25ufHI = new $hs.Func(3);
    var hs_trymaybe25ufHu = new $hs.Func(1);
    this.hs_decodeByteBuf.evaluate = function (hs_hzu26DujP, hs_cbuf26Dukm) {
        var hs_wild26DuJq = hs_hzu26DujP;
        if (hs_hzu26DujP.notEvaluated) {
            hs_wild26DuJq = hs_hzu26DujP.hscall();
        }
        var hs_rb26Duk8 = hs_wild26DuJq.data[5];
        var hs_rb126Dukb = hs_wild26DuJq.data[7];
        var hs_ds426Dukf = hs_wild26DuJq.data[11];
        var hs_a26Duk9 = new $hs.Data(1);
        hs_a26Duk9.data = [hs_rb26Duk8];
        var hs_a126Dukc = new $hs.Data(1);
        hs_a126Dukc.data = [hs_rb126Dukb];
        var hs_sat26DuJT = new $hs.Func(1);
        hs_sat26DuJT.evaluate = function (hs_bbuf026Dukj) {
            var hs_sat26DuJH = new $hs.Func(1);
            hs_sat26DuJH.evaluate = function (hs_ds926Dukz) {
                var hs_wild126DuJD = hs_ds926Dukz;
                if (hs_ds926Dukz.notEvaluated) {
                    hs_wild126DuJD = hs_ds926Dukz.hscall();
                }
                var hs_bbuf226DukD = hs_wild126DuJD.data[0];
                var hs_cbufzq26DukF = hs_wild126DuJD.data[1];
                var hs_sat26DuJE = new $hs.Thunk();
                hs_sat26DuJE.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_cbufzq26DukF);
                };
                var hs_sat26DuJF = new $hs.Thunk();
                hs_sat26DuJF.evaluateOnce = function () {
                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a26Duk9, hs_bbuf226DukD);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuJF, hs_sat26DuJE);
            };
            var hs_sat26DuJS = new $hs.Thunk();
            hs_sat26DuJS.evaluateOnce = function () {
                var hs_wild126DuJG = hs_ds426Dukf;
                if (hs_ds426Dukf.notEvaluated) {
                    hs_wild126DuJG = hs_ds426Dukf.hscall();
                }
                switch (hs_wild126DuJG.tag) {
                case 1:
                    var hs_sat26DuJJ = new $hs.Thunk();
                    hs_sat26DuJJ.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziEncoding.hs_latin1zudecode.hscall(hs_bbuf026Dukj, hs_cbuf26Dukm);
                    };
                    var hs_sat26DuJM = new $hs.Thunk();
                    hs_sat26DuJM.evaluateOnce = function () {
                        var hs_sat26DuJK = new $hs.Thunk();
                        hs_sat26DuJK.evaluateOnce = function () {
                            var hs_sat26DuJI = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("codec_state\x00");
                            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DuJI);
                        };
                        var hs_sat26DuJL = new $hs.Data(1);
                        hs_sat26DuJL.data = [hs_sat26DuJK, hs_bbuf026Dukj];
                        return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126Dukc, hs_sat26DuJL);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuJM, hs_sat26DuJJ);
                case 2:
                    var hs_decoder26Dukp = hs_wild126DuJG.data[0];
                    var hs_sat26DuJQ = new $hs.Func(1);
                    hs_sat26DuJQ.evaluate = function (hs_state26Duks) {
                        var hs_sat26DuJN = new $hs.Thunk();
                        hs_sat26DuJN.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziEncodingziTypes.hs_encode.hscall(hs_decoder26Dukp, hs_bbuf026Dukj, hs_cbuf26Dukm);
                        };
                        var hs_sat26DuJP = new $hs.Thunk();
                        hs_sat26DuJP.evaluateOnce = function () {
                            var hs_sat26DuJO = new $hs.Data(1);
                            hs_sat26DuJO.data = [hs_state26Duks, hs_bbuf026Dukj];
                            return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126Dukc, hs_sat26DuJO);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuJP, hs_sat26DuJN);
                    };
                    var hs_sat26DuJR = new $hs.Thunk();
                    hs_sat26DuJR.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziEncodingziTypes.hs_getState.hscall(hs_decoder26Dukp);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuJR, hs_sat26DuJQ);
                }
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuJS, hs_sat26DuJH);
        };
        var hs_sat26DuJU = new $hs.Thunk();
        hs_sat26DuJU.evaluateOnce = function () {
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a26Duk9);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuJU, hs_sat26DuJT);
    };
    hs_sat26DuJW.evaluateOnce = function () {
        var hs_sat26DuJV = new $hs.Data(1);
        hs_sat26DuJV.data = [1];
        return $hs.modules.GHCziIOziBuffer.hs_newByteBuffer.hscall(hs_sat26DuJV, $hs.modules.GHCziIOziBuffer.hs_ReadBuffer);
    };
    hs_noByteBuffer25ufHA.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_unsafePerformIO, hs_sat26DuJW);
    };
    hs_sat26DuJY.evaluateOnce = function () {
        var hs_sat26DuJX = new $hs.Data(1);
        hs_sat26DuJX.data = [1];
        return $hs.modules.GHCziIOziBuffer.hs_newCharBuffer.hscall(hs_sat26DuJX, $hs.modules.GHCziIOziBuffer.hs_ReadBuffer);
    };
    hs_noCharBuffer25ufHy.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_unsafePerformIO, hs_sat26DuJY);
    };
    this.hs_closeTextCodecs.evaluate = function (hs_ds26DukO) {
        var hs_wild26DuK1 = hs_ds26DukO;
        if (hs_ds26DukO.notEvaluated) {
            hs_wild26DuK1 = hs_ds26DukO.hscall();
        }
        var hs_ds426Dulb = hs_wild26DuK1.data[10];
        var hs_ds526Dul6 = hs_wild26DuK1.data[11];
        var hs_sat26DuKg = new $hs.Thunk();
        hs_sat26DuKg.evaluateOnce = function () {
            var hs_wild126DuJZ = hs_ds426Dulb;
            if (hs_ds426Dulb.notEvaluated) {
                hs_wild126DuJZ = hs_ds426Dulb.hscall();
            }
            switch (hs_wild126DuJZ.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            case 2:
                var hs_d26Dule = hs_wild126DuJZ.data[0];
                return $hs.modules.GHCziIOziEncodingziTypes.hs_close.hscall(hs_d26Dule);
            }
        };
        var hs_sat26DuKh = new $hs.Thunk();
        hs_sat26DuKh.evaluateOnce = function () {
            var hs_wild126DuKf = hs_ds526Dul6;
            if (hs_ds526Dul6.notEvaluated) {
                hs_wild126DuKf = hs_ds526Dul6.hscall();
            }
            switch (hs_wild126DuKf.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            case 2:
                var hs_d26Dul9 = hs_wild126DuKf.data[0];
                return $hs.modules.GHCziIOziEncodingziTypes.hs_close.hscall(hs_d26Dul9);
            }
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuKh, hs_sat26DuKg);
    };
    this.hs_openTextEncoding.evaluate = function (hs_ds26Dulj, hs_hazutype26Duls, hs_cont26Dull) {
        var hs_wild26DuKi = hs_ds26Dulj;
        if (hs_ds26Dulj.notEvaluated) {
            hs_wild26DuKi = hs_ds26Dulj.hscall();
        }
        switch (hs_wild26DuKi.tag) {
        case 1:
            return hs_cont26Dull.hscall($hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing);
        case 2:
            var hs_ds126Duln = hs_wild26DuKi.data[0];
            var hs_wild126DuKk = hs_ds126Duln;
            if (hs_ds126Duln.notEvaluated) {
                hs_wild126DuKk = hs_ds126Duln.hscall();
            }
            var hs_ds326Dulu = hs_wild126DuKk.data[1];
            var hs_ds426DulC = hs_wild126DuKk.data[2];
            var hs_sat26DuKr = new $hs.Func(1);
            hs_sat26DuKr.evaluate = function (hs_mbzudecoder26DulK) {
                var hs_sat26DuKm = new $hs.Func(1);
                hs_sat26DuKm.evaluate = function (hs_mbzuencoder26DulJ) {
                    return hs_cont26Dull.hscall(hs_mbzuencoder26DulJ, hs_mbzudecoder26DulK);
                };
                var hs_sat26DuKp = new $hs.Thunk();
                hs_sat26DuKp.evaluateOnce = function () {
                    var hs_wild226DuKl = $hs.modules.GHCziIOziHandleziTypes.hs_isWritableHandleType.hscall(hs_hazutype26Duls);
                    switch (hs_wild226DuKl.tag) {
                    case 1:
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.DataziMaybe.hs_Nothing);
                    case 2:
                        var hs_sat26DuKo = new $hs.Func(1);
                        hs_sat26DuKo.evaluate = function (hs_encoder26DulE) {
                            var hs_sat26DuKn = new $hs.Data(2);
                            hs_sat26DuKn.data = [hs_encoder26DulE];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuKn);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ds426DulC, hs_sat26DuKo);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuKp, hs_sat26DuKm);
            };
            var hs_sat26DuKu = new $hs.Thunk();
            hs_sat26DuKu.evaluateOnce = function () {
                var hs_wild226DuKq = $hs.modules.GHCziIOziHandleziTypes.hs_isReadableHandleType.hscall(hs_hazutype26Duls);
                switch (hs_wild226DuKq.tag) {
                case 1:
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.DataziMaybe.hs_Nothing);
                case 2:
                    var hs_sat26DuKt = new $hs.Func(1);
                    hs_sat26DuKt.evaluate = function (hs_decoder26Dulw) {
                        var hs_sat26DuKs = new $hs.Data(2);
                        hs_sat26DuKs.data = [hs_decoder26Dulw];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuKs);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ds326Dulu, hs_sat26DuKt);
                }
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuKu, hs_sat26DuKr);
        }
    };
    this.hs_initBufferState.evaluate = function (hs_ds26DulO) {
        var hs_wild26DuKv = hs_ds26DulO;
        if (hs_ds26DulO.notEvaluated) {
            hs_wild26DuKv = hs_ds26DulO.hscall();
        }
        switch (hs_wild26DuKv.tag) {
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
    this.hs_flushByteWriteBuffer.evaluate = function (hs_hzu26DulR) {
        var hs_wild26DuKx = hs_hzu26DulR;
        if (hs_hzu26DulR.notEvaluated) {
            hs_wild26DuKx = hs_hzu26DulR.hscall();
        }
        var hs_zddBufferedIO26Dumi = hs_wild26DuKx.data[1];
        var hs_ds26Dumj = hs_wild26DuKx.data[3];
        var hs_rb26Duma = hs_wild26DuKx.data[5];
        var hs_a26Dumb = new $hs.Data(1);
        hs_a26Dumb.data = [hs_rb26Duma];
        var hs_sat26DuKQ = new $hs.Func(1);
        hs_sat26DuKQ.evaluate = function (hs_bbuf26Dume) {
            var hs_sat26DuKM = new $hs.Thunk();
            hs_sat26DuKM.evaluateOnce = function () {
                var hs_sat26DuKK = new $hs.Func(1);
                hs_sat26DuKK.evaluate = function (hs_bbufzq26Dumm) {
                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a26Dumb, hs_bbufzq26Dumm);
                };
                var hs_sat26DuKL = new $hs.Thunk();
                hs_sat26DuKL.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziBufferedIO.hs_flushWriteBuffer.hscall(hs_zddBufferedIO26Dumi, hs_ds26Dumj, hs_bbuf26Dume);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuKL, hs_sat26DuKK);
            };
            var hs_sat26DuKP = new $hs.Thunk();
            hs_sat26DuKP.evaluateOnce = function () {
                var hs_sat26DuKO = new $hs.Thunk();
                hs_sat26DuKO.evaluateOnce = function () {
                    var hs_sat26DuKN = new $hs.Thunk();
                    hs_sat26DuKN.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBuffer.hs_isEmptyBuffer.hscall(hs_bbuf26Dume);
                    };
                    return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DuKN);
                };
                return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuKO);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DuKP, hs_sat26DuKM);
        };
        var hs_sat26DuKR = new $hs.Thunk();
        hs_sat26DuKR.evaluateOnce = function () {
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a26Dumb);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuKR, hs_sat26DuKQ);
    };
    this.hs_flushWriteBuffer.evaluate = function (hs_hzu26Dumr) {
        var hs_wild26DumQ = hs_hzu26Dumr;
        if (hs_hzu26Dumr.notEvaluated) {
            hs_wild26DumQ = hs_hzu26Dumr.hscall();
        }
        var hs_rb26DumJ = hs_wild26DumQ.data[5];
        var hs_sat26DuLa = new $hs.Func(1);
        hs_sat26DuLa.evaluate = function (hs_buf26DumN) {
            var hs_sat26DuL7 = new $hs.Thunk();
            hs_sat26DuL7.evaluateOnce = function () {
                return $hs.modules.GHCziIOziHandleziInternals.hs_flushByteWriteBuffer.hscall(hs_wild26DumQ);
            };
            var hs_sat26DuL9 = new $hs.Thunk();
            hs_sat26DuL9.evaluateOnce = function () {
                var hs_sat26DuL8 = new $hs.Thunk();
                hs_sat26DuL8.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziBuffer.hs_isWriteBuffer.hscall(hs_buf26DumN);
                };
                return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuL8);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DuL9, hs_sat26DuL7);
        };
        var hs_sat26DuLc = new $hs.Thunk();
        hs_sat26DuLc.evaluateOnce = function () {
            var hs_sat26DuLb = new $hs.Data(1);
            hs_sat26DuLb.data = [hs_rb26DumJ];
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_sat26DuLb);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuLc, hs_sat26DuLa);
    };
    this.hs_dEFAULTzuCHARzuBUFFERzuSIZZE.data = [2048];
    this.hs_ioezubufsizz.evaluate = function (hs_n26DumX) {
        var hs_sat26DuLg = new $hs.Thunk();
        hs_sat26DuLg.evaluateOnce = function () {
            var hs_sat26DuLe = new $hs.Thunk();
            hs_sat26DuLe.evaluateOnce = function () {
                var hs_sat26DuLd = new $hs.Data(1);
                hs_sat26DuLd.data = [9];
                return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_sat26DuLd, hs_n26DumX, $hs.modules.GHCziTypes.hs_ZMZN);
            };
            var hs_sat26DuLf = new $hs.Thunk();
            hs_sat26DuLf.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("illegal buffer size \x00");
            };
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DuLf, hs_sat26DuLe);
        };
        var hs_sat26DuLh = new $hs.Thunk();
        hs_sat26DuLh.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hSetBuffering\x00");
        };
        var hs_sat26DuLi = new $hs.Data(1);
        hs_sat26DuLi.data = [$hs.modules.DataziMaybe.hs_Nothing, $hs.modules.GHCziIOziException.hs_InvalidArgument, hs_sat26DuLh, hs_sat26DuLg, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing];
        return $hs.modules.GHCziIOziException.hs_ioException.hscall(hs_sat26DuLi);
    };
    hs_ioezuinvalidCharacter25ufGM.evaluateOnce = function () {
        var hs_sat26DuLj = new $hs.Thunk();
        hs_sat26DuLj.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("invalid byte sequence for this encoding\x00");
        };
        var hs_sat26DuLk = new $hs.Data(1);
        hs_sat26DuLk.data = [$hs.modules.DataziMaybe.hs_Nothing, $hs.modules.GHCziIOziException.hs_InvalidArgument, $hs.modules.GHCziTypes.hs_ZMZN, hs_sat26DuLj, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing];
        return $hs.modules.GHCziIOziException.hs_ioException.hscall(hs_sat26DuLk);
    };
    hs_ioezucannotFlushNotSeekable25ufGK.evaluateOnce = function () {
        var hs_sat26DuLl = new $hs.Thunk();
        hs_sat26DuLl.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("cannot flush the read buffer: underlying device is not seekable\x00");
        };
        var hs_sat26DuLm = new $hs.Data(1);
        hs_sat26DuLm.data = [$hs.modules.DataziMaybe.hs_Nothing, $hs.modules.GHCziIOziException.hs_IllegalOperation, $hs.modules.GHCziTypes.hs_ZMZN, hs_sat26DuLl, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing];
        return $hs.modules.GHCziIOziException.hs_ioException.hscall(hs_sat26DuLm);
    };
    hs_ioezunotSeekable25ufGI.evaluateOnce = function () {
        var hs_sat26DuLn = new $hs.Thunk();
        hs_sat26DuLn.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("handle is not seekable\x00");
        };
        var hs_sat26DuLo = new $hs.Data(1);
        hs_sat26DuLo.data = [$hs.modules.DataziMaybe.hs_Nothing, $hs.modules.GHCziIOziException.hs_IllegalOperation, $hs.modules.GHCziTypes.hs_ZMZN, hs_sat26DuLn, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing];
        return $hs.modules.GHCziIOziException.hs_ioException.hscall(hs_sat26DuLo);
    };
    this.hs_ioezunotWritable.evaluateOnce = function () {
        var hs_sat26DuLp = new $hs.Thunk();
        hs_sat26DuLp.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("handle is not open for writing\x00");
        };
        var hs_sat26DuLq = new $hs.Data(1);
        hs_sat26DuLq.data = [$hs.modules.DataziMaybe.hs_Nothing, $hs.modules.GHCziIOziException.hs_IllegalOperation, $hs.modules.GHCziTypes.hs_ZMZN, hs_sat26DuLp, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing];
        return $hs.modules.GHCziIOziException.hs_ioException.hscall(hs_sat26DuLq);
    };
    this.hs_ioezunotReadable.evaluateOnce = function () {
        var hs_sat26DuLr = new $hs.Thunk();
        hs_sat26DuLr.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("handle is not open for reading\x00");
        };
        var hs_sat26DuLs = new $hs.Data(1);
        hs_sat26DuLs.data = [$hs.modules.DataziMaybe.hs_Nothing, $hs.modules.GHCziIOziException.hs_IllegalOperation, $hs.modules.GHCziTypes.hs_ZMZN, hs_sat26DuLr, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing];
        return $hs.modules.GHCziIOziException.hs_ioException.hscall(hs_sat26DuLs);
    };
    this.hs_ioezuEOF.evaluateOnce = function () {
        var hs_sat26DuLt = new $hs.Data(1);
        hs_sat26DuLt.data = [$hs.modules.DataziMaybe.hs_Nothing, $hs.modules.GHCziIOziException.hs_EOF, $hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing];
        return $hs.modules.GHCziIOziException.hs_ioException.hscall(hs_sat26DuLt);
    };
    this.hs_readTextDeviceNonBlocking.evaluate = function (hs_hzu26Dune, hs_cbuf26DunT) {
        var hs_wild26DunS = hs_hzu26Dune;
        if (hs_hzu26Dune.notEvaluated) {
            hs_wild26DunS = hs_hzu26Dune.hscall();
        }
        var hs_zddBufferedIO26DunE = hs_wild26DunS.data[1];
        var hs_ds26DunF = hs_wild26DunS.data[3];
        var hs_rb26Dunx = hs_wild26DunS.data[5];
        var hs_a26Duny = new $hs.Data(1);
        hs_a26Duny.data = [hs_rb26Dunx];
        var hs_sat26DuLQ = new $hs.Func(1);
        hs_sat26DuLQ.evaluate = function (hs_bbuf026DunB) {
            var hs_sat26DuLJ = new $hs.Thunk();
            hs_sat26DuLJ.evaluateOnce = function () {
                return $hs.modules.GHCziIOziHandleziInternals.hs_decodeByteBuf.hscall(hs_wild26DunS, hs_cbuf26DunT);
            };
            var hs_sat26DuLP = new $hs.Thunk();
            hs_sat26DuLP.evaluateOnce = function () {
                var hs_sat26DuLM = new $hs.Thunk();
                hs_sat26DuLM.evaluateOnce = function () {
                    var hs_sat26DuLK = new $hs.Func(1);
                    hs_sat26DuLK.evaluate = function (hs_ds926DunI) {
                        var hs_wild126DuLI = hs_ds926DunI;
                        if (hs_ds926DunI.notEvaluated) {
                            hs_wild126DuLI = hs_ds926DunI.hscall();
                        }
                        var hs_r26DunM = hs_wild126DuLI.data[0];
                        var hs_bbuf126DunO = hs_wild126DuLI.data[1];
                        var hs_wild226DuLH = $hs.modules.DataziMaybe.hs_isNothing.hscall(hs_r26DunM);
                        switch (hs_wild226DuLH.tag) {
                        case 1:
                            return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a26Duny, hs_bbuf126DunO);
                        case 2:
                            if ($hs.modules.GHCziIOziHandleziInternals.hs_ioezuEOF.notEvaluated) {
                                return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuEOF.hscall();
                            } else {
                                return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuEOF;
                            }
                        }
                    };
                    var hs_sat26DuLL = new $hs.Thunk();
                    hs_sat26DuLL.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBufferedIO.hs_fillReadBuffer0.hscall(hs_zddBufferedIO26DunE, hs_ds26DunF, hs_bbuf026DunB);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuLL, hs_sat26DuLK);
                };
                var hs_sat26DuLO = new $hs.Thunk();
                hs_sat26DuLO.evaluateOnce = function () {
                    var hs_sat26DuLN = new $hs.Thunk();
                    hs_sat26DuLN.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBuffer.hs_isEmptyBuffer.hscall(hs_bbuf026DunB);
                    };
                    return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuLN);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DuLO, hs_sat26DuLM);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuLP, hs_sat26DuLJ);
        };
        var hs_sat26DuLR = new $hs.Thunk();
        hs_sat26DuLR.evaluateOnce = function () {
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a26Duny);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuLR, hs_sat26DuLQ);
    };
    this.hs_ioezuclosedHandle.evaluateOnce = function () {
        var hs_sat26DuLS = new $hs.Thunk();
        hs_sat26DuLS.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("handle is closed\x00");
        };
        var hs_sat26DuLT = new $hs.Data(1);
        hs_sat26DuLT.data = [$hs.modules.DataziMaybe.hs_Nothing, $hs.modules.GHCziIOziException.hs_IllegalOperation, $hs.modules.GHCziTypes.hs_ZMZN, hs_sat26DuLS, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing];
        return $hs.modules.GHCziIOziException.hs_ioException.hscall(hs_sat26DuLT);
    };
    hs_checkReadableHandle25ufGu.evaluate = function (hs_act26Duor, hs_hzu26Duo0) {
        var hs_wild26Duoq = hs_hzu26Duo0;
        if (hs_hzu26Duo0.notEvaluated) {
            hs_wild26Duoq = hs_hzu26Duo0.hscall();
        }
        var hs_ds126Duoo = hs_wild26Duoq.data[4];
        var hs_rb26Duoj = hs_wild26Duoq.data[5];
        var hs_rb226Duom = hs_wild26Duoq.data[8];
        var hs_a26Duok = new $hs.Data(1);
        hs_a26Duok.data = [hs_rb26Duoj];
        var hs_a126Duon = new $hs.Data(1);
        hs_a126Duon.data = [hs_rb226Duom];
        var hs_wild126DuM7 = hs_ds126Duoo;
        if (hs_ds126Duoo.notEvaluated) {
            hs_wild126DuM7 = hs_ds126Duoo.hscall();
        }
        switch (hs_wild126DuM7.tag) {
        case 3:
            return hs_act26Duor.hscall(hs_wild26Duoq);
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
            var hs_sat26DuMv = new $hs.Func(1);
            hs_sat26DuMv.evaluate = function (hs_bbuf26Duou) {
                var hs_sat26DuM9 = new $hs.Thunk();
                hs_sat26DuM9.evaluateOnce = function () {
                    return hs_act26Duor.hscall(hs_wild26Duoq);
                };
                var hs_sat26DuMu = new $hs.Thunk();
                hs_sat26DuMu.evaluateOnce = function () {
                    var hs_sat26DuMr = new $hs.Thunk();
                    hs_sat26DuMr.evaluateOnce = function () {
                        var hs_sat26DuMl = new $hs.Thunk();
                        hs_sat26DuMl.evaluateOnce = function () {
                            var hs_sat26DuMj = new $hs.Func(1);
                            hs_sat26DuMj.evaluate = function (hs_cbufzq26DuoE) {
                                var hs_sat26DuMf = new $hs.Thunk();
                                hs_sat26DuMf.evaluateOnce = function () {
                                    var hs_sat26DuMc = new $hs.Func(1);
                                    hs_sat26DuMc.evaluate = function (hs_bbuf126DuoV) {
                                        var hs_sat26DuMb = new $hs.Thunk();
                                        hs_sat26DuMb.evaluateOnce = function () {
                                            var hs_wild226DuM8 = hs_bbuf126DuoV;
                                            if (hs_bbuf126DuoV.notEvaluated) {
                                                hs_wild226DuM8 = hs_bbuf126DuoV.hscall();
                                            }
                                            var hs_rb426Dup3 = hs_wild226DuM8.data[0];
                                            var hs_rb526Dup4 = hs_wild226DuM8.data[1];
                                            var hs_rb626Dup5 = hs_wild226DuM8.data[3];
                                            var hs_rb726Dup6 = hs_wild226DuM8.data[4];
                                            var hs_rb826Dup7 = hs_wild226DuM8.data[5];
                                            var $res = new $hs.Data(1);
                                            $res.data = [hs_rb426Dup3, hs_rb526Dup4, $hs.modules.GHCziIOziBuffer.hs_ReadBuffer, hs_rb626Dup5, hs_rb726Dup6, hs_rb826Dup7];
                                            return $res;
                                        };
                                        return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a26Duok, hs_sat26DuMb);
                                    };
                                    var hs_sat26DuMd = new $hs.Thunk();
                                    hs_sat26DuMd.evaluateOnce = function () {
                                        return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a26Duok);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuMd, hs_sat26DuMc);
                                };
                                var hs_sat26DuMi = new $hs.Thunk();
                                hs_sat26DuMi.evaluateOnce = function () {
                                    var hs_sat26DuMh = new $hs.Thunk();
                                    hs_sat26DuMh.evaluateOnce = function () {
                                        var hs_wild226DuMe = hs_cbufzq26DuoE;
                                        if (hs_cbufzq26DuoE.notEvaluated) {
                                            hs_wild226DuMe = hs_cbufzq26DuoE.hscall();
                                        }
                                        var hs_rb426DuoM = hs_wild226DuMe.data[0];
                                        var hs_rb526DuoN = hs_wild226DuMe.data[1];
                                        var hs_rb626DuoO = hs_wild226DuMe.data[3];
                                        var hs_rb726DuoP = hs_wild226DuMe.data[4];
                                        var hs_rb826DuoQ = hs_wild226DuMe.data[5];
                                        var $res = new $hs.Data(1);
                                        $res.data = [hs_rb426DuoM, hs_rb526DuoN, $hs.modules.GHCziIOziBuffer.hs_ReadBuffer, hs_rb626DuoO, hs_rb726DuoP, hs_rb826DuoQ];
                                        return $res;
                                    };
                                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126Duon, hs_sat26DuMh);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuMi, hs_sat26DuMf);
                            };
                            var hs_sat26DuMk = new $hs.Thunk();
                            hs_sat26DuMk.evaluateOnce = function () {
                                return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a126Duon);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuMk, hs_sat26DuMj);
                        };
                        var hs_sat26DuMq = new $hs.Thunk();
                        hs_sat26DuMq.evaluateOnce = function () {
                            var hs_sat26DuMm = new $hs.Thunk();
                            hs_sat26DuMm.evaluateOnce = function () {
                                return $hs.modules.GHCziIOziHandleziInternals.hs_flushByteWriteBuffer.hscall(hs_wild26Duoq);
                            };
                            var hs_sat26DuMp = new $hs.Thunk();
                            hs_sat26DuMp.evaluateOnce = function () {
                                var hs_sat26DuMo = new $hs.Thunk();
                                hs_sat26DuMo.evaluateOnce = function () {
                                    var hs_sat26DuMn = new $hs.Thunk();
                                    hs_sat26DuMn.evaluateOnce = function () {
                                        return $hs.modules.GHCziIOziBuffer.hs_isEmptyBuffer.hscall(hs_bbuf26Duou);
                                    };
                                    return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DuMn);
                                };
                                return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuMo);
                            };
                            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DuMp, hs_sat26DuMm);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuMq, hs_sat26DuMl);
                    };
                    var hs_sat26DuMt = new $hs.Thunk();
                    hs_sat26DuMt.evaluateOnce = function () {
                        var hs_sat26DuMs = new $hs.Thunk();
                        hs_sat26DuMs.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziBuffer.hs_isWriteBuffer.hscall(hs_bbuf26Duou);
                        };
                        return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuMs);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DuMt, hs_sat26DuMr);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuMu, hs_sat26DuM9);
            };
            var hs_sat26DuMw = new $hs.Thunk();
            hs_sat26DuMw.evaluateOnce = function () {
                return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a26Duok);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuMw, hs_sat26DuMv);
        default:
            if ($hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.notEvaluated) {
                return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.hscall();
            } else {
                return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle;
            }
        }
    };
    this.hs_augmentIOError.evaluate = function (hs_ioe26Dupk, hs_fun26DupD, hs_h26DupA) {
        var hs_wild26Dups = hs_ioe26Dupk;
        if (hs_ioe26Dupk.notEvaluated) {
            hs_wild26Dups = hs_ioe26Dupk.hscall();
        }
        var hs_ds526DupG = hs_wild26Dups.data[5];
        var hs_wild126DuMz = hs_wild26Dups;
        if (hs_wild26Dups.notEvaluated) {
            hs_wild126DuMz = hs_wild26Dups.hscall();
        }
        var hs_ds726DupC = hs_wild126DuMz.data[1];
        var hs_ds926DupE = hs_wild126DuMz.data[3];
        var hs_ds1026DupF = hs_wild126DuMz.data[4];
        var hs_sat26DuML = new $hs.Thunk();
        hs_sat26DuML.evaluateOnce = function () {
            var hs_wild226DupR = hs_ds526DupG;
            if (hs_ds526DupG.notEvaluated) {
                hs_wild226DupR = hs_ds526DupG.hscall();
            }
            switch (hs_wild226DupR.tag) {
            case 1:
                var hs_wild326DuMx = hs_h26DupA;
                if (hs_h26DupA.notEvaluated) {
                    hs_wild326DuMx = hs_h26DupA.hscall();
                }
                switch (hs_wild326DuMx.tag) {
                case 1:
                    var hs_path26DupL = hs_wild326DuMx.data[0];
                    var $res = new $hs.Data(2);
                    $res.data = [hs_path26DupL];
                    return $res;
                case 2:
                    var hs_path26DupP = hs_wild326DuMx.data[0];
                    var $res = new $hs.Data(2);
                    $res.data = [hs_path26DupP];
                    return $res;
                }
            case 2:
                if (hs_wild226DupR.notEvaluated) {
                    return hs_wild226DupR.hscall();
                } else {
                    return hs_wild226DupR;
                }
            }
        };
        var hs_sat26DuMM = new $hs.Data(2);
        hs_sat26DuMM.data = [hs_h26DupA];
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DuMM, hs_ds726DupC, hs_fun26DupD, hs_ds926DupE, hs_ds1026DupF, hs_sat26DuML];
        return $res;
    };
    hs_dozuoperation25ufGe.evaluate = function (hs_fun26Duqd, hs_h26Duqe, hs_act26Duq2, hs_m26DupX) {
        var hs_sat26DuNg = new $hs.Func(1);
        hs_sat26DuNg.evaluate = function (hs_hzu26Duq0) {
            var hs_sat26DuNe = new $hs.Thunk();
            hs_sat26DuNe.evaluateOnce = function () {
                var hs_sat26DuNc = new $hs.Func(1);
                hs_sat26DuNc.evaluate = function (hs_e26Duq6) {
                    var hs_sat26DuNa = new $hs.Thunk();
                    hs_sat26DuNa.evaluateOnce = function () {
                        var hs_wild26DuMO = $hs.modules.GHCziException.hs_fromException.hscall($hs.modules.GHCziIOziException.hs_zdfExceptionIOException, hs_e26Duq6);
                        switch (hs_wild26DuMO.tag) {
                        case 1:
                            var hs_wild126DuMN = $hs.modules.GHCziException.hs_fromException.hscall($hs.modules.GHCziIOziException.hs_zdfExceptionAsyncException, hs_e26Duq6);
                            switch (hs_wild126DuMN.tag) {
                            case 1:
                                return $hs.modules.GHCziIO.hs_throwIO.hscall($hs.modules.GHCziException.hs_zdfExceptionSomeException, hs_e26Duq6);
                            case 2:
                                var hs_sat26DuMS = new $hs.Func(1);
                                hs_sat26DuMS.evaluate = function (hs_t26Duqb) {
                                    var hs_sat26DuMQ = new $hs.Thunk();
                                    hs_sat26DuMQ.evaluateOnce = function () {
                                        return hs_dozuoperation25ufGe.hscall(hs_fun26Duqd, hs_h26Duqe, hs_act26Duq2, hs_m26DupX);
                                    };
                                    var hs_sat26DuMR = new $hs.Thunk();
                                    hs_sat26DuMR.evaluateOnce = function () {
                                        return $hs.modules.GHCziConcziSync.hs_throwTo.hscall($hs.modules.GHCziException.hs_zdfExceptionSomeException, hs_t26Duqb, hs_e26Duq6);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuMR, hs_sat26DuMQ);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziConcziSync.hs_myThreadId, hs_sat26DuMS);
                            }
                        case 2:
                            var hs_ioe26Duqi = hs_wild26DuMO.data[0];
                            var hs_sat26DuN9 = new $hs.Thunk();
                            hs_sat26DuN9.evaluateOnce = function () {
                                var hs_wild126Duqq = hs_ioe26Duqi;
                                if (hs_ioe26Duqi.notEvaluated) {
                                    hs_wild126Duqq = hs_ioe26Duqi.hscall();
                                }
                                var hs_ds526DuqC = hs_wild126Duqq.data[5];
                                var hs_wild226DuMV = hs_wild126Duqq;
                                if (hs_wild126Duqq.notEvaluated) {
                                    hs_wild226DuMV = hs_wild126Duqq.hscall();
                                }
                                var hs_ds726Duqz = hs_wild226DuMV.data[1];
                                var hs_ds926DuqA = hs_wild226DuMV.data[3];
                                var hs_ds1026DuqB = hs_wild226DuMV.data[4];
                                var hs_sat26DuN7 = new $hs.Thunk();
                                hs_sat26DuN7.evaluateOnce = function () {
                                    var hs_wild326DuqN = hs_ds526DuqC;
                                    if (hs_ds526DuqC.notEvaluated) {
                                        hs_wild326DuqN = hs_ds526DuqC.hscall();
                                    }
                                    switch (hs_wild326DuqN.tag) {
                                    case 1:
                                        var hs_wild426DuMT = hs_h26Duqe;
                                        if (hs_h26Duqe.notEvaluated) {
                                            hs_wild426DuMT = hs_h26Duqe.hscall();
                                        }
                                        switch (hs_wild426DuMT.tag) {
                                        case 1:
                                            var hs_path26DuqH = hs_wild426DuMT.data[0];
                                            var $res = new $hs.Data(2);
                                            $res.data = [hs_path26DuqH];
                                            return $res;
                                        case 2:
                                            var hs_path26DuqL = hs_wild426DuMT.data[0];
                                            var $res = new $hs.Data(2);
                                            $res.data = [hs_path26DuqL];
                                            return $res;
                                        }
                                    case 2:
                                        if (hs_wild326DuqN.notEvaluated) {
                                            return hs_wild326DuqN.hscall();
                                        } else {
                                            return hs_wild326DuqN;
                                        }
                                    }
                                };
                                var hs_sat26DuN8 = new $hs.Data(2);
                                hs_sat26DuN8.data = [hs_h26Duqe];
                                var $res = new $hs.Data(1);
                                $res.data = [hs_sat26DuN8, hs_ds726Duqz, hs_fun26Duqd, hs_ds926DuqA, hs_ds1026DuqB, hs_sat26DuN7];
                                return $res;
                            };
                            return $hs.modules.GHCziIOziException.hs_ioError.hscall(hs_sat26DuN9);
                        }
                    };
                    var hs_sat26DuNb = new $hs.Thunk();
                    hs_sat26DuNb.evaluateOnce = function () {
                        return $hs.modules.GHCziMVar.hs_putMVar.hscall(hs_m26DupX, hs_hzu26Duq0);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuNb, hs_sat26DuNa);
                };
                var hs_sat26DuNd = new $hs.Thunk();
                hs_sat26DuNd.evaluateOnce = function () {
                    return hs_act26Duq2.hscall(hs_hzu26Duq0);
                };
                return $hs.modules.GHCziIO.hs_catchException.hscall($hs.modules.GHCziException.hs_zdfExceptionSomeException, hs_sat26DuNd, hs_sat26DuNc);
            };
            var hs_sat26DuNf = new $hs.Thunk();
            hs_sat26DuNf.evaluateOnce = function () {
                return $hs.modules.GHCziIOziHandleziTypes.hs_checkHandleInvariants.hscall(hs_hzu26Duq0);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuNf, hs_sat26DuNe);
        };
        var hs_sat26DuNh = new $hs.Thunk();
        hs_sat26DuNh.evaluateOnce = function () {
            return $hs.modules.GHCziMVar.hs_takeMVar.hscall(hs_m26DupX);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuNh, hs_sat26DuNg);
    };
    this.hs_withHandlezq.evaluate = function (hs_fun26DuqY, hs_h26DuqZ, hs_m26Dur1, hs_act26Dur0) {
        var hs_sat26DuNp = new $hs.Thunk();
        hs_sat26DuNp.evaluateOnce = function () {
            var hs_sat26DuNn = new $hs.Func(1);
            hs_sat26DuNn.evaluate = function (hs_ds26Dur4) {
                var hs_wild26DuNi = hs_ds26Dur4;
                if (hs_ds26Dur4.notEvaluated) {
                    hs_wild26DuNi = hs_ds26Dur4.hscall();
                }
                var hs_hzq26Dur8 = hs_wild26DuNi.data[0];
                var hs_v26Durb = hs_wild26DuNi.data[1];
                var hs_sat26DuNl = new $hs.Thunk();
                hs_sat26DuNl.evaluateOnce = function () {
                    var hs_sat26DuNj = new $hs.Thunk();
                    hs_sat26DuNj.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_v26Durb);
                    };
                    var hs_sat26DuNk = new $hs.Thunk();
                    hs_sat26DuNk.evaluateOnce = function () {
                        return $hs.modules.GHCziMVar.hs_putMVar.hscall(hs_m26Dur1, hs_hzq26Dur8);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuNk, hs_sat26DuNj);
                };
                var hs_sat26DuNm = new $hs.Thunk();
                hs_sat26DuNm.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziHandleziTypes.hs_checkHandleInvariants.hscall(hs_hzq26Dur8);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuNm, hs_sat26DuNl);
            };
            var hs_sat26DuNo = new $hs.Thunk();
            hs_sat26DuNo.evaluateOnce = function () {
                return hs_dozuoperation25ufGe.hscall(hs_fun26DuqY, hs_h26DuqZ, hs_act26Dur0, hs_m26Dur1);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuNo, hs_sat26DuNn);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_maskzu, hs_sat26DuNp);
    };
    this.hs_withHandlezuzq.evaluate = function (hs_fun26Durk, hs_h26Durl, hs_m26Durm, hs_act26Durq) {
        var hs_sat26DuNt = new $hs.Func(1);
        hs_sat26DuNt.evaluate = function (hs_hzu26Durp) {
            var hs_sat26DuNr = new $hs.Func(1);
            hs_sat26DuNr.evaluate = function (hs_a26Durt) {
                var hs_sat26DuNq = new $hs.Data(1);
                hs_sat26DuNq.data = [hs_hzu26Durp, hs_a26Durt];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuNq);
            };
            var hs_sat26DuNs = new $hs.Thunk();
            hs_sat26DuNs.evaluateOnce = function () {
                return hs_act26Durq.hscall(hs_hzu26Durp);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuNs, hs_sat26DuNr);
        };
        var hs_sat26DuNu = new $hs.Func(1);
        hs_sat26DuNu.evaluate = function (hs_eta1cW6l3) {
            return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezq.hscall(hs_fun26Durk, hs_h26Durl, hs_m26Durm, hs_eta1cW6l3);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DuNu, hs_sat26DuNt);
    };
    this.hs_withHandlezu.evaluate = function (hs_eta26DurE, hs_eta126DurA, hs_eta226DurI) {
        var hs_wild26DurF = hs_eta126DurA;
        if (hs_eta126DurA.notEvaluated) {
            hs_wild26DurF = hs_eta126DurA.hscall();
        }
        switch (hs_wild26DurF.tag) {
        case 1:
            var hs_rb26DurG = hs_wild26DurF.data[1];
            var hs_sat26DuNw = new $hs.Data(1);
            hs_sat26DuNw.data = [hs_rb26DurG];
            return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezuzq.hscall(hs_eta26DurE, hs_wild26DurF, hs_sat26DuNw, hs_eta226DurI);
        case 2:
            var hs_rb26DurM = hs_wild26DurF.data[1];
            var hs_sat26DuNz = new $hs.Data(1);
            hs_sat26DuNz.data = [hs_rb26DurM];
            return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezuzq.hscall(hs_eta26DurE, hs_wild26DurF, hs_sat26DuNz, hs_eta226DurI);
        }
    };
    hs_wantReadableHandlezq25ufGs.evaluate = function (hs_fun26DurS, hs_h26DurT, hs_m26DurU, hs_act26DurX) {
        var hs_sat26DuND = new $hs.Func(1);
        hs_sat26DuND.evaluate = function (hs_hzu26DurY) {
            var hs_sat26DuNB = new $hs.Func(1);
            hs_sat26DuNB.evaluate = function (hs_a26Dus1) {
                var hs_sat26DuNA = new $hs.Data(1);
                hs_sat26DuNA.data = [hs_hzu26DurY, hs_a26Dus1];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuNA);
            };
            var hs_sat26DuNC = new $hs.Thunk();
            hs_sat26DuNC.evaluateOnce = function () {
                return hs_checkReadableHandle25ufGu.hscall(hs_act26DurX, hs_hzu26DurY);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuNC, hs_sat26DuNB);
        };
        var hs_sat26DuNE = new $hs.Func(1);
        hs_sat26DuNE.evaluate = function (hs_eta1cW6l3) {
            return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezq.hscall(hs_fun26DurS, hs_h26DurT, hs_m26DurU, hs_eta1cW6l3);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DuNE, hs_sat26DuND);
    };
    this.hs_wantReadableHandlezu.evaluate = function (hs_fun26Dusc, hs_h26Dus8, hs_act26Dusg) {
        var hs_wild26Dusd = hs_h26Dus8;
        if (hs_h26Dus8.notEvaluated) {
            hs_wild26Dusd = hs_h26Dus8.hscall();
        }
        switch (hs_wild26Dusd.tag) {
        case 1:
            var hs_rb26Duse = hs_wild26Dusd.data[1];
            var hs_sat26DuNG = new $hs.Data(1);
            hs_sat26DuNG.data = [hs_rb26Duse];
            return hs_wantReadableHandlezq25ufGs.hscall(hs_fun26Dusc, hs_wild26Dusd, hs_sat26DuNG, hs_act26Dusg);
        case 2:
            var hs_rb26Dusk = hs_wild26Dusd.data[1];
            var hs_sat26DuNJ = new $hs.Data(1);
            hs_sat26DuNJ.data = [hs_rb26Dusk];
            return hs_wantReadableHandlezq25ufGs.hscall(hs_fun26Dusc, hs_wild26Dusd, hs_sat26DuNJ, hs_act26Dusg);
        }
    };
    this.hs_wantSeekableHandle.evaluate = function (hs_fun26Dust, hs_h26Dusp, hs_zuact26DusZ) {
        var hs_wild26Dusu = hs_h26Dusp;
        if (hs_h26Dusp.notEvaluated) {
            hs_wild26Dusu = hs_h26Dusp.hscall();
        }
        switch (hs_wild26Dusu.tag) {
        case 1:
            var hs_rb26Dusv = hs_wild26Dusu.data[1];
            var hs_sat26DuO6 = new $hs.Func(1);
            hs_sat26DuO6.evaluate = function (hs_hzu26Dusz) {
                var hs_sat26DuNO = new $hs.Func(1);
                hs_sat26DuNO.evaluate = function (hs_a26Dut3) {
                    var hs_sat26DuNL = new $hs.Data(1);
                    hs_sat26DuNL.data = [hs_hzu26Dusz, hs_a26Dut3];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuNL);
                };
                var hs_sat26DuO5 = new $hs.Thunk();
                hs_sat26DuO5.evaluateOnce = function () {
                    var hs_wild126DusR = hs_hzu26Dusz;
                    if (hs_hzu26Dusz.notEvaluated) {
                        hs_wild126DusR = hs_hzu26Dusz.hscall();
                    }
                    var hs_zddIODevice26DusT = hs_wild126DusR.data[0];
                    var hs_ds126DusU = hs_wild126DusR.data[3];
                    var hs_wild226DuNN = $hs.modules.GHCziIOziHandleziTypes.hs_haType.hscall(hs_wild126DusR);
                    switch (hs_wild226DuNN.tag) {
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
                        if (hs_ioezunotSeekable25ufGI.notEvaluated) {
                            return hs_ioezunotSeekable25ufGI.hscall();
                        } else {
                            return hs_ioezunotSeekable25ufGI;
                        }
                    default:
                        var hs_sat26DuO3 = new $hs.Func(1);
                        hs_sat26DuO3.evaluate = function (hs_b26DusX) {
                            var hs_wild326DuNM = hs_b26DusX;
                            if (hs_b26DusX.notEvaluated) {
                                hs_wild326DuNM = hs_b26DusX.hscall();
                            }
                            switch (hs_wild326DuNM.tag) {
                            case 1:
                                if (hs_ioezunotSeekable25ufGI.notEvaluated) {
                                    return hs_ioezunotSeekable25ufGI.hscall();
                                } else {
                                    return hs_ioezunotSeekable25ufGI;
                                }
                            case 2:
                                return hs_zuact26DusZ.hscall(hs_wild126DusR);
                            }
                        };
                        var hs_sat26DuO4 = new $hs.Thunk();
                        hs_sat26DuO4.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziDevice.hs_isSeekable.hscall(hs_zddIODevice26DusT, hs_ds126DusU);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuO4, hs_sat26DuO3);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuO5, hs_sat26DuNO);
            };
            var hs_sat26DuO7 = new $hs.Data(1);
            hs_sat26DuO7.data = [hs_rb26Dusv];
            var hs_sat26DuO8 = new $hs.Func(1);
            hs_sat26DuO8.evaluate = function (hs_eta1cW6l3) {
                return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezq.hscall(hs_fun26Dust, hs_wild26Dusu, hs_sat26DuO7, hs_eta1cW6l3);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DuO8, hs_sat26DuO6);
        case 2:
            var hs_sat26DuOc = new $hs.Thunk();
            hs_sat26DuOc.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("handle is not seekable\x00");
            };
            var hs_sat26DuOd = new $hs.Data(2);
            hs_sat26DuOd.data = [hs_wild26Dusu];
            var hs_sat26DuOe = new $hs.Data(1);
            hs_sat26DuOe.data = [hs_sat26DuOd, $hs.modules.GHCziIOziException.hs_IllegalOperation, hs_fun26Dust, hs_sat26DuOc, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing];
            return $hs.modules.GHCziIOziException.hs_ioException.hscall(hs_sat26DuOe);
        }
    };
    this.hs_withHandle.evaluate = function (hs_eta26Dutk, hs_eta126Dutg, hs_eta226Duto) {
        var hs_wild26Dutl = hs_eta126Dutg;
        if (hs_eta126Dutg.notEvaluated) {
            hs_wild26Dutl = hs_eta126Dutg.hscall();
        }
        switch (hs_wild26Dutl.tag) {
        case 1:
            var hs_rb26Dutm = hs_wild26Dutl.data[1];
            var hs_sat26DuOg = new $hs.Data(1);
            hs_sat26DuOg.data = [hs_rb26Dutm];
            return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezq.hscall(hs_eta26Dutk, hs_wild26Dutl, hs_sat26DuOg, hs_eta226Duto);
        case 2:
            var hs_rb26Duts = hs_wild26Dutl.data[1];
            var hs_sat26DuOj = new $hs.Data(1);
            hs_sat26DuOj.data = [hs_rb26Duts];
            return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezq.hscall(hs_eta26Dutk, hs_wild26Dutl, hs_sat26DuOj, hs_eta226Duto);
        }
    };
    this.hs_wantReadableHandle.evaluate = function (hs_fun26DutB, hs_h26Dutx, hs_act26DutF) {
        var hs_wild26DutC = hs_h26Dutx;
        if (hs_h26Dutx.notEvaluated) {
            hs_wild26DutC = hs_h26Dutx.hscall();
        }
        switch (hs_wild26DutC.tag) {
        case 1:
            var hs_rb26DutD = hs_wild26DutC.data[1];
            var hs_sat26DuOl = new $hs.Func(1);
            hs_sat26DuOl.evaluate = function (hs_eta1cW6l3) {
                return hs_checkReadableHandle25ufGu.hscall(hs_act26DutF, hs_eta1cW6l3);
            };
            var hs_sat26DuOm = new $hs.Data(1);
            hs_sat26DuOm.data = [hs_rb26DutD];
            return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezq.hscall(hs_fun26DutB, hs_wild26DutC, hs_sat26DuOm, hs_sat26DuOl);
        case 2:
            var hs_rb26DutK = hs_wild26DutC.data[1];
            var hs_sat26DuOp = new $hs.Func(1);
            hs_sat26DuOp.evaluate = function (hs_eta1cW6l3) {
                return hs_checkReadableHandle25ufGu.hscall(hs_act26DutF, hs_eta1cW6l3);
            };
            var hs_sat26DuOq = new $hs.Data(1);
            hs_sat26DuOq.data = [hs_rb26DutK];
            return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezq.hscall(hs_fun26DutB, hs_wild26DutC, hs_sat26DuOq, hs_sat26DuOp);
        }
    };
    this.hs_debugIO.evaluate = function (hs_s26DutO) {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
    };
    this.hs_writeCharBuffer.evaluate = function (hs_hzu26DutR, hs_cbuf26Duuc) {
        var hs_wild26Duv3 = hs_hzu26DutR;
        if (hs_hzu26DutR.notEvaluated) {
            hs_wild26Duv3 = hs_hzu26DutR.hscall();
        }
        var hs_zddBufferedIO26DuuU = hs_wild26Duv3.data[1];
        var hs_ds26DuuV = hs_wild26Duv3.data[3];
        var hs_rb26Duua = hs_wild26Duv3.data[5];
        var hs_ds226DuuJ = hs_wild26Duv3.data[6];
        var hs_ds326Duun = hs_wild26Duv3.data[10];
        var hs_a26Duub = new $hs.Data(1);
        hs_a26Duub.data = [hs_rb26Duua];
        var hs_cbuf126Duup = hs_cbuf26Duuc;
        if (hs_cbuf26Duuc.notEvaluated) {
            hs_cbuf126Duup = hs_cbuf26Duuc.hscall();
        }
        var hs_sat26DuP9 = new $hs.Func(1);
        hs_sat26DuP9.evaluate = function (hs_bbuf26Duuq) {
            var hs_sat26DuP7 = new $hs.Thunk();
            hs_sat26DuP7.evaluateOnce = function () {
                var hs_sat26DuP5 = new $hs.Func(1);
                hs_sat26DuP5.evaluate = function (hs_ds926Duuv) {
                    var hs_wild126DuOC = hs_ds926Duuv;
                    if (hs_ds926Duuv.notEvaluated) {
                        hs_wild126DuOC = hs_ds926Duuv.hscall();
                    }
                    var hs_cbufzq26DuuC = hs_wild126DuOC.data[0];
                    var hs_bbufzq26DuuA = hs_wild126DuOC.data[1];
                    var hs_sat26DuP2 = new $hs.Thunk();
                    hs_sat26DuP2.evaluateOnce = function () {
                        var hs_sat26DuOM = new $hs.Thunk();
                        hs_sat26DuOM.evaluateOnce = function () {
                            var hs_sat26DuOK = new $hs.Thunk();
                            hs_sat26DuOK.evaluateOnce = function () {
                                return $hs.modules.GHCziIOziBuffer.hs_isEmptyBuffer.hscall(hs_cbufzq26DuuC);
                            };
                            var hs_wild226DuOJ = $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DuOK);
                            switch (hs_wild226DuOJ.tag) {
                            case 1:
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                            case 2:
                                return $hs.modules.GHCziIOziHandleziInternals.hs_writeCharBuffer.hscall(hs_wild26Duv3, hs_cbufzq26DuuC);
                            }
                        };
                        var hs_sat26DuP1 = new $hs.Thunk();
                        hs_sat26DuP1.evaluateOnce = function () {
                            var hs_sat26DuOW = new $hs.Thunk();
                            hs_sat26DuOW.evaluateOnce = function () {
                                var hs_sat26DuOP = new $hs.Thunk();
                                hs_sat26DuOP.evaluateOnce = function () {
                                    var hs_wild226DuOL = hs_ds226DuuJ;
                                    if (hs_ds226DuuJ.notEvaluated) {
                                        hs_wild226DuOL = hs_ds226DuuJ.hscall();
                                    }
                                    switch (hs_wild226DuOL.tag) {
                                    case 1:
                                        var $res = new $hs.Data(2);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 3:
                                        var hs_ds1026DuuM = hs_wild226DuOL.data[0];
                                        var hs_wild326DuON = hs_ds1026DuuM;
                                        if (hs_ds1026DuuM.notEvaluated) {
                                            hs_wild326DuON = hs_ds1026DuuM.hscall();
                                        }
                                        switch (hs_wild326DuON.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_s26DuuQ = hs_wild326DuON.data[0];
                                            var hs_sat26DuOO = new $hs.Thunk();
                                            hs_sat26DuOO.evaluateOnce = function () {
                                                return $hs.modules.GHCziIOziBuffer.hs_bufferElems.hscall(hs_bbufzq26DuuA);
                                            };
                                            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_sat26DuOO, hs_s26DuuQ);
                                        }
                                    }
                                };
                                var hs_sat26DuOV = new $hs.Thunk();
                                hs_sat26DuOV.evaluateOnce = function () {
                                    var hs_sat26DuOS = new $hs.Thunk();
                                    hs_sat26DuOS.evaluateOnce = function () {
                                        var hs_sat26DuOQ = new $hs.Thunk();
                                        hs_sat26DuOQ.evaluateOnce = function () {
                                            return $hs.modules.GHCziIOziBuffer.hs_bufL.hscall(hs_cbuf126Duup);
                                        };
                                        var hs_sat26DuOR = new $hs.Thunk();
                                        hs_sat26DuOR.evaluateOnce = function () {
                                            return $hs.modules.GHCziIOziBuffer.hs_bufL.hscall(hs_cbufzq26DuuC);
                                        };
                                        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_sat26DuOR, hs_sat26DuOQ);
                                    };
                                    var hs_sat26DuOU = new $hs.Thunk();
                                    hs_sat26DuOU.evaluateOnce = function () {
                                        var hs_sat26DuOT = new $hs.Thunk();
                                        hs_sat26DuOT.evaluateOnce = function () {
                                            return $hs.modules.GHCziIOziBuffer.hs_isEmptyBuffer.hscall(hs_cbufzq26DuuC);
                                        };
                                        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DuOT);
                                    };
                                    return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DuOU, hs_sat26DuOS);
                                };
                                return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DuOV, hs_sat26DuOP);
                            };
                            var hs_sat26DuOY = new $hs.Thunk();
                            hs_sat26DuOY.evaluateOnce = function () {
                                return $hs.modules.GHCziIOziBuffer.hs_isFullBuffer.hscall(hs_bbufzq26DuuA);
                            };
                            var hs_wild226DuOX = $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DuOY, hs_sat26DuOW);
                            switch (hs_wild226DuOX.tag) {
                            case 1:
                                return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a26Duub, hs_bbufzq26DuuA);
                            case 2:
                                var hs_sat26DuOZ = new $hs.Func(1);
                                hs_sat26DuOZ.evaluate = function (hs_bbufzqzq26DuuY) {
                                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a26Duub, hs_bbufzqzq26DuuY);
                                };
                                var hs_sat26DuP0 = new $hs.Thunk();
                                hs_sat26DuP0.evaluateOnce = function () {
                                    return $hs.modules.GHCziIOziBufferedIO.hs_flushWriteBuffer.hscall(hs_zddBufferedIO26DuuU, hs_ds26DuuV, hs_bbufzq26DuuA);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuP0, hs_sat26DuOZ);
                            }
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuP1, hs_sat26DuOM);
                    };
                    var hs_sat26DuP3 = new $hs.Thunk();
                    hs_sat26DuP3.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuP3, hs_sat26DuP2);
                };
                var hs_sat26DuP6 = new $hs.Thunk();
                hs_sat26DuP6.evaluateOnce = function () {
                    var hs_wild126DuP4 = hs_ds326Duun;
                    if (hs_ds326Duun.notEvaluated) {
                        hs_wild126DuP4 = hs_ds326Duun.hscall();
                    }
                    switch (hs_wild126DuP4.tag) {
                    case 1:
                        return $hs.modules.GHCziIOziEncoding.hs_latin1zuencode.hscall(hs_cbuf126Duup, hs_bbuf26Duuq);
                    case 2:
                        var hs_encoder26Duus = hs_wild126DuP4.data[0];
                        return $hs.modules.GHCziIOziEncodingziTypes.hs_encode.hscall(hs_encoder26Duus, hs_cbuf126Duup, hs_bbuf26Duuq);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuP6, hs_sat26DuP5);
            };
            var hs_sat26DuP8 = new $hs.Thunk();
            hs_sat26DuP8.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuP8, hs_sat26DuP7);
        };
        var hs_sat26DuPa = new $hs.Thunk();
        hs_sat26DuPa.evaluateOnce = function () {
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a26Duub);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuPa, hs_sat26DuP9);
    };
    this.hs_flushCharReadBuffer.evaluate = function (hs_ds26Duva) {
        var hs_wild26DuPc = hs_ds26Duva;
        if (hs_ds26Duva.notEvaluated) {
            hs_wild26DuPc = hs_ds26Duva.hscall();
        }
        var hs_rb26Duvt = hs_wild26DuPc.data[5];
        var hs_rb126Duvw = hs_wild26DuPc.data[7];
        var hs_rb226Duvz = hs_wild26DuPc.data[8];
        var hs_ds526Duw6 = hs_wild26DuPc.data[11];
        var hs_a26Duvu = new $hs.Data(1);
        hs_a26Duvu.data = [hs_rb26Duvt];
        var hs_a126Duvx = new $hs.Data(1);
        hs_a126Duvx.data = [hs_rb126Duvw];
        var hs_a226DuvA = new $hs.Data(1);
        hs_a226DuvA.data = [hs_rb226Duvz];
        var hs_sat26DuQ2 = new $hs.Func(1);
        hs_sat26DuQ2.evaluate = function (hs_cbuf26DuvD) {
            var hs_sat26DuPo = new $hs.Thunk();
            hs_sat26DuPo.evaluateOnce = function () {
                return $hs.modules.GHCziIOziBuffer.hs_isEmptyBuffer.hscall(hs_cbuf26DuvD);
            };
            var hs_sat26DuPr = new $hs.Thunk();
            hs_sat26DuPr.evaluateOnce = function () {
                return $hs.modules.GHCziIOziBuffer.hs_isWriteBuffer.hscall(hs_cbuf26DuvD);
            };
            var hs_wild126DuPq = $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DuPr, hs_sat26DuPo);
            switch (hs_wild126DuPq.tag) {
            case 1:
                var hs_sat26DuQ0 = new $hs.Func(1);
                hs_sat26DuQ0.evaluate = function (hs_ds1026DuvJ) {
                    var hs_wild226DuPp = hs_ds1026DuvJ;
                    if (hs_ds1026DuvJ.notEvaluated) {
                        hs_wild226DuPp = hs_ds1026DuvJ.hscall();
                    }
                    var hs_codeczustate26Duwv = hs_wild226DuPp.data[0];
                    var hs_bbuf026Duw8 = hs_wild226DuPp.data[1];
                    var hs_sat26DuPY = new $hs.Func(1);
                    hs_sat26DuPY.evaluate = function (hs_cbuf026DuvP) {
                        var hs_sat26DuPT = new $hs.Thunk();
                        hs_sat26DuPT.evaluateOnce = function () {
                            var hs_sat26DuPs = new $hs.Data(1);
                            hs_sat26DuPs.data = [0];
                            var hs_sat26DuPv = new $hs.Thunk();
                            hs_sat26DuPv.evaluateOnce = function () {
                                return $hs.modules.GHCziIOziBuffer.hs_bufL.hscall(hs_cbuf026DuvP);
                            };
                            var hs_wild326DuPu = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_sat26DuPv, hs_sat26DuPs);
                            switch (hs_wild326DuPu.tag) {
                            case 1:
                                var hs_wild426DuPt = hs_ds526Duw6;
                                if (hs_ds526Duw6.notEvaluated) {
                                    hs_wild426DuPt = hs_ds526Duw6.hscall();
                                }
                                switch (hs_wild426DuPt.tag) {
                                case 1:
                                    var hs_sat26DuPA = new $hs.Thunk();
                                    hs_sat26DuPA.evaluateOnce = function () {
                                        var hs_wild526Duwg = hs_bbuf026Duw8;
                                        if (hs_bbuf026Duw8.notEvaluated) {
                                            hs_wild526Duwg = hs_bbuf026Duw8.hscall();
                                        }
                                        var hs_rb426Duwl = hs_wild526Duwg.data[0];
                                        var hs_rb526Duwm = hs_wild526Duwg.data[1];
                                        var hs_ds1126Duwn = hs_wild526Duwg.data[2];
                                        var hs_rb626Duwo = hs_wild526Duwg.data[3];
                                        var hs_rb826Duwq = hs_wild526Duwg.data[5];
                                        var hs_sat26DuPx = new $hs.Thunk();
                                        hs_sat26DuPx.evaluateOnce = function () {
                                            return $hs.modules.GHCziIOziBuffer.hs_bufL.hscall(hs_cbuf026DuvP);
                                        };
                                        var hs_sat26DuPz = new $hs.Thunk();
                                        hs_sat26DuPz.evaluateOnce = function () {
                                            return $hs.modules.GHCziIOziBuffer.hs_bufL.hscall(hs_wild526Duwg);
                                        };
                                        var hs_tpl26DuPy = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DuPz, hs_sat26DuPx);
                                        var hs_tpl126Duwp = hs_tpl26DuPy.data[0];
                                        var $res = new $hs.Data(1);
                                        $res.data = [hs_rb426Duwl, hs_rb526Duwm, hs_ds1126Duwn, hs_rb626Duwo, hs_tpl126Duwp, hs_rb826Duwq];
                                        return $res;
                                    };
                                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a26Duvu, hs_sat26DuPA);
                                case 2:
                                    var hs_decoder26Duwu = hs_wild426DuPt.data[0];
                                    var hs_sat26DuPO = new $hs.Thunk();
                                    hs_sat26DuPO.evaluateOnce = function () {
                                        var hs_sat26DuPM = new $hs.Thunk();
                                        hs_sat26DuPM.evaluateOnce = function () {
                                            var hs_sat26DuPG = new $hs.Func(1);
                                            hs_sat26DuPG.evaluate = function (hs_ds1126DuwO) {
                                                var hs_wild526DuPB = hs_ds1126DuwO;
                                                if (hs_ds1126DuwO.notEvaluated) {
                                                    hs_wild526DuPB = hs_ds1126DuwO.hscall();
                                                }
                                                var hs_bbuf126DuwT = hs_wild526DuPB.data[0];
                                                var hs_sat26DuPD = new $hs.Thunk();
                                                hs_sat26DuPD.evaluateOnce = function () {
                                                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a26Duvu, hs_bbuf126DuwT);
                                                };
                                                var hs_sat26DuPE = new $hs.Thunk();
                                                hs_sat26DuPE.evaluateOnce = function () {
                                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                                                };
                                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuPE, hs_sat26DuPD);
                                            };
                                            var hs_sat26DuPL = new $hs.Thunk();
                                            hs_sat26DuPL.evaluateOnce = function () {
                                                var hs_sat26DuPK = new $hs.Thunk();
                                                hs_sat26DuPK.evaluateOnce = function () {
                                                    var hs_wild526DuwE = hs_cbuf026DuvP;
                                                    if (hs_cbuf026DuvP.notEvaluated) {
                                                        hs_wild526DuwE = hs_cbuf026DuvP.hscall();
                                                    }
                                                    var hs_rb426DuwH = hs_wild526DuwE.data[0];
                                                    var hs_rb526DuwI = hs_wild526DuwE.data[1];
                                                    var hs_ds1126DuwJ = hs_wild526DuwE.data[2];
                                                    var hs_tpl26DuPF = $hs.modules.GHCziIOziBuffer.hs_bufL.hscall(hs_wild526DuwE);
                                                    var hs_tpl126DuwK = hs_tpl26DuPF.data[0];
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [hs_rb426DuwH, hs_rb526DuwI, hs_ds1126DuwJ, hs_tpl126DuwK, 0, 0];
                                                    return $res;
                                                };
                                                return $hs.modules.GHCziIOziEncodingziTypes.hs_encode.hscall(hs_decoder26Duwu, hs_bbuf026Duw8, hs_sat26DuPK);
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuPL, hs_sat26DuPG);
                                        };
                                        var hs_sat26DuPN = new $hs.Thunk();
                                        hs_sat26DuPN.evaluateOnce = function () {
                                            return $hs.modules.GHCziIOziEncodingziTypes.hs_setState.hscall(hs_decoder26Duwu, hs_codeczustate26Duwv);
                                        };
                                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuPN, hs_sat26DuPM);
                                    };
                                    var hs_sat26DuPP = new $hs.Thunk();
                                    hs_sat26DuPP.evaluateOnce = function () {
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuPP, hs_sat26DuPO);
                                }
                            case 2:
                                var hs_sat26DuPQ = new $hs.Thunk();
                                hs_sat26DuPQ.evaluateOnce = function () {
                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                                };
                                var hs_sat26DuPR = new $hs.Thunk();
                                hs_sat26DuPR.evaluateOnce = function () {
                                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a26Duvu, hs_bbuf026Duw8);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuPR, hs_sat26DuPQ);
                            }
                        };
                        var hs_sat26DuPX = new $hs.Thunk();
                        hs_sat26DuPX.evaluateOnce = function () {
                            var hs_sat26DuPW = new $hs.Thunk();
                            hs_sat26DuPW.evaluateOnce = function () {
                                var hs_wild326DuPS = hs_cbuf026DuvP;
                                if (hs_cbuf026DuvP.notEvaluated) {
                                    hs_wild326DuPS = hs_cbuf026DuvP.hscall();
                                }
                                var hs_rb426DuvX = hs_wild326DuPS.data[0];
                                var hs_rb526DuvY = hs_wild326DuPS.data[1];
                                var hs_ds1126DuvZ = hs_wild326DuPS.data[2];
                                var hs_rb626Duw0 = hs_wild326DuPS.data[3];
                                var $res = new $hs.Data(1);
                                $res.data = [hs_rb426DuvX, hs_rb526DuvY, hs_ds1126DuvZ, hs_rb626Duw0, 0, 0];
                                return $res;
                            };
                            return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a226DuvA, hs_sat26DuPW);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuPX, hs_sat26DuPT);
                    };
                    var hs_sat26DuPZ = new $hs.Thunk();
                    hs_sat26DuPZ.evaluateOnce = function () {
                        return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a226DuvA);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuPZ, hs_sat26DuPY);
                };
                var hs_sat26DuQ1 = new $hs.Thunk();
                hs_sat26DuQ1.evaluateOnce = function () {
                    return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a126Duvx);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuQ1, hs_sat26DuQ0);
            case 2:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            }
        };
        var hs_sat26DuQ3 = new $hs.Thunk();
        hs_sat26DuQ3.evaluateOnce = function () {
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a226DuvA);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuQ3, hs_sat26DuQ2);
    };
    this.hs_flushCharBuffer.evaluate = function (hs_hzu26Dux5) {
        var hs_wild26Duxt = hs_hzu26Dux5;
        if (hs_hzu26Dux5.notEvaluated) {
            hs_wild26Duxt = hs_hzu26Dux5.hscall();
        }
        var hs_rb226Duxn = hs_wild26Duxt.data[8];
        var hs_sat26DuQp = new $hs.Func(1);
        hs_sat26DuQp.evaluate = function (hs_cbuf26Duxr) {
            var hs_wild126DuQ4 = $hs.modules.GHCziIOziBuffer.hs_bufState.hscall(hs_cbuf26Duxr);
            switch (hs_wild126DuQ4.tag) {
            case 1:
                return $hs.modules.GHCziIOziHandleziInternals.hs_flushCharReadBuffer.hscall(hs_wild26Duxt);
            case 2:
                var hs_sat26DuQl = new $hs.Thunk();
                hs_sat26DuQl.evaluateOnce = function () {
                    var hs_sat26DuQk = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("internal IO library error: Char buffer non-empty\x00");
                    return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DuQk);
                };
                var hs_sat26DuQo = new $hs.Thunk();
                hs_sat26DuQo.evaluateOnce = function () {
                    var hs_sat26DuQn = new $hs.Thunk();
                    hs_sat26DuQn.evaluateOnce = function () {
                        var hs_sat26DuQm = new $hs.Thunk();
                        hs_sat26DuQm.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziBuffer.hs_isEmptyBuffer.hscall(hs_cbuf26Duxr);
                        };
                        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DuQm);
                    };
                    return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuQn);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DuQo, hs_sat26DuQl);
            }
        };
        var hs_sat26DuQr = new $hs.Thunk();
        hs_sat26DuQr.evaluateOnce = function () {
            var hs_sat26DuQq = new $hs.Data(1);
            hs_sat26DuQq.data = [hs_rb226Duxn];
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_sat26DuQq);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuQr, hs_sat26DuQp);
    };
    this.hs_flushByteReadBuffer.evaluate = function (hs_hzu26DuxB) {
        var hs_wild26DuQs = hs_hzu26DuxB;
        if (hs_hzu26DuxB.notEvaluated) {
            hs_wild26DuQs = hs_hzu26DuxB.hscall();
        }
        var hs_zddIODevice26Duy0 = hs_wild26DuQs.data[0];
        var hs_ds26Duy1 = hs_wild26DuQs.data[3];
        var hs_rb26DuxU = hs_wild26DuQs.data[5];
        var hs_a26DuxV = new $hs.Data(1);
        hs_a26DuxV.data = [hs_rb26DuxU];
        var hs_sat26DuR0 = new $hs.Func(1);
        hs_sat26DuR0.evaluate = function (hs_bbuf26DuxY) {
            var hs_wild126DuQH = $hs.modules.GHCziIOziBuffer.hs_isEmptyBuffer.hscall(hs_bbuf26DuxY);
            switch (hs_wild126DuQH.tag) {
            case 1:
                var hs_sat26DuQY = new $hs.Func(1);
                hs_sat26DuQY.evaluate = function (hs_seekable26Duy4) {
                    var hs_sat26DuQU = new $hs.Thunk();
                    hs_sat26DuQU.evaluateOnce = function () {
                        var hs_sat26DuQS = new $hs.Thunk();
                        hs_sat26DuQS.evaluateOnce = function () {
                            var hs_sat26DuQL = new $hs.Thunk();
                            hs_sat26DuQL.evaluateOnce = function () {
                                var hs_sat26DuQK = new $hs.Thunk();
                                hs_sat26DuQK.evaluateOnce = function () {
                                    var hs_wild226DuQG = hs_bbuf26DuxY;
                                    if (hs_bbuf26DuxY.notEvaluated) {
                                        hs_wild226DuQG = hs_bbuf26DuxY.hscall();
                                    }
                                    var hs_rb426Duym = hs_wild226DuQG.data[0];
                                    var hs_rb526Duyn = hs_wild226DuQG.data[1];
                                    var hs_ds926Duyo = hs_wild226DuQG.data[2];
                                    var hs_rb626Duyp = hs_wild226DuQG.data[3];
                                    var $res = new $hs.Data(1);
                                    $res.data = [hs_rb426Duym, hs_rb526Duyn, hs_ds926Duyo, hs_rb626Duyp, 0, 0];
                                    return $res;
                                };
                                return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a26DuxV, hs_sat26DuQK);
                            };
                            var hs_sat26DuQR = new $hs.Thunk();
                            hs_sat26DuQR.evaluateOnce = function () {
                                var hs_sat26DuQQ = new $hs.Thunk();
                                hs_sat26DuQQ.evaluateOnce = function () {
                                    var hs_sat26DuQP = new $hs.Thunk();
                                    hs_sat26DuQP.evaluateOnce = function () {
                                        var hs_sat26DuQO = new $hs.Thunk();
                                        hs_sat26DuQO.evaluateOnce = function () {
                                            var hs_sat26DuQM = new $hs.Thunk();
                                            hs_sat26DuQM.evaluateOnce = function () {
                                                return $hs.modules.GHCziIOziBuffer.hs_bufL.hscall(hs_bbuf26DuxY);
                                            };
                                            var hs_sat26DuQN = new $hs.Thunk();
                                            hs_sat26DuQN.evaluateOnce = function () {
                                                return $hs.modules.GHCziIOziBuffer.hs_bufR.hscall(hs_bbuf26DuxY);
                                            };
                                            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DuQN, hs_sat26DuQM);
                                        };
                                        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DuQO);
                                    };
                                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26DuQP);
                                };
                                return $hs.modules.GHCziIOziDevice.hs_seek.hscall(hs_zddIODevice26Duy0, hs_ds26Duy1, $hs.modules.GHCziIOziDevice.hs_RelativeSeek, hs_sat26DuQQ);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuQR, hs_sat26DuQL);
                        };
                        var hs_sat26DuQT = new $hs.Thunk();
                        hs_sat26DuQT.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuQT, hs_sat26DuQS);
                    };
                    var hs_sat26DuQX = new $hs.Thunk();
                    hs_sat26DuQX.evaluateOnce = function () {
                        var hs_sat26DuQW = new $hs.Thunk();
                        hs_sat26DuQW.evaluateOnce = function () {
                            var hs_sat26DuQV = new $hs.Thunk();
                            hs_sat26DuQV.evaluateOnce = function () {
                                return $hs.modules.GHCziClasses.hs_not.hscall(hs_seekable26Duy4);
                            };
                            return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuQV);
                        };
                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DuQW, hs_ioezucannotFlushNotSeekable25ufGK);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuQX, hs_sat26DuQU);
                };
                var hs_sat26DuQZ = new $hs.Thunk();
                hs_sat26DuQZ.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziDevice.hs_isSeekable.hscall(hs_zddIODevice26Duy0, hs_ds26Duy1);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuQZ, hs_sat26DuQY);
            case 2:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            }
        };
        var hs_sat26DuR1 = new $hs.Thunk();
        hs_sat26DuR1.evaluateOnce = function () {
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a26DuxV);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuR1, hs_sat26DuR0);
    };
    hs_wantWritableHandlezq25ufGk.evaluate = function (hs_fun26DuyA, hs_h26DuyB, hs_m26DuyC, hs_act26Duz6) {
        var hs_sat26DuRE = new $hs.Func(1);
        hs_sat26DuRE.evaluate = function (hs_hzu26DuyF) {
            var hs_sat26DuR4 = new $hs.Func(1);
            hs_sat26DuR4.evaluate = function (hs_a26DuzQ) {
                var hs_sat26DuR2 = new $hs.Data(1);
                hs_sat26DuR2.data = [hs_hzu26DuyF, hs_a26DuzQ];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuR2);
            };
            var hs_sat26DuRD = new $hs.Thunk();
            hs_sat26DuRD.evaluateOnce = function () {
                var hs_wild26Duz5 = hs_hzu26DuyF;
                if (hs_hzu26DuyF.notEvaluated) {
                    hs_wild26Duz5 = hs_hzu26DuyF.hscall();
                }
                var hs_zddBufferedIO26Duzy = hs_wild26Duz5.data[1];
                var hs_ds26Duzz = hs_wild26Duz5.data[3];
                var hs_ds126Duz3 = hs_wild26Duz5.data[4];
                var hs_rb26DuyY = hs_wild26Duz5.data[5];
                var hs_rb226Duz1 = hs_wild26Duz5.data[8];
                var hs_a26DuyZ = new $hs.Data(1);
                hs_a26DuyZ.data = [hs_rb26DuyY];
                var hs_a126Duz2 = new $hs.Data(1);
                hs_a126Duz2.data = [hs_rb226Duz1];
                var hs_wild126DuRf = hs_ds126Duz3;
                if (hs_ds126Duz3.notEvaluated) {
                    hs_wild126DuRf = hs_ds126Duz3.hscall();
                }
                switch (hs_wild126DuRf.tag) {
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
                    var hs_sat26DuRB = new $hs.Func(1);
                    hs_sat26DuRB.evaluate = function (hs_buf26Duz9) {
                        var hs_sat26DuRg = new $hs.Thunk();
                        hs_sat26DuRg.evaluateOnce = function () {
                            return hs_act26Duz6.hscall(hs_wild26Duz5);
                        };
                        var hs_sat26DuRA = new $hs.Thunk();
                        hs_sat26DuRA.evaluateOnce = function () {
                            var hs_sat26DuRw = new $hs.Thunk();
                            hs_sat26DuRw.evaluateOnce = function () {
                                var hs_sat26DuRu = new $hs.Thunk();
                                hs_sat26DuRu.evaluateOnce = function () {
                                    var hs_sat26DuRs = new $hs.Thunk();
                                    hs_sat26DuRs.evaluateOnce = function () {
                                        var hs_sat26DuRq = new $hs.Func(1);
                                        hs_sat26DuRq.evaluate = function (hs_buf126Duzh) {
                                            var hs_sat26DuRm = new $hs.Thunk();
                                            hs_sat26DuRm.evaluateOnce = function () {
                                                var hs_sat26DuRj = new $hs.Func(1);
                                                hs_sat26DuRj.evaluate = function (hs_buf226DuzA) {
                                                    var hs_sat26DuRh = new $hs.Func(1);
                                                    hs_sat26DuRh.evaluate = function (hs_bufzq26DuzD) {
                                                        return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a26DuyZ, hs_bufzq26DuzD);
                                                    };
                                                    var hs_sat26DuRi = new $hs.Thunk();
                                                    hs_sat26DuRi.evaluateOnce = function () {
                                                        return $hs.modules.GHCziIOziBufferedIO.hs_emptyWriteBuffer.hscall(hs_zddBufferedIO26Duzy, hs_ds26Duzz, hs_buf226DuzA);
                                                    };
                                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuRi, hs_sat26DuRh);
                                                };
                                                var hs_sat26DuRk = new $hs.Thunk();
                                                hs_sat26DuRk.evaluateOnce = function () {
                                                    return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a26DuyZ);
                                                };
                                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuRk, hs_sat26DuRj);
                                            };
                                            var hs_sat26DuRp = new $hs.Thunk();
                                            hs_sat26DuRp.evaluateOnce = function () {
                                                var hs_sat26DuRo = new $hs.Thunk();
                                                hs_sat26DuRo.evaluateOnce = function () {
                                                    var hs_wild226DuRl = hs_buf126Duzh;
                                                    if (hs_buf126Duzh.notEvaluated) {
                                                        hs_wild226DuRl = hs_buf126Duzh.hscall();
                                                    }
                                                    var hs_rb426Duzp = hs_wild226DuRl.data[0];
                                                    var hs_rb526Duzq = hs_wild226DuRl.data[1];
                                                    var hs_rb626Duzr = hs_wild226DuRl.data[3];
                                                    var hs_rb726Duzs = hs_wild226DuRl.data[4];
                                                    var hs_rb826Duzt = hs_wild226DuRl.data[5];
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [hs_rb426Duzp, hs_rb526Duzq, $hs.modules.GHCziIOziBuffer.hs_WriteBuffer, hs_rb626Duzr, hs_rb726Duzs, hs_rb826Duzt];
                                                    return $res;
                                                };
                                                return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126Duz2, hs_sat26DuRo);
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuRp, hs_sat26DuRm);
                                        };
                                        var hs_sat26DuRr = new $hs.Thunk();
                                        hs_sat26DuRr.evaluateOnce = function () {
                                            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a126Duz2);
                                        };
                                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuRr, hs_sat26DuRq);
                                    };
                                    var hs_sat26DuRt = new $hs.Thunk();
                                    hs_sat26DuRt.evaluateOnce = function () {
                                        return $hs.modules.GHCziIOziHandleziInternals.hs_flushByteReadBuffer.hscall(hs_wild26Duz5);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuRt, hs_sat26DuRs);
                                };
                                var hs_sat26DuRv = new $hs.Thunk();
                                hs_sat26DuRv.evaluateOnce = function () {
                                    return $hs.modules.GHCziIOziHandleziInternals.hs_flushCharReadBuffer.hscall(hs_wild26Duz5);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuRv, hs_sat26DuRu);
                            };
                            var hs_sat26DuRz = new $hs.Thunk();
                            hs_sat26DuRz.evaluateOnce = function () {
                                var hs_sat26DuRy = new $hs.Thunk();
                                hs_sat26DuRy.evaluateOnce = function () {
                                    var hs_sat26DuRx = new $hs.Thunk();
                                    hs_sat26DuRx.evaluateOnce = function () {
                                        return $hs.modules.GHCziIOziBuffer.hs_isWriteBuffer.hscall(hs_buf26Duz9);
                                    };
                                    return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DuRx);
                                };
                                return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuRy);
                            };
                            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DuRz, hs_sat26DuRw);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuRA, hs_sat26DuRg);
                    };
                    var hs_sat26DuRC = new $hs.Thunk();
                    hs_sat26DuRC.evaluateOnce = function () {
                        return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a126Duz2);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuRC, hs_sat26DuRB);
                default:
                    return hs_act26Duz6.hscall(hs_wild26Duz5);
                }
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuRD, hs_sat26DuR4);
        };
        var hs_sat26DuRF = new $hs.Func(1);
        hs_sat26DuRF.evaluate = function (hs_eta1cW6l3) {
            return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezq.hscall(hs_fun26DuyA, hs_h26DuyB, hs_m26DuyC, hs_eta1cW6l3);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DuRF, hs_sat26DuRE);
    };
    this.hs_wantWritableHandle.evaluate = function (hs_fun26DuA1, hs_h26DuzX, hs_act26DuA5) {
        var hs_wild26DuA2 = hs_h26DuzX;
        if (hs_h26DuzX.notEvaluated) {
            hs_wild26DuA2 = hs_h26DuzX.hscall();
        }
        switch (hs_wild26DuA2.tag) {
        case 1:
            var hs_rb26DuA3 = hs_wild26DuA2.data[1];
            var hs_sat26DuRH = new $hs.Data(1);
            hs_sat26DuRH.data = [hs_rb26DuA3];
            return hs_wantWritableHandlezq25ufGk.hscall(hs_fun26DuA1, hs_wild26DuA2, hs_sat26DuRH, hs_act26DuA5);
        case 2:
            var hs_rb126DuA9 = hs_wild26DuA2.data[2];
            var hs_sat26DuRK = new $hs.Data(1);
            hs_sat26DuRK.data = [hs_rb126DuA9];
            return hs_wantWritableHandlezq25ufGk.hscall(hs_fun26DuA1, hs_wild26DuA2, hs_sat26DuRK, hs_act26DuA5);
        }
    };
    this.hs_flushBuffer.evaluate = function (hs_hzu26DuAc) {
        var hs_wild26DuAA = hs_hzu26DuAc;
        if (hs_hzu26DuAc.notEvaluated) {
            hs_wild26DuAA = hs_hzu26DuAc.hscall();
        }
        var hs_rb226DuAu = hs_wild26DuAA.data[8];
        var hs_sat26DuS3 = new $hs.Func(1);
        hs_sat26DuS3.evaluate = function (hs_buf26DuAy) {
            var hs_wild126DuRL = $hs.modules.GHCziIOziBuffer.hs_bufState.hscall(hs_buf26DuAy);
            switch (hs_wild126DuRL.tag) {
            case 1:
                var hs_sat26DuS1 = new $hs.Thunk();
                hs_sat26DuS1.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziHandleziInternals.hs_flushByteReadBuffer.hscall(hs_wild26DuAA);
                };
                var hs_sat26DuS2 = new $hs.Thunk();
                hs_sat26DuS2.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziHandleziInternals.hs_flushCharReadBuffer.hscall(hs_wild26DuAA);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuS2, hs_sat26DuS1);
            case 2:
                return $hs.modules.GHCziIOziHandleziInternals.hs_flushByteWriteBuffer.hscall(hs_wild26DuAA);
            }
        };
        var hs_sat26DuS5 = new $hs.Thunk();
        hs_sat26DuS5.evaluateOnce = function () {
            var hs_sat26DuS4 = new $hs.Data(1);
            hs_sat26DuS4.data = [hs_rb226DuAu];
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_sat26DuS4);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuS5, hs_sat26DuS3);
    };
    hs_readTextDevicezq25ufHI.evaluate = function (hs_hzu26DuAH, hs_bbuf026DuB5, hs_cbuf26DuBw) {
        var hs_wild26DuBU = hs_hzu26DuAH;
        if (hs_hzu26DuAH.notEvaluated) {
            hs_wild26DuBU = hs_hzu26DuAH.hscall();
        }
        var hs_zddBufferedIO26DuB8 = hs_wild26DuBU.data[1];
        var hs_ds26DuB9 = hs_wild26DuBU.data[3];
        var hs_rb26DuB0 = hs_wild26DuBU.data[5];
        var hs_rb126DuB3 = hs_wild26DuBU.data[7];
        var hs_ds426DuBp = hs_wild26DuBU.data[11];
        var hs_a26DuB1 = new $hs.Data(1);
        hs_a26DuB1.data = [hs_rb26DuB0];
        var hs_a126DuB4 = new $hs.Data(1);
        hs_a126DuB4.data = [hs_rb126DuB3];
        var hs_sat26DuSL = new $hs.Func(1);
        hs_sat26DuSL.evaluate = function (hs_bbuf126DuBa) {
            var hs_sat26DuSF = new $hs.Func(1);
            hs_sat26DuSF.evaluate = function (hs_bbuf226DuBt) {
                var hs_sat26DuSC = new $hs.Thunk();
                hs_sat26DuSC.evaluateOnce = function () {
                    var hs_sat26DuSq = new $hs.Func(1);
                    hs_sat26DuSq.evaluate = function (hs_ds926DuBJ) {
                        var hs_wild126DuSh = hs_ds926DuBJ;
                        if (hs_ds926DuBJ.notEvaluated) {
                            hs_wild126DuSh = hs_ds926DuBJ.hscall();
                        }
                        var hs_bbuf326DuBO = hs_wild126DuSh.data[0];
                        var hs_cbufzq26DuBR = hs_wild126DuSh.data[1];
                        var hs_sat26DuSn = new $hs.Thunk();
                        hs_sat26DuSn.evaluateOnce = function () {
                            var hs_sat26DuSl = new $hs.Thunk();
                            hs_sat26DuSl.evaluateOnce = function () {
                                var hs_sat26DuSi = new $hs.Thunk();
                                hs_sat26DuSi.evaluateOnce = function () {
                                    return $hs.modules.GHCziIOziBuffer.hs_bufR.hscall(hs_cbufzq26DuBR);
                                };
                                var hs_sat26DuSk = new $hs.Thunk();
                                hs_sat26DuSk.evaluateOnce = function () {
                                    return $hs.modules.GHCziIOziBuffer.hs_bufR.hscall(hs_cbuf26DuBw);
                                };
                                var hs_wild226DuSj = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_sat26DuSk, hs_sat26DuSi);
                                switch (hs_wild226DuSj.tag) {
                                case 1:
                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_cbufzq26DuBR);
                                case 2:
                                    return hs_readTextDevicezq25ufHI.hscall(hs_wild26DuBU, hs_bbuf326DuBO, hs_cbufzq26DuBR);
                                }
                            };
                            var hs_sat26DuSm = new $hs.Thunk();
                            hs_sat26DuSm.evaluateOnce = function () {
                                return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a26DuB1, hs_bbuf326DuBO);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuSm, hs_sat26DuSl);
                        };
                        var hs_sat26DuSo = new $hs.Thunk();
                        hs_sat26DuSo.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuSo, hs_sat26DuSn);
                    };
                    var hs_sat26DuSB = new $hs.Thunk();
                    hs_sat26DuSB.evaluateOnce = function () {
                        var hs_wild126DuSp = hs_ds426DuBp;
                        if (hs_ds426DuBp.notEvaluated) {
                            hs_wild126DuSp = hs_ds426DuBp.hscall();
                        }
                        switch (hs_wild126DuSp.tag) {
                        case 1:
                            var hs_sat26DuSs = new $hs.Thunk();
                            hs_sat26DuSs.evaluateOnce = function () {
                                return $hs.modules.GHCziIOziEncoding.hs_latin1zudecode.hscall(hs_bbuf226DuBt, hs_cbuf26DuBw);
                            };
                            var hs_sat26DuSv = new $hs.Thunk();
                            hs_sat26DuSv.evaluateOnce = function () {
                                var hs_sat26DuSt = new $hs.Thunk();
                                hs_sat26DuSt.evaluateOnce = function () {
                                    var hs_sat26DuSr = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("codec_state\x00");
                                    return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DuSr);
                                };
                                var hs_sat26DuSu = new $hs.Data(1);
                                hs_sat26DuSu.data = [hs_sat26DuSt, hs_bbuf226DuBt];
                                return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126DuB4, hs_sat26DuSu);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuSv, hs_sat26DuSs);
                        case 2:
                            var hs_decoder26DuBz = hs_wild126DuSp.data[0];
                            var hs_sat26DuSz = new $hs.Func(1);
                            hs_sat26DuSz.evaluate = function (hs_state26DuBC) {
                                var hs_sat26DuSw = new $hs.Thunk();
                                hs_sat26DuSw.evaluateOnce = function () {
                                    return $hs.modules.GHCziIOziEncodingziTypes.hs_encode.hscall(hs_decoder26DuBz, hs_bbuf226DuBt, hs_cbuf26DuBw);
                                };
                                var hs_sat26DuSy = new $hs.Thunk();
                                hs_sat26DuSy.evaluateOnce = function () {
                                    var hs_sat26DuSx = new $hs.Data(1);
                                    hs_sat26DuSx.data = [hs_state26DuBC, hs_bbuf226DuBt];
                                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126DuB4, hs_sat26DuSx);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuSy, hs_sat26DuSw);
                            };
                            var hs_sat26DuSA = new $hs.Thunk();
                            hs_sat26DuSA.evaluateOnce = function () {
                                return $hs.modules.GHCziIOziEncodingziTypes.hs_getState.hscall(hs_decoder26DuBz);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuSA, hs_sat26DuSz);
                        }
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuSB, hs_sat26DuSq);
                };
                var hs_sat26DuSD = new $hs.Thunk();
                hs_sat26DuSD.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuSD, hs_sat26DuSC);
            };
            var hs_sat26DuSK = new $hs.Thunk();
            hs_sat26DuSK.evaluateOnce = function () {
                var hs_sat26DuSI = new $hs.Func(1);
                hs_sat26DuSI.evaluate = function (hs_ds926DuBd) {
                    var hs_wild126DuSE = hs_ds926DuBd;
                    if (hs_ds926DuBd.notEvaluated) {
                        hs_wild126DuSE = hs_ds926DuBd.hscall();
                    }
                    var hs_r26DuBh = hs_wild126DuSE.data[0];
                    var hs_bbuf226DuBk = hs_wild126DuSE.data[1];
                    var hs_sat26DuSH = new $hs.Data(1);
                    hs_sat26DuSH.data = [0];
                    var hs_wild226DuSG = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_r26DuBh, hs_sat26DuSH);
                    switch (hs_wild226DuSG.tag) {
                    case 1:
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_bbuf226DuBk);
                    case 2:
                        if (hs_ioezuinvalidCharacter25ufGM.notEvaluated) {
                            return hs_ioezuinvalidCharacter25ufGM.hscall();
                        } else {
                            return hs_ioezuinvalidCharacter25ufGM;
                        }
                    }
                };
                var hs_sat26DuSJ = new $hs.Thunk();
                hs_sat26DuSJ.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziBufferedIO.hs_fillReadBuffer.hscall(hs_zddBufferedIO26DuB8, hs_ds26DuB9, hs_bbuf126DuBa);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuSJ, hs_sat26DuSI);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuSK, hs_sat26DuSF);
        };
        var hs_sat26DuSM = new $hs.Thunk();
        hs_sat26DuSM.evaluateOnce = function () {
            return $hs.modules.GHCziIOziBuffer.hs_slideContents.hscall(hs_bbuf026DuB5);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuSM, hs_sat26DuSL);
    };
    this.hs_readTextDevice.evaluate = function (hs_hzu26DuC3, hs_cbuf26DuCU) {
        var hs_wild26DuDi = hs_hzu26DuC3;
        if (hs_hzu26DuC3.notEvaluated) {
            hs_wild26DuDi = hs_hzu26DuC3.hscall();
        }
        var hs_zddBufferedIO26DuCx = hs_wild26DuDi.data[1];
        var hs_ds26DuCy = hs_wild26DuDi.data[3];
        var hs_rb26DuCm = hs_wild26DuDi.data[5];
        var hs_rb126DuCp = hs_wild26DuDi.data[7];
        var hs_ds426DuCN = hs_wild26DuDi.data[11];
        var hs_a26DuCn = new $hs.Data(1);
        hs_a26DuCn.data = [hs_rb26DuCm];
        var hs_a126DuCq = new $hs.Data(1);
        hs_a126DuCq.data = [hs_rb126DuCp];
        var hs_sat26DuTw = new $hs.Func(1);
        hs_sat26DuTw.evaluate = function (hs_bbuf026DuCu) {
            var hs_sat26DuTu = new $hs.Thunk();
            hs_sat26DuTu.evaluateOnce = function () {
                var hs_sat26DuTl = new $hs.Func(1);
                hs_sat26DuTl.evaluate = function (hs_bbuf126DuCR) {
                    var hs_sat26DuTj = new $hs.Thunk();
                    hs_sat26DuTj.evaluateOnce = function () {
                        var hs_sat26DuT7 = new $hs.Func(1);
                        hs_sat26DuT7.evaluate = function (hs_ds926DuD7) {
                            var hs_wild126DuSY = hs_ds926DuD7;
                            if (hs_ds926DuD7.notEvaluated) {
                                hs_wild126DuSY = hs_ds926DuD7.hscall();
                            }
                            var hs_bbuf226DuDc = hs_wild126DuSY.data[0];
                            var hs_cbufzq26DuDe = hs_wild126DuSY.data[1];
                            var hs_sat26DuT4 = new $hs.Thunk();
                            hs_sat26DuT4.evaluateOnce = function () {
                                var hs_sat26DuT2 = new $hs.Thunk();
                                hs_sat26DuT2.evaluateOnce = function () {
                                    var hs_sat26DuSZ = new $hs.Thunk();
                                    hs_sat26DuSZ.evaluateOnce = function () {
                                        return $hs.modules.GHCziIOziBuffer.hs_bufR.hscall(hs_cbuf26DuCU);
                                    };
                                    var hs_sat26DuT1 = new $hs.Thunk();
                                    hs_sat26DuT1.evaluateOnce = function () {
                                        return $hs.modules.GHCziIOziBuffer.hs_bufR.hscall(hs_cbufzq26DuDe);
                                    };
                                    var hs_wild226DuT0 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_sat26DuT1, hs_sat26DuSZ);
                                    switch (hs_wild226DuT0.tag) {
                                    case 1:
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_cbufzq26DuDe);
                                    case 2:
                                        return hs_readTextDevicezq25ufHI.hscall(hs_wild26DuDi, hs_bbuf226DuDc, hs_cbuf26DuCU);
                                    }
                                };
                                var hs_sat26DuT3 = new $hs.Thunk();
                                hs_sat26DuT3.evaluateOnce = function () {
                                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a26DuCn, hs_bbuf226DuDc);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuT3, hs_sat26DuT2);
                            };
                            var hs_sat26DuT5 = new $hs.Thunk();
                            hs_sat26DuT5.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuT5, hs_sat26DuT4);
                        };
                        var hs_sat26DuTi = new $hs.Thunk();
                        hs_sat26DuTi.evaluateOnce = function () {
                            var hs_wild126DuT6 = hs_ds426DuCN;
                            if (hs_ds426DuCN.notEvaluated) {
                                hs_wild126DuT6 = hs_ds426DuCN.hscall();
                            }
                            switch (hs_wild126DuT6.tag) {
                            case 1:
                                var hs_sat26DuT9 = new $hs.Thunk();
                                hs_sat26DuT9.evaluateOnce = function () {
                                    return $hs.modules.GHCziIOziEncoding.hs_latin1zudecode.hscall(hs_bbuf126DuCR, hs_cbuf26DuCU);
                                };
                                var hs_sat26DuTc = new $hs.Thunk();
                                hs_sat26DuTc.evaluateOnce = function () {
                                    var hs_sat26DuTa = new $hs.Thunk();
                                    hs_sat26DuTa.evaluateOnce = function () {
                                        var hs_sat26DuT8 = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("codec_state\x00");
                                        return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DuT8);
                                    };
                                    var hs_sat26DuTb = new $hs.Data(1);
                                    hs_sat26DuTb.data = [hs_sat26DuTa, hs_bbuf126DuCR];
                                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126DuCq, hs_sat26DuTb);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuTc, hs_sat26DuT9);
                            case 2:
                                var hs_decoder26DuCX = hs_wild126DuT6.data[0];
                                var hs_sat26DuTg = new $hs.Func(1);
                                hs_sat26DuTg.evaluate = function (hs_state26DuD0) {
                                    var hs_sat26DuTd = new $hs.Thunk();
                                    hs_sat26DuTd.evaluateOnce = function () {
                                        return $hs.modules.GHCziIOziEncodingziTypes.hs_encode.hscall(hs_decoder26DuCX, hs_bbuf126DuCR, hs_cbuf26DuCU);
                                    };
                                    var hs_sat26DuTf = new $hs.Thunk();
                                    hs_sat26DuTf.evaluateOnce = function () {
                                        var hs_sat26DuTe = new $hs.Data(1);
                                        hs_sat26DuTe.data = [hs_state26DuD0, hs_bbuf126DuCR];
                                        return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126DuCq, hs_sat26DuTe);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuTf, hs_sat26DuTd);
                                };
                                var hs_sat26DuTh = new $hs.Thunk();
                                hs_sat26DuTh.evaluateOnce = function () {
                                    return $hs.modules.GHCziIOziEncodingziTypes.hs_getState.hscall(hs_decoder26DuCX);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuTh, hs_sat26DuTg);
                            }
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuTi, hs_sat26DuT7);
                    };
                    var hs_sat26DuTk = new $hs.Thunk();
                    hs_sat26DuTk.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuTk, hs_sat26DuTj);
                };
                var hs_sat26DuTt = new $hs.Thunk();
                hs_sat26DuTt.evaluateOnce = function () {
                    var hs_sat26DuTo = new $hs.Thunk();
                    hs_sat26DuTo.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBuffer.hs_isEmptyBuffer.hscall(hs_bbuf026DuCu);
                    };
                    var hs_wild126DuTn = $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DuTo);
                    switch (hs_wild126DuTn.tag) {
                    case 1:
                        var hs_sat26DuTr = new $hs.Func(1);
                        hs_sat26DuTr.evaluate = function (hs_ds926DuCB) {
                            var hs_wild226DuTm = hs_ds926DuCB;
                            if (hs_ds926DuCB.notEvaluated) {
                                hs_wild226DuTm = hs_ds926DuCB.hscall();
                            }
                            var hs_r26DuCF = hs_wild226DuTm.data[0];
                            var hs_bbuf126DuCI = hs_wild226DuTm.data[1];
                            var hs_sat26DuTq = new $hs.Data(1);
                            hs_sat26DuTq.data = [0];
                            var hs_wild326DuTp = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_r26DuCF, hs_sat26DuTq);
                            switch (hs_wild326DuTp.tag) {
                            case 1:
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_bbuf126DuCI);
                            case 2:
                                if ($hs.modules.GHCziIOziHandleziInternals.hs_ioezuEOF.notEvaluated) {
                                    return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuEOF.hscall();
                                } else {
                                    return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuEOF;
                                }
                            }
                        };
                        var hs_sat26DuTs = new $hs.Thunk();
                        hs_sat26DuTs.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziBufferedIO.hs_fillReadBuffer.hscall(hs_zddBufferedIO26DuCx, hs_ds26DuCy, hs_bbuf026DuCu);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuTs, hs_sat26DuTr);
                    case 2:
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_bbuf026DuCu);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuTt, hs_sat26DuTl);
            };
            var hs_sat26DuTv = new $hs.Thunk();
            hs_sat26DuTv.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuTv, hs_sat26DuTu);
        };
        var hs_sat26DuTx = new $hs.Thunk();
        hs_sat26DuTx.evaluateOnce = function () {
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a26DuCn);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuTx, hs_sat26DuTw);
    };
    this.hs_hLookAheadzu.evaluate = function (hs_handlezu26DuDr) {
        var hs_wild26DuDQ = hs_handlezu26DuDr;
        if (hs_handlezu26DuDr.notEvaluated) {
            hs_wild26DuDQ = hs_handlezu26DuDr.hscall();
        }
        var hs_rb226DuDK = hs_wild26DuDQ.data[8];
        var hs_a26DuDL = new $hs.Data(1);
        hs_a26DuDL.data = [hs_rb226DuDK];
        var hs_sat26DuTU = new $hs.Func(1);
        hs_sat26DuTU.evaluate = function (hs_buf26DuDO) {
            var hs_sat26DuTS = new $hs.Func(1);
            hs_sat26DuTS.evaluate = function (hs_newzubuf26DuDT) {
                var hs_sat26DuTP = new $hs.Thunk();
                hs_sat26DuTP.evaluateOnce = function () {
                    var hs_sat26DuTN = new $hs.Thunk();
                    hs_sat26DuTN.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBuffer.hs_bufL.hscall(hs_buf26DuDO);
                    };
                    var hs_sat26DuTO = new $hs.Thunk();
                    hs_sat26DuTO.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBuffer.hs_bufRaw.hscall(hs_buf26DuDO);
                    };
                    return $hs.modules.GHCziIOziBuffer.hs_peekCharBuf.hscall(hs_sat26DuTO, hs_sat26DuTN);
                };
                var hs_sat26DuTQ = new $hs.Thunk();
                hs_sat26DuTQ.evaluateOnce = function () {
                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a26DuDL, hs_newzubuf26DuDT);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuTQ, hs_sat26DuTP);
            };
            var hs_sat26DuTT = new $hs.Thunk();
            hs_sat26DuTT.evaluateOnce = function () {
                var hs_wild126DuTR = $hs.modules.GHCziIOziBuffer.hs_isEmptyBuffer.hscall(hs_buf26DuDO);
                switch (hs_wild126DuTR.tag) {
                case 1:
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_buf26DuDO);
                case 2:
                    return $hs.modules.GHCziIOziHandleziInternals.hs_readTextDevice.hscall(hs_wild26DuDQ, hs_buf26DuDO);
                }
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuTT, hs_sat26DuTS);
        };
        var hs_sat26DuTV = new $hs.Thunk();
        hs_sat26DuTV.evaluateOnce = function () {
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a26DuDL);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuTV, hs_sat26DuTU);
    };
    this.hs_withHandlezuzuzq.evaluate = function (hs_fun26DuE4, hs_h26DuE5, hs_m26DuE7, hs_act26DuE6) {
        var hs_sat26DuU2 = new $hs.Thunk();
        hs_sat26DuU2.evaluateOnce = function () {
            var hs_sat26DuU0 = new $hs.Func(1);
            hs_sat26DuU0.evaluate = function (hs_hzq26DuEa) {
                var hs_sat26DuTY = new $hs.Thunk();
                hs_sat26DuTY.evaluateOnce = function () {
                    var hs_sat26DuTW = new $hs.Thunk();
                    hs_sat26DuTW.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                    };
                    var hs_sat26DuTX = new $hs.Thunk();
                    hs_sat26DuTX.evaluateOnce = function () {
                        return $hs.modules.GHCziMVar.hs_putMVar.hscall(hs_m26DuE7, hs_hzq26DuEa);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuTX, hs_sat26DuTW);
                };
                var hs_sat26DuTZ = new $hs.Thunk();
                hs_sat26DuTZ.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziHandleziTypes.hs_checkHandleInvariants.hscall(hs_hzq26DuEa);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuTZ, hs_sat26DuTY);
            };
            var hs_sat26DuU1 = new $hs.Thunk();
            hs_sat26DuU1.evaluateOnce = function () {
                return hs_dozuoperation25ufGe.hscall(hs_fun26DuE4, hs_h26DuE5, hs_act26DuE6, hs_m26DuE7);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuU1, hs_sat26DuU0);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_maskzu, hs_sat26DuU2);
    };
    this.hs_withAllHandleszuzu.evaluate = function (hs_fun26DuEo, hs_h26DuEk, hs_act26DuEs) {
        var hs_wild26DuEp = hs_h26DuEk;
        if (hs_h26DuEk.notEvaluated) {
            hs_wild26DuEp = hs_h26DuEk.hscall();
        }
        switch (hs_wild26DuEp.tag) {
        case 1:
            var hs_rb26DuEq = hs_wild26DuEp.data[1];
            var hs_sat26DuU4 = new $hs.Data(1);
            hs_sat26DuU4.data = [hs_rb26DuEq];
            return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezuzuzq.hscall(hs_fun26DuEo, hs_wild26DuEp, hs_sat26DuU4, hs_act26DuEs);
        case 2:
            var hs_rb26DuEw = hs_wild26DuEp.data[1];
            var hs_rb126DuEz = hs_wild26DuEp.data[2];
            var hs_sat26DuU7 = new $hs.Thunk();
            hs_sat26DuU7.evaluateOnce = function () {
                var hs_sat26DuU6 = new $hs.Data(1);
                hs_sat26DuU6.data = [hs_rb126DuEz];
                return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezuzuzq.hscall(hs_fun26DuEo, hs_wild26DuEp, hs_sat26DuU6, hs_act26DuEs);
            };
            var hs_sat26DuU9 = new $hs.Thunk();
            hs_sat26DuU9.evaluateOnce = function () {
                var hs_sat26DuU8 = new $hs.Data(1);
                hs_sat26DuU8.data = [hs_rb26DuEw];
                return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezuzuzq.hscall(hs_fun26DuEo, hs_wild26DuEp, hs_sat26DuU8, hs_act26DuEs);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuU9, hs_sat26DuU7);
        }
    };
    this.hs_ioezufinalizzedHandle.evaluate = function (hs_fp26DuEE) {
        var hs_sat26DuUa = new $hs.Data(2);
        hs_sat26DuUa.data = [hs_fp26DuEE];
        var hs_sat26DuUb = new $hs.Thunk();
        hs_sat26DuUb.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("handle is finalized\x00");
        };
        var hs_sat26DuUc = new $hs.Data(1);
        hs_sat26DuUc.data = [$hs.modules.DataziMaybe.hs_Nothing, $hs.modules.GHCziIOziException.hs_IllegalOperation, $hs.modules.GHCziTypes.hs_ZMZN, hs_sat26DuUb, $hs.modules.DataziMaybe.hs_Nothing, hs_sat26DuUa];
        return $hs.modules.GHCziException.hs_throw.hscall($hs.modules.GHCziIOziException.hs_zdfExceptionIOException, hs_sat26DuUc);
    };
    this.hs_mkHandle.evaluate = function (hs_zddIODevice26DuFs, hs_zddBufferedIO26DuF0, hs_zddTypeable26DuFY, hs_dev26DuF1, hs_filepath26DuGi, hs_hazutype26DuET, hs_buffered26DuFc, hs_mbzucodec26DuES, hs_nl26DuG7, hs_finalizzer26DuGe, hs_otherzuside26DuGa) {
        var hs_sat26DuUW = new $hs.Func(2);
        hs_sat26DuUW.evaluate = function (hs_mbzuencoder26DuG5, hs_mbzudecoder26DuG6) {
            var hs_bufzustate26DuEZ = new $hs.Thunk();
            hs_bufzustate26DuEZ.evaluateOnce = function () {
                var hs_wild26DuUd = hs_hazutype26DuET;
                if (hs_hazutype26DuET.notEvaluated) {
                    hs_wild26DuUd = hs_hazutype26DuET.hscall();
                }
                switch (hs_wild26DuUd.tag) {
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
            var hs_sat26DuUU = new $hs.Func(1);
            hs_sat26DuUU.evaluate = function (hs_bbuf26DuF4) {
                var hs_sat26DuUS = new $hs.Func(1);
                hs_sat26DuUS.evaluate = function (hs_bbufref26DuFM) {
                    var hs_sat26DuUO = new $hs.Func(1);
                    hs_sat26DuUO.evaluate = function (hs_lastzudecode26DuFP) {
                        var hs_sat26DuUx = new $hs.Func(1);
                        hs_sat26DuUx.evaluate = function (hs_ds26DuFF) {
                            var hs_wild26DuUf = hs_ds26DuFF;
                            if (hs_ds26DuFF.notEvaluated) {
                                hs_wild26DuUf = hs_ds26DuFF.hscall();
                            }
                            var hs_cbufref26DuFS = hs_wild26DuUf.data[0];
                            var hs_bmode26DuG1 = hs_wild26DuUf.data[1];
                            var hs_sat26DuUu = new $hs.Func(1);
                            hs_sat26DuUu.evaluate = function (hs_spares26DuFV) {
                                var hs_sat26DuUp = new $hs.Func(1);
                                hs_sat26DuUp.evaluate = function (hs_m26DuGh) {
                                    var hs_sat26DuUi = new $hs.Thunk();
                                    hs_sat26DuUi.evaluateOnce = function () {
                                        var hs_sat26DuUg = new $hs.Thunk();
                                        hs_sat26DuUg.evaluateOnce = function () {
                                            var hs_tpl26DuUe = hs_m26DuGh;
                                            if (hs_m26DuGh.notEvaluated) {
                                                hs_tpl26DuUe = hs_m26DuGh.hscall();
                                            }
                                            var hs_tpl126DuGo = hs_tpl26DuUe.data[0];
                                            var $res = new $hs.Data(1);
                                            $res.data = [hs_filepath26DuGi, hs_tpl126DuGo];
                                            return $res;
                                        };
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuUg);
                                    };
                                    var hs_sat26DuUk = new $hs.Thunk();
                                    hs_sat26DuUk.evaluateOnce = function () {
                                        var hs_wild126DuUh = hs_finalizzer26DuGe;
                                        if (hs_finalizzer26DuGe.notEvaluated) {
                                            hs_wild126DuUh = hs_finalizzer26DuGe.hscall();
                                        }
                                        switch (hs_wild126DuUh.tag) {
                                        case 1:
                                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                                        case 2:
                                            var hs_finalizzer126DuGj = hs_wild126DuUh.data[0];
                                            var hs_sat26DuUj = new $hs.Thunk();
                                            hs_sat26DuUj.evaluateOnce = function () {
                                                return hs_finalizzer126DuGj.hscall(hs_filepath26DuGi, hs_m26DuGh);
                                            };
                                            return $hs.modules.GHCziMVar.hs_addMVarFinalizzer.hscall(hs_m26DuGh, hs_sat26DuUj);
                                        }
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuUk, hs_sat26DuUi);
                                };
                                var hs_sat26DuUt = new $hs.Thunk();
                                hs_sat26DuUt.evaluateOnce = function () {
                                    var hs_sat26DuUs = new $hs.Thunk();
                                    hs_sat26DuUs.evaluateOnce = function () {
                                        var hs_tpl26DuFZ = hs_dev26DuF1;
                                        if (hs_dev26DuF1.notEvaluated) {
                                            hs_tpl26DuFZ = hs_dev26DuF1.hscall();
                                        }
                                        var hs_tpl126DuUo = hs_bbufref26DuFM;
                                        if (hs_bbufref26DuFM.notEvaluated) {
                                            hs_tpl126DuUo = hs_bbufref26DuFM.hscall();
                                        }
                                        var hs_tpl226DuG0 = hs_tpl126DuUo.data[0];
                                        var hs_tpl326DuUn = hs_lastzudecode26DuFP;
                                        if (hs_lastzudecode26DuFP.notEvaluated) {
                                            hs_tpl326DuUn = hs_lastzudecode26DuFP.hscall();
                                        }
                                        var hs_tpl426DuG2 = hs_tpl326DuUn.data[0];
                                        var hs_tpl526DuUm = hs_cbufref26DuFS;
                                        if (hs_cbufref26DuFS.notEvaluated) {
                                            hs_tpl526DuUm = hs_cbufref26DuFS.hscall();
                                        }
                                        var hs_tpl626DuG3 = hs_tpl526DuUm.data[0];
                                        var hs_tpl726DuUl = hs_spares26DuFV;
                                        if (hs_spares26DuFV.notEvaluated) {
                                            hs_tpl726DuUl = hs_spares26DuFV.hscall();
                                        }
                                        var hs_tpl826DuG4 = hs_tpl726DuUl.data[0];
                                        var hs_sat26DuUq = new $hs.Thunk();
                                        hs_sat26DuUq.evaluateOnce = function () {
                                            return $hs.modules.GHCziIOziHandleziTypes.hs_outputNL.hscall(hs_nl26DuG7);
                                        };
                                        var hs_sat26DuUr = new $hs.Thunk();
                                        hs_sat26DuUr.evaluateOnce = function () {
                                            return $hs.modules.GHCziIOziHandleziTypes.hs_inputNL.hscall(hs_nl26DuG7);
                                        };
                                        var $res = new $hs.Data(1);
                                        $res.data = [hs_zddIODevice26DuFs, hs_zddBufferedIO26DuF0, hs_zddTypeable26DuFY, hs_tpl26DuFZ, hs_hazutype26DuET, hs_tpl226DuG0, hs_bmode26DuG1, hs_tpl426DuG2, hs_tpl626DuG3, hs_tpl826DuG4, hs_mbzuencoder26DuG5, hs_mbzudecoder26DuG6, hs_mbzucodec26DuES, hs_sat26DuUr, hs_sat26DuUq, hs_otherzuside26DuGa];
                                        return $res;
                                    };
                                    return $hs.modules.GHCziMVar.hs_newMVar.hscall(hs_sat26DuUs);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuUt, hs_sat26DuUp);
                            };
                            var hs_sat26DuUv = new $hs.Thunk();
                            hs_sat26DuUv.evaluateOnce = function () {
                                return $hs.modules.GHCziIORef.hs_newIORef.hscall($hs.modules.GHCziIOziHandleziTypes.hs_BufferListNil);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuUv, hs_sat26DuUu);
                        };
                        var hs_sat26DuUM = new $hs.Thunk();
                        hs_sat26DuUM.evaluateOnce = function () {
                            var hs_wild26DuUw = hs_buffered26DuFc;
                            if (hs_buffered26DuFc.notEvaluated) {
                                hs_wild26DuUw = hs_buffered26DuFc.hscall();
                            }
                            switch (hs_wild26DuUw.tag) {
                            case 1:
                                var hs_sat26DuUB = new $hs.Func(1);
                                hs_sat26DuUB.evaluate = function (hs_buffer26DuFg) {
                                    var hs_sat26DuUz = new $hs.Func(1);
                                    hs_sat26DuUz.evaluate = function (hs_ref26DuFj) {
                                        var hs_sat26DuUy = new $hs.Data(1);
                                        hs_sat26DuUy.data = [hs_ref26DuFj, $hs.modules.GHCziIOziHandleziTypes.hs_NoBuffering];
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuUy);
                                    };
                                    var hs_sat26DuUA = new $hs.Thunk();
                                    hs_sat26DuUA.evaluateOnce = function () {
                                        return $hs.modules.GHCziIORef.hs_newIORef.hscall(hs_buffer26DuFg);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuUA, hs_sat26DuUz);
                                };
                                var hs_sat26DuUC = new $hs.Thunk();
                                hs_sat26DuUC.evaluateOnce = function () {
                                    return $hs.modules.GHCziIOziBuffer.hs_newCharBuffer.hscall($hs.modules.GHCziIOziHandleziInternals.hs_dEFAULTzuCHARzuBUFFERzuSIZZE, hs_bufzustate26DuEZ);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuUC, hs_sat26DuUB);
                            case 2:
                                var hs_sat26DuUK = new $hs.Func(1);
                                hs_sat26DuUK.evaluate = function (hs_buffer26DuFp) {
                                    var hs_sat26DuUI = new $hs.Func(1);
                                    hs_sat26DuUI.evaluate = function (hs_ioref26DuFv) {
                                        var hs_sat26DuUG = new $hs.Func(1);
                                        hs_sat26DuUG.evaluate = function (hs_iszutty26DuFw) {
                                            var hs_sat26DuUE = new $hs.Thunk();
                                            hs_sat26DuUE.evaluateOnce = function () {
                                                var hs_wild126DuUD = hs_iszutty26DuFw;
                                                if (hs_iszutty26DuFw.notEvaluated) {
                                                    hs_wild126DuUD = hs_iszutty26DuFw.hscall();
                                                }
                                                switch (hs_wild126DuUD.tag) {
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
                                            var hs_sat26DuUF = new $hs.Data(1);
                                            hs_sat26DuUF.data = [hs_ioref26DuFv, hs_sat26DuUE];
                                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuUF);
                                        };
                                        var hs_sat26DuUH = new $hs.Thunk();
                                        hs_sat26DuUH.evaluateOnce = function () {
                                            return $hs.modules.GHCziIOziDevice.hs_isTerminal.hscall(hs_zddIODevice26DuFs, hs_dev26DuF1);
                                        };
                                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuUH, hs_sat26DuUG);
                                    };
                                    var hs_sat26DuUJ = new $hs.Thunk();
                                    hs_sat26DuUJ.evaluateOnce = function () {
                                        return $hs.modules.GHCziIORef.hs_newIORef.hscall(hs_buffer26DuFp);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuUJ, hs_sat26DuUI);
                                };
                                var hs_sat26DuUL = new $hs.Thunk();
                                hs_sat26DuUL.evaluateOnce = function () {
                                    return $hs.modules.GHCziIOziBuffer.hs_newCharBuffer.hscall($hs.modules.GHCziIOziHandleziInternals.hs_dEFAULTzuCHARzuBUFFERzuSIZZE, hs_bufzustate26DuEZ);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuUL, hs_sat26DuUK);
                            }
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuUM, hs_sat26DuUx);
                    };
                    var hs_sat26DuUR = new $hs.Thunk();
                    hs_sat26DuUR.evaluateOnce = function () {
                        var hs_sat26DuUP = new $hs.Thunk();
                        hs_sat26DuUP.evaluateOnce = function () {
                            var hs_sat26DuUN = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("codec_state\x00");
                            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DuUN);
                        };
                        var hs_sat26DuUQ = new $hs.Data(1);
                        hs_sat26DuUQ.data = [hs_sat26DuUP, hs_bbuf26DuF4];
                        return $hs.modules.GHCziIORef.hs_newIORef.hscall(hs_sat26DuUQ);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuUR, hs_sat26DuUO);
                };
                var hs_sat26DuUT = new $hs.Thunk();
                hs_sat26DuUT.evaluateOnce = function () {
                    return $hs.modules.GHCziIORef.hs_newIORef.hscall(hs_bbuf26DuF4);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuUT, hs_sat26DuUS);
            };
            var hs_sat26DuUV = new $hs.Thunk();
            hs_sat26DuUV.evaluateOnce = function () {
                return $hs.modules.GHCziIOziBufferedIO.hs_newBuffer.hscall(hs_zddBufferedIO26DuF0, hs_dev26DuF1, hs_bufzustate26DuEZ);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuUV, hs_sat26DuUU);
        };
        var hs_sat26DuUX = new $hs.Func(1);
        hs_sat26DuUX.evaluate = function (hs_eta1cW6l3) {
            return $hs.modules.GHCziIOziHandleziInternals.hs_openTextEncoding.hscall(hs_mbzucodec26DuES, hs_hazutype26DuET, hs_eta1cW6l3);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DuUX, hs_sat26DuUW);
    };
    hs_trymaybe25ufHu.evaluate = function (hs_io26DuGz) {
        var hs_sat26DuUZ = new $hs.Func(1);
        hs_sat26DuUZ.evaluate = function (hs_e26DuGD) {
            var hs_sat26DuUY = new $hs.Data(2);
            hs_sat26DuUY.data = [hs_e26DuGD];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuUY);
        };
        var hs_sat26DuV1 = new $hs.Thunk();
        hs_sat26DuV1.evaluateOnce = function () {
            var hs_sat26DuV0 = new $hs.Thunk();
            hs_sat26DuV0.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.DataziMaybe.hs_Nothing);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_io26DuGz, hs_sat26DuV0);
        };
        return $hs.modules.GHCziIO.hs_catchException.hscall($hs.modules.GHCziException.hs_zdfExceptionSomeException, hs_sat26DuV1, hs_sat26DuUZ);
    };
    this.hs_hClosezuhelp.evaluate = function (hs_handlezu26DuGH) {
        var hs_wild26DuV4 = $hs.modules.GHCziIOziHandleziTypes.hs_haType.hscall(hs_handlezu26DuGH);
        switch (hs_wild26DuV4.tag) {
        case 1:
            var hs_sat26DuVv = new $hs.Data(1);
            hs_sat26DuVv.data = [hs_handlezu26DuGH, $hs.modules.DataziMaybe.hs_Nothing];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuVv);
        default:
            var hs_sat26DuVs = new $hs.Func(1);
            hs_sat26DuVs.evaluate = function (hs_mbzuexc126DuHW) {
                var hs_sat26DuV7 = new $hs.Func(1);
                hs_sat26DuV7.evaluate = function (hs_ds26DuHR) {
                    var hs_wild126DuV3 = hs_ds26DuHR;
                    if (hs_ds26DuHR.notEvaluated) {
                        hs_wild126DuV3 = hs_ds26DuHR.hscall();
                    }
                    var hs_hzu26DuHV = hs_wild126DuV3.data[0];
                    var hs_mbzuexc226DuHY = hs_wild126DuV3.data[1];
                    var hs_sat26DuV5 = new $hs.Thunk();
                    hs_sat26DuV5.evaluateOnce = function () {
                        var hs_wild226DuV2 = $hs.modules.DataziMaybe.hs_isJust.hscall(hs_mbzuexc126DuHW);
                        switch (hs_wild226DuV2.tag) {
                        case 1:
                            if (hs_mbzuexc226DuHY.notEvaluated) {
                                return hs_mbzuexc226DuHY.hscall();
                            } else {
                                return hs_mbzuexc226DuHY;
                            }
                        case 2:
                            if (hs_mbzuexc126DuHW.notEvaluated) {
                                return hs_mbzuexc126DuHW.hscall();
                            } else {
                                return hs_mbzuexc126DuHW;
                            }
                        }
                    };
                    var hs_sat26DuV6 = new $hs.Data(1);
                    hs_sat26DuV6.data = [hs_hzu26DuHV, hs_sat26DuV5];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuV6);
                };
                var hs_sat26DuVr = new $hs.Thunk();
                hs_sat26DuVr.evaluateOnce = function () {
                    var hs_wild126DuHn = hs_handlezu26DuGH;
                    if (hs_handlezu26DuGH.notEvaluated) {
                        hs_wild126DuHn = hs_handlezu26DuGH.hscall();
                    }
                    var hs_zddIODevice26DuHe = hs_wild126DuHn.data[0];
                    var hs_zddBufferedIO26DuHv = hs_wild126DuHn.data[1];
                    var hs_zddTypeable26DuHw = hs_wild126DuHn.data[2];
                    var hs_ds26DuHf = hs_wild126DuHn.data[3];
                    var hs_rb26DuH4 = hs_wild126DuHn.data[5];
                    var hs_ds226DuHy = hs_wild126DuHn.data[6];
                    var hs_rb126DuHz = hs_wild126DuHn.data[7];
                    var hs_rb226DuH7 = hs_wild126DuHn.data[8];
                    var hs_rb326DuHa = hs_wild126DuHn.data[9];
                    var hs_ds326DuHC = hs_wild126DuHn.data[10];
                    var hs_ds426DuHD = hs_wild126DuHn.data[11];
                    var hs_ds526DuHE = hs_wild126DuHn.data[12];
                    var hs_ds626DuHF = hs_wild126DuHn.data[13];
                    var hs_ds726DuHG = hs_wild126DuHn.data[14];
                    var hs_ds826DuHc = hs_wild126DuHn.data[15];
                    var hs_a26DuH5 = new $hs.Data(1);
                    hs_a26DuH5.data = [hs_rb26DuH4];
                    var hs_a126DuH8 = new $hs.Data(1);
                    hs_a126DuH8.data = [hs_rb226DuH7];
                    var hs_a226DuHb = new $hs.Data(1);
                    hs_a226DuHb.data = [hs_rb326DuHa];
                    var hs_sat26DuVn = new $hs.Func(1);
                    hs_sat26DuVn.evaluate = function (hs_maybezuexception26DuHI) {
                        var hs_sat26DuVk = new $hs.Thunk();
                        hs_sat26DuVk.evaluateOnce = function () {
                            var hs_sat26DuVi = new $hs.Thunk();
                            hs_sat26DuVi.evaluateOnce = function () {
                                var hs_sat26DuVg = new $hs.Thunk();
                                hs_sat26DuVg.evaluateOnce = function () {
                                    var hs_sat26DuVe = new $hs.Thunk();
                                    hs_sat26DuVe.evaluateOnce = function () {
                                        var hs_sat26DuVc = new $hs.Thunk();
                                        hs_sat26DuVc.evaluateOnce = function () {
                                            var hs_tpl26DuVb = hs_a26DuH5;
                                            if (hs_a26DuH5.notEvaluated) {
                                                hs_tpl26DuVb = hs_a26DuH5.hscall();
                                            }
                                            var hs_tpl126DuHx = hs_tpl26DuVb.data[0];
                                            var hs_tpl226DuVa = hs_a126DuH8;
                                            if (hs_a126DuH8.notEvaluated) {
                                                hs_tpl226DuVa = hs_a126DuH8.hscall();
                                            }
                                            var hs_tpl326DuHA = hs_tpl226DuVa.data[0];
                                            var hs_tpl426DuV9 = hs_a226DuHb;
                                            if (hs_a226DuHb.notEvaluated) {
                                                hs_tpl426DuV9 = hs_a226DuHb.hscall();
                                            }
                                            var hs_tpl526DuHB = hs_tpl426DuV9.data[0];
                                            var $res = new $hs.Data(1);
                                            $res.data = [hs_zddIODevice26DuHe, hs_zddBufferedIO26DuHv, hs_zddTypeable26DuHw, hs_ds26DuHf, $hs.modules.GHCziIOziHandleziTypes.hs_ClosedHandle, hs_tpl126DuHx, hs_ds226DuHy, hs_rb126DuHz, hs_tpl326DuHA, hs_tpl526DuHB, hs_ds326DuHC, hs_ds426DuHD, hs_ds526DuHE, hs_ds626DuHF, hs_ds726DuHG, hs_ds826DuHc];
                                            return $res;
                                        };
                                        var hs_sat26DuVd = new $hs.Data(1);
                                        hs_sat26DuVd.data = [hs_sat26DuVc, hs_maybezuexception26DuHI];
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuVd);
                                    };
                                    var hs_sat26DuVf = new $hs.Thunk();
                                    hs_sat26DuVf.evaluateOnce = function () {
                                        return $hs.modules.GHCziIOziHandleziInternals.hs_closeTextCodecs.hscall(hs_wild126DuHn);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuVf, hs_sat26DuVe);
                                };
                                var hs_sat26DuVh = new $hs.Thunk();
                                hs_sat26DuVh.evaluateOnce = function () {
                                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a26DuH5, hs_noByteBuffer25ufHA);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuVh, hs_sat26DuVg);
                            };
                            var hs_sat26DuVj = new $hs.Thunk();
                            hs_sat26DuVj.evaluateOnce = function () {
                                return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126DuH8, hs_noCharBuffer25ufHy);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuVj, hs_sat26DuVi);
                        };
                        var hs_sat26DuVl = new $hs.Thunk();
                        hs_sat26DuVl.evaluateOnce = function () {
                            return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a226DuHb, $hs.modules.GHCziIOziHandleziTypes.hs_BufferListNil);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuVl, hs_sat26DuVk);
                    };
                    var hs_sat26DuVq = new $hs.Thunk();
                    hs_sat26DuVq.evaluateOnce = function () {
                        var hs_wild226DuVm = hs_ds826DuHc;
                        if (hs_ds826DuHc.notEvaluated) {
                            hs_wild226DuVm = hs_ds826DuHc.hscall();
                        }
                        switch (hs_wild226DuVm.tag) {
                        case 1:
                            var hs_sat26DuVo = new $hs.Thunk();
                            hs_sat26DuVo.evaluateOnce = function () {
                                return $hs.modules.GHCziIOziDevice.hs_close.hscall(hs_zddIODevice26DuHe, hs_ds26DuHf);
                            };
                            return $hs.modules.GHCziBase.hs_zd.hscall(hs_trymaybe25ufHu, hs_sat26DuVo);
                        case 2:
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.DataziMaybe.hs_Nothing);
                        }
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuVq, hs_sat26DuVn);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuVr, hs_sat26DuV7);
            };
            var hs_sat26DuVu = new $hs.Thunk();
            hs_sat26DuVu.evaluateOnce = function () {
                var hs_sat26DuVt = new $hs.Thunk();
                hs_sat26DuVt.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziHandleziInternals.hs_flushWriteBuffer.hscall(hs_handlezu26DuGH);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_trymaybe25ufHu, hs_sat26DuVt);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuVu, hs_sat26DuVs);
        }
    };
    this.hs_handleFinalizzer.evaluate = function (hs_fp26DuIl, hs_m26DuI6) {
        var hs_sat26DuVC = new $hs.Func(1);
        hs_sat26DuVC.evaluate = function (hs_handlezu26DuI9) {
            var hs_sat26DuVA = new $hs.Func(1);
            hs_sat26DuVA.evaluate = function (hs_ds26DuIc) {
                var hs_wild26DuVw = hs_ds26DuIc;
                if (hs_ds26DuIc.notEvaluated) {
                    hs_wild26DuVw = hs_ds26DuIc.hscall();
                }
                var hs_handlezuzq26DuIg = hs_wild26DuVw.data[0];
                var hs_sat26DuVy = new $hs.Thunk();
                hs_sat26DuVy.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                };
                var hs_sat26DuVz = new $hs.Thunk();
                hs_sat26DuVz.evaluateOnce = function () {
                    return $hs.modules.GHCziMVar.hs_putMVar.hscall(hs_m26DuI6, hs_handlezuzq26DuIg);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuVz, hs_sat26DuVy);
            };
            var hs_sat26DuVB = new $hs.Thunk();
            hs_sat26DuVB.evaluateOnce = function () {
                return $hs.modules.GHCziIOziHandleziInternals.hs_hClosezuhelp.hscall(hs_handlezu26DuI9);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuVB, hs_sat26DuVA);
        };
        var hs_sat26DuVD = new $hs.Thunk();
        hs_sat26DuVD.evaluateOnce = function () {
            return $hs.modules.GHCziMVar.hs_takeMVar.hscall(hs_m26DuI6);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuVD, hs_sat26DuVC);
    };
    this.hs_mkFileHandle.evaluate = function (hs_zddIODevice26DuIu, hs_zddBufferedIO26DuIv, hs_zddTypeable26DuIw, hs_dev26DuIx, hs_filepath26DuIy, hs_iomode26DuIz, hs_mbzucodec26DuIC, hs_trzunewlines26DuID) {
        var hs_sat26DuVF = new $hs.Data(2);
        hs_sat26DuVF.data = [$hs.modules.GHCziIOziHandleziInternals.hs_handleFinalizzer];
        var hs_sat26DuVG = new $hs.Thunk();
        hs_sat26DuVG.evaluateOnce = function () {
            var hs_wild26DuVE = hs_iomode26DuIz;
            if (hs_iomode26DuIz.notEvaluated) {
                hs_wild26DuVE = hs_iomode26DuIz.hscall();
            }
            switch (hs_wild26DuVE.tag) {
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
        return $hs.modules.GHCziIOziHandleziInternals.hs_mkHandle.hscall(hs_zddIODevice26DuIu, hs_zddBufferedIO26DuIv, hs_zddTypeable26DuIw, hs_dev26DuIx, hs_filepath26DuIy, hs_sat26DuVG, $hs.modules.GHCziBool.hs_True, hs_mbzucodec26DuIC, hs_trzunewlines26DuID, hs_sat26DuVF, $hs.modules.DataziMaybe.hs_Nothing);
    };
    this.hs_mkDuplexHandle.evaluate = function (hs_zddIODevice26DuIM, hs_zddBufferedIO26DuIN, hs_zddTypeable26DuIO, hs_dev26DuIP, hs_filepath26DuIQ, hs_mbzucodec26DuIR, hs_trzunewlines26DuIS) {
        var hs_sat26DuVY = new $hs.Func(1);
        hs_sat26DuVY.evaluate = function (hs_writezuside26DuIW) {
            var hs_wild26DuVI = hs_writezuside26DuIW;
            if (hs_writezuside26DuIW.notEvaluated) {
                hs_wild26DuVI = hs_writezuside26DuIW.hscall();
            }
            switch (hs_wild26DuVI.tag) {
            case 1:
                var hs_rb26DuJ1 = hs_wild26DuVI.data[1];
                var hs_writezum26DuJ2 = new $hs.Data(1);
                hs_writezum26DuJ2.data = [hs_rb26DuJ1];
                var hs_sat26DuVR = new $hs.Func(1);
                hs_sat26DuVR.evaluate = function (hs_readzuside26DuJ6) {
                    var hs_wild126DuVL = hs_readzuside26DuJ6;
                    if (hs_readzuside26DuJ6.notEvaluated) {
                        hs_wild126DuVL = hs_readzuside26DuJ6.hscall();
                    }
                    switch (hs_wild126DuVL.tag) {
                    case 1:
                        var hs_rb126DuJc = hs_wild126DuVL.data[1];
                        var hs_sat26DuVM = new $hs.Thunk();
                        hs_sat26DuVM.evaluateOnce = function () {
                            var hs_tpl26DuVJ = hs_writezum26DuJ2;
                            if (hs_writezum26DuJ2.notEvaluated) {
                                hs_tpl26DuVJ = hs_writezum26DuJ2.hscall();
                            }
                            var hs_tpl126DuJd = hs_tpl26DuVJ.data[0];
                            var $res = new $hs.Data(2);
                            $res.data = [hs_filepath26DuIQ, hs_rb126DuJc, hs_tpl126DuJd];
                            return $res;
                        };
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuVM);
                    case 2:
                        var hs_sat26DuVQ = new $hs.Thunk();
                        hs_sat26DuVQ.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at ../../ghc-7.0.2/libraries/base/GHC/IO/Handle/Internals.hs:638:3-33\x00");
                        };
                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuVQ);
                    }
                };
                var hs_sat26DuVT = new $hs.Thunk();
                hs_sat26DuVT.evaluateOnce = function () {
                    var hs_sat26DuVS = new $hs.Data(2);
                    hs_sat26DuVS.data = [hs_writezum26DuJ2];
                    return $hs.modules.GHCziIOziHandleziInternals.hs_mkHandle.hscall(hs_zddIODevice26DuIM, hs_zddBufferedIO26DuIN, hs_zddTypeable26DuIO, hs_dev26DuIP, hs_filepath26DuIQ, $hs.modules.GHCziIOziHandleziTypes.hs_ReadHandle, $hs.modules.GHCziBool.hs_True, hs_mbzucodec26DuIR, hs_trzunewlines26DuIS, $hs.modules.DataziMaybe.hs_Nothing, hs_sat26DuVS);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuVT, hs_sat26DuVR);
            case 2:
                var hs_sat26DuVX = new $hs.Thunk();
                hs_sat26DuVX.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at ../../ghc-7.0.2/libraries/base/GHC/IO/Handle/Internals.hs:632:3-35\x00");
                };
                return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuVX);
            }
        };
        var hs_sat26DuW0 = new $hs.Thunk();
        hs_sat26DuW0.evaluateOnce = function () {
            var hs_sat26DuVZ = new $hs.Data(2);
            hs_sat26DuVZ.data = [$hs.modules.GHCziIOziHandleziInternals.hs_handleFinalizzer];
            return $hs.modules.GHCziIOziHandleziInternals.hs_mkHandle.hscall(hs_zddIODevice26DuIM, hs_zddBufferedIO26DuIN, hs_zddTypeable26DuIO, hs_dev26DuIP, hs_filepath26DuIQ, $hs.modules.GHCziIOziHandleziTypes.hs_WriteHandle, $hs.modules.GHCziBool.hs_True, hs_mbzucodec26DuIR, hs_trzunewlines26DuIS, hs_sat26DuVZ, $hs.modules.DataziMaybe.hs_Nothing);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DuW0, hs_sat26DuVY);
    };
};
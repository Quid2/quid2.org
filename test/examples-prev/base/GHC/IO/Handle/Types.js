
$hs.modules.GHCziIOziHandleziTypes = new $hs.Module();
$hs.modules.GHCziIOziHandleziTypes.dependencies = ["GHC.Prim", "GHC.Types", "GHC.Unit", "Data.Maybe", "GHC.Base", "GHC.Show", "Data.Typeable", "GHC.Classes", "GHC.MVar", "GHC.Read", "Text.ParserCombinators.ReadPrec"];
$hs.modules.GHCziIOziHandleziTypes.initBeforeDependencies = function () {
    this.hs_zdWHandlezuzu = new $hs.Func(16);
    this.hs_zdWFileHandle = new $hs.Func(2);
    this.hs_zdWDuplexHandle = new $hs.Func(3);
    this.hs_showHandle = new $hs.Func(1);
    this.hs_noNewlineTranslation = new $hs.Data(1);
    this.hs_nativeNewline = new $hs.Data(1);
    this.hs_universalNewlineMode = new $hs.Data(1);
    this.hs_nativeNewlineMode = new $hs.Data(1);
    this.hs_isReadWriteHandleType = new $hs.Func(1);
    this.hs_isWritableHandleType = new $hs.Func(1);
    this.hs_isReadableHandleType = new $hs.Func(1);
    this.hs_haOtherSide = new $hs.Func(1);
    this.hs_haOutputNL = new $hs.Func(1);
    this.hs_haInputNL = new $hs.Func(1);
    this.hs_haCodec = new $hs.Func(1);
    this.hs_haDecoder = new $hs.Data(1);
    this.hs_haEncoder = new $hs.Data(1);
    this.hs_haBuffers = new $hs.Func(1);
    this.hs_haCharBuffer = new $hs.Func(1);
    this.hs_haLastDecode = new $hs.Data(1);
    this.hs_haBufferMode = new $hs.Func(1);
    this.hs_haByteBuffer = new $hs.Func(1);
    this.hs_haType = new $hs.Func(1);
    this.hs_haDevice = new $hs.Data(1);
    this.hs_outputNL = new $hs.Func(1);
    this.hs_inputNL = new $hs.Func(1);
    this.hs_zdfEqHandle = new $hs.Data(1);
    this.hs_zdfShowHandleType = new $hs.Data(1);
    this.hs_zdfShowHandle = new $hs.Data(1);
    this.hs_zdfShowNewline = new $hs.Data(1);
    this.hs_zdfShowNewlineMode = new $hs.Data(1);
    this.hs_zdfReadNewline = new $hs.Data(1);
    this.hs_zdfReadNewlineMode = new $hs.Data(1);
    this.hs_zdfEqNewline = new $hs.Data(1);
    this.hs_zdfOrdNewline = new $hs.Data(1);
    this.hs_zdfEqNewlineMode = new $hs.Data(1);
    this.hs_zdfOrdNewlineMode = new $hs.Data(1);
    this.hs_zdfShowBufferMode = new $hs.Data(1);
    this.hs_zdfReadBufferMode = new $hs.Data(1);
    this.hs_zdfEqBufferMode = new $hs.Data(1);
    this.hs_zdfOrdBufferMode = new $hs.Data(1);
    this.hs_zdfTypeableHandle = new $hs.Thunk();
    this.hs_zdfTypeableHandlezuzu = new $hs.Thunk();
    this.hs_checkHandleInvariants = new $hs.Func(1);
    this.hs_NewlineMode = new $hs.Func(2);
    this.hs_LF = new $hs.Data(1);
    this.hs_CRLF = new $hs.Data(2);
    this.hs_NoBuffering = new $hs.Data(1);
    this.hs_LineBuffering = new $hs.Data(2);
    this.hs_BlockBuffering = new $hs.Func(1);
    this.hs_ClosedHandle = new $hs.Data(1);
    this.hs_SemiClosedHandle = new $hs.Data(2);
    this.hs_ReadHandle = new $hs.Data(3);
    this.hs_WriteHandle = new $hs.Data(4);
    this.hs_AppendHandle = new $hs.Data(5);
    this.hs_ReadWriteHandle = new $hs.Data(6);
    this.hs_BufferListNil = new $hs.Data(1);
    this.hs_BufferListCons = new $hs.Func(2);
    this.hs_Handlezuzu = new $hs.Func(16);
    this.hs_FileHandle = new $hs.Func(2);
    this.hs_DuplexHandle = new $hs.Func(3);
    this.hs_zdWHandlezuzu.notEvaluated = true;
    this.hs_zdWHandlezuzu.evaluate = function (hs_tpl26DtrR, hs_tpl26DtrS, hs_tpl26DtrT, hs_tpl26DtrD, hs_tpl26DtrV, hs_tpl26DtrF, hs_tpl26DtrX, hs_tpl26DtrI, hs_tpl26DtrL, hs_tpl26DtrO, hs_tpl26Dts1, hs_tpl26Dts2, hs_tpl26Dts3, hs_tpl26Dts4, hs_tpl26Dts5, hs_tpl26Dts6) {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluate(hs_tpl26DtrR, hs_tpl26DtrS, hs_tpl26DtrT, hs_tpl26DtrD, hs_tpl26DtrV, hs_tpl26DtrF, hs_tpl26DtrX, hs_tpl26DtrI, hs_tpl26DtrL, hs_tpl26DtrO, hs_tpl26Dts1, hs_tpl26Dts2, hs_tpl26Dts3, hs_tpl26Dts4, hs_tpl26Dts5, hs_tpl26Dts6);
    };
    this.hs_zdWFileHandle.notEvaluated = true;
    this.hs_zdWFileHandle.evaluate = function (hs_tpl26Dtsc, hs_tpl26Dts9) {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluate(hs_tpl26Dtsc, hs_tpl26Dts9);
    };
    this.hs_zdWDuplexHandle.notEvaluated = true;
    this.hs_zdWDuplexHandle.evaluate = function (hs_tpl26Dtsn, hs_tpl26Dtsh, hs_tpl26Dtsk) {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluate(hs_tpl26Dtsn, hs_tpl26Dtsh, hs_tpl26Dtsk);
    };
    this.hs_showHandle.notEvaluated = true;
    this.hs_showHandle.evaluate = function (hs_file26Dtst) {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluate(hs_file26Dtst);
    };
    this.hs_noNewlineTranslation.notEvaluated = true;
    this.hs_noNewlineTranslation.evaluate = function () {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this;
    };
    this.hs_nativeNewline.notEvaluated = true;
    this.hs_nativeNewline.evaluate = function () {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this;
    };
    this.hs_universalNewlineMode.notEvaluated = true;
    this.hs_universalNewlineMode.evaluate = function () {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this;
    };
    this.hs_nativeNewlineMode.notEvaluated = true;
    this.hs_nativeNewlineMode.evaluate = function () {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this;
    };
    this.hs_isReadWriteHandleType.notEvaluated = true;
    this.hs_isReadWriteHandleType.evaluate = function (hs_ds26DtsA) {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluate(hs_ds26DtsA);
    };
    this.hs_isWritableHandleType.notEvaluated = true;
    this.hs_isWritableHandleType.evaluate = function (hs_ds26DtsD) {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluate(hs_ds26DtsD);
    };
    this.hs_isReadableHandleType.notEvaluated = true;
    this.hs_isReadableHandleType.evaluate = function (hs_ds26DtsG) {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluate(hs_ds26DtsG);
    };
    this.hs_haOtherSide.notEvaluated = true;
    this.hs_haOtherSide.evaluate = function (hs_ds26DtsJ) {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluate(hs_ds26DtsJ);
    };
    this.hs_haOutputNL.notEvaluated = true;
    this.hs_haOutputNL.evaluate = function (hs_ds26Dtt3) {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluate(hs_ds26Dtt3);
    };
    this.hs_haInputNL.notEvaluated = true;
    this.hs_haInputNL.evaluate = function (hs_ds26Dttn) {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluate(hs_ds26Dttn);
    };
    this.hs_haCodec.notEvaluated = true;
    this.hs_haCodec.evaluate = function (hs_ds26DttH) {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluate(hs_ds26DttH);
    };
    this.hs_haDecoder.notEvaluated = true;
    this.hs_haDecoder.evaluate = function () {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this;
    };
    this.hs_haEncoder.notEvaluated = true;
    this.hs_haEncoder.evaluate = function () {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this;
    };
    this.hs_haBuffers.notEvaluated = true;
    this.hs_haBuffers.evaluate = function (hs_ds26Dtu1) {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluate(hs_ds26Dtu1);
    };
    this.hs_haCharBuffer.notEvaluated = true;
    this.hs_haCharBuffer.evaluate = function (hs_ds26Dtul) {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluate(hs_ds26Dtul);
    };
    this.hs_haLastDecode.notEvaluated = true;
    this.hs_haLastDecode.evaluate = function () {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this;
    };
    this.hs_haBufferMode.notEvaluated = true;
    this.hs_haBufferMode.evaluate = function (hs_ds26DtuF) {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluate(hs_ds26DtuF);
    };
    this.hs_haByteBuffer.notEvaluated = true;
    this.hs_haByteBuffer.evaluate = function (hs_ds26DtuZ) {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluate(hs_ds26DtuZ);
    };
    this.hs_haType.notEvaluated = true;
    this.hs_haType.evaluate = function (hs_ds26Dtvj) {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluate(hs_ds26Dtvj);
    };
    this.hs_haDevice.notEvaluated = true;
    this.hs_haDevice.evaluate = function () {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this;
    };
    this.hs_outputNL.notEvaluated = true;
    this.hs_outputNL.evaluate = function (hs_ds26DtvD) {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluate(hs_ds26DtvD);
    };
    this.hs_inputNL.notEvaluated = true;
    this.hs_inputNL.evaluate = function (hs_ds26DtvJ) {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluate(hs_ds26DtvJ);
    };
    this.hs_zdfEqHandle.notEvaluated = true;
    this.hs_zdfEqHandle.evaluate = function () {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfShowHandleType.notEvaluated = true;
    this.hs_zdfShowHandleType.evaluate = function () {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfShowHandle.notEvaluated = true;
    this.hs_zdfShowHandle.evaluate = function () {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfShowNewline.notEvaluated = true;
    this.hs_zdfShowNewline.evaluate = function () {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfShowNewlineMode.notEvaluated = true;
    this.hs_zdfShowNewlineMode.evaluate = function () {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfReadNewline.notEvaluated = true;
    this.hs_zdfReadNewline.evaluate = function () {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfReadNewlineMode.notEvaluated = true;
    this.hs_zdfReadNewlineMode.evaluate = function () {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEqNewline.notEvaluated = true;
    this.hs_zdfEqNewline.evaluate = function () {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfOrdNewline.notEvaluated = true;
    this.hs_zdfOrdNewline.evaluate = function () {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEqNewlineMode.notEvaluated = true;
    this.hs_zdfEqNewlineMode.evaluate = function () {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfOrdNewlineMode.notEvaluated = true;
    this.hs_zdfOrdNewlineMode.evaluate = function () {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfShowBufferMode.notEvaluated = true;
    this.hs_zdfShowBufferMode.evaluate = function () {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfReadBufferMode.notEvaluated = true;
    this.hs_zdfReadBufferMode.evaluate = function () {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEqBufferMode.notEvaluated = true;
    this.hs_zdfEqBufferMode.evaluate = function () {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfOrdBufferMode.notEvaluated = true;
    this.hs_zdfOrdBufferMode.evaluate = function () {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfTypeableHandle.evaluateOnce = function () {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfTypeableHandlezuzu.evaluateOnce = function () {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_checkHandleInvariants.notEvaluated = true;
    this.hs_checkHandleInvariants.evaluate = function (hs_ds26DtGX) {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluate(hs_ds26DtGX);
    };
    this.hs_NewlineMode.notEvaluated = true;
    this.hs_NewlineMode.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_LF.notEvaluated = true;
    this.hs_LF.evaluate = function () {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this;
    };
    this.hs_CRLF.notEvaluated = true;
    this.hs_CRLF.evaluate = function () {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this;
    };
    this.hs_NoBuffering.notEvaluated = true;
    this.hs_NoBuffering.evaluate = function () {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this;
    };
    this.hs_LineBuffering.notEvaluated = true;
    this.hs_LineBuffering.evaluate = function () {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this;
    };
    this.hs_BlockBuffering.notEvaluated = true;
    this.hs_BlockBuffering.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_ClosedHandle.notEvaluated = true;
    this.hs_ClosedHandle.evaluate = function () {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this;
    };
    this.hs_SemiClosedHandle.notEvaluated = true;
    this.hs_SemiClosedHandle.evaluate = function () {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this;
    };
    this.hs_ReadHandle.notEvaluated = true;
    this.hs_ReadHandle.evaluate = function () {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this;
    };
    this.hs_WriteHandle.notEvaluated = true;
    this.hs_WriteHandle.evaluate = function () {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this;
    };
    this.hs_AppendHandle.notEvaluated = true;
    this.hs_AppendHandle.evaluate = function () {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this;
    };
    this.hs_ReadWriteHandle.notEvaluated = true;
    this.hs_ReadWriteHandle.evaluate = function () {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this;
    };
    this.hs_BufferListNil.notEvaluated = true;
    this.hs_BufferListNil.evaluate = function () {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this;
    };
    this.hs_BufferListCons.notEvaluated = true;
    this.hs_BufferListCons.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_Handlezuzu.notEvaluated = true;
    this.hs_Handlezuzu.evaluate = function (hs_eta1cW6li, hs_eta1cW6lh, hs_eta1cW6lg, hs_eta1cW6lf, hs_eta1cW6le, hs_eta1cW6ld, hs_eta1cW6lc, hs_eta1cW6lb, hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6li, hs_eta1cW6lh, hs_eta1cW6lg, hs_eta1cW6lf, hs_eta1cW6le, hs_eta1cW6ld, hs_eta1cW6lc, hs_eta1cW6lb, hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_FileHandle.notEvaluated = true;
    this.hs_FileHandle.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_DuplexHandle.notEvaluated = true;
    this.hs_DuplexHandle.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
};
$hs.modules.GHCziIOziHandleziTypes.initAfterDependencies = function () {
    this.hs_zdWHandlezuzu.notEvaluated = false;
    this.hs_zdWFileHandle.notEvaluated = false;
    this.hs_zdWDuplexHandle.notEvaluated = false;
    this.hs_showHandle.notEvaluated = false;
    this.hs_noNewlineTranslation.notEvaluated = false;
    this.hs_noNewlineTranslation.evaluate = function () {
        return this;
    };
    this.hs_nativeNewline.notEvaluated = false;
    this.hs_nativeNewline.evaluate = function () {
        return this;
    };
    this.hs_universalNewlineMode.notEvaluated = false;
    this.hs_universalNewlineMode.evaluate = function () {
        return this;
    };
    this.hs_nativeNewlineMode.notEvaluated = false;
    this.hs_nativeNewlineMode.evaluate = function () {
        return this;
    };
    this.hs_isReadWriteHandleType.notEvaluated = false;
    this.hs_isWritableHandleType.notEvaluated = false;
    this.hs_isReadableHandleType.notEvaluated = false;
    this.hs_haOtherSide.notEvaluated = false;
    this.hs_haOutputNL.notEvaluated = false;
    this.hs_haInputNL.notEvaluated = false;
    this.hs_haCodec.notEvaluated = false;
    this.hs_haDecoder.notEvaluated = false;
    this.hs_haDecoder.evaluate = function () {
        return this;
    };
    this.hs_haEncoder.notEvaluated = false;
    this.hs_haEncoder.evaluate = function () {
        return this;
    };
    this.hs_haBuffers.notEvaluated = false;
    this.hs_haCharBuffer.notEvaluated = false;
    this.hs_haLastDecode.notEvaluated = false;
    this.hs_haLastDecode.evaluate = function () {
        return this;
    };
    this.hs_haBufferMode.notEvaluated = false;
    this.hs_haByteBuffer.notEvaluated = false;
    this.hs_haType.notEvaluated = false;
    this.hs_haDevice.notEvaluated = false;
    this.hs_haDevice.evaluate = function () {
        return this;
    };
    this.hs_outputNL.notEvaluated = false;
    this.hs_inputNL.notEvaluated = false;
    this.hs_zdfEqHandle.notEvaluated = false;
    this.hs_zdfEqHandle.evaluate = function () {
        return this;
    };
    this.hs_zdfShowHandleType.notEvaluated = false;
    this.hs_zdfShowHandleType.evaluate = function () {
        return this;
    };
    this.hs_zdfShowHandle.notEvaluated = false;
    this.hs_zdfShowHandle.evaluate = function () {
        return this;
    };
    this.hs_zdfShowNewline.notEvaluated = false;
    this.hs_zdfShowNewline.evaluate = function () {
        return this;
    };
    this.hs_zdfShowNewlineMode.notEvaluated = false;
    this.hs_zdfShowNewlineMode.evaluate = function () {
        return this;
    };
    this.hs_zdfReadNewline.notEvaluated = false;
    this.hs_zdfReadNewline.evaluate = function () {
        return this;
    };
    this.hs_zdfReadNewlineMode.notEvaluated = false;
    this.hs_zdfReadNewlineMode.evaluate = function () {
        return this;
    };
    this.hs_zdfEqNewline.notEvaluated = false;
    this.hs_zdfEqNewline.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdNewline.notEvaluated = false;
    this.hs_zdfOrdNewline.evaluate = function () {
        return this;
    };
    this.hs_zdfEqNewlineMode.notEvaluated = false;
    this.hs_zdfEqNewlineMode.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdNewlineMode.notEvaluated = false;
    this.hs_zdfOrdNewlineMode.evaluate = function () {
        return this;
    };
    this.hs_zdfShowBufferMode.notEvaluated = false;
    this.hs_zdfShowBufferMode.evaluate = function () {
        return this;
    };
    this.hs_zdfReadBufferMode.notEvaluated = false;
    this.hs_zdfReadBufferMode.evaluate = function () {
        return this;
    };
    this.hs_zdfEqBufferMode.notEvaluated = false;
    this.hs_zdfEqBufferMode.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdBufferMode.notEvaluated = false;
    this.hs_zdfOrdBufferMode.evaluate = function () {
        return this;
    };
    this.hs_checkHandleInvariants.notEvaluated = false;
    this.hs_NewlineMode.notEvaluated = false;
    this.hs_LF.notEvaluated = false;
    this.hs_LF.evaluate = function () {
        return this;
    };
    this.hs_CRLF.notEvaluated = false;
    this.hs_CRLF.evaluate = function () {
        return this;
    };
    this.hs_NoBuffering.notEvaluated = false;
    this.hs_NoBuffering.evaluate = function () {
        return this;
    };
    this.hs_LineBuffering.notEvaluated = false;
    this.hs_LineBuffering.evaluate = function () {
        return this;
    };
    this.hs_BlockBuffering.notEvaluated = false;
    this.hs_ClosedHandle.notEvaluated = false;
    this.hs_ClosedHandle.evaluate = function () {
        return this;
    };
    this.hs_SemiClosedHandle.notEvaluated = false;
    this.hs_SemiClosedHandle.evaluate = function () {
        return this;
    };
    this.hs_ReadHandle.notEvaluated = false;
    this.hs_ReadHandle.evaluate = function () {
        return this;
    };
    this.hs_WriteHandle.notEvaluated = false;
    this.hs_WriteHandle.evaluate = function () {
        return this;
    };
    this.hs_AppendHandle.notEvaluated = false;
    this.hs_AppendHandle.evaluate = function () {
        return this;
    };
    this.hs_ReadWriteHandle.notEvaluated = false;
    this.hs_ReadWriteHandle.evaluate = function () {
        return this;
    };
    this.hs_BufferListNil.notEvaluated = false;
    this.hs_BufferListNil.evaluate = function () {
        return this;
    };
    this.hs_BufferListCons.notEvaluated = false;
    this.hs_Handlezuzu.notEvaluated = false;
    this.hs_FileHandle.notEvaluated = false;
    this.hs_DuplexHandle.notEvaluated = false;
    var hs_zddEq25v4Zz = new $hs.Thunk();
    var hs_zdczeze25v4ZB = new $hs.Func(2);
    var hs_zdczsze25v507 = new $hs.Thunk();
    var hs_zdcshowsPrec25v509 = new $hs.Func(2);
    var hs_zdcshowList25v50m = new $hs.Thunk();
    var hs_zdcshow25v50o = new $hs.Thunk();
    var hs_zdcshowsPrec125v50q = new $hs.Func(2);
    var hs_zdcshowList125v50E = new $hs.Thunk();
    var hs_zdcshow125v50G = new $hs.Thunk();
    var hs_zdcshowsPrec225v50I = new $hs.Func(2);
    var hs_sat26DtK9 = new $hs.Thunk();
    var hs_zdcshowList225v50R = new $hs.Thunk();
    var hs_zdcshow225v50T = new $hs.Thunk();
    var hs_zdcshowsPrec325v50X = new $hs.Func(2);
    var hs_sat26DtKz = new $hs.Thunk();
    var hs_zdcshowList325v51v = new $hs.Thunk();
    var hs_zdcshow325v51x = new $hs.Thunk();
    var hs_sat26DtKJ = new $hs.Thunk();
    var hs_zdcreadPrec25v51B = new $hs.Thunk();
    var hs_zdcreadListPrec25v51M = new $hs.Thunk();
    var hs_zdcreadList25v51O = new $hs.Thunk();
    var hs_zdcreadsPrec25v51Q = new $hs.Thunk();
    var hs_sat26DtLR = new $hs.Thunk();
    var hs_zdcreadPrec125v51S = new $hs.Thunk();
    var hs_zdcreadListPrec125v54C = new $hs.Thunk();
    var hs_zdcreadList125v54E = new $hs.Thunk();
    var hs_zdcreadsPrec125v54G = new $hs.Thunk();
    var hs_zdczlze25v54I = new $hs.Func(2);
    var hs_zdczg25v54R = new $hs.Func(2);
    var hs_zdczgze25v550 = new $hs.Func(2);
    var hs_zdczl25v559 = new $hs.Func(2);
    var hs_zdccompare25v55i = new $hs.Func(2);
    var hs_zdczeze125v55r = new $hs.Func(2);
    var hs_zdczsze125v55A = new $hs.Func(2);
    var hs_zdcmin25v55H = new $hs.Thunk();
    var hs_zdcmax25v55J = new $hs.Thunk();
    var hs_zdccompare125v55L = new $hs.Func(2);
    var hs_zdczl125v562 = new $hs.Func(2);
    var hs_zdczgze125v56j = new $hs.Func(2);
    var hs_zdczg125v56A = new $hs.Func(2);
    var hs_zdczlze125v56R = new $hs.Func(2);
    var hs_zdczeze225v578 = new $hs.Func(2);
    var hs_zdczsze225v57q = new $hs.Func(2);
    var hs_zdcmin125v57x = new $hs.Thunk();
    var hs_zdcmax125v57z = new $hs.Thunk();
    var hs_zddShow25v57B = new $hs.Thunk();
    var hs_zdcshowsPrec425v57D = new $hs.Func(2);
    var hs_sat26DtMF = new $hs.Thunk();
    var hs_zdcshowList425v57V = new $hs.Thunk();
    var hs_zdcshow425v57X = new $hs.Thunk();
    var hs_zddRead25v581 = new $hs.Thunk();
    var hs_sat26DtN2 = new $hs.Thunk();
    var hs_zdcreadPrec225v583 = new $hs.Thunk();
    var hs_zdcreadListPrec225v58B = new $hs.Thunk();
    var hs_zdcreadList225v58D = new $hs.Thunk();
    var hs_zdcreadsPrec225v58F = new $hs.Thunk();
    var hs_zddOrd25v58H = new $hs.Thunk();
    var hs_zdczlze225v58J = new $hs.Func(2);
    var hs_zdczg225v58Y = new $hs.Func(2);
    var hs_zdczgze225v59d = new $hs.Func(2);
    var hs_zdczl225v59s = new $hs.Func(2);
    var hs_zdccompare225v59H = new $hs.Func(2);
    var hs_zdczeze325v59W = new $hs.Func(2);
    var hs_zdczsze325v5ak = new $hs.Func(2);
    var hs_zdcmin225v5ar = new $hs.Thunk();
    var hs_zdcmax225v5at = new $hs.Thunk();
    var hs_zdctypeOf25v5av = new $hs.Func(1);
    var hs_zdctypeOf125v5aB = new $hs.Func(1);
    this.hs_zdWHandlezuzu.evaluate = function (hs_tpl26DtrR, hs_tpl26DtrS, hs_tpl26DtrT, hs_tpl26DtrD, hs_tpl26DtrV, hs_tpl26DtrF, hs_tpl26DtrX, hs_tpl26DtrI, hs_tpl26DtrL, hs_tpl26DtrO, hs_tpl26Dts1, hs_tpl26Dts2, hs_tpl26Dts3, hs_tpl26Dts4, hs_tpl26Dts5, hs_tpl26Dts6) {
        var hs_tpl26DtrU = hs_tpl26DtrD;
        if (hs_tpl26DtrD.notEvaluated) {
            hs_tpl26DtrU = hs_tpl26DtrD.hscall();
        }
        var hs_tpl26DtH1 = hs_tpl26DtrF;
        if (hs_tpl26DtrF.notEvaluated) {
            hs_tpl26DtH1 = hs_tpl26DtrF.hscall();
        }
        var hs_tpl26DtrW = hs_tpl26DtH1.data[0];
        var hs_tpl26DtH0 = hs_tpl26DtrI;
        if (hs_tpl26DtrI.notEvaluated) {
            hs_tpl26DtH0 = hs_tpl26DtrI.hscall();
        }
        var hs_tpl26DtrY = hs_tpl26DtH0.data[0];
        var hs_tpl26DtGZ = hs_tpl26DtrL;
        if (hs_tpl26DtrL.notEvaluated) {
            hs_tpl26DtGZ = hs_tpl26DtrL.hscall();
        }
        var hs_tpl26DtrZ = hs_tpl26DtGZ.data[0];
        var hs_tpl26DtGY = hs_tpl26DtrO;
        if (hs_tpl26DtrO.notEvaluated) {
            hs_tpl26DtGY = hs_tpl26DtrO.hscall();
        }
        var hs_tpl26Dts0 = hs_tpl26DtGY.data[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26DtrR, hs_tpl26DtrS, hs_tpl26DtrT, hs_tpl26DtrU, hs_tpl26DtrV, hs_tpl26DtrW, hs_tpl26DtrX, hs_tpl26DtrY, hs_tpl26DtrZ, hs_tpl26Dts0, hs_tpl26Dts1, hs_tpl26Dts2, hs_tpl26Dts3, hs_tpl26Dts4, hs_tpl26Dts5, hs_tpl26Dts6];
        return $res;
    };
    this.hs_zdWFileHandle.evaluate = function (hs_tpl26Dtsc, hs_tpl26Dts9) {
        var hs_tpl26DtH2 = hs_tpl26Dts9;
        if (hs_tpl26Dts9.notEvaluated) {
            hs_tpl26DtH2 = hs_tpl26Dts9.hscall();
        }
        var hs_tpl26Dtsd = hs_tpl26DtH2.data[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26Dtsc, hs_tpl26Dtsd];
        return $res;
    };
    this.hs_zdWDuplexHandle.evaluate = function (hs_tpl26Dtsn, hs_tpl26Dtsh, hs_tpl26Dtsk) {
        var hs_tpl26DtH4 = hs_tpl26Dtsh;
        if (hs_tpl26Dtsh.notEvaluated) {
            hs_tpl26DtH4 = hs_tpl26Dtsh.hscall();
        }
        var hs_tpl26Dtso = hs_tpl26DtH4.data[0];
        var hs_tpl26DtH3 = hs_tpl26Dtsk;
        if (hs_tpl26Dtsk.notEvaluated) {
            hs_tpl26DtH3 = hs_tpl26Dtsk.hscall();
        }
        var hs_tpl26Dtsp = hs_tpl26DtH3.data[0];
        var $res = new $hs.Data(2);
        $res.data = [hs_tpl26Dtsn, hs_tpl26Dtso, hs_tpl26Dtsp];
        return $res;
    };
    this.hs_showHandle.evaluate = function (hs_file26Dtst) {
        var hs_sat26DtH9 = new $hs.Thunk();
        hs_sat26DtH9.evaluateOnce = function () {
            var hs_sat26DtH7 = new $hs.Thunk();
            hs_sat26DtH7.evaluateOnce = function () {
                var hs_sat26DtH5 = new $hs.Data(1);
                hs_sat26DtH5.data = ["}"];
                var hs_sat26DtH6 = new $hs.Data(2);
                hs_sat26DtH6.data = [hs_sat26DtH5, $hs.modules.GHCziTypes.hs_ZMZN];
                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DtH6);
            };
            var hs_sat26DtH8 = new $hs.Thunk();
            hs_sat26DtH8.evaluateOnce = function () {
                return $hs.modules.GHCziShow.hs_showString.hscall(hs_file26Dtst);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DtH8, hs_sat26DtH7);
        };
        var hs_sat26DtHb = new $hs.Thunk();
        hs_sat26DtHb.evaluateOnce = function () {
            var hs_sat26DtHa = new $hs.Thunk();
            hs_sat26DtHa.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("{handle: \x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DtHa);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DtHb, hs_sat26DtH9);
    };
    this.hs_noNewlineTranslation.data = [$hs.modules.GHCziIOziHandleziTypes.hs_LF, $hs.modules.GHCziIOziHandleziTypes.hs_LF];
    this.hs_nativeNewline.data = [];
    this.hs_universalNewlineMode.data = [$hs.modules.GHCziIOziHandleziTypes.hs_CRLF, $hs.modules.GHCziIOziHandleziTypes.hs_LF];
    this.hs_nativeNewlineMode.data = [$hs.modules.GHCziIOziHandleziTypes.hs_LF, $hs.modules.GHCziIOziHandleziTypes.hs_LF];
    this.hs_isReadWriteHandleType.evaluate = function (hs_ds26DtsA) {
        var hs_wild26DtHc = hs_ds26DtsA;
        if (hs_ds26DtsA.notEvaluated) {
            hs_wild26DtHc = hs_ds26DtsA.hscall();
        }
        switch (hs_wild26DtHc.tag) {
        case 6:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        default:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    this.hs_isWritableHandleType.evaluate = function (hs_ds26DtsD) {
        var hs_wild26DtHd = hs_ds26DtsD;
        if (hs_ds26DtsD.notEvaluated) {
            hs_wild26DtHd = hs_ds26DtsD.hscall();
        }
        switch (hs_wild26DtHd.tag) {
        case 4:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 5:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 6:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        default:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    this.hs_isReadableHandleType.evaluate = function (hs_ds26DtsG) {
        var hs_wild26DtHe = hs_ds26DtsG;
        if (hs_ds26DtsG.notEvaluated) {
            hs_wild26DtHe = hs_ds26DtsG.hscall();
        }
        switch (hs_wild26DtHe.tag) {
        case 3:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 6:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        default:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    this.hs_haOtherSide.evaluate = function (hs_ds26DtsJ) {
        var hs_wild26DtHg = hs_ds26DtsJ;
        if (hs_ds26DtsJ.notEvaluated) {
            hs_wild26DtHg = hs_ds26DtsJ.hscall();
        }
        var hs_ds926Dtt1 = hs_wild26DtHg.data[15];
        if (hs_ds926Dtt1.notEvaluated) {
            return hs_ds926Dtt1.hscall();
        } else {
            return hs_ds926Dtt1;
        }
    };
    this.hs_haOutputNL.evaluate = function (hs_ds26Dtt3) {
        var hs_wild26DtHw = hs_ds26Dtt3;
        if (hs_ds26Dtt3.notEvaluated) {
            hs_wild26DtHw = hs_ds26Dtt3.hscall();
        }
        var hs_ds826Dttl = hs_wild26DtHw.data[14];
        if (hs_ds826Dttl.notEvaluated) {
            return hs_ds826Dttl.hscall();
        } else {
            return hs_ds826Dttl;
        }
    };
    this.hs_haInputNL.evaluate = function (hs_ds26Dttn) {
        var hs_wild26DtHM = hs_ds26Dttn;
        if (hs_ds26Dttn.notEvaluated) {
            hs_wild26DtHM = hs_ds26Dttn.hscall();
        }
        var hs_ds726DttF = hs_wild26DtHM.data[13];
        if (hs_ds726DttF.notEvaluated) {
            return hs_ds726DttF.hscall();
        } else {
            return hs_ds726DttF;
        }
    };
    this.hs_haCodec.evaluate = function (hs_ds26DttH) {
        var hs_wild26DtI2 = hs_ds26DttH;
        if (hs_ds26DttH.notEvaluated) {
            hs_wild26DtI2 = hs_ds26DttH.hscall();
        }
        var hs_ds626DttZ = hs_wild26DtI2.data[12];
        if (hs_ds626DttZ.notEvaluated) {
            return hs_ds626DttZ.hscall();
        } else {
            return hs_ds626DttZ;
        }
    };
    this.hs_haDecoder.data = [];
    this.hs_haEncoder.data = [];
    this.hs_haBuffers.evaluate = function (hs_ds26Dtu1) {
        var hs_wild26DtIi = hs_ds26Dtu1;
        if (hs_ds26Dtu1.notEvaluated) {
            hs_wild26DtIi = hs_ds26Dtu1.hscall();
        }
        var hs_rb326Dtuj = hs_wild26DtIi.data[9];
        var $res = new $hs.Data(1);
        $res.data = [hs_rb326Dtuj];
        return $res;
    };
    this.hs_haCharBuffer.evaluate = function (hs_ds26Dtul) {
        var hs_wild26DtIy = hs_ds26Dtul;
        if (hs_ds26Dtul.notEvaluated) {
            hs_wild26DtIy = hs_ds26Dtul.hscall();
        }
        var hs_rb226DtuD = hs_wild26DtIy.data[8];
        var $res = new $hs.Data(1);
        $res.data = [hs_rb226DtuD];
        return $res;
    };
    this.hs_haLastDecode.data = [];
    this.hs_haBufferMode.evaluate = function (hs_ds26DtuF) {
        var hs_wild26DtIO = hs_ds26DtuF;
        if (hs_ds26DtuF.notEvaluated) {
            hs_wild26DtIO = hs_ds26DtuF.hscall();
        }
        var hs_ds326DtuX = hs_wild26DtIO.data[6];
        if (hs_ds326DtuX.notEvaluated) {
            return hs_ds326DtuX.hscall();
        } else {
            return hs_ds326DtuX;
        }
    };
    this.hs_haByteBuffer.evaluate = function (hs_ds26DtuZ) {
        var hs_wild26DtJ4 = hs_ds26DtuZ;
        if (hs_ds26DtuZ.notEvaluated) {
            hs_wild26DtJ4 = hs_ds26DtuZ.hscall();
        }
        var hs_rb26Dtvh = hs_wild26DtJ4.data[5];
        var $res = new $hs.Data(1);
        $res.data = [hs_rb26Dtvh];
        return $res;
    };
    this.hs_haType.evaluate = function (hs_ds26Dtvj) {
        var hs_wild26DtJk = hs_ds26Dtvj;
        if (hs_ds26Dtvj.notEvaluated) {
            hs_wild26DtJk = hs_ds26Dtvj.hscall();
        }
        var hs_ds226DtvB = hs_wild26DtJk.data[4];
        if (hs_ds226DtvB.notEvaluated) {
            return hs_ds226DtvB.hscall();
        } else {
            return hs_ds226DtvB;
        }
    };
    this.hs_haDevice.data = [];
    this.hs_outputNL.evaluate = function (hs_ds26DtvD) {
        var hs_wild26DtJA = hs_ds26DtvD;
        if (hs_ds26DtvD.notEvaluated) {
            hs_wild26DtJA = hs_ds26DtvD.hscall();
        }
        var hs_ds226DtvH = hs_wild26DtJA.data[1];
        if (hs_ds226DtvH.notEvaluated) {
            return hs_ds226DtvH.hscall();
        } else {
            return hs_ds226DtvH;
        }
    };
    this.hs_inputNL.evaluate = function (hs_ds26DtvJ) {
        var hs_wild26DtJB = hs_ds26DtvJ;
        if (hs_ds26DtvJ.notEvaluated) {
            hs_wild26DtJB = hs_ds26DtvJ.hscall();
        }
        var hs_ds126DtvN = hs_wild26DtJB.data[0];
        if (hs_ds126DtvN.notEvaluated) {
            return hs_ds126DtvN.hscall();
        } else {
            return hs_ds126DtvN;
        }
    };
    hs_zddEq25v4Zz.evaluateOnce = function () {
        return $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall($hs.modules.GHCziBase.hs_zdfEqInt);
    };
    hs_zdczeze25v4ZB.evaluate = function (hs_ds26DtvU, hs_ds126DtvY) {
        var hs_wild26DtJG = hs_ds26DtvU;
        if (hs_ds26DtvU.notEvaluated) {
            hs_wild26DtJG = hs_ds26DtvU.hscall();
        }
        switch (hs_wild26DtJG.tag) {
        case 1:
            var hs_rb26Dtw2 = hs_wild26DtJG.data[1];
            var hs_wild126DtJE = hs_ds126DtvY;
            if (hs_ds126DtvY.notEvaluated) {
                hs_wild126DtJE = hs_ds126DtvY.hscall();
            }
            switch (hs_wild126DtJE.tag) {
            case 1:
                var hs_rb126Dtw4 = hs_wild126DtJE.data[1];
                var hs_sat26DtJH = new $hs.Data(1);
                hs_sat26DtJH.data = [hs_rb126Dtw4];
                var hs_sat26DtJI = new $hs.Data(1);
                hs_sat26DtJI.data = [hs_rb26Dtw2];
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziMVar.hs_zdfEqMVar, hs_sat26DtJI, hs_sat26DtJH);
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_rb26Dtwi = hs_wild26DtJG.data[1];
            var hs_wild126DtJN = hs_ds126DtvY;
            if (hs_ds126DtvY.notEvaluated) {
                hs_wild126DtJN = hs_ds126DtvY.hscall();
            }
            switch (hs_wild126DtJN.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_rb226Dtwk = hs_wild126DtJN.data[1];
                var hs_sat26DtJT = new $hs.Data(1);
                hs_sat26DtJT.data = [hs_rb226Dtwk];
                var hs_sat26DtJU = new $hs.Data(1);
                hs_sat26DtJU.data = [hs_rb26Dtwi];
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziMVar.hs_zdfEqMVar, hs_sat26DtJU, hs_sat26DtJT);
            }
        }
    };
    this.hs_zdfEqHandle.data = [hs_zdczeze25v4ZB, hs_zdczsze25v507];
    hs_zdczsze25v507.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmzsze.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfEqHandle);
    };
    hs_zdcshowsPrec25v509.evaluate = function (hs_ds26DtwA, hs_t26Dtws) {
        var hs_wild26DtJV = hs_t26Dtws;
        if (hs_t26Dtws.notEvaluated) {
            hs_wild26DtJV = hs_t26Dtws.hscall();
        }
        switch (hs_wild26DtJV.tag) {
        case 1:
            var hs_sat26DtJW = new $hs.Thunk();
            hs_sat26DtJW.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("closed\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DtJW);
        case 2:
            var hs_sat26DtJX = new $hs.Thunk();
            hs_sat26DtJX.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("semi-closed\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DtJX);
        case 3:
            var hs_sat26DtJY = new $hs.Thunk();
            hs_sat26DtJY.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("readable\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DtJY);
        case 4:
            var hs_sat26DtJZ = new $hs.Thunk();
            hs_sat26DtJZ.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("writable\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DtJZ);
        case 5:
            var hs_sat26DtK0 = new $hs.Thunk();
            hs_sat26DtK0.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("writable (append)\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DtK0);
        case 6:
            var hs_sat26DtK1 = new $hs.Thunk();
            hs_sat26DtK1.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("read-writable\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DtK1);
        }
    };
    this.hs_zdfShowHandleType.data = [hs_zdcshowsPrec25v509, hs_zdcshow25v50o, hs_zdcshowList25v50m];
    hs_zdcshowList25v50m.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfShowHandleType);
    };
    hs_zdcshow25v50o.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfShowHandleType);
    };
    hs_zdcshowsPrec125v50q.evaluate = function (hs_ds26DtwS, hs_ds126DtwJ) {
        var hs_wild26DtK2 = hs_ds126DtwJ;
        if (hs_ds126DtwJ.notEvaluated) {
            hs_wild26DtK2 = hs_ds126DtwJ.hscall();
        }
        switch (hs_wild26DtK2.tag) {
        case 1:
            var hs_file26DtwN = hs_wild26DtK2.data[0];
            return $hs.modules.GHCziIOziHandleziTypes.hs_showHandle.hscall(hs_file26DtwN);
        case 2:
            var hs_file26DtwR = hs_wild26DtK2.data[0];
            return $hs.modules.GHCziIOziHandleziTypes.hs_showHandle.hscall(hs_file26DtwR);
        }
    };
    this.hs_zdfShowHandle.data = [hs_zdcshowsPrec125v50q, hs_zdcshow125v50G, hs_zdcshowList125v50E];
    hs_zdcshowList125v50E.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfShowHandle);
    };
    hs_zdcshow125v50G.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfShowHandle);
    };
    hs_zdcshowsPrec225v50I.evaluate = function (hs_ds26Dtx5, hs_ds126Dtx1) {
        var hs_wild26DtK6 = hs_ds126Dtx1;
        if (hs_ds126Dtx1.notEvaluated) {
            hs_wild26DtK6 = hs_ds126Dtx1.hscall();
        }
        switch (hs_wild26DtK6.tag) {
        case 1:
            var hs_sat26DtK7 = new $hs.Thunk();
            hs_sat26DtK7.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("LF\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DtK7);
        case 2:
            var hs_sat26DtK8 = new $hs.Thunk();
            hs_sat26DtK8.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CRLF\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DtK8);
        }
    };
    hs_sat26DtK9.evaluateOnce = function () {
        var hs_sat26DtKa = new $hs.Data(1);
        hs_sat26DtKa.data = [0];
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfShowNewline, hs_sat26DtKa);
    };
    this.hs_zdfShowNewline.data = [hs_zdcshowsPrec225v50I, hs_zdcshow225v50T, hs_zdcshowList225v50R];
    hs_zdcshowList225v50R.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DtK9);
    };
    hs_zdcshow225v50T.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfShowNewline);
    };
    hs_zdcshowsPrec325v50X.evaluate = function (hs_a26Dtxk, hs_ds26Dtxg) {
        var hs_wild26DtKb = hs_ds26Dtxg;
        if (hs_ds26Dtxg.notEvaluated) {
            hs_wild26DtKb = hs_ds26Dtxg.hscall();
        }
        var hs_b126Dtxs = hs_wild26DtKb.data[0];
        var hs_b226Dtxz = hs_wild26DtKb.data[1];
        var hs_sat26DtKw = new $hs.Thunk();
        hs_sat26DtKw.evaluateOnce = function () {
            var hs_sat26DtKt = new $hs.Thunk();
            hs_sat26DtKt.evaluateOnce = function () {
                var hs_sat26DtKq = new $hs.Thunk();
                hs_sat26DtKq.evaluateOnce = function () {
                    var hs_sat26DtKn = new $hs.Thunk();
                    hs_sat26DtKn.evaluateOnce = function () {
                        var hs_sat26DtKk = new $hs.Thunk();
                        hs_sat26DtKk.evaluateOnce = function () {
                            var hs_sat26DtKh = new $hs.Thunk();
                            hs_sat26DtKh.evaluateOnce = function () {
                                var hs_sat26DtKe = new $hs.Thunk();
                                hs_sat26DtKe.evaluateOnce = function () {
                                    var hs_sat26DtKc = new $hs.Data(1);
                                    hs_sat26DtKc.data = ["}"];
                                    var hs_sat26DtKd = new $hs.Data(2);
                                    hs_sat26DtKd.data = [hs_sat26DtKc, $hs.modules.GHCziTypes.hs_ZMZN];
                                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DtKd);
                                };
                                var hs_sat26DtKg = new $hs.Thunk();
                                hs_sat26DtKg.evaluateOnce = function () {
                                    var hs_sat26DtKf = new $hs.Data(1);
                                    hs_sat26DtKf.data = [0];
                                    return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfShowNewline, hs_sat26DtKf, hs_b226Dtxz);
                                };
                                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DtKg, hs_sat26DtKe);
                            };
                            var hs_sat26DtKj = new $hs.Thunk();
                            hs_sat26DtKj.evaluateOnce = function () {
                                var hs_sat26DtKi = new $hs.Thunk();
                                hs_sat26DtKi.evaluateOnce = function () {
                                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("outputNL = \x00");
                                };
                                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DtKi);
                            };
                            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DtKj, hs_sat26DtKh);
                        };
                        var hs_sat26DtKm = new $hs.Thunk();
                        hs_sat26DtKm.evaluateOnce = function () {
                            var hs_sat26DtKl = new $hs.Thunk();
                            hs_sat26DtKl.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall(", \x00");
                            };
                            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DtKl);
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DtKm, hs_sat26DtKk);
                    };
                    var hs_sat26DtKp = new $hs.Thunk();
                    hs_sat26DtKp.evaluateOnce = function () {
                        var hs_sat26DtKo = new $hs.Data(1);
                        hs_sat26DtKo.data = [0];
                        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfShowNewline, hs_sat26DtKo, hs_b126Dtxs);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DtKp, hs_sat26DtKn);
                };
                var hs_sat26DtKs = new $hs.Thunk();
                hs_sat26DtKs.evaluateOnce = function () {
                    var hs_sat26DtKr = new $hs.Thunk();
                    hs_sat26DtKr.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("inputNL = \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DtKr);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DtKs, hs_sat26DtKq);
            };
            var hs_sat26DtKv = new $hs.Thunk();
            hs_sat26DtKv.evaluateOnce = function () {
                var hs_sat26DtKu = new $hs.Thunk();
                hs_sat26DtKu.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("NewlineMode {\x00");
                };
                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DtKu);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DtKv, hs_sat26DtKt);
        };
        var hs_sat26DtKy = new $hs.Thunk();
        hs_sat26DtKy.evaluateOnce = function () {
            var hs_sat26DtKx = new $hs.Data(1);
            hs_sat26DtKx.data = [11];
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_a26Dtxk, hs_sat26DtKx);
        };
        return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DtKy, hs_sat26DtKw);
    };
    hs_sat26DtKz.evaluateOnce = function () {
        var hs_sat26DtKA = new $hs.Data(1);
        hs_sat26DtKA.data = [0];
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfShowNewlineMode, hs_sat26DtKA);
    };
    this.hs_zdfShowNewlineMode.data = [hs_zdcshowsPrec325v50X, hs_zdcshow325v51x, hs_zdcshowList325v51v];
    hs_zdcshowList325v51v.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DtKz);
    };
    hs_zdcshow325v51x.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfShowNewlineMode);
    };
    hs_sat26DtKJ.evaluateOnce = function () {
        var hs_sat26DtKB = new $hs.Thunk();
        hs_sat26DtKB.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziIOziHandleziTypes.hs_CRLF);
        };
        var hs_sat26DtKC = new $hs.Thunk();
        hs_sat26DtKC.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CRLF\x00");
        };
        var hs_sat26DtKD = new $hs.Data(1);
        hs_sat26DtKD.data = [hs_sat26DtKC, hs_sat26DtKB];
        var hs_sat26DtKE = new $hs.Data(2);
        hs_sat26DtKE.data = [hs_sat26DtKD, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26DtKF = new $hs.Thunk();
        hs_sat26DtKF.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziIOziHandleziTypes.hs_LF);
        };
        var hs_sat26DtKG = new $hs.Thunk();
        hs_sat26DtKG.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("LF\x00");
        };
        var hs_sat26DtKH = new $hs.Data(1);
        hs_sat26DtKH.data = [hs_sat26DtKG, hs_sat26DtKF];
        var hs_sat26DtKI = new $hs.Data(2);
        hs_sat26DtKI.data = [hs_sat26DtKH, hs_sat26DtKE];
        return $hs.modules.GHCziRead.hs_choose.hscall(hs_sat26DtKI);
    };
    hs_zdcreadPrec25v51B.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_parens.hscall(hs_sat26DtKJ);
    };
    this.hs_zdfReadNewline.data = [hs_zdcreadsPrec25v51Q, hs_zdcreadList25v51O, hs_zdcreadPrec25v51B, hs_zdcreadListPrec25v51M];
    hs_zdcreadListPrec25v51M.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListPrecDefault.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfReadNewline);
    };
    hs_zdcreadList25v51O.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListDefault.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfReadNewline);
    };
    hs_zdcreadsPrec25v51Q.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadsPrec.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfReadNewline);
    };
    hs_sat26DtLR.evaluateOnce = function () {
        var hs_sat26DtLP = new $hs.Thunk();
        hs_sat26DtLP.evaluateOnce = function () {
            var hs_sat26DtLO = new $hs.Func(1);
            hs_sat26DtLO.evaluate = function (hs_ds26Dtyg) {
                var hs_fail26Dtyf = new $hs.Func(1);
                hs_fail26Dtyf.evaluate = function (hs_ds126Dtye) {
                    var hs_sat26DtKK = new $hs.Thunk();
                    hs_sat26DtKK.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                    };
                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DtKK);
                };
                var hs_wild26DtKL = hs_ds26Dtyg;
                if (hs_ds26Dtyg.notEvaluated) {
                    hs_wild26DtKL = hs_ds26Dtyg.hscall();
                }
                switch (hs_wild26DtKL.tag) {
                case 4:
                    var hs_ds126Dtyj = hs_wild26DtKL.data[0];
                    var hs_sat26DtKN = new $hs.Thunk();
                    hs_sat26DtKN.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("NewlineMode\x00");
                    };
                    var hs_wild126DtKM = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds126Dtyj, hs_sat26DtKN);
                    switch (hs_wild126DtKM.tag) {
                    case 1:
                        return hs_fail26Dtyf.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    case 2:
                        var hs_sat26DtLN = new $hs.Func(1);
                        hs_sat26DtLN.evaluate = function (hs_ds226Dtys) {
                            var hs_fail126Dtyr = new $hs.Func(1);
                            hs_fail126Dtyr.evaluate = function (hs_ds326Dtyq) {
                                var hs_sat26DtKO = new $hs.Thunk();
                                hs_sat26DtKO.evaluateOnce = function () {
                                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                };
                                return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DtKO);
                            };
                            var hs_wild226DtKP = hs_ds226Dtys;
                            if (hs_ds226Dtys.notEvaluated) {
                                hs_wild226DtKP = hs_ds226Dtys.hscall();
                            }
                            switch (hs_wild226DtKP.tag) {
                            case 3:
                                var hs_ds326Dtyv = hs_wild226DtKP.data[0];
                                var hs_wild326DtKQ = hs_ds326Dtyv;
                                if (hs_ds326Dtyv.notEvaluated) {
                                    hs_wild326DtKQ = hs_ds326Dtyv.hscall();
                                }
                                switch (hs_wild326DtKQ.tag) {
                                case 1:
                                    return hs_fail126Dtyr.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                case 2:
                                    var hs_ds426Dtyz = hs_wild326DtKQ.data[0];
                                    var hs_ds526DtyE = hs_wild326DtKQ.data[1];
                                    var hs_wild426DtKS = hs_ds426Dtyz;
                                    if (hs_ds426Dtyz.notEvaluated) {
                                        hs_wild426DtKS = hs_ds426Dtyz.hscall();
                                    }
                                    var hs_ds626DtyC = hs_wild426DtKS.data[0];
                                    var hs_ds726DtKR = hs_ds626DtyC;
                                    if (hs_ds626DtyC.notEvaluated) {
                                        hs_ds726DtKR = hs_ds626DtyC.hscall();
                                    }
                                    switch (hs_ds726DtKR) {
                                    case "{":
                                        var hs_wild526DtKT = hs_ds526DtyE;
                                        if (hs_ds526DtyE.notEvaluated) {
                                            hs_wild526DtKT = hs_ds526DtyE.hscall();
                                        }
                                        switch (hs_wild526DtKT.tag) {
                                        case 1:
                                            var hs_sat26DtLK = new $hs.Func(1);
                                            hs_sat26DtLK.evaluate = function (hs_ds826DtyM) {
                                                var hs_fail226DtyL = new $hs.Func(1);
                                                hs_fail226DtyL.evaluate = function (hs_ds926DtyK) {
                                                    var hs_sat26DtKU = new $hs.Thunk();
                                                    hs_sat26DtKU.evaluateOnce = function () {
                                                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                    };
                                                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DtKU);
                                                };
                                                var hs_wild626DtKV = hs_ds826DtyM;
                                                if (hs_ds826DtyM.notEvaluated) {
                                                    hs_wild626DtKV = hs_ds826DtyM.hscall();
                                                }
                                                switch (hs_wild626DtKV.tag) {
                                                case 4:
                                                    var hs_ds926DtyP = hs_wild626DtKV.data[0];
                                                    var hs_sat26DtKX = new $hs.Thunk();
                                                    hs_sat26DtKX.evaluateOnce = function () {
                                                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("inputNL\x00");
                                                    };
                                                    var hs_wild726DtKW = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds926DtyP, hs_sat26DtKX);
                                                    switch (hs_wild726DtKW.tag) {
                                                    case 1:
                                                        return hs_fail226DtyL.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                    case 2:
                                                        var hs_sat26DtLJ = new $hs.Func(1);
                                                        hs_sat26DtLJ.evaluate = function (hs_ds1026DtyY) {
                                                            var hs_fail326DtyX = new $hs.Func(1);
                                                            hs_fail326DtyX.evaluate = function (hs_ds1126DtyW) {
                                                                var hs_sat26DtKY = new $hs.Thunk();
                                                                hs_sat26DtKY.evaluateOnce = function () {
                                                                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                                };
                                                                return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DtKY);
                                                            };
                                                            var hs_wild826DtKZ = hs_ds1026DtyY;
                                                            if (hs_ds1026DtyY.notEvaluated) {
                                                                hs_wild826DtKZ = hs_ds1026DtyY.hscall();
                                                            }
                                                            switch (hs_wild826DtKZ.tag) {
                                                            case 3:
                                                                var hs_ds1126Dtz1 = hs_wild826DtKZ.data[0];
                                                                var hs_wild926DtL0 = hs_ds1126Dtz1;
                                                                if (hs_ds1126Dtz1.notEvaluated) {
                                                                    hs_wild926DtL0 = hs_ds1126Dtz1.hscall();
                                                                }
                                                                switch (hs_wild926DtL0.tag) {
                                                                case 1:
                                                                    return hs_fail326DtyX.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                case 2:
                                                                    var hs_ds1226Dtz5 = hs_wild926DtL0.data[0];
                                                                    var hs_ds1326Dtza = hs_wild926DtL0.data[1];
                                                                    var hs_wild1026DtL2 = hs_ds1226Dtz5;
                                                                    if (hs_ds1226Dtz5.notEvaluated) {
                                                                        hs_wild1026DtL2 = hs_ds1226Dtz5.hscall();
                                                                    }
                                                                    var hs_ds1426Dtz8 = hs_wild1026DtL2.data[0];
                                                                    var hs_ds1526DtL1 = hs_ds1426Dtz8;
                                                                    if (hs_ds1426Dtz8.notEvaluated) {
                                                                        hs_ds1526DtL1 = hs_ds1426Dtz8.hscall();
                                                                    }
                                                                    switch (hs_ds1526DtL1) {
                                                                    case "=":
                                                                        var hs_wild1126DtL3 = hs_ds1326Dtza;
                                                                        if (hs_ds1326Dtza.notEvaluated) {
                                                                            hs_wild1126DtL3 = hs_ds1326Dtza.hscall();
                                                                        }
                                                                        switch (hs_wild1126DtL3.tag) {
                                                                        case 1:
                                                                            var hs_sat26DtLE = new $hs.Func(1);
                                                                            hs_sat26DtLE.evaluate = function (hs_a126DtAs) {
                                                                                var hs_sat26DtLD = new $hs.Func(1);
                                                                                hs_sat26DtLD.evaluate = function (hs_ds1626Dtzl) {
                                                                                    var hs_fail426Dtzk = new $hs.Func(1);
                                                                                    hs_fail426Dtzk.evaluate = function (hs_ds1726Dtzj) {
                                                                                        var hs_sat26DtL4 = new $hs.Thunk();
                                                                                        hs_sat26DtL4.evaluateOnce = function () {
                                                                                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                                                        };
                                                                                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DtL4);
                                                                                    };
                                                                                    var hs_wild1226DtL5 = hs_ds1626Dtzl;
                                                                                    if (hs_ds1626Dtzl.notEvaluated) {
                                                                                        hs_wild1226DtL5 = hs_ds1626Dtzl.hscall();
                                                                                    }
                                                                                    switch (hs_wild1226DtL5.tag) {
                                                                                    case 3:
                                                                                        var hs_ds1726Dtzo = hs_wild1226DtL5.data[0];
                                                                                        var hs_wild1326DtL6 = hs_ds1726Dtzo;
                                                                                        if (hs_ds1726Dtzo.notEvaluated) {
                                                                                            hs_wild1326DtL6 = hs_ds1726Dtzo.hscall();
                                                                                        }
                                                                                        switch (hs_wild1326DtL6.tag) {
                                                                                        case 1:
                                                                                            return hs_fail426Dtzk.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                        case 2:
                                                                                            var hs_ds1826Dtzs = hs_wild1326DtL6.data[0];
                                                                                            var hs_ds1926Dtzx = hs_wild1326DtL6.data[1];
                                                                                            var hs_wild1426DtL8 = hs_ds1826Dtzs;
                                                                                            if (hs_ds1826Dtzs.notEvaluated) {
                                                                                                hs_wild1426DtL8 = hs_ds1826Dtzs.hscall();
                                                                                            }
                                                                                            var hs_ds2026Dtzv = hs_wild1426DtL8.data[0];
                                                                                            var hs_ds2126DtL7 = hs_ds2026Dtzv;
                                                                                            if (hs_ds2026Dtzv.notEvaluated) {
                                                                                                hs_ds2126DtL7 = hs_ds2026Dtzv.hscall();
                                                                                            }
                                                                                            switch (hs_ds2126DtL7) {
                                                                                            case ",":
                                                                                                var hs_wild1526DtL9 = hs_ds1926Dtzx;
                                                                                                if (hs_ds1926Dtzx.notEvaluated) {
                                                                                                    hs_wild1526DtL9 = hs_ds1926Dtzx.hscall();
                                                                                                }
                                                                                                switch (hs_wild1526DtL9.tag) {
                                                                                                case 1:
                                                                                                    var hs_sat26DtLA = new $hs.Func(1);
                                                                                                    hs_sat26DtLA.evaluate = function (hs_ds2226DtzF) {
                                                                                                        var hs_fail526DtzE = new $hs.Func(1);
                                                                                                        hs_fail526DtzE.evaluate = function (hs_ds2326DtzD) {
                                                                                                            var hs_sat26DtLa = new $hs.Thunk();
                                                                                                            hs_sat26DtLa.evaluateOnce = function () {
                                                                                                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                                                                            };
                                                                                                            return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DtLa);
                                                                                                        };
                                                                                                        var hs_wild1626DtLb = hs_ds2226DtzF;
                                                                                                        if (hs_ds2226DtzF.notEvaluated) {
                                                                                                            hs_wild1626DtLb = hs_ds2226DtzF.hscall();
                                                                                                        }
                                                                                                        switch (hs_wild1626DtLb.tag) {
                                                                                                        case 4:
                                                                                                            var hs_ds2326DtzI = hs_wild1626DtLb.data[0];
                                                                                                            var hs_sat26DtLd = new $hs.Thunk();
                                                                                                            hs_sat26DtLd.evaluateOnce = function () {
                                                                                                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("outputNL\x00");
                                                                                                            };
                                                                                                            var hs_wild1726DtLc = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds2326DtzI, hs_sat26DtLd);
                                                                                                            switch (hs_wild1726DtLc.tag) {
                                                                                                            case 1:
                                                                                                                return hs_fail526DtzE.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                            case 2:
                                                                                                                var hs_sat26DtLz = new $hs.Func(1);
                                                                                                                hs_sat26DtLz.evaluate = function (hs_ds2426DtzR) {
                                                                                                                    var hs_fail626DtzQ = new $hs.Func(1);
                                                                                                                    hs_fail626DtzQ.evaluate = function (hs_ds2526DtzP) {
                                                                                                                        var hs_sat26DtLe = new $hs.Thunk();
                                                                                                                        hs_sat26DtLe.evaluateOnce = function () {
                                                                                                                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                                                                                        };
                                                                                                                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DtLe);
                                                                                                                    };
                                                                                                                    var hs_wild1826DtLf = hs_ds2426DtzR;
                                                                                                                    if (hs_ds2426DtzR.notEvaluated) {
                                                                                                                        hs_wild1826DtLf = hs_ds2426DtzR.hscall();
                                                                                                                    }
                                                                                                                    switch (hs_wild1826DtLf.tag) {
                                                                                                                    case 3:
                                                                                                                        var hs_ds2526DtzU = hs_wild1826DtLf.data[0];
                                                                                                                        var hs_wild1926DtLg = hs_ds2526DtzU;
                                                                                                                        if (hs_ds2526DtzU.notEvaluated) {
                                                                                                                            hs_wild1926DtLg = hs_ds2526DtzU.hscall();
                                                                                                                        }
                                                                                                                        switch (hs_wild1926DtLg.tag) {
                                                                                                                        case 1:
                                                                                                                            return hs_fail626DtzQ.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                                        case 2:
                                                                                                                            var hs_ds2626DtzY = hs_wild1926DtLg.data[0];
                                                                                                                            var hs_ds2726DtA3 = hs_wild1926DtLg.data[1];
                                                                                                                            var hs_wild2026DtLi = hs_ds2626DtzY;
                                                                                                                            if (hs_ds2626DtzY.notEvaluated) {
                                                                                                                                hs_wild2026DtLi = hs_ds2626DtzY.hscall();
                                                                                                                            }
                                                                                                                            var hs_ds2826DtA1 = hs_wild2026DtLi.data[0];
                                                                                                                            var hs_ds2926DtLh = hs_ds2826DtA1;
                                                                                                                            if (hs_ds2826DtA1.notEvaluated) {
                                                                                                                                hs_ds2926DtLh = hs_ds2826DtA1.hscall();
                                                                                                                            }
                                                                                                                            switch (hs_ds2926DtLh) {
                                                                                                                            case "=":
                                                                                                                                var hs_wild2126DtLj = hs_ds2726DtA3;
                                                                                                                                if (hs_ds2726DtA3.notEvaluated) {
                                                                                                                                    hs_wild2126DtLj = hs_ds2726DtA3.hscall();
                                                                                                                                }
                                                                                                                                switch (hs_wild2126DtLj.tag) {
                                                                                                                                case 1:
                                                                                                                                    var hs_sat26DtLu = new $hs.Func(1);
                                                                                                                                    hs_sat26DtLu.evaluate = function (hs_a226DtAt) {
                                                                                                                                        var hs_sat26DtLt = new $hs.Func(1);
                                                                                                                                        hs_sat26DtLt.evaluate = function (hs_ds3026DtAe) {
                                                                                                                                            var hs_fail726DtAd = new $hs.Func(1);
                                                                                                                                            hs_fail726DtAd.evaluate = function (hs_ds3126DtAc) {
                                                                                                                                                var hs_sat26DtLk = new $hs.Thunk();
                                                                                                                                                hs_sat26DtLk.evaluateOnce = function () {
                                                                                                                                                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                                                                                                                };
                                                                                                                                                return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DtLk);
                                                                                                                                            };
                                                                                                                                            var hs_wild2226DtLl = hs_ds3026DtAe;
                                                                                                                                            if (hs_ds3026DtAe.notEvaluated) {
                                                                                                                                                hs_wild2226DtLl = hs_ds3026DtAe.hscall();
                                                                                                                                            }
                                                                                                                                            switch (hs_wild2226DtLl.tag) {
                                                                                                                                            case 3:
                                                                                                                                                var hs_ds3126DtAh = hs_wild2226DtLl.data[0];
                                                                                                                                                var hs_wild2326DtLm = hs_ds3126DtAh;
                                                                                                                                                if (hs_ds3126DtAh.notEvaluated) {
                                                                                                                                                    hs_wild2326DtLm = hs_ds3126DtAh.hscall();
                                                                                                                                                }
                                                                                                                                                switch (hs_wild2326DtLm.tag) {
                                                                                                                                                case 1:
                                                                                                                                                    return hs_fail726DtAd.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                                                                case 2:
                                                                                                                                                    var hs_ds3226DtAl = hs_wild2326DtLm.data[0];
                                                                                                                                                    var hs_ds3326DtAq = hs_wild2326DtLm.data[1];
                                                                                                                                                    var hs_wild2426DtLo = hs_ds3226DtAl;
                                                                                                                                                    if (hs_ds3226DtAl.notEvaluated) {
                                                                                                                                                        hs_wild2426DtLo = hs_ds3226DtAl.hscall();
                                                                                                                                                    }
                                                                                                                                                    var hs_ds3426DtAo = hs_wild2426DtLo.data[0];
                                                                                                                                                    var hs_ds3526DtLn = hs_ds3426DtAo;
                                                                                                                                                    if (hs_ds3426DtAo.notEvaluated) {
                                                                                                                                                        hs_ds3526DtLn = hs_ds3426DtAo.hscall();
                                                                                                                                                    }
                                                                                                                                                    switch (hs_ds3526DtLn) {
                                                                                                                                                    case "}":
                                                                                                                                                        var hs_wild2526DtLp = hs_ds3326DtAq;
                                                                                                                                                        if (hs_ds3326DtAq.notEvaluated) {
                                                                                                                                                            hs_wild2526DtLp = hs_ds3326DtAq.hscall();
                                                                                                                                                        }
                                                                                                                                                        switch (hs_wild2526DtLp.tag) {
                                                                                                                                                        case 1:
                                                                                                                                                            var hs_sat26DtLq = new $hs.Data(1);
                                                                                                                                                            hs_sat26DtLq.data = [hs_a126DtAs, hs_a226DtAt];
                                                                                                                                                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DtLq);
                                                                                                                                                        case 2:
                                                                                                                                                            return hs_fail726DtAd.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                                                                        }
                                                                                                                                                    default:
                                                                                                                                                        return hs_fail726DtAd.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            default:
                                                                                                                                                return hs_fail726DtAd.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                                                            }
                                                                                                                                        };
                                                                                                                                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DtLt);
                                                                                                                                    };
                                                                                                                                    var hs_sat26DtLw = new $hs.Thunk();
                                                                                                                                    hs_sat26DtLw.evaluateOnce = function () {
                                                                                                                                        var hs_sat26DtLv = new $hs.Thunk();
                                                                                                                                        hs_sat26DtLv.evaluateOnce = function () {
                                                                                                                                            return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfReadNewline);
                                                                                                                                        };
                                                                                                                                        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_reset.hscall(hs_sat26DtLv);
                                                                                                                                    };
                                                                                                                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DtLw, hs_sat26DtLu);
                                                                                                                                case 2:
                                                                                                                                    return hs_fail626DtzQ.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                                                }
                                                                                                                            default:
                                                                                                                                return hs_fail626DtzQ.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                                            }
                                                                                                                        }
                                                                                                                    default:
                                                                                                                        return hs_fail626DtzQ.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                                    }
                                                                                                                };
                                                                                                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DtLz);
                                                                                                            }
                                                                                                        default:
                                                                                                            return hs_fail526DtzE.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                        }
                                                                                                    };
                                                                                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DtLA);
                                                                                                case 2:
                                                                                                    return hs_fail426Dtzk.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                }
                                                                                            default:
                                                                                                return hs_fail426Dtzk.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                            }
                                                                                        }
                                                                                    default:
                                                                                        return hs_fail426Dtzk.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                    }
                                                                                };
                                                                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DtLD);
                                                                            };
                                                                            var hs_sat26DtLG = new $hs.Thunk();
                                                                            hs_sat26DtLG.evaluateOnce = function () {
                                                                                var hs_sat26DtLF = new $hs.Thunk();
                                                                                hs_sat26DtLF.evaluateOnce = function () {
                                                                                    return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfReadNewline);
                                                                                };
                                                                                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_reset.hscall(hs_sat26DtLF);
                                                                            };
                                                                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DtLG, hs_sat26DtLE);
                                                                        case 2:
                                                                            return hs_fail326DtyX.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                        }
                                                                    default:
                                                                        return hs_fail326DtyX.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                    }
                                                                }
                                                            default:
                                                                return hs_fail326DtyX.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                            }
                                                        };
                                                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DtLJ);
                                                    }
                                                default:
                                                    return hs_fail226DtyL.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                }
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DtLK);
                                        case 2:
                                            return hs_fail126Dtyr.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                        }
                                    default:
                                        return hs_fail126Dtyr.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                    }
                                }
                            default:
                                return hs_fail126Dtyr.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                            }
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DtLN);
                    }
                default:
                    return hs_fail26Dtyf.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                }
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DtLO);
        };
        var hs_sat26DtLQ = new $hs.Data(1);
        hs_sat26DtLQ.data = [11];
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_prec.hscall(hs_sat26DtLQ, hs_sat26DtLP);
    };
    hs_zdcreadPrec125v51S.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_parens.hscall(hs_sat26DtLR);
    };
    this.hs_zdfReadNewlineMode.data = [hs_zdcreadsPrec125v54G, hs_zdcreadList125v54E, hs_zdcreadPrec125v51S, hs_zdcreadListPrec125v54C];
    hs_zdcreadListPrec125v54C.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListPrecDefault.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfReadNewlineMode);
    };
    hs_zdcreadList125v54E.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListDefault.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfReadNewlineMode);
    };
    hs_zdcreadsPrec125v54G.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadsPrec.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfReadNewlineMode);
    };
    hs_zdczlze25v54I.evaluate = function (hs_a26DtB1, hs_b26DtB3) {
        var hs_wild26DtLT = hs_a26DtB1;
        if (hs_a26DtB1.notEvaluated) {
            hs_wild26DtLT = hs_a26DtB1.hscall();
        }
        switch (hs_wild26DtLT.tag) {
        case 1:
            var hs_wild126DtLS = hs_b26DtB3;
            if (hs_b26DtB3.notEvaluated) {
                hs_wild126DtLS = hs_b26DtB3.hscall();
            }
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild126DtLU = hs_b26DtB3;
            if (hs_b26DtB3.notEvaluated) {
                hs_wild126DtLU = hs_b26DtB3.hscall();
            }
            switch (hs_wild126DtLU.tag) {
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
    hs_zdczg25v54R.evaluate = function (hs_a26DtBa, hs_b26DtBc) {
        var hs_wild26DtLW = hs_a26DtBa;
        if (hs_a26DtBa.notEvaluated) {
            hs_wild26DtLW = hs_a26DtBa.hscall();
        }
        switch (hs_wild26DtLW.tag) {
        case 1:
            var hs_wild126DtLV = hs_b26DtBc;
            if (hs_b26DtBc.notEvaluated) {
                hs_wild126DtLV = hs_b26DtBc.hscall();
            }
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild126DtLX = hs_b26DtBc;
            if (hs_b26DtBc.notEvaluated) {
                hs_wild126DtLX = hs_b26DtBc.hscall();
            }
            switch (hs_wild126DtLX.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        }
    };
    hs_zdczgze25v550.evaluate = function (hs_a26DtBj, hs_b26DtBl) {
        var hs_wild26DtLZ = hs_a26DtBj;
        if (hs_a26DtBj.notEvaluated) {
            hs_wild26DtLZ = hs_a26DtBj.hscall();
        }
        switch (hs_wild26DtLZ.tag) {
        case 1:
            var hs_wild126DtLY = hs_b26DtBl;
            if (hs_b26DtBl.notEvaluated) {
                hs_wild126DtLY = hs_b26DtBl.hscall();
            }
            switch (hs_wild126DtLY.tag) {
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
            var hs_wild126DtM0 = hs_b26DtBl;
            if (hs_b26DtBl.notEvaluated) {
                hs_wild126DtM0 = hs_b26DtBl.hscall();
            }
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczl25v559.evaluate = function (hs_a26DtBs, hs_b26DtBu) {
        var hs_wild26DtM2 = hs_a26DtBs;
        if (hs_a26DtBs.notEvaluated) {
            hs_wild26DtM2 = hs_a26DtBs.hscall();
        }
        switch (hs_wild26DtM2.tag) {
        case 1:
            var hs_wild126DtM1 = hs_b26DtBu;
            if (hs_b26DtBu.notEvaluated) {
                hs_wild126DtM1 = hs_b26DtBu.hscall();
            }
            switch (hs_wild126DtM1.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_wild126DtM3 = hs_b26DtBu;
            if (hs_b26DtBu.notEvaluated) {
                hs_wild126DtM3 = hs_b26DtBu.hscall();
            }
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdccompare25v55i.evaluate = function (hs_a26DtBB, hs_b26DtBD) {
        var hs_wild26DtM5 = hs_a26DtBB;
        if (hs_a26DtBB.notEvaluated) {
            hs_wild26DtM5 = hs_a26DtBB.hscall();
        }
        switch (hs_wild26DtM5.tag) {
        case 1:
            var hs_wild126DtM4 = hs_b26DtBD;
            if (hs_b26DtBD.notEvaluated) {
                hs_wild126DtM4 = hs_b26DtBD.hscall();
            }
            switch (hs_wild126DtM4.tag) {
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
            var hs_wild126DtM6 = hs_b26DtBD;
            if (hs_b26DtBD.notEvaluated) {
                hs_wild126DtM6 = hs_b26DtBD.hscall();
            }
            switch (hs_wild126DtM6.tag) {
            case 1:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        }
    };
    hs_zdczeze125v55r.evaluate = function (hs_a26DtBK, hs_b26DtBM) {
        var hs_wild26DtM8 = hs_a26DtBK;
        if (hs_a26DtBK.notEvaluated) {
            hs_wild26DtM8 = hs_a26DtBK.hscall();
        }
        switch (hs_wild26DtM8.tag) {
        case 1:
            var hs_wild126DtM7 = hs_b26DtBM;
            if (hs_b26DtBM.notEvaluated) {
                hs_wild126DtM7 = hs_b26DtBM.hscall();
            }
            switch (hs_wild126DtM7.tag) {
            case 1:
                return 0 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 0 == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 2:
            var hs_wild126DtM9 = hs_b26DtBM;
            if (hs_b26DtBM.notEvaluated) {
                hs_wild126DtM9 = hs_b26DtBM.hscall();
            }
            switch (hs_wild126DtM9.tag) {
            case 1:
                return 1 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 1 == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        }
    };
    this.hs_zdfEqNewline.data = [hs_zdczeze125v55r, hs_zdczsze125v55A];
    hs_zdczsze125v55A.evaluate = function (hs_a26DtBT, hs_b26DtBU) {
        var hs_sat26DtMa = new $hs.Thunk();
        hs_sat26DtMa.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfEqNewline, hs_a26DtBT, hs_b26DtBU);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DtMa);
    };
    this.hs_zdfOrdNewline.data = [$hs.modules.GHCziIOziHandleziTypes.hs_zdfEqNewline, hs_zdccompare25v55i, hs_zdczl25v559, hs_zdczgze25v550, hs_zdczg25v54R, hs_zdczlze25v54I, hs_zdcmax25v55J, hs_zdcmin25v55H];
    hs_zdcmin25v55H.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmin.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfOrdNewline);
    };
    hs_zdcmax25v55J.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmax.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfOrdNewline);
    };
    hs_zdccompare125v55L.evaluate = function (hs_a26DtC4, hs_b26DtC8) {
        var hs_wild26DtMd = hs_a26DtC4;
        if (hs_a26DtC4.notEvaluated) {
            hs_wild26DtMd = hs_a26DtC4.hscall();
        }
        var hs_a126DtCc = hs_wild26DtMd.data[0];
        var hs_a226DtCf = hs_wild26DtMd.data[1];
        var hs_wild126DtMc = hs_b26DtC8;
        if (hs_b26DtC8.notEvaluated) {
            hs_wild126DtMc = hs_b26DtC8.hscall();
        }
        var hs_b126DtCd = hs_wild126DtMc.data[0];
        var hs_b226DtCg = hs_wild126DtMc.data[1];
        var hs_wild226DtMb = $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfOrdNewline, hs_a126DtCc, hs_b126DtCd);
        switch (hs_wild226DtMb.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfOrdNewline, hs_a226DtCf, hs_b226DtCg);
        case 3:
            var $res = new $hs.Data(3);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczl125v562.evaluate = function (hs_a26DtCl, hs_b26DtCp) {
        var hs_wild26DtMg = hs_a26DtCl;
        if (hs_a26DtCl.notEvaluated) {
            hs_wild26DtMg = hs_a26DtCl.hscall();
        }
        var hs_a126DtCt = hs_wild26DtMg.data[0];
        var hs_a226DtCw = hs_wild26DtMg.data[1];
        var hs_wild126DtMf = hs_b26DtCp;
        if (hs_b26DtCp.notEvaluated) {
            hs_wild126DtMf = hs_b26DtCp.hscall();
        }
        var hs_b126DtCu = hs_wild126DtMf.data[0];
        var hs_b226DtCx = hs_wild126DtMf.data[1];
        var hs_wild226DtMe = $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfOrdNewline, hs_a126DtCt, hs_b126DtCu);
        switch (hs_wild226DtMe.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfOrdNewline, hs_a226DtCw, hs_b226DtCx);
        case 3:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczgze125v56j.evaluate = function (hs_a26DtCC, hs_b26DtCG) {
        var hs_wild26DtMj = hs_a26DtCC;
        if (hs_a26DtCC.notEvaluated) {
            hs_wild26DtMj = hs_a26DtCC.hscall();
        }
        var hs_a126DtCK = hs_wild26DtMj.data[0];
        var hs_a226DtCN = hs_wild26DtMj.data[1];
        var hs_wild126DtMi = hs_b26DtCG;
        if (hs_b26DtCG.notEvaluated) {
            hs_wild126DtMi = hs_b26DtCG.hscall();
        }
        var hs_b126DtCL = hs_wild126DtMi.data[0];
        var hs_b226DtCO = hs_wild126DtMi.data[1];
        var hs_wild226DtMh = $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfOrdNewline, hs_a126DtCK, hs_b126DtCL);
        switch (hs_wild226DtMh.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfOrdNewline, hs_a226DtCN, hs_b226DtCO);
        case 3:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczg125v56A.evaluate = function (hs_a26DtCT, hs_b26DtCX) {
        var hs_wild26DtMm = hs_a26DtCT;
        if (hs_a26DtCT.notEvaluated) {
            hs_wild26DtMm = hs_a26DtCT.hscall();
        }
        var hs_a126DtD1 = hs_wild26DtMm.data[0];
        var hs_a226DtD4 = hs_wild26DtMm.data[1];
        var hs_wild126DtMl = hs_b26DtCX;
        if (hs_b26DtCX.notEvaluated) {
            hs_wild126DtMl = hs_b26DtCX.hscall();
        }
        var hs_b126DtD2 = hs_wild126DtMl.data[0];
        var hs_b226DtD5 = hs_wild126DtMl.data[1];
        var hs_wild226DtMk = $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfOrdNewline, hs_a126DtD1, hs_b126DtD2);
        switch (hs_wild226DtMk.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfOrdNewline, hs_a226DtD4, hs_b226DtD5);
        case 3:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczlze125v56R.evaluate = function (hs_a26DtDa, hs_b26DtDe) {
        var hs_wild26DtMp = hs_a26DtDa;
        if (hs_a26DtDa.notEvaluated) {
            hs_wild26DtMp = hs_a26DtDa.hscall();
        }
        var hs_a126DtDi = hs_wild26DtMp.data[0];
        var hs_a226DtDl = hs_wild26DtMp.data[1];
        var hs_wild126DtMo = hs_b26DtDe;
        if (hs_b26DtDe.notEvaluated) {
            hs_wild126DtMo = hs_b26DtDe.hscall();
        }
        var hs_b126DtDj = hs_wild126DtMo.data[0];
        var hs_b226DtDm = hs_wild126DtMo.data[1];
        var hs_wild226DtMn = $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfOrdNewline, hs_a126DtDi, hs_b126DtDj);
        switch (hs_wild226DtMn.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfOrdNewline, hs_a226DtDl, hs_b226DtDm);
        case 3:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczeze225v578.evaluate = function (hs_ds26DtDr, hs_ds126DtDv) {
        var hs_wild26DtMr = hs_ds26DtDr;
        if (hs_ds26DtDr.notEvaluated) {
            hs_wild26DtMr = hs_ds26DtDr.hscall();
        }
        var hs_a126DtDz = hs_wild26DtMr.data[0];
        var hs_a226DtDC = hs_wild26DtMr.data[1];
        var hs_wild126DtMq = hs_ds126DtDv;
        if (hs_ds126DtDv.notEvaluated) {
            hs_wild126DtMq = hs_ds126DtDv.hscall();
        }
        var hs_b126DtDA = hs_wild126DtMq.data[0];
        var hs_b226DtDD = hs_wild126DtMq.data[1];
        var hs_sat26DtMs = new $hs.Thunk();
        hs_sat26DtMs.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfEqNewline, hs_a226DtDC, hs_b226DtDD);
        };
        var hs_sat26DtMt = new $hs.Thunk();
        hs_sat26DtMt.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfEqNewline, hs_a126DtDz, hs_b126DtDA);
        };
        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DtMt, hs_sat26DtMs);
    };
    this.hs_zdfEqNewlineMode.data = [hs_zdczeze225v578, hs_zdczsze225v57q];
    hs_zdczsze225v57q.evaluate = function (hs_a26DtDJ, hs_b26DtDK) {
        var hs_sat26DtMu = new $hs.Thunk();
        hs_sat26DtMu.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfEqNewlineMode, hs_a26DtDJ, hs_b26DtDK);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DtMu);
    };
    this.hs_zdfOrdNewlineMode.data = [$hs.modules.GHCziIOziHandleziTypes.hs_zdfEqNewlineMode, hs_zdccompare125v55L, hs_zdczl125v562, hs_zdczgze125v56j, hs_zdczg125v56A, hs_zdczlze125v56R, hs_zdcmax125v57z, hs_zdcmin125v57x];
    hs_zdcmin125v57x.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmin.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfOrdNewlineMode);
    };
    hs_zdcmax125v57z.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmax.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfOrdNewlineMode);
    };
    hs_zddShow25v57B.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zdfShowMaybe.hscall($hs.modules.GHCziShow.hs_zdfShowInt);
    };
    hs_zdcshowsPrec425v57D.evaluate = function (hs_ds26DtE1, hs_ds126DtDW) {
        var hs_wild26DtMv = hs_ds126DtDW;
        if (hs_ds126DtDW.notEvaluated) {
            hs_wild26DtMv = hs_ds126DtDW.hscall();
        }
        switch (hs_wild26DtMv.tag) {
        case 1:
            var hs_sat26DtMw = new $hs.Thunk();
            hs_sat26DtMw.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("NoBuffering\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DtMw);
        case 2:
            var hs_sat26DtMx = new $hs.Thunk();
            hs_sat26DtMx.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("LineBuffering\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DtMx);
        case 3:
            var hs_b126DtE7 = hs_wild26DtMv.data[0];
            var hs_sat26DtMC = new $hs.Thunk();
            hs_sat26DtMC.evaluateOnce = function () {
                var hs_sat26DtMz = new $hs.Thunk();
                hs_sat26DtMz.evaluateOnce = function () {
                    var hs_sat26DtMy = new $hs.Data(1);
                    hs_sat26DtMy.data = [11];
                    return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow25v57B, hs_sat26DtMy, hs_b126DtE7);
                };
                var hs_sat26DtMB = new $hs.Thunk();
                hs_sat26DtMB.evaluateOnce = function () {
                    var hs_sat26DtMA = new $hs.Thunk();
                    hs_sat26DtMA.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("BlockBuffering \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DtMA);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DtMB, hs_sat26DtMz);
            };
            var hs_sat26DtME = new $hs.Thunk();
            hs_sat26DtME.evaluateOnce = function () {
                var hs_sat26DtMD = new $hs.Data(1);
                hs_sat26DtMD.data = [11];
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_ds26DtE1, hs_sat26DtMD);
            };
            return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DtME, hs_sat26DtMC);
        }
    };
    hs_sat26DtMF.evaluateOnce = function () {
        var hs_sat26DtMG = new $hs.Data(1);
        hs_sat26DtMG.data = [0];
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfShowBufferMode, hs_sat26DtMG);
    };
    this.hs_zdfShowBufferMode.data = [hs_zdcshowsPrec425v57D, hs_zdcshow425v57X, hs_zdcshowList425v57V];
    hs_zdcshowList425v57V.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DtMF);
    };
    hs_zdcshow425v57X.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfShowBufferMode);
    };
    hs_zddRead25v581.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zdfReadMaybe.hscall($hs.modules.GHCziRead.hs_zdfReadInt);
    };
    hs_sat26DtN2.evaluateOnce = function () {
        var hs_sat26DtMS = new $hs.Thunk();
        hs_sat26DtMS.evaluateOnce = function () {
            var hs_sat26DtMQ = new $hs.Thunk();
            hs_sat26DtMQ.evaluateOnce = function () {
                var hs_sat26DtMP = new $hs.Func(1);
                hs_sat26DtMP.evaluate = function (hs_ds26DtEA) {
                    var hs_fail26DtEz = new $hs.Func(1);
                    hs_fail26DtEz.evaluate = function (hs_ds126DtEy) {
                        var hs_sat26DtMH = new $hs.Thunk();
                        hs_sat26DtMH.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                        };
                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DtMH);
                    };
                    var hs_wild26DtMI = hs_ds26DtEA;
                    if (hs_ds26DtEA.notEvaluated) {
                        hs_wild26DtMI = hs_ds26DtEA.hscall();
                    }
                    switch (hs_wild26DtMI.tag) {
                    case 4:
                        var hs_ds126DtED = hs_wild26DtMI.data[0];
                        var hs_sat26DtMK = new $hs.Thunk();
                        hs_sat26DtMK.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("BlockBuffering\x00");
                        };
                        var hs_wild126DtMJ = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds126DtED, hs_sat26DtMK);
                        switch (hs_wild126DtMJ.tag) {
                        case 1:
                            return hs_fail26DtEz.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                        case 2:
                            var hs_sat26DtMM = new $hs.Func(1);
                            hs_sat26DtMM.evaluate = function (hs_a126DtEJ) {
                                var hs_sat26DtML = new $hs.Data(3);
                                hs_sat26DtML.data = [hs_a126DtEJ];
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DtML);
                            };
                            var hs_sat26DtMO = new $hs.Thunk();
                            hs_sat26DtMO.evaluateOnce = function () {
                                var hs_sat26DtMN = new $hs.Thunk();
                                hs_sat26DtMN.evaluateOnce = function () {
                                    return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead25v581);
                                };
                                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_step.hscall(hs_sat26DtMN);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DtMO, hs_sat26DtMM);
                        }
                    default:
                        return hs_fail26DtEz.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DtMP);
            };
            var hs_sat26DtMR = new $hs.Data(1);
            hs_sat26DtMR.data = [10];
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_prec.hscall(hs_sat26DtMR, hs_sat26DtMQ);
        };
        var hs_sat26DtN1 = new $hs.Thunk();
        hs_sat26DtN1.evaluateOnce = function () {
            var hs_sat26DtMT = new $hs.Thunk();
            hs_sat26DtMT.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziIOziHandleziTypes.hs_LineBuffering);
            };
            var hs_sat26DtMU = new $hs.Thunk();
            hs_sat26DtMU.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("LineBuffering\x00");
            };
            var hs_sat26DtMV = new $hs.Data(1);
            hs_sat26DtMV.data = [hs_sat26DtMU, hs_sat26DtMT];
            var hs_sat26DtMW = new $hs.Data(2);
            hs_sat26DtMW.data = [hs_sat26DtMV, $hs.modules.GHCziTypes.hs_ZMZN];
            var hs_sat26DtMX = new $hs.Thunk();
            hs_sat26DtMX.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziIOziHandleziTypes.hs_NoBuffering);
            };
            var hs_sat26DtMY = new $hs.Thunk();
            hs_sat26DtMY.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("NoBuffering\x00");
            };
            var hs_sat26DtMZ = new $hs.Data(1);
            hs_sat26DtMZ.data = [hs_sat26DtMY, hs_sat26DtMX];
            var hs_sat26DtN0 = new $hs.Data(2);
            hs_sat26DtN0.data = [hs_sat26DtMZ, hs_sat26DtMW];
            return $hs.modules.GHCziRead.hs_choose.hscall(hs_sat26DtN0);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26DtN1, hs_sat26DtMS);
    };
    hs_zdcreadPrec225v583.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_parens.hscall(hs_sat26DtN2);
    };
    this.hs_zdfReadBufferMode.data = [hs_zdcreadsPrec225v58F, hs_zdcreadList225v58D, hs_zdcreadPrec225v583, hs_zdcreadListPrec225v58B];
    hs_zdcreadListPrec225v58B.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListPrecDefault.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfReadBufferMode);
    };
    hs_zdcreadList225v58D.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListDefault.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfReadBufferMode);
    };
    hs_zdcreadsPrec225v58F.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadsPrec.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfReadBufferMode);
    };
    hs_zddOrd25v58H.evaluateOnce = function () {
        return $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_zddEq25v4Zz, $hs.modules.GHCziBase.hs_zdfOrdInt);
    };
    hs_zdczlze225v58J.evaluate = function (hs_a26DtF2, hs_b26DtF4) {
        var hs_wild26DtN4 = hs_a26DtF2;
        if (hs_a26DtF2.notEvaluated) {
            hs_wild26DtN4 = hs_a26DtF2.hscall();
        }
        switch (hs_wild26DtN4.tag) {
        case 1:
            var hs_wild126DtN3 = hs_b26DtF4;
            if (hs_b26DtF4.notEvaluated) {
                hs_wild126DtN3 = hs_b26DtF4.hscall();
            }
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild126DtN5 = hs_b26DtF4;
            if (hs_b26DtF4.notEvaluated) {
                hs_wild126DtN5 = hs_b26DtF4.hscall();
            }
            switch (hs_wild126DtN5.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_a126DtFb = hs_wild26DtN4.data[0];
            var hs_wild126DtN7 = hs_b26DtF4;
            if (hs_b26DtF4.notEvaluated) {
                hs_wild126DtN7 = hs_b26DtF4.hscall();
            }
            switch (hs_wild126DtN7.tag) {
            case 3:
                var hs_b126DtFc = hs_wild126DtN7.data[0];
                return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd25v58H, hs_a126DtFb, hs_b126DtFc);
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        }
    };
    hs_zdczg225v58Y.evaluate = function (hs_a26DtFh, hs_b26DtFj) {
        var hs_wild26DtN9 = hs_a26DtFh;
        if (hs_a26DtFh.notEvaluated) {
            hs_wild26DtN9 = hs_a26DtFh.hscall();
        }
        switch (hs_wild26DtN9.tag) {
        case 1:
            var hs_wild126DtN8 = hs_b26DtFj;
            if (hs_b26DtFj.notEvaluated) {
                hs_wild126DtN8 = hs_b26DtFj.hscall();
            }
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild126DtNa = hs_b26DtFj;
            if (hs_b26DtFj.notEvaluated) {
                hs_wild126DtNa = hs_b26DtFj.hscall();
            }
            switch (hs_wild126DtNa.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_a126DtFq = hs_wild26DtN9.data[0];
            var hs_wild126DtNc = hs_b26DtFj;
            if (hs_b26DtFj.notEvaluated) {
                hs_wild126DtNc = hs_b26DtFj.hscall();
            }
            switch (hs_wild126DtNc.tag) {
            case 3:
                var hs_b126DtFr = hs_wild126DtNc.data[0];
                return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd25v58H, hs_a126DtFq, hs_b126DtFr);
            default:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        }
    };
    hs_zdczgze225v59d.evaluate = function (hs_a26DtFw, hs_b26DtFy) {
        var hs_wild26DtNe = hs_a26DtFw;
        if (hs_a26DtFw.notEvaluated) {
            hs_wild26DtNe = hs_a26DtFw.hscall();
        }
        switch (hs_wild26DtNe.tag) {
        case 1:
            var hs_wild126DtNd = hs_b26DtFy;
            if (hs_b26DtFy.notEvaluated) {
                hs_wild126DtNd = hs_b26DtFy.hscall();
            }
            switch (hs_wild126DtNd.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_wild126DtNf = hs_b26DtFy;
            if (hs_b26DtFy.notEvaluated) {
                hs_wild126DtNf = hs_b26DtFy.hscall();
            }
            switch (hs_wild126DtNf.tag) {
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_a126DtFF = hs_wild26DtNe.data[0];
            var hs_wild126DtNh = hs_b26DtFy;
            if (hs_b26DtFy.notEvaluated) {
                hs_wild126DtNh = hs_b26DtFy.hscall();
            }
            switch (hs_wild126DtNh.tag) {
            case 3:
                var hs_b126DtFG = hs_wild126DtNh.data[0];
                return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd25v58H, hs_a126DtFF, hs_b126DtFG);
            default:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        }
    };
    hs_zdczl225v59s.evaluate = function (hs_a26DtFL, hs_b26DtFN) {
        var hs_wild26DtNj = hs_a26DtFL;
        if (hs_a26DtFL.notEvaluated) {
            hs_wild26DtNj = hs_a26DtFL.hscall();
        }
        switch (hs_wild26DtNj.tag) {
        case 1:
            var hs_wild126DtNi = hs_b26DtFN;
            if (hs_b26DtFN.notEvaluated) {
                hs_wild126DtNi = hs_b26DtFN.hscall();
            }
            switch (hs_wild126DtNi.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_wild126DtNk = hs_b26DtFN;
            if (hs_b26DtFN.notEvaluated) {
                hs_wild126DtNk = hs_b26DtFN.hscall();
            }
            switch (hs_wild126DtNk.tag) {
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_a126DtFU = hs_wild26DtNj.data[0];
            var hs_wild126DtNm = hs_b26DtFN;
            if (hs_b26DtFN.notEvaluated) {
                hs_wild126DtNm = hs_b26DtFN.hscall();
            }
            switch (hs_wild126DtNm.tag) {
            case 3:
                var hs_b126DtFV = hs_wild126DtNm.data[0];
                return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd25v58H, hs_a126DtFU, hs_b126DtFV);
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        }
    };
    hs_zdccompare225v59H.evaluate = function (hs_a26DtG0, hs_b26DtG2) {
        var hs_wild26DtNo = hs_a26DtG0;
        if (hs_a26DtG0.notEvaluated) {
            hs_wild26DtNo = hs_a26DtG0.hscall();
        }
        switch (hs_wild26DtNo.tag) {
        case 1:
            var hs_wild126DtNn = hs_b26DtG2;
            if (hs_b26DtG2.notEvaluated) {
                hs_wild126DtNn = hs_b26DtG2.hscall();
            }
            switch (hs_wild126DtNn.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_wild126DtNp = hs_b26DtG2;
            if (hs_b26DtG2.notEvaluated) {
                hs_wild126DtNp = hs_b26DtG2.hscall();
            }
            switch (hs_wild126DtNp.tag) {
            case 1:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_a126DtG9 = hs_wild26DtNo.data[0];
            var hs_wild126DtNr = hs_b26DtG2;
            if (hs_b26DtG2.notEvaluated) {
                hs_wild126DtNr = hs_b26DtG2.hscall();
            }
            switch (hs_wild126DtNr.tag) {
            case 3:
                var hs_b126DtGa = hs_wild126DtNr.data[0];
                return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd25v58H, hs_a126DtG9, hs_b126DtGa);
            default:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            }
        }
    };
    hs_zdczeze325v59W.evaluate = function (hs_ds26DtGh, hs_ds126DtGj) {
        var hs_fail26DtGs = new $hs.Func(1);
        hs_fail26DtGs.evaluate = function (hs_ds226DtGr) {
            var hs_wild26DtNt = hs_ds26DtGh;
            if (hs_ds26DtGh.notEvaluated) {
                hs_wild26DtNt = hs_ds26DtGh.hscall();
            }
            switch (hs_wild26DtNt.tag) {
            case 1:
                var hs_wild126DtNs = hs_ds126DtGj;
                if (hs_ds126DtGj.notEvaluated) {
                    hs_wild126DtNs = hs_ds126DtGj.hscall();
                }
                switch (hs_wild126DtNs.tag) {
                case 1:
                    return 0 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                case 2:
                    return 0 == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                case 3:
                    return 0 == 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                }
            case 2:
                var hs_wild126DtNv = hs_ds126DtGj;
                if (hs_ds126DtGj.notEvaluated) {
                    hs_wild126DtNv = hs_ds126DtGj.hscall();
                }
                switch (hs_wild126DtNv.tag) {
                case 1:
                    return 1 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                case 2:
                    return 1 == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                case 3:
                    return 1 == 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                }
            case 3:
                var hs_wild126DtNx = hs_ds126DtGj;
                if (hs_ds126DtGj.notEvaluated) {
                    hs_wild126DtNx = hs_ds126DtGj.hscall();
                }
                switch (hs_wild126DtNx.tag) {
                case 1:
                    return 2 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                case 2:
                    return 2 == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                case 3:
                    return 2 == 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                }
            }
        };
        var hs_wild26DtNA = hs_ds26DtGh;
        if (hs_ds26DtGh.notEvaluated) {
            hs_wild26DtNA = hs_ds26DtGh.hscall();
        }
        switch (hs_wild26DtNA.tag) {
        case 3:
            var hs_a126DtGx = hs_wild26DtNA.data[0];
            var hs_wild126DtNB = hs_ds126DtGj;
            if (hs_ds126DtGj.notEvaluated) {
                hs_wild126DtNB = hs_ds126DtGj.hscall();
            }
            switch (hs_wild126DtNB.tag) {
            case 3:
                var hs_b126DtGy = hs_wild126DtNB.data[0];
                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq25v4Zz, hs_a126DtGx, hs_b126DtGy);
            default:
                return hs_fail26DtGs.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            }
        default:
            return hs_fail26DtGs.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
        }
    };
    this.hs_zdfEqBufferMode.data = [hs_zdczeze325v59W, hs_zdczsze325v5ak];
    hs_zdczsze325v5ak.evaluate = function (hs_a26DtGD, hs_b26DtGE) {
        var hs_sat26DtNC = new $hs.Thunk();
        hs_sat26DtNC.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfEqBufferMode, hs_a26DtGD, hs_b26DtGE);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DtNC);
    };
    this.hs_zdfOrdBufferMode.data = [$hs.modules.GHCziIOziHandleziTypes.hs_zdfEqBufferMode, hs_zdccompare225v59H, hs_zdczl225v59s, hs_zdczgze225v59d, hs_zdczg225v58Y, hs_zdczlze225v58J, hs_zdcmax225v5at, hs_zdcmin225v5ar];
    hs_zdcmin225v5ar.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmin.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfOrdBufferMode);
    };
    hs_zdcmax225v5at.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmax.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfOrdBufferMode);
    };
    hs_zdctypeOf25v5av.evaluate = function (hs_ds26DtGP) {
        var hs_sat26DtNE = new $hs.Thunk();
        hs_sat26DtNE.evaluateOnce = function () {
            var hs_sat26DtND = new $hs.Thunk();
            hs_sat26DtND.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("GHC.IO.Handle.Types.Handle\x00");
            };
            return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26DtND);
        };
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_sat26DtNE, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableHandle.evaluateOnce = function () {
        if (hs_zdctypeOf25v5av.notEvaluated) {
            return hs_zdctypeOf25v5av.hscall();
        } else {
            return hs_zdctypeOf25v5av;
        }
    };
    hs_zdctypeOf125v5aB.evaluate = function (hs_ds26DtGV) {
        var hs_sat26DtNG = new $hs.Thunk();
        hs_sat26DtNG.evaluateOnce = function () {
            var hs_sat26DtNF = new $hs.Thunk();
            hs_sat26DtNF.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("GHC.IO.Handle.Types.Handle__\x00");
            };
            return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26DtNF);
        };
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_sat26DtNG, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableHandlezuzu.evaluateOnce = function () {
        if (hs_zdctypeOf125v5aB.notEvaluated) {
            return hs_zdctypeOf125v5aB.hscall();
        } else {
            return hs_zdctypeOf125v5aB;
        }
    };
    this.hs_checkHandleInvariants.evaluate = function (hs_ds26DtGX) {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
    };
    this.hs_NewlineMode.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_LF.data = [];
    this.hs_CRLF.data = [];
    this.hs_NoBuffering.data = [];
    this.hs_LineBuffering.data = [];
    this.hs_BlockBuffering.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(3);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
    this.hs_ClosedHandle.data = [];
    this.hs_SemiClosedHandle.data = [];
    this.hs_ReadHandle.data = [];
    this.hs_WriteHandle.data = [];
    this.hs_AppendHandle.data = [];
    this.hs_ReadWriteHandle.data = [];
    this.hs_BufferListNil.data = [];
    this.hs_BufferListCons.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(2);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_Handlezuzu.evaluate = function (hs_eta1cW6li, hs_eta1cW6lh, hs_eta1cW6lg, hs_eta1cW6lf, hs_eta1cW6le, hs_eta1cW6ld, hs_eta1cW6lc, hs_eta1cW6lb, hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6li, hs_eta1cW6lh, hs_eta1cW6lg, hs_eta1cW6lf, hs_eta1cW6le, hs_eta1cW6ld, hs_eta1cW6lc, hs_eta1cW6lb, hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_FileHandle.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_DuplexHandle.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(2);
        $res.data = [hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
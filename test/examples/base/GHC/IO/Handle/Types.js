
$hs.modules.GHCziIOziHandleziTypes = new $hs.Module();
$hs.modules.GHCziIOziHandleziTypes.dependencies = ["GHC.Prim", "GHC.Types", "GHC.CString", "GHC.Unit", "Data.Maybe", "GHC.Base", "GHC.Show", "Data.Typeable.Internal", "GHC.Classes", "GHC.MVar", "GHC.Read", "Text.ParserCombinators.ReadPrec"];
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
    this.hs_zdWHandlezuzu.evaluate = function (hs_tpl26D8BZ, hs_tpl26D8C0, hs_tpl26D8C1, hs_tpl26D8BL, hs_tpl26D8C3, hs_tpl26D8BN, hs_tpl26D8C5, hs_tpl26D8BQ, hs_tpl26D8BT, hs_tpl26D8BW, hs_tpl26D8C9, hs_tpl26D8Ca, hs_tpl26D8Cb, hs_tpl26D8Cc, hs_tpl26D8Cd, hs_tpl26D8Ce) {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluate(hs_tpl26D8BZ, hs_tpl26D8C0, hs_tpl26D8C1, hs_tpl26D8BL, hs_tpl26D8C3, hs_tpl26D8BN, hs_tpl26D8C5, hs_tpl26D8BQ, hs_tpl26D8BT, hs_tpl26D8BW, hs_tpl26D8C9, hs_tpl26D8Ca, hs_tpl26D8Cb, hs_tpl26D8Cc, hs_tpl26D8Cd, hs_tpl26D8Ce);
    };
    this.hs_zdWFileHandle.notEvaluated = true;
    this.hs_zdWFileHandle.evaluate = function (hs_tpl26D8Ck, hs_tpl26D8Ch) {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluate(hs_tpl26D8Ck, hs_tpl26D8Ch);
    };
    this.hs_zdWDuplexHandle.notEvaluated = true;
    this.hs_zdWDuplexHandle.evaluate = function (hs_tpl26D8Cv, hs_tpl26D8Cp, hs_tpl26D8Cs) {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluate(hs_tpl26D8Cv, hs_tpl26D8Cp, hs_tpl26D8Cs);
    };
    this.hs_showHandle.notEvaluated = true;
    this.hs_showHandle.evaluate = function (hs_file26D8CB) {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluate(hs_file26D8CB);
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
    this.hs_isReadWriteHandleType.evaluate = function (hs_ds26D8CI) {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluate(hs_ds26D8CI);
    };
    this.hs_isWritableHandleType.notEvaluated = true;
    this.hs_isWritableHandleType.evaluate = function (hs_ds26D8CL) {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluate(hs_ds26D8CL);
    };
    this.hs_isReadableHandleType.notEvaluated = true;
    this.hs_isReadableHandleType.evaluate = function (hs_ds26D8CO) {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluate(hs_ds26D8CO);
    };
    this.hs_haOtherSide.notEvaluated = true;
    this.hs_haOtherSide.evaluate = function (hs_ds26D8CR) {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluate(hs_ds26D8CR);
    };
    this.hs_haOutputNL.notEvaluated = true;
    this.hs_haOutputNL.evaluate = function (hs_ds26D8Db) {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluate(hs_ds26D8Db);
    };
    this.hs_haInputNL.notEvaluated = true;
    this.hs_haInputNL.evaluate = function (hs_ds26D8Dv) {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluate(hs_ds26D8Dv);
    };
    this.hs_haCodec.notEvaluated = true;
    this.hs_haCodec.evaluate = function (hs_ds26D8DP) {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluate(hs_ds26D8DP);
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
    this.hs_haBuffers.evaluate = function (hs_ds26D8E9) {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluate(hs_ds26D8E9);
    };
    this.hs_haCharBuffer.notEvaluated = true;
    this.hs_haCharBuffer.evaluate = function (hs_ds26D8Et) {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluate(hs_ds26D8Et);
    };
    this.hs_haLastDecode.notEvaluated = true;
    this.hs_haLastDecode.evaluate = function () {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this;
    };
    this.hs_haBufferMode.notEvaluated = true;
    this.hs_haBufferMode.evaluate = function (hs_ds26D8EN) {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluate(hs_ds26D8EN);
    };
    this.hs_haByteBuffer.notEvaluated = true;
    this.hs_haByteBuffer.evaluate = function (hs_ds26D8F7) {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluate(hs_ds26D8F7);
    };
    this.hs_haType.notEvaluated = true;
    this.hs_haType.evaluate = function (hs_ds26D8Fr) {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluate(hs_ds26D8Fr);
    };
    this.hs_haDevice.notEvaluated = true;
    this.hs_haDevice.evaluate = function () {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this;
    };
    this.hs_outputNL.notEvaluated = true;
    this.hs_outputNL.evaluate = function (hs_ds26D8FL) {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluate(hs_ds26D8FL);
    };
    this.hs_inputNL.notEvaluated = true;
    this.hs_inputNL.evaluate = function (hs_ds26D8FR) {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluate(hs_ds26D8FR);
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
    this.hs_checkHandleInvariants.evaluate = function (hs_ds26D8Q9) {
        $hs.modules.GHCziIOziHandleziTypes.loadDependencies();
        return this.evaluate(hs_ds26D8Q9);
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
    var hs_zdczeze25uK9G = new $hs.Func(2);
    var hs_zdczsze25uKab = new $hs.Thunk();
    var hs_zdcshowsPrec25uKac = new $hs.Func(2);
    var hs_zdcshowList25uKao = new $hs.Thunk();
    var hs_zdcshow25uKap = new $hs.Thunk();
    var hs_zdcshowsPrec125uKaq = new $hs.Func(2);
    var hs_zdcshowList125uKaD = new $hs.Thunk();
    var hs_zdcshow125uKaE = new $hs.Thunk();
    var hs_zdcshowsPrec225uKaF = new $hs.Func(2);
    var hs_sat26D8Tm = new $hs.Thunk();
    var hs_zdcshowList225uKaN = new $hs.Thunk();
    var hs_zdcshow225uKaO = new $hs.Thunk();
    var hs_zdcshowsPrec325uKaR = new $hs.Func(2);
    var hs_sat26D8TM = new $hs.Thunk();
    var hs_zdcshowList325uKbo = new $hs.Thunk();
    var hs_zdcshow325uKbp = new $hs.Thunk();
    var hs_sat26D8TV = new $hs.Thunk();
    var hs_zdcreadPrec25uKbs = new $hs.Thunk();
    var hs_zdcreadListPrec25uKbC = new $hs.Thunk();
    var hs_zdcreadList25uKbD = new $hs.Thunk();
    var hs_zdcreadsPrec25uKbE = new $hs.Thunk();
    var hs_sat26D8V3 = new $hs.Thunk();
    var hs_zdcreadPrec125uKbF = new $hs.Thunk();
    var hs_zdcreadListPrec125uKeo = new $hs.Thunk();
    var hs_zdcreadList125uKep = new $hs.Thunk();
    var hs_zdcreadsPrec125uKeq = new $hs.Thunk();
    var hs_zdczlze25uKer = new $hs.Func(2);
    var hs_zdczg25uKez = new $hs.Func(2);
    var hs_zdczgze25uKeH = new $hs.Func(2);
    var hs_zdczl25uKeP = new $hs.Func(2);
    var hs_zdccompare25uKeX = new $hs.Func(2);
    var hs_zdczeze125uKf5 = new $hs.Func(2);
    var hs_zdczsze125uKfd = new $hs.Func(2);
    var hs_zdcmin25uKfj = new $hs.Thunk();
    var hs_zdcmax25uKfk = new $hs.Thunk();
    var hs_zdccompare125uKfl = new $hs.Func(2);
    var hs_zdczl125uKfB = new $hs.Func(2);
    var hs_zdczgze125uKfR = new $hs.Func(2);
    var hs_zdczg125uKg7 = new $hs.Func(2);
    var hs_zdczlze125uKgn = new $hs.Func(2);
    var hs_zdczeze225uKgD = new $hs.Func(2);
    var hs_zdczsze225uKgU = new $hs.Func(2);
    var hs_zdcmin125uKh0 = new $hs.Thunk();
    var hs_zdcmax125uKh1 = new $hs.Thunk();
    var hs_zddShow25uKh2 = new $hs.Thunk();
    var hs_zdcshowsPrec425uKh3 = new $hs.Func(2);
    var hs_sat26D8VS = new $hs.Thunk();
    var hs_zdcshowList425uKhk = new $hs.Thunk();
    var hs_zdcshow425uKhl = new $hs.Thunk();
    var hs_zddRead25uKho = new $hs.Thunk();
    var hs_sat26D8We = new $hs.Thunk();
    var hs_zdcreadPrec225uKhp = new $hs.Thunk();
    var hs_zdcreadListPrec225uKhW = new $hs.Thunk();
    var hs_zdcreadList225uKhX = new $hs.Thunk();
    var hs_zdcreadsPrec225uKhY = new $hs.Thunk();
    var hs_zddOrd25uKhZ = new $hs.Thunk();
    var hs_zdczlze225uKi0 = new $hs.Func(2);
    var hs_zdczg225uKie = new $hs.Func(2);
    var hs_zdczgze225uKis = new $hs.Func(2);
    var hs_zdczl225uKiG = new $hs.Func(2);
    var hs_zdccompare225uKiU = new $hs.Func(2);
    var hs_zddEq25uKj8 = new $hs.Thunk();
    var hs_zdczeze325uKj9 = new $hs.Func(2);
    var hs_zdczsze325uKjw = new $hs.Func(2);
    var hs_zdcmin225uKjC = new $hs.Thunk();
    var hs_zdcmax225uKjD = new $hs.Thunk();
    var hs_zdctypeOf25uKjE = new $hs.Func(1);
    var hs_zdctypeOf125uKjL = new $hs.Func(1);
    this.hs_zdWHandlezuzu.evaluate = function (hs_tpl26D8BZ, hs_tpl26D8C0, hs_tpl26D8C1, hs_tpl26D8BL, hs_tpl26D8C3, hs_tpl26D8BN, hs_tpl26D8C5, hs_tpl26D8BQ, hs_tpl26D8BT, hs_tpl26D8BW, hs_tpl26D8C9, hs_tpl26D8Ca, hs_tpl26D8Cb, hs_tpl26D8Cc, hs_tpl26D8Cd, hs_tpl26D8Ce) {
        var hs_tpl26D8C2 = hs_tpl26D8BL;
        if (hs_tpl26D8BL.notEvaluated) {
            hs_tpl26D8C2 = hs_tpl26D8BL.hscall();
        }
        var hs_tpl26D8Qd = hs_tpl26D8BN;
        if (hs_tpl26D8BN.notEvaluated) {
            hs_tpl26D8Qd = hs_tpl26D8BN.hscall();
        }
        var hs_tpl26D8C4 = hs_tpl26D8Qd.data[0];
        var hs_tpl26D8Qc = hs_tpl26D8BQ;
        if (hs_tpl26D8BQ.notEvaluated) {
            hs_tpl26D8Qc = hs_tpl26D8BQ.hscall();
        }
        var hs_tpl26D8C6 = hs_tpl26D8Qc.data[0];
        var hs_tpl26D8Qb = hs_tpl26D8BT;
        if (hs_tpl26D8BT.notEvaluated) {
            hs_tpl26D8Qb = hs_tpl26D8BT.hscall();
        }
        var hs_tpl26D8C7 = hs_tpl26D8Qb.data[0];
        var hs_tpl26D8Qa = hs_tpl26D8BW;
        if (hs_tpl26D8BW.notEvaluated) {
            hs_tpl26D8Qa = hs_tpl26D8BW.hscall();
        }
        var hs_tpl26D8C8 = hs_tpl26D8Qa.data[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26D8BZ, hs_tpl26D8C0, hs_tpl26D8C1, hs_tpl26D8C2, hs_tpl26D8C3, hs_tpl26D8C4, hs_tpl26D8C5, hs_tpl26D8C6, hs_tpl26D8C7, hs_tpl26D8C8, hs_tpl26D8C9, hs_tpl26D8Ca, hs_tpl26D8Cb, hs_tpl26D8Cc, hs_tpl26D8Cd, hs_tpl26D8Ce];
        return $res;
    };
    this.hs_zdWFileHandle.evaluate = function (hs_tpl26D8Ck, hs_tpl26D8Ch) {
        var hs_tpl26D8Qe = hs_tpl26D8Ch;
        if (hs_tpl26D8Ch.notEvaluated) {
            hs_tpl26D8Qe = hs_tpl26D8Ch.hscall();
        }
        var hs_tpl26D8Cl = hs_tpl26D8Qe.data[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26D8Ck, hs_tpl26D8Cl];
        return $res;
    };
    this.hs_zdWDuplexHandle.evaluate = function (hs_tpl26D8Cv, hs_tpl26D8Cp, hs_tpl26D8Cs) {
        var hs_tpl26D8Qg = hs_tpl26D8Cp;
        if (hs_tpl26D8Cp.notEvaluated) {
            hs_tpl26D8Qg = hs_tpl26D8Cp.hscall();
        }
        var hs_tpl26D8Cw = hs_tpl26D8Qg.data[0];
        var hs_tpl26D8Qf = hs_tpl26D8Cs;
        if (hs_tpl26D8Cs.notEvaluated) {
            hs_tpl26D8Qf = hs_tpl26D8Cs.hscall();
        }
        var hs_tpl26D8Cx = hs_tpl26D8Qf.data[0];
        var $res = new $hs.Data(2);
        $res.data = [hs_tpl26D8Cv, hs_tpl26D8Cw, hs_tpl26D8Cx];
        return $res;
    };
    this.hs_showHandle.evaluate = function (hs_file26D8CB) {
        var hs_sat26D8Qi = new $hs.Thunk();
        hs_sat26D8Qi.evaluateOnce = function () {
            var hs_sat26D8Ql = new $hs.Thunk();
            hs_sat26D8Ql.evaluateOnce = function () {
                var hs_sat26D8Qn = new $hs.Data(1);
                hs_sat26D8Qn.data = ["}"];
                var hs_sat26D8Qm = new $hs.Data(2);
                hs_sat26D8Qm.data = [hs_sat26D8Qn, $hs.modules.GHCziTypes.hs_ZMZN];
                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26D8Qm);
            };
            var hs_sat26D8Qk = new $hs.Thunk();
            hs_sat26D8Qk.evaluateOnce = function () {
                return $hs.modules.GHCziShow.hs_showString.hscall(hs_file26D8CB);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26D8Qk, hs_sat26D8Ql);
        };
        var hs_sat26D8Qh = new $hs.Thunk();
        hs_sat26D8Qh.evaluateOnce = function () {
            var hs_sat26D8Qj = new $hs.Thunk();
            hs_sat26D8Qj.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("{handle: \x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26D8Qj);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26D8Qh, hs_sat26D8Qi);
    };
    this.hs_noNewlineTranslation.data = [$hs.modules.GHCziIOziHandleziTypes.hs_LF, $hs.modules.GHCziIOziHandleziTypes.hs_LF];
    this.hs_nativeNewline.data = [];
    this.hs_universalNewlineMode.data = [$hs.modules.GHCziIOziHandleziTypes.hs_CRLF, $hs.modules.GHCziIOziHandleziTypes.hs_LF];
    this.hs_nativeNewlineMode.data = [$hs.modules.GHCziIOziHandleziTypes.hs_LF, $hs.modules.GHCziIOziHandleziTypes.hs_LF];
    this.hs_isReadWriteHandleType.evaluate = function (hs_ds26D8CI) {
        var hs_wild26D8Qo = hs_ds26D8CI;
        if (hs_ds26D8CI.notEvaluated) {
            hs_wild26D8Qo = hs_ds26D8CI.hscall();
        }
        switch (hs_wild26D8Qo.tag) {
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
    this.hs_isWritableHandleType.evaluate = function (hs_ds26D8CL) {
        var hs_wild26D8Qp = hs_ds26D8CL;
        if (hs_ds26D8CL.notEvaluated) {
            hs_wild26D8Qp = hs_ds26D8CL.hscall();
        }
        switch (hs_wild26D8Qp.tag) {
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
    this.hs_isReadableHandleType.evaluate = function (hs_ds26D8CO) {
        var hs_wild26D8Qq = hs_ds26D8CO;
        if (hs_ds26D8CO.notEvaluated) {
            hs_wild26D8Qq = hs_ds26D8CO.hscall();
        }
        switch (hs_wild26D8Qq.tag) {
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
    this.hs_haOtherSide.evaluate = function (hs_ds26D8CR) {
        var hs_wild26D8QG = hs_ds26D8CR;
        if (hs_ds26D8CR.notEvaluated) {
            hs_wild26D8QG = hs_ds26D8CR.hscall();
        }
        var hs_ds926D8D9 = hs_wild26D8QG.data[15];
        if (hs_ds926D8D9.notEvaluated) {
            return hs_ds926D8D9.hscall();
        } else {
            return hs_ds926D8D9;
        }
    };
    this.hs_haOutputNL.evaluate = function (hs_ds26D8Db) {
        var hs_wild26D8QW = hs_ds26D8Db;
        if (hs_ds26D8Db.notEvaluated) {
            hs_wild26D8QW = hs_ds26D8Db.hscall();
        }
        var hs_ds826D8Dt = hs_wild26D8QW.data[14];
        if (hs_ds826D8Dt.notEvaluated) {
            return hs_ds826D8Dt.hscall();
        } else {
            return hs_ds826D8Dt;
        }
    };
    this.hs_haInputNL.evaluate = function (hs_ds26D8Dv) {
        var hs_wild26D8Rc = hs_ds26D8Dv;
        if (hs_ds26D8Dv.notEvaluated) {
            hs_wild26D8Rc = hs_ds26D8Dv.hscall();
        }
        var hs_ds726D8DN = hs_wild26D8Rc.data[13];
        if (hs_ds726D8DN.notEvaluated) {
            return hs_ds726D8DN.hscall();
        } else {
            return hs_ds726D8DN;
        }
    };
    this.hs_haCodec.evaluate = function (hs_ds26D8DP) {
        var hs_wild26D8Rs = hs_ds26D8DP;
        if (hs_ds26D8DP.notEvaluated) {
            hs_wild26D8Rs = hs_ds26D8DP.hscall();
        }
        var hs_ds626D8E7 = hs_wild26D8Rs.data[12];
        if (hs_ds626D8E7.notEvaluated) {
            return hs_ds626D8E7.hscall();
        } else {
            return hs_ds626D8E7;
        }
    };
    this.hs_haDecoder.data = [];
    this.hs_haEncoder.data = [];
    this.hs_haBuffers.evaluate = function (hs_ds26D8E9) {
        var hs_wild26D8RI = hs_ds26D8E9;
        if (hs_ds26D8E9.notEvaluated) {
            hs_wild26D8RI = hs_ds26D8E9.hscall();
        }
        var hs_rb326D8Er = hs_wild26D8RI.data[9];
        var $res = new $hs.Data(1);
        $res.data = [hs_rb326D8Er];
        return $res;
    };
    this.hs_haCharBuffer.evaluate = function (hs_ds26D8Et) {
        var hs_wild26D8RY = hs_ds26D8Et;
        if (hs_ds26D8Et.notEvaluated) {
            hs_wild26D8RY = hs_ds26D8Et.hscall();
        }
        var hs_rb226D8EL = hs_wild26D8RY.data[8];
        var $res = new $hs.Data(1);
        $res.data = [hs_rb226D8EL];
        return $res;
    };
    this.hs_haLastDecode.data = [];
    this.hs_haBufferMode.evaluate = function (hs_ds26D8EN) {
        var hs_wild26D8Se = hs_ds26D8EN;
        if (hs_ds26D8EN.notEvaluated) {
            hs_wild26D8Se = hs_ds26D8EN.hscall();
        }
        var hs_ds326D8F5 = hs_wild26D8Se.data[6];
        if (hs_ds326D8F5.notEvaluated) {
            return hs_ds326D8F5.hscall();
        } else {
            return hs_ds326D8F5;
        }
    };
    this.hs_haByteBuffer.evaluate = function (hs_ds26D8F7) {
        var hs_wild26D8Su = hs_ds26D8F7;
        if (hs_ds26D8F7.notEvaluated) {
            hs_wild26D8Su = hs_ds26D8F7.hscall();
        }
        var hs_rb26D8Fp = hs_wild26D8Su.data[5];
        var $res = new $hs.Data(1);
        $res.data = [hs_rb26D8Fp];
        return $res;
    };
    this.hs_haType.evaluate = function (hs_ds26D8Fr) {
        var hs_wild26D8SK = hs_ds26D8Fr;
        if (hs_ds26D8Fr.notEvaluated) {
            hs_wild26D8SK = hs_ds26D8Fr.hscall();
        }
        var hs_ds226D8FJ = hs_wild26D8SK.data[4];
        if (hs_ds226D8FJ.notEvaluated) {
            return hs_ds226D8FJ.hscall();
        } else {
            return hs_ds226D8FJ;
        }
    };
    this.hs_haDevice.data = [];
    this.hs_outputNL.evaluate = function (hs_ds26D8FL) {
        var hs_wild26D8SM = hs_ds26D8FL;
        if (hs_ds26D8FL.notEvaluated) {
            hs_wild26D8SM = hs_ds26D8FL.hscall();
        }
        var hs_ds226D8FP = hs_wild26D8SM.data[1];
        if (hs_ds226D8FP.notEvaluated) {
            return hs_ds226D8FP.hscall();
        } else {
            return hs_ds226D8FP;
        }
    };
    this.hs_inputNL.evaluate = function (hs_ds26D8FR) {
        var hs_wild26D8SO = hs_ds26D8FR;
        if (hs_ds26D8FR.notEvaluated) {
            hs_wild26D8SO = hs_ds26D8FR.hscall();
        }
        var hs_ds126D8FV = hs_wild26D8SO.data[0];
        if (hs_ds126D8FV.notEvaluated) {
            return hs_ds126D8FV.hscall();
        } else {
            return hs_ds126D8FV;
        }
    };
    hs_zdczeze25uK9G.evaluate = function (hs_ds26D8FZ, hs_ds126D8G3) {
        var hs_wild26D8ST = hs_ds26D8FZ;
        if (hs_ds26D8FZ.notEvaluated) {
            hs_wild26D8ST = hs_ds26D8FZ.hscall();
        }
        switch (hs_wild26D8ST.tag) {
        case 1:
            var hs_rb26D8G7 = hs_wild26D8ST.data[1];
            var hs_wild126D8T2 = hs_ds126D8G3;
            if (hs_ds126D8G3.notEvaluated) {
                hs_wild126D8T2 = hs_ds126D8G3.hscall();
            }
            switch (hs_wild126D8T2.tag) {
            case 1:
                var hs_rb126D8G9 = hs_wild126D8T2.data[1];
                var hs_sat26D8T6 = new $hs.Data(1);
                hs_sat26D8T6.data = [hs_rb126D8G9];
                var hs_sat26D8T4 = new $hs.Data(1);
                hs_sat26D8T4.data = [hs_rb26D8G7];
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziMVar.hs_zdfEqMVar, hs_sat26D8T4, hs_sat26D8T6);
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_rb26D8Gn = hs_wild26D8ST.data[1];
            var hs_wild126D8SQ = hs_ds126D8G3;
            if (hs_ds126D8G3.notEvaluated) {
                hs_wild126D8SQ = hs_ds126D8G3.hscall();
            }
            switch (hs_wild126D8SQ.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_rb226D8Gp = hs_wild126D8SQ.data[1];
                var hs_sat26D8SW = new $hs.Data(1);
                hs_sat26D8SW.data = [hs_rb226D8Gp];
                var hs_sat26D8SP = new $hs.Data(1);
                hs_sat26D8SP.data = [hs_rb26D8Gn];
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziMVar.hs_zdfEqMVar, hs_sat26D8SP, hs_sat26D8SW);
            }
        }
    };
    this.hs_zdfEqHandle.data = [hs_zdczeze25uK9G, hs_zdczsze25uKab];
    hs_zdczsze25uKab.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmzsze.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfEqHandle);
    };
    hs_zdcshowsPrec25uKac.evaluate = function (hs_ds26D8GD, hs_t26D8Gv) {
        var hs_wild26D8T8 = hs_t26D8Gv;
        if (hs_t26D8Gv.notEvaluated) {
            hs_wild26D8T8 = hs_t26D8Gv.hscall();
        }
        switch (hs_wild26D8T8.tag) {
        case 1:
            var hs_sat26D8Td = new $hs.Thunk();
            hs_sat26D8Td.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("closed\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26D8Td);
        case 2:
            var hs_sat26D8T7 = new $hs.Thunk();
            hs_sat26D8T7.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("semi-closed\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26D8T7);
        case 3:
            var hs_sat26D8T9 = new $hs.Thunk();
            hs_sat26D8T9.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("readable\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26D8T9);
        case 4:
            var hs_sat26D8Ta = new $hs.Thunk();
            hs_sat26D8Ta.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("writable\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26D8Ta);
        case 5:
            var hs_sat26D8Tb = new $hs.Thunk();
            hs_sat26D8Tb.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("writable (append)\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26D8Tb);
        case 6:
            var hs_sat26D8Tc = new $hs.Thunk();
            hs_sat26D8Tc.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("read-writable\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26D8Tc);
        }
    };
    this.hs_zdfShowHandleType.data = [hs_zdcshowsPrec25uKac, hs_zdcshow25uKap, hs_zdcshowList25uKao];
    hs_zdcshowList25uKao.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfShowHandleType);
    };
    hs_zdcshow25uKap.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfShowHandleType);
    };
    hs_zdcshowsPrec125uKaq.evaluate = function (hs_ds26D8GS, hs_ds126D8GJ) {
        var hs_wild26D8Tg = hs_ds126D8GJ;
        if (hs_ds126D8GJ.notEvaluated) {
            hs_wild26D8Tg = hs_ds126D8GJ.hscall();
        }
        switch (hs_wild26D8Tg.tag) {
        case 1:
            var hs_file26D8GN = hs_wild26D8Tg.data[0];
            return $hs.modules.GHCziIOziHandleziTypes.hs_showHandle.hscall(hs_file26D8GN);
        case 2:
            var hs_file26D8GR = hs_wild26D8Tg.data[0];
            return $hs.modules.GHCziIOziHandleziTypes.hs_showHandle.hscall(hs_file26D8GR);
        }
    };
    this.hs_zdfShowHandle.data = [hs_zdcshowsPrec125uKaq, hs_zdcshow125uKaE, hs_zdcshowList125uKaD];
    hs_zdcshowList125uKaD.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfShowHandle);
    };
    hs_zdcshow125uKaE.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfShowHandle);
    };
    hs_zdcshowsPrec225uKaF.evaluate = function (hs_ds26D8H2, hs_ds126D8GY) {
        var hs_wild26D8Tj = hs_ds126D8GY;
        if (hs_ds126D8GY.notEvaluated) {
            hs_wild26D8Tj = hs_ds126D8GY.hscall();
        }
        switch (hs_wild26D8Tj.tag) {
        case 1:
            var hs_sat26D8Tk = new $hs.Thunk();
            hs_sat26D8Tk.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("LF\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26D8Tk);
        case 2:
            var hs_sat26D8Ti = new $hs.Thunk();
            hs_sat26D8Ti.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CRLF\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26D8Ti);
        }
    };
    hs_sat26D8Tm.evaluateOnce = function () {
        var hs_sat26D8Tl = new $hs.Data(1);
        hs_sat26D8Tl.data = [0];
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfShowNewline, hs_sat26D8Tl);
    };
    this.hs_zdfShowNewline.data = [hs_zdcshowsPrec225uKaF, hs_zdcshow225uKaO, hs_zdcshowList225uKaN];
    hs_zdcshowList225uKaN.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26D8Tm);
    };
    hs_zdcshow225uKaO.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfShowNewline);
    };
    hs_zdcshowsPrec325uKaR.evaluate = function (hs_a26D8He, hs_ds26D8Ha) {
        var hs_wild26D8To = hs_ds26D8Ha;
        if (hs_ds26D8Ha.notEvaluated) {
            hs_wild26D8To = hs_ds26D8Ha.hscall();
        }
        var hs_b126D8Hm = hs_wild26D8To.data[0];
        var hs_b226D8Ht = hs_wild26D8To.data[1];
        var hs_sat26D8Tp = new $hs.Thunk();
        hs_sat26D8Tp.evaluateOnce = function () {
            var hs_sat26D8Ts = new $hs.Thunk();
            hs_sat26D8Ts.evaluateOnce = function () {
                var hs_sat26D8Tv = new $hs.Thunk();
                hs_sat26D8Tv.evaluateOnce = function () {
                    var hs_sat26D8Ty = new $hs.Thunk();
                    hs_sat26D8Ty.evaluateOnce = function () {
                        var hs_sat26D8TB = new $hs.Thunk();
                        hs_sat26D8TB.evaluateOnce = function () {
                            var hs_sat26D8TE = new $hs.Thunk();
                            hs_sat26D8TE.evaluateOnce = function () {
                                var hs_sat26D8TH = new $hs.Thunk();
                                hs_sat26D8TH.evaluateOnce = function () {
                                    var hs_sat26D8TK = new $hs.Data(1);
                                    hs_sat26D8TK.data = ["}"];
                                    var hs_sat26D8TJ = new $hs.Data(2);
                                    hs_sat26D8TJ.data = [hs_sat26D8TK, $hs.modules.GHCziTypes.hs_ZMZN];
                                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26D8TJ);
                                };
                                var hs_sat26D8TG = new $hs.Thunk();
                                hs_sat26D8TG.evaluateOnce = function () {
                                    var hs_sat26D8TI = new $hs.Data(1);
                                    hs_sat26D8TI.data = [0];
                                    return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfShowNewline, hs_sat26D8TI, hs_b226D8Ht);
                                };
                                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26D8TG, hs_sat26D8TH);
                            };
                            var hs_sat26D8TD = new $hs.Thunk();
                            hs_sat26D8TD.evaluateOnce = function () {
                                var hs_sat26D8TF = new $hs.Thunk();
                                hs_sat26D8TF.evaluateOnce = function () {
                                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("outputNL = \x00");
                                };
                                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26D8TF);
                            };
                            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26D8TD, hs_sat26D8TE);
                        };
                        var hs_sat26D8TA = new $hs.Thunk();
                        hs_sat26D8TA.evaluateOnce = function () {
                            var hs_sat26D8TC = new $hs.Thunk();
                            hs_sat26D8TC.evaluateOnce = function () {
                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall(", \x00");
                            };
                            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26D8TC);
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26D8TA, hs_sat26D8TB);
                    };
                    var hs_sat26D8Tx = new $hs.Thunk();
                    hs_sat26D8Tx.evaluateOnce = function () {
                        var hs_sat26D8Tz = new $hs.Data(1);
                        hs_sat26D8Tz.data = [0];
                        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfShowNewline, hs_sat26D8Tz, hs_b126D8Hm);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26D8Tx, hs_sat26D8Ty);
                };
                var hs_sat26D8Tu = new $hs.Thunk();
                hs_sat26D8Tu.evaluateOnce = function () {
                    var hs_sat26D8Tw = new $hs.Thunk();
                    hs_sat26D8Tw.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("inputNL = \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26D8Tw);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26D8Tu, hs_sat26D8Tv);
            };
            var hs_sat26D8Tr = new $hs.Thunk();
            hs_sat26D8Tr.evaluateOnce = function () {
                var hs_sat26D8Tt = new $hs.Thunk();
                hs_sat26D8Tt.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("NewlineMode {\x00");
                };
                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26D8Tt);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26D8Tr, hs_sat26D8Ts);
        };
        var hs_sat26D8Tn = new $hs.Thunk();
        hs_sat26D8Tn.evaluateOnce = function () {
            var hs_sat26D8Tq = new $hs.Data(1);
            hs_sat26D8Tq.data = [11];
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_a26D8He, hs_sat26D8Tq);
        };
        return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26D8Tn, hs_sat26D8Tp);
    };
    hs_sat26D8TM.evaluateOnce = function () {
        var hs_sat26D8TL = new $hs.Data(1);
        hs_sat26D8TL.data = [0];
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfShowNewlineMode, hs_sat26D8TL);
    };
    this.hs_zdfShowNewlineMode.data = [hs_zdcshowsPrec325uKaR, hs_zdcshow325uKbp, hs_zdcshowList325uKbo];
    hs_zdcshowList325uKbo.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26D8TM);
    };
    hs_zdcshow325uKbp.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfShowNewlineMode);
    };
    hs_sat26D8TV.evaluateOnce = function () {
        var hs_sat26D8TO = new $hs.Thunk();
        hs_sat26D8TO.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziIOziHandleziTypes.hs_CRLF);
        };
        var hs_sat26D8TP = new $hs.Thunk();
        hs_sat26D8TP.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CRLF\x00");
        };
        var hs_sat26D8TQ = new $hs.Data(1);
        hs_sat26D8TQ.data = [hs_sat26D8TP, hs_sat26D8TO];
        var hs_sat26D8TR = new $hs.Data(2);
        hs_sat26D8TR.data = [hs_sat26D8TQ, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26D8TS = new $hs.Thunk();
        hs_sat26D8TS.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziIOziHandleziTypes.hs_LF);
        };
        var hs_sat26D8TT = new $hs.Thunk();
        hs_sat26D8TT.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("LF\x00");
        };
        var hs_sat26D8TU = new $hs.Data(1);
        hs_sat26D8TU.data = [hs_sat26D8TT, hs_sat26D8TS];
        var hs_sat26D8TN = new $hs.Data(2);
        hs_sat26D8TN.data = [hs_sat26D8TU, hs_sat26D8TR];
        return $hs.modules.GHCziRead.hs_choose.hscall(hs_sat26D8TN);
    };
    hs_zdcreadPrec25uKbs.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_parens.hscall(hs_sat26D8TV);
    };
    this.hs_zdfReadNewline.data = [hs_zdcreadsPrec25uKbE, hs_zdcreadList25uKbD, hs_zdcreadPrec25uKbs, hs_zdcreadListPrec25uKbC];
    hs_zdcreadListPrec25uKbC.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListPrecDefault.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfReadNewline);
    };
    hs_zdcreadList25uKbD.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListDefault.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfReadNewline);
    };
    hs_zdcreadsPrec25uKbE.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadsPrec.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfReadNewline);
    };
    hs_sat26D8V3.evaluateOnce = function () {
        var hs_sat26D8TX = new $hs.Thunk();
        hs_sat26D8TX.evaluateOnce = function () {
            var hs_sat26D8TY = new $hs.Func(1);
            hs_sat26D8TY.evaluate = function (hs_ds26D8I3) {
                var hs_fail26D8I2 = new $hs.Func(1);
                hs_fail26D8I2.evaluate = function (hs_ds126D8I1) {
                    var hs_sat26D8V2 = new $hs.Thunk();
                    hs_sat26D8V2.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                    };
                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26D8V2);
                };
                var hs_wild26D8U0 = hs_ds26D8I3;
                if (hs_ds26D8I3.notEvaluated) {
                    hs_wild26D8U0 = hs_ds26D8I3.hscall();
                }
                switch (hs_wild26D8U0.tag) {
                case 4:
                    var hs_ds126D8I6 = hs_wild26D8U0.data[0];
                    var hs_sat26D8U1 = new $hs.Thunk();
                    hs_sat26D8U1.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("NewlineMode\x00");
                    };
                    var hs_wild126D8U2 = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds126D8I6, hs_sat26D8U1);
                    switch (hs_wild126D8U2.tag) {
                    case 1:
                        return hs_fail26D8I2.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    case 2:
                        var hs_sat26D8TZ = new $hs.Func(1);
                        hs_sat26D8TZ.evaluate = function (hs_ds226D8If) {
                            var hs_fail126D8Ie = new $hs.Func(1);
                            hs_fail126D8Ie.evaluate = function (hs_ds326D8Id) {
                                var hs_sat26D8V1 = new $hs.Thunk();
                                hs_sat26D8V1.evaluateOnce = function () {
                                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                };
                                return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26D8V1);
                            };
                            var hs_wild226D8U9 = hs_ds226D8If;
                            if (hs_ds226D8If.notEvaluated) {
                                hs_wild226D8U9 = hs_ds226D8If.hscall();
                            }
                            switch (hs_wild226D8U9.tag) {
                            case 3:
                                var hs_ds326D8Ii = hs_wild226D8U9.data[0];
                                var hs_wild326D8U8 = hs_ds326D8Ii;
                                if (hs_ds326D8Ii.notEvaluated) {
                                    hs_wild326D8U8 = hs_ds326D8Ii.hscall();
                                }
                                switch (hs_wild326D8U8.tag) {
                                case 1:
                                    return hs_fail126D8Ie.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                case 2:
                                    var hs_ds426D8Im = hs_wild326D8U8.data[0];
                                    var hs_ds526D8Ir = hs_wild326D8U8.data[1];
                                    var hs_wild426D8U7 = hs_ds426D8Im;
                                    if (hs_ds426D8Im.notEvaluated) {
                                        hs_wild426D8U7 = hs_ds426D8Im.hscall();
                                    }
                                    var hs_ds626D8Ip = hs_wild426D8U7.data[0];
                                    var hs_ds726D8U6 = hs_ds626D8Ip;
                                    if (hs_ds626D8Ip.notEvaluated) {
                                        hs_ds726D8U6 = hs_ds626D8Ip.hscall();
                                    }
                                    switch (hs_ds726D8U6) {
                                    case "{":
                                        var hs_wild526D8U5 = hs_ds526D8Ir;
                                        if (hs_ds526D8Ir.notEvaluated) {
                                            hs_wild526D8U5 = hs_ds526D8Ir.hscall();
                                        }
                                        switch (hs_wild526D8U5.tag) {
                                        case 1:
                                            var hs_sat26D8Ua = new $hs.Func(1);
                                            hs_sat26D8Ua.evaluate = function (hs_ds826D8Iz) {
                                                var hs_fail226D8Iy = new $hs.Func(1);
                                                hs_fail226D8Iy.evaluate = function (hs_ds926D8Ix) {
                                                    var hs_sat26D8V0 = new $hs.Thunk();
                                                    hs_sat26D8V0.evaluateOnce = function () {
                                                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                    };
                                                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26D8V0);
                                                };
                                                var hs_wild626D8Uc = hs_ds826D8Iz;
                                                if (hs_ds826D8Iz.notEvaluated) {
                                                    hs_wild626D8Uc = hs_ds826D8Iz.hscall();
                                                }
                                                switch (hs_wild626D8Uc.tag) {
                                                case 4:
                                                    var hs_ds926D8IC = hs_wild626D8Uc.data[0];
                                                    var hs_sat26D8Ud = new $hs.Thunk();
                                                    hs_sat26D8Ud.evaluateOnce = function () {
                                                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("inputNL\x00");
                                                    };
                                                    var hs_wild726D8Ue = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds926D8IC, hs_sat26D8Ud);
                                                    switch (hs_wild726D8Ue.tag) {
                                                    case 1:
                                                        return hs_fail226D8Iy.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                    case 2:
                                                        var hs_sat26D8Ub = new $hs.Func(1);
                                                        hs_sat26D8Ub.evaluate = function (hs_ds1026D8IL) {
                                                            var hs_fail326D8IK = new $hs.Func(1);
                                                            hs_fail326D8IK.evaluate = function (hs_ds1126D8IJ) {
                                                                var hs_sat26D8UZ = new $hs.Thunk();
                                                                hs_sat26D8UZ.evaluateOnce = function () {
                                                                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                                };
                                                                return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26D8UZ);
                                                            };
                                                            var hs_wild826D8Ul = hs_ds1026D8IL;
                                                            if (hs_ds1026D8IL.notEvaluated) {
                                                                hs_wild826D8Ul = hs_ds1026D8IL.hscall();
                                                            }
                                                            switch (hs_wild826D8Ul.tag) {
                                                            case 3:
                                                                var hs_ds1126D8IO = hs_wild826D8Ul.data[0];
                                                                var hs_wild926D8Uk = hs_ds1126D8IO;
                                                                if (hs_ds1126D8IO.notEvaluated) {
                                                                    hs_wild926D8Uk = hs_ds1126D8IO.hscall();
                                                                }
                                                                switch (hs_wild926D8Uk.tag) {
                                                                case 1:
                                                                    return hs_fail326D8IK.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                case 2:
                                                                    var hs_ds1226D8IS = hs_wild926D8Uk.data[0];
                                                                    var hs_ds1326D8IX = hs_wild926D8Uk.data[1];
                                                                    var hs_wild1026D8Uj = hs_ds1226D8IS;
                                                                    if (hs_ds1226D8IS.notEvaluated) {
                                                                        hs_wild1026D8Uj = hs_ds1226D8IS.hscall();
                                                                    }
                                                                    var hs_ds1426D8IV = hs_wild1026D8Uj.data[0];
                                                                    var hs_ds1526D8Ui = hs_ds1426D8IV;
                                                                    if (hs_ds1426D8IV.notEvaluated) {
                                                                        hs_ds1526D8Ui = hs_ds1426D8IV.hscall();
                                                                    }
                                                                    switch (hs_ds1526D8Ui) {
                                                                    case "=":
                                                                        var hs_wild1126D8Uh = hs_ds1326D8IX;
                                                                        if (hs_ds1326D8IX.notEvaluated) {
                                                                            hs_wild1126D8Uh = hs_ds1326D8IX.hscall();
                                                                        }
                                                                        switch (hs_wild1126D8Uh.tag) {
                                                                        case 1:
                                                                            var hs_sat26D8Un = new $hs.Func(1);
                                                                            hs_sat26D8Un.evaluate = function (hs_a126D8Kf) {
                                                                                var hs_sat26D8Up = new $hs.Func(1);
                                                                                hs_sat26D8Up.evaluate = function (hs_ds1626D8J8) {
                                                                                    var hs_fail426D8J7 = new $hs.Func(1);
                                                                                    hs_fail426D8J7.evaluate = function (hs_ds1726D8J6) {
                                                                                        var hs_sat26D8UY = new $hs.Thunk();
                                                                                        hs_sat26D8UY.evaluateOnce = function () {
                                                                                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                                                        };
                                                                                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26D8UY);
                                                                                    };
                                                                                    var hs_wild1226D8Uw = hs_ds1626D8J8;
                                                                                    if (hs_ds1626D8J8.notEvaluated) {
                                                                                        hs_wild1226D8Uw = hs_ds1626D8J8.hscall();
                                                                                    }
                                                                                    switch (hs_wild1226D8Uw.tag) {
                                                                                    case 3:
                                                                                        var hs_ds1726D8Jb = hs_wild1226D8Uw.data[0];
                                                                                        var hs_wild1326D8Uv = hs_ds1726D8Jb;
                                                                                        if (hs_ds1726D8Jb.notEvaluated) {
                                                                                            hs_wild1326D8Uv = hs_ds1726D8Jb.hscall();
                                                                                        }
                                                                                        switch (hs_wild1326D8Uv.tag) {
                                                                                        case 1:
                                                                                            return hs_fail426D8J7.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                        case 2:
                                                                                            var hs_ds1826D8Jf = hs_wild1326D8Uv.data[0];
                                                                                            var hs_ds1926D8Jk = hs_wild1326D8Uv.data[1];
                                                                                            var hs_wild1426D8Uu = hs_ds1826D8Jf;
                                                                                            if (hs_ds1826D8Jf.notEvaluated) {
                                                                                                hs_wild1426D8Uu = hs_ds1826D8Jf.hscall();
                                                                                            }
                                                                                            var hs_ds2026D8Ji = hs_wild1426D8Uu.data[0];
                                                                                            var hs_ds2126D8Ut = hs_ds2026D8Ji;
                                                                                            if (hs_ds2026D8Ji.notEvaluated) {
                                                                                                hs_ds2126D8Ut = hs_ds2026D8Ji.hscall();
                                                                                            }
                                                                                            switch (hs_ds2126D8Ut) {
                                                                                            case ",":
                                                                                                var hs_wild1526D8Us = hs_ds1926D8Jk;
                                                                                                if (hs_ds1926D8Jk.notEvaluated) {
                                                                                                    hs_wild1526D8Us = hs_ds1926D8Jk.hscall();
                                                                                                }
                                                                                                switch (hs_wild1526D8Us.tag) {
                                                                                                case 1:
                                                                                                    var hs_sat26D8Ux = new $hs.Func(1);
                                                                                                    hs_sat26D8Ux.evaluate = function (hs_ds2226D8Js) {
                                                                                                        var hs_fail526D8Jr = new $hs.Func(1);
                                                                                                        hs_fail526D8Jr.evaluate = function (hs_ds2326D8Jq) {
                                                                                                            var hs_sat26D8UX = new $hs.Thunk();
                                                                                                            hs_sat26D8UX.evaluateOnce = function () {
                                                                                                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                                                                            };
                                                                                                            return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26D8UX);
                                                                                                        };
                                                                                                        var hs_wild1626D8Uz = hs_ds2226D8Js;
                                                                                                        if (hs_ds2226D8Js.notEvaluated) {
                                                                                                            hs_wild1626D8Uz = hs_ds2226D8Js.hscall();
                                                                                                        }
                                                                                                        switch (hs_wild1626D8Uz.tag) {
                                                                                                        case 4:
                                                                                                            var hs_ds2326D8Jv = hs_wild1626D8Uz.data[0];
                                                                                                            var hs_sat26D8UA = new $hs.Thunk();
                                                                                                            hs_sat26D8UA.evaluateOnce = function () {
                                                                                                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("outputNL\x00");
                                                                                                            };
                                                                                                            var hs_wild1726D8UB = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds2326D8Jv, hs_sat26D8UA);
                                                                                                            switch (hs_wild1726D8UB.tag) {
                                                                                                            case 1:
                                                                                                                return hs_fail526D8Jr.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                            case 2:
                                                                                                                var hs_sat26D8Uy = new $hs.Func(1);
                                                                                                                hs_sat26D8Uy.evaluate = function (hs_ds2426D8JE) {
                                                                                                                    var hs_fail626D8JD = new $hs.Func(1);
                                                                                                                    hs_fail626D8JD.evaluate = function (hs_ds2526D8JC) {
                                                                                                                        var hs_sat26D8UW = new $hs.Thunk();
                                                                                                                        hs_sat26D8UW.evaluateOnce = function () {
                                                                                                                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                                                                                        };
                                                                                                                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26D8UW);
                                                                                                                    };
                                                                                                                    var hs_wild1826D8UI = hs_ds2426D8JE;
                                                                                                                    if (hs_ds2426D8JE.notEvaluated) {
                                                                                                                        hs_wild1826D8UI = hs_ds2426D8JE.hscall();
                                                                                                                    }
                                                                                                                    switch (hs_wild1826D8UI.tag) {
                                                                                                                    case 3:
                                                                                                                        var hs_ds2526D8JH = hs_wild1826D8UI.data[0];
                                                                                                                        var hs_wild1926D8UH = hs_ds2526D8JH;
                                                                                                                        if (hs_ds2526D8JH.notEvaluated) {
                                                                                                                            hs_wild1926D8UH = hs_ds2526D8JH.hscall();
                                                                                                                        }
                                                                                                                        switch (hs_wild1926D8UH.tag) {
                                                                                                                        case 1:
                                                                                                                            return hs_fail626D8JD.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                                        case 2:
                                                                                                                            var hs_ds2626D8JL = hs_wild1926D8UH.data[0];
                                                                                                                            var hs_ds2726D8JQ = hs_wild1926D8UH.data[1];
                                                                                                                            var hs_wild2026D8UG = hs_ds2626D8JL;
                                                                                                                            if (hs_ds2626D8JL.notEvaluated) {
                                                                                                                                hs_wild2026D8UG = hs_ds2626D8JL.hscall();
                                                                                                                            }
                                                                                                                            var hs_ds2826D8JO = hs_wild2026D8UG.data[0];
                                                                                                                            var hs_ds2926D8UF = hs_ds2826D8JO;
                                                                                                                            if (hs_ds2826D8JO.notEvaluated) {
                                                                                                                                hs_ds2926D8UF = hs_ds2826D8JO.hscall();
                                                                                                                            }
                                                                                                                            switch (hs_ds2926D8UF) {
                                                                                                                            case "=":
                                                                                                                                var hs_wild2126D8UE = hs_ds2726D8JQ;
                                                                                                                                if (hs_ds2726D8JQ.notEvaluated) {
                                                                                                                                    hs_wild2126D8UE = hs_ds2726D8JQ.hscall();
                                                                                                                                }
                                                                                                                                switch (hs_wild2126D8UE.tag) {
                                                                                                                                case 1:
                                                                                                                                    var hs_sat26D8UK = new $hs.Func(1);
                                                                                                                                    hs_sat26D8UK.evaluate = function (hs_a226D8Kg) {
                                                                                                                                        var hs_sat26D8UM = new $hs.Func(1);
                                                                                                                                        hs_sat26D8UM.evaluate = function (hs_ds3026D8K1) {
                                                                                                                                            var hs_fail726D8K0 = new $hs.Func(1);
                                                                                                                                            hs_fail726D8K0.evaluate = function (hs_ds3126D8JZ) {
                                                                                                                                                var hs_sat26D8UV = new $hs.Thunk();
                                                                                                                                                hs_sat26D8UV.evaluateOnce = function () {
                                                                                                                                                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                                                                                                                };
                                                                                                                                                return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26D8UV);
                                                                                                                                            };
                                                                                                                                            var hs_wild2226D8UT = hs_ds3026D8K1;
                                                                                                                                            if (hs_ds3026D8K1.notEvaluated) {
                                                                                                                                                hs_wild2226D8UT = hs_ds3026D8K1.hscall();
                                                                                                                                            }
                                                                                                                                            switch (hs_wild2226D8UT.tag) {
                                                                                                                                            case 3:
                                                                                                                                                var hs_ds3126D8K4 = hs_wild2226D8UT.data[0];
                                                                                                                                                var hs_wild2326D8US = hs_ds3126D8K4;
                                                                                                                                                if (hs_ds3126D8K4.notEvaluated) {
                                                                                                                                                    hs_wild2326D8US = hs_ds3126D8K4.hscall();
                                                                                                                                                }
                                                                                                                                                switch (hs_wild2326D8US.tag) {
                                                                                                                                                case 1:
                                                                                                                                                    return hs_fail726D8K0.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                                                                case 2:
                                                                                                                                                    var hs_ds3226D8K8 = hs_wild2326D8US.data[0];
                                                                                                                                                    var hs_ds3326D8Kd = hs_wild2326D8US.data[1];
                                                                                                                                                    var hs_wild2426D8UR = hs_ds3226D8K8;
                                                                                                                                                    if (hs_ds3226D8K8.notEvaluated) {
                                                                                                                                                        hs_wild2426D8UR = hs_ds3226D8K8.hscall();
                                                                                                                                                    }
                                                                                                                                                    var hs_ds3426D8Kb = hs_wild2426D8UR.data[0];
                                                                                                                                                    var hs_ds3526D8UQ = hs_ds3426D8Kb;
                                                                                                                                                    if (hs_ds3426D8Kb.notEvaluated) {
                                                                                                                                                        hs_ds3526D8UQ = hs_ds3426D8Kb.hscall();
                                                                                                                                                    }
                                                                                                                                                    switch (hs_ds3526D8UQ) {
                                                                                                                                                    case "}":
                                                                                                                                                        var hs_wild2526D8UP = hs_ds3326D8Kd;
                                                                                                                                                        if (hs_ds3326D8Kd.notEvaluated) {
                                                                                                                                                            hs_wild2526D8UP = hs_ds3326D8Kd.hscall();
                                                                                                                                                        }
                                                                                                                                                        switch (hs_wild2526D8UP.tag) {
                                                                                                                                                        case 1:
                                                                                                                                                            var hs_sat26D8UU = new $hs.Data(1);
                                                                                                                                                            hs_sat26D8UU.data = [hs_a126D8Kf, hs_a226D8Kg];
                                                                                                                                                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26D8UU);
                                                                                                                                                        case 2:
                                                                                                                                                            return hs_fail726D8K0.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                                                                        }
                                                                                                                                                    default:
                                                                                                                                                        return hs_fail726D8K0.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            default:
                                                                                                                                                return hs_fail726D8K0.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                                                            }
                                                                                                                                        };
                                                                                                                                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26D8UM);
                                                                                                                                    };
                                                                                                                                    var hs_sat26D8UJ = new $hs.Thunk();
                                                                                                                                    hs_sat26D8UJ.evaluateOnce = function () {
                                                                                                                                        var hs_sat26D8UL = new $hs.Thunk();
                                                                                                                                        hs_sat26D8UL.evaluateOnce = function () {
                                                                                                                                            return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfReadNewline);
                                                                                                                                        };
                                                                                                                                        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_reset.hscall(hs_sat26D8UL);
                                                                                                                                    };
                                                                                                                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26D8UJ, hs_sat26D8UK);
                                                                                                                                case 2:
                                                                                                                                    return hs_fail626D8JD.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                                                }
                                                                                                                            default:
                                                                                                                                return hs_fail626D8JD.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                                            }
                                                                                                                        }
                                                                                                                    default:
                                                                                                                        return hs_fail626D8JD.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                                    }
                                                                                                                };
                                                                                                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26D8Uy);
                                                                                                            }
                                                                                                        default:
                                                                                                            return hs_fail526D8Jr.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                        }
                                                                                                    };
                                                                                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26D8Ux);
                                                                                                case 2:
                                                                                                    return hs_fail426D8J7.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                }
                                                                                            default:
                                                                                                return hs_fail426D8J7.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                            }
                                                                                        }
                                                                                    default:
                                                                                        return hs_fail426D8J7.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                    }
                                                                                };
                                                                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26D8Up);
                                                                            };
                                                                            var hs_sat26D8Um = new $hs.Thunk();
                                                                            hs_sat26D8Um.evaluateOnce = function () {
                                                                                var hs_sat26D8Uo = new $hs.Thunk();
                                                                                hs_sat26D8Uo.evaluateOnce = function () {
                                                                                    return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfReadNewline);
                                                                                };
                                                                                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_reset.hscall(hs_sat26D8Uo);
                                                                            };
                                                                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26D8Um, hs_sat26D8Un);
                                                                        case 2:
                                                                            return hs_fail326D8IK.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                        }
                                                                    default:
                                                                        return hs_fail326D8IK.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                    }
                                                                }
                                                            default:
                                                                return hs_fail326D8IK.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                            }
                                                        };
                                                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26D8Ub);
                                                    }
                                                default:
                                                    return hs_fail226D8Iy.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                }
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26D8Ua);
                                        case 2:
                                            return hs_fail126D8Ie.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                        }
                                    default:
                                        return hs_fail126D8Ie.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                    }
                                }
                            default:
                                return hs_fail126D8Ie.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                            }
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26D8TZ);
                    }
                default:
                    return hs_fail26D8I2.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                }
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26D8TY);
        };
        var hs_sat26D8TW = new $hs.Data(1);
        hs_sat26D8TW.data = [11];
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_prec.hscall(hs_sat26D8TW, hs_sat26D8TX);
    };
    hs_zdcreadPrec125uKbF.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_parens.hscall(hs_sat26D8V3);
    };
    this.hs_zdfReadNewlineMode.data = [hs_zdcreadsPrec125uKeq, hs_zdcreadList125uKep, hs_zdcreadPrec125uKbF, hs_zdcreadListPrec125uKeo];
    hs_zdcreadListPrec125uKeo.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListPrecDefault.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfReadNewlineMode);
    };
    hs_zdcreadList125uKep.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListDefault.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfReadNewlineMode);
    };
    hs_zdcreadsPrec125uKeq.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadsPrec.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfReadNewlineMode);
    };
    hs_zdczlze25uKer.evaluate = function (hs_a26D8KK, hs_b26D8KM) {
        var hs_wild26D8V5 = hs_a26D8KK;
        if (hs_a26D8KK.notEvaluated) {
            hs_wild26D8V5 = hs_a26D8KK.hscall();
        }
        switch (hs_wild26D8V5.tag) {
        case 1:
            var hs_wild126D8V6 = hs_b26D8KM;
            if (hs_b26D8KM.notEvaluated) {
                hs_wild126D8V6 = hs_b26D8KM.hscall();
            }
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild126D8V4 = hs_b26D8KM;
            if (hs_b26D8KM.notEvaluated) {
                hs_wild126D8V4 = hs_b26D8KM.hscall();
            }
            switch (hs_wild126D8V4.tag) {
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
    hs_zdczg25uKez.evaluate = function (hs_a26D8KS, hs_b26D8KU) {
        var hs_wild26D8V8 = hs_a26D8KS;
        if (hs_a26D8KS.notEvaluated) {
            hs_wild26D8V8 = hs_a26D8KS.hscall();
        }
        switch (hs_wild26D8V8.tag) {
        case 1:
            var hs_wild126D8V9 = hs_b26D8KU;
            if (hs_b26D8KU.notEvaluated) {
                hs_wild126D8V9 = hs_b26D8KU.hscall();
            }
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild126D8V7 = hs_b26D8KU;
            if (hs_b26D8KU.notEvaluated) {
                hs_wild126D8V7 = hs_b26D8KU.hscall();
            }
            switch (hs_wild126D8V7.tag) {
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
    hs_zdczgze25uKeH.evaluate = function (hs_a26D8L0, hs_b26D8L2) {
        var hs_wild26D8Vb = hs_a26D8L0;
        if (hs_a26D8L0.notEvaluated) {
            hs_wild26D8Vb = hs_a26D8L0.hscall();
        }
        switch (hs_wild26D8Vb.tag) {
        case 1:
            var hs_wild126D8Vc = hs_b26D8L2;
            if (hs_b26D8L2.notEvaluated) {
                hs_wild126D8Vc = hs_b26D8L2.hscall();
            }
            switch (hs_wild126D8Vc.tag) {
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
            var hs_wild126D8Va = hs_b26D8L2;
            if (hs_b26D8L2.notEvaluated) {
                hs_wild126D8Va = hs_b26D8L2.hscall();
            }
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczl25uKeP.evaluate = function (hs_a26D8L8, hs_b26D8La) {
        var hs_wild26D8Ve = hs_a26D8L8;
        if (hs_a26D8L8.notEvaluated) {
            hs_wild26D8Ve = hs_a26D8L8.hscall();
        }
        switch (hs_wild26D8Ve.tag) {
        case 1:
            var hs_wild126D8Vf = hs_b26D8La;
            if (hs_b26D8La.notEvaluated) {
                hs_wild126D8Vf = hs_b26D8La.hscall();
            }
            switch (hs_wild126D8Vf.tag) {
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
            var hs_wild126D8Vd = hs_b26D8La;
            if (hs_b26D8La.notEvaluated) {
                hs_wild126D8Vd = hs_b26D8La.hscall();
            }
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdccompare25uKeX.evaluate = function (hs_a26D8Lg, hs_b26D8Li) {
        var hs_wild26D8Vh = hs_a26D8Lg;
        if (hs_a26D8Lg.notEvaluated) {
            hs_wild26D8Vh = hs_a26D8Lg.hscall();
        }
        switch (hs_wild26D8Vh.tag) {
        case 1:
            var hs_wild126D8Vi = hs_b26D8Li;
            if (hs_b26D8Li.notEvaluated) {
                hs_wild126D8Vi = hs_b26D8Li.hscall();
            }
            switch (hs_wild126D8Vi.tag) {
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
            var hs_wild126D8Vg = hs_b26D8Li;
            if (hs_b26D8Li.notEvaluated) {
                hs_wild126D8Vg = hs_b26D8Li.hscall();
            }
            switch (hs_wild126D8Vg.tag) {
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
    hs_zdczeze125uKf5.evaluate = function (hs_a26D8Lo, hs_b26D8Lq) {
        var hs_wild26D8Vk = hs_a26D8Lo;
        if (hs_a26D8Lo.notEvaluated) {
            hs_wild26D8Vk = hs_a26D8Lo.hscall();
        }
        switch (hs_wild26D8Vk.tag) {
        case 1:
            var hs_wild126D8Vl = hs_b26D8Lq;
            if (hs_b26D8Lq.notEvaluated) {
                hs_wild126D8Vl = hs_b26D8Lq.hscall();
            }
            switch (hs_wild126D8Vl.tag) {
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
            var hs_wild126D8Vj = hs_b26D8Lq;
            if (hs_b26D8Lq.notEvaluated) {
                hs_wild126D8Vj = hs_b26D8Lq.hscall();
            }
            switch (hs_wild126D8Vj.tag) {
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
    this.hs_zdfEqNewline.data = [hs_zdczeze125uKf5, hs_zdczsze125uKfd];
    hs_zdczsze125uKfd.evaluate = function (hs_a26D8Lw, hs_b26D8Lx) {
        var hs_sat26D8Vm = new $hs.Thunk();
        hs_sat26D8Vm.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfEqNewline, hs_a26D8Lw, hs_b26D8Lx);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26D8Vm);
    };
    this.hs_zdfOrdNewline.data = [$hs.modules.GHCziIOziHandleziTypes.hs_zdfEqNewline, hs_zdccompare25uKeX, hs_zdczl25uKeP, hs_zdczgze25uKeH, hs_zdczg25uKez, hs_zdczlze25uKer, hs_zdcmax25uKfk, hs_zdcmin25uKfj];
    hs_zdcmin25uKfj.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmin.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfOrdNewline);
    };
    hs_zdcmax25uKfk.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmax.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfOrdNewline);
    };
    hs_zdccompare125uKfl.evaluate = function (hs_a26D8LE, hs_b26D8LI) {
        var hs_wild26D8Vo = hs_a26D8LE;
        if (hs_a26D8LE.notEvaluated) {
            hs_wild26D8Vo = hs_a26D8LE.hscall();
        }
        var hs_a126D8LM = hs_wild26D8Vo.data[0];
        var hs_a226D8LP = hs_wild26D8Vo.data[1];
        var hs_wild126D8Vn = hs_b26D8LI;
        if (hs_b26D8LI.notEvaluated) {
            hs_wild126D8Vn = hs_b26D8LI.hscall();
        }
        var hs_b126D8LN = hs_wild126D8Vn.data[0];
        var hs_b226D8LQ = hs_wild126D8Vn.data[1];
        var hs_wild226D8Vp = $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfOrdNewline, hs_a126D8LM, hs_b126D8LN);
        switch (hs_wild226D8Vp.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfOrdNewline, hs_a226D8LP, hs_b226D8LQ);
        case 3:
            var $res = new $hs.Data(3);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczl125uKfB.evaluate = function (hs_a26D8LU, hs_b26D8LY) {
        var hs_wild26D8Vr = hs_a26D8LU;
        if (hs_a26D8LU.notEvaluated) {
            hs_wild26D8Vr = hs_a26D8LU.hscall();
        }
        var hs_a126D8M2 = hs_wild26D8Vr.data[0];
        var hs_a226D8M5 = hs_wild26D8Vr.data[1];
        var hs_wild126D8Vq = hs_b26D8LY;
        if (hs_b26D8LY.notEvaluated) {
            hs_wild126D8Vq = hs_b26D8LY.hscall();
        }
        var hs_b126D8M3 = hs_wild126D8Vq.data[0];
        var hs_b226D8M6 = hs_wild126D8Vq.data[1];
        var hs_wild226D8Vs = $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfOrdNewline, hs_a126D8M2, hs_b126D8M3);
        switch (hs_wild226D8Vs.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfOrdNewline, hs_a226D8M5, hs_b226D8M6);
        case 3:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczgze125uKfR.evaluate = function (hs_a26D8Ma, hs_b26D8Me) {
        var hs_wild26D8Vu = hs_a26D8Ma;
        if (hs_a26D8Ma.notEvaluated) {
            hs_wild26D8Vu = hs_a26D8Ma.hscall();
        }
        var hs_a126D8Mi = hs_wild26D8Vu.data[0];
        var hs_a226D8Ml = hs_wild26D8Vu.data[1];
        var hs_wild126D8Vt = hs_b26D8Me;
        if (hs_b26D8Me.notEvaluated) {
            hs_wild126D8Vt = hs_b26D8Me.hscall();
        }
        var hs_b126D8Mj = hs_wild126D8Vt.data[0];
        var hs_b226D8Mm = hs_wild126D8Vt.data[1];
        var hs_wild226D8Vv = $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfOrdNewline, hs_a126D8Mi, hs_b126D8Mj);
        switch (hs_wild226D8Vv.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfOrdNewline, hs_a226D8Ml, hs_b226D8Mm);
        case 3:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczg125uKg7.evaluate = function (hs_a26D8Mq, hs_b26D8Mu) {
        var hs_wild26D8Vx = hs_a26D8Mq;
        if (hs_a26D8Mq.notEvaluated) {
            hs_wild26D8Vx = hs_a26D8Mq.hscall();
        }
        var hs_a126D8My = hs_wild26D8Vx.data[0];
        var hs_a226D8MB = hs_wild26D8Vx.data[1];
        var hs_wild126D8Vw = hs_b26D8Mu;
        if (hs_b26D8Mu.notEvaluated) {
            hs_wild126D8Vw = hs_b26D8Mu.hscall();
        }
        var hs_b126D8Mz = hs_wild126D8Vw.data[0];
        var hs_b226D8MC = hs_wild126D8Vw.data[1];
        var hs_wild226D8Vy = $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfOrdNewline, hs_a126D8My, hs_b126D8Mz);
        switch (hs_wild226D8Vy.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfOrdNewline, hs_a226D8MB, hs_b226D8MC);
        case 3:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczlze125uKgn.evaluate = function (hs_a26D8MG, hs_b26D8MK) {
        var hs_wild26D8VA = hs_a26D8MG;
        if (hs_a26D8MG.notEvaluated) {
            hs_wild26D8VA = hs_a26D8MG.hscall();
        }
        var hs_a126D8MO = hs_wild26D8VA.data[0];
        var hs_a226D8MR = hs_wild26D8VA.data[1];
        var hs_wild126D8Vz = hs_b26D8MK;
        if (hs_b26D8MK.notEvaluated) {
            hs_wild126D8Vz = hs_b26D8MK.hscall();
        }
        var hs_b126D8MP = hs_wild126D8Vz.data[0];
        var hs_b226D8MS = hs_wild126D8Vz.data[1];
        var hs_wild226D8VB = $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfOrdNewline, hs_a126D8MO, hs_b126D8MP);
        switch (hs_wild226D8VB.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfOrdNewline, hs_a226D8MR, hs_b226D8MS);
        case 3:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczeze225uKgD.evaluate = function (hs_ds26D8MW, hs_ds126D8N0) {
        var hs_wild26D8VE = hs_ds26D8MW;
        if (hs_ds26D8MW.notEvaluated) {
            hs_wild26D8VE = hs_ds26D8MW.hscall();
        }
        var hs_a126D8N4 = hs_wild26D8VE.data[0];
        var hs_a226D8N7 = hs_wild26D8VE.data[1];
        var hs_wild126D8VD = hs_ds126D8N0;
        if (hs_ds126D8N0.notEvaluated) {
            hs_wild126D8VD = hs_ds126D8N0.hscall();
        }
        var hs_b126D8N5 = hs_wild126D8VD.data[0];
        var hs_b226D8N8 = hs_wild126D8VD.data[1];
        var hs_sat26D8VF = new $hs.Thunk();
        hs_sat26D8VF.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfEqNewline, hs_a226D8N7, hs_b226D8N8);
        };
        var hs_sat26D8VC = new $hs.Thunk();
        hs_sat26D8VC.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfEqNewline, hs_a126D8N4, hs_b126D8N5);
        };
        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26D8VC, hs_sat26D8VF);
    };
    this.hs_zdfEqNewlineMode.data = [hs_zdczeze225uKgD, hs_zdczsze225uKgU];
    hs_zdczsze225uKgU.evaluate = function (hs_a26D8Nd, hs_b26D8Ne) {
        var hs_sat26D8VG = new $hs.Thunk();
        hs_sat26D8VG.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfEqNewlineMode, hs_a26D8Nd, hs_b26D8Ne);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26D8VG);
    };
    this.hs_zdfOrdNewlineMode.data = [$hs.modules.GHCziIOziHandleziTypes.hs_zdfEqNewlineMode, hs_zdccompare125uKfl, hs_zdczl125uKfB, hs_zdczgze125uKfR, hs_zdczg125uKg7, hs_zdczlze125uKgn, hs_zdcmax125uKh1, hs_zdcmin125uKh0];
    hs_zdcmin125uKh0.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmin.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfOrdNewlineMode);
    };
    hs_zdcmax125uKh1.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmax.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfOrdNewlineMode);
    };
    hs_zddShow25uKh2.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zdfShowMaybe.hscall($hs.modules.GHCziShow.hs_zdfShowInt);
    };
    hs_zdcshowsPrec425uKh3.evaluate = function (hs_ds26D8Nr, hs_ds126D8Nm) {
        var hs_wild26D8VI = hs_ds126D8Nm;
        if (hs_ds126D8Nm.notEvaluated) {
            hs_wild26D8VI = hs_ds126D8Nm.hscall();
        }
        switch (hs_wild26D8VI.tag) {
        case 1:
            var hs_sat26D8VQ = new $hs.Thunk();
            hs_sat26D8VQ.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("NoBuffering\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26D8VQ);
        case 2:
            var hs_sat26D8VH = new $hs.Thunk();
            hs_sat26D8VH.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("LineBuffering\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26D8VH);
        case 3:
            var hs_b126D8Nx = hs_wild26D8VI.data[0];
            var hs_sat26D8VK = new $hs.Thunk();
            hs_sat26D8VK.evaluateOnce = function () {
                var hs_sat26D8VN = new $hs.Thunk();
                hs_sat26D8VN.evaluateOnce = function () {
                    var hs_sat26D8VP = new $hs.Data(1);
                    hs_sat26D8VP.data = [11];
                    return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow25uKh2, hs_sat26D8VP, hs_b126D8Nx);
                };
                var hs_sat26D8VM = new $hs.Thunk();
                hs_sat26D8VM.evaluateOnce = function () {
                    var hs_sat26D8VO = new $hs.Thunk();
                    hs_sat26D8VO.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("BlockBuffering \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26D8VO);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26D8VM, hs_sat26D8VN);
            };
            var hs_sat26D8VJ = new $hs.Thunk();
            hs_sat26D8VJ.evaluateOnce = function () {
                var hs_sat26D8VL = new $hs.Data(1);
                hs_sat26D8VL.data = [11];
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_ds26D8Nr, hs_sat26D8VL);
            };
            return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26D8VJ, hs_sat26D8VK);
        }
    };
    hs_sat26D8VS.evaluateOnce = function () {
        var hs_sat26D8VR = new $hs.Data(1);
        hs_sat26D8VR.data = [0];
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfShowBufferMode, hs_sat26D8VR);
    };
    this.hs_zdfShowBufferMode.data = [hs_zdcshowsPrec425uKh3, hs_zdcshow425uKhl, hs_zdcshowList425uKhk];
    hs_zdcshowList425uKhk.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26D8VS);
    };
    hs_zdcshow425uKhl.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfShowBufferMode);
    };
    hs_zddRead25uKho.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zdfReadMaybe.hscall($hs.modules.GHCziRead.hs_zdfReadInt);
    };
    hs_sat26D8We.evaluateOnce = function () {
        var hs_sat26D8VU = new $hs.Thunk();
        hs_sat26D8VU.evaluateOnce = function () {
            var hs_sat26D8W4 = new $hs.Thunk();
            hs_sat26D8W4.evaluateOnce = function () {
                var hs_sat26D8W5 = new $hs.Func(1);
                hs_sat26D8W5.evaluate = function (hs_ds26D8NW) {
                    var hs_fail26D8NV = new $hs.Func(1);
                    hs_fail26D8NV.evaluate = function (hs_ds126D8NU) {
                        var hs_sat26D8Wd = new $hs.Thunk();
                        hs_sat26D8Wd.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                        };
                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26D8Wd);
                    };
                    var hs_wild26D8W7 = hs_ds26D8NW;
                    if (hs_ds26D8NW.notEvaluated) {
                        hs_wild26D8W7 = hs_ds26D8NW.hscall();
                    }
                    switch (hs_wild26D8W7.tag) {
                    case 4:
                        var hs_ds126D8NZ = hs_wild26D8W7.data[0];
                        var hs_sat26D8W8 = new $hs.Thunk();
                        hs_sat26D8W8.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("BlockBuffering\x00");
                        };
                        var hs_wild126D8W9 = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds126D8NZ, hs_sat26D8W8);
                        switch (hs_wild126D8W9.tag) {
                        case 1:
                            return hs_fail26D8NV.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                        case 2:
                            var hs_sat26D8Wa = new $hs.Func(1);
                            hs_sat26D8Wa.evaluate = function (hs_a126D8O5) {
                                var hs_sat26D8Wc = new $hs.Data(3);
                                hs_sat26D8Wc.data = [hs_a126D8O5];
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26D8Wc);
                            };
                            var hs_sat26D8W6 = new $hs.Thunk();
                            hs_sat26D8W6.evaluateOnce = function () {
                                var hs_sat26D8Wb = new $hs.Thunk();
                                hs_sat26D8Wb.evaluateOnce = function () {
                                    return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead25uKho);
                                };
                                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_step.hscall(hs_sat26D8Wb);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26D8W6, hs_sat26D8Wa);
                        }
                    default:
                        return hs_fail26D8NV.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26D8W5);
            };
            var hs_sat26D8W3 = new $hs.Data(1);
            hs_sat26D8W3.data = [10];
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_prec.hscall(hs_sat26D8W3, hs_sat26D8W4);
        };
        var hs_sat26D8VT = new $hs.Thunk();
        hs_sat26D8VT.evaluateOnce = function () {
            var hs_sat26D8VW = new $hs.Thunk();
            hs_sat26D8VW.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziIOziHandleziTypes.hs_LineBuffering);
            };
            var hs_sat26D8VX = new $hs.Thunk();
            hs_sat26D8VX.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("LineBuffering\x00");
            };
            var hs_sat26D8VY = new $hs.Data(1);
            hs_sat26D8VY.data = [hs_sat26D8VX, hs_sat26D8VW];
            var hs_sat26D8VZ = new $hs.Data(2);
            hs_sat26D8VZ.data = [hs_sat26D8VY, $hs.modules.GHCziTypes.hs_ZMZN];
            var hs_sat26D8W0 = new $hs.Thunk();
            hs_sat26D8W0.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziIOziHandleziTypes.hs_NoBuffering);
            };
            var hs_sat26D8W1 = new $hs.Thunk();
            hs_sat26D8W1.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("NoBuffering\x00");
            };
            var hs_sat26D8W2 = new $hs.Data(1);
            hs_sat26D8W2.data = [hs_sat26D8W1, hs_sat26D8W0];
            var hs_sat26D8VV = new $hs.Data(2);
            hs_sat26D8VV.data = [hs_sat26D8W2, hs_sat26D8VZ];
            return $hs.modules.GHCziRead.hs_choose.hscall(hs_sat26D8VV);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26D8VT, hs_sat26D8VU);
    };
    hs_zdcreadPrec225uKhp.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_parens.hscall(hs_sat26D8We);
    };
    this.hs_zdfReadBufferMode.data = [hs_zdcreadsPrec225uKhY, hs_zdcreadList225uKhX, hs_zdcreadPrec225uKhp, hs_zdcreadListPrec225uKhW];
    hs_zdcreadListPrec225uKhW.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListPrecDefault.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfReadBufferMode);
    };
    hs_zdcreadList225uKhX.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListDefault.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfReadBufferMode);
    };
    hs_zdcreadsPrec225uKhY.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadsPrec.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfReadBufferMode);
    };
    hs_zddOrd25uKhZ.evaluateOnce = function () {
        return $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt);
    };
    hs_zdczlze225uKi0.evaluate = function (hs_a26D8Oj, hs_b26D8Ol) {
        var hs_wild26D8Wg = hs_a26D8Oj;
        if (hs_a26D8Oj.notEvaluated) {
            hs_wild26D8Wg = hs_a26D8Oj.hscall();
        }
        switch (hs_wild26D8Wg.tag) {
        case 1:
            var hs_wild126D8Wj = hs_b26D8Ol;
            if (hs_b26D8Ol.notEvaluated) {
                hs_wild126D8Wj = hs_b26D8Ol.hscall();
            }
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild126D8Wf = hs_b26D8Ol;
            if (hs_b26D8Ol.notEvaluated) {
                hs_wild126D8Wf = hs_b26D8Ol.hscall();
            }
            switch (hs_wild126D8Wf.tag) {
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
            var hs_a126D8Os = hs_wild26D8Wg.data[0];
            var hs_wild126D8Wi = hs_b26D8Ol;
            if (hs_b26D8Ol.notEvaluated) {
                hs_wild126D8Wi = hs_b26D8Ol.hscall();
            }
            switch (hs_wild126D8Wi.tag) {
            case 3:
                var hs_b126D8Ot = hs_wild126D8Wi.data[0];
                return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd25uKhZ, hs_a126D8Os, hs_b126D8Ot);
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        }
    };
    hs_zdczg225uKie.evaluate = function (hs_a26D8Ox, hs_b26D8Oz) {
        var hs_wild26D8Wl = hs_a26D8Ox;
        if (hs_a26D8Ox.notEvaluated) {
            hs_wild26D8Wl = hs_a26D8Ox.hscall();
        }
        switch (hs_wild26D8Wl.tag) {
        case 1:
            var hs_wild126D8Wo = hs_b26D8Oz;
            if (hs_b26D8Oz.notEvaluated) {
                hs_wild126D8Wo = hs_b26D8Oz.hscall();
            }
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild126D8Wk = hs_b26D8Oz;
            if (hs_b26D8Oz.notEvaluated) {
                hs_wild126D8Wk = hs_b26D8Oz.hscall();
            }
            switch (hs_wild126D8Wk.tag) {
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
            var hs_a126D8OG = hs_wild26D8Wl.data[0];
            var hs_wild126D8Wn = hs_b26D8Oz;
            if (hs_b26D8Oz.notEvaluated) {
                hs_wild126D8Wn = hs_b26D8Oz.hscall();
            }
            switch (hs_wild126D8Wn.tag) {
            case 3:
                var hs_b126D8OH = hs_wild126D8Wn.data[0];
                return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd25uKhZ, hs_a126D8OG, hs_b126D8OH);
            default:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        }
    };
    hs_zdczgze225uKis.evaluate = function (hs_a26D8OL, hs_b26D8ON) {
        var hs_wild26D8Wr = hs_a26D8OL;
        if (hs_a26D8OL.notEvaluated) {
            hs_wild26D8Wr = hs_a26D8OL.hscall();
        }
        switch (hs_wild26D8Wr.tag) {
        case 1:
            var hs_wild126D8Wt = hs_b26D8ON;
            if (hs_b26D8ON.notEvaluated) {
                hs_wild126D8Wt = hs_b26D8ON.hscall();
            }
            switch (hs_wild126D8Wt.tag) {
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
            var hs_wild126D8Wq = hs_b26D8ON;
            if (hs_b26D8ON.notEvaluated) {
                hs_wild126D8Wq = hs_b26D8ON.hscall();
            }
            switch (hs_wild126D8Wq.tag) {
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
            var hs_a126D8OU = hs_wild26D8Wr.data[0];
            var hs_wild126D8Ws = hs_b26D8ON;
            if (hs_b26D8ON.notEvaluated) {
                hs_wild126D8Ws = hs_b26D8ON.hscall();
            }
            switch (hs_wild126D8Ws.tag) {
            case 3:
                var hs_b126D8OV = hs_wild126D8Ws.data[0];
                return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd25uKhZ, hs_a126D8OU, hs_b126D8OV);
            default:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        }
    };
    hs_zdczl225uKiG.evaluate = function (hs_a26D8OZ, hs_b26D8P1) {
        var hs_wild26D8Ww = hs_a26D8OZ;
        if (hs_a26D8OZ.notEvaluated) {
            hs_wild26D8Ww = hs_a26D8OZ.hscall();
        }
        switch (hs_wild26D8Ww.tag) {
        case 1:
            var hs_wild126D8Wy = hs_b26D8P1;
            if (hs_b26D8P1.notEvaluated) {
                hs_wild126D8Wy = hs_b26D8P1.hscall();
            }
            switch (hs_wild126D8Wy.tag) {
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
            var hs_wild126D8Wv = hs_b26D8P1;
            if (hs_b26D8P1.notEvaluated) {
                hs_wild126D8Wv = hs_b26D8P1.hscall();
            }
            switch (hs_wild126D8Wv.tag) {
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
            var hs_a126D8P8 = hs_wild26D8Ww.data[0];
            var hs_wild126D8Wx = hs_b26D8P1;
            if (hs_b26D8P1.notEvaluated) {
                hs_wild126D8Wx = hs_b26D8P1.hscall();
            }
            switch (hs_wild126D8Wx.tag) {
            case 3:
                var hs_b126D8P9 = hs_wild126D8Wx.data[0];
                return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd25uKhZ, hs_a126D8P8, hs_b126D8P9);
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        }
    };
    hs_zdccompare225uKiU.evaluate = function (hs_a26D8Pd, hs_b26D8Pf) {
        var hs_wild26D8WA = hs_a26D8Pd;
        if (hs_a26D8Pd.notEvaluated) {
            hs_wild26D8WA = hs_a26D8Pd.hscall();
        }
        switch (hs_wild26D8WA.tag) {
        case 1:
            var hs_wild126D8WD = hs_b26D8Pf;
            if (hs_b26D8Pf.notEvaluated) {
                hs_wild126D8WD = hs_b26D8Pf.hscall();
            }
            switch (hs_wild126D8WD.tag) {
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
            var hs_wild126D8Wz = hs_b26D8Pf;
            if (hs_b26D8Pf.notEvaluated) {
                hs_wild126D8Wz = hs_b26D8Pf.hscall();
            }
            switch (hs_wild126D8Wz.tag) {
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
            var hs_a126D8Pm = hs_wild26D8WA.data[0];
            var hs_wild126D8WC = hs_b26D8Pf;
            if (hs_b26D8Pf.notEvaluated) {
                hs_wild126D8WC = hs_b26D8Pf.hscall();
            }
            switch (hs_wild126D8WC.tag) {
            case 3:
                var hs_b126D8Pn = hs_wild126D8WC.data[0];
                return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd25uKhZ, hs_a126D8Pm, hs_b126D8Pn);
            default:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            }
        }
    };
    hs_zddEq25uKj8.evaluateOnce = function () {
        return $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall($hs.modules.GHCziClasses.hs_zdfEqInt);
    };
    hs_zdczeze325uKj9.evaluate = function (hs_ds26D8Pu, hs_ds126D8Pw) {
        var hs_fail26D8PF = new $hs.Func(1);
        hs_fail26D8PF.evaluate = function (hs_ds226D8PE) {
            var hs_wild26D8WH = hs_ds26D8Pu;
            if (hs_ds26D8Pu.notEvaluated) {
                hs_wild26D8WH = hs_ds26D8Pu.hscall();
            }
            switch (hs_wild26D8WH.tag) {
            case 1:
                var hs_wild126D8WM = hs_ds126D8Pw;
                if (hs_ds126D8Pw.notEvaluated) {
                    hs_wild126D8WM = hs_ds126D8Pw.hscall();
                }
                switch (hs_wild126D8WM.tag) {
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
            case 2:
                var hs_wild126D8WG = hs_ds126D8Pw;
                if (hs_ds126D8Pw.notEvaluated) {
                    hs_wild126D8WG = hs_ds126D8Pw.hscall();
                }
                switch (hs_wild126D8WG.tag) {
                case 1:
                    var $res = new $hs.Data(1);
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
                var hs_wild126D8WK = hs_ds126D8Pw;
                if (hs_ds126D8Pw.notEvaluated) {
                    hs_wild126D8WK = hs_ds126D8Pw.hscall();
                }
                switch (hs_wild126D8WK.tag) {
                case 3:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                default:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            }
        };
        var hs_wild26D8WF = hs_ds26D8Pu;
        if (hs_ds26D8Pu.notEvaluated) {
            hs_wild26D8WF = hs_ds26D8Pu.hscall();
        }
        switch (hs_wild26D8WF.tag) {
        case 3:
            var hs_a126D8PK = hs_wild26D8WF.data[0];
            var hs_wild126D8WE = hs_ds126D8Pw;
            if (hs_ds126D8Pw.notEvaluated) {
                hs_wild126D8WE = hs_ds126D8Pw.hscall();
            }
            switch (hs_wild126D8WE.tag) {
            case 3:
                var hs_b126D8PL = hs_wild126D8WE.data[0];
                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq25uKj8, hs_a126D8PK, hs_b126D8PL);
            default:
                return hs_fail26D8PF.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            }
        default:
            return hs_fail26D8PF.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
        }
    };
    this.hs_zdfEqBufferMode.data = [hs_zdczeze325uKj9, hs_zdczsze325uKjw];
    hs_zdczsze325uKjw.evaluate = function (hs_a26D8PP, hs_b26D8PQ) {
        var hs_sat26D8WO = new $hs.Thunk();
        hs_sat26D8WO.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfEqBufferMode, hs_a26D8PP, hs_b26D8PQ);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26D8WO);
    };
    this.hs_zdfOrdBufferMode.data = [$hs.modules.GHCziIOziHandleziTypes.hs_zdfEqBufferMode, hs_zdccompare225uKiU, hs_zdczl225uKiG, hs_zdczgze225uKis, hs_zdczg225uKie, hs_zdczlze225uKi0, hs_zdcmax225uKjD, hs_zdcmin225uKjC];
    hs_zdcmin225uKjC.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmin.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfOrdBufferMode);
    };
    hs_zdcmax225uKjD.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmax.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfOrdBufferMode);
    };
    hs_zdctypeOf25uKjE.evaluate = function (hs_ds26D8Q0) {
        var hs_sat26D8WP = new $hs.Thunk();
        hs_sat26D8WP.evaluateOnce = function () {
            var hs_sat26D8WR = new $hs.Thunk();
            hs_sat26D8WR.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Handle\x00");
            };
            var hs_sat26D8WS = new $hs.Thunk();
            hs_sat26D8WS.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("GHC.IO.Handle.Types\x00");
            };
            var hs_sat26D8WQ = new $hs.Thunk();
            hs_sat26D8WQ.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26D8WQ, hs_sat26D8WS, hs_sat26D8WR);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26D8WP, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableHandle.evaluateOnce = function () {
        if (hs_zdctypeOf25uKjE.notEvaluated) {
            return hs_zdctypeOf25uKjE.hscall();
        } else {
            return hs_zdctypeOf25uKjE;
        }
    };
    hs_zdctypeOf125uKjL.evaluate = function (hs_ds26D8Q7) {
        var hs_sat26D8WT = new $hs.Thunk();
        hs_sat26D8WT.evaluateOnce = function () {
            var hs_sat26D8WV = new $hs.Thunk();
            hs_sat26D8WV.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Handle__\x00");
            };
            var hs_sat26D8WW = new $hs.Thunk();
            hs_sat26D8WW.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("GHC.IO.Handle.Types\x00");
            };
            var hs_sat26D8WU = new $hs.Thunk();
            hs_sat26D8WU.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26D8WU, hs_sat26D8WW, hs_sat26D8WV);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26D8WT, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableHandlezuzu.evaluateOnce = function () {
        if (hs_zdctypeOf125uKjL.notEvaluated) {
            return hs_zdctypeOf125uKjL.hscall();
        } else {
            return hs_zdctypeOf125uKjL;
        }
    };
    this.hs_checkHandleInvariants.evaluate = function (hs_ds26D8Q9) {
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
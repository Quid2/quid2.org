
$hs.modules.GHCziIOziFD = new $hs.Module();
$hs.modules.GHCziIOziFD.dependencies = ["GHC.Prim", "GHC.Types", "GHC.Bool", "GHC.Unit", "GHC.Integer", "Control.Monad", "Data.Maybe", "GHC.Base", "GHC.Enum", "GHC.Num", "GHC.Real", "GHC.Show", "Data.Typeable", "GHC.Classes", "GHC.IO", "GHC.Conc.IO", "GHC.IO.IOMode", "GHC.IO.Buffer", "GHC.IO.Device", "GHC.IO.BufferedIO", "GHC.IO.Exception", "GHC.Ptr", "Data.Bits", "Foreign.C.Error", "Foreign.C.String", "Foreign.C.Types", "Foreign.Marshal.Utils", "System.Posix.Internals", "System.Posix.Types"];
$hs.modules.GHCziIOziFD.initBeforeDependencies = function () {
    this.hs_zdWFD = new $hs.Func(2);
    this.hs_fdIsNonBlocking = new $hs.Func(1);
    this.hs_fdFD = new $hs.Func(1);
    this.hs_zdfShowFD = new $hs.Data(1);
    this.hs_zdfTypeableFD = new $hs.Thunk();
    this.hs_mkFD = new $hs.Func(5);
    this.hs_stderr = new $hs.Thunk();
    this.hs_stdout = new $hs.Thunk();
    this.hs_stdin = new $hs.Thunk();
    this.hs_release = new $hs.Func(1);
    this.hs_openFile = new $hs.Func(2);
    this.hs_setNonBlockingMode = new $hs.Func(2);
    this.hs_zdfIODeviceFD = new $hs.Data(1);
    this.hs_readRawBufferPtr = new $hs.Func(5);
    this.hs_writeRawBufferPtr = new $hs.Func(5);
    this.hs_readRawBufferPtrNoBlock = new $hs.Func(5);
    this.hs_zdfRawIOFD = new $hs.Data(1);
    this.hs_zdfBufferedIOFD = new $hs.Data(1);
    this.hs_FD = new $hs.Func(2);
    this.hs_zdWFD.notEvaluated = true;
    this.hs_zdWFD.evaluate = function (hs_tpl26DoNy, hs_tpl26DoNB) {
        $hs.modules.GHCziIOziFD.loadDependencies();
        return this.evaluate(hs_tpl26DoNy, hs_tpl26DoNB);
    };
    this.hs_fdIsNonBlocking.notEvaluated = true;
    this.hs_fdIsNonBlocking.evaluate = function (hs_ds26DoNH) {
        $hs.modules.GHCziIOziFD.loadDependencies();
        return this.evaluate(hs_ds26DoNH);
    };
    this.hs_fdFD.notEvaluated = true;
    this.hs_fdFD.evaluate = function (hs_ds26DoNN) {
        $hs.modules.GHCziIOziFD.loadDependencies();
        return this.evaluate(hs_ds26DoNN);
    };
    this.hs_zdfShowFD.notEvaluated = true;
    this.hs_zdfShowFD.evaluate = function () {
        $hs.modules.GHCziIOziFD.loadDependencies();
        return this;
    };
    this.hs_zdfTypeableFD.evaluateOnce = function () {
        $hs.modules.GHCziIOziFD.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_mkFD.notEvaluated = true;
    this.hs_mkFD.evaluate = function (hs_fd26DoP3, hs_iomode26DoPq, hs_mbzustat26DoP1, hs_iszusocket26DoQ9, hs_iszunonblock26DoQ0) {
        $hs.modules.GHCziIOziFD.loadDependencies();
        return this.evaluate(hs_fd26DoP3, hs_iomode26DoPq, hs_mbzustat26DoP1, hs_iszusocket26DoQ9, hs_iszunonblock26DoQ0);
    };
    this.hs_stderr.evaluateOnce = function () {
        $hs.modules.GHCziIOziFD.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_stdout.evaluateOnce = function () {
        $hs.modules.GHCziIOziFD.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_stdin.evaluateOnce = function () {
        $hs.modules.GHCziIOziFD.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_release.notEvaluated = true;
    this.hs_release.evaluate = function (hs_fd26DoQn) {
        $hs.modules.GHCziIOziFD.loadDependencies();
        return this.evaluate(hs_fd26DoQn);
    };
    this.hs_openFile.notEvaluated = true;
    this.hs_openFile.evaluate = function (hs_filepath26DoRU, hs_iomode26DoRZ) {
        $hs.modules.GHCziIOziFD.loadDependencies();
        return this.evaluate(hs_filepath26DoRU, hs_iomode26DoRZ);
    };
    this.hs_setNonBlockingMode.notEvaluated = true;
    this.hs_setNonBlockingMode.evaluate = function (hs_fd26DoTX, hs_set26DoU3) {
        $hs.modules.GHCziIOziFD.loadDependencies();
        return this.evaluate(hs_fd26DoTX, hs_set26DoU3);
    };
    this.hs_zdfIODeviceFD.notEvaluated = true;
    this.hs_zdfIODeviceFD.evaluate = function () {
        $hs.modules.GHCziIOziFD.loadDependencies();
        return this;
    };
    this.hs_readRawBufferPtr.notEvaluated = true;
    this.hs_readRawBufferPtr.evaluate = function (hs_loc26DoVs, hs_fd26DoVf, hs_buf26DoVK, hs_off26DoVL, hs_len26DoVN) {
        $hs.modules.GHCziIOziFD.loadDependencies();
        return this.evaluate(hs_loc26DoVs, hs_fd26DoVf, hs_buf26DoVK, hs_off26DoVL, hs_len26DoVN);
    };
    this.hs_writeRawBufferPtr.notEvaluated = true;
    this.hs_writeRawBufferPtr.evaluate = function (hs_loc26DoXr, hs_fd26DoXe, hs_buf26DoXJ, hs_off26DoXK, hs_len26DoXM) {
        $hs.modules.GHCziIOziFD.loadDependencies();
        return this.evaluate(hs_loc26DoXr, hs_fd26DoXe, hs_buf26DoXJ, hs_off26DoXK, hs_len26DoXM);
    };
    this.hs_readRawBufferPtrNoBlock.notEvaluated = true;
    this.hs_readRawBufferPtrNoBlock.evaluate = function (hs_loc26DoZF, hs_fd26DoZy, hs_buf26Dp0b, hs_off26Dp0c, hs_len26Dp0e) {
        $hs.modules.GHCziIOziFD.loadDependencies();
        return this.evaluate(hs_loc26DoZF, hs_fd26DoZy, hs_buf26Dp0b, hs_off26Dp0c, hs_len26Dp0e);
    };
    this.hs_zdfRawIOFD.notEvaluated = true;
    this.hs_zdfRawIOFD.evaluate = function () {
        $hs.modules.GHCziIOziFD.loadDependencies();
        return this;
    };
    this.hs_zdfBufferedIOFD.notEvaluated = true;
    this.hs_zdfBufferedIOFD.evaluate = function () {
        $hs.modules.GHCziIOziFD.loadDependencies();
        return this;
    };
    this.hs_FD.notEvaluated = true;
    this.hs_FD.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziIOziFD.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
};
$hs.modules.GHCziIOziFD.initAfterDependencies = function () {
    this.hs_zdWFD.notEvaluated = false;
    this.hs_fdIsNonBlocking.notEvaluated = false;
    this.hs_fdFD.notEvaluated = false;
    this.hs_zdfShowFD.notEvaluated = false;
    this.hs_zdfShowFD.evaluate = function () {
        return this;
    };
    this.hs_mkFD.notEvaluated = false;
    this.hs_release.notEvaluated = false;
    this.hs_openFile.notEvaluated = false;
    this.hs_setNonBlockingMode.notEvaluated = false;
    this.hs_zdfIODeviceFD.notEvaluated = false;
    this.hs_zdfIODeviceFD.evaluate = function () {
        return this;
    };
    this.hs_readRawBufferPtr.notEvaluated = false;
    this.hs_writeRawBufferPtr.notEvaluated = false;
    this.hs_readRawBufferPtrNoBlock.notEvaluated = false;
    this.hs_zdfRawIOFD.notEvaluated = false;
    this.hs_zdfRawIOFD.evaluate = function () {
        return this;
    };
    this.hs_zdfBufferedIOFD.notEvaluated = false;
    this.hs_zdfBufferedIOFD.evaluate = function () {
        return this;
    };
    this.hs_FD.notEvaluated = false;
    var hs_dEFAULTzuFDzuBUFFERzuSIZZE25uui2 = new $hs.Data(1);
    var hs_zdcshow25v0hD = new $hs.Func(1);
    var hs_zdcshowList25v0hM = new $hs.Thunk();
    var hs_zdcshowsPrec25v0hO = new $hs.Thunk();
    var hs_zdcsetRaw25v0hQ = new $hs.Func(2);
    var hs_zdcgetEcho25v0i2 = new $hs.Func(1);
    var hs_zdcsetEcho25v0ib = new $hs.Func(2);
    var hs_zdcgetSizze25v0im = new $hs.Func(1);
    var hs_zdcnewBuffer25v0iv = new $hs.Func(2);
    var hs_zdctypeOf25v0iB = new $hs.Func(1);
    var hs_stdzuflags25uuia = new $hs.Thunk();
    var hs_outputzuflags25uuic = new $hs.Thunk();
    var hs_writezuflags25uuig = new $hs.Thunk();
    var hs_appendzuflags25uuik = new $hs.Thunk();
    var hs_rwzuflags25uuii = new $hs.Thunk();
    var hs_readzuflags25uuie = new $hs.Thunk();
    var hs_sat26Dp5F = new $hs.Thunk();
    var hs_sat26Dp5H = new $hs.Thunk();
    var hs_sat26Dp5J = new $hs.Thunk();
    var hs_zdcclose25v0kr = new $hs.Func(1);
    var hs_zdcseek25v0kL = new $hs.Func(3);
    var hs_zdctell25v0l4 = new $hs.Func(1);
    var hs_setSizze25uuiI = new $hs.Func(2);
    var hs_devType25uuiK = new $hs.Func(1);
    var hs_zdcisSeekable25v0mD = new $hs.Func(1);
    var hs_zdcdup25v0mO = new $hs.Func(1);
    var hs_zdcdup225v0nc = new $hs.Func(2);
    var hs_zdcready25v0nZ = new $hs.Func(3);
    var hs_zdcisTerminal25v0oI = new $hs.Func(1);
    var hs_zdcread25v0qE = new $hs.Func(3);
    var hs_fdWrite25uuj6 = new $hs.Func(3);
    var hs_throwErrnoIfMinus1RetryOnBlock25uujk = new $hs.Func(3);
    var hs_zdcreadNonBlocking25v0uP = new $hs.Func(3);
    var hs_zdcwriteNonBlocking25v0va = new $hs.Func(3);
    var hs_zdcfillReadBuffer025v0wY = new $hs.Func(2);
    var hs_zdcflushWriteBuffer025v0x4 = new $hs.Func(2);
    var hs_puts25uujm = new $hs.Func(1);
    var hs_zdcfillReadBuffer25v0xs = new $hs.Func(2);
    var hs_zdcflushWriteBuffer25v0y7 = new $hs.Func(2);
    var hs_zdcemptyWriteBuffer25v0ys = new $hs.Thunk();
    this.hs_zdWFD.evaluate = function (hs_tpl26DoNy, hs_tpl26DoNB) {
        var hs_tpl26Dp4K = hs_tpl26DoNy;
        if (hs_tpl26DoNy.notEvaluated) {
            hs_tpl26Dp4K = hs_tpl26DoNy.hscall();
        }
        var hs_tpl26DoNE = hs_tpl26Dp4K.data[0];
        var hs_tpl26Dp4J = hs_tpl26DoNB;
        if (hs_tpl26DoNB.notEvaluated) {
            hs_tpl26Dp4J = hs_tpl26DoNB.hscall();
        }
        var hs_tpl26DoNF = hs_tpl26Dp4J.data[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26DoNE, hs_tpl26DoNF];
        return $res;
    };
    hs_dEFAULTzuFDzuBUFFERzuSIZZE25uui2.data = [8096];
    this.hs_fdIsNonBlocking.evaluate = function (hs_ds26DoNH) {
        var hs_wild26Dp4M = hs_ds26DoNH;
        if (hs_ds26DoNH.notEvaluated) {
            hs_wild26Dp4M = hs_ds26DoNH.hscall();
        }
        var hs_rb126DoNL = hs_wild26Dp4M.data[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_rb126DoNL];
        return $res;
    };
    this.hs_fdFD.evaluate = function (hs_ds26DoNN) {
        var hs_wild26Dp4N = hs_ds26DoNN;
        if (hs_ds26DoNN.notEvaluated) {
            hs_wild26Dp4N = hs_ds26DoNN.hscall();
        }
        var hs_rb26DoNR = hs_wild26Dp4N.data[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_rb26DoNR];
        return $res;
    };
    hs_zdcshow25v0hD.evaluate = function (hs_fd26DoNV) {
        var hs_sat26Dp4R = new $hs.Thunk();
        hs_sat26Dp4R.evaluateOnce = function () {
            var hs_wild26Dp4P = hs_fd26DoNV;
            if (hs_fd26DoNV.notEvaluated) {
                hs_wild26Dp4P = hs_fd26DoNV.hscall();
            }
            var hs_rb26DoNZ = hs_wild26Dp4P.data[0];
            var $res = new $hs.Data(1);
            $res.data = [hs_rb26DoNZ];
            return $res;
        };
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.ForeignziCziTypes.hs_zdfShowCInt, hs_sat26Dp4R);
    };
    this.hs_zdfShowFD.data = [hs_zdcshowsPrec25v0hO, hs_zdcshow25v0hD, hs_zdcshowList25v0hM];
    hs_zdcshowList25v0hM.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall($hs.modules.GHCziIOziFD.hs_zdfShowFD);
    };
    hs_zdcshowsPrec25v0hO.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowsPrec.hscall($hs.modules.GHCziIOziFD.hs_zdfShowFD);
    };
    hs_zdcsetRaw25v0hQ.evaluate = function (hs_fd26DoO9, hs_raw26DoOf) {
        var hs_sat26Dp4T = new $hs.Thunk();
        hs_sat26Dp4T.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_not.hscall(hs_raw26DoOf);
        };
        var hs_sat26Dp4V = new $hs.Thunk();
        hs_sat26Dp4V.evaluateOnce = function () {
            var hs_wild26Dp4S = hs_fd26DoO9;
            if (hs_fd26DoO9.notEvaluated) {
                hs_wild26Dp4S = hs_fd26DoO9.hscall();
            }
            var hs_rb26DoOd = hs_wild26Dp4S.data[0];
            var $res = new $hs.Data(1);
            $res.data = [hs_rb26DoOd];
            return $res;
        };
        return $hs.modules.SystemziPosixziInternals.hs_setCooked.hscall(hs_sat26Dp4V, hs_sat26Dp4T);
    };
    hs_zdcgetEcho25v0i2.evaluate = function (hs_fd26DoOk) {
        var hs_sat26Dp4Y = new $hs.Thunk();
        hs_sat26Dp4Y.evaluateOnce = function () {
            var hs_wild26Dp4W = hs_fd26DoOk;
            if (hs_fd26DoOk.notEvaluated) {
                hs_wild26Dp4W = hs_fd26DoOk.hscall();
            }
            var hs_rb26DoOo = hs_wild26Dp4W.data[0];
            var $res = new $hs.Data(1);
            $res.data = [hs_rb26DoOo];
            return $res;
        };
        return $hs.modules.SystemziPosixziInternals.hs_getEcho.hscall(hs_sat26Dp4Y);
    };
    hs_zdcsetEcho25v0ib.evaluate = function (hs_fd26DoOu, hs_on26DoOA) {
        var hs_sat26Dp51 = new $hs.Thunk();
        hs_sat26Dp51.evaluateOnce = function () {
            var hs_wild26Dp4Z = hs_fd26DoOu;
            if (hs_fd26DoOu.notEvaluated) {
                hs_wild26Dp4Z = hs_fd26DoOu.hscall();
            }
            var hs_rb26DoOy = hs_wild26Dp4Z.data[0];
            var $res = new $hs.Data(1);
            $res.data = [hs_rb26DoOy];
            return $res;
        };
        return $hs.modules.SystemziPosixziInternals.hs_setEcho.hscall(hs_sat26Dp51, hs_on26DoOA);
    };
    hs_zdcgetSizze25v0im.evaluate = function (hs_fd26DoOE) {
        var hs_sat26Dp54 = new $hs.Thunk();
        hs_sat26Dp54.evaluateOnce = function () {
            var hs_wild26Dp52 = hs_fd26DoOE;
            if (hs_fd26DoOE.notEvaluated) {
                hs_wild26Dp52 = hs_fd26DoOE.hscall();
            }
            var hs_rb26DoOI = hs_wild26Dp52.data[0];
            var $res = new $hs.Data(1);
            $res.data = [hs_rb26DoOI];
            return $res;
        };
        return $hs.modules.SystemziPosixziInternals.hs_fdFileSizze.hscall(hs_sat26Dp54);
    };
    hs_zdcnewBuffer25v0iv.evaluate = function (hs_zudev26DoOP, hs_state26DoOO) {
        return $hs.modules.GHCziIOziBuffer.hs_newByteBuffer.hscall(hs_dEFAULTzuFDzuBUFFERzuSIZZE25uui2, hs_state26DoOO);
    };
    hs_zdctypeOf25v0iB.evaluate = function (hs_ds26DoOV) {
        var hs_sat26Dp56 = new $hs.Thunk();
        hs_sat26Dp56.evaluateOnce = function () {
            var hs_sat26Dp55 = new $hs.Thunk();
            hs_sat26Dp55.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("GHC.IO.FD.FD\x00");
            };
            return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26Dp55);
        };
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_sat26Dp56, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableFD.evaluateOnce = function () {
        if (hs_zdctypeOf25v0iB.notEvaluated) {
            return hs_zdctypeOf25v0iB.hscall();
        } else {
            return hs_zdctypeOf25v0iB;
        }
    };
    hs_stdzuflags25uuia.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt, $hs.modules.SystemziPosixziInternals.hs_ozuNONBLOCK, $hs.modules.SystemziPosixziInternals.hs_ozuNOCTTY);
    };
    hs_outputzuflags25uuic.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt, hs_stdzuflags25uuia, $hs.modules.SystemziPosixziInternals.hs_ozuCREAT);
    };
    hs_writezuflags25uuig.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt, hs_outputzuflags25uuic, $hs.modules.SystemziPosixziInternals.hs_ozuWRONLY);
    };
    hs_appendzuflags25uuik.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt, hs_writezuflags25uuig, $hs.modules.SystemziPosixziInternals.hs_ozuAPPEND);
    };
    hs_rwzuflags25uuii.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt, hs_outputzuflags25uuic, $hs.modules.SystemziPosixziInternals.hs_ozuRDWR);
    };
    hs_readzuflags25uuie.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt, hs_stdzuflags25uuia, $hs.modules.SystemziPosixziInternals.hs_ozuRDONLY);
    };
    this.hs_mkFD.evaluate = function (hs_fd26DoP3, hs_iomode26DoPq, hs_mbzustat26DoP1, hs_iszusocket26DoQ9, hs_iszunonblock26DoQ0) {
        var hs_sat26Dp5D = new $hs.Func(1);
        hs_sat26Dp5D.evaluate = function (hs_ds26DoP8) {
            var hs_wild26Dp59 = hs_ds26DoP8;
            if (hs_ds26DoP8.notEvaluated) {
                hs_wild26Dp59 = hs_ds26DoP8.hscall();
            }
            var hs_fdzutype26DoPd = hs_wild26Dp59.data[0];
            var hs_dev26DoPk = hs_wild26Dp59.data[1];
            var hs_ino26DoPn = hs_wild26Dp59.data[2];
            var hs_sat26Dp5d = new $hs.Thunk();
            hs_sat26Dp5d.evaluateOnce = function () {
                var hs_sat26Dp5a = new $hs.Thunk();
                hs_sat26Dp5a.evaluateOnce = function () {
                    var hs_tpl26Dp58 = hs_fd26DoP3;
                    if (hs_fd26DoP3.notEvaluated) {
                        hs_tpl26Dp58 = hs_fd26DoP3.hscall();
                    }
                    var hs_tpl126DoQ3 = hs_tpl26Dp58.data[0];
                    var hs_tpl226Dp57 = $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziEnum.hs_zdfEnumBool, hs_iszunonblock26DoQ0);
                    var hs_tpl326DoQ4 = hs_tpl226Dp57.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_tpl126DoQ3, hs_tpl326DoQ4];
                    return $res;
                };
                var hs_sat26Dp5b = new $hs.Data(1);
                hs_sat26Dp5b.data = [hs_sat26Dp5a, hs_fdzutype26DoPd];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dp5b);
            };
            var hs_sat26Dp5B = new $hs.Thunk();
            hs_sat26Dp5B.evaluateOnce = function () {
                var hs_wild126Dp5c = hs_fdzutype26DoPd;
                if (hs_fdzutype26DoPd.notEvaluated) {
                    hs_wild126Dp5c = hs_fdzutype26DoPd.hscall();
                }
                switch (hs_wild126Dp5c.tag) {
                case 1:
                    var hs_sat26Dp5e = new $hs.Thunk();
                    hs_sat26Dp5e.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("is a directory\x00");
                    };
                    var hs_sat26Dp5f = new $hs.Thunk();
                    hs_sat26Dp5f.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("openFile\x00");
                    };
                    var hs_sat26Dp5g = new $hs.Data(1);
                    hs_sat26Dp5g.data = [$hs.modules.DataziMaybe.hs_Nothing, $hs.modules.GHCziIOziException.hs_InappropriateType, hs_sat26Dp5f, hs_sat26Dp5e, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing];
                    return $hs.modules.GHCziIOziException.hs_ioException.hscall(hs_sat26Dp5g);
                case 3:
                    var hs_sat26Dp5u = new $hs.Func(1);
                    hs_sat26Dp5u.evaluate = function (hs_r26DoPM) {
                        var hs_sat26Dp5k = new $hs.Thunk();
                        hs_sat26Dp5k.evaluateOnce = function () {
                            var hs_sat26Dp5h = new $hs.Thunk();
                            hs_sat26Dp5h.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("file is locked\x00");
                            };
                            var hs_sat26Dp5i = new $hs.Thunk();
                            hs_sat26Dp5i.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("openFile\x00");
                            };
                            var hs_sat26Dp5j = new $hs.Data(1);
                            hs_sat26Dp5j.data = [$hs.modules.DataziMaybe.hs_Nothing, $hs.modules.GHCziIOziException.hs_ResourceBusy, hs_sat26Dp5i, hs_sat26Dp5h, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing];
                            return $hs.modules.GHCziIOziException.hs_ioException.hscall(hs_sat26Dp5j);
                        };
                        var hs_sat26Dp5p = new $hs.Thunk();
                        hs_sat26Dp5p.evaluateOnce = function () {
                            var hs_sat26Dp5o = new $hs.Thunk();
                            hs_sat26Dp5o.evaluateOnce = function () {
                                var hs_sat26Dp5n = new $hs.Thunk();
                                hs_sat26Dp5n.evaluateOnce = function () {
                                    var hs_sat26Dp5m = new $hs.Thunk();
                                    hs_sat26Dp5m.evaluateOnce = function () {
                                        var hs_sat26Dp5l = new $hs.Thunk();
                                        hs_sat26Dp5l.evaluateOnce = function () {
                                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                        };
                                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26Dp5l);
                                    };
                                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26Dp5m);
                                };
                                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_r26DoPM, hs_sat26Dp5n);
                            };
                            return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dp5o);
                        };
                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dp5p, hs_sat26Dp5k);
                    };
                    var hs_sat26Dp5A = new $hs.Thunk();
                    hs_sat26Dp5A.evaluateOnce = function () {
                        var hs_ds126Dp5t = hs_fd26DoP3;
                        if (hs_fd26DoP3.notEvaluated) {
                            hs_ds126Dp5t = hs_fd26DoP3.hscall();
                        }
                        var hs_ds226DoPx = hs_ds126Dp5t.data[0];
                        var hs_ds326Dp5s = hs_dev26DoPk;
                        if (hs_dev26DoPk.notEvaluated) {
                            hs_ds326Dp5s = hs_dev26DoPk.hscall();
                        }
                        var hs_ds426DoPy = hs_ds326Dp5s.data[0];
                        var hs_ds526Dp5r = hs_ino26DoPn;
                        if (hs_ino26DoPn.notEvaluated) {
                            hs_ds526Dp5r = hs_ino26DoPn.hscall();
                        }
                        var hs_ds626DoPz = hs_ds526Dp5r.data[0];
                        var hs_sat26Dp5x = new $hs.Thunk();
                        hs_sat26Dp5x.evaluateOnce = function () {
                            var hs_wild226Dp5q = hs_iomode26DoPq;
                            if (hs_iomode26DoPq.notEvaluated) {
                                hs_wild226Dp5q = hs_iomode26DoPq.hscall();
                            }
                            switch (hs_wild226Dp5q.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            default:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            }
                        };
                        var hs_ds726Dp5w = $hs.modules.ForeignziMarshalziUtils.hs_fromBool.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26Dp5x);
                        var hs_ds826DoPA = hs_ds726Dp5w.data[0];
                        var hs_sat26Dp5z = new $hs.Func(1);
                        hs_sat26Dp5z.evaluate = function (hs_ds926DoPB) {
                            var hs_wild226Dp5v = [hs_ds926DoPB, lockFile(hs_ds226DoPx, hs_ds426DoPy, hs_ds626DoPz, hs_ds826DoPA)];
                            var hs_ds1026DoPG = hs_wild226Dp5v[0];
                            var hs_ds1126DoPH = hs_wild226Dp5v[1];
                            var hs_sat26Dp5y = new $hs.Data(1);
                            hs_sat26Dp5y.data = [hs_ds1126DoPH];
                            return [hs_ds1026DoPG, hs_sat26Dp5y];
                        };
                        if (hs_sat26Dp5z.notEvaluated) {
                            return hs_sat26Dp5z.hscall();
                        } else {
                            return hs_sat26Dp5z;
                        }
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dp5A, hs_sat26Dp5u);
                default:
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                }
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dp5B, hs_sat26Dp5d);
        };
        var hs_sat26Dp5E = new $hs.Thunk();
        hs_sat26Dp5E.evaluateOnce = function () {
            var hs_wild26Dp5C = hs_mbzustat26DoP1;
            if (hs_mbzustat26DoP1.notEvaluated) {
                hs_wild26Dp5C = hs_mbzustat26DoP1.hscall();
            }
            switch (hs_wild26Dp5C.tag) {
            case 1:
                return $hs.modules.SystemziPosixziInternals.hs_fdStat.hscall(hs_fd26DoP3);
            case 2:
                var hs_stat26DoP5 = hs_wild26Dp5C.data[0];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_stat26DoP5);
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dp5E, hs_sat26Dp5D);
    };
    hs_sat26Dp5F.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
    };
    this.hs_stderr.evaluateOnce = function () {
        var hs_tpl26Dp5G = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26Dp5F);
        var hs_tpl126DoQd = hs_tpl26Dp5G.data[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl126DoQd, 0];
        return $res;
    };
    hs_sat26Dp5H.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
    };
    this.hs_stdout.evaluateOnce = function () {
        var hs_tpl26Dp5I = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26Dp5H);
        var hs_tpl126DoQh = hs_tpl26Dp5I.data[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl126DoQh, 0];
        return $res;
    };
    hs_sat26Dp5J.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
    };
    this.hs_stdin.evaluateOnce = function () {
        var hs_tpl26Dp5K = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26Dp5J);
        var hs_tpl126DoQl = hs_tpl26Dp5K.data[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl126DoQl, 0];
        return $res;
    };
    this.hs_release.evaluate = function (hs_fd26DoQn) {
        var hs_sat26Dp5O = new $hs.Func(1);
        hs_sat26Dp5O.evaluate = function (hs_ds26Dp5L) {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        };
        var hs_sat26Dp5S = new $hs.Thunk();
        hs_sat26Dp5S.evaluateOnce = function () {
            var hs_wild26Dp5N = hs_fd26DoQn;
            if (hs_fd26DoQn.notEvaluated) {
                hs_wild26Dp5N = hs_fd26DoQn.hscall();
            }
            var hs_rb26DoQt = hs_wild26Dp5N.data[0];
            var hs_sat26Dp5R = new $hs.Func(1);
            hs_sat26Dp5R.evaluate = function (hs_ds26DoQu) {
                var hs_wild126Dp5M = [hs_ds26DoQu, unlockFile(hs_rb26DoQt)];
                var hs_ds126DoQz = hs_wild126Dp5M[0];
                var hs_ds226DoQA = hs_wild126Dp5M[1];
                var hs_sat26Dp5Q = new $hs.Data(1);
                hs_sat26Dp5Q.data = [hs_ds226DoQA];
                return [hs_ds126DoQz, hs_sat26Dp5Q];
            };
            if (hs_sat26Dp5R.notEvaluated) {
                return hs_sat26Dp5R.hscall();
            } else {
                return hs_sat26Dp5R;
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dp5S, hs_sat26Dp5O);
    };
    hs_zdcclose25v0kr.evaluate = function (hs_fd26DoQJ) {
        var hs_sat26Dp62 = new $hs.Thunk();
        hs_sat26Dp62.evaluateOnce = function () {
            var hs_sat26Dp5W = new $hs.Thunk();
            hs_sat26Dp5W.evaluateOnce = function () {
                var hs_sat26Dp5V = new $hs.Thunk();
                hs_sat26Dp5V.evaluateOnce = function () {
                    var hs_wild26Dp5T = hs_fd26DoQJ;
                    if (hs_fd26DoQJ.notEvaluated) {
                        hs_wild26Dp5T = hs_fd26DoQJ.hscall();
                    }
                    var hs_rb26DoQW = hs_wild26Dp5T.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb26DoQW];
                    return $res;
                };
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.SystemziPosixziTypes.hs_zdfNumFd, hs_sat26Dp5V);
            };
            var hs_sat26Dp61 = new $hs.Func(1);
            hs_sat26Dp61.evaluate = function (hs_realFd26DoQP) {
                var hs_sat26Dp5Y = new $hs.Thunk();
                hs_sat26Dp5Y.evaluateOnce = function () {
                    var hs_sat26Dp5X = new $hs.Thunk();
                    hs_sat26Dp5X.evaluateOnce = function () {
                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralFd, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_realFd26DoQP);
                    };
                    return $hs.modules.SystemziPosixziInternals.hs_czuclose.hscall(hs_sat26Dp5X);
                };
                var hs_sat26Dp60 = new $hs.Thunk();
                hs_sat26Dp60.evaluateOnce = function () {
                    var hs_sat26Dp5Z = new $hs.Thunk();
                    hs_sat26Dp5Z.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("GHC.IO.FD.close\x00");
                    };
                    return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1Retryzu.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26Dp5Z);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dp60, hs_sat26Dp5Y);
            };
            return $hs.modules.GHCziConcziIO.hs_closeFdWith.hscall(hs_sat26Dp61, hs_sat26Dp5W);
        };
        var hs_sat26Dp64 = new $hs.Thunk();
        hs_sat26Dp64.evaluateOnce = function () {
            var hs_sat26Dp63 = new $hs.Thunk();
            hs_sat26Dp63.evaluateOnce = function () {
                return $hs.modules.GHCziIOziFD.hs_release.hscall(hs_fd26DoQJ);
            };
            return $hs.modules.GHCziBase.hs_flip.hscall($hs.modules.GHCziIO.hs_finally, hs_sat26Dp63);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dp64, hs_sat26Dp62);
    };
    hs_zdcseek25v0kL.evaluate = function (hs_fd26DoR7, hs_mode26DoRf, hs_off26DoRd) {
        var hs_sat26Dp6b = new $hs.Thunk();
        hs_sat26Dp6b.evaluateOnce = function () {
            var hs_sat26Dp66 = new $hs.Thunk();
            hs_sat26Dp66.evaluateOnce = function () {
                var hs_wild26Dp65 = hs_mode26DoRf;
                if (hs_mode26DoRf.notEvaluated) {
                    hs_wild26Dp65 = hs_mode26DoRf.hscall();
                }
                switch (hs_wild26Dp65.tag) {
                case 1:
                    if ($hs.modules.SystemziPosixziInternals.hs_sEEKzuSET.notEvaluated) {
                        return $hs.modules.SystemziPosixziInternals.hs_sEEKzuSET.hscall();
                    } else {
                        return $hs.modules.SystemziPosixziInternals.hs_sEEKzuSET;
                    }
                case 2:
                    if ($hs.modules.SystemziPosixziInternals.hs_sEEKzuCUR.notEvaluated) {
                        return $hs.modules.SystemziPosixziInternals.hs_sEEKzuCUR.hscall();
                    } else {
                        return $hs.modules.SystemziPosixziInternals.hs_sEEKzuCUR;
                    }
                case 3:
                    if ($hs.modules.SystemziPosixziInternals.hs_sEEKzuEND.notEvaluated) {
                        return $hs.modules.SystemziPosixziInternals.hs_sEEKzuEND.hscall();
                    } else {
                        return $hs.modules.SystemziPosixziInternals.hs_sEEKzuEND;
                    }
                }
            };
            var hs_sat26Dp68 = new $hs.Thunk();
            hs_sat26Dp68.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, $hs.modules.SystemziPosixziTypes.hs_zdfNumCOff, hs_off26DoRd);
            };
            var hs_sat26Dp6a = new $hs.Thunk();
            hs_sat26Dp6a.evaluateOnce = function () {
                var hs_wild26Dp67 = hs_fd26DoR7;
                if (hs_fd26DoR7.notEvaluated) {
                    hs_wild26Dp67 = hs_fd26DoR7.hscall();
                }
                var hs_rb26DoRb = hs_wild26Dp67.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb26DoRb];
                return $res;
            };
            return $hs.modules.SystemziPosixziInternals.hs_czulseek.hscall(hs_sat26Dp6a, hs_sat26Dp68, hs_sat26Dp66);
        };
        var hs_sat26Dp6d = new $hs.Thunk();
        hs_sat26Dp6d.evaluateOnce = function () {
            var hs_sat26Dp6c = new $hs.Thunk();
            hs_sat26Dp6c.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("seek\x00");
            };
            return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1Retryzu.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCOff, hs_sat26Dp6c);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dp6d, hs_sat26Dp6b);
    };
    hs_zdctell25v0l4.evaluate = function (hs_fd26DoRp) {
        var hs_sat26Dp6m = new $hs.Thunk();
        hs_sat26Dp6m.evaluateOnce = function () {
            var hs_sat26Dp6j = new $hs.Thunk();
            hs_sat26Dp6j.evaluateOnce = function () {
                var hs_sat26Dp6g = new $hs.Thunk();
                hs_sat26Dp6g.evaluateOnce = function () {
                    var hs_sat26Dp6e = new $hs.Thunk();
                    hs_sat26Dp6e.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCOff, hs_sat26Dp6e);
                };
                var hs_sat26Dp6i = new $hs.Thunk();
                hs_sat26Dp6i.evaluateOnce = function () {
                    var hs_wild26Dp6f = hs_fd26DoRp;
                    if (hs_fd26DoRp.notEvaluated) {
                        hs_wild26Dp6f = hs_fd26DoRp.hscall();
                    }
                    var hs_rb26DoRt = hs_wild26Dp6f.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb26DoRt];
                    return $res;
                };
                return $hs.modules.SystemziPosixziInternals.hs_czulseek.hscall(hs_sat26Dp6i, hs_sat26Dp6g, $hs.modules.SystemziPosixziInternals.hs_sEEKzuCUR);
            };
            var hs_sat26Dp6l = new $hs.Thunk();
            hs_sat26Dp6l.evaluateOnce = function () {
                var hs_sat26Dp6k = new $hs.Thunk();
                hs_sat26Dp6k.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hGetPosn\x00");
                };
                return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1Retry.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCOff, hs_sat26Dp6k);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dp6l, hs_sat26Dp6j);
        };
        var hs_sat26Dp6n = new $hs.Thunk();
        hs_sat26Dp6n.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralCOff, $hs.modules.GHCziNum.hs_zdfNumInteger);
        };
        return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.GHCziBase.hs_zdfFunctorIO, hs_sat26Dp6n, hs_sat26Dp6m);
    };
    hs_setSizze25uuiI.evaluate = function (hs_fd26DoRJ, hs_sizze26DoRP) {
        var hs_sat26Dp6s = new $hs.Thunk();
        hs_sat26Dp6s.evaluateOnce = function () {
            var hs_sat26Dp6p = new $hs.Thunk();
            hs_sat26Dp6p.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, $hs.modules.SystemziPosixziTypes.hs_zdfNumCOff, hs_sizze26DoRP);
            };
            var hs_sat26Dp6r = new $hs.Thunk();
            hs_sat26Dp6r.evaluateOnce = function () {
                var hs_wild26Dp6o = hs_fd26DoRJ;
                if (hs_fd26DoRJ.notEvaluated) {
                    hs_wild26Dp6o = hs_fd26DoRJ.hscall();
                }
                var hs_rb26DoRN = hs_wild26Dp6o.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb26DoRN];
                return $res;
            };
            return $hs.modules.SystemziPosixziInternals.hs_czuftruncate.hscall(hs_sat26Dp6r, hs_sat26Dp6p);
        };
        var hs_sat26Dp6w = new $hs.Thunk();
        hs_sat26Dp6w.evaluateOnce = function () {
            var hs_sat26Dp6t = new $hs.Thunk();
            hs_sat26Dp6t.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("GHC.IO.FD.setSize\x00");
            };
            var hs_ds26DoRD = new $hs.Thunk();
            hs_ds26DoRD.evaluateOnce = function () {
                var hs_sat26Dp6u = new $hs.Thunk();
                hs_sat26Dp6u.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26Dp6u);
            };
            var hs_sat26Dp6v = new $hs.Func(1);
            hs_sat26Dp6v.evaluate = function (hs_ds126DoRF) {
                return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_ds126DoRF, hs_ds26DoRD);
            };
            return $hs.modules.ForeignziCziError.hs_throwErrnoIfzu.hscall(hs_sat26Dp6v, hs_sat26Dp6t);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dp6w, hs_sat26Dp6s);
    };
    this.hs_openFile.evaluate = function (hs_filepath26DoRU, hs_iomode26DoRZ) {
        var hs_sat26Dp6X = new $hs.Func(1);
        hs_sat26Dp6X.evaluate = function (hs_f26DoRY) {
            var hs_sat26Dp6M = new $hs.Func(1);
            hs_sat26Dp6M.evaluate = function (hs_fd26DoSa) {
                var hs_sat26Dp6G = new $hs.Func(1);
                hs_sat26Dp6G.evaluate = function (hs_ds26DoSm) {
                    var hs_wild26Dp6x = hs_ds26DoSm;
                    if (hs_ds26DoSm.notEvaluated) {
                        hs_wild26Dp6x = hs_ds26DoSm.hscall();
                    }
                    var hs_fD26DoSu = hs_wild26Dp6x.data[0];
                    var hs_fdzutype26DoSr = hs_wild26Dp6x.data[1];
                    var hs_sat26Dp6z = new $hs.Thunk();
                    hs_sat26Dp6z.evaluateOnce = function () {
                        var hs_sat26Dp6y = new $hs.Data(1);
                        hs_sat26Dp6y.data = [hs_fD26DoSu, hs_fdzutype26DoSr];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dp6y);
                    };
                    var hs_sat26Dp6E = new $hs.Thunk();
                    hs_sat26Dp6E.evaluateOnce = function () {
                        var hs_sat26Dp6A = new $hs.Thunk();
                        hs_sat26Dp6A.evaluateOnce = function () {
                            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziDevice.hs_zdfEqIODeviceType, hs_fdzutype26DoSr, $hs.modules.GHCziIOziDevice.hs_RegularFile);
                        };
                        var hs_sat26Dp6C = new $hs.Thunk();
                        hs_sat26Dp6C.evaluateOnce = function () {
                            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziIOMode.hs_zdfEqIOMode, hs_iomode26DoRZ, $hs.modules.GHCziIOziIOMode.hs_WriteMode);
                        };
                        var hs_wild126Dp6B = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dp6C, hs_sat26Dp6A);
                        switch (hs_wild126Dp6B.tag) {
                        case 1:
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                        case 2:
                            var hs_sat26Dp6D = new $hs.Thunk();
                            hs_sat26Dp6D.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                            };
                            return hs_setSizze25uuiI.hscall(hs_fD26DoSu, hs_sat26Dp6D);
                        }
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dp6E, hs_sat26Dp6z);
                };
                var hs_sat26Dp6L = new $hs.Thunk();
                hs_sat26Dp6L.evaluateOnce = function () {
                    var hs_sat26Dp6J = new $hs.Func(2);
                    hs_sat26Dp6J.evaluate = function (hs_zddException26DoSg, hs_e26DoSh) {
                        var hs_sat26Dp6H = new $hs.Func(1);
                        hs_sat26Dp6H.evaluate = function (hs_ds26Dp6F) {
                            return $hs.modules.GHCziIO.hs_throwIO.hscall(hs_zddException26DoSg, hs_e26DoSh);
                        };
                        var hs_sat26Dp6I = new $hs.Thunk();
                        hs_sat26Dp6I.evaluateOnce = function () {
                            return $hs.modules.SystemziPosixziInternals.hs_czuclose.hscall(hs_fd26DoSa);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dp6I, hs_sat26Dp6H);
                    };
                    var hs_sat26Dp6K = new $hs.Thunk();
                    hs_sat26Dp6K.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziFD.hs_mkFD.hscall(hs_fd26DoSa, hs_iomode26DoRZ, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.GHCziBool.hs_False, $hs.modules.GHCziBool.hs_True);
                    };
                    return $hs.modules.GHCziIO.hs_catchAny.hscall(hs_sat26Dp6K, hs_sat26Dp6J);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dp6L, hs_sat26Dp6G);
            };
            var hs_sat26Dp6W = new $hs.Thunk();
            hs_sat26Dp6W.evaluateOnce = function () {
                var hs_sat26Dp6U = new $hs.Thunk();
                hs_sat26Dp6U.evaluateOnce = function () {
                    var hs_sat26Dp6O = new $hs.Thunk();
                    hs_sat26Dp6O.evaluateOnce = function () {
                        var hs_sat26Dp6N = new $hs.Thunk();
                        hs_sat26Dp6N.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(438);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCMode, hs_sat26Dp6N);
                    };
                    var hs_sat26Dp6T = new $hs.Thunk();
                    hs_sat26Dp6T.evaluateOnce = function () {
                        var hs_sat26Dp6R = new $hs.Thunk();
                        hs_sat26Dp6R.evaluateOnce = function () {
                            var hs_sat26Dp6P = new $hs.Thunk();
                            hs_sat26Dp6P.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26Dp6P);
                        };
                        var hs_sat26Dp6S = new $hs.Thunk();
                        hs_sat26Dp6S.evaluateOnce = function () {
                            var hs_wild26Dp6Q = hs_iomode26DoRZ;
                            if (hs_iomode26DoRZ.notEvaluated) {
                                hs_wild26Dp6Q = hs_iomode26DoRZ.hscall();
                            }
                            switch (hs_wild26Dp6Q.tag) {
                            case 1:
                                if (hs_readzuflags25uuie.notEvaluated) {
                                    return hs_readzuflags25uuie.hscall();
                                } else {
                                    return hs_readzuflags25uuie;
                                }
                            case 2:
                                if (hs_writezuflags25uuig.notEvaluated) {
                                    return hs_writezuflags25uuig.hscall();
                                } else {
                                    return hs_writezuflags25uuig;
                                }
                            case 3:
                                if (hs_appendzuflags25uuik.notEvaluated) {
                                    return hs_appendzuflags25uuik.hscall();
                                } else {
                                    return hs_appendzuflags25uuik;
                                }
                            case 4:
                                if (hs_rwzuflags25uuii.notEvaluated) {
                                    return hs_rwzuflags25uuii.hscall();
                                } else {
                                    return hs_rwzuflags25uuii;
                                }
                            }
                        };
                        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt, hs_sat26Dp6S, hs_sat26Dp6R);
                    };
                    return $hs.modules.SystemziPosixziInternals.hs_czuopen.hscall(hs_f26DoRY, hs_sat26Dp6T, hs_sat26Dp6O);
                };
                var hs_sat26Dp6V = new $hs.Thunk();
                hs_sat26Dp6V.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("openFile\x00");
                };
                return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1Retry.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26Dp6V, hs_sat26Dp6U);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dp6W, hs_sat26Dp6M);
        };
        var hs_sat26Dp6Y = new $hs.Thunk();
        hs_sat26Dp6Y.evaluateOnce = function () {
            return $hs.modules.SystemziPosixziInternals.hs_withFilePath.hscall(hs_filepath26DoRU);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dp6Y, hs_sat26Dp6X);
    };
    hs_devType25uuiK.evaluate = function (hs_fd26DoSD) {
        var hs_sat26Dp73 = new $hs.Func(1);
        hs_sat26Dp73.evaluate = function (hs_ds26DoSL) {
            var hs_wild26Dp6Z = hs_ds26DoSL;
            if (hs_ds26DoSL.notEvaluated) {
                hs_wild26Dp6Z = hs_ds26DoSL.hscall();
            }
            var hs_ty26DoSQ = hs_wild26Dp6Z.data[0];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ty26DoSQ);
        };
        var hs_sat26Dp76 = new $hs.Thunk();
        hs_sat26Dp76.evaluateOnce = function () {
            var hs_sat26Dp75 = new $hs.Thunk();
            hs_sat26Dp75.evaluateOnce = function () {
                var hs_wild26Dp72 = hs_fd26DoSD;
                if (hs_fd26DoSD.notEvaluated) {
                    hs_wild26Dp72 = hs_fd26DoSD.hscall();
                }
                var hs_rb26DoSH = hs_wild26Dp72.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb26DoSH];
                return $res;
            };
            return $hs.modules.SystemziPosixziInternals.hs_fdStat.hscall(hs_sat26Dp75);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dp76, hs_sat26Dp73);
    };
    hs_zdcisSeekable25v0mD.evaluate = function (hs_fd26DoSV) {
        var hs_sat26Dp7a = new $hs.Func(1);
        hs_sat26Dp7a.evaluate = function (hs_t26DoSY) {
            var hs_sat26Dp79 = new $hs.Thunk();
            hs_sat26Dp79.evaluateOnce = function () {
                var hs_sat26Dp77 = new $hs.Thunk();
                hs_sat26Dp77.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziDevice.hs_zdfEqIODeviceType, hs_t26DoSY, $hs.modules.GHCziIOziDevice.hs_RawDevice);
                };
                var hs_sat26Dp78 = new $hs.Thunk();
                hs_sat26Dp78.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziDevice.hs_zdfEqIODeviceType, hs_t26DoSY, $hs.modules.GHCziIOziDevice.hs_RegularFile);
                };
                return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26Dp78, hs_sat26Dp77);
            };
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dp79);
        };
        var hs_sat26Dp7b = new $hs.Thunk();
        hs_sat26Dp7b.evaluateOnce = function () {
            return hs_devType25uuiK.hscall(hs_fd26DoSV);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dp7b, hs_sat26Dp7a);
    };
    hs_zdcdup25v0mO.evaluate = function (hs_fd26DoT8) {
        var hs_sat26Dp7h = new $hs.Func(1);
        hs_sat26Dp7h.evaluate = function (hs_newfd26DoTk) {
            var hs_sat26Dp7f = new $hs.Thunk();
            hs_sat26Dp7f.evaluateOnce = function () {
                var hs_wild26Dp7e = hs_fd26DoT8;
                if (hs_fd26DoT8.notEvaluated) {
                    hs_wild26Dp7e = hs_fd26DoT8.hscall();
                }
                var hs_rb126DoTo = hs_wild26Dp7e.data[1];
                var hs_tpl26Dp7c = hs_newfd26DoTk;
                if (hs_newfd26DoTk.notEvaluated) {
                    hs_tpl26Dp7c = hs_newfd26DoTk.hscall();
                }
                var hs_tpl126DoTn = hs_tpl26Dp7c.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_tpl126DoTn, hs_rb126DoTo];
                return $res;
            };
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dp7f);
        };
        var hs_sat26Dp7n = new $hs.Thunk();
        hs_sat26Dp7n.evaluateOnce = function () {
            var hs_sat26Dp7k = new $hs.Thunk();
            hs_sat26Dp7k.evaluateOnce = function () {
                var hs_sat26Dp7j = new $hs.Thunk();
                hs_sat26Dp7j.evaluateOnce = function () {
                    var hs_wild26Dp7g = hs_fd26DoT8;
                    if (hs_fd26DoT8.notEvaluated) {
                        hs_wild26Dp7g = hs_fd26DoT8.hscall();
                    }
                    var hs_rb26DoTc = hs_wild26Dp7g.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb26DoTc];
                    return $res;
                };
                return $hs.modules.SystemziPosixziInternals.hs_czudup.hscall(hs_sat26Dp7j);
            };
            var hs_sat26Dp7m = new $hs.Thunk();
            hs_sat26Dp7m.evaluateOnce = function () {
                var hs_sat26Dp7l = new $hs.Thunk();
                hs_sat26Dp7l.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("GHC.IO.FD.dup\x00");
                };
                return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26Dp7l);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dp7m, hs_sat26Dp7k);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dp7n, hs_sat26Dp7h);
    };
    hs_zdcdup225v0nc.evaluate = function (hs_fd26DoTx, hs_fdto26DoTD) {
        var hs_sat26Dp7u = new $hs.Thunk();
        hs_sat26Dp7u.evaluateOnce = function () {
            var hs_sat26Dp7s = new $hs.Thunk();
            hs_sat26Dp7s.evaluateOnce = function () {
                var hs_wild26Dp7q = hs_fd26DoTx;
                if (hs_fd26DoTx.notEvaluated) {
                    hs_wild26Dp7q = hs_fd26DoTx.hscall();
                }
                var hs_rb126DoTS = hs_wild26Dp7q.data[1];
                var hs_wild126Dp7o = hs_fdto26DoTD;
                if (hs_fdto26DoTD.notEvaluated) {
                    hs_wild126Dp7o = hs_fdto26DoTD.hscall();
                }
                var hs_rb226DoTR = hs_wild126Dp7o.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb226DoTR, hs_rb126DoTS];
                return $res;
            };
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dp7s);
        };
        var hs_sat26Dp7D = new $hs.Thunk();
        hs_sat26Dp7D.evaluateOnce = function () {
            var hs_sat26Dp7A = new $hs.Thunk();
            hs_sat26Dp7A.evaluateOnce = function () {
                var hs_sat26Dp7x = new $hs.Thunk();
                hs_sat26Dp7x.evaluateOnce = function () {
                    var hs_wild26Dp7t = hs_fdto26DoTD;
                    if (hs_fdto26DoTD.notEvaluated) {
                        hs_wild26Dp7t = hs_fdto26DoTD.hscall();
                    }
                    var hs_rb26DoTH = hs_wild26Dp7t.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb26DoTH];
                    return $res;
                };
                var hs_sat26Dp7z = new $hs.Thunk();
                hs_sat26Dp7z.evaluateOnce = function () {
                    var hs_wild26Dp7w = hs_fd26DoTx;
                    if (hs_fd26DoTx.notEvaluated) {
                        hs_wild26Dp7w = hs_fd26DoTx.hscall();
                    }
                    var hs_rb26DoTB = hs_wild26Dp7w.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb26DoTB];
                    return $res;
                };
                return $hs.modules.SystemziPosixziInternals.hs_czudup2.hscall(hs_sat26Dp7z, hs_sat26Dp7x);
            };
            var hs_sat26Dp7C = new $hs.Thunk();
            hs_sat26Dp7C.evaluateOnce = function () {
                var hs_sat26Dp7B = new $hs.Thunk();
                hs_sat26Dp7B.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("GHC.IO.FD.dup2\x00");
                };
                return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1zu.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26Dp7B);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dp7C, hs_sat26Dp7A);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dp7D, hs_sat26Dp7u);
    };
    this.hs_setNonBlockingMode.evaluate = function (hs_fd26DoTX, hs_set26DoU3) {
        var hs_sat26Dp7J = new $hs.Thunk();
        hs_sat26Dp7J.evaluateOnce = function () {
            var hs_sat26Dp7H = new $hs.Thunk();
            hs_sat26Dp7H.evaluateOnce = function () {
                var hs_wild26Dp7F = hs_fd26DoTX;
                if (hs_fd26DoTX.notEvaluated) {
                    hs_wild26Dp7F = hs_fd26DoTX.hscall();
                }
                var hs_rb26DoUa = hs_wild26Dp7F.data[0];
                var hs_tpl26Dp7E = $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziEnum.hs_zdfEnumBool, hs_set26DoU3);
                var hs_tpl126DoUb = hs_tpl26Dp7E.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb26DoUa, hs_tpl126DoUb];
                return $res;
            };
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dp7H);
        };
        var hs_sat26Dp7M = new $hs.Thunk();
        hs_sat26Dp7M.evaluateOnce = function () {
            var hs_sat26Dp7L = new $hs.Thunk();
            hs_sat26Dp7L.evaluateOnce = function () {
                var hs_wild26Dp7I = hs_fd26DoTX;
                if (hs_fd26DoTX.notEvaluated) {
                    hs_wild26Dp7I = hs_fd26DoTX.hscall();
                }
                var hs_rb26DoU1 = hs_wild26Dp7I.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb26DoU1];
                return $res;
            };
            return $hs.modules.SystemziPosixziInternals.hs_setNonBlockingFD.hscall(hs_sat26Dp7L, hs_set26DoU3);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dp7M, hs_sat26Dp7J);
    };
    hs_zdcready25v0nZ.evaluate = function (hs_fd26DoUl, hs_write26DoUr, hs_msecs26DoUv) {
        var hs_sat26Dp7Q = new $hs.Func(1);
        hs_sat26Dp7Q.evaluate = function (hs_r26DoUT) {
            var hs_sat26Dp7O = new $hs.Thunk();
            hs_sat26Dp7O.evaluateOnce = function () {
                var hs_sat26Dp7N = new $hs.Thunk();
                hs_sat26Dp7N.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.GHCziNum.hs_zdfNumInt, hs_r26DoUT);
                };
                return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziEnum.hs_zdfEnumBool, hs_sat26Dp7N);
            };
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dp7O);
        };
        var hs_sat26Dp85 = new $hs.Thunk();
        hs_sat26Dp85.evaluateOnce = function () {
            var hs_sat26Dp82 = new $hs.Thunk();
            hs_sat26Dp82.evaluateOnce = function () {
                var hs_wild26Dp7P = hs_fd26DoUl;
                if (hs_fd26DoUl.notEvaluated) {
                    hs_wild26Dp7P = hs_fd26DoUl.hscall();
                }
                var hs_rb26DoUD = hs_wild26Dp7P.data[0];
                var hs_sat26Dp7T = new $hs.Thunk();
                hs_sat26Dp7T.evaluateOnce = function () {
                    var hs_sat26Dp7S = new $hs.Thunk();
                    hs_sat26Dp7S.evaluateOnce = function () {
                        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziEnum.hs_zdfEnumBool);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dp7S, hs_write26DoUr);
                };
                var hs_sat26Dp7W = new $hs.Thunk();
                hs_sat26Dp7W.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt);
                };
                var hs_ds26Dp7V = $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dp7W, hs_sat26Dp7T);
                var hs_ds126DoUE = hs_ds26Dp7V.data[0];
                var hs_ds226Dp7U = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_msecs26DoUv);
                var hs_ds326DoUF = hs_ds226Dp7U.data[0];
                var hs_sat26Dp7Z = new $hs.Thunk();
                hs_sat26Dp7Z.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                var hs_ds426Dp7Y = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26Dp7Z);
                var hs_ds526DoUG = hs_ds426Dp7Y.data[0];
                var hs_sat26Dp81 = new $hs.Func(1);
                hs_sat26Dp81.evaluate = function (hs_ds626DoUH) {
                    var hs_wild126Dp7X = [hs_ds626DoUH, fdReady(hs_rb26DoUD, hs_ds126DoUE, hs_ds326DoUF, hs_ds526DoUG)];
                    var hs_ds726DoUM = hs_wild126Dp7X[0];
                    var hs_ds826DoUN = hs_wild126Dp7X[1];
                    var hs_sat26Dp80 = new $hs.Data(1);
                    hs_sat26Dp80.data = [hs_ds826DoUN];
                    return [hs_ds726DoUM, hs_sat26Dp80];
                };
                if (hs_sat26Dp81.notEvaluated) {
                    return hs_sat26Dp81.hscall();
                } else {
                    return hs_sat26Dp81;
                }
            };
            var hs_sat26Dp84 = new $hs.Thunk();
            hs_sat26Dp84.evaluateOnce = function () {
                var hs_sat26Dp83 = new $hs.Thunk();
                hs_sat26Dp83.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("GHC.IO.FD.ready\x00");
                };
                return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1Retry.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26Dp83);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dp84, hs_sat26Dp82);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dp85, hs_sat26Dp7Q);
    };
    hs_zdcisTerminal25v0oI.evaluate = function (hs_fd26DoV0) {
        var hs_sat26Dp89 = new $hs.Thunk();
        hs_sat26Dp89.evaluateOnce = function () {
            var hs_sat26Dp86 = new $hs.Thunk();
            hs_sat26Dp86.evaluateOnce = function () {
                return $hs.modules.ForeignziMarshalziUtils.hs_toBool.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt);
            };
            var hs_sat26Dp87 = new $hs.Thunk();
            hs_sat26Dp87.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26Dp87, hs_sat26Dp86);
        };
        var hs_sat26Dp8c = new $hs.Thunk();
        hs_sat26Dp8c.evaluateOnce = function () {
            var hs_sat26Dp8b = new $hs.Thunk();
            hs_sat26Dp8b.evaluateOnce = function () {
                var hs_wild26Dp88 = hs_fd26DoV0;
                if (hs_fd26DoV0.notEvaluated) {
                    hs_wild26Dp88 = hs_fd26DoV0.hscall();
                }
                var hs_rb26DoV4 = hs_wild26Dp88.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb26DoV4];
                return $res;
            };
            return $hs.modules.SystemziPosixziInternals.hs_czuisatty.hscall(hs_sat26Dp8b);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dp8c, hs_sat26Dp89);
    };
    this.hs_zdfIODeviceFD.data = [hs_zdcready25v0nZ, hs_zdcclose25v0kr, hs_zdcisTerminal25v0oI, hs_zdcisSeekable25v0mD, hs_zdcseek25v0kL, hs_zdctell25v0l4, hs_zdcgetSizze25v0im, hs_setSizze25uuiI, hs_zdcsetEcho25v0ib, hs_zdcgetEcho25v0i2, hs_zdcsetRaw25v0hQ, hs_devType25uuiK, hs_zdcdup25v0mO, hs_zdcdup225v0nc];
    this.hs_readRawBufferPtr.evaluate = function (hs_loc26DoVs, hs_fd26DoVf, hs_buf26DoVK, hs_off26DoVL, hs_len26DoVN) {
        var hs_fd126DoVu = hs_fd26DoVf;
        if (hs_fd26DoVf.notEvaluated) {
            hs_fd126DoVu = hs_fd26DoVf.hscall();
        }
        var hs_dozuread26DoVD = new $hs.Func(3);
        hs_dozuread26DoVD.evaluate = function (hs_zddNum26DoVo, hs_zddIntegral26DoVn, hs_eta26DoVt) {
            var hs_sat26Dp8m = new $hs.Thunk();
            hs_sat26Dp8m.evaluateOnce = function () {
                var hs_sat26Dp8k = new $hs.Thunk();
                hs_sat26Dp8k.evaluateOnce = function () {
                    var hs_sat26Dp8i = new $hs.Thunk();
                    hs_sat26Dp8i.evaluateOnce = function () {
                        var hs_sat26Dp8h = new $hs.Thunk();
                        hs_sat26Dp8h.evaluateOnce = function () {
                            var hs_wild26Dp8d = hs_fd126DoVu;
                            if (hs_fd126DoVu.notEvaluated) {
                                hs_wild26Dp8d = hs_fd126DoVu.hscall();
                            }
                            var hs_rb26DoVy = hs_wild26Dp8d.data[0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb26DoVy];
                            return $res;
                        };
                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.SystemziPosixziTypes.hs_zdfNumFd, hs_sat26Dp8h);
                    };
                    return $hs.modules.GHCziConcziIO.hs_threadWaitRead.hscall(hs_sat26Dp8i);
                };
                var hs_sat26Dp8l = new $hs.Thunk();
                hs_sat26Dp8l.evaluateOnce = function () {
                    var hs_sat26Dp8j = $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26DoVn);
                    return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_sat26Dp8j);
                };
                return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1RetryMayBlock.hscall(hs_sat26Dp8l, hs_loc26DoVs, hs_eta26DoVt, hs_sat26Dp8k);
            };
            var hs_sat26Dp8n = new $hs.Thunk();
            hs_sat26Dp8n.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall(hs_zddIntegral26DoVn, hs_zddNum26DoVo);
            };
            return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.GHCziBase.hs_zdfFunctorIO, hs_sat26Dp8n, hs_sat26Dp8m);
        };
        var hs_unsafezuread26DoVP = new $hs.Thunk();
        hs_unsafezuread26DoVP.evaluateOnce = function () {
            var hs_sat26Dp8s = new $hs.Thunk();
            hs_sat26Dp8s.evaluateOnce = function () {
                var hs_sat26Dp8p = new $hs.Thunk();
                hs_sat26Dp8p.evaluateOnce = function () {
                    return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_buf26DoVK, hs_off26DoVL);
                };
                var hs_sat26Dp8r = new $hs.Thunk();
                hs_sat26Dp8r.evaluateOnce = function () {
                    var hs_wild26Dp8o = hs_fd126DoVu;
                    if (hs_fd126DoVu.notEvaluated) {
                        hs_wild26Dp8o = hs_fd126DoVu.hscall();
                    }
                    var hs_rb26DoVI = hs_wild26Dp8o.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb26DoVI];
                    return $res;
                };
                return $hs.modules.SystemziPosixziInternals.hs_czuread.hscall(hs_sat26Dp8r, hs_sat26Dp8p, hs_len26DoVN);
            };
            return hs_dozuread26DoVD.hscall($hs.modules.GHCziNum.hs_zdfNumInt, $hs.modules.SystemziPosixziTypes.hs_zdfIntegralCSsizze, hs_sat26Dp8s);
        };
        var hs_read26DoW5 = new $hs.Thunk();
        hs_read26DoW5.evaluateOnce = function () {
            var hs_wild26Dp8v = [$hs.modules.GHCziPrim.hs_realWorldzh, rtsSupportsBoundThreads()];
            var hs_ds126DoVW = hs_wild26Dp8v[1];
            var hs_wild126Dp8t = hs_ds126DoVW;
            if (hs_ds126DoVW.notEvaluated) {
                hs_wild126Dp8t = hs_ds126DoVW.hscall();
            }
            switch (hs_wild126Dp8t) {
            case 0:
                if (hs_unsafezuread26DoVP.notEvaluated) {
                    return hs_unsafezuread26DoVP.hscall();
                } else {
                    return hs_unsafezuread26DoVP;
                }
            default:
                var hs_sat26Dp8A = new $hs.Thunk();
                hs_sat26Dp8A.evaluateOnce = function () {
                    var hs_sat26Dp8x = new $hs.Thunk();
                    hs_sat26Dp8x.evaluateOnce = function () {
                        return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_buf26DoVK, hs_off26DoVL);
                    };
                    var hs_sat26Dp8z = new $hs.Thunk();
                    hs_sat26Dp8z.evaluateOnce = function () {
                        var hs_wild226Dp8w = hs_fd126DoVu;
                        if (hs_fd126DoVu.notEvaluated) {
                            hs_wild226Dp8w = hs_fd126DoVu.hscall();
                        }
                        var hs_rb26DoW1 = hs_wild226Dp8w.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb26DoW1];
                        return $res;
                    };
                    return $hs.modules.SystemziPosixziInternals.hs_czusafezuread.hscall(hs_sat26Dp8z, hs_sat26Dp8x, hs_len26DoVN);
                };
                return hs_dozuread26DoVD.hscall($hs.modules.GHCziNum.hs_zdfNumInt, $hs.modules.SystemziPosixziTypes.hs_zdfIntegralCSsizze, hs_sat26Dp8A);
            }
        };
        var hs_sat26Dp8D = new $hs.Data(1);
        hs_sat26Dp8D.data = [0];
        var hs_sat26Dp8F = new $hs.Thunk();
        hs_sat26Dp8F.evaluateOnce = function () {
            var hs_wild26Dp8C = hs_fd126DoVu;
            if (hs_fd126DoVu.notEvaluated) {
                hs_wild26Dp8C = hs_fd126DoVu.hscall();
            }
            var hs_rb126DoW9 = hs_wild26Dp8C.data[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_rb126DoW9];
            return $res;
        };
        var hs_wild26Dp8E = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_sat26Dp8F, hs_sat26Dp8D);
        switch (hs_wild26Dp8E.tag) {
        case 1:
            var hs_sat26Dp8P = new $hs.Func(1);
            hs_sat26Dp8P.evaluate = function (hs_r26DoWH) {
                var hs_sat26Dp8J = new $hs.Thunk();
                hs_sat26Dp8J.evaluateOnce = function () {
                    var hs_sat26Dp8G = new $hs.Thunk();
                    hs_sat26Dp8G.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26Dp8G);
                };
                var hs_wild126Dp8I = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_r26DoWH, hs_sat26Dp8J);
                switch (hs_wild126Dp8I.tag) {
                case 1:
                    var hs_sat26Dp8N = new $hs.Thunk();
                    hs_sat26Dp8N.evaluateOnce = function () {
                        var hs_sat26Dp8M = new $hs.Thunk();
                        hs_sat26Dp8M.evaluateOnce = function () {
                            var hs_sat26Dp8L = new $hs.Thunk();
                            hs_sat26Dp8L.evaluateOnce = function () {
                                var hs_wild226Dp8H = hs_fd126DoVu;
                                if (hs_fd126DoVu.notEvaluated) {
                                    hs_wild226Dp8H = hs_fd126DoVu.hscall();
                                }
                                var hs_rb26DoWO = hs_wild226Dp8H.data[0];
                                var $res = new $hs.Data(1);
                                $res.data = [hs_rb26DoWO];
                                return $res;
                            };
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.SystemziPosixziTypes.hs_zdfNumFd, hs_sat26Dp8L);
                        };
                        return $hs.modules.GHCziConcziIO.hs_threadWaitRead.hscall(hs_sat26Dp8M);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dp8N, hs_read26DoW5);
                case 2:
                    if (hs_read26DoW5.notEvaluated) {
                        return hs_read26DoW5.hscall();
                    } else {
                        return hs_read26DoW5;
                    }
                }
            };
            var hs_sat26Dp91 = new $hs.Thunk();
            hs_sat26Dp91.evaluateOnce = function () {
                var hs_sat26Dp90 = new $hs.Thunk();
                hs_sat26Dp90.evaluateOnce = function () {
                    var hs_wild126Dp8O = hs_fd126DoVu;
                    if (hs_fd126DoVu.notEvaluated) {
                        hs_wild126Dp8O = hs_fd126DoVu.hscall();
                    }
                    var hs_rb26DoWr = hs_wild126Dp8O.data[0];
                    var hs_sat26Dp8S = new $hs.Thunk();
                    hs_sat26Dp8S.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    var hs_ds26Dp8R = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26Dp8S);
                    var hs_ds126DoWs = hs_ds26Dp8R.data[0];
                    var hs_sat26Dp8U = new $hs.Thunk();
                    hs_sat26Dp8U.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    var hs_ds226Dp8T = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26Dp8U);
                    var hs_ds326DoWt = hs_ds226Dp8T.data[0];
                    var hs_sat26Dp8X = new $hs.Thunk();
                    hs_sat26Dp8X.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    var hs_ds426Dp8W = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26Dp8X);
                    var hs_ds526DoWu = hs_ds426Dp8W.data[0];
                    var hs_sat26Dp8Z = new $hs.Func(1);
                    hs_sat26Dp8Z.evaluate = function (hs_ds626DoWv) {
                        var hs_wild226Dp8V = [hs_ds626DoWv, fdReady(hs_rb26DoWr, hs_ds126DoWs, hs_ds326DoWt, hs_ds526DoWu)];
                        var hs_ds726DoWA = hs_wild226Dp8V[0];
                        var hs_ds826DoWB = hs_wild226Dp8V[1];
                        var hs_sat26Dp8Y = new $hs.Data(1);
                        hs_sat26Dp8Y.data = [hs_ds826DoWB];
                        return [hs_ds726DoWA, hs_sat26Dp8Y];
                    };
                    if (hs_sat26Dp8Z.notEvaluated) {
                        return hs_sat26Dp8Z.hscall();
                    } else {
                        return hs_sat26Dp8Z;
                    }
                };
                return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_loc26DoVs, hs_sat26Dp90);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dp91, hs_sat26Dp8P);
        case 2:
            if (hs_unsafezuread26DoVP.notEvaluated) {
                return hs_unsafezuread26DoVP.hscall();
            } else {
                return hs_unsafezuread26DoVP;
            }
        }
    };
    hs_zdcread25v0qE.evaluate = function (hs_fd26DoWZ, hs_ptr26DoX0, hs_bytes26DoX2) {
        var hs_sat26Dp93 = new $hs.Func(1);
        hs_sat26Dp93.evaluate = function (hs_r26DoX6) {
            var hs_sat26Dp92 = new $hs.Thunk();
            hs_sat26Dp92.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziNum.hs_zdfNumInt, hs_r26DoX6);
            };
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dp92);
        };
        var hs_sat26Dp97 = new $hs.Thunk();
        hs_sat26Dp97.evaluateOnce = function () {
            var hs_sat26Dp94 = new $hs.Thunk();
            hs_sat26Dp94.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_bytes26DoX2);
            };
            var hs_sat26Dp95 = new $hs.Data(1);
            hs_sat26Dp95.data = [0];
            var hs_sat26Dp96 = new $hs.Thunk();
            hs_sat26Dp96.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("GHC.IO.FD.fdRead\x00");
            };
            return $hs.modules.GHCziIOziFD.hs_readRawBufferPtr.hscall(hs_sat26Dp96, hs_fd26DoWZ, hs_ptr26DoX0, hs_sat26Dp95, hs_sat26Dp94);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dp97, hs_sat26Dp93);
    };
    this.hs_writeRawBufferPtr.evaluate = function (hs_loc26DoXr, hs_fd26DoXe, hs_buf26DoXJ, hs_off26DoXK, hs_len26DoXM) {
        var hs_fd126DoXt = hs_fd26DoXe;
        if (hs_fd26DoXe.notEvaluated) {
            hs_fd126DoXt = hs_fd26DoXe.hscall();
        }
        var hs_dozuwrite26DoXC = new $hs.Func(3);
        hs_dozuwrite26DoXC.evaluate = function (hs_zddNum26DoXn, hs_zddIntegral26DoXm, hs_eta26DoXs) {
            var hs_sat26Dp9h = new $hs.Thunk();
            hs_sat26Dp9h.evaluateOnce = function () {
                var hs_sat26Dp9f = new $hs.Thunk();
                hs_sat26Dp9f.evaluateOnce = function () {
                    var hs_sat26Dp9d = new $hs.Thunk();
                    hs_sat26Dp9d.evaluateOnce = function () {
                        var hs_sat26Dp9c = new $hs.Thunk();
                        hs_sat26Dp9c.evaluateOnce = function () {
                            var hs_wild26Dp98 = hs_fd126DoXt;
                            if (hs_fd126DoXt.notEvaluated) {
                                hs_wild26Dp98 = hs_fd126DoXt.hscall();
                            }
                            var hs_rb26DoXx = hs_wild26Dp98.data[0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb26DoXx];
                            return $res;
                        };
                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.SystemziPosixziTypes.hs_zdfNumFd, hs_sat26Dp9c);
                    };
                    return $hs.modules.GHCziConcziIO.hs_threadWaitWrite.hscall(hs_sat26Dp9d);
                };
                var hs_sat26Dp9g = new $hs.Thunk();
                hs_sat26Dp9g.evaluateOnce = function () {
                    var hs_sat26Dp9e = $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26DoXm);
                    return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_sat26Dp9e);
                };
                return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1RetryMayBlock.hscall(hs_sat26Dp9g, hs_loc26DoXr, hs_eta26DoXs, hs_sat26Dp9f);
            };
            var hs_sat26Dp9i = new $hs.Thunk();
            hs_sat26Dp9i.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall(hs_zddIntegral26DoXm, hs_zddNum26DoXn);
            };
            return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.GHCziBase.hs_zdfFunctorIO, hs_sat26Dp9i, hs_sat26Dp9h);
        };
        var hs_unsafezuwrite26DoXO = new $hs.Thunk();
        hs_unsafezuwrite26DoXO.evaluateOnce = function () {
            var hs_sat26Dp9n = new $hs.Thunk();
            hs_sat26Dp9n.evaluateOnce = function () {
                var hs_sat26Dp9k = new $hs.Thunk();
                hs_sat26Dp9k.evaluateOnce = function () {
                    return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_buf26DoXJ, hs_off26DoXK);
                };
                var hs_sat26Dp9m = new $hs.Thunk();
                hs_sat26Dp9m.evaluateOnce = function () {
                    var hs_wild26Dp9j = hs_fd126DoXt;
                    if (hs_fd126DoXt.notEvaluated) {
                        hs_wild26Dp9j = hs_fd126DoXt.hscall();
                    }
                    var hs_rb26DoXH = hs_wild26Dp9j.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb26DoXH];
                    return $res;
                };
                return $hs.modules.SystemziPosixziInternals.hs_czuwrite.hscall(hs_sat26Dp9m, hs_sat26Dp9k, hs_len26DoXM);
            };
            return hs_dozuwrite26DoXC.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, $hs.modules.SystemziPosixziTypes.hs_zdfIntegralCSsizze, hs_sat26Dp9n);
        };
        var hs_write26DoY4 = new $hs.Thunk();
        hs_write26DoY4.evaluateOnce = function () {
            var hs_wild26Dp9q = [$hs.modules.GHCziPrim.hs_realWorldzh, rtsSupportsBoundThreads()];
            var hs_ds126DoXV = hs_wild26Dp9q[1];
            var hs_wild126Dp9o = hs_ds126DoXV;
            if (hs_ds126DoXV.notEvaluated) {
                hs_wild126Dp9o = hs_ds126DoXV.hscall();
            }
            switch (hs_wild126Dp9o) {
            case 0:
                if (hs_unsafezuwrite26DoXO.notEvaluated) {
                    return hs_unsafezuwrite26DoXO.hscall();
                } else {
                    return hs_unsafezuwrite26DoXO;
                }
            default:
                var hs_sat26Dp9v = new $hs.Thunk();
                hs_sat26Dp9v.evaluateOnce = function () {
                    var hs_sat26Dp9s = new $hs.Thunk();
                    hs_sat26Dp9s.evaluateOnce = function () {
                        return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_buf26DoXJ, hs_off26DoXK);
                    };
                    var hs_sat26Dp9u = new $hs.Thunk();
                    hs_sat26Dp9u.evaluateOnce = function () {
                        var hs_wild226Dp9r = hs_fd126DoXt;
                        if (hs_fd126DoXt.notEvaluated) {
                            hs_wild226Dp9r = hs_fd126DoXt.hscall();
                        }
                        var hs_rb26DoY0 = hs_wild226Dp9r.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb26DoY0];
                        return $res;
                    };
                    return $hs.modules.SystemziPosixziInternals.hs_czusafezuwrite.hscall(hs_sat26Dp9u, hs_sat26Dp9s, hs_len26DoXM);
                };
                return hs_dozuwrite26DoXC.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, $hs.modules.SystemziPosixziTypes.hs_zdfIntegralCSsizze, hs_sat26Dp9v);
            }
        };
        var hs_sat26Dp9y = new $hs.Data(1);
        hs_sat26Dp9y.data = [0];
        var hs_sat26Dp9A = new $hs.Thunk();
        hs_sat26Dp9A.evaluateOnce = function () {
            var hs_wild26Dp9x = hs_fd126DoXt;
            if (hs_fd126DoXt.notEvaluated) {
                hs_wild26Dp9x = hs_fd126DoXt.hscall();
            }
            var hs_rb126DoY8 = hs_wild26Dp9x.data[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_rb126DoY8];
            return $res;
        };
        var hs_wild26Dp9z = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_sat26Dp9A, hs_sat26Dp9y);
        switch (hs_wild26Dp9z.tag) {
        case 1:
            var hs_sat26Dp9K = new $hs.Func(1);
            hs_sat26Dp9K.evaluate = function (hs_r26DoYF) {
                var hs_sat26Dp9E = new $hs.Thunk();
                hs_sat26Dp9E.evaluateOnce = function () {
                    var hs_sat26Dp9B = new $hs.Thunk();
                    hs_sat26Dp9B.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26Dp9B);
                };
                var hs_wild126Dp9D = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_r26DoYF, hs_sat26Dp9E);
                switch (hs_wild126Dp9D.tag) {
                case 1:
                    var hs_sat26Dp9I = new $hs.Thunk();
                    hs_sat26Dp9I.evaluateOnce = function () {
                        var hs_sat26Dp9H = new $hs.Thunk();
                        hs_sat26Dp9H.evaluateOnce = function () {
                            var hs_sat26Dp9G = new $hs.Thunk();
                            hs_sat26Dp9G.evaluateOnce = function () {
                                var hs_wild226Dp9C = hs_fd126DoXt;
                                if (hs_fd126DoXt.notEvaluated) {
                                    hs_wild226Dp9C = hs_fd126DoXt.hscall();
                                }
                                var hs_rb26DoYM = hs_wild226Dp9C.data[0];
                                var $res = new $hs.Data(1);
                                $res.data = [hs_rb26DoYM];
                                return $res;
                            };
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.SystemziPosixziTypes.hs_zdfNumFd, hs_sat26Dp9G);
                        };
                        return $hs.modules.GHCziConcziIO.hs_threadWaitWrite.hscall(hs_sat26Dp9H);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dp9I, hs_write26DoY4);
                case 2:
                    if (hs_write26DoY4.notEvaluated) {
                        return hs_write26DoY4.hscall();
                    } else {
                        return hs_write26DoY4;
                    }
                }
            };
            var hs_sat26Dp9V = new $hs.Thunk();
            hs_sat26Dp9V.evaluateOnce = function () {
                var hs_wild126Dp9J = hs_fd126DoXt;
                if (hs_fd126DoXt.notEvaluated) {
                    hs_wild126Dp9J = hs_fd126DoXt.hscall();
                }
                var hs_rb26DoYq = hs_wild126Dp9J.data[0];
                var hs_sat26Dp9N = new $hs.Thunk();
                hs_sat26Dp9N.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                var hs_ds26Dp9M = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26Dp9N);
                var hs_ds126DoYr = hs_ds26Dp9M.data[0];
                var hs_sat26Dp9P = new $hs.Thunk();
                hs_sat26Dp9P.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                var hs_ds226Dp9O = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26Dp9P);
                var hs_ds326DoYs = hs_ds226Dp9O.data[0];
                var hs_sat26Dp9S = new $hs.Thunk();
                hs_sat26Dp9S.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                var hs_ds426Dp9R = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26Dp9S);
                var hs_ds526DoYt = hs_ds426Dp9R.data[0];
                var hs_sat26Dp9U = new $hs.Func(1);
                hs_sat26Dp9U.evaluate = function (hs_ds626DoYu) {
                    var hs_wild226Dp9Q = [hs_ds626DoYu, fdReady(hs_rb26DoYq, hs_ds126DoYr, hs_ds326DoYs, hs_ds526DoYt)];
                    var hs_ds726DoYz = hs_wild226Dp9Q[0];
                    var hs_ds826DoYA = hs_wild226Dp9Q[1];
                    var hs_sat26Dp9T = new $hs.Data(1);
                    hs_sat26Dp9T.data = [hs_ds826DoYA];
                    return [hs_ds726DoYz, hs_sat26Dp9T];
                };
                if (hs_sat26Dp9U.notEvaluated) {
                    return hs_sat26Dp9U.hscall();
                } else {
                    return hs_sat26Dp9U;
                }
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dp9V, hs_sat26Dp9K);
        case 2:
            if (hs_unsafezuwrite26DoXO.notEvaluated) {
                return hs_unsafezuwrite26DoXO.hscall();
            } else {
                return hs_unsafezuwrite26DoXO;
            }
        }
    };
    hs_fdWrite25uuj6.evaluate = function (hs_fd26DoYV, hs_ptr26DoYW, hs_bytes26DoYY) {
        var hs_sat26Dp9Z = new $hs.Func(1);
        hs_sat26Dp9Z.evaluate = function (hs_res26DoZ3) {
            var hs_reszq26DoZ4 = new $hs.Thunk();
            hs_reszq26DoZ4.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.GHCziNum.hs_zdfNumInt, hs_res26DoZ3);
            };
            var hs_wild26Dp9W = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_reszq26DoZ4, hs_bytes26DoYY);
            switch (hs_wild26Dp9W.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            case 2:
                var hs_sat26Dp9X = new $hs.Thunk();
                hs_sat26Dp9X.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_bytes26DoYY, hs_reszq26DoZ4);
                };
                var hs_sat26Dp9Y = new $hs.Thunk();
                hs_sat26Dp9Y.evaluateOnce = function () {
                    return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DoYW, hs_reszq26DoZ4);
                };
                return hs_fdWrite25uuj6.hscall(hs_fd26DoYV, hs_sat26Dp9Y, hs_sat26Dp9X);
            }
        };
        var hs_sat26Dpa3 = new $hs.Thunk();
        hs_sat26Dpa3.evaluateOnce = function () {
            var hs_sat26Dpa0 = new $hs.Thunk();
            hs_sat26Dpa0.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_bytes26DoYY);
            };
            var hs_sat26Dpa1 = new $hs.Data(1);
            hs_sat26Dpa1.data = [0];
            var hs_sat26Dpa2 = new $hs.Thunk();
            hs_sat26Dpa2.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("GHC.IO.FD.fdWrite\x00");
            };
            return $hs.modules.GHCziIOziFD.hs_writeRawBufferPtr.hscall(hs_sat26Dpa2, hs_fd26DoYV, hs_ptr26DoYW, hs_sat26Dpa1, hs_sat26Dpa0);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dpa3, hs_sat26Dp9Z);
    };
    hs_throwErrnoIfMinus1RetryOnBlock25uujk.evaluate = function (hs_loc26DoZp, hs_f26DoZc, hs_onzublock26DoZq) {
        var hs_sat26Dpad = new $hs.Func(1);
        hs_sat26Dpad.evaluate = function (hs_res26DoZe) {
            var hs_sat26Dpa7 = new $hs.Thunk();
            hs_sat26Dpa7.evaluateOnce = function () {
                var hs_sat26Dpa5 = new $hs.Thunk();
                hs_sat26Dpa5.evaluateOnce = function () {
                    var hs_sat26Dpa4 = new $hs.Thunk();
                    hs_sat26Dpa4.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCSsizze, hs_sat26Dpa4);
                };
                return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCSsizze, hs_sat26Dpa5);
            };
            var hs_wild26Dpa6 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.SystemziPosixziTypes.hs_zdfEqCSsizze, hs_res26DoZe, hs_sat26Dpa7);
            switch (hs_wild26Dpa6.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_res26DoZe);
            case 2:
                var hs_sat26Dpac = new $hs.Func(1);
                hs_sat26Dpac.evaluate = function (hs_err26DoZk) {
                    var hs_wild126Dpa8 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_err26DoZk, $hs.modules.ForeignziCziError.hs_eINTR);
                    switch (hs_wild126Dpa8.tag) {
                    case 1:
                        var hs_sat26Dpa9 = new $hs.Thunk();
                        hs_sat26Dpa9.evaluateOnce = function () {
                            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_err26DoZk, $hs.modules.ForeignziCziError.hs_eAGAIN);
                        };
                        var hs_sat26Dpab = new $hs.Thunk();
                        hs_sat26Dpab.evaluateOnce = function () {
                            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_err26DoZk, $hs.modules.ForeignziCziError.hs_eWOULDBLOCK);
                        };
                        var hs_wild226Dpaa = $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26Dpab, hs_sat26Dpa9);
                        switch (hs_wild226Dpaa.tag) {
                        case 1:
                            return $hs.modules.ForeignziCziError.hs_throwErrno.hscall(hs_loc26DoZp);
                        case 2:
                            if (hs_onzublock26DoZq.notEvaluated) {
                                return hs_onzublock26DoZq.hscall();
                            } else {
                                return hs_onzublock26DoZq;
                            }
                        }
                    case 2:
                        return hs_throwErrnoIfMinus1RetryOnBlock25uujk.hscall(hs_loc26DoZp, hs_f26DoZc, hs_onzublock26DoZq);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.ForeignziCziError.hs_getErrno, hs_sat26Dpac);
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_f26DoZc, hs_sat26Dpad);
    };
    this.hs_readRawBufferPtrNoBlock.evaluate = function (hs_loc26DoZF, hs_fd26DoZy, hs_buf26Dp0b, hs_off26Dp0c, hs_len26Dp0e) {
        var hs_fd126Dp05 = hs_fd26DoZy;
        if (hs_fd26DoZy.notEvaluated) {
            hs_fd126Dp05 = hs_fd26DoZy.hscall();
        }
        var hs_dozuread26Dp03 = new $hs.Func(2);
        hs_dozuread26Dp03.evaluate = function (hs_zddNum26DoZV, hs_call26DoZG) {
            var hs_sat26Dpat = new $hs.Func(1);
            hs_sat26Dpat.evaluate = function (hs_r26DoZN) {
                var hs_sat26Dpaj = new $hs.Thunk();
                hs_sat26Dpaj.evaluateOnce = function () {
                    var hs_sat26Dpah = new $hs.Thunk();
                    hs_sat26Dpah.evaluateOnce = function () {
                        var hs_sat26Dpag = new $hs.Thunk();
                        hs_sat26Dpag.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCSsizze, hs_sat26Dpag);
                    };
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCSsizze, hs_sat26Dpah);
                };
                var hs_wild26Dpai = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.SystemziPosixziTypes.hs_zdfEqCSsizze, hs_r26DoZN, hs_sat26Dpaj);
                switch (hs_wild26Dpai.tag) {
                case 1:
                    var hs_sat26Dpam = new $hs.Thunk();
                    hs_sat26Dpam.evaluateOnce = function () {
                        var hs_sat26Dpak = new $hs.Thunk();
                        hs_sat26Dpak.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCSsizze, hs_sat26Dpak);
                    };
                    var hs_wild126Dpal = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.SystemziPosixziTypes.hs_zdfEqCSsizze, hs_r26DoZN, hs_sat26Dpam);
                    switch (hs_wild126Dpal.tag) {
                    case 1:
                        var hs_sat26Dpan = new $hs.Thunk();
                        hs_sat26Dpan.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralCSsizze, hs_zddNum26DoZV, hs_r26DoZN);
                        };
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dpan);
                    case 2:
                        var hs_sat26Dpaq = new $hs.Thunk();
                        hs_sat26Dpaq.evaluateOnce = function () {
                            var hs_sat26Dpap = new $hs.Thunk();
                            hs_sat26Dpap.evaluateOnce = function () {
                                var hs_sat26Dpao = new $hs.Thunk();
                                hs_sat26Dpao.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                };
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DoZV, hs_sat26Dpao);
                            };
                            return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum26DoZV, hs_sat26Dpap);
                        };
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dpaq);
                    }
                case 2:
                    var hs_sat26Dpas = new $hs.Thunk();
                    hs_sat26Dpas.evaluateOnce = function () {
                        var hs_sat26Dpar = new $hs.Thunk();
                        hs_sat26Dpar.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DoZV, hs_sat26Dpar);
                    };
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dpas);
                }
            };
            var hs_sat26Dpay = new $hs.Thunk();
            hs_sat26Dpay.evaluateOnce = function () {
                var hs_sat26Dpax = new $hs.Thunk();
                hs_sat26Dpax.evaluateOnce = function () {
                    var hs_sat26Dpaw = new $hs.Thunk();
                    hs_sat26Dpaw.evaluateOnce = function () {
                        var hs_sat26Dpav = new $hs.Thunk();
                        hs_sat26Dpav.evaluateOnce = function () {
                            var hs_sat26Dpau = new $hs.Thunk();
                            hs_sat26Dpau.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCSsizze, hs_sat26Dpau);
                        };
                        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCSsizze, hs_sat26Dpav);
                    };
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dpaw);
                };
                return hs_throwErrnoIfMinus1RetryOnBlock25uujk.hscall(hs_loc26DoZF, hs_call26DoZG, hs_sat26Dpax);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dpay, hs_sat26Dpat);
        };
        var hs_safezuread26Dp0g = new $hs.Thunk();
        hs_safezuread26Dp0g.evaluateOnce = function () {
            var hs_sat26DpaD = new $hs.Thunk();
            hs_sat26DpaD.evaluateOnce = function () {
                var hs_sat26DpaA = new $hs.Thunk();
                hs_sat26DpaA.evaluateOnce = function () {
                    return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_buf26Dp0b, hs_off26Dp0c);
                };
                var hs_sat26DpaC = new $hs.Thunk();
                hs_sat26DpaC.evaluateOnce = function () {
                    var hs_wild26Dpaz = hs_fd126Dp05;
                    if (hs_fd126Dp05.notEvaluated) {
                        hs_wild26Dpaz = hs_fd126Dp05.hscall();
                    }
                    var hs_rb26Dp09 = hs_wild26Dpaz.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb26Dp09];
                    return $res;
                };
                return $hs.modules.SystemziPosixziInternals.hs_czusafezuread.hscall(hs_sat26DpaC, hs_sat26DpaA, hs_len26Dp0e);
            };
            return hs_dozuread26Dp03.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DpaD);
        };
        var hs_sat26DpaG = new $hs.Data(1);
        hs_sat26DpaG.data = [0];
        var hs_sat26DpaI = new $hs.Thunk();
        hs_sat26DpaI.evaluateOnce = function () {
            var hs_wild26DpaF = hs_fd126Dp05;
            if (hs_fd126Dp05.notEvaluated) {
                hs_wild26DpaF = hs_fd126Dp05.hscall();
            }
            var hs_rb126Dp0k = hs_wild26DpaF.data[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_rb126Dp0k];
            return $res;
        };
        var hs_wild26DpaH = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_sat26DpaI, hs_sat26DpaG);
        switch (hs_wild26DpaH.tag) {
        case 1:
            var hs_sat26DpaO = new $hs.Func(1);
            hs_sat26DpaO.evaluate = function (hs_r26Dp0R) {
                var hs_sat26DpaL = new $hs.Thunk();
                hs_sat26DpaL.evaluateOnce = function () {
                    var hs_sat26DpaJ = new $hs.Thunk();
                    hs_sat26DpaJ.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DpaJ);
                };
                var hs_wild126DpaK = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_r26Dp0R, hs_sat26DpaL);
                switch (hs_wild126DpaK.tag) {
                case 1:
                    var hs_sat26DpaM = new $hs.Data(1);
                    hs_sat26DpaM.data = [0];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DpaM);
                case 2:
                    if (hs_safezuread26Dp0g.notEvaluated) {
                        return hs_safezuread26Dp0g.hscall();
                    } else {
                        return hs_safezuread26Dp0g;
                    }
                }
            };
            var hs_sat26DpaZ = new $hs.Thunk();
            hs_sat26DpaZ.evaluateOnce = function () {
                var hs_wild126DpaN = hs_fd126Dp05;
                if (hs_fd126Dp05.notEvaluated) {
                    hs_wild126DpaN = hs_fd126Dp05.hscall();
                }
                var hs_rb26Dp0C = hs_wild126DpaN.data[0];
                var hs_sat26DpaR = new $hs.Thunk();
                hs_sat26DpaR.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                var hs_ds26DpaQ = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DpaR);
                var hs_ds126Dp0D = hs_ds26DpaQ.data[0];
                var hs_sat26DpaT = new $hs.Thunk();
                hs_sat26DpaT.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                var hs_ds226DpaS = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DpaT);
                var hs_ds326Dp0E = hs_ds226DpaS.data[0];
                var hs_sat26DpaW = new $hs.Thunk();
                hs_sat26DpaW.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                var hs_ds426DpaV = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DpaW);
                var hs_ds526Dp0F = hs_ds426DpaV.data[0];
                var hs_sat26DpaY = new $hs.Func(1);
                hs_sat26DpaY.evaluate = function (hs_ds626Dp0G) {
                    var hs_wild226DpaU = [hs_ds626Dp0G, fdReady(hs_rb26Dp0C, hs_ds126Dp0D, hs_ds326Dp0E, hs_ds526Dp0F)];
                    var hs_ds726Dp0L = hs_wild226DpaU[0];
                    var hs_ds826Dp0M = hs_wild226DpaU[1];
                    var hs_sat26DpaX = new $hs.Data(1);
                    hs_sat26DpaX.data = [hs_ds826Dp0M];
                    return [hs_ds726Dp0L, hs_sat26DpaX];
                };
                if (hs_sat26DpaY.notEvaluated) {
                    return hs_sat26DpaY.hscall();
                } else {
                    return hs_sat26DpaY;
                }
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DpaZ, hs_sat26DpaO);
        case 2:
            var hs_sat26Dpb4 = new $hs.Thunk();
            hs_sat26Dpb4.evaluateOnce = function () {
                var hs_sat26Dpb1 = new $hs.Thunk();
                hs_sat26Dpb1.evaluateOnce = function () {
                    return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_buf26Dp0b, hs_off26Dp0c);
                };
                var hs_sat26Dpb3 = new $hs.Thunk();
                hs_sat26Dpb3.evaluateOnce = function () {
                    var hs_wild126Dpb0 = hs_fd126Dp05;
                    if (hs_fd126Dp05.notEvaluated) {
                        hs_wild126Dpb0 = hs_fd126Dp05.hscall();
                    }
                    var hs_rb26Dp10 = hs_wild126Dpb0.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb26Dp10];
                    return $res;
                };
                return $hs.modules.SystemziPosixziInternals.hs_czuread.hscall(hs_sat26Dpb3, hs_sat26Dpb1, hs_len26Dp0e);
            };
            return hs_dozuread26Dp03.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dpb4);
        }
    };
    hs_zdcreadNonBlocking25v0uP.evaluate = function (hs_fd26Dp1a, hs_ptr26Dp1b, hs_bytes26Dp1d) {
        var hs_sat26Dpb7 = new $hs.Func(1);
        hs_sat26Dpb7.evaluate = function (hs_r26Dp1h) {
            var hs_wild26Dp1m = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziNum.hs_zdfNumInt, hs_r26Dp1h);
            var hs_ds26Dp1k = hs_wild26Dp1m.data[0];
            var hs_ds126Dpb5 = hs_ds26Dp1k;
            if (hs_ds26Dp1k.notEvaluated) {
                hs_ds126Dpb5 = hs_ds26Dp1k.hscall();
            }
            switch (hs_ds126Dpb5) {
            case -1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.DataziMaybe.hs_Nothing);
            default:
                var hs_sat26Dpb6 = new $hs.Data(2);
                hs_sat26Dpb6.data = [hs_wild26Dp1m];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dpb6);
            }
        };
        var hs_sat26Dpbb = new $hs.Thunk();
        hs_sat26Dpbb.evaluateOnce = function () {
            var hs_sat26Dpb8 = new $hs.Thunk();
            hs_sat26Dpb8.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_bytes26Dp1d);
            };
            var hs_sat26Dpb9 = new $hs.Data(1);
            hs_sat26Dpb9.data = [0];
            var hs_sat26Dpba = new $hs.Thunk();
            hs_sat26Dpba.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("GHC.IO.FD.fdReadNonBlocking\x00");
            };
            return $hs.modules.GHCziIOziFD.hs_readRawBufferPtrNoBlock.hscall(hs_sat26Dpba, hs_fd26Dp1a, hs_ptr26Dp1b, hs_sat26Dpb9, hs_sat26Dpb8);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dpbb, hs_sat26Dpb7);
    };
    hs_zdcwriteNonBlocking25v0va.evaluate = function (hs_fd26Dp1B, hs_ptr26Dp27, hs_bytes26Dp1z) {
        var hs_sat26Dpbd = new $hs.Func(1);
        hs_sat26Dpbd.evaluate = function (hs_res26Dp3a) {
            var hs_sat26Dpbc = new $hs.Thunk();
            hs_sat26Dpbc.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.GHCziNum.hs_zdfNumInt, hs_res26Dp3a);
            };
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dpbc);
        };
        var hs_sat26Dpc3 = new $hs.Thunk();
        hs_sat26Dpc3.evaluateOnce = function () {
            var hs_loc26Dp1v = new $hs.Thunk();
            hs_loc26Dp1v.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("GHC.IO.FD.fdWriteNonBlocking\x00");
            };
            var hs_off26Dp1x = new $hs.Data(1);
            hs_off26Dp1x.data = [0];
            var hs_len26Dp1A = new $hs.Thunk();
            hs_len26Dp1A.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_bytes26Dp1z);
            };
            var hs_fd126Dp21 = hs_fd26Dp1B;
            if (hs_fd26Dp1B.notEvaluated) {
                hs_fd126Dp21 = hs_fd26Dp1B.hscall();
            }
            var hs_dozuwrite26Dp1Z = new $hs.Func(2);
            hs_dozuwrite26Dp1Z.evaluate = function (hs_zddNum26Dp1U, hs_call26Dp1I) {
                var hs_sat26Dpbn = new $hs.Func(1);
                hs_sat26Dpbn.evaluate = function (hs_r26Dp1P) {
                    var hs_sat26Dpbj = new $hs.Thunk();
                    hs_sat26Dpbj.evaluateOnce = function () {
                        var hs_sat26Dpbh = new $hs.Thunk();
                        hs_sat26Dpbh.evaluateOnce = function () {
                            var hs_sat26Dpbg = new $hs.Thunk();
                            hs_sat26Dpbg.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCSsizze, hs_sat26Dpbg);
                        };
                        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCSsizze, hs_sat26Dpbh);
                    };
                    var hs_wild26Dpbi = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.SystemziPosixziTypes.hs_zdfEqCSsizze, hs_r26Dp1P, hs_sat26Dpbj);
                    switch (hs_wild26Dpbi.tag) {
                    case 1:
                        var hs_sat26Dpbk = new $hs.Thunk();
                        hs_sat26Dpbk.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralCSsizze, hs_zddNum26Dp1U, hs_r26Dp1P);
                        };
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dpbk);
                    case 2:
                        var hs_sat26Dpbm = new $hs.Thunk();
                        hs_sat26Dpbm.evaluateOnce = function () {
                            var hs_sat26Dpbl = new $hs.Thunk();
                            hs_sat26Dpbl.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26Dp1U, hs_sat26Dpbl);
                        };
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dpbm);
                    }
                };
                var hs_sat26Dpbs = new $hs.Thunk();
                hs_sat26Dpbs.evaluateOnce = function () {
                    var hs_sat26Dpbr = new $hs.Thunk();
                    hs_sat26Dpbr.evaluateOnce = function () {
                        var hs_sat26Dpbq = new $hs.Thunk();
                        hs_sat26Dpbq.evaluateOnce = function () {
                            var hs_sat26Dpbp = new $hs.Thunk();
                            hs_sat26Dpbp.evaluateOnce = function () {
                                var hs_sat26Dpbo = new $hs.Thunk();
                                hs_sat26Dpbo.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                };
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCSsizze, hs_sat26Dpbo);
                            };
                            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCSsizze, hs_sat26Dpbp);
                        };
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dpbq);
                    };
                    return hs_throwErrnoIfMinus1RetryOnBlock25uujk.hscall(hs_loc26Dp1v, hs_call26Dp1I, hs_sat26Dpbr);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dpbs, hs_sat26Dpbn);
            };
            var hs_unsafezuwrite26Dp2a = new $hs.Thunk();
            hs_unsafezuwrite26Dp2a.evaluateOnce = function () {
                var hs_sat26Dpbx = new $hs.Thunk();
                hs_sat26Dpbx.evaluateOnce = function () {
                    var hs_sat26Dpbu = new $hs.Thunk();
                    hs_sat26Dpbu.evaluateOnce = function () {
                        return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26Dp27, hs_off26Dp1x);
                    };
                    var hs_sat26Dpbw = new $hs.Thunk();
                    hs_sat26Dpbw.evaluateOnce = function () {
                        var hs_wild26Dpbt = hs_fd126Dp21;
                        if (hs_fd126Dp21.notEvaluated) {
                            hs_wild26Dpbt = hs_fd126Dp21.hscall();
                        }
                        var hs_rb26Dp25 = hs_wild26Dpbt.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb26Dp25];
                        return $res;
                    };
                    return $hs.modules.SystemziPosixziInternals.hs_czuwrite.hscall(hs_sat26Dpbw, hs_sat26Dpbu, hs_len26Dp1A);
                };
                return hs_dozuwrite26Dp1Z.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26Dpbx);
            };
            var hs_write26Dp2q = new $hs.Thunk();
            hs_write26Dp2q.evaluateOnce = function () {
                var hs_wild26DpbA = [$hs.modules.GHCziPrim.hs_realWorldzh, rtsSupportsBoundThreads()];
                var hs_ds126Dp2h = hs_wild26DpbA[1];
                var hs_wild126Dpby = hs_ds126Dp2h;
                if (hs_ds126Dp2h.notEvaluated) {
                    hs_wild126Dpby = hs_ds126Dp2h.hscall();
                }
                switch (hs_wild126Dpby) {
                case 0:
                    if (hs_unsafezuwrite26Dp2a.notEvaluated) {
                        return hs_unsafezuwrite26Dp2a.hscall();
                    } else {
                        return hs_unsafezuwrite26Dp2a;
                    }
                default:
                    var hs_sat26DpbF = new $hs.Thunk();
                    hs_sat26DpbF.evaluateOnce = function () {
                        var hs_sat26DpbC = new $hs.Thunk();
                        hs_sat26DpbC.evaluateOnce = function () {
                            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26Dp27, hs_off26Dp1x);
                        };
                        var hs_sat26DpbE = new $hs.Thunk();
                        hs_sat26DpbE.evaluateOnce = function () {
                            var hs_wild226DpbB = hs_fd126Dp21;
                            if (hs_fd126Dp21.notEvaluated) {
                                hs_wild226DpbB = hs_fd126Dp21.hscall();
                            }
                            var hs_rb26Dp2m = hs_wild226DpbB.data[0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb26Dp2m];
                            return $res;
                        };
                        return $hs.modules.SystemziPosixziInternals.hs_czusafezuwrite.hscall(hs_sat26DpbE, hs_sat26DpbC, hs_len26Dp1A);
                    };
                    return hs_dozuwrite26Dp1Z.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DpbF);
                }
            };
            var hs_sat26DpbI = new $hs.Data(1);
            hs_sat26DpbI.data = [0];
            var hs_sat26DpbK = new $hs.Thunk();
            hs_sat26DpbK.evaluateOnce = function () {
                var hs_wild26DpbH = hs_fd126Dp21;
                if (hs_fd126Dp21.notEvaluated) {
                    hs_wild26DpbH = hs_fd126Dp21.hscall();
                }
                var hs_rb126Dp2u = hs_wild26DpbH.data[1];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb126Dp2u];
                return $res;
            };
            var hs_wild26DpbJ = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_sat26DpbK, hs_sat26DpbI);
            switch (hs_wild26DpbJ.tag) {
            case 1:
                var hs_sat26DpbR = new $hs.Func(1);
                hs_sat26DpbR.evaluate = function (hs_r26Dp31) {
                    var hs_sat26DpbN = new $hs.Thunk();
                    hs_sat26DpbN.evaluateOnce = function () {
                        var hs_sat26DpbL = new $hs.Thunk();
                        hs_sat26DpbL.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DpbL);
                    };
                    var hs_wild126DpbM = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_r26Dp31, hs_sat26DpbN);
                    switch (hs_wild126DpbM.tag) {
                    case 1:
                        var hs_sat26DpbP = new $hs.Thunk();
                        hs_sat26DpbP.evaluateOnce = function () {
                            var hs_sat26DpbO = new $hs.Thunk();
                            hs_sat26DpbO.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DpbO);
                        };
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DpbP);
                    case 2:
                        if (hs_write26Dp2q.notEvaluated) {
                            return hs_write26Dp2q.hscall();
                        } else {
                            return hs_write26Dp2q;
                        }
                    }
                };
                var hs_sat26Dpc2 = new $hs.Thunk();
                hs_sat26Dpc2.evaluateOnce = function () {
                    var hs_wild126DpbQ = hs_fd126Dp21;
                    if (hs_fd126Dp21.notEvaluated) {
                        hs_wild126DpbQ = hs_fd126Dp21.hscall();
                    }
                    var hs_rb26Dp2M = hs_wild126DpbQ.data[0];
                    var hs_sat26DpbU = new $hs.Thunk();
                    hs_sat26DpbU.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    var hs_ds26DpbT = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DpbU);
                    var hs_ds126Dp2N = hs_ds26DpbT.data[0];
                    var hs_sat26DpbW = new $hs.Thunk();
                    hs_sat26DpbW.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    var hs_ds226DpbV = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DpbW);
                    var hs_ds326Dp2O = hs_ds226DpbV.data[0];
                    var hs_sat26DpbZ = new $hs.Thunk();
                    hs_sat26DpbZ.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    var hs_ds426DpbY = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DpbZ);
                    var hs_ds526Dp2P = hs_ds426DpbY.data[0];
                    var hs_sat26Dpc1 = new $hs.Func(1);
                    hs_sat26Dpc1.evaluate = function (hs_ds626Dp2Q) {
                        var hs_wild226DpbX = [hs_ds626Dp2Q, fdReady(hs_rb26Dp2M, hs_ds126Dp2N, hs_ds326Dp2O, hs_ds526Dp2P)];
                        var hs_ds726Dp2V = hs_wild226DpbX[0];
                        var hs_ds826Dp2W = hs_wild226DpbX[1];
                        var hs_sat26Dpc0 = new $hs.Data(1);
                        hs_sat26Dpc0.data = [hs_ds826Dp2W];
                        return [hs_ds726Dp2V, hs_sat26Dpc0];
                    };
                    if (hs_sat26Dpc1.notEvaluated) {
                        return hs_sat26Dpc1.hscall();
                    } else {
                        return hs_sat26Dpc1;
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dpc2, hs_sat26DpbR);
            case 2:
                if (hs_unsafezuwrite26Dp2a.notEvaluated) {
                    return hs_unsafezuwrite26Dp2a.hscall();
                } else {
                    return hs_unsafezuwrite26Dp2a;
                }
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dpc3, hs_sat26Dpbd);
    };
    this.hs_zdfRawIOFD.data = [hs_zdcread25v0qE, hs_zdcreadNonBlocking25v0uP, hs_fdWrite25uuj6, hs_zdcwriteNonBlocking25v0va];
    hs_zdcfillReadBuffer025v0wY.evaluate = function (hs_fd26Dp3h, hs_buf26Dp3i) {
        return $hs.modules.GHCziIOziBufferedIO.hs_readBufNonBlocking.hscall($hs.modules.GHCziIOziFD.hs_zdfRawIOFD, hs_fd26Dp3h, hs_buf26Dp3i);
    };
    hs_zdcflushWriteBuffer025v0x4.evaluate = function (hs_fd26Dp3n, hs_buf26Dp3o) {
        return $hs.modules.GHCziIOziBufferedIO.hs_writeBufNonBlocking.hscall($hs.modules.GHCziIOziFD.hs_zdfRawIOFD, hs_fd26Dp3n, hs_buf26Dp3o);
    };
    hs_puts25uujm.evaluate = function (hs_s26Dp3q) {
        var hs_sat26Dpc6 = new $hs.Func(1);
        hs_sat26Dpc6.evaluate = function (hs_ds26Dpc4) {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        };
        var hs_sat26Dpcd = new $hs.Thunk();
        hs_sat26Dpcd.evaluateOnce = function () {
            var hs_sat26Dpcb = new $hs.Func(1);
            hs_sat26Dpcb.evaluate = function (hs_ds26Dp3t) {
                var hs_wild26Dpc5 = hs_ds26Dp3t;
                if (hs_ds26Dp3t.notEvaluated) {
                    hs_wild26Dpc5 = hs_ds26Dp3t.hscall();
                }
                var hs_p26Dp3z = hs_wild26Dpc5.data[0];
                var hs_len26Dp3B = hs_wild26Dpc5.data[1];
                var hs_sat26Dpc7 = new $hs.Thunk();
                hs_sat26Dpc7.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_len26Dp3B);
                };
                var hs_sat26Dpc8 = new $hs.Thunk();
                hs_sat26Dpc8.evaluateOnce = function () {
                    return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_p26Dp3z);
                };
                var hs_sat26Dpca = new $hs.Thunk();
                hs_sat26Dpca.evaluateOnce = function () {
                    var hs_sat26Dpc9 = new $hs.Thunk();
                    hs_sat26Dpc9.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26Dpc9);
                };
                return $hs.modules.SystemziPosixziInternals.hs_czuwrite.hscall(hs_sat26Dpca, hs_sat26Dpc8, hs_sat26Dpc7);
            };
            var hs_sat26Dpcc = new $hs.Thunk();
            hs_sat26Dpcc.evaluateOnce = function () {
                return $hs.modules.ForeignziCziString.hs_withCStringLen.hscall(hs_s26Dp3q);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dpcc, hs_sat26Dpcb);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dpcd, hs_sat26Dpc6);
    };
    hs_zdcfillReadBuffer25v0xs.evaluate = function (hs_fd26Dp3N, hs_buf26Dp3R) {
        var hs_sat26Dpcs = new $hs.Thunk();
        hs_sat26Dpcs.evaluateOnce = function () {
            var hs_sat26Dpcq = new $hs.Func(1);
            hs_sat26Dpcq.evaluate = function (hs_ds26Dp43) {
                var hs_wild26Dpce = hs_ds26Dp43;
                if (hs_ds26Dp43.notEvaluated) {
                    hs_wild26Dpce = hs_ds26Dp43.hscall();
                }
                var hs_r26Dp4h = hs_wild26Dpce.data[0];
                var hs_bufzq26Dp49 = hs_wild26Dpce.data[1];
                var hs_sat26Dpcg = new $hs.Thunk();
                hs_sat26Dpcg.evaluateOnce = function () {
                    var hs_sat26Dpcf = new $hs.Data(1);
                    hs_sat26Dpcf.data = [hs_r26Dp4h, hs_bufzq26Dp49];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dpcf);
                };
                var hs_sat26Dpcp = new $hs.Thunk();
                hs_sat26Dpcp.evaluateOnce = function () {
                    var hs_sat26Dpcn = new $hs.Thunk();
                    hs_sat26Dpcn.evaluateOnce = function () {
                        var hs_sat26Dpcm = new $hs.Thunk();
                        hs_sat26Dpcm.evaluateOnce = function () {
                            var hs_sat26Dpck = new $hs.Thunk();
                            hs_sat26Dpck.evaluateOnce = function () {
                                var hs_sat26Dpch = new $hs.Data(1);
                                hs_sat26Dpch.data = ["\n"];
                                var hs_sat26Dpci = new $hs.Data(2);
                                hs_sat26Dpci.data = [hs_sat26Dpch, $hs.modules.GHCziTypes.hs_ZMZN];
                                var hs_sat26Dpcj = new $hs.Thunk();
                                hs_sat26Dpcj.evaluateOnce = function () {
                                    return $hs.modules.GHCziIOziBuffer.hs_summaryBuffer.hscall(hs_bufzq26Dp49);
                                };
                                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Dpcj, hs_sat26Dpci);
                            };
                            var hs_sat26Dpcl = new $hs.Thunk();
                            hs_sat26Dpcl.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("after: \x00");
                            };
                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Dpcl, hs_sat26Dpck);
                        };
                        return hs_puts25uujm.hscall(hs_sat26Dpcm);
                    };
                    var hs_sat26Dpco = new $hs.Thunk();
                    hs_sat26Dpco.evaluateOnce = function () {
                        return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziBool.hs_False);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dpco, hs_sat26Dpcn);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dpcp, hs_sat26Dpcg);
            };
            var hs_sat26Dpcr = new $hs.Thunk();
            hs_sat26Dpcr.evaluateOnce = function () {
                return $hs.modules.GHCziIOziBufferedIO.hs_readBuf.hscall($hs.modules.GHCziIOziFD.hs_zdfRawIOFD, hs_fd26Dp3N, hs_buf26Dp3R);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dpcr, hs_sat26Dpcq);
        };
        var hs_sat26DpcG = new $hs.Thunk();
        hs_sat26DpcG.evaluateOnce = function () {
            var hs_sat26DpcE = new $hs.Thunk();
            hs_sat26DpcE.evaluateOnce = function () {
                var hs_sat26DpcD = new $hs.Thunk();
                hs_sat26DpcD.evaluateOnce = function () {
                    var hs_sat26DpcB = new $hs.Thunk();
                    hs_sat26DpcB.evaluateOnce = function () {
                        var hs_sat26Dpcz = new $hs.Thunk();
                        hs_sat26Dpcz.evaluateOnce = function () {
                            var hs_sat26Dpcw = new $hs.Thunk();
                            hs_sat26Dpcw.evaluateOnce = function () {
                                var hs_sat26Dpct = new $hs.Data(1);
                                hs_sat26Dpct.data = ["\n"];
                                var hs_sat26Dpcu = new $hs.Data(2);
                                hs_sat26Dpcu.data = [hs_sat26Dpct, $hs.modules.GHCziTypes.hs_ZMZN];
                                var hs_sat26Dpcv = new $hs.Thunk();
                                hs_sat26Dpcv.evaluateOnce = function () {
                                    return $hs.modules.GHCziIOziBuffer.hs_summaryBuffer.hscall(hs_buf26Dp3R);
                                };
                                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Dpcv, hs_sat26Dpcu);
                            };
                            var hs_sat26Dpcx = new $hs.Data(1);
                            hs_sat26Dpcx.data = [" "];
                            var hs_sat26Dpcy = new $hs.Data(2);
                            hs_sat26Dpcy.data = [hs_sat26Dpcx, $hs.modules.GHCziTypes.hs_ZMZN];
                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Dpcy, hs_sat26Dpcw);
                        };
                        var hs_sat26DpcA = new $hs.Thunk();
                        hs_sat26DpcA.evaluateOnce = function () {
                            return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziIOziFD.hs_zdfShowFD, hs_fd26Dp3N);
                        };
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DpcA, hs_sat26Dpcz);
                    };
                    var hs_sat26DpcC = new $hs.Thunk();
                    hs_sat26DpcC.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("readBuf fd=\x00");
                    };
                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DpcC, hs_sat26DpcB);
                };
                return hs_puts25uujm.hscall(hs_sat26DpcD);
            };
            var hs_sat26DpcF = new $hs.Thunk();
            hs_sat26DpcF.evaluateOnce = function () {
                return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziBool.hs_False);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DpcF, hs_sat26DpcE);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DpcG, hs_sat26Dpcs);
    };
    hs_zdcflushWriteBuffer25v0y7.evaluate = function (hs_fd26Dp4s, hs_buf26Dp4w) {
        var hs_sat26DpcH = new $hs.Thunk();
        hs_sat26DpcH.evaluateOnce = function () {
            return $hs.modules.GHCziIOziBufferedIO.hs_writeBuf.hscall($hs.modules.GHCziIOziFD.hs_zdfRawIOFD, hs_fd26Dp4s, hs_buf26Dp4w);
        };
        var hs_sat26DpcV = new $hs.Thunk();
        hs_sat26DpcV.evaluateOnce = function () {
            var hs_sat26DpcT = new $hs.Thunk();
            hs_sat26DpcT.evaluateOnce = function () {
                var hs_sat26DpcS = new $hs.Thunk();
                hs_sat26DpcS.evaluateOnce = function () {
                    var hs_sat26DpcQ = new $hs.Thunk();
                    hs_sat26DpcQ.evaluateOnce = function () {
                        var hs_sat26DpcO = new $hs.Thunk();
                        hs_sat26DpcO.evaluateOnce = function () {
                            var hs_sat26DpcL = new $hs.Thunk();
                            hs_sat26DpcL.evaluateOnce = function () {
                                var hs_sat26DpcI = new $hs.Data(1);
                                hs_sat26DpcI.data = ["\n"];
                                var hs_sat26DpcJ = new $hs.Data(2);
                                hs_sat26DpcJ.data = [hs_sat26DpcI, $hs.modules.GHCziTypes.hs_ZMZN];
                                var hs_sat26DpcK = new $hs.Thunk();
                                hs_sat26DpcK.evaluateOnce = function () {
                                    return $hs.modules.GHCziIOziBuffer.hs_summaryBuffer.hscall(hs_buf26Dp4w);
                                };
                                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DpcK, hs_sat26DpcJ);
                            };
                            var hs_sat26DpcM = new $hs.Data(1);
                            hs_sat26DpcM.data = [" "];
                            var hs_sat26DpcN = new $hs.Data(2);
                            hs_sat26DpcN.data = [hs_sat26DpcM, $hs.modules.GHCziTypes.hs_ZMZN];
                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DpcN, hs_sat26DpcL);
                        };
                        var hs_sat26DpcP = new $hs.Thunk();
                        hs_sat26DpcP.evaluateOnce = function () {
                            return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziIOziFD.hs_zdfShowFD, hs_fd26Dp4s);
                        };
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DpcP, hs_sat26DpcO);
                    };
                    var hs_sat26DpcR = new $hs.Thunk();
                    hs_sat26DpcR.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("writeBuf fd=\x00");
                    };
                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DpcR, hs_sat26DpcQ);
                };
                return hs_puts25uujm.hscall(hs_sat26DpcS);
            };
            var hs_sat26DpcU = new $hs.Thunk();
            hs_sat26DpcU.evaluateOnce = function () {
                return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziBool.hs_False);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DpcU, hs_sat26DpcT);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DpcV, hs_sat26DpcH);
    };
    this.hs_zdfBufferedIOFD.data = [hs_zdcnewBuffer25v0iv, hs_zdcfillReadBuffer25v0xs, hs_zdcfillReadBuffer025v0wY, hs_zdcemptyWriteBuffer25v0ys, hs_zdcflushWriteBuffer25v0y7, hs_zdcflushWriteBuffer025v0x4];
    hs_zdcemptyWriteBuffer25v0ys.evaluateOnce = function () {
        return $hs.modules.GHCziIOziBufferedIO.hs_zddmemptyWriteBuffer.hscall($hs.modules.GHCziIOziFD.hs_zdfBufferedIOFD);
    };
    this.hs_FD.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
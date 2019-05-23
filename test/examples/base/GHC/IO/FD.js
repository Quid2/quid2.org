
$hs.modules.GHCziIOziFD = new $hs.Module();
$hs.modules.GHCziIOziFD.dependencies = ["GHC.Prim", "GHC.Types", "GHC.CString", "GHC.Unit", "GHC.Integer", "Control.Monad", "Data.Maybe", "GHC.Base", "GHC.Enum", "GHC.Num", "GHC.Real", "GHC.Show", "Data.Typeable.Internal", "GHC.Classes", "GHC.IO", "GHC.Conc.IO", "GHC.IO.Buffer", "GHC.IO.BufferedIO", "GHC.IO.Device", "GHC.IO.Exception", "GHC.IO.IOMode", "GHC.Ptr", "Data.Bits", "Foreign.C.Error", "Foreign.C.Types", "Foreign.Marshal.Utils", "System.Posix.Internals", "System.Posix.Types"];
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
    this.hs_openFile = new $hs.Func(3);
    this.hs_setNonBlockingMode = new $hs.Func(2);
    this.hs_zdfIODeviceFD = new $hs.Data(1);
    this.hs_readRawBufferPtr = new $hs.Func(5);
    this.hs_writeRawBufferPtr = new $hs.Func(5);
    this.hs_readRawBufferPtrNoBlock = new $hs.Func(5);
    this.hs_zdfRawIOFD = new $hs.Data(1);
    this.hs_zdfBufferedIOFD = new $hs.Data(1);
    this.hs_FD = new $hs.Func(2);
    this.hs_zdWFD.notEvaluated = true;
    this.hs_zdWFD.evaluate = function (hs_tpl26D4dn, hs_tpl26D4dp) {
        $hs.modules.GHCziIOziFD.loadDependencies();
        return this.evaluate(hs_tpl26D4dn, hs_tpl26D4dp);
    };
    this.hs_fdIsNonBlocking.notEvaluated = true;
    this.hs_fdIsNonBlocking.evaluate = function (hs_ds26D4du) {
        $hs.modules.GHCziIOziFD.loadDependencies();
        return this.evaluate(hs_ds26D4du);
    };
    this.hs_fdFD.notEvaluated = true;
    this.hs_fdFD.evaluate = function (hs_ds26D4dA) {
        $hs.modules.GHCziIOziFD.loadDependencies();
        return this.evaluate(hs_ds26D4dA);
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
    this.hs_mkFD.evaluate = function (hs_fd26D4eJ, hs_iomode26D4f6, hs_mbzustat26D4eH, hs_iszusocket26D4fP, hs_iszunonblock26D4fG) {
        $hs.modules.GHCziIOziFD.loadDependencies();
        return this.evaluate(hs_fd26D4eJ, hs_iomode26D4f6, hs_mbzustat26D4eH, hs_iszusocket26D4fP, hs_iszunonblock26D4fG);
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
    this.hs_release.evaluate = function (hs_fd26D4g6) {
        $hs.modules.GHCziIOziFD.loadDependencies();
        return this.evaluate(hs_fd26D4g6);
    };
    this.hs_openFile.notEvaluated = true;
    this.hs_openFile.evaluate = function (hs_filepath26D4hF, hs_iomode26D4hJ, hs_nonzublocking26D4hQ) {
        $hs.modules.GHCziIOziFD.loadDependencies();
        return this.evaluate(hs_filepath26D4hF, hs_iomode26D4hJ, hs_nonzublocking26D4hQ);
    };
    this.hs_setNonBlockingMode.notEvaluated = true;
    this.hs_setNonBlockingMode.evaluate = function (hs_fd26D4jM, hs_set26D4jS) {
        $hs.modules.GHCziIOziFD.loadDependencies();
        return this.evaluate(hs_fd26D4jM, hs_set26D4jS);
    };
    this.hs_zdfIODeviceFD.notEvaluated = true;
    this.hs_zdfIODeviceFD.evaluate = function () {
        $hs.modules.GHCziIOziFD.loadDependencies();
        return this;
    };
    this.hs_readRawBufferPtr.notEvaluated = true;
    this.hs_readRawBufferPtr.evaluate = function (hs_loc26D4li, hs_fd26D4l5, hs_buf26D4lA, hs_off26D4lB, hs_len26D4lD) {
        $hs.modules.GHCziIOziFD.loadDependencies();
        return this.evaluate(hs_loc26D4li, hs_fd26D4l5, hs_buf26D4lA, hs_off26D4lB, hs_len26D4lD);
    };
    this.hs_writeRawBufferPtr.notEvaluated = true;
    this.hs_writeRawBufferPtr.evaluate = function (hs_loc26D4nj, hs_fd26D4n6, hs_buf26D4nB, hs_off26D4nC, hs_len26D4nE) {
        $hs.modules.GHCziIOziFD.loadDependencies();
        return this.evaluate(hs_loc26D4nj, hs_fd26D4n6, hs_buf26D4nB, hs_off26D4nC, hs_len26D4nE);
    };
    this.hs_readRawBufferPtrNoBlock.notEvaluated = true;
    this.hs_readRawBufferPtrNoBlock.evaluate = function (hs_loc26D4pA, hs_fd26D4pt, hs_buf26D4q6, hs_off26D4q7, hs_len26D4q9) {
        $hs.modules.GHCziIOziFD.loadDependencies();
        return this.evaluate(hs_loc26D4pA, hs_fd26D4pt, hs_buf26D4q6, hs_off26D4q7, hs_len26D4q9);
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
    var hs_dEFAULTzuFDzuBUFFERzuSIZZE25u7aa = new $hs.Data(1);
    var hs_zdcshow25uFHp = new $hs.Func(1);
    var hs_zdcshowList25uFHx = new $hs.Thunk();
    var hs_zdcshowsPrec25uFHy = new $hs.Thunk();
    var hs_zdcsetRaw25uFHz = new $hs.Func(2);
    var hs_zdcgetEcho25uFHK = new $hs.Func(1);
    var hs_zdcsetEcho25uFHS = new $hs.Func(2);
    var hs_zdcgetSizze25uFI2 = new $hs.Func(1);
    var hs_zdcnewBuffer25uFIa = new $hs.Func(2);
    var hs_zdctypeOf25uFIf = new $hs.Func(1);
    var hs_readzuflags25u7ag = new $hs.Thunk();
    var hs_outputzuflags25u7af = new $hs.Thunk();
    var hs_writezuflags25u7ah = new $hs.Thunk();
    var hs_appendzuflags25u7aj = new $hs.Thunk();
    var hs_rwzuflags25u7ai = new $hs.Thunk();
    var hs_sat26D4vh = new $hs.Thunk();
    var hs_sat26D4vk = new $hs.Thunk();
    var hs_sat26D4vn = new $hs.Thunk();
    var hs_zdcclose25uFKd = new $hs.Func(1);
    var hs_zdcseek25uFKw = new $hs.Func(3);
    var hs_zdctell25uFKO = new $hs.Func(1);
    var hs_setSizze25u7aw = new $hs.Func(2);
    var hs_devType25u7ax = new $hs.Func(1);
    var hs_zdcisSeekable25uFMu = new $hs.Func(1);
    var hs_zdcdup25uFME = new $hs.Func(1);
    var hs_zdcdup225uFN1 = new $hs.Func(2);
    var hs_zdcready25uFNN = new $hs.Func(3);
    var hs_zdcisTerminal25uFOy = new $hs.Func(1);
    var hs_zdcread25uFQw = new $hs.Func(3);
    var hs_fdWrite25u7aI = new $hs.Func(3);
    var hs_throwErrnoIfMinus1RetryOnBlock25u7aP = new $hs.Func(3);
    var hs_zdcreadNonBlocking25uFUM = new $hs.Func(3);
    var hs_zdcwriteNonBlocking25uFV6 = new $hs.Func(3);
    var hs_zdcfillReadBuffer25uFWW = new $hs.Func(2);
    var hs_zdcflushWriteBuffer25uFXA = new $hs.Func(2);
    var hs_zdcfillReadBuffer025uFXU = new $hs.Func(2);
    var hs_zdcflushWriteBuffer025uFXZ = new $hs.Func(2);
    var hs_zdcemptyWriteBuffer25uFY4 = new $hs.Thunk();
    this.hs_zdWFD.evaluate = function (hs_tpl26D4dn, hs_tpl26D4dp) {
        var hs_tpl26D4dr = hs_tpl26D4dn;
        if (hs_tpl26D4dn.notEvaluated) {
            hs_tpl26D4dr = hs_tpl26D4dn.hscall();
        }
        var hs_tpl26D4ds = hs_tpl26D4dp;
        if (hs_tpl26D4dp.notEvaluated) {
            hs_tpl26D4ds = hs_tpl26D4dp.hscall();
        }
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26D4dr, hs_tpl26D4ds];
        return $res;
    };
    hs_dEFAULTzuFDzuBUFFERzuSIZZE25u7aa.data = [8096];
    this.hs_fdIsNonBlocking.evaluate = function (hs_ds26D4du) {
        var hs_wild26D4um = hs_ds26D4du;
        if (hs_ds26D4du.notEvaluated) {
            hs_wild26D4um = hs_ds26D4du.hscall();
        }
        var hs_ds226D4dy = hs_wild26D4um.data[1];
        if (hs_ds226D4dy.notEvaluated) {
            return hs_ds226D4dy.hscall();
        } else {
            return hs_ds226D4dy;
        }
    };
    this.hs_fdFD.evaluate = function (hs_ds26D4dA) {
        var hs_wild26D4uo = hs_ds26D4dA;
        if (hs_ds26D4dA.notEvaluated) {
            hs_wild26D4uo = hs_ds26D4dA.hscall();
        }
        var hs_ds126D4dE = hs_wild26D4uo.data[0];
        if (hs_ds126D4dE.notEvaluated) {
            return hs_ds126D4dE.hscall();
        } else {
            return hs_ds126D4dE;
        }
    };
    hs_zdcshow25uFHp.evaluate = function (hs_fd26D4dH) {
        var hs_sat26D4up = new $hs.Thunk();
        hs_sat26D4up.evaluateOnce = function () {
            var hs_wild26D4ur = hs_fd26D4dH;
            if (hs_fd26D4dH.notEvaluated) {
                hs_wild26D4ur = hs_fd26D4dH.hscall();
            }
            var hs_ds26D4dL = hs_wild26D4ur.data[0];
            if (hs_ds26D4dL.notEvaluated) {
                return hs_ds26D4dL.hscall();
            } else {
                return hs_ds26D4dL;
            }
        };
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.ForeignziCziTypes.hs_zdfShowCInt, hs_sat26D4up);
    };
    this.hs_zdfShowFD.data = [hs_zdcshowsPrec25uFHy, hs_zdcshow25uFHp, hs_zdcshowList25uFHx];
    hs_zdcshowList25uFHx.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall($hs.modules.GHCziIOziFD.hs_zdfShowFD);
    };
    hs_zdcshowsPrec25uFHy.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowsPrec.hscall($hs.modules.GHCziIOziFD.hs_zdfShowFD);
    };
    hs_zdcsetRaw25uFHz.evaluate = function (hs_fd26D4dS, hs_raw26D4dY) {
        var hs_sat26D4ut = new $hs.Thunk();
        hs_sat26D4ut.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_not.hscall(hs_raw26D4dY);
        };
        var hs_sat26D4us = new $hs.Thunk();
        hs_sat26D4us.evaluateOnce = function () {
            var hs_wild26D4uv = hs_fd26D4dS;
            if (hs_fd26D4dS.notEvaluated) {
                hs_wild26D4uv = hs_fd26D4dS.hscall();
            }
            var hs_ds26D4dW = hs_wild26D4uv.data[0];
            if (hs_ds26D4dW.notEvaluated) {
                return hs_ds26D4dW.hscall();
            } else {
                return hs_ds26D4dW;
            }
        };
        return $hs.modules.SystemziPosixziInternals.hs_setCooked.hscall(hs_sat26D4us, hs_sat26D4ut);
    };
    hs_zdcgetEcho25uFHK.evaluate = function (hs_fd26D4e2) {
        var hs_sat26D4uw = new $hs.Thunk();
        hs_sat26D4uw.evaluateOnce = function () {
            var hs_wild26D4uy = hs_fd26D4e2;
            if (hs_fd26D4e2.notEvaluated) {
                hs_wild26D4uy = hs_fd26D4e2.hscall();
            }
            var hs_ds26D4e6 = hs_wild26D4uy.data[0];
            if (hs_ds26D4e6.notEvaluated) {
                return hs_ds26D4e6.hscall();
            } else {
                return hs_ds26D4e6;
            }
        };
        return $hs.modules.SystemziPosixziInternals.hs_getEcho.hscall(hs_sat26D4uw);
    };
    hs_zdcsetEcho25uFHS.evaluate = function (hs_fd26D4eb, hs_on26D4eh) {
        var hs_sat26D4uz = new $hs.Thunk();
        hs_sat26D4uz.evaluateOnce = function () {
            var hs_wild26D4uB = hs_fd26D4eb;
            if (hs_fd26D4eb.notEvaluated) {
                hs_wild26D4uB = hs_fd26D4eb.hscall();
            }
            var hs_ds26D4ef = hs_wild26D4uB.data[0];
            if (hs_ds26D4ef.notEvaluated) {
                return hs_ds26D4ef.hscall();
            } else {
                return hs_ds26D4ef;
            }
        };
        return $hs.modules.SystemziPosixziInternals.hs_setEcho.hscall(hs_sat26D4uz, hs_on26D4eh);
    };
    hs_zdcgetSizze25uFI2.evaluate = function (hs_fd26D4ek) {
        var hs_sat26D4uC = new $hs.Thunk();
        hs_sat26D4uC.evaluateOnce = function () {
            var hs_wild26D4uE = hs_fd26D4ek;
            if (hs_fd26D4ek.notEvaluated) {
                hs_wild26D4uE = hs_fd26D4ek.hscall();
            }
            var hs_ds26D4eo = hs_wild26D4uE.data[0];
            if (hs_ds26D4eo.notEvaluated) {
                return hs_ds26D4eo.hscall();
            } else {
                return hs_ds26D4eo;
            }
        };
        return $hs.modules.SystemziPosixziInternals.hs_fdFileSizze.hscall(hs_sat26D4uC);
    };
    hs_zdcnewBuffer25uFIa.evaluate = function (hs_zudev26D4eu, hs_state26D4et) {
        return $hs.modules.GHCziIOziBuffer.hs_newByteBuffer.hscall(hs_dEFAULTzuFDzuBUFFERzuSIZZE25u7aa, hs_state26D4et);
    };
    hs_zdctypeOf25uFIf.evaluate = function (hs_ds26D4eB) {
        var hs_sat26D4uF = new $hs.Thunk();
        hs_sat26D4uF.evaluateOnce = function () {
            var hs_sat26D4uH = new $hs.Thunk();
            hs_sat26D4uH.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("FD\x00");
            };
            var hs_sat26D4uI = new $hs.Thunk();
            hs_sat26D4uI.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("GHC.IO.FD\x00");
            };
            var hs_sat26D4uG = new $hs.Thunk();
            hs_sat26D4uG.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26D4uG, hs_sat26D4uI, hs_sat26D4uH);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26D4uF, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableFD.evaluateOnce = function () {
        if (hs_zdctypeOf25uFIf.notEvaluated) {
            return hs_zdctypeOf25uFIf.hscall();
        } else {
            return hs_zdctypeOf25uFIf;
        }
    };
    hs_readzuflags25u7ag.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt, $hs.modules.SystemziPosixziInternals.hs_ozuNOCTTY, $hs.modules.SystemziPosixziInternals.hs_ozuRDONLY);
    };
    hs_outputzuflags25u7af.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt, $hs.modules.SystemziPosixziInternals.hs_ozuNOCTTY, $hs.modules.SystemziPosixziInternals.hs_ozuCREAT);
    };
    hs_writezuflags25u7ah.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt, hs_outputzuflags25u7af, $hs.modules.SystemziPosixziInternals.hs_ozuWRONLY);
    };
    hs_appendzuflags25u7aj.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt, hs_writezuflags25u7ah, $hs.modules.SystemziPosixziInternals.hs_ozuAPPEND);
    };
    hs_rwzuflags25u7ai.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt, hs_outputzuflags25u7af, $hs.modules.SystemziPosixziInternals.hs_ozuRDWR);
    };
    this.hs_mkFD.evaluate = function (hs_fd26D4eJ, hs_iomode26D4f6, hs_mbzustat26D4eH, hs_iszusocket26D4fP, hs_iszunonblock26D4fG) {
        var hs_sat26D4uK = new $hs.Func(1);
        hs_sat26D4uK.evaluate = function (hs_ds26D4eO) {
            var hs_wild26D4uN = hs_ds26D4eO;
            if (hs_ds26D4eO.notEvaluated) {
                hs_wild26D4uN = hs_ds26D4eO.hscall();
            }
            var hs_fdzutype26D4eT = hs_wild26D4uN.data[0];
            var hs_dev26D4f0 = hs_wild26D4uN.data[1];
            var hs_ino26D4f3 = hs_wild26D4uN.data[2];
            var hs_sat26D4uO = new $hs.Thunk();
            hs_sat26D4uO.evaluateOnce = function () {
                var hs_sat26D4ve = new $hs.Thunk();
                hs_sat26D4ve.evaluateOnce = function () {
                    var hs_nt26D4fJ = hs_fd26D4eJ;
                    if (hs_fd26D4eJ.notEvaluated) {
                        hs_nt26D4fJ = hs_fd26D4eJ.hscall();
                    }
                    var hs_tpl26D4fK = $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziEnum.hs_zdfEnumBool, hs_iszunonblock26D4fG);
                    var $res = new $hs.Data(1);
                    $res.data = [hs_nt26D4fJ, hs_tpl26D4fK];
                    return $res;
                };
                var hs_sat26D4vd = new $hs.Data(1);
                hs_sat26D4vd.data = [hs_sat26D4ve, hs_fdzutype26D4eT];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4vd);
            };
            var hs_sat26D4uM = new $hs.Thunk();
            hs_sat26D4uM.evaluateOnce = function () {
                var hs_wild126D4uQ = hs_fdzutype26D4eT;
                if (hs_fdzutype26D4eT.notEvaluated) {
                    hs_wild126D4uQ = hs_fdzutype26D4eT.hscall();
                }
                switch (hs_wild126D4uQ.tag) {
                case 1:
                    var hs_sat26D4uR = new $hs.Thunk();
                    hs_sat26D4uR.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("is a directory\x00");
                    };
                    var hs_sat26D4uS = new $hs.Thunk();
                    hs_sat26D4uS.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("openFile\x00");
                    };
                    var hs_sat26D4uP = new $hs.Data(1);
                    hs_sat26D4uP.data = [$hs.modules.DataziMaybe.hs_Nothing, $hs.modules.GHCziIOziException.hs_InappropriateType, hs_sat26D4uS, hs_sat26D4uR, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing];
                    return $hs.modules.GHCziIOziException.hs_ioException.hscall(hs_sat26D4uP);
                case 3:
                    var hs_sat26D4uU = new $hs.Func(1);
                    hs_sat26D4uU.evaluate = function (hs_r26D4fs) {
                        var hs_sat26D4v5 = new $hs.Thunk();
                        hs_sat26D4v5.evaluateOnce = function () {
                            var hs_sat26D4vb = new $hs.Thunk();
                            hs_sat26D4vb.evaluateOnce = function () {
                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("file is locked\x00");
                            };
                            var hs_sat26D4vc = new $hs.Thunk();
                            hs_sat26D4vc.evaluateOnce = function () {
                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("openFile\x00");
                            };
                            var hs_sat26D4va = new $hs.Data(1);
                            hs_sat26D4va.data = [$hs.modules.DataziMaybe.hs_Nothing, $hs.modules.GHCziIOziException.hs_ResourceBusy, hs_sat26D4vc, hs_sat26D4vb, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing];
                            return $hs.modules.GHCziIOziException.hs_ioException.hscall(hs_sat26D4va);
                        };
                        var hs_sat26D4v4 = new $hs.Thunk();
                        hs_sat26D4v4.evaluateOnce = function () {
                            var hs_sat26D4v6 = new $hs.Thunk();
                            hs_sat26D4v6.evaluateOnce = function () {
                                var hs_sat26D4v7 = new $hs.Thunk();
                                hs_sat26D4v7.evaluateOnce = function () {
                                    var hs_sat26D4v8 = new $hs.Thunk();
                                    hs_sat26D4v8.evaluateOnce = function () {
                                        var hs_sat26D4v9 = new $hs.Thunk();
                                        hs_sat26D4v9.evaluateOnce = function () {
                                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                        };
                                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26D4v9);
                                    };
                                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26D4v8);
                                };
                                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_r26D4fs, hs_sat26D4v7);
                            };
                            return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4v6);
                        };
                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D4v4, hs_sat26D4v5);
                    };
                    var hs_sat26D4uT = new $hs.Thunk();
                    hs_sat26D4uT.evaluateOnce = function () {
                        var hs_ds126D4uY = hs_fd26D4eJ;
                        if (hs_fd26D4eJ.notEvaluated) {
                            hs_ds126D4uY = hs_fd26D4eJ.hscall();
                        }
                        var hs_ds226D4fd = hs_ds126D4uY.data[0];
                        var hs_ds326D4uX = hs_dev26D4f0;
                        if (hs_dev26D4f0.notEvaluated) {
                            hs_ds326D4uX = hs_dev26D4f0.hscall();
                        }
                        var hs_ds426D4fe = hs_ds326D4uX.data[0];
                        var hs_ds526D4uW = hs_ino26D4f3;
                        if (hs_ino26D4f3.notEvaluated) {
                            hs_ds526D4uW = hs_ino26D4f3.hscall();
                        }
                        var hs_ds626D4ff = hs_ds526D4uW.data[0];
                        var hs_sat26D4uZ = new $hs.Thunk();
                        hs_sat26D4uZ.evaluateOnce = function () {
                            var hs_wild226D4v3 = hs_iomode26D4f6;
                            if (hs_iomode26D4f6.notEvaluated) {
                                hs_wild226D4v3 = hs_iomode26D4f6.hscall();
                            }
                            switch (hs_wild226D4v3.tag) {
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
                        var hs_ds726D4v0 = $hs.modules.ForeignziMarshalziUtils.hs_fromBool.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26D4uZ);
                        var hs_ds826D4fg = hs_ds726D4v0.data[0];
                        var hs_sat26D4uV = new $hs.Func(1);
                        hs_sat26D4uV.evaluate = function (hs_ds926D4fh) {
                            var hs_wild226D4v2 = [hs_ds926D4fh, lockFile(hs_ds226D4fd, hs_ds426D4fe, hs_ds626D4ff, hs_ds826D4fg)];
                            var hs_ds1026D4fm = hs_wild226D4v2[0];
                            var hs_ds1126D4fn = hs_wild226D4v2[1];
                            var hs_sat26D4v1 = new $hs.Data(1);
                            hs_sat26D4v1.data = [hs_ds1126D4fn];
                            return [hs_ds1026D4fm, hs_sat26D4v1];
                        };
                        if (hs_sat26D4uV.notEvaluated) {
                            return hs_sat26D4uV.hscall();
                        } else {
                            return hs_sat26D4uV;
                        }
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4uT, hs_sat26D4uU);
                default:
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                }
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4uM, hs_sat26D4uO);
        };
        var hs_sat26D4uJ = new $hs.Thunk();
        hs_sat26D4uJ.evaluateOnce = function () {
            var hs_wild26D4uL = hs_mbzustat26D4eH;
            if (hs_mbzustat26D4eH.notEvaluated) {
                hs_wild26D4uL = hs_mbzustat26D4eH.hscall();
            }
            switch (hs_wild26D4uL.tag) {
            case 1:
                return $hs.modules.SystemziPosixziInternals.hs_fdStat.hscall(hs_fd26D4eJ);
            case 2:
                var hs_stat26D4eL = hs_wild26D4uL.data[0];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_stat26D4eL);
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4uJ, hs_sat26D4uK);
    };
    hs_sat26D4vh.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
    };
    this.hs_stderr.evaluateOnce = function () {
        var hs_nt26D4fT = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26D4vh);
        var hs_sat26D4vi = new $hs.Data(1);
        hs_sat26D4vi.data = [0];
        var $res = new $hs.Data(1);
        $res.data = [hs_nt26D4fT, hs_sat26D4vi];
        return $res;
    };
    hs_sat26D4vk.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
    };
    this.hs_stdout.evaluateOnce = function () {
        var hs_nt26D4fY = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26D4vk);
        var hs_sat26D4vl = new $hs.Data(1);
        hs_sat26D4vl.data = [0];
        var $res = new $hs.Data(1);
        $res.data = [hs_nt26D4fY, hs_sat26D4vl];
        return $res;
    };
    hs_sat26D4vn.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
    };
    this.hs_stdin.evaluateOnce = function () {
        var hs_nt26D4g3 = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26D4vn);
        var hs_sat26D4vo = new $hs.Data(1);
        hs_sat26D4vo.data = [0];
        var $res = new $hs.Data(1);
        $res.data = [hs_nt26D4g3, hs_sat26D4vo];
        return $res;
    };
    this.hs_release.evaluate = function (hs_fd26D4g6) {
        var hs_sat26D4vr = new $hs.Func(1);
        hs_sat26D4vr.evaluate = function (hs_ds26D4gr) {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        };
        var hs_sat26D4vq = new $hs.Thunk();
        hs_sat26D4vq.evaluateOnce = function () {
            var hs_wild26D4vu = hs_fd26D4g6;
            if (hs_fd26D4g6.notEvaluated) {
                hs_wild26D4vu = hs_fd26D4g6.hscall();
            }
            var hs_ds26D4ga = hs_wild26D4vu.data[0];
            var hs_ds226D4vt = hs_ds26D4ga;
            if (hs_ds26D4ga.notEvaluated) {
                hs_ds226D4vt = hs_ds26D4ga.hscall();
            }
            var hs_ds326D4gf = hs_ds226D4vt.data[0];
            var hs_sat26D4vs = new $hs.Func(1);
            hs_sat26D4vs.evaluate = function (hs_ds426D4gg) {
                var hs_wild126D4vx = [hs_ds426D4gg, unlockFile(hs_ds326D4gf)];
                var hs_ds526D4gl = hs_wild126D4vx[0];
                var hs_ds626D4gm = hs_wild126D4vx[1];
                var hs_sat26D4vw = new $hs.Data(1);
                hs_sat26D4vw.data = [hs_ds626D4gm];
                return [hs_ds526D4gl, hs_sat26D4vw];
            };
            if (hs_sat26D4vs.notEvaluated) {
                return hs_sat26D4vs.hscall();
            } else {
                return hs_sat26D4vs;
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4vq, hs_sat26D4vr);
    };
    hs_zdcclose25uFKd.evaluate = function (hs_fd26D4gv) {
        var hs_sat26D4vz = new $hs.Thunk();
        hs_sat26D4vz.evaluateOnce = function () {
            var hs_sat26D4vC = new $hs.Thunk();
            hs_sat26D4vC.evaluateOnce = function () {
                var hs_sat26D4vH = new $hs.Thunk();
                hs_sat26D4vH.evaluateOnce = function () {
                    var hs_wild26D4vJ = hs_fd26D4gv;
                    if (hs_fd26D4gv.notEvaluated) {
                        hs_wild26D4vJ = hs_fd26D4gv.hscall();
                    }
                    var hs_ds26D4gI = hs_wild26D4vJ.data[0];
                    if (hs_ds26D4gI.notEvaluated) {
                        return hs_ds26D4gI.hscall();
                    } else {
                        return hs_ds26D4gI;
                    }
                };
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.SystemziPosixziTypes.hs_zdfNumFd, hs_sat26D4vH);
            };
            var hs_sat26D4vB = new $hs.Func(1);
            hs_sat26D4vB.evaluate = function (hs_realFd26D4gB) {
                var hs_sat26D4vE = new $hs.Thunk();
                hs_sat26D4vE.evaluateOnce = function () {
                    var hs_sat26D4vG = new $hs.Thunk();
                    hs_sat26D4vG.evaluateOnce = function () {
                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralFd, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_realFd26D4gB);
                    };
                    return $hs.modules.SystemziPosixziInternals.hs_czuclose.hscall(hs_sat26D4vG);
                };
                var hs_sat26D4vD = new $hs.Thunk();
                hs_sat26D4vD.evaluateOnce = function () {
                    var hs_sat26D4vF = new $hs.Thunk();
                    hs_sat26D4vF.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("GHC.IO.FD.close\x00");
                    };
                    return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1Retryzu.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26D4vF);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D4vD, hs_sat26D4vE);
            };
            return $hs.modules.GHCziConcziIO.hs_closeFdWith.hscall(hs_sat26D4vB, hs_sat26D4vC);
        };
        var hs_sat26D4vy = new $hs.Thunk();
        hs_sat26D4vy.evaluateOnce = function () {
            var hs_sat26D4vA = new $hs.Thunk();
            hs_sat26D4vA.evaluateOnce = function () {
                return $hs.modules.GHCziIOziFD.hs_release.hscall(hs_fd26D4gv);
            };
            return $hs.modules.GHCziBase.hs_flip.hscall($hs.modules.GHCziIO.hs_finally, hs_sat26D4vA);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D4vy, hs_sat26D4vz);
    };
    hs_zdcseek25uFKw.evaluate = function (hs_fd26D4gS, hs_mode26D4h0, hs_off26D4gY) {
        var hs_sat26D4vL = new $hs.Thunk();
        hs_sat26D4vL.evaluateOnce = function () {
            var hs_sat26D4vO = new $hs.Thunk();
            hs_sat26D4vO.evaluateOnce = function () {
                var hs_wild26D4vS = hs_mode26D4h0;
                if (hs_mode26D4h0.notEvaluated) {
                    hs_wild26D4vS = hs_mode26D4h0.hscall();
                }
                switch (hs_wild26D4vS.tag) {
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
            var hs_sat26D4vP = new $hs.Thunk();
            hs_sat26D4vP.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, $hs.modules.SystemziPosixziTypes.hs_zdfNumCOff, hs_off26D4gY);
            };
            var hs_sat26D4vN = new $hs.Thunk();
            hs_sat26D4vN.evaluateOnce = function () {
                var hs_wild26D4vR = hs_fd26D4gS;
                if (hs_fd26D4gS.notEvaluated) {
                    hs_wild26D4vR = hs_fd26D4gS.hscall();
                }
                var hs_ds26D4gW = hs_wild26D4vR.data[0];
                if (hs_ds26D4gW.notEvaluated) {
                    return hs_ds26D4gW.hscall();
                } else {
                    return hs_ds26D4gW;
                }
            };
            return $hs.modules.SystemziPosixziInternals.hs_czulseek.hscall(hs_sat26D4vN, hs_sat26D4vP, hs_sat26D4vO);
        };
        var hs_sat26D4vK = new $hs.Thunk();
        hs_sat26D4vK.evaluateOnce = function () {
            var hs_sat26D4vM = new $hs.Thunk();
            hs_sat26D4vM.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("seek\x00");
            };
            return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1Retryzu.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCOff, hs_sat26D4vM);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D4vK, hs_sat26D4vL);
    };
    hs_zdctell25uFKO.evaluate = function (hs_fd26D4h9) {
        var hs_sat26D4vU = new $hs.Thunk();
        hs_sat26D4vU.evaluateOnce = function () {
            var hs_sat26D4vW = new $hs.Thunk();
            hs_sat26D4vW.evaluateOnce = function () {
                var hs_sat26D4vZ = new $hs.Thunk();
                hs_sat26D4vZ.evaluateOnce = function () {
                    var hs_sat26D4w2 = new $hs.Thunk();
                    hs_sat26D4w2.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCOff, hs_sat26D4w2);
                };
                var hs_sat26D4vY = new $hs.Thunk();
                hs_sat26D4vY.evaluateOnce = function () {
                    var hs_wild26D4w1 = hs_fd26D4h9;
                    if (hs_fd26D4h9.notEvaluated) {
                        hs_wild26D4w1 = hs_fd26D4h9.hscall();
                    }
                    var hs_ds26D4hd = hs_wild26D4w1.data[0];
                    if (hs_ds26D4hd.notEvaluated) {
                        return hs_ds26D4hd.hscall();
                    } else {
                        return hs_ds26D4hd;
                    }
                };
                return $hs.modules.SystemziPosixziInternals.hs_czulseek.hscall(hs_sat26D4vY, hs_sat26D4vZ, $hs.modules.SystemziPosixziInternals.hs_sEEKzuCUR);
            };
            var hs_sat26D4vV = new $hs.Thunk();
            hs_sat26D4vV.evaluateOnce = function () {
                var hs_sat26D4vX = new $hs.Thunk();
                hs_sat26D4vX.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hGetPosn\x00");
                };
                return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1Retry.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCOff, hs_sat26D4vX);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D4vV, hs_sat26D4vW);
        };
        var hs_sat26D4vT = new $hs.Thunk();
        hs_sat26D4vT.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralCOff, $hs.modules.GHCziNum.hs_zdfNumInteger);
        };
        return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.GHCziBase.hs_zdfFunctorIO, hs_sat26D4vT, hs_sat26D4vU);
    };
    hs_setSizze25u7aw.evaluate = function (hs_fd26D4ht, hs_sizze26D4hz) {
        var hs_sat26D4w4 = new $hs.Thunk();
        hs_sat26D4w4.evaluateOnce = function () {
            var hs_sat26D4w9 = new $hs.Thunk();
            hs_sat26D4w9.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, $hs.modules.SystemziPosixziTypes.hs_zdfNumCOff, hs_sizze26D4hz);
            };
            var hs_sat26D4w8 = new $hs.Thunk();
            hs_sat26D4w8.evaluateOnce = function () {
                var hs_wild26D4wb = hs_fd26D4ht;
                if (hs_fd26D4ht.notEvaluated) {
                    hs_wild26D4wb = hs_fd26D4ht.hscall();
                }
                var hs_ds26D4hx = hs_wild26D4wb.data[0];
                if (hs_ds26D4hx.notEvaluated) {
                    return hs_ds26D4hx.hscall();
                } else {
                    return hs_ds26D4hx;
                }
            };
            return $hs.modules.SystemziPosixziInternals.hs_czuftruncate.hscall(hs_sat26D4w8, hs_sat26D4w9);
        };
        var hs_sat26D4w3 = new $hs.Thunk();
        hs_sat26D4w3.evaluateOnce = function () {
            var hs_sat26D4w6 = new $hs.Thunk();
            hs_sat26D4w6.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("GHC.IO.FD.setSize\x00");
            };
            var hs_ds26D4hn = new $hs.Thunk();
            hs_ds26D4hn.evaluateOnce = function () {
                var hs_sat26D4w7 = new $hs.Thunk();
                hs_sat26D4w7.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26D4w7);
            };
            var hs_sat26D4w5 = new $hs.Func(1);
            hs_sat26D4w5.evaluate = function (hs_ds126D4hp) {
                return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_ds126D4hp, hs_ds26D4hn);
            };
            return $hs.modules.ForeignziCziError.hs_throwErrnoIfzu.hscall(hs_sat26D4w5, hs_sat26D4w6);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D4w3, hs_sat26D4w4);
    };
    this.hs_openFile.evaluate = function (hs_filepath26D4hF, hs_iomode26D4hJ, hs_nonzublocking26D4hQ) {
        var hs_sat26D4wd = new $hs.Func(1);
        hs_sat26D4wd.evaluate = function (hs_f26D4hS) {
            var hs_oflags226D4hO = new $hs.Thunk();
            hs_oflags226D4hO.evaluateOnce = function () {
                var hs_sat26D4wD = new $hs.Thunk();
                hs_sat26D4wD.evaluateOnce = function () {
                    var hs_sat26D4wF = new $hs.Thunk();
                    hs_sat26D4wF.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26D4wF);
                };
                var hs_sat26D4wC = new $hs.Thunk();
                hs_sat26D4wC.evaluateOnce = function () {
                    var hs_wild26D4wE = hs_iomode26D4hJ;
                    if (hs_iomode26D4hJ.notEvaluated) {
                        hs_wild26D4wE = hs_iomode26D4hJ.hscall();
                    }
                    switch (hs_wild26D4wE.tag) {
                    case 1:
                        if (hs_readzuflags25u7ag.notEvaluated) {
                            return hs_readzuflags25u7ag.hscall();
                        } else {
                            return hs_readzuflags25u7ag;
                        }
                    case 2:
                        if (hs_writezuflags25u7ah.notEvaluated) {
                            return hs_writezuflags25u7ah.hscall();
                        } else {
                            return hs_writezuflags25u7ah;
                        }
                    case 3:
                        if (hs_appendzuflags25u7aj.notEvaluated) {
                            return hs_appendzuflags25u7aj.hscall();
                        } else {
                            return hs_appendzuflags25u7aj;
                        }
                    case 4:
                        if (hs_rwzuflags25u7ai.notEvaluated) {
                            return hs_rwzuflags25u7ai.hscall();
                        } else {
                            return hs_rwzuflags25u7ai;
                        }
                    }
                };
                return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt, hs_sat26D4wC, hs_sat26D4wD);
            };
            var hs_sat26D4wf = new $hs.Func(1);
            hs_sat26D4wf.evaluate = function (hs_fd26D4i1) {
                var hs_sat26D4wp = new $hs.Func(1);
                hs_sat26D4wp.evaluate = function (hs_ds26D4ie) {
                    var hs_wild26D4wv = hs_ds26D4ie;
                    if (hs_ds26D4ie.notEvaluated) {
                        hs_wild26D4wv = hs_ds26D4ie.hscall();
                    }
                    var hs_fD26D4im = hs_wild26D4wv.data[0];
                    var hs_fdzutype26D4ij = hs_wild26D4wv.data[1];
                    var hs_sat26D4ww = new $hs.Thunk();
                    hs_sat26D4ww.evaluateOnce = function () {
                        var hs_sat26D4wB = new $hs.Data(1);
                        hs_sat26D4wB.data = [hs_fD26D4im, hs_fdzutype26D4ij];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4wB);
                    };
                    var hs_sat26D4wu = new $hs.Thunk();
                    hs_sat26D4wu.evaluateOnce = function () {
                        var hs_sat26D4wy = new $hs.Thunk();
                        hs_sat26D4wy.evaluateOnce = function () {
                            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziDevice.hs_zdfEqIODeviceType, hs_fdzutype26D4ij, $hs.modules.GHCziIOziDevice.hs_RegularFile);
                        };
                        var hs_sat26D4wz = new $hs.Thunk();
                        hs_sat26D4wz.evaluateOnce = function () {
                            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziIOMode.hs_zdfEqIOMode, hs_iomode26D4hJ, $hs.modules.GHCziIOziIOMode.hs_WriteMode);
                        };
                        var hs_wild126D4wA = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26D4wz, hs_sat26D4wy);
                        switch (hs_wild126D4wA.tag) {
                        case 1:
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                        case 2:
                            var hs_sat26D4wx = new $hs.Thunk();
                            hs_sat26D4wx.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                            };
                            return hs_setSizze25u7aw.hscall(hs_fD26D4im, hs_sat26D4wx);
                        }
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4wu, hs_sat26D4ww);
                };
                var hs_sat26D4wo = new $hs.Thunk();
                hs_sat26D4wo.evaluateOnce = function () {
                    var hs_sat26D4wr = new $hs.Func(2);
                    hs_sat26D4wr.evaluate = function (hs_zddException26D4i7, hs_e26D4i8) {
                        var hs_sat26D4wt = new $hs.Func(1);
                        hs_sat26D4wt.evaluate = function (hs_ds26D4i9) {
                            return $hs.modules.GHCziIO.hs_throwIO.hscall(hs_zddException26D4i7, hs_e26D4i8);
                        };
                        var hs_sat26D4ws = new $hs.Thunk();
                        hs_sat26D4ws.evaluateOnce = function () {
                            return $hs.modules.SystemziPosixziInternals.hs_czuclose.hscall(hs_fd26D4i1);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4ws, hs_sat26D4wt);
                    };
                    var hs_sat26D4wq = new $hs.Thunk();
                    hs_sat26D4wq.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziFD.hs_mkFD.hscall(hs_fd26D4i1, hs_iomode26D4hJ, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.GHCziTypes.hs_False, hs_nonzublocking26D4hQ);
                    };
                    return $hs.modules.GHCziIO.hs_catchAny.hscall(hs_sat26D4wq, hs_sat26D4wr);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4wo, hs_sat26D4wp);
            };
            var hs_sat26D4we = new $hs.Thunk();
            hs_sat26D4we.evaluateOnce = function () {
                var hs_sat26D4wh = new $hs.Thunk();
                hs_sat26D4wh.evaluateOnce = function () {
                    var hs_wild26D4wj = hs_nonzublocking26D4hQ;
                    if (hs_nonzublocking26D4hQ.notEvaluated) {
                        hs_wild26D4wj = hs_nonzublocking26D4hQ.hscall();
                    }
                    switch (hs_wild26D4wj.tag) {
                    case 1:
                        var hs_sat26D4wm = new $hs.Thunk();
                        hs_sat26D4wm.evaluateOnce = function () {
                            var hs_sat26D4wn = new $hs.Thunk();
                            hs_sat26D4wn.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(438);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCMode, hs_sat26D4wn);
                        };
                        return $hs.modules.SystemziPosixziInternals.hs_czusafezuopen.hscall(hs_f26D4hS, hs_oflags226D4hO, hs_sat26D4wm);
                    case 2:
                        var hs_sat26D4wk = new $hs.Thunk();
                        hs_sat26D4wk.evaluateOnce = function () {
                            var hs_sat26D4wl = new $hs.Thunk();
                            hs_sat26D4wl.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(438);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCMode, hs_sat26D4wl);
                        };
                        var hs_sat26D4wi = new $hs.Thunk();
                        hs_sat26D4wi.evaluateOnce = function () {
                            return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt, hs_oflags226D4hO, $hs.modules.SystemziPosixziInternals.hs_ozuNONBLOCK);
                        };
                        return $hs.modules.SystemziPosixziInternals.hs_czuopen.hscall(hs_f26D4hS, hs_sat26D4wi, hs_sat26D4wk);
                    }
                };
                var hs_sat26D4wg = new $hs.Thunk();
                hs_sat26D4wg.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("openFile\x00");
                };
                return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1Retry.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26D4wg, hs_sat26D4wh);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4we, hs_sat26D4wf);
        };
        var hs_sat26D4wc = new $hs.Thunk();
        hs_sat26D4wc.evaluateOnce = function () {
            return $hs.modules.SystemziPosixziInternals.hs_withFilePath.hscall(hs_filepath26D4hF);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D4wc, hs_sat26D4wd);
    };
    hs_devType25u7ax.evaluate = function (hs_fd26D4iv) {
        var hs_sat26D4wH = new $hs.Func(1);
        hs_sat26D4wH.evaluate = function (hs_ds26D4iD) {
            var hs_wild26D4wN = hs_ds26D4iD;
            if (hs_ds26D4iD.notEvaluated) {
                hs_wild26D4wN = hs_ds26D4iD.hscall();
            }
            var hs_ty26D4iI = hs_wild26D4wN.data[0];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ty26D4iI);
        };
        var hs_sat26D4wG = new $hs.Thunk();
        hs_sat26D4wG.evaluateOnce = function () {
            var hs_sat26D4wI = new $hs.Thunk();
            hs_sat26D4wI.evaluateOnce = function () {
                var hs_wild26D4wK = hs_fd26D4iv;
                if (hs_fd26D4iv.notEvaluated) {
                    hs_wild26D4wK = hs_fd26D4iv.hscall();
                }
                var hs_ds26D4iz = hs_wild26D4wK.data[0];
                if (hs_ds26D4iz.notEvaluated) {
                    return hs_ds26D4iz.hscall();
                } else {
                    return hs_ds26D4iz;
                }
            };
            return $hs.modules.SystemziPosixziInternals.hs_fdStat.hscall(hs_sat26D4wI);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4wG, hs_sat26D4wH);
    };
    hs_zdcisSeekable25uFMu.evaluate = function (hs_fd26D4iM) {
        var hs_sat26D4wP = new $hs.Func(1);
        hs_sat26D4wP.evaluate = function (hs_t26D4iP) {
            var hs_sat26D4wQ = new $hs.Thunk();
            hs_sat26D4wQ.evaluateOnce = function () {
                var hs_sat26D4wS = new $hs.Thunk();
                hs_sat26D4wS.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziDevice.hs_zdfEqIODeviceType, hs_t26D4iP, $hs.modules.GHCziIOziDevice.hs_RawDevice);
                };
                var hs_sat26D4wR = new $hs.Thunk();
                hs_sat26D4wR.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziDevice.hs_zdfEqIODeviceType, hs_t26D4iP, $hs.modules.GHCziIOziDevice.hs_RegularFile);
                };
                return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26D4wR, hs_sat26D4wS);
            };
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4wQ);
        };
        var hs_sat26D4wO = new $hs.Thunk();
        hs_sat26D4wO.evaluateOnce = function () {
            return hs_devType25u7ax.hscall(hs_fd26D4iM);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4wO, hs_sat26D4wP);
    };
    hs_zdcdup25uFME.evaluate = function (hs_fd26D4iY) {
        var hs_sat26D4wU = new $hs.Func(1);
        hs_sat26D4wU.evaluate = function (hs_newfd26D4ja) {
            var hs_sat26D4x1 = new $hs.Thunk();
            hs_sat26D4x1.evaluateOnce = function () {
                var hs_wild26D4x3 = hs_fd26D4iY;
                if (hs_fd26D4iY.notEvaluated) {
                    hs_wild26D4x3 = hs_fd26D4iY.hscall();
                }
                var hs_ds126D4je = hs_wild26D4x3.data[1];
                var hs_nt26D4jd = hs_newfd26D4ja;
                if (hs_newfd26D4ja.notEvaluated) {
                    hs_nt26D4jd = hs_newfd26D4ja.hscall();
                }
                var $res = new $hs.Data(1);
                $res.data = [hs_nt26D4jd, hs_ds126D4je];
                return $res;
            };
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4x1);
        };
        var hs_sat26D4wT = new $hs.Thunk();
        hs_sat26D4wT.evaluateOnce = function () {
            var hs_sat26D4wW = new $hs.Thunk();
            hs_sat26D4wW.evaluateOnce = function () {
                var hs_sat26D4wY = new $hs.Thunk();
                hs_sat26D4wY.evaluateOnce = function () {
                    var hs_wild26D4x0 = hs_fd26D4iY;
                    if (hs_fd26D4iY.notEvaluated) {
                        hs_wild26D4x0 = hs_fd26D4iY.hscall();
                    }
                    var hs_ds26D4j2 = hs_wild26D4x0.data[0];
                    if (hs_ds26D4j2.notEvaluated) {
                        return hs_ds26D4j2.hscall();
                    } else {
                        return hs_ds26D4j2;
                    }
                };
                return $hs.modules.SystemziPosixziInternals.hs_czudup.hscall(hs_sat26D4wY);
            };
            var hs_sat26D4wV = new $hs.Thunk();
            hs_sat26D4wV.evaluateOnce = function () {
                var hs_sat26D4wX = new $hs.Thunk();
                hs_sat26D4wX.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("GHC.IO.FD.dup\x00");
                };
                return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26D4wX);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D4wV, hs_sat26D4wW);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4wT, hs_sat26D4wU);
    };
    hs_zdcdup225uFN1.evaluate = function (hs_fd26D4jm, hs_fdto26D4js) {
        var hs_sat26D4x6 = new $hs.Thunk();
        hs_sat26D4x6.evaluateOnce = function () {
            var hs_sat26D4xg = new $hs.Thunk();
            hs_sat26D4xg.evaluateOnce = function () {
                var hs_wild26D4xj = hs_fd26D4jm;
                if (hs_fd26D4jm.notEvaluated) {
                    hs_wild26D4xj = hs_fd26D4jm.hscall();
                }
                var hs_ds126D4jH = hs_wild26D4xj.data[1];
                var hs_wild126D4xi = hs_fdto26D4js;
                if (hs_fdto26D4js.notEvaluated) {
                    hs_wild126D4xi = hs_fdto26D4js.hscall();
                }
                var hs_ds226D4jG = hs_wild126D4xi.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_ds226D4jG, hs_ds126D4jH];
                return $res;
            };
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4xg);
        };
        var hs_sat26D4x5 = new $hs.Thunk();
        hs_sat26D4x5.evaluateOnce = function () {
            var hs_sat26D4x8 = new $hs.Thunk();
            hs_sat26D4x8.evaluateOnce = function () {
                var hs_sat26D4xb = new $hs.Thunk();
                hs_sat26D4xb.evaluateOnce = function () {
                    var hs_wild26D4xf = hs_fdto26D4js;
                    if (hs_fdto26D4js.notEvaluated) {
                        hs_wild26D4xf = hs_fdto26D4js.hscall();
                    }
                    var hs_ds26D4jw = hs_wild26D4xf.data[0];
                    if (hs_ds26D4jw.notEvaluated) {
                        return hs_ds26D4jw.hscall();
                    } else {
                        return hs_ds26D4jw;
                    }
                };
                var hs_sat26D4xa = new $hs.Thunk();
                hs_sat26D4xa.evaluateOnce = function () {
                    var hs_wild26D4xd = hs_fd26D4jm;
                    if (hs_fd26D4jm.notEvaluated) {
                        hs_wild26D4xd = hs_fd26D4jm.hscall();
                    }
                    var hs_ds26D4jq = hs_wild26D4xd.data[0];
                    if (hs_ds26D4jq.notEvaluated) {
                        return hs_ds26D4jq.hscall();
                    } else {
                        return hs_ds26D4jq;
                    }
                };
                return $hs.modules.SystemziPosixziInternals.hs_czudup2.hscall(hs_sat26D4xa, hs_sat26D4xb);
            };
            var hs_sat26D4x7 = new $hs.Thunk();
            hs_sat26D4x7.evaluateOnce = function () {
                var hs_sat26D4x9 = new $hs.Thunk();
                hs_sat26D4x9.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("GHC.IO.FD.dup2\x00");
                };
                return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1zu.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26D4x9);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D4x7, hs_sat26D4x8);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4x5, hs_sat26D4x6);
    };
    this.hs_setNonBlockingMode.evaluate = function (hs_fd26D4jM, hs_set26D4jS) {
        var hs_sat26D4xm = new $hs.Thunk();
        hs_sat26D4xm.evaluateOnce = function () {
            var hs_sat26D4xq = new $hs.Thunk();
            hs_sat26D4xq.evaluateOnce = function () {
                var hs_wild26D4xs = hs_fd26D4jM;
                if (hs_fd26D4jM.notEvaluated) {
                    hs_wild26D4xs = hs_fd26D4jM.hscall();
                }
                var hs_ds26D4jZ = hs_wild26D4xs.data[0];
                var hs_tpl26D4k0 = $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziEnum.hs_zdfEnumBool, hs_set26D4jS);
                var $res = new $hs.Data(1);
                $res.data = [hs_ds26D4jZ, hs_tpl26D4k0];
                return $res;
            };
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4xq);
        };
        var hs_sat26D4xl = new $hs.Thunk();
        hs_sat26D4xl.evaluateOnce = function () {
            var hs_sat26D4xn = new $hs.Thunk();
            hs_sat26D4xn.evaluateOnce = function () {
                var hs_wild26D4xp = hs_fd26D4jM;
                if (hs_fd26D4jM.notEvaluated) {
                    hs_wild26D4xp = hs_fd26D4jM.hscall();
                }
                var hs_ds26D4jQ = hs_wild26D4xp.data[0];
                if (hs_ds26D4jQ.notEvaluated) {
                    return hs_ds26D4jQ.hscall();
                } else {
                    return hs_ds26D4jQ;
                }
            };
            return $hs.modules.SystemziPosixziInternals.hs_setNonBlockingFD.hscall(hs_sat26D4xn, hs_set26D4jS);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4xl, hs_sat26D4xm);
    };
    hs_zdcready25uFNN.evaluate = function (hs_fd26D4k9, hs_write26D4ki, hs_msecs26D4km) {
        var hs_sat26D4xv = new $hs.Func(1);
        hs_sat26D4xv.evaluate = function (hs_r26D4kK) {
            var hs_sat26D4xM = new $hs.Thunk();
            hs_sat26D4xM.evaluateOnce = function () {
                var hs_sat26D4xN = new $hs.Thunk();
                hs_sat26D4xN.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.GHCziNum.hs_zdfNumInt, hs_r26D4kK);
                };
                return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziEnum.hs_zdfEnumBool, hs_sat26D4xN);
            };
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4xM);
        };
        var hs_sat26D4xu = new $hs.Thunk();
        hs_sat26D4xu.evaluateOnce = function () {
            var hs_sat26D4xx = new $hs.Thunk();
            hs_sat26D4xx.evaluateOnce = function () {
                var hs_wild26D4xB = hs_fd26D4k9;
                if (hs_fd26D4k9.notEvaluated) {
                    hs_wild26D4xB = hs_fd26D4k9.hscall();
                }
                var hs_ds26D4kd = hs_wild26D4xB.data[0];
                var hs_ds226D4xA = hs_ds26D4kd;
                if (hs_ds26D4kd.notEvaluated) {
                    hs_ds226D4xA = hs_ds26D4kd.hscall();
                }
                var hs_ds326D4ku = hs_ds226D4xA.data[0];
                var hs_sat26D4xD = new $hs.Thunk();
                hs_sat26D4xD.evaluateOnce = function () {
                    var hs_sat26D4xL = new $hs.Thunk();
                    hs_sat26D4xL.evaluateOnce = function () {
                        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziEnum.hs_zdfEnumBool);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D4xL, hs_write26D4ki);
                };
                var hs_sat26D4xE = new $hs.Thunk();
                hs_sat26D4xE.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt);
                };
                var hs_ds426D4xF = $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D4xE, hs_sat26D4xD);
                var hs_ds526D4kv = hs_ds426D4xF.data[0];
                var hs_ds626D4xG = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_msecs26D4km);
                var hs_ds726D4kw = hs_ds626D4xG.data[0];
                var hs_sat26D4xH = new $hs.Thunk();
                hs_sat26D4xH.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                var hs_ds826D4xI = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26D4xH);
                var hs_ds926D4kx = hs_ds826D4xI.data[0];
                var hs_sat26D4xz = new $hs.Func(1);
                hs_sat26D4xz.evaluate = function (hs_ds1026D4ky) {
                    var hs_wild126D4xK = [hs_ds1026D4ky, fdReady(hs_ds326D4ku, hs_ds526D4kv, hs_ds726D4kw, hs_ds926D4kx)];
                    var hs_ds1126D4kD = hs_wild126D4xK[0];
                    var hs_ds1226D4kE = hs_wild126D4xK[1];
                    var hs_sat26D4xJ = new $hs.Data(1);
                    hs_sat26D4xJ.data = [hs_ds1226D4kE];
                    return [hs_ds1126D4kD, hs_sat26D4xJ];
                };
                if (hs_sat26D4xz.notEvaluated) {
                    return hs_sat26D4xz.hscall();
                } else {
                    return hs_sat26D4xz;
                }
            };
            var hs_sat26D4xw = new $hs.Thunk();
            hs_sat26D4xw.evaluateOnce = function () {
                var hs_sat26D4xy = new $hs.Thunk();
                hs_sat26D4xy.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("GHC.IO.FD.ready\x00");
                };
                return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1Retry.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26D4xy);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D4xw, hs_sat26D4xx);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4xu, hs_sat26D4xv);
    };
    hs_zdcisTerminal25uFOy.evaluate = function (hs_fd26D4kQ) {
        var hs_sat26D4xP = new $hs.Thunk();
        hs_sat26D4xP.evaluateOnce = function () {
            var hs_sat26D4xU = new $hs.Thunk();
            hs_sat26D4xU.evaluateOnce = function () {
                return $hs.modules.ForeignziMarshalziUtils.hs_toBool.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt);
            };
            var hs_sat26D4xT = new $hs.Thunk();
            hs_sat26D4xT.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26D4xT, hs_sat26D4xU);
        };
        var hs_sat26D4xO = new $hs.Thunk();
        hs_sat26D4xO.evaluateOnce = function () {
            var hs_sat26D4xQ = new $hs.Thunk();
            hs_sat26D4xQ.evaluateOnce = function () {
                var hs_wild26D4xS = hs_fd26D4kQ;
                if (hs_fd26D4kQ.notEvaluated) {
                    hs_wild26D4xS = hs_fd26D4kQ.hscall();
                }
                var hs_ds26D4kU = hs_wild26D4xS.data[0];
                if (hs_ds26D4kU.notEvaluated) {
                    return hs_ds26D4kU.hscall();
                } else {
                    return hs_ds26D4kU;
                }
            };
            return $hs.modules.SystemziPosixziInternals.hs_czuisatty.hscall(hs_sat26D4xQ);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4xO, hs_sat26D4xP);
    };
    this.hs_zdfIODeviceFD.data = [hs_zdcready25uFNN, hs_zdcclose25uFKd, hs_zdcisTerminal25uFOy, hs_zdcisSeekable25uFMu, hs_zdcseek25uFKw, hs_zdctell25uFKO, hs_zdcgetSizze25uFI2, hs_setSizze25u7aw, hs_zdcsetEcho25uFHS, hs_zdcgetEcho25uFHK, hs_zdcsetRaw25uFHz, hs_devType25u7ax, hs_zdcdup25uFME, hs_zdcdup225uFN1];
    this.hs_readRawBufferPtr.evaluate = function (hs_loc26D4li, hs_fd26D4l5, hs_buf26D4lA, hs_off26D4lB, hs_len26D4lD) {
        var hs_fd126D4lk = hs_fd26D4l5;
        if (hs_fd26D4l5.notEvaluated) {
            hs_fd126D4lk = hs_fd26D4l5.hscall();
        }
        var hs_dozuread26D4lt = new $hs.Func(3);
        hs_dozuread26D4lt.evaluate = function (hs_zddIntegral26D4ld, hs_zddNum26D4le, hs_eta26D4lj) {
            var hs_sat26D4yD = new $hs.Thunk();
            hs_sat26D4yD.evaluateOnce = function () {
                var hs_sat26D4yF = new $hs.Thunk();
                hs_sat26D4yF.evaluateOnce = function () {
                    var hs_sat26D4yH = new $hs.Thunk();
                    hs_sat26D4yH.evaluateOnce = function () {
                        var hs_sat26D4yI = new $hs.Thunk();
                        hs_sat26D4yI.evaluateOnce = function () {
                            var hs_wild26D4yK = hs_fd126D4lk;
                            if (hs_fd126D4lk.notEvaluated) {
                                hs_wild26D4yK = hs_fd126D4lk.hscall();
                            }
                            var hs_ds26D4lo = hs_wild26D4yK.data[0];
                            if (hs_ds26D4lo.notEvaluated) {
                                return hs_ds26D4lo.hscall();
                            } else {
                                return hs_ds26D4lo;
                            }
                        };
                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.SystemziPosixziTypes.hs_zdfNumFd, hs_sat26D4yI);
                    };
                    return $hs.modules.GHCziConcziIO.hs_threadWaitRead.hscall(hs_sat26D4yH);
                };
                var hs_sat26D4yE = new $hs.Thunk();
                hs_sat26D4yE.evaluateOnce = function () {
                    var hs_sat26D4yG = $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26D4ld);
                    return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_sat26D4yG);
                };
                return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1RetryMayBlock.hscall(hs_sat26D4yE, hs_loc26D4li, hs_eta26D4lj, hs_sat26D4yF);
            };
            var hs_sat26D4yC = new $hs.Thunk();
            hs_sat26D4yC.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall(hs_zddIntegral26D4ld, hs_zddNum26D4le);
            };
            return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.GHCziBase.hs_zdfFunctorIO, hs_sat26D4yC, hs_sat26D4yD);
        };
        var hs_unsafezuread26D4lF = new $hs.Thunk();
        hs_unsafezuread26D4lF.evaluateOnce = function () {
            var hs_sat26D4yx = new $hs.Thunk();
            hs_sat26D4yx.evaluateOnce = function () {
                var hs_sat26D4yz = new $hs.Thunk();
                hs_sat26D4yz.evaluateOnce = function () {
                    return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_buf26D4lA, hs_off26D4lB);
                };
                var hs_sat26D4yy = new $hs.Thunk();
                hs_sat26D4yy.evaluateOnce = function () {
                    var hs_wild26D4yB = hs_fd126D4lk;
                    if (hs_fd126D4lk.notEvaluated) {
                        hs_wild26D4yB = hs_fd126D4lk.hscall();
                    }
                    var hs_ds26D4ly = hs_wild26D4yB.data[0];
                    if (hs_ds26D4ly.notEvaluated) {
                        return hs_ds26D4ly.hscall();
                    } else {
                        return hs_ds26D4ly;
                    }
                };
                return $hs.modules.SystemziPosixziInternals.hs_czuread.hscall(hs_sat26D4yy, hs_sat26D4yz, hs_len26D4lD);
            };
            return hs_dozuread26D4lt.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralCSsizze, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26D4yx);
        };
        var hs_read26D4lV = new $hs.Thunk();
        hs_read26D4lV.evaluateOnce = function () {
            var hs_wild26D4yq = [$hs.modules.GHCziPrim.hs_realWorldzh, rtsSupportsBoundThreads()];
            var hs_ds126D4lM = hs_wild26D4yq[1];
            var hs_wild126D4yp = hs_ds126D4lM;
            if (hs_ds126D4lM.notEvaluated) {
                hs_wild126D4yp = hs_ds126D4lM.hscall();
            }
            switch (hs_wild126D4yp) {
            case 0:
                if (hs_unsafezuread26D4lF.notEvaluated) {
                    return hs_unsafezuread26D4lF.hscall();
                } else {
                    return hs_unsafezuread26D4lF;
                }
            default:
                var hs_sat26D4ys = new $hs.Thunk();
                hs_sat26D4ys.evaluateOnce = function () {
                    var hs_sat26D4yu = new $hs.Thunk();
                    hs_sat26D4yu.evaluateOnce = function () {
                        return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_buf26D4lA, hs_off26D4lB);
                    };
                    var hs_sat26D4yt = new $hs.Thunk();
                    hs_sat26D4yt.evaluateOnce = function () {
                        var hs_wild226D4yw = hs_fd126D4lk;
                        if (hs_fd126D4lk.notEvaluated) {
                            hs_wild226D4yw = hs_fd126D4lk.hscall();
                        }
                        var hs_ds226D4lR = hs_wild226D4yw.data[0];
                        if (hs_ds226D4lR.notEvaluated) {
                            return hs_ds226D4lR.hscall();
                        } else {
                            return hs_ds226D4lR;
                        }
                    };
                    return $hs.modules.SystemziPosixziInternals.hs_czusafezuread.hscall(hs_sat26D4yt, hs_sat26D4yu, hs_len26D4lD);
                };
                return hs_dozuread26D4lt.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralCSsizze, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26D4ys);
            }
        };
        var hs_sat26D4xX = new $hs.Data(1);
        hs_sat26D4xX.data = [0];
        var hs_sat26D4xY = new $hs.Thunk();
        hs_sat26D4xY.evaluateOnce = function () {
            var hs_wild26D4yo = hs_fd126D4lk;
            if (hs_fd126D4lk.notEvaluated) {
                hs_wild26D4yo = hs_fd126D4lk.hscall();
            }
            var hs_ds126D4lZ = hs_wild26D4yo.data[1];
            if (hs_ds126D4lZ.notEvaluated) {
                return hs_ds126D4lZ.hscall();
            } else {
                return hs_ds126D4lZ;
            }
        };
        var hs_wild26D4xZ = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_sat26D4xY, hs_sat26D4xX);
        switch (hs_wild26D4xZ.tag) {
        case 1:
            var hs_sat26D4y1 = new $hs.Func(1);
            hs_sat26D4y1.evaluate = function (hs_r26D4mA) {
                var hs_sat26D4yf = new $hs.Thunk();
                hs_sat26D4yf.evaluateOnce = function () {
                    var hs_sat26D4ym = new $hs.Thunk();
                    hs_sat26D4ym.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26D4ym);
                };
                var hs_wild126D4yg = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_r26D4mA, hs_sat26D4yf);
                switch (hs_wild126D4yg.tag) {
                case 1:
                    var hs_sat26D4yh = new $hs.Thunk();
                    hs_sat26D4yh.evaluateOnce = function () {
                        var hs_sat26D4yi = new $hs.Thunk();
                        hs_sat26D4yi.evaluateOnce = function () {
                            var hs_sat26D4yj = new $hs.Thunk();
                            hs_sat26D4yj.evaluateOnce = function () {
                                var hs_wild226D4yl = hs_fd126D4lk;
                                if (hs_fd126D4lk.notEvaluated) {
                                    hs_wild226D4yl = hs_fd126D4lk.hscall();
                                }
                                var hs_ds26D4mH = hs_wild226D4yl.data[0];
                                if (hs_ds26D4mH.notEvaluated) {
                                    return hs_ds26D4mH.hscall();
                                } else {
                                    return hs_ds26D4mH;
                                }
                            };
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.SystemziPosixziTypes.hs_zdfNumFd, hs_sat26D4yj);
                        };
                        return $hs.modules.GHCziConcziIO.hs_threadWaitRead.hscall(hs_sat26D4yi);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4yh, hs_read26D4lV);
                case 2:
                    if (hs_read26D4lV.notEvaluated) {
                        return hs_read26D4lV.hscall();
                    } else {
                        return hs_read26D4lV;
                    }
                }
            };
            var hs_sat26D4y0 = new $hs.Thunk();
            hs_sat26D4y0.evaluateOnce = function () {
                var hs_sat26D4y2 = new $hs.Thunk();
                hs_sat26D4y2.evaluateOnce = function () {
                    var hs_wild126D4y5 = hs_fd126D4lk;
                    if (hs_fd126D4lk.notEvaluated) {
                        hs_wild126D4y5 = hs_fd126D4lk.hscall();
                    }
                    var hs_ds26D4m6 = hs_wild126D4y5.data[0];
                    var hs_ds226D4y4 = hs_ds26D4m6;
                    if (hs_ds26D4m6.notEvaluated) {
                        hs_ds226D4y4 = hs_ds26D4m6.hscall();
                    }
                    var hs_ds326D4mk = hs_ds226D4y4.data[0];
                    var hs_sat26D4y7 = new $hs.Thunk();
                    hs_sat26D4y7.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    var hs_ds426D4y8 = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26D4y7);
                    var hs_ds526D4ml = hs_ds426D4y8.data[0];
                    var hs_sat26D4y9 = new $hs.Thunk();
                    hs_sat26D4y9.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    var hs_ds626D4ya = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26D4y9);
                    var hs_ds726D4mm = hs_ds626D4ya.data[0];
                    var hs_sat26D4yb = new $hs.Thunk();
                    hs_sat26D4yb.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    var hs_ds826D4yc = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26D4yb);
                    var hs_ds926D4mn = hs_ds826D4yc.data[0];
                    var hs_sat26D4y3 = new $hs.Func(1);
                    hs_sat26D4y3.evaluate = function (hs_ds1026D4mo) {
                        var hs_wild226D4ye = [hs_ds1026D4mo, fdReady(hs_ds326D4mk, hs_ds526D4ml, hs_ds726D4mm, hs_ds926D4mn)];
                        var hs_ds1126D4mt = hs_wild226D4ye[0];
                        var hs_ds1226D4mu = hs_wild226D4ye[1];
                        var hs_sat26D4yd = new $hs.Data(1);
                        hs_sat26D4yd.data = [hs_ds1226D4mu];
                        return [hs_ds1126D4mt, hs_sat26D4yd];
                    };
                    if (hs_sat26D4y3.notEvaluated) {
                        return hs_sat26D4y3.hscall();
                    } else {
                        return hs_sat26D4y3;
                    }
                };
                return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_loc26D4li, hs_sat26D4y2);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4y0, hs_sat26D4y1);
        case 2:
            if (hs_unsafezuread26D4lF.notEvaluated) {
                return hs_unsafezuread26D4lF.hscall();
            } else {
                return hs_unsafezuread26D4lF;
            }
        }
    };
    hs_zdcread25uFQw.evaluate = function (hs_fd26D4mR, hs_ptr26D4mS, hs_bytes26D4mU) {
        var hs_sat26D4yM = new $hs.Func(1);
        hs_sat26D4yM.evaluate = function (hs_r26D4mY) {
            var hs_sat26D4yQ = new $hs.Thunk();
            hs_sat26D4yQ.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziNum.hs_zdfNumInt, hs_r26D4mY);
            };
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4yQ);
        };
        var hs_sat26D4yL = new $hs.Thunk();
        hs_sat26D4yL.evaluateOnce = function () {
            var hs_sat26D4yO = new $hs.Thunk();
            hs_sat26D4yO.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_bytes26D4mU);
            };
            var hs_sat26D4yP = new $hs.Data(1);
            hs_sat26D4yP.data = [0];
            var hs_sat26D4yN = new $hs.Thunk();
            hs_sat26D4yN.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("GHC.IO.FD.fdRead\x00");
            };
            return $hs.modules.GHCziIOziFD.hs_readRawBufferPtr.hscall(hs_sat26D4yN, hs_fd26D4mR, hs_ptr26D4mS, hs_sat26D4yP, hs_sat26D4yO);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4yL, hs_sat26D4yM);
    };
    this.hs_writeRawBufferPtr.evaluate = function (hs_loc26D4nj, hs_fd26D4n6, hs_buf26D4nB, hs_off26D4nC, hs_len26D4nE) {
        var hs_fd126D4nl = hs_fd26D4n6;
        if (hs_fd26D4n6.notEvaluated) {
            hs_fd126D4nl = hs_fd26D4n6.hscall();
        }
        var hs_dozuwrite26D4nu = new $hs.Func(3);
        hs_dozuwrite26D4nu.evaluate = function (hs_zddIntegral26D4ne, hs_zddNum26D4nf, hs_eta26D4nk) {
            var hs_sat26D4zy = new $hs.Thunk();
            hs_sat26D4zy.evaluateOnce = function () {
                var hs_sat26D4zA = new $hs.Thunk();
                hs_sat26D4zA.evaluateOnce = function () {
                    var hs_sat26D4zC = new $hs.Thunk();
                    hs_sat26D4zC.evaluateOnce = function () {
                        var hs_sat26D4zD = new $hs.Thunk();
                        hs_sat26D4zD.evaluateOnce = function () {
                            var hs_wild26D4zF = hs_fd126D4nl;
                            if (hs_fd126D4nl.notEvaluated) {
                                hs_wild26D4zF = hs_fd126D4nl.hscall();
                            }
                            var hs_ds26D4np = hs_wild26D4zF.data[0];
                            if (hs_ds26D4np.notEvaluated) {
                                return hs_ds26D4np.hscall();
                            } else {
                                return hs_ds26D4np;
                            }
                        };
                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.SystemziPosixziTypes.hs_zdfNumFd, hs_sat26D4zD);
                    };
                    return $hs.modules.GHCziConcziIO.hs_threadWaitWrite.hscall(hs_sat26D4zC);
                };
                var hs_sat26D4zz = new $hs.Thunk();
                hs_sat26D4zz.evaluateOnce = function () {
                    var hs_sat26D4zB = $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26D4ne);
                    return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_sat26D4zB);
                };
                return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1RetryMayBlock.hscall(hs_sat26D4zz, hs_loc26D4nj, hs_eta26D4nk, hs_sat26D4zA);
            };
            var hs_sat26D4zx = new $hs.Thunk();
            hs_sat26D4zx.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall(hs_zddIntegral26D4ne, hs_zddNum26D4nf);
            };
            return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.GHCziBase.hs_zdfFunctorIO, hs_sat26D4zx, hs_sat26D4zy);
        };
        var hs_unsafezuwrite26D4nG = new $hs.Thunk();
        hs_unsafezuwrite26D4nG.evaluateOnce = function () {
            var hs_sat26D4zs = new $hs.Thunk();
            hs_sat26D4zs.evaluateOnce = function () {
                var hs_sat26D4zu = new $hs.Thunk();
                hs_sat26D4zu.evaluateOnce = function () {
                    return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_buf26D4nB, hs_off26D4nC);
                };
                var hs_sat26D4zt = new $hs.Thunk();
                hs_sat26D4zt.evaluateOnce = function () {
                    var hs_wild26D4zw = hs_fd126D4nl;
                    if (hs_fd126D4nl.notEvaluated) {
                        hs_wild26D4zw = hs_fd126D4nl.hscall();
                    }
                    var hs_ds26D4nz = hs_wild26D4zw.data[0];
                    if (hs_ds26D4nz.notEvaluated) {
                        return hs_ds26D4nz.hscall();
                    } else {
                        return hs_ds26D4nz;
                    }
                };
                return $hs.modules.SystemziPosixziInternals.hs_czuwrite.hscall(hs_sat26D4zt, hs_sat26D4zu, hs_len26D4nE);
            };
            return hs_dozuwrite26D4nu.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralCSsizze, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26D4zs);
        };
        var hs_write26D4nW = new $hs.Thunk();
        hs_write26D4nW.evaluateOnce = function () {
            var hs_wild26D4zl = [$hs.modules.GHCziPrim.hs_realWorldzh, rtsSupportsBoundThreads()];
            var hs_ds126D4nN = hs_wild26D4zl[1];
            var hs_wild126D4zk = hs_ds126D4nN;
            if (hs_ds126D4nN.notEvaluated) {
                hs_wild126D4zk = hs_ds126D4nN.hscall();
            }
            switch (hs_wild126D4zk) {
            case 0:
                if (hs_unsafezuwrite26D4nG.notEvaluated) {
                    return hs_unsafezuwrite26D4nG.hscall();
                } else {
                    return hs_unsafezuwrite26D4nG;
                }
            default:
                var hs_sat26D4zn = new $hs.Thunk();
                hs_sat26D4zn.evaluateOnce = function () {
                    var hs_sat26D4zp = new $hs.Thunk();
                    hs_sat26D4zp.evaluateOnce = function () {
                        return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_buf26D4nB, hs_off26D4nC);
                    };
                    var hs_sat26D4zo = new $hs.Thunk();
                    hs_sat26D4zo.evaluateOnce = function () {
                        var hs_wild226D4zr = hs_fd126D4nl;
                        if (hs_fd126D4nl.notEvaluated) {
                            hs_wild226D4zr = hs_fd126D4nl.hscall();
                        }
                        var hs_ds226D4nS = hs_wild226D4zr.data[0];
                        if (hs_ds226D4nS.notEvaluated) {
                            return hs_ds226D4nS.hscall();
                        } else {
                            return hs_ds226D4nS;
                        }
                    };
                    return $hs.modules.SystemziPosixziInternals.hs_czusafezuwrite.hscall(hs_sat26D4zo, hs_sat26D4zp, hs_len26D4nE);
                };
                return hs_dozuwrite26D4nu.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralCSsizze, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26D4zn);
            }
        };
        var hs_sat26D4yT = new $hs.Data(1);
        hs_sat26D4yT.data = [0];
        var hs_sat26D4yU = new $hs.Thunk();
        hs_sat26D4yU.evaluateOnce = function () {
            var hs_wild26D4zj = hs_fd126D4nl;
            if (hs_fd126D4nl.notEvaluated) {
                hs_wild26D4zj = hs_fd126D4nl.hscall();
            }
            var hs_ds126D4o0 = hs_wild26D4zj.data[1];
            if (hs_ds126D4o0.notEvaluated) {
                return hs_ds126D4o0.hscall();
            } else {
                return hs_ds126D4o0;
            }
        };
        var hs_wild26D4yV = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_sat26D4yU, hs_sat26D4yT);
        switch (hs_wild26D4yV.tag) {
        case 1:
            var hs_sat26D4yX = new $hs.Func(1);
            hs_sat26D4yX.evaluate = function (hs_r26D4oA) {
                var hs_sat26D4za = new $hs.Thunk();
                hs_sat26D4za.evaluateOnce = function () {
                    var hs_sat26D4zh = new $hs.Thunk();
                    hs_sat26D4zh.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26D4zh);
                };
                var hs_wild126D4zb = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_r26D4oA, hs_sat26D4za);
                switch (hs_wild126D4zb.tag) {
                case 1:
                    var hs_sat26D4zc = new $hs.Thunk();
                    hs_sat26D4zc.evaluateOnce = function () {
                        var hs_sat26D4zd = new $hs.Thunk();
                        hs_sat26D4zd.evaluateOnce = function () {
                            var hs_sat26D4ze = new $hs.Thunk();
                            hs_sat26D4ze.evaluateOnce = function () {
                                var hs_wild226D4zg = hs_fd126D4nl;
                                if (hs_fd126D4nl.notEvaluated) {
                                    hs_wild226D4zg = hs_fd126D4nl.hscall();
                                }
                                var hs_ds26D4oH = hs_wild226D4zg.data[0];
                                if (hs_ds26D4oH.notEvaluated) {
                                    return hs_ds26D4oH.hscall();
                                } else {
                                    return hs_ds26D4oH;
                                }
                            };
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.SystemziPosixziTypes.hs_zdfNumFd, hs_sat26D4ze);
                        };
                        return $hs.modules.GHCziConcziIO.hs_threadWaitWrite.hscall(hs_sat26D4zd);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4zc, hs_write26D4nW);
                case 2:
                    if (hs_write26D4nW.notEvaluated) {
                        return hs_write26D4nW.hscall();
                    } else {
                        return hs_write26D4nW;
                    }
                }
            };
            var hs_sat26D4yW = new $hs.Thunk();
            hs_sat26D4yW.evaluateOnce = function () {
                var hs_wild126D4z0 = hs_fd126D4nl;
                if (hs_fd126D4nl.notEvaluated) {
                    hs_wild126D4z0 = hs_fd126D4nl.hscall();
                }
                var hs_ds26D4o7 = hs_wild126D4z0.data[0];
                var hs_ds226D4yZ = hs_ds26D4o7;
                if (hs_ds26D4o7.notEvaluated) {
                    hs_ds226D4yZ = hs_ds26D4o7.hscall();
                }
                var hs_ds326D4ol = hs_ds226D4yZ.data[0];
                var hs_sat26D4z2 = new $hs.Thunk();
                hs_sat26D4z2.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                var hs_ds426D4z3 = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26D4z2);
                var hs_ds526D4om = hs_ds426D4z3.data[0];
                var hs_sat26D4z4 = new $hs.Thunk();
                hs_sat26D4z4.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                var hs_ds626D4z5 = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26D4z4);
                var hs_ds726D4on = hs_ds626D4z5.data[0];
                var hs_sat26D4z6 = new $hs.Thunk();
                hs_sat26D4z6.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                var hs_ds826D4z7 = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26D4z6);
                var hs_ds926D4oo = hs_ds826D4z7.data[0];
                var hs_sat26D4yY = new $hs.Func(1);
                hs_sat26D4yY.evaluate = function (hs_ds1026D4op) {
                    var hs_wild226D4z9 = [hs_ds1026D4op, fdReady(hs_ds326D4ol, hs_ds526D4om, hs_ds726D4on, hs_ds926D4oo)];
                    var hs_ds1126D4ou = hs_wild226D4z9[0];
                    var hs_ds1226D4ov = hs_wild226D4z9[1];
                    var hs_sat26D4z8 = new $hs.Data(1);
                    hs_sat26D4z8.data = [hs_ds1226D4ov];
                    return [hs_ds1126D4ou, hs_sat26D4z8];
                };
                if (hs_sat26D4yY.notEvaluated) {
                    return hs_sat26D4yY.hscall();
                } else {
                    return hs_sat26D4yY;
                }
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4yW, hs_sat26D4yX);
        case 2:
            if (hs_unsafezuwrite26D4nG.notEvaluated) {
                return hs_unsafezuwrite26D4nG.hscall();
            } else {
                return hs_unsafezuwrite26D4nG;
            }
        }
    };
    hs_fdWrite25u7aI.evaluate = function (hs_fd26D4oQ, hs_ptr26D4oR, hs_bytes26D4oT) {
        var hs_sat26D4zH = new $hs.Func(1);
        hs_sat26D4zH.evaluate = function (hs_res26D4oY) {
            var hs_reszq26D4oZ = new $hs.Thunk();
            hs_reszq26D4oZ.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.GHCziNum.hs_zdfNumInt, hs_res26D4oY);
            };
            var hs_wild26D4zM = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_reszq26D4oZ, hs_bytes26D4oT);
            switch (hs_wild26D4zM.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            case 2:
                var hs_sat26D4zN = new $hs.Thunk();
                hs_sat26D4zN.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_bytes26D4oT, hs_reszq26D4oZ);
                };
                var hs_sat26D4zL = new $hs.Thunk();
                hs_sat26D4zL.evaluateOnce = function () {
                    return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26D4oR, hs_reszq26D4oZ);
                };
                return hs_fdWrite25u7aI.hscall(hs_fd26D4oQ, hs_sat26D4zL, hs_sat26D4zN);
            }
        };
        var hs_sat26D4zG = new $hs.Thunk();
        hs_sat26D4zG.evaluateOnce = function () {
            var hs_sat26D4zJ = new $hs.Thunk();
            hs_sat26D4zJ.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_bytes26D4oT);
            };
            var hs_sat26D4zK = new $hs.Data(1);
            hs_sat26D4zK.data = [0];
            var hs_sat26D4zI = new $hs.Thunk();
            hs_sat26D4zI.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("GHC.IO.FD.fdWrite\x00");
            };
            return $hs.modules.GHCziIOziFD.hs_writeRawBufferPtr.hscall(hs_sat26D4zI, hs_fd26D4oQ, hs_ptr26D4oR, hs_sat26D4zK, hs_sat26D4zJ);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4zG, hs_sat26D4zH);
    };
    hs_throwErrnoIfMinus1RetryOnBlock25u7aP.evaluate = function (hs_loc26D4pk, hs_f26D4p7, hs_onzublock26D4pl) {
        var hs_sat26D4zO = new $hs.Func(1);
        hs_sat26D4zO.evaluate = function (hs_res26D4p9) {
            var hs_sat26D4zQ = new $hs.Thunk();
            hs_sat26D4zQ.evaluateOnce = function () {
                var hs_sat26D4zW = new $hs.Thunk();
                hs_sat26D4zW.evaluateOnce = function () {
                    var hs_sat26D4zX = new $hs.Thunk();
                    hs_sat26D4zX.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCSsizze, hs_sat26D4zX);
                };
                return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCSsizze, hs_sat26D4zW);
            };
            var hs_wild26D4zR = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.SystemziPosixziTypes.hs_zdfEqCSsizze, hs_res26D4p9, hs_sat26D4zQ);
            switch (hs_wild26D4zR.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_res26D4p9);
            case 2:
                var hs_sat26D4zP = new $hs.Func(1);
                hs_sat26D4zP.evaluate = function (hs_err26D4pf) {
                    var hs_wild126D4zS = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_err26D4pf, $hs.modules.ForeignziCziError.hs_eINTR);
                    switch (hs_wild126D4zS.tag) {
                    case 1:
                        var hs_sat26D4zT = new $hs.Thunk();
                        hs_sat26D4zT.evaluateOnce = function () {
                            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_err26D4pf, $hs.modules.ForeignziCziError.hs_eAGAIN);
                        };
                        var hs_sat26D4zU = new $hs.Thunk();
                        hs_sat26D4zU.evaluateOnce = function () {
                            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_err26D4pf, $hs.modules.ForeignziCziError.hs_eWOULDBLOCK);
                        };
                        var hs_wild226D4zV = $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26D4zU, hs_sat26D4zT);
                        switch (hs_wild226D4zV.tag) {
                        case 1:
                            return $hs.modules.ForeignziCziError.hs_throwErrno.hscall(hs_loc26D4pk);
                        case 2:
                            if (hs_onzublock26D4pl.notEvaluated) {
                                return hs_onzublock26D4pl.hscall();
                            } else {
                                return hs_onzublock26D4pl;
                            }
                        }
                    case 2:
                        return hs_throwErrnoIfMinus1RetryOnBlock25u7aP.hscall(hs_loc26D4pk, hs_f26D4p7, hs_onzublock26D4pl);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.ForeignziCziError.hs_getErrno, hs_sat26D4zP);
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_f26D4p7, hs_sat26D4zO);
    };
    this.hs_readRawBufferPtrNoBlock.evaluate = function (hs_loc26D4pA, hs_fd26D4pt, hs_buf26D4q6, hs_off26D4q7, hs_len26D4q9) {
        var hs_fd126D4q0 = hs_fd26D4pt;
        if (hs_fd26D4pt.notEvaluated) {
            hs_fd126D4q0 = hs_fd26D4pt.hscall();
        }
        var hs_dozuread26D4pY = new $hs.Func(2);
        hs_dozuread26D4pY.evaluate = function (hs_zddNum26D4pQ, hs_call26D4pB) {
            var hs_sat26D4Ay = new $hs.Func(1);
            hs_sat26D4Ay.evaluate = function (hs_r26D4pI) {
                var hs_sat26D4AE = new $hs.Thunk();
                hs_sat26D4AE.evaluateOnce = function () {
                    var hs_sat26D4AO = new $hs.Thunk();
                    hs_sat26D4AO.evaluateOnce = function () {
                        var hs_sat26D4AP = new $hs.Thunk();
                        hs_sat26D4AP.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCSsizze, hs_sat26D4AP);
                    };
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCSsizze, hs_sat26D4AO);
                };
                var hs_wild26D4AF = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.SystemziPosixziTypes.hs_zdfEqCSsizze, hs_r26D4pI, hs_sat26D4AE);
                switch (hs_wild26D4AF.tag) {
                case 1:
                    var hs_sat26D4AI = new $hs.Thunk();
                    hs_sat26D4AI.evaluateOnce = function () {
                        var hs_sat26D4AN = new $hs.Thunk();
                        hs_sat26D4AN.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCSsizze, hs_sat26D4AN);
                    };
                    var hs_wild126D4AJ = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.SystemziPosixziTypes.hs_zdfEqCSsizze, hs_r26D4pI, hs_sat26D4AI);
                    switch (hs_wild126D4AJ.tag) {
                    case 1:
                        var hs_sat26D4AM = new $hs.Thunk();
                        hs_sat26D4AM.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralCSsizze, hs_zddNum26D4pQ, hs_r26D4pI);
                        };
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4AM);
                    case 2:
                        var hs_sat26D4AH = new $hs.Thunk();
                        hs_sat26D4AH.evaluateOnce = function () {
                            var hs_sat26D4AK = new $hs.Thunk();
                            hs_sat26D4AK.evaluateOnce = function () {
                                var hs_sat26D4AL = new $hs.Thunk();
                                hs_sat26D4AL.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                };
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26D4pQ, hs_sat26D4AL);
                            };
                            return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum26D4pQ, hs_sat26D4AK);
                        };
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4AH);
                    }
                case 2:
                    var hs_sat26D4AD = new $hs.Thunk();
                    hs_sat26D4AD.evaluateOnce = function () {
                        var hs_sat26D4AG = new $hs.Thunk();
                        hs_sat26D4AG.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26D4pQ, hs_sat26D4AG);
                    };
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4AD);
                }
            };
            var hs_sat26D4Ax = new $hs.Thunk();
            hs_sat26D4Ax.evaluateOnce = function () {
                var hs_sat26D4Az = new $hs.Thunk();
                hs_sat26D4Az.evaluateOnce = function () {
                    var hs_sat26D4AA = new $hs.Thunk();
                    hs_sat26D4AA.evaluateOnce = function () {
                        var hs_sat26D4AB = new $hs.Thunk();
                        hs_sat26D4AB.evaluateOnce = function () {
                            var hs_sat26D4AC = new $hs.Thunk();
                            hs_sat26D4AC.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCSsizze, hs_sat26D4AC);
                        };
                        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCSsizze, hs_sat26D4AB);
                    };
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4AA);
                };
                return hs_throwErrnoIfMinus1RetryOnBlock25u7aP.hscall(hs_loc26D4pA, hs_call26D4pB, hs_sat26D4Az);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4Ax, hs_sat26D4Ay);
        };
        var hs_safezuread26D4qb = new $hs.Thunk();
        hs_safezuread26D4qb.evaluateOnce = function () {
            var hs_sat26D4As = new $hs.Thunk();
            hs_sat26D4As.evaluateOnce = function () {
                var hs_sat26D4Au = new $hs.Thunk();
                hs_sat26D4Au.evaluateOnce = function () {
                    return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_buf26D4q6, hs_off26D4q7);
                };
                var hs_sat26D4At = new $hs.Thunk();
                hs_sat26D4At.evaluateOnce = function () {
                    var hs_wild26D4Aw = hs_fd126D4q0;
                    if (hs_fd126D4q0.notEvaluated) {
                        hs_wild26D4Aw = hs_fd126D4q0.hscall();
                    }
                    var hs_ds26D4q4 = hs_wild26D4Aw.data[0];
                    if (hs_ds26D4q4.notEvaluated) {
                        return hs_ds26D4q4.hscall();
                    } else {
                        return hs_ds26D4q4;
                    }
                };
                return $hs.modules.SystemziPosixziInternals.hs_czusafezuread.hscall(hs_sat26D4At, hs_sat26D4Au, hs_len26D4q9);
            };
            return hs_dozuread26D4pY.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26D4As);
        };
        var hs_sat26D4A1 = new $hs.Data(1);
        hs_sat26D4A1.data = [0];
        var hs_sat26D4A2 = new $hs.Thunk();
        hs_sat26D4A2.evaluateOnce = function () {
            var hs_wild26D4Ar = hs_fd126D4q0;
            if (hs_fd126D4q0.notEvaluated) {
                hs_wild26D4Ar = hs_fd126D4q0.hscall();
            }
            var hs_ds126D4qf = hs_wild26D4Ar.data[1];
            if (hs_ds126D4qf.notEvaluated) {
                return hs_ds126D4qf.hscall();
            } else {
                return hs_ds126D4qf;
            }
        };
        var hs_wild26D4A3 = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_sat26D4A2, hs_sat26D4A1);
        switch (hs_wild26D4A3.tag) {
        case 1:
            var hs_sat26D4A9 = new $hs.Func(1);
            hs_sat26D4A9.evaluate = function (hs_r26D4qP) {
                var hs_sat26D4Am = new $hs.Thunk();
                hs_sat26D4Am.evaluateOnce = function () {
                    var hs_sat26D4Ap = new $hs.Thunk();
                    hs_sat26D4Ap.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26D4Ap);
                };
                var hs_wild126D4An = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_r26D4qP, hs_sat26D4Am);
                switch (hs_wild126D4An.tag) {
                case 1:
                    var hs_sat26D4Ao = new $hs.Data(1);
                    hs_sat26D4Ao.data = [0];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4Ao);
                case 2:
                    if (hs_safezuread26D4qb.notEvaluated) {
                        return hs_safezuread26D4qb.hscall();
                    } else {
                        return hs_safezuread26D4qb;
                    }
                }
            };
            var hs_sat26D4A8 = new $hs.Thunk();
            hs_sat26D4A8.evaluateOnce = function () {
                var hs_wild126D4Ac = hs_fd126D4q0;
                if (hs_fd126D4q0.notEvaluated) {
                    hs_wild126D4Ac = hs_fd126D4q0.hscall();
                }
                var hs_ds26D4qm = hs_wild126D4Ac.data[0];
                var hs_ds226D4Ab = hs_ds26D4qm;
                if (hs_ds26D4qm.notEvaluated) {
                    hs_ds226D4Ab = hs_ds26D4qm.hscall();
                }
                var hs_ds326D4qA = hs_ds226D4Ab.data[0];
                var hs_sat26D4Ae = new $hs.Thunk();
                hs_sat26D4Ae.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                var hs_ds426D4Af = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26D4Ae);
                var hs_ds526D4qB = hs_ds426D4Af.data[0];
                var hs_sat26D4Ag = new $hs.Thunk();
                hs_sat26D4Ag.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                var hs_ds626D4Ah = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26D4Ag);
                var hs_ds726D4qC = hs_ds626D4Ah.data[0];
                var hs_sat26D4Ai = new $hs.Thunk();
                hs_sat26D4Ai.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                var hs_ds826D4Aj = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26D4Ai);
                var hs_ds926D4qD = hs_ds826D4Aj.data[0];
                var hs_sat26D4Aa = new $hs.Func(1);
                hs_sat26D4Aa.evaluate = function (hs_ds1026D4qE) {
                    var hs_wild226D4Al = [hs_ds1026D4qE, fdReady(hs_ds326D4qA, hs_ds526D4qB, hs_ds726D4qC, hs_ds926D4qD)];
                    var hs_ds1126D4qJ = hs_wild226D4Al[0];
                    var hs_ds1226D4qK = hs_wild226D4Al[1];
                    var hs_sat26D4Ak = new $hs.Data(1);
                    hs_sat26D4Ak.data = [hs_ds1226D4qK];
                    return [hs_ds1126D4qJ, hs_sat26D4Ak];
                };
                if (hs_sat26D4Aa.notEvaluated) {
                    return hs_sat26D4Aa.hscall();
                } else {
                    return hs_sat26D4Aa;
                }
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4A8, hs_sat26D4A9);
        case 2:
            var hs_sat26D4zY = new $hs.Thunk();
            hs_sat26D4zY.evaluateOnce = function () {
                var hs_sat26D4A5 = new $hs.Thunk();
                hs_sat26D4A5.evaluateOnce = function () {
                    return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_buf26D4q6, hs_off26D4q7);
                };
                var hs_sat26D4A4 = new $hs.Thunk();
                hs_sat26D4A4.evaluateOnce = function () {
                    var hs_wild126D4A7 = hs_fd126D4q0;
                    if (hs_fd126D4q0.notEvaluated) {
                        hs_wild126D4A7 = hs_fd126D4q0.hscall();
                    }
                    var hs_ds26D4qY = hs_wild126D4A7.data[0];
                    if (hs_ds26D4qY.notEvaluated) {
                        return hs_ds26D4qY.hscall();
                    } else {
                        return hs_ds26D4qY;
                    }
                };
                return $hs.modules.SystemziPosixziInternals.hs_czuread.hscall(hs_sat26D4A4, hs_sat26D4A5, hs_len26D4q9);
            };
            return hs_dozuread26D4pY.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26D4zY);
        }
    };
    hs_zdcreadNonBlocking25uFUM.evaluate = function (hs_fd26D4r7, hs_ptr26D4r8, hs_bytes26D4ra) {
        var hs_sat26D4AR = new $hs.Func(1);
        hs_sat26D4AR.evaluate = function (hs_r26D4re) {
            var hs_wild26D4rj = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziNum.hs_zdfNumInt, hs_r26D4re);
            var hs_ds26D4rh = hs_wild26D4rj.data[0];
            var hs_ds126D4AV = hs_ds26D4rh;
            if (hs_ds26D4rh.notEvaluated) {
                hs_ds126D4AV = hs_ds26D4rh.hscall();
            }
            switch (hs_ds126D4AV) {
            case -1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.DataziMaybe.hs_Nothing);
            default:
                var hs_sat26D4AW = new $hs.Data(2);
                hs_sat26D4AW.data = [hs_wild26D4rj];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4AW);
            }
        };
        var hs_sat26D4AQ = new $hs.Thunk();
        hs_sat26D4AQ.evaluateOnce = function () {
            var hs_sat26D4AT = new $hs.Thunk();
            hs_sat26D4AT.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_bytes26D4ra);
            };
            var hs_sat26D4AU = new $hs.Data(1);
            hs_sat26D4AU.data = [0];
            var hs_sat26D4AS = new $hs.Thunk();
            hs_sat26D4AS.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("GHC.IO.FD.fdReadNonBlocking\x00");
            };
            return $hs.modules.GHCziIOziFD.hs_readRawBufferPtrNoBlock.hscall(hs_sat26D4AS, hs_fd26D4r7, hs_ptr26D4r8, hs_sat26D4AU, hs_sat26D4AT);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4AQ, hs_sat26D4AR);
    };
    hs_zdcwriteNonBlocking25uFV6.evaluate = function (hs_fd26D4rx, hs_ptr26D4s3, hs_bytes26D4rv) {
        var hs_sat26D4AY = new $hs.Func(1);
        hs_sat26D4AY.evaluate = function (hs_res26D4t9) {
            var hs_sat26D4BP = new $hs.Thunk();
            hs_sat26D4BP.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.GHCziNum.hs_zdfNumInt, hs_res26D4t9);
            };
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4BP);
        };
        var hs_sat26D4AX = new $hs.Thunk();
        hs_sat26D4AX.evaluateOnce = function () {
            var hs_loc26D4rr = new $hs.Thunk();
            hs_loc26D4rr.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("GHC.IO.FD.fdWriteNonBlocking\x00");
            };
            var hs_off26D4rt = new $hs.Data(1);
            hs_off26D4rt.data = [0];
            var hs_len26D4rw = new $hs.Thunk();
            hs_len26D4rw.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_bytes26D4rv);
            };
            var hs_fd126D4rX = hs_fd26D4rx;
            if (hs_fd26D4rx.notEvaluated) {
                hs_fd126D4rX = hs_fd26D4rx.hscall();
            }
            var hs_dozuwrite26D4rV = new $hs.Func(2);
            hs_dozuwrite26D4rV.evaluate = function (hs_zddNum26D4rQ, hs_call26D4rE) {
                var hs_sat26D4BD = new $hs.Func(1);
                hs_sat26D4BD.evaluate = function (hs_r26D4rL) {
                    var hs_sat26D4BJ = new $hs.Thunk();
                    hs_sat26D4BJ.evaluateOnce = function () {
                        var hs_sat26D4BN = new $hs.Thunk();
                        hs_sat26D4BN.evaluateOnce = function () {
                            var hs_sat26D4BO = new $hs.Thunk();
                            hs_sat26D4BO.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCSsizze, hs_sat26D4BO);
                        };
                        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCSsizze, hs_sat26D4BN);
                    };
                    var hs_wild26D4BK = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.SystemziPosixziTypes.hs_zdfEqCSsizze, hs_r26D4rL, hs_sat26D4BJ);
                    switch (hs_wild26D4BK.tag) {
                    case 1:
                        var hs_sat26D4BM = new $hs.Thunk();
                        hs_sat26D4BM.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralCSsizze, hs_zddNum26D4rQ, hs_r26D4rL);
                        };
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4BM);
                    case 2:
                        var hs_sat26D4BI = new $hs.Thunk();
                        hs_sat26D4BI.evaluateOnce = function () {
                            var hs_sat26D4BL = new $hs.Thunk();
                            hs_sat26D4BL.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26D4rQ, hs_sat26D4BL);
                        };
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4BI);
                    }
                };
                var hs_sat26D4BC = new $hs.Thunk();
                hs_sat26D4BC.evaluateOnce = function () {
                    var hs_sat26D4BE = new $hs.Thunk();
                    hs_sat26D4BE.evaluateOnce = function () {
                        var hs_sat26D4BF = new $hs.Thunk();
                        hs_sat26D4BF.evaluateOnce = function () {
                            var hs_sat26D4BG = new $hs.Thunk();
                            hs_sat26D4BG.evaluateOnce = function () {
                                var hs_sat26D4BH = new $hs.Thunk();
                                hs_sat26D4BH.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                };
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCSsizze, hs_sat26D4BH);
                            };
                            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCSsizze, hs_sat26D4BG);
                        };
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4BF);
                    };
                    return hs_throwErrnoIfMinus1RetryOnBlock25u7aP.hscall(hs_loc26D4rr, hs_call26D4rE, hs_sat26D4BE);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4BC, hs_sat26D4BD);
            };
            var hs_unsafezuwrite26D4s6 = new $hs.Thunk();
            hs_unsafezuwrite26D4s6.evaluateOnce = function () {
                var hs_sat26D4Bx = new $hs.Thunk();
                hs_sat26D4Bx.evaluateOnce = function () {
                    var hs_sat26D4Bz = new $hs.Thunk();
                    hs_sat26D4Bz.evaluateOnce = function () {
                        return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26D4s3, hs_off26D4rt);
                    };
                    var hs_sat26D4By = new $hs.Thunk();
                    hs_sat26D4By.evaluateOnce = function () {
                        var hs_wild26D4BB = hs_fd126D4rX;
                        if (hs_fd126D4rX.notEvaluated) {
                            hs_wild26D4BB = hs_fd126D4rX.hscall();
                        }
                        var hs_ds26D4s1 = hs_wild26D4BB.data[0];
                        if (hs_ds26D4s1.notEvaluated) {
                            return hs_ds26D4s1.hscall();
                        } else {
                            return hs_ds26D4s1;
                        }
                    };
                    return $hs.modules.SystemziPosixziInternals.hs_czuwrite.hscall(hs_sat26D4By, hs_sat26D4Bz, hs_len26D4rw);
                };
                return hs_dozuwrite26D4rV.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26D4Bx);
            };
            var hs_write26D4sm = new $hs.Thunk();
            hs_write26D4sm.evaluateOnce = function () {
                var hs_wild26D4Bq = [$hs.modules.GHCziPrim.hs_realWorldzh, rtsSupportsBoundThreads()];
                var hs_ds126D4sd = hs_wild26D4Bq[1];
                var hs_wild126D4Bp = hs_ds126D4sd;
                if (hs_ds126D4sd.notEvaluated) {
                    hs_wild126D4Bp = hs_ds126D4sd.hscall();
                }
                switch (hs_wild126D4Bp) {
                case 0:
                    if (hs_unsafezuwrite26D4s6.notEvaluated) {
                        return hs_unsafezuwrite26D4s6.hscall();
                    } else {
                        return hs_unsafezuwrite26D4s6;
                    }
                default:
                    var hs_sat26D4Bs = new $hs.Thunk();
                    hs_sat26D4Bs.evaluateOnce = function () {
                        var hs_sat26D4Bu = new $hs.Thunk();
                        hs_sat26D4Bu.evaluateOnce = function () {
                            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26D4s3, hs_off26D4rt);
                        };
                        var hs_sat26D4Bt = new $hs.Thunk();
                        hs_sat26D4Bt.evaluateOnce = function () {
                            var hs_wild226D4Bw = hs_fd126D4rX;
                            if (hs_fd126D4rX.notEvaluated) {
                                hs_wild226D4Bw = hs_fd126D4rX.hscall();
                            }
                            var hs_ds226D4si = hs_wild226D4Bw.data[0];
                            if (hs_ds226D4si.notEvaluated) {
                                return hs_ds226D4si.hscall();
                            } else {
                                return hs_ds226D4si;
                            }
                        };
                        return $hs.modules.SystemziPosixziInternals.hs_czusafezuwrite.hscall(hs_sat26D4Bt, hs_sat26D4Bu, hs_len26D4rw);
                    };
                    return hs_dozuwrite26D4rV.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26D4Bs);
                }
            };
            var hs_sat26D4B1 = new $hs.Data(1);
            hs_sat26D4B1.data = [0];
            var hs_sat26D4B2 = new $hs.Thunk();
            hs_sat26D4B2.evaluateOnce = function () {
                var hs_wild26D4Bo = hs_fd126D4rX;
                if (hs_fd126D4rX.notEvaluated) {
                    hs_wild26D4Bo = hs_fd126D4rX.hscall();
                }
                var hs_ds126D4sq = hs_wild26D4Bo.data[1];
                if (hs_ds126D4sq.notEvaluated) {
                    return hs_ds126D4sq.hscall();
                } else {
                    return hs_ds126D4sq;
                }
            };
            var hs_wild26D4B3 = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_sat26D4B2, hs_sat26D4B1);
            switch (hs_wild26D4B3.tag) {
            case 1:
                var hs_sat26D4B5 = new $hs.Func(1);
                hs_sat26D4B5.evaluate = function (hs_r26D4t0) {
                    var hs_sat26D4Bi = new $hs.Thunk();
                    hs_sat26D4Bi.evaluateOnce = function () {
                        var hs_sat26D4Bm = new $hs.Thunk();
                        hs_sat26D4Bm.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26D4Bm);
                    };
                    var hs_wild126D4Bj = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_r26D4t0, hs_sat26D4Bi);
                    switch (hs_wild126D4Bj.tag) {
                    case 1:
                        var hs_sat26D4Bk = new $hs.Thunk();
                        hs_sat26D4Bk.evaluateOnce = function () {
                            var hs_sat26D4Bl = new $hs.Thunk();
                            hs_sat26D4Bl.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26D4Bl);
                        };
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4Bk);
                    case 2:
                        if (hs_write26D4sm.notEvaluated) {
                            return hs_write26D4sm.hscall();
                        } else {
                            return hs_write26D4sm;
                        }
                    }
                };
                var hs_sat26D4B4 = new $hs.Thunk();
                hs_sat26D4B4.evaluateOnce = function () {
                    var hs_wild126D4B8 = hs_fd126D4rX;
                    if (hs_fd126D4rX.notEvaluated) {
                        hs_wild126D4B8 = hs_fd126D4rX.hscall();
                    }
                    var hs_ds26D4sx = hs_wild126D4B8.data[0];
                    var hs_ds226D4B7 = hs_ds26D4sx;
                    if (hs_ds26D4sx.notEvaluated) {
                        hs_ds226D4B7 = hs_ds26D4sx.hscall();
                    }
                    var hs_ds326D4sL = hs_ds226D4B7.data[0];
                    var hs_sat26D4Ba = new $hs.Thunk();
                    hs_sat26D4Ba.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    var hs_ds426D4Bb = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26D4Ba);
                    var hs_ds526D4sM = hs_ds426D4Bb.data[0];
                    var hs_sat26D4Bc = new $hs.Thunk();
                    hs_sat26D4Bc.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    var hs_ds626D4Bd = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26D4Bc);
                    var hs_ds726D4sN = hs_ds626D4Bd.data[0];
                    var hs_sat26D4Be = new $hs.Thunk();
                    hs_sat26D4Be.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    var hs_ds826D4Bf = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26D4Be);
                    var hs_ds926D4sO = hs_ds826D4Bf.data[0];
                    var hs_sat26D4B6 = new $hs.Func(1);
                    hs_sat26D4B6.evaluate = function (hs_ds1026D4sP) {
                        var hs_wild226D4Bh = [hs_ds1026D4sP, fdReady(hs_ds326D4sL, hs_ds526D4sM, hs_ds726D4sN, hs_ds926D4sO)];
                        var hs_ds1126D4sU = hs_wild226D4Bh[0];
                        var hs_ds1226D4sV = hs_wild226D4Bh[1];
                        var hs_sat26D4Bg = new $hs.Data(1);
                        hs_sat26D4Bg.data = [hs_ds1226D4sV];
                        return [hs_ds1126D4sU, hs_sat26D4Bg];
                    };
                    if (hs_sat26D4B6.notEvaluated) {
                        return hs_sat26D4B6.hscall();
                    } else {
                        return hs_sat26D4B6;
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4B4, hs_sat26D4B5);
            case 2:
                if (hs_unsafezuwrite26D4s6.notEvaluated) {
                    return hs_unsafezuwrite26D4s6.hscall();
                } else {
                    return hs_unsafezuwrite26D4s6;
                }
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4AX, hs_sat26D4AY);
    };
    this.hs_zdfRawIOFD.data = [hs_zdcread25uFQw, hs_zdcreadNonBlocking25uFUM, hs_fdWrite25u7aI, hs_zdcwriteNonBlocking25uFV6];
    hs_zdcfillReadBuffer25uFWW.evaluate = function (hs_fd26D4th, hs_buf26D4tl) {
        var hs_sat26D4BR = new $hs.Thunk();
        hs_sat26D4BR.evaluateOnce = function () {
            var hs_sat26D4C6 = new $hs.Func(1);
            hs_sat26D4C6.evaluate = function (hs_ds26D4tx) {
                var hs_wild26D4C8 = hs_ds26D4tx;
                if (hs_ds26D4tx.notEvaluated) {
                    hs_wild26D4C8 = hs_ds26D4tx.hscall();
                }
                var hs_r26D4tL = hs_wild26D4C8.data[0];
                var hs_bufzq26D4tD = hs_wild26D4C8.data[1];
                var hs_sat26D4C9 = new $hs.Thunk();
                hs_sat26D4C9.evaluateOnce = function () {
                    var hs_sat26D4Ci = new $hs.Data(1);
                    hs_sat26D4Ci.data = [hs_r26D4tL, hs_bufzq26D4tD];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4Ci);
                };
                var hs_sat26D4C7 = new $hs.Thunk();
                hs_sat26D4C7.evaluateOnce = function () {
                    var hs_sat26D4Cb = new $hs.Thunk();
                    hs_sat26D4Cb.evaluateOnce = function () {
                        var hs_sat26D4Cc = new $hs.Thunk();
                        hs_sat26D4Cc.evaluateOnce = function () {
                            var hs_sat26D4Ce = new $hs.Thunk();
                            hs_sat26D4Ce.evaluateOnce = function () {
                                var hs_sat26D4Cg = new $hs.Data(1);
                                hs_sat26D4Cg.data = ["\n"];
                                var hs_sat26D4Ch = new $hs.Data(2);
                                hs_sat26D4Ch.data = [hs_sat26D4Cg, $hs.modules.GHCziTypes.hs_ZMZN];
                                var hs_sat26D4Cf = new $hs.Thunk();
                                hs_sat26D4Cf.evaluateOnce = function () {
                                    return $hs.modules.GHCziIOziBuffer.hs_summaryBuffer.hscall(hs_bufzq26D4tD);
                                };
                                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D4Cf, hs_sat26D4Ch);
                            };
                            var hs_sat26D4Cd = new $hs.Thunk();
                            hs_sat26D4Cd.evaluateOnce = function () {
                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("after: \x00");
                            };
                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D4Cd, hs_sat26D4Ce);
                        };
                        return $hs.modules.SystemziPosixziInternals.hs_puts.hscall(hs_sat26D4Cc);
                    };
                    var hs_sat26D4Ca = new $hs.Thunk();
                    hs_sat26D4Ca.evaluateOnce = function () {
                        return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziTypes.hs_False);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D4Ca, hs_sat26D4Cb);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4C7, hs_sat26D4C9);
            };
            var hs_sat26D4C5 = new $hs.Thunk();
            hs_sat26D4C5.evaluateOnce = function () {
                return $hs.modules.GHCziIOziBufferedIO.hs_readBuf.hscall($hs.modules.GHCziIOziFD.hs_zdfRawIOFD, hs_fd26D4th, hs_buf26D4tl);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4C5, hs_sat26D4C6);
        };
        var hs_sat26D4BQ = new $hs.Thunk();
        hs_sat26D4BQ.evaluateOnce = function () {
            var hs_sat26D4BT = new $hs.Thunk();
            hs_sat26D4BT.evaluateOnce = function () {
                var hs_sat26D4BU = new $hs.Thunk();
                hs_sat26D4BU.evaluateOnce = function () {
                    var hs_sat26D4BW = new $hs.Thunk();
                    hs_sat26D4BW.evaluateOnce = function () {
                        var hs_sat26D4BY = new $hs.Thunk();
                        hs_sat26D4BY.evaluateOnce = function () {
                            var hs_sat26D4C0 = new $hs.Thunk();
                            hs_sat26D4C0.evaluateOnce = function () {
                                var hs_sat26D4C3 = new $hs.Data(1);
                                hs_sat26D4C3.data = ["\n"];
                                var hs_sat26D4C4 = new $hs.Data(2);
                                hs_sat26D4C4.data = [hs_sat26D4C3, $hs.modules.GHCziTypes.hs_ZMZN];
                                var hs_sat26D4C2 = new $hs.Thunk();
                                hs_sat26D4C2.evaluateOnce = function () {
                                    return $hs.modules.GHCziIOziBuffer.hs_summaryBuffer.hscall(hs_buf26D4tl);
                                };
                                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D4C2, hs_sat26D4C4);
                            };
                            var hs_sat26D4C1 = new $hs.Data(1);
                            hs_sat26D4C1.data = [" "];
                            var hs_sat26D4BZ = new $hs.Data(2);
                            hs_sat26D4BZ.data = [hs_sat26D4C1, $hs.modules.GHCziTypes.hs_ZMZN];
                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D4BZ, hs_sat26D4C0);
                        };
                        var hs_sat26D4BX = new $hs.Thunk();
                        hs_sat26D4BX.evaluateOnce = function () {
                            return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziIOziFD.hs_zdfShowFD, hs_fd26D4th);
                        };
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D4BX, hs_sat26D4BY);
                    };
                    var hs_sat26D4BV = new $hs.Thunk();
                    hs_sat26D4BV.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("readBuf fd=\x00");
                    };
                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D4BV, hs_sat26D4BW);
                };
                return $hs.modules.SystemziPosixziInternals.hs_puts.hscall(hs_sat26D4BU);
            };
            var hs_sat26D4BS = new $hs.Thunk();
            hs_sat26D4BS.evaluateOnce = function () {
                return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziTypes.hs_False);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D4BS, hs_sat26D4BT);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4BQ, hs_sat26D4BR);
    };
    hs_zdcflushWriteBuffer25uFXA.evaluate = function (hs_fd26D4tV, hs_buf26D4tZ) {
        var hs_sat26D4Ck = new $hs.Thunk();
        hs_sat26D4Ck.evaluateOnce = function () {
            return $hs.modules.GHCziIOziBufferedIO.hs_writeBuf.hscall($hs.modules.GHCziIOziFD.hs_zdfRawIOFD, hs_fd26D4tV, hs_buf26D4tZ);
        };
        var hs_sat26D4Cj = new $hs.Thunk();
        hs_sat26D4Cj.evaluateOnce = function () {
            var hs_sat26D4Cm = new $hs.Thunk();
            hs_sat26D4Cm.evaluateOnce = function () {
                var hs_sat26D4Cn = new $hs.Thunk();
                hs_sat26D4Cn.evaluateOnce = function () {
                    var hs_sat26D4Cp = new $hs.Thunk();
                    hs_sat26D4Cp.evaluateOnce = function () {
                        var hs_sat26D4Cr = new $hs.Thunk();
                        hs_sat26D4Cr.evaluateOnce = function () {
                            var hs_sat26D4Ct = new $hs.Thunk();
                            hs_sat26D4Ct.evaluateOnce = function () {
                                var hs_sat26D4Cw = new $hs.Data(1);
                                hs_sat26D4Cw.data = ["\n"];
                                var hs_sat26D4Cx = new $hs.Data(2);
                                hs_sat26D4Cx.data = [hs_sat26D4Cw, $hs.modules.GHCziTypes.hs_ZMZN];
                                var hs_sat26D4Cv = new $hs.Thunk();
                                hs_sat26D4Cv.evaluateOnce = function () {
                                    return $hs.modules.GHCziIOziBuffer.hs_summaryBuffer.hscall(hs_buf26D4tZ);
                                };
                                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D4Cv, hs_sat26D4Cx);
                            };
                            var hs_sat26D4Cu = new $hs.Data(1);
                            hs_sat26D4Cu.data = [" "];
                            var hs_sat26D4Cs = new $hs.Data(2);
                            hs_sat26D4Cs.data = [hs_sat26D4Cu, $hs.modules.GHCziTypes.hs_ZMZN];
                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D4Cs, hs_sat26D4Ct);
                        };
                        var hs_sat26D4Cq = new $hs.Thunk();
                        hs_sat26D4Cq.evaluateOnce = function () {
                            return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziIOziFD.hs_zdfShowFD, hs_fd26D4tV);
                        };
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D4Cq, hs_sat26D4Cr);
                    };
                    var hs_sat26D4Co = new $hs.Thunk();
                    hs_sat26D4Co.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("writeBuf fd=\x00");
                    };
                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D4Co, hs_sat26D4Cp);
                };
                return $hs.modules.SystemziPosixziInternals.hs_puts.hscall(hs_sat26D4Cn);
            };
            var hs_sat26D4Cl = new $hs.Thunk();
            hs_sat26D4Cl.evaluateOnce = function () {
                return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziTypes.hs_False);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D4Cl, hs_sat26D4Cm);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D4Cj, hs_sat26D4Ck);
    };
    hs_zdcfillReadBuffer025uFXU.evaluate = function (hs_fd26D4ud, hs_buf26D4ue) {
        return $hs.modules.GHCziIOziBufferedIO.hs_readBufNonBlocking.hscall($hs.modules.GHCziIOziFD.hs_zdfRawIOFD, hs_fd26D4ud, hs_buf26D4ue);
    };
    hs_zdcflushWriteBuffer025uFXZ.evaluate = function (hs_fd26D4ui, hs_buf26D4uj) {
        return $hs.modules.GHCziIOziBufferedIO.hs_writeBufNonBlocking.hscall($hs.modules.GHCziIOziFD.hs_zdfRawIOFD, hs_fd26D4ui, hs_buf26D4uj);
    };
    this.hs_zdfBufferedIOFD.data = [hs_zdcnewBuffer25uFIa, hs_zdcfillReadBuffer25uFWW, hs_zdcfillReadBuffer025uFXU, hs_zdcemptyWriteBuffer25uFY4, hs_zdcflushWriteBuffer25uFXA, hs_zdcflushWriteBuffer025uFXZ];
    hs_zdcemptyWriteBuffer25uFY4.evaluateOnce = function () {
        return $hs.modules.GHCziIOziBufferedIO.hs_zddmemptyWriteBuffer.hscall($hs.modules.GHCziIOziFD.hs_zdfBufferedIOFD);
    };
    this.hs_FD.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
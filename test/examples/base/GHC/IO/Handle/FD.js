
$hs.modules.GHCziIOziHandleziFD = new $hs.Module();
$hs.modules.GHCziIOziHandleziFD.dependencies = ["GHC.Prim", "GHC.Types", "GHC.CString", "GHC.Unit", "GHC.Integer", "Data.Maybe", "GHC.Base", "GHC.Num", "GHC.Show", "GHC.IO", "GHC.IO.Device", "GHC.IO.Encoding", "GHC.IO.Exception", "GHC.IO.FD", "GHC.IO.Handle", "GHC.IO.Handle.Internals", "GHC.IO.Handle.Types", "GHC.MVar", "System.Posix.Internals", "System.Posix.Types"];
$hs.modules.GHCziIOziHandleziFD.initBeforeDependencies = function () {
    this.hs_stdout = new $hs.Thunk();
    this.hs_stdin = new $hs.Thunk();
    this.hs_isEOF = new $hs.Thunk();
    this.hs_stderr = new $hs.Thunk();
    this.hs_mkHandleFromFD = new $hs.Func(6);
    this.hs_openFile = new $hs.Func(2);
    this.hs_openFileBlocking = new $hs.Func(2);
    this.hs_openBinaryFile = new $hs.Func(2);
    this.hs_fdToHandlezq = new $hs.Func(6);
    this.hs_fdToHandle = new $hs.Func(1);
    this.hs_stdout.evaluateOnce = function () {
        $hs.modules.GHCziIOziHandleziFD.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_stdin.evaluateOnce = function () {
        $hs.modules.GHCziIOziHandleziFD.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_isEOF.evaluateOnce = function () {
        $hs.modules.GHCziIOziHandleziFD.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_stderr.evaluateOnce = function () {
        $hs.modules.GHCziIOziHandleziFD.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_mkHandleFromFD.notEvaluated = true;
    this.hs_mkHandleFromFD.evaluate = function (hs_fd026D5AQ, hs_fdzutype26D5B4, hs_filepath26D5B0, hs_iomode26D5B1, hs_setzunonzublocking26D5AO, hs_mbzucodec26D5AU) {
        $hs.modules.GHCziIOziHandleziFD.loadDependencies();
        return this.evaluate(hs_fd026D5AQ, hs_fdzutype26D5B4, hs_filepath26D5B0, hs_iomode26D5B1, hs_setzunonzublocking26D5AO, hs_mbzucodec26D5AU);
    };
    this.hs_openFile.notEvaluated = true;
    this.hs_openFile.evaluate = function (hs_fp26D5By, hs_im26D5Bz) {
        $hs.modules.GHCziIOziHandleziFD.loadDependencies();
        return this.evaluate(hs_fp26D5By, hs_im26D5Bz);
    };
    this.hs_openFileBlocking.notEvaluated = true;
    this.hs_openFileBlocking.evaluate = function (hs_fp26D5BU, hs_im26D5BV) {
        $hs.modules.GHCziIOziHandleziFD.loadDependencies();
        return this.evaluate(hs_fp26D5BU, hs_im26D5BV);
    };
    this.hs_openBinaryFile.notEvaluated = true;
    this.hs_openBinaryFile.evaluate = function (hs_fp26D5Cg, hs_m26D5Ch) {
        $hs.modules.GHCziIOziHandleziFD.loadDependencies();
        return this.evaluate(hs_fp26D5Cg, hs_m26D5Ch);
    };
    this.hs_fdToHandlezq.notEvaluated = true;
    this.hs_fdToHandlezq.evaluate = function (hs_fdint26D5CG, hs_mbzutype26D5CI, hs_iszusocket26D5CU, hs_filepath26D5D3, hs_iomode26D5CH, hs_binary26D5D4) {
        $hs.modules.GHCziIOziHandleziFD.loadDependencies();
        return this.evaluate(hs_fdint26D5CG, hs_mbzutype26D5CI, hs_iszusocket26D5CU, hs_filepath26D5D3, hs_iomode26D5CH, hs_binary26D5D4);
    };
    this.hs_fdToHandle.notEvaluated = true;
    this.hs_fdToHandle.evaluate = function (hs_fdint26D5D9) {
        $hs.modules.GHCziIOziHandleziFD.loadDependencies();
        return this.evaluate(hs_fdint26D5D9);
    };
};
$hs.modules.GHCziIOziHandleziFD.initAfterDependencies = function () {
    this.hs_mkHandleFromFD.notEvaluated = false;
    this.hs_openFile.notEvaluated = false;
    this.hs_openFileBlocking.notEvaluated = false;
    this.hs_openBinaryFile.notEvaluated = false;
    this.hs_fdToHandlezq.notEvaluated = false;
    this.hs_fdToHandle.notEvaluated = false;
    var hs_stdHandleFinalizzer25uhbD = new $hs.Func(2);
    var hs_sat26D5DG = new $hs.Thunk();
    var hs_sat26D5DM = new $hs.Thunk();
    var hs_sat26D5DS = new $hs.Thunk();
    var hs_openFilezq25uhbK = new $hs.Func(4);
    hs_stdHandleFinalizzer25uhbD.evaluate = function (hs_fp26D5Al, hs_m26D5Ae) {
        var hs_sat26D5Du = new $hs.Func(1);
        hs_sat26D5Du.evaluate = function (hs_hzu26D5Ah) {
            var hs_sat26D5Dw = new $hs.Thunk();
            hs_sat26D5Dw.evaluateOnce = function () {
                var hs_sat26D5Dy = new $hs.Thunk();
                hs_sat26D5Dy.evaluateOnce = function () {
                    var hs_sat26D5DA = new $hs.Thunk();
                    hs_sat26D5DA.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziHandleziInternals.hs_ioezufinalizzedHandle.hscall(hs_fp26D5Al);
                    };
                    return $hs.modules.GHCziMVar.hs_putMVar.hscall(hs_m26D5Ae, hs_sat26D5DA);
                };
                var hs_sat26D5Dx = new $hs.Thunk();
                hs_sat26D5Dx.evaluateOnce = function () {
                    var hs_wild26D5Dz = $hs.modules.GHCziIOziHandleziTypes.hs_haType.hscall(hs_hzu26D5Ah);
                    switch (hs_wild26D5Dz.tag) {
                    case 1:
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                    default:
                        return $hs.modules.GHCziIOziHandleziInternals.hs_closeTextCodecs.hscall(hs_hzu26D5Ah);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5Dx, hs_sat26D5Dy);
            };
            var hs_sat26D5Dv = new $hs.Thunk();
            hs_sat26D5Dv.evaluateOnce = function () {
                return $hs.modules.GHCziIOziHandleziInternals.hs_flushWriteBuffer.hscall(hs_hzu26D5Ah);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5Dv, hs_sat26D5Dw);
        };
        var hs_sat26D5Dt = new $hs.Thunk();
        hs_sat26D5Dt.evaluateOnce = function () {
            return $hs.modules.GHCziMVar.hs_takeMVar.hscall(hs_m26D5Ae);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5Dt, hs_sat26D5Du);
    };
    hs_sat26D5DG.evaluateOnce = function () {
        var hs_sat26D5DC = new $hs.Thunk();
        hs_sat26D5DC.evaluateOnce = function () {
            var hs_sat26D5DE = new $hs.Data(2);
            hs_sat26D5DE.data = [hs_stdHandleFinalizzer25uhbD];
            var hs_sat26D5DF = new $hs.Data(2);
            hs_sat26D5DF.data = [$hs.modules.GHCziIOziEncoding.hs_localeEncoding];
            var hs_sat26D5DD = new $hs.Thunk();
            hs_sat26D5DD.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("<stdout>\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_mkHandle.hscall($hs.modules.GHCziIOziFD.hs_zdfIODeviceFD, $hs.modules.GHCziIOziFD.hs_zdfBufferedIOFD, $hs.modules.GHCziIOziFD.hs_zdfTypeableFD, $hs.modules.GHCziIOziFD.hs_stdout, hs_sat26D5DD, $hs.modules.GHCziIOziHandleziTypes.hs_WriteHandle, $hs.modules.GHCziTypes.hs_True, hs_sat26D5DF, $hs.modules.GHCziIOziHandleziTypes.hs_nativeNewlineMode, hs_sat26D5DE, $hs.modules.DataziMaybe.hs_Nothing);
        };
        var hs_sat26D5DB = new $hs.Thunk();
        hs_sat26D5DB.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5DB, hs_sat26D5DC);
    };
    this.hs_stdout.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_unsafePerformIO, hs_sat26D5DG);
    };
    hs_sat26D5DM.evaluateOnce = function () {
        var hs_sat26D5DI = new $hs.Thunk();
        hs_sat26D5DI.evaluateOnce = function () {
            var hs_sat26D5DK = new $hs.Data(2);
            hs_sat26D5DK.data = [hs_stdHandleFinalizzer25uhbD];
            var hs_sat26D5DL = new $hs.Data(2);
            hs_sat26D5DL.data = [$hs.modules.GHCziIOziEncoding.hs_localeEncoding];
            var hs_sat26D5DJ = new $hs.Thunk();
            hs_sat26D5DJ.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("<stdin>\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_mkHandle.hscall($hs.modules.GHCziIOziFD.hs_zdfIODeviceFD, $hs.modules.GHCziIOziFD.hs_zdfBufferedIOFD, $hs.modules.GHCziIOziFD.hs_zdfTypeableFD, $hs.modules.GHCziIOziFD.hs_stdin, hs_sat26D5DJ, $hs.modules.GHCziIOziHandleziTypes.hs_ReadHandle, $hs.modules.GHCziTypes.hs_True, hs_sat26D5DL, $hs.modules.GHCziIOziHandleziTypes.hs_nativeNewlineMode, hs_sat26D5DK, $hs.modules.DataziMaybe.hs_Nothing);
        };
        var hs_sat26D5DH = new $hs.Thunk();
        hs_sat26D5DH.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5DH, hs_sat26D5DI);
    };
    this.hs_stdin.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_unsafePerformIO, hs_sat26D5DM);
    };
    this.hs_isEOF.evaluateOnce = function () {
        return $hs.modules.GHCziIOziHandle.hs_hIsEOF.hscall($hs.modules.GHCziIOziHandleziFD.hs_stdin);
    };
    hs_sat26D5DS.evaluateOnce = function () {
        var hs_sat26D5DO = new $hs.Thunk();
        hs_sat26D5DO.evaluateOnce = function () {
            var hs_sat26D5DQ = new $hs.Data(2);
            hs_sat26D5DQ.data = [hs_stdHandleFinalizzer25uhbD];
            var hs_sat26D5DR = new $hs.Data(2);
            hs_sat26D5DR.data = [$hs.modules.GHCziIOziEncoding.hs_localeEncoding];
            var hs_sat26D5DP = new $hs.Thunk();
            hs_sat26D5DP.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("<stderr>\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_mkHandle.hscall($hs.modules.GHCziIOziFD.hs_zdfIODeviceFD, $hs.modules.GHCziIOziFD.hs_zdfBufferedIOFD, $hs.modules.GHCziIOziFD.hs_zdfTypeableFD, $hs.modules.GHCziIOziFD.hs_stderr, hs_sat26D5DP, $hs.modules.GHCziIOziHandleziTypes.hs_WriteHandle, $hs.modules.GHCziTypes.hs_False, hs_sat26D5DR, $hs.modules.GHCziIOziHandleziTypes.hs_nativeNewlineMode, hs_sat26D5DQ, $hs.modules.DataziMaybe.hs_Nothing);
        };
        var hs_sat26D5DN = new $hs.Thunk();
        hs_sat26D5DN.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5DN, hs_sat26D5DO);
    };
    this.hs_stderr.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_unsafePerformIO, hs_sat26D5DS);
    };
    this.hs_mkHandleFromFD.evaluate = function (hs_fd026D5AQ, hs_fdzutype26D5B4, hs_filepath26D5B0, hs_iomode26D5B1, hs_setzunonzublocking26D5AO, hs_mbzucodec26D5AU) {
        var hs_sat26D5DU = new $hs.Func(1);
        hs_sat26D5DU.evaluate = function (hs_fd26D5AZ) {
            var hs_nl26D5AW = new $hs.Thunk();
            hs_nl26D5AW.evaluateOnce = function () {
                var hs_wild26D5E1 = $hs.modules.DataziMaybe.hs_isJust.hscall(hs_mbzucodec26D5AU);
                switch (hs_wild26D5E1.tag) {
                case 1:
                    if ($hs.modules.GHCziIOziHandleziTypes.hs_noNewlineTranslation.notEvaluated) {
                        return $hs.modules.GHCziIOziHandleziTypes.hs_noNewlineTranslation.hscall();
                    } else {
                        return $hs.modules.GHCziIOziHandleziTypes.hs_noNewlineTranslation;
                    }
                case 2:
                    if ($hs.modules.GHCziIOziHandleziTypes.hs_nativeNewlineMode.notEvaluated) {
                        return $hs.modules.GHCziIOziHandleziTypes.hs_nativeNewlineMode.hscall();
                    } else {
                        return $hs.modules.GHCziIOziHandleziTypes.hs_nativeNewlineMode;
                    }
                }
            };
            var hs_fail26D5B3 = new $hs.Func(1);
            hs_fail26D5B3.evaluate = function (hs_ds26D5B2) {
                return $hs.modules.GHCziIOziHandleziInternals.hs_mkFileHandle.hscall($hs.modules.GHCziIOziFD.hs_zdfIODeviceFD, $hs.modules.GHCziIOziFD.hs_zdfBufferedIOFD, $hs.modules.GHCziIOziFD.hs_zdfTypeableFD, hs_fd26D5AZ, hs_filepath26D5B0, hs_iomode26D5B1, hs_mbzucodec26D5AU, hs_nl26D5AW);
            };
            var hs_wild26D5DX = hs_fdzutype26D5B4;
            if (hs_fdzutype26D5B4.notEvaluated) {
                hs_wild26D5DX = hs_fdzutype26D5B4.hscall();
            }
            switch (hs_wild26D5DX.tag) {
            case 1:
                var hs_sat26D5DY = new $hs.Thunk();
                hs_sat26D5DY.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("is a directory\x00");
                };
                var hs_sat26D5DZ = new $hs.Thunk();
                hs_sat26D5DZ.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("openFile\x00");
                };
                var hs_sat26D5DW = new $hs.Data(1);
                hs_sat26D5DW.data = [$hs.modules.DataziMaybe.hs_Nothing, $hs.modules.GHCziIOziException.hs_InappropriateType, hs_sat26D5DZ, hs_sat26D5DY, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing];
                return $hs.modules.GHCziIOziException.hs_ioException.hscall(hs_sat26D5DW);
            case 2:
                var hs_wild126D5E0 = hs_iomode26D5B1;
                if (hs_iomode26D5B1.notEvaluated) {
                    hs_wild126D5E0 = hs_iomode26D5B1.hscall();
                }
                switch (hs_wild126D5E0.tag) {
                case 4:
                    return $hs.modules.GHCziIOziHandleziInternals.hs_mkDuplexHandle.hscall($hs.modules.GHCziIOziFD.hs_zdfIODeviceFD, $hs.modules.GHCziIOziFD.hs_zdfBufferedIOFD, $hs.modules.GHCziIOziFD.hs_zdfTypeableFD, hs_fd26D5AZ, hs_filepath26D5B0, hs_mbzucodec26D5AU, hs_nl26D5AW);
                default:
                    return hs_fail26D5B3.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                }
            default:
                return hs_fail26D5B3.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            }
        };
        var hs_sat26D5DT = new $hs.Thunk();
        hs_sat26D5DT.evaluateOnce = function () {
            var hs_wild26D5DV = hs_setzunonzublocking26D5AO;
            if (hs_setzunonzublocking26D5AO.notEvaluated) {
                hs_wild26D5DV = hs_setzunonzublocking26D5AO.hscall();
            }
            switch (hs_wild26D5DV.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_fd026D5AQ);
            case 2:
                return $hs.modules.GHCziIOziFD.hs_setNonBlockingMode.hscall(hs_fd026D5AQ, $hs.modules.GHCziTypes.hs_True);
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5DT, hs_sat26D5DU);
    };
    hs_openFilezq25uhbK.evaluate = function (hs_filepath26D5Bf, hs_iomode26D5Bg, hs_binary26D5Bq, hs_nonzublocking26D5Bh) {
        var hs_sat26D5E3 = new $hs.Func(1);
        hs_sat26D5E3.evaluate = function (hs_ds26D5Bk) {
            var hs_wild26D5E5 = hs_ds26D5Bk;
            if (hs_ds26D5Bk.notEvaluated) {
                hs_wild26D5E5 = hs_ds26D5Bk.hscall();
            }
            var hs_fd26D5Bo = hs_wild26D5E5.data[0];
            var hs_fdzutype26D5Bp = hs_wild26D5E5.data[1];
            var hs_sat26D5E6 = new $hs.Thunk();
            hs_sat26D5E6.evaluateOnce = function () {
                return $hs.modules.GHCziIOziDevice.hs_close.hscall($hs.modules.GHCziIOziFD.hs_zdfIODeviceFD, hs_fd26D5Bo);
            };
            var hs_sat26D5E4 = new $hs.Thunk();
            hs_sat26D5E4.evaluateOnce = function () {
                var hs_sat26D5E7 = new $hs.Thunk();
                hs_sat26D5E7.evaluateOnce = function () {
                    var hs_wild126D5E8 = hs_binary26D5Bq;
                    if (hs_binary26D5Bq.notEvaluated) {
                        hs_wild126D5E8 = hs_binary26D5Bq.hscall();
                    }
                    switch (hs_wild126D5E8.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [$hs.modules.GHCziIOziEncoding.hs_localeEncoding];
                        return $res;
                    case 2:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    }
                };
                return $hs.modules.GHCziIOziHandleziFD.hs_mkHandleFromFD.hscall(hs_fd26D5Bo, hs_fdzutype26D5Bp, hs_filepath26D5Bf, hs_iomode26D5Bg, $hs.modules.GHCziTypes.hs_False, hs_sat26D5E7);
            };
            return $hs.modules.GHCziIO.hs_onException.hscall(hs_sat26D5E4, hs_sat26D5E6);
        };
        var hs_sat26D5E2 = new $hs.Thunk();
        hs_sat26D5E2.evaluateOnce = function () {
            return $hs.modules.GHCziIOziFD.hs_openFile.hscall(hs_filepath26D5Bf, hs_iomode26D5Bg, hs_nonzublocking26D5Bh);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5E2, hs_sat26D5E3);
    };
    this.hs_openFile.evaluate = function (hs_fp26D5By, hs_im26D5Bz) {
        var hs_sat26D5Ea = new $hs.Func(1);
        hs_sat26D5Ea.evaluate = function (hs_e26D5BC) {
            var hs_sat26D5Eb = new $hs.Thunk();
            hs_sat26D5Eb.evaluateOnce = function () {
                var hs_wild26D5Ed = hs_e26D5BC;
                if (hs_e26D5BC.notEvaluated) {
                    hs_wild26D5Ed = hs_e26D5BC.hscall();
                }
                var hs_ds26D5BK = hs_wild26D5Ed.data[0];
                var hs_ds126D5BL = hs_wild26D5Ed.data[1];
                var hs_ds326D5BN = hs_wild26D5Ed.data[3];
                var hs_ds426D5BO = hs_wild26D5Ed.data[4];
                var hs_sat26D5Eg = new $hs.Data(2);
                hs_sat26D5Eg.data = [hs_fp26D5By];
                var hs_sat26D5Ec = new $hs.Thunk();
                hs_sat26D5Ec.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("openFile\x00");
                };
                var $res = new $hs.Data(1);
                $res.data = [hs_ds26D5BK, hs_ds126D5BL, hs_sat26D5Ec, hs_ds326D5BN, hs_ds426D5BO, hs_sat26D5Eg];
                return $res;
            };
            return $hs.modules.GHCziIOziException.hs_ioError.hscall(hs_sat26D5Eb);
        };
        var hs_sat26D5E9 = new $hs.Thunk();
        hs_sat26D5E9.evaluateOnce = function () {
            return hs_openFilezq25uhbK.hscall(hs_fp26D5By, hs_im26D5Bz, $hs.modules.GHCziTypes.hs_False, $hs.modules.GHCziTypes.hs_True);
        };
        return $hs.modules.GHCziIO.hs_catchException.hscall($hs.modules.GHCziIOziException.hs_zdfExceptionIOException, hs_sat26D5E9, hs_sat26D5Ea);
    };
    this.hs_openFileBlocking.evaluate = function (hs_fp26D5BU, hs_im26D5BV) {
        var hs_sat26D5Ei = new $hs.Func(1);
        hs_sat26D5Ei.evaluate = function (hs_e26D5BY) {
            var hs_sat26D5Ej = new $hs.Thunk();
            hs_sat26D5Ej.evaluateOnce = function () {
                var hs_wild26D5El = hs_e26D5BY;
                if (hs_e26D5BY.notEvaluated) {
                    hs_wild26D5El = hs_e26D5BY.hscall();
                }
                var hs_ds26D5C6 = hs_wild26D5El.data[0];
                var hs_ds126D5C7 = hs_wild26D5El.data[1];
                var hs_ds326D5C9 = hs_wild26D5El.data[3];
                var hs_ds426D5Ca = hs_wild26D5El.data[4];
                var hs_sat26D5Eo = new $hs.Data(2);
                hs_sat26D5Eo.data = [hs_fp26D5BU];
                var hs_sat26D5Ek = new $hs.Thunk();
                hs_sat26D5Ek.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("openFile\x00");
                };
                var $res = new $hs.Data(1);
                $res.data = [hs_ds26D5C6, hs_ds126D5C7, hs_sat26D5Ek, hs_ds326D5C9, hs_ds426D5Ca, hs_sat26D5Eo];
                return $res;
            };
            return $hs.modules.GHCziIOziException.hs_ioError.hscall(hs_sat26D5Ej);
        };
        var hs_sat26D5Eh = new $hs.Thunk();
        hs_sat26D5Eh.evaluateOnce = function () {
            return hs_openFilezq25uhbK.hscall(hs_fp26D5BU, hs_im26D5BV, $hs.modules.GHCziTypes.hs_False, $hs.modules.GHCziTypes.hs_False);
        };
        return $hs.modules.GHCziIO.hs_catchException.hscall($hs.modules.GHCziIOziException.hs_zdfExceptionIOException, hs_sat26D5Eh, hs_sat26D5Ei);
    };
    this.hs_openBinaryFile.evaluate = function (hs_fp26D5Cg, hs_m26D5Ch) {
        var hs_sat26D5Eq = new $hs.Func(1);
        hs_sat26D5Eq.evaluate = function (hs_e26D5Ck) {
            var hs_sat26D5Er = new $hs.Thunk();
            hs_sat26D5Er.evaluateOnce = function () {
                var hs_wild26D5Et = hs_e26D5Ck;
                if (hs_e26D5Ck.notEvaluated) {
                    hs_wild26D5Et = hs_e26D5Ck.hscall();
                }
                var hs_ds26D5Cs = hs_wild26D5Et.data[0];
                var hs_ds126D5Ct = hs_wild26D5Et.data[1];
                var hs_ds326D5Cv = hs_wild26D5Et.data[3];
                var hs_ds426D5Cw = hs_wild26D5Et.data[4];
                var hs_sat26D5Ew = new $hs.Data(2);
                hs_sat26D5Ew.data = [hs_fp26D5Cg];
                var hs_sat26D5Es = new $hs.Thunk();
                hs_sat26D5Es.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("openBinaryFile\x00");
                };
                var $res = new $hs.Data(1);
                $res.data = [hs_ds26D5Cs, hs_ds126D5Ct, hs_sat26D5Es, hs_ds326D5Cv, hs_ds426D5Cw, hs_sat26D5Ew];
                return $res;
            };
            return $hs.modules.GHCziIOziException.hs_ioError.hscall(hs_sat26D5Er);
        };
        var hs_sat26D5Ep = new $hs.Thunk();
        hs_sat26D5Ep.evaluateOnce = function () {
            return hs_openFilezq25uhbK.hscall(hs_fp26D5Cg, hs_m26D5Ch, $hs.modules.GHCziTypes.hs_True, $hs.modules.GHCziTypes.hs_True);
        };
        return $hs.modules.GHCziIO.hs_catchException.hscall($hs.modules.GHCziIOziException.hs_zdfExceptionIOException, hs_sat26D5Ep, hs_sat26D5Eq);
    };
    this.hs_fdToHandlezq.evaluate = function (hs_fdint26D5CG, hs_mbzutype26D5CI, hs_iszusocket26D5CU, hs_filepath26D5D3, hs_iomode26D5CH, hs_binary26D5D4) {
        var hs_sat26D5Ey = new $hs.Func(1);
        hs_sat26D5Ey.evaluate = function (hs_ds26D5CX) {
            var hs_wild26D5EH = hs_ds26D5CX;
            if (hs_ds26D5CX.notEvaluated) {
                hs_wild26D5EH = hs_ds26D5CX.hscall();
            }
            var hs_fd26D5D1 = hs_wild26D5EH.data[0];
            var hs_fdzutype26D5D2 = hs_wild26D5EH.data[1];
            var hs_sat26D5EG = new $hs.Thunk();
            hs_sat26D5EG.evaluateOnce = function () {
                var hs_wild126D5EI = hs_binary26D5D4;
                if (hs_binary26D5D4.notEvaluated) {
                    hs_wild126D5EI = hs_binary26D5D4.hscall();
                }
                switch (hs_wild126D5EI.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [$hs.modules.GHCziIOziEncoding.hs_localeEncoding];
                    return $res;
                case 2:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            };
            return $hs.modules.GHCziIOziHandleziFD.hs_mkHandleFromFD.hscall(hs_fd26D5D1, hs_fdzutype26D5D2, hs_filepath26D5D3, hs_iomode26D5CH, hs_iszusocket26D5CU, hs_sat26D5EG);
        };
        var hs_sat26D5Ex = new $hs.Thunk();
        hs_sat26D5Ex.evaluateOnce = function () {
            var hs_sat26D5Ez = new $hs.Thunk();
            hs_sat26D5Ez.evaluateOnce = function () {
                var hs_wild26D5EA = hs_mbzutype26D5CI;
                if (hs_mbzutype26D5CI.notEvaluated) {
                    hs_wild26D5EA = hs_mbzutype26D5CI.hscall();
                }
                switch (hs_wild26D5EA.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_ds26D5CL = hs_wild26D5EA.data[0];
                    var hs_wild126D5CN = hs_ds26D5CL;
                    if (hs_ds26D5CL.notEvaluated) {
                        hs_wild126D5CN = hs_ds26D5CL.hscall();
                    }
                    switch (hs_wild126D5CN.tag) {
                    case 3:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    default:
                        var hs_sat26D5EC = new $hs.Thunk();
                        hs_sat26D5EC.evaluateOnce = function () {
                            var hs_sat26D5EF = new $hs.Thunk();
                            hs_sat26D5EF.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCIno, hs_sat26D5EF);
                        };
                        var hs_sat26D5ED = new $hs.Thunk();
                        hs_sat26D5ED.evaluateOnce = function () {
                            var hs_sat26D5EE = new $hs.Thunk();
                            hs_sat26D5EE.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCDev, hs_sat26D5EE);
                        };
                        var hs_sat26D5EB = new $hs.Data(1);
                        hs_sat26D5EB.data = [hs_wild126D5CN, hs_sat26D5ED, hs_sat26D5EC];
                        var $res = new $hs.Data(2);
                        $res.data = [hs_sat26D5EB];
                        return $res;
                    }
                }
            };
            return $hs.modules.GHCziIOziFD.hs_mkFD.hscall(hs_fdint26D5CG, hs_iomode26D5CH, hs_sat26D5Ez, hs_iszusocket26D5CU, hs_iszusocket26D5CU);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5Ex, hs_sat26D5Ey);
    };
    this.hs_fdToHandle.evaluate = function (hs_fdint26D5D9) {
        var hs_sat26D5EK = new $hs.Func(1);
        hs_sat26D5EK.evaluate = function (hs_iomode26D5Dc) {
            var hs_sat26D5EM = new $hs.Func(1);
            hs_sat26D5EM.evaluate = function (hs_ds26D5Df) {
                var hs_wild26D5EO = hs_ds26D5Df;
                if (hs_ds26D5Df.notEvaluated) {
                    hs_wild26D5EO = hs_ds26D5Df.hscall();
                }
                var hs_fd26D5Dj = hs_wild26D5EO.data[0];
                var hs_fdzutype26D5Dk = hs_wild26D5EO.data[1];
                var hs_sat26D5EN = new $hs.Thunk();
                hs_sat26D5EN.evaluateOnce = function () {
                    var hs_sat26D5EQ = new $hs.Thunk();
                    hs_sat26D5EQ.evaluateOnce = function () {
                        var hs_sat26D5ES = new $hs.Data(1);
                        hs_sat26D5ES.data = [">"];
                        var hs_sat26D5ET = new $hs.Data(2);
                        hs_sat26D5ET.data = [hs_sat26D5ES, $hs.modules.GHCziTypes.hs_ZMZN];
                        var hs_sat26D5ER = new $hs.Thunk();
                        hs_sat26D5ER.evaluateOnce = function () {
                            return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziIOziFD.hs_zdfShowFD, hs_fd26D5Dj);
                        };
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D5ER, hs_sat26D5ET);
                    };
                    var hs_sat26D5EP = new $hs.Thunk();
                    hs_sat26D5EP.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("<file descriptor: \x00");
                    };
                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D5EP, hs_sat26D5EQ);
                };
                return $hs.modules.GHCziIOziHandleziFD.hs_mkHandleFromFD.hscall(hs_fd26D5Dj, hs_fdzutype26D5Dk, hs_sat26D5EN, hs_iomode26D5Dc, $hs.modules.GHCziTypes.hs_False, $hs.modules.DataziMaybe.hs_Nothing);
            };
            var hs_sat26D5EL = new $hs.Thunk();
            hs_sat26D5EL.evaluateOnce = function () {
                return $hs.modules.GHCziIOziFD.hs_mkFD.hscall(hs_fdint26D5D9, hs_iomode26D5Dc, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.GHCziTypes.hs_False, $hs.modules.GHCziTypes.hs_False);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5EL, hs_sat26D5EM);
        };
        var hs_sat26D5EJ = new $hs.Thunk();
        hs_sat26D5EJ.evaluateOnce = function () {
            return $hs.modules.SystemziPosixziInternals.hs_fdGetMode.hscall(hs_fdint26D5D9);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5EJ, hs_sat26D5EK);
    };
};
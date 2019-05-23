
$hs.modules.GHCziIOziHandleziFD = new $hs.Module();
$hs.modules.GHCziIOziHandleziFD.dependencies = ["GHC.Prim", "GHC.Types", "GHC.Bool", "GHC.Unit", "GHC.Integer", "Data.Maybe", "GHC.Base", "GHC.Num", "GHC.Show", "GHC.IO", "GHC.MVar", "GHC.IO.Device", "GHC.IO.FD", "GHC.IO.Exception", "GHC.IO.Encoding", "GHC.IO.Handle", "GHC.IO.Handle.Types", "GHC.IO.Handle.Internals", "System.Posix.Internals", "System.Posix.Types"];
$hs.modules.GHCziIOziHandleziFD.initBeforeDependencies = function () {
    this.hs_stdout = new $hs.Thunk();
    this.hs_stdin = new $hs.Thunk();
    this.hs_isEOF = new $hs.Thunk();
    this.hs_stderr = new $hs.Thunk();
    this.hs_mkHandleFromFD = new $hs.Func(6);
    this.hs_openFile = new $hs.Func(2);
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
    this.hs_mkHandleFromFD.evaluate = function (hs_fd026DuZ6, hs_fdzutype26DuZk, hs_filepath26DuZg, hs_iomode26DuZh, hs_setzunonzublocking26DuZ4, hs_mbzucodec26DuZa) {
        $hs.modules.GHCziIOziHandleziFD.loadDependencies();
        return this.evaluate(hs_fd026DuZ6, hs_fdzutype26DuZk, hs_filepath26DuZg, hs_iomode26DuZh, hs_setzunonzublocking26DuZ4, hs_mbzucodec26DuZa);
    };
    this.hs_openFile.notEvaluated = true;
    this.hs_openFile.evaluate = function (hs_fp26DuZM, hs_im26DuZN) {
        $hs.modules.GHCziIOziHandleziFD.loadDependencies();
        return this.evaluate(hs_fp26DuZM, hs_im26DuZN);
    };
    this.hs_openBinaryFile.notEvaluated = true;
    this.hs_openBinaryFile.evaluate = function (hs_fp26Dv08, hs_m26Dv09) {
        $hs.modules.GHCziIOziHandleziFD.loadDependencies();
        return this.evaluate(hs_fp26Dv08, hs_m26Dv09);
    };
    this.hs_fdToHandlezq.notEvaluated = true;
    this.hs_fdToHandlezq.evaluate = function (hs_fdint26Dv0y, hs_mbzutype26Dv0A, hs_iszusocket26Dv0M, hs_filepath26Dv0V, hs_iomode26Dv0z, hs_binary26Dv0W) {
        $hs.modules.GHCziIOziHandleziFD.loadDependencies();
        return this.evaluate(hs_fdint26Dv0y, hs_mbzutype26Dv0A, hs_iszusocket26Dv0M, hs_filepath26Dv0V, hs_iomode26Dv0z, hs_binary26Dv0W);
    };
    this.hs_fdToHandle.notEvaluated = true;
    this.hs_fdToHandle.evaluate = function (hs_fdint26Dv11) {
        $hs.modules.GHCziIOziHandleziFD.loadDependencies();
        return this.evaluate(hs_fdint26Dv11);
    };
};
$hs.modules.GHCziIOziHandleziFD.initAfterDependencies = function () {
    this.hs_mkHandleFromFD.notEvaluated = false;
    this.hs_openFile.notEvaluated = false;
    this.hs_openBinaryFile.notEvaluated = false;
    this.hs_fdToHandlezq.notEvaluated = false;
    this.hs_fdToHandle.notEvaluated = false;
    var hs_stdHandleFinalizzer25uGak = new $hs.Func(2);
    var hs_sat26Dv1y = new $hs.Thunk();
    var hs_sat26Dv1E = new $hs.Thunk();
    var hs_sat26Dv1K = new $hs.Thunk();
    var hs_openFilezq25uGaw = new $hs.Func(3);
    hs_stdHandleFinalizzer25uGak.evaluate = function (hs_fp26DuYB, hs_m26DuYu) {
        var hs_sat26Dv1r = new $hs.Func(1);
        hs_sat26Dv1r.evaluate = function (hs_hzu26DuYx) {
            var hs_sat26Dv1p = new $hs.Thunk();
            hs_sat26Dv1p.evaluateOnce = function () {
                var hs_sat26Dv1n = new $hs.Thunk();
                hs_sat26Dv1n.evaluateOnce = function () {
                    var hs_sat26Dv1l = new $hs.Thunk();
                    hs_sat26Dv1l.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziHandleziInternals.hs_ioezufinalizzedHandle.hscall(hs_fp26DuYB);
                    };
                    return $hs.modules.GHCziMVar.hs_putMVar.hscall(hs_m26DuYu, hs_sat26Dv1l);
                };
                var hs_sat26Dv1o = new $hs.Thunk();
                hs_sat26Dv1o.evaluateOnce = function () {
                    var hs_wild26Dv1m = $hs.modules.GHCziIOziHandleziTypes.hs_haType.hscall(hs_hzu26DuYx);
                    switch (hs_wild26Dv1m.tag) {
                    case 1:
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                    default:
                        return $hs.modules.GHCziIOziHandleziInternals.hs_closeTextCodecs.hscall(hs_hzu26DuYx);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dv1o, hs_sat26Dv1n);
            };
            var hs_sat26Dv1q = new $hs.Thunk();
            hs_sat26Dv1q.evaluateOnce = function () {
                return $hs.modules.GHCziIOziHandleziInternals.hs_flushWriteBuffer.hscall(hs_hzu26DuYx);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dv1q, hs_sat26Dv1p);
        };
        var hs_sat26Dv1s = new $hs.Thunk();
        hs_sat26Dv1s.evaluateOnce = function () {
            return $hs.modules.GHCziMVar.hs_takeMVar.hscall(hs_m26DuYu);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dv1s, hs_sat26Dv1r);
    };
    hs_sat26Dv1y.evaluateOnce = function () {
        var hs_sat26Dv1w = new $hs.Thunk();
        hs_sat26Dv1w.evaluateOnce = function () {
            var hs_sat26Dv1t = new $hs.Data(2);
            hs_sat26Dv1t.data = [hs_stdHandleFinalizzer25uGak];
            var hs_sat26Dv1u = new $hs.Data(2);
            hs_sat26Dv1u.data = [$hs.modules.GHCziIOziEncoding.hs_localeEncoding];
            var hs_sat26Dv1v = new $hs.Thunk();
            hs_sat26Dv1v.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("<stdout>\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_mkHandle.hscall($hs.modules.GHCziIOziFD.hs_zdfIODeviceFD, $hs.modules.GHCziIOziFD.hs_zdfBufferedIOFD, $hs.modules.GHCziIOziFD.hs_zdfTypeableFD, $hs.modules.GHCziIOziFD.hs_stdout, hs_sat26Dv1v, $hs.modules.GHCziIOziHandleziTypes.hs_WriteHandle, $hs.modules.GHCziBool.hs_True, hs_sat26Dv1u, $hs.modules.GHCziIOziHandleziTypes.hs_nativeNewlineMode, hs_sat26Dv1t, $hs.modules.DataziMaybe.hs_Nothing);
        };
        var hs_sat26Dv1x = new $hs.Thunk();
        hs_sat26Dv1x.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dv1x, hs_sat26Dv1w);
    };
    this.hs_stdout.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_unsafePerformIO, hs_sat26Dv1y);
    };
    hs_sat26Dv1E.evaluateOnce = function () {
        var hs_sat26Dv1C = new $hs.Thunk();
        hs_sat26Dv1C.evaluateOnce = function () {
            var hs_sat26Dv1z = new $hs.Data(2);
            hs_sat26Dv1z.data = [hs_stdHandleFinalizzer25uGak];
            var hs_sat26Dv1A = new $hs.Data(2);
            hs_sat26Dv1A.data = [$hs.modules.GHCziIOziEncoding.hs_localeEncoding];
            var hs_sat26Dv1B = new $hs.Thunk();
            hs_sat26Dv1B.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("<stdin>\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_mkHandle.hscall($hs.modules.GHCziIOziFD.hs_zdfIODeviceFD, $hs.modules.GHCziIOziFD.hs_zdfBufferedIOFD, $hs.modules.GHCziIOziFD.hs_zdfTypeableFD, $hs.modules.GHCziIOziFD.hs_stdin, hs_sat26Dv1B, $hs.modules.GHCziIOziHandleziTypes.hs_ReadHandle, $hs.modules.GHCziBool.hs_True, hs_sat26Dv1A, $hs.modules.GHCziIOziHandleziTypes.hs_nativeNewlineMode, hs_sat26Dv1z, $hs.modules.DataziMaybe.hs_Nothing);
        };
        var hs_sat26Dv1D = new $hs.Thunk();
        hs_sat26Dv1D.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dv1D, hs_sat26Dv1C);
    };
    this.hs_stdin.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_unsafePerformIO, hs_sat26Dv1E);
    };
    this.hs_isEOF.evaluateOnce = function () {
        return $hs.modules.GHCziIOziHandle.hs_hIsEOF.hscall($hs.modules.GHCziIOziHandleziFD.hs_stdin);
    };
    hs_sat26Dv1K.evaluateOnce = function () {
        var hs_sat26Dv1I = new $hs.Thunk();
        hs_sat26Dv1I.evaluateOnce = function () {
            var hs_sat26Dv1F = new $hs.Data(2);
            hs_sat26Dv1F.data = [hs_stdHandleFinalizzer25uGak];
            var hs_sat26Dv1G = new $hs.Data(2);
            hs_sat26Dv1G.data = [$hs.modules.GHCziIOziEncoding.hs_localeEncoding];
            var hs_sat26Dv1H = new $hs.Thunk();
            hs_sat26Dv1H.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("<stderr>\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_mkHandle.hscall($hs.modules.GHCziIOziFD.hs_zdfIODeviceFD, $hs.modules.GHCziIOziFD.hs_zdfBufferedIOFD, $hs.modules.GHCziIOziFD.hs_zdfTypeableFD, $hs.modules.GHCziIOziFD.hs_stderr, hs_sat26Dv1H, $hs.modules.GHCziIOziHandleziTypes.hs_WriteHandle, $hs.modules.GHCziBool.hs_False, hs_sat26Dv1G, $hs.modules.GHCziIOziHandleziTypes.hs_nativeNewlineMode, hs_sat26Dv1F, $hs.modules.DataziMaybe.hs_Nothing);
        };
        var hs_sat26Dv1J = new $hs.Thunk();
        hs_sat26Dv1J.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dv1J, hs_sat26Dv1I);
    };
    this.hs_stderr.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_unsafePerformIO, hs_sat26Dv1K);
    };
    this.hs_mkHandleFromFD.evaluate = function (hs_fd026DuZ6, hs_fdzutype26DuZk, hs_filepath26DuZg, hs_iomode26DuZh, hs_setzunonzublocking26DuZ4, hs_mbzucodec26DuZa) {
        var hs_sat26Dv1S = new $hs.Func(1);
        hs_sat26Dv1S.evaluate = function (hs_fd26DuZf) {
            var hs_nl26DuZc = new $hs.Thunk();
            hs_nl26DuZc.evaluateOnce = function () {
                var hs_wild26Dv1L = $hs.modules.DataziMaybe.hs_isJust.hscall(hs_mbzucodec26DuZa);
                switch (hs_wild26Dv1L.tag) {
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
            var hs_fail26DuZj = new $hs.Func(1);
            hs_fail26DuZj.evaluate = function (hs_ds26DuZi) {
                return $hs.modules.GHCziIOziHandleziInternals.hs_mkFileHandle.hscall($hs.modules.GHCziIOziFD.hs_zdfIODeviceFD, $hs.modules.GHCziIOziFD.hs_zdfBufferedIOFD, $hs.modules.GHCziIOziFD.hs_zdfTypeableFD, hs_fd26DuZf, hs_filepath26DuZg, hs_iomode26DuZh, hs_mbzucodec26DuZa, hs_nl26DuZc);
            };
            var hs_wild26Dv1M = hs_fdzutype26DuZk;
            if (hs_fdzutype26DuZk.notEvaluated) {
                hs_wild26Dv1M = hs_fdzutype26DuZk.hscall();
            }
            switch (hs_wild26Dv1M.tag) {
            case 1:
                var hs_sat26Dv1N = new $hs.Thunk();
                hs_sat26Dv1N.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("is a directory\x00");
                };
                var hs_sat26Dv1O = new $hs.Thunk();
                hs_sat26Dv1O.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("openFile\x00");
                };
                var hs_sat26Dv1P = new $hs.Data(1);
                hs_sat26Dv1P.data = [$hs.modules.DataziMaybe.hs_Nothing, $hs.modules.GHCziIOziException.hs_InappropriateType, hs_sat26Dv1O, hs_sat26Dv1N, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing];
                return $hs.modules.GHCziIOziException.hs_ioException.hscall(hs_sat26Dv1P);
            case 2:
                var hs_wild126Dv1Q = hs_iomode26DuZh;
                if (hs_iomode26DuZh.notEvaluated) {
                    hs_wild126Dv1Q = hs_iomode26DuZh.hscall();
                }
                switch (hs_wild126Dv1Q.tag) {
                case 4:
                    return $hs.modules.GHCziIOziHandleziInternals.hs_mkDuplexHandle.hscall($hs.modules.GHCziIOziFD.hs_zdfIODeviceFD, $hs.modules.GHCziIOziFD.hs_zdfBufferedIOFD, $hs.modules.GHCziIOziFD.hs_zdfTypeableFD, hs_fd26DuZf, hs_filepath26DuZg, hs_mbzucodec26DuZa, hs_nl26DuZc);
                default:
                    return hs_fail26DuZj.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                }
            default:
                return hs_fail26DuZj.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            }
        };
        var hs_sat26Dv1T = new $hs.Thunk();
        hs_sat26Dv1T.evaluateOnce = function () {
            var hs_wild26Dv1R = hs_setzunonzublocking26DuZ4;
            if (hs_setzunonzublocking26DuZ4.notEvaluated) {
                hs_wild26Dv1R = hs_setzunonzublocking26DuZ4.hscall();
            }
            switch (hs_wild26Dv1R.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_fd026DuZ6);
            case 2:
                return $hs.modules.GHCziIOziFD.hs_setNonBlockingMode.hscall(hs_fd026DuZ6, $hs.modules.GHCziBool.hs_True);
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dv1T, hs_sat26Dv1S);
    };
    hs_openFilezq25uGaw.evaluate = function (hs_filepath26DuZu, hs_iomode26DuZv, hs_binary26DuZE) {
        var hs_sat26Dv1Z = new $hs.Func(1);
        hs_sat26Dv1Z.evaluate = function (hs_ds26DuZy) {
            var hs_wild26Dv1U = hs_ds26DuZy;
            if (hs_ds26DuZy.notEvaluated) {
                hs_wild26Dv1U = hs_ds26DuZy.hscall();
            }
            var hs_fd26DuZC = hs_wild26Dv1U.data[0];
            var hs_fdzutype26DuZD = hs_wild26Dv1U.data[1];
            var hs_sat26Dv1W = new $hs.Thunk();
            hs_sat26Dv1W.evaluateOnce = function () {
                return $hs.modules.GHCziIOziDevice.hs_close.hscall($hs.modules.GHCziIOziFD.hs_zdfIODeviceFD, hs_fd26DuZC);
            };
            var hs_sat26Dv1Y = new $hs.Thunk();
            hs_sat26Dv1Y.evaluateOnce = function () {
                var hs_sat26Dv1X = new $hs.Thunk();
                hs_sat26Dv1X.evaluateOnce = function () {
                    var hs_wild126Dv1V = hs_binary26DuZE;
                    if (hs_binary26DuZE.notEvaluated) {
                        hs_wild126Dv1V = hs_binary26DuZE.hscall();
                    }
                    switch (hs_wild126Dv1V.tag) {
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
                return $hs.modules.GHCziIOziHandleziFD.hs_mkHandleFromFD.hscall(hs_fd26DuZC, hs_fdzutype26DuZD, hs_filepath26DuZu, hs_iomode26DuZv, $hs.modules.GHCziBool.hs_True, hs_sat26Dv1X);
            };
            return $hs.modules.GHCziIO.hs_onException.hscall(hs_sat26Dv1Y, hs_sat26Dv1W);
        };
        var hs_sat26Dv20 = new $hs.Thunk();
        hs_sat26Dv20.evaluateOnce = function () {
            return $hs.modules.GHCziIOziFD.hs_openFile.hscall(hs_filepath26DuZu, hs_iomode26DuZv);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dv20, hs_sat26Dv1Z);
    };
    this.hs_openFile.evaluate = function (hs_fp26DuZM, hs_im26DuZN) {
        var hs_sat26Dv27 = new $hs.Func(1);
        hs_sat26Dv27.evaluate = function (hs_e26DuZQ) {
            var hs_sat26Dv26 = new $hs.Thunk();
            hs_sat26Dv26.evaluateOnce = function () {
                var hs_wild26Dv21 = hs_e26DuZQ;
                if (hs_e26DuZQ.notEvaluated) {
                    hs_wild26Dv21 = hs_e26DuZQ.hscall();
                }
                var hs_ds26DuZY = hs_wild26Dv21.data[0];
                var hs_ds126DuZZ = hs_wild26Dv21.data[1];
                var hs_ds326Dv01 = hs_wild26Dv21.data[3];
                var hs_ds426Dv02 = hs_wild26Dv21.data[4];
                var hs_sat26Dv24 = new $hs.Data(2);
                hs_sat26Dv24.data = [hs_fp26DuZM];
                var hs_sat26Dv25 = new $hs.Thunk();
                hs_sat26Dv25.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("openFile\x00");
                };
                var $res = new $hs.Data(1);
                $res.data = [hs_ds26DuZY, hs_ds126DuZZ, hs_sat26Dv25, hs_ds326Dv01, hs_ds426Dv02, hs_sat26Dv24];
                return $res;
            };
            return $hs.modules.GHCziIOziException.hs_ioError.hscall(hs_sat26Dv26);
        };
        var hs_sat26Dv28 = new $hs.Thunk();
        hs_sat26Dv28.evaluateOnce = function () {
            return hs_openFilezq25uGaw.hscall(hs_fp26DuZM, hs_im26DuZN, $hs.modules.GHCziBool.hs_False);
        };
        return $hs.modules.GHCziIO.hs_catchException.hscall($hs.modules.GHCziIOziException.hs_zdfExceptionIOException, hs_sat26Dv28, hs_sat26Dv27);
    };
    this.hs_openBinaryFile.evaluate = function (hs_fp26Dv08, hs_m26Dv09) {
        var hs_sat26Dv2f = new $hs.Func(1);
        hs_sat26Dv2f.evaluate = function (hs_e26Dv0c) {
            var hs_sat26Dv2e = new $hs.Thunk();
            hs_sat26Dv2e.evaluateOnce = function () {
                var hs_wild26Dv29 = hs_e26Dv0c;
                if (hs_e26Dv0c.notEvaluated) {
                    hs_wild26Dv29 = hs_e26Dv0c.hscall();
                }
                var hs_ds26Dv0k = hs_wild26Dv29.data[0];
                var hs_ds126Dv0l = hs_wild26Dv29.data[1];
                var hs_ds326Dv0n = hs_wild26Dv29.data[3];
                var hs_ds426Dv0o = hs_wild26Dv29.data[4];
                var hs_sat26Dv2c = new $hs.Data(2);
                hs_sat26Dv2c.data = [hs_fp26Dv08];
                var hs_sat26Dv2d = new $hs.Thunk();
                hs_sat26Dv2d.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("openBinaryFile\x00");
                };
                var $res = new $hs.Data(1);
                $res.data = [hs_ds26Dv0k, hs_ds126Dv0l, hs_sat26Dv2d, hs_ds326Dv0n, hs_ds426Dv0o, hs_sat26Dv2c];
                return $res;
            };
            return $hs.modules.GHCziIOziException.hs_ioError.hscall(hs_sat26Dv2e);
        };
        var hs_sat26Dv2g = new $hs.Thunk();
        hs_sat26Dv2g.evaluateOnce = function () {
            return hs_openFilezq25uGaw.hscall(hs_fp26Dv08, hs_m26Dv09, $hs.modules.GHCziBool.hs_True);
        };
        return $hs.modules.GHCziIO.hs_catchException.hscall($hs.modules.GHCziIOziException.hs_zdfExceptionIOException, hs_sat26Dv2g, hs_sat26Dv2f);
    };
    this.hs_fdToHandlezq.evaluate = function (hs_fdint26Dv0y, hs_mbzutype26Dv0A, hs_iszusocket26Dv0M, hs_filepath26Dv0V, hs_iomode26Dv0z, hs_binary26Dv0W) {
        var hs_sat26Dv2l = new $hs.Func(1);
        hs_sat26Dv2l.evaluate = function (hs_ds26Dv0P) {
            var hs_wild26Dv2i = hs_ds26Dv0P;
            if (hs_ds26Dv0P.notEvaluated) {
                hs_wild26Dv2i = hs_ds26Dv0P.hscall();
            }
            var hs_fd26Dv0T = hs_wild26Dv2i.data[0];
            var hs_fdzutype26Dv0U = hs_wild26Dv2i.data[1];
            var hs_sat26Dv2j = new $hs.Thunk();
            hs_sat26Dv2j.evaluateOnce = function () {
                var hs_wild126Dv2h = hs_binary26Dv0W;
                if (hs_binary26Dv0W.notEvaluated) {
                    hs_wild126Dv2h = hs_binary26Dv0W.hscall();
                }
                switch (hs_wild126Dv2h.tag) {
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
            return $hs.modules.GHCziIOziHandleziFD.hs_mkHandleFromFD.hscall(hs_fd26Dv0T, hs_fdzutype26Dv0U, hs_filepath26Dv0V, hs_iomode26Dv0z, hs_iszusocket26Dv0M, hs_sat26Dv2j);
        };
        var hs_sat26Dv2s = new $hs.Thunk();
        hs_sat26Dv2s.evaluateOnce = function () {
            var hs_sat26Dv2r = new $hs.Thunk();
            hs_sat26Dv2r.evaluateOnce = function () {
                var hs_wild26Dv2k = hs_mbzutype26Dv0A;
                if (hs_mbzutype26Dv0A.notEvaluated) {
                    hs_wild26Dv2k = hs_mbzutype26Dv0A.hscall();
                }
                switch (hs_wild26Dv2k.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_ds26Dv0D = hs_wild26Dv2k.data[0];
                    var hs_wild126Dv0F = hs_ds26Dv0D;
                    if (hs_ds26Dv0D.notEvaluated) {
                        hs_wild126Dv0F = hs_ds26Dv0D.hscall();
                    }
                    switch (hs_wild126Dv0F.tag) {
                    case 3:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    default:
                        var hs_sat26Dv2n = new $hs.Thunk();
                        hs_sat26Dv2n.evaluateOnce = function () {
                            var hs_sat26Dv2m = new $hs.Thunk();
                            hs_sat26Dv2m.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCIno, hs_sat26Dv2m);
                        };
                        var hs_sat26Dv2p = new $hs.Thunk();
                        hs_sat26Dv2p.evaluateOnce = function () {
                            var hs_sat26Dv2o = new $hs.Thunk();
                            hs_sat26Dv2o.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCDev, hs_sat26Dv2o);
                        };
                        var hs_sat26Dv2q = new $hs.Data(1);
                        hs_sat26Dv2q.data = [hs_wild126Dv0F, hs_sat26Dv2p, hs_sat26Dv2n];
                        var $res = new $hs.Data(2);
                        $res.data = [hs_sat26Dv2q];
                        return $res;
                    }
                }
            };
            return $hs.modules.GHCziIOziFD.hs_mkFD.hscall(hs_fdint26Dv0y, hs_iomode26Dv0z, hs_sat26Dv2r, hs_iszusocket26Dv0M, hs_iszusocket26Dv0M);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dv2s, hs_sat26Dv2l);
    };
    this.hs_fdToHandle.evaluate = function (hs_fdint26Dv11) {
        var hs_sat26Dv2C = new $hs.Func(1);
        hs_sat26Dv2C.evaluate = function (hs_iomode26Dv14) {
            var hs_sat26Dv2A = new $hs.Func(1);
            hs_sat26Dv2A.evaluate = function (hs_ds26Dv17) {
                var hs_wild26Dv2t = hs_ds26Dv17;
                if (hs_ds26Dv17.notEvaluated) {
                    hs_wild26Dv2t = hs_ds26Dv17.hscall();
                }
                var hs_fd26Dv1b = hs_wild26Dv2t.data[0];
                var hs_fdzutype26Dv1c = hs_wild26Dv2t.data[1];
                var hs_sat26Dv2z = new $hs.Thunk();
                hs_sat26Dv2z.evaluateOnce = function () {
                    var hs_sat26Dv2x = new $hs.Thunk();
                    hs_sat26Dv2x.evaluateOnce = function () {
                        var hs_sat26Dv2u = new $hs.Data(1);
                        hs_sat26Dv2u.data = [">"];
                        var hs_sat26Dv2v = new $hs.Data(2);
                        hs_sat26Dv2v.data = [hs_sat26Dv2u, $hs.modules.GHCziTypes.hs_ZMZN];
                        var hs_sat26Dv2w = new $hs.Thunk();
                        hs_sat26Dv2w.evaluateOnce = function () {
                            return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziIOziFD.hs_zdfShowFD, hs_fd26Dv1b);
                        };
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Dv2w, hs_sat26Dv2v);
                    };
                    var hs_sat26Dv2y = new $hs.Thunk();
                    hs_sat26Dv2y.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("<file descriptor: \x00");
                    };
                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Dv2y, hs_sat26Dv2x);
                };
                return $hs.modules.GHCziIOziHandleziFD.hs_mkHandleFromFD.hscall(hs_fd26Dv1b, hs_fdzutype26Dv1c, hs_sat26Dv2z, hs_iomode26Dv14, $hs.modules.GHCziBool.hs_False, $hs.modules.DataziMaybe.hs_Nothing);
            };
            var hs_sat26Dv2B = new $hs.Thunk();
            hs_sat26Dv2B.evaluateOnce = function () {
                return $hs.modules.GHCziIOziFD.hs_mkFD.hscall(hs_fdint26Dv11, hs_iomode26Dv14, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.GHCziBool.hs_False, $hs.modules.GHCziBool.hs_False);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dv2B, hs_sat26Dv2A);
        };
        var hs_sat26Dv2D = new $hs.Thunk();
        hs_sat26Dv2D.evaluateOnce = function () {
            return $hs.modules.SystemziPosixziInternals.hs_fdGetMode.hscall(hs_fdint26Dv11);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dv2D, hs_sat26Dv2C);
    };
};
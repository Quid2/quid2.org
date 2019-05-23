
$hs.modules.GHCziIOziHandleziText = new $hs.Module();
$hs.modules.GHCziIOziHandleziText.dependencies = ["GHC.Prim", "GHC.Types", "GHC.CString", "GHC.Unit", "Control.Monad", "System.IO.Error", "Data.Maybe", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.Show", "GHC.Err", "GHC.Exception", "Data.Typeable", "GHC.Classes", "GHC.IO", "GHC.IO.Buffer", "GHC.IO.BufferedIO", "GHC.IO.Device", "GHC.IO.Encoding.Failure", "GHC.IO.Exception", "GHC.IO.FD", "GHC.IO.Handle.Internals", "GHC.IO.Handle.Types", "GHC.IORef", "GHC.List", "GHC.Ptr", "Control.Exception.Base", "Foreign.C.Types", "Foreign.Storable"];
$hs.modules.GHCziIOziHandleziText.initBeforeDependencies = function () {
    this.hs_commitBufferzq = new $hs.Func(6);
    this.hs_hWaitForInput = new $hs.Func(2);
    this.hs_memcpy = new $hs.Func(4);
    this.hs_hPutBuf = new $hs.Func(3);
    this.hs_hPutBufNonBlocking = new $hs.Func(3);
    this.hs_hGetBuf = new $hs.Func(3);
    this.hs_hGetBufSome = new $hs.Func(3);
    this.hs_hGetBufNonBlocking = new $hs.Func(3);
    this.hs_hGetChar = new $hs.Func(1);
    this.hs_hGetLine = new $hs.Func(1);
    this.hs_hGetContents = new $hs.Func(1);
    this.hs_hPutChar = new $hs.Func(2);
    this.hs_hPutStr = new $hs.Func(2);
    this.hs_hPutStrLn = new $hs.Func(2);
    this.hs_commitBufferzq.notEvaluated = true;
    this.hs_commitBufferzq.evaluate = function (hs_raw26D7uU, hs_szz26D7u8, hs_count26D7ub, hs_flush26D7uG, hs_release26D7uJ, hs_hzu26D7ue) {
        $hs.modules.GHCziIOziHandleziText.loadDependencies();
        return this.evaluate(hs_raw26D7uU, hs_szz26D7u8, hs_count26D7ub, hs_flush26D7uG, hs_release26D7uJ, hs_hzu26D7ue);
    };
    this.hs_hWaitForInput.notEvaluated = true;
    this.hs_hWaitForInput.evaluate = function (hs_h26D7yD, hs_msecs26D7z6) {
        $hs.modules.GHCziIOziHandleziText.loadDependencies();
        return this.evaluate(hs_h26D7yD, hs_msecs26D7z6);
    };
    this.hs_memcpy.notEvaluated = true;
    this.hs_memcpy.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziIOziHandleziText.loadDependencies();
        return this.evaluate(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_hPutBuf.notEvaluated = true;
    this.hs_hPutBuf.evaluate = function (hs_h26D7DT, hs_ptr26D7DU, hs_count26D7DV) {
        $hs.modules.GHCziIOziHandleziText.loadDependencies();
        return this.evaluate(hs_h26D7DT, hs_ptr26D7DU, hs_count26D7DV);
    };
    this.hs_hPutBufNonBlocking.notEvaluated = true;
    this.hs_hPutBufNonBlocking.evaluate = function (hs_h26D7E3, hs_ptr26D7E4, hs_count26D7E5) {
        $hs.modules.GHCziIOziHandleziText.loadDependencies();
        return this.evaluate(hs_h26D7E3, hs_ptr26D7E4, hs_count26D7E5);
    };
    this.hs_hGetBuf.notEvaluated = true;
    this.hs_hGetBuf.evaluate = function (hs_h26D7HS, hs_ptr26D7It, hs_count26D7HM) {
        $hs.modules.GHCziIOziHandleziText.loadDependencies();
        return this.evaluate(hs_h26D7HS, hs_ptr26D7It, hs_count26D7HM);
    };
    this.hs_hGetBufSome.notEvaluated = true;
    this.hs_hGetBufSome.evaluate = function (hs_h26D7LF, hs_ptr26D7Mh, hs_count26D7Lz) {
        $hs.modules.GHCziIOziHandleziText.loadDependencies();
        return this.evaluate(hs_h26D7LF, hs_ptr26D7Mh, hs_count26D7Lz);
    };
    this.hs_hGetBufNonBlocking.notEvaluated = true;
    this.hs_hGetBufNonBlocking.evaluate = function (hs_h26D7Nj, hs_ptr26D7NU, hs_count26D7Nd) {
        $hs.modules.GHCziIOziHandleziText.loadDependencies();
        return this.evaluate(hs_h26D7Nj, hs_ptr26D7NU, hs_count26D7Nd);
    };
    this.hs_hGetChar.notEvaluated = true;
    this.hs_hGetChar.evaluate = function (hs_handle26D7Ok) {
        $hs.modules.GHCziIOziHandleziText.loadDependencies();
        return this.evaluate(hs_handle26D7Ok);
    };
    this.hs_hGetLine.notEvaluated = true;
    this.hs_hGetLine.evaluate = function (hs_h26D7Ue) {
        $hs.modules.GHCziIOziHandleziText.loadDependencies();
        return this.evaluate(hs_h26D7Ue);
    };
    this.hs_hGetContents.notEvaluated = true;
    this.hs_hGetContents.evaluate = function (hs_handle26D7Wv) {
        $hs.modules.GHCziIOziHandleziText.loadDependencies();
        return this.evaluate(hs_handle26D7Wv);
    };
    this.hs_hPutChar.notEvaluated = true;
    this.hs_hPutChar.evaluate = function (hs_handle26D7Xj, hs_c26D7Xe) {
        $hs.modules.GHCziIOziHandleziText.loadDependencies();
        return this.evaluate(hs_handle26D7Xj, hs_c26D7Xe);
    };
    this.hs_hPutStr.notEvaluated = true;
    this.hs_hPutStr.evaluate = function (hs_handle26D81V, hs_str26D81W) {
        $hs.modules.GHCziIOziHandleziText.loadDependencies();
        return this.evaluate(hs_handle26D81V, hs_str26D81W);
    };
    this.hs_hPutStrLn.notEvaluated = true;
    this.hs_hPutStrLn.evaluate = function (hs_handle26D81Z, hs_str26D820) {
        $hs.modules.GHCziIOziHandleziText.loadDependencies();
        return this.evaluate(hs_handle26D81Z, hs_str26D820);
    };
};
$hs.modules.GHCziIOziHandleziText.initAfterDependencies = function () {
    this.hs_commitBufferzq.notEvaluated = false;
    this.hs_hWaitForInput.notEvaluated = false;
    this.hs_memcpy.notEvaluated = false;
    this.hs_hPutBuf.notEvaluated = false;
    this.hs_hPutBufNonBlocking.notEvaluated = false;
    this.hs_hGetBuf.notEvaluated = false;
    this.hs_hGetBufSome.notEvaluated = false;
    this.hs_hGetBufNonBlocking.notEvaluated = false;
    this.hs_hGetChar.notEvaluated = false;
    this.hs_hGetLine.notEvaluated = false;
    this.hs_hGetContents.notEvaluated = false;
    this.hs_hPutChar.notEvaluated = false;
    this.hs_hPutStr.notEvaluated = false;
    this.hs_hPutStrLn.notEvaluated = false;
    var hs_illegalBufferSizze25u9D5 = new $hs.Func(3);
    var hs_commitBuffer25u9CN = new $hs.Func(6);
    var hs_getSomeCharacters25u9CE = new $hs.Func(2);
    var hs_zdwccall25uJ3l = new $hs.Func(4);
    var hs_a25uJ3w = new $hs.Func(4);
    var hs_bufWrite25u9CS = new $hs.Func(4);
    var hs_hPutBufzq25u9CR = new $hs.Func(4);
    var hs_copyFromRawBuffer25u9D4 = new $hs.Func(4);
    var hs_bufReadEmpty25u9CX = new $hs.Func(5);
    var hs_bufReadNonEmpty25u9CW = new $hs.Func(5);
    var hs_bufReadNBNonEmpty25u9D2 = new $hs.Func(5);
    var hs_bufReadNBEmpty25u9D1 = new $hs.Func(5);
    var hs_maybeFillReadBuffer25u9Cy = new $hs.Func(2);
    var hs_unpack25u9Cz = new $hs.Func(4);
    var hs_unpackzunl25u9CA = new $hs.Func(4);
    var hs_hGetLineBufferedLoop25u9Cx = new $hs.Func(3);
    var hs_lazzyRead25u9CC = new $hs.Func(1);
    var hs_hPutChars25u9CK = new $hs.Func(2);
    var hs_writeBlocks25u9CM = new $hs.Func(6);
    var hs_hPutStrzq25u9CJ = new $hs.Func(3);
    hs_illegalBufferSizze25u9D5.evaluate = function (hs_handle26D7tT, hs_fn26D7tV, hs_szz26D7tY) {
        var hs_sat26D822 = new $hs.Thunk();
        hs_sat26D822.evaluateOnce = function () {
            var hs_sat26D825 = new $hs.Thunk();
            hs_sat26D825.evaluateOnce = function () {
                var hs_sat26D826 = new $hs.Data(1);
                hs_sat26D826.data = [9];
                return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_sat26D826, hs_szz26D7tY, $hs.modules.GHCziTypes.hs_ZMZN);
            };
            var hs_sat26D824 = new $hs.Thunk();
            hs_sat26D824.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("illegal buffer size \x00");
            };
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D824, hs_sat26D825);
        };
        var hs_sat26D823 = new $hs.Data(2);
        hs_sat26D823.data = [hs_handle26D7tT];
        var hs_sat26D821 = new $hs.Data(1);
        hs_sat26D821.data = [hs_sat26D823, $hs.modules.GHCziIOziException.hs_InvalidArgument, hs_fn26D7tV, hs_sat26D822, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing];
        return $hs.modules.GHCziIOziException.hs_ioException.hscall(hs_sat26D821);
    };
    this.hs_commitBufferzq.evaluate = function (hs_raw26D7uU, hs_szz26D7u8, hs_count26D7ub, hs_flush26D7uG, hs_release26D7uJ, hs_hzu26D7ue) {
        var hs_wild26D7uA = hs_szz26D7u8;
        if (hs_szz26D7u8.notEvaluated) {
            hs_wild26D7uA = hs_szz26D7u8.hscall();
        }
        var hs_wild126D7uD = hs_count26D7ub;
        if (hs_count26D7ub.notEvaluated) {
            hs_wild126D7uD = hs_count26D7ub.hscall();
        }
        var hs_wild226D7v7 = hs_hzu26D7ue;
        if (hs_hzu26D7ue.notEvaluated) {
            hs_wild226D7v7 = hs_hzu26D7ue.hscall();
        }
        var hs_rb226D7vd = hs_wild226D7v7.data[8];
        var hs_rb326D7ux = hs_wild226D7v7.data[9];
        var hs_a126D7uy = new $hs.Data(1);
        hs_a126D7uy.data = [hs_rb326D7ux];
        var hs_sat26D82o = new $hs.Thunk();
        hs_sat26D82o.evaluateOnce = function () {
            var hs_thiszubuf26D7v6 = new $hs.Thunk();
            hs_thiszubuf26D7v6.evaluateOnce = function () {
                var hs_tpl26D836 = hs_raw26D7uU;
                if (hs_raw26D7uU.notEvaluated) {
                    hs_tpl26D836 = hs_raw26D7uU.hscall();
                }
                var hs_tpl126D7v2 = hs_tpl26D836.data[0];
                var hs_tpl226D7v3 = hs_tpl26D836.data[1];
                var hs_tpl326D835 = hs_wild26D7uA;
                if (hs_wild26D7uA.notEvaluated) {
                    hs_tpl326D835 = hs_wild26D7uA.hscall();
                }
                var hs_tpl426D7v4 = hs_tpl326D835.data[0];
                var hs_tpl526D834 = hs_wild126D7uD;
                if (hs_wild126D7uD.notEvaluated) {
                    hs_tpl526D834 = hs_wild126D7uD.hscall();
                }
                var hs_tpl626D7v5 = hs_tpl526D834.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_tpl126D7v2, hs_tpl226D7v3, $hs.modules.GHCziIOziBuffer.hs_WriteBuffer, hs_tpl426D7v4, 0, hs_tpl626D7v5];
                return $res;
            };
            var hs_sat26D82F = new $hs.Thunk();
            hs_sat26D82F.evaluateOnce = function () {
                var hs_sat26D82H = new $hs.Thunk();
                hs_sat26D82H.evaluateOnce = function () {
                    var hs_sat26D82L = new $hs.Thunk();
                    hs_sat26D82L.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_thiszubuf26D7v6);
                    };
                    var hs_sat26D82K = new $hs.Thunk();
                    hs_sat26D82K.evaluateOnce = function () {
                        var hs_sat26D82N = new $hs.Thunk();
                        hs_sat26D82N.evaluateOnce = function () {
                            var hs_sat26D82P = new $hs.Func(1);
                            hs_sat26D82P.evaluate = function (hs_oldzubuf26D7vh) {
                                var hs_wild326D82S = hs_oldzubuf26D7vh;
                                if (hs_oldzubuf26D7vh.notEvaluated) {
                                    hs_wild326D82S = hs_oldzubuf26D7vh.hscall();
                                }
                                var hs_rb626D7vp = hs_wild326D82S.data[3];
                                var hs_sat26D82Y = new $hs.Thunk();
                                hs_sat26D82Y.evaluateOnce = function () {
                                    var hs_sat26D832 = new $hs.Func(1);
                                    hs_sat26D832.evaluate = function (hs_sparezubufs26D7vv) {
                                        var hs_sat26D833 = new $hs.Data(2);
                                        hs_sat26D833.data = [hs_raw26D7uU, hs_sparezubufs26D7vv];
                                        return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126D7uy, hs_sat26D833);
                                    };
                                    var hs_sat26D831 = new $hs.Thunk();
                                    hs_sat26D831.evaluateOnce = function () {
                                        return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a126D7uy);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D831, hs_sat26D832);
                                };
                                var hs_sat26D82R = new $hs.Thunk();
                                hs_sat26D82R.evaluateOnce = function () {
                                    var hs_sat26D82Z = new $hs.Thunk();
                                    hs_sat26D82Z.evaluateOnce = function () {
                                        var hs_sat26D830 = new $hs.Data(1);
                                        hs_sat26D830.data = [hs_rb626D7vp];
                                        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_wild26D7uA, hs_sat26D830);
                                    };
                                    return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D82Z);
                                };
                                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D82R, hs_sat26D82Y);
                            };
                            var hs_sat26D82O = new $hs.Thunk();
                            hs_sat26D82O.evaluateOnce = function () {
                                var hs_sat26D82Q = new $hs.Data(1);
                                hs_sat26D82Q.data = [hs_rb226D7vd];
                                return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_sat26D82Q);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D82O, hs_sat26D82P);
                        };
                        var hs_sat26D82M = new $hs.Thunk();
                        hs_sat26D82M.evaluateOnce = function () {
                            return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_release26D7uJ);
                        };
                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D82M, hs_sat26D82N);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D82K, hs_sat26D82L);
                };
                var hs_sat26D82G = new $hs.Thunk();
                hs_sat26D82G.evaluateOnce = function () {
                    var hs_sat26D82J = new $hs.Thunk();
                    hs_sat26D82J.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziHandleziInternals.hs_flushByteWriteBuffer.hscall(hs_wild226D7v7);
                    };
                    var hs_sat26D82I = new $hs.Thunk();
                    hs_sat26D82I.evaluateOnce = function () {
                        return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_flush26D7uG);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D82I, hs_sat26D82J);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D82G, hs_sat26D82H);
            };
            var hs_sat26D82E = new $hs.Thunk();
            hs_sat26D82E.evaluateOnce = function () {
                return $hs.modules.GHCziIOziHandleziInternals.hs_writeCharBuffer.hscall(hs_wild226D7v7, hs_thiszubuf26D7v6);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D82E, hs_sat26D82F);
        };
        var hs_sat26D827 = new $hs.Thunk();
        hs_sat26D827.evaluateOnce = function () {
            var hs_sat26D82p = new $hs.Thunk();
            hs_sat26D82p.evaluateOnce = function () {
                var hs_sat26D82r = new $hs.Thunk();
                hs_sat26D82r.evaluateOnce = function () {
                    var hs_sat26D82t = new $hs.Thunk();
                    hs_sat26D82t.evaluateOnce = function () {
                        var hs_sat26D82v = new $hs.Thunk();
                        hs_sat26D82v.evaluateOnce = function () {
                            var hs_sat26D82x = new $hs.Thunk();
                            hs_sat26D82x.evaluateOnce = function () {
                                var hs_sat26D82z = new $hs.Thunk();
                                hs_sat26D82z.evaluateOnce = function () {
                                    var hs_sat26D82B = new $hs.Thunk();
                                    hs_sat26D82B.evaluateOnce = function () {
                                        var hs_sat26D82D = new $hs.Thunk();
                                        hs_sat26D82D.evaluateOnce = function () {
                                            return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziShow.hs_zdfShowBool, hs_release26D7uJ);
                                        };
                                        var hs_sat26D82C = new $hs.Thunk();
                                        hs_sat26D82C.evaluateOnce = function () {
                                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall(", release=\x00");
                                        };
                                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D82C, hs_sat26D82D);
                                    };
                                    var hs_sat26D82A = new $hs.Thunk();
                                    hs_sat26D82A.evaluateOnce = function () {
                                        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziShow.hs_zdfShowBool, hs_flush26D7uG);
                                    };
                                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D82A, hs_sat26D82B);
                                };
                                var hs_sat26D82y = new $hs.Thunk();
                                hs_sat26D82y.evaluateOnce = function () {
                                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall(", flush=\x00");
                                };
                                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D82y, hs_sat26D82z);
                            };
                            var hs_sat26D82w = new $hs.Thunk();
                            hs_sat26D82w.evaluateOnce = function () {
                                return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_wild126D7uD);
                            };
                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D82w, hs_sat26D82x);
                        };
                        var hs_sat26D82u = new $hs.Thunk();
                        hs_sat26D82u.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall(", count=\x00");
                        };
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D82u, hs_sat26D82v);
                    };
                    var hs_sat26D82s = new $hs.Thunk();
                    hs_sat26D82s.evaluateOnce = function () {
                        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_wild26D7uA);
                    };
                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D82s, hs_sat26D82t);
                };
                var hs_sat26D82q = new $hs.Thunk();
                hs_sat26D82q.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("commitBuffer: sz=\x00");
                };
                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D82q, hs_sat26D82r);
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_debugIO.hscall(hs_sat26D82p);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D827, hs_sat26D82o);
    };
    hs_commitBuffer25u9CN.evaluate = function (hs_hdl26D7vX, hs_raw26D7vM, hs_szz26D7vQ, hs_count26D7vT, hs_flush26D7ws, hs_release26D7wv) {
        var hs_raw126D7wG = hs_raw26D7vM;
        if (hs_raw26D7vM.notEvaluated) {
            hs_raw126D7wG = hs_raw26D7vM.hscall();
        }
        var hs_szz126D7wm = hs_szz26D7vQ;
        if (hs_szz26D7vQ.notEvaluated) {
            hs_szz126D7wm = hs_szz26D7vQ.hscall();
        }
        var hs_count126D7wp = hs_count26D7vT;
        if (hs_count26D7vT.notEvaluated) {
            hs_count126D7wp = hs_count26D7vT.hscall();
        }
        var hs_sat26D83c = new $hs.Func(1);
        hs_sat26D83c.evaluate = function (hs_hzu26D7w0) {
            var hs_wild26D7wF = hs_hzu26D7w0;
            if (hs_hzu26D7w0.notEvaluated) {
                hs_wild26D7wF = hs_hzu26D7w0.hscall();
            }
            var hs_rb226D7wY = hs_wild26D7wF.data[8];
            var hs_rb326D7wj = hs_wild26D7wF.data[9];
            var hs_a126D7wk = new $hs.Data(1);
            hs_a126D7wk.data = [hs_rb326D7wj];
            var hs_sat26D83t = new $hs.Thunk();
            hs_sat26D83t.evaluateOnce = function () {
                var hs_sat26D83K = new $hs.Thunk();
                hs_sat26D83K.evaluateOnce = function () {
                    var hs_sat26D83Q = new $hs.Thunk();
                    hs_sat26D83Q.evaluateOnce = function () {
                        var hs_sat26D83U = new $hs.Thunk();
                        hs_sat26D83U.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                        };
                        var hs_sat26D83T = new $hs.Thunk();
                        hs_sat26D83T.evaluateOnce = function () {
                            var hs_sat26D83W = new $hs.Thunk();
                            hs_sat26D83W.evaluateOnce = function () {
                                var hs_sat26D83Y = new $hs.Func(1);
                                hs_sat26D83Y.evaluate = function (hs_oldzubuf26D7x2) {
                                    var hs_wild126D841 = hs_oldzubuf26D7x2;
                                    if (hs_oldzubuf26D7x2.notEvaluated) {
                                        hs_wild126D841 = hs_oldzubuf26D7x2.hscall();
                                    }
                                    var hs_rb626D7xa = hs_wild126D841.data[3];
                                    var hs_sat26D847 = new $hs.Thunk();
                                    hs_sat26D847.evaluateOnce = function () {
                                        var hs_sat26D84b = new $hs.Func(1);
                                        hs_sat26D84b.evaluate = function (hs_sparezubufs26D7xg) {
                                            var hs_sat26D84c = new $hs.Data(2);
                                            hs_sat26D84c.data = [hs_raw126D7wG, hs_sparezubufs26D7xg];
                                            return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126D7wk, hs_sat26D84c);
                                        };
                                        var hs_sat26D84a = new $hs.Thunk();
                                        hs_sat26D84a.evaluateOnce = function () {
                                            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a126D7wk);
                                        };
                                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D84a, hs_sat26D84b);
                                    };
                                    var hs_sat26D840 = new $hs.Thunk();
                                    hs_sat26D840.evaluateOnce = function () {
                                        var hs_sat26D848 = new $hs.Thunk();
                                        hs_sat26D848.evaluateOnce = function () {
                                            var hs_sat26D849 = new $hs.Data(1);
                                            hs_sat26D849.data = [hs_rb626D7xa];
                                            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_szz126D7wm, hs_sat26D849);
                                        };
                                        return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D848);
                                    };
                                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D840, hs_sat26D847);
                                };
                                var hs_sat26D83X = new $hs.Thunk();
                                hs_sat26D83X.evaluateOnce = function () {
                                    var hs_sat26D83Z = new $hs.Data(1);
                                    hs_sat26D83Z.data = [hs_rb226D7wY];
                                    return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_sat26D83Z);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D83X, hs_sat26D83Y);
                            };
                            var hs_sat26D83V = new $hs.Thunk();
                            hs_sat26D83V.evaluateOnce = function () {
                                return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_release26D7wv);
                            };
                            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D83V, hs_sat26D83W);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D83T, hs_sat26D83U);
                    };
                    var hs_sat26D83P = new $hs.Thunk();
                    hs_sat26D83P.evaluateOnce = function () {
                        var hs_sat26D83S = new $hs.Thunk();
                        hs_sat26D83S.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziHandleziInternals.hs_flushByteWriteBuffer.hscall(hs_wild26D7wF);
                        };
                        var hs_sat26D83R = new $hs.Thunk();
                        hs_sat26D83R.evaluateOnce = function () {
                            return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_flush26D7ws);
                        };
                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D83R, hs_sat26D83S);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D83P, hs_sat26D83Q);
                };
                var hs_sat26D83J = new $hs.Thunk();
                hs_sat26D83J.evaluateOnce = function () {
                    var hs_sat26D83L = new $hs.Thunk();
                    hs_sat26D83L.evaluateOnce = function () {
                        var hs_tpl26D83O = hs_raw126D7wG;
                        if (hs_raw126D7wG.notEvaluated) {
                            hs_tpl26D83O = hs_raw126D7wG.hscall();
                        }
                        var hs_tpl126D7wO = hs_tpl26D83O.data[0];
                        var hs_tpl226D7wP = hs_tpl26D83O.data[1];
                        var hs_tpl326D83N = hs_szz126D7wm;
                        if (hs_szz126D7wm.notEvaluated) {
                            hs_tpl326D83N = hs_szz126D7wm.hscall();
                        }
                        var hs_tpl426D7wQ = hs_tpl326D83N.data[0];
                        var hs_tpl526D83M = hs_count126D7wp;
                        if (hs_count126D7wp.notEvaluated) {
                            hs_tpl526D83M = hs_count126D7wp.hscall();
                        }
                        var hs_tpl626D7wR = hs_tpl526D83M.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_tpl126D7wO, hs_tpl226D7wP, $hs.modules.GHCziIOziBuffer.hs_WriteBuffer, hs_tpl426D7wQ, 0, hs_tpl626D7wR];
                        return $res;
                    };
                    return $hs.modules.GHCziIOziHandleziInternals.hs_writeCharBuffer.hscall(hs_wild26D7wF, hs_sat26D83L);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D83J, hs_sat26D83K);
            };
            var hs_sat26D83e = new $hs.Thunk();
            hs_sat26D83e.evaluateOnce = function () {
                var hs_sat26D83u = new $hs.Thunk();
                hs_sat26D83u.evaluateOnce = function () {
                    var hs_sat26D83w = new $hs.Thunk();
                    hs_sat26D83w.evaluateOnce = function () {
                        var hs_sat26D83y = new $hs.Thunk();
                        hs_sat26D83y.evaluateOnce = function () {
                            var hs_sat26D83A = new $hs.Thunk();
                            hs_sat26D83A.evaluateOnce = function () {
                                var hs_sat26D83C = new $hs.Thunk();
                                hs_sat26D83C.evaluateOnce = function () {
                                    var hs_sat26D83E = new $hs.Thunk();
                                    hs_sat26D83E.evaluateOnce = function () {
                                        var hs_sat26D83G = new $hs.Thunk();
                                        hs_sat26D83G.evaluateOnce = function () {
                                            var hs_sat26D83I = new $hs.Thunk();
                                            hs_sat26D83I.evaluateOnce = function () {
                                                return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziShow.hs_zdfShowBool, hs_release26D7wv);
                                            };
                                            var hs_sat26D83H = new $hs.Thunk();
                                            hs_sat26D83H.evaluateOnce = function () {
                                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall(", release=\x00");
                                            };
                                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D83H, hs_sat26D83I);
                                        };
                                        var hs_sat26D83F = new $hs.Thunk();
                                        hs_sat26D83F.evaluateOnce = function () {
                                            return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziShow.hs_zdfShowBool, hs_flush26D7ws);
                                        };
                                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D83F, hs_sat26D83G);
                                    };
                                    var hs_sat26D83D = new $hs.Thunk();
                                    hs_sat26D83D.evaluateOnce = function () {
                                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall(", flush=\x00");
                                    };
                                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D83D, hs_sat26D83E);
                                };
                                var hs_sat26D83B = new $hs.Thunk();
                                hs_sat26D83B.evaluateOnce = function () {
                                    return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_count126D7wp);
                                };
                                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D83B, hs_sat26D83C);
                            };
                            var hs_sat26D83z = new $hs.Thunk();
                            hs_sat26D83z.evaluateOnce = function () {
                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall(", count=\x00");
                            };
                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D83z, hs_sat26D83A);
                        };
                        var hs_sat26D83x = new $hs.Thunk();
                        hs_sat26D83x.evaluateOnce = function () {
                            return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_szz126D7wm);
                        };
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D83x, hs_sat26D83y);
                    };
                    var hs_sat26D83v = new $hs.Thunk();
                    hs_sat26D83v.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("commitBuffer: sz=\x00");
                    };
                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D83v, hs_sat26D83w);
                };
                return $hs.modules.GHCziIOziHandleziInternals.hs_debugIO.hscall(hs_sat26D83u);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D83e, hs_sat26D83t);
        };
        var hs_sat26D837 = new $hs.Thunk();
        hs_sat26D837.evaluateOnce = function () {
            var hs_sat26D83d = new $hs.Thunk();
            hs_sat26D83d.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("commitBuffer\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_wantWritableHandle.hscall(hs_sat26D83d, hs_hdl26D7vX);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D837, hs_sat26D83c);
    };
    hs_getSomeCharacters25u9CE.evaluate = function (hs_handlezu26D7xu, hs_buf26D7xM) {
        var hs_wild26D7y3 = hs_handlezu26D7xu;
        if (hs_handlezu26D7xu.notEvaluated) {
            hs_wild26D7y3 = hs_handlezu26D7xu.hscall();
        }
        var hs_ds626D7y4 = hs_wild26D7y3.data[13];
        var hs_wild126D7xY = hs_buf26D7xM;
        if (hs_buf26D7xM.notEvaluated) {
            hs_wild126D7xY = hs_buf26D7xM.hscall();
        }
        var hs_rb426D7xV = hs_wild126D7xY.data[0];
        var hs_rb526D7xW = hs_wild126D7xY.data[1];
        var hs_rb726D7y6 = hs_wild126D7xY.data[4];
        var hs_bufRaw26D7xX = new $hs.Data(1);
        hs_bufRaw26D7xX.data = [hs_rb426D7xV, hs_rb526D7xW];
        var hs_wild226D84w = $hs.modules.GHCziIOziBuffer.hs_bufferElems.hscall(hs_wild126D7xY);
        var hs_ds1026D7y1 = hs_wild226D84w.data[0];
        var hs_ds1126D84d = hs_ds1026D7y1;
        if (hs_ds1026D7y1.notEvaluated) {
            hs_ds1126D84d = hs_ds1026D7y1.hscall();
        }
        switch (hs_ds1126D84d) {
        case 0:
            return $hs.modules.GHCziIOziHandleziInternals.hs_readTextDevice.hscall(hs_wild26D7y3, hs_wild126D7xY);
        case 1:
            var hs_wild326D84y = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfEqNewline, hs_ds626D7y4, $hs.modules.GHCziIOziHandleziTypes.hs_CRLF);
            switch (hs_wild326D84y.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_wild126D7xY);
            case 2:
                var hs_sat26D84z = new $hs.Func(1);
                hs_sat26D84z.evaluate = function (hs_ds1226D7ya) {
                    var hs_wild426D84C = hs_ds1226D7ya;
                    if (hs_ds1226D7ya.notEvaluated) {
                        hs_wild426D84C = hs_ds1226D7ya.hscall();
                    }
                    var hs_c26D7ye = hs_wild426D84C.data[0];
                    var hs_sat26D84E = new $hs.Data(1);
                    hs_sat26D84E.data = ["\r"];
                    var hs_wild526D84F = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c26D7ye, hs_sat26D84E);
                    switch (hs_wild526D84F.tag) {
                    case 1:
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_wild126D7xY);
                    case 2:
                        var hs_sat26D84G = new $hs.Func(1);
                        hs_sat26D84G.evaluate = function (hs_ds1426D7yx) {
                            var hs_sat26D84J = new $hs.Thunk();
                            hs_sat26D84J.evaluateOnce = function () {
                                var hs_wild626D84M = hs_wild126D7xY;
                                if (hs_wild126D7xY.notEvaluated) {
                                    hs_wild626D84M = hs_wild126D7xY.hscall();
                                }
                                var hs_rb926D7ys = hs_wild626D84M.data[0];
                                var hs_rb1026D7yt = hs_wild626D84M.data[1];
                                var hs_ds1526D7yu = hs_wild626D84M.data[2];
                                var hs_rb1126D7yv = hs_wild626D84M.data[3];
                                var $res = new $hs.Data(1);
                                $res.data = [hs_rb926D7ys, hs_rb1026D7yt, hs_ds1526D7yu, hs_rb1126D7yv, 0, 1];
                                return $res;
                            };
                            return $hs.modules.GHCziIOziHandleziInternals.hs_readTextDevice.hscall(hs_wild26D7y3, hs_sat26D84J);
                        };
                        var hs_sat26D84B = new $hs.Thunk();
                        hs_sat26D84B.evaluateOnce = function () {
                            var hs_sat26D84I = new $hs.Data(1);
                            hs_sat26D84I.data = ["\r"];
                            var hs_sat26D84H = new $hs.Data(1);
                            hs_sat26D84H.data = [0];
                            return $hs.modules.GHCziIOziBuffer.hs_writeCharBuf.hscall(hs_bufRaw26D7xX, hs_sat26D84H, hs_sat26D84I);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D84B, hs_sat26D84G);
                    }
                };
                var hs_sat26D84x = new $hs.Thunk();
                hs_sat26D84x.evaluateOnce = function () {
                    var hs_sat26D84A = new $hs.Data(1);
                    hs_sat26D84A.data = [hs_rb726D7y6];
                    return $hs.modules.GHCziIOziBuffer.hs_readCharBuf.hscall(hs_bufRaw26D7xX, hs_sat26D84A);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D84x, hs_sat26D84z);
            }
        default:
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_wild126D7xY);
        }
    };
    this.hs_hWaitForInput.evaluate = function (hs_h26D7yD, hs_msecs26D7z6) {
        var hs_sat26D84O = new $hs.Func(1);
        hs_sat26D84O.evaluate = function (hs_handlezu26D7yG) {
            var hs_wild26D7z9 = hs_handlezu26D7yG;
            if (hs_handlezu26D7yG.notEvaluated) {
                hs_wild26D7z9 = hs_handlezu26D7yG.hscall();
            }
            var hs_zddIODevice26D7zg = hs_wild26D7z9.data[0];
            var hs_ds26D7zh = hs_wild26D7z9.data[3];
            var hs_rb226D7yZ = hs_wild26D7z9.data[8];
            var hs_a126D7z0 = new $hs.Data(1);
            hs_a126D7z0.data = [hs_rb226D7yZ];
            var hs_sat26D854 = new $hs.Func(1);
            hs_sat26D854.evaluate = function (hs_cbuf26D7z3) {
                var hs_sat26D855 = new $hs.Thunk();
                hs_sat26D855.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziBuffer.hs_isEmptyBuffer.hscall(hs_cbuf26D7z3);
                };
                var hs_wild126D856 = $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26D855);
                switch (hs_wild126D856.tag) {
                case 1:
                    var hs_sat26D858 = new $hs.Data(1);
                    hs_sat26D858.data = [0];
                    var hs_wild226D859 = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_msecs26D7z6, hs_sat26D858);
                    switch (hs_wild226D859.tag) {
                    case 1:
                        var hs_sat26D85e = new $hs.Func(1);
                        hs_sat26D85e.evaluate = function (hs_cbufzq26D7zc) {
                            var hs_sat26D85g = new $hs.Thunk();
                            hs_sat26D85g.evaluateOnce = function () {
                                var hs_sat26D85h = new $hs.Thunk();
                                hs_sat26D85h.evaluateOnce = function () {
                                    return $hs.modules.GHCziIOziBuffer.hs_isEmptyBuffer.hscall(hs_cbufzq26D7zc);
                                };
                                var hs_wild326D85i = $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26D85h);
                                switch (hs_wild326D85i.tag) {
                                case 1:
                                    var hs_sat26D85k = new $hs.Func(1);
                                    hs_sat26D85k.evaluate = function (hs_r26D7zk) {
                                        var hs_wild426D85m = hs_r26D7zk;
                                        if (hs_r26D7zk.notEvaluated) {
                                            hs_wild426D85m = hs_r26D7zk.hscall();
                                        }
                                        switch (hs_wild426D85m.tag) {
                                        case 1:
                                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziTypes.hs_False);
                                        case 2:
                                            var hs_sat26D85n = new $hs.Func(1);
                                            hs_sat26D85n.evaluate = function (hs_ds926D7zo) {
                                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziTypes.hs_True);
                                            };
                                            var hs_sat26D85l = new $hs.Thunk();
                                            hs_sat26D85l.evaluateOnce = function () {
                                                return $hs.modules.GHCziIOziHandleziInternals.hs_hLookAheadzu.hscall(hs_wild26D7z9);
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D85l, hs_sat26D85n);
                                        }
                                    };
                                    var hs_sat26D85j = new $hs.Thunk();
                                    hs_sat26D85j.evaluateOnce = function () {
                                        return $hs.modules.GHCziIOziDevice.hs_ready.hscall(hs_zddIODevice26D7zg, hs_ds26D7zh, $hs.modules.GHCziTypes.hs_False, hs_msecs26D7z6);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D85j, hs_sat26D85k);
                                case 2:
                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziTypes.hs_True);
                                }
                            };
                            var hs_sat26D85f = new $hs.Thunk();
                            hs_sat26D85f.evaluateOnce = function () {
                                return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126D7z0, hs_cbufzq26D7zc);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D85f, hs_sat26D85g);
                        };
                        var hs_sat26D85d = new $hs.Thunk();
                        hs_sat26D85d.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziHandleziInternals.hs_decodeByteBuf.hscall(hs_wild26D7z9, hs_cbuf26D7z3);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D85d, hs_sat26D85e);
                    case 2:
                        var hs_sat26D85a = new $hs.Func(1);
                        hs_sat26D85a.evaluate = function (hs_cbufzq26D7zv) {
                            var hs_sat26D85c = new $hs.Thunk();
                            hs_sat26D85c.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziTypes.hs_True);
                            };
                            var hs_sat26D85b = new $hs.Thunk();
                            hs_sat26D85b.evaluateOnce = function () {
                                return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126D7z0, hs_cbufzq26D7zv);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D85b, hs_sat26D85c);
                        };
                        var hs_sat26D857 = new $hs.Thunk();
                        hs_sat26D857.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziHandleziInternals.hs_readTextDevice.hscall(hs_wild26D7z9, hs_cbuf26D7z3);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D857, hs_sat26D85a);
                    }
                case 2:
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziTypes.hs_True);
                }
            };
            var hs_sat26D84Q = new $hs.Thunk();
            hs_sat26D84Q.evaluateOnce = function () {
                return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a126D7z0);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D84Q, hs_sat26D854);
        };
        var hs_sat26D84N = new $hs.Thunk();
        hs_sat26D84N.evaluateOnce = function () {
            var hs_sat26D84P = new $hs.Thunk();
            hs_sat26D84P.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hWaitForInput\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_wantReadableHandlezu.hscall(hs_sat26D84P, hs_h26D7yD);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D84N, hs_sat26D84O);
    };
    hs_zdwccall25uJ3l.evaluate = function (hs_ds26D7zH, hs_ds126D7zI, hs_ds226D7zJ, hs_eta26D7zK) {
        return [hs_eta26D7zK, memcpy(hs_ds26D7zH, hs_ds126D7zI, hs_ds226D7zJ)];
    };
    hs_a25uJ3w.evaluate = function (hs_ds26D7zR, hs_ds126D7zU, hs_ds226D7zX, hs_eta26D7A4) {
        var hs_ds326D85r = hs_ds26D7zR;
        if (hs_ds26D7zR.notEvaluated) {
            hs_ds326D85r = hs_ds26D7zR.hscall();
        }
        var hs_ds426D7A1 = hs_ds326D85r.data[0];
        var hs_ds526D85q = hs_ds126D7zU;
        if (hs_ds126D7zU.notEvaluated) {
            hs_ds526D85q = hs_ds126D7zU.hscall();
        }
        var hs_ds626D7A2 = hs_ds526D85q.data[0];
        var hs_ds726D85p = hs_ds226D7zX;
        if (hs_ds226D7zX.notEvaluated) {
            hs_ds726D85p = hs_ds226D7zX.hscall();
        }
        var hs_ds826D7A3 = hs_ds726D85p.data[0];
        var hs_wild26D85s = [hs_eta26D7A4, memcpy(hs_ds426D7A1, hs_ds626D7A2, hs_ds826D7A3)];
        var hs_ds926D7A9 = hs_wild26D85s[0];
        var hs_ds1026D7Aa = hs_wild26D85s[1];
        var hs_sat26D85o = new $hs.Data(1);
        hs_sat26D85o.data = [hs_ds1026D7Aa];
        return [hs_ds926D7A9, hs_sat26D85o];
    };
    this.hs_memcpy.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a25uJ3w.hscall(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_bufWrite25u9CS.evaluate = function (hs_hzu26D7Ag, hs_ptr26D7Bz, hs_count26D7AC, hs_canzublock26D7B9) {
        var hs_wild26D7Bb = hs_hzu26D7Ag;
        if (hs_hzu26D7Ag.notEvaluated) {
            hs_wild26D7Bb = hs_hzu26D7Ag.hscall();
        }
        var hs_zddBufferedIO26D7B1 = hs_wild26D7Bb.data[1];
        var hs_ds26D7B2 = hs_wild26D7Bb.data[3];
        var hs_rb26D7Az = hs_wild26D7Bb.data[5];
        var hs_a126D7AA = new $hs.Data(1);
        hs_a126D7AA.data = [hs_rb26D7Az];
        var hs_sat26D85H = new $hs.Thunk();
        hs_sat26D85H.evaluateOnce = function () {
            var hs_sat26D85L = new $hs.Func(1);
            hs_sat26D85L.evaluate = function (hs_oldzubuf26D7AJ) {
                var hs_wild126D7B3 = hs_oldzubuf26D7AJ;
                if (hs_oldzubuf26D7AJ.notEvaluated) {
                    hs_wild126D7B3 = hs_oldzubuf26D7AJ.hscall();
                }
                var hs_rb426D7C8 = hs_wild126D7B3.data[0];
                var hs_rb526D7C9 = hs_wild126D7B3.data[1];
                var hs_rb626D7AV = hs_wild126D7B3.data[3];
                var hs_rb826D7AS = hs_wild126D7B3.data[5];
                var hs_w26D7AT = new $hs.Data(1);
                hs_w26D7AT.data = [hs_rb826D7AS];
                var hs_sizze26D7AW = new $hs.Data(1);
                hs_sizze26D7AW.data = [hs_rb626D7AV];
                var hs_sat26D85P = new $hs.Thunk();
                hs_sat26D85P.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sizze26D7AW, hs_w26D7AT);
                };
                var hs_wild226D85Q = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26D85P, hs_count26D7AC);
                switch (hs_wild226D85Q.tag) {
                case 1:
                    var hs_sat26D86f = new $hs.Thunk();
                    hs_sat26D86f.evaluateOnce = function () {
                        var hs_sat26D86i = new $hs.Func(1);
                        hs_sat26D86i.evaluate = function (hs_oldzubufzq26D7B6) {
                            var hs_sat26D86k = new $hs.Thunk();
                            hs_sat26D86k.evaluateOnce = function () {
                                var hs_wild326D86l = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_count26D7AC, hs_sizze26D7AW);
                                switch (hs_wild326D86l.tag) {
                                case 1:
                                    var hs_wild426D86n = hs_canzublock26D7B9;
                                    if (hs_canzublock26D7B9.notEvaluated) {
                                        hs_wild426D86n = hs_canzublock26D7B9.hscall();
                                    }
                                    switch (hs_wild426D86n.tag) {
                                    case 1:
                                        var hs_wild526D86I = hs_wild26D7Bb;
                                        if (hs_wild26D7Bb.notEvaluated) {
                                            hs_wild526D86I = hs_wild26D7Bb.hscall();
                                        }
                                        var hs_zddTypeable126D7Bt = hs_wild526D86I.data[2];
                                        var hs_ds1026D7Bu = hs_wild526D86I.data[3];
                                        var hs_wild626D86X = $hs.modules.DataziTypeable.hs_cast.hscall(hs_zddTypeable126D7Bt, $hs.modules.GHCziIOziFD.hs_zdfTypeableFD, hs_ds1026D7Bu);
                                        switch (hs_wild626D86X.tag) {
                                        case 1:
                                            var hs_sat26D86Y = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Todo: hPutBuf\x00");
                                            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26D86Y);
                                        case 2:
                                            var hs_fd26D7By = hs_wild626D86X.data[0];
                                            var hs_sat26D86H = new $hs.Thunk();
                                            hs_sat26D86H.evaluateOnce = function () {
                                                return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_ptr26D7Bz);
                                            };
                                            return $hs.modules.GHCziIOziDevice.hs_writeNonBlocking.hscall($hs.modules.GHCziIOziFD.hs_zdfRawIOFD, hs_fd26D7By, hs_sat26D86H, hs_count26D7AC);
                                        }
                                    case 2:
                                        var hs_sat26D86o = new $hs.Thunk();
                                        hs_sat26D86o.evaluateOnce = function () {
                                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_count26D7AC);
                                        };
                                        var hs_sat26D86m = new $hs.Thunk();
                                        hs_sat26D86m.evaluateOnce = function () {
                                            var hs_wild526D86q = hs_wild26D7Bb;
                                            if (hs_wild26D7Bb.notEvaluated) {
                                                hs_wild526D86q = hs_wild26D7Bb.hscall();
                                            }
                                            var hs_zddTypeable126D7BS = hs_wild526D86q.data[2];
                                            var hs_ds1026D7BT = hs_wild526D86q.data[3];
                                            var hs_wild626D86F = $hs.modules.DataziTypeable.hs_cast.hscall(hs_zddTypeable126D7BS, $hs.modules.GHCziIOziFD.hs_zdfTypeableFD, hs_ds1026D7BT);
                                            switch (hs_wild626D86F.tag) {
                                            case 1:
                                                var hs_sat26D86G = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Todo: hPutBuf\x00");
                                                return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26D86G);
                                            case 2:
                                                var hs_fd26D7BX = hs_wild626D86F.data[0];
                                                var hs_sat26D86p = new $hs.Thunk();
                                                hs_sat26D86p.evaluateOnce = function () {
                                                    return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_ptr26D7Bz);
                                                };
                                                return $hs.modules.GHCziIOziDevice.hs_write.hscall($hs.modules.GHCziIOziFD.hs_zdfRawIOFD, hs_fd26D7BX, hs_sat26D86p, hs_count26D7AC);
                                            }
                                        };
                                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D86m, hs_sat26D86o);
                                    }
                                case 2:
                                    return hs_bufWrite25u9CS.hscall(hs_wild26D7Bb, hs_ptr26D7Bz, hs_count26D7AC, hs_canzublock26D7B9);
                                }
                            };
                            var hs_sat26D86j = new $hs.Thunk();
                            hs_sat26D86j.evaluateOnce = function () {
                                return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126D7AA, hs_oldzubufzq26D7B6);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D86j, hs_sat26D86k);
                        };
                        var hs_sat26D86h = new $hs.Thunk();
                        hs_sat26D86h.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziBufferedIO.hs_flushWriteBuffer.hscall(hs_zddBufferedIO26D7B1, hs_ds26D7B2, hs_wild126D7B3);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D86h, hs_sat26D86i);
                    };
                    var hs_sat26D86e = new $hs.Thunk();
                    hs_sat26D86e.evaluateOnce = function () {
                        var hs_sat26D86g = new $hs.Thunk();
                        hs_sat26D86g.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hPutBuf: flushing first\x00");
                        };
                        return $hs.modules.GHCziIOziHandleziInternals.hs_debugIO.hscall(hs_sat26D86g);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D86e, hs_sat26D86f);
                case 2:
                    var hs_sat26D85R = new $hs.Thunk();
                    hs_sat26D85R.evaluateOnce = function () {
                        var hs_sat26D85W = new $hs.Thunk();
                        hs_sat26D85W.evaluateOnce = function () {
                            var hs_sat26D869 = new $hs.Thunk();
                            hs_sat26D869.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_count26D7AC);
                            };
                            var hs_sat26D868 = new $hs.Thunk();
                            hs_sat26D868.evaluateOnce = function () {
                                var hs_sat26D86a = new $hs.Thunk();
                                hs_sat26D86a.evaluateOnce = function () {
                                    var hs_wild326D86b = hs_wild126D7B3;
                                    if (hs_wild126D7B3.notEvaluated) {
                                        hs_wild326D86b = hs_wild126D7B3.hscall();
                                    }
                                    var hs_rb926D7CN = hs_wild326D86b.data[0];
                                    var hs_rb1026D7CO = hs_wild326D86b.data[1];
                                    var hs_ds1026D7CP = hs_wild326D86b.data[2];
                                    var hs_rb1126D7CQ = hs_wild326D86b.data[3];
                                    var hs_rb1226D7CR = hs_wild326D86b.data[4];
                                    var hs_tpl26D86d = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_w26D7AT, hs_count26D7AC);
                                    var hs_tpl126D7CS = hs_tpl26D86d.data[0];
                                    var $res = new $hs.Data(1);
                                    $res.data = [hs_rb926D7CN, hs_rb1026D7CO, hs_ds1026D7CP, hs_rb1126D7CQ, hs_rb1226D7CR, hs_tpl126D7CS];
                                    return $res;
                                };
                                return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126D7AA, hs_sat26D86a);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D868, hs_sat26D869);
                        };
                        var hs_sat26D85V = new $hs.Thunk();
                        hs_sat26D85V.evaluateOnce = function () {
                            var hs_sat26D85Y = new $hs.Func(1);
                            hs_sat26D85Y.evaluate = function (hs_praw26D7Cd) {
                                var hs_sat26D861 = new $hs.Func(1);
                                hs_sat26D861.evaluate = function (hs_ds1026D7CA) {
                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                                };
                                var hs_sat26D860 = new $hs.Thunk();
                                hs_sat26D860.evaluateOnce = function () {
                                    var hs_ds1026D864 = $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_praw26D7Cd, hs_w26D7AT);
                                    var hs_ds1126D7Cm = hs_ds1026D864.data[0];
                                    var hs_ds1226D863 = hs_ptr26D7Bz;
                                    if (hs_ptr26D7Bz.notEvaluated) {
                                        hs_ds1226D863 = hs_ptr26D7Bz.hscall();
                                    }
                                    var hs_ds1326D7Cn = hs_ds1226D863.data[0];
                                    var hs_ds1426D865 = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_count26D7AC);
                                    var hs_ds1526D7Co = hs_ds1426D865.data[0];
                                    var hs_sat26D862 = new $hs.Func(1);
                                    hs_sat26D862.evaluate = function (hs_ds1626D7Cp) {
                                        var hs_wild326D867 = [hs_ds1626D7Cp, memcpy(hs_ds1126D7Cm, hs_ds1326D7Cn, hs_ds1526D7Co)];
                                        var hs_ds1726D7Cu = hs_wild326D867[0];
                                        var hs_ds1826D7Cv = hs_wild326D867[1];
                                        var hs_sat26D866 = new $hs.Data(1);
                                        hs_sat26D866.data = [hs_ds1826D7Cv];
                                        return [hs_ds1726D7Cu, hs_sat26D866];
                                    };
                                    if (hs_sat26D862.notEvaluated) {
                                        return hs_sat26D862.hscall();
                                    } else {
                                        return hs_sat26D862;
                                    }
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D860, hs_sat26D861);
                            };
                            var hs_sat26D85X = new $hs.Thunk();
                            hs_sat26D85X.evaluateOnce = function () {
                                var hs_sat26D85Z = new $hs.Data(1);
                                hs_sat26D85Z.data = [hs_rb426D7C8, hs_rb526D7C9];
                                return $hs.modules.GHCziIOziBuffer.hs_withRawBuffer.hscall(hs_sat26D85Z);
                            };
                            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D85X, hs_sat26D85Y);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D85V, hs_sat26D85W);
                    };
                    var hs_sat26D85M = new $hs.Thunk();
                    hs_sat26D85M.evaluateOnce = function () {
                        var hs_sat26D85S = new $hs.Thunk();
                        hs_sat26D85S.evaluateOnce = function () {
                            var hs_sat26D85U = new $hs.Thunk();
                            hs_sat26D85U.evaluateOnce = function () {
                                return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_w26D7AT);
                            };
                            var hs_sat26D85T = new $hs.Thunk();
                            hs_sat26D85T.evaluateOnce = function () {
                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hPutBuf: copying to buffer, w=\x00");
                            };
                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D85T, hs_sat26D85U);
                        };
                        return $hs.modules.GHCziIOziHandleziInternals.hs_debugIO.hscall(hs_sat26D85S);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D85M, hs_sat26D85R);
                }
            };
            var hs_sat26D85K = new $hs.Thunk();
            hs_sat26D85K.evaluateOnce = function () {
                return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a126D7AA);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D85K, hs_sat26D85L);
        };
        var hs_sat26D85t = new $hs.Func(1);
        hs_sat26D85t.evaluate = function (hs_tpl26D7AF) {
            var hs_tpl126D85J = hs_count26D7AC;
            if (hs_count26D7AC.notEvaluated) {
                hs_tpl126D85J = hs_count26D7AC.hscall();
            }
            if (hs_tpl26D7AF.notEvaluated) {
                return hs_tpl26D7AF.hscall();
            } else {
                return hs_tpl26D7AF;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D85t, hs_sat26D85H);
    };
    hs_hPutBufzq25u9CR.evaluate = function (hs_handle26D7Da, hs_ptr26D7DA, hs_count26D7D4, hs_canzublock26D7DC) {
        var hs_sat26D870 = new $hs.Data(1);
        hs_sat26D870.data = [0];
        var hs_wild26D871 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_count26D7D4, hs_sat26D870);
        switch (hs_wild26D871.tag) {
        case 1:
            var hs_sat26D873 = new $hs.Data(1);
            hs_sat26D873.data = [0];
            var hs_wild126D874 = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_count26D7D4, hs_sat26D873);
            switch (hs_wild126D874.tag) {
            case 1:
                var hs_sat26D876 = new $hs.Func(1);
                hs_sat26D876.evaluate = function (hs_hzu26D7Dd) {
                    var hs_wild226D7Dz = hs_hzu26D7Dd;
                    if (hs_hzu26D7Dd.notEvaluated) {
                        hs_wild226D7Dz = hs_hzu26D7Dd.hscall();
                    }
                    var hs_ds226D7DF = hs_wild226D7Dz.data[6];
                    var hs_sat26D87o = new $hs.Thunk();
                    hs_sat26D87o.evaluateOnce = function () {
                        var hs_sat26D87t = new $hs.Func(1);
                        hs_sat26D87t.evaluate = function (hs_r26D7DJ) {
                            var hs_sat26D87w = new $hs.Thunk();
                            hs_sat26D87w.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_r26D7DJ);
                            };
                            var hs_sat26D87v = new $hs.Thunk();
                            hs_sat26D87v.evaluateOnce = function () {
                                var hs_wild326D87y = hs_ds226D7DF;
                                if (hs_ds226D7DF.notEvaluated) {
                                    hs_wild326D87y = hs_ds226D7DF.hscall();
                                }
                                switch (hs_wild326D87y.tag) {
                                case 3:
                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                                default:
                                    return $hs.modules.GHCziIOziHandleziInternals.hs_flushWriteBuffer.hscall(hs_wild226D7Dz);
                                }
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D87v, hs_sat26D87w);
                        };
                        var hs_sat26D87s = new $hs.Thunk();
                        hs_sat26D87s.evaluateOnce = function () {
                            var hs_sat26D87u = new $hs.Thunk();
                            hs_sat26D87u.evaluateOnce = function () {
                                return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_ptr26D7DA);
                            };
                            return hs_bufWrite25u9CS.hscall(hs_wild226D7Dz, hs_sat26D87u, hs_count26D7D4, hs_canzublock26D7DC);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D87s, hs_sat26D87t);
                    };
                    var hs_sat26D878 = new $hs.Thunk();
                    hs_sat26D878.evaluateOnce = function () {
                        var hs_sat26D87p = new $hs.Thunk();
                        hs_sat26D87p.evaluateOnce = function () {
                            var hs_sat26D87r = new $hs.Thunk();
                            hs_sat26D87r.evaluateOnce = function () {
                                return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_count26D7D4);
                            };
                            var hs_sat26D87q = new $hs.Thunk();
                            hs_sat26D87q.evaluateOnce = function () {
                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hPutBuf count=\x00");
                            };
                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D87q, hs_sat26D87r);
                        };
                        return $hs.modules.GHCziIOziHandleziInternals.hs_debugIO.hscall(hs_sat26D87p);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D878, hs_sat26D87o);
                };
                var hs_sat26D875 = new $hs.Thunk();
                hs_sat26D875.evaluateOnce = function () {
                    var hs_sat26D877 = new $hs.Thunk();
                    hs_sat26D877.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hPutBuf\x00");
                    };
                    return $hs.modules.GHCziIOziHandleziInternals.hs_wantWritableHandle.hscall(hs_sat26D877, hs_handle26D7Da);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D875, hs_sat26D876);
            case 2:
                var hs_sat26D872 = new $hs.Thunk();
                hs_sat26D872.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hPutBuf\x00");
                };
                return hs_illegalBufferSizze25u9D5.hscall(hs_handle26D7Da, hs_sat26D872, hs_count26D7D4);
            }
        case 2:
            var hs_sat26D86Z = new $hs.Data(1);
            hs_sat26D86Z.data = [0];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D86Z);
        }
    };
    this.hs_hPutBuf.evaluate = function (hs_h26D7DT, hs_ptr26D7DU, hs_count26D7DV) {
        var hs_sat26D87A = new $hs.Func(1);
        hs_sat26D87A.evaluate = function (hs_ds26D7DY) {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        };
        var hs_sat26D87z = new $hs.Thunk();
        hs_sat26D87z.evaluateOnce = function () {
            return hs_hPutBufzq25u9CR.hscall(hs_h26D7DT, hs_ptr26D7DU, hs_count26D7DV, $hs.modules.GHCziTypes.hs_True);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D87z, hs_sat26D87A);
    };
    this.hs_hPutBufNonBlocking.evaluate = function (hs_h26D7E3, hs_ptr26D7E4, hs_count26D7E5) {
        return hs_hPutBufzq25u9CR.hscall(hs_h26D7E3, hs_ptr26D7E4, hs_count26D7E5, $hs.modules.GHCziTypes.hs_False);
    };
    hs_copyFromRawBuffer25u9D4.evaluate = function (hs_ptr26D7Ed, hs_raw26D7Ea, hs_off26D7Eh, hs_bytes26D7Ek) {
        var hs_sat26D87C = new $hs.Func(1);
        hs_sat26D87C.evaluate = function (hs_praw26D7Eg) {
            var hs_sat26D87E = new $hs.Func(1);
            hs_sat26D87E.evaluate = function (hs_ds26D7ED) {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            };
            var hs_sat26D87D = new $hs.Thunk();
            hs_sat26D87D.evaluateOnce = function () {
                var hs_ds26D87G = hs_ptr26D7Ed;
                if (hs_ptr26D7Ed.notEvaluated) {
                    hs_ds26D87G = hs_ptr26D7Ed.hscall();
                }
                var hs_ds126D7Ep = hs_ds26D87G.data[0];
                var hs_ds226D87H = $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_praw26D7Eg, hs_off26D7Eh);
                var hs_ds326D7Eq = hs_ds226D87H.data[0];
                var hs_ds426D87I = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_bytes26D7Ek);
                var hs_ds526D7Er = hs_ds426D87I.data[0];
                var hs_sat26D87F = new $hs.Func(1);
                hs_sat26D87F.evaluate = function (hs_ds626D7Es) {
                    var hs_wild26D87K = [hs_ds626D7Es, memcpy(hs_ds126D7Ep, hs_ds326D7Eq, hs_ds526D7Er)];
                    var hs_ds726D7Ex = hs_wild26D87K[0];
                    var hs_ds826D7Ey = hs_wild26D87K[1];
                    var hs_sat26D87J = new $hs.Data(1);
                    hs_sat26D87J.data = [hs_ds826D7Ey];
                    return [hs_ds726D7Ex, hs_sat26D87J];
                };
                if (hs_sat26D87F.notEvaluated) {
                    return hs_sat26D87F.hscall();
                } else {
                    return hs_sat26D87F;
                }
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D87D, hs_sat26D87E);
        };
        var hs_sat26D87B = new $hs.Thunk();
        hs_sat26D87B.evaluateOnce = function () {
            return $hs.modules.GHCziIOziBuffer.hs_withRawBuffer.hscall(hs_raw26D7Ea);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D87B, hs_sat26D87C);
    };
    hs_bufReadEmpty25u9CX.evaluate = function (hs_hzu26D7EL, hs_buf26D7F6, hs_ptr26D7Fm, hs_sozufar26D7Fx, hs_count26D7FS) {
        var hs_wild26D7FR = hs_hzu26D7EL;
        if (hs_hzu26D7EL.notEvaluated) {
            hs_wild26D7FR = hs_hzu26D7EL.hscall();
        }
        var hs_zddBufferedIO26D7FD = hs_wild26D7FR.data[1];
        var hs_zddTypeable26D7G0 = hs_wild26D7FR.data[2];
        var hs_ds26D7FE = hs_wild26D7FR.data[3];
        var hs_rb26D7F4 = hs_wild26D7FR.data[5];
        var hs_a126D7F5 = new $hs.Data(1);
        hs_a126D7F5.data = [hs_rb26D7F4];
        var hs_wild126D7FF = hs_buf26D7F6;
        if (hs_buf26D7F6.notEvaluated) {
            hs_wild126D7FF = hs_buf26D7F6.hscall();
        }
        var hs_rb626D7FX = hs_wild126D7FF.data[3];
        var hs_loop26D7Fu = new $hs.Func(3);
        hs_loop26D7Fu.evaluate = function (hs_fd26D7Fl, hs_off26D7Fn, hs_bytes26D7Fi) {
            var hs_sat26D887 = new $hs.Data(1);
            hs_sat26D887.data = [0];
            var hs_wild226D888 = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_bytes26D7Fi, hs_sat26D887);
            switch (hs_wild226D888.tag) {
            case 1:
                var hs_sat26D88a = new $hs.Func(1);
                hs_sat26D88a.evaluate = function (hs_r26D7Fr) {
                    var hs_sat26D88d = new $hs.Data(1);
                    hs_sat26D88d.data = [0];
                    var hs_wild326D88e = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_r26D7Fr, hs_sat26D88d);
                    switch (hs_wild326D88e.tag) {
                    case 1:
                        var hs_sat26D88g = new $hs.Thunk();
                        hs_sat26D88g.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_bytes26D7Fi, hs_r26D7Fr);
                        };
                        var hs_sat26D88f = new $hs.Thunk();
                        hs_sat26D88f.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_off26D7Fn, hs_r26D7Fr);
                        };
                        return hs_loop26D7Fu.hscall(hs_fd26D7Fl, hs_sat26D88f, hs_sat26D88g);
                    case 2:
                        var hs_sat26D88c = new $hs.Thunk();
                        hs_sat26D88c.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sozufar26D7Fx, hs_off26D7Fn);
                        };
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D88c);
                    }
                };
                var hs_sat26D889 = new $hs.Thunk();
                hs_sat26D889.evaluateOnce = function () {
                    var hs_sat26D88b = new $hs.Thunk();
                    hs_sat26D88b.evaluateOnce = function () {
                        return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26D7Fm, hs_off26D7Fn);
                    };
                    return $hs.modules.GHCziIOziDevice.hs_read.hscall($hs.modules.GHCziIOziFD.hs_zdfRawIOFD, hs_fd26D7Fl, hs_sat26D88b, hs_bytes26D7Fi);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D889, hs_sat26D88a);
            case 2:
                var hs_sat26D886 = new $hs.Thunk();
                hs_sat26D886.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sozufar26D7Fx, hs_off26D7Fn);
                };
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D886);
            }
        };
        var hs_fail26D7FW = new $hs.Func(1);
        hs_fail26D7FW.evaluate = function (hs_ds1026D7FV) {
            var hs_sat26D88i = new $hs.Func(1);
            hs_sat26D88i.evaluate = function (hs_ds1126D7FI) {
                var hs_wild226D88j = hs_ds1126D7FI;
                if (hs_ds1126D7FI.notEvaluated) {
                    hs_wild226D88j = hs_ds1126D7FI.hscall();
                }
                var hs_r26D7FM = hs_wild226D88j.data[0];
                var hs_bufzq26D7FP = hs_wild226D88j.data[1];
                var hs_sat26D88k = new $hs.Data(1);
                hs_sat26D88k.data = [0];
                var hs_wild326D88l = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_r26D7FM, hs_sat26D88k);
                switch (hs_wild326D88l.tag) {
                case 1:
                    var hs_sat26D88n = new $hs.Thunk();
                    hs_sat26D88n.evaluateOnce = function () {
                        return hs_bufReadNonEmpty25u9CW.hscall(hs_wild26D7FR, hs_bufzq26D7FP, hs_ptr26D7Fm, hs_sozufar26D7Fx, hs_count26D7FS);
                    };
                    var hs_sat26D88m = new $hs.Thunk();
                    hs_sat26D88m.evaluateOnce = function () {
                        return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126D7F5, hs_bufzq26D7FP);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D88m, hs_sat26D88n);
                case 2:
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sozufar26D7Fx);
                }
            };
            var hs_sat26D88h = new $hs.Thunk();
            hs_sat26D88h.evaluateOnce = function () {
                return $hs.modules.GHCziIOziBufferedIO.hs_fillReadBuffer.hscall(hs_zddBufferedIO26D7FD, hs_ds26D7FE, hs_wild126D7FF);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D88h, hs_sat26D88i);
        };
        var hs_sat26D883 = new $hs.Data(1);
        hs_sat26D883.data = [hs_rb626D7FX];
        var hs_wild226D884 = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_count26D7FS, hs_sat26D883);
        switch (hs_wild226D884.tag) {
        case 1:
            return hs_fail26D7FW.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
        case 2:
            var hs_wild326D885 = $hs.modules.DataziTypeable.hs_cast.hscall(hs_zddTypeable26D7G0, $hs.modules.GHCziIOziFD.hs_zdfTypeableFD, hs_ds26D7FE);
            switch (hs_wild326D885.tag) {
            case 1:
                return hs_fail26D7FW.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            case 2:
                var hs_fd26D7G3 = hs_wild326D885.data[0];
                var hs_sat26D87L = new $hs.Data(1);
                hs_sat26D87L.data = [0];
                return hs_loop26D7Fu.hscall(hs_fd26D7G3, hs_sat26D87L, hs_count26D7FS);
            }
        }
    };
    hs_bufReadNonEmpty25u9CW.evaluate = function (hs_hzu26D7Ga, hs_buf26D7Gs, hs_ptr26D7GP, hs_sozufar26D7GD, hs_count26D7GG) {
        var hs_wild26D7Hf = hs_hzu26D7Ga;
        if (hs_hzu26D7Ga.notEvaluated) {
            hs_wild26D7Hf = hs_hzu26D7Ga.hscall();
        }
        var hs_rb26D7H8 = hs_wild26D7Hf.data[5];
        var hs_wild126D7GV = hs_buf26D7Gs;
        if (hs_buf26D7Gs.notEvaluated) {
            hs_wild126D7GV = hs_buf26D7Gs.hscall();
        }
        var hs_rb426D7GQ = hs_wild126D7GV.data[0];
        var hs_rb526D7GR = hs_wild126D7GV.data[1];
        var hs_rb726D7GB = hs_wild126D7GV.data[4];
        var hs_rb826D7GK = hs_wild126D7GV.data[5];
        var hs_r26D7GC = new $hs.Data(1);
        hs_r26D7GC.data = [hs_rb726D7GB];
        var hs_sozufar126D7Hh = hs_sozufar26D7GD;
        if (hs_sozufar26D7GD.notEvaluated) {
            hs_sozufar126D7Hh = hs_sozufar26D7GD.hscall();
        }
        var hs_count126D7GN = hs_count26D7GG;
        if (hs_count26D7GG.notEvaluated) {
            hs_count126D7GN = hs_count26D7GG.hscall();
        }
        var hs_avail26D7GM = new $hs.Thunk();
        hs_avail26D7GM.evaluateOnce = function () {
            var hs_sat26D897 = new $hs.Data(1);
            hs_sat26D897.data = [hs_rb826D7GK];
            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26D897, hs_r26D7GC);
        };
        var hs_wild226D88I = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_count126D7GN, hs_avail26D7GM);
        switch (hs_wild226D88I.tag) {
        case 1:
            var hs_sat26D88U = new $hs.Thunk();
            hs_sat26D88U.evaluateOnce = function () {
                var hs_bufzq26D7H7 = new $hs.Thunk();
                hs_bufzq26D7H7.evaluateOnce = function () {
                    var hs_wild326D896 = hs_wild126D7GV;
                    if (hs_wild126D7GV.notEvaluated) {
                        hs_wild326D896 = hs_wild126D7GV.hscall();
                    }
                    var hs_rb926D7H3 = hs_wild326D896.data[0];
                    var hs_rb1026D7H4 = hs_wild326D896.data[1];
                    var hs_ds1026D7H5 = hs_wild326D896.data[2];
                    var hs_rb1126D7H6 = hs_wild326D896.data[3];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb926D7H3, hs_rb1026D7H4, hs_ds1026D7H5, hs_rb1126D7H6, 0, 0];
                    return $res;
                };
                var hs_sat26D88X = new $hs.Thunk();
                hs_sat26D88X.evaluateOnce = function () {
                    var hs_remaining26D7Hc = new $hs.Thunk();
                    hs_remaining26D7Hc.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_count126D7GN, hs_avail26D7GM);
                    };
                    var hs_sat26D890 = new $hs.Data(1);
                    hs_sat26D890.data = [0];
                    var hs_wild326D891 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_remaining26D7Hc, hs_sat26D890);
                    switch (hs_wild326D891.tag) {
                    case 1:
                        var hs_sat26D893 = new $hs.Thunk();
                        hs_sat26D893.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sozufar126D7Hh, hs_avail26D7GM);
                        };
                        var hs_sat26D892 = new $hs.Thunk();
                        hs_sat26D892.evaluateOnce = function () {
                            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26D7GP, hs_avail26D7GM);
                        };
                        return hs_bufReadEmpty25u9CX.hscall(hs_wild26D7Hf, hs_bufzq26D7H7, hs_sat26D892, hs_sat26D893, hs_remaining26D7Hc);
                    case 2:
                        var hs_sat26D88Z = new $hs.Thunk();
                        hs_sat26D88Z.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sozufar126D7Hh, hs_avail26D7GM);
                        };
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D88Z);
                    }
                };
                var hs_sat26D88W = new $hs.Thunk();
                hs_sat26D88W.evaluateOnce = function () {
                    var hs_sat26D88Y = new $hs.Data(1);
                    hs_sat26D88Y.data = [hs_rb26D7H8];
                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_sat26D88Y, hs_bufzq26D7H7);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D88W, hs_sat26D88X);
            };
            var hs_sat26D88T = new $hs.Thunk();
            hs_sat26D88T.evaluateOnce = function () {
                var hs_sat26D88V = new $hs.Data(1);
                hs_sat26D88V.data = [hs_rb426D7GQ, hs_rb526D7GR];
                return hs_copyFromRawBuffer25u9D4.hscall(hs_ptr26D7GP, hs_sat26D88V, hs_r26D7GC, hs_avail26D7GM);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D88T, hs_sat26D88U);
        case 2:
            var hs_sat26D88J = new $hs.Thunk();
            hs_sat26D88J.evaluateOnce = function () {
                var hs_sat26D88M = new $hs.Thunk();
                hs_sat26D88M.evaluateOnce = function () {
                    var hs_sat26D88S = new $hs.Thunk();
                    hs_sat26D88S.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sozufar126D7Hh, hs_count126D7GN);
                    };
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D88S);
                };
                var hs_sat26D88L = new $hs.Thunk();
                hs_sat26D88L.evaluateOnce = function () {
                    var hs_sat26D88O = new $hs.Thunk();
                    hs_sat26D88O.evaluateOnce = function () {
                        var hs_wild326D88P = hs_wild126D7GV;
                        if (hs_wild126D7GV.notEvaluated) {
                            hs_wild326D88P = hs_wild126D7GV.hscall();
                        }
                        var hs_rb926D7Hy = hs_wild326D88P.data[0];
                        var hs_rb1026D7Hz = hs_wild326D88P.data[1];
                        var hs_ds1026D7HA = hs_wild326D88P.data[2];
                        var hs_rb1126D7HB = hs_wild326D88P.data[3];
                        var hs_rb1326D7HD = hs_wild326D88P.data[5];
                        var hs_tpl26D88R = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_r26D7GC, hs_count126D7GN);
                        var hs_tpl126D7HC = hs_tpl26D88R.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb926D7Hy, hs_rb1026D7Hz, hs_ds1026D7HA, hs_rb1126D7HB, hs_tpl126D7HC, hs_rb1326D7HD];
                        return $res;
                    };
                    var hs_sat26D88N = new $hs.Data(1);
                    hs_sat26D88N.data = [hs_rb26D7H8];
                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_sat26D88N, hs_sat26D88O);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D88L, hs_sat26D88M);
            };
            var hs_sat26D88o = new $hs.Thunk();
            hs_sat26D88o.evaluateOnce = function () {
                var hs_sat26D88K = new $hs.Data(1);
                hs_sat26D88K.data = [hs_rb426D7GQ, hs_rb526D7GR];
                return hs_copyFromRawBuffer25u9D4.hscall(hs_ptr26D7GP, hs_sat26D88K, hs_r26D7GC, hs_count126D7GN);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D88o, hs_sat26D88J);
        }
    };
    this.hs_hGetBuf.evaluate = function (hs_h26D7HS, hs_ptr26D7It, hs_count26D7HM) {
        var hs_sat26D899 = new $hs.Data(1);
        hs_sat26D899.data = [0];
        var hs_wild26D89a = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_count26D7HM, hs_sat26D899);
        switch (hs_wild26D89a.tag) {
        case 1:
            var hs_sat26D89c = new $hs.Data(1);
            hs_sat26D89c.data = [0];
            var hs_wild126D89d = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_count26D7HM, hs_sat26D89c);
            switch (hs_wild126D89d.tag) {
            case 1:
                var hs_sat26D89f = new $hs.Func(1);
                hs_sat26D89f.evaluate = function (hs_hzu26D7HV) {
                    var hs_wild226D7Id = hs_hzu26D7HV;
                    if (hs_hzu26D7HV.notEvaluated) {
                        hs_wild226D7Id = hs_hzu26D7HV.hscall();
                    }
                    var hs_rb26D7If = hs_wild226D7Id.data[5];
                    var hs_sat26D89x = new $hs.Thunk();
                    hs_sat26D89x.evaluateOnce = function () {
                        var hs_sat26D89z = new $hs.Func(1);
                        hs_sat26D89z.evaluate = function (hs_buf26D7Ij) {
                            var hs_wild326D7Ir = hs_buf26D7Ij;
                            if (hs_buf26D7Ij.notEvaluated) {
                                hs_wild326D7Ir = hs_buf26D7Ij.hscall();
                            }
                            var hs_wild426D89I = $hs.modules.GHCziIOziBuffer.hs_isEmptyBuffer.hscall(hs_wild326D7Ir);
                            switch (hs_wild426D89I.tag) {
                            case 1:
                                var hs_sat26D89L = new $hs.Data(1);
                                hs_sat26D89L.data = [0];
                                var hs_sat26D89K = new $hs.Thunk();
                                hs_sat26D89K.evaluateOnce = function () {
                                    return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_ptr26D7It);
                                };
                                return hs_bufReadNonEmpty25u9CW.hscall(hs_wild226D7Id, hs_wild326D7Ir, hs_sat26D89K, hs_sat26D89L, hs_count26D7HM);
                            case 2:
                                var hs_sat26D89J = new $hs.Data(1);
                                hs_sat26D89J.data = [0];
                                var hs_sat26D89B = new $hs.Thunk();
                                hs_sat26D89B.evaluateOnce = function () {
                                    return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_ptr26D7It);
                                };
                                return hs_bufReadEmpty25u9CX.hscall(hs_wild226D7Id, hs_wild326D7Ir, hs_sat26D89B, hs_sat26D89J, hs_count26D7HM);
                            }
                        };
                        var hs_sat26D89y = new $hs.Thunk();
                        hs_sat26D89y.evaluateOnce = function () {
                            var hs_sat26D89A = new $hs.Data(1);
                            hs_sat26D89A.data = [hs_rb26D7If];
                            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_sat26D89A);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D89y, hs_sat26D89z);
                    };
                    var hs_sat26D89h = new $hs.Thunk();
                    hs_sat26D89h.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziHandleziInternals.hs_flushCharReadBuffer.hscall(hs_wild226D7Id);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D89h, hs_sat26D89x);
                };
                var hs_sat26D89e = new $hs.Thunk();
                hs_sat26D89e.evaluateOnce = function () {
                    var hs_sat26D89g = new $hs.Thunk();
                    hs_sat26D89g.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hGetBuf\x00");
                    };
                    return $hs.modules.GHCziIOziHandleziInternals.hs_wantReadableHandlezu.hscall(hs_sat26D89g, hs_h26D7HS);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D89e, hs_sat26D89f);
            case 2:
                var hs_sat26D89b = new $hs.Thunk();
                hs_sat26D89b.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hGetBuf\x00");
                };
                return hs_illegalBufferSizze25u9D5.hscall(hs_h26D7HS, hs_sat26D89b, hs_count26D7HM);
            }
        case 2:
            var hs_sat26D898 = new $hs.Data(1);
            hs_sat26D898.data = [0];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D898);
        }
    };
    hs_bufReadNBNonEmpty25u9D2.evaluate = function (hs_hzu26D7II, hs_buf26D7J0, hs_ptr26D7Jh, hs_sozufar26D7JJ, hs_count26D7Jf) {
        var hs_wild26D7JH = hs_hzu26D7II;
        if (hs_hzu26D7II.notEvaluated) {
            hs_wild26D7JH = hs_hzu26D7II.hscall();
        }
        var hs_rb26D7JA = hs_wild26D7JH.data[5];
        var hs_wild126D7Jn = hs_buf26D7J0;
        if (hs_buf26D7J0.notEvaluated) {
            hs_wild126D7Jn = hs_buf26D7J0.hscall();
        }
        var hs_rb426D7Ji = hs_wild126D7Jn.data[0];
        var hs_rb526D7Jj = hs_wild126D7Jn.data[1];
        var hs_rb726D7J9 = hs_wild126D7Jn.data[4];
        var hs_rb826D7Jc = hs_wild126D7Jn.data[5];
        var hs_r26D7Ja = new $hs.Data(1);
        hs_r26D7Ja.data = [hs_rb726D7J9];
        var hs_avail26D7Je = new $hs.Thunk();
        hs_avail26D7Je.evaluateOnce = function () {
            var hs_sat26D8at = new $hs.Data(1);
            hs_sat26D8at.data = [hs_rb826D7Jc];
            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26D8at, hs_r26D7Ja);
        };
        var hs_wild226D8a4 = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_count26D7Jf, hs_avail26D7Je);
        switch (hs_wild226D8a4.tag) {
        case 1:
            var hs_sat26D8ag = new $hs.Thunk();
            hs_sat26D8ag.evaluateOnce = function () {
                var hs_bufzq26D7Jz = new $hs.Thunk();
                hs_bufzq26D7Jz.evaluateOnce = function () {
                    var hs_wild326D8as = hs_wild126D7Jn;
                    if (hs_wild126D7Jn.notEvaluated) {
                        hs_wild326D8as = hs_wild126D7Jn.hscall();
                    }
                    var hs_rb926D7Jv = hs_wild326D8as.data[0];
                    var hs_rb1026D7Jw = hs_wild326D8as.data[1];
                    var hs_ds1026D7Jx = hs_wild326D8as.data[2];
                    var hs_rb1126D7Jy = hs_wild326D8as.data[3];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb926D7Jv, hs_rb1026D7Jw, hs_ds1026D7Jx, hs_rb1126D7Jy, 0, 0];
                    return $res;
                };
                var hs_sat26D8aj = new $hs.Thunk();
                hs_sat26D8aj.evaluateOnce = function () {
                    var hs_remaining26D7JE = new $hs.Thunk();
                    hs_remaining26D7JE.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_count26D7Jf, hs_avail26D7Je);
                    };
                    var hs_sat26D8am = new $hs.Data(1);
                    hs_sat26D8am.data = [0];
                    var hs_wild326D8an = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_remaining26D7JE, hs_sat26D8am);
                    switch (hs_wild326D8an.tag) {
                    case 1:
                        var hs_sat26D8ap = new $hs.Thunk();
                        hs_sat26D8ap.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sozufar26D7JJ, hs_avail26D7Je);
                        };
                        var hs_sat26D8ao = new $hs.Thunk();
                        hs_sat26D8ao.evaluateOnce = function () {
                            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26D7Jh, hs_avail26D7Je);
                        };
                        return hs_bufReadNBEmpty25u9D1.hscall(hs_wild26D7JH, hs_bufzq26D7Jz, hs_sat26D8ao, hs_sat26D8ap, hs_remaining26D7JE);
                    case 2:
                        var hs_sat26D8al = new $hs.Thunk();
                        hs_sat26D8al.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sozufar26D7JJ, hs_avail26D7Je);
                        };
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8al);
                    }
                };
                var hs_sat26D8ai = new $hs.Thunk();
                hs_sat26D8ai.evaluateOnce = function () {
                    var hs_sat26D8ak = new $hs.Data(1);
                    hs_sat26D8ak.data = [hs_rb26D7JA];
                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_sat26D8ak, hs_bufzq26D7Jz);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8ai, hs_sat26D8aj);
            };
            var hs_sat26D8af = new $hs.Thunk();
            hs_sat26D8af.evaluateOnce = function () {
                var hs_sat26D8ah = new $hs.Data(1);
                hs_sat26D8ah.data = [hs_rb426D7Ji, hs_rb526D7Jj];
                return hs_copyFromRawBuffer25u9D4.hscall(hs_ptr26D7Jh, hs_sat26D8ah, hs_r26D7Ja, hs_avail26D7Je);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8af, hs_sat26D8ag);
        case 2:
            var hs_sat26D8a5 = new $hs.Thunk();
            hs_sat26D8a5.evaluateOnce = function () {
                var hs_sat26D8a8 = new $hs.Thunk();
                hs_sat26D8a8.evaluateOnce = function () {
                    var hs_sat26D8ae = new $hs.Thunk();
                    hs_sat26D8ae.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sozufar26D7JJ, hs_count26D7Jf);
                    };
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8ae);
                };
                var hs_sat26D8a7 = new $hs.Thunk();
                hs_sat26D8a7.evaluateOnce = function () {
                    var hs_sat26D8aa = new $hs.Thunk();
                    hs_sat26D8aa.evaluateOnce = function () {
                        var hs_wild326D8ab = hs_wild126D7Jn;
                        if (hs_wild126D7Jn.notEvaluated) {
                            hs_wild326D8ab = hs_wild126D7Jn.hscall();
                        }
                        var hs_rb926D7K0 = hs_wild326D8ab.data[0];
                        var hs_rb1026D7K1 = hs_wild326D8ab.data[1];
                        var hs_ds1026D7K2 = hs_wild326D8ab.data[2];
                        var hs_rb1126D7K3 = hs_wild326D8ab.data[3];
                        var hs_rb1326D7K5 = hs_wild326D8ab.data[5];
                        var hs_tpl26D8ad = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_r26D7Ja, hs_count26D7Jf);
                        var hs_tpl126D7K4 = hs_tpl26D8ad.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb926D7K0, hs_rb1026D7K1, hs_ds1026D7K2, hs_rb1126D7K3, hs_tpl126D7K4, hs_rb1326D7K5];
                        return $res;
                    };
                    var hs_sat26D8a9 = new $hs.Data(1);
                    hs_sat26D8a9.data = [hs_rb26D7JA];
                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_sat26D8a9, hs_sat26D8aa);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8a7, hs_sat26D8a8);
            };
            var hs_sat26D89M = new $hs.Thunk();
            hs_sat26D89M.evaluateOnce = function () {
                var hs_sat26D8a6 = new $hs.Data(1);
                hs_sat26D8a6.data = [hs_rb426D7Ji, hs_rb526D7Jj];
                return hs_copyFromRawBuffer25u9D4.hscall(hs_ptr26D7Jh, hs_sat26D8a6, hs_r26D7Ja, hs_count26D7Jf);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D89M, hs_sat26D8a5);
        }
    };
    hs_bufReadNBEmpty25u9D1.evaluate = function (hs_hzu26D7Kg, hs_buf26D7KB, hs_ptr26D7L8, hs_sozufar26D7KY, hs_count26D7L9) {
        var hs_wild26D7L7 = hs_hzu26D7Kg;
        if (hs_hzu26D7Kg.notEvaluated) {
            hs_wild26D7L7 = hs_hzu26D7Kg.hscall();
        }
        var hs_zddBufferedIO26D7KN = hs_wild26D7L7.data[1];
        var hs_zddTypeable26D7Lk = hs_wild26D7L7.data[2];
        var hs_ds26D7KO = hs_wild26D7L7.data[3];
        var hs_rb26D7Kz = hs_wild26D7L7.data[5];
        var hs_a126D7KA = new $hs.Data(1);
        hs_a126D7KA.data = [hs_rb26D7Kz];
        var hs_wild126D8av = hs_buf26D7KB;
        if (hs_buf26D7KB.notEvaluated) {
            hs_wild126D8av = hs_buf26D7KB.hscall();
        }
        var hs_rb626D7Lh = hs_wild126D8av.data[3];
        var hs_fail26D7Lg = new $hs.Func(1);
        hs_fail26D7Lg.evaluate = function (hs_ds1026D7Lf) {
            var hs_sat26D8aU = new $hs.Func(1);
            hs_sat26D8aU.evaluate = function (hs_buf126D7KP) {
                var hs_sat26D8aW = new $hs.Func(1);
                hs_sat26D8aW.evaluate = function (hs_ds1126D7KS) {
                    var hs_wild226D8aZ = hs_ds1126D7KS;
                    if (hs_ds1126D7KS.notEvaluated) {
                        hs_wild226D8aZ = hs_ds1126D7KS.hscall();
                    }
                    var hs_r26D7KW = hs_wild226D8aZ.data[0];
                    var hs_bufzq26D7L5 = hs_wild226D8aZ.data[1];
                    var hs_wild326D8aY = hs_r26D7KW;
                    if (hs_r26D7KW.notEvaluated) {
                        hs_wild326D8aY = hs_r26D7KW.hscall();
                    }
                    switch (hs_wild326D8aY.tag) {
                    case 1:
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sozufar26D7KY);
                    case 2:
                        var hs_ds1226D7L0 = hs_wild326D8aY.data[0];
                        var hs_wild426D7La = hs_ds1226D7L0;
                        if (hs_ds1226D7L0.notEvaluated) {
                            hs_wild426D7La = hs_ds1226D7L0.hscall();
                        }
                        var hs_ds1326D7L3 = hs_wild426D7La.data[0];
                        var hs_ds1426D8aX = hs_ds1326D7L3;
                        if (hs_ds1326D7L3.notEvaluated) {
                            hs_ds1426D8aX = hs_ds1326D7L3.hscall();
                        }
                        switch (hs_ds1426D8aX) {
                        case 0:
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sozufar26D7KY);
                        default:
                            var hs_sat26D8b1 = new $hs.Thunk();
                            hs_sat26D8b1.evaluateOnce = function () {
                                var hs_sat26D8b2 = new $hs.Thunk();
                                hs_sat26D8b2.evaluateOnce = function () {
                                    return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_count26D7L9, hs_wild426D7La);
                                };
                                return hs_bufReadNBNonEmpty25u9D2.hscall(hs_wild26D7L7, hs_bufzq26D7L5, hs_ptr26D7L8, hs_sozufar26D7KY, hs_sat26D8b2);
                            };
                            var hs_sat26D8b0 = new $hs.Thunk();
                            hs_sat26D8b0.evaluateOnce = function () {
                                return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126D7KA, hs_bufzq26D7L5);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8b0, hs_sat26D8b1);
                        }
                    }
                };
                var hs_sat26D8aV = new $hs.Thunk();
                hs_sat26D8aV.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziBufferedIO.hs_fillReadBuffer0.hscall(hs_zddBufferedIO26D7KN, hs_ds26D7KO, hs_buf126D7KP);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8aV, hs_sat26D8aW);
            };
            var hs_sat26D8aT = new $hs.Thunk();
            hs_sat26D8aT.evaluateOnce = function () {
                return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a126D7KA);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8aT, hs_sat26D8aU);
        };
        var hs_sat26D8aN = new $hs.Data(1);
        hs_sat26D8aN.data = [hs_rb626D7Lh];
        var hs_wild226D8aO = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_count26D7L9, hs_sat26D8aN);
        switch (hs_wild226D8aO.tag) {
        case 1:
            return hs_fail26D7Lg.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
        case 2:
            var hs_wild326D8aP = $hs.modules.DataziTypeable.hs_cast.hscall(hs_zddTypeable26D7Lk, $hs.modules.GHCziIOziFD.hs_zdfTypeableFD, hs_ds26D7KO);
            switch (hs_wild326D8aP.tag) {
            case 1:
                return hs_fail26D7Lg.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            case 2:
                var hs_fd26D7Ln = hs_wild326D8aP.data[0];
                var hs_sat26D8aQ = new $hs.Func(1);
                hs_sat26D8aQ.evaluate = function (hs_m26D7Lq) {
                    var hs_wild426D8aS = hs_m26D7Lq;
                    if (hs_m26D7Lq.notEvaluated) {
                        hs_wild426D8aS = hs_m26D7Lq.hscall();
                    }
                    switch (hs_wild426D8aS.tag) {
                    case 1:
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sozufar26D7KY);
                    case 2:
                        var hs_n26D7Lt = hs_wild426D8aS.data[0];
                        var hs_sat26D8aR = new $hs.Thunk();
                        hs_sat26D8aR.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sozufar26D7KY, hs_n26D7Lt);
                        };
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8aR);
                    }
                };
                var hs_sat26D8au = new $hs.Thunk();
                hs_sat26D8au.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziDevice.hs_readNonBlocking.hscall($hs.modules.GHCziIOziFD.hs_zdfRawIOFD, hs_fd26D7Ln, hs_ptr26D7L8, hs_count26D7L9);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8au, hs_sat26D8aQ);
            }
        }
    };
    this.hs_hGetBufSome.evaluate = function (hs_h26D7LF, hs_ptr26D7Mh, hs_count26D7Lz) {
        var hs_sat26D8b4 = new $hs.Data(1);
        hs_sat26D8b4.data = [0];
        var hs_wild26D8b5 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_count26D7Lz, hs_sat26D8b4);
        switch (hs_wild26D8b5.tag) {
        case 1:
            var hs_sat26D8b7 = new $hs.Data(1);
            hs_sat26D8b7.data = [0];
            var hs_wild126D8b8 = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_count26D7Lz, hs_sat26D8b7);
            switch (hs_wild126D8b8.tag) {
            case 1:
                var hs_sat26D8ba = new $hs.Func(1);
                hs_sat26D8ba.evaluate = function (hs_hzu26D7LI) {
                    var hs_wild226D7M3 = hs_hzu26D7LI;
                    if (hs_hzu26D7LI.notEvaluated) {
                        hs_wild226D7M3 = hs_hzu26D7LI.hscall();
                    }
                    var hs_zddBufferedIO26D7Mn = hs_wild226D7M3.data[1];
                    var hs_ds26D7Mo = hs_wild226D7M3.data[3];
                    var hs_rb26D7M1 = hs_wild226D7M3.data[5];
                    var hs_a126D7M2 = new $hs.Data(1);
                    hs_a126D7M2.data = [hs_rb26D7M1];
                    var hs_sat26D8bq = new $hs.Thunk();
                    hs_sat26D8bq.evaluateOnce = function () {
                        var hs_sat26D8bs = new $hs.Func(1);
                        hs_sat26D8bs.evaluate = function (hs_buf26D7M7) {
                            var hs_wild326D7Mf = hs_buf26D7M7;
                            if (hs_buf26D7M7.notEvaluated) {
                                hs_wild326D7Mf = hs_buf26D7M7.hscall();
                            }
                            var hs_rb626D7Mk = hs_wild326D7Mf.data[3];
                            var hs_wild426D8bz = $hs.modules.GHCziIOziBuffer.hs_isEmptyBuffer.hscall(hs_wild326D7Mf);
                            switch (hs_wild426D8bz.tag) {
                            case 1:
                                var hs_sat26D8c6 = new $hs.Data(1);
                                hs_sat26D8c6.data = [0];
                                var hs_sat26D8c5 = new $hs.Thunk();
                                hs_sat26D8c5.evaluateOnce = function () {
                                    return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_ptr26D7Mh);
                                };
                                return hs_bufReadNBNonEmpty25u9D2.hscall(hs_wild226D7M3, hs_wild326D7Mf, hs_sat26D8c5, hs_sat26D8c6, hs_count26D7Lz);
                            case 2:
                                var hs_sat26D8bA = new $hs.Data(1);
                                hs_sat26D8bA.data = [hs_rb626D7Mk];
                                var hs_wild526D8bB = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_count26D7Lz, hs_sat26D8bA);
                                switch (hs_wild526D8bB.tag) {
                                case 1:
                                    var hs_sat26D8bV = new $hs.Func(1);
                                    hs_sat26D8bV.evaluate = function (hs_ds1026D7Mr) {
                                        var hs_wild626D8bX = hs_ds1026D7Mr;
                                        if (hs_ds1026D7Mr.notEvaluated) {
                                            hs_wild626D8bX = hs_ds1026D7Mr.hscall();
                                        }
                                        var hs_r26D7Mv = hs_wild626D8bX.data[0];
                                        var hs_bufzq26D7My = hs_wild626D8bX.data[1];
                                        var hs_sat26D8bY = new $hs.Data(1);
                                        hs_sat26D8bY.data = [0];
                                        var hs_wild726D8bZ = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_r26D7Mv, hs_sat26D8bY);
                                        switch (hs_wild726D8bZ.tag) {
                                        case 1:
                                            var hs_sat26D8c1 = new $hs.Thunk();
                                            hs_sat26D8c1.evaluateOnce = function () {
                                                var hs_sat26D8c3 = new $hs.Thunk();
                                                hs_sat26D8c3.evaluateOnce = function () {
                                                    return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_r26D7Mv, hs_count26D7Lz);
                                                };
                                                var hs_sat26D8c4 = new $hs.Data(1);
                                                hs_sat26D8c4.data = [0];
                                                var hs_sat26D8c2 = new $hs.Thunk();
                                                hs_sat26D8c2.evaluateOnce = function () {
                                                    return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_ptr26D7Mh);
                                                };
                                                return hs_bufReadNBNonEmpty25u9D2.hscall(hs_wild226D7M3, hs_bufzq26D7My, hs_sat26D8c2, hs_sat26D8c4, hs_sat26D8c3);
                                            };
                                            var hs_sat26D8c0 = new $hs.Thunk();
                                            hs_sat26D8c0.evaluateOnce = function () {
                                                return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126D7M2, hs_bufzq26D7My);
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8c0, hs_sat26D8c1);
                                        case 2:
                                            var hs_sat26D8bW = new $hs.Data(1);
                                            hs_sat26D8bW.data = [0];
                                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8bW);
                                        }
                                    };
                                    var hs_sat26D8bU = new $hs.Thunk();
                                    hs_sat26D8bU.evaluateOnce = function () {
                                        return $hs.modules.GHCziIOziBufferedIO.hs_fillReadBuffer.hscall(hs_zddBufferedIO26D7Mn, hs_ds26D7Mo, hs_wild326D7Mf);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8bU, hs_sat26D8bV);
                                case 2:
                                    var hs_sat26D8bC = new $hs.Thunk();
                                    hs_sat26D8bC.evaluateOnce = function () {
                                        return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_ptr26D7Mh);
                                    };
                                    var hs_sat26D8bt = new $hs.Thunk();
                                    hs_sat26D8bt.evaluateOnce = function () {
                                        var hs_wild626D8bD = hs_wild226D7M3;
                                        if (hs_wild226D7M3.notEvaluated) {
                                            hs_wild626D8bD = hs_wild226D7M3.hscall();
                                        }
                                        var hs_zddTypeable126D7MX = hs_wild626D8bD.data[2];
                                        var hs_ds1026D7MY = hs_wild626D8bD.data[3];
                                        var hs_wild726D8bS = $hs.modules.DataziTypeable.hs_cast.hscall(hs_zddTypeable126D7MX, $hs.modules.GHCziIOziFD.hs_zdfTypeableFD, hs_ds1026D7MY);
                                        switch (hs_wild726D8bS.tag) {
                                        case 1:
                                            var hs_sat26D8bT = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("not an FD\x00");
                                            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26D8bT);
                                        case 2:
                                            var hs_fd26D7N2 = hs_wild726D8bS.data[0];
                                            if (hs_fd26D7N2.notEvaluated) {
                                                return hs_fd26D7N2.hscall();
                                            } else {
                                                return hs_fd26D7N2;
                                            }
                                        }
                                    };
                                    return $hs.modules.GHCziIOziDevice.hs_read.hscall($hs.modules.GHCziIOziFD.hs_zdfRawIOFD, hs_sat26D8bt, hs_sat26D8bC, hs_count26D7Lz);
                                }
                            }
                        };
                        var hs_sat26D8br = new $hs.Thunk();
                        hs_sat26D8br.evaluateOnce = function () {
                            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a126D7M2);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8br, hs_sat26D8bs);
                    };
                    var hs_sat26D8bc = new $hs.Thunk();
                    hs_sat26D8bc.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziHandleziInternals.hs_flushCharReadBuffer.hscall(hs_wild226D7M3);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8bc, hs_sat26D8bq);
                };
                var hs_sat26D8b9 = new $hs.Thunk();
                hs_sat26D8b9.evaluateOnce = function () {
                    var hs_sat26D8bb = new $hs.Thunk();
                    hs_sat26D8bb.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hGetBufSome\x00");
                    };
                    return $hs.modules.GHCziIOziHandleziInternals.hs_wantReadableHandlezu.hscall(hs_sat26D8bb, hs_h26D7LF);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D8b9, hs_sat26D8ba);
            case 2:
                var hs_sat26D8b6 = new $hs.Thunk();
                hs_sat26D8b6.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hGetBufSome\x00");
                };
                return hs_illegalBufferSizze25u9D5.hscall(hs_h26D7LF, hs_sat26D8b6, hs_count26D7Lz);
            }
        case 2:
            var hs_sat26D8b3 = new $hs.Data(1);
            hs_sat26D8b3.data = [0];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8b3);
        }
    };
    this.hs_hGetBufNonBlocking.evaluate = function (hs_h26D7Nj, hs_ptr26D7NU, hs_count26D7Nd) {
        var hs_sat26D8c8 = new $hs.Data(1);
        hs_sat26D8c8.data = [0];
        var hs_wild26D8c9 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_count26D7Nd, hs_sat26D8c8);
        switch (hs_wild26D8c9.tag) {
        case 1:
            var hs_sat26D8cb = new $hs.Data(1);
            hs_sat26D8cb.data = [0];
            var hs_wild126D8cc = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_count26D7Nd, hs_sat26D8cb);
            switch (hs_wild126D8cc.tag) {
            case 1:
                var hs_sat26D8ce = new $hs.Func(1);
                hs_sat26D8ce.evaluate = function (hs_hzu26D7Nm) {
                    var hs_wild226D7NE = hs_hzu26D7Nm;
                    if (hs_hzu26D7Nm.notEvaluated) {
                        hs_wild226D7NE = hs_hzu26D7Nm.hscall();
                    }
                    var hs_rb26D7NG = hs_wild226D7NE.data[5];
                    var hs_sat26D8cw = new $hs.Thunk();
                    hs_sat26D8cw.evaluateOnce = function () {
                        var hs_sat26D8cy = new $hs.Func(1);
                        hs_sat26D8cy.evaluate = function (hs_buf26D7NK) {
                            var hs_wild326D7NS = hs_buf26D7NK;
                            if (hs_buf26D7NK.notEvaluated) {
                                hs_wild326D7NS = hs_buf26D7NK.hscall();
                            }
                            var hs_wild426D8cH = $hs.modules.GHCziIOziBuffer.hs_isEmptyBuffer.hscall(hs_wild326D7NS);
                            switch (hs_wild426D8cH.tag) {
                            case 1:
                                var hs_sat26D8cK = new $hs.Data(1);
                                hs_sat26D8cK.data = [0];
                                var hs_sat26D8cJ = new $hs.Thunk();
                                hs_sat26D8cJ.evaluateOnce = function () {
                                    return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_ptr26D7NU);
                                };
                                return hs_bufReadNBNonEmpty25u9D2.hscall(hs_wild226D7NE, hs_wild326D7NS, hs_sat26D8cJ, hs_sat26D8cK, hs_count26D7Nd);
                            case 2:
                                var hs_sat26D8cI = new $hs.Data(1);
                                hs_sat26D8cI.data = [0];
                                var hs_sat26D8cA = new $hs.Thunk();
                                hs_sat26D8cA.evaluateOnce = function () {
                                    return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_ptr26D7NU);
                                };
                                return hs_bufReadNBEmpty25u9D1.hscall(hs_wild226D7NE, hs_wild326D7NS, hs_sat26D8cA, hs_sat26D8cI, hs_count26D7Nd);
                            }
                        };
                        var hs_sat26D8cx = new $hs.Thunk();
                        hs_sat26D8cx.evaluateOnce = function () {
                            var hs_sat26D8cz = new $hs.Data(1);
                            hs_sat26D8cz.data = [hs_rb26D7NG];
                            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_sat26D8cz);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8cx, hs_sat26D8cy);
                    };
                    var hs_sat26D8cg = new $hs.Thunk();
                    hs_sat26D8cg.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziHandleziInternals.hs_flushCharReadBuffer.hscall(hs_wild226D7NE);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8cg, hs_sat26D8cw);
                };
                var hs_sat26D8cd = new $hs.Thunk();
                hs_sat26D8cd.evaluateOnce = function () {
                    var hs_sat26D8cf = new $hs.Thunk();
                    hs_sat26D8cf.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hGetBufNonBlocking\x00");
                    };
                    return $hs.modules.GHCziIOziHandleziInternals.hs_wantReadableHandlezu.hscall(hs_sat26D8cf, hs_h26D7Nj);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D8cd, hs_sat26D8ce);
            case 2:
                var hs_sat26D8ca = new $hs.Thunk();
                hs_sat26D8ca.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hGetBufNonBlocking\x00");
                };
                return hs_illegalBufferSizze25u9D5.hscall(hs_h26D7Nj, hs_sat26D8ca, hs_count26D7Nd);
            }
        case 2:
            var hs_sat26D8c7 = new $hs.Data(1);
            hs_sat26D8c7.data = [0];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8c7);
        }
    };
    hs_maybeFillReadBuffer25u9Cy.evaluate = function (hs_handlezu26D7O6, hs_buf26D7O7) {
        var hs_sat26D8cM = new $hs.Func(1);
        hs_sat26D8cM.evaluate = function (hs_e26D7Of) {
            var hs_wild26D8cQ = $hs.modules.SystemziIOziError.hs_isEOFError.hscall(hs_e26D7Of);
            switch (hs_wild26D8cQ.tag) {
            case 1:
                return $hs.modules.GHCziIOziException.hs_ioError.hscall(hs_e26D7Of);
            case 2:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.DataziMaybe.hs_Nothing);
            }
        };
        var hs_sat26D8cL = new $hs.Thunk();
        hs_sat26D8cL.evaluateOnce = function () {
            var hs_sat26D8cO = new $hs.Func(1);
            hs_sat26D8cO.evaluate = function (hs_bufzq26D7Oa) {
                var hs_sat26D8cP = new $hs.Data(2);
                hs_sat26D8cP.data = [hs_bufzq26D7Oa];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8cP);
            };
            var hs_sat26D8cN = new $hs.Thunk();
            hs_sat26D8cN.evaluateOnce = function () {
                return hs_getSomeCharacters25u9CE.hscall(hs_handlezu26D7O6, hs_buf26D7O7);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8cN, hs_sat26D8cO);
        };
        return $hs.modules.ControlziExceptionziBase.hs_catch.hscall($hs.modules.GHCziIOziException.hs_zdfExceptionIOException, hs_sat26D8cL, hs_sat26D8cM);
    };
    this.hs_hGetChar.evaluate = function (hs_handle26D7Ok) {
        var hs_sat26D8cS = new $hs.Func(1);
        hs_sat26D8cS.evaluate = function (hs_handlezu26D7On) {
            var hs_wild26D7OM = hs_handlezu26D7On;
            if (hs_handlezu26D7On.notEvaluated) {
                hs_wild26D7OM = hs_handlezu26D7On.hscall();
            }
            var hs_rb226D7OG = hs_wild26D7OM.data[8];
            var hs_ds626D7P1 = hs_wild26D7OM.data[13];
            var hs_a126D7OH = new $hs.Data(1);
            hs_a126D7OH.data = [hs_rb226D7OG];
            var hs_sat26D8d9 = new $hs.Func(1);
            hs_sat26D8d9.evaluate = function (hs_buf026D7OK) {
                var hs_sat26D8db = new $hs.Func(1);
                hs_sat26D8db.evaluate = function (hs_buf126D7OP) {
                    var hs_sat26D8de = new $hs.Func(1);
                    hs_sat26D8de.evaluate = function (hs_ds926D7OU) {
                        var hs_wild126D8di = hs_ds926D7OU;
                        if (hs_ds926D7OU.notEvaluated) {
                            hs_wild126D8di = hs_ds926D7OU.hscall();
                        }
                        var hs_c126D7P3 = hs_wild126D8di.data[0];
                        var hs_i26D7OZ = hs_wild126D8di.data[1];
                        var hs_buf226D7P0 = new $hs.Thunk();
                        hs_buf226D7P0.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziBuffer.hs_bufferAdjustL.hscall(hs_i26D7OZ, hs_buf126D7OP);
                        };
                        var hs_sat26D8dj = new $hs.Thunk();
                        hs_sat26D8dj.evaluateOnce = function () {
                            var hs_sat26D8dJ = new $hs.Data(1);
                            hs_sat26D8dJ.data = ["\r"];
                            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c126D7P3, hs_sat26D8dJ);
                        };
                        var hs_sat26D8dk = new $hs.Thunk();
                        hs_sat26D8dk.evaluateOnce = function () {
                            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfEqNewline, hs_ds626D7P1, $hs.modules.GHCziIOziHandleziTypes.hs_CRLF);
                        };
                        var hs_wild226D8dl = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26D8dk, hs_sat26D8dj);
                        switch (hs_wild226D8dl.tag) {
                        case 1:
                            var hs_sat26D8dI = new $hs.Thunk();
                            hs_sat26D8dI.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_c126D7P3);
                            };
                            var hs_sat26D8dH = new $hs.Thunk();
                            hs_sat26D8dH.evaluateOnce = function () {
                                return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126D7OH, hs_buf226D7P0);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8dH, hs_sat26D8dI);
                        case 2:
                            var hs_sat26D8dm = new $hs.Func(1);
                            hs_sat26D8dm.evaluate = function (hs_mbuf326D7Pd) {
                                var hs_wild326D8dq = hs_mbuf326D7Pd;
                                if (hs_mbuf326D7Pd.notEvaluated) {
                                    hs_wild326D8dq = hs_mbuf326D7Pd.hscall();
                                }
                                switch (hs_wild326D8dq.tag) {
                                case 1:
                                    var hs_sat26D8dF = new $hs.Thunk();
                                    hs_sat26D8dF.evaluateOnce = function () {
                                        var hs_sat26D8dG = new $hs.Data(1);
                                        hs_sat26D8dG.data = ["\r"];
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8dG);
                                    };
                                    var hs_sat26D8dE = new $hs.Thunk();
                                    hs_sat26D8dE.evaluateOnce = function () {
                                        return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126D7OH, hs_buf226D7P0);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8dE, hs_sat26D8dF);
                                case 2:
                                    var hs_buf326D7Pu = hs_wild326D8dq.data[0];
                                    var hs_sat26D8dr = new $hs.Func(1);
                                    hs_sat26D8dr.evaluate = function (hs_ds1026D7Pn) {
                                        var hs_wild426D8dv = hs_ds1026D7Pn;
                                        if (hs_ds1026D7Pn.notEvaluated) {
                                            hs_wild426D8dv = hs_ds1026D7Pn.hscall();
                                        }
                                        var hs_c226D7Pr = hs_wild426D8dv.data[0];
                                        var hs_i226D7Py = hs_wild426D8dv.data[1];
                                        var hs_sat26D8dw = new $hs.Data(1);
                                        hs_sat26D8dw.data = ["\n"];
                                        var hs_wild526D8dx = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c226D7Pr, hs_sat26D8dw);
                                        switch (hs_wild526D8dx.tag) {
                                        case 1:
                                            var hs_sat26D8dC = new $hs.Thunk();
                                            hs_sat26D8dC.evaluateOnce = function () {
                                                var hs_sat26D8dD = new $hs.Data(1);
                                                hs_sat26D8dD.data = ["\r"];
                                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8dD);
                                            };
                                            var hs_sat26D8dB = new $hs.Thunk();
                                            hs_sat26D8dB.evaluateOnce = function () {
                                                return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126D7OH, hs_buf326D7Pu);
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8dB, hs_sat26D8dC);
                                        case 2:
                                            var hs_sat26D8dy = new $hs.Thunk();
                                            hs_sat26D8dy.evaluateOnce = function () {
                                                var hs_sat26D8dA = new $hs.Data(1);
                                                hs_sat26D8dA.data = ["\n"];
                                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8dA);
                                            };
                                            var hs_sat26D8du = new $hs.Thunk();
                                            hs_sat26D8du.evaluateOnce = function () {
                                                var hs_sat26D8dz = new $hs.Thunk();
                                                hs_sat26D8dz.evaluateOnce = function () {
                                                    return $hs.modules.GHCziIOziBuffer.hs_bufferAdjustL.hscall(hs_i226D7Py, hs_buf326D7Pu);
                                                };
                                                return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126D7OH, hs_sat26D8dz);
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8du, hs_sat26D8dy);
                                        }
                                    };
                                    var hs_sat26D8dp = new $hs.Thunk();
                                    hs_sat26D8dp.evaluateOnce = function () {
                                        var hs_sat26D8dt = new $hs.Thunk();
                                        hs_sat26D8dt.evaluateOnce = function () {
                                            return $hs.modules.GHCziIOziBuffer.hs_bufL.hscall(hs_buf226D7P0);
                                        };
                                        var hs_sat26D8ds = new $hs.Thunk();
                                        hs_sat26D8ds.evaluateOnce = function () {
                                            return $hs.modules.GHCziIOziBuffer.hs_bufRaw.hscall(hs_buf226D7P0);
                                        };
                                        return $hs.modules.GHCziIOziBuffer.hs_readCharBuf.hscall(hs_sat26D8ds, hs_sat26D8dt);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8dp, hs_sat26D8dr);
                                }
                            };
                            var hs_sat26D8dh = new $hs.Thunk();
                            hs_sat26D8dh.evaluateOnce = function () {
                                var hs_wild326D8dn = $hs.modules.GHCziIOziBuffer.hs_isEmptyBuffer.hscall(hs_buf226D7P0);
                                switch (hs_wild326D8dn.tag) {
                                case 1:
                                    var hs_sat26D8do = new $hs.Data(2);
                                    hs_sat26D8do.data = [hs_buf226D7P0];
                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8do);
                                case 2:
                                    return hs_maybeFillReadBuffer25u9Cy.hscall(hs_wild26D7OM, hs_buf226D7P0);
                                }
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8dh, hs_sat26D8dm);
                        }
                    };
                    var hs_sat26D8dd = new $hs.Thunk();
                    hs_sat26D8dd.evaluateOnce = function () {
                        var hs_sat26D8dg = new $hs.Thunk();
                        hs_sat26D8dg.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziBuffer.hs_bufL.hscall(hs_buf126D7OP);
                        };
                        var hs_sat26D8df = new $hs.Thunk();
                        hs_sat26D8df.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziBuffer.hs_bufRaw.hscall(hs_buf126D7OP);
                        };
                        return $hs.modules.GHCziIOziBuffer.hs_readCharBuf.hscall(hs_sat26D8df, hs_sat26D8dg);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8dd, hs_sat26D8de);
                };
                var hs_sat26D8da = new $hs.Thunk();
                hs_sat26D8da.evaluateOnce = function () {
                    var hs_wild126D8dc = $hs.modules.GHCziIOziBuffer.hs_isEmptyBuffer.hscall(hs_buf026D7OK);
                    switch (hs_wild126D8dc.tag) {
                    case 1:
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_buf026D7OK);
                    case 2:
                        return $hs.modules.GHCziIOziHandleziInternals.hs_readTextDevice.hscall(hs_wild26D7OM, hs_buf026D7OK);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8da, hs_sat26D8db);
            };
            var hs_sat26D8cU = new $hs.Thunk();
            hs_sat26D8cU.evaluateOnce = function () {
                return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a126D7OH);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8cU, hs_sat26D8d9);
        };
        var hs_sat26D8cR = new $hs.Thunk();
        hs_sat26D8cR.evaluateOnce = function () {
            var hs_sat26D8cT = new $hs.Thunk();
            hs_sat26D8cT.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hGetChar\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_wantReadableHandlezu.hscall(hs_sat26D8cT, hs_handle26D7Ok);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D8cR, hs_sat26D8cS);
    };
    hs_unpack25u9Cz.evaluate = function (hs_buf26D7PN, hs_r26D7PR, hs_w26D7PU, hs_acc026D7Qm) {
        var hs_buf126D7Q0 = hs_buf26D7PN;
        if (hs_buf26D7PN.notEvaluated) {
            hs_buf126D7Q0 = hs_buf26D7PN.hscall();
        }
        var hs_r126D7PX = hs_r26D7PR;
        if (hs_r26D7PR.notEvaluated) {
            hs_r126D7PX = hs_r26D7PR.hscall();
        }
        var hs_w126D7PY = hs_w26D7PU;
        if (hs_w26D7PU.notEvaluated) {
            hs_w126D7PY = hs_w26D7PU.hscall();
        }
        var hs_wild26D8dO = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_r126D7PX, hs_w126D7PY);
        switch (hs_wild26D8dO.tag) {
        case 1:
            var hs_sat26D8dQ = new $hs.Func(1);
            hs_sat26D8dQ.evaluate = function (hs_pbuf26D7Qb) {
                var hs_unpackRB26D7Qh = new $hs.Func(2);
                hs_unpackRB26D7Qh.evaluate = function (hs_acc26D7Qg, hs_i26D7Q6) {
                    var hs_i126D7Q9 = hs_i26D7Q6;
                    if (hs_i26D7Q6.notEvaluated) {
                        hs_i126D7Q9 = hs_i26D7Q6.hscall();
                    }
                    var hs_wild126D8dT = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_i126D7Q9, hs_r126D7PX);
                    switch (hs_wild126D8dT.tag) {
                    case 1:
                        var hs_sat26D8dV = new $hs.Func(1);
                        hs_sat26D8dV.evaluate = function (hs_c26D7Qe) {
                            var hs_sat26D8dX = new $hs.Thunk();
                            hs_sat26D8dX.evaluateOnce = function () {
                                var hs_sat26D8dZ = new $hs.Data(1);
                                hs_sat26D8dZ.data = [1];
                                return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_i126D7Q9, hs_sat26D8dZ);
                            };
                            var hs_sat26D8dY = new $hs.Thunk();
                            hs_sat26D8dY.evaluateOnce = function () {
                                return $hs.modules.GHCziIOziEncodingziFailure.hs_desurrogatifyRoundtripCharacter.hscall(hs_c26D7Qe);
                            };
                            var hs_sat26D8dW = new $hs.Data(2);
                            hs_sat26D8dW.data = [hs_sat26D8dY, hs_acc26D7Qg];
                            return hs_unpackRB26D7Qh.hscall(hs_sat26D8dW, hs_sat26D8dX);
                        };
                        var hs_sat26D8dU = new $hs.Thunk();
                        hs_sat26D8dU.evaluateOnce = function () {
                            return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableChar, hs_pbuf26D7Qb, hs_i126D7Q9);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8dU, hs_sat26D8dV);
                    case 2:
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_acc26D7Qg);
                    }
                };
                var hs_sat26D8dR = new $hs.Thunk();
                hs_sat26D8dR.evaluateOnce = function () {
                    var hs_sat26D8e0 = new $hs.Data(1);
                    hs_sat26D8e0.data = [1];
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_w126D7PY, hs_sat26D8e0);
                };
                return hs_unpackRB26D7Qh.hscall(hs_acc026D7Qm, hs_sat26D8dR);
            };
            var hs_sat26D8dP = new $hs.Thunk();
            hs_sat26D8dP.evaluateOnce = function () {
                return $hs.modules.GHCziIOziBuffer.hs_withRawBuffer.hscall(hs_buf126D7Q0);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D8dP, hs_sat26D8dQ);
        case 2:
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_acc026D7Qm);
        }
    };
    hs_unpackzunl25u9CA.evaluate = function (hs_buf26D7Qu, hs_r26D7Qy, hs_w26D7QB, hs_acc026D7Ru) {
        var hs_buf126D7QH = hs_buf26D7Qu;
        if (hs_buf26D7Qu.notEvaluated) {
            hs_buf126D7QH = hs_buf26D7Qu.hscall();
        }
        var hs_r126D7QE = hs_r26D7Qy;
        if (hs_r26D7Qy.notEvaluated) {
            hs_r126D7QE = hs_r26D7Qy.hscall();
        }
        var hs_w126D7QF = hs_w26D7QB;
        if (hs_w26D7QB.notEvaluated) {
            hs_w126D7QF = hs_w26D7QB.hscall();
        }
        var hs_wild26D8e6 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_r126D7QE, hs_w126D7QF);
        switch (hs_wild26D8e6.tag) {
        case 1:
            var hs_sat26D8e9 = new $hs.Func(1);
            hs_sat26D8e9.evaluate = function (hs_pbuf26D7QS) {
                var hs_unpackRB26D7R2 = new $hs.Func(2);
                hs_unpackRB26D7R2.evaluate = function (hs_acc26D7R1, hs_i26D7QN) {
                    var hs_i126D7QQ = hs_i26D7QN;
                    if (hs_i26D7QN.notEvaluated) {
                        hs_i126D7QQ = hs_i26D7QN.hscall();
                    }
                    var hs_wild126D8ef = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_i126D7QQ, hs_r126D7QE);
                    switch (hs_wild126D8ef.tag) {
                    case 1:
                        var hs_sat26D8eh = new $hs.Func(1);
                        hs_sat26D8eh.evaluate = function (hs_c26D7QV) {
                            var hs_sat26D8ej = new $hs.Thunk();
                            hs_sat26D8ej.evaluateOnce = function () {
                                return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_i126D7QQ, hs_r126D7QE);
                            };
                            var hs_sat26D8ek = new $hs.Thunk();
                            hs_sat26D8ek.evaluateOnce = function () {
                                var hs_sat26D8eD = new $hs.Data(1);
                                hs_sat26D8eD.data = ["\n"];
                                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c26D7QV, hs_sat26D8eD);
                            };
                            var hs_wild226D8el = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26D8ek, hs_sat26D8ej);
                            switch (hs_wild226D8el.tag) {
                            case 1:
                                var hs_sat26D8eA = new $hs.Thunk();
                                hs_sat26D8eA.evaluateOnce = function () {
                                    var hs_sat26D8eC = new $hs.Data(1);
                                    hs_sat26D8eC.data = [1];
                                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_i126D7QQ, hs_sat26D8eC);
                                };
                                var hs_sat26D8eB = new $hs.Thunk();
                                hs_sat26D8eB.evaluateOnce = function () {
                                    return $hs.modules.GHCziIOziEncodingziFailure.hs_desurrogatifyRoundtripCharacter.hscall(hs_c26D7QV);
                                };
                                var hs_sat26D8ez = new $hs.Data(2);
                                hs_sat26D8ez.data = [hs_sat26D8eB, hs_acc26D7R1];
                                return hs_unpackRB26D7R2.hscall(hs_sat26D8ez, hs_sat26D8eA);
                            case 2:
                                var hs_sat26D8em = new $hs.Func(1);
                                hs_sat26D8em.evaluate = function (hs_c126D7Ra) {
                                    var hs_sat26D8es = new $hs.Data(1);
                                    hs_sat26D8es.data = ["\r"];
                                    var hs_wild326D8et = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c126D7Ra, hs_sat26D8es);
                                    switch (hs_wild326D8et.tag) {
                                    case 1:
                                        var hs_sat26D8ew = new $hs.Thunk();
                                        hs_sat26D8ew.evaluateOnce = function () {
                                            var hs_sat26D8ey = new $hs.Data(1);
                                            hs_sat26D8ey.data = [1];
                                            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_i126D7QQ, hs_sat26D8ey);
                                        };
                                        var hs_sat26D8ex = new $hs.Data(1);
                                        hs_sat26D8ex.data = ["\n"];
                                        var hs_sat26D8ev = new $hs.Data(2);
                                        hs_sat26D8ev.data = [hs_sat26D8ex, hs_acc26D7R1];
                                        return hs_unpackRB26D7R2.hscall(hs_sat26D8ev, hs_sat26D8ew);
                                    case 2:
                                        var hs_sat26D8eq = new $hs.Thunk();
                                        hs_sat26D8eq.evaluateOnce = function () {
                                            var hs_sat26D8eu = new $hs.Data(1);
                                            hs_sat26D8eu.data = [2];
                                            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_i126D7QQ, hs_sat26D8eu);
                                        };
                                        var hs_sat26D8er = new $hs.Data(1);
                                        hs_sat26D8er.data = ["\n"];
                                        var hs_sat26D8ep = new $hs.Data(2);
                                        hs_sat26D8ep.data = [hs_sat26D8er, hs_acc26D7R1];
                                        return hs_unpackRB26D7R2.hscall(hs_sat26D8ep, hs_sat26D8eq);
                                    }
                                };
                                var hs_sat26D8ei = new $hs.Thunk();
                                hs_sat26D8ei.evaluateOnce = function () {
                                    var hs_sat26D8en = new $hs.Thunk();
                                    hs_sat26D8en.evaluateOnce = function () {
                                        var hs_sat26D8eo = new $hs.Data(1);
                                        hs_sat26D8eo.data = [1];
                                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_i126D7QQ, hs_sat26D8eo);
                                    };
                                    return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableChar, hs_pbuf26D7QS, hs_sat26D8en);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8ei, hs_sat26D8em);
                            }
                        };
                        var hs_sat26D8eg = new $hs.Thunk();
                        hs_sat26D8eg.evaluateOnce = function () {
                            return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableChar, hs_pbuf26D7QS, hs_i126D7QQ);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8eg, hs_sat26D8eh);
                    case 2:
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_acc26D7R1);
                    }
                };
                var hs_sat26D8eb = new $hs.Func(1);
                hs_sat26D8eb.evaluate = function (hs_c26D7Rr) {
                    var hs_sat26D8eF = new $hs.Data(1);
                    hs_sat26D8eF.data = ["\r"];
                    var hs_wild126D8eG = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c26D7Rr, hs_sat26D8eF);
                    switch (hs_wild126D8eG.tag) {
                    case 1:
                        var hs_sat26D8eO = new $hs.Func(1);
                        hs_sat26D8eO.evaluate = function (hs_str26D7Rz) {
                            var hs_sat26D8eR = new $hs.Data(1);
                            hs_sat26D8eR.data = [hs_str26D7Rz, hs_w126D7QF];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8eR);
                        };
                        var hs_sat26D8eN = new $hs.Thunk();
                        hs_sat26D8eN.evaluateOnce = function () {
                            var hs_sat26D8eP = new $hs.Thunk();
                            hs_sat26D8eP.evaluateOnce = function () {
                                var hs_sat26D8eQ = new $hs.Data(1);
                                hs_sat26D8eQ.data = [1];
                                return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_w126D7QF, hs_sat26D8eQ);
                            };
                            return hs_unpackRB26D7R2.hscall(hs_acc026D7Ru, hs_sat26D8eP);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8eN, hs_sat26D8eO);
                    case 2:
                        var hs_sat26D8eH = new $hs.Func(1);
                        hs_sat26D8eH.evaluate = function (hs_str26D7RG) {
                            var hs_sat26D8eL = new $hs.Thunk();
                            hs_sat26D8eL.evaluateOnce = function () {
                                var hs_sat26D8eM = new $hs.Data(1);
                                hs_sat26D8eM.data = [1];
                                return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_w126D7QF, hs_sat26D8eM);
                            };
                            var hs_sat26D8eK = new $hs.Data(1);
                            hs_sat26D8eK.data = [hs_str26D7RG, hs_sat26D8eL];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8eK);
                        };
                        var hs_sat26D8eE = new $hs.Thunk();
                        hs_sat26D8eE.evaluateOnce = function () {
                            var hs_sat26D8eI = new $hs.Thunk();
                            hs_sat26D8eI.evaluateOnce = function () {
                                var hs_sat26D8eJ = new $hs.Data(1);
                                hs_sat26D8eJ.data = [2];
                                return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_w126D7QF, hs_sat26D8eJ);
                            };
                            return hs_unpackRB26D7R2.hscall(hs_acc026D7Ru, hs_sat26D8eI);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8eE, hs_sat26D8eH);
                    }
                };
                var hs_sat26D8ea = new $hs.Thunk();
                hs_sat26D8ea.evaluateOnce = function () {
                    var hs_sat26D8ec = new $hs.Thunk();
                    hs_sat26D8ec.evaluateOnce = function () {
                        var hs_sat26D8ed = new $hs.Data(1);
                        hs_sat26D8ed.data = [1];
                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_w126D7QF, hs_sat26D8ed);
                    };
                    return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableChar, hs_pbuf26D7QS, hs_sat26D8ec);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8ea, hs_sat26D8eb);
            };
            var hs_sat26D8e8 = new $hs.Thunk();
            hs_sat26D8e8.evaluateOnce = function () {
                return $hs.modules.GHCziIOziBuffer.hs_withRawBuffer.hscall(hs_buf126D7QH);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D8e8, hs_sat26D8e9);
        case 2:
            var hs_sat26D8e7 = new $hs.Data(1);
            hs_sat26D8e7.data = [0];
            var hs_sat26D8e1 = new $hs.Data(1);
            hs_sat26D8e1.data = [hs_acc026D7Ru, hs_sat26D8e7];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8e1);
        }
    };
    hs_hGetLineBufferedLoop25u9Cx.evaluate = function (hs_handlezu26D7RS, hs_buf26D7Sd, hs_xss26D7TP) {
        var hs_wild26D7Tr = hs_handlezu26D7RS;
        if (hs_handlezu26D7RS.notEvaluated) {
            hs_wild26D7Tr = hs_handlezu26D7RS.hscall();
        }
        var hs_rb226D7Sb = hs_wild26D7Tr.data[8];
        var hs_ds626D7T8 = hs_wild26D7Tr.data[13];
        var hs_a126D7Sc = new $hs.Data(1);
        hs_a126D7Sc.data = [hs_rb226D7Sb];
        var hs_wild126D7Tp = hs_buf26D7Sd;
        if (hs_buf26D7Sd.notEvaluated) {
            hs_wild126D7Tp = hs_buf26D7Sd.hscall();
        }
        var hs_rb426D7Ss = hs_wild126D7Tp.data[0];
        var hs_rb526D7St = hs_wild126D7Tp.data[1];
        var hs_rb726D7Sm = hs_wild126D7Tp.data[4];
        var hs_rb826D7Sp = hs_wild126D7Tp.data[5];
        var hs_r026D7Sn = new $hs.Data(1);
        hs_r026D7Sn.data = [hs_rb726D7Sm];
        var hs_w26D7Sq = new $hs.Data(1);
        hs_w26D7Sq.data = [hs_rb826D7Sp];
        var hs_raw026D7Su = new $hs.Data(1);
        hs_raw026D7Su.data = [hs_rb426D7Ss, hs_rb526D7St];
        var hs_sat26D8f9 = new $hs.Func(1);
        hs_sat26D8f9.evaluate = function (hs_ds1026D7SR) {
            var hs_wild226D8fj = hs_ds1026D7SR;
            if (hs_ds1026D7SR.notEvaluated) {
                hs_wild226D8fj = hs_ds1026D7SR.hscall();
            }
            var hs_eol26D7Tl = hs_wild226D8fj.data[0];
            var hs_off26D7T0 = hs_wild226D8fj.data[1];
            var hs_sat26D8fk = new $hs.Thunk();
            hs_sat26D8fk.evaluateOnce = function () {
                var hs_sat26D8fx = new $hs.Func(1);
                hs_sat26D8fx.evaluate = function (hs_ds1126D7Th) {
                    var hs_wild326D8fE = hs_ds1126D7Th;
                    if (hs_ds1126D7Th.notEvaluated) {
                        hs_wild326D8fE = hs_ds1126D7Th.hscall();
                    }
                    var hs_xs26D7TO = hs_wild326D8fE.data[0];
                    var hs_rzq26D7To = hs_wild326D8fE.data[1];
                    var hs_wild426D8fD = hs_eol26D7Tl;
                    if (hs_eol26D7Tl.notEvaluated) {
                        hs_wild426D8fD = hs_eol26D7Tl.hscall();
                    }
                    switch (hs_wild426D8fD.tag) {
                    case 1:
                        var hs_buf126D7Tq = new $hs.Thunk();
                        hs_buf126D7Tq.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziBuffer.hs_bufferAdjustL.hscall(hs_rzq26D7To, hs_wild126D7Tp);
                        };
                        var hs_sat26D8fN = new $hs.Func(1);
                        hs_sat26D8fN.evaluate = function (hs_maybezubuf26D7Tu) {
                            var hs_wild526D8fP = hs_maybezubuf26D7Tu;
                            if (hs_maybezubuf26D7Tu.notEvaluated) {
                                hs_wild526D8fP = hs_maybezubuf26D7Tu.hscall();
                            }
                            switch (hs_wild526D8fP.tag) {
                            case 1:
                                var hs_sat26D8fR = new $hs.Thunk();
                                hs_sat26D8fR.evaluateOnce = function () {
                                    var hs_str26D7TT = new $hs.Thunk();
                                    hs_str26D7TT.evaluateOnce = function () {
                                        var hs_sat26D8fY = new $hs.Thunk();
                                        hs_sat26D8fY.evaluateOnce = function () {
                                            var hs_sat26D8g0 = new $hs.Data(2);
                                            hs_sat26D8g0.data = [hs_xs26D7TO, hs_xss26D7TP];
                                            var hs_sat26D8g1 = new $hs.Thunk();
                                            hs_sat26D8g1.evaluateOnce = function () {
                                                var hs_sat26D8g3 = new $hs.Thunk();
                                                hs_sat26D8g3.evaluateOnce = function () {
                                                    return $hs.modules.GHCziIOziBuffer.hs_isEmptyBuffer.hscall(hs_buf126D7Tq);
                                                };
                                                var hs_wild626D8g4 = $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26D8g3);
                                                switch (hs_wild626D8g4.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    var hs_sat26D8g2 = new $hs.Data(1);
                                                    hs_sat26D8g2.data = ["\r"];
                                                    var $res = new $hs.Data(2);
                                                    $res.data = [hs_sat26D8g2, $hs.modules.GHCziTypes.hs_ZMZN];
                                                    return $res;
                                                }
                                            };
                                            var hs_sat26D8fZ = new $hs.Data(2);
                                            hs_sat26D8fZ.data = [hs_sat26D8g1, hs_sat26D8g0];
                                            return $hs.modules.GHCziList.hs_reverse.hscall(hs_sat26D8fZ);
                                        };
                                        return $hs.modules.GHCziList.hs_concat.hscall(hs_sat26D8fY);
                                    };
                                    var hs_sat26D8fW = new $hs.Thunk();
                                    hs_sat26D8fW.evaluateOnce = function () {
                                        return $hs.modules.GHCziList.hs_null.hscall(hs_str26D7TT);
                                    };
                                    var hs_wild626D8fX = $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26D8fW);
                                    switch (hs_wild626D8fX.tag) {
                                    case 1:
                                        if ($hs.modules.GHCziIOziHandleziInternals.hs_ioezuEOF.notEvaluated) {
                                            return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuEOF.hscall();
                                        } else {
                                            return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuEOF;
                                        }
                                    case 2:
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_str26D7TT);
                                    }
                                };
                                var hs_sat26D8fQ = new $hs.Thunk();
                                hs_sat26D8fQ.evaluateOnce = function () {
                                    var hs_sat26D8fS = new $hs.Thunk();
                                    hs_sat26D8fS.evaluateOnce = function () {
                                        var hs_wild626D8fV = hs_buf126D7Tq;
                                        if (hs_buf126D7Tq.notEvaluated) {
                                            hs_wild626D8fV = hs_buf126D7Tq.hscall();
                                        }
                                        var hs_rb926D7TD = hs_wild626D8fV.data[0];
                                        var hs_rb1026D7TE = hs_wild626D8fV.data[1];
                                        var hs_ds1226D7TF = hs_wild626D8fV.data[2];
                                        var hs_rb1126D7TG = hs_wild626D8fV.data[3];
                                        var $res = new $hs.Data(1);
                                        $res.data = [hs_rb926D7TD, hs_rb1026D7TE, hs_ds1226D7TF, hs_rb1126D7TG, 0, 0];
                                        return $res;
                                    };
                                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126D7Sc, hs_sat26D8fS);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8fQ, hs_sat26D8fR);
                            case 2:
                                var hs_newzubuf26D7TY = hs_wild526D8fP.data[0];
                                var hs_sat26D8fO = new $hs.Data(2);
                                hs_sat26D8fO.data = [hs_xs26D7TO, hs_xss26D7TP];
                                return hs_hGetLineBufferedLoop25u9Cx.hscall(hs_wild26D7Tr, hs_newzubuf26D7TY, hs_sat26D8fO);
                            }
                        };
                        var hs_sat26D8fM = new $hs.Thunk();
                        hs_sat26D8fM.evaluateOnce = function () {
                            return hs_maybeFillReadBuffer25u9Cy.hscall(hs_wild26D7Tr, hs_buf126D7Tq);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8fM, hs_sat26D8fN);
                    case 2:
                        var hs_sat26D8fF = new $hs.Thunk();
                        hs_sat26D8fF.evaluateOnce = function () {
                            var hs_sat26D8fJ = new $hs.Thunk();
                            hs_sat26D8fJ.evaluateOnce = function () {
                                var hs_sat26D8fK = new $hs.Thunk();
                                hs_sat26D8fK.evaluateOnce = function () {
                                    var hs_sat26D8fL = new $hs.Data(2);
                                    hs_sat26D8fL.data = [hs_xs26D7TO, hs_xss26D7TP];
                                    return $hs.modules.GHCziList.hs_reverse.hscall(hs_sat26D8fL);
                                };
                                return $hs.modules.GHCziList.hs_concat.hscall(hs_sat26D8fK);
                            };
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8fJ);
                        };
                        var hs_sat26D8fC = new $hs.Thunk();
                        hs_sat26D8fC.evaluateOnce = function () {
                            var hs_sat26D8fG = new $hs.Thunk();
                            hs_sat26D8fG.evaluateOnce = function () {
                                var hs_sat26D8fH = new $hs.Thunk();
                                hs_sat26D8fH.evaluateOnce = function () {
                                    var hs_sat26D8fI = new $hs.Data(1);
                                    hs_sat26D8fI.data = [1];
                                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_off26D7T0, hs_sat26D8fI);
                                };
                                return $hs.modules.GHCziIOziBuffer.hs_bufferAdjustL.hscall(hs_sat26D8fH, hs_wild126D7Tp);
                            };
                            return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126D7Sc, hs_sat26D8fG);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8fC, hs_sat26D8fF);
                    }
                };
                var hs_sat26D8fw = new $hs.Thunk();
                hs_sat26D8fw.evaluateOnce = function () {
                    var hs_wild326D8fy = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfEqNewline, hs_ds626D7T8, $hs.modules.GHCziIOziHandleziTypes.hs_CRLF);
                    switch (hs_wild326D8fy.tag) {
                    case 1:
                        var hs_sat26D8fA = new $hs.Func(1);
                        hs_sat26D8fA.evaluate = function (hs_xs26D7Tc) {
                            var hs_sat26D8fB = new $hs.Data(1);
                            hs_sat26D8fB.data = [hs_xs26D7Tc, hs_off26D7T0];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8fB);
                        };
                        var hs_sat26D8fz = new $hs.Thunk();
                        hs_sat26D8fz.evaluateOnce = function () {
                            return hs_unpack25u9Cz.hscall(hs_raw026D7Su, hs_r026D7Sn, hs_off26D7T0, $hs.modules.GHCziTypes.hs_ZMZN);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8fz, hs_sat26D8fA);
                    case 2:
                        return hs_unpackzunl25u9CA.hscall(hs_raw026D7Su, hs_r026D7Sn, hs_off26D7T0, $hs.modules.GHCziTypes.hs_ZMZN);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8fw, hs_sat26D8fx);
            };
            var hs_sat26D8fi = new $hs.Thunk();
            hs_sat26D8fi.evaluateOnce = function () {
                var hs_sat26D8fl = new $hs.Thunk();
                hs_sat26D8fl.evaluateOnce = function () {
                    var hs_sat26D8fn = new $hs.Thunk();
                    hs_sat26D8fn.evaluateOnce = function () {
                        var hs_sat26D8fp = new $hs.Thunk();
                        hs_sat26D8fp.evaluateOnce = function () {
                            var hs_sat26D8fr = new $hs.Thunk();
                            hs_sat26D8fr.evaluateOnce = function () {
                                var hs_sat26D8ft = new $hs.Thunk();
                                hs_sat26D8ft.evaluateOnce = function () {
                                    var hs_sat26D8fv = new $hs.Thunk();
                                    hs_sat26D8fv.evaluateOnce = function () {
                                        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_off26D7T0);
                                    };
                                    var hs_sat26D8fu = new $hs.Thunk();
                                    hs_sat26D8fu.evaluateOnce = function () {
                                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall(", off=\x00");
                                    };
                                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D8fu, hs_sat26D8fv);
                                };
                                var hs_sat26D8fs = new $hs.Thunk();
                                hs_sat26D8fs.evaluateOnce = function () {
                                    return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_w26D7Sq);
                                };
                                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D8fs, hs_sat26D8ft);
                            };
                            var hs_sat26D8fq = new $hs.Thunk();
                            hs_sat26D8fq.evaluateOnce = function () {
                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall(", w=\x00");
                            };
                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D8fq, hs_sat26D8fr);
                        };
                        var hs_sat26D8fo = new $hs.Thunk();
                        hs_sat26D8fo.evaluateOnce = function () {
                            return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_r026D7Sn);
                        };
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D8fo, hs_sat26D8fp);
                    };
                    var hs_sat26D8fm = new $hs.Thunk();
                    hs_sat26D8fm.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hGetLineBufferedLoop: r=\x00");
                    };
                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D8fm, hs_sat26D8fn);
                };
                return $hs.modules.GHCziIOziHandleziInternals.hs_debugIO.hscall(hs_sat26D8fl);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8fi, hs_sat26D8fk);
        };
        var hs_sat26D8eS = new $hs.Thunk();
        hs_sat26D8eS.evaluateOnce = function () {
            var hs_loop26D7SL = new $hs.Func(2);
            hs_loop26D7SL.evaluate = function (hs_raw26D7SA, hs_r26D7Sy) {
                var hs_wild226D8fb = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_r26D7Sy, hs_w26D7Sq);
                switch (hs_wild226D8fb.tag) {
                case 1:
                    var hs_sat26D8fd = new $hs.Func(1);
                    hs_sat26D8fd.evaluate = function (hs_ds1026D7SD) {
                        var hs_wild326D8ff = hs_ds1026D7SD;
                        if (hs_ds1026D7SD.notEvaluated) {
                            hs_wild326D8ff = hs_ds1026D7SD.hscall();
                        }
                        var hs_c26D7SH = hs_wild326D8ff.data[0];
                        var hs_rzq26D7SK = hs_wild326D8ff.data[1];
                        var hs_sat26D8fg = new $hs.Data(1);
                        hs_sat26D8fg.data = ["\n"];
                        var hs_wild426D8fh = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c26D7SH, hs_sat26D8fg);
                        switch (hs_wild426D8fh.tag) {
                        case 1:
                            return hs_loop26D7SL.hscall(hs_raw26D7SA, hs_rzq26D7SK);
                        case 2:
                            var hs_sat26D8fe = new $hs.Data(1);
                            hs_sat26D8fe.data = [$hs.modules.GHCziTypes.hs_True, hs_r26D7Sy];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8fe);
                        }
                    };
                    var hs_sat26D8fc = new $hs.Thunk();
                    hs_sat26D8fc.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBuffer.hs_readCharBuf.hscall(hs_raw26D7SA, hs_r26D7Sy);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8fc, hs_sat26D8fd);
                case 2:
                    var hs_sat26D8fa = new $hs.Data(1);
                    hs_sat26D8fa.data = [$hs.modules.GHCziTypes.hs_False, hs_w26D7Sq];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8fa);
                }
            };
            return hs_loop26D7SL.hscall(hs_raw026D7Su, hs_r026D7Sn);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8eS, hs_sat26D8f9);
    };
    this.hs_hGetLine.evaluate = function (hs_h26D7Ue) {
        var hs_sat26D8g6 = new $hs.Func(1);
        hs_sat26D8g6.evaluate = function (hs_handlezu26D7Uh) {
            var hs_wild26D7UD = hs_handlezu26D7Uh;
            if (hs_handlezu26D7Uh.notEvaluated) {
                hs_wild26D7UD = hs_handlezu26D7Uh.hscall();
            }
            var hs_rb226D7Uz = hs_wild26D7UD.data[8];
            var hs_sat26D8go = new $hs.Func(1);
            hs_sat26D8go.evaluate = function (hs_buf26D7UE) {
                return hs_hGetLineBufferedLoop25u9Cx.hscall(hs_wild26D7UD, hs_buf26D7UE, $hs.modules.GHCziTypes.hs_ZMZN);
            };
            var hs_sat26D8g8 = new $hs.Thunk();
            hs_sat26D8g8.evaluateOnce = function () {
                var hs_sat26D8gp = new $hs.Data(1);
                hs_sat26D8gp.data = [hs_rb226D7Uz];
                return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_sat26D8gp);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8g8, hs_sat26D8go);
        };
        var hs_sat26D8g5 = new $hs.Thunk();
        hs_sat26D8g5.evaluateOnce = function () {
            var hs_sat26D8g7 = new $hs.Thunk();
            hs_sat26D8g7.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hGetLine\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_wantReadableHandlezu.hscall(hs_sat26D8g7, hs_h26D7Ue);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D8g5, hs_sat26D8g6);
    };
    hs_lazzyRead25u9CC.evaluate = function (hs_handle26D7UJ) {
        var hs_sat26D8gq = new $hs.Thunk();
        hs_sat26D8gq.evaluateOnce = function () {
            var hs_sat26D8gs = new $hs.Func(1);
            hs_sat26D8gs.evaluate = function (hs_handlezu26D7UM) {
                var hs_wild26D8gv = $hs.modules.GHCziIOziHandleziTypes.hs_haType.hscall(hs_handlezu26D7UM);
                switch (hs_wild26D8gv.tag) {
                case 1:
                    var hs_sat26D8gu = new $hs.Data(1);
                    hs_sat26D8gu.data = [hs_handlezu26D7UM, $hs.modules.GHCziTypes.hs_ZMZN];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8gu);
                case 2:
                    var hs_wild126D7Vf = hs_handlezu26D7UM;
                    if (hs_handlezu26D7UM.notEvaluated) {
                        hs_wild126D7Vf = hs_handlezu26D7UM.hscall();
                    }
                    var hs_rb226D7Vb = hs_wild126D7Vf.data[8];
                    var hs_ds626D7VD = hs_wild126D7Vf.data[13];
                    var hs_a126D7Vc = new $hs.Data(1);
                    hs_a126D7Vc.data = [hs_rb226D7Vb];
                    var hs_sat26D8gL = new $hs.Func(1);
                    hs_sat26D8gL.evaluate = function (hs_buf26D7Vg) {
                        var hs_sat26D8gN = new $hs.Func(1);
                        hs_sat26D8gN.evaluate = function (hs_e26D7Wa) {
                            var hs_sat26D8h6 = new $hs.Func(1);
                            hs_sat26D8h6.evaluate = function (hs_ds926D7W5) {
                                var hs_wild226D8h8 = hs_ds926D7W5;
                                if (hs_ds926D7W5.notEvaluated) {
                                    hs_wild226D8h8 = hs_ds926D7W5.hscall();
                                }
                                var hs_handlezuzq26D7We = hs_wild226D8h8.data[0];
                                var hs_sat26D8ha = new $hs.Thunk();
                                hs_sat26D8ha.evaluateOnce = function () {
                                    var hs_sat26D8hf = new $hs.Thunk();
                                    hs_sat26D8hf.evaluateOnce = function () {
                                        var hs_wild326D8hh = $hs.modules.SystemziIOziError.hs_isEOFError.hscall(hs_e26D7Wa);
                                        switch (hs_wild326D8hh.tag) {
                                        case 1:
                                            var hs_sat26D8hk = new $hs.Thunk();
                                            hs_sat26D8hk.evaluateOnce = function () {
                                                var hs_sat26D8hl = new $hs.Thunk();
                                                hs_sat26D8hl.evaluateOnce = function () {
                                                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hGetContents\x00");
                                                };
                                                return $hs.modules.GHCziIOziHandleziInternals.hs_augmentIOError.hscall(hs_e26D7Wa, hs_sat26D8hl, hs_handle26D7UJ);
                                            };
                                            return $hs.modules.GHCziException.hs_throw.hscall($hs.modules.GHCziIOziException.hs_zdfExceptionIOException, hs_sat26D8hk);
                                        case 2:
                                            var hs_sat26D8hi = new $hs.Thunk();
                                            hs_sat26D8hi.evaluateOnce = function () {
                                                return $hs.modules.GHCziIOziBuffer.hs_isEmptyBuffer.hscall(hs_buf26D7Vg);
                                            };
                                            var hs_wild426D8hj = $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26D8hi);
                                            switch (hs_wild426D8hj.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_sat26D8hg = new $hs.Data(1);
                                                hs_sat26D8hg.data = ["\r"];
                                                var $res = new $hs.Data(2);
                                                $res.data = [hs_sat26D8hg, $hs.modules.GHCziTypes.hs_ZMZN];
                                                return $res;
                                            }
                                        }
                                    };
                                    var hs_sat26D8he = new $hs.Data(1);
                                    hs_sat26D8he.data = [hs_handlezuzq26D7We, hs_sat26D8hf];
                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8he);
                                };
                                var hs_sat26D8h7 = new $hs.Thunk();
                                hs_sat26D8h7.evaluateOnce = function () {
                                    var hs_sat26D8hb = new $hs.Thunk();
                                    hs_sat26D8hb.evaluateOnce = function () {
                                        var hs_sat26D8hd = new $hs.Thunk();
                                        hs_sat26D8hd.evaluateOnce = function () {
                                            return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziIOziException.hs_zdfShowIOException, hs_e26D7Wa);
                                        };
                                        var hs_sat26D8hc = new $hs.Thunk();
                                        hs_sat26D8hc.evaluateOnce = function () {
                                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hGetContents caught: \x00");
                                        };
                                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D8hc, hs_sat26D8hd);
                                    };
                                    return $hs.modules.GHCziIOziHandleziInternals.hs_debugIO.hscall(hs_sat26D8hb);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8h7, hs_sat26D8ha);
                            };
                            var hs_sat26D8h5 = new $hs.Thunk();
                            hs_sat26D8h5.evaluateOnce = function () {
                                return $hs.modules.GHCziIOziHandleziInternals.hs_hClosezuhelp.hscall(hs_wild126D7Vf);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8h5, hs_sat26D8h6);
                        };
                        var hs_sat26D8gM = new $hs.Thunk();
                        hs_sat26D8gM.evaluateOnce = function () {
                            var hs_sat26D8gP = new $hs.Func(1);
                            hs_sat26D8gP.evaluate = function (hs_bufzq26D7Vj) {
                                var hs_wild226D7VS = hs_bufzq26D7Vj;
                                if (hs_bufzq26D7Vj.notEvaluated) {
                                    hs_wild226D7VS = hs_bufzq26D7Vj.hscall();
                                }
                                var hs_rb426D7Vs = hs_wild226D7VS.data[0];
                                var hs_rb526D7Vt = hs_wild226D7VS.data[1];
                                var hs_rb726D7Vw = hs_wild226D7VS.data[4];
                                var hs_rb826D7Vz = hs_wild226D7VS.data[5];
                                var hs_bufRaw26D7Vu = new $hs.Data(1);
                                hs_bufRaw26D7Vu.data = [hs_rb426D7Vs, hs_rb526D7Vt];
                                var hs_bufL26D7Vx = new $hs.Data(1);
                                hs_bufL26D7Vx.data = [hs_rb726D7Vw];
                                var hs_bufR26D7VA = new $hs.Data(1);
                                hs_bufR26D7VA.data = [hs_rb826D7Vz];
                                var hs_sat26D8gT = new $hs.Func(1);
                                hs_sat26D8gT.evaluate = function (hs_lazzyzurest26D7VF) {
                                    var hs_sat26D8gV = new $hs.Func(1);
                                    hs_sat26D8gV.evaluate = function (hs_ds1026D7VN) {
                                        var hs_wild326D8h1 = hs_ds1026D7VN;
                                        if (hs_ds1026D7VN.notEvaluated) {
                                            hs_wild326D8h1 = hs_ds1026D7VN.hscall();
                                        }
                                        var hs_s26D7VV = hs_wild326D8h1.data[0];
                                        var hs_r26D7VR = hs_wild326D8h1.data[1];
                                        var hs_sat26D8h2 = new $hs.Thunk();
                                        hs_sat26D8h2.evaluateOnce = function () {
                                            var hs_sat26D8h4 = new $hs.Data(1);
                                            hs_sat26D8h4.data = [hs_wild126D7Vf, hs_s26D7VV];
                                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8h4);
                                        };
                                        var hs_sat26D8h0 = new $hs.Thunk();
                                        hs_sat26D8h0.evaluateOnce = function () {
                                            var hs_sat26D8h3 = new $hs.Thunk();
                                            hs_sat26D8h3.evaluateOnce = function () {
                                                return $hs.modules.GHCziIOziBuffer.hs_bufferAdjustL.hscall(hs_r26D7VR, hs_wild226D7VS);
                                            };
                                            return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126D7Vc, hs_sat26D8h3);
                                        };
                                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8h0, hs_sat26D8h2);
                                    };
                                    var hs_sat26D8gU = new $hs.Thunk();
                                    hs_sat26D8gU.evaluateOnce = function () {
                                        var hs_wild326D8gW = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfEqNewline, hs_ds626D7VD, $hs.modules.GHCziIOziHandleziTypes.hs_CRLF);
                                        switch (hs_wild326D8gW.tag) {
                                        case 1:
                                            var hs_sat26D8gY = new $hs.Func(1);
                                            hs_sat26D8gY.evaluate = function (hs_s26D7VI) {
                                                var hs_sat26D8gZ = new $hs.Data(1);
                                                hs_sat26D8gZ.data = [hs_s26D7VI, hs_bufR26D7VA];
                                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8gZ);
                                            };
                                            var hs_sat26D8gX = new $hs.Thunk();
                                            hs_sat26D8gX.evaluateOnce = function () {
                                                return hs_unpack25u9Cz.hscall(hs_bufRaw26D7Vu, hs_bufL26D7Vx, hs_bufR26D7VA, hs_lazzyzurest26D7VF);
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8gX, hs_sat26D8gY);
                                        case 2:
                                            return hs_unpackzunl25u9CA.hscall(hs_bufRaw26D7Vu, hs_bufL26D7Vx, hs_bufR26D7VA, hs_lazzyzurest26D7VF);
                                        }
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8gU, hs_sat26D8gV);
                                };
                                var hs_sat26D8gQ = new $hs.Thunk();
                                hs_sat26D8gQ.evaluateOnce = function () {
                                    return hs_lazzyRead25u9CC.hscall(hs_handle26D7UJ);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8gQ, hs_sat26D8gT);
                            };
                            var hs_sat26D8gO = new $hs.Thunk();
                            hs_sat26D8gO.evaluateOnce = function () {
                                return hs_getSomeCharacters25u9CE.hscall(hs_wild126D7Vf, hs_buf26D7Vg);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8gO, hs_sat26D8gP);
                        };
                        return $hs.modules.ControlziExceptionziBase.hs_catch.hscall($hs.modules.GHCziIOziException.hs_zdfExceptionIOException, hs_sat26D8gM, hs_sat26D8gN);
                    };
                    var hs_sat26D8gw = new $hs.Thunk();
                    hs_sat26D8gw.evaluateOnce = function () {
                        return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a126D7Vc);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8gw, hs_sat26D8gL);
                default:
                    var hs_sat26D8hn = new $hs.Thunk();
                    hs_sat26D8hn.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("illegal handle type\x00");
                    };
                    var hs_sat26D8ho = new $hs.Thunk();
                    hs_sat26D8ho.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hGetContents\x00");
                    };
                    var hs_sat26D8hp = new $hs.Data(2);
                    hs_sat26D8hp.data = [hs_handle26D7UJ];
                    var hs_sat26D8hm = new $hs.Data(1);
                    hs_sat26D8hm.data = [hs_sat26D8hp, $hs.modules.GHCziIOziException.hs_IllegalOperation, hs_sat26D8ho, hs_sat26D8hn, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing];
                    return $hs.modules.GHCziIOziException.hs_ioException.hscall(hs_sat26D8hm);
                }
            };
            var hs_sat26D8gr = new $hs.Thunk();
            hs_sat26D8gr.evaluateOnce = function () {
                var hs_sat26D8gt = new $hs.Thunk();
                hs_sat26D8gt.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hGetContents\x00");
                };
                return $hs.modules.GHCziIOziHandleziInternals.hs_withHandle.hscall(hs_sat26D8gt, hs_handle26D7UJ);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D8gr, hs_sat26D8gs);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_unsafeInterleaveIO, hs_sat26D8gq);
    };
    this.hs_hGetContents.evaluate = function (hs_handle26D7Wv) {
        var hs_sat26D8hr = new $hs.Func(1);
        hs_sat26D8hr.evaluate = function (hs_handlezu26D7WA) {
            var hs_sat26D8hu = new $hs.Func(1);
            hs_sat26D8hu.evaluate = function (hs_xs26D7X8) {
                var hs_sat26D8hw = new $hs.Thunk();
                hs_sat26D8hw.evaluateOnce = function () {
                    var hs_wild26D8hy = hs_handlezu26D7WA;
                    if (hs_handlezu26D7WA.notEvaluated) {
                        hs_wild26D8hy = hs_handlezu26D7WA.hscall();
                    }
                    var hs_ds26D7WS = hs_wild26D8hy.data[0];
                    var hs_ds126D7WT = hs_wild26D8hy.data[1];
                    var hs_ds226D7WU = hs_wild26D8hy.data[2];
                    var hs_ds326D7WV = hs_wild26D8hy.data[3];
                    var hs_rb26D7WW = hs_wild26D8hy.data[5];
                    var hs_ds526D7WX = hs_wild26D8hy.data[6];
                    var hs_rb126D7WY = hs_wild26D8hy.data[7];
                    var hs_rb226D7WZ = hs_wild26D8hy.data[8];
                    var hs_rb326D7X0 = hs_wild26D8hy.data[9];
                    var hs_ds626D7X1 = hs_wild26D8hy.data[10];
                    var hs_ds726D7X2 = hs_wild26D8hy.data[11];
                    var hs_ds826D7X3 = hs_wild26D8hy.data[12];
                    var hs_ds926D7X4 = hs_wild26D8hy.data[13];
                    var hs_ds1026D7X5 = hs_wild26D8hy.data[14];
                    var hs_ds1126D7X6 = hs_wild26D8hy.data[15];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_ds26D7WS, hs_ds126D7WT, hs_ds226D7WU, hs_ds326D7WV, $hs.modules.GHCziIOziHandleziTypes.hs_SemiClosedHandle, hs_rb26D7WW, hs_ds526D7WX, hs_rb126D7WY, hs_rb226D7WZ, hs_rb326D7X0, hs_ds626D7X1, hs_ds726D7X2, hs_ds826D7X3, hs_ds926D7X4, hs_ds1026D7X5, hs_ds1126D7X6];
                    return $res;
                };
                var hs_sat26D8hv = new $hs.Data(1);
                hs_sat26D8hv.data = [hs_sat26D8hw, hs_xs26D7X8];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8hv);
            };
            var hs_sat26D8ht = new $hs.Thunk();
            hs_sat26D8ht.evaluateOnce = function () {
                return hs_lazzyRead25u9CC.hscall(hs_handle26D7Wv);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8ht, hs_sat26D8hu);
        };
        var hs_sat26D8hq = new $hs.Thunk();
        hs_sat26D8hq.evaluateOnce = function () {
            var hs_sat26D8hs = new $hs.Thunk();
            hs_sat26D8hs.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hGetContents\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_wantReadableHandle.hscall(hs_sat26D8hs, hs_handle26D7Wv);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D8hq, hs_sat26D8hr);
    };
    this.hs_hPutChar.evaluate = function (hs_handle26D7Xj, hs_c26D7Xe) {
        var hs_sat26D8hA = new $hs.Thunk();
        hs_sat26D8hA.evaluateOnce = function () {
            var hs_sat26D8hE = new $hs.Func(1);
            hs_sat26D8hE.evaluate = function (hs_handlezu26D7Xm) {
                var hs_wild26D7Yz = hs_handlezu26D7Xm;
                if (hs_handlezu26D7Xm.notEvaluated) {
                    hs_wild26D7Yz = hs_handlezu26D7Xm.hscall();
                }
                var hs_ds226D7Yn = hs_wild26D7Yz.data[6];
                var hs_rb226D7Yq = hs_wild26D7Yz.data[8];
                var hs_ds726D7YE = hs_wild26D7Yz.data[14];
                var hs_putc26D7Yl = new $hs.Func(2);
                hs_putc26D7Yl.evaluate = function (hs_buf26D7XH, hs_c126D7XZ) {
                    var hs_wild126D7XQ = hs_buf26D7XH;
                    if (hs_buf26D7XH.notEvaluated) {
                        hs_wild126D7XQ = hs_buf26D7XH.hscall();
                    }
                    var hs_rb426D7XU = hs_wild126D7XQ.data[0];
                    var hs_rb526D7XV = hs_wild126D7XQ.data[1];
                    var hs_rb826D7XX = hs_wild126D7XQ.data[5];
                    var hs_sat26D8ij = new $hs.Thunk();
                    hs_sat26D8ij.evaluateOnce = function () {
                        var hs_sat26D8io = new $hs.Func(1);
                        hs_sat26D8io.evaluate = function (hs_wzq26D7Y9) {
                            var hs_sat26D8ir = new $hs.Thunk();
                            hs_sat26D8ir.evaluateOnce = function () {
                                var hs_wild226D8it = hs_wild126D7XQ;
                                if (hs_wild126D7XQ.notEvaluated) {
                                    hs_wild226D8it = hs_wild126D7XQ.hscall();
                                }
                                var hs_rb926D7Yc = hs_wild226D8it.data[0];
                                var hs_rb1026D7Yd = hs_wild226D8it.data[1];
                                var hs_ds1026D7Ye = hs_wild226D8it.data[2];
                                var hs_rb1126D7Yf = hs_wild226D8it.data[3];
                                var hs_rb1226D7Yg = hs_wild226D8it.data[4];
                                var hs_tpl26D8is = hs_wzq26D7Y9;
                                if (hs_wzq26D7Y9.notEvaluated) {
                                    hs_tpl26D8is = hs_wzq26D7Y9.hscall();
                                }
                                var hs_tpl126D7Yh = hs_tpl26D8is.data[0];
                                var $res = new $hs.Data(1);
                                $res.data = [hs_rb926D7Yc, hs_rb1026D7Yd, hs_ds1026D7Ye, hs_rb1126D7Yf, hs_rb1226D7Yg, hs_tpl126D7Yh];
                                return $res;
                            };
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8ir);
                        };
                        var hs_sat26D8in = new $hs.Thunk();
                        hs_sat26D8in.evaluateOnce = function () {
                            var hs_sat26D8iq = new $hs.Data(1);
                            hs_sat26D8iq.data = [hs_rb826D7XX];
                            var hs_sat26D8ip = new $hs.Data(1);
                            hs_sat26D8ip.data = [hs_rb426D7XU, hs_rb526D7XV];
                            return $hs.modules.GHCziIOziBuffer.hs_writeCharBuf.hscall(hs_sat26D8ip, hs_sat26D8iq, hs_c126D7XZ);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8in, hs_sat26D8io);
                    };
                    var hs_sat26D8if = new $hs.Thunk();
                    hs_sat26D8if.evaluateOnce = function () {
                        var hs_sat26D8ik = new $hs.Thunk();
                        hs_sat26D8ik.evaluateOnce = function () {
                            var hs_sat26D8im = new $hs.Thunk();
                            hs_sat26D8im.evaluateOnce = function () {
                                return $hs.modules.GHCziIOziBuffer.hs_summaryBuffer.hscall(hs_wild126D7XQ);
                            };
                            var hs_sat26D8il = new $hs.Thunk();
                            hs_sat26D8il.evaluateOnce = function () {
                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("putc: \x00");
                            };
                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D8il, hs_sat26D8im);
                        };
                        return $hs.modules.GHCziIOziHandleziInternals.hs_debugIO.hscall(hs_sat26D8ik);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8if, hs_sat26D8ij);
                };
                var hs_iszuline26D7Yp = new $hs.Thunk();
                hs_iszuline26D7Yp.evaluateOnce = function () {
                    var hs_wild126D8ie = hs_ds226D7Yn;
                    if (hs_ds226D7Yn.notEvaluated) {
                        hs_wild126D8ie = hs_ds226D7Yn.hscall();
                    }
                    switch (hs_wild126D8ie.tag) {
                    case 2:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    default:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    }
                };
                var hs_sat26D8hU = new $hs.Func(1);
                hs_sat26D8hU.evaluate = function (hs_buf26D7Yw) {
                    var hs_sat26D8hX = new $hs.Data(1);
                    hs_sat26D8hX.data = ["\n"];
                    var hs_wild126D8hY = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c26D7Xe, hs_sat26D8hX);
                    switch (hs_wild126D8hY.tag) {
                    case 1:
                        var hs_sat26D8ib = new $hs.Func(1);
                        hs_sat26D8ib.evaluate = function (hs_buf126D7YA) {
                            var hs_sat26D8id = new $hs.Thunk();
                            hs_sat26D8id.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                            };
                            var hs_sat26D8ic = new $hs.Thunk();
                            hs_sat26D8ic.evaluateOnce = function () {
                                return $hs.modules.GHCziIOziHandleziInternals.hs_writeCharBuffer.hscall(hs_wild26D7Yz, hs_buf126D7YA);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8ic, hs_sat26D8id);
                        };
                        var hs_sat26D8ia = new $hs.Thunk();
                        hs_sat26D8ia.evaluateOnce = function () {
                            return hs_putc26D7Yl.hscall(hs_buf26D7Yw, hs_c26D7Xe);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8ia, hs_sat26D8ib);
                    case 2:
                        var hs_sat26D8hZ = new $hs.Func(1);
                        hs_sat26D8hZ.evaluate = function (hs_buf126D7YP) {
                            var hs_sat26D8i7 = new $hs.Thunk();
                            hs_sat26D8i7.evaluateOnce = function () {
                                var hs_sat26D8i9 = new $hs.Thunk();
                                hs_sat26D8i9.evaluateOnce = function () {
                                    return $hs.modules.GHCziIOziHandleziInternals.hs_flushByteWriteBuffer.hscall(hs_wild26D7Yz);
                                };
                                var hs_sat26D8i8 = new $hs.Thunk();
                                hs_sat26D8i8.evaluateOnce = function () {
                                    return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_iszuline26D7Yp);
                                };
                                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D8i8, hs_sat26D8i9);
                            };
                            var hs_sat26D8i6 = new $hs.Thunk();
                            hs_sat26D8i6.evaluateOnce = function () {
                                return $hs.modules.GHCziIOziHandleziInternals.hs_writeCharBuffer.hscall(hs_wild26D7Yz, hs_buf126D7YP);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8i6, hs_sat26D8i7);
                        };
                        var hs_sat26D8hW = new $hs.Thunk();
                        hs_sat26D8hW.evaluateOnce = function () {
                            var hs_wild226D8i1 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfEqNewline, hs_ds726D7YE, $hs.modules.GHCziIOziHandleziTypes.hs_CRLF);
                            switch (hs_wild226D8i1.tag) {
                            case 1:
                                var hs_sat26D8i5 = new $hs.Data(1);
                                hs_sat26D8i5.data = ["\n"];
                                return hs_putc26D7Yl.hscall(hs_buf26D7Yw, hs_sat26D8i5);
                            case 2:
                                var hs_sat26D8i2 = new $hs.Func(1);
                                hs_sat26D8i2.evaluate = function (hs_buf126D7YK) {
                                    var hs_sat26D8i4 = new $hs.Data(1);
                                    hs_sat26D8i4.data = ["\n"];
                                    return hs_putc26D7Yl.hscall(hs_buf126D7YK, hs_sat26D8i4);
                                };
                                var hs_sat26D8i0 = new $hs.Thunk();
                                hs_sat26D8i0.evaluateOnce = function () {
                                    var hs_sat26D8i3 = new $hs.Data(1);
                                    hs_sat26D8i3.data = ["\r"];
                                    return hs_putc26D7Yl.hscall(hs_buf26D7Yw, hs_sat26D8i3);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8i0, hs_sat26D8i2);
                            }
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8hW, hs_sat26D8hZ);
                    }
                };
                var hs_sat26D8hG = new $hs.Thunk();
                hs_sat26D8hG.evaluateOnce = function () {
                    var hs_sat26D8hV = new $hs.Data(1);
                    hs_sat26D8hV.data = [hs_rb226D7Yq];
                    return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_sat26D8hV);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8hG, hs_sat26D8hU);
            };
            var hs_sat26D8hD = new $hs.Thunk();
            hs_sat26D8hD.evaluateOnce = function () {
                var hs_sat26D8hF = new $hs.Thunk();
                hs_sat26D8hF.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hPutChar\x00");
                };
                return $hs.modules.GHCziIOziHandleziInternals.hs_wantWritableHandle.hscall(hs_sat26D8hF, hs_handle26D7Xj);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D8hD, hs_sat26D8hE);
        };
        var hs_sat26D8hz = new $hs.Thunk();
        hs_sat26D8hz.evaluateOnce = function () {
            var hs_c126D8hC = hs_c26D7Xe;
            if (hs_c26D7Xe.notEvaluated) {
                hs_c126D8hC = hs_c26D7Xe.hscall();
            }
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8hz, hs_sat26D8hA);
    };
    hs_hPutChars25u9CK.evaluate = function (hs_ds26D7Z4, hs_ds126D7Z0) {
        var hs_wild26D8iw = hs_ds126D7Z0;
        if (hs_ds126D7Z0.notEvaluated) {
            hs_wild26D8iw = hs_ds126D7Z0.hscall();
        }
        switch (hs_wild26D8iw.tag) {
        case 1:
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        case 2:
            var hs_c26D7Z5 = hs_wild26D8iw.data[0];
            var hs_cs26D7Z7 = hs_wild26D8iw.data[1];
            var hs_sat26D8ix = new $hs.Thunk();
            hs_sat26D8ix.evaluateOnce = function () {
                return hs_hPutChars25u9CK.hscall(hs_ds26D7Z4, hs_cs26D7Z7);
            };
            var hs_sat26D8iv = new $hs.Thunk();
            hs_sat26D8iv.evaluateOnce = function () {
                return $hs.modules.GHCziIOziHandleziText.hs_hPutChar.hscall(hs_ds26D7Z4, hs_c26D7Z5);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8iv, hs_sat26D8ix);
        }
    };
    hs_writeBlocks25u9CM.evaluate = function (hs_hdl26D7ZF, hs_linezubuffered26D809, hs_addzunl26D80m, hs_nl26D7ZZ, hs_buf26D7Zf, hs_s26D80l) {
        var hs_wild26D8iA = hs_buf26D7Zf;
        if (hs_buf26D7Zf.notEvaluated) {
            hs_wild26D8iA = hs_buf26D7Zf.hscall();
        }
        var hs_rb26D7Zo = hs_wild26D8iA.data[0];
        var hs_rb126D7Zp = hs_wild26D8iA.data[1];
        var hs_rb226D7Zs = hs_wild26D8iA.data[3];
        var hs_raw26D7Zq = new $hs.Data(1);
        hs_raw26D7Zq.data = [hs_rb26D7Zo, hs_rb126D7Zp];
        var hs_len26D7Zt = new $hs.Data(1);
        hs_len26D7Zt.data = [hs_rb226D7Zs];
        var hs_shoveString26D7ZK = new $hs.Func(3);
        hs_shoveString26D7ZK.evaluate = function (hs_n26D7Zy, hs_ds126D7ZB, hs_ds226D7ZD) {
            var hs_n126D7ZG = hs_n26D7Zy;
            if (hs_n26D7Zy.notEvaluated) {
                hs_n126D7ZG = hs_n26D7Zy.hscall();
            }
            var hs_wild126D8iF = hs_ds126D7ZB;
            if (hs_ds126D7ZB.notEvaluated) {
                hs_wild126D8iF = hs_ds126D7ZB.hscall();
            }
            switch (hs_wild126D8iF.tag) {
            case 1:
                var hs_wild226D7ZJ = hs_ds226D7ZD;
                if (hs_ds226D7ZD.notEvaluated) {
                    hs_wild226D7ZJ = hs_ds226D7ZD.hscall();
                }
                switch (hs_wild226D7ZJ.tag) {
                case 1:
                    return hs_commitBuffer25u9CN.hscall(hs_hdl26D7ZF, hs_raw26D7Zq, hs_len26D7Zt, hs_n126D7ZG, $hs.modules.GHCziTypes.hs_False, $hs.modules.GHCziTypes.hs_True);
                case 2:
                    return hs_shoveString26D7ZK.hscall(hs_n126D7ZG, hs_wild226D7ZJ, $hs.modules.GHCziTypes.hs_ZMZN);
                }
            case 2:
                var hs_c26D7ZQ = hs_wild126D8iF.data[0];
                var hs_cs26D7ZX = hs_wild126D8iF.data[1];
                var hs_sat26D8iH = new $hs.Thunk();
                hs_sat26D8iH.evaluateOnce = function () {
                    var hs_sat26D8j2 = new $hs.Data(1);
                    hs_sat26D8j2.data = [1];
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n126D7ZG, hs_sat26D8j2);
                };
                var hs_wild226D8iI = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26D8iH, hs_len26D7Zt);
                switch (hs_wild226D8iI.tag) {
                case 1:
                    var hs_sat26D8iN = new $hs.Data(1);
                    hs_sat26D8iN.data = ["\n"];
                    var hs_wild326D8iO = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c26D7ZQ, hs_sat26D8iN);
                    switch (hs_wild326D8iO.tag) {
                    case 1:
                        var hs_sat26D8j0 = new $hs.Func(1);
                        hs_sat26D8j0.evaluate = function (hs_nzq26D7ZW) {
                            return hs_shoveString26D7ZK.hscall(hs_nzq26D7ZW, hs_cs26D7ZX, hs_ds226D7ZD);
                        };
                        var hs_sat26D8iZ = new $hs.Thunk();
                        hs_sat26D8iZ.evaluateOnce = function () {
                            var hs_sat26D8j1 = new $hs.Thunk();
                            hs_sat26D8j1.evaluateOnce = function () {
                                return $hs.modules.GHCziIOziEncodingziFailure.hs_surrogatifyRoundtripCharacter.hscall(hs_c26D7ZQ);
                            };
                            return $hs.modules.GHCziIOziBuffer.hs_writeCharBuf.hscall(hs_raw26D7Zq, hs_n126D7ZG, hs_sat26D8j1);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8iZ, hs_sat26D8j0);
                    case 2:
                        var hs_sat26D8iP = new $hs.Func(1);
                        hs_sat26D8iP.evaluate = function (hs_nzq26D80b) {
                            var hs_wild426D8iW = hs_linezubuffered26D809;
                            if (hs_linezubuffered26D809.notEvaluated) {
                                hs_wild426D8iW = hs_linezubuffered26D809.hscall();
                            }
                            switch (hs_wild426D8iW.tag) {
                            case 1:
                                return hs_shoveString26D7ZK.hscall(hs_nzq26D80b, hs_cs26D7ZX, hs_ds226D7ZD);
                            case 2:
                                var hs_sat26D8iX = new $hs.Thunk();
                                hs_sat26D8iX.evaluateOnce = function () {
                                    var hs_sat26D8iY = new $hs.Data(1);
                                    hs_sat26D8iY.data = [0];
                                    return hs_shoveString26D7ZK.hscall(hs_sat26D8iY, hs_cs26D7ZX, hs_ds226D7ZD);
                                };
                                var hs_sat26D8iV = new $hs.Thunk();
                                hs_sat26D8iV.evaluateOnce = function () {
                                    return hs_commitBuffer25u9CN.hscall(hs_hdl26D7ZF, hs_raw26D7Zq, hs_len26D7Zt, hs_nzq26D80b, $hs.modules.GHCziTypes.hs_True, $hs.modules.GHCziTypes.hs_False);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8iV, hs_sat26D8iX);
                            }
                        };
                        var hs_sat26D8iM = new $hs.Thunk();
                        hs_sat26D8iM.evaluateOnce = function () {
                            var hs_wild426D8iR = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfEqNewline, hs_nl26D7ZZ, $hs.modules.GHCziIOziHandleziTypes.hs_CRLF);
                            switch (hs_wild426D8iR.tag) {
                            case 1:
                                return $hs.modules.GHCziIOziBuffer.hs_writeCharBuf.hscall(hs_raw26D7Zq, hs_n126D7ZG, hs_c26D7ZQ);
                            case 2:
                                var hs_sat26D8iS = new $hs.Func(1);
                                hs_sat26D8iS.evaluate = function (hs_n226D804) {
                                    var hs_sat26D8iU = new $hs.Data(1);
                                    hs_sat26D8iU.data = ["\n"];
                                    return $hs.modules.GHCziIOziBuffer.hs_writeCharBuf.hscall(hs_raw26D7Zq, hs_n226D804, hs_sat26D8iU);
                                };
                                var hs_sat26D8iQ = new $hs.Thunk();
                                hs_sat26D8iQ.evaluateOnce = function () {
                                    var hs_sat26D8iT = new $hs.Data(1);
                                    hs_sat26D8iT.data = ["\r"];
                                    return $hs.modules.GHCziIOziBuffer.hs_writeCharBuf.hscall(hs_raw26D7Zq, hs_n126D7ZG, hs_sat26D8iT);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8iQ, hs_sat26D8iS);
                            }
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8iM, hs_sat26D8iP);
                    }
                case 2:
                    var hs_sat26D8iJ = new $hs.Thunk();
                    hs_sat26D8iJ.evaluateOnce = function () {
                        var hs_sat26D8iL = new $hs.Data(2);
                        hs_sat26D8iL.data = [hs_c26D7ZQ, hs_cs26D7ZX];
                        var hs_sat26D8iK = new $hs.Data(1);
                        hs_sat26D8iK.data = [0];
                        return hs_shoveString26D7ZK.hscall(hs_sat26D8iK, hs_sat26D8iL, hs_ds226D7ZD);
                    };
                    var hs_sat26D8iE = new $hs.Thunk();
                    hs_sat26D8iE.evaluateOnce = function () {
                        return hs_commitBuffer25u9CN.hscall(hs_hdl26D7ZF, hs_raw26D7Zq, hs_len26D7Zt, hs_n126D7ZG, $hs.modules.GHCziTypes.hs_False, $hs.modules.GHCziTypes.hs_False);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8iE, hs_sat26D8iJ);
                }
            }
        };
        var hs_sat26D8iz = new $hs.Thunk();
        hs_sat26D8iz.evaluateOnce = function () {
            var hs_wild126D8j6 = hs_addzunl26D80m;
            if (hs_addzunl26D80m.notEvaluated) {
                hs_wild126D8j6 = hs_addzunl26D80m.hscall();
            }
            switch (hs_wild126D8j6.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_sat26D8j5 = new $hs.Data(1);
                hs_sat26D8j5.data = ["\n"];
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26D8j5, $hs.modules.GHCziTypes.hs_ZMZN];
                return $res;
            }
        };
        var hs_sat26D8iy = new $hs.Data(1);
        hs_sat26D8iy.data = [0];
        return hs_shoveString26D7ZK.hscall(hs_sat26D8iy, hs_s26D80l, hs_sat26D8iz);
    };
    hs_hPutStrzq25u9CJ.evaluate = function (hs_handle26D80u, hs_str26D81I, hs_addzunl26D81K) {
        var hs_sat26D8j8 = new $hs.Func(1);
        hs_sat26D8j8.evaluate = function (hs_ds26D81y) {
            var hs_wild26D8jN = hs_ds26D81y;
            if (hs_ds26D81y.notEvaluated) {
                hs_wild26D8jN = hs_ds26D81y.hscall();
            }
            var hs_bufferzumode26D81C = hs_wild26D8jN.data[0];
            var hs_nl26D81P = hs_wild26D8jN.data[1];
            var hs_wild126D8jM = hs_bufferzumode26D81C;
            if (hs_bufferzumode26D81C.notEvaluated) {
                hs_wild126D8jM = hs_bufferzumode26D81C.hscall();
            }
            var hs_ds126D81G = hs_wild126D8jM.data[0];
            var hs_ds226D81Q = hs_wild126D8jM.data[1];
            var hs_wild226D8jL = hs_ds126D81G;
            if (hs_ds126D81G.notEvaluated) {
                hs_wild226D8jL = hs_ds126D81G.hscall();
            }
            switch (hs_wild226D8jL.tag) {
            case 1:
                var hs_sat26D8jQ = new $hs.Thunk();
                hs_sat26D8jQ.evaluateOnce = function () {
                    var hs_sat26D8jS = new $hs.Thunk();
                    hs_sat26D8jS.evaluateOnce = function () {
                        var hs_sat26D8jT = new $hs.Data(1);
                        hs_sat26D8jT.data = ["\n"];
                        return $hs.modules.GHCziIOziHandleziText.hs_hPutChar.hscall(hs_handle26D80u, hs_sat26D8jT);
                    };
                    var hs_sat26D8jR = new $hs.Thunk();
                    hs_sat26D8jR.evaluateOnce = function () {
                        return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_addzunl26D81K);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D8jR, hs_sat26D8jS);
                };
                var hs_sat26D8jP = new $hs.Thunk();
                hs_sat26D8jP.evaluateOnce = function () {
                    return hs_hPutChars25u9CK.hscall(hs_handle26D80u, hs_str26D81I);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8jP, hs_sat26D8jQ);
            case 2:
                return hs_writeBlocks25u9CM.hscall(hs_handle26D80u, $hs.modules.GHCziTypes.hs_True, hs_addzunl26D81K, hs_nl26D81P, hs_ds226D81Q, hs_str26D81I);
            case 3:
                return hs_writeBlocks25u9CM.hscall(hs_handle26D80u, $hs.modules.GHCziTypes.hs_False, hs_addzunl26D81K, hs_nl26D81P, hs_ds226D81Q, hs_str26D81I);
            }
        };
        var hs_sat26D8j7 = new $hs.Thunk();
        hs_sat26D8j7.evaluateOnce = function () {
            var hs_sat26D8ja = new $hs.Func(1);
            hs_sat26D8ja.evaluate = function (hs_hzu26D80x) {
                var hs_sat26D8jd = new $hs.Func(1);
                hs_sat26D8jd.evaluate = function (hs_bmode26D81r) {
                    var hs_sat26D8jK = new $hs.Thunk();
                    hs_sat26D8jK.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziHandleziTypes.hs_haOutputNL.hscall(hs_hzu26D80x);
                    };
                    var hs_sat26D8jJ = new $hs.Data(1);
                    hs_sat26D8jJ.data = [hs_bmode26D81r, hs_sat26D8jK];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8jJ);
                };
                var hs_sat26D8jc = new $hs.Thunk();
                hs_sat26D8jc.evaluateOnce = function () {
                    var hs_wild26D8jf = hs_hzu26D80x;
                    if (hs_hzu26D80x.notEvaluated) {
                        hs_wild26D8jf = hs_hzu26D80x.hscall();
                    }
                    var hs_ds226D80V = hs_wild26D8jf.data[6];
                    var hs_rb226D80Q = hs_wild26D8jf.data[8];
                    var hs_rb326D80T = hs_wild26D8jf.data[9];
                    var hs_a126D80R = new $hs.Data(1);
                    hs_a126D80R.data = [hs_rb226D80Q];
                    var hs_a226D80U = new $hs.Data(1);
                    hs_a226D80U.data = [hs_rb326D80T];
                    var hs_wild126D817 = hs_ds226D80V;
                    if (hs_ds226D80V.notEvaluated) {
                        hs_wild126D817 = hs_ds226D80V.hscall();
                    }
                    switch (hs_wild126D817.tag) {
                    case 1:
                        var hs_sat26D8jt = new $hs.Thunk();
                        hs_sat26D8jt.evaluateOnce = function () {
                            var hs_sat26D8ju = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("no buffer!\x00");
                            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26D8ju);
                        };
                        var hs_sat26D8je = new $hs.Data(1);
                        hs_sat26D8je.data = [$hs.modules.GHCziIOziHandleziTypes.hs_NoBuffering, hs_sat26D8jt];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8je);
                    default:
                        var hs_sat26D8jw = new $hs.Func(1);
                        hs_sat26D8jw.evaluate = function (hs_bufs26D811) {
                            var hs_sat26D8jy = new $hs.Func(1);
                            hs_sat26D8jy.evaluate = function (hs_buf26D813) {
                                var hs_wild226D8jA = hs_bufs26D811;
                                if (hs_bufs26D811.notEvaluated) {
                                    hs_wild226D8jA = hs_bufs26D811.hscall();
                                }
                                switch (hs_wild226D8jA.tag) {
                                case 1:
                                    var hs_sat26D8jG = new $hs.Func(1);
                                    hs_sat26D8jG.evaluate = function (hs_newzubuf26D818) {
                                        var hs_sat26D8jI = new $hs.Data(1);
                                        hs_sat26D8jI.data = [hs_wild126D817, hs_newzubuf26D818];
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8jI);
                                    };
                                    var hs_sat26D8jF = new $hs.Thunk();
                                    hs_sat26D8jF.evaluateOnce = function () {
                                        var hs_sat26D8jH = new $hs.Thunk();
                                        hs_sat26D8jH.evaluateOnce = function () {
                                            return $hs.modules.GHCziIOziBuffer.hs_bufSizze.hscall(hs_buf26D813);
                                        };
                                        return $hs.modules.GHCziIOziBuffer.hs_newCharBuffer.hscall(hs_sat26D8jH, $hs.modules.GHCziIOziBuffer.hs_WriteBuffer);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8jF, hs_sat26D8jG);
                                case 2:
                                    var hs_b26D81f = hs_wild226D8jA.data[0];
                                    var hs_rest26D81d = hs_wild226D8jA.data[1];
                                    var hs_sat26D8jB = new $hs.Thunk();
                                    hs_sat26D8jB.evaluateOnce = function () {
                                        var hs_sat26D8jD = new $hs.Thunk();
                                        hs_sat26D8jD.evaluateOnce = function () {
                                            var hs_sat26D8jE = new $hs.Thunk();
                                            hs_sat26D8jE.evaluateOnce = function () {
                                                return $hs.modules.GHCziIOziBuffer.hs_bufSizze.hscall(hs_buf26D813);
                                            };
                                            return $hs.modules.GHCziIOziBuffer.hs_emptyBuffer.hscall(hs_b26D81f, hs_sat26D8jE, $hs.modules.GHCziIOziBuffer.hs_WriteBuffer);
                                        };
                                        var hs_sat26D8jC = new $hs.Data(1);
                                        hs_sat26D8jC.data = [hs_wild126D817, hs_sat26D8jD];
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8jC);
                                    };
                                    var hs_sat26D8jz = new $hs.Thunk();
                                    hs_sat26D8jz.evaluateOnce = function () {
                                        return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a226D80U, hs_rest26D81d);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8jz, hs_sat26D8jB);
                                }
                            };
                            var hs_sat26D8jx = new $hs.Thunk();
                            hs_sat26D8jx.evaluateOnce = function () {
                                return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a126D80R);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8jx, hs_sat26D8jy);
                        };
                        var hs_sat26D8jv = new $hs.Thunk();
                        hs_sat26D8jv.evaluateOnce = function () {
                            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a226D80U);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8jv, hs_sat26D8jw);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8jc, hs_sat26D8jd);
            };
            var hs_sat26D8j9 = new $hs.Thunk();
            hs_sat26D8j9.evaluateOnce = function () {
                var hs_sat26D8jb = new $hs.Thunk();
                hs_sat26D8jb.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hPutStr\x00");
                };
                return $hs.modules.GHCziIOziHandleziInternals.hs_wantWritableHandle.hscall(hs_sat26D8jb, hs_handle26D80u);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D8j9, hs_sat26D8ja);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8j7, hs_sat26D8j8);
    };
    this.hs_hPutStr.evaluate = function (hs_handle26D81V, hs_str26D81W) {
        return hs_hPutStrzq25u9CJ.hscall(hs_handle26D81V, hs_str26D81W, $hs.modules.GHCziTypes.hs_False);
    };
    this.hs_hPutStrLn.evaluate = function (hs_handle26D81Z, hs_str26D820) {
        return hs_hPutStrzq25u9CJ.hscall(hs_handle26D81Z, hs_str26D820, $hs.modules.GHCziTypes.hs_True);
    };
};
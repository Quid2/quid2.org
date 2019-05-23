
$hs.modules.GHCziIOziHandleziText = new $hs.Module();
$hs.modules.GHCziIOziHandleziText.dependencies = ["GHC.Prim", "GHC.Types", "GHC.Bool", "GHC.Unit", "Control.Monad", "System.IO.Error", "Data.Maybe", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.Show", "GHC.Err", "GHC.Exception", "Data.Typeable", "GHC.Classes", "GHC.IO", "GHC.IO.Buffer", "GHC.IO.Device", "GHC.IO.BufferedIO", "GHC.IO.FD", "GHC.IO.Exception", "GHC.IO.Handle.Types", "GHC.IO.Handle.Internals", "GHC.IORef", "GHC.List", "GHC.Ptr", "Foreign.C.Types", "Foreign.Storable"];
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
    this.hs_commitBufferzq.evaluate = function (hs_raw26DvJ1, hs_szz26DvIf, hs_count26DvIi, hs_flush26DvIN, hs_release26DvIQ, hs_hzu26DvIl) {
        $hs.modules.GHCziIOziHandleziText.loadDependencies();
        return this.evaluate(hs_raw26DvJ1, hs_szz26DvIf, hs_count26DvIi, hs_flush26DvIN, hs_release26DvIQ, hs_hzu26DvIl);
    };
    this.hs_hWaitForInput.notEvaluated = true;
    this.hs_hWaitForInput.evaluate = function (hs_h26DvMJ, hs_msecs26DvNc) {
        $hs.modules.GHCziIOziHandleziText.loadDependencies();
        return this.evaluate(hs_h26DvMJ, hs_msecs26DvNc);
    };
    this.hs_memcpy.notEvaluated = true;
    this.hs_memcpy.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziIOziHandleziText.loadDependencies();
        return this.evaluate(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_hPutBuf.notEvaluated = true;
    this.hs_hPutBuf.evaluate = function (hs_h26DvRY, hs_ptr26DvRZ, hs_count26DvS0) {
        $hs.modules.GHCziIOziHandleziText.loadDependencies();
        return this.evaluate(hs_h26DvRY, hs_ptr26DvRZ, hs_count26DvS0);
    };
    this.hs_hPutBufNonBlocking.notEvaluated = true;
    this.hs_hPutBufNonBlocking.evaluate = function (hs_h26DvS7, hs_ptr26DvS8, hs_count26DvS9) {
        $hs.modules.GHCziIOziHandleziText.loadDependencies();
        return this.evaluate(hs_h26DvS7, hs_ptr26DvS8, hs_count26DvS9);
    };
    this.hs_hGetBuf.notEvaluated = true;
    this.hs_hGetBuf.evaluate = function (hs_h26DvVV, hs_ptr26DvWw, hs_count26DvVP) {
        $hs.modules.GHCziIOziHandleziText.loadDependencies();
        return this.evaluate(hs_h26DvVV, hs_ptr26DvWw, hs_count26DvVP);
    };
    this.hs_hGetBufSome.notEvaluated = true;
    this.hs_hGetBufSome.evaluate = function (hs_h26DvZI, hs_ptr26Dw0k, hs_count26DvZC) {
        $hs.modules.GHCziIOziHandleziText.loadDependencies();
        return this.evaluate(hs_h26DvZI, hs_ptr26Dw0k, hs_count26DvZC);
    };
    this.hs_hGetBufNonBlocking.notEvaluated = true;
    this.hs_hGetBufNonBlocking.evaluate = function (hs_h26Dw1m, hs_ptr26Dw1X, hs_count26Dw1g) {
        $hs.modules.GHCziIOziHandleziText.loadDependencies();
        return this.evaluate(hs_h26Dw1m, hs_ptr26Dw1X, hs_count26Dw1g);
    };
    this.hs_hGetChar.notEvaluated = true;
    this.hs_hGetChar.evaluate = function (hs_handle26Dw2n) {
        $hs.modules.GHCziIOziHandleziText.loadDependencies();
        return this.evaluate(hs_handle26Dw2n);
    };
    this.hs_hGetLine.notEvaluated = true;
    this.hs_hGetLine.evaluate = function (hs_h26Dw8f) {
        $hs.modules.GHCziIOziHandleziText.loadDependencies();
        return this.evaluate(hs_h26Dw8f);
    };
    this.hs_hGetContents.notEvaluated = true;
    this.hs_hGetContents.evaluate = function (hs_handle26Dwaw) {
        $hs.modules.GHCziIOziHandleziText.loadDependencies();
        return this.evaluate(hs_handle26Dwaw);
    };
    this.hs_hPutChar.notEvaluated = true;
    this.hs_hPutChar.evaluate = function (hs_handle26Dwbk, hs_c26Dwbf) {
        $hs.modules.GHCziIOziHandleziText.loadDependencies();
        return this.evaluate(hs_handle26Dwbk, hs_c26Dwbf);
    };
    this.hs_hPutStr.notEvaluated = true;
    this.hs_hPutStr.evaluate = function (hs_handle26DwfV, hs_str26DwfW) {
        $hs.modules.GHCziIOziHandleziText.loadDependencies();
        return this.evaluate(hs_handle26DwfV, hs_str26DwfW);
    };
    this.hs_hPutStrLn.notEvaluated = true;
    this.hs_hPutStrLn.evaluate = function (hs_handle26DwfZ, hs_str26Dwg0) {
        $hs.modules.GHCziIOziHandleziText.loadDependencies();
        return this.evaluate(hs_handle26DwfZ, hs_str26Dwg0);
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
    var hs_illegalBufferSizze25uxmH = new $hs.Func(3);
    var hs_commitBuffer25uxm7 = new $hs.Func(6);
    var hs_getSomeCharacters25uxlP = new $hs.Func(2);
    var hs_zdwccall25v7hr = new $hs.Func(4);
    var hs_a25v7hC = new $hs.Func(4);
    var hs_bufWrite25uxmh = new $hs.Func(4);
    var hs_hPutBufzq25uxmf = new $hs.Func(4);
    var hs_copyFromRawBuffer25uxmF = new $hs.Func(4);
    var hs_bufReadEmpty25uxmr = new $hs.Func(5);
    var hs_bufReadNonEmpty25uxmp = new $hs.Func(5);
    var hs_bufReadNBNonEmpty25uxmB = new $hs.Func(5);
    var hs_bufReadNBEmpty25uxmz = new $hs.Func(5);
    var hs_maybeFillReadBuffer25uxlD = new $hs.Func(2);
    var hs_unpack25uxlF = new $hs.Func(4);
    var hs_unpackzunl25uxlH = new $hs.Func(4);
    var hs_hGetLineBufferedLoop25uxlB = new $hs.Func(3);
    var hs_lazzyRead25uxlL = new $hs.Func(1);
    var hs_hPutChars25uxm1 = new $hs.Func(2);
    var hs_writeBlocks25uxm5 = new $hs.Func(6);
    var hs_hPutStrzq25uxlZ = new $hs.Func(3);
    hs_illegalBufferSizze25uxmH.evaluate = function (hs_handle26DvI0, hs_fn26DvI2, hs_szz26DvI5) {
        var hs_sat26Dwg4 = new $hs.Thunk();
        hs_sat26Dwg4.evaluateOnce = function () {
            var hs_sat26Dwg2 = new $hs.Thunk();
            hs_sat26Dwg2.evaluateOnce = function () {
                var hs_sat26Dwg1 = new $hs.Data(1);
                hs_sat26Dwg1.data = [9];
                return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_sat26Dwg1, hs_szz26DvI5, $hs.modules.GHCziTypes.hs_ZMZN);
            };
            var hs_sat26Dwg3 = new $hs.Thunk();
            hs_sat26Dwg3.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("illegal buffer size \x00");
            };
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Dwg3, hs_sat26Dwg2);
        };
        var hs_sat26Dwg5 = new $hs.Data(2);
        hs_sat26Dwg5.data = [hs_handle26DvI0];
        var hs_sat26Dwg6 = new $hs.Data(1);
        hs_sat26Dwg6.data = [hs_sat26Dwg5, $hs.modules.GHCziIOziException.hs_InvalidArgument, hs_fn26DvI2, hs_sat26Dwg4, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing];
        return $hs.modules.GHCziIOziException.hs_ioException.hscall(hs_sat26Dwg6);
    };
    this.hs_commitBufferzq.evaluate = function (hs_raw26DvJ1, hs_szz26DvIf, hs_count26DvIi, hs_flush26DvIN, hs_release26DvIQ, hs_hzu26DvIl) {
        var hs_wild26DvIH = hs_szz26DvIf;
        if (hs_szz26DvIf.notEvaluated) {
            hs_wild26DvIH = hs_szz26DvIf.hscall();
        }
        var hs_wild126DvIK = hs_count26DvIi;
        if (hs_count26DvIi.notEvaluated) {
            hs_wild126DvIK = hs_count26DvIi.hscall();
        }
        var hs_wild226DvJe = hs_hzu26DvIl;
        if (hs_hzu26DvIl.notEvaluated) {
            hs_wild226DvJe = hs_hzu26DvIl.hscall();
        }
        var hs_rb226DvJk = hs_wild226DvJe.data[8];
        var hs_rb326DvIE = hs_wild226DvJe.data[9];
        var hs_a126DvIF = new $hs.Data(1);
        hs_a126DvIF.data = [hs_rb326DvIE];
        var hs_sat26DwgQ = new $hs.Thunk();
        hs_sat26DwgQ.evaluateOnce = function () {
            var hs_thiszubuf26DvJd = new $hs.Thunk();
            hs_thiszubuf26DvJd.evaluateOnce = function () {
                var hs_tpl26Dwgp = hs_raw26DvJ1;
                if (hs_raw26DvJ1.notEvaluated) {
                    hs_tpl26Dwgp = hs_raw26DvJ1.hscall();
                }
                var hs_tpl126DvJ9 = hs_tpl26Dwgp.data[0];
                var hs_tpl226DvJa = hs_tpl26Dwgp.data[1];
                var hs_tpl326Dwgo = hs_wild26DvIH;
                if (hs_wild26DvIH.notEvaluated) {
                    hs_tpl326Dwgo = hs_wild26DvIH.hscall();
                }
                var hs_tpl426DvJb = hs_tpl326Dwgo.data[0];
                var hs_tpl526Dwgn = hs_wild126DvIK;
                if (hs_wild126DvIK.notEvaluated) {
                    hs_tpl526Dwgn = hs_wild126DvIK.hscall();
                }
                var hs_tpl626DvJc = hs_tpl526Dwgn.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_tpl126DvJ9, hs_tpl226DvJa, $hs.modules.GHCziIOziBuffer.hs_WriteBuffer, hs_tpl426DvJb, 0, hs_tpl626DvJc];
                return $res;
            };
            var hs_sat26DwgO = new $hs.Thunk();
            hs_sat26DwgO.evaluateOnce = function () {
                var hs_sat26DwgK = new $hs.Thunk();
                hs_sat26DwgK.evaluateOnce = function () {
                    var hs_sat26Dwgs = new $hs.Thunk();
                    hs_sat26Dwgs.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_thiszubuf26DvJd);
                    };
                    var hs_sat26DwgJ = new $hs.Thunk();
                    hs_sat26DwgJ.evaluateOnce = function () {
                        var hs_sat26DwgH = new $hs.Thunk();
                        hs_sat26DwgH.evaluateOnce = function () {
                            var hs_sat26DwgE = new $hs.Func(1);
                            hs_sat26DwgE.evaluate = function (hs_oldzubuf26DvJo) {
                                var hs_wild326Dwgr = hs_oldzubuf26DvJo;
                                if (hs_oldzubuf26DvJo.notEvaluated) {
                                    hs_wild326Dwgr = hs_oldzubuf26DvJo.hscall();
                                }
                                var hs_rb626DvJw = hs_wild326Dwgr.data[3];
                                var hs_sat26DwgA = new $hs.Thunk();
                                hs_sat26DwgA.evaluateOnce = function () {
                                    var hs_sat26Dwgy = new $hs.Func(1);
                                    hs_sat26Dwgy.evaluate = function (hs_sparezubufs26DvJC) {
                                        var hs_sat26Dwgx = new $hs.Data(2);
                                        hs_sat26Dwgx.data = [hs_raw26DvJ1, hs_sparezubufs26DvJC];
                                        return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126DvIF, hs_sat26Dwgx);
                                    };
                                    var hs_sat26Dwgz = new $hs.Thunk();
                                    hs_sat26Dwgz.evaluateOnce = function () {
                                        return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a126DvIF);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwgz, hs_sat26Dwgy);
                                };
                                var hs_sat26DwgD = new $hs.Thunk();
                                hs_sat26DwgD.evaluateOnce = function () {
                                    var hs_sat26DwgC = new $hs.Thunk();
                                    hs_sat26DwgC.evaluateOnce = function () {
                                        var hs_sat26DwgB = new $hs.Data(1);
                                        hs_sat26DwgB.data = [hs_rb626DvJw];
                                        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_wild26DvIH, hs_sat26DwgB);
                                    };
                                    return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwgC);
                                };
                                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DwgD, hs_sat26DwgA);
                            };
                            var hs_sat26DwgG = new $hs.Thunk();
                            hs_sat26DwgG.evaluateOnce = function () {
                                var hs_sat26DwgF = new $hs.Data(1);
                                hs_sat26DwgF.data = [hs_rb226DvJk];
                                return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_sat26DwgF);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwgG, hs_sat26DwgE);
                        };
                        var hs_sat26DwgI = new $hs.Thunk();
                        hs_sat26DwgI.evaluateOnce = function () {
                            return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_release26DvIQ);
                        };
                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DwgI, hs_sat26DwgH);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwgJ, hs_sat26Dwgs);
                };
                var hs_sat26DwgN = new $hs.Thunk();
                hs_sat26DwgN.evaluateOnce = function () {
                    var hs_sat26DwgL = new $hs.Thunk();
                    hs_sat26DwgL.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziHandleziInternals.hs_flushByteWriteBuffer.hscall(hs_wild226DvJe);
                    };
                    var hs_sat26DwgM = new $hs.Thunk();
                    hs_sat26DwgM.evaluateOnce = function () {
                        return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_flush26DvIN);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DwgM, hs_sat26DwgL);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwgN, hs_sat26DwgK);
            };
            var hs_sat26DwgP = new $hs.Thunk();
            hs_sat26DwgP.evaluateOnce = function () {
                return $hs.modules.GHCziIOziHandleziInternals.hs_writeCharBuffer.hscall(hs_wild226DvJe, hs_thiszubuf26DvJd);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwgP, hs_sat26DwgO);
        };
        var hs_sat26Dwh6 = new $hs.Thunk();
        hs_sat26Dwh6.evaluateOnce = function () {
            var hs_sat26Dwh5 = new $hs.Thunk();
            hs_sat26Dwh5.evaluateOnce = function () {
                var hs_sat26Dwh3 = new $hs.Thunk();
                hs_sat26Dwh3.evaluateOnce = function () {
                    var hs_sat26Dwh1 = new $hs.Thunk();
                    hs_sat26Dwh1.evaluateOnce = function () {
                        var hs_sat26DwgZ = new $hs.Thunk();
                        hs_sat26DwgZ.evaluateOnce = function () {
                            var hs_sat26DwgX = new $hs.Thunk();
                            hs_sat26DwgX.evaluateOnce = function () {
                                var hs_sat26DwgV = new $hs.Thunk();
                                hs_sat26DwgV.evaluateOnce = function () {
                                    var hs_sat26DwgT = new $hs.Thunk();
                                    hs_sat26DwgT.evaluateOnce = function () {
                                        var hs_sat26DwgR = new $hs.Thunk();
                                        hs_sat26DwgR.evaluateOnce = function () {
                                            return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziShow.hs_zdfShowBool, hs_release26DvIQ);
                                        };
                                        var hs_sat26DwgS = new $hs.Thunk();
                                        hs_sat26DwgS.evaluateOnce = function () {
                                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall(", release=\x00");
                                        };
                                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DwgS, hs_sat26DwgR);
                                    };
                                    var hs_sat26DwgU = new $hs.Thunk();
                                    hs_sat26DwgU.evaluateOnce = function () {
                                        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziShow.hs_zdfShowBool, hs_flush26DvIN);
                                    };
                                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DwgU, hs_sat26DwgT);
                                };
                                var hs_sat26DwgW = new $hs.Thunk();
                                hs_sat26DwgW.evaluateOnce = function () {
                                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall(", flush=\x00");
                                };
                                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DwgW, hs_sat26DwgV);
                            };
                            var hs_sat26DwgY = new $hs.Thunk();
                            hs_sat26DwgY.evaluateOnce = function () {
                                return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_wild126DvIK);
                            };
                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DwgY, hs_sat26DwgX);
                        };
                        var hs_sat26Dwh0 = new $hs.Thunk();
                        hs_sat26Dwh0.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall(", count=\x00");
                        };
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Dwh0, hs_sat26DwgZ);
                    };
                    var hs_sat26Dwh2 = new $hs.Thunk();
                    hs_sat26Dwh2.evaluateOnce = function () {
                        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_wild26DvIH);
                    };
                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Dwh2, hs_sat26Dwh1);
                };
                var hs_sat26Dwh4 = new $hs.Thunk();
                hs_sat26Dwh4.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("commitBuffer: sz=\x00");
                };
                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Dwh4, hs_sat26Dwh3);
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_debugIO.hscall(hs_sat26Dwh5);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwh6, hs_sat26DwgQ);
    };
    hs_commitBuffer25uxm7.evaluate = function (hs_hdl26DvK4, hs_raw26DvJT, hs_szz26DvJX, hs_count26DvK0, hs_flush26DvKz, hs_release26DvKC) {
        var hs_raw126DvKN = hs_raw26DvJT;
        if (hs_raw26DvJT.notEvaluated) {
            hs_raw126DvKN = hs_raw26DvJT.hscall();
        }
        var hs_szz126DvKt = hs_szz26DvJX;
        if (hs_szz26DvJX.notEvaluated) {
            hs_szz126DvKt = hs_szz26DvJX.hscall();
        }
        var hs_count126DvKw = hs_count26DvK0;
        if (hs_count26DvK0.notEvaluated) {
            hs_count126DvKw = hs_count26DvK0.hscall();
        }
        var hs_sat26Dwia = new $hs.Func(1);
        hs_sat26Dwia.evaluate = function (hs_hzu26DvK7) {
            var hs_wild26DvKM = hs_hzu26DvK7;
            if (hs_hzu26DvK7.notEvaluated) {
                hs_wild26DvKM = hs_hzu26DvK7.hscall();
            }
            var hs_rb226DvL5 = hs_wild26DvKM.data[8];
            var hs_rb326DvKq = hs_wild26DvKM.data[9];
            var hs_a126DvKr = new $hs.Data(1);
            hs_a126DvKr.data = [hs_rb326DvKq];
            var hs_sat26DwhT = new $hs.Thunk();
            hs_sat26DwhT.evaluateOnce = function () {
                var hs_sat26DwhQ = new $hs.Thunk();
                hs_sat26DwhQ.evaluateOnce = function () {
                    var hs_sat26DwhJ = new $hs.Thunk();
                    hs_sat26DwhJ.evaluateOnce = function () {
                        var hs_sat26Dwhr = new $hs.Thunk();
                        hs_sat26Dwhr.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                        };
                        var hs_sat26DwhI = new $hs.Thunk();
                        hs_sat26DwhI.evaluateOnce = function () {
                            var hs_sat26DwhG = new $hs.Thunk();
                            hs_sat26DwhG.evaluateOnce = function () {
                                var hs_sat26DwhD = new $hs.Func(1);
                                hs_sat26DwhD.evaluate = function (hs_oldzubuf26DvL9) {
                                    var hs_wild126Dwhq = hs_oldzubuf26DvL9;
                                    if (hs_oldzubuf26DvL9.notEvaluated) {
                                        hs_wild126Dwhq = hs_oldzubuf26DvL9.hscall();
                                    }
                                    var hs_rb626DvLh = hs_wild126Dwhq.data[3];
                                    var hs_sat26Dwhz = new $hs.Thunk();
                                    hs_sat26Dwhz.evaluateOnce = function () {
                                        var hs_sat26Dwhx = new $hs.Func(1);
                                        hs_sat26Dwhx.evaluate = function (hs_sparezubufs26DvLn) {
                                            var hs_sat26Dwhw = new $hs.Data(2);
                                            hs_sat26Dwhw.data = [hs_raw126DvKN, hs_sparezubufs26DvLn];
                                            return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126DvKr, hs_sat26Dwhw);
                                        };
                                        var hs_sat26Dwhy = new $hs.Thunk();
                                        hs_sat26Dwhy.evaluateOnce = function () {
                                            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a126DvKr);
                                        };
                                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwhy, hs_sat26Dwhx);
                                    };
                                    var hs_sat26DwhC = new $hs.Thunk();
                                    hs_sat26DwhC.evaluateOnce = function () {
                                        var hs_sat26DwhB = new $hs.Thunk();
                                        hs_sat26DwhB.evaluateOnce = function () {
                                            var hs_sat26DwhA = new $hs.Data(1);
                                            hs_sat26DwhA.data = [hs_rb626DvLh];
                                            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_szz126DvKt, hs_sat26DwhA);
                                        };
                                        return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwhB);
                                    };
                                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DwhC, hs_sat26Dwhz);
                                };
                                var hs_sat26DwhF = new $hs.Thunk();
                                hs_sat26DwhF.evaluateOnce = function () {
                                    var hs_sat26DwhE = new $hs.Data(1);
                                    hs_sat26DwhE.data = [hs_rb226DvL5];
                                    return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_sat26DwhE);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwhF, hs_sat26DwhD);
                            };
                            var hs_sat26DwhH = new $hs.Thunk();
                            hs_sat26DwhH.evaluateOnce = function () {
                                return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_release26DvKC);
                            };
                            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DwhH, hs_sat26DwhG);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwhI, hs_sat26Dwhr);
                    };
                    var hs_sat26DwhM = new $hs.Thunk();
                    hs_sat26DwhM.evaluateOnce = function () {
                        var hs_sat26DwhK = new $hs.Thunk();
                        hs_sat26DwhK.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziHandleziInternals.hs_flushByteWriteBuffer.hscall(hs_wild26DvKM);
                        };
                        var hs_sat26DwhL = new $hs.Thunk();
                        hs_sat26DwhL.evaluateOnce = function () {
                            return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_flush26DvKz);
                        };
                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DwhL, hs_sat26DwhK);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwhM, hs_sat26DwhJ);
                };
                var hs_sat26DwhS = new $hs.Thunk();
                hs_sat26DwhS.evaluateOnce = function () {
                    var hs_sat26DwhR = new $hs.Thunk();
                    hs_sat26DwhR.evaluateOnce = function () {
                        var hs_tpl26DwhP = hs_raw126DvKN;
                        if (hs_raw126DvKN.notEvaluated) {
                            hs_tpl26DwhP = hs_raw126DvKN.hscall();
                        }
                        var hs_tpl126DvKV = hs_tpl26DwhP.data[0];
                        var hs_tpl226DvKW = hs_tpl26DwhP.data[1];
                        var hs_tpl326DwhO = hs_szz126DvKt;
                        if (hs_szz126DvKt.notEvaluated) {
                            hs_tpl326DwhO = hs_szz126DvKt.hscall();
                        }
                        var hs_tpl426DvKX = hs_tpl326DwhO.data[0];
                        var hs_tpl526DwhN = hs_count126DvKw;
                        if (hs_count126DvKw.notEvaluated) {
                            hs_tpl526DwhN = hs_count126DvKw.hscall();
                        }
                        var hs_tpl626DvKY = hs_tpl526DwhN.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_tpl126DvKV, hs_tpl226DvKW, $hs.modules.GHCziIOziBuffer.hs_WriteBuffer, hs_tpl426DvKX, 0, hs_tpl626DvKY];
                        return $res;
                    };
                    return $hs.modules.GHCziIOziHandleziInternals.hs_writeCharBuffer.hscall(hs_wild26DvKM, hs_sat26DwhR);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwhS, hs_sat26DwhQ);
            };
            var hs_sat26Dwi9 = new $hs.Thunk();
            hs_sat26Dwi9.evaluateOnce = function () {
                var hs_sat26Dwi8 = new $hs.Thunk();
                hs_sat26Dwi8.evaluateOnce = function () {
                    var hs_sat26Dwi6 = new $hs.Thunk();
                    hs_sat26Dwi6.evaluateOnce = function () {
                        var hs_sat26Dwi4 = new $hs.Thunk();
                        hs_sat26Dwi4.evaluateOnce = function () {
                            var hs_sat26Dwi2 = new $hs.Thunk();
                            hs_sat26Dwi2.evaluateOnce = function () {
                                var hs_sat26Dwi0 = new $hs.Thunk();
                                hs_sat26Dwi0.evaluateOnce = function () {
                                    var hs_sat26DwhY = new $hs.Thunk();
                                    hs_sat26DwhY.evaluateOnce = function () {
                                        var hs_sat26DwhW = new $hs.Thunk();
                                        hs_sat26DwhW.evaluateOnce = function () {
                                            var hs_sat26DwhU = new $hs.Thunk();
                                            hs_sat26DwhU.evaluateOnce = function () {
                                                return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziShow.hs_zdfShowBool, hs_release26DvKC);
                                            };
                                            var hs_sat26DwhV = new $hs.Thunk();
                                            hs_sat26DwhV.evaluateOnce = function () {
                                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall(", release=\x00");
                                            };
                                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DwhV, hs_sat26DwhU);
                                        };
                                        var hs_sat26DwhX = new $hs.Thunk();
                                        hs_sat26DwhX.evaluateOnce = function () {
                                            return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziShow.hs_zdfShowBool, hs_flush26DvKz);
                                        };
                                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DwhX, hs_sat26DwhW);
                                    };
                                    var hs_sat26DwhZ = new $hs.Thunk();
                                    hs_sat26DwhZ.evaluateOnce = function () {
                                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall(", flush=\x00");
                                    };
                                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DwhZ, hs_sat26DwhY);
                                };
                                var hs_sat26Dwi1 = new $hs.Thunk();
                                hs_sat26Dwi1.evaluateOnce = function () {
                                    return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_count126DvKw);
                                };
                                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Dwi1, hs_sat26Dwi0);
                            };
                            var hs_sat26Dwi3 = new $hs.Thunk();
                            hs_sat26Dwi3.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall(", count=\x00");
                            };
                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Dwi3, hs_sat26Dwi2);
                        };
                        var hs_sat26Dwi5 = new $hs.Thunk();
                        hs_sat26Dwi5.evaluateOnce = function () {
                            return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_szz126DvKt);
                        };
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Dwi5, hs_sat26Dwi4);
                    };
                    var hs_sat26Dwi7 = new $hs.Thunk();
                    hs_sat26Dwi7.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("commitBuffer: sz=\x00");
                    };
                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Dwi7, hs_sat26Dwi6);
                };
                return $hs.modules.GHCziIOziHandleziInternals.hs_debugIO.hscall(hs_sat26Dwi8);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwi9, hs_sat26DwhT);
        };
        var hs_sat26Dwic = new $hs.Thunk();
        hs_sat26Dwic.evaluateOnce = function () {
            var hs_sat26Dwib = new $hs.Thunk();
            hs_sat26Dwib.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("commitBuffer\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_wantWritableHandle.hscall(hs_sat26Dwib, hs_hdl26DvK4);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dwic, hs_sat26Dwia);
    };
    hs_getSomeCharacters25uxlP.evaluate = function (hs_handlezu26DvLB, hs_buf26DvLT) {
        var hs_wild26DvMa = hs_handlezu26DvLB;
        if (hs_handlezu26DvLB.notEvaluated) {
            hs_wild26DvMa = hs_handlezu26DvLB.hscall();
        }
        var hs_ds626DvMb = hs_wild26DvMa.data[13];
        var hs_wild126DvM5 = hs_buf26DvLT;
        if (hs_buf26DvLT.notEvaluated) {
            hs_wild126DvM5 = hs_buf26DvLT.hscall();
        }
        var hs_rb426DvM2 = hs_wild126DvM5.data[0];
        var hs_rb526DvM3 = hs_wild126DvM5.data[1];
        var hs_rb726DvMd = hs_wild126DvM5.data[4];
        var hs_bufRaw26DvM4 = new $hs.Data(1);
        hs_bufRaw26DvM4.data = [hs_rb426DvM2, hs_rb526DvM3];
        var hs_wild226Dwiw = $hs.modules.GHCziIOziBuffer.hs_bufferElems.hscall(hs_wild126DvM5);
        var hs_ds1026DvM8 = hs_wild226Dwiw.data[0];
        var hs_ds1126Dwiv = hs_ds1026DvM8;
        if (hs_ds1026DvM8.notEvaluated) {
            hs_ds1126Dwiv = hs_ds1026DvM8.hscall();
        }
        switch (hs_ds1126Dwiv) {
        case 0:
            return $hs.modules.GHCziIOziHandleziInternals.hs_readTextDevice.hscall(hs_wild26DvMa, hs_wild126DvM5);
        case 1:
            var hs_wild326Dwix = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfEqNewline, hs_ds626DvMb, $hs.modules.GHCziIOziHandleziTypes.hs_CRLF);
            switch (hs_wild326Dwix.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_wild126DvM5);
            case 2:
                var hs_sat26DwiL = new $hs.Func(1);
                hs_sat26DwiL.evaluate = function (hs_ds1226DvMh) {
                    var hs_wild426Dwiy = hs_ds1226DvMh;
                    if (hs_ds1226DvMh.notEvaluated) {
                        hs_wild426Dwiy = hs_ds1226DvMh.hscall();
                    }
                    var hs_c26DvMl = hs_wild426Dwiy.data[0];
                    var hs_sat26DwiB = new $hs.Data(1);
                    hs_sat26DwiB.data = ["\r"];
                    var hs_wild526DwiA = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c26DvMl, hs_sat26DwiB);
                    switch (hs_wild526DwiA.tag) {
                    case 1:
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_wild126DvM5);
                    case 2:
                        var hs_sat26DwiH = new $hs.Func(1);
                        hs_sat26DwiH.evaluate = function (hs_ds1426DwiC) {
                            var hs_sat26DwiG = new $hs.Thunk();
                            hs_sat26DwiG.evaluateOnce = function () {
                                var hs_wild626DwiD = hs_wild126DvM5;
                                if (hs_wild126DvM5.notEvaluated) {
                                    hs_wild626DwiD = hs_wild126DvM5.hscall();
                                }
                                var hs_rb926DvMz = hs_wild626DwiD.data[0];
                                var hs_rb1026DvMA = hs_wild626DwiD.data[1];
                                var hs_ds1526DvMB = hs_wild626DwiD.data[2];
                                var hs_rb1126DvMC = hs_wild626DwiD.data[3];
                                var $res = new $hs.Data(1);
                                $res.data = [hs_rb926DvMz, hs_rb1026DvMA, hs_ds1526DvMB, hs_rb1126DvMC, 0, 1];
                                return $res;
                            };
                            return $hs.modules.GHCziIOziHandleziInternals.hs_readTextDevice.hscall(hs_wild26DvMa, hs_sat26DwiG);
                        };
                        var hs_sat26DwiK = new $hs.Thunk();
                        hs_sat26DwiK.evaluateOnce = function () {
                            var hs_sat26DwiI = new $hs.Data(1);
                            hs_sat26DwiI.data = ["\r"];
                            var hs_sat26DwiJ = new $hs.Data(1);
                            hs_sat26DwiJ.data = [0];
                            return $hs.modules.GHCziIOziBuffer.hs_writeCharBuf.hscall(hs_bufRaw26DvM4, hs_sat26DwiJ, hs_sat26DwiI);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwiK, hs_sat26DwiH);
                    }
                };
                var hs_sat26DwiN = new $hs.Thunk();
                hs_sat26DwiN.evaluateOnce = function () {
                    var hs_sat26DwiM = new $hs.Data(1);
                    hs_sat26DwiM.data = [hs_rb726DvMd];
                    return $hs.modules.GHCziIOziBuffer.hs_readCharBuf.hscall(hs_bufRaw26DvM4, hs_sat26DwiM);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwiN, hs_sat26DwiL);
            }
        default:
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_wild126DvM5);
        }
    };
    this.hs_hWaitForInput.evaluate = function (hs_h26DvMJ, hs_msecs26DvNc) {
        var hs_sat26Dwjn = new $hs.Func(1);
        hs_sat26Dwjn.evaluate = function (hs_handlezu26DvMM) {
            var hs_wild26DvNf = hs_handlezu26DvMM;
            if (hs_handlezu26DvMM.notEvaluated) {
                hs_wild26DvNf = hs_handlezu26DvMM.hscall();
            }
            var hs_zddIODevice26DvNm = hs_wild26DvNf.data[0];
            var hs_ds26DvNn = hs_wild26DvNf.data[3];
            var hs_rb226DvN5 = hs_wild26DvNf.data[8];
            var hs_a126DvN6 = new $hs.Data(1);
            hs_a126DvN6.data = [hs_rb226DvN5];
            var hs_sat26Dwjl = new $hs.Func(1);
            hs_sat26Dwjl.evaluate = function (hs_cbuf26DvN9) {
                var hs_sat26Dwj2 = new $hs.Thunk();
                hs_sat26Dwj2.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziBuffer.hs_isEmptyBuffer.hscall(hs_cbuf26DvN9);
                };
                var hs_wild126Dwj1 = $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26Dwj2);
                switch (hs_wild126Dwj1.tag) {
                case 1:
                    var hs_sat26Dwj4 = new $hs.Data(1);
                    hs_sat26Dwj4.data = [0];
                    var hs_wild226Dwj3 = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_msecs26DvNc, hs_sat26Dwj4);
                    switch (hs_wild226Dwj3.tag) {
                    case 1:
                        var hs_sat26Dwjf = new $hs.Func(1);
                        hs_sat26Dwjf.evaluate = function (hs_cbufzq26DvNi) {
                            var hs_sat26Dwjd = new $hs.Thunk();
                            hs_sat26Dwjd.evaluateOnce = function () {
                                var hs_sat26Dwj7 = new $hs.Thunk();
                                hs_sat26Dwj7.evaluateOnce = function () {
                                    return $hs.modules.GHCziIOziBuffer.hs_isEmptyBuffer.hscall(hs_cbufzq26DvNi);
                                };
                                var hs_wild326Dwj6 = $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26Dwj7);
                                switch (hs_wild326Dwj6.tag) {
                                case 1:
                                    var hs_sat26Dwjb = new $hs.Func(1);
                                    hs_sat26Dwjb.evaluate = function (hs_r26DvNq) {
                                        var hs_wild426Dwj5 = hs_r26DvNq;
                                        if (hs_r26DvNq.notEvaluated) {
                                            hs_wild426Dwj5 = hs_r26DvNq.hscall();
                                        }
                                        switch (hs_wild426Dwj5.tag) {
                                        case 1:
                                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziBool.hs_False);
                                        case 2:
                                            var hs_sat26Dwj9 = new $hs.Func(1);
                                            hs_sat26Dwj9.evaluate = function (hs_ds926Dwj8) {
                                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziBool.hs_True);
                                            };
                                            var hs_sat26Dwja = new $hs.Thunk();
                                            hs_sat26Dwja.evaluateOnce = function () {
                                                return $hs.modules.GHCziIOziHandleziInternals.hs_hLookAheadzu.hscall(hs_wild26DvNf);
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwja, hs_sat26Dwj9);
                                        }
                                    };
                                    var hs_sat26Dwjc = new $hs.Thunk();
                                    hs_sat26Dwjc.evaluateOnce = function () {
                                        return $hs.modules.GHCziIOziDevice.hs_ready.hscall(hs_zddIODevice26DvNm, hs_ds26DvNn, $hs.modules.GHCziBool.hs_False, hs_msecs26DvNc);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwjc, hs_sat26Dwjb);
                                case 2:
                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziBool.hs_True);
                                }
                            };
                            var hs_sat26Dwje = new $hs.Thunk();
                            hs_sat26Dwje.evaluateOnce = function () {
                                return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126DvN6, hs_cbufzq26DvNi);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwje, hs_sat26Dwjd);
                        };
                        var hs_sat26Dwjg = new $hs.Thunk();
                        hs_sat26Dwjg.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziHandleziInternals.hs_decodeByteBuf.hscall(hs_wild26DvNf, hs_cbuf26DvN9);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwjg, hs_sat26Dwjf);
                    case 2:
                        var hs_sat26Dwjj = new $hs.Func(1);
                        hs_sat26Dwjj.evaluate = function (hs_cbufzq26DvNA) {
                            var hs_sat26Dwjh = new $hs.Thunk();
                            hs_sat26Dwjh.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziBool.hs_True);
                            };
                            var hs_sat26Dwji = new $hs.Thunk();
                            hs_sat26Dwji.evaluateOnce = function () {
                                return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126DvN6, hs_cbufzq26DvNA);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwji, hs_sat26Dwjh);
                        };
                        var hs_sat26Dwjk = new $hs.Thunk();
                        hs_sat26Dwjk.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziHandleziInternals.hs_readTextDevice.hscall(hs_wild26DvNf, hs_cbuf26DvN9);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwjk, hs_sat26Dwjj);
                    }
                case 2:
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziBool.hs_True);
                }
            };
            var hs_sat26Dwjm = new $hs.Thunk();
            hs_sat26Dwjm.evaluateOnce = function () {
                return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a126DvN6);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwjm, hs_sat26Dwjl);
        };
        var hs_sat26Dwjp = new $hs.Thunk();
        hs_sat26Dwjp.evaluateOnce = function () {
            var hs_sat26Dwjo = new $hs.Thunk();
            hs_sat26Dwjo.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hWaitForInput\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_wantReadableHandlezu.hscall(hs_sat26Dwjo, hs_h26DvMJ);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dwjp, hs_sat26Dwjn);
    };
    hs_zdwccall25v7hr.evaluate = function (hs_ds26DvNM, hs_ds126DvNN, hs_ds226DvNO, hs_eta1cW6l3) {
        var hs_sat26Dwjq = new $hs.Func(1);
        hs_sat26Dwjq.evaluate = function (hs_eta1cW6l3) {
            return [hs_eta1cW6l3, memcpy(hs_ds26DvNM, hs_ds126DvNN, hs_ds226DvNO)];
        };
        return hs_sat26Dwjq.hscall(hs_eta1cW6l3);
    };
    hs_a25v7hC.evaluate = function (hs_ds26DvNX, hs_ds126DvO0, hs_ds226DvO3, hs_eta26DvOa) {
        var hs_ds326Dwju = hs_ds26DvNX;
        if (hs_ds26DvNX.notEvaluated) {
            hs_ds326Dwju = hs_ds26DvNX.hscall();
        }
        var hs_ds426DvO7 = hs_ds326Dwju.data[0];
        var hs_ds526Dwjt = hs_ds126DvO0;
        if (hs_ds126DvO0.notEvaluated) {
            hs_ds526Dwjt = hs_ds126DvO0.hscall();
        }
        var hs_ds626DvO8 = hs_ds526Dwjt.data[0];
        var hs_ds726Dwjs = hs_ds226DvO3;
        if (hs_ds226DvO3.notEvaluated) {
            hs_ds726Dwjs = hs_ds226DvO3.hscall();
        }
        var hs_ds826DvO9 = hs_ds726Dwjs.data[0];
        var hs_wild26Dwjr = [hs_eta26DvOa, memcpy(hs_ds426DvO7, hs_ds626DvO8, hs_ds826DvO9)];
        var hs_ds926DvOf = hs_wild26Dwjr[0];
        var hs_ds1026DvOg = hs_wild26Dwjr[1];
        var hs_sat26Dwjv = new $hs.Data(1);
        hs_sat26Dwjv.data = [hs_ds1026DvOg];
        return [hs_ds926DvOf, hs_sat26Dwjv];
    };
    this.hs_memcpy.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a25v7hC.hscall(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_bufWrite25uxmh.evaluate = function (hs_hzu26DvOm, hs_ptr26DvPF, hs_count26DvOI, hs_canzublock26DvPf) {
        var hs_wild26DvPh = hs_hzu26DvOm;
        if (hs_hzu26DvOm.notEvaluated) {
            hs_wild26DvPh = hs_hzu26DvOm.hscall();
        }
        var hs_zddBufferedIO26DvP7 = hs_wild26DvPh.data[1];
        var hs_ds26DvP8 = hs_wild26DvPh.data[3];
        var hs_rb26DvOF = hs_wild26DvPh.data[5];
        var hs_a126DvOG = new $hs.Data(1);
        hs_a126DvOG.data = [hs_rb26DvOF];
        var hs_sat26Dwl1 = new $hs.Thunk();
        hs_sat26Dwl1.evaluateOnce = function () {
            var hs_sat26DwkX = new $hs.Func(1);
            hs_sat26DwkX.evaluate = function (hs_oldzubuf26DvOP) {
                var hs_wild126DvP9 = hs_oldzubuf26DvOP;
                if (hs_oldzubuf26DvOP.notEvaluated) {
                    hs_wild126DvP9 = hs_oldzubuf26DvOP.hscall();
                }
                var hs_rb426DvQe = hs_wild126DvP9.data[0];
                var hs_rb526DvQf = hs_wild126DvP9.data[1];
                var hs_rb626DvP1 = hs_wild126DvP9.data[3];
                var hs_rb826DvOY = hs_wild126DvP9.data[5];
                var hs_w26DvOZ = new $hs.Data(1);
                hs_w26DvOZ.data = [hs_rb826DvOY];
                var hs_sizze26DvP2 = new $hs.Data(1);
                hs_sizze26DvP2.data = [hs_rb626DvP1];
                var hs_sat26DwjS = new $hs.Thunk();
                hs_sat26DwjS.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sizze26DvP2, hs_w26DvOZ);
                };
                var hs_wild226DwjR = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_sat26DwjS, hs_count26DvOI);
                switch (hs_wild226DwjR.tag) {
                case 1:
                    var hs_sat26Dwkv = new $hs.Thunk();
                    hs_sat26Dwkv.evaluateOnce = function () {
                        var hs_sat26Dwkt = new $hs.Func(1);
                        hs_sat26Dwkt.evaluate = function (hs_oldzubufzq26DvPc) {
                            var hs_sat26Dwkr = new $hs.Thunk();
                            hs_sat26Dwkr.evaluateOnce = function () {
                                var hs_wild326DwjQ = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_count26DvOI, hs_sizze26DvP2);
                                switch (hs_wild326DwjQ.tag) {
                                case 1:
                                    var hs_wild426DwjP = hs_canzublock26DvPf;
                                    if (hs_canzublock26DvPf.notEvaluated) {
                                        hs_wild426DwjP = hs_canzublock26DvPf.hscall();
                                    }
                                    switch (hs_wild426DwjP.tag) {
                                    case 1:
                                        var hs_wild526DwjO = hs_wild26DvPh;
                                        if (hs_wild26DvPh.notEvaluated) {
                                            hs_wild526DwjO = hs_wild26DvPh.hscall();
                                        }
                                        var hs_zddTypeable126DvPz = hs_wild526DwjO.data[2];
                                        var hs_ds1026DvPA = hs_wild526DwjO.data[3];
                                        var hs_wild626DwjM = $hs.modules.DataziTypeable.hs_cast.hscall(hs_zddTypeable126DvPz, $hs.modules.GHCziIOziFD.hs_zdfTypeableFD, hs_ds1026DvPA);
                                        switch (hs_wild626DwjM.tag) {
                                        case 1:
                                            var hs_sat26DwjL = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Todo: hPutBuf\x00");
                                            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DwjL);
                                        case 2:
                                            var hs_fd26DvPE = hs_wild626DwjM.data[0];
                                            var hs_sat26Dwk6 = new $hs.Thunk();
                                            hs_sat26Dwk6.evaluateOnce = function () {
                                                return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_ptr26DvPF);
                                            };
                                            return $hs.modules.GHCziIOziDevice.hs_writeNonBlocking.hscall($hs.modules.GHCziIOziFD.hs_zdfRawIOFD, hs_fd26DvPE, hs_sat26Dwk6, hs_count26DvOI);
                                        }
                                    case 2:
                                        var hs_sat26Dwkb = new $hs.Thunk();
                                        hs_sat26Dwkb.evaluateOnce = function () {
                                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_count26DvOI);
                                        };
                                        var hs_sat26Dwkq = new $hs.Thunk();
                                        hs_sat26Dwkq.evaluateOnce = function () {
                                            var hs_wild526Dwka = hs_wild26DvPh;
                                            if (hs_wild26DvPh.notEvaluated) {
                                                hs_wild526Dwka = hs_wild26DvPh.hscall();
                                            }
                                            var hs_zddTypeable126DvPY = hs_wild526Dwka.data[2];
                                            var hs_ds1026DvPZ = hs_wild526Dwka.data[3];
                                            var hs_wild626Dwk8 = $hs.modules.DataziTypeable.hs_cast.hscall(hs_zddTypeable126DvPY, $hs.modules.GHCziIOziFD.hs_zdfTypeableFD, hs_ds1026DvPZ);
                                            switch (hs_wild626Dwk8.tag) {
                                            case 1:
                                                var hs_sat26Dwk7 = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Todo: hPutBuf\x00");
                                                return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26Dwk7);
                                            case 2:
                                                var hs_fd26DvQ3 = hs_wild626Dwk8.data[0];
                                                var hs_sat26Dwkp = new $hs.Thunk();
                                                hs_sat26Dwkp.evaluateOnce = function () {
                                                    return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_ptr26DvPF);
                                                };
                                                return $hs.modules.GHCziIOziDevice.hs_write.hscall($hs.modules.GHCziIOziFD.hs_zdfRawIOFD, hs_fd26DvQ3, hs_sat26Dwkp, hs_count26DvOI);
                                            }
                                        };
                                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwkq, hs_sat26Dwkb);
                                    }
                                case 2:
                                    return hs_bufWrite25uxmh.hscall(hs_wild26DvPh, hs_ptr26DvPF, hs_count26DvOI, hs_canzublock26DvPf);
                                }
                            };
                            var hs_sat26Dwks = new $hs.Thunk();
                            hs_sat26Dwks.evaluateOnce = function () {
                                return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126DvOG, hs_oldzubufzq26DvPc);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwks, hs_sat26Dwkr);
                        };
                        var hs_sat26Dwku = new $hs.Thunk();
                        hs_sat26Dwku.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziBufferedIO.hs_flushWriteBuffer.hscall(hs_zddBufferedIO26DvP7, hs_ds26DvP8, hs_wild126DvP9);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwku, hs_sat26Dwkt);
                    };
                    var hs_sat26Dwkx = new $hs.Thunk();
                    hs_sat26Dwkx.evaluateOnce = function () {
                        var hs_sat26Dwkw = new $hs.Thunk();
                        hs_sat26Dwkw.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hPutBuf: flushing first\x00");
                        };
                        return $hs.modules.GHCziIOziHandleziInternals.hs_debugIO.hscall(hs_sat26Dwkw);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwkx, hs_sat26Dwkv);
                case 2:
                    var hs_sat26DwkS = new $hs.Thunk();
                    hs_sat26DwkS.evaluateOnce = function () {
                        var hs_sat26DwkF = new $hs.Thunk();
                        hs_sat26DwkF.evaluateOnce = function () {
                            var hs_sat26DwkA = new $hs.Thunk();
                            hs_sat26DwkA.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_count26DvOI);
                            };
                            var hs_sat26DwkD = new $hs.Thunk();
                            hs_sat26DwkD.evaluateOnce = function () {
                                var hs_sat26DwkC = new $hs.Thunk();
                                hs_sat26DwkC.evaluateOnce = function () {
                                    var hs_wild326Dwkz = hs_wild126DvP9;
                                    if (hs_wild126DvP9.notEvaluated) {
                                        hs_wild326Dwkz = hs_wild126DvP9.hscall();
                                    }
                                    var hs_rb926DvQS = hs_wild326Dwkz.data[0];
                                    var hs_rb1026DvQT = hs_wild326Dwkz.data[1];
                                    var hs_ds1026DvQU = hs_wild326Dwkz.data[2];
                                    var hs_rb1126DvQV = hs_wild326Dwkz.data[3];
                                    var hs_rb1226DvQW = hs_wild326Dwkz.data[4];
                                    var hs_tpl26Dwky = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_w26DvOZ, hs_count26DvOI);
                                    var hs_tpl126DvQX = hs_tpl26Dwky.data[0];
                                    var $res = new $hs.Data(1);
                                    $res.data = [hs_rb926DvQS, hs_rb1026DvQT, hs_ds1026DvQU, hs_rb1126DvQV, hs_rb1226DvQW, hs_tpl126DvQX];
                                    return $res;
                                };
                                return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126DvOG, hs_sat26DwkC);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwkD, hs_sat26DwkA);
                        };
                        var hs_sat26DwkR = new $hs.Thunk();
                        hs_sat26DwkR.evaluateOnce = function () {
                            var hs_sat26DwkO = new $hs.Func(1);
                            hs_sat26DwkO.evaluate = function (hs_praw26DvQj) {
                                var hs_sat26DwkK = new $hs.Func(1);
                                hs_sat26DwkK.evaluate = function (hs_ds1026DwkE) {
                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                                };
                                var hs_sat26DwkN = new $hs.Thunk();
                                hs_sat26DwkN.evaluateOnce = function () {
                                    var hs_ds1026DwkJ = $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_praw26DvQj, hs_w26DvOZ);
                                    var hs_ds1126DvQs = hs_ds1026DwkJ.data[0];
                                    var hs_ds1226DwkI = hs_ptr26DvPF;
                                    if (hs_ptr26DvPF.notEvaluated) {
                                        hs_ds1226DwkI = hs_ptr26DvPF.hscall();
                                    }
                                    var hs_ds1326DvQt = hs_ds1226DwkI.data[0];
                                    var hs_ds1426DwkH = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_count26DvOI);
                                    var hs_ds1526DvQu = hs_ds1426DwkH.data[0];
                                    var hs_sat26DwkM = new $hs.Func(1);
                                    hs_sat26DwkM.evaluate = function (hs_ds1626DvQv) {
                                        var hs_wild326DwkG = [hs_ds1626DvQv, memcpy(hs_ds1126DvQs, hs_ds1326DvQt, hs_ds1526DvQu)];
                                        var hs_ds1726DvQA = hs_wild326DwkG[0];
                                        var hs_ds1826DvQB = hs_wild326DwkG[1];
                                        var hs_sat26DwkL = new $hs.Data(1);
                                        hs_sat26DwkL.data = [hs_ds1826DvQB];
                                        return [hs_ds1726DvQA, hs_sat26DwkL];
                                    };
                                    if (hs_sat26DwkM.notEvaluated) {
                                        return hs_sat26DwkM.hscall();
                                    } else {
                                        return hs_sat26DwkM;
                                    }
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwkN, hs_sat26DwkK);
                            };
                            var hs_sat26DwkQ = new $hs.Thunk();
                            hs_sat26DwkQ.evaluateOnce = function () {
                                var hs_sat26DwkP = new $hs.Data(1);
                                hs_sat26DwkP.data = [hs_rb426DvQe, hs_rb526DvQf];
                                return $hs.modules.GHCziIOziBuffer.hs_withRawBuffer.hscall(hs_sat26DwkP);
                            };
                            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DwkQ, hs_sat26DwkO);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwkR, hs_sat26DwkF);
                    };
                    var hs_sat26DwkW = new $hs.Thunk();
                    hs_sat26DwkW.evaluateOnce = function () {
                        var hs_sat26DwkV = new $hs.Thunk();
                        hs_sat26DwkV.evaluateOnce = function () {
                            var hs_sat26DwkT = new $hs.Thunk();
                            hs_sat26DwkT.evaluateOnce = function () {
                                return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_w26DvOZ);
                            };
                            var hs_sat26DwkU = new $hs.Thunk();
                            hs_sat26DwkU.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hPutBuf: copying to buffer, w=\x00");
                            };
                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DwkU, hs_sat26DwkT);
                        };
                        return $hs.modules.GHCziIOziHandleziInternals.hs_debugIO.hscall(hs_sat26DwkV);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwkW, hs_sat26DwkS);
                }
            };
            var hs_sat26DwkY = new $hs.Thunk();
            hs_sat26DwkY.evaluateOnce = function () {
                return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a126DvOG);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwkY, hs_sat26DwkX);
        };
        var hs_sat26Dwl2 = new $hs.Func(1);
        hs_sat26Dwl2.evaluate = function (hs_tpl26DvOL) {
            var hs_tpl126Dwl0 = hs_count26DvOI;
            if (hs_count26DvOI.notEvaluated) {
                hs_tpl126Dwl0 = hs_count26DvOI.hscall();
            }
            if (hs_tpl26DvOL.notEvaluated) {
                return hs_tpl26DvOL.hscall();
            } else {
                return hs_tpl26DvOL;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dwl2, hs_sat26Dwl1);
    };
    hs_hPutBufzq25uxmf.evaluate = function (hs_handle26DvRf, hs_ptr26DvRF, hs_count26DvR9, hs_canzublock26DvRH) {
        var hs_sat26Dwl4 = new $hs.Data(1);
        hs_sat26Dwl4.data = [0];
        var hs_wild26Dwl3 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_count26DvR9, hs_sat26Dwl4);
        switch (hs_wild26Dwl3.tag) {
        case 1:
            var hs_sat26Dwl7 = new $hs.Data(1);
            hs_sat26Dwl7.data = [0];
            var hs_wild126Dwl6 = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_count26DvR9, hs_sat26Dwl7);
            switch (hs_wild126Dwl6.tag) {
            case 1:
                var hs_sat26Dwly = new $hs.Func(1);
                hs_sat26Dwly.evaluate = function (hs_hzu26DvRi) {
                    var hs_wild226DvRE = hs_hzu26DvRi;
                    if (hs_hzu26DvRi.notEvaluated) {
                        hs_wild226DvRE = hs_hzu26DvRi.hscall();
                    }
                    var hs_ds226DvRK = hs_wild226DvRE.data[6];
                    var hs_sat26Dwlt = new $hs.Thunk();
                    hs_sat26Dwlt.evaluateOnce = function () {
                        var hs_sat26Dwlq = new $hs.Func(1);
                        hs_sat26Dwlq.evaluate = function (hs_r26DvRO) {
                            var hs_sat26Dwln = new $hs.Thunk();
                            hs_sat26Dwln.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_r26DvRO);
                            };
                            var hs_sat26Dwlp = new $hs.Thunk();
                            hs_sat26Dwlp.evaluateOnce = function () {
                                var hs_wild326Dwlm = hs_ds226DvRK;
                                if (hs_ds226DvRK.notEvaluated) {
                                    hs_wild326Dwlm = hs_ds226DvRK.hscall();
                                }
                                switch (hs_wild326Dwlm.tag) {
                                case 3:
                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                                default:
                                    return $hs.modules.GHCziIOziHandleziInternals.hs_flushWriteBuffer.hscall(hs_wild226DvRE);
                                }
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwlp, hs_sat26Dwln);
                        };
                        var hs_sat26Dwls = new $hs.Thunk();
                        hs_sat26Dwls.evaluateOnce = function () {
                            var hs_sat26Dwlr = new $hs.Thunk();
                            hs_sat26Dwlr.evaluateOnce = function () {
                                return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_ptr26DvRF);
                            };
                            return hs_bufWrite25uxmh.hscall(hs_wild226DvRE, hs_sat26Dwlr, hs_count26DvR9, hs_canzublock26DvRH);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwls, hs_sat26Dwlq);
                    };
                    var hs_sat26Dwlx = new $hs.Thunk();
                    hs_sat26Dwlx.evaluateOnce = function () {
                        var hs_sat26Dwlw = new $hs.Thunk();
                        hs_sat26Dwlw.evaluateOnce = function () {
                            var hs_sat26Dwlu = new $hs.Thunk();
                            hs_sat26Dwlu.evaluateOnce = function () {
                                return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_count26DvR9);
                            };
                            var hs_sat26Dwlv = new $hs.Thunk();
                            hs_sat26Dwlv.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hPutBuf count=\x00");
                            };
                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Dwlv, hs_sat26Dwlu);
                        };
                        return $hs.modules.GHCziIOziHandleziInternals.hs_debugIO.hscall(hs_sat26Dwlw);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwlx, hs_sat26Dwlt);
                };
                var hs_sat26DwlA = new $hs.Thunk();
                hs_sat26DwlA.evaluateOnce = function () {
                    var hs_sat26Dwlz = new $hs.Thunk();
                    hs_sat26Dwlz.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hPutBuf\x00");
                    };
                    return $hs.modules.GHCziIOziHandleziInternals.hs_wantWritableHandle.hscall(hs_sat26Dwlz, hs_handle26DvRf);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DwlA, hs_sat26Dwly);
            case 2:
                var hs_sat26DwlB = new $hs.Thunk();
                hs_sat26DwlB.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hPutBuf\x00");
                };
                return hs_illegalBufferSizze25uxmH.hscall(hs_handle26DvRf, hs_sat26DwlB, hs_count26DvR9);
            }
        case 2:
            var hs_sat26DwlC = new $hs.Data(1);
            hs_sat26DwlC.data = [0];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwlC);
        }
    };
    this.hs_hPutBuf.evaluate = function (hs_h26DvRY, hs_ptr26DvRZ, hs_count26DvS0) {
        var hs_sat26DwlE = new $hs.Func(1);
        hs_sat26DwlE.evaluate = function (hs_ds26DwlD) {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        };
        var hs_sat26DwlF = new $hs.Thunk();
        hs_sat26DwlF.evaluateOnce = function () {
            return hs_hPutBufzq25uxmf.hscall(hs_h26DvRY, hs_ptr26DvRZ, hs_count26DvS0, $hs.modules.GHCziBool.hs_True);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwlF, hs_sat26DwlE);
    };
    this.hs_hPutBufNonBlocking.evaluate = function (hs_h26DvS7, hs_ptr26DvS8, hs_count26DvS9) {
        return hs_hPutBufzq25uxmf.hscall(hs_h26DvS7, hs_ptr26DvS8, hs_count26DvS9, $hs.modules.GHCziBool.hs_False);
    };
    hs_copyFromRawBuffer25uxmF.evaluate = function (hs_ptr26DvSh, hs_raw26DvSe, hs_off26DvSl, hs_bytes26DvSo) {
        var hs_sat26DwlP = new $hs.Func(1);
        hs_sat26DwlP.evaluate = function (hs_praw26DvSk) {
            var hs_sat26DwlL = new $hs.Func(1);
            hs_sat26DwlL.evaluate = function (hs_ds26DwlG) {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            };
            var hs_sat26DwlO = new $hs.Thunk();
            hs_sat26DwlO.evaluateOnce = function () {
                var hs_ds26DwlK = hs_ptr26DvSh;
                if (hs_ptr26DvSh.notEvaluated) {
                    hs_ds26DwlK = hs_ptr26DvSh.hscall();
                }
                var hs_ds126DvSt = hs_ds26DwlK.data[0];
                var hs_ds226DwlJ = $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_praw26DvSk, hs_off26DvSl);
                var hs_ds326DvSu = hs_ds226DwlJ.data[0];
                var hs_ds426DwlI = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_bytes26DvSo);
                var hs_ds526DvSv = hs_ds426DwlI.data[0];
                var hs_sat26DwlN = new $hs.Func(1);
                hs_sat26DwlN.evaluate = function (hs_ds626DvSw) {
                    var hs_wild26DwlH = [hs_ds626DvSw, memcpy(hs_ds126DvSt, hs_ds326DvSu, hs_ds526DvSv)];
                    var hs_ds726DvSB = hs_wild26DwlH[0];
                    var hs_ds826DvSC = hs_wild26DwlH[1];
                    var hs_sat26DwlM = new $hs.Data(1);
                    hs_sat26DwlM.data = [hs_ds826DvSC];
                    return [hs_ds726DvSB, hs_sat26DwlM];
                };
                if (hs_sat26DwlN.notEvaluated) {
                    return hs_sat26DwlN.hscall();
                } else {
                    return hs_sat26DwlN;
                }
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwlO, hs_sat26DwlL);
        };
        var hs_sat26DwlQ = new $hs.Thunk();
        hs_sat26DwlQ.evaluateOnce = function () {
            return $hs.modules.GHCziIOziBuffer.hs_withRawBuffer.hscall(hs_raw26DvSe);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DwlQ, hs_sat26DwlP);
    };
    hs_bufReadEmpty25uxmr.evaluate = function (hs_hzu26DvSO, hs_buf26DvT9, hs_ptr26DvTp, hs_sozufar26DvTA, hs_count26DvTV) {
        var hs_wild26DvTU = hs_hzu26DvSO;
        if (hs_hzu26DvSO.notEvaluated) {
            hs_wild26DvTU = hs_hzu26DvSO.hscall();
        }
        var hs_zddBufferedIO26DvTG = hs_wild26DvTU.data[1];
        var hs_zddTypeable26DvU3 = hs_wild26DvTU.data[2];
        var hs_ds26DvTH = hs_wild26DvTU.data[3];
        var hs_rb26DvT7 = hs_wild26DvTU.data[5];
        var hs_a126DvT8 = new $hs.Data(1);
        hs_a126DvT8.data = [hs_rb26DvT7];
        var hs_wild126DvTI = hs_buf26DvT9;
        if (hs_buf26DvT9.notEvaluated) {
            hs_wild126DvTI = hs_buf26DvT9.hscall();
        }
        var hs_rb626DvU0 = hs_wild126DvTI.data[3];
        var hs_loop26DvTx = new $hs.Func(3);
        hs_loop26DvTx.evaluate = function (hs_fd26DvTo, hs_off26DvTq, hs_bytes26DvTl) {
            var hs_sat26Dwm9 = new $hs.Data(1);
            hs_sat26Dwm9.data = [0];
            var hs_wild226Dwm8 = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_bytes26DvTl, hs_sat26Dwm9);
            switch (hs_wild226Dwm8.tag) {
            case 1:
                var hs_sat26Dwmf = new $hs.Func(1);
                hs_sat26Dwmf.evaluate = function (hs_r26DvTu) {
                    var hs_sat26Dwmb = new $hs.Data(1);
                    hs_sat26Dwmb.data = [0];
                    var hs_wild326Dwma = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_r26DvTu, hs_sat26Dwmb);
                    switch (hs_wild326Dwma.tag) {
                    case 1:
                        var hs_sat26Dwmc = new $hs.Thunk();
                        hs_sat26Dwmc.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_bytes26DvTl, hs_r26DvTu);
                        };
                        var hs_sat26Dwmd = new $hs.Thunk();
                        hs_sat26Dwmd.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_off26DvTq, hs_r26DvTu);
                        };
                        return hs_loop26DvTx.hscall(hs_fd26DvTo, hs_sat26Dwmd, hs_sat26Dwmc);
                    case 2:
                        var hs_sat26Dwme = new $hs.Thunk();
                        hs_sat26Dwme.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sozufar26DvTA, hs_off26DvTq);
                        };
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwme);
                    }
                };
                var hs_sat26Dwmh = new $hs.Thunk();
                hs_sat26Dwmh.evaluateOnce = function () {
                    var hs_sat26Dwmg = new $hs.Thunk();
                    hs_sat26Dwmg.evaluateOnce = function () {
                        return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DvTp, hs_off26DvTq);
                    };
                    return $hs.modules.GHCziIOziDevice.hs_read.hscall($hs.modules.GHCziIOziFD.hs_zdfRawIOFD, hs_fd26DvTo, hs_sat26Dwmg, hs_bytes26DvTl);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwmh, hs_sat26Dwmf);
            case 2:
                var hs_sat26Dwmi = new $hs.Thunk();
                hs_sat26Dwmi.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sozufar26DvTA, hs_off26DvTq);
                };
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwmi);
            }
        };
        var hs_fail26DvTZ = new $hs.Func(1);
        hs_fail26DvTZ.evaluate = function (hs_ds1026DvTY) {
            var hs_sat26Dwmo = new $hs.Func(1);
            hs_sat26Dwmo.evaluate = function (hs_ds1126DvTL) {
                var hs_wild226Dwmj = hs_ds1126DvTL;
                if (hs_ds1126DvTL.notEvaluated) {
                    hs_wild226Dwmj = hs_ds1126DvTL.hscall();
                }
                var hs_r26DvTP = hs_wild226Dwmj.data[0];
                var hs_bufzq26DvTS = hs_wild226Dwmj.data[1];
                var hs_sat26Dwml = new $hs.Data(1);
                hs_sat26Dwml.data = [0];
                var hs_wild326Dwmk = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_r26DvTP, hs_sat26Dwml);
                switch (hs_wild326Dwmk.tag) {
                case 1:
                    var hs_sat26Dwmm = new $hs.Thunk();
                    hs_sat26Dwmm.evaluateOnce = function () {
                        return hs_bufReadNonEmpty25uxmp.hscall(hs_wild26DvTU, hs_bufzq26DvTS, hs_ptr26DvTp, hs_sozufar26DvTA, hs_count26DvTV);
                    };
                    var hs_sat26Dwmn = new $hs.Thunk();
                    hs_sat26Dwmn.evaluateOnce = function () {
                        return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126DvT8, hs_bufzq26DvTS);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwmn, hs_sat26Dwmm);
                case 2:
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sozufar26DvTA);
                }
            };
            var hs_sat26Dwmp = new $hs.Thunk();
            hs_sat26Dwmp.evaluateOnce = function () {
                return $hs.modules.GHCziIOziBufferedIO.hs_fillReadBuffer.hscall(hs_zddBufferedIO26DvTG, hs_ds26DvTH, hs_wild126DvTI);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwmp, hs_sat26Dwmo);
        };
        var hs_sat26Dwmr = new $hs.Data(1);
        hs_sat26Dwmr.data = [hs_rb626DvU0];
        var hs_wild226Dwmq = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_count26DvTV, hs_sat26Dwmr);
        switch (hs_wild226Dwmq.tag) {
        case 1:
            return hs_fail26DvTZ.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
        case 2:
            var hs_wild326Dwms = $hs.modules.DataziTypeable.hs_cast.hscall(hs_zddTypeable26DvU3, $hs.modules.GHCziIOziFD.hs_zdfTypeableFD, hs_ds26DvTH);
            switch (hs_wild326Dwms.tag) {
            case 1:
                return hs_fail26DvTZ.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            case 2:
                var hs_fd26DvU6 = hs_wild326Dwms.data[0];
                var hs_sat26Dwmt = new $hs.Data(1);
                hs_sat26Dwmt.data = [0];
                return hs_loop26DvTx.hscall(hs_fd26DvU6, hs_sat26Dwmt, hs_count26DvTV);
            }
        }
    };
    hs_bufReadNonEmpty25uxmp.evaluate = function (hs_hzu26DvUd, hs_buf26DvUv, hs_ptr26DvUS, hs_sozufar26DvUG, hs_count26DvUJ) {
        var hs_wild26DvVi = hs_hzu26DvUd;
        if (hs_hzu26DvUd.notEvaluated) {
            hs_wild26DvVi = hs_hzu26DvUd.hscall();
        }
        var hs_rb26DvVb = hs_wild26DvVi.data[5];
        var hs_wild126DvUY = hs_buf26DvUv;
        if (hs_buf26DvUv.notEvaluated) {
            hs_wild126DvUY = hs_buf26DvUv.hscall();
        }
        var hs_rb426DvUT = hs_wild126DvUY.data[0];
        var hs_rb526DvUU = hs_wild126DvUY.data[1];
        var hs_rb726DvUE = hs_wild126DvUY.data[4];
        var hs_rb826DvUN = hs_wild126DvUY.data[5];
        var hs_r26DvUF = new $hs.Data(1);
        hs_r26DvUF.data = [hs_rb726DvUE];
        var hs_sozufar126DvVk = hs_sozufar26DvUG;
        if (hs_sozufar26DvUG.notEvaluated) {
            hs_sozufar126DvVk = hs_sozufar26DvUG.hscall();
        }
        var hs_count126DvUQ = hs_count26DvUJ;
        if (hs_count26DvUJ.notEvaluated) {
            hs_count126DvUQ = hs_count26DvUJ.hscall();
        }
        var hs_avail26DvUP = new $hs.Thunk();
        hs_avail26DvUP.evaluateOnce = function () {
            var hs_sat26DwmN = new $hs.Data(1);
            hs_sat26DwmN.data = [hs_rb826DvUN];
            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DwmN, hs_r26DvUF);
        };
        var hs_wild226DwmP = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_count126DvUQ, hs_avail26DvUP);
        switch (hs_wild226DwmP.tag) {
        case 1:
            var hs_sat26Dwn0 = new $hs.Thunk();
            hs_sat26Dwn0.evaluateOnce = function () {
                var hs_bufzq26DvVa = new $hs.Thunk();
                hs_bufzq26DvVa.evaluateOnce = function () {
                    var hs_wild326DwmO = hs_wild126DvUY;
                    if (hs_wild126DvUY.notEvaluated) {
                        hs_wild326DwmO = hs_wild126DvUY.hscall();
                    }
                    var hs_rb926DvV6 = hs_wild326DwmO.data[0];
                    var hs_rb1026DvV7 = hs_wild326DwmO.data[1];
                    var hs_ds1026DvV8 = hs_wild326DwmO.data[2];
                    var hs_rb1126DvV9 = hs_wild326DwmO.data[3];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb926DvV6, hs_rb1026DvV7, hs_ds1026DvV8, hs_rb1126DvV9, 0, 0];
                    return $res;
                };
                var hs_sat26DwmX = new $hs.Thunk();
                hs_sat26DwmX.evaluateOnce = function () {
                    var hs_remaining26DvVf = new $hs.Thunk();
                    hs_remaining26DvVf.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_count126DvUQ, hs_avail26DvUP);
                    };
                    var hs_sat26DwmT = new $hs.Data(1);
                    hs_sat26DwmT.data = [0];
                    var hs_wild326DwmS = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_remaining26DvVf, hs_sat26DwmT);
                    switch (hs_wild326DwmS.tag) {
                    case 1:
                        var hs_sat26DwmU = new $hs.Thunk();
                        hs_sat26DwmU.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sozufar126DvVk, hs_avail26DvUP);
                        };
                        var hs_sat26DwmV = new $hs.Thunk();
                        hs_sat26DwmV.evaluateOnce = function () {
                            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DvUS, hs_avail26DvUP);
                        };
                        return hs_bufReadEmpty25uxmr.hscall(hs_wild26DvVi, hs_bufzq26DvVa, hs_sat26DwmV, hs_sat26DwmU, hs_remaining26DvVf);
                    case 2:
                        var hs_sat26DwmW = new $hs.Thunk();
                        hs_sat26DwmW.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sozufar126DvVk, hs_avail26DvUP);
                        };
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwmW);
                    }
                };
                var hs_sat26DwmZ = new $hs.Thunk();
                hs_sat26DwmZ.evaluateOnce = function () {
                    var hs_sat26DwmY = new $hs.Data(1);
                    hs_sat26DwmY.data = [hs_rb26DvVb];
                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_sat26DwmY, hs_bufzq26DvVa);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwmZ, hs_sat26DwmX);
            };
            var hs_sat26Dwn2 = new $hs.Thunk();
            hs_sat26Dwn2.evaluateOnce = function () {
                var hs_sat26Dwn1 = new $hs.Data(1);
                hs_sat26Dwn1.data = [hs_rb426DvUT, hs_rb526DvUU];
                return hs_copyFromRawBuffer25uxmF.hscall(hs_ptr26DvUS, hs_sat26Dwn1, hs_r26DvUF, hs_avail26DvUP);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwn2, hs_sat26Dwn0);
        case 2:
            var hs_sat26Dwnb = new $hs.Thunk();
            hs_sat26Dwnb.evaluateOnce = function () {
                var hs_sat26Dwn6 = new $hs.Thunk();
                hs_sat26Dwn6.evaluateOnce = function () {
                    var hs_sat26Dwn3 = new $hs.Thunk();
                    hs_sat26Dwn3.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sozufar126DvVk, hs_count126DvUQ);
                    };
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwn3);
                };
                var hs_sat26Dwna = new $hs.Thunk();
                hs_sat26Dwna.evaluateOnce = function () {
                    var hs_sat26Dwn8 = new $hs.Thunk();
                    hs_sat26Dwn8.evaluateOnce = function () {
                        var hs_wild326Dwn5 = hs_wild126DvUY;
                        if (hs_wild126DvUY.notEvaluated) {
                            hs_wild326Dwn5 = hs_wild126DvUY.hscall();
                        }
                        var hs_rb926DvVB = hs_wild326Dwn5.data[0];
                        var hs_rb1026DvVC = hs_wild326Dwn5.data[1];
                        var hs_ds1026DvVD = hs_wild326Dwn5.data[2];
                        var hs_rb1126DvVE = hs_wild326Dwn5.data[3];
                        var hs_rb1326DvVG = hs_wild326Dwn5.data[5];
                        var hs_tpl26Dwn4 = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_r26DvUF, hs_count126DvUQ);
                        var hs_tpl126DvVF = hs_tpl26Dwn4.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb926DvVB, hs_rb1026DvVC, hs_ds1026DvVD, hs_rb1126DvVE, hs_tpl126DvVF, hs_rb1326DvVG];
                        return $res;
                    };
                    var hs_sat26Dwn9 = new $hs.Data(1);
                    hs_sat26Dwn9.data = [hs_rb26DvVb];
                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_sat26Dwn9, hs_sat26Dwn8);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwna, hs_sat26Dwn6);
            };
            var hs_sat26Dwnd = new $hs.Thunk();
            hs_sat26Dwnd.evaluateOnce = function () {
                var hs_sat26Dwnc = new $hs.Data(1);
                hs_sat26Dwnc.data = [hs_rb426DvUT, hs_rb526DvUU];
                return hs_copyFromRawBuffer25uxmF.hscall(hs_ptr26DvUS, hs_sat26Dwnc, hs_r26DvUF, hs_count126DvUQ);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwnd, hs_sat26Dwnb);
        }
    };
    this.hs_hGetBuf.evaluate = function (hs_h26DvVV, hs_ptr26DvWw, hs_count26DvVP) {
        var hs_sat26Dwnf = new $hs.Data(1);
        hs_sat26Dwnf.data = [0];
        var hs_wild26Dwne = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_count26DvVP, hs_sat26Dwnf);
        switch (hs_wild26Dwne.tag) {
        case 1:
            var hs_sat26Dwnk = new $hs.Data(1);
            hs_sat26Dwnk.data = [0];
            var hs_wild126Dwnj = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_count26DvVP, hs_sat26Dwnk);
            switch (hs_wild126Dwnj.tag) {
            case 1:
                var hs_sat26DwnN = new $hs.Func(1);
                hs_sat26DwnN.evaluate = function (hs_hzu26DvVY) {
                    var hs_wild226DvWg = hs_hzu26DvVY;
                    if (hs_hzu26DvVY.notEvaluated) {
                        hs_wild226DvWg = hs_hzu26DvVY.hscall();
                    }
                    var hs_rb26DvWi = hs_wild226DvWg.data[5];
                    var hs_sat26DwnL = new $hs.Thunk();
                    hs_sat26DwnL.evaluateOnce = function () {
                        var hs_sat26DwnI = new $hs.Func(1);
                        hs_sat26DwnI.evaluate = function (hs_buf26DvWm) {
                            var hs_wild326DvWu = hs_buf26DvWm;
                            if (hs_buf26DvWm.notEvaluated) {
                                hs_wild326DvWu = hs_buf26DvWm.hscall();
                            }
                            var hs_wild426Dwng = $hs.modules.GHCziIOziBuffer.hs_isEmptyBuffer.hscall(hs_wild326DvWu);
                            switch (hs_wild426Dwng.tag) {
                            case 1:
                                var hs_sat26DwnE = new $hs.Data(1);
                                hs_sat26DwnE.data = [0];
                                var hs_sat26DwnF = new $hs.Thunk();
                                hs_sat26DwnF.evaluateOnce = function () {
                                    return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_ptr26DvWw);
                                };
                                return hs_bufReadNonEmpty25uxmp.hscall(hs_wild226DvWg, hs_wild326DvWu, hs_sat26DwnF, hs_sat26DwnE, hs_count26DvVP);
                            case 2:
                                var hs_sat26DwnG = new $hs.Data(1);
                                hs_sat26DwnG.data = [0];
                                var hs_sat26DwnH = new $hs.Thunk();
                                hs_sat26DwnH.evaluateOnce = function () {
                                    return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_ptr26DvWw);
                                };
                                return hs_bufReadEmpty25uxmr.hscall(hs_wild226DvWg, hs_wild326DvWu, hs_sat26DwnH, hs_sat26DwnG, hs_count26DvVP);
                            }
                        };
                        var hs_sat26DwnK = new $hs.Thunk();
                        hs_sat26DwnK.evaluateOnce = function () {
                            var hs_sat26DwnJ = new $hs.Data(1);
                            hs_sat26DwnJ.data = [hs_rb26DvWi];
                            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_sat26DwnJ);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwnK, hs_sat26DwnI);
                    };
                    var hs_sat26DwnM = new $hs.Thunk();
                    hs_sat26DwnM.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziHandleziInternals.hs_flushCharReadBuffer.hscall(hs_wild226DvWg);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwnM, hs_sat26DwnL);
                };
                var hs_sat26DwnP = new $hs.Thunk();
                hs_sat26DwnP.evaluateOnce = function () {
                    var hs_sat26DwnO = new $hs.Thunk();
                    hs_sat26DwnO.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hGetBuf\x00");
                    };
                    return $hs.modules.GHCziIOziHandleziInternals.hs_wantReadableHandlezu.hscall(hs_sat26DwnO, hs_h26DvVV);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DwnP, hs_sat26DwnN);
            case 2:
                var hs_sat26DwnQ = new $hs.Thunk();
                hs_sat26DwnQ.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hGetBuf\x00");
                };
                return hs_illegalBufferSizze25uxmH.hscall(hs_h26DvVV, hs_sat26DwnQ, hs_count26DvVP);
            }
        case 2:
            var hs_sat26DwnR = new $hs.Data(1);
            hs_sat26DwnR.data = [0];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwnR);
        }
    };
    hs_bufReadNBNonEmpty25uxmB.evaluate = function (hs_hzu26DvWL, hs_buf26DvX3, hs_ptr26DvXk, hs_sozufar26DvXM, hs_count26DvXi) {
        var hs_wild26DvXK = hs_hzu26DvWL;
        if (hs_hzu26DvWL.notEvaluated) {
            hs_wild26DvXK = hs_hzu26DvWL.hscall();
        }
        var hs_rb26DvXD = hs_wild26DvXK.data[5];
        var hs_wild126DvXq = hs_buf26DvX3;
        if (hs_buf26DvX3.notEvaluated) {
            hs_wild126DvXq = hs_buf26DvX3.hscall();
        }
        var hs_rb426DvXl = hs_wild126DvXq.data[0];
        var hs_rb526DvXm = hs_wild126DvXq.data[1];
        var hs_rb726DvXc = hs_wild126DvXq.data[4];
        var hs_rb826DvXf = hs_wild126DvXq.data[5];
        var hs_r26DvXd = new $hs.Data(1);
        hs_r26DvXd.data = [hs_rb726DvXc];
        var hs_avail26DvXh = new $hs.Thunk();
        hs_avail26DvXh.evaluateOnce = function () {
            var hs_sat26Dwo9 = new $hs.Data(1);
            hs_sat26Dwo9.data = [hs_rb826DvXf];
            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dwo9, hs_r26DvXd);
        };
        var hs_wild226Dwob = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_count26DvXi, hs_avail26DvXh);
        switch (hs_wild226Dwob.tag) {
        case 1:
            var hs_sat26Dwom = new $hs.Thunk();
            hs_sat26Dwom.evaluateOnce = function () {
                var hs_bufzq26DvXC = new $hs.Thunk();
                hs_bufzq26DvXC.evaluateOnce = function () {
                    var hs_wild326Dwoa = hs_wild126DvXq;
                    if (hs_wild126DvXq.notEvaluated) {
                        hs_wild326Dwoa = hs_wild126DvXq.hscall();
                    }
                    var hs_rb926DvXy = hs_wild326Dwoa.data[0];
                    var hs_rb1026DvXz = hs_wild326Dwoa.data[1];
                    var hs_ds1026DvXA = hs_wild326Dwoa.data[2];
                    var hs_rb1126DvXB = hs_wild326Dwoa.data[3];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb926DvXy, hs_rb1026DvXz, hs_ds1026DvXA, hs_rb1126DvXB, 0, 0];
                    return $res;
                };
                var hs_sat26Dwoj = new $hs.Thunk();
                hs_sat26Dwoj.evaluateOnce = function () {
                    var hs_remaining26DvXH = new $hs.Thunk();
                    hs_remaining26DvXH.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_count26DvXi, hs_avail26DvXh);
                    };
                    var hs_sat26Dwof = new $hs.Data(1);
                    hs_sat26Dwof.data = [0];
                    var hs_wild326Dwoe = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_remaining26DvXH, hs_sat26Dwof);
                    switch (hs_wild326Dwoe.tag) {
                    case 1:
                        var hs_sat26Dwog = new $hs.Thunk();
                        hs_sat26Dwog.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sozufar26DvXM, hs_avail26DvXh);
                        };
                        var hs_sat26Dwoh = new $hs.Thunk();
                        hs_sat26Dwoh.evaluateOnce = function () {
                            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DvXk, hs_avail26DvXh);
                        };
                        return hs_bufReadNBEmpty25uxmz.hscall(hs_wild26DvXK, hs_bufzq26DvXC, hs_sat26Dwoh, hs_sat26Dwog, hs_remaining26DvXH);
                    case 2:
                        var hs_sat26Dwoi = new $hs.Thunk();
                        hs_sat26Dwoi.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sozufar26DvXM, hs_avail26DvXh);
                        };
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwoi);
                    }
                };
                var hs_sat26Dwol = new $hs.Thunk();
                hs_sat26Dwol.evaluateOnce = function () {
                    var hs_sat26Dwok = new $hs.Data(1);
                    hs_sat26Dwok.data = [hs_rb26DvXD];
                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_sat26Dwok, hs_bufzq26DvXC);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwol, hs_sat26Dwoj);
            };
            var hs_sat26Dwoo = new $hs.Thunk();
            hs_sat26Dwoo.evaluateOnce = function () {
                var hs_sat26Dwon = new $hs.Data(1);
                hs_sat26Dwon.data = [hs_rb426DvXl, hs_rb526DvXm];
                return hs_copyFromRawBuffer25uxmF.hscall(hs_ptr26DvXk, hs_sat26Dwon, hs_r26DvXd, hs_avail26DvXh);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwoo, hs_sat26Dwom);
        case 2:
            var hs_sat26Dwox = new $hs.Thunk();
            hs_sat26Dwox.evaluateOnce = function () {
                var hs_sat26Dwos = new $hs.Thunk();
                hs_sat26Dwos.evaluateOnce = function () {
                    var hs_sat26Dwop = new $hs.Thunk();
                    hs_sat26Dwop.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sozufar26DvXM, hs_count26DvXi);
                    };
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwop);
                };
                var hs_sat26Dwow = new $hs.Thunk();
                hs_sat26Dwow.evaluateOnce = function () {
                    var hs_sat26Dwou = new $hs.Thunk();
                    hs_sat26Dwou.evaluateOnce = function () {
                        var hs_wild326Dwor = hs_wild126DvXq;
                        if (hs_wild126DvXq.notEvaluated) {
                            hs_wild326Dwor = hs_wild126DvXq.hscall();
                        }
                        var hs_rb926DvY3 = hs_wild326Dwor.data[0];
                        var hs_rb1026DvY4 = hs_wild326Dwor.data[1];
                        var hs_ds1026DvY5 = hs_wild326Dwor.data[2];
                        var hs_rb1126DvY6 = hs_wild326Dwor.data[3];
                        var hs_rb1326DvY8 = hs_wild326Dwor.data[5];
                        var hs_tpl26Dwoq = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_r26DvXd, hs_count26DvXi);
                        var hs_tpl126DvY7 = hs_tpl26Dwoq.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb926DvY3, hs_rb1026DvY4, hs_ds1026DvY5, hs_rb1126DvY6, hs_tpl126DvY7, hs_rb1326DvY8];
                        return $res;
                    };
                    var hs_sat26Dwov = new $hs.Data(1);
                    hs_sat26Dwov.data = [hs_rb26DvXD];
                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_sat26Dwov, hs_sat26Dwou);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwow, hs_sat26Dwos);
            };
            var hs_sat26Dwoz = new $hs.Thunk();
            hs_sat26Dwoz.evaluateOnce = function () {
                var hs_sat26Dwoy = new $hs.Data(1);
                hs_sat26Dwoy.data = [hs_rb426DvXl, hs_rb526DvXm];
                return hs_copyFromRawBuffer25uxmF.hscall(hs_ptr26DvXk, hs_sat26Dwoy, hs_r26DvXd, hs_count26DvXi);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwoz, hs_sat26Dwox);
        }
    };
    hs_bufReadNBEmpty25uxmz.evaluate = function (hs_hzu26DvYj, hs_buf26DvYE, hs_ptr26DvZb, hs_sozufar26DvZ1, hs_count26DvZc) {
        var hs_wild26DvZa = hs_hzu26DvYj;
        if (hs_hzu26DvYj.notEvaluated) {
            hs_wild26DvZa = hs_hzu26DvYj.hscall();
        }
        var hs_zddBufferedIO26DvYQ = hs_wild26DvZa.data[1];
        var hs_zddTypeable26DvZn = hs_wild26DvZa.data[2];
        var hs_ds26DvYR = hs_wild26DvZa.data[3];
        var hs_rb26DvYC = hs_wild26DvZa.data[5];
        var hs_a126DvYD = new $hs.Data(1);
        hs_a126DvYD.data = [hs_rb26DvYC];
        var hs_wild126DwoP = hs_buf26DvYE;
        if (hs_buf26DvYE.notEvaluated) {
            hs_wild126DwoP = hs_buf26DvYE.hscall();
        }
        var hs_rb626DvZk = hs_wild126DwoP.data[3];
        var hs_fail26DvZj = new $hs.Func(1);
        hs_fail26DvZj.evaluate = function (hs_ds1026DvZi) {
            var hs_sat26Dwp0 = new $hs.Func(1);
            hs_sat26Dwp0.evaluate = function (hs_buf126DvYS) {
                var hs_sat26DwoY = new $hs.Func(1);
                hs_sat26DwoY.evaluate = function (hs_ds1126DvYV) {
                    var hs_wild226DwoN = hs_ds1126DvYV;
                    if (hs_ds1126DvYV.notEvaluated) {
                        hs_wild226DwoN = hs_ds1126DvYV.hscall();
                    }
                    var hs_r26DvYZ = hs_wild226DwoN.data[0];
                    var hs_bufzq26DvZ8 = hs_wild226DwoN.data[1];
                    var hs_wild326DwoM = hs_r26DvYZ;
                    if (hs_r26DvYZ.notEvaluated) {
                        hs_wild326DwoM = hs_r26DvYZ.hscall();
                    }
                    switch (hs_wild326DwoM.tag) {
                    case 1:
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sozufar26DvZ1);
                    case 2:
                        var hs_ds1226DvZ3 = hs_wild326DwoM.data[0];
                        var hs_wild426DvZd = hs_ds1226DvZ3;
                        if (hs_ds1226DvZ3.notEvaluated) {
                            hs_wild426DvZd = hs_ds1226DvZ3.hscall();
                        }
                        var hs_ds1326DvZ6 = hs_wild426DvZd.data[0];
                        var hs_ds1426DwoU = hs_ds1326DvZ6;
                        if (hs_ds1326DvZ6.notEvaluated) {
                            hs_ds1426DwoU = hs_ds1326DvZ6.hscall();
                        }
                        switch (hs_ds1426DwoU) {
                        case 0:
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sozufar26DvZ1);
                        default:
                            var hs_sat26DwoW = new $hs.Thunk();
                            hs_sat26DwoW.evaluateOnce = function () {
                                var hs_sat26DwoV = new $hs.Thunk();
                                hs_sat26DwoV.evaluateOnce = function () {
                                    return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_count26DvZc, hs_wild426DvZd);
                                };
                                return hs_bufReadNBNonEmpty25uxmB.hscall(hs_wild26DvZa, hs_bufzq26DvZ8, hs_ptr26DvZb, hs_sozufar26DvZ1, hs_sat26DwoV);
                            };
                            var hs_sat26DwoX = new $hs.Thunk();
                            hs_sat26DwoX.evaluateOnce = function () {
                                return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126DvYD, hs_bufzq26DvZ8);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwoX, hs_sat26DwoW);
                        }
                    }
                };
                var hs_sat26DwoZ = new $hs.Thunk();
                hs_sat26DwoZ.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziBufferedIO.hs_fillReadBuffer0.hscall(hs_zddBufferedIO26DvYQ, hs_ds26DvYR, hs_buf126DvYS);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwoZ, hs_sat26DwoY);
            };
            var hs_sat26Dwp1 = new $hs.Thunk();
            hs_sat26Dwp1.evaluateOnce = function () {
                return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a126DvYD);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwp1, hs_sat26Dwp0);
        };
        var hs_sat26Dwp3 = new $hs.Data(1);
        hs_sat26Dwp3.data = [hs_rb626DvZk];
        var hs_wild226Dwp2 = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_count26DvZc, hs_sat26Dwp3);
        switch (hs_wild226Dwp2.tag) {
        case 1:
            return hs_fail26DvZj.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
        case 2:
            var hs_wild326Dwp4 = $hs.modules.DataziTypeable.hs_cast.hscall(hs_zddTypeable26DvZn, $hs.modules.GHCziIOziFD.hs_zdfTypeableFD, hs_ds26DvYR);
            switch (hs_wild326Dwp4.tag) {
            case 1:
                return hs_fail26DvZj.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            case 2:
                var hs_fd26DvZq = hs_wild326Dwp4.data[0];
                var hs_sat26Dwp7 = new $hs.Func(1);
                hs_sat26Dwp7.evaluate = function (hs_m26DvZt) {
                    var hs_wild426Dwp5 = hs_m26DvZt;
                    if (hs_m26DvZt.notEvaluated) {
                        hs_wild426Dwp5 = hs_m26DvZt.hscall();
                    }
                    switch (hs_wild426Dwp5.tag) {
                    case 1:
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sozufar26DvZ1);
                    case 2:
                        var hs_n26DvZw = hs_wild426Dwp5.data[0];
                        var hs_sat26Dwp6 = new $hs.Thunk();
                        hs_sat26Dwp6.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sozufar26DvZ1, hs_n26DvZw);
                        };
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwp6);
                    }
                };
                var hs_sat26Dwp8 = new $hs.Thunk();
                hs_sat26Dwp8.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziDevice.hs_readNonBlocking.hscall($hs.modules.GHCziIOziFD.hs_zdfRawIOFD, hs_fd26DvZq, hs_ptr26DvZb, hs_count26DvZc);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwp8, hs_sat26Dwp7);
            }
        }
    };
    this.hs_hGetBufSome.evaluate = function (hs_h26DvZI, hs_ptr26Dw0k, hs_count26DvZC) {
        var hs_sat26Dwpa = new $hs.Data(1);
        hs_sat26Dwpa.data = [0];
        var hs_wild26Dwp9 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_count26DvZC, hs_sat26Dwpa);
        switch (hs_wild26Dwp9.tag) {
        case 1:
            var hs_sat26Dwpd = new $hs.Data(1);
            hs_sat26Dwpd.data = [0];
            var hs_wild126Dwpc = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_count26DvZC, hs_sat26Dwpd);
            switch (hs_wild126Dwpc.tag) {
            case 1:
                var hs_sat26Dwq8 = new $hs.Func(1);
                hs_sat26Dwq8.evaluate = function (hs_hzu26DvZL) {
                    var hs_wild226Dw06 = hs_hzu26DvZL;
                    if (hs_hzu26DvZL.notEvaluated) {
                        hs_wild226Dw06 = hs_hzu26DvZL.hscall();
                    }
                    var hs_zddBufferedIO26Dw0q = hs_wild226Dw06.data[1];
                    var hs_ds26Dw0r = hs_wild226Dw06.data[3];
                    var hs_rb26Dw04 = hs_wild226Dw06.data[5];
                    var hs_a126Dw05 = new $hs.Data(1);
                    hs_a126Dw05.data = [hs_rb26Dw04];
                    var hs_sat26Dwq6 = new $hs.Thunk();
                    hs_sat26Dwq6.evaluateOnce = function () {
                        var hs_sat26Dwq4 = new $hs.Func(1);
                        hs_sat26Dwq4.evaluate = function (hs_buf26Dw0a) {
                            var hs_wild326Dw0i = hs_buf26Dw0a;
                            if (hs_buf26Dw0a.notEvaluated) {
                                hs_wild326Dw0i = hs_buf26Dw0a.hscall();
                            }
                            var hs_rb626Dw0n = hs_wild326Dw0i.data[3];
                            var hs_wild426Dwpq = $hs.modules.GHCziIOziBuffer.hs_isEmptyBuffer.hscall(hs_wild326Dw0i);
                            switch (hs_wild426Dwpq.tag) {
                            case 1:
                                var hs_sat26Dwpw = new $hs.Data(1);
                                hs_sat26Dwpw.data = [0];
                                var hs_sat26Dwpx = new $hs.Thunk();
                                hs_sat26Dwpx.evaluateOnce = function () {
                                    return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_ptr26Dw0k);
                                };
                                return hs_bufReadNBNonEmpty25uxmB.hscall(hs_wild226Dw06, hs_wild326Dw0i, hs_sat26Dwpx, hs_sat26Dwpw, hs_count26DvZC);
                            case 2:
                                var hs_sat26DwpA = new $hs.Data(1);
                                hs_sat26DwpA.data = [hs_rb626Dw0n];
                                var hs_wild526Dwpz = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_count26DvZC, hs_sat26DwpA);
                                switch (hs_wild526Dwpz.tag) {
                                case 1:
                                    var hs_sat26DwpJ = new $hs.Func(1);
                                    hs_sat26DwpJ.evaluate = function (hs_ds1026Dw0u) {
                                        var hs_wild626Dwpy = hs_ds1026Dw0u;
                                        if (hs_ds1026Dw0u.notEvaluated) {
                                            hs_wild626Dwpy = hs_ds1026Dw0u.hscall();
                                        }
                                        var hs_r26Dw0y = hs_wild626Dwpy.data[0];
                                        var hs_bufzq26Dw0B = hs_wild626Dwpy.data[1];
                                        var hs_sat26DwpC = new $hs.Data(1);
                                        hs_sat26DwpC.data = [0];
                                        var hs_wild726DwpB = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_r26Dw0y, hs_sat26DwpC);
                                        switch (hs_wild726DwpB.tag) {
                                        case 1:
                                            var hs_sat26DwpG = new $hs.Thunk();
                                            hs_sat26DwpG.evaluateOnce = function () {
                                                var hs_sat26DwpD = new $hs.Thunk();
                                                hs_sat26DwpD.evaluateOnce = function () {
                                                    return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_r26Dw0y, hs_count26DvZC);
                                                };
                                                var hs_sat26DwpE = new $hs.Data(1);
                                                hs_sat26DwpE.data = [0];
                                                var hs_sat26DwpF = new $hs.Thunk();
                                                hs_sat26DwpF.evaluateOnce = function () {
                                                    return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_ptr26Dw0k);
                                                };
                                                return hs_bufReadNBNonEmpty25uxmB.hscall(hs_wild226Dw06, hs_bufzq26Dw0B, hs_sat26DwpF, hs_sat26DwpE, hs_sat26DwpD);
                                            };
                                            var hs_sat26DwpH = new $hs.Thunk();
                                            hs_sat26DwpH.evaluateOnce = function () {
                                                return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126Dw05, hs_bufzq26Dw0B);
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwpH, hs_sat26DwpG);
                                        case 2:
                                            var hs_sat26DwpI = new $hs.Data(1);
                                            hs_sat26DwpI.data = [0];
                                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwpI);
                                        }
                                    };
                                    var hs_sat26DwpK = new $hs.Thunk();
                                    hs_sat26DwpK.evaluateOnce = function () {
                                        return $hs.modules.GHCziIOziBufferedIO.hs_fillReadBuffer.hscall(hs_zddBufferedIO26Dw0q, hs_ds26Dw0r, hs_wild326Dw0i);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwpK, hs_sat26DwpJ);
                                case 2:
                                    var hs_sat26DwpP = new $hs.Thunk();
                                    hs_sat26DwpP.evaluateOnce = function () {
                                        return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_ptr26Dw0k);
                                    };
                                    var hs_sat26Dwq3 = new $hs.Thunk();
                                    hs_sat26Dwq3.evaluateOnce = function () {
                                        var hs_wild626DwpO = hs_wild226Dw06;
                                        if (hs_wild226Dw06.notEvaluated) {
                                            hs_wild626DwpO = hs_wild226Dw06.hscall();
                                        }
                                        var hs_zddTypeable126Dw10 = hs_wild626DwpO.data[2];
                                        var hs_ds1026Dw11 = hs_wild626DwpO.data[3];
                                        var hs_wild726DwpM = $hs.modules.DataziTypeable.hs_cast.hscall(hs_zddTypeable126Dw10, $hs.modules.GHCziIOziFD.hs_zdfTypeableFD, hs_ds1026Dw11);
                                        switch (hs_wild726DwpM.tag) {
                                        case 1:
                                            var hs_sat26DwpL = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("not an FD\x00");
                                            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DwpL);
                                        case 2:
                                            var hs_fd26Dw15 = hs_wild726DwpM.data[0];
                                            if (hs_fd26Dw15.notEvaluated) {
                                                return hs_fd26Dw15.hscall();
                                            } else {
                                                return hs_fd26Dw15;
                                            }
                                        }
                                    };
                                    return $hs.modules.GHCziIOziDevice.hs_read.hscall($hs.modules.GHCziIOziFD.hs_zdfRawIOFD, hs_sat26Dwq3, hs_sat26DwpP, hs_count26DvZC);
                                }
                            }
                        };
                        var hs_sat26Dwq5 = new $hs.Thunk();
                        hs_sat26Dwq5.evaluateOnce = function () {
                            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a126Dw05);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwq5, hs_sat26Dwq4);
                    };
                    var hs_sat26Dwq7 = new $hs.Thunk();
                    hs_sat26Dwq7.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziHandleziInternals.hs_flushCharReadBuffer.hscall(hs_wild226Dw06);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwq7, hs_sat26Dwq6);
                };
                var hs_sat26Dwqa = new $hs.Thunk();
                hs_sat26Dwqa.evaluateOnce = function () {
                    var hs_sat26Dwq9 = new $hs.Thunk();
                    hs_sat26Dwq9.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hGetBufSome\x00");
                    };
                    return $hs.modules.GHCziIOziHandleziInternals.hs_wantReadableHandlezu.hscall(hs_sat26Dwq9, hs_h26DvZI);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dwqa, hs_sat26Dwq8);
            case 2:
                var hs_sat26Dwqb = new $hs.Thunk();
                hs_sat26Dwqb.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hGetBufSome\x00");
                };
                return hs_illegalBufferSizze25uxmH.hscall(hs_h26DvZI, hs_sat26Dwqb, hs_count26DvZC);
            }
        case 2:
            var hs_sat26Dwqc = new $hs.Data(1);
            hs_sat26Dwqc.data = [0];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwqc);
        }
    };
    this.hs_hGetBufNonBlocking.evaluate = function (hs_h26Dw1m, hs_ptr26Dw1X, hs_count26Dw1g) {
        var hs_sat26Dwqe = new $hs.Data(1);
        hs_sat26Dwqe.data = [0];
        var hs_wild26Dwqd = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_count26Dw1g, hs_sat26Dwqe);
        switch (hs_wild26Dwqd.tag) {
        case 1:
            var hs_sat26Dwqj = new $hs.Data(1);
            hs_sat26Dwqj.data = [0];
            var hs_wild126Dwqi = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_count26Dw1g, hs_sat26Dwqj);
            switch (hs_wild126Dwqi.tag) {
            case 1:
                var hs_sat26DwqM = new $hs.Func(1);
                hs_sat26DwqM.evaluate = function (hs_hzu26Dw1p) {
                    var hs_wild226Dw1H = hs_hzu26Dw1p;
                    if (hs_hzu26Dw1p.notEvaluated) {
                        hs_wild226Dw1H = hs_hzu26Dw1p.hscall();
                    }
                    var hs_rb26Dw1J = hs_wild226Dw1H.data[5];
                    var hs_sat26DwqK = new $hs.Thunk();
                    hs_sat26DwqK.evaluateOnce = function () {
                        var hs_sat26DwqH = new $hs.Func(1);
                        hs_sat26DwqH.evaluate = function (hs_buf26Dw1N) {
                            var hs_wild326Dw1V = hs_buf26Dw1N;
                            if (hs_buf26Dw1N.notEvaluated) {
                                hs_wild326Dw1V = hs_buf26Dw1N.hscall();
                            }
                            var hs_wild426Dwqf = $hs.modules.GHCziIOziBuffer.hs_isEmptyBuffer.hscall(hs_wild326Dw1V);
                            switch (hs_wild426Dwqf.tag) {
                            case 1:
                                var hs_sat26DwqD = new $hs.Data(1);
                                hs_sat26DwqD.data = [0];
                                var hs_sat26DwqE = new $hs.Thunk();
                                hs_sat26DwqE.evaluateOnce = function () {
                                    return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_ptr26Dw1X);
                                };
                                return hs_bufReadNBNonEmpty25uxmB.hscall(hs_wild226Dw1H, hs_wild326Dw1V, hs_sat26DwqE, hs_sat26DwqD, hs_count26Dw1g);
                            case 2:
                                var hs_sat26DwqF = new $hs.Data(1);
                                hs_sat26DwqF.data = [0];
                                var hs_sat26DwqG = new $hs.Thunk();
                                hs_sat26DwqG.evaluateOnce = function () {
                                    return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_ptr26Dw1X);
                                };
                                return hs_bufReadNBEmpty25uxmz.hscall(hs_wild226Dw1H, hs_wild326Dw1V, hs_sat26DwqG, hs_sat26DwqF, hs_count26Dw1g);
                            }
                        };
                        var hs_sat26DwqJ = new $hs.Thunk();
                        hs_sat26DwqJ.evaluateOnce = function () {
                            var hs_sat26DwqI = new $hs.Data(1);
                            hs_sat26DwqI.data = [hs_rb26Dw1J];
                            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_sat26DwqI);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwqJ, hs_sat26DwqH);
                    };
                    var hs_sat26DwqL = new $hs.Thunk();
                    hs_sat26DwqL.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziHandleziInternals.hs_flushCharReadBuffer.hscall(hs_wild226Dw1H);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwqL, hs_sat26DwqK);
                };
                var hs_sat26DwqO = new $hs.Thunk();
                hs_sat26DwqO.evaluateOnce = function () {
                    var hs_sat26DwqN = new $hs.Thunk();
                    hs_sat26DwqN.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hGetBufNonBlocking\x00");
                    };
                    return $hs.modules.GHCziIOziHandleziInternals.hs_wantReadableHandlezu.hscall(hs_sat26DwqN, hs_h26Dw1m);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DwqO, hs_sat26DwqM);
            case 2:
                var hs_sat26DwqP = new $hs.Thunk();
                hs_sat26DwqP.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hGetBufNonBlocking\x00");
                };
                return hs_illegalBufferSizze25uxmH.hscall(hs_h26Dw1m, hs_sat26DwqP, hs_count26Dw1g);
            }
        case 2:
            var hs_sat26DwqQ = new $hs.Data(1);
            hs_sat26DwqQ.data = [0];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwqQ);
        }
    };
    hs_maybeFillReadBuffer25uxlD.evaluate = function (hs_handlezu26Dw29, hs_buf26Dw2a) {
        var hs_sat26DwqS = new $hs.Func(1);
        hs_sat26DwqS.evaluate = function (hs_e26Dw2i) {
            var hs_wild26DwqR = $hs.modules.SystemziIOziError.hs_isEOFError.hscall(hs_e26Dw2i);
            switch (hs_wild26DwqR.tag) {
            case 1:
                return $hs.modules.GHCziIOziException.hs_ioError.hscall(hs_e26Dw2i);
            case 2:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.DataziMaybe.hs_Nothing);
            }
        };
        var hs_sat26DwqW = new $hs.Thunk();
        hs_sat26DwqW.evaluateOnce = function () {
            var hs_sat26DwqU = new $hs.Func(1);
            hs_sat26DwqU.evaluate = function (hs_bufzq26Dw2d) {
                var hs_sat26DwqT = new $hs.Data(2);
                hs_sat26DwqT.data = [hs_bufzq26Dw2d];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwqT);
            };
            var hs_sat26DwqV = new $hs.Thunk();
            hs_sat26DwqV.evaluateOnce = function () {
                return hs_getSomeCharacters25uxlP.hscall(hs_handlezu26Dw29, hs_buf26Dw2a);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwqV, hs_sat26DwqU);
        };
        return $hs.modules.SystemziIOziError.hs_catch.hscall(hs_sat26DwqW, hs_sat26DwqS);
    };
    this.hs_hGetChar.evaluate = function (hs_handle26Dw2n) {
        var hs_sat26DwrN = new $hs.Func(1);
        hs_sat26DwrN.evaluate = function (hs_handlezu26Dw2q) {
            var hs_wild26Dw2P = hs_handlezu26Dw2q;
            if (hs_handlezu26Dw2q.notEvaluated) {
                hs_wild26Dw2P = hs_handlezu26Dw2q.hscall();
            }
            var hs_rb226Dw2J = hs_wild26Dw2P.data[8];
            var hs_ds626Dw34 = hs_wild26Dw2P.data[13];
            var hs_a126Dw2K = new $hs.Data(1);
            hs_a126Dw2K.data = [hs_rb226Dw2J];
            var hs_sat26DwrL = new $hs.Func(1);
            hs_sat26DwrL.evaluate = function (hs_buf026Dw2N) {
                var hs_sat26DwrJ = new $hs.Func(1);
                hs_sat26DwrJ.evaluate = function (hs_buf126Dw2S) {
                    var hs_sat26DwrE = new $hs.Func(1);
                    hs_sat26DwrE.evaluate = function (hs_ds926Dw2X) {
                        var hs_wild126Dwrb = hs_ds926Dw2X;
                        if (hs_ds926Dw2X.notEvaluated) {
                            hs_wild126Dwrb = hs_ds926Dw2X.hscall();
                        }
                        var hs_c126Dw36 = hs_wild126Dwrb.data[0];
                        var hs_i26Dw32 = hs_wild126Dwrb.data[1];
                        var hs_buf226Dw33 = new $hs.Thunk();
                        hs_buf226Dw33.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziBuffer.hs_bufferAdjustL.hscall(hs_i26Dw32, hs_buf126Dw2S);
                        };
                        var hs_sat26Dwrd = new $hs.Thunk();
                        hs_sat26Dwrd.evaluateOnce = function () {
                            var hs_sat26Dwrc = new $hs.Data(1);
                            hs_sat26Dwrc.data = ["\r"];
                            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c126Dw36, hs_sat26Dwrc);
                        };
                        var hs_sat26Dwrf = new $hs.Thunk();
                        hs_sat26Dwrf.evaluateOnce = function () {
                            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfEqNewline, hs_ds626Dw34, $hs.modules.GHCziIOziHandleziTypes.hs_CRLF);
                        };
                        var hs_wild226Dwre = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dwrf, hs_sat26Dwrd);
                        switch (hs_wild226Dwre.tag) {
                        case 1:
                            var hs_sat26Dwrg = new $hs.Thunk();
                            hs_sat26Dwrg.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_c126Dw36);
                            };
                            var hs_sat26Dwrh = new $hs.Thunk();
                            hs_sat26Dwrh.evaluateOnce = function () {
                                return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126Dw2K, hs_buf226Dw33);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwrh, hs_sat26Dwrg);
                        case 2:
                            var hs_sat26DwrB = new $hs.Func(1);
                            hs_sat26DwrB.evaluate = function (hs_mbuf326Dw3g) {
                                var hs_wild326Dwri = hs_mbuf326Dw3g;
                                if (hs_mbuf326Dw3g.notEvaluated) {
                                    hs_wild326Dwri = hs_mbuf326Dw3g.hscall();
                                }
                                switch (hs_wild326Dwri.tag) {
                                case 1:
                                    var hs_sat26Dwrk = new $hs.Thunk();
                                    hs_sat26Dwrk.evaluateOnce = function () {
                                        var hs_sat26Dwrj = new $hs.Data(1);
                                        hs_sat26Dwrj.data = ["\r"];
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwrj);
                                    };
                                    var hs_sat26Dwrl = new $hs.Thunk();
                                    hs_sat26Dwrl.evaluateOnce = function () {
                                        return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126Dw2K, hs_buf226Dw33);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwrl, hs_sat26Dwrk);
                                case 2:
                                    var hs_buf326Dw3x = hs_wild326Dwri.data[0];
                                    var hs_sat26Dwrw = new $hs.Func(1);
                                    hs_sat26Dwrw.evaluate = function (hs_ds1026Dw3q) {
                                        var hs_wild426Dwrm = hs_ds1026Dw3q;
                                        if (hs_ds1026Dw3q.notEvaluated) {
                                            hs_wild426Dwrm = hs_ds1026Dw3q.hscall();
                                        }
                                        var hs_c226Dw3u = hs_wild426Dwrm.data[0];
                                        var hs_i226Dw3B = hs_wild426Dwrm.data[1];
                                        var hs_sat26Dwro = new $hs.Data(1);
                                        hs_sat26Dwro.data = ["\n"];
                                        var hs_wild526Dwrn = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c226Dw3u, hs_sat26Dwro);
                                        switch (hs_wild526Dwrn.tag) {
                                        case 1:
                                            var hs_sat26Dwrq = new $hs.Thunk();
                                            hs_sat26Dwrq.evaluateOnce = function () {
                                                var hs_sat26Dwrp = new $hs.Data(1);
                                                hs_sat26Dwrp.data = ["\r"];
                                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwrp);
                                            };
                                            var hs_sat26Dwrr = new $hs.Thunk();
                                            hs_sat26Dwrr.evaluateOnce = function () {
                                                return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126Dw2K, hs_buf326Dw3x);
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwrr, hs_sat26Dwrq);
                                        case 2:
                                            var hs_sat26Dwrt = new $hs.Thunk();
                                            hs_sat26Dwrt.evaluateOnce = function () {
                                                var hs_sat26Dwrs = new $hs.Data(1);
                                                hs_sat26Dwrs.data = ["\n"];
                                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwrs);
                                            };
                                            var hs_sat26Dwrv = new $hs.Thunk();
                                            hs_sat26Dwrv.evaluateOnce = function () {
                                                var hs_sat26Dwru = new $hs.Thunk();
                                                hs_sat26Dwru.evaluateOnce = function () {
                                                    return $hs.modules.GHCziIOziBuffer.hs_bufferAdjustL.hscall(hs_i226Dw3B, hs_buf326Dw3x);
                                                };
                                                return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126Dw2K, hs_sat26Dwru);
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwrv, hs_sat26Dwrt);
                                        }
                                    };
                                    var hs_sat26Dwrz = new $hs.Thunk();
                                    hs_sat26Dwrz.evaluateOnce = function () {
                                        var hs_sat26Dwrx = new $hs.Thunk();
                                        hs_sat26Dwrx.evaluateOnce = function () {
                                            return $hs.modules.GHCziIOziBuffer.hs_bufL.hscall(hs_buf226Dw33);
                                        };
                                        var hs_sat26Dwry = new $hs.Thunk();
                                        hs_sat26Dwry.evaluateOnce = function () {
                                            return $hs.modules.GHCziIOziBuffer.hs_bufRaw.hscall(hs_buf226Dw33);
                                        };
                                        return $hs.modules.GHCziIOziBuffer.hs_readCharBuf.hscall(hs_sat26Dwry, hs_sat26Dwrx);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwrz, hs_sat26Dwrw);
                                }
                            };
                            var hs_sat26DwrD = new $hs.Thunk();
                            hs_sat26DwrD.evaluateOnce = function () {
                                var hs_wild326DwrA = $hs.modules.GHCziIOziBuffer.hs_isEmptyBuffer.hscall(hs_buf226Dw33);
                                switch (hs_wild326DwrA.tag) {
                                case 1:
                                    var hs_sat26DwrC = new $hs.Data(2);
                                    hs_sat26DwrC.data = [hs_buf226Dw33];
                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwrC);
                                case 2:
                                    return hs_maybeFillReadBuffer25uxlD.hscall(hs_wild26Dw2P, hs_buf226Dw33);
                                }
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwrD, hs_sat26DwrB);
                        }
                    };
                    var hs_sat26DwrH = new $hs.Thunk();
                    hs_sat26DwrH.evaluateOnce = function () {
                        var hs_sat26DwrF = new $hs.Thunk();
                        hs_sat26DwrF.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziBuffer.hs_bufL.hscall(hs_buf126Dw2S);
                        };
                        var hs_sat26DwrG = new $hs.Thunk();
                        hs_sat26DwrG.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziBuffer.hs_bufRaw.hscall(hs_buf126Dw2S);
                        };
                        return $hs.modules.GHCziIOziBuffer.hs_readCharBuf.hscall(hs_sat26DwrG, hs_sat26DwrF);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwrH, hs_sat26DwrE);
                };
                var hs_sat26DwrK = new $hs.Thunk();
                hs_sat26DwrK.evaluateOnce = function () {
                    var hs_wild126DwrI = $hs.modules.GHCziIOziBuffer.hs_isEmptyBuffer.hscall(hs_buf026Dw2N);
                    switch (hs_wild126DwrI.tag) {
                    case 1:
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_buf026Dw2N);
                    case 2:
                        return $hs.modules.GHCziIOziHandleziInternals.hs_readTextDevice.hscall(hs_wild26Dw2P, hs_buf026Dw2N);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwrK, hs_sat26DwrJ);
            };
            var hs_sat26DwrM = new $hs.Thunk();
            hs_sat26DwrM.evaluateOnce = function () {
                return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a126Dw2K);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwrM, hs_sat26DwrL);
        };
        var hs_sat26DwrP = new $hs.Thunk();
        hs_sat26DwrP.evaluateOnce = function () {
            var hs_sat26DwrO = new $hs.Thunk();
            hs_sat26DwrO.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hGetChar\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_wantReadableHandlezu.hscall(hs_sat26DwrO, hs_handle26Dw2n);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DwrP, hs_sat26DwrN);
    };
    hs_unpack25uxlF.evaluate = function (hs_buf26Dw3Q, hs_r26Dw3U, hs_w26Dw3X, hs_acc026Dw4o) {
        var hs_buf126Dw43 = hs_buf26Dw3Q;
        if (hs_buf26Dw3Q.notEvaluated) {
            hs_buf126Dw43 = hs_buf26Dw3Q.hscall();
        }
        var hs_r126Dw40 = hs_r26Dw3U;
        if (hs_r26Dw3U.notEvaluated) {
            hs_r126Dw40 = hs_r26Dw3U.hscall();
        }
        var hs_w126Dw41 = hs_w26Dw3X;
        if (hs_w26Dw3X.notEvaluated) {
            hs_w126Dw41 = hs_w26Dw3X.hscall();
        }
        var hs_wild26DwrS = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_r126Dw40, hs_w126Dw41);
        switch (hs_wild26DwrS.tag) {
        case 1:
            var hs_sat26Dws4 = new $hs.Func(1);
            hs_sat26Dws4.evaluate = function (hs_pbuf26Dw4e) {
                var hs_unpackRB26Dw4j = new $hs.Func(2);
                hs_unpackRB26Dw4j.evaluate = function (hs_acc26Dw4i, hs_i26Dw49) {
                    var hs_i126Dw4c = hs_i26Dw49;
                    if (hs_i26Dw49.notEvaluated) {
                        hs_i126Dw4c = hs_i26Dw49.hscall();
                    }
                    var hs_wild126DwrQ = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_i126Dw4c, hs_r126Dw40);
                    switch (hs_wild126DwrQ.tag) {
                    case 1:
                        var hs_sat26Dws0 = new $hs.Func(1);
                        hs_sat26Dws0.evaluate = function (hs_c26Dw4h) {
                            var hs_sat26DwrY = new $hs.Thunk();
                            hs_sat26DwrY.evaluateOnce = function () {
                                var hs_sat26DwrX = new $hs.Data(1);
                                hs_sat26DwrX.data = [1];
                                return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_i126Dw4c, hs_sat26DwrX);
                            };
                            var hs_sat26DwrZ = new $hs.Data(2);
                            hs_sat26DwrZ.data = [hs_c26Dw4h, hs_acc26Dw4i];
                            return hs_unpackRB26Dw4j.hscall(hs_sat26DwrZ, hs_sat26DwrY);
                        };
                        var hs_sat26Dws1 = new $hs.Thunk();
                        hs_sat26Dws1.evaluateOnce = function () {
                            return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableChar, hs_pbuf26Dw4e, hs_i126Dw4c);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dws1, hs_sat26Dws0);
                    case 2:
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_acc26Dw4i);
                    }
                };
                var hs_sat26Dws3 = new $hs.Thunk();
                hs_sat26Dws3.evaluateOnce = function () {
                    var hs_sat26Dws2 = new $hs.Data(1);
                    hs_sat26Dws2.data = [1];
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_w126Dw41, hs_sat26Dws2);
                };
                return hs_unpackRB26Dw4j.hscall(hs_acc026Dw4o, hs_sat26Dws3);
            };
            var hs_sat26Dws5 = new $hs.Thunk();
            hs_sat26Dws5.evaluateOnce = function () {
                return $hs.modules.GHCziIOziBuffer.hs_withRawBuffer.hscall(hs_buf126Dw43);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dws5, hs_sat26Dws4);
        case 2:
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_acc026Dw4o);
        }
    };
    hs_unpackzunl25uxlH.evaluate = function (hs_buf26Dw4w, hs_r26Dw4A, hs_w26Dw4D, hs_acc026Dw5v) {
        var hs_buf126Dw4J = hs_buf26Dw4w;
        if (hs_buf26Dw4w.notEvaluated) {
            hs_buf126Dw4J = hs_buf26Dw4w.hscall();
        }
        var hs_r126Dw4G = hs_r26Dw4A;
        if (hs_r26Dw4A.notEvaluated) {
            hs_r126Dw4G = hs_r26Dw4A.hscall();
        }
        var hs_w126Dw4H = hs_w26Dw4D;
        if (hs_w26Dw4D.notEvaluated) {
            hs_w126Dw4H = hs_w26Dw4D.hscall();
        }
        var hs_wild26Dws8 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_r126Dw4G, hs_w126Dw4H);
        switch (hs_wild26Dws8.tag) {
        case 1:
            var hs_sat26DwsS = new $hs.Func(1);
            hs_sat26DwsS.evaluate = function (hs_pbuf26Dw4U) {
                var hs_unpackRB26Dw53 = new $hs.Func(2);
                hs_unpackRB26Dw53.evaluate = function (hs_acc26Dw52, hs_i26Dw4P) {
                    var hs_i126Dw4S = hs_i26Dw4P;
                    if (hs_i26Dw4P.notEvaluated) {
                        hs_i126Dw4S = hs_i26Dw4P.hscall();
                    }
                    var hs_wild126Dws6 = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_i126Dw4S, hs_r126Dw4G);
                    switch (hs_wild126Dws6.tag) {
                    case 1:
                        var hs_sat26Dwsy = new $hs.Func(1);
                        hs_sat26Dwsy.evaluate = function (hs_c26Dw4X) {
                            var hs_sat26Dwsd = new $hs.Thunk();
                            hs_sat26Dwsd.evaluateOnce = function () {
                                return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_i126Dw4S, hs_r126Dw4G);
                            };
                            var hs_sat26Dwsg = new $hs.Thunk();
                            hs_sat26Dwsg.evaluateOnce = function () {
                                var hs_sat26Dwse = new $hs.Data(1);
                                hs_sat26Dwse.data = ["\n"];
                                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c26Dw4X, hs_sat26Dwse);
                            };
                            var hs_wild226Dwsf = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dwsg, hs_sat26Dwsd);
                            switch (hs_wild226Dwsf.tag) {
                            case 1:
                                var hs_sat26Dwsi = new $hs.Thunk();
                                hs_sat26Dwsi.evaluateOnce = function () {
                                    var hs_sat26Dwsh = new $hs.Data(1);
                                    hs_sat26Dwsh.data = [1];
                                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_i126Dw4S, hs_sat26Dwsh);
                                };
                                var hs_sat26Dwsj = new $hs.Data(2);
                                hs_sat26Dwsj.data = [hs_c26Dw4X, hs_acc26Dw52];
                                return hs_unpackRB26Dw53.hscall(hs_sat26Dwsj, hs_sat26Dwsi);
                            case 2:
                                var hs_sat26Dwsu = new $hs.Func(1);
                                hs_sat26Dwsu.evaluate = function (hs_c126Dw5b) {
                                    var hs_sat26Dwsl = new $hs.Data(1);
                                    hs_sat26Dwsl.data = ["\r"];
                                    var hs_wild326Dwsk = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c126Dw5b, hs_sat26Dwsl);
                                    switch (hs_wild326Dwsk.tag) {
                                    case 1:
                                        var hs_sat26Dwsn = new $hs.Thunk();
                                        hs_sat26Dwsn.evaluateOnce = function () {
                                            var hs_sat26Dwsm = new $hs.Data(1);
                                            hs_sat26Dwsm.data = [1];
                                            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_i126Dw4S, hs_sat26Dwsm);
                                        };
                                        var hs_sat26Dwso = new $hs.Data(1);
                                        hs_sat26Dwso.data = ["\n"];
                                        var hs_sat26Dwsp = new $hs.Data(2);
                                        hs_sat26Dwsp.data = [hs_sat26Dwso, hs_acc26Dw52];
                                        return hs_unpackRB26Dw53.hscall(hs_sat26Dwsp, hs_sat26Dwsn);
                                    case 2:
                                        var hs_sat26Dwsr = new $hs.Thunk();
                                        hs_sat26Dwsr.evaluateOnce = function () {
                                            var hs_sat26Dwsq = new $hs.Data(1);
                                            hs_sat26Dwsq.data = [2];
                                            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_i126Dw4S, hs_sat26Dwsq);
                                        };
                                        var hs_sat26Dwss = new $hs.Data(1);
                                        hs_sat26Dwss.data = ["\n"];
                                        var hs_sat26Dwst = new $hs.Data(2);
                                        hs_sat26Dwst.data = [hs_sat26Dwss, hs_acc26Dw52];
                                        return hs_unpackRB26Dw53.hscall(hs_sat26Dwst, hs_sat26Dwsr);
                                    }
                                };
                                var hs_sat26Dwsx = new $hs.Thunk();
                                hs_sat26Dwsx.evaluateOnce = function () {
                                    var hs_sat26Dwsw = new $hs.Thunk();
                                    hs_sat26Dwsw.evaluateOnce = function () {
                                        var hs_sat26Dwsv = new $hs.Data(1);
                                        hs_sat26Dwsv.data = [1];
                                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_i126Dw4S, hs_sat26Dwsv);
                                    };
                                    return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableChar, hs_pbuf26Dw4U, hs_sat26Dwsw);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwsx, hs_sat26Dwsu);
                            }
                        };
                        var hs_sat26Dwsz = new $hs.Thunk();
                        hs_sat26Dwsz.evaluateOnce = function () {
                            return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableChar, hs_pbuf26Dw4U, hs_i126Dw4S);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwsz, hs_sat26Dwsy);
                    case 2:
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_acc26Dw52);
                    }
                };
                var hs_sat26DwsO = new $hs.Func(1);
                hs_sat26DwsO.evaluate = function (hs_c26Dw5s) {
                    var hs_sat26DwsB = new $hs.Data(1);
                    hs_sat26DwsB.data = ["\r"];
                    var hs_wild126DwsA = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c26Dw5s, hs_sat26DwsB);
                    switch (hs_wild126DwsA.tag) {
                    case 1:
                        var hs_sat26DwsD = new $hs.Func(1);
                        hs_sat26DwsD.evaluate = function (hs_str26Dw5A) {
                            var hs_sat26DwsC = new $hs.Data(1);
                            hs_sat26DwsC.data = [hs_str26Dw5A, hs_w126Dw4H];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwsC);
                        };
                        var hs_sat26DwsG = new $hs.Thunk();
                        hs_sat26DwsG.evaluateOnce = function () {
                            var hs_sat26DwsF = new $hs.Thunk();
                            hs_sat26DwsF.evaluateOnce = function () {
                                var hs_sat26DwsE = new $hs.Data(1);
                                hs_sat26DwsE.data = [1];
                                return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_w126Dw4H, hs_sat26DwsE);
                            };
                            return hs_unpackRB26Dw53.hscall(hs_acc026Dw5v, hs_sat26DwsF);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwsG, hs_sat26DwsD);
                    case 2:
                        var hs_sat26DwsK = new $hs.Func(1);
                        hs_sat26DwsK.evaluate = function (hs_str26Dw5H) {
                            var hs_sat26DwsI = new $hs.Thunk();
                            hs_sat26DwsI.evaluateOnce = function () {
                                var hs_sat26DwsH = new $hs.Data(1);
                                hs_sat26DwsH.data = [1];
                                return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_w126Dw4H, hs_sat26DwsH);
                            };
                            var hs_sat26DwsJ = new $hs.Data(1);
                            hs_sat26DwsJ.data = [hs_str26Dw5H, hs_sat26DwsI];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwsJ);
                        };
                        var hs_sat26DwsN = new $hs.Thunk();
                        hs_sat26DwsN.evaluateOnce = function () {
                            var hs_sat26DwsM = new $hs.Thunk();
                            hs_sat26DwsM.evaluateOnce = function () {
                                var hs_sat26DwsL = new $hs.Data(1);
                                hs_sat26DwsL.data = [2];
                                return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_w126Dw4H, hs_sat26DwsL);
                            };
                            return hs_unpackRB26Dw53.hscall(hs_acc026Dw5v, hs_sat26DwsM);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwsN, hs_sat26DwsK);
                    }
                };
                var hs_sat26DwsR = new $hs.Thunk();
                hs_sat26DwsR.evaluateOnce = function () {
                    var hs_sat26DwsQ = new $hs.Thunk();
                    hs_sat26DwsQ.evaluateOnce = function () {
                        var hs_sat26DwsP = new $hs.Data(1);
                        hs_sat26DwsP.data = [1];
                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_w126Dw4H, hs_sat26DwsP);
                    };
                    return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableChar, hs_pbuf26Dw4U, hs_sat26DwsQ);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwsR, hs_sat26DwsO);
            };
            var hs_sat26DwsT = new $hs.Thunk();
            hs_sat26DwsT.evaluateOnce = function () {
                return $hs.modules.GHCziIOziBuffer.hs_withRawBuffer.hscall(hs_buf126Dw4J);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DwsT, hs_sat26DwsS);
        case 2:
            var hs_sat26DwsU = new $hs.Data(1);
            hs_sat26DwsU.data = [0];
            var hs_sat26DwsV = new $hs.Data(1);
            hs_sat26DwsV.data = [hs_acc026Dw5v, hs_sat26DwsU];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwsV);
        }
    };
    hs_hGetLineBufferedLoop25uxlB.evaluate = function (hs_handlezu26Dw5T, hs_buf26Dw6e, hs_xss26Dw7Q) {
        var hs_wild26Dw7s = hs_handlezu26Dw5T;
        if (hs_handlezu26Dw5T.notEvaluated) {
            hs_wild26Dw7s = hs_handlezu26Dw5T.hscall();
        }
        var hs_rb226Dw6c = hs_wild26Dw7s.data[8];
        var hs_ds626Dw79 = hs_wild26Dw7s.data[13];
        var hs_a126Dw6d = new $hs.Data(1);
        hs_a126Dw6d.data = [hs_rb226Dw6c];
        var hs_wild126Dw7q = hs_buf26Dw6e;
        if (hs_buf26Dw6e.notEvaluated) {
            hs_wild126Dw7q = hs_buf26Dw6e.hscall();
        }
        var hs_rb426Dw6t = hs_wild126Dw7q.data[0];
        var hs_rb526Dw6u = hs_wild126Dw7q.data[1];
        var hs_rb726Dw6n = hs_wild126Dw7q.data[4];
        var hs_rb826Dw6q = hs_wild126Dw7q.data[5];
        var hs_r026Dw6o = new $hs.Data(1);
        hs_r026Dw6o.data = [hs_rb726Dw6n];
        var hs_w26Dw6r = new $hs.Data(1);
        hs_w26Dw6r.data = [hs_rb826Dw6q];
        var hs_raw026Dw6v = new $hs.Data(1);
        hs_raw026Dw6v.data = [hs_rb426Dw6t, hs_rb526Dw6u];
        var hs_sat26Dwu1 = new $hs.Func(1);
        hs_sat26Dwu1.evaluate = function (hs_ds1026Dw6S) {
            var hs_wild226Dwte = hs_ds1026Dw6S;
            if (hs_ds1026Dw6S.notEvaluated) {
                hs_wild226Dwte = hs_ds1026Dw6S.hscall();
            }
            var hs_eol26Dw7m = hs_wild226Dwte.data[0];
            var hs_off26Dw71 = hs_wild226Dwte.data[1];
            var hs_sat26DwtM = new $hs.Thunk();
            hs_sat26DwtM.evaluateOnce = function () {
                var hs_sat26DwtH = new $hs.Func(1);
                hs_sat26DwtH.evaluate = function (hs_ds1126Dw7i) {
                    var hs_wild326Dwtd = hs_ds1126Dw7i;
                    if (hs_ds1126Dw7i.notEvaluated) {
                        hs_wild326Dwtd = hs_ds1126Dw7i.hscall();
                    }
                    var hs_xs26Dw7P = hs_wild326Dwtd.data[0];
                    var hs_rzq26Dw7p = hs_wild326Dwtd.data[1];
                    var hs_wild426Dwtc = hs_eol26Dw7m;
                    if (hs_eol26Dw7m.notEvaluated) {
                        hs_wild426Dwtc = hs_eol26Dw7m.hscall();
                    }
                    switch (hs_wild426Dwtc.tag) {
                    case 1:
                        var hs_buf126Dw7r = new $hs.Thunk();
                        hs_buf126Dw7r.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziBuffer.hs_bufferAdjustL.hscall(hs_rzq26Dw7p, hs_wild126Dw7q);
                        };
                        var hs_sat26Dwtw = new $hs.Func(1);
                        hs_sat26Dwtw.evaluate = function (hs_maybezubuf26Dw7v) {
                            var hs_wild526Dwtf = hs_maybezubuf26Dw7v;
                            if (hs_maybezubuf26Dw7v.notEvaluated) {
                                hs_wild526Dwtf = hs_maybezubuf26Dw7v.hscall();
                            }
                            switch (hs_wild526Dwtf.tag) {
                            case 1:
                                var hs_sat26Dwtq = new $hs.Thunk();
                                hs_sat26Dwtq.evaluateOnce = function () {
                                    var hs_str26Dw7U = new $hs.Thunk();
                                    hs_str26Dw7U.evaluateOnce = function () {
                                        var hs_sat26Dwtm = new $hs.Thunk();
                                        hs_sat26Dwtm.evaluateOnce = function () {
                                            var hs_sat26Dwtg = new $hs.Data(2);
                                            hs_sat26Dwtg.data = [hs_xs26Dw7P, hs_xss26Dw7Q];
                                            var hs_sat26Dwtk = new $hs.Thunk();
                                            hs_sat26Dwtk.evaluateOnce = function () {
                                                var hs_sat26Dwti = new $hs.Thunk();
                                                hs_sat26Dwti.evaluateOnce = function () {
                                                    return $hs.modules.GHCziIOziBuffer.hs_isEmptyBuffer.hscall(hs_buf126Dw7r);
                                                };
                                                var hs_wild626Dwth = $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26Dwti);
                                                switch (hs_wild626Dwth.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    var hs_sat26Dwtj = new $hs.Data(1);
                                                    hs_sat26Dwtj.data = ["\r"];
                                                    var $res = new $hs.Data(2);
                                                    $res.data = [hs_sat26Dwtj, $hs.modules.GHCziTypes.hs_ZMZN];
                                                    return $res;
                                                }
                                            };
                                            var hs_sat26Dwtl = new $hs.Data(2);
                                            hs_sat26Dwtl.data = [hs_sat26Dwtk, hs_sat26Dwtg];
                                            return $hs.modules.GHCziList.hs_reverse.hscall(hs_sat26Dwtl);
                                        };
                                        return $hs.modules.GHCziList.hs_concat.hscall(hs_sat26Dwtm);
                                    };
                                    var hs_sat26Dwto = new $hs.Thunk();
                                    hs_sat26Dwto.evaluateOnce = function () {
                                        return $hs.modules.GHCziList.hs_null.hscall(hs_str26Dw7U);
                                    };
                                    var hs_wild626Dwtn = $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26Dwto);
                                    switch (hs_wild626Dwtn.tag) {
                                    case 1:
                                        if ($hs.modules.GHCziIOziHandleziInternals.hs_ioezuEOF.notEvaluated) {
                                            return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuEOF.hscall();
                                        } else {
                                            return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuEOF;
                                        }
                                    case 2:
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_str26Dw7U);
                                    }
                                };
                                var hs_sat26Dwtu = new $hs.Thunk();
                                hs_sat26Dwtu.evaluateOnce = function () {
                                    var hs_sat26Dwtt = new $hs.Thunk();
                                    hs_sat26Dwtt.evaluateOnce = function () {
                                        var hs_wild626Dwtp = hs_buf126Dw7r;
                                        if (hs_buf126Dw7r.notEvaluated) {
                                            hs_wild626Dwtp = hs_buf126Dw7r.hscall();
                                        }
                                        var hs_rb926Dw7E = hs_wild626Dwtp.data[0];
                                        var hs_rb1026Dw7F = hs_wild626Dwtp.data[1];
                                        var hs_ds1226Dw7G = hs_wild626Dwtp.data[2];
                                        var hs_rb1126Dw7H = hs_wild626Dwtp.data[3];
                                        var $res = new $hs.Data(1);
                                        $res.data = [hs_rb926Dw7E, hs_rb1026Dw7F, hs_ds1226Dw7G, hs_rb1126Dw7H, 0, 0];
                                        return $res;
                                    };
                                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126Dw6d, hs_sat26Dwtt);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwtu, hs_sat26Dwtq);
                            case 2:
                                var hs_newzubuf26Dw7Z = hs_wild526Dwtf.data[0];
                                var hs_sat26Dwtv = new $hs.Data(2);
                                hs_sat26Dwtv.data = [hs_xs26Dw7P, hs_xss26Dw7Q];
                                return hs_hGetLineBufferedLoop25uxlB.hscall(hs_wild26Dw7s, hs_newzubuf26Dw7Z, hs_sat26Dwtv);
                            }
                        };
                        var hs_sat26Dwtx = new $hs.Thunk();
                        hs_sat26Dwtx.evaluateOnce = function () {
                            return hs_maybeFillReadBuffer25uxlD.hscall(hs_wild26Dw7s, hs_buf126Dw7r);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwtx, hs_sat26Dwtw);
                    case 2:
                        var hs_sat26DwtB = new $hs.Thunk();
                        hs_sat26DwtB.evaluateOnce = function () {
                            var hs_sat26DwtA = new $hs.Thunk();
                            hs_sat26DwtA.evaluateOnce = function () {
                                var hs_sat26Dwtz = new $hs.Thunk();
                                hs_sat26Dwtz.evaluateOnce = function () {
                                    var hs_sat26Dwty = new $hs.Data(2);
                                    hs_sat26Dwty.data = [hs_xs26Dw7P, hs_xss26Dw7Q];
                                    return $hs.modules.GHCziList.hs_reverse.hscall(hs_sat26Dwty);
                                };
                                return $hs.modules.GHCziList.hs_concat.hscall(hs_sat26Dwtz);
                            };
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwtA);
                        };
                        var hs_sat26DwtF = new $hs.Thunk();
                        hs_sat26DwtF.evaluateOnce = function () {
                            var hs_sat26DwtE = new $hs.Thunk();
                            hs_sat26DwtE.evaluateOnce = function () {
                                var hs_sat26DwtD = new $hs.Thunk();
                                hs_sat26DwtD.evaluateOnce = function () {
                                    var hs_sat26DwtC = new $hs.Data(1);
                                    hs_sat26DwtC.data = [1];
                                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_off26Dw71, hs_sat26DwtC);
                                };
                                return $hs.modules.GHCziIOziBuffer.hs_bufferAdjustL.hscall(hs_sat26DwtD, hs_wild126Dw7q);
                            };
                            return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126Dw6d, hs_sat26DwtE);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwtF, hs_sat26DwtB);
                    }
                };
                var hs_sat26DwtL = new $hs.Thunk();
                hs_sat26DwtL.evaluateOnce = function () {
                    var hs_wild326DwtG = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfEqNewline, hs_ds626Dw79, $hs.modules.GHCziIOziHandleziTypes.hs_CRLF);
                    switch (hs_wild326DwtG.tag) {
                    case 1:
                        var hs_sat26DwtJ = new $hs.Func(1);
                        hs_sat26DwtJ.evaluate = function (hs_xs26Dw7d) {
                            var hs_sat26DwtI = new $hs.Data(1);
                            hs_sat26DwtI.data = [hs_xs26Dw7d, hs_off26Dw71];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwtI);
                        };
                        var hs_sat26DwtK = new $hs.Thunk();
                        hs_sat26DwtK.evaluateOnce = function () {
                            return hs_unpack25uxlF.hscall(hs_raw026Dw6v, hs_r026Dw6o, hs_off26Dw71, $hs.modules.GHCziTypes.hs_ZMZN);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwtK, hs_sat26DwtJ);
                    case 2:
                        return hs_unpackzunl25uxlH.hscall(hs_raw026Dw6v, hs_r026Dw6o, hs_off26Dw71, $hs.modules.GHCziTypes.hs_ZMZN);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwtL, hs_sat26DwtH);
            };
            var hs_sat26DwtY = new $hs.Thunk();
            hs_sat26DwtY.evaluateOnce = function () {
                var hs_sat26DwtX = new $hs.Thunk();
                hs_sat26DwtX.evaluateOnce = function () {
                    var hs_sat26DwtV = new $hs.Thunk();
                    hs_sat26DwtV.evaluateOnce = function () {
                        var hs_sat26DwtT = new $hs.Thunk();
                        hs_sat26DwtT.evaluateOnce = function () {
                            var hs_sat26DwtR = new $hs.Thunk();
                            hs_sat26DwtR.evaluateOnce = function () {
                                var hs_sat26DwtP = new $hs.Thunk();
                                hs_sat26DwtP.evaluateOnce = function () {
                                    var hs_sat26DwtN = new $hs.Thunk();
                                    hs_sat26DwtN.evaluateOnce = function () {
                                        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_off26Dw71);
                                    };
                                    var hs_sat26DwtO = new $hs.Thunk();
                                    hs_sat26DwtO.evaluateOnce = function () {
                                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall(", off=\x00");
                                    };
                                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DwtO, hs_sat26DwtN);
                                };
                                var hs_sat26DwtQ = new $hs.Thunk();
                                hs_sat26DwtQ.evaluateOnce = function () {
                                    return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_w26Dw6r);
                                };
                                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DwtQ, hs_sat26DwtP);
                            };
                            var hs_sat26DwtS = new $hs.Thunk();
                            hs_sat26DwtS.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall(", w=\x00");
                            };
                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DwtS, hs_sat26DwtR);
                        };
                        var hs_sat26DwtU = new $hs.Thunk();
                        hs_sat26DwtU.evaluateOnce = function () {
                            return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_r026Dw6o);
                        };
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DwtU, hs_sat26DwtT);
                    };
                    var hs_sat26DwtW = new $hs.Thunk();
                    hs_sat26DwtW.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hGetLineBufferedLoop: r=\x00");
                    };
                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DwtW, hs_sat26DwtV);
                };
                return $hs.modules.GHCziIOziHandleziInternals.hs_debugIO.hscall(hs_sat26DwtX);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwtY, hs_sat26DwtM);
        };
        var hs_sat26Dwu8 = new $hs.Thunk();
        hs_sat26Dwu8.evaluateOnce = function () {
            var hs_loop26Dw6M = new $hs.Func(2);
            hs_loop26Dw6M.evaluate = function (hs_raw26Dw6B, hs_r26Dw6z) {
                var hs_wild226Dwu0 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_r26Dw6z, hs_w26Dw6r);
                switch (hs_wild226Dwu0.tag) {
                case 1:
                    var hs_sat26Dwu5 = new $hs.Func(1);
                    hs_sat26Dwu5.evaluate = function (hs_ds1026Dw6E) {
                        var hs_wild326DwtZ = hs_ds1026Dw6E;
                        if (hs_ds1026Dw6E.notEvaluated) {
                            hs_wild326DwtZ = hs_ds1026Dw6E.hscall();
                        }
                        var hs_c26Dw6I = hs_wild326DwtZ.data[0];
                        var hs_rzq26Dw6L = hs_wild326DwtZ.data[1];
                        var hs_sat26Dwu3 = new $hs.Data(1);
                        hs_sat26Dwu3.data = ["\n"];
                        var hs_wild426Dwu2 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c26Dw6I, hs_sat26Dwu3);
                        switch (hs_wild426Dwu2.tag) {
                        case 1:
                            return hs_loop26Dw6M.hscall(hs_raw26Dw6B, hs_rzq26Dw6L);
                        case 2:
                            var hs_sat26Dwu4 = new $hs.Data(1);
                            hs_sat26Dwu4.data = [$hs.modules.GHCziBool.hs_True, hs_r26Dw6z];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwu4);
                        }
                    };
                    var hs_sat26Dwu6 = new $hs.Thunk();
                    hs_sat26Dwu6.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBuffer.hs_readCharBuf.hscall(hs_raw26Dw6B, hs_r26Dw6z);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwu6, hs_sat26Dwu5);
                case 2:
                    var hs_sat26Dwu7 = new $hs.Data(1);
                    hs_sat26Dwu7.data = [$hs.modules.GHCziBool.hs_False, hs_w26Dw6r];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwu7);
                }
            };
            return hs_loop26Dw6M.hscall(hs_raw026Dw6v, hs_r026Dw6o);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwu8, hs_sat26Dwu1);
    };
    this.hs_hGetLine.evaluate = function (hs_h26Dw8f) {
        var hs_sat26Dwur = new $hs.Func(1);
        hs_sat26Dwur.evaluate = function (hs_handlezu26Dw8i) {
            var hs_wild26Dw8E = hs_handlezu26Dw8i;
            if (hs_handlezu26Dw8i.notEvaluated) {
                hs_wild26Dw8E = hs_handlezu26Dw8i.hscall();
            }
            var hs_rb226Dw8A = hs_wild26Dw8E.data[8];
            var hs_sat26Dwuo = new $hs.Func(1);
            hs_sat26Dwuo.evaluate = function (hs_buf26Dw8F) {
                return hs_hGetLineBufferedLoop25uxlB.hscall(hs_wild26Dw8E, hs_buf26Dw8F, $hs.modules.GHCziTypes.hs_ZMZN);
            };
            var hs_sat26Dwuq = new $hs.Thunk();
            hs_sat26Dwuq.evaluateOnce = function () {
                var hs_sat26Dwup = new $hs.Data(1);
                hs_sat26Dwup.data = [hs_rb226Dw8A];
                return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_sat26Dwup);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwuq, hs_sat26Dwuo);
        };
        var hs_sat26Dwut = new $hs.Thunk();
        hs_sat26Dwut.evaluateOnce = function () {
            var hs_sat26Dwus = new $hs.Thunk();
            hs_sat26Dwus.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hGetLine\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_wantReadableHandlezu.hscall(hs_sat26Dwus, hs_h26Dw8f);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dwut, hs_sat26Dwur);
    };
    hs_lazzyRead25uxlL.evaluate = function (hs_handle26Dw8K) {
        var hs_sat26Dwvt = new $hs.Thunk();
        hs_sat26Dwvt.evaluateOnce = function () {
            var hs_sat26Dwvq = new $hs.Func(1);
            hs_sat26Dwvq.evaluate = function (hs_handlezu26Dw8N) {
                var hs_wild26Dwuu = $hs.modules.GHCziIOziHandleziTypes.hs_haType.hscall(hs_handlezu26Dw8N);
                switch (hs_wild26Dwuu.tag) {
                case 1:
                    var hs_sat26Dwuz = new $hs.Data(1);
                    hs_sat26Dwuz.data = [hs_handlezu26Dw8N, $hs.modules.GHCziTypes.hs_ZMZN];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwuz);
                case 2:
                    var hs_wild126Dw9g = hs_handlezu26Dw8N;
                    if (hs_handlezu26Dw8N.notEvaluated) {
                        hs_wild126Dw9g = hs_handlezu26Dw8N.hscall();
                    }
                    var hs_rb226Dw9c = hs_wild126Dw9g.data[8];
                    var hs_ds626Dw9E = hs_wild126Dw9g.data[13];
                    var hs_a126Dw9d = new $hs.Data(1);
                    hs_a126Dw9d.data = [hs_rb226Dw9c];
                    var hs_sat26Dwvo = new $hs.Func(1);
                    hs_sat26Dwvo.evaluate = function (hs_buf26Dw9h) {
                        var hs_sat26Dwv5 = new $hs.Func(1);
                        hs_sat26Dwv5.evaluate = function (hs_e26Dwab) {
                            var hs_sat26Dwv3 = new $hs.Func(1);
                            hs_sat26Dwv3.evaluate = function (hs_ds926Dwa6) {
                                var hs_wild226DwuP = hs_ds926Dwa6;
                                if (hs_ds926Dwa6.notEvaluated) {
                                    hs_wild226DwuP = hs_ds926Dwa6.hscall();
                                }
                                var hs_handlezuzq26Dwaf = hs_wild226DwuP.data[0];
                                var hs_sat26DwuY = new $hs.Thunk();
                                hs_sat26DwuY.evaluateOnce = function () {
                                    var hs_sat26DwuW = new $hs.Thunk();
                                    hs_sat26DwuW.evaluateOnce = function () {
                                        var hs_wild326DwuO = $hs.modules.SystemziIOziError.hs_isEOFError.hscall(hs_e26Dwab);
                                        switch (hs_wild326DwuO.tag) {
                                        case 1:
                                            var hs_sat26DwuS = new $hs.Thunk();
                                            hs_sat26DwuS.evaluateOnce = function () {
                                                var hs_sat26DwuR = new $hs.Thunk();
                                                hs_sat26DwuR.evaluateOnce = function () {
                                                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hGetContents\x00");
                                                };
                                                return $hs.modules.GHCziIOziHandleziInternals.hs_augmentIOError.hscall(hs_e26Dwab, hs_sat26DwuR, hs_handle26Dw8K);
                                            };
                                            return $hs.modules.GHCziException.hs_throw.hscall($hs.modules.GHCziIOziException.hs_zdfExceptionIOException, hs_sat26DwuS);
                                        case 2:
                                            var hs_sat26DwuU = new $hs.Thunk();
                                            hs_sat26DwuU.evaluateOnce = function () {
                                                return $hs.modules.GHCziIOziBuffer.hs_isEmptyBuffer.hscall(hs_buf26Dw9h);
                                            };
                                            var hs_wild426DwuT = $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DwuU);
                                            switch (hs_wild426DwuT.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_sat26DwuV = new $hs.Data(1);
                                                hs_sat26DwuV.data = ["\r"];
                                                var $res = new $hs.Data(2);
                                                $res.data = [hs_sat26DwuV, $hs.modules.GHCziTypes.hs_ZMZN];
                                                return $res;
                                            }
                                        }
                                    };
                                    var hs_sat26DwuX = new $hs.Data(1);
                                    hs_sat26DwuX.data = [hs_handlezuzq26Dwaf, hs_sat26DwuW];
                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwuX);
                                };
                                var hs_sat26Dwv2 = new $hs.Thunk();
                                hs_sat26Dwv2.evaluateOnce = function () {
                                    var hs_sat26Dwv1 = new $hs.Thunk();
                                    hs_sat26Dwv1.evaluateOnce = function () {
                                        var hs_sat26DwuZ = new $hs.Thunk();
                                        hs_sat26DwuZ.evaluateOnce = function () {
                                            return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziIOziException.hs_zdfShowIOException, hs_e26Dwab);
                                        };
                                        var hs_sat26Dwv0 = new $hs.Thunk();
                                        hs_sat26Dwv0.evaluateOnce = function () {
                                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hGetContents caught: \x00");
                                        };
                                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Dwv0, hs_sat26DwuZ);
                                    };
                                    return $hs.modules.GHCziIOziHandleziInternals.hs_debugIO.hscall(hs_sat26Dwv1);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwv2, hs_sat26DwuY);
                            };
                            var hs_sat26Dwv4 = new $hs.Thunk();
                            hs_sat26Dwv4.evaluateOnce = function () {
                                return $hs.modules.GHCziIOziHandleziInternals.hs_hClosezuhelp.hscall(hs_wild126Dw9g);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwv4, hs_sat26Dwv3);
                        };
                        var hs_sat26Dwvn = new $hs.Thunk();
                        hs_sat26Dwvn.evaluateOnce = function () {
                            var hs_sat26Dwvl = new $hs.Func(1);
                            hs_sat26Dwvl.evaluate = function (hs_bufzq26Dw9k) {
                                var hs_wild226Dw9T = hs_bufzq26Dw9k;
                                if (hs_bufzq26Dw9k.notEvaluated) {
                                    hs_wild226Dw9T = hs_bufzq26Dw9k.hscall();
                                }
                                var hs_rb426Dw9t = hs_wild226Dw9T.data[0];
                                var hs_rb526Dw9u = hs_wild226Dw9T.data[1];
                                var hs_rb726Dw9x = hs_wild226Dw9T.data[4];
                                var hs_rb826Dw9A = hs_wild226Dw9T.data[5];
                                var hs_bufRaw26Dw9v = new $hs.Data(1);
                                hs_bufRaw26Dw9v.data = [hs_rb426Dw9t, hs_rb526Dw9u];
                                var hs_bufL26Dw9y = new $hs.Data(1);
                                hs_bufL26Dw9y.data = [hs_rb726Dw9x];
                                var hs_bufR26Dw9B = new $hs.Data(1);
                                hs_bufR26Dw9B.data = [hs_rb826Dw9A];
                                var hs_sat26Dwvj = new $hs.Func(1);
                                hs_sat26Dwvj.evaluate = function (hs_lazzyzurest26Dw9G) {
                                    var hs_sat26Dwve = new $hs.Func(1);
                                    hs_sat26Dwve.evaluate = function (hs_ds1026Dw9O) {
                                        var hs_wild326Dwv8 = hs_ds1026Dw9O;
                                        if (hs_ds1026Dw9O.notEvaluated) {
                                            hs_wild326Dwv8 = hs_ds1026Dw9O.hscall();
                                        }
                                        var hs_s26Dw9W = hs_wild326Dwv8.data[0];
                                        var hs_r26Dw9S = hs_wild326Dwv8.data[1];
                                        var hs_sat26Dwva = new $hs.Thunk();
                                        hs_sat26Dwva.evaluateOnce = function () {
                                            var hs_sat26Dwv9 = new $hs.Data(1);
                                            hs_sat26Dwv9.data = [hs_wild126Dw9g, hs_s26Dw9W];
                                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwv9);
                                        };
                                        var hs_sat26Dwvc = new $hs.Thunk();
                                        hs_sat26Dwvc.evaluateOnce = function () {
                                            var hs_sat26Dwvb = new $hs.Thunk();
                                            hs_sat26Dwvb.evaluateOnce = function () {
                                                return $hs.modules.GHCziIOziBuffer.hs_bufferAdjustL.hscall(hs_r26Dw9S, hs_wild226Dw9T);
                                            };
                                            return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126Dw9d, hs_sat26Dwvb);
                                        };
                                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwvc, hs_sat26Dwva);
                                    };
                                    var hs_sat26Dwvi = new $hs.Thunk();
                                    hs_sat26Dwvi.evaluateOnce = function () {
                                        var hs_wild326Dwvd = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfEqNewline, hs_ds626Dw9E, $hs.modules.GHCziIOziHandleziTypes.hs_CRLF);
                                        switch (hs_wild326Dwvd.tag) {
                                        case 1:
                                            var hs_sat26Dwvg = new $hs.Func(1);
                                            hs_sat26Dwvg.evaluate = function (hs_s26Dw9J) {
                                                var hs_sat26Dwvf = new $hs.Data(1);
                                                hs_sat26Dwvf.data = [hs_s26Dw9J, hs_bufR26Dw9B];
                                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwvf);
                                            };
                                            var hs_sat26Dwvh = new $hs.Thunk();
                                            hs_sat26Dwvh.evaluateOnce = function () {
                                                return hs_unpack25uxlF.hscall(hs_bufRaw26Dw9v, hs_bufL26Dw9y, hs_bufR26Dw9B, hs_lazzyzurest26Dw9G);
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwvh, hs_sat26Dwvg);
                                        case 2:
                                            return hs_unpackzunl25uxlH.hscall(hs_bufRaw26Dw9v, hs_bufL26Dw9y, hs_bufR26Dw9B, hs_lazzyzurest26Dw9G);
                                        }
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwvi, hs_sat26Dwve);
                                };
                                var hs_sat26Dwvk = new $hs.Thunk();
                                hs_sat26Dwvk.evaluateOnce = function () {
                                    return hs_lazzyRead25uxlL.hscall(hs_handle26Dw8K);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwvk, hs_sat26Dwvj);
                            };
                            var hs_sat26Dwvm = new $hs.Thunk();
                            hs_sat26Dwvm.evaluateOnce = function () {
                                return hs_getSomeCharacters25uxlP.hscall(hs_wild126Dw9g, hs_buf26Dw9h);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwvm, hs_sat26Dwvl);
                        };
                        return $hs.modules.SystemziIOziError.hs_catch.hscall(hs_sat26Dwvn, hs_sat26Dwv5);
                    };
                    var hs_sat26Dwvp = new $hs.Thunk();
                    hs_sat26Dwvp.evaluateOnce = function () {
                        return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a126Dw9d);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwvp, hs_sat26Dwvo);
                default:
                    var hs_sat26Dwuv = new $hs.Thunk();
                    hs_sat26Dwuv.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("illegal handle type\x00");
                    };
                    var hs_sat26Dwuw = new $hs.Thunk();
                    hs_sat26Dwuw.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hGetContents\x00");
                    };
                    var hs_sat26Dwux = new $hs.Data(2);
                    hs_sat26Dwux.data = [hs_handle26Dw8K];
                    var hs_sat26Dwuy = new $hs.Data(1);
                    hs_sat26Dwuy.data = [hs_sat26Dwux, $hs.modules.GHCziIOziException.hs_IllegalOperation, hs_sat26Dwuw, hs_sat26Dwuv, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing];
                    return $hs.modules.GHCziIOziException.hs_ioException.hscall(hs_sat26Dwuy);
                }
            };
            var hs_sat26Dwvs = new $hs.Thunk();
            hs_sat26Dwvs.evaluateOnce = function () {
                var hs_sat26Dwvr = new $hs.Thunk();
                hs_sat26Dwvr.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hGetContents\x00");
                };
                return $hs.modules.GHCziIOziHandleziInternals.hs_withHandle.hscall(hs_sat26Dwvr, hs_handle26Dw8K);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dwvs, hs_sat26Dwvq);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_unsafeInterleaveIO, hs_sat26Dwvt);
    };
    this.hs_hGetContents.evaluate = function (hs_handle26Dwaw) {
        var hs_sat26DwvA = new $hs.Func(1);
        hs_sat26DwvA.evaluate = function (hs_handlezu26DwaB) {
            var hs_sat26Dwvy = new $hs.Func(1);
            hs_sat26Dwvy.evaluate = function (hs_xs26Dwb9) {
                var hs_sat26Dwvw = new $hs.Thunk();
                hs_sat26Dwvw.evaluateOnce = function () {
                    var hs_wild26Dwvu = hs_handlezu26DwaB;
                    if (hs_handlezu26DwaB.notEvaluated) {
                        hs_wild26Dwvu = hs_handlezu26DwaB.hscall();
                    }
                    var hs_ds26DwaT = hs_wild26Dwvu.data[0];
                    var hs_ds126DwaU = hs_wild26Dwvu.data[1];
                    var hs_ds226DwaV = hs_wild26Dwvu.data[2];
                    var hs_ds326DwaW = hs_wild26Dwvu.data[3];
                    var hs_rb26DwaX = hs_wild26Dwvu.data[5];
                    var hs_ds526DwaY = hs_wild26Dwvu.data[6];
                    var hs_rb126DwaZ = hs_wild26Dwvu.data[7];
                    var hs_rb226Dwb0 = hs_wild26Dwvu.data[8];
                    var hs_rb326Dwb1 = hs_wild26Dwvu.data[9];
                    var hs_ds626Dwb2 = hs_wild26Dwvu.data[10];
                    var hs_ds726Dwb3 = hs_wild26Dwvu.data[11];
                    var hs_ds826Dwb4 = hs_wild26Dwvu.data[12];
                    var hs_ds926Dwb5 = hs_wild26Dwvu.data[13];
                    var hs_ds1026Dwb6 = hs_wild26Dwvu.data[14];
                    var hs_ds1126Dwb7 = hs_wild26Dwvu.data[15];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_ds26DwaT, hs_ds126DwaU, hs_ds226DwaV, hs_ds326DwaW, $hs.modules.GHCziIOziHandleziTypes.hs_SemiClosedHandle, hs_rb26DwaX, hs_ds526DwaY, hs_rb126DwaZ, hs_rb226Dwb0, hs_rb326Dwb1, hs_ds626Dwb2, hs_ds726Dwb3, hs_ds826Dwb4, hs_ds926Dwb5, hs_ds1026Dwb6, hs_ds1126Dwb7];
                    return $res;
                };
                var hs_sat26Dwvx = new $hs.Data(1);
                hs_sat26Dwvx.data = [hs_sat26Dwvw, hs_xs26Dwb9];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwvx);
            };
            var hs_sat26Dwvz = new $hs.Thunk();
            hs_sat26Dwvz.evaluateOnce = function () {
                return hs_lazzyRead25uxlL.hscall(hs_handle26Dwaw);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwvz, hs_sat26Dwvy);
        };
        var hs_sat26DwvC = new $hs.Thunk();
        hs_sat26DwvC.evaluateOnce = function () {
            var hs_sat26DwvB = new $hs.Thunk();
            hs_sat26DwvB.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hGetContents\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_wantReadableHandle.hscall(hs_sat26DwvB, hs_handle26Dwaw);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DwvC, hs_sat26DwvA);
    };
    this.hs_hPutChar.evaluate = function (hs_handle26Dwbk, hs_c26Dwbf) {
        var hs_sat26Dwwx = new $hs.Thunk();
        hs_sat26Dwwx.evaluateOnce = function () {
            var hs_sat26Dwws = new $hs.Func(1);
            hs_sat26Dwws.evaluate = function (hs_handlezu26Dwbn) {
                var hs_wild26DwcA = hs_handlezu26Dwbn;
                if (hs_handlezu26Dwbn.notEvaluated) {
                    hs_wild26DwcA = hs_handlezu26Dwbn.hscall();
                }
                var hs_ds226Dwco = hs_wild26DwcA.data[6];
                var hs_rb226Dwcr = hs_wild26DwcA.data[8];
                var hs_ds726DwcF = hs_wild26DwcA.data[14];
                var hs_putc26Dwcm = new $hs.Func(2);
                hs_putc26Dwcm.evaluate = function (hs_buf26DwbI, hs_c126Dwc0) {
                    var hs_wild126DwbR = hs_buf26DwbI;
                    if (hs_buf26DwbI.notEvaluated) {
                        hs_wild126DwbR = hs_buf26DwbI.hscall();
                    }
                    var hs_rb426DwbV = hs_wild126DwbR.data[0];
                    var hs_rb526DwbW = hs_wild126DwbR.data[1];
                    var hs_rb826DwbY = hs_wild126DwbR.data[5];
                    var hs_sat26Dww1 = new $hs.Thunk();
                    hs_sat26Dww1.evaluateOnce = function () {
                        var hs_sat26DwvX = new $hs.Func(1);
                        hs_sat26DwvX.evaluate = function (hs_wzq26Dwca) {
                            var hs_sat26DwvW = new $hs.Thunk();
                            hs_sat26DwvW.evaluateOnce = function () {
                                var hs_wild226DwvE = hs_wild126DwbR;
                                if (hs_wild126DwbR.notEvaluated) {
                                    hs_wild226DwvE = hs_wild126DwbR.hscall();
                                }
                                var hs_rb926Dwcd = hs_wild226DwvE.data[0];
                                var hs_rb1026Dwce = hs_wild226DwvE.data[1];
                                var hs_ds1026Dwcf = hs_wild226DwvE.data[2];
                                var hs_rb1126Dwcg = hs_wild226DwvE.data[3];
                                var hs_rb1226Dwch = hs_wild226DwvE.data[4];
                                var hs_tpl26DwvD = hs_wzq26Dwca;
                                if (hs_wzq26Dwca.notEvaluated) {
                                    hs_tpl26DwvD = hs_wzq26Dwca.hscall();
                                }
                                var hs_tpl126Dwci = hs_tpl26DwvD.data[0];
                                var $res = new $hs.Data(1);
                                $res.data = [hs_rb926Dwcd, hs_rb1026Dwce, hs_ds1026Dwcf, hs_rb1126Dwcg, hs_rb1226Dwch, hs_tpl126Dwci];
                                return $res;
                            };
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwvW);
                        };
                        var hs_sat26Dww0 = new $hs.Thunk();
                        hs_sat26Dww0.evaluateOnce = function () {
                            var hs_sat26DwvY = new $hs.Data(1);
                            hs_sat26DwvY.data = [hs_rb826DwbY];
                            var hs_sat26DwvZ = new $hs.Data(1);
                            hs_sat26DwvZ.data = [hs_rb426DwbV, hs_rb526DwbW];
                            return $hs.modules.GHCziIOziBuffer.hs_writeCharBuf.hscall(hs_sat26DwvZ, hs_sat26DwvY, hs_c126Dwc0);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dww0, hs_sat26DwvX);
                    };
                    var hs_sat26Dww5 = new $hs.Thunk();
                    hs_sat26Dww5.evaluateOnce = function () {
                        var hs_sat26Dww4 = new $hs.Thunk();
                        hs_sat26Dww4.evaluateOnce = function () {
                            var hs_sat26Dww2 = new $hs.Thunk();
                            hs_sat26Dww2.evaluateOnce = function () {
                                return $hs.modules.GHCziIOziBuffer.hs_summaryBuffer.hscall(hs_wild126DwbR);
                            };
                            var hs_sat26Dww3 = new $hs.Thunk();
                            hs_sat26Dww3.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("putc: \x00");
                            };
                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Dww3, hs_sat26Dww2);
                        };
                        return $hs.modules.GHCziIOziHandleziInternals.hs_debugIO.hscall(hs_sat26Dww4);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dww5, hs_sat26Dww1);
                };
                var hs_iszuline26Dwcq = new $hs.Thunk();
                hs_iszuline26Dwcq.evaluateOnce = function () {
                    var hs_wild126Dww6 = hs_ds226Dwco;
                    if (hs_ds226Dwco.notEvaluated) {
                        hs_wild126Dww6 = hs_ds226Dwco.hscall();
                    }
                    switch (hs_wild126Dww6.tag) {
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
                var hs_sat26Dwwp = new $hs.Func(1);
                hs_sat26Dwwp.evaluate = function (hs_buf26Dwcx) {
                    var hs_sat26Dww8 = new $hs.Data(1);
                    hs_sat26Dww8.data = ["\n"];
                    var hs_wild126Dww7 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c26Dwbf, hs_sat26Dww8);
                    switch (hs_wild126Dww7.tag) {
                    case 1:
                        var hs_sat26Dwwb = new $hs.Func(1);
                        hs_sat26Dwwb.evaluate = function (hs_buf126DwcB) {
                            var hs_sat26Dww9 = new $hs.Thunk();
                            hs_sat26Dww9.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                            };
                            var hs_sat26Dwwa = new $hs.Thunk();
                            hs_sat26Dwwa.evaluateOnce = function () {
                                return $hs.modules.GHCziIOziHandleziInternals.hs_writeCharBuffer.hscall(hs_wild26DwcA, hs_buf126DwcB);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwwa, hs_sat26Dww9);
                        };
                        var hs_sat26Dwwc = new $hs.Thunk();
                        hs_sat26Dwwc.evaluateOnce = function () {
                            return hs_putc26Dwcm.hscall(hs_buf26Dwcx, hs_c26Dwbf);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwwc, hs_sat26Dwwb);
                    case 2:
                        var hs_sat26Dwwi = new $hs.Func(1);
                        hs_sat26Dwwi.evaluate = function (hs_buf126DwcQ) {
                            var hs_sat26Dwwf = new $hs.Thunk();
                            hs_sat26Dwwf.evaluateOnce = function () {
                                var hs_sat26Dwwd = new $hs.Thunk();
                                hs_sat26Dwwd.evaluateOnce = function () {
                                    return $hs.modules.GHCziIOziHandleziInternals.hs_flushByteWriteBuffer.hscall(hs_wild26DwcA);
                                };
                                var hs_sat26Dwwe = new $hs.Thunk();
                                hs_sat26Dwwe.evaluateOnce = function () {
                                    return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_iszuline26Dwcq);
                                };
                                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dwwe, hs_sat26Dwwd);
                            };
                            var hs_sat26Dwwg = new $hs.Thunk();
                            hs_sat26Dwwg.evaluateOnce = function () {
                                return $hs.modules.GHCziIOziHandleziInternals.hs_writeCharBuffer.hscall(hs_wild26DwcA, hs_buf126DwcQ);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwwg, hs_sat26Dwwf);
                        };
                        var hs_sat26Dwwo = new $hs.Thunk();
                        hs_sat26Dwwo.evaluateOnce = function () {
                            var hs_wild226Dwwh = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfEqNewline, hs_ds726DwcF, $hs.modules.GHCziIOziHandleziTypes.hs_CRLF);
                            switch (hs_wild226Dwwh.tag) {
                            case 1:
                                var hs_sat26Dwwj = new $hs.Data(1);
                                hs_sat26Dwwj.data = ["\n"];
                                return hs_putc26Dwcm.hscall(hs_buf26Dwcx, hs_sat26Dwwj);
                            case 2:
                                var hs_sat26Dwwl = new $hs.Func(1);
                                hs_sat26Dwwl.evaluate = function (hs_buf126DwcL) {
                                    var hs_sat26Dwwk = new $hs.Data(1);
                                    hs_sat26Dwwk.data = ["\n"];
                                    return hs_putc26Dwcm.hscall(hs_buf126DwcL, hs_sat26Dwwk);
                                };
                                var hs_sat26Dwwn = new $hs.Thunk();
                                hs_sat26Dwwn.evaluateOnce = function () {
                                    var hs_sat26Dwwm = new $hs.Data(1);
                                    hs_sat26Dwwm.data = ["\r"];
                                    return hs_putc26Dwcm.hscall(hs_buf26Dwcx, hs_sat26Dwwm);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwwn, hs_sat26Dwwl);
                            }
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwwo, hs_sat26Dwwi);
                    }
                };
                var hs_sat26Dwwr = new $hs.Thunk();
                hs_sat26Dwwr.evaluateOnce = function () {
                    var hs_sat26Dwwq = new $hs.Data(1);
                    hs_sat26Dwwq.data = [hs_rb226Dwcr];
                    return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_sat26Dwwq);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwwr, hs_sat26Dwwp);
            };
            var hs_sat26Dwwu = new $hs.Thunk();
            hs_sat26Dwwu.evaluateOnce = function () {
                var hs_sat26Dwwt = new $hs.Thunk();
                hs_sat26Dwwt.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hPutChar\x00");
                };
                return $hs.modules.GHCziIOziHandleziInternals.hs_wantWritableHandle.hscall(hs_sat26Dwwt, hs_handle26Dwbk);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dwwu, hs_sat26Dwws);
        };
        var hs_sat26Dwwy = new $hs.Thunk();
        hs_sat26Dwwy.evaluateOnce = function () {
            var hs_c126Dwww = hs_c26Dwbf;
            if (hs_c26Dwbf.notEvaluated) {
                hs_c126Dwww = hs_c26Dwbf.hscall();
            }
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwwy, hs_sat26Dwwx);
    };
    hs_hPutChars25uxm1.evaluate = function (hs_ds26Dwd5, hs_ds126Dwd1) {
        var hs_wild26Dwwz = hs_ds126Dwd1;
        if (hs_ds126Dwd1.notEvaluated) {
            hs_wild26Dwwz = hs_ds126Dwd1.hscall();
        }
        switch (hs_wild26Dwwz.tag) {
        case 1:
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        case 2:
            var hs_c26Dwd6 = hs_wild26Dwwz.data[0];
            var hs_cs26Dwd8 = hs_wild26Dwwz.data[1];
            var hs_sat26DwwA = new $hs.Thunk();
            hs_sat26DwwA.evaluateOnce = function () {
                return hs_hPutChars25uxm1.hscall(hs_ds26Dwd5, hs_cs26Dwd8);
            };
            var hs_sat26DwwB = new $hs.Thunk();
            hs_sat26DwwB.evaluateOnce = function () {
                return $hs.modules.GHCziIOziHandleziText.hs_hPutChar.hscall(hs_ds26Dwd5, hs_c26Dwd6);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwwB, hs_sat26DwwA);
        }
    };
    hs_writeBlocks25uxm5.evaluate = function (hs_hdl26DwdG, hs_linezubuffered26Dwe9, hs_addzunl26Dwem, hs_nl26DwdZ, hs_buf26Dwdg, hs_s26Dwel) {
        var hs_wild26DwwC = hs_buf26Dwdg;
        if (hs_buf26Dwdg.notEvaluated) {
            hs_wild26DwwC = hs_buf26Dwdg.hscall();
        }
        var hs_rb26Dwdp = hs_wild26DwwC.data[0];
        var hs_rb126Dwdq = hs_wild26DwwC.data[1];
        var hs_rb226Dwdt = hs_wild26DwwC.data[3];
        var hs_raw26Dwdr = new $hs.Data(1);
        hs_raw26Dwdr.data = [hs_rb26Dwdp, hs_rb126Dwdq];
        var hs_len26Dwdu = new $hs.Data(1);
        hs_len26Dwdu.data = [hs_rb226Dwdt];
        var hs_shoveString26DwdL = new $hs.Func(3);
        hs_shoveString26DwdL.evaluate = function (hs_n26Dwdz, hs_ds126DwdC, hs_ds226DwdE) {
            var hs_n126DwdH = hs_n26Dwdz;
            if (hs_n26Dwdz.notEvaluated) {
                hs_n126DwdH = hs_n26Dwdz.hscall();
            }
            var hs_wild126DwwG = hs_ds126DwdC;
            if (hs_ds126DwdC.notEvaluated) {
                hs_wild126DwwG = hs_ds126DwdC.hscall();
            }
            switch (hs_wild126DwwG.tag) {
            case 1:
                var hs_wild226DwdK = hs_ds226DwdE;
                if (hs_ds226DwdE.notEvaluated) {
                    hs_wild226DwdK = hs_ds226DwdE.hscall();
                }
                switch (hs_wild226DwdK.tag) {
                case 1:
                    return hs_commitBuffer25uxm7.hscall(hs_hdl26DwdG, hs_raw26Dwdr, hs_len26Dwdu, hs_n126DwdH, $hs.modules.GHCziBool.hs_False, $hs.modules.GHCziBool.hs_True);
                case 2:
                    return hs_shoveString26DwdL.hscall(hs_n126DwdH, hs_wild226DwdK, $hs.modules.GHCziTypes.hs_ZMZN);
                }
            case 2:
                var hs_c26DwdR = hs_wild126DwwG.data[0];
                var hs_cs26DwdX = hs_wild126DwwG.data[1];
                var hs_sat26DwwM = new $hs.Thunk();
                hs_sat26DwwM.evaluateOnce = function () {
                    var hs_sat26DwwK = new $hs.Data(1);
                    hs_sat26DwwK.data = [1];
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n126DwdH, hs_sat26DwwK);
                };
                var hs_wild226DwwL = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_sat26DwwM, hs_len26Dwdu);
                switch (hs_wild226DwwL.tag) {
                case 1:
                    var hs_sat26DwwO = new $hs.Data(1);
                    hs_sat26DwwO.data = ["\n"];
                    var hs_wild326DwwN = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c26DwdR, hs_sat26DwwO);
                    switch (hs_wild326DwwN.tag) {
                    case 1:
                        var hs_sat26DwwP = new $hs.Func(1);
                        hs_sat26DwwP.evaluate = function (hs_nzq26DwdW) {
                            return hs_shoveString26DwdL.hscall(hs_nzq26DwdW, hs_cs26DwdX, hs_ds226DwdE);
                        };
                        var hs_sat26DwwQ = new $hs.Thunk();
                        hs_sat26DwwQ.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziBuffer.hs_writeCharBuf.hscall(hs_raw26Dwdr, hs_n126DwdH, hs_c26DwdR);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwwQ, hs_sat26DwwP);
                    case 2:
                        var hs_sat26DwwW = new $hs.Func(1);
                        hs_sat26DwwW.evaluate = function (hs_nzq26Dweb) {
                            var hs_wild426DwwR = hs_linezubuffered26Dwe9;
                            if (hs_linezubuffered26Dwe9.notEvaluated) {
                                hs_wild426DwwR = hs_linezubuffered26Dwe9.hscall();
                            }
                            switch (hs_wild426DwwR.tag) {
                            case 1:
                                return hs_shoveString26DwdL.hscall(hs_nzq26Dweb, hs_cs26DwdX, hs_ds226DwdE);
                            case 2:
                                var hs_sat26DwwT = new $hs.Thunk();
                                hs_sat26DwwT.evaluateOnce = function () {
                                    var hs_sat26DwwS = new $hs.Data(1);
                                    hs_sat26DwwS.data = [0];
                                    return hs_shoveString26DwdL.hscall(hs_sat26DwwS, hs_cs26DwdX, hs_ds226DwdE);
                                };
                                var hs_sat26DwwU = new $hs.Thunk();
                                hs_sat26DwwU.evaluateOnce = function () {
                                    return hs_commitBuffer25uxm7.hscall(hs_hdl26DwdG, hs_raw26Dwdr, hs_len26Dwdu, hs_nzq26Dweb, $hs.modules.GHCziBool.hs_True, $hs.modules.GHCziBool.hs_False);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwwU, hs_sat26DwwT);
                            }
                        };
                        var hs_sat26Dwx1 = new $hs.Thunk();
                        hs_sat26Dwx1.evaluateOnce = function () {
                            var hs_wild426DwwV = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfEqNewline, hs_nl26DwdZ, $hs.modules.GHCziIOziHandleziTypes.hs_CRLF);
                            switch (hs_wild426DwwV.tag) {
                            case 1:
                                return $hs.modules.GHCziIOziBuffer.hs_writeCharBuf.hscall(hs_raw26Dwdr, hs_n126DwdH, hs_c26DwdR);
                            case 2:
                                var hs_sat26DwwY = new $hs.Func(1);
                                hs_sat26DwwY.evaluate = function (hs_n226Dwe4) {
                                    var hs_sat26DwwX = new $hs.Data(1);
                                    hs_sat26DwwX.data = ["\n"];
                                    return $hs.modules.GHCziIOziBuffer.hs_writeCharBuf.hscall(hs_raw26Dwdr, hs_n226Dwe4, hs_sat26DwwX);
                                };
                                var hs_sat26Dwx0 = new $hs.Thunk();
                                hs_sat26Dwx0.evaluateOnce = function () {
                                    var hs_sat26DwwZ = new $hs.Data(1);
                                    hs_sat26DwwZ.data = ["\r"];
                                    return $hs.modules.GHCziIOziBuffer.hs_writeCharBuf.hscall(hs_raw26Dwdr, hs_n126DwdH, hs_sat26DwwZ);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwx0, hs_sat26DwwY);
                            }
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwx1, hs_sat26DwwW);
                    }
                case 2:
                    var hs_sat26Dwx4 = new $hs.Thunk();
                    hs_sat26Dwx4.evaluateOnce = function () {
                        var hs_sat26Dwx2 = new $hs.Data(2);
                        hs_sat26Dwx2.data = [hs_c26DwdR, hs_cs26DwdX];
                        var hs_sat26Dwx3 = new $hs.Data(1);
                        hs_sat26Dwx3.data = [0];
                        return hs_shoveString26DwdL.hscall(hs_sat26Dwx3, hs_sat26Dwx2, hs_ds226DwdE);
                    };
                    var hs_sat26Dwx5 = new $hs.Thunk();
                    hs_sat26Dwx5.evaluateOnce = function () {
                        return hs_commitBuffer25uxm7.hscall(hs_hdl26DwdG, hs_raw26Dwdr, hs_len26Dwdu, hs_n126DwdH, $hs.modules.GHCziBool.hs_False, $hs.modules.GHCziBool.hs_False);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwx5, hs_sat26Dwx4);
                }
            }
        };
        var hs_sat26Dwx8 = new $hs.Thunk();
        hs_sat26Dwx8.evaluateOnce = function () {
            var hs_wild126Dwx6 = hs_addzunl26Dwem;
            if (hs_addzunl26Dwem.notEvaluated) {
                hs_wild126Dwx6 = hs_addzunl26Dwem.hscall();
            }
            switch (hs_wild126Dwx6.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_sat26Dwx7 = new $hs.Data(1);
                hs_sat26Dwx7.data = ["\n"];
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26Dwx7, $hs.modules.GHCziTypes.hs_ZMZN];
                return $res;
            }
        };
        var hs_sat26Dwx9 = new $hs.Data(1);
        hs_sat26Dwx9.data = [0];
        return hs_shoveString26DwdL.hscall(hs_sat26Dwx9, hs_s26Dwel, hs_sat26Dwx8);
    };
    hs_hPutStrzq25uxlZ.evaluate = function (hs_handle26Dweu, hs_str26DwfI, hs_addzunl26DwfK) {
        var hs_sat26Dwxj = new $hs.Func(1);
        hs_sat26Dwxj.evaluate = function (hs_ds26Dwfy) {
            var hs_wild26Dwxc = hs_ds26Dwfy;
            if (hs_ds26Dwfy.notEvaluated) {
                hs_wild26Dwxc = hs_ds26Dwfy.hscall();
            }
            var hs_bufferzumode26DwfC = hs_wild26Dwxc.data[0];
            var hs_nl26DwfP = hs_wild26Dwxc.data[1];
            var hs_wild126Dwxb = hs_bufferzumode26DwfC;
            if (hs_bufferzumode26DwfC.notEvaluated) {
                hs_wild126Dwxb = hs_bufferzumode26DwfC.hscall();
            }
            var hs_ds126DwfG = hs_wild126Dwxb.data[0];
            var hs_ds226DwfQ = hs_wild126Dwxb.data[1];
            var hs_wild226Dwxa = hs_ds126DwfG;
            if (hs_ds126DwfG.notEvaluated) {
                hs_wild226Dwxa = hs_ds126DwfG.hscall();
            }
            switch (hs_wild226Dwxa.tag) {
            case 1:
                var hs_sat26Dwxg = new $hs.Thunk();
                hs_sat26Dwxg.evaluateOnce = function () {
                    var hs_sat26Dwxe = new $hs.Thunk();
                    hs_sat26Dwxe.evaluateOnce = function () {
                        var hs_sat26Dwxd = new $hs.Data(1);
                        hs_sat26Dwxd.data = ["\n"];
                        return $hs.modules.GHCziIOziHandleziText.hs_hPutChar.hscall(hs_handle26Dweu, hs_sat26Dwxd);
                    };
                    var hs_sat26Dwxf = new $hs.Thunk();
                    hs_sat26Dwxf.evaluateOnce = function () {
                        return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_addzunl26DwfK);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dwxf, hs_sat26Dwxe);
                };
                var hs_sat26Dwxh = new $hs.Thunk();
                hs_sat26Dwxh.evaluateOnce = function () {
                    return hs_hPutChars25uxm1.hscall(hs_handle26Dweu, hs_str26DwfI);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwxh, hs_sat26Dwxg);
            case 2:
                return hs_writeBlocks25uxm5.hscall(hs_handle26Dweu, $hs.modules.GHCziBool.hs_True, hs_addzunl26DwfK, hs_nl26DwfP, hs_ds226DwfQ, hs_str26DwfI);
            case 3:
                return hs_writeBlocks25uxm5.hscall(hs_handle26Dweu, $hs.modules.GHCziBool.hs_False, hs_addzunl26DwfK, hs_nl26DwfP, hs_ds226DwfQ, hs_str26DwfI);
            }
        };
        var hs_sat26DwxW = new $hs.Thunk();
        hs_sat26DwxW.evaluateOnce = function () {
            var hs_sat26DwxT = new $hs.Func(1);
            hs_sat26DwxT.evaluate = function (hs_hzu26Dwex) {
                var hs_sat26Dwxo = new $hs.Func(1);
                hs_sat26Dwxo.evaluate = function (hs_bmode26Dwfr) {
                    var hs_sat26Dwxk = new $hs.Thunk();
                    hs_sat26Dwxk.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziHandleziTypes.hs_haOutputNL.hscall(hs_hzu26Dwex);
                    };
                    var hs_sat26Dwxl = new $hs.Data(1);
                    hs_sat26Dwxl.data = [hs_bmode26Dwfr, hs_sat26Dwxk];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dwxl);
                };
                var hs_sat26DwxS = new $hs.Thunk();
                hs_sat26DwxS.evaluateOnce = function () {
                    var hs_wild26Dwxn = hs_hzu26Dwex;
                    if (hs_hzu26Dwex.notEvaluated) {
                        hs_wild26Dwxn = hs_hzu26Dwex.hscall();
                    }
                    var hs_ds226DweV = hs_wild26Dwxn.data[6];
                    var hs_rb226DweQ = hs_wild26Dwxn.data[8];
                    var hs_rb326DweT = hs_wild26Dwxn.data[9];
                    var hs_a126DweR = new $hs.Data(1);
                    hs_a126DweR.data = [hs_rb226DweQ];
                    var hs_a226DweU = new $hs.Data(1);
                    hs_a226DweU.data = [hs_rb326DweT];
                    var hs_wild126Dwf7 = hs_ds226DweV;
                    if (hs_ds226DweV.notEvaluated) {
                        hs_wild126Dwf7 = hs_ds226DweV.hscall();
                    }
                    switch (hs_wild126Dwf7.tag) {
                    case 1:
                        var hs_sat26DwxQ = new $hs.Thunk();
                        hs_sat26DwxQ.evaluateOnce = function () {
                            var hs_sat26DwxP = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("no buffer!\x00");
                            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DwxP);
                        };
                        var hs_sat26DwxR = new $hs.Data(1);
                        hs_sat26DwxR.data = [$hs.modules.GHCziIOziHandleziTypes.hs_NoBuffering, hs_sat26DwxQ];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwxR);
                    default:
                        var hs_sat26DwxN = new $hs.Func(1);
                        hs_sat26DwxN.evaluate = function (hs_bufs26Dwf1) {
                            var hs_sat26DwxL = new $hs.Func(1);
                            hs_sat26DwxL.evaluate = function (hs_buf26Dwf3) {
                                var hs_wild226DwxB = hs_bufs26Dwf1;
                                if (hs_bufs26Dwf1.notEvaluated) {
                                    hs_wild226DwxB = hs_bufs26Dwf1.hscall();
                                }
                                switch (hs_wild226DwxB.tag) {
                                case 1:
                                    var hs_sat26DwxD = new $hs.Func(1);
                                    hs_sat26DwxD.evaluate = function (hs_newzubuf26Dwf8) {
                                        var hs_sat26DwxC = new $hs.Data(1);
                                        hs_sat26DwxC.data = [hs_wild126Dwf7, hs_newzubuf26Dwf8];
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwxC);
                                    };
                                    var hs_sat26DwxF = new $hs.Thunk();
                                    hs_sat26DwxF.evaluateOnce = function () {
                                        var hs_sat26DwxE = new $hs.Thunk();
                                        hs_sat26DwxE.evaluateOnce = function () {
                                            return $hs.modules.GHCziIOziBuffer.hs_bufSizze.hscall(hs_buf26Dwf3);
                                        };
                                        return $hs.modules.GHCziIOziBuffer.hs_newCharBuffer.hscall(hs_sat26DwxE, $hs.modules.GHCziIOziBuffer.hs_WriteBuffer);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwxF, hs_sat26DwxD);
                                case 2:
                                    var hs_b26Dwff = hs_wild226DwxB.data[0];
                                    var hs_rest26Dwfd = hs_wild226DwxB.data[1];
                                    var hs_sat26DwxJ = new $hs.Thunk();
                                    hs_sat26DwxJ.evaluateOnce = function () {
                                        var hs_sat26DwxH = new $hs.Thunk();
                                        hs_sat26DwxH.evaluateOnce = function () {
                                            var hs_sat26DwxG = new $hs.Thunk();
                                            hs_sat26DwxG.evaluateOnce = function () {
                                                return $hs.modules.GHCziIOziBuffer.hs_bufSizze.hscall(hs_buf26Dwf3);
                                            };
                                            return $hs.modules.GHCziIOziBuffer.hs_emptyBuffer.hscall(hs_b26Dwff, hs_sat26DwxG, $hs.modules.GHCziIOziBuffer.hs_WriteBuffer);
                                        };
                                        var hs_sat26DwxI = new $hs.Data(1);
                                        hs_sat26DwxI.data = [hs_wild126Dwf7, hs_sat26DwxH];
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwxI);
                                    };
                                    var hs_sat26DwxK = new $hs.Thunk();
                                    hs_sat26DwxK.evaluateOnce = function () {
                                        return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a226DweU, hs_rest26Dwfd);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwxK, hs_sat26DwxJ);
                                }
                            };
                            var hs_sat26DwxM = new $hs.Thunk();
                            hs_sat26DwxM.evaluateOnce = function () {
                                return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a126DweR);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwxM, hs_sat26DwxL);
                        };
                        var hs_sat26DwxO = new $hs.Thunk();
                        hs_sat26DwxO.evaluateOnce = function () {
                            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a226DweU);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwxO, hs_sat26DwxN);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwxS, hs_sat26Dwxo);
            };
            var hs_sat26DwxV = new $hs.Thunk();
            hs_sat26DwxV.evaluateOnce = function () {
                var hs_sat26DwxU = new $hs.Thunk();
                hs_sat26DwxU.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hPutStr\x00");
                };
                return $hs.modules.GHCziIOziHandleziInternals.hs_wantWritableHandle.hscall(hs_sat26DwxU, hs_handle26Dweu);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DwxV, hs_sat26DwxT);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DwxW, hs_sat26Dwxj);
    };
    this.hs_hPutStr.evaluate = function (hs_handle26DwfV, hs_str26DwfW) {
        return hs_hPutStrzq25uxlZ.hscall(hs_handle26DwfV, hs_str26DwfW, $hs.modules.GHCziBool.hs_False);
    };
    this.hs_hPutStrLn.evaluate = function (hs_handle26DwfZ, hs_str26Dwg0) {
        return hs_hPutStrzq25uxlZ.hscall(hs_handle26DwfZ, hs_str26Dwg0, $hs.modules.GHCziBool.hs_True);
    };
};
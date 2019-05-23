
$hs.modules.SystemziIO = new $hs.Module();
$hs.modules.SystemziIO.dependencies = ["GHC.Prim", "GHC.Types", "GHC.Bool", "GHC.Integer", "Data.Maybe", "GHC.Base", "Text.Read", "GHC.Num", "GHC.Show", "GHC.Err", "GHC.Exception", "GHC.Classes", "GHC.IO", "GHC.IO.IOMode", "GHC.IO.FD", "GHC.IO.Exception", "GHC.IO.Encoding", "GHC.IO.Handle", "GHC.IO.Handle.FD", "GHC.IO.Handle.Text", "GHC.IORef", "GHC.List", "GHC.Read", "Control.Exception.Base", "Data.Bits", "Foreign.C.Error", "Foreign.C.Types", "System.Posix.Internals", "System.Posix.Types"];
$hs.modules.SystemziIO.initBeforeDependencies = function () {
    this.hs_fixIO = new $hs.Func(1);
    this.hs_withBinaryFile = new $hs.Func(2);
    this.hs_withFile = new $hs.Func(2);
    this.hs_hPrint = new $hs.Func(2);
    this.hs_hReady = new $hs.Func(1);
    this.hs_readIO = new $hs.Func(2);
    this.hs_appendFile = new $hs.Func(2);
    this.hs_writeFile = new $hs.Func(2);
    this.hs_getContents = new $hs.Thunk();
    this.hs_getLine = new $hs.Thunk();
    this.hs_readLn = new $hs.Func(1);
    this.hs_getChar = new $hs.Thunk();
    this.hs_putStrLn = new $hs.Func(1);
    this.hs_putStr = new $hs.Func(1);
    this.hs_putChar = new $hs.Func(1);
    this.hs_interact = new $hs.Func(1);
    this.hs_readFile = new $hs.Func(1);
    this.hs_openTempFile = new $hs.Func(2);
    this.hs_openBinaryTempFile = new $hs.Func(2);
    this.hs_openTempFileWithDefaultPermissions = new $hs.Func(2);
    this.hs_openBinaryTempFileWithDefaultPermissions = new $hs.Func(2);
    this.hs_print = new $hs.Func(2);
    this.hs_fixIO.notEvaluated = true;
    this.hs_fixIO.evaluate = function (hs_k26D6t8) {
        $hs.modules.SystemziIO.loadDependencies();
        return this.evaluate(hs_k26D6t8);
    };
    this.hs_withBinaryFile.notEvaluated = true;
    this.hs_withBinaryFile.evaluate = function (hs_name26D6tj, hs_mode26D6tk) {
        $hs.modules.SystemziIO.loadDependencies();
        return this.evaluate(hs_name26D6tj, hs_mode26D6tk);
    };
    this.hs_withFile.notEvaluated = true;
    this.hs_withFile.evaluate = function (hs_name26D6to, hs_mode26D6tp) {
        $hs.modules.SystemziIO.loadDependencies();
        return this.evaluate(hs_name26D6to, hs_mode26D6tp);
    };
    this.hs_hPrint.notEvaluated = true;
    this.hs_hPrint.evaluate = function (hs_zddShow26D6tv, hs_hdl26D6tt) {
        $hs.modules.SystemziIO.loadDependencies();
        return this.evaluate(hs_zddShow26D6tv, hs_hdl26D6tt);
    };
    this.hs_hReady.notEvaluated = true;
    this.hs_hReady.evaluate = function (hs_h26D6ty) {
        $hs.modules.SystemziIO.loadDependencies();
        return this.evaluate(hs_h26D6ty);
    };
    this.hs_readIO.notEvaluated = true;
    this.hs_readIO.evaluate = function (hs_zddRead26D6tC, hs_s26D6tD) {
        $hs.modules.SystemziIO.loadDependencies();
        return this.evaluate(hs_zddRead26D6tC, hs_s26D6tD);
    };
    this.hs_appendFile.notEvaluated = true;
    this.hs_appendFile.evaluate = function (hs_f26D6ul, hs_txt26D6up) {
        $hs.modules.SystemziIO.loadDependencies();
        return this.evaluate(hs_f26D6ul, hs_txt26D6up);
    };
    this.hs_writeFile.notEvaluated = true;
    this.hs_writeFile.evaluate = function (hs_f26D6ut, hs_txt26D6ux) {
        $hs.modules.SystemziIO.loadDependencies();
        return this.evaluate(hs_f26D6ut, hs_txt26D6ux);
    };
    this.hs_getContents.evaluateOnce = function () {
        $hs.modules.SystemziIO.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_getLine.evaluateOnce = function () {
        $hs.modules.SystemziIO.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_readLn.notEvaluated = true;
    this.hs_readLn.evaluate = function (hs_zddRead26D6uB) {
        $hs.modules.SystemziIO.loadDependencies();
        return this.evaluate(hs_zddRead26D6uB);
    };
    this.hs_getChar.evaluateOnce = function () {
        $hs.modules.SystemziIO.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_putStrLn.notEvaluated = true;
    this.hs_putStrLn.evaluate = function (hs_s26D6uJ) {
        $hs.modules.SystemziIO.loadDependencies();
        return this.evaluate(hs_s26D6uJ);
    };
    this.hs_putStr.notEvaluated = true;
    this.hs_putStr.evaluate = function (hs_s26D6uL) {
        $hs.modules.SystemziIO.loadDependencies();
        return this.evaluate(hs_s26D6uL);
    };
    this.hs_putChar.notEvaluated = true;
    this.hs_putChar.evaluate = function (hs_c26D6uN) {
        $hs.modules.SystemziIO.loadDependencies();
        return this.evaluate(hs_c26D6uN);
    };
    this.hs_interact.notEvaluated = true;
    this.hs_interact.evaluate = function (hs_f26D6uR) {
        $hs.modules.SystemziIO.loadDependencies();
        return this.evaluate(hs_f26D6uR);
    };
    this.hs_readFile.notEvaluated = true;
    this.hs_readFile.evaluate = function (hs_name26D6uV) {
        $hs.modules.SystemziIO.loadDependencies();
        return this.evaluate(hs_name26D6uV);
    };
    this.hs_openTempFile.notEvaluated = true;
    this.hs_openTempFile.evaluate = function (hs_tmpzudir26D6wR, hs_template26D6wS) {
        $hs.modules.SystemziIO.loadDependencies();
        return this.evaluate(hs_tmpzudir26D6wR, hs_template26D6wS);
    };
    this.hs_openBinaryTempFile.notEvaluated = true;
    this.hs_openBinaryTempFile.evaluate = function (hs_tmpzudir26D6wY, hs_template26D6wZ) {
        $hs.modules.SystemziIO.loadDependencies();
        return this.evaluate(hs_tmpzudir26D6wY, hs_template26D6wZ);
    };
    this.hs_openTempFileWithDefaultPermissions.notEvaluated = true;
    this.hs_openTempFileWithDefaultPermissions.evaluate = function (hs_tmpzudir26D6x5, hs_template26D6x6) {
        $hs.modules.SystemziIO.loadDependencies();
        return this.evaluate(hs_tmpzudir26D6x5, hs_template26D6x6);
    };
    this.hs_openBinaryTempFileWithDefaultPermissions.notEvaluated = true;
    this.hs_openBinaryTempFileWithDefaultPermissions.evaluate = function (hs_tmpzudir26D6xc, hs_template26D6xd) {
        $hs.modules.SystemziIO.loadDependencies();
        return this.evaluate(hs_tmpzudir26D6xc, hs_template26D6xd);
    };
    this.hs_print.notEvaluated = true;
    this.hs_print.evaluate = function (hs_zddShow26D6xi, hs_x26D6xj) {
        $hs.modules.SystemziIO.loadDependencies();
        return this.evaluate(hs_zddShow26D6xi, hs_x26D6xj);
    };
};
$hs.modules.SystemziIO.initAfterDependencies = function () {
    this.hs_fixIO.notEvaluated = false;
    this.hs_withBinaryFile.notEvaluated = false;
    this.hs_withFile.notEvaluated = false;
    this.hs_hPrint.notEvaluated = false;
    this.hs_hReady.notEvaluated = false;
    this.hs_readIO.notEvaluated = false;
    this.hs_appendFile.notEvaluated = false;
    this.hs_writeFile.notEvaluated = false;
    this.hs_readLn.notEvaluated = false;
    this.hs_putStrLn.notEvaluated = false;
    this.hs_putStr.notEvaluated = false;
    this.hs_putChar.notEvaluated = false;
    this.hs_interact.notEvaluated = false;
    this.hs_readFile.notEvaluated = false;
    this.hs_openTempFile.notEvaluated = false;
    this.hs_openBinaryTempFile.notEvaluated = false;
    this.hs_openTempFileWithDefaultPermissions.notEvaluated = false;
    this.hs_openBinaryTempFileWithDefaultPermissions.notEvaluated = false;
    this.hs_print.notEvaluated = false;
    var hs_pathSeparator25uGIB = new $hs.Data(1);
    var hs_sat26D6y6 = new $hs.Thunk();
    var hs_rwzuflags25uGIH = new $hs.Thunk();
    var hs_openTempFilezq25uGIz = new $hs.Func(5);
    hs_pathSeparator25uGIB.data = ["/"];
    this.hs_fixIO.evaluate = function (hs_k26D6t8) {
        var hs_sat26D6xs = new $hs.Func(1);
        hs_sat26D6xs.evaluate = function (hs_ref26D6t3) {
            var hs_sat26D6xp = new $hs.Func(1);
            hs_sat26D6xp.evaluate = function (hs_ans26D6t7) {
                var hs_sat26D6xn = new $hs.Func(1);
                hs_sat26D6xn.evaluate = function (hs_result26D6tb) {
                    var hs_sat26D6xl = new $hs.Thunk();
                    hs_sat26D6xl.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_result26D6tb);
                    };
                    var hs_sat26D6xm = new $hs.Thunk();
                    hs_sat26D6xm.evaluateOnce = function () {
                        return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_ref26D6t3, hs_result26D6tb);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6xm, hs_sat26D6xl);
                };
                var hs_sat26D6xo = new $hs.Thunk();
                hs_sat26D6xo.evaluateOnce = function () {
                    return hs_k26D6t8.hscall(hs_ans26D6t7);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6xo, hs_sat26D6xn);
            };
            var hs_sat26D6xr = new $hs.Thunk();
            hs_sat26D6xr.evaluateOnce = function () {
                var hs_sat26D6xq = new $hs.Thunk();
                hs_sat26D6xq.evaluateOnce = function () {
                    return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_ref26D6t3);
                };
                return $hs.modules.GHCziIO.hs_unsafeInterleaveIO.hscall(hs_sat26D6xq);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6xr, hs_sat26D6xp);
        };
        var hs_sat26D6xu = new $hs.Thunk();
        hs_sat26D6xu.evaluateOnce = function () {
            var hs_sat26D6xt = new $hs.Thunk();
            hs_sat26D6xt.evaluateOnce = function () {
                return $hs.modules.GHCziException.hs_throw.hscall($hs.modules.ControlziExceptionziBase.hs_zdfExceptionNonTermination, $hs.modules.ControlziExceptionziBase.hs_NonTermination);
            };
            return $hs.modules.GHCziIORef.hs_newIORef.hscall(hs_sat26D6xt);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6xu, hs_sat26D6xs);
    };
    this.hs_withBinaryFile.evaluate = function (hs_name26D6tj, hs_mode26D6tk) {
        var hs_sat26D6xv = new $hs.Thunk();
        hs_sat26D6xv.evaluateOnce = function () {
            return $hs.modules.GHCziIOziHandleziFD.hs_openBinaryFile.hscall(hs_name26D6tj, hs_mode26D6tk);
        };
        return $hs.modules.ControlziExceptionziBase.hs_bracket.hscall(hs_sat26D6xv, $hs.modules.GHCziIOziHandle.hs_hClose);
    };
    this.hs_withFile.evaluate = function (hs_name26D6to, hs_mode26D6tp) {
        var hs_sat26D6xw = new $hs.Thunk();
        hs_sat26D6xw.evaluateOnce = function () {
            return $hs.modules.GHCziIOziHandleziFD.hs_openFile.hscall(hs_name26D6to, hs_mode26D6tp);
        };
        return $hs.modules.ControlziExceptionziBase.hs_bracket.hscall(hs_sat26D6xw, $hs.modules.GHCziIOziHandle.hs_hClose);
    };
    this.hs_hPrint.evaluate = function (hs_zddShow26D6tv, hs_hdl26D6tt) {
        var hs_sat26D6xx = new $hs.Thunk();
        hs_sat26D6xx.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_show.hscall(hs_zddShow26D6tv);
        };
        var hs_sat26D6xy = new $hs.Thunk();
        hs_sat26D6xy.evaluateOnce = function () {
            return $hs.modules.GHCziIOziHandleziText.hs_hPutStrLn.hscall(hs_hdl26D6tt);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26D6xy, hs_sat26D6xx);
    };
    this.hs_hReady.evaluate = function (hs_h26D6ty) {
        var hs_sat26D6xz = new $hs.Data(1);
        hs_sat26D6xz.data = [0];
        return $hs.modules.GHCziIOziHandleziText.hs_hWaitForInput.hscall(hs_h26D6ty, hs_sat26D6xz);
    };
    this.hs_readIO.evaluate = function (hs_zddRead26D6tC, hs_s26D6tD) {
        var hs_sat26D6xL = new $hs.Func(1);
        hs_sat26D6xL.evaluate = function (hs_ds26D6tG) {
            var hs_wild26D6xA = hs_ds26D6tG;
            if (hs_ds26D6tG.notEvaluated) {
                hs_wild26D6xA = hs_ds26D6tG.hscall();
            }
            var hs_x26D6u0 = hs_wild26D6xA.data[0];
            var hs_t26D6tK = hs_wild26D6xA.data[1];
            var hs_sat26D6xJ = new $hs.Func(1);
            hs_sat26D6xJ.evaluate = function (hs_ds126D6tS) {
                var hs_fail26D6tR = new $hs.Func(1);
                hs_fail26D6tR.evaluate = function (hs_ds226D6tQ) {
                    var hs_sat26D6xB = new $hs.Thunk();
                    hs_sat26D6xB.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at ../../ghc-7.0.2/libraries/base/System/IO.hs:408:31-37\x00");
                    };
                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.GHCziBase.hs_zdfMonadZMZN, hs_sat26D6xB);
                };
                var hs_wild126D6xE = hs_ds126D6tS;
                if (hs_ds126D6tS.notEvaluated) {
                    hs_wild126D6xE = hs_ds126D6tS.hscall();
                }
                var hs_ds226D6tW = hs_wild126D6xE.data[0];
                var hs_ds326D6tY = hs_wild126D6xE.data[1];
                var hs_wild226D6xD = hs_ds226D6tW;
                if (hs_ds226D6tW.notEvaluated) {
                    hs_wild226D6xD = hs_ds226D6tW.hscall();
                }
                switch (hs_wild226D6xD.tag) {
                case 1:
                    var hs_wild326D6xC = hs_ds326D6tY;
                    if (hs_ds326D6tY.notEvaluated) {
                        hs_wild326D6xC = hs_ds326D6tY.hscall();
                    }
                    switch (hs_wild326D6xC.tag) {
                    case 1:
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadZMZN, hs_x26D6u0);
                    case 2:
                        return hs_fail26D6tR.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    }
                case 2:
                    return hs_fail26D6tR.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                }
            };
            var hs_sat26D6xK = new $hs.Thunk();
            hs_sat26D6xK.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_lex.hscall(hs_t26D6tK);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadZMZN, hs_sat26D6xK, hs_sat26D6xJ);
        };
        var hs_sat26D6xN = new $hs.Thunk();
        hs_sat26D6xN.evaluateOnce = function () {
            return $hs.modules.TextziRead.hs_reads.hscall(hs_zddRead26D6tC, hs_s26D6tD);
        };
        var hs_wild26D6xM = $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadZMZN, hs_sat26D6xN, hs_sat26D6xL);
        switch (hs_wild26D6xM.tag) {
        case 1:
            var hs_sat26D6xP = new $hs.Thunk();
            hs_sat26D6xP.evaluateOnce = function () {
                var hs_sat26D6xO = new $hs.Thunk();
                hs_sat26D6xO.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Prelude.readIO: no parse\x00");
                };
                return $hs.modules.GHCziIOziException.hs_userError.hscall(hs_sat26D6xO);
            };
            return $hs.modules.GHCziIOziException.hs_ioError.hscall(hs_sat26D6xP);
        case 2:
            var hs_x26D6ue = hs_wild26D6xM.data[0];
            var hs_ds26D6uc = hs_wild26D6xM.data[1];
            var hs_wild126D6xQ = hs_ds26D6uc;
            if (hs_ds26D6uc.notEvaluated) {
                hs_wild126D6xQ = hs_ds26D6uc.hscall();
            }
            switch (hs_wild126D6xQ.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_x26D6ue);
            case 2:
                var hs_sat26D6xU = new $hs.Thunk();
                hs_sat26D6xU.evaluateOnce = function () {
                    var hs_sat26D6xT = new $hs.Thunk();
                    hs_sat26D6xT.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Prelude.readIO: ambiguous parse\x00");
                    };
                    return $hs.modules.GHCziIOziException.hs_userError.hscall(hs_sat26D6xT);
                };
                return $hs.modules.GHCziIOziException.hs_ioError.hscall(hs_sat26D6xU);
            }
        }
    };
    this.hs_appendFile.evaluate = function (hs_f26D6ul, hs_txt26D6up) {
        var hs_sat26D6xV = new $hs.Func(1);
        hs_sat26D6xV.evaluate = function (hs_hdl26D6uo) {
            return $hs.modules.GHCziIOziHandleziText.hs_hPutStr.hscall(hs_hdl26D6uo, hs_txt26D6up);
        };
        var hs_sat26D6xW = new $hs.Thunk();
        hs_sat26D6xW.evaluateOnce = function () {
            return $hs.modules.GHCziIOziHandleziFD.hs_openFile.hscall(hs_f26D6ul, $hs.modules.GHCziIOziIOMode.hs_AppendMode);
        };
        return $hs.modules.ControlziExceptionziBase.hs_bracket.hscall(hs_sat26D6xW, $hs.modules.GHCziIOziHandle.hs_hClose, hs_sat26D6xV);
    };
    this.hs_writeFile.evaluate = function (hs_f26D6ut, hs_txt26D6ux) {
        var hs_sat26D6xX = new $hs.Func(1);
        hs_sat26D6xX.evaluate = function (hs_hdl26D6uw) {
            return $hs.modules.GHCziIOziHandleziText.hs_hPutStr.hscall(hs_hdl26D6uw, hs_txt26D6ux);
        };
        var hs_sat26D6xY = new $hs.Thunk();
        hs_sat26D6xY.evaluateOnce = function () {
            return $hs.modules.GHCziIOziHandleziFD.hs_openFile.hscall(hs_f26D6ut, $hs.modules.GHCziIOziIOMode.hs_WriteMode);
        };
        return $hs.modules.ControlziExceptionziBase.hs_bracket.hscall(hs_sat26D6xY, $hs.modules.GHCziIOziHandle.hs_hClose, hs_sat26D6xX);
    };
    this.hs_getContents.evaluateOnce = function () {
        return $hs.modules.GHCziIOziHandleziText.hs_hGetContents.hscall($hs.modules.GHCziIOziHandleziFD.hs_stdin);
    };
    this.hs_getLine.evaluateOnce = function () {
        return $hs.modules.GHCziIOziHandleziText.hs_hGetLine.hscall($hs.modules.GHCziIOziHandleziFD.hs_stdin);
    };
    this.hs_readLn.evaluate = function (hs_zddRead26D6uB) {
        var hs_sat26D6y1 = new $hs.Func(1);
        hs_sat26D6y1.evaluate = function (hs_l26D6uC) {
            var hs_sat26D6xZ = new $hs.Func(1);
            hs_sat26D6xZ.evaluate = function (hs_r26D6uF) {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_r26D6uF);
            };
            var hs_sat26D6y0 = new $hs.Thunk();
            hs_sat26D6y0.evaluateOnce = function () {
                return $hs.modules.SystemziIO.hs_readIO.hscall(hs_zddRead26D6uB, hs_l26D6uC);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6y0, hs_sat26D6xZ);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.SystemziIO.hs_getLine, hs_sat26D6y1);
    };
    this.hs_getChar.evaluateOnce = function () {
        return $hs.modules.GHCziIOziHandleziText.hs_hGetChar.hscall($hs.modules.GHCziIOziHandleziFD.hs_stdin);
    };
    this.hs_putStrLn.evaluate = function (hs_s26D6uJ) {
        return $hs.modules.GHCziIOziHandleziText.hs_hPutStrLn.hscall($hs.modules.GHCziIOziHandleziFD.hs_stdout, hs_s26D6uJ);
    };
    this.hs_putStr.evaluate = function (hs_s26D6uL) {
        return $hs.modules.GHCziIOziHandleziText.hs_hPutStr.hscall($hs.modules.GHCziIOziHandleziFD.hs_stdout, hs_s26D6uL);
    };
    this.hs_putChar.evaluate = function (hs_c26D6uN) {
        return $hs.modules.GHCziIOziHandleziText.hs_hPutChar.hscall($hs.modules.GHCziIOziHandleziFD.hs_stdout, hs_c26D6uN);
    };
    this.hs_interact.evaluate = function (hs_f26D6uR) {
        var hs_sat26D6y3 = new $hs.Func(1);
        hs_sat26D6y3.evaluate = function (hs_s26D6uQ) {
            var hs_sat26D6y2 = new $hs.Thunk();
            hs_sat26D6y2.evaluateOnce = function () {
                return hs_f26D6uR.hscall(hs_s26D6uQ);
            };
            return $hs.modules.GHCziIOziHandleziText.hs_hPutStr.hscall($hs.modules.GHCziIOziHandleziFD.hs_stdout, hs_sat26D6y2);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.SystemziIO.hs_getContents, hs_sat26D6y3);
    };
    this.hs_readFile.evaluate = function (hs_name26D6uV) {
        var hs_sat26D6y4 = new $hs.Thunk();
        hs_sat26D6y4.evaluateOnce = function () {
            return $hs.modules.GHCziIOziHandleziFD.hs_openFile.hscall(hs_name26D6uV, $hs.modules.GHCziIOziIOMode.hs_ReadMode);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6y4, $hs.modules.GHCziIOziHandleziText.hs_hGetContents);
    };
    hs_sat26D6y6.evaluateOnce = function () {
        var hs_sat26D6y5 = new $hs.Thunk();
        hs_sat26D6y5.evaluateOnce = function () {
            return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt, $hs.modules.SystemziPosixziInternals.hs_ozuNONBLOCK, $hs.modules.SystemziPosixziInternals.hs_ozuNOCTTY);
        };
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt, hs_sat26D6y5, $hs.modules.SystemziPosixziInternals.hs_ozuCREAT);
    };
    hs_rwzuflags25uGIH.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt, hs_sat26D6y6, $hs.modules.SystemziPosixziInternals.hs_ozuRDWR);
    };
    hs_openTempFilezq25uGIz.evaluate = function (hs_loc26D6wD, hs_tmpzudir26D6w3, hs_template26D6vi, hs_binary26D6v6, hs_mode26D6wd) {
        var hs_oflags26D6va = new $hs.Thunk();
        hs_oflags26D6va.evaluateOnce = function () {
            var hs_sat26D6y9 = new $hs.Thunk();
            hs_sat26D6y9.evaluateOnce = function () {
                var hs_wild26D6y7 = hs_binary26D6v6;
                if (hs_binary26D6v6.notEvaluated) {
                    hs_wild26D6y7 = hs_binary26D6v6.hscall();
                }
                switch (hs_wild26D6y7.tag) {
                case 1:
                    var hs_sat26D6y8 = new $hs.Thunk();
                    hs_sat26D6y8.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26D6y8);
                case 2:
                    if ($hs.modules.SystemziPosixziInternals.hs_ozuBINARY.notEvaluated) {
                        return $hs.modules.SystemziPosixziInternals.hs_ozuBINARY.hscall();
                    } else {
                        return $hs.modules.SystemziPosixziInternals.hs_ozuBINARY;
                    }
                }
            };
            var hs_sat26D6ya = new $hs.Thunk();
            hs_sat26D6ya.evaluateOnce = function () {
                return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt, hs_rwzuflags25uGIH, $hs.modules.SystemziPosixziInternals.hs_ozuEXCL);
            };
            return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt, hs_sat26D6ya, hs_sat26D6y9);
        };
        var hs_ds26D6vE = new $hs.Thunk();
        hs_ds26D6vE.evaluateOnce = function () {
            var hs_sat26D6yb = new $hs.Thunk();
            hs_sat26D6yb.evaluateOnce = function () {
                return $hs.modules.GHCziList.hs_reverse.hscall(hs_template26D6vi);
            };
            var hs_sat26D6yf = new $hs.Thunk();
            hs_sat26D6yf.evaluateOnce = function () {
                var hs_ds126D6vd = new $hs.Data(1);
                hs_ds126D6vd.data = ["."];
                var hs_sat26D6yc = new $hs.Func(1);
                hs_sat26D6yc.evaluate = function (hs_ds226D6vf) {
                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_ds226D6vf, hs_ds126D6vd);
                };
                return $hs.modules.GHCziList.hs_break.hscall(hs_sat26D6yc);
            };
            var hs_wild26D6ye = $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D6yf, hs_sat26D6yb);
            var hs_revzusuffix26D6vp = hs_wild26D6ye.data[0];
            var hs_ds126D6vn = hs_wild26D6ye.data[1];
            var hs_wild126D6yd = hs_ds126D6vn;
            if (hs_ds126D6vn.notEvaluated) {
                hs_wild126D6yd = hs_ds126D6vn.hscall();
            }
            switch (hs_wild126D6yd.tag) {
            case 1:
                var hs_sat26D6yg = new $hs.Thunk();
                hs_sat26D6yg.evaluateOnce = function () {
                    return $hs.modules.GHCziList.hs_reverse.hscall(hs_revzusuffix26D6vp);
                };
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26D6yg, $hs.modules.GHCziTypes.hs_ZMZN];
                return $res;
            case 2:
                var hs_ds226D6vt = hs_wild126D6yd.data[0];
                var hs_rest26D6vz = hs_wild126D6yd.data[1];
                var hs_wild226D6yj = hs_ds226D6vt;
                if (hs_ds226D6vt.notEvaluated) {
                    hs_wild226D6yj = hs_ds226D6vt.hscall();
                }
                var hs_ds326D6vw = hs_wild226D6yj.data[0];
                var hs_ds426D6yi = hs_ds326D6vw;
                if (hs_ds326D6vw.notEvaluated) {
                    hs_ds426D6yi = hs_ds326D6vw.hscall();
                }
                switch (hs_ds426D6yi) {
                case ".":
                    var hs_sat26D6yk = new $hs.Thunk();
                    hs_sat26D6yk.evaluateOnce = function () {
                        return $hs.modules.GHCziList.hs_reverse.hscall(hs_revzusuffix26D6vp);
                    };
                    var hs_sat26D6yl = new $hs.Data(1);
                    hs_sat26D6yl.data = ["."];
                    var hs_sat26D6ym = new $hs.Data(2);
                    hs_sat26D6ym.data = [hs_sat26D6yl, hs_sat26D6yk];
                    var hs_sat26D6yn = new $hs.Thunk();
                    hs_sat26D6yn.evaluateOnce = function () {
                        return $hs.modules.GHCziList.hs_reverse.hscall(hs_rest26D6vz);
                    };
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26D6yn, hs_sat26D6ym];
                    return $res;
                default:
                    var hs_sat26D6yh = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("bug in System.IO.openTempFile\x00");
                    return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26D6yh);
                }
            }
        };
        var hs_suffix26D6vK = new $hs.Thunk();
        hs_suffix26D6vK.evaluateOnce = function () {
            var hs_wild26D6yp = hs_ds26D6vE;
            if (hs_ds26D6vE.notEvaluated) {
                hs_wild26D6yp = hs_ds26D6vE.hscall();
            }
            var hs_suffix126D6vJ = hs_wild26D6yp.data[1];
            if (hs_suffix126D6vJ.notEvaluated) {
                return hs_suffix126D6vJ.hscall();
            } else {
                return hs_suffix126D6vJ;
            }
        };
        var hs_prefix26D6vQ = new $hs.Thunk();
        hs_prefix26D6vQ.evaluateOnce = function () {
            var hs_wild26D6yq = hs_ds26D6vE;
            if (hs_ds26D6vE.notEvaluated) {
                hs_wild26D6yq = hs_ds26D6vE.hscall();
            }
            var hs_prefix126D6vP = hs_wild26D6yq.data[0];
            if (hs_prefix126D6vP.notEvaluated) {
                return hs_prefix126D6vP.hscall();
            } else {
                return hs_prefix126D6vP;
            }
        };
        var hs_sat26D6yV = new $hs.Func(1);
        hs_sat26D6yV.evaluate = function (hs_pid26D6wM) {
            var hs_zddShow26D6vT = new $hs.Thunk();
            hs_zddShow26D6vT.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_zdp2Num.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCPid);
            };
            var hs_findTempName26D6wI = new $hs.Func(1);
            hs_findTempName26D6wI.evaluate = function (hs_x26D6vY) {
                var hs_filepath26D6w9 = new $hs.Thunk();
                hs_filepath26D6w9.evaluateOnce = function () {
                    var hs_b26D6w1 = new $hs.Thunk();
                    hs_b26D6w1.evaluateOnce = function () {
                        var hs_sat26D6yt = new $hs.Thunk();
                        hs_sat26D6yt.evaluateOnce = function () {
                            var hs_sat26D6ys = new $hs.Thunk();
                            hs_sat26D6ys.evaluateOnce = function () {
                                return $hs.modules.GHCziShow.hs_show.hscall(hs_zddShow26D6vT, hs_x26D6vY);
                            };
                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D6ys, hs_suffix26D6vK);
                        };
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_prefix26D6vQ, hs_sat26D6yt);
                    };
                    var hs_wild26D6yv = $hs.modules.GHCziList.hs_null.hscall(hs_b26D6w1);
                    switch (hs_wild26D6yv.tag) {
                    case 1:
                        var hs_wild126D6yu = $hs.modules.GHCziList.hs_null.hscall(hs_tmpzudir26D6w3);
                        switch (hs_wild126D6yu.tag) {
                        case 1:
                            var hs_sat26D6yx = new $hs.Thunk();
                            hs_sat26D6yx.evaluateOnce = function () {
                                return $hs.modules.GHCziList.hs_last.hscall(hs_tmpzudir26D6w3);
                            };
                            var hs_wild226D6yw = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_sat26D6yx, hs_pathSeparator25uGIB);
                            switch (hs_wild226D6yw.tag) {
                            case 1:
                                var hs_sat26D6yz = new $hs.Thunk();
                                hs_sat26D6yz.evaluateOnce = function () {
                                    var hs_sat26D6yy = new $hs.Data(2);
                                    hs_sat26D6yy.data = [hs_pathSeparator25uGIB, $hs.modules.GHCziTypes.hs_ZMZN];
                                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D6yy, hs_b26D6w1);
                                };
                                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_tmpzudir26D6w3, hs_sat26D6yz);
                            case 2:
                                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_tmpzudir26D6w3, hs_b26D6w1);
                            }
                        case 2:
                            if (hs_b26D6w1.notEvaluated) {
                                return hs_b26D6w1.hscall();
                            } else {
                                return hs_b26D6w1;
                            }
                        }
                    case 2:
                        if (hs_tmpzudir26D6w3.notEvaluated) {
                            return hs_tmpzudir26D6w3.hscall();
                        } else {
                            return hs_tmpzudir26D6w3;
                        }
                    }
                };
                var hs_sat26D6yR = new $hs.Func(1);
                hs_sat26D6yR.evaluate = function (hs_fd26D6wh) {
                    var hs_sat26D6yD = new $hs.Thunk();
                    hs_sat26D6yD.evaluateOnce = function () {
                        var hs_sat26D6yA = new $hs.Thunk();
                        hs_sat26D6yA.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26D6yA);
                    };
                    var hs_wild26D6yC = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.ForeignziCziTypes.hs_zdfOrdCInt, hs_fd26D6wh, hs_sat26D6yD);
                    switch (hs_wild26D6yC.tag) {
                    case 1:
                        var hs_sat26D6yI = new $hs.Func(1);
                        hs_sat26D6yI.evaluate = function (hs_ds126D6wn) {
                            var hs_wild126D6yB = hs_ds126D6wn;
                            if (hs_ds126D6wn.notEvaluated) {
                                hs_wild126D6yB = hs_ds126D6wn.hscall();
                            }
                            var hs_fD26D6wr = hs_wild126D6yB.data[0];
                            var hs_fdzutype26D6ws = hs_wild126D6yB.data[1];
                            var hs_sat26D6yF = new $hs.Func(1);
                            hs_sat26D6yF.evaluate = function (hs_h26D6ww) {
                                var hs_sat26D6yE = new $hs.Data(1);
                                hs_sat26D6yE.data = [hs_filepath26D6w9, hs_h26D6ww];
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6yE);
                            };
                            var hs_sat26D6yH = new $hs.Thunk();
                            hs_sat26D6yH.evaluateOnce = function () {
                                var hs_sat26D6yG = new $hs.Data(2);
                                hs_sat26D6yG.data = [$hs.modules.GHCziIOziEncoding.hs_localeEncoding];
                                return $hs.modules.GHCziIOziHandleziFD.hs_mkHandleFromFD.hscall(hs_fD26D6wr, hs_fdzutype26D6ws, hs_filepath26D6w9, $hs.modules.GHCziIOziIOMode.hs_ReadWriteMode, $hs.modules.GHCziBool.hs_False, hs_sat26D6yG);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6yH, hs_sat26D6yF);
                        };
                        var hs_sat26D6yJ = new $hs.Thunk();
                        hs_sat26D6yJ.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziFD.hs_mkFD.hscall(hs_fd26D6wh, $hs.modules.GHCziIOziIOMode.hs_ReadWriteMode, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.GHCziBool.hs_False, $hs.modules.GHCziBool.hs_True);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6yJ, hs_sat26D6yI);
                    case 2:
                        var hs_sat26D6yQ = new $hs.Func(1);
                        hs_sat26D6yQ.evaluate = function (hs_errno26D6wB) {
                            var hs_wild126D6yK = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26D6wB, $hs.modules.ForeignziCziError.hs_eEXIST);
                            switch (hs_wild126D6yK.tag) {
                            case 1:
                                var hs_sat26D6yM = new $hs.Thunk();
                                hs_sat26D6yM.evaluateOnce = function () {
                                    var hs_sat26D6yL = new $hs.Data(2);
                                    hs_sat26D6yL.data = [hs_tmpzudir26D6w3];
                                    return $hs.modules.ForeignziCziError.hs_errnoToIOError.hscall(hs_loc26D6wD, hs_errno26D6wB, $hs.modules.DataziMaybe.hs_Nothing, hs_sat26D6yL);
                                };
                                return $hs.modules.GHCziIOziException.hs_ioError.hscall(hs_sat26D6yM);
                            case 2:
                                var hs_sat26D6yP = new $hs.Thunk();
                                hs_sat26D6yP.evaluateOnce = function () {
                                    var hs_sat26D6yO = new $hs.Thunk();
                                    hs_sat26D6yO.evaluateOnce = function () {
                                        var hs_sat26D6yN = new $hs.Thunk();
                                        hs_sat26D6yN.evaluateOnce = function () {
                                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                        };
                                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCPid, hs_sat26D6yN);
                                    };
                                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCPid, hs_x26D6vY, hs_sat26D6yO);
                                };
                                return hs_findTempName26D6wI.hscall(hs_sat26D6yP);
                            }
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.ForeignziCziError.hs_getErrno, hs_sat26D6yQ);
                    }
                };
                var hs_sat26D6yU = new $hs.Thunk();
                hs_sat26D6yU.evaluateOnce = function () {
                    var hs_sat26D6yS = new $hs.Func(1);
                    hs_sat26D6yS.evaluate = function (hs_f26D6wc) {
                        return $hs.modules.SystemziPosixziInternals.hs_czuopen.hscall(hs_f26D6wc, hs_oflags26D6va, hs_mode26D6wd);
                    };
                    var hs_sat26D6yT = new $hs.Thunk();
                    hs_sat26D6yT.evaluateOnce = function () {
                        return $hs.modules.SystemziPosixziInternals.hs_withFilePath.hscall(hs_filepath26D6w9);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D6yT, hs_sat26D6yS);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6yU, hs_sat26D6yR);
            };
            return hs_findTempName26D6wI.hscall(hs_pid26D6wM);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.SystemziPosixziInternals.hs_czugetpid, hs_sat26D6yV);
    };
    this.hs_openTempFile.evaluate = function (hs_tmpzudir26D6wR, hs_template26D6wS) {
        var hs_sat26D6yX = new $hs.Thunk();
        hs_sat26D6yX.evaluateOnce = function () {
            var hs_sat26D6yW = new $hs.Thunk();
            hs_sat26D6yW.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(384);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCMode, hs_sat26D6yW);
        };
        var hs_sat26D6yY = new $hs.Thunk();
        hs_sat26D6yY.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("openTempFile\x00");
        };
        return hs_openTempFilezq25uGIz.hscall(hs_sat26D6yY, hs_tmpzudir26D6wR, hs_template26D6wS, $hs.modules.GHCziBool.hs_False, hs_sat26D6yX);
    };
    this.hs_openBinaryTempFile.evaluate = function (hs_tmpzudir26D6wY, hs_template26D6wZ) {
        var hs_sat26D6z0 = new $hs.Thunk();
        hs_sat26D6z0.evaluateOnce = function () {
            var hs_sat26D6yZ = new $hs.Thunk();
            hs_sat26D6yZ.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(384);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCMode, hs_sat26D6yZ);
        };
        var hs_sat26D6z1 = new $hs.Thunk();
        hs_sat26D6z1.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("openBinaryTempFile\x00");
        };
        return hs_openTempFilezq25uGIz.hscall(hs_sat26D6z1, hs_tmpzudir26D6wY, hs_template26D6wZ, $hs.modules.GHCziBool.hs_True, hs_sat26D6z0);
    };
    this.hs_openTempFileWithDefaultPermissions.evaluate = function (hs_tmpzudir26D6x5, hs_template26D6x6) {
        var hs_sat26D6z3 = new $hs.Thunk();
        hs_sat26D6z3.evaluateOnce = function () {
            var hs_sat26D6z2 = new $hs.Thunk();
            hs_sat26D6z2.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(438);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCMode, hs_sat26D6z2);
        };
        var hs_sat26D6z4 = new $hs.Thunk();
        hs_sat26D6z4.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("openBinaryTempFile\x00");
        };
        return hs_openTempFilezq25uGIz.hscall(hs_sat26D6z4, hs_tmpzudir26D6x5, hs_template26D6x6, $hs.modules.GHCziBool.hs_False, hs_sat26D6z3);
    };
    this.hs_openBinaryTempFileWithDefaultPermissions.evaluate = function (hs_tmpzudir26D6xc, hs_template26D6xd) {
        var hs_sat26D6z6 = new $hs.Thunk();
        hs_sat26D6z6.evaluateOnce = function () {
            var hs_sat26D6z5 = new $hs.Thunk();
            hs_sat26D6z5.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(438);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCMode, hs_sat26D6z5);
        };
        var hs_sat26D6z7 = new $hs.Thunk();
        hs_sat26D6z7.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("openBinaryTempFile\x00");
        };
        return hs_openTempFilezq25uGIz.hscall(hs_sat26D6z7, hs_tmpzudir26D6xc, hs_template26D6xd, $hs.modules.GHCziBool.hs_True, hs_sat26D6z6);
    };
    this.hs_print.evaluate = function (hs_zddShow26D6xi, hs_x26D6xj) {
        var hs_sat26D6z8 = new $hs.Thunk();
        hs_sat26D6z8.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_show.hscall(hs_zddShow26D6xi, hs_x26D6xj);
        };
        return $hs.modules.GHCziIOziHandleziText.hs_hPutStrLn.hscall($hs.modules.GHCziIOziHandleziFD.hs_stdout, hs_sat26D6z8);
    };
};
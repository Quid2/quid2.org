
$hs.modules.SystemziIO = new $hs.Module();
$hs.modules.SystemziIO.dependencies = ["GHC.Prim", "GHC.Types", "GHC.CString", "GHC.Integer", "Data.Maybe", "GHC.Base", "Text.Read", "GHC.Num", "GHC.Show", "GHC.Err", "GHC.Exception", "GHC.Classes", "GHC.IO", "GHC.IO.Encoding", "GHC.IO.Exception", "GHC.IO.FD", "GHC.IO.Handle", "GHC.IO.Handle.FD", "GHC.IO.Handle.Text", "GHC.IO.IOMode", "GHC.IORef", "GHC.List", "GHC.Read", "Control.Exception.Base", "Data.Bits", "Foreign.C.Error", "Foreign.C.Types", "System.Posix.Internals", "System.Posix.Types"];
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
    this.hs_fixIO.evaluate = function (hs_k26CHmC) {
        $hs.modules.SystemziIO.loadDependencies();
        return this.evaluate(hs_k26CHmC);
    };
    this.hs_withBinaryFile.notEvaluated = true;
    this.hs_withBinaryFile.evaluate = function (hs_name26CHmN, hs_mode26CHmO) {
        $hs.modules.SystemziIO.loadDependencies();
        return this.evaluate(hs_name26CHmN, hs_mode26CHmO);
    };
    this.hs_withFile.notEvaluated = true;
    this.hs_withFile.evaluate = function (hs_name26CHmS, hs_mode26CHmT) {
        $hs.modules.SystemziIO.loadDependencies();
        return this.evaluate(hs_name26CHmS, hs_mode26CHmT);
    };
    this.hs_hPrint.notEvaluated = true;
    this.hs_hPrint.evaluate = function (hs_zddShow26CHmZ, hs_hdl26CHmX) {
        $hs.modules.SystemziIO.loadDependencies();
        return this.evaluate(hs_zddShow26CHmZ, hs_hdl26CHmX);
    };
    this.hs_hReady.notEvaluated = true;
    this.hs_hReady.evaluate = function (hs_h26CHn2) {
        $hs.modules.SystemziIO.loadDependencies();
        return this.evaluate(hs_h26CHn2);
    };
    this.hs_readIO.notEvaluated = true;
    this.hs_readIO.evaluate = function (hs_zddRead26CHn6, hs_s26CHn7) {
        $hs.modules.SystemziIO.loadDependencies();
        return this.evaluate(hs_zddRead26CHn6, hs_s26CHn7);
    };
    this.hs_appendFile.notEvaluated = true;
    this.hs_appendFile.evaluate = function (hs_f26CHnP, hs_txt26CHnT) {
        $hs.modules.SystemziIO.loadDependencies();
        return this.evaluate(hs_f26CHnP, hs_txt26CHnT);
    };
    this.hs_writeFile.notEvaluated = true;
    this.hs_writeFile.evaluate = function (hs_f26CHnX, hs_txt26CHo1) {
        $hs.modules.SystemziIO.loadDependencies();
        return this.evaluate(hs_f26CHnX, hs_txt26CHo1);
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
    this.hs_readLn.evaluate = function (hs_zddRead26CHo5) {
        $hs.modules.SystemziIO.loadDependencies();
        return this.evaluate(hs_zddRead26CHo5);
    };
    this.hs_getChar.evaluateOnce = function () {
        $hs.modules.SystemziIO.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_putStrLn.notEvaluated = true;
    this.hs_putStrLn.evaluate = function (hs_s26CHod) {
        $hs.modules.SystemziIO.loadDependencies();
        return this.evaluate(hs_s26CHod);
    };
    this.hs_putStr.notEvaluated = true;
    this.hs_putStr.evaluate = function (hs_s26CHof) {
        $hs.modules.SystemziIO.loadDependencies();
        return this.evaluate(hs_s26CHof);
    };
    this.hs_putChar.notEvaluated = true;
    this.hs_putChar.evaluate = function (hs_c26CHoh) {
        $hs.modules.SystemziIO.loadDependencies();
        return this.evaluate(hs_c26CHoh);
    };
    this.hs_interact.notEvaluated = true;
    this.hs_interact.evaluate = function (hs_f26CHol) {
        $hs.modules.SystemziIO.loadDependencies();
        return this.evaluate(hs_f26CHol);
    };
    this.hs_readFile.notEvaluated = true;
    this.hs_readFile.evaluate = function (hs_name26CHop) {
        $hs.modules.SystemziIO.loadDependencies();
        return this.evaluate(hs_name26CHop);
    };
    this.hs_openTempFile.notEvaluated = true;
    this.hs_openTempFile.evaluate = function (hs_tmpzudir26CHql, hs_template26CHqm) {
        $hs.modules.SystemziIO.loadDependencies();
        return this.evaluate(hs_tmpzudir26CHql, hs_template26CHqm);
    };
    this.hs_openBinaryTempFile.notEvaluated = true;
    this.hs_openBinaryTempFile.evaluate = function (hs_tmpzudir26CHqs, hs_template26CHqt) {
        $hs.modules.SystemziIO.loadDependencies();
        return this.evaluate(hs_tmpzudir26CHqs, hs_template26CHqt);
    };
    this.hs_openTempFileWithDefaultPermissions.notEvaluated = true;
    this.hs_openTempFileWithDefaultPermissions.evaluate = function (hs_tmpzudir26CHqz, hs_template26CHqA) {
        $hs.modules.SystemziIO.loadDependencies();
        return this.evaluate(hs_tmpzudir26CHqz, hs_template26CHqA);
    };
    this.hs_openBinaryTempFileWithDefaultPermissions.notEvaluated = true;
    this.hs_openBinaryTempFileWithDefaultPermissions.evaluate = function (hs_tmpzudir26CHqG, hs_template26CHqH) {
        $hs.modules.SystemziIO.loadDependencies();
        return this.evaluate(hs_tmpzudir26CHqG, hs_template26CHqH);
    };
    this.hs_print.notEvaluated = true;
    this.hs_print.evaluate = function (hs_zddShow26CHqM, hs_x26CHqN) {
        $hs.modules.SystemziIO.loadDependencies();
        return this.evaluate(hs_zddShow26CHqM, hs_x26CHqN);
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
    var hs_pathSeparator25uhH0 = new $hs.Data(1);
    var hs_sat26CHrA = new $hs.Thunk();
    var hs_rwzuflags25uhH3 = new $hs.Thunk();
    var hs_openTempFilezq25uhGZ = new $hs.Func(5);
    hs_pathSeparator25uhH0.data = ["/"];
    this.hs_fixIO.evaluate = function (hs_k26CHmC) {
        var hs_sat26CHqQ = new $hs.Func(1);
        hs_sat26CHqQ.evaluate = function (hs_ref26CHmx) {
            var hs_sat26CHqT = new $hs.Func(1);
            hs_sat26CHqT.evaluate = function (hs_ans26CHmB) {
                var hs_sat26CHqW = new $hs.Func(1);
                hs_sat26CHqW.evaluate = function (hs_result26CHmF) {
                    var hs_sat26CHqY = new $hs.Thunk();
                    hs_sat26CHqY.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_result26CHmF);
                    };
                    var hs_sat26CHqX = new $hs.Thunk();
                    hs_sat26CHqX.evaluateOnce = function () {
                        return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_ref26CHmx, hs_result26CHmF);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CHqX, hs_sat26CHqY);
                };
                var hs_sat26CHqV = new $hs.Thunk();
                hs_sat26CHqV.evaluateOnce = function () {
                    return hs_k26CHmC.hscall(hs_ans26CHmB);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CHqV, hs_sat26CHqW);
            };
            var hs_sat26CHqS = new $hs.Thunk();
            hs_sat26CHqS.evaluateOnce = function () {
                var hs_sat26CHqU = new $hs.Thunk();
                hs_sat26CHqU.evaluateOnce = function () {
                    return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_ref26CHmx);
                };
                return $hs.modules.GHCziIO.hs_unsafeInterleaveIO.hscall(hs_sat26CHqU);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CHqS, hs_sat26CHqT);
        };
        var hs_sat26CHqP = new $hs.Thunk();
        hs_sat26CHqP.evaluateOnce = function () {
            var hs_sat26CHqR = new $hs.Thunk();
            hs_sat26CHqR.evaluateOnce = function () {
                return $hs.modules.GHCziException.hs_throw.hscall($hs.modules.ControlziExceptionziBase.hs_zdfExceptionNonTermination, $hs.modules.ControlziExceptionziBase.hs_NonTermination);
            };
            return $hs.modules.GHCziIORef.hs_newIORef.hscall(hs_sat26CHqR);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CHqP, hs_sat26CHqQ);
    };
    this.hs_withBinaryFile.evaluate = function (hs_name26CHmN, hs_mode26CHmO) {
        var hs_sat26CHqZ = new $hs.Thunk();
        hs_sat26CHqZ.evaluateOnce = function () {
            return $hs.modules.GHCziIOziHandleziFD.hs_openBinaryFile.hscall(hs_name26CHmN, hs_mode26CHmO);
        };
        return $hs.modules.ControlziExceptionziBase.hs_bracket.hscall(hs_sat26CHqZ, $hs.modules.GHCziIOziHandle.hs_hClose);
    };
    this.hs_withFile.evaluate = function (hs_name26CHmS, hs_mode26CHmT) {
        var hs_sat26CHr0 = new $hs.Thunk();
        hs_sat26CHr0.evaluateOnce = function () {
            return $hs.modules.GHCziIOziHandleziFD.hs_openFile.hscall(hs_name26CHmS, hs_mode26CHmT);
        };
        return $hs.modules.ControlziExceptionziBase.hs_bracket.hscall(hs_sat26CHr0, $hs.modules.GHCziIOziHandle.hs_hClose);
    };
    this.hs_hPrint.evaluate = function (hs_zddShow26CHmZ, hs_hdl26CHmX) {
        var hs_sat26CHr2 = new $hs.Thunk();
        hs_sat26CHr2.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_show.hscall(hs_zddShow26CHmZ);
        };
        var hs_sat26CHr1 = new $hs.Thunk();
        hs_sat26CHr1.evaluateOnce = function () {
            return $hs.modules.GHCziIOziHandleziText.hs_hPutStrLn.hscall(hs_hdl26CHmX);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26CHr1, hs_sat26CHr2);
    };
    this.hs_hReady.evaluate = function (hs_h26CHn2) {
        var hs_sat26CHr3 = new $hs.Data(1);
        hs_sat26CHr3.data = [0];
        return $hs.modules.GHCziIOziHandleziText.hs_hWaitForInput.hscall(hs_h26CHn2, hs_sat26CHr3);
    };
    this.hs_readIO.evaluate = function (hs_zddRead26CHn6, hs_s26CHn7) {
        var hs_sat26CHr8 = new $hs.Func(1);
        hs_sat26CHr8.evaluate = function (hs_ds26CHna) {
            var hs_wild26CHrf = hs_ds26CHna;
            if (hs_ds26CHna.notEvaluated) {
                hs_wild26CHrf = hs_ds26CHna.hscall();
            }
            var hs_x26CHnu = hs_wild26CHrf.data[0];
            var hs_t26CHne = hs_wild26CHrf.data[1];
            var hs_sat26CHrg = new $hs.Func(1);
            hs_sat26CHrg.evaluate = function (hs_ds126CHnm) {
                var hs_fail26CHnl = new $hs.Func(1);
                hs_fail26CHnl.evaluate = function (hs_ds226CHnk) {
                    var hs_sat26CHro = new $hs.Thunk();
                    hs_sat26CHro.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at /home/titto/cache/haskell/ghc-7.2.1/libraries/base/System/IO.hs:411:31-37\x00");
                    };
                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.GHCziBase.hs_zdfMonadZMZN, hs_sat26CHro);
                };
                var hs_wild126CHrk = hs_ds126CHnm;
                if (hs_ds126CHnm.notEvaluated) {
                    hs_wild126CHrk = hs_ds126CHnm.hscall();
                }
                var hs_ds226CHnq = hs_wild126CHrk.data[0];
                var hs_ds326CHns = hs_wild126CHrk.data[1];
                var hs_wild226CHrj = hs_ds226CHnq;
                if (hs_ds226CHnq.notEvaluated) {
                    hs_wild226CHrj = hs_ds226CHnq.hscall();
                }
                switch (hs_wild226CHrj.tag) {
                case 1:
                    var hs_wild326CHrn = hs_ds326CHns;
                    if (hs_ds326CHns.notEvaluated) {
                        hs_wild326CHrn = hs_ds326CHns.hscall();
                    }
                    switch (hs_wild326CHrn.tag) {
                    case 1:
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadZMZN, hs_x26CHnu);
                    case 2:
                        return hs_fail26CHnl.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    }
                case 2:
                    return hs_fail26CHnl.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                }
            };
            var hs_sat26CHre = new $hs.Thunk();
            hs_sat26CHre.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_lex.hscall(hs_t26CHne);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadZMZN, hs_sat26CHre, hs_sat26CHrg);
        };
        var hs_sat26CHr9 = new $hs.Thunk();
        hs_sat26CHr9.evaluateOnce = function () {
            return $hs.modules.TextziRead.hs_reads.hscall(hs_zddRead26CHn6, hs_s26CHn7);
        };
        var hs_wild26CHra = $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadZMZN, hs_sat26CHr9, hs_sat26CHr8);
        switch (hs_wild26CHra.tag) {
        case 1:
            var hs_sat26CHrc = new $hs.Thunk();
            hs_sat26CHrc.evaluateOnce = function () {
                var hs_sat26CHrd = new $hs.Thunk();
                hs_sat26CHrd.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Prelude.readIO: no parse\x00");
                };
                return $hs.modules.GHCziIOziException.hs_userError.hscall(hs_sat26CHrd);
            };
            return $hs.modules.GHCziIOziException.hs_ioError.hscall(hs_sat26CHrc);
        case 2:
            var hs_x26CHnI = hs_wild26CHra.data[0];
            var hs_ds26CHnG = hs_wild26CHra.data[1];
            var hs_wild126CHr5 = hs_ds26CHnG;
            if (hs_ds26CHnG.notEvaluated) {
                hs_wild126CHr5 = hs_ds26CHnG.hscall();
            }
            switch (hs_wild126CHr5.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_x26CHnI);
            case 2:
                var hs_sat26CHr4 = new $hs.Thunk();
                hs_sat26CHr4.evaluateOnce = function () {
                    var hs_sat26CHrb = new $hs.Thunk();
                    hs_sat26CHrb.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Prelude.readIO: ambiguous parse\x00");
                    };
                    return $hs.modules.GHCziIOziException.hs_userError.hscall(hs_sat26CHrb);
                };
                return $hs.modules.GHCziIOziException.hs_ioError.hscall(hs_sat26CHr4);
            }
        }
    };
    this.hs_appendFile.evaluate = function (hs_f26CHnP, hs_txt26CHnT) {
        var hs_sat26CHrq = new $hs.Func(1);
        hs_sat26CHrq.evaluate = function (hs_hdl26CHnS) {
            return $hs.modules.GHCziIOziHandleziText.hs_hPutStr.hscall(hs_hdl26CHnS, hs_txt26CHnT);
        };
        var hs_sat26CHrp = new $hs.Thunk();
        hs_sat26CHrp.evaluateOnce = function () {
            return $hs.modules.GHCziIOziHandleziFD.hs_openFile.hscall(hs_f26CHnP, $hs.modules.GHCziIOziIOMode.hs_AppendMode);
        };
        return $hs.modules.ControlziExceptionziBase.hs_bracket.hscall(hs_sat26CHrp, $hs.modules.GHCziIOziHandle.hs_hClose, hs_sat26CHrq);
    };
    this.hs_writeFile.evaluate = function (hs_f26CHnX, hs_txt26CHo1) {
        var hs_sat26CHrs = new $hs.Func(1);
        hs_sat26CHrs.evaluate = function (hs_hdl26CHo0) {
            return $hs.modules.GHCziIOziHandleziText.hs_hPutStr.hscall(hs_hdl26CHo0, hs_txt26CHo1);
        };
        var hs_sat26CHrr = new $hs.Thunk();
        hs_sat26CHrr.evaluateOnce = function () {
            return $hs.modules.GHCziIOziHandleziFD.hs_openFile.hscall(hs_f26CHnX, $hs.modules.GHCziIOziIOMode.hs_WriteMode);
        };
        return $hs.modules.ControlziExceptionziBase.hs_bracket.hscall(hs_sat26CHrr, $hs.modules.GHCziIOziHandle.hs_hClose, hs_sat26CHrs);
    };
    this.hs_getContents.evaluateOnce = function () {
        return $hs.modules.GHCziIOziHandleziText.hs_hGetContents.hscall($hs.modules.GHCziIOziHandleziFD.hs_stdin);
    };
    this.hs_getLine.evaluateOnce = function () {
        return $hs.modules.GHCziIOziHandleziText.hs_hGetLine.hscall($hs.modules.GHCziIOziHandleziFD.hs_stdin);
    };
    this.hs_readLn.evaluate = function (hs_zddRead26CHo5) {
        var hs_sat26CHrt = new $hs.Func(1);
        hs_sat26CHrt.evaluate = function (hs_l26CHo6) {
            var hs_sat26CHrv = new $hs.Func(1);
            hs_sat26CHrv.evaluate = function (hs_r26CHo9) {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_r26CHo9);
            };
            var hs_sat26CHru = new $hs.Thunk();
            hs_sat26CHru.evaluateOnce = function () {
                return $hs.modules.SystemziIO.hs_readIO.hscall(hs_zddRead26CHo5, hs_l26CHo6);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CHru, hs_sat26CHrv);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.SystemziIO.hs_getLine, hs_sat26CHrt);
    };
    this.hs_getChar.evaluateOnce = function () {
        return $hs.modules.GHCziIOziHandleziText.hs_hGetChar.hscall($hs.modules.GHCziIOziHandleziFD.hs_stdin);
    };
    this.hs_putStrLn.evaluate = function (hs_s26CHod) {
        return $hs.modules.GHCziIOziHandleziText.hs_hPutStrLn.hscall($hs.modules.GHCziIOziHandleziFD.hs_stdout, hs_s26CHod);
    };
    this.hs_putStr.evaluate = function (hs_s26CHof) {
        return $hs.modules.GHCziIOziHandleziText.hs_hPutStr.hscall($hs.modules.GHCziIOziHandleziFD.hs_stdout, hs_s26CHof);
    };
    this.hs_putChar.evaluate = function (hs_c26CHoh) {
        return $hs.modules.GHCziIOziHandleziText.hs_hPutChar.hscall($hs.modules.GHCziIOziHandleziFD.hs_stdout, hs_c26CHoh);
    };
    this.hs_interact.evaluate = function (hs_f26CHol) {
        var hs_sat26CHrw = new $hs.Func(1);
        hs_sat26CHrw.evaluate = function (hs_s26CHok) {
            var hs_sat26CHrx = new $hs.Thunk();
            hs_sat26CHrx.evaluateOnce = function () {
                return hs_f26CHol.hscall(hs_s26CHok);
            };
            return $hs.modules.GHCziIOziHandleziText.hs_hPutStr.hscall($hs.modules.GHCziIOziHandleziFD.hs_stdout, hs_sat26CHrx);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.SystemziIO.hs_getContents, hs_sat26CHrw);
    };
    this.hs_readFile.evaluate = function (hs_name26CHop) {
        var hs_sat26CHry = new $hs.Thunk();
        hs_sat26CHry.evaluateOnce = function () {
            return $hs.modules.GHCziIOziHandleziFD.hs_openFile.hscall(hs_name26CHop, $hs.modules.GHCziIOziIOMode.hs_ReadMode);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CHry, $hs.modules.GHCziIOziHandleziText.hs_hGetContents);
    };
    hs_sat26CHrA.evaluateOnce = function () {
        var hs_sat26CHrz = new $hs.Thunk();
        hs_sat26CHrz.evaluateOnce = function () {
            return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt, $hs.modules.SystemziPosixziInternals.hs_ozuNONBLOCK, $hs.modules.SystemziPosixziInternals.hs_ozuNOCTTY);
        };
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt, hs_sat26CHrz, $hs.modules.SystemziPosixziInternals.hs_ozuCREAT);
    };
    hs_rwzuflags25uhH3.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt, hs_sat26CHrA, $hs.modules.SystemziPosixziInternals.hs_ozuRDWR);
    };
    hs_openTempFilezq25uhGZ.evaluate = function (hs_loc26CHq7, hs_tmpzudir26CHpx, hs_template26CHoM, hs_binary26CHoA, hs_mode26CHpH) {
        var hs_oflags26CHoE = new $hs.Thunk();
        hs_oflags26CHoE.evaluateOnce = function () {
            var hs_sat26CHsn = new $hs.Thunk();
            hs_sat26CHsn.evaluateOnce = function () {
                var hs_wild26CHso = hs_binary26CHoA;
                if (hs_binary26CHoA.notEvaluated) {
                    hs_wild26CHso = hs_binary26CHoA.hscall();
                }
                switch (hs_wild26CHso.tag) {
                case 1:
                    var hs_sat26CHsp = new $hs.Thunk();
                    hs_sat26CHsp.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26CHsp);
                case 2:
                    if ($hs.modules.SystemziPosixziInternals.hs_ozuBINARY.notEvaluated) {
                        return $hs.modules.SystemziPosixziInternals.hs_ozuBINARY.hscall();
                    } else {
                        return $hs.modules.SystemziPosixziInternals.hs_ozuBINARY;
                    }
                }
            };
            var hs_sat26CHsm = new $hs.Thunk();
            hs_sat26CHsm.evaluateOnce = function () {
                return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt, hs_rwzuflags25uhH3, $hs.modules.SystemziPosixziInternals.hs_ozuEXCL);
            };
            return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt, hs_sat26CHsm, hs_sat26CHsn);
        };
        var hs_ds26CHp8 = new $hs.Thunk();
        hs_ds26CHp8.evaluateOnce = function () {
            var hs_sat26CHsd = new $hs.Thunk();
            hs_sat26CHsd.evaluateOnce = function () {
                return $hs.modules.GHCziList.hs_reverse.hscall(hs_template26CHoM);
            };
            var hs_sat26CHse = new $hs.Thunk();
            hs_sat26CHse.evaluateOnce = function () {
                var hs_ds126CHoH = new $hs.Data(1);
                hs_ds126CHoH.data = ["."];
                var hs_sat26CHsl = new $hs.Func(1);
                hs_sat26CHsl.evaluate = function (hs_ds226CHoJ) {
                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_ds226CHoJ, hs_ds126CHoH);
                };
                return $hs.modules.GHCziList.hs_break.hscall(hs_sat26CHsl);
            };
            var hs_wild26CHsf = $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CHse, hs_sat26CHsd);
            var hs_revzusuffix26CHoT = hs_wild26CHsf.data[0];
            var hs_ds126CHoR = hs_wild26CHsf.data[1];
            var hs_wild126CHsc = hs_ds126CHoR;
            if (hs_ds126CHoR.notEvaluated) {
                hs_wild126CHsc = hs_ds126CHoR.hscall();
            }
            switch (hs_wild126CHsc.tag) {
            case 1:
                var hs_sat26CHsk = new $hs.Thunk();
                hs_sat26CHsk.evaluateOnce = function () {
                    return $hs.modules.GHCziList.hs_reverse.hscall(hs_revzusuffix26CHoT);
                };
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26CHsk, $hs.modules.GHCziTypes.hs_ZMZN];
                return $res;
            case 2:
                var hs_ds226CHoX = hs_wild126CHsc.data[0];
                var hs_rest26CHp3 = hs_wild126CHsc.data[1];
                var hs_wild226CHsb = hs_ds226CHoX;
                if (hs_ds226CHoX.notEvaluated) {
                    hs_wild226CHsb = hs_ds226CHoX.hscall();
                }
                var hs_ds326CHp0 = hs_wild226CHsb.data[0];
                var hs_ds426CHsa = hs_ds326CHp0;
                if (hs_ds326CHp0.notEvaluated) {
                    hs_ds426CHsa = hs_ds326CHp0.hscall();
                }
                switch (hs_ds426CHsa) {
                case ".":
                    var hs_sat26CHsg = new $hs.Thunk();
                    hs_sat26CHsg.evaluateOnce = function () {
                        return $hs.modules.GHCziList.hs_reverse.hscall(hs_revzusuffix26CHoT);
                    };
                    var hs_sat26CHsh = new $hs.Data(1);
                    hs_sat26CHsh.data = ["."];
                    var hs_sat26CHsi = new $hs.Data(2);
                    hs_sat26CHsi.data = [hs_sat26CHsh, hs_sat26CHsg];
                    var hs_sat26CHs9 = new $hs.Thunk();
                    hs_sat26CHs9.evaluateOnce = function () {
                        return $hs.modules.GHCziList.hs_reverse.hscall(hs_rest26CHp3);
                    };
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26CHs9, hs_sat26CHsi];
                    return $res;
                default:
                    var hs_sat26CHsj = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("bug in System.IO.openTempFile\x00");
                    return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CHsj);
                }
            }
        };
        var hs_suffix26CHpe = new $hs.Thunk();
        hs_suffix26CHpe.evaluateOnce = function () {
            var hs_wild26CHs8 = hs_ds26CHp8;
            if (hs_ds26CHp8.notEvaluated) {
                hs_wild26CHs8 = hs_ds26CHp8.hscall();
            }
            var hs_suffix126CHpd = hs_wild26CHs8.data[1];
            if (hs_suffix126CHpd.notEvaluated) {
                return hs_suffix126CHpd.hscall();
            } else {
                return hs_suffix126CHpd;
            }
        };
        var hs_prefix26CHpk = new $hs.Thunk();
        hs_prefix26CHpk.evaluateOnce = function () {
            var hs_wild26CHs6 = hs_ds26CHp8;
            if (hs_ds26CHp8.notEvaluated) {
                hs_wild26CHs6 = hs_ds26CHp8.hscall();
            }
            var hs_prefix126CHpj = hs_wild26CHs6.data[0];
            if (hs_prefix126CHpj.notEvaluated) {
                return hs_prefix126CHpj.hscall();
            } else {
                return hs_prefix126CHpj;
            }
        };
        var hs_sat26CHrB = new $hs.Func(1);
        hs_sat26CHrB.evaluate = function (hs_pid26CHqg) {
            var hs_zddShow26CHpn = new $hs.Thunk();
            hs_zddShow26CHpn.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_zdp2Num.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCPid);
            };
            var hs_findTempName26CHqc = new $hs.Func(1);
            hs_findTempName26CHqc.evaluate = function (hs_x26CHps) {
                var hs_filepath26CHpD = new $hs.Thunk();
                hs_filepath26CHpD.evaluateOnce = function () {
                    var hs_b26CHpv = new $hs.Thunk();
                    hs_b26CHpv.evaluateOnce = function () {
                        var hs_sat26CHs3 = new $hs.Thunk();
                        hs_sat26CHs3.evaluateOnce = function () {
                            var hs_sat26CHs4 = new $hs.Thunk();
                            hs_sat26CHs4.evaluateOnce = function () {
                                return $hs.modules.GHCziShow.hs_show.hscall(hs_zddShow26CHpn, hs_x26CHps);
                            };
                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CHs4, hs_suffix26CHpe);
                        };
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_prefix26CHpk, hs_sat26CHs3);
                    };
                    var hs_wild26CHrX = $hs.modules.GHCziList.hs_null.hscall(hs_b26CHpv);
                    switch (hs_wild26CHrX.tag) {
                    case 1:
                        var hs_wild126CHrY = $hs.modules.GHCziList.hs_null.hscall(hs_tmpzudir26CHpx);
                        switch (hs_wild126CHrY.tag) {
                        case 1:
                            var hs_sat26CHrZ = new $hs.Thunk();
                            hs_sat26CHrZ.evaluateOnce = function () {
                                return $hs.modules.GHCziList.hs_last.hscall(hs_tmpzudir26CHpx);
                            };
                            var hs_wild226CHs0 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_sat26CHrZ, hs_pathSeparator25uhH0);
                            switch (hs_wild226CHs0.tag) {
                            case 1:
                                var hs_sat26CHs1 = new $hs.Thunk();
                                hs_sat26CHs1.evaluateOnce = function () {
                                    var hs_sat26CHs2 = new $hs.Data(2);
                                    hs_sat26CHs2.data = [hs_pathSeparator25uhH0, $hs.modules.GHCziTypes.hs_ZMZN];
                                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CHs2, hs_b26CHpv);
                                };
                                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_tmpzudir26CHpx, hs_sat26CHs1);
                            case 2:
                                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_tmpzudir26CHpx, hs_b26CHpv);
                            }
                        case 2:
                            if (hs_b26CHpv.notEvaluated) {
                                return hs_b26CHpv.hscall();
                            } else {
                                return hs_b26CHpv;
                            }
                        }
                    case 2:
                        if (hs_tmpzudir26CHpx.notEvaluated) {
                            return hs_tmpzudir26CHpx.hscall();
                        } else {
                            return hs_tmpzudir26CHpx;
                        }
                    }
                };
                var hs_sat26CHrD = new $hs.Func(1);
                hs_sat26CHrD.evaluate = function (hs_fd26CHpL) {
                    var hs_sat26CHrH = new $hs.Thunk();
                    hs_sat26CHrH.evaluateOnce = function () {
                        var hs_sat26CHrW = new $hs.Thunk();
                        hs_sat26CHrW.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26CHrW);
                    };
                    var hs_wild26CHrI = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.ForeignziCziTypes.hs_zdfOrdCInt, hs_fd26CHpL, hs_sat26CHrH);
                    switch (hs_wild26CHrI.tag) {
                    case 1:
                        var hs_sat26CHrQ = new $hs.Func(1);
                        hs_sat26CHrQ.evaluate = function (hs_ds126CHpR) {
                            var hs_wild126CHrS = hs_ds126CHpR;
                            if (hs_ds126CHpR.notEvaluated) {
                                hs_wild126CHrS = hs_ds126CHpR.hscall();
                            }
                            var hs_fD26CHpV = hs_wild126CHrS.data[0];
                            var hs_fdzutype26CHpW = hs_wild126CHrS.data[1];
                            var hs_sat26CHrT = new $hs.Func(1);
                            hs_sat26CHrT.evaluate = function (hs_h26CHq0) {
                                var hs_sat26CHrV = new $hs.Data(1);
                                hs_sat26CHrV.data = [hs_filepath26CHpD, hs_h26CHq0];
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CHrV);
                            };
                            var hs_sat26CHrR = new $hs.Thunk();
                            hs_sat26CHrR.evaluateOnce = function () {
                                var hs_sat26CHrU = new $hs.Data(2);
                                hs_sat26CHrU.data = [$hs.modules.GHCziIOziEncoding.hs_localeEncoding];
                                return $hs.modules.GHCziIOziHandleziFD.hs_mkHandleFromFD.hscall(hs_fD26CHpV, hs_fdzutype26CHpW, hs_filepath26CHpD, $hs.modules.GHCziIOziIOMode.hs_ReadWriteMode, $hs.modules.GHCziTypes.hs_False, hs_sat26CHrU);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CHrR, hs_sat26CHrT);
                        };
                        var hs_sat26CHrP = new $hs.Thunk();
                        hs_sat26CHrP.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziFD.hs_mkFD.hscall(hs_fd26CHpL, $hs.modules.GHCziIOziIOMode.hs_ReadWriteMode, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.GHCziTypes.hs_False, $hs.modules.GHCziTypes.hs_True);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CHrP, hs_sat26CHrQ);
                    case 2:
                        var hs_sat26CHrG = new $hs.Func(1);
                        hs_sat26CHrG.evaluate = function (hs_errno26CHq5) {
                            var hs_wild126CHrK = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26CHq5, $hs.modules.ForeignziCziError.hs_eEXIST);
                            switch (hs_wild126CHrK.tag) {
                            case 1:
                                var hs_sat26CHrN = new $hs.Thunk();
                                hs_sat26CHrN.evaluateOnce = function () {
                                    var hs_sat26CHrO = new $hs.Data(2);
                                    hs_sat26CHrO.data = [hs_tmpzudir26CHpx];
                                    return $hs.modules.ForeignziCziError.hs_errnoToIOError.hscall(hs_loc26CHq7, hs_errno26CHq5, $hs.modules.DataziMaybe.hs_Nothing, hs_sat26CHrO);
                                };
                                return $hs.modules.GHCziIOziException.hs_ioError.hscall(hs_sat26CHrN);
                            case 2:
                                var hs_sat26CHrJ = new $hs.Thunk();
                                hs_sat26CHrJ.evaluateOnce = function () {
                                    var hs_sat26CHrL = new $hs.Thunk();
                                    hs_sat26CHrL.evaluateOnce = function () {
                                        var hs_sat26CHrM = new $hs.Thunk();
                                        hs_sat26CHrM.evaluateOnce = function () {
                                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                        };
                                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCPid, hs_sat26CHrM);
                                    };
                                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCPid, hs_x26CHps, hs_sat26CHrL);
                                };
                                return hs_findTempName26CHqc.hscall(hs_sat26CHrJ);
                            }
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.ForeignziCziError.hs_getErrno, hs_sat26CHrG);
                    }
                };
                var hs_sat26CHrC = new $hs.Thunk();
                hs_sat26CHrC.evaluateOnce = function () {
                    var hs_sat26CHrF = new $hs.Func(1);
                    hs_sat26CHrF.evaluate = function (hs_f26CHpG) {
                        return $hs.modules.SystemziPosixziInternals.hs_czuopen.hscall(hs_f26CHpG, hs_oflags26CHoE, hs_mode26CHpH);
                    };
                    var hs_sat26CHrE = new $hs.Thunk();
                    hs_sat26CHrE.evaluateOnce = function () {
                        return $hs.modules.SystemziPosixziInternals.hs_withFilePath.hscall(hs_filepath26CHpD);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CHrE, hs_sat26CHrF);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CHrC, hs_sat26CHrD);
            };
            return hs_findTempName26CHqc.hscall(hs_pid26CHqg);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.SystemziPosixziInternals.hs_czugetpid, hs_sat26CHrB);
    };
    this.hs_openTempFile.evaluate = function (hs_tmpzudir26CHql, hs_template26CHqm) {
        var hs_sat26CHsr = new $hs.Thunk();
        hs_sat26CHsr.evaluateOnce = function () {
            var hs_sat26CHss = new $hs.Thunk();
            hs_sat26CHss.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(384);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCMode, hs_sat26CHss);
        };
        var hs_sat26CHsq = new $hs.Thunk();
        hs_sat26CHsq.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("openTempFile\x00");
        };
        return hs_openTempFilezq25uhGZ.hscall(hs_sat26CHsq, hs_tmpzudir26CHql, hs_template26CHqm, $hs.modules.GHCziTypes.hs_False, hs_sat26CHsr);
    };
    this.hs_openBinaryTempFile.evaluate = function (hs_tmpzudir26CHqs, hs_template26CHqt) {
        var hs_sat26CHsu = new $hs.Thunk();
        hs_sat26CHsu.evaluateOnce = function () {
            var hs_sat26CHsv = new $hs.Thunk();
            hs_sat26CHsv.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(384);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCMode, hs_sat26CHsv);
        };
        var hs_sat26CHst = new $hs.Thunk();
        hs_sat26CHst.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("openBinaryTempFile\x00");
        };
        return hs_openTempFilezq25uhGZ.hscall(hs_sat26CHst, hs_tmpzudir26CHqs, hs_template26CHqt, $hs.modules.GHCziTypes.hs_True, hs_sat26CHsu);
    };
    this.hs_openTempFileWithDefaultPermissions.evaluate = function (hs_tmpzudir26CHqz, hs_template26CHqA) {
        var hs_sat26CHsx = new $hs.Thunk();
        hs_sat26CHsx.evaluateOnce = function () {
            var hs_sat26CHsy = new $hs.Thunk();
            hs_sat26CHsy.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(438);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCMode, hs_sat26CHsy);
        };
        var hs_sat26CHsw = new $hs.Thunk();
        hs_sat26CHsw.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("openBinaryTempFile\x00");
        };
        return hs_openTempFilezq25uhGZ.hscall(hs_sat26CHsw, hs_tmpzudir26CHqz, hs_template26CHqA, $hs.modules.GHCziTypes.hs_False, hs_sat26CHsx);
    };
    this.hs_openBinaryTempFileWithDefaultPermissions.evaluate = function (hs_tmpzudir26CHqG, hs_template26CHqH) {
        var hs_sat26CHsA = new $hs.Thunk();
        hs_sat26CHsA.evaluateOnce = function () {
            var hs_sat26CHsB = new $hs.Thunk();
            hs_sat26CHsB.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(438);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCMode, hs_sat26CHsB);
        };
        var hs_sat26CHsz = new $hs.Thunk();
        hs_sat26CHsz.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("openBinaryTempFile\x00");
        };
        return hs_openTempFilezq25uhGZ.hscall(hs_sat26CHsz, hs_tmpzudir26CHqG, hs_template26CHqH, $hs.modules.GHCziTypes.hs_True, hs_sat26CHsA);
    };
    this.hs_print.evaluate = function (hs_zddShow26CHqM, hs_x26CHqN) {
        var hs_sat26CHsC = new $hs.Thunk();
        hs_sat26CHsC.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_show.hscall(hs_zddShow26CHqM, hs_x26CHqN);
        };
        return $hs.modules.GHCziIOziHandleziText.hs_hPutStrLn.hscall($hs.modules.GHCziIOziHandleziFD.hs_stdout, hs_sat26CHsC);
    };
};
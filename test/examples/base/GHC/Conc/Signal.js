
$hs.modules.GHCziConcziSignal = new $hs.Module();
$hs.modules.GHCziConcziSignal.dependencies = ["GHC.CString", "GHC.Unit", "Data.Maybe", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.Err", "GHC.Classes", "GHC.IO", "GHC.Arr", "GHC.Conc.Sync", "GHC.IOArray", "GHC.MVar", "GHC.Ptr", "GHC.Stable", "Control.Concurrent.MVar", "Foreign.C.Types"];
$hs.modules.GHCziConcziSignal.initBeforeDependencies = function () {
    this.hs_setHandler = new $hs.Func(2);
    this.hs_runHandlers = new $hs.Func(2);
    this.hs_setHandler.notEvaluated = true;
    this.hs_setHandler.evaluate = function (hs_sig26CYbr, hs_handler26CYbB) {
        $hs.modules.GHCziConcziSignal.loadDependencies();
        return this.evaluate(hs_sig26CYbr, hs_handler26CYbB);
    };
    this.hs_runHandlers.notEvaluated = true;
    this.hs_runHandlers.evaluate = function (hs_pzuinfo26CYc2, hs_sig26CYbL) {
        $hs.modules.GHCziConcziSignal.loadDependencies();
        return this.evaluate(hs_pzuinfo26CYc2, hs_sig26CYbL);
    };
};
$hs.modules.GHCziConcziSignal.initAfterDependencies = function () {
    this.hs_setHandler.notEvaluated = false;
    this.hs_runHandlers.notEvaluated = false;
    var hs_sat26CYcx = new $hs.Thunk();
    var hs_signalzuhandlers25tydt = new $hs.Thunk();
    hs_sat26CYcx.evaluateOnce = function () {
        var hs_sat26CYcc = new $hs.Func(1);
        hs_sat26CYcc.evaluate = function (hs_arr26CYaM) {
            var hs_sat26CYch = new $hs.Func(1);
            hs_sat26CYch.evaluate = function (hs_m26CYaP) {
                var hs_sat26CYci = new $hs.Thunk();
                hs_sat26CYci.evaluateOnce = function () {
                    var hs_sat26CYck = new $hs.Func(1);
                    hs_sat26CYck.evaluate = function (hs_stablezuref26CYaT) {
                        var hs_ref26CYaV = new $hs.Thunk();
                        hs_ref26CYaV.evaluateOnce = function () {
                            var hs_sat26CYcw = new $hs.Thunk();
                            hs_sat26CYcw.evaluateOnce = function () {
                                return $hs.modules.GHCziStable.hs_castStablePtrToPtr.hscall(hs_stablezuref26CYaT);
                            };
                            return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_sat26CYcw);
                        };
                        var hs_sat26CYcm = new $hs.Func(1);
                        hs_sat26CYcm.evaluate = function (hs_ref226CYbc) {
                            var hs_wild26CYcr = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziPtr.hs_zdfEqPtr, hs_ref26CYaV, hs_ref226CYbc);
                            switch (hs_wild26CYcr.tag) {
                            case 1:
                                var hs_sat26CYct = new $hs.Thunk();
                                hs_sat26CYct.evaluateOnce = function () {
                                    var hs_sat26CYcu = new $hs.Thunk();
                                    hs_sat26CYcu.evaluateOnce = function () {
                                        var hs_sat26CYcv = new $hs.Thunk();
                                        hs_sat26CYcv.evaluateOnce = function () {
                                            return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_ref226CYbc);
                                        };
                                        return $hs.modules.GHCziStable.hs_castPtrToStablePtr.hscall(hs_sat26CYcv);
                                    };
                                    return $hs.modules.GHCziStable.hs_deRefStablePtr.hscall(hs_sat26CYcu);
                                };
                                var hs_sat26CYcs = new $hs.Thunk();
                                hs_sat26CYcs.evaluateOnce = function () {
                                    return $hs.modules.GHCziStable.hs_freeStablePtr.hscall(hs_stablezuref26CYaT);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CYcs, hs_sat26CYct);
                            case 2:
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_m26CYaP);
                            }
                        };
                        var hs_sat26CYcl = new $hs.Thunk();
                        hs_sat26CYcl.evaluateOnce = function () {
                            var hs_ds26CYco = hs_ref26CYaV;
                            if (hs_ref26CYaV.notEvaluated) {
                                hs_ds26CYco = hs_ref26CYaV.hscall();
                            }
                            var hs_ds126CYb0 = hs_ds26CYco.data[0];
                            var hs_sat26CYcn = new $hs.Func(1);
                            hs_sat26CYcn.evaluate = function (hs_ds226CYb1) {
                                var hs_wild26CYcq = [hs_ds226CYb1, getOrSetGHCConcSignalSignalHandlerStore(hs_ds126CYb0)];
                                var hs_ds326CYb6 = hs_wild26CYcq[0];
                                var hs_ds426CYb7 = hs_wild26CYcq[1];
                                var hs_sat26CYcp = new $hs.Data(1);
                                hs_sat26CYcp.data = [hs_ds426CYb7];
                                return [hs_ds326CYb6, hs_sat26CYcp];
                            };
                            if (hs_sat26CYcn.notEvaluated) {
                                return hs_sat26CYcn.hscall();
                            } else {
                                return hs_sat26CYcn;
                            }
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CYcl, hs_sat26CYcm);
                    };
                    var hs_sat26CYcj = new $hs.Thunk();
                    hs_sat26CYcj.evaluateOnce = function () {
                        return $hs.modules.GHCziStable.hs_newStablePtr.hscall(hs_m26CYaP);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CYcj, hs_sat26CYck);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_maskzu, hs_sat26CYci);
            };
            var hs_sat26CYcg = new $hs.Thunk();
            hs_sat26CYcg.evaluateOnce = function () {
                return $hs.modules.GHCziMVar.hs_newMVar.hscall(hs_arr26CYaM);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CYcg, hs_sat26CYch);
        };
        var hs_sat26CYcb = new $hs.Thunk();
        hs_sat26CYcb.evaluateOnce = function () {
            var hs_sat26CYce = new $hs.Data(1);
            hs_sat26CYce.data = [64];
            var hs_sat26CYcf = new $hs.Data(1);
            hs_sat26CYcf.data = [0];
            var hs_sat26CYcd = new $hs.Data(1);
            hs_sat26CYcd.data = [hs_sat26CYcf, hs_sat26CYce];
            return $hs.modules.GHCziIOArray.hs_newIOArray.hscall($hs.modules.GHCziArr.hs_zdfIxInt, hs_sat26CYcd, $hs.modules.DataziMaybe.hs_Nothing);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CYcb, hs_sat26CYcc);
    };
    hs_signalzuhandlers25tydt.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_unsafePerformIO, hs_sat26CYcx);
    };
    this.hs_setHandler.evaluate = function (hs_sig26CYbr, hs_handler26CYbB) {
        var hs_int26CYbs = new $hs.Thunk();
        hs_int26CYbs.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sig26CYbr);
        };
        var hs_sat26CYcz = new $hs.Func(1);
        hs_sat26CYcz.evaluate = function (hs_arr26CYbv) {
            var hs_sat26CYcA = new $hs.Thunk();
            hs_sat26CYcA.evaluateOnce = function () {
                var hs_sat26CYcH = new $hs.Thunk();
                hs_sat26CYcH.evaluateOnce = function () {
                    return $hs.modules.GHCziIOArray.hs_boundsIOArray.hscall(hs_arr26CYbv);
                };
                return $hs.modules.GHCziArr.hs_inRange.hscall($hs.modules.GHCziArr.hs_zdfIxInt, hs_sat26CYcH, hs_int26CYbs);
            };
            var hs_wild26CYcB = $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26CYcA);
            switch (hs_wild26CYcB.tag) {
            case 1:
                var hs_sat26CYcE = new $hs.Func(1);
                hs_sat26CYcE.evaluate = function (hs_old26CYbD) {
                    var hs_sat26CYcG = new $hs.Thunk();
                    hs_sat26CYcG.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_old26CYbD);
                    };
                    var hs_sat26CYcF = new $hs.Thunk();
                    hs_sat26CYcF.evaluateOnce = function () {
                        return $hs.modules.GHCziIOArray.hs_unsafeWriteIOArray.hscall($hs.modules.GHCziArr.hs_zdfIxInt, hs_arr26CYbv, hs_int26CYbs, hs_handler26CYbB);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CYcF, hs_sat26CYcG);
                };
                var hs_sat26CYcD = new $hs.Thunk();
                hs_sat26CYcD.evaluateOnce = function () {
                    return $hs.modules.GHCziIOArray.hs_unsafeReadIOArray.hscall($hs.modules.GHCziArr.hs_zdfIxInt, hs_arr26CYbv, hs_int26CYbs);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CYcD, hs_sat26CYcE);
            case 2:
                var hs_sat26CYcC = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("GHC.Conc.setHandler: signal out of range\x00");
                return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CYcC);
            }
        };
        var hs_sat26CYcy = new $hs.Thunk();
        hs_sat26CYcy.evaluateOnce = function () {
            return $hs.modules.ControlziConcurrentziMVar.hs_withMVar.hscall(hs_signalzuhandlers25tydt);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CYcy, hs_sat26CYcz);
    };
    this.hs_runHandlers.evaluate = function (hs_pzuinfo26CYc2, hs_sig26CYbL) {
        var hs_int26CYbM = new $hs.Thunk();
        hs_int26CYbM.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sig26CYbL);
        };
        var hs_sat26CYcJ = new $hs.Func(1);
        hs_sat26CYcJ.evaluate = function (hs_arr26CYbP) {
            var hs_sat26CYcK = new $hs.Thunk();
            hs_sat26CYcK.evaluateOnce = function () {
                var hs_sat26CYcU = new $hs.Thunk();
                hs_sat26CYcU.evaluateOnce = function () {
                    return $hs.modules.GHCziIOArray.hs_boundsIOArray.hscall(hs_arr26CYbP);
                };
                return $hs.modules.GHCziArr.hs_inRange.hscall($hs.modules.GHCziArr.hs_zdfIxInt, hs_sat26CYcU, hs_int26CYbM);
            };
            var hs_wild26CYcL = $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26CYcK);
            switch (hs_wild26CYcL.tag) {
            case 1:
                var hs_sat26CYcN = new $hs.Func(1);
                hs_sat26CYcN.evaluate = function (hs_handler26CYbV) {
                    var hs_wild126CYcR = hs_handler26CYbV;
                    if (hs_handler26CYbV.notEvaluated) {
                        hs_wild126CYcR = hs_handler26CYbV.hscall();
                    }
                    switch (hs_wild126CYcR.tag) {
                    case 1:
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                    case 2:
                        var hs_ds26CYbY = hs_wild126CYcR.data[0];
                        var hs_wild226CYcP = hs_ds26CYbY;
                        if (hs_ds26CYbY.notEvaluated) {
                            hs_wild226CYcP = hs_ds26CYbY.hscall();
                        }
                        var hs_f26CYc3 = hs_wild226CYcP.data[0];
                        var hs_sat26CYcS = new $hs.Func(1);
                        hs_sat26CYcS.evaluate = function (hs_ds226CYc7) {
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                        };
                        var hs_sat26CYcO = new $hs.Thunk();
                        hs_sat26CYcO.evaluateOnce = function () {
                            var hs_sat26CYcT = new $hs.Thunk();
                            hs_sat26CYcT.evaluateOnce = function () {
                                return hs_f26CYc3.hscall(hs_pzuinfo26CYc2);
                            };
                            return $hs.modules.GHCziConcziSync.hs_forkIO.hscall(hs_sat26CYcT);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CYcO, hs_sat26CYcS);
                    }
                };
                var hs_sat26CYcM = new $hs.Thunk();
                hs_sat26CYcM.evaluateOnce = function () {
                    return $hs.modules.GHCziIOArray.hs_unsafeReadIOArray.hscall($hs.modules.GHCziArr.hs_zdfIxInt, hs_arr26CYbP, hs_int26CYbM);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CYcM, hs_sat26CYcN);
            case 2:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            }
        };
        var hs_sat26CYcI = new $hs.Thunk();
        hs_sat26CYcI.evaluateOnce = function () {
            return $hs.modules.ControlziConcurrentziMVar.hs_withMVar.hscall(hs_signalzuhandlers25tydt);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CYcI, hs_sat26CYcJ);
    };
};
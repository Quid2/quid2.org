
$hs.modules.GHCziConcziSignal = new $hs.Module();
$hs.modules.GHCziConcziSignal.dependencies = ["GHC.Unit", "Data.Maybe", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.Err", "GHC.Classes", "GHC.IO", "GHC.Arr", "GHC.Conc.Sync", "GHC.MVar", "GHC.IOArray", "GHC.Ptr", "GHC.Stable", "Control.Concurrent.MVar", "Foreign.C.Types"];
$hs.modules.GHCziConcziSignal.initBeforeDependencies = function () {
    this.hs_setHandler = new $hs.Func(2);
    this.hs_runHandlers = new $hs.Func(2);
    this.hs_setHandler.notEvaluated = true;
    this.hs_setHandler.evaluate = function (hs_sig26DmCM, hs_handler26DmCW) {
        $hs.modules.GHCziConcziSignal.loadDependencies();
        return this.evaluate(hs_sig26DmCM, hs_handler26DmCW);
    };
    this.hs_runHandlers.notEvaluated = true;
    this.hs_runHandlers.evaluate = function (hs_pzuinfo26DmDn, hs_sig26DmD6) {
        $hs.modules.GHCziConcziSignal.loadDependencies();
        return this.evaluate(hs_pzuinfo26DmDn, hs_sig26DmD6);
    };
};
$hs.modules.GHCziConcziSignal.initAfterDependencies = function () {
    this.hs_setHandler.notEvaluated = false;
    this.hs_runHandlers.notEvaluated = false;
    var hs_sat26DmDR = new $hs.Thunk();
    var hs_signalzuhandlers25tP5z = new $hs.Thunk();
    hs_sat26DmDR.evaluateOnce = function () {
        var hs_sat26DmDM = new $hs.Func(1);
        hs_sat26DmDM.evaluate = function (hs_arr26DmC7) {
            var hs_sat26DmDK = new $hs.Func(1);
            hs_sat26DmDK.evaluate = function (hs_m26DmCa) {
                var hs_sat26DmDJ = new $hs.Thunk();
                hs_sat26DmDJ.evaluateOnce = function () {
                    var hs_sat26DmDH = new $hs.Func(1);
                    hs_sat26DmDH.evaluate = function (hs_stablezuref26DmCe) {
                        var hs_ref26DmCg = new $hs.Thunk();
                        hs_ref26DmCg.evaluateOnce = function () {
                            var hs_sat26DmDv = new $hs.Thunk();
                            hs_sat26DmDv.evaluateOnce = function () {
                                return $hs.modules.GHCziStable.hs_castStablePtrToPtr.hscall(hs_stablezuref26DmCe);
                            };
                            return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_sat26DmDv);
                        };
                        var hs_sat26DmDD = new $hs.Func(1);
                        hs_sat26DmDD.evaluate = function (hs_ref226DmCx) {
                            var hs_wild26DmDw = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziPtr.hs_zdfEqPtr, hs_ref26DmCg, hs_ref226DmCx);
                            switch (hs_wild26DmDw.tag) {
                            case 1:
                                var hs_sat26DmDz = new $hs.Thunk();
                                hs_sat26DmDz.evaluateOnce = function () {
                                    var hs_sat26DmDy = new $hs.Thunk();
                                    hs_sat26DmDy.evaluateOnce = function () {
                                        var hs_sat26DmDx = new $hs.Thunk();
                                        hs_sat26DmDx.evaluateOnce = function () {
                                            return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_ref226DmCx);
                                        };
                                        return $hs.modules.GHCziStable.hs_castPtrToStablePtr.hscall(hs_sat26DmDx);
                                    };
                                    return $hs.modules.GHCziStable.hs_deRefStablePtr.hscall(hs_sat26DmDy);
                                };
                                var hs_sat26DmDA = new $hs.Thunk();
                                hs_sat26DmDA.evaluateOnce = function () {
                                    return $hs.modules.GHCziStable.hs_freeStablePtr.hscall(hs_stablezuref26DmCe);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmDA, hs_sat26DmDz);
                            case 2:
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_m26DmCa);
                            }
                        };
                        var hs_sat26DmDG = new $hs.Thunk();
                        hs_sat26DmDG.evaluateOnce = function () {
                            var hs_ds26DmDC = hs_ref26DmCg;
                            if (hs_ref26DmCg.notEvaluated) {
                                hs_ds26DmDC = hs_ref26DmCg.hscall();
                            }
                            var hs_ds126DmCl = hs_ds26DmDC.data[0];
                            var hs_sat26DmDF = new $hs.Func(1);
                            hs_sat26DmDF.evaluate = function (hs_ds226DmCm) {
                                var hs_wild26DmDB = [hs_ds226DmCm, getOrSetGHCConcSignalSignalHandlerStore(hs_ds126DmCl)];
                                var hs_ds326DmCr = hs_wild26DmDB[0];
                                var hs_ds426DmCs = hs_wild26DmDB[1];
                                var hs_sat26DmDE = new $hs.Data(1);
                                hs_sat26DmDE.data = [hs_ds426DmCs];
                                return [hs_ds326DmCr, hs_sat26DmDE];
                            };
                            if (hs_sat26DmDF.notEvaluated) {
                                return hs_sat26DmDF.hscall();
                            } else {
                                return hs_sat26DmDF;
                            }
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmDG, hs_sat26DmDD);
                    };
                    var hs_sat26DmDI = new $hs.Thunk();
                    hs_sat26DmDI.evaluateOnce = function () {
                        return $hs.modules.GHCziStable.hs_newStablePtr.hscall(hs_m26DmCa);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmDI, hs_sat26DmDH);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_maskzu, hs_sat26DmDJ);
            };
            var hs_sat26DmDL = new $hs.Thunk();
            hs_sat26DmDL.evaluateOnce = function () {
                return $hs.modules.GHCziMVar.hs_newMVar.hscall(hs_arr26DmC7);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmDL, hs_sat26DmDK);
        };
        var hs_sat26DmDQ = new $hs.Thunk();
        hs_sat26DmDQ.evaluateOnce = function () {
            var hs_sat26DmDN = new $hs.Data(1);
            hs_sat26DmDN.data = [64];
            var hs_sat26DmDO = new $hs.Data(1);
            hs_sat26DmDO.data = [0];
            var hs_sat26DmDP = new $hs.Data(1);
            hs_sat26DmDP.data = [hs_sat26DmDO, hs_sat26DmDN];
            return $hs.modules.GHCziIOArray.hs_newIOArray.hscall($hs.modules.GHCziArr.hs_zdfIxInt, hs_sat26DmDP, $hs.modules.DataziMaybe.hs_Nothing);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmDQ, hs_sat26DmDM);
    };
    hs_signalzuhandlers25tP5z.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_unsafePerformIO, hs_sat26DmDR);
    };
    this.hs_setHandler.evaluate = function (hs_sig26DmCM, hs_handler26DmCW) {
        var hs_int26DmCN = new $hs.Thunk();
        hs_int26DmCN.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sig26DmCM);
        };
        var hs_sat26DmE0 = new $hs.Func(1);
        hs_sat26DmE0.evaluate = function (hs_arr26DmCQ) {
            var hs_sat26DmDU = new $hs.Thunk();
            hs_sat26DmDU.evaluateOnce = function () {
                var hs_sat26DmDS = new $hs.Thunk();
                hs_sat26DmDS.evaluateOnce = function () {
                    return $hs.modules.GHCziIOArray.hs_boundsIOArray.hscall(hs_arr26DmCQ);
                };
                return $hs.modules.GHCziArr.hs_inRange.hscall($hs.modules.GHCziArr.hs_zdfIxInt, hs_sat26DmDS, hs_int26DmCN);
            };
            var hs_wild26DmDT = $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DmDU);
            switch (hs_wild26DmDT.tag) {
            case 1:
                var hs_sat26DmDX = new $hs.Func(1);
                hs_sat26DmDX.evaluate = function (hs_old26DmCY) {
                    var hs_sat26DmDV = new $hs.Thunk();
                    hs_sat26DmDV.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_old26DmCY);
                    };
                    var hs_sat26DmDW = new $hs.Thunk();
                    hs_sat26DmDW.evaluateOnce = function () {
                        return $hs.modules.GHCziIOArray.hs_unsafeWriteIOArray.hscall($hs.modules.GHCziArr.hs_zdfIxInt, hs_arr26DmCQ, hs_int26DmCN, hs_handler26DmCW);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmDW, hs_sat26DmDV);
                };
                var hs_sat26DmDY = new $hs.Thunk();
                hs_sat26DmDY.evaluateOnce = function () {
                    return $hs.modules.GHCziIOArray.hs_unsafeReadIOArray.hscall($hs.modules.GHCziArr.hs_zdfIxInt, hs_arr26DmCQ, hs_int26DmCN);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmDY, hs_sat26DmDX);
            case 2:
                var hs_sat26DmDZ = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("GHC.Conc.setHandler: signal out of range\x00");
                return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DmDZ);
            }
        };
        var hs_sat26DmE1 = new $hs.Thunk();
        hs_sat26DmE1.evaluateOnce = function () {
            return $hs.modules.ControlziConcurrentziMVar.hs_withMVar.hscall(hs_signalzuhandlers25tP5z);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DmE1, hs_sat26DmE0);
    };
    this.hs_runHandlers.evaluate = function (hs_pzuinfo26DmDn, hs_sig26DmD6) {
        var hs_int26DmD7 = new $hs.Thunk();
        hs_int26DmD7.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sig26DmD6);
        };
        var hs_sat26DmEe = new $hs.Func(1);
        hs_sat26DmEe.evaluate = function (hs_arr26DmDa) {
            var hs_sat26DmE5 = new $hs.Thunk();
            hs_sat26DmE5.evaluateOnce = function () {
                var hs_sat26DmE2 = new $hs.Thunk();
                hs_sat26DmE2.evaluateOnce = function () {
                    return $hs.modules.GHCziIOArray.hs_boundsIOArray.hscall(hs_arr26DmDa);
                };
                return $hs.modules.GHCziArr.hs_inRange.hscall($hs.modules.GHCziArr.hs_zdfIxInt, hs_sat26DmE2, hs_int26DmD7);
            };
            var hs_wild26DmE4 = $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DmE5);
            switch (hs_wild26DmE4.tag) {
            case 1:
                var hs_sat26DmEc = new $hs.Func(1);
                hs_sat26DmEc.evaluate = function (hs_handler26DmDg) {
                    var hs_wild126DmE3 = hs_handler26DmDg;
                    if (hs_handler26DmDg.notEvaluated) {
                        hs_wild126DmE3 = hs_handler26DmDg.hscall();
                    }
                    switch (hs_wild126DmE3.tag) {
                    case 1:
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                    case 2:
                        var hs_ds26DmDj = hs_wild126DmE3.data[0];
                        var hs_wild226DmE7 = hs_ds26DmDj;
                        if (hs_ds26DmDj.notEvaluated) {
                            hs_wild226DmE7 = hs_ds26DmDj.hscall();
                        }
                        var hs_f26DmDo = hs_wild226DmE7.data[0];
                        var hs_sat26DmE9 = new $hs.Func(1);
                        hs_sat26DmE9.evaluate = function (hs_ds226DmE6) {
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                        };
                        var hs_sat26DmEb = new $hs.Thunk();
                        hs_sat26DmEb.evaluateOnce = function () {
                            var hs_sat26DmEa = new $hs.Thunk();
                            hs_sat26DmEa.evaluateOnce = function () {
                                return hs_f26DmDo.hscall(hs_pzuinfo26DmDn);
                            };
                            return $hs.modules.GHCziConcziSync.hs_forkIO.hscall(hs_sat26DmEa);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmEb, hs_sat26DmE9);
                    }
                };
                var hs_sat26DmEd = new $hs.Thunk();
                hs_sat26DmEd.evaluateOnce = function () {
                    return $hs.modules.GHCziIOArray.hs_unsafeReadIOArray.hscall($hs.modules.GHCziArr.hs_zdfIxInt, hs_arr26DmDa, hs_int26DmD7);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmEd, hs_sat26DmEc);
            case 2:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            }
        };
        var hs_sat26DmEf = new $hs.Thunk();
        hs_sat26DmEf.evaluateOnce = function () {
            return $hs.modules.ControlziConcurrentziMVar.hs_withMVar.hscall(hs_signalzuhandlers25tP5z);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DmEf, hs_sat26DmEe);
    };
};

$hs.modules.GHCziEventziThread = new $hs.Module();
$hs.modules.GHCziEventziThread.dependencies = ["GHC.Prim", "GHC.Types", "GHC.CString", "GHC.Unit", "Data.Maybe", "GHC.Base", "GHC.Classes", "GHC.IO", "GHC.Conc.Sync", "GHC.IO.Exception", "GHC.IORef", "GHC.MVar", "Foreign.C.Error", "GHC.Event.Internal", "GHC.Event.Manager"];
$hs.modules.GHCziEventziThread.initBeforeDependencies = function () {
    this.hs_getSystemEventManager = new $hs.Thunk();
    this.hs_threadDelay = new $hs.Func(1);
    this.hs_registerDelay = new $hs.Func(1);
    this.hs_closeFdWith = new $hs.Func(2);
    this.hs_threadWaitRead = new $hs.Func(1);
    this.hs_threadWaitWrite = new $hs.Func(1);
    this.hs_ensureIOManagerIsRunning = new $hs.Thunk();
    this.hs_getSystemEventManager.evaluateOnce = function () {
        $hs.modules.GHCziEventziThread.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_threadDelay.notEvaluated = true;
    this.hs_threadDelay.evaluate = function (hs_usecs26DvJF) {
        $hs.modules.GHCziEventziThread.loadDependencies();
        return this.evaluate(hs_usecs26DvJF);
    };
    this.hs_registerDelay.notEvaluated = true;
    this.hs_registerDelay.evaluate = function (hs_usecs26DvK1) {
        $hs.modules.GHCziEventziThread.loadDependencies();
        return this.evaluate(hs_usecs26DvK1);
    };
    this.hs_closeFdWith.notEvaluated = true;
    this.hs_closeFdWith.evaluate = function (hs_close26DvKk, hs_fd26DvKl) {
        $hs.modules.GHCziEventziThread.loadDependencies();
        return this.evaluate(hs_close26DvKk, hs_fd26DvKl);
    };
    this.hs_threadWaitRead.notEvaluated = true;
    this.hs_threadWaitRead.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziEventziThread.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_threadWaitWrite.notEvaluated = true;
    this.hs_threadWaitWrite.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziEventziThread.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_ensureIOManagerIsRunning.evaluateOnce = function () {
        $hs.modules.GHCziEventziThread.loadDependencies();
        return this.evaluateOnce();
    };
};
$hs.modules.GHCziEventziThread.initAfterDependencies = function () {
    this.hs_threadDelay.notEvaluated = false;
    this.hs_registerDelay.notEvaluated = false;
    this.hs_closeFdWith.notEvaluated = false;
    this.hs_threadWaitRead.notEvaluated = false;
    this.hs_threadWaitWrite.notEvaluated = false;
    var hs_zdwccall25v7cl = new $hs.Func(2);
    var hs_a25v7cs = new $hs.Func(2);
    var hs_getOrSetSystemEventThreadEventManagerStore25u6vb = new $hs.Func(2);
    var hs_zdwccall125v7cI = new $hs.Func(2);
    var hs_a125v7cP = new $hs.Func(2);
    var hs_getOrSetSystemEventThreadIOManagerThreadStore25u6va = new $hs.Func(2);
    var hs_threaded25u6v9 = new $hs.Thunk();
    var hs_sat26DvLZ = new $hs.Thunk();
    var hs_eventManager25u6vj = new $hs.Thunk();
    var hs_threadWait25u6vh = new $hs.Func(2);
    var hs_sat26DvMH = new $hs.Thunk();
    var hs_ioManager25u6vk = new $hs.Thunk();
    hs_zdwccall25v7cl.evaluate = function (hs_ds26DvIF, hs_eta26DvIG) {
        return [hs_eta26DvIG, getOrSetSystemEventThreadEventManagerStore(hs_ds26DvIF)];
    };
    hs_a25v7cs.evaluate = function (hs_ds26DvIL, hs_eta26DvIQ) {
        var hs_ds126DvLP = hs_ds26DvIL;
        if (hs_ds26DvIL.notEvaluated) {
            hs_ds126DvLP = hs_ds26DvIL.hscall();
        }
        var hs_ds226DvIP = hs_ds126DvLP.data[0];
        var hs_wild26DvLQ = [hs_eta26DvIQ, getOrSetSystemEventThreadEventManagerStore(hs_ds226DvIP)];
        var hs_ds326DvIV = hs_wild26DvLQ[0];
        var hs_ds426DvIW = hs_wild26DvLQ[1];
        var hs_sat26DvLO = new $hs.Data(1);
        hs_sat26DvLO.data = [hs_ds426DvIW];
        return [hs_ds326DvIV, hs_sat26DvLO];
    };
    hs_getOrSetSystemEventThreadEventManagerStore25u6vb.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a25v7cs.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_zdwccall125v7cI.evaluate = function (hs_ds26DvJ2, hs_eta26DvJ3) {
        return [hs_eta26DvJ3, getOrSetSystemEventThreadIOManagerThreadStore(hs_ds26DvJ2)];
    };
    hs_a125v7cP.evaluate = function (hs_ds26DvJ8, hs_eta26DvJd) {
        var hs_ds126DvLS = hs_ds26DvJ8;
        if (hs_ds26DvJ8.notEvaluated) {
            hs_ds126DvLS = hs_ds26DvJ8.hscall();
        }
        var hs_ds226DvJc = hs_ds126DvLS.data[0];
        var hs_wild26DvLT = [hs_eta26DvJd, getOrSetSystemEventThreadIOManagerThreadStore(hs_ds226DvJc)];
        var hs_ds326DvJi = hs_wild26DvLT[0];
        var hs_ds426DvJj = hs_wild26DvLT[1];
        var hs_sat26DvLR = new $hs.Data(1);
        hs_sat26DvLR.data = [hs_ds426DvJj];
        return [hs_ds326DvJi, hs_sat26DvLR];
    };
    hs_getOrSetSystemEventThreadIOManagerThreadStore25u6va.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a125v7cP.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_threaded25u6v9.evaluateOnce = function () {
        var hs_wild26DvLV = [$hs.modules.GHCziPrim.hs_realWorldzh, rtsSupportsBoundThreads()];
        var hs_ds126DvJq = hs_wild26DvLV[1];
        var hs_wild126DvLU = hs_ds126DvJq;
        if (hs_ds126DvJq.notEvaluated) {
            hs_wild126DvLU = hs_ds126DvJq.hscall();
        }
        switch (hs_wild126DvLU) {
        case 0:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        default:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_sat26DvLZ.evaluateOnce = function () {
        var hs_sat26DvLY = new $hs.Func(1);
        hs_sat26DvLY.evaluate = function (hs_em26DvJu) {
            return $hs.modules.GHCziConcziSync.hs_sharedCAF.hscall(hs_em26DvJu, hs_getOrSetSystemEventThreadEventManagerStore25u6vb);
        };
        var hs_sat26DvLX = new $hs.Thunk();
        hs_sat26DvLX.evaluateOnce = function () {
            return $hs.modules.GHCziIORef.hs_newIORef.hscall($hs.modules.DataziMaybe.hs_Nothing);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DvLX, hs_sat26DvLY);
    };
    hs_eventManager25u6vj.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_unsafePerformIO, hs_sat26DvLZ);
    };
    this.hs_getSystemEventManager.evaluateOnce = function () {
        return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_eventManager25u6vj);
    };
    this.hs_threadDelay.evaluate = function (hs_usecs26DvJF) {
        var hs_sat26DvM0 = new $hs.Thunk();
        hs_sat26DvM0.evaluateOnce = function () {
            var hs_sat26DvM1 = new $hs.Func(1);
            hs_sat26DvM1.evaluate = function (hs_ds26DvJz) {
                var hs_wild26DvM3 = hs_ds26DvJz;
                if (hs_ds26DvJz.notEvaluated) {
                    hs_wild26DvM3 = hs_ds26DvJz.hscall();
                }
                switch (hs_wild26DvM3.tag) {
                case 1:
                    var hs_sat26DvM9 = new $hs.Thunk();
                    hs_sat26DvM9.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at /home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/Event/Thread.hs:39:3-10\x00");
                    };
                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DvM9);
                case 2:
                    var hs_mgr26DvJE = hs_wild26DvM3.data[0];
                    var hs_sat26DvM2 = new $hs.Func(1);
                    hs_sat26DvM2.evaluate = function (hs_m26DvJG) {
                        var hs_sat26DvM5 = new $hs.Func(1);
                        hs_sat26DvM5.evaluate = function (hs_reg26DvJL) {
                            var hs_sat26DvM8 = new $hs.Thunk();
                            hs_sat26DvM8.evaluateOnce = function () {
                                return $hs.modules.GHCziEventziManager.hs_unregisterTimeout.hscall(hs_mgr26DvJE, hs_reg26DvJL);
                            };
                            var hs_sat26DvM7 = new $hs.Thunk();
                            hs_sat26DvM7.evaluateOnce = function () {
                                return $hs.modules.GHCziMVar.hs_takeMVar.hscall(hs_m26DvJG);
                            };
                            return $hs.modules.GHCziIO.hs_onException.hscall(hs_sat26DvM7, hs_sat26DvM8);
                        };
                        var hs_sat26DvM4 = new $hs.Thunk();
                        hs_sat26DvM4.evaluateOnce = function () {
                            var hs_sat26DvM6 = new $hs.Thunk();
                            hs_sat26DvM6.evaluateOnce = function () {
                                return $hs.modules.GHCziMVar.hs_putMVar.hscall(hs_m26DvJG, $hs.modules.GHCziUnit.hs_Z0T);
                            };
                            return $hs.modules.GHCziEventziManager.hs_registerTimeout.hscall(hs_mgr26DvJE, hs_usecs26DvJF, hs_sat26DvM6);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DvM4, hs_sat26DvM5);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziMVar.hs_newEmptyMVar, hs_sat26DvM2);
                }
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziEventziThread.hs_getSystemEventManager, hs_sat26DvM1);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_maskzu, hs_sat26DvM0);
    };
    this.hs_registerDelay.evaluate = function (hs_usecs26DvK1) {
        var hs_sat26DvMb = new $hs.Func(1);
        hs_sat26DvMb.evaluate = function (hs_t26DvK4) {
            var hs_sat26DvMd = new $hs.Func(1);
            hs_sat26DvMd.evaluate = function (hs_ds26DvJW) {
                var hs_wild26DvMf = hs_ds26DvJW;
                if (hs_ds26DvJW.notEvaluated) {
                    hs_wild26DvMf = hs_ds26DvJW.hscall();
                }
                switch (hs_wild26DvMf.tag) {
                case 1:
                    var hs_sat26DvMk = new $hs.Thunk();
                    hs_sat26DvMk.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at /home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/Event/Thread.hs:50:3-10\x00");
                    };
                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DvMk);
                case 2:
                    var hs_mgr26DvK0 = hs_wild26DvMf.data[0];
                    var hs_sat26DvMg = new $hs.Func(1);
                    hs_sat26DvMg.evaluate = function (hs_ds126DvK8) {
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_t26DvK4);
                    };
                    var hs_sat26DvMe = new $hs.Thunk();
                    hs_sat26DvMe.evaluateOnce = function () {
                        var hs_sat26DvMi = new $hs.Thunk();
                        hs_sat26DvMi.evaluateOnce = function () {
                            return $hs.modules.GHCziConcziSync.hs_writeTVar.hscall(hs_t26DvK4, $hs.modules.GHCziTypes.hs_True);
                        };
                        var hs_sat26DvMh = new $hs.Thunk();
                        hs_sat26DvMh.evaluateOnce = function () {
                            var hs_sat26DvMj = new $hs.Thunk();
                            hs_sat26DvMj.evaluateOnce = function () {
                                return $hs.modules.GHCziEventziManager.hs_registerTimeout.hscall(hs_mgr26DvK0, hs_usecs26DvK1);
                            };
                            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DvMj, $hs.modules.GHCziConcziSync.hs_atomically);
                        };
                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DvMh, hs_sat26DvMi);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DvMe, hs_sat26DvMg);
                }
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziEventziThread.hs_getSystemEventManager, hs_sat26DvMd);
        };
        var hs_sat26DvMa = new $hs.Thunk();
        hs_sat26DvMa.evaluateOnce = function () {
            var hs_sat26DvMc = new $hs.Thunk();
            hs_sat26DvMc.evaluateOnce = function () {
                return $hs.modules.GHCziConcziSync.hs_newTVar.hscall($hs.modules.GHCziTypes.hs_False);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziConcziSync.hs_atomically, hs_sat26DvMc);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DvMa, hs_sat26DvMb);
    };
    this.hs_closeFdWith.evaluate = function (hs_close26DvKk, hs_fd26DvKl) {
        var hs_sat26DvMl = new $hs.Func(1);
        hs_sat26DvMl.evaluate = function (hs_ds26DvKf) {
            var hs_wild26DvMm = hs_ds26DvKf;
            if (hs_ds26DvKf.notEvaluated) {
                hs_wild26DvMm = hs_ds26DvKf.hscall();
            }
            switch (hs_wild26DvMm.tag) {
            case 1:
                var hs_sat26DvMn = new $hs.Thunk();
                hs_sat26DvMn.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at /home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/Event/Thread.hs:83:3-10\x00");
                };
                return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DvMn);
            case 2:
                var hs_mgr26DvKj = hs_wild26DvMm.data[0];
                return $hs.modules.GHCziEventziManager.hs_closeFd.hscall(hs_mgr26DvKj, hs_close26DvKk, hs_fd26DvKl);
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziEventziThread.hs_getSystemEventManager, hs_sat26DvMl);
    };
    hs_threadWait25u6vh.evaluate = function (hs_evt26DvKF, hs_fd26DvKE) {
        var hs_sat26DvMo = new $hs.Thunk();
        hs_sat26DvMo.evaluateOnce = function () {
            var hs_sat26DvMp = new $hs.Func(1);
            hs_sat26DvMp.evaluate = function (hs_m26DvKA) {
                var hs_sat26DvMq = new $hs.Func(1);
                hs_sat26DvMq.evaluate = function (hs_ds26DvKr) {
                    var hs_wild26DvMs = hs_ds26DvKr;
                    if (hs_ds26DvKr.notEvaluated) {
                        hs_wild26DvMs = hs_ds26DvKr.hscall();
                    }
                    switch (hs_wild26DvMs.tag) {
                    case 1:
                        var hs_sat26DvME = new $hs.Thunk();
                        hs_sat26DvME.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at /home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/Event/Thread.hs:89:3-10\x00");
                        };
                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DvME);
                    case 2:
                        var hs_mgr26DvKv = hs_wild26DvMs.data[0];
                        var hs_sat26DvMt = new $hs.Func(1);
                        hs_sat26DvMt.evaluate = function (hs_reg26DvKJ) {
                            var hs_sat26DvMy = new $hs.Func(1);
                            hs_sat26DvMy.evaluate = function (hs_evtzq26DvKN) {
                                var hs_wild126DvMC = $hs.modules.GHCziEventziInternal.hs_eventIs.hscall(hs_evtzq26DvKN, $hs.modules.GHCziEventziInternal.hs_evtClose);
                                switch (hs_wild126DvMC.tag) {
                                case 1:
                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                                case 2:
                                    var hs_sat26DvMB = new $hs.Thunk();
                                    hs_sat26DvMB.evaluateOnce = function () {
                                        var hs_sat26DvMD = new $hs.Thunk();
                                        hs_sat26DvMD.evaluateOnce = function () {
                                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("threadWait\x00");
                                        };
                                        return $hs.modules.ForeignziCziError.hs_errnoToIOError.hscall(hs_sat26DvMD, $hs.modules.ForeignziCziError.hs_eBADF, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing);
                                    };
                                    return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIOziException.hs_ioError, hs_sat26DvMB);
                                }
                            };
                            var hs_sat26DvMx = new $hs.Thunk();
                            hs_sat26DvMx.evaluateOnce = function () {
                                var hs_sat26DvMA = new $hs.Thunk();
                                hs_sat26DvMA.evaluateOnce = function () {
                                    return $hs.modules.GHCziEventziManager.hs_unregisterFdzu.hscall(hs_mgr26DvKv, hs_reg26DvKJ);
                                };
                                var hs_sat26DvMz = new $hs.Thunk();
                                hs_sat26DvMz.evaluateOnce = function () {
                                    return $hs.modules.GHCziMVar.hs_takeMVar.hscall(hs_m26DvKA);
                                };
                                return $hs.modules.GHCziIO.hs_onException.hscall(hs_sat26DvMz, hs_sat26DvMA);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DvMx, hs_sat26DvMy);
                        };
                        var hs_sat26DvMr = new $hs.Thunk();
                        hs_sat26DvMr.evaluateOnce = function () {
                            var hs_sat26DvMu = new $hs.Func(2);
                            hs_sat26DvMu.evaluate = function (hs_reg26DvKy, hs_e26DvKB) {
                                var hs_sat26DvMw = new $hs.Thunk();
                                hs_sat26DvMw.evaluateOnce = function () {
                                    return $hs.modules.GHCziMVar.hs_putMVar.hscall(hs_m26DvKA, hs_e26DvKB);
                                };
                                var hs_sat26DvMv = new $hs.Thunk();
                                hs_sat26DvMv.evaluateOnce = function () {
                                    return $hs.modules.GHCziEventziManager.hs_unregisterFdzu.hscall(hs_mgr26DvKv, hs_reg26DvKy);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DvMv, hs_sat26DvMw);
                            };
                            return $hs.modules.GHCziEventziManager.hs_registerFd.hscall(hs_mgr26DvKv, hs_sat26DvMu, hs_fd26DvKE, hs_evt26DvKF);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DvMr, hs_sat26DvMt);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziEventziThread.hs_getSystemEventManager, hs_sat26DvMq);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziMVar.hs_newEmptyMVar, hs_sat26DvMp);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_maskzu, hs_sat26DvMo);
    };
    this.hs_threadWaitRead.evaluate = function (hs_eta1cW6l3) {
        return hs_threadWait25u6vh.hscall($hs.modules.GHCziEventziInternal.hs_evtRead, hs_eta1cW6l3);
    };
    this.hs_threadWaitWrite.evaluate = function (hs_eta1cW6l3) {
        return hs_threadWait25u6vh.hscall($hs.modules.GHCziEventziInternal.hs_evtWrite, hs_eta1cW6l3);
    };
    hs_sat26DvMH.evaluateOnce = function () {
        var hs_sat26DvMG = new $hs.Func(1);
        hs_sat26DvMG.evaluate = function (hs_m26DvKY) {
            return $hs.modules.GHCziConcziSync.hs_sharedCAF.hscall(hs_m26DvKY, hs_getOrSetSystemEventThreadIOManagerThreadStore25u6va);
        };
        var hs_sat26DvMF = new $hs.Thunk();
        hs_sat26DvMF.evaluateOnce = function () {
            return $hs.modules.GHCziMVar.hs_newMVar.hscall($hs.modules.DataziMaybe.hs_Nothing);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DvMF, hs_sat26DvMG);
    };
    hs_ioManager25u6vk.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_unsafePerformIO, hs_sat26DvMH);
    };
    this.hs_ensureIOManagerIsRunning.evaluateOnce = function () {
        var hs_wild26DvMI = $hs.modules.GHCziClasses.hs_not.hscall(hs_threaded25u6v9);
        switch (hs_wild26DvMI.tag) {
        case 1:
            var hs_sat26DvMK = new $hs.Func(1);
            hs_sat26DvMK.evaluate = function (hs_old26DvLs) {
                var hs_create26DvLr = new $hs.Thunk();
                hs_create26DvLr.evaluateOnce = function () {
                    var hs_sat26DvMT = new $hs.Func(1);
                    hs_sat26DvMT.evaluate = function (hs_mgr26DvL6) {
                        var hs_mgr126DvL9 = hs_mgr26DvL6;
                        if (hs_mgr26DvL6.notEvaluated) {
                            hs_mgr126DvL9 = hs_mgr26DvL6.hscall();
                        }
                        var hs_sat26DvMV = new $hs.Thunk();
                        hs_sat26DvMV.evaluateOnce = function () {
                            var hs_sat26DvMZ = new $hs.Func(1);
                            hs_sat26DvMZ.evaluate = function (hs_t26DvLf) {
                                var hs_t126DvLi = hs_t26DvLf;
                                if (hs_t26DvLf.notEvaluated) {
                                    hs_t126DvLi = hs_t26DvLf.hscall();
                                }
                                var hs_sat26DvN3 = new $hs.Thunk();
                                hs_sat26DvN3.evaluateOnce = function () {
                                    var hs_sat26DvN6 = new $hs.Data(2);
                                    hs_sat26DvN6.data = [hs_t126DvLi];
                                    var hs_sat26DvN5 = new $hs.Thunk();
                                    hs_sat26DvN5.evaluateOnce = function () {
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO);
                                    };
                                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DvN5, hs_sat26DvN6);
                                };
                                var hs_sat26DvN1 = new $hs.Thunk();
                                hs_sat26DvN1.evaluateOnce = function () {
                                    var hs_sat26DvN4 = new $hs.Thunk();
                                    hs_sat26DvN4.evaluateOnce = function () {
                                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("IOManager\x00");
                                    };
                                    return $hs.modules.GHCziConcziSync.hs_labelThread.hscall(hs_t126DvLi, hs_sat26DvN4);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DvN1, hs_sat26DvN3);
                            };
                            var hs_sat26DvMY = new $hs.Thunk();
                            hs_sat26DvMY.evaluateOnce = function () {
                                var hs_sat26DvN0 = new $hs.Thunk();
                                hs_sat26DvN0.evaluateOnce = function () {
                                    return $hs.modules.GHCziEventziManager.hs_loop.hscall(hs_mgr126DvL9);
                                };
                                return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziConcziSync.hs_forkIO, hs_sat26DvN0);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DvMY, hs_sat26DvMZ);
                        };
                        var hs_sat26DvMU = new $hs.Thunk();
                        hs_sat26DvMU.evaluateOnce = function () {
                            var hs_sat26DvMX = new $hs.Data(2);
                            hs_sat26DvMX.data = [hs_mgr126DvL9];
                            var hs_sat26DvMW = new $hs.Thunk();
                            hs_sat26DvMW.evaluateOnce = function () {
                                return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_eventManager25u6vj);
                            };
                            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DvMW, hs_sat26DvMX);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DvMU, hs_sat26DvMV);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziEventziManager.hs_new, hs_sat26DvMT);
                };
                var hs_wild126DvLA = hs_old26DvLs;
                if (hs_old26DvLs.notEvaluated) {
                    hs_wild126DvLA = hs_old26DvLs.hscall();
                }
                switch (hs_wild126DvLA.tag) {
                case 1:
                    if (hs_create26DvLr.notEvaluated) {
                        return hs_create26DvLr.hscall();
                    } else {
                        return hs_create26DvLr;
                    }
                case 2:
                    var hs_t26DvLv = hs_wild126DvLA.data[0];
                    var hs_sat26DvMM = new $hs.Func(1);
                    hs_sat26DvMM.evaluate = function (hs_s26DvLy) {
                        var hs_wild226DvMN = hs_s26DvLy;
                        if (hs_s26DvLy.notEvaluated) {
                            hs_wild226DvMN = hs_s26DvLy.hscall();
                        }
                        switch (hs_wild226DvMN.tag) {
                        case 2:
                            if (hs_create26DvLr.notEvaluated) {
                                return hs_create26DvLr.hscall();
                            } else {
                                return hs_create26DvLr;
                            }
                        case 4:
                            var hs_sat26DvMP = new $hs.Func(1);
                            hs_sat26DvMP.evaluate = function (hs_mem26DvLD) {
                                var hs_sat26DvMR = new $hs.Func(1);
                                hs_sat26DvMR.evaluate = function (hs_ds26DvLJ) {
                                    if (hs_create26DvLr.notEvaluated) {
                                        return hs_create26DvLr.hscall();
                                    } else {
                                        return hs_create26DvLr;
                                    }
                                };
                                var hs_sat26DvMQ = new $hs.Thunk();
                                hs_sat26DvMQ.evaluateOnce = function () {
                                    var hs_wild326DvMS = hs_mem26DvLD;
                                    if (hs_mem26DvLD.notEvaluated) {
                                        hs_wild326DvMS = hs_mem26DvLD.hscall();
                                    }
                                    switch (hs_wild326DvMS.tag) {
                                    case 1:
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                                    case 2:
                                        var hs_em26DvLG = hs_wild326DvMS.data[0];
                                        return $hs.modules.GHCziEventziManager.hs_cleanup.hscall(hs_em26DvLG);
                                    }
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DvMQ, hs_sat26DvMR);
                            };
                            var hs_sat26DvMO = new $hs.Thunk();
                            hs_sat26DvMO.evaluateOnce = function () {
                                return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_eventManager25u6vj);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DvMO, hs_sat26DvMP);
                        default:
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_wild126DvLA);
                        }
                    };
                    var hs_sat26DvML = new $hs.Thunk();
                    hs_sat26DvML.evaluateOnce = function () {
                        return $hs.modules.GHCziConcziSync.hs_threadStatus.hscall(hs_t26DvLv);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DvML, hs_sat26DvMM);
                }
            };
            var hs_sat26DvMJ = new $hs.Thunk();
            hs_sat26DvMJ.evaluateOnce = function () {
                return $hs.modules.GHCziConcziSync.hs_modifyMVarzu.hscall(hs_ioManager25u6vk);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DvMJ, hs_sat26DvMK);
        case 2:
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        }
    };
};
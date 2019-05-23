
$hs.modules.SystemziEventziThread = new $hs.Module();
$hs.modules.SystemziEventziThread.dependencies = ["GHC.Prim", "GHC.Bool", "GHC.Unit", "Data.Maybe", "GHC.Base", "GHC.Classes", "GHC.IO", "GHC.Conc.Sync", "GHC.MVar", "GHC.IO.Exception", "GHC.IORef", "Foreign.C.Error", "System.Event.Internal", "System.Event.Manager"];
$hs.modules.SystemziEventziThread.initBeforeDependencies = function () {
    this.hs_threadDelay = new $hs.Func(1);
    this.hs_registerDelay = new $hs.Func(1);
    this.hs_closeFdWith = new $hs.Func(2);
    this.hs_threadWaitRead = new $hs.Func(1);
    this.hs_threadWaitWrite = new $hs.Func(1);
    this.hs_ensureIOManagerIsRunning = new $hs.Thunk();
    this.hs_threadDelay.notEvaluated = true;
    this.hs_threadDelay.evaluate = function (hs_usecs26DVkR) {
        $hs.modules.SystemziEventziThread.loadDependencies();
        return this.evaluate(hs_usecs26DVkR);
    };
    this.hs_registerDelay.notEvaluated = true;
    this.hs_registerDelay.evaluate = function (hs_usecs26DVle) {
        $hs.modules.SystemziEventziThread.loadDependencies();
        return this.evaluate(hs_usecs26DVle);
    };
    this.hs_closeFdWith.notEvaluated = true;
    this.hs_closeFdWith.evaluate = function (hs_close26DVlx, hs_fd26DVly) {
        $hs.modules.SystemziEventziThread.loadDependencies();
        return this.evaluate(hs_close26DVlx, hs_fd26DVly);
    };
    this.hs_threadWaitRead.notEvaluated = true;
    this.hs_threadWaitRead.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.SystemziEventziThread.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_threadWaitWrite.notEvaluated = true;
    this.hs_threadWaitWrite.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.SystemziEventziThread.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_ensureIOManagerIsRunning.evaluateOnce = function () {
        $hs.modules.SystemziEventziThread.loadDependencies();
        return this.evaluateOnce();
    };
};
$hs.modules.SystemziEventziThread.initAfterDependencies = function () {
    this.hs_threadDelay.notEvaluated = false;
    this.hs_registerDelay.notEvaluated = false;
    this.hs_closeFdWith.notEvaluated = false;
    this.hs_threadWaitRead.notEvaluated = false;
    this.hs_threadWaitWrite.notEvaluated = false;
    var hs_zdwccall25vwNv = new $hs.Func(2);
    var hs_a25vwNC = new $hs.Func(2);
    var hs_getOrSetSystemEventThreadEventManagerStore25utwF = new $hs.Func(2);
    var hs_zdwccall125vwNT = new $hs.Func(2);
    var hs_a125vwO0 = new $hs.Func(2);
    var hs_getOrSetSystemEventThreadIOManagerThreadStore25utwD = new $hs.Func(2);
    var hs_threaded25utwB = new $hs.Thunk();
    var hs_sat26DVne = new $hs.Thunk();
    var hs_eventManager25utwT = new $hs.Thunk();
    var hs_threadWait25utwR = new $hs.Func(2);
    var hs_sat26DVo1 = new $hs.Thunk();
    var hs_ioManager25utwV = new $hs.Thunk();
    hs_zdwccall25vwNv.evaluate = function (hs_ds26DVjO, hs_eta1cW6l3) {
        var hs_sat26DVn1 = new $hs.Func(1);
        hs_sat26DVn1.evaluate = function (hs_eta1cW6l3) {
            return [hs_eta1cW6l3, getOrSetSystemEventThreadEventManagerStore(hs_ds26DVjO)];
        };
        return hs_sat26DVn1.hscall(hs_eta1cW6l3);
    };
    hs_a25vwNC.evaluate = function (hs_ds26DVjV, hs_eta26DVk0) {
        var hs_ds126DVn3 = hs_ds26DVjV;
        if (hs_ds26DVjV.notEvaluated) {
            hs_ds126DVn3 = hs_ds26DVjV.hscall();
        }
        var hs_ds226DVjZ = hs_ds126DVn3.data[0];
        var hs_wild26DVn2 = [hs_eta26DVk0, getOrSetSystemEventThreadEventManagerStore(hs_ds226DVjZ)];
        var hs_ds326DVk5 = hs_wild26DVn2[0];
        var hs_ds426DVk6 = hs_wild26DVn2[1];
        var hs_sat26DVn4 = new $hs.Data(1);
        hs_sat26DVn4.data = [hs_ds426DVk6];
        return [hs_ds326DVk5, hs_sat26DVn4];
    };
    hs_getOrSetSystemEventThreadEventManagerStore25utwF.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a25vwNC.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_zdwccall125vwNT.evaluate = function (hs_ds26DVkc, hs_eta1cW6l3) {
        var hs_sat26DVn5 = new $hs.Func(1);
        hs_sat26DVn5.evaluate = function (hs_eta1cW6l3) {
            return [hs_eta1cW6l3, getOrSetSystemEventThreadIOManagerThreadStore(hs_ds26DVkc)];
        };
        return hs_sat26DVn5.hscall(hs_eta1cW6l3);
    };
    hs_a125vwO0.evaluate = function (hs_ds26DVkj, hs_eta26DVko) {
        var hs_ds126DVn7 = hs_ds26DVkj;
        if (hs_ds26DVkj.notEvaluated) {
            hs_ds126DVn7 = hs_ds26DVkj.hscall();
        }
        var hs_ds226DVkn = hs_ds126DVn7.data[0];
        var hs_wild26DVn6 = [hs_eta26DVko, getOrSetSystemEventThreadIOManagerThreadStore(hs_ds226DVkn)];
        var hs_ds326DVkt = hs_wild26DVn6[0];
        var hs_ds426DVku = hs_wild26DVn6[1];
        var hs_sat26DVn8 = new $hs.Data(1);
        hs_sat26DVn8.data = [hs_ds426DVku];
        return [hs_ds326DVkt, hs_sat26DVn8];
    };
    hs_getOrSetSystemEventThreadIOManagerThreadStore25utwD.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a125vwO0.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_threaded25utwB.evaluateOnce = function () {
        var hs_wild26DVnb = [$hs.modules.GHCziPrim.hs_realWorldzh, rtsSupportsBoundThreads()];
        var hs_ds126DVkB = hs_wild26DVnb[1];
        var hs_wild126DVn9 = hs_ds126DVkB;
        if (hs_ds126DVkB.notEvaluated) {
            hs_wild126DVn9 = hs_ds126DVkB.hscall();
        }
        switch (hs_wild126DVn9) {
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
    hs_sat26DVne.evaluateOnce = function () {
        var hs_sat26DVnc = new $hs.Func(1);
        hs_sat26DVnc.evaluate = function (hs_em26DVkF) {
            return $hs.modules.GHCziConcziSync.hs_sharedCAF.hscall(hs_em26DVkF, hs_getOrSetSystemEventThreadEventManagerStore25utwF);
        };
        var hs_sat26DVnd = new $hs.Thunk();
        hs_sat26DVnd.evaluateOnce = function () {
            return $hs.modules.GHCziIORef.hs_newIORef.hscall($hs.modules.DataziMaybe.hs_Nothing);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DVnd, hs_sat26DVnc);
    };
    hs_eventManager25utwT.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_unsafePerformIO, hs_sat26DVne);
    };
    this.hs_threadDelay.evaluate = function (hs_usecs26DVkR) {
        var hs_sat26DVnp = new $hs.Thunk();
        hs_sat26DVnp.evaluateOnce = function () {
            var hs_sat26DVnn = new $hs.Func(1);
            hs_sat26DVnn.evaluate = function (hs_ds26DVkL) {
                var hs_wild26DVnf = hs_ds26DVkL;
                if (hs_ds26DVkL.notEvaluated) {
                    hs_wild26DVnf = hs_ds26DVkL.hscall();
                }
                switch (hs_wild26DVnf.tag) {
                case 1:
                    var hs_sat26DVng = new $hs.Thunk();
                    hs_sat26DVng.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at ../../ghc-7.0.2/libraries/base/System/Event/Thread.hs:39:3-10\x00");
                    };
                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DVng);
                case 2:
                    var hs_mgr26DVkQ = hs_wild26DVnf.data[0];
                    var hs_sat26DVnm = new $hs.Func(1);
                    hs_sat26DVnm.evaluate = function (hs_m26DVkS) {
                        var hs_sat26DVnj = new $hs.Func(1);
                        hs_sat26DVnj.evaluate = function (hs_reg26DVkX) {
                            var hs_sat26DVnh = new $hs.Thunk();
                            hs_sat26DVnh.evaluateOnce = function () {
                                return $hs.modules.SystemziEventziManager.hs_unregisterTimeout.hscall(hs_mgr26DVkQ, hs_reg26DVkX);
                            };
                            var hs_sat26DVni = new $hs.Thunk();
                            hs_sat26DVni.evaluateOnce = function () {
                                return $hs.modules.GHCziMVar.hs_takeMVar.hscall(hs_m26DVkS);
                            };
                            return $hs.modules.GHCziIO.hs_onException.hscall(hs_sat26DVni, hs_sat26DVnh);
                        };
                        var hs_sat26DVnl = new $hs.Thunk();
                        hs_sat26DVnl.evaluateOnce = function () {
                            var hs_sat26DVnk = new $hs.Thunk();
                            hs_sat26DVnk.evaluateOnce = function () {
                                return $hs.modules.GHCziMVar.hs_putMVar.hscall(hs_m26DVkS, $hs.modules.GHCziUnit.hs_Z0T);
                            };
                            return $hs.modules.SystemziEventziManager.hs_registerTimeout.hscall(hs_mgr26DVkQ, hs_usecs26DVkR, hs_sat26DVnk);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DVnl, hs_sat26DVnj);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziMVar.hs_newEmptyMVar, hs_sat26DVnm);
                }
            };
            var hs_sat26DVno = new $hs.Thunk();
            hs_sat26DVno.evaluateOnce = function () {
                return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_eventManager25utwT);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DVno, hs_sat26DVnn);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_maskzu, hs_sat26DVnp);
    };
    this.hs_registerDelay.evaluate = function (hs_usecs26DVle) {
        var hs_sat26DVnA = new $hs.Func(1);
        hs_sat26DVnA.evaluate = function (hs_t26DVlh) {
            var hs_sat26DVny = new $hs.Func(1);
            hs_sat26DVny.evaluate = function (hs_ds26DVl9) {
                var hs_wild26DVnq = hs_ds26DVl9;
                if (hs_ds26DVl9.notEvaluated) {
                    hs_wild26DVnq = hs_ds26DVl9.hscall();
                }
                switch (hs_wild26DVnq.tag) {
                case 1:
                    var hs_sat26DVnr = new $hs.Thunk();
                    hs_sat26DVnr.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at ../../ghc-7.0.2/libraries/base/System/Event/Thread.hs:50:3-10\x00");
                    };
                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DVnr);
                case 2:
                    var hs_mgr26DVld = hs_wild26DVnq.data[0];
                    var hs_sat26DVnt = new $hs.Func(1);
                    hs_sat26DVnt.evaluate = function (hs_ds126DVns) {
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_t26DVlh);
                    };
                    var hs_sat26DVnx = new $hs.Thunk();
                    hs_sat26DVnx.evaluateOnce = function () {
                        var hs_sat26DVnu = new $hs.Thunk();
                        hs_sat26DVnu.evaluateOnce = function () {
                            return $hs.modules.GHCziConcziSync.hs_writeTVar.hscall(hs_t26DVlh, $hs.modules.GHCziBool.hs_True);
                        };
                        var hs_sat26DVnw = new $hs.Thunk();
                        hs_sat26DVnw.evaluateOnce = function () {
                            var hs_sat26DVnv = new $hs.Thunk();
                            hs_sat26DVnv.evaluateOnce = function () {
                                return $hs.modules.SystemziEventziManager.hs_registerTimeout.hscall(hs_mgr26DVld, hs_usecs26DVle);
                            };
                            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DVnv, $hs.modules.GHCziConcziSync.hs_atomically);
                        };
                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DVnw, hs_sat26DVnu);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DVnx, hs_sat26DVnt);
                }
            };
            var hs_sat26DVnz = new $hs.Thunk();
            hs_sat26DVnz.evaluateOnce = function () {
                return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_eventManager25utwT);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DVnz, hs_sat26DVny);
        };
        var hs_sat26DVnC = new $hs.Thunk();
        hs_sat26DVnC.evaluateOnce = function () {
            var hs_sat26DVnB = new $hs.Thunk();
            hs_sat26DVnB.evaluateOnce = function () {
                return $hs.modules.GHCziConcziSync.hs_newTVar.hscall($hs.modules.GHCziBool.hs_False);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziConcziSync.hs_atomically, hs_sat26DVnB);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DVnC, hs_sat26DVnA);
    };
    this.hs_closeFdWith.evaluate = function (hs_close26DVlx, hs_fd26DVly) {
        var hs_sat26DVnF = new $hs.Func(1);
        hs_sat26DVnF.evaluate = function (hs_ds26DVls) {
            var hs_wild26DVnD = hs_ds26DVls;
            if (hs_ds26DVls.notEvaluated) {
                hs_wild26DVnD = hs_ds26DVls.hscall();
            }
            switch (hs_wild26DVnD.tag) {
            case 1:
                var hs_sat26DVnE = new $hs.Thunk();
                hs_sat26DVnE.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at ../../ghc-7.0.2/libraries/base/System/Event/Thread.hs:83:3-10\x00");
                };
                return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DVnE);
            case 2:
                var hs_mgr26DVlw = hs_wild26DVnD.data[0];
                return $hs.modules.SystemziEventziManager.hs_closeFd.hscall(hs_mgr26DVlw, hs_close26DVlx, hs_fd26DVly);
            }
        };
        var hs_sat26DVnG = new $hs.Thunk();
        hs_sat26DVnG.evaluateOnce = function () {
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_eventManager25utwT);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DVnG, hs_sat26DVnF);
    };
    hs_threadWait25utwR.evaluate = function (hs_evt26DVlT, hs_fd26DVlS) {
        var hs_sat26DVnY = new $hs.Thunk();
        hs_sat26DVnY.evaluateOnce = function () {
            var hs_sat26DVnX = new $hs.Func(1);
            hs_sat26DVnX.evaluate = function (hs_m26DVlO) {
                var hs_sat26DVnV = new $hs.Func(1);
                hs_sat26DVnV.evaluate = function (hs_ds26DVlF) {
                    var hs_wild26DVnH = hs_ds26DVlF;
                    if (hs_ds26DVlF.notEvaluated) {
                        hs_wild26DVnH = hs_ds26DVlF.hscall();
                    }
                    switch (hs_wild26DVnH.tag) {
                    case 1:
                        var hs_sat26DVnI = new $hs.Thunk();
                        hs_sat26DVnI.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at ../../ghc-7.0.2/libraries/base/System/Event/Thread.hs:89:3-10\x00");
                        };
                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DVnI);
                    case 2:
                        var hs_mgr26DVlJ = hs_wild26DVnH.data[0];
                        var hs_sat26DVnQ = new $hs.Func(1);
                        hs_sat26DVnQ.evaluate = function (hs_reg26DVlX) {
                            var hs_sat26DVnM = new $hs.Func(1);
                            hs_sat26DVnM.evaluate = function (hs_evtzq26DVm1) {
                                var hs_wild126DVnJ = $hs.modules.SystemziEventziInternal.hs_eventIs.hscall(hs_evtzq26DVm1, $hs.modules.SystemziEventziInternal.hs_evtClose);
                                switch (hs_wild126DVnJ.tag) {
                                case 1:
                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                                case 2:
                                    var hs_sat26DVnL = new $hs.Thunk();
                                    hs_sat26DVnL.evaluateOnce = function () {
                                        var hs_sat26DVnK = new $hs.Thunk();
                                        hs_sat26DVnK.evaluateOnce = function () {
                                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("threadWait\x00");
                                        };
                                        return $hs.modules.ForeignziCziError.hs_errnoToIOError.hscall(hs_sat26DVnK, $hs.modules.ForeignziCziError.hs_eBADF, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing);
                                    };
                                    return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIOziException.hs_ioError, hs_sat26DVnL);
                                }
                            };
                            var hs_sat26DVnP = new $hs.Thunk();
                            hs_sat26DVnP.evaluateOnce = function () {
                                var hs_sat26DVnN = new $hs.Thunk();
                                hs_sat26DVnN.evaluateOnce = function () {
                                    return $hs.modules.SystemziEventziManager.hs_unregisterFdzu.hscall(hs_mgr26DVlJ, hs_reg26DVlX);
                                };
                                var hs_sat26DVnO = new $hs.Thunk();
                                hs_sat26DVnO.evaluateOnce = function () {
                                    return $hs.modules.GHCziMVar.hs_takeMVar.hscall(hs_m26DVlO);
                                };
                                return $hs.modules.GHCziIO.hs_onException.hscall(hs_sat26DVnO, hs_sat26DVnN);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DVnP, hs_sat26DVnM);
                        };
                        var hs_sat26DVnU = new $hs.Thunk();
                        hs_sat26DVnU.evaluateOnce = function () {
                            var hs_sat26DVnT = new $hs.Func(2);
                            hs_sat26DVnT.evaluate = function (hs_reg26DVlM, hs_e26DVlP) {
                                var hs_sat26DVnR = new $hs.Thunk();
                                hs_sat26DVnR.evaluateOnce = function () {
                                    return $hs.modules.GHCziMVar.hs_putMVar.hscall(hs_m26DVlO, hs_e26DVlP);
                                };
                                var hs_sat26DVnS = new $hs.Thunk();
                                hs_sat26DVnS.evaluateOnce = function () {
                                    return $hs.modules.SystemziEventziManager.hs_unregisterFdzu.hscall(hs_mgr26DVlJ, hs_reg26DVlM);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DVnS, hs_sat26DVnR);
                            };
                            return $hs.modules.SystemziEventziManager.hs_registerFd.hscall(hs_mgr26DVlJ, hs_sat26DVnT, hs_fd26DVlS, hs_evt26DVlT);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DVnU, hs_sat26DVnQ);
                    }
                };
                var hs_sat26DVnW = new $hs.Thunk();
                hs_sat26DVnW.evaluateOnce = function () {
                    return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_eventManager25utwT);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DVnW, hs_sat26DVnV);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziMVar.hs_newEmptyMVar, hs_sat26DVnX);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_maskzu, hs_sat26DVnY);
    };
    this.hs_threadWaitRead.evaluate = function (hs_eta1cW6l3) {
        return hs_threadWait25utwR.hscall($hs.modules.SystemziEventziInternal.hs_evtRead, hs_eta1cW6l3);
    };
    this.hs_threadWaitWrite.evaluate = function (hs_eta1cW6l3) {
        return hs_threadWait25utwR.hscall($hs.modules.SystemziEventziInternal.hs_evtWrite, hs_eta1cW6l3);
    };
    hs_sat26DVo1.evaluateOnce = function () {
        var hs_sat26DVnZ = new $hs.Func(1);
        hs_sat26DVnZ.evaluate = function (hs_m26DVmc) {
            return $hs.modules.GHCziConcziSync.hs_sharedCAF.hscall(hs_m26DVmc, hs_getOrSetSystemEventThreadIOManagerThreadStore25utwD);
        };
        var hs_sat26DVo0 = new $hs.Thunk();
        hs_sat26DVo0.evaluateOnce = function () {
            return $hs.modules.GHCziMVar.hs_newMVar.hscall($hs.modules.DataziMaybe.hs_Nothing);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DVo0, hs_sat26DVnZ);
    };
    hs_ioManager25utwV.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_unsafePerformIO, hs_sat26DVo1);
    };
    this.hs_ensureIOManagerIsRunning.evaluateOnce = function () {
        var hs_wild26DVo3 = $hs.modules.GHCziClasses.hs_not.hscall(hs_threaded25utwB);
        switch (hs_wild26DVo3.tag) {
        case 1:
            var hs_sat26DVoq = new $hs.Func(1);
            hs_sat26DVoq.evaluate = function (hs_old26DVmG) {
                var hs_create26DVmF = new $hs.Thunk();
                hs_create26DVmF.evaluateOnce = function () {
                    var hs_sat26DVog = new $hs.Func(1);
                    hs_sat26DVog.evaluate = function (hs_mgr26DVmk) {
                        var hs_mgr126DVmn = hs_mgr26DVmk;
                        if (hs_mgr26DVmk.notEvaluated) {
                            hs_mgr126DVmn = hs_mgr26DVmk.hscall();
                        }
                        var hs_sat26DVoc = new $hs.Thunk();
                        hs_sat26DVoc.evaluateOnce = function () {
                            var hs_sat26DVo9 = new $hs.Func(1);
                            hs_sat26DVo9.evaluate = function (hs_t26DVmt) {
                                var hs_t126DVmw = hs_t26DVmt;
                                if (hs_t26DVmt.notEvaluated) {
                                    hs_t126DVmw = hs_t26DVmt.hscall();
                                }
                                var hs_sat26DVo6 = new $hs.Thunk();
                                hs_sat26DVo6.evaluateOnce = function () {
                                    var hs_sat26DVo4 = new $hs.Data(2);
                                    hs_sat26DVo4.data = [hs_t126DVmw];
                                    var hs_sat26DVo5 = new $hs.Thunk();
                                    hs_sat26DVo5.evaluateOnce = function () {
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO);
                                    };
                                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DVo5, hs_sat26DVo4);
                                };
                                var hs_sat26DVo8 = new $hs.Thunk();
                                hs_sat26DVo8.evaluateOnce = function () {
                                    var hs_sat26DVo7 = new $hs.Thunk();
                                    hs_sat26DVo7.evaluateOnce = function () {
                                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("IOManager\x00");
                                    };
                                    return $hs.modules.GHCziConcziSync.hs_labelThread.hscall(hs_t126DVmw, hs_sat26DVo7);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DVo8, hs_sat26DVo6);
                            };
                            var hs_sat26DVob = new $hs.Thunk();
                            hs_sat26DVob.evaluateOnce = function () {
                                var hs_sat26DVoa = new $hs.Thunk();
                                hs_sat26DVoa.evaluateOnce = function () {
                                    return $hs.modules.SystemziEventziManager.hs_loop.hscall(hs_mgr126DVmn);
                                };
                                return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziConcziSync.hs_forkIO, hs_sat26DVoa);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DVob, hs_sat26DVo9);
                        };
                        var hs_sat26DVof = new $hs.Thunk();
                        hs_sat26DVof.evaluateOnce = function () {
                            var hs_sat26DVod = new $hs.Data(2);
                            hs_sat26DVod.data = [hs_mgr126DVmn];
                            var hs_sat26DVoe = new $hs.Thunk();
                            hs_sat26DVoe.evaluateOnce = function () {
                                return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_eventManager25utwT);
                            };
                            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DVoe, hs_sat26DVod);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DVof, hs_sat26DVoc);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.SystemziEventziManager.hs_new, hs_sat26DVog);
                };
                var hs_wild126DVmO = hs_old26DVmG;
                if (hs_old26DVmG.notEvaluated) {
                    hs_wild126DVmO = hs_old26DVmG.hscall();
                }
                switch (hs_wild126DVmO.tag) {
                case 1:
                    if (hs_create26DVmF.notEvaluated) {
                        return hs_create26DVmF.hscall();
                    } else {
                        return hs_create26DVmF;
                    }
                case 2:
                    var hs_t26DVmJ = hs_wild126DVmO.data[0];
                    var hs_sat26DVoo = new $hs.Func(1);
                    hs_sat26DVoo.evaluate = function (hs_s26DVmM) {
                        var hs_wild226DVoh = hs_s26DVmM;
                        if (hs_s26DVmM.notEvaluated) {
                            hs_wild226DVoh = hs_s26DVmM.hscall();
                        }
                        switch (hs_wild226DVoh.tag) {
                        case 2:
                            if (hs_create26DVmF.notEvaluated) {
                                return hs_create26DVmF.hscall();
                            } else {
                                return hs_create26DVmF;
                            }
                        case 4:
                            var hs_sat26DVom = new $hs.Func(1);
                            hs_sat26DVom.evaluate = function (hs_mem26DVmR) {
                                var hs_sat26DVok = new $hs.Func(1);
                                hs_sat26DVok.evaluate = function (hs_ds26DVoi) {
                                    if (hs_create26DVmF.notEvaluated) {
                                        return hs_create26DVmF.hscall();
                                    } else {
                                        return hs_create26DVmF;
                                    }
                                };
                                var hs_sat26DVol = new $hs.Thunk();
                                hs_sat26DVol.evaluateOnce = function () {
                                    var hs_wild326DVoj = hs_mem26DVmR;
                                    if (hs_mem26DVmR.notEvaluated) {
                                        hs_wild326DVoj = hs_mem26DVmR.hscall();
                                    }
                                    switch (hs_wild326DVoj.tag) {
                                    case 1:
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                                    case 2:
                                        var hs_em26DVmU = hs_wild326DVoj.data[0];
                                        return $hs.modules.SystemziEventziManager.hs_cleanup.hscall(hs_em26DVmU);
                                    }
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DVol, hs_sat26DVok);
                            };
                            var hs_sat26DVon = new $hs.Thunk();
                            hs_sat26DVon.evaluateOnce = function () {
                                return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_eventManager25utwT);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DVon, hs_sat26DVom);
                        default:
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_wild126DVmO);
                        }
                    };
                    var hs_sat26DVop = new $hs.Thunk();
                    hs_sat26DVop.evaluateOnce = function () {
                        return $hs.modules.GHCziConcziSync.hs_threadStatus.hscall(hs_t26DVmJ);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DVop, hs_sat26DVoo);
                }
            };
            var hs_sat26DVor = new $hs.Thunk();
            hs_sat26DVor.evaluateOnce = function () {
                return $hs.modules.GHCziConcziSync.hs_modifyMVarzu.hscall(hs_ioManager25utwV);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DVor, hs_sat26DVoq);
        case 2:
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        }
    };
};

$hs.modules.SystemziEventziControl = new $hs.Module();
$hs.modules.SystemziEventziControl.dependencies = ["GHC.Prim", "GHC.Types", "GHC.Bool", "GHC.Unit", "GHC.Integer", "Control.Monad", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.Show", "GHC.Err", "GHC.Classes", "GHC.ForeignPtr", "GHC.Ptr", "GHC.Word", "Foreign.C.Error", "Foreign.C.Types", "Foreign.ForeignPtr", "Foreign.Marshal.Alloc", "Foreign.Marshal.Array", "Foreign.Storable", "System.Posix.Internals", "System.Posix.Types"];
$hs.modules.SystemziEventziControl.initBeforeDependencies = function () {
    this.hs_zdWW = new $hs.Func(3);
    this.hs_zdWCMsgSignal = new $hs.Func(2);
    this.hs_wakeupReadFd = new $hs.Func(1);
    this.hs_controlReadFd = new $hs.Func(1);
    this.hs_zdfShowControl = new $hs.Data(1);
    this.hs_zdfShowControlMessage = new $hs.Data(1);
    this.hs_zdfEqControlMessage = new $hs.Data(1);
    this.hs_newControl = new $hs.Thunk();
    this.hs_closeControl = new $hs.Func(1);
    this.hs_readControlMessage = new $hs.Func(2);
    this.hs_sendDie = new $hs.Func(1);
    this.hs_sendWakeup = new $hs.Func(1);
    this.hs_W = new $hs.Func(3);
    this.hs_CMsgWakeup = new $hs.Data(1);
    this.hs_CMsgDie = new $hs.Data(2);
    this.hs_CMsgSignal = new $hs.Func(3);
    this.hs_zdWW.notEvaluated = true;
    this.hs_zdWW.evaluate = function (hs_tpl26DRvK, hs_tpl26DRvN, hs_tpl26DRvQ) {
        $hs.modules.SystemziEventziControl.loadDependencies();
        return this.evaluate(hs_tpl26DRvK, hs_tpl26DRvN, hs_tpl26DRvQ);
    };
    this.hs_zdWCMsgSignal.notEvaluated = true;
    this.hs_zdWCMsgSignal.evaluate = function (hs_tpl26DRvY, hs_tpl26DRw2) {
        $hs.modules.SystemziEventziControl.loadDependencies();
        return this.evaluate(hs_tpl26DRvY, hs_tpl26DRw2);
    };
    this.hs_wakeupReadFd.notEvaluated = true;
    this.hs_wakeupReadFd.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.SystemziEventziControl.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_controlReadFd.notEvaluated = true;
    this.hs_controlReadFd.evaluate = function (hs_ds26DRwn) {
        $hs.modules.SystemziEventziControl.loadDependencies();
        return this.evaluate(hs_ds26DRwn);
    };
    this.hs_zdfShowControl.notEvaluated = true;
    this.hs_zdfShowControl.evaluate = function () {
        $hs.modules.SystemziEventziControl.loadDependencies();
        return this;
    };
    this.hs_zdfShowControlMessage.notEvaluated = true;
    this.hs_zdfShowControlMessage.evaluate = function () {
        $hs.modules.SystemziEventziControl.loadDependencies();
        return this;
    };
    this.hs_zdfEqControlMessage.notEvaluated = true;
    this.hs_zdfEqControlMessage.evaluate = function () {
        $hs.modules.SystemziEventziControl.loadDependencies();
        return this;
    };
    this.hs_newControl.evaluateOnce = function () {
        $hs.modules.SystemziEventziControl.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_closeControl.notEvaluated = true;
    this.hs_closeControl.evaluate = function (hs_w26DRAy) {
        $hs.modules.SystemziEventziControl.loadDependencies();
        return this.evaluate(hs_w26DRAy);
    };
    this.hs_readControlMessage.notEvaluated = true;
    this.hs_readControlMessage.evaluate = function (hs_ctrl26DRAV, hs_fd26DRAU) {
        $hs.modules.SystemziEventziControl.loadDependencies();
        return this.evaluate(hs_ctrl26DRAV, hs_fd26DRAU);
    };
    this.hs_sendDie.notEvaluated = true;
    this.hs_sendDie.evaluate = function (hs_c26DRC9) {
        $hs.modules.SystemziEventziControl.loadDependencies();
        return this.evaluate(hs_c26DRC9);
    };
    this.hs_sendWakeup.notEvaluated = true;
    this.hs_sendWakeup.evaluate = function (hs_c26DRCB) {
        $hs.modules.SystemziEventziControl.loadDependencies();
        return this.evaluate(hs_c26DRCB);
    };
    this.hs_W.notEvaluated = true;
    this.hs_W.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziEventziControl.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_CMsgWakeup.notEvaluated = true;
    this.hs_CMsgWakeup.evaluate = function () {
        $hs.modules.SystemziEventziControl.loadDependencies();
        return this;
    };
    this.hs_CMsgDie.notEvaluated = true;
    this.hs_CMsgDie.evaluate = function () {
        $hs.modules.SystemziEventziControl.loadDependencies();
        return this;
    };
    this.hs_CMsgSignal.notEvaluated = true;
    this.hs_CMsgSignal.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziEventziControl.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
};
$hs.modules.SystemziEventziControl.initAfterDependencies = function () {
    this.hs_zdWW.notEvaluated = false;
    this.hs_zdWCMsgSignal.notEvaluated = false;
    this.hs_wakeupReadFd.notEvaluated = false;
    this.hs_controlReadFd.notEvaluated = false;
    this.hs_zdfShowControl.notEvaluated = false;
    this.hs_zdfShowControl.evaluate = function () {
        return this;
    };
    this.hs_zdfShowControlMessage.notEvaluated = false;
    this.hs_zdfShowControlMessage.evaluate = function () {
        return this;
    };
    this.hs_zdfEqControlMessage.notEvaluated = false;
    this.hs_zdfEqControlMessage.evaluate = function () {
        return this;
    };
    this.hs_closeControl.notEvaluated = false;
    this.hs_readControlMessage.notEvaluated = false;
    this.hs_sendDie.notEvaluated = false;
    this.hs_sendWakeup.notEvaluated = false;
    this.hs_W.notEvaluated = false;
    this.hs_CMsgWakeup.notEvaluated = false;
    this.hs_CMsgWakeup.evaluate = function () {
        return this;
    };
    this.hs_CMsgDie.notEvaluated = false;
    this.hs_CMsgDie.evaluate = function () {
        return this;
    };
    this.hs_CMsgSignal.notEvaluated = false;
    var hs_controlEventFd25un1b = new $hs.Func(1);
    var hs_controlWriteFd25un1a = new $hs.Func(1);
    var hs_sizzeofzusiginfozut25un16 = new $hs.Thunk();
    var hs_zdcshowsPrec25vt0k = new $hs.Func(2);
    var hs_sat26DRDF = new $hs.Thunk();
    var hs_zdcshowList25vt16 = new $hs.Thunk();
    var hs_zdcshow25vt18 = new $hs.Thunk();
    var hs_zdcshowsPrec125vt1c = new $hs.Func(2);
    var hs_sat26DRDX = new $hs.Thunk();
    var hs_zdcshowList125vt1E = new $hs.Thunk();
    var hs_zdcshow125vt1G = new $hs.Thunk();
    var hs_zdczeze25vt1K = new $hs.Func(2);
    var hs_zdczsze25vt2u = new $hs.Func(2);
    var hs_sat26DRFd = new $hs.Func(1);
    var hs_sat26DRFf = new $hs.Thunk();
    var hs_sat26DRFy = new $hs.Thunk();
    var hs_iozuMANAGERzuWAKEUP25un1p = new $hs.Thunk();
    var hs_sat26DRFz = new $hs.Thunk();
    var hs_iozuMANAGERzuDIE25un1r = new $hs.Thunk();
    this.hs_zdWW.evaluate = function (hs_tpl26DRvK, hs_tpl26DRvN, hs_tpl26DRvQ) {
        var hs_tpl26DRCR = hs_tpl26DRvK;
        if (hs_tpl26DRvK.notEvaluated) {
            hs_tpl26DRCR = hs_tpl26DRvK.hscall();
        }
        var hs_tpl26DRvT = hs_tpl26DRCR.data[0];
        var hs_tpl26DRCQ = hs_tpl26DRvN;
        if (hs_tpl26DRvN.notEvaluated) {
            hs_tpl26DRCQ = hs_tpl26DRvN.hscall();
        }
        var hs_tpl26DRvU = hs_tpl26DRCQ.data[0];
        var hs_tpl26DRCP = hs_tpl26DRvQ;
        if (hs_tpl26DRvQ.notEvaluated) {
            hs_tpl26DRCP = hs_tpl26DRvQ.hscall();
        }
        var hs_tpl26DRvV = hs_tpl26DRCP.data[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26DRvT, hs_tpl26DRvU, hs_tpl26DRvV];
        return $res;
    };
    this.hs_zdWCMsgSignal.evaluate = function (hs_tpl26DRvY, hs_tpl26DRw2) {
        var hs_tpl26DRCT = hs_tpl26DRvY;
        if (hs_tpl26DRvY.notEvaluated) {
            hs_tpl26DRCT = hs_tpl26DRvY.hscall();
        }
        var hs_tpl26DRw5 = hs_tpl26DRCT.data[0];
        var hs_tpl26DRw6 = hs_tpl26DRCT.data[1];
        var hs_tpl26DRCS = hs_tpl26DRw2;
        if (hs_tpl26DRw2.notEvaluated) {
            hs_tpl26DRCS = hs_tpl26DRw2.hscall();
        }
        var hs_tpl26DRw7 = hs_tpl26DRCS.data[0];
        var $res = new $hs.Data(3);
        $res.data = [hs_tpl26DRw5, hs_tpl26DRw6, hs_tpl26DRw7];
        return $res;
    };
    hs_controlEventFd25un1b.evaluate = function (hs_ds26DRw9) {
        var hs_wild26DRCV = hs_ds26DRw9;
        if (hs_ds26DRw9.notEvaluated) {
            hs_wild26DRCV = hs_ds26DRw9.hscall();
        }
        var hs_rb226DRwe = hs_wild26DRCV.data[2];
        var $res = new $hs.Data(1);
        $res.data = [hs_rb226DRwe];
        return $res;
    };
    this.hs_wakeupReadFd.evaluate = function (hs_eta1cW6l3) {
        return hs_controlEventFd25un1b.hscall(hs_eta1cW6l3);
    };
    hs_controlWriteFd25un1a.evaluate = function (hs_ds26DRwg) {
        var hs_wild26DRCY = hs_ds26DRwg;
        if (hs_ds26DRwg.notEvaluated) {
            hs_wild26DRCY = hs_ds26DRwg.hscall();
        }
        var hs_rb126DRwl = hs_wild26DRCY.data[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_rb126DRwl];
        return $res;
    };
    this.hs_controlReadFd.evaluate = function (hs_ds26DRwn) {
        var hs_wild26DRD0 = hs_ds26DRwn;
        if (hs_ds26DRwn.notEvaluated) {
            hs_wild26DRD0 = hs_ds26DRwn.hscall();
        }
        var hs_rb26DRws = hs_wild26DRD0.data[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_rb26DRws];
        return $res;
    };
    hs_sizzeofzusiginfozut25un16.evaluateOnce = function () {
        var hs_wild26DRD4 = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_si=of_siginfo_t()];
        var hs_ds126DRwy = hs_wild26DRD4[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126DRwy];
        return $res;
    };
    hs_zdcshowsPrec25vt0k.evaluate = function (hs_a26DRwI, hs_ds26DRwD) {
        var hs_wild26DRD5 = hs_ds26DRwD;
        if (hs_ds26DRwD.notEvaluated) {
            hs_wild26DRD5 = hs_ds26DRwD.hscall();
        }
        var hs_rb26DRwQ = hs_wild26DRD5.data[0];
        var hs_rb126DRwY = hs_wild26DRD5.data[1];
        var hs_rb226DRx6 = hs_wild26DRD5.data[2];
        var hs_sat26DRDC = new $hs.Thunk();
        hs_sat26DRDC.evaluateOnce = function () {
            var hs_sat26DRDz = new $hs.Thunk();
            hs_sat26DRDz.evaluateOnce = function () {
                var hs_sat26DRDw = new $hs.Thunk();
                hs_sat26DRDw.evaluateOnce = function () {
                    var hs_sat26DRDs = new $hs.Thunk();
                    hs_sat26DRDs.evaluateOnce = function () {
                        var hs_sat26DRDp = new $hs.Thunk();
                        hs_sat26DRDp.evaluateOnce = function () {
                            var hs_sat26DRDm = new $hs.Thunk();
                            hs_sat26DRDm.evaluateOnce = function () {
                                var hs_sat26DRDi = new $hs.Thunk();
                                hs_sat26DRDi.evaluateOnce = function () {
                                    var hs_sat26DRDf = new $hs.Thunk();
                                    hs_sat26DRDf.evaluateOnce = function () {
                                        var hs_sat26DRDc = new $hs.Thunk();
                                        hs_sat26DRDc.evaluateOnce = function () {
                                            var hs_sat26DRD8 = new $hs.Thunk();
                                            hs_sat26DRD8.evaluateOnce = function () {
                                                var hs_sat26DRD6 = new $hs.Data(1);
                                                hs_sat26DRD6.data = ["}"];
                                                var hs_sat26DRD7 = new $hs.Data(2);
                                                hs_sat26DRD7.data = [hs_sat26DRD6, $hs.modules.GHCziTypes.hs_ZMZN];
                                                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DRD7);
                                            };
                                            var hs_sat26DRDb = new $hs.Thunk();
                                            hs_sat26DRDb.evaluateOnce = function () {
                                                var hs_sat26DRD9 = new $hs.Data(1);
                                                hs_sat26DRD9.data = [hs_rb226DRx6];
                                                var hs_sat26DRDa = new $hs.Data(1);
                                                hs_sat26DRDa.data = [0];
                                                return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfShowFd, hs_sat26DRDa, hs_sat26DRD9);
                                            };
                                            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DRDb, hs_sat26DRD8);
                                        };
                                        var hs_sat26DRDe = new $hs.Thunk();
                                        hs_sat26DRDe.evaluateOnce = function () {
                                            var hs_sat26DRDd = new $hs.Thunk();
                                            hs_sat26DRDd.evaluateOnce = function () {
                                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("controlEventFd = \x00");
                                            };
                                            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DRDd);
                                        };
                                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DRDe, hs_sat26DRDc);
                                    };
                                    var hs_sat26DRDh = new $hs.Thunk();
                                    hs_sat26DRDh.evaluateOnce = function () {
                                        var hs_sat26DRDg = new $hs.Thunk();
                                        hs_sat26DRDg.evaluateOnce = function () {
                                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall(", \x00");
                                        };
                                        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DRDg);
                                    };
                                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DRDh, hs_sat26DRDf);
                                };
                                var hs_sat26DRDl = new $hs.Thunk();
                                hs_sat26DRDl.evaluateOnce = function () {
                                    var hs_sat26DRDj = new $hs.Data(1);
                                    hs_sat26DRDj.data = [hs_rb126DRwY];
                                    var hs_sat26DRDk = new $hs.Data(1);
                                    hs_sat26DRDk.data = [0];
                                    return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfShowFd, hs_sat26DRDk, hs_sat26DRDj);
                                };
                                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DRDl, hs_sat26DRDi);
                            };
                            var hs_sat26DRDo = new $hs.Thunk();
                            hs_sat26DRDo.evaluateOnce = function () {
                                var hs_sat26DRDn = new $hs.Thunk();
                                hs_sat26DRDn.evaluateOnce = function () {
                                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("controlWriteFd = \x00");
                                };
                                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DRDn);
                            };
                            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DRDo, hs_sat26DRDm);
                        };
                        var hs_sat26DRDr = new $hs.Thunk();
                        hs_sat26DRDr.evaluateOnce = function () {
                            var hs_sat26DRDq = new $hs.Thunk();
                            hs_sat26DRDq.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall(", \x00");
                            };
                            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DRDq);
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DRDr, hs_sat26DRDp);
                    };
                    var hs_sat26DRDv = new $hs.Thunk();
                    hs_sat26DRDv.evaluateOnce = function () {
                        var hs_sat26DRDt = new $hs.Data(1);
                        hs_sat26DRDt.data = [hs_rb26DRwQ];
                        var hs_sat26DRDu = new $hs.Data(1);
                        hs_sat26DRDu.data = [0];
                        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfShowFd, hs_sat26DRDu, hs_sat26DRDt);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DRDv, hs_sat26DRDs);
                };
                var hs_sat26DRDy = new $hs.Thunk();
                hs_sat26DRDy.evaluateOnce = function () {
                    var hs_sat26DRDx = new $hs.Thunk();
                    hs_sat26DRDx.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("controlReadFd = \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DRDx);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DRDy, hs_sat26DRDw);
            };
            var hs_sat26DRDB = new $hs.Thunk();
            hs_sat26DRDB.evaluateOnce = function () {
                var hs_sat26DRDA = new $hs.Thunk();
                hs_sat26DRDA.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("W {\x00");
                };
                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DRDA);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DRDB, hs_sat26DRDz);
        };
        var hs_sat26DRDE = new $hs.Thunk();
        hs_sat26DRDE.evaluateOnce = function () {
            var hs_sat26DRDD = new $hs.Data(1);
            hs_sat26DRDD.data = [11];
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_a26DRwI, hs_sat26DRDD);
        };
        return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DRDE, hs_sat26DRDC);
    };
    hs_sat26DRDF.evaluateOnce = function () {
        var hs_sat26DRDG = new $hs.Data(1);
        hs_sat26DRDG.data = [0];
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.SystemziEventziControl.hs_zdfShowControl, hs_sat26DRDG);
    };
    this.hs_zdfShowControl.data = [hs_zdcshowsPrec25vt0k, hs_zdcshow25vt18, hs_zdcshowList25vt16];
    hs_zdcshowList25vt16.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DRDF);
    };
    hs_zdcshow25vt18.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.SystemziEventziControl.hs_zdfShowControl);
    };
    hs_zdcshowsPrec125vt1c.evaluate = function (hs_ds26DRxC, hs_ds126DRxv) {
        var hs_wild26DRDH = hs_ds126DRxv;
        if (hs_ds126DRxv.notEvaluated) {
            hs_wild26DRDH = hs_ds126DRxv.hscall();
        }
        switch (hs_wild26DRDH.tag) {
        case 1:
            var hs_sat26DRDI = new $hs.Thunk();
            hs_sat26DRDI.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CMsgWakeup\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DRDI);
        case 2:
            var hs_sat26DRDJ = new $hs.Thunk();
            hs_sat26DRDJ.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CMsgDie\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DRDJ);
        case 3:
            var hs_rb26DRxI = hs_wild26DRDH.data[0];
            var hs_rb126DRxJ = hs_wild26DRDH.data[1];
            var hs_rb226DRxN = hs_wild26DRDH.data[2];
            var hs_sat26DRDU = new $hs.Thunk();
            hs_sat26DRDU.evaluateOnce = function () {
                var hs_sat26DRDR = new $hs.Thunk();
                hs_sat26DRDR.evaluateOnce = function () {
                    var hs_sat26DRDN = new $hs.Thunk();
                    hs_sat26DRDN.evaluateOnce = function () {
                        var hs_sat26DRDM = new $hs.Thunk();
                        hs_sat26DRDM.evaluateOnce = function () {
                            var hs_sat26DRDK = new $hs.Data(1);
                            hs_sat26DRDK.data = [hs_rb226DRxN];
                            var hs_sat26DRDL = new $hs.Data(1);
                            hs_sat26DRDL.data = [11];
                            return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfShowCInt, hs_sat26DRDL, hs_sat26DRDK);
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.GHCziShow.hs_showSpace, hs_sat26DRDM);
                    };
                    var hs_sat26DRDQ = new $hs.Thunk();
                    hs_sat26DRDQ.evaluateOnce = function () {
                        var hs_sat26DRDO = new $hs.Data(1);
                        hs_sat26DRDO.data = [hs_rb26DRxI, hs_rb126DRxJ];
                        var hs_sat26DRDP = new $hs.Data(1);
                        hs_sat26DRDP.data = [11];
                        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziForeignPtr.hs_zdfShowForeignPtr, hs_sat26DRDP, hs_sat26DRDO);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DRDQ, hs_sat26DRDN);
                };
                var hs_sat26DRDT = new $hs.Thunk();
                hs_sat26DRDT.evaluateOnce = function () {
                    var hs_sat26DRDS = new $hs.Thunk();
                    hs_sat26DRDS.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CMsgSignal \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DRDS);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DRDT, hs_sat26DRDR);
            };
            var hs_sat26DRDW = new $hs.Thunk();
            hs_sat26DRDW.evaluateOnce = function () {
                var hs_sat26DRDV = new $hs.Data(1);
                hs_sat26DRDV.data = [11];
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_ds26DRxC, hs_sat26DRDV);
            };
            return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DRDW, hs_sat26DRDU);
        }
    };
    hs_sat26DRDX.evaluateOnce = function () {
        var hs_sat26DRDY = new $hs.Data(1);
        hs_sat26DRDY.data = [0];
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.SystemziEventziControl.hs_zdfShowControlMessage, hs_sat26DRDY);
    };
    this.hs_zdfShowControlMessage.data = [hs_zdcshowsPrec125vt1c, hs_zdcshow125vt1G, hs_zdcshowList125vt1E];
    hs_zdcshowList125vt1E.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DRDX);
    };
    hs_zdcshow125vt1G.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.SystemziEventziControl.hs_zdfShowControlMessage);
    };
    hs_zdczeze25vt1K.evaluate = function (hs_ds26DRy5, hs_ds126DRy7) {
        var hs_fail26DRyo = new $hs.Func(1);
        hs_fail26DRyo.evaluate = function (hs_ds226DRyn) {
            var hs_wild26DRE0 = hs_ds26DRy5;
            if (hs_ds26DRy5.notEvaluated) {
                hs_wild26DRE0 = hs_ds26DRy5.hscall();
            }
            switch (hs_wild26DRE0.tag) {
            case 1:
                var hs_wild126DRDZ = hs_ds126DRy7;
                if (hs_ds126DRy7.notEvaluated) {
                    hs_wild126DRDZ = hs_ds126DRy7.hscall();
                }
                switch (hs_wild126DRDZ.tag) {
                case 1:
                    return 0 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                case 2:
                    return 0 == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                case 3:
                    return 0 == 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                }
            case 2:
                var hs_wild126DRE4 = hs_ds126DRy7;
                if (hs_ds126DRy7.notEvaluated) {
                    hs_wild126DRE4 = hs_ds126DRy7.hscall();
                }
                switch (hs_wild126DRE4.tag) {
                case 1:
                    return 1 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                case 2:
                    return 1 == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                case 3:
                    return 1 == 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                }
            case 3:
                var hs_wild126DRE8 = hs_ds126DRy7;
                if (hs_ds126DRy7.notEvaluated) {
                    hs_wild126DRE8 = hs_ds126DRy7.hscall();
                }
                switch (hs_wild126DRE8.tag) {
                case 1:
                    return 2 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                case 2:
                    return 2 == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                case 3:
                    return 2 == 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                }
            }
        };
        var hs_wild26DREf = hs_ds26DRy5;
        if (hs_ds26DRy5.notEvaluated) {
            hs_wild26DREf = hs_ds26DRy5.hscall();
        }
        switch (hs_wild26DREf.tag) {
        case 3:
            var hs_rb26DRyx = hs_wild26DREf.data[0];
            var hs_rb126DRyy = hs_wild26DREf.data[1];
            var hs_rb226DRyE = hs_wild26DREf.data[2];
            var hs_wild126DREg = hs_ds126DRy7;
            if (hs_ds126DRy7.notEvaluated) {
                hs_wild126DREg = hs_ds126DRy7.hscall();
            }
            switch (hs_wild126DREg.tag) {
            case 3:
                var hs_rb326DRyA = hs_wild126DREg.data[0];
                var hs_rb426DRyB = hs_wild126DREg.data[1];
                var hs_rb526DRyG = hs_wild126DREg.data[2];
                var hs_sat26DREj = new $hs.Thunk();
                hs_sat26DREj.evaluateOnce = function () {
                    var hs_sat26DREh = new $hs.Data(1);
                    hs_sat26DREh.data = [hs_rb526DRyG];
                    var hs_sat26DREi = new $hs.Data(1);
                    hs_sat26DREi.data = [hs_rb226DRyE];
                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_sat26DREi, hs_sat26DREh);
                };
                var hs_sat26DREm = new $hs.Thunk();
                hs_sat26DREm.evaluateOnce = function () {
                    var hs_sat26DREk = new $hs.Data(1);
                    hs_sat26DREk.data = [hs_rb326DRyA, hs_rb426DRyB];
                    var hs_sat26DREl = new $hs.Data(1);
                    hs_sat26DREl.data = [hs_rb26DRyx, hs_rb126DRyy];
                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziForeignPtr.hs_zdfEqForeignPtr, hs_sat26DREl, hs_sat26DREk);
                };
                return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DREm, hs_sat26DREj);
            default:
                return hs_fail26DRyo.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            }
        default:
            return hs_fail26DRyo.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
        }
    };
    this.hs_zdfEqControlMessage.data = [hs_zdczeze25vt1K, hs_zdczsze25vt2u];
    hs_zdczsze25vt2u.evaluate = function (hs_a26DRyN, hs_b26DRyO) {
        var hs_sat26DREn = new $hs.Thunk();
        hs_sat26DREn.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.SystemziEventziControl.hs_zdfEqControlMessage, hs_a26DRyN, hs_b26DRyO);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DREn);
    };
    hs_sat26DRFd.evaluate = function (hs_fds26DRyV) {
        var hs_sat26DRET = new $hs.Func(1);
        hs_sat26DRET.evaluate = function (hs_ds26DRzi) {
            var hs_wild26DREr = hs_ds26DRzi;
            if (hs_ds26DRzi.notEvaluated) {
                hs_wild26DREr = hs_ds26DRzi.hscall();
            }
            var hs_ctrlzurd26DRAc = hs_wild26DREr.data[0];
            var hs_ctrlzuwr26DRzm = hs_wild26DREr.data[1];
            var hs_sat26DREQ = new $hs.Thunk();
            hs_sat26DREQ.evaluateOnce = function () {
                var hs_sat26DREC = new $hs.Func(1);
                hs_sat26DREC.evaluate = function (hs_ev26DRzX) {
                    var hs_sat26DREA = new $hs.Thunk();
                    hs_sat26DREA.evaluateOnce = function () {
                        var hs_sat26DREy = new $hs.Thunk();
                        hs_sat26DREy.evaluateOnce = function () {
                            var hs_sat26DREv = new $hs.Thunk();
                            hs_sat26DREv.evaluateOnce = function () {
                                var hs_sat26DREs = new $hs.Thunk();
                                hs_sat26DREs.evaluateOnce = function () {
                                    var hs_tpl26DREq = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.SystemziPosixziTypes.hs_zdfNumFd, hs_ctrlzurd26DRAc);
                                    var hs_tpl126DRAj = hs_tpl26DREq.data[0];
                                    var hs_tpl226DREp = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.SystemziPosixziTypes.hs_zdfNumFd, hs_ctrlzuwr26DRzm);
                                    var hs_tpl326DRAk = hs_tpl226DREp.data[0];
                                    var hs_tpl426DREo = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.SystemziPosixziTypes.hs_zdfNumFd, hs_ev26DRzX);
                                    var hs_tpl526DRAl = hs_tpl426DREo.data[0];
                                    var $res = new $hs.Data(1);
                                    $res.data = [hs_tpl126DRAj, hs_tpl326DRAk, hs_tpl526DRAl];
                                    return $res;
                                };
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DREs);
                            };
                            var hs_sat26DREx = new $hs.Thunk();
                            hs_sat26DREx.evaluateOnce = function () {
                                var hs_ds126DREu = hs_ev26DRzX;
                                if (hs_ev26DRzX.notEvaluated) {
                                    hs_ds126DREu = hs_ev26DRzX.hscall();
                                }
                                var hs_ds226DRA4 = hs_ds126DREu.data[0];
                                var hs_sat26DREw = new $hs.Func(1);
                                hs_sat26DREw.evaluate = function (hs_ds326DRA5) {
                                    var hs_wild126DREt = [hs_ds326DRA5, setIOManagerWakeupFd(hs_ds226DRA4)];
                                    var hs_ds426DRA9 = hs_wild126DREt[0];
                                    return [hs_ds426DRA9, $hs.modules.GHCziUnit.hs_Z0T];
                                };
                                if (hs_sat26DREw.notEvaluated) {
                                    return hs_sat26DREw.hscall();
                                } else {
                                    return hs_sat26DREw;
                                }
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DREx, hs_sat26DREv);
                        };
                        var hs_sat26DREz = new $hs.Thunk();
                        hs_sat26DREz.evaluateOnce = function () {
                            return $hs.modules.SystemziPosixziInternals.hs_setCloseOnExec.hscall(hs_ev26DRzX);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DREz, hs_sat26DREy);
                    };
                    var hs_sat26DREB = new $hs.Thunk();
                    hs_sat26DREB.evaluateOnce = function () {
                        return $hs.modules.SystemziPosixziInternals.hs_setNonBlockingFD.hscall(hs_ev26DRzX, $hs.modules.GHCziBool.hs_True);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DREB, hs_sat26DREA);
                };
                var hs_sat26DREN = new $hs.Thunk();
                hs_sat26DREN.evaluateOnce = function () {
                    var hs_sat26DREK = new $hs.Thunk();
                    hs_sat26DREK.evaluateOnce = function () {
                        var hs_sat26DREE = new $hs.Thunk();
                        hs_sat26DREE.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        var hs_ds126DRED = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DREE);
                        var hs_ds226DRzJ = hs_ds126DRED.data[0];
                        var hs_sat26DREH = new $hs.Thunk();
                        hs_sat26DREH.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        var hs_ds326DREG = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DREH);
                        var hs_ds426DRzK = hs_ds326DREG.data[0];
                        var hs_sat26DREJ = new $hs.Func(1);
                        hs_sat26DREJ.evaluate = function (hs_ds526DRzL) {
                            var hs_wild126DREF = [hs_ds526DRzL, eventfd(hs_ds226DRzJ, hs_ds426DRzK)];
                            var hs_ds626DRzQ = hs_wild126DREF[0];
                            var hs_ds726DRzR = hs_wild126DREF[1];
                            var hs_sat26DREI = new $hs.Data(1);
                            hs_sat26DREI.data = [hs_ds726DRzR];
                            return [hs_ds626DRzQ, hs_sat26DREI];
                        };
                        if (hs_sat26DREJ.notEvaluated) {
                            return hs_sat26DREJ.hscall();
                        } else {
                            return hs_sat26DREJ;
                        }
                    };
                    var hs_sat26DREM = new $hs.Thunk();
                    hs_sat26DREM.evaluateOnce = function () {
                        var hs_sat26DREL = new $hs.Thunk();
                        hs_sat26DREL.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("eventfd\x00");
                        };
                        return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DREL);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DREM, hs_sat26DREK);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DREN, hs_sat26DREC);
            };
            var hs_sat26DRES = new $hs.Thunk();
            hs_sat26DRES.evaluateOnce = function () {
                var hs_ds126DREP = hs_ctrlzuwr26DRzm;
                if (hs_ctrlzuwr26DRzm.notEvaluated) {
                    hs_ds126DREP = hs_ctrlzuwr26DRzm.hscall();
                }
                var hs_ds226DRzr = hs_ds126DREP.data[0];
                var hs_sat26DRER = new $hs.Func(1);
                hs_sat26DRER.evaluate = function (hs_ds326DRzs) {
                    var hs_wild126DREO = [hs_ds326DRzs, setIOManagerControlFd(hs_ds226DRzr)];
                    var hs_ds426DRzw = hs_wild126DREO[0];
                    return [hs_ds426DRzw, $hs.modules.GHCziUnit.hs_Z0T];
                };
                if (hs_sat26DRER.notEvaluated) {
                    return hs_sat26DRER.hscall();
                } else {
                    return hs_sat26DRER;
                }
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DRES, hs_sat26DREQ);
        };
        var hs_sat26DRFc = new $hs.Thunk();
        hs_sat26DRFc.evaluateOnce = function () {
            var hs_sat26DRF7 = new $hs.Thunk();
            hs_sat26DRF7.evaluateOnce = function () {
                var hs_sat26DRF4 = new $hs.Func(1);
                hs_sat26DRF4.evaluate = function (hs_rd26DRz6) {
                    var hs_sat26DRF1 = new $hs.Func(1);
                    hs_sat26DRF1.evaluate = function (hs_wr26DRz4) {
                        var hs_sat26DREZ = new $hs.Thunk();
                        hs_sat26DREZ.evaluateOnce = function () {
                            var hs_sat26DREX = new $hs.Thunk();
                            hs_sat26DREX.evaluateOnce = function () {
                                var hs_sat26DREV = new $hs.Thunk();
                                hs_sat26DREV.evaluateOnce = function () {
                                    var hs_sat26DREU = new $hs.Data(1);
                                    hs_sat26DREU.data = [hs_rd26DRz6, hs_wr26DRz4];
                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DREU);
                                };
                                var hs_sat26DREW = new $hs.Thunk();
                                hs_sat26DREW.evaluateOnce = function () {
                                    return $hs.modules.SystemziPosixziInternals.hs_setCloseOnExec.hscall(hs_wr26DRz4);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DREW, hs_sat26DREV);
                            };
                            var hs_sat26DREY = new $hs.Thunk();
                            hs_sat26DREY.evaluateOnce = function () {
                                return $hs.modules.SystemziPosixziInternals.hs_setCloseOnExec.hscall(hs_rd26DRz6);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DREY, hs_sat26DREX);
                        };
                        var hs_sat26DRF0 = new $hs.Thunk();
                        hs_sat26DRF0.evaluateOnce = function () {
                            return $hs.modules.SystemziPosixziInternals.hs_setNonBlockingFD.hscall(hs_wr26DRz4, $hs.modules.GHCziBool.hs_True);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DRF0, hs_sat26DREZ);
                    };
                    var hs_sat26DRF3 = new $hs.Thunk();
                    hs_sat26DRF3.evaluateOnce = function () {
                        var hs_sat26DRF2 = new $hs.Data(1);
                        hs_sat26DRF2.data = [1];
                        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCInt, hs_fds26DRyV, hs_sat26DRF2);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DRF3, hs_sat26DRF1);
                };
                var hs_sat26DRF6 = new $hs.Thunk();
                hs_sat26DRF6.evaluateOnce = function () {
                    var hs_sat26DRF5 = new $hs.Data(1);
                    hs_sat26DRF5.data = [0];
                    return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCInt, hs_fds26DRyV, hs_sat26DRF5);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DRF6, hs_sat26DRF4);
            };
            var hs_sat26DRFb = new $hs.Thunk();
            hs_sat26DRFb.evaluateOnce = function () {
                var hs_sat26DRF8 = new $hs.Thunk();
                hs_sat26DRF8.evaluateOnce = function () {
                    return $hs.modules.SystemziPosixziInternals.hs_czupipe.hscall(hs_fds26DRyV);
                };
                var hs_sat26DRFa = new $hs.Thunk();
                hs_sat26DRFa.evaluateOnce = function () {
                    var hs_sat26DRF9 = new $hs.Thunk();
                    hs_sat26DRF9.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("pipe\x00");
                    };
                    return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1zu.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DRF9);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DRFa, hs_sat26DRF8);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DRFb, hs_sat26DRF7);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DRFc, hs_sat26DRET);
    };
    hs_sat26DRFf.evaluateOnce = function () {
        var hs_sat26DRFe = new $hs.Data(1);
        hs_sat26DRFe.data = [2];
        return $hs.modules.ForeignziMarshalziArray.hs_allocaArray.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCInt, hs_sat26DRFe);
    };
    this.hs_newControl.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DRFf, hs_sat26DRFd);
    };
    this.hs_closeControl.evaluate = function (hs_w26DRAy) {
        var hs_sat26DRFt = new $hs.Func(1);
        hs_sat26DRFt.evaluate = function (hs_ds26DRFg) {
            var hs_sat26DRFo = new $hs.Func(1);
            hs_sat26DRFo.evaluate = function (hs_ds126DRFh) {
                var hs_sat26DRFj = new $hs.Func(1);
                hs_sat26DRFj.evaluate = function (hs_ds226DRFi) {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                };
                var hs_sat26DRFn = new $hs.Thunk();
                hs_sat26DRFn.evaluateOnce = function () {
                    var hs_sat26DRFm = new $hs.Thunk();
                    hs_sat26DRFm.evaluateOnce = function () {
                        var hs_sat26DRFl = new $hs.Thunk();
                        hs_sat26DRFl.evaluateOnce = function () {
                            var hs_sat26DRFk = new $hs.Thunk();
                            hs_sat26DRFk.evaluateOnce = function () {
                                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralFd, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt);
                            };
                            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DRFk, hs_controlEventFd25un1b);
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.SystemziPosixziInternals.hs_czuclose, hs_sat26DRFl);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DRFm, hs_w26DRAy);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DRFn, hs_sat26DRFj);
            };
            var hs_sat26DRFs = new $hs.Thunk();
            hs_sat26DRFs.evaluateOnce = function () {
                var hs_sat26DRFr = new $hs.Thunk();
                hs_sat26DRFr.evaluateOnce = function () {
                    var hs_sat26DRFq = new $hs.Thunk();
                    hs_sat26DRFq.evaluateOnce = function () {
                        var hs_sat26DRFp = new $hs.Thunk();
                        hs_sat26DRFp.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralFd, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt);
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DRFp, hs_controlWriteFd25un1a);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.SystemziPosixziInternals.hs_czuclose, hs_sat26DRFq);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DRFr, hs_w26DRAy);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DRFs, hs_sat26DRFo);
        };
        var hs_sat26DRFx = new $hs.Thunk();
        hs_sat26DRFx.evaluateOnce = function () {
            var hs_sat26DRFw = new $hs.Thunk();
            hs_sat26DRFw.evaluateOnce = function () {
                var hs_sat26DRFv = new $hs.Thunk();
                hs_sat26DRFv.evaluateOnce = function () {
                    var hs_sat26DRFu = new $hs.Thunk();
                    hs_sat26DRFu.evaluateOnce = function () {
                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralFd, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DRFu, $hs.modules.SystemziEventziControl.hs_controlReadFd);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.SystemziPosixziInternals.hs_czuclose, hs_sat26DRFv);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DRFw, hs_w26DRAy);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DRFx, hs_sat26DRFt);
    };
    hs_sat26DRFy.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(255);
    };
    hs_iozuMANAGERzuWAKEUP25un1p.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26DRFy);
    };
    hs_sat26DRFz.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(254);
    };
    hs_iozuMANAGERzuDIE25un1r.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26DRFz);
    };
    this.hs_readControlMessage.evaluate = function (hs_ctrl26DRAV, hs_fd26DRAU) {
        var hs_wakeupBufferSizze26DRAT = new $hs.Data(1);
        hs_wakeupBufferSizze26DRAT.data = [8];
        var hs_sat26DRFJ = new $hs.Thunk();
        hs_sat26DRFJ.evaluateOnce = function () {
            var hs_wild26DRFB = hs_ctrl26DRAV;
            if (hs_ctrl26DRAV.notEvaluated) {
                hs_wild26DRFB = hs_ctrl26DRAV.hscall();
            }
            var hs_rb226DRB0 = hs_wild26DRFB.data[2];
            var $res = new $hs.Data(1);
            $res.data = [hs_rb226DRB0];
            return $res;
        };
        var hs_wild26DRFI = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.SystemziPosixziTypes.hs_zdfEqFd, hs_fd26DRAU, hs_sat26DRFJ);
        switch (hs_wild26DRFI.tag) {
        case 1:
            var hs_sat26DRGc = new $hs.Func(1);
            hs_sat26DRGc.evaluate = function (hs_p26DRB8) {
                var hs_sat26DRG4 = new $hs.Thunk();
                hs_sat26DRG4.evaluateOnce = function () {
                    var hs_sat26DRG2 = new $hs.Func(1);
                    hs_sat26DRG2.evaluate = function (hs_s26DRBf) {
                        var hs_wild126DRFH = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_s26DRBf, hs_iozuMANAGERzuWAKEUP25un1p);
                        switch (hs_wild126DRFH.tag) {
                        case 1:
                            var hs_wild226DRFG = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_s26DRBf, hs_iozuMANAGERzuDIE25un1r);
                            switch (hs_wild226DRFG.tag) {
                            case 1:
                                var hs_sat26DRFZ = new $hs.Func(1);
                                hs_sat26DRFZ.evaluate = function (hs_fp26DRBl) {
                                    var hs_sat26DRFX = new $hs.Func(1);
                                    hs_sat26DRFX.evaluate = function (hs_pzusiginfo26DRBp) {
                                        var hs_sat26DRFT = new $hs.Func(1);
                                        hs_sat26DRFT.evaluate = function (hs_r26DRBt) {
                                            var hs_sat26DRFN = new $hs.Thunk();
                                            hs_sat26DRFN.evaluateOnce = function () {
                                                var hs_nt26DRBG = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_s26DRBf);
                                                var hs_sat26DRFK = new $hs.Thunk();
                                                hs_sat26DRFK.evaluateOnce = function () {
                                                    var hs_tpl26DRFE = hs_fp26DRBl;
                                                    if (hs_fp26DRBl.notEvaluated) {
                                                        hs_tpl26DRFE = hs_fp26DRBl.hscall();
                                                    }
                                                    var hs_tpl126DRBJ = hs_tpl26DRFE.data[0];
                                                    var hs_tpl226DRBK = hs_tpl26DRFE.data[1];
                                                    var hs_tpl326DRFD = hs_nt26DRBG;
                                                    if (hs_nt26DRBG.notEvaluated) {
                                                        hs_tpl326DRFD = hs_nt26DRBG.hscall();
                                                    }
                                                    var hs_tpl426DRBL = hs_tpl326DRFD.data[0];
                                                    var $res = new $hs.Data(3);
                                                    $res.data = [hs_tpl126DRBJ, hs_tpl226DRBK, hs_tpl426DRBL];
                                                    return $res;
                                                };
                                                var hs_sat26DRFL = new $hs.Thunk();
                                                hs_sat26DRFL.evaluateOnce = function () {
                                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO);
                                                };
                                                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DRFL, hs_sat26DRFK);
                                            };
                                            var hs_sat26DRFS = new $hs.Thunk();
                                            hs_sat26DRFS.evaluateOnce = function () {
                                                var hs_sat26DRFO = new $hs.Thunk();
                                                hs_sat26DRFO.evaluateOnce = function () {
                                                    var hs_sat26DRFM = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("failed to read siginfo_t\x00");
                                                    return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DRFM);
                                                };
                                                var hs_sat26DRFR = new $hs.Thunk();
                                                hs_sat26DRFR.evaluateOnce = function () {
                                                    var hs_sat26DRFQ = new $hs.Thunk();
                                                    hs_sat26DRFQ.evaluateOnce = function () {
                                                        var hs_sat26DRFP = new $hs.Thunk();
                                                        hs_sat26DRFP.evaluateOnce = function () {
                                                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCSizze, $hs.modules.SystemziPosixziTypes.hs_zdfNumCSsizze, hs_sizzeofzusiginfozut25un16);
                                                        };
                                                        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.SystemziPosixziTypes.hs_zdfEqCSsizze, hs_r26DRBt, hs_sat26DRFP);
                                                    };
                                                    return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DRFQ);
                                                };
                                                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DRFR, hs_sat26DRFO);
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DRFS, hs_sat26DRFN);
                                        };
                                        var hs_sat26DRFW = new $hs.Thunk();
                                        hs_sat26DRFW.evaluateOnce = function () {
                                            var hs_sat26DRFU = new $hs.Thunk();
                                            hs_sat26DRFU.evaluateOnce = function () {
                                                return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_pzusiginfo26DRBp);
                                            };
                                            var hs_sat26DRFV = new $hs.Thunk();
                                            hs_sat26DRFV.evaluateOnce = function () {
                                                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralFd, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_fd26DRAU);
                                            };
                                            return $hs.modules.SystemziPosixziInternals.hs_czuread.hscall(hs_sat26DRFV, hs_sat26DRFU, hs_sizzeofzusiginfozut25un16);
                                        };
                                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DRFW, hs_sat26DRFT);
                                    };
                                    var hs_sat26DRFY = new $hs.Thunk();
                                    hs_sat26DRFY.evaluateOnce = function () {
                                        return $hs.modules.ForeignziForeignPtr.hs_withForeignPtr.hscall(hs_fp26DRBl);
                                    };
                                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DRFY, hs_sat26DRFX);
                                };
                                var hs_sat26DRG1 = new $hs.Thunk();
                                hs_sat26DRG1.evaluateOnce = function () {
                                    var hs_sat26DRG0 = new $hs.Thunk();
                                    hs_sat26DRG0.evaluateOnce = function () {
                                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCSizze, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sizzeofzusiginfozut25un16);
                                    };
                                    return $hs.modules.GHCziForeignPtr.hs_mallocForeignPtrBytes.hscall(hs_sat26DRG0);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DRG1, hs_sat26DRFZ);
                            case 2:
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.SystemziEventziControl.hs_CMsgDie);
                            }
                        case 2:
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.SystemziEventziControl.hs_CMsgWakeup);
                        }
                    };
                    var hs_sat26DRG3 = new $hs.Thunk();
                    hs_sat26DRG3.evaluateOnce = function () {
                        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_p26DRB8);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DRG3, hs_sat26DRG2);
                };
                var hs_sat26DRGb = new $hs.Thunk();
                hs_sat26DRGb.evaluateOnce = function () {
                    var hs_sat26DRG8 = new $hs.Thunk();
                    hs_sat26DRG8.evaluateOnce = function () {
                        var hs_sat26DRG6 = new $hs.Thunk();
                        hs_sat26DRG6.evaluateOnce = function () {
                            var hs_sat26DRG5 = new $hs.Thunk();
                            hs_sat26DRG5.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_sat26DRG5);
                        };
                        var hs_sat26DRG7 = new $hs.Thunk();
                        hs_sat26DRG7.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralFd, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_fd26DRAU);
                        };
                        return $hs.modules.SystemziPosixziInternals.hs_czuread.hscall(hs_sat26DRG7, hs_p26DRB8, hs_sat26DRG6);
                    };
                    var hs_sat26DRGa = new $hs.Thunk();
                    hs_sat26DRGa.evaluateOnce = function () {
                        var hs_sat26DRG9 = new $hs.Thunk();
                        hs_sat26DRG9.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("readControlMessage\x00");
                        };
                        return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1zu.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCSsizze, hs_sat26DRG9);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DRGa, hs_sat26DRG8);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DRGb, hs_sat26DRG4);
            };
            var hs_sat26DRGd = new $hs.Thunk();
            hs_sat26DRGd.evaluateOnce = function () {
                return $hs.modules.ForeignziMarshalziAlloc.hs_alloca.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DRGd, hs_sat26DRGc);
        case 2:
            var hs_sat26DRGl = new $hs.Func(1);
            hs_sat26DRGl.evaluate = function (hs_p26DRBZ) {
                var hs_sat26DRGe = new $hs.Thunk();
                hs_sat26DRGe.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.SystemziEventziControl.hs_CMsgWakeup);
                };
                var hs_sat26DRGk = new $hs.Thunk();
                hs_sat26DRGk.evaluateOnce = function () {
                    var hs_sat26DRGh = new $hs.Thunk();
                    hs_sat26DRGh.evaluateOnce = function () {
                        var hs_sat26DRGf = new $hs.Thunk();
                        hs_sat26DRGf.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_wakeupBufferSizze26DRAT);
                        };
                        var hs_sat26DRGg = new $hs.Thunk();
                        hs_sat26DRGg.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralFd, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_fd26DRAU);
                        };
                        return $hs.modules.SystemziPosixziInternals.hs_czuread.hscall(hs_sat26DRGg, hs_p26DRBZ, hs_sat26DRGf);
                    };
                    var hs_sat26DRGj = new $hs.Thunk();
                    hs_sat26DRGj.evaluateOnce = function () {
                        var hs_sat26DRGi = new $hs.Thunk();
                        hs_sat26DRGi.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("readWakeupMessage\x00");
                        };
                        return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1zu.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCSsizze, hs_sat26DRGi);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DRGj, hs_sat26DRGh);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DRGk, hs_sat26DRGe);
            };
            var hs_sat26DRGm = new $hs.Thunk();
            hs_sat26DRGm.evaluateOnce = function () {
                return $hs.modules.ForeignziMarshalziAlloc.hs_allocaBytes.hscall(hs_wakeupBufferSizze26DRAT);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DRGm, hs_sat26DRGl);
        }
    };
    this.hs_sendDie.evaluate = function (hs_c26DRC9) {
        var hs_sat26DRGz = new $hs.Thunk();
        hs_sat26DRGz.evaluateOnce = function () {
            var hs_fd26DRCf = new $hs.Thunk();
            hs_fd26DRCf.evaluateOnce = function () {
                var hs_wild26DRGo = hs_c26DRC9;
                if (hs_c26DRC9.notEvaluated) {
                    hs_wild26DRGo = hs_c26DRC9.hscall();
                }
                var hs_rb126DRCe = hs_wild26DRGo.data[1];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb126DRCe];
                return $res;
            };
            var hs_sat26DRGx = new $hs.Func(1);
            hs_sat26DRGx.evaluate = function (hs_p26DRCi) {
                var hs_sat26DRGv = new $hs.Thunk();
                hs_sat26DRGv.evaluateOnce = function () {
                    var hs_sat26DRGt = new $hs.Thunk();
                    hs_sat26DRGt.evaluateOnce = function () {
                        var hs_sat26DRGr = new $hs.Thunk();
                        hs_sat26DRGr.evaluateOnce = function () {
                            var hs_sat26DRGq = new $hs.Thunk();
                            hs_sat26DRGq.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_sat26DRGq);
                        };
                        var hs_sat26DRGs = new $hs.Thunk();
                        hs_sat26DRGs.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralFd, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_fd26DRCf);
                        };
                        return $hs.modules.SystemziPosixziInternals.hs_czuwrite.hscall(hs_sat26DRGs, hs_p26DRCi, hs_sat26DRGr);
                    };
                    var hs_sat26DRGu = new $hs.Thunk();
                    hs_sat26DRGu.evaluateOnce = function () {
                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralCSsizze, $hs.modules.GHCziNum.hs_zdfNumInt);
                    };
                    return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.GHCziBase.hs_zdfFunctorIO, hs_sat26DRGu, hs_sat26DRGt);
                };
                var hs_sat26DRGw = new $hs.Thunk();
                hs_sat26DRGw.evaluateOnce = function () {
                    return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_p26DRCi, hs_iozuMANAGERzuDIE25un1r);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DRGw, hs_sat26DRGv);
            };
            var hs_sat26DRGy = new $hs.Thunk();
            hs_sat26DRGy.evaluateOnce = function () {
                return $hs.modules.ForeignziMarshalziAlloc.hs_alloca.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DRGy, hs_sat26DRGx);
        };
        var hs_sat26DRGB = new $hs.Thunk();
        hs_sat26DRGB.evaluateOnce = function () {
            var hs_sat26DRGA = new $hs.Thunk();
            hs_sat26DRGA.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("sendDie\x00");
            };
            return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1zu.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DRGA);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DRGB, hs_sat26DRGz);
    };
    this.hs_sendWakeup.evaluate = function (hs_c26DRCB) {
        var hs_sat26DRGR = new $hs.Func(1);
        hs_sat26DRGR.evaluate = function (hs_p26DRCv) {
            var hs_sat26DRGN = new $hs.Thunk();
            hs_sat26DRGN.evaluateOnce = function () {
                var hs_sat26DRGK = new $hs.Thunk();
                hs_sat26DRGK.evaluateOnce = function () {
                    var hs_sat26DRGD = new $hs.Thunk();
                    hs_sat26DRGD.evaluateOnce = function () {
                        var hs_sat26DRGC = new $hs.Thunk();
                        hs_sat26DRGC.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(8);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_sat26DRGC);
                    };
                    var hs_sat26DRGG = new $hs.Thunk();
                    hs_sat26DRGG.evaluateOnce = function () {
                        return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_p26DRCv);
                    };
                    var hs_sat26DRGJ = new $hs.Thunk();
                    hs_sat26DRGJ.evaluateOnce = function () {
                        var hs_sat26DRGI = new $hs.Thunk();
                        hs_sat26DRGI.evaluateOnce = function () {
                            var hs_wild26DRGF = hs_c26DRCB;
                            if (hs_c26DRCB.notEvaluated) {
                                hs_wild26DRGF = hs_c26DRCB.hscall();
                            }
                            var hs_rb226DRCG = hs_wild26DRGF.data[2];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb226DRCG];
                            return $res;
                        };
                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralFd, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DRGI);
                    };
                    return $hs.modules.SystemziPosixziInternals.hs_czuwrite.hscall(hs_sat26DRGJ, hs_sat26DRGG, hs_sat26DRGD);
                };
                var hs_sat26DRGM = new $hs.Thunk();
                hs_sat26DRGM.evaluateOnce = function () {
                    var hs_sat26DRGL = new $hs.Thunk();
                    hs_sat26DRGL.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("sendWakeup\x00");
                    };
                    return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1zu.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCSsizze, hs_sat26DRGL);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DRGM, hs_sat26DRGK);
            };
            var hs_sat26DRGQ = new $hs.Thunk();
            hs_sat26DRGQ.evaluateOnce = function () {
                var hs_sat26DRGP = new $hs.Thunk();
                hs_sat26DRGP.evaluateOnce = function () {
                    var hs_sat26DRGO = new $hs.Thunk();
                    hs_sat26DRGO.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26DRGO);
                };
                return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64, hs_p26DRCv, hs_sat26DRGP);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DRGQ, hs_sat26DRGN);
        };
        var hs_sat26DRGS = new $hs.Thunk();
        hs_sat26DRGS.evaluateOnce = function () {
            return $hs.modules.ForeignziMarshalziAlloc.hs_alloca.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DRGS, hs_sat26DRGR);
    };
    this.hs_W.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_CMsgWakeup.data = [];
    this.hs_CMsgDie.data = [];
    this.hs_CMsgSignal.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(3);
        $res.data = [hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
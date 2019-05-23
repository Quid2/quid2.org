
$hs.modules.GHCziEventziControl = new $hs.Module();
$hs.modules.GHCziEventziControl.dependencies = ["GHC.Prim", "GHC.Types", "GHC.CString", "GHC.Unit", "GHC.Integer", "Control.Monad", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.Show", "GHC.Err", "GHC.Classes", "GHC.ForeignPtr", "GHC.Ptr", "GHC.Word", "Foreign.C.Error", "Foreign.C.Types", "Foreign.Marshal.Alloc", "Foreign.Marshal.Array", "Foreign.Storable", "System.Posix.Internals", "System.Posix.Types", "Foreign.ForeignPtr.Imp"];
$hs.modules.GHCziEventziControl.initBeforeDependencies = function () {
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
    this.hs_CMsgSignal = new $hs.Func(2);
    this.hs_zdWW.notEvaluated = true;
    this.hs_zdWW.evaluate = function (hs_tpl26DssU, hs_tpl26DssW, hs_tpl26DssY) {
        $hs.modules.GHCziEventziControl.loadDependencies();
        return this.evaluate(hs_tpl26DssU, hs_tpl26DssW, hs_tpl26DssY);
    };
    this.hs_zdWCMsgSignal.notEvaluated = true;
    this.hs_zdWCMsgSignal.evaluate = function (hs_tpl26Dst5, hs_tpl26Dst7) {
        $hs.modules.GHCziEventziControl.loadDependencies();
        return this.evaluate(hs_tpl26Dst5, hs_tpl26Dst7);
    };
    this.hs_wakeupReadFd.notEvaluated = true;
    this.hs_wakeupReadFd.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziEventziControl.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_controlReadFd.notEvaluated = true;
    this.hs_controlReadFd.evaluate = function (hs_ds26Dstq) {
        $hs.modules.GHCziEventziControl.loadDependencies();
        return this.evaluate(hs_ds26Dstq);
    };
    this.hs_zdfShowControl.notEvaluated = true;
    this.hs_zdfShowControl.evaluate = function () {
        $hs.modules.GHCziEventziControl.loadDependencies();
        return this;
    };
    this.hs_zdfShowControlMessage.notEvaluated = true;
    this.hs_zdfShowControlMessage.evaluate = function () {
        $hs.modules.GHCziEventziControl.loadDependencies();
        return this;
    };
    this.hs_zdfEqControlMessage.notEvaluated = true;
    this.hs_zdfEqControlMessage.evaluate = function () {
        $hs.modules.GHCziEventziControl.loadDependencies();
        return this;
    };
    this.hs_newControl.evaluateOnce = function () {
        $hs.modules.GHCziEventziControl.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_closeControl.notEvaluated = true;
    this.hs_closeControl.evaluate = function (hs_w26Dsxa) {
        $hs.modules.GHCziEventziControl.loadDependencies();
        return this.evaluate(hs_w26Dsxa);
    };
    this.hs_readControlMessage.notEvaluated = true;
    this.hs_readControlMessage.evaluate = function (hs_ctrl26DsxA, hs_fd26Dsxz) {
        $hs.modules.GHCziEventziControl.loadDependencies();
        return this.evaluate(hs_ctrl26DsxA, hs_fd26Dsxz);
    };
    this.hs_sendDie.notEvaluated = true;
    this.hs_sendDie.evaluate = function (hs_c26DsyK) {
        $hs.modules.GHCziEventziControl.loadDependencies();
        return this.evaluate(hs_c26DsyK);
    };
    this.hs_sendWakeup.notEvaluated = true;
    this.hs_sendWakeup.evaluate = function (hs_c26Dszc) {
        $hs.modules.GHCziEventziControl.loadDependencies();
        return this.evaluate(hs_c26Dszc);
    };
    this.hs_W.notEvaluated = true;
    this.hs_W.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziEventziControl.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_CMsgWakeup.notEvaluated = true;
    this.hs_CMsgWakeup.evaluate = function () {
        $hs.modules.GHCziEventziControl.loadDependencies();
        return this;
    };
    this.hs_CMsgDie.notEvaluated = true;
    this.hs_CMsgDie.evaluate = function () {
        $hs.modules.GHCziEventziControl.loadDependencies();
        return this;
    };
    this.hs_CMsgSignal.notEvaluated = true;
    this.hs_CMsgSignal.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziEventziControl.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
};
$hs.modules.GHCziEventziControl.initAfterDependencies = function () {
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
    var hs_controlEventFd25u1m8 = new $hs.Func(1);
    var hs_controlWriteFd25u1m7 = new $hs.Func(1);
    var hs_sizzeofzusiginfozut25u1mg = new $hs.Thunk();
    var hs_zdcshowsPrec25v3Xm = new $hs.Func(2);
    var hs_sat26DsA9 = new $hs.Thunk();
    var hs_zdcshowList25v3Y4 = new $hs.Thunk();
    var hs_zdcshow25v3Y5 = new $hs.Thunk();
    var hs_zdcshowsPrec125v3Y8 = new $hs.Func(2);
    var hs_sat26DsAp = new $hs.Thunk();
    var hs_zdcshowList125v3Yv = new $hs.Thunk();
    var hs_zdcshow125v3Yw = new $hs.Thunk();
    var hs_zdczeze25v3Yz = new $hs.Func(2);
    var hs_zdczsze25v3Z6 = new $hs.Func(2);
    var hs_sat26DsBw = new $hs.Func(1);
    var hs_sat26DsBy = new $hs.Thunk();
    var hs_sat26DsBO = new $hs.Thunk();
    var hs_iozuMANAGERzuWAKEUP25u1ml = new $hs.Thunk();
    var hs_sat26DsBP = new $hs.Thunk();
    var hs_iozuMANAGERzuDIE25u1mm = new $hs.Thunk();
    this.hs_zdWW.evaluate = function (hs_tpl26DssU, hs_tpl26DssW, hs_tpl26DssY) {
        var hs_tpl26Dst0 = hs_tpl26DssU;
        if (hs_tpl26DssU.notEvaluated) {
            hs_tpl26Dst0 = hs_tpl26DssU.hscall();
        }
        var hs_tpl26Dst1 = hs_tpl26DssW;
        if (hs_tpl26DssW.notEvaluated) {
            hs_tpl26Dst1 = hs_tpl26DssW.hscall();
        }
        var hs_tpl26Dst2 = hs_tpl26DssY;
        if (hs_tpl26DssY.notEvaluated) {
            hs_tpl26Dst2 = hs_tpl26DssY.hscall();
        }
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26Dst0, hs_tpl26Dst1, hs_tpl26Dst2];
        return $res;
    };
    this.hs_zdWCMsgSignal.evaluate = function (hs_tpl26Dst5, hs_tpl26Dst7) {
        var hs_tpl26Dst9 = hs_tpl26Dst5;
        if (hs_tpl26Dst5.notEvaluated) {
            hs_tpl26Dst9 = hs_tpl26Dst5.hscall();
        }
        var hs_tpl26Dsta = hs_tpl26Dst7;
        if (hs_tpl26Dst7.notEvaluated) {
            hs_tpl26Dsta = hs_tpl26Dst7.hscall();
        }
        var $res = new $hs.Data(3);
        $res.data = [hs_tpl26Dst9, hs_tpl26Dsta];
        return $res;
    };
    hs_controlEventFd25u1m8.evaluate = function (hs_ds26Dstc) {
        var hs_wild26Dszs = hs_ds26Dstc;
        if (hs_ds26Dstc.notEvaluated) {
            hs_wild26Dszs = hs_ds26Dstc.hscall();
        }
        var hs_ds326Dsth = hs_wild26Dszs.data[2];
        if (hs_ds326Dsth.notEvaluated) {
            return hs_ds326Dsth.hscall();
        } else {
            return hs_ds326Dsth;
        }
    };
    this.hs_wakeupReadFd.evaluate = function (hs_eta1cW6l3) {
        return hs_controlEventFd25u1m8.hscall(hs_eta1cW6l3);
    };
    hs_controlWriteFd25u1m7.evaluate = function (hs_ds26Dstj) {
        var hs_wild26Dszv = hs_ds26Dstj;
        if (hs_ds26Dstj.notEvaluated) {
            hs_wild26Dszv = hs_ds26Dstj.hscall();
        }
        var hs_ds226Dsto = hs_wild26Dszv.data[1];
        if (hs_ds226Dsto.notEvaluated) {
            return hs_ds226Dsto.hscall();
        } else {
            return hs_ds226Dsto;
        }
    };
    this.hs_controlReadFd.evaluate = function (hs_ds26Dstq) {
        var hs_wild26Dszy = hs_ds26Dstq;
        if (hs_ds26Dstq.notEvaluated) {
            hs_wild26Dszy = hs_ds26Dstq.hscall();
        }
        var hs_ds126Dstv = hs_wild26Dszy.data[0];
        if (hs_ds126Dstv.notEvaluated) {
            return hs_ds126Dstv.hscall();
        } else {
            return hs_ds126Dstv;
        }
    };
    hs_sizzeofzusiginfozut25u1mg.evaluateOnce = function () {
        var hs_wild26DszA = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_si=of_siginfo_t()];
        var hs_ds126DstB = hs_wild26DszA[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126DstB];
        return $res;
    };
    hs_zdcshowsPrec25v3Xm.evaluate = function (hs_a26DstK, hs_ds26DstF) {
        var hs_wild26DszC = hs_ds26DstF;
        if (hs_ds26DstF.notEvaluated) {
            hs_wild26DszC = hs_ds26DstF.hscall();
        }
        var hs_b126DstS = hs_wild26DszC.data[0];
        var hs_b226DstZ = hs_wild26DszC.data[1];
        var hs_b326Dsu6 = hs_wild26DszC.data[2];
        var hs_sat26DszD = new $hs.Thunk();
        hs_sat26DszD.evaluateOnce = function () {
            var hs_sat26DszG = new $hs.Thunk();
            hs_sat26DszG.evaluateOnce = function () {
                var hs_sat26DszJ = new $hs.Thunk();
                hs_sat26DszJ.evaluateOnce = function () {
                    var hs_sat26DszM = new $hs.Thunk();
                    hs_sat26DszM.evaluateOnce = function () {
                        var hs_sat26DszP = new $hs.Thunk();
                        hs_sat26DszP.evaluateOnce = function () {
                            var hs_sat26DszS = new $hs.Thunk();
                            hs_sat26DszS.evaluateOnce = function () {
                                var hs_sat26DszV = new $hs.Thunk();
                                hs_sat26DszV.evaluateOnce = function () {
                                    var hs_sat26DszY = new $hs.Thunk();
                                    hs_sat26DszY.evaluateOnce = function () {
                                        var hs_sat26DsA1 = new $hs.Thunk();
                                        hs_sat26DsA1.evaluateOnce = function () {
                                            var hs_sat26DsA4 = new $hs.Thunk();
                                            hs_sat26DsA4.evaluateOnce = function () {
                                                var hs_sat26DsA7 = new $hs.Data(1);
                                                hs_sat26DsA7.data = ["}"];
                                                var hs_sat26DsA6 = new $hs.Data(2);
                                                hs_sat26DsA6.data = [hs_sat26DsA7, $hs.modules.GHCziTypes.hs_ZMZN];
                                                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DsA6);
                                            };
                                            var hs_sat26DsA3 = new $hs.Thunk();
                                            hs_sat26DsA3.evaluateOnce = function () {
                                                var hs_sat26DsA5 = new $hs.Data(1);
                                                hs_sat26DsA5.data = [0];
                                                return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfShowFd, hs_sat26DsA5, hs_b326Dsu6);
                                            };
                                            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DsA3, hs_sat26DsA4);
                                        };
                                        var hs_sat26DsA0 = new $hs.Thunk();
                                        hs_sat26DsA0.evaluateOnce = function () {
                                            var hs_sat26DsA2 = new $hs.Thunk();
                                            hs_sat26DsA2.evaluateOnce = function () {
                                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("controlEventFd = \x00");
                                            };
                                            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DsA2);
                                        };
                                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DsA0, hs_sat26DsA1);
                                    };
                                    var hs_sat26DszX = new $hs.Thunk();
                                    hs_sat26DszX.evaluateOnce = function () {
                                        var hs_sat26DszZ = new $hs.Thunk();
                                        hs_sat26DszZ.evaluateOnce = function () {
                                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall(", \x00");
                                        };
                                        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DszZ);
                                    };
                                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DszX, hs_sat26DszY);
                                };
                                var hs_sat26DszU = new $hs.Thunk();
                                hs_sat26DszU.evaluateOnce = function () {
                                    var hs_sat26DszW = new $hs.Data(1);
                                    hs_sat26DszW.data = [0];
                                    return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfShowFd, hs_sat26DszW, hs_b226DstZ);
                                };
                                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DszU, hs_sat26DszV);
                            };
                            var hs_sat26DszR = new $hs.Thunk();
                            hs_sat26DszR.evaluateOnce = function () {
                                var hs_sat26DszT = new $hs.Thunk();
                                hs_sat26DszT.evaluateOnce = function () {
                                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("controlWriteFd = \x00");
                                };
                                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DszT);
                            };
                            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DszR, hs_sat26DszS);
                        };
                        var hs_sat26DszO = new $hs.Thunk();
                        hs_sat26DszO.evaluateOnce = function () {
                            var hs_sat26DszQ = new $hs.Thunk();
                            hs_sat26DszQ.evaluateOnce = function () {
                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall(", \x00");
                            };
                            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DszQ);
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DszO, hs_sat26DszP);
                    };
                    var hs_sat26DszL = new $hs.Thunk();
                    hs_sat26DszL.evaluateOnce = function () {
                        var hs_sat26DszN = new $hs.Data(1);
                        hs_sat26DszN.data = [0];
                        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfShowFd, hs_sat26DszN, hs_b126DstS);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DszL, hs_sat26DszM);
                };
                var hs_sat26DszI = new $hs.Thunk();
                hs_sat26DszI.evaluateOnce = function () {
                    var hs_sat26DszK = new $hs.Thunk();
                    hs_sat26DszK.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("controlReadFd = \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DszK);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DszI, hs_sat26DszJ);
            };
            var hs_sat26DszF = new $hs.Thunk();
            hs_sat26DszF.evaluateOnce = function () {
                var hs_sat26DszH = new $hs.Thunk();
                hs_sat26DszH.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("W {\x00");
                };
                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DszH);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DszF, hs_sat26DszG);
        };
        var hs_sat26DszB = new $hs.Thunk();
        hs_sat26DszB.evaluateOnce = function () {
            var hs_sat26DszE = new $hs.Data(1);
            hs_sat26DszE.data = [11];
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_a26DstK, hs_sat26DszE);
        };
        return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DszB, hs_sat26DszD);
    };
    hs_sat26DsA9.evaluateOnce = function () {
        var hs_sat26DsA8 = new $hs.Data(1);
        hs_sat26DsA8.data = [0];
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziEventziControl.hs_zdfShowControl, hs_sat26DsA8);
    };
    this.hs_zdfShowControl.data = [hs_zdcshowsPrec25v3Xm, hs_zdcshow25v3Y5, hs_zdcshowList25v3Y4];
    hs_zdcshowList25v3Y4.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DsA9);
    };
    hs_zdcshow25v3Y5.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziEventziControl.hs_zdfShowControl);
    };
    hs_zdcshowsPrec125v3Y8.evaluate = function (hs_ds26Dsux, hs_ds126Dsur) {
        var hs_wild26DsAb = hs_ds126Dsur;
        if (hs_ds126Dsur.notEvaluated) {
            hs_wild26DsAb = hs_ds126Dsur.hscall();
        }
        switch (hs_wild26DsAb.tag) {
        case 1:
            var hs_sat26DsAn = new $hs.Thunk();
            hs_sat26DsAn.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CMsgWakeup\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DsAn);
        case 2:
            var hs_sat26DsAa = new $hs.Thunk();
            hs_sat26DsAa.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CMsgDie\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DsAa);
        case 3:
            var hs_b126DsuD = hs_wild26DsAb.data[0];
            var hs_b226DsuG = hs_wild26DsAb.data[1];
            var hs_sat26DsAd = new $hs.Thunk();
            hs_sat26DsAd.evaluateOnce = function () {
                var hs_sat26DsAg = new $hs.Thunk();
                hs_sat26DsAg.evaluateOnce = function () {
                    var hs_sat26DsAj = new $hs.Thunk();
                    hs_sat26DsAj.evaluateOnce = function () {
                        var hs_sat26DsAl = new $hs.Thunk();
                        hs_sat26DsAl.evaluateOnce = function () {
                            var hs_sat26DsAm = new $hs.Data(1);
                            hs_sat26DsAm.data = [11];
                            return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfShowCInt, hs_sat26DsAm, hs_b226DsuG);
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.GHCziShow.hs_showSpace, hs_sat26DsAl);
                    };
                    var hs_sat26DsAi = new $hs.Thunk();
                    hs_sat26DsAi.evaluateOnce = function () {
                        var hs_sat26DsAk = new $hs.Data(1);
                        hs_sat26DsAk.data = [11];
                        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziForeignPtr.hs_zdfShowForeignPtr, hs_sat26DsAk, hs_b126DsuD);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DsAi, hs_sat26DsAj);
                };
                var hs_sat26DsAf = new $hs.Thunk();
                hs_sat26DsAf.evaluateOnce = function () {
                    var hs_sat26DsAh = new $hs.Thunk();
                    hs_sat26DsAh.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CMsgSignal \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DsAh);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DsAf, hs_sat26DsAg);
            };
            var hs_sat26DsAc = new $hs.Thunk();
            hs_sat26DsAc.evaluateOnce = function () {
                var hs_sat26DsAe = new $hs.Data(1);
                hs_sat26DsAe.data = [11];
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_ds26Dsux, hs_sat26DsAe);
            };
            return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DsAc, hs_sat26DsAd);
        }
    };
    hs_sat26DsAp.evaluateOnce = function () {
        var hs_sat26DsAo = new $hs.Data(1);
        hs_sat26DsAo.data = [0];
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziEventziControl.hs_zdfShowControlMessage, hs_sat26DsAo);
    };
    this.hs_zdfShowControlMessage.data = [hs_zdcshowsPrec125v3Y8, hs_zdcshow125v3Yw, hs_zdcshowList125v3Yv];
    hs_zdcshowList125v3Yv.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DsAp);
    };
    hs_zdcshow125v3Yw.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziEventziControl.hs_zdfShowControlMessage);
    };
    hs_zdczeze25v3Yz.evaluate = function (hs_ds26DsuU, hs_ds126DsuW) {
        var hs_fail26Dsv9 = new $hs.Func(1);
        hs_fail26Dsv9.evaluate = function (hs_ds226Dsv8) {
            var hs_wild26DsAv = hs_ds26DsuU;
            if (hs_ds26DsuU.notEvaluated) {
                hs_wild26DsAv = hs_ds26DsuU.hscall();
            }
            switch (hs_wild26DsAv.tag) {
            case 1:
                var hs_wild126DsAD = hs_ds126DsuW;
                if (hs_ds126DsuW.notEvaluated) {
                    hs_wild126DsAD = hs_ds126DsuW.hscall();
                }
                switch (hs_wild126DsAD.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 3:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            case 2:
                var hs_wild126DsAu = hs_ds126DsuW;
                if (hs_ds126DsuW.notEvaluated) {
                    hs_wild126DsAu = hs_ds126DsuW.hscall();
                }
                switch (hs_wild126DsAu.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 3:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var hs_wild126DsAA = hs_ds126DsuW;
                if (hs_ds126DsuW.notEvaluated) {
                    hs_wild126DsAA = hs_ds126DsuW.hscall();
                }
                switch (hs_wild126DsAA.tag) {
                case 3:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                default:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            }
        };
        var hs_wild26DsAs = hs_ds26DsuU;
        if (hs_ds26DsuU.notEvaluated) {
            hs_wild26DsAs = hs_ds26DsuU.hscall();
        }
        switch (hs_wild26DsAs.tag) {
        case 3:
            var hs_a126Dsvg = hs_wild26DsAs.data[0];
            var hs_a226Dsvj = hs_wild26DsAs.data[1];
            var hs_wild126DsAr = hs_ds126DsuW;
            if (hs_ds126DsuW.notEvaluated) {
                hs_wild126DsAr = hs_ds126DsuW.hscall();
            }
            switch (hs_wild126DsAr.tag) {
            case 3:
                var hs_b126Dsvh = hs_wild126DsAr.data[0];
                var hs_b226Dsvk = hs_wild126DsAr.data[1];
                var hs_sat26DsAt = new $hs.Thunk();
                hs_sat26DsAt.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_a226Dsvj, hs_b226Dsvk);
                };
                var hs_sat26DsAq = new $hs.Thunk();
                hs_sat26DsAq.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziForeignPtr.hs_zdfEqForeignPtr, hs_a126Dsvg, hs_b126Dsvh);
                };
                return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DsAq, hs_sat26DsAt);
            default:
                return hs_fail26Dsv9.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            }
        default:
            return hs_fail26Dsv9.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
        }
    };
    this.hs_zdfEqControlMessage.data = [hs_zdczeze25v3Yz, hs_zdczsze25v3Z6];
    hs_zdczsze25v3Z6.evaluate = function (hs_a26Dsvp, hs_b26Dsvq) {
        var hs_sat26DsAG = new $hs.Thunk();
        hs_sat26DsAG.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziEventziControl.hs_zdfEqControlMessage, hs_a26Dsvp, hs_b26Dsvq);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DsAG);
    };
    hs_sat26DsBw.evaluate = function (hs_fds26Dsvx) {
        var hs_sat26DsAI = new $hs.Func(1);
        hs_sat26DsAI.evaluate = function (hs_ds26DsvU) {
            var hs_wild26DsB2 = hs_ds26DsvU;
            if (hs_ds26DsvU.notEvaluated) {
                hs_wild26DsB2 = hs_ds26DsvU.hscall();
            }
            var hs_ctrlzurd26DswO = hs_wild26DsB2.data[0];
            var hs_ctrlzuwr26DsvY = hs_wild26DsB2.data[1];
            var hs_sat26DsB3 = new $hs.Thunk();
            hs_sat26DsB3.evaluateOnce = function () {
                var hs_sat26DsB8 = new $hs.Func(1);
                hs_sat26DsB8.evaluate = function (hs_ev26Dswz) {
                    var hs_sat26DsBk = new $hs.Thunk();
                    hs_sat26DsBk.evaluateOnce = function () {
                        var hs_sat26DsBm = new $hs.Thunk();
                        hs_sat26DsBm.evaluateOnce = function () {
                            var hs_sat26DsBo = new $hs.Thunk();
                            hs_sat26DsBo.evaluateOnce = function () {
                                var hs_sat26DsBs = new $hs.Thunk();
                                hs_sat26DsBs.evaluateOnce = function () {
                                    var hs_nt26DswV = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.SystemziPosixziTypes.hs_zdfNumFd, hs_ctrlzurd26DswO);
                                    var hs_nt126DswW = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.SystemziPosixziTypes.hs_zdfNumFd, hs_ctrlzuwr26DsvY);
                                    var hs_nt226DswX = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.SystemziPosixziTypes.hs_zdfNumFd, hs_ev26Dswz);
                                    var $res = new $hs.Data(1);
                                    $res.data = [hs_nt26DswV, hs_nt126DswW, hs_nt226DswX];
                                    return $res;
                                };
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DsBs);
                            };
                            var hs_sat26DsBn = new $hs.Thunk();
                            hs_sat26DsBn.evaluateOnce = function () {
                                var hs_ds126DsBq = hs_ev26Dswz;
                                if (hs_ev26Dswz.notEvaluated) {
                                    hs_ds126DsBq = hs_ev26Dswz.hscall();
                                }
                                var hs_ds226DswG = hs_ds126DsBq.data[0];
                                var hs_sat26DsBp = new $hs.Func(1);
                                hs_sat26DsBp.evaluate = function (hs_ds326DswH) {
                                    var hs_wild126DsBr = [hs_ds326DswH, setIOManagerWakeupFd(hs_ds226DswG)];
                                    var hs_ds426DswL = hs_wild126DsBr[0];
                                    return [hs_ds426DswL, $hs.modules.GHCziUnit.hs_Z0T];
                                };
                                if (hs_sat26DsBp.notEvaluated) {
                                    return hs_sat26DsBp.hscall();
                                } else {
                                    return hs_sat26DsBp;
                                }
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DsBn, hs_sat26DsBo);
                        };
                        var hs_sat26DsBl = new $hs.Thunk();
                        hs_sat26DsBl.evaluateOnce = function () {
                            return $hs.modules.SystemziPosixziInternals.hs_setCloseOnExec.hscall(hs_ev26Dswz);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DsBl, hs_sat26DsBm);
                    };
                    var hs_sat26DsBj = new $hs.Thunk();
                    hs_sat26DsBj.evaluateOnce = function () {
                        return $hs.modules.SystemziPosixziInternals.hs_setNonBlockingFD.hscall(hs_ev26Dswz, $hs.modules.GHCziTypes.hs_True);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DsBj, hs_sat26DsBk);
                };
                var hs_sat26DsB7 = new $hs.Thunk();
                hs_sat26DsB7.evaluateOnce = function () {
                    var hs_sat26DsBa = new $hs.Thunk();
                    hs_sat26DsBa.evaluateOnce = function () {
                        var hs_sat26DsBd = new $hs.Thunk();
                        hs_sat26DsBd.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        var hs_ds126DsBe = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DsBd);
                        var hs_ds226Dswl = hs_ds126DsBe.data[0];
                        var hs_sat26DsBf = new $hs.Thunk();
                        hs_sat26DsBf.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        var hs_ds326DsBg = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DsBf);
                        var hs_ds426Dswm = hs_ds326DsBg.data[0];
                        var hs_sat26DsBc = new $hs.Func(1);
                        hs_sat26DsBc.evaluate = function (hs_ds526Dswn) {
                            var hs_wild126DsBi = [hs_ds526Dswn, eventfd(hs_ds226Dswl, hs_ds426Dswm)];
                            var hs_ds626Dsws = hs_wild126DsBi[0];
                            var hs_ds726Dswt = hs_wild126DsBi[1];
                            var hs_sat26DsBh = new $hs.Data(1);
                            hs_sat26DsBh.data = [hs_ds726Dswt];
                            return [hs_ds626Dsws, hs_sat26DsBh];
                        };
                        if (hs_sat26DsBc.notEvaluated) {
                            return hs_sat26DsBc.hscall();
                        } else {
                            return hs_sat26DsBc;
                        }
                    };
                    var hs_sat26DsB9 = new $hs.Thunk();
                    hs_sat26DsB9.evaluateOnce = function () {
                        var hs_sat26DsBb = new $hs.Thunk();
                        hs_sat26DsBb.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("eventfd\x00");
                        };
                        return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DsBb);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DsB9, hs_sat26DsBa);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DsB7, hs_sat26DsB8);
            };
            var hs_sat26DsB1 = new $hs.Thunk();
            hs_sat26DsB1.evaluateOnce = function () {
                var hs_ds126DsB5 = hs_ctrlzuwr26DsvY;
                if (hs_ctrlzuwr26DsvY.notEvaluated) {
                    hs_ds126DsB5 = hs_ctrlzuwr26DsvY.hscall();
                }
                var hs_ds226Dsw3 = hs_ds126DsB5.data[0];
                var hs_sat26DsB4 = new $hs.Func(1);
                hs_sat26DsB4.evaluate = function (hs_ds326Dsw4) {
                    var hs_wild126DsB6 = [hs_ds326Dsw4, setIOManagerControlFd(hs_ds226Dsw3)];
                    var hs_ds426Dsw8 = hs_wild126DsB6[0];
                    return [hs_ds426Dsw8, $hs.modules.GHCziUnit.hs_Z0T];
                };
                if (hs_sat26DsB4.notEvaluated) {
                    return hs_sat26DsB4.hscall();
                } else {
                    return hs_sat26DsB4;
                }
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DsB1, hs_sat26DsB3);
        };
        var hs_sat26DsAH = new $hs.Thunk();
        hs_sat26DsAH.evaluateOnce = function () {
            var hs_sat26DsAK = new $hs.Thunk();
            hs_sat26DsAK.evaluateOnce = function () {
                var hs_sat26DsAP = new $hs.Func(1);
                hs_sat26DsAP.evaluate = function (hs_rd26DsvI) {
                    var hs_sat26DsAS = new $hs.Func(1);
                    hs_sat26DsAS.evaluate = function (hs_wr26DsvG) {
                        var hs_sat26DsAV = new $hs.Thunk();
                        hs_sat26DsAV.evaluateOnce = function () {
                            var hs_sat26DsAX = new $hs.Thunk();
                            hs_sat26DsAX.evaluateOnce = function () {
                                var hs_sat26DsAZ = new $hs.Thunk();
                                hs_sat26DsAZ.evaluateOnce = function () {
                                    var hs_sat26DsB0 = new $hs.Data(1);
                                    hs_sat26DsB0.data = [hs_rd26DsvI, hs_wr26DsvG];
                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DsB0);
                                };
                                var hs_sat26DsAY = new $hs.Thunk();
                                hs_sat26DsAY.evaluateOnce = function () {
                                    return $hs.modules.SystemziPosixziInternals.hs_setCloseOnExec.hscall(hs_wr26DsvG);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DsAY, hs_sat26DsAZ);
                            };
                            var hs_sat26DsAW = new $hs.Thunk();
                            hs_sat26DsAW.evaluateOnce = function () {
                                return $hs.modules.SystemziPosixziInternals.hs_setCloseOnExec.hscall(hs_rd26DsvI);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DsAW, hs_sat26DsAX);
                        };
                        var hs_sat26DsAU = new $hs.Thunk();
                        hs_sat26DsAU.evaluateOnce = function () {
                            return $hs.modules.SystemziPosixziInternals.hs_setNonBlockingFD.hscall(hs_wr26DsvG, $hs.modules.GHCziTypes.hs_True);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DsAU, hs_sat26DsAV);
                    };
                    var hs_sat26DsAR = new $hs.Thunk();
                    hs_sat26DsAR.evaluateOnce = function () {
                        var hs_sat26DsAT = new $hs.Data(1);
                        hs_sat26DsAT.data = [1];
                        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCInt, hs_fds26Dsvx, hs_sat26DsAT);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DsAR, hs_sat26DsAS);
                };
                var hs_sat26DsAO = new $hs.Thunk();
                hs_sat26DsAO.evaluateOnce = function () {
                    var hs_sat26DsAQ = new $hs.Data(1);
                    hs_sat26DsAQ.data = [0];
                    return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCInt, hs_fds26Dsvx, hs_sat26DsAQ);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DsAO, hs_sat26DsAP);
            };
            var hs_sat26DsAJ = new $hs.Thunk();
            hs_sat26DsAJ.evaluateOnce = function () {
                var hs_sat26DsAM = new $hs.Thunk();
                hs_sat26DsAM.evaluateOnce = function () {
                    return $hs.modules.SystemziPosixziInternals.hs_czupipe.hscall(hs_fds26Dsvx);
                };
                var hs_sat26DsAL = new $hs.Thunk();
                hs_sat26DsAL.evaluateOnce = function () {
                    var hs_sat26DsAN = new $hs.Thunk();
                    hs_sat26DsAN.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("pipe\x00");
                    };
                    return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1zu.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DsAN);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DsAL, hs_sat26DsAM);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DsAJ, hs_sat26DsAK);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DsAH, hs_sat26DsAI);
    };
    hs_sat26DsBy.evaluateOnce = function () {
        var hs_sat26DsBx = new $hs.Data(1);
        hs_sat26DsBx.data = [2];
        return $hs.modules.ForeignziMarshalziArray.hs_allocaArray.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCInt, hs_sat26DsBx);
    };
    this.hs_newControl.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DsBy, hs_sat26DsBw);
    };
    this.hs_closeControl.evaluate = function (hs_w26Dsxa) {
        var hs_sat26DsBA = new $hs.Func(1);
        hs_sat26DsBA.evaluate = function (hs_ds26Dsxr) {
            var hs_sat26DsBF = new $hs.Func(1);
            hs_sat26DsBF.evaluate = function (hs_ds126Dsxp) {
                var hs_sat26DsBK = new $hs.Func(1);
                hs_sat26DsBK.evaluate = function (hs_ds226Dsxn) {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                };
                var hs_sat26DsBJ = new $hs.Thunk();
                hs_sat26DsBJ.evaluateOnce = function () {
                    var hs_sat26DsBL = new $hs.Thunk();
                    hs_sat26DsBL.evaluateOnce = function () {
                        var hs_sat26DsBM = new $hs.Thunk();
                        hs_sat26DsBM.evaluateOnce = function () {
                            var hs_sat26DsBN = new $hs.Thunk();
                            hs_sat26DsBN.evaluateOnce = function () {
                                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralFd, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt);
                            };
                            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DsBN, hs_controlEventFd25u1m8);
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.SystemziPosixziInternals.hs_czuclose, hs_sat26DsBM);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DsBL, hs_w26Dsxa);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DsBJ, hs_sat26DsBK);
            };
            var hs_sat26DsBE = new $hs.Thunk();
            hs_sat26DsBE.evaluateOnce = function () {
                var hs_sat26DsBG = new $hs.Thunk();
                hs_sat26DsBG.evaluateOnce = function () {
                    var hs_sat26DsBH = new $hs.Thunk();
                    hs_sat26DsBH.evaluateOnce = function () {
                        var hs_sat26DsBI = new $hs.Thunk();
                        hs_sat26DsBI.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralFd, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt);
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DsBI, hs_controlWriteFd25u1m7);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.SystemziPosixziInternals.hs_czuclose, hs_sat26DsBH);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DsBG, hs_w26Dsxa);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DsBE, hs_sat26DsBF);
        };
        var hs_sat26DsBz = new $hs.Thunk();
        hs_sat26DsBz.evaluateOnce = function () {
            var hs_sat26DsBB = new $hs.Thunk();
            hs_sat26DsBB.evaluateOnce = function () {
                var hs_sat26DsBC = new $hs.Thunk();
                hs_sat26DsBC.evaluateOnce = function () {
                    var hs_sat26DsBD = new $hs.Thunk();
                    hs_sat26DsBD.evaluateOnce = function () {
                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralFd, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DsBD, $hs.modules.GHCziEventziControl.hs_controlReadFd);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.SystemziPosixziInternals.hs_czuclose, hs_sat26DsBC);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DsBB, hs_w26Dsxa);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DsBz, hs_sat26DsBA);
    };
    hs_sat26DsBO.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(255);
    };
    hs_iozuMANAGERzuWAKEUP25u1ml.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26DsBO);
    };
    hs_sat26DsBP.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(254);
    };
    hs_iozuMANAGERzuDIE25u1mm.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26DsBP);
    };
    this.hs_readControlMessage.evaluate = function (hs_ctrl26DsxA, hs_fd26Dsxz) {
        var hs_wakeupBufferSizze26Dsxy = new $hs.Data(1);
        hs_wakeupBufferSizze26Dsxy.data = [8];
        var hs_sat26DsBR = new $hs.Thunk();
        hs_sat26DsBR.evaluateOnce = function () {
            var hs_wild26DsCC = hs_ctrl26DsxA;
            if (hs_ctrl26DsxA.notEvaluated) {
                hs_wild26DsCC = hs_ctrl26DsxA.hscall();
            }
            var hs_ds226DsxF = hs_wild26DsCC.data[2];
            if (hs_ds226DsxF.notEvaluated) {
                return hs_ds226DsxF.hscall();
            } else {
                return hs_ds226DsxF;
            }
        };
        var hs_wild26DsBS = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.SystemziPosixziTypes.hs_zdfEqFd, hs_fd26Dsxz, hs_sat26DsBR);
        switch (hs_wild26DsBS.tag) {
        case 1:
            var hs_sat26DsC2 = new $hs.Func(1);
            hs_sat26DsC2.evaluate = function (hs_p26DsxN) {
                var hs_sat26DsC4 = new $hs.Thunk();
                hs_sat26DsC4.evaluateOnce = function () {
                    var hs_sat26DsCc = new $hs.Func(1);
                    hs_sat26DsCc.evaluate = function (hs_s26DsxU) {
                        var hs_wild126DsCd = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_s26DsxU, hs_iozuMANAGERzuWAKEUP25u1ml);
                        switch (hs_wild126DsCd.tag) {
                        case 1:
                            var hs_wild226DsCe = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_s26DsxU, hs_iozuMANAGERzuDIE25u1mm);
                            switch (hs_wild226DsCe.tag) {
                            case 1:
                                var hs_sat26DsCg = new $hs.Func(1);
                                hs_sat26DsCg.evaluate = function (hs_fp26Dsy0) {
                                    var hs_sat26DsCj = new $hs.Func(1);
                                    hs_sat26DsCj.evaluate = function (hs_pzusiginfo26Dsy4) {
                                        var hs_sat26DsCl = new $hs.Func(1);
                                        hs_sat26DsCl.evaluate = function (hs_r26Dsy8) {
                                            var hs_sat26DsCp = new $hs.Thunk();
                                            hs_sat26DsCp.evaluateOnce = function () {
                                                var hs_nt26Dsym = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_s26DsxU);
                                                var hs_sat26DsCx = new $hs.Thunk();
                                                hs_sat26DsCx.evaluateOnce = function () {
                                                    var hs_tpl26Dsyl = hs_fp26Dsy0;
                                                    if (hs_fp26Dsy0.notEvaluated) {
                                                        hs_tpl26Dsyl = hs_fp26Dsy0.hscall();
                                                    }
                                                    var $res = new $hs.Data(3);
                                                    $res.data = [hs_tpl26Dsyl, hs_nt26Dsym];
                                                    return $res;
                                                };
                                                var hs_sat26DsCv = new $hs.Thunk();
                                                hs_sat26DsCv.evaluateOnce = function () {
                                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO);
                                                };
                                                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DsCv, hs_sat26DsCx);
                                            };
                                            var hs_sat26DsCo = new $hs.Thunk();
                                            hs_sat26DsCo.evaluateOnce = function () {
                                                var hs_sat26DsCr = new $hs.Thunk();
                                                hs_sat26DsCr.evaluateOnce = function () {
                                                    var hs_sat26DsCu = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("failed to read siginfo_t\x00");
                                                    return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DsCu);
                                                };
                                                var hs_sat26DsCq = new $hs.Thunk();
                                                hs_sat26DsCq.evaluateOnce = function () {
                                                    var hs_sat26DsCs = new $hs.Thunk();
                                                    hs_sat26DsCs.evaluateOnce = function () {
                                                        var hs_sat26DsCt = new $hs.Thunk();
                                                        hs_sat26DsCt.evaluateOnce = function () {
                                                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCSizze, $hs.modules.SystemziPosixziTypes.hs_zdfNumCSsizze, hs_sizzeofzusiginfozut25u1mg);
                                                        };
                                                        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.SystemziPosixziTypes.hs_zdfEqCSsizze, hs_r26Dsy8, hs_sat26DsCt);
                                                    };
                                                    return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DsCs);
                                                };
                                                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DsCq, hs_sat26DsCr);
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DsCo, hs_sat26DsCp);
                                        };
                                        var hs_sat26DsCk = new $hs.Thunk();
                                        hs_sat26DsCk.evaluateOnce = function () {
                                            var hs_sat26DsCn = new $hs.Thunk();
                                            hs_sat26DsCn.evaluateOnce = function () {
                                                return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_pzusiginfo26Dsy4);
                                            };
                                            var hs_sat26DsCm = new $hs.Thunk();
                                            hs_sat26DsCm.evaluateOnce = function () {
                                                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralFd, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_fd26Dsxz);
                                            };
                                            return $hs.modules.SystemziPosixziInternals.hs_czuread.hscall(hs_sat26DsCm, hs_sat26DsCn, hs_sizzeofzusiginfozut25u1mg);
                                        };
                                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DsCk, hs_sat26DsCl);
                                    };
                                    var hs_sat26DsCi = new $hs.Thunk();
                                    hs_sat26DsCi.evaluateOnce = function () {
                                        return $hs.modules.ForeignziForeignPtrziImp.hs_withForeignPtr.hscall(hs_fp26Dsy0);
                                    };
                                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DsCi, hs_sat26DsCj);
                                };
                                var hs_sat26DsCf = new $hs.Thunk();
                                hs_sat26DsCf.evaluateOnce = function () {
                                    var hs_sat26DsCh = new $hs.Thunk();
                                    hs_sat26DsCh.evaluateOnce = function () {
                                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCSizze, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sizzeofzusiginfozut25u1mg);
                                    };
                                    return $hs.modules.GHCziForeignPtr.hs_mallocForeignPtrBytes.hscall(hs_sat26DsCh);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DsCf, hs_sat26DsCg);
                            case 2:
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziEventziControl.hs_CMsgDie);
                            }
                        case 2:
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziEventziControl.hs_CMsgWakeup);
                        }
                    };
                    var hs_sat26DsCb = new $hs.Thunk();
                    hs_sat26DsCb.evaluateOnce = function () {
                        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_p26DsxN);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DsCb, hs_sat26DsCc);
                };
                var hs_sat26DsC3 = new $hs.Thunk();
                hs_sat26DsC3.evaluateOnce = function () {
                    var hs_sat26DsC6 = new $hs.Thunk();
                    hs_sat26DsC6.evaluateOnce = function () {
                        var hs_sat26DsC9 = new $hs.Thunk();
                        hs_sat26DsC9.evaluateOnce = function () {
                            var hs_sat26DsCa = new $hs.Thunk();
                            hs_sat26DsCa.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_sat26DsCa);
                        };
                        var hs_sat26DsC8 = new $hs.Thunk();
                        hs_sat26DsC8.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralFd, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_fd26Dsxz);
                        };
                        return $hs.modules.SystemziPosixziInternals.hs_czuread.hscall(hs_sat26DsC8, hs_p26DsxN, hs_sat26DsC9);
                    };
                    var hs_sat26DsC5 = new $hs.Thunk();
                    hs_sat26DsC5.evaluateOnce = function () {
                        var hs_sat26DsC7 = new $hs.Thunk();
                        hs_sat26DsC7.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("readControlMessage\x00");
                        };
                        return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1zu.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCSsizze, hs_sat26DsC7);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DsC5, hs_sat26DsC6);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DsC3, hs_sat26DsC4);
            };
            var hs_sat26DsC1 = new $hs.Thunk();
            hs_sat26DsC1.evaluateOnce = function () {
                return $hs.modules.ForeignziMarshalziAlloc.hs_alloca.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DsC1, hs_sat26DsC2);
        case 2:
            var hs_sat26DsBT = new $hs.Func(1);
            hs_sat26DsBT.evaluate = function (hs_p26DsyA) {
                var hs_sat26DsBV = new $hs.Thunk();
                hs_sat26DsBV.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziEventziControl.hs_CMsgWakeup);
                };
                var hs_sat26DsBU = new $hs.Thunk();
                hs_sat26DsBU.evaluateOnce = function () {
                    var hs_sat26DsBX = new $hs.Thunk();
                    hs_sat26DsBX.evaluateOnce = function () {
                        var hs_sat26DsC0 = new $hs.Thunk();
                        hs_sat26DsC0.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_wakeupBufferSizze26Dsxy);
                        };
                        var hs_sat26DsBZ = new $hs.Thunk();
                        hs_sat26DsBZ.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralFd, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_fd26Dsxz);
                        };
                        return $hs.modules.SystemziPosixziInternals.hs_czuread.hscall(hs_sat26DsBZ, hs_p26DsyA, hs_sat26DsC0);
                    };
                    var hs_sat26DsBW = new $hs.Thunk();
                    hs_sat26DsBW.evaluateOnce = function () {
                        var hs_sat26DsBY = new $hs.Thunk();
                        hs_sat26DsBY.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("readWakeupMessage\x00");
                        };
                        return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1zu.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCSsizze, hs_sat26DsBY);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DsBW, hs_sat26DsBX);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DsBU, hs_sat26DsBV);
            };
            var hs_sat26DsBQ = new $hs.Thunk();
            hs_sat26DsBQ.evaluateOnce = function () {
                return $hs.modules.ForeignziMarshalziAlloc.hs_allocaBytes.hscall(hs_wakeupBufferSizze26Dsxy);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DsBQ, hs_sat26DsBT);
        }
    };
    this.hs_sendDie.evaluate = function (hs_c26DsyK) {
        var hs_sat26DsCE = new $hs.Thunk();
        hs_sat26DsCE.evaluateOnce = function () {
            var hs_fd26DsyQ = new $hs.Thunk();
            hs_fd26DsyQ.evaluateOnce = function () {
                var hs_wild26DsCR = hs_c26DsyK;
                if (hs_c26DsyK.notEvaluated) {
                    hs_wild26DsCR = hs_c26DsyK.hscall();
                }
                var hs_ds126DsyP = hs_wild26DsCR.data[1];
                if (hs_ds126DsyP.notEvaluated) {
                    return hs_ds126DsyP.hscall();
                } else {
                    return hs_ds126DsyP;
                }
            };
            var hs_sat26DsCH = new $hs.Func(1);
            hs_sat26DsCH.evaluate = function (hs_p26DsyT) {
                var hs_sat26DsCJ = new $hs.Thunk();
                hs_sat26DsCJ.evaluateOnce = function () {
                    var hs_sat26DsCL = new $hs.Thunk();
                    hs_sat26DsCL.evaluateOnce = function () {
                        var hs_sat26DsCN = new $hs.Thunk();
                        hs_sat26DsCN.evaluateOnce = function () {
                            var hs_sat26DsCO = new $hs.Thunk();
                            hs_sat26DsCO.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_sat26DsCO);
                        };
                        var hs_sat26DsCM = new $hs.Thunk();
                        hs_sat26DsCM.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralFd, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_fd26DsyQ);
                        };
                        return $hs.modules.SystemziPosixziInternals.hs_czuwrite.hscall(hs_sat26DsCM, hs_p26DsyT, hs_sat26DsCN);
                    };
                    var hs_sat26DsCK = new $hs.Thunk();
                    hs_sat26DsCK.evaluateOnce = function () {
                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralCSsizze, $hs.modules.GHCziNum.hs_zdfNumInt);
                    };
                    return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.GHCziBase.hs_zdfFunctorIO, hs_sat26DsCK, hs_sat26DsCL);
                };
                var hs_sat26DsCI = new $hs.Thunk();
                hs_sat26DsCI.evaluateOnce = function () {
                    return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_p26DsyT, hs_iozuMANAGERzuDIE25u1mm);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DsCI, hs_sat26DsCJ);
            };
            var hs_sat26DsCG = new $hs.Thunk();
            hs_sat26DsCG.evaluateOnce = function () {
                return $hs.modules.ForeignziMarshalziAlloc.hs_alloca.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DsCG, hs_sat26DsCH);
        };
        var hs_sat26DsCD = new $hs.Thunk();
        hs_sat26DsCD.evaluateOnce = function () {
            var hs_sat26DsCF = new $hs.Thunk();
            hs_sat26DsCF.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("sendDie\x00");
            };
            return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1zu.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DsCF);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DsCD, hs_sat26DsCE);
    };
    this.hs_sendWakeup.evaluate = function (hs_c26Dszc) {
        var hs_sat26DsCT = new $hs.Func(1);
        hs_sat26DsCT.evaluate = function (hs_p26Dsz6) {
            var hs_sat26DsCV = new $hs.Thunk();
            hs_sat26DsCV.evaluateOnce = function () {
                var hs_sat26DsCZ = new $hs.Thunk();
                hs_sat26DsCZ.evaluateOnce = function () {
                    var hs_sat26DsD2 = new $hs.Thunk();
                    hs_sat26DsD2.evaluateOnce = function () {
                        var hs_sat26DsD8 = new $hs.Thunk();
                        hs_sat26DsD8.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(8);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_sat26DsD8);
                    };
                    var hs_sat26DsD3 = new $hs.Thunk();
                    hs_sat26DsD3.evaluateOnce = function () {
                        return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_p26Dsz6);
                    };
                    var hs_sat26DsD1 = new $hs.Thunk();
                    hs_sat26DsD1.evaluateOnce = function () {
                        var hs_sat26DsD4 = new $hs.Thunk();
                        hs_sat26DsD4.evaluateOnce = function () {
                            var hs_wild26DsD7 = hs_c26Dszc;
                            if (hs_c26Dszc.notEvaluated) {
                                hs_wild26DsD7 = hs_c26Dszc.hscall();
                            }
                            var hs_ds226Dszh = hs_wild26DsD7.data[2];
                            if (hs_ds226Dszh.notEvaluated) {
                                return hs_ds226Dszh.hscall();
                            } else {
                                return hs_ds226Dszh;
                            }
                        };
                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralFd, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DsD4);
                    };
                    return $hs.modules.SystemziPosixziInternals.hs_czuwrite.hscall(hs_sat26DsD1, hs_sat26DsD3, hs_sat26DsD2);
                };
                var hs_sat26DsCY = new $hs.Thunk();
                hs_sat26DsCY.evaluateOnce = function () {
                    var hs_sat26DsD0 = new $hs.Thunk();
                    hs_sat26DsD0.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("sendWakeup\x00");
                    };
                    return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1zu.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCSsizze, hs_sat26DsD0);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DsCY, hs_sat26DsCZ);
            };
            var hs_sat26DsCU = new $hs.Thunk();
            hs_sat26DsCU.evaluateOnce = function () {
                var hs_sat26DsCW = new $hs.Thunk();
                hs_sat26DsCW.evaluateOnce = function () {
                    var hs_sat26DsCX = new $hs.Thunk();
                    hs_sat26DsCX.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26DsCX);
                };
                return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64, hs_p26Dsz6, hs_sat26DsCW);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DsCU, hs_sat26DsCV);
        };
        var hs_sat26DsCS = new $hs.Thunk();
        hs_sat26DsCS.evaluateOnce = function () {
            return $hs.modules.ForeignziMarshalziAlloc.hs_alloca.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DsCS, hs_sat26DsCT);
    };
    this.hs_W.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_CMsgWakeup.data = [];
    this.hs_CMsgDie.data = [];
    this.hs_CMsgSignal.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(3);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
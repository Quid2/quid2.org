
$hs.modules.GHCziEventziInternal = new $hs.Module();
$hs.modules.GHCziEventziInternal.dependencies = ["GHC.Types", "GHC.CString", "GHC.Integer", "Data.List", "GHC.Base", "GHC.Num", "GHC.Float", "GHC.Show", "GHC.Classes", "GHC.List", "Data.Bits", "Foreign.C.Error"];
$hs.modules.GHCziEventziInternal.initBeforeDependencies = function () {
    this.hs_zdWBackend = new $hs.Func(4);
    this.hs_zdWTimeout = new $hs.Func(1);
    this.hs_throwErrnoIfMinus1NoRetry = new $hs.Func(3);
    this.hs_delete = new $hs.Func(1);
    this.hs_modifyFd = new $hs.Func(1);
    this.hs_poll = new $hs.Func(1);
    this.hs_backend = new $hs.Func(4);
    this.hs_evtClose = new $hs.Thunk();
    this.hs_evtWrite = new $hs.Thunk();
    this.hs_evtRead = new $hs.Thunk();
    this.hs_zdfShowTimeout = new $hs.Data(1);
    this.hs_zdfEqEvent = new $hs.Data(1);
    this.hs_eventIs = new $hs.Func(2);
    this.hs_zdfShowEvent = new $hs.Data(1);
    this.hs_zdfMonoidEvent = new $hs.Data(1);
    this.hs_Backend = new $hs.Func(4);
    this.hs_Timeout = new $hs.Func(1);
    this.hs_Forever = new $hs.Data(2);
    this.hs_Event = new $hs.Func(1);
    this.hs_zdWBackend.notEvaluated = true;
    this.hs_zdWBackend.evaluate = function (hs_tpl26DtgV, hs_tpl26DtgY, hs_tpl26DtgZ, hs_tpl26Dth0) {
        $hs.modules.GHCziEventziInternal.loadDependencies();
        return this.evaluate(hs_tpl26DtgV, hs_tpl26DtgY, hs_tpl26DtgZ, hs_tpl26Dth0);
    };
    this.hs_zdWTimeout.notEvaluated = true;
    this.hs_zdWTimeout.evaluate = function (hs_tpl26Dth2) {
        $hs.modules.GHCziEventziInternal.loadDependencies();
        return this.evaluate(hs_tpl26Dth2);
    };
    this.hs_throwErrnoIfMinus1NoRetry.notEvaluated = true;
    this.hs_throwErrnoIfMinus1NoRetry.evaluate = function (hs_zddNum26Dth9, hs_eta26Dthl, hs_eta126Dthb) {
        $hs.modules.GHCziEventziInternal.loadDependencies();
        return this.evaluate(hs_zddNum26Dth9, hs_eta26Dthl, hs_eta126Dthb);
    };
    this.hs_delete.notEvaluated = true;
    this.hs_delete.evaluate = function (hs_ds26Dthr) {
        $hs.modules.GHCziEventziInternal.loadDependencies();
        return this.evaluate(hs_ds26Dthr);
    };
    this.hs_modifyFd.notEvaluated = true;
    this.hs_modifyFd.evaluate = function (hs_ds26DthA) {
        $hs.modules.GHCziEventziInternal.loadDependencies();
        return this.evaluate(hs_ds26DthA);
    };
    this.hs_poll.notEvaluated = true;
    this.hs_poll.evaluate = function (hs_ds26DthJ) {
        $hs.modules.GHCziEventziInternal.loadDependencies();
        return this.evaluate(hs_ds26DthJ);
    };
    this.hs_backend.notEvaluated = true;
    this.hs_backend.evaluate = function (hs_eta26DthW, hs_eta126DthX, hs_eta226DthY, hs_eta326DthV) {
        $hs.modules.GHCziEventziInternal.loadDependencies();
        return this.evaluate(hs_eta26DthW, hs_eta126DthX, hs_eta226DthY, hs_eta326DthV);
    };
    this.hs_evtClose.evaluateOnce = function () {
        $hs.modules.GHCziEventziInternal.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_evtWrite.evaluateOnce = function () {
        $hs.modules.GHCziEventziInternal.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_evtRead.evaluateOnce = function () {
        $hs.modules.GHCziEventziInternal.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfShowTimeout.notEvaluated = true;
    this.hs_zdfShowTimeout.evaluate = function () {
        $hs.modules.GHCziEventziInternal.loadDependencies();
        return this;
    };
    this.hs_zdfEqEvent.notEvaluated = true;
    this.hs_zdfEqEvent.evaluate = function () {
        $hs.modules.GHCziEventziInternal.loadDependencies();
        return this;
    };
    this.hs_eventIs.notEvaluated = true;
    this.hs_eventIs.evaluate = function (hs_ds26Dtit, hs_ds126Dtiu) {
        $hs.modules.GHCziEventziInternal.loadDependencies();
        return this.evaluate(hs_ds26Dtit, hs_ds126Dtiu);
    };
    this.hs_zdfShowEvent.notEvaluated = true;
    this.hs_zdfShowEvent.evaluate = function () {
        $hs.modules.GHCziEventziInternal.loadDependencies();
        return this;
    };
    this.hs_zdfMonoidEvent.notEvaluated = true;
    this.hs_zdfMonoidEvent.evaluate = function () {
        $hs.modules.GHCziEventziInternal.loadDependencies();
        return this;
    };
    this.hs_Backend.notEvaluated = true;
    this.hs_Backend.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziEventziInternal.loadDependencies();
        return this.evaluate(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_Timeout.notEvaluated = true;
    this.hs_Timeout.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziEventziInternal.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_Forever.notEvaluated = true;
    this.hs_Forever.evaluate = function () {
        $hs.modules.GHCziEventziInternal.loadDependencies();
        return this;
    };
    this.hs_Event.notEvaluated = true;
    this.hs_Event.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziEventziInternal.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
};
$hs.modules.GHCziEventziInternal.initAfterDependencies = function () {
    this.hs_zdWBackend.notEvaluated = false;
    this.hs_zdWTimeout.notEvaluated = false;
    this.hs_throwErrnoIfMinus1NoRetry.notEvaluated = false;
    this.hs_delete.notEvaluated = false;
    this.hs_modifyFd.notEvaluated = false;
    this.hs_poll.notEvaluated = false;
    this.hs_backend.notEvaluated = false;
    this.hs_zdfShowTimeout.notEvaluated = false;
    this.hs_zdfShowTimeout.evaluate = function () {
        return this;
    };
    this.hs_zdfEqEvent.notEvaluated = false;
    this.hs_zdfEqEvent.evaluate = function () {
        return this;
    };
    this.hs_eventIs.notEvaluated = false;
    this.hs_zdfShowEvent.notEvaluated = false;
    this.hs_zdfShowEvent.evaluate = function () {
        return this;
    };
    this.hs_zdfMonoidEvent.notEvaluated = false;
    this.hs_zdfMonoidEvent.evaluate = function () {
        return this;
    };
    this.hs_Backend.notEvaluated = false;
    this.hs_Timeout.notEvaluated = false;
    this.hs_Forever.notEvaluated = false;
    this.hs_Forever.evaluate = function () {
        return this;
    };
    this.hs_Event.notEvaluated = false;
    var hs_a25v4LJ = new $hs.Data(1);
    var hs_a125v4LK = new $hs.Data(1);
    var hs_a225v4LL = new $hs.Data(1);
    var hs_a325v4LM = new $hs.Data(1);
    var hs_evtNothing25tTSz = new $hs.Thunk();
    var hs_zdcshowsPrec25v4LN = new $hs.Func(2);
    var hs_sat26DtjC = new $hs.Thunk();
    var hs_zdcshowList25v4M3 = new $hs.Thunk();
    var hs_zdcshow25v4M4 = new $hs.Thunk();
    var hs_a425v4M7 = new $hs.Thunk();
    var hs_zdczeze25v4M8 = new $hs.Thunk();
    var hs_a525v4M9 = new $hs.Thunk();
    var hs_zdczsze25v4Ma = new $hs.Thunk();
    var hs_zdcshow125v4Mh = new $hs.Func(1);
    var hs_zdcshowList125v4MN = new $hs.Thunk();
    var hs_zdcshowsPrec125v4MO = new $hs.Thunk();
    var hs_a625v4MP = new $hs.Func(2);
    var hs_evtCombine25tTSE = new $hs.Func(2);
    var hs_evtConcat25tTSF = new $hs.Thunk();
    this.hs_zdWBackend.evaluate = function (hs_tpl26DtgV, hs_tpl26DtgY, hs_tpl26DtgZ, hs_tpl26Dth0) {
        var hs_tpl26DtgX = hs_tpl26DtgV;
        if (hs_tpl26DtgV.notEvaluated) {
            hs_tpl26DtgX = hs_tpl26DtgV.hscall();
        }
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26DtgX, hs_tpl26DtgY, hs_tpl26DtgZ, hs_tpl26Dth0];
        return $res;
    };
    this.hs_zdWTimeout.evaluate = function (hs_tpl26Dth2) {
        var hs_tpl26Dth4 = hs_tpl26Dth2;
        if (hs_tpl26Dth2.notEvaluated) {
            hs_tpl26Dth4 = hs_tpl26Dth2.hscall();
        }
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26Dth4];
        return $res;
    };
    this.hs_throwErrnoIfMinus1NoRetry.evaluate = function (hs_zddNum26Dth9, hs_eta26Dthl, hs_eta126Dthb) {
        var hs_zddEq26Dtha = new $hs.Thunk();
        hs_zddEq26Dtha.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum26Dth9);
        };
        var hs_sat26Dtja = new $hs.Func(1);
        hs_sat26Dtja.evaluate = function (hs_res26Dthd) {
            var hs_sat26Dtjc = new $hs.Thunk();
            hs_sat26Dtjc.evaluateOnce = function () {
                var hs_sat26Dtjh = new $hs.Thunk();
                hs_sat26Dtjh.evaluateOnce = function () {
                    var hs_sat26Dtji = new $hs.Thunk();
                    hs_sat26Dtji.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26Dth9, hs_sat26Dtji);
                };
                return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum26Dth9, hs_sat26Dtjh);
            };
            var hs_wild26Dtjd = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26Dtha, hs_res26Dthd, hs_sat26Dtjc);
            switch (hs_wild26Dtjd.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_res26Dthd);
            case 2:
                var hs_sat26Dtjb = new $hs.Func(1);
                hs_sat26Dtjb.evaluate = function (hs_err26Dthj) {
                    var hs_wild126Dtjf = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_err26Dthj, $hs.modules.ForeignziCziError.hs_eINTR);
                    switch (hs_wild126Dtjf.tag) {
                    case 1:
                        return $hs.modules.ForeignziCziError.hs_throwErrno.hscall(hs_eta26Dthl);
                    case 2:
                        var hs_sat26Dtje = new $hs.Thunk();
                        hs_sat26Dtje.evaluateOnce = function () {
                            var hs_sat26Dtjg = new $hs.Thunk();
                            hs_sat26Dtjg.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26Dth9, hs_sat26Dtjg);
                        };
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dtje);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.ForeignziCziError.hs_getErrno, hs_sat26Dtjb);
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_eta126Dthb, hs_sat26Dtja);
    };
    this.hs_delete.evaluate = function (hs_ds26Dthr) {
        var hs_wild26Dtjl = hs_ds26Dthr;
        if (hs_ds26Dthr.notEvaluated) {
            hs_wild26Dtjl = hs_ds26Dthr.hscall();
        }
        var hs_bState26Dthx = hs_wild26Dtjl.data[0];
        var hs_bDelete26Dthy = hs_wild26Dtjl.data[3];
        return hs_bDelete26Dthy.hscall(hs_bState26Dthx);
    };
    this.hs_modifyFd.evaluate = function (hs_ds26DthA) {
        var hs_wild26Dtjo = hs_ds26DthA;
        if (hs_ds26DthA.notEvaluated) {
            hs_wild26Dtjo = hs_ds26DthA.hscall();
        }
        var hs_bState26DthG = hs_wild26Dtjo.data[0];
        var hs_bModifyFd26DthH = hs_wild26Dtjo.data[2];
        return hs_bModifyFd26DthH.hscall(hs_bState26DthG);
    };
    this.hs_poll.evaluate = function (hs_ds26DthJ) {
        var hs_wild26Dtjr = hs_ds26DthJ;
        if (hs_ds26DthJ.notEvaluated) {
            hs_wild26Dtjr = hs_ds26DthJ.hscall();
        }
        var hs_bState26DthP = hs_wild26Dtjr.data[0];
        var hs_bPoll26DthQ = hs_wild26Dtjr.data[1];
        return hs_bPoll26DthQ.hscall(hs_bState26DthP);
    };
    this.hs_backend.evaluate = function (hs_eta26DthW, hs_eta126DthX, hs_eta226DthY, hs_eta326DthV) {
        return $hs.modules.GHCziEventziInternal.hs_zdWBackend.hscall(hs_eta326DthV, hs_eta26DthW, hs_eta126DthX, hs_eta226DthY);
    };
    hs_a25v4LJ.data = [4];
    this.hs_evtClose.evaluateOnce = function () {
        if (hs_a25v4LJ.notEvaluated) {
            return hs_a25v4LJ.hscall();
        } else {
            return hs_a25v4LJ;
        }
    };
    hs_a125v4LK.data = [2];
    this.hs_evtWrite.evaluateOnce = function () {
        if (hs_a125v4LK.notEvaluated) {
            return hs_a125v4LK.hscall();
        } else {
            return hs_a125v4LK;
        }
    };
    hs_a225v4LL.data = [1];
    this.hs_evtRead.evaluateOnce = function () {
        if (hs_a225v4LL.notEvaluated) {
            return hs_a225v4LL.hscall();
        } else {
            return hs_a225v4LL;
        }
    };
    hs_a325v4LM.data = [0];
    hs_evtNothing25tTSz.evaluateOnce = function () {
        if (hs_a325v4LM.notEvaluated) {
            return hs_a325v4LM.hscall();
        } else {
            return hs_a325v4LM;
        }
    };
    hs_zdcshowsPrec25v4LN.evaluate = function (hs_a726Dti9, hs_ds26Dti6) {
        var hs_wild26Dtjt = hs_ds26Dti6;
        if (hs_ds26Dti6.notEvaluated) {
            hs_wild26Dtjt = hs_ds26Dti6.hscall();
        }
        switch (hs_wild26Dtjt.tag) {
        case 1:
            var hs_b126Dtif = hs_wild26Dtjt.data[0];
            var hs_sat26Dtjv = new $hs.Thunk();
            hs_sat26Dtjv.evaluateOnce = function () {
                var hs_sat26Dtjy = new $hs.Thunk();
                hs_sat26Dtjy.evaluateOnce = function () {
                    var hs_sat26DtjA = new $hs.Data(1);
                    hs_sat26DtjA.data = [11];
                    return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziFloat.hs_zdfShowDouble, hs_sat26DtjA, hs_b126Dtif);
                };
                var hs_sat26Dtjx = new $hs.Thunk();
                hs_sat26Dtjx.evaluateOnce = function () {
                    var hs_sat26Dtjz = new $hs.Thunk();
                    hs_sat26Dtjz.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Timeout \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dtjz);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26Dtjx, hs_sat26Dtjy);
            };
            var hs_sat26Dtju = new $hs.Thunk();
            hs_sat26Dtju.evaluateOnce = function () {
                var hs_sat26Dtjw = new $hs.Data(1);
                hs_sat26Dtjw.data = [11];
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_a726Dti9, hs_sat26Dtjw);
            };
            return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26Dtju, hs_sat26Dtjv);
        case 2:
            var hs_sat26Dtjs = new $hs.Thunk();
            hs_sat26Dtjs.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Forever\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dtjs);
        }
    };
    hs_sat26DtjC.evaluateOnce = function () {
        var hs_sat26DtjB = new $hs.Data(1);
        hs_sat26DtjB.data = [0];
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziEventziInternal.hs_zdfShowTimeout, hs_sat26DtjB);
    };
    this.hs_zdfShowTimeout.data = [hs_zdcshowsPrec25v4LN, hs_zdcshow25v4M4, hs_zdcshowList25v4M3];
    hs_zdcshowList25v4M3.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DtjC);
    };
    hs_zdcshow25v4M4.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziEventziInternal.hs_zdfShowTimeout);
    };
    hs_a425v4M7.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt);
    };
    hs_zdczeze25v4M8.evaluateOnce = function () {
        if (hs_a425v4M7.notEvaluated) {
            return hs_a425v4M7.hscall();
        } else {
            return hs_a425v4M7;
        }
    };
    hs_a525v4M9.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt);
    };
    hs_zdczsze25v4Ma.evaluateOnce = function () {
        if (hs_a525v4M9.notEvaluated) {
            return hs_a525v4M9.hscall();
        } else {
            return hs_a525v4M9;
        }
    };
    this.hs_zdfEqEvent.data = [hs_a425v4M7, hs_a525v4M9];
    this.hs_eventIs.evaluate = function (hs_ds26Dtit, hs_ds126Dtiu) {
        var hs_sat26DtjE = new $hs.Data(1);
        hs_sat26DtjE.data = [0];
        var hs_sat26DtjD = new $hs.Thunk();
        hs_sat26DtjD.evaluateOnce = function () {
            return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_ds26Dtit, hs_ds126Dtiu);
        };
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_sat26DtjD, hs_sat26DtjE);
    };
    hs_zdcshow125v4Mh.evaluate = function (hs_e26DtiC) {
        var hs_so26DtiI = new $hs.Func(2);
        hs_so26DtiI.evaluate = function (hs_ev26DtiD, hs_disp26DtiH) {
            var hs_sat26DtjZ = new $hs.Data(1);
            hs_sat26DtjZ.data = [0];
            var hs_sat26Dtk0 = new $hs.Thunk();
            hs_sat26Dtk0.evaluateOnce = function () {
                return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_e26DtiC, hs_ev26DtiD);
            };
            var hs_wild26Dtk1 = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_sat26Dtk0, hs_sat26DtjZ);
            switch (hs_wild26Dtk1.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                if (hs_disp26DtiH.notEvaluated) {
                    return hs_disp26DtiH.hscall();
                } else {
                    return hs_disp26DtiH;
                }
            }
        };
        var hs_sat26DtjG = new $hs.Thunk();
        hs_sat26DtjG.evaluateOnce = function () {
            var hs_sat26DtjI = new $hs.Data(1);
            hs_sat26DtjI.data = ["]"];
            var hs_sat26DtjJ = new $hs.Data(2);
            hs_sat26DtjJ.data = [hs_sat26DtjI, $hs.modules.GHCziTypes.hs_ZMZN];
            var hs_sat26DtjH = new $hs.Thunk();
            hs_sat26DtjH.evaluateOnce = function () {
                var hs_sat26DtjL = new $hs.Thunk();
                hs_sat26DtjL.evaluateOnce = function () {
                    var hs_sat26DtjY = new $hs.Thunk();
                    hs_sat26DtjY.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("evtClose\x00");
                    };
                    return hs_so26DtiI.hscall($hs.modules.GHCziEventziInternal.hs_evtClose, hs_sat26DtjY);
                };
                var hs_sat26DtjM = new $hs.Data(2);
                hs_sat26DtjM.data = [hs_sat26DtjL, $hs.modules.GHCziTypes.hs_ZMZN];
                var hs_sat26DtjN = new $hs.Thunk();
                hs_sat26DtjN.evaluateOnce = function () {
                    var hs_sat26DtjX = new $hs.Thunk();
                    hs_sat26DtjX.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("evtWrite\x00");
                    };
                    return hs_so26DtiI.hscall($hs.modules.GHCziEventziInternal.hs_evtWrite, hs_sat26DtjX);
                };
                var hs_sat26DtjO = new $hs.Data(2);
                hs_sat26DtjO.data = [hs_sat26DtjN, hs_sat26DtjM];
                var hs_sat26DtjP = new $hs.Thunk();
                hs_sat26DtjP.evaluateOnce = function () {
                    var hs_sat26DtjW = new $hs.Thunk();
                    hs_sat26DtjW.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("evtRead\x00");
                    };
                    return hs_so26DtiI.hscall($hs.modules.GHCziEventziInternal.hs_evtRead, hs_sat26DtjW);
                };
                var hs_sat26DtjQ = new $hs.Data(2);
                hs_sat26DtjQ.data = [hs_sat26DtjP, hs_sat26DtjO];
                var hs_sat26DtjK = new $hs.Thunk();
                hs_sat26DtjK.evaluateOnce = function () {
                    var hs_sat26DtjS = new $hs.Thunk();
                    hs_sat26DtjS.evaluateOnce = function () {
                        var hs_sat26DtjV = new $hs.Thunk();
                        hs_sat26DtjV.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.GHCziClasses.hs_not, $hs.modules.GHCziList.hs_null);
                        };
                        return $hs.modules.GHCziList.hs_filter.hscall(hs_sat26DtjV);
                    };
                    var hs_sat26DtjR = new $hs.Thunk();
                    hs_sat26DtjR.evaluateOnce = function () {
                        var hs_sat26DtjU = new $hs.Data(1);
                        hs_sat26DtjU.data = [","];
                        var hs_sat26DtjT = new $hs.Data(2);
                        hs_sat26DtjT.data = [hs_sat26DtjU, $hs.modules.GHCziTypes.hs_ZMZN];
                        return $hs.modules.DataziList.hs_intercalate.hscall(hs_sat26DtjT);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DtjR, hs_sat26DtjS);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DtjK, hs_sat26DtjQ);
            };
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DtjH, hs_sat26DtjJ);
        };
        var hs_sat26DtjF = new $hs.Data(1);
        hs_sat26DtjF.data = ["["];
        var $res = new $hs.Data(2);
        $res.data = [hs_sat26DtjF, hs_sat26DtjG];
        return $res;
    };
    this.hs_zdfShowEvent.data = [hs_zdcshowsPrec125v4MO, hs_zdcshow125v4Mh, hs_zdcshowList125v4MN];
    hs_zdcshowList125v4MN.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall($hs.modules.GHCziEventziInternal.hs_zdfShowEvent);
    };
    hs_zdcshowsPrec125v4MO.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowsPrec.hscall($hs.modules.GHCziEventziInternal.hs_zdfShowEvent);
    };
    hs_a625v4MP.evaluate = function (hs_ds26Dtj8, hs_ds126Dtj9) {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_ds26Dtj8, hs_ds126Dtj9);
    };
    hs_evtCombine25tTSE.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a625v4MP.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_evtConcat25tTSF.evaluateOnce = function () {
        return $hs.modules.DataziList.hs_foldlzq.hscall(hs_evtCombine25tTSE, hs_evtNothing25tTSz);
    };
    this.hs_zdfMonoidEvent.data = [hs_evtNothing25tTSz, hs_evtCombine25tTSE, hs_evtConcat25tTSF];
    this.hs_Backend.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_Timeout.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
    this.hs_Forever.data = [];
    this.hs_Event.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.GHCziEventziInternal.hs_Event.hscall(hs_eta1cW6l3);
    };
};
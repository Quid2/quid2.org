
$hs.modules.SystemziEventziInternal = new $hs.Module();
$hs.modules.SystemziEventziInternal.dependencies = ["GHC.Types", "GHC.Integer", "Data.List", "GHC.Base", "GHC.Num", "GHC.Float", "GHC.Show", "GHC.Classes", "GHC.List", "Data.Bits", "Foreign.C.Error"];
$hs.modules.SystemziEventziInternal.initBeforeDependencies = function () {
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
    this.hs_zdWBackend.evaluate = function (hs_tpl26DSoZ, hs_tpl26DSp2, hs_tpl26DSp3, hs_tpl26DSp4) {
        $hs.modules.SystemziEventziInternal.loadDependencies();
        return this.evaluate(hs_tpl26DSoZ, hs_tpl26DSp2, hs_tpl26DSp3, hs_tpl26DSp4);
    };
    this.hs_zdWTimeout.notEvaluated = true;
    this.hs_zdWTimeout.evaluate = function (hs_tpl26DSp6) {
        $hs.modules.SystemziEventziInternal.loadDependencies();
        return this.evaluate(hs_tpl26DSp6);
    };
    this.hs_throwErrnoIfMinus1NoRetry.notEvaluated = true;
    this.hs_throwErrnoIfMinus1NoRetry.evaluate = function (hs_zddNum26DSpe, hs_eta26DSpq, hs_eta126DSpg) {
        $hs.modules.SystemziEventziInternal.loadDependencies();
        return this.evaluate(hs_zddNum26DSpe, hs_eta26DSpq, hs_eta126DSpg);
    };
    this.hs_delete.notEvaluated = true;
    this.hs_delete.evaluate = function (hs_ds26DSpw) {
        $hs.modules.SystemziEventziInternal.loadDependencies();
        return this.evaluate(hs_ds26DSpw);
    };
    this.hs_modifyFd.notEvaluated = true;
    this.hs_modifyFd.evaluate = function (hs_ds26DSpF) {
        $hs.modules.SystemziEventziInternal.loadDependencies();
        return this.evaluate(hs_ds26DSpF);
    };
    this.hs_poll.notEvaluated = true;
    this.hs_poll.evaluate = function (hs_ds26DSpO) {
        $hs.modules.SystemziEventziInternal.loadDependencies();
        return this.evaluate(hs_ds26DSpO);
    };
    this.hs_backend.notEvaluated = true;
    this.hs_backend.evaluate = function (hs_eta26DSq3, hs_eta126DSq4, hs_eta226DSq5, hs_eta326DSq0) {
        $hs.modules.SystemziEventziInternal.loadDependencies();
        return this.evaluate(hs_eta26DSq3, hs_eta126DSq4, hs_eta226DSq5, hs_eta326DSq0);
    };
    this.hs_evtClose.evaluateOnce = function () {
        $hs.modules.SystemziEventziInternal.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_evtWrite.evaluateOnce = function () {
        $hs.modules.SystemziEventziInternal.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_evtRead.evaluateOnce = function () {
        $hs.modules.SystemziEventziInternal.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfShowTimeout.notEvaluated = true;
    this.hs_zdfShowTimeout.evaluate = function () {
        $hs.modules.SystemziEventziInternal.loadDependencies();
        return this;
    };
    this.hs_zdfEqEvent.notEvaluated = true;
    this.hs_zdfEqEvent.evaluate = function () {
        $hs.modules.SystemziEventziInternal.loadDependencies();
        return this;
    };
    this.hs_eventIs.notEvaluated = true;
    this.hs_eventIs.evaluate = function (hs_ds26DSqM, hs_ds126DSqN) {
        $hs.modules.SystemziEventziInternal.loadDependencies();
        return this.evaluate(hs_ds26DSqM, hs_ds126DSqN);
    };
    this.hs_zdfShowEvent.notEvaluated = true;
    this.hs_zdfShowEvent.evaluate = function () {
        $hs.modules.SystemziEventziInternal.loadDependencies();
        return this;
    };
    this.hs_zdfMonoidEvent.notEvaluated = true;
    this.hs_zdfMonoidEvent.evaluate = function () {
        $hs.modules.SystemziEventziInternal.loadDependencies();
        return this;
    };
    this.hs_Backend.notEvaluated = true;
    this.hs_Backend.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziEventziInternal.loadDependencies();
        return this.evaluate(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_Timeout.notEvaluated = true;
    this.hs_Timeout.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.SystemziEventziInternal.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_Forever.notEvaluated = true;
    this.hs_Forever.evaluate = function () {
        $hs.modules.SystemziEventziInternal.loadDependencies();
        return this;
    };
    this.hs_Event.notEvaluated = true;
    this.hs_Event.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.SystemziEventziInternal.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
};
$hs.modules.SystemziEventziInternal.initAfterDependencies = function () {
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
    var hs_a25vtTR = new $hs.Data(1);
    var hs_a125vtTT = new $hs.Data(1);
    var hs_a225vtTV = new $hs.Data(1);
    var hs_a325vtTX = new $hs.Data(1);
    var hs_evtNothing25ujPs = new $hs.Thunk();
    var hs_zdcshowsPrec25vtTZ = new $hs.Func(2);
    var hs_sat26DSrX = new $hs.Thunk();
    var hs_zdcshowList25vtUh = new $hs.Thunk();
    var hs_zdcshow25vtUj = new $hs.Thunk();
    var hs_a425vtUn = new $hs.Thunk();
    var hs_zdczeze25vtUp = new $hs.Thunk();
    var hs_a525vtUr = new $hs.Thunk();
    var hs_zdczsze25vtUt = new $hs.Thunk();
    var hs_zdcshow125vtUB = new $hs.Func(1);
    var hs_zdcshowList125vtV5 = new $hs.Thunk();
    var hs_zdcshowsPrec125vtV7 = new $hs.Thunk();
    var hs_a625vtV9 = new $hs.Func(2);
    var hs_evtCombine25ujPC = new $hs.Func(2);
    var hs_evtConcat25ujPE = new $hs.Thunk();
    this.hs_zdWBackend.evaluate = function (hs_tpl26DSoZ, hs_tpl26DSp2, hs_tpl26DSp3, hs_tpl26DSp4) {
        var hs_tpl26DSp1 = hs_tpl26DSoZ;
        if (hs_tpl26DSoZ.notEvaluated) {
            hs_tpl26DSp1 = hs_tpl26DSoZ.hscall();
        }
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26DSp1, hs_tpl26DSp2, hs_tpl26DSp3, hs_tpl26DSp4];
        return $res;
    };
    this.hs_zdWTimeout.evaluate = function (hs_tpl26DSp6) {
        var hs_tpl26DSru = hs_tpl26DSp6;
        if (hs_tpl26DSp6.notEvaluated) {
            hs_tpl26DSru = hs_tpl26DSp6.hscall();
        }
        var hs_tpl26DSp9 = hs_tpl26DSru.data[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26DSp9];
        return $res;
    };
    this.hs_throwErrnoIfMinus1NoRetry.evaluate = function (hs_zddNum26DSpe, hs_eta26DSpq, hs_eta126DSpg) {
        var hs_zddEq26DSpf = new $hs.Thunk();
        hs_zddEq26DSpf.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum26DSpe);
        };
        var hs_sat26DSrD = new $hs.Func(1);
        hs_sat26DSrD.evaluate = function (hs_res26DSpi) {
            var hs_sat26DSry = new $hs.Thunk();
            hs_sat26DSry.evaluateOnce = function () {
                var hs_sat26DSrw = new $hs.Thunk();
                hs_sat26DSrw.evaluateOnce = function () {
                    var hs_sat26DSrv = new $hs.Thunk();
                    hs_sat26DSrv.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DSpe, hs_sat26DSrv);
                };
                return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum26DSpe, hs_sat26DSrw);
            };
            var hs_wild26DSrx = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26DSpf, hs_res26DSpi, hs_sat26DSry);
            switch (hs_wild26DSrx.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_res26DSpi);
            case 2:
                var hs_sat26DSrC = new $hs.Func(1);
                hs_sat26DSrC.evaluate = function (hs_err26DSpo) {
                    var hs_wild126DSrz = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_err26DSpo, $hs.modules.ForeignziCziError.hs_eINTR);
                    switch (hs_wild126DSrz.tag) {
                    case 1:
                        return $hs.modules.ForeignziCziError.hs_throwErrno.hscall(hs_eta26DSpq);
                    case 2:
                        var hs_sat26DSrB = new $hs.Thunk();
                        hs_sat26DSrB.evaluateOnce = function () {
                            var hs_sat26DSrA = new $hs.Thunk();
                            hs_sat26DSrA.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DSpe, hs_sat26DSrA);
                        };
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DSrB);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.ForeignziCziError.hs_getErrno, hs_sat26DSrC);
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_eta126DSpg, hs_sat26DSrD);
    };
    this.hs_delete.evaluate = function (hs_ds26DSpw) {
        var hs_wild26DSrE = hs_ds26DSpw;
        if (hs_ds26DSpw.notEvaluated) {
            hs_wild26DSrE = hs_ds26DSpw.hscall();
        }
        var hs_bState26DSpC = hs_wild26DSrE.data[0];
        var hs_bDelete26DSpD = hs_wild26DSrE.data[3];
        return hs_bDelete26DSpD.hscall(hs_bState26DSpC);
    };
    this.hs_modifyFd.evaluate = function (hs_ds26DSpF) {
        var hs_wild26DSrH = hs_ds26DSpF;
        if (hs_ds26DSpF.notEvaluated) {
            hs_wild26DSrH = hs_ds26DSpF.hscall();
        }
        var hs_bState26DSpL = hs_wild26DSrH.data[0];
        var hs_bModifyFd26DSpM = hs_wild26DSrH.data[2];
        return hs_bModifyFd26DSpM.hscall(hs_bState26DSpL);
    };
    this.hs_poll.evaluate = function (hs_ds26DSpO) {
        var hs_wild26DSrK = hs_ds26DSpO;
        if (hs_ds26DSpO.notEvaluated) {
            hs_wild26DSrK = hs_ds26DSpO.hscall();
        }
        var hs_bState26DSpU = hs_wild26DSrK.data[0];
        var hs_bPoll26DSpV = hs_wild26DSrK.data[1];
        return hs_bPoll26DSpV.hscall(hs_bState26DSpU);
    };
    this.hs_backend.evaluate = function (hs_eta26DSq3, hs_eta126DSq4, hs_eta226DSq5, hs_eta326DSq0) {
        var hs_tpl26DSq2 = hs_eta326DSq0;
        if (hs_eta326DSq0.notEvaluated) {
            hs_tpl26DSq2 = hs_eta326DSq0.hscall();
        }
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26DSq2, hs_eta26DSq3, hs_eta126DSq4, hs_eta226DSq5];
        return $res;
    };
    hs_a25vtTR.data = [4];
    this.hs_evtClose.evaluateOnce = function () {
        if (hs_a25vtTR.notEvaluated) {
            return hs_a25vtTR.hscall();
        } else {
            return hs_a25vtTR;
        }
    };
    hs_a125vtTT.data = [2];
    this.hs_evtWrite.evaluateOnce = function () {
        if (hs_a125vtTT.notEvaluated) {
            return hs_a125vtTT.hscall();
        } else {
            return hs_a125vtTT;
        }
    };
    hs_a225vtTV.data = [1];
    this.hs_evtRead.evaluateOnce = function () {
        if (hs_a225vtTV.notEvaluated) {
            return hs_a225vtTV.hscall();
        } else {
            return hs_a225vtTV;
        }
    };
    hs_a325vtTX.data = [0];
    hs_evtNothing25ujPs.evaluateOnce = function () {
        if (hs_a325vtTX.notEvaluated) {
            return hs_a325vtTX.hscall();
        } else {
            return hs_a325vtTX;
        }
    };
    hs_zdcshowsPrec25vtTZ.evaluate = function (hs_a726DSql, hs_ds26DSqi) {
        var hs_wild26DSrN = hs_ds26DSqi;
        if (hs_ds26DSqi.notEvaluated) {
            hs_wild26DSrN = hs_ds26DSqi.hscall();
        }
        switch (hs_wild26DSrN.tag) {
        case 1:
            var hs_rb26DSqr = hs_wild26DSrN.data[0];
            var hs_sat26DSrT = new $hs.Thunk();
            hs_sat26DSrT.evaluateOnce = function () {
                var hs_sat26DSrQ = new $hs.Thunk();
                hs_sat26DSrQ.evaluateOnce = function () {
                    var hs_sat26DSrO = new $hs.Data(1);
                    hs_sat26DSrO.data = [hs_rb26DSqr];
                    var hs_sat26DSrP = new $hs.Data(1);
                    hs_sat26DSrP.data = [11];
                    return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziFloat.hs_zdfShowDouble, hs_sat26DSrP, hs_sat26DSrO);
                };
                var hs_sat26DSrS = new $hs.Thunk();
                hs_sat26DSrS.evaluateOnce = function () {
                    var hs_sat26DSrR = new $hs.Thunk();
                    hs_sat26DSrR.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Timeout \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DSrR);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DSrS, hs_sat26DSrQ);
            };
            var hs_sat26DSrV = new $hs.Thunk();
            hs_sat26DSrV.evaluateOnce = function () {
                var hs_sat26DSrU = new $hs.Data(1);
                hs_sat26DSrU.data = [11];
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_a726DSql, hs_sat26DSrU);
            };
            return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DSrV, hs_sat26DSrT);
        case 2:
            var hs_sat26DSrW = new $hs.Thunk();
            hs_sat26DSrW.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Forever\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DSrW);
        }
    };
    hs_sat26DSrX.evaluateOnce = function () {
        var hs_sat26DSrY = new $hs.Data(1);
        hs_sat26DSrY.data = [0];
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.SystemziEventziInternal.hs_zdfShowTimeout, hs_sat26DSrY);
    };
    this.hs_zdfShowTimeout.data = [hs_zdcshowsPrec25vtTZ, hs_zdcshow25vtUj, hs_zdcshowList25vtUh];
    hs_zdcshowList25vtUh.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DSrX);
    };
    hs_zdcshow25vtUj.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.SystemziEventziInternal.hs_zdfShowTimeout);
    };
    hs_a425vtUn.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt);
    };
    hs_zdczeze25vtUp.evaluateOnce = function () {
        if (hs_a425vtUn.notEvaluated) {
            return hs_a425vtUn.hscall();
        } else {
            return hs_a425vtUn;
        }
    };
    hs_a525vtUr.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziBase.hs_zdfEqInt);
    };
    hs_zdczsze25vtUt.evaluateOnce = function () {
        if (hs_a525vtUr.notEvaluated) {
            return hs_a525vtUr.hscall();
        } else {
            return hs_a525vtUr;
        }
    };
    this.hs_zdfEqEvent.data = [hs_a425vtUn, hs_a525vtUr];
    this.hs_eventIs.evaluate = function (hs_ds26DSqM, hs_ds126DSqN) {
        var hs_sat26DSrZ = new $hs.Data(1);
        hs_sat26DSrZ.data = [0];
        var hs_sat26DSs0 = new $hs.Thunk();
        hs_sat26DSs0.evaluateOnce = function () {
            return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_ds26DSqM, hs_ds126DSqN);
        };
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_sat26DSs0, hs_sat26DSrZ);
    };
    hs_zdcshow125vtUB.evaluate = function (hs_e26DSr0) {
        var hs_sat26DSsp = new $hs.Thunk();
        hs_sat26DSsp.evaluateOnce = function () {
            var hs_sat26DSs1 = new $hs.Data(1);
            hs_sat26DSs1.data = ["]"];
            var hs_sat26DSs2 = new $hs.Data(2);
            hs_sat26DSs2.data = [hs_sat26DSs1, $hs.modules.GHCziTypes.hs_ZMZN];
            var hs_sat26DSso = new $hs.Thunk();
            hs_sat26DSso.evaluateOnce = function () {
                var hs_sat26DSs6 = new $hs.Thunk();
                hs_sat26DSs6.evaluateOnce = function () {
                    var hs_sat26DSs3 = new $hs.Data(1);
                    hs_sat26DSs3.data = [0];
                    var hs_sat26DSs5 = new $hs.Thunk();
                    hs_sat26DSs5.evaluateOnce = function () {
                        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_e26DSr0, $hs.modules.SystemziEventziInternal.hs_evtClose);
                    };
                    var hs_wild26DSs4 = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_sat26DSs5, hs_sat26DSs3);
                    switch (hs_wild26DSs4.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("evtClose\x00");
                    }
                };
                var hs_sat26DSs7 = new $hs.Data(2);
                hs_sat26DSs7.data = [hs_sat26DSs6, $hs.modules.GHCziTypes.hs_ZMZN];
                var hs_sat26DSsb = new $hs.Thunk();
                hs_sat26DSsb.evaluateOnce = function () {
                    var hs_sat26DSs8 = new $hs.Data(1);
                    hs_sat26DSs8.data = [0];
                    var hs_sat26DSsa = new $hs.Thunk();
                    hs_sat26DSsa.evaluateOnce = function () {
                        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_e26DSr0, $hs.modules.SystemziEventziInternal.hs_evtWrite);
                    };
                    var hs_wild26DSs9 = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_sat26DSsa, hs_sat26DSs8);
                    switch (hs_wild26DSs9.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("evtWrite\x00");
                    }
                };
                var hs_sat26DSsc = new $hs.Data(2);
                hs_sat26DSsc.data = [hs_sat26DSsb, hs_sat26DSs7];
                var hs_sat26DSsg = new $hs.Thunk();
                hs_sat26DSsg.evaluateOnce = function () {
                    var hs_sat26DSsd = new $hs.Data(1);
                    hs_sat26DSsd.data = [0];
                    var hs_sat26DSsf = new $hs.Thunk();
                    hs_sat26DSsf.evaluateOnce = function () {
                        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_e26DSr0, $hs.modules.SystemziEventziInternal.hs_evtRead);
                    };
                    var hs_wild26DSse = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_sat26DSsf, hs_sat26DSsd);
                    switch (hs_wild26DSse.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("evtRead\x00");
                    }
                };
                var hs_sat26DSsh = new $hs.Data(2);
                hs_sat26DSsh.data = [hs_sat26DSsg, hs_sat26DSsc];
                var hs_sat26DSsn = new $hs.Thunk();
                hs_sat26DSsn.evaluateOnce = function () {
                    var hs_sat26DSsj = new $hs.Thunk();
                    hs_sat26DSsj.evaluateOnce = function () {
                        var hs_sat26DSsi = new $hs.Thunk();
                        hs_sat26DSsi.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.GHCziClasses.hs_not, $hs.modules.GHCziList.hs_null);
                        };
                        return $hs.modules.GHCziList.hs_filter.hscall(hs_sat26DSsi);
                    };
                    var hs_sat26DSsm = new $hs.Thunk();
                    hs_sat26DSsm.evaluateOnce = function () {
                        var hs_sat26DSsk = new $hs.Data(1);
                        hs_sat26DSsk.data = [","];
                        var hs_sat26DSsl = new $hs.Data(2);
                        hs_sat26DSsl.data = [hs_sat26DSsk, $hs.modules.GHCziTypes.hs_ZMZN];
                        return $hs.modules.DataziList.hs_intercalate.hscall(hs_sat26DSsl);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DSsm, hs_sat26DSsj);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DSsn, hs_sat26DSsh);
            };
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DSso, hs_sat26DSs2);
        };
        var hs_sat26DSsq = new $hs.Data(1);
        hs_sat26DSsq.data = ["["];
        var $res = new $hs.Data(2);
        $res.data = [hs_sat26DSsq, hs_sat26DSsp];
        return $res;
    };
    this.hs_zdfShowEvent.data = [hs_zdcshowsPrec125vtV7, hs_zdcshow125vtUB, hs_zdcshowList125vtV5];
    hs_zdcshowList125vtV5.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall($hs.modules.SystemziEventziInternal.hs_zdfShowEvent);
    };
    hs_zdcshowsPrec125vtV7.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowsPrec.hscall($hs.modules.SystemziEventziInternal.hs_zdfShowEvent);
    };
    hs_a625vtV9.evaluate = function (hs_ds26DSrs, hs_ds126DSrt) {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_ds26DSrs, hs_ds126DSrt);
    };
    hs_evtCombine25ujPC.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a625vtV9.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_evtConcat25ujPE.evaluateOnce = function () {
        return $hs.modules.DataziList.hs_foldlzq.hscall(hs_evtCombine25ujPC, hs_evtNothing25ujPs);
    };
    this.hs_zdfMonoidEvent.data = [hs_evtNothing25ujPs, hs_evtCombine25ujPC, hs_evtConcat25ujPE];
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
        return $hs.modules.SystemziEventziInternal.hs_Event.hscall(hs_eta1cW6l3);
    };
};
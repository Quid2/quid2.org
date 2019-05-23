
$hs.modules.GHCziConcziIO = new $hs.Module();
$hs.modules.GHCziConcziIO.dependencies = ["GHC.Prim", "GHC.Unit", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.Err", "System.Posix.Types", "System.Event.Thread"];
$hs.modules.GHCziConcziIO.initBeforeDependencies = function () {
    this.hs_ensureIOManagerIsRunning = new $hs.Thunk();
    this.hs_closeFdWith = new $hs.Func(2);
    this.hs_threadDelay = new $hs.Func(1);
    this.hs_registerDelay = new $hs.Func(1);
    this.hs_threadWaitRead = new $hs.Func(1);
    this.hs_threadWaitWrite = new $hs.Func(1);
    this.hs_ensureIOManagerIsRunning.evaluateOnce = function () {
        $hs.modules.GHCziConcziIO.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_closeFdWith.notEvaluated = true;
    this.hs_closeFdWith.evaluate = function (hs_close26DmyL, hs_fd26DmyM) {
        $hs.modules.GHCziConcziIO.loadDependencies();
        return this.evaluate(hs_close26DmyL, hs_fd26DmyM);
    };
    this.hs_threadDelay.notEvaluated = true;
    this.hs_threadDelay.evaluate = function (hs_time26DmyV) {
        $hs.modules.GHCziConcziIO.loadDependencies();
        return this.evaluate(hs_time26DmyV);
    };
    this.hs_registerDelay.notEvaluated = true;
    this.hs_registerDelay.evaluate = function (hs_usecs26Dmzf) {
        $hs.modules.GHCziConcziIO.loadDependencies();
        return this.evaluate(hs_usecs26Dmzf);
    };
    this.hs_threadWaitRead.notEvaluated = true;
    this.hs_threadWaitRead.evaluate = function (hs_fd26Dmzp) {
        $hs.modules.GHCziConcziIO.loadDependencies();
        return this.evaluate(hs_fd26Dmzp);
    };
    this.hs_threadWaitWrite.notEvaluated = true;
    this.hs_threadWaitWrite.evaluate = function (hs_fd26DmzJ) {
        $hs.modules.GHCziConcziIO.loadDependencies();
        return this.evaluate(hs_fd26DmzJ);
    };
};
$hs.modules.GHCziConcziIO.initAfterDependencies = function () {
    this.hs_closeFdWith.notEvaluated = false;
    this.hs_threadDelay.notEvaluated = false;
    this.hs_registerDelay.notEvaluated = false;
    this.hs_threadWaitRead.notEvaluated = false;
    this.hs_threadWaitWrite.notEvaluated = false;
    this.hs_ensureIOManagerIsRunning.evaluateOnce = function () {
        if ($hs.modules.SystemziEventziThread.hs_ensureIOManagerIsRunning.notEvaluated) {
            return $hs.modules.SystemziEventziThread.hs_ensureIOManagerIsRunning.hscall();
        } else {
            return $hs.modules.SystemziEventziThread.hs_ensureIOManagerIsRunning;
        }
    };
    this.hs_closeFdWith.evaluate = function (hs_close26DmyL, hs_fd26DmyM) {
        var hs_wild26DmzX = [$hs.modules.GHCziPrim.hs_realWorldzh, rtsSupportsBoundThreads()];
        var hs_ds126DmyJ = hs_wild26DmzX[1];
        var hs_wild126DmzV = hs_ds126DmyJ;
        if (hs_ds126DmyJ.notEvaluated) {
            hs_wild126DmzV = hs_ds126DmyJ.hscall();
        }
        switch (hs_wild126DmzV) {
        case 0:
            return hs_close26DmyL.hscall(hs_fd26DmyM);
        default:
            return $hs.modules.SystemziEventziThread.hs_closeFdWith.hscall(hs_close26DmyL, hs_fd26DmyM);
        }
    };
    this.hs_threadDelay.evaluate = function (hs_time26DmyV) {
        var hs_wild26DmA0 = [$hs.modules.GHCziPrim.hs_realWorldzh, rtsSupportsBoundThreads()];
        var hs_ds126DmyT = hs_wild26DmA0[1];
        var hs_wild126DmzY = hs_ds126DmyT;
        if (hs_ds126DmyT.notEvaluated) {
            hs_wild126DmzY = hs_ds126DmyT.hscall();
        }
        switch (hs_wild126DmzY) {
        case 0:
            var hs_sat26DmA2 = new $hs.Func(1);
            hs_sat26DmA2.evaluate = function (hs_s26Dmz3) {
                var hs_wild226DmA1 = hs_time26DmyV;
                if (hs_time26DmyV.notEvaluated) {
                    hs_wild226DmA1 = hs_time26DmyV.hscall();
                }
                var hs_timezh26Dmz2 = hs_wild226DmA1.data[0];
                throw "primitive operation delay#. Not implemeted yet.";
                return [hs_szq26Dmz5, $hs.modules.GHCziUnit.hs_Z0T];
            };
            var hs_sat26DmA3 = new $hs.Func(1);
            hs_sat26DmA3.evaluate = function (hs_tpl26DmyX) {
                if (hs_tpl26DmyX.notEvaluated) {
                    return hs_tpl26DmyX.hscall();
                } else {
                    return hs_tpl26DmyX;
                }
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DmA3, hs_sat26DmA2);
        default:
            return $hs.modules.SystemziEventziThread.hs_threadDelay.hscall(hs_time26DmyV);
        }
    };
    this.hs_registerDelay.evaluate = function (hs_usecs26Dmzf) {
        var hs_wild26DmA6 = [$hs.modules.GHCziPrim.hs_realWorldzh, rtsSupportsBoundThreads()];
        var hs_ds126Dmzd = hs_wild26DmA6[1];
        var hs_wild126DmA4 = hs_ds126Dmzd;
        if (hs_ds126Dmzd.notEvaluated) {
            hs_wild126DmA4 = hs_ds126Dmzd.hscall();
        }
        switch (hs_wild126DmA4) {
        case 0:
            var hs_sat26DmA7 = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("registerDelay: requires -threaded\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DmA7);
        default:
            return $hs.modules.SystemziEventziThread.hs_registerDelay.hscall(hs_usecs26Dmzf);
        }
    };
    this.hs_threadWaitRead.evaluate = function (hs_fd26Dmzp) {
        var hs_wild26DmAa = [$hs.modules.GHCziPrim.hs_realWorldzh, rtsSupportsBoundThreads()];
        var hs_ds126Dmzn = hs_wild26DmAa[1];
        var hs_wild126DmA8 = hs_ds126Dmzn;
        if (hs_ds126Dmzn.notEvaluated) {
            hs_wild126DmA8 = hs_ds126Dmzn.hscall();
        }
        switch (hs_wild126DmA8) {
        case 0:
            var hs_sat26DmAc = new $hs.Func(1);
            hs_sat26DmAc.evaluate = function (hs_s26Dmzx) {
                var hs_wild226DmAb = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralFd, $hs.modules.GHCziNum.hs_zdfNumInt, hs_fd26Dmzp);
                var hs_fdzh26Dmzw = hs_wild226DmAb.data[0];
                throw "primitive operation waitRead#. Not implemeted yet.";
                return [hs_szq26Dmzz, $hs.modules.GHCziUnit.hs_Z0T];
            };
            var hs_sat26DmAd = new $hs.Func(1);
            hs_sat26DmAd.evaluate = function (hs_tpl26Dmzr) {
                if (hs_tpl26Dmzr.notEvaluated) {
                    return hs_tpl26Dmzr.hscall();
                } else {
                    return hs_tpl26Dmzr;
                }
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DmAd, hs_sat26DmAc);
        default:
            return $hs.modules.SystemziEventziThread.hs_threadWaitRead.hscall(hs_fd26Dmzp);
        }
    };
    this.hs_threadWaitWrite.evaluate = function (hs_fd26DmzJ) {
        var hs_wild26DmAg = [$hs.modules.GHCziPrim.hs_realWorldzh, rtsSupportsBoundThreads()];
        var hs_ds126DmzH = hs_wild26DmAg[1];
        var hs_wild126DmAe = hs_ds126DmzH;
        if (hs_ds126DmzH.notEvaluated) {
            hs_wild126DmAe = hs_ds126DmzH.hscall();
        }
        switch (hs_wild126DmAe) {
        case 0:
            var hs_sat26DmAi = new $hs.Func(1);
            hs_sat26DmAi.evaluate = function (hs_s26DmzR) {
                var hs_wild226DmAh = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralFd, $hs.modules.GHCziNum.hs_zdfNumInt, hs_fd26DmzJ);
                var hs_fdzh26DmzQ = hs_wild226DmAh.data[0];
                throw "primitive operation waitWrite#. Not implemeted yet.";
                return [hs_szq26DmzT, $hs.modules.GHCziUnit.hs_Z0T];
            };
            var hs_sat26DmAj = new $hs.Func(1);
            hs_sat26DmAj.evaluate = function (hs_tpl26DmzL) {
                if (hs_tpl26DmzL.notEvaluated) {
                    return hs_tpl26DmzL.hscall();
                } else {
                    return hs_tpl26DmzL;
                }
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DmAj, hs_sat26DmAi);
        default:
            return $hs.modules.SystemziEventziThread.hs_threadWaitWrite.hscall(hs_fd26DmzJ);
        }
    };
};
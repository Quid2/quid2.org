
$hs.modules.GHCziConcziIO = new $hs.Module();
$hs.modules.GHCziConcziIO.dependencies = ["GHC.Prim", "GHC.CString", "GHC.Unit", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.Err", "System.Posix.Types", "GHC.Event.Thread"];
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
    this.hs_closeFdWith.evaluate = function (hs_close26CY7t, hs_fd26CY7u) {
        $hs.modules.GHCziConcziIO.loadDependencies();
        return this.evaluate(hs_close26CY7t, hs_fd26CY7u);
    };
    this.hs_threadDelay.notEvaluated = true;
    this.hs_threadDelay.evaluate = function (hs_time26CY7D) {
        $hs.modules.GHCziConcziIO.loadDependencies();
        return this.evaluate(hs_time26CY7D);
    };
    this.hs_registerDelay.notEvaluated = true;
    this.hs_registerDelay.evaluate = function (hs_usecs26CY7X) {
        $hs.modules.GHCziConcziIO.loadDependencies();
        return this.evaluate(hs_usecs26CY7X);
    };
    this.hs_threadWaitRead.notEvaluated = true;
    this.hs_threadWaitRead.evaluate = function (hs_fd26CY87) {
        $hs.modules.GHCziConcziIO.loadDependencies();
        return this.evaluate(hs_fd26CY87);
    };
    this.hs_threadWaitWrite.notEvaluated = true;
    this.hs_threadWaitWrite.evaluate = function (hs_fd26CY8r) {
        $hs.modules.GHCziConcziIO.loadDependencies();
        return this.evaluate(hs_fd26CY8r);
    };
};
$hs.modules.GHCziConcziIO.initAfterDependencies = function () {
    this.hs_closeFdWith.notEvaluated = false;
    this.hs_threadDelay.notEvaluated = false;
    this.hs_registerDelay.notEvaluated = false;
    this.hs_threadWaitRead.notEvaluated = false;
    this.hs_threadWaitWrite.notEvaluated = false;
    this.hs_ensureIOManagerIsRunning.evaluateOnce = function () {
        if ($hs.modules.GHCziEventziThread.hs_ensureIOManagerIsRunning.notEvaluated) {
            return $hs.modules.GHCziEventziThread.hs_ensureIOManagerIsRunning.hscall();
        } else {
            return $hs.modules.GHCziEventziThread.hs_ensureIOManagerIsRunning;
        }
    };
    this.hs_closeFdWith.evaluate = function (hs_close26CY7t, hs_fd26CY7u) {
        var hs_wild26CY8E = [$hs.modules.GHCziPrim.hs_realWorldzh, rtsSupportsBoundThreads()];
        var hs_ds126CY7r = hs_wild26CY8E[1];
        var hs_wild126CY8D = hs_ds126CY7r;
        if (hs_ds126CY7r.notEvaluated) {
            hs_wild126CY8D = hs_ds126CY7r.hscall();
        }
        switch (hs_wild126CY8D) {
        case 0:
            return hs_close26CY7t.hscall(hs_fd26CY7u);
        default:
            return $hs.modules.GHCziEventziThread.hs_closeFdWith.hscall(hs_close26CY7t, hs_fd26CY7u);
        }
    };
    this.hs_threadDelay.evaluate = function (hs_time26CY7D) {
        var hs_wild26CY8I = [$hs.modules.GHCziPrim.hs_realWorldzh, rtsSupportsBoundThreads()];
        var hs_ds126CY7B = hs_wild26CY8I[1];
        var hs_wild126CY8H = hs_ds126CY7B;
        if (hs_ds126CY7B.notEvaluated) {
            hs_wild126CY8H = hs_ds126CY7B.hscall();
        }
        switch (hs_wild126CY8H) {
        case 0:
            var hs_sat26CY8K = new $hs.Func(1);
            hs_sat26CY8K.evaluate = function (hs_s26CY7L) {
                var hs_wild226CY8L = hs_time26CY7D;
                if (hs_time26CY7D.notEvaluated) {
                    hs_wild226CY8L = hs_time26CY7D.hscall();
                }
                var hs_timezh26CY7K = hs_wild226CY8L.data[0];
                throw "primitive operation delay#. Not implemeted yet.";
                return [hs_szq26CY7N, $hs.modules.GHCziUnit.hs_Z0T];
            };
            var hs_sat26CY8G = new $hs.Func(1);
            hs_sat26CY8G.evaluate = function (hs_tpl26CY7F) {
                if (hs_tpl26CY7F.notEvaluated) {
                    return hs_tpl26CY7F.hscall();
                } else {
                    return hs_tpl26CY7F;
                }
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CY8G, hs_sat26CY8K);
        default:
            return $hs.modules.GHCziEventziThread.hs_threadDelay.hscall(hs_time26CY7D);
        }
    };
    this.hs_registerDelay.evaluate = function (hs_usecs26CY7X) {
        var hs_wild26CY8N = [$hs.modules.GHCziPrim.hs_realWorldzh, rtsSupportsBoundThreads()];
        var hs_ds126CY7V = hs_wild26CY8N[1];
        var hs_wild126CY8M = hs_ds126CY7V;
        if (hs_ds126CY7V.notEvaluated) {
            hs_wild126CY8M = hs_ds126CY7V.hscall();
        }
        switch (hs_wild126CY8M) {
        case 0:
            var hs_sat26CY8P = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("registerDelay: requires -threaded\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CY8P);
        default:
            return $hs.modules.GHCziEventziThread.hs_registerDelay.hscall(hs_usecs26CY7X);
        }
    };
    this.hs_threadWaitRead.evaluate = function (hs_fd26CY87) {
        var hs_wild26CY8S = [$hs.modules.GHCziPrim.hs_realWorldzh, rtsSupportsBoundThreads()];
        var hs_ds126CY85 = hs_wild26CY8S[1];
        var hs_wild126CY8R = hs_ds126CY85;
        if (hs_ds126CY85.notEvaluated) {
            hs_wild126CY8R = hs_ds126CY85.hscall();
        }
        switch (hs_wild126CY8R) {
        case 0:
            var hs_sat26CY8U = new $hs.Func(1);
            hs_sat26CY8U.evaluate = function (hs_s26CY8f) {
                var hs_wild226CY8V = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralFd, $hs.modules.GHCziNum.hs_zdfNumInt, hs_fd26CY87);
                var hs_fdzh26CY8e = hs_wild226CY8V.data[0];
                throw "primitive operation waitRead#. Not implemeted yet.";
                return [hs_szq26CY8h, $hs.modules.GHCziUnit.hs_Z0T];
            };
            var hs_sat26CY8Q = new $hs.Func(1);
            hs_sat26CY8Q.evaluate = function (hs_tpl26CY89) {
                if (hs_tpl26CY89.notEvaluated) {
                    return hs_tpl26CY89.hscall();
                } else {
                    return hs_tpl26CY89;
                }
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CY8Q, hs_sat26CY8U);
        default:
            return $hs.modules.GHCziEventziThread.hs_threadWaitRead.hscall(hs_fd26CY87);
        }
    };
    this.hs_threadWaitWrite.evaluate = function (hs_fd26CY8r) {
        var hs_wild26CY8Y = [$hs.modules.GHCziPrim.hs_realWorldzh, rtsSupportsBoundThreads()];
        var hs_ds126CY8p = hs_wild26CY8Y[1];
        var hs_wild126CY8X = hs_ds126CY8p;
        if (hs_ds126CY8p.notEvaluated) {
            hs_wild126CY8X = hs_ds126CY8p.hscall();
        }
        switch (hs_wild126CY8X) {
        case 0:
            var hs_sat26CY90 = new $hs.Func(1);
            hs_sat26CY90.evaluate = function (hs_s26CY8z) {
                var hs_wild226CY91 = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralFd, $hs.modules.GHCziNum.hs_zdfNumInt, hs_fd26CY8r);
                var hs_fdzh26CY8y = hs_wild226CY91.data[0];
                throw "primitive operation waitWrite#. Not implemeted yet.";
                return [hs_szq26CY8B, $hs.modules.GHCziUnit.hs_Z0T];
            };
            var hs_sat26CY8W = new $hs.Func(1);
            hs_sat26CY8W.evaluate = function (hs_tpl26CY8t) {
                if (hs_tpl26CY8t.notEvaluated) {
                    return hs_tpl26CY8t.hscall();
                } else {
                    return hs_tpl26CY8t;
                }
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CY8W, hs_sat26CY90);
        default:
            return $hs.modules.GHCziEventziThread.hs_threadWaitWrite.hscall(hs_fd26CY8r);
        }
    };
};

$hs.modules.GHCziEventziManager = new $hs.Module();
$hs.modules.GHCziEventziManager.dependencies = ["GHC.Types", "GHC.CString", "GHC.Unit", "Control.Monad", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.Float", "GHC.Show", "GHC.Err", "GHC.Classes", "GHC.Conc.Signal", "GHC.IORef", "GHC.List", "GHC.MVar", "Control.Concurrent.MVar", "Control.Exception.Base", "Data.IORef", "Data.Monoid", "System.Posix.Types", "GHC.Event.Clock", "GHC.Event.Control", "GHC.Event.EPoll", "GHC.Event.IntMap", "GHC.Event.Internal", "GHC.Event.PSQ", "GHC.Event.Unique"];
$hs.modules.GHCziEventziManager.initBeforeDependencies = function () {
    this.hs_zdWEventManager = new $hs.Func(6);
    this.hs_zdWFdKey = new $hs.Func(2);
    this.hs_zdWFdData = new $hs.Func(3);
    this.hs_newDefaultBackend = new $hs.Thunk();
    this.hs_keyFd = new $hs.Func(1);
    this.hs_wakeManager = new $hs.Func(1);
    this.hs_zdfShowState = new $hs.Data(1);
    this.hs_zdfEqState = new $hs.Data(1);
    this.hs_zdfEqTimeoutKey = new $hs.Data(1);
    this.hs_zdfShowFdKey = new $hs.Data(1);
    this.hs_zdfEqFdKey = new $hs.Data(1);
    this.hs_shutdown = new $hs.Func(1);
    this.hs_finished = new $hs.Func(1);
    this.hs_cleanup = new $hs.Func(1);
    this.hs_updateTimeout = new $hs.Func(3);
    this.hs_unregisterTimeout = new $hs.Func(2);
    this.hs_registerTimeout = new $hs.Func(3);
    this.hs_registerFdzu = new $hs.Func(4);
    this.hs_newWith = new $hs.Func(1);
    this.hs_new = new $hs.Thunk();
    this.hs_registerFd = new $hs.Func(4);
    this.hs_unregisterFdzu = new $hs.Func(2);
    this.hs_unregisterFd = new $hs.Func(2);
    this.hs_closeFd = new $hs.Func(3);
    this.hs_step = new $hs.Func(2);
    this.hs_loop = new $hs.Func(1);
    this.hs_EventManager = new $hs.Func(6);
    this.hs_Created = new $hs.Data(1);
    this.hs_Running = new $hs.Data(2);
    this.hs_Dying = new $hs.Data(3);
    this.hs_Finished = new $hs.Data(4);
    this.hs_TK = new $hs.Func(1);
    this.hs_FdKey = new $hs.Func(2);
    this.hs_FdData = new $hs.Func(3);
    this.hs_zdWEventManager.notEvaluated = true;
    this.hs_zdWEventManager.evaluate = function (hs_tpl26Dtwu, hs_tpl26Dtww, hs_tpl26Dtwy, hs_tpl26DtwA, hs_tpl26DtwC, hs_tpl26DtwE) {
        $hs.modules.GHCziEventziManager.loadDependencies();
        return this.evaluate(hs_tpl26Dtwu, hs_tpl26Dtww, hs_tpl26Dtwy, hs_tpl26DtwA, hs_tpl26DtwC, hs_tpl26DtwE);
    };
    this.hs_zdWFdKey.notEvaluated = true;
    this.hs_zdWFdKey.evaluate = function (hs_tpl26DtwO, hs_tpl26DtwQ) {
        $hs.modules.GHCziEventziManager.loadDependencies();
        return this.evaluate(hs_tpl26DtwO, hs_tpl26DtwQ);
    };
    this.hs_zdWFdData.notEvaluated = true;
    this.hs_zdWFdData.evaluate = function (hs_tpl26DtwX, hs_tpl26DtwZ, hs_tpl26Dtx1) {
        $hs.modules.GHCziEventziManager.loadDependencies();
        return this.evaluate(hs_tpl26DtwX, hs_tpl26DtwZ, hs_tpl26Dtx1);
    };
    this.hs_newDefaultBackend.evaluateOnce = function () {
        $hs.modules.GHCziEventziManager.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_keyFd.notEvaluated = true;
    this.hs_keyFd.evaluate = function (hs_ds26Dtxk) {
        $hs.modules.GHCziEventziManager.loadDependencies();
        return this.evaluate(hs_ds26Dtxk);
    };
    this.hs_wakeManager.notEvaluated = true;
    this.hs_wakeManager.evaluate = function (hs_mgr26Dtxq) {
        $hs.modules.GHCziEventziManager.loadDependencies();
        return this.evaluate(hs_mgr26Dtxq);
    };
    this.hs_zdfShowState.notEvaluated = true;
    this.hs_zdfShowState.evaluate = function () {
        $hs.modules.GHCziEventziManager.loadDependencies();
        return this;
    };
    this.hs_zdfEqState.notEvaluated = true;
    this.hs_zdfEqState.evaluate = function () {
        $hs.modules.GHCziEventziManager.loadDependencies();
        return this;
    };
    this.hs_zdfEqTimeoutKey.notEvaluated = true;
    this.hs_zdfEqTimeoutKey.evaluate = function () {
        $hs.modules.GHCziEventziManager.loadDependencies();
        return this;
    };
    this.hs_zdfShowFdKey.notEvaluated = true;
    this.hs_zdfShowFdKey.evaluate = function () {
        $hs.modules.GHCziEventziManager.loadDependencies();
        return this;
    };
    this.hs_zdfEqFdKey.notEvaluated = true;
    this.hs_zdfEqFdKey.evaluate = function () {
        $hs.modules.GHCziEventziManager.loadDependencies();
        return this;
    };
    this.hs_shutdown.notEvaluated = true;
    this.hs_shutdown.evaluate = function (hs_mgr26DtzJ) {
        $hs.modules.GHCziEventziManager.loadDependencies();
        return this.evaluate(hs_mgr26DtzJ);
    };
    this.hs_finished.notEvaluated = true;
    this.hs_finished.evaluate = function (hs_mgr26DtAh) {
        $hs.modules.GHCziEventziManager.loadDependencies();
        return this.evaluate(hs_mgr26DtAh);
    };
    this.hs_cleanup.notEvaluated = true;
    this.hs_cleanup.evaluate = function (hs_ds26DtAt) {
        $hs.modules.GHCziEventziManager.loadDependencies();
        return this.evaluate(hs_ds26DtAt);
    };
    this.hs_updateTimeout.notEvaluated = true;
    this.hs_updateTimeout.evaluate = function (hs_mgr26DtAT, hs_ds26DtB6, hs_us26DtAN) {
        $hs.modules.GHCziEventziManager.loadDependencies();
        return this.evaluate(hs_mgr26DtAT, hs_ds26DtB6, hs_us26DtAN);
    };
    this.hs_unregisterTimeout.notEvaluated = true;
    this.hs_unregisterTimeout.evaluate = function (hs_mgr26DtBp, hs_ds26DtBB) {
        $hs.modules.GHCziEventziManager.loadDependencies();
        return this.evaluate(hs_mgr26DtBp, hs_ds26DtBB);
    };
    this.hs_registerTimeout.notEvaluated = true;
    this.hs_registerTimeout.evaluate = function (hs_mgr26DtBU, hs_us26DtC9, hs_cb26DtCv) {
        $hs.modules.GHCziEventziManager.loadDependencies();
        return this.evaluate(hs_mgr26DtBU, hs_us26DtC9, hs_cb26DtCv);
    };
    this.hs_registerFdzu.notEvaluated = true;
    this.hs_registerFdzu.evaluate = function (hs_ds26DtDf, hs_cb26DtDG, hs_fd26DtDt, hs_evs26DtDD) {
        $hs.modules.GHCziEventziManager.loadDependencies();
        return this.evaluate(hs_ds26DtDf, hs_cb26DtDG, hs_fd26DtDt, hs_evs26DtDD);
    };
    this.hs_newWith.notEvaluated = true;
    this.hs_newWith.evaluate = function (hs_be26DtEZ) {
        $hs.modules.GHCziEventziManager.loadDependencies();
        return this.evaluate(hs_be26DtEZ);
    };
    this.hs_new.evaluateOnce = function () {
        $hs.modules.GHCziEventziManager.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_registerFd.notEvaluated = true;
    this.hs_registerFd.evaluate = function (hs_mgr26DtIA, hs_cb26DtJ1, hs_fd26DtIO, hs_evs26DtIY) {
        $hs.modules.GHCziEventziManager.loadDependencies();
        return this.evaluate(hs_mgr26DtIA, hs_cb26DtJ1, hs_fd26DtIO, hs_evs26DtIY);
    };
    this.hs_unregisterFdzu.notEvaluated = true;
    this.hs_unregisterFdzu.evaluate = function (hs_ds26DtKo, hs_ds126DtKw) {
        $hs.modules.GHCziEventziManager.loadDependencies();
        return this.evaluate(hs_ds26DtKo, hs_ds126DtKw);
    };
    this.hs_unregisterFd.notEvaluated = true;
    this.hs_unregisterFd.evaluate = function (hs_mgr26DtLK, hs_reg26DtLL) {
        $hs.modules.GHCziEventziManager.loadDependencies();
        return this.evaluate(hs_mgr26DtLK, hs_reg26DtLL);
    };
    this.hs_closeFd.notEvaluated = true;
    this.hs_closeFd.evaluate = function (hs_mgr26DtLV, hs_close26DtM8, hs_fd26DtM7) {
        $hs.modules.GHCziEventziManager.loadDependencies();
        return this.evaluate(hs_mgr26DtLV, hs_close26DtM8, hs_fd26DtM7);
    };
    this.hs_step.notEvaluated = true;
    this.hs_step.evaluate = function (hs_mgr26DtMY, hs_tq26DtNf) {
        $hs.modules.GHCziEventziManager.loadDependencies();
        return this.evaluate(hs_mgr26DtMY, hs_tq26DtNf);
    };
    this.hs_loop.notEvaluated = true;
    this.hs_loop.evaluate = function (hs_mgr26DtOQ) {
        $hs.modules.GHCziEventziManager.loadDependencies();
        return this.evaluate(hs_mgr26DtOQ);
    };
    this.hs_EventManager.notEvaluated = true;
    this.hs_EventManager.evaluate = function (hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziEventziManager.loadDependencies();
        return this.evaluate(hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_Created.notEvaluated = true;
    this.hs_Created.evaluate = function () {
        $hs.modules.GHCziEventziManager.loadDependencies();
        return this;
    };
    this.hs_Running.notEvaluated = true;
    this.hs_Running.evaluate = function () {
        $hs.modules.GHCziEventziManager.loadDependencies();
        return this;
    };
    this.hs_Dying.notEvaluated = true;
    this.hs_Dying.evaluate = function () {
        $hs.modules.GHCziEventziManager.loadDependencies();
        return this;
    };
    this.hs_Finished.notEvaluated = true;
    this.hs_Finished.evaluate = function () {
        $hs.modules.GHCziEventziManager.loadDependencies();
        return this;
    };
    this.hs_TK.notEvaluated = true;
    this.hs_TK.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziEventziManager.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_FdKey.notEvaluated = true;
    this.hs_FdKey.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziEventziManager.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_FdData.notEvaluated = true;
    this.hs_FdData.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziEventziManager.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
};
$hs.modules.GHCziEventziManager.initAfterDependencies = function () {
    this.hs_zdWEventManager.notEvaluated = false;
    this.hs_zdWFdKey.notEvaluated = false;
    this.hs_zdWFdData.notEvaluated = false;
    this.hs_keyFd.notEvaluated = false;
    this.hs_wakeManager.notEvaluated = false;
    this.hs_zdfShowState.notEvaluated = false;
    this.hs_zdfShowState.evaluate = function () {
        return this;
    };
    this.hs_zdfEqState.notEvaluated = false;
    this.hs_zdfEqState.evaluate = function () {
        return this;
    };
    this.hs_zdfEqTimeoutKey.notEvaluated = false;
    this.hs_zdfEqTimeoutKey.evaluate = function () {
        return this;
    };
    this.hs_zdfShowFdKey.notEvaluated = false;
    this.hs_zdfShowFdKey.evaluate = function () {
        return this;
    };
    this.hs_zdfEqFdKey.notEvaluated = false;
    this.hs_zdfEqFdKey.evaluate = function () {
        return this;
    };
    this.hs_shutdown.notEvaluated = false;
    this.hs_finished.notEvaluated = false;
    this.hs_cleanup.notEvaluated = false;
    this.hs_updateTimeout.notEvaluated = false;
    this.hs_unregisterTimeout.notEvaluated = false;
    this.hs_registerTimeout.notEvaluated = false;
    this.hs_registerFdzu.notEvaluated = false;
    this.hs_newWith.notEvaluated = false;
    this.hs_registerFd.notEvaluated = false;
    this.hs_unregisterFdzu.notEvaluated = false;
    this.hs_unregisterFd.notEvaluated = false;
    this.hs_closeFd.notEvaluated = false;
    this.hs_step.notEvaluated = false;
    this.hs_loop.notEvaluated = false;
    this.hs_EventManager.notEvaluated = false;
    this.hs_Created.notEvaluated = false;
    this.hs_Created.evaluate = function () {
        return this;
    };
    this.hs_Running.notEvaluated = false;
    this.hs_Running.evaluate = function () {
        return this;
    };
    this.hs_Dying.notEvaluated = false;
    this.hs_Dying.evaluate = function () {
        return this;
    };
    this.hs_Finished.notEvaluated = false;
    this.hs_Finished.evaluate = function () {
        return this;
    };
    this.hs_TK.notEvaluated = false;
    this.hs_FdKey.notEvaluated = false;
    this.hs_FdData.notEvaluated = false;
    var hs_fdKey25u44l = new $hs.Func(1);
    var hs_keyUnique25u44i = new $hs.Func(1);
    var hs_zdcshowsPrec25v51k = new $hs.Func(2);
    var hs_sat26DtPS = new $hs.Thunk();
    var hs_zdcshowList25v51u = new $hs.Thunk();
    var hs_zdcshow25v51v = new $hs.Thunk();
    var hs_zdczeze25v51y = new $hs.Func(2);
    var hs_zdczsze25v51I = new $hs.Func(2);
    var hs_a25v51O = new $hs.Thunk();
    var hs_zdczeze125v51P = new $hs.Thunk();
    var hs_a125v51Q = new $hs.Thunk();
    var hs_zdczsze125v51R = new $hs.Thunk();
    var hs_zdcshowsPrec125v51S = new $hs.Func(2);
    var hs_sat26DtQo = new $hs.Thunk();
    var hs_zdcshowList125v52p = new $hs.Thunk();
    var hs_zdcshow125v52q = new $hs.Thunk();
    var hs_zdczeze225v52t = new $hs.Func(2);
    var hs_zdczsze225v52K = new $hs.Func(2);
    var hs_handleControlEvent25u44o = new $hs.Func(3);
    var hs_sat26DtSQ = new $hs.Thunk();
    var hs_sat26DtSR = new $hs.Thunk();
    var hs_eventsOf25u44A = new $hs.Thunk();
    var hs_pairEvents25u44B = new $hs.Func(3);
    this.hs_zdWEventManager.evaluate = function (hs_tpl26Dtwu, hs_tpl26Dtww, hs_tpl26Dtwy, hs_tpl26DtwA, hs_tpl26DtwC, hs_tpl26DtwE) {
        var hs_tpl26DtwG = hs_tpl26Dtwu;
        if (hs_tpl26Dtwu.notEvaluated) {
            hs_tpl26DtwG = hs_tpl26Dtwu.hscall();
        }
        var hs_tpl26DtwH = hs_tpl26Dtww;
        if (hs_tpl26Dtww.notEvaluated) {
            hs_tpl26DtwH = hs_tpl26Dtww.hscall();
        }
        var hs_tpl26DtwI = hs_tpl26Dtwy;
        if (hs_tpl26Dtwy.notEvaluated) {
            hs_tpl26DtwI = hs_tpl26Dtwy.hscall();
        }
        var hs_tpl26DtwJ = hs_tpl26DtwA;
        if (hs_tpl26DtwA.notEvaluated) {
            hs_tpl26DtwJ = hs_tpl26DtwA.hscall();
        }
        var hs_tpl26DtwK = hs_tpl26DtwC;
        if (hs_tpl26DtwC.notEvaluated) {
            hs_tpl26DtwK = hs_tpl26DtwC.hscall();
        }
        var hs_tpl26DtwL = hs_tpl26DtwE;
        if (hs_tpl26DtwE.notEvaluated) {
            hs_tpl26DtwL = hs_tpl26DtwE.hscall();
        }
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26DtwG, hs_tpl26DtwH, hs_tpl26DtwI, hs_tpl26DtwJ, hs_tpl26DtwK, hs_tpl26DtwL];
        return $res;
    };
    this.hs_zdWFdKey.evaluate = function (hs_tpl26DtwO, hs_tpl26DtwQ) {
        var hs_tpl26DtwS = hs_tpl26DtwO;
        if (hs_tpl26DtwO.notEvaluated) {
            hs_tpl26DtwS = hs_tpl26DtwO.hscall();
        }
        var hs_tpl26DtwT = hs_tpl26DtwQ;
        if (hs_tpl26DtwQ.notEvaluated) {
            hs_tpl26DtwT = hs_tpl26DtwQ.hscall();
        }
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26DtwS, hs_tpl26DtwT];
        return $res;
    };
    this.hs_zdWFdData.evaluate = function (hs_tpl26DtwX, hs_tpl26DtwZ, hs_tpl26Dtx1) {
        var hs_tpl26Dtx3 = hs_tpl26DtwX;
        if (hs_tpl26DtwX.notEvaluated) {
            hs_tpl26Dtx3 = hs_tpl26DtwX.hscall();
        }
        var hs_tpl26Dtx4 = hs_tpl26DtwZ;
        if (hs_tpl26DtwZ.notEvaluated) {
            hs_tpl26Dtx4 = hs_tpl26DtwZ.hscall();
        }
        var hs_tpl26Dtx5 = hs_tpl26Dtx1;
        if (hs_tpl26Dtx1.notEvaluated) {
            hs_tpl26Dtx5 = hs_tpl26Dtx1.hscall();
        }
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26Dtx3, hs_tpl26Dtx4, hs_tpl26Dtx5];
        return $res;
    };
    this.hs_newDefaultBackend.evaluateOnce = function () {
        if ($hs.modules.GHCziEventziEPoll.hs_new.notEvaluated) {
            return $hs.modules.GHCziEventziEPoll.hs_new.hscall();
        } else {
            return $hs.modules.GHCziEventziEPoll.hs_new;
        }
    };
    hs_fdKey25u44l.evaluate = function (hs_ds26Dtx7) {
        var hs_wild26DtPA = hs_ds26Dtx7;
        if (hs_ds26Dtx7.notEvaluated) {
            hs_wild26DtPA = hs_ds26Dtx7.hscall();
        }
        var hs_ds126Dtxc = hs_wild26DtPA.data[0];
        if (hs_ds126Dtxc.notEvaluated) {
            return hs_ds126Dtxc.hscall();
        } else {
            return hs_ds126Dtxc;
        }
    };
    hs_keyUnique25u44i.evaluate = function (hs_ds26Dtxe) {
        var hs_wild26DtPC = hs_ds26Dtxe;
        if (hs_ds26Dtxe.notEvaluated) {
            hs_wild26DtPC = hs_ds26Dtxe.hscall();
        }
        var hs_ds226Dtxi = hs_wild26DtPC.data[1];
        if (hs_ds226Dtxi.notEvaluated) {
            return hs_ds226Dtxi.hscall();
        } else {
            return hs_ds226Dtxi;
        }
    };
    this.hs_keyFd.evaluate = function (hs_ds26Dtxk) {
        var hs_wild26DtPE = hs_ds26Dtxk;
        if (hs_ds26Dtxk.notEvaluated) {
            hs_wild26DtPE = hs_ds26Dtxk.hscall();
        }
        var hs_ds126Dtxo = hs_wild26DtPE.data[0];
        if (hs_ds126Dtxo.notEvaluated) {
            return hs_ds126Dtxo.hscall();
        } else {
            return hs_ds126Dtxo;
        }
    };
    this.hs_wakeManager.evaluate = function (hs_mgr26Dtxq) {
        var hs_sat26DtPF = new $hs.Thunk();
        hs_sat26DtPF.evaluateOnce = function () {
            var hs_wild26DtPL = hs_mgr26Dtxq;
            if (hs_mgr26Dtxq.notEvaluated) {
                hs_wild26DtPL = hs_mgr26Dtxq.hscall();
            }
            var hs_ds526Dtxy = hs_wild26DtPL.data[5];
            if (hs_ds526Dtxy.notEvaluated) {
                return hs_ds526Dtxy.hscall();
            } else {
                return hs_ds526Dtxy;
            }
        };
        return $hs.modules.GHCziEventziControl.hs_sendWakeup.hscall(hs_sat26DtPF);
    };
    hs_zdcshowsPrec25v51k.evaluate = function (hs_ds26DtxJ, hs_ds126DtxD) {
        var hs_wild26DtPN = hs_ds126DtxD;
        if (hs_ds126DtxD.notEvaluated) {
            hs_wild26DtPN = hs_ds126DtxD.hscall();
        }
        switch (hs_wild26DtPN.tag) {
        case 1:
            var hs_sat26DtPQ = new $hs.Thunk();
            hs_sat26DtPQ.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Created\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DtPQ);
        case 2:
            var hs_sat26DtPM = new $hs.Thunk();
            hs_sat26DtPM.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Running\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DtPM);
        case 3:
            var hs_sat26DtPO = new $hs.Thunk();
            hs_sat26DtPO.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Dying\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DtPO);
        case 4:
            var hs_sat26DtPP = new $hs.Thunk();
            hs_sat26DtPP.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Finished\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DtPP);
        }
    };
    hs_sat26DtPS.evaluateOnce = function () {
        var hs_sat26DtPR = new $hs.Data(1);
        hs_sat26DtPR.data = [0];
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziEventziManager.hs_zdfShowState, hs_sat26DtPR);
    };
    this.hs_zdfShowState.data = [hs_zdcshowsPrec25v51k, hs_zdcshow25v51v, hs_zdcshowList25v51u];
    hs_zdcshowList25v51u.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DtPS);
    };
    hs_zdcshow25v51v.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziEventziManager.hs_zdfShowState);
    };
    hs_zdczeze25v51y.evaluate = function (hs_a226DtxR, hs_b26DtxT) {
        var hs_wild26DtPU = hs_a226DtxR;
        if (hs_a226DtxR.notEvaluated) {
            hs_wild26DtPU = hs_a226DtxR.hscall();
        }
        switch (hs_wild26DtPU.tag) {
        case 1:
            var hs_wild126DtPX = hs_b26DtxT;
            if (hs_b26DtxT.notEvaluated) {
                hs_wild126DtPX = hs_b26DtxT.hscall();
            }
            switch (hs_wild126DtPX.tag) {
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
            case 4:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_wild126DtPT = hs_b26DtxT;
            if (hs_b26DtxT.notEvaluated) {
                hs_wild126DtPT = hs_b26DtxT.hscall();
            }
            switch (hs_wild126DtPT.tag) {
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_wild126DtPV = hs_b26DtxT;
            if (hs_b26DtxT.notEvaluated) {
                hs_wild126DtPV = hs_b26DtxT.hscall();
            }
            switch (hs_wild126DtPV.tag) {
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 4:
            var hs_wild126DtPW = hs_b26DtxT;
            if (hs_b26DtxT.notEvaluated) {
                hs_wild126DtPW = hs_b26DtxT.hscall();
            }
            switch (hs_wild126DtPW.tag) {
            case 4:
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
    this.hs_zdfEqState.data = [hs_zdczeze25v51y, hs_zdczsze25v51I];
    hs_zdczsze25v51I.evaluate = function (hs_a226Dty1, hs_b26Dty2) {
        var hs_sat26DtPY = new $hs.Thunk();
        hs_sat26DtPY.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziEventziManager.hs_zdfEqState, hs_a226Dty1, hs_b26Dty2);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DtPY);
    };
    hs_a25v51O.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziEventziUnique.hs_zdfEqUnique);
    };
    hs_zdczeze125v51P.evaluateOnce = function () {
        if (hs_a25v51O.notEvaluated) {
            return hs_a25v51O.hscall();
        } else {
            return hs_a25v51O;
        }
    };
    hs_a125v51Q.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziEventziUnique.hs_zdfEqUnique);
    };
    hs_zdczsze125v51R.evaluateOnce = function () {
        if (hs_a125v51Q.notEvaluated) {
            return hs_a125v51Q.hscall();
        } else {
            return hs_a125v51Q;
        }
    };
    this.hs_zdfEqTimeoutKey.data = [hs_a25v51O, hs_a125v51Q];
    hs_zdcshowsPrec125v51S.evaluate = function (hs_a226Dtyf, hs_ds26Dtyb) {
        var hs_wild26DtQ0 = hs_ds26Dtyb;
        if (hs_ds26Dtyb.notEvaluated) {
            hs_wild26DtQ0 = hs_ds26Dtyb.hscall();
        }
        var hs_b126Dtyn = hs_wild26DtQ0.data[0];
        var hs_b226Dtyu = hs_wild26DtQ0.data[1];
        var hs_sat26DtQ1 = new $hs.Thunk();
        hs_sat26DtQ1.evaluateOnce = function () {
            var hs_sat26DtQ4 = new $hs.Thunk();
            hs_sat26DtQ4.evaluateOnce = function () {
                var hs_sat26DtQ7 = new $hs.Thunk();
                hs_sat26DtQ7.evaluateOnce = function () {
                    var hs_sat26DtQa = new $hs.Thunk();
                    hs_sat26DtQa.evaluateOnce = function () {
                        var hs_sat26DtQd = new $hs.Thunk();
                        hs_sat26DtQd.evaluateOnce = function () {
                            var hs_sat26DtQg = new $hs.Thunk();
                            hs_sat26DtQg.evaluateOnce = function () {
                                var hs_sat26DtQj = new $hs.Thunk();
                                hs_sat26DtQj.evaluateOnce = function () {
                                    var hs_sat26DtQm = new $hs.Data(1);
                                    hs_sat26DtQm.data = ["}"];
                                    var hs_sat26DtQl = new $hs.Data(2);
                                    hs_sat26DtQl.data = [hs_sat26DtQm, $hs.modules.GHCziTypes.hs_ZMZN];
                                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DtQl);
                                };
                                var hs_sat26DtQi = new $hs.Thunk();
                                hs_sat26DtQi.evaluateOnce = function () {
                                    var hs_sat26DtQk = new $hs.Data(1);
                                    hs_sat26DtQk.data = [0];
                                    return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziEventziUnique.hs_zdfShowUnique, hs_sat26DtQk, hs_b226Dtyu);
                                };
                                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DtQi, hs_sat26DtQj);
                            };
                            var hs_sat26DtQf = new $hs.Thunk();
                            hs_sat26DtQf.evaluateOnce = function () {
                                var hs_sat26DtQh = new $hs.Thunk();
                                hs_sat26DtQh.evaluateOnce = function () {
                                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("keyUnique = \x00");
                                };
                                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DtQh);
                            };
                            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DtQf, hs_sat26DtQg);
                        };
                        var hs_sat26DtQc = new $hs.Thunk();
                        hs_sat26DtQc.evaluateOnce = function () {
                            var hs_sat26DtQe = new $hs.Thunk();
                            hs_sat26DtQe.evaluateOnce = function () {
                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall(", \x00");
                            };
                            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DtQe);
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DtQc, hs_sat26DtQd);
                    };
                    var hs_sat26DtQ9 = new $hs.Thunk();
                    hs_sat26DtQ9.evaluateOnce = function () {
                        var hs_sat26DtQb = new $hs.Data(1);
                        hs_sat26DtQb.data = [0];
                        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfShowFd, hs_sat26DtQb, hs_b126Dtyn);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DtQ9, hs_sat26DtQa);
                };
                var hs_sat26DtQ6 = new $hs.Thunk();
                hs_sat26DtQ6.evaluateOnce = function () {
                    var hs_sat26DtQ8 = new $hs.Thunk();
                    hs_sat26DtQ8.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("keyFd = \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DtQ8);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DtQ6, hs_sat26DtQ7);
            };
            var hs_sat26DtQ3 = new $hs.Thunk();
            hs_sat26DtQ3.evaluateOnce = function () {
                var hs_sat26DtQ5 = new $hs.Thunk();
                hs_sat26DtQ5.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("FdKey {\x00");
                };
                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DtQ5);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DtQ3, hs_sat26DtQ4);
        };
        var hs_sat26DtPZ = new $hs.Thunk();
        hs_sat26DtPZ.evaluateOnce = function () {
            var hs_sat26DtQ2 = new $hs.Data(1);
            hs_sat26DtQ2.data = [11];
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_a226Dtyf, hs_sat26DtQ2);
        };
        return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DtPZ, hs_sat26DtQ1);
    };
    hs_sat26DtQo.evaluateOnce = function () {
        var hs_sat26DtQn = new $hs.Data(1);
        hs_sat26DtQn.data = [0];
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziEventziManager.hs_zdfShowFdKey, hs_sat26DtQn);
    };
    this.hs_zdfShowFdKey.data = [hs_zdcshowsPrec125v51S, hs_zdcshow125v52q, hs_zdcshowList125v52p];
    hs_zdcshowList125v52p.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DtQo);
    };
    hs_zdcshow125v52q.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziEventziManager.hs_zdfShowFdKey);
    };
    hs_zdczeze225v52t.evaluate = function (hs_ds26DtyM, hs_ds126DtyQ) {
        var hs_wild26DtQr = hs_ds26DtyM;
        if (hs_ds26DtyM.notEvaluated) {
            hs_wild26DtQr = hs_ds26DtyM.hscall();
        }
        var hs_a226DtyU = hs_wild26DtQr.data[0];
        var hs_a326DtyX = hs_wild26DtQr.data[1];
        var hs_wild126DtQq = hs_ds126DtyQ;
        if (hs_ds126DtyQ.notEvaluated) {
            hs_wild126DtQq = hs_ds126DtyQ.hscall();
        }
        var hs_b126DtyV = hs_wild126DtQq.data[0];
        var hs_b226DtyY = hs_wild126DtQq.data[1];
        var hs_sat26DtQs = new $hs.Thunk();
        hs_sat26DtQs.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziEventziUnique.hs_zdfEqUnique, hs_a326DtyX, hs_b226DtyY);
        };
        var hs_sat26DtQp = new $hs.Thunk();
        hs_sat26DtQp.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.SystemziPosixziTypes.hs_zdfEqFd, hs_a226DtyU, hs_b126DtyV);
        };
        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DtQp, hs_sat26DtQs);
    };
    this.hs_zdfEqFdKey.data = [hs_zdczeze225v52t, hs_zdczsze225v52K];
    hs_zdczsze225v52K.evaluate = function (hs_a226Dtz3, hs_b26Dtz4) {
        var hs_sat26DtQt = new $hs.Thunk();
        hs_sat26DtQt.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziEventziManager.hs_zdfEqFdKey, hs_a226Dtz3, hs_b26Dtz4);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DtQt);
    };
    hs_handleControlEvent25u44o.evaluate = function (hs_mgr26Dtz9, hs_reg26Dtzj, hs_zuevt26DtzH) {
        var hs_sat26DtQv = new $hs.Func(1);
        hs_sat26DtQv.evaluate = function (hs_msg26Dtzr) {
            var hs_wild26DtQH = hs_msg26Dtzr;
            if (hs_msg26Dtzr.notEvaluated) {
                hs_wild26DtQH = hs_msg26Dtzr.hscall();
            }
            switch (hs_wild26DtQH.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            case 2:
                var hs_sat26DtQG = new $hs.Thunk();
                hs_sat26DtQG.evaluateOnce = function () {
                    var hs_wild126DtQN = hs_mgr26Dtz9;
                    if (hs_mgr26Dtz9.notEvaluated) {
                        hs_wild126DtQN = hs_mgr26Dtz9.hscall();
                    }
                    var hs_ds326DtzA = hs_wild126DtQN.data[3];
                    if (hs_ds326DtzA.notEvaluated) {
                        return hs_ds326DtzA.hscall();
                    } else {
                        return hs_ds326DtzA;
                    }
                };
                return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_sat26DtQG, $hs.modules.GHCziEventziManager.hs_Finished);
            case 3:
                var hs_fp26DtzE = hs_wild26DtQH.data[0];
                var hs_s26DtzF = hs_wild26DtQH.data[1];
                return $hs.modules.GHCziConcziSignal.hs_runHandlers.hscall(hs_fp26DtzE, hs_s26DtzF);
            }
        };
        var hs_sat26DtQu = new $hs.Thunk();
        hs_sat26DtQu.evaluateOnce = function () {
            var hs_sat26DtQx = new $hs.Thunk();
            hs_sat26DtQx.evaluateOnce = function () {
                var hs_wild26DtQF = hs_reg26Dtzj;
                if (hs_reg26Dtzj.notEvaluated) {
                    hs_wild26DtQF = hs_reg26Dtzj.hscall();
                }
                var hs_ds26Dtzn = hs_wild26DtQF.data[0];
                if (hs_ds26Dtzn.notEvaluated) {
                    return hs_ds26Dtzn.hscall();
                } else {
                    return hs_ds26Dtzn;
                }
            };
            var hs_sat26DtQw = new $hs.Thunk();
            hs_sat26DtQw.evaluateOnce = function () {
                var hs_wild26DtQD = hs_mgr26Dtz9;
                if (hs_mgr26Dtz9.notEvaluated) {
                    hs_wild26DtQD = hs_mgr26Dtz9.hscall();
                }
                var hs_ds526Dtzh = hs_wild26DtQD.data[5];
                if (hs_ds526Dtzh.notEvaluated) {
                    return hs_ds526Dtzh.hscall();
                } else {
                    return hs_ds526Dtzh;
                }
            };
            return $hs.modules.GHCziEventziControl.hs_readControlMessage.hscall(hs_sat26DtQw, hs_sat26DtQx);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtQu, hs_sat26DtQv);
    };
    this.hs_shutdown.evaluate = function (hs_mgr26DtzJ) {
        var hs_sat26DtQP = new $hs.Func(1);
        hs_sat26DtQP.evaluate = function (hs_state26DtzZ) {
            var hs_sat26DtR0 = new $hs.Thunk();
            hs_sat26DtR0.evaluateOnce = function () {
                var hs_sat26DtR2 = new $hs.Thunk();
                hs_sat26DtR2.evaluateOnce = function () {
                    var hs_wild26DtR8 = hs_mgr26DtzJ;
                    if (hs_mgr26DtzJ.notEvaluated) {
                        hs_wild26DtR8 = hs_mgr26DtzJ.hscall();
                    }
                    var hs_ds526DtA9 = hs_wild26DtR8.data[5];
                    if (hs_ds526DtA9.notEvaluated) {
                        return hs_ds526DtA9.hscall();
                    } else {
                        return hs_ds526DtA9;
                    }
                };
                return $hs.modules.GHCziEventziControl.hs_sendDie.hscall(hs_sat26DtR2);
            };
            var hs_sat26DtQZ = new $hs.Thunk();
            hs_sat26DtQZ.evaluateOnce = function () {
                var hs_sat26DtR1 = new $hs.Thunk();
                hs_sat26DtR1.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziEventziManager.hs_zdfEqState, hs_state26DtzZ, $hs.modules.GHCziEventziManager.hs_Running);
                };
                return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtR1);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DtQZ, hs_sat26DtR0);
        };
        var hs_sat26DtQO = new $hs.Thunk();
        hs_sat26DtQO.evaluateOnce = function () {
            var hs_sat26DtQR = new $hs.Func(1);
            hs_sat26DtQR.evaluate = function (hs_s26DtzV) {
                var $res = new $hs.Data(1);
                $res.data = [$hs.modules.GHCziEventziManager.hs_Dying, hs_s26DtzV];
                return $res;
            };
            var hs_sat26DtQQ = new $hs.Thunk();
            hs_sat26DtQQ.evaluateOnce = function () {
                var hs_sat26DtQS = new $hs.Thunk();
                hs_sat26DtQS.evaluateOnce = function () {
                    var hs_wild26DtQY = hs_mgr26DtzJ;
                    if (hs_mgr26DtzJ.notEvaluated) {
                        hs_wild26DtQY = hs_mgr26DtzJ.hscall();
                    }
                    var hs_ds326DtzR = hs_wild26DtQY.data[3];
                    if (hs_ds326DtzR.notEvaluated) {
                        return hs_ds326DtzR.hscall();
                    } else {
                        return hs_ds326DtzR;
                    }
                };
                return $hs.modules.DataziIORef.hs_atomicModifyIORef.hscall(hs_sat26DtQS);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DtQQ, hs_sat26DtQR);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtQO, hs_sat26DtQP);
    };
    this.hs_finished.evaluate = function (hs_mgr26DtAh) {
        var hs_sat26DtRa = new $hs.Thunk();
        hs_sat26DtRa.evaluateOnce = function () {
            var hs_sat26DtRb = new $hs.Thunk();
            hs_sat26DtRb.evaluateOnce = function () {
                var hs_wild26DtRh = hs_mgr26DtAh;
                if (hs_mgr26DtAh.notEvaluated) {
                    hs_wild26DtRh = hs_mgr26DtAh.hscall();
                }
                var hs_ds326DtAp = hs_wild26DtRh.data[3];
                if (hs_ds326DtAp.notEvaluated) {
                    return hs_ds326DtAp.hscall();
                } else {
                    return hs_ds326DtAp;
                }
            };
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_sat26DtRb);
        };
        var hs_sat26DtR9 = new $hs.Func(1);
        hs_sat26DtR9.evaluate = function (hs_ds26DtAf) {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziEventziManager.hs_zdfEqState, hs_ds26DtAf, $hs.modules.GHCziEventziManager.hs_Finished);
        };
        return $hs.modules.ControlziMonad.hs_liftM.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtR9, hs_sat26DtRa);
    };
    this.hs_cleanup.evaluate = function (hs_ds26DtAt) {
        var hs_wild26DtRj = hs_ds26DtAt;
        if (hs_ds26DtAt.notEvaluated) {
            hs_wild26DtRj = hs_ds26DtAt.hscall();
        }
        var hs_ds126DtAD = hs_wild26DtRj.data[0];
        var hs_ds426DtAB = hs_wild26DtRj.data[3];
        var hs_ds626DtAF = hs_wild26DtRj.data[5];
        var hs_sat26DtRn = new $hs.Thunk();
        hs_sat26DtRn.evaluateOnce = function () {
            var hs_sat26DtRp = new $hs.Thunk();
            hs_sat26DtRp.evaluateOnce = function () {
                return $hs.modules.GHCziEventziControl.hs_closeControl.hscall(hs_ds626DtAF);
            };
            var hs_sat26DtRo = new $hs.Thunk();
            hs_sat26DtRo.evaluateOnce = function () {
                return $hs.modules.GHCziEventziInternal.hs_delete.hscall(hs_ds126DtAD);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtRo, hs_sat26DtRp);
        };
        var hs_sat26DtRi = new $hs.Thunk();
        hs_sat26DtRi.evaluateOnce = function () {
            return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_ds426DtAB, $hs.modules.GHCziEventziManager.hs_Finished);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtRi, hs_sat26DtRn);
    };
    this.hs_updateTimeout.evaluate = function (hs_mgr26DtAT, hs_ds26DtB6, hs_us26DtAN) {
        var hs_sat26DtRq = new $hs.Func(1);
        hs_sat26DtRq.evaluate = function (hs_now26DtAR) {
            var hs_expTime26DtAS = new $hs.Thunk();
            hs_expTime26DtAS.evaluateOnce = function () {
                var hs_sat26DtRM = new $hs.Thunk();
                hs_sat26DtRM.evaluateOnce = function () {
                    var hs_sat26DtRO = new $hs.Data(1);
                    hs_sat26DtRO.data = [1000000 % 1];
                    var hs_sat26DtRN = new $hs.Thunk();
                    hs_sat26DtRN.evaluateOnce = function () {
                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziFloat.hs_zdfNumDouble, hs_us26DtAN);
                    };
                    return $hs.modules.GHCziReal.hs_zs.hscall($hs.modules.GHCziFloat.hs_zdfFractionalDouble, hs_sat26DtRN, hs_sat26DtRO);
                };
                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_sat26DtRM, hs_now26DtAR);
            };
            var hs_sat26DtRs = new $hs.Thunk();
            hs_sat26DtRs.evaluateOnce = function () {
                var hs_sat26DtRF = new $hs.Thunk();
                hs_sat26DtRF.evaluateOnce = function () {
                    var hs_wild26DtRL = hs_mgr26DtAT;
                    if (hs_mgr26DtAT.notEvaluated) {
                        hs_wild26DtRL = hs_mgr26DtAT.hscall();
                    }
                    var hs_ds626DtBj = hs_wild26DtRL.data[5];
                    if (hs_ds626DtBj.notEvaluated) {
                        return hs_ds626DtBj.hscall();
                    } else {
                        return hs_ds626DtBj;
                    }
                };
                return $hs.modules.GHCziEventziControl.hs_sendWakeup.hscall(hs_sat26DtRF);
            };
            var hs_sat26DtRr = new $hs.Thunk();
            hs_sat26DtRr.evaluateOnce = function () {
                var hs_sat26DtRu = new $hs.Func(1);
                hs_sat26DtRu.evaluate = function (hs_f26DtB8) {
                    var hs_sat26DtRC = new $hs.Thunk();
                    hs_sat26DtRC.evaluateOnce = function () {
                        var hs_sat26DtRD = new $hs.Thunk();
                        hs_sat26DtRD.evaluateOnce = function () {
                            var hs_sat26DtRE = new $hs.Thunk();
                            hs_sat26DtRE.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_const.hscall(hs_expTime26DtAS);
                            };
                            return $hs.modules.GHCziEventziPSQ.hs_adjust.hscall(hs_sat26DtRE, hs_ds26DtB6);
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DtRD, hs_f26DtB8);
                    };
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26DtRC, $hs.modules.GHCziUnit.hs_Z0T];
                    return $res;
                };
                var hs_sat26DtRt = new $hs.Thunk();
                hs_sat26DtRt.evaluateOnce = function () {
                    var hs_sat26DtRv = new $hs.Thunk();
                    hs_sat26DtRv.evaluateOnce = function () {
                        var hs_wild26DtRB = hs_mgr26DtAT;
                        if (hs_mgr26DtAT.notEvaluated) {
                            hs_wild26DtRB = hs_mgr26DtAT.hscall();
                        }
                        var hs_ds326DtB1 = hs_wild26DtRB.data[2];
                        if (hs_ds326DtB1.notEvaluated) {
                            return hs_ds326DtB1.hscall();
                        } else {
                            return hs_ds326DtB1;
                        }
                    };
                    return $hs.modules.DataziIORef.hs_atomicModifyIORef.hscall(hs_sat26DtRv);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DtRt, hs_sat26DtRu);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtRr, hs_sat26DtRs);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziEventziClock.hs_getCurrentTime, hs_sat26DtRq);
    };
    this.hs_unregisterTimeout.evaluate = function (hs_mgr26DtBp, hs_ds26DtBB) {
        var hs_sat26DtRQ = new $hs.Thunk();
        hs_sat26DtRQ.evaluateOnce = function () {
            var hs_sat26DtS2 = new $hs.Thunk();
            hs_sat26DtS2.evaluateOnce = function () {
                var hs_wild26DtS8 = hs_mgr26DtBp;
                if (hs_mgr26DtBp.notEvaluated) {
                    hs_wild26DtS8 = hs_mgr26DtBp.hscall();
                }
                var hs_ds626DtBO = hs_wild26DtS8.data[5];
                if (hs_ds626DtBO.notEvaluated) {
                    return hs_ds626DtBO.hscall();
                } else {
                    return hs_ds626DtBO;
                }
            };
            return $hs.modules.GHCziEventziControl.hs_sendWakeup.hscall(hs_sat26DtS2);
        };
        var hs_sat26DtRP = new $hs.Thunk();
        hs_sat26DtRP.evaluateOnce = function () {
            var hs_sat26DtRS = new $hs.Func(1);
            hs_sat26DtRS.evaluate = function (hs_f26DtBD) {
                var hs_sat26DtS0 = new $hs.Thunk();
                hs_sat26DtS0.evaluateOnce = function () {
                    var hs_sat26DtS1 = new $hs.Thunk();
                    hs_sat26DtS1.evaluateOnce = function () {
                        return $hs.modules.GHCziEventziPSQ.hs_delete.hscall(hs_ds26DtBB);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DtS1, hs_f26DtBD);
                };
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26DtS0, $hs.modules.GHCziUnit.hs_Z0T];
                return $res;
            };
            var hs_sat26DtRR = new $hs.Thunk();
            hs_sat26DtRR.evaluateOnce = function () {
                var hs_sat26DtRT = new $hs.Thunk();
                hs_sat26DtRT.evaluateOnce = function () {
                    var hs_wild26DtRZ = hs_mgr26DtBp;
                    if (hs_mgr26DtBp.notEvaluated) {
                        hs_wild26DtRZ = hs_mgr26DtBp.hscall();
                    }
                    var hs_ds326DtBx = hs_wild26DtRZ.data[2];
                    if (hs_ds326DtBx.notEvaluated) {
                        return hs_ds326DtBx.hscall();
                    } else {
                        return hs_ds326DtBx;
                    }
                };
                return $hs.modules.DataziIORef.hs_atomicModifyIORef.hscall(hs_sat26DtRT);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DtRR, hs_sat26DtRS);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtRP, hs_sat26DtRQ);
    };
    this.hs_registerTimeout.evaluate = function (hs_mgr26DtBU, hs_us26DtC9, hs_cb26DtCv) {
        var hs_sat26DtSa = new $hs.Func(1);
        hs_sat26DtSa.evaluate = function (hs_key26DtC6) {
            var hs_nt26DtCu = hs_key26DtC6;
            if (hs_key26DtC6.notEvaluated) {
                hs_nt26DtCu = hs_key26DtC6.hscall();
            }
            var hs_sat26DtSk = new $hs.Thunk();
            hs_sat26DtSk.evaluateOnce = function () {
                var hs_sat26DtSL = new $hs.Thunk();
                hs_sat26DtSL.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DtSL, hs_nt26DtCu);
            };
            var hs_sat26DtSi = new $hs.Thunk();
            hs_sat26DtSi.evaluateOnce = function () {
                var hs_sat26DtSl = new $hs.Data(1);
                hs_sat26DtSl.data = [0];
                var hs_wild26DtSm = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_us26DtC9, hs_sat26DtSl);
                switch (hs_wild26DtSm.tag) {
                case 1:
                    var hs_sat26DtSn = new $hs.Func(1);
                    hs_sat26DtSn.evaluate = function (hs_now26DtCh) {
                        var hs_expTime26DtCi = new $hs.Thunk();
                        hs_expTime26DtCi.evaluateOnce = function () {
                            var hs_sat26DtSI = new $hs.Thunk();
                            hs_sat26DtSI.evaluateOnce = function () {
                                var hs_sat26DtSK = new $hs.Data(1);
                                hs_sat26DtSK.data = [1000000 % 1];
                                var hs_sat26DtSJ = new $hs.Thunk();
                                hs_sat26DtSJ.evaluateOnce = function () {
                                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziFloat.hs_zdfNumDouble, hs_us26DtC9);
                                };
                                return $hs.modules.GHCziReal.hs_zs.hscall($hs.modules.GHCziFloat.hs_zdfFractionalDouble, hs_sat26DtSJ, hs_sat26DtSK);
                            };
                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_sat26DtSI, hs_now26DtCh);
                        };
                        var hs_sat26DtSp = new $hs.Thunk();
                        hs_sat26DtSp.evaluateOnce = function () {
                            var hs_sat26DtSB = new $hs.Thunk();
                            hs_sat26DtSB.evaluateOnce = function () {
                                var hs_wild126DtSH = hs_mgr26DtBU;
                                if (hs_mgr26DtBU.notEvaluated) {
                                    hs_wild126DtSH = hs_mgr26DtBU.hscall();
                                }
                                var hs_ds526DtCI = hs_wild126DtSH.data[5];
                                if (hs_ds526DtCI.notEvaluated) {
                                    return hs_ds526DtCI.hscall();
                                } else {
                                    return hs_ds526DtCI;
                                }
                            };
                            return $hs.modules.GHCziEventziControl.hs_sendWakeup.hscall(hs_sat26DtSB);
                        };
                        var hs_sat26DtSo = new $hs.Thunk();
                        hs_sat26DtSo.evaluateOnce = function () {
                            var hs_sat26DtSr = new $hs.Func(1);
                            hs_sat26DtSr.evaluate = function (hs_f26DtCx) {
                                var hs_sat26DtSz = new $hs.Thunk();
                                hs_sat26DtSz.evaluateOnce = function () {
                                    var hs_sat26DtSA = new $hs.Thunk();
                                    hs_sat26DtSA.evaluateOnce = function () {
                                        return $hs.modules.GHCziEventziPSQ.hs_insert.hscall(hs_nt26DtCu, hs_expTime26DtCi, hs_cb26DtCv);
                                    };
                                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DtSA, hs_f26DtCx);
                                };
                                var $res = new $hs.Data(1);
                                $res.data = [hs_sat26DtSz, $hs.modules.GHCziUnit.hs_Z0T];
                                return $res;
                            };
                            var hs_sat26DtSq = new $hs.Thunk();
                            hs_sat26DtSq.evaluateOnce = function () {
                                var hs_sat26DtSs = new $hs.Thunk();
                                hs_sat26DtSs.evaluateOnce = function () {
                                    var hs_wild126DtSy = hs_mgr26DtBU;
                                    if (hs_mgr26DtBU.notEvaluated) {
                                        hs_wild126DtSy = hs_mgr26DtBU.hscall();
                                    }
                                    var hs_ds226DtCq = hs_wild126DtSy.data[2];
                                    if (hs_ds226DtCq.notEvaluated) {
                                        return hs_ds226DtCq.hscall();
                                    } else {
                                        return hs_ds226DtCq;
                                    }
                                };
                                return $hs.modules.DataziIORef.hs_atomicModifyIORef.hscall(hs_sat26DtSs);
                            };
                            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DtSq, hs_sat26DtSr);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtSo, hs_sat26DtSp);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziEventziClock.hs_getCurrentTime, hs_sat26DtSn);
                case 2:
                    if (hs_cb26DtCv.notEvaluated) {
                        return hs_cb26DtCv.hscall();
                    } else {
                        return hs_cb26DtCv;
                    }
                }
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtSi, hs_sat26DtSk);
        };
        var hs_sat26DtS9 = new $hs.Thunk();
        hs_sat26DtS9.evaluateOnce = function () {
            var hs_sat26DtSb = new $hs.Thunk();
            hs_sat26DtSb.evaluateOnce = function () {
                var hs_wild26DtSh = hs_mgr26DtBU;
                if (hs_mgr26DtBU.notEvaluated) {
                    hs_wild26DtSh = hs_mgr26DtBU.hscall();
                }
                var hs_ds426DtC2 = hs_wild26DtSh.data[4];
                if (hs_ds426DtC2.notEvaluated) {
                    return hs_ds426DtC2.hscall();
                } else {
                    return hs_ds426DtC2;
                }
            };
            return $hs.modules.GHCziEventziUnique.hs_newUnique.hscall(hs_sat26DtSb);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtS9, hs_sat26DtSa);
    };
    hs_sat26DtSQ.evaluateOnce = function () {
        var hs_sat26DtSM = new $hs.Func(1);
        hs_sat26DtSM.evaluate = function (hs_ds26DtCS) {
            var hs_wild26DtSP = hs_ds26DtCS;
            if (hs_ds26DtCS.notEvaluated) {
                hs_wild26DtSP = hs_ds26DtCS.hscall();
            }
            var hs_ds226DtCX = hs_wild26DtSP.data[1];
            if (hs_ds226DtCX.notEvaluated) {
                return hs_ds226DtCX.hscall();
            } else {
                return hs_ds226DtCX;
            }
        };
        return $hs.modules.GHCziBase.hs_map.hscall(hs_sat26DtSM);
    };
    hs_sat26DtSR.evaluateOnce = function () {
        return $hs.modules.DataziMonoid.hs_mconcat.hscall($hs.modules.GHCziEventziInternal.hs_zdfMonoidEvent);
    };
    hs_eventsOf25u44A.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DtSR, hs_sat26DtSQ);
    };
    hs_pairEvents25u44B.evaluate = function (hs_prev26DtD3, hs_m26DtD6, hs_fd26DtD5) {
        var hs_sat26DtST = new $hs.Thunk();
        hs_sat26DtST.evaluateOnce = function () {
            var hs_wild26DtSU = $hs.modules.GHCziEventziIntMap.hs_lookup.hscall(hs_fd26DtD5, hs_m26DtD6);
            switch (hs_wild26DtSU.tag) {
            case 1:
                return $hs.modules.DataziMonoid.hs_mempty.hscall($hs.modules.GHCziEventziInternal.hs_zdfMonoidEvent);
            case 2:
                var hs_fds26DtD9 = hs_wild26DtSU.data[0];
                return hs_eventsOf25u44A.hscall(hs_fds26DtD9);
            }
        };
        var hs_sat26DtSS = new $hs.Thunk();
        hs_sat26DtSS.evaluateOnce = function () {
            return hs_eventsOf25u44A.hscall(hs_prev26DtD3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DtSS, hs_sat26DtST];
        return $res;
    };
    this.hs_registerFdzu.evaluate = function (hs_ds26DtDf, hs_cb26DtDG, hs_fd26DtDt, hs_evs26DtDD) {
        var hs_wild26DtSW = hs_ds26DtDf;
        if (hs_ds26DtDf.notEvaluated) {
            hs_wild26DtSW = hs_ds26DtDf.hscall();
        }
        var hs_ds126DtEx = hs_wild26DtSW.data[0];
        var hs_ds226DtDq = hs_wild26DtSW.data[1];
        var hs_ds526DtDn = hs_wild26DtSW.data[4];
        var hs_sat26DtT0 = new $hs.Func(1);
        hs_sat26DtT0.evaluate = function (hs_u26DtDw) {
            var hs_sat26DtT2 = new $hs.Func(1);
            hs_sat26DtT2.evaluate = function (hs_oldMap26DtDQ) {
                var hs_nt26DtDA = hs_fd26DtDt;
                if (hs_fd26DtDt.notEvaluated) {
                    hs_nt26DtDA = hs_fd26DtDt.hscall();
                }
                var hs_nt126DtDB = hs_u26DtDw;
                if (hs_u26DtDw.notEvaluated) {
                    hs_nt126DtDB = hs_u26DtDw.hscall();
                }
                var hs_tpl26DtDC = new $hs.Data(1);
                hs_tpl26DtDC.data = [hs_nt26DtDA, hs_nt126DtDB];
                var hs_nt226DtDM = hs_evs26DtDD;
                if (hs_evs26DtDD.notEvaluated) {
                    hs_nt226DtDM = hs_evs26DtDD.hscall();
                }
                var hs_tpl126DtDN = hs_cb26DtDG;
                if (hs_cb26DtDG.notEvaluated) {
                    hs_tpl126DtDN = hs_cb26DtDG.hscall();
                }
                var hs_fdzq26DtDJ = new $hs.Thunk();
                hs_fdzq26DtDJ.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralFd, $hs.modules.GHCziNum.hs_zdfNumInt, hs_nt26DtDA);
                };
                var hs_ds726DtEa = new $hs.Thunk();
                var hs_newMap26DtE5 = new $hs.Thunk();
                hs_ds726DtEa.evaluateOnce = function () {
                    var hs_sat26DtTk = new $hs.Data(1);
                    hs_sat26DtTk.data = [hs_tpl26DtDC, hs_nt226DtDM, hs_tpl126DtDN];
                    var hs_sat26DtTl = new $hs.Data(2);
                    hs_sat26DtTl.data = [hs_sat26DtTk, $hs.modules.GHCziTypes.hs_ZMZN];
                    var hs_wild126DtTm = $hs.modules.GHCziEventziIntMap.hs_insertWith.hscall($hs.modules.GHCziBase.hs_zpzp, hs_fdzq26DtDJ, hs_sat26DtTl, hs_oldMap26DtDQ);
                    var hs_ds826DtDU = hs_wild126DtTm.data[0];
                    var hs_n26DtDW = hs_wild126DtTm.data[1];
                    var hs_wild226DtTj = hs_ds826DtDU;
                    if (hs_ds826DtDU.notEvaluated) {
                        hs_wild226DtTj = hs_ds826DtDU.hscall();
                    }
                    switch (hs_wild226DtTj.tag) {
                    case 1:
                        var hs_newMap126DtDY = hs_n26DtDW;
                        if (hs_n26DtDW.notEvaluated) {
                            hs_newMap126DtDY = hs_n26DtDW.hscall();
                        }
                        var hs_sat26DtTp = new $hs.Thunk();
                        hs_sat26DtTp.evaluateOnce = function () {
                            return $hs.modules.DataziMonoid.hs_mempty.hscall($hs.modules.GHCziEventziInternal.hs_zdfMonoidEvent);
                        };
                        var $res = new $hs.Data(1);
                        $res.data = [hs_newMap126DtDY, hs_sat26DtTp, hs_nt226DtDM];
                        return $res;
                    case 2:
                        var hs_prev26DtE3 = hs_wild226DtTj.data[0];
                        var hs_newMap126DtE2 = hs_n26DtDW;
                        if (hs_n26DtDW.notEvaluated) {
                            hs_newMap126DtE2 = hs_n26DtDW.hscall();
                        }
                        var hs_sat26DtTn = new $hs.Thunk();
                        hs_sat26DtTn.evaluateOnce = function () {
                            var hs_wild326DtTo = $hs.modules.GHCziEventziIntMap.hs_lookup.hscall(hs_fdzq26DtDJ, hs_newMap26DtE5);
                            switch (hs_wild326DtTo.tag) {
                            case 1:
                                return $hs.modules.DataziMonoid.hs_mempty.hscall($hs.modules.GHCziEventziInternal.hs_zdfMonoidEvent);
                            case 2:
                                var hs_fds26DtE8 = hs_wild326DtTo.data[0];
                                return hs_eventsOf25u44A.hscall(hs_fds26DtE8);
                            }
                        };
                        var hs_sat26DtTi = new $hs.Thunk();
                        hs_sat26DtTi.evaluateOnce = function () {
                            return hs_eventsOf25u44A.hscall(hs_prev26DtE3);
                        };
                        var $res = new $hs.Data(1);
                        $res.data = [hs_newMap126DtE2, hs_sat26DtTi, hs_sat26DtTn];
                        return $res;
                    }
                };
                hs_newMap26DtE5.evaluateOnce = function () {
                    var hs_ds826DtTh = hs_ds726DtEa;
                    if (hs_ds726DtEa.notEvaluated) {
                        hs_ds826DtTh = hs_ds726DtEa.hscall();
                    }
                    var hs_newMap126DtEf = hs_ds826DtTh.data[0];
                    if (hs_newMap126DtEf.notEvaluated) {
                        return hs_newMap126DtEf.hscall();
                    } else {
                        return hs_newMap126DtEf;
                    }
                };
                var hs_oldEvs26DtEm = new $hs.Thunk();
                hs_oldEvs26DtEm.evaluateOnce = function () {
                    var hs_ds826DtTs = hs_ds726DtEa;
                    if (hs_ds726DtEa.notEvaluated) {
                        hs_ds826DtTs = hs_ds726DtEa.hscall();
                    }
                    var hs_oldEvs126DtEl = hs_ds826DtTs.data[1];
                    if (hs_oldEvs126DtEl.notEvaluated) {
                        return hs_oldEvs126DtEl.hscall();
                    } else {
                        return hs_oldEvs126DtEl;
                    }
                };
                var hs_newEvs26DtEt = new $hs.Thunk();
                hs_newEvs26DtEt.evaluateOnce = function () {
                    var hs_ds826DtTe = hs_ds726DtEa;
                    if (hs_ds726DtEa.notEvaluated) {
                        hs_ds826DtTe = hs_ds726DtEa.hscall();
                    }
                    var hs_newEvs126DtEs = hs_ds826DtTe.data[2];
                    if (hs_newEvs126DtEs.notEvaluated) {
                        return hs_newEvs126DtEs.hscall();
                    } else {
                        return hs_newEvs126DtEs;
                    }
                };
                var hs_modify26DtEv = new $hs.Thunk();
                hs_modify26DtEv.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziEventziInternal.hs_zdfEqEvent, hs_oldEvs26DtEm, hs_newEvs26DtEt);
                };
                var hs_sat26DtT7 = new $hs.Thunk();
                hs_sat26DtT7.evaluateOnce = function () {
                    var hs_sat26DtTb = new $hs.Data(1);
                    hs_sat26DtTb.data = [hs_tpl26DtDC, hs_modify26DtEv];
                    var hs_sat26DtTa = new $hs.Data(1);
                    hs_sat26DtTa.data = [hs_newMap26DtE5, hs_sat26DtTb];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtTa);
                };
                var hs_sat26DtT3 = new $hs.Thunk();
                hs_sat26DtT3.evaluateOnce = function () {
                    var hs_sat26DtT9 = new $hs.Thunk();
                    hs_sat26DtT9.evaluateOnce = function () {
                        return $hs.modules.GHCziEventziInternal.hs_modifyFd.hscall(hs_ds126DtEx, hs_nt26DtDA, hs_oldEvs26DtEm, hs_newEvs26DtEt);
                    };
                    var hs_sat26DtT8 = new $hs.Thunk();
                    hs_sat26DtT8.evaluateOnce = function () {
                        return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_modify26DtEv);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DtT8, hs_sat26DtT9);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtT3, hs_sat26DtT7);
            };
            var hs_sat26DtT1 = new $hs.Thunk();
            hs_sat26DtT1.evaluateOnce = function () {
                return $hs.modules.ControlziConcurrentziMVar.hs_modifyMVar.hscall(hs_ds226DtDq);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DtT1, hs_sat26DtT2);
        };
        var hs_sat26DtSV = new $hs.Thunk();
        hs_sat26DtSV.evaluateOnce = function () {
            return $hs.modules.GHCziEventziUnique.hs_newUnique.hscall(hs_ds526DtDn);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtSV, hs_sat26DtT0);
    };
    this.hs_newWith.evaluate = function (hs_be26DtEZ) {
        var hs_sat26DtTu = new $hs.Func(1);
        hs_sat26DtTu.evaluate = function (hs_iofds26DtFa) {
            var hs_sat26DtTw = new $hs.Func(1);
            hs_sat26DtTw.evaluate = function (hs_timeouts26DtFd) {
                var hs_sat26DtTx = new $hs.Func(1);
                hs_sat26DtTx.evaluate = function (hs_ctrl26DtF1) {
                    var hs_sat26DtTz = new $hs.Func(1);
                    hs_sat26DtTz.evaluate = function (hs_state26DtEO) {
                        var hs_sat26DtTA = new $hs.Func(1);
                        hs_sat26DtTA.evaluate = function (hs_us26DtFi) {
                            var hs_sat26DtTC = new $hs.Func(1);
                            hs_sat26DtTC.evaluate = function (hs_ds26DtIp) {
                                var hs_mgr26DtFu = new $hs.Thunk();
                                hs_mgr26DtFu.evaluateOnce = function () {
                                    var hs_tpl26DtFo = hs_be26DtEZ;
                                    if (hs_be26DtEZ.notEvaluated) {
                                        hs_tpl26DtFo = hs_be26DtEZ.hscall();
                                    }
                                    var hs_tpl126DtFp = hs_iofds26DtFa;
                                    if (hs_iofds26DtFa.notEvaluated) {
                                        hs_tpl126DtFp = hs_iofds26DtFa.hscall();
                                    }
                                    var hs_nt26DtFq = hs_timeouts26DtFd;
                                    if (hs_timeouts26DtFd.notEvaluated) {
                                        hs_nt26DtFq = hs_timeouts26DtFd.hscall();
                                    }
                                    var hs_nt126DtFr = hs_state26DtEO;
                                    if (hs_state26DtEO.notEvaluated) {
                                        hs_nt126DtFr = hs_state26DtEO.hscall();
                                    }
                                    var hs_tpl226DtFs = hs_us26DtFi;
                                    if (hs_us26DtFi.notEvaluated) {
                                        hs_tpl226DtFs = hs_us26DtFi.hscall();
                                    }
                                    var hs_tpl326DtFt = hs_ctrl26DtF1;
                                    if (hs_ctrl26DtF1.notEvaluated) {
                                        hs_tpl326DtFt = hs_ctrl26DtF1.hscall();
                                    }
                                    var $res = new $hs.Data(1);
                                    $res.data = [hs_tpl26DtFo, hs_tpl126DtFp, hs_nt26DtFq, hs_nt126DtFr, hs_tpl226DtFs, hs_tpl326DtFt];
                                    return $res;
                                };
                                var hs_sat26DtTP = new $hs.Func(1);
                                hs_sat26DtTP.evaluate = function (hs_ds126DtIn) {
                                    var hs_sat26DtUp = new $hs.Func(1);
                                    hs_sat26DtUp.evaluate = function (hs_ds226DtIl) {
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_mgr26DtFu);
                                    };
                                    var hs_sat26DtUo = new $hs.Thunk();
                                    hs_sat26DtUo.evaluateOnce = function () {
                                        var hs_cb26DtGW = new $hs.Func(2);
                                        hs_cb26DtGW.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
                                            return hs_handleControlEvent25u44o.hscall(hs_mgr26DtFu, hs_eta1cW6l4, hs_eta1cW6l3);
                                        };
                                        var hs_fd26DtGY = new $hs.Thunk();
                                        hs_fd26DtGY.evaluateOnce = function () {
                                            return $hs.modules.GHCziEventziControl.hs_wakeupReadFd.hscall(hs_ctrl26DtF1);
                                        };
                                        var hs_wild26DtUr = hs_mgr26DtFu;
                                        if (hs_mgr26DtFu.notEvaluated) {
                                            hs_wild26DtUr = hs_mgr26DtFu.hscall();
                                        }
                                        var hs_ds226DtIb = hs_wild26DtUr.data[0];
                                        var hs_ds326DtH9 = hs_wild26DtUr.data[1];
                                        var hs_ds626DtH6 = hs_wild26DtUr.data[4];
                                        var hs_sat26DtUv = new $hs.Func(1);
                                        hs_sat26DtUv.evaluate = function (hs_u26DtHe) {
                                            var hs_sat26DtUx = new $hs.Func(1);
                                            hs_sat26DtUx.evaluate = function (hs_oldMap26DtHu) {
                                                var hs_nt26DtHi = hs_fd26DtGY;
                                                if (hs_fd26DtGY.notEvaluated) {
                                                    hs_nt26DtHi = hs_fd26DtGY.hscall();
                                                }
                                                var hs_nt126DtHj = hs_u26DtHe;
                                                if (hs_u26DtHe.notEvaluated) {
                                                    hs_nt126DtHj = hs_u26DtHe.hscall();
                                                }
                                                var hs_tpl26DtHk = new $hs.Data(1);
                                                hs_tpl26DtHk.data = [hs_nt26DtHi, hs_nt126DtHj];
                                                var hs_nt226DtHr = $hs.modules.GHCziEventziInternal.hs_evtRead;
                                                if ($hs.modules.GHCziEventziInternal.hs_evtRead.notEvaluated) {
                                                    hs_nt226DtHr = $hs.modules.GHCziEventziInternal.hs_evtRead.hscall();
                                                }
                                                var hs_fdzq26DtHo = new $hs.Thunk();
                                                hs_fdzq26DtHo.evaluateOnce = function () {
                                                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralFd, $hs.modules.GHCziNum.hs_zdfNumInt, hs_nt26DtHi);
                                                };
                                                var hs_ds826DtHO = new $hs.Thunk();
                                                var hs_newMap26DtHJ = new $hs.Thunk();
                                                hs_ds826DtHO.evaluateOnce = function () {
                                                    var hs_sat26DtUP = new $hs.Data(1);
                                                    hs_sat26DtUP.data = [hs_tpl26DtHk, hs_nt226DtHr, hs_cb26DtGW];
                                                    var hs_sat26DtUQ = new $hs.Data(2);
                                                    hs_sat26DtUQ.data = [hs_sat26DtUP, $hs.modules.GHCziTypes.hs_ZMZN];
                                                    var hs_wild126DtUR = $hs.modules.GHCziEventziIntMap.hs_insertWith.hscall($hs.modules.GHCziBase.hs_zpzp, hs_fdzq26DtHo, hs_sat26DtUQ, hs_oldMap26DtHu);
                                                    var hs_ds926DtHy = hs_wild126DtUR.data[0];
                                                    var hs_n26DtHA = hs_wild126DtUR.data[1];
                                                    var hs_wild226DtUO = hs_ds926DtHy;
                                                    if (hs_ds926DtHy.notEvaluated) {
                                                        hs_wild226DtUO = hs_ds926DtHy.hscall();
                                                    }
                                                    switch (hs_wild226DtUO.tag) {
                                                    case 1:
                                                        var hs_newMap126DtHC = hs_n26DtHA;
                                                        if (hs_n26DtHA.notEvaluated) {
                                                            hs_newMap126DtHC = hs_n26DtHA.hscall();
                                                        }
                                                        var hs_sat26DtUU = new $hs.Thunk();
                                                        hs_sat26DtUU.evaluateOnce = function () {
                                                            return $hs.modules.DataziMonoid.hs_mempty.hscall($hs.modules.GHCziEventziInternal.hs_zdfMonoidEvent);
                                                        };
                                                        var $res = new $hs.Data(1);
                                                        $res.data = [hs_newMap126DtHC, hs_sat26DtUU, hs_nt226DtHr];
                                                        return $res;
                                                    case 2:
                                                        var hs_prev26DtHH = hs_wild226DtUO.data[0];
                                                        var hs_newMap126DtHG = hs_n26DtHA;
                                                        if (hs_n26DtHA.notEvaluated) {
                                                            hs_newMap126DtHG = hs_n26DtHA.hscall();
                                                        }
                                                        var hs_sat26DtUS = new $hs.Thunk();
                                                        hs_sat26DtUS.evaluateOnce = function () {
                                                            var hs_wild326DtUT = $hs.modules.GHCziEventziIntMap.hs_lookup.hscall(hs_fdzq26DtHo, hs_newMap26DtHJ);
                                                            switch (hs_wild326DtUT.tag) {
                                                            case 1:
                                                                return $hs.modules.DataziMonoid.hs_mempty.hscall($hs.modules.GHCziEventziInternal.hs_zdfMonoidEvent);
                                                            case 2:
                                                                var hs_fds26DtHM = hs_wild326DtUT.data[0];
                                                                return hs_eventsOf25u44A.hscall(hs_fds26DtHM);
                                                            }
                                                        };
                                                        var hs_sat26DtUN = new $hs.Thunk();
                                                        hs_sat26DtUN.evaluateOnce = function () {
                                                            return hs_eventsOf25u44A.hscall(hs_prev26DtHH);
                                                        };
                                                        var $res = new $hs.Data(1);
                                                        $res.data = [hs_newMap126DtHG, hs_sat26DtUN, hs_sat26DtUS];
                                                        return $res;
                                                    }
                                                };
                                                hs_newMap26DtHJ.evaluateOnce = function () {
                                                    var hs_ds926DtUM = hs_ds826DtHO;
                                                    if (hs_ds826DtHO.notEvaluated) {
                                                        hs_ds926DtUM = hs_ds826DtHO.hscall();
                                                    }
                                                    var hs_newMap126DtHT = hs_ds926DtUM.data[0];
                                                    if (hs_newMap126DtHT.notEvaluated) {
                                                        return hs_newMap126DtHT.hscall();
                                                    } else {
                                                        return hs_newMap126DtHT;
                                                    }
                                                };
                                                var hs_oldEvs26DtI0 = new $hs.Thunk();
                                                hs_oldEvs26DtI0.evaluateOnce = function () {
                                                    var hs_ds926DtUX = hs_ds826DtHO;
                                                    if (hs_ds826DtHO.notEvaluated) {
                                                        hs_ds926DtUX = hs_ds826DtHO.hscall();
                                                    }
                                                    var hs_oldEvs126DtHZ = hs_ds926DtUX.data[1];
                                                    if (hs_oldEvs126DtHZ.notEvaluated) {
                                                        return hs_oldEvs126DtHZ.hscall();
                                                    } else {
                                                        return hs_oldEvs126DtHZ;
                                                    }
                                                };
                                                var hs_newEvs26DtI7 = new $hs.Thunk();
                                                hs_newEvs26DtI7.evaluateOnce = function () {
                                                    var hs_ds926DtUJ = hs_ds826DtHO;
                                                    if (hs_ds826DtHO.notEvaluated) {
                                                        hs_ds926DtUJ = hs_ds826DtHO.hscall();
                                                    }
                                                    var hs_newEvs126DtI6 = hs_ds926DtUJ.data[2];
                                                    if (hs_newEvs126DtI6.notEvaluated) {
                                                        return hs_newEvs126DtI6.hscall();
                                                    } else {
                                                        return hs_newEvs126DtI6;
                                                    }
                                                };
                                                var hs_modify26DtI9 = new $hs.Thunk();
                                                hs_modify26DtI9.evaluateOnce = function () {
                                                    return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziEventziInternal.hs_zdfEqEvent, hs_oldEvs26DtI0, hs_newEvs26DtI7);
                                                };
                                                var hs_sat26DtUC = new $hs.Thunk();
                                                hs_sat26DtUC.evaluateOnce = function () {
                                                    var hs_sat26DtUG = new $hs.Data(1);
                                                    hs_sat26DtUG.data = [hs_tpl26DtHk, hs_modify26DtI9];
                                                    var hs_sat26DtUF = new $hs.Data(1);
                                                    hs_sat26DtUF.data = [hs_newMap26DtHJ, hs_sat26DtUG];
                                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtUF);
                                                };
                                                var hs_sat26DtUy = new $hs.Thunk();
                                                hs_sat26DtUy.evaluateOnce = function () {
                                                    var hs_sat26DtUE = new $hs.Thunk();
                                                    hs_sat26DtUE.evaluateOnce = function () {
                                                        return $hs.modules.GHCziEventziInternal.hs_modifyFd.hscall(hs_ds226DtIb, hs_nt26DtHi, hs_oldEvs26DtI0, hs_newEvs26DtI7);
                                                    };
                                                    var hs_sat26DtUD = new $hs.Thunk();
                                                    hs_sat26DtUD.evaluateOnce = function () {
                                                        return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_modify26DtI9);
                                                    };
                                                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DtUD, hs_sat26DtUE);
                                                };
                                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtUy, hs_sat26DtUC);
                                            };
                                            var hs_sat26DtUw = new $hs.Thunk();
                                            hs_sat26DtUw.evaluateOnce = function () {
                                                return $hs.modules.ControlziConcurrentziMVar.hs_modifyMVar.hscall(hs_ds326DtH9);
                                            };
                                            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DtUw, hs_sat26DtUx);
                                        };
                                        var hs_sat26DtUq = new $hs.Thunk();
                                        hs_sat26DtUq.evaluateOnce = function () {
                                            return $hs.modules.GHCziEventziUnique.hs_newUnique.hscall(hs_ds626DtH6);
                                        };
                                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtUq, hs_sat26DtUv);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtUo, hs_sat26DtUp);
                                };
                                var hs_sat26DtTO = new $hs.Thunk();
                                hs_sat26DtTO.evaluateOnce = function () {
                                    var hs_cb26DtFw = new $hs.Func(2);
                                    hs_cb26DtFw.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
                                        return hs_handleControlEvent25u44o.hscall(hs_mgr26DtFu, hs_eta1cW6l4, hs_eta1cW6l3);
                                    };
                                    var hs_fd26DtFy = new $hs.Thunk();
                                    hs_fd26DtFy.evaluateOnce = function () {
                                        return $hs.modules.GHCziEventziControl.hs_controlReadFd.hscall(hs_ctrl26DtF1);
                                    };
                                    var hs_wild26DtTR = hs_mgr26DtFu;
                                    if (hs_mgr26DtFu.notEvaluated) {
                                        hs_wild26DtTR = hs_mgr26DtFu.hscall();
                                    }
                                    var hs_ds126DtGL = hs_wild26DtTR.data[0];
                                    var hs_ds226DtFJ = hs_wild26DtTR.data[1];
                                    var hs_ds526DtFG = hs_wild26DtTR.data[4];
                                    var hs_sat26DtTV = new $hs.Func(1);
                                    hs_sat26DtTV.evaluate = function (hs_u26DtFO) {
                                        var hs_sat26DtTX = new $hs.Func(1);
                                        hs_sat26DtTX.evaluate = function (hs_oldMap26DtG4) {
                                            var hs_nt26DtFS = hs_fd26DtFy;
                                            if (hs_fd26DtFy.notEvaluated) {
                                                hs_nt26DtFS = hs_fd26DtFy.hscall();
                                            }
                                            var hs_nt126DtFT = hs_u26DtFO;
                                            if (hs_u26DtFO.notEvaluated) {
                                                hs_nt126DtFT = hs_u26DtFO.hscall();
                                            }
                                            var hs_tpl26DtFU = new $hs.Data(1);
                                            hs_tpl26DtFU.data = [hs_nt26DtFS, hs_nt126DtFT];
                                            var hs_nt226DtG1 = $hs.modules.GHCziEventziInternal.hs_evtRead;
                                            if ($hs.modules.GHCziEventziInternal.hs_evtRead.notEvaluated) {
                                                hs_nt226DtG1 = $hs.modules.GHCziEventziInternal.hs_evtRead.hscall();
                                            }
                                            var hs_fdzq26DtFY = new $hs.Thunk();
                                            hs_fdzq26DtFY.evaluateOnce = function () {
                                                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralFd, $hs.modules.GHCziNum.hs_zdfNumInt, hs_nt26DtFS);
                                            };
                                            var hs_ds726DtGo = new $hs.Thunk();
                                            var hs_newMap26DtGj = new $hs.Thunk();
                                            hs_ds726DtGo.evaluateOnce = function () {
                                                var hs_sat26DtUf = new $hs.Data(1);
                                                hs_sat26DtUf.data = [hs_tpl26DtFU, hs_nt226DtG1, hs_cb26DtFw];
                                                var hs_sat26DtUg = new $hs.Data(2);
                                                hs_sat26DtUg.data = [hs_sat26DtUf, $hs.modules.GHCziTypes.hs_ZMZN];
                                                var hs_wild126DtUh = $hs.modules.GHCziEventziIntMap.hs_insertWith.hscall($hs.modules.GHCziBase.hs_zpzp, hs_fdzq26DtFY, hs_sat26DtUg, hs_oldMap26DtG4);
                                                var hs_ds826DtG8 = hs_wild126DtUh.data[0];
                                                var hs_n26DtGa = hs_wild126DtUh.data[1];
                                                var hs_wild226DtUe = hs_ds826DtG8;
                                                if (hs_ds826DtG8.notEvaluated) {
                                                    hs_wild226DtUe = hs_ds826DtG8.hscall();
                                                }
                                                switch (hs_wild226DtUe.tag) {
                                                case 1:
                                                    var hs_newMap126DtGc = hs_n26DtGa;
                                                    if (hs_n26DtGa.notEvaluated) {
                                                        hs_newMap126DtGc = hs_n26DtGa.hscall();
                                                    }
                                                    var hs_sat26DtUk = new $hs.Thunk();
                                                    hs_sat26DtUk.evaluateOnce = function () {
                                                        return $hs.modules.DataziMonoid.hs_mempty.hscall($hs.modules.GHCziEventziInternal.hs_zdfMonoidEvent);
                                                    };
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [hs_newMap126DtGc, hs_sat26DtUk, hs_nt226DtG1];
                                                    return $res;
                                                case 2:
                                                    var hs_prev26DtGh = hs_wild226DtUe.data[0];
                                                    var hs_newMap126DtGg = hs_n26DtGa;
                                                    if (hs_n26DtGa.notEvaluated) {
                                                        hs_newMap126DtGg = hs_n26DtGa.hscall();
                                                    }
                                                    var hs_sat26DtUi = new $hs.Thunk();
                                                    hs_sat26DtUi.evaluateOnce = function () {
                                                        var hs_wild326DtUj = $hs.modules.GHCziEventziIntMap.hs_lookup.hscall(hs_fdzq26DtFY, hs_newMap26DtGj);
                                                        switch (hs_wild326DtUj.tag) {
                                                        case 1:
                                                            return $hs.modules.DataziMonoid.hs_mempty.hscall($hs.modules.GHCziEventziInternal.hs_zdfMonoidEvent);
                                                        case 2:
                                                            var hs_fds26DtGm = hs_wild326DtUj.data[0];
                                                            return hs_eventsOf25u44A.hscall(hs_fds26DtGm);
                                                        }
                                                    };
                                                    var hs_sat26DtUd = new $hs.Thunk();
                                                    hs_sat26DtUd.evaluateOnce = function () {
                                                        return hs_eventsOf25u44A.hscall(hs_prev26DtGh);
                                                    };
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [hs_newMap126DtGg, hs_sat26DtUd, hs_sat26DtUi];
                                                    return $res;
                                                }
                                            };
                                            hs_newMap26DtGj.evaluateOnce = function () {
                                                var hs_ds826DtUc = hs_ds726DtGo;
                                                if (hs_ds726DtGo.notEvaluated) {
                                                    hs_ds826DtUc = hs_ds726DtGo.hscall();
                                                }
                                                var hs_newMap126DtGt = hs_ds826DtUc.data[0];
                                                if (hs_newMap126DtGt.notEvaluated) {
                                                    return hs_newMap126DtGt.hscall();
                                                } else {
                                                    return hs_newMap126DtGt;
                                                }
                                            };
                                            var hs_oldEvs26DtGA = new $hs.Thunk();
                                            hs_oldEvs26DtGA.evaluateOnce = function () {
                                                var hs_ds826DtUn = hs_ds726DtGo;
                                                if (hs_ds726DtGo.notEvaluated) {
                                                    hs_ds826DtUn = hs_ds726DtGo.hscall();
                                                }
                                                var hs_oldEvs126DtGz = hs_ds826DtUn.data[1];
                                                if (hs_oldEvs126DtGz.notEvaluated) {
                                                    return hs_oldEvs126DtGz.hscall();
                                                } else {
                                                    return hs_oldEvs126DtGz;
                                                }
                                            };
                                            var hs_newEvs26DtGH = new $hs.Thunk();
                                            hs_newEvs26DtGH.evaluateOnce = function () {
                                                var hs_ds826DtU9 = hs_ds726DtGo;
                                                if (hs_ds726DtGo.notEvaluated) {
                                                    hs_ds826DtU9 = hs_ds726DtGo.hscall();
                                                }
                                                var hs_newEvs126DtGG = hs_ds826DtU9.data[2];
                                                if (hs_newEvs126DtGG.notEvaluated) {
                                                    return hs_newEvs126DtGG.hscall();
                                                } else {
                                                    return hs_newEvs126DtGG;
                                                }
                                            };
                                            var hs_modify26DtGJ = new $hs.Thunk();
                                            hs_modify26DtGJ.evaluateOnce = function () {
                                                return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziEventziInternal.hs_zdfEqEvent, hs_oldEvs26DtGA, hs_newEvs26DtGH);
                                            };
                                            var hs_sat26DtU2 = new $hs.Thunk();
                                            hs_sat26DtU2.evaluateOnce = function () {
                                                var hs_sat26DtU6 = new $hs.Data(1);
                                                hs_sat26DtU6.data = [hs_tpl26DtFU, hs_modify26DtGJ];
                                                var hs_sat26DtU5 = new $hs.Data(1);
                                                hs_sat26DtU5.data = [hs_newMap26DtGj, hs_sat26DtU6];
                                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtU5);
                                            };
                                            var hs_sat26DtTY = new $hs.Thunk();
                                            hs_sat26DtTY.evaluateOnce = function () {
                                                var hs_sat26DtU4 = new $hs.Thunk();
                                                hs_sat26DtU4.evaluateOnce = function () {
                                                    return $hs.modules.GHCziEventziInternal.hs_modifyFd.hscall(hs_ds126DtGL, hs_nt26DtFS, hs_oldEvs26DtGA, hs_newEvs26DtGH);
                                                };
                                                var hs_sat26DtU3 = new $hs.Thunk();
                                                hs_sat26DtU3.evaluateOnce = function () {
                                                    return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_modify26DtGJ);
                                                };
                                                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DtU3, hs_sat26DtU4);
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtTY, hs_sat26DtU2);
                                        };
                                        var hs_sat26DtTW = new $hs.Thunk();
                                        hs_sat26DtTW.evaluateOnce = function () {
                                            return $hs.modules.ControlziConcurrentziMVar.hs_modifyMVar.hscall(hs_ds226DtFJ);
                                        };
                                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DtTW, hs_sat26DtTX);
                                    };
                                    var hs_sat26DtTQ = new $hs.Thunk();
                                    hs_sat26DtTQ.evaluateOnce = function () {
                                        return $hs.modules.GHCziEventziUnique.hs_newUnique.hscall(hs_ds526DtFG);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtTQ, hs_sat26DtTV);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtTO, hs_sat26DtTP);
                            };
                            var hs_sat26DtTB = new $hs.Thunk();
                            hs_sat26DtTB.evaluateOnce = function () {
                                var hs_sat26DtTE = new $hs.Thunk();
                                hs_sat26DtTE.evaluateOnce = function () {
                                    var hs_sat26DtTG = new $hs.Func(1);
                                    hs_sat26DtTG.evaluate = function (hs_st26DtEW) {
                                        var hs_sat26DtTK = new $hs.Thunk();
                                        hs_sat26DtTK.evaluateOnce = function () {
                                            var hs_sat26DtTN = new $hs.Thunk();
                                            hs_sat26DtTN.evaluateOnce = function () {
                                                return $hs.modules.GHCziEventziControl.hs_closeControl.hscall(hs_ctrl26DtF1);
                                            };
                                            var hs_sat26DtTM = new $hs.Thunk();
                                            hs_sat26DtTM.evaluateOnce = function () {
                                                return $hs.modules.GHCziEventziInternal.hs_delete.hscall(hs_be26DtEZ);
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtTM, hs_sat26DtTN);
                                        };
                                        var hs_sat26DtTJ = new $hs.Thunk();
                                        hs_sat26DtTJ.evaluateOnce = function () {
                                            var hs_sat26DtTL = new $hs.Thunk();
                                            hs_sat26DtTL.evaluateOnce = function () {
                                                return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziEventziManager.hs_zdfEqState, hs_st26DtEW, $hs.modules.GHCziEventziManager.hs_Finished);
                                            };
                                            return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtTL);
                                        };
                                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DtTJ, hs_sat26DtTK);
                                    };
                                    var hs_sat26DtTF = new $hs.Thunk();
                                    hs_sat26DtTF.evaluateOnce = function () {
                                        var hs_sat26DtTI = new $hs.Func(1);
                                        hs_sat26DtTI.evaluate = function (hs_s26DtES) {
                                            var $res = new $hs.Data(1);
                                            $res.data = [$hs.modules.GHCziEventziManager.hs_Finished, hs_s26DtES];
                                            return $res;
                                        };
                                        var hs_sat26DtTH = new $hs.Thunk();
                                        hs_sat26DtTH.evaluateOnce = function () {
                                            return $hs.modules.DataziIORef.hs_atomicModifyIORef.hscall(hs_state26DtEO);
                                        };
                                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DtTH, hs_sat26DtTI);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtTF, hs_sat26DtTG);
                                };
                                var hs_sat26DtTD = new $hs.Thunk();
                                hs_sat26DtTD.evaluateOnce = function () {
                                    return $hs.modules.DataziIORef.hs_mkWeakIORef.hscall(hs_state26DtEO);
                                };
                                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DtTD, hs_sat26DtTE);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtTB, hs_sat26DtTC);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziEventziUnique.hs_newSource, hs_sat26DtTA);
                    };
                    var hs_sat26DtTy = new $hs.Thunk();
                    hs_sat26DtTy.evaluateOnce = function () {
                        return $hs.modules.GHCziIORef.hs_newIORef.hscall($hs.modules.GHCziEventziManager.hs_Created);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtTy, hs_sat26DtTz);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziEventziControl.hs_newControl, hs_sat26DtTx);
            };
            var hs_sat26DtTv = new $hs.Thunk();
            hs_sat26DtTv.evaluateOnce = function () {
                return $hs.modules.GHCziIORef.hs_newIORef.hscall($hs.modules.GHCziBase.hs_id);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtTv, hs_sat26DtTw);
        };
        var hs_sat26DtTt = new $hs.Thunk();
        hs_sat26DtTt.evaluateOnce = function () {
            return $hs.modules.GHCziMVar.hs_newMVar.hscall($hs.modules.GHCziEventziIntMap.hs_empty);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtTt, hs_sat26DtTu);
    };
    this.hs_new.evaluateOnce = function () {
        return $hs.modules.ControlziMonad.hs_zezlzl.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziEventziManager.hs_newWith, $hs.modules.GHCziEventziEPoll.hs_new);
    };
    this.hs_registerFd.evaluate = function (hs_mgr26DtIA, hs_cb26DtJ1, hs_fd26DtIO, hs_evs26DtIY) {
        var hs_sat26DtV5 = new $hs.Func(1);
        hs_sat26DtV5.evaluate = function (hs_ds26DtK2) {
            var hs_wild26DtVF = hs_ds26DtK2;
            if (hs_ds26DtK2.notEvaluated) {
                hs_wild26DtVF = hs_ds26DtK2.hscall();
            }
            var hs_r26DtKj = hs_wild26DtVF.data[0];
            var hs_wake26DtK6 = hs_wild26DtVF.data[1];
            var hs_sat26DtVG = new $hs.Thunk();
            hs_sat26DtVG.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_r26DtKj);
            };
            var hs_sat26DtVE = new $hs.Thunk();
            hs_sat26DtVE.evaluateOnce = function () {
                var hs_sat26DtVI = new $hs.Thunk();
                hs_sat26DtVI.evaluateOnce = function () {
                    var hs_sat26DtVJ = new $hs.Thunk();
                    hs_sat26DtVJ.evaluateOnce = function () {
                        var hs_wild126DtVP = hs_mgr26DtIA;
                        if (hs_mgr26DtIA.notEvaluated) {
                            hs_wild126DtVP = hs_mgr26DtIA.hscall();
                        }
                        var hs_ds626DtKf = hs_wild126DtVP.data[5];
                        if (hs_ds626DtKf.notEvaluated) {
                            return hs_ds626DtKf.hscall();
                        } else {
                            return hs_ds626DtKf;
                        }
                    };
                    return $hs.modules.GHCziEventziControl.hs_sendWakeup.hscall(hs_sat26DtVJ);
                };
                var hs_sat26DtVH = new $hs.Thunk();
                hs_sat26DtVH.evaluateOnce = function () {
                    return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_wake26DtK6);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DtVH, hs_sat26DtVI);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtVE, hs_sat26DtVG);
        };
        var hs_sat26DtV4 = new $hs.Thunk();
        hs_sat26DtV4.evaluateOnce = function () {
            var hs_wild26DtV7 = hs_mgr26DtIA;
            if (hs_mgr26DtIA.notEvaluated) {
                hs_wild26DtV7 = hs_mgr26DtIA.hscall();
            }
            var hs_ds26DtJS = hs_wild26DtV7.data[0];
            var hs_ds126DtIL = hs_wild26DtV7.data[1];
            var hs_ds426DtII = hs_wild26DtV7.data[4];
            var hs_sat26DtVb = new $hs.Func(1);
            hs_sat26DtVb.evaluate = function (hs_u26DtIR) {
                var hs_sat26DtVd = new $hs.Func(1);
                hs_sat26DtVd.evaluate = function (hs_oldMap26DtJb) {
                    var hs_nt26DtIV = hs_fd26DtIO;
                    if (hs_fd26DtIO.notEvaluated) {
                        hs_nt26DtIV = hs_fd26DtIO.hscall();
                    }
                    var hs_nt126DtIW = hs_u26DtIR;
                    if (hs_u26DtIR.notEvaluated) {
                        hs_nt126DtIW = hs_u26DtIR.hscall();
                    }
                    var hs_tpl26DtIX = new $hs.Data(1);
                    hs_tpl26DtIX.data = [hs_nt26DtIV, hs_nt126DtIW];
                    var hs_nt226DtJ7 = hs_evs26DtIY;
                    if (hs_evs26DtIY.notEvaluated) {
                        hs_nt226DtJ7 = hs_evs26DtIY.hscall();
                    }
                    var hs_tpl126DtJ8 = hs_cb26DtJ1;
                    if (hs_cb26DtJ1.notEvaluated) {
                        hs_tpl126DtJ8 = hs_cb26DtJ1.hscall();
                    }
                    var hs_fdzq26DtJ4 = new $hs.Thunk();
                    hs_fdzq26DtJ4.evaluateOnce = function () {
                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralFd, $hs.modules.GHCziNum.hs_zdfNumInt, hs_nt26DtIV);
                    };
                    var hs_ds626DtJv = new $hs.Thunk();
                    var hs_newMap26DtJq = new $hs.Thunk();
                    hs_ds626DtJv.evaluateOnce = function () {
                        var hs_sat26DtVv = new $hs.Data(1);
                        hs_sat26DtVv.data = [hs_tpl26DtIX, hs_nt226DtJ7, hs_tpl126DtJ8];
                        var hs_sat26DtVw = new $hs.Data(2);
                        hs_sat26DtVw.data = [hs_sat26DtVv, $hs.modules.GHCziTypes.hs_ZMZN];
                        var hs_wild126DtVx = $hs.modules.GHCziEventziIntMap.hs_insertWith.hscall($hs.modules.GHCziBase.hs_zpzp, hs_fdzq26DtJ4, hs_sat26DtVw, hs_oldMap26DtJb);
                        var hs_ds726DtJf = hs_wild126DtVx.data[0];
                        var hs_n26DtJh = hs_wild126DtVx.data[1];
                        var hs_wild226DtVu = hs_ds726DtJf;
                        if (hs_ds726DtJf.notEvaluated) {
                            hs_wild226DtVu = hs_ds726DtJf.hscall();
                        }
                        switch (hs_wild226DtVu.tag) {
                        case 1:
                            var hs_newMap126DtJj = hs_n26DtJh;
                            if (hs_n26DtJh.notEvaluated) {
                                hs_newMap126DtJj = hs_n26DtJh.hscall();
                            }
                            var hs_sat26DtVA = new $hs.Thunk();
                            hs_sat26DtVA.evaluateOnce = function () {
                                return $hs.modules.DataziMonoid.hs_mempty.hscall($hs.modules.GHCziEventziInternal.hs_zdfMonoidEvent);
                            };
                            var $res = new $hs.Data(1);
                            $res.data = [hs_newMap126DtJj, hs_sat26DtVA, hs_nt226DtJ7];
                            return $res;
                        case 2:
                            var hs_prev26DtJo = hs_wild226DtVu.data[0];
                            var hs_newMap126DtJn = hs_n26DtJh;
                            if (hs_n26DtJh.notEvaluated) {
                                hs_newMap126DtJn = hs_n26DtJh.hscall();
                            }
                            var hs_sat26DtVy = new $hs.Thunk();
                            hs_sat26DtVy.evaluateOnce = function () {
                                var hs_wild326DtVz = $hs.modules.GHCziEventziIntMap.hs_lookup.hscall(hs_fdzq26DtJ4, hs_newMap26DtJq);
                                switch (hs_wild326DtVz.tag) {
                                case 1:
                                    return $hs.modules.DataziMonoid.hs_mempty.hscall($hs.modules.GHCziEventziInternal.hs_zdfMonoidEvent);
                                case 2:
                                    var hs_fds26DtJt = hs_wild326DtVz.data[0];
                                    return hs_eventsOf25u44A.hscall(hs_fds26DtJt);
                                }
                            };
                            var hs_sat26DtVt = new $hs.Thunk();
                            hs_sat26DtVt.evaluateOnce = function () {
                                return hs_eventsOf25u44A.hscall(hs_prev26DtJo);
                            };
                            var $res = new $hs.Data(1);
                            $res.data = [hs_newMap126DtJn, hs_sat26DtVt, hs_sat26DtVy];
                            return $res;
                        }
                    };
                    hs_newMap26DtJq.evaluateOnce = function () {
                        var hs_ds726DtVs = hs_ds626DtJv;
                        if (hs_ds626DtJv.notEvaluated) {
                            hs_ds726DtVs = hs_ds626DtJv.hscall();
                        }
                        var hs_newMap126DtJA = hs_ds726DtVs.data[0];
                        if (hs_newMap126DtJA.notEvaluated) {
                            return hs_newMap126DtJA.hscall();
                        } else {
                            return hs_newMap126DtJA;
                        }
                    };
                    var hs_oldEvs26DtJH = new $hs.Thunk();
                    hs_oldEvs26DtJH.evaluateOnce = function () {
                        var hs_ds726DtVD = hs_ds626DtJv;
                        if (hs_ds626DtJv.notEvaluated) {
                            hs_ds726DtVD = hs_ds626DtJv.hscall();
                        }
                        var hs_oldEvs126DtJG = hs_ds726DtVD.data[1];
                        if (hs_oldEvs126DtJG.notEvaluated) {
                            return hs_oldEvs126DtJG.hscall();
                        } else {
                            return hs_oldEvs126DtJG;
                        }
                    };
                    var hs_newEvs26DtJO = new $hs.Thunk();
                    hs_newEvs26DtJO.evaluateOnce = function () {
                        var hs_ds726DtVp = hs_ds626DtJv;
                        if (hs_ds626DtJv.notEvaluated) {
                            hs_ds726DtVp = hs_ds626DtJv.hscall();
                        }
                        var hs_newEvs126DtJN = hs_ds726DtVp.data[2];
                        if (hs_newEvs126DtJN.notEvaluated) {
                            return hs_newEvs126DtJN.hscall();
                        } else {
                            return hs_newEvs126DtJN;
                        }
                    };
                    var hs_modify26DtJQ = new $hs.Thunk();
                    hs_modify26DtJQ.evaluateOnce = function () {
                        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziEventziInternal.hs_zdfEqEvent, hs_oldEvs26DtJH, hs_newEvs26DtJO);
                    };
                    var hs_sat26DtVi = new $hs.Thunk();
                    hs_sat26DtVi.evaluateOnce = function () {
                        var hs_sat26DtVm = new $hs.Data(1);
                        hs_sat26DtVm.data = [hs_tpl26DtIX, hs_modify26DtJQ];
                        var hs_sat26DtVl = new $hs.Data(1);
                        hs_sat26DtVl.data = [hs_newMap26DtJq, hs_sat26DtVm];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtVl);
                    };
                    var hs_sat26DtVe = new $hs.Thunk();
                    hs_sat26DtVe.evaluateOnce = function () {
                        var hs_sat26DtVk = new $hs.Thunk();
                        hs_sat26DtVk.evaluateOnce = function () {
                            return $hs.modules.GHCziEventziInternal.hs_modifyFd.hscall(hs_ds26DtJS, hs_nt26DtIV, hs_oldEvs26DtJH, hs_newEvs26DtJO);
                        };
                        var hs_sat26DtVj = new $hs.Thunk();
                        hs_sat26DtVj.evaluateOnce = function () {
                            return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_modify26DtJQ);
                        };
                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DtVj, hs_sat26DtVk);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtVe, hs_sat26DtVi);
                };
                var hs_sat26DtVc = new $hs.Thunk();
                hs_sat26DtVc.evaluateOnce = function () {
                    return $hs.modules.ControlziConcurrentziMVar.hs_modifyMVar.hscall(hs_ds126DtIL);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DtVc, hs_sat26DtVd);
            };
            var hs_sat26DtV6 = new $hs.Thunk();
            hs_sat26DtV6.evaluateOnce = function () {
                return $hs.modules.GHCziEventziUnique.hs_newUnique.hscall(hs_ds426DtII);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtV6, hs_sat26DtVb);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtV4, hs_sat26DtV5);
    };
    this.hs_unregisterFdzu.evaluate = function (hs_ds26DtKo, hs_ds126DtKw) {
        var hs_wild26DtVS = hs_ds26DtKo;
        if (hs_ds26DtKo.notEvaluated) {
            hs_wild26DtVS = hs_ds26DtKo.hscall();
        }
        var hs_ds226DtLw = hs_wild26DtVS.data[0];
        var hs_ds326DtKA = hs_wild26DtVS.data[1];
        var hs_wild126DtVR = hs_ds126DtKw;
        if (hs_ds126DtKw.notEvaluated) {
            hs_wild126DtVR = hs_ds126DtKw.hscall();
        }
        var hs_fd26DtKE = hs_wild126DtVR.data[0];
        var hs_u26DtKK = hs_wild126DtVR.data[1];
        var hs_sat26DtVX = new $hs.Func(1);
        hs_sat26DtVX.evaluate = function (hs_oldMap26DtKU) {
            var hs_fdzq26DtKF = new $hs.Thunk();
            hs_fdzq26DtKF.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralFd, $hs.modules.GHCziNum.hs_zdfNumInt, hs_fd26DtKE);
            };
            var hs_ds826DtLe = new $hs.Thunk();
            hs_ds826DtLe.evaluateOnce = function () {
                var hs_sat26DtWf = new $hs.Func(1);
                hs_sat26DtWf.evaluate = function (hs_cbs26DtKO) {
                    var hs_sat26DtWn = new $hs.Thunk();
                    hs_sat26DtWn.evaluateOnce = function () {
                        var hs_sat26DtWp = new $hs.Thunk();
                        hs_sat26DtWp.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_zi.hscall(hs_keyUnique25u44i, hs_fdKey25u44l);
                        };
                        var hs_sat26DtWo = new $hs.Func(1);
                        hs_sat26DtWo.evaluate = function (hs_ds926DtKJ) {
                            return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziEventziUnique.hs_zdfEqUnique, hs_ds926DtKJ, hs_u26DtKK);
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DtWo, hs_sat26DtWp);
                    };
                    var hs_wild226DtKS = $hs.modules.GHCziList.hs_filter.hscall(hs_sat26DtWn, hs_cbs26DtKO);
                    switch (hs_wild226DtKS.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var $res = new $hs.Data(2);
                        $res.data = [hs_wild226DtKS];
                        return $res;
                    }
                };
                var hs_wild226DtWg = $hs.modules.GHCziEventziIntMap.hs_updateWith.hscall(hs_sat26DtWf, hs_fdzq26DtKF, hs_oldMap26DtKU);
                var hs_ds926DtKY = hs_wild226DtWg.data[0];
                var hs_ds1026DtL5 = hs_wild226DtWg.data[1];
                var hs_wild326DtWe = hs_ds926DtKY;
                if (hs_ds926DtKY.notEvaluated) {
                    hs_wild326DtWe = hs_ds926DtKY.hscall();
                }
                switch (hs_wild326DtWe.tag) {
                case 1:
                    var hs_newMap26DtL1 = hs_oldMap26DtKU;
                    if (hs_oldMap26DtKU.notEvaluated) {
                        hs_newMap26DtL1 = hs_oldMap26DtKU.hscall();
                    }
                    var hs_sat26DtWk = new $hs.Thunk();
                    hs_sat26DtWk.evaluateOnce = function () {
                        return $hs.modules.DataziMonoid.hs_mempty.hscall($hs.modules.GHCziEventziInternal.hs_zdfMonoidEvent);
                    };
                    var hs_sat26DtWj = new $hs.Thunk();
                    hs_sat26DtWj.evaluateOnce = function () {
                        return $hs.modules.DataziMonoid.hs_mempty.hscall($hs.modules.GHCziEventziInternal.hs_zdfMonoidEvent);
                    };
                    var $res = new $hs.Data(1);
                    $res.data = [hs_newMap26DtL1, hs_sat26DtWj, hs_sat26DtWk];
                    return $res;
                case 2:
                    var hs_prev26DtL8 = hs_wild326DtWe.data[0];
                    var hs_newMap26DtL7 = hs_ds1026DtL5;
                    if (hs_ds1026DtL5.notEvaluated) {
                        hs_newMap26DtL7 = hs_ds1026DtL5.hscall();
                    }
                    var hs_sat26DtWh = new $hs.Thunk();
                    hs_sat26DtWh.evaluateOnce = function () {
                        var hs_wild426DtWi = $hs.modules.GHCziEventziIntMap.hs_lookup.hscall(hs_fdzq26DtKF, hs_newMap26DtL7);
                        switch (hs_wild426DtWi.tag) {
                        case 1:
                            return $hs.modules.DataziMonoid.hs_mempty.hscall($hs.modules.GHCziEventziInternal.hs_zdfMonoidEvent);
                        case 2:
                            var hs_fds26DtLc = hs_wild426DtWi.data[0];
                            return hs_eventsOf25u44A.hscall(hs_fds26DtLc);
                        }
                    };
                    var hs_sat26DtWd = new $hs.Thunk();
                    hs_sat26DtWd.evaluateOnce = function () {
                        return hs_eventsOf25u44A.hscall(hs_prev26DtL8);
                    };
                    var $res = new $hs.Data(1);
                    $res.data = [hs_newMap26DtL7, hs_sat26DtWd, hs_sat26DtWh];
                    return $res;
                }
            };
            var hs_newEvs26DtLl = new $hs.Thunk();
            hs_newEvs26DtLl.evaluateOnce = function () {
                var hs_ds926DtWc = hs_ds826DtLe;
                if (hs_ds826DtLe.notEvaluated) {
                    hs_ds926DtWc = hs_ds826DtLe.hscall();
                }
                var hs_newEvs126DtLk = hs_ds926DtWc.data[2];
                if (hs_newEvs126DtLk.notEvaluated) {
                    return hs_newEvs126DtLk.hscall();
                } else {
                    return hs_newEvs126DtLk;
                }
            };
            var hs_oldEvs26DtLs = new $hs.Thunk();
            hs_oldEvs26DtLs.evaluateOnce = function () {
                var hs_ds926DtW9 = hs_ds826DtLe;
                if (hs_ds826DtLe.notEvaluated) {
                    hs_ds926DtW9 = hs_ds826DtLe.hscall();
                }
                var hs_oldEvs126DtLr = hs_ds926DtW9.data[1];
                if (hs_oldEvs126DtLr.notEvaluated) {
                    return hs_oldEvs126DtLr.hscall();
                } else {
                    return hs_oldEvs126DtLr;
                }
            };
            var hs_modify26DtLu = new $hs.Thunk();
            hs_modify26DtLu.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziEventziInternal.hs_zdfEqEvent, hs_oldEvs26DtLs, hs_newEvs26DtLl);
            };
            var hs_sat26DtVZ = new $hs.Thunk();
            hs_sat26DtVZ.evaluateOnce = function () {
                var hs_sat26DtW3 = new $hs.Thunk();
                hs_sat26DtW3.evaluateOnce = function () {
                    var hs_ds926DtW6 = hs_ds826DtLe;
                    if (hs_ds826DtLe.notEvaluated) {
                        hs_ds926DtW6 = hs_ds826DtLe.hscall();
                    }
                    var hs_newMap26DtLD = hs_ds926DtW6.data[0];
                    if (hs_newMap26DtLD.notEvaluated) {
                        return hs_newMap26DtLD.hscall();
                    } else {
                        return hs_newMap26DtLD;
                    }
                };
                var hs_sat26DtW2 = new $hs.Data(1);
                hs_sat26DtW2.data = [hs_sat26DtW3, hs_modify26DtLu];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtW2);
            };
            var hs_sat26DtVY = new $hs.Thunk();
            hs_sat26DtVY.evaluateOnce = function () {
                var hs_sat26DtW1 = new $hs.Thunk();
                hs_sat26DtW1.evaluateOnce = function () {
                    return $hs.modules.GHCziEventziInternal.hs_modifyFd.hscall(hs_ds226DtLw, hs_fd26DtKE, hs_oldEvs26DtLs, hs_newEvs26DtLl);
                };
                var hs_sat26DtW0 = new $hs.Thunk();
                hs_sat26DtW0.evaluateOnce = function () {
                    return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_modify26DtLu);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DtW0, hs_sat26DtW1);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtVY, hs_sat26DtVZ);
        };
        var hs_sat26DtVQ = new $hs.Thunk();
        hs_sat26DtVQ.evaluateOnce = function () {
            return $hs.modules.ControlziConcurrentziMVar.hs_modifyMVar.hscall(hs_ds326DtKA);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DtVQ, hs_sat26DtVX);
    };
    this.hs_unregisterFd.evaluate = function (hs_mgr26DtLK, hs_reg26DtLL) {
        var hs_sat26DtWr = new $hs.Func(1);
        hs_sat26DtWr.evaluate = function (hs_wake26DtLO) {
            var hs_sat26DtWt = new $hs.Thunk();
            hs_sat26DtWt.evaluateOnce = function () {
                return $hs.modules.GHCziEventziManager.hs_wakeManager.hscall(hs_mgr26DtLK);
            };
            var hs_sat26DtWs = new $hs.Thunk();
            hs_sat26DtWs.evaluateOnce = function () {
                return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_wake26DtLO);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DtWs, hs_sat26DtWt);
        };
        var hs_sat26DtWq = new $hs.Thunk();
        hs_sat26DtWq.evaluateOnce = function () {
            return $hs.modules.GHCziEventziManager.hs_unregisterFdzu.hscall(hs_mgr26DtLK, hs_reg26DtLL);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtWq, hs_sat26DtWr);
    };
    this.hs_closeFd.evaluate = function (hs_mgr26DtLV, hs_close26DtM8, hs_fd26DtM7) {
        var hs_sat26DtWv = new $hs.Func(1);
        hs_sat26DtWv.evaluate = function (hs_fds26DtMI) {
            var hs_sat26DtX1 = new $hs.Func(1);
            hs_sat26DtX1.evaluate = function (hs_ds26DtML) {
                var hs_wild26DtX3 = hs_ds26DtML;
                if (hs_ds26DtML.notEvaluated) {
                    hs_wild26DtX3 = hs_ds26DtML.hscall();
                }
                var hs_reg26DtMQ = hs_wild26DtX3.data[0];
                var hs_ev26DtMR = hs_wild26DtX3.data[1];
                var hs_cb26DtMS = hs_wild26DtX3.data[2];
                var hs_sat26DtX2 = new $hs.Thunk();
                hs_sat26DtX2.evaluateOnce = function () {
                    return $hs.modules.DataziMonoid.hs_mappend.hscall($hs.modules.GHCziEventziInternal.hs_zdfMonoidEvent, hs_ev26DtMR, $hs.modules.GHCziEventziInternal.hs_evtClose);
                };
                return hs_cb26DtMS.hscall(hs_reg26DtMQ, hs_sat26DtX2);
            };
            var hs_sat26DtX0 = new $hs.Thunk();
            hs_sat26DtX0.evaluateOnce = function () {
                return $hs.modules.ControlziMonad.hs_forMzu.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_fds26DtMI);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DtX0, hs_sat26DtX1);
        };
        var hs_sat26DtWu = new $hs.Thunk();
        hs_sat26DtWu.evaluateOnce = function () {
            var hs_sat26DtWx = new $hs.Func(1);
            hs_sat26DtWx.evaluate = function (hs_oldMap26DtMb) {
                var hs_sat26DtWG = new $hs.Thunk();
                hs_sat26DtWG.evaluateOnce = function () {
                    var hs_sat26DtWJ = new $hs.Thunk();
                    hs_sat26DtWJ.evaluateOnce = function () {
                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralFd, $hs.modules.GHCziNum.hs_zdfNumInt, hs_fd26DtM7);
                    };
                    var hs_wild26DtWK = $hs.modules.GHCziEventziIntMap.hs_delete.hscall(hs_sat26DtWJ, hs_oldMap26DtMb);
                    var hs_ds26DtMf = hs_wild26DtWK.data[0];
                    var hs_ds126DtMj = hs_wild26DtWK.data[1];
                    var hs_wild126DtWI = hs_ds26DtMf;
                    if (hs_ds26DtMf.notEvaluated) {
                        hs_wild126DtWI = hs_ds26DtMf.hscall();
                    }
                    switch (hs_wild126DtWI.tag) {
                    case 1:
                        var hs_sat26DtWZ = new $hs.Data(1);
                        hs_sat26DtWZ.data = [hs_oldMap26DtMb, $hs.modules.GHCziTypes.hs_ZMZN];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtWZ);
                    case 2:
                        var hs_fds26DtMl = hs_wild126DtWI.data[0];
                        var hs_ds226DtMB = hs_ds126DtMj;
                        if (hs_ds126DtMj.notEvaluated) {
                            hs_ds226DtMB = hs_ds126DtMj.hscall();
                        }
                        var hs_sat26DtWL = new $hs.Thunk();
                        hs_sat26DtWL.evaluateOnce = function () {
                            var hs_sat26DtWY = new $hs.Data(1);
                            hs_sat26DtWY.data = [hs_ds226DtMB, hs_fds26DtMl];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtWY);
                        };
                        var hs_sat26DtWH = new $hs.Thunk();
                        hs_sat26DtWH.evaluateOnce = function () {
                            var hs_sat26DtWN = new $hs.Thunk();
                            hs_sat26DtWN.evaluateOnce = function () {
                                var hs_sat26DtWR = new $hs.Thunk();
                                hs_sat26DtWR.evaluateOnce = function () {
                                    var hs_wild226DtWX = hs_mgr26DtLV;
                                    if (hs_mgr26DtLV.notEvaluated) {
                                        hs_wild226DtWX = hs_mgr26DtLV.hscall();
                                    }
                                    var hs_ds826DtMx = hs_wild226DtWX.data[5];
                                    if (hs_ds826DtMx.notEvaluated) {
                                        return hs_ds826DtMx.hscall();
                                    } else {
                                        return hs_ds826DtMx;
                                    }
                                };
                                return $hs.modules.GHCziEventziControl.hs_sendWakeup.hscall(hs_sat26DtWR);
                            };
                            var hs_sat26DtWM = new $hs.Thunk();
                            hs_sat26DtWM.evaluateOnce = function () {
                                var hs_sat26DtWO = new $hs.Thunk();
                                hs_sat26DtWO.evaluateOnce = function () {
                                    var hs_sat26DtWQ = new $hs.Thunk();
                                    hs_sat26DtWQ.evaluateOnce = function () {
                                        return $hs.modules.DataziMonoid.hs_mempty.hscall($hs.modules.GHCziEventziInternal.hs_zdfMonoidEvent);
                                    };
                                    var hs_sat26DtWP = new $hs.Thunk();
                                    hs_sat26DtWP.evaluateOnce = function () {
                                        return hs_eventsOf25u44A.hscall(hs_fds26DtMl);
                                    };
                                    return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziEventziInternal.hs_zdfEqEvent, hs_sat26DtWP, hs_sat26DtWQ);
                                };
                                return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtWO);
                            };
                            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DtWM, hs_sat26DtWN);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtWH, hs_sat26DtWL);
                    }
                };
                var hs_sat26DtWF = new $hs.Thunk();
                hs_sat26DtWF.evaluateOnce = function () {
                    return hs_close26DtM8.hscall(hs_fd26DtM7);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtWF, hs_sat26DtWG);
            };
            var hs_sat26DtWw = new $hs.Thunk();
            hs_sat26DtWw.evaluateOnce = function () {
                var hs_sat26DtWy = new $hs.Thunk();
                hs_sat26DtWy.evaluateOnce = function () {
                    var hs_wild26DtWE = hs_mgr26DtLV;
                    if (hs_mgr26DtLV.notEvaluated) {
                        hs_wild26DtWE = hs_mgr26DtLV.hscall();
                    }
                    var hs_ds126DtM3 = hs_wild26DtWE.data[1];
                    if (hs_ds126DtM3.notEvaluated) {
                        return hs_ds126DtM3.hscall();
                    } else {
                        return hs_ds126DtM3;
                    }
                };
                return $hs.modules.ControlziConcurrentziMVar.hs_modifyMVar.hscall(hs_sat26DtWy);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DtWw, hs_sat26DtWx);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtWu, hs_sat26DtWv);
    };
    this.hs_step.evaluate = function (hs_mgr26DtMY, hs_tq26DtNf) {
        var hs_wild26DtO3 = hs_mgr26DtMY;
        if (hs_mgr26DtMY.notEvaluated) {
            hs_wild26DtO3 = hs_mgr26DtMY.hscall();
        }
        var hs_ds26DtNZ = hs_wild26DtO3.data[0];
        var hs_ds226DtN7 = hs_wild26DtO3.data[2];
        var hs_ds326DtOD = hs_wild26DtO3.data[3];
        var hs_sat26DtX8 = new $hs.Func(1);
        hs_sat26DtX8.evaluate = function (hs_ds626DtNV) {
            var hs_wild126DtXx = hs_ds626DtNV;
            if (hs_ds626DtNV.notEvaluated) {
                hs_wild126DtXx = hs_ds626DtNV.hscall();
            }
            var hs_timeout26DtO0 = hs_wild126DtXx.data[0];
            var hs_qzq26DtOK = hs_wild126DtXx.data[1];
            var hs_sat26DtXy = new $hs.Thunk();
            hs_sat26DtXy.evaluateOnce = function () {
                var hs_sat26DtXS = new $hs.Func(1);
                hs_sat26DtXS.evaluate = function (hs_state26DtOG) {
                    var hs_state126DtOI = hs_state26DtOG;
                    if (hs_state26DtOG.notEvaluated) {
                        hs_state126DtOI = hs_state26DtOG.hscall();
                    }
                    var hs_sat26DtXU = new $hs.Thunk();
                    hs_sat26DtXU.evaluateOnce = function () {
                        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziEventziManager.hs_zdfEqState, hs_state126DtOI, $hs.modules.GHCziEventziManager.hs_Running);
                    };
                    var hs_sat26DtXT = new $hs.Data(1);
                    hs_sat26DtXT.data = [hs_sat26DtXU, hs_qzq26DtOK];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtXT);
                };
                var hs_sat26DtXR = new $hs.Thunk();
                hs_sat26DtXR.evaluateOnce = function () {
                    return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_ds326DtOD);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtXR, hs_sat26DtXS);
            };
            var hs_sat26DtXw = new $hs.Thunk();
            hs_sat26DtXw.evaluateOnce = function () {
                var hs_sat26DtXz = new $hs.Func(2);
                hs_sat26DtXz.evaluate = function (hs_fd26DtOf, hs_evs26DtOs) {
                    var hs_sat26DtXB = new $hs.Func(1);
                    hs_sat26DtXB.evaluate = function (hs_fds26DtOh) {
                        var hs_sat26DtXK = new $hs.Thunk();
                        hs_sat26DtXK.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralFd, $hs.modules.GHCziNum.hs_zdfNumInt, hs_fd26DtOf);
                        };
                        var hs_wild226DtXL = $hs.modules.GHCziEventziIntMap.hs_lookup.hscall(hs_sat26DtXK, hs_fds26DtOh);
                        switch (hs_wild226DtXL.tag) {
                        case 1:
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                        case 2:
                            var hs_cbs26DtOk = hs_wild226DtXL.data[0];
                            var hs_sat26DtXM = new $hs.Func(1);
                            hs_sat26DtXM.evaluate = function (hs_ds726DtOn) {
                                var hs_wild326DtXO = hs_ds726DtOn;
                                if (hs_ds726DtOn.notEvaluated) {
                                    hs_wild326DtXO = hs_ds726DtOn.hscall();
                                }
                                var hs_reg26DtOw = hs_wild326DtXO.data[0];
                                var hs_ev26DtOt = hs_wild326DtXO.data[1];
                                var hs_cb26DtOx = hs_wild326DtXO.data[2];
                                var hs_sat26DtXP = new $hs.Thunk();
                                hs_sat26DtXP.evaluateOnce = function () {
                                    return hs_cb26DtOx.hscall(hs_reg26DtOw, hs_evs26DtOs);
                                };
                                var hs_sat26DtXN = new $hs.Thunk();
                                hs_sat26DtXN.evaluateOnce = function () {
                                    var hs_sat26DtXQ = new $hs.Thunk();
                                    hs_sat26DtXQ.evaluateOnce = function () {
                                        return $hs.modules.GHCziEventziInternal.hs_eventIs.hscall(hs_evs26DtOs, hs_ev26DtOt);
                                    };
                                    return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtXQ);
                                };
                                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DtXN, hs_sat26DtXP);
                            };
                            var hs_sat26DtXJ = new $hs.Thunk();
                            hs_sat26DtXJ.evaluateOnce = function () {
                                return $hs.modules.ControlziMonad.hs_forMzu.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_cbs26DtOk);
                            };
                            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DtXJ, hs_sat26DtXM);
                        }
                    };
                    var hs_sat26DtXA = new $hs.Thunk();
                    hs_sat26DtXA.evaluateOnce = function () {
                        var hs_sat26DtXC = new $hs.Thunk();
                        hs_sat26DtXC.evaluateOnce = function () {
                            var hs_wild226DtXI = hs_wild26DtO3;
                            if (hs_wild26DtO3.notEvaluated) {
                                hs_wild226DtXI = hs_wild26DtO3.hscall();
                            }
                            var hs_ds826DtOb = hs_wild226DtXI.data[1];
                            if (hs_ds826DtOb.notEvaluated) {
                                return hs_ds826DtOb.hscall();
                            } else {
                                return hs_ds826DtOb;
                            }
                        };
                        return $hs.modules.ControlziConcurrentziMVar.hs_readMVar.hscall(hs_sat26DtXC);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtXA, hs_sat26DtXB);
                };
                return $hs.modules.GHCziEventziInternal.hs_poll.hscall(hs_ds26DtNZ, hs_timeout26DtO0, hs_sat26DtXz);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtXw, hs_sat26DtXy);
        };
        var hs_sat26DtX4 = new $hs.Thunk();
        hs_sat26DtX4.evaluateOnce = function () {
            var hs_sat26DtX9 = new $hs.Func(1);
            hs_sat26DtX9.evaluate = function (hs_now26DtNi) {
                var hs_sat26DtXb = new $hs.Func(1);
                hs_sat26DtXb.evaluate = function (hs_applyEdits26DtNg) {
                    var hs_ds626DtNk = new $hs.Thunk();
                    hs_ds626DtNk.evaluateOnce = function () {
                        var hs_qzq26DtNj = hs_applyEdits26DtNg.hscall(hs_tq26DtNf);
                        return $hs.modules.GHCziEventziPSQ.hs_atMost.hscall(hs_now26DtNi, hs_qzq26DtNj);
                    };
                    var hs_qzqzq26DtNq = new $hs.Thunk();
                    hs_qzqzq26DtNq.evaluateOnce = function () {
                        var hs_wild126DtXv = hs_ds626DtNk;
                        if (hs_ds626DtNk.notEvaluated) {
                            hs_wild126DtXv = hs_ds626DtNk.hscall();
                        }
                        var hs_qzqzq126DtNp = hs_wild126DtXv.data[1];
                        if (hs_qzqzq126DtNp.notEvaluated) {
                            return hs_qzqzq126DtNp.hscall();
                        } else {
                            return hs_qzqzq126DtNp;
                        }
                    };
                    var hs_sat26DtXf = new $hs.Thunk();
                    hs_sat26DtXf.evaluateOnce = function () {
                        var hs_sat26DtXm = new $hs.Thunk();
                        hs_sat26DtXm.evaluateOnce = function () {
                            var hs_wild126DtXt = $hs.modules.GHCziEventziPSQ.hs_minView.hscall(hs_qzqzq26DtNq);
                            switch (hs_wild126DtXt.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_ds726DtNB = hs_wild126DtXt.data[0];
                                var hs_wild226DtXr = hs_ds726DtNB;
                                if (hs_ds726DtNB.notEvaluated) {
                                    hs_wild226DtXr = hs_ds726DtNB.hscall();
                                }
                                var hs_ds826DtNF = hs_wild226DtXr.data[0];
                                var hs_wild326DtXo = hs_ds826DtNF;
                                if (hs_ds826DtNF.notEvaluated) {
                                    hs_wild326DtXo = hs_ds826DtNF.hscall();
                                }
                                var hs_t26DtNK = hs_wild326DtXo.data[1];
                                var hs_tzq26DtNN = $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_t26DtNK, hs_now26DtNi);
                                var $res = new $hs.Data(1);
                                $res.data = [hs_tzq26DtNN];
                                return $res;
                            }
                        };
                        var hs_sat26DtXl = new $hs.Data(1);
                        hs_sat26DtXl.data = [hs_sat26DtXm, hs_qzqzq26DtNq];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtXl);
                    };
                    var hs_sat26DtXe = new $hs.Thunk();
                    hs_sat26DtXe.evaluateOnce = function () {
                        var hs_sat26DtXh = new $hs.Thunk();
                        hs_sat26DtXh.evaluateOnce = function () {
                            var hs_sat26DtXi = new $hs.Thunk();
                            hs_sat26DtXi.evaluateOnce = function () {
                                var hs_wild126DtXk = hs_ds626DtNk;
                                if (hs_ds626DtNk.notEvaluated) {
                                    hs_wild126DtXk = hs_ds626DtNk.hscall();
                                }
                                var hs_expired26DtNv = hs_wild126DtXk.data[0];
                                if (hs_expired26DtNv.notEvaluated) {
                                    return hs_expired26DtNv.hscall();
                                } else {
                                    return hs_expired26DtNv;
                                }
                            };
                            return $hs.modules.GHCziBase.hs_map.hscall($hs.modules.GHCziEventziPSQ.hs_value, hs_sat26DtXi);
                        };
                        var hs_sat26DtXg = new $hs.Thunk();
                        hs_sat26DtXg.evaluateOnce = function () {
                            return $hs.modules.ControlziMonad.hs_sequencezu.hscall($hs.modules.GHCziBase.hs_zdfMonadIO);
                        };
                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DtXg, hs_sat26DtXh);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtXe, hs_sat26DtXf);
                };
                var hs_sat26DtXa = new $hs.Thunk();
                hs_sat26DtXa.evaluateOnce = function () {
                    var hs_sat26DtXd = new $hs.Func(1);
                    hs_sat26DtXd.evaluate = function (hs_f26DtNa) {
                        var $res = new $hs.Data(1);
                        $res.data = [$hs.modules.GHCziBase.hs_id, hs_f26DtNa];
                        return $res;
                    };
                    var hs_sat26DtXc = new $hs.Thunk();
                    hs_sat26DtXc.evaluateOnce = function () {
                        return $hs.modules.DataziIORef.hs_atomicModifyIORef.hscall(hs_ds226DtN7);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DtXc, hs_sat26DtXd);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtXa, hs_sat26DtXb);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziEventziClock.hs_getCurrentTime, hs_sat26DtX9);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtX4, hs_sat26DtX8);
    };
    this.hs_loop.evaluate = function (hs_mgr26DtOQ) {
        var hs_wild26DtP0 = hs_mgr26DtOQ;
        if (hs_mgr26DtOQ.notEvaluated) {
            hs_wild26DtP0 = hs_mgr26DtOQ.hscall();
        }
        var hs_ds326DtPe = hs_wild26DtP0.data[3];
        var hs_go26DtPb = new $hs.Func(1);
        hs_go26DtPb.evaluate = function (hs_q26DtP1) {
            var hs_sat26DtY5 = new $hs.Func(1);
            hs_sat26DtY5.evaluate = function (hs_ds626DtP4) {
                var hs_wild126DtY7 = hs_ds626DtP4;
                if (hs_ds626DtP4.notEvaluated) {
                    hs_wild126DtY7 = hs_ds626DtP4.hscall();
                }
                var hs_running26DtP8 = hs_wild126DtY7.data[0];
                var hs_qzq26DtPa = hs_wild126DtY7.data[1];
                var hs_sat26DtY8 = new $hs.Thunk();
                hs_sat26DtY8.evaluateOnce = function () {
                    return hs_go26DtPb.hscall(hs_qzq26DtPa);
                };
                var hs_sat26DtY6 = new $hs.Thunk();
                hs_sat26DtY6.evaluateOnce = function () {
                    return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_running26DtP8);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DtY6, hs_sat26DtY8);
            };
            var hs_sat26DtY4 = new $hs.Thunk();
            hs_sat26DtY4.evaluateOnce = function () {
                return $hs.modules.GHCziEventziManager.hs_step.hscall(hs_wild26DtP0, hs_q26DtP1);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtY4, hs_sat26DtY5);
        };
        var hs_sat26DtY1 = new $hs.Func(1);
        hs_sat26DtY1.evaluate = function (hs_state26DtPn) {
            var hs_wild126DtPr = hs_state26DtPn;
            if (hs_state26DtPn.notEvaluated) {
                hs_wild126DtPr = hs_state26DtPn.hscall();
            }
            switch (hs_wild126DtPr.tag) {
            case 1:
                var hs_sat26DtYa = new $hs.Thunk();
                hs_sat26DtYa.evaluateOnce = function () {
                    return $hs.modules.GHCziEventziManager.hs_cleanup.hscall(hs_wild26DtP0);
                };
                var hs_sat26DtY9 = new $hs.Thunk();
                hs_sat26DtY9.evaluateOnce = function () {
                    return hs_go26DtPb.hscall($hs.modules.GHCziEventziPSQ.hs_empty);
                };
                return $hs.modules.ControlziExceptionziBase.hs_finally.hscall(hs_sat26DtY9, hs_sat26DtYa);
            case 3:
                return $hs.modules.GHCziEventziManager.hs_cleanup.hscall(hs_wild26DtP0);
            default:
                var hs_sat26DtYc = new $hs.Thunk();
                hs_sat26DtYc.evaluateOnce = function () {
                    var hs_sat26DtYd = new $hs.Thunk();
                    hs_sat26DtYd.evaluateOnce = function () {
                        var hs_sat26DtYf = new $hs.Thunk();
                        hs_sat26DtYf.evaluateOnce = function () {
                            return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziEventziManager.hs_zdfShowState, hs_wild126DtPr);
                        };
                        var hs_sat26DtYe = new $hs.Thunk();
                        hs_sat26DtYe.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("GHC.Event.Manager.loop: state is already \x00");
                        };
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DtYe, hs_sat26DtYf);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziErr.hs_error, hs_sat26DtYd);
                };
                var hs_sat26DtYb = new $hs.Thunk();
                hs_sat26DtYb.evaluateOnce = function () {
                    return $hs.modules.GHCziEventziManager.hs_cleanup.hscall(hs_wild26DtP0);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtYb, hs_sat26DtYc);
            }
        };
        var hs_sat26DtXV = new $hs.Thunk();
        hs_sat26DtXV.evaluateOnce = function () {
            var hs_sat26DtY3 = new $hs.Func(1);
            hs_sat26DtY3.evaluate = function (hs_s26DtPh) {
                var hs_wild126DtPj = hs_s26DtPh;
                if (hs_s26DtPh.notEvaluated) {
                    hs_wild126DtPj = hs_s26DtPh.hscall();
                }
                switch (hs_wild126DtPj.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [$hs.modules.GHCziEventziManager.hs_Running, $hs.modules.GHCziEventziManager.hs_Created];
                    return $res;
                default:
                    var $res = new $hs.Data(1);
                    $res.data = [hs_wild126DtPj, hs_wild126DtPj];
                    return $res;
                }
            };
            var hs_sat26DtY2 = new $hs.Thunk();
            hs_sat26DtY2.evaluateOnce = function () {
                return $hs.modules.DataziIORef.hs_atomicModifyIORef.hscall(hs_ds326DtPe);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DtY2, hs_sat26DtY3);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DtXV, hs_sat26DtY1);
    };
    this.hs_EventManager.evaluate = function (hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_Created.data = [];
    this.hs_Running.data = [];
    this.hs_Dying.data = [];
    this.hs_Finished.data = [];
    this.hs_TK.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.GHCziEventziManager.hs_TK.hscall(hs_eta1cW6l3);
    };
    this.hs_FdKey.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_FdData.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
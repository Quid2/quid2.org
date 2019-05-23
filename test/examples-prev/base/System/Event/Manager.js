
$hs.modules.SystemziEventziManager = new $hs.Module();
$hs.modules.SystemziEventziManager.dependencies = ["GHC.Types", "GHC.Unit", "Control.Monad", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.Float", "GHC.Show", "GHC.Err", "GHC.Classes", "GHC.Conc.Signal", "GHC.MVar", "GHC.IORef", "GHC.List", "Control.Concurrent.MVar", "Control.Exception.Base", "Data.IORef", "Data.Monoid", "System.Posix.Types", "System.Event.Clock", "System.Event.Control", "System.Event.EPoll", "System.Event.IntMap", "System.Event.Internal", "System.Event.PSQ", "System.Event.Unique"];
$hs.modules.SystemziEventziManager.initBeforeDependencies = function () {
    this.hs_zdWEventManager = new $hs.Func(6);
    this.hs_zdWFdKey = new $hs.Func(2);
    this.hs_zdWFdData = new $hs.Func(3);
    this.hs_newDefaultBackend = new $hs.Thunk();
    this.hs_keyFd = new $hs.Func(1);
    this.hs_wakeManager = new $hs.Func(1);
    this.hs_zdfShowZLzmzgZR = new $hs.Data(1);
    this.hs_zdfShowState = new $hs.Data(1);
    this.hs_zdfEqState = new $hs.Data(1);
    this.hs_zdfEqTimeoutKey = new $hs.Data(1);
    this.hs_zdfShowFdKey = new $hs.Data(1);
    this.hs_zdfShowFdData = new $hs.Data(1);
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
    this.hs_EventManager = new $hs.Func(8);
    this.hs_Created = new $hs.Data(1);
    this.hs_Running = new $hs.Data(2);
    this.hs_Dying = new $hs.Data(3);
    this.hs_Finished = new $hs.Data(4);
    this.hs_TK = new $hs.Func(1);
    this.hs_FdKey = new $hs.Func(2);
    this.hs_FdData = new $hs.Func(4);
    this.hs_zdWEventManager.notEvaluated = true;
    this.hs_zdWEventManager.evaluate = function (hs_tpl26DSH1, hs_tpl26DSH3, hs_tpl26DSH6, hs_tpl26DSH9, hs_tpl26DSHc, hs_tpl26DSHe) {
        $hs.modules.SystemziEventziManager.loadDependencies();
        return this.evaluate(hs_tpl26DSH1, hs_tpl26DSH3, hs_tpl26DSH6, hs_tpl26DSH9, hs_tpl26DSHc, hs_tpl26DSHe);
    };
    this.hs_zdWFdKey.notEvaluated = true;
    this.hs_zdWFdKey.evaluate = function (hs_tpl26DSHt, hs_tpl26DSHw) {
        $hs.modules.SystemziEventziManager.loadDependencies();
        return this.evaluate(hs_tpl26DSHt, hs_tpl26DSHw);
    };
    this.hs_zdWFdData.notEvaluated = true;
    this.hs_zdWFdData.evaluate = function (hs_tpl26DSHE, hs_tpl26DSHI, hs_tpl26DSHL) {
        $hs.modules.SystemziEventziManager.loadDependencies();
        return this.evaluate(hs_tpl26DSHE, hs_tpl26DSHI, hs_tpl26DSHL);
    };
    this.hs_newDefaultBackend.evaluateOnce = function () {
        $hs.modules.SystemziEventziManager.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_keyFd.notEvaluated = true;
    this.hs_keyFd.evaluate = function (hs_ds26DSI7) {
        $hs.modules.SystemziEventziManager.loadDependencies();
        return this.evaluate(hs_ds26DSI7);
    };
    this.hs_wakeManager.notEvaluated = true;
    this.hs_wakeManager.evaluate = function (hs_mgr26DSId) {
        $hs.modules.SystemziEventziManager.loadDependencies();
        return this.evaluate(hs_mgr26DSId);
    };
    this.hs_zdfShowZLzmzgZR.notEvaluated = true;
    this.hs_zdfShowZLzmzgZR.evaluate = function () {
        $hs.modules.SystemziEventziManager.loadDependencies();
        return this;
    };
    this.hs_zdfShowState.notEvaluated = true;
    this.hs_zdfShowState.evaluate = function () {
        $hs.modules.SystemziEventziManager.loadDependencies();
        return this;
    };
    this.hs_zdfEqState.notEvaluated = true;
    this.hs_zdfEqState.evaluate = function () {
        $hs.modules.SystemziEventziManager.loadDependencies();
        return this;
    };
    this.hs_zdfEqTimeoutKey.notEvaluated = true;
    this.hs_zdfEqTimeoutKey.evaluate = function () {
        $hs.modules.SystemziEventziManager.loadDependencies();
        return this;
    };
    this.hs_zdfShowFdKey.notEvaluated = true;
    this.hs_zdfShowFdKey.evaluate = function () {
        $hs.modules.SystemziEventziManager.loadDependencies();
        return this;
    };
    this.hs_zdfShowFdData.notEvaluated = true;
    this.hs_zdfShowFdData.evaluate = function () {
        $hs.modules.SystemziEventziManager.loadDependencies();
        return this;
    };
    this.hs_zdfEqFdKey.notEvaluated = true;
    this.hs_zdfEqFdKey.evaluate = function () {
        $hs.modules.SystemziEventziManager.loadDependencies();
        return this;
    };
    this.hs_shutdown.notEvaluated = true;
    this.hs_shutdown.evaluate = function (hs_mgr26DSM5) {
        $hs.modules.SystemziEventziManager.loadDependencies();
        return this.evaluate(hs_mgr26DSM5);
    };
    this.hs_finished.notEvaluated = true;
    this.hs_finished.evaluate = function (hs_mgr26DSMJ) {
        $hs.modules.SystemziEventziManager.loadDependencies();
        return this.evaluate(hs_mgr26DSMJ);
    };
    this.hs_cleanup.notEvaluated = true;
    this.hs_cleanup.evaluate = function (hs_ds26DSMX) {
        $hs.modules.SystemziEventziManager.loadDependencies();
        return this.evaluate(hs_ds26DSMX);
    };
    this.hs_updateTimeout.notEvaluated = true;
    this.hs_updateTimeout.evaluate = function (hs_mgr26DSNt, hs_ds26DSNI, hs_us26DSNn) {
        $hs.modules.SystemziEventziManager.loadDependencies();
        return this.evaluate(hs_mgr26DSNt, hs_ds26DSNI, hs_us26DSNn);
    };
    this.hs_unregisterTimeout.notEvaluated = true;
    this.hs_unregisterTimeout.evaluate = function (hs_mgr26DSO5, hs_ds26DSOj) {
        $hs.modules.SystemziEventziManager.loadDependencies();
        return this.evaluate(hs_mgr26DSO5, hs_ds26DSOj);
    };
    this.hs_registerTimeout.notEvaluated = true;
    this.hs_registerTimeout.evaluate = function (hs_mgr26DSOG, hs_us26DSOX, hs_cb26DSPl) {
        $hs.modules.SystemziEventziManager.loadDependencies();
        return this.evaluate(hs_mgr26DSOG, hs_us26DSOX, hs_cb26DSPl);
    };
    this.hs_registerFdzu.notEvaluated = true;
    this.hs_registerFdzu.evaluate = function (hs_ds26DSQa, hs_cb26DSQB, hs_fd26DSQs, hs_evs26DSQy) {
        $hs.modules.SystemziEventziManager.loadDependencies();
        return this.evaluate(hs_ds26DSQa, hs_cb26DSQB, hs_fd26DSQs, hs_evs26DSQy);
    };
    this.hs_newWith.notEvaluated = true;
    this.hs_newWith.evaluate = function (hs_be26DSRZ) {
        $hs.modules.SystemziEventziManager.loadDependencies();
        return this.evaluate(hs_be26DSRZ);
    };
    this.hs_new.evaluateOnce = function () {
        $hs.modules.SystemziEventziManager.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_registerFd.notEvaluated = true;
    this.hs_registerFd.evaluate = function (hs_mgr26DSVJ, hs_cb26DSWa, hs_fd26DSW1, hs_evs26DSW7) {
        $hs.modules.SystemziEventziManager.loadDependencies();
        return this.evaluate(hs_mgr26DSVJ, hs_cb26DSWa, hs_fd26DSW1, hs_evs26DSW7);
    };
    this.hs_unregisterFdzu.notEvaluated = true;
    this.hs_unregisterFdzu.evaluate = function (hs_ds26DSXG, hs_ds126DSXQ) {
        $hs.modules.SystemziEventziManager.loadDependencies();
        return this.evaluate(hs_ds26DSXG, hs_ds126DSXQ);
    };
    this.hs_unregisterFd.notEvaluated = true;
    this.hs_unregisterFd.evaluate = function (hs_mgr26DSZ9, hs_reg26DSZa) {
        $hs.modules.SystemziEventziManager.loadDependencies();
        return this.evaluate(hs_mgr26DSZ9, hs_reg26DSZa);
    };
    this.hs_closeFd.notEvaluated = true;
    this.hs_closeFd.evaluate = function (hs_mgr26DSZk, hs_close26DSZz, hs_fd26DSZy) {
        $hs.modules.SystemziEventziManager.loadDependencies();
        return this.evaluate(hs_mgr26DSZk, hs_close26DSZz, hs_fd26DSZy);
    };
    this.hs_step.notEvaluated = true;
    this.hs_step.evaluate = function (hs_mgr26DT0x, hs_tq26DT0V) {
        $hs.modules.SystemziEventziManager.loadDependencies();
        return this.evaluate(hs_mgr26DT0x, hs_tq26DT0V);
    };
    this.hs_loop.notEvaluated = true;
    this.hs_loop.evaluate = function (hs_mgr26DT2F) {
        $hs.modules.SystemziEventziManager.loadDependencies();
        return this.evaluate(hs_mgr26DT2F);
    };
    this.hs_EventManager.notEvaluated = true;
    this.hs_EventManager.evaluate = function (hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziEventziManager.loadDependencies();
        return this.evaluate(hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_Created.notEvaluated = true;
    this.hs_Created.evaluate = function () {
        $hs.modules.SystemziEventziManager.loadDependencies();
        return this;
    };
    this.hs_Running.notEvaluated = true;
    this.hs_Running.evaluate = function () {
        $hs.modules.SystemziEventziManager.loadDependencies();
        return this;
    };
    this.hs_Dying.notEvaluated = true;
    this.hs_Dying.evaluate = function () {
        $hs.modules.SystemziEventziManager.loadDependencies();
        return this;
    };
    this.hs_Finished.notEvaluated = true;
    this.hs_Finished.evaluate = function () {
        $hs.modules.SystemziEventziManager.loadDependencies();
        return this;
    };
    this.hs_TK.notEvaluated = true;
    this.hs_TK.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.SystemziEventziManager.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_FdKey.notEvaluated = true;
    this.hs_FdKey.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziEventziManager.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_FdData.notEvaluated = true;
    this.hs_FdData.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziEventziManager.loadDependencies();
        return this.evaluate(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
};
$hs.modules.SystemziEventziManager.initAfterDependencies = function () {
    this.hs_zdWEventManager.notEvaluated = false;
    this.hs_zdWFdKey.notEvaluated = false;
    this.hs_zdWFdData.notEvaluated = false;
    this.hs_keyFd.notEvaluated = false;
    this.hs_wakeManager.notEvaluated = false;
    this.hs_zdfShowZLzmzgZR.notEvaluated = false;
    this.hs_zdfShowZLzmzgZR.evaluate = function () {
        return this;
    };
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
    this.hs_zdfShowFdData.notEvaluated = false;
    this.hs_zdfShowFdData.evaluate = function () {
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
    var hs_fdKey25uqdA = new $hs.Func(1);
    var hs_keyUnique25uqdu = new $hs.Func(1);
    var hs_zdcshow25vucc = new $hs.Func(1);
    var hs_zdcshowList25vucg = new $hs.Thunk();
    var hs_zdcshowsPrec25vuci = new $hs.Thunk();
    var hs_zdcshowsPrec125vuck = new $hs.Func(2);
    var hs_sat26DT3R = new $hs.Thunk();
    var hs_zdcshowList125vucv = new $hs.Thunk();
    var hs_zdcshow125vucx = new $hs.Thunk();
    var hs_zdczeze25vucB = new $hs.Func(2);
    var hs_zdczsze25vucM = new $hs.Func(2);
    var hs_a25vucT = new $hs.Thunk();
    var hs_zdczeze125vucV = new $hs.Thunk();
    var hs_a125vucX = new $hs.Thunk();
    var hs_zdczsze125vucZ = new $hs.Thunk();
    var hs_zdcshowsPrec225vud1 = new $hs.Func(2);
    var hs_sat26DT4p = new $hs.Thunk();
    var hs_zdcshowList225vudB = new $hs.Thunk();
    var hs_zdcshow225vudD = new $hs.Thunk();
    var hs_zdcshowsPrec325vudH = new $hs.Func(2);
    var hs_sat26DT50 = new $hs.Thunk();
    var hs_zdcshowList325vueu = new $hs.Thunk();
    var hs_zdcshow325vuew = new $hs.Thunk();
    var hs_zdczeze225vueA = new $hs.Func(2);
    var hs_zdczsze225vueW = new $hs.Func(2);
    var hs_handleControlEvent25uqdG = new $hs.Func(3);
    var hs_sat26DT7Q = new $hs.Thunk();
    var hs_sat26DT7R = new $hs.Thunk();
    var hs_eventsOf25uqe4 = new $hs.Thunk();
    var hs_pairEvents25uqe6 = new $hs.Func(3);
    this.hs_zdWEventManager.evaluate = function (hs_tpl26DSH1, hs_tpl26DSH3, hs_tpl26DSH6, hs_tpl26DSH9, hs_tpl26DSHc, hs_tpl26DSHe) {
        var hs_tpl26DSHj = hs_tpl26DSH1;
        if (hs_tpl26DSH1.notEvaluated) {
            hs_tpl26DSHj = hs_tpl26DSH1.hscall();
        }
        var hs_tpl26DT3t = hs_tpl26DSH3;
        if (hs_tpl26DSH3.notEvaluated) {
            hs_tpl26DT3t = hs_tpl26DSH3.hscall();
        }
        var hs_tpl26DSHk = hs_tpl26DT3t.data[0];
        var hs_tpl26DT3s = hs_tpl26DSH6;
        if (hs_tpl26DSH6.notEvaluated) {
            hs_tpl26DT3s = hs_tpl26DSH6.hscall();
        }
        var hs_tpl26DSHl = hs_tpl26DT3s.data[0];
        var hs_tpl26DT3r = hs_tpl26DSH9;
        if (hs_tpl26DSH9.notEvaluated) {
            hs_tpl26DT3r = hs_tpl26DSH9.hscall();
        }
        var hs_tpl26DSHm = hs_tpl26DT3r.data[0];
        var hs_tpl26DSHn = hs_tpl26DSHc;
        if (hs_tpl26DSHc.notEvaluated) {
            hs_tpl26DSHn = hs_tpl26DSHc.hscall();
        }
        var hs_tpl26DT3q = hs_tpl26DSHe;
        if (hs_tpl26DSHe.notEvaluated) {
            hs_tpl26DT3q = hs_tpl26DSHe.hscall();
        }
        var hs_tpl26DSHo = hs_tpl26DT3q.data[0];
        var hs_tpl26DSHp = hs_tpl26DT3q.data[1];
        var hs_tpl26DSHq = hs_tpl26DT3q.data[2];
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26DSHj, hs_tpl26DSHk, hs_tpl26DSHl, hs_tpl26DSHm, hs_tpl26DSHn, hs_tpl26DSHo, hs_tpl26DSHp, hs_tpl26DSHq];
        return $res;
    };
    this.hs_zdWFdKey.evaluate = function (hs_tpl26DSHt, hs_tpl26DSHw) {
        var hs_tpl26DT3v = hs_tpl26DSHt;
        if (hs_tpl26DSHt.notEvaluated) {
            hs_tpl26DT3v = hs_tpl26DSHt.hscall();
        }
        var hs_tpl26DSHz = hs_tpl26DT3v.data[0];
        var hs_tpl26DT3u = hs_tpl26DSHw;
        if (hs_tpl26DSHw.notEvaluated) {
            hs_tpl26DT3u = hs_tpl26DSHw.hscall();
        }
        var hs_tpl26DSHA = hs_tpl26DT3u.data[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26DSHz, hs_tpl26DSHA];
        return $res;
    };
    this.hs_zdWFdData.evaluate = function (hs_tpl26DSHE, hs_tpl26DSHI, hs_tpl26DSHL) {
        var hs_tpl26DT3x = hs_tpl26DSHE;
        if (hs_tpl26DSHE.notEvaluated) {
            hs_tpl26DT3x = hs_tpl26DSHE.hscall();
        }
        var hs_tpl26DSHN = hs_tpl26DT3x.data[0];
        var hs_tpl26DSHO = hs_tpl26DT3x.data[1];
        var hs_tpl26DT3w = hs_tpl26DSHI;
        if (hs_tpl26DSHI.notEvaluated) {
            hs_tpl26DT3w = hs_tpl26DSHI.hscall();
        }
        var hs_tpl26DSHP = hs_tpl26DT3w.data[0];
        var hs_tpl26DSHQ = hs_tpl26DSHL;
        if (hs_tpl26DSHL.notEvaluated) {
            hs_tpl26DSHQ = hs_tpl26DSHL.hscall();
        }
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26DSHN, hs_tpl26DSHO, hs_tpl26DSHP, hs_tpl26DSHQ];
        return $res;
    };
    this.hs_newDefaultBackend.evaluateOnce = function () {
        if ($hs.modules.SystemziEventziEPoll.hs_new.notEvaluated) {
            return $hs.modules.SystemziEventziEPoll.hs_new.hscall();
        } else {
            return $hs.modules.SystemziEventziEPoll.hs_new;
        }
    };
    hs_fdKey25uqdA.evaluate = function (hs_ds26DSHS) {
        var hs_wild26DT3y = hs_ds26DSHS;
        if (hs_ds26DSHS.notEvaluated) {
            hs_wild26DT3y = hs_ds26DSHS.hscall();
        }
        var hs_rb26DSHY = hs_wild26DT3y.data[0];
        var hs_rb126DSHZ = hs_wild26DT3y.data[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_rb26DSHY, hs_rb126DSHZ];
        return $res;
    };
    hs_keyUnique25uqdu.evaluate = function (hs_ds26DSI1) {
        var hs_wild26DT3C = hs_ds26DSI1;
        if (hs_ds26DSI1.notEvaluated) {
            hs_wild26DT3C = hs_ds26DSI1.hscall();
        }
        var hs_rb126DSI5 = hs_wild26DT3C.data[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_rb126DSI5];
        return $res;
    };
    this.hs_keyFd.evaluate = function (hs_ds26DSI7) {
        var hs_wild26DT3D = hs_ds26DSI7;
        if (hs_ds26DSI7.notEvaluated) {
            hs_wild26DT3D = hs_ds26DSI7.hscall();
        }
        var hs_rb26DSIb = hs_wild26DT3D.data[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_rb26DSIb];
        return $res;
    };
    this.hs_wakeManager.evaluate = function (hs_mgr26DSId) {
        var hs_sat26DT3L = new $hs.Thunk();
        hs_sat26DT3L.evaluateOnce = function () {
            var hs_wild26DT3G = hs_mgr26DSId;
            if (hs_mgr26DSId.notEvaluated) {
                hs_wild26DT3G = hs_mgr26DSId.hscall();
            }
            var hs_rb326DSIn = hs_wild26DT3G.data[5];
            var hs_rb426DSIo = hs_wild26DT3G.data[6];
            var hs_rb526DSIp = hs_wild26DT3G.data[7];
            var $res = new $hs.Data(1);
            $res.data = [hs_rb326DSIn, hs_rb426DSIo, hs_rb526DSIp];
            return $res;
        };
        return $hs.modules.SystemziEventziControl.hs_sendWakeup.hscall(hs_sat26DT3L);
    };
    hs_zdcshow25vucc.evaluate = function (hs_ds26DSIu) {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("IOCallback\x00");
    };
    this.hs_zdfShowZLzmzgZR.data = [hs_zdcshowsPrec25vuci, hs_zdcshow25vucc, hs_zdcshowList25vucg];
    hs_zdcshowList25vucg.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall($hs.modules.SystemziEventziManager.hs_zdfShowZLzmzgZR);
    };
    hs_zdcshowsPrec25vuci.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowsPrec.hscall($hs.modules.SystemziEventziManager.hs_zdfShowZLzmzgZR);
    };
    hs_zdcshowsPrec125vuck.evaluate = function (hs_ds26DSIJ, hs_ds126DSID) {
        var hs_wild26DT3M = hs_ds126DSID;
        if (hs_ds126DSID.notEvaluated) {
            hs_wild26DT3M = hs_ds126DSID.hscall();
        }
        switch (hs_wild26DT3M.tag) {
        case 1:
            var hs_sat26DT3N = new $hs.Thunk();
            hs_sat26DT3N.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Created\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DT3N);
        case 2:
            var hs_sat26DT3O = new $hs.Thunk();
            hs_sat26DT3O.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Running\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DT3O);
        case 3:
            var hs_sat26DT3P = new $hs.Thunk();
            hs_sat26DT3P.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Dying\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DT3P);
        case 4:
            var hs_sat26DT3Q = new $hs.Thunk();
            hs_sat26DT3Q.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Finished\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DT3Q);
        }
    };
    hs_sat26DT3R.evaluateOnce = function () {
        var hs_sat26DT3S = new $hs.Data(1);
        hs_sat26DT3S.data = [0];
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.SystemziEventziManager.hs_zdfShowState, hs_sat26DT3S);
    };
    this.hs_zdfShowState.data = [hs_zdcshowsPrec125vuck, hs_zdcshow125vucx, hs_zdcshowList125vucv];
    hs_zdcshowList125vucv.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DT3R);
    };
    hs_zdcshow125vucx.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.SystemziEventziManager.hs_zdfShowState);
    };
    hs_zdczeze25vucB.evaluate = function (hs_a226DSIU, hs_b26DSIW) {
        var hs_wild26DT3U = hs_a226DSIU;
        if (hs_a226DSIU.notEvaluated) {
            hs_wild26DT3U = hs_a226DSIU.hscall();
        }
        switch (hs_wild26DT3U.tag) {
        case 1:
            var hs_wild126DT3T = hs_b26DSIW;
            if (hs_b26DSIW.notEvaluated) {
                hs_wild126DT3T = hs_b26DSIW.hscall();
            }
            switch (hs_wild126DT3T.tag) {
            case 1:
                return 0 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 0 == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 0 == 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 4:
                return 0 == 3 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 2:
            var hs_wild126DT3V = hs_b26DSIW;
            if (hs_b26DSIW.notEvaluated) {
                hs_wild126DT3V = hs_b26DSIW.hscall();
            }
            switch (hs_wild126DT3V.tag) {
            case 1:
                return 1 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 1 == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 1 == 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 4:
                return 1 == 3 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 3:
            var hs_wild126DT3W = hs_b26DSIW;
            if (hs_b26DSIW.notEvaluated) {
                hs_wild126DT3W = hs_b26DSIW.hscall();
            }
            switch (hs_wild126DT3W.tag) {
            case 1:
                return 2 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 2 == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 2 == 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 4:
                return 2 == 3 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 4:
            var hs_wild126DT3X = hs_b26DSIW;
            if (hs_b26DSIW.notEvaluated) {
                hs_wild126DT3X = hs_b26DSIW.hscall();
            }
            switch (hs_wild126DT3X.tag) {
            case 1:
                return 3 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 3 == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 3 == 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 4:
                return 3 == 3 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        }
    };
    this.hs_zdfEqState.data = [hs_zdczeze25vucB, hs_zdczsze25vucM];
    hs_zdczsze25vucM.evaluate = function (hs_a226DSJ5, hs_b26DSJ6) {
        var hs_sat26DT3Y = new $hs.Thunk();
        hs_sat26DT3Y.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.SystemziEventziManager.hs_zdfEqState, hs_a226DSJ5, hs_b26DSJ6);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DT3Y);
    };
    hs_a25vucT.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.SystemziEventziUnique.hs_zdfEqUnique);
    };
    hs_zdczeze125vucV.evaluateOnce = function () {
        if (hs_a25vucT.notEvaluated) {
            return hs_a25vucT.hscall();
        } else {
            return hs_a25vucT;
        }
    };
    hs_a125vucX.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.SystemziEventziUnique.hs_zdfEqUnique);
    };
    hs_zdczsze125vucZ.evaluateOnce = function () {
        if (hs_a125vucX.notEvaluated) {
            return hs_a125vucX.hscall();
        } else {
            return hs_a125vucX;
        }
    };
    this.hs_zdfEqTimeoutKey.data = [hs_a25vucT, hs_a125vucX];
    hs_zdcshowsPrec225vud1.evaluate = function (hs_a226DSJo, hs_ds26DSJk) {
        var hs_wild26DT3Z = hs_ds26DSJk;
        if (hs_ds26DSJk.notEvaluated) {
            hs_wild26DT3Z = hs_ds26DSJk.hscall();
        }
        var hs_rb26DSJw = hs_wild26DT3Z.data[0];
        var hs_rb126DSJE = hs_wild26DT3Z.data[1];
        var hs_sat26DT4m = new $hs.Thunk();
        hs_sat26DT4m.evaluateOnce = function () {
            var hs_sat26DT4j = new $hs.Thunk();
            hs_sat26DT4j.evaluateOnce = function () {
                var hs_sat26DT4g = new $hs.Thunk();
                hs_sat26DT4g.evaluateOnce = function () {
                    var hs_sat26DT4c = new $hs.Thunk();
                    hs_sat26DT4c.evaluateOnce = function () {
                        var hs_sat26DT49 = new $hs.Thunk();
                        hs_sat26DT49.evaluateOnce = function () {
                            var hs_sat26DT46 = new $hs.Thunk();
                            hs_sat26DT46.evaluateOnce = function () {
                                var hs_sat26DT42 = new $hs.Thunk();
                                hs_sat26DT42.evaluateOnce = function () {
                                    var hs_sat26DT40 = new $hs.Data(1);
                                    hs_sat26DT40.data = ["}"];
                                    var hs_sat26DT41 = new $hs.Data(2);
                                    hs_sat26DT41.data = [hs_sat26DT40, $hs.modules.GHCziTypes.hs_ZMZN];
                                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DT41);
                                };
                                var hs_sat26DT45 = new $hs.Thunk();
                                hs_sat26DT45.evaluateOnce = function () {
                                    var hs_sat26DT43 = new $hs.Data(1);
                                    hs_sat26DT43.data = [hs_rb126DSJE];
                                    var hs_sat26DT44 = new $hs.Data(1);
                                    hs_sat26DT44.data = [0];
                                    return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.SystemziEventziUnique.hs_zdfShowUnique, hs_sat26DT44, hs_sat26DT43);
                                };
                                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DT45, hs_sat26DT42);
                            };
                            var hs_sat26DT48 = new $hs.Thunk();
                            hs_sat26DT48.evaluateOnce = function () {
                                var hs_sat26DT47 = new $hs.Thunk();
                                hs_sat26DT47.evaluateOnce = function () {
                                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("keyUnique = \x00");
                                };
                                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DT47);
                            };
                            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DT48, hs_sat26DT46);
                        };
                        var hs_sat26DT4b = new $hs.Thunk();
                        hs_sat26DT4b.evaluateOnce = function () {
                            var hs_sat26DT4a = new $hs.Thunk();
                            hs_sat26DT4a.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall(", \x00");
                            };
                            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DT4a);
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DT4b, hs_sat26DT49);
                    };
                    var hs_sat26DT4f = new $hs.Thunk();
                    hs_sat26DT4f.evaluateOnce = function () {
                        var hs_sat26DT4d = new $hs.Data(1);
                        hs_sat26DT4d.data = [hs_rb26DSJw];
                        var hs_sat26DT4e = new $hs.Data(1);
                        hs_sat26DT4e.data = [0];
                        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfShowFd, hs_sat26DT4e, hs_sat26DT4d);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DT4f, hs_sat26DT4c);
                };
                var hs_sat26DT4i = new $hs.Thunk();
                hs_sat26DT4i.evaluateOnce = function () {
                    var hs_sat26DT4h = new $hs.Thunk();
                    hs_sat26DT4h.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("keyFd = \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DT4h);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DT4i, hs_sat26DT4g);
            };
            var hs_sat26DT4l = new $hs.Thunk();
            hs_sat26DT4l.evaluateOnce = function () {
                var hs_sat26DT4k = new $hs.Thunk();
                hs_sat26DT4k.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("FdKey {\x00");
                };
                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DT4k);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DT4l, hs_sat26DT4j);
        };
        var hs_sat26DT4o = new $hs.Thunk();
        hs_sat26DT4o.evaluateOnce = function () {
            var hs_sat26DT4n = new $hs.Data(1);
            hs_sat26DT4n.data = [11];
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_a226DSJo, hs_sat26DT4n);
        };
        return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DT4o, hs_sat26DT4m);
    };
    hs_sat26DT4p.evaluateOnce = function () {
        var hs_sat26DT4q = new $hs.Data(1);
        hs_sat26DT4q.data = [0];
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.SystemziEventziManager.hs_zdfShowFdKey, hs_sat26DT4q);
    };
    this.hs_zdfShowFdKey.data = [hs_zdcshowsPrec225vud1, hs_zdcshow225vudD, hs_zdcshowList225vudB];
    hs_zdcshowList225vudB.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DT4p);
    };
    hs_zdcshow225vudD.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.SystemziEventziManager.hs_zdfShowFdKey);
    };
    hs_zdcshowsPrec325vudH.evaluate = function (hs_a226DSK6, hs_ds26DSK0) {
        var hs_wild26DT4r = hs_ds26DSK0;
        if (hs_ds26DSK0.notEvaluated) {
            hs_wild26DT4r = hs_ds26DSK0.hscall();
        }
        var hs_rb26DSKe = hs_wild26DT4r.data[0];
        var hs_rb126DSKf = hs_wild26DT4r.data[1];
        var hs_rb226DSKn = hs_wild26DT4r.data[2];
        var hs_b326DSKv = hs_wild26DT4r.data[3];
        var hs_sat26DT4X = new $hs.Thunk();
        hs_sat26DT4X.evaluateOnce = function () {
            var hs_sat26DT4U = new $hs.Thunk();
            hs_sat26DT4U.evaluateOnce = function () {
                var hs_sat26DT4R = new $hs.Thunk();
                hs_sat26DT4R.evaluateOnce = function () {
                    var hs_sat26DT4N = new $hs.Thunk();
                    hs_sat26DT4N.evaluateOnce = function () {
                        var hs_sat26DT4K = new $hs.Thunk();
                        hs_sat26DT4K.evaluateOnce = function () {
                            var hs_sat26DT4H = new $hs.Thunk();
                            hs_sat26DT4H.evaluateOnce = function () {
                                var hs_sat26DT4D = new $hs.Thunk();
                                hs_sat26DT4D.evaluateOnce = function () {
                                    var hs_sat26DT4A = new $hs.Thunk();
                                    hs_sat26DT4A.evaluateOnce = function () {
                                        var hs_sat26DT4x = new $hs.Thunk();
                                        hs_sat26DT4x.evaluateOnce = function () {
                                            var hs_sat26DT4u = new $hs.Thunk();
                                            hs_sat26DT4u.evaluateOnce = function () {
                                                var hs_sat26DT4s = new $hs.Data(1);
                                                hs_sat26DT4s.data = ["}"];
                                                var hs_sat26DT4t = new $hs.Data(2);
                                                hs_sat26DT4t.data = [hs_sat26DT4s, $hs.modules.GHCziTypes.hs_ZMZN];
                                                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DT4t);
                                            };
                                            var hs_sat26DT4w = new $hs.Thunk();
                                            hs_sat26DT4w.evaluateOnce = function () {
                                                var hs_sat26DT4v = new $hs.Data(1);
                                                hs_sat26DT4v.data = [0];
                                                return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.SystemziEventziManager.hs_zdfShowZLzmzgZR, hs_sat26DT4v, hs_b326DSKv);
                                            };
                                            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DT4w, hs_sat26DT4u);
                                        };
                                        var hs_sat26DT4z = new $hs.Thunk();
                                        hs_sat26DT4z.evaluateOnce = function () {
                                            var hs_sat26DT4y = new $hs.Thunk();
                                            hs_sat26DT4y.evaluateOnce = function () {
                                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("_fdCallback = \x00");
                                            };
                                            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DT4y);
                                        };
                                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DT4z, hs_sat26DT4x);
                                    };
                                    var hs_sat26DT4C = new $hs.Thunk();
                                    hs_sat26DT4C.evaluateOnce = function () {
                                        var hs_sat26DT4B = new $hs.Thunk();
                                        hs_sat26DT4B.evaluateOnce = function () {
                                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall(", \x00");
                                        };
                                        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DT4B);
                                    };
                                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DT4C, hs_sat26DT4A);
                                };
                                var hs_sat26DT4G = new $hs.Thunk();
                                hs_sat26DT4G.evaluateOnce = function () {
                                    var hs_sat26DT4E = new $hs.Data(1);
                                    hs_sat26DT4E.data = [hs_rb226DSKn];
                                    var hs_sat26DT4F = new $hs.Data(1);
                                    hs_sat26DT4F.data = [0];
                                    return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.SystemziEventziInternal.hs_zdfShowEvent, hs_sat26DT4F, hs_sat26DT4E);
                                };
                                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DT4G, hs_sat26DT4D);
                            };
                            var hs_sat26DT4J = new $hs.Thunk();
                            hs_sat26DT4J.evaluateOnce = function () {
                                var hs_sat26DT4I = new $hs.Thunk();
                                hs_sat26DT4I.evaluateOnce = function () {
                                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("fdEvents = \x00");
                                };
                                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DT4I);
                            };
                            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DT4J, hs_sat26DT4H);
                        };
                        var hs_sat26DT4M = new $hs.Thunk();
                        hs_sat26DT4M.evaluateOnce = function () {
                            var hs_sat26DT4L = new $hs.Thunk();
                            hs_sat26DT4L.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall(", \x00");
                            };
                            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DT4L);
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DT4M, hs_sat26DT4K);
                    };
                    var hs_sat26DT4Q = new $hs.Thunk();
                    hs_sat26DT4Q.evaluateOnce = function () {
                        var hs_sat26DT4O = new $hs.Data(1);
                        hs_sat26DT4O.data = [hs_rb26DSKe, hs_rb126DSKf];
                        var hs_sat26DT4P = new $hs.Data(1);
                        hs_sat26DT4P.data = [0];
                        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.SystemziEventziManager.hs_zdfShowFdKey, hs_sat26DT4P, hs_sat26DT4O);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DT4Q, hs_sat26DT4N);
                };
                var hs_sat26DT4T = new $hs.Thunk();
                hs_sat26DT4T.evaluateOnce = function () {
                    var hs_sat26DT4S = new $hs.Thunk();
                    hs_sat26DT4S.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("fdKey = \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DT4S);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DT4T, hs_sat26DT4R);
            };
            var hs_sat26DT4W = new $hs.Thunk();
            hs_sat26DT4W.evaluateOnce = function () {
                var hs_sat26DT4V = new $hs.Thunk();
                hs_sat26DT4V.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("FdData {\x00");
                };
                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DT4V);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DT4W, hs_sat26DT4U);
        };
        var hs_sat26DT4Z = new $hs.Thunk();
        hs_sat26DT4Z.evaluateOnce = function () {
            var hs_sat26DT4Y = new $hs.Data(1);
            hs_sat26DT4Y.data = [11];
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_a226DSK6, hs_sat26DT4Y);
        };
        return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DT4Z, hs_sat26DT4X);
    };
    hs_sat26DT50.evaluateOnce = function () {
        var hs_sat26DT51 = new $hs.Data(1);
        hs_sat26DT51.data = [0];
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.SystemziEventziManager.hs_zdfShowFdData, hs_sat26DT51);
    };
    this.hs_zdfShowFdData.data = [hs_zdcshowsPrec325vudH, hs_zdcshow325vuew, hs_zdcshowList325vueu];
    hs_zdcshowList325vueu.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DT50);
    };
    hs_zdcshow325vuew.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.SystemziEventziManager.hs_zdfShowFdData);
    };
    hs_zdczeze225vueA.evaluate = function (hs_ds26DSKT, hs_ds126DSKX) {
        var hs_wild26DT53 = hs_ds26DSKT;
        if (hs_ds26DSKT.notEvaluated) {
            hs_wild26DT53 = hs_ds26DSKT.hscall();
        }
        var hs_rb26DSL1 = hs_wild26DT53.data[0];
        var hs_rb126DSL6 = hs_wild26DT53.data[1];
        var hs_wild126DT52 = hs_ds126DSKX;
        if (hs_ds126DSKX.notEvaluated) {
            hs_wild126DT52 = hs_ds126DSKX.hscall();
        }
        var hs_rb226DSL3 = hs_wild126DT52.data[0];
        var hs_rb326DSL8 = hs_wild126DT52.data[1];
        var hs_sat26DT56 = new $hs.Thunk();
        hs_sat26DT56.evaluateOnce = function () {
            var hs_sat26DT54 = new $hs.Data(1);
            hs_sat26DT54.data = [hs_rb326DSL8];
            var hs_sat26DT55 = new $hs.Data(1);
            hs_sat26DT55.data = [hs_rb126DSL6];
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.SystemziEventziUnique.hs_zdfEqUnique, hs_sat26DT55, hs_sat26DT54);
        };
        var hs_sat26DT59 = new $hs.Thunk();
        hs_sat26DT59.evaluateOnce = function () {
            var hs_sat26DT57 = new $hs.Data(1);
            hs_sat26DT57.data = [hs_rb226DSL3];
            var hs_sat26DT58 = new $hs.Data(1);
            hs_sat26DT58.data = [hs_rb26DSL1];
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.SystemziPosixziTypes.hs_zdfEqFd, hs_sat26DT58, hs_sat26DT57);
        };
        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DT59, hs_sat26DT56);
    };
    this.hs_zdfEqFdKey.data = [hs_zdczeze225vueA, hs_zdczsze225vueW];
    hs_zdczsze225vueW.evaluate = function (hs_a226DSLf, hs_b26DSLg) {
        var hs_sat26DT5a = new $hs.Thunk();
        hs_sat26DT5a.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.SystemziEventziManager.hs_zdfEqFdKey, hs_a226DSLf, hs_b26DSLg);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DT5a);
    };
    hs_handleControlEvent25uqdG.evaluate = function (hs_mgr26DSLl, hs_reg26DSLz, hs_zuevt26DSM3) {
        var hs_sat26DT5o = new $hs.Func(1);
        hs_sat26DT5o.evaluate = function (hs_msg26DSLH) {
            var hs_wild26DT5b = hs_msg26DSLH;
            if (hs_msg26DSLH.notEvaluated) {
                hs_wild26DT5b = hs_msg26DSLH.hscall();
            }
            switch (hs_wild26DT5b.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            case 2:
                var hs_sat26DT5k = new $hs.Thunk();
                hs_sat26DT5k.evaluateOnce = function () {
                    var hs_wild126DT5d = hs_mgr26DSLl;
                    if (hs_mgr26DSLl.notEvaluated) {
                        hs_wild126DT5d = hs_mgr26DSLl.hscall();
                    }
                    var hs_rb226DSLS = hs_wild126DT5d.data[3];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb226DSLS];
                    return $res;
                };
                return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_sat26DT5k, $hs.modules.SystemziEventziManager.hs_Finished);
            case 3:
                var hs_rb26DSLX = hs_wild26DT5b.data[0];
                var hs_rb126DSLY = hs_wild26DT5b.data[1];
                var hs_rb226DSM0 = hs_wild26DT5b.data[2];
                var hs_sat26DT5l = new $hs.Data(1);
                hs_sat26DT5l.data = [hs_rb226DSM0];
                var hs_sat26DT5m = new $hs.Data(1);
                hs_sat26DT5m.data = [hs_rb26DSLX, hs_rb126DSLY];
                return $hs.modules.GHCziConcziSignal.hs_runHandlers.hscall(hs_sat26DT5m, hs_sat26DT5l);
            }
        };
        var hs_sat26DT5y = new $hs.Thunk();
        hs_sat26DT5y.evaluateOnce = function () {
            var hs_sat26DT5s = new $hs.Thunk();
            hs_sat26DT5s.evaluateOnce = function () {
                var hs_wild26DT5n = hs_reg26DSLz;
                if (hs_reg26DSLz.notEvaluated) {
                    hs_wild26DT5n = hs_reg26DSLz.hscall();
                }
                var hs_rb26DSLD = hs_wild26DT5n.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb26DSLD];
                return $res;
            };
            var hs_sat26DT5x = new $hs.Thunk();
            hs_sat26DT5x.evaluateOnce = function () {
                var hs_wild26DT5r = hs_mgr26DSLl;
                if (hs_mgr26DSLl.notEvaluated) {
                    hs_wild26DT5r = hs_mgr26DSLl.hscall();
                }
                var hs_rb326DSLv = hs_wild26DT5r.data[5];
                var hs_rb426DSLw = hs_wild26DT5r.data[6];
                var hs_rb526DSLx = hs_wild26DT5r.data[7];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb326DSLv, hs_rb426DSLw, hs_rb526DSLx];
                return $res;
            };
            return $hs.modules.SystemziEventziControl.hs_readControlMessage.hscall(hs_sat26DT5x, hs_sat26DT5s);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DT5y, hs_sat26DT5o);
    };
    this.hs_shutdown.evaluate = function (hs_mgr26DSM5) {
        var hs_sat26DT5J = new $hs.Func(1);
        hs_sat26DT5J.evaluate = function (hs_state26DSMn) {
            var hs_sat26DT5G = new $hs.Thunk();
            hs_sat26DT5G.evaluateOnce = function () {
                var hs_sat26DT5F = new $hs.Thunk();
                hs_sat26DT5F.evaluateOnce = function () {
                    var hs_wild26DT5A = hs_mgr26DSM5;
                    if (hs_mgr26DSM5.notEvaluated) {
                        hs_wild26DT5A = hs_mgr26DSM5.hscall();
                    }
                    var hs_rb326DSMz = hs_wild26DT5A.data[5];
                    var hs_rb426DSMA = hs_wild26DT5A.data[6];
                    var hs_rb526DSMB = hs_wild26DT5A.data[7];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb326DSMz, hs_rb426DSMA, hs_rb526DSMB];
                    return $res;
                };
                return $hs.modules.SystemziEventziControl.hs_sendDie.hscall(hs_sat26DT5F);
            };
            var hs_sat26DT5I = new $hs.Thunk();
            hs_sat26DT5I.evaluateOnce = function () {
                var hs_sat26DT5H = new $hs.Thunk();
                hs_sat26DT5H.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.SystemziEventziManager.hs_zdfEqState, hs_state26DSMn, $hs.modules.SystemziEventziManager.hs_Running);
                };
                return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DT5H);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DT5I, hs_sat26DT5G);
        };
        var hs_sat26DT5V = new $hs.Thunk();
        hs_sat26DT5V.evaluateOnce = function () {
            var hs_sat26DT5M = new $hs.Func(1);
            hs_sat26DT5M.evaluate = function (hs_s26DSMj) {
                var $res = new $hs.Data(1);
                $res.data = [$hs.modules.SystemziEventziManager.hs_Dying, hs_s26DSMj];
                return $res;
            };
            var hs_sat26DT5U = new $hs.Thunk();
            hs_sat26DT5U.evaluateOnce = function () {
                var hs_sat26DT5T = new $hs.Thunk();
                hs_sat26DT5T.evaluateOnce = function () {
                    var hs_wild26DT5L = hs_mgr26DSM5;
                    if (hs_mgr26DSM5.notEvaluated) {
                        hs_wild26DT5L = hs_mgr26DSM5.hscall();
                    }
                    var hs_rb226DSMf = hs_wild26DT5L.data[3];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb226DSMf];
                    return $res;
                };
                return $hs.modules.DataziIORef.hs_atomicModifyIORef.hscall(hs_sat26DT5T);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DT5U, hs_sat26DT5M);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DT5V, hs_sat26DT5J);
    };
    this.hs_finished.evaluate = function (hs_mgr26DSMJ) {
        var hs_sat26DT65 = new $hs.Thunk();
        hs_sat26DT65.evaluateOnce = function () {
            var hs_sat26DT64 = new $hs.Thunk();
            hs_sat26DT64.evaluateOnce = function () {
                var hs_wild26DT5X = hs_mgr26DSMJ;
                if (hs_mgr26DSMJ.notEvaluated) {
                    hs_wild26DT5X = hs_mgr26DSMJ.hscall();
                }
                var hs_rb226DSMT = hs_wild26DT5X.data[3];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb226DSMT];
                return $res;
            };
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_sat26DT64);
        };
        var hs_sat26DT66 = new $hs.Func(1);
        hs_sat26DT66.evaluate = function (hs_ds26DSMH) {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.SystemziEventziManager.hs_zdfEqState, hs_ds26DSMH, $hs.modules.SystemziEventziManager.hs_Finished);
        };
        return $hs.modules.ControlziMonad.hs_liftM.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DT66, hs_sat26DT65);
    };
    this.hs_cleanup.evaluate = function (hs_ds26DSMX) {
        var hs_wild26DT67 = hs_ds26DSMX;
        if (hs_ds26DSMX.notEvaluated) {
            hs_wild26DT67 = hs_ds26DSMX.hscall();
        }
        var hs_ds126DSNa = hs_wild26DT67.data[0];
        var hs_rb226DSN7 = hs_wild26DT67.data[3];
        var hs_rb326DSNc = hs_wild26DT67.data[5];
        var hs_rb426DSNd = hs_wild26DT67.data[6];
        var hs_rb526DSNe = hs_wild26DT67.data[7];
        var hs_sat26DT6e = new $hs.Thunk();
        hs_sat26DT6e.evaluateOnce = function () {
            var hs_sat26DT6c = new $hs.Thunk();
            hs_sat26DT6c.evaluateOnce = function () {
                var hs_sat26DT6b = new $hs.Data(1);
                hs_sat26DT6b.data = [hs_rb326DSNc, hs_rb426DSNd, hs_rb526DSNe];
                return $hs.modules.SystemziEventziControl.hs_closeControl.hscall(hs_sat26DT6b);
            };
            var hs_sat26DT6d = new $hs.Thunk();
            hs_sat26DT6d.evaluateOnce = function () {
                return $hs.modules.SystemziEventziInternal.hs_delete.hscall(hs_ds126DSNa);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DT6d, hs_sat26DT6c);
        };
        var hs_sat26DT6g = new $hs.Thunk();
        hs_sat26DT6g.evaluateOnce = function () {
            var hs_sat26DT6f = new $hs.Data(1);
            hs_sat26DT6f.data = [hs_rb226DSN7];
            return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_sat26DT6f, $hs.modules.SystemziEventziManager.hs_Finished);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DT6g, hs_sat26DT6e);
    };
    this.hs_updateTimeout.evaluate = function (hs_mgr26DSNt, hs_ds26DSNI, hs_us26DSNn) {
        var hs_sat26DT6H = new $hs.Func(1);
        hs_sat26DT6H.evaluate = function (hs_now26DSNr) {
            var hs_expTime26DSNs = new $hs.Thunk();
            hs_expTime26DSNs.evaluateOnce = function () {
                var hs_sat26DT6j = new $hs.Thunk();
                hs_sat26DT6j.evaluateOnce = function () {
                    var hs_sat26DT6h = new $hs.Data(1);
                    hs_sat26DT6h.data = [1000000 % 1];
                    var hs_sat26DT6i = new $hs.Thunk();
                    hs_sat26DT6i.evaluateOnce = function () {
                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziFloat.hs_zdfNumDouble, hs_us26DSNn);
                    };
                    return $hs.modules.GHCziReal.hs_zs.hscall($hs.modules.GHCziFloat.hs_zdfFractionalDouble, hs_sat26DT6i, hs_sat26DT6h);
                };
                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_sat26DT6j, hs_now26DSNr);
            };
            var hs_sat26DT6r = new $hs.Thunk();
            hs_sat26DT6r.evaluateOnce = function () {
                var hs_sat26DT6q = new $hs.Thunk();
                hs_sat26DT6q.evaluateOnce = function () {
                    var hs_wild26DT6l = hs_mgr26DSNt;
                    if (hs_mgr26DSNt.notEvaluated) {
                        hs_wild26DT6l = hs_mgr26DSNt.hscall();
                    }
                    var hs_rb326DSNX = hs_wild26DT6l.data[5];
                    var hs_rb426DSNY = hs_wild26DT6l.data[6];
                    var hs_rb526DSNZ = hs_wild26DT6l.data[7];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb326DSNX, hs_rb426DSNY, hs_rb526DSNZ];
                    return $res;
                };
                return $hs.modules.SystemziEventziControl.hs_sendWakeup.hscall(hs_sat26DT6q);
            };
            var hs_sat26DT6G = new $hs.Thunk();
            hs_sat26DT6G.evaluateOnce = function () {
                var hs_sat26DT6x = new $hs.Func(1);
                hs_sat26DT6x.evaluate = function (hs_f26DSNK) {
                    var hs_sat26DT6u = new $hs.Thunk();
                    hs_sat26DT6u.evaluateOnce = function () {
                        var hs_sat26DT6t = new $hs.Thunk();
                        hs_sat26DT6t.evaluateOnce = function () {
                            var hs_sat26DT6s = new $hs.Thunk();
                            hs_sat26DT6s.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_const.hscall(hs_expTime26DSNs);
                            };
                            return $hs.modules.SystemziEventziPSQ.hs_adjust.hscall(hs_sat26DT6s, hs_ds26DSNI);
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DT6t, hs_f26DSNK);
                    };
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26DT6u, $hs.modules.GHCziUnit.hs_Z0T];
                    return $res;
                };
                var hs_sat26DT6F = new $hs.Thunk();
                hs_sat26DT6F.evaluateOnce = function () {
                    var hs_sat26DT6E = new $hs.Thunk();
                    hs_sat26DT6E.evaluateOnce = function () {
                        var hs_wild26DT6w = hs_mgr26DSNt;
                        if (hs_mgr26DSNt.notEvaluated) {
                            hs_wild26DT6w = hs_mgr26DSNt.hscall();
                        }
                        var hs_rb126DSND = hs_wild26DT6w.data[2];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb126DSND];
                        return $res;
                    };
                    return $hs.modules.DataziIORef.hs_atomicModifyIORef.hscall(hs_sat26DT6E);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DT6F, hs_sat26DT6x);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DT6G, hs_sat26DT6r);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.SystemziEventziClock.hs_getCurrentTime, hs_sat26DT6H);
    };
    this.hs_unregisterTimeout.evaluate = function (hs_mgr26DSO5, hs_ds26DSOj) {
        var hs_sat26DT6P = new $hs.Thunk();
        hs_sat26DT6P.evaluateOnce = function () {
            var hs_sat26DT6O = new $hs.Thunk();
            hs_sat26DT6O.evaluateOnce = function () {
                var hs_wild26DT6J = hs_mgr26DSO5;
                if (hs_mgr26DSO5.notEvaluated) {
                    hs_wild26DT6J = hs_mgr26DSO5.hscall();
                }
                var hs_rb326DSOy = hs_wild26DT6J.data[5];
                var hs_rb426DSOz = hs_wild26DT6J.data[6];
                var hs_rb526DSOA = hs_wild26DT6J.data[7];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb326DSOy, hs_rb426DSOz, hs_rb526DSOA];
                return $res;
            };
            return $hs.modules.SystemziEventziControl.hs_sendWakeup.hscall(hs_sat26DT6O);
        };
        var hs_sat26DT73 = new $hs.Thunk();
        hs_sat26DT73.evaluateOnce = function () {
            var hs_sat26DT6U = new $hs.Func(1);
            hs_sat26DT6U.evaluate = function (hs_f26DSOl) {
                var hs_sat26DT6R = new $hs.Thunk();
                hs_sat26DT6R.evaluateOnce = function () {
                    var hs_sat26DT6Q = new $hs.Thunk();
                    hs_sat26DT6Q.evaluateOnce = function () {
                        return $hs.modules.SystemziEventziPSQ.hs_delete.hscall(hs_ds26DSOj);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DT6Q, hs_f26DSOl);
                };
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26DT6R, $hs.modules.GHCziUnit.hs_Z0T];
                return $res;
            };
            var hs_sat26DT72 = new $hs.Thunk();
            hs_sat26DT72.evaluateOnce = function () {
                var hs_sat26DT71 = new $hs.Thunk();
                hs_sat26DT71.evaluateOnce = function () {
                    var hs_wild26DT6T = hs_mgr26DSO5;
                    if (hs_mgr26DSO5.notEvaluated) {
                        hs_wild26DT6T = hs_mgr26DSO5.hscall();
                    }
                    var hs_rb126DSOf = hs_wild26DT6T.data[2];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb126DSOf];
                    return $res;
                };
                return $hs.modules.DataziIORef.hs_atomicModifyIORef.hscall(hs_sat26DT71);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DT72, hs_sat26DT6U);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DT73, hs_sat26DT6P);
    };
    this.hs_registerTimeout.evaluate = function (hs_mgr26DSOG, hs_us26DSOX, hs_cb26DSPl) {
        var hs_sat26DT7C = new $hs.Func(1);
        hs_sat26DT7C.evaluate = function (hs_key26DSOU) {
            var hs_nt26DSPk = hs_key26DSOU;
            if (hs_key26DSOU.notEvaluated) {
                hs_nt26DSPk = hs_key26DSOU.hscall();
            }
            var hs_sat26DT76 = new $hs.Thunk();
            hs_sat26DT76.evaluateOnce = function () {
                var hs_sat26DT75 = new $hs.Thunk();
                hs_sat26DT75.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DT75, hs_nt26DSPk);
            };
            var hs_sat26DT7z = new $hs.Thunk();
            hs_sat26DT7z.evaluateOnce = function () {
                var hs_sat26DT78 = new $hs.Data(1);
                hs_sat26DT78.data = [0];
                var hs_wild26DT77 = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_us26DSOX, hs_sat26DT78);
                switch (hs_wild26DT77.tag) {
                case 1:
                    var hs_sat26DT7y = new $hs.Func(1);
                    hs_sat26DT7y.evaluate = function (hs_now26DSP5) {
                        var hs_expTime26DSP6 = new $hs.Thunk();
                        hs_expTime26DSP6.evaluateOnce = function () {
                            var hs_sat26DT7b = new $hs.Thunk();
                            hs_sat26DT7b.evaluateOnce = function () {
                                var hs_sat26DT79 = new $hs.Data(1);
                                hs_sat26DT79.data = [1000000 % 1];
                                var hs_sat26DT7a = new $hs.Thunk();
                                hs_sat26DT7a.evaluateOnce = function () {
                                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziFloat.hs_zdfNumDouble, hs_us26DSOX);
                                };
                                return $hs.modules.GHCziReal.hs_zs.hscall($hs.modules.GHCziFloat.hs_zdfFractionalDouble, hs_sat26DT7a, hs_sat26DT79);
                            };
                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_sat26DT7b, hs_now26DSP5);
                        };
                        var hs_sat26DT7j = new $hs.Thunk();
                        hs_sat26DT7j.evaluateOnce = function () {
                            var hs_sat26DT7i = new $hs.Thunk();
                            hs_sat26DT7i.evaluateOnce = function () {
                                var hs_wild126DT7d = hs_mgr26DSOG;
                                if (hs_mgr26DSOG.notEvaluated) {
                                    hs_wild126DT7d = hs_mgr26DSOG.hscall();
                                }
                                var hs_rb326DSPA = hs_wild126DT7d.data[5];
                                var hs_rb426DSPB = hs_wild126DT7d.data[6];
                                var hs_rb526DSPC = hs_wild126DT7d.data[7];
                                var $res = new $hs.Data(1);
                                $res.data = [hs_rb326DSPA, hs_rb426DSPB, hs_rb526DSPC];
                                return $res;
                            };
                            return $hs.modules.SystemziEventziControl.hs_sendWakeup.hscall(hs_sat26DT7i);
                        };
                        var hs_sat26DT7x = new $hs.Thunk();
                        hs_sat26DT7x.evaluateOnce = function () {
                            var hs_sat26DT7o = new $hs.Func(1);
                            hs_sat26DT7o.evaluate = function (hs_f26DSPn) {
                                var hs_sat26DT7l = new $hs.Thunk();
                                hs_sat26DT7l.evaluateOnce = function () {
                                    var hs_sat26DT7k = new $hs.Thunk();
                                    hs_sat26DT7k.evaluateOnce = function () {
                                        return $hs.modules.SystemziEventziPSQ.hs_insert.hscall(hs_nt26DSPk, hs_expTime26DSP6, hs_cb26DSPl);
                                    };
                                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DT7k, hs_f26DSPn);
                                };
                                var $res = new $hs.Data(1);
                                $res.data = [hs_sat26DT7l, $hs.modules.GHCziUnit.hs_Z0T];
                                return $res;
                            };
                            var hs_sat26DT7w = new $hs.Thunk();
                            hs_sat26DT7w.evaluateOnce = function () {
                                var hs_sat26DT7v = new $hs.Thunk();
                                hs_sat26DT7v.evaluateOnce = function () {
                                    var hs_wild126DT7n = hs_mgr26DSOG;
                                    if (hs_mgr26DSOG.notEvaluated) {
                                        hs_wild126DT7n = hs_mgr26DSOG.hscall();
                                    }
                                    var hs_rb126DSPg = hs_wild126DT7n.data[2];
                                    var $res = new $hs.Data(1);
                                    $res.data = [hs_rb126DSPg];
                                    return $res;
                                };
                                return $hs.modules.DataziIORef.hs_atomicModifyIORef.hscall(hs_sat26DT7v);
                            };
                            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DT7w, hs_sat26DT7o);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DT7x, hs_sat26DT7j);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.SystemziEventziClock.hs_getCurrentTime, hs_sat26DT7y);
                case 2:
                    if (hs_cb26DSPl.notEvaluated) {
                        return hs_cb26DSPl.hscall();
                    } else {
                        return hs_cb26DSPl;
                    }
                }
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DT7z, hs_sat26DT76);
        };
        var hs_sat26DT7K = new $hs.Thunk();
        hs_sat26DT7K.evaluateOnce = function () {
            var hs_sat26DT7J = new $hs.Thunk();
            hs_sat26DT7J.evaluateOnce = function () {
                var hs_wild26DT7B = hs_mgr26DSOG;
                if (hs_mgr26DSOG.notEvaluated) {
                    hs_wild26DT7B = hs_mgr26DSOG.hscall();
                }
                var hs_ds126DSOQ = hs_wild26DT7B.data[4];
                if (hs_ds126DSOQ.notEvaluated) {
                    return hs_ds126DSOQ.hscall();
                } else {
                    return hs_ds126DSOQ;
                }
            };
            return $hs.modules.SystemziEventziUnique.hs_newUnique.hscall(hs_sat26DT7J);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DT7K, hs_sat26DT7C);
    };
    hs_sat26DT7Q.evaluateOnce = function () {
        var hs_sat26DT7P = new $hs.Func(1);
        hs_sat26DT7P.evaluate = function (hs_ds26DSPM) {
            var hs_wild26DT7M = hs_ds26DSPM;
            if (hs_ds26DSPM.notEvaluated) {
                hs_wild26DT7M = hs_ds26DSPM.hscall();
            }
            var hs_rb226DSPS = hs_wild26DT7M.data[2];
            var $res = new $hs.Data(1);
            $res.data = [hs_rb226DSPS];
            return $res;
        };
        return $hs.modules.GHCziBase.hs_map.hscall(hs_sat26DT7P);
    };
    hs_sat26DT7R.evaluateOnce = function () {
        return $hs.modules.DataziMonoid.hs_mconcat.hscall($hs.modules.SystemziEventziInternal.hs_zdfMonoidEvent);
    };
    hs_eventsOf25uqe4.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DT7R, hs_sat26DT7Q);
    };
    hs_pairEvents25uqe6.evaluate = function (hs_prev26DSPY, hs_m26DSQ1, hs_fd26DSQ0) {
        var hs_sat26DT7T = new $hs.Thunk();
        hs_sat26DT7T.evaluateOnce = function () {
            var hs_wild26DT7S = $hs.modules.SystemziEventziIntMap.hs_lookup.hscall(hs_fd26DSQ0, hs_m26DSQ1);
            switch (hs_wild26DT7S.tag) {
            case 1:
                return $hs.modules.DataziMonoid.hs_mempty.hscall($hs.modules.SystemziEventziInternal.hs_zdfMonoidEvent);
            case 2:
                var hs_fds26DSQ4 = hs_wild26DT7S.data[0];
                return hs_eventsOf25uqe4.hscall(hs_fds26DSQ4);
            }
        };
        var hs_sat26DT7U = new $hs.Thunk();
        hs_sat26DT7U.evaluateOnce = function () {
            return hs_eventsOf25uqe4.hscall(hs_prev26DSPY);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DT7U, hs_sat26DT7T];
        return $res;
    };
    this.hs_registerFdzu.evaluate = function (hs_ds26DSQa, hs_cb26DSQB, hs_fd26DSQs, hs_evs26DSQy) {
        var hs_wild26DT7V = hs_ds26DSQa;
        if (hs_ds26DSQa.notEvaluated) {
            hs_wild26DT7V = hs_ds26DSQa.hscall();
        }
        var hs_ds126DSRw = hs_wild26DT7V.data[0];
        var hs_rb26DSQl = hs_wild26DT7V.data[1];
        var hs_ds226DSQn = hs_wild26DT7V.data[4];
        var hs_emFds26DSQm = new $hs.Data(1);
        hs_emFds26DSQm.data = [hs_rb26DSQl];
        var hs_sat26DT8s = new $hs.Func(1);
        hs_sat26DT8s.evaluate = function (hs_u26DSQv) {
            var hs_sat26DT8q = new $hs.Func(1);
            hs_sat26DT8q.evaluate = function (hs_oldMap26DSQO) {
                var hs_tpl26DSQE = hs_fd26DSQs;
                if (hs_fd26DSQs.notEvaluated) {
                    hs_tpl26DSQE = hs_fd26DSQs.hscall();
                }
                var hs_tpl126DSQI = hs_tpl26DSQE.data[0];
                var hs_tpl226DT81 = hs_u26DSQv;
                if (hs_u26DSQv.notEvaluated) {
                    hs_tpl226DT81 = hs_u26DSQv.hscall();
                }
                var hs_tpl326DSQJ = hs_tpl226DT81.data[0];
                var hs_tpl426DSQY = hs_evs26DSQy;
                if (hs_evs26DSQy.notEvaluated) {
                    hs_tpl426DSQY = hs_evs26DSQy.hscall();
                }
                var hs_tpl526DSQK = hs_tpl426DSQY.data[0];
                var hs_tpl626DSQL = hs_cb26DSQB;
                if (hs_cb26DSQB.notEvaluated) {
                    hs_tpl626DSQL = hs_cb26DSQB.hscall();
                }
                var hs_fdzq26DSQF = new $hs.Thunk();
                hs_fdzq26DSQF.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralFd, $hs.modules.GHCziNum.hs_zdfNumInt, hs_tpl26DSQE);
                };
                var hs_ds326DSR9 = new $hs.Thunk();
                var hs_newMap26DSR4 = new $hs.Thunk();
                hs_ds326DSR9.evaluateOnce = function () {
                    var hs_sat26DT82 = new $hs.Data(1);
                    hs_sat26DT82.data = [hs_tpl126DSQI, hs_tpl326DSQJ, hs_tpl526DSQK, hs_tpl626DSQL];
                    var hs_sat26DT85 = new $hs.Data(2);
                    hs_sat26DT85.data = [hs_sat26DT82, $hs.modules.GHCziTypes.hs_ZMZN];
                    var hs_wild126DT84 = $hs.modules.SystemziEventziIntMap.hs_insertWith.hscall($hs.modules.GHCziBase.hs_zpzp, hs_fdzq26DSQF, hs_sat26DT85, hs_oldMap26DSQO);
                    var hs_ds426DSQS = hs_wild126DT84.data[0];
                    var hs_n26DSQU = hs_wild126DT84.data[1];
                    var hs_wild226DT83 = hs_ds426DSQS;
                    if (hs_ds426DSQS.notEvaluated) {
                        hs_wild226DT83 = hs_ds426DSQS.hscall();
                    }
                    switch (hs_wild226DT83.tag) {
                    case 1:
                        var hs_newMap126DSQW = hs_n26DSQU;
                        if (hs_n26DSQU.notEvaluated) {
                            hs_newMap126DSQW = hs_n26DSQU.hscall();
                        }
                        var hs_sat26DT86 = new $hs.Thunk();
                        hs_sat26DT86.evaluateOnce = function () {
                            return $hs.modules.DataziMonoid.hs_mempty.hscall($hs.modules.SystemziEventziInternal.hs_zdfMonoidEvent);
                        };
                        var $res = new $hs.Data(1);
                        $res.data = [hs_newMap126DSQW, hs_sat26DT86, hs_tpl426DSQY];
                        return $res;
                    case 2:
                        var hs_prev26DSR2 = hs_wild226DT83.data[0];
                        var hs_newMap126DSR1 = hs_n26DSQU;
                        if (hs_n26DSQU.notEvaluated) {
                            hs_newMap126DSR1 = hs_n26DSQU.hscall();
                        }
                        var hs_sat26DT88 = new $hs.Thunk();
                        hs_sat26DT88.evaluateOnce = function () {
                            var hs_wild326DT87 = $hs.modules.SystemziEventziIntMap.hs_lookup.hscall(hs_fdzq26DSQF, hs_newMap26DSR4);
                            switch (hs_wild326DT87.tag) {
                            case 1:
                                return $hs.modules.DataziMonoid.hs_mempty.hscall($hs.modules.SystemziEventziInternal.hs_zdfMonoidEvent);
                            case 2:
                                var hs_fds26DSR7 = hs_wild326DT87.data[0];
                                return hs_eventsOf25uqe4.hscall(hs_fds26DSR7);
                            }
                        };
                        var hs_sat26DT89 = new $hs.Thunk();
                        hs_sat26DT89.evaluateOnce = function () {
                            return hs_eventsOf25uqe4.hscall(hs_prev26DSR2);
                        };
                        var $res = new $hs.Data(1);
                        $res.data = [hs_newMap126DSR1, hs_sat26DT89, hs_sat26DT88];
                        return $res;
                    }
                };
                hs_newMap26DSR4.evaluateOnce = function () {
                    var hs_ds426DT8a = hs_ds326DSR9;
                    if (hs_ds326DSR9.notEvaluated) {
                        hs_ds426DT8a = hs_ds326DSR9.hscall();
                    }
                    var hs_newMap126DSRe = hs_ds426DT8a.data[0];
                    if (hs_newMap126DSRe.notEvaluated) {
                        return hs_newMap126DSRe.hscall();
                    } else {
                        return hs_newMap126DSRe;
                    }
                };
                var hs_oldEvs26DSRl = new $hs.Thunk();
                hs_oldEvs26DSRl.evaluateOnce = function () {
                    var hs_ds426DT8e = hs_ds326DSR9;
                    if (hs_ds326DSR9.notEvaluated) {
                        hs_ds426DT8e = hs_ds326DSR9.hscall();
                    }
                    var hs_oldEvs126DSRk = hs_ds426DT8e.data[1];
                    if (hs_oldEvs126DSRk.notEvaluated) {
                        return hs_oldEvs126DSRk.hscall();
                    } else {
                        return hs_oldEvs126DSRk;
                    }
                };
                var hs_newEvs26DSRs = new $hs.Thunk();
                hs_newEvs26DSRs.evaluateOnce = function () {
                    var hs_ds426DT8h = hs_ds326DSR9;
                    if (hs_ds326DSR9.notEvaluated) {
                        hs_ds426DT8h = hs_ds326DSR9.hscall();
                    }
                    var hs_newEvs126DSRr = hs_ds426DT8h.data[2];
                    if (hs_newEvs126DSRr.notEvaluated) {
                        return hs_newEvs126DSRr.hscall();
                    } else {
                        return hs_newEvs126DSRr;
                    }
                };
                var hs_modify26DSRu = new $hs.Thunk();
                hs_modify26DSRu.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.SystemziEventziInternal.hs_zdfEqEvent, hs_oldEvs26DSRl, hs_newEvs26DSRs);
                };
                var hs_sat26DT8m = new $hs.Thunk();
                hs_sat26DT8m.evaluateOnce = function () {
                    var hs_sat26DT8j = new $hs.Data(1);
                    hs_sat26DT8j.data = [hs_tpl126DSQI, hs_tpl326DSQJ];
                    var hs_sat26DT8k = new $hs.Data(1);
                    hs_sat26DT8k.data = [hs_sat26DT8j, hs_modify26DSRu];
                    var hs_sat26DT8l = new $hs.Data(1);
                    hs_sat26DT8l.data = [hs_newMap26DSR4, hs_sat26DT8k];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DT8l);
                };
                var hs_sat26DT8p = new $hs.Thunk();
                hs_sat26DT8p.evaluateOnce = function () {
                    var hs_sat26DT8n = new $hs.Thunk();
                    hs_sat26DT8n.evaluateOnce = function () {
                        return $hs.modules.SystemziEventziInternal.hs_modifyFd.hscall(hs_ds126DSRw, hs_tpl26DSQE, hs_oldEvs26DSRl, hs_newEvs26DSRs);
                    };
                    var hs_sat26DT8o = new $hs.Thunk();
                    hs_sat26DT8o.evaluateOnce = function () {
                        return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_modify26DSRu);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DT8o, hs_sat26DT8n);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DT8p, hs_sat26DT8m);
            };
            var hs_sat26DT8r = new $hs.Thunk();
            hs_sat26DT8r.evaluateOnce = function () {
                return $hs.modules.ControlziConcurrentziMVar.hs_modifyMVar.hscall(hs_emFds26DSQm);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DT8r, hs_sat26DT8q);
        };
        var hs_sat26DT8t = new $hs.Thunk();
        hs_sat26DT8t.evaluateOnce = function () {
            return $hs.modules.SystemziEventziUnique.hs_newUnique.hscall(hs_ds226DSQn);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DT8t, hs_sat26DT8s);
    };
    this.hs_newWith.evaluate = function (hs_be26DSRZ) {
        var hs_sat26DTa6 = new $hs.Func(1);
        hs_sat26DTa6.evaluate = function (hs_iofds26DSSa) {
            var hs_sat26DTa4 = new $hs.Func(1);
            hs_sat26DTa4.evaluate = function (hs_timeouts26DSSd) {
                var hs_sat26DTa3 = new $hs.Func(1);
                hs_sat26DTa3.evaluate = function (hs_ctrl26DSS1) {
                    var hs_sat26DTa1 = new $hs.Func(1);
                    hs_sat26DTa1.evaluate = function (hs_state26DSRO) {
                        var hs_sat26DTa0 = new $hs.Func(1);
                        hs_sat26DTa0.evaluate = function (hs_us26DSSi) {
                            var hs_sat26DT9N = new $hs.Func(1);
                            hs_sat26DT9N.evaluate = function (hs_ds26DT8u) {
                                var hs_mgr26DSSw = new $hs.Thunk();
                                hs_mgr26DSSw.evaluateOnce = function () {
                                    var hs_tpl26DSSo = hs_be26DSRZ;
                                    if (hs_be26DSRZ.notEvaluated) {
                                        hs_tpl26DSSo = hs_be26DSRZ.hscall();
                                    }
                                    var hs_tpl126DT8y = hs_iofds26DSSa;
                                    if (hs_iofds26DSSa.notEvaluated) {
                                        hs_tpl126DT8y = hs_iofds26DSSa.hscall();
                                    }
                                    var hs_tpl226DSSp = hs_tpl126DT8y.data[0];
                                    var hs_tpl326DT8x = hs_timeouts26DSSd;
                                    if (hs_timeouts26DSSd.notEvaluated) {
                                        hs_tpl326DT8x = hs_timeouts26DSSd.hscall();
                                    }
                                    var hs_tpl426DSSq = hs_tpl326DT8x.data[0];
                                    var hs_tpl526DT8w = hs_state26DSRO;
                                    if (hs_state26DSRO.notEvaluated) {
                                        hs_tpl526DT8w = hs_state26DSRO.hscall();
                                    }
                                    var hs_tpl626DSSr = hs_tpl526DT8w.data[0];
                                    var hs_tpl726DSSs = hs_us26DSSi;
                                    if (hs_us26DSSi.notEvaluated) {
                                        hs_tpl726DSSs = hs_us26DSSi.hscall();
                                    }
                                    var hs_tpl826DT8v = hs_ctrl26DSS1;
                                    if (hs_ctrl26DSS1.notEvaluated) {
                                        hs_tpl826DT8v = hs_ctrl26DSS1.hscall();
                                    }
                                    var hs_tpl926DSSt = hs_tpl826DT8v.data[0];
                                    var hs_tpl1026DSSu = hs_tpl826DT8v.data[1];
                                    var hs_tpl1126DSSv = hs_tpl826DT8v.data[2];
                                    var $res = new $hs.Data(1);
                                    $res.data = [hs_tpl26DSSo, hs_tpl226DSSp, hs_tpl426DSSq, hs_tpl626DSSr, hs_tpl726DSSs, hs_tpl926DSSt, hs_tpl1026DSSu, hs_tpl1126DSSv];
                                    return $res;
                                };
                                var hs_sat26DT9c = new $hs.Func(1);
                                hs_sat26DT9c.evaluate = function (hs_ds126DT8z) {
                                    var hs_sat26DT8B = new $hs.Func(1);
                                    hs_sat26DT8B.evaluate = function (hs_ds226DT8A) {
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_mgr26DSSw);
                                    };
                                    var hs_sat26DT9b = new $hs.Thunk();
                                    hs_sat26DT9b.evaluateOnce = function () {
                                        var hs_cb26DSU3 = new $hs.Func(2);
                                        hs_cb26DSU3.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
                                            return hs_handleControlEvent25uqdG.hscall(hs_mgr26DSSw, hs_eta1cW6l4, hs_eta1cW6l3);
                                        };
                                        var hs_fd26DSU5 = new $hs.Thunk();
                                        hs_fd26DSU5.evaluateOnce = function () {
                                            return $hs.modules.SystemziEventziControl.hs_wakeupReadFd.hscall(hs_ctrl26DSS1);
                                        };
                                        var hs_wild26DT8C = hs_mgr26DSSw;
                                        if (hs_mgr26DSSw.notEvaluated) {
                                            hs_wild26DT8C = hs_mgr26DSSw.hscall();
                                        }
                                        var hs_ds226DSVm = hs_wild26DT8C.data[0];
                                        var hs_rb26DSUg = hs_wild26DT8C.data[1];
                                        var hs_ds326DSUi = hs_wild26DT8C.data[4];
                                        var hs_emFds26DSUh = new $hs.Data(1);
                                        hs_emFds26DSUh.data = [hs_rb26DSUg];
                                        var hs_sat26DT99 = new $hs.Func(1);
                                        hs_sat26DT99.evaluate = function (hs_u26DSUp) {
                                            var hs_sat26DT97 = new $hs.Func(1);
                                            hs_sat26DT97.evaluate = function (hs_oldMap26DSUE) {
                                                var hs_tpl26DSUv = hs_fd26DSU5;
                                                if (hs_fd26DSU5.notEvaluated) {
                                                    hs_tpl26DSUv = hs_fd26DSU5.hscall();
                                                }
                                                var hs_tpl126DSUz = hs_tpl26DSUv.data[0];
                                                var hs_tpl226DT8I = hs_u26DSUp;
                                                if (hs_u26DSUp.notEvaluated) {
                                                    hs_tpl226DT8I = hs_u26DSUp.hscall();
                                                }
                                                var hs_tpl326DSUA = hs_tpl226DT8I.data[0];
                                                var hs_tpl426DSUO = $hs.modules.SystemziEventziInternal.hs_evtRead;
                                                if ($hs.modules.SystemziEventziInternal.hs_evtRead.notEvaluated) {
                                                    hs_tpl426DSUO = $hs.modules.SystemziEventziInternal.hs_evtRead.hscall();
                                                }
                                                var hs_tpl526DSUB = hs_tpl426DSUO.data[0];
                                                var hs_fdzq26DSUw = new $hs.Thunk();
                                                hs_fdzq26DSUw.evaluateOnce = function () {
                                                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralFd, $hs.modules.GHCziNum.hs_zdfNumInt, hs_tpl26DSUv);
                                                };
                                                var hs_ds426DSUZ = new $hs.Thunk();
                                                var hs_newMap26DSUU = new $hs.Thunk();
                                                hs_ds426DSUZ.evaluateOnce = function () {
                                                    var hs_sat26DT8J = new $hs.Data(1);
                                                    hs_sat26DT8J.data = [hs_tpl126DSUz, hs_tpl326DSUA, hs_tpl526DSUB, hs_cb26DSU3];
                                                    var hs_sat26DT8M = new $hs.Data(2);
                                                    hs_sat26DT8M.data = [hs_sat26DT8J, $hs.modules.GHCziTypes.hs_ZMZN];
                                                    var hs_wild126DT8L = $hs.modules.SystemziEventziIntMap.hs_insertWith.hscall($hs.modules.GHCziBase.hs_zpzp, hs_fdzq26DSUw, hs_sat26DT8M, hs_oldMap26DSUE);
                                                    var hs_ds526DSUI = hs_wild126DT8L.data[0];
                                                    var hs_n26DSUK = hs_wild126DT8L.data[1];
                                                    var hs_wild226DT8K = hs_ds526DSUI;
                                                    if (hs_ds526DSUI.notEvaluated) {
                                                        hs_wild226DT8K = hs_ds526DSUI.hscall();
                                                    }
                                                    switch (hs_wild226DT8K.tag) {
                                                    case 1:
                                                        var hs_newMap126DSUM = hs_n26DSUK;
                                                        if (hs_n26DSUK.notEvaluated) {
                                                            hs_newMap126DSUM = hs_n26DSUK.hscall();
                                                        }
                                                        var hs_sat26DT8N = new $hs.Thunk();
                                                        hs_sat26DT8N.evaluateOnce = function () {
                                                            return $hs.modules.DataziMonoid.hs_mempty.hscall($hs.modules.SystemziEventziInternal.hs_zdfMonoidEvent);
                                                        };
                                                        var $res = new $hs.Data(1);
                                                        $res.data = [hs_newMap126DSUM, hs_sat26DT8N, hs_tpl426DSUO];
                                                        return $res;
                                                    case 2:
                                                        var hs_prev26DSUS = hs_wild226DT8K.data[0];
                                                        var hs_newMap126DSUR = hs_n26DSUK;
                                                        if (hs_n26DSUK.notEvaluated) {
                                                            hs_newMap126DSUR = hs_n26DSUK.hscall();
                                                        }
                                                        var hs_sat26DT8P = new $hs.Thunk();
                                                        hs_sat26DT8P.evaluateOnce = function () {
                                                            var hs_wild326DT8O = $hs.modules.SystemziEventziIntMap.hs_lookup.hscall(hs_fdzq26DSUw, hs_newMap26DSUU);
                                                            switch (hs_wild326DT8O.tag) {
                                                            case 1:
                                                                return $hs.modules.DataziMonoid.hs_mempty.hscall($hs.modules.SystemziEventziInternal.hs_zdfMonoidEvent);
                                                            case 2:
                                                                var hs_fds26DSUX = hs_wild326DT8O.data[0];
                                                                return hs_eventsOf25uqe4.hscall(hs_fds26DSUX);
                                                            }
                                                        };
                                                        var hs_sat26DT8Q = new $hs.Thunk();
                                                        hs_sat26DT8Q.evaluateOnce = function () {
                                                            return hs_eventsOf25uqe4.hscall(hs_prev26DSUS);
                                                        };
                                                        var $res = new $hs.Data(1);
                                                        $res.data = [hs_newMap126DSUR, hs_sat26DT8Q, hs_sat26DT8P];
                                                        return $res;
                                                    }
                                                };
                                                hs_newMap26DSUU.evaluateOnce = function () {
                                                    var hs_ds526DT8R = hs_ds426DSUZ;
                                                    if (hs_ds426DSUZ.notEvaluated) {
                                                        hs_ds526DT8R = hs_ds426DSUZ.hscall();
                                                    }
                                                    var hs_newMap126DSV4 = hs_ds526DT8R.data[0];
                                                    if (hs_newMap126DSV4.notEvaluated) {
                                                        return hs_newMap126DSV4.hscall();
                                                    } else {
                                                        return hs_newMap126DSV4;
                                                    }
                                                };
                                                var hs_oldEvs26DSVb = new $hs.Thunk();
                                                hs_oldEvs26DSVb.evaluateOnce = function () {
                                                    var hs_ds526DT8V = hs_ds426DSUZ;
                                                    if (hs_ds426DSUZ.notEvaluated) {
                                                        hs_ds526DT8V = hs_ds426DSUZ.hscall();
                                                    }
                                                    var hs_oldEvs126DSVa = hs_ds526DT8V.data[1];
                                                    if (hs_oldEvs126DSVa.notEvaluated) {
                                                        return hs_oldEvs126DSVa.hscall();
                                                    } else {
                                                        return hs_oldEvs126DSVa;
                                                    }
                                                };
                                                var hs_newEvs26DSVi = new $hs.Thunk();
                                                hs_newEvs26DSVi.evaluateOnce = function () {
                                                    var hs_ds526DT8Y = hs_ds426DSUZ;
                                                    if (hs_ds426DSUZ.notEvaluated) {
                                                        hs_ds526DT8Y = hs_ds426DSUZ.hscall();
                                                    }
                                                    var hs_newEvs126DSVh = hs_ds526DT8Y.data[2];
                                                    if (hs_newEvs126DSVh.notEvaluated) {
                                                        return hs_newEvs126DSVh.hscall();
                                                    } else {
                                                        return hs_newEvs126DSVh;
                                                    }
                                                };
                                                var hs_modify26DSVk = new $hs.Thunk();
                                                hs_modify26DSVk.evaluateOnce = function () {
                                                    return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.SystemziEventziInternal.hs_zdfEqEvent, hs_oldEvs26DSVb, hs_newEvs26DSVi);
                                                };
                                                var hs_sat26DT93 = new $hs.Thunk();
                                                hs_sat26DT93.evaluateOnce = function () {
                                                    var hs_sat26DT90 = new $hs.Data(1);
                                                    hs_sat26DT90.data = [hs_tpl126DSUz, hs_tpl326DSUA];
                                                    var hs_sat26DT91 = new $hs.Data(1);
                                                    hs_sat26DT91.data = [hs_sat26DT90, hs_modify26DSVk];
                                                    var hs_sat26DT92 = new $hs.Data(1);
                                                    hs_sat26DT92.data = [hs_newMap26DSUU, hs_sat26DT91];
                                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DT92);
                                                };
                                                var hs_sat26DT96 = new $hs.Thunk();
                                                hs_sat26DT96.evaluateOnce = function () {
                                                    var hs_sat26DT94 = new $hs.Thunk();
                                                    hs_sat26DT94.evaluateOnce = function () {
                                                        return $hs.modules.SystemziEventziInternal.hs_modifyFd.hscall(hs_ds226DSVm, hs_tpl26DSUv, hs_oldEvs26DSVb, hs_newEvs26DSVi);
                                                    };
                                                    var hs_sat26DT95 = new $hs.Thunk();
                                                    hs_sat26DT95.evaluateOnce = function () {
                                                        return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_modify26DSVk);
                                                    };
                                                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DT95, hs_sat26DT94);
                                                };
                                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DT96, hs_sat26DT93);
                                            };
                                            var hs_sat26DT98 = new $hs.Thunk();
                                            hs_sat26DT98.evaluateOnce = function () {
                                                return $hs.modules.ControlziConcurrentziMVar.hs_modifyMVar.hscall(hs_emFds26DSUh);
                                            };
                                            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DT98, hs_sat26DT97);
                                        };
                                        var hs_sat26DT9a = new $hs.Thunk();
                                        hs_sat26DT9a.evaluateOnce = function () {
                                            return $hs.modules.SystemziEventziUnique.hs_newUnique.hscall(hs_ds326DSUi);
                                        };
                                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DT9a, hs_sat26DT99);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DT9b, hs_sat26DT8B);
                                };
                                var hs_sat26DT9M = new $hs.Thunk();
                                hs_sat26DT9M.evaluateOnce = function () {
                                    var hs_cb26DSSy = new $hs.Func(2);
                                    hs_cb26DSSy.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
                                        return hs_handleControlEvent25uqdG.hscall(hs_mgr26DSSw, hs_eta1cW6l4, hs_eta1cW6l3);
                                    };
                                    var hs_fd26DSSA = new $hs.Thunk();
                                    hs_fd26DSSA.evaluateOnce = function () {
                                        return $hs.modules.SystemziEventziControl.hs_controlReadFd.hscall(hs_ctrl26DSS1);
                                    };
                                    var hs_wild26DT9d = hs_mgr26DSSw;
                                    if (hs_mgr26DSSw.notEvaluated) {
                                        hs_wild26DT9d = hs_mgr26DSSw.hscall();
                                    }
                                    var hs_ds126DSTR = hs_wild26DT9d.data[0];
                                    var hs_rb26DSSL = hs_wild26DT9d.data[1];
                                    var hs_ds226DSSN = hs_wild26DT9d.data[4];
                                    var hs_emFds26DSSM = new $hs.Data(1);
                                    hs_emFds26DSSM.data = [hs_rb26DSSL];
                                    var hs_sat26DT9K = new $hs.Func(1);
                                    hs_sat26DT9K.evaluate = function (hs_u26DSSU) {
                                        var hs_sat26DT9I = new $hs.Func(1);
                                        hs_sat26DT9I.evaluate = function (hs_oldMap26DST9) {
                                            var hs_tpl26DST0 = hs_fd26DSSA;
                                            if (hs_fd26DSSA.notEvaluated) {
                                                hs_tpl26DST0 = hs_fd26DSSA.hscall();
                                            }
                                            var hs_tpl126DST4 = hs_tpl26DST0.data[0];
                                            var hs_tpl226DT9j = hs_u26DSSU;
                                            if (hs_u26DSSU.notEvaluated) {
                                                hs_tpl226DT9j = hs_u26DSSU.hscall();
                                            }
                                            var hs_tpl326DST5 = hs_tpl226DT9j.data[0];
                                            var hs_tpl426DSTj = $hs.modules.SystemziEventziInternal.hs_evtRead;
                                            if ($hs.modules.SystemziEventziInternal.hs_evtRead.notEvaluated) {
                                                hs_tpl426DSTj = $hs.modules.SystemziEventziInternal.hs_evtRead.hscall();
                                            }
                                            var hs_tpl526DST6 = hs_tpl426DSTj.data[0];
                                            var hs_fdzq26DST1 = new $hs.Thunk();
                                            hs_fdzq26DST1.evaluateOnce = function () {
                                                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralFd, $hs.modules.GHCziNum.hs_zdfNumInt, hs_tpl26DST0);
                                            };
                                            var hs_ds326DSTu = new $hs.Thunk();
                                            var hs_newMap26DSTp = new $hs.Thunk();
                                            hs_ds326DSTu.evaluateOnce = function () {
                                                var hs_sat26DT9k = new $hs.Data(1);
                                                hs_sat26DT9k.data = [hs_tpl126DST4, hs_tpl326DST5, hs_tpl526DST6, hs_cb26DSSy];
                                                var hs_sat26DT9n = new $hs.Data(2);
                                                hs_sat26DT9n.data = [hs_sat26DT9k, $hs.modules.GHCziTypes.hs_ZMZN];
                                                var hs_wild126DT9m = $hs.modules.SystemziEventziIntMap.hs_insertWith.hscall($hs.modules.GHCziBase.hs_zpzp, hs_fdzq26DST1, hs_sat26DT9n, hs_oldMap26DST9);
                                                var hs_ds426DSTd = hs_wild126DT9m.data[0];
                                                var hs_n26DSTf = hs_wild126DT9m.data[1];
                                                var hs_wild226DT9l = hs_ds426DSTd;
                                                if (hs_ds426DSTd.notEvaluated) {
                                                    hs_wild226DT9l = hs_ds426DSTd.hscall();
                                                }
                                                switch (hs_wild226DT9l.tag) {
                                                case 1:
                                                    var hs_newMap126DSTh = hs_n26DSTf;
                                                    if (hs_n26DSTf.notEvaluated) {
                                                        hs_newMap126DSTh = hs_n26DSTf.hscall();
                                                    }
                                                    var hs_sat26DT9o = new $hs.Thunk();
                                                    hs_sat26DT9o.evaluateOnce = function () {
                                                        return $hs.modules.DataziMonoid.hs_mempty.hscall($hs.modules.SystemziEventziInternal.hs_zdfMonoidEvent);
                                                    };
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [hs_newMap126DSTh, hs_sat26DT9o, hs_tpl426DSTj];
                                                    return $res;
                                                case 2:
                                                    var hs_prev26DSTn = hs_wild226DT9l.data[0];
                                                    var hs_newMap126DSTm = hs_n26DSTf;
                                                    if (hs_n26DSTf.notEvaluated) {
                                                        hs_newMap126DSTm = hs_n26DSTf.hscall();
                                                    }
                                                    var hs_sat26DT9q = new $hs.Thunk();
                                                    hs_sat26DT9q.evaluateOnce = function () {
                                                        var hs_wild326DT9p = $hs.modules.SystemziEventziIntMap.hs_lookup.hscall(hs_fdzq26DST1, hs_newMap26DSTp);
                                                        switch (hs_wild326DT9p.tag) {
                                                        case 1:
                                                            return $hs.modules.DataziMonoid.hs_mempty.hscall($hs.modules.SystemziEventziInternal.hs_zdfMonoidEvent);
                                                        case 2:
                                                            var hs_fds26DSTs = hs_wild326DT9p.data[0];
                                                            return hs_eventsOf25uqe4.hscall(hs_fds26DSTs);
                                                        }
                                                    };
                                                    var hs_sat26DT9r = new $hs.Thunk();
                                                    hs_sat26DT9r.evaluateOnce = function () {
                                                        return hs_eventsOf25uqe4.hscall(hs_prev26DSTn);
                                                    };
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [hs_newMap126DSTm, hs_sat26DT9r, hs_sat26DT9q];
                                                    return $res;
                                                }
                                            };
                                            hs_newMap26DSTp.evaluateOnce = function () {
                                                var hs_ds426DT9s = hs_ds326DSTu;
                                                if (hs_ds326DSTu.notEvaluated) {
                                                    hs_ds426DT9s = hs_ds326DSTu.hscall();
                                                }
                                                var hs_newMap126DSTz = hs_ds426DT9s.data[0];
                                                if (hs_newMap126DSTz.notEvaluated) {
                                                    return hs_newMap126DSTz.hscall();
                                                } else {
                                                    return hs_newMap126DSTz;
                                                }
                                            };
                                            var hs_oldEvs26DSTG = new $hs.Thunk();
                                            hs_oldEvs26DSTG.evaluateOnce = function () {
                                                var hs_ds426DT9w = hs_ds326DSTu;
                                                if (hs_ds326DSTu.notEvaluated) {
                                                    hs_ds426DT9w = hs_ds326DSTu.hscall();
                                                }
                                                var hs_oldEvs126DSTF = hs_ds426DT9w.data[1];
                                                if (hs_oldEvs126DSTF.notEvaluated) {
                                                    return hs_oldEvs126DSTF.hscall();
                                                } else {
                                                    return hs_oldEvs126DSTF;
                                                }
                                            };
                                            var hs_newEvs26DSTN = new $hs.Thunk();
                                            hs_newEvs26DSTN.evaluateOnce = function () {
                                                var hs_ds426DT9z = hs_ds326DSTu;
                                                if (hs_ds326DSTu.notEvaluated) {
                                                    hs_ds426DT9z = hs_ds326DSTu.hscall();
                                                }
                                                var hs_newEvs126DSTM = hs_ds426DT9z.data[2];
                                                if (hs_newEvs126DSTM.notEvaluated) {
                                                    return hs_newEvs126DSTM.hscall();
                                                } else {
                                                    return hs_newEvs126DSTM;
                                                }
                                            };
                                            var hs_modify26DSTP = new $hs.Thunk();
                                            hs_modify26DSTP.evaluateOnce = function () {
                                                return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.SystemziEventziInternal.hs_zdfEqEvent, hs_oldEvs26DSTG, hs_newEvs26DSTN);
                                            };
                                            var hs_sat26DT9E = new $hs.Thunk();
                                            hs_sat26DT9E.evaluateOnce = function () {
                                                var hs_sat26DT9B = new $hs.Data(1);
                                                hs_sat26DT9B.data = [hs_tpl126DST4, hs_tpl326DST5];
                                                var hs_sat26DT9C = new $hs.Data(1);
                                                hs_sat26DT9C.data = [hs_sat26DT9B, hs_modify26DSTP];
                                                var hs_sat26DT9D = new $hs.Data(1);
                                                hs_sat26DT9D.data = [hs_newMap26DSTp, hs_sat26DT9C];
                                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DT9D);
                                            };
                                            var hs_sat26DT9H = new $hs.Thunk();
                                            hs_sat26DT9H.evaluateOnce = function () {
                                                var hs_sat26DT9F = new $hs.Thunk();
                                                hs_sat26DT9F.evaluateOnce = function () {
                                                    return $hs.modules.SystemziEventziInternal.hs_modifyFd.hscall(hs_ds126DSTR, hs_tpl26DST0, hs_oldEvs26DSTG, hs_newEvs26DSTN);
                                                };
                                                var hs_sat26DT9G = new $hs.Thunk();
                                                hs_sat26DT9G.evaluateOnce = function () {
                                                    return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_modify26DSTP);
                                                };
                                                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DT9G, hs_sat26DT9F);
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DT9H, hs_sat26DT9E);
                                        };
                                        var hs_sat26DT9J = new $hs.Thunk();
                                        hs_sat26DT9J.evaluateOnce = function () {
                                            return $hs.modules.ControlziConcurrentziMVar.hs_modifyMVar.hscall(hs_emFds26DSSM);
                                        };
                                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DT9J, hs_sat26DT9I);
                                    };
                                    var hs_sat26DT9L = new $hs.Thunk();
                                    hs_sat26DT9L.evaluateOnce = function () {
                                        return $hs.modules.SystemziEventziUnique.hs_newUnique.hscall(hs_ds226DSSN);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DT9L, hs_sat26DT9K);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DT9M, hs_sat26DT9c);
                            };
                            var hs_sat26DT9Z = new $hs.Thunk();
                            hs_sat26DT9Z.evaluateOnce = function () {
                                var hs_sat26DT9X = new $hs.Thunk();
                                hs_sat26DT9X.evaluateOnce = function () {
                                    var hs_sat26DT9T = new $hs.Func(1);
                                    hs_sat26DT9T.evaluate = function (hs_st26DSRW) {
                                        var hs_sat26DT9Q = new $hs.Thunk();
                                        hs_sat26DT9Q.evaluateOnce = function () {
                                            var hs_sat26DT9O = new $hs.Thunk();
                                            hs_sat26DT9O.evaluateOnce = function () {
                                                return $hs.modules.SystemziEventziControl.hs_closeControl.hscall(hs_ctrl26DSS1);
                                            };
                                            var hs_sat26DT9P = new $hs.Thunk();
                                            hs_sat26DT9P.evaluateOnce = function () {
                                                return $hs.modules.SystemziEventziInternal.hs_delete.hscall(hs_be26DSRZ);
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DT9P, hs_sat26DT9O);
                                        };
                                        var hs_sat26DT9S = new $hs.Thunk();
                                        hs_sat26DT9S.evaluateOnce = function () {
                                            var hs_sat26DT9R = new $hs.Thunk();
                                            hs_sat26DT9R.evaluateOnce = function () {
                                                return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.SystemziEventziManager.hs_zdfEqState, hs_st26DSRW, $hs.modules.SystemziEventziManager.hs_Finished);
                                            };
                                            return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DT9R);
                                        };
                                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DT9S, hs_sat26DT9Q);
                                    };
                                    var hs_sat26DT9W = new $hs.Thunk();
                                    hs_sat26DT9W.evaluateOnce = function () {
                                        var hs_sat26DT9U = new $hs.Func(1);
                                        hs_sat26DT9U.evaluate = function (hs_s26DSRS) {
                                            var $res = new $hs.Data(1);
                                            $res.data = [$hs.modules.SystemziEventziManager.hs_Finished, hs_s26DSRS];
                                            return $res;
                                        };
                                        var hs_sat26DT9V = new $hs.Thunk();
                                        hs_sat26DT9V.evaluateOnce = function () {
                                            return $hs.modules.DataziIORef.hs_atomicModifyIORef.hscall(hs_state26DSRO);
                                        };
                                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DT9V, hs_sat26DT9U);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DT9W, hs_sat26DT9T);
                                };
                                var hs_sat26DT9Y = new $hs.Thunk();
                                hs_sat26DT9Y.evaluateOnce = function () {
                                    return $hs.modules.DataziIORef.hs_mkWeakIORef.hscall(hs_state26DSRO);
                                };
                                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DT9Y, hs_sat26DT9X);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DT9Z, hs_sat26DT9N);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.SystemziEventziUnique.hs_newSource, hs_sat26DTa0);
                    };
                    var hs_sat26DTa2 = new $hs.Thunk();
                    hs_sat26DTa2.evaluateOnce = function () {
                        return $hs.modules.GHCziIORef.hs_newIORef.hscall($hs.modules.SystemziEventziManager.hs_Created);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DTa2, hs_sat26DTa1);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.SystemziEventziControl.hs_newControl, hs_sat26DTa3);
            };
            var hs_sat26DTa5 = new $hs.Thunk();
            hs_sat26DTa5.evaluateOnce = function () {
                return $hs.modules.GHCziIORef.hs_newIORef.hscall($hs.modules.GHCziBase.hs_id);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DTa5, hs_sat26DTa4);
        };
        var hs_sat26DTa7 = new $hs.Thunk();
        hs_sat26DTa7.evaluateOnce = function () {
            return $hs.modules.GHCziMVar.hs_newMVar.hscall($hs.modules.SystemziEventziIntMap.hs_empty);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DTa7, hs_sat26DTa6);
    };
    this.hs_new.evaluateOnce = function () {
        return $hs.modules.ControlziMonad.hs_zezlzl.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.SystemziEventziManager.hs_newWith, $hs.modules.SystemziEventziEPoll.hs_new);
    };
    this.hs_registerFd.evaluate = function (hs_mgr26DSVJ, hs_cb26DSWa, hs_fd26DSW1, hs_evs26DSW7) {
        var hs_sat26DTal = new $hs.Func(1);
        hs_sat26DTal.evaluate = function (hs_ds26DSXg) {
            var hs_wild26DTa8 = hs_ds26DSXg;
            if (hs_ds26DSXg.notEvaluated) {
                hs_wild26DTa8 = hs_ds26DSXg.hscall();
            }
            var hs_r26DSXB = hs_wild26DTa8.data[0];
            var hs_wake26DSXk = hs_wild26DTa8.data[1];
            var hs_sat26DTab = new $hs.Thunk();
            hs_sat26DTab.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_r26DSXB);
            };
            var hs_sat26DTaj = new $hs.Thunk();
            hs_sat26DTaj.evaluateOnce = function () {
                var hs_sat26DTah = new $hs.Thunk();
                hs_sat26DTah.evaluateOnce = function () {
                    var hs_sat26DTag = new $hs.Thunk();
                    hs_sat26DTag.evaluateOnce = function () {
                        var hs_wild126DTaa = hs_mgr26DSVJ;
                        if (hs_mgr26DSVJ.notEvaluated) {
                            hs_wild126DTaa = hs_mgr26DSVJ.hscall();
                        }
                        var hs_rb326DSXv = hs_wild126DTaa.data[5];
                        var hs_rb426DSXw = hs_wild126DTaa.data[6];
                        var hs_rb526DSXx = hs_wild126DTaa.data[7];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb326DSXv, hs_rb426DSXw, hs_rb526DSXx];
                        return $res;
                    };
                    return $hs.modules.SystemziEventziControl.hs_sendWakeup.hscall(hs_sat26DTag);
                };
                var hs_sat26DTai = new $hs.Thunk();
                hs_sat26DTai.evaluateOnce = function () {
                    return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_wake26DSXk);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DTai, hs_sat26DTah);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DTaj, hs_sat26DTab);
        };
        var hs_sat26DTaU = new $hs.Thunk();
        hs_sat26DTaU.evaluateOnce = function () {
            var hs_wild26DTak = hs_mgr26DSVJ;
            if (hs_mgr26DSVJ.notEvaluated) {
                hs_wild26DTak = hs_mgr26DSVJ.hscall();
            }
            var hs_ds26DSX5 = hs_wild26DTak.data[0];
            var hs_rb26DSVU = hs_wild26DTak.data[1];
            var hs_ds126DSVW = hs_wild26DTak.data[4];
            var hs_emFds26DSVV = new $hs.Data(1);
            hs_emFds26DSVV.data = [hs_rb26DSVU];
            var hs_sat26DTaS = new $hs.Func(1);
            hs_sat26DTaS.evaluate = function (hs_u26DSW4) {
                var hs_sat26DTaQ = new $hs.Func(1);
                hs_sat26DTaQ.evaluate = function (hs_oldMap26DSWn) {
                    var hs_tpl26DSWd = hs_fd26DSW1;
                    if (hs_fd26DSW1.notEvaluated) {
                        hs_tpl26DSWd = hs_fd26DSW1.hscall();
                    }
                    var hs_tpl126DSWh = hs_tpl26DSWd.data[0];
                    var hs_tpl226DTar = hs_u26DSW4;
                    if (hs_u26DSW4.notEvaluated) {
                        hs_tpl226DTar = hs_u26DSW4.hscall();
                    }
                    var hs_tpl326DSWi = hs_tpl226DTar.data[0];
                    var hs_tpl426DSWx = hs_evs26DSW7;
                    if (hs_evs26DSW7.notEvaluated) {
                        hs_tpl426DSWx = hs_evs26DSW7.hscall();
                    }
                    var hs_tpl526DSWj = hs_tpl426DSWx.data[0];
                    var hs_tpl626DSWk = hs_cb26DSWa;
                    if (hs_cb26DSWa.notEvaluated) {
                        hs_tpl626DSWk = hs_cb26DSWa.hscall();
                    }
                    var hs_fdzq26DSWe = new $hs.Thunk();
                    hs_fdzq26DSWe.evaluateOnce = function () {
                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralFd, $hs.modules.GHCziNum.hs_zdfNumInt, hs_tpl26DSWd);
                    };
                    var hs_ds226DSWI = new $hs.Thunk();
                    var hs_newMap26DSWD = new $hs.Thunk();
                    hs_ds226DSWI.evaluateOnce = function () {
                        var hs_sat26DTas = new $hs.Data(1);
                        hs_sat26DTas.data = [hs_tpl126DSWh, hs_tpl326DSWi, hs_tpl526DSWj, hs_tpl626DSWk];
                        var hs_sat26DTav = new $hs.Data(2);
                        hs_sat26DTav.data = [hs_sat26DTas, $hs.modules.GHCziTypes.hs_ZMZN];
                        var hs_wild126DTau = $hs.modules.SystemziEventziIntMap.hs_insertWith.hscall($hs.modules.GHCziBase.hs_zpzp, hs_fdzq26DSWe, hs_sat26DTav, hs_oldMap26DSWn);
                        var hs_ds326DSWr = hs_wild126DTau.data[0];
                        var hs_n26DSWt = hs_wild126DTau.data[1];
                        var hs_wild226DTat = hs_ds326DSWr;
                        if (hs_ds326DSWr.notEvaluated) {
                            hs_wild226DTat = hs_ds326DSWr.hscall();
                        }
                        switch (hs_wild226DTat.tag) {
                        case 1:
                            var hs_newMap126DSWv = hs_n26DSWt;
                            if (hs_n26DSWt.notEvaluated) {
                                hs_newMap126DSWv = hs_n26DSWt.hscall();
                            }
                            var hs_sat26DTaw = new $hs.Thunk();
                            hs_sat26DTaw.evaluateOnce = function () {
                                return $hs.modules.DataziMonoid.hs_mempty.hscall($hs.modules.SystemziEventziInternal.hs_zdfMonoidEvent);
                            };
                            var $res = new $hs.Data(1);
                            $res.data = [hs_newMap126DSWv, hs_sat26DTaw, hs_tpl426DSWx];
                            return $res;
                        case 2:
                            var hs_prev26DSWB = hs_wild226DTat.data[0];
                            var hs_newMap126DSWA = hs_n26DSWt;
                            if (hs_n26DSWt.notEvaluated) {
                                hs_newMap126DSWA = hs_n26DSWt.hscall();
                            }
                            var hs_sat26DTay = new $hs.Thunk();
                            hs_sat26DTay.evaluateOnce = function () {
                                var hs_wild326DTax = $hs.modules.SystemziEventziIntMap.hs_lookup.hscall(hs_fdzq26DSWe, hs_newMap26DSWD);
                                switch (hs_wild326DTax.tag) {
                                case 1:
                                    return $hs.modules.DataziMonoid.hs_mempty.hscall($hs.modules.SystemziEventziInternal.hs_zdfMonoidEvent);
                                case 2:
                                    var hs_fds26DSWG = hs_wild326DTax.data[0];
                                    return hs_eventsOf25uqe4.hscall(hs_fds26DSWG);
                                }
                            };
                            var hs_sat26DTaz = new $hs.Thunk();
                            hs_sat26DTaz.evaluateOnce = function () {
                                return hs_eventsOf25uqe4.hscall(hs_prev26DSWB);
                            };
                            var $res = new $hs.Data(1);
                            $res.data = [hs_newMap126DSWA, hs_sat26DTaz, hs_sat26DTay];
                            return $res;
                        }
                    };
                    hs_newMap26DSWD.evaluateOnce = function () {
                        var hs_ds326DTaA = hs_ds226DSWI;
                        if (hs_ds226DSWI.notEvaluated) {
                            hs_ds326DTaA = hs_ds226DSWI.hscall();
                        }
                        var hs_newMap126DSWN = hs_ds326DTaA.data[0];
                        if (hs_newMap126DSWN.notEvaluated) {
                            return hs_newMap126DSWN.hscall();
                        } else {
                            return hs_newMap126DSWN;
                        }
                    };
                    var hs_oldEvs26DSWU = new $hs.Thunk();
                    hs_oldEvs26DSWU.evaluateOnce = function () {
                        var hs_ds326DTaE = hs_ds226DSWI;
                        if (hs_ds226DSWI.notEvaluated) {
                            hs_ds326DTaE = hs_ds226DSWI.hscall();
                        }
                        var hs_oldEvs126DSWT = hs_ds326DTaE.data[1];
                        if (hs_oldEvs126DSWT.notEvaluated) {
                            return hs_oldEvs126DSWT.hscall();
                        } else {
                            return hs_oldEvs126DSWT;
                        }
                    };
                    var hs_newEvs26DSX1 = new $hs.Thunk();
                    hs_newEvs26DSX1.evaluateOnce = function () {
                        var hs_ds326DTaH = hs_ds226DSWI;
                        if (hs_ds226DSWI.notEvaluated) {
                            hs_ds326DTaH = hs_ds226DSWI.hscall();
                        }
                        var hs_newEvs126DSX0 = hs_ds326DTaH.data[2];
                        if (hs_newEvs126DSX0.notEvaluated) {
                            return hs_newEvs126DSX0.hscall();
                        } else {
                            return hs_newEvs126DSX0;
                        }
                    };
                    var hs_modify26DSX3 = new $hs.Thunk();
                    hs_modify26DSX3.evaluateOnce = function () {
                        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.SystemziEventziInternal.hs_zdfEqEvent, hs_oldEvs26DSWU, hs_newEvs26DSX1);
                    };
                    var hs_sat26DTaM = new $hs.Thunk();
                    hs_sat26DTaM.evaluateOnce = function () {
                        var hs_sat26DTaJ = new $hs.Data(1);
                        hs_sat26DTaJ.data = [hs_tpl126DSWh, hs_tpl326DSWi];
                        var hs_sat26DTaK = new $hs.Data(1);
                        hs_sat26DTaK.data = [hs_sat26DTaJ, hs_modify26DSX3];
                        var hs_sat26DTaL = new $hs.Data(1);
                        hs_sat26DTaL.data = [hs_newMap26DSWD, hs_sat26DTaK];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DTaL);
                    };
                    var hs_sat26DTaP = new $hs.Thunk();
                    hs_sat26DTaP.evaluateOnce = function () {
                        var hs_sat26DTaN = new $hs.Thunk();
                        hs_sat26DTaN.evaluateOnce = function () {
                            return $hs.modules.SystemziEventziInternal.hs_modifyFd.hscall(hs_ds26DSX5, hs_tpl26DSWd, hs_oldEvs26DSWU, hs_newEvs26DSX1);
                        };
                        var hs_sat26DTaO = new $hs.Thunk();
                        hs_sat26DTaO.evaluateOnce = function () {
                            return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_modify26DSX3);
                        };
                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DTaO, hs_sat26DTaN);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DTaP, hs_sat26DTaM);
                };
                var hs_sat26DTaR = new $hs.Thunk();
                hs_sat26DTaR.evaluateOnce = function () {
                    return $hs.modules.ControlziConcurrentziMVar.hs_modifyMVar.hscall(hs_emFds26DSVV);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DTaR, hs_sat26DTaQ);
            };
            var hs_sat26DTaT = new $hs.Thunk();
            hs_sat26DTaT.evaluateOnce = function () {
                return $hs.modules.SystemziEventziUnique.hs_newUnique.hscall(hs_ds126DSVW);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DTaT, hs_sat26DTaS);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DTaU, hs_sat26DTal);
    };
    this.hs_unregisterFdzu.evaluate = function (hs_ds26DSXG, hs_ds126DSXQ) {
        var hs_wild26DTaW = hs_ds26DSXG;
        if (hs_ds26DSXG.notEvaluated) {
            hs_wild26DTaW = hs_ds26DSXG.hscall();
        }
        var hs_ds226DSYV = hs_wild26DTaW.data[0];
        var hs_rb26DSY0 = hs_wild26DTaW.data[1];
        var hs_wild126DTaV = hs_ds126DSXQ;
        if (hs_ds126DSXQ.notEvaluated) {
            hs_wild126DTaV = hs_ds126DSXQ.hscall();
        }
        var hs_rb626DSXV = hs_wild126DTaV.data[0];
        var hs_rb726DSXY = hs_wild126DTaV.data[1];
        var hs_a226DSXW = new $hs.Data(1);
        hs_a226DSXW.data = [hs_rb626DSXV];
        var hs_a326DSXZ = new $hs.Data(1);
        hs_a326DSXZ.data = [hs_rb726DSXY];
        var hs_sat26DTbv = new $hs.Func(1);
        hs_sat26DTbv.evaluate = function (hs_oldMap26DSYj) {
            var hs_fdzq26DSY5 = new $hs.Thunk();
            hs_fdzq26DSY5.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralFd, $hs.modules.GHCziNum.hs_zdfNumInt, hs_a226DSXW);
            };
            var hs_ds426DSYD = new $hs.Thunk();
            hs_ds426DSYD.evaluateOnce = function () {
                var hs_sat26DTba = new $hs.Func(1);
                hs_sat26DTba.evaluate = function (hs_cbs26DSYd) {
                    var hs_sat26DTb5 = new $hs.Thunk();
                    hs_sat26DTb5.evaluateOnce = function () {
                        var hs_sat26DTb3 = new $hs.Thunk();
                        hs_sat26DTb3.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_zi.hscall(hs_keyUnique25uqdu, hs_fdKey25uqdA);
                        };
                        var hs_sat26DTb4 = new $hs.Func(1);
                        hs_sat26DTb4.evaluate = function (hs_ds526DSY9) {
                            return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.SystemziEventziUnique.hs_zdfEqUnique, hs_ds526DSY9, hs_a326DSXZ);
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DTb4, hs_sat26DTb3);
                    };
                    var hs_wild226DSYh = $hs.modules.GHCziList.hs_filter.hscall(hs_sat26DTb5, hs_cbs26DSYd);
                    switch (hs_wild226DSYh.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var $res = new $hs.Data(2);
                        $res.data = [hs_wild226DSYh];
                        return $res;
                    }
                };
                var hs_wild226DTb9 = $hs.modules.SystemziEventziIntMap.hs_updateWith.hscall(hs_sat26DTba, hs_fdzq26DSY5, hs_oldMap26DSYj);
                var hs_ds526DSYn = hs_wild226DTb9.data[0];
                var hs_ds626DSYu = hs_wild226DTb9.data[1];
                var hs_wild326DTb8 = hs_ds526DSYn;
                if (hs_ds526DSYn.notEvaluated) {
                    hs_wild326DTb8 = hs_ds526DSYn.hscall();
                }
                switch (hs_wild326DTb8.tag) {
                case 1:
                    var hs_newMap26DSYq = hs_oldMap26DSYj;
                    if (hs_oldMap26DSYj.notEvaluated) {
                        hs_newMap26DSYq = hs_oldMap26DSYj.hscall();
                    }
                    var hs_sat26DTbb = new $hs.Thunk();
                    hs_sat26DTbb.evaluateOnce = function () {
                        return $hs.modules.DataziMonoid.hs_mempty.hscall($hs.modules.SystemziEventziInternal.hs_zdfMonoidEvent);
                    };
                    var hs_sat26DTbc = new $hs.Thunk();
                    hs_sat26DTbc.evaluateOnce = function () {
                        return $hs.modules.DataziMonoid.hs_mempty.hscall($hs.modules.SystemziEventziInternal.hs_zdfMonoidEvent);
                    };
                    var $res = new $hs.Data(1);
                    $res.data = [hs_newMap26DSYq, hs_sat26DTbc, hs_sat26DTbb];
                    return $res;
                case 2:
                    var hs_prev26DSYx = hs_wild326DTb8.data[0];
                    var hs_newMap26DSYw = hs_ds626DSYu;
                    if (hs_ds626DSYu.notEvaluated) {
                        hs_newMap26DSYw = hs_ds626DSYu.hscall();
                    }
                    var hs_sat26DTbe = new $hs.Thunk();
                    hs_sat26DTbe.evaluateOnce = function () {
                        var hs_wild426DTbd = $hs.modules.SystemziEventziIntMap.hs_lookup.hscall(hs_fdzq26DSY5, hs_newMap26DSYw);
                        switch (hs_wild426DTbd.tag) {
                        case 1:
                            return $hs.modules.DataziMonoid.hs_mempty.hscall($hs.modules.SystemziEventziInternal.hs_zdfMonoidEvent);
                        case 2:
                            var hs_fds26DSYB = hs_wild426DTbd.data[0];
                            return hs_eventsOf25uqe4.hscall(hs_fds26DSYB);
                        }
                    };
                    var hs_sat26DTbf = new $hs.Thunk();
                    hs_sat26DTbf.evaluateOnce = function () {
                        return hs_eventsOf25uqe4.hscall(hs_prev26DSYx);
                    };
                    var $res = new $hs.Data(1);
                    $res.data = [hs_newMap26DSYw, hs_sat26DTbf, hs_sat26DTbe];
                    return $res;
                }
            };
            var hs_newEvs26DSYK = new $hs.Thunk();
            hs_newEvs26DSYK.evaluateOnce = function () {
                var hs_ds526DTbh = hs_ds426DSYD;
                if (hs_ds426DSYD.notEvaluated) {
                    hs_ds526DTbh = hs_ds426DSYD.hscall();
                }
                var hs_newEvs126DSYJ = hs_ds526DTbh.data[2];
                if (hs_newEvs126DSYJ.notEvaluated) {
                    return hs_newEvs126DSYJ.hscall();
                } else {
                    return hs_newEvs126DSYJ;
                }
            };
            var hs_oldEvs26DSYR = new $hs.Thunk();
            hs_oldEvs26DSYR.evaluateOnce = function () {
                var hs_ds526DTbk = hs_ds426DSYD;
                if (hs_ds426DSYD.notEvaluated) {
                    hs_ds526DTbk = hs_ds426DSYD.hscall();
                }
                var hs_oldEvs126DSYQ = hs_ds526DTbk.data[1];
                if (hs_oldEvs126DSYQ.notEvaluated) {
                    return hs_oldEvs126DSYQ.hscall();
                } else {
                    return hs_oldEvs126DSYQ;
                }
            };
            var hs_modify26DSYT = new $hs.Thunk();
            hs_modify26DSYT.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.SystemziEventziInternal.hs_zdfEqEvent, hs_oldEvs26DSYR, hs_newEvs26DSYK);
            };
            var hs_sat26DTbr = new $hs.Thunk();
            hs_sat26DTbr.evaluateOnce = function () {
                var hs_sat26DTbp = new $hs.Thunk();
                hs_sat26DTbp.evaluateOnce = function () {
                    var hs_ds526DTbm = hs_ds426DSYD;
                    if (hs_ds426DSYD.notEvaluated) {
                        hs_ds526DTbm = hs_ds426DSYD.hscall();
                    }
                    var hs_newMap26DSZ2 = hs_ds526DTbm.data[0];
                    if (hs_newMap26DSZ2.notEvaluated) {
                        return hs_newMap26DSZ2.hscall();
                    } else {
                        return hs_newMap26DSZ2;
                    }
                };
                var hs_sat26DTbq = new $hs.Data(1);
                hs_sat26DTbq.data = [hs_sat26DTbp, hs_modify26DSYT];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DTbq);
            };
            var hs_sat26DTbu = new $hs.Thunk();
            hs_sat26DTbu.evaluateOnce = function () {
                var hs_sat26DTbs = new $hs.Thunk();
                hs_sat26DTbs.evaluateOnce = function () {
                    return $hs.modules.SystemziEventziInternal.hs_modifyFd.hscall(hs_ds226DSYV, hs_a226DSXW, hs_oldEvs26DSYR, hs_newEvs26DSYK);
                };
                var hs_sat26DTbt = new $hs.Thunk();
                hs_sat26DTbt.evaluateOnce = function () {
                    return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_modify26DSYT);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DTbt, hs_sat26DTbs);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DTbu, hs_sat26DTbr);
        };
        var hs_sat26DTbx = new $hs.Thunk();
        hs_sat26DTbx.evaluateOnce = function () {
            var hs_sat26DTbw = new $hs.Data(1);
            hs_sat26DTbw.data = [hs_rb26DSY0];
            return $hs.modules.ControlziConcurrentziMVar.hs_modifyMVar.hscall(hs_sat26DTbw);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DTbx, hs_sat26DTbv);
    };
    this.hs_unregisterFd.evaluate = function (hs_mgr26DSZ9, hs_reg26DSZa) {
        var hs_sat26DTbA = new $hs.Func(1);
        hs_sat26DTbA.evaluate = function (hs_wake26DSZd) {
            var hs_sat26DTby = new $hs.Thunk();
            hs_sat26DTby.evaluateOnce = function () {
                return $hs.modules.SystemziEventziManager.hs_wakeManager.hscall(hs_mgr26DSZ9);
            };
            var hs_sat26DTbz = new $hs.Thunk();
            hs_sat26DTbz.evaluateOnce = function () {
                return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_wake26DSZd);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DTbz, hs_sat26DTby);
        };
        var hs_sat26DTbB = new $hs.Thunk();
        hs_sat26DTbB.evaluateOnce = function () {
            return $hs.modules.SystemziEventziManager.hs_unregisterFdzu.hscall(hs_mgr26DSZ9, hs_reg26DSZa);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DTbB, hs_sat26DTbA);
    };
    this.hs_closeFd.evaluate = function (hs_mgr26DSZk, hs_close26DSZz, hs_fd26DSZy) {
        var hs_sat26DTbI = new $hs.Func(1);
        hs_sat26DTbI.evaluate = function (hs_fds26DT0d) {
            var hs_sat26DTbG = new $hs.Func(1);
            hs_sat26DTbG.evaluate = function (hs_ds26DT0g) {
                var hs_wild26DTbC = hs_ds26DT0g;
                if (hs_ds26DT0g.notEvaluated) {
                    hs_wild26DTbC = hs_ds26DT0g.hscall();
                }
                var hs_rb26DT0m = hs_wild26DTbC.data[0];
                var hs_rb126DT0n = hs_wild26DTbC.data[1];
                var hs_rb226DT0q = hs_wild26DTbC.data[2];
                var hs_cb26DT0o = hs_wild26DTbC.data[3];
                var hs_sat26DTbE = new $hs.Thunk();
                hs_sat26DTbE.evaluateOnce = function () {
                    var hs_sat26DTbD = new $hs.Data(1);
                    hs_sat26DTbD.data = [hs_rb226DT0q];
                    return $hs.modules.DataziMonoid.hs_mappend.hscall($hs.modules.SystemziEventziInternal.hs_zdfMonoidEvent, hs_sat26DTbD, $hs.modules.SystemziEventziInternal.hs_evtClose);
                };
                var hs_sat26DTbF = new $hs.Data(1);
                hs_sat26DTbF.data = [hs_rb26DT0m, hs_rb126DT0n];
                return hs_cb26DT0o.hscall(hs_sat26DTbF, hs_sat26DTbE);
            };
            var hs_sat26DTbH = new $hs.Thunk();
            hs_sat26DTbH.evaluateOnce = function () {
                return $hs.modules.ControlziMonad.hs_forMzu.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_fds26DT0d);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DTbH, hs_sat26DTbG);
        };
        var hs_sat26DTcf = new $hs.Thunk();
        hs_sat26DTcf.evaluateOnce = function () {
            var hs_sat26DTc6 = new $hs.Func(1);
            hs_sat26DTc6.evaluate = function (hs_oldMap26DSZC) {
                var hs_sat26DTc2 = new $hs.Thunk();
                hs_sat26DTc2.evaluateOnce = function () {
                    var hs_sat26DTbL = new $hs.Thunk();
                    hs_sat26DTbL.evaluateOnce = function () {
                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralFd, $hs.modules.GHCziNum.hs_zdfNumInt, hs_fd26DSZy);
                    };
                    var hs_wild26DTbK = $hs.modules.SystemziEventziIntMap.hs_delete.hscall(hs_sat26DTbL, hs_oldMap26DSZC);
                    var hs_ds26DSZG = hs_wild26DTbK.data[0];
                    var hs_ds126DSZK = hs_wild26DTbK.data[1];
                    var hs_wild126DTbJ = hs_ds26DSZG;
                    if (hs_ds26DSZG.notEvaluated) {
                        hs_wild126DTbJ = hs_ds26DSZG.hscall();
                    }
                    switch (hs_wild126DTbJ.tag) {
                    case 1:
                        var hs_sat26DTbM = new $hs.Data(1);
                        hs_sat26DTbM.data = [hs_oldMap26DSZC, $hs.modules.GHCziTypes.hs_ZMZN];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DTbM);
                    case 2:
                        var hs_fds26DSZM = hs_wild126DTbJ.data[0];
                        var hs_ds226DT06 = hs_ds126DSZK;
                        if (hs_ds126DSZK.notEvaluated) {
                            hs_ds226DT06 = hs_ds126DSZK.hscall();
                        }
                        var hs_sat26DTbQ = new $hs.Thunk();
                        hs_sat26DTbQ.evaluateOnce = function () {
                            var hs_sat26DTbN = new $hs.Data(1);
                            hs_sat26DTbN.data = [hs_ds226DT06, hs_fds26DSZM];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DTbN);
                        };
                        var hs_sat26DTc1 = new $hs.Thunk();
                        hs_sat26DTc1.evaluateOnce = function () {
                            var hs_sat26DTbW = new $hs.Thunk();
                            hs_sat26DTbW.evaluateOnce = function () {
                                var hs_sat26DTbV = new $hs.Thunk();
                                hs_sat26DTbV.evaluateOnce = function () {
                                    var hs_wild226DTbP = hs_mgr26DSZk;
                                    if (hs_mgr26DSZk.notEvaluated) {
                                        hs_wild226DTbP = hs_mgr26DSZk.hscall();
                                    }
                                    var hs_rb326DT00 = hs_wild226DTbP.data[5];
                                    var hs_rb426DT01 = hs_wild226DTbP.data[6];
                                    var hs_rb526DT02 = hs_wild226DTbP.data[7];
                                    var $res = new $hs.Data(1);
                                    $res.data = [hs_rb326DT00, hs_rb426DT01, hs_rb526DT02];
                                    return $res;
                                };
                                return $hs.modules.SystemziEventziControl.hs_sendWakeup.hscall(hs_sat26DTbV);
                            };
                            var hs_sat26DTc0 = new $hs.Thunk();
                            hs_sat26DTc0.evaluateOnce = function () {
                                var hs_sat26DTbZ = new $hs.Thunk();
                                hs_sat26DTbZ.evaluateOnce = function () {
                                    var hs_sat26DTbX = new $hs.Thunk();
                                    hs_sat26DTbX.evaluateOnce = function () {
                                        return $hs.modules.DataziMonoid.hs_mempty.hscall($hs.modules.SystemziEventziInternal.hs_zdfMonoidEvent);
                                    };
                                    var hs_sat26DTbY = new $hs.Thunk();
                                    hs_sat26DTbY.evaluateOnce = function () {
                                        return hs_eventsOf25uqe4.hscall(hs_fds26DSZM);
                                    };
                                    return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.SystemziEventziInternal.hs_zdfEqEvent, hs_sat26DTbY, hs_sat26DTbX);
                                };
                                return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DTbZ);
                            };
                            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DTc0, hs_sat26DTbW);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DTc1, hs_sat26DTbQ);
                    }
                };
                var hs_sat26DTc3 = new $hs.Thunk();
                hs_sat26DTc3.evaluateOnce = function () {
                    return hs_close26DSZz.hscall(hs_fd26DSZy);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DTc3, hs_sat26DTc2);
            };
            var hs_sat26DTce = new $hs.Thunk();
            hs_sat26DTce.evaluateOnce = function () {
                var hs_sat26DTcd = new $hs.Thunk();
                hs_sat26DTcd.evaluateOnce = function () {
                    var hs_wild26DTc5 = hs_mgr26DSZk;
                    if (hs_mgr26DSZk.notEvaluated) {
                        hs_wild26DTc5 = hs_mgr26DSZk.hscall();
                    }
                    var hs_rb26DSZu = hs_wild26DTc5.data[1];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb26DSZu];
                    return $res;
                };
                return $hs.modules.ControlziConcurrentziMVar.hs_modifyMVar.hscall(hs_sat26DTcd);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DTce, hs_sat26DTc6);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DTcf, hs_sat26DTbI);
    };
    this.hs_step.evaluate = function (hs_mgr26DT0x, hs_tq26DT0V) {
        var hs_wild26DT1N = hs_mgr26DT0x;
        if (hs_mgr26DT0x.notEvaluated) {
            hs_wild26DT1N = hs_mgr26DT0x.hscall();
        }
        var hs_ds26DT1J = hs_wild26DT1N.data[0];
        var hs_rb126DT0I = hs_wild26DT1N.data[2];
        var hs_rb226DT0L = hs_wild26DT1N.data[3];
        var hs_a226DT0J = new $hs.Data(1);
        hs_a226DT0J.data = [hs_rb126DT0I];
        var hs_a326DT0M = new $hs.Data(1);
        hs_a326DT0M.data = [hs_rb226DT0L];
        var hs_sat26DTcO = new $hs.Func(1);
        hs_sat26DTcO.evaluate = function (hs_ds226DT1F) {
            var hs_wild126DTcl = hs_ds226DT1F;
            if (hs_ds226DT1F.notEvaluated) {
                hs_wild126DTcl = hs_ds226DT1F.hscall();
            }
            var hs_timeout26DT1K = hs_wild126DTcl.data[0];
            var hs_qzq26DT2z = hs_wild126DTcl.data[1];
            var hs_sat26DTcq = new $hs.Thunk();
            hs_sat26DTcq.evaluateOnce = function () {
                var hs_sat26DTco = new $hs.Func(1);
                hs_sat26DTco.evaluate = function (hs_state26DT2v) {
                    var hs_state126DT2x = hs_state26DT2v;
                    if (hs_state26DT2v.notEvaluated) {
                        hs_state126DT2x = hs_state26DT2v.hscall();
                    }
                    var hs_sat26DTcm = new $hs.Thunk();
                    hs_sat26DTcm.evaluateOnce = function () {
                        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.SystemziEventziManager.hs_zdfEqState, hs_state126DT2x, $hs.modules.SystemziEventziManager.hs_Running);
                    };
                    var hs_sat26DTcn = new $hs.Data(1);
                    hs_sat26DTcn.data = [hs_sat26DTcm, hs_qzq26DT2z];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DTcn);
                };
                var hs_sat26DTcp = new $hs.Thunk();
                hs_sat26DTcp.evaluateOnce = function () {
                    return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a326DT0M);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DTcp, hs_sat26DTco);
            };
            var hs_sat26DTcN = new $hs.Thunk();
            hs_sat26DTcN.evaluateOnce = function () {
                var hs_sat26DTcM = new $hs.Func(2);
                hs_sat26DTcM.evaluate = function (hs_fd26DT21, hs_evs26DT2f) {
                    var hs_sat26DTcD = new $hs.Func(1);
                    hs_sat26DTcD.evaluate = function (hs_fds26DT23) {
                        var hs_sat26DTcs = new $hs.Thunk();
                        hs_sat26DTcs.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralFd, $hs.modules.GHCziNum.hs_zdfNumInt, hs_fd26DT21);
                        };
                        var hs_wild226DTcr = $hs.modules.SystemziEventziIntMap.hs_lookup.hscall(hs_sat26DTcs, hs_fds26DT23);
                        switch (hs_wild226DTcr.tag) {
                        case 1:
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                        case 2:
                            var hs_cbs26DT26 = hs_wild226DTcr.data[0];
                            var hs_sat26DTcz = new $hs.Func(1);
                            hs_sat26DTcz.evaluate = function (hs_ds326DT29) {
                                var hs_wild326DTct = hs_ds326DT29;
                                if (hs_ds326DT29.notEvaluated) {
                                    hs_wild326DTct = hs_ds326DT29.hscall();
                                }
                                var hs_rb626DT2k = hs_wild326DTct.data[0];
                                var hs_rb726DT2l = hs_wild326DTct.data[1];
                                var hs_rb826DT2g = hs_wild326DTct.data[2];
                                var hs_cb26DT2m = hs_wild326DTct.data[3];
                                var hs_sat26DTcv = new $hs.Thunk();
                                hs_sat26DTcv.evaluateOnce = function () {
                                    var hs_sat26DTcu = new $hs.Data(1);
                                    hs_sat26DTcu.data = [hs_rb626DT2k, hs_rb726DT2l];
                                    return hs_cb26DT2m.hscall(hs_sat26DTcu, hs_evs26DT2f);
                                };
                                var hs_sat26DTcy = new $hs.Thunk();
                                hs_sat26DTcy.evaluateOnce = function () {
                                    var hs_sat26DTcx = new $hs.Thunk();
                                    hs_sat26DTcx.evaluateOnce = function () {
                                        var hs_sat26DTcw = new $hs.Data(1);
                                        hs_sat26DTcw.data = [hs_rb826DT2g];
                                        return $hs.modules.SystemziEventziInternal.hs_eventIs.hscall(hs_evs26DT2f, hs_sat26DTcw);
                                    };
                                    return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DTcx);
                                };
                                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DTcy, hs_sat26DTcv);
                            };
                            var hs_sat26DTcA = new $hs.Thunk();
                            hs_sat26DTcA.evaluateOnce = function () {
                                return $hs.modules.ControlziMonad.hs_forMzu.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_cbs26DT26);
                            };
                            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DTcA, hs_sat26DTcz);
                        }
                    };
                    var hs_sat26DTcL = new $hs.Thunk();
                    hs_sat26DTcL.evaluateOnce = function () {
                        var hs_sat26DTcK = new $hs.Thunk();
                        hs_sat26DTcK.evaluateOnce = function () {
                            var hs_wild226DTcC = hs_wild26DT1N;
                            if (hs_wild26DT1N.notEvaluated) {
                                hs_wild226DTcC = hs_wild26DT1N.hscall();
                            }
                            var hs_rb626DT1X = hs_wild226DTcC.data[1];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb626DT1X];
                            return $res;
                        };
                        return $hs.modules.ControlziConcurrentziMVar.hs_readMVar.hscall(hs_sat26DTcK);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DTcL, hs_sat26DTcD);
                };
                return $hs.modules.SystemziEventziInternal.hs_poll.hscall(hs_ds26DT1J, hs_timeout26DT1K, hs_sat26DTcM);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DTcN, hs_sat26DTcq);
        };
        var hs_sat26DTde = new $hs.Thunk();
        hs_sat26DTde.evaluateOnce = function () {
            var hs_sat26DTdd = new $hs.Func(1);
            hs_sat26DTdd.evaluate = function (hs_now26DT0Y) {
                var hs_sat26DTd9 = new $hs.Func(1);
                hs_sat26DTd9.evaluate = function (hs_applyEdits26DT0W) {
                    var hs_ds226DT10 = new $hs.Thunk();
                    hs_ds226DT10.evaluateOnce = function () {
                        var hs_qzq26DT0Z = hs_applyEdits26DT0W.hscall(hs_tq26DT0V);
                        return $hs.modules.SystemziEventziPSQ.hs_atMost.hscall(hs_now26DT0Y, hs_qzq26DT0Z);
                    };
                    var hs_qzqzq26DT16 = new $hs.Thunk();
                    hs_qzqzq26DT16.evaluateOnce = function () {
                        var hs_wild126DTcQ = hs_ds226DT10;
                        if (hs_ds226DT10.notEvaluated) {
                            hs_wild126DTcQ = hs_ds226DT10.hscall();
                        }
                        var hs_qzqzq126DT15 = hs_wild126DTcQ.data[1];
                        if (hs_qzqzq126DT15.notEvaluated) {
                            return hs_qzqzq126DT15.hscall();
                        } else {
                            return hs_qzqzq126DT15;
                        }
                    };
                    var hs_sat26DTd3 = new $hs.Thunk();
                    hs_sat26DTd3.evaluateOnce = function () {
                        var hs_sat26DTd0 = new $hs.Thunk();
                        hs_sat26DTd0.evaluateOnce = function () {
                            var hs_wild126DTcR = $hs.modules.SystemziEventziPSQ.hs_minView.hscall(hs_qzqzq26DT16);
                            switch (hs_wild126DTcR.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_ds326DT1h = hs_wild126DTcR.data[0];
                                var hs_wild226DTcU = hs_ds326DT1h;
                                if (hs_ds326DT1h.notEvaluated) {
                                    hs_wild226DTcU = hs_ds326DT1h.hscall();
                                }
                                var hs_ds426DT1l = hs_wild226DTcU.data[0];
                                var hs_wild326DTcT = hs_ds426DT1l;
                                if (hs_ds426DT1l.notEvaluated) {
                                    hs_wild326DTcT = hs_ds426DT1l.hscall();
                                }
                                var hs_rb726DT1q = hs_wild326DTcT.data[1];
                                var hs_sat26DTcZ = new $hs.Data(1);
                                hs_sat26DTcZ.data = [hs_rb726DT1q];
                                var hs_tzq26DT1u = $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_sat26DTcZ, hs_now26DT0Y);
                                var hs_tpl26DTcX = hs_tzq26DT1u;
                                if (hs_tzq26DT1u.notEvaluated) {
                                    hs_tpl26DTcX = hs_tzq26DT1u.hscall();
                                }
                                var hs_tpl126DT1x = hs_tpl26DTcX.data[0];
                                var $res = new $hs.Data(1);
                                $res.data = [hs_tpl126DT1x];
                                return $res;
                            }
                        };
                        var hs_sat26DTd1 = new $hs.Data(1);
                        hs_sat26DTd1.data = [hs_sat26DTd0, hs_qzqzq26DT16];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DTd1);
                    };
                    var hs_sat26DTd8 = new $hs.Thunk();
                    hs_sat26DTd8.evaluateOnce = function () {
                        var hs_sat26DTd6 = new $hs.Thunk();
                        hs_sat26DTd6.evaluateOnce = function () {
                            var hs_sat26DTd5 = new $hs.Thunk();
                            hs_sat26DTd5.evaluateOnce = function () {
                                var hs_wild126DTd2 = hs_ds226DT10;
                                if (hs_ds226DT10.notEvaluated) {
                                    hs_wild126DTd2 = hs_ds226DT10.hscall();
                                }
                                var hs_expired26DT1b = hs_wild126DTd2.data[0];
                                if (hs_expired26DT1b.notEvaluated) {
                                    return hs_expired26DT1b.hscall();
                                } else {
                                    return hs_expired26DT1b;
                                }
                            };
                            return $hs.modules.GHCziBase.hs_map.hscall($hs.modules.SystemziEventziPSQ.hs_value, hs_sat26DTd5);
                        };
                        var hs_sat26DTd7 = new $hs.Thunk();
                        hs_sat26DTd7.evaluateOnce = function () {
                            return $hs.modules.ControlziMonad.hs_sequencezu.hscall($hs.modules.GHCziBase.hs_zdfMonadIO);
                        };
                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DTd7, hs_sat26DTd6);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DTd8, hs_sat26DTd3);
                };
                var hs_sat26DTdc = new $hs.Thunk();
                hs_sat26DTdc.evaluateOnce = function () {
                    var hs_sat26DTda = new $hs.Func(1);
                    hs_sat26DTda.evaluate = function (hs_f26DT0Q) {
                        var $res = new $hs.Data(1);
                        $res.data = [$hs.modules.GHCziBase.hs_id, hs_f26DT0Q];
                        return $res;
                    };
                    var hs_sat26DTdb = new $hs.Thunk();
                    hs_sat26DTdb.evaluateOnce = function () {
                        return $hs.modules.DataziIORef.hs_atomicModifyIORef.hscall(hs_a226DT0J);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DTdb, hs_sat26DTda);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DTdc, hs_sat26DTd9);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.SystemziEventziClock.hs_getCurrentTime, hs_sat26DTdd);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DTde, hs_sat26DTcO);
    };
    this.hs_loop.evaluate = function (hs_mgr26DT2F) {
        var hs_wild26DT2R = hs_mgr26DT2F;
        if (hs_mgr26DT2F.notEvaluated) {
            hs_wild26DT2R = hs_mgr26DT2F.hscall();
        }
        var hs_rb226DT35 = hs_wild26DT2R.data[3];
        var hs_go26DT32 = new $hs.Func(1);
        hs_go26DT32.evaluate = function (hs_q26DT2S) {
            var hs_sat26DTdp = new $hs.Func(1);
            hs_sat26DTdp.evaluate = function (hs_ds226DT2V) {
                var hs_wild126DTdf = hs_ds226DT2V;
                if (hs_ds226DT2V.notEvaluated) {
                    hs_wild126DTdf = hs_ds226DT2V.hscall();
                }
                var hs_running26DT2Z = hs_wild126DTdf.data[0];
                var hs_qzq26DT31 = hs_wild126DTdf.data[1];
                var hs_sat26DTdn = new $hs.Thunk();
                hs_sat26DTdn.evaluateOnce = function () {
                    return hs_go26DT32.hscall(hs_qzq26DT31);
                };
                var hs_sat26DTdo = new $hs.Thunk();
                hs_sat26DTdo.evaluateOnce = function () {
                    return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_running26DT2Z);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DTdo, hs_sat26DTdn);
            };
            var hs_sat26DTdq = new $hs.Thunk();
            hs_sat26DTdq.evaluateOnce = function () {
                return $hs.modules.SystemziEventziManager.hs_step.hscall(hs_wild26DT2R, hs_q26DT2S);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DTdq, hs_sat26DTdp);
        };
        var hs_sat26DTdy = new $hs.Func(1);
        hs_sat26DTdy.evaluate = function (hs_state26DT3f) {
            var hs_wild126DT3j = hs_state26DT3f;
            if (hs_state26DT3f.notEvaluated) {
                hs_wild126DT3j = hs_state26DT3f.hscall();
            }
            switch (hs_wild126DT3j.tag) {
            case 1:
                var hs_sat26DTdw = new $hs.Thunk();
                hs_sat26DTdw.evaluateOnce = function () {
                    return $hs.modules.SystemziEventziManager.hs_cleanup.hscall(hs_wild26DT2R);
                };
                var hs_sat26DTdx = new $hs.Thunk();
                hs_sat26DTdx.evaluateOnce = function () {
                    return hs_go26DT32.hscall($hs.modules.SystemziEventziPSQ.hs_empty);
                };
                return $hs.modules.ControlziExceptionziBase.hs_finally.hscall(hs_sat26DTdx, hs_sat26DTdw);
            case 3:
                return $hs.modules.SystemziEventziManager.hs_cleanup.hscall(hs_wild26DT2R);
            default:
                var hs_sat26DTdu = new $hs.Thunk();
                hs_sat26DTdu.evaluateOnce = function () {
                    var hs_sat26DTdt = new $hs.Thunk();
                    hs_sat26DTdt.evaluateOnce = function () {
                        var hs_sat26DTdr = new $hs.Thunk();
                        hs_sat26DTdr.evaluateOnce = function () {
                            return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.SystemziEventziManager.hs_zdfShowState, hs_wild126DT3j);
                        };
                        var hs_sat26DTds = new $hs.Thunk();
                        hs_sat26DTds.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("System.Event.Manager.loop: state is already \x00");
                        };
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DTds, hs_sat26DTdr);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziErr.hs_error, hs_sat26DTdt);
                };
                var hs_sat26DTdv = new $hs.Thunk();
                hs_sat26DTdv.evaluateOnce = function () {
                    return $hs.modules.SystemziEventziManager.hs_cleanup.hscall(hs_wild26DT2R);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DTdv, hs_sat26DTdu);
            }
        };
        var hs_sat26DTdC = new $hs.Thunk();
        hs_sat26DTdC.evaluateOnce = function () {
            var hs_sat26DTdz = new $hs.Func(1);
            hs_sat26DTdz.evaluate = function (hs_s26DT39) {
                var hs_wild126DT3b = hs_s26DT39;
                if (hs_s26DT39.notEvaluated) {
                    hs_wild126DT3b = hs_s26DT39.hscall();
                }
                switch (hs_wild126DT3b.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [$hs.modules.SystemziEventziManager.hs_Running, $hs.modules.SystemziEventziManager.hs_Created];
                    return $res;
                default:
                    var $res = new $hs.Data(1);
                    $res.data = [hs_wild126DT3b, hs_wild126DT3b];
                    return $res;
                }
            };
            var hs_sat26DTdB = new $hs.Thunk();
            hs_sat26DTdB.evaluateOnce = function () {
                var hs_sat26DTdA = new $hs.Data(1);
                hs_sat26DTdA.data = [hs_rb226DT35];
                return $hs.modules.DataziIORef.hs_atomicModifyIORef.hscall(hs_sat26DTdA);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DTdB, hs_sat26DTdz);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DTdC, hs_sat26DTdy);
    };
    this.hs_EventManager.evaluate = function (hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_Created.data = [];
    this.hs_Running.data = [];
    this.hs_Dying.data = [];
    this.hs_Finished.data = [];
    this.hs_TK.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.SystemziEventziManager.hs_TK.hscall(hs_eta1cW6l3);
    };
    this.hs_FdKey.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_FdData.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
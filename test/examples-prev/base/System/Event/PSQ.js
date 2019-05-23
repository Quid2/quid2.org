
$hs.modules.SystemziEventziPSQ = new $hs.Module();
$hs.modules.SystemziEventziPSQ.dependencies = ["GHC.Prim", "GHC.Types", "GHC.Base", "GHC.Num", "GHC.Float", "GHC.Show", "GHC.Err", "GHC.Classes", "System.Event.Unique"];
$hs.modules.SystemziEventziPSQ.initBeforeDependencies = function () {
    this.hs_zdWSingle = new $hs.Func(1);
    this.hs_zdWLLoser = new $hs.Func(5);
    this.hs_zdWRLoser = new $hs.Func(5);
    this.hs_zdWWinner = new $hs.Func(3);
    this.hs_zdWE = new $hs.Func(3);
    this.hs_minView = new $hs.Func(1);
    this.hs_deleteMin = new $hs.Func(1);
    this.hs_findMin = new $hs.Func(1);
    this.hs_toDescList = new $hs.Func(1);
    this.hs_toAscList = new $hs.Func(1);
    this.hs_toList = new $hs.Func(1);
    this.hs_singleton = new $hs.Func(3);
    this.hs_insert = new $hs.Func(4);
    this.hs_empty = new $hs.Data(1);
    this.hs_delete = new $hs.Func(2);
    this.hs_adjust = new $hs.Func(3);
    this.hs_fromList = new $hs.Thunk();
    this.hs_lookup = new $hs.Func(2);
    this.hs_null = new $hs.Func(1);
    this.hs_sizze = new $hs.Func(1);
    this.hs_value = new $hs.Func(1);
    this.hs_prio = new $hs.Func(1);
    this.hs_atMost = new $hs.Func(2);
    this.hs_key = new $hs.Func(1);
    this.hs_zdfShowSequ = new $hs.Func(1);
    this.hs_zdfShowElem = new $hs.Func(1);
    this.hs_zdfShowLTree = new $hs.Func(1);
    this.hs_zdfShowPSQ = new $hs.Func(1);
    this.hs_zdfEqElem = new $hs.Func(1);
    this.hs_zdfEqLTree = new $hs.Func(1);
    this.hs_zdfEqPSQ = new $hs.Func(1);
    this.hs_Sequ = new $hs.Func(1);
    this.hs_Null = new $hs.Data(1);
    this.hs_Single = new $hs.Func(3);
    this.hs_Play = new $hs.Func(2);
    this.hs_Start = new $hs.Data(1);
    this.hs_LLoser = new $hs.Func(7);
    this.hs_RLoser = new $hs.Func(7);
    this.hs_Void = new $hs.Data(1);
    this.hs_Winner = new $hs.Func(5);
    this.hs_E = new $hs.Func(3);
    this.hs_zdWSingle.notEvaluated = true;
    this.hs_zdWSingle.evaluate = function (hs_tpl26DTL9) {
        $hs.modules.SystemziEventziPSQ.loadDependencies();
        return this.evaluate(hs_tpl26DTL9);
    };
    this.hs_zdWLLoser.notEvaluated = true;
    this.hs_zdWLLoser.evaluate = function (hs_tpl26DTLm, hs_tpl26DTLp, hs_tpl26DTLu, hs_tpl26DTLw, hs_tpl26DTLz) {
        $hs.modules.SystemziEventziPSQ.loadDependencies();
        return this.evaluate(hs_tpl26DTLm, hs_tpl26DTLp, hs_tpl26DTLu, hs_tpl26DTLw, hs_tpl26DTLz);
    };
    this.hs_zdWRLoser.notEvaluated = true;
    this.hs_zdWRLoser.evaluate = function (hs_tpl26DTLN, hs_tpl26DTLQ, hs_tpl26DTLV, hs_tpl26DTLX, hs_tpl26DTM0) {
        $hs.modules.SystemziEventziPSQ.loadDependencies();
        return this.evaluate(hs_tpl26DTLN, hs_tpl26DTLQ, hs_tpl26DTLV, hs_tpl26DTLX, hs_tpl26DTM0);
    };
    this.hs_zdWWinner.notEvaluated = true;
    this.hs_zdWWinner.evaluate = function (hs_tpl26DTMc, hs_tpl26DTMh, hs_tpl26DTMj) {
        $hs.modules.SystemziEventziPSQ.loadDependencies();
        return this.evaluate(hs_tpl26DTMc, hs_tpl26DTMh, hs_tpl26DTMj);
    };
    this.hs_zdWE.notEvaluated = true;
    this.hs_zdWE.evaluate = function (hs_tpl26DTMu, hs_tpl26DTMx, hs_tpl26DTMC) {
        $hs.modules.SystemziEventziPSQ.loadDependencies();
        return this.evaluate(hs_tpl26DTMu, hs_tpl26DTMx, hs_tpl26DTMC);
    };
    this.hs_minView.notEvaluated = true;
    this.hs_minView.evaluate = function (hs_ds26DUfn) {
        $hs.modules.SystemziEventziPSQ.loadDependencies();
        return this.evaluate(hs_ds26DUfn);
    };
    this.hs_deleteMin.notEvaluated = true;
    this.hs_deleteMin.evaluate = function (hs_ds26DUfE) {
        $hs.modules.SystemziEventziPSQ.loadDependencies();
        return this.evaluate(hs_ds26DUfE);
    };
    this.hs_findMin.notEvaluated = true;
    this.hs_findMin.evaluate = function (hs_ds26DUfP) {
        $hs.modules.SystemziEventziPSQ.loadDependencies();
        return this.evaluate(hs_ds26DUfP);
    };
    this.hs_toDescList.notEvaluated = true;
    this.hs_toDescList.evaluate = function (hs_q26DUgQ) {
        $hs.modules.SystemziEventziPSQ.loadDependencies();
        return this.evaluate(hs_q26DUgQ);
    };
    this.hs_toAscList.notEvaluated = true;
    this.hs_toAscList.evaluate = function (hs_q26DUhH) {
        $hs.modules.SystemziEventziPSQ.loadDependencies();
        return this.evaluate(hs_q26DUhH);
    };
    this.hs_toList.notEvaluated = true;
    this.hs_toList.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.SystemziEventziPSQ.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_singleton.notEvaluated = true;
    this.hs_singleton.evaluate = function (hs_k26DUhL, hs_p26DUhO, hs_v26DUhW) {
        $hs.modules.SystemziEventziPSQ.loadDependencies();
        return this.evaluate(hs_k26DUhL, hs_p26DUhO, hs_v26DUhW);
    };
    this.hs_insert.notEvaluated = true;
    this.hs_insert.evaluate = function (hs_k26DUi4, hs_p26DUi7, hs_v26DUif, hs_q26DUi2) {
        $hs.modules.SystemziEventziPSQ.loadDependencies();
        return this.evaluate(hs_k26DUi4, hs_p26DUi7, hs_v26DUif, hs_q26DUi2);
    };
    this.hs_empty.notEvaluated = true;
    this.hs_empty.evaluate = function () {
        $hs.modules.SystemziEventziPSQ.loadDependencies();
        return this;
    };
    this.hs_delete.notEvaluated = true;
    this.hs_delete.evaluate = function (hs_k26DUmp, hs_q26DUm1) {
        $hs.modules.SystemziEventziPSQ.loadDependencies();
        return this.evaluate(hs_k26DUmp, hs_q26DUm1);
    };
    this.hs_adjust.notEvaluated = true;
    this.hs_adjust.evaluate = function (hs_eta26DUwV, hs_eta126DUpe, hs_eta226DUx5) {
        $hs.modules.SystemziEventziPSQ.loadDependencies();
        return this.evaluate(hs_eta26DUwV, hs_eta126DUpe, hs_eta226DUx5);
    };
    this.hs_fromList.evaluateOnce = function () {
        $hs.modules.SystemziEventziPSQ.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_lookup.notEvaluated = true;
    this.hs_lookup.evaluate = function (hs_k26DUxp, hs_q26DUxE) {
        $hs.modules.SystemziEventziPSQ.loadDependencies();
        return this.evaluate(hs_k26DUxp, hs_q26DUxE);
    };
    this.hs_null.notEvaluated = true;
    this.hs_null.evaluate = function (hs_ds26DUyq) {
        $hs.modules.SystemziEventziPSQ.loadDependencies();
        return this.evaluate(hs_ds26DUyq);
    };
    this.hs_sizze.notEvaluated = true;
    this.hs_sizze.evaluate = function (hs_ds26DUyy) {
        $hs.modules.SystemziEventziPSQ.loadDependencies();
        return this.evaluate(hs_ds26DUyy);
    };
    this.hs_value.notEvaluated = true;
    this.hs_value.evaluate = function (hs_ds26DUz0) {
        $hs.modules.SystemziEventziPSQ.loadDependencies();
        return this.evaluate(hs_ds26DUz0);
    };
    this.hs_prio.notEvaluated = true;
    this.hs_prio.evaluate = function (hs_ds26DUz7) {
        $hs.modules.SystemziEventziPSQ.loadDependencies();
        return this.evaluate(hs_ds26DUz7);
    };
    this.hs_atMost.notEvaluated = true;
    this.hs_atMost.evaluate = function (hs_pt26DUCA, hs_q26DUCB) {
        $hs.modules.SystemziEventziPSQ.loadDependencies();
        return this.evaluate(hs_pt26DUCA, hs_q26DUCB);
    };
    this.hs_key.notEvaluated = true;
    this.hs_key.evaluate = function (hs_ds26DUCO) {
        $hs.modules.SystemziEventziPSQ.loadDependencies();
        return this.evaluate(hs_ds26DUCO);
    };
    this.hs_zdfShowSequ.notEvaluated = true;
    this.hs_zdfShowSequ.evaluate = function (hs_zddShow26DUDb) {
        $hs.modules.SystemziEventziPSQ.loadDependencies();
        return this.evaluate(hs_zddShow26DUDb);
    };
    this.hs_zdfShowElem.notEvaluated = true;
    this.hs_zdfShowElem.evaluate = function (hs_zddShow26DUEd) {
        $hs.modules.SystemziEventziPSQ.loadDependencies();
        return this.evaluate(hs_zddShow26DUEd);
    };
    this.hs_zdfShowLTree.notEvaluated = true;
    this.hs_zdfShowLTree.evaluate = function (hs_zddShow26DUEw) {
        $hs.modules.SystemziEventziPSQ.loadDependencies();
        return this.evaluate(hs_zddShow26DUEw);
    };
    this.hs_zdfShowPSQ.notEvaluated = true;
    this.hs_zdfShowPSQ.evaluate = function (hs_zddShow26DUGY) {
        $hs.modules.SystemziEventziPSQ.loadDependencies();
        return this.evaluate(hs_zddShow26DUGY);
    };
    this.hs_zdfEqElem.notEvaluated = true;
    this.hs_zdfEqElem.evaluate = function (hs_zddEq26DUHH) {
        $hs.modules.SystemziEventziPSQ.loadDependencies();
        return this.evaluate(hs_zddEq26DUHH);
    };
    this.hs_zdfEqLTree.notEvaluated = true;
    this.hs_zdfEqLTree.evaluate = function (hs_zddEq26DUHZ) {
        $hs.modules.SystemziEventziPSQ.loadDependencies();
        return this.evaluate(hs_zddEq26DUHZ);
    };
    this.hs_zdfEqPSQ.notEvaluated = true;
    this.hs_zdfEqPSQ.evaluate = function (hs_zddEq26DUNa) {
        $hs.modules.SystemziEventziPSQ.loadDependencies();
        return this.evaluate(hs_zddEq26DUNa);
    };
    this.hs_Sequ.notEvaluated = true;
    this.hs_Sequ.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.SystemziEventziPSQ.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_Null.notEvaluated = true;
    this.hs_Null.evaluate = function () {
        $hs.modules.SystemziEventziPSQ.loadDependencies();
        return this;
    };
    this.hs_Single.notEvaluated = true;
    this.hs_Single.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziEventziPSQ.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_Play.notEvaluated = true;
    this.hs_Play.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziEventziPSQ.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_Start.notEvaluated = true;
    this.hs_Start.evaluate = function () {
        $hs.modules.SystemziEventziPSQ.loadDependencies();
        return this;
    };
    this.hs_LLoser.notEvaluated = true;
    this.hs_LLoser.evaluate = function (hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziEventziPSQ.loadDependencies();
        return this.evaluate(hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_RLoser.notEvaluated = true;
    this.hs_RLoser.evaluate = function (hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziEventziPSQ.loadDependencies();
        return this.evaluate(hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_Void.notEvaluated = true;
    this.hs_Void.evaluate = function () {
        $hs.modules.SystemziEventziPSQ.loadDependencies();
        return this;
    };
    this.hs_Winner.notEvaluated = true;
    this.hs_Winner.evaluate = function (hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziEventziPSQ.loadDependencies();
        return this.evaluate(hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_E.notEvaluated = true;
    this.hs_E.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziEventziPSQ.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
};
$hs.modules.SystemziEventziPSQ.initAfterDependencies = function () {
    this.hs_zdWSingle.notEvaluated = false;
    this.hs_zdWLLoser.notEvaluated = false;
    this.hs_zdWRLoser.notEvaluated = false;
    this.hs_zdWWinner.notEvaluated = false;
    this.hs_zdWE.notEvaluated = false;
    this.hs_minView.notEvaluated = false;
    this.hs_deleteMin.notEvaluated = false;
    this.hs_findMin.notEvaluated = false;
    this.hs_toDescList.notEvaluated = false;
    this.hs_toAscList.notEvaluated = false;
    this.hs_toList.notEvaluated = false;
    this.hs_singleton.notEvaluated = false;
    this.hs_insert.notEvaluated = false;
    this.hs_empty.notEvaluated = false;
    this.hs_empty.evaluate = function () {
        return this;
    };
    this.hs_delete.notEvaluated = false;
    this.hs_adjust.notEvaluated = false;
    this.hs_lookup.notEvaluated = false;
    this.hs_null.notEvaluated = false;
    this.hs_sizze.notEvaluated = false;
    this.hs_value.notEvaluated = false;
    this.hs_prio.notEvaluated = false;
    this.hs_atMost.notEvaluated = false;
    this.hs_key.notEvaluated = false;
    this.hs_zdfShowSequ.notEvaluated = false;
    this.hs_zdfShowElem.notEvaluated = false;
    this.hs_zdfShowLTree.notEvaluated = false;
    this.hs_zdfShowPSQ.notEvaluated = false;
    this.hs_zdfEqElem.notEvaluated = false;
    this.hs_zdfEqLTree.notEvaluated = false;
    this.hs_zdfEqPSQ.notEvaluated = false;
    this.hs_Sequ.notEvaluated = false;
    this.hs_Null.notEvaluated = false;
    this.hs_Null.evaluate = function () {
        return this;
    };
    this.hs_Single.notEvaluated = false;
    this.hs_Play.notEvaluated = false;
    this.hs_Start.notEvaluated = false;
    this.hs_Start.evaluate = function () {
        return this;
    };
    this.hs_LLoser.notEvaluated = false;
    this.hs_RLoser.notEvaluated = false;
    this.hs_Void.notEvaluated = false;
    this.hs_Void.evaluate = function () {
        return this;
    };
    this.hs_Winner.notEvaluated = false;
    this.hs_E.notEvaluated = false;
    var hs_a25vvgo = new $hs.Func(1);
    var hs_moduleError25tPTE = new $hs.Func(2);
    var hs_omega25tPT4 = new $hs.Data(1);
    var hs_right25tPSW = new $hs.Func(1);
    var hs_left25tPSU = new $hs.Func(1);
    var hs_lloser25tPT0 = new $hs.Func(6);
    var hs_lsingleRight25tPTm = new $hs.Func(6);
    var hs_rloser25tPT2 = new $hs.Func(6);
    var hs_lsingleLeft25tPTi = new $hs.Func(6);
    var hs_rsingleLeft25tPTk = new $hs.Func(6);
    var hs_rsingleRight25tPTo = new $hs.Func(6);
    var hs_lbalance25tPT6 = new $hs.Func(6);
    var hs_rbalance25tPT8 = new $hs.Func(6);
    var hs_secondBest25tPSM = new $hs.Func(2);
    var hs_a125vvJL = new $hs.Func(2);
    var hs_a225vvKC = new $hs.Func(2);
    var hs_atMosts25tPSQ = new $hs.Func(2);
    var hs_zdcshowsPrec25vw6F = new $hs.Func(1);
    var hs_zdcshowList25vw6R = new $hs.Func(1);
    var hs_zdcshow25vw6T = new $hs.Func(1);
    var hs_zdcshowsPrec125vw76 = new $hs.Func(3);
    var hs_zdcshowList125vw7T = new $hs.Func(1);
    var hs_zdcshow125vw7V = new $hs.Func(1);
    var hs_zdcshowList225vw8a = new $hs.Func(1);
    var hs_zdcshow225vw8c = new $hs.Func(1);
    var hs_zdcshowsPrec225vw8e = new $hs.Func(1);
    var hs_zdcshowsPrec325vw9Y = new $hs.Func(1);
    var hs_zdcshowList325vwaE = new $hs.Func(1);
    var hs_zdcshow325vwaG = new $hs.Func(1);
    var hs_zdczeze25vwaV = new $hs.Func(3);
    var hs_zdczsze25vwbp = new $hs.Func(1);
    var hs_zdczsze125vwbF = new $hs.Func(1);
    var hs_zdczeze125vwbH = new $hs.Func(1);
    var hs_zdczeze225vwfx = new $hs.Func(1);
    var hs_zdczsze225vwgS = new $hs.Func(1);
    this.hs_zdWSingle.evaluate = function (hs_tpl26DTL9) {
        var hs_tpl26DUNn = hs_tpl26DTL9;
        if (hs_tpl26DTL9.notEvaluated) {
            hs_tpl26DUNn = hs_tpl26DTL9.hscall();
        }
        var hs_tpl26DTLe = hs_tpl26DUNn.data[0];
        var hs_tpl26DTLf = hs_tpl26DUNn.data[1];
        var hs_tpl26DTLg = hs_tpl26DUNn.data[2];
        var $res = new $hs.Data(2);
        $res.data = [hs_tpl26DTLe, hs_tpl26DTLf, hs_tpl26DTLg];
        return $res;
    };
    this.hs_zdWLLoser.evaluate = function (hs_tpl26DTLm, hs_tpl26DTLp, hs_tpl26DTLu, hs_tpl26DTLw, hs_tpl26DTLz) {
        var hs_tpl26DUNq = hs_tpl26DTLm;
        if (hs_tpl26DTLm.notEvaluated) {
            hs_tpl26DUNq = hs_tpl26DTLm.hscall();
        }
        var hs_tpl26DTLB = hs_tpl26DUNq.data[0];
        var hs_tpl26DUNp = hs_tpl26DTLp;
        if (hs_tpl26DTLp.notEvaluated) {
            hs_tpl26DUNp = hs_tpl26DTLp.hscall();
        }
        var hs_tpl26DTLC = hs_tpl26DUNp.data[0];
        var hs_tpl26DTLD = hs_tpl26DUNp.data[1];
        var hs_tpl26DTLE = hs_tpl26DUNp.data[2];
        var hs_tpl26DTLF = hs_tpl26DTLu;
        if (hs_tpl26DTLu.notEvaluated) {
            hs_tpl26DTLF = hs_tpl26DTLu.hscall();
        }
        var hs_tpl26DUNo = hs_tpl26DTLw;
        if (hs_tpl26DTLw.notEvaluated) {
            hs_tpl26DUNo = hs_tpl26DTLw.hscall();
        }
        var hs_tpl26DTLG = hs_tpl26DUNo.data[0];
        var hs_tpl26DTLH = hs_tpl26DTLz;
        if (hs_tpl26DTLz.notEvaluated) {
            hs_tpl26DTLH = hs_tpl26DTLz.hscall();
        }
        var $res = new $hs.Data(2);
        $res.data = [hs_tpl26DTLB, hs_tpl26DTLC, hs_tpl26DTLD, hs_tpl26DTLE, hs_tpl26DTLF, hs_tpl26DTLG, hs_tpl26DTLH];
        return $res;
    };
    this.hs_zdWRLoser.evaluate = function (hs_tpl26DTLN, hs_tpl26DTLQ, hs_tpl26DTLV, hs_tpl26DTLX, hs_tpl26DTM0) {
        var hs_tpl26DUNt = hs_tpl26DTLN;
        if (hs_tpl26DTLN.notEvaluated) {
            hs_tpl26DUNt = hs_tpl26DTLN.hscall();
        }
        var hs_tpl26DTM2 = hs_tpl26DUNt.data[0];
        var hs_tpl26DUNs = hs_tpl26DTLQ;
        if (hs_tpl26DTLQ.notEvaluated) {
            hs_tpl26DUNs = hs_tpl26DTLQ.hscall();
        }
        var hs_tpl26DTM3 = hs_tpl26DUNs.data[0];
        var hs_tpl26DTM4 = hs_tpl26DUNs.data[1];
        var hs_tpl26DTM5 = hs_tpl26DUNs.data[2];
        var hs_tpl26DTM6 = hs_tpl26DTLV;
        if (hs_tpl26DTLV.notEvaluated) {
            hs_tpl26DTM6 = hs_tpl26DTLV.hscall();
        }
        var hs_tpl26DUNr = hs_tpl26DTLX;
        if (hs_tpl26DTLX.notEvaluated) {
            hs_tpl26DUNr = hs_tpl26DTLX.hscall();
        }
        var hs_tpl26DTM7 = hs_tpl26DUNr.data[0];
        var hs_tpl26DTM8 = hs_tpl26DTM0;
        if (hs_tpl26DTM0.notEvaluated) {
            hs_tpl26DTM8 = hs_tpl26DTM0.hscall();
        }
        var $res = new $hs.Data(3);
        $res.data = [hs_tpl26DTM2, hs_tpl26DTM3, hs_tpl26DTM4, hs_tpl26DTM5, hs_tpl26DTM6, hs_tpl26DTM7, hs_tpl26DTM8];
        return $res;
    };
    this.hs_zdWWinner.evaluate = function (hs_tpl26DTMc, hs_tpl26DTMh, hs_tpl26DTMj) {
        var hs_tpl26DUNv = hs_tpl26DTMc;
        if (hs_tpl26DTMc.notEvaluated) {
            hs_tpl26DUNv = hs_tpl26DTMc.hscall();
        }
        var hs_tpl26DTMm = hs_tpl26DUNv.data[0];
        var hs_tpl26DTMn = hs_tpl26DUNv.data[1];
        var hs_tpl26DTMo = hs_tpl26DUNv.data[2];
        var hs_tpl26DTMp = hs_tpl26DTMh;
        if (hs_tpl26DTMh.notEvaluated) {
            hs_tpl26DTMp = hs_tpl26DTMh.hscall();
        }
        var hs_tpl26DUNu = hs_tpl26DTMj;
        if (hs_tpl26DTMj.notEvaluated) {
            hs_tpl26DUNu = hs_tpl26DTMj.hscall();
        }
        var hs_tpl26DTMq = hs_tpl26DUNu.data[0];
        var $res = new $hs.Data(2);
        $res.data = [hs_tpl26DTMm, hs_tpl26DTMn, hs_tpl26DTMo, hs_tpl26DTMp, hs_tpl26DTMq];
        return $res;
    };
    this.hs_zdWE.evaluate = function (hs_tpl26DTMu, hs_tpl26DTMx, hs_tpl26DTMC) {
        var hs_tpl26DUNx = hs_tpl26DTMu;
        if (hs_tpl26DTMu.notEvaluated) {
            hs_tpl26DUNx = hs_tpl26DTMu.hscall();
        }
        var hs_tpl26DTMA = hs_tpl26DUNx.data[0];
        var hs_tpl26DUNw = hs_tpl26DTMx;
        if (hs_tpl26DTMx.notEvaluated) {
            hs_tpl26DUNw = hs_tpl26DTMx.hscall();
        }
        var hs_tpl26DTMB = hs_tpl26DUNw.data[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26DTMA, hs_tpl26DTMB, hs_tpl26DTMC];
        return $res;
    };
    hs_a25vvgo.evaluate = function (hs_as26DTMG) {
        if (hs_as26DTMG.notEvaluated) {
            return hs_as26DTMG.hscall();
        } else {
            return hs_as26DTMG;
        }
    };
    hs_moduleError25tPTE.evaluate = function (hs_fun26DTMK, hs_msg26DTMN) {
        var hs_sat26DUNC = new $hs.Thunk();
        hs_sat26DUNC.evaluateOnce = function () {
            var hs_sat26DUNy = new $hs.Data(1);
            hs_sat26DUNy.data = [" "];
            var hs_sat26DUNz = new $hs.Data(2);
            hs_sat26DUNz.data = [hs_sat26DUNy, hs_msg26DTMN];
            var hs_sat26DUNA = new $hs.Data(1);
            hs_sat26DUNA.data = [":"];
            var hs_sat26DUNB = new $hs.Data(2);
            hs_sat26DUNB.data = [hs_sat26DUNA, hs_sat26DUNz];
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_fun26DTMK, hs_sat26DUNB);
        };
        var hs_sat26DUNE = new $hs.Thunk();
        hs_sat26DUNE.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("System.Event.PSQ.\x00");
        };
        var hs_sat26DUND = $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DUNE, hs_sat26DUNC);
        return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DUND);
    };
    hs_omega25tPT4.data = [4];
    hs_right25tPSW.evaluate = function (hs_ds26DTMT) {
        var hs_wild26DUNF = hs_ds26DTMT;
        if (hs_ds26DTMT.notEvaluated) {
            hs_wild26DUNF = hs_ds26DTMT.hscall();
        }
        switch (hs_wild26DUNF.tag) {
        case 1:
            var hs_sat26DUNG = new $hs.Thunk();
            hs_sat26DUNG.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("empty loser tree\x00");
            };
            var hs_sat26DUNH = new $hs.Thunk();
            hs_sat26DUNH.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("right\x00");
            };
            return hs_moduleError25tPTE.hscall(hs_sat26DUNH, hs_sat26DUNG);
        case 2:
            var hs_tr26DTN4 = hs_wild26DUNF.data[6];
            if (hs_tr26DTN4.notEvaluated) {
                return hs_tr26DTN4.hscall();
            } else {
                return hs_tr26DTN4;
            }
        case 3:
            var hs_tr26DTNc = hs_wild26DUNF.data[6];
            if (hs_tr26DTNc.notEvaluated) {
                return hs_tr26DTNc.hscall();
            } else {
                return hs_tr26DTNc;
            }
        }
    };
    hs_left25tPSU.evaluate = function (hs_ds26DTNe) {
        var hs_wild26DUNU = hs_ds26DTNe;
        if (hs_ds26DTNe.notEvaluated) {
            hs_wild26DUNU = hs_ds26DTNe.hscall();
        }
        switch (hs_wild26DUNU.tag) {
        case 1:
            var hs_sat26DUNV = new $hs.Thunk();
            hs_sat26DUNV.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("empty loser tree\x00");
            };
            var hs_sat26DUNW = new $hs.Thunk();
            hs_sat26DUNW.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("left\x00");
            };
            return hs_moduleError25tPTE.hscall(hs_sat26DUNW, hs_sat26DUNV);
        case 2:
            var hs_tl26DTNp = hs_wild26DUNU.data[4];
            if (hs_tl26DTNp.notEvaluated) {
                return hs_tl26DTNp.hscall();
            } else {
                return hs_tl26DTNp;
            }
        case 3:
            var hs_tl26DTNx = hs_wild26DUNU.data[4];
            if (hs_tl26DTNx.notEvaluated) {
                return hs_tl26DTNx.hscall();
            } else {
                return hs_tl26DTNx;
            }
        }
    };
    hs_lloser25tPT0.evaluate = function (hs_k26DTOk, hs_p26DTOn, hs_v26DTOy, hs_tl26DTNF, hs_m26DTOr, hs_tr26DTNZ) {
        var hs_sat26DUOn = new $hs.Thunk();
        hs_sat26DUOn.evaluateOnce = function () {
            var hs_wild26DUO9 = hs_tr26DTNZ;
            if (hs_tr26DTNZ.notEvaluated) {
                hs_wild26DUO9 = hs_tr26DTNZ.hscall();
            }
            switch (hs_wild26DUO9.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [0];
                return $res;
            case 2:
                var hs_rb26DTO8 = hs_wild26DUO9.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb26DTO8];
                return $res;
            case 3:
                var hs_rb26DTOg = hs_wild26DUO9.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb26DTOg];
                return $res;
            }
        };
        var hs_sat26DUOG = new $hs.Thunk();
        hs_sat26DUOG.evaluateOnce = function () {
            var hs_sat26DUOA = new $hs.Thunk();
            hs_sat26DUOA.evaluateOnce = function () {
                var hs_wild26DUOm = hs_tl26DTNF;
                if (hs_tl26DTNF.notEvaluated) {
                    hs_wild26DUOm = hs_tl26DTNF.hscall();
                }
                switch (hs_wild26DUOm.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [0];
                    return $res;
                case 2:
                    var hs_rb26DTNO = hs_wild26DUOm.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb26DTNO];
                    return $res;
                case 3:
                    var hs_rb26DTNW = hs_wild26DUOm.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb26DTNW];
                    return $res;
                }
            };
            var hs_sat26DUOB = new $hs.Data(1);
            hs_sat26DUOB.data = [1];
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DUOB, hs_sat26DUOA);
        };
        var hs_tpl26DUOF = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DUOG, hs_sat26DUOn);
        var hs_tpl126DTOv = hs_tpl26DUOF.data[0];
        var hs_tpl226DUOE = hs_k26DTOk;
        if (hs_k26DTOk.notEvaluated) {
            hs_tpl226DUOE = hs_k26DTOk.hscall();
        }
        var hs_tpl326DTOw = hs_tpl226DUOE.data[0];
        var hs_tpl426DUOD = hs_p26DTOn;
        if (hs_p26DTOn.notEvaluated) {
            hs_tpl426DUOD = hs_p26DTOn.hscall();
        }
        var hs_tpl526DTOx = hs_tpl426DUOD.data[0];
        var hs_tpl626DTOz = hs_tl26DTNF;
        if (hs_tl26DTNF.notEvaluated) {
            hs_tpl626DTOz = hs_tl26DTNF.hscall();
        }
        var hs_tpl726DUOC = hs_m26DTOr;
        if (hs_m26DTOr.notEvaluated) {
            hs_tpl726DUOC = hs_m26DTOr.hscall();
        }
        var hs_tpl826DTOA = hs_tpl726DUOC.data[0];
        var hs_tpl926DTOB = hs_tr26DTNZ;
        if (hs_tr26DTNZ.notEvaluated) {
            hs_tpl926DTOB = hs_tr26DTNZ.hscall();
        }
        var $res = new $hs.Data(2);
        $res.data = [hs_tpl126DTOv, hs_tpl326DTOw, hs_tpl526DTOx, hs_v26DTOy, hs_tpl626DTOz, hs_tpl826DTOA, hs_tpl926DTOB];
        return $res;
    };
    hs_lsingleRight25tPTm.evaluate = function (hs_k126DTPA, hs_p126DTPD, hs_v126DTPN, hs_ds26DTOI, hs_m226DTPG, hs_t326DTPf) {
        var hs_wild26DUOH = hs_ds26DTOI;
        if (hs_ds26DTOI.notEvaluated) {
            hs_wild26DUOH = hs_ds26DTOI.hscall();
        }
        switch (hs_wild26DUOH.tag) {
        case 1:
            var hs_sat26DUOI = new $hs.Thunk();
            hs_sat26DUOI.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("malformed tree\x00");
            };
            var hs_sat26DUOJ = new $hs.Thunk();
            hs_sat26DUOJ.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("lsingleRight\x00");
            };
            return hs_moduleError25tPTE.hscall(hs_sat26DUOJ, hs_sat26DUOI);
        case 2:
            var hs_rb126DTQy = hs_wild26DUOH.data[1];
            var hs_rb226DTQz = hs_wild26DUOH.data[2];
            var hs_rb326DTQA = hs_wild26DUOH.data[3];
            var hs_t126DTPS = hs_wild26DUOH.data[4];
            var hs_rb426DTQB = hs_wild26DUOH.data[5];
            var hs_t226DTOV = hs_wild26DUOH.data[6];
            var hs_tr26DTPQ = new $hs.Thunk();
            hs_tr26DTPQ.evaluateOnce = function () {
                var hs_sat26DUOZ = new $hs.Thunk();
                hs_sat26DUOZ.evaluateOnce = function () {
                    var hs_wild126DUOK = hs_t326DTPf;
                    if (hs_t326DTPf.notEvaluated) {
                        hs_wild126DUOK = hs_t326DTPf.hscall();
                    }
                    switch (hs_wild126DUOK.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [0];
                        return $res;
                    case 2:
                        var hs_rb526DTPo = hs_wild126DUOK.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb526DTPo];
                        return $res;
                    case 3:
                        var hs_rb526DTPw = hs_wild126DUOK.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb526DTPw];
                        return $res;
                    }
                };
                var hs_sat26DUPi = new $hs.Thunk();
                hs_sat26DUPi.evaluateOnce = function () {
                    var hs_sat26DUPc = new $hs.Thunk();
                    hs_sat26DUPc.evaluateOnce = function () {
                        var hs_wild126DUOY = hs_t226DTOV;
                        if (hs_t226DTOV.notEvaluated) {
                            hs_wild126DUOY = hs_t226DTOV.hscall();
                        }
                        switch (hs_wild126DUOY.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [0];
                            return $res;
                        case 2:
                            var hs_rb526DTP4 = hs_wild126DUOY.data[0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb526DTP4];
                            return $res;
                        case 3:
                            var hs_rb526DTPc = hs_wild126DUOY.data[0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb526DTPc];
                            return $res;
                        }
                    };
                    var hs_sat26DUPd = new $hs.Data(1);
                    hs_sat26DUPd.data = [1];
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DUPd, hs_sat26DUPc);
                };
                var hs_tpl26DUPh = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DUPi, hs_sat26DUOZ);
                var hs_tpl126DTPK = hs_tpl26DUPh.data[0];
                var hs_tpl226DUPg = hs_k126DTPA;
                if (hs_k126DTPA.notEvaluated) {
                    hs_tpl226DUPg = hs_k126DTPA.hscall();
                }
                var hs_tpl326DTPL = hs_tpl226DUPg.data[0];
                var hs_tpl426DUPf = hs_p126DTPD;
                if (hs_p126DTPD.notEvaluated) {
                    hs_tpl426DUPf = hs_p126DTPD.hscall();
                }
                var hs_tpl526DTPM = hs_tpl426DUPf.data[0];
                var hs_tpl626DUPe = hs_m226DTPG;
                if (hs_m226DTPG.notEvaluated) {
                    hs_tpl626DUPe = hs_m226DTPG.hscall();
                }
                var hs_tpl726DTPO = hs_tpl626DUPe.data[0];
                var hs_tpl826DTPP = hs_t326DTPf;
                if (hs_t326DTPf.notEvaluated) {
                    hs_tpl826DTPP = hs_t326DTPf.hscall();
                }
                var $res = new $hs.Data(2);
                $res.data = [hs_tpl126DTPK, hs_tpl326DTPL, hs_tpl526DTPM, hs_v126DTPN, hs_t226DTOV, hs_tpl726DTPO, hs_tpl826DTPP];
                return $res;
            };
            var hs_sat26DUPx = new $hs.Thunk();
            hs_sat26DUPx.evaluateOnce = function () {
                var hs_wild126DUPj = hs_tr26DTPQ;
                if (hs_tr26DTPQ.notEvaluated) {
                    hs_wild126DUPj = hs_tr26DTPQ.hscall();
                }
                switch (hs_wild126DUPj.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [0];
                    return $res;
                case 2:
                    var hs_rb526DTQk = hs_wild126DUPj.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb526DTQk];
                    return $res;
                case 3:
                    var hs_rb526DTQs = hs_wild126DUPj.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb526DTQs];
                    return $res;
                }
            };
            var hs_sat26DUPN = new $hs.Thunk();
            hs_sat26DUPN.evaluateOnce = function () {
                var hs_sat26DUPK = new $hs.Thunk();
                hs_sat26DUPK.evaluateOnce = function () {
                    var hs_wild126DUPw = hs_t126DTPS;
                    if (hs_t126DTPS.notEvaluated) {
                        hs_wild126DUPw = hs_t126DTPS.hscall();
                    }
                    switch (hs_wild126DUPw.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [0];
                        return $res;
                    case 2:
                        var hs_rb526DTQ1 = hs_wild126DUPw.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb526DTQ1];
                        return $res;
                    case 3:
                        var hs_rb526DTQ9 = hs_wild126DUPw.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb526DTQ9];
                        return $res;
                    }
                };
                var hs_sat26DUPL = new $hs.Data(1);
                hs_sat26DUPL.data = [1];
                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DUPL, hs_sat26DUPK);
            };
            var hs_tpl26DUPM = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DUPN, hs_sat26DUPx);
            var hs_tpl126DTQx = hs_tpl26DUPM.data[0];
            var hs_tpl226DTQC = hs_tr26DTPQ;
            if (hs_tr26DTPQ.notEvaluated) {
                hs_tpl226DTQC = hs_tr26DTPQ.hscall();
            }
            var $res = new $hs.Data(2);
            $res.data = [hs_tpl126DTQx, hs_rb126DTQy, hs_rb226DTQz, hs_rb326DTQA, hs_t126DTPS, hs_rb426DTQB, hs_tpl226DTQC];
            return $res;
        case 3:
            var hs_rb126DTRw = hs_wild26DUOH.data[1];
            var hs_rb226DTRx = hs_wild26DUOH.data[2];
            var hs_rb326DTRy = hs_wild26DUOH.data[3];
            var hs_t126DTQK = hs_wild26DUOH.data[4];
            var hs_rb426DTQL = hs_wild26DUOH.data[5];
            var hs_t226DTQO = hs_wild26DUOH.data[6];
            var hs_sat26DUQl = new $hs.Thunk();
            hs_sat26DUQl.evaluateOnce = function () {
                var hs_sat26DUQ3 = new $hs.Thunk();
                hs_sat26DUQ3.evaluateOnce = function () {
                    var hs_wild126DUPO = hs_t326DTPf;
                    if (hs_t326DTPf.notEvaluated) {
                        hs_wild126DUPO = hs_t326DTPf.hscall();
                    }
                    switch (hs_wild126DUPO.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [0];
                        return $res;
                    case 2:
                        var hs_rb526DTRg = hs_wild126DUPO.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb526DTRg];
                        return $res;
                    case 3:
                        var hs_rb526DTRo = hs_wild126DUPO.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb526DTRo];
                        return $res;
                    }
                };
                var hs_sat26DUQk = new $hs.Thunk();
                hs_sat26DUQk.evaluateOnce = function () {
                    var hs_sat26DUQg = new $hs.Thunk();
                    hs_sat26DUQg.evaluateOnce = function () {
                        var hs_wild126DUQ2 = hs_t226DTQO;
                        if (hs_t226DTQO.notEvaluated) {
                            hs_wild126DUQ2 = hs_t226DTQO.hscall();
                        }
                        switch (hs_wild126DUQ2.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [0];
                            return $res;
                        case 2:
                            var hs_rb526DTQX = hs_wild126DUQ2.data[0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb526DTQX];
                            return $res;
                        case 3:
                            var hs_rb526DTR5 = hs_wild126DUQ2.data[0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb526DTR5];
                            return $res;
                        }
                    };
                    var hs_sat26DUQh = new $hs.Data(1);
                    hs_sat26DUQh.data = [1];
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DUQh, hs_sat26DUQg);
                };
                var hs_tpl26DUQj = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DUQk, hs_sat26DUQ3);
                var hs_tpl126DTRv = hs_tpl26DUQj.data[0];
                var hs_tpl226DUQi = hs_m226DTPG;
                if (hs_m226DTPG.notEvaluated) {
                    hs_tpl226DUQi = hs_m226DTPG.hscall();
                }
                var hs_tpl326DTRz = hs_tpl226DUQi.data[0];
                var hs_tpl426DTRA = hs_t326DTPf;
                if (hs_t326DTPf.notEvaluated) {
                    hs_tpl426DTRA = hs_t326DTPf.hscall();
                }
                var $res = new $hs.Data(2);
                $res.data = [hs_tpl126DTRv, hs_rb126DTRw, hs_rb226DTRx, hs_rb326DTRy, hs_t226DTQO, hs_tpl326DTRz, hs_tpl426DTRA];
                return $res;
            };
            var hs_sat26DUQm = new $hs.Data(1);
            hs_sat26DUQm.data = [hs_rb426DTQL];
            return hs_lloser25tPT0.hscall(hs_k126DTPA, hs_p126DTPD, hs_v126DTPN, hs_t126DTQK, hs_sat26DUQm, hs_sat26DUQl);
        }
    };
    hs_rloser25tPT2.evaluate = function (hs_k26DTSo, hs_p26DTSr, hs_v26DTSC, hs_tl26DTRJ, hs_m26DTSv, hs_tr26DTS3) {
        var hs_sat26DUQB = new $hs.Thunk();
        hs_sat26DUQB.evaluateOnce = function () {
            var hs_wild26DUQn = hs_tr26DTS3;
            if (hs_tr26DTS3.notEvaluated) {
                hs_wild26DUQn = hs_tr26DTS3.hscall();
            }
            switch (hs_wild26DUQn.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [0];
                return $res;
            case 2:
                var hs_rb26DTSc = hs_wild26DUQn.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb26DTSc];
                return $res;
            case 3:
                var hs_rb26DTSk = hs_wild26DUQn.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb26DTSk];
                return $res;
            }
        };
        var hs_sat26DUQU = new $hs.Thunk();
        hs_sat26DUQU.evaluateOnce = function () {
            var hs_sat26DUQO = new $hs.Thunk();
            hs_sat26DUQO.evaluateOnce = function () {
                var hs_wild26DUQA = hs_tl26DTRJ;
                if (hs_tl26DTRJ.notEvaluated) {
                    hs_wild26DUQA = hs_tl26DTRJ.hscall();
                }
                switch (hs_wild26DUQA.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [0];
                    return $res;
                case 2:
                    var hs_rb26DTRS = hs_wild26DUQA.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb26DTRS];
                    return $res;
                case 3:
                    var hs_rb26DTS0 = hs_wild26DUQA.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb26DTS0];
                    return $res;
                }
            };
            var hs_sat26DUQP = new $hs.Data(1);
            hs_sat26DUQP.data = [1];
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DUQP, hs_sat26DUQO);
        };
        var hs_tpl26DUQT = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DUQU, hs_sat26DUQB);
        var hs_tpl126DTSz = hs_tpl26DUQT.data[0];
        var hs_tpl226DUQS = hs_k26DTSo;
        if (hs_k26DTSo.notEvaluated) {
            hs_tpl226DUQS = hs_k26DTSo.hscall();
        }
        var hs_tpl326DTSA = hs_tpl226DUQS.data[0];
        var hs_tpl426DUQR = hs_p26DTSr;
        if (hs_p26DTSr.notEvaluated) {
            hs_tpl426DUQR = hs_p26DTSr.hscall();
        }
        var hs_tpl526DTSB = hs_tpl426DUQR.data[0];
        var hs_tpl626DTSD = hs_tl26DTRJ;
        if (hs_tl26DTRJ.notEvaluated) {
            hs_tpl626DTSD = hs_tl26DTRJ.hscall();
        }
        var hs_tpl726DUQQ = hs_m26DTSv;
        if (hs_m26DTSv.notEvaluated) {
            hs_tpl726DUQQ = hs_m26DTSv.hscall();
        }
        var hs_tpl826DTSE = hs_tpl726DUQQ.data[0];
        var hs_tpl926DTSF = hs_tr26DTS3;
        if (hs_tr26DTS3.notEvaluated) {
            hs_tpl926DTSF = hs_tr26DTS3.hscall();
        }
        var $res = new $hs.Data(3);
        $res.data = [hs_tpl126DTSz, hs_tpl326DTSA, hs_tpl526DTSB, hs_v26DTSC, hs_tpl626DTSD, hs_tpl826DTSE, hs_tpl926DTSF];
        return $res;
    };
    hs_lsingleLeft25tPTi.evaluate = function (hs_k126DTTJ, hs_p126DTT0, hs_v126DTTV, hs_t126DTT4, hs_m126DTTP, hs_ds26DTSM) {
        var hs_wild26DUQV = hs_ds26DTSM;
        if (hs_ds26DTSM.notEvaluated) {
            hs_wild26DUQV = hs_ds26DTSM.hscall();
        }
        switch (hs_wild26DUQV.tag) {
        case 1:
            var hs_sat26DUQW = new $hs.Thunk();
            hs_sat26DUQW.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("malformed tree\x00");
            };
            var hs_sat26DUQX = new $hs.Thunk();
            hs_sat26DUQX.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("lsingleLeft\x00");
            };
            return hs_moduleError25tPTE.hscall(hs_sat26DUQX, hs_sat26DUQW);
        case 2:
            var hs_rb126DTUI = hs_wild26DUQV.data[1];
            var hs_rb226DTSY = hs_wild26DUQV.data[2];
            var hs_rb326DTUK = hs_wild26DUQV.data[3];
            var hs_t226DTTo = hs_wild26DUQV.data[4];
            var hs_rb426DTUM = hs_wild26DUQV.data[5];
            var hs_t326DTUj = hs_wild26DUQV.data[6];
            var hs_p226DTSZ = new $hs.Data(1);
            hs_p226DTSZ.data = [hs_rb226DTSY];
            var hs_wild126DUR0 = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_p126DTT0, hs_p226DTSZ);
            switch (hs_wild126DUR0.tag) {
            case 1:
                var hs_tl26DTTY = new $hs.Thunk();
                hs_tl26DTTY.evaluateOnce = function () {
                    var hs_sat26DURe = new $hs.Thunk();
                    hs_sat26DURe.evaluateOnce = function () {
                        var hs_wild226DUQZ = hs_t226DTTo;
                        if (hs_t226DTTo.notEvaluated) {
                            hs_wild226DUQZ = hs_t226DTTo.hscall();
                        }
                        switch (hs_wild226DUQZ.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [0];
                            return $res;
                        case 2:
                            var hs_rb526DTTx = hs_wild226DUQZ.data[0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb526DTTx];
                            return $res;
                        case 3:
                            var hs_rb526DTTF = hs_wild226DUQZ.data[0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb526DTTF];
                            return $res;
                        }
                    };
                    var hs_sat26DURx = new $hs.Thunk();
                    hs_sat26DURx.evaluateOnce = function () {
                        var hs_sat26DURr = new $hs.Thunk();
                        hs_sat26DURr.evaluateOnce = function () {
                            var hs_wild226DURd = hs_t126DTT4;
                            if (hs_t126DTT4.notEvaluated) {
                                hs_wild226DURd = hs_t126DTT4.hscall();
                            }
                            switch (hs_wild226DURd.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [0];
                                return $res;
                            case 2:
                                var hs_rb526DTTd = hs_wild226DURd.data[0];
                                var $res = new $hs.Data(1);
                                $res.data = [hs_rb526DTTd];
                                return $res;
                            case 3:
                                var hs_rb526DTTl = hs_wild226DURd.data[0];
                                var $res = new $hs.Data(1);
                                $res.data = [hs_rb526DTTl];
                                return $res;
                            }
                        };
                        var hs_sat26DURs = new $hs.Data(1);
                        hs_sat26DURs.data = [1];
                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DURs, hs_sat26DURr);
                    };
                    var hs_tpl26DURw = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DURx, hs_sat26DURe);
                    var hs_tpl126DTTS = hs_tpl26DURw.data[0];
                    var hs_tpl226DURv = hs_k126DTTJ;
                    if (hs_k126DTTJ.notEvaluated) {
                        hs_tpl226DURv = hs_k126DTTJ.hscall();
                    }
                    var hs_tpl326DTTT = hs_tpl226DURv.data[0];
                    var hs_tpl426DURu = hs_p126DTT0;
                    if (hs_p126DTT0.notEvaluated) {
                        hs_tpl426DURu = hs_p126DTT0.hscall();
                    }
                    var hs_tpl526DTTU = hs_tpl426DURu.data[0];
                    var hs_tpl626DTTW = hs_t126DTT4;
                    if (hs_t126DTT4.notEvaluated) {
                        hs_tpl626DTTW = hs_t126DTT4.hscall();
                    }
                    var hs_tpl726DURt = hs_m126DTTP;
                    if (hs_m126DTTP.notEvaluated) {
                        hs_tpl726DURt = hs_m126DTTP.hscall();
                    }
                    var hs_tpl826DTTX = hs_tpl726DURt.data[0];
                    var $res = new $hs.Data(2);
                    $res.data = [hs_tpl126DTTS, hs_tpl326DTTT, hs_tpl526DTTU, hs_v126DTTV, hs_tpl626DTTW, hs_tpl826DTTX, hs_t226DTTo];
                    return $res;
                };
                var hs_sat26DURM = new $hs.Thunk();
                hs_sat26DURM.evaluateOnce = function () {
                    var hs_wild226DURy = hs_t326DTUj;
                    if (hs_t326DTUj.notEvaluated) {
                        hs_wild226DURy = hs_t326DTUj.hscall();
                    }
                    switch (hs_wild226DURy.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [0];
                        return $res;
                    case 2:
                        var hs_rb526DTUs = hs_wild226DURy.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb526DTUs];
                        return $res;
                    case 3:
                        var hs_rb526DTUA = hs_wild226DURy.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb526DTUA];
                        return $res;
                    }
                };
                var hs_sat26DUS3 = new $hs.Thunk();
                hs_sat26DUS3.evaluateOnce = function () {
                    var hs_sat26DURZ = new $hs.Thunk();
                    hs_sat26DURZ.evaluateOnce = function () {
                        var hs_wild226DURL = hs_tl26DTTY;
                        if (hs_tl26DTTY.notEvaluated) {
                            hs_wild226DURL = hs_tl26DTTY.hscall();
                        }
                        switch (hs_wild226DURL.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [0];
                            return $res;
                        case 2:
                            var hs_rb526DTU8 = hs_wild226DURL.data[0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb526DTU8];
                            return $res;
                        case 3:
                            var hs_rb526DTUg = hs_wild226DURL.data[0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb526DTUg];
                            return $res;
                        }
                    };
                    var hs_sat26DUS0 = new $hs.Data(1);
                    hs_sat26DUS0.data = [1];
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DUS0, hs_sat26DURZ);
                };
                var hs_tpl26DUS2 = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DUS3, hs_sat26DURM);
                var hs_tpl126DTUH = hs_tpl26DUS2.data[0];
                var hs_tpl226DUS1 = hs_p226DTSZ;
                if (hs_p226DTSZ.notEvaluated) {
                    hs_tpl226DUS1 = hs_p226DTSZ.hscall();
                }
                var hs_tpl326DTUJ = hs_tpl226DUS1.data[0];
                var hs_tpl426DTUL = hs_tl26DTTY;
                if (hs_tl26DTTY.notEvaluated) {
                    hs_tpl426DTUL = hs_tl26DTTY.hscall();
                }
                var $res = new $hs.Data(2);
                $res.data = [hs_tpl126DTUH, hs_rb126DTUI, hs_tpl326DTUJ, hs_rb326DTUK, hs_tpl426DTUL, hs_rb426DTUM, hs_t326DTUj];
                return $res;
            case 2:
                var hs_sat26DUS5 = new $hs.Data(1);
                hs_sat26DUS5.data = [hs_rb426DTUM];
                var hs_sat26DUSC = new $hs.Thunk();
                hs_sat26DUSC.evaluateOnce = function () {
                    var hs_sat26DUSj = new $hs.Thunk();
                    hs_sat26DUSj.evaluateOnce = function () {
                        var hs_wild226DUS4 = hs_t226DTTo;
                        if (hs_t226DTTo.notEvaluated) {
                            hs_wild226DUS4 = hs_t226DTTo.hscall();
                        }
                        switch (hs_wild226DUS4.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [0];
                            return $res;
                        case 2:
                            var hs_rb526DTVf = hs_wild226DUS4.data[0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb526DTVf];
                            return $res;
                        case 3:
                            var hs_rb526DTVn = hs_wild226DUS4.data[0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb526DTVn];
                            return $res;
                        }
                    };
                    var hs_sat26DUSB = new $hs.Thunk();
                    hs_sat26DUSB.evaluateOnce = function () {
                        var hs_sat26DUSw = new $hs.Thunk();
                        hs_sat26DUSw.evaluateOnce = function () {
                            var hs_wild226DUSi = hs_t126DTT4;
                            if (hs_t126DTT4.notEvaluated) {
                                hs_wild226DUSi = hs_t126DTT4.hscall();
                            }
                            switch (hs_wild226DUSi.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [0];
                                return $res;
                            case 2:
                                var hs_rb526DTUW = hs_wild226DUSi.data[0];
                                var $res = new $hs.Data(1);
                                $res.data = [hs_rb526DTUW];
                                return $res;
                            case 3:
                                var hs_rb526DTV4 = hs_wild226DUSi.data[0];
                                var $res = new $hs.Data(1);
                                $res.data = [hs_rb526DTV4];
                                return $res;
                            }
                        };
                        var hs_sat26DUSx = new $hs.Data(1);
                        hs_sat26DUSx.data = [1];
                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DUSx, hs_sat26DUSw);
                    };
                    var hs_tpl26DUSA = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DUSB, hs_sat26DUSj);
                    var hs_tpl126DTVw = hs_tpl26DUSA.data[0];
                    var hs_tpl226DUSz = hs_p226DTSZ;
                    if (hs_p226DTSZ.notEvaluated) {
                        hs_tpl226DUSz = hs_p226DTSZ.hscall();
                    }
                    var hs_tpl326DTVx = hs_tpl226DUSz.data[0];
                    var hs_tpl426DTVy = hs_t126DTT4;
                    if (hs_t126DTT4.notEvaluated) {
                        hs_tpl426DTVy = hs_t126DTT4.hscall();
                    }
                    var hs_tpl526DUSy = hs_m126DTTP;
                    if (hs_m126DTTP.notEvaluated) {
                        hs_tpl526DUSy = hs_m126DTTP.hscall();
                    }
                    var hs_tpl626DTVz = hs_tpl526DUSy.data[0];
                    var $res = new $hs.Data(3);
                    $res.data = [hs_tpl126DTVw, hs_rb126DTUI, hs_tpl326DTVx, hs_rb326DTUK, hs_tpl426DTVy, hs_tpl626DTVz, hs_t226DTTo];
                    return $res;
                };
                return hs_lloser25tPT0.hscall(hs_k126DTTJ, hs_p126DTT0, hs_v126DTTV, hs_sat26DUSC, hs_sat26DUS5, hs_t326DTUj);
            }
        case 3:
            var hs_rb126DTXj = hs_wild26DUQV.data[1];
            var hs_rb226DTXk = hs_wild26DUQV.data[2];
            var hs_rb326DTXl = hs_wild26DUQV.data[3];
            var hs_t226DTW4 = hs_wild26DUQV.data[4];
            var hs_rb426DTXn = hs_wild26DUQV.data[5];
            var hs_t326DTWW = hs_wild26DUQV.data[6];
            var hs_tl26DTWB = new $hs.Thunk();
            hs_tl26DTWB.evaluateOnce = function () {
                var hs_sat26DUSS = new $hs.Thunk();
                hs_sat26DUSS.evaluateOnce = function () {
                    var hs_wild126DUSD = hs_t226DTW4;
                    if (hs_t226DTW4.notEvaluated) {
                        hs_wild126DUSD = hs_t226DTW4.hscall();
                    }
                    switch (hs_wild126DUSD.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [0];
                        return $res;
                    case 2:
                        var hs_rb526DTWd = hs_wild126DUSD.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb526DTWd];
                        return $res;
                    case 3:
                        var hs_rb526DTWl = hs_wild126DUSD.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb526DTWl];
                        return $res;
                    }
                };
                var hs_sat26DUTb = new $hs.Thunk();
                hs_sat26DUTb.evaluateOnce = function () {
                    var hs_sat26DUT5 = new $hs.Thunk();
                    hs_sat26DUT5.evaluateOnce = function () {
                        var hs_wild126DUSR = hs_t126DTT4;
                        if (hs_t126DTT4.notEvaluated) {
                            hs_wild126DUSR = hs_t126DTT4.hscall();
                        }
                        switch (hs_wild126DUSR.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [0];
                            return $res;
                        case 2:
                            var hs_rb526DTVT = hs_wild126DUSR.data[0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb526DTVT];
                            return $res;
                        case 3:
                            var hs_rb526DTW1 = hs_wild126DUSR.data[0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb526DTW1];
                            return $res;
                        }
                    };
                    var hs_sat26DUT6 = new $hs.Data(1);
                    hs_sat26DUT6.data = [1];
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DUT6, hs_sat26DUT5);
                };
                var hs_tpl26DUTa = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DUTb, hs_sat26DUSS);
                var hs_tpl126DTWw = hs_tpl26DUTa.data[0];
                var hs_tpl226DUT9 = hs_k126DTTJ;
                if (hs_k126DTTJ.notEvaluated) {
                    hs_tpl226DUT9 = hs_k126DTTJ.hscall();
                }
                var hs_tpl326DTWx = hs_tpl226DUT9.data[0];
                var hs_tpl426DUT8 = hs_p126DTT0;
                if (hs_p126DTT0.notEvaluated) {
                    hs_tpl426DUT8 = hs_p126DTT0.hscall();
                }
                var hs_tpl526DTWy = hs_tpl426DUT8.data[0];
                var hs_tpl626DTWz = hs_t126DTT4;
                if (hs_t126DTT4.notEvaluated) {
                    hs_tpl626DTWz = hs_t126DTT4.hscall();
                }
                var hs_tpl726DUT7 = hs_m126DTTP;
                if (hs_m126DTTP.notEvaluated) {
                    hs_tpl726DUT7 = hs_m126DTTP.hscall();
                }
                var hs_tpl826DTWA = hs_tpl726DUT7.data[0];
                var $res = new $hs.Data(2);
                $res.data = [hs_tpl126DTWw, hs_tpl326DTWx, hs_tpl526DTWy, hs_v126DTTV, hs_tpl626DTWz, hs_tpl826DTWA, hs_t226DTW4];
                return $res;
            };
            var hs_sat26DUTq = new $hs.Thunk();
            hs_sat26DUTq.evaluateOnce = function () {
                var hs_wild126DUTc = hs_t326DTWW;
                if (hs_t326DTWW.notEvaluated) {
                    hs_wild126DUTc = hs_t326DTWW.hscall();
                }
                switch (hs_wild126DUTc.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [0];
                    return $res;
                case 2:
                    var hs_rb526DTX5 = hs_wild126DUTc.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb526DTX5];
                    return $res;
                case 3:
                    var hs_rb526DTXd = hs_wild126DUTc.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb526DTXd];
                    return $res;
                }
            };
            var hs_sat26DUTG = new $hs.Thunk();
            hs_sat26DUTG.evaluateOnce = function () {
                var hs_sat26DUTD = new $hs.Thunk();
                hs_sat26DUTD.evaluateOnce = function () {
                    var hs_wild126DUTp = hs_tl26DTWB;
                    if (hs_tl26DTWB.notEvaluated) {
                        hs_wild126DUTp = hs_tl26DTWB.hscall();
                    }
                    switch (hs_wild126DUTp.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [0];
                        return $res;
                    case 2:
                        var hs_rb526DTWL = hs_wild126DUTp.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb526DTWL];
                        return $res;
                    case 3:
                        var hs_rb526DTWT = hs_wild126DUTp.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb526DTWT];
                        return $res;
                    }
                };
                var hs_sat26DUTE = new $hs.Data(1);
                hs_sat26DUTE.data = [1];
                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DUTE, hs_sat26DUTD);
            };
            var hs_tpl26DUTF = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DUTG, hs_sat26DUTq);
            var hs_tpl126DTXi = hs_tpl26DUTF.data[0];
            var hs_tpl226DTXm = hs_tl26DTWB;
            if (hs_tl26DTWB.notEvaluated) {
                hs_tpl226DTXm = hs_tl26DTWB.hscall();
            }
            var $res = new $hs.Data(3);
            $res.data = [hs_tpl126DTXi, hs_rb126DTXj, hs_rb226DTXk, hs_rb326DTXl, hs_tpl226DTXm, hs_rb426DTXn, hs_t326DTWW];
            return $res;
        }
    };
    hs_rsingleLeft25tPTk.evaluate = function (hs_k126DTXF, hs_p126DTXG, hs_v126DTXH, hs_t126DTXJ, hs_m126DTYp, hs_ds26DTXu) {
        var hs_wild26DUTH = hs_ds26DTXu;
        if (hs_ds26DTXu.notEvaluated) {
            hs_wild26DUTH = hs_ds26DTXu.hscall();
        }
        switch (hs_wild26DUTH.tag) {
        case 1:
            var hs_sat26DUTI = new $hs.Thunk();
            hs_sat26DUTI.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("malformed tree\x00");
            };
            var hs_sat26DUTJ = new $hs.Thunk();
            hs_sat26DUTJ.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("rsingleLeft\x00");
            };
            return hs_moduleError25tPTE.hscall(hs_sat26DUTJ, hs_sat26DUTI);
        case 2:
            var hs_rb126DTYt = hs_wild26DUTH.data[1];
            var hs_rb226DTYu = hs_wild26DUTH.data[2];
            var hs_rb326DTYv = hs_wild26DUTH.data[3];
            var hs_t226DTY3 = hs_wild26DUTH.data[4];
            var hs_rb426DTYz = hs_wild26DUTH.data[5];
            var hs_t326DTYB = hs_wild26DUTH.data[6];
            var hs_sat26DUTM = new $hs.Data(1);
            hs_sat26DUTM.data = [hs_rb426DTYz];
            var hs_sat26DUUi = new $hs.Thunk();
            hs_sat26DUUi.evaluateOnce = function () {
                var hs_sat26DUU0 = new $hs.Thunk();
                hs_sat26DUU0.evaluateOnce = function () {
                    var hs_wild126DUTL = hs_t226DTY3;
                    if (hs_t226DTY3.notEvaluated) {
                        hs_wild126DUTL = hs_t226DTY3.hscall();
                    }
                    switch (hs_wild126DUTL.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [0];
                        return $res;
                    case 2:
                        var hs_rb526DTYc = hs_wild126DUTL.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb526DTYc];
                        return $res;
                    case 3:
                        var hs_rb526DTYk = hs_wild126DUTL.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb526DTYk];
                        return $res;
                    }
                };
                var hs_sat26DUUh = new $hs.Thunk();
                hs_sat26DUUh.evaluateOnce = function () {
                    var hs_sat26DUUd = new $hs.Thunk();
                    hs_sat26DUUd.evaluateOnce = function () {
                        var hs_wild126DUTZ = hs_t126DTXJ;
                        if (hs_t126DTXJ.notEvaluated) {
                            hs_wild126DUTZ = hs_t126DTXJ.hscall();
                        }
                        switch (hs_wild126DUTZ.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [0];
                            return $res;
                        case 2:
                            var hs_rb526DTXS = hs_wild126DUTZ.data[0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb526DTXS];
                            return $res;
                        case 3:
                            var hs_rb526DTY0 = hs_wild126DUTZ.data[0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb526DTY0];
                            return $res;
                        }
                    };
                    var hs_sat26DUUe = new $hs.Data(1);
                    hs_sat26DUUe.data = [1];
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DUUe, hs_sat26DUUd);
                };
                var hs_tpl26DUUg = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DUUh, hs_sat26DUU0);
                var hs_tpl126DTYs = hs_tpl26DUUg.data[0];
                var hs_tpl226DTYw = hs_t126DTXJ;
                if (hs_t126DTXJ.notEvaluated) {
                    hs_tpl226DTYw = hs_t126DTXJ.hscall();
                }
                var hs_tpl326DUUf = hs_m126DTYp;
                if (hs_m126DTYp.notEvaluated) {
                    hs_tpl326DUUf = hs_m126DTYp.hscall();
                }
                var hs_tpl426DTYx = hs_tpl326DUUf.data[0];
                var $res = new $hs.Data(3);
                $res.data = [hs_tpl126DTYs, hs_rb126DTYt, hs_rb226DTYu, hs_rb326DTYv, hs_tpl226DTYw, hs_tpl426DTYx, hs_t226DTY3];
                return $res;
            };
            return hs_rloser25tPT2.hscall(hs_k126DTXF, hs_p126DTXG, hs_v126DTXH, hs_sat26DUUi, hs_sat26DUTM, hs_t326DTYB);
        case 3:
            var hs_rb126DU0j = hs_wild26DUTH.data[1];
            var hs_rb226DU0k = hs_wild26DUTH.data[2];
            var hs_rb326DU0l = hs_wild26DUTH.data[3];
            var hs_t226DTZ4 = hs_wild26DUTH.data[4];
            var hs_rb426DU0n = hs_wild26DUTH.data[5];
            var hs_t326DTZW = hs_wild26DUTH.data[6];
            var hs_tl26DTZB = new $hs.Thunk();
            hs_tl26DTZB.evaluateOnce = function () {
                var hs_sat26DUUy = new $hs.Thunk();
                hs_sat26DUUy.evaluateOnce = function () {
                    var hs_wild126DUUj = hs_t226DTZ4;
                    if (hs_t226DTZ4.notEvaluated) {
                        hs_wild126DUUj = hs_t226DTZ4.hscall();
                    }
                    switch (hs_wild126DUUj.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [0];
                        return $res;
                    case 2:
                        var hs_rb526DTZd = hs_wild126DUUj.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb526DTZd];
                        return $res;
                    case 3:
                        var hs_rb526DTZl = hs_wild126DUUj.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb526DTZl];
                        return $res;
                    }
                };
                var hs_sat26DUUR = new $hs.Thunk();
                hs_sat26DUUR.evaluateOnce = function () {
                    var hs_sat26DUUL = new $hs.Thunk();
                    hs_sat26DUUL.evaluateOnce = function () {
                        var hs_wild126DUUx = hs_t126DTXJ;
                        if (hs_t126DTXJ.notEvaluated) {
                            hs_wild126DUUx = hs_t126DTXJ.hscall();
                        }
                        switch (hs_wild126DUUx.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [0];
                            return $res;
                        case 2:
                            var hs_rb526DTYT = hs_wild126DUUx.data[0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb526DTYT];
                            return $res;
                        case 3:
                            var hs_rb526DTZ1 = hs_wild126DUUx.data[0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb526DTZ1];
                            return $res;
                        }
                    };
                    var hs_sat26DUUM = new $hs.Data(1);
                    hs_sat26DUUM.data = [1];
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DUUM, hs_sat26DUUL);
                };
                var hs_tpl26DUUQ = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DUUR, hs_sat26DUUy);
                var hs_tpl126DTZw = hs_tpl26DUUQ.data[0];
                var hs_tpl226DUUP = hs_k126DTXF;
                if (hs_k126DTXF.notEvaluated) {
                    hs_tpl226DUUP = hs_k126DTXF.hscall();
                }
                var hs_tpl326DTZx = hs_tpl226DUUP.data[0];
                var hs_tpl426DUUO = hs_p126DTXG;
                if (hs_p126DTXG.notEvaluated) {
                    hs_tpl426DUUO = hs_p126DTXG.hscall();
                }
                var hs_tpl526DTZy = hs_tpl426DUUO.data[0];
                var hs_tpl626DTZz = hs_t126DTXJ;
                if (hs_t126DTXJ.notEvaluated) {
                    hs_tpl626DTZz = hs_t126DTXJ.hscall();
                }
                var hs_tpl726DUUN = hs_m126DTYp;
                if (hs_m126DTYp.notEvaluated) {
                    hs_tpl726DUUN = hs_m126DTYp.hscall();
                }
                var hs_tpl826DTZA = hs_tpl726DUUN.data[0];
                var $res = new $hs.Data(3);
                $res.data = [hs_tpl126DTZw, hs_tpl326DTZx, hs_tpl526DTZy, hs_v126DTXH, hs_tpl626DTZz, hs_tpl826DTZA, hs_t226DTZ4];
                return $res;
            };
            var hs_sat26DUV6 = new $hs.Thunk();
            hs_sat26DUV6.evaluateOnce = function () {
                var hs_wild126DUUS = hs_t326DTZW;
                if (hs_t326DTZW.notEvaluated) {
                    hs_wild126DUUS = hs_t326DTZW.hscall();
                }
                switch (hs_wild126DUUS.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [0];
                    return $res;
                case 2:
                    var hs_rb526DU05 = hs_wild126DUUS.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb526DU05];
                    return $res;
                case 3:
                    var hs_rb526DU0d = hs_wild126DUUS.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb526DU0d];
                    return $res;
                }
            };
            var hs_sat26DUVm = new $hs.Thunk();
            hs_sat26DUVm.evaluateOnce = function () {
                var hs_sat26DUVj = new $hs.Thunk();
                hs_sat26DUVj.evaluateOnce = function () {
                    var hs_wild126DUV5 = hs_tl26DTZB;
                    if (hs_tl26DTZB.notEvaluated) {
                        hs_wild126DUV5 = hs_tl26DTZB.hscall();
                    }
                    switch (hs_wild126DUV5.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [0];
                        return $res;
                    case 2:
                        var hs_rb526DTZL = hs_wild126DUV5.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb526DTZL];
                        return $res;
                    case 3:
                        var hs_rb526DTZT = hs_wild126DUV5.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb526DTZT];
                        return $res;
                    }
                };
                var hs_sat26DUVk = new $hs.Data(1);
                hs_sat26DUVk.data = [1];
                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DUVk, hs_sat26DUVj);
            };
            var hs_tpl26DUVl = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DUVm, hs_sat26DUV6);
            var hs_tpl126DU0i = hs_tpl26DUVl.data[0];
            var hs_tpl226DU0m = hs_tl26DTZB;
            if (hs_tl26DTZB.notEvaluated) {
                hs_tpl226DU0m = hs_tl26DTZB.hscall();
            }
            var $res = new $hs.Data(3);
            $res.data = [hs_tpl126DU0i, hs_rb126DU0j, hs_rb226DU0k, hs_rb326DU0l, hs_tpl226DU0m, hs_rb426DU0n, hs_t326DTZW];
            return $res;
        }
    };
    hs_rsingleRight25tPTo.evaluate = function (hs_k126DU1m, hs_p126DU1p, hs_v126DU1z, hs_ds26DU0u, hs_m226DU1s, hs_t326DU11) {
        var hs_wild26DUVn = hs_ds26DU0u;
        if (hs_ds26DU0u.notEvaluated) {
            hs_wild26DUVn = hs_ds26DU0u.hscall();
        }
        switch (hs_wild26DUVn.tag) {
        case 1:
            var hs_sat26DUVo = new $hs.Thunk();
            hs_sat26DUVo.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("malformed tree\x00");
            };
            var hs_sat26DUVp = new $hs.Thunk();
            hs_sat26DUVp.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("rsingleRight\x00");
            };
            return hs_moduleError25tPTE.hscall(hs_sat26DUVp, hs_sat26DUVo);
        case 2:
            var hs_rb126DU2k = hs_wild26DUVn.data[1];
            var hs_rb226DU2l = hs_wild26DUVn.data[2];
            var hs_rb326DU2m = hs_wild26DUVn.data[3];
            var hs_t126DU1E = hs_wild26DUVn.data[4];
            var hs_rb426DU2n = hs_wild26DUVn.data[5];
            var hs_t226DU0H = hs_wild26DUVn.data[6];
            var hs_tr26DU1C = new $hs.Thunk();
            hs_tr26DU1C.evaluateOnce = function () {
                var hs_sat26DUVF = new $hs.Thunk();
                hs_sat26DUVF.evaluateOnce = function () {
                    var hs_wild126DUVq = hs_t326DU11;
                    if (hs_t326DU11.notEvaluated) {
                        hs_wild126DUVq = hs_t326DU11.hscall();
                    }
                    switch (hs_wild126DUVq.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [0];
                        return $res;
                    case 2:
                        var hs_rb526DU1a = hs_wild126DUVq.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb526DU1a];
                        return $res;
                    case 3:
                        var hs_rb526DU1i = hs_wild126DUVq.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb526DU1i];
                        return $res;
                    }
                };
                var hs_sat26DUVY = new $hs.Thunk();
                hs_sat26DUVY.evaluateOnce = function () {
                    var hs_sat26DUVS = new $hs.Thunk();
                    hs_sat26DUVS.evaluateOnce = function () {
                        var hs_wild126DUVE = hs_t226DU0H;
                        if (hs_t226DU0H.notEvaluated) {
                            hs_wild126DUVE = hs_t226DU0H.hscall();
                        }
                        switch (hs_wild126DUVE.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [0];
                            return $res;
                        case 2:
                            var hs_rb526DU0Q = hs_wild126DUVE.data[0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb526DU0Q];
                            return $res;
                        case 3:
                            var hs_rb526DU0Y = hs_wild126DUVE.data[0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb526DU0Y];
                            return $res;
                        }
                    };
                    var hs_sat26DUVT = new $hs.Data(1);
                    hs_sat26DUVT.data = [1];
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DUVT, hs_sat26DUVS);
                };
                var hs_tpl26DUVX = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DUVY, hs_sat26DUVF);
                var hs_tpl126DU1w = hs_tpl26DUVX.data[0];
                var hs_tpl226DUVW = hs_k126DU1m;
                if (hs_k126DU1m.notEvaluated) {
                    hs_tpl226DUVW = hs_k126DU1m.hscall();
                }
                var hs_tpl326DU1x = hs_tpl226DUVW.data[0];
                var hs_tpl426DUVV = hs_p126DU1p;
                if (hs_p126DU1p.notEvaluated) {
                    hs_tpl426DUVV = hs_p126DU1p.hscall();
                }
                var hs_tpl526DU1y = hs_tpl426DUVV.data[0];
                var hs_tpl626DUVU = hs_m226DU1s;
                if (hs_m226DU1s.notEvaluated) {
                    hs_tpl626DUVU = hs_m226DU1s.hscall();
                }
                var hs_tpl726DU1A = hs_tpl626DUVU.data[0];
                var hs_tpl826DU1B = hs_t326DU11;
                if (hs_t326DU11.notEvaluated) {
                    hs_tpl826DU1B = hs_t326DU11.hscall();
                }
                var $res = new $hs.Data(3);
                $res.data = [hs_tpl126DU1w, hs_tpl326DU1x, hs_tpl526DU1y, hs_v126DU1z, hs_t226DU0H, hs_tpl726DU1A, hs_tpl826DU1B];
                return $res;
            };
            var hs_sat26DUWd = new $hs.Thunk();
            hs_sat26DUWd.evaluateOnce = function () {
                var hs_wild126DUVZ = hs_tr26DU1C;
                if (hs_tr26DU1C.notEvaluated) {
                    hs_wild126DUVZ = hs_tr26DU1C.hscall();
                }
                switch (hs_wild126DUVZ.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [0];
                    return $res;
                case 2:
                    var hs_rb526DU26 = hs_wild126DUVZ.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb526DU26];
                    return $res;
                case 3:
                    var hs_rb526DU2e = hs_wild126DUVZ.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb526DU2e];
                    return $res;
                }
            };
            var hs_sat26DUWt = new $hs.Thunk();
            hs_sat26DUWt.evaluateOnce = function () {
                var hs_sat26DUWq = new $hs.Thunk();
                hs_sat26DUWq.evaluateOnce = function () {
                    var hs_wild126DUWc = hs_t126DU1E;
                    if (hs_t126DU1E.notEvaluated) {
                        hs_wild126DUWc = hs_t126DU1E.hscall();
                    }
                    switch (hs_wild126DUWc.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [0];
                        return $res;
                    case 2:
                        var hs_rb526DU1N = hs_wild126DUWc.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb526DU1N];
                        return $res;
                    case 3:
                        var hs_rb526DU1V = hs_wild126DUWc.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb526DU1V];
                        return $res;
                    }
                };
                var hs_sat26DUWr = new $hs.Data(1);
                hs_sat26DUWr.data = [1];
                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DUWr, hs_sat26DUWq);
            };
            var hs_tpl26DUWs = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DUWt, hs_sat26DUWd);
            var hs_tpl126DU2j = hs_tpl26DUWs.data[0];
            var hs_tpl226DU2o = hs_tr26DU1C;
            if (hs_tr26DU1C.notEvaluated) {
                hs_tpl226DU2o = hs_tr26DU1C.hscall();
            }
            var $res = new $hs.Data(2);
            $res.data = [hs_tpl126DU2j, hs_rb126DU2k, hs_rb226DU2l, hs_rb326DU2m, hs_t126DU1E, hs_rb426DU2n, hs_tpl226DU2o];
            return $res;
        case 3:
            var hs_rb126DU4c = hs_wild26DUVn.data[1];
            var hs_rb226DU2x = hs_wild26DUVn.data[2];
            var hs_rb326DU4e = hs_wild26DUVn.data[3];
            var hs_t126DU3u = hs_wild26DUVn.data[4];
            var hs_rb426DU4f = hs_wild26DUVn.data[5];
            var hs_t226DU2C = hs_wild26DUVn.data[6];
            var hs_p226DU2y = new $hs.Data(1);
            hs_p226DU2y.data = [hs_rb226DU2x];
            var hs_wild126DUWw = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_p126DU1p, hs_p226DU2y);
            switch (hs_wild126DUWw.tag) {
            case 1:
                var hs_tr26DU3s = new $hs.Thunk();
                hs_tr26DU3s.evaluateOnce = function () {
                    var hs_sat26DUWK = new $hs.Thunk();
                    hs_sat26DUWK.evaluateOnce = function () {
                        var hs_wild226DUWv = hs_t326DU11;
                        if (hs_t326DU11.notEvaluated) {
                            hs_wild226DUWv = hs_t326DU11.hscall();
                        }
                        switch (hs_wild226DUWv.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [0];
                            return $res;
                        case 2:
                            var hs_rb526DU34 = hs_wild226DUWv.data[0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb526DU34];
                            return $res;
                        case 3:
                            var hs_rb526DU3c = hs_wild226DUWv.data[0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb526DU3c];
                            return $res;
                        }
                    };
                    var hs_sat26DUX3 = new $hs.Thunk();
                    hs_sat26DUX3.evaluateOnce = function () {
                        var hs_sat26DUWX = new $hs.Thunk();
                        hs_sat26DUWX.evaluateOnce = function () {
                            var hs_wild226DUWJ = hs_t226DU2C;
                            if (hs_t226DU2C.notEvaluated) {
                                hs_wild226DUWJ = hs_t226DU2C.hscall();
                            }
                            switch (hs_wild226DUWJ.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [0];
                                return $res;
                            case 2:
                                var hs_rb526DU2L = hs_wild226DUWJ.data[0];
                                var $res = new $hs.Data(1);
                                $res.data = [hs_rb526DU2L];
                                return $res;
                            case 3:
                                var hs_rb526DU2T = hs_wild226DUWJ.data[0];
                                var $res = new $hs.Data(1);
                                $res.data = [hs_rb526DU2T];
                                return $res;
                            }
                        };
                        var hs_sat26DUWY = new $hs.Data(1);
                        hs_sat26DUWY.data = [1];
                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DUWY, hs_sat26DUWX);
                    };
                    var hs_tpl26DUX2 = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DUX3, hs_sat26DUWK);
                    var hs_tpl126DU3n = hs_tpl26DUX2.data[0];
                    var hs_tpl226DUX1 = hs_k126DU1m;
                    if (hs_k126DU1m.notEvaluated) {
                        hs_tpl226DUX1 = hs_k126DU1m.hscall();
                    }
                    var hs_tpl326DU3o = hs_tpl226DUX1.data[0];
                    var hs_tpl426DUX0 = hs_p126DU1p;
                    if (hs_p126DU1p.notEvaluated) {
                        hs_tpl426DUX0 = hs_p126DU1p.hscall();
                    }
                    var hs_tpl526DU3p = hs_tpl426DUX0.data[0];
                    var hs_tpl626DUWZ = hs_m226DU1s;
                    if (hs_m226DU1s.notEvaluated) {
                        hs_tpl626DUWZ = hs_m226DU1s.hscall();
                    }
                    var hs_tpl726DU3q = hs_tpl626DUWZ.data[0];
                    var hs_tpl826DU3r = hs_t326DU11;
                    if (hs_t326DU11.notEvaluated) {
                        hs_tpl826DU3r = hs_t326DU11.hscall();
                    }
                    var $res = new $hs.Data(3);
                    $res.data = [hs_tpl126DU3n, hs_tpl326DU3o, hs_tpl526DU3p, hs_v126DU1z, hs_t226DU2C, hs_tpl726DU3q, hs_tpl826DU3r];
                    return $res;
                };
                var hs_sat26DUXi = new $hs.Thunk();
                hs_sat26DUXi.evaluateOnce = function () {
                    var hs_wild226DUX4 = hs_tr26DU3s;
                    if (hs_tr26DU3s.notEvaluated) {
                        hs_wild226DUX4 = hs_tr26DU3s.hscall();
                    }
                    switch (hs_wild226DUX4.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [0];
                        return $res;
                    case 2:
                        var hs_rb526DU3W = hs_wild226DUX4.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb526DU3W];
                        return $res;
                    case 3:
                        var hs_rb526DU44 = hs_wild226DUX4.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb526DU44];
                        return $res;
                    }
                };
                var hs_sat26DUXz = new $hs.Thunk();
                hs_sat26DUXz.evaluateOnce = function () {
                    var hs_sat26DUXv = new $hs.Thunk();
                    hs_sat26DUXv.evaluateOnce = function () {
                        var hs_wild226DUXh = hs_t126DU3u;
                        if (hs_t126DU3u.notEvaluated) {
                            hs_wild226DUXh = hs_t126DU3u.hscall();
                        }
                        switch (hs_wild226DUXh.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [0];
                            return $res;
                        case 2:
                            var hs_rb526DU3D = hs_wild226DUXh.data[0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb526DU3D];
                            return $res;
                        case 3:
                            var hs_rb526DU3L = hs_wild226DUXh.data[0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb526DU3L];
                            return $res;
                        }
                    };
                    var hs_sat26DUXw = new $hs.Data(1);
                    hs_sat26DUXw.data = [1];
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DUXw, hs_sat26DUXv);
                };
                var hs_tpl26DUXy = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DUXz, hs_sat26DUXi);
                var hs_tpl126DU4b = hs_tpl26DUXy.data[0];
                var hs_tpl226DUXx = hs_p226DU2y;
                if (hs_p226DU2y.notEvaluated) {
                    hs_tpl226DUXx = hs_p226DU2y.hscall();
                }
                var hs_tpl326DU4d = hs_tpl226DUXx.data[0];
                var hs_tpl426DU4g = hs_tr26DU3s;
                if (hs_tr26DU3s.notEvaluated) {
                    hs_tpl426DU4g = hs_tr26DU3s.hscall();
                }
                var $res = new $hs.Data(3);
                $res.data = [hs_tpl126DU4b, hs_rb126DU4c, hs_tpl326DU4d, hs_rb326DU4e, hs_t126DU3u, hs_rb426DU4f, hs_tpl426DU4g];
                return $res;
            case 2:
                var hs_sat26DUY7 = new $hs.Thunk();
                hs_sat26DUY7.evaluateOnce = function () {
                    var hs_sat26DUXO = new $hs.Thunk();
                    hs_sat26DUXO.evaluateOnce = function () {
                        var hs_wild226DUXA = hs_t326DU11;
                        if (hs_t326DU11.notEvaluated) {
                            hs_wild226DUXA = hs_t326DU11.hscall();
                        }
                        switch (hs_wild226DUXA.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [0];
                            return $res;
                        case 2:
                            var hs_rb526DU4K = hs_wild226DUXA.data[0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb526DU4K];
                            return $res;
                        case 3:
                            var hs_rb526DU4S = hs_wild226DUXA.data[0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb526DU4S];
                            return $res;
                        }
                    };
                    var hs_sat26DUY6 = new $hs.Thunk();
                    hs_sat26DUY6.evaluateOnce = function () {
                        var hs_sat26DUY1 = new $hs.Thunk();
                        hs_sat26DUY1.evaluateOnce = function () {
                            var hs_wild226DUXN = hs_t226DU2C;
                            if (hs_t226DU2C.notEvaluated) {
                                hs_wild226DUXN = hs_t226DU2C.hscall();
                            }
                            switch (hs_wild226DUXN.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [0];
                                return $res;
                            case 2:
                                var hs_rb526DU4r = hs_wild226DUXN.data[0];
                                var $res = new $hs.Data(1);
                                $res.data = [hs_rb526DU4r];
                                return $res;
                            case 3:
                                var hs_rb526DU4z = hs_wild226DUXN.data[0];
                                var $res = new $hs.Data(1);
                                $res.data = [hs_rb526DU4z];
                                return $res;
                            }
                        };
                        var hs_sat26DUY2 = new $hs.Data(1);
                        hs_sat26DUY2.data = [1];
                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DUY2, hs_sat26DUY1);
                    };
                    var hs_tpl26DUY5 = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DUY6, hs_sat26DUXO);
                    var hs_tpl126DU51 = hs_tpl26DUY5.data[0];
                    var hs_tpl226DUY4 = hs_p226DU2y;
                    if (hs_p226DU2y.notEvaluated) {
                        hs_tpl226DUY4 = hs_p226DU2y.hscall();
                    }
                    var hs_tpl326DU52 = hs_tpl226DUY4.data[0];
                    var hs_tpl426DUY3 = hs_m226DU1s;
                    if (hs_m226DU1s.notEvaluated) {
                        hs_tpl426DUY3 = hs_m226DU1s.hscall();
                    }
                    var hs_tpl526DU53 = hs_tpl426DUY3.data[0];
                    var hs_tpl626DU54 = hs_t326DU11;
                    if (hs_t326DU11.notEvaluated) {
                        hs_tpl626DU54 = hs_t326DU11.hscall();
                    }
                    var $res = new $hs.Data(2);
                    $res.data = [hs_tpl126DU51, hs_rb126DU4c, hs_tpl326DU52, hs_rb326DU4e, hs_t226DU2C, hs_tpl526DU53, hs_tpl626DU54];
                    return $res;
                };
                var hs_sat26DUY8 = new $hs.Data(1);
                hs_sat26DUY8.data = [hs_rb426DU4f];
                return hs_rloser25tPT2.hscall(hs_k126DU1m, hs_p126DU1p, hs_v126DU1z, hs_t126DU3u, hs_sat26DUY8, hs_sat26DUY7);
            }
        }
    };
    hs_lbalance25tPT6.evaluate = function (hs_k26DU75, hs_p26DU76, hs_v26DU77, hs_l26DU5c, hs_m26DU78, hs_r26DU5v) {
        var hs_sat26DUYa = new $hs.Data(1);
        hs_sat26DUYa.data = [2];
        var hs_sat26DUYE = new $hs.Thunk();
        hs_sat26DUYE.evaluateOnce = function () {
            var hs_sat26DUYo = new $hs.Thunk();
            hs_sat26DUYo.evaluateOnce = function () {
                var hs_wild26DUY9 = hs_r26DU5v;
                if (hs_r26DU5v.notEvaluated) {
                    hs_wild26DUY9 = hs_r26DU5v.hscall();
                }
                switch (hs_wild26DUY9.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [0];
                    return $res;
                case 2:
                    var hs_rb26DU5E = hs_wild26DUY9.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb26DU5E];
                    return $res;
                case 3:
                    var hs_rb26DU5M = hs_wild26DUY9.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb26DU5M];
                    return $res;
                }
            };
            var hs_sat26DUYB = new $hs.Thunk();
            hs_sat26DUYB.evaluateOnce = function () {
                var hs_wild26DUYn = hs_l26DU5c;
                if (hs_l26DU5c.notEvaluated) {
                    hs_wild26DUYn = hs_l26DU5c.hscall();
                }
                switch (hs_wild26DUYn.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [0];
                    return $res;
                case 2:
                    var hs_rb26DU5l = hs_wild26DUYn.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb26DU5l];
                    return $res;
                case 3:
                    var hs_rb26DU5t = hs_wild26DUYn.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb26DU5t];
                    return $res;
                }
            };
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DUYB, hs_sat26DUYo);
        };
        var hs_wild26DUYD = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_sat26DUYE, hs_sat26DUYa);
        switch (hs_wild26DUYD.tag) {
        case 1:
            var hs_sat26DUYT = new $hs.Thunk();
            hs_sat26DUYT.evaluateOnce = function () {
                var hs_sat26DUYR = new $hs.Thunk();
                hs_sat26DUYR.evaluateOnce = function () {
                    var hs_wild126DUYC = hs_l26DU5c;
                    if (hs_l26DU5c.notEvaluated) {
                        hs_wild126DUYC = hs_l26DU5c.hscall();
                    }
                    switch (hs_wild126DUYC.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [0];
                        return $res;
                    case 2:
                        var hs_rb26DU6h = hs_wild126DUYC.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb26DU6h];
                        return $res;
                    case 3:
                        var hs_rb26DU6p = hs_wild126DUYC.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb26DU6p];
                        return $res;
                    }
                };
                return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_omega25tPT4, hs_sat26DUYR);
            };
            var hs_sat26DUZ8 = new $hs.Thunk();
            hs_sat26DUZ8.evaluateOnce = function () {
                var hs_wild126DUYS = hs_r26DU5v;
                if (hs_r26DU5v.notEvaluated) {
                    hs_wild126DUYS = hs_r26DU5v.hscall();
                }
                switch (hs_wild126DUYS.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [0];
                    return $res;
                case 2:
                    var hs_rb26DU5Z = hs_wild126DUYS.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb26DU5Z];
                    return $res;
                case 3:
                    var hs_rb26DU67 = hs_wild126DUYS.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb26DU67];
                    return $res;
                }
            };
            var hs_wild126DUZ7 = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_sat26DUZ8, hs_sat26DUYT);
            switch (hs_wild126DUZ7.tag) {
            case 1:
                var hs_sat26DUZn = new $hs.Thunk();
                hs_sat26DUZn.evaluateOnce = function () {
                    var hs_sat26DUZl = new $hs.Thunk();
                    hs_sat26DUZl.evaluateOnce = function () {
                        var hs_wild226DUZ6 = hs_r26DU5v;
                        if (hs_r26DU5v.notEvaluated) {
                            hs_wild226DUZ6 = hs_r26DU5v.hscall();
                        }
                        switch (hs_wild226DUZ6.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [0];
                            return $res;
                        case 2:
                            var hs_rb26DU6T = hs_wild226DUZ6.data[0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb26DU6T];
                            return $res;
                        case 3:
                            var hs_rb26DU71 = hs_wild226DUZ6.data[0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb26DU71];
                            return $res;
                        }
                    };
                    return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_omega25tPT4, hs_sat26DUZl);
                };
                var hs_sat26DUZB = new $hs.Thunk();
                hs_sat26DUZB.evaluateOnce = function () {
                    var hs_wild226DUZm = hs_l26DU5c;
                    if (hs_l26DU5c.notEvaluated) {
                        hs_wild226DUZm = hs_l26DU5c.hscall();
                    }
                    switch (hs_wild226DUZm.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [0];
                        return $res;
                    case 2:
                        var hs_rb26DU6B = hs_wild226DUZm.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb26DU6B];
                        return $res;
                    case 3:
                        var hs_rb26DU6J = hs_wild226DUZm.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb26DU6J];
                        return $res;
                    }
                };
                var hs_wild226DUZA = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_sat26DUZB, hs_sat26DUZn);
                switch (hs_wild226DUZA.tag) {
                case 1:
                    return hs_lloser25tPT0.hscall(hs_k26DU75, hs_p26DU76, hs_v26DU77, hs_l26DU5c, hs_m26DU78, hs_r26DU5v);
                case 2:
                    var hs_sat26DUZQ = new $hs.Thunk();
                    hs_sat26DUZQ.evaluateOnce = function () {
                        var hs_wild326DUZC = hs_right25tPSW.hscall(hs_l26DU5c);
                        switch (hs_wild326DUZC.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [0];
                            return $res;
                        case 2:
                            var hs_rb26DU7z = hs_wild326DUZC.data[0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb26DU7z];
                            return $res;
                        case 3:
                            var hs_rb26DU7H = hs_wild326DUZC.data[0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb26DU7H];
                            return $res;
                        }
                    };
                    var hs_sat26DV05 = new $hs.Thunk();
                    hs_sat26DV05.evaluateOnce = function () {
                        var hs_wild326DUZP = hs_left25tPSU.hscall(hs_l26DU5c);
                        switch (hs_wild326DUZP.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [0];
                            return $res;
                        case 2:
                            var hs_rb26DU7h = hs_wild326DUZP.data[0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb26DU7h];
                            return $res;
                        case 3:
                            var hs_rb26DU7p = hs_wild326DUZP.data[0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb26DU7p];
                            return $res;
                        }
                    };
                    var hs_wild326DV04 = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_sat26DV05, hs_sat26DUZQ);
                    switch (hs_wild326DV04.tag) {
                    case 1:
                        var hs_wild426DV03 = hs_l26DU5c;
                        if (hs_l26DU5c.notEvaluated) {
                            hs_wild426DV03 = hs_l26DU5c.hscall();
                        }
                        switch (hs_wild426DV03.tag) {
                        case 1:
                            var hs_sat26DV06 = new $hs.Thunk();
                            hs_sat26DV06.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("malformed tree\x00");
                            };
                            var hs_sat26DV07 = new $hs.Thunk();
                            hs_sat26DV07.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("ldoubleRight\x00");
                            };
                            return hs_moduleError25tPTE.hscall(hs_sat26DV07, hs_sat26DV06);
                        case 2:
                            var hs_rb126DU7U = hs_wild426DV03.data[1];
                            var hs_rb226DU7W = hs_wild426DV03.data[2];
                            var hs_rb326DU7Y = hs_wild426DV03.data[3];
                            var hs_t126DU7Z = hs_wild426DV03.data[4];
                            var hs_rb426DU80 = hs_wild426DV03.data[5];
                            var hs_t226DU82 = hs_wild426DV03.data[6];
                            var hs_sat26DV0c = new $hs.Thunk();
                            hs_sat26DV0c.evaluateOnce = function () {
                                var hs_sat26DV09 = new $hs.Data(1);
                                hs_sat26DV09.data = [hs_rb426DU80];
                                var hs_sat26DV0a = new $hs.Data(1);
                                hs_sat26DV0a.data = [hs_rb226DU7W];
                                var hs_sat26DV0b = new $hs.Data(1);
                                hs_sat26DV0b.data = [hs_rb126DU7U];
                                return hs_lsingleLeft25tPTi.hscall(hs_sat26DV0b, hs_sat26DV0a, hs_rb326DU7Y, hs_t126DU7Z, hs_sat26DV09, hs_t226DU82);
                            };
                            return hs_lsingleRight25tPTm.hscall(hs_k26DU75, hs_p26DU76, hs_v26DU77, hs_sat26DV0c, hs_m26DU78, hs_r26DU5v);
                        case 3:
                            var hs_rb126DU8b = hs_wild426DV03.data[1];
                            var hs_rb226DU8d = hs_wild426DV03.data[2];
                            var hs_rb326DU8f = hs_wild426DV03.data[3];
                            var hs_t126DU8g = hs_wild426DV03.data[4];
                            var hs_rb426DU8h = hs_wild426DV03.data[5];
                            var hs_t226DU8j = hs_wild426DV03.data[6];
                            var hs_sat26DV0h = new $hs.Thunk();
                            hs_sat26DV0h.evaluateOnce = function () {
                                var hs_sat26DV0e = new $hs.Data(1);
                                hs_sat26DV0e.data = [hs_rb426DU8h];
                                var hs_sat26DV0f = new $hs.Data(1);
                                hs_sat26DV0f.data = [hs_rb226DU8d];
                                var hs_sat26DV0g = new $hs.Data(1);
                                hs_sat26DV0g.data = [hs_rb126DU8b];
                                return hs_rsingleLeft25tPTk.hscall(hs_sat26DV0g, hs_sat26DV0f, hs_rb326DU8f, hs_t126DU8g, hs_sat26DV0e, hs_t226DU8j);
                            };
                            return hs_lsingleRight25tPTm.hscall(hs_k26DU75, hs_p26DU76, hs_v26DU77, hs_sat26DV0h, hs_m26DU78, hs_r26DU5v);
                        }
                    case 2:
                        return hs_lsingleRight25tPTm.hscall(hs_k26DU75, hs_p26DU76, hs_v26DU77, hs_l26DU5c, hs_m26DU78, hs_r26DU5v);
                    }
                }
            case 2:
                var hs_sat26DV0w = new $hs.Thunk();
                hs_sat26DV0w.evaluateOnce = function () {
                    var hs_wild226DV0i = hs_right25tPSW.hscall(hs_r26DU5v);
                    switch (hs_wild226DV0i.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [0];
                        return $res;
                    case 2:
                        var hs_rb26DU8L = hs_wild226DV0i.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb26DU8L];
                        return $res;
                    case 3:
                        var hs_rb26DU8T = hs_wild226DV0i.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb26DU8T];
                        return $res;
                    }
                };
                var hs_sat26DV0L = new $hs.Thunk();
                hs_sat26DV0L.evaluateOnce = function () {
                    var hs_wild226DV0v = hs_left25tPSU.hscall(hs_r26DU5v);
                    switch (hs_wild226DV0v.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [0];
                        return $res;
                    case 2:
                        var hs_rb26DU8t = hs_wild226DV0v.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb26DU8t];
                        return $res;
                    case 3:
                        var hs_rb26DU8B = hs_wild226DV0v.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb26DU8B];
                        return $res;
                    }
                };
                var hs_wild226DV0K = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_sat26DV0L, hs_sat26DV0w);
                switch (hs_wild226DV0K.tag) {
                case 1:
                    var hs_wild326DV0J = hs_r26DU5v;
                    if (hs_r26DU5v.notEvaluated) {
                        hs_wild326DV0J = hs_r26DU5v.hscall();
                    }
                    switch (hs_wild326DV0J.tag) {
                    case 1:
                        var hs_sat26DV0M = new $hs.Thunk();
                        hs_sat26DV0M.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("malformed tree\x00");
                        };
                        var hs_sat26DV0N = new $hs.Thunk();
                        hs_sat26DV0N.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("ldoubleLeft\x00");
                        };
                        return hs_moduleError25tPTE.hscall(hs_sat26DV0N, hs_sat26DV0M);
                    case 2:
                        var hs_rb126DU96 = hs_wild326DV0J.data[1];
                        var hs_rb226DU98 = hs_wild326DV0J.data[2];
                        var hs_rb326DU9a = hs_wild326DV0J.data[3];
                        var hs_t226DU9b = hs_wild326DV0J.data[4];
                        var hs_rb426DU9c = hs_wild326DV0J.data[5];
                        var hs_t326DU9e = hs_wild326DV0J.data[6];
                        var hs_sat26DV0S = new $hs.Thunk();
                        hs_sat26DV0S.evaluateOnce = function () {
                            var hs_sat26DV0P = new $hs.Data(1);
                            hs_sat26DV0P.data = [hs_rb426DU9c];
                            var hs_sat26DV0Q = new $hs.Data(1);
                            hs_sat26DV0Q.data = [hs_rb226DU98];
                            var hs_sat26DV0R = new $hs.Data(1);
                            hs_sat26DV0R.data = [hs_rb126DU96];
                            return hs_lsingleRight25tPTm.hscall(hs_sat26DV0R, hs_sat26DV0Q, hs_rb326DU9a, hs_t226DU9b, hs_sat26DV0P, hs_t326DU9e);
                        };
                        return hs_lsingleLeft25tPTi.hscall(hs_k26DU75, hs_p26DU76, hs_v26DU77, hs_l26DU5c, hs_m26DU78, hs_sat26DV0S);
                    case 3:
                        var hs_rb126DU9n = hs_wild326DV0J.data[1];
                        var hs_rb226DU9p = hs_wild326DV0J.data[2];
                        var hs_rb326DU9r = hs_wild326DV0J.data[3];
                        var hs_t226DU9s = hs_wild326DV0J.data[4];
                        var hs_rb426DU9t = hs_wild326DV0J.data[5];
                        var hs_t326DU9v = hs_wild326DV0J.data[6];
                        var hs_sat26DV0X = new $hs.Thunk();
                        hs_sat26DV0X.evaluateOnce = function () {
                            var hs_sat26DV0U = new $hs.Data(1);
                            hs_sat26DV0U.data = [hs_rb426DU9t];
                            var hs_sat26DV0V = new $hs.Data(1);
                            hs_sat26DV0V.data = [hs_rb226DU9p];
                            var hs_sat26DV0W = new $hs.Data(1);
                            hs_sat26DV0W.data = [hs_rb126DU9n];
                            return hs_rsingleRight25tPTo.hscall(hs_sat26DV0W, hs_sat26DV0V, hs_rb326DU9r, hs_t226DU9s, hs_sat26DV0U, hs_t326DU9v);
                        };
                        return hs_lsingleLeft25tPTi.hscall(hs_k26DU75, hs_p26DU76, hs_v26DU77, hs_l26DU5c, hs_m26DU78, hs_sat26DV0X);
                    }
                case 2:
                    return hs_lsingleLeft25tPTi.hscall(hs_k26DU75, hs_p26DU76, hs_v26DU77, hs_l26DU5c, hs_m26DU78, hs_r26DU5v);
                }
            }
        case 2:
            return hs_lloser25tPT0.hscall(hs_k26DU75, hs_p26DU76, hs_v26DU77, hs_l26DU5c, hs_m26DU78, hs_r26DU5v);
        }
    };
    hs_rbalance25tPT8.evaluate = function (hs_k26DUbw, hs_p26DUbx, hs_v26DUby, hs_l26DU9D, hs_m26DUbz, hs_r26DU9W) {
        var hs_sat26DV0Z = new $hs.Data(1);
        hs_sat26DV0Z.data = [2];
        var hs_sat26DV1t = new $hs.Thunk();
        hs_sat26DV1t.evaluateOnce = function () {
            var hs_sat26DV1d = new $hs.Thunk();
            hs_sat26DV1d.evaluateOnce = function () {
                var hs_wild26DV0Y = hs_r26DU9W;
                if (hs_r26DU9W.notEvaluated) {
                    hs_wild26DV0Y = hs_r26DU9W.hscall();
                }
                switch (hs_wild26DV0Y.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [0];
                    return $res;
                case 2:
                    var hs_rb26DUa5 = hs_wild26DV0Y.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb26DUa5];
                    return $res;
                case 3:
                    var hs_rb26DUad = hs_wild26DV0Y.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb26DUad];
                    return $res;
                }
            };
            var hs_sat26DV1q = new $hs.Thunk();
            hs_sat26DV1q.evaluateOnce = function () {
                var hs_wild26DV1c = hs_l26DU9D;
                if (hs_l26DU9D.notEvaluated) {
                    hs_wild26DV1c = hs_l26DU9D.hscall();
                }
                switch (hs_wild26DV1c.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [0];
                    return $res;
                case 2:
                    var hs_rb26DU9M = hs_wild26DV1c.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb26DU9M];
                    return $res;
                case 3:
                    var hs_rb26DU9U = hs_wild26DV1c.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb26DU9U];
                    return $res;
                }
            };
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DV1q, hs_sat26DV1d);
        };
        var hs_wild26DV1s = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_sat26DV1t, hs_sat26DV0Z);
        switch (hs_wild26DV1s.tag) {
        case 1:
            var hs_sat26DV1I = new $hs.Thunk();
            hs_sat26DV1I.evaluateOnce = function () {
                var hs_sat26DV1G = new $hs.Thunk();
                hs_sat26DV1G.evaluateOnce = function () {
                    var hs_wild126DV1r = hs_l26DU9D;
                    if (hs_l26DU9D.notEvaluated) {
                        hs_wild126DV1r = hs_l26DU9D.hscall();
                    }
                    switch (hs_wild126DV1r.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [0];
                        return $res;
                    case 2:
                        var hs_rb26DUaI = hs_wild126DV1r.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb26DUaI];
                        return $res;
                    case 3:
                        var hs_rb26DUaQ = hs_wild126DV1r.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb26DUaQ];
                        return $res;
                    }
                };
                return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_omega25tPT4, hs_sat26DV1G);
            };
            var hs_sat26DV1X = new $hs.Thunk();
            hs_sat26DV1X.evaluateOnce = function () {
                var hs_wild126DV1H = hs_r26DU9W;
                if (hs_r26DU9W.notEvaluated) {
                    hs_wild126DV1H = hs_r26DU9W.hscall();
                }
                switch (hs_wild126DV1H.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [0];
                    return $res;
                case 2:
                    var hs_rb26DUaq = hs_wild126DV1H.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb26DUaq];
                    return $res;
                case 3:
                    var hs_rb26DUay = hs_wild126DV1H.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb26DUay];
                    return $res;
                }
            };
            var hs_wild126DV1W = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_sat26DV1X, hs_sat26DV1I);
            switch (hs_wild126DV1W.tag) {
            case 1:
                var hs_sat26DV2c = new $hs.Thunk();
                hs_sat26DV2c.evaluateOnce = function () {
                    var hs_sat26DV2a = new $hs.Thunk();
                    hs_sat26DV2a.evaluateOnce = function () {
                        var hs_wild226DV1V = hs_r26DU9W;
                        if (hs_r26DU9W.notEvaluated) {
                            hs_wild226DV1V = hs_r26DU9W.hscall();
                        }
                        switch (hs_wild226DV1V.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [0];
                            return $res;
                        case 2:
                            var hs_rb26DUbk = hs_wild226DV1V.data[0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb26DUbk];
                            return $res;
                        case 3:
                            var hs_rb26DUbs = hs_wild226DV1V.data[0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb26DUbs];
                            return $res;
                        }
                    };
                    return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_omega25tPT4, hs_sat26DV2a);
                };
                var hs_sat26DV2q = new $hs.Thunk();
                hs_sat26DV2q.evaluateOnce = function () {
                    var hs_wild226DV2b = hs_l26DU9D;
                    if (hs_l26DU9D.notEvaluated) {
                        hs_wild226DV2b = hs_l26DU9D.hscall();
                    }
                    switch (hs_wild226DV2b.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [0];
                        return $res;
                    case 2:
                        var hs_rb26DUb2 = hs_wild226DV2b.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb26DUb2];
                        return $res;
                    case 3:
                        var hs_rb26DUba = hs_wild226DV2b.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb26DUba];
                        return $res;
                    }
                };
                var hs_wild226DV2p = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_sat26DV2q, hs_sat26DV2c);
                switch (hs_wild226DV2p.tag) {
                case 1:
                    return hs_rloser25tPT2.hscall(hs_k26DUbw, hs_p26DUbx, hs_v26DUby, hs_l26DU9D, hs_m26DUbz, hs_r26DU9W);
                case 2:
                    var hs_sat26DV2F = new $hs.Thunk();
                    hs_sat26DV2F.evaluateOnce = function () {
                        var hs_wild326DV2r = hs_right25tPSW.hscall(hs_l26DU9D);
                        switch (hs_wild326DV2r.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [0];
                            return $res;
                        case 2:
                            var hs_rb26DUc0 = hs_wild326DV2r.data[0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb26DUc0];
                            return $res;
                        case 3:
                            var hs_rb26DUc8 = hs_wild326DV2r.data[0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb26DUc8];
                            return $res;
                        }
                    };
                    var hs_sat26DV2U = new $hs.Thunk();
                    hs_sat26DV2U.evaluateOnce = function () {
                        var hs_wild326DV2E = hs_left25tPSU.hscall(hs_l26DU9D);
                        switch (hs_wild326DV2E.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [0];
                            return $res;
                        case 2:
                            var hs_rb26DUbI = hs_wild326DV2E.data[0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb26DUbI];
                            return $res;
                        case 3:
                            var hs_rb26DUbQ = hs_wild326DV2E.data[0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb26DUbQ];
                            return $res;
                        }
                    };
                    var hs_wild326DV2T = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_sat26DV2U, hs_sat26DV2F);
                    switch (hs_wild326DV2T.tag) {
                    case 1:
                        var hs_wild426DV2S = hs_l26DU9D;
                        if (hs_l26DU9D.notEvaluated) {
                            hs_wild426DV2S = hs_l26DU9D.hscall();
                        }
                        switch (hs_wild426DV2S.tag) {
                        case 1:
                            var hs_sat26DV2V = new $hs.Thunk();
                            hs_sat26DV2V.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("malformed tree\x00");
                            };
                            var hs_sat26DV2W = new $hs.Thunk();
                            hs_sat26DV2W.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("rdoubleRight\x00");
                            };
                            return hs_moduleError25tPTE.hscall(hs_sat26DV2W, hs_sat26DV2V);
                        case 2:
                            var hs_rb126DUcl = hs_wild426DV2S.data[1];
                            var hs_rb226DUcn = hs_wild426DV2S.data[2];
                            var hs_rb326DUcp = hs_wild426DV2S.data[3];
                            var hs_t126DUcq = hs_wild426DV2S.data[4];
                            var hs_rb426DUcr = hs_wild426DV2S.data[5];
                            var hs_t226DUct = hs_wild426DV2S.data[6];
                            var hs_sat26DV31 = new $hs.Thunk();
                            hs_sat26DV31.evaluateOnce = function () {
                                var hs_sat26DV2Y = new $hs.Data(1);
                                hs_sat26DV2Y.data = [hs_rb426DUcr];
                                var hs_sat26DV2Z = new $hs.Data(1);
                                hs_sat26DV2Z.data = [hs_rb226DUcn];
                                var hs_sat26DV30 = new $hs.Data(1);
                                hs_sat26DV30.data = [hs_rb126DUcl];
                                return hs_lsingleLeft25tPTi.hscall(hs_sat26DV30, hs_sat26DV2Z, hs_rb326DUcp, hs_t126DUcq, hs_sat26DV2Y, hs_t226DUct);
                            };
                            return hs_rsingleRight25tPTo.hscall(hs_k26DUbw, hs_p26DUbx, hs_v26DUby, hs_sat26DV31, hs_m26DUbz, hs_r26DU9W);
                        case 3:
                            var hs_rb126DUcC = hs_wild426DV2S.data[1];
                            var hs_rb226DUcE = hs_wild426DV2S.data[2];
                            var hs_rb326DUcG = hs_wild426DV2S.data[3];
                            var hs_t126DUcH = hs_wild426DV2S.data[4];
                            var hs_rb426DUcI = hs_wild426DV2S.data[5];
                            var hs_t226DUcK = hs_wild426DV2S.data[6];
                            var hs_sat26DV36 = new $hs.Thunk();
                            hs_sat26DV36.evaluateOnce = function () {
                                var hs_sat26DV33 = new $hs.Data(1);
                                hs_sat26DV33.data = [hs_rb426DUcI];
                                var hs_sat26DV34 = new $hs.Data(1);
                                hs_sat26DV34.data = [hs_rb226DUcE];
                                var hs_sat26DV35 = new $hs.Data(1);
                                hs_sat26DV35.data = [hs_rb126DUcC];
                                return hs_rsingleLeft25tPTk.hscall(hs_sat26DV35, hs_sat26DV34, hs_rb326DUcG, hs_t126DUcH, hs_sat26DV33, hs_t226DUcK);
                            };
                            return hs_rsingleRight25tPTo.hscall(hs_k26DUbw, hs_p26DUbx, hs_v26DUby, hs_sat26DV36, hs_m26DUbz, hs_r26DU9W);
                        }
                    case 2:
                        return hs_rsingleRight25tPTo.hscall(hs_k26DUbw, hs_p26DUbx, hs_v26DUby, hs_l26DU9D, hs_m26DUbz, hs_r26DU9W);
                    }
                }
            case 2:
                var hs_sat26DV3l = new $hs.Thunk();
                hs_sat26DV3l.evaluateOnce = function () {
                    var hs_wild226DV37 = hs_right25tPSW.hscall(hs_r26DU9W);
                    switch (hs_wild226DV37.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [0];
                        return $res;
                    case 2:
                        var hs_rb26DUdc = hs_wild226DV37.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb26DUdc];
                        return $res;
                    case 3:
                        var hs_rb26DUdk = hs_wild226DV37.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb26DUdk];
                        return $res;
                    }
                };
                var hs_sat26DV3A = new $hs.Thunk();
                hs_sat26DV3A.evaluateOnce = function () {
                    var hs_wild226DV3k = hs_left25tPSU.hscall(hs_r26DU9W);
                    switch (hs_wild226DV3k.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [0];
                        return $res;
                    case 2:
                        var hs_rb26DUcU = hs_wild226DV3k.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb26DUcU];
                        return $res;
                    case 3:
                        var hs_rb26DUd2 = hs_wild226DV3k.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb26DUd2];
                        return $res;
                    }
                };
                var hs_wild226DV3z = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_sat26DV3A, hs_sat26DV3l);
                switch (hs_wild226DV3z.tag) {
                case 1:
                    var hs_wild326DV3y = hs_r26DU9W;
                    if (hs_r26DU9W.notEvaluated) {
                        hs_wild326DV3y = hs_r26DU9W.hscall();
                    }
                    switch (hs_wild326DV3y.tag) {
                    case 1:
                        var hs_sat26DV3B = new $hs.Thunk();
                        hs_sat26DV3B.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("malformed tree\x00");
                        };
                        var hs_sat26DV3C = new $hs.Thunk();
                        hs_sat26DV3C.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("rdoubleLeft\x00");
                        };
                        return hs_moduleError25tPTE.hscall(hs_sat26DV3C, hs_sat26DV3B);
                    case 2:
                        var hs_rb126DUdx = hs_wild326DV3y.data[1];
                        var hs_rb226DUdz = hs_wild326DV3y.data[2];
                        var hs_rb326DUdB = hs_wild326DV3y.data[3];
                        var hs_t226DUdC = hs_wild326DV3y.data[4];
                        var hs_rb426DUdD = hs_wild326DV3y.data[5];
                        var hs_t326DUdF = hs_wild326DV3y.data[6];
                        var hs_sat26DV3H = new $hs.Thunk();
                        hs_sat26DV3H.evaluateOnce = function () {
                            var hs_sat26DV3E = new $hs.Data(1);
                            hs_sat26DV3E.data = [hs_rb426DUdD];
                            var hs_sat26DV3F = new $hs.Data(1);
                            hs_sat26DV3F.data = [hs_rb226DUdz];
                            var hs_sat26DV3G = new $hs.Data(1);
                            hs_sat26DV3G.data = [hs_rb126DUdx];
                            return hs_lsingleRight25tPTm.hscall(hs_sat26DV3G, hs_sat26DV3F, hs_rb326DUdB, hs_t226DUdC, hs_sat26DV3E, hs_t326DUdF);
                        };
                        return hs_rsingleLeft25tPTk.hscall(hs_k26DUbw, hs_p26DUbx, hs_v26DUby, hs_l26DU9D, hs_m26DUbz, hs_sat26DV3H);
                    case 3:
                        var hs_rb126DUdO = hs_wild326DV3y.data[1];
                        var hs_rb226DUdQ = hs_wild326DV3y.data[2];
                        var hs_rb326DUdS = hs_wild326DV3y.data[3];
                        var hs_t226DUdT = hs_wild326DV3y.data[4];
                        var hs_rb426DUdU = hs_wild326DV3y.data[5];
                        var hs_t326DUdW = hs_wild326DV3y.data[6];
                        var hs_sat26DV3M = new $hs.Thunk();
                        hs_sat26DV3M.evaluateOnce = function () {
                            var hs_sat26DV3J = new $hs.Data(1);
                            hs_sat26DV3J.data = [hs_rb426DUdU];
                            var hs_sat26DV3K = new $hs.Data(1);
                            hs_sat26DV3K.data = [hs_rb226DUdQ];
                            var hs_sat26DV3L = new $hs.Data(1);
                            hs_sat26DV3L.data = [hs_rb126DUdO];
                            return hs_rsingleRight25tPTo.hscall(hs_sat26DV3L, hs_sat26DV3K, hs_rb326DUdS, hs_t226DUdT, hs_sat26DV3J, hs_t326DUdW);
                        };
                        return hs_rsingleLeft25tPTk.hscall(hs_k26DUbw, hs_p26DUbx, hs_v26DUby, hs_l26DU9D, hs_m26DUbz, hs_sat26DV3M);
                    }
                case 2:
                    return hs_rsingleLeft25tPTk.hscall(hs_k26DUbw, hs_p26DUbx, hs_v26DUby, hs_l26DU9D, hs_m26DUbz, hs_r26DU9W);
                }
            }
        case 2:
            return hs_rloser25tPT2.hscall(hs_k26DUbw, hs_p26DUbx, hs_v26DUby, hs_l26DU9D, hs_m26DUbz, hs_r26DU9W);
        }
    };
    hs_secondBest25tPSM.evaluate = function (hs_ds26DUe0, hs_ds126DUea) {
        var hs_wild26DV3N = hs_ds26DUe0;
        if (hs_ds26DUe0.notEvaluated) {
            hs_wild26DV3N = hs_ds26DUe0.hscall();
        }
        switch (hs_wild26DV3N.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_rb126DUec = hs_wild26DV3N.data[1];
            var hs_rb226DUed = hs_wild26DV3N.data[2];
            var hs_rb326DUee = hs_wild26DV3N.data[3];
            var hs_tl26DUef = hs_wild26DV3N.data[4];
            var hs_rb426DUeg = hs_wild26DV3N.data[5];
            var hs_tr26DUe9 = hs_wild26DV3N.data[6];
            var hs_wild126DV3O = hs_secondBest25tPSM.hscall(hs_tr26DUe9, hs_ds126DUea);
            switch (hs_wild126DV3O.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [hs_rb126DUec, hs_rb226DUed, hs_rb326DUee, hs_tl26DUef, hs_rb426DUeg];
                return $res;
            case 2:
                var hs_ipv26DUew = hs_wild126DV3O.data[0];
                var hs_ipv126DUep = hs_wild126DV3O.data[1];
                var hs_ipv226DUex = hs_wild126DV3O.data[2];
                var hs_ipv326DUeu = hs_wild126DV3O.data[3];
                var hs_ipv426DUez = hs_wild126DV3O.data[4];
                var hs_p26DUen = new $hs.Data(1);
                hs_p26DUen.data = [hs_rb226DUed];
                var hs_pzq26DUeq = new $hs.Data(1);
                hs_pzq26DUeq.data = [hs_ipv126DUep];
                var hs_wild226DV3Q = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_p26DUen, hs_pzq26DUeq);
                switch (hs_wild226DV3Q.tag) {
                case 1:
                    var hs_sat26DV3R = new $hs.Data(1);
                    hs_sat26DV3R.data = [hs_rb426DUeg];
                    var hs_sat26DV3S = new $hs.Data(1);
                    hs_sat26DV3S.data = [hs_rb126DUec];
                    var hs_tpl26DUey = hs_lbalance25tPT6.hscall(hs_sat26DV3S, hs_p26DUen, hs_rb326DUee, hs_tl26DUef, hs_sat26DV3R, hs_ipv326DUeu);
                    var $res = new $hs.Data(2);
                    $res.data = [hs_ipv26DUew, hs_ipv126DUep, hs_ipv226DUex, hs_tpl26DUey, hs_ipv426DUez];
                    return $res;
                case 2:
                    var hs_sat26DV3T = new $hs.Data(1);
                    hs_sat26DV3T.data = [hs_rb426DUeg];
                    var hs_sat26DV3U = new $hs.Data(1);
                    hs_sat26DV3U.data = [hs_ipv26DUew];
                    var hs_tpl26DUeD = hs_rbalance25tPT8.hscall(hs_sat26DV3U, hs_pzq26DUeq, hs_ipv226DUex, hs_tl26DUef, hs_sat26DV3T, hs_ipv326DUeu);
                    var $res = new $hs.Data(2);
                    $res.data = [hs_rb126DUec, hs_rb226DUed, hs_rb326DUee, hs_tpl26DUeD, hs_ipv426DUez];
                    return $res;
                }
            }
        case 3:
            var hs_rb126DUeR = hs_wild26DV3N.data[1];
            var hs_rb226DUeS = hs_wild26DV3N.data[2];
            var hs_rb326DUeT = hs_wild26DV3N.data[3];
            var hs_tl26DUeL = hs_wild26DV3N.data[4];
            var hs_rb426DUeM = hs_wild26DV3N.data[5];
            var hs_tr26DUeU = hs_wild26DV3N.data[6];
            var hs_sat26DV3Y = new $hs.Data(1);
            hs_sat26DV3Y.data = [hs_rb426DUeM];
            var hs_wild126DV3X = hs_secondBest25tPSM.hscall(hs_tl26DUeL, hs_sat26DV3Y);
            switch (hs_wild126DV3X.tag) {
            case 1:
                var hs_tpl26DV3W = hs_ds126DUea;
                if (hs_ds126DUea.notEvaluated) {
                    hs_tpl26DV3W = hs_ds126DUea.hscall();
                }
                var hs_tpl126DUeV = hs_tpl26DV3W.data[0];
                var $res = new $hs.Data(2);
                $res.data = [hs_rb126DUeR, hs_rb226DUeS, hs_rb326DUeT, hs_tr26DUeU, hs_tpl126DUeV];
                return $res;
            case 2:
                var hs_ipv26DUf9 = hs_wild126DV3X.data[0];
                var hs_ipv126DUf4 = hs_wild126DV3X.data[1];
                var hs_ipv226DUfb = hs_wild126DV3X.data[2];
                var hs_ipv326DUfc = hs_wild126DV3X.data[3];
                var hs_ipv426DUfd = hs_wild126DV3X.data[4];
                var hs_tpl26DV3Z = hs_ds126DUea;
                if (hs_ds126DUea.notEvaluated) {
                    hs_tpl26DV3Z = hs_ds126DUea.hscall();
                }
                var hs_tpl126DUfh = hs_tpl26DV3Z.data[0];
                var hs_p26DUf5 = new $hs.Data(1);
                hs_p26DUf5.data = [hs_ipv126DUf4];
                var hs_pzq26DUf7 = new $hs.Data(1);
                hs_pzq26DUf7.data = [hs_rb226DUeS];
                var hs_wild226DV40 = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_p26DUf5, hs_pzq26DUf7);
                switch (hs_wild226DV40.tag) {
                case 1:
                    var hs_sat26DV41 = new $hs.Data(1);
                    hs_sat26DV41.data = [hs_ipv426DUfd];
                    var hs_sat26DV42 = new $hs.Data(1);
                    hs_sat26DV42.data = [hs_ipv26DUf9];
                    var hs_tpl226DUfg = hs_lbalance25tPT6.hscall(hs_sat26DV42, hs_p26DUf5, hs_ipv226DUfb, hs_ipv326DUfc, hs_sat26DV41, hs_tr26DUeU);
                    var $res = new $hs.Data(2);
                    $res.data = [hs_rb126DUeR, hs_rb226DUeS, hs_rb326DUeT, hs_tpl226DUfg, hs_tpl126DUfh];
                    return $res;
                case 2:
                    var hs_sat26DV43 = new $hs.Data(1);
                    hs_sat26DV43.data = [hs_ipv426DUfd];
                    var hs_sat26DV44 = new $hs.Data(1);
                    hs_sat26DV44.data = [hs_rb126DUeR];
                    var hs_tpl226DUfl = hs_rbalance25tPT8.hscall(hs_sat26DV44, hs_pzq26DUf7, hs_rb326DUeT, hs_ipv326DUfc, hs_sat26DV43, hs_tr26DUeU);
                    var $res = new $hs.Data(2);
                    $res.data = [hs_ipv26DUf9, hs_ipv126DUf4, hs_ipv226DUfb, hs_tpl226DUfl, hs_tpl126DUfh];
                    return $res;
                }
            }
        }
    };
    this.hs_minView.evaluate = function (hs_ds26DUfn) {
        var hs_wild26DV45 = hs_ds26DUfn;
        if (hs_ds26DUfn.notEvaluated) {
            hs_wild26DV45 = hs_ds26DUfn.hscall();
        }
        switch (hs_wild26DV45.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_rb26DUfu = hs_wild26DV45.data[0];
            var hs_rb126DUfv = hs_wild26DV45.data[1];
            var hs_rb226DUfw = hs_wild26DV45.data[2];
            var hs_t26DUfy = hs_wild26DV45.data[3];
            var hs_rb326DUfz = hs_wild26DV45.data[4];
            var hs_sat26DV47 = new $hs.Thunk();
            hs_sat26DV47.evaluateOnce = function () {
                var hs_sat26DV46 = new $hs.Data(1);
                hs_sat26DV46.data = [hs_rb326DUfz];
                return hs_secondBest25tPSM.hscall(hs_t26DUfy, hs_sat26DV46);
            };
            var hs_sat26DV48 = new $hs.Data(1);
            hs_sat26DV48.data = [hs_rb26DUfu, hs_rb126DUfv, hs_rb226DUfw];
            var hs_sat26DV49 = new $hs.Data(1);
            hs_sat26DV49.data = [hs_sat26DV48, hs_sat26DV47];
            var $res = new $hs.Data(2);
            $res.data = [hs_sat26DV49];
            return $res;
        }
    };
    this.hs_deleteMin.evaluate = function (hs_ds26DUfE) {
        var hs_wild26DV4a = hs_ds26DUfE;
        if (hs_ds26DUfE.notEvaluated) {
            hs_wild26DV4a = hs_ds26DUfE.hscall();
        }
        switch (hs_wild26DV4a.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_t26DUfL = hs_wild26DV4a.data[3];
            var hs_rb326DUfM = hs_wild26DV4a.data[4];
            var hs_sat26DV4e = new $hs.Data(1);
            hs_sat26DV4e.data = [hs_rb326DUfM];
            return hs_secondBest25tPSM.hscall(hs_t26DUfL, hs_sat26DV4e);
        }
    };
    this.hs_findMin.evaluate = function (hs_ds26DUfP) {
        var hs_wild26DV4f = hs_ds26DUfP;
        if (hs_ds26DUfP.notEvaluated) {
            hs_wild26DV4f = hs_ds26DUfP.hscall();
        }
        switch (hs_wild26DV4f.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_rb26DUfW = hs_wild26DV4f.data[0];
            var hs_rb126DUfX = hs_wild26DV4f.data[1];
            var hs_rb226DUfY = hs_wild26DV4f.data[2];
            var hs_sat26DV4i = new $hs.Data(1);
            hs_sat26DV4i.data = [hs_rb26DUfW, hs_rb126DUfX, hs_rb226DUfY];
            var $res = new $hs.Data(2);
            $res.data = [hs_sat26DV4i];
            return $res;
        }
    };
    hs_a125vvJL.evaluate = function (hs_q26DUg4, hs_eta26DUg6) {
        var hs_wild26DV4j = hs_q26DUg4;
        if (hs_q26DUg4.notEvaluated) {
            hs_wild26DV4j = hs_q26DUg4.hscall();
        }
        switch (hs_wild26DV4j.tag) {
        case 1:
            if (hs_eta26DUg6.notEvaluated) {
                return hs_eta26DUg6.hscall();
            } else {
                return hs_eta26DUg6;
            }
        case 2:
            var hs_rb26DUge = hs_wild26DV4j.data[0];
            var hs_rb126DUgf = hs_wild26DV4j.data[1];
            var hs_rb226DUgg = hs_wild26DV4j.data[2];
            var hs_ds26DUgc = hs_wild26DV4j.data[3];
            var hs_rb326DUgq = hs_wild26DV4j.data[4];
            var hs_wild126DV4k = hs_ds26DUgc;
            if (hs_ds26DUgc.notEvaluated) {
                hs_wild126DV4k = hs_ds26DUgc.hscall();
            }
            switch (hs_wild126DV4k.tag) {
            case 1:
                var hs_sat26DV4l = new $hs.Data(1);
                hs_sat26DV4l.data = [hs_rb26DUge, hs_rb126DUgf, hs_rb226DUgg];
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26DV4l, hs_eta26DUg6];
                return $res;
            case 2:
                var hs_rb526DUgs = hs_wild126DV4k.data[1];
                var hs_rb626DUgt = hs_wild126DV4k.data[2];
                var hs_rb726DUgu = hs_wild126DV4k.data[3];
                var hs_tl26DUgv = hs_wild126DV4k.data[4];
                var hs_rb826DUgw = hs_wild126DV4k.data[5];
                var hs_tr26DUgp = hs_wild126DV4k.data[6];
                var hs_sat26DV4o = new $hs.Thunk();
                hs_sat26DV4o.evaluateOnce = function () {
                    var hs_sat26DV4n = new $hs.Data(2);
                    hs_sat26DV4n.data = [hs_rb526DUgs, hs_rb626DUgt, hs_rb726DUgu, hs_tl26DUgv, hs_rb826DUgw];
                    return hs_a125vvJL.hscall(hs_sat26DV4n, hs_eta26DUg6);
                };
                var hs_sat26DV4p = new $hs.Data(2);
                hs_sat26DV4p.data = [hs_rb26DUge, hs_rb126DUgf, hs_rb226DUgg, hs_tr26DUgp, hs_rb326DUgq];
                return hs_a125vvJL.hscall(hs_sat26DV4p, hs_sat26DV4o);
            case 3:
                var hs_rb526DUgG = hs_wild126DV4k.data[1];
                var hs_rb626DUgH = hs_wild126DV4k.data[2];
                var hs_rb726DUgI = hs_wild126DV4k.data[3];
                var hs_tl26DUgL = hs_wild126DV4k.data[4];
                var hs_rb826DUgM = hs_wild126DV4k.data[5];
                var hs_tr26DUgJ = hs_wild126DV4k.data[6];
                var hs_sat26DV4s = new $hs.Thunk();
                hs_sat26DV4s.evaluateOnce = function () {
                    var hs_sat26DV4r = new $hs.Data(2);
                    hs_sat26DV4r.data = [hs_rb26DUge, hs_rb126DUgf, hs_rb226DUgg, hs_tl26DUgL, hs_rb826DUgM];
                    return hs_a125vvJL.hscall(hs_sat26DV4r, hs_eta26DUg6);
                };
                var hs_sat26DV4t = new $hs.Data(2);
                hs_sat26DV4t.data = [hs_rb526DUgG, hs_rb626DUgH, hs_rb726DUgI, hs_tr26DUgJ, hs_rb326DUgq];
                return hs_a125vvJL.hscall(hs_sat26DV4t, hs_sat26DV4s);
            }
        }
    };
    this.hs_toDescList.evaluate = function (hs_q26DUgQ) {
        return hs_a125vvJL.hscall(hs_q26DUgQ, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    hs_a225vvKC.evaluate = function (hs_q26DUgV, hs_eta26DUgX) {
        var hs_wild26DV4u = hs_q26DUgV;
        if (hs_q26DUgV.notEvaluated) {
            hs_wild26DV4u = hs_q26DUgV.hscall();
        }
        switch (hs_wild26DV4u.tag) {
        case 1:
            if (hs_eta26DUgX.notEvaluated) {
                return hs_eta26DUgX.hscall();
            } else {
                return hs_eta26DUgX;
            }
        case 2:
            var hs_rb26DUh5 = hs_wild26DV4u.data[0];
            var hs_rb126DUh6 = hs_wild26DV4u.data[1];
            var hs_rb226DUh7 = hs_wild26DV4u.data[2];
            var hs_ds26DUh3 = hs_wild26DV4u.data[3];
            var hs_rb326DUhn = hs_wild26DV4u.data[4];
            var hs_wild126DV4v = hs_ds26DUh3;
            if (hs_ds26DUh3.notEvaluated) {
                hs_wild126DV4v = hs_ds26DUh3.hscall();
            }
            switch (hs_wild126DV4v.tag) {
            case 1:
                var hs_sat26DV4w = new $hs.Data(1);
                hs_sat26DV4w.data = [hs_rb26DUh5, hs_rb126DUh6, hs_rb226DUh7];
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26DV4w, hs_eta26DUgX];
                return $res;
            case 2:
                var hs_rb526DUhg = hs_wild126DV4v.data[1];
                var hs_rb626DUhh = hs_wild126DV4v.data[2];
                var hs_rb726DUhi = hs_wild126DV4v.data[3];
                var hs_tl26DUhj = hs_wild126DV4v.data[4];
                var hs_rb826DUhk = hs_wild126DV4v.data[5];
                var hs_tr26DUhm = hs_wild126DV4v.data[6];
                var hs_sat26DV4z = new $hs.Thunk();
                hs_sat26DV4z.evaluateOnce = function () {
                    var hs_sat26DV4y = new $hs.Data(2);
                    hs_sat26DV4y.data = [hs_rb26DUh5, hs_rb126DUh6, hs_rb226DUh7, hs_tr26DUhm, hs_rb326DUhn];
                    return hs_a225vvKC.hscall(hs_sat26DV4y, hs_eta26DUgX);
                };
                var hs_sat26DV4A = new $hs.Data(2);
                hs_sat26DV4A.data = [hs_rb526DUhg, hs_rb626DUhh, hs_rb726DUhi, hs_tl26DUhj, hs_rb826DUhk];
                return hs_a225vvKC.hscall(hs_sat26DV4A, hs_sat26DV4z);
            case 3:
                var hs_rb526DUhA = hs_wild126DV4v.data[1];
                var hs_rb626DUhB = hs_wild126DV4v.data[2];
                var hs_rb726DUhC = hs_wild126DV4v.data[3];
                var hs_tl26DUhx = hs_wild126DV4v.data[4];
                var hs_rb826DUhy = hs_wild126DV4v.data[5];
                var hs_tr26DUhD = hs_wild126DV4v.data[6];
                var hs_sat26DV4D = new $hs.Thunk();
                hs_sat26DV4D.evaluateOnce = function () {
                    var hs_sat26DV4C = new $hs.Data(2);
                    hs_sat26DV4C.data = [hs_rb526DUhA, hs_rb626DUhB, hs_rb726DUhC, hs_tr26DUhD, hs_rb326DUhn];
                    return hs_a225vvKC.hscall(hs_sat26DV4C, hs_eta26DUgX);
                };
                var hs_sat26DV4E = new $hs.Data(2);
                hs_sat26DV4E.data = [hs_rb26DUh5, hs_rb126DUh6, hs_rb226DUh7, hs_tl26DUhx, hs_rb826DUhy];
                return hs_a225vvKC.hscall(hs_sat26DV4E, hs_sat26DV4D);
            }
        }
    };
    this.hs_toAscList.evaluate = function (hs_q26DUhH) {
        return hs_a225vvKC.hscall(hs_q26DUhH, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_toList.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.SystemziEventziPSQ.hs_toAscList.hscall(hs_eta1cW6l3);
    };
    this.hs_singleton.evaluate = function (hs_k26DUhL, hs_p26DUhO, hs_v26DUhW) {
        var hs_tpl26DUhR = hs_k26DUhL;
        if (hs_k26DUhL.notEvaluated) {
            hs_tpl26DUhR = hs_k26DUhL.hscall();
        }
        var hs_tpl126DUhU = hs_tpl26DUhR.data[0];
        var hs_tpl226DV4G = hs_p26DUhO;
        if (hs_p26DUhO.notEvaluated) {
            hs_tpl226DV4G = hs_p26DUhO.hscall();
        }
        var hs_tpl326DUhV = hs_tpl226DV4G.data[0];
        var hs_tpl426DV4F = hs_tpl26DUhR;
        if (hs_tpl26DUhR.notEvaluated) {
            hs_tpl426DV4F = hs_tpl26DUhR.hscall();
        }
        var hs_tpl526DUhX = hs_tpl426DV4F.data[0];
        var $res = new $hs.Data(2);
        $res.data = [hs_tpl126DUhU, hs_tpl326DUhV, hs_v26DUhW, $hs.modules.SystemziEventziPSQ.hs_Start, hs_tpl526DUhX];
        return $res;
    };
    this.hs_insert.evaluate = function (hs_k26DUi4, hs_p26DUi7, hs_v26DUif, hs_q26DUi2) {
        var hs_wild26DV4J = hs_q26DUi2;
        if (hs_q26DUi2.notEvaluated) {
            hs_wild26DV4J = hs_q26DUi2.hscall();
        }
        switch (hs_wild26DV4J.tag) {
        case 1:
            var hs_tpl26DUia = hs_k26DUi4;
            if (hs_k26DUi4.notEvaluated) {
                hs_tpl26DUia = hs_k26DUi4.hscall();
            }
            var hs_tpl126DUid = hs_tpl26DUia.data[0];
            var hs_tpl226DV4I = hs_p26DUi7;
            if (hs_p26DUi7.notEvaluated) {
                hs_tpl226DV4I = hs_p26DUi7.hscall();
            }
            var hs_tpl326DUie = hs_tpl226DV4I.data[0];
            var hs_tpl426DV4H = hs_tpl26DUia;
            if (hs_tpl26DUia.notEvaluated) {
                hs_tpl426DV4H = hs_tpl26DUia.hscall();
            }
            var hs_tpl526DUig = hs_tpl426DV4H.data[0];
            var $res = new $hs.Data(2);
            $res.data = [hs_tpl126DUid, hs_tpl326DUie, hs_v26DUif, $hs.modules.SystemziEventziPSQ.hs_Start, hs_tpl526DUig];
            return $res;
        case 2:
            var hs_rb26DUin = hs_wild26DV4J.data[0];
            var hs_rb126DUiG = hs_wild26DV4J.data[1];
            var hs_rb226DUiH = hs_wild26DV4J.data[2];
            var hs_ds26DUip = hs_wild26DV4J.data[3];
            var hs_rb326DUiJ = hs_wild26DV4J.data[4];
            var hs_a326DUio = new $hs.Data(1);
            hs_a326DUio.data = [hs_rb26DUin];
            var hs_wild126DUir = hs_ds26DUip;
            if (hs_ds26DUip.notEvaluated) {
                hs_wild126DUir = hs_ds26DUip.hscall();
            }
            switch (hs_wild126DUir.tag) {
            case 1:
                var hs_wild226DV5o = $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.SystemziEventziUnique.hs_zdfOrdUnique, hs_k26DUi4, hs_a326DUio);
                switch (hs_wild226DV5o.tag) {
                case 1:
                    var hs_tpl26DUkV = hs_k26DUi4;
                    if (hs_k26DUi4.notEvaluated) {
                        hs_tpl26DUkV = hs_k26DUi4.hscall();
                    }
                    var hs_tpl126DUl9 = hs_tpl26DUkV.data[0];
                    var hs_tpl226DV5n = hs_p26DUi7;
                    if (hs_p26DUi7.notEvaluated) {
                        hs_tpl226DV5n = hs_p26DUi7.hscall();
                    }
                    var hs_tpl326DUl4 = hs_tpl226DV5n.data[0];
                    var hs_tpl426DV5m = hs_tpl26DUkV;
                    if (hs_tpl26DUkV.notEvaluated) {
                        hs_tpl426DV5m = hs_tpl26DUkV.hscall();
                    }
                    var hs_tpl526DUlb = hs_tpl426DV5m.data[0];
                    var hs_tpl626DUl0 = hs_a326DUio;
                    if (hs_a326DUio.notEvaluated) {
                        hs_tpl626DUl0 = hs_a326DUio.hscall();
                    }
                    var hs_tpl726DUle = hs_tpl626DUl0.data[0];
                    var hs_tpl826DV5l = hs_tpl626DUl0;
                    if (hs_tpl626DUl0.notEvaluated) {
                        hs_tpl826DV5l = hs_tpl626DUl0.hscall();
                    }
                    var hs_tpl926DUlg = hs_tpl826DV5l.data[0];
                    var hs_p126DUl5 = new $hs.Data(1);
                    hs_p126DUl5.data = [hs_tpl326DUl4];
                    var hs_pzq26DUl7 = new $hs.Data(1);
                    hs_pzq26DUl7.data = [hs_rb126DUiG];
                    var hs_wild326DV5p = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_p126DUl5, hs_pzq26DUl7);
                    switch (hs_wild326DV5p.tag) {
                    case 1:
                        var hs_sat26DV5q = new $hs.Data(1);
                        hs_sat26DV5q.data = [hs_tpl526DUlb];
                        var hs_sat26DV5r = new $hs.Data(1);
                        hs_sat26DV5r.data = [hs_tpl126DUl9];
                        var hs_tpl1026DUlf = hs_lbalance25tPT6.hscall(hs_sat26DV5r, hs_p126DUl5, hs_v26DUif, $hs.modules.SystemziEventziPSQ.hs_Start, hs_sat26DV5q, $hs.modules.SystemziEventziPSQ.hs_Start);
                        var $res = new $hs.Data(2);
                        $res.data = [hs_tpl726DUle, hs_rb126DUiG, hs_rb226DUiH, hs_tpl1026DUlf, hs_tpl926DUlg];
                        return $res;
                    case 2:
                        var hs_sat26DV5s = new $hs.Data(1);
                        hs_sat26DV5s.data = [hs_tpl526DUlb];
                        var hs_sat26DV5t = new $hs.Data(1);
                        hs_sat26DV5t.data = [hs_tpl726DUle];
                        var hs_tpl1026DUlk = hs_rbalance25tPT8.hscall(hs_sat26DV5t, hs_pzq26DUl7, hs_rb226DUiH, $hs.modules.SystemziEventziPSQ.hs_Start, hs_sat26DV5s, $hs.modules.SystemziEventziPSQ.hs_Start);
                        var $res = new $hs.Data(2);
                        $res.data = [hs_tpl126DUl9, hs_tpl326DUl4, hs_v26DUif, hs_tpl1026DUlk, hs_tpl926DUlg];
                        return $res;
                    }
                case 2:
                    var hs_tpl26DUlp = hs_k26DUi4;
                    if (hs_k26DUi4.notEvaluated) {
                        hs_tpl26DUlp = hs_k26DUi4.hscall();
                    }
                    var hs_tpl126DUls = hs_tpl26DUlp.data[0];
                    var hs_tpl226DV5v = hs_p26DUi7;
                    if (hs_p26DUi7.notEvaluated) {
                        hs_tpl226DV5v = hs_p26DUi7.hscall();
                    }
                    var hs_tpl326DUlt = hs_tpl226DV5v.data[0];
                    var hs_tpl426DV5u = hs_tpl26DUlp;
                    if (hs_tpl26DUlp.notEvaluated) {
                        hs_tpl426DV5u = hs_tpl26DUlp.hscall();
                    }
                    var hs_tpl526DUlu = hs_tpl426DV5u.data[0];
                    var $res = new $hs.Data(2);
                    $res.data = [hs_tpl126DUls, hs_tpl326DUlt, hs_v26DUif, $hs.modules.SystemziEventziPSQ.hs_Start, hs_tpl526DUlu];
                    return $res;
                case 3:
                    var hs_tpl26DUlx = hs_a326DUio;
                    if (hs_a326DUio.notEvaluated) {
                        hs_tpl26DUlx = hs_a326DUio.hscall();
                    }
                    var hs_tpl126DUlN = hs_tpl26DUlx.data[0];
                    var hs_tpl226DV5y = hs_tpl26DUlx;
                    if (hs_tpl26DUlx.notEvaluated) {
                        hs_tpl226DV5y = hs_tpl26DUlx.hscall();
                    }
                    var hs_tpl326DUlP = hs_tpl226DV5y.data[0];
                    var hs_tpl426DUlE = hs_k26DUi4;
                    if (hs_k26DUi4.notEvaluated) {
                        hs_tpl426DUlE = hs_k26DUi4.hscall();
                    }
                    var hs_tpl526DUlS = hs_tpl426DUlE.data[0];
                    var hs_tpl626DV5x = hs_p26DUi7;
                    if (hs_p26DUi7.notEvaluated) {
                        hs_tpl626DV5x = hs_p26DUi7.hscall();
                    }
                    var hs_tpl726DUlK = hs_tpl626DV5x.data[0];
                    var hs_tpl826DV5w = hs_tpl426DUlE;
                    if (hs_tpl426DUlE.notEvaluated) {
                        hs_tpl826DV5w = hs_tpl426DUlE.hscall();
                    }
                    var hs_tpl926DUlU = hs_tpl826DV5w.data[0];
                    var hs_p126DUlI = new $hs.Data(1);
                    hs_p126DUlI.data = [hs_rb126DUiG];
                    var hs_pzq26DUlL = new $hs.Data(1);
                    hs_pzq26DUlL.data = [hs_tpl726DUlK];
                    var hs_wild326DV5z = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_p126DUlI, hs_pzq26DUlL);
                    switch (hs_wild326DV5z.tag) {
                    case 1:
                        var hs_sat26DV5A = new $hs.Data(1);
                        hs_sat26DV5A.data = [hs_tpl326DUlP];
                        var hs_sat26DV5B = new $hs.Data(1);
                        hs_sat26DV5B.data = [hs_tpl126DUlN];
                        var hs_tpl1026DUlT = hs_lbalance25tPT6.hscall(hs_sat26DV5B, hs_p126DUlI, hs_rb226DUiH, $hs.modules.SystemziEventziPSQ.hs_Start, hs_sat26DV5A, $hs.modules.SystemziEventziPSQ.hs_Start);
                        var $res = new $hs.Data(2);
                        $res.data = [hs_tpl526DUlS, hs_tpl726DUlK, hs_v26DUif, hs_tpl1026DUlT, hs_tpl926DUlU];
                        return $res;
                    case 2:
                        var hs_sat26DV5C = new $hs.Data(1);
                        hs_sat26DV5C.data = [hs_tpl326DUlP];
                        var hs_sat26DV5D = new $hs.Data(1);
                        hs_sat26DV5D.data = [hs_tpl526DUlS];
                        var hs_tpl1026DUlY = hs_rbalance25tPT8.hscall(hs_sat26DV5D, hs_pzq26DUlL, hs_v26DUif, $hs.modules.SystemziEventziPSQ.hs_Start, hs_sat26DV5C, $hs.modules.SystemziEventziPSQ.hs_Start);
                        var $res = new $hs.Data(2);
                        $res.data = [hs_tpl126DUlN, hs_rb126DUiG, hs_rb226DUiH, hs_tpl1026DUlY, hs_tpl926DUlU];
                        return $res;
                    }
                }
            default:
                var hs_wild226DV4L = hs_wild126DUir;
                if (hs_wild126DUir.notEvaluated) {
                    hs_wild226DV4L = hs_wild126DUir.hscall();
                }
                switch (hs_wild226DV4L.tag) {
                case 2:
                    var hs_rb526DUiM = hs_wild226DV4L.data[1];
                    var hs_rb626DUiN = hs_wild226DV4L.data[2];
                    var hs_rb726DUiO = hs_wild226DV4L.data[3];
                    var hs_tl26DUiP = hs_wild226DV4L.data[4];
                    var hs_rb826DUiB = hs_wild226DV4L.data[5];
                    var hs_tr26DUiI = hs_wild226DV4L.data[6];
                    var hs_a426DUiC = new $hs.Data(1);
                    hs_a426DUiC.data = [hs_rb826DUiB];
                    var hs_wild326DV4N = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.SystemziEventziUnique.hs_zdfOrdUnique, hs_k26DUi4, hs_a426DUiC);
                    switch (hs_wild326DV4N.tag) {
                    case 1:
                        var hs_tpl26DV4M = hs_a426DUiC;
                        if (hs_a426DUiC.notEvaluated) {
                            hs_tpl26DV4M = hs_a426DUiC.hscall();
                        }
                        var hs_tpl126DUiQ = hs_tpl26DV4M.data[0];
                        var hs_sat26DV4P = new $hs.Data(2);
                        hs_sat26DV4P.data = [hs_rb26DUin, hs_rb126DUiG, hs_rb226DUiH, hs_tr26DUiI, hs_rb326DUiJ];
                        var hs_wild426DV4O = $hs.modules.SystemziEventziPSQ.hs_insert.hscall(hs_k26DUi4, hs_p26DUi7, hs_v26DUif, hs_sat26DV4P);
                        switch (hs_wild426DV4O.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [hs_rb526DUiM, hs_rb626DUiN, hs_rb726DUiO, hs_tl26DUiP, hs_tpl126DUiQ];
                            return $res;
                        case 2:
                            var hs_ipv26DUj6 = hs_wild426DV4O.data[0];
                            var hs_ipv126DUiZ = hs_wild426DV4O.data[1];
                            var hs_ipv226DUj7 = hs_wild426DV4O.data[2];
                            var hs_ipv326DUj4 = hs_wild426DV4O.data[3];
                            var hs_ipv426DUj9 = hs_wild426DV4O.data[4];
                            var hs_p126DUiX = new $hs.Data(1);
                            hs_p126DUiX.data = [hs_rb626DUiN];
                            var hs_pzq26DUj0 = new $hs.Data(1);
                            hs_pzq26DUj0.data = [hs_ipv126DUiZ];
                            var hs_wild526DV4Q = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_p126DUiX, hs_pzq26DUj0);
                            switch (hs_wild526DV4Q.tag) {
                            case 1:
                                var hs_sat26DV4R = new $hs.Data(1);
                                hs_sat26DV4R.data = [hs_tpl126DUiQ];
                                var hs_sat26DV4S = new $hs.Data(1);
                                hs_sat26DV4S.data = [hs_rb526DUiM];
                                var hs_tpl226DUj8 = hs_lbalance25tPT6.hscall(hs_sat26DV4S, hs_p126DUiX, hs_rb726DUiO, hs_tl26DUiP, hs_sat26DV4R, hs_ipv326DUj4);
                                var $res = new $hs.Data(2);
                                $res.data = [hs_ipv26DUj6, hs_ipv126DUiZ, hs_ipv226DUj7, hs_tpl226DUj8, hs_ipv426DUj9];
                                return $res;
                            case 2:
                                var hs_sat26DV4T = new $hs.Data(1);
                                hs_sat26DV4T.data = [hs_tpl126DUiQ];
                                var hs_sat26DV4U = new $hs.Data(1);
                                hs_sat26DV4U.data = [hs_ipv26DUj6];
                                var hs_tpl226DUjd = hs_rbalance25tPT8.hscall(hs_sat26DV4U, hs_pzq26DUj0, hs_ipv226DUj7, hs_tl26DUiP, hs_sat26DV4T, hs_ipv326DUj4);
                                var $res = new $hs.Data(2);
                                $res.data = [hs_rb526DUiM, hs_rb626DUiN, hs_rb726DUiO, hs_tpl226DUjd, hs_ipv426DUj9];
                                return $res;
                            }
                        }
                    case 2:
                        var hs_sat26DV4X = new $hs.Thunk();
                        hs_sat26DV4X.evaluateOnce = function () {
                            var hs_tpl26DV4V = hs_a426DUiC;
                            if (hs_a426DUiC.notEvaluated) {
                                hs_tpl26DV4V = hs_a426DUiC.hscall();
                            }
                            var hs_tpl126DUjg = hs_tpl26DV4V.data[0];
                            var $res = new $hs.Data(2);
                            $res.data = [hs_rb526DUiM, hs_rb626DUiN, hs_rb726DUiO, hs_tl26DUiP, hs_tpl126DUjg];
                            return $res;
                        };
                        var hs_wild426DV4W = $hs.modules.SystemziEventziPSQ.hs_insert.hscall(hs_k26DUi4, hs_p26DUi7, hs_v26DUif, hs_sat26DV4X);
                        switch (hs_wild426DV4W.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [hs_rb26DUin, hs_rb126DUiG, hs_rb226DUiH, hs_tr26DUiI, hs_rb326DUiJ];
                            return $res;
                        case 2:
                            var hs_ipv26DUju = hs_wild426DV4W.data[0];
                            var hs_ipv126DUjp = hs_wild426DV4W.data[1];
                            var hs_ipv226DUjw = hs_wild426DV4W.data[2];
                            var hs_ipv326DUjx = hs_wild426DV4W.data[3];
                            var hs_ipv426DUjy = hs_wild426DV4W.data[4];
                            var hs_p126DUjq = new $hs.Data(1);
                            hs_p126DUjq.data = [hs_ipv126DUjp];
                            var hs_pzq26DUjs = new $hs.Data(1);
                            hs_pzq26DUjs.data = [hs_rb126DUiG];
                            var hs_wild526DV4Y = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_p126DUjq, hs_pzq26DUjs);
                            switch (hs_wild526DV4Y.tag) {
                            case 1:
                                var hs_sat26DV4Z = new $hs.Data(1);
                                hs_sat26DV4Z.data = [hs_ipv426DUjy];
                                var hs_sat26DV50 = new $hs.Data(1);
                                hs_sat26DV50.data = [hs_ipv26DUju];
                                var hs_tpl26DUjB = hs_lbalance25tPT6.hscall(hs_sat26DV50, hs_p126DUjq, hs_ipv226DUjw, hs_ipv326DUjx, hs_sat26DV4Z, hs_tr26DUiI);
                                var $res = new $hs.Data(2);
                                $res.data = [hs_rb26DUin, hs_rb126DUiG, hs_rb226DUiH, hs_tpl26DUjB, hs_rb326DUiJ];
                                return $res;
                            case 2:
                                var hs_sat26DV51 = new $hs.Data(1);
                                hs_sat26DV51.data = [hs_ipv426DUjy];
                                var hs_sat26DV52 = new $hs.Data(1);
                                hs_sat26DV52.data = [hs_rb26DUin];
                                var hs_tpl26DUjF = hs_rbalance25tPT8.hscall(hs_sat26DV52, hs_pzq26DUjs, hs_rb226DUiH, hs_ipv326DUjx, hs_sat26DV51, hs_tr26DUiI);
                                var $res = new $hs.Data(2);
                                $res.data = [hs_ipv26DUju, hs_ipv126DUjp, hs_ipv226DUjw, hs_tpl26DUjF, hs_rb326DUiJ];
                                return $res;
                            }
                        }
                    }
                case 3:
                    var hs_rb526DUjT = hs_wild226DV4L.data[1];
                    var hs_rb626DUjU = hs_wild226DV4L.data[2];
                    var hs_rb726DUjV = hs_wild226DV4L.data[3];
                    var hs_tl26DUjZ = hs_wild226DV4L.data[4];
                    var hs_rb826DUjO = hs_wild226DV4L.data[5];
                    var hs_tr26DUjW = hs_wild226DV4L.data[6];
                    var hs_a426DUjP = new $hs.Data(1);
                    hs_a426DUjP.data = [hs_rb826DUjO];
                    var hs_wild326DV55 = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.SystemziEventziUnique.hs_zdfOrdUnique, hs_k26DUi4, hs_a426DUjP);
                    switch (hs_wild326DV55.tag) {
                    case 1:
                        var hs_tpl26DV54 = hs_a426DUjP;
                        if (hs_a426DUjP.notEvaluated) {
                            hs_tpl26DV54 = hs_a426DUjP.hscall();
                        }
                        var hs_tpl126DUk0 = hs_tpl26DV54.data[0];
                        var hs_sat26DV57 = new $hs.Data(2);
                        hs_sat26DV57.data = [hs_rb526DUjT, hs_rb626DUjU, hs_rb726DUjV, hs_tr26DUjW, hs_rb326DUiJ];
                        var hs_wild426DV56 = $hs.modules.SystemziEventziPSQ.hs_insert.hscall(hs_k26DUi4, hs_p26DUi7, hs_v26DUif, hs_sat26DV57);
                        switch (hs_wild426DV56.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [hs_rb26DUin, hs_rb126DUiG, hs_rb226DUiH, hs_tl26DUjZ, hs_tpl126DUk0];
                            return $res;
                        case 2:
                            var hs_ipv26DUkg = hs_wild426DV56.data[0];
                            var hs_ipv126DUk9 = hs_wild426DV56.data[1];
                            var hs_ipv226DUkh = hs_wild426DV56.data[2];
                            var hs_ipv326DUke = hs_wild426DV56.data[3];
                            var hs_ipv426DUkj = hs_wild426DV56.data[4];
                            var hs_p126DUk7 = new $hs.Data(1);
                            hs_p126DUk7.data = [hs_rb126DUiG];
                            var hs_pzq26DUka = new $hs.Data(1);
                            hs_pzq26DUka.data = [hs_ipv126DUk9];
                            var hs_wild526DV58 = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_p126DUk7, hs_pzq26DUka);
                            switch (hs_wild526DV58.tag) {
                            case 1:
                                var hs_sat26DV59 = new $hs.Data(1);
                                hs_sat26DV59.data = [hs_tpl126DUk0];
                                var hs_sat26DV5a = new $hs.Data(1);
                                hs_sat26DV5a.data = [hs_rb26DUin];
                                var hs_tpl226DUki = hs_lbalance25tPT6.hscall(hs_sat26DV5a, hs_p126DUk7, hs_rb226DUiH, hs_tl26DUjZ, hs_sat26DV59, hs_ipv326DUke);
                                var $res = new $hs.Data(2);
                                $res.data = [hs_ipv26DUkg, hs_ipv126DUk9, hs_ipv226DUkh, hs_tpl226DUki, hs_ipv426DUkj];
                                return $res;
                            case 2:
                                var hs_sat26DV5b = new $hs.Data(1);
                                hs_sat26DV5b.data = [hs_tpl126DUk0];
                                var hs_sat26DV5c = new $hs.Data(1);
                                hs_sat26DV5c.data = [hs_ipv26DUkg];
                                var hs_tpl226DUkn = hs_rbalance25tPT8.hscall(hs_sat26DV5c, hs_pzq26DUka, hs_ipv226DUkh, hs_tl26DUjZ, hs_sat26DV5b, hs_ipv326DUke);
                                var $res = new $hs.Data(2);
                                $res.data = [hs_rb26DUin, hs_rb126DUiG, hs_rb226DUiH, hs_tpl226DUkn, hs_ipv426DUkj];
                                return $res;
                            }
                        }
                    case 2:
                        var hs_sat26DV5f = new $hs.Thunk();
                        hs_sat26DV5f.evaluateOnce = function () {
                            var hs_tpl26DV5d = hs_a426DUjP;
                            if (hs_a426DUjP.notEvaluated) {
                                hs_tpl26DV5d = hs_a426DUjP.hscall();
                            }
                            var hs_tpl126DUkq = hs_tpl26DV5d.data[0];
                            var $res = new $hs.Data(2);
                            $res.data = [hs_rb26DUin, hs_rb126DUiG, hs_rb226DUiH, hs_tl26DUjZ, hs_tpl126DUkq];
                            return $res;
                        };
                        var hs_wild426DV5e = $hs.modules.SystemziEventziPSQ.hs_insert.hscall(hs_k26DUi4, hs_p26DUi7, hs_v26DUif, hs_sat26DV5f);
                        switch (hs_wild426DV5e.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [hs_rb526DUjT, hs_rb626DUjU, hs_rb726DUjV, hs_tr26DUjW, hs_rb326DUiJ];
                            return $res;
                        case 2:
                            var hs_ipv26DUkE = hs_wild426DV5e.data[0];
                            var hs_ipv126DUkz = hs_wild426DV5e.data[1];
                            var hs_ipv226DUkG = hs_wild426DV5e.data[2];
                            var hs_ipv326DUkH = hs_wild426DV5e.data[3];
                            var hs_ipv426DUkI = hs_wild426DV5e.data[4];
                            var hs_p126DUkA = new $hs.Data(1);
                            hs_p126DUkA.data = [hs_ipv126DUkz];
                            var hs_pzq26DUkC = new $hs.Data(1);
                            hs_pzq26DUkC.data = [hs_rb626DUjU];
                            var hs_wild526DV5g = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_p126DUkA, hs_pzq26DUkC);
                            switch (hs_wild526DV5g.tag) {
                            case 1:
                                var hs_sat26DV5h = new $hs.Data(1);
                                hs_sat26DV5h.data = [hs_ipv426DUkI];
                                var hs_sat26DV5i = new $hs.Data(1);
                                hs_sat26DV5i.data = [hs_ipv26DUkE];
                                var hs_tpl26DUkL = hs_lbalance25tPT6.hscall(hs_sat26DV5i, hs_p126DUkA, hs_ipv226DUkG, hs_ipv326DUkH, hs_sat26DV5h, hs_tr26DUjW);
                                var $res = new $hs.Data(2);
                                $res.data = [hs_rb526DUjT, hs_rb626DUjU, hs_rb726DUjV, hs_tpl26DUkL, hs_rb326DUiJ];
                                return $res;
                            case 2:
                                var hs_sat26DV5j = new $hs.Data(1);
                                hs_sat26DV5j.data = [hs_ipv426DUkI];
                                var hs_sat26DV5k = new $hs.Data(1);
                                hs_sat26DV5k.data = [hs_rb526DUjT];
                                var hs_tpl26DUkP = hs_rbalance25tPT8.hscall(hs_sat26DV5k, hs_pzq26DUkC, hs_rb726DUjV, hs_ipv326DUkH, hs_sat26DV5j, hs_tr26DUjW);
                                var $res = new $hs.Data(2);
                                $res.data = [hs_ipv26DUkE, hs_ipv126DUkz, hs_ipv226DUkG, hs_tpl26DUkP, hs_rb326DUiJ];
                                return $res;
                            }
                        }
                    }
                }
            }
        }
    };
    this.hs_empty.data = [];
    this.hs_delete.evaluate = function (hs_k26DUmp, hs_q26DUm1) {
        var hs_wild26DV5E = hs_q26DUm1;
        if (hs_q26DUm1.notEvaluated) {
            hs_wild26DV5E = hs_q26DUm1.hscall();
        }
        switch (hs_wild26DV5E.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_rb26DUm9 = hs_wild26DV5E.data[0];
            var hs_rb126DUmt = hs_wild26DV5E.data[1];
            var hs_rb226DUmu = hs_wild26DV5E.data[2];
            var hs_ds26DUmb = hs_wild26DV5E.data[3];
            var hs_rb326DUmw = hs_wild26DV5E.data[4];
            var hs_a326DUma = new $hs.Data(1);
            hs_a326DUma.data = [hs_rb26DUm9];
            var hs_wild126DUmd = hs_ds26DUmb;
            if (hs_ds26DUmb.notEvaluated) {
                hs_wild126DUmd = hs_ds26DUmb.hscall();
            }
            switch (hs_wild126DUmd.tag) {
            case 1:
                var hs_wild226DV6h = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.SystemziEventziUnique.hs_zdfEqUnique, hs_k26DUmp, hs_a326DUma);
                switch (hs_wild226DV6h.tag) {
                case 1:
                    var hs_tpl26DUoG = hs_a326DUma;
                    if (hs_a326DUma.notEvaluated) {
                        hs_tpl26DUoG = hs_a326DUma.hscall();
                    }
                    var hs_tpl126DUoJ = hs_tpl26DUoG.data[0];
                    var hs_tpl226DV6g = hs_tpl26DUoG;
                    if (hs_tpl26DUoG.notEvaluated) {
                        hs_tpl226DV6g = hs_tpl26DUoG.hscall();
                    }
                    var hs_tpl326DUoK = hs_tpl226DV6g.data[0];
                    var $res = new $hs.Data(2);
                    $res.data = [hs_tpl126DUoJ, hs_rb126DUmt, hs_rb226DUmu, $hs.modules.SystemziEventziPSQ.hs_Start, hs_tpl326DUoK];
                    return $res;
                case 2:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            default:
                var hs_wild226DV5G = hs_wild126DUmd;
                if (hs_wild126DUmd.notEvaluated) {
                    hs_wild226DV5G = hs_wild126DUmd.hscall();
                }
                switch (hs_wild226DV5G.tag) {
                case 2:
                    var hs_rb526DUmz = hs_wild226DV5G.data[1];
                    var hs_rb626DUmA = hs_wild226DV5G.data[2];
                    var hs_rb726DUmB = hs_wild226DV5G.data[3];
                    var hs_tl26DUmC = hs_wild226DV5G.data[4];
                    var hs_rb826DUmn = hs_wild226DV5G.data[5];
                    var hs_tr26DUmv = hs_wild226DV5G.data[6];
                    var hs_a426DUmo = new $hs.Data(1);
                    hs_a426DUmo.data = [hs_rb826DUmn];
                    var hs_wild326DV5I = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.SystemziEventziUnique.hs_zdfOrdUnique, hs_k26DUmp, hs_a426DUmo);
                    switch (hs_wild326DV5I.tag) {
                    case 1:
                        var hs_tpl26DV5H = hs_a426DUmo;
                        if (hs_a426DUmo.notEvaluated) {
                            hs_tpl26DV5H = hs_a426DUmo.hscall();
                        }
                        var hs_tpl126DUmD = hs_tpl26DV5H.data[0];
                        var hs_sat26DV5K = new $hs.Data(2);
                        hs_sat26DV5K.data = [hs_rb26DUm9, hs_rb126DUmt, hs_rb226DUmu, hs_tr26DUmv, hs_rb326DUmw];
                        var hs_wild426DV5J = $hs.modules.SystemziEventziPSQ.hs_delete.hscall(hs_k26DUmp, hs_sat26DV5K);
                        switch (hs_wild426DV5J.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [hs_rb526DUmz, hs_rb626DUmA, hs_rb726DUmB, hs_tl26DUmC, hs_tpl126DUmD];
                            return $res;
                        case 2:
                            var hs_ipv26DUmT = hs_wild426DV5J.data[0];
                            var hs_ipv126DUmM = hs_wild426DV5J.data[1];
                            var hs_ipv226DUmU = hs_wild426DV5J.data[2];
                            var hs_ipv326DUmR = hs_wild426DV5J.data[3];
                            var hs_ipv426DUmW = hs_wild426DV5J.data[4];
                            var hs_p26DUmK = new $hs.Data(1);
                            hs_p26DUmK.data = [hs_rb626DUmA];
                            var hs_pzq26DUmN = new $hs.Data(1);
                            hs_pzq26DUmN.data = [hs_ipv126DUmM];
                            var hs_wild526DV5L = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_p26DUmK, hs_pzq26DUmN);
                            switch (hs_wild526DV5L.tag) {
                            case 1:
                                var hs_sat26DV5M = new $hs.Data(1);
                                hs_sat26DV5M.data = [hs_tpl126DUmD];
                                var hs_sat26DV5N = new $hs.Data(1);
                                hs_sat26DV5N.data = [hs_rb526DUmz];
                                var hs_tpl226DUmV = hs_lbalance25tPT6.hscall(hs_sat26DV5N, hs_p26DUmK, hs_rb726DUmB, hs_tl26DUmC, hs_sat26DV5M, hs_ipv326DUmR);
                                var $res = new $hs.Data(2);
                                $res.data = [hs_ipv26DUmT, hs_ipv126DUmM, hs_ipv226DUmU, hs_tpl226DUmV, hs_ipv426DUmW];
                                return $res;
                            case 2:
                                var hs_sat26DV5O = new $hs.Data(1);
                                hs_sat26DV5O.data = [hs_tpl126DUmD];
                                var hs_sat26DV5P = new $hs.Data(1);
                                hs_sat26DV5P.data = [hs_ipv26DUmT];
                                var hs_tpl226DUn0 = hs_rbalance25tPT8.hscall(hs_sat26DV5P, hs_pzq26DUmN, hs_ipv226DUmU, hs_tl26DUmC, hs_sat26DV5O, hs_ipv326DUmR);
                                var $res = new $hs.Data(2);
                                $res.data = [hs_rb526DUmz, hs_rb626DUmA, hs_rb726DUmB, hs_tpl226DUn0, hs_ipv426DUmW];
                                return $res;
                            }
                        }
                    case 2:
                        var hs_sat26DV5S = new $hs.Thunk();
                        hs_sat26DV5S.evaluateOnce = function () {
                            var hs_tpl26DV5Q = hs_a426DUmo;
                            if (hs_a426DUmo.notEvaluated) {
                                hs_tpl26DV5Q = hs_a426DUmo.hscall();
                            }
                            var hs_tpl126DUn3 = hs_tpl26DV5Q.data[0];
                            var $res = new $hs.Data(2);
                            $res.data = [hs_rb526DUmz, hs_rb626DUmA, hs_rb726DUmB, hs_tl26DUmC, hs_tpl126DUn3];
                            return $res;
                        };
                        var hs_wild426DV5R = $hs.modules.SystemziEventziPSQ.hs_delete.hscall(hs_k26DUmp, hs_sat26DV5S);
                        switch (hs_wild426DV5R.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [hs_rb26DUm9, hs_rb126DUmt, hs_rb226DUmu, hs_tr26DUmv, hs_rb326DUmw];
                            return $res;
                        case 2:
                            var hs_ipv26DUnh = hs_wild426DV5R.data[0];
                            var hs_ipv126DUnc = hs_wild426DV5R.data[1];
                            var hs_ipv226DUnj = hs_wild426DV5R.data[2];
                            var hs_ipv326DUnk = hs_wild426DV5R.data[3];
                            var hs_ipv426DUnl = hs_wild426DV5R.data[4];
                            var hs_p26DUnd = new $hs.Data(1);
                            hs_p26DUnd.data = [hs_ipv126DUnc];
                            var hs_pzq26DUnf = new $hs.Data(1);
                            hs_pzq26DUnf.data = [hs_rb126DUmt];
                            var hs_wild526DV5T = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_p26DUnd, hs_pzq26DUnf);
                            switch (hs_wild526DV5T.tag) {
                            case 1:
                                var hs_sat26DV5U = new $hs.Data(1);
                                hs_sat26DV5U.data = [hs_ipv426DUnl];
                                var hs_sat26DV5V = new $hs.Data(1);
                                hs_sat26DV5V.data = [hs_ipv26DUnh];
                                var hs_tpl26DUno = hs_lbalance25tPT6.hscall(hs_sat26DV5V, hs_p26DUnd, hs_ipv226DUnj, hs_ipv326DUnk, hs_sat26DV5U, hs_tr26DUmv);
                                var $res = new $hs.Data(2);
                                $res.data = [hs_rb26DUm9, hs_rb126DUmt, hs_rb226DUmu, hs_tpl26DUno, hs_rb326DUmw];
                                return $res;
                            case 2:
                                var hs_sat26DV5W = new $hs.Data(1);
                                hs_sat26DV5W.data = [hs_ipv426DUnl];
                                var hs_sat26DV5X = new $hs.Data(1);
                                hs_sat26DV5X.data = [hs_rb26DUm9];
                                var hs_tpl26DUns = hs_rbalance25tPT8.hscall(hs_sat26DV5X, hs_pzq26DUnf, hs_rb226DUmu, hs_ipv326DUnk, hs_sat26DV5W, hs_tr26DUmv);
                                var $res = new $hs.Data(2);
                                $res.data = [hs_ipv26DUnh, hs_ipv126DUnc, hs_ipv226DUnj, hs_tpl26DUns, hs_rb326DUmw];
                                return $res;
                            }
                        }
                    }
                case 3:
                    var hs_rb526DUnG = hs_wild226DV5G.data[1];
                    var hs_rb626DUnH = hs_wild226DV5G.data[2];
                    var hs_rb726DUnI = hs_wild226DV5G.data[3];
                    var hs_tl26DUnM = hs_wild226DV5G.data[4];
                    var hs_rb826DUnB = hs_wild226DV5G.data[5];
                    var hs_tr26DUnJ = hs_wild226DV5G.data[6];
                    var hs_a426DUnC = new $hs.Data(1);
                    hs_a426DUnC.data = [hs_rb826DUnB];
                    var hs_wild326DV60 = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.SystemziEventziUnique.hs_zdfOrdUnique, hs_k26DUmp, hs_a426DUnC);
                    switch (hs_wild326DV60.tag) {
                    case 1:
                        var hs_tpl26DV5Z = hs_a426DUnC;
                        if (hs_a426DUnC.notEvaluated) {
                            hs_tpl26DV5Z = hs_a426DUnC.hscall();
                        }
                        var hs_tpl126DUnN = hs_tpl26DV5Z.data[0];
                        var hs_sat26DV62 = new $hs.Data(2);
                        hs_sat26DV62.data = [hs_rb526DUnG, hs_rb626DUnH, hs_rb726DUnI, hs_tr26DUnJ, hs_rb326DUmw];
                        var hs_wild426DV61 = $hs.modules.SystemziEventziPSQ.hs_delete.hscall(hs_k26DUmp, hs_sat26DV62);
                        switch (hs_wild426DV61.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [hs_rb26DUm9, hs_rb126DUmt, hs_rb226DUmu, hs_tl26DUnM, hs_tpl126DUnN];
                            return $res;
                        case 2:
                            var hs_ipv26DUo3 = hs_wild426DV61.data[0];
                            var hs_ipv126DUnW = hs_wild426DV61.data[1];
                            var hs_ipv226DUo4 = hs_wild426DV61.data[2];
                            var hs_ipv326DUo1 = hs_wild426DV61.data[3];
                            var hs_ipv426DUo6 = hs_wild426DV61.data[4];
                            var hs_p26DUnU = new $hs.Data(1);
                            hs_p26DUnU.data = [hs_rb126DUmt];
                            var hs_pzq26DUnX = new $hs.Data(1);
                            hs_pzq26DUnX.data = [hs_ipv126DUnW];
                            var hs_wild526DV63 = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_p26DUnU, hs_pzq26DUnX);
                            switch (hs_wild526DV63.tag) {
                            case 1:
                                var hs_sat26DV64 = new $hs.Data(1);
                                hs_sat26DV64.data = [hs_tpl126DUnN];
                                var hs_sat26DV65 = new $hs.Data(1);
                                hs_sat26DV65.data = [hs_rb26DUm9];
                                var hs_tpl226DUo5 = hs_lbalance25tPT6.hscall(hs_sat26DV65, hs_p26DUnU, hs_rb226DUmu, hs_tl26DUnM, hs_sat26DV64, hs_ipv326DUo1);
                                var $res = new $hs.Data(2);
                                $res.data = [hs_ipv26DUo3, hs_ipv126DUnW, hs_ipv226DUo4, hs_tpl226DUo5, hs_ipv426DUo6];
                                return $res;
                            case 2:
                                var hs_sat26DV66 = new $hs.Data(1);
                                hs_sat26DV66.data = [hs_tpl126DUnN];
                                var hs_sat26DV67 = new $hs.Data(1);
                                hs_sat26DV67.data = [hs_ipv26DUo3];
                                var hs_tpl226DUoa = hs_rbalance25tPT8.hscall(hs_sat26DV67, hs_pzq26DUnX, hs_ipv226DUo4, hs_tl26DUnM, hs_sat26DV66, hs_ipv326DUo1);
                                var $res = new $hs.Data(2);
                                $res.data = [hs_rb26DUm9, hs_rb126DUmt, hs_rb226DUmu, hs_tpl226DUoa, hs_ipv426DUo6];
                                return $res;
                            }
                        }
                    case 2:
                        var hs_sat26DV6a = new $hs.Thunk();
                        hs_sat26DV6a.evaluateOnce = function () {
                            var hs_tpl26DV68 = hs_a426DUnC;
                            if (hs_a426DUnC.notEvaluated) {
                                hs_tpl26DV68 = hs_a426DUnC.hscall();
                            }
                            var hs_tpl126DUod = hs_tpl26DV68.data[0];
                            var $res = new $hs.Data(2);
                            $res.data = [hs_rb26DUm9, hs_rb126DUmt, hs_rb226DUmu, hs_tl26DUnM, hs_tpl126DUod];
                            return $res;
                        };
                        var hs_wild426DV69 = $hs.modules.SystemziEventziPSQ.hs_delete.hscall(hs_k26DUmp, hs_sat26DV6a);
                        switch (hs_wild426DV69.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [hs_rb526DUnG, hs_rb626DUnH, hs_rb726DUnI, hs_tr26DUnJ, hs_rb326DUmw];
                            return $res;
                        case 2:
                            var hs_ipv26DUor = hs_wild426DV69.data[0];
                            var hs_ipv126DUom = hs_wild426DV69.data[1];
                            var hs_ipv226DUot = hs_wild426DV69.data[2];
                            var hs_ipv326DUou = hs_wild426DV69.data[3];
                            var hs_ipv426DUov = hs_wild426DV69.data[4];
                            var hs_p26DUon = new $hs.Data(1);
                            hs_p26DUon.data = [hs_ipv126DUom];
                            var hs_pzq26DUop = new $hs.Data(1);
                            hs_pzq26DUop.data = [hs_rb626DUnH];
                            var hs_wild526DV6b = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_p26DUon, hs_pzq26DUop);
                            switch (hs_wild526DV6b.tag) {
                            case 1:
                                var hs_sat26DV6c = new $hs.Data(1);
                                hs_sat26DV6c.data = [hs_ipv426DUov];
                                var hs_sat26DV6d = new $hs.Data(1);
                                hs_sat26DV6d.data = [hs_ipv26DUor];
                                var hs_tpl26DUoy = hs_lbalance25tPT6.hscall(hs_sat26DV6d, hs_p26DUon, hs_ipv226DUot, hs_ipv326DUou, hs_sat26DV6c, hs_tr26DUnJ);
                                var $res = new $hs.Data(2);
                                $res.data = [hs_rb526DUnG, hs_rb626DUnH, hs_rb726DUnI, hs_tpl26DUoy, hs_rb326DUmw];
                                return $res;
                            case 2:
                                var hs_sat26DV6e = new $hs.Data(1);
                                hs_sat26DV6e.data = [hs_ipv426DUov];
                                var hs_sat26DV6f = new $hs.Data(1);
                                hs_sat26DV6f.data = [hs_rb526DUnG];
                                var hs_tpl26DUoC = hs_rbalance25tPT8.hscall(hs_sat26DV6f, hs_pzq26DUop, hs_rb726DUnI, hs_ipv326DUou, hs_sat26DV6e, hs_tr26DUnJ);
                                var $res = new $hs.Data(2);
                                $res.data = [hs_ipv26DUor, hs_ipv126DUom, hs_ipv226DUot, hs_tpl26DUoC, hs_rb326DUmw];
                                return $res;
                            }
                        }
                    }
                }
            }
        }
    };
    this.hs_adjust.evaluate = function (hs_eta26DUwV, hs_eta126DUpe, hs_eta226DUx5) {
        var hs_go26DUpm = new $hs.Func(1);
        hs_go26DUpm.evaluate = function (hs_q26DUoQ) {
            var hs_wild26DV6i = hs_q26DUoQ;
            if (hs_q26DUoQ.notEvaluated) {
                hs_wild26DV6i = hs_q26DUoQ.hscall();
            }
            switch (hs_wild26DV6i.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_rb26DUoY = hs_wild26DV6i.data[0];
                var hs_rb126DUpi = hs_wild26DV6i.data[1];
                var hs_rb226DUpj = hs_wild26DV6i.data[2];
                var hs_ds26DUp0 = hs_wild26DV6i.data[3];
                var hs_rb326DUpl = hs_wild26DV6i.data[4];
                var hs_a326DUoZ = new $hs.Data(1);
                hs_a326DUoZ.data = [hs_rb26DUoY];
                var hs_wild126DUp2 = hs_ds26DUp0;
                if (hs_ds26DUp0.notEvaluated) {
                    hs_wild126DUp2 = hs_ds26DUp0.hscall();
                }
                switch (hs_wild126DUp2.tag) {
                case 1:
                    var hs_wild226DVaV = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.SystemziEventziUnique.hs_zdfEqUnique, hs_eta126DUpe, hs_a326DUoZ);
                    switch (hs_wild226DVaV.tag) {
                    case 1:
                        var hs_tpl26DUwO = hs_a326DUoZ;
                        if (hs_a326DUoZ.notEvaluated) {
                            hs_tpl26DUwO = hs_a326DUoZ.hscall();
                        }
                        var hs_tpl126DUwR = hs_tpl26DUwO.data[0];
                        var hs_tpl226DVaU = hs_tpl26DUwO;
                        if (hs_tpl26DUwO.notEvaluated) {
                            hs_tpl226DVaU = hs_tpl26DUwO.hscall();
                        }
                        var hs_tpl326DUwS = hs_tpl226DVaU.data[0];
                        var $res = new $hs.Data(2);
                        $res.data = [hs_tpl126DUwR, hs_rb126DUpi, hs_rb226DUpj, $hs.modules.SystemziEventziPSQ.hs_Start, hs_tpl326DUwS];
                        return $res;
                    case 2:
                        var hs_tpl26DUwZ = hs_a326DUoZ;
                        if (hs_a326DUoZ.notEvaluated) {
                            hs_tpl26DUwZ = hs_a326DUoZ.hscall();
                        }
                        var hs_tpl126DUx2 = hs_tpl26DUwZ.data[0];
                        var hs_sat26DVaY = new $hs.Data(1);
                        hs_sat26DVaY.data = [hs_rb126DUpi];
                        var hs_tpl226DVaX = hs_eta26DUwV.hscall(hs_sat26DVaY);
                        var hs_tpl326DUx3 = hs_tpl226DVaX.data[0];
                        var hs_tpl426DVaW = hs_tpl26DUwZ;
                        if (hs_tpl26DUwZ.notEvaluated) {
                            hs_tpl426DVaW = hs_tpl26DUwZ.hscall();
                        }
                        var hs_tpl526DUx4 = hs_tpl426DVaW.data[0];
                        var $res = new $hs.Data(2);
                        $res.data = [hs_tpl126DUx2, hs_tpl326DUx3, hs_rb226DUpj, $hs.modules.SystemziEventziPSQ.hs_Start, hs_tpl526DUx4];
                        return $res;
                    }
                default:
                    var hs_wild226DV6k = hs_wild126DUp2;
                    if (hs_wild126DUp2.notEvaluated) {
                        hs_wild226DV6k = hs_wild126DUp2.hscall();
                    }
                    switch (hs_wild226DV6k.tag) {
                    case 2:
                        var hs_rb526DUpp = hs_wild226DV6k.data[1];
                        var hs_rb626DUpq = hs_wild226DV6k.data[2];
                        var hs_rb726DUpr = hs_wild226DV6k.data[3];
                        var hs_tl26DUps = hs_wild226DV6k.data[4];
                        var hs_rb826DUpc = hs_wild226DV6k.data[5];
                        var hs_tr26DUpk = hs_wild226DV6k.data[6];
                        var hs_a426DUpd = new $hs.Data(1);
                        hs_a426DUpd.data = [hs_rb826DUpc];
                        var hs_wild326DV6m = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.SystemziEventziUnique.hs_zdfOrdUnique, hs_eta126DUpe, hs_a426DUpd);
                        switch (hs_wild326DV6m.tag) {
                        case 1:
                            var hs_tpl26DV6l = hs_a426DUpd;
                            if (hs_a426DUpd.notEvaluated) {
                                hs_tpl26DV6l = hs_a426DUpd.hscall();
                            }
                            var hs_tpl126DUpt = hs_tpl26DV6l.data[0];
                            var hs_sat26DV6o = new $hs.Data(2);
                            hs_sat26DV6o.data = [hs_rb26DUoY, hs_rb126DUpi, hs_rb226DUpj, hs_tr26DUpk, hs_rb326DUpl];
                            var hs_wild426DV6n = hs_go26DUpm.hscall(hs_sat26DV6o);
                            switch (hs_wild426DV6n.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [hs_rb526DUpp, hs_rb626DUpq, hs_rb726DUpr, hs_tl26DUps, hs_tpl126DUpt];
                                return $res;
                            case 2:
                                var hs_ipv26DUqm = hs_wild426DV6n.data[0];
                                var hs_ipv126DUpC = hs_wild426DV6n.data[1];
                                var hs_ipv226DUqn = hs_wild426DV6n.data[2];
                                var hs_ipv326DUpZ = hs_wild426DV6n.data[3];
                                var hs_ipv426DUqr = hs_wild426DV6n.data[4];
                                var hs_p26DUpA = new $hs.Data(1);
                                hs_p26DUpA.data = [hs_rb626DUpq];
                                var hs_pzq26DUpD = new $hs.Data(1);
                                hs_pzq26DUpD.data = [hs_ipv126DUpC];
                                var hs_wild526DV6q = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_p26DUpA, hs_pzq26DUpD);
                                switch (hs_wild526DV6q.tag) {
                                case 1:
                                    var hs_sat26DV6E = new $hs.Thunk();
                                    hs_sat26DV6E.evaluateOnce = function () {
                                        var hs_wild626DV6p = hs_ipv326DUpZ;
                                        if (hs_ipv326DUpZ.notEvaluated) {
                                            hs_wild626DV6p = hs_ipv326DUpZ.hscall();
                                        }
                                        switch (hs_wild626DV6p.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [0];
                                            return $res;
                                        case 2:
                                            var hs_rb926DUq8 = hs_wild626DV6p.data[0];
                                            var $res = new $hs.Data(1);
                                            $res.data = [hs_rb926DUq8];
                                            return $res;
                                        case 3:
                                            var hs_rb926DUqg = hs_wild626DV6p.data[0];
                                            var $res = new $hs.Data(1);
                                            $res.data = [hs_rb926DUqg];
                                            return $res;
                                        }
                                    };
                                    var hs_sat26DV6V = new $hs.Thunk();
                                    hs_sat26DV6V.evaluateOnce = function () {
                                        var hs_sat26DV6R = new $hs.Thunk();
                                        hs_sat26DV6R.evaluateOnce = function () {
                                            var hs_wild626DV6D = hs_tl26DUps;
                                            if (hs_tl26DUps.notEvaluated) {
                                                hs_wild626DV6D = hs_tl26DUps.hscall();
                                            }
                                            switch (hs_wild626DV6D.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [0];
                                                return $res;
                                            case 2:
                                                var hs_rb926DUpO = hs_wild626DV6D.data[0];
                                                var $res = new $hs.Data(1);
                                                $res.data = [hs_rb926DUpO];
                                                return $res;
                                            case 3:
                                                var hs_rb926DUpW = hs_wild626DV6D.data[0];
                                                var $res = new $hs.Data(1);
                                                $res.data = [hs_rb926DUpW];
                                                return $res;
                                            }
                                        };
                                        var hs_sat26DV6S = new $hs.Data(1);
                                        hs_sat26DV6S.data = [1];
                                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DV6S, hs_sat26DV6R);
                                    };
                                    var hs_tpl226DV6U = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DV6V, hs_sat26DV6E);
                                    var hs_tpl326DUqo = hs_tpl226DV6U.data[0];
                                    var hs_tpl426DV6T = hs_p26DUpA;
                                    if (hs_p26DUpA.notEvaluated) {
                                        hs_tpl426DV6T = hs_p26DUpA.hscall();
                                    }
                                    var hs_tpl526DUqp = hs_tpl426DV6T.data[0];
                                    var hs_sat26DV6W = new $hs.Data(2);
                                    hs_sat26DV6W.data = [hs_tpl326DUqo, hs_rb526DUpp, hs_tpl526DUqp, hs_rb726DUpr, hs_tl26DUps, hs_tpl126DUpt, hs_ipv326DUpZ];
                                    var $res = new $hs.Data(2);
                                    $res.data = [hs_ipv26DUqm, hs_ipv126DUpC, hs_ipv226DUqn, hs_sat26DV6W, hs_ipv426DUqr];
                                    return $res;
                                case 2:
                                    var hs_sat26DV7b = new $hs.Thunk();
                                    hs_sat26DV7b.evaluateOnce = function () {
                                        var hs_wild626DV6X = hs_ipv326DUpZ;
                                        if (hs_ipv326DUpZ.notEvaluated) {
                                            hs_wild626DV6X = hs_ipv326DUpZ.hscall();
                                        }
                                        switch (hs_wild626DV6X.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [0];
                                            return $res;
                                        case 2:
                                            var hs_rb926DUqU = hs_wild626DV6X.data[0];
                                            var $res = new $hs.Data(1);
                                            $res.data = [hs_rb926DUqU];
                                            return $res;
                                        case 3:
                                            var hs_rb926DUr2 = hs_wild626DV6X.data[0];
                                            var $res = new $hs.Data(1);
                                            $res.data = [hs_rb926DUr2];
                                            return $res;
                                        }
                                    };
                                    var hs_sat26DV7s = new $hs.Thunk();
                                    hs_sat26DV7s.evaluateOnce = function () {
                                        var hs_sat26DV7o = new $hs.Thunk();
                                        hs_sat26DV7o.evaluateOnce = function () {
                                            var hs_wild626DV7a = hs_tl26DUps;
                                            if (hs_tl26DUps.notEvaluated) {
                                                hs_wild626DV7a = hs_tl26DUps.hscall();
                                            }
                                            switch (hs_wild626DV7a.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [0];
                                                return $res;
                                            case 2:
                                                var hs_rb926DUqB = hs_wild626DV7a.data[0];
                                                var $res = new $hs.Data(1);
                                                $res.data = [hs_rb926DUqB];
                                                return $res;
                                            case 3:
                                                var hs_rb926DUqJ = hs_wild626DV7a.data[0];
                                                var $res = new $hs.Data(1);
                                                $res.data = [hs_rb926DUqJ];
                                                return $res;
                                            }
                                        };
                                        var hs_sat26DV7p = new $hs.Data(1);
                                        hs_sat26DV7p.data = [1];
                                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DV7p, hs_sat26DV7o);
                                    };
                                    var hs_tpl226DV7r = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DV7s, hs_sat26DV7b);
                                    var hs_tpl326DUr8 = hs_tpl226DV7r.data[0];
                                    var hs_tpl426DV7q = hs_pzq26DUpD;
                                    if (hs_pzq26DUpD.notEvaluated) {
                                        hs_tpl426DV7q = hs_pzq26DUpD.hscall();
                                    }
                                    var hs_tpl526DUr9 = hs_tpl426DV7q.data[0];
                                    var hs_sat26DV7t = new $hs.Data(3);
                                    hs_sat26DV7t.data = [hs_tpl326DUr8, hs_ipv26DUqm, hs_tpl526DUr9, hs_ipv226DUqn, hs_tl26DUps, hs_tpl126DUpt, hs_ipv326DUpZ];
                                    var $res = new $hs.Data(2);
                                    $res.data = [hs_rb526DUpp, hs_rb626DUpq, hs_rb726DUpr, hs_sat26DV7t, hs_ipv426DUqr];
                                    return $res;
                                }
                            }
                        case 2:
                            var hs_sat26DV7w = new $hs.Thunk();
                            hs_sat26DV7w.evaluateOnce = function () {
                                var hs_tpl26DV7u = hs_a426DUpd;
                                if (hs_a426DUpd.notEvaluated) {
                                    hs_tpl26DV7u = hs_a426DUpd.hscall();
                                }
                                var hs_tpl126DUrd = hs_tpl26DV7u.data[0];
                                var $res = new $hs.Data(2);
                                $res.data = [hs_rb526DUpp, hs_rb626DUpq, hs_rb726DUpr, hs_tl26DUps, hs_tpl126DUrd];
                                return $res;
                            };
                            var hs_wild426DV7v = hs_go26DUpm.hscall(hs_sat26DV7w);
                            switch (hs_wild426DV7v.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [hs_rb26DUoY, hs_rb126DUpi, hs_rb226DUpj, hs_tr26DUpk, hs_rb326DUpl];
                                return $res;
                            case 2:
                                var hs_ipv26DUs9 = hs_wild426DV7v.data[0];
                                var hs_ipv126DUrm = hs_wild426DV7v.data[1];
                                var hs_ipv226DUsb = hs_wild426DV7v.data[2];
                                var hs_ipv326DUrs = hs_wild426DV7v.data[3];
                                var hs_ipv426DUsc = hs_wild426DV7v.data[4];
                                var hs_p26DUrn = new $hs.Data(1);
                                hs_p26DUrn.data = [hs_ipv126DUrm];
                                var hs_pzq26DUrp = new $hs.Data(1);
                                hs_pzq26DUrp.data = [hs_rb126DUpi];
                                var hs_wild526DV7y = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_p26DUrn, hs_pzq26DUrp);
                                switch (hs_wild526DV7y.tag) {
                                case 1:
                                    var hs_sat26DV7M = new $hs.Thunk();
                                    hs_sat26DV7M.evaluateOnce = function () {
                                        var hs_wild626DV7x = hs_tr26DUpk;
                                        if (hs_tr26DUpk.notEvaluated) {
                                            hs_wild626DV7x = hs_tr26DUpk.hscall();
                                        }
                                        switch (hs_wild626DV7x.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [0];
                                            return $res;
                                        case 2:
                                            var hs_rb926DUrU = hs_wild626DV7x.data[0];
                                            var $res = new $hs.Data(1);
                                            $res.data = [hs_rb926DUrU];
                                            return $res;
                                        case 3:
                                            var hs_rb926DUs2 = hs_wild626DV7x.data[0];
                                            var $res = new $hs.Data(1);
                                            $res.data = [hs_rb926DUs2];
                                            return $res;
                                        }
                                    };
                                    var hs_sat26DV83 = new $hs.Thunk();
                                    hs_sat26DV83.evaluateOnce = function () {
                                        var hs_sat26DV7Z = new $hs.Thunk();
                                        hs_sat26DV7Z.evaluateOnce = function () {
                                            var hs_wild626DV7L = hs_ipv326DUrs;
                                            if (hs_ipv326DUrs.notEvaluated) {
                                                hs_wild626DV7L = hs_ipv326DUrs.hscall();
                                            }
                                            switch (hs_wild626DV7L.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [0];
                                                return $res;
                                            case 2:
                                                var hs_rb926DUrB = hs_wild626DV7L.data[0];
                                                var $res = new $hs.Data(1);
                                                $res.data = [hs_rb926DUrB];
                                                return $res;
                                            case 3:
                                                var hs_rb926DUrJ = hs_wild626DV7L.data[0];
                                                var $res = new $hs.Data(1);
                                                $res.data = [hs_rb926DUrJ];
                                                return $res;
                                            }
                                        };
                                        var hs_sat26DV80 = new $hs.Data(1);
                                        hs_sat26DV80.data = [1];
                                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DV80, hs_sat26DV7Z);
                                    };
                                    var hs_tpl26DV82 = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DV83, hs_sat26DV7M);
                                    var hs_tpl126DUs8 = hs_tpl26DV82.data[0];
                                    var hs_tpl226DV81 = hs_p26DUrn;
                                    if (hs_p26DUrn.notEvaluated) {
                                        hs_tpl226DV81 = hs_p26DUrn.hscall();
                                    }
                                    var hs_tpl326DUsa = hs_tpl226DV81.data[0];
                                    var hs_sat26DV84 = new $hs.Data(2);
                                    hs_sat26DV84.data = [hs_tpl126DUs8, hs_ipv26DUs9, hs_tpl326DUsa, hs_ipv226DUsb, hs_ipv326DUrs, hs_ipv426DUsc, hs_tr26DUpk];
                                    var $res = new $hs.Data(2);
                                    $res.data = [hs_rb26DUoY, hs_rb126DUpi, hs_rb226DUpj, hs_sat26DV84, hs_rb326DUpl];
                                    return $res;
                                case 2:
                                    var hs_sat26DV8j = new $hs.Thunk();
                                    hs_sat26DV8j.evaluateOnce = function () {
                                        var hs_wild626DV85 = hs_tr26DUpk;
                                        if (hs_tr26DUpk.notEvaluated) {
                                            hs_wild626DV85 = hs_tr26DUpk.hscall();
                                        }
                                        switch (hs_wild626DV85.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [0];
                                            return $res;
                                        case 2:
                                            var hs_rb926DUsG = hs_wild626DV85.data[0];
                                            var $res = new $hs.Data(1);
                                            $res.data = [hs_rb926DUsG];
                                            return $res;
                                        case 3:
                                            var hs_rb926DUsO = hs_wild626DV85.data[0];
                                            var $res = new $hs.Data(1);
                                            $res.data = [hs_rb926DUsO];
                                            return $res;
                                        }
                                    };
                                    var hs_sat26DV8A = new $hs.Thunk();
                                    hs_sat26DV8A.evaluateOnce = function () {
                                        var hs_sat26DV8w = new $hs.Thunk();
                                        hs_sat26DV8w.evaluateOnce = function () {
                                            var hs_wild626DV8i = hs_ipv326DUrs;
                                            if (hs_ipv326DUrs.notEvaluated) {
                                                hs_wild626DV8i = hs_ipv326DUrs.hscall();
                                            }
                                            switch (hs_wild626DV8i.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [0];
                                                return $res;
                                            case 2:
                                                var hs_rb926DUsn = hs_wild626DV8i.data[0];
                                                var $res = new $hs.Data(1);
                                                $res.data = [hs_rb926DUsn];
                                                return $res;
                                            case 3:
                                                var hs_rb926DUsv = hs_wild626DV8i.data[0];
                                                var $res = new $hs.Data(1);
                                                $res.data = [hs_rb926DUsv];
                                                return $res;
                                            }
                                        };
                                        var hs_sat26DV8x = new $hs.Data(1);
                                        hs_sat26DV8x.data = [1];
                                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DV8x, hs_sat26DV8w);
                                    };
                                    var hs_tpl26DV8z = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DV8A, hs_sat26DV8j);
                                    var hs_tpl126DUsU = hs_tpl26DV8z.data[0];
                                    var hs_tpl226DV8y = hs_pzq26DUrp;
                                    if (hs_pzq26DUrp.notEvaluated) {
                                        hs_tpl226DV8y = hs_pzq26DUrp.hscall();
                                    }
                                    var hs_tpl326DUsV = hs_tpl226DV8y.data[0];
                                    var hs_sat26DV8B = new $hs.Data(3);
                                    hs_sat26DV8B.data = [hs_tpl126DUsU, hs_rb26DUoY, hs_tpl326DUsV, hs_rb226DUpj, hs_ipv326DUrs, hs_ipv426DUsc, hs_tr26DUpk];
                                    var $res = new $hs.Data(2);
                                    $res.data = [hs_ipv26DUs9, hs_ipv126DUrm, hs_ipv226DUsb, hs_sat26DV8B, hs_rb326DUpl];
                                    return $res;
                                }
                            }
                        }
                    case 3:
                        var hs_rb526DUta = hs_wild226DV6k.data[1];
                        var hs_rb626DUtb = hs_wild226DV6k.data[2];
                        var hs_rb726DUtc = hs_wild226DV6k.data[3];
                        var hs_tl26DUtg = hs_wild226DV6k.data[4];
                        var hs_rb826DUt5 = hs_wild226DV6k.data[5];
                        var hs_tr26DUtd = hs_wild226DV6k.data[6];
                        var hs_a426DUt6 = new $hs.Data(1);
                        hs_a426DUt6.data = [hs_rb826DUt5];
                        var hs_wild326DV8E = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.SystemziEventziUnique.hs_zdfOrdUnique, hs_eta126DUpe, hs_a426DUt6);
                        switch (hs_wild326DV8E.tag) {
                        case 1:
                            var hs_tpl26DV8D = hs_a426DUt6;
                            if (hs_a426DUt6.notEvaluated) {
                                hs_tpl26DV8D = hs_a426DUt6.hscall();
                            }
                            var hs_tpl126DUth = hs_tpl26DV8D.data[0];
                            var hs_sat26DV8G = new $hs.Data(2);
                            hs_sat26DV8G.data = [hs_rb526DUta, hs_rb626DUtb, hs_rb726DUtc, hs_tr26DUtd, hs_rb326DUpl];
                            var hs_wild426DV8F = hs_go26DUpm.hscall(hs_sat26DV8G);
                            switch (hs_wild426DV8F.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [hs_rb26DUoY, hs_rb126DUpi, hs_rb226DUpj, hs_tl26DUtg, hs_tpl126DUth];
                                return $res;
                            case 2:
                                var hs_ipv26DUua = hs_wild426DV8F.data[0];
                                var hs_ipv126DUtq = hs_wild426DV8F.data[1];
                                var hs_ipv226DUub = hs_wild426DV8F.data[2];
                                var hs_ipv326DUtN = hs_wild426DV8F.data[3];
                                var hs_ipv426DUuf = hs_wild426DV8F.data[4];
                                var hs_p26DUto = new $hs.Data(1);
                                hs_p26DUto.data = [hs_rb126DUpi];
                                var hs_pzq26DUtr = new $hs.Data(1);
                                hs_pzq26DUtr.data = [hs_ipv126DUtq];
                                var hs_wild526DV8I = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_p26DUto, hs_pzq26DUtr);
                                switch (hs_wild526DV8I.tag) {
                                case 1:
                                    var hs_sat26DV8W = new $hs.Thunk();
                                    hs_sat26DV8W.evaluateOnce = function () {
                                        var hs_wild626DV8H = hs_ipv326DUtN;
                                        if (hs_ipv326DUtN.notEvaluated) {
                                            hs_wild626DV8H = hs_ipv326DUtN.hscall();
                                        }
                                        switch (hs_wild626DV8H.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [0];
                                            return $res;
                                        case 2:
                                            var hs_rb926DUtW = hs_wild626DV8H.data[0];
                                            var $res = new $hs.Data(1);
                                            $res.data = [hs_rb926DUtW];
                                            return $res;
                                        case 3:
                                            var hs_rb926DUu4 = hs_wild626DV8H.data[0];
                                            var $res = new $hs.Data(1);
                                            $res.data = [hs_rb926DUu4];
                                            return $res;
                                        }
                                    };
                                    var hs_sat26DV9d = new $hs.Thunk();
                                    hs_sat26DV9d.evaluateOnce = function () {
                                        var hs_sat26DV99 = new $hs.Thunk();
                                        hs_sat26DV99.evaluateOnce = function () {
                                            var hs_wild626DV8V = hs_tl26DUtg;
                                            if (hs_tl26DUtg.notEvaluated) {
                                                hs_wild626DV8V = hs_tl26DUtg.hscall();
                                            }
                                            switch (hs_wild626DV8V.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [0];
                                                return $res;
                                            case 2:
                                                var hs_rb926DUtC = hs_wild626DV8V.data[0];
                                                var $res = new $hs.Data(1);
                                                $res.data = [hs_rb926DUtC];
                                                return $res;
                                            case 3:
                                                var hs_rb926DUtK = hs_wild626DV8V.data[0];
                                                var $res = new $hs.Data(1);
                                                $res.data = [hs_rb926DUtK];
                                                return $res;
                                            }
                                        };
                                        var hs_sat26DV9a = new $hs.Data(1);
                                        hs_sat26DV9a.data = [1];
                                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DV9a, hs_sat26DV99);
                                    };
                                    var hs_tpl226DV9c = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DV9d, hs_sat26DV8W);
                                    var hs_tpl326DUuc = hs_tpl226DV9c.data[0];
                                    var hs_tpl426DV9b = hs_p26DUto;
                                    if (hs_p26DUto.notEvaluated) {
                                        hs_tpl426DV9b = hs_p26DUto.hscall();
                                    }
                                    var hs_tpl526DUud = hs_tpl426DV9b.data[0];
                                    var hs_sat26DV9e = new $hs.Data(2);
                                    hs_sat26DV9e.data = [hs_tpl326DUuc, hs_rb26DUoY, hs_tpl526DUud, hs_rb226DUpj, hs_tl26DUtg, hs_tpl126DUth, hs_ipv326DUtN];
                                    var $res = new $hs.Data(2);
                                    $res.data = [hs_ipv26DUua, hs_ipv126DUtq, hs_ipv226DUub, hs_sat26DV9e, hs_ipv426DUuf];
                                    return $res;
                                case 2:
                                    var hs_sat26DV9t = new $hs.Thunk();
                                    hs_sat26DV9t.evaluateOnce = function () {
                                        var hs_wild626DV9f = hs_ipv326DUtN;
                                        if (hs_ipv326DUtN.notEvaluated) {
                                            hs_wild626DV9f = hs_ipv326DUtN.hscall();
                                        }
                                        switch (hs_wild626DV9f.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [0];
                                            return $res;
                                        case 2:
                                            var hs_rb926DUuI = hs_wild626DV9f.data[0];
                                            var $res = new $hs.Data(1);
                                            $res.data = [hs_rb926DUuI];
                                            return $res;
                                        case 3:
                                            var hs_rb926DUuQ = hs_wild626DV9f.data[0];
                                            var $res = new $hs.Data(1);
                                            $res.data = [hs_rb926DUuQ];
                                            return $res;
                                        }
                                    };
                                    var hs_sat26DV9K = new $hs.Thunk();
                                    hs_sat26DV9K.evaluateOnce = function () {
                                        var hs_sat26DV9G = new $hs.Thunk();
                                        hs_sat26DV9G.evaluateOnce = function () {
                                            var hs_wild626DV9s = hs_tl26DUtg;
                                            if (hs_tl26DUtg.notEvaluated) {
                                                hs_wild626DV9s = hs_tl26DUtg.hscall();
                                            }
                                            switch (hs_wild626DV9s.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [0];
                                                return $res;
                                            case 2:
                                                var hs_rb926DUup = hs_wild626DV9s.data[0];
                                                var $res = new $hs.Data(1);
                                                $res.data = [hs_rb926DUup];
                                                return $res;
                                            case 3:
                                                var hs_rb926DUux = hs_wild626DV9s.data[0];
                                                var $res = new $hs.Data(1);
                                                $res.data = [hs_rb926DUux];
                                                return $res;
                                            }
                                        };
                                        var hs_sat26DV9H = new $hs.Data(1);
                                        hs_sat26DV9H.data = [1];
                                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DV9H, hs_sat26DV9G);
                                    };
                                    var hs_tpl226DV9J = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DV9K, hs_sat26DV9t);
                                    var hs_tpl326DUuW = hs_tpl226DV9J.data[0];
                                    var hs_tpl426DV9I = hs_pzq26DUtr;
                                    if (hs_pzq26DUtr.notEvaluated) {
                                        hs_tpl426DV9I = hs_pzq26DUtr.hscall();
                                    }
                                    var hs_tpl526DUuX = hs_tpl426DV9I.data[0];
                                    var hs_sat26DV9L = new $hs.Data(3);
                                    hs_sat26DV9L.data = [hs_tpl326DUuW, hs_ipv26DUua, hs_tpl526DUuX, hs_ipv226DUub, hs_tl26DUtg, hs_tpl126DUth, hs_ipv326DUtN];
                                    var $res = new $hs.Data(2);
                                    $res.data = [hs_rb26DUoY, hs_rb126DUpi, hs_rb226DUpj, hs_sat26DV9L, hs_ipv426DUuf];
                                    return $res;
                                }
                            }
                        case 2:
                            var hs_sat26DV9O = new $hs.Thunk();
                            hs_sat26DV9O.evaluateOnce = function () {
                                var hs_tpl26DV9M = hs_a426DUt6;
                                if (hs_a426DUt6.notEvaluated) {
                                    hs_tpl26DV9M = hs_a426DUt6.hscall();
                                }
                                var hs_tpl126DUv1 = hs_tpl26DV9M.data[0];
                                var $res = new $hs.Data(2);
                                $res.data = [hs_rb26DUoY, hs_rb126DUpi, hs_rb226DUpj, hs_tl26DUtg, hs_tpl126DUv1];
                                return $res;
                            };
                            var hs_wild426DV9N = hs_go26DUpm.hscall(hs_sat26DV9O);
                            switch (hs_wild426DV9N.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [hs_rb526DUta, hs_rb626DUtb, hs_rb726DUtc, hs_tr26DUtd, hs_rb326DUpl];
                                return $res;
                            case 2:
                                var hs_ipv26DUvX = hs_wild426DV9N.data[0];
                                var hs_ipv126DUva = hs_wild426DV9N.data[1];
                                var hs_ipv226DUvZ = hs_wild426DV9N.data[2];
                                var hs_ipv326DUvg = hs_wild426DV9N.data[3];
                                var hs_ipv426DUw0 = hs_wild426DV9N.data[4];
                                var hs_p26DUvb = new $hs.Data(1);
                                hs_p26DUvb.data = [hs_ipv126DUva];
                                var hs_pzq26DUvd = new $hs.Data(1);
                                hs_pzq26DUvd.data = [hs_rb626DUtb];
                                var hs_wild526DV9Q = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_p26DUvb, hs_pzq26DUvd);
                                switch (hs_wild526DV9Q.tag) {
                                case 1:
                                    var hs_sat26DVa4 = new $hs.Thunk();
                                    hs_sat26DVa4.evaluateOnce = function () {
                                        var hs_wild626DV9P = hs_tr26DUtd;
                                        if (hs_tr26DUtd.notEvaluated) {
                                            hs_wild626DV9P = hs_tr26DUtd.hscall();
                                        }
                                        switch (hs_wild626DV9P.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [0];
                                            return $res;
                                        case 2:
                                            var hs_rb926DUvI = hs_wild626DV9P.data[0];
                                            var $res = new $hs.Data(1);
                                            $res.data = [hs_rb926DUvI];
                                            return $res;
                                        case 3:
                                            var hs_rb926DUvQ = hs_wild626DV9P.data[0];
                                            var $res = new $hs.Data(1);
                                            $res.data = [hs_rb926DUvQ];
                                            return $res;
                                        }
                                    };
                                    var hs_sat26DVal = new $hs.Thunk();
                                    hs_sat26DVal.evaluateOnce = function () {
                                        var hs_sat26DVah = new $hs.Thunk();
                                        hs_sat26DVah.evaluateOnce = function () {
                                            var hs_wild626DVa3 = hs_ipv326DUvg;
                                            if (hs_ipv326DUvg.notEvaluated) {
                                                hs_wild626DVa3 = hs_ipv326DUvg.hscall();
                                            }
                                            switch (hs_wild626DVa3.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [0];
                                                return $res;
                                            case 2:
                                                var hs_rb926DUvp = hs_wild626DVa3.data[0];
                                                var $res = new $hs.Data(1);
                                                $res.data = [hs_rb926DUvp];
                                                return $res;
                                            case 3:
                                                var hs_rb926DUvx = hs_wild626DVa3.data[0];
                                                var $res = new $hs.Data(1);
                                                $res.data = [hs_rb926DUvx];
                                                return $res;
                                            }
                                        };
                                        var hs_sat26DVai = new $hs.Data(1);
                                        hs_sat26DVai.data = [1];
                                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DVai, hs_sat26DVah);
                                    };
                                    var hs_tpl26DVak = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DVal, hs_sat26DVa4);
                                    var hs_tpl126DUvW = hs_tpl26DVak.data[0];
                                    var hs_tpl226DVaj = hs_p26DUvb;
                                    if (hs_p26DUvb.notEvaluated) {
                                        hs_tpl226DVaj = hs_p26DUvb.hscall();
                                    }
                                    var hs_tpl326DUvY = hs_tpl226DVaj.data[0];
                                    var hs_sat26DVam = new $hs.Data(2);
                                    hs_sat26DVam.data = [hs_tpl126DUvW, hs_ipv26DUvX, hs_tpl326DUvY, hs_ipv226DUvZ, hs_ipv326DUvg, hs_ipv426DUw0, hs_tr26DUtd];
                                    var $res = new $hs.Data(2);
                                    $res.data = [hs_rb526DUta, hs_rb626DUtb, hs_rb726DUtc, hs_sat26DVam, hs_rb326DUpl];
                                    return $res;
                                case 2:
                                    var hs_sat26DVaB = new $hs.Thunk();
                                    hs_sat26DVaB.evaluateOnce = function () {
                                        var hs_wild626DVan = hs_tr26DUtd;
                                        if (hs_tr26DUtd.notEvaluated) {
                                            hs_wild626DVan = hs_tr26DUtd.hscall();
                                        }
                                        switch (hs_wild626DVan.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [0];
                                            return $res;
                                        case 2:
                                            var hs_rb926DUwu = hs_wild626DVan.data[0];
                                            var $res = new $hs.Data(1);
                                            $res.data = [hs_rb926DUwu];
                                            return $res;
                                        case 3:
                                            var hs_rb926DUwC = hs_wild626DVan.data[0];
                                            var $res = new $hs.Data(1);
                                            $res.data = [hs_rb926DUwC];
                                            return $res;
                                        }
                                    };
                                    var hs_sat26DVaS = new $hs.Thunk();
                                    hs_sat26DVaS.evaluateOnce = function () {
                                        var hs_sat26DVaO = new $hs.Thunk();
                                        hs_sat26DVaO.evaluateOnce = function () {
                                            var hs_wild626DVaA = hs_ipv326DUvg;
                                            if (hs_ipv326DUvg.notEvaluated) {
                                                hs_wild626DVaA = hs_ipv326DUvg.hscall();
                                            }
                                            switch (hs_wild626DVaA.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [0];
                                                return $res;
                                            case 2:
                                                var hs_rb926DUwb = hs_wild626DVaA.data[0];
                                                var $res = new $hs.Data(1);
                                                $res.data = [hs_rb926DUwb];
                                                return $res;
                                            case 3:
                                                var hs_rb926DUwj = hs_wild626DVaA.data[0];
                                                var $res = new $hs.Data(1);
                                                $res.data = [hs_rb926DUwj];
                                                return $res;
                                            }
                                        };
                                        var hs_sat26DVaP = new $hs.Data(1);
                                        hs_sat26DVaP.data = [1];
                                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DVaP, hs_sat26DVaO);
                                    };
                                    var hs_tpl26DVaR = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DVaS, hs_sat26DVaB);
                                    var hs_tpl126DUwI = hs_tpl26DVaR.data[0];
                                    var hs_tpl226DVaQ = hs_pzq26DUvd;
                                    if (hs_pzq26DUvd.notEvaluated) {
                                        hs_tpl226DVaQ = hs_pzq26DUvd.hscall();
                                    }
                                    var hs_tpl326DUwJ = hs_tpl226DVaQ.data[0];
                                    var hs_sat26DVaT = new $hs.Data(3);
                                    hs_sat26DVaT.data = [hs_tpl126DUwI, hs_rb526DUta, hs_tpl326DUwJ, hs_rb726DUtc, hs_ipv326DUvg, hs_ipv426DUw0, hs_tr26DUtd];
                                    var $res = new $hs.Data(2);
                                    $res.data = [hs_ipv26DUvX, hs_ipv126DUva, hs_ipv226DUvZ, hs_sat26DVaT, hs_rb326DUpl];
                                    return $res;
                                }
                            }
                        }
                    }
                }
            }
        };
        return hs_go26DUpm.hscall(hs_eta226DUx5);
    };
    this.hs_fromList.evaluateOnce = function () {
        var hs_sat26DVb2 = new $hs.Func(2);
        hs_sat26DVb2.evaluate = function (hs_ds26DUx8, hs_q26DUxi) {
            var hs_wild26DVaZ = hs_ds26DUx8;
            if (hs_ds26DUx8.notEvaluated) {
                hs_wild26DVaZ = hs_ds26DUx8.hscall();
            }
            var hs_rb26DUxd = hs_wild26DVaZ.data[0];
            var hs_rb126DUxf = hs_wild26DVaZ.data[1];
            var hs_v26DUxh = hs_wild26DVaZ.data[2];
            var hs_sat26DVb0 = new $hs.Data(1);
            hs_sat26DVb0.data = [hs_rb126DUxf];
            var hs_sat26DVb1 = new $hs.Data(1);
            hs_sat26DVb1.data = [hs_rb26DUxd];
            return $hs.modules.SystemziEventziPSQ.hs_insert.hscall(hs_sat26DVb1, hs_sat26DVb0, hs_v26DUxh, hs_q26DUxi);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26DVb2, $hs.modules.SystemziEventziPSQ.hs_Void);
    };
    this.hs_lookup.evaluate = function (hs_k26DUxp, hs_q26DUxE) {
        var hs_zdj26DUxD = new $hs.Func(2);
        hs_zdj26DUxD.evaluate = function (hs_tl26DUxq, hs_tr26DUxC) {
            var hs_sat26DVbb = new $hs.Thunk();
            hs_sat26DVbb.evaluateOnce = function () {
                var hs_wild26DVb3 = hs_tl26DUxq;
                if (hs_tl26DUxq.notEvaluated) {
                    hs_wild26DVb3 = hs_tl26DUxq.hscall();
                }
                switch (hs_wild26DVb3.tag) {
                case 1:
                    var hs_sat26DVb4 = new $hs.Thunk();
                    hs_sat26DVb4.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("empty queue\x00");
                    };
                    var hs_sat26DVb5 = new $hs.Thunk();
                    hs_sat26DVb5.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("maxKey\x00");
                    };
                    return hs_moduleError25tPTE.hscall(hs_sat26DVb5, hs_sat26DVb4);
                case 2:
                    var hs_rb326DUxz = hs_wild26DVb3.data[4];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb326DUxz];
                    return $res;
                }
            };
            var hs_wild26DVba = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.SystemziEventziUnique.hs_zdfOrdUnique, hs_k26DUxp, hs_sat26DVbb);
            switch (hs_wild26DVba.tag) {
            case 1:
                return $hs.modules.SystemziEventziPSQ.hs_lookup.hscall(hs_k26DUxp, hs_tr26DUxC);
            case 2:
                return $hs.modules.SystemziEventziPSQ.hs_lookup.hscall(hs_k26DUxp, hs_tl26DUxq);
            }
        };
        var hs_wild26DVbc = hs_q26DUxE;
        if (hs_q26DUxE.notEvaluated) {
            hs_wild26DVbc = hs_q26DUxE.hscall();
        }
        switch (hs_wild26DVbc.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_rb26DUxN = hs_wild26DVbc.data[0];
            var hs_rb126DUxQ = hs_wild26DVbc.data[1];
            var hs_rb226DUxS = hs_wild26DVbc.data[2];
            var hs_ds26DUxL = hs_wild26DVbc.data[3];
            var hs_rb326DUy8 = hs_wild26DVbc.data[4];
            var hs_wild126DVbd = hs_ds26DUxL;
            if (hs_ds26DUxL.notEvaluated) {
                hs_wild126DVbd = hs_ds26DUxL.hscall();
            }
            switch (hs_wild126DVbd.tag) {
            case 1:
                var hs_sat26DVbf = new $hs.Data(1);
                hs_sat26DVbf.data = [hs_rb26DUxN];
                var hs_wild226DVbe = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.SystemziEventziUnique.hs_zdfEqUnique, hs_k26DUxp, hs_sat26DVbf);
                switch (hs_wild226DVbe.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_sat26DVbg = new $hs.Data(1);
                    hs_sat26DVbg.data = [hs_rb126DUxQ];
                    var hs_sat26DVbh = new $hs.Data(1);
                    hs_sat26DVbh.data = [hs_sat26DVbg, hs_rb226DUxS];
                    var $res = new $hs.Data(2);
                    $res.data = [hs_sat26DVbh];
                    return $res;
                }
            case 2:
                var hs_rb526DUy1 = hs_wild126DVbd.data[1];
                var hs_rb626DUy2 = hs_wild126DVbd.data[2];
                var hs_rb726DUy3 = hs_wild126DVbd.data[3];
                var hs_tl26DUy4 = hs_wild126DVbd.data[4];
                var hs_rb826DUy5 = hs_wild126DVbd.data[5];
                var hs_tr26DUy7 = hs_wild126DVbd.data[6];
                var hs_sat26DVbj = new $hs.Data(2);
                hs_sat26DVbj.data = [hs_rb26DUxN, hs_rb126DUxQ, hs_rb226DUxS, hs_tr26DUy7, hs_rb326DUy8];
                var hs_sat26DVbk = new $hs.Data(2);
                hs_sat26DVbk.data = [hs_rb526DUy1, hs_rb626DUy2, hs_rb726DUy3, hs_tl26DUy4, hs_rb826DUy5];
                return hs_zdj26DUxD.hscall(hs_sat26DVbk, hs_sat26DVbj);
            case 3:
                var hs_rb526DUyk = hs_wild126DVbd.data[1];
                var hs_rb626DUyl = hs_wild126DVbd.data[2];
                var hs_rb726DUym = hs_wild126DVbd.data[3];
                var hs_tl26DUyh = hs_wild126DVbd.data[4];
                var hs_rb826DUyi = hs_wild126DVbd.data[5];
                var hs_tr26DUyn = hs_wild126DVbd.data[6];
                var hs_sat26DVbm = new $hs.Data(2);
                hs_sat26DVbm.data = [hs_rb526DUyk, hs_rb626DUyl, hs_rb726DUym, hs_tr26DUyn, hs_rb326DUy8];
                var hs_sat26DVbn = new $hs.Data(2);
                hs_sat26DVbn.data = [hs_rb26DUxN, hs_rb126DUxQ, hs_rb226DUxS, hs_tl26DUyh, hs_rb826DUyi];
                return hs_zdj26DUxD.hscall(hs_sat26DVbn, hs_sat26DVbm);
            }
        }
    };
    this.hs_null.evaluate = function (hs_ds26DUyq) {
        var hs_wild26DVbo = hs_ds26DUyq;
        if (hs_ds26DUyq.notEvaluated) {
            hs_wild26DVbo = hs_ds26DUyq.hscall();
        }
        switch (hs_wild26DVbo.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    this.hs_sizze.evaluate = function (hs_ds26DUyy) {
        var hs_wild26DVbu = hs_ds26DUyy;
        if (hs_ds26DUyy.notEvaluated) {
            hs_wild26DVbu = hs_ds26DUyy.hscall();
        }
        switch (hs_wild26DVbu.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [0];
            return $res;
        case 2:
            var hs_lt26DUyG = hs_wild26DVbu.data[3];
            var hs_sat26DVbM = new $hs.Thunk();
            hs_sat26DVbM.evaluateOnce = function () {
                var hs_wild126DVbv = hs_lt26DUyG;
                if (hs_lt26DUyG.notEvaluated) {
                    hs_wild126DVbv = hs_lt26DUyG.hscall();
                }
                switch (hs_wild126DVbv.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [0];
                    return $res;
                case 2:
                    var hs_rb426DUyP = hs_wild126DVbv.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb426DUyP];
                    return $res;
                case 3:
                    var hs_rb426DUyX = hs_wild126DVbv.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb426DUyX];
                    return $res;
                }
            };
            var hs_sat26DVbN = new $hs.Data(1);
            hs_sat26DVbN.data = [1];
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DVbN, hs_sat26DVbM);
        }
    };
    this.hs_value.evaluate = function (hs_ds26DUz0) {
        var hs_wild26DVbP = hs_ds26DUz0;
        if (hs_ds26DUz0.notEvaluated) {
            hs_wild26DVbP = hs_ds26DUz0.hscall();
        }
        var hs_ds126DUz5 = hs_wild26DVbP.data[2];
        if (hs_ds126DUz5.notEvaluated) {
            return hs_ds126DUz5.hscall();
        } else {
            return hs_ds126DUz5;
        }
    };
    this.hs_prio.evaluate = function (hs_ds26DUz7) {
        var hs_wild26DVbS = hs_ds26DUz7;
        if (hs_ds26DUz7.notEvaluated) {
            hs_wild26DVbS = hs_ds26DUz7.hscall();
        }
        var hs_rb126DUzc = hs_wild26DVbS.data[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_rb126DUzc];
        return $res;
    };
    hs_atMosts25tPSQ.evaluate = function (hs_pt26DUzf, hs_q26DUzi) {
        var hs_pt126DUzA = hs_pt26DUzf;
        if (hs_pt26DUzf.notEvaluated) {
            hs_pt126DUzA = hs_pt26DUzf.hscall();
        }
        var hs_wild26DUCw = hs_q26DUzi;
        if (hs_q26DUzi.notEvaluated) {
            hs_wild26DUCw = hs_q26DUzi.hscall();
        }
        switch (hs_wild26DUCw.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [hs_a25vvgo, $hs.modules.SystemziEventziPSQ.hs_Void];
            return $res;
        case 2:
            var hs_rb26DUzq = hs_wild26DUCw.data[0];
            var hs_rb126DUzr = hs_wild26DUCw.data[1];
            var hs_rb226DUzs = hs_wild26DUCw.data[2];
            var hs_ds26DUzC = hs_wild26DUCw.data[3];
            var hs_rb326DUzX = hs_wild26DUCw.data[4];
            var hs_e26DUzt = new $hs.Data(1);
            hs_e26DUzt.data = [hs_rb26DUzq, hs_rb126DUzr, hs_rb226DUzs];
            var hs_sat26DVc0 = new $hs.Thunk();
            hs_sat26DVc0.evaluateOnce = function () {
                var hs_wild126DVbW = hs_e26DUzt;
                if (hs_e26DUzt.notEvaluated) {
                    hs_wild126DVbW = hs_e26DUzt.hscall();
                }
                var hs_rb526DUzy = hs_wild126DVbW.data[1];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb526DUzy];
                return $res;
            };
            var hs_wild126DVbZ = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_sat26DVc0, hs_pt126DUzA);
            switch (hs_wild126DVbZ.tag) {
            case 1:
                var hs_wild226DVbY = hs_ds26DUzC;
                if (hs_ds26DUzC.notEvaluated) {
                    hs_wild226DVbY = hs_ds26DUzC.hscall();
                }
                switch (hs_wild226DVbY.tag) {
                case 1:
                    var hs_sat26DVc1 = new $hs.Func(1);
                    hs_sat26DVc1.evaluate = function (hs_as26DUzF) {
                        var $res = new $hs.Data(2);
                        $res.data = [hs_e26DUzt, hs_as26DUzF];
                        return $res;
                    };
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26DVc1, $hs.modules.SystemziEventziPSQ.hs_Void];
                    return $res;
                case 2:
                    var hs_rb526DUA1 = hs_wild226DVbY.data[1];
                    var hs_rb626DUA2 = hs_wild226DVbY.data[2];
                    var hs_rb726DUA3 = hs_wild226DVbY.data[3];
                    var hs_tl26DUA4 = hs_wild226DVbY.data[4];
                    var hs_rb826DUA5 = hs_wild226DVbY.data[5];
                    var hs_tr26DUzW = hs_wild226DVbY.data[6];
                    var hs_ds126DUzZ = new $hs.Thunk();
                    hs_ds126DUzZ.evaluateOnce = function () {
                        var hs_sat26DVc4 = new $hs.Thunk();
                        hs_sat26DVc4.evaluateOnce = function () {
                            var hs_tpl26DVc2 = hs_e26DUzt;
                            if (hs_e26DUzt.notEvaluated) {
                                hs_tpl26DVc2 = hs_e26DUzt.hscall();
                            }
                            var hs_tpl126DUzT = hs_tpl26DVc2.data[0];
                            var hs_tpl226DUzU = hs_tpl26DVc2.data[1];
                            var hs_tpl326DUzV = hs_tpl26DVc2.data[2];
                            var $res = new $hs.Data(2);
                            $res.data = [hs_tpl126DUzT, hs_tpl226DUzU, hs_tpl326DUzV, hs_tr26DUzW, hs_rb326DUzX];
                            return $res;
                        };
                        return hs_atMosts25tPSQ.hscall(hs_pt126DUzA, hs_sat26DVc4);
                    };
                    var hs_ds226DUA7 = new $hs.Thunk();
                    hs_ds226DUA7.evaluateOnce = function () {
                        var hs_sat26DVc5 = new $hs.Data(2);
                        hs_sat26DVc5.data = [hs_rb526DUA1, hs_rb626DUA2, hs_rb726DUA3, hs_tl26DUA4, hs_rb826DUA5];
                        return hs_atMosts25tPSQ.hscall(hs_pt126DUzA, hs_sat26DVc5);
                    };
                    var hs_sat26DVck = new $hs.Thunk();
                    hs_sat26DVck.evaluateOnce = function () {
                        var hs_wild326DVc9 = hs_ds226DUA7;
                        if (hs_ds226DUA7.notEvaluated) {
                            hs_wild326DVc9 = hs_ds226DUA7.hscall();
                        }
                        var hs_qzq26DUAn = hs_wild326DVc9.data[1];
                        var hs_wild426DUAD = hs_qzq26DUAn;
                        if (hs_qzq26DUAn.notEvaluated) {
                            hs_wild426DUAD = hs_qzq26DUAn.hscall();
                        }
                        switch (hs_wild426DUAD.tag) {
                        case 1:
                            var hs_wild526DVc7 = hs_ds126DUzZ;
                            if (hs_ds126DUzZ.notEvaluated) {
                                hs_wild526DVc7 = hs_ds126DUzZ.hscall();
                            }
                            var hs_qzqzq26DUAs = hs_wild526DVc7.data[1];
                            if (hs_qzqzq26DUAs.notEvaluated) {
                                return hs_qzqzq26DUAs.hscall();
                            } else {
                                return hs_qzqzq26DUAs;
                            }
                        case 2:
                            var hs_ipv126DUAQ = hs_wild426DUAD.data[0];
                            var hs_ipv226DUAK = hs_wild426DUAD.data[1];
                            var hs_ipv326DUAS = hs_wild426DUAD.data[2];
                            var hs_ipv426DUAT = hs_wild426DUAD.data[3];
                            var hs_ipv526DUAU = hs_wild426DUAD.data[4];
                            var hs_wild526DVcc = hs_ds126DUzZ;
                            if (hs_ds126DUzZ.notEvaluated) {
                                hs_wild526DVcc = hs_ds126DUzZ.hscall();
                            }
                            var hs_qzqzq26DUAB = hs_wild526DVcc.data[1];
                            var hs_wild626DVca = hs_qzqzq26DUAB;
                            if (hs_qzqzq26DUAB.notEvaluated) {
                                hs_wild626DVca = hs_qzqzq26DUAB.hscall();
                            }
                            switch (hs_wild626DVca.tag) {
                            case 1:
                                if (hs_wild426DUAD.notEvaluated) {
                                    return hs_wild426DUAD.hscall();
                                } else {
                                    return hs_wild426DUAD;
                                }
                            case 2:
                                var hs_ipv626DUAY = hs_wild626DVca.data[0];
                                var hs_ipv726DUAN = hs_wild626DVca.data[1];
                                var hs_ipv826DUAZ = hs_wild626DVca.data[2];
                                var hs_ipv926DUAW = hs_wild626DVca.data[3];
                                var hs_ipv1026DUB1 = hs_wild626DVca.data[4];
                                var hs_p26DUAL = new $hs.Data(1);
                                hs_p26DUAL.data = [hs_ipv226DUAK];
                                var hs_pzq26DUAO = new $hs.Data(1);
                                hs_pzq26DUAO.data = [hs_ipv726DUAN];
                                var hs_wild726DVcd = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_p26DUAL, hs_pzq26DUAO);
                                switch (hs_wild726DVcd.tag) {
                                case 1:
                                    var hs_sat26DVce = new $hs.Data(1);
                                    hs_sat26DVce.data = [hs_ipv526DUAU];
                                    var hs_sat26DVcf = new $hs.Data(1);
                                    hs_sat26DVcf.data = [hs_ipv126DUAQ];
                                    var hs_tpl26DUB0 = hs_lbalance25tPT6.hscall(hs_sat26DVcf, hs_p26DUAL, hs_ipv326DUAS, hs_ipv426DUAT, hs_sat26DVce, hs_ipv926DUAW);
                                    var $res = new $hs.Data(2);
                                    $res.data = [hs_ipv626DUAY, hs_ipv726DUAN, hs_ipv826DUAZ, hs_tpl26DUB0, hs_ipv1026DUB1];
                                    return $res;
                                case 2:
                                    var hs_sat26DVcg = new $hs.Data(1);
                                    hs_sat26DVcg.data = [hs_ipv526DUAU];
                                    var hs_sat26DVch = new $hs.Data(1);
                                    hs_sat26DVch.data = [hs_ipv626DUAY];
                                    var hs_tpl26DUB5 = hs_rbalance25tPT8.hscall(hs_sat26DVch, hs_pzq26DUAO, hs_ipv826DUAZ, hs_ipv426DUAT, hs_sat26DVcg, hs_ipv926DUAW);
                                    var $res = new $hs.Data(2);
                                    $res.data = [hs_ipv126DUAQ, hs_ipv226DUAK, hs_ipv326DUAS, hs_tpl26DUB5, hs_ipv1026DUB1];
                                    return $res;
                                }
                            }
                        }
                    };
                    var hs_sat26DVco = new $hs.Func(1);
                    hs_sat26DVco.evaluate = function (hs_as26DUAf) {
                        var hs_wild326DVcj = hs_ds226DUA7;
                        if (hs_ds226DUA7.notEvaluated) {
                            hs_wild326DVcj = hs_ds226DUA7.hscall();
                        }
                        var hs_sequ26DUAi = hs_wild326DVcj.data[0];
                        var hs_sat26DVcn = new $hs.Thunk();
                        hs_sat26DVcn.evaluateOnce = function () {
                            var hs_wild426DVci = hs_ds126DUzZ;
                            if (hs_ds126DUzZ.notEvaluated) {
                                hs_wild426DVci = hs_ds126DUzZ.hscall();
                            }
                            var hs_sequzq26DUAg = hs_wild426DVci.data[0];
                            return hs_sequzq26DUAg.hscall(hs_as26DUAf);
                        };
                        return hs_sequ26DUAi.hscall(hs_sat26DVcn);
                    };
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26DVco, hs_sat26DVck];
                    return $res;
                case 3:
                    var hs_rb526DUBf = hs_wild226DVbY.data[1];
                    var hs_rb626DUBg = hs_wild226DVbY.data[2];
                    var hs_rb726DUBh = hs_wild226DVbY.data[3];
                    var hs_tl26DUBt = hs_wild226DVbY.data[4];
                    var hs_rb826DUBu = hs_wild226DVbY.data[5];
                    var hs_tr26DUBi = hs_wild226DVbY.data[6];
                    var hs_ds126DUBk = new $hs.Thunk();
                    hs_ds126DUBk.evaluateOnce = function () {
                        var hs_sat26DVcq = new $hs.Data(2);
                        hs_sat26DVcq.data = [hs_rb526DUBf, hs_rb626DUBg, hs_rb726DUBh, hs_tr26DUBi, hs_rb326DUzX];
                        return hs_atMosts25tPSQ.hscall(hs_pt126DUzA, hs_sat26DVcq);
                    };
                    var hs_ds226DUBw = new $hs.Thunk();
                    hs_ds226DUBw.evaluateOnce = function () {
                        var hs_sat26DVcs = new $hs.Thunk();
                        hs_sat26DVcs.evaluateOnce = function () {
                            var hs_tpl26DVcr = hs_e26DUzt;
                            if (hs_e26DUzt.notEvaluated) {
                                hs_tpl26DVcr = hs_e26DUzt.hscall();
                            }
                            var hs_tpl126DUBq = hs_tpl26DVcr.data[0];
                            var hs_tpl226DUBr = hs_tpl26DVcr.data[1];
                            var hs_tpl326DUBs = hs_tpl26DVcr.data[2];
                            var $res = new $hs.Data(2);
                            $res.data = [hs_tpl126DUBq, hs_tpl226DUBr, hs_tpl326DUBs, hs_tl26DUBt, hs_rb826DUBu];
                            return $res;
                        };
                        return hs_atMosts25tPSQ.hscall(hs_pt126DUzA, hs_sat26DVcs);
                    };
                    var hs_sat26DVcH = new $hs.Thunk();
                    hs_sat26DVcH.evaluateOnce = function () {
                        var hs_wild326DVcw = hs_ds226DUBw;
                        if (hs_ds226DUBw.notEvaluated) {
                            hs_wild326DVcw = hs_ds226DUBw.hscall();
                        }
                        var hs_qzq26DUBM = hs_wild326DVcw.data[1];
                        var hs_wild426DUC2 = hs_qzq26DUBM;
                        if (hs_qzq26DUBM.notEvaluated) {
                            hs_wild426DUC2 = hs_qzq26DUBM.hscall();
                        }
                        switch (hs_wild426DUC2.tag) {
                        case 1:
                            var hs_wild526DVcu = hs_ds126DUBk;
                            if (hs_ds126DUBk.notEvaluated) {
                                hs_wild526DVcu = hs_ds126DUBk.hscall();
                            }
                            var hs_qzqzq26DUBR = hs_wild526DVcu.data[1];
                            if (hs_qzqzq26DUBR.notEvaluated) {
                                return hs_qzqzq26DUBR.hscall();
                            } else {
                                return hs_qzqzq26DUBR;
                            }
                        case 2:
                            var hs_ipv126DUCf = hs_wild426DUC2.data[0];
                            var hs_ipv226DUC9 = hs_wild426DUC2.data[1];
                            var hs_ipv326DUCh = hs_wild426DUC2.data[2];
                            var hs_ipv426DUCi = hs_wild426DUC2.data[3];
                            var hs_ipv526DUCj = hs_wild426DUC2.data[4];
                            var hs_wild526DVcz = hs_ds126DUBk;
                            if (hs_ds126DUBk.notEvaluated) {
                                hs_wild526DVcz = hs_ds126DUBk.hscall();
                            }
                            var hs_qzqzq26DUC0 = hs_wild526DVcz.data[1];
                            var hs_wild626DVcx = hs_qzqzq26DUC0;
                            if (hs_qzqzq26DUC0.notEvaluated) {
                                hs_wild626DVcx = hs_qzqzq26DUC0.hscall();
                            }
                            switch (hs_wild626DVcx.tag) {
                            case 1:
                                if (hs_wild426DUC2.notEvaluated) {
                                    return hs_wild426DUC2.hscall();
                                } else {
                                    return hs_wild426DUC2;
                                }
                            case 2:
                                var hs_ipv626DUCn = hs_wild626DVcx.data[0];
                                var hs_ipv726DUCc = hs_wild626DVcx.data[1];
                                var hs_ipv826DUCo = hs_wild626DVcx.data[2];
                                var hs_ipv926DUCl = hs_wild626DVcx.data[3];
                                var hs_ipv1026DUCq = hs_wild626DVcx.data[4];
                                var hs_p26DUCa = new $hs.Data(1);
                                hs_p26DUCa.data = [hs_ipv226DUC9];
                                var hs_pzq26DUCd = new $hs.Data(1);
                                hs_pzq26DUCd.data = [hs_ipv726DUCc];
                                var hs_wild726DVcA = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_p26DUCa, hs_pzq26DUCd);
                                switch (hs_wild726DVcA.tag) {
                                case 1:
                                    var hs_sat26DVcB = new $hs.Data(1);
                                    hs_sat26DVcB.data = [hs_ipv526DUCj];
                                    var hs_sat26DVcC = new $hs.Data(1);
                                    hs_sat26DVcC.data = [hs_ipv126DUCf];
                                    var hs_tpl26DUCp = hs_lbalance25tPT6.hscall(hs_sat26DVcC, hs_p26DUCa, hs_ipv326DUCh, hs_ipv426DUCi, hs_sat26DVcB, hs_ipv926DUCl);
                                    var $res = new $hs.Data(2);
                                    $res.data = [hs_ipv626DUCn, hs_ipv726DUCc, hs_ipv826DUCo, hs_tpl26DUCp, hs_ipv1026DUCq];
                                    return $res;
                                case 2:
                                    var hs_sat26DVcD = new $hs.Data(1);
                                    hs_sat26DVcD.data = [hs_ipv526DUCj];
                                    var hs_sat26DVcE = new $hs.Data(1);
                                    hs_sat26DVcE.data = [hs_ipv626DUCn];
                                    var hs_tpl26DUCu = hs_rbalance25tPT8.hscall(hs_sat26DVcE, hs_pzq26DUCd, hs_ipv826DUCo, hs_ipv426DUCi, hs_sat26DVcD, hs_ipv926DUCl);
                                    var $res = new $hs.Data(2);
                                    $res.data = [hs_ipv126DUCf, hs_ipv226DUC9, hs_ipv326DUCh, hs_tpl26DUCu, hs_ipv1026DUCq];
                                    return $res;
                                }
                            }
                        }
                    };
                    var hs_sat26DVcL = new $hs.Func(1);
                    hs_sat26DVcL.evaluate = function (hs_as26DUBE) {
                        var hs_wild326DVcG = hs_ds226DUBw;
                        if (hs_ds226DUBw.notEvaluated) {
                            hs_wild326DVcG = hs_ds226DUBw.hscall();
                        }
                        var hs_sequ26DUBH = hs_wild326DVcG.data[0];
                        var hs_sat26DVcK = new $hs.Thunk();
                        hs_sat26DVcK.evaluateOnce = function () {
                            var hs_wild426DVcF = hs_ds126DUBk;
                            if (hs_ds126DUBk.notEvaluated) {
                                hs_wild426DVcF = hs_ds126DUBk.hscall();
                            }
                            var hs_sequzq26DUBF = hs_wild426DVcF.data[0];
                            return hs_sequzq26DUBF.hscall(hs_as26DUBE);
                        };
                        return hs_sequ26DUBH.hscall(hs_sat26DVcK);
                    };
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26DVcL, hs_sat26DVcH];
                    return $res;
                }
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [hs_a25vvgo, hs_wild26DUCw];
                return $res;
            }
        }
    };
    this.hs_atMost.evaluate = function (hs_pt26DUCA, hs_q26DUCB) {
        var hs_ds26DUCC = new $hs.Thunk();
        hs_ds26DUCC.evaluateOnce = function () {
            return hs_atMosts25tPSQ.hscall(hs_pt26DUCA, hs_q26DUCB);
        };
        var hs_sat26DVcP = new $hs.Thunk();
        hs_sat26DVcP.evaluateOnce = function () {
            var hs_wild26DVcN = hs_ds26DUCC;
            if (hs_ds26DUCC.notEvaluated) {
                hs_wild26DVcN = hs_ds26DUCC.hscall();
            }
            var hs_qzq26DUCL = hs_wild26DVcN.data[1];
            if (hs_qzq26DUCL.notEvaluated) {
                return hs_qzq26DUCL.hscall();
            } else {
                return hs_qzq26DUCL;
            }
        };
        var hs_sat26DVcR = new $hs.Thunk();
        hs_sat26DVcR.evaluateOnce = function () {
            var hs_wild26DVcO = hs_ds26DUCC;
            if (hs_ds26DUCC.notEvaluated) {
                hs_wild26DVcO = hs_ds26DUCC.hscall();
            }
            var hs_sequ26DUCG = hs_wild26DVcO.data[0];
            return hs_sequ26DUCG.hscall($hs.modules.GHCziTypes.hs_ZMZN);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DVcR, hs_sat26DVcP];
        return $res;
    };
    this.hs_key.evaluate = function (hs_ds26DUCO) {
        var hs_wild26DVcS = hs_ds26DUCO;
        if (hs_ds26DUCO.notEvaluated) {
            hs_wild26DVcS = hs_ds26DUCO.hscall();
        }
        var hs_rb26DUCT = hs_wild26DVcS.data[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_rb26DUCT];
        return $res;
    };
    hs_zdcshowsPrec25vw6F.evaluate = function (hs_zddShow26DUCY) {
        var hs_zddShow126DUCZ = new $hs.Thunk();
        hs_zddShow126DUCZ.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZMZN.hscall(hs_zddShow26DUCY);
        };
        var hs_sat26DVcW = new $hs.Func(2);
        hs_sat26DVcW.evaluate = function (hs_d26DUD2, hs_a326DUD3) {
            var hs_sat26DVcV = new $hs.Thunk();
            hs_sat26DVcV.evaluateOnce = function () {
                return hs_a326DUD3.hscall($hs.modules.GHCziTypes.hs_ZMZN);
            };
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126DUCZ, hs_d26DUD2, hs_sat26DVcV);
        };
        if (hs_sat26DVcW.notEvaluated) {
            return hs_sat26DVcW.hscall();
        } else {
            return hs_sat26DVcW;
        }
    };
    this.hs_zdfShowSequ.evaluate = function (hs_zddShow26DUDb) {
        var hs_sat26DVcX = new $hs.Thunk();
        hs_sat26DVcX.evaluateOnce = function () {
            return hs_zdcshowList25vw6R.hscall(hs_zddShow26DUDb);
        };
        var hs_sat26DVcY = new $hs.Thunk();
        hs_sat26DVcY.evaluateOnce = function () {
            return hs_zdcshow25vw6T.hscall(hs_zddShow26DUDb);
        };
        var hs_sat26DVcZ = new $hs.Thunk();
        hs_sat26DVcZ.evaluateOnce = function () {
            return hs_zdcshowsPrec25vw6F.hscall(hs_zddShow26DUDb);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DVcZ, hs_sat26DVcY, hs_sat26DVcX];
        return $res;
    };
    hs_zdcshowList25vw6R.evaluate = function (hs_zddShow26DUDg) {
        var hs_sat26DVd0 = new $hs.Thunk();
        hs_sat26DVd0.evaluateOnce = function () {
            return $hs.modules.SystemziEventziPSQ.hs_zdfShowSequ.hscall(hs_zddShow26DUDg);
        };
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall(hs_sat26DVd0);
    };
    hs_zdcshow25vw6T.evaluate = function (hs_zddShow26DUDj) {
        var hs_sat26DVd1 = new $hs.Thunk();
        hs_sat26DVd1.evaluateOnce = function () {
            return $hs.modules.SystemziEventziPSQ.hs_zdfShowSequ.hscall(hs_zddShow26DUDj);
        };
        return $hs.modules.GHCziShow.hs_zddmshow.hscall(hs_sat26DVd1);
    };
    hs_zdcshowsPrec125vw76.evaluate = function (hs_zddShow26DUDS, hs_a326DUDv, hs_ds26DUDq) {
        var hs_wild26DVd2 = hs_ds26DUDq;
        if (hs_ds26DUDq.notEvaluated) {
            hs_wild26DVd2 = hs_ds26DUDq.hscall();
        }
        var hs_rb26DUDD = hs_wild26DVd2.data[0];
        var hs_rb126DUDL = hs_wild26DVd2.data[1];
        var hs_b326DUDU = hs_wild26DVd2.data[2];
        var hs_sat26DVdy = new $hs.Thunk();
        hs_sat26DVdy.evaluateOnce = function () {
            var hs_sat26DVdv = new $hs.Thunk();
            hs_sat26DVdv.evaluateOnce = function () {
                var hs_sat26DVds = new $hs.Thunk();
                hs_sat26DVds.evaluateOnce = function () {
                    var hs_sat26DVdo = new $hs.Thunk();
                    hs_sat26DVdo.evaluateOnce = function () {
                        var hs_sat26DVdl = new $hs.Thunk();
                        hs_sat26DVdl.evaluateOnce = function () {
                            var hs_sat26DVdi = new $hs.Thunk();
                            hs_sat26DVdi.evaluateOnce = function () {
                                var hs_sat26DVde = new $hs.Thunk();
                                hs_sat26DVde.evaluateOnce = function () {
                                    var hs_sat26DVdb = new $hs.Thunk();
                                    hs_sat26DVdb.evaluateOnce = function () {
                                        var hs_sat26DVd8 = new $hs.Thunk();
                                        hs_sat26DVd8.evaluateOnce = function () {
                                            var hs_sat26DVd5 = new $hs.Thunk();
                                            hs_sat26DVd5.evaluateOnce = function () {
                                                var hs_sat26DVd3 = new $hs.Data(1);
                                                hs_sat26DVd3.data = ["}"];
                                                var hs_sat26DVd4 = new $hs.Data(2);
                                                hs_sat26DVd4.data = [hs_sat26DVd3, $hs.modules.GHCziTypes.hs_ZMZN];
                                                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DVd4);
                                            };
                                            var hs_sat26DVd7 = new $hs.Thunk();
                                            hs_sat26DVd7.evaluateOnce = function () {
                                                var hs_sat26DVd6 = new $hs.Data(1);
                                                hs_sat26DVd6.data = [0];
                                                return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26DUDS, hs_sat26DVd6, hs_b326DUDU);
                                            };
                                            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DVd7, hs_sat26DVd5);
                                        };
                                        var hs_sat26DVda = new $hs.Thunk();
                                        hs_sat26DVda.evaluateOnce = function () {
                                            var hs_sat26DVd9 = new $hs.Thunk();
                                            hs_sat26DVd9.evaluateOnce = function () {
                                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("value = \x00");
                                            };
                                            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DVd9);
                                        };
                                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DVda, hs_sat26DVd8);
                                    };
                                    var hs_sat26DVdd = new $hs.Thunk();
                                    hs_sat26DVdd.evaluateOnce = function () {
                                        var hs_sat26DVdc = new $hs.Thunk();
                                        hs_sat26DVdc.evaluateOnce = function () {
                                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall(", \x00");
                                        };
                                        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DVdc);
                                    };
                                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DVdd, hs_sat26DVdb);
                                };
                                var hs_sat26DVdh = new $hs.Thunk();
                                hs_sat26DVdh.evaluateOnce = function () {
                                    var hs_sat26DVdf = new $hs.Data(1);
                                    hs_sat26DVdf.data = [hs_rb126DUDL];
                                    var hs_sat26DVdg = new $hs.Data(1);
                                    hs_sat26DVdg.data = [0];
                                    return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziFloat.hs_zdfShowDouble, hs_sat26DVdg, hs_sat26DVdf);
                                };
                                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DVdh, hs_sat26DVde);
                            };
                            var hs_sat26DVdk = new $hs.Thunk();
                            hs_sat26DVdk.evaluateOnce = function () {
                                var hs_sat26DVdj = new $hs.Thunk();
                                hs_sat26DVdj.evaluateOnce = function () {
                                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("prio = \x00");
                                };
                                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DVdj);
                            };
                            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DVdk, hs_sat26DVdi);
                        };
                        var hs_sat26DVdn = new $hs.Thunk();
                        hs_sat26DVdn.evaluateOnce = function () {
                            var hs_sat26DVdm = new $hs.Thunk();
                            hs_sat26DVdm.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall(", \x00");
                            };
                            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DVdm);
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DVdn, hs_sat26DVdl);
                    };
                    var hs_sat26DVdr = new $hs.Thunk();
                    hs_sat26DVdr.evaluateOnce = function () {
                        var hs_sat26DVdp = new $hs.Data(1);
                        hs_sat26DVdp.data = [hs_rb26DUDD];
                        var hs_sat26DVdq = new $hs.Data(1);
                        hs_sat26DVdq.data = [0];
                        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.SystemziEventziUnique.hs_zdfShowUnique, hs_sat26DVdq, hs_sat26DVdp);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DVdr, hs_sat26DVdo);
                };
                var hs_sat26DVdu = new $hs.Thunk();
                hs_sat26DVdu.evaluateOnce = function () {
                    var hs_sat26DVdt = new $hs.Thunk();
                    hs_sat26DVdt.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("key = \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DVdt);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DVdu, hs_sat26DVds);
            };
            var hs_sat26DVdx = new $hs.Thunk();
            hs_sat26DVdx.evaluateOnce = function () {
                var hs_sat26DVdw = new $hs.Thunk();
                hs_sat26DVdw.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("E {\x00");
                };
                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DVdw);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DVdx, hs_sat26DVdv);
        };
        var hs_sat26DVdA = new $hs.Thunk();
        hs_sat26DVdA.evaluateOnce = function () {
            var hs_sat26DVdz = new $hs.Data(1);
            hs_sat26DVdz.data = [11];
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_a326DUDv, hs_sat26DVdz);
        };
        return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DVdA, hs_sat26DVdy);
    };
    this.hs_zdfShowElem.evaluate = function (hs_zddShow26DUEd) {
        var hs_sat26DVdB = new $hs.Thunk();
        hs_sat26DVdB.evaluateOnce = function () {
            return hs_zdcshowList125vw7T.hscall(hs_zddShow26DUEd);
        };
        var hs_sat26DVdC = new $hs.Thunk();
        hs_sat26DVdC.evaluateOnce = function () {
            return hs_zdcshow125vw7V.hscall(hs_zddShow26DUEd);
        };
        var hs_sat26DVdD = new $hs.Func(2);
        hs_sat26DVdD.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcshowsPrec125vw76.hscall(hs_zddShow26DUEd, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DVdD, hs_sat26DVdC, hs_sat26DVdB];
        return $res;
    };
    hs_zdcshowList125vw7T.evaluate = function (hs_zddShow26DUEi) {
        var hs_sat26DVdG = new $hs.Thunk();
        hs_sat26DVdG.evaluateOnce = function () {
            var hs_sat26DVdE = new $hs.Data(1);
            hs_sat26DVdE.data = [0];
            var hs_sat26DVdF = $hs.modules.SystemziEventziPSQ.hs_zdfShowElem.hscall(hs_zddShow26DUEi);
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_sat26DVdF, hs_sat26DVdE);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DVdG);
    };
    hs_zdcshow125vw7V.evaluate = function (hs_zddShow26DUEn) {
        var hs_sat26DVdH = new $hs.Thunk();
        hs_sat26DVdH.evaluateOnce = function () {
            return $hs.modules.SystemziEventziPSQ.hs_zdfShowElem.hscall(hs_zddShow26DUEn);
        };
        return $hs.modules.GHCziShow.hs_zddmshow.hscall(hs_sat26DVdH);
    };
    this.hs_zdfShowLTree.evaluate = function (hs_zddShow26DUEw) {
        var hs_sat26DVdI = new $hs.Thunk();
        hs_sat26DVdI.evaluateOnce = function () {
            return hs_zdcshowList225vw8a.hscall(hs_zddShow26DUEw);
        };
        var hs_sat26DVdJ = new $hs.Thunk();
        hs_sat26DVdJ.evaluateOnce = function () {
            return hs_zdcshow225vw8c.hscall(hs_zddShow26DUEw);
        };
        var hs_sat26DVdK = new $hs.Thunk();
        hs_sat26DVdK.evaluateOnce = function () {
            return hs_zdcshowsPrec225vw8e.hscall(hs_zddShow26DUEw);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DVdK, hs_sat26DVdJ, hs_sat26DVdI];
        return $res;
    };
    hs_zdcshowList225vw8a.evaluate = function (hs_zddShow26DUEB) {
        var hs_sat26DVdN = new $hs.Thunk();
        hs_sat26DVdN.evaluateOnce = function () {
            var hs_sat26DVdL = new $hs.Data(1);
            hs_sat26DVdL.data = [0];
            var hs_sat26DVdM = $hs.modules.SystemziEventziPSQ.hs_zdfShowLTree.hscall(hs_zddShow26DUEB);
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_sat26DVdM, hs_sat26DVdL);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DVdN);
    };
    hs_zdcshow225vw8c.evaluate = function (hs_zddShow26DUEG) {
        var hs_sat26DVdO = new $hs.Thunk();
        hs_sat26DVdO.evaluateOnce = function () {
            return $hs.modules.SystemziEventziPSQ.hs_zdfShowLTree.hscall(hs_zddShow26DUEG);
        };
        return $hs.modules.GHCziShow.hs_zddmshow.hscall(hs_sat26DVdO);
    };
    hs_zdcshowsPrec225vw8e.evaluate = function (hs_zddShow26DUEK) {
        var hs_zddShow126DUEL = new $hs.Thunk();
        hs_zddShow126DUEL.evaluateOnce = function () {
            return $hs.modules.SystemziEventziPSQ.hs_zdfShowLTree.hscall(hs_zddShow26DUEK);
        };
        var hs_zddShow226DUEN = new $hs.Thunk();
        hs_zddShow226DUEN.evaluateOnce = function () {
            return $hs.modules.SystemziEventziPSQ.hs_zdfShowElem.hscall(hs_zddShow26DUEK);
        };
        var hs_sat26DVeH = new $hs.Func(2);
        hs_sat26DVeH.evaluate = function (hs_ds26DUF0, hs_ds126DUEQ) {
            var hs_wild26DVdP = hs_ds126DUEQ;
            if (hs_ds126DUEQ.notEvaluated) {
                hs_wild26DVdP = hs_ds126DUEQ.hscall();
            }
            switch (hs_wild26DVdP.tag) {
            case 1:
                var hs_sat26DVdQ = new $hs.Thunk();
                hs_sat26DVdQ.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Start\x00");
                };
                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DVdQ);
            case 2:
                var hs_rb26DUF6 = hs_wild26DVdP.data[0];
                var hs_rb126DUFa = hs_wild26DVdP.data[1];
                var hs_rb226DUFb = hs_wild26DVdP.data[2];
                var hs_rb326DUFc = hs_wild26DVdP.data[3];
                var hs_b326DUFg = hs_wild26DVdP.data[4];
                var hs_rb426DUFj = hs_wild26DVdP.data[5];
                var hs_b526DUFn = hs_wild26DVdP.data[6];
                var hs_sat26DVee = new $hs.Thunk();
                hs_sat26DVee.evaluateOnce = function () {
                    var hs_sat26DVeb = new $hs.Thunk();
                    hs_sat26DVeb.evaluateOnce = function () {
                        var hs_sat26DVe7 = new $hs.Thunk();
                        hs_sat26DVe7.evaluateOnce = function () {
                            var hs_sat26DVe6 = new $hs.Thunk();
                            hs_sat26DVe6.evaluateOnce = function () {
                                var hs_sat26DVe2 = new $hs.Thunk();
                                hs_sat26DVe2.evaluateOnce = function () {
                                    var hs_sat26DVe1 = new $hs.Thunk();
                                    hs_sat26DVe1.evaluateOnce = function () {
                                        var hs_sat26DVdY = new $hs.Thunk();
                                        hs_sat26DVdY.evaluateOnce = function () {
                                            var hs_sat26DVdX = new $hs.Thunk();
                                            hs_sat26DVdX.evaluateOnce = function () {
                                                var hs_sat26DVdT = new $hs.Thunk();
                                                hs_sat26DVdT.evaluateOnce = function () {
                                                    var hs_sat26DVdS = new $hs.Thunk();
                                                    hs_sat26DVdS.evaluateOnce = function () {
                                                        var hs_sat26DVdR = new $hs.Data(1);
                                                        hs_sat26DVdR.data = [11];
                                                        return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126DUEL, hs_sat26DVdR, hs_b526DUFn);
                                                    };
                                                    return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.GHCziShow.hs_showSpace, hs_sat26DVdS);
                                                };
                                                var hs_sat26DVdW = new $hs.Thunk();
                                                hs_sat26DVdW.evaluateOnce = function () {
                                                    var hs_sat26DVdU = new $hs.Data(1);
                                                    hs_sat26DVdU.data = [hs_rb426DUFj];
                                                    var hs_sat26DVdV = new $hs.Data(1);
                                                    hs_sat26DVdV.data = [11];
                                                    return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.SystemziEventziUnique.hs_zdfShowUnique, hs_sat26DVdV, hs_sat26DVdU);
                                                };
                                                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DVdW, hs_sat26DVdT);
                                            };
                                            return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.GHCziShow.hs_showSpace, hs_sat26DVdX);
                                        };
                                        var hs_sat26DVe0 = new $hs.Thunk();
                                        hs_sat26DVe0.evaluateOnce = function () {
                                            var hs_sat26DVdZ = new $hs.Data(1);
                                            hs_sat26DVdZ.data = [11];
                                            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126DUEL, hs_sat26DVdZ, hs_b326DUFg);
                                        };
                                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DVe0, hs_sat26DVdY);
                                    };
                                    return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.GHCziShow.hs_showSpace, hs_sat26DVe1);
                                };
                                var hs_sat26DVe5 = new $hs.Thunk();
                                hs_sat26DVe5.evaluateOnce = function () {
                                    var hs_sat26DVe3 = new $hs.Data(1);
                                    hs_sat26DVe3.data = [hs_rb126DUFa, hs_rb226DUFb, hs_rb326DUFc];
                                    var hs_sat26DVe4 = new $hs.Data(1);
                                    hs_sat26DVe4.data = [11];
                                    return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow226DUEN, hs_sat26DVe4, hs_sat26DVe3);
                                };
                                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DVe5, hs_sat26DVe2);
                            };
                            return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.GHCziShow.hs_showSpace, hs_sat26DVe6);
                        };
                        var hs_sat26DVea = new $hs.Thunk();
                        hs_sat26DVea.evaluateOnce = function () {
                            var hs_sat26DVe8 = new $hs.Data(1);
                            hs_sat26DVe8.data = [hs_rb26DUF6];
                            var hs_sat26DVe9 = new $hs.Data(1);
                            hs_sat26DVe9.data = [11];
                            return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_sat26DVe9, hs_sat26DVe8);
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DVea, hs_sat26DVe7);
                    };
                    var hs_sat26DVed = new $hs.Thunk();
                    hs_sat26DVed.evaluateOnce = function () {
                        var hs_sat26DVec = new $hs.Thunk();
                        hs_sat26DVec.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("LLoser \x00");
                        };
                        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DVec);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DVed, hs_sat26DVeb);
                };
                var hs_sat26DVeg = new $hs.Thunk();
                hs_sat26DVeg.evaluateOnce = function () {
                    var hs_sat26DVef = new $hs.Data(1);
                    hs_sat26DVef.data = [11];
                    return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_ds26DUF0, hs_sat26DVef);
                };
                return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DVeg, hs_sat26DVee);
            case 3:
                var hs_rb26DUFK = hs_wild26DVdP.data[0];
                var hs_rb126DUFO = hs_wild26DVdP.data[1];
                var hs_rb226DUFP = hs_wild26DVdP.data[2];
                var hs_rb326DUFQ = hs_wild26DVdP.data[3];
                var hs_b326DUFU = hs_wild26DVdP.data[4];
                var hs_rb426DUFX = hs_wild26DVdP.data[5];
                var hs_b526DUG1 = hs_wild26DVdP.data[6];
                var hs_sat26DVeE = new $hs.Thunk();
                hs_sat26DVeE.evaluateOnce = function () {
                    var hs_sat26DVeB = new $hs.Thunk();
                    hs_sat26DVeB.evaluateOnce = function () {
                        var hs_sat26DVex = new $hs.Thunk();
                        hs_sat26DVex.evaluateOnce = function () {
                            var hs_sat26DVew = new $hs.Thunk();
                            hs_sat26DVew.evaluateOnce = function () {
                                var hs_sat26DVes = new $hs.Thunk();
                                hs_sat26DVes.evaluateOnce = function () {
                                    var hs_sat26DVer = new $hs.Thunk();
                                    hs_sat26DVer.evaluateOnce = function () {
                                        var hs_sat26DVeo = new $hs.Thunk();
                                        hs_sat26DVeo.evaluateOnce = function () {
                                            var hs_sat26DVen = new $hs.Thunk();
                                            hs_sat26DVen.evaluateOnce = function () {
                                                var hs_sat26DVej = new $hs.Thunk();
                                                hs_sat26DVej.evaluateOnce = function () {
                                                    var hs_sat26DVei = new $hs.Thunk();
                                                    hs_sat26DVei.evaluateOnce = function () {
                                                        var hs_sat26DVeh = new $hs.Data(1);
                                                        hs_sat26DVeh.data = [11];
                                                        return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126DUEL, hs_sat26DVeh, hs_b526DUG1);
                                                    };
                                                    return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.GHCziShow.hs_showSpace, hs_sat26DVei);
                                                };
                                                var hs_sat26DVem = new $hs.Thunk();
                                                hs_sat26DVem.evaluateOnce = function () {
                                                    var hs_sat26DVek = new $hs.Data(1);
                                                    hs_sat26DVek.data = [hs_rb426DUFX];
                                                    var hs_sat26DVel = new $hs.Data(1);
                                                    hs_sat26DVel.data = [11];
                                                    return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.SystemziEventziUnique.hs_zdfShowUnique, hs_sat26DVel, hs_sat26DVek);
                                                };
                                                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DVem, hs_sat26DVej);
                                            };
                                            return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.GHCziShow.hs_showSpace, hs_sat26DVen);
                                        };
                                        var hs_sat26DVeq = new $hs.Thunk();
                                        hs_sat26DVeq.evaluateOnce = function () {
                                            var hs_sat26DVep = new $hs.Data(1);
                                            hs_sat26DVep.data = [11];
                                            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126DUEL, hs_sat26DVep, hs_b326DUFU);
                                        };
                                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DVeq, hs_sat26DVeo);
                                    };
                                    return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.GHCziShow.hs_showSpace, hs_sat26DVer);
                                };
                                var hs_sat26DVev = new $hs.Thunk();
                                hs_sat26DVev.evaluateOnce = function () {
                                    var hs_sat26DVet = new $hs.Data(1);
                                    hs_sat26DVet.data = [hs_rb126DUFO, hs_rb226DUFP, hs_rb326DUFQ];
                                    var hs_sat26DVeu = new $hs.Data(1);
                                    hs_sat26DVeu.data = [11];
                                    return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow226DUEN, hs_sat26DVeu, hs_sat26DVet);
                                };
                                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DVev, hs_sat26DVes);
                            };
                            return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.GHCziShow.hs_showSpace, hs_sat26DVew);
                        };
                        var hs_sat26DVeA = new $hs.Thunk();
                        hs_sat26DVeA.evaluateOnce = function () {
                            var hs_sat26DVey = new $hs.Data(1);
                            hs_sat26DVey.data = [hs_rb26DUFK];
                            var hs_sat26DVez = new $hs.Data(1);
                            hs_sat26DVez.data = [11];
                            return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_sat26DVez, hs_sat26DVey);
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DVeA, hs_sat26DVex);
                    };
                    var hs_sat26DVeD = new $hs.Thunk();
                    hs_sat26DVeD.evaluateOnce = function () {
                        var hs_sat26DVeC = new $hs.Thunk();
                        hs_sat26DVeC.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("RLoser \x00");
                        };
                        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DVeC);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DVeD, hs_sat26DVeB);
                };
                var hs_sat26DVeG = new $hs.Thunk();
                hs_sat26DVeG.evaluateOnce = function () {
                    var hs_sat26DVeF = new $hs.Data(1);
                    hs_sat26DVeF.data = [11];
                    return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_ds26DUF0, hs_sat26DVeF);
                };
                return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DVeG, hs_sat26DVeE);
            }
        };
        if (hs_sat26DVeH.notEvaluated) {
            return hs_sat26DVeH.hscall();
        } else {
            return hs_sat26DVeH;
        }
    };
    hs_zdcshowsPrec325vw9Y.evaluate = function (hs_zddShow26DUGh) {
        var hs_zddShow126DUGi = new $hs.Thunk();
        hs_zddShow126DUGi.evaluateOnce = function () {
            return $hs.modules.SystemziEventziPSQ.hs_zdfShowLTree.hscall(hs_zddShow26DUGh);
        };
        var hs_zddShow226DUGk = new $hs.Thunk();
        hs_zddShow226DUGk.evaluateOnce = function () {
            return $hs.modules.SystemziEventziPSQ.hs_zdfShowElem.hscall(hs_zddShow26DUGh);
        };
        var hs_sat26DVf1 = new $hs.Func(2);
        hs_sat26DVf1.evaluate = function (hs_ds26DUGv, hs_ds126DUGn) {
            var hs_wild26DVeI = hs_ds126DUGn;
            if (hs_ds126DUGn.notEvaluated) {
                hs_wild26DVeI = hs_ds126DUGn.hscall();
            }
            switch (hs_wild26DVeI.tag) {
            case 1:
                var hs_sat26DVeJ = new $hs.Thunk();
                hs_sat26DVeJ.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Void\x00");
                };
                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DVeJ);
            case 2:
                var hs_rb26DUGB = hs_wild26DVeI.data[0];
                var hs_rb126DUGC = hs_wild26DVeI.data[1];
                var hs_rb226DUGD = hs_wild26DVeI.data[2];
                var hs_b226DUGH = hs_wild26DVeI.data[3];
                var hs_rb326DUGK = hs_wild26DVeI.data[4];
                var hs_sat26DVeY = new $hs.Thunk();
                hs_sat26DVeY.evaluateOnce = function () {
                    var hs_sat26DVeV = new $hs.Thunk();
                    hs_sat26DVeV.evaluateOnce = function () {
                        var hs_sat26DVeR = new $hs.Thunk();
                        hs_sat26DVeR.evaluateOnce = function () {
                            var hs_sat26DVeQ = new $hs.Thunk();
                            hs_sat26DVeQ.evaluateOnce = function () {
                                var hs_sat26DVeN = new $hs.Thunk();
                                hs_sat26DVeN.evaluateOnce = function () {
                                    var hs_sat26DVeM = new $hs.Thunk();
                                    hs_sat26DVeM.evaluateOnce = function () {
                                        var hs_sat26DVeK = new $hs.Data(1);
                                        hs_sat26DVeK.data = [hs_rb326DUGK];
                                        var hs_sat26DVeL = new $hs.Data(1);
                                        hs_sat26DVeL.data = [11];
                                        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.SystemziEventziUnique.hs_zdfShowUnique, hs_sat26DVeL, hs_sat26DVeK);
                                    };
                                    return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.GHCziShow.hs_showSpace, hs_sat26DVeM);
                                };
                                var hs_sat26DVeP = new $hs.Thunk();
                                hs_sat26DVeP.evaluateOnce = function () {
                                    var hs_sat26DVeO = new $hs.Data(1);
                                    hs_sat26DVeO.data = [11];
                                    return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126DUGi, hs_sat26DVeO, hs_b226DUGH);
                                };
                                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DVeP, hs_sat26DVeN);
                            };
                            return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.GHCziShow.hs_showSpace, hs_sat26DVeQ);
                        };
                        var hs_sat26DVeU = new $hs.Thunk();
                        hs_sat26DVeU.evaluateOnce = function () {
                            var hs_sat26DVeS = new $hs.Data(1);
                            hs_sat26DVeS.data = [hs_rb26DUGB, hs_rb126DUGC, hs_rb226DUGD];
                            var hs_sat26DVeT = new $hs.Data(1);
                            hs_sat26DVeT.data = [11];
                            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow226DUGk, hs_sat26DVeT, hs_sat26DVeS);
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DVeU, hs_sat26DVeR);
                    };
                    var hs_sat26DVeX = new $hs.Thunk();
                    hs_sat26DVeX.evaluateOnce = function () {
                        var hs_sat26DVeW = new $hs.Thunk();
                        hs_sat26DVeW.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Winner \x00");
                        };
                        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DVeW);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DVeX, hs_sat26DVeV);
                };
                var hs_sat26DVf0 = new $hs.Thunk();
                hs_sat26DVf0.evaluateOnce = function () {
                    var hs_sat26DVeZ = new $hs.Data(1);
                    hs_sat26DVeZ.data = [11];
                    return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_ds26DUGv, hs_sat26DVeZ);
                };
                return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DVf0, hs_sat26DVeY);
            }
        };
        if (hs_sat26DVf1.notEvaluated) {
            return hs_sat26DVf1.hscall();
        } else {
            return hs_sat26DVf1;
        }
    };
    this.hs_zdfShowPSQ.evaluate = function (hs_zddShow26DUGY) {
        var hs_sat26DVf2 = new $hs.Thunk();
        hs_sat26DVf2.evaluateOnce = function () {
            return hs_zdcshowList325vwaE.hscall(hs_zddShow26DUGY);
        };
        var hs_sat26DVf3 = new $hs.Thunk();
        hs_sat26DVf3.evaluateOnce = function () {
            return hs_zdcshow325vwaG.hscall(hs_zddShow26DUGY);
        };
        var hs_sat26DVf4 = new $hs.Thunk();
        hs_sat26DVf4.evaluateOnce = function () {
            return hs_zdcshowsPrec325vw9Y.hscall(hs_zddShow26DUGY);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DVf4, hs_sat26DVf3, hs_sat26DVf2];
        return $res;
    };
    hs_zdcshowList325vwaE.evaluate = function (hs_zddShow26DUH3) {
        var hs_sat26DVf7 = new $hs.Thunk();
        hs_sat26DVf7.evaluateOnce = function () {
            var hs_sat26DVf5 = new $hs.Data(1);
            hs_sat26DVf5.data = [0];
            var hs_sat26DVf6 = $hs.modules.SystemziEventziPSQ.hs_zdfShowPSQ.hscall(hs_zddShow26DUH3);
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_sat26DVf6, hs_sat26DVf5);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DVf7);
    };
    hs_zdcshow325vwaG.evaluate = function (hs_zddShow26DUH8) {
        var hs_sat26DVf8 = new $hs.Thunk();
        hs_sat26DVf8.evaluateOnce = function () {
            return $hs.modules.SystemziEventziPSQ.hs_zdfShowPSQ.hscall(hs_zddShow26DUH8);
        };
        return $hs.modules.GHCziShow.hs_zddmshow.hscall(hs_sat26DVf8);
    };
    hs_zdczeze25vwaV.evaluate = function (hs_zddEq26DUHA, hs_ds26DUHf, hs_ds126DUHk) {
        var hs_wild26DVfa = hs_ds26DUHf;
        if (hs_ds26DUHf.notEvaluated) {
            hs_wild26DVfa = hs_ds26DUHf.hscall();
        }
        var hs_rb26DUHp = hs_wild26DVfa.data[0];
        var hs_rb126DUHu = hs_wild26DVfa.data[1];
        var hs_a326DUHB = hs_wild26DVfa.data[2];
        var hs_wild126DVf9 = hs_ds126DUHk;
        if (hs_ds126DUHk.notEvaluated) {
            hs_wild126DVf9 = hs_ds126DUHk.hscall();
        }
        var hs_rb226DUHr = hs_wild126DVf9.data[0];
        var hs_rb326DUHw = hs_wild126DVf9.data[1];
        var hs_b326DUHC = hs_wild126DVf9.data[2];
        var hs_sat26DVfb = new $hs.Thunk();
        hs_sat26DVfb.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26DUHA, hs_a326DUHB, hs_b326DUHC);
        };
        var hs_sat26DVfi = new $hs.Thunk();
        hs_sat26DVfi.evaluateOnce = function () {
            var hs_sat26DVfe = new $hs.Thunk();
            hs_sat26DVfe.evaluateOnce = function () {
                var hs_sat26DVfc = new $hs.Data(1);
                hs_sat26DVfc.data = [hs_rb326DUHw];
                var hs_sat26DVfd = new $hs.Data(1);
                hs_sat26DVfd.data = [hs_rb126DUHu];
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqDouble, hs_sat26DVfd, hs_sat26DVfc);
            };
            var hs_sat26DVfh = new $hs.Thunk();
            hs_sat26DVfh.evaluateOnce = function () {
                var hs_sat26DVff = new $hs.Data(1);
                hs_sat26DVff.data = [hs_rb226DUHr];
                var hs_sat26DVfg = new $hs.Data(1);
                hs_sat26DVfg.data = [hs_rb26DUHp];
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.SystemziEventziUnique.hs_zdfEqUnique, hs_sat26DVfg, hs_sat26DVff);
            };
            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DVfh, hs_sat26DVfe);
        };
        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DVfi, hs_sat26DVfb);
    };
    this.hs_zdfEqElem.evaluate = function (hs_zddEq26DUHH) {
        var hs_sat26DVfj = new $hs.Thunk();
        hs_sat26DVfj.evaluateOnce = function () {
            return hs_zdczsze25vwbp.hscall(hs_zddEq26DUHH);
        };
        var hs_sat26DVfk = new $hs.Func(2);
        hs_sat26DVfk.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczeze25vwaV.hscall(hs_zddEq26DUHH, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DVfk, hs_sat26DVfj];
        return $res;
    };
    hs_zdczsze25vwbp.evaluate = function (hs_zddEq26DUHM) {
        var hs_zddEq126DUHN = new $hs.Thunk();
        hs_zddEq126DUHN.evaluateOnce = function () {
            return $hs.modules.SystemziEventziPSQ.hs_zdfEqElem.hscall(hs_zddEq26DUHM);
        };
        var hs_sat26DVfm = new $hs.Func(2);
        hs_sat26DVfm.evaluate = function (hs_a326DUHQ, hs_b26DUHR) {
            var hs_sat26DVfl = new $hs.Thunk();
            hs_sat26DVfl.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq126DUHN, hs_a326DUHQ, hs_b26DUHR);
            };
            return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DVfl);
        };
        if (hs_sat26DVfm.notEvaluated) {
            return hs_sat26DVfm.hscall();
        } else {
            return hs_sat26DVfm;
        }
    };
    this.hs_zdfEqLTree.evaluate = function (hs_zddEq26DUHZ) {
        var hs_sat26DVfn = new $hs.Thunk();
        hs_sat26DVfn.evaluateOnce = function () {
            return hs_zdczsze125vwbF.hscall(hs_zddEq26DUHZ);
        };
        var hs_sat26DVfo = new $hs.Thunk();
        hs_sat26DVfo.evaluateOnce = function () {
            return hs_zdczeze125vwbH.hscall(hs_zddEq26DUHZ);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DVfo, hs_sat26DVfn];
        return $res;
    };
    hs_zdczsze125vwbF.evaluate = function (hs_zddEq26DUI4) {
        var hs_zddEq126DUI5 = new $hs.Thunk();
        hs_zddEq126DUI5.evaluateOnce = function () {
            return $hs.modules.SystemziEventziPSQ.hs_zdfEqLTree.hscall(hs_zddEq26DUI4);
        };
        var hs_sat26DVfq = new $hs.Func(2);
        hs_sat26DVfq.evaluate = function (hs_a326DUI8, hs_b26DUI9) {
            var hs_sat26DVfp = new $hs.Thunk();
            hs_sat26DVfp.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq126DUI5, hs_a326DUI8, hs_b26DUI9);
            };
            return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DVfp);
        };
        if (hs_sat26DVfq.notEvaluated) {
            return hs_sat26DVfq.hscall();
        } else {
            return hs_sat26DVfq;
        }
    };
    hs_zdczeze125vwbH.evaluate = function (hs_zddEq26DUIe) {
        var hs_zddEq126DUIf = new $hs.Thunk();
        hs_zddEq126DUIf.evaluateOnce = function () {
            return $hs.modules.SystemziEventziPSQ.hs_zdfEqLTree.hscall(hs_zddEq26DUIe);
        };
        var hs_zddEq226DUIh = new $hs.Thunk();
        hs_zddEq226DUIh.evaluateOnce = function () {
            return $hs.modules.SystemziEventziPSQ.hs_zdfEqElem.hscall(hs_zddEq26DUIe);
        };
        var hs_sat26DVfW = new $hs.Func(2);
        hs_sat26DVfW.evaluate = function (hs_ds26DUIm, hs_ds126DUIo) {
            var hs_fail26DUJn = new $hs.Func(1);
            hs_fail26DUJn.evaluate = function (hs_ds226DUJm) {
                var hs_wild26DUKN = hs_ds26DUIm;
                if (hs_ds26DUIm.notEvaluated) {
                    hs_wild26DUKN = hs_ds26DUIm.hscall();
                }
                switch (hs_wild26DUKN.tag) {
                case 1:
                    var hs_wild126DUKO = hs_ds126DUIo;
                    if (hs_ds126DUIo.notEvaluated) {
                        hs_wild126DUKO = hs_ds126DUIo.hscall();
                    }
                    switch (hs_wild126DUKO.tag) {
                    case 1:
                        return 0 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    case 2:
                        return 0 == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    case 3:
                        return 0 == 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    }
                case 2:
                    var hs_wild126DULa = hs_ds126DUIo;
                    if (hs_ds126DUIo.notEvaluated) {
                        hs_wild126DULa = hs_ds126DUIo.hscall();
                    }
                    switch (hs_wild126DULa.tag) {
                    case 1:
                        return 1 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    case 2:
                        return 1 == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    case 3:
                        return 1 == 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    }
                case 3:
                    var hs_wild126DULw = hs_ds126DUIo;
                    if (hs_ds126DUIo.notEvaluated) {
                        hs_wild126DULw = hs_ds126DUIo.hscall();
                    }
                    switch (hs_wild126DULw.tag) {
                    case 1:
                        return 2 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    case 2:
                        return 2 == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    case 3:
                        return 2 == 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    }
                }
            };
            var hs_wild26DVfr = hs_ds26DUIm;
            if (hs_ds26DUIm.notEvaluated) {
                hs_wild26DVfr = hs_ds26DUIm.hscall();
            }
            switch (hs_wild26DVfr.tag) {
            case 1:
                return hs_fail26DUJn.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            case 2:
                var hs_rb26DUJE = hs_wild26DVfr.data[0];
                var hs_rb126DUJJ = hs_wild26DVfr.data[1];
                var hs_rb226DUJK = hs_wild26DVfr.data[2];
                var hs_rb326DUJL = hs_wild26DVfr.data[3];
                var hs_a326DUJT = hs_wild26DVfr.data[4];
                var hs_rb426DUJX = hs_wild26DVfr.data[5];
                var hs_a526DUK3 = hs_wild26DVfr.data[6];
                var hs_wild126DVfs = hs_ds126DUIo;
                if (hs_ds126DUIo.notEvaluated) {
                    hs_wild126DVfs = hs_ds126DUIo.hscall();
                }
                switch (hs_wild126DVfs.tag) {
                case 2:
                    var hs_rb526DUJG = hs_wild126DVfs.data[0];
                    var hs_rb626DUJN = hs_wild126DVfs.data[1];
                    var hs_rb726DUJO = hs_wild126DVfs.data[2];
                    var hs_rb826DUJP = hs_wild126DVfs.data[3];
                    var hs_b326DUJU = hs_wild126DVfs.data[4];
                    var hs_rb926DUJZ = hs_wild126DVfs.data[5];
                    var hs_b526DUK4 = hs_wild126DVfs.data[6];
                    var hs_sat26DVft = new $hs.Thunk();
                    hs_sat26DVft.evaluateOnce = function () {
                        return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq126DUIf, hs_a526DUK3, hs_b526DUK4);
                    };
                    var hs_sat26DVfG = new $hs.Thunk();
                    hs_sat26DVfG.evaluateOnce = function () {
                        var hs_sat26DVfw = new $hs.Thunk();
                        hs_sat26DVfw.evaluateOnce = function () {
                            var hs_sat26DVfu = new $hs.Data(1);
                            hs_sat26DVfu.data = [hs_rb926DUJZ];
                            var hs_sat26DVfv = new $hs.Data(1);
                            hs_sat26DVfv.data = [hs_rb426DUJX];
                            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.SystemziEventziUnique.hs_zdfEqUnique, hs_sat26DVfv, hs_sat26DVfu);
                        };
                        var hs_sat26DVfF = new $hs.Thunk();
                        hs_sat26DVfF.evaluateOnce = function () {
                            var hs_sat26DVfx = new $hs.Thunk();
                            hs_sat26DVfx.evaluateOnce = function () {
                                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq126DUIf, hs_a326DUJT, hs_b326DUJU);
                            };
                            var hs_sat26DVfE = new $hs.Thunk();
                            hs_sat26DVfE.evaluateOnce = function () {
                                var hs_sat26DVfA = new $hs.Thunk();
                                hs_sat26DVfA.evaluateOnce = function () {
                                    var hs_sat26DVfy = new $hs.Data(1);
                                    hs_sat26DVfy.data = [hs_rb626DUJN, hs_rb726DUJO, hs_rb826DUJP];
                                    var hs_sat26DVfz = new $hs.Data(1);
                                    hs_sat26DVfz.data = [hs_rb126DUJJ, hs_rb226DUJK, hs_rb326DUJL];
                                    return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq226DUIh, hs_sat26DVfz, hs_sat26DVfy);
                                };
                                var hs_sat26DVfD = new $hs.Thunk();
                                hs_sat26DVfD.evaluateOnce = function () {
                                    var hs_sat26DVfB = new $hs.Data(1);
                                    hs_sat26DVfB.data = [hs_rb526DUJG];
                                    var hs_sat26DVfC = new $hs.Data(1);
                                    hs_sat26DVfC.data = [hs_rb26DUJE];
                                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_sat26DVfC, hs_sat26DVfB);
                                };
                                return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DVfD, hs_sat26DVfA);
                            };
                            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DVfE, hs_sat26DVfx);
                        };
                        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DVfF, hs_sat26DVfw);
                    };
                    return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DVfG, hs_sat26DVft);
                default:
                    return hs_fail26DUJn.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                }
            case 3:
                var hs_rb26DUKl = hs_wild26DVfr.data[0];
                var hs_rb126DUKq = hs_wild26DVfr.data[1];
                var hs_rb226DUKr = hs_wild26DVfr.data[2];
                var hs_rb326DUKs = hs_wild26DVfr.data[3];
                var hs_a326DUKA = hs_wild26DVfr.data[4];
                var hs_rb426DUKE = hs_wild26DVfr.data[5];
                var hs_a526DUKK = hs_wild26DVfr.data[6];
                var hs_wild126DVfH = hs_ds126DUIo;
                if (hs_ds126DUIo.notEvaluated) {
                    hs_wild126DVfH = hs_ds126DUIo.hscall();
                }
                switch (hs_wild126DVfH.tag) {
                case 3:
                    var hs_rb526DUKn = hs_wild126DVfH.data[0];
                    var hs_rb626DUKu = hs_wild126DVfH.data[1];
                    var hs_rb726DUKv = hs_wild126DVfH.data[2];
                    var hs_rb826DUKw = hs_wild126DVfH.data[3];
                    var hs_b326DUKB = hs_wild126DVfH.data[4];
                    var hs_rb926DUKG = hs_wild126DVfH.data[5];
                    var hs_b526DUKL = hs_wild126DVfH.data[6];
                    var hs_sat26DVfI = new $hs.Thunk();
                    hs_sat26DVfI.evaluateOnce = function () {
                        return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq126DUIf, hs_a526DUKK, hs_b526DUKL);
                    };
                    var hs_sat26DVfV = new $hs.Thunk();
                    hs_sat26DVfV.evaluateOnce = function () {
                        var hs_sat26DVfL = new $hs.Thunk();
                        hs_sat26DVfL.evaluateOnce = function () {
                            var hs_sat26DVfJ = new $hs.Data(1);
                            hs_sat26DVfJ.data = [hs_rb926DUKG];
                            var hs_sat26DVfK = new $hs.Data(1);
                            hs_sat26DVfK.data = [hs_rb426DUKE];
                            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.SystemziEventziUnique.hs_zdfEqUnique, hs_sat26DVfK, hs_sat26DVfJ);
                        };
                        var hs_sat26DVfU = new $hs.Thunk();
                        hs_sat26DVfU.evaluateOnce = function () {
                            var hs_sat26DVfM = new $hs.Thunk();
                            hs_sat26DVfM.evaluateOnce = function () {
                                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq126DUIf, hs_a326DUKA, hs_b326DUKB);
                            };
                            var hs_sat26DVfT = new $hs.Thunk();
                            hs_sat26DVfT.evaluateOnce = function () {
                                var hs_sat26DVfP = new $hs.Thunk();
                                hs_sat26DVfP.evaluateOnce = function () {
                                    var hs_sat26DVfN = new $hs.Data(1);
                                    hs_sat26DVfN.data = [hs_rb626DUKu, hs_rb726DUKv, hs_rb826DUKw];
                                    var hs_sat26DVfO = new $hs.Data(1);
                                    hs_sat26DVfO.data = [hs_rb126DUKq, hs_rb226DUKr, hs_rb326DUKs];
                                    return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq226DUIh, hs_sat26DVfO, hs_sat26DVfN);
                                };
                                var hs_sat26DVfS = new $hs.Thunk();
                                hs_sat26DVfS.evaluateOnce = function () {
                                    var hs_sat26DVfQ = new $hs.Data(1);
                                    hs_sat26DVfQ.data = [hs_rb526DUKn];
                                    var hs_sat26DVfR = new $hs.Data(1);
                                    hs_sat26DVfR.data = [hs_rb26DUKl];
                                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_sat26DVfR, hs_sat26DVfQ);
                                };
                                return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DVfS, hs_sat26DVfP);
                            };
                            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DVfT, hs_sat26DVfM);
                        };
                        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DVfU, hs_sat26DVfL);
                    };
                    return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DVfV, hs_sat26DVfI);
                default:
                    return hs_fail26DUJn.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                }
            }
        };
        if (hs_sat26DVfW.notEvaluated) {
            return hs_sat26DVfW.hscall();
        } else {
            return hs_sat26DVfW;
        }
    };
    hs_zdczeze225vwfx.evaluate = function (hs_zddEq26DULQ) {
        var hs_zddEq126DULR = new $hs.Thunk();
        hs_zddEq126DULR.evaluateOnce = function () {
            return $hs.modules.SystemziEventziPSQ.hs_zdfEqLTree.hscall(hs_zddEq26DULQ);
        };
        var hs_zddEq226DULT = new $hs.Thunk();
        hs_zddEq226DULT.evaluateOnce = function () {
            return $hs.modules.SystemziEventziPSQ.hs_zdfEqElem.hscall(hs_zddEq26DULQ);
        };
        var hs_sat26DVg7 = new $hs.Func(2);
        hs_sat26DVg7.evaluate = function (hs_ds26DULY, hs_ds126DUM0) {
            var hs_fail26DUMj = new $hs.Func(1);
            hs_fail26DUMj.evaluate = function (hs_ds226DUMi) {
                var hs_wild26DUMO = hs_ds26DULY;
                if (hs_ds26DULY.notEvaluated) {
                    hs_wild26DUMO = hs_ds26DULY.hscall();
                }
                switch (hs_wild26DUMO.tag) {
                case 1:
                    var hs_wild126DUMP = hs_ds126DUM0;
                    if (hs_ds126DUM0.notEvaluated) {
                        hs_wild126DUMP = hs_ds126DUM0.hscall();
                    }
                    switch (hs_wild126DUMP.tag) {
                    case 1:
                        return 0 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    case 2:
                        return 0 == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    }
                case 2:
                    var hs_wild126DUN0 = hs_ds126DUM0;
                    if (hs_ds126DUM0.notEvaluated) {
                        hs_wild126DUN0 = hs_ds126DUM0.hscall();
                    }
                    switch (hs_wild126DUN0.tag) {
                    case 1:
                        return 1 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    case 2:
                        return 1 == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    }
                }
            };
            var hs_wild26DVfX = hs_ds26DULY;
            if (hs_ds26DULY.notEvaluated) {
                hs_wild26DVfX = hs_ds26DULY.hscall();
            }
            switch (hs_wild26DVfX.tag) {
            case 1:
                return hs_fail26DUMj.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            case 2:
                var hs_rb26DUMw = hs_wild26DVfX.data[0];
                var hs_rb126DUMx = hs_wild26DVfX.data[1];
                var hs_rb226DUMy = hs_wild26DVfX.data[2];
                var hs_a326DUMF = hs_wild26DVfX.data[3];
                var hs_rb326DUMJ = hs_wild26DVfX.data[4];
                var hs_wild126DVfY = hs_ds126DUM0;
                if (hs_ds126DUM0.notEvaluated) {
                    hs_wild126DVfY = hs_ds126DUM0.hscall();
                }
                switch (hs_wild126DVfY.tag) {
                case 1:
                    return hs_fail26DUMj.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                case 2:
                    var hs_rb426DUMA = hs_wild126DVfY.data[0];
                    var hs_rb526DUMB = hs_wild126DVfY.data[1];
                    var hs_rb626DUMC = hs_wild126DVfY.data[2];
                    var hs_b226DUMG = hs_wild126DVfY.data[3];
                    var hs_rb726DUML = hs_wild126DVfY.data[4];
                    var hs_sat26DVg1 = new $hs.Thunk();
                    hs_sat26DVg1.evaluateOnce = function () {
                        var hs_sat26DVfZ = new $hs.Data(1);
                        hs_sat26DVfZ.data = [hs_rb726DUML];
                        var hs_sat26DVg0 = new $hs.Data(1);
                        hs_sat26DVg0.data = [hs_rb326DUMJ];
                        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.SystemziEventziUnique.hs_zdfEqUnique, hs_sat26DVg0, hs_sat26DVfZ);
                    };
                    var hs_sat26DVg6 = new $hs.Thunk();
                    hs_sat26DVg6.evaluateOnce = function () {
                        var hs_sat26DVg2 = new $hs.Thunk();
                        hs_sat26DVg2.evaluateOnce = function () {
                            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq126DULR, hs_a326DUMF, hs_b226DUMG);
                        };
                        var hs_sat26DVg5 = new $hs.Thunk();
                        hs_sat26DVg5.evaluateOnce = function () {
                            var hs_sat26DVg3 = new $hs.Data(1);
                            hs_sat26DVg3.data = [hs_rb426DUMA, hs_rb526DUMB, hs_rb626DUMC];
                            var hs_sat26DVg4 = new $hs.Data(1);
                            hs_sat26DVg4.data = [hs_rb26DUMw, hs_rb126DUMx, hs_rb226DUMy];
                            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq226DULT, hs_sat26DVg4, hs_sat26DVg3);
                        };
                        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DVg5, hs_sat26DVg2);
                    };
                    return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DVg6, hs_sat26DVg1);
                }
            }
        };
        if (hs_sat26DVg7.notEvaluated) {
            return hs_sat26DVg7.hscall();
        } else {
            return hs_sat26DVg7;
        }
    };
    this.hs_zdfEqPSQ.evaluate = function (hs_zddEq26DUNa) {
        var hs_sat26DVg8 = new $hs.Thunk();
        hs_sat26DVg8.evaluateOnce = function () {
            return hs_zdczsze225vwgS.hscall(hs_zddEq26DUNa);
        };
        var hs_sat26DVg9 = new $hs.Thunk();
        hs_sat26DVg9.evaluateOnce = function () {
            return hs_zdczeze225vwfx.hscall(hs_zddEq26DUNa);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DVg9, hs_sat26DVg8];
        return $res;
    };
    hs_zdczsze225vwgS.evaluate = function (hs_zddEq26DUNf) {
        var hs_zddEq126DUNg = new $hs.Thunk();
        hs_zddEq126DUNg.evaluateOnce = function () {
            return $hs.modules.SystemziEventziPSQ.hs_zdfEqPSQ.hscall(hs_zddEq26DUNf);
        };
        var hs_sat26DVgb = new $hs.Func(2);
        hs_sat26DVgb.evaluate = function (hs_a326DUNj, hs_b26DUNk) {
            var hs_sat26DVga = new $hs.Thunk();
            hs_sat26DVga.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq126DUNg, hs_a326DUNj, hs_b26DUNk);
            };
            return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DVga);
        };
        if (hs_sat26DVgb.notEvaluated) {
            return hs_sat26DVgb.hscall();
        } else {
            return hs_sat26DVgb;
        }
    };
    this.hs_Sequ.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.SystemziEventziPSQ.hs_Sequ.hscall(hs_eta1cW6l3);
    };
    this.hs_Null.data = [];
    this.hs_Single.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(2);
        $res.data = [hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_Play.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(3);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_Start.data = [];
    this.hs_LLoser.evaluate = function (hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(2);
        $res.data = [hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_RLoser.evaluate = function (hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(3);
        $res.data = [hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_Void.data = [];
    this.hs_Winner.evaluate = function (hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(2);
        $res.data = [hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_E.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
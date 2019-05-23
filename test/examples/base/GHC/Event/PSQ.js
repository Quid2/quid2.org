
$hs.modules.GHCziEventziPSQ = new $hs.Module();
$hs.modules.GHCziEventziPSQ.dependencies = ["GHC.Prim", "GHC.Types", "GHC.CString", "GHC.Base", "GHC.Num", "GHC.Float", "GHC.Show", "GHC.Err", "GHC.Classes", "Control.Exception.Base", "GHC.Event.Unique"];
$hs.modules.GHCziEventziPSQ.initBeforeDependencies = function () {
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
    this.hs_Single = new $hs.Func(1);
    this.hs_Play = new $hs.Func(2);
    this.hs_Start = new $hs.Data(1);
    this.hs_LLoser = new $hs.Func(5);
    this.hs_RLoser = new $hs.Func(5);
    this.hs_Void = new $hs.Data(1);
    this.hs_Winner = new $hs.Func(3);
    this.hs_E = new $hs.Func(3);
    this.hs_zdWSingle.notEvaluated = true;
    this.hs_zdWSingle.evaluate = function (hs_tpl26Duor) {
        $hs.modules.GHCziEventziPSQ.loadDependencies();
        return this.evaluate(hs_tpl26Duor);
    };
    this.hs_zdWLLoser.notEvaluated = true;
    this.hs_zdWLLoser.evaluate = function (hs_tpl26Duoz, hs_tpl26DuoB, hs_tpl26DuoD, hs_tpl26DuoF, hs_tpl26DuoH) {
        $hs.modules.GHCziEventziPSQ.loadDependencies();
        return this.evaluate(hs_tpl26Duoz, hs_tpl26DuoB, hs_tpl26DuoD, hs_tpl26DuoF, hs_tpl26DuoH);
    };
    this.hs_zdWRLoser.notEvaluated = true;
    this.hs_zdWRLoser.evaluate = function (hs_tpl26DuoT, hs_tpl26DuoV, hs_tpl26DuoX, hs_tpl26DuoZ, hs_tpl26Dup1) {
        $hs.modules.GHCziEventziPSQ.loadDependencies();
        return this.evaluate(hs_tpl26DuoT, hs_tpl26DuoV, hs_tpl26DuoX, hs_tpl26DuoZ, hs_tpl26Dup1);
    };
    this.hs_zdWWinner.notEvaluated = true;
    this.hs_zdWWinner.evaluate = function (hs_tpl26Dupb, hs_tpl26Dupd, hs_tpl26Dupf) {
        $hs.modules.GHCziEventziPSQ.loadDependencies();
        return this.evaluate(hs_tpl26Dupb, hs_tpl26Dupd, hs_tpl26Dupf);
    };
    this.hs_zdWE.notEvaluated = true;
    this.hs_zdWE.evaluate = function (hs_tpl26Dupn, hs_tpl26Dupp, hs_tpl26Dupt) {
        $hs.modules.GHCziEventziPSQ.loadDependencies();
        return this.evaluate(hs_tpl26Dupn, hs_tpl26Dupp, hs_tpl26Dupt);
    };
    this.hs_minView.notEvaluated = true;
    this.hs_minView.evaluate = function (hs_ds26DuOY) {
        $hs.modules.GHCziEventziPSQ.loadDependencies();
        return this.evaluate(hs_ds26DuOY);
    };
    this.hs_deleteMin.notEvaluated = true;
    this.hs_deleteMin.evaluate = function (hs_ds26DuP9) {
        $hs.modules.GHCziEventziPSQ.loadDependencies();
        return this.evaluate(hs_ds26DuP9);
    };
    this.hs_findMin.notEvaluated = true;
    this.hs_findMin.evaluate = function (hs_ds26DuPh) {
        $hs.modules.GHCziEventziPSQ.loadDependencies();
        return this.evaluate(hs_ds26DuPh);
    };
    this.hs_toDescList.notEvaluated = true;
    this.hs_toDescList.evaluate = function (hs_q26DuPZ) {
        $hs.modules.GHCziEventziPSQ.loadDependencies();
        return this.evaluate(hs_q26DuPZ);
    };
    this.hs_toAscList.notEvaluated = true;
    this.hs_toAscList.evaluate = function (hs_q26DuQC) {
        $hs.modules.GHCziEventziPSQ.loadDependencies();
        return this.evaluate(hs_q26DuQC);
    };
    this.hs_toList.notEvaluated = true;
    this.hs_toList.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziEventziPSQ.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_singleton.notEvaluated = true;
    this.hs_singleton.evaluate = function (hs_k26DuQG, hs_p26DuQJ, hs_v26DuQO) {
        $hs.modules.GHCziEventziPSQ.loadDependencies();
        return this.evaluate(hs_k26DuQG, hs_p26DuQJ, hs_v26DuQO);
    };
    this.hs_insert.notEvaluated = true;
    this.hs_insert.evaluate = function (hs_k26DuQW, hs_p26DuQZ, hs_v26DuR4, hs_q26DuQU) {
        $hs.modules.GHCziEventziPSQ.loadDependencies();
        return this.evaluate(hs_k26DuQW, hs_p26DuQZ, hs_v26DuR4, hs_q26DuQU);
    };
    this.hs_empty.notEvaluated = true;
    this.hs_empty.evaluate = function () {
        $hs.modules.GHCziEventziPSQ.loadDependencies();
        return this;
    };
    this.hs_delete.notEvaluated = true;
    this.hs_delete.evaluate = function (hs_k26DuUM, hs_q26DuUt) {
        $hs.modules.GHCziEventziPSQ.loadDependencies();
        return this.evaluate(hs_k26DuUM, hs_q26DuUt);
    };
    this.hs_adjust.notEvaluated = true;
    this.hs_adjust.evaluate = function (hs_eta26Dv4z, hs_eta126DuXJ, hs_eta226Dv4E) {
        $hs.modules.GHCziEventziPSQ.loadDependencies();
        return this.evaluate(hs_eta26Dv4z, hs_eta126DuXJ, hs_eta226Dv4E);
    };
    this.hs_fromList.evaluateOnce = function () {
        $hs.modules.GHCziEventziPSQ.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_lookup.notEvaluated = true;
    this.hs_lookup.evaluate = function (hs_k26Dv4W, hs_q26Dv59) {
        $hs.modules.GHCziEventziPSQ.loadDependencies();
        return this.evaluate(hs_k26Dv4W, hs_q26Dv59);
    };
    this.hs_null.notEvaluated = true;
    this.hs_null.evaluate = function (hs_ds26Dv5O) {
        $hs.modules.GHCziEventziPSQ.loadDependencies();
        return this.evaluate(hs_ds26Dv5O);
    };
    this.hs_sizze.notEvaluated = true;
    this.hs_sizze.evaluate = function (hs_ds26Dv5U) {
        $hs.modules.GHCziEventziPSQ.loadDependencies();
        return this.evaluate(hs_ds26Dv5U);
    };
    this.hs_value.notEvaluated = true;
    this.hs_value.evaluate = function (hs_ds26Dv6g) {
        $hs.modules.GHCziEventziPSQ.loadDependencies();
        return this.evaluate(hs_ds26Dv6g);
    };
    this.hs_prio.notEvaluated = true;
    this.hs_prio.evaluate = function (hs_ds26Dv6n) {
        $hs.modules.GHCziEventziPSQ.loadDependencies();
        return this.evaluate(hs_ds26Dv6n);
    };
    this.hs_atMost.notEvaluated = true;
    this.hs_atMost.evaluate = function (hs_pt26Dv9O, hs_q26Dv9P) {
        $hs.modules.GHCziEventziPSQ.loadDependencies();
        return this.evaluate(hs_pt26Dv9O, hs_q26Dv9P);
    };
    this.hs_key.notEvaluated = true;
    this.hs_key.evaluate = function (hs_ds26Dva2) {
        $hs.modules.GHCziEventziPSQ.loadDependencies();
        return this.evaluate(hs_ds26Dva2);
    };
    this.hs_zdfShowSequ.notEvaluated = true;
    this.hs_zdfShowSequ.evaluate = function (hs_zddShow26Dvam) {
        $hs.modules.GHCziEventziPSQ.loadDependencies();
        return this.evaluate(hs_zddShow26Dvam);
    };
    this.hs_zdfShowElem.notEvaluated = true;
    this.hs_zdfShowElem.evaluate = function (hs_zddShow26Dvbj) {
        $hs.modules.GHCziEventziPSQ.loadDependencies();
        return this.evaluate(hs_zddShow26Dvbj);
    };
    this.hs_zdfShowLTree.notEvaluated = true;
    this.hs_zdfShowLTree.evaluate = function (hs_zddShow26Dvbz) {
        $hs.modules.GHCziEventziPSQ.loadDependencies();
        return this.evaluate(hs_zddShow26Dvbz);
    };
    this.hs_zdfShowPSQ.notEvaluated = true;
    this.hs_zdfShowPSQ.evaluate = function (hs_zddShow26DvdE) {
        $hs.modules.GHCziEventziPSQ.loadDependencies();
        return this.evaluate(hs_zddShow26DvdE);
    };
    this.hs_zdfEqElem.notEvaluated = true;
    this.hs_zdfEqElem.evaluate = function (hs_zddEq26Dveh) {
        $hs.modules.GHCziEventziPSQ.loadDependencies();
        return this.evaluate(hs_zddEq26Dveh);
    };
    this.hs_zdfEqLTree.notEvaluated = true;
    this.hs_zdfEqLTree.evaluate = function (hs_zddEq26Dvex) {
        $hs.modules.GHCziEventziPSQ.loadDependencies();
        return this.evaluate(hs_zddEq26Dvex);
    };
    this.hs_zdfEqPSQ.notEvaluated = true;
    this.hs_zdfEqPSQ.evaluate = function (hs_zddEq26Dvi1) {
        $hs.modules.GHCziEventziPSQ.loadDependencies();
        return this.evaluate(hs_zddEq26Dvi1);
    };
    this.hs_Sequ.notEvaluated = true;
    this.hs_Sequ.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziEventziPSQ.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_Null.notEvaluated = true;
    this.hs_Null.evaluate = function () {
        $hs.modules.GHCziEventziPSQ.loadDependencies();
        return this;
    };
    this.hs_Single.notEvaluated = true;
    this.hs_Single.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziEventziPSQ.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_Play.notEvaluated = true;
    this.hs_Play.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziEventziPSQ.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_Start.notEvaluated = true;
    this.hs_Start.evaluate = function () {
        $hs.modules.GHCziEventziPSQ.loadDependencies();
        return this;
    };
    this.hs_LLoser.notEvaluated = true;
    this.hs_LLoser.evaluate = function (hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziEventziPSQ.loadDependencies();
        return this.evaluate(hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_RLoser.notEvaluated = true;
    this.hs_RLoser.evaluate = function (hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziEventziPSQ.loadDependencies();
        return this.evaluate(hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_Void.notEvaluated = true;
    this.hs_Void.evaluate = function () {
        $hs.modules.GHCziEventziPSQ.loadDependencies();
        return this;
    };
    this.hs_Winner.notEvaluated = true;
    this.hs_Winner.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziEventziPSQ.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_E.notEvaluated = true;
    this.hs_E.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziEventziPSQ.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
};
$hs.modules.GHCziEventziPSQ.initAfterDependencies = function () {
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
    var hs_a25v5Te = new $hs.Func(1);
    var hs_moduleError25tyTX = new $hs.Func(2);
    var hs_omega25tyTF = new $hs.Data(1);
    var hs_right25tyTB = new $hs.Func(1);
    var hs_left25tyTA = new $hs.Func(1);
    var hs_lloser25tyTD = new $hs.Func(6);
    var hs_lsingleRight25tyTO = new $hs.Func(6);
    var hs_rloser25tyTE = new $hs.Func(6);
    var hs_lsingleLeft25tyTM = new $hs.Func(6);
    var hs_rsingleLeft25tyTN = new $hs.Func(6);
    var hs_rsingleRight25tyTP = new $hs.Func(6);
    var hs_lbalance25tyTG = new $hs.Func(6);
    var hs_rbalance25tyTH = new $hs.Func(6);
    var hs_secondBest25tyTw = new $hs.Func(2);
    var hs_a125v6j7 = new $hs.Func(2);
    var hs_a225v6jK = new $hs.Func(2);
    var hs_atMosts25tyTy = new $hs.Func(2);
    var hs_zdcshowsPrec25v6DS = new $hs.Func(1);
    var hs_zdcshowList25v6E3 = new $hs.Func(1);
    var hs_zdcshow25v6E4 = new $hs.Func(1);
    var hs_zdcshowsPrec125v6Eg = new $hs.Func(3);
    var hs_zdcshowList125v6F0 = new $hs.Func(1);
    var hs_zdcshow125v6F1 = new $hs.Func(1);
    var hs_zdcshowList225v6Ff = new $hs.Func(1);
    var hs_zdcshow225v6Fg = new $hs.Func(1);
    var hs_zdcshowsPrec225v6Fh = new $hs.Func(1);
    var hs_zdcshowsPrec325v6GM = new $hs.Func(1);
    var hs_zdcshowList325v6Hl = new $hs.Func(1);
    var hs_zdcshow325v6Hm = new $hs.Func(1);
    var hs_zdczeze25v6HA = new $hs.Func(3);
    var hs_zdczsze25v6HZ = new $hs.Func(1);
    var hs_zdczsze125v6Ie = new $hs.Func(1);
    var hs_zdczeze125v6If = new $hs.Func(1);
    var hs_zdczeze225v6L6 = new $hs.Func(1);
    var hs_zdczsze225v6LJ = new $hs.Func(1);
    this.hs_zdWSingle.evaluate = function (hs_tpl26Duor) {
        var hs_tpl26Duot = hs_tpl26Duor;
        if (hs_tpl26Duor.notEvaluated) {
            hs_tpl26Duot = hs_tpl26Duor.hscall();
        }
        var $res = new $hs.Data(2);
        $res.data = [hs_tpl26Duot];
        return $res;
    };
    this.hs_zdWLLoser.evaluate = function (hs_tpl26Duoz, hs_tpl26DuoB, hs_tpl26DuoD, hs_tpl26DuoF, hs_tpl26DuoH) {
        var hs_tpl26DuoJ = hs_tpl26Duoz;
        if (hs_tpl26Duoz.notEvaluated) {
            hs_tpl26DuoJ = hs_tpl26Duoz.hscall();
        }
        var hs_tpl26DuoK = hs_tpl26DuoB;
        if (hs_tpl26DuoB.notEvaluated) {
            hs_tpl26DuoK = hs_tpl26DuoB.hscall();
        }
        var hs_tpl26DuoL = hs_tpl26DuoD;
        if (hs_tpl26DuoD.notEvaluated) {
            hs_tpl26DuoL = hs_tpl26DuoD.hscall();
        }
        var hs_tpl26DuoM = hs_tpl26DuoF;
        if (hs_tpl26DuoF.notEvaluated) {
            hs_tpl26DuoM = hs_tpl26DuoF.hscall();
        }
        var hs_tpl26DuoN = hs_tpl26DuoH;
        if (hs_tpl26DuoH.notEvaluated) {
            hs_tpl26DuoN = hs_tpl26DuoH.hscall();
        }
        var $res = new $hs.Data(2);
        $res.data = [hs_tpl26DuoJ, hs_tpl26DuoK, hs_tpl26DuoL, hs_tpl26DuoM, hs_tpl26DuoN];
        return $res;
    };
    this.hs_zdWRLoser.evaluate = function (hs_tpl26DuoT, hs_tpl26DuoV, hs_tpl26DuoX, hs_tpl26DuoZ, hs_tpl26Dup1) {
        var hs_tpl26Dup3 = hs_tpl26DuoT;
        if (hs_tpl26DuoT.notEvaluated) {
            hs_tpl26Dup3 = hs_tpl26DuoT.hscall();
        }
        var hs_tpl26Dup4 = hs_tpl26DuoV;
        if (hs_tpl26DuoV.notEvaluated) {
            hs_tpl26Dup4 = hs_tpl26DuoV.hscall();
        }
        var hs_tpl26Dup5 = hs_tpl26DuoX;
        if (hs_tpl26DuoX.notEvaluated) {
            hs_tpl26Dup5 = hs_tpl26DuoX.hscall();
        }
        var hs_tpl26Dup6 = hs_tpl26DuoZ;
        if (hs_tpl26DuoZ.notEvaluated) {
            hs_tpl26Dup6 = hs_tpl26DuoZ.hscall();
        }
        var hs_tpl26Dup7 = hs_tpl26Dup1;
        if (hs_tpl26Dup1.notEvaluated) {
            hs_tpl26Dup7 = hs_tpl26Dup1.hscall();
        }
        var $res = new $hs.Data(3);
        $res.data = [hs_tpl26Dup3, hs_tpl26Dup4, hs_tpl26Dup5, hs_tpl26Dup6, hs_tpl26Dup7];
        return $res;
    };
    this.hs_zdWWinner.evaluate = function (hs_tpl26Dupb, hs_tpl26Dupd, hs_tpl26Dupf) {
        var hs_tpl26Duph = hs_tpl26Dupb;
        if (hs_tpl26Dupb.notEvaluated) {
            hs_tpl26Duph = hs_tpl26Dupb.hscall();
        }
        var hs_tpl26Dupi = hs_tpl26Dupd;
        if (hs_tpl26Dupd.notEvaluated) {
            hs_tpl26Dupi = hs_tpl26Dupd.hscall();
        }
        var hs_tpl26Dupj = hs_tpl26Dupf;
        if (hs_tpl26Dupf.notEvaluated) {
            hs_tpl26Dupj = hs_tpl26Dupf.hscall();
        }
        var $res = new $hs.Data(2);
        $res.data = [hs_tpl26Duph, hs_tpl26Dupi, hs_tpl26Dupj];
        return $res;
    };
    this.hs_zdWE.evaluate = function (hs_tpl26Dupn, hs_tpl26Dupp, hs_tpl26Dupt) {
        var hs_tpl26Dupr = hs_tpl26Dupn;
        if (hs_tpl26Dupn.notEvaluated) {
            hs_tpl26Dupr = hs_tpl26Dupn.hscall();
        }
        var hs_tpl26Dups = hs_tpl26Dupp;
        if (hs_tpl26Dupp.notEvaluated) {
            hs_tpl26Dups = hs_tpl26Dupp.hscall();
        }
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26Dupr, hs_tpl26Dups, hs_tpl26Dupt];
        return $res;
    };
    hs_a25v5Te.evaluate = function (hs_as26Dupw) {
        if (hs_as26Dupw.notEvaluated) {
            return hs_as26Dupw.hscall();
        } else {
            return hs_as26Dupw;
        }
    };
    hs_moduleError25tyTX.evaluate = function (hs_fun26DupA, hs_msg26DupD) {
        var hs_sat26Dvie = new $hs.Thunk();
        hs_sat26Dvie.evaluateOnce = function () {
            var hs_sat26Dvii = new $hs.Data(1);
            hs_sat26Dvii.data = [" "];
            var hs_sat26Dvij = new $hs.Data(2);
            hs_sat26Dvij.data = [hs_sat26Dvii, hs_msg26DupD];
            var hs_sat26Dvik = new $hs.Data(1);
            hs_sat26Dvik.data = [":"];
            var hs_sat26Dvih = new $hs.Data(2);
            hs_sat26Dvih.data = [hs_sat26Dvik, hs_sat26Dvij];
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_fun26DupA, hs_sat26Dvih);
        };
        var hs_sat26Dvif = new $hs.Thunk();
        hs_sat26Dvif.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("GHC.Event.PSQ.\x00");
        };
        var hs_sat26Dvig = $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Dvif, hs_sat26Dvie);
        return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26Dvig);
    };
    hs_omega25tyTF.data = [4];
    hs_right25tyTB.evaluate = function (hs_ds26DupJ) {
        var hs_wild26Dvip = hs_ds26DupJ;
        if (hs_ds26DupJ.notEvaluated) {
            hs_wild26Dvip = hs_ds26DupJ.hscall();
        }
        switch (hs_wild26Dvip.tag) {
        case 1:
            var hs_sat26Dviv = new $hs.Thunk();
            hs_sat26Dviv.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("empty loser tree\x00");
            };
            var hs_sat26Dviu = new $hs.Thunk();
            hs_sat26Dviu.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("right\x00");
            };
            return hs_moduleError25tyTX.hscall(hs_sat26Dviu, hs_sat26Dviv);
        case 2:
            var hs_tr26DupS = hs_wild26Dvip.data[4];
            if (hs_tr26DupS.notEvaluated) {
                return hs_tr26DupS.hscall();
            } else {
                return hs_tr26DupS;
            }
        case 3:
            var hs_tr26DupY = hs_wild26Dvip.data[4];
            if (hs_tr26DupY.notEvaluated) {
                return hs_tr26DupY.hscall();
            } else {
                return hs_tr26DupY;
            }
        }
    };
    hs_left25tyTA.evaluate = function (hs_ds26Duq0) {
        var hs_wild26DviA = hs_ds26Duq0;
        if (hs_ds26Duq0.notEvaluated) {
            hs_wild26DviA = hs_ds26Duq0.hscall();
        }
        switch (hs_wild26DviA.tag) {
        case 1:
            var hs_sat26DviG = new $hs.Thunk();
            hs_sat26DviG.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("empty loser tree\x00");
            };
            var hs_sat26DviF = new $hs.Thunk();
            hs_sat26DviF.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("left\x00");
            };
            return hs_moduleError25tyTX.hscall(hs_sat26DviF, hs_sat26DviG);
        case 2:
            var hs_tl26Duq9 = hs_wild26DviA.data[2];
            if (hs_tl26Duq9.notEvaluated) {
                return hs_tl26Duq9.hscall();
            } else {
                return hs_tl26Duq9;
            }
        case 3:
            var hs_tl26Duqf = hs_wild26DviA.data[2];
            if (hs_tl26Duqf.notEvaluated) {
                return hs_tl26Duqf.hscall();
            } else {
                return hs_tl26Duqf;
            }
        }
    };
    hs_lloser25tyTD.evaluate = function (hs_k26DuqU, hs_p26DuqX, hs_v26Dur8, hs_tl26Duqn, hs_m26Dur1, hs_tr26DuqD) {
        var hs_sat26DviL = new $hs.Thunk();
        hs_sat26DviL.evaluateOnce = function () {
            var hs_wild26Dvj3 = hs_tr26DuqD;
            if (hs_tr26DuqD.notEvaluated) {
                hs_wild26Dvj3 = hs_tr26DuqD.hscall();
            }
            switch (hs_wild26Dvj3.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [0];
                return $res;
            case 2:
                var hs_s26DuqK = hs_wild26Dvj3.data[0];
                if (hs_s26DuqK.notEvaluated) {
                    return hs_s26DuqK.hscall();
                } else {
                    return hs_s26DuqK;
                }
            case 3:
                var hs_s26DuqQ = hs_wild26Dvj3.data[0];
                if (hs_s26DuqQ.notEvaluated) {
                    return hs_s26DuqQ.hscall();
                } else {
                    return hs_s26DuqQ;
                }
            }
        };
        var hs_sat26DviM = new $hs.Thunk();
        hs_sat26DviM.evaluateOnce = function () {
            var hs_sat26DviP = new $hs.Thunk();
            hs_sat26DviP.evaluateOnce = function () {
                var hs_wild26DviU = hs_tl26Duqn;
                if (hs_tl26Duqn.notEvaluated) {
                    hs_wild26DviU = hs_tl26Duqn.hscall();
                }
                switch (hs_wild26DviU.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [0];
                    return $res;
                case 2:
                    var hs_s26Duqu = hs_wild26DviU.data[0];
                    if (hs_s26Duqu.notEvaluated) {
                        return hs_s26Duqu.hscall();
                    } else {
                        return hs_s26Duqu;
                    }
                case 3:
                    var hs_s26DuqA = hs_wild26DviU.data[0];
                    if (hs_s26DuqA.notEvaluated) {
                        return hs_s26DuqA.hscall();
                    } else {
                        return hs_s26DuqA;
                    }
                }
            };
            var hs_sat26DviO = new $hs.Data(1);
            hs_sat26DviO.data = [1];
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DviO, hs_sat26DviP);
        };
        var hs_tpl26Dur5 = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DviM, hs_sat26DviL);
        var hs_nt26Dur6 = hs_k26DuqU;
        if (hs_k26DuqU.notEvaluated) {
            hs_nt26Dur6 = hs_k26DuqU.hscall();
        }
        var hs_tpl126Dur7 = hs_p26DuqX;
        if (hs_p26DuqX.notEvaluated) {
            hs_tpl126Dur7 = hs_p26DuqX.hscall();
        }
        var hs_tpl226Dura = hs_tl26Duqn;
        if (hs_tl26Duqn.notEvaluated) {
            hs_tpl226Dura = hs_tl26Duqn.hscall();
        }
        var hs_nt126Durb = hs_m26Dur1;
        if (hs_m26Dur1.notEvaluated) {
            hs_nt126Durb = hs_m26Dur1.hscall();
        }
        var hs_tpl326Durc = hs_tr26DuqD;
        if (hs_tr26DuqD.notEvaluated) {
            hs_tpl326Durc = hs_tr26DuqD.hscall();
        }
        var hs_sat26DviH = new $hs.Data(1);
        hs_sat26DviH.data = [hs_nt26Dur6, hs_tpl126Dur7, hs_v26Dur8];
        var $res = new $hs.Data(2);
        $res.data = [hs_tpl26Dur5, hs_sat26DviH, hs_tpl226Dura, hs_nt126Durb, hs_tpl326Durc];
        return $res;
    };
    hs_lsingleRight25tyTO.evaluate = function (hs_k126Dus6, hs_p126Dus9, hs_v126Dusj, hs_ds26Durj, hs_m226Dusc, hs_t326DurP) {
        var hs_wild26Dvja = hs_ds26Durj;
        if (hs_ds26Durj.notEvaluated) {
            hs_wild26Dvja = hs_ds26Durj.hscall();
        }
        switch (hs_wild26Dvja.tag) {
        case 1:
            var hs_sat26Dvkt = new $hs.Thunk();
            hs_sat26Dvkt.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("malformed tree\x00");
            };
            var hs_sat26Dvks = new $hs.Thunk();
            hs_sat26Dvks.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("lsingleRight\x00");
            };
            return hs_moduleError25tyTX.hscall(hs_sat26Dvks, hs_sat26Dvkt);
        case 2:
            var hs_ds226Durs = hs_wild26Dvja.data[1];
            var hs_t126Dusp = hs_wild26Dvja.data[2];
            var hs_m126Dut1 = hs_wild26Dvja.data[3];
            var hs_t226Durz = hs_wild26Dvja.data[4];
            var hs_wild126Dvj9 = hs_ds226Durs;
            if (hs_ds226Durs.notEvaluated) {
                hs_wild126Dvj9 = hs_ds226Durs.hscall();
            }
            var hs_k226DusX = hs_wild126Dvj9.data[0];
            var hs_p226DusY = hs_wild126Dvj9.data[1];
            var hs_v226DusZ = hs_wild126Dvj9.data[2];
            var hs_tr26Dusn = new $hs.Thunk();
            hs_tr26Dusn.evaluateOnce = function () {
                var hs_sat26DvjD = new $hs.Thunk();
                hs_sat26DvjD.evaluateOnce = function () {
                    var hs_wild226DvjV = hs_t326DurP;
                    if (hs_t326DurP.notEvaluated) {
                        hs_wild226DvjV = hs_t326DurP.hscall();
                    }
                    switch (hs_wild226DvjV.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [0];
                        return $res;
                    case 2:
                        var hs_s26DurW = hs_wild226DvjV.data[0];
                        if (hs_s26DurW.notEvaluated) {
                            return hs_s26DurW.hscall();
                        } else {
                            return hs_s26DurW;
                        }
                    case 3:
                        var hs_s26Dus2 = hs_wild226DvjV.data[0];
                        if (hs_s26Dus2.notEvaluated) {
                            return hs_s26Dus2.hscall();
                        } else {
                            return hs_s26Dus2;
                        }
                    }
                };
                var hs_sat26DvjE = new $hs.Thunk();
                hs_sat26DvjE.evaluateOnce = function () {
                    var hs_sat26DvjH = new $hs.Thunk();
                    hs_sat26DvjH.evaluateOnce = function () {
                        var hs_wild226DvjM = hs_t226Durz;
                        if (hs_t226Durz.notEvaluated) {
                            hs_wild226DvjM = hs_t226Durz.hscall();
                        }
                        switch (hs_wild226DvjM.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [0];
                            return $res;
                        case 2:
                            var hs_s26DurG = hs_wild226DvjM.data[0];
                            if (hs_s26DurG.notEvaluated) {
                                return hs_s26DurG.hscall();
                            } else {
                                return hs_s26DurG;
                            }
                        case 3:
                            var hs_s26DurM = hs_wild226DvjM.data[0];
                            if (hs_s26DurM.notEvaluated) {
                                return hs_s26DurM.hscall();
                            } else {
                                return hs_s26DurM;
                            }
                        }
                    };
                    var hs_sat26DvjG = new $hs.Data(1);
                    hs_sat26DvjG.data = [1];
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DvjG, hs_sat26DvjH);
                };
                var hs_tpl26Dusg = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DvjE, hs_sat26DvjD);
                var hs_nt26Dush = hs_k126Dus6;
                if (hs_k126Dus6.notEvaluated) {
                    hs_nt26Dush = hs_k126Dus6.hscall();
                }
                var hs_tpl126Dusi = hs_p126Dus9;
                if (hs_p126Dus9.notEvaluated) {
                    hs_tpl126Dusi = hs_p126Dus9.hscall();
                }
                var hs_nt126Dusl = hs_m226Dusc;
                if (hs_m226Dusc.notEvaluated) {
                    hs_nt126Dusl = hs_m226Dusc.hscall();
                }
                var hs_tpl226Dusm = hs_t326DurP;
                if (hs_t326DurP.notEvaluated) {
                    hs_tpl226Dusm = hs_t326DurP.hscall();
                }
                var hs_sat26Dvjz = new $hs.Data(1);
                hs_sat26Dvjz.data = [hs_nt26Dush, hs_tpl126Dusi, hs_v126Dusj];
                var $res = new $hs.Data(2);
                $res.data = [hs_tpl26Dusg, hs_sat26Dvjz, hs_t226Durz, hs_nt126Dusl, hs_tpl226Dusm];
                return $res;
            };
            var hs_sat26Dvjc = new $hs.Thunk();
            hs_sat26Dvjc.evaluateOnce = function () {
                var hs_wild226Dvju = hs_tr26Dusn;
                if (hs_tr26Dusn.notEvaluated) {
                    hs_wild226Dvju = hs_tr26Dusn.hscall();
                }
                switch (hs_wild226Dvju.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [0];
                    return $res;
                case 2:
                    var hs_s26DusL = hs_wild226Dvju.data[0];
                    if (hs_s26DusL.notEvaluated) {
                        return hs_s26DusL.hscall();
                    } else {
                        return hs_s26DusL;
                    }
                case 3:
                    var hs_s26DusR = hs_wild226Dvju.data[0];
                    if (hs_s26DusR.notEvaluated) {
                        return hs_s26DusR.hscall();
                    } else {
                        return hs_s26DusR;
                    }
                }
            };
            var hs_sat26Dvjd = new $hs.Thunk();
            hs_sat26Dvjd.evaluateOnce = function () {
                var hs_sat26Dvjg = new $hs.Thunk();
                hs_sat26Dvjg.evaluateOnce = function () {
                    var hs_wild226Dvjl = hs_t126Dusp;
                    if (hs_t126Dusp.notEvaluated) {
                        hs_wild226Dvjl = hs_t126Dusp.hscall();
                    }
                    switch (hs_wild226Dvjl.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [0];
                        return $res;
                    case 2:
                        var hs_s26Dusw = hs_wild226Dvjl.data[0];
                        if (hs_s26Dusw.notEvaluated) {
                            return hs_s26Dusw.hscall();
                        } else {
                            return hs_s26Dusw;
                        }
                    case 3:
                        var hs_s26DusC = hs_wild226Dvjl.data[0];
                        if (hs_s26DusC.notEvaluated) {
                            return hs_s26DusC.hscall();
                        } else {
                            return hs_s26DusC;
                        }
                    }
                };
                var hs_sat26Dvjf = new $hs.Data(1);
                hs_sat26Dvjf.data = [1];
                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dvjf, hs_sat26Dvjg);
            };
            var hs_tpl26DusW = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dvjd, hs_sat26Dvjc);
            var hs_tpl126Dut2 = hs_tr26Dusn;
            if (hs_tr26Dusn.notEvaluated) {
                hs_tpl126Dut2 = hs_tr26Dusn.hscall();
            }
            var hs_sat26Dvj8 = new $hs.Data(1);
            hs_sat26Dvj8.data = [hs_k226DusX, hs_p226DusY, hs_v226DusZ];
            var $res = new $hs.Data(2);
            $res.data = [hs_tpl26DusW, hs_sat26Dvj8, hs_t126Dusp, hs_m126Dut1, hs_tpl126Dut2];
            return $res;
        case 3:
            var hs_ds226Dut8 = hs_wild26Dvja.data[1];
            var hs_t126Dutd = hs_wild26Dvja.data[2];
            var hs_m126Dute = hs_wild26Dvja.data[3];
            var hs_t226Dutg = hs_wild26Dvja.data[4];
            var hs_wild126Dvk1 = hs_ds226Dut8;
            if (hs_ds226Dut8.notEvaluated) {
                hs_wild126Dvk1 = hs_ds226Dut8.hscall();
            }
            var hs_k226DutQ = hs_wild126Dvk1.data[0];
            var hs_p226DutR = hs_wild126Dvk1.data[1];
            var hs_v226DutS = hs_wild126Dvk1.data[2];
            var hs_sat26Dvk0 = new $hs.Thunk();
            hs_sat26Dvk0.evaluateOnce = function () {
                var hs_sat26Dvk5 = new $hs.Thunk();
                hs_sat26Dvk5.evaluateOnce = function () {
                    var hs_wild226Dvkn = hs_t326DurP;
                    if (hs_t326DurP.notEvaluated) {
                        hs_wild226Dvkn = hs_t326DurP.hscall();
                    }
                    switch (hs_wild226Dvkn.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [0];
                        return $res;
                    case 2:
                        var hs_s26DutC = hs_wild226Dvkn.data[0];
                        if (hs_s26DutC.notEvaluated) {
                            return hs_s26DutC.hscall();
                        } else {
                            return hs_s26DutC;
                        }
                    case 3:
                        var hs_s26DutI = hs_wild226Dvkn.data[0];
                        if (hs_s26DutI.notEvaluated) {
                            return hs_s26DutI.hscall();
                        } else {
                            return hs_s26DutI;
                        }
                    }
                };
                var hs_sat26Dvk6 = new $hs.Thunk();
                hs_sat26Dvk6.evaluateOnce = function () {
                    var hs_sat26Dvk9 = new $hs.Thunk();
                    hs_sat26Dvk9.evaluateOnce = function () {
                        var hs_wild226Dvke = hs_t226Dutg;
                        if (hs_t226Dutg.notEvaluated) {
                            hs_wild226Dvke = hs_t226Dutg.hscall();
                        }
                        switch (hs_wild226Dvke.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [0];
                            return $res;
                        case 2:
                            var hs_s26Dutn = hs_wild226Dvke.data[0];
                            if (hs_s26Dutn.notEvaluated) {
                                return hs_s26Dutn.hscall();
                            } else {
                                return hs_s26Dutn;
                            }
                        case 3:
                            var hs_s26Dutt = hs_wild226Dvke.data[0];
                            if (hs_s26Dutt.notEvaluated) {
                                return hs_s26Dutt.hscall();
                            } else {
                                return hs_s26Dutt;
                            }
                        }
                    };
                    var hs_sat26Dvk8 = new $hs.Data(1);
                    hs_sat26Dvk8.data = [1];
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dvk8, hs_sat26Dvk9);
                };
                var hs_tpl26DutP = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dvk6, hs_sat26Dvk5);
                var hs_nt26DutU = hs_m226Dusc;
                if (hs_m226Dusc.notEvaluated) {
                    hs_nt26DutU = hs_m226Dusc.hscall();
                }
                var hs_tpl126DutV = hs_t326DurP;
                if (hs_t326DurP.notEvaluated) {
                    hs_tpl126DutV = hs_t326DurP.hscall();
                }
                var hs_sat26Dvk3 = new $hs.Data(1);
                hs_sat26Dvk3.data = [hs_k226DutQ, hs_p226DutR, hs_v226DutS];
                var $res = new $hs.Data(2);
                $res.data = [hs_tpl26DutP, hs_sat26Dvk3, hs_t226Dutg, hs_nt26DutU, hs_tpl126DutV];
                return $res;
            };
            return hs_lloser25tyTD.hscall(hs_k126Dus6, hs_p126Dus9, hs_v126Dusj, hs_t126Dutd, hs_m126Dute, hs_sat26Dvk0);
        }
    };
    hs_rloser25tyTE.evaluate = function (hs_k26DuuB, hs_p26DuuE, hs_v26DuuP, hs_tl26Duu4, hs_m26DuuI, hs_tr26Duuk) {
        var hs_sat26Dvky = new $hs.Thunk();
        hs_sat26Dvky.evaluateOnce = function () {
            var hs_wild26DvkQ = hs_tr26Duuk;
            if (hs_tr26Duuk.notEvaluated) {
                hs_wild26DvkQ = hs_tr26Duuk.hscall();
            }
            switch (hs_wild26DvkQ.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [0];
                return $res;
            case 2:
                var hs_s26Duur = hs_wild26DvkQ.data[0];
                if (hs_s26Duur.notEvaluated) {
                    return hs_s26Duur.hscall();
                } else {
                    return hs_s26Duur;
                }
            case 3:
                var hs_s26Duux = hs_wild26DvkQ.data[0];
                if (hs_s26Duux.notEvaluated) {
                    return hs_s26Duux.hscall();
                } else {
                    return hs_s26Duux;
                }
            }
        };
        var hs_sat26Dvkz = new $hs.Thunk();
        hs_sat26Dvkz.evaluateOnce = function () {
            var hs_sat26DvkC = new $hs.Thunk();
            hs_sat26DvkC.evaluateOnce = function () {
                var hs_wild26DvkH = hs_tl26Duu4;
                if (hs_tl26Duu4.notEvaluated) {
                    hs_wild26DvkH = hs_tl26Duu4.hscall();
                }
                switch (hs_wild26DvkH.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [0];
                    return $res;
                case 2:
                    var hs_s26Duub = hs_wild26DvkH.data[0];
                    if (hs_s26Duub.notEvaluated) {
                        return hs_s26Duub.hscall();
                    } else {
                        return hs_s26Duub;
                    }
                case 3:
                    var hs_s26Duuh = hs_wild26DvkH.data[0];
                    if (hs_s26Duuh.notEvaluated) {
                        return hs_s26Duuh.hscall();
                    } else {
                        return hs_s26Duuh;
                    }
                }
            };
            var hs_sat26DvkB = new $hs.Data(1);
            hs_sat26DvkB.data = [1];
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DvkB, hs_sat26DvkC);
        };
        var hs_tpl26DuuM = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dvkz, hs_sat26Dvky);
        var hs_nt26DuuN = hs_k26DuuB;
        if (hs_k26DuuB.notEvaluated) {
            hs_nt26DuuN = hs_k26DuuB.hscall();
        }
        var hs_tpl126DuuO = hs_p26DuuE;
        if (hs_p26DuuE.notEvaluated) {
            hs_tpl126DuuO = hs_p26DuuE.hscall();
        }
        var hs_tpl226DuuR = hs_tl26Duu4;
        if (hs_tl26Duu4.notEvaluated) {
            hs_tpl226DuuR = hs_tl26Duu4.hscall();
        }
        var hs_nt126DuuS = hs_m26DuuI;
        if (hs_m26DuuI.notEvaluated) {
            hs_nt126DuuS = hs_m26DuuI.hscall();
        }
        var hs_tpl326DuuT = hs_tr26Duuk;
        if (hs_tr26Duuk.notEvaluated) {
            hs_tpl326DuuT = hs_tr26Duuk.hscall();
        }
        var hs_sat26Dvku = new $hs.Data(1);
        hs_sat26Dvku.data = [hs_nt26DuuN, hs_tpl126DuuO, hs_v26DuuP];
        var $res = new $hs.Data(3);
        $res.data = [hs_tpl26DuuM, hs_sat26Dvku, hs_tpl226DuuR, hs_nt126DuuS, hs_tpl326DuuT];
        return $res;
    };
    hs_lsingleLeft25tyTM.evaluate = function (hs_k126DuvQ, hs_p126Duve, hs_v126Duw2, hs_t126Duvj, hs_m126DuvW, hs_ds26Duv0) {
        var hs_wild26DvkX = hs_ds26Duv0;
        if (hs_ds26Duv0.notEvaluated) {
            hs_wild26DvkX = hs_ds26Duv0.hscall();
        }
        switch (hs_wild26DvkX.tag) {
        case 1:
            var hs_sat26Dvn6 = new $hs.Thunk();
            hs_sat26Dvn6.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("malformed tree\x00");
            };
            var hs_sat26Dvn5 = new $hs.Thunk();
            hs_sat26Dvn5.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("lsingleLeft\x00");
            };
            return hs_moduleError25tyTX.hscall(hs_sat26Dvn5, hs_sat26Dvn6);
        case 2:
            var hs_ds226Duv9 = hs_wild26DvkX.data[1];
            var hs_t226Duvz = hs_wild26DvkX.data[2];
            var hs_m226DuwK = hs_wild26DvkX.data[3];
            var hs_t326Duwn = hs_wild26DvkX.data[4];
            var hs_wild126DvkW = hs_ds226Duv9;
            if (hs_ds226Duv9.notEvaluated) {
                hs_wild126DvkW = hs_ds226Duv9.hscall();
            }
            var hs_k226DuwG = hs_wild126DvkW.data[0];
            var hs_p226Duvf = hs_wild126DvkW.data[1];
            var hs_v226DuwH = hs_wild126DvkW.data[2];
            var hs_wild226DvkZ = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_p126Duve, hs_p226Duvf);
            switch (hs_wild226DvkZ.tag) {
            case 1:
                var hs_tl26Duw6 = new $hs.Thunk();
                hs_tl26Duw6.evaluateOnce = function () {
                    var hs_sat26DvlR = new $hs.Thunk();
                    hs_sat26DvlR.evaluateOnce = function () {
                        var hs_wild326Dvm9 = hs_t226Duvz;
                        if (hs_t226Duvz.notEvaluated) {
                            hs_wild326Dvm9 = hs_t226Duvz.hscall();
                        }
                        switch (hs_wild326Dvm9.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [0];
                            return $res;
                        case 2:
                            var hs_s26DuvG = hs_wild326Dvm9.data[0];
                            if (hs_s26DuvG.notEvaluated) {
                                return hs_s26DuvG.hscall();
                            } else {
                                return hs_s26DuvG;
                            }
                        case 3:
                            var hs_s26DuvM = hs_wild326Dvm9.data[0];
                            if (hs_s26DuvM.notEvaluated) {
                                return hs_s26DuvM.hscall();
                            } else {
                                return hs_s26DuvM;
                            }
                        }
                    };
                    var hs_sat26DvlS = new $hs.Thunk();
                    hs_sat26DvlS.evaluateOnce = function () {
                        var hs_sat26DvlV = new $hs.Thunk();
                        hs_sat26DvlV.evaluateOnce = function () {
                            var hs_wild326Dvm0 = hs_t126Duvj;
                            if (hs_t126Duvj.notEvaluated) {
                                hs_wild326Dvm0 = hs_t126Duvj.hscall();
                            }
                            switch (hs_wild326Dvm0.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [0];
                                return $res;
                            case 2:
                                var hs_s26Duvq = hs_wild326Dvm0.data[0];
                                if (hs_s26Duvq.notEvaluated) {
                                    return hs_s26Duvq.hscall();
                                } else {
                                    return hs_s26Duvq;
                                }
                            case 3:
                                var hs_s26Duvw = hs_wild326Dvm0.data[0];
                                if (hs_s26Duvw.notEvaluated) {
                                    return hs_s26Duvw.hscall();
                                } else {
                                    return hs_s26Duvw;
                                }
                            }
                        };
                        var hs_sat26DvlU = new $hs.Data(1);
                        hs_sat26DvlU.data = [1];
                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DvlU, hs_sat26DvlV);
                    };
                    var hs_tpl26DuvZ = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DvlS, hs_sat26DvlR);
                    var hs_nt26Duw0 = hs_k126DuvQ;
                    if (hs_k126DuvQ.notEvaluated) {
                        hs_nt26Duw0 = hs_k126DuvQ.hscall();
                    }
                    var hs_tpl126Duw1 = hs_p126Duve;
                    if (hs_p126Duve.notEvaluated) {
                        hs_tpl126Duw1 = hs_p126Duve.hscall();
                    }
                    var hs_tpl226Duw4 = hs_t126Duvj;
                    if (hs_t126Duvj.notEvaluated) {
                        hs_tpl226Duw4 = hs_t126Duvj.hscall();
                    }
                    var hs_nt126Duw5 = hs_m126DuvW;
                    if (hs_m126DuvW.notEvaluated) {
                        hs_nt126Duw5 = hs_m126DuvW.hscall();
                    }
                    var hs_sat26DvlN = new $hs.Data(1);
                    hs_sat26DvlN.data = [hs_nt26Duw0, hs_tpl126Duw1, hs_v126Duw2];
                    var $res = new $hs.Data(2);
                    $res.data = [hs_tpl26DuvZ, hs_sat26DvlN, hs_tpl226Duw4, hs_nt126Duw5, hs_t226Duvz];
                    return $res;
                };
                var hs_sat26Dvlq = new $hs.Thunk();
                hs_sat26Dvlq.evaluateOnce = function () {
                    var hs_wild326DvlI = hs_t326Duwn;
                    if (hs_t326Duwn.notEvaluated) {
                        hs_wild326DvlI = hs_t326Duwn.hscall();
                    }
                    switch (hs_wild326DvlI.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [0];
                        return $res;
                    case 2:
                        var hs_s26Duwu = hs_wild326DvlI.data[0];
                        if (hs_s26Duwu.notEvaluated) {
                            return hs_s26Duwu.hscall();
                        } else {
                            return hs_s26Duwu;
                        }
                    case 3:
                        var hs_s26DuwA = hs_wild326DvlI.data[0];
                        if (hs_s26DuwA.notEvaluated) {
                            return hs_s26DuwA.hscall();
                        } else {
                            return hs_s26DuwA;
                        }
                    }
                };
                var hs_sat26Dvlr = new $hs.Thunk();
                hs_sat26Dvlr.evaluateOnce = function () {
                    var hs_sat26Dvlu = new $hs.Thunk();
                    hs_sat26Dvlu.evaluateOnce = function () {
                        var hs_wild326Dvlz = hs_tl26Duw6;
                        if (hs_tl26Duw6.notEvaluated) {
                            hs_wild326Dvlz = hs_tl26Duw6.hscall();
                        }
                        switch (hs_wild326Dvlz.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [0];
                            return $res;
                        case 2:
                            var hs_s26Duwe = hs_wild326Dvlz.data[0];
                            if (hs_s26Duwe.notEvaluated) {
                                return hs_s26Duwe.hscall();
                            } else {
                                return hs_s26Duwe;
                            }
                        case 3:
                            var hs_s26Duwk = hs_wild326Dvlz.data[0];
                            if (hs_s26Duwk.notEvaluated) {
                                return hs_s26Duwk.hscall();
                            } else {
                                return hs_s26Duwk;
                            }
                        }
                    };
                    var hs_sat26Dvlt = new $hs.Data(1);
                    hs_sat26Dvlt.data = [1];
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dvlt, hs_sat26Dvlu);
                };
                var hs_tpl26DuwF = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dvlr, hs_sat26Dvlq);
                var hs_tpl126DuwJ = hs_tl26Duw6;
                if (hs_tl26Duw6.notEvaluated) {
                    hs_tpl126DuwJ = hs_tl26Duw6.hscall();
                }
                var hs_sat26Dvlp = new $hs.Data(1);
                hs_sat26Dvlp.data = [hs_k226DuwG, hs_p226Duvf, hs_v226DuwH];
                var $res = new $hs.Data(2);
                $res.data = [hs_tpl26DuwF, hs_sat26Dvlp, hs_tpl126DuwJ, hs_m226DuwK, hs_t326Duwn];
                return $res;
            case 2:
                var hs_sat26DvkV = new $hs.Thunk();
                hs_sat26DvkV.evaluateOnce = function () {
                    var hs_sat26Dvl2 = new $hs.Thunk();
                    hs_sat26Dvl2.evaluateOnce = function () {
                        var hs_wild326Dvlk = hs_t226Duvz;
                        if (hs_t226Duvz.notEvaluated) {
                            hs_wild326Dvlk = hs_t226Duvz.hscall();
                        }
                        switch (hs_wild326Dvlk.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [0];
                            return $res;
                        case 2:
                            var hs_s26Dux7 = hs_wild326Dvlk.data[0];
                            if (hs_s26Dux7.notEvaluated) {
                                return hs_s26Dux7.hscall();
                            } else {
                                return hs_s26Dux7;
                            }
                        case 3:
                            var hs_s26Duxd = hs_wild326Dvlk.data[0];
                            if (hs_s26Duxd.notEvaluated) {
                                return hs_s26Duxd.hscall();
                            } else {
                                return hs_s26Duxd;
                            }
                        }
                    };
                    var hs_sat26Dvl3 = new $hs.Thunk();
                    hs_sat26Dvl3.evaluateOnce = function () {
                        var hs_sat26Dvl6 = new $hs.Thunk();
                        hs_sat26Dvl6.evaluateOnce = function () {
                            var hs_wild326Dvlb = hs_t126Duvj;
                            if (hs_t126Duvj.notEvaluated) {
                                hs_wild326Dvlb = hs_t126Duvj.hscall();
                            }
                            switch (hs_wild326Dvlb.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [0];
                                return $res;
                            case 2:
                                var hs_s26DuwS = hs_wild326Dvlb.data[0];
                                if (hs_s26DuwS.notEvaluated) {
                                    return hs_s26DuwS.hscall();
                                } else {
                                    return hs_s26DuwS;
                                }
                            case 3:
                                var hs_s26DuwY = hs_wild326Dvlb.data[0];
                                if (hs_s26DuwY.notEvaluated) {
                                    return hs_s26DuwY.hscall();
                                } else {
                                    return hs_s26DuwY;
                                }
                            }
                        };
                        var hs_sat26Dvl5 = new $hs.Data(1);
                        hs_sat26Dvl5.data = [1];
                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dvl5, hs_sat26Dvl6);
                    };
                    var hs_tpl26Duxk = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dvl3, hs_sat26Dvl2);
                    var hs_tpl126Duxm = hs_t126Duvj;
                    if (hs_t126Duvj.notEvaluated) {
                        hs_tpl126Duxm = hs_t126Duvj.hscall();
                    }
                    var hs_nt26Duxn = hs_m126DuvW;
                    if (hs_m126DuvW.notEvaluated) {
                        hs_nt26Duxn = hs_m126DuvW.hscall();
                    }
                    var hs_sat26Dvl0 = new $hs.Data(1);
                    hs_sat26Dvl0.data = [hs_k226DuwG, hs_p226Duvf, hs_v226DuwH];
                    var $res = new $hs.Data(3);
                    $res.data = [hs_tpl26Duxk, hs_sat26Dvl0, hs_tpl126Duxm, hs_nt26Duxn, hs_t226Duvz];
                    return $res;
                };
                return hs_lloser25tyTD.hscall(hs_k126DuvQ, hs_p126Duve, hs_v126Duw2, hs_sat26DvkV, hs_m226DuwK, hs_t326Duwn);
            }
        case 3:
            var hs_ds226Duxu = hs_wild26DvkX.data[1];
            var hs_t226DuxQ = hs_wild26DvkX.data[2];
            var hs_m226DuyZ = hs_wild26DvkX.data[3];
            var hs_t326DuyB = hs_wild26DvkX.data[4];
            var hs_wild126Dvmf = hs_ds226Duxu;
            if (hs_ds226Duxu.notEvaluated) {
                hs_wild126Dvmf = hs_ds226Duxu.hscall();
            }
            var hs_k226DuyU = hs_wild126Dvmf.data[0];
            var hs_p226DuyV = hs_wild126Dvmf.data[1];
            var hs_v226DuyW = hs_wild126Dvmf.data[2];
            var hs_tl26Duyk = new $hs.Thunk();
            hs_tl26Duyk.evaluateOnce = function () {
                var hs_sat26DvmI = new $hs.Thunk();
                hs_sat26DvmI.evaluateOnce = function () {
                    var hs_wild226Dvn0 = hs_t226DuxQ;
                    if (hs_t226DuxQ.notEvaluated) {
                        hs_wild226Dvn0 = hs_t226DuxQ.hscall();
                    }
                    switch (hs_wild226Dvn0.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [0];
                        return $res;
                    case 2:
                        var hs_s26DuxX = hs_wild226Dvn0.data[0];
                        if (hs_s26DuxX.notEvaluated) {
                            return hs_s26DuxX.hscall();
                        } else {
                            return hs_s26DuxX;
                        }
                    case 3:
                        var hs_s26Duy3 = hs_wild226Dvn0.data[0];
                        if (hs_s26Duy3.notEvaluated) {
                            return hs_s26Duy3.hscall();
                        } else {
                            return hs_s26Duy3;
                        }
                    }
                };
                var hs_sat26DvmJ = new $hs.Thunk();
                hs_sat26DvmJ.evaluateOnce = function () {
                    var hs_sat26DvmM = new $hs.Thunk();
                    hs_sat26DvmM.evaluateOnce = function () {
                        var hs_wild226DvmR = hs_t126Duvj;
                        if (hs_t126Duvj.notEvaluated) {
                            hs_wild226DvmR = hs_t126Duvj.hscall();
                        }
                        switch (hs_wild226DvmR.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [0];
                            return $res;
                        case 2:
                            var hs_s26DuxH = hs_wild226DvmR.data[0];
                            if (hs_s26DuxH.notEvaluated) {
                                return hs_s26DuxH.hscall();
                            } else {
                                return hs_s26DuxH;
                            }
                        case 3:
                            var hs_s26DuxN = hs_wild226DvmR.data[0];
                            if (hs_s26DuxN.notEvaluated) {
                                return hs_s26DuxN.hscall();
                            } else {
                                return hs_s26DuxN;
                            }
                        }
                    };
                    var hs_sat26DvmL = new $hs.Data(1);
                    hs_sat26DvmL.data = [1];
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DvmL, hs_sat26DvmM);
                };
                var hs_tpl26Duye = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DvmJ, hs_sat26DvmI);
                var hs_nt26Duyf = hs_k126DuvQ;
                if (hs_k126DuvQ.notEvaluated) {
                    hs_nt26Duyf = hs_k126DuvQ.hscall();
                }
                var hs_tpl126Duyg = hs_p126Duve;
                if (hs_p126Duve.notEvaluated) {
                    hs_tpl126Duyg = hs_p126Duve.hscall();
                }
                var hs_tpl226Duyi = hs_t126Duvj;
                if (hs_t126Duvj.notEvaluated) {
                    hs_tpl226Duyi = hs_t126Duvj.hscall();
                }
                var hs_nt126Duyj = hs_m126DuvW;
                if (hs_m126DuvW.notEvaluated) {
                    hs_nt126Duyj = hs_m126DuvW.hscall();
                }
                var hs_sat26DvmE = new $hs.Data(1);
                hs_sat26DvmE.data = [hs_nt26Duyf, hs_tpl126Duyg, hs_v126Duw2];
                var $res = new $hs.Data(2);
                $res.data = [hs_tpl26Duye, hs_sat26DvmE, hs_tpl226Duyi, hs_nt126Duyj, hs_t226DuxQ];
                return $res;
            };
            var hs_sat26Dvmh = new $hs.Thunk();
            hs_sat26Dvmh.evaluateOnce = function () {
                var hs_wild226Dvmz = hs_t326DuyB;
                if (hs_t326DuyB.notEvaluated) {
                    hs_wild226Dvmz = hs_t326DuyB.hscall();
                }
                switch (hs_wild226Dvmz.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [0];
                    return $res;
                case 2:
                    var hs_s26DuyI = hs_wild226Dvmz.data[0];
                    if (hs_s26DuyI.notEvaluated) {
                        return hs_s26DuyI.hscall();
                    } else {
                        return hs_s26DuyI;
                    }
                case 3:
                    var hs_s26DuyO = hs_wild226Dvmz.data[0];
                    if (hs_s26DuyO.notEvaluated) {
                        return hs_s26DuyO.hscall();
                    } else {
                        return hs_s26DuyO;
                    }
                }
            };
            var hs_sat26Dvmi = new $hs.Thunk();
            hs_sat26Dvmi.evaluateOnce = function () {
                var hs_sat26Dvml = new $hs.Thunk();
                hs_sat26Dvml.evaluateOnce = function () {
                    var hs_wild226Dvmq = hs_tl26Duyk;
                    if (hs_tl26Duyk.notEvaluated) {
                        hs_wild226Dvmq = hs_tl26Duyk.hscall();
                    }
                    switch (hs_wild226Dvmq.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [0];
                        return $res;
                    case 2:
                        var hs_s26Duys = hs_wild226Dvmq.data[0];
                        if (hs_s26Duys.notEvaluated) {
                            return hs_s26Duys.hscall();
                        } else {
                            return hs_s26Duys;
                        }
                    case 3:
                        var hs_s26Duyy = hs_wild226Dvmq.data[0];
                        if (hs_s26Duyy.notEvaluated) {
                            return hs_s26Duyy.hscall();
                        } else {
                            return hs_s26Duyy;
                        }
                    }
                };
                var hs_sat26Dvmk = new $hs.Data(1);
                hs_sat26Dvmk.data = [1];
                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dvmk, hs_sat26Dvml);
            };
            var hs_tpl26DuyT = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dvmi, hs_sat26Dvmh);
            var hs_tpl126DuyY = hs_tl26Duyk;
            if (hs_tl26Duyk.notEvaluated) {
                hs_tpl126DuyY = hs_tl26Duyk.hscall();
            }
            var hs_sat26Dvme = new $hs.Data(1);
            hs_sat26Dvme.data = [hs_k226DuyU, hs_p226DuyV, hs_v226DuyW];
            var $res = new $hs.Data(3);
            $res.data = [hs_tpl26DuyT, hs_sat26Dvme, hs_tpl126DuyY, hs_m226DuyZ, hs_t326DuyB];
            return $res;
        }
    };
    hs_rsingleLeft25tyTN.evaluate = function (hs_k126Duzk, hs_p126Duzl, hs_v126Duzm, hs_t126Duzo, hs_m126DuzW, hs_ds26Duz6) {
        var hs_wild26Dvn9 = hs_ds26Duz6;
        if (hs_ds26Duz6.notEvaluated) {
            hs_wild26Dvn9 = hs_ds26Duz6.hscall();
        }
        switch (hs_wild26Dvn9.tag) {
        case 1:
            var hs_sat26Dvos = new $hs.Thunk();
            hs_sat26Dvos.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("malformed tree\x00");
            };
            var hs_sat26Dvor = new $hs.Thunk();
            hs_sat26Dvor.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("rsingleLeft\x00");
            };
            return hs_moduleError25tyTX.hscall(hs_sat26Dvor, hs_sat26Dvos);
        case 2:
            var hs_ds226Duzf = hs_wild26Dvn9.data[1];
            var hs_t226DuzE = hs_wild26Dvn9.data[2];
            var hs_m226DuA7 = hs_wild26Dvn9.data[3];
            var hs_t326DuA8 = hs_wild26Dvn9.data[4];
            var hs_wild126Dvn8 = hs_ds226Duzf;
            if (hs_ds226Duzf.notEvaluated) {
                hs_wild126Dvn8 = hs_ds226Duzf.hscall();
            }
            var hs_k226DuA0 = hs_wild126Dvn8.data[0];
            var hs_p226DuA1 = hs_wild126Dvn8.data[1];
            var hs_v226DuA2 = hs_wild126Dvn8.data[2];
            var hs_sat26Dvn7 = new $hs.Thunk();
            hs_sat26Dvn7.evaluateOnce = function () {
                var hs_sat26Dvnd = new $hs.Thunk();
                hs_sat26Dvnd.evaluateOnce = function () {
                    var hs_wild226Dvnv = hs_t226DuzE;
                    if (hs_t226DuzE.notEvaluated) {
                        hs_wild226Dvnv = hs_t226DuzE.hscall();
                    }
                    switch (hs_wild226Dvnv.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [0];
                        return $res;
                    case 2:
                        var hs_s26DuzL = hs_wild226Dvnv.data[0];
                        if (hs_s26DuzL.notEvaluated) {
                            return hs_s26DuzL.hscall();
                        } else {
                            return hs_s26DuzL;
                        }
                    case 3:
                        var hs_s26DuzR = hs_wild226Dvnv.data[0];
                        if (hs_s26DuzR.notEvaluated) {
                            return hs_s26DuzR.hscall();
                        } else {
                            return hs_s26DuzR;
                        }
                    }
                };
                var hs_sat26Dvne = new $hs.Thunk();
                hs_sat26Dvne.evaluateOnce = function () {
                    var hs_sat26Dvnh = new $hs.Thunk();
                    hs_sat26Dvnh.evaluateOnce = function () {
                        var hs_wild226Dvnm = hs_t126Duzo;
                        if (hs_t126Duzo.notEvaluated) {
                            hs_wild226Dvnm = hs_t126Duzo.hscall();
                        }
                        switch (hs_wild226Dvnm.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [0];
                            return $res;
                        case 2:
                            var hs_s26Duzv = hs_wild226Dvnm.data[0];
                            if (hs_s26Duzv.notEvaluated) {
                                return hs_s26Duzv.hscall();
                            } else {
                                return hs_s26Duzv;
                            }
                        case 3:
                            var hs_s26DuzB = hs_wild226Dvnm.data[0];
                            if (hs_s26DuzB.notEvaluated) {
                                return hs_s26DuzB.hscall();
                            } else {
                                return hs_s26DuzB;
                            }
                        }
                    };
                    var hs_sat26Dvng = new $hs.Data(1);
                    hs_sat26Dvng.data = [1];
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dvng, hs_sat26Dvnh);
                };
                var hs_tpl26DuzZ = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dvne, hs_sat26Dvnd);
                var hs_tpl126DuA4 = hs_t126Duzo;
                if (hs_t126Duzo.notEvaluated) {
                    hs_tpl126DuA4 = hs_t126Duzo.hscall();
                }
                var hs_nt26DuA5 = hs_m126DuzW;
                if (hs_m126DuzW.notEvaluated) {
                    hs_nt26DuA5 = hs_m126DuzW.hscall();
                }
                var hs_sat26Dvnb = new $hs.Data(1);
                hs_sat26Dvnb.data = [hs_k226DuA0, hs_p226DuA1, hs_v226DuA2];
                var $res = new $hs.Data(3);
                $res.data = [hs_tpl26DuzZ, hs_sat26Dvnb, hs_tpl126DuA4, hs_nt26DuA5, hs_t226DuzE];
                return $res;
            };
            return hs_rloser25tyTE.hscall(hs_k126Duzk, hs_p126Duzl, hs_v126Duzm, hs_sat26Dvn7, hs_m226DuA7, hs_t326DuA8);
        case 3:
            var hs_ds226DuAe = hs_wild26Dvn9.data[1];
            var hs_t226DuAA = hs_wild26Dvn9.data[2];
            var hs_m226DuBJ = hs_wild26Dvn9.data[3];
            var hs_t326DuBl = hs_wild26Dvn9.data[4];
            var hs_wild126DvnB = hs_ds226DuAe;
            if (hs_ds226DuAe.notEvaluated) {
                hs_wild126DvnB = hs_ds226DuAe.hscall();
            }
            var hs_k226DuBE = hs_wild126DvnB.data[0];
            var hs_p226DuBF = hs_wild126DvnB.data[1];
            var hs_v226DuBG = hs_wild126DvnB.data[2];
            var hs_tl26DuB4 = new $hs.Thunk();
            hs_tl26DuB4.evaluateOnce = function () {
                var hs_sat26Dvo4 = new $hs.Thunk();
                hs_sat26Dvo4.evaluateOnce = function () {
                    var hs_wild226Dvom = hs_t226DuAA;
                    if (hs_t226DuAA.notEvaluated) {
                        hs_wild226Dvom = hs_t226DuAA.hscall();
                    }
                    switch (hs_wild226Dvom.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [0];
                        return $res;
                    case 2:
                        var hs_s26DuAH = hs_wild226Dvom.data[0];
                        if (hs_s26DuAH.notEvaluated) {
                            return hs_s26DuAH.hscall();
                        } else {
                            return hs_s26DuAH;
                        }
                    case 3:
                        var hs_s26DuAN = hs_wild226Dvom.data[0];
                        if (hs_s26DuAN.notEvaluated) {
                            return hs_s26DuAN.hscall();
                        } else {
                            return hs_s26DuAN;
                        }
                    }
                };
                var hs_sat26Dvo5 = new $hs.Thunk();
                hs_sat26Dvo5.evaluateOnce = function () {
                    var hs_sat26Dvo8 = new $hs.Thunk();
                    hs_sat26Dvo8.evaluateOnce = function () {
                        var hs_wild226Dvod = hs_t126Duzo;
                        if (hs_t126Duzo.notEvaluated) {
                            hs_wild226Dvod = hs_t126Duzo.hscall();
                        }
                        switch (hs_wild226Dvod.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [0];
                            return $res;
                        case 2:
                            var hs_s26DuAr = hs_wild226Dvod.data[0];
                            if (hs_s26DuAr.notEvaluated) {
                                return hs_s26DuAr.hscall();
                            } else {
                                return hs_s26DuAr;
                            }
                        case 3:
                            var hs_s26DuAx = hs_wild226Dvod.data[0];
                            if (hs_s26DuAx.notEvaluated) {
                                return hs_s26DuAx.hscall();
                            } else {
                                return hs_s26DuAx;
                            }
                        }
                    };
                    var hs_sat26Dvo7 = new $hs.Data(1);
                    hs_sat26Dvo7.data = [1];
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dvo7, hs_sat26Dvo8);
                };
                var hs_tpl26DuAY = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dvo5, hs_sat26Dvo4);
                var hs_nt26DuAZ = hs_k126Duzk;
                if (hs_k126Duzk.notEvaluated) {
                    hs_nt26DuAZ = hs_k126Duzk.hscall();
                }
                var hs_tpl126DuB0 = hs_p126Duzl;
                if (hs_p126Duzl.notEvaluated) {
                    hs_tpl126DuB0 = hs_p126Duzl.hscall();
                }
                var hs_tpl226DuB2 = hs_t126Duzo;
                if (hs_t126Duzo.notEvaluated) {
                    hs_tpl226DuB2 = hs_t126Duzo.hscall();
                }
                var hs_nt126DuB3 = hs_m126DuzW;
                if (hs_m126DuzW.notEvaluated) {
                    hs_nt126DuB3 = hs_m126DuzW.hscall();
                }
                var hs_sat26Dvo0 = new $hs.Data(1);
                hs_sat26Dvo0.data = [hs_nt26DuAZ, hs_tpl126DuB0, hs_v126Duzm];
                var $res = new $hs.Data(3);
                $res.data = [hs_tpl26DuAY, hs_sat26Dvo0, hs_tpl226DuB2, hs_nt126DuB3, hs_t226DuAA];
                return $res;
            };
            var hs_sat26DvnD = new $hs.Thunk();
            hs_sat26DvnD.evaluateOnce = function () {
                var hs_wild226DvnV = hs_t326DuBl;
                if (hs_t326DuBl.notEvaluated) {
                    hs_wild226DvnV = hs_t326DuBl.hscall();
                }
                switch (hs_wild226DvnV.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [0];
                    return $res;
                case 2:
                    var hs_s26DuBs = hs_wild226DvnV.data[0];
                    if (hs_s26DuBs.notEvaluated) {
                        return hs_s26DuBs.hscall();
                    } else {
                        return hs_s26DuBs;
                    }
                case 3:
                    var hs_s26DuBy = hs_wild226DvnV.data[0];
                    if (hs_s26DuBy.notEvaluated) {
                        return hs_s26DuBy.hscall();
                    } else {
                        return hs_s26DuBy;
                    }
                }
            };
            var hs_sat26DvnE = new $hs.Thunk();
            hs_sat26DvnE.evaluateOnce = function () {
                var hs_sat26DvnH = new $hs.Thunk();
                hs_sat26DvnH.evaluateOnce = function () {
                    var hs_wild226DvnM = hs_tl26DuB4;
                    if (hs_tl26DuB4.notEvaluated) {
                        hs_wild226DvnM = hs_tl26DuB4.hscall();
                    }
                    switch (hs_wild226DvnM.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [0];
                        return $res;
                    case 2:
                        var hs_s26DuBc = hs_wild226DvnM.data[0];
                        if (hs_s26DuBc.notEvaluated) {
                            return hs_s26DuBc.hscall();
                        } else {
                            return hs_s26DuBc;
                        }
                    case 3:
                        var hs_s26DuBi = hs_wild226DvnM.data[0];
                        if (hs_s26DuBi.notEvaluated) {
                            return hs_s26DuBi.hscall();
                        } else {
                            return hs_s26DuBi;
                        }
                    }
                };
                var hs_sat26DvnG = new $hs.Data(1);
                hs_sat26DvnG.data = [1];
                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DvnG, hs_sat26DvnH);
            };
            var hs_tpl26DuBD = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DvnE, hs_sat26DvnD);
            var hs_tpl126DuBI = hs_tl26DuB4;
            if (hs_tl26DuB4.notEvaluated) {
                hs_tpl126DuBI = hs_tl26DuB4.hscall();
            }
            var hs_sat26DvnA = new $hs.Data(1);
            hs_sat26DvnA.data = [hs_k226DuBE, hs_p226DuBF, hs_v226DuBG];
            var $res = new $hs.Data(3);
            $res.data = [hs_tpl26DuBD, hs_sat26DvnA, hs_tpl126DuBI, hs_m226DuBJ, hs_t326DuBl];
            return $res;
        }
    };
    hs_rsingleRight25tyTP.evaluate = function (hs_k126DuCD, hs_p126DuCG, hs_v126DuCQ, hs_ds26DuBQ, hs_m226DuCJ, hs_t326DuCm) {
        var hs_wild26Dvov = hs_ds26DuBQ;
        if (hs_ds26DuBQ.notEvaluated) {
            hs_wild26Dvov = hs_ds26DuBQ.hscall();
        }
        switch (hs_wild26Dvov.tag) {
        case 1:
            var hs_sat26DvqE = new $hs.Thunk();
            hs_sat26DvqE.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("malformed tree\x00");
            };
            var hs_sat26DvqD = new $hs.Thunk();
            hs_sat26DvqD.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("rsingleRight\x00");
            };
            return hs_moduleError25tyTX.hscall(hs_sat26DvqD, hs_sat26DvqE);
        case 2:
            var hs_ds226DuBZ = hs_wild26Dvov.data[1];
            var hs_t126DuCW = hs_wild26Dvov.data[2];
            var hs_m126DuDy = hs_wild26Dvov.data[3];
            var hs_t226DuC6 = hs_wild26Dvov.data[4];
            var hs_wild126Dvou = hs_ds226DuBZ;
            if (hs_ds226DuBZ.notEvaluated) {
                hs_wild126Dvou = hs_ds226DuBZ.hscall();
            }
            var hs_k226DuDu = hs_wild126Dvou.data[0];
            var hs_p226DuDv = hs_wild126Dvou.data[1];
            var hs_v226DuDw = hs_wild126Dvou.data[2];
            var hs_tr26DuCU = new $hs.Thunk();
            hs_tr26DuCU.evaluateOnce = function () {
                var hs_sat26DvoY = new $hs.Thunk();
                hs_sat26DvoY.evaluateOnce = function () {
                    var hs_wild226Dvpg = hs_t326DuCm;
                    if (hs_t326DuCm.notEvaluated) {
                        hs_wild226Dvpg = hs_t326DuCm.hscall();
                    }
                    switch (hs_wild226Dvpg.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [0];
                        return $res;
                    case 2:
                        var hs_s26DuCt = hs_wild226Dvpg.data[0];
                        if (hs_s26DuCt.notEvaluated) {
                            return hs_s26DuCt.hscall();
                        } else {
                            return hs_s26DuCt;
                        }
                    case 3:
                        var hs_s26DuCz = hs_wild226Dvpg.data[0];
                        if (hs_s26DuCz.notEvaluated) {
                            return hs_s26DuCz.hscall();
                        } else {
                            return hs_s26DuCz;
                        }
                    }
                };
                var hs_sat26DvoZ = new $hs.Thunk();
                hs_sat26DvoZ.evaluateOnce = function () {
                    var hs_sat26Dvp2 = new $hs.Thunk();
                    hs_sat26Dvp2.evaluateOnce = function () {
                        var hs_wild226Dvp7 = hs_t226DuC6;
                        if (hs_t226DuC6.notEvaluated) {
                            hs_wild226Dvp7 = hs_t226DuC6.hscall();
                        }
                        switch (hs_wild226Dvp7.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [0];
                            return $res;
                        case 2:
                            var hs_s26DuCd = hs_wild226Dvp7.data[0];
                            if (hs_s26DuCd.notEvaluated) {
                                return hs_s26DuCd.hscall();
                            } else {
                                return hs_s26DuCd;
                            }
                        case 3:
                            var hs_s26DuCj = hs_wild226Dvp7.data[0];
                            if (hs_s26DuCj.notEvaluated) {
                                return hs_s26DuCj.hscall();
                            } else {
                                return hs_s26DuCj;
                            }
                        }
                    };
                    var hs_sat26Dvp1 = new $hs.Data(1);
                    hs_sat26Dvp1.data = [1];
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dvp1, hs_sat26Dvp2);
                };
                var hs_tpl26DuCN = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DvoZ, hs_sat26DvoY);
                var hs_nt26DuCO = hs_k126DuCD;
                if (hs_k126DuCD.notEvaluated) {
                    hs_nt26DuCO = hs_k126DuCD.hscall();
                }
                var hs_tpl126DuCP = hs_p126DuCG;
                if (hs_p126DuCG.notEvaluated) {
                    hs_tpl126DuCP = hs_p126DuCG.hscall();
                }
                var hs_nt126DuCS = hs_m226DuCJ;
                if (hs_m226DuCJ.notEvaluated) {
                    hs_nt126DuCS = hs_m226DuCJ.hscall();
                }
                var hs_tpl226DuCT = hs_t326DuCm;
                if (hs_t326DuCm.notEvaluated) {
                    hs_tpl226DuCT = hs_t326DuCm.hscall();
                }
                var hs_sat26DvoU = new $hs.Data(1);
                hs_sat26DvoU.data = [hs_nt26DuCO, hs_tpl126DuCP, hs_v126DuCQ];
                var $res = new $hs.Data(3);
                $res.data = [hs_tpl26DuCN, hs_sat26DvoU, hs_t226DuC6, hs_nt126DuCS, hs_tpl226DuCT];
                return $res;
            };
            var hs_sat26Dvox = new $hs.Thunk();
            hs_sat26Dvox.evaluateOnce = function () {
                var hs_wild226DvoP = hs_tr26DuCU;
                if (hs_tr26DuCU.notEvaluated) {
                    hs_wild226DvoP = hs_tr26DuCU.hscall();
                }
                switch (hs_wild226DvoP.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [0];
                    return $res;
                case 2:
                    var hs_s26DuDi = hs_wild226DvoP.data[0];
                    if (hs_s26DuDi.notEvaluated) {
                        return hs_s26DuDi.hscall();
                    } else {
                        return hs_s26DuDi;
                    }
                case 3:
                    var hs_s26DuDo = hs_wild226DvoP.data[0];
                    if (hs_s26DuDo.notEvaluated) {
                        return hs_s26DuDo.hscall();
                    } else {
                        return hs_s26DuDo;
                    }
                }
            };
            var hs_sat26Dvoy = new $hs.Thunk();
            hs_sat26Dvoy.evaluateOnce = function () {
                var hs_sat26DvoB = new $hs.Thunk();
                hs_sat26DvoB.evaluateOnce = function () {
                    var hs_wild226DvoG = hs_t126DuCW;
                    if (hs_t126DuCW.notEvaluated) {
                        hs_wild226DvoG = hs_t126DuCW.hscall();
                    }
                    switch (hs_wild226DvoG.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [0];
                        return $res;
                    case 2:
                        var hs_s26DuD3 = hs_wild226DvoG.data[0];
                        if (hs_s26DuD3.notEvaluated) {
                            return hs_s26DuD3.hscall();
                        } else {
                            return hs_s26DuD3;
                        }
                    case 3:
                        var hs_s26DuD9 = hs_wild226DvoG.data[0];
                        if (hs_s26DuD9.notEvaluated) {
                            return hs_s26DuD9.hscall();
                        } else {
                            return hs_s26DuD9;
                        }
                    }
                };
                var hs_sat26DvoA = new $hs.Data(1);
                hs_sat26DvoA.data = [1];
                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DvoA, hs_sat26DvoB);
            };
            var hs_tpl26DuDt = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dvoy, hs_sat26Dvox);
            var hs_tpl126DuDz = hs_tr26DuCU;
            if (hs_tr26DuCU.notEvaluated) {
                hs_tpl126DuDz = hs_tr26DuCU.hscall();
            }
            var hs_sat26Dvot = new $hs.Data(1);
            hs_sat26Dvot.data = [hs_k226DuDu, hs_p226DuDv, hs_v226DuDw];
            var $res = new $hs.Data(2);
            $res.data = [hs_tpl26DuDt, hs_sat26Dvot, hs_t126DuCW, hs_m126DuDy, hs_tpl126DuDz];
            return $res;
        case 3:
            var hs_ds226DuDF = hs_wild26Dvov.data[1];
            var hs_t126DuEz = hs_wild26Dvov.data[2];
            var hs_m126DuFa = hs_wild26Dvov.data[3];
            var hs_t226DuDO = hs_wild26Dvov.data[4];
            var hs_wild126Dvpm = hs_ds226DuDF;
            if (hs_ds226DuDF.notEvaluated) {
                hs_wild126Dvpm = hs_ds226DuDF.hscall();
            }
            var hs_k226DuF7 = hs_wild126Dvpm.data[0];
            var hs_p226DuDK = hs_wild126Dvpm.data[1];
            var hs_v226DuF8 = hs_wild126Dvpm.data[2];
            var hs_wild226Dvpo = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_p126DuCG, hs_p226DuDK);
            switch (hs_wild226Dvpo.tag) {
            case 1:
                var hs_tr26DuEx = new $hs.Thunk();
                hs_tr26DuEx.evaluateOnce = function () {
                    var hs_sat26Dvqg = new $hs.Thunk();
                    hs_sat26Dvqg.evaluateOnce = function () {
                        var hs_wild326Dvqy = hs_t326DuCm;
                        if (hs_t326DuCm.notEvaluated) {
                            hs_wild326Dvqy = hs_t326DuCm.hscall();
                        }
                        switch (hs_wild326Dvqy.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [0];
                            return $res;
                        case 2:
                            var hs_s26DuEa = hs_wild326Dvqy.data[0];
                            if (hs_s26DuEa.notEvaluated) {
                                return hs_s26DuEa.hscall();
                            } else {
                                return hs_s26DuEa;
                            }
                        case 3:
                            var hs_s26DuEg = hs_wild326Dvqy.data[0];
                            if (hs_s26DuEg.notEvaluated) {
                                return hs_s26DuEg.hscall();
                            } else {
                                return hs_s26DuEg;
                            }
                        }
                    };
                    var hs_sat26Dvqh = new $hs.Thunk();
                    hs_sat26Dvqh.evaluateOnce = function () {
                        var hs_sat26Dvqk = new $hs.Thunk();
                        hs_sat26Dvqk.evaluateOnce = function () {
                            var hs_wild326Dvqp = hs_t226DuDO;
                            if (hs_t226DuDO.notEvaluated) {
                                hs_wild326Dvqp = hs_t226DuDO.hscall();
                            }
                            switch (hs_wild326Dvqp.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [0];
                                return $res;
                            case 2:
                                var hs_s26DuDV = hs_wild326Dvqp.data[0];
                                if (hs_s26DuDV.notEvaluated) {
                                    return hs_s26DuDV.hscall();
                                } else {
                                    return hs_s26DuDV;
                                }
                            case 3:
                                var hs_s26DuE1 = hs_wild326Dvqp.data[0];
                                if (hs_s26DuE1.notEvaluated) {
                                    return hs_s26DuE1.hscall();
                                } else {
                                    return hs_s26DuE1;
                                }
                            }
                        };
                        var hs_sat26Dvqj = new $hs.Data(1);
                        hs_sat26Dvqj.data = [1];
                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dvqj, hs_sat26Dvqk);
                    };
                    var hs_tpl26DuEr = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dvqh, hs_sat26Dvqg);
                    var hs_nt26DuEs = hs_k126DuCD;
                    if (hs_k126DuCD.notEvaluated) {
                        hs_nt26DuEs = hs_k126DuCD.hscall();
                    }
                    var hs_tpl126DuEt = hs_p126DuCG;
                    if (hs_p126DuCG.notEvaluated) {
                        hs_tpl126DuEt = hs_p126DuCG.hscall();
                    }
                    var hs_nt126DuEv = hs_m226DuCJ;
                    if (hs_m226DuCJ.notEvaluated) {
                        hs_nt126DuEv = hs_m226DuCJ.hscall();
                    }
                    var hs_tpl226DuEw = hs_t326DuCm;
                    if (hs_t326DuCm.notEvaluated) {
                        hs_tpl226DuEw = hs_t326DuCm.hscall();
                    }
                    var hs_sat26Dvqc = new $hs.Data(1);
                    hs_sat26Dvqc.data = [hs_nt26DuEs, hs_tpl126DuEt, hs_v126DuCQ];
                    var $res = new $hs.Data(3);
                    $res.data = [hs_tpl26DuEr, hs_sat26Dvqc, hs_t226DuDO, hs_nt126DuEv, hs_tpl226DuEw];
                    return $res;
                };
                var hs_sat26DvpP = new $hs.Thunk();
                hs_sat26DvpP.evaluateOnce = function () {
                    var hs_wild326Dvq7 = hs_tr26DuEx;
                    if (hs_tr26DuEx.notEvaluated) {
                        hs_wild326Dvq7 = hs_tr26DuEx.hscall();
                    }
                    switch (hs_wild326Dvq7.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [0];
                        return $res;
                    case 2:
                        var hs_s26DuEV = hs_wild326Dvq7.data[0];
                        if (hs_s26DuEV.notEvaluated) {
                            return hs_s26DuEV.hscall();
                        } else {
                            return hs_s26DuEV;
                        }
                    case 3:
                        var hs_s26DuF1 = hs_wild326Dvq7.data[0];
                        if (hs_s26DuF1.notEvaluated) {
                            return hs_s26DuF1.hscall();
                        } else {
                            return hs_s26DuF1;
                        }
                    }
                };
                var hs_sat26DvpQ = new $hs.Thunk();
                hs_sat26DvpQ.evaluateOnce = function () {
                    var hs_sat26DvpT = new $hs.Thunk();
                    hs_sat26DvpT.evaluateOnce = function () {
                        var hs_wild326DvpY = hs_t126DuEz;
                        if (hs_t126DuEz.notEvaluated) {
                            hs_wild326DvpY = hs_t126DuEz.hscall();
                        }
                        switch (hs_wild326DvpY.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [0];
                            return $res;
                        case 2:
                            var hs_s26DuEG = hs_wild326DvpY.data[0];
                            if (hs_s26DuEG.notEvaluated) {
                                return hs_s26DuEG.hscall();
                            } else {
                                return hs_s26DuEG;
                            }
                        case 3:
                            var hs_s26DuEM = hs_wild326DvpY.data[0];
                            if (hs_s26DuEM.notEvaluated) {
                                return hs_s26DuEM.hscall();
                            } else {
                                return hs_s26DuEM;
                            }
                        }
                    };
                    var hs_sat26DvpS = new $hs.Data(1);
                    hs_sat26DvpS.data = [1];
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DvpS, hs_sat26DvpT);
                };
                var hs_tpl26DuF6 = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DvpQ, hs_sat26DvpP);
                var hs_tpl126DuFb = hs_tr26DuEx;
                if (hs_tr26DuEx.notEvaluated) {
                    hs_tpl126DuFb = hs_tr26DuEx.hscall();
                }
                var hs_sat26DvpO = new $hs.Data(1);
                hs_sat26DvpO.data = [hs_k226DuF7, hs_p226DuDK, hs_v226DuF8];
                var $res = new $hs.Data(3);
                $res.data = [hs_tpl26DuF6, hs_sat26DvpO, hs_t126DuEz, hs_m126DuFa, hs_tpl126DuFb];
                return $res;
            case 2:
                var hs_sat26Dvpl = new $hs.Thunk();
                hs_sat26Dvpl.evaluateOnce = function () {
                    var hs_sat26Dvpr = new $hs.Thunk();
                    hs_sat26Dvpr.evaluateOnce = function () {
                        var hs_wild326DvpJ = hs_t326DuCm;
                        if (hs_t326DuCm.notEvaluated) {
                            hs_wild326DvpJ = hs_t326DuCm.hscall();
                        }
                        switch (hs_wild326DvpJ.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [0];
                            return $res;
                        case 2:
                            var hs_s26DuFy = hs_wild326DvpJ.data[0];
                            if (hs_s26DuFy.notEvaluated) {
                                return hs_s26DuFy.hscall();
                            } else {
                                return hs_s26DuFy;
                            }
                        case 3:
                            var hs_s26DuFE = hs_wild326DvpJ.data[0];
                            if (hs_s26DuFE.notEvaluated) {
                                return hs_s26DuFE.hscall();
                            } else {
                                return hs_s26DuFE;
                            }
                        }
                    };
                    var hs_sat26Dvps = new $hs.Thunk();
                    hs_sat26Dvps.evaluateOnce = function () {
                        var hs_sat26Dvpv = new $hs.Thunk();
                        hs_sat26Dvpv.evaluateOnce = function () {
                            var hs_wild326DvpA = hs_t226DuDO;
                            if (hs_t226DuDO.notEvaluated) {
                                hs_wild326DvpA = hs_t226DuDO.hscall();
                            }
                            switch (hs_wild326DvpA.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [0];
                                return $res;
                            case 2:
                                var hs_s26DuFj = hs_wild326DvpA.data[0];
                                if (hs_s26DuFj.notEvaluated) {
                                    return hs_s26DuFj.hscall();
                                } else {
                                    return hs_s26DuFj;
                                }
                            case 3:
                                var hs_s26DuFp = hs_wild326DvpA.data[0];
                                if (hs_s26DuFp.notEvaluated) {
                                    return hs_s26DuFp.hscall();
                                } else {
                                    return hs_s26DuFp;
                                }
                            }
                        };
                        var hs_sat26Dvpu = new $hs.Data(1);
                        hs_sat26Dvpu.data = [1];
                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dvpu, hs_sat26Dvpv);
                    };
                    var hs_tpl26DuFL = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dvps, hs_sat26Dvpr);
                    var hs_nt26DuFN = hs_m226DuCJ;
                    if (hs_m226DuCJ.notEvaluated) {
                        hs_nt26DuFN = hs_m226DuCJ.hscall();
                    }
                    var hs_tpl126DuFO = hs_t326DuCm;
                    if (hs_t326DuCm.notEvaluated) {
                        hs_tpl126DuFO = hs_t326DuCm.hscall();
                    }
                    var hs_sat26Dvpp = new $hs.Data(1);
                    hs_sat26Dvpp.data = [hs_k226DuF7, hs_p226DuDK, hs_v226DuF8];
                    var $res = new $hs.Data(2);
                    $res.data = [hs_tpl26DuFL, hs_sat26Dvpp, hs_t226DuDO, hs_nt26DuFN, hs_tpl126DuFO];
                    return $res;
                };
                return hs_rloser25tyTE.hscall(hs_k126DuCD, hs_p126DuCG, hs_v126DuCQ, hs_t126DuEz, hs_m126DuFa, hs_sat26Dvpl);
            }
        }
    };
    hs_lbalance25tyTG.evaluate = function (hs_k26DuHr, hs_p26DuHs, hs_v26DuHt, hs_l26DuFW, hs_m26DuHu, hs_r26DuGb) {
        var hs_sat26DvqF = new $hs.Data(1);
        hs_sat26DvqF.data = [2];
        var hs_sat26DvqG = new $hs.Thunk();
        hs_sat26DvqG.evaluateOnce = function () {
            var hs_sat26Dvsp = new $hs.Thunk();
            hs_sat26Dvsp.evaluateOnce = function () {
                var hs_wild26DvsD = hs_r26DuGb;
                if (hs_r26DuGb.notEvaluated) {
                    hs_wild26DvsD = hs_r26DuGb.hscall();
                }
                switch (hs_wild26DvsD.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [0];
                    return $res;
                case 2:
                    var hs_s26DuGi = hs_wild26DvsD.data[0];
                    if (hs_s26DuGi.notEvaluated) {
                        return hs_s26DuGi.hscall();
                    } else {
                        return hs_s26DuGi;
                    }
                case 3:
                    var hs_s26DuGo = hs_wild26DvsD.data[0];
                    if (hs_s26DuGo.notEvaluated) {
                        return hs_s26DuGo.hscall();
                    } else {
                        return hs_s26DuGo;
                    }
                }
            };
            var hs_sat26Dvso = new $hs.Thunk();
            hs_sat26Dvso.evaluateOnce = function () {
                var hs_wild26Dvsu = hs_l26DuFW;
                if (hs_l26DuFW.notEvaluated) {
                    hs_wild26Dvsu = hs_l26DuFW.hscall();
                }
                switch (hs_wild26Dvsu.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [0];
                    return $res;
                case 2:
                    var hs_s26DuG3 = hs_wild26Dvsu.data[0];
                    if (hs_s26DuG3.notEvaluated) {
                        return hs_s26DuG3.hscall();
                    } else {
                        return hs_s26DuG3;
                    }
                case 3:
                    var hs_s26DuG9 = hs_wild26Dvsu.data[0];
                    if (hs_s26DuG9.notEvaluated) {
                        return hs_s26DuG9.hscall();
                    } else {
                        return hs_s26DuG9;
                    }
                }
            };
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dvso, hs_sat26Dvsp);
        };
        var hs_wild26DvqH = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26DvqG, hs_sat26DvqF);
        switch (hs_wild26DvqH.tag) {
        case 1:
            var hs_sat26DvqI = new $hs.Thunk();
            hs_sat26DvqI.evaluateOnce = function () {
                var hs_sat26Dvse = new $hs.Thunk();
                hs_sat26Dvse.evaluateOnce = function () {
                    var hs_wild126Dvsj = hs_l26DuFW;
                    if (hs_l26DuFW.notEvaluated) {
                        hs_wild126Dvsj = hs_l26DuFW.hscall();
                    }
                    switch (hs_wild126Dvsj.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [0];
                        return $res;
                    case 2:
                        var hs_s26DuGN = hs_wild126Dvsj.data[0];
                        if (hs_s26DuGN.notEvaluated) {
                            return hs_s26DuGN.hscall();
                        } else {
                            return hs_s26DuGN;
                        }
                    case 3:
                        var hs_s26DuGT = hs_wild126Dvsj.data[0];
                        if (hs_s26DuGT.notEvaluated) {
                            return hs_s26DuGT.hscall();
                        } else {
                            return hs_s26DuGT;
                        }
                    }
                };
                return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_omega25tyTF, hs_sat26Dvse);
            };
            var hs_sat26DvqJ = new $hs.Thunk();
            hs_sat26DvqJ.evaluateOnce = function () {
                var hs_wild126Dvs9 = hs_r26DuGb;
                if (hs_r26DuGb.notEvaluated) {
                    hs_wild126Dvs9 = hs_r26DuGb.hscall();
                }
                switch (hs_wild126Dvs9.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [0];
                    return $res;
                case 2:
                    var hs_s26DuGz = hs_wild126Dvs9.data[0];
                    if (hs_s26DuGz.notEvaluated) {
                        return hs_s26DuGz.hscall();
                    } else {
                        return hs_s26DuGz;
                    }
                case 3:
                    var hs_s26DuGF = hs_wild126Dvs9.data[0];
                    if (hs_s26DuGF.notEvaluated) {
                        return hs_s26DuGF.hscall();
                    } else {
                        return hs_s26DuGF;
                    }
                }
            };
            var hs_wild126DvqK = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26DvqJ, hs_sat26DvqI);
            switch (hs_wild126DvqK.tag) {
            case 1:
                var hs_sat26Dvrf = new $hs.Thunk();
                hs_sat26Dvrf.evaluateOnce = function () {
                    var hs_sat26DvrV = new $hs.Thunk();
                    hs_sat26DvrV.evaluateOnce = function () {
                        var hs_wild226Dvs0 = hs_r26DuGb;
                        if (hs_r26DuGb.notEvaluated) {
                            hs_wild226Dvs0 = hs_r26DuGb.hscall();
                        }
                        switch (hs_wild226Dvs0.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [0];
                            return $res;
                        case 2:
                            var hs_s26DuHh = hs_wild226Dvs0.data[0];
                            if (hs_s26DuHh.notEvaluated) {
                                return hs_s26DuHh.hscall();
                            } else {
                                return hs_s26DuHh;
                            }
                        case 3:
                            var hs_s26DuHn = hs_wild226Dvs0.data[0];
                            if (hs_s26DuHn.notEvaluated) {
                                return hs_s26DuHn.hscall();
                            } else {
                                return hs_s26DuHn;
                            }
                        }
                    };
                    return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_omega25tyTF, hs_sat26DvrV);
                };
                var hs_sat26Dvrg = new $hs.Thunk();
                hs_sat26Dvrg.evaluateOnce = function () {
                    var hs_wild226DvrQ = hs_l26DuFW;
                    if (hs_l26DuFW.notEvaluated) {
                        hs_wild226DvrQ = hs_l26DuFW.hscall();
                    }
                    switch (hs_wild226DvrQ.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [0];
                        return $res;
                    case 2:
                        var hs_s26DuH3 = hs_wild226DvrQ.data[0];
                        if (hs_s26DuH3.notEvaluated) {
                            return hs_s26DuH3.hscall();
                        } else {
                            return hs_s26DuH3;
                        }
                    case 3:
                        var hs_s26DuH9 = hs_wild226DvrQ.data[0];
                        if (hs_s26DuH9.notEvaluated) {
                            return hs_s26DuH9.hscall();
                        } else {
                            return hs_s26DuH9;
                        }
                    }
                };
                var hs_wild226Dvrh = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26Dvrg, hs_sat26Dvrf);
                switch (hs_wild226Dvrh.tag) {
                case 1:
                    return hs_lloser25tyTD.hscall(hs_k26DuHr, hs_p26DuHs, hs_v26DuHt, hs_l26DuFW, hs_m26DuHu, hs_r26DuGb);
                case 2:
                    var hs_sat26Dvri = new $hs.Thunk();
                    hs_sat26Dvri.evaluateOnce = function () {
                        var hs_wild326DvrH = hs_right25tyTB.hscall(hs_l26DuFW);
                        switch (hs_wild326DvrH.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [0];
                            return $res;
                        case 2:
                            var hs_s26DuHP = hs_wild326DvrH.data[0];
                            if (hs_s26DuHP.notEvaluated) {
                                return hs_s26DuHP.hscall();
                            } else {
                                return hs_s26DuHP;
                            }
                        case 3:
                            var hs_s26DuHV = hs_wild326DvrH.data[0];
                            if (hs_s26DuHV.notEvaluated) {
                                return hs_s26DuHV.hscall();
                            } else {
                                return hs_s26DuHV;
                            }
                        }
                    };
                    var hs_sat26Dvrj = new $hs.Thunk();
                    hs_sat26Dvrj.evaluateOnce = function () {
                        var hs_wild326Dvry = hs_left25tyTA.hscall(hs_l26DuFW);
                        switch (hs_wild326Dvry.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [0];
                            return $res;
                        case 2:
                            var hs_s26DuHB = hs_wild326Dvry.data[0];
                            if (hs_s26DuHB.notEvaluated) {
                                return hs_s26DuHB.hscall();
                            } else {
                                return hs_s26DuHB;
                            }
                        case 3:
                            var hs_s26DuHH = hs_wild326Dvry.data[0];
                            if (hs_s26DuHH.notEvaluated) {
                                return hs_s26DuHH.hscall();
                            } else {
                                return hs_s26DuHH;
                            }
                        }
                    };
                    var hs_wild326Dvrk = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26Dvrj, hs_sat26Dvri);
                    switch (hs_wild326Dvrk.tag) {
                    case 1:
                        var hs_wild426Dvrn = hs_l26DuFW;
                        if (hs_l26DuFW.notEvaluated) {
                            hs_wild426Dvrn = hs_l26DuFW.hscall();
                        }
                        switch (hs_wild426Dvrn.tag) {
                        case 1:
                            var hs_sat26Dvrt = new $hs.Thunk();
                            hs_sat26Dvrt.evaluateOnce = function () {
                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("malformed tree\x00");
                            };
                            var hs_sat26Dvrs = new $hs.Thunk();
                            hs_sat26Dvrs.evaluateOnce = function () {
                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("ldoubleRight\x00");
                            };
                            return hs_moduleError25tyTX.hscall(hs_sat26Dvrs, hs_sat26Dvrt);
                        case 2:
                            var hs_ds126DuI6 = hs_wild426Dvrn.data[1];
                            var hs_t126DuIe = hs_wild426Dvrn.data[2];
                            var hs_m126DuIf = hs_wild426Dvrn.data[3];
                            var hs_t226DuIg = hs_wild426Dvrn.data[4];
                            var hs_wild526Dvrm = hs_ds126DuI6;
                            if (hs_ds126DuI6.notEvaluated) {
                                hs_wild526Dvrm = hs_ds126DuI6.hscall();
                            }
                            var hs_k226DuIb = hs_wild526Dvrm.data[0];
                            var hs_p226DuIc = hs_wild526Dvrm.data[1];
                            var hs_v226DuId = hs_wild526Dvrm.data[2];
                            var hs_sat26Dvrl = new $hs.Thunk();
                            hs_sat26Dvrl.evaluateOnce = function () {
                                return hs_lsingleLeft25tyTM.hscall(hs_k226DuIb, hs_p226DuIc, hs_v226DuId, hs_t126DuIe, hs_m126DuIf, hs_t226DuIg);
                            };
                            return hs_lsingleRight25tyTO.hscall(hs_k26DuHr, hs_p26DuHs, hs_v26DuHt, hs_sat26Dvrl, hs_m26DuHu, hs_r26DuGb);
                        case 3:
                            var hs_ds126DuIn = hs_wild426Dvrn.data[1];
                            var hs_t126DuIv = hs_wild426Dvrn.data[2];
                            var hs_m126DuIw = hs_wild426Dvrn.data[3];
                            var hs_t226DuIx = hs_wild426Dvrn.data[4];
                            var hs_wild526Dvrq = hs_ds126DuIn;
                            if (hs_ds126DuIn.notEvaluated) {
                                hs_wild526Dvrq = hs_ds126DuIn.hscall();
                            }
                            var hs_k226DuIs = hs_wild526Dvrq.data[0];
                            var hs_p226DuIt = hs_wild526Dvrq.data[1];
                            var hs_v226DuIu = hs_wild526Dvrq.data[2];
                            var hs_sat26Dvrp = new $hs.Thunk();
                            hs_sat26Dvrp.evaluateOnce = function () {
                                return hs_rsingleLeft25tyTN.hscall(hs_k226DuIs, hs_p226DuIt, hs_v226DuIu, hs_t126DuIv, hs_m126DuIw, hs_t226DuIx);
                            };
                            return hs_lsingleRight25tyTO.hscall(hs_k26DuHr, hs_p26DuHs, hs_v26DuHt, hs_sat26Dvrp, hs_m26DuHu, hs_r26DuGb);
                        }
                    case 2:
                        return hs_lsingleRight25tyTO.hscall(hs_k26DuHr, hs_p26DuHs, hs_v26DuHt, hs_l26DuFW, hs_m26DuHu, hs_r26DuGb);
                    }
                }
            case 2:
                var hs_sat26DvqL = new $hs.Thunk();
                hs_sat26DvqL.evaluateOnce = function () {
                    var hs_wild226Dvra = hs_right25tyTB.hscall(hs_r26DuGb);
                    switch (hs_wild226Dvra.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [0];
                        return $res;
                    case 2:
                        var hs_s26DuIT = hs_wild226Dvra.data[0];
                        if (hs_s26DuIT.notEvaluated) {
                            return hs_s26DuIT.hscall();
                        } else {
                            return hs_s26DuIT;
                        }
                    case 3:
                        var hs_s26DuIZ = hs_wild226Dvra.data[0];
                        if (hs_s26DuIZ.notEvaluated) {
                            return hs_s26DuIZ.hscall();
                        } else {
                            return hs_s26DuIZ;
                        }
                    }
                };
                var hs_sat26DvqM = new $hs.Thunk();
                hs_sat26DvqM.evaluateOnce = function () {
                    var hs_wild226Dvr1 = hs_left25tyTA.hscall(hs_r26DuGb);
                    switch (hs_wild226Dvr1.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [0];
                        return $res;
                    case 2:
                        var hs_s26DuIF = hs_wild226Dvr1.data[0];
                        if (hs_s26DuIF.notEvaluated) {
                            return hs_s26DuIF.hscall();
                        } else {
                            return hs_s26DuIF;
                        }
                    case 3:
                        var hs_s26DuIL = hs_wild226Dvr1.data[0];
                        if (hs_s26DuIL.notEvaluated) {
                            return hs_s26DuIL.hscall();
                        } else {
                            return hs_s26DuIL;
                        }
                    }
                };
                var hs_wild226DvqN = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26DvqM, hs_sat26DvqL);
                switch (hs_wild226DvqN.tag) {
                case 1:
                    var hs_wild326DvqQ = hs_r26DuGb;
                    if (hs_r26DuGb.notEvaluated) {
                        hs_wild326DvqQ = hs_r26DuGb.hscall();
                    }
                    switch (hs_wild326DvqQ.tag) {
                    case 1:
                        var hs_sat26DvqW = new $hs.Thunk();
                        hs_sat26DvqW.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("malformed tree\x00");
                        };
                        var hs_sat26DvqV = new $hs.Thunk();
                        hs_sat26DvqV.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("ldoubleLeft\x00");
                        };
                        return hs_moduleError25tyTX.hscall(hs_sat26DvqV, hs_sat26DvqW);
                    case 2:
                        var hs_ds126DuJa = hs_wild326DvqQ.data[1];
                        var hs_t226DuJi = hs_wild326DvqQ.data[2];
                        var hs_m226DuJj = hs_wild326DvqQ.data[3];
                        var hs_t326DuJk = hs_wild326DvqQ.data[4];
                        var hs_wild426DvqP = hs_ds126DuJa;
                        if (hs_ds126DuJa.notEvaluated) {
                            hs_wild426DvqP = hs_ds126DuJa.hscall();
                        }
                        var hs_k226DuJf = hs_wild426DvqP.data[0];
                        var hs_p226DuJg = hs_wild426DvqP.data[1];
                        var hs_v226DuJh = hs_wild426DvqP.data[2];
                        var hs_sat26DvqO = new $hs.Thunk();
                        hs_sat26DvqO.evaluateOnce = function () {
                            return hs_lsingleRight25tyTO.hscall(hs_k226DuJf, hs_p226DuJg, hs_v226DuJh, hs_t226DuJi, hs_m226DuJj, hs_t326DuJk);
                        };
                        return hs_lsingleLeft25tyTM.hscall(hs_k26DuHr, hs_p26DuHs, hs_v26DuHt, hs_l26DuFW, hs_m26DuHu, hs_sat26DvqO);
                    case 3:
                        var hs_ds126DuJr = hs_wild326DvqQ.data[1];
                        var hs_t226DuJz = hs_wild326DvqQ.data[2];
                        var hs_m226DuJA = hs_wild326DvqQ.data[3];
                        var hs_t326DuJB = hs_wild326DvqQ.data[4];
                        var hs_wild426DvqT = hs_ds126DuJr;
                        if (hs_ds126DuJr.notEvaluated) {
                            hs_wild426DvqT = hs_ds126DuJr.hscall();
                        }
                        var hs_k226DuJw = hs_wild426DvqT.data[0];
                        var hs_p226DuJx = hs_wild426DvqT.data[1];
                        var hs_v226DuJy = hs_wild426DvqT.data[2];
                        var hs_sat26DvqS = new $hs.Thunk();
                        hs_sat26DvqS.evaluateOnce = function () {
                            return hs_rsingleRight25tyTP.hscall(hs_k226DuJw, hs_p226DuJx, hs_v226DuJy, hs_t226DuJz, hs_m226DuJA, hs_t326DuJB);
                        };
                        return hs_lsingleLeft25tyTM.hscall(hs_k26DuHr, hs_p26DuHs, hs_v26DuHt, hs_l26DuFW, hs_m26DuHu, hs_sat26DvqS);
                    }
                case 2:
                    return hs_lsingleLeft25tyTM.hscall(hs_k26DuHr, hs_p26DuHs, hs_v26DuHt, hs_l26DuFW, hs_m26DuHu, hs_r26DuGb);
                }
            }
        case 2:
            return hs_lloser25tyTD.hscall(hs_k26DuHr, hs_p26DuHs, hs_v26DuHt, hs_l26DuFW, hs_m26DuHu, hs_r26DuGb);
        }
    };
    hs_rbalance25tyTH.evaluate = function (hs_k26DuLe, hs_p26DuLf, hs_v26DuLg, hs_l26DuJJ, hs_m26DuLh, hs_r26DuJY) {
        var hs_sat26DvsI = new $hs.Data(1);
        hs_sat26DvsI.data = [2];
        var hs_sat26DvsJ = new $hs.Thunk();
        hs_sat26DvsJ.evaluateOnce = function () {
            var hs_sat26Dvus = new $hs.Thunk();
            hs_sat26Dvus.evaluateOnce = function () {
                var hs_wild26DvuG = hs_r26DuJY;
                if (hs_r26DuJY.notEvaluated) {
                    hs_wild26DvuG = hs_r26DuJY.hscall();
                }
                switch (hs_wild26DvuG.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [0];
                    return $res;
                case 2:
                    var hs_s26DuK5 = hs_wild26DvuG.data[0];
                    if (hs_s26DuK5.notEvaluated) {
                        return hs_s26DuK5.hscall();
                    } else {
                        return hs_s26DuK5;
                    }
                case 3:
                    var hs_s26DuKb = hs_wild26DvuG.data[0];
                    if (hs_s26DuKb.notEvaluated) {
                        return hs_s26DuKb.hscall();
                    } else {
                        return hs_s26DuKb;
                    }
                }
            };
            var hs_sat26Dvur = new $hs.Thunk();
            hs_sat26Dvur.evaluateOnce = function () {
                var hs_wild26Dvux = hs_l26DuJJ;
                if (hs_l26DuJJ.notEvaluated) {
                    hs_wild26Dvux = hs_l26DuJJ.hscall();
                }
                switch (hs_wild26Dvux.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [0];
                    return $res;
                case 2:
                    var hs_s26DuJQ = hs_wild26Dvux.data[0];
                    if (hs_s26DuJQ.notEvaluated) {
                        return hs_s26DuJQ.hscall();
                    } else {
                        return hs_s26DuJQ;
                    }
                case 3:
                    var hs_s26DuJW = hs_wild26Dvux.data[0];
                    if (hs_s26DuJW.notEvaluated) {
                        return hs_s26DuJW.hscall();
                    } else {
                        return hs_s26DuJW;
                    }
                }
            };
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dvur, hs_sat26Dvus);
        };
        var hs_wild26DvsK = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26DvsJ, hs_sat26DvsI);
        switch (hs_wild26DvsK.tag) {
        case 1:
            var hs_sat26DvsL = new $hs.Thunk();
            hs_sat26DvsL.evaluateOnce = function () {
                var hs_sat26Dvuh = new $hs.Thunk();
                hs_sat26Dvuh.evaluateOnce = function () {
                    var hs_wild126Dvum = hs_l26DuJJ;
                    if (hs_l26DuJJ.notEvaluated) {
                        hs_wild126Dvum = hs_l26DuJJ.hscall();
                    }
                    switch (hs_wild126Dvum.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [0];
                        return $res;
                    case 2:
                        var hs_s26DuKA = hs_wild126Dvum.data[0];
                        if (hs_s26DuKA.notEvaluated) {
                            return hs_s26DuKA.hscall();
                        } else {
                            return hs_s26DuKA;
                        }
                    case 3:
                        var hs_s26DuKG = hs_wild126Dvum.data[0];
                        if (hs_s26DuKG.notEvaluated) {
                            return hs_s26DuKG.hscall();
                        } else {
                            return hs_s26DuKG;
                        }
                    }
                };
                return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_omega25tyTF, hs_sat26Dvuh);
            };
            var hs_sat26DvsM = new $hs.Thunk();
            hs_sat26DvsM.evaluateOnce = function () {
                var hs_wild126Dvuc = hs_r26DuJY;
                if (hs_r26DuJY.notEvaluated) {
                    hs_wild126Dvuc = hs_r26DuJY.hscall();
                }
                switch (hs_wild126Dvuc.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [0];
                    return $res;
                case 2:
                    var hs_s26DuKm = hs_wild126Dvuc.data[0];
                    if (hs_s26DuKm.notEvaluated) {
                        return hs_s26DuKm.hscall();
                    } else {
                        return hs_s26DuKm;
                    }
                case 3:
                    var hs_s26DuKs = hs_wild126Dvuc.data[0];
                    if (hs_s26DuKs.notEvaluated) {
                        return hs_s26DuKs.hscall();
                    } else {
                        return hs_s26DuKs;
                    }
                }
            };
            var hs_wild126DvsN = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26DvsM, hs_sat26DvsL);
            switch (hs_wild126DvsN.tag) {
            case 1:
                var hs_sat26Dvti = new $hs.Thunk();
                hs_sat26Dvti.evaluateOnce = function () {
                    var hs_sat26DvtY = new $hs.Thunk();
                    hs_sat26DvtY.evaluateOnce = function () {
                        var hs_wild226Dvu3 = hs_r26DuJY;
                        if (hs_r26DuJY.notEvaluated) {
                            hs_wild226Dvu3 = hs_r26DuJY.hscall();
                        }
                        switch (hs_wild226Dvu3.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [0];
                            return $res;
                        case 2:
                            var hs_s26DuL4 = hs_wild226Dvu3.data[0];
                            if (hs_s26DuL4.notEvaluated) {
                                return hs_s26DuL4.hscall();
                            } else {
                                return hs_s26DuL4;
                            }
                        case 3:
                            var hs_s26DuLa = hs_wild226Dvu3.data[0];
                            if (hs_s26DuLa.notEvaluated) {
                                return hs_s26DuLa.hscall();
                            } else {
                                return hs_s26DuLa;
                            }
                        }
                    };
                    return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_omega25tyTF, hs_sat26DvtY);
                };
                var hs_sat26Dvtj = new $hs.Thunk();
                hs_sat26Dvtj.evaluateOnce = function () {
                    var hs_wild226DvtT = hs_l26DuJJ;
                    if (hs_l26DuJJ.notEvaluated) {
                        hs_wild226DvtT = hs_l26DuJJ.hscall();
                    }
                    switch (hs_wild226DvtT.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [0];
                        return $res;
                    case 2:
                        var hs_s26DuKQ = hs_wild226DvtT.data[0];
                        if (hs_s26DuKQ.notEvaluated) {
                            return hs_s26DuKQ.hscall();
                        } else {
                            return hs_s26DuKQ;
                        }
                    case 3:
                        var hs_s26DuKW = hs_wild226DvtT.data[0];
                        if (hs_s26DuKW.notEvaluated) {
                            return hs_s26DuKW.hscall();
                        } else {
                            return hs_s26DuKW;
                        }
                    }
                };
                var hs_wild226Dvtk = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26Dvtj, hs_sat26Dvti);
                switch (hs_wild226Dvtk.tag) {
                case 1:
                    return hs_rloser25tyTE.hscall(hs_k26DuLe, hs_p26DuLf, hs_v26DuLg, hs_l26DuJJ, hs_m26DuLh, hs_r26DuJY);
                case 2:
                    var hs_sat26Dvtl = new $hs.Thunk();
                    hs_sat26Dvtl.evaluateOnce = function () {
                        var hs_wild326DvtK = hs_right25tyTB.hscall(hs_l26DuJJ);
                        switch (hs_wild326DvtK.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [0];
                            return $res;
                        case 2:
                            var hs_s26DuLC = hs_wild326DvtK.data[0];
                            if (hs_s26DuLC.notEvaluated) {
                                return hs_s26DuLC.hscall();
                            } else {
                                return hs_s26DuLC;
                            }
                        case 3:
                            var hs_s26DuLI = hs_wild326DvtK.data[0];
                            if (hs_s26DuLI.notEvaluated) {
                                return hs_s26DuLI.hscall();
                            } else {
                                return hs_s26DuLI;
                            }
                        }
                    };
                    var hs_sat26Dvtm = new $hs.Thunk();
                    hs_sat26Dvtm.evaluateOnce = function () {
                        var hs_wild326DvtB = hs_left25tyTA.hscall(hs_l26DuJJ);
                        switch (hs_wild326DvtB.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [0];
                            return $res;
                        case 2:
                            var hs_s26DuLo = hs_wild326DvtB.data[0];
                            if (hs_s26DuLo.notEvaluated) {
                                return hs_s26DuLo.hscall();
                            } else {
                                return hs_s26DuLo;
                            }
                        case 3:
                            var hs_s26DuLu = hs_wild326DvtB.data[0];
                            if (hs_s26DuLu.notEvaluated) {
                                return hs_s26DuLu.hscall();
                            } else {
                                return hs_s26DuLu;
                            }
                        }
                    };
                    var hs_wild326Dvtn = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26Dvtm, hs_sat26Dvtl);
                    switch (hs_wild326Dvtn.tag) {
                    case 1:
                        var hs_wild426Dvtq = hs_l26DuJJ;
                        if (hs_l26DuJJ.notEvaluated) {
                            hs_wild426Dvtq = hs_l26DuJJ.hscall();
                        }
                        switch (hs_wild426Dvtq.tag) {
                        case 1:
                            var hs_sat26Dvtw = new $hs.Thunk();
                            hs_sat26Dvtw.evaluateOnce = function () {
                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("malformed tree\x00");
                            };
                            var hs_sat26Dvtv = new $hs.Thunk();
                            hs_sat26Dvtv.evaluateOnce = function () {
                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("rdoubleRight\x00");
                            };
                            return hs_moduleError25tyTX.hscall(hs_sat26Dvtv, hs_sat26Dvtw);
                        case 2:
                            var hs_ds126DuLT = hs_wild426Dvtq.data[1];
                            var hs_t126DuM1 = hs_wild426Dvtq.data[2];
                            var hs_m126DuM2 = hs_wild426Dvtq.data[3];
                            var hs_t226DuM3 = hs_wild426Dvtq.data[4];
                            var hs_wild526Dvtp = hs_ds126DuLT;
                            if (hs_ds126DuLT.notEvaluated) {
                                hs_wild526Dvtp = hs_ds126DuLT.hscall();
                            }
                            var hs_k226DuLY = hs_wild526Dvtp.data[0];
                            var hs_p226DuLZ = hs_wild526Dvtp.data[1];
                            var hs_v226DuM0 = hs_wild526Dvtp.data[2];
                            var hs_sat26Dvto = new $hs.Thunk();
                            hs_sat26Dvto.evaluateOnce = function () {
                                return hs_lsingleLeft25tyTM.hscall(hs_k226DuLY, hs_p226DuLZ, hs_v226DuM0, hs_t126DuM1, hs_m126DuM2, hs_t226DuM3);
                            };
                            return hs_rsingleRight25tyTP.hscall(hs_k26DuLe, hs_p26DuLf, hs_v26DuLg, hs_sat26Dvto, hs_m26DuLh, hs_r26DuJY);
                        case 3:
                            var hs_ds126DuMa = hs_wild426Dvtq.data[1];
                            var hs_t126DuMi = hs_wild426Dvtq.data[2];
                            var hs_m126DuMj = hs_wild426Dvtq.data[3];
                            var hs_t226DuMk = hs_wild426Dvtq.data[4];
                            var hs_wild526Dvtt = hs_ds126DuMa;
                            if (hs_ds126DuMa.notEvaluated) {
                                hs_wild526Dvtt = hs_ds126DuMa.hscall();
                            }
                            var hs_k226DuMf = hs_wild526Dvtt.data[0];
                            var hs_p226DuMg = hs_wild526Dvtt.data[1];
                            var hs_v226DuMh = hs_wild526Dvtt.data[2];
                            var hs_sat26Dvts = new $hs.Thunk();
                            hs_sat26Dvts.evaluateOnce = function () {
                                return hs_rsingleLeft25tyTN.hscall(hs_k226DuMf, hs_p226DuMg, hs_v226DuMh, hs_t126DuMi, hs_m126DuMj, hs_t226DuMk);
                            };
                            return hs_rsingleRight25tyTP.hscall(hs_k26DuLe, hs_p26DuLf, hs_v26DuLg, hs_sat26Dvts, hs_m26DuLh, hs_r26DuJY);
                        }
                    case 2:
                        return hs_rsingleRight25tyTP.hscall(hs_k26DuLe, hs_p26DuLf, hs_v26DuLg, hs_l26DuJJ, hs_m26DuLh, hs_r26DuJY);
                    }
                }
            case 2:
                var hs_sat26DvsO = new $hs.Thunk();
                hs_sat26DvsO.evaluateOnce = function () {
                    var hs_wild226Dvtd = hs_right25tyTB.hscall(hs_r26DuJY);
                    switch (hs_wild226Dvtd.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [0];
                        return $res;
                    case 2:
                        var hs_s26DuMG = hs_wild226Dvtd.data[0];
                        if (hs_s26DuMG.notEvaluated) {
                            return hs_s26DuMG.hscall();
                        } else {
                            return hs_s26DuMG;
                        }
                    case 3:
                        var hs_s26DuMM = hs_wild226Dvtd.data[0];
                        if (hs_s26DuMM.notEvaluated) {
                            return hs_s26DuMM.hscall();
                        } else {
                            return hs_s26DuMM;
                        }
                    }
                };
                var hs_sat26DvsP = new $hs.Thunk();
                hs_sat26DvsP.evaluateOnce = function () {
                    var hs_wild226Dvt4 = hs_left25tyTA.hscall(hs_r26DuJY);
                    switch (hs_wild226Dvt4.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [0];
                        return $res;
                    case 2:
                        var hs_s26DuMs = hs_wild226Dvt4.data[0];
                        if (hs_s26DuMs.notEvaluated) {
                            return hs_s26DuMs.hscall();
                        } else {
                            return hs_s26DuMs;
                        }
                    case 3:
                        var hs_s26DuMy = hs_wild226Dvt4.data[0];
                        if (hs_s26DuMy.notEvaluated) {
                            return hs_s26DuMy.hscall();
                        } else {
                            return hs_s26DuMy;
                        }
                    }
                };
                var hs_wild226DvsQ = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26DvsP, hs_sat26DvsO);
                switch (hs_wild226DvsQ.tag) {
                case 1:
                    var hs_wild326DvsT = hs_r26DuJY;
                    if (hs_r26DuJY.notEvaluated) {
                        hs_wild326DvsT = hs_r26DuJY.hscall();
                    }
                    switch (hs_wild326DvsT.tag) {
                    case 1:
                        var hs_sat26DvsZ = new $hs.Thunk();
                        hs_sat26DvsZ.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("malformed tree\x00");
                        };
                        var hs_sat26DvsY = new $hs.Thunk();
                        hs_sat26DvsY.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("rdoubleLeft\x00");
                        };
                        return hs_moduleError25tyTX.hscall(hs_sat26DvsY, hs_sat26DvsZ);
                    case 2:
                        var hs_ds126DuMX = hs_wild326DvsT.data[1];
                        var hs_t226DuN5 = hs_wild326DvsT.data[2];
                        var hs_m226DuN6 = hs_wild326DvsT.data[3];
                        var hs_t326DuN7 = hs_wild326DvsT.data[4];
                        var hs_wild426DvsS = hs_ds126DuMX;
                        if (hs_ds126DuMX.notEvaluated) {
                            hs_wild426DvsS = hs_ds126DuMX.hscall();
                        }
                        var hs_k226DuN2 = hs_wild426DvsS.data[0];
                        var hs_p226DuN3 = hs_wild426DvsS.data[1];
                        var hs_v226DuN4 = hs_wild426DvsS.data[2];
                        var hs_sat26DvsR = new $hs.Thunk();
                        hs_sat26DvsR.evaluateOnce = function () {
                            return hs_lsingleRight25tyTO.hscall(hs_k226DuN2, hs_p226DuN3, hs_v226DuN4, hs_t226DuN5, hs_m226DuN6, hs_t326DuN7);
                        };
                        return hs_rsingleLeft25tyTN.hscall(hs_k26DuLe, hs_p26DuLf, hs_v26DuLg, hs_l26DuJJ, hs_m26DuLh, hs_sat26DvsR);
                    case 3:
                        var hs_ds126DuNe = hs_wild326DvsT.data[1];
                        var hs_t226DuNm = hs_wild326DvsT.data[2];
                        var hs_m226DuNn = hs_wild326DvsT.data[3];
                        var hs_t326DuNo = hs_wild326DvsT.data[4];
                        var hs_wild426DvsW = hs_ds126DuNe;
                        if (hs_ds126DuNe.notEvaluated) {
                            hs_wild426DvsW = hs_ds126DuNe.hscall();
                        }
                        var hs_k226DuNj = hs_wild426DvsW.data[0];
                        var hs_p226DuNk = hs_wild426DvsW.data[1];
                        var hs_v226DuNl = hs_wild426DvsW.data[2];
                        var hs_sat26DvsV = new $hs.Thunk();
                        hs_sat26DvsV.evaluateOnce = function () {
                            return hs_rsingleRight25tyTP.hscall(hs_k226DuNj, hs_p226DuNk, hs_v226DuNl, hs_t226DuNm, hs_m226DuNn, hs_t326DuNo);
                        };
                        return hs_rsingleLeft25tyTN.hscall(hs_k26DuLe, hs_p26DuLf, hs_v26DuLg, hs_l26DuJJ, hs_m26DuLh, hs_sat26DvsV);
                    }
                case 2:
                    return hs_rsingleLeft25tyTN.hscall(hs_k26DuLe, hs_p26DuLf, hs_v26DuLg, hs_l26DuJJ, hs_m26DuLh, hs_r26DuJY);
                }
            }
        case 2:
            return hs_rloser25tyTE.hscall(hs_k26DuLe, hs_p26DuLf, hs_v26DuLg, hs_l26DuJJ, hs_m26DuLh, hs_r26DuJY);
        }
    };
    hs_secondBest25tyTw.evaluate = function (hs_ds26DuNs, hs_ds126DuNA) {
        var hs_wild26DvuM = hs_ds26DuNs;
        if (hs_ds26DuNs.notEvaluated) {
            hs_wild26DvuM = hs_ds26DuNs.hscall();
        }
        switch (hs_wild26DvuM.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_e26DuNC = hs_wild26DvuM.data[1];
            var hs_tl26DuND = hs_wild26DvuM.data[2];
            var hs_m26DuNE = hs_wild26DvuM.data[3];
            var hs_tr26DuNz = hs_wild26DvuM.data[4];
            var hs_wild126DuNM = hs_secondBest25tyTw.hscall(hs_tr26DuNz, hs_ds126DuNA);
            switch (hs_wild126DuNM.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [hs_e26DuNC, hs_tl26DuND, hs_m26DuNE];
                return $res;
            case 2:
                var hs_wild226DuO9 = hs_e26DuNC;
                if (hs_e26DuNC.notEvaluated) {
                    hs_wild226DuO9 = hs_e26DuNC.hscall();
                }
                var hs_k26DuNZ = hs_wild226DuO9.data[0];
                var hs_p26DuNW = hs_wild226DuO9.data[1];
                var hs_v26DuO0 = hs_wild226DuO9.data[2];
                var hs_wild326DvuL = hs_wild126DuNM;
                if (hs_wild126DuNM.notEvaluated) {
                    hs_wild326DvuL = hs_wild126DuNM.hscall();
                }
                switch (hs_wild326DvuL.tag) {
                case 1:
                    return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("/home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/Event/PSQ.hs:(428,1)-(432,54)|function play\x00");
                case 2:
                    var hs_ezq26DuNR = hs_wild326DvuL.data[0];
                    var hs_tzq26DuO1 = hs_wild326DvuL.data[1];
                    var hs_mzq26DuO5 = hs_wild326DvuL.data[2];
                    var hs_wild426DuO3 = hs_ezq26DuNR;
                    if (hs_ezq26DuNR.notEvaluated) {
                        hs_wild426DuO3 = hs_ezq26DuNR.hscall();
                    }
                    var hs_kzq26DuO6 = hs_wild426DuO3.data[0];
                    var hs_pzq26DuNX = hs_wild426DuO3.data[1];
                    var hs_vzq26DuO7 = hs_wild426DuO3.data[2];
                    var hs_wild526DvuR = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_p26DuNW, hs_pzq26DuNX);
                    switch (hs_wild526DvuR.tag) {
                    case 1:
                        var hs_tpl26DuO4 = hs_lbalance25tyTG.hscall(hs_k26DuNZ, hs_p26DuNW, hs_v26DuO0, hs_tl26DuND, hs_m26DuNE, hs_tzq26DuO1);
                        var $res = new $hs.Data(2);
                        $res.data = [hs_wild426DuO3, hs_tpl26DuO4, hs_mzq26DuO5];
                        return $res;
                    case 2:
                        var hs_tpl26DuOa = hs_rbalance25tyTH.hscall(hs_kzq26DuO6, hs_pzq26DuNX, hs_vzq26DuO7, hs_tl26DuND, hs_m26DuNE, hs_tzq26DuO1);
                        var $res = new $hs.Data(2);
                        $res.data = [hs_wild226DuO9, hs_tpl26DuOa, hs_mzq26DuO5];
                        return $res;
                    }
                }
            }
        case 3:
            var hs_e26DuOl = hs_wild26DvuM.data[1];
            var hs_tl26DuOg = hs_wild26DvuM.data[2];
            var hs_m26DuOh = hs_wild26DvuM.data[3];
            var hs_tr26DuOm = hs_wild26DvuM.data[4];
            var hs_wild126DuOt = hs_secondBest25tyTw.hscall(hs_tl26DuOg, hs_m26DuOh);
            switch (hs_wild126DuOt.tag) {
            case 1:
                var hs_nt26DuOn = hs_ds126DuNA;
                if (hs_ds126DuNA.notEvaluated) {
                    hs_nt26DuOn = hs_ds126DuNA.hscall();
                }
                var $res = new $hs.Data(2);
                $res.data = [hs_e26DuOl, hs_tr26DuOm, hs_nt26DuOn];
                return $res;
            case 2:
                var hs_nt26DuOR = hs_ds126DuNA;
                if (hs_ds126DuNA.notEvaluated) {
                    hs_nt26DuOR = hs_ds126DuNA.hscall();
                }
                var hs_wild226DvuS = hs_wild126DuOt;
                if (hs_wild126DuOt.notEvaluated) {
                    hs_wild226DvuS = hs_wild126DuOt.hscall();
                }
                switch (hs_wild226DvuS.tag) {
                case 1:
                    return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("/home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/Event/PSQ.hs:(428,1)-(432,54)|function play\x00");
                case 2:
                    var hs_e126DuOy = hs_wild226DvuS.data[0];
                    var hs_t26DuOM = hs_wild226DvuS.data[1];
                    var hs_m126DuON = hs_wild226DvuS.data[2];
                    var hs_wild326DuOV = hs_e126DuOy;
                    if (hs_e126DuOy.notEvaluated) {
                        hs_wild326DuOV = hs_e126DuOy.hscall();
                    }
                    var hs_k26DuOK = hs_wild326DuOV.data[0];
                    var hs_p26DuOH = hs_wild326DuOV.data[1];
                    var hs_v26DuOL = hs_wild326DuOV.data[2];
                    var hs_wild426DuOP = hs_e26DuOl;
                    if (hs_e26DuOl.notEvaluated) {
                        hs_wild426DuOP = hs_e26DuOl.hscall();
                    }
                    var hs_kzq26DuOS = hs_wild426DuOP.data[0];
                    var hs_pzq26DuOI = hs_wild426DuOP.data[1];
                    var hs_vzq26DuOT = hs_wild426DuOP.data[2];
                    var hs_wild526DvuY = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_p26DuOH, hs_pzq26DuOI);
                    switch (hs_wild526DvuY.tag) {
                    case 1:
                        var hs_tpl26DuOQ = hs_lbalance25tyTG.hscall(hs_k26DuOK, hs_p26DuOH, hs_v26DuOL, hs_t26DuOM, hs_m126DuON, hs_tr26DuOm);
                        var $res = new $hs.Data(2);
                        $res.data = [hs_wild426DuOP, hs_tpl26DuOQ, hs_nt26DuOR];
                        return $res;
                    case 2:
                        var hs_tpl26DuOW = hs_rbalance25tyTH.hscall(hs_kzq26DuOS, hs_pzq26DuOI, hs_vzq26DuOT, hs_t26DuOM, hs_m126DuON, hs_tr26DuOm);
                        var $res = new $hs.Data(2);
                        $res.data = [hs_wild326DuOV, hs_tpl26DuOW, hs_nt26DuOR];
                        return $res;
                    }
                }
            }
        }
    };
    this.hs_minView.evaluate = function (hs_ds26DuOY) {
        var hs_wild26Dvv1 = hs_ds26DuOY;
        if (hs_ds26DuOY.notEvaluated) {
            hs_wild26Dvv1 = hs_ds26DuOY.hscall();
        }
        switch (hs_wild26Dvv1.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_e26DuP3 = hs_wild26Dvv1.data[0];
            var hs_t26DuP4 = hs_wild26Dvv1.data[1];
            var hs_m26DuP5 = hs_wild26Dvv1.data[2];
            var hs_sat26Dvv2 = new $hs.Thunk();
            hs_sat26Dvv2.evaluateOnce = function () {
                return hs_secondBest25tyTw.hscall(hs_t26DuP4, hs_m26DuP5);
            };
            var hs_sat26Dvv0 = new $hs.Data(1);
            hs_sat26Dvv0.data = [hs_e26DuP3, hs_sat26Dvv2];
            var $res = new $hs.Data(2);
            $res.data = [hs_sat26Dvv0];
            return $res;
        }
    };
    this.hs_deleteMin.evaluate = function (hs_ds26DuP9) {
        var hs_wild26Dvv4 = hs_ds26DuP9;
        if (hs_ds26DuP9.notEvaluated) {
            hs_wild26Dvv4 = hs_ds26DuP9.hscall();
        }
        switch (hs_wild26Dvv4.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_t26DuPe = hs_wild26Dvv4.data[1];
            var hs_m26DuPf = hs_wild26Dvv4.data[2];
            return hs_secondBest25tyTw.hscall(hs_t26DuPe, hs_m26DuPf);
        }
    };
    this.hs_findMin.evaluate = function (hs_ds26DuPh) {
        var hs_wild26Dvv7 = hs_ds26DuPh;
        if (hs_ds26DuPh.notEvaluated) {
            hs_wild26Dvv7 = hs_ds26DuPh.hscall();
        }
        switch (hs_wild26Dvv7.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_e26DuPm = hs_wild26Dvv7.data[0];
            var $res = new $hs.Data(2);
            $res.data = [hs_e26DuPm];
            return $res;
        }
    };
    hs_a125v6j7.evaluate = function (hs_q26DuPq, hs_eta26DuPs) {
        var hs_wild26Dvvb = hs_q26DuPq;
        if (hs_q26DuPq.notEvaluated) {
            hs_wild26Dvvb = hs_q26DuPq.hscall();
        }
        switch (hs_wild26Dvvb.tag) {
        case 1:
            if (hs_eta26DuPs.notEvaluated) {
                return hs_eta26DuPs.hscall();
            } else {
                return hs_eta26DuPs;
            }
        case 2:
            var hs_e26DuPy = hs_wild26Dvvb.data[0];
            var hs_ds26DuPw = hs_wild26Dvvb.data[1];
            var hs_ds126DuPF = hs_wild26Dvvb.data[2];
            var hs_wild126Dvv9 = hs_ds26DuPw;
            if (hs_ds26DuPw.notEvaluated) {
                hs_wild126Dvv9 = hs_ds26DuPw.hscall();
            }
            switch (hs_wild126Dvv9.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [hs_e26DuPy, hs_eta26DuPs];
                return $res;
            case 2:
                var hs_ezq26DuPH = hs_wild126Dvv9.data[1];
                var hs_tl26DuPI = hs_wild126Dvv9.data[2];
                var hs_m26DuPJ = hs_wild126Dvv9.data[3];
                var hs_tr26DuPE = hs_wild126Dvv9.data[4];
                var hs_sat26Dvvc = new $hs.Thunk();
                hs_sat26Dvvc.evaluateOnce = function () {
                    var hs_sat26Dvvd = new $hs.Data(2);
                    hs_sat26Dvvd.data = [hs_ezq26DuPH, hs_tl26DuPI, hs_m26DuPJ];
                    return hs_a125v6j7.hscall(hs_sat26Dvvd, hs_eta26DuPs);
                };
                var hs_sat26Dvv8 = new $hs.Data(2);
                hs_sat26Dvv8.data = [hs_e26DuPy, hs_tr26DuPE, hs_ds126DuPF];
                return hs_a125v6j7.hscall(hs_sat26Dvv8, hs_sat26Dvvc);
            case 3:
                var hs_ezq26DuPR = hs_wild126Dvv9.data[1];
                var hs_tl26DuPU = hs_wild126Dvv9.data[2];
                var hs_m26DuPV = hs_wild126Dvv9.data[3];
                var hs_tr26DuPS = hs_wild126Dvv9.data[4];
                var hs_sat26Dvvg = new $hs.Thunk();
                hs_sat26Dvvg.evaluateOnce = function () {
                    var hs_sat26Dvvh = new $hs.Data(2);
                    hs_sat26Dvvh.data = [hs_e26DuPy, hs_tl26DuPU, hs_m26DuPV];
                    return hs_a125v6j7.hscall(hs_sat26Dvvh, hs_eta26DuPs);
                };
                var hs_sat26Dvve = new $hs.Data(2);
                hs_sat26Dvve.data = [hs_ezq26DuPR, hs_tr26DuPS, hs_ds126DuPF];
                return hs_a125v6j7.hscall(hs_sat26Dvve, hs_sat26Dvvg);
            }
        }
    };
    this.hs_toDescList.evaluate = function (hs_q26DuPZ) {
        return hs_a125v6j7.hscall(hs_q26DuPZ, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    hs_a225v6jK.evaluate = function (hs_q26DuQ3, hs_eta26DuQ5) {
        var hs_wild26Dvvl = hs_q26DuQ3;
        if (hs_q26DuQ3.notEvaluated) {
            hs_wild26Dvvl = hs_q26DuQ3.hscall();
        }
        switch (hs_wild26Dvvl.tag) {
        case 1:
            if (hs_eta26DuQ5.notEvaluated) {
                return hs_eta26DuQ5.hscall();
            } else {
                return hs_eta26DuQ5;
            }
        case 2:
            var hs_e26DuQb = hs_wild26Dvvl.data[0];
            var hs_ds26DuQ9 = hs_wild26Dvvl.data[1];
            var hs_ds126DuQm = hs_wild26Dvvl.data[2];
            var hs_wild126Dvvj = hs_ds26DuQ9;
            if (hs_ds26DuQ9.notEvaluated) {
                hs_wild126Dvvj = hs_ds26DuQ9.hscall();
            }
            switch (hs_wild126Dvvj.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [hs_e26DuQb, hs_eta26DuQ5];
                return $res;
            case 2:
                var hs_ezq26DuQh = hs_wild126Dvvj.data[1];
                var hs_tl26DuQi = hs_wild126Dvvj.data[2];
                var hs_m26DuQj = hs_wild126Dvvj.data[3];
                var hs_tr26DuQl = hs_wild126Dvvj.data[4];
                var hs_sat26Dvvm = new $hs.Thunk();
                hs_sat26Dvvm.evaluateOnce = function () {
                    var hs_sat26Dvvn = new $hs.Data(2);
                    hs_sat26Dvvn.data = [hs_e26DuQb, hs_tr26DuQl, hs_ds126DuQm];
                    return hs_a225v6jK.hscall(hs_sat26Dvvn, hs_eta26DuQ5);
                };
                var hs_sat26Dvvi = new $hs.Data(2);
                hs_sat26Dvvi.data = [hs_ezq26DuQh, hs_tl26DuQi, hs_m26DuQj];
                return hs_a225v6jK.hscall(hs_sat26Dvvi, hs_sat26Dvvm);
            case 3:
                var hs_ezq26DuQx = hs_wild126Dvvj.data[1];
                var hs_tl26DuQu = hs_wild126Dvvj.data[2];
                var hs_m26DuQv = hs_wild126Dvvj.data[3];
                var hs_tr26DuQy = hs_wild126Dvvj.data[4];
                var hs_sat26Dvvq = new $hs.Thunk();
                hs_sat26Dvvq.evaluateOnce = function () {
                    var hs_sat26Dvvr = new $hs.Data(2);
                    hs_sat26Dvvr.data = [hs_ezq26DuQx, hs_tr26DuQy, hs_ds126DuQm];
                    return hs_a225v6jK.hscall(hs_sat26Dvvr, hs_eta26DuQ5);
                };
                var hs_sat26Dvvo = new $hs.Data(2);
                hs_sat26Dvvo.data = [hs_e26DuQb, hs_tl26DuQu, hs_m26DuQv];
                return hs_a225v6jK.hscall(hs_sat26Dvvo, hs_sat26Dvvq);
            }
        }
    };
    this.hs_toAscList.evaluate = function (hs_q26DuQC) {
        return hs_a225v6jK.hscall(hs_q26DuQC, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_toList.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.GHCziEventziPSQ.hs_toAscList.hscall(hs_eta1cW6l3);
    };
    this.hs_singleton.evaluate = function (hs_k26DuQG, hs_p26DuQJ, hs_v26DuQO) {
        var hs_nt26DuQM = hs_k26DuQG;
        if (hs_k26DuQG.notEvaluated) {
            hs_nt26DuQM = hs_k26DuQG.hscall();
        }
        var hs_tpl26DuQN = hs_p26DuQJ;
        if (hs_p26DuQJ.notEvaluated) {
            hs_tpl26DuQN = hs_p26DuQJ.hscall();
        }
        var hs_sat26Dvvs = new $hs.Data(1);
        hs_sat26Dvvs.data = [hs_nt26DuQM, hs_tpl26DuQN, hs_v26DuQO];
        var $res = new $hs.Data(2);
        $res.data = [hs_sat26Dvvs, $hs.modules.GHCziEventziPSQ.hs_Start, hs_nt26DuQM];
        return $res;
    };
    this.hs_insert.evaluate = function (hs_k26DuQW, hs_p26DuQZ, hs_v26DuR4, hs_q26DuQU) {
        var hs_wild26Dvvy = hs_q26DuQU;
        if (hs_q26DuQU.notEvaluated) {
            hs_wild26Dvvy = hs_q26DuQU.hscall();
        }
        switch (hs_wild26Dvvy.tag) {
        case 1:
            var hs_nt26DuR2 = hs_k26DuQW;
            if (hs_k26DuQW.notEvaluated) {
                hs_nt26DuR2 = hs_k26DuQW.hscall();
            }
            var hs_tpl26DuR3 = hs_p26DuQZ;
            if (hs_p26DuQZ.notEvaluated) {
                hs_tpl26DuR3 = hs_p26DuQZ.hscall();
            }
            var hs_sat26Dvwd = new $hs.Data(1);
            hs_sat26Dvwd.data = [hs_nt26DuR2, hs_tpl26DuR3, hs_v26DuR4];
            var $res = new $hs.Data(2);
            $res.data = [hs_sat26Dvwd, $hs.modules.GHCziEventziPSQ.hs_Start, hs_nt26DuR2];
            return $res;
        case 2:
            var hs_ds26DuR9 = hs_wild26Dvvy.data[0];
            var hs_ds126DuRe = hs_wild26Dvvy.data[1];
            var hs_ds226DuRr = hs_wild26Dvvy.data[2];
            var hs_wild126DuRp = hs_ds26DuR9;
            if (hs_ds26DuR9.notEvaluated) {
                hs_wild126DuRp = hs_ds26DuR9.hscall();
            }
            var hs_kzq26DuTQ = hs_wild126DuRp.data[0];
            var hs_pzq26DuTX = hs_wild126DuRp.data[1];
            var hs_vzq26DuU1 = hs_wild126DuRp.data[2];
            var hs_wild226DuRg = hs_ds126DuRe;
            if (hs_ds126DuRe.notEvaluated) {
                hs_wild226DuRg = hs_ds126DuRe.hscall();
            }
            switch (hs_wild226DuRg.tag) {
            case 1:
                var hs_wild326Dvvz = $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziEventziUnique.hs_zdfOrdUnique, hs_k26DuQW, hs_kzq26DuTQ);
                switch (hs_wild326Dvvz.tag) {
                case 1:
                    var hs_nt26DuTZ = hs_k26DuQW;
                    if (hs_k26DuQW.notEvaluated) {
                        hs_nt26DuTZ = hs_k26DuQW.hscall();
                    }
                    var hs_tpl26DuTW = hs_p26DuQZ;
                    if (hs_p26DuQZ.notEvaluated) {
                        hs_tpl26DuTW = hs_p26DuQZ.hscall();
                    }
                    var hs_wild426DvvI = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_tpl26DuTW, hs_pzq26DuTX);
                    switch (hs_wild426DvvI.tag) {
                    case 1:
                        var hs_tpl126DuU3 = hs_lbalance25tyTG.hscall(hs_nt26DuTZ, hs_tpl26DuTW, hs_v26DuR4, $hs.modules.GHCziEventziPSQ.hs_Start, hs_nt26DuTZ, $hs.modules.GHCziEventziPSQ.hs_Start);
                        var hs_sat26DvvJ = new $hs.Data(1);
                        hs_sat26DvvJ.data = [hs_kzq26DuTQ, hs_pzq26DuTX, hs_vzq26DuU1];
                        var $res = new $hs.Data(2);
                        $res.data = [hs_sat26DvvJ, hs_tpl126DuU3, hs_kzq26DuTQ];
                        return $res;
                    case 2:
                        var hs_tpl126DuU6 = hs_rbalance25tyTH.hscall(hs_kzq26DuTQ, hs_pzq26DuTX, hs_vzq26DuU1, $hs.modules.GHCziEventziPSQ.hs_Start, hs_nt26DuTZ, $hs.modules.GHCziEventziPSQ.hs_Start);
                        var hs_sat26DvvF = new $hs.Data(1);
                        hs_sat26DvvF.data = [hs_nt26DuTZ, hs_tpl26DuTW, hs_v26DuR4];
                        var $res = new $hs.Data(2);
                        $res.data = [hs_sat26DvvF, hs_tpl126DuU6, hs_kzq26DuTQ];
                        return $res;
                    }
                case 2:
                    var hs_nt26DuUb = hs_k26DuQW;
                    if (hs_k26DuQW.notEvaluated) {
                        hs_nt26DuUb = hs_k26DuQW.hscall();
                    }
                    var hs_tpl26DuUc = hs_p26DuQZ;
                    if (hs_p26DuQZ.notEvaluated) {
                        hs_tpl26DuUc = hs_p26DuQZ.hscall();
                    }
                    var hs_sat26Dvvv = new $hs.Data(1);
                    hs_sat26Dvvv.data = [hs_nt26DuUb, hs_tpl26DuUc, hs_v26DuR4];
                    var $res = new $hs.Data(2);
                    $res.data = [hs_sat26Dvvv, $hs.modules.GHCziEventziPSQ.hs_Start, hs_nt26DuUb];
                    return $res;
                case 3:
                    var hs_nt26DuUl = hs_k26DuQW;
                    if (hs_k26DuQW.notEvaluated) {
                        hs_nt26DuUl = hs_k26DuQW.hscall();
                    }
                    var hs_tpl26DuUi = hs_p26DuQZ;
                    if (hs_p26DuQZ.notEvaluated) {
                        hs_tpl26DuUi = hs_p26DuQZ.hscall();
                    }
                    var hs_wild426DvvD = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_pzq26DuTX, hs_tpl26DuUi);
                    switch (hs_wild426DvvD.tag) {
                    case 1:
                        var hs_tpl126DuUn = hs_lbalance25tyTG.hscall(hs_kzq26DuTQ, hs_pzq26DuTX, hs_vzq26DuU1, $hs.modules.GHCziEventziPSQ.hs_Start, hs_kzq26DuTQ, $hs.modules.GHCziEventziPSQ.hs_Start);
                        var hs_sat26DvvE = new $hs.Data(1);
                        hs_sat26DvvE.data = [hs_nt26DuUl, hs_tpl26DuUi, hs_v26DuR4];
                        var $res = new $hs.Data(2);
                        $res.data = [hs_sat26DvvE, hs_tpl126DuUn, hs_nt26DuUl];
                        return $res;
                    case 2:
                        var hs_tpl126DuUq = hs_rbalance25tyTH.hscall(hs_nt26DuUl, hs_tpl26DuUi, hs_v26DuR4, $hs.modules.GHCziEventziPSQ.hs_Start, hs_kzq26DuTQ, $hs.modules.GHCziEventziPSQ.hs_Start);
                        var hs_sat26DvvA = new $hs.Data(1);
                        hs_sat26DvvA.data = [hs_kzq26DuTQ, hs_pzq26DuTX, hs_vzq26DuU1];
                        var $res = new $hs.Data(2);
                        $res.data = [hs_sat26DvvA, hs_tpl126DuUq, hs_nt26DuUl];
                        return $res;
                    }
                }
            default:
                var hs_wild326DvvL = hs_wild226DuRg;
                if (hs_wild226DuRg.notEvaluated) {
                    hs_wild326DvvL = hs_wild226DuRg.hscall();
                }
                switch (hs_wild326DvvL.tag) {
                case 2:
                    var hs_ezq26DuRu = hs_wild326DvvL.data[1];
                    var hs_tl26DuRv = hs_wild326DvvL.data[2];
                    var hs_m26DuRn = hs_wild326DvvL.data[3];
                    var hs_tr26DuRq = hs_wild326DvvL.data[4];
                    var hs_wild426Dvw1 = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziEventziUnique.hs_zdfOrdUnique, hs_k26DuQW, hs_m26DuRn);
                    switch (hs_wild426Dvw1.tag) {
                    case 1:
                        var hs_sat26Dvw8 = new $hs.Data(2);
                        hs_sat26Dvw8.data = [hs_wild126DuRp, hs_tr26DuRq, hs_ds226DuRr];
                        var hs_wild526DuRD = $hs.modules.GHCziEventziPSQ.hs_insert.hscall(hs_k26DuQW, hs_p26DuQZ, hs_v26DuR4, hs_sat26Dvw8);
                        switch (hs_wild526DuRD.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [hs_ezq26DuRu, hs_tl26DuRv, hs_m26DuRn];
                            return $res;
                        case 2:
                            var hs_wild626DuS0 = hs_ezq26DuRu;
                            if (hs_ezq26DuRu.notEvaluated) {
                                hs_wild626DuS0 = hs_ezq26DuRu.hscall();
                            }
                            var hs_k126DuRQ = hs_wild626DuS0.data[0];
                            var hs_p126DuRN = hs_wild626DuS0.data[1];
                            var hs_v126DuRR = hs_wild626DuS0.data[2];
                            var hs_wild726Dvw7 = hs_wild526DuRD;
                            if (hs_wild526DuRD.notEvaluated) {
                                hs_wild726Dvw7 = hs_wild526DuRD.hscall();
                            }
                            switch (hs_wild726Dvw7.tag) {
                            case 1:
                                return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("/home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/Event/PSQ.hs:(428,1)-(432,54)|function play\x00");
                            case 2:
                                var hs_ezq126DuRI = hs_wild726Dvw7.data[0];
                                var hs_tzq26DuRS = hs_wild726Dvw7.data[1];
                                var hs_mzq26DuRW = hs_wild726Dvw7.data[2];
                                var hs_wild826DuRU = hs_ezq126DuRI;
                                if (hs_ezq126DuRI.notEvaluated) {
                                    hs_wild826DuRU = hs_ezq126DuRI.hscall();
                                }
                                var hs_kzq126DuRX = hs_wild826DuRU.data[0];
                                var hs_pzq126DuRO = hs_wild826DuRU.data[1];
                                var hs_vzq126DuRY = hs_wild826DuRU.data[2];
                                var hs_wild926Dvwc = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_p126DuRN, hs_pzq126DuRO);
                                switch (hs_wild926Dvwc.tag) {
                                case 1:
                                    var hs_tpl26DuRV = hs_lbalance25tyTG.hscall(hs_k126DuRQ, hs_p126DuRN, hs_v126DuRR, hs_tl26DuRv, hs_m26DuRn, hs_tzq26DuRS);
                                    var $res = new $hs.Data(2);
                                    $res.data = [hs_wild826DuRU, hs_tpl26DuRV, hs_mzq26DuRW];
                                    return $res;
                                case 2:
                                    var hs_tpl26DuS1 = hs_rbalance25tyTH.hscall(hs_kzq126DuRX, hs_pzq126DuRO, hs_vzq126DuRY, hs_tl26DuRv, hs_m26DuRn, hs_tzq26DuRS);
                                    var $res = new $hs.Data(2);
                                    $res.data = [hs_wild626DuS0, hs_tpl26DuS1, hs_mzq26DuRW];
                                    return $res;
                                }
                            }
                        }
                    case 2:
                        var hs_sat26Dvw2 = new $hs.Data(2);
                        hs_sat26Dvw2.data = [hs_ezq26DuRu, hs_tl26DuRv, hs_m26DuRn];
                        var hs_wild526DuS7 = $hs.modules.GHCziEventziPSQ.hs_insert.hscall(hs_k26DuQW, hs_p26DuQZ, hs_v26DuR4, hs_sat26Dvw2);
                        switch (hs_wild526DuS7.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [hs_wild126DuRp, hs_tr26DuRq, hs_ds226DuRr];
                            return $res;
                        case 2:
                            var hs_wild626DvvZ = hs_wild526DuS7;
                            if (hs_wild526DuS7.notEvaluated) {
                                hs_wild626DvvZ = hs_wild526DuS7.hscall();
                            }
                            switch (hs_wild626DvvZ.tag) {
                            case 1:
                                return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("/home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/Event/PSQ.hs:(428,1)-(432,54)|function play\x00");
                            case 2:
                                var hs_e26DuSc = hs_wild626DvvZ.data[0];
                                var hs_t26DuSq = hs_wild626DvvZ.data[1];
                                var hs_m126DuSr = hs_wild626DvvZ.data[2];
                                var hs_wild726DuSy = hs_e26DuSc;
                                if (hs_e26DuSc.notEvaluated) {
                                    hs_wild726DuSy = hs_e26DuSc.hscall();
                                }
                                var hs_k126DuSo = hs_wild726DuSy.data[0];
                                var hs_p126DuSl = hs_wild726DuSy.data[1];
                                var hs_v126DuSp = hs_wild726DuSy.data[2];
                                var hs_wild826DuSt = hs_wild126DuRp;
                                if (hs_wild126DuRp.notEvaluated) {
                                    hs_wild826DuSt = hs_wild126DuRp.hscall();
                                }
                                var hs_kzq126DuSv = hs_wild826DuSt.data[0];
                                var hs_pzq126DuSm = hs_wild826DuSt.data[1];
                                var hs_vzq126DuSw = hs_wild826DuSt.data[2];
                                var hs_wild926Dvw6 = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_p126DuSl, hs_pzq126DuSm);
                                switch (hs_wild926Dvw6.tag) {
                                case 1:
                                    var hs_tpl26DuSu = hs_lbalance25tyTG.hscall(hs_k126DuSo, hs_p126DuSl, hs_v126DuSp, hs_t26DuSq, hs_m126DuSr, hs_tr26DuRq);
                                    var $res = new $hs.Data(2);
                                    $res.data = [hs_wild826DuSt, hs_tpl26DuSu, hs_ds226DuRr];
                                    return $res;
                                case 2:
                                    var hs_tpl26DuSz = hs_rbalance25tyTH.hscall(hs_kzq126DuSv, hs_pzq126DuSm, hs_vzq126DuSw, hs_t26DuSq, hs_m126DuSr, hs_tr26DuRq);
                                    var $res = new $hs.Data(2);
                                    $res.data = [hs_wild726DuSy, hs_tpl26DuSz, hs_ds226DuRr];
                                    return $res;
                                }
                            }
                        }
                    }
                case 3:
                    var hs_ezq26DuSH = hs_wild326DvvL.data[1];
                    var hs_tl26DuSL = hs_wild326DvvL.data[2];
                    var hs_m26DuSF = hs_wild326DvvL.data[3];
                    var hs_tr26DuSI = hs_wild326DvvL.data[4];
                    var hs_wild426DvvN = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziEventziUnique.hs_zdfOrdUnique, hs_k26DuQW, hs_m26DuSF);
                    switch (hs_wild426DvvN.tag) {
                    case 1:
                        var hs_sat26DvvU = new $hs.Data(2);
                        hs_sat26DvvU.data = [hs_ezq26DuSH, hs_tr26DuSI, hs_ds226DuRr];
                        var hs_wild526DuST = $hs.modules.GHCziEventziPSQ.hs_insert.hscall(hs_k26DuQW, hs_p26DuQZ, hs_v26DuR4, hs_sat26DvvU);
                        switch (hs_wild526DuST.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [hs_wild126DuRp, hs_tl26DuSL, hs_m26DuSF];
                            return $res;
                        case 2:
                            var hs_wild626DuTg = hs_wild126DuRp;
                            if (hs_wild126DuRp.notEvaluated) {
                                hs_wild626DuTg = hs_wild126DuRp.hscall();
                            }
                            var hs_k126DuT6 = hs_wild626DuTg.data[0];
                            var hs_p126DuT3 = hs_wild626DuTg.data[1];
                            var hs_v126DuT7 = hs_wild626DuTg.data[2];
                            var hs_wild726DvvT = hs_wild526DuST;
                            if (hs_wild526DuST.notEvaluated) {
                                hs_wild726DvvT = hs_wild526DuST.hscall();
                            }
                            switch (hs_wild726DvvT.tag) {
                            case 1:
                                return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("/home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/Event/PSQ.hs:(428,1)-(432,54)|function play\x00");
                            case 2:
                                var hs_ezq126DuSY = hs_wild726DvvT.data[0];
                                var hs_tzq26DuT8 = hs_wild726DvvT.data[1];
                                var hs_mzq26DuTc = hs_wild726DvvT.data[2];
                                var hs_wild826DuTa = hs_ezq126DuSY;
                                if (hs_ezq126DuSY.notEvaluated) {
                                    hs_wild826DuTa = hs_ezq126DuSY.hscall();
                                }
                                var hs_kzq126DuTd = hs_wild826DuTa.data[0];
                                var hs_pzq126DuT4 = hs_wild826DuTa.data[1];
                                var hs_vzq126DuTe = hs_wild826DuTa.data[2];
                                var hs_wild926DvvY = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_p126DuT3, hs_pzq126DuT4);
                                switch (hs_wild926DvvY.tag) {
                                case 1:
                                    var hs_tpl26DuTb = hs_lbalance25tyTG.hscall(hs_k126DuT6, hs_p126DuT3, hs_v126DuT7, hs_tl26DuSL, hs_m26DuSF, hs_tzq26DuT8);
                                    var $res = new $hs.Data(2);
                                    $res.data = [hs_wild826DuTa, hs_tpl26DuTb, hs_mzq26DuTc];
                                    return $res;
                                case 2:
                                    var hs_tpl26DuTh = hs_rbalance25tyTH.hscall(hs_kzq126DuTd, hs_pzq126DuT4, hs_vzq126DuTe, hs_tl26DuSL, hs_m26DuSF, hs_tzq26DuT8);
                                    var $res = new $hs.Data(2);
                                    $res.data = [hs_wild626DuTg, hs_tpl26DuTh, hs_mzq26DuTc];
                                    return $res;
                                }
                            }
                        }
                    case 2:
                        var hs_sat26DvvO = new $hs.Data(2);
                        hs_sat26DvvO.data = [hs_wild126DuRp, hs_tl26DuSL, hs_m26DuSF];
                        var hs_wild526DuTn = $hs.modules.GHCziEventziPSQ.hs_insert.hscall(hs_k26DuQW, hs_p26DuQZ, hs_v26DuR4, hs_sat26DvvO);
                        switch (hs_wild526DuTn.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [hs_ezq26DuSH, hs_tr26DuSI, hs_ds226DuRr];
                            return $res;
                        case 2:
                            var hs_wild626DvvK = hs_wild526DuTn;
                            if (hs_wild526DuTn.notEvaluated) {
                                hs_wild626DvvK = hs_wild526DuTn.hscall();
                            }
                            switch (hs_wild626DvvK.tag) {
                            case 1:
                                return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("/home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/Event/PSQ.hs:(428,1)-(432,54)|function play\x00");
                            case 2:
                                var hs_e26DuTs = hs_wild626DvvK.data[0];
                                var hs_t26DuTG = hs_wild626DvvK.data[1];
                                var hs_m126DuTH = hs_wild626DvvK.data[2];
                                var hs_wild726DuTO = hs_e26DuTs;
                                if (hs_e26DuTs.notEvaluated) {
                                    hs_wild726DuTO = hs_e26DuTs.hscall();
                                }
                                var hs_k126DuTE = hs_wild726DuTO.data[0];
                                var hs_p126DuTB = hs_wild726DuTO.data[1];
                                var hs_v126DuTF = hs_wild726DuTO.data[2];
                                var hs_wild826DuTJ = hs_ezq26DuSH;
                                if (hs_ezq26DuSH.notEvaluated) {
                                    hs_wild826DuTJ = hs_ezq26DuSH.hscall();
                                }
                                var hs_kzq126DuTL = hs_wild826DuTJ.data[0];
                                var hs_pzq126DuTC = hs_wild826DuTJ.data[1];
                                var hs_vzq126DuTM = hs_wild826DuTJ.data[2];
                                var hs_wild926DvvS = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_p126DuTB, hs_pzq126DuTC);
                                switch (hs_wild926DvvS.tag) {
                                case 1:
                                    var hs_tpl26DuTK = hs_lbalance25tyTG.hscall(hs_k126DuTE, hs_p126DuTB, hs_v126DuTF, hs_t26DuTG, hs_m126DuTH, hs_tr26DuSI);
                                    var $res = new $hs.Data(2);
                                    $res.data = [hs_wild826DuTJ, hs_tpl26DuTK, hs_ds226DuRr];
                                    return $res;
                                case 2:
                                    var hs_tpl26DuTP = hs_rbalance25tyTH.hscall(hs_kzq126DuTL, hs_pzq126DuTC, hs_vzq126DuTM, hs_t26DuTG, hs_m126DuTH, hs_tr26DuSI);
                                    var $res = new $hs.Data(2);
                                    $res.data = [hs_wild726DuTO, hs_tpl26DuTP, hs_ds226DuRr];
                                    return $res;
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.hs_empty.data = [];
    this.hs_delete.evaluate = function (hs_k26DuUM, hs_q26DuUt) {
        var hs_wild26Dvwg = hs_q26DuUt;
        if (hs_q26DuUt.notEvaluated) {
            hs_wild26Dvwg = hs_q26DuUt.hscall();
        }
        switch (hs_wild26Dvwg.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_ds26DuUy = hs_wild26Dvwg.data[0];
            var hs_ds126DuUD = hs_wild26Dvwg.data[1];
            var hs_ds226DuUR = hs_wild26Dvwg.data[2];
            var hs_wild126DuUP = hs_ds26DuUy;
            if (hs_ds26DuUy.notEvaluated) {
                hs_wild126DuUP = hs_ds26DuUy.hscall();
            }
            var hs_kzq26DuXg = hs_wild126DuUP.data[0];
            var hs_p26DuXi = hs_wild126DuUP.data[1];
            var hs_v26DuXj = hs_wild126DuUP.data[2];
            var hs_wild226DuUF = hs_ds126DuUD;
            if (hs_ds126DuUD.notEvaluated) {
                hs_wild226DuUF = hs_ds126DuUD.hscall();
            }
            switch (hs_wild226DuUF.tag) {
            case 1:
                var hs_wild326Dvwh = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziEventziUnique.hs_zdfEqUnique, hs_k26DuUM, hs_kzq26DuXg);
                switch (hs_wild326Dvwh.tag) {
                case 1:
                    var hs_sat26Dvwi = new $hs.Data(1);
                    hs_sat26Dvwi.data = [hs_kzq26DuXg, hs_p26DuXi, hs_v26DuXj];
                    var $res = new $hs.Data(2);
                    $res.data = [hs_sat26Dvwi, $hs.modules.GHCziEventziPSQ.hs_Start, hs_kzq26DuXg];
                    return $res;
                case 2:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            default:
                var hs_wild326Dvwk = hs_wild226DuUF;
                if (hs_wild226DuUF.notEvaluated) {
                    hs_wild326Dvwk = hs_wild226DuUF.hscall();
                }
                switch (hs_wild326Dvwk.tag) {
                case 2:
                    var hs_ezq26DuUU = hs_wild326Dvwk.data[1];
                    var hs_tl26DuUV = hs_wild326Dvwk.data[2];
                    var hs_m26DuUN = hs_wild326Dvwk.data[3];
                    var hs_tr26DuUQ = hs_wild326Dvwk.data[4];
                    var hs_wild426DvwA = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziEventziUnique.hs_zdfOrdUnique, hs_k26DuUM, hs_m26DuUN);
                    switch (hs_wild426DvwA.tag) {
                    case 1:
                        var hs_sat26DvwH = new $hs.Data(2);
                        hs_sat26DvwH.data = [hs_wild126DuUP, hs_tr26DuUQ, hs_ds226DuUR];
                        var hs_wild526DuV3 = $hs.modules.GHCziEventziPSQ.hs_delete.hscall(hs_k26DuUM, hs_sat26DvwH);
                        switch (hs_wild526DuV3.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [hs_ezq26DuUU, hs_tl26DuUV, hs_m26DuUN];
                            return $res;
                        case 2:
                            var hs_wild626DuVq = hs_ezq26DuUU;
                            if (hs_ezq26DuUU.notEvaluated) {
                                hs_wild626DuVq = hs_ezq26DuUU.hscall();
                            }
                            var hs_k126DuVg = hs_wild626DuVq.data[0];
                            var hs_p126DuVd = hs_wild626DuVq.data[1];
                            var hs_v126DuVh = hs_wild626DuVq.data[2];
                            var hs_wild726DvwG = hs_wild526DuV3;
                            if (hs_wild526DuV3.notEvaluated) {
                                hs_wild726DvwG = hs_wild526DuV3.hscall();
                            }
                            switch (hs_wild726DvwG.tag) {
                            case 1:
                                return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("/home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/Event/PSQ.hs:(428,1)-(432,54)|function play\x00");
                            case 2:
                                var hs_ezq126DuV8 = hs_wild726DvwG.data[0];
                                var hs_tzq26DuVi = hs_wild726DvwG.data[1];
                                var hs_mzq26DuVm = hs_wild726DvwG.data[2];
                                var hs_wild826DuVk = hs_ezq126DuV8;
                                if (hs_ezq126DuV8.notEvaluated) {
                                    hs_wild826DuVk = hs_ezq126DuV8.hscall();
                                }
                                var hs_kzq126DuVn = hs_wild826DuVk.data[0];
                                var hs_pzq26DuVe = hs_wild826DuVk.data[1];
                                var hs_vzq26DuVo = hs_wild826DuVk.data[2];
                                var hs_wild926DvwL = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_p126DuVd, hs_pzq26DuVe);
                                switch (hs_wild926DvwL.tag) {
                                case 1:
                                    var hs_tpl26DuVl = hs_lbalance25tyTG.hscall(hs_k126DuVg, hs_p126DuVd, hs_v126DuVh, hs_tl26DuUV, hs_m26DuUN, hs_tzq26DuVi);
                                    var $res = new $hs.Data(2);
                                    $res.data = [hs_wild826DuVk, hs_tpl26DuVl, hs_mzq26DuVm];
                                    return $res;
                                case 2:
                                    var hs_tpl26DuVr = hs_rbalance25tyTH.hscall(hs_kzq126DuVn, hs_pzq26DuVe, hs_vzq26DuVo, hs_tl26DuUV, hs_m26DuUN, hs_tzq26DuVi);
                                    var $res = new $hs.Data(2);
                                    $res.data = [hs_wild626DuVq, hs_tpl26DuVr, hs_mzq26DuVm];
                                    return $res;
                                }
                            }
                        }
                    case 2:
                        var hs_sat26DvwB = new $hs.Data(2);
                        hs_sat26DvwB.data = [hs_ezq26DuUU, hs_tl26DuUV, hs_m26DuUN];
                        var hs_wild526DuVx = $hs.modules.GHCziEventziPSQ.hs_delete.hscall(hs_k26DuUM, hs_sat26DvwB);
                        switch (hs_wild526DuVx.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [hs_wild126DuUP, hs_tr26DuUQ, hs_ds226DuUR];
                            return $res;
                        case 2:
                            var hs_wild626Dvwy = hs_wild526DuVx;
                            if (hs_wild526DuVx.notEvaluated) {
                                hs_wild626Dvwy = hs_wild526DuVx.hscall();
                            }
                            switch (hs_wild626Dvwy.tag) {
                            case 1:
                                return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("/home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/Event/PSQ.hs:(428,1)-(432,54)|function play\x00");
                            case 2:
                                var hs_e26DuVC = hs_wild626Dvwy.data[0];
                                var hs_t26DuVQ = hs_wild626Dvwy.data[1];
                                var hs_m126DuVR = hs_wild626Dvwy.data[2];
                                var hs_wild726DuVY = hs_e26DuVC;
                                if (hs_e26DuVC.notEvaluated) {
                                    hs_wild726DuVY = hs_e26DuVC.hscall();
                                }
                                var hs_k126DuVO = hs_wild726DuVY.data[0];
                                var hs_p126DuVL = hs_wild726DuVY.data[1];
                                var hs_v126DuVP = hs_wild726DuVY.data[2];
                                var hs_wild826DuVT = hs_wild126DuUP;
                                if (hs_wild126DuUP.notEvaluated) {
                                    hs_wild826DuVT = hs_wild126DuUP.hscall();
                                }
                                var hs_kzq126DuVV = hs_wild826DuVT.data[0];
                                var hs_pzq26DuVM = hs_wild826DuVT.data[1];
                                var hs_vzq26DuVW = hs_wild826DuVT.data[2];
                                var hs_wild926DvwF = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_p126DuVL, hs_pzq26DuVM);
                                switch (hs_wild926DvwF.tag) {
                                case 1:
                                    var hs_tpl26DuVU = hs_lbalance25tyTG.hscall(hs_k126DuVO, hs_p126DuVL, hs_v126DuVP, hs_t26DuVQ, hs_m126DuVR, hs_tr26DuUQ);
                                    var $res = new $hs.Data(2);
                                    $res.data = [hs_wild826DuVT, hs_tpl26DuVU, hs_ds226DuUR];
                                    return $res;
                                case 2:
                                    var hs_tpl26DuVZ = hs_rbalance25tyTH.hscall(hs_kzq126DuVV, hs_pzq26DuVM, hs_vzq26DuVW, hs_t26DuVQ, hs_m126DuVR, hs_tr26DuUQ);
                                    var $res = new $hs.Data(2);
                                    $res.data = [hs_wild726DuVY, hs_tpl26DuVZ, hs_ds226DuUR];
                                    return $res;
                                }
                            }
                        }
                    }
                case 3:
                    var hs_ezq26DuW7 = hs_wild326Dvwk.data[1];
                    var hs_tl26DuWb = hs_wild326Dvwk.data[2];
                    var hs_m26DuW5 = hs_wild326Dvwk.data[3];
                    var hs_tr26DuW8 = hs_wild326Dvwk.data[4];
                    var hs_wild426Dvwm = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziEventziUnique.hs_zdfOrdUnique, hs_k26DuUM, hs_m26DuW5);
                    switch (hs_wild426Dvwm.tag) {
                    case 1:
                        var hs_sat26Dvwt = new $hs.Data(2);
                        hs_sat26Dvwt.data = [hs_ezq26DuW7, hs_tr26DuW8, hs_ds226DuUR];
                        var hs_wild526DuWj = $hs.modules.GHCziEventziPSQ.hs_delete.hscall(hs_k26DuUM, hs_sat26Dvwt);
                        switch (hs_wild526DuWj.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [hs_wild126DuUP, hs_tl26DuWb, hs_m26DuW5];
                            return $res;
                        case 2:
                            var hs_wild626DuWG = hs_wild126DuUP;
                            if (hs_wild126DuUP.notEvaluated) {
                                hs_wild626DuWG = hs_wild126DuUP.hscall();
                            }
                            var hs_k126DuWw = hs_wild626DuWG.data[0];
                            var hs_p126DuWt = hs_wild626DuWG.data[1];
                            var hs_v126DuWx = hs_wild626DuWG.data[2];
                            var hs_wild726Dvws = hs_wild526DuWj;
                            if (hs_wild526DuWj.notEvaluated) {
                                hs_wild726Dvws = hs_wild526DuWj.hscall();
                            }
                            switch (hs_wild726Dvws.tag) {
                            case 1:
                                return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("/home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/Event/PSQ.hs:(428,1)-(432,54)|function play\x00");
                            case 2:
                                var hs_ezq126DuWo = hs_wild726Dvws.data[0];
                                var hs_tzq26DuWy = hs_wild726Dvws.data[1];
                                var hs_mzq26DuWC = hs_wild726Dvws.data[2];
                                var hs_wild826DuWA = hs_ezq126DuWo;
                                if (hs_ezq126DuWo.notEvaluated) {
                                    hs_wild826DuWA = hs_ezq126DuWo.hscall();
                                }
                                var hs_kzq126DuWD = hs_wild826DuWA.data[0];
                                var hs_pzq26DuWu = hs_wild826DuWA.data[1];
                                var hs_vzq26DuWE = hs_wild826DuWA.data[2];
                                var hs_wild926Dvwx = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_p126DuWt, hs_pzq26DuWu);
                                switch (hs_wild926Dvwx.tag) {
                                case 1:
                                    var hs_tpl26DuWB = hs_lbalance25tyTG.hscall(hs_k126DuWw, hs_p126DuWt, hs_v126DuWx, hs_tl26DuWb, hs_m26DuW5, hs_tzq26DuWy);
                                    var $res = new $hs.Data(2);
                                    $res.data = [hs_wild826DuWA, hs_tpl26DuWB, hs_mzq26DuWC];
                                    return $res;
                                case 2:
                                    var hs_tpl26DuWH = hs_rbalance25tyTH.hscall(hs_kzq126DuWD, hs_pzq26DuWu, hs_vzq26DuWE, hs_tl26DuWb, hs_m26DuW5, hs_tzq26DuWy);
                                    var $res = new $hs.Data(2);
                                    $res.data = [hs_wild626DuWG, hs_tpl26DuWH, hs_mzq26DuWC];
                                    return $res;
                                }
                            }
                        }
                    case 2:
                        var hs_sat26Dvwn = new $hs.Data(2);
                        hs_sat26Dvwn.data = [hs_wild126DuUP, hs_tl26DuWb, hs_m26DuW5];
                        var hs_wild526DuWN = $hs.modules.GHCziEventziPSQ.hs_delete.hscall(hs_k26DuUM, hs_sat26Dvwn);
                        switch (hs_wild526DuWN.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [hs_ezq26DuW7, hs_tr26DuW8, hs_ds226DuUR];
                            return $res;
                        case 2:
                            var hs_wild626Dvwj = hs_wild526DuWN;
                            if (hs_wild526DuWN.notEvaluated) {
                                hs_wild626Dvwj = hs_wild526DuWN.hscall();
                            }
                            switch (hs_wild626Dvwj.tag) {
                            case 1:
                                return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("/home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/Event/PSQ.hs:(428,1)-(432,54)|function play\x00");
                            case 2:
                                var hs_e26DuWS = hs_wild626Dvwj.data[0];
                                var hs_t26DuX6 = hs_wild626Dvwj.data[1];
                                var hs_m126DuX7 = hs_wild626Dvwj.data[2];
                                var hs_wild726DuXe = hs_e26DuWS;
                                if (hs_e26DuWS.notEvaluated) {
                                    hs_wild726DuXe = hs_e26DuWS.hscall();
                                }
                                var hs_k126DuX4 = hs_wild726DuXe.data[0];
                                var hs_p126DuX1 = hs_wild726DuXe.data[1];
                                var hs_v126DuX5 = hs_wild726DuXe.data[2];
                                var hs_wild826DuX9 = hs_ezq26DuW7;
                                if (hs_ezq26DuW7.notEvaluated) {
                                    hs_wild826DuX9 = hs_ezq26DuW7.hscall();
                                }
                                var hs_kzq126DuXb = hs_wild826DuX9.data[0];
                                var hs_pzq26DuX2 = hs_wild826DuX9.data[1];
                                var hs_vzq26DuXc = hs_wild826DuX9.data[2];
                                var hs_wild926Dvwr = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_p126DuX1, hs_pzq26DuX2);
                                switch (hs_wild926Dvwr.tag) {
                                case 1:
                                    var hs_tpl26DuXa = hs_lbalance25tyTG.hscall(hs_k126DuX4, hs_p126DuX1, hs_v126DuX5, hs_t26DuX6, hs_m126DuX7, hs_tr26DuW8);
                                    var $res = new $hs.Data(2);
                                    $res.data = [hs_wild826DuX9, hs_tpl26DuXa, hs_ds226DuUR];
                                    return $res;
                                case 2:
                                    var hs_tpl26DuXf = hs_rbalance25tyTH.hscall(hs_kzq126DuXb, hs_pzq26DuX2, hs_vzq26DuXc, hs_t26DuX6, hs_m126DuX7, hs_tr26DuW8);
                                    var $res = new $hs.Data(2);
                                    $res.data = [hs_wild726DuXe, hs_tpl26DuXf, hs_ds226DuUR];
                                    return $res;
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.hs_adjust.evaluate = function (hs_eta26Dv4z, hs_eta126DuXJ, hs_eta226Dv4E) {
        var hs_go26DuXP = new $hs.Func(1);
        hs_go26DuXP.evaluate = function (hs_q26DuXq) {
            var hs_wild26DvwN = hs_q26DuXq;
            if (hs_q26DuXq.notEvaluated) {
                hs_wild26DvwN = hs_q26DuXq.hscall();
            }
            switch (hs_wild26DvwN.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_ds26DuXv = hs_wild26DvwN.data[0];
                var hs_ds126DuXA = hs_wild26DvwN.data[1];
                var hs_ds226DuXO = hs_wild26DvwN.data[2];
                var hs_wild126DuXM = hs_ds26DuXv;
                if (hs_ds26DuXv.notEvaluated) {
                    hs_wild126DuXM = hs_ds26DuXv.hscall();
                }
                var hs_kzq26Dv4u = hs_wild126DuXM.data[0];
                var hs_p26Dv4w = hs_wild126DuXM.data[1];
                var hs_v26Dv4x = hs_wild126DuXM.data[2];
                var hs_wild226DuXC = hs_ds126DuXA;
                if (hs_ds126DuXA.notEvaluated) {
                    hs_wild226DuXC = hs_ds126DuXA.hscall();
                }
                switch (hs_wild226DuXC.tag) {
                case 1:
                    var hs_wild326DvwO = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziEventziUnique.hs_zdfEqUnique, hs_eta126DuXJ, hs_kzq26Dv4u);
                    switch (hs_wild326DvwO.tag) {
                    case 1:
                        var hs_sat26DvwQ = new $hs.Data(1);
                        hs_sat26DvwQ.data = [hs_kzq26Dv4u, hs_p26Dv4w, hs_v26Dv4x];
                        var $res = new $hs.Data(2);
                        $res.data = [hs_sat26DvwQ, $hs.modules.GHCziEventziPSQ.hs_Start, hs_kzq26Dv4u];
                        return $res;
                    case 2:
                        var hs_tpl26Dv4C = hs_eta26Dv4z.hscall(hs_p26Dv4w);
                        var hs_sat26DvwM = new $hs.Data(1);
                        hs_sat26DvwM.data = [hs_kzq26Dv4u, hs_tpl26Dv4C, hs_v26Dv4x];
                        var $res = new $hs.Data(2);
                        $res.data = [hs_sat26DvwM, $hs.modules.GHCziEventziPSQ.hs_Start, hs_kzq26Dv4u];
                        return $res;
                    }
                default:
                    var hs_wild326DvwT = hs_wild226DuXC;
                    if (hs_wild226DuXC.notEvaluated) {
                        hs_wild326DvwT = hs_wild226DuXC.hscall();
                    }
                    switch (hs_wild326DvwT.tag) {
                    case 2:
                        var hs_ezq26DuXS = hs_wild326DvwT.data[1];
                        var hs_tl26DuXT = hs_wild326DvwT.data[2];
                        var hs_m26DuXK = hs_wild326DvwT.data[3];
                        var hs_tr26DuXN = hs_wild326DvwT.data[4];
                        var hs_wild426DvyL = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziEventziUnique.hs_zdfOrdUnique, hs_eta126DuXJ, hs_m26DuXK);
                        switch (hs_wild426DvyL.tag) {
                        case 1:
                            var hs_sat26DvzG = new $hs.Data(2);
                            hs_sat26DvzG.data = [hs_wild126DuXM, hs_tr26DuXN, hs_ds226DuXO];
                            var hs_wild526DuY1 = hs_go26DuXP.hscall(hs_sat26DvzG);
                            switch (hs_wild526DuY1.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [hs_ezq26DuXS, hs_tl26DuXT, hs_m26DuXK];
                                return $res;
                            case 2:
                                var hs_wild626DuZo = hs_ezq26DuXS;
                                if (hs_ezq26DuXS.notEvaluated) {
                                    hs_wild626DuZo = hs_ezq26DuXS.hscall();
                                }
                                var hs_k26DuYN = hs_wild626DuZo.data[0];
                                var hs_p126DuYb = hs_wild626DuZo.data[1];
                                var hs_v126DuYO = hs_wild626DuZo.data[2];
                                var hs_wild726DvzF = hs_wild526DuY1;
                                if (hs_wild526DuY1.notEvaluated) {
                                    hs_wild726DvzF = hs_wild526DuY1.hscall();
                                }
                                switch (hs_wild726DvzF.tag) {
                                case 1:
                                    return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("/home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/Event/PSQ.hs:(438,1)-(442,52)|function unsafePlay\x00");
                                case 2:
                                    var hs_ezq126DuY6 = hs_wild726DvzF.data[0];
                                    var hs_tzq26DuYu = hs_wild726DvzF.data[1];
                                    var hs_mzq26DuYR = hs_wild726DvzF.data[2];
                                    var hs_wild826DuYL = hs_ezq126DuY6;
                                    if (hs_ezq126DuY6.notEvaluated) {
                                        hs_wild826DuYL = hs_ezq126DuY6.hscall();
                                    }
                                    var hs_kzq126DuZq = hs_wild826DuYL.data[0];
                                    var hs_pzq26DuYc = hs_wild826DuYL.data[1];
                                    var hs_vzq26DuZr = hs_wild826DuYL.data[2];
                                    var hs_wild926DvzK = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_p126DuYb, hs_pzq26DuYc);
                                    switch (hs_wild926DvzK.tag) {
                                    case 1:
                                        var hs_sat26DvAa = new $hs.Thunk();
                                        hs_sat26DvAa.evaluateOnce = function () {
                                            var hs_wild1026DvAt = hs_tzq26DuYu;
                                            if (hs_tzq26DuYu.notEvaluated) {
                                                hs_wild1026DvAt = hs_tzq26DuYu.hscall();
                                            }
                                            switch (hs_wild1026DvAt.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [0];
                                                return $res;
                                            case 2:
                                                var hs_s26DuYB = hs_wild1026DvAt.data[0];
                                                if (hs_s26DuYB.notEvaluated) {
                                                    return hs_s26DuYB.hscall();
                                                } else {
                                                    return hs_s26DuYB;
                                                }
                                            case 3:
                                                var hs_s26DuYH = hs_wild1026DvAt.data[0];
                                                if (hs_s26DuYH.notEvaluated) {
                                                    return hs_s26DuYH.hscall();
                                                } else {
                                                    return hs_s26DuYH;
                                                }
                                            }
                                        };
                                        var hs_sat26DvAb = new $hs.Thunk();
                                        hs_sat26DvAb.evaluateOnce = function () {
                                            var hs_sat26DvAf = new $hs.Thunk();
                                            hs_sat26DvAf.evaluateOnce = function () {
                                                var hs_wild1026DvAk = hs_tl26DuXT;
                                                if (hs_tl26DuXT.notEvaluated) {
                                                    hs_wild1026DvAk = hs_tl26DuXT.hscall();
                                                }
                                                switch (hs_wild1026DvAk.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [0];
                                                    return $res;
                                                case 2:
                                                    var hs_s26DuYl = hs_wild1026DvAk.data[0];
                                                    if (hs_s26DuYl.notEvaluated) {
                                                        return hs_s26DuYl.hscall();
                                                    } else {
                                                        return hs_s26DuYl;
                                                    }
                                                case 3:
                                                    var hs_s26DuYr = hs_wild1026DvAk.data[0];
                                                    if (hs_s26DuYr.notEvaluated) {
                                                        return hs_s26DuYr.hscall();
                                                    } else {
                                                        return hs_s26DuYr;
                                                    }
                                                }
                                            };
                                            var hs_sat26DvAe = new $hs.Data(1);
                                            hs_sat26DvAe.data = [1];
                                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DvAe, hs_sat26DvAf);
                                        };
                                        var hs_tpl26DuYM = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DvAb, hs_sat26DvAa);
                                        var hs_sat26DvAd = new $hs.Data(1);
                                        hs_sat26DvAd.data = [hs_k26DuYN, hs_p126DuYb, hs_v126DuYO];
                                        var hs_sat26DvA9 = new $hs.Data(2);
                                        hs_sat26DvA9.data = [hs_tpl26DuYM, hs_sat26DvAd, hs_tl26DuXT, hs_m26DuXK, hs_tzq26DuYu];
                                        var $res = new $hs.Data(2);
                                        $res.data = [hs_wild826DuYL, hs_sat26DvA9, hs_mzq26DuYR];
                                        return $res;
                                    case 2:
                                        var hs_sat26DvzL = new $hs.Thunk();
                                        hs_sat26DvzL.evaluateOnce = function () {
                                            var hs_wild1026DvA4 = hs_tzq26DuYu;
                                            if (hs_tzq26DuYu.notEvaluated) {
                                                hs_wild1026DvA4 = hs_tzq26DuYu.hscall();
                                            }
                                            switch (hs_wild1026DvA4.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [0];
                                                return $res;
                                            case 2:
                                                var hs_s26DuZe = hs_wild1026DvA4.data[0];
                                                if (hs_s26DuZe.notEvaluated) {
                                                    return hs_s26DuZe.hscall();
                                                } else {
                                                    return hs_s26DuZe;
                                                }
                                            case 3:
                                                var hs_s26DuZk = hs_wild1026DvA4.data[0];
                                                if (hs_s26DuZk.notEvaluated) {
                                                    return hs_s26DuZk.hscall();
                                                } else {
                                                    return hs_s26DuZk;
                                                }
                                            }
                                        };
                                        var hs_sat26DvzM = new $hs.Thunk();
                                        hs_sat26DvzM.evaluateOnce = function () {
                                            var hs_sat26DvzQ = new $hs.Thunk();
                                            hs_sat26DvzQ.evaluateOnce = function () {
                                                var hs_wild1026DvzV = hs_tl26DuXT;
                                                if (hs_tl26DuXT.notEvaluated) {
                                                    hs_wild1026DvzV = hs_tl26DuXT.hscall();
                                                }
                                                switch (hs_wild1026DvzV.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [0];
                                                    return $res;
                                                case 2:
                                                    var hs_s26DuYZ = hs_wild1026DvzV.data[0];
                                                    if (hs_s26DuYZ.notEvaluated) {
                                                        return hs_s26DuYZ.hscall();
                                                    } else {
                                                        return hs_s26DuYZ;
                                                    }
                                                case 3:
                                                    var hs_s26DuZ5 = hs_wild1026DvzV.data[0];
                                                    if (hs_s26DuZ5.notEvaluated) {
                                                        return hs_s26DuZ5.hscall();
                                                    } else {
                                                        return hs_s26DuZ5;
                                                    }
                                                }
                                            };
                                            var hs_sat26DvzP = new $hs.Data(1);
                                            hs_sat26DvzP.data = [1];
                                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DvzP, hs_sat26DvzQ);
                                        };
                                        var hs_tpl26DuZp = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DvzM, hs_sat26DvzL);
                                        var hs_sat26DvzO = new $hs.Data(1);
                                        hs_sat26DvzO.data = [hs_kzq126DuZq, hs_pzq26DuYc, hs_vzq26DuZr];
                                        var hs_sat26DvzE = new $hs.Data(3);
                                        hs_sat26DvzE.data = [hs_tpl26DuZp, hs_sat26DvzO, hs_tl26DuXT, hs_m26DuXK, hs_tzq26DuYu];
                                        var $res = new $hs.Data(2);
                                        $res.data = [hs_wild626DuZo, hs_sat26DvzE, hs_mzq26DuYR];
                                        return $res;
                                    }
                                }
                            }
                        case 2:
                            var hs_sat26DvyM = new $hs.Data(2);
                            hs_sat26DvyM.data = [hs_ezq26DuXS, hs_tl26DuXT, hs_m26DuXK];
                            var hs_wild526DuZz = hs_go26DuXP.hscall(hs_sat26DvyM);
                            switch (hs_wild526DuZz.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [hs_wild126DuXM, hs_tr26DuXN, hs_ds226DuXO];
                                return $res;
                            case 2:
                                var hs_wild626DvyJ = hs_wild526DuZz;
                                if (hs_wild526DuZz.notEvaluated) {
                                    hs_wild626DvyJ = hs_wild526DuZz.hscall();
                                }
                                switch (hs_wild626DvyJ.tag) {
                                case 1:
                                    return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("/home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/Event/PSQ.hs:(438,1)-(442,52)|function unsafePlay\x00");
                                case 2:
                                    var hs_e26DuZE = hs_wild626DvyJ.data[0];
                                    var hs_t26DuZR = hs_wild626DvyJ.data[1];
                                    var hs_m126Dv0s = hs_wild626DvyJ.data[2];
                                    var hs_wild726Dv10 = hs_e26DuZE;
                                    if (hs_e26DuZE.notEvaluated) {
                                        hs_wild726Dv10 = hs_e26DuZE.hscall();
                                    }
                                    var hs_k26Dv0p = hs_wild726Dv10.data[0];
                                    var hs_p126DuZN = hs_wild726Dv10.data[1];
                                    var hs_v126Dv0q = hs_wild726Dv10.data[2];
                                    var hs_wild826Dv0n = hs_wild126DuXM;
                                    if (hs_wild126DuXM.notEvaluated) {
                                        hs_wild826Dv0n = hs_wild126DuXM.hscall();
                                    }
                                    var hs_kzq126Dv12 = hs_wild826Dv0n.data[0];
                                    var hs_pzq26DuZO = hs_wild826Dv0n.data[1];
                                    var hs_vzq26Dv13 = hs_wild826Dv0n.data[2];
                                    var hs_wild926DvyQ = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_p126DuZN, hs_pzq26DuZO);
                                    switch (hs_wild926DvyQ.tag) {
                                    case 1:
                                        var hs_sat26Dvzg = new $hs.Thunk();
                                        hs_sat26Dvzg.evaluateOnce = function () {
                                            var hs_wild1026Dvzz = hs_tr26DuXN;
                                            if (hs_tr26DuXN.notEvaluated) {
                                                hs_wild1026Dvzz = hs_tr26DuXN.hscall();
                                            }
                                            switch (hs_wild1026Dvzz.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [0];
                                                return $res;
                                            case 2:
                                                var hs_s26Dv0d = hs_wild1026Dvzz.data[0];
                                                if (hs_s26Dv0d.notEvaluated) {
                                                    return hs_s26Dv0d.hscall();
                                                } else {
                                                    return hs_s26Dv0d;
                                                }
                                            case 3:
                                                var hs_s26Dv0j = hs_wild1026Dvzz.data[0];
                                                if (hs_s26Dv0j.notEvaluated) {
                                                    return hs_s26Dv0j.hscall();
                                                } else {
                                                    return hs_s26Dv0j;
                                                }
                                            }
                                        };
                                        var hs_sat26Dvzh = new $hs.Thunk();
                                        hs_sat26Dvzh.evaluateOnce = function () {
                                            var hs_sat26Dvzl = new $hs.Thunk();
                                            hs_sat26Dvzl.evaluateOnce = function () {
                                                var hs_wild1026Dvzq = hs_t26DuZR;
                                                if (hs_t26DuZR.notEvaluated) {
                                                    hs_wild1026Dvzq = hs_t26DuZR.hscall();
                                                }
                                                switch (hs_wild1026Dvzq.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [0];
                                                    return $res;
                                                case 2:
                                                    var hs_s26DuZY = hs_wild1026Dvzq.data[0];
                                                    if (hs_s26DuZY.notEvaluated) {
                                                        return hs_s26DuZY.hscall();
                                                    } else {
                                                        return hs_s26DuZY;
                                                    }
                                                case 3:
                                                    var hs_s26Dv04 = hs_wild1026Dvzq.data[0];
                                                    if (hs_s26Dv04.notEvaluated) {
                                                        return hs_s26Dv04.hscall();
                                                    } else {
                                                        return hs_s26Dv04;
                                                    }
                                                }
                                            };
                                            var hs_sat26Dvzk = new $hs.Data(1);
                                            hs_sat26Dvzk.data = [1];
                                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dvzk, hs_sat26Dvzl);
                                        };
                                        var hs_tpl26Dv0o = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dvzh, hs_sat26Dvzg);
                                        var hs_sat26Dvzj = new $hs.Data(1);
                                        hs_sat26Dvzj.data = [hs_k26Dv0p, hs_p126DuZN, hs_v126Dv0q];
                                        var hs_sat26Dvzf = new $hs.Data(2);
                                        hs_sat26Dvzf.data = [hs_tpl26Dv0o, hs_sat26Dvzj, hs_t26DuZR, hs_m126Dv0s, hs_tr26DuXN];
                                        var $res = new $hs.Data(2);
                                        $res.data = [hs_wild826Dv0n, hs_sat26Dvzf, hs_ds226DuXO];
                                        return $res;
                                    case 2:
                                        var hs_sat26DvyR = new $hs.Thunk();
                                        hs_sat26DvyR.evaluateOnce = function () {
                                            var hs_wild1026Dvza = hs_tr26DuXN;
                                            if (hs_tr26DuXN.notEvaluated) {
                                                hs_wild1026Dvza = hs_tr26DuXN.hscall();
                                            }
                                            switch (hs_wild1026Dvza.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [0];
                                                return $res;
                                            case 2:
                                                var hs_s26Dv0Q = hs_wild1026Dvza.data[0];
                                                if (hs_s26Dv0Q.notEvaluated) {
                                                    return hs_s26Dv0Q.hscall();
                                                } else {
                                                    return hs_s26Dv0Q;
                                                }
                                            case 3:
                                                var hs_s26Dv0W = hs_wild1026Dvza.data[0];
                                                if (hs_s26Dv0W.notEvaluated) {
                                                    return hs_s26Dv0W.hscall();
                                                } else {
                                                    return hs_s26Dv0W;
                                                }
                                            }
                                        };
                                        var hs_sat26DvyS = new $hs.Thunk();
                                        hs_sat26DvyS.evaluateOnce = function () {
                                            var hs_sat26DvyW = new $hs.Thunk();
                                            hs_sat26DvyW.evaluateOnce = function () {
                                                var hs_wild1026Dvz1 = hs_t26DuZR;
                                                if (hs_t26DuZR.notEvaluated) {
                                                    hs_wild1026Dvz1 = hs_t26DuZR.hscall();
                                                }
                                                switch (hs_wild1026Dvz1.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [0];
                                                    return $res;
                                                case 2:
                                                    var hs_s26Dv0B = hs_wild1026Dvz1.data[0];
                                                    if (hs_s26Dv0B.notEvaluated) {
                                                        return hs_s26Dv0B.hscall();
                                                    } else {
                                                        return hs_s26Dv0B;
                                                    }
                                                case 3:
                                                    var hs_s26Dv0H = hs_wild1026Dvz1.data[0];
                                                    if (hs_s26Dv0H.notEvaluated) {
                                                        return hs_s26Dv0H.hscall();
                                                    } else {
                                                        return hs_s26Dv0H;
                                                    }
                                                }
                                            };
                                            var hs_sat26DvyV = new $hs.Data(1);
                                            hs_sat26DvyV.data = [1];
                                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DvyV, hs_sat26DvyW);
                                        };
                                        var hs_tpl26Dv11 = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DvyS, hs_sat26DvyR);
                                        var hs_sat26DvyU = new $hs.Data(1);
                                        hs_sat26DvyU.data = [hs_kzq126Dv12, hs_pzq26DuZO, hs_vzq26Dv13];
                                        var hs_sat26DvyI = new $hs.Data(3);
                                        hs_sat26DvyI.data = [hs_tpl26Dv11, hs_sat26DvyU, hs_t26DuZR, hs_m126Dv0s, hs_tr26DuXN];
                                        var $res = new $hs.Data(2);
                                        $res.data = [hs_wild726Dv10, hs_sat26DvyI, hs_ds226DuXO];
                                        return $res;
                                    }
                                }
                            }
                        }
                    case 3:
                        var hs_ezq26Dv1d = hs_wild326DvwT.data[1];
                        var hs_tl26Dv1h = hs_wild326DvwT.data[2];
                        var hs_m26Dv1b = hs_wild326DvwT.data[3];
                        var hs_tr26Dv1e = hs_wild326DvwT.data[4];
                        var hs_wild426DvwV = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziEventziUnique.hs_zdfOrdUnique, hs_eta126DuXJ, hs_m26Dv1b);
                        switch (hs_wild426DvwV.tag) {
                        case 1:
                            var hs_sat26DvxQ = new $hs.Data(2);
                            hs_sat26DvxQ.data = [hs_ezq26Dv1d, hs_tr26Dv1e, hs_ds226DuXO];
                            var hs_wild526Dv1p = hs_go26DuXP.hscall(hs_sat26DvxQ);
                            switch (hs_wild526Dv1p.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [hs_wild126DuXM, hs_tl26Dv1h, hs_m26Dv1b];
                                return $res;
                            case 2:
                                var hs_wild626Dv2M = hs_wild126DuXM;
                                if (hs_wild126DuXM.notEvaluated) {
                                    hs_wild626Dv2M = hs_wild126DuXM.hscall();
                                }
                                var hs_k26Dv2b = hs_wild626Dv2M.data[0];
                                var hs_p126Dv1z = hs_wild626Dv2M.data[1];
                                var hs_v126Dv2c = hs_wild626Dv2M.data[2];
                                var hs_wild726DvxP = hs_wild526Dv1p;
                                if (hs_wild526Dv1p.notEvaluated) {
                                    hs_wild726DvxP = hs_wild526Dv1p.hscall();
                                }
                                switch (hs_wild726DvxP.tag) {
                                case 1:
                                    return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("/home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/Event/PSQ.hs:(438,1)-(442,52)|function unsafePlay\x00");
                                case 2:
                                    var hs_ezq126Dv1u = hs_wild726DvxP.data[0];
                                    var hs_tzq26Dv1S = hs_wild726DvxP.data[1];
                                    var hs_mzq26Dv2f = hs_wild726DvxP.data[2];
                                    var hs_wild826Dv29 = hs_ezq126Dv1u;
                                    if (hs_ezq126Dv1u.notEvaluated) {
                                        hs_wild826Dv29 = hs_ezq126Dv1u.hscall();
                                    }
                                    var hs_kzq126Dv2O = hs_wild826Dv29.data[0];
                                    var hs_pzq26Dv1A = hs_wild826Dv29.data[1];
                                    var hs_vzq26Dv2P = hs_wild826Dv29.data[2];
                                    var hs_wild926DvxU = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_p126Dv1z, hs_pzq26Dv1A);
                                    switch (hs_wild926DvxU.tag) {
                                    case 1:
                                        var hs_sat26Dvyk = new $hs.Thunk();
                                        hs_sat26Dvyk.evaluateOnce = function () {
                                            var hs_wild1026DvyD = hs_tzq26Dv1S;
                                            if (hs_tzq26Dv1S.notEvaluated) {
                                                hs_wild1026DvyD = hs_tzq26Dv1S.hscall();
                                            }
                                            switch (hs_wild1026DvyD.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [0];
                                                return $res;
                                            case 2:
                                                var hs_s26Dv1Z = hs_wild1026DvyD.data[0];
                                                if (hs_s26Dv1Z.notEvaluated) {
                                                    return hs_s26Dv1Z.hscall();
                                                } else {
                                                    return hs_s26Dv1Z;
                                                }
                                            case 3:
                                                var hs_s26Dv25 = hs_wild1026DvyD.data[0];
                                                if (hs_s26Dv25.notEvaluated) {
                                                    return hs_s26Dv25.hscall();
                                                } else {
                                                    return hs_s26Dv25;
                                                }
                                            }
                                        };
                                        var hs_sat26Dvyl = new $hs.Thunk();
                                        hs_sat26Dvyl.evaluateOnce = function () {
                                            var hs_sat26Dvyp = new $hs.Thunk();
                                            hs_sat26Dvyp.evaluateOnce = function () {
                                                var hs_wild1026Dvyu = hs_tl26Dv1h;
                                                if (hs_tl26Dv1h.notEvaluated) {
                                                    hs_wild1026Dvyu = hs_tl26Dv1h.hscall();
                                                }
                                                switch (hs_wild1026Dvyu.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [0];
                                                    return $res;
                                                case 2:
                                                    var hs_s26Dv1J = hs_wild1026Dvyu.data[0];
                                                    if (hs_s26Dv1J.notEvaluated) {
                                                        return hs_s26Dv1J.hscall();
                                                    } else {
                                                        return hs_s26Dv1J;
                                                    }
                                                case 3:
                                                    var hs_s26Dv1P = hs_wild1026Dvyu.data[0];
                                                    if (hs_s26Dv1P.notEvaluated) {
                                                        return hs_s26Dv1P.hscall();
                                                    } else {
                                                        return hs_s26Dv1P;
                                                    }
                                                }
                                            };
                                            var hs_sat26Dvyo = new $hs.Data(1);
                                            hs_sat26Dvyo.data = [1];
                                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dvyo, hs_sat26Dvyp);
                                        };
                                        var hs_tpl26Dv2a = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dvyl, hs_sat26Dvyk);
                                        var hs_sat26Dvyn = new $hs.Data(1);
                                        hs_sat26Dvyn.data = [hs_k26Dv2b, hs_p126Dv1z, hs_v126Dv2c];
                                        var hs_sat26Dvyj = new $hs.Data(2);
                                        hs_sat26Dvyj.data = [hs_tpl26Dv2a, hs_sat26Dvyn, hs_tl26Dv1h, hs_m26Dv1b, hs_tzq26Dv1S];
                                        var $res = new $hs.Data(2);
                                        $res.data = [hs_wild826Dv29, hs_sat26Dvyj, hs_mzq26Dv2f];
                                        return $res;
                                    case 2:
                                        var hs_sat26DvxV = new $hs.Thunk();
                                        hs_sat26DvxV.evaluateOnce = function () {
                                            var hs_wild1026Dvye = hs_tzq26Dv1S;
                                            if (hs_tzq26Dv1S.notEvaluated) {
                                                hs_wild1026Dvye = hs_tzq26Dv1S.hscall();
                                            }
                                            switch (hs_wild1026Dvye.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [0];
                                                return $res;
                                            case 2:
                                                var hs_s26Dv2C = hs_wild1026Dvye.data[0];
                                                if (hs_s26Dv2C.notEvaluated) {
                                                    return hs_s26Dv2C.hscall();
                                                } else {
                                                    return hs_s26Dv2C;
                                                }
                                            case 3:
                                                var hs_s26Dv2I = hs_wild1026Dvye.data[0];
                                                if (hs_s26Dv2I.notEvaluated) {
                                                    return hs_s26Dv2I.hscall();
                                                } else {
                                                    return hs_s26Dv2I;
                                                }
                                            }
                                        };
                                        var hs_sat26DvxW = new $hs.Thunk();
                                        hs_sat26DvxW.evaluateOnce = function () {
                                            var hs_sat26Dvy0 = new $hs.Thunk();
                                            hs_sat26Dvy0.evaluateOnce = function () {
                                                var hs_wild1026Dvy5 = hs_tl26Dv1h;
                                                if (hs_tl26Dv1h.notEvaluated) {
                                                    hs_wild1026Dvy5 = hs_tl26Dv1h.hscall();
                                                }
                                                switch (hs_wild1026Dvy5.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [0];
                                                    return $res;
                                                case 2:
                                                    var hs_s26Dv2n = hs_wild1026Dvy5.data[0];
                                                    if (hs_s26Dv2n.notEvaluated) {
                                                        return hs_s26Dv2n.hscall();
                                                    } else {
                                                        return hs_s26Dv2n;
                                                    }
                                                case 3:
                                                    var hs_s26Dv2t = hs_wild1026Dvy5.data[0];
                                                    if (hs_s26Dv2t.notEvaluated) {
                                                        return hs_s26Dv2t.hscall();
                                                    } else {
                                                        return hs_s26Dv2t;
                                                    }
                                                }
                                            };
                                            var hs_sat26DvxZ = new $hs.Data(1);
                                            hs_sat26DvxZ.data = [1];
                                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DvxZ, hs_sat26Dvy0);
                                        };
                                        var hs_tpl26Dv2N = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DvxW, hs_sat26DvxV);
                                        var hs_sat26DvxY = new $hs.Data(1);
                                        hs_sat26DvxY.data = [hs_kzq126Dv2O, hs_pzq26Dv1A, hs_vzq26Dv2P];
                                        var hs_sat26DvxO = new $hs.Data(3);
                                        hs_sat26DvxO.data = [hs_tpl26Dv2N, hs_sat26DvxY, hs_tl26Dv1h, hs_m26Dv1b, hs_tzq26Dv1S];
                                        var $res = new $hs.Data(2);
                                        $res.data = [hs_wild626Dv2M, hs_sat26DvxO, hs_mzq26Dv2f];
                                        return $res;
                                    }
                                }
                            }
                        case 2:
                            var hs_sat26DvwW = new $hs.Data(2);
                            hs_sat26DvwW.data = [hs_wild126DuXM, hs_tl26Dv1h, hs_m26Dv1b];
                            var hs_wild526Dv2X = hs_go26DuXP.hscall(hs_sat26DvwW);
                            switch (hs_wild526Dv2X.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [hs_ezq26Dv1d, hs_tr26Dv1e, hs_ds226DuXO];
                                return $res;
                            case 2:
                                var hs_wild626DvwS = hs_wild526Dv2X;
                                if (hs_wild526Dv2X.notEvaluated) {
                                    hs_wild626DvwS = hs_wild526Dv2X.hscall();
                                }
                                switch (hs_wild626DvwS.tag) {
                                case 1:
                                    return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("/home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/Event/PSQ.hs:(438,1)-(442,52)|function unsafePlay\x00");
                                case 2:
                                    var hs_e26Dv32 = hs_wild626DvwS.data[0];
                                    var hs_t26Dv3f = hs_wild626DvwS.data[1];
                                    var hs_m126Dv3Q = hs_wild626DvwS.data[2];
                                    var hs_wild726Dv4o = hs_e26Dv32;
                                    if (hs_e26Dv32.notEvaluated) {
                                        hs_wild726Dv4o = hs_e26Dv32.hscall();
                                    }
                                    var hs_k26Dv3N = hs_wild726Dv4o.data[0];
                                    var hs_p126Dv3b = hs_wild726Dv4o.data[1];
                                    var hs_v126Dv3O = hs_wild726Dv4o.data[2];
                                    var hs_wild826Dv3L = hs_ezq26Dv1d;
                                    if (hs_ezq26Dv1d.notEvaluated) {
                                        hs_wild826Dv3L = hs_ezq26Dv1d.hscall();
                                    }
                                    var hs_kzq126Dv4q = hs_wild826Dv3L.data[0];
                                    var hs_pzq26Dv3c = hs_wild826Dv3L.data[1];
                                    var hs_vzq26Dv4r = hs_wild826Dv3L.data[2];
                                    var hs_wild926Dvx0 = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_p126Dv3b, hs_pzq26Dv3c);
                                    switch (hs_wild926Dvx0.tag) {
                                    case 1:
                                        var hs_sat26Dvxq = new $hs.Thunk();
                                        hs_sat26Dvxq.evaluateOnce = function () {
                                            var hs_wild1026DvxJ = hs_tr26Dv1e;
                                            if (hs_tr26Dv1e.notEvaluated) {
                                                hs_wild1026DvxJ = hs_tr26Dv1e.hscall();
                                            }
                                            switch (hs_wild1026DvxJ.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [0];
                                                return $res;
                                            case 2:
                                                var hs_s26Dv3B = hs_wild1026DvxJ.data[0];
                                                if (hs_s26Dv3B.notEvaluated) {
                                                    return hs_s26Dv3B.hscall();
                                                } else {
                                                    return hs_s26Dv3B;
                                                }
                                            case 3:
                                                var hs_s26Dv3H = hs_wild1026DvxJ.data[0];
                                                if (hs_s26Dv3H.notEvaluated) {
                                                    return hs_s26Dv3H.hscall();
                                                } else {
                                                    return hs_s26Dv3H;
                                                }
                                            }
                                        };
                                        var hs_sat26Dvxr = new $hs.Thunk();
                                        hs_sat26Dvxr.evaluateOnce = function () {
                                            var hs_sat26Dvxv = new $hs.Thunk();
                                            hs_sat26Dvxv.evaluateOnce = function () {
                                                var hs_wild1026DvxA = hs_t26Dv3f;
                                                if (hs_t26Dv3f.notEvaluated) {
                                                    hs_wild1026DvxA = hs_t26Dv3f.hscall();
                                                }
                                                switch (hs_wild1026DvxA.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [0];
                                                    return $res;
                                                case 2:
                                                    var hs_s26Dv3m = hs_wild1026DvxA.data[0];
                                                    if (hs_s26Dv3m.notEvaluated) {
                                                        return hs_s26Dv3m.hscall();
                                                    } else {
                                                        return hs_s26Dv3m;
                                                    }
                                                case 3:
                                                    var hs_s26Dv3s = hs_wild1026DvxA.data[0];
                                                    if (hs_s26Dv3s.notEvaluated) {
                                                        return hs_s26Dv3s.hscall();
                                                    } else {
                                                        return hs_s26Dv3s;
                                                    }
                                                }
                                            };
                                            var hs_sat26Dvxu = new $hs.Data(1);
                                            hs_sat26Dvxu.data = [1];
                                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dvxu, hs_sat26Dvxv);
                                        };
                                        var hs_tpl26Dv3M = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dvxr, hs_sat26Dvxq);
                                        var hs_sat26Dvxt = new $hs.Data(1);
                                        hs_sat26Dvxt.data = [hs_k26Dv3N, hs_p126Dv3b, hs_v126Dv3O];
                                        var hs_sat26Dvxp = new $hs.Data(2);
                                        hs_sat26Dvxp.data = [hs_tpl26Dv3M, hs_sat26Dvxt, hs_t26Dv3f, hs_m126Dv3Q, hs_tr26Dv1e];
                                        var $res = new $hs.Data(2);
                                        $res.data = [hs_wild826Dv3L, hs_sat26Dvxp, hs_ds226DuXO];
                                        return $res;
                                    case 2:
                                        var hs_sat26Dvx1 = new $hs.Thunk();
                                        hs_sat26Dvx1.evaluateOnce = function () {
                                            var hs_wild1026Dvxk = hs_tr26Dv1e;
                                            if (hs_tr26Dv1e.notEvaluated) {
                                                hs_wild1026Dvxk = hs_tr26Dv1e.hscall();
                                            }
                                            switch (hs_wild1026Dvxk.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [0];
                                                return $res;
                                            case 2:
                                                var hs_s26Dv4e = hs_wild1026Dvxk.data[0];
                                                if (hs_s26Dv4e.notEvaluated) {
                                                    return hs_s26Dv4e.hscall();
                                                } else {
                                                    return hs_s26Dv4e;
                                                }
                                            case 3:
                                                var hs_s26Dv4k = hs_wild1026Dvxk.data[0];
                                                if (hs_s26Dv4k.notEvaluated) {
                                                    return hs_s26Dv4k.hscall();
                                                } else {
                                                    return hs_s26Dv4k;
                                                }
                                            }
                                        };
                                        var hs_sat26Dvx2 = new $hs.Thunk();
                                        hs_sat26Dvx2.evaluateOnce = function () {
                                            var hs_sat26Dvx6 = new $hs.Thunk();
                                            hs_sat26Dvx6.evaluateOnce = function () {
                                                var hs_wild1026Dvxb = hs_t26Dv3f;
                                                if (hs_t26Dv3f.notEvaluated) {
                                                    hs_wild1026Dvxb = hs_t26Dv3f.hscall();
                                                }
                                                switch (hs_wild1026Dvxb.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [0];
                                                    return $res;
                                                case 2:
                                                    var hs_s26Dv3Z = hs_wild1026Dvxb.data[0];
                                                    if (hs_s26Dv3Z.notEvaluated) {
                                                        return hs_s26Dv3Z.hscall();
                                                    } else {
                                                        return hs_s26Dv3Z;
                                                    }
                                                case 3:
                                                    var hs_s26Dv45 = hs_wild1026Dvxb.data[0];
                                                    if (hs_s26Dv45.notEvaluated) {
                                                        return hs_s26Dv45.hscall();
                                                    } else {
                                                        return hs_s26Dv45;
                                                    }
                                                }
                                            };
                                            var hs_sat26Dvx5 = new $hs.Data(1);
                                            hs_sat26Dvx5.data = [1];
                                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dvx5, hs_sat26Dvx6);
                                        };
                                        var hs_tpl26Dv4p = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dvx2, hs_sat26Dvx1);
                                        var hs_sat26Dvx4 = new $hs.Data(1);
                                        hs_sat26Dvx4.data = [hs_kzq126Dv4q, hs_pzq26Dv3c, hs_vzq26Dv4r];
                                        var hs_sat26DvwR = new $hs.Data(3);
                                        hs_sat26DvwR.data = [hs_tpl26Dv4p, hs_sat26Dvx4, hs_t26Dv3f, hs_m126Dv3Q, hs_tr26Dv1e];
                                        var $res = new $hs.Data(2);
                                        $res.data = [hs_wild726Dv4o, hs_sat26DvwR, hs_ds226DuXO];
                                        return $res;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
        return hs_go26DuXP.hscall(hs_eta226Dv4E);
    };
    this.hs_fromList.evaluateOnce = function () {
        var hs_sat26DvAy = new $hs.Func(2);
        hs_sat26DvAy.evaluate = function (hs_ds26Dv4H, hs_q26Dv4P) {
            var hs_wild26DvAz = hs_ds26Dv4H;
            if (hs_ds26Dv4H.notEvaluated) {
                hs_wild26DvAz = hs_ds26Dv4H.hscall();
            }
            var hs_k26Dv4M = hs_wild26DvAz.data[0];
            var hs_p26Dv4N = hs_wild26DvAz.data[1];
            var hs_v26Dv4O = hs_wild26DvAz.data[2];
            return $hs.modules.GHCziEventziPSQ.hs_insert.hscall(hs_k26Dv4M, hs_p26Dv4N, hs_v26Dv4O, hs_q26Dv4P);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26DvAy, $hs.modules.GHCziEventziPSQ.hs_Void);
    };
    this.hs_lookup.evaluate = function (hs_k26Dv4W, hs_q26Dv59) {
        var hs_zdj26Dv58 = new $hs.Func(2);
        hs_zdj26Dv58.evaluate = function (hs_tl26Dv4X, hs_tr26Dv57) {
            var hs_sat26DvAL = new $hs.Thunk();
            hs_sat26DvAL.evaluateOnce = function () {
                var hs_wild26DvAP = hs_tl26Dv4X;
                if (hs_tl26Dv4X.notEvaluated) {
                    hs_wild26DvAP = hs_tl26Dv4X.hscall();
                }
                switch (hs_wild26DvAP.tag) {
                case 1:
                    var hs_sat26DvAR = new $hs.Thunk();
                    hs_sat26DvAR.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("empty queue\x00");
                    };
                    var hs_sat26DvAQ = new $hs.Thunk();
                    hs_sat26DvAQ.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("maxKey\x00");
                    };
                    return hs_moduleError25tyTX.hscall(hs_sat26DvAQ, hs_sat26DvAR);
                case 2:
                    var hs_m26Dv54 = hs_wild26DvAP.data[2];
                    if (hs_m26Dv54.notEvaluated) {
                        return hs_m26Dv54.hscall();
                    } else {
                        return hs_m26Dv54;
                    }
                }
            };
            var hs_wild26DvAM = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziEventziUnique.hs_zdfOrdUnique, hs_k26Dv4W, hs_sat26DvAL);
            switch (hs_wild26DvAM.tag) {
            case 1:
                return $hs.modules.GHCziEventziPSQ.hs_lookup.hscall(hs_k26Dv4W, hs_tr26Dv57);
            case 2:
                return $hs.modules.GHCziEventziPSQ.hs_lookup.hscall(hs_k26Dv4W, hs_tl26Dv4X);
            }
        };
        var hs_wild26DvAE = hs_q26Dv59;
        if (hs_q26Dv59.notEvaluated) {
            hs_wild26DvAE = hs_q26Dv59.hscall();
        }
        switch (hs_wild26DvAE.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_e26Dv5g = hs_wild26DvAE.data[0];
            var hs_ds26Dv5e = hs_wild26DvAE.data[1];
            var hs_ds126Dv5A = hs_wild26DvAE.data[2];
            var hs_wild126DvAC = hs_ds26Dv5e;
            if (hs_ds26Dv5e.notEvaluated) {
                hs_wild126DvAC = hs_ds26Dv5e.hscall();
            }
            switch (hs_wild126DvAC.tag) {
            case 1:
                var hs_wild226DvAJ = hs_e26Dv5g;
                if (hs_e26Dv5g.notEvaluated) {
                    hs_wild226DvAJ = hs_e26Dv5g.hscall();
                }
                var hs_kzq26Dv5l = hs_wild226DvAJ.data[0];
                var hs_p26Dv5n = hs_wild226DvAJ.data[1];
                var hs_v26Dv5o = hs_wild226DvAJ.data[2];
                var hs_wild326DvAK = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziEventziUnique.hs_zdfEqUnique, hs_k26Dv4W, hs_kzq26Dv5l);
                switch (hs_wild326DvAK.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_sat26DvAI = new $hs.Data(1);
                    hs_sat26DvAI.data = [hs_p26Dv5n, hs_v26Dv5o];
                    var $res = new $hs.Data(2);
                    $res.data = [hs_sat26DvAI];
                    return $res;
                }
            case 2:
                var hs_ezq26Dv5v = hs_wild126DvAC.data[1];
                var hs_tl26Dv5w = hs_wild126DvAC.data[2];
                var hs_m26Dv5x = hs_wild126DvAC.data[3];
                var hs_tr26Dv5z = hs_wild126DvAC.data[4];
                var hs_sat26DvAB = new $hs.Data(2);
                hs_sat26DvAB.data = [hs_e26Dv5g, hs_tr26Dv5z, hs_ds126Dv5A];
                var hs_sat26DvAA = new $hs.Data(2);
                hs_sat26DvAA.data = [hs_ezq26Dv5v, hs_tl26Dv5w, hs_m26Dv5x];
                return hs_zdj26Dv58.hscall(hs_sat26DvAA, hs_sat26DvAB);
            case 3:
                var hs_ezq26Dv5K = hs_wild126DvAC.data[1];
                var hs_tl26Dv5H = hs_wild126DvAC.data[2];
                var hs_m26Dv5I = hs_wild126DvAC.data[3];
                var hs_tr26Dv5L = hs_wild126DvAC.data[4];
                var hs_sat26DvAG = new $hs.Data(2);
                hs_sat26DvAG.data = [hs_ezq26Dv5K, hs_tr26Dv5L, hs_ds126Dv5A];
                var hs_sat26DvAF = new $hs.Data(2);
                hs_sat26DvAF.data = [hs_e26Dv5g, hs_tl26Dv5H, hs_m26Dv5I];
                return hs_zdj26Dv58.hscall(hs_sat26DvAF, hs_sat26DvAG);
            }
        }
    };
    this.hs_null.evaluate = function (hs_ds26Dv5O) {
        var hs_wild26DvAV = hs_ds26Dv5O;
        if (hs_ds26Dv5O.notEvaluated) {
            hs_wild26DvAV = hs_ds26Dv5O.hscall();
        }
        switch (hs_wild26DvAV.tag) {
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
    this.hs_sizze.evaluate = function (hs_ds26Dv5U) {
        var hs_wild26DvAX = hs_ds26Dv5U;
        if (hs_ds26Dv5U.notEvaluated) {
            hs_wild26DvAX = hs_ds26Dv5U.hscall();
        }
        switch (hs_wild26DvAX.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [0];
            return $res;
        case 2:
            var hs_lt26Dv60 = hs_wild26DvAX.data[1];
            var hs_sat26DvB0 = new $hs.Thunk();
            hs_sat26DvB0.evaluateOnce = function () {
                var hs_wild126DvB5 = hs_lt26Dv60;
                if (hs_lt26Dv60.notEvaluated) {
                    hs_wild126DvB5 = hs_lt26Dv60.hscall();
                }
                switch (hs_wild126DvB5.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [0];
                    return $res;
                case 2:
                    var hs_s26Dv67 = hs_wild126DvB5.data[0];
                    if (hs_s26Dv67.notEvaluated) {
                        return hs_s26Dv67.hscall();
                    } else {
                        return hs_s26Dv67;
                    }
                case 3:
                    var hs_s26Dv6d = hs_wild126DvB5.data[0];
                    if (hs_s26Dv6d.notEvaluated) {
                        return hs_s26Dv6d.hscall();
                    } else {
                        return hs_s26Dv6d;
                    }
                }
            };
            var hs_sat26DvAW = new $hs.Data(1);
            hs_sat26DvAW.data = [1];
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DvAW, hs_sat26DvB0);
        }
    };
    this.hs_value.evaluate = function (hs_ds26Dv6g) {
        var hs_wild26DvBc = hs_ds26Dv6g;
        if (hs_ds26Dv6g.notEvaluated) {
            hs_wild26DvBc = hs_ds26Dv6g.hscall();
        }
        var hs_ds326Dv6l = hs_wild26DvBc.data[2];
        if (hs_ds326Dv6l.notEvaluated) {
            return hs_ds326Dv6l.hscall();
        } else {
            return hs_ds326Dv6l;
        }
    };
    this.hs_prio.evaluate = function (hs_ds26Dv6n) {
        var hs_wild26DvBf = hs_ds26Dv6n;
        if (hs_ds26Dv6n.notEvaluated) {
            hs_wild26DvBf = hs_ds26Dv6n.hscall();
        }
        var hs_ds226Dv6s = hs_wild26DvBf.data[1];
        if (hs_ds226Dv6s.notEvaluated) {
            return hs_ds226Dv6s.hscall();
        } else {
            return hs_ds226Dv6s;
        }
    };
    hs_atMosts25tyTy.evaluate = function (hs_pt26Dv6v, hs_q26Dv6y) {
        var hs_pt126Dv6K = hs_pt26Dv6v;
        if (hs_pt26Dv6v.notEvaluated) {
            hs_pt126Dv6K = hs_pt26Dv6v.hscall();
        }
        var hs_wild26Dv9K = hs_q26Dv6y;
        if (hs_q26Dv6y.notEvaluated) {
            hs_wild26Dv9K = hs_q26Dv6y.hscall();
        }
        switch (hs_wild26Dv9K.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [hs_a25v5Te, $hs.modules.GHCziEventziPSQ.hs_Void];
            return $res;
        case 2:
            var hs_e26Dv6D = hs_wild26Dv9K.data[0];
            var hs_ds26Dv6M = hs_wild26Dv9K.data[1];
            var hs_ds126Dv6Y = hs_wild26Dv9K.data[2];
            var hs_sat26DvBh = new $hs.Thunk();
            hs_sat26DvBh.evaluateOnce = function () {
                var hs_wild126DvCb = hs_e26Dv6D;
                if (hs_e26Dv6D.notEvaluated) {
                    hs_wild126DvCb = hs_e26Dv6D.hscall();
                }
                var hs_ds326Dv6I = hs_wild126DvCb.data[1];
                if (hs_ds326Dv6I.notEvaluated) {
                    return hs_ds326Dv6I.hscall();
                } else {
                    return hs_ds326Dv6I;
                }
            };
            var hs_wild126DvBi = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_sat26DvBh, hs_pt126Dv6K);
            switch (hs_wild126DvBi.tag) {
            case 1:
                var hs_wild226DvBk = hs_ds26Dv6M;
                if (hs_ds26Dv6M.notEvaluated) {
                    hs_wild226DvBk = hs_ds26Dv6M.hscall();
                }
                switch (hs_wild226DvBk.tag) {
                case 1:
                    var hs_sat26DvC8 = new $hs.Func(1);
                    hs_sat26DvC8.evaluate = function (hs_as26Dv6P) {
                        var $res = new $hs.Data(2);
                        $res.data = [hs_e26Dv6D, hs_as26Dv6P];
                        return $res;
                    };
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26DvC8, $hs.modules.GHCziEventziPSQ.hs_Void];
                    return $res;
                case 2:
                    var hs_ezq26Dv72 = hs_wild226DvBk.data[1];
                    var hs_tl26Dv73 = hs_wild226DvBk.data[2];
                    var hs_m26Dv74 = hs_wild226DvBk.data[3];
                    var hs_tr26Dv6X = hs_wild226DvBk.data[4];
                    var hs_ds326Dv70 = new $hs.Thunk();
                    hs_ds326Dv70.evaluateOnce = function () {
                        var hs_sat26DvBI = new $hs.Data(2);
                        hs_sat26DvBI.data = [hs_e26Dv6D, hs_tr26Dv6X, hs_ds126Dv6Y];
                        return hs_atMosts25tyTy.hscall(hs_pt126Dv6K, hs_sat26DvBI);
                    };
                    var hs_ds426Dv76 = new $hs.Thunk();
                    hs_ds426Dv76.evaluateOnce = function () {
                        var hs_sat26DvBH = new $hs.Data(2);
                        hs_sat26DvBH.data = [hs_ezq26Dv72, hs_tl26Dv73, hs_m26Dv74];
                        return hs_atMosts25tyTy.hscall(hs_pt126Dv6K, hs_sat26DvBH);
                    };
                    var hs_sat26DvBm = new $hs.Thunk();
                    hs_sat26DvBm.evaluateOnce = function () {
                        var hs_fail26Dv7m = new $hs.Func(1);
                        hs_fail26Dv7m.evaluate = function (hs_ds526Dv7l) {
                            return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("/home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/Event/PSQ.hs:(428,1)-(432,54)|function play\x00");
                        };
                        var hs_wild326DvBC = hs_ds426Dv76;
                        if (hs_ds426Dv76.notEvaluated) {
                            hs_wild326DvBC = hs_ds426Dv76.hscall();
                        }
                        var hs_qzq26Dv7q = hs_wild326DvBC.data[1];
                        var hs_wild426Dv7E = hs_qzq26Dv7q;
                        if (hs_qzq26Dv7q.notEvaluated) {
                            hs_wild426Dv7E = hs_qzq26Dv7q.hscall();
                        }
                        switch (hs_wild426Dv7E.tag) {
                        case 1:
                            var hs_wild526DvBG = hs_ds326Dv70;
                            if (hs_ds326Dv70.notEvaluated) {
                                hs_wild526DvBG = hs_ds326Dv70.hscall();
                            }
                            var hs_qzqzq26Dv7v = hs_wild526DvBG.data[1];
                            if (hs_qzqzq26Dv7v.notEvaluated) {
                                return hs_qzqzq26Dv7v.hscall();
                            } else {
                                return hs_qzqzq26Dv7v;
                            }
                        case 2:
                            var hs_wild526DvBx = hs_ds326Dv70;
                            if (hs_ds326Dv70.notEvaluated) {
                                hs_wild526DvBx = hs_ds326Dv70.hscall();
                            }
                            var hs_qzqzq26Dv7C = hs_wild526DvBx.data[1];
                            var hs_wild626Dv7R = hs_qzqzq26Dv7C;
                            if (hs_qzqzq26Dv7C.notEvaluated) {
                                hs_wild626Dv7R = hs_qzqzq26Dv7C.hscall();
                            }
                            switch (hs_wild626Dv7R.tag) {
                            case 1:
                                if (hs_wild426Dv7E.notEvaluated) {
                                    return hs_wild426Dv7E.hscall();
                                } else {
                                    return hs_wild426Dv7E;
                                }
                            case 2:
                                var hs_wild726DvBt = hs_wild426Dv7E;
                                if (hs_wild426Dv7E.notEvaluated) {
                                    hs_wild726DvBt = hs_wild426Dv7E.hscall();
                                }
                                switch (hs_wild726DvBt.tag) {
                                case 1:
                                    return hs_fail26Dv7m.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                case 2:
                                    var hs_e126Dv7M = hs_wild726DvBt.data[0];
                                    var hs_t26Dv86 = hs_wild726DvBt.data[1];
                                    var hs_m126Dv87 = hs_wild726DvBt.data[2];
                                    var hs_wild826Dv8g = hs_e126Dv7M;
                                    if (hs_e126Dv7M.notEvaluated) {
                                        hs_wild826Dv8g = hs_e126Dv7M.hscall();
                                    }
                                    var hs_k26Dv84 = hs_wild826Dv8g.data[0];
                                    var hs_p26Dv81 = hs_wild826Dv8g.data[1];
                                    var hs_v26Dv85 = hs_wild826Dv8g.data[2];
                                    var hs_wild926DvBs = hs_wild626Dv7R;
                                    if (hs_wild626Dv7R.notEvaluated) {
                                        hs_wild926DvBs = hs_wild626Dv7R.hscall();
                                    }
                                    switch (hs_wild926DvBs.tag) {
                                    case 1:
                                        return hs_fail26Dv7m.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                    case 2:
                                        var hs_ezq126Dv7W = hs_wild926DvBs.data[0];
                                        var hs_tzq26Dv88 = hs_wild926DvBs.data[1];
                                        var hs_mzq26Dv8c = hs_wild926DvBs.data[2];
                                        var hs_wild1026Dv8a = hs_ezq126Dv7W;
                                        if (hs_ezq126Dv7W.notEvaluated) {
                                            hs_wild1026Dv8a = hs_ezq126Dv7W.hscall();
                                        }
                                        var hs_kzq26Dv8d = hs_wild1026Dv8a.data[0];
                                        var hs_pzq26Dv82 = hs_wild1026Dv8a.data[1];
                                        var hs_vzq26Dv8e = hs_wild1026Dv8a.data[2];
                                        var hs_wild1126DvBE = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_p26Dv81, hs_pzq26Dv82);
                                        switch (hs_wild1126DvBE.tag) {
                                        case 1:
                                            var hs_tpl26Dv8b = hs_lbalance25tyTG.hscall(hs_k26Dv84, hs_p26Dv81, hs_v26Dv85, hs_t26Dv86, hs_m126Dv87, hs_tzq26Dv88);
                                            var $res = new $hs.Data(2);
                                            $res.data = [hs_wild1026Dv8a, hs_tpl26Dv8b, hs_mzq26Dv8c];
                                            return $res;
                                        case 2:
                                            var hs_tpl26Dv8h = hs_rbalance25tyTH.hscall(hs_kzq26Dv8d, hs_pzq26Dv82, hs_vzq26Dv8e, hs_t26Dv86, hs_m126Dv87, hs_tzq26Dv88);
                                            var $res = new $hs.Data(2);
                                            $res.data = [hs_wild826Dv8g, hs_tpl26Dv8h, hs_mzq26Dv8c];
                                            return $res;
                                        }
                                    }
                                }
                            }
                        }
                    };
                    var hs_sat26DvBj = new $hs.Func(1);
                    hs_sat26DvBj.evaluate = function (hs_as26Dv7e) {
                        var hs_wild326DvBp = hs_ds426Dv76;
                        if (hs_ds426Dv76.notEvaluated) {
                            hs_wild326DvBp = hs_ds426Dv76.hscall();
                        }
                        var hs_sequ26Dv7h = hs_wild326DvBp.data[0];
                        var hs_sat26DvBn = new $hs.Thunk();
                        hs_sat26DvBn.evaluateOnce = function () {
                            var hs_wild426DvBr = hs_ds326Dv70;
                            if (hs_ds326Dv70.notEvaluated) {
                                hs_wild426DvBr = hs_ds326Dv70.hscall();
                            }
                            var hs_sequzq26Dv7f = hs_wild426DvBr.data[0];
                            return hs_sequzq26Dv7f.hscall(hs_as26Dv7e);
                        };
                        return hs_sequ26Dv7h.hscall(hs_sat26DvBn);
                    };
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26DvBj, hs_sat26DvBm];
                    return $res;
                case 3:
                    var hs_ezq26Dv8p = hs_wild226DvBk.data[1];
                    var hs_tl26Dv8u = hs_wild226DvBk.data[2];
                    var hs_m26Dv8v = hs_wild226DvBk.data[3];
                    var hs_tr26Dv8q = hs_wild226DvBk.data[4];
                    var hs_ds326Dv8s = new $hs.Thunk();
                    hs_ds326Dv8s.evaluateOnce = function () {
                        var hs_sat26DvC7 = new $hs.Data(2);
                        hs_sat26DvC7.data = [hs_ezq26Dv8p, hs_tr26Dv8q, hs_ds126Dv6Y];
                        return hs_atMosts25tyTy.hscall(hs_pt126Dv6K, hs_sat26DvC7);
                    };
                    var hs_ds426Dv8x = new $hs.Thunk();
                    hs_ds426Dv8x.evaluateOnce = function () {
                        var hs_sat26DvC6 = new $hs.Data(2);
                        hs_sat26DvC6.data = [hs_e26Dv6D, hs_tl26Dv8u, hs_m26Dv8v];
                        return hs_atMosts25tyTy.hscall(hs_pt126Dv6K, hs_sat26DvC6);
                    };
                    var hs_sat26DvBL = new $hs.Thunk();
                    hs_sat26DvBL.evaluateOnce = function () {
                        var hs_fail26Dv8N = new $hs.Func(1);
                        hs_fail26Dv8N.evaluate = function (hs_ds526Dv8M) {
                            return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("/home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/Event/PSQ.hs:(428,1)-(432,54)|function play\x00");
                        };
                        var hs_wild326DvC1 = hs_ds426Dv8x;
                        if (hs_ds426Dv8x.notEvaluated) {
                            hs_wild326DvC1 = hs_ds426Dv8x.hscall();
                        }
                        var hs_qzq26Dv8R = hs_wild326DvC1.data[1];
                        var hs_wild426Dv95 = hs_qzq26Dv8R;
                        if (hs_qzq26Dv8R.notEvaluated) {
                            hs_wild426Dv95 = hs_qzq26Dv8R.hscall();
                        }
                        switch (hs_wild426Dv95.tag) {
                        case 1:
                            var hs_wild526DvC5 = hs_ds326Dv8s;
                            if (hs_ds326Dv8s.notEvaluated) {
                                hs_wild526DvC5 = hs_ds326Dv8s.hscall();
                            }
                            var hs_qzqzq26Dv8W = hs_wild526DvC5.data[1];
                            if (hs_qzqzq26Dv8W.notEvaluated) {
                                return hs_qzqzq26Dv8W.hscall();
                            } else {
                                return hs_qzqzq26Dv8W;
                            }
                        case 2:
                            var hs_wild526DvBW = hs_ds326Dv8s;
                            if (hs_ds326Dv8s.notEvaluated) {
                                hs_wild526DvBW = hs_ds326Dv8s.hscall();
                            }
                            var hs_qzqzq26Dv93 = hs_wild526DvBW.data[1];
                            var hs_wild626Dv9i = hs_qzqzq26Dv93;
                            if (hs_qzqzq26Dv93.notEvaluated) {
                                hs_wild626Dv9i = hs_qzqzq26Dv93.hscall();
                            }
                            switch (hs_wild626Dv9i.tag) {
                            case 1:
                                if (hs_wild426Dv95.notEvaluated) {
                                    return hs_wild426Dv95.hscall();
                                } else {
                                    return hs_wild426Dv95;
                                }
                            case 2:
                                var hs_wild726DvBS = hs_wild426Dv95;
                                if (hs_wild426Dv95.notEvaluated) {
                                    hs_wild726DvBS = hs_wild426Dv95.hscall();
                                }
                                switch (hs_wild726DvBS.tag) {
                                case 1:
                                    return hs_fail26Dv8N.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                case 2:
                                    var hs_e126Dv9d = hs_wild726DvBS.data[0];
                                    var hs_t26Dv9x = hs_wild726DvBS.data[1];
                                    var hs_m126Dv9y = hs_wild726DvBS.data[2];
                                    var hs_wild826Dv9H = hs_e126Dv9d;
                                    if (hs_e126Dv9d.notEvaluated) {
                                        hs_wild826Dv9H = hs_e126Dv9d.hscall();
                                    }
                                    var hs_k26Dv9v = hs_wild826Dv9H.data[0];
                                    var hs_p26Dv9s = hs_wild826Dv9H.data[1];
                                    var hs_v26Dv9w = hs_wild826Dv9H.data[2];
                                    var hs_wild926DvBR = hs_wild626Dv9i;
                                    if (hs_wild626Dv9i.notEvaluated) {
                                        hs_wild926DvBR = hs_wild626Dv9i.hscall();
                                    }
                                    switch (hs_wild926DvBR.tag) {
                                    case 1:
                                        return hs_fail26Dv8N.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                    case 2:
                                        var hs_ezq126Dv9n = hs_wild926DvBR.data[0];
                                        var hs_tzq26Dv9z = hs_wild926DvBR.data[1];
                                        var hs_mzq26Dv9D = hs_wild926DvBR.data[2];
                                        var hs_wild1026Dv9B = hs_ezq126Dv9n;
                                        if (hs_ezq126Dv9n.notEvaluated) {
                                            hs_wild1026Dv9B = hs_ezq126Dv9n.hscall();
                                        }
                                        var hs_kzq26Dv9E = hs_wild1026Dv9B.data[0];
                                        var hs_pzq26Dv9t = hs_wild1026Dv9B.data[1];
                                        var hs_vzq26Dv9F = hs_wild1026Dv9B.data[2];
                                        var hs_wild1126DvC3 = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_p26Dv9s, hs_pzq26Dv9t);
                                        switch (hs_wild1126DvC3.tag) {
                                        case 1:
                                            var hs_tpl26Dv9C = hs_lbalance25tyTG.hscall(hs_k26Dv9v, hs_p26Dv9s, hs_v26Dv9w, hs_t26Dv9x, hs_m126Dv9y, hs_tzq26Dv9z);
                                            var $res = new $hs.Data(2);
                                            $res.data = [hs_wild1026Dv9B, hs_tpl26Dv9C, hs_mzq26Dv9D];
                                            return $res;
                                        case 2:
                                            var hs_tpl26Dv9I = hs_rbalance25tyTH.hscall(hs_kzq26Dv9E, hs_pzq26Dv9t, hs_vzq26Dv9F, hs_t26Dv9x, hs_m126Dv9y, hs_tzq26Dv9z);
                                            var $res = new $hs.Data(2);
                                            $res.data = [hs_wild826Dv9H, hs_tpl26Dv9I, hs_mzq26Dv9D];
                                            return $res;
                                        }
                                    }
                                }
                            }
                        }
                    };
                    var hs_sat26DvBJ = new $hs.Func(1);
                    hs_sat26DvBJ.evaluate = function (hs_as26Dv8F) {
                        var hs_wild326DvBO = hs_ds426Dv8x;
                        if (hs_ds426Dv8x.notEvaluated) {
                            hs_wild326DvBO = hs_ds426Dv8x.hscall();
                        }
                        var hs_sequ26Dv8I = hs_wild326DvBO.data[0];
                        var hs_sat26DvBM = new $hs.Thunk();
                        hs_sat26DvBM.evaluateOnce = function () {
                            var hs_wild426DvBQ = hs_ds326Dv8s;
                            if (hs_ds326Dv8s.notEvaluated) {
                                hs_wild426DvBQ = hs_ds326Dv8s.hscall();
                            }
                            var hs_sequzq26Dv8G = hs_wild426DvBQ.data[0];
                            return hs_sequzq26Dv8G.hscall(hs_as26Dv8F);
                        };
                        return hs_sequ26Dv8I.hscall(hs_sat26DvBM);
                    };
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26DvBJ, hs_sat26DvBL];
                    return $res;
                }
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [hs_a25v5Te, hs_wild26Dv9K];
                return $res;
            }
        }
    };
    this.hs_atMost.evaluate = function (hs_pt26Dv9O, hs_q26Dv9P) {
        var hs_ds26Dv9Q = new $hs.Thunk();
        hs_ds26Dv9Q.evaluateOnce = function () {
            return hs_atMosts25tyTy.hscall(hs_pt26Dv9O, hs_q26Dv9P);
        };
        var hs_sat26DvCd = new $hs.Thunk();
        hs_sat26DvCd.evaluateOnce = function () {
            var hs_wild26DvCh = hs_ds26Dv9Q;
            if (hs_ds26Dv9Q.notEvaluated) {
                hs_wild26DvCh = hs_ds26Dv9Q.hscall();
            }
            var hs_qzq26Dv9Z = hs_wild26DvCh.data[1];
            if (hs_qzq26Dv9Z.notEvaluated) {
                return hs_qzq26Dv9Z.hscall();
            } else {
                return hs_qzq26Dv9Z;
            }
        };
        var hs_sat26DvCc = new $hs.Thunk();
        hs_sat26DvCc.evaluateOnce = function () {
            var hs_wild26DvCf = hs_ds26Dv9Q;
            if (hs_ds26Dv9Q.notEvaluated) {
                hs_wild26DvCf = hs_ds26Dv9Q.hscall();
            }
            var hs_sequ26Dv9U = hs_wild26DvCf.data[0];
            return hs_sequ26Dv9U.hscall($hs.modules.GHCziTypes.hs_ZMZN);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DvCc, hs_sat26DvCd];
        return $res;
    };
    this.hs_key.evaluate = function (hs_ds26Dva2) {
        var hs_wild26DvCk = hs_ds26Dva2;
        if (hs_ds26Dva2.notEvaluated) {
            hs_wild26DvCk = hs_ds26Dva2.hscall();
        }
        var hs_ds126Dva7 = hs_wild26DvCk.data[0];
        if (hs_ds126Dva7.notEvaluated) {
            return hs_ds126Dva7.hscall();
        } else {
            return hs_ds126Dva7;
        }
    };
    hs_zdcshowsPrec25v6DS.evaluate = function (hs_zddShow26Dvab) {
        var hs_zddShow126Dvac = new $hs.Thunk();
        hs_zddShow126Dvac.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZMZN.hscall(hs_zddShow26Dvab);
        };
        var hs_sat26DvCl = new $hs.Func(2);
        hs_sat26DvCl.evaluate = function (hs_d26Dvaf, hs_a326Dvag) {
            var hs_sat26DvCm = new $hs.Thunk();
            hs_sat26DvCm.evaluateOnce = function () {
                return hs_a326Dvag.hscall($hs.modules.GHCziTypes.hs_ZMZN);
            };
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126Dvac, hs_d26Dvaf, hs_sat26DvCm);
        };
        if (hs_sat26DvCl.notEvaluated) {
            return hs_sat26DvCl.hscall();
        } else {
            return hs_sat26DvCl;
        }
    };
    this.hs_zdfShowSequ.evaluate = function (hs_zddShow26Dvam) {
        var hs_sat26DvCo = new $hs.Thunk();
        hs_sat26DvCo.evaluateOnce = function () {
            return hs_zdcshowList25v6E3.hscall(hs_zddShow26Dvam);
        };
        var hs_sat26DvCp = new $hs.Thunk();
        hs_sat26DvCp.evaluateOnce = function () {
            return hs_zdcshow25v6E4.hscall(hs_zddShow26Dvam);
        };
        var hs_sat26DvCn = new $hs.Thunk();
        hs_sat26DvCn.evaluateOnce = function () {
            return hs_zdcshowsPrec25v6DS.hscall(hs_zddShow26Dvam);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DvCn, hs_sat26DvCp, hs_sat26DvCo];
        return $res;
    };
    hs_zdcshowList25v6E3.evaluate = function (hs_zddShow26Dvar) {
        var hs_sat26DvCq = new $hs.Thunk();
        hs_sat26DvCq.evaluateOnce = function () {
            return $hs.modules.GHCziEventziPSQ.hs_zdfShowSequ.hscall(hs_zddShow26Dvar);
        };
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall(hs_sat26DvCq);
    };
    hs_zdcshow25v6E4.evaluate = function (hs_zddShow26Dvau) {
        var hs_sat26DvCr = new $hs.Thunk();
        hs_sat26DvCr.evaluateOnce = function () {
            return $hs.modules.GHCziEventziPSQ.hs_zdfShowSequ.hscall(hs_zddShow26Dvau);
        };
        return $hs.modules.GHCziShow.hs_zddmshow.hscall(hs_sat26DvCr);
    };
    hs_zdcshowsPrec125v6Eg.evaluate = function (hs_zddShow26Dvb0, hs_a326DvaF, hs_ds26DvaA) {
        var hs_wild26DvCt = hs_ds26DvaA;
        if (hs_ds26DvaA.notEvaluated) {
            hs_wild26DvCt = hs_ds26DvaA.hscall();
        }
        var hs_b126DvaN = hs_wild26DvCt.data[0];
        var hs_b226DvaU = hs_wild26DvCt.data[1];
        var hs_b326Dvb2 = hs_wild26DvCt.data[2];
        var hs_sat26DvCu = new $hs.Thunk();
        hs_sat26DvCu.evaluateOnce = function () {
            var hs_sat26DvCx = new $hs.Thunk();
            hs_sat26DvCx.evaluateOnce = function () {
                var hs_sat26DvCA = new $hs.Thunk();
                hs_sat26DvCA.evaluateOnce = function () {
                    var hs_sat26DvCD = new $hs.Thunk();
                    hs_sat26DvCD.evaluateOnce = function () {
                        var hs_sat26DvCG = new $hs.Thunk();
                        hs_sat26DvCG.evaluateOnce = function () {
                            var hs_sat26DvCJ = new $hs.Thunk();
                            hs_sat26DvCJ.evaluateOnce = function () {
                                var hs_sat26DvCM = new $hs.Thunk();
                                hs_sat26DvCM.evaluateOnce = function () {
                                    var hs_sat26DvCP = new $hs.Thunk();
                                    hs_sat26DvCP.evaluateOnce = function () {
                                        var hs_sat26DvCS = new $hs.Thunk();
                                        hs_sat26DvCS.evaluateOnce = function () {
                                            var hs_sat26DvCV = new $hs.Thunk();
                                            hs_sat26DvCV.evaluateOnce = function () {
                                                var hs_sat26DvCY = new $hs.Data(1);
                                                hs_sat26DvCY.data = ["}"];
                                                var hs_sat26DvCX = new $hs.Data(2);
                                                hs_sat26DvCX.data = [hs_sat26DvCY, $hs.modules.GHCziTypes.hs_ZMZN];
                                                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DvCX);
                                            };
                                            var hs_sat26DvCU = new $hs.Thunk();
                                            hs_sat26DvCU.evaluateOnce = function () {
                                                var hs_sat26DvCW = new $hs.Data(1);
                                                hs_sat26DvCW.data = [0];
                                                return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26Dvb0, hs_sat26DvCW, hs_b326Dvb2);
                                            };
                                            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DvCU, hs_sat26DvCV);
                                        };
                                        var hs_sat26DvCR = new $hs.Thunk();
                                        hs_sat26DvCR.evaluateOnce = function () {
                                            var hs_sat26DvCT = new $hs.Thunk();
                                            hs_sat26DvCT.evaluateOnce = function () {
                                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("value = \x00");
                                            };
                                            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DvCT);
                                        };
                                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DvCR, hs_sat26DvCS);
                                    };
                                    var hs_sat26DvCO = new $hs.Thunk();
                                    hs_sat26DvCO.evaluateOnce = function () {
                                        var hs_sat26DvCQ = new $hs.Thunk();
                                        hs_sat26DvCQ.evaluateOnce = function () {
                                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall(", \x00");
                                        };
                                        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DvCQ);
                                    };
                                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DvCO, hs_sat26DvCP);
                                };
                                var hs_sat26DvCL = new $hs.Thunk();
                                hs_sat26DvCL.evaluateOnce = function () {
                                    var hs_sat26DvCN = new $hs.Data(1);
                                    hs_sat26DvCN.data = [0];
                                    return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziFloat.hs_zdfShowDouble, hs_sat26DvCN, hs_b226DvaU);
                                };
                                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DvCL, hs_sat26DvCM);
                            };
                            var hs_sat26DvCI = new $hs.Thunk();
                            hs_sat26DvCI.evaluateOnce = function () {
                                var hs_sat26DvCK = new $hs.Thunk();
                                hs_sat26DvCK.evaluateOnce = function () {
                                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("prio = \x00");
                                };
                                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DvCK);
                            };
                            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DvCI, hs_sat26DvCJ);
                        };
                        var hs_sat26DvCF = new $hs.Thunk();
                        hs_sat26DvCF.evaluateOnce = function () {
                            var hs_sat26DvCH = new $hs.Thunk();
                            hs_sat26DvCH.evaluateOnce = function () {
                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall(", \x00");
                            };
                            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DvCH);
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DvCF, hs_sat26DvCG);
                    };
                    var hs_sat26DvCC = new $hs.Thunk();
                    hs_sat26DvCC.evaluateOnce = function () {
                        var hs_sat26DvCE = new $hs.Data(1);
                        hs_sat26DvCE.data = [0];
                        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziEventziUnique.hs_zdfShowUnique, hs_sat26DvCE, hs_b126DvaN);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DvCC, hs_sat26DvCD);
                };
                var hs_sat26DvCz = new $hs.Thunk();
                hs_sat26DvCz.evaluateOnce = function () {
                    var hs_sat26DvCB = new $hs.Thunk();
                    hs_sat26DvCB.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("key = \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DvCB);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DvCz, hs_sat26DvCA);
            };
            var hs_sat26DvCw = new $hs.Thunk();
            hs_sat26DvCw.evaluateOnce = function () {
                var hs_sat26DvCy = new $hs.Thunk();
                hs_sat26DvCy.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("E {\x00");
                };
                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DvCy);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DvCw, hs_sat26DvCx);
        };
        var hs_sat26DvCs = new $hs.Thunk();
        hs_sat26DvCs.evaluateOnce = function () {
            var hs_sat26DvCv = new $hs.Data(1);
            hs_sat26DvCv.data = [11];
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_a326DvaF, hs_sat26DvCv);
        };
        return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DvCs, hs_sat26DvCu);
    };
    this.hs_zdfShowElem.evaluate = function (hs_zddShow26Dvbj) {
        var hs_sat26DvD0 = new $hs.Thunk();
        hs_sat26DvD0.evaluateOnce = function () {
            return hs_zdcshowList125v6F0.hscall(hs_zddShow26Dvbj);
        };
        var hs_sat26DvD1 = new $hs.Thunk();
        hs_sat26DvD1.evaluateOnce = function () {
            return hs_zdcshow125v6F1.hscall(hs_zddShow26Dvbj);
        };
        var hs_sat26DvCZ = new $hs.Func(2);
        hs_sat26DvCZ.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcshowsPrec125v6Eg.hscall(hs_zddShow26Dvbj, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DvCZ, hs_sat26DvD1, hs_sat26DvD0];
        return $res;
    };
    hs_zdcshowList125v6F0.evaluate = function (hs_zddShow26Dvbo) {
        var hs_sat26DvD2 = new $hs.Thunk();
        hs_sat26DvD2.evaluateOnce = function () {
            var hs_sat26DvD3 = new $hs.Data(1);
            hs_sat26DvD3.data = [0];
            var hs_sat26DvD4 = $hs.modules.GHCziEventziPSQ.hs_zdfShowElem.hscall(hs_zddShow26Dvbo);
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_sat26DvD4, hs_sat26DvD3);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DvD2);
    };
    hs_zdcshow125v6F1.evaluate = function (hs_zddShow26Dvbt) {
        var hs_sat26DvD5 = new $hs.Thunk();
        hs_sat26DvD5.evaluateOnce = function () {
            return $hs.modules.GHCziEventziPSQ.hs_zdfShowElem.hscall(hs_zddShow26Dvbt);
        };
        return $hs.modules.GHCziShow.hs_zddmshow.hscall(hs_sat26DvD5);
    };
    this.hs_zdfShowLTree.evaluate = function (hs_zddShow26Dvbz) {
        var hs_sat26DvD7 = new $hs.Thunk();
        hs_sat26DvD7.evaluateOnce = function () {
            return hs_zdcshowList225v6Ff.hscall(hs_zddShow26Dvbz);
        };
        var hs_sat26DvD8 = new $hs.Thunk();
        hs_sat26DvD8.evaluateOnce = function () {
            return hs_zdcshow225v6Fg.hscall(hs_zddShow26Dvbz);
        };
        var hs_sat26DvD6 = new $hs.Thunk();
        hs_sat26DvD6.evaluateOnce = function () {
            return hs_zdcshowsPrec225v6Fh.hscall(hs_zddShow26Dvbz);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DvD6, hs_sat26DvD8, hs_sat26DvD7];
        return $res;
    };
    hs_zdcshowList225v6Ff.evaluate = function (hs_zddShow26DvbE) {
        var hs_sat26DvD9 = new $hs.Thunk();
        hs_sat26DvD9.evaluateOnce = function () {
            var hs_sat26DvDa = new $hs.Data(1);
            hs_sat26DvDa.data = [0];
            var hs_sat26DvDb = $hs.modules.GHCziEventziPSQ.hs_zdfShowLTree.hscall(hs_zddShow26DvbE);
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_sat26DvDb, hs_sat26DvDa);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DvD9);
    };
    hs_zdcshow225v6Fg.evaluate = function (hs_zddShow26DvbJ) {
        var hs_sat26DvDc = new $hs.Thunk();
        hs_sat26DvDc.evaluateOnce = function () {
            return $hs.modules.GHCziEventziPSQ.hs_zdfShowLTree.hscall(hs_zddShow26DvbJ);
        };
        return $hs.modules.GHCziShow.hs_zddmshow.hscall(hs_sat26DvDc);
    };
    hs_zdcshowsPrec225v6Fh.evaluate = function (hs_zddShow26DvbN) {
        var hs_zddShow126DvbO = new $hs.Thunk();
        hs_zddShow126DvbO.evaluateOnce = function () {
            return $hs.modules.GHCziEventziPSQ.hs_zdfShowLTree.hscall(hs_zddShow26DvbN);
        };
        var hs_zddShow226DvbQ = new $hs.Thunk();
        hs_zddShow226DvbQ.evaluateOnce = function () {
            return $hs.modules.GHCziEventziPSQ.hs_zdfShowElem.hscall(hs_zddShow26DvbN);
        };
        var hs_sat26DvDd = new $hs.Func(2);
        hs_sat26DvDd.evaluate = function (hs_ds26Dvc1, hs_ds126DvbT) {
            var hs_wild26DvDf = hs_ds126DvbT;
            if (hs_ds126DvbT.notEvaluated) {
                hs_wild26DvDf = hs_ds126DvbT.hscall();
            }
            switch (hs_wild26DvDf.tag) {
            case 1:
                var hs_sat26DvDZ = new $hs.Thunk();
                hs_sat26DvDZ.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Start\x00");
                };
                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DvDZ);
            case 2:
                var hs_b126Dvc7 = hs_wild26DvDf.data[0];
                var hs_b226Dvca = hs_wild26DvDf.data[1];
                var hs_b326Dvcd = hs_wild26DvDf.data[2];
                var hs_b426Dvcg = hs_wild26DvDf.data[3];
                var hs_b526Dvcj = hs_wild26DvDf.data[4];
                var hs_sat26DvDg = new $hs.Thunk();
                hs_sat26DvDg.evaluateOnce = function () {
                    var hs_sat26DvDj = new $hs.Thunk();
                    hs_sat26DvDj.evaluateOnce = function () {
                        var hs_sat26DvDm = new $hs.Thunk();
                        hs_sat26DvDm.evaluateOnce = function () {
                            var hs_sat26DvDo = new $hs.Thunk();
                            hs_sat26DvDo.evaluateOnce = function () {
                                var hs_sat26DvDq = new $hs.Thunk();
                                hs_sat26DvDq.evaluateOnce = function () {
                                    var hs_sat26DvDs = new $hs.Thunk();
                                    hs_sat26DvDs.evaluateOnce = function () {
                                        var hs_sat26DvDu = new $hs.Thunk();
                                        hs_sat26DvDu.evaluateOnce = function () {
                                            var hs_sat26DvDw = new $hs.Thunk();
                                            hs_sat26DvDw.evaluateOnce = function () {
                                                var hs_sat26DvDy = new $hs.Thunk();
                                                hs_sat26DvDy.evaluateOnce = function () {
                                                    var hs_sat26DvDA = new $hs.Thunk();
                                                    hs_sat26DvDA.evaluateOnce = function () {
                                                        var hs_sat26DvDB = new $hs.Data(1);
                                                        hs_sat26DvDB.data = [11];
                                                        return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126DvbO, hs_sat26DvDB, hs_b526Dvcj);
                                                    };
                                                    return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.GHCziShow.hs_showSpace, hs_sat26DvDA);
                                                };
                                                var hs_sat26DvDx = new $hs.Thunk();
                                                hs_sat26DvDx.evaluateOnce = function () {
                                                    var hs_sat26DvDz = new $hs.Data(1);
                                                    hs_sat26DvDz.data = [11];
                                                    return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziEventziUnique.hs_zdfShowUnique, hs_sat26DvDz, hs_b426Dvcg);
                                                };
                                                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DvDx, hs_sat26DvDy);
                                            };
                                            return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.GHCziShow.hs_showSpace, hs_sat26DvDw);
                                        };
                                        var hs_sat26DvDt = new $hs.Thunk();
                                        hs_sat26DvDt.evaluateOnce = function () {
                                            var hs_sat26DvDv = new $hs.Data(1);
                                            hs_sat26DvDv.data = [11];
                                            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126DvbO, hs_sat26DvDv, hs_b326Dvcd);
                                        };
                                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DvDt, hs_sat26DvDu);
                                    };
                                    return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.GHCziShow.hs_showSpace, hs_sat26DvDs);
                                };
                                var hs_sat26DvDp = new $hs.Thunk();
                                hs_sat26DvDp.evaluateOnce = function () {
                                    var hs_sat26DvDr = new $hs.Data(1);
                                    hs_sat26DvDr.data = [11];
                                    return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow226DvbQ, hs_sat26DvDr, hs_b226Dvca);
                                };
                                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DvDp, hs_sat26DvDq);
                            };
                            return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.GHCziShow.hs_showSpace, hs_sat26DvDo);
                        };
                        var hs_sat26DvDl = new $hs.Thunk();
                        hs_sat26DvDl.evaluateOnce = function () {
                            var hs_sat26DvDn = new $hs.Data(1);
                            hs_sat26DvDn.data = [11];
                            return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_sat26DvDn, hs_b126Dvc7);
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DvDl, hs_sat26DvDm);
                    };
                    var hs_sat26DvDi = new $hs.Thunk();
                    hs_sat26DvDi.evaluateOnce = function () {
                        var hs_sat26DvDk = new $hs.Thunk();
                        hs_sat26DvDk.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("LLoser \x00");
                        };
                        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DvDk);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DvDi, hs_sat26DvDj);
                };
                var hs_sat26DvDe = new $hs.Thunk();
                hs_sat26DvDe.evaluateOnce = function () {
                    var hs_sat26DvDh = new $hs.Data(1);
                    hs_sat26DvDh.data = [11];
                    return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_ds26Dvc1, hs_sat26DvDh);
                };
                return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DvDe, hs_sat26DvDg);
            case 3:
                var hs_b126DvcE = hs_wild26DvDf.data[0];
                var hs_b226DvcH = hs_wild26DvDf.data[1];
                var hs_b326DvcK = hs_wild26DvDf.data[2];
                var hs_b426DvcN = hs_wild26DvDf.data[3];
                var hs_b526DvcQ = hs_wild26DvDf.data[4];
                var hs_sat26DvDD = new $hs.Thunk();
                hs_sat26DvDD.evaluateOnce = function () {
                    var hs_sat26DvDG = new $hs.Thunk();
                    hs_sat26DvDG.evaluateOnce = function () {
                        var hs_sat26DvDJ = new $hs.Thunk();
                        hs_sat26DvDJ.evaluateOnce = function () {
                            var hs_sat26DvDL = new $hs.Thunk();
                            hs_sat26DvDL.evaluateOnce = function () {
                                var hs_sat26DvDN = new $hs.Thunk();
                                hs_sat26DvDN.evaluateOnce = function () {
                                    var hs_sat26DvDP = new $hs.Thunk();
                                    hs_sat26DvDP.evaluateOnce = function () {
                                        var hs_sat26DvDR = new $hs.Thunk();
                                        hs_sat26DvDR.evaluateOnce = function () {
                                            var hs_sat26DvDT = new $hs.Thunk();
                                            hs_sat26DvDT.evaluateOnce = function () {
                                                var hs_sat26DvDV = new $hs.Thunk();
                                                hs_sat26DvDV.evaluateOnce = function () {
                                                    var hs_sat26DvDX = new $hs.Thunk();
                                                    hs_sat26DvDX.evaluateOnce = function () {
                                                        var hs_sat26DvDY = new $hs.Data(1);
                                                        hs_sat26DvDY.data = [11];
                                                        return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126DvbO, hs_sat26DvDY, hs_b526DvcQ);
                                                    };
                                                    return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.GHCziShow.hs_showSpace, hs_sat26DvDX);
                                                };
                                                var hs_sat26DvDU = new $hs.Thunk();
                                                hs_sat26DvDU.evaluateOnce = function () {
                                                    var hs_sat26DvDW = new $hs.Data(1);
                                                    hs_sat26DvDW.data = [11];
                                                    return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziEventziUnique.hs_zdfShowUnique, hs_sat26DvDW, hs_b426DvcN);
                                                };
                                                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DvDU, hs_sat26DvDV);
                                            };
                                            return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.GHCziShow.hs_showSpace, hs_sat26DvDT);
                                        };
                                        var hs_sat26DvDQ = new $hs.Thunk();
                                        hs_sat26DvDQ.evaluateOnce = function () {
                                            var hs_sat26DvDS = new $hs.Data(1);
                                            hs_sat26DvDS.data = [11];
                                            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126DvbO, hs_sat26DvDS, hs_b326DvcK);
                                        };
                                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DvDQ, hs_sat26DvDR);
                                    };
                                    return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.GHCziShow.hs_showSpace, hs_sat26DvDP);
                                };
                                var hs_sat26DvDM = new $hs.Thunk();
                                hs_sat26DvDM.evaluateOnce = function () {
                                    var hs_sat26DvDO = new $hs.Data(1);
                                    hs_sat26DvDO.data = [11];
                                    return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow226DvbQ, hs_sat26DvDO, hs_b226DvcH);
                                };
                                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DvDM, hs_sat26DvDN);
                            };
                            return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.GHCziShow.hs_showSpace, hs_sat26DvDL);
                        };
                        var hs_sat26DvDI = new $hs.Thunk();
                        hs_sat26DvDI.evaluateOnce = function () {
                            var hs_sat26DvDK = new $hs.Data(1);
                            hs_sat26DvDK.data = [11];
                            return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_sat26DvDK, hs_b126DvcE);
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DvDI, hs_sat26DvDJ);
                    };
                    var hs_sat26DvDF = new $hs.Thunk();
                    hs_sat26DvDF.evaluateOnce = function () {
                        var hs_sat26DvDH = new $hs.Thunk();
                        hs_sat26DvDH.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("RLoser \x00");
                        };
                        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DvDH);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DvDF, hs_sat26DvDG);
                };
                var hs_sat26DvDC = new $hs.Thunk();
                hs_sat26DvDC.evaluateOnce = function () {
                    var hs_sat26DvDE = new $hs.Data(1);
                    hs_sat26DvDE.data = [11];
                    return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_ds26Dvc1, hs_sat26DvDE);
                };
                return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DvDC, hs_sat26DvDD);
            }
        };
        if (hs_sat26DvDd.notEvaluated) {
            return hs_sat26DvDd.hscall();
        } else {
            return hs_sat26DvDd;
        }
    };
    hs_zdcshowsPrec325v6GM.evaluate = function (hs_zddShow26Dvd5) {
        var hs_zddShow126Dvd6 = new $hs.Thunk();
        hs_zddShow126Dvd6.evaluateOnce = function () {
            return $hs.modules.GHCziEventziPSQ.hs_zdfShowLTree.hscall(hs_zddShow26Dvd5);
        };
        var hs_zddShow226Dvd8 = new $hs.Thunk();
        hs_zddShow226Dvd8.evaluateOnce = function () {
            return $hs.modules.GHCziEventziPSQ.hs_zdfShowElem.hscall(hs_zddShow26Dvd5);
        };
        var hs_sat26DvE0 = new $hs.Func(2);
        hs_sat26DvE0.evaluate = function (hs_ds26Dvdh, hs_ds126Dvdb) {
            var hs_wild26DvE2 = hs_ds126Dvdb;
            if (hs_ds126Dvdb.notEvaluated) {
                hs_wild26DvE2 = hs_ds126Dvdb.hscall();
            }
            switch (hs_wild26DvE2.tag) {
            case 1:
                var hs_sat26DvEh = new $hs.Thunk();
                hs_sat26DvEh.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Void\x00");
                };
                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DvEh);
            case 2:
                var hs_b126Dvdn = hs_wild26DvE2.data[0];
                var hs_b226Dvdq = hs_wild26DvE2.data[1];
                var hs_b326Dvdt = hs_wild26DvE2.data[2];
                var hs_sat26DvE3 = new $hs.Thunk();
                hs_sat26DvE3.evaluateOnce = function () {
                    var hs_sat26DvE6 = new $hs.Thunk();
                    hs_sat26DvE6.evaluateOnce = function () {
                        var hs_sat26DvE9 = new $hs.Thunk();
                        hs_sat26DvE9.evaluateOnce = function () {
                            var hs_sat26DvEb = new $hs.Thunk();
                            hs_sat26DvEb.evaluateOnce = function () {
                                var hs_sat26DvEd = new $hs.Thunk();
                                hs_sat26DvEd.evaluateOnce = function () {
                                    var hs_sat26DvEf = new $hs.Thunk();
                                    hs_sat26DvEf.evaluateOnce = function () {
                                        var hs_sat26DvEg = new $hs.Data(1);
                                        hs_sat26DvEg.data = [11];
                                        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziEventziUnique.hs_zdfShowUnique, hs_sat26DvEg, hs_b326Dvdt);
                                    };
                                    return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.GHCziShow.hs_showSpace, hs_sat26DvEf);
                                };
                                var hs_sat26DvEc = new $hs.Thunk();
                                hs_sat26DvEc.evaluateOnce = function () {
                                    var hs_sat26DvEe = new $hs.Data(1);
                                    hs_sat26DvEe.data = [11];
                                    return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126Dvd6, hs_sat26DvEe, hs_b226Dvdq);
                                };
                                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DvEc, hs_sat26DvEd);
                            };
                            return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.GHCziShow.hs_showSpace, hs_sat26DvEb);
                        };
                        var hs_sat26DvE8 = new $hs.Thunk();
                        hs_sat26DvE8.evaluateOnce = function () {
                            var hs_sat26DvEa = new $hs.Data(1);
                            hs_sat26DvEa.data = [11];
                            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow226Dvd8, hs_sat26DvEa, hs_b126Dvdn);
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DvE8, hs_sat26DvE9);
                    };
                    var hs_sat26DvE5 = new $hs.Thunk();
                    hs_sat26DvE5.evaluateOnce = function () {
                        var hs_sat26DvE7 = new $hs.Thunk();
                        hs_sat26DvE7.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Winner \x00");
                        };
                        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DvE7);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DvE5, hs_sat26DvE6);
                };
                var hs_sat26DvE1 = new $hs.Thunk();
                hs_sat26DvE1.evaluateOnce = function () {
                    var hs_sat26DvE4 = new $hs.Data(1);
                    hs_sat26DvE4.data = [11];
                    return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_ds26Dvdh, hs_sat26DvE4);
                };
                return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DvE1, hs_sat26DvE3);
            }
        };
        if (hs_sat26DvE0.notEvaluated) {
            return hs_sat26DvE0.hscall();
        } else {
            return hs_sat26DvE0;
        }
    };
    this.hs_zdfShowPSQ.evaluate = function (hs_zddShow26DvdE) {
        var hs_sat26DvEj = new $hs.Thunk();
        hs_sat26DvEj.evaluateOnce = function () {
            return hs_zdcshowList325v6Hl.hscall(hs_zddShow26DvdE);
        };
        var hs_sat26DvEk = new $hs.Thunk();
        hs_sat26DvEk.evaluateOnce = function () {
            return hs_zdcshow325v6Hm.hscall(hs_zddShow26DvdE);
        };
        var hs_sat26DvEi = new $hs.Thunk();
        hs_sat26DvEi.evaluateOnce = function () {
            return hs_zdcshowsPrec325v6GM.hscall(hs_zddShow26DvdE);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DvEi, hs_sat26DvEk, hs_sat26DvEj];
        return $res;
    };
    hs_zdcshowList325v6Hl.evaluate = function (hs_zddShow26DvdJ) {
        var hs_sat26DvEl = new $hs.Thunk();
        hs_sat26DvEl.evaluateOnce = function () {
            var hs_sat26DvEm = new $hs.Data(1);
            hs_sat26DvEm.data = [0];
            var hs_sat26DvEn = $hs.modules.GHCziEventziPSQ.hs_zdfShowPSQ.hscall(hs_zddShow26DvdJ);
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_sat26DvEn, hs_sat26DvEm);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DvEl);
    };
    hs_zdcshow325v6Hm.evaluate = function (hs_zddShow26DvdO) {
        var hs_sat26DvEo = new $hs.Thunk();
        hs_sat26DvEo.evaluateOnce = function () {
            return $hs.modules.GHCziEventziPSQ.hs_zdfShowPSQ.hscall(hs_zddShow26DvdO);
        };
        return $hs.modules.GHCziShow.hs_zddmshow.hscall(hs_sat26DvEo);
    };
    hs_zdczeze25v6HA.evaluate = function (hs_zddEq26Dveb, hs_ds26DvdU, hs_ds126DvdZ) {
        var hs_wild26DvEr = hs_ds26DvdU;
        if (hs_ds26DvdU.notEvaluated) {
            hs_wild26DvEr = hs_ds26DvdU.hscall();
        }
        var hs_a326Dve4 = hs_wild26DvEr.data[0];
        var hs_a426Dve7 = hs_wild26DvEr.data[1];
        var hs_a526Dvec = hs_wild26DvEr.data[2];
        var hs_wild126DvEq = hs_ds126DvdZ;
        if (hs_ds126DvdZ.notEvaluated) {
            hs_wild126DvEq = hs_ds126DvdZ.hscall();
        }
        var hs_b126Dve5 = hs_wild126DvEq.data[0];
        var hs_b226Dve8 = hs_wild126DvEq.data[1];
        var hs_b326Dved = hs_wild126DvEq.data[2];
        var hs_sat26DvEs = new $hs.Thunk();
        hs_sat26DvEs.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26Dveb, hs_a526Dvec, hs_b326Dved);
        };
        var hs_sat26DvEp = new $hs.Thunk();
        hs_sat26DvEp.evaluateOnce = function () {
            var hs_sat26DvEu = new $hs.Thunk();
            hs_sat26DvEu.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqDouble, hs_a426Dve7, hs_b226Dve8);
            };
            var hs_sat26DvEt = new $hs.Thunk();
            hs_sat26DvEt.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziEventziUnique.hs_zdfEqUnique, hs_a326Dve4, hs_b126Dve5);
            };
            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DvEt, hs_sat26DvEu);
        };
        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DvEp, hs_sat26DvEs);
    };
    this.hs_zdfEqElem.evaluate = function (hs_zddEq26Dveh) {
        var hs_sat26DvEw = new $hs.Thunk();
        hs_sat26DvEw.evaluateOnce = function () {
            return hs_zdczsze25v6HZ.hscall(hs_zddEq26Dveh);
        };
        var hs_sat26DvEv = new $hs.Func(2);
        hs_sat26DvEv.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczeze25v6HA.hscall(hs_zddEq26Dveh, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DvEv, hs_sat26DvEw];
        return $res;
    };
    hs_zdczsze25v6HZ.evaluate = function (hs_zddEq26Dvem) {
        var hs_zddEq126Dven = new $hs.Thunk();
        hs_zddEq126Dven.evaluateOnce = function () {
            return $hs.modules.GHCziEventziPSQ.hs_zdfEqElem.hscall(hs_zddEq26Dvem);
        };
        var hs_sat26DvEx = new $hs.Func(2);
        hs_sat26DvEx.evaluate = function (hs_a326Dveq, hs_b26Dver) {
            var hs_sat26DvEy = new $hs.Thunk();
            hs_sat26DvEy.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq126Dven, hs_a326Dveq, hs_b26Dver);
            };
            return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DvEy);
        };
        if (hs_sat26DvEx.notEvaluated) {
            return hs_sat26DvEx.hscall();
        } else {
            return hs_sat26DvEx;
        }
    };
    this.hs_zdfEqLTree.evaluate = function (hs_zddEq26Dvex) {
        var hs_sat26DvEA = new $hs.Thunk();
        hs_sat26DvEA.evaluateOnce = function () {
            return hs_zdczsze125v6Ie.hscall(hs_zddEq26Dvex);
        };
        var hs_sat26DvEz = new $hs.Thunk();
        hs_sat26DvEz.evaluateOnce = function () {
            return hs_zdczeze125v6If.hscall(hs_zddEq26Dvex);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DvEz, hs_sat26DvEA];
        return $res;
    };
    hs_zdczsze125v6Ie.evaluate = function (hs_zddEq26DveC) {
        var hs_zddEq126DveD = new $hs.Thunk();
        hs_zddEq126DveD.evaluateOnce = function () {
            return $hs.modules.GHCziEventziPSQ.hs_zdfEqLTree.hscall(hs_zddEq26DveC);
        };
        var hs_sat26DvEB = new $hs.Func(2);
        hs_sat26DvEB.evaluate = function (hs_a326DveG, hs_b26DveH) {
            var hs_sat26DvEC = new $hs.Thunk();
            hs_sat26DvEC.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq126DveD, hs_a326DveG, hs_b26DveH);
            };
            return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DvEC);
        };
        if (hs_sat26DvEB.notEvaluated) {
            return hs_sat26DvEB.hscall();
        } else {
            return hs_sat26DvEB;
        }
    };
    hs_zdczeze125v6If.evaluate = function (hs_zddEq26DveM) {
        var hs_zddEq126DveN = new $hs.Thunk();
        hs_zddEq126DveN.evaluateOnce = function () {
            return $hs.modules.GHCziEventziPSQ.hs_zdfEqLTree.hscall(hs_zddEq26DveM);
        };
        var hs_zddEq226DveP = new $hs.Thunk();
        hs_zddEq226DveP.evaluateOnce = function () {
            return $hs.modules.GHCziEventziPSQ.hs_zdfEqElem.hscall(hs_zddEq26DveM);
        };
        var hs_sat26DvED = new $hs.Func(2);
        hs_sat26DvED.evaluate = function (hs_ds26DveU, hs_ds126DveW) {
            var hs_fail26DvfF = new $hs.Func(1);
            hs_fail26DvfF.evaluate = function (hs_ds226DvfE) {
                var hs_wild26DvgD = hs_ds26DveU;
                if (hs_ds26DveU.notEvaluated) {
                    hs_wild26DvgD = hs_ds26DveU.hscall();
                }
                switch (hs_wild26DvgD.tag) {
                case 1:
                    var hs_wild126DvgE = hs_ds126DveW;
                    if (hs_ds126DveW.notEvaluated) {
                        hs_wild126DvgE = hs_ds126DveW.hscall();
                    }
                    switch (hs_wild126DvgE.tag) {
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
                    var hs_wild126DvgU = hs_ds126DveW;
                    if (hs_ds126DveW.notEvaluated) {
                        hs_wild126DvgU = hs_ds126DveW.hscall();
                    }
                    switch (hs_wild126DvgU.tag) {
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
                    var hs_wild126Dvha = hs_ds126DveW;
                    if (hs_ds126DveW.notEvaluated) {
                        hs_wild126Dvha = hs_ds126DveW.hscall();
                    }
                    switch (hs_wild126Dvha.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 3:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    }
                }
            };
            var hs_wild26DvEG = hs_ds26DveU;
            if (hs_ds26DveU.notEvaluated) {
                hs_wild26DvEG = hs_ds26DveU.hscall();
            }
            switch (hs_wild26DvEG.tag) {
            case 1:
                return hs_fail26DvfF.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            case 2:
                var hs_a326DvfS = hs_wild26DvEG.data[0];
                var hs_a426DvfV = hs_wild26DvEG.data[1];
                var hs_a526DvfZ = hs_wild26DvEG.data[2];
                var hs_a626Dvg3 = hs_wild26DvEG.data[3];
                var hs_a726Dvg7 = hs_wild26DvEG.data[4];
                var hs_wild126DvEF = hs_ds126DveW;
                if (hs_ds126DveW.notEvaluated) {
                    hs_wild126DvEF = hs_ds126DveW.hscall();
                }
                switch (hs_wild126DvEF.tag) {
                case 2:
                    var hs_b126DvfT = hs_wild126DvEF.data[0];
                    var hs_b226DvfW = hs_wild126DvEF.data[1];
                    var hs_b326Dvg0 = hs_wild126DvEF.data[2];
                    var hs_b426Dvg4 = hs_wild126DvEF.data[3];
                    var hs_b526Dvg8 = hs_wild126DvEF.data[4];
                    var hs_sat26DvEH = new $hs.Thunk();
                    hs_sat26DvEH.evaluateOnce = function () {
                        return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq126DveN, hs_a726Dvg7, hs_b526Dvg8);
                    };
                    var hs_sat26DvEE = new $hs.Thunk();
                    hs_sat26DvEE.evaluateOnce = function () {
                        var hs_sat26DvEJ = new $hs.Thunk();
                        hs_sat26DvEJ.evaluateOnce = function () {
                            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziEventziUnique.hs_zdfEqUnique, hs_a626Dvg3, hs_b426Dvg4);
                        };
                        var hs_sat26DvEI = new $hs.Thunk();
                        hs_sat26DvEI.evaluateOnce = function () {
                            var hs_sat26DvEL = new $hs.Thunk();
                            hs_sat26DvEL.evaluateOnce = function () {
                                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq126DveN, hs_a526DvfZ, hs_b326Dvg0);
                            };
                            var hs_sat26DvEK = new $hs.Thunk();
                            hs_sat26DvEK.evaluateOnce = function () {
                                var hs_sat26DvEN = new $hs.Thunk();
                                hs_sat26DvEN.evaluateOnce = function () {
                                    return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq226DveP, hs_a426DvfV, hs_b226DvfW);
                                };
                                var hs_sat26DvEM = new $hs.Thunk();
                                hs_sat26DvEM.evaluateOnce = function () {
                                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_a326DvfS, hs_b126DvfT);
                                };
                                return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DvEM, hs_sat26DvEN);
                            };
                            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DvEK, hs_sat26DvEL);
                        };
                        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DvEI, hs_sat26DvEJ);
                    };
                    return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DvEE, hs_sat26DvEH);
                default:
                    return hs_fail26DvfF.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                }
            case 3:
                var hs_a326Dvgl = hs_wild26DvEG.data[0];
                var hs_a426Dvgo = hs_wild26DvEG.data[1];
                var hs_a526Dvgs = hs_wild26DvEG.data[2];
                var hs_a626Dvgw = hs_wild26DvEG.data[3];
                var hs_a726DvgA = hs_wild26DvEG.data[4];
                var hs_wild126DvEP = hs_ds126DveW;
                if (hs_ds126DveW.notEvaluated) {
                    hs_wild126DvEP = hs_ds126DveW.hscall();
                }
                switch (hs_wild126DvEP.tag) {
                case 3:
                    var hs_b126Dvgm = hs_wild126DvEP.data[0];
                    var hs_b226Dvgp = hs_wild126DvEP.data[1];
                    var hs_b326Dvgt = hs_wild126DvEP.data[2];
                    var hs_b426Dvgx = hs_wild126DvEP.data[3];
                    var hs_b526DvgB = hs_wild126DvEP.data[4];
                    var hs_sat26DvEQ = new $hs.Thunk();
                    hs_sat26DvEQ.evaluateOnce = function () {
                        return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq126DveN, hs_a726DvgA, hs_b526DvgB);
                    };
                    var hs_sat26DvEO = new $hs.Thunk();
                    hs_sat26DvEO.evaluateOnce = function () {
                        var hs_sat26DvES = new $hs.Thunk();
                        hs_sat26DvES.evaluateOnce = function () {
                            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziEventziUnique.hs_zdfEqUnique, hs_a626Dvgw, hs_b426Dvgx);
                        };
                        var hs_sat26DvER = new $hs.Thunk();
                        hs_sat26DvER.evaluateOnce = function () {
                            var hs_sat26DvEU = new $hs.Thunk();
                            hs_sat26DvEU.evaluateOnce = function () {
                                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq126DveN, hs_a526Dvgs, hs_b326Dvgt);
                            };
                            var hs_sat26DvET = new $hs.Thunk();
                            hs_sat26DvET.evaluateOnce = function () {
                                var hs_sat26DvEW = new $hs.Thunk();
                                hs_sat26DvEW.evaluateOnce = function () {
                                    return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq226DveP, hs_a426Dvgo, hs_b226Dvgp);
                                };
                                var hs_sat26DvEV = new $hs.Thunk();
                                hs_sat26DvEV.evaluateOnce = function () {
                                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_a326Dvgl, hs_b126Dvgm);
                                };
                                return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DvEV, hs_sat26DvEW);
                            };
                            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DvET, hs_sat26DvEU);
                        };
                        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DvER, hs_sat26DvES);
                    };
                    return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DvEO, hs_sat26DvEQ);
                default:
                    return hs_fail26DvfF.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                }
            }
        };
        if (hs_sat26DvED.notEvaluated) {
            return hs_sat26DvED.hscall();
        } else {
            return hs_sat26DvED;
        }
    };
    hs_zdczeze225v6L6.evaluate = function (hs_zddEq26Dvhp) {
        var hs_zddEq126Dvhq = new $hs.Thunk();
        hs_zddEq126Dvhq.evaluateOnce = function () {
            return $hs.modules.GHCziEventziPSQ.hs_zdfEqLTree.hscall(hs_zddEq26Dvhp);
        };
        var hs_zddEq226Dvhs = new $hs.Thunk();
        hs_zddEq226Dvhs.evaluateOnce = function () {
            return $hs.modules.GHCziEventziPSQ.hs_zdfEqElem.hscall(hs_zddEq26Dvhp);
        };
        var hs_sat26DvEX = new $hs.Func(2);
        hs_sat26DvEX.evaluate = function (hs_ds26Dvhv, hs_ds126Dvhx) {
            var hs_wild26DvhG = hs_ds26Dvhv;
            if (hs_ds26Dvhv.notEvaluated) {
                hs_wild26DvhG = hs_ds26Dvhv.hscall();
            }
            switch (hs_wild26DvhG.tag) {
            case 1:
                var hs_wild126DvFa = hs_ds126Dvhx;
                if (hs_ds126Dvhx.notEvaluated) {
                    hs_wild126DvFa = hs_ds126Dvhx.hscall();
                }
                switch (hs_wild126DvFa.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            case 2:
                var hs_a326DvhO = hs_wild26DvhG.data[0];
                var hs_a426DvhR = hs_wild26DvhG.data[1];
                var hs_a526DvhV = hs_wild26DvhG.data[2];
                var hs_wild126DvEZ = hs_ds126Dvhx;
                if (hs_ds126Dvhx.notEvaluated) {
                    hs_wild126DvEZ = hs_ds126Dvhx.hscall();
                }
                switch (hs_wild126DvEZ.tag) {
                case 1:
                    var hs_wild226DvF6 = hs_wild26DvhG;
                    if (hs_wild26DvhG.notEvaluated) {
                        hs_wild226DvF6 = hs_wild26DvhG.hscall();
                    }
                    switch (hs_wild226DvF6.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    }
                case 2:
                    var hs_b126DvhP = hs_wild126DvEZ.data[0];
                    var hs_b226DvhS = hs_wild126DvEZ.data[1];
                    var hs_b326DvhW = hs_wild126DvEZ.data[2];
                    var hs_sat26DvF0 = new $hs.Thunk();
                    hs_sat26DvF0.evaluateOnce = function () {
                        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziEventziUnique.hs_zdfEqUnique, hs_a526DvhV, hs_b326DvhW);
                    };
                    var hs_sat26DvEY = new $hs.Thunk();
                    hs_sat26DvEY.evaluateOnce = function () {
                        var hs_sat26DvF2 = new $hs.Thunk();
                        hs_sat26DvF2.evaluateOnce = function () {
                            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq126Dvhq, hs_a426DvhR, hs_b226DvhS);
                        };
                        var hs_sat26DvF1 = new $hs.Thunk();
                        hs_sat26DvF1.evaluateOnce = function () {
                            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq226Dvhs, hs_a326DvhO, hs_b126DvhP);
                        };
                        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DvF1, hs_sat26DvF2);
                    };
                    return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DvEY, hs_sat26DvF0);
                }
            }
        };
        if (hs_sat26DvEX.notEvaluated) {
            return hs_sat26DvEX.hscall();
        } else {
            return hs_sat26DvEX;
        }
    };
    this.hs_zdfEqPSQ.evaluate = function (hs_zddEq26Dvi1) {
        var hs_sat26DvFc = new $hs.Thunk();
        hs_sat26DvFc.evaluateOnce = function () {
            return hs_zdczsze225v6LJ.hscall(hs_zddEq26Dvi1);
        };
        var hs_sat26DvFb = new $hs.Thunk();
        hs_sat26DvFb.evaluateOnce = function () {
            return hs_zdczeze225v6L6.hscall(hs_zddEq26Dvi1);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DvFb, hs_sat26DvFc];
        return $res;
    };
    hs_zdczsze225v6LJ.evaluate = function (hs_zddEq26Dvi6) {
        var hs_zddEq126Dvi7 = new $hs.Thunk();
        hs_zddEq126Dvi7.evaluateOnce = function () {
            return $hs.modules.GHCziEventziPSQ.hs_zdfEqPSQ.hscall(hs_zddEq26Dvi6);
        };
        var hs_sat26DvFd = new $hs.Func(2);
        hs_sat26DvFd.evaluate = function (hs_a326Dvia, hs_b26Dvib) {
            var hs_sat26DvFe = new $hs.Thunk();
            hs_sat26DvFe.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq126Dvi7, hs_a326Dvia, hs_b26Dvib);
            };
            return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DvFe);
        };
        if (hs_sat26DvFd.notEvaluated) {
            return hs_sat26DvFd.hscall();
        } else {
            return hs_sat26DvFd;
        }
    };
    this.hs_Sequ.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.GHCziEventziPSQ.hs_Sequ.hscall(hs_eta1cW6l3);
    };
    this.hs_Null.data = [];
    this.hs_Single.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(2);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
    this.hs_Play.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(3);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_Start.data = [];
    this.hs_LLoser.evaluate = function (hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(2);
        $res.data = [hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_RLoser.evaluate = function (hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(3);
        $res.data = [hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_Void.data = [];
    this.hs_Winner.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(2);
        $res.data = [hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_E.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};

$hs.modules.GHCziList = new $hs.Module();
$hs.modules.GHCziList.dependencies = ["GHC.Prim", "GHC.Types", "GHC.CString", "GHC.Base", "GHC.Err", "GHC.Classes", "Control.Exception.Base"];
$hs.modules.GHCziList.initBeforeDependencies = function () {
    this.hs_errorEmptyList = new $hs.Func(1);
    this.hs_unzzip3 = new $hs.Thunk();
    this.hs_unzzip = new $hs.Thunk();
    this.hs_zzipWith3 = new $hs.Func(4);
    this.hs_zzip3 = new $hs.Func(3);
    this.hs_znzn = new $hs.Func(2);
    this.hs_concatMap = new $hs.Func(1);
    this.hs_lookup = new $hs.Func(3);
    this.hs_notElem = new $hs.Func(3);
    this.hs_elem = new $hs.Func(3);
    this.hs_all = new $hs.Func(2);
    this.hs_any = new $hs.Func(2);
    this.hs_or = new $hs.Func(1);
    this.hs_and = new $hs.Func(1);
    this.hs_reverse = new $hs.Func(1);
    this.hs_break = new $hs.Func(2);
    this.hs_span = new $hs.Func(2);
    this.hs_splitAt = new $hs.Func(2);
    this.hs_drop = new $hs.Func(2);
    this.hs_takeUIntzuappend = new $hs.Func(3);
    this.hs_takeUInt = new $hs.Func(2);
    this.hs_take = new $hs.Func(2);
    this.hs_dropWhile = new $hs.Func(2);
    this.hs_takeWhile = new $hs.Func(2);
    this.hs_cycle = new $hs.Func(1);
    this.hs_repeat = new $hs.Func(1);
    this.hs_replicate = new $hs.Func(2);
    this.hs_iterate = new $hs.Func(2);
    this.hs_scanr1 = new $hs.Func(2);
    this.hs_scanr = new $hs.Func(3);
    this.hs_foldr1 = new $hs.Func(2);
    this.hs_scanl = new $hs.Func(3);
    this.hs_scanl1 = new $hs.Func(2);
    this.hs_foldl = new $hs.Func(3);
    this.hs_length = new $hs.Func(1);
    this.hs_null = new $hs.Func(1);
    this.hs_init = new $hs.Func(1);
    this.hs_last = new $hs.Func(1);
    this.hs_tail = new $hs.Func(1);
    this.hs_head = new $hs.Func(1);
    this.hs_zzipWith = new $hs.Func(3);
    this.hs_zzip = new $hs.Func(2);
    this.hs_filter = new $hs.Func(2);
    this.hs_concat = new $hs.Thunk();
    this.hs_errorEmptyList.notEvaluated = true;
    this.hs_errorEmptyList.evaluate = function (hs_fun26DbrY) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_fun26DbrY);
    };
    this.hs_unzzip3.evaluateOnce = function () {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_unzzip.evaluateOnce = function () {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zzipWith3.notEvaluated = true;
    this.hs_zzipWith3.evaluate = function (hs_zz26Dbtg, hs_ds26Dbt1, hs_ds126Dbt5, hs_ds226Dbt9) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_zz26Dbtg, hs_ds26Dbt1, hs_ds126Dbt5, hs_ds226Dbt9);
    };
    this.hs_zzip3.notEvaluated = true;
    this.hs_zzip3.evaluate = function (hs_ds26DbtA, hs_ds126DbtE, hs_ds226DbtI) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_ds26DbtA, hs_ds126DbtE, hs_ds226DbtI);
    };
    this.hs_znzn.notEvaluated = true;
    this.hs_znzn.evaluate = function (hs_xs26DbuV, hs_ds26DbuB) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_xs26DbuV, hs_ds26DbuB);
    };
    this.hs_concatMap.notEvaluated = true;
    this.hs_concatMap.evaluate = function (hs_f26DbuY) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_f26DbuY);
    };
    this.hs_lookup.notEvaluated = true;
    this.hs_lookup.evaluate = function (hs_zddEq26Dbvb, hs_zukey26Dbvc, hs_ds26Dbv3) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_zddEq26Dbvb, hs_zukey26Dbvc, hs_ds26Dbv3);
    };
    this.hs_notElem.notEvaluated = true;
    this.hs_notElem.evaluate = function (hs_zddEq26Dbvo, hs_ds26Dbvp, hs_ds126Dbvk) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_zddEq26Dbvo, hs_ds26Dbvp, hs_ds126Dbvk);
    };
    this.hs_elem.notEvaluated = true;
    this.hs_elem.evaluate = function (hs_zddEq26DbvB, hs_ds26DbvC, hs_ds126Dbvx) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_zddEq26DbvB, hs_ds26DbvC, hs_ds126Dbvx);
    };
    this.hs_all.notEvaluated = true;
    this.hs_all.evaluate = function (hs_ds26DbvO, hs_ds126DbvJ) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_ds26DbvO, hs_ds126DbvJ);
    };
    this.hs_any.notEvaluated = true;
    this.hs_any.evaluate = function (hs_ds26DbvZ, hs_ds126DbvU) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_ds26DbvZ, hs_ds126DbvU);
    };
    this.hs_or.notEvaluated = true;
    this.hs_or.evaluate = function (hs_ds26Dbw4) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_ds26Dbw4);
    };
    this.hs_and.notEvaluated = true;
    this.hs_and.evaluate = function (hs_ds26Dbwc) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_ds26Dbwc);
    };
    this.hs_reverse.notEvaluated = true;
    this.hs_reverse.evaluate = function (hs_l26Dbww) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_l26Dbww);
    };
    this.hs_break.notEvaluated = true;
    this.hs_break.evaluate = function (hs_ds26DbwE, hs_xs26Dbwz) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_ds26DbwE, hs_xs26Dbwz);
    };
    this.hs_span.notEvaluated = true;
    this.hs_span.evaluate = function (hs_ds26Dbx2, hs_xs26DbwX) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_ds26Dbx2, hs_xs26DbwX);
    };
    this.hs_splitAt.notEvaluated = true;
    this.hs_splitAt.evaluate = function (hs_ds26Dbxl, hs_ls26DbxR) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_ds26Dbxl, hs_ls26DbxR);
    };
    this.hs_drop.notEvaluated = true;
    this.hs_drop.evaluate = function (hs_ds26DbxU, hs_ls26Dbyc) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_ds26DbxU, hs_ls26Dbyc);
    };
    this.hs_takeUIntzuappend.notEvaluated = true;
    this.hs_takeUIntzuappend.evaluate = function (hs_n26Dbyv, hs_xs26Dbyx, hs_rs26Dbyy) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_n26Dbyv, hs_xs26Dbyx, hs_rs26Dbyy);
    };
    this.hs_takeUInt.notEvaluated = true;
    this.hs_takeUInt.evaluate = function (hs_n26DbyO, hs_xs26DbyQ) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_n26DbyO, hs_xs26DbyQ);
    };
    this.hs_take.notEvaluated = true;
    this.hs_take.evaluate = function (hs_eta26Dbzr, hs_eta126Dbzv) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_eta26Dbzr, hs_eta126Dbzv);
    };
    this.hs_dropWhile.notEvaluated = true;
    this.hs_dropWhile.evaluate = function (hs_ds26DbzD, hs_ds126Dbzy) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_ds26DbzD, hs_ds126Dbzy);
    };
    this.hs_takeWhile.notEvaluated = true;
    this.hs_takeWhile.evaluate = function (hs_ds26DbzO, hs_ds126DbzJ) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_ds26DbzO, hs_ds126DbzJ);
    };
    this.hs_cycle.notEvaluated = true;
    this.hs_cycle.evaluate = function (hs_ds26DbzT) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_ds26DbzT);
    };
    this.hs_repeat.notEvaluated = true;
    this.hs_repeat.evaluate = function (hs_eta26DbA9) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_eta26DbA9);
    };
    this.hs_replicate.notEvaluated = true;
    this.hs_replicate.evaluate = function (hs_eta26DbAd, hs_eta126DbAi) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_eta26DbAd, hs_eta126DbAi);
    };
    this.hs_iterate.notEvaluated = true;
    this.hs_iterate.evaluate = function (hs_f26DbAv, hs_x26DbAu) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_f26DbAv, hs_x26DbAu);
    };
    this.hs_scanr1.notEvaluated = true;
    this.hs_scanr1.evaluate = function (hs_ds26DbAK, hs_ds126DbAA) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_ds26DbAK, hs_ds126DbAA);
    };
    this.hs_scanr.notEvaluated = true;
    this.hs_scanr.evaluate = function (hs_ds26DbBc, hs_q026DbB8, hs_ds126DbB6) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_ds26DbBc, hs_q026DbB8, hs_ds126DbB6);
    };
    this.hs_foldr1.notEvaluated = true;
    this.hs_foldr1.evaluate = function (hs_ds26DbBI, hs_ds126DbBy) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_ds26DbBI, hs_ds126DbBy);
    };
    this.hs_scanl.notEvaluated = true;
    this.hs_scanl.evaluate = function (hs_f26DbBT, hs_q26DbBO, hs_ls26DbBP) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_f26DbBT, hs_q26DbBO, hs_ls26DbBP);
    };
    this.hs_scanl1.notEvaluated = true;
    this.hs_scanl1.evaluate = function (hs_f26DbC4, hs_ds26DbC0) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_f26DbC4, hs_ds26DbC0);
    };
    this.hs_foldl.notEvaluated = true;
    this.hs_foldl.evaluate = function (hs_f26DbCj, hs_zz026DbCn, hs_xs026DbCo) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_f26DbCj, hs_zz026DbCn, hs_xs026DbCo);
    };
    this.hs_length.notEvaluated = true;
    this.hs_length.evaluate = function (hs_l26DbCK) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_l26DbCK);
    };
    this.hs_null.notEvaluated = true;
    this.hs_null.evaluate = function (hs_ds26DbCM) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_ds26DbCM);
    };
    this.hs_init.notEvaluated = true;
    this.hs_init.evaluate = function (hs_ds26DbCR) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_ds26DbCR);
    };
    this.hs_last.notEvaluated = true;
    this.hs_last.evaluate = function (hs_ds26DbDb) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_ds26DbDb);
    };
    this.hs_tail.notEvaluated = true;
    this.hs_tail.evaluate = function (hs_ds26DbDu) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_ds26DbDu);
    };
    this.hs_head.notEvaluated = true;
    this.hs_head.evaluate = function (hs_ds26DbDC) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_ds26DbDC);
    };
    this.hs_zzipWith.notEvaluated = true;
    this.hs_zzipWith.evaluate = function (hs_f26DbDU, hs_ds26DbDK, hs_ds126DbDO) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_f26DbDU, hs_ds26DbDK, hs_ds126DbDO);
    };
    this.hs_zzip.notEvaluated = true;
    this.hs_zzip.evaluate = function (hs_ds26DbEw, hs_ds126DbEA) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_ds26DbEw, hs_ds126DbEA);
    };
    this.hs_filter.notEvaluated = true;
    this.hs_filter.evaluate = function (hs_zupred26DbER, hs_ds26DbEM) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_zupred26DbER, hs_ds26DbEM);
    };
    this.hs_concat.evaluateOnce = function () {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluateOnce();
    };
};
$hs.modules.GHCziList.initAfterDependencies = function () {
    this.hs_errorEmptyList.notEvaluated = false;
    this.hs_zzipWith3.notEvaluated = false;
    this.hs_zzip3.notEvaluated = false;
    this.hs_znzn.notEvaluated = false;
    this.hs_concatMap.notEvaluated = false;
    this.hs_lookup.notEvaluated = false;
    this.hs_notElem.notEvaluated = false;
    this.hs_elem.notEvaluated = false;
    this.hs_all.notEvaluated = false;
    this.hs_any.notEvaluated = false;
    this.hs_or.notEvaluated = false;
    this.hs_and.notEvaluated = false;
    this.hs_reverse.notEvaluated = false;
    this.hs_break.notEvaluated = false;
    this.hs_span.notEvaluated = false;
    this.hs_splitAt.notEvaluated = false;
    this.hs_drop.notEvaluated = false;
    this.hs_takeUIntzuappend.notEvaluated = false;
    this.hs_takeUInt.notEvaluated = false;
    this.hs_take.notEvaluated = false;
    this.hs_dropWhile.notEvaluated = false;
    this.hs_takeWhile.notEvaluated = false;
    this.hs_cycle.notEvaluated = false;
    this.hs_repeat.notEvaluated = false;
    this.hs_replicate.notEvaluated = false;
    this.hs_iterate.notEvaluated = false;
    this.hs_scanr1.notEvaluated = false;
    this.hs_scanr.notEvaluated = false;
    this.hs_foldr1.notEvaluated = false;
    this.hs_scanl.notEvaluated = false;
    this.hs_scanl1.notEvaluated = false;
    this.hs_foldl.notEvaluated = false;
    this.hs_length.notEvaluated = false;
    this.hs_null.notEvaluated = false;
    this.hs_init.notEvaluated = false;
    this.hs_last.notEvaluated = false;
    this.hs_tail.notEvaluated = false;
    this.hs_head.notEvaluated = false;
    this.hs_zzipWith.notEvaluated = false;
    this.hs_zzip.notEvaluated = false;
    this.hs_filter.notEvaluated = false;
    var hs_prelzulistzustr25roYy = new $hs.Thunk();
    var hs_zzipWithFB25roYt = new $hs.Func(5);
    var hs_zzipFB25roYq = new $hs.Func(4);
    var hs_foldr2zuright25roYp = new $hs.Func(5);
    var hs_foldr2zuleft25roYo = new $hs.Func(5);
    var hs_takezuunsafezuUIntzuappend25roY8 = new $hs.Func(3);
    var hs_takezuunsafezuUInt25roY6 = new $hs.Func(2);
    var hs_takeFB25roY3 = new $hs.Func(5);
    var hs_takeConst25roY2 = new $hs.Func(2);
    var hs_takeFoldr25roY1 = new $hs.Func(2);
    var hs_repeatFB25roXW = new $hs.Func(2);
    var hs_iterateFB25roXU = new $hs.Func(3);
    var hs_filterFB25roXM = new $hs.Func(4);
    var hs_badHead25roXG = new $hs.Thunk();
    var hs_foldr225roYn = new $hs.Func(4);
    hs_prelzulistzustr25roYy.evaluateOnce = function () {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Prelude.\x00");
    };
    this.hs_errorEmptyList.evaluate = function (hs_fun26DbrY) {
        var hs_sat26DbEV = new $hs.Thunk();
        hs_sat26DbEV.evaluateOnce = function () {
            var hs_sat26DbEX = new $hs.Thunk();
            hs_sat26DbEX.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall(": empty list\x00");
            };
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_fun26DbrY, hs_sat26DbEX);
        };
        var hs_sat26DbEW = $hs.modules.GHCziBase.hs_zpzp.hscall(hs_prelzulistzustr25roYy, hs_sat26DbEV);
        return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DbEW);
    };
    this.hs_unzzip3.evaluateOnce = function () {
        var hs_sat26DbEZ = new $hs.Data(1);
        hs_sat26DbEZ.data = [$hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26DbEY = new $hs.Func(2);
        hs_sat26DbEY.evaluate = function (hs_ds26Dbs4, hs_ds126Dbsa) {
            var hs_wild26DbF1 = hs_ds26Dbs4;
            if (hs_ds26Dbs4.notEvaluated) {
                hs_wild26DbF1 = hs_ds26Dbs4.hscall();
            }
            var hs_a26Dbs9 = hs_wild26DbF1.data[0];
            var hs_b26Dbsi = hs_wild26DbF1.data[1];
            var hs_c26Dbsq = hs_wild26DbF1.data[2];
            var hs_sat26DbF2 = new $hs.Thunk();
            hs_sat26DbF2.evaluateOnce = function () {
                var hs_wild126DbFf = hs_ds126Dbsa;
                if (hs_ds126Dbsa.notEvaluated) {
                    hs_wild126DbFf = hs_ds126Dbsa.hscall();
                }
                var hs_cs26Dbsv = hs_wild126DbFf.data[2];
                if (hs_cs26Dbsv.notEvaluated) {
                    return hs_cs26Dbsv.hscall();
                } else {
                    return hs_cs26Dbsv;
                }
            };
            var hs_sat26DbF3 = new $hs.Data(2);
            hs_sat26DbF3.data = [hs_c26Dbsq, hs_sat26DbF2];
            var hs_sat26DbF4 = new $hs.Thunk();
            hs_sat26DbF4.evaluateOnce = function () {
                var hs_wild126DbFc = hs_ds126Dbsa;
                if (hs_ds126Dbsa.notEvaluated) {
                    hs_wild126DbFc = hs_ds126Dbsa.hscall();
                }
                var hs_bs26Dbsn = hs_wild126DbFc.data[1];
                if (hs_bs26Dbsn.notEvaluated) {
                    return hs_bs26Dbsn.hscall();
                } else {
                    return hs_bs26Dbsn;
                }
            };
            var hs_sat26DbF5 = new $hs.Data(2);
            hs_sat26DbF5.data = [hs_b26Dbsi, hs_sat26DbF4];
            var hs_sat26DbF6 = new $hs.Thunk();
            hs_sat26DbF6.evaluateOnce = function () {
                var hs_wild126DbF9 = hs_ds126Dbsa;
                if (hs_ds126Dbsa.notEvaluated) {
                    hs_wild126DbF9 = hs_ds126Dbsa.hscall();
                }
                var hs_as26Dbsf = hs_wild126DbF9.data[0];
                if (hs_as26Dbsf.notEvaluated) {
                    return hs_as26Dbsf.hscall();
                } else {
                    return hs_as26Dbsf;
                }
            };
            var hs_sat26DbF0 = new $hs.Data(2);
            hs_sat26DbF0.data = [hs_a26Dbs9, hs_sat26DbF6];
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DbF0, hs_sat26DbF5, hs_sat26DbF3];
            return $res;
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26DbEY, hs_sat26DbEZ);
    };
    this.hs_unzzip.evaluateOnce = function () {
        var hs_sat26DbFh = new $hs.Data(1);
        hs_sat26DbFh.data = [$hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26DbFg = new $hs.Func(2);
        hs_sat26DbFg.evaluate = function (hs_ds26DbsC, hs_ds126DbsH) {
            var hs_wild26DbFj = hs_ds26DbsC;
            if (hs_ds26DbsC.notEvaluated) {
                hs_wild26DbFj = hs_ds26DbsC.hscall();
            }
            var hs_a26DbsG = hs_wild26DbFj.data[0];
            var hs_b26DbsO = hs_wild26DbFj.data[1];
            var hs_sat26DbFk = new $hs.Thunk();
            hs_sat26DbFk.evaluateOnce = function () {
                var hs_wild126DbFq = hs_ds126DbsH;
                if (hs_ds126DbsH.notEvaluated) {
                    hs_wild126DbFq = hs_ds126DbsH.hscall();
                }
                var hs_bs26DbsS = hs_wild126DbFq.data[1];
                if (hs_bs26DbsS.notEvaluated) {
                    return hs_bs26DbsS.hscall();
                } else {
                    return hs_bs26DbsS;
                }
            };
            var hs_sat26DbFl = new $hs.Data(2);
            hs_sat26DbFl.data = [hs_b26DbsO, hs_sat26DbFk];
            var hs_sat26DbFm = new $hs.Thunk();
            hs_sat26DbFm.evaluateOnce = function () {
                var hs_wild126DbFo = hs_ds126DbsH;
                if (hs_ds126DbsH.notEvaluated) {
                    hs_wild126DbFo = hs_ds126DbsH.hscall();
                }
                var hs_as26DbsL = hs_wild126DbFo.data[0];
                if (hs_as26DbsL.notEvaluated) {
                    return hs_as26DbsL.hscall();
                } else {
                    return hs_as26DbsL;
                }
            };
            var hs_sat26DbFi = new $hs.Data(2);
            hs_sat26DbFi.data = [hs_a26DbsG, hs_sat26DbFm];
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DbFi, hs_sat26DbFl];
            return $res;
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26DbFg, hs_sat26DbFh);
    };
    this.hs_zzipWith3.evaluate = function (hs_zz26Dbtg, hs_ds26Dbt1, hs_ds126Dbt5, hs_ds226Dbt9) {
        var hs_wild26DbFu = hs_ds26Dbt1;
        if (hs_ds26Dbt1.notEvaluated) {
            hs_wild26DbFu = hs_ds26Dbt1.hscall();
        }
        switch (hs_wild26DbFu.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_a26Dbtd = hs_wild26DbFu.data[0];
            var hs_as26Dbti = hs_wild26DbFu.data[1];
            var hs_wild126DbFt = hs_ds126Dbt5;
            if (hs_ds126Dbt5.notEvaluated) {
                hs_wild126DbFt = hs_ds126Dbt5.hscall();
            }
            switch (hs_wild126DbFt.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_b26Dbte = hs_wild126DbFt.data[0];
                var hs_bs26Dbtj = hs_wild126DbFt.data[1];
                var hs_wild226DbFs = hs_ds226Dbt9;
                if (hs_ds226Dbt9.notEvaluated) {
                    hs_wild226DbFs = hs_ds226Dbt9.hscall();
                }
                switch (hs_wild226DbFs.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_c26Dbtf = hs_wild226DbFs.data[0];
                    var hs_cs26Dbtk = hs_wild226DbFs.data[1];
                    var hs_sat26DbFv = new $hs.Thunk();
                    hs_sat26DbFv.evaluateOnce = function () {
                        return $hs.modules.GHCziList.hs_zzipWith3.hscall(hs_zz26Dbtg, hs_as26Dbti, hs_bs26Dbtj, hs_cs26Dbtk);
                    };
                    var hs_sat26DbFr = new $hs.Thunk();
                    hs_sat26DbFr.evaluateOnce = function () {
                        return hs_zz26Dbtg.hscall(hs_a26Dbtd, hs_b26Dbte, hs_c26Dbtf);
                    };
                    var $res = new $hs.Data(2);
                    $res.data = [hs_sat26DbFr, hs_sat26DbFv];
                    return $res;
                }
            }
        }
    };
    hs_zzipWithFB25roYt.evaluate = function (hs_eta26Dbtu, hs_eta126Dbtt, hs_x26Dbtr, hs_y26Dbts, hs_r26Dbtw) {
        var hs_sat26DbFw = new $hs.Thunk();
        hs_sat26DbFw.evaluateOnce = function () {
            return hs_eta126Dbtt.hscall(hs_x26Dbtr, hs_y26Dbts);
        };
        return hs_eta26Dbtu.hscall(hs_sat26DbFw, hs_r26Dbtw);
    };
    this.hs_zzip3.evaluate = function (hs_ds26DbtA, hs_ds126DbtE, hs_ds226DbtI) {
        var hs_wild26DbFA = hs_ds26DbtA;
        if (hs_ds26DbtA.notEvaluated) {
            hs_wild26DbFA = hs_ds26DbtA.hscall();
        }
        switch (hs_wild26DbFA.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_a26DbtM = hs_wild26DbFA.data[0];
            var hs_as26DbtQ = hs_wild26DbFA.data[1];
            var hs_wild126DbFz = hs_ds126DbtE;
            if (hs_ds126DbtE.notEvaluated) {
                hs_wild126DbFz = hs_ds126DbtE.hscall();
            }
            switch (hs_wild126DbFz.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_b26DbtN = hs_wild126DbFz.data[0];
                var hs_bs26DbtR = hs_wild126DbFz.data[1];
                var hs_wild226DbFy = hs_ds226DbtI;
                if (hs_ds226DbtI.notEvaluated) {
                    hs_wild226DbFy = hs_ds226DbtI.hscall();
                }
                switch (hs_wild226DbFy.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_c26DbtO = hs_wild226DbFy.data[0];
                    var hs_cs26DbtS = hs_wild226DbFy.data[1];
                    var hs_sat26DbFB = new $hs.Thunk();
                    hs_sat26DbFB.evaluateOnce = function () {
                        return $hs.modules.GHCziList.hs_zzip3.hscall(hs_as26DbtQ, hs_bs26DbtR, hs_cs26DbtS);
                    };
                    var hs_sat26DbFx = new $hs.Data(1);
                    hs_sat26DbFx.data = [hs_a26DbtM, hs_b26DbtN, hs_c26DbtO];
                    var $res = new $hs.Data(2);
                    $res.data = [hs_sat26DbFx, hs_sat26DbFB];
                    return $res;
                }
            }
        }
    };
    hs_zzipFB25roYq.evaluate = function (hs_eta26Dbu0, hs_x26DbtY, hs_y26DbtZ, hs_r26Dbu2) {
        var hs_sat26DbFC = new $hs.Data(1);
        hs_sat26DbFC.data = [hs_x26DbtY, hs_y26DbtZ];
        return hs_eta26Dbu0.hscall(hs_sat26DbFC, hs_r26Dbu2);
    };
    hs_foldr2zuright25roYp.evaluate = function (hs_zuk26Dbuh, hs_zz26Dbua, hs_zuy26Dbue, hs_zur26Dbug, hs_ds26Dbu8) {
        var hs_wild26DbFE = hs_ds26Dbu8;
        if (hs_ds26Dbu8.notEvaluated) {
            hs_wild26DbFE = hs_ds26Dbu8.hscall();
        }
        switch (hs_wild26DbFE.tag) {
        case 1:
            if (hs_zz26Dbua.notEvaluated) {
                return hs_zz26Dbua.hscall();
            } else {
                return hs_zz26Dbua;
            }
        case 2:
            var hs_x26Dbud = hs_wild26DbFE.data[0];
            var hs_xs26Dbuf = hs_wild26DbFE.data[1];
            var hs_sat26DbFD = new $hs.Thunk();
            hs_sat26DbFD.evaluateOnce = function () {
                return hs_zur26Dbug.hscall(hs_xs26Dbuf);
            };
            return hs_zuk26Dbuh.hscall(hs_x26Dbud, hs_zuy26Dbue, hs_sat26DbFD);
        }
    };
    hs_foldr2zuleft25roYo.evaluate = function (hs_zuk26Dbux, hs_zz26Dbuq, hs_zux26Dbut, hs_zur26Dbuw, hs_ds26Dbuo) {
        var hs_wild26DbFG = hs_ds26Dbuo;
        if (hs_ds26Dbuo.notEvaluated) {
            hs_wild26DbFG = hs_ds26Dbuo.hscall();
        }
        switch (hs_wild26DbFG.tag) {
        case 1:
            if (hs_zz26Dbuq.notEvaluated) {
                return hs_zz26Dbuq.hscall();
            } else {
                return hs_zz26Dbuq;
            }
        case 2:
            var hs_y26Dbuu = hs_wild26DbFG.data[0];
            var hs_ys26Dbuv = hs_wild26DbFG.data[1];
            var hs_sat26DbFF = new $hs.Thunk();
            hs_sat26DbFF.evaluateOnce = function () {
                return hs_zur26Dbuw.hscall(hs_ys26Dbuv);
            };
            return hs_zuk26Dbux.hscall(hs_zux26Dbut, hs_y26Dbuu, hs_sat26DbFF);
        }
    };
    this.hs_znzn.evaluate = function (hs_xs26DbuV, hs_ds26DbuB) {
        var hs_wild26DbFH = hs_ds26DbuB;
        if (hs_ds26DbuB.notEvaluated) {
            hs_wild26DbFH = hs_ds26DbuB.hscall();
        }
        var hs_n026DbuT = hs_wild26DbFH.data[0];
        var hs_sub26DbuQ = new $hs.Func(2);
        hs_sub26DbuQ.evaluate = function (hs_ds126DbuH, hs_ds226DbuM) {
            var hs_wild126DbFK = hs_ds126DbuH;
            if (hs_ds126DbuH.notEvaluated) {
                hs_wild126DbFK = hs_ds126DbuH.hscall();
            }
            switch (hs_wild126DbFK.tag) {
            case 1:
                var hs_sat26DbFM = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Prelude.(!!): index too large\n\x00");
                return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DbFM);
            case 2:
                var hs_y26DbuS = hs_wild126DbFK.data[0];
                var hs_ys26DbuO = hs_wild126DbFK.data[1];
                var hs_wild226DbuP = hs_ds226DbuM;
                if (hs_ds226DbuM.notEvaluated) {
                    hs_wild226DbuP = hs_ds226DbuM.hscall();
                }
                switch (hs_wild226DbuP) {
                case 0:
                    if (hs_y26DbuS.notEvaluated) {
                        return hs_y26DbuS.hscall();
                    } else {
                        return hs_y26DbuS;
                    }
                default:
                    var hs_sat26DbFL = ($hs.Int.addCarry(hs_wild226DbuP, ~1, 1))[0];
                    return hs_sub26DbuQ.hscall(hs_ys26DbuO, hs_sat26DbFL);
                }
            }
        };
        var hs_wild126DbFI = hs_n026DbuT < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild126DbFI.tag) {
        case 1:
            return hs_sub26DbuQ.hscall(hs_xs26DbuV, hs_n026DbuT);
        case 2:
            var hs_sat26DbFJ = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Prelude.(!!): negative index\n\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DbFJ);
        }
    };
    this.hs_concatMap.evaluate = function (hs_f26DbuY) {
        var hs_sat26DbFN = new $hs.Thunk();
        hs_sat26DbFN.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.GHCziBase.hs_zpzp, hs_f26DbuY);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26DbFN, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_lookup.evaluate = function (hs_zddEq26Dbvb, hs_zukey26Dbvc, hs_ds26Dbv3) {
        var hs_wild26DbFP = hs_ds26Dbv3;
        if (hs_ds26Dbv3.notEvaluated) {
            hs_wild26DbFP = hs_ds26Dbv3.hscall();
        }
        switch (hs_wild26DbFP.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_ds126Dbv7 = hs_wild26DbFP.data[0];
            var hs_xys26Dbvf = hs_wild26DbFP.data[1];
            var hs_wild126DbFO = hs_ds126Dbv7;
            if (hs_ds126Dbv7.notEvaluated) {
                hs_wild126DbFO = hs_ds126Dbv7.hscall();
            }
            var hs_x26Dbvd = hs_wild126DbFO.data[0];
            var hs_y26Dbvg = hs_wild126DbFO.data[1];
            var hs_wild226DbFQ = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26Dbvb, hs_zukey26Dbvc, hs_x26Dbvd);
            switch (hs_wild226DbFQ.tag) {
            case 1:
                return $hs.modules.GHCziList.hs_lookup.hscall(hs_zddEq26Dbvb, hs_zukey26Dbvc, hs_xys26Dbvf);
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [hs_y26Dbvg];
                return $res;
            }
        }
    };
    this.hs_notElem.evaluate = function (hs_zddEq26Dbvo, hs_ds26Dbvp, hs_ds126Dbvk) {
        var hs_wild26DbFS = hs_ds126Dbvk;
        if (hs_ds126Dbvk.notEvaluated) {
            hs_wild26DbFS = hs_ds126Dbvk.hscall();
        }
        switch (hs_wild26DbFS.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_y26Dbvq = hs_wild26DbFS.data[0];
            var hs_ys26Dbvs = hs_wild26DbFS.data[1];
            var hs_sat26DbFT = new $hs.Thunk();
            hs_sat26DbFT.evaluateOnce = function () {
                return $hs.modules.GHCziList.hs_notElem.hscall(hs_zddEq26Dbvo, hs_ds26Dbvp, hs_ys26Dbvs);
            };
            var hs_sat26DbFR = new $hs.Thunk();
            hs_sat26DbFR.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zsze.hscall(hs_zddEq26Dbvo, hs_ds26Dbvp, hs_y26Dbvq);
            };
            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DbFR, hs_sat26DbFT);
        }
    };
    this.hs_elem.evaluate = function (hs_zddEq26DbvB, hs_ds26DbvC, hs_ds126Dbvx) {
        var hs_wild26DbFV = hs_ds126Dbvx;
        if (hs_ds126Dbvx.notEvaluated) {
            hs_wild26DbFV = hs_ds126Dbvx.hscall();
        }
        switch (hs_wild26DbFV.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_y26DbvD = hs_wild26DbFV.data[0];
            var hs_ys26DbvF = hs_wild26DbFV.data[1];
            var hs_sat26DbFW = new $hs.Thunk();
            hs_sat26DbFW.evaluateOnce = function () {
                return $hs.modules.GHCziList.hs_elem.hscall(hs_zddEq26DbvB, hs_ds26DbvC, hs_ys26DbvF);
            };
            var hs_sat26DbFU = new $hs.Thunk();
            hs_sat26DbFU.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26DbvB, hs_ds26DbvC, hs_y26DbvD);
            };
            return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DbFU, hs_sat26DbFW);
        }
    };
    this.hs_all.evaluate = function (hs_ds26DbvO, hs_ds126DbvJ) {
        var hs_wild26DbFY = hs_ds126DbvJ;
        if (hs_ds126DbvJ.notEvaluated) {
            hs_wild26DbFY = hs_ds126DbvJ.hscall();
        }
        switch (hs_wild26DbFY.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_x26DbvN = hs_wild26DbFY.data[0];
            var hs_xs26DbvQ = hs_wild26DbFY.data[1];
            var hs_sat26DbFZ = new $hs.Thunk();
            hs_sat26DbFZ.evaluateOnce = function () {
                return $hs.modules.GHCziList.hs_all.hscall(hs_ds26DbvO, hs_xs26DbvQ);
            };
            var hs_sat26DbFX = new $hs.Thunk();
            hs_sat26DbFX.evaluateOnce = function () {
                return hs_ds26DbvO.hscall(hs_x26DbvN);
            };
            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DbFX, hs_sat26DbFZ);
        }
    };
    this.hs_any.evaluate = function (hs_ds26DbvZ, hs_ds126DbvU) {
        var hs_wild26DbG1 = hs_ds126DbvU;
        if (hs_ds126DbvU.notEvaluated) {
            hs_wild26DbG1 = hs_ds126DbvU.hscall();
        }
        switch (hs_wild26DbG1.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_x26DbvY = hs_wild26DbG1.data[0];
            var hs_xs26Dbw1 = hs_wild26DbG1.data[1];
            var hs_sat26DbG2 = new $hs.Thunk();
            hs_sat26DbG2.evaluateOnce = function () {
                return $hs.modules.GHCziList.hs_any.hscall(hs_ds26DbvZ, hs_xs26Dbw1);
            };
            var hs_sat26DbG0 = new $hs.Thunk();
            hs_sat26DbG0.evaluateOnce = function () {
                return hs_ds26DbvZ.hscall(hs_x26DbvY);
            };
            return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DbG0, hs_sat26DbG2);
        }
    };
    this.hs_or.evaluate = function (hs_ds26Dbw4) {
        var hs_wild26DbG4 = hs_ds26Dbw4;
        if (hs_ds26Dbw4.notEvaluated) {
            hs_wild26DbG4 = hs_ds26Dbw4.hscall();
        }
        switch (hs_wild26DbG4.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_x26Dbw8 = hs_wild26DbG4.data[0];
            var hs_xs26Dbw9 = hs_wild26DbG4.data[1];
            var hs_sat26DbG3 = new $hs.Thunk();
            hs_sat26DbG3.evaluateOnce = function () {
                return $hs.modules.GHCziList.hs_or.hscall(hs_xs26Dbw9);
            };
            return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_x26Dbw8, hs_sat26DbG3);
        }
    };
    this.hs_and.evaluate = function (hs_ds26Dbwc) {
        var hs_wild26DbG6 = hs_ds26Dbwc;
        if (hs_ds26Dbwc.notEvaluated) {
            hs_wild26DbG6 = hs_ds26Dbwc.hscall();
        }
        switch (hs_wild26DbG6.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_x26Dbwg = hs_wild26DbG6.data[0];
            var hs_xs26Dbwh = hs_wild26DbG6.data[1];
            var hs_sat26DbG5 = new $hs.Thunk();
            hs_sat26DbG5.evaluateOnce = function () {
                return $hs.modules.GHCziList.hs_and.hscall(hs_xs26Dbwh);
            };
            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_x26Dbwg, hs_sat26DbG5);
        }
    };
    this.hs_reverse.evaluate = function (hs_l26Dbww) {
        var hs_rev26Dbwu = new $hs.Func(2);
        hs_rev26Dbwu.evaluate = function (hs_ds26Dbwn, hs_a26Dbwp) {
            var hs_wild26DbG8 = hs_ds26Dbwn;
            if (hs_ds26Dbwn.notEvaluated) {
                hs_wild26DbG8 = hs_ds26Dbwn.hscall();
            }
            switch (hs_wild26DbG8.tag) {
            case 1:
                if (hs_a26Dbwp.notEvaluated) {
                    return hs_a26Dbwp.hscall();
                } else {
                    return hs_a26Dbwp;
                }
            case 2:
                var hs_x26Dbwt = hs_wild26DbG8.data[0];
                var hs_xs26Dbws = hs_wild26DbG8.data[1];
                var hs_sat26DbG7 = new $hs.Data(2);
                hs_sat26DbG7.data = [hs_x26Dbwt, hs_a26Dbwp];
                return hs_rev26Dbwu.hscall(hs_xs26Dbws, hs_sat26DbG7);
            }
        };
        return hs_rev26Dbwu.hscall(hs_l26Dbww, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_break.evaluate = function (hs_ds26DbwE, hs_xs26Dbwz) {
        var hs_wild26DbwU = hs_xs26Dbwz;
        if (hs_xs26Dbwz.notEvaluated) {
            hs_wild26DbwU = hs_xs26Dbwz.hscall();
        }
        switch (hs_wild26DbwU.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [$hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN];
            return $res;
        case 2:
            var hs_x26DbwD = hs_wild26DbwU.data[0];
            var hs_xszq26DbwH = hs_wild26DbwU.data[1];
            var hs_wild126DbG9 = hs_ds26DbwE.hscall(hs_x26DbwD);
            switch (hs_wild126DbG9.tag) {
            case 1:
                var hs_ds126DbwI = new $hs.Thunk();
                hs_ds126DbwI.evaluateOnce = function () {
                    return $hs.modules.GHCziList.hs_break.hscall(hs_ds26DbwE, hs_xszq26DbwH);
                };
                var hs_sat26DbGb = new $hs.Thunk();
                hs_sat26DbGb.evaluateOnce = function () {
                    var hs_wild226DbGg = hs_ds126DbwI;
                    if (hs_ds126DbwI.notEvaluated) {
                        hs_wild226DbGg = hs_ds126DbwI.hscall();
                    }
                    var hs_zzs26DbwS = hs_wild226DbGg.data[1];
                    if (hs_zzs26DbwS.notEvaluated) {
                        return hs_zzs26DbwS.hscall();
                    } else {
                        return hs_zzs26DbwS;
                    }
                };
                var hs_sat26DbGc = new $hs.Thunk();
                hs_sat26DbGc.evaluateOnce = function () {
                    var hs_wild226DbGe = hs_ds126DbwI;
                    if (hs_ds126DbwI.notEvaluated) {
                        hs_wild226DbGe = hs_ds126DbwI.hscall();
                    }
                    var hs_ys26DbwM = hs_wild226DbGe.data[0];
                    if (hs_ys26DbwM.notEvaluated) {
                        return hs_ys26DbwM.hscall();
                    } else {
                        return hs_ys26DbwM;
                    }
                };
                var hs_sat26DbGa = new $hs.Data(2);
                hs_sat26DbGa.data = [hs_x26DbwD, hs_sat26DbGc];
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26DbGa, hs_sat26DbGb];
                return $res;
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [$hs.modules.GHCziTypes.hs_ZMZN, hs_wild26DbwU];
                return $res;
            }
        }
    };
    this.hs_span.evaluate = function (hs_ds26Dbx2, hs_xs26DbwX) {
        var hs_wild26Dbx4 = hs_xs26DbwX;
        if (hs_xs26DbwX.notEvaluated) {
            hs_wild26Dbx4 = hs_xs26DbwX.hscall();
        }
        switch (hs_wild26Dbx4.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [$hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN];
            return $res;
        case 2:
            var hs_x26Dbx1 = hs_wild26Dbx4.data[0];
            var hs_xszq26Dbx6 = hs_wild26Dbx4.data[1];
            var hs_wild126DbGi = hs_ds26Dbx2.hscall(hs_x26Dbx1);
            switch (hs_wild126DbGi.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [$hs.modules.GHCziTypes.hs_ZMZN, hs_wild26Dbx4];
                return $res;
            case 2:
                var hs_ds126Dbx7 = new $hs.Thunk();
                hs_ds126Dbx7.evaluateOnce = function () {
                    return $hs.modules.GHCziList.hs_span.hscall(hs_ds26Dbx2, hs_xszq26Dbx6);
                };
                var hs_sat26DbGj = new $hs.Thunk();
                hs_sat26DbGj.evaluateOnce = function () {
                    var hs_wild226DbGo = hs_ds126Dbx7;
                    if (hs_ds126Dbx7.notEvaluated) {
                        hs_wild226DbGo = hs_ds126Dbx7.hscall();
                    }
                    var hs_zzs26Dbxh = hs_wild226DbGo.data[1];
                    if (hs_zzs26Dbxh.notEvaluated) {
                        return hs_zzs26Dbxh.hscall();
                    } else {
                        return hs_zzs26Dbxh;
                    }
                };
                var hs_sat26DbGk = new $hs.Thunk();
                hs_sat26DbGk.evaluateOnce = function () {
                    var hs_wild226DbGm = hs_ds126Dbx7;
                    if (hs_ds126Dbx7.notEvaluated) {
                        hs_wild226DbGm = hs_ds126Dbx7.hscall();
                    }
                    var hs_ys26Dbxb = hs_wild226DbGm.data[0];
                    if (hs_ys26Dbxb.notEvaluated) {
                        return hs_ys26Dbxb.hscall();
                    } else {
                        return hs_ys26Dbxb;
                    }
                };
                var hs_sat26DbGh = new $hs.Data(2);
                hs_sat26DbGh.data = [hs_x26Dbx1, hs_sat26DbGk];
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26DbGh, hs_sat26DbGj];
                return $res;
            }
        }
    };
    this.hs_splitAt.evaluate = function (hs_ds26Dbxl, hs_ls26DbxR) {
        var hs_wild26DbGp = hs_ds26Dbxl;
        if (hs_ds26Dbxl.notEvaluated) {
            hs_wild26DbGp = hs_ds26Dbxl.hscall();
        }
        var hs_nzh26DbxP = hs_wild26DbGp.data[0];
        var hs_splitAtzh26Dbxz = new $hs.Func(2);
        hs_splitAtzh26Dbxz.evaluate = function (hs_ds126Dbxr, hs_xs26Dbxt) {
            var hs_ds226Dbxy = hs_ds126Dbxr;
            if (hs_ds126Dbxr.notEvaluated) {
                hs_ds226Dbxy = hs_ds126Dbxr.hscall();
            }
            switch (hs_ds226Dbxy) {
            case 0:
                var $res = new $hs.Data(1);
                $res.data = [$hs.modules.GHCziTypes.hs_ZMZN, hs_xs26Dbxt];
                return $res;
            default:
                var hs_wild126DbGs = hs_xs26Dbxt;
                if (hs_xs26Dbxt.notEvaluated) {
                    hs_wild126DbGs = hs_xs26Dbxt.hscall();
                }
                switch (hs_wild126DbGs.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [$hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN];
                    return $res;
                case 2:
                    var hs_x26DbxD = hs_wild126DbGs.data[0];
                    var hs_xs126DbxB = hs_wild126DbGs.data[1];
                    var hs_ds326DbxC = new $hs.Thunk();
                    hs_ds326DbxC.evaluateOnce = function () {
                        var hs_sat26DbGz = ($hs.Int.addCarry(hs_ds226Dbxy, ~1, 1))[0];
                        return hs_splitAtzh26Dbxz.hscall(hs_sat26DbGz, hs_xs126DbxB);
                    };
                    var hs_sat26DbGt = new $hs.Thunk();
                    hs_sat26DbGt.evaluateOnce = function () {
                        var hs_wild226DbGy = hs_ds326DbxC;
                        if (hs_ds326DbxC.notEvaluated) {
                            hs_wild226DbGy = hs_ds326DbxC.hscall();
                        }
                        var hs_xszqzq26DbxN = hs_wild226DbGy.data[1];
                        if (hs_xszqzq26DbxN.notEvaluated) {
                            return hs_xszqzq26DbxN.hscall();
                        } else {
                            return hs_xszqzq26DbxN;
                        }
                    };
                    var hs_sat26DbGu = new $hs.Thunk();
                    hs_sat26DbGu.evaluateOnce = function () {
                        var hs_wild226DbGw = hs_ds326DbxC;
                        if (hs_ds326DbxC.notEvaluated) {
                            hs_wild226DbGw = hs_ds326DbxC.hscall();
                        }
                        var hs_xszq26DbxH = hs_wild226DbGw.data[0];
                        if (hs_xszq26DbxH.notEvaluated) {
                            return hs_xszq26DbxH.hscall();
                        } else {
                            return hs_xszq26DbxH;
                        }
                    };
                    var hs_sat26DbGr = new $hs.Data(2);
                    hs_sat26DbGr.data = [hs_x26DbxD, hs_sat26DbGu];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26DbGr, hs_sat26DbGt];
                    return $res;
                }
            }
        };
        var hs_wild126DbGq = hs_nzh26DbxP < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild126DbGq.tag) {
        case 1:
            return hs_splitAtzh26Dbxz.hscall(hs_nzh26DbxP, hs_ls26DbxR);
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [$hs.modules.GHCziTypes.hs_ZMZN, hs_ls26DbxR];
            return $res;
        }
    };
    this.hs_drop.evaluate = function (hs_ds26DbxU, hs_ls26Dbyc) {
        var hs_wild26DbGA = hs_ds26DbxU;
        if (hs_ds26DbxU.notEvaluated) {
            hs_wild26DbGA = hs_ds26DbxU.hscall();
        }
        var hs_nzh26Dbya = hs_wild26DbGA.data[0];
        var hs_dropzh26Dby7 = new $hs.Func(2);
        hs_dropzh26Dby7.evaluate = function (hs_ds126Dby0, hs_xs26Dby2) {
            var hs_ds226Dby6 = hs_ds126Dby0;
            if (hs_ds126Dby0.notEvaluated) {
                hs_ds226Dby6 = hs_ds126Dby0.hscall();
            }
            switch (hs_ds226Dby6) {
            case 0:
                if (hs_xs26Dby2.notEvaluated) {
                    return hs_xs26Dby2.hscall();
                } else {
                    return hs_xs26Dby2;
                }
            default:
                var hs_wild126DbGC = hs_xs26Dby2;
                if (hs_xs26Dby2.notEvaluated) {
                    hs_wild126DbGC = hs_xs26Dby2.hscall();
                }
                switch (hs_wild126DbGC.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_xs126Dby9 = hs_wild126DbGC.data[1];
                    var hs_sat26DbGE = ($hs.Int.addCarry(hs_ds226Dby6, ~1, 1))[0];
                    return hs_dropzh26Dby7.hscall(hs_sat26DbGE, hs_xs126Dby9);
                }
            }
        };
        var hs_wild126DbGB = hs_nzh26Dbya < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild126DbGB.tag) {
        case 1:
            return hs_dropzh26Dby7.hscall(hs_nzh26Dbya, hs_ls26Dbyc);
        case 2:
            if (hs_ls26Dbyc.notEvaluated) {
                return hs_ls26Dbyc.hscall();
            } else {
                return hs_ls26Dbyc;
            }
        }
    };
    hs_takezuunsafezuUIntzuappend25roY8.evaluate = function (hs_ds26Dbyg, hs_ds126Dbyi, hs_rs26Dbyk) {
        var hs_ds226Dbyo = hs_ds26Dbyg;
        if (hs_ds26Dbyg.notEvaluated) {
            hs_ds226Dbyo = hs_ds26Dbyg.hscall();
        }
        switch (hs_ds226Dbyo) {
        case 0:
            if (hs_rs26Dbyk.notEvaluated) {
                return hs_rs26Dbyk.hscall();
            } else {
                return hs_rs26Dbyk;
            }
        default:
            var hs_wild26DbGG = hs_ds126Dbyi;
            if (hs_ds126Dbyi.notEvaluated) {
                hs_wild26DbGG = hs_ds126Dbyi.hscall();
            }
            switch (hs_wild26DbGG.tag) {
            case 1:
                if (hs_rs26Dbyk.notEvaluated) {
                    return hs_rs26Dbyk.hscall();
                } else {
                    return hs_rs26Dbyk;
                }
            case 2:
                var hs_x26Dbyn = hs_wild26DbGG.data[0];
                var hs_xs26Dbyq = hs_wild26DbGG.data[1];
                var hs_sat26DbGF = new $hs.Thunk();
                hs_sat26DbGF.evaluateOnce = function () {
                    var hs_sat26DbGH = ($hs.Int.addCarry(hs_ds226Dbyo, ~1, 1))[0];
                    return hs_takezuunsafezuUIntzuappend25roY8.hscall(hs_sat26DbGH, hs_xs26Dbyq, hs_rs26Dbyk);
                };
                var $res = new $hs.Data(2);
                $res.data = [hs_x26Dbyn, hs_sat26DbGF];
                return $res;
            }
        }
    };
    this.hs_takeUIntzuappend.evaluate = function (hs_n26Dbyv, hs_xs26Dbyx, hs_rs26Dbyy) {
        var hs_wild26DbGI = hs_n26Dbyv >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26DbGI.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            return hs_takezuunsafezuUIntzuappend25roY8.hscall(hs_n26Dbyv, hs_xs26Dbyx, hs_rs26Dbyy);
        }
    };
    hs_takezuunsafezuUInt25roY6.evaluate = function (hs_ds26DbyB, hs_ds126DbyD) {
        var hs_ds226DbyI = hs_ds26DbyB;
        if (hs_ds26DbyB.notEvaluated) {
            hs_ds226DbyI = hs_ds26DbyB.hscall();
        }
        switch (hs_ds226DbyI) {
        case 0:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        default:
            var hs_wild26DbGK = hs_ds126DbyD;
            if (hs_ds126DbyD.notEvaluated) {
                hs_wild26DbGK = hs_ds126DbyD.hscall();
            }
            switch (hs_wild26DbGK.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_x26DbyH = hs_wild26DbGK.data[0];
                var hs_xs26DbyK = hs_wild26DbGK.data[1];
                var hs_sat26DbGJ = new $hs.Thunk();
                hs_sat26DbGJ.evaluateOnce = function () {
                    var hs_sat26DbGL = ($hs.Int.addCarry(hs_ds226DbyI, ~1, 1))[0];
                    return hs_takezuunsafezuUInt25roY6.hscall(hs_sat26DbGL, hs_xs26DbyK);
                };
                var $res = new $hs.Data(2);
                $res.data = [hs_x26DbyH, hs_sat26DbGJ];
                return $res;
            }
        }
    };
    this.hs_takeUInt.evaluate = function (hs_n26DbyO, hs_xs26DbyQ) {
        var hs_wild26DbGM = hs_n26DbyO >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26DbGM.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            return hs_takezuunsafezuUInt25roY6.hscall(hs_n26DbyO, hs_xs26DbyQ);
        }
    };
    hs_takeFB25roY3.evaluate = function (hs_c26Dbz1, hs_n26Dbz3, hs_x26DbyY, hs_xs26DbyZ, hs_m26DbyW) {
        var hs_wild26DbGN = hs_m26DbyW <= 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26DbGN.tag) {
        case 1:
            var hs_sat26DbGO = new $hs.Thunk();
            hs_sat26DbGO.evaluateOnce = function () {
                var hs_sat26DbGP = ($hs.Int.addCarry(hs_m26DbyW, ~1, 1))[0];
                return hs_xs26DbyZ.hscall(hs_sat26DbGP);
            };
            return hs_c26Dbz1.hscall(hs_x26DbyY, hs_sat26DbGO);
        case 2:
            return hs_c26Dbz1.hscall(hs_x26DbyY, hs_n26Dbz3);
        }
    };
    hs_takeConst25roY2.evaluate = function (hs_x26Dbz6, hs_ds26Dbz7) {
        if (hs_x26Dbz6.notEvaluated) {
            return hs_x26Dbz6.hscall();
        } else {
            return hs_x26Dbz6;
        }
    };
    hs_takeFoldr25roY1.evaluate = function (hs_eta26Dbza, hs_eta126Dbzn) {
        var hs_wild26DbGR = hs_eta26Dbza;
        if (hs_eta26Dbza.notEvaluated) {
            hs_wild26DbGR = hs_eta26Dbza.hscall();
        }
        var hs_nzh26Dbzf = hs_wild26DbGR.data[0];
        var hs_sat26DbGQ = new $hs.Func(2);
        hs_sat26DbGQ.evaluate = function (hs_c26Dbzh, hs_nil26Dbzi) {
            var hs_wild126DbGS = hs_nzh26Dbzf <= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild126DbGS.tag) {
            case 1:
                var hs_sat26DbGU = new $hs.Func(1);
                hs_sat26DbGU.evaluate = function (hs_ds26Dbzl) {
                    if (hs_nil26Dbzi.notEvaluated) {
                        return hs_nil26Dbzi.hscall();
                    } else {
                        return hs_nil26Dbzi;
                    }
                };
                var hs_sat26DbGT = new $hs.Func(3);
                hs_sat26DbGT.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
                    return hs_takeFB25roY3.hscall(hs_c26Dbzh, hs_nil26Dbzi, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
                };
                return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26DbGT, hs_sat26DbGU, hs_eta126Dbzn, hs_nzh26Dbzf);
            case 2:
                if (hs_nil26Dbzi.notEvaluated) {
                    return hs_nil26Dbzi.hscall();
                } else {
                    return hs_nil26Dbzi;
                }
            }
        };
        return $hs.modules.GHCziBase.hs_build.hscall(hs_sat26DbGQ);
    };
    this.hs_take.evaluate = function (hs_eta26Dbzr, hs_eta126Dbzv) {
        var hs_wild26DbGV = hs_eta26Dbzr;
        if (hs_eta26Dbzr.notEvaluated) {
            hs_wild26DbGV = hs_eta26Dbzr.hscall();
        }
        var hs_nzh26Dbzu = hs_wild26DbGV.data[0];
        return $hs.modules.GHCziList.hs_takeUInt.hscall(hs_nzh26Dbzu, hs_eta126Dbzv);
    };
    this.hs_dropWhile.evaluate = function (hs_ds26DbzD, hs_ds126Dbzy) {
        var hs_wild26DbzF = hs_ds126Dbzy;
        if (hs_ds126Dbzy.notEvaluated) {
            hs_wild26DbzF = hs_ds126Dbzy.hscall();
        }
        switch (hs_wild26DbzF.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_x26DbzC = hs_wild26DbzF.data[0];
            var hs_xszq26DbzG = hs_wild26DbzF.data[1];
            var hs_wild126DbGW = hs_ds26DbzD.hscall(hs_x26DbzC);
            switch (hs_wild126DbGW.tag) {
            case 1:
                if (hs_wild26DbzF.notEvaluated) {
                    return hs_wild26DbzF.hscall();
                } else {
                    return hs_wild26DbzF;
                }
            case 2:
                return $hs.modules.GHCziList.hs_dropWhile.hscall(hs_ds26DbzD, hs_xszq26DbzG);
            }
        }
    };
    this.hs_takeWhile.evaluate = function (hs_ds26DbzO, hs_ds126DbzJ) {
        var hs_wild26DbGY = hs_ds126DbzJ;
        if (hs_ds126DbzJ.notEvaluated) {
            hs_wild26DbGY = hs_ds126DbzJ.hscall();
        }
        switch (hs_wild26DbGY.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_x26DbzN = hs_wild26DbGY.data[0];
            var hs_xs26DbzQ = hs_wild26DbGY.data[1];
            var hs_wild126DbGZ = hs_ds26DbzO.hscall(hs_x26DbzN);
            switch (hs_wild126DbGZ.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_sat26DbGX = new $hs.Thunk();
                hs_sat26DbGX.evaluateOnce = function () {
                    return $hs.modules.GHCziList.hs_takeWhile.hscall(hs_ds26DbzO, hs_xs26DbzQ);
                };
                var $res = new $hs.Data(2);
                $res.data = [hs_x26DbzN, hs_sat26DbGX];
                return $res;
            }
        }
    };
    this.hs_cycle.evaluate = function (hs_ds26DbzT) {
        var hs_wild26DbzZ = hs_ds26DbzT;
        if (hs_ds26DbzT.notEvaluated) {
            hs_wild26DbzZ = hs_ds26DbzT.hscall();
        }
        switch (hs_wild26DbzZ.tag) {
        case 1:
            var hs_sat26DbH2 = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Prelude.cycle: empty list\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DbH2);
        case 2:
            var hs_xszq26DbA0 = new $hs.Thunk();
            hs_xszq26DbA0.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_wild26DbzZ, hs_xszq26DbA0);
            };
            if (hs_xszq26DbA0.notEvaluated) {
                return hs_xszq26DbA0.hscall();
            } else {
                return hs_xszq26DbA0;
            }
        }
    };
    hs_repeatFB25roXW.evaluate = function (hs_eta26DbA6, hs_eta126DbA4) {
        var hs_xs26DbA5 = new $hs.Thunk();
        hs_xs26DbA5.evaluateOnce = function () {
            return hs_eta26DbA6.hscall(hs_eta126DbA4, hs_xs26DbA5);
        };
        if (hs_xs26DbA5.notEvaluated) {
            return hs_xs26DbA5.hscall();
        } else {
            return hs_xs26DbA5;
        }
    };
    this.hs_repeat.evaluate = function (hs_eta26DbA9) {
        var hs_xs26DbAa = new $hs.Data(2);
        hs_xs26DbAa.data = [hs_eta26DbA9, hs_xs26DbAa];
        if (hs_xs26DbAa.notEvaluated) {
            return hs_xs26DbAa.hscall();
        } else {
            return hs_xs26DbAa;
        }
    };
    this.hs_replicate.evaluate = function (hs_eta26DbAd, hs_eta126DbAi) {
        var hs_wild26DbH4 = hs_eta26DbAd;
        if (hs_eta26DbAd.notEvaluated) {
            hs_wild26DbH4 = hs_eta26DbAd.hscall();
        }
        var hs_nzh26DbAg = hs_wild26DbH4.data[0];
        var hs_wild126DbH5 = hs_nzh26DbAg >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild126DbH5.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_sat26DbH3 = new $hs.Thunk();
            hs_sat26DbH3.evaluateOnce = function () {
                return $hs.modules.GHCziList.hs_repeat.hscall(hs_eta126DbAi);
            };
            return hs_takezuunsafezuUInt25roY6.hscall(hs_nzh26DbAg, hs_sat26DbH3);
        }
    };
    hs_iterateFB25roXU.evaluate = function (hs_c26DbAo, hs_f26DbAp, hs_x26DbAn) {
        var hs_sat26DbH6 = new $hs.Thunk();
        hs_sat26DbH6.evaluateOnce = function () {
            var hs_sat26DbH7 = new $hs.Thunk();
            hs_sat26DbH7.evaluateOnce = function () {
                return hs_f26DbAp.hscall(hs_x26DbAn);
            };
            return hs_iterateFB25roXU.hscall(hs_c26DbAo, hs_f26DbAp, hs_sat26DbH7);
        };
        return hs_c26DbAo.hscall(hs_x26DbAn, hs_sat26DbH6);
    };
    this.hs_iterate.evaluate = function (hs_f26DbAv, hs_x26DbAu) {
        var hs_sat26DbH8 = new $hs.Thunk();
        hs_sat26DbH8.evaluateOnce = function () {
            var hs_sat26DbH9 = new $hs.Thunk();
            hs_sat26DbH9.evaluateOnce = function () {
                return hs_f26DbAv.hscall(hs_x26DbAu);
            };
            return $hs.modules.GHCziList.hs_iterate.hscall(hs_f26DbAv, hs_sat26DbH9);
        };
        var $res = new $hs.Data(2);
        $res.data = [hs_x26DbAu, hs_sat26DbH8];
        return $res;
    };
    this.hs_scanr1.evaluate = function (hs_ds26DbAK, hs_ds126DbAA) {
        var hs_wild26DbHd = hs_ds126DbAA;
        if (hs_ds126DbAA.notEvaluated) {
            hs_wild26DbHd = hs_ds126DbAA.hscall();
        }
        switch (hs_wild26DbHd.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_x26DbAG = hs_wild26DbHd.data[0];
            var hs_ds226DbAE = hs_wild26DbHd.data[1];
            var hs_wild126DbAL = hs_ds226DbAE;
            if (hs_ds226DbAE.notEvaluated) {
                hs_wild126DbAL = hs_ds226DbAE.hscall();
            }
            switch (hs_wild126DbAL.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [hs_x26DbAG, $hs.modules.GHCziTypes.hs_ZMZN];
                return $res;
            case 2:
                var hs_ds326DbAR = new $hs.Thunk();
                hs_ds326DbAR.evaluateOnce = function () {
                    var hs_wild226DbAP = $hs.modules.GHCziList.hs_scanr1.hscall(hs_ds26DbAK, hs_wild126DbAL);
                    switch (hs_wild226DbAP.tag) {
                    case 1:
                        return $hs.modules.ControlziExceptionziBase.hs_irrefutPatError.hscall("/home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/List.lhs:222:34-55|qs@(q : _)\x00");
                    case 2:
                        var hs_q26DbAQ = hs_wild226DbAP.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_wild226DbAP, hs_q26DbAQ];
                        return $res;
                    }
                };
                var hs_sat26DbHe = new $hs.Thunk();
                hs_sat26DbHe.evaluateOnce = function () {
                    var hs_ds426DbHj = hs_ds326DbAR;
                    if (hs_ds326DbAR.notEvaluated) {
                        hs_ds426DbHj = hs_ds326DbAR.hscall();
                    }
                    var hs_qs26DbB1 = hs_ds426DbHj.data[0];
                    if (hs_qs26DbB1.notEvaluated) {
                        return hs_qs26DbB1.hscall();
                    } else {
                        return hs_qs26DbB1;
                    }
                };
                var hs_sat26DbHa = new $hs.Thunk();
                hs_sat26DbHa.evaluateOnce = function () {
                    var hs_sat26DbHf = new $hs.Thunk();
                    hs_sat26DbHf.evaluateOnce = function () {
                        var hs_ds426DbHh = hs_ds326DbAR;
                        if (hs_ds326DbAR.notEvaluated) {
                            hs_ds426DbHh = hs_ds326DbAR.hscall();
                        }
                        var hs_q26DbAV = hs_ds426DbHh.data[1];
                        if (hs_q26DbAV.notEvaluated) {
                            return hs_q26DbAV.hscall();
                        } else {
                            return hs_q26DbAV;
                        }
                    };
                    return hs_ds26DbAK.hscall(hs_x26DbAG, hs_sat26DbHf);
                };
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26DbHa, hs_sat26DbHe];
                return $res;
            }
        }
    };
    this.hs_scanr.evaluate = function (hs_ds26DbBc, hs_q026DbB8, hs_ds126DbB6) {
        var hs_wild26DbHm = hs_ds126DbB6;
        if (hs_ds126DbB6.notEvaluated) {
            hs_wild26DbHm = hs_ds126DbB6.hscall();
        }
        switch (hs_wild26DbHm.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [hs_q026DbB8, $hs.modules.GHCziTypes.hs_ZMZN];
            return $res;
        case 2:
            var hs_x26DbBk = hs_wild26DbHm.data[0];
            var hs_xs26DbBd = hs_wild26DbHm.data[1];
            var hs_ds226DbBj = new $hs.Thunk();
            hs_ds226DbBj.evaluateOnce = function () {
                var hs_wild126DbBh = $hs.modules.GHCziList.hs_scanr.hscall(hs_ds26DbBc, hs_q026DbB8, hs_xs26DbBd);
                switch (hs_wild126DbBh.tag) {
                case 1:
                    return $hs.modules.ControlziExceptionziBase.hs_irrefutPatError.hscall("/home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/List.lhs:214:34-57|qs@(q : _)\x00");
                case 2:
                    var hs_q26DbBi = hs_wild126DbBh.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_wild126DbBh, hs_q26DbBi];
                    return $res;
                }
            };
            var hs_sat26DbHn = new $hs.Thunk();
            hs_sat26DbHn.evaluateOnce = function () {
                var hs_ds326DbHs = hs_ds226DbBj;
                if (hs_ds226DbBj.notEvaluated) {
                    hs_ds326DbHs = hs_ds226DbBj.hscall();
                }
                var hs_qs26DbBu = hs_ds326DbHs.data[0];
                if (hs_qs26DbBu.notEvaluated) {
                    return hs_qs26DbBu.hscall();
                } else {
                    return hs_qs26DbBu;
                }
            };
            var hs_sat26DbHl = new $hs.Thunk();
            hs_sat26DbHl.evaluateOnce = function () {
                var hs_sat26DbHo = new $hs.Thunk();
                hs_sat26DbHo.evaluateOnce = function () {
                    var hs_ds326DbHq = hs_ds226DbBj;
                    if (hs_ds226DbBj.notEvaluated) {
                        hs_ds326DbHq = hs_ds226DbBj.hscall();
                    }
                    var hs_q26DbBo = hs_ds326DbHq.data[1];
                    if (hs_q26DbBo.notEvaluated) {
                        return hs_q26DbBo.hscall();
                    } else {
                        return hs_q26DbBo;
                    }
                };
                return hs_ds26DbBc.hscall(hs_x26DbBk, hs_sat26DbHo);
            };
            var $res = new $hs.Data(2);
            $res.data = [hs_sat26DbHl, hs_sat26DbHn];
            return $res;
        }
    };
    this.hs_foldr1.evaluate = function (hs_ds26DbBI, hs_ds126DbBy) {
        var hs_wild26DbHx = hs_ds126DbBy;
        if (hs_ds126DbBy.notEvaluated) {
            hs_wild26DbHx = hs_ds126DbBy.hscall();
        }
        switch (hs_wild26DbHx.tag) {
        case 1:
            var hs_sat26DbHy = new $hs.Thunk();
            hs_sat26DbHy.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("foldr1\x00");
            };
            return $hs.modules.GHCziList.hs_errorEmptyList.hscall(hs_sat26DbHy);
        case 2:
            var hs_x26DbBF = hs_wild26DbHx.data[0];
            var hs_ds226DbBD = hs_wild26DbHx.data[1];
            var hs_wild126DbBJ = hs_ds226DbBD;
            if (hs_ds226DbBD.notEvaluated) {
                hs_wild126DbBJ = hs_ds226DbBD.hscall();
            }
            switch (hs_wild126DbBJ.tag) {
            case 1:
                if (hs_x26DbBF.notEvaluated) {
                    return hs_x26DbBF.hscall();
                } else {
                    return hs_x26DbBF;
                }
            case 2:
                var hs_sat26DbHu = new $hs.Thunk();
                hs_sat26DbHu.evaluateOnce = function () {
                    return $hs.modules.GHCziList.hs_foldr1.hscall(hs_ds26DbBI, hs_wild126DbBJ);
                };
                return hs_ds26DbBI.hscall(hs_x26DbBF, hs_sat26DbHu);
            }
        }
    };
    this.hs_scanl.evaluate = function (hs_f26DbBT, hs_q26DbBO, hs_ls26DbBP) {
        var hs_sat26DbHz = new $hs.Thunk();
        hs_sat26DbHz.evaluateOnce = function () {
            var hs_wild26DbHB = hs_ls26DbBP;
            if (hs_ls26DbBP.notEvaluated) {
                hs_wild26DbHB = hs_ls26DbBP.hscall();
            }
            switch (hs_wild26DbHB.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_x26DbBU = hs_wild26DbHB.data[0];
                var hs_xs26DbBW = hs_wild26DbHB.data[1];
                var hs_sat26DbHA = new $hs.Thunk();
                hs_sat26DbHA.evaluateOnce = function () {
                    return hs_f26DbBT.hscall(hs_q26DbBO, hs_x26DbBU);
                };
                return $hs.modules.GHCziList.hs_scanl.hscall(hs_f26DbBT, hs_sat26DbHA, hs_xs26DbBW);
            }
        };
        var $res = new $hs.Data(2);
        $res.data = [hs_q26DbBO, hs_sat26DbHz];
        return $res;
    };
    this.hs_scanl1.evaluate = function (hs_f26DbC4, hs_ds26DbC0) {
        var hs_wild26DbHC = hs_ds26DbC0;
        if (hs_ds26DbC0.notEvaluated) {
            hs_wild26DbHC = hs_ds26DbC0.hscall();
        }
        switch (hs_wild26DbHC.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_x26DbC5 = hs_wild26DbHC.data[0];
            var hs_xs26DbC6 = hs_wild26DbHC.data[1];
            return $hs.modules.GHCziList.hs_scanl.hscall(hs_f26DbC4, hs_x26DbC5, hs_xs26DbC6);
        }
    };
    this.hs_foldl.evaluate = function (hs_f26DbCj, hs_zz026DbCn, hs_xs026DbCo) {
        var hs_lgo26DbCk = new $hs.Func(2);
        hs_lgo26DbCk.evaluate = function (hs_zz26DbCf, hs_ds26DbCd) {
            var hs_wild26DbHE = hs_ds26DbCd;
            if (hs_ds26DbCd.notEvaluated) {
                hs_wild26DbHE = hs_ds26DbCd.hscall();
            }
            switch (hs_wild26DbHE.tag) {
            case 1:
                if (hs_zz26DbCf.notEvaluated) {
                    return hs_zz26DbCf.hscall();
                } else {
                    return hs_zz26DbCf;
                }
            case 2:
                var hs_x26DbCi = hs_wild26DbHE.data[0];
                var hs_xs26DbCm = hs_wild26DbHE.data[1];
                var hs_sat26DbHD = new $hs.Thunk();
                hs_sat26DbHD.evaluateOnce = function () {
                    return hs_f26DbCj.hscall(hs_zz26DbCf, hs_x26DbCi);
                };
                return hs_lgo26DbCk.hscall(hs_sat26DbHD, hs_xs26DbCm);
            }
        };
        return hs_lgo26DbCk.hscall(hs_zz026DbCn, hs_xs026DbCo);
    };
    hs_filterFB25roXM.evaluate = function (hs_c26DbCx, hs_p26DbCu, hs_x26DbCt, hs_r26DbCw) {
        var hs_wild26DbHF = hs_p26DbCu.hscall(hs_x26DbCt);
        switch (hs_wild26DbHF.tag) {
        case 1:
            if (hs_r26DbCw.notEvaluated) {
                return hs_r26DbCw.hscall();
            } else {
                return hs_r26DbCw;
            }
        case 2:
            return hs_c26DbCx.hscall(hs_x26DbCt, hs_r26DbCw);
        }
    };
    this.hs_length.evaluate = function (hs_l26DbCK) {
        var hs_len26DbCI = new $hs.Func(2);
        hs_len26DbCI.evaluate = function (hs_ds26DbCC, hs_azh26DbCE) {
            var hs_wild26DbHG = hs_ds26DbCC;
            if (hs_ds26DbCC.notEvaluated) {
                hs_wild26DbHG = hs_ds26DbCC.hscall();
            }
            switch (hs_wild26DbHG.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [hs_azh26DbCE];
                return $res;
            case 2:
                var hs_xs26DbCH = hs_wild26DbHG.data[1];
                var hs_sat26DbHI = ($hs.Int.addCarry(hs_azh26DbCE, 1, 0))[0];
                return hs_len26DbCI.hscall(hs_xs26DbCH, hs_sat26DbHI);
            }
        };
        return hs_len26DbCI.hscall(hs_l26DbCK, 0);
    };
    this.hs_null.evaluate = function (hs_ds26DbCM) {
        var hs_wild26DbHL = hs_ds26DbCM;
        if (hs_ds26DbCM.notEvaluated) {
            hs_wild26DbHL = hs_ds26DbCM.hscall();
        }
        switch (hs_wild26DbHL.tag) {
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
    this.hs_init.evaluate = function (hs_ds26DbCR) {
        var hs_wild26DbHO = hs_ds26DbCR;
        if (hs_ds26DbCR.notEvaluated) {
            hs_wild26DbHO = hs_ds26DbCR.hscall();
        }
        switch (hs_wild26DbHO.tag) {
        case 1:
            var hs_sat26DbHP = new $hs.Thunk();
            hs_sat26DbHP.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("init\x00");
            };
            return $hs.modules.GHCziList.hs_errorEmptyList.hscall(hs_sat26DbHP);
        case 2:
            var hs_x26DbD8 = hs_wild26DbHO.data[0];
            var hs_xs26DbD9 = hs_wild26DbHO.data[1];
            var hs_initzq26DbD6 = new $hs.Func(2);
            hs_initzq26DbD6.evaluate = function (hs_ds126DbD3, hs_ds226DbCZ) {
                var hs_wild126DbHN = hs_ds226DbCZ;
                if (hs_ds226DbCZ.notEvaluated) {
                    hs_wild126DbHN = hs_ds226DbCZ.hscall();
                }
                switch (hs_wild126DbHN.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_zz26DbD4 = hs_wild126DbHN.data[0];
                    var hs_zzs26DbD5 = hs_wild126DbHN.data[1];
                    var hs_sat26DbHM = new $hs.Thunk();
                    hs_sat26DbHM.evaluateOnce = function () {
                        return hs_initzq26DbD6.hscall(hs_zz26DbD4, hs_zzs26DbD5);
                    };
                    var $res = new $hs.Data(2);
                    $res.data = [hs_ds126DbD3, hs_sat26DbHM];
                    return $res;
                }
            };
            return hs_initzq26DbD6.hscall(hs_x26DbD8, hs_xs26DbD9);
        }
    };
    this.hs_last.evaluate = function (hs_ds26DbDb) {
        var hs_wild26DbHR = hs_ds26DbDb;
        if (hs_ds26DbDb.notEvaluated) {
            hs_wild26DbHR = hs_ds26DbDb.hscall();
        }
        switch (hs_wild26DbHR.tag) {
        case 1:
            var hs_sat26DbHS = new $hs.Thunk();
            hs_sat26DbHS.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("last\x00");
            };
            return $hs.modules.GHCziList.hs_errorEmptyList.hscall(hs_sat26DbHS);
        case 2:
            var hs_x26DbDr = hs_wild26DbHR.data[0];
            var hs_xs26DbDs = hs_wild26DbHR.data[1];
            var hs_lastzq26DbDq = new $hs.Func(2);
            hs_lastzq26DbDq.evaluate = function (hs_y26DbDl, hs_ds126DbDj) {
                var hs_wild126DbHQ = hs_ds126DbDj;
                if (hs_ds126DbDj.notEvaluated) {
                    hs_wild126DbHQ = hs_ds126DbDj.hscall();
                }
                switch (hs_wild126DbHQ.tag) {
                case 1:
                    if (hs_y26DbDl.notEvaluated) {
                        return hs_y26DbDl.hscall();
                    } else {
                        return hs_y26DbDl;
                    }
                case 2:
                    var hs_y126DbDo = hs_wild126DbHQ.data[0];
                    var hs_ys26DbDp = hs_wild126DbHQ.data[1];
                    return hs_lastzq26DbDq.hscall(hs_y126DbDo, hs_ys26DbDp);
                }
            };
            return hs_lastzq26DbDq.hscall(hs_x26DbDr, hs_xs26DbDs);
        }
    };
    this.hs_tail.evaluate = function (hs_ds26DbDu) {
        var hs_wild26DbHU = hs_ds26DbDu;
        if (hs_ds26DbDu.notEvaluated) {
            hs_wild26DbHU = hs_ds26DbDu.hscall();
        }
        switch (hs_wild26DbHU.tag) {
        case 1:
            var hs_sat26DbHV = new $hs.Thunk();
            hs_sat26DbHV.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("tail\x00");
            };
            return $hs.modules.GHCziList.hs_errorEmptyList.hscall(hs_sat26DbHV);
        case 2:
            var hs_xs26DbDz = hs_wild26DbHU.data[1];
            if (hs_xs26DbDz.notEvaluated) {
                return hs_xs26DbDz.hscall();
            } else {
                return hs_xs26DbDz;
            }
        }
    };
    hs_badHead25roXG.evaluateOnce = function () {
        var hs_sat26DbHW = new $hs.Thunk();
        hs_sat26DbHW.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("head\x00");
        };
        return $hs.modules.GHCziList.hs_errorEmptyList.hscall(hs_sat26DbHW);
    };
    this.hs_head.evaluate = function (hs_ds26DbDC) {
        var hs_wild26DbHY = hs_ds26DbDC;
        if (hs_ds26DbDC.notEvaluated) {
            hs_wild26DbHY = hs_ds26DbDC.hscall();
        }
        switch (hs_wild26DbHY.tag) {
        case 1:
            if (hs_badHead25roXG.notEvaluated) {
                return hs_badHead25roXG.hscall();
            } else {
                return hs_badHead25roXG;
            }
        case 2:
            var hs_x26DbDG = hs_wild26DbHY.data[0];
            if (hs_x26DbDG.notEvaluated) {
                return hs_x26DbDG.hscall();
            } else {
                return hs_x26DbDG;
            }
        }
    };
    this.hs_zzipWith.evaluate = function (hs_f26DbDU, hs_ds26DbDK, hs_ds126DbDO) {
        var hs_wild26DbI1 = hs_ds26DbDK;
        if (hs_ds26DbDK.notEvaluated) {
            hs_wild26DbI1 = hs_ds26DbDK.hscall();
        }
        switch (hs_wild26DbI1.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_a26DbDS = hs_wild26DbI1.data[0];
            var hs_as26DbDW = hs_wild26DbI1.data[1];
            var hs_wild126DbI0 = hs_ds126DbDO;
            if (hs_ds126DbDO.notEvaluated) {
                hs_wild126DbI0 = hs_ds126DbDO.hscall();
            }
            switch (hs_wild126DbI0.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_b26DbDT = hs_wild126DbI0.data[0];
                var hs_bs26DbDX = hs_wild126DbI0.data[1];
                var hs_sat26DbI2 = new $hs.Thunk();
                hs_sat26DbI2.evaluateOnce = function () {
                    return $hs.modules.GHCziList.hs_zzipWith.hscall(hs_f26DbDU, hs_as26DbDW, hs_bs26DbDX);
                };
                var hs_sat26DbHZ = new $hs.Thunk();
                hs_sat26DbHZ.evaluateOnce = function () {
                    return hs_f26DbDU.hscall(hs_a26DbDS, hs_b26DbDT);
                };
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26DbHZ, hs_sat26DbI2];
                return $res;
            }
        }
    };
    hs_foldr225roYn.evaluate = function (hs_zuk26DbEq, hs_zz26DbE9, hs_ds26DbE7, hs_zuys26DbEc) {
        var hs_fail26DbE6 = new $hs.Func(1);
        hs_fail26DbE6.evaluate = function (hs_ds126DbE5) {
            return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("/home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/List.lhs:(612,1)-(614,51)|function foldr2\x00");
        };
        var hs_wild26DbEg = hs_ds26DbE7;
        if (hs_ds26DbE7.notEvaluated) {
            hs_wild26DbEg = hs_ds26DbE7.hscall();
        }
        switch (hs_wild26DbEg.tag) {
        case 1:
            if (hs_zz26DbE9.notEvaluated) {
                return hs_zz26DbE9.hscall();
            } else {
                return hs_zz26DbE9;
            }
        case 2:
            var hs_wild126DbEk = hs_zuys26DbEc;
            if (hs_zuys26DbEc.notEvaluated) {
                hs_wild126DbEk = hs_zuys26DbEc.hscall();
            }
            switch (hs_wild126DbEk.tag) {
            case 1:
                if (hs_zz26DbE9.notEvaluated) {
                    return hs_zz26DbE9.hscall();
                } else {
                    return hs_zz26DbE9;
                }
            case 2:
                var hs_wild226DbI5 = hs_wild26DbEg;
                if (hs_wild26DbEg.notEvaluated) {
                    hs_wild226DbI5 = hs_wild26DbEg.hscall();
                }
                switch (hs_wild226DbI5.tag) {
                case 1:
                    return hs_fail26DbE6.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                case 2:
                    var hs_x26DbEo = hs_wild226DbI5.data[0];
                    var hs_xs26DbEr = hs_wild226DbI5.data[1];
                    var hs_wild326DbI4 = hs_wild126DbEk;
                    if (hs_wild126DbEk.notEvaluated) {
                        hs_wild326DbI4 = hs_wild126DbEk.hscall();
                    }
                    switch (hs_wild326DbI4.tag) {
                    case 1:
                        return hs_fail26DbE6.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    case 2:
                        var hs_y26DbEp = hs_wild326DbI4.data[0];
                        var hs_ys26DbEs = hs_wild326DbI4.data[1];
                        var hs_sat26DbI3 = new $hs.Thunk();
                        hs_sat26DbI3.evaluateOnce = function () {
                            return hs_foldr225roYn.hscall(hs_zuk26DbEq, hs_zz26DbE9, hs_xs26DbEr, hs_ys26DbEs);
                        };
                        return hs_zuk26DbEq.hscall(hs_x26DbEo, hs_y26DbEp, hs_sat26DbI3);
                    }
                }
            }
        }
    };
    this.hs_zzip.evaluate = function (hs_ds26DbEw, hs_ds126DbEA) {
        var hs_wild26DbIc = hs_ds26DbEw;
        if (hs_ds26DbEw.notEvaluated) {
            hs_wild26DbIc = hs_ds26DbEw.hscall();
        }
        switch (hs_wild26DbIc.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_a26DbEE = hs_wild26DbIc.data[0];
            var hs_as26DbEH = hs_wild26DbIc.data[1];
            var hs_wild126DbIb = hs_ds126DbEA;
            if (hs_ds126DbEA.notEvaluated) {
                hs_wild126DbIb = hs_ds126DbEA.hscall();
            }
            switch (hs_wild126DbIb.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_b26DbEF = hs_wild126DbIb.data[0];
                var hs_bs26DbEI = hs_wild126DbIb.data[1];
                var hs_sat26DbId = new $hs.Thunk();
                hs_sat26DbId.evaluateOnce = function () {
                    return $hs.modules.GHCziList.hs_zzip.hscall(hs_as26DbEH, hs_bs26DbEI);
                };
                var hs_sat26DbIa = new $hs.Data(1);
                hs_sat26DbIa.data = [hs_a26DbEE, hs_b26DbEF];
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26DbIa, hs_sat26DbId];
                return $res;
            }
        }
    };
    this.hs_filter.evaluate = function (hs_zupred26DbER, hs_ds26DbEM) {
        var hs_wild26DbIf = hs_ds26DbEM;
        if (hs_ds26DbEM.notEvaluated) {
            hs_wild26DbIf = hs_ds26DbEM.hscall();
        }
        switch (hs_wild26DbIf.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_x26DbEQ = hs_wild26DbIf.data[0];
            var hs_xs26DbET = hs_wild26DbIf.data[1];
            var hs_wild126DbIg = hs_zupred26DbER.hscall(hs_x26DbEQ);
            switch (hs_wild126DbIg.tag) {
            case 1:
                return $hs.modules.GHCziList.hs_filter.hscall(hs_zupred26DbER, hs_xs26DbET);
            case 2:
                var hs_sat26DbIe = new $hs.Thunk();
                hs_sat26DbIe.evaluateOnce = function () {
                    return $hs.modules.GHCziList.hs_filter.hscall(hs_zupred26DbER, hs_xs26DbET);
                };
                var $res = new $hs.Data(2);
                $res.data = [hs_x26DbEQ, hs_sat26DbIe];
                return $res;
            }
        }
    };
    this.hs_concat.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_foldr.hscall($hs.modules.GHCziBase.hs_zpzp, $hs.modules.GHCziTypes.hs_ZMZN);
    };
};
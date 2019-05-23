
$hs.modules.GHCziList = new $hs.Module();
$hs.modules.GHCziList.dependencies = ["GHC.Prim", "GHC.Types", "GHC.Base", "GHC.Err", "GHC.Classes", "Control.Exception.Base"];
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
    this.hs_errorEmptyList.evaluate = function (hs_fun26DyQM) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_fun26DyQM);
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
    this.hs_zzipWith3.evaluate = function (hs_zz26DyS4, hs_ds26DyRP, hs_ds126DyRT, hs_ds226DyRX) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_zz26DyS4, hs_ds26DyRP, hs_ds126DyRT, hs_ds226DyRX);
    };
    this.hs_zzip3.notEvaluated = true;
    this.hs_zzip3.evaluate = function (hs_ds26DySo, hs_ds126DySs, hs_ds226DySw) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_ds26DySo, hs_ds126DySs, hs_ds226DySw);
    };
    this.hs_znzn.notEvaluated = true;
    this.hs_znzn.evaluate = function (hs_xs26DyTI, hs_ds26DyTp) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_xs26DyTI, hs_ds26DyTp);
    };
    this.hs_concatMap.notEvaluated = true;
    this.hs_concatMap.evaluate = function (hs_f26DyTL) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_f26DyTL);
    };
    this.hs_lookup.notEvaluated = true;
    this.hs_lookup.evaluate = function (hs_zddEq26DyTY, hs_zukey26DyTZ, hs_ds26DyTQ) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_zddEq26DyTY, hs_zukey26DyTZ, hs_ds26DyTQ);
    };
    this.hs_notElem.notEvaluated = true;
    this.hs_notElem.evaluate = function (hs_zddEq26DyUb, hs_ds26DyUc, hs_ds126DyU7) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_zddEq26DyUb, hs_ds26DyUc, hs_ds126DyU7);
    };
    this.hs_elem.notEvaluated = true;
    this.hs_elem.evaluate = function (hs_zddEq26DyUo, hs_ds26DyUp, hs_ds126DyUk) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_zddEq26DyUo, hs_ds26DyUp, hs_ds126DyUk);
    };
    this.hs_all.notEvaluated = true;
    this.hs_all.evaluate = function (hs_ds26DyUB, hs_ds126DyUw) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_ds26DyUB, hs_ds126DyUw);
    };
    this.hs_any.notEvaluated = true;
    this.hs_any.evaluate = function (hs_ds26DyUM, hs_ds126DyUH) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_ds26DyUM, hs_ds126DyUH);
    };
    this.hs_or.notEvaluated = true;
    this.hs_or.evaluate = function (hs_ds26DyUR) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_ds26DyUR);
    };
    this.hs_and.notEvaluated = true;
    this.hs_and.evaluate = function (hs_ds26DyUZ) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_ds26DyUZ);
    };
    this.hs_reverse.notEvaluated = true;
    this.hs_reverse.evaluate = function (hs_l26DyVj) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_l26DyVj);
    };
    this.hs_break.notEvaluated = true;
    this.hs_break.evaluate = function (hs_ds26DyVr, hs_xs26DyVm) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_ds26DyVr, hs_xs26DyVm);
    };
    this.hs_span.notEvaluated = true;
    this.hs_span.evaluate = function (hs_ds26DyVP, hs_xs26DyVK) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_ds26DyVP, hs_xs26DyVK);
    };
    this.hs_splitAt.notEvaluated = true;
    this.hs_splitAt.evaluate = function (hs_ds26DyW8, hs_ls26DyWE) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_ds26DyW8, hs_ls26DyWE);
    };
    this.hs_drop.notEvaluated = true;
    this.hs_drop.evaluate = function (hs_ds26DyWH, hs_ls26DyWZ) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_ds26DyWH, hs_ls26DyWZ);
    };
    this.hs_takeUIntzuappend.notEvaluated = true;
    this.hs_takeUIntzuappend.evaluate = function (hs_n26DyXi, hs_xs26DyXk, hs_rs26DyXl) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_n26DyXi, hs_xs26DyXk, hs_rs26DyXl);
    };
    this.hs_takeUInt.notEvaluated = true;
    this.hs_takeUInt.evaluate = function (hs_n26DyXB, hs_xs26DyXD) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_n26DyXB, hs_xs26DyXD);
    };
    this.hs_take.notEvaluated = true;
    this.hs_take.evaluate = function (hs_eta26DyYd, hs_eta126DyYh) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_eta26DyYd, hs_eta126DyYh);
    };
    this.hs_dropWhile.notEvaluated = true;
    this.hs_dropWhile.evaluate = function (hs_ds26DyYp, hs_ds126DyYk) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_ds26DyYp, hs_ds126DyYk);
    };
    this.hs_takeWhile.notEvaluated = true;
    this.hs_takeWhile.evaluate = function (hs_ds26DyYA, hs_ds126DyYv) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_ds26DyYA, hs_ds126DyYv);
    };
    this.hs_cycle.notEvaluated = true;
    this.hs_cycle.evaluate = function (hs_ds26DyYF) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_ds26DyYF);
    };
    this.hs_repeat.notEvaluated = true;
    this.hs_repeat.evaluate = function (hs_eta26DyYV) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_eta26DyYV);
    };
    this.hs_replicate.notEvaluated = true;
    this.hs_replicate.evaluate = function (hs_eta26DyYZ, hs_eta126DyZ5) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_eta26DyYZ, hs_eta126DyZ5);
    };
    this.hs_iterate.notEvaluated = true;
    this.hs_iterate.evaluate = function (hs_f26DyZj, hs_x26DyZi) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_f26DyZj, hs_x26DyZi);
    };
    this.hs_scanr1.notEvaluated = true;
    this.hs_scanr1.evaluate = function (hs_ds26DyZy, hs_ds126DyZo) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_ds26DyZy, hs_ds126DyZo);
    };
    this.hs_scanr.notEvaluated = true;
    this.hs_scanr.evaluate = function (hs_ds26Dz00, hs_q026DyZW, hs_ds126DyZU) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_ds26Dz00, hs_q026DyZW, hs_ds126DyZU);
    };
    this.hs_foldr1.notEvaluated = true;
    this.hs_foldr1.evaluate = function (hs_ds26Dz0w, hs_ds126Dz0m) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_ds26Dz0w, hs_ds126Dz0m);
    };
    this.hs_scanl.notEvaluated = true;
    this.hs_scanl.evaluate = function (hs_f26Dz0H, hs_q26Dz0C, hs_ls26Dz0D) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_f26Dz0H, hs_q26Dz0C, hs_ls26Dz0D);
    };
    this.hs_scanl1.notEvaluated = true;
    this.hs_scanl1.evaluate = function (hs_f26Dz0S, hs_ds26Dz0O) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_f26Dz0S, hs_ds26Dz0O);
    };
    this.hs_foldl.notEvaluated = true;
    this.hs_foldl.evaluate = function (hs_f26Dz17, hs_zz026Dz1b, hs_xs026Dz1c) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_f26Dz17, hs_zz026Dz1b, hs_xs026Dz1c);
    };
    this.hs_length.notEvaluated = true;
    this.hs_length.evaluate = function (hs_l26Dz1y) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_l26Dz1y);
    };
    this.hs_null.notEvaluated = true;
    this.hs_null.evaluate = function (hs_ds26Dz1A) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_ds26Dz1A);
    };
    this.hs_init.notEvaluated = true;
    this.hs_init.evaluate = function (hs_ds26Dz1F) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_ds26Dz1F);
    };
    this.hs_last.notEvaluated = true;
    this.hs_last.evaluate = function (hs_ds26Dz1Z) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_ds26Dz1Z);
    };
    this.hs_tail.notEvaluated = true;
    this.hs_tail.evaluate = function (hs_ds26Dz2i) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_ds26Dz2i);
    };
    this.hs_head.notEvaluated = true;
    this.hs_head.evaluate = function (hs_ds26Dz2q) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_ds26Dz2q);
    };
    this.hs_zzipWith.notEvaluated = true;
    this.hs_zzipWith.evaluate = function (hs_f26Dz2I, hs_ds26Dz2y, hs_ds126Dz2C) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_f26Dz2I, hs_ds26Dz2y, hs_ds126Dz2C);
    };
    this.hs_zzip.notEvaluated = true;
    this.hs_zzip.evaluate = function (hs_ds26Dz3k, hs_ds126Dz3o) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_ds26Dz3k, hs_ds126Dz3o);
    };
    this.hs_filter.notEvaluated = true;
    this.hs_filter.evaluate = function (hs_zupred26Dz3F, hs_ds26Dz3A) {
        $hs.modules.GHCziList.loadDependencies();
        return this.evaluate(hs_zupred26Dz3F, hs_ds26Dz3A);
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
    var hs_prelzulistzustr25rqjC = new $hs.Thunk();
    var hs_zzipWithFB25rqjs = new $hs.Func(5);
    var hs_zzipFB25rqjm = new $hs.Func(4);
    var hs_foldr2zuright25rqjk = new $hs.Func(5);
    var hs_foldr2zuleft25rqji = new $hs.Func(5);
    var hs_takezuunsafezuUIntzuappend25rqiM = new $hs.Func(3);
    var hs_takezuunsafezuUInt25rqiI = new $hs.Func(2);
    var hs_takeFB25rqiC = new $hs.Func(5);
    var hs_takeConst25rqiA = new $hs.Func(2);
    var hs_takeFoldr25rqiy = new $hs.Func(2);
    var hs_repeatFB25rqio = new $hs.Func(2);
    var hs_iterateFB25rqik = new $hs.Func(3);
    var hs_filterFB25rqi4 = new $hs.Func(4);
    var hs_badHead25rqhS = new $hs.Thunk();
    var hs_foldr225rqjg = new $hs.Func(4);
    hs_prelzulistzustr25rqjC.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Prelude.\x00");
    };
    this.hs_errorEmptyList.evaluate = function (hs_fun26DyQM) {
        var hs_sat26Dz3L = new $hs.Thunk();
        hs_sat26Dz3L.evaluateOnce = function () {
            var hs_sat26Dz3J = new $hs.Thunk();
            hs_sat26Dz3J.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall(": empty list\x00");
            };
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_fun26DyQM, hs_sat26Dz3J);
        };
        var hs_sat26Dz3K = $hs.modules.GHCziBase.hs_zpzp.hscall(hs_prelzulistzustr25rqjC, hs_sat26Dz3L);
        return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26Dz3K);
    };
    this.hs_unzzip3.evaluateOnce = function () {
        var hs_sat26Dz3P = new $hs.Data(1);
        hs_sat26Dz3P.data = [$hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26Dz43 = new $hs.Func(2);
        hs_sat26Dz43.evaluate = function (hs_ds26DyQS, hs_ds126DyQY) {
            var hs_wild26Dz3O = hs_ds26DyQS;
            if (hs_ds26DyQS.notEvaluated) {
                hs_wild26Dz3O = hs_ds26DyQS.hscall();
            }
            var hs_a26DyQX = hs_wild26Dz3O.data[0];
            var hs_b26DyR6 = hs_wild26Dz3O.data[1];
            var hs_c26DyRe = hs_wild26Dz3O.data[2];
            var hs_sat26Dz3R = new $hs.Thunk();
            hs_sat26Dz3R.evaluateOnce = function () {
                var hs_wild126Dz3N = hs_ds126DyQY;
                if (hs_ds126DyQY.notEvaluated) {
                    hs_wild126Dz3N = hs_ds126DyQY.hscall();
                }
                var hs_cs26DyRj = hs_wild126Dz3N.data[2];
                if (hs_cs26DyRj.notEvaluated) {
                    return hs_cs26DyRj.hscall();
                } else {
                    return hs_cs26DyRj;
                }
            };
            var hs_sat26Dz3U = new $hs.Data(2);
            hs_sat26Dz3U.data = [hs_c26DyRe, hs_sat26Dz3R];
            var hs_sat26Dz3W = new $hs.Thunk();
            hs_sat26Dz3W.evaluateOnce = function () {
                var hs_wild126Dz3T = hs_ds126DyQY;
                if (hs_ds126DyQY.notEvaluated) {
                    hs_wild126Dz3T = hs_ds126DyQY.hscall();
                }
                var hs_bs26DyRb = hs_wild126Dz3T.data[1];
                if (hs_bs26DyRb.notEvaluated) {
                    return hs_bs26DyRb.hscall();
                } else {
                    return hs_bs26DyRb;
                }
            };
            var hs_sat26Dz3Y = new $hs.Data(2);
            hs_sat26Dz3Y.data = [hs_b26DyR6, hs_sat26Dz3W];
            var hs_sat26Dz41 = new $hs.Thunk();
            hs_sat26Dz41.evaluateOnce = function () {
                var hs_wild126Dz3X = hs_ds126DyQY;
                if (hs_ds126DyQY.notEvaluated) {
                    hs_wild126Dz3X = hs_ds126DyQY.hscall();
                }
                var hs_as26DyR3 = hs_wild126Dz3X.data[0];
                if (hs_as26DyR3.notEvaluated) {
                    return hs_as26DyR3.hscall();
                } else {
                    return hs_as26DyR3;
                }
            };
            var hs_sat26Dz42 = new $hs.Data(2);
            hs_sat26Dz42.data = [hs_a26DyQX, hs_sat26Dz41];
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26Dz42, hs_sat26Dz3Y, hs_sat26Dz3U];
            return $res;
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26Dz43, hs_sat26Dz3P);
    };
    this.hs_unzzip.evaluateOnce = function () {
        var hs_sat26Dz47 = new $hs.Data(1);
        hs_sat26Dz47.data = [$hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26Dz4e = new $hs.Func(2);
        hs_sat26Dz4e.evaluate = function (hs_ds26DyRq, hs_ds126DyRv) {
            var hs_wild26Dz46 = hs_ds26DyRq;
            if (hs_ds26DyRq.notEvaluated) {
                hs_wild26Dz46 = hs_ds26DyRq.hscall();
            }
            var hs_a26DyRu = hs_wild26Dz46.data[0];
            var hs_b26DyRC = hs_wild26Dz46.data[1];
            var hs_sat26Dz48 = new $hs.Thunk();
            hs_sat26Dz48.evaluateOnce = function () {
                var hs_wild126Dz45 = hs_ds126DyRv;
                if (hs_ds126DyRv.notEvaluated) {
                    hs_wild126Dz45 = hs_ds126DyRv.hscall();
                }
                var hs_bs26DyRG = hs_wild126Dz45.data[1];
                if (hs_bs26DyRG.notEvaluated) {
                    return hs_bs26DyRG.hscall();
                } else {
                    return hs_bs26DyRG;
                }
            };
            var hs_sat26Dz4a = new $hs.Data(2);
            hs_sat26Dz4a.data = [hs_b26DyRC, hs_sat26Dz48];
            var hs_sat26Dz4c = new $hs.Thunk();
            hs_sat26Dz4c.evaluateOnce = function () {
                var hs_wild126Dz49 = hs_ds126DyRv;
                if (hs_ds126DyRv.notEvaluated) {
                    hs_wild126Dz49 = hs_ds126DyRv.hscall();
                }
                var hs_as26DyRz = hs_wild126Dz49.data[0];
                if (hs_as26DyRz.notEvaluated) {
                    return hs_as26DyRz.hscall();
                } else {
                    return hs_as26DyRz;
                }
            };
            var hs_sat26Dz4d = new $hs.Data(2);
            hs_sat26Dz4d.data = [hs_a26DyRu, hs_sat26Dz4c];
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26Dz4d, hs_sat26Dz4a];
            return $res;
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26Dz4e, hs_sat26Dz47);
    };
    this.hs_zzipWith3.evaluate = function (hs_zz26DyS4, hs_ds26DyRP, hs_ds126DyRT, hs_ds226DyRX) {
        var hs_wild26Dz4f = hs_ds26DyRP;
        if (hs_ds26DyRP.notEvaluated) {
            hs_wild26Dz4f = hs_ds26DyRP.hscall();
        }
        switch (hs_wild26Dz4f.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_a26DyS1 = hs_wild26Dz4f.data[0];
            var hs_as26DyS6 = hs_wild26Dz4f.data[1];
            var hs_wild126Dz4g = hs_ds126DyRT;
            if (hs_ds126DyRT.notEvaluated) {
                hs_wild126Dz4g = hs_ds126DyRT.hscall();
            }
            switch (hs_wild126Dz4g.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_b26DyS2 = hs_wild126Dz4g.data[0];
                var hs_bs26DyS7 = hs_wild126Dz4g.data[1];
                var hs_wild226Dz4h = hs_ds226DyRX;
                if (hs_ds226DyRX.notEvaluated) {
                    hs_wild226Dz4h = hs_ds226DyRX.hscall();
                }
                switch (hs_wild226Dz4h.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_c26DyS3 = hs_wild226Dz4h.data[0];
                    var hs_cs26DyS8 = hs_wild226Dz4h.data[1];
                    var hs_sat26Dz4i = new $hs.Thunk();
                    hs_sat26Dz4i.evaluateOnce = function () {
                        return $hs.modules.GHCziList.hs_zzipWith3.hscall(hs_zz26DyS4, hs_as26DyS6, hs_bs26DyS7, hs_cs26DyS8);
                    };
                    var hs_sat26Dz4j = new $hs.Thunk();
                    hs_sat26Dz4j.evaluateOnce = function () {
                        return hs_zz26DyS4.hscall(hs_a26DyS1, hs_b26DyS2, hs_c26DyS3);
                    };
                    var $res = new $hs.Data(2);
                    $res.data = [hs_sat26Dz4j, hs_sat26Dz4i];
                    return $res;
                }
            }
        }
    };
    hs_zzipWithFB25rqjs.evaluate = function (hs_eta26DySi, hs_eta126DySh, hs_x26DySf, hs_y26DySg, hs_r26DySk) {
        var hs_sat26Dz4k = new $hs.Thunk();
        hs_sat26Dz4k.evaluateOnce = function () {
            return hs_eta126DySh.hscall(hs_x26DySf, hs_y26DySg);
        };
        return hs_eta26DySi.hscall(hs_sat26Dz4k, hs_r26DySk);
    };
    this.hs_zzip3.evaluate = function (hs_ds26DySo, hs_ds126DySs, hs_ds226DySw) {
        var hs_wild26Dz4l = hs_ds26DySo;
        if (hs_ds26DySo.notEvaluated) {
            hs_wild26Dz4l = hs_ds26DySo.hscall();
        }
        switch (hs_wild26Dz4l.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_a26DySA = hs_wild26Dz4l.data[0];
            var hs_as26DySE = hs_wild26Dz4l.data[1];
            var hs_wild126Dz4m = hs_ds126DySs;
            if (hs_ds126DySs.notEvaluated) {
                hs_wild126Dz4m = hs_ds126DySs.hscall();
            }
            switch (hs_wild126Dz4m.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_b26DySB = hs_wild126Dz4m.data[0];
                var hs_bs26DySF = hs_wild126Dz4m.data[1];
                var hs_wild226Dz4n = hs_ds226DySw;
                if (hs_ds226DySw.notEvaluated) {
                    hs_wild226Dz4n = hs_ds226DySw.hscall();
                }
                switch (hs_wild226Dz4n.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_c26DySC = hs_wild226Dz4n.data[0];
                    var hs_cs26DySG = hs_wild226Dz4n.data[1];
                    var hs_sat26Dz4o = new $hs.Thunk();
                    hs_sat26Dz4o.evaluateOnce = function () {
                        return $hs.modules.GHCziList.hs_zzip3.hscall(hs_as26DySE, hs_bs26DySF, hs_cs26DySG);
                    };
                    var hs_sat26Dz4p = new $hs.Data(1);
                    hs_sat26Dz4p.data = [hs_a26DySA, hs_b26DySB, hs_c26DySC];
                    var $res = new $hs.Data(2);
                    $res.data = [hs_sat26Dz4p, hs_sat26Dz4o];
                    return $res;
                }
            }
        }
    };
    hs_zzipFB25rqjm.evaluate = function (hs_eta26DySO, hs_x26DySM, hs_y26DySN, hs_r26DySQ) {
        var hs_sat26Dz4q = new $hs.Data(1);
        hs_sat26Dz4q.data = [hs_x26DySM, hs_y26DySN];
        return hs_eta26DySO.hscall(hs_sat26Dz4q, hs_r26DySQ);
    };
    hs_foldr2zuright25rqjk.evaluate = function (hs_zuk26DyT5, hs_zz26DySY, hs_zuy26DyT2, hs_zur26DyT4, hs_ds26DySW) {
        var hs_wild26Dz4r = hs_ds26DySW;
        if (hs_ds26DySW.notEvaluated) {
            hs_wild26Dz4r = hs_ds26DySW.hscall();
        }
        switch (hs_wild26Dz4r.tag) {
        case 1:
            if (hs_zz26DySY.notEvaluated) {
                return hs_zz26DySY.hscall();
            } else {
                return hs_zz26DySY;
            }
        case 2:
            var hs_x26DyT1 = hs_wild26Dz4r.data[0];
            var hs_xs26DyT3 = hs_wild26Dz4r.data[1];
            var hs_sat26Dz4s = new $hs.Thunk();
            hs_sat26Dz4s.evaluateOnce = function () {
                return hs_zur26DyT4.hscall(hs_xs26DyT3);
            };
            return hs_zuk26DyT5.hscall(hs_x26DyT1, hs_zuy26DyT2, hs_sat26Dz4s);
        }
    };
    hs_foldr2zuleft25rqji.evaluate = function (hs_zuk26DyTl, hs_zz26DyTe, hs_zux26DyTh, hs_zur26DyTk, hs_ds26DyTc) {
        var hs_wild26Dz4t = hs_ds26DyTc;
        if (hs_ds26DyTc.notEvaluated) {
            hs_wild26Dz4t = hs_ds26DyTc.hscall();
        }
        switch (hs_wild26Dz4t.tag) {
        case 1:
            if (hs_zz26DyTe.notEvaluated) {
                return hs_zz26DyTe.hscall();
            } else {
                return hs_zz26DyTe;
            }
        case 2:
            var hs_y26DyTi = hs_wild26Dz4t.data[0];
            var hs_ys26DyTj = hs_wild26Dz4t.data[1];
            var hs_sat26Dz4u = new $hs.Thunk();
            hs_sat26Dz4u.evaluateOnce = function () {
                return hs_zur26DyTk.hscall(hs_ys26DyTj);
            };
            return hs_zuk26DyTl.hscall(hs_zux26DyTh, hs_y26DyTi, hs_sat26Dz4u);
        }
    };
    this.hs_znzn.evaluate = function (hs_xs26DyTI, hs_ds26DyTp) {
        var hs_wild26Dz4x = hs_ds26DyTp;
        if (hs_ds26DyTp.notEvaluated) {
            hs_wild26Dz4x = hs_ds26DyTp.hscall();
        }
        var hs_n026DyTG = hs_wild26Dz4x.data[0];
        var hs_sub26DyTD = new $hs.Func(2);
        hs_sub26DyTD.evaluate = function (hs_ds126DyTv, hs_ds226DyTA) {
            var hs_wild126Dz4w = hs_ds126DyTv;
            if (hs_ds126DyTv.notEvaluated) {
                hs_wild126Dz4w = hs_ds126DyTv.hscall();
            }
            switch (hs_wild126Dz4w.tag) {
            case 1:
                var hs_sat26Dz4v = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Prelude.(!!): index too large\n\x00");
                return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26Dz4v);
            case 2:
                var hs_y26DyTF = hs_wild126Dz4w.data[0];
                var hs_ys26DyTC = hs_wild126Dz4w.data[1];
                var hs_wild226Dz4z = hs_ds226DyTA == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                switch (hs_wild226Dz4z.tag) {
                case 1:
                    var hs_sat26Dz4y = ($hs.Int.addCarry(hs_ds226DyTA, ~1, 1))[0];
                    return hs_sub26DyTD.hscall(hs_ys26DyTC, hs_sat26Dz4y);
                case 2:
                    if (hs_y26DyTF.notEvaluated) {
                        return hs_y26DyTF.hscall();
                    } else {
                        return hs_y26DyTF;
                    }
                }
            }
        };
        var hs_wild126Dz4A = hs_n026DyTG < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild126Dz4A.tag) {
        case 1:
            return hs_sub26DyTD.hscall(hs_xs26DyTI, hs_n026DyTG);
        case 2:
            var hs_sat26Dz4B = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Prelude.(!!): negative index\n\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26Dz4B);
        }
    };
    this.hs_concatMap.evaluate = function (hs_f26DyTL) {
        var hs_sat26Dz4C = new $hs.Thunk();
        hs_sat26Dz4C.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.GHCziBase.hs_zpzp, hs_f26DyTL);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26Dz4C, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_lookup.evaluate = function (hs_zddEq26DyTY, hs_zukey26DyTZ, hs_ds26DyTQ) {
        var hs_wild26Dz4D = hs_ds26DyTQ;
        if (hs_ds26DyTQ.notEvaluated) {
            hs_wild26Dz4D = hs_ds26DyTQ.hscall();
        }
        switch (hs_wild26Dz4D.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_ds126DyTU = hs_wild26Dz4D.data[0];
            var hs_xys26DyU2 = hs_wild26Dz4D.data[1];
            var hs_wild126Dz4F = hs_ds126DyTU;
            if (hs_ds126DyTU.notEvaluated) {
                hs_wild126Dz4F = hs_ds126DyTU.hscall();
            }
            var hs_x26DyU0 = hs_wild126Dz4F.data[0];
            var hs_y26DyU3 = hs_wild126Dz4F.data[1];
            var hs_wild226Dz4E = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26DyTY, hs_zukey26DyTZ, hs_x26DyU0);
            switch (hs_wild226Dz4E.tag) {
            case 1:
                return $hs.modules.GHCziList.hs_lookup.hscall(hs_zddEq26DyTY, hs_zukey26DyTZ, hs_xys26DyU2);
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [hs_y26DyU3];
                return $res;
            }
        }
    };
    this.hs_notElem.evaluate = function (hs_zddEq26DyUb, hs_ds26DyUc, hs_ds126DyU7) {
        var hs_wild26Dz4G = hs_ds126DyU7;
        if (hs_ds126DyU7.notEvaluated) {
            hs_wild26Dz4G = hs_ds126DyU7.hscall();
        }
        switch (hs_wild26Dz4G.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_y26DyUd = hs_wild26Dz4G.data[0];
            var hs_ys26DyUf = hs_wild26Dz4G.data[1];
            var hs_sat26Dz4H = new $hs.Thunk();
            hs_sat26Dz4H.evaluateOnce = function () {
                return $hs.modules.GHCziList.hs_notElem.hscall(hs_zddEq26DyUb, hs_ds26DyUc, hs_ys26DyUf);
            };
            var hs_sat26Dz4I = new $hs.Thunk();
            hs_sat26Dz4I.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zsze.hscall(hs_zddEq26DyUb, hs_ds26DyUc, hs_y26DyUd);
            };
            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dz4I, hs_sat26Dz4H);
        }
    };
    this.hs_elem.evaluate = function (hs_zddEq26DyUo, hs_ds26DyUp, hs_ds126DyUk) {
        var hs_wild26Dz4J = hs_ds126DyUk;
        if (hs_ds126DyUk.notEvaluated) {
            hs_wild26Dz4J = hs_ds126DyUk.hscall();
        }
        switch (hs_wild26Dz4J.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_y26DyUq = hs_wild26Dz4J.data[0];
            var hs_ys26DyUs = hs_wild26Dz4J.data[1];
            var hs_sat26Dz4K = new $hs.Thunk();
            hs_sat26Dz4K.evaluateOnce = function () {
                return $hs.modules.GHCziList.hs_elem.hscall(hs_zddEq26DyUo, hs_ds26DyUp, hs_ys26DyUs);
            };
            var hs_sat26Dz4L = new $hs.Thunk();
            hs_sat26Dz4L.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26DyUo, hs_ds26DyUp, hs_y26DyUq);
            };
            return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26Dz4L, hs_sat26Dz4K);
        }
    };
    this.hs_all.evaluate = function (hs_ds26DyUB, hs_ds126DyUw) {
        var hs_wild26Dz4M = hs_ds126DyUw;
        if (hs_ds126DyUw.notEvaluated) {
            hs_wild26Dz4M = hs_ds126DyUw.hscall();
        }
        switch (hs_wild26Dz4M.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_x26DyUA = hs_wild26Dz4M.data[0];
            var hs_xs26DyUD = hs_wild26Dz4M.data[1];
            var hs_sat26Dz4N = new $hs.Thunk();
            hs_sat26Dz4N.evaluateOnce = function () {
                return $hs.modules.GHCziList.hs_all.hscall(hs_ds26DyUB, hs_xs26DyUD);
            };
            var hs_sat26Dz4O = new $hs.Thunk();
            hs_sat26Dz4O.evaluateOnce = function () {
                return hs_ds26DyUB.hscall(hs_x26DyUA);
            };
            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dz4O, hs_sat26Dz4N);
        }
    };
    this.hs_any.evaluate = function (hs_ds26DyUM, hs_ds126DyUH) {
        var hs_wild26Dz4P = hs_ds126DyUH;
        if (hs_ds126DyUH.notEvaluated) {
            hs_wild26Dz4P = hs_ds126DyUH.hscall();
        }
        switch (hs_wild26Dz4P.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_x26DyUL = hs_wild26Dz4P.data[0];
            var hs_xs26DyUO = hs_wild26Dz4P.data[1];
            var hs_sat26Dz4Q = new $hs.Thunk();
            hs_sat26Dz4Q.evaluateOnce = function () {
                return $hs.modules.GHCziList.hs_any.hscall(hs_ds26DyUM, hs_xs26DyUO);
            };
            var hs_sat26Dz4R = new $hs.Thunk();
            hs_sat26Dz4R.evaluateOnce = function () {
                return hs_ds26DyUM.hscall(hs_x26DyUL);
            };
            return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26Dz4R, hs_sat26Dz4Q);
        }
    };
    this.hs_or.evaluate = function (hs_ds26DyUR) {
        var hs_wild26Dz4S = hs_ds26DyUR;
        if (hs_ds26DyUR.notEvaluated) {
            hs_wild26Dz4S = hs_ds26DyUR.hscall();
        }
        switch (hs_wild26Dz4S.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_x26DyUV = hs_wild26Dz4S.data[0];
            var hs_xs26DyUW = hs_wild26Dz4S.data[1];
            var hs_sat26Dz4T = new $hs.Thunk();
            hs_sat26Dz4T.evaluateOnce = function () {
                return $hs.modules.GHCziList.hs_or.hscall(hs_xs26DyUW);
            };
            return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_x26DyUV, hs_sat26Dz4T);
        }
    };
    this.hs_and.evaluate = function (hs_ds26DyUZ) {
        var hs_wild26Dz4U = hs_ds26DyUZ;
        if (hs_ds26DyUZ.notEvaluated) {
            hs_wild26Dz4U = hs_ds26DyUZ.hscall();
        }
        switch (hs_wild26Dz4U.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_x26DyV3 = hs_wild26Dz4U.data[0];
            var hs_xs26DyV4 = hs_wild26Dz4U.data[1];
            var hs_sat26Dz4V = new $hs.Thunk();
            hs_sat26Dz4V.evaluateOnce = function () {
                return $hs.modules.GHCziList.hs_and.hscall(hs_xs26DyV4);
            };
            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_x26DyV3, hs_sat26Dz4V);
        }
    };
    this.hs_reverse.evaluate = function (hs_l26DyVj) {
        var hs_rev26DyVh = new $hs.Func(2);
        hs_rev26DyVh.evaluate = function (hs_ds26DyVa, hs_a26DyVc) {
            var hs_wild26Dz4W = hs_ds26DyVa;
            if (hs_ds26DyVa.notEvaluated) {
                hs_wild26Dz4W = hs_ds26DyVa.hscall();
            }
            switch (hs_wild26Dz4W.tag) {
            case 1:
                if (hs_a26DyVc.notEvaluated) {
                    return hs_a26DyVc.hscall();
                } else {
                    return hs_a26DyVc;
                }
            case 2:
                var hs_x26DyVg = hs_wild26Dz4W.data[0];
                var hs_xs26DyVf = hs_wild26Dz4W.data[1];
                var hs_sat26Dz4X = new $hs.Data(2);
                hs_sat26Dz4X.data = [hs_x26DyVg, hs_a26DyVc];
                return hs_rev26DyVh.hscall(hs_xs26DyVf, hs_sat26Dz4X);
            }
        };
        return hs_rev26DyVh.hscall(hs_l26DyVj, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_break.evaluate = function (hs_ds26DyVr, hs_xs26DyVm) {
        var hs_wild26DyVH = hs_xs26DyVm;
        if (hs_xs26DyVm.notEvaluated) {
            hs_wild26DyVH = hs_xs26DyVm.hscall();
        }
        switch (hs_wild26DyVH.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [$hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN];
            return $res;
        case 2:
            var hs_x26DyVq = hs_wild26DyVH.data[0];
            var hs_xszq26DyVu = hs_wild26DyVH.data[1];
            var hs_wild126Dz4Y = hs_ds26DyVr.hscall(hs_x26DyVq);
            switch (hs_wild126Dz4Y.tag) {
            case 1:
                var hs_ds126DyVv = new $hs.Thunk();
                hs_ds126DyVv.evaluateOnce = function () {
                    return $hs.modules.GHCziList.hs_break.hscall(hs_ds26DyVr, hs_xszq26DyVu);
                };
                var hs_sat26Dz52 = new $hs.Thunk();
                hs_sat26Dz52.evaluateOnce = function () {
                    var hs_wild226Dz50 = hs_ds126DyVv;
                    if (hs_ds126DyVv.notEvaluated) {
                        hs_wild226Dz50 = hs_ds126DyVv.hscall();
                    }
                    var hs_zzs26DyVF = hs_wild226Dz50.data[1];
                    if (hs_zzs26DyVF.notEvaluated) {
                        return hs_zzs26DyVF.hscall();
                    } else {
                        return hs_zzs26DyVF;
                    }
                };
                var hs_sat26Dz54 = new $hs.Thunk();
                hs_sat26Dz54.evaluateOnce = function () {
                    var hs_wild226Dz51 = hs_ds126DyVv;
                    if (hs_ds126DyVv.notEvaluated) {
                        hs_wild226Dz51 = hs_ds126DyVv.hscall();
                    }
                    var hs_ys26DyVz = hs_wild226Dz51.data[0];
                    if (hs_ys26DyVz.notEvaluated) {
                        return hs_ys26DyVz.hscall();
                    } else {
                        return hs_ys26DyVz;
                    }
                };
                var hs_sat26Dz55 = new $hs.Data(2);
                hs_sat26Dz55.data = [hs_x26DyVq, hs_sat26Dz54];
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26Dz55, hs_sat26Dz52];
                return $res;
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [$hs.modules.GHCziTypes.hs_ZMZN, hs_wild26DyVH];
                return $res;
            }
        }
    };
    this.hs_span.evaluate = function (hs_ds26DyVP, hs_xs26DyVK) {
        var hs_wild26DyVR = hs_xs26DyVK;
        if (hs_xs26DyVK.notEvaluated) {
            hs_wild26DyVR = hs_xs26DyVK.hscall();
        }
        switch (hs_wild26DyVR.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [$hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN];
            return $res;
        case 2:
            var hs_x26DyVO = hs_wild26DyVR.data[0];
            var hs_xszq26DyVT = hs_wild26DyVR.data[1];
            var hs_wild126Dz56 = hs_ds26DyVP.hscall(hs_x26DyVO);
            switch (hs_wild126Dz56.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [$hs.modules.GHCziTypes.hs_ZMZN, hs_wild26DyVR];
                return $res;
            case 2:
                var hs_ds126DyVU = new $hs.Thunk();
                hs_ds126DyVU.evaluateOnce = function () {
                    return $hs.modules.GHCziList.hs_span.hscall(hs_ds26DyVP, hs_xszq26DyVT);
                };
                var hs_sat26Dz5a = new $hs.Thunk();
                hs_sat26Dz5a.evaluateOnce = function () {
                    var hs_wild226Dz58 = hs_ds126DyVU;
                    if (hs_ds126DyVU.notEvaluated) {
                        hs_wild226Dz58 = hs_ds126DyVU.hscall();
                    }
                    var hs_zzs26DyW4 = hs_wild226Dz58.data[1];
                    if (hs_zzs26DyW4.notEvaluated) {
                        return hs_zzs26DyW4.hscall();
                    } else {
                        return hs_zzs26DyW4;
                    }
                };
                var hs_sat26Dz5c = new $hs.Thunk();
                hs_sat26Dz5c.evaluateOnce = function () {
                    var hs_wild226Dz59 = hs_ds126DyVU;
                    if (hs_ds126DyVU.notEvaluated) {
                        hs_wild226Dz59 = hs_ds126DyVU.hscall();
                    }
                    var hs_ys26DyVY = hs_wild226Dz59.data[0];
                    if (hs_ys26DyVY.notEvaluated) {
                        return hs_ys26DyVY.hscall();
                    } else {
                        return hs_ys26DyVY;
                    }
                };
                var hs_sat26Dz5d = new $hs.Data(2);
                hs_sat26Dz5d.data = [hs_x26DyVO, hs_sat26Dz5c];
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26Dz5d, hs_sat26Dz5a];
                return $res;
            }
        }
    };
    this.hs_splitAt.evaluate = function (hs_ds26DyW8, hs_ls26DyWE) {
        var hs_wild26Dz5f = hs_ds26DyW8;
        if (hs_ds26DyW8.notEvaluated) {
            hs_wild26Dz5f = hs_ds26DyW8.hscall();
        }
        var hs_nzh26DyWC = hs_wild26Dz5f.data[0];
        var hs_splitAtzh26DyWm = new $hs.Func(2);
        hs_splitAtzh26DyWm.evaluate = function (hs_ds126DyWe, hs_xs26DyWg) {
            var hs_ds226DyWl = hs_ds126DyWe;
            if (hs_ds126DyWe.notEvaluated) {
                hs_ds226DyWl = hs_ds126DyWe.hscall();
            }
            switch (hs_ds226DyWl) {
            case 0:
                var $res = new $hs.Data(1);
                $res.data = [$hs.modules.GHCziTypes.hs_ZMZN, hs_xs26DyWg];
                return $res;
            default:
                var hs_wild126Dz5e = hs_xs26DyWg;
                if (hs_xs26DyWg.notEvaluated) {
                    hs_wild126Dz5e = hs_xs26DyWg.hscall();
                }
                switch (hs_wild126Dz5e.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [$hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN];
                    return $res;
                case 2:
                    var hs_x26DyWq = hs_wild126Dz5e.data[0];
                    var hs_xs126DyWo = hs_wild126Dz5e.data[1];
                    var hs_ds326DyWp = new $hs.Thunk();
                    hs_ds326DyWp.evaluateOnce = function () {
                        var hs_sat26Dz5g = ($hs.Int.addCarry(hs_ds226DyWl, ~1, 1))[0];
                        return hs_splitAtzh26DyWm.hscall(hs_sat26Dz5g, hs_xs126DyWo);
                    };
                    var hs_sat26Dz5k = new $hs.Thunk();
                    hs_sat26Dz5k.evaluateOnce = function () {
                        var hs_wild226Dz5i = hs_ds326DyWp;
                        if (hs_ds326DyWp.notEvaluated) {
                            hs_wild226Dz5i = hs_ds326DyWp.hscall();
                        }
                        var hs_xszqzq26DyWA = hs_wild226Dz5i.data[1];
                        if (hs_xszqzq26DyWA.notEvaluated) {
                            return hs_xszqzq26DyWA.hscall();
                        } else {
                            return hs_xszqzq26DyWA;
                        }
                    };
                    var hs_sat26Dz5m = new $hs.Thunk();
                    hs_sat26Dz5m.evaluateOnce = function () {
                        var hs_wild226Dz5j = hs_ds326DyWp;
                        if (hs_ds326DyWp.notEvaluated) {
                            hs_wild226Dz5j = hs_ds326DyWp.hscall();
                        }
                        var hs_xszq26DyWu = hs_wild226Dz5j.data[0];
                        if (hs_xszq26DyWu.notEvaluated) {
                            return hs_xszq26DyWu.hscall();
                        } else {
                            return hs_xszq26DyWu;
                        }
                    };
                    var hs_sat26Dz5n = new $hs.Data(2);
                    hs_sat26Dz5n.data = [hs_x26DyWq, hs_sat26Dz5m];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26Dz5n, hs_sat26Dz5k];
                    return $res;
                }
            }
        };
        var hs_wild126Dz5o = hs_nzh26DyWC < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild126Dz5o.tag) {
        case 1:
            return hs_splitAtzh26DyWm.hscall(hs_nzh26DyWC, hs_ls26DyWE);
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [$hs.modules.GHCziTypes.hs_ZMZN, hs_ls26DyWE];
            return $res;
        }
    };
    this.hs_drop.evaluate = function (hs_ds26DyWH, hs_ls26DyWZ) {
        var hs_wild26Dz5q = hs_ds26DyWH;
        if (hs_ds26DyWH.notEvaluated) {
            hs_wild26Dz5q = hs_ds26DyWH.hscall();
        }
        var hs_nzh26DyWX = hs_wild26Dz5q.data[0];
        var hs_dropzh26DyWU = new $hs.Func(2);
        hs_dropzh26DyWU.evaluate = function (hs_ds126DyWN, hs_xs26DyWP) {
            var hs_ds226DyWT = hs_ds126DyWN;
            if (hs_ds126DyWN.notEvaluated) {
                hs_ds226DyWT = hs_ds126DyWN.hscall();
            }
            switch (hs_ds226DyWT) {
            case 0:
                if (hs_xs26DyWP.notEvaluated) {
                    return hs_xs26DyWP.hscall();
                } else {
                    return hs_xs26DyWP;
                }
            default:
                var hs_wild126Dz5p = hs_xs26DyWP;
                if (hs_xs26DyWP.notEvaluated) {
                    hs_wild126Dz5p = hs_xs26DyWP.hscall();
                }
                switch (hs_wild126Dz5p.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_xs126DyWW = hs_wild126Dz5p.data[1];
                    var hs_sat26Dz5r = ($hs.Int.addCarry(hs_ds226DyWT, ~1, 1))[0];
                    return hs_dropzh26DyWU.hscall(hs_sat26Dz5r, hs_xs126DyWW);
                }
            }
        };
        var hs_wild126Dz5t = hs_nzh26DyWX < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild126Dz5t.tag) {
        case 1:
            return hs_dropzh26DyWU.hscall(hs_nzh26DyWX, hs_ls26DyWZ);
        case 2:
            if (hs_ls26DyWZ.notEvaluated) {
                return hs_ls26DyWZ.hscall();
            } else {
                return hs_ls26DyWZ;
            }
        }
    };
    hs_takezuunsafezuUIntzuappend25rqiM.evaluate = function (hs_ds26DyX3, hs_ds126DyX5, hs_rs26DyX7) {
        var hs_ds226DyXb = hs_ds26DyX3;
        if (hs_ds26DyX3.notEvaluated) {
            hs_ds226DyXb = hs_ds26DyX3.hscall();
        }
        switch (hs_ds226DyXb) {
        case 0:
            if (hs_rs26DyX7.notEvaluated) {
                return hs_rs26DyX7.hscall();
            } else {
                return hs_rs26DyX7;
            }
        default:
            var hs_wild26Dz5u = hs_ds126DyX5;
            if (hs_ds126DyX5.notEvaluated) {
                hs_wild26Dz5u = hs_ds126DyX5.hscall();
            }
            switch (hs_wild26Dz5u.tag) {
            case 1:
                if (hs_rs26DyX7.notEvaluated) {
                    return hs_rs26DyX7.hscall();
                } else {
                    return hs_rs26DyX7;
                }
            case 2:
                var hs_x26DyXa = hs_wild26Dz5u.data[0];
                var hs_xs26DyXd = hs_wild26Dz5u.data[1];
                var hs_sat26Dz5w = new $hs.Thunk();
                hs_sat26Dz5w.evaluateOnce = function () {
                    var hs_sat26Dz5v = ($hs.Int.addCarry(hs_ds226DyXb, ~1, 1))[0];
                    return hs_takezuunsafezuUIntzuappend25rqiM.hscall(hs_sat26Dz5v, hs_xs26DyXd, hs_rs26DyX7);
                };
                var $res = new $hs.Data(2);
                $res.data = [hs_x26DyXa, hs_sat26Dz5w];
                return $res;
            }
        }
    };
    this.hs_takeUIntzuappend.evaluate = function (hs_n26DyXi, hs_xs26DyXk, hs_rs26DyXl) {
        var hs_wild26Dz5x = hs_n26DyXi >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26Dz5x.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            return hs_takezuunsafezuUIntzuappend25rqiM.hscall(hs_n26DyXi, hs_xs26DyXk, hs_rs26DyXl);
        }
    };
    hs_takezuunsafezuUInt25rqiI.evaluate = function (hs_ds26DyXo, hs_ds126DyXq) {
        var hs_ds226DyXv = hs_ds26DyXo;
        if (hs_ds26DyXo.notEvaluated) {
            hs_ds226DyXv = hs_ds26DyXo.hscall();
        }
        switch (hs_ds226DyXv) {
        case 0:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        default:
            var hs_wild26Dz5y = hs_ds126DyXq;
            if (hs_ds126DyXq.notEvaluated) {
                hs_wild26Dz5y = hs_ds126DyXq.hscall();
            }
            switch (hs_wild26Dz5y.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_x26DyXu = hs_wild26Dz5y.data[0];
                var hs_xs26DyXx = hs_wild26Dz5y.data[1];
                var hs_sat26Dz5A = new $hs.Thunk();
                hs_sat26Dz5A.evaluateOnce = function () {
                    var hs_sat26Dz5z = ($hs.Int.addCarry(hs_ds226DyXv, ~1, 1))[0];
                    return hs_takezuunsafezuUInt25rqiI.hscall(hs_sat26Dz5z, hs_xs26DyXx);
                };
                var $res = new $hs.Data(2);
                $res.data = [hs_x26DyXu, hs_sat26Dz5A];
                return $res;
            }
        }
    };
    this.hs_takeUInt.evaluate = function (hs_n26DyXB, hs_xs26DyXD) {
        var hs_wild26Dz5B = hs_n26DyXB >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26Dz5B.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            return hs_takezuunsafezuUInt25rqiI.hscall(hs_n26DyXB, hs_xs26DyXD);
        }
    };
    hs_takeFB25rqiC.evaluate = function (hs_c26DyXO, hs_n26DyXQ, hs_x26DyXL, hs_xs26DyXM, hs_m26DyXJ) {
        var hs_wild26Dz5D = hs_m26DyXJ <= 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26Dz5D.tag) {
        case 1:
            var hs_sat26Dz5E = new $hs.Thunk();
            hs_sat26Dz5E.evaluateOnce = function () {
                var hs_sat26Dz5C = ($hs.Int.addCarry(hs_m26DyXJ, ~1, 1))[0];
                return hs_xs26DyXM.hscall(hs_sat26Dz5C);
            };
            return hs_c26DyXO.hscall(hs_x26DyXL, hs_sat26Dz5E);
        case 2:
            return hs_c26DyXO.hscall(hs_x26DyXL, hs_n26DyXQ);
        }
    };
    hs_takeConst25rqiA.evaluate = function (hs_x26DyXT, hs_ds26DyXU) {
        if (hs_x26DyXT.notEvaluated) {
            return hs_x26DyXT.hscall();
        } else {
            return hs_x26DyXT;
        }
    };
    hs_takeFoldr25rqiy.evaluate = function (hs_eta26DyXX, hs_eta126DyY9) {
        var hs_wild26Dz5H = hs_eta26DyXX;
        if (hs_eta26DyXX.notEvaluated) {
            hs_wild26Dz5H = hs_eta26DyXX.hscall();
        }
        var hs_nzh26DyY2 = hs_wild26Dz5H.data[0];
        var hs_sat26Dz5K = new $hs.Func(2);
        hs_sat26Dz5K.evaluate = function (hs_c26DyY4, hs_nil26DyY5) {
            var hs_wild126Dz5G = hs_nzh26DyY2 <= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild126Dz5G.tag) {
            case 1:
                var hs_sat26Dz5I = new $hs.Func(1);
                hs_sat26Dz5I.evaluate = function (hs_ds26Dz5F) {
                    if (hs_nil26DyY5.notEvaluated) {
                        return hs_nil26DyY5.hscall();
                    } else {
                        return hs_nil26DyY5;
                    }
                };
                var hs_sat26Dz5J = new $hs.Func(3);
                hs_sat26Dz5J.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
                    return hs_takeFB25rqiC.hscall(hs_c26DyY4, hs_nil26DyY5, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
                };
                return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26Dz5J, hs_sat26Dz5I, hs_eta126DyY9, hs_nzh26DyY2);
            case 2:
                if (hs_nil26DyY5.notEvaluated) {
                    return hs_nil26DyY5.hscall();
                } else {
                    return hs_nil26DyY5;
                }
            }
        };
        return $hs.modules.GHCziBase.hs_build.hscall(hs_sat26Dz5K);
    };
    this.hs_take.evaluate = function (hs_eta26DyYd, hs_eta126DyYh) {
        var hs_wild26Dz5L = hs_eta26DyYd;
        if (hs_eta26DyYd.notEvaluated) {
            hs_wild26Dz5L = hs_eta26DyYd.hscall();
        }
        var hs_nzh26DyYg = hs_wild26Dz5L.data[0];
        return $hs.modules.GHCziList.hs_takeUInt.hscall(hs_nzh26DyYg, hs_eta126DyYh);
    };
    this.hs_dropWhile.evaluate = function (hs_ds26DyYp, hs_ds126DyYk) {
        var hs_wild26DyYr = hs_ds126DyYk;
        if (hs_ds126DyYk.notEvaluated) {
            hs_wild26DyYr = hs_ds126DyYk.hscall();
        }
        switch (hs_wild26DyYr.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_x26DyYo = hs_wild26DyYr.data[0];
            var hs_xszq26DyYs = hs_wild26DyYr.data[1];
            var hs_wild126Dz5M = hs_ds26DyYp.hscall(hs_x26DyYo);
            switch (hs_wild126Dz5M.tag) {
            case 1:
                if (hs_wild26DyYr.notEvaluated) {
                    return hs_wild26DyYr.hscall();
                } else {
                    return hs_wild26DyYr;
                }
            case 2:
                return $hs.modules.GHCziList.hs_dropWhile.hscall(hs_ds26DyYp, hs_xszq26DyYs);
            }
        }
    };
    this.hs_takeWhile.evaluate = function (hs_ds26DyYA, hs_ds126DyYv) {
        var hs_wild26Dz5N = hs_ds126DyYv;
        if (hs_ds126DyYv.notEvaluated) {
            hs_wild26Dz5N = hs_ds126DyYv.hscall();
        }
        switch (hs_wild26Dz5N.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_x26DyYz = hs_wild26Dz5N.data[0];
            var hs_xs26DyYC = hs_wild26Dz5N.data[1];
            var hs_wild126Dz5O = hs_ds26DyYA.hscall(hs_x26DyYz);
            switch (hs_wild126Dz5O.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_sat26Dz5P = new $hs.Thunk();
                hs_sat26Dz5P.evaluateOnce = function () {
                    return $hs.modules.GHCziList.hs_takeWhile.hscall(hs_ds26DyYA, hs_xs26DyYC);
                };
                var $res = new $hs.Data(2);
                $res.data = [hs_x26DyYz, hs_sat26Dz5P];
                return $res;
            }
        }
    };
    this.hs_cycle.evaluate = function (hs_ds26DyYF) {
        var hs_wild26DyYL = hs_ds26DyYF;
        if (hs_ds26DyYF.notEvaluated) {
            hs_wild26DyYL = hs_ds26DyYF.hscall();
        }
        switch (hs_wild26DyYL.tag) {
        case 1:
            var hs_sat26Dz5Q = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Prelude.cycle: empty list\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26Dz5Q);
        case 2:
            var hs_xszq26DyYM = new $hs.Thunk();
            hs_xszq26DyYM.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_wild26DyYL, hs_xszq26DyYM);
            };
            if (hs_xszq26DyYM.notEvaluated) {
                return hs_xszq26DyYM.hscall();
            } else {
                return hs_xszq26DyYM;
            }
        }
    };
    hs_repeatFB25rqio.evaluate = function (hs_eta26DyYS, hs_eta126DyYQ) {
        var hs_xs26DyYR = new $hs.Thunk();
        hs_xs26DyYR.evaluateOnce = function () {
            return hs_eta26DyYS.hscall(hs_eta126DyYQ, hs_xs26DyYR);
        };
        if (hs_xs26DyYR.notEvaluated) {
            return hs_xs26DyYR.hscall();
        } else {
            return hs_xs26DyYR;
        }
    };
    this.hs_repeat.evaluate = function (hs_eta26DyYV) {
        var hs_xs26DyYW = new $hs.Data(2);
        hs_xs26DyYW.data = [hs_eta26DyYV, hs_xs26DyYW];
        if (hs_xs26DyYW.notEvaluated) {
            return hs_xs26DyYW.hscall();
        } else {
            return hs_xs26DyYW;
        }
    };
    this.hs_replicate.evaluate = function (hs_eta26DyYZ, hs_eta126DyZ5) {
        var hs_wild26Dz5U = hs_eta26DyYZ;
        if (hs_eta26DyYZ.notEvaluated) {
            hs_wild26Dz5U = hs_eta26DyYZ.hscall();
        }
        var hs_nzh26DyZ2 = hs_wild26Dz5U.data[0];
        var hs_wild126Dz5T = hs_nzh26DyZ2 >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild126Dz5T.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_sat26Dz5V = new $hs.Thunk();
            hs_sat26Dz5V.evaluateOnce = function () {
                var hs_xs26DyZ6 = new $hs.Data(2);
                hs_xs26DyZ6.data = [hs_eta126DyZ5, hs_xs26DyZ6];
                if (hs_xs26DyZ6.notEvaluated) {
                    return hs_xs26DyZ6.hscall();
                } else {
                    return hs_xs26DyZ6;
                }
            };
            return hs_takezuunsafezuUInt25rqiI.hscall(hs_nzh26DyZ2, hs_sat26Dz5V);
        }
    };
    hs_iterateFB25rqik.evaluate = function (hs_c26DyZc, hs_f26DyZd, hs_x26DyZb) {
        var hs_sat26Dz5X = new $hs.Thunk();
        hs_sat26Dz5X.evaluateOnce = function () {
            var hs_sat26Dz5W = new $hs.Thunk();
            hs_sat26Dz5W.evaluateOnce = function () {
                return hs_f26DyZd.hscall(hs_x26DyZb);
            };
            return hs_iterateFB25rqik.hscall(hs_c26DyZc, hs_f26DyZd, hs_sat26Dz5W);
        };
        return hs_c26DyZc.hscall(hs_x26DyZb, hs_sat26Dz5X);
    };
    this.hs_iterate.evaluate = function (hs_f26DyZj, hs_x26DyZi) {
        var hs_sat26Dz5Z = new $hs.Thunk();
        hs_sat26Dz5Z.evaluateOnce = function () {
            var hs_sat26Dz5Y = new $hs.Thunk();
            hs_sat26Dz5Y.evaluateOnce = function () {
                return hs_f26DyZj.hscall(hs_x26DyZi);
            };
            return $hs.modules.GHCziList.hs_iterate.hscall(hs_f26DyZj, hs_sat26Dz5Y);
        };
        var $res = new $hs.Data(2);
        $res.data = [hs_x26DyZi, hs_sat26Dz5Z];
        return $res;
    };
    this.hs_scanr1.evaluate = function (hs_ds26DyZy, hs_ds126DyZo) {
        var hs_wild26Dz60 = hs_ds126DyZo;
        if (hs_ds126DyZo.notEvaluated) {
            hs_wild26Dz60 = hs_ds126DyZo.hscall();
        }
        switch (hs_wild26Dz60.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_x26DyZu = hs_wild26Dz60.data[0];
            var hs_ds226DyZs = hs_wild26Dz60.data[1];
            var hs_wild126DyZz = hs_ds226DyZs;
            if (hs_ds226DyZs.notEvaluated) {
                hs_wild126DyZz = hs_ds226DyZs.hscall();
            }
            switch (hs_wild126DyZz.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [hs_x26DyZu, $hs.modules.GHCziTypes.hs_ZMZN];
                return $res;
            case 2:
                var hs_ds326DyZF = new $hs.Thunk();
                hs_ds326DyZF.evaluateOnce = function () {
                    var hs_wild226DyZD = $hs.modules.GHCziList.hs_scanr1.hscall(hs_ds26DyZy, hs_wild126DyZz);
                    switch (hs_wild226DyZD.tag) {
                    case 1:
                        return $hs.modules.ControlziExceptionziBase.hs_irrefutPatError.hscall("../../ghc-7.0.2/libraries/base/GHC/List.lhs:220:34-55|qs@(q : _)\x00");
                    case 2:
                        var hs_q26DyZE = hs_wild226DyZD.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_wild226DyZD, hs_q26DyZE];
                        return $res;
                    }
                };
                var hs_sat26Dz68 = new $hs.Thunk();
                hs_sat26Dz68.evaluateOnce = function () {
                    var hs_ds426Dz64 = hs_ds326DyZF;
                    if (hs_ds326DyZF.notEvaluated) {
                        hs_ds426Dz64 = hs_ds326DyZF.hscall();
                    }
                    var hs_qs26DyZP = hs_ds426Dz64.data[0];
                    if (hs_qs26DyZP.notEvaluated) {
                        return hs_qs26DyZP.hscall();
                    } else {
                        return hs_qs26DyZP;
                    }
                };
                var hs_sat26Dz6a = new $hs.Thunk();
                hs_sat26Dz6a.evaluateOnce = function () {
                    var hs_sat26Dz69 = new $hs.Thunk();
                    hs_sat26Dz69.evaluateOnce = function () {
                        var hs_ds426Dz67 = hs_ds326DyZF;
                        if (hs_ds326DyZF.notEvaluated) {
                            hs_ds426Dz67 = hs_ds326DyZF.hscall();
                        }
                        var hs_q26DyZJ = hs_ds426Dz67.data[1];
                        if (hs_q26DyZJ.notEvaluated) {
                            return hs_q26DyZJ.hscall();
                        } else {
                            return hs_q26DyZJ;
                        }
                    };
                    return hs_ds26DyZy.hscall(hs_x26DyZu, hs_sat26Dz69);
                };
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26Dz6a, hs_sat26Dz68];
                return $res;
            }
        }
    };
    this.hs_scanr.evaluate = function (hs_ds26Dz00, hs_q026DyZW, hs_ds126DyZU) {
        var hs_wild26Dz6b = hs_ds126DyZU;
        if (hs_ds126DyZU.notEvaluated) {
            hs_wild26Dz6b = hs_ds126DyZU.hscall();
        }
        switch (hs_wild26Dz6b.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [hs_q026DyZW, $hs.modules.GHCziTypes.hs_ZMZN];
            return $res;
        case 2:
            var hs_x26Dz08 = hs_wild26Dz6b.data[0];
            var hs_xs26Dz01 = hs_wild26Dz6b.data[1];
            var hs_ds226Dz07 = new $hs.Thunk();
            hs_ds226Dz07.evaluateOnce = function () {
                var hs_wild126Dz05 = $hs.modules.GHCziList.hs_scanr.hscall(hs_ds26Dz00, hs_q026DyZW, hs_xs26Dz01);
                switch (hs_wild126Dz05.tag) {
                case 1:
                    return $hs.modules.ControlziExceptionziBase.hs_irrefutPatError.hscall("../../ghc-7.0.2/libraries/base/GHC/List.lhs:212:34-57|qs@(q : _)\x00");
                case 2:
                    var hs_q26Dz06 = hs_wild126Dz05.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_wild126Dz05, hs_q26Dz06];
                    return $res;
                }
            };
            var hs_sat26Dz6h = new $hs.Thunk();
            hs_sat26Dz6h.evaluateOnce = function () {
                var hs_ds326Dz6d = hs_ds226Dz07;
                if (hs_ds226Dz07.notEvaluated) {
                    hs_ds326Dz6d = hs_ds226Dz07.hscall();
                }
                var hs_qs26Dz0i = hs_ds326Dz6d.data[0];
                if (hs_qs26Dz0i.notEvaluated) {
                    return hs_qs26Dz0i.hscall();
                } else {
                    return hs_qs26Dz0i;
                }
            };
            var hs_sat26Dz6j = new $hs.Thunk();
            hs_sat26Dz6j.evaluateOnce = function () {
                var hs_sat26Dz6i = new $hs.Thunk();
                hs_sat26Dz6i.evaluateOnce = function () {
                    var hs_ds326Dz6g = hs_ds226Dz07;
                    if (hs_ds226Dz07.notEvaluated) {
                        hs_ds326Dz6g = hs_ds226Dz07.hscall();
                    }
                    var hs_q26Dz0c = hs_ds326Dz6g.data[1];
                    if (hs_q26Dz0c.notEvaluated) {
                        return hs_q26Dz0c.hscall();
                    } else {
                        return hs_q26Dz0c;
                    }
                };
                return hs_ds26Dz00.hscall(hs_x26Dz08, hs_sat26Dz6i);
            };
            var $res = new $hs.Data(2);
            $res.data = [hs_sat26Dz6j, hs_sat26Dz6h];
            return $res;
        }
    };
    this.hs_foldr1.evaluate = function (hs_ds26Dz0w, hs_ds126Dz0m) {
        var hs_wild26Dz6k = hs_ds126Dz0m;
        if (hs_ds126Dz0m.notEvaluated) {
            hs_wild26Dz6k = hs_ds126Dz0m.hscall();
        }
        switch (hs_wild26Dz6k.tag) {
        case 1:
            var hs_sat26Dz6l = new $hs.Thunk();
            hs_sat26Dz6l.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("foldr1\x00");
            };
            return $hs.modules.GHCziList.hs_errorEmptyList.hscall(hs_sat26Dz6l);
        case 2:
            var hs_x26Dz0t = hs_wild26Dz6k.data[0];
            var hs_ds226Dz0r = hs_wild26Dz6k.data[1];
            var hs_wild126Dz0x = hs_ds226Dz0r;
            if (hs_ds226Dz0r.notEvaluated) {
                hs_wild126Dz0x = hs_ds226Dz0r.hscall();
            }
            switch (hs_wild126Dz0x.tag) {
            case 1:
                if (hs_x26Dz0t.notEvaluated) {
                    return hs_x26Dz0t.hscall();
                } else {
                    return hs_x26Dz0t;
                }
            case 2:
                var hs_sat26Dz6o = new $hs.Thunk();
                hs_sat26Dz6o.evaluateOnce = function () {
                    return $hs.modules.GHCziList.hs_foldr1.hscall(hs_ds26Dz0w, hs_wild126Dz0x);
                };
                return hs_ds26Dz0w.hscall(hs_x26Dz0t, hs_sat26Dz6o);
            }
        }
    };
    this.hs_scanl.evaluate = function (hs_f26Dz0H, hs_q26Dz0C, hs_ls26Dz0D) {
        var hs_sat26Dz6r = new $hs.Thunk();
        hs_sat26Dz6r.evaluateOnce = function () {
            var hs_wild26Dz6p = hs_ls26Dz0D;
            if (hs_ls26Dz0D.notEvaluated) {
                hs_wild26Dz6p = hs_ls26Dz0D.hscall();
            }
            switch (hs_wild26Dz6p.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_x26Dz0I = hs_wild26Dz6p.data[0];
                var hs_xs26Dz0K = hs_wild26Dz6p.data[1];
                var hs_sat26Dz6q = new $hs.Thunk();
                hs_sat26Dz6q.evaluateOnce = function () {
                    return hs_f26Dz0H.hscall(hs_q26Dz0C, hs_x26Dz0I);
                };
                return $hs.modules.GHCziList.hs_scanl.hscall(hs_f26Dz0H, hs_sat26Dz6q, hs_xs26Dz0K);
            }
        };
        var $res = new $hs.Data(2);
        $res.data = [hs_q26Dz0C, hs_sat26Dz6r];
        return $res;
    };
    this.hs_scanl1.evaluate = function (hs_f26Dz0S, hs_ds26Dz0O) {
        var hs_wild26Dz6s = hs_ds26Dz0O;
        if (hs_ds26Dz0O.notEvaluated) {
            hs_wild26Dz6s = hs_ds26Dz0O.hscall();
        }
        switch (hs_wild26Dz6s.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_x26Dz0T = hs_wild26Dz6s.data[0];
            var hs_xs26Dz0U = hs_wild26Dz6s.data[1];
            return $hs.modules.GHCziList.hs_scanl.hscall(hs_f26Dz0S, hs_x26Dz0T, hs_xs26Dz0U);
        }
    };
    this.hs_foldl.evaluate = function (hs_f26Dz17, hs_zz026Dz1b, hs_xs026Dz1c) {
        var hs_lgo26Dz18 = new $hs.Func(2);
        hs_lgo26Dz18.evaluate = function (hs_zz26Dz13, hs_ds26Dz11) {
            var hs_wild26Dz6t = hs_ds26Dz11;
            if (hs_ds26Dz11.notEvaluated) {
                hs_wild26Dz6t = hs_ds26Dz11.hscall();
            }
            switch (hs_wild26Dz6t.tag) {
            case 1:
                if (hs_zz26Dz13.notEvaluated) {
                    return hs_zz26Dz13.hscall();
                } else {
                    return hs_zz26Dz13;
                }
            case 2:
                var hs_x26Dz16 = hs_wild26Dz6t.data[0];
                var hs_xs26Dz1a = hs_wild26Dz6t.data[1];
                var hs_sat26Dz6u = new $hs.Thunk();
                hs_sat26Dz6u.evaluateOnce = function () {
                    return hs_f26Dz17.hscall(hs_zz26Dz13, hs_x26Dz16);
                };
                return hs_lgo26Dz18.hscall(hs_sat26Dz6u, hs_xs26Dz1a);
            }
        };
        return hs_lgo26Dz18.hscall(hs_zz026Dz1b, hs_xs026Dz1c);
    };
    hs_filterFB25rqi4.evaluate = function (hs_c26Dz1l, hs_p26Dz1i, hs_x26Dz1h, hs_r26Dz1k) {
        var hs_wild26Dz6v = hs_p26Dz1i.hscall(hs_x26Dz1h);
        switch (hs_wild26Dz6v.tag) {
        case 1:
            if (hs_r26Dz1k.notEvaluated) {
                return hs_r26Dz1k.hscall();
            } else {
                return hs_r26Dz1k;
            }
        case 2:
            return hs_c26Dz1l.hscall(hs_x26Dz1h, hs_r26Dz1k);
        }
    };
    this.hs_length.evaluate = function (hs_l26Dz1y) {
        var hs_len26Dz1w = new $hs.Func(2);
        hs_len26Dz1w.evaluate = function (hs_ds26Dz1q, hs_azh26Dz1s) {
            var hs_wild26Dz6w = hs_ds26Dz1q;
            if (hs_ds26Dz1q.notEvaluated) {
                hs_wild26Dz6w = hs_ds26Dz1q.hscall();
            }
            switch (hs_wild26Dz6w.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [hs_azh26Dz1s];
                return $res;
            case 2:
                var hs_xs26Dz1v = hs_wild26Dz6w.data[1];
                var hs_sat26Dz6x = ($hs.Int.addCarry(hs_azh26Dz1s, 1, 0))[0];
                return hs_len26Dz1w.hscall(hs_xs26Dz1v, hs_sat26Dz6x);
            }
        };
        return hs_len26Dz1w.hscall(hs_l26Dz1y, 0);
    };
    this.hs_null.evaluate = function (hs_ds26Dz1A) {
        var hs_wild26Dz6z = hs_ds26Dz1A;
        if (hs_ds26Dz1A.notEvaluated) {
            hs_wild26Dz6z = hs_ds26Dz1A.hscall();
        }
        switch (hs_wild26Dz6z.tag) {
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
    this.hs_init.evaluate = function (hs_ds26Dz1F) {
        var hs_wild26Dz6C = hs_ds26Dz1F;
        if (hs_ds26Dz1F.notEvaluated) {
            hs_wild26Dz6C = hs_ds26Dz1F.hscall();
        }
        switch (hs_wild26Dz6C.tag) {
        case 1:
            var hs_sat26Dz6D = new $hs.Thunk();
            hs_sat26Dz6D.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("init\x00");
            };
            return $hs.modules.GHCziList.hs_errorEmptyList.hscall(hs_sat26Dz6D);
        case 2:
            var hs_x26Dz1W = hs_wild26Dz6C.data[0];
            var hs_xs26Dz1X = hs_wild26Dz6C.data[1];
            var hs_initzq26Dz1U = new $hs.Func(2);
            hs_initzq26Dz1U.evaluate = function (hs_ds126Dz1R, hs_ds226Dz1N) {
                var hs_wild126Dz6E = hs_ds226Dz1N;
                if (hs_ds226Dz1N.notEvaluated) {
                    hs_wild126Dz6E = hs_ds226Dz1N.hscall();
                }
                switch (hs_wild126Dz6E.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_zz26Dz1S = hs_wild126Dz6E.data[0];
                    var hs_zzs26Dz1T = hs_wild126Dz6E.data[1];
                    var hs_sat26Dz6F = new $hs.Thunk();
                    hs_sat26Dz6F.evaluateOnce = function () {
                        return hs_initzq26Dz1U.hscall(hs_zz26Dz1S, hs_zzs26Dz1T);
                    };
                    var $res = new $hs.Data(2);
                    $res.data = [hs_ds126Dz1R, hs_sat26Dz6F];
                    return $res;
                }
            };
            return hs_initzq26Dz1U.hscall(hs_x26Dz1W, hs_xs26Dz1X);
        }
    };
    this.hs_last.evaluate = function (hs_ds26Dz1Z) {
        var hs_wild26Dz6G = hs_ds26Dz1Z;
        if (hs_ds26Dz1Z.notEvaluated) {
            hs_wild26Dz6G = hs_ds26Dz1Z.hscall();
        }
        switch (hs_wild26Dz6G.tag) {
        case 1:
            var hs_sat26Dz6H = new $hs.Thunk();
            hs_sat26Dz6H.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("last\x00");
            };
            return $hs.modules.GHCziList.hs_errorEmptyList.hscall(hs_sat26Dz6H);
        case 2:
            var hs_x26Dz2f = hs_wild26Dz6G.data[0];
            var hs_xs26Dz2g = hs_wild26Dz6G.data[1];
            var hs_lastzq26Dz2e = new $hs.Func(2);
            hs_lastzq26Dz2e.evaluate = function (hs_y26Dz29, hs_ds126Dz27) {
                var hs_wild126Dz6I = hs_ds126Dz27;
                if (hs_ds126Dz27.notEvaluated) {
                    hs_wild126Dz6I = hs_ds126Dz27.hscall();
                }
                switch (hs_wild126Dz6I.tag) {
                case 1:
                    if (hs_y26Dz29.notEvaluated) {
                        return hs_y26Dz29.hscall();
                    } else {
                        return hs_y26Dz29;
                    }
                case 2:
                    var hs_y126Dz2c = hs_wild126Dz6I.data[0];
                    var hs_ys26Dz2d = hs_wild126Dz6I.data[1];
                    return hs_lastzq26Dz2e.hscall(hs_y126Dz2c, hs_ys26Dz2d);
                }
            };
            return hs_lastzq26Dz2e.hscall(hs_x26Dz2f, hs_xs26Dz2g);
        }
    };
    this.hs_tail.evaluate = function (hs_ds26Dz2i) {
        var hs_wild26Dz6J = hs_ds26Dz2i;
        if (hs_ds26Dz2i.notEvaluated) {
            hs_wild26Dz6J = hs_ds26Dz2i.hscall();
        }
        switch (hs_wild26Dz6J.tag) {
        case 1:
            var hs_sat26Dz6K = new $hs.Thunk();
            hs_sat26Dz6K.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("tail\x00");
            };
            return $hs.modules.GHCziList.hs_errorEmptyList.hscall(hs_sat26Dz6K);
        case 2:
            var hs_xs26Dz2n = hs_wild26Dz6J.data[1];
            if (hs_xs26Dz2n.notEvaluated) {
                return hs_xs26Dz2n.hscall();
            } else {
                return hs_xs26Dz2n;
            }
        }
    };
    hs_badHead25rqhS.evaluateOnce = function () {
        var hs_sat26Dz6M = new $hs.Thunk();
        hs_sat26Dz6M.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("head\x00");
        };
        return $hs.modules.GHCziList.hs_errorEmptyList.hscall(hs_sat26Dz6M);
    };
    this.hs_head.evaluate = function (hs_ds26Dz2q) {
        var hs_wild26Dz6N = hs_ds26Dz2q;
        if (hs_ds26Dz2q.notEvaluated) {
            hs_wild26Dz6N = hs_ds26Dz2q.hscall();
        }
        switch (hs_wild26Dz6N.tag) {
        case 1:
            if (hs_badHead25rqhS.notEvaluated) {
                return hs_badHead25rqhS.hscall();
            } else {
                return hs_badHead25rqhS;
            }
        case 2:
            var hs_x26Dz2u = hs_wild26Dz6N.data[0];
            if (hs_x26Dz2u.notEvaluated) {
                return hs_x26Dz2u.hscall();
            } else {
                return hs_x26Dz2u;
            }
        }
    };
    this.hs_zzipWith.evaluate = function (hs_f26Dz2I, hs_ds26Dz2y, hs_ds126Dz2C) {
        var hs_wild26Dz6P = hs_ds26Dz2y;
        if (hs_ds26Dz2y.notEvaluated) {
            hs_wild26Dz6P = hs_ds26Dz2y.hscall();
        }
        switch (hs_wild26Dz6P.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_a26Dz2G = hs_wild26Dz6P.data[0];
            var hs_as26Dz2K = hs_wild26Dz6P.data[1];
            var hs_wild126Dz6Q = hs_ds126Dz2C;
            if (hs_ds126Dz2C.notEvaluated) {
                hs_wild126Dz6Q = hs_ds126Dz2C.hscall();
            }
            switch (hs_wild126Dz6Q.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_b26Dz2H = hs_wild126Dz6Q.data[0];
                var hs_bs26Dz2L = hs_wild126Dz6Q.data[1];
                var hs_sat26Dz6R = new $hs.Thunk();
                hs_sat26Dz6R.evaluateOnce = function () {
                    return $hs.modules.GHCziList.hs_zzipWith.hscall(hs_f26Dz2I, hs_as26Dz2K, hs_bs26Dz2L);
                };
                var hs_sat26Dz6S = new $hs.Thunk();
                hs_sat26Dz6S.evaluateOnce = function () {
                    return hs_f26Dz2I.hscall(hs_a26Dz2G, hs_b26Dz2H);
                };
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26Dz6S, hs_sat26Dz6R];
                return $res;
            }
        }
    };
    hs_foldr225rqjg.evaluate = function (hs_zuk26Dz3e, hs_zz26Dz2X, hs_ds26Dz2V, hs_zuys26Dz30) {
        var hs_fail26Dz2U = new $hs.Func(1);
        hs_fail26Dz2U.evaluate = function (hs_ds126Dz2T) {
            return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("../../ghc-7.0.2/libraries/base/GHC/List.lhs:(609,1)-(611,51)|function foldr2\x00");
        };
        var hs_wild26Dz34 = hs_ds26Dz2V;
        if (hs_ds26Dz2V.notEvaluated) {
            hs_wild26Dz34 = hs_ds26Dz2V.hscall();
        }
        switch (hs_wild26Dz34.tag) {
        case 1:
            if (hs_zz26Dz2X.notEvaluated) {
                return hs_zz26Dz2X.hscall();
            } else {
                return hs_zz26Dz2X;
            }
        case 2:
            var hs_wild126Dz38 = hs_zuys26Dz30;
            if (hs_zuys26Dz30.notEvaluated) {
                hs_wild126Dz38 = hs_zuys26Dz30.hscall();
            }
            switch (hs_wild126Dz38.tag) {
            case 1:
                if (hs_zz26Dz2X.notEvaluated) {
                    return hs_zz26Dz2X.hscall();
                } else {
                    return hs_zz26Dz2X;
                }
            case 2:
                var hs_wild226Dz6V = hs_wild26Dz34;
                if (hs_wild26Dz34.notEvaluated) {
                    hs_wild226Dz6V = hs_wild26Dz34.hscall();
                }
                switch (hs_wild226Dz6V.tag) {
                case 1:
                    return hs_fail26Dz2U.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                case 2:
                    var hs_x26Dz3c = hs_wild226Dz6V.data[0];
                    var hs_xs26Dz3f = hs_wild226Dz6V.data[1];
                    var hs_wild326Dz6Y = hs_wild126Dz38;
                    if (hs_wild126Dz38.notEvaluated) {
                        hs_wild326Dz6Y = hs_wild126Dz38.hscall();
                    }
                    switch (hs_wild326Dz6Y.tag) {
                    case 1:
                        return hs_fail26Dz2U.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    case 2:
                        var hs_y26Dz3d = hs_wild326Dz6Y.data[0];
                        var hs_ys26Dz3g = hs_wild326Dz6Y.data[1];
                        var hs_sat26Dz6Z = new $hs.Thunk();
                        hs_sat26Dz6Z.evaluateOnce = function () {
                            return hs_foldr225rqjg.hscall(hs_zuk26Dz3e, hs_zz26Dz2X, hs_xs26Dz3f, hs_ys26Dz3g);
                        };
                        return hs_zuk26Dz3e.hscall(hs_x26Dz3c, hs_y26Dz3d, hs_sat26Dz6Z);
                    }
                }
            }
        }
    };
    this.hs_zzip.evaluate = function (hs_ds26Dz3k, hs_ds126Dz3o) {
        var hs_wild26Dz70 = hs_ds26Dz3k;
        if (hs_ds26Dz3k.notEvaluated) {
            hs_wild26Dz70 = hs_ds26Dz3k.hscall();
        }
        switch (hs_wild26Dz70.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_a26Dz3s = hs_wild26Dz70.data[0];
            var hs_as26Dz3v = hs_wild26Dz70.data[1];
            var hs_wild126Dz71 = hs_ds126Dz3o;
            if (hs_ds126Dz3o.notEvaluated) {
                hs_wild126Dz71 = hs_ds126Dz3o.hscall();
            }
            switch (hs_wild126Dz71.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_b26Dz3t = hs_wild126Dz71.data[0];
                var hs_bs26Dz3w = hs_wild126Dz71.data[1];
                var hs_sat26Dz72 = new $hs.Thunk();
                hs_sat26Dz72.evaluateOnce = function () {
                    return $hs.modules.GHCziList.hs_zzip.hscall(hs_as26Dz3v, hs_bs26Dz3w);
                };
                var hs_sat26Dz73 = new $hs.Data(1);
                hs_sat26Dz73.data = [hs_a26Dz3s, hs_b26Dz3t];
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26Dz73, hs_sat26Dz72];
                return $res;
            }
        }
    };
    this.hs_filter.evaluate = function (hs_zupred26Dz3F, hs_ds26Dz3A) {
        var hs_wild26Dz74 = hs_ds26Dz3A;
        if (hs_ds26Dz3A.notEvaluated) {
            hs_wild26Dz74 = hs_ds26Dz3A.hscall();
        }
        switch (hs_wild26Dz74.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_x26Dz3E = hs_wild26Dz74.data[0];
            var hs_xs26Dz3H = hs_wild26Dz74.data[1];
            var hs_wild126Dz75 = hs_zupred26Dz3F.hscall(hs_x26Dz3E);
            switch (hs_wild126Dz75.tag) {
            case 1:
                return $hs.modules.GHCziList.hs_filter.hscall(hs_zupred26Dz3F, hs_xs26Dz3H);
            case 2:
                var hs_sat26Dz76 = new $hs.Thunk();
                hs_sat26Dz76.evaluateOnce = function () {
                    return $hs.modules.GHCziList.hs_filter.hscall(hs_zupred26Dz3F, hs_xs26Dz3H);
                };
                var $res = new $hs.Data(2);
                $res.data = [hs_x26Dz3E, hs_sat26Dz76];
                return $res;
            }
        }
    };
    this.hs_concat.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_foldr.hscall($hs.modules.GHCziBase.hs_zpzp, $hs.modules.GHCziTypes.hs_ZMZN);
    };
};
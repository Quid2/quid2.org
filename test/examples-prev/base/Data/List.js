
$hs.modules.DataziList = new $hs.Module();
$hs.modules.DataziList.dependencies = ["GHC.Prim", "GHC.Types", "GHC.Ordering", "GHC.Tuple", "GHC.Integer", "Data.Maybe", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.Err", "GHC.Classes", "GHC.List", "GHC.Unicode", "Control.Exception.Base"];
$hs.modules.DataziList.initBeforeDependencies = function () {
    this.hs_unwords = new $hs.Func(1);
    this.hs_words = new $hs.Func(1);
    this.hs_unlines = new $hs.Func(1);
    this.hs_foldl1 = new $hs.Func(2);
    this.hs_foldlzq = new $hs.Func(3);
    this.hs_foldl1zq = new $hs.Func(2);
    this.hs_unfoldr = new $hs.Func(2);
    this.hs_sortBy = new $hs.Func(1);
    this.hs_sort = new $hs.Func(1);
    this.hs_permutations = new $hs.Func(1);
    this.hs_subsequences = new $hs.Func(1);
    this.hs_tails = new $hs.Func(1);
    this.hs_inits = new $hs.Func(1);
    this.hs_groupBy = new $hs.Func(2);
    this.hs_group = new $hs.Func(2);
    this.hs_unzzip7 = new $hs.Thunk();
    this.hs_unzzip6 = new $hs.Thunk();
    this.hs_unzzip5 = new $hs.Thunk();
    this.hs_unzzip4 = new $hs.Thunk();
    this.hs_zzipWith7 = new $hs.Func(8);
    this.hs_zzipWith6 = new $hs.Func(7);
    this.hs_zzipWith5 = new $hs.Func(6);
    this.hs_zzipWith4 = new $hs.Func(5);
    this.hs_zzip7 = new $hs.Func(7);
    this.hs_zzip6 = new $hs.Func(6);
    this.hs_zzip5 = new $hs.Func(5);
    this.hs_zzip4 = new $hs.Func(4);
    this.hs_genericIndex = new $hs.Func(3);
    this.hs_genericSplitAt = new $hs.Func(3);
    this.hs_genericDrop = new $hs.Func(3);
    this.hs_genericTake = new $hs.Func(3);
    this.hs_genericReplicate = new $hs.Func(3);
    this.hs_genericLength = new $hs.Func(2);
    this.hs_minimumBy = new $hs.Func(2);
    this.hs_maximumBy = new $hs.Func(2);
    this.hs_minimum = new $hs.Func(2);
    this.hs_maximum = new $hs.Func(2);
    this.hs_insertBy = new $hs.Func(3);
    this.hs_insert = new $hs.Func(3);
    this.hs_mapAccumR = new $hs.Func(3);
    this.hs_mapAccumL = new $hs.Func(3);
    this.hs_partition = new $hs.Func(2);
    this.hs_transpose = new $hs.Func(1);
    this.hs_intersperse = new $hs.Func(2);
    this.hs_intercalate = new $hs.Func(2);
    this.hs_intersectBy = new $hs.Func(3);
    this.hs_intersect = new $hs.Func(3);
    this.hs_deleteBy = new $hs.Func(3);
    this.hs_deleteFirstsBy = new $hs.Func(1);
    this.hs_delete = new $hs.Func(3);
    this.hs_zrzr = new $hs.Func(1);
    this.hs_nubBy = new $hs.Func(2);
    this.hs_unionBy = new $hs.Func(3);
    this.hs_union = new $hs.Func(3);
    this.hs_nub = new $hs.Func(2);
    this.hs_isPrefixOf = new $hs.Func(3);
    this.hs_isSuffixOf = new $hs.Func(3);
    this.hs_isInfixOf = new $hs.Func(3);
    this.hs_findIndices = new $hs.Func(2);
    this.hs_findIndex = new $hs.Func(1);
    this.hs_find = new $hs.Func(1);
    this.hs_elemIndices = new $hs.Func(2);
    this.hs_elemIndex = new $hs.Func(2);
    this.hs_stripPrefix = new $hs.Func(3);
    this.hs_sum = new $hs.Func(2);
    this.hs_product = new $hs.Func(2);
    this.hs_lines = new $hs.Func(1);
    this.hs_unwords.notEvaluated = true;
    this.hs_unwords.evaluate = function (hs_ds26D76n) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_ds26D76n);
    };
    this.hs_words.notEvaluated = true;
    this.hs_words.evaluate = function (hs_s26D76B) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_s26D76B);
    };
    this.hs_unlines.notEvaluated = true;
    this.hs_unlines.evaluate = function (hs_ds26D76U) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_ds26D76U);
    };
    this.hs_foldl1.notEvaluated = true;
    this.hs_foldl1.evaluate = function (hs_f26D77a, hs_ds26D775) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_f26D77a, hs_ds26D775);
    };
    this.hs_foldlzq.notEvaluated = true;
    this.hs_foldlzq.evaluate = function (hs_f26D77p, hs_zz026D77u, hs_xs026D77v) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_f26D77p, hs_zz026D77u, hs_xs026D77v);
    };
    this.hs_foldl1zq.notEvaluated = true;
    this.hs_foldl1zq.evaluate = function (hs_f26D77D, hs_ds26D77y) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_f26D77D, hs_ds26D77y);
    };
    this.hs_unfoldr.notEvaluated = true;
    this.hs_unfoldr.evaluate = function (hs_f26D77J, hs_b26D77I) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_f26D77J, hs_b26D77I);
    };
    this.hs_sortBy.notEvaluated = true;
    this.hs_sortBy.evaluate = function (hs_cmp26D788) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_cmp26D788);
    };
    this.hs_sort.notEvaluated = true;
    this.hs_sort.evaluate = function (hs_zddOrd26D79U) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddOrd26D79U);
    };
    this.hs_permutations.notEvaluated = true;
    this.hs_permutations.evaluate = function (hs_xs026D79X) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_xs026D79X);
    };
    this.hs_subsequences.notEvaluated = true;
    this.hs_subsequences.evaluate = function (hs_xs26D7bb) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_xs26D7bb);
    };
    this.hs_tails.notEvaluated = true;
    this.hs_tails.evaluate = function (hs_ds26D7be) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_ds26D7be);
    };
    this.hs_inits.notEvaluated = true;
    this.hs_inits.evaluate = function (hs_ds26D7bm) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_ds26D7bm);
    };
    this.hs_groupBy.notEvaluated = true;
    this.hs_groupBy.evaluate = function (hs_ds26D7bE, hs_ds126D7by) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_ds26D7bE, hs_ds126D7by);
    };
    this.hs_group.notEvaluated = true;
    this.hs_group.evaluate = function (hs_zddEq26D7bW, hs_eta26D7bY) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddEq26D7bW, hs_eta26D7bY);
    };
    this.hs_unzzip7.evaluateOnce = function () {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_unzzip6.evaluateOnce = function () {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_unzzip5.evaluateOnce = function () {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_unzzip4.evaluateOnce = function () {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zzipWith7.notEvaluated = true;
    this.hs_zzipWith7.evaluate = function (hs_zz26D7hi, hs_ds26D7gJ, hs_ds126D7gN, hs_ds226D7gR, hs_ds326D7gV, hs_ds426D7gZ, hs_ds526D7h3, hs_ds626D7h7) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zz26D7hi, hs_ds26D7gJ, hs_ds126D7gN, hs_ds226D7gR, hs_ds326D7gV, hs_ds426D7gZ, hs_ds526D7h3, hs_ds626D7h7);
    };
    this.hs_zzipWith6.notEvaluated = true;
    this.hs_zzipWith6.evaluate = function (hs_zz26D7i3, hs_ds26D7hz, hs_ds126D7hD, hs_ds226D7hH, hs_ds326D7hL, hs_ds426D7hP, hs_ds526D7hT) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zz26D7i3, hs_ds26D7hz, hs_ds126D7hD, hs_ds226D7hH, hs_ds326D7hL, hs_ds426D7hP, hs_ds526D7hT);
    };
    this.hs_zzipWith5.notEvaluated = true;
    this.hs_zzipWith5.evaluate = function (hs_zz26D7iH, hs_ds26D7ii, hs_ds126D7im, hs_ds226D7iq, hs_ds326D7iu, hs_ds426D7iy) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zz26D7iH, hs_ds26D7ii, hs_ds126D7im, hs_ds226D7iq, hs_ds326D7iu, hs_ds426D7iy);
    };
    this.hs_zzipWith4.notEvaluated = true;
    this.hs_zzipWith4.evaluate = function (hs_zz26D7je, hs_ds26D7iU, hs_ds126D7iY, hs_ds226D7j2, hs_ds326D7j6) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zz26D7je, hs_ds26D7iU, hs_ds126D7iY, hs_ds226D7j2, hs_ds326D7j6);
    };
    this.hs_zzip7.notEvaluated = true;
    this.hs_zzip7.evaluate = function (hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_zzip6.notEvaluated = true;
    this.hs_zzip6.evaluate = function (hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_zzip5.notEvaluated = true;
    this.hs_zzip5.evaluate = function (hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_zzip4.notEvaluated = true;
    this.hs_zzip4.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_genericIndex.notEvaluated = true;
    this.hs_genericIndex.evaluate = function (hs_zddIntegral26D7jp, hs_eta26D7jt, hs_eta126D7jz) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddIntegral26D7jp, hs_eta26D7jt, hs_eta126D7jz);
    };
    this.hs_genericSplitAt.notEvaluated = true;
    this.hs_genericSplitAt.evaluate = function (hs_zddIntegral26D7jR, hs_eta26D7jW, hs_eta126D7k0) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddIntegral26D7jR, hs_eta26D7jW, hs_eta126D7k0);
    };
    this.hs_genericDrop.notEvaluated = true;
    this.hs_genericDrop.evaluate = function (hs_zddIntegral26D7kq, hs_eta26D7kv, hs_eta126D7kz) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddIntegral26D7kq, hs_eta26D7kv, hs_eta126D7kz);
    };
    this.hs_genericTake.notEvaluated = true;
    this.hs_genericTake.evaluate = function (hs_zddIntegral26D7kL, hs_eta26D7kQ, hs_eta126D7kU) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddIntegral26D7kL, hs_eta26D7kQ, hs_eta126D7kU);
    };
    this.hs_genericReplicate.notEvaluated = true;
    this.hs_genericReplicate.evaluate = function (hs_zddIntegral26D7l7, hs_n26D7l8, hs_x26D7l9) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddIntegral26D7l7, hs_n26D7l8, hs_x26D7l9);
    };
    this.hs_genericLength.notEvaluated = true;
    this.hs_genericLength.evaluate = function (hs_zddNum26D7lz, hs_ds26D7lx) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddNum26D7lz, hs_ds26D7lx);
    };
    this.hs_minimumBy.notEvaluated = true;
    this.hs_minimumBy.evaluate = function (hs_ds26D7lX, hs_ds126D7lJ) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_ds26D7lX, hs_ds126D7lJ);
    };
    this.hs_maximumBy.notEvaluated = true;
    this.hs_maximumBy.evaluate = function (hs_ds26D7mi, hs_ds126D7m4) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_ds26D7mi, hs_ds126D7m4);
    };
    this.hs_minimum.notEvaluated = true;
    this.hs_minimum.evaluate = function (hs_zddOrd26D7mP, hs_ds26D7mF) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddOrd26D7mP, hs_ds26D7mF);
    };
    this.hs_maximum.notEvaluated = true;
    this.hs_maximum.evaluate = function (hs_zddOrd26D7nl, hs_ds26D7nb) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddOrd26D7nl, hs_ds26D7nb);
    };
    this.hs_insertBy.notEvaluated = true;
    this.hs_insertBy.evaluate = function (hs_ds26D7ny, hs_x26D7nu, hs_ds126D7ns) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_ds26D7ny, hs_x26D7nu, hs_ds126D7ns);
    };
    this.hs_insert.notEvaluated = true;
    this.hs_insert.evaluate = function (hs_zddOrd26D7nG, hs_e26D7nI, hs_ls26D7nJ) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddOrd26D7nG, hs_e26D7nI, hs_ls26D7nJ);
    };
    this.hs_mapAccumR.notEvaluated = true;
    this.hs_mapAccumR.evaluate = function (hs_ds26D7nT, hs_s26D7nP, hs_ds126D7nN) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_ds26D7nT, hs_s26D7nP, hs_ds126D7nN);
    };
    this.hs_mapAccumL.notEvaluated = true;
    this.hs_mapAccumL.evaluate = function (hs_ds26D7ou, hs_s26D7op, hs_ds126D7on) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_ds26D7ou, hs_s26D7op, hs_ds126D7on);
    };
    this.hs_partition.notEvaluated = true;
    this.hs_partition.evaluate = function (hs_eta26D7pp, hs_eta126D7ps) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_eta26D7pp, hs_eta126D7ps);
    };
    this.hs_transpose.notEvaluated = true;
    this.hs_transpose.evaluate = function (hs_ds26D7pu) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_ds26D7pu);
    };
    this.hs_intersperse.notEvaluated = true;
    this.hs_intersperse.evaluate = function (hs_ds26D7qn, hs_ds126D7qe) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_ds26D7qn, hs_ds126D7qe);
    };
    this.hs_intercalate.notEvaluated = true;
    this.hs_intercalate.evaluate = function (hs_xs26D7qt, hs_xss26D7qu) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_xs26D7qt, hs_xss26D7qu);
    };
    this.hs_intersectBy.notEvaluated = true;
    this.hs_intersectBy.evaluate = function (hs_eq26D7qG, hs_xs26D7qN, hs_ys26D7qI) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_eq26D7qG, hs_xs26D7qN, hs_ys26D7qI);
    };
    this.hs_intersect.notEvaluated = true;
    this.hs_intersect.evaluate = function (hs_zddEq26D7qR, hs_eta26D7qT, hs_eta126D7qU) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddEq26D7qR, hs_eta26D7qT, hs_eta126D7qU);
    };
    this.hs_deleteBy.notEvaluated = true;
    this.hs_deleteBy.evaluate = function (hs_ds26D7r4, hs_ds126D7r2, hs_ds226D7qY) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_ds26D7r4, hs_ds126D7r2, hs_ds226D7qY);
    };
    this.hs_deleteFirstsBy.notEvaluated = true;
    this.hs_deleteFirstsBy.evaluate = function (hs_eq26D7r9) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_eq26D7r9);
    };
    this.hs_delete.notEvaluated = true;
    this.hs_delete.evaluate = function (hs_zddEq26D7rf, hs_eta26D7rh, hs_eta126D7ri) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddEq26D7rf, hs_eta26D7rh, hs_eta126D7ri);
    };
    this.hs_zrzr.notEvaluated = true;
    this.hs_zrzr.evaluate = function (hs_zddEq26D7rk) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddEq26D7rk);
    };
    this.hs_nubBy.notEvaluated = true;
    this.hs_nubBy.evaluate = function (hs_eq26D7rJ, hs_l26D7rR) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_eq26D7rJ, hs_l26D7rR);
    };
    this.hs_unionBy.notEvaluated = true;
    this.hs_unionBy.evaluate = function (hs_eq26D7rW, hs_xs26D7rV, hs_ys26D7rZ) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_eq26D7rW, hs_xs26D7rV, hs_ys26D7rZ);
    };
    this.hs_union.notEvaluated = true;
    this.hs_union.evaluate = function (hs_zddEq26D7s5, hs_eta26D7s7, hs_eta126D7s8) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddEq26D7s5, hs_eta26D7s7, hs_eta126D7s8);
    };
    this.hs_nub.notEvaluated = true;
    this.hs_nub.evaluate = function (hs_zddEq26D7si, hs_l26D7sq) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddEq26D7si, hs_l26D7sq);
    };
    this.hs_isPrefixOf.notEvaluated = true;
    this.hs_isPrefixOf.evaluate = function (hs_zddEq26D7sO, hs_ds26D7sy, hs_ds126D7sC) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddEq26D7sO, hs_ds26D7sy, hs_ds126D7sC);
    };
    this.hs_isSuffixOf.notEvaluated = true;
    this.hs_isSuffixOf.evaluate = function (hs_zddEq26D7sY, hs_x26D7sZ, hs_y26D7t1) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddEq26D7sY, hs_x26D7sZ, hs_y26D7t1);
    };
    this.hs_isInfixOf.notEvaluated = true;
    this.hs_isInfixOf.evaluate = function (hs_zddEq26D7t6, hs_needle26D7t7, hs_haystack26D7t9) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddEq26D7t6, hs_needle26D7t7, hs_haystack26D7t9);
    };
    this.hs_findIndices.notEvaluated = true;
    this.hs_findIndices.evaluate = function (hs_p26D7tl, hs_ls26D7tu) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_p26D7tl, hs_ls26D7tu);
    };
    this.hs_findIndex.notEvaluated = true;
    this.hs_findIndex.evaluate = function (hs_p26D7tw) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_p26D7tw);
    };
    this.hs_find.notEvaluated = true;
    this.hs_find.evaluate = function (hs_p26D7tz) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_p26D7tz);
    };
    this.hs_elemIndices.notEvaluated = true;
    this.hs_elemIndices.evaluate = function (hs_zddEq26D7tD, hs_x26D7tE) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddEq26D7tD, hs_x26D7tE);
    };
    this.hs_elemIndex.notEvaluated = true;
    this.hs_elemIndex.evaluate = function (hs_zddEq26D7tI, hs_x26D7tJ) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddEq26D7tI, hs_x26D7tJ);
    };
    this.hs_stripPrefix.notEvaluated = true;
    this.hs_stripPrefix.evaluate = function (hs_zddEq26D7tX, hs_ds26D7tP, hs_ys26D7tR) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddEq26D7tX, hs_ds26D7tP, hs_ys26D7tR);
    };
    this.hs_sum.notEvaluated = true;
    this.hs_sum.evaluate = function (hs_zddNum26D7uO, hs_l26D7uS) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddNum26D7uO, hs_l26D7uS);
    };
    this.hs_product.notEvaluated = true;
    this.hs_product.evaluate = function (hs_zddNum26D7vG, hs_l26D7vK) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddNum26D7vG, hs_l26D7vK);
    };
    this.hs_lines.notEvaluated = true;
    this.hs_lines.evaluate = function (hs_ds26D7vO) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_ds26D7vO);
    };
};
$hs.modules.DataziList.initAfterDependencies = function () {
    this.hs_unwords.notEvaluated = false;
    this.hs_words.notEvaluated = false;
    this.hs_unlines.notEvaluated = false;
    this.hs_foldl1.notEvaluated = false;
    this.hs_foldlzq.notEvaluated = false;
    this.hs_foldl1zq.notEvaluated = false;
    this.hs_unfoldr.notEvaluated = false;
    this.hs_sortBy.notEvaluated = false;
    this.hs_sort.notEvaluated = false;
    this.hs_permutations.notEvaluated = false;
    this.hs_subsequences.notEvaluated = false;
    this.hs_tails.notEvaluated = false;
    this.hs_inits.notEvaluated = false;
    this.hs_groupBy.notEvaluated = false;
    this.hs_group.notEvaluated = false;
    this.hs_zzipWith7.notEvaluated = false;
    this.hs_zzipWith6.notEvaluated = false;
    this.hs_zzipWith5.notEvaluated = false;
    this.hs_zzipWith4.notEvaluated = false;
    this.hs_zzip7.notEvaluated = false;
    this.hs_zzip6.notEvaluated = false;
    this.hs_zzip5.notEvaluated = false;
    this.hs_zzip4.notEvaluated = false;
    this.hs_genericIndex.notEvaluated = false;
    this.hs_genericSplitAt.notEvaluated = false;
    this.hs_genericDrop.notEvaluated = false;
    this.hs_genericTake.notEvaluated = false;
    this.hs_genericReplicate.notEvaluated = false;
    this.hs_genericLength.notEvaluated = false;
    this.hs_minimumBy.notEvaluated = false;
    this.hs_maximumBy.notEvaluated = false;
    this.hs_minimum.notEvaluated = false;
    this.hs_maximum.notEvaluated = false;
    this.hs_insertBy.notEvaluated = false;
    this.hs_insert.notEvaluated = false;
    this.hs_mapAccumR.notEvaluated = false;
    this.hs_mapAccumL.notEvaluated = false;
    this.hs_partition.notEvaluated = false;
    this.hs_transpose.notEvaluated = false;
    this.hs_intersperse.notEvaluated = false;
    this.hs_intercalate.notEvaluated = false;
    this.hs_intersectBy.notEvaluated = false;
    this.hs_intersect.notEvaluated = false;
    this.hs_deleteBy.notEvaluated = false;
    this.hs_deleteFirstsBy.notEvaluated = false;
    this.hs_delete.notEvaluated = false;
    this.hs_zrzr.notEvaluated = false;
    this.hs_nubBy.notEvaluated = false;
    this.hs_unionBy.notEvaluated = false;
    this.hs_union.notEvaluated = false;
    this.hs_nub.notEvaluated = false;
    this.hs_isPrefixOf.notEvaluated = false;
    this.hs_isSuffixOf.notEvaluated = false;
    this.hs_isInfixOf.notEvaluated = false;
    this.hs_findIndices.notEvaluated = false;
    this.hs_findIndex.notEvaluated = false;
    this.hs_find.notEvaluated = false;
    this.hs_elemIndices.notEvaluated = false;
    this.hs_elemIndex.notEvaluated = false;
    this.hs_stripPrefix.notEvaluated = false;
    this.hs_sum.notEvaluated = false;
    this.hs_product.notEvaluated = false;
    this.hs_lines.notEvaluated = false;
    var hs_nonEmptySubsequences25t6zv = new $hs.Func(1);
    var hs_strictGenericLength25t6yJ = new $hs.Func(2);
    var hs_strictMinimum25t6yB = new $hs.Func(2);
    var hs_strictMaximum25t6yx = new $hs.Func(2);
    var hs_select25t6yl = new $hs.Func(3);
    var hs_elemzuby25t6xX = new $hs.Func(3);
    var hs_sum125uIXO = new $hs.Func(1);
    var hs_sum225uIY6 = new $hs.Func(1);
    var hs_product125uIYG = new $hs.Func(1);
    var hs_product225uIYY = new $hs.Func(1);
    this.hs_unwords.evaluate = function (hs_ds26D76n) {
        var hs_wild26D7wk = hs_ds26D76n;
        if (hs_ds26D76n.notEvaluated) {
            hs_wild26D7wk = hs_ds26D76n.hscall();
        }
        switch (hs_wild26D7wk.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_w26D76t = hs_wild26D7wk.data[0];
            var hs_ds126D76r = hs_wild26D7wk.data[1];
            var hs_wild126D76x = hs_ds126D76r;
            if (hs_ds126D76r.notEvaluated) {
                hs_wild126D76x = hs_ds126D76r.hscall();
            }
            switch (hs_wild126D76x.tag) {
            case 1:
                if (hs_w26D76t.notEvaluated) {
                    return hs_w26D76t.hscall();
                } else {
                    return hs_w26D76t;
                }
            case 2:
                var hs_sat26D7wn = new $hs.Thunk();
                hs_sat26D7wn.evaluateOnce = function () {
                    return $hs.modules.DataziList.hs_unwords.hscall(hs_wild126D76x);
                };
                var hs_sat26D7wo = new $hs.Data(1);
                hs_sat26D7wo.data = [" "];
                var hs_sat26D7wp = new $hs.Data(2);
                hs_sat26D7wp.data = [hs_sat26D7wo, hs_sat26D7wn];
                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_w26D76t, hs_sat26D7wp);
            }
        }
    };
    this.hs_words.evaluate = function (hs_s26D76B) {
        var hs_wild26D76G = $hs.modules.GHCziList.hs_dropWhile.hscall($hs.modules.GHCziUnicode.hs_isSpace, hs_s26D76B);
        switch (hs_wild26D76G.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_ds26D76H = new $hs.Thunk();
            hs_ds26D76H.evaluateOnce = function () {
                return $hs.modules.GHCziList.hs_break.hscall($hs.modules.GHCziUnicode.hs_isSpace, hs_wild26D76G);
            };
            var hs_sat26D7ww = new $hs.Thunk();
            hs_sat26D7ww.evaluateOnce = function () {
                var hs_sat26D7wu = new $hs.Thunk();
                hs_sat26D7wu.evaluateOnce = function () {
                    var hs_wild126D7wt = hs_ds26D76H;
                    if (hs_ds26D76H.notEvaluated) {
                        hs_wild126D7wt = hs_ds26D76H.hscall();
                    }
                    var hs_szqzq26D76Q = hs_wild126D7wt.data[1];
                    if (hs_szqzq26D76Q.notEvaluated) {
                        return hs_szqzq26D76Q.hscall();
                    } else {
                        return hs_szqzq26D76Q;
                    }
                };
                return $hs.modules.DataziList.hs_words.hscall(hs_sat26D7wu);
            };
            var hs_sat26D7wy = new $hs.Thunk();
            hs_sat26D7wy.evaluateOnce = function () {
                var hs_wild126D7wv = hs_ds26D76H;
                if (hs_ds26D76H.notEvaluated) {
                    hs_wild126D7wv = hs_ds26D76H.hscall();
                }
                var hs_w26D76L = hs_wild126D7wv.data[0];
                if (hs_w26D76L.notEvaluated) {
                    return hs_w26D76L.hscall();
                } else {
                    return hs_w26D76L;
                }
            };
            var $res = new $hs.Data(2);
            $res.data = [hs_sat26D7wy, hs_sat26D7ww];
            return $res;
        }
    };
    this.hs_unlines.evaluate = function (hs_ds26D76U) {
        var hs_wild26D7wz = hs_ds26D76U;
        if (hs_ds26D76U.notEvaluated) {
            hs_wild26D7wz = hs_ds26D76U.hscall();
        }
        switch (hs_wild26D7wz.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_l26D76Y = hs_wild26D7wz.data[0];
            var hs_ls26D770 = hs_wild26D7wz.data[1];
            var hs_sat26D7wA = new $hs.Thunk();
            hs_sat26D7wA.evaluateOnce = function () {
                return $hs.modules.DataziList.hs_unlines.hscall(hs_ls26D770);
            };
            var hs_sat26D7wB = new $hs.Data(1);
            hs_sat26D7wB.data = ["\n"];
            var hs_sat26D7wC = new $hs.Data(2);
            hs_sat26D7wC.data = [hs_sat26D7wB, hs_sat26D7wA];
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_l26D76Y, hs_sat26D7wC);
        }
    };
    this.hs_foldl1.evaluate = function (hs_f26D77a, hs_ds26D775) {
        var hs_wild26D7wD = hs_ds26D775;
        if (hs_ds26D775.notEvaluated) {
            hs_wild26D7wD = hs_ds26D775.hscall();
        }
        switch (hs_wild26D7wD.tag) {
        case 1:
            var hs_sat26D7wE = new $hs.Thunk();
            hs_sat26D7wE.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("foldl1\x00");
            };
            return $hs.modules.GHCziList.hs_errorEmptyList.hscall(hs_sat26D7wE);
        case 2:
            var hs_x26D77b = hs_wild26D7wD.data[0];
            var hs_xs26D77c = hs_wild26D7wD.data[1];
            return $hs.modules.GHCziList.hs_foldl.hscall(hs_f26D77a, hs_x26D77b, hs_xs26D77c);
        }
    };
    this.hs_foldlzq.evaluate = function (hs_f26D77p, hs_zz026D77u, hs_xs026D77v) {
        var hs_lgo26D77t = new $hs.Func(2);
        hs_lgo26D77t.evaluate = function (hs_zz26D77l, hs_ds26D77j) {
            var hs_wild26D7wF = hs_ds26D77j;
            if (hs_ds26D77j.notEvaluated) {
                hs_wild26D7wF = hs_ds26D77j.hscall();
            }
            switch (hs_wild26D7wF.tag) {
            case 1:
                if (hs_zz26D77l.notEvaluated) {
                    return hs_zz26D77l.hscall();
                } else {
                    return hs_zz26D77l;
                }
            case 2:
                var hs_x26D77o = hs_wild26D7wF.data[0];
                var hs_xs26D77s = hs_wild26D7wF.data[1];
                var hs_zzzq26D77r = hs_f26D77p.hscall(hs_zz26D77l, hs_x26D77o);
                return hs_lgo26D77t.hscall(hs_zzzq26D77r, hs_xs26D77s);
            }
        };
        return hs_lgo26D77t.hscall(hs_zz026D77u, hs_xs026D77v);
    };
    this.hs_foldl1zq.evaluate = function (hs_f26D77D, hs_ds26D77y) {
        var hs_wild26D7wG = hs_ds26D77y;
        if (hs_ds26D77y.notEvaluated) {
            hs_wild26D7wG = hs_ds26D77y.hscall();
        }
        switch (hs_wild26D7wG.tag) {
        case 1:
            var hs_sat26D7wH = new $hs.Thunk();
            hs_sat26D7wH.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("foldl1'\x00");
            };
            return $hs.modules.GHCziList.hs_errorEmptyList.hscall(hs_sat26D7wH);
        case 2:
            var hs_x26D77E = hs_wild26D7wG.data[0];
            var hs_xs26D77F = hs_wild26D7wG.data[1];
            return $hs.modules.DataziList.hs_foldlzq.hscall(hs_f26D77D, hs_x26D77E, hs_xs26D77F);
        }
    };
    this.hs_unfoldr.evaluate = function (hs_f26D77J, hs_b26D77I) {
        var hs_wild26D7wI = hs_f26D77J.hscall(hs_b26D77I);
        switch (hs_wild26D7wI.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_ds26D77M = hs_wild26D7wI.data[0];
            var hs_wild126D7wJ = hs_ds26D77M;
            if (hs_ds26D77M.notEvaluated) {
                hs_wild126D7wJ = hs_ds26D77M.hscall();
            }
            var hs_a26D77Q = hs_wild126D7wJ.data[0];
            var hs_newzub26D77R = hs_wild126D7wJ.data[1];
            var hs_sat26D7wK = new $hs.Thunk();
            hs_sat26D7wK.evaluateOnce = function () {
                return $hs.modules.DataziList.hs_unfoldr.hscall(hs_f26D77J, hs_newzub26D77R);
            };
            var $res = new $hs.Data(2);
            $res.data = [hs_a26D77Q, hs_sat26D7wK];
            return $res;
        }
    };
    this.hs_sortBy.evaluate = function (hs_cmp26D788) {
        var hs_merge26D78d = new $hs.Func(2);
        hs_merge26D78d.evaluate = function (hs_as26D77X, hs_bs26D77Z) {
            var hs_wild26D783 = hs_as26D77X;
            if (hs_as26D77X.notEvaluated) {
                hs_wild26D783 = hs_as26D77X.hscall();
            }
            switch (hs_wild26D783.tag) {
            case 1:
                if (hs_bs26D77Z.notEvaluated) {
                    return hs_bs26D77Z.hscall();
                } else {
                    return hs_bs26D77Z;
                }
            case 2:
                var hs_a26D786 = hs_wild26D783.data[0];
                var hs_aszq26D78b = hs_wild26D783.data[1];
                var hs_wild126D78c = hs_bs26D77Z;
                if (hs_bs26D77Z.notEvaluated) {
                    hs_wild126D78c = hs_bs26D77Z.hscall();
                }
                switch (hs_wild126D78c.tag) {
                case 1:
                    if (hs_wild26D783.notEvaluated) {
                        return hs_wild26D783.hscall();
                    } else {
                        return hs_wild26D783;
                    }
                case 2:
                    var hs_b26D787 = hs_wild126D78c.data[0];
                    var hs_bszq26D78f = hs_wild126D78c.data[1];
                    var hs_sat26D7wM = new $hs.Thunk();
                    hs_sat26D7wM.evaluateOnce = function () {
                        return hs_cmp26D788.hscall(hs_a26D786, hs_b26D787);
                    };
                    var hs_wild226D7wL = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqOrdering, hs_sat26D7wM, $hs.modules.GHCziOrdering.hs_GT);
                    switch (hs_wild226D7wL.tag) {
                    case 1:
                        var hs_sat26D7wN = new $hs.Thunk();
                        hs_sat26D7wN.evaluateOnce = function () {
                            return hs_merge26D78d.hscall(hs_aszq26D78b, hs_wild126D78c);
                        };
                        var $res = new $hs.Data(2);
                        $res.data = [hs_a26D786, hs_sat26D7wN];
                        return $res;
                    case 2:
                        var hs_sat26D7wO = new $hs.Thunk();
                        hs_sat26D7wO.evaluateOnce = function () {
                            return hs_merge26D78d.hscall(hs_wild26D783, hs_bszq26D78f);
                        };
                        var $res = new $hs.Data(2);
                        $res.data = [hs_b26D787, hs_sat26D7wO];
                        return $res;
                    }
                }
            }
        };
        var hs_mergePairs26D78w = new $hs.Func(1);
        hs_mergePairs26D78w.evaluate = function (hs_ds26D78j) {
            var hs_wild26D78p = hs_ds26D78j;
            if (hs_ds26D78j.notEvaluated) {
                hs_wild26D78p = hs_ds26D78j.hscall();
            }
            switch (hs_wild26D78p.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_a26D78s = hs_wild26D78p.data[0];
                var hs_ds126D78n = hs_wild26D78p.data[1];
                var hs_wild126D7wP = hs_ds126D78n;
                if (hs_ds126D78n.notEvaluated) {
                    hs_wild126D7wP = hs_ds126D78n.hscall();
                }
                switch (hs_wild126D7wP.tag) {
                case 1:
                    if (hs_wild26D78p.notEvaluated) {
                        return hs_wild26D78p.hscall();
                    } else {
                        return hs_wild26D78p;
                    }
                case 2:
                    var hs_b26D78t = hs_wild126D7wP.data[0];
                    var hs_xs26D78v = hs_wild126D7wP.data[1];
                    var hs_sat26D7wQ = new $hs.Thunk();
                    hs_sat26D7wQ.evaluateOnce = function () {
                        return hs_mergePairs26D78w.hscall(hs_xs26D78v);
                    };
                    var hs_sat26D7wR = new $hs.Thunk();
                    hs_sat26D7wR.evaluateOnce = function () {
                        return hs_merge26D78d.hscall(hs_a26D78s, hs_b26D78t);
                    };
                    var $res = new $hs.Data(2);
                    $res.data = [hs_sat26D7wR, hs_sat26D7wQ];
                    return $res;
                }
            }
        };
        var hs_ascending26D79e = new $hs.Func(3);
        var hs_descending26D79y = new $hs.Func(3);
        var hs_sequences26D790 = new $hs.Func(1);
        hs_ascending26D79e.evaluate = function (hs_a26D78W, hs_as26D78X, hs_ds26D78U) {
            var hs_wild26D799 = hs_ds26D78U;
            if (hs_ds26D78U.notEvaluated) {
                hs_wild26D799 = hs_ds26D78U.hscall();
            }
            switch (hs_wild26D799.tag) {
            case 1:
                var hs_sat26D7wS = new $hs.Thunk();
                hs_sat26D7wS.evaluateOnce = function () {
                    return hs_sequences26D790.hscall($hs.modules.GHCziTypes.hs_ZMZN);
                };
                var hs_sat26D7wU = new $hs.Thunk();
                hs_sat26D7wU.evaluateOnce = function () {
                    var hs_sat26D7wT = new $hs.Data(2);
                    hs_sat26D7wT.data = [hs_a26D78W, $hs.modules.GHCziTypes.hs_ZMZN];
                    return hs_as26D78X.hscall(hs_sat26D7wT);
                };
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26D7wU, hs_sat26D7wS];
                return $res;
            case 2:
                var hs_b26D794 = hs_wild26D799.data[0];
                var hs_bs26D79g = hs_wild26D799.data[1];
                var hs_sat26D7wW = new $hs.Thunk();
                hs_sat26D7wW.evaluateOnce = function () {
                    return hs_cmp26D788.hscall(hs_a26D78W, hs_b26D794);
                };
                var hs_wild126D7wV = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziClasses.hs_zdfEqOrdering, hs_sat26D7wW, $hs.modules.GHCziOrdering.hs_GT);
                switch (hs_wild126D7wV.tag) {
                case 1:
                    var hs_sat26D7wX = new $hs.Thunk();
                    hs_sat26D7wX.evaluateOnce = function () {
                        return hs_sequences26D790.hscall(hs_wild26D799);
                    };
                    var hs_sat26D7wZ = new $hs.Thunk();
                    hs_sat26D7wZ.evaluateOnce = function () {
                        var hs_sat26D7wY = new $hs.Data(2);
                        hs_sat26D7wY.data = [hs_a26D78W, $hs.modules.GHCziTypes.hs_ZMZN];
                        return hs_as26D78X.hscall(hs_sat26D7wY);
                    };
                    var $res = new $hs.Data(2);
                    $res.data = [hs_sat26D7wZ, hs_sat26D7wX];
                    return $res;
                case 2:
                    var hs_sat26D7x1 = new $hs.Func(1);
                    hs_sat26D7x1.evaluate = function (hs_ys26D79c) {
                        var hs_sat26D7x0 = new $hs.Data(2);
                        hs_sat26D7x0.data = [hs_a26D78W, hs_ys26D79c];
                        return hs_as26D78X.hscall(hs_sat26D7x0);
                    };
                    return hs_ascending26D79e.hscall(hs_b26D794, hs_sat26D7x1, hs_bs26D79g);
                }
            }
        };
        hs_descending26D79y.evaluate = function (hs_a26D79m, hs_as26D79n, hs_ds26D79k) {
            var hs_wild26D79w = hs_ds26D79k;
            if (hs_ds26D79k.notEvaluated) {
                hs_wild26D79w = hs_ds26D79k.hscall();
            }
            switch (hs_wild26D79w.tag) {
            case 1:
                var hs_sat26D7x2 = new $hs.Thunk();
                hs_sat26D7x2.evaluateOnce = function () {
                    return hs_sequences26D790.hscall($hs.modules.GHCziTypes.hs_ZMZN);
                };
                var hs_sat26D7x3 = new $hs.Data(2);
                hs_sat26D7x3.data = [hs_a26D79m, hs_as26D79n];
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26D7x3, hs_sat26D7x2];
                return $res;
            case 2:
                var hs_b26D79s = hs_wild26D79w.data[0];
                var hs_bs26D79A = hs_wild26D79w.data[1];
                var hs_sat26D7x5 = new $hs.Thunk();
                hs_sat26D7x5.evaluateOnce = function () {
                    return hs_cmp26D788.hscall(hs_a26D79m, hs_b26D79s);
                };
                var hs_wild126D7x4 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqOrdering, hs_sat26D7x5, $hs.modules.GHCziOrdering.hs_GT);
                switch (hs_wild126D7x4.tag) {
                case 1:
                    var hs_sat26D7x6 = new $hs.Thunk();
                    hs_sat26D7x6.evaluateOnce = function () {
                        return hs_sequences26D790.hscall(hs_wild26D79w);
                    };
                    var hs_sat26D7x7 = new $hs.Data(2);
                    hs_sat26D7x7.data = [hs_a26D79m, hs_as26D79n];
                    var $res = new $hs.Data(2);
                    $res.data = [hs_sat26D7x7, hs_sat26D7x6];
                    return $res;
                case 2:
                    var hs_sat26D7x8 = new $hs.Data(2);
                    hs_sat26D7x8.data = [hs_a26D79m, hs_as26D79n];
                    return hs_descending26D79y.hscall(hs_b26D79s, hs_sat26D7x8, hs_bs26D79A);
                }
            }
        };
        hs_sequences26D790.evaluate = function (hs_ds26D79C) {
            var hs_wild26D79I = hs_ds26D79C;
            if (hs_ds26D79C.notEvaluated) {
                hs_wild26D79I = hs_ds26D79C.hscall();
            }
            switch (hs_wild26D79I.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [$hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN];
                return $res;
            case 2:
                var hs_a26D79L = hs_wild26D79I.data[0];
                var hs_ds126D79G = hs_wild26D79I.data[1];
                var hs_wild126D7x9 = hs_ds126D79G;
                if (hs_ds126D79G.notEvaluated) {
                    hs_wild126D7x9 = hs_ds126D79G.hscall();
                }
                switch (hs_wild126D7x9.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [hs_wild26D79I, $hs.modules.GHCziTypes.hs_ZMZN];
                    return $res;
                case 2:
                    var hs_b26D79M = hs_wild126D7x9.data[0];
                    var hs_xs26D79Q = hs_wild126D7x9.data[1];
                    var hs_sat26D7xb = new $hs.Thunk();
                    hs_sat26D7xb.evaluateOnce = function () {
                        return hs_cmp26D788.hscall(hs_a26D79L, hs_b26D79M);
                    };
                    var hs_wild226D7xa = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqOrdering, hs_sat26D7xb, $hs.modules.GHCziOrdering.hs_GT);
                    switch (hs_wild226D7xa.tag) {
                    case 1:
                        var hs_sat26D7xc = new $hs.Func(1);
                        hs_sat26D7xc.evaluate = function (hs_eta1cW6l3) {
                            var $res = new $hs.Data(2);
                            $res.data = [hs_a26D79L, hs_eta1cW6l3];
                            return $res;
                        };
                        return hs_ascending26D79e.hscall(hs_b26D79M, hs_sat26D7xc, hs_xs26D79Q);
                    case 2:
                        var hs_sat26D7xd = new $hs.Data(2);
                        hs_sat26D7xd.data = [hs_a26D79L, $hs.modules.GHCziTypes.hs_ZMZN];
                        return hs_descending26D79y.hscall(hs_b26D79M, hs_sat26D7xd, hs_xs26D79Q);
                    }
                }
            }
        };
        var hs_sat26D7xe = new $hs.Func(1);
        hs_sat26D7xe.evaluate = function (hs_eta1cW6l3) {
            return hs_sequences26D790.hscall(hs_eta1cW6l3);
        };
        var hs_mergeAll26D78C = new $hs.Func(1);
        hs_mergeAll26D78C.evaluate = function (hs_ds26D78A) {
            var hs_wild26D78L = hs_ds26D78A;
            if (hs_ds26D78A.notEvaluated) {
                hs_wild26D78L = hs_ds26D78A.hscall();
            }
            switch (hs_wild26D78L.tag) {
            case 1:
                var hs_sat26D7xf = new $hs.Thunk();
                hs_sat26D7xf.evaluateOnce = function () {
                    return hs_mergePairs26D78w.hscall($hs.modules.GHCziTypes.hs_ZMZN);
                };
                return hs_mergeAll26D78C.hscall(hs_sat26D7xf);
            case 2:
                var hs_x26D78I = hs_wild26D78L.data[0];
                var hs_ds126D78G = hs_wild26D78L.data[1];
                var hs_wild126D7xg = hs_ds126D78G;
                if (hs_ds126D78G.notEvaluated) {
                    hs_wild126D7xg = hs_ds126D78G.hscall();
                }
                switch (hs_wild126D7xg.tag) {
                case 1:
                    if (hs_x26D78I.notEvaluated) {
                        return hs_x26D78I.hscall();
                    } else {
                        return hs_x26D78I;
                    }
                case 2:
                    var hs_sat26D7xj = new $hs.Thunk();
                    hs_sat26D7xj.evaluateOnce = function () {
                        return hs_mergePairs26D78w.hscall(hs_wild26D78L);
                    };
                    return hs_mergeAll26D78C.hscall(hs_sat26D7xj);
                }
            }
        };
        var hs_sat26D7xk = new $hs.Func(1);
        hs_sat26D7xk.evaluate = function (hs_eta1cW6l3) {
            return hs_mergeAll26D78C.hscall(hs_eta1cW6l3);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26D7xk, hs_sat26D7xe);
    };
    this.hs_sort.evaluate = function (hs_zddOrd26D79U) {
        var hs_sat26D7xl = new $hs.Thunk();
        hs_sat26D7xl.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd26D79U);
        };
        return $hs.modules.DataziList.hs_sortBy.hscall(hs_sat26D7xl);
    };
    this.hs_permutations.evaluate = function (hs_xs026D79X) {
        var hs_sat26D7xG = new $hs.Thunk();
        hs_sat26D7xG.evaluateOnce = function () {
            var hs_perms26D7aO = new $hs.Func(2);
            hs_perms26D7aO.evaluate = function (hs_ds26D7a1, hs_ds126D7aN) {
                var hs_wild26D7xm = hs_ds26D7a1;
                if (hs_ds26D7a1.notEvaluated) {
                    hs_wild26D7xm = hs_ds26D7a1.hscall();
                }
                switch (hs_wild26D7xm.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_t26D7au = hs_wild26D7xm.data[0];
                    var hs_ts26D7ab = hs_wild26D7xm.data[1];
                    var hs_interleavezq26D7aj = new $hs.Func(3);
                    hs_interleavezq26D7aj.evaluate = function (hs_ds226D7ag, hs_ds326D7a9, hs_r26D7ac) {
                        var hs_wild126D7xn = hs_ds326D7a9;
                        if (hs_ds326D7a9.notEvaluated) {
                            hs_wild126D7xn = hs_ds326D7a9.hscall();
                        }
                        switch (hs_wild126D7xn.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [hs_ts26D7ab, hs_r26D7ac];
                            return $res;
                        case 2:
                            var hs_y26D7ah = hs_wild126D7xn.data[0];
                            var hs_ys26D7al = hs_wild126D7xn.data[1];
                            var hs_ds426D7am = new $hs.Thunk();
                            hs_ds426D7am.evaluateOnce = function () {
                                var hs_sat26D7xp = new $hs.Thunk();
                                hs_sat26D7xp.evaluateOnce = function () {
                                    var hs_sat26D7xo = new $hs.Func(1);
                                    hs_sat26D7xo.evaluate = function (hs_eta1cW6l3) {
                                        var $res = new $hs.Data(2);
                                        $res.data = [hs_y26D7ah, hs_eta1cW6l3];
                                        return $res;
                                    };
                                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_ds226D7ag, hs_sat26D7xo);
                                };
                                return hs_interleavezq26D7aj.hscall(hs_sat26D7xp, hs_ys26D7al, hs_r26D7ac);
                            };
                            var hs_us26D7as = new $hs.Thunk();
                            hs_us26D7as.evaluateOnce = function () {
                                var hs_wild226D7xq = hs_ds426D7am;
                                if (hs_ds426D7am.notEvaluated) {
                                    hs_wild226D7xq = hs_ds426D7am.hscall();
                                }
                                var hs_us126D7ar = hs_wild226D7xq.data[0];
                                if (hs_us126D7ar.notEvaluated) {
                                    return hs_us126D7ar.hscall();
                                } else {
                                    return hs_us126D7ar;
                                }
                            };
                            var hs_sat26D7xu = new $hs.Thunk();
                            hs_sat26D7xu.evaluateOnce = function () {
                                var hs_wild226D7xt = hs_ds426D7am;
                                if (hs_ds426D7am.notEvaluated) {
                                    hs_wild226D7xt = hs_ds426D7am.hscall();
                                }
                                var hs_zzs26D7aB = hs_wild226D7xt.data[1];
                                if (hs_zzs26D7aB.notEvaluated) {
                                    return hs_zzs26D7aB.hscall();
                                } else {
                                    return hs_zzs26D7aB;
                                }
                            };
                            var hs_sat26D7xx = new $hs.Thunk();
                            hs_sat26D7xx.evaluateOnce = function () {
                                var hs_sat26D7xv = new $hs.Data(2);
                                hs_sat26D7xv.data = [hs_y26D7ah, hs_us26D7as];
                                var hs_sat26D7xw = new $hs.Data(2);
                                hs_sat26D7xw.data = [hs_t26D7au, hs_sat26D7xv];
                                return hs_ds226D7ag.hscall(hs_sat26D7xw);
                            };
                            var hs_sat26D7xy = new $hs.Data(2);
                            hs_sat26D7xy.data = [hs_sat26D7xx, hs_sat26D7xu];
                            var hs_sat26D7xz = new $hs.Data(2);
                            hs_sat26D7xz.data = [hs_y26D7ah, hs_us26D7as];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_sat26D7xz, hs_sat26D7xy];
                            return $res;
                        }
                    };
                    var hs_sat26D7xA = new $hs.Thunk();
                    hs_sat26D7xA.evaluateOnce = function () {
                        return $hs.modules.DataziList.hs_permutations.hscall(hs_ds126D7aN);
                    };
                    var hs_sat26D7xE = new $hs.Thunk();
                    hs_sat26D7xE.evaluateOnce = function () {
                        var hs_sat26D7xB = new $hs.Data(2);
                        hs_sat26D7xB.data = [hs_t26D7au, hs_ds126D7aN];
                        return hs_perms26D7aO.hscall(hs_ts26D7ab, hs_sat26D7xB);
                    };
                    var hs_sat26D7xF = new $hs.Func(2);
                    hs_sat26D7xF.evaluate = function (hs_xs26D7aG, hs_r26D7aH) {
                        var hs_wild126D7xD = hs_interleavezq26D7aj.hscall($hs.modules.GHCziBase.hs_id, hs_xs26D7aG, hs_r26D7aH);
                        var hs_zzs26D7aL = hs_wild126D7xD.data[1];
                        if (hs_zzs26D7aL.notEvaluated) {
                            return hs_zzs26D7aL.hscall();
                        } else {
                            return hs_zzs26D7aL;
                        }
                    };
                    return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26D7xF, hs_sat26D7xE, hs_sat26D7xA);
                }
            };
            return hs_perms26D7aO.hscall(hs_xs026D79X, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        var $res = new $hs.Data(2);
        $res.data = [hs_xs026D79X, hs_sat26D7xG];
        return $res;
    };
    hs_nonEmptySubsequences25t6zv.evaluate = function (hs_ds26D7aU) {
        var hs_wild26D7xH = hs_ds26D7aU;
        if (hs_ds26D7aU.notEvaluated) {
            hs_wild26D7xH = hs_ds26D7aU.hscall();
        }
        switch (hs_wild26D7xH.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_x26D7aY = hs_wild26D7xH.data[0];
            var hs_xs26D7b7 = hs_wild26D7xH.data[1];
            var hs_sat26D7xM = new $hs.Thunk();
            hs_sat26D7xM.evaluateOnce = function () {
                var hs_sat26D7xI = new $hs.Thunk();
                hs_sat26D7xI.evaluateOnce = function () {
                    return hs_nonEmptySubsequences25t6zv.hscall(hs_xs26D7b7);
                };
                var hs_sat26D7xL = new $hs.Func(2);
                hs_sat26D7xL.evaluate = function (hs_ys26D7b2, hs_r26D7b4) {
                    var hs_sat26D7xJ = new $hs.Data(2);
                    hs_sat26D7xJ.data = [hs_x26D7aY, hs_ys26D7b2];
                    var hs_sat26D7xK = new $hs.Data(2);
                    hs_sat26D7xK.data = [hs_sat26D7xJ, hs_r26D7b4];
                    var $res = new $hs.Data(2);
                    $res.data = [hs_ys26D7b2, hs_sat26D7xK];
                    return $res;
                };
                return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26D7xL, $hs.modules.GHCziTypes.hs_ZMZN, hs_sat26D7xI);
            };
            var hs_sat26D7xN = new $hs.Data(2);
            hs_sat26D7xN.data = [hs_x26D7aY, $hs.modules.GHCziTypes.hs_ZMZN];
            var $res = new $hs.Data(2);
            $res.data = [hs_sat26D7xN, hs_sat26D7xM];
            return $res;
        }
    };
    this.hs_subsequences.evaluate = function (hs_xs26D7bb) {
        var hs_sat26D7xO = new $hs.Thunk();
        hs_sat26D7xO.evaluateOnce = function () {
            return hs_nonEmptySubsequences25t6zv.hscall(hs_xs26D7bb);
        };
        var $res = new $hs.Data(2);
        $res.data = [$hs.modules.GHCziTypes.hs_ZMZN, hs_sat26D7xO];
        return $res;
    };
    this.hs_tails.evaluate = function (hs_ds26D7be) {
        var hs_wild26D7bi = hs_ds26D7be;
        if (hs_ds26D7be.notEvaluated) {
            hs_wild26D7bi = hs_ds26D7be.hscall();
        }
        switch (hs_wild26D7bi.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [$hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN];
            return $res;
        case 2:
            var hs_xs26D7bj = hs_wild26D7bi.data[1];
            var hs_sat26D7xQ = new $hs.Thunk();
            hs_sat26D7xQ.evaluateOnce = function () {
                return $hs.modules.DataziList.hs_tails.hscall(hs_xs26D7bj);
            };
            var $res = new $hs.Data(2);
            $res.data = [hs_wild26D7bi, hs_sat26D7xQ];
            return $res;
        }
    };
    this.hs_inits.evaluate = function (hs_ds26D7bm) {
        var hs_wild26D7xR = hs_ds26D7bm;
        if (hs_ds26D7bm.notEvaluated) {
            hs_wild26D7xR = hs_ds26D7bm.hscall();
        }
        switch (hs_wild26D7xR.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [$hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN];
            return $res;
        case 2:
            var hs_x26D7br = hs_wild26D7xR.data[0];
            var hs_xs26D7bt = hs_wild26D7xR.data[1];
            var hs_sat26D7xU = new $hs.Thunk();
            hs_sat26D7xU.evaluateOnce = function () {
                var hs_sat26D7xS = new $hs.Thunk();
                hs_sat26D7xS.evaluateOnce = function () {
                    return $hs.modules.DataziList.hs_inits.hscall(hs_xs26D7bt);
                };
                var hs_sat26D7xT = new $hs.Func(1);
                hs_sat26D7xT.evaluate = function (hs_eta1cW6l3) {
                    var $res = new $hs.Data(2);
                    $res.data = [hs_x26D7br, hs_eta1cW6l3];
                    return $res;
                };
                return $hs.modules.GHCziBase.hs_map.hscall(hs_sat26D7xT, hs_sat26D7xS);
            };
            var hs_sat26D7xV = new $hs.Data(2);
            hs_sat26D7xV.data = [$hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN];
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D7xV, hs_sat26D7xU);
        }
    };
    this.hs_groupBy.evaluate = function (hs_ds26D7bE, hs_ds126D7by) {
        var hs_wild26D7xW = hs_ds126D7by;
        if (hs_ds126D7by.notEvaluated) {
            hs_wild26D7xW = hs_ds126D7by.hscall();
        }
        switch (hs_wild26D7xW.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_x26D7bD = hs_wild26D7xW.data[0];
            var hs_xs26D7bG = hs_wild26D7xW.data[1];
            var hs_ds226D7bH = new $hs.Thunk();
            hs_ds226D7bH.evaluateOnce = function () {
                var hs_sat26D7xX = new $hs.Thunk();
                hs_sat26D7xX.evaluateOnce = function () {
                    return hs_ds26D7bE.hscall(hs_x26D7bD);
                };
                return $hs.modules.GHCziList.hs_span.hscall(hs_sat26D7xX, hs_xs26D7bG);
            };
            var hs_sat26D7y2 = new $hs.Thunk();
            hs_sat26D7y2.evaluateOnce = function () {
                var hs_sat26D7y0 = new $hs.Thunk();
                hs_sat26D7y0.evaluateOnce = function () {
                    var hs_wild126D7xZ = hs_ds226D7bH;
                    if (hs_ds226D7bH.notEvaluated) {
                        hs_wild126D7xZ = hs_ds226D7bH.hscall();
                    }
                    var hs_zzs26D7bR = hs_wild126D7xZ.data[1];
                    if (hs_zzs26D7bR.notEvaluated) {
                        return hs_zzs26D7bR.hscall();
                    } else {
                        return hs_zzs26D7bR;
                    }
                };
                return $hs.modules.DataziList.hs_groupBy.hscall(hs_ds26D7bE, hs_sat26D7y0);
            };
            var hs_sat26D7y4 = new $hs.Thunk();
            hs_sat26D7y4.evaluateOnce = function () {
                var hs_wild126D7y1 = hs_ds226D7bH;
                if (hs_ds226D7bH.notEvaluated) {
                    hs_wild126D7y1 = hs_ds226D7bH.hscall();
                }
                var hs_ys26D7bL = hs_wild126D7y1.data[0];
                if (hs_ys26D7bL.notEvaluated) {
                    return hs_ys26D7bL.hscall();
                } else {
                    return hs_ys26D7bL;
                }
            };
            var hs_sat26D7y5 = new $hs.Data(2);
            hs_sat26D7y5.data = [hs_x26D7bD, hs_sat26D7y4];
            var $res = new $hs.Data(2);
            $res.data = [hs_sat26D7y5, hs_sat26D7y2];
            return $res;
        }
    };
    this.hs_group.evaluate = function (hs_zddEq26D7bW, hs_eta26D7bY) {
        var hs_sat26D7y6 = new $hs.Thunk();
        hs_sat26D7y6.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26D7bW);
        };
        return $hs.modules.DataziList.hs_groupBy.hscall(hs_sat26D7y6, hs_eta26D7bY);
    };
    this.hs_unzzip7.evaluateOnce = function () {
        var hs_sat26D7ya = new $hs.Data(1);
        hs_sat26D7ya.data = [$hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26D7za = new $hs.Func(2);
        hs_sat26D7za.evaluate = function (hs_ds26D7c1, hs_ds126D7cb) {
            var hs_wild26D7y9 = hs_ds26D7c1;
            if (hs_ds26D7c1.notEvaluated) {
                hs_wild26D7y9 = hs_ds26D7c1.hscall();
            }
            var hs_a26D7ca = hs_wild26D7y9.data[0];
            var hs_b26D7cn = hs_wild26D7y9.data[1];
            var hs_c26D7cz = hs_wild26D7y9.data[2];
            var hs_d26D7cL = hs_wild26D7y9.data[3];
            var hs_e26D7cX = hs_wild26D7y9.data[4];
            var hs_f26D7d9 = hs_wild26D7y9.data[5];
            var hs_g26D7dl = hs_wild26D7y9.data[6];
            var hs_sat26D7yg = new $hs.Thunk();
            hs_sat26D7yg.evaluateOnce = function () {
                var hs_wild126D7y8 = hs_ds126D7cb;
                if (hs_ds126D7cb.notEvaluated) {
                    hs_wild126D7y8 = hs_ds126D7cb.hscall();
                }
                var hs_gs26D7du = hs_wild126D7y8.data[6];
                if (hs_gs26D7du.notEvaluated) {
                    return hs_gs26D7du.hscall();
                } else {
                    return hs_gs26D7du;
                }
            };
            var hs_sat26D7yj = new $hs.Data(2);
            hs_sat26D7yj.data = [hs_g26D7dl, hs_sat26D7yg];
            var hs_sat26D7yp = new $hs.Thunk();
            hs_sat26D7yp.evaluateOnce = function () {
                var hs_wild126D7yi = hs_ds126D7cb;
                if (hs_ds126D7cb.notEvaluated) {
                    hs_wild126D7yi = hs_ds126D7cb.hscall();
                }
                var hs_fs26D7di = hs_wild126D7yi.data[5];
                if (hs_fs26D7di.notEvaluated) {
                    return hs_fs26D7di.hscall();
                } else {
                    return hs_fs26D7di;
                }
            };
            var hs_sat26D7ys = new $hs.Data(2);
            hs_sat26D7ys.data = [hs_f26D7d9, hs_sat26D7yp];
            var hs_sat26D7yy = new $hs.Thunk();
            hs_sat26D7yy.evaluateOnce = function () {
                var hs_wild126D7yr = hs_ds126D7cb;
                if (hs_ds126D7cb.notEvaluated) {
                    hs_wild126D7yr = hs_ds126D7cb.hscall();
                }
                var hs_es26D7d6 = hs_wild126D7yr.data[4];
                if (hs_es26D7d6.notEvaluated) {
                    return hs_es26D7d6.hscall();
                } else {
                    return hs_es26D7d6;
                }
            };
            var hs_sat26D7yB = new $hs.Data(2);
            hs_sat26D7yB.data = [hs_e26D7cX, hs_sat26D7yy];
            var hs_sat26D7yH = new $hs.Thunk();
            hs_sat26D7yH.evaluateOnce = function () {
                var hs_wild126D7yA = hs_ds126D7cb;
                if (hs_ds126D7cb.notEvaluated) {
                    hs_wild126D7yA = hs_ds126D7cb.hscall();
                }
                var hs_ds226D7cU = hs_wild126D7yA.data[3];
                if (hs_ds226D7cU.notEvaluated) {
                    return hs_ds226D7cU.hscall();
                } else {
                    return hs_ds226D7cU;
                }
            };
            var hs_sat26D7yK = new $hs.Data(2);
            hs_sat26D7yK.data = [hs_d26D7cL, hs_sat26D7yH];
            var hs_sat26D7yQ = new $hs.Thunk();
            hs_sat26D7yQ.evaluateOnce = function () {
                var hs_wild126D7yJ = hs_ds126D7cb;
                if (hs_ds126D7cb.notEvaluated) {
                    hs_wild126D7yJ = hs_ds126D7cb.hscall();
                }
                var hs_cs26D7cI = hs_wild126D7yJ.data[2];
                if (hs_cs26D7cI.notEvaluated) {
                    return hs_cs26D7cI.hscall();
                } else {
                    return hs_cs26D7cI;
                }
            };
            var hs_sat26D7yT = new $hs.Data(2);
            hs_sat26D7yT.data = [hs_c26D7cz, hs_sat26D7yQ];
            var hs_sat26D7yZ = new $hs.Thunk();
            hs_sat26D7yZ.evaluateOnce = function () {
                var hs_wild126D7yS = hs_ds126D7cb;
                if (hs_ds126D7cb.notEvaluated) {
                    hs_wild126D7yS = hs_ds126D7cb.hscall();
                }
                var hs_bs26D7cw = hs_wild126D7yS.data[1];
                if (hs_bs26D7cw.notEvaluated) {
                    return hs_bs26D7cw.hscall();
                } else {
                    return hs_bs26D7cw;
                }
            };
            var hs_sat26D7z1 = new $hs.Data(2);
            hs_sat26D7z1.data = [hs_b26D7cn, hs_sat26D7yZ];
            var hs_sat26D7z8 = new $hs.Thunk();
            hs_sat26D7z8.evaluateOnce = function () {
                var hs_wild126D7z0 = hs_ds126D7cb;
                if (hs_ds126D7cb.notEvaluated) {
                    hs_wild126D7z0 = hs_ds126D7cb.hscall();
                }
                var hs_as26D7ck = hs_wild126D7z0.data[0];
                if (hs_as26D7ck.notEvaluated) {
                    return hs_as26D7ck.hscall();
                } else {
                    return hs_as26D7ck;
                }
            };
            var hs_sat26D7z9 = new $hs.Data(2);
            hs_sat26D7z9.data = [hs_a26D7ca, hs_sat26D7z8];
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26D7z9, hs_sat26D7z1, hs_sat26D7yT, hs_sat26D7yK, hs_sat26D7yB, hs_sat26D7ys, hs_sat26D7yj];
            return $res;
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26D7za, hs_sat26D7ya);
    };
    this.hs_unzzip6.evaluateOnce = function () {
        var hs_sat26D7ze = new $hs.Data(1);
        hs_sat26D7ze.data = [$hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26D7zZ = new $hs.Func(2);
        hs_sat26D7zZ.evaluate = function (hs_ds26D7dB, hs_ds126D7dK) {
            var hs_wild26D7zd = hs_ds26D7dB;
            if (hs_ds26D7dB.notEvaluated) {
                hs_wild26D7zd = hs_ds26D7dB.hscall();
            }
            var hs_a26D7dJ = hs_wild26D7zd.data[0];
            var hs_b26D7dV = hs_wild26D7zd.data[1];
            var hs_c26D7e6 = hs_wild26D7zd.data[2];
            var hs_d26D7eh = hs_wild26D7zd.data[3];
            var hs_e26D7es = hs_wild26D7zd.data[4];
            var hs_f26D7eD = hs_wild26D7zd.data[5];
            var hs_sat26D7zj = new $hs.Thunk();
            hs_sat26D7zj.evaluateOnce = function () {
                var hs_wild126D7zc = hs_ds126D7dK;
                if (hs_ds126D7dK.notEvaluated) {
                    hs_wild126D7zc = hs_ds126D7dK.hscall();
                }
                var hs_fs26D7eL = hs_wild126D7zc.data[5];
                if (hs_fs26D7eL.notEvaluated) {
                    return hs_fs26D7eL.hscall();
                } else {
                    return hs_fs26D7eL;
                }
            };
            var hs_sat26D7zm = new $hs.Data(2);
            hs_sat26D7zm.data = [hs_f26D7eD, hs_sat26D7zj];
            var hs_sat26D7zr = new $hs.Thunk();
            hs_sat26D7zr.evaluateOnce = function () {
                var hs_wild126D7zl = hs_ds126D7dK;
                if (hs_ds126D7dK.notEvaluated) {
                    hs_wild126D7zl = hs_ds126D7dK.hscall();
                }
                var hs_es26D7eA = hs_wild126D7zl.data[4];
                if (hs_es26D7eA.notEvaluated) {
                    return hs_es26D7eA.hscall();
                } else {
                    return hs_es26D7eA;
                }
            };
            var hs_sat26D7zu = new $hs.Data(2);
            hs_sat26D7zu.data = [hs_e26D7es, hs_sat26D7zr];
            var hs_sat26D7zz = new $hs.Thunk();
            hs_sat26D7zz.evaluateOnce = function () {
                var hs_wild126D7zt = hs_ds126D7dK;
                if (hs_ds126D7dK.notEvaluated) {
                    hs_wild126D7zt = hs_ds126D7dK.hscall();
                }
                var hs_ds226D7ep = hs_wild126D7zt.data[3];
                if (hs_ds226D7ep.notEvaluated) {
                    return hs_ds226D7ep.hscall();
                } else {
                    return hs_ds226D7ep;
                }
            };
            var hs_sat26D7zC = new $hs.Data(2);
            hs_sat26D7zC.data = [hs_d26D7eh, hs_sat26D7zz];
            var hs_sat26D7zH = new $hs.Thunk();
            hs_sat26D7zH.evaluateOnce = function () {
                var hs_wild126D7zB = hs_ds126D7dK;
                if (hs_ds126D7dK.notEvaluated) {
                    hs_wild126D7zB = hs_ds126D7dK.hscall();
                }
                var hs_cs26D7ee = hs_wild126D7zB.data[2];
                if (hs_cs26D7ee.notEvaluated) {
                    return hs_cs26D7ee.hscall();
                } else {
                    return hs_cs26D7ee;
                }
            };
            var hs_sat26D7zK = new $hs.Data(2);
            hs_sat26D7zK.data = [hs_c26D7e6, hs_sat26D7zH];
            var hs_sat26D7zP = new $hs.Thunk();
            hs_sat26D7zP.evaluateOnce = function () {
                var hs_wild126D7zJ = hs_ds126D7dK;
                if (hs_ds126D7dK.notEvaluated) {
                    hs_wild126D7zJ = hs_ds126D7dK.hscall();
                }
                var hs_bs26D7e3 = hs_wild126D7zJ.data[1];
                if (hs_bs26D7e3.notEvaluated) {
                    return hs_bs26D7e3.hscall();
                } else {
                    return hs_bs26D7e3;
                }
            };
            var hs_sat26D7zR = new $hs.Data(2);
            hs_sat26D7zR.data = [hs_b26D7dV, hs_sat26D7zP];
            var hs_sat26D7zX = new $hs.Thunk();
            hs_sat26D7zX.evaluateOnce = function () {
                var hs_wild126D7zQ = hs_ds126D7dK;
                if (hs_ds126D7dK.notEvaluated) {
                    hs_wild126D7zQ = hs_ds126D7dK.hscall();
                }
                var hs_as26D7dS = hs_wild126D7zQ.data[0];
                if (hs_as26D7dS.notEvaluated) {
                    return hs_as26D7dS.hscall();
                } else {
                    return hs_as26D7dS;
                }
            };
            var hs_sat26D7zY = new $hs.Data(2);
            hs_sat26D7zY.data = [hs_a26D7dJ, hs_sat26D7zX];
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26D7zY, hs_sat26D7zR, hs_sat26D7zK, hs_sat26D7zC, hs_sat26D7zu, hs_sat26D7zm];
            return $res;
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26D7zZ, hs_sat26D7ze);
    };
    this.hs_unzzip5.evaluateOnce = function () {
        var hs_sat26D7A3 = new $hs.Data(1);
        hs_sat26D7A3.data = [$hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26D7AB = new $hs.Func(2);
        hs_sat26D7AB.evaluate = function (hs_ds26D7eS, hs_ds126D7f0) {
            var hs_wild26D7A2 = hs_ds26D7eS;
            if (hs_ds26D7eS.notEvaluated) {
                hs_wild26D7A2 = hs_ds26D7eS.hscall();
            }
            var hs_a26D7eZ = hs_wild26D7A2.data[0];
            var hs_b26D7fa = hs_wild26D7A2.data[1];
            var hs_c26D7fk = hs_wild26D7A2.data[2];
            var hs_d26D7fu = hs_wild26D7A2.data[3];
            var hs_e26D7fE = hs_wild26D7A2.data[4];
            var hs_sat26D7A7 = new $hs.Thunk();
            hs_sat26D7A7.evaluateOnce = function () {
                var hs_wild126D7A1 = hs_ds126D7f0;
                if (hs_ds126D7f0.notEvaluated) {
                    hs_wild126D7A1 = hs_ds126D7f0.hscall();
                }
                var hs_es26D7fL = hs_wild126D7A1.data[4];
                if (hs_es26D7fL.notEvaluated) {
                    return hs_es26D7fL.hscall();
                } else {
                    return hs_es26D7fL;
                }
            };
            var hs_sat26D7Aa = new $hs.Data(2);
            hs_sat26D7Aa.data = [hs_e26D7fE, hs_sat26D7A7];
            var hs_sat26D7Ae = new $hs.Thunk();
            hs_sat26D7Ae.evaluateOnce = function () {
                var hs_wild126D7A9 = hs_ds126D7f0;
                if (hs_ds126D7f0.notEvaluated) {
                    hs_wild126D7A9 = hs_ds126D7f0.hscall();
                }
                var hs_ds226D7fB = hs_wild126D7A9.data[3];
                if (hs_ds226D7fB.notEvaluated) {
                    return hs_ds226D7fB.hscall();
                } else {
                    return hs_ds226D7fB;
                }
            };
            var hs_sat26D7Ah = new $hs.Data(2);
            hs_sat26D7Ah.data = [hs_d26D7fu, hs_sat26D7Ae];
            var hs_sat26D7Al = new $hs.Thunk();
            hs_sat26D7Al.evaluateOnce = function () {
                var hs_wild126D7Ag = hs_ds126D7f0;
                if (hs_ds126D7f0.notEvaluated) {
                    hs_wild126D7Ag = hs_ds126D7f0.hscall();
                }
                var hs_cs26D7fr = hs_wild126D7Ag.data[2];
                if (hs_cs26D7fr.notEvaluated) {
                    return hs_cs26D7fr.hscall();
                } else {
                    return hs_cs26D7fr;
                }
            };
            var hs_sat26D7Ao = new $hs.Data(2);
            hs_sat26D7Ao.data = [hs_c26D7fk, hs_sat26D7Al];
            var hs_sat26D7As = new $hs.Thunk();
            hs_sat26D7As.evaluateOnce = function () {
                var hs_wild126D7An = hs_ds126D7f0;
                if (hs_ds126D7f0.notEvaluated) {
                    hs_wild126D7An = hs_ds126D7f0.hscall();
                }
                var hs_bs26D7fh = hs_wild126D7An.data[1];
                if (hs_bs26D7fh.notEvaluated) {
                    return hs_bs26D7fh.hscall();
                } else {
                    return hs_bs26D7fh;
                }
            };
            var hs_sat26D7Au = new $hs.Data(2);
            hs_sat26D7Au.data = [hs_b26D7fa, hs_sat26D7As];
            var hs_sat26D7Az = new $hs.Thunk();
            hs_sat26D7Az.evaluateOnce = function () {
                var hs_wild126D7At = hs_ds126D7f0;
                if (hs_ds126D7f0.notEvaluated) {
                    hs_wild126D7At = hs_ds126D7f0.hscall();
                }
                var hs_as26D7f7 = hs_wild126D7At.data[0];
                if (hs_as26D7f7.notEvaluated) {
                    return hs_as26D7f7.hscall();
                } else {
                    return hs_as26D7f7;
                }
            };
            var hs_sat26D7AA = new $hs.Data(2);
            hs_sat26D7AA.data = [hs_a26D7eZ, hs_sat26D7Az];
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26D7AA, hs_sat26D7Au, hs_sat26D7Ao, hs_sat26D7Ah, hs_sat26D7Aa];
            return $res;
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26D7AB, hs_sat26D7A3);
    };
    this.hs_unzzip4.evaluateOnce = function () {
        var hs_sat26D7AF = new $hs.Data(1);
        hs_sat26D7AF.data = [$hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26D7B2 = new $hs.Func(2);
        hs_sat26D7B2.evaluate = function (hs_ds26D7fS, hs_ds126D7fZ) {
            var hs_wild26D7AE = hs_ds26D7fS;
            if (hs_ds26D7fS.notEvaluated) {
                hs_wild26D7AE = hs_ds26D7fS.hscall();
            }
            var hs_a26D7fY = hs_wild26D7AE.data[0];
            var hs_b26D7g8 = hs_wild26D7AE.data[1];
            var hs_c26D7gh = hs_wild26D7AE.data[2];
            var hs_d26D7gq = hs_wild26D7AE.data[3];
            var hs_sat26D7AI = new $hs.Thunk();
            hs_sat26D7AI.evaluateOnce = function () {
                var hs_wild126D7AD = hs_ds126D7fZ;
                if (hs_ds126D7fZ.notEvaluated) {
                    hs_wild126D7AD = hs_ds126D7fZ.hscall();
                }
                var hs_ds226D7gw = hs_wild126D7AD.data[3];
                if (hs_ds226D7gw.notEvaluated) {
                    return hs_ds226D7gw.hscall();
                } else {
                    return hs_ds226D7gw;
                }
            };
            var hs_sat26D7AL = new $hs.Data(2);
            hs_sat26D7AL.data = [hs_d26D7gq, hs_sat26D7AI];
            var hs_sat26D7AO = new $hs.Thunk();
            hs_sat26D7AO.evaluateOnce = function () {
                var hs_wild126D7AK = hs_ds126D7fZ;
                if (hs_ds126D7fZ.notEvaluated) {
                    hs_wild126D7AK = hs_ds126D7fZ.hscall();
                }
                var hs_cs26D7gn = hs_wild126D7AK.data[2];
                if (hs_cs26D7gn.notEvaluated) {
                    return hs_cs26D7gn.hscall();
                } else {
                    return hs_cs26D7gn;
                }
            };
            var hs_sat26D7AR = new $hs.Data(2);
            hs_sat26D7AR.data = [hs_c26D7gh, hs_sat26D7AO];
            var hs_sat26D7AU = new $hs.Thunk();
            hs_sat26D7AU.evaluateOnce = function () {
                var hs_wild126D7AQ = hs_ds126D7fZ;
                if (hs_ds126D7fZ.notEvaluated) {
                    hs_wild126D7AQ = hs_ds126D7fZ.hscall();
                }
                var hs_bs26D7ge = hs_wild126D7AQ.data[1];
                if (hs_bs26D7ge.notEvaluated) {
                    return hs_bs26D7ge.hscall();
                } else {
                    return hs_bs26D7ge;
                }
            };
            var hs_sat26D7AW = new $hs.Data(2);
            hs_sat26D7AW.data = [hs_b26D7g8, hs_sat26D7AU];
            var hs_sat26D7B0 = new $hs.Thunk();
            hs_sat26D7B0.evaluateOnce = function () {
                var hs_wild126D7AV = hs_ds126D7fZ;
                if (hs_ds126D7fZ.notEvaluated) {
                    hs_wild126D7AV = hs_ds126D7fZ.hscall();
                }
                var hs_as26D7g5 = hs_wild126D7AV.data[0];
                if (hs_as26D7g5.notEvaluated) {
                    return hs_as26D7g5.hscall();
                } else {
                    return hs_as26D7g5;
                }
            };
            var hs_sat26D7B1 = new $hs.Data(2);
            hs_sat26D7B1.data = [hs_a26D7fY, hs_sat26D7B0];
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26D7B1, hs_sat26D7AW, hs_sat26D7AR, hs_sat26D7AL];
            return $res;
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26D7B2, hs_sat26D7AF);
    };
    this.hs_zzipWith7.evaluate = function (hs_zz26D7hi, hs_ds26D7gJ, hs_ds126D7gN, hs_ds226D7gR, hs_ds326D7gV, hs_ds426D7gZ, hs_ds526D7h3, hs_ds626D7h7) {
        var hs_wild26D7B3 = hs_ds26D7gJ;
        if (hs_ds26D7gJ.notEvaluated) {
            hs_wild26D7B3 = hs_ds26D7gJ.hscall();
        }
        switch (hs_wild26D7B3.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_a26D7hb = hs_wild26D7B3.data[0];
            var hs_as26D7hk = hs_wild26D7B3.data[1];
            var hs_wild126D7B4 = hs_ds126D7gN;
            if (hs_ds126D7gN.notEvaluated) {
                hs_wild126D7B4 = hs_ds126D7gN.hscall();
            }
            switch (hs_wild126D7B4.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_b26D7hc = hs_wild126D7B4.data[0];
                var hs_bs26D7hl = hs_wild126D7B4.data[1];
                var hs_wild226D7B5 = hs_ds226D7gR;
                if (hs_ds226D7gR.notEvaluated) {
                    hs_wild226D7B5 = hs_ds226D7gR.hscall();
                }
                switch (hs_wild226D7B5.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_c26D7hd = hs_wild226D7B5.data[0];
                    var hs_cs26D7hm = hs_wild226D7B5.data[1];
                    var hs_wild326D7B6 = hs_ds326D7gV;
                    if (hs_ds326D7gV.notEvaluated) {
                        hs_wild326D7B6 = hs_ds326D7gV.hscall();
                    }
                    switch (hs_wild326D7B6.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_d26D7he = hs_wild326D7B6.data[0];
                        var hs_ds726D7hn = hs_wild326D7B6.data[1];
                        var hs_wild426D7B7 = hs_ds426D7gZ;
                        if (hs_ds426D7gZ.notEvaluated) {
                            hs_wild426D7B7 = hs_ds426D7gZ.hscall();
                        }
                        switch (hs_wild426D7B7.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_e26D7hf = hs_wild426D7B7.data[0];
                            var hs_es26D7ho = hs_wild426D7B7.data[1];
                            var hs_wild526D7B8 = hs_ds526D7h3;
                            if (hs_ds526D7h3.notEvaluated) {
                                hs_wild526D7B8 = hs_ds526D7h3.hscall();
                            }
                            switch (hs_wild526D7B8.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_f26D7hg = hs_wild526D7B8.data[0];
                                var hs_fs26D7hp = hs_wild526D7B8.data[1];
                                var hs_wild626D7B9 = hs_ds626D7h7;
                                if (hs_ds626D7h7.notEvaluated) {
                                    hs_wild626D7B9 = hs_ds626D7h7.hscall();
                                }
                                switch (hs_wild626D7B9.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_g26D7hh = hs_wild626D7B9.data[0];
                                    var hs_gs26D7hq = hs_wild626D7B9.data[1];
                                    var hs_sat26D7Ba = new $hs.Thunk();
                                    hs_sat26D7Ba.evaluateOnce = function () {
                                        return $hs.modules.DataziList.hs_zzipWith7.hscall(hs_zz26D7hi, hs_as26D7hk, hs_bs26D7hl, hs_cs26D7hm, hs_ds726D7hn, hs_es26D7ho, hs_fs26D7hp, hs_gs26D7hq);
                                    };
                                    var hs_sat26D7Bb = new $hs.Thunk();
                                    hs_sat26D7Bb.evaluateOnce = function () {
                                        return hs_zz26D7hi.hscall(hs_a26D7hb, hs_b26D7hc, hs_c26D7hd, hs_d26D7he, hs_e26D7hf, hs_f26D7hg, hs_g26D7hh);
                                    };
                                    var $res = new $hs.Data(2);
                                    $res.data = [hs_sat26D7Bb, hs_sat26D7Ba];
                                    return $res;
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.hs_zzipWith6.evaluate = function (hs_zz26D7i3, hs_ds26D7hz, hs_ds126D7hD, hs_ds226D7hH, hs_ds326D7hL, hs_ds426D7hP, hs_ds526D7hT) {
        var hs_wild26D7Bc = hs_ds26D7hz;
        if (hs_ds26D7hz.notEvaluated) {
            hs_wild26D7Bc = hs_ds26D7hz.hscall();
        }
        switch (hs_wild26D7Bc.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_a26D7hX = hs_wild26D7Bc.data[0];
            var hs_as26D7i5 = hs_wild26D7Bc.data[1];
            var hs_wild126D7Bd = hs_ds126D7hD;
            if (hs_ds126D7hD.notEvaluated) {
                hs_wild126D7Bd = hs_ds126D7hD.hscall();
            }
            switch (hs_wild126D7Bd.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_b26D7hY = hs_wild126D7Bd.data[0];
                var hs_bs26D7i6 = hs_wild126D7Bd.data[1];
                var hs_wild226D7Be = hs_ds226D7hH;
                if (hs_ds226D7hH.notEvaluated) {
                    hs_wild226D7Be = hs_ds226D7hH.hscall();
                }
                switch (hs_wild226D7Be.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_c26D7hZ = hs_wild226D7Be.data[0];
                    var hs_cs26D7i7 = hs_wild226D7Be.data[1];
                    var hs_wild326D7Bf = hs_ds326D7hL;
                    if (hs_ds326D7hL.notEvaluated) {
                        hs_wild326D7Bf = hs_ds326D7hL.hscall();
                    }
                    switch (hs_wild326D7Bf.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_d26D7i0 = hs_wild326D7Bf.data[0];
                        var hs_ds626D7i8 = hs_wild326D7Bf.data[1];
                        var hs_wild426D7Bg = hs_ds426D7hP;
                        if (hs_ds426D7hP.notEvaluated) {
                            hs_wild426D7Bg = hs_ds426D7hP.hscall();
                        }
                        switch (hs_wild426D7Bg.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_e26D7i1 = hs_wild426D7Bg.data[0];
                            var hs_es26D7i9 = hs_wild426D7Bg.data[1];
                            var hs_wild526D7Bh = hs_ds526D7hT;
                            if (hs_ds526D7hT.notEvaluated) {
                                hs_wild526D7Bh = hs_ds526D7hT.hscall();
                            }
                            switch (hs_wild526D7Bh.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_f26D7i2 = hs_wild526D7Bh.data[0];
                                var hs_fs26D7ia = hs_wild526D7Bh.data[1];
                                var hs_sat26D7Bi = new $hs.Thunk();
                                hs_sat26D7Bi.evaluateOnce = function () {
                                    return $hs.modules.DataziList.hs_zzipWith6.hscall(hs_zz26D7i3, hs_as26D7i5, hs_bs26D7i6, hs_cs26D7i7, hs_ds626D7i8, hs_es26D7i9, hs_fs26D7ia);
                                };
                                var hs_sat26D7Bj = new $hs.Thunk();
                                hs_sat26D7Bj.evaluateOnce = function () {
                                    return hs_zz26D7i3.hscall(hs_a26D7hX, hs_b26D7hY, hs_c26D7hZ, hs_d26D7i0, hs_e26D7i1, hs_f26D7i2);
                                };
                                var $res = new $hs.Data(2);
                                $res.data = [hs_sat26D7Bj, hs_sat26D7Bi];
                                return $res;
                            }
                        }
                    }
                }
            }
        }
    };
    this.hs_zzipWith5.evaluate = function (hs_zz26D7iH, hs_ds26D7ii, hs_ds126D7im, hs_ds226D7iq, hs_ds326D7iu, hs_ds426D7iy) {
        var hs_wild26D7Bk = hs_ds26D7ii;
        if (hs_ds26D7ii.notEvaluated) {
            hs_wild26D7Bk = hs_ds26D7ii.hscall();
        }
        switch (hs_wild26D7Bk.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_a26D7iC = hs_wild26D7Bk.data[0];
            var hs_as26D7iJ = hs_wild26D7Bk.data[1];
            var hs_wild126D7Bl = hs_ds126D7im;
            if (hs_ds126D7im.notEvaluated) {
                hs_wild126D7Bl = hs_ds126D7im.hscall();
            }
            switch (hs_wild126D7Bl.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_b26D7iD = hs_wild126D7Bl.data[0];
                var hs_bs26D7iK = hs_wild126D7Bl.data[1];
                var hs_wild226D7Bm = hs_ds226D7iq;
                if (hs_ds226D7iq.notEvaluated) {
                    hs_wild226D7Bm = hs_ds226D7iq.hscall();
                }
                switch (hs_wild226D7Bm.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_c26D7iE = hs_wild226D7Bm.data[0];
                    var hs_cs26D7iL = hs_wild226D7Bm.data[1];
                    var hs_wild326D7Bn = hs_ds326D7iu;
                    if (hs_ds326D7iu.notEvaluated) {
                        hs_wild326D7Bn = hs_ds326D7iu.hscall();
                    }
                    switch (hs_wild326D7Bn.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_d26D7iF = hs_wild326D7Bn.data[0];
                        var hs_ds526D7iM = hs_wild326D7Bn.data[1];
                        var hs_wild426D7Bo = hs_ds426D7iy;
                        if (hs_ds426D7iy.notEvaluated) {
                            hs_wild426D7Bo = hs_ds426D7iy.hscall();
                        }
                        switch (hs_wild426D7Bo.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_e26D7iG = hs_wild426D7Bo.data[0];
                            var hs_es26D7iN = hs_wild426D7Bo.data[1];
                            var hs_sat26D7Bp = new $hs.Thunk();
                            hs_sat26D7Bp.evaluateOnce = function () {
                                return $hs.modules.DataziList.hs_zzipWith5.hscall(hs_zz26D7iH, hs_as26D7iJ, hs_bs26D7iK, hs_cs26D7iL, hs_ds526D7iM, hs_es26D7iN);
                            };
                            var hs_sat26D7Bq = new $hs.Thunk();
                            hs_sat26D7Bq.evaluateOnce = function () {
                                return hs_zz26D7iH.hscall(hs_a26D7iC, hs_b26D7iD, hs_c26D7iE, hs_d26D7iF, hs_e26D7iG);
                            };
                            var $res = new $hs.Data(2);
                            $res.data = [hs_sat26D7Bq, hs_sat26D7Bp];
                            return $res;
                        }
                    }
                }
            }
        }
    };
    this.hs_zzipWith4.evaluate = function (hs_zz26D7je, hs_ds26D7iU, hs_ds126D7iY, hs_ds226D7j2, hs_ds326D7j6) {
        var hs_wild26D7Br = hs_ds26D7iU;
        if (hs_ds26D7iU.notEvaluated) {
            hs_wild26D7Br = hs_ds26D7iU.hscall();
        }
        switch (hs_wild26D7Br.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_a26D7ja = hs_wild26D7Br.data[0];
            var hs_as26D7jg = hs_wild26D7Br.data[1];
            var hs_wild126D7Bs = hs_ds126D7iY;
            if (hs_ds126D7iY.notEvaluated) {
                hs_wild126D7Bs = hs_ds126D7iY.hscall();
            }
            switch (hs_wild126D7Bs.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_b26D7jb = hs_wild126D7Bs.data[0];
                var hs_bs26D7jh = hs_wild126D7Bs.data[1];
                var hs_wild226D7Bt = hs_ds226D7j2;
                if (hs_ds226D7j2.notEvaluated) {
                    hs_wild226D7Bt = hs_ds226D7j2.hscall();
                }
                switch (hs_wild226D7Bt.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_c26D7jc = hs_wild226D7Bt.data[0];
                    var hs_cs26D7ji = hs_wild226D7Bt.data[1];
                    var hs_wild326D7Bu = hs_ds326D7j6;
                    if (hs_ds326D7j6.notEvaluated) {
                        hs_wild326D7Bu = hs_ds326D7j6.hscall();
                    }
                    switch (hs_wild326D7Bu.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_d26D7jd = hs_wild326D7Bu.data[0];
                        var hs_ds426D7jj = hs_wild326D7Bu.data[1];
                        var hs_sat26D7Bv = new $hs.Thunk();
                        hs_sat26D7Bv.evaluateOnce = function () {
                            return $hs.modules.DataziList.hs_zzipWith4.hscall(hs_zz26D7je, hs_as26D7jg, hs_bs26D7jh, hs_cs26D7ji, hs_ds426D7jj);
                        };
                        var hs_sat26D7Bw = new $hs.Thunk();
                        hs_sat26D7Bw.evaluateOnce = function () {
                            return hs_zz26D7je.hscall(hs_a26D7ja, hs_b26D7jb, hs_c26D7jc, hs_d26D7jd);
                        };
                        var $res = new $hs.Data(2);
                        $res.data = [hs_sat26D7Bw, hs_sat26D7Bv];
                        return $res;
                    }
                }
            }
        }
    };
    this.hs_zzip7.evaluate = function (hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return $hs.modules.DataziList.hs_zzipWith7.hscall($hs.modules.GHCziTuple.hs_Z7T, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_zzip6.evaluate = function (hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return $hs.modules.DataziList.hs_zzipWith6.hscall($hs.modules.GHCziTuple.hs_Z6T, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_zzip5.evaluate = function (hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return $hs.modules.DataziList.hs_zzipWith5.hscall($hs.modules.GHCziTuple.hs_Z5T, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_zzip4.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return $hs.modules.DataziList.hs_zzipWith4.hscall($hs.modules.GHCziTuple.hs_Z4T, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_genericIndex.evaluate = function (hs_zddIntegral26D7jp, hs_eta26D7jt, hs_eta126D7jz) {
        var hs_zddReal26D7jq = new $hs.Thunk();
        hs_zddReal26D7jq.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26D7jp);
        };
        var hs_zddNum26D7js = new $hs.Thunk();
        hs_zddNum26D7js.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal26D7jq);
        };
        var hs_wild26D7By = hs_eta26D7jt;
        if (hs_eta26D7jt.notEvaluated) {
            hs_wild26D7By = hs_eta26D7jt.hscall();
        }
        switch (hs_wild26D7By.tag) {
        case 1:
            var hs_sat26D7Bx = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("List.genericIndex: index too large.\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26D7Bx);
        case 2:
            var hs_x26D7jM = hs_wild26D7By.data[0];
            var hs_ds26D7jI = hs_wild26D7By.data[1];
            var hs_sat26D7BC = new $hs.Thunk();
            hs_sat26D7BC.evaluateOnce = function () {
                var hs_sat26D7Bz = new $hs.Thunk();
                hs_sat26D7Bz.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26D7js, hs_sat26D7Bz);
            };
            var hs_sat26D7BB = $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum26D7js);
            var hs_wild126D7BA = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_sat26D7BB, hs_eta126D7jz, hs_sat26D7BC);
            switch (hs_wild126D7BA.tag) {
            case 1:
                var hs_sat26D7BH = new $hs.Thunk();
                hs_sat26D7BH.evaluateOnce = function () {
                    var hs_sat26D7BD = new $hs.Thunk();
                    hs_sat26D7BD.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26D7js, hs_sat26D7BD);
                };
                var hs_sat26D7BG = $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal26D7jq);
                var hs_wild226D7BF = $hs.modules.GHCziClasses.hs_zg.hscall(hs_sat26D7BG, hs_eta126D7jz, hs_sat26D7BH);
                switch (hs_wild226D7BF.tag) {
                case 1:
                    var hs_sat26D7BE = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("List.genericIndex: negative argument.\x00");
                    return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26D7BE);
                case 2:
                    var hs_sat26D7BK = new $hs.Thunk();
                    hs_sat26D7BK.evaluateOnce = function () {
                        var hs_sat26D7BJ = new $hs.Thunk();
                        hs_sat26D7BJ.evaluateOnce = function () {
                            var hs_sat26D7BI = new $hs.Thunk();
                            hs_sat26D7BI.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26D7js, hs_sat26D7BI);
                        };
                        return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum26D7js, hs_eta126D7jz, hs_sat26D7BJ);
                    };
                    return $hs.modules.DataziList.hs_genericIndex.hscall(hs_zddIntegral26D7jp, hs_ds26D7jI, hs_sat26D7BK);
                }
            case 2:
                if (hs_x26D7jM.notEvaluated) {
                    return hs_x26D7jM.hscall();
                } else {
                    return hs_x26D7jM;
                }
            }
        }
    };
    this.hs_genericSplitAt.evaluate = function (hs_zddIntegral26D7jR, hs_eta26D7jW, hs_eta126D7k0) {
        var hs_zddReal26D7jS = new $hs.Thunk();
        hs_zddReal26D7jS.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26D7jR);
        };
        var hs_zddNum26D7jU = new $hs.Thunk();
        hs_zddNum26D7jU.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal26D7jS);
        };
        var hs_sat26D7BP = new $hs.Thunk();
        hs_sat26D7BP.evaluateOnce = function () {
            var hs_sat26D7BL = new $hs.Thunk();
            hs_sat26D7BL.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26D7jU, hs_sat26D7BL);
        };
        var hs_sat26D7BO = $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal26D7jS);
        var hs_wild26D7BN = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_sat26D7BO, hs_eta26D7jW, hs_sat26D7BP);
        switch (hs_wild26D7BN.tag) {
        case 1:
            var hs_wild126D7BM = hs_eta126D7k0;
            if (hs_eta126D7k0.notEvaluated) {
                hs_wild126D7BM = hs_eta126D7k0.hscall();
            }
            switch (hs_wild126D7BM.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [$hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN];
                return $res;
            case 2:
                var hs_x26D7ka = hs_wild126D7BM.data[0];
                var hs_xs26D7k8 = hs_wild126D7BM.data[1];
                var hs_ds26D7k9 = new $hs.Thunk();
                hs_ds26D7k9.evaluateOnce = function () {
                    var hs_sat26D7BS = new $hs.Thunk();
                    hs_sat26D7BS.evaluateOnce = function () {
                        var hs_sat26D7BR = new $hs.Thunk();
                        hs_sat26D7BR.evaluateOnce = function () {
                            var hs_sat26D7BQ = new $hs.Thunk();
                            hs_sat26D7BQ.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26D7jU, hs_sat26D7BQ);
                        };
                        return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum26D7jU, hs_eta26D7jW, hs_sat26D7BR);
                    };
                    return $hs.modules.DataziList.hs_genericSplitAt.hscall(hs_zddIntegral26D7jR, hs_sat26D7BS, hs_xs26D7k8);
                };
                var hs_sat26D7BW = new $hs.Thunk();
                hs_sat26D7BW.evaluateOnce = function () {
                    var hs_wild226D7BU = hs_ds26D7k9;
                    if (hs_ds26D7k9.notEvaluated) {
                        hs_wild226D7BU = hs_ds26D7k9.hscall();
                    }
                    var hs_xszqzq26D7kk = hs_wild226D7BU.data[1];
                    if (hs_xszqzq26D7kk.notEvaluated) {
                        return hs_xszqzq26D7kk.hscall();
                    } else {
                        return hs_xszqzq26D7kk;
                    }
                };
                var hs_sat26D7BY = new $hs.Thunk();
                hs_sat26D7BY.evaluateOnce = function () {
                    var hs_wild226D7BV = hs_ds26D7k9;
                    if (hs_ds26D7k9.notEvaluated) {
                        hs_wild226D7BV = hs_ds26D7k9.hscall();
                    }
                    var hs_xszq26D7ke = hs_wild226D7BV.data[0];
                    if (hs_xszq26D7ke.notEvaluated) {
                        return hs_xszq26D7ke.hscall();
                    } else {
                        return hs_xszq26D7ke;
                    }
                };
                var hs_sat26D7BZ = new $hs.Data(2);
                hs_sat26D7BZ.data = [hs_x26D7ka, hs_sat26D7BY];
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26D7BZ, hs_sat26D7BW];
                return $res;
            }
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [$hs.modules.GHCziTypes.hs_ZMZN, hs_eta126D7k0];
            return $res;
        }
    };
    this.hs_genericDrop.evaluate = function (hs_zddIntegral26D7kq, hs_eta26D7kv, hs_eta126D7kz) {
        var hs_zddReal26D7kr = new $hs.Thunk();
        hs_zddReal26D7kr.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26D7kq);
        };
        var hs_zddNum26D7kt = new $hs.Thunk();
        hs_zddNum26D7kt.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal26D7kr);
        };
        var hs_sat26D7C4 = new $hs.Thunk();
        hs_sat26D7C4.evaluateOnce = function () {
            var hs_sat26D7C0 = new $hs.Thunk();
            hs_sat26D7C0.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26D7kt, hs_sat26D7C0);
        };
        var hs_sat26D7C3 = $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal26D7kr);
        var hs_wild26D7C2 = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_sat26D7C3, hs_eta26D7kv, hs_sat26D7C4);
        switch (hs_wild26D7C2.tag) {
        case 1:
            var hs_wild126D7C1 = hs_eta126D7kz;
            if (hs_eta126D7kz.notEvaluated) {
                hs_wild126D7C1 = hs_eta126D7kz.hscall();
            }
            switch (hs_wild126D7C1.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_xs26D7kG = hs_wild126D7C1.data[1];
                var hs_sat26D7C8 = new $hs.Thunk();
                hs_sat26D7C8.evaluateOnce = function () {
                    var hs_sat26D7C7 = new $hs.Thunk();
                    hs_sat26D7C7.evaluateOnce = function () {
                        var hs_sat26D7C6 = new $hs.Thunk();
                        hs_sat26D7C6.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26D7kt, hs_sat26D7C6);
                    };
                    return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum26D7kt, hs_eta26D7kv, hs_sat26D7C7);
                };
                return $hs.modules.DataziList.hs_genericDrop.hscall(hs_zddIntegral26D7kq, hs_sat26D7C8, hs_xs26D7kG);
            }
        case 2:
            if (hs_eta126D7kz.notEvaluated) {
                return hs_eta126D7kz.hscall();
            } else {
                return hs_eta126D7kz;
            }
        }
    };
    this.hs_genericTake.evaluate = function (hs_zddIntegral26D7kL, hs_eta26D7kQ, hs_eta126D7kU) {
        var hs_zddReal26D7kM = new $hs.Thunk();
        hs_zddReal26D7kM.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26D7kL);
        };
        var hs_zddNum26D7kO = new $hs.Thunk();
        hs_zddNum26D7kO.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal26D7kM);
        };
        var hs_sat26D7Cd = new $hs.Thunk();
        hs_sat26D7Cd.evaluateOnce = function () {
            var hs_sat26D7C9 = new $hs.Thunk();
            hs_sat26D7C9.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26D7kO, hs_sat26D7C9);
        };
        var hs_sat26D7Cc = $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal26D7kM);
        var hs_wild26D7Cb = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_sat26D7Cc, hs_eta26D7kQ, hs_sat26D7Cd);
        switch (hs_wild26D7Cb.tag) {
        case 1:
            var hs_wild126D7Ca = hs_eta126D7kU;
            if (hs_eta126D7kU.notEvaluated) {
                hs_wild126D7Ca = hs_eta126D7kU.hscall();
            }
            switch (hs_wild126D7Ca.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_x26D7kY = hs_wild126D7Ca.data[0];
                var hs_xs26D7l2 = hs_wild126D7Ca.data[1];
                var hs_sat26D7Ch = new $hs.Thunk();
                hs_sat26D7Ch.evaluateOnce = function () {
                    var hs_sat26D7Cg = new $hs.Thunk();
                    hs_sat26D7Cg.evaluateOnce = function () {
                        var hs_sat26D7Cf = new $hs.Thunk();
                        hs_sat26D7Cf.evaluateOnce = function () {
                            var hs_sat26D7Ce = new $hs.Thunk();
                            hs_sat26D7Ce.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26D7kO, hs_sat26D7Ce);
                        };
                        return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum26D7kO, hs_eta26D7kQ, hs_sat26D7Cf);
                    };
                    return $hs.modules.DataziList.hs_genericTake.hscall(hs_zddIntegral26D7kL, hs_sat26D7Cg, hs_xs26D7l2);
                };
                var $res = new $hs.Data(2);
                $res.data = [hs_x26D7kY, hs_sat26D7Ch];
                return $res;
            }
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    this.hs_genericReplicate.evaluate = function (hs_zddIntegral26D7l7, hs_n26D7l8, hs_x26D7l9) {
        var hs_sat26D7Ci = new $hs.Thunk();
        hs_sat26D7Ci.evaluateOnce = function () {
            return $hs.modules.GHCziList.hs_repeat.hscall(hs_x26D7l9);
        };
        return $hs.modules.DataziList.hs_genericTake.hscall(hs_zddIntegral26D7l7, hs_n26D7l8, hs_sat26D7Ci);
    };
    hs_strictGenericLength25t6yJ.evaluate = function (hs_zddNum26D7ll, hs_l26D7ls) {
        var hs_gl26D7lr = new $hs.Func(2);
        hs_gl26D7lr.evaluate = function (hs_ds26D7lg, hs_a26D7li) {
            var hs_wild26D7Cj = hs_ds26D7lg;
            if (hs_ds26D7lg.notEvaluated) {
                hs_wild26D7Cj = hs_ds26D7lg.hscall();
            }
            switch (hs_wild26D7Cj.tag) {
            case 1:
                if (hs_a26D7li.notEvaluated) {
                    return hs_a26D7li.hscall();
                } else {
                    return hs_a26D7li;
                }
            case 2:
                var hs_xs26D7lp = hs_wild26D7Cj.data[1];
                var hs_sat26D7Cm = new $hs.Thunk();
                hs_sat26D7Cm.evaluateOnce = function () {
                    var hs_sat26D7Cl = new $hs.Thunk();
                    hs_sat26D7Cl.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26D7ll, hs_sat26D7Cl);
                };
                var hs_azq26D7lq = $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum26D7ll, hs_a26D7li, hs_sat26D7Cm);
                return hs_gl26D7lr.hscall(hs_xs26D7lp, hs_azq26D7lq);
            }
        };
        var hs_sat26D7Co = new $hs.Thunk();
        hs_sat26D7Co.evaluateOnce = function () {
            var hs_sat26D7Cn = new $hs.Thunk();
            hs_sat26D7Cn.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26D7ll, hs_sat26D7Cn);
        };
        return hs_gl26D7lr.hscall(hs_l26D7ls, hs_sat26D7Co);
    };
    this.hs_genericLength.evaluate = function (hs_zddNum26D7lz, hs_ds26D7lx) {
        var hs_wild26D7Cp = hs_ds26D7lx;
        if (hs_ds26D7lx.notEvaluated) {
            hs_wild26D7Cp = hs_ds26D7lx.hscall();
        }
        switch (hs_wild26D7Cp.tag) {
        case 1:
            var hs_sat26D7Cq = new $hs.Thunk();
            hs_sat26D7Cq.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26D7lz, hs_sat26D7Cq);
        case 2:
            var hs_l26D7lF = hs_wild26D7Cp.data[1];
            var hs_sat26D7Cs = new $hs.Thunk();
            hs_sat26D7Cs.evaluateOnce = function () {
                return $hs.modules.DataziList.hs_genericLength.hscall(hs_zddNum26D7lz, hs_l26D7lF);
            };
            var hs_sat26D7Cu = new $hs.Thunk();
            hs_sat26D7Cu.evaluateOnce = function () {
                var hs_sat26D7Ct = new $hs.Thunk();
                hs_sat26D7Ct.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26D7lz, hs_sat26D7Ct);
            };
            return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum26D7lz, hs_sat26D7Cu, hs_sat26D7Cs);
        }
    };
    this.hs_minimumBy.evaluate = function (hs_ds26D7lX, hs_ds126D7lJ) {
        var hs_wild26D7lO = hs_ds126D7lJ;
        if (hs_ds126D7lJ.notEvaluated) {
            hs_wild26D7lO = hs_ds126D7lJ.hscall();
        }
        switch (hs_wild26D7lO.tag) {
        case 1:
            var hs_sat26D7Cv = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("List.minimumBy: empty list\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26D7Cv);
        case 2:
            var hs_wild126D7Cw = hs_wild26D7lO;
            if (hs_wild26D7lO.notEvaluated) {
                hs_wild126D7Cw = hs_wild26D7lO.hscall();
            }
            switch (hs_wild126D7Cw.tag) {
            case 1:
                var hs_sat26D7Cz = new $hs.Thunk();
                hs_sat26D7Cz.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("foldl1\x00");
                };
                return $hs.modules.GHCziList.hs_errorEmptyList.hscall(hs_sat26D7Cz);
            case 2:
                var hs_x26D7m0 = hs_wild126D7Cw.data[0];
                var hs_xs26D7m1 = hs_wild126D7Cw.data[1];
                var hs_sat26D7CB = new $hs.Func(2);
                hs_sat26D7CB.evaluate = function (hs_x126D7lV, hs_y26D7lW) {
                    var hs_wild226D7CA = hs_ds26D7lX.hscall(hs_x126D7lV, hs_y26D7lW);
                    switch (hs_wild226D7CA.tag) {
                    case 3:
                        if (hs_y26D7lW.notEvaluated) {
                            return hs_y26D7lW.hscall();
                        } else {
                            return hs_y26D7lW;
                        }
                    default:
                        if (hs_x126D7lV.notEvaluated) {
                            return hs_x126D7lV.hscall();
                        } else {
                            return hs_x126D7lV;
                        }
                    }
                };
                return $hs.modules.GHCziList.hs_foldl.hscall(hs_sat26D7CB, hs_x26D7m0, hs_xs26D7m1);
            }
        }
    };
    this.hs_maximumBy.evaluate = function (hs_ds26D7mi, hs_ds126D7m4) {
        var hs_wild26D7m9 = hs_ds126D7m4;
        if (hs_ds126D7m4.notEvaluated) {
            hs_wild26D7m9 = hs_ds126D7m4.hscall();
        }
        switch (hs_wild26D7m9.tag) {
        case 1:
            var hs_sat26D7CC = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("List.maximumBy: empty list\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26D7CC);
        case 2:
            var hs_wild126D7CD = hs_wild26D7m9;
            if (hs_wild26D7m9.notEvaluated) {
                hs_wild126D7CD = hs_wild26D7m9.hscall();
            }
            switch (hs_wild126D7CD.tag) {
            case 1:
                var hs_sat26D7CG = new $hs.Thunk();
                hs_sat26D7CG.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("foldl1\x00");
                };
                return $hs.modules.GHCziList.hs_errorEmptyList.hscall(hs_sat26D7CG);
            case 2:
                var hs_x26D7ml = hs_wild126D7CD.data[0];
                var hs_xs26D7mm = hs_wild126D7CD.data[1];
                var hs_sat26D7CI = new $hs.Func(2);
                hs_sat26D7CI.evaluate = function (hs_x126D7mg, hs_y26D7mh) {
                    var hs_wild226D7CH = hs_ds26D7mi.hscall(hs_x126D7mg, hs_y26D7mh);
                    switch (hs_wild226D7CH.tag) {
                    case 3:
                        if (hs_x126D7mg.notEvaluated) {
                            return hs_x126D7mg.hscall();
                        } else {
                            return hs_x126D7mg;
                        }
                    default:
                        if (hs_y26D7mh.notEvaluated) {
                            return hs_y26D7mh.hscall();
                        } else {
                            return hs_y26D7mh;
                        }
                    }
                };
                return $hs.modules.GHCziList.hs_foldl.hscall(hs_sat26D7CI, hs_x26D7ml, hs_xs26D7mm);
            }
        }
    };
    hs_strictMinimum25t6yB.evaluate = function (hs_zddOrd26D7mz, hs_ds26D7mp) {
        var hs_wild26D7mu = hs_ds26D7mp;
        if (hs_ds26D7mp.notEvaluated) {
            hs_wild26D7mu = hs_ds26D7mp.hscall();
        }
        switch (hs_wild26D7mu.tag) {
        case 1:
            var hs_sat26D7CJ = new $hs.Thunk();
            hs_sat26D7CJ.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("minimum\x00");
            };
            return $hs.modules.GHCziList.hs_errorEmptyList.hscall(hs_sat26D7CJ);
        case 2:
            var hs_wild126D7CK = hs_wild26D7mu;
            if (hs_wild26D7mu.notEvaluated) {
                hs_wild126D7CK = hs_wild26D7mu.hscall();
            }
            switch (hs_wild126D7CK.tag) {
            case 1:
                var hs_sat26D7CN = new $hs.Thunk();
                hs_sat26D7CN.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("foldl1'\x00");
                };
                return $hs.modules.GHCziList.hs_errorEmptyList.hscall(hs_sat26D7CN);
            case 2:
                var hs_x26D7mB = hs_wild126D7CK.data[0];
                var hs_xs26D7mC = hs_wild126D7CK.data[1];
                var hs_sat26D7CO = new $hs.Thunk();
                hs_sat26D7CO.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_min.hscall(hs_zddOrd26D7mz);
                };
                return $hs.modules.DataziList.hs_foldlzq.hscall(hs_sat26D7CO, hs_x26D7mB, hs_xs26D7mC);
            }
        }
    };
    this.hs_minimum.evaluate = function (hs_zddOrd26D7mP, hs_ds26D7mF) {
        var hs_wild26D7mK = hs_ds26D7mF;
        if (hs_ds26D7mF.notEvaluated) {
            hs_wild26D7mK = hs_ds26D7mF.hscall();
        }
        switch (hs_wild26D7mK.tag) {
        case 1:
            var hs_sat26D7CP = new $hs.Thunk();
            hs_sat26D7CP.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("minimum\x00");
            };
            return $hs.modules.GHCziList.hs_errorEmptyList.hscall(hs_sat26D7CP);
        case 2:
            var hs_wild126D7CQ = hs_wild26D7mK;
            if (hs_wild26D7mK.notEvaluated) {
                hs_wild126D7CQ = hs_wild26D7mK.hscall();
            }
            switch (hs_wild126D7CQ.tag) {
            case 1:
                var hs_sat26D7CT = new $hs.Thunk();
                hs_sat26D7CT.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("foldl1\x00");
                };
                return $hs.modules.GHCziList.hs_errorEmptyList.hscall(hs_sat26D7CT);
            case 2:
                var hs_x26D7mR = hs_wild126D7CQ.data[0];
                var hs_xs26D7mS = hs_wild126D7CQ.data[1];
                var hs_sat26D7CU = new $hs.Thunk();
                hs_sat26D7CU.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_min.hscall(hs_zddOrd26D7mP);
                };
                return $hs.modules.GHCziList.hs_foldl.hscall(hs_sat26D7CU, hs_x26D7mR, hs_xs26D7mS);
            }
        }
    };
    hs_strictMaximum25t6yx.evaluate = function (hs_zddOrd26D7n5, hs_ds26D7mV) {
        var hs_wild26D7n0 = hs_ds26D7mV;
        if (hs_ds26D7mV.notEvaluated) {
            hs_wild26D7n0 = hs_ds26D7mV.hscall();
        }
        switch (hs_wild26D7n0.tag) {
        case 1:
            var hs_sat26D7CV = new $hs.Thunk();
            hs_sat26D7CV.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("maximum\x00");
            };
            return $hs.modules.GHCziList.hs_errorEmptyList.hscall(hs_sat26D7CV);
        case 2:
            var hs_wild126D7CW = hs_wild26D7n0;
            if (hs_wild26D7n0.notEvaluated) {
                hs_wild126D7CW = hs_wild26D7n0.hscall();
            }
            switch (hs_wild126D7CW.tag) {
            case 1:
                var hs_sat26D7CZ = new $hs.Thunk();
                hs_sat26D7CZ.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("foldl1'\x00");
                };
                return $hs.modules.GHCziList.hs_errorEmptyList.hscall(hs_sat26D7CZ);
            case 2:
                var hs_x26D7n7 = hs_wild126D7CW.data[0];
                var hs_xs26D7n8 = hs_wild126D7CW.data[1];
                var hs_sat26D7D0 = new $hs.Thunk();
                hs_sat26D7D0.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_max.hscall(hs_zddOrd26D7n5);
                };
                return $hs.modules.DataziList.hs_foldlzq.hscall(hs_sat26D7D0, hs_x26D7n7, hs_xs26D7n8);
            }
        }
    };
    this.hs_maximum.evaluate = function (hs_zddOrd26D7nl, hs_ds26D7nb) {
        var hs_wild26D7ng = hs_ds26D7nb;
        if (hs_ds26D7nb.notEvaluated) {
            hs_wild26D7ng = hs_ds26D7nb.hscall();
        }
        switch (hs_wild26D7ng.tag) {
        case 1:
            var hs_sat26D7D1 = new $hs.Thunk();
            hs_sat26D7D1.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("maximum\x00");
            };
            return $hs.modules.GHCziList.hs_errorEmptyList.hscall(hs_sat26D7D1);
        case 2:
            var hs_wild126D7D2 = hs_wild26D7ng;
            if (hs_wild26D7ng.notEvaluated) {
                hs_wild126D7D2 = hs_wild26D7ng.hscall();
            }
            switch (hs_wild126D7D2.tag) {
            case 1:
                var hs_sat26D7D5 = new $hs.Thunk();
                hs_sat26D7D5.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("foldl1\x00");
                };
                return $hs.modules.GHCziList.hs_errorEmptyList.hscall(hs_sat26D7D5);
            case 2:
                var hs_x26D7nn = hs_wild126D7D2.data[0];
                var hs_xs26D7no = hs_wild126D7D2.data[1];
                var hs_sat26D7D6 = new $hs.Thunk();
                hs_sat26D7D6.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_max.hscall(hs_zddOrd26D7nl);
                };
                return $hs.modules.GHCziList.hs_foldl.hscall(hs_sat26D7D6, hs_x26D7nn, hs_xs26D7no);
            }
        }
    };
    this.hs_insertBy.evaluate = function (hs_ds26D7ny, hs_x26D7nu, hs_ds126D7ns) {
        var hs_wild26D7nA = hs_ds126D7ns;
        if (hs_ds126D7ns.notEvaluated) {
            hs_wild26D7nA = hs_ds126D7ns.hscall();
        }
        switch (hs_wild26D7nA.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [hs_x26D7nu, $hs.modules.GHCziTypes.hs_ZMZN];
            return $res;
        case 2:
            var hs_y26D7nx = hs_wild26D7nA.data[0];
            var hs_yszq26D7nB = hs_wild26D7nA.data[1];
            var hs_wild126D7D7 = hs_ds26D7ny.hscall(hs_x26D7nu, hs_y26D7nx);
            switch (hs_wild126D7D7.tag) {
            case 3:
                var hs_sat26D7D8 = new $hs.Thunk();
                hs_sat26D7D8.evaluateOnce = function () {
                    return $hs.modules.DataziList.hs_insertBy.hscall(hs_ds26D7ny, hs_x26D7nu, hs_yszq26D7nB);
                };
                var $res = new $hs.Data(2);
                $res.data = [hs_y26D7nx, hs_sat26D7D8];
                return $res;
            default:
                var $res = new $hs.Data(2);
                $res.data = [hs_x26D7nu, hs_wild26D7nA];
                return $res;
            }
        }
    };
    this.hs_insert.evaluate = function (hs_zddOrd26D7nG, hs_e26D7nI, hs_ls26D7nJ) {
        var hs_sat26D7D9 = new $hs.Thunk();
        hs_sat26D7D9.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd26D7nG);
        };
        return $hs.modules.DataziList.hs_insertBy.hscall(hs_sat26D7D9, hs_e26D7nI, hs_ls26D7nJ);
    };
    this.hs_mapAccumR.evaluate = function (hs_ds26D7nT, hs_s26D7nP, hs_ds126D7nN) {
        var hs_wild26D7Da = hs_ds126D7nN;
        if (hs_ds126D7nN.notEvaluated) {
            hs_wild26D7Da = hs_ds126D7nN.hscall();
        }
        switch (hs_wild26D7Da.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [hs_s26D7nP, $hs.modules.GHCziTypes.hs_ZMZN];
            return $res;
        case 2:
            var hs_x26D7o2 = hs_wild26D7Da.data[0];
            var hs_xs26D7nU = hs_wild26D7Da.data[1];
            var hs_ds226D7nV = new $hs.Thunk();
            hs_ds226D7nV.evaluateOnce = function () {
                return $hs.modules.DataziList.hs_mapAccumR.hscall(hs_ds26D7nT, hs_s26D7nP, hs_xs26D7nU);
            };
            var hs_ds326D7o3 = new $hs.Thunk();
            hs_ds326D7o3.evaluateOnce = function () {
                var hs_sat26D7Dd = new $hs.Thunk();
                hs_sat26D7Dd.evaluateOnce = function () {
                    var hs_wild126D7Db = hs_ds226D7nV;
                    if (hs_ds226D7nV.notEvaluated) {
                        hs_wild126D7Db = hs_ds226D7nV.hscall();
                    }
                    var hs_szq26D7o0 = hs_wild126D7Db.data[0];
                    if (hs_szq26D7o0.notEvaluated) {
                        return hs_szq26D7o0.hscall();
                    } else {
                        return hs_szq26D7o0;
                    }
                };
                return hs_ds26D7nT.hscall(hs_sat26D7Dd, hs_x26D7o2);
            };
            var hs_sat26D7Di = new $hs.Thunk();
            hs_sat26D7Di.evaluateOnce = function () {
                var hs_wild126D7Df = hs_ds226D7nV;
                if (hs_ds226D7nV.notEvaluated) {
                    hs_wild126D7Df = hs_ds226D7nV.hscall();
                }
                var hs_ys26D7oh = hs_wild126D7Df.data[1];
                if (hs_ys26D7oh.notEvaluated) {
                    return hs_ys26D7oh.hscall();
                } else {
                    return hs_ys26D7oh;
                }
            };
            var hs_sat26D7Dj = new $hs.Thunk();
            hs_sat26D7Dj.evaluateOnce = function () {
                var hs_wild126D7Dh = hs_ds326D7o3;
                if (hs_ds326D7o3.notEvaluated) {
                    hs_wild126D7Dh = hs_ds326D7o3.hscall();
                }
                var hs_y26D7oc = hs_wild126D7Dh.data[1];
                if (hs_y26D7oc.notEvaluated) {
                    return hs_y26D7oc.hscall();
                } else {
                    return hs_y26D7oc;
                }
            };
            var hs_sat26D7Dl = new $hs.Data(2);
            hs_sat26D7Dl.data = [hs_sat26D7Dj, hs_sat26D7Di];
            var hs_sat26D7Dn = new $hs.Thunk();
            hs_sat26D7Dn.evaluateOnce = function () {
                var hs_wild126D7Dk = hs_ds326D7o3;
                if (hs_ds326D7o3.notEvaluated) {
                    hs_wild126D7Dk = hs_ds326D7o3.hscall();
                }
                var hs_szqzq26D7o7 = hs_wild126D7Dk.data[0];
                if (hs_szqzq26D7o7.notEvaluated) {
                    return hs_szqzq26D7o7.hscall();
                } else {
                    return hs_szqzq26D7o7;
                }
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26D7Dn, hs_sat26D7Dl];
            return $res;
        }
    };
    this.hs_mapAccumL.evaluate = function (hs_ds26D7ou, hs_s26D7op, hs_ds126D7on) {
        var hs_wild26D7Do = hs_ds126D7on;
        if (hs_ds126D7on.notEvaluated) {
            hs_wild26D7Do = hs_ds126D7on.hscall();
        }
        switch (hs_wild26D7Do.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [hs_s26D7op, $hs.modules.GHCziTypes.hs_ZMZN];
            return $res;
        case 2:
            var hs_x26D7ot = hs_wild26D7Do.data[0];
            var hs_xs26D7oC = hs_wild26D7Do.data[1];
            var hs_ds226D7ov = new $hs.Thunk();
            hs_ds226D7ov.evaluateOnce = function () {
                return hs_ds26D7ou.hscall(hs_s26D7op, hs_x26D7ot);
            };
            var hs_ds326D7oD = new $hs.Thunk();
            hs_ds326D7oD.evaluateOnce = function () {
                var hs_sat26D7Dr = new $hs.Thunk();
                hs_sat26D7Dr.evaluateOnce = function () {
                    var hs_wild126D7Dp = hs_ds226D7ov;
                    if (hs_ds226D7ov.notEvaluated) {
                        hs_wild126D7Dp = hs_ds226D7ov.hscall();
                    }
                    var hs_szq26D7oA = hs_wild126D7Dp.data[0];
                    if (hs_szq26D7oA.notEvaluated) {
                        return hs_szq26D7oA.hscall();
                    } else {
                        return hs_szq26D7oA;
                    }
                };
                return $hs.modules.DataziList.hs_mapAccumL.hscall(hs_ds26D7ou, hs_sat26D7Dr, hs_xs26D7oC);
            };
            var hs_sat26D7Dw = new $hs.Thunk();
            hs_sat26D7Dw.evaluateOnce = function () {
                var hs_wild126D7Dt = hs_ds326D7oD;
                if (hs_ds326D7oD.notEvaluated) {
                    hs_wild126D7Dt = hs_ds326D7oD.hscall();
                }
                var hs_ys26D7oR = hs_wild126D7Dt.data[1];
                if (hs_ys26D7oR.notEvaluated) {
                    return hs_ys26D7oR.hscall();
                } else {
                    return hs_ys26D7oR;
                }
            };
            var hs_sat26D7Dx = new $hs.Thunk();
            hs_sat26D7Dx.evaluateOnce = function () {
                var hs_wild126D7Dv = hs_ds226D7ov;
                if (hs_ds226D7ov.notEvaluated) {
                    hs_wild126D7Dv = hs_ds226D7ov.hscall();
                }
                var hs_y26D7oM = hs_wild126D7Dv.data[1];
                if (hs_y26D7oM.notEvaluated) {
                    return hs_y26D7oM.hscall();
                } else {
                    return hs_y26D7oM;
                }
            };
            var hs_sat26D7Dz = new $hs.Data(2);
            hs_sat26D7Dz.data = [hs_sat26D7Dx, hs_sat26D7Dw];
            var hs_sat26D7DB = new $hs.Thunk();
            hs_sat26D7DB.evaluateOnce = function () {
                var hs_wild126D7Dy = hs_ds326D7oD;
                if (hs_ds326D7oD.notEvaluated) {
                    hs_wild126D7Dy = hs_ds326D7oD.hscall();
                }
                var hs_szqzq26D7oH = hs_wild126D7Dy.data[0];
                if (hs_szqzq26D7oH.notEvaluated) {
                    return hs_szqzq26D7oH.hscall();
                } else {
                    return hs_szqzq26D7oH;
                }
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26D7DB, hs_sat26D7Dz];
            return $res;
        }
    };
    hs_select25t6yl.evaluate = function (hs_p26D7oY, hs_x26D7oX, hs_ds26D7p0) {
        var hs_wild26D7DE = hs_p26D7oY.hscall(hs_x26D7oX);
        switch (hs_wild26D7DE.tag) {
        case 1:
            var hs_sat26D7DF = new $hs.Thunk();
            hs_sat26D7DF.evaluateOnce = function () {
                var hs_wild126D7DD = hs_ds26D7p0;
                if (hs_ds26D7p0.notEvaluated) {
                    hs_wild126D7DD = hs_ds26D7p0.hscall();
                }
                var hs_fs26D7p9 = hs_wild126D7DD.data[1];
                if (hs_fs26D7p9.notEvaluated) {
                    return hs_fs26D7p9.hscall();
                } else {
                    return hs_fs26D7p9;
                }
            };
            var hs_sat26D7DH = new $hs.Data(2);
            hs_sat26D7DH.data = [hs_x26D7oX, hs_sat26D7DF];
            var hs_sat26D7DJ = new $hs.Thunk();
            hs_sat26D7DJ.evaluateOnce = function () {
                var hs_wild126D7DG = hs_ds26D7p0;
                if (hs_ds26D7p0.notEvaluated) {
                    hs_wild126D7DG = hs_ds26D7p0.hscall();
                }
                var hs_ts26D7p4 = hs_wild126D7DG.data[0];
                if (hs_ts26D7p4.notEvaluated) {
                    return hs_ts26D7p4.hscall();
                } else {
                    return hs_ts26D7p4;
                }
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26D7DJ, hs_sat26D7DH];
            return $res;
        case 2:
            var hs_sat26D7DN = new $hs.Thunk();
            hs_sat26D7DN.evaluateOnce = function () {
                var hs_wild126D7DL = hs_ds26D7p0;
                if (hs_ds26D7p0.notEvaluated) {
                    hs_wild126D7DL = hs_ds26D7p0.hscall();
                }
                var hs_fs26D7pl = hs_wild126D7DL.data[1];
                if (hs_fs26D7pl.notEvaluated) {
                    return hs_fs26D7pl.hscall();
                } else {
                    return hs_fs26D7pl;
                }
            };
            var hs_sat26D7DP = new $hs.Thunk();
            hs_sat26D7DP.evaluateOnce = function () {
                var hs_wild126D7DM = hs_ds26D7p0;
                if (hs_ds26D7p0.notEvaluated) {
                    hs_wild126D7DM = hs_ds26D7p0.hscall();
                }
                var hs_ts26D7pf = hs_wild126D7DM.data[0];
                if (hs_ts26D7pf.notEvaluated) {
                    return hs_ts26D7pf.hscall();
                } else {
                    return hs_ts26D7pf;
                }
            };
            var hs_sat26D7DQ = new $hs.Data(2);
            hs_sat26D7DQ.data = [hs_x26D7oX, hs_sat26D7DP];
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26D7DQ, hs_sat26D7DN];
            return $res;
        }
    };
    this.hs_partition.evaluate = function (hs_eta26D7pp, hs_eta126D7ps) {
        var hs_sat26D7DR = new $hs.Data(1);
        hs_sat26D7DR.data = [$hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26D7DS = new $hs.Func(2);
        hs_sat26D7DS.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_select25t6yl.hscall(hs_eta26D7pp, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26D7DS, hs_sat26D7DR, hs_eta126D7ps);
    };
    this.hs_transpose.evaluate = function (hs_ds26D7pu) {
        var hs_wild26D7DT = hs_ds26D7pu;
        if (hs_ds26D7pu.notEvaluated) {
            hs_wild26D7DT = hs_ds26D7pu.hscall();
        }
        switch (hs_wild26D7DT.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_ds126D7py = hs_wild26D7DT.data[0];
            var hs_xss26D7pA = hs_wild26D7DT.data[1];
            var hs_wild126D7DU = hs_ds126D7py;
            if (hs_ds126D7py.notEvaluated) {
                hs_wild126D7DU = hs_ds126D7py.hscall();
            }
            switch (hs_wild126D7DU.tag) {
            case 1:
                return $hs.modules.DataziList.hs_transpose.hscall(hs_xss26D7pA);
            case 2:
                var hs_x26D7pD = hs_wild126D7DU.data[0];
                var hs_xs26D7pU = hs_wild126D7DU.data[1];
                var hs_sat26D7E2 = new $hs.Thunk();
                hs_sat26D7E2.evaluateOnce = function () {
                    var hs_sat26D7DZ = new $hs.Thunk();
                    hs_sat26D7DZ.evaluateOnce = function () {
                        var hs_ds226D7q4 = new $hs.Func(1);
                        hs_ds226D7q4.evaluate = function (hs_ds326D7pX) {
                            var hs_ds426D7DV = hs_ds326D7pX;
                            if (hs_ds326D7pX.notEvaluated) {
                                hs_ds426D7DV = hs_ds326D7pX.hscall();
                            }
                            switch (hs_ds426D7DV.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_ds526D7q1 = hs_ds426D7DV.data[0];
                                var hs_ds626D7q3 = hs_ds426D7DV.data[1];
                                var hs_wild226D7DW = hs_ds526D7q1;
                                if (hs_ds526D7q1.notEvaluated) {
                                    hs_wild226D7DW = hs_ds526D7q1.hscall();
                                }
                                switch (hs_wild226D7DW.tag) {
                                case 1:
                                    return hs_ds226D7q4.hscall(hs_ds626D7q3);
                                case 2:
                                    var hs_t26D7q7 = hs_wild226D7DW.data[1];
                                    var hs_sat26D7DY = new $hs.Thunk();
                                    hs_sat26D7DY.evaluateOnce = function () {
                                        return hs_ds226D7q4.hscall(hs_ds626D7q3);
                                    };
                                    var $res = new $hs.Data(2);
                                    $res.data = [hs_t26D7q7, hs_sat26D7DY];
                                    return $res;
                                }
                            }
                        };
                        return hs_ds226D7q4.hscall(hs_xss26D7pA);
                    };
                    var hs_sat26D7E0 = new $hs.Data(2);
                    hs_sat26D7E0.data = [hs_xs26D7pU, hs_sat26D7DZ];
                    return $hs.modules.DataziList.hs_transpose.hscall(hs_sat26D7E0);
                };
                var hs_sat26D7E6 = new $hs.Thunk();
                hs_sat26D7E6.evaluateOnce = function () {
                    var hs_ds226D7pN = new $hs.Func(1);
                    hs_ds226D7pN.evaluate = function (hs_ds326D7pG) {
                        var hs_ds426D7E1 = hs_ds326D7pG;
                        if (hs_ds326D7pG.notEvaluated) {
                            hs_ds426D7E1 = hs_ds326D7pG.hscall();
                        }
                        switch (hs_ds426D7E1.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_ds526D7pK = hs_ds426D7E1.data[0];
                            var hs_ds626D7pM = hs_ds426D7E1.data[1];
                            var hs_wild226D7E3 = hs_ds526D7pK;
                            if (hs_ds526D7pK.notEvaluated) {
                                hs_wild226D7E3 = hs_ds526D7pK.hscall();
                            }
                            switch (hs_wild226D7E3.tag) {
                            case 1:
                                return hs_ds226D7pN.hscall(hs_ds626D7pM);
                            case 2:
                                var hs_h26D7pQ = hs_wild226D7E3.data[0];
                                var hs_sat26D7E5 = new $hs.Thunk();
                                hs_sat26D7E5.evaluateOnce = function () {
                                    return hs_ds226D7pN.hscall(hs_ds626D7pM);
                                };
                                var $res = new $hs.Data(2);
                                $res.data = [hs_h26D7pQ, hs_sat26D7E5];
                                return $res;
                            }
                        }
                    };
                    return hs_ds226D7pN.hscall(hs_xss26D7pA);
                };
                var hs_sat26D7E7 = new $hs.Data(2);
                hs_sat26D7E7.data = [hs_x26D7pD, hs_sat26D7E6];
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26D7E7, hs_sat26D7E2];
                return $res;
            }
        }
    };
    this.hs_intersperse.evaluate = function (hs_ds26D7qn, hs_ds126D7qe) {
        var hs_wild26D7E8 = hs_ds126D7qe;
        if (hs_ds126D7qe.notEvaluated) {
            hs_wild26D7E8 = hs_ds126D7qe.hscall();
        }
        switch (hs_wild26D7E8.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_x26D7qk = hs_wild26D7E8.data[0];
            var hs_ds226D7qi = hs_wild26D7E8.data[1];
            var hs_wild126D7qo = hs_ds226D7qi;
            if (hs_ds226D7qi.notEvaluated) {
                hs_wild126D7qo = hs_ds226D7qi.hscall();
            }
            switch (hs_wild126D7qo.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [hs_x26D7qk, $hs.modules.GHCziTypes.hs_ZMZN];
                return $res;
            case 2:
                var hs_sat26D7Eb = new $hs.Thunk();
                hs_sat26D7Eb.evaluateOnce = function () {
                    return $hs.modules.DataziList.hs_intersperse.hscall(hs_ds26D7qn, hs_wild126D7qo);
                };
                var hs_sat26D7Ec = new $hs.Data(2);
                hs_sat26D7Ec.data = [hs_ds26D7qn, hs_sat26D7Eb];
                var $res = new $hs.Data(2);
                $res.data = [hs_x26D7qk, hs_sat26D7Ec];
                return $res;
            }
        }
    };
    this.hs_intercalate.evaluate = function (hs_xs26D7qt, hs_xss26D7qu) {
        var hs_sat26D7Ed = new $hs.Thunk();
        hs_sat26D7Ed.evaluateOnce = function () {
            return $hs.modules.DataziList.hs_intersperse.hscall(hs_xs26D7qt, hs_xss26D7qu);
        };
        return $hs.modules.GHCziList.hs_concat.hscall(hs_sat26D7Ed);
    };
    this.hs_intersectBy.evaluate = function (hs_eq26D7qG, hs_xs26D7qN, hs_ys26D7qI) {
        var hs_ds26D7qL = new $hs.Func(1);
        hs_ds26D7qL.evaluate = function (hs_ds126D7qB) {
            var hs_ds226D7Ee = hs_ds126D7qB;
            if (hs_ds126D7qB.notEvaluated) {
                hs_ds226D7Ee = hs_ds126D7qB.hscall();
            }
            switch (hs_ds226D7Ee.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_ds326D7qF = hs_ds226D7Ee.data[0];
                var hs_ds426D7qK = hs_ds226D7Ee.data[1];
                var hs_sat26D7Eg = new $hs.Thunk();
                hs_sat26D7Eg.evaluateOnce = function () {
                    return hs_eq26D7qG.hscall(hs_ds326D7qF);
                };
                var hs_wild26D7Ef = $hs.modules.GHCziList.hs_any.hscall(hs_sat26D7Eg, hs_ys26D7qI);
                switch (hs_wild26D7Ef.tag) {
                case 1:
                    return hs_ds26D7qL.hscall(hs_ds426D7qK);
                case 2:
                    var hs_sat26D7Eh = new $hs.Thunk();
                    hs_sat26D7Eh.evaluateOnce = function () {
                        return hs_ds26D7qL.hscall(hs_ds426D7qK);
                    };
                    var $res = new $hs.Data(2);
                    $res.data = [hs_ds326D7qF, hs_sat26D7Eh];
                    return $res;
                }
            }
        };
        return hs_ds26D7qL.hscall(hs_xs26D7qN);
    };
    this.hs_intersect.evaluate = function (hs_zddEq26D7qR, hs_eta26D7qT, hs_eta126D7qU) {
        var hs_sat26D7Ei = new $hs.Thunk();
        hs_sat26D7Ei.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26D7qR);
        };
        return $hs.modules.DataziList.hs_intersectBy.hscall(hs_sat26D7Ei, hs_eta26D7qT, hs_eta126D7qU);
    };
    this.hs_deleteBy.evaluate = function (hs_ds26D7r4, hs_ds126D7r2, hs_ds226D7qY) {
        var hs_wild26D7Ej = hs_ds226D7qY;
        if (hs_ds226D7qY.notEvaluated) {
            hs_wild26D7Ej = hs_ds226D7qY.hscall();
        }
        switch (hs_wild26D7Ej.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_y26D7r3 = hs_wild26D7Ej.data[0];
            var hs_ys26D7r6 = hs_wild26D7Ej.data[1];
            var hs_wild126D7Ek = hs_ds26D7r4.hscall(hs_ds126D7r2, hs_y26D7r3);
            switch (hs_wild126D7Ek.tag) {
            case 1:
                var hs_sat26D7El = new $hs.Thunk();
                hs_sat26D7El.evaluateOnce = function () {
                    return $hs.modules.DataziList.hs_deleteBy.hscall(hs_ds26D7r4, hs_ds126D7r2, hs_ys26D7r6);
                };
                var $res = new $hs.Data(2);
                $res.data = [hs_y26D7r3, hs_sat26D7El];
                return $res;
            case 2:
                if (hs_ys26D7r6.notEvaluated) {
                    return hs_ys26D7r6.hscall();
                } else {
                    return hs_ys26D7r6;
                }
            }
        }
    };
    this.hs_deleteFirstsBy.evaluate = function (hs_eq26D7r9) {
        var hs_sat26D7En = new $hs.Thunk();
        hs_sat26D7En.evaluateOnce = function () {
            var hs_sat26D7Em = new $hs.Func(2);
            hs_sat26D7Em.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
                return $hs.modules.DataziList.hs_deleteBy.hscall(hs_eq26D7r9, hs_eta1cW6l4, hs_eta1cW6l3);
            };
            return $hs.modules.GHCziBase.hs_flip.hscall(hs_sat26D7Em);
        };
        return $hs.modules.GHCziList.hs_foldl.hscall(hs_sat26D7En);
    };
    this.hs_delete.evaluate = function (hs_zddEq26D7rf, hs_eta26D7rh, hs_eta126D7ri) {
        var hs_sat26D7Eo = new $hs.Thunk();
        hs_sat26D7Eo.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26D7rf);
        };
        return $hs.modules.DataziList.hs_deleteBy.hscall(hs_sat26D7Eo, hs_eta26D7rh, hs_eta126D7ri);
    };
    this.hs_zrzr.evaluate = function (hs_zddEq26D7rk) {
        var hs_sat26D7Eq = new $hs.Thunk();
        hs_sat26D7Eq.evaluateOnce = function () {
            var hs_sat26D7Ep = new $hs.Func(2);
            hs_sat26D7Ep.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
                return $hs.modules.DataziList.hs_delete.hscall(hs_zddEq26D7rk, hs_eta1cW6l4, hs_eta1cW6l3);
            };
            return $hs.modules.GHCziBase.hs_flip.hscall(hs_sat26D7Ep);
        };
        return $hs.modules.GHCziList.hs_foldl.hscall(hs_sat26D7Eq);
    };
    hs_elemzuby25t6xX.evaluate = function (hs_ds26D7rw, hs_ds126D7ru, hs_ds226D7rq) {
        var hs_wild26D7Er = hs_ds226D7rq;
        if (hs_ds226D7rq.notEvaluated) {
            hs_wild26D7Er = hs_ds226D7rq.hscall();
        }
        switch (hs_wild26D7Er.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_x26D7rv = hs_wild26D7Er.data[0];
            var hs_xs26D7ry = hs_wild26D7Er.data[1];
            var hs_sat26D7Es = new $hs.Thunk();
            hs_sat26D7Es.evaluateOnce = function () {
                return hs_elemzuby25t6xX.hscall(hs_ds26D7rw, hs_ds126D7ru, hs_xs26D7ry);
            };
            var hs_sat26D7Et = new $hs.Thunk();
            hs_sat26D7Et.evaluateOnce = function () {
                return hs_ds26D7rw.hscall(hs_ds126D7ru, hs_x26D7rv);
            };
            return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26D7Et, hs_sat26D7Es);
        }
    };
    this.hs_nubBy.evaluate = function (hs_eq26D7rJ, hs_l26D7rR) {
        var hs_nubByzq26D7rO = new $hs.Func(2);
        hs_nubByzq26D7rO.evaluate = function (hs_ds26D7rF, hs_ds126D7rL) {
            var hs_wild26D7Eu = hs_ds26D7rF;
            if (hs_ds26D7rF.notEvaluated) {
                hs_wild26D7Eu = hs_ds26D7rF.hscall();
            }
            switch (hs_wild26D7Eu.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_y26D7rK = hs_wild26D7Eu.data[0];
                var hs_ys26D7rN = hs_wild26D7Eu.data[1];
                var hs_wild126D7Ev = hs_elemzuby25t6xX.hscall(hs_eq26D7rJ, hs_y26D7rK, hs_ds126D7rL);
                switch (hs_wild126D7Ev.tag) {
                case 1:
                    var hs_sat26D7Ex = new $hs.Thunk();
                    hs_sat26D7Ex.evaluateOnce = function () {
                        var hs_sat26D7Ew = new $hs.Data(2);
                        hs_sat26D7Ew.data = [hs_y26D7rK, hs_ds126D7rL];
                        return hs_nubByzq26D7rO.hscall(hs_ys26D7rN, hs_sat26D7Ew);
                    };
                    var $res = new $hs.Data(2);
                    $res.data = [hs_y26D7rK, hs_sat26D7Ex];
                    return $res;
                case 2:
                    return hs_nubByzq26D7rO.hscall(hs_ys26D7rN, hs_ds126D7rL);
                }
            }
        };
        return hs_nubByzq26D7rO.hscall(hs_l26D7rR, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_unionBy.evaluate = function (hs_eq26D7rW, hs_xs26D7rV, hs_ys26D7rZ) {
        var hs_sat26D7EB = new $hs.Thunk();
        hs_sat26D7EB.evaluateOnce = function () {
            var hs_sat26D7Ey = new $hs.Thunk();
            hs_sat26D7Ey.evaluateOnce = function () {
                return $hs.modules.DataziList.hs_nubBy.hscall(hs_eq26D7rW, hs_ys26D7rZ);
            };
            var hs_sat26D7EA = new $hs.Thunk();
            hs_sat26D7EA.evaluateOnce = function () {
                var hs_sat26D7Ez = new $hs.Func(2);
                hs_sat26D7Ez.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
                    return $hs.modules.DataziList.hs_deleteBy.hscall(hs_eq26D7rW, hs_eta1cW6l4, hs_eta1cW6l3);
                };
                return $hs.modules.GHCziBase.hs_flip.hscall(hs_sat26D7Ez);
            };
            return $hs.modules.GHCziList.hs_foldl.hscall(hs_sat26D7EA, hs_sat26D7Ey, hs_xs26D7rV);
        };
        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_xs26D7rV, hs_sat26D7EB);
    };
    this.hs_union.evaluate = function (hs_zddEq26D7s5, hs_eta26D7s7, hs_eta126D7s8) {
        var hs_sat26D7EC = new $hs.Thunk();
        hs_sat26D7EC.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26D7s5);
        };
        return $hs.modules.DataziList.hs_unionBy.hscall(hs_sat26D7EC, hs_eta26D7s7, hs_eta126D7s8);
    };
    this.hs_nub.evaluate = function (hs_zddEq26D7si, hs_l26D7sq) {
        var hs_nubzq26D7sn = new $hs.Func(2);
        hs_nubzq26D7sn.evaluate = function (hs_ds26D7se, hs_ds126D7sk) {
            var hs_wild26D7ED = hs_ds26D7se;
            if (hs_ds26D7se.notEvaluated) {
                hs_wild26D7ED = hs_ds26D7se.hscall();
            }
            switch (hs_wild26D7ED.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_x26D7sj = hs_wild26D7ED.data[0];
                var hs_xs26D7sm = hs_wild26D7ED.data[1];
                var hs_wild126D7EE = $hs.modules.GHCziList.hs_elem.hscall(hs_zddEq26D7si, hs_x26D7sj, hs_ds126D7sk);
                switch (hs_wild126D7EE.tag) {
                case 1:
                    var hs_sat26D7EG = new $hs.Thunk();
                    hs_sat26D7EG.evaluateOnce = function () {
                        var hs_sat26D7EF = new $hs.Data(2);
                        hs_sat26D7EF.data = [hs_x26D7sj, hs_ds126D7sk];
                        return hs_nubzq26D7sn.hscall(hs_xs26D7sm, hs_sat26D7EF);
                    };
                    var $res = new $hs.Data(2);
                    $res.data = [hs_x26D7sj, hs_sat26D7EG];
                    return $res;
                case 2:
                    return hs_nubzq26D7sn.hscall(hs_xs26D7sm, hs_ds126D7sk);
                }
            }
        };
        return hs_nubzq26D7sn.hscall(hs_l26D7sq, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_isPrefixOf.evaluate = function (hs_zddEq26D7sO, hs_ds26D7sy, hs_ds126D7sC) {
        var hs_fail26D7sx = new $hs.Func(1);
        hs_fail26D7sx.evaluate = function (hs_ds226D7sw) {
            return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("../../ghc-7.0.2/libraries/base/Data/List.hs:(284,1)-(286,53)|function isPrefixOf\x00");
        };
        var hs_wild26D7sG = hs_ds26D7sy;
        if (hs_ds26D7sy.notEvaluated) {
            hs_wild26D7sG = hs_ds26D7sy.hscall();
        }
        switch (hs_wild26D7sG.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild126D7sK = hs_ds126D7sC;
            if (hs_ds126D7sC.notEvaluated) {
                hs_wild126D7sK = hs_ds126D7sC.hscall();
            }
            switch (hs_wild126D7sK.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild226D7EJ = hs_wild26D7sG;
                if (hs_wild26D7sG.notEvaluated) {
                    hs_wild226D7EJ = hs_wild26D7sG.hscall();
                }
                switch (hs_wild226D7EJ.tag) {
                case 1:
                    return hs_fail26D7sx.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                case 2:
                    var hs_x26D7sP = hs_wild226D7EJ.data[0];
                    var hs_xs26D7sS = hs_wild226D7EJ.data[1];
                    var hs_wild326D7EM = hs_wild126D7sK;
                    if (hs_wild126D7sK.notEvaluated) {
                        hs_wild326D7EM = hs_wild126D7sK.hscall();
                    }
                    switch (hs_wild326D7EM.tag) {
                    case 1:
                        return hs_fail26D7sx.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    case 2:
                        var hs_y26D7sQ = hs_wild326D7EM.data[0];
                        var hs_ys26D7sT = hs_wild326D7EM.data[1];
                        var hs_sat26D7EN = new $hs.Thunk();
                        hs_sat26D7EN.evaluateOnce = function () {
                            return $hs.modules.DataziList.hs_isPrefixOf.hscall(hs_zddEq26D7sO, hs_xs26D7sS, hs_ys26D7sT);
                        };
                        var hs_sat26D7EO = new $hs.Thunk();
                        hs_sat26D7EO.evaluateOnce = function () {
                            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26D7sO, hs_x26D7sP, hs_y26D7sQ);
                        };
                        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26D7EO, hs_sat26D7EN);
                    }
                }
            }
        }
    };
    this.hs_isSuffixOf.evaluate = function (hs_zddEq26D7sY, hs_x26D7sZ, hs_y26D7t1) {
        var hs_sat26D7EP = new $hs.Thunk();
        hs_sat26D7EP.evaluateOnce = function () {
            return $hs.modules.GHCziList.hs_reverse.hscall(hs_y26D7t1);
        };
        var hs_sat26D7EQ = new $hs.Thunk();
        hs_sat26D7EQ.evaluateOnce = function () {
            return $hs.modules.GHCziList.hs_reverse.hscall(hs_x26D7sZ);
        };
        return $hs.modules.DataziList.hs_isPrefixOf.hscall(hs_zddEq26D7sY, hs_sat26D7EQ, hs_sat26D7EP);
    };
    this.hs_isInfixOf.evaluate = function (hs_zddEq26D7t6, hs_needle26D7t7, hs_haystack26D7t9) {
        var hs_sat26D7ER = new $hs.Thunk();
        hs_sat26D7ER.evaluateOnce = function () {
            return $hs.modules.DataziList.hs_tails.hscall(hs_haystack26D7t9);
        };
        var hs_sat26D7ES = new $hs.Func(1);
        hs_sat26D7ES.evaluate = function (hs_eta1cW6l3) {
            return $hs.modules.DataziList.hs_isPrefixOf.hscall(hs_zddEq26D7t6, hs_needle26D7t7, hs_eta1cW6l3);
        };
        return $hs.modules.GHCziList.hs_any.hscall(hs_sat26D7ES, hs_sat26D7ER);
    };
    this.hs_findIndices.evaluate = function (hs_p26D7tl, hs_ls26D7tu) {
        var hs_loop26D7to = new $hs.Func(2);
        hs_loop26D7to.evaluate = function (hs_ds26D7tn, hs_ds126D7tg) {
            var hs_wild26D7ET = hs_ds126D7tg;
            if (hs_ds126D7tg.notEvaluated) {
                hs_wild26D7ET = hs_ds126D7tg.hscall();
            }
            switch (hs_wild26D7ET.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_x26D7tk = hs_wild26D7ET.data[0];
                var hs_xs26D7tq = hs_wild26D7ET.data[1];
                var hs_wild126D7EV = hs_p26D7tl.hscall(hs_x26D7tk);
                switch (hs_wild126D7EV.tag) {
                case 1:
                    var hs_sat26D7EU = ($hs.Int.addCarry(hs_ds26D7tn, 1, 0))[0];
                    return hs_loop26D7to.hscall(hs_sat26D7EU, hs_xs26D7tq);
                case 2:
                    var hs_sat26D7EX = new $hs.Thunk();
                    hs_sat26D7EX.evaluateOnce = function () {
                        var hs_sat26D7EW = ($hs.Int.addCarry(hs_ds26D7tn, 1, 0))[0];
                        return hs_loop26D7to.hscall(hs_sat26D7EW, hs_xs26D7tq);
                    };
                    var hs_sat26D7EY = new $hs.Data(1);
                    hs_sat26D7EY.data = [hs_ds26D7tn];
                    var $res = new $hs.Data(2);
                    $res.data = [hs_sat26D7EY, hs_sat26D7EX];
                    return $res;
                }
            }
        };
        return hs_loop26D7to.hscall(0, hs_ls26D7tu);
    };
    this.hs_findIndex.evaluate = function (hs_p26D7tw) {
        var hs_sat26D7EZ = new $hs.Func(1);
        hs_sat26D7EZ.evaluate = function (hs_eta1cW6l3) {
            return $hs.modules.DataziList.hs_findIndices.hscall(hs_p26D7tw, hs_eta1cW6l3);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.DataziMaybe.hs_listToMaybe, hs_sat26D7EZ);
    };
    this.hs_find.evaluate = function (hs_p26D7tz) {
        var hs_sat26D7F0 = new $hs.Thunk();
        hs_sat26D7F0.evaluateOnce = function () {
            return $hs.modules.GHCziList.hs_filter.hscall(hs_p26D7tz);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.DataziMaybe.hs_listToMaybe, hs_sat26D7F0);
    };
    this.hs_elemIndices.evaluate = function (hs_zddEq26D7tD, hs_x26D7tE) {
        var hs_sat26D7F1 = new $hs.Thunk();
        hs_sat26D7F1.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26D7tD, hs_x26D7tE);
        };
        return $hs.modules.DataziList.hs_findIndices.hscall(hs_sat26D7F1);
    };
    this.hs_elemIndex.evaluate = function (hs_zddEq26D7tI, hs_x26D7tJ) {
        var hs_sat26D7F2 = new $hs.Thunk();
        hs_sat26D7F2.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26D7tI, hs_x26D7tJ);
        };
        var hs_sat26D7F3 = new $hs.Func(1);
        hs_sat26D7F3.evaluate = function (hs_eta1cW6l3) {
            return $hs.modules.DataziList.hs_findIndices.hscall(hs_sat26D7F2, hs_eta1cW6l3);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.DataziMaybe.hs_listToMaybe, hs_sat26D7F3);
    };
    this.hs_stripPrefix.evaluate = function (hs_zddEq26D7tX, hs_ds26D7tP, hs_ys26D7tR) {
        var hs_wild26D7F4 = hs_ds26D7tP;
        if (hs_ds26D7tP.notEvaluated) {
            hs_wild26D7F4 = hs_ds26D7tP.hscall();
        }
        switch (hs_wild26D7F4.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [hs_ys26D7tR];
            return $res;
        case 2:
            var hs_x26D7tY = hs_wild26D7F4.data[0];
            var hs_xs26D7u1 = hs_wild26D7F4.data[1];
            var hs_wild126D7F5 = hs_ys26D7tR;
            if (hs_ys26D7tR.notEvaluated) {
                hs_wild126D7F5 = hs_ys26D7tR.hscall();
            }
            switch (hs_wild126D7F5.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_y26D7tZ = hs_wild126D7F5.data[0];
                var hs_ys126D7u2 = hs_wild126D7F5.data[1];
                var hs_wild226D7F6 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26D7tX, hs_x26D7tY, hs_y26D7tZ);
                switch (hs_wild226D7F6.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    return $hs.modules.DataziList.hs_stripPrefix.hscall(hs_zddEq26D7tX, hs_xs26D7u1, hs_ys126D7u2);
                }
            }
        }
    };
    hs_sum125uIXO.evaluate = function (hs_l26D7ui) {
        var hs_sumzq26D7ug = new $hs.Func(2);
        hs_sumzq26D7ug.evaluate = function (hs_ds26D7u9, hs_a26D7ub) {
            var hs_wild26D7F7 = hs_ds26D7u9;
            if (hs_ds26D7u9.notEvaluated) {
                hs_wild26D7F7 = hs_ds26D7u9.hscall();
            }
            switch (hs_wild26D7F7.tag) {
            case 1:
                if (hs_a26D7ub.notEvaluated) {
                    return hs_a26D7ub.hscall();
                } else {
                    return hs_a26D7ub;
                }
            case 2:
                var hs_x26D7uf = hs_wild26D7F7.data[0];
                var hs_xs26D7ue = hs_wild26D7F7.data[1];
                var hs_sat26D7F8 = new $hs.Thunk();
                hs_sat26D7F8.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_a26D7ub, hs_x26D7uf);
                };
                return hs_sumzq26D7ug.hscall(hs_xs26D7ue, hs_sat26D7F8);
            }
        };
        var hs_sat26D7Fa = new $hs.Thunk();
        hs_sat26D7Fa.evaluateOnce = function () {
            var hs_sat26D7F9 = new $hs.Thunk();
            hs_sat26D7F9.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26D7F9);
        };
        return hs_sumzq26D7ug.hscall(hs_l26D7ui, hs_sat26D7Fa);
    };
    hs_sum225uIY6.evaluate = function (hs_l26D7uA) {
        var hs_sumzq26D7uy = new $hs.Func(2);
        hs_sumzq26D7uy.evaluate = function (hs_ds26D7ur, hs_a26D7ut) {
            var hs_wild26D7Fb = hs_ds26D7ur;
            if (hs_ds26D7ur.notEvaluated) {
                hs_wild26D7Fb = hs_ds26D7ur.hscall();
            }
            switch (hs_wild26D7Fb.tag) {
            case 1:
                if (hs_a26D7ut.notEvaluated) {
                    return hs_a26D7ut.hscall();
                } else {
                    return hs_a26D7ut;
                }
            case 2:
                var hs_x26D7ux = hs_wild26D7Fb.data[0];
                var hs_xs26D7uw = hs_wild26D7Fb.data[1];
                var hs_sat26D7Fc = new $hs.Thunk();
                hs_sat26D7Fc.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_a26D7ut, hs_x26D7ux);
                };
                return hs_sumzq26D7uy.hscall(hs_xs26D7uw, hs_sat26D7Fc);
            }
        };
        var hs_sat26D7Fe = new $hs.Thunk();
        hs_sat26D7Fe.evaluateOnce = function () {
            var hs_sat26D7Fd = new $hs.Thunk();
            hs_sat26D7Fd.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26D7Fd);
        };
        return hs_sumzq26D7uy.hscall(hs_l26D7uA, hs_sat26D7Fe);
    };
    this.hs_sum.evaluate = function (hs_zddNum26D7uO, hs_l26D7uS) {
        var hs_sumzq26D7uQ = new $hs.Func(2);
        hs_sumzq26D7uQ.evaluate = function (hs_ds26D7uI, hs_a26D7uK) {
            var hs_wild26D7Ff = hs_ds26D7uI;
            if (hs_ds26D7uI.notEvaluated) {
                hs_wild26D7Ff = hs_ds26D7uI.hscall();
            }
            switch (hs_wild26D7Ff.tag) {
            case 1:
                if (hs_a26D7uK.notEvaluated) {
                    return hs_a26D7uK.hscall();
                } else {
                    return hs_a26D7uK;
                }
            case 2:
                var hs_x26D7uP = hs_wild26D7Ff.data[0];
                var hs_xs26D7uN = hs_wild26D7Ff.data[1];
                var hs_sat26D7Fg = new $hs.Thunk();
                hs_sat26D7Fg.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum26D7uO, hs_a26D7uK, hs_x26D7uP);
                };
                return hs_sumzq26D7uQ.hscall(hs_xs26D7uN, hs_sat26D7Fg);
            }
        };
        var hs_sat26D7Fi = new $hs.Thunk();
        hs_sat26D7Fi.evaluateOnce = function () {
            var hs_sat26D7Fh = new $hs.Thunk();
            hs_sat26D7Fh.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26D7uO, hs_sat26D7Fh);
        };
        return hs_sumzq26D7uQ.hscall(hs_l26D7uS, hs_sat26D7Fi);
    };
    hs_product125uIYG.evaluate = function (hs_l26D7va) {
        var hs_prod26D7v8 = new $hs.Func(2);
        hs_prod26D7v8.evaluate = function (hs_ds26D7v1, hs_a26D7v3) {
            var hs_wild26D7Fj = hs_ds26D7v1;
            if (hs_ds26D7v1.notEvaluated) {
                hs_wild26D7Fj = hs_ds26D7v1.hscall();
            }
            switch (hs_wild26D7Fj.tag) {
            case 1:
                if (hs_a26D7v3.notEvaluated) {
                    return hs_a26D7v3.hscall();
                } else {
                    return hs_a26D7v3;
                }
            case 2:
                var hs_x26D7v7 = hs_wild26D7Fj.data[0];
                var hs_xs26D7v6 = hs_wild26D7Fj.data[1];
                var hs_sat26D7Fk = new $hs.Thunk();
                hs_sat26D7Fk.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_a26D7v3, hs_x26D7v7);
                };
                return hs_prod26D7v8.hscall(hs_xs26D7v6, hs_sat26D7Fk);
            }
        };
        var hs_sat26D7Fm = new $hs.Thunk();
        hs_sat26D7Fm.evaluateOnce = function () {
            var hs_sat26D7Fl = new $hs.Thunk();
            hs_sat26D7Fl.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26D7Fl);
        };
        return hs_prod26D7v8.hscall(hs_l26D7va, hs_sat26D7Fm);
    };
    hs_product225uIYY.evaluate = function (hs_l26D7vs) {
        var hs_prod26D7vq = new $hs.Func(2);
        hs_prod26D7vq.evaluate = function (hs_ds26D7vj, hs_a26D7vl) {
            var hs_wild26D7Fn = hs_ds26D7vj;
            if (hs_ds26D7vj.notEvaluated) {
                hs_wild26D7Fn = hs_ds26D7vj.hscall();
            }
            switch (hs_wild26D7Fn.tag) {
            case 1:
                if (hs_a26D7vl.notEvaluated) {
                    return hs_a26D7vl.hscall();
                } else {
                    return hs_a26D7vl;
                }
            case 2:
                var hs_x26D7vp = hs_wild26D7Fn.data[0];
                var hs_xs26D7vo = hs_wild26D7Fn.data[1];
                var hs_sat26D7Fo = new $hs.Thunk();
                hs_sat26D7Fo.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_a26D7vl, hs_x26D7vp);
                };
                return hs_prod26D7vq.hscall(hs_xs26D7vo, hs_sat26D7Fo);
            }
        };
        var hs_sat26D7Fq = new $hs.Thunk();
        hs_sat26D7Fq.evaluateOnce = function () {
            var hs_sat26D7Fp = new $hs.Thunk();
            hs_sat26D7Fp.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26D7Fp);
        };
        return hs_prod26D7vq.hscall(hs_l26D7vs, hs_sat26D7Fq);
    };
    this.hs_product.evaluate = function (hs_zddNum26D7vG, hs_l26D7vK) {
        var hs_prod26D7vI = new $hs.Func(2);
        hs_prod26D7vI.evaluate = function (hs_ds26D7vA, hs_a26D7vC) {
            var hs_wild26D7Fr = hs_ds26D7vA;
            if (hs_ds26D7vA.notEvaluated) {
                hs_wild26D7Fr = hs_ds26D7vA.hscall();
            }
            switch (hs_wild26D7Fr.tag) {
            case 1:
                if (hs_a26D7vC.notEvaluated) {
                    return hs_a26D7vC.hscall();
                } else {
                    return hs_a26D7vC;
                }
            case 2:
                var hs_x26D7vH = hs_wild26D7Fr.data[0];
                var hs_xs26D7vF = hs_wild26D7Fr.data[1];
                var hs_sat26D7Fs = new $hs.Thunk();
                hs_sat26D7Fs.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum26D7vG, hs_a26D7vC, hs_x26D7vH);
                };
                return hs_prod26D7vI.hscall(hs_xs26D7vF, hs_sat26D7Fs);
            }
        };
        var hs_sat26D7Fu = new $hs.Thunk();
        hs_sat26D7Fu.evaluateOnce = function () {
            var hs_sat26D7Ft = new $hs.Thunk();
            hs_sat26D7Ft.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26D7vG, hs_sat26D7Ft);
        };
        return hs_prod26D7vI.hscall(hs_l26D7vK, hs_sat26D7Fu);
    };
    this.hs_lines.evaluate = function (hs_ds26D7vO) {
        var hs_wild26D7vY = hs_ds26D7vO;
        if (hs_ds26D7vO.notEvaluated) {
            hs_wild26D7vY = hs_ds26D7vO.hscall();
        }
        switch (hs_wild26D7vY.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_ds126D7w9 = new $hs.Thunk();
            hs_ds126D7w9.evaluateOnce = function () {
                var hs_ds226D7vU = new $hs.Data(1);
                hs_ds226D7vU.data = ["\n"];
                var hs_sat26D7Fz = new $hs.Func(1);
                hs_sat26D7Fz.evaluate = function (hs_ds326D7vW) {
                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_ds326D7vW, hs_ds226D7vU);
                };
                var hs_wild126D7Fy = $hs.modules.GHCziList.hs_break.hscall(hs_sat26D7Fz, hs_wild26D7vY);
                var hs_l26D7w2 = hs_wild126D7Fy.data[0];
                var hs_szq26D7w3 = hs_wild126D7Fy.data[1];
                var hs_sat26D7FB = new $hs.Thunk();
                hs_sat26D7FB.evaluateOnce = function () {
                    var hs_wild226D7Fx = hs_szq26D7w3;
                    if (hs_szq26D7w3.notEvaluated) {
                        hs_wild226D7Fx = hs_szq26D7w3.hscall();
                    }
                    switch (hs_wild226D7Fx.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_szqzq26D7w7 = hs_wild226D7Fx.data[1];
                        return $hs.modules.DataziList.hs_lines.hscall(hs_szqzq26D7w7);
                    }
                };
                var $res = new $hs.Data(1);
                $res.data = [hs_l26D7w2, hs_sat26D7FB];
                return $res;
            };
            var hs_sat26D7FF = new $hs.Thunk();
            hs_sat26D7FF.evaluateOnce = function () {
                var hs_wild126D7FD = hs_ds126D7w9;
                if (hs_ds126D7w9.notEvaluated) {
                    hs_wild126D7FD = hs_ds126D7w9.hscall();
                }
                var hs_t26D7wi = hs_wild126D7FD.data[1];
                if (hs_t26D7wi.notEvaluated) {
                    return hs_t26D7wi.hscall();
                } else {
                    return hs_t26D7wi;
                }
            };
            var hs_sat26D7FH = new $hs.Thunk();
            hs_sat26D7FH.evaluateOnce = function () {
                var hs_wild126D7FE = hs_ds126D7w9;
                if (hs_ds126D7w9.notEvaluated) {
                    hs_wild126D7FE = hs_ds126D7w9.hscall();
                }
                var hs_h26D7wd = hs_wild126D7FE.data[0];
                if (hs_h26D7wd.notEvaluated) {
                    return hs_h26D7wd.hscall();
                } else {
                    return hs_h26D7wd;
                }
            };
            var $res = new $hs.Data(2);
            $res.data = [hs_sat26D7FH, hs_sat26D7FF];
            return $res;
        }
    };
};
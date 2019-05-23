
$hs.modules.DataziList = new $hs.Module();
$hs.modules.DataziList.dependencies = ["GHC.Prim", "GHC.Types", "GHC.CString", "GHC.Ordering", "GHC.Tuple", "GHC.Integer", "Data.Maybe", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.Err", "GHC.Classes", "GHC.List", "GHC.Unicode", "Control.Exception.Base"];
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
    this.hs_unwords.evaluate = function (hs_ds26CI0L) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_ds26CI0L);
    };
    this.hs_words.notEvaluated = true;
    this.hs_words.evaluate = function (hs_s26CI0Z) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_s26CI0Z);
    };
    this.hs_unlines.notEvaluated = true;
    this.hs_unlines.evaluate = function (hs_ds26CI1i) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_ds26CI1i);
    };
    this.hs_foldl1.notEvaluated = true;
    this.hs_foldl1.evaluate = function (hs_f26CI1y, hs_ds26CI1t) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_f26CI1y, hs_ds26CI1t);
    };
    this.hs_foldlzq.notEvaluated = true;
    this.hs_foldlzq.evaluate = function (hs_f26CI1N, hs_zz026CI1S, hs_xs026CI1T) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_f26CI1N, hs_zz026CI1S, hs_xs026CI1T);
    };
    this.hs_foldl1zq.notEvaluated = true;
    this.hs_foldl1zq.evaluate = function (hs_f26CI21, hs_ds26CI1W) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_f26CI21, hs_ds26CI1W);
    };
    this.hs_unfoldr.notEvaluated = true;
    this.hs_unfoldr.evaluate = function (hs_f26CI27, hs_b26CI26) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_f26CI27, hs_b26CI26);
    };
    this.hs_sortBy.notEvaluated = true;
    this.hs_sortBy.evaluate = function (hs_cmp26CI2w) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_cmp26CI2w);
    };
    this.hs_sort.notEvaluated = true;
    this.hs_sort.evaluate = function (hs_zddOrd26CI4g) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddOrd26CI4g);
    };
    this.hs_permutations.notEvaluated = true;
    this.hs_permutations.evaluate = function (hs_xs026CI4j) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_xs026CI4j);
    };
    this.hs_subsequences.notEvaluated = true;
    this.hs_subsequences.evaluate = function (hs_xs26CI5x) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_xs26CI5x);
    };
    this.hs_tails.notEvaluated = true;
    this.hs_tails.evaluate = function (hs_xs26CI5A) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_xs26CI5A);
    };
    this.hs_inits.notEvaluated = true;
    this.hs_inits.evaluate = function (hs_xs26CI5H) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_xs26CI5H);
    };
    this.hs_groupBy.notEvaluated = true;
    this.hs_groupBy.evaluate = function (hs_ds26CI5Y, hs_ds126CI5S) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_ds26CI5Y, hs_ds126CI5S);
    };
    this.hs_group.notEvaluated = true;
    this.hs_group.evaluate = function (hs_zddEq26CI6g, hs_eta26CI6i) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddEq26CI6g, hs_eta26CI6i);
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
    this.hs_zzipWith7.evaluate = function (hs_zz26CIbC, hs_ds26CIb3, hs_ds126CIb7, hs_ds226CIbb, hs_ds326CIbf, hs_ds426CIbj, hs_ds526CIbn, hs_ds626CIbr) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zz26CIbC, hs_ds26CIb3, hs_ds126CIb7, hs_ds226CIbb, hs_ds326CIbf, hs_ds426CIbj, hs_ds526CIbn, hs_ds626CIbr);
    };
    this.hs_zzipWith6.notEvaluated = true;
    this.hs_zzipWith6.evaluate = function (hs_zz26CIcn, hs_ds26CIbT, hs_ds126CIbX, hs_ds226CIc1, hs_ds326CIc5, hs_ds426CIc9, hs_ds526CIcd) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zz26CIcn, hs_ds26CIbT, hs_ds126CIbX, hs_ds226CIc1, hs_ds326CIc5, hs_ds426CIc9, hs_ds526CIcd);
    };
    this.hs_zzipWith5.notEvaluated = true;
    this.hs_zzipWith5.evaluate = function (hs_zz26CId1, hs_ds26CIcC, hs_ds126CIcG, hs_ds226CIcK, hs_ds326CIcO, hs_ds426CIcS) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zz26CId1, hs_ds26CIcC, hs_ds126CIcG, hs_ds226CIcK, hs_ds326CIcO, hs_ds426CIcS);
    };
    this.hs_zzipWith4.notEvaluated = true;
    this.hs_zzipWith4.evaluate = function (hs_zz26CIdy, hs_ds26CIde, hs_ds126CIdi, hs_ds226CIdm, hs_ds326CIdq) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zz26CIdy, hs_ds26CIde, hs_ds126CIdi, hs_ds226CIdm, hs_ds326CIdq);
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
    this.hs_genericIndex.evaluate = function (hs_zddIntegral26CIdJ, hs_eta26CIdP, hs_eta126CIdV) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddIntegral26CIdJ, hs_eta26CIdP, hs_eta126CIdV);
    };
    this.hs_genericSplitAt.notEvaluated = true;
    this.hs_genericSplitAt.evaluate = function (hs_zddIntegral26CIec, hs_eta26CIeh, hs_eta126CIel) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddIntegral26CIec, hs_eta26CIeh, hs_eta126CIel);
    };
    this.hs_genericDrop.notEvaluated = true;
    this.hs_genericDrop.evaluate = function (hs_zddIntegral26CIeL, hs_eta26CIeQ, hs_eta126CIeU) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddIntegral26CIeL, hs_eta26CIeQ, hs_eta126CIeU);
    };
    this.hs_genericTake.notEvaluated = true;
    this.hs_genericTake.evaluate = function (hs_zddIntegral26CIf6, hs_eta26CIfb, hs_eta126CIff) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddIntegral26CIf6, hs_eta26CIfb, hs_eta126CIff);
    };
    this.hs_genericReplicate.notEvaluated = true;
    this.hs_genericReplicate.evaluate = function (hs_zddIntegral26CIfs, hs_n26CIft, hs_x26CIfu) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddIntegral26CIfs, hs_n26CIft, hs_x26CIfu);
    };
    this.hs_genericLength.notEvaluated = true;
    this.hs_genericLength.evaluate = function (hs_zddNum26CIfU, hs_ds26CIfS) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddNum26CIfU, hs_ds26CIfS);
    };
    this.hs_minimumBy.notEvaluated = true;
    this.hs_minimumBy.evaluate = function (hs_ds26CIgi, hs_ds126CIg4) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_ds26CIgi, hs_ds126CIg4);
    };
    this.hs_maximumBy.notEvaluated = true;
    this.hs_maximumBy.evaluate = function (hs_ds26CIgD, hs_ds126CIgp) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_ds26CIgD, hs_ds126CIgp);
    };
    this.hs_minimum.notEvaluated = true;
    this.hs_minimum.evaluate = function (hs_zddOrd26CIha, hs_ds26CIh0) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddOrd26CIha, hs_ds26CIh0);
    };
    this.hs_maximum.notEvaluated = true;
    this.hs_maximum.evaluate = function (hs_zddOrd26CIhG, hs_ds26CIhw) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddOrd26CIhG, hs_ds26CIhw);
    };
    this.hs_insertBy.notEvaluated = true;
    this.hs_insertBy.evaluate = function (hs_ds26CIhT, hs_x26CIhP, hs_ds126CIhN) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_ds26CIhT, hs_x26CIhP, hs_ds126CIhN);
    };
    this.hs_insert.notEvaluated = true;
    this.hs_insert.evaluate = function (hs_zddOrd26CIi1, hs_e26CIi3, hs_ls26CIi4) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddOrd26CIi1, hs_e26CIi3, hs_ls26CIi4);
    };
    this.hs_mapAccumR.notEvaluated = true;
    this.hs_mapAccumR.evaluate = function (hs_ds26CIie, hs_s26CIia, hs_ds126CIi8) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_ds26CIie, hs_s26CIia, hs_ds126CIi8);
    };
    this.hs_mapAccumL.notEvaluated = true;
    this.hs_mapAccumL.evaluate = function (hs_ds26CIiP, hs_s26CIiK, hs_ds126CIiI) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_ds26CIiP, hs_s26CIiK, hs_ds126CIiI);
    };
    this.hs_partition.notEvaluated = true;
    this.hs_partition.evaluate = function (hs_eta26CIjK, hs_eta126CIjN) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_eta26CIjK, hs_eta126CIjN);
    };
    this.hs_transpose.notEvaluated = true;
    this.hs_transpose.evaluate = function (hs_ds26CIjP) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_ds26CIjP);
    };
    this.hs_intersperse.notEvaluated = true;
    this.hs_intersperse.evaluate = function (hs_ds26CIkP, hs_ds126CIkK) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_ds26CIkP, hs_ds126CIkK);
    };
    this.hs_intercalate.notEvaluated = true;
    this.hs_intercalate.evaluate = function (hs_xs26CIkU, hs_xss26CIkV) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_xs26CIkU, hs_xss26CIkV);
    };
    this.hs_intersectBy.notEvaluated = true;
    this.hs_intersectBy.evaluate = function (hs_ds26CIlf, hs_ds126CIl0, hs_ds226CIl4) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_ds26CIlf, hs_ds126CIl0, hs_ds226CIl4);
    };
    this.hs_intersect.notEvaluated = true;
    this.hs_intersect.evaluate = function (hs_zddEq26CIlq, hs_eta26CIls, hs_eta126CIlt) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddEq26CIlq, hs_eta26CIls, hs_eta126CIlt);
    };
    this.hs_deleteBy.notEvaluated = true;
    this.hs_deleteBy.evaluate = function (hs_ds26CIlD, hs_ds126CIlB, hs_ds226CIlx) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_ds26CIlD, hs_ds126CIlB, hs_ds226CIlx);
    };
    this.hs_deleteFirstsBy.notEvaluated = true;
    this.hs_deleteFirstsBy.evaluate = function (hs_eq26CIlI) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_eq26CIlI);
    };
    this.hs_delete.notEvaluated = true;
    this.hs_delete.evaluate = function (hs_zddEq26CIlO, hs_eta26CIlQ, hs_eta126CIlR) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddEq26CIlO, hs_eta26CIlQ, hs_eta126CIlR);
    };
    this.hs_zrzr.notEvaluated = true;
    this.hs_zrzr.evaluate = function (hs_zddEq26CIlT) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddEq26CIlT);
    };
    this.hs_nubBy.notEvaluated = true;
    this.hs_nubBy.evaluate = function (hs_eq26CImi, hs_l26CImq) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_eq26CImi, hs_l26CImq);
    };
    this.hs_unionBy.notEvaluated = true;
    this.hs_unionBy.evaluate = function (hs_eq26CImv, hs_xs26CImu, hs_ys26CImy) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_eq26CImv, hs_xs26CImu, hs_ys26CImy);
    };
    this.hs_union.notEvaluated = true;
    this.hs_union.evaluate = function (hs_zddEq26CImE, hs_eta26CImG, hs_eta126CImH) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddEq26CImE, hs_eta26CImG, hs_eta126CImH);
    };
    this.hs_nub.notEvaluated = true;
    this.hs_nub.evaluate = function (hs_zddEq26CImR, hs_l26CImZ) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddEq26CImR, hs_l26CImZ);
    };
    this.hs_isPrefixOf.notEvaluated = true;
    this.hs_isPrefixOf.evaluate = function (hs_zddEq26CInn, hs_ds26CIn7, hs_ds126CInb) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddEq26CInn, hs_ds26CIn7, hs_ds126CInb);
    };
    this.hs_isSuffixOf.notEvaluated = true;
    this.hs_isSuffixOf.evaluate = function (hs_zddEq26CInx, hs_x26CIny, hs_y26CInA) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddEq26CInx, hs_x26CIny, hs_y26CInA);
    };
    this.hs_isInfixOf.notEvaluated = true;
    this.hs_isInfixOf.evaluate = function (hs_zddEq26CInF, hs_needle26CInG, hs_haystack26CInI) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddEq26CInF, hs_needle26CInG, hs_haystack26CInI);
    };
    this.hs_findIndices.notEvaluated = true;
    this.hs_findIndices.evaluate = function (hs_p26CInU, hs_ls26CIo3) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_p26CInU, hs_ls26CIo3);
    };
    this.hs_findIndex.notEvaluated = true;
    this.hs_findIndex.evaluate = function (hs_p26CIo5) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_p26CIo5);
    };
    this.hs_find.notEvaluated = true;
    this.hs_find.evaluate = function (hs_p26CIo8) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_p26CIo8);
    };
    this.hs_elemIndices.notEvaluated = true;
    this.hs_elemIndices.evaluate = function (hs_zddEq26CIoc, hs_x26CIod) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddEq26CIoc, hs_x26CIod);
    };
    this.hs_elemIndex.notEvaluated = true;
    this.hs_elemIndex.evaluate = function (hs_zddEq26CIoh, hs_x26CIoi) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddEq26CIoh, hs_x26CIoi);
    };
    this.hs_stripPrefix.notEvaluated = true;
    this.hs_stripPrefix.evaluate = function (hs_zddEq26CIow, hs_ds26CIoo, hs_ys26CIoq) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddEq26CIow, hs_ds26CIoo, hs_ys26CIoq);
    };
    this.hs_sum.notEvaluated = true;
    this.hs_sum.evaluate = function (hs_zddNum26CIpl, hs_l26CIpp) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddNum26CIpl, hs_l26CIpp);
    };
    this.hs_product.notEvaluated = true;
    this.hs_product.evaluate = function (hs_zddNum26CIqb, hs_l26CIqf) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_zddNum26CIqb, hs_l26CIqf);
    };
    this.hs_lines.notEvaluated = true;
    this.hs_lines.evaluate = function (hs_ds26CIqj) {
        $hs.modules.DataziList.loadDependencies();
        return this.evaluate(hs_ds26CIqj);
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
    var hs_nonEmptySubsequences25sUXd = new $hs.Func(1);
    var hs_strictGenericLength25sUWP = new $hs.Func(2);
    var hs_strictMinimum25sUWL = new $hs.Func(2);
    var hs_strictMaximum25sUWJ = new $hs.Func(2);
    var hs_select25sUWD = new $hs.Func(3);
    var hs_prependToAll25sUWz = new $hs.Func(2);
    var hs_elemzuby25sUWq = new $hs.Func(3);
    var hs_sum125ujSm = new $hs.Func(1);
    var hs_sum225ujSD = new $hs.Func(1);
    var hs_product125ujTc = new $hs.Func(1);
    var hs_product225ujTt = new $hs.Func(1);
    this.hs_unwords.evaluate = function (hs_ds26CI0L) {
        var hs_wild26CIqS = hs_ds26CI0L;
        if (hs_ds26CI0L.notEvaluated) {
            hs_wild26CIqS = hs_ds26CI0L.hscall();
        }
        switch (hs_wild26CIqS.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_w26CI0R = hs_wild26CIqS.data[0];
            var hs_ds126CI0P = hs_wild26CIqS.data[1];
            var hs_wild126CI0V = hs_ds126CI0P;
            if (hs_ds126CI0P.notEvaluated) {
                hs_wild126CI0V = hs_ds126CI0P.hscall();
            }
            switch (hs_wild126CI0V.tag) {
            case 1:
                if (hs_w26CI0R.notEvaluated) {
                    return hs_w26CI0R.hscall();
                } else {
                    return hs_w26CI0R;
                }
            case 2:
                var hs_sat26CIqT = new $hs.Thunk();
                hs_sat26CIqT.evaluateOnce = function () {
                    return $hs.modules.DataziList.hs_unwords.hscall(hs_wild126CI0V);
                };
                var hs_sat26CIqU = new $hs.Data(1);
                hs_sat26CIqU.data = [" "];
                var hs_sat26CIqP = new $hs.Data(2);
                hs_sat26CIqP.data = [hs_sat26CIqU, hs_sat26CIqT];
                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_w26CI0R, hs_sat26CIqP);
            }
        }
    };
    this.hs_words.evaluate = function (hs_s26CI0Z) {
        var hs_wild26CI14 = $hs.modules.GHCziList.hs_dropWhile.hscall($hs.modules.GHCziUnicode.hs_isSpace, hs_s26CI0Z);
        switch (hs_wild26CI14.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_ds26CI15 = new $hs.Thunk();
            hs_ds26CI15.evaluateOnce = function () {
                return $hs.modules.GHCziList.hs_break.hscall($hs.modules.GHCziUnicode.hs_isSpace, hs_wild26CI14);
            };
            var hs_sat26CIqY = new $hs.Thunk();
            hs_sat26CIqY.evaluateOnce = function () {
                var hs_sat26CIr1 = new $hs.Thunk();
                hs_sat26CIr1.evaluateOnce = function () {
                    var hs_wild126CIr3 = hs_ds26CI15;
                    if (hs_ds26CI15.notEvaluated) {
                        hs_wild126CIr3 = hs_ds26CI15.hscall();
                    }
                    var hs_szqzq26CI1e = hs_wild126CIr3.data[1];
                    if (hs_szqzq26CI1e.notEvaluated) {
                        return hs_szqzq26CI1e.hscall();
                    } else {
                        return hs_szqzq26CI1e;
                    }
                };
                return $hs.modules.DataziList.hs_words.hscall(hs_sat26CIr1);
            };
            var hs_sat26CIqV = new $hs.Thunk();
            hs_sat26CIqV.evaluateOnce = function () {
                var hs_wild126CIr0 = hs_ds26CI15;
                if (hs_ds26CI15.notEvaluated) {
                    hs_wild126CIr0 = hs_ds26CI15.hscall();
                }
                var hs_w26CI19 = hs_wild126CIr0.data[0];
                if (hs_w26CI19.notEvaluated) {
                    return hs_w26CI19.hscall();
                } else {
                    return hs_w26CI19;
                }
            };
            var $res = new $hs.Data(2);
            $res.data = [hs_sat26CIqV, hs_sat26CIqY];
            return $res;
        }
    };
    this.hs_unlines.evaluate = function (hs_ds26CI1i) {
        var hs_wild26CIr5 = hs_ds26CI1i;
        if (hs_ds26CI1i.notEvaluated) {
            hs_wild26CIr5 = hs_ds26CI1i.hscall();
        }
        switch (hs_wild26CIr5.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_l26CI1m = hs_wild26CIr5.data[0];
            var hs_ls26CI1o = hs_wild26CIr5.data[1];
            var hs_sat26CIr6 = new $hs.Thunk();
            hs_sat26CIr6.evaluateOnce = function () {
                return $hs.modules.DataziList.hs_unlines.hscall(hs_ls26CI1o);
            };
            var hs_sat26CIr7 = new $hs.Data(1);
            hs_sat26CIr7.data = ["\n"];
            var hs_sat26CIr4 = new $hs.Data(2);
            hs_sat26CIr4.data = [hs_sat26CIr7, hs_sat26CIr6];
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_l26CI1m, hs_sat26CIr4);
        }
    };
    this.hs_foldl1.evaluate = function (hs_f26CI1y, hs_ds26CI1t) {
        var hs_wild26CIr8 = hs_ds26CI1t;
        if (hs_ds26CI1t.notEvaluated) {
            hs_wild26CIr8 = hs_ds26CI1t.hscall();
        }
        switch (hs_wild26CIr8.tag) {
        case 1:
            var hs_sat26CIr9 = new $hs.Thunk();
            hs_sat26CIr9.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("foldl1\x00");
            };
            return $hs.modules.GHCziList.hs_errorEmptyList.hscall(hs_sat26CIr9);
        case 2:
            var hs_x26CI1z = hs_wild26CIr8.data[0];
            var hs_xs26CI1A = hs_wild26CIr8.data[1];
            return $hs.modules.GHCziList.hs_foldl.hscall(hs_f26CI1y, hs_x26CI1z, hs_xs26CI1A);
        }
    };
    this.hs_foldlzq.evaluate = function (hs_f26CI1N, hs_zz026CI1S, hs_xs026CI1T) {
        var hs_lgo26CI1R = new $hs.Func(2);
        hs_lgo26CI1R.evaluate = function (hs_zz26CI1J, hs_ds26CI1H) {
            var hs_wild26CIra = hs_ds26CI1H;
            if (hs_ds26CI1H.notEvaluated) {
                hs_wild26CIra = hs_ds26CI1H.hscall();
            }
            switch (hs_wild26CIra.tag) {
            case 1:
                if (hs_zz26CI1J.notEvaluated) {
                    return hs_zz26CI1J.hscall();
                } else {
                    return hs_zz26CI1J;
                }
            case 2:
                var hs_x26CI1M = hs_wild26CIra.data[0];
                var hs_xs26CI1Q = hs_wild26CIra.data[1];
                var hs_zzzq26CI1P = hs_f26CI1N.hscall(hs_zz26CI1J, hs_x26CI1M);
                return hs_lgo26CI1R.hscall(hs_zzzq26CI1P, hs_xs26CI1Q);
            }
        };
        return hs_lgo26CI1R.hscall(hs_zz026CI1S, hs_xs026CI1T);
    };
    this.hs_foldl1zq.evaluate = function (hs_f26CI21, hs_ds26CI1W) {
        var hs_wild26CIrb = hs_ds26CI1W;
        if (hs_ds26CI1W.notEvaluated) {
            hs_wild26CIrb = hs_ds26CI1W.hscall();
        }
        switch (hs_wild26CIrb.tag) {
        case 1:
            var hs_sat26CIrc = new $hs.Thunk();
            hs_sat26CIrc.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("foldl1'\x00");
            };
            return $hs.modules.GHCziList.hs_errorEmptyList.hscall(hs_sat26CIrc);
        case 2:
            var hs_x26CI22 = hs_wild26CIrb.data[0];
            var hs_xs26CI23 = hs_wild26CIrb.data[1];
            return $hs.modules.DataziList.hs_foldlzq.hscall(hs_f26CI21, hs_x26CI22, hs_xs26CI23);
        }
    };
    this.hs_unfoldr.evaluate = function (hs_f26CI27, hs_b26CI26) {
        var hs_wild26CIrf = hs_f26CI27.hscall(hs_b26CI26);
        switch (hs_wild26CIrf.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_ds26CI2a = hs_wild26CIrf.data[0];
            var hs_wild126CIre = hs_ds26CI2a;
            if (hs_ds26CI2a.notEvaluated) {
                hs_wild126CIre = hs_ds26CI2a.hscall();
            }
            var hs_a26CI2e = hs_wild126CIre.data[0];
            var hs_newzub26CI2f = hs_wild126CIre.data[1];
            var hs_sat26CIrd = new $hs.Thunk();
            hs_sat26CIrd.evaluateOnce = function () {
                return $hs.modules.DataziList.hs_unfoldr.hscall(hs_f26CI27, hs_newzub26CI2f);
            };
            var $res = new $hs.Data(2);
            $res.data = [hs_a26CI2e, hs_sat26CIrd];
            return $res;
        }
    };
    this.hs_sortBy.evaluate = function (hs_cmp26CI2w) {
        var hs_merge26CI2B = new $hs.Func(2);
        hs_merge26CI2B.evaluate = function (hs_as26CI2l, hs_bs26CI2n) {
            var hs_wild26CI2r = hs_as26CI2l;
            if (hs_as26CI2l.notEvaluated) {
                hs_wild26CI2r = hs_as26CI2l.hscall();
            }
            switch (hs_wild26CI2r.tag) {
            case 1:
                if (hs_bs26CI2n.notEvaluated) {
                    return hs_bs26CI2n.hscall();
                } else {
                    return hs_bs26CI2n;
                }
            case 2:
                var hs_a26CI2u = hs_wild26CI2r.data[0];
                var hs_aszq26CI2z = hs_wild26CI2r.data[1];
                var hs_wild126CI2A = hs_bs26CI2n;
                if (hs_bs26CI2n.notEvaluated) {
                    hs_wild126CI2A = hs_bs26CI2n.hscall();
                }
                switch (hs_wild126CI2A.tag) {
                case 1:
                    if (hs_wild26CI2r.notEvaluated) {
                        return hs_wild26CI2r.hscall();
                    } else {
                        return hs_wild26CI2r;
                    }
                case 2:
                    var hs_b26CI2v = hs_wild126CI2A.data[0];
                    var hs_bszq26CI2D = hs_wild126CI2A.data[1];
                    var hs_sat26CIrL = new $hs.Thunk();
                    hs_sat26CIrL.evaluateOnce = function () {
                        return hs_cmp26CI2w.hscall(hs_a26CI2u, hs_b26CI2v);
                    };
                    var hs_wild226CIrM = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqOrdering, hs_sat26CIrL, $hs.modules.GHCziOrdering.hs_GT);
                    switch (hs_wild226CIrM.tag) {
                    case 1:
                        var hs_sat26CIrN = new $hs.Thunk();
                        hs_sat26CIrN.evaluateOnce = function () {
                            return hs_merge26CI2B.hscall(hs_aszq26CI2z, hs_wild126CI2A);
                        };
                        var $res = new $hs.Data(2);
                        $res.data = [hs_a26CI2u, hs_sat26CIrN];
                        return $res;
                    case 2:
                        var hs_sat26CIrK = new $hs.Thunk();
                        hs_sat26CIrK.evaluateOnce = function () {
                            return hs_merge26CI2B.hscall(hs_wild26CI2r, hs_bszq26CI2D);
                        };
                        var $res = new $hs.Data(2);
                        $res.data = [hs_b26CI2v, hs_sat26CIrK];
                        return $res;
                    }
                }
            }
        };
        var hs_mergePairs26CI2U = new $hs.Func(1);
        hs_mergePairs26CI2U.evaluate = function (hs_ds26CI2H) {
            var hs_wild26CI2N = hs_ds26CI2H;
            if (hs_ds26CI2H.notEvaluated) {
                hs_wild26CI2N = hs_ds26CI2H.hscall();
            }
            switch (hs_wild26CI2N.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_a26CI2Q = hs_wild26CI2N.data[0];
                var hs_ds126CI2L = hs_wild26CI2N.data[1];
                var hs_wild126CIrI = hs_ds126CI2L;
                if (hs_ds126CI2L.notEvaluated) {
                    hs_wild126CIrI = hs_ds126CI2L.hscall();
                }
                switch (hs_wild126CIrI.tag) {
                case 1:
                    if (hs_wild26CI2N.notEvaluated) {
                        return hs_wild26CI2N.hscall();
                    } else {
                        return hs_wild26CI2N;
                    }
                case 2:
                    var hs_b26CI2R = hs_wild126CIrI.data[0];
                    var hs_xs26CI2T = hs_wild126CIrI.data[1];
                    var hs_sat26CIrJ = new $hs.Thunk();
                    hs_sat26CIrJ.evaluateOnce = function () {
                        return hs_mergePairs26CI2U.hscall(hs_xs26CI2T);
                    };
                    var hs_sat26CIrH = new $hs.Thunk();
                    hs_sat26CIrH.evaluateOnce = function () {
                        return hs_merge26CI2B.hscall(hs_a26CI2Q, hs_b26CI2R);
                    };
                    var $res = new $hs.Data(2);
                    $res.data = [hs_sat26CIrH, hs_sat26CIrJ];
                    return $res;
                }
            }
        };
        var hs_descending26CI3V = new $hs.Func(3);
        var hs_ascending26CI3B = new $hs.Func(3);
        var hs_sequences26CI3n = new $hs.Func(1);
        hs_descending26CI3V.evaluate = function (hs_a26CI3J, hs_as26CI3K, hs_ds26CI3H) {
            var hs_wild26CI3T = hs_ds26CI3H;
            if (hs_ds26CI3H.notEvaluated) {
                hs_wild26CI3T = hs_ds26CI3H.hscall();
            }
            switch (hs_wild26CI3T.tag) {
            case 1:
                var hs_sat26CIrG = new $hs.Thunk();
                hs_sat26CIrG.evaluateOnce = function () {
                    return hs_sequences26CI3n.hscall($hs.modules.GHCziTypes.hs_ZMZN);
                };
                var hs_sat26CIrF = new $hs.Data(2);
                hs_sat26CIrF.data = [hs_a26CI3J, hs_as26CI3K];
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26CIrF, hs_sat26CIrG];
                return $res;
            case 2:
                var hs_b26CI3P = hs_wild26CI3T.data[0];
                var hs_bs26CI3X = hs_wild26CI3T.data[1];
                var hs_sat26CIrB = new $hs.Thunk();
                hs_sat26CIrB.evaluateOnce = function () {
                    return hs_cmp26CI2w.hscall(hs_a26CI3J, hs_b26CI3P);
                };
                var hs_wild126CIrC = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqOrdering, hs_sat26CIrB, $hs.modules.GHCziOrdering.hs_GT);
                switch (hs_wild126CIrC.tag) {
                case 1:
                    var hs_sat26CIrE = new $hs.Thunk();
                    hs_sat26CIrE.evaluateOnce = function () {
                        return hs_sequences26CI3n.hscall(hs_wild26CI3T);
                    };
                    var hs_sat26CIrD = new $hs.Data(2);
                    hs_sat26CIrD.data = [hs_a26CI3J, hs_as26CI3K];
                    var $res = new $hs.Data(2);
                    $res.data = [hs_sat26CIrD, hs_sat26CIrE];
                    return $res;
                case 2:
                    var hs_sat26CIrA = new $hs.Data(2);
                    hs_sat26CIrA.data = [hs_a26CI3J, hs_as26CI3K];
                    return hs_descending26CI3V.hscall(hs_b26CI3P, hs_sat26CIrA, hs_bs26CI3X);
                }
            }
        };
        hs_ascending26CI3B.evaluate = function (hs_a26CI3j, hs_as26CI3k, hs_ds26CI3h) {
            var hs_wild26CI3w = hs_ds26CI3h;
            if (hs_ds26CI3h.notEvaluated) {
                hs_wild26CI3w = hs_ds26CI3h.hscall();
            }
            switch (hs_wild26CI3w.tag) {
            case 1:
                var hs_sat26CIry = new $hs.Thunk();
                hs_sat26CIry.evaluateOnce = function () {
                    return hs_sequences26CI3n.hscall($hs.modules.GHCziTypes.hs_ZMZN);
                };
                var hs_sat26CIrx = new $hs.Thunk();
                hs_sat26CIrx.evaluateOnce = function () {
                    var hs_sat26CIrz = new $hs.Data(2);
                    hs_sat26CIrz.data = [hs_a26CI3j, $hs.modules.GHCziTypes.hs_ZMZN];
                    return hs_as26CI3k.hscall(hs_sat26CIrz);
                };
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26CIrx, hs_sat26CIry];
                return $res;
            case 2:
                var hs_b26CI3r = hs_wild26CI3w.data[0];
                var hs_bs26CI3D = hs_wild26CI3w.data[1];
                var hs_sat26CIrr = new $hs.Thunk();
                hs_sat26CIrr.evaluateOnce = function () {
                    return hs_cmp26CI2w.hscall(hs_a26CI3j, hs_b26CI3r);
                };
                var hs_wild126CIrs = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziClasses.hs_zdfEqOrdering, hs_sat26CIrr, $hs.modules.GHCziOrdering.hs_GT);
                switch (hs_wild126CIrs.tag) {
                case 1:
                    var hs_sat26CIrv = new $hs.Thunk();
                    hs_sat26CIrv.evaluateOnce = function () {
                        return hs_sequences26CI3n.hscall(hs_wild26CI3w);
                    };
                    var hs_sat26CIru = new $hs.Thunk();
                    hs_sat26CIru.evaluateOnce = function () {
                        var hs_sat26CIrw = new $hs.Data(2);
                        hs_sat26CIrw.data = [hs_a26CI3j, $hs.modules.GHCziTypes.hs_ZMZN];
                        return hs_as26CI3k.hscall(hs_sat26CIrw);
                    };
                    var $res = new $hs.Data(2);
                    $res.data = [hs_sat26CIru, hs_sat26CIrv];
                    return $res;
                case 2:
                    var hs_sat26CIrq = new $hs.Func(1);
                    hs_sat26CIrq.evaluate = function (hs_ys26CI3z) {
                        var hs_sat26CIrt = new $hs.Data(2);
                        hs_sat26CIrt.data = [hs_a26CI3j, hs_ys26CI3z];
                        return hs_as26CI3k.hscall(hs_sat26CIrt);
                    };
                    return hs_ascending26CI3B.hscall(hs_b26CI3r, hs_sat26CIrq, hs_bs26CI3D);
                }
            }
        };
        hs_sequences26CI3n.evaluate = function (hs_ds26CI3Z) {
            var hs_wild26CI45 = hs_ds26CI3Z;
            if (hs_ds26CI3Z.notEvaluated) {
                hs_wild26CI45 = hs_ds26CI3Z.hscall();
            }
            switch (hs_wild26CI45.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [$hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN];
                return $res;
            case 2:
                var hs_a26CI48 = hs_wild26CI45.data[0];
                var hs_ds126CI43 = hs_wild26CI45.data[1];
                var hs_wild126CIrm = hs_ds126CI43;
                if (hs_ds126CI43.notEvaluated) {
                    hs_wild126CIrm = hs_ds126CI43.hscall();
                }
                switch (hs_wild126CIrm.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [hs_wild26CI45, $hs.modules.GHCziTypes.hs_ZMZN];
                    return $res;
                case 2:
                    var hs_b26CI49 = hs_wild126CIrm.data[0];
                    var hs_xs26CI4d = hs_wild126CIrm.data[1];
                    var hs_sat26CIrn = new $hs.Thunk();
                    hs_sat26CIrn.evaluateOnce = function () {
                        return hs_cmp26CI2w.hscall(hs_a26CI48, hs_b26CI49);
                    };
                    var hs_wild226CIro = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqOrdering, hs_sat26CIrn, $hs.modules.GHCziOrdering.hs_GT);
                    switch (hs_wild226CIro.tag) {
                    case 1:
                        var hs_sat26CIrp = new $hs.Func(1);
                        hs_sat26CIrp.evaluate = function (hs_eta1cW6l3) {
                            var $res = new $hs.Data(2);
                            $res.data = [hs_a26CI48, hs_eta1cW6l3];
                            return $res;
                        };
                        return hs_ascending26CI3B.hscall(hs_b26CI49, hs_sat26CIrp, hs_xs26CI4d);
                    case 2:
                        var hs_sat26CIrl = new $hs.Data(2);
                        hs_sat26CIrl.data = [hs_a26CI48, $hs.modules.GHCziTypes.hs_ZMZN];
                        return hs_descending26CI3V.hscall(hs_b26CI49, hs_sat26CIrl, hs_xs26CI4d);
                    }
                }
            }
        };
        var hs_mergeAll26CI30 = new $hs.Func(1);
        hs_mergeAll26CI30.evaluate = function (hs_ds26CI2Y) {
            var hs_wild26CI39 = hs_ds26CI2Y;
            if (hs_ds26CI2Y.notEvaluated) {
                hs_wild26CI39 = hs_ds26CI2Y.hscall();
            }
            switch (hs_wild26CI39.tag) {
            case 1:
                var hs_sat26CIrk = new $hs.Thunk();
                hs_sat26CIrk.evaluateOnce = function () {
                    return hs_mergePairs26CI2U.hscall($hs.modules.GHCziTypes.hs_ZMZN);
                };
                return hs_mergeAll26CI30.hscall(hs_sat26CIrk);
            case 2:
                var hs_x26CI36 = hs_wild26CI39.data[0];
                var hs_ds126CI34 = hs_wild26CI39.data[1];
                var hs_wild126CIrj = hs_ds126CI34;
                if (hs_ds126CI34.notEvaluated) {
                    hs_wild126CIrj = hs_ds126CI34.hscall();
                }
                switch (hs_wild126CIrj.tag) {
                case 1:
                    if (hs_x26CI36.notEvaluated) {
                        return hs_x26CI36.hscall();
                    } else {
                        return hs_x26CI36;
                    }
                case 2:
                    var hs_sat26CIrg = new $hs.Thunk();
                    hs_sat26CIrg.evaluateOnce = function () {
                        return hs_mergePairs26CI2U.hscall(hs_wild26CI39);
                    };
                    return hs_mergeAll26CI30.hscall(hs_sat26CIrg);
                }
            }
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_mergeAll26CI30, hs_sequences26CI3n);
    };
    this.hs_sort.evaluate = function (hs_zddOrd26CI4g) {
        var hs_sat26CIrO = new $hs.Thunk();
        hs_sat26CIrO.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd26CI4g);
        };
        return $hs.modules.DataziList.hs_sortBy.hscall(hs_sat26CIrO);
    };
    this.hs_permutations.evaluate = function (hs_xs026CI4j) {
        var hs_sat26CIrP = new $hs.Thunk();
        hs_sat26CIrP.evaluateOnce = function () {
            var hs_perms26CI5a = new $hs.Func(2);
            hs_perms26CI5a.evaluate = function (hs_ds26CI4n, hs_ds126CI59) {
                var hs_wild26CIrR = hs_ds26CI4n;
                if (hs_ds26CI4n.notEvaluated) {
                    hs_wild26CIrR = hs_ds26CI4n.hscall();
                }
                switch (hs_wild26CIrR.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_t26CI4Q = hs_wild26CIrR.data[0];
                    var hs_ts26CI4x = hs_wild26CIrR.data[1];
                    var hs_interleavezq26CI4F = new $hs.Func(3);
                    hs_interleavezq26CI4F.evaluate = function (hs_ds226CI4C, hs_ds326CI4v, hs_r26CI4y) {
                        var hs_wild126CIrY = hs_ds326CI4v;
                        if (hs_ds326CI4v.notEvaluated) {
                            hs_wild126CIrY = hs_ds326CI4v.hscall();
                        }
                        switch (hs_wild126CIrY.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [hs_ts26CI4x, hs_r26CI4y];
                            return $res;
                        case 2:
                            var hs_y26CI4D = hs_wild126CIrY.data[0];
                            var hs_ys26CI4H = hs_wild126CIrY.data[1];
                            var hs_ds426CI4I = new $hs.Thunk();
                            hs_ds426CI4I.evaluateOnce = function () {
                                var hs_sat26CIs8 = new $hs.Thunk();
                                hs_sat26CIs8.evaluateOnce = function () {
                                    var hs_sat26CIs9 = new $hs.Func(1);
                                    hs_sat26CIs9.evaluate = function (hs_eta1cW6l3) {
                                        var $res = new $hs.Data(2);
                                        $res.data = [hs_y26CI4D, hs_eta1cW6l3];
                                        return $res;
                                    };
                                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_ds226CI4C, hs_sat26CIs9);
                                };
                                return hs_interleavezq26CI4F.hscall(hs_sat26CIs8, hs_ys26CI4H, hs_r26CI4y);
                            };
                            var hs_us26CI4O = new $hs.Thunk();
                            hs_us26CI4O.evaluateOnce = function () {
                                var hs_wild226CIs7 = hs_ds426CI4I;
                                if (hs_ds426CI4I.notEvaluated) {
                                    hs_wild226CIs7 = hs_ds426CI4I.hscall();
                                }
                                var hs_us126CI4N = hs_wild226CIs7.data[0];
                                if (hs_us126CI4N.notEvaluated) {
                                    return hs_us126CI4N.hscall();
                                } else {
                                    return hs_us126CI4N;
                                }
                            };
                            var hs_sat26CIrZ = new $hs.Thunk();
                            hs_sat26CIrZ.evaluateOnce = function () {
                                var hs_wild226CIs5 = hs_ds426CI4I;
                                if (hs_ds426CI4I.notEvaluated) {
                                    hs_wild226CIs5 = hs_ds426CI4I.hscall();
                                }
                                var hs_zzs26CI4X = hs_wild226CIs5.data[1];
                                if (hs_zzs26CI4X.notEvaluated) {
                                    return hs_zzs26CI4X.hscall();
                                } else {
                                    return hs_zzs26CI4X;
                                }
                            };
                            var hs_sat26CIs0 = new $hs.Thunk();
                            hs_sat26CIs0.evaluateOnce = function () {
                                var hs_sat26CIs3 = new $hs.Data(2);
                                hs_sat26CIs3.data = [hs_y26CI4D, hs_us26CI4O];
                                var hs_sat26CIs2 = new $hs.Data(2);
                                hs_sat26CIs2.data = [hs_t26CI4Q, hs_sat26CIs3];
                                return hs_ds226CI4C.hscall(hs_sat26CIs2);
                            };
                            var hs_sat26CIs1 = new $hs.Data(2);
                            hs_sat26CIs1.data = [hs_sat26CIs0, hs_sat26CIrZ];
                            var hs_sat26CIrX = new $hs.Data(2);
                            hs_sat26CIrX.data = [hs_y26CI4D, hs_us26CI4O];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_sat26CIrX, hs_sat26CIs1];
                            return $res;
                        }
                    };
                    var hs_sat26CIrS = new $hs.Thunk();
                    hs_sat26CIrS.evaluateOnce = function () {
                        return $hs.modules.DataziList.hs_permutations.hscall(hs_ds126CI59);
                    };
                    var hs_sat26CIrT = new $hs.Thunk();
                    hs_sat26CIrT.evaluateOnce = function () {
                        var hs_sat26CIrW = new $hs.Data(2);
                        hs_sat26CIrW.data = [hs_t26CI4Q, hs_ds126CI59];
                        return hs_perms26CI5a.hscall(hs_ts26CI4x, hs_sat26CIrW);
                    };
                    var hs_sat26CIrQ = new $hs.Func(2);
                    hs_sat26CIrQ.evaluate = function (hs_xs26CI52, hs_r26CI53) {
                        var hs_wild126CIrV = hs_interleavezq26CI4F.hscall($hs.modules.GHCziBase.hs_id, hs_xs26CI52, hs_r26CI53);
                        var hs_zzs26CI57 = hs_wild126CIrV.data[1];
                        if (hs_zzs26CI57.notEvaluated) {
                            return hs_zzs26CI57.hscall();
                        } else {
                            return hs_zzs26CI57;
                        }
                    };
                    return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26CIrQ, hs_sat26CIrT, hs_sat26CIrS);
                }
            };
            return hs_perms26CI5a.hscall(hs_xs026CI4j, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        var $res = new $hs.Data(2);
        $res.data = [hs_xs026CI4j, hs_sat26CIrP];
        return $res;
    };
    hs_nonEmptySubsequences25sUXd.evaluate = function (hs_ds26CI5g) {
        var hs_wild26CIsb = hs_ds26CI5g;
        if (hs_ds26CI5g.notEvaluated) {
            hs_wild26CIsb = hs_ds26CI5g.hscall();
        }
        switch (hs_wild26CIsb.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_x26CI5k = hs_wild26CIsb.data[0];
            var hs_xs26CI5t = hs_wild26CIsb.data[1];
            var hs_sat26CIsc = new $hs.Thunk();
            hs_sat26CIsc.evaluateOnce = function () {
                var hs_sat26CIse = new $hs.Thunk();
                hs_sat26CIse.evaluateOnce = function () {
                    return hs_nonEmptySubsequences25sUXd.hscall(hs_xs26CI5t);
                };
                var hs_sat26CIsd = new $hs.Func(2);
                hs_sat26CIsd.evaluate = function (hs_ys26CI5o, hs_r26CI5q) {
                    var hs_sat26CIsg = new $hs.Data(2);
                    hs_sat26CIsg.data = [hs_x26CI5k, hs_ys26CI5o];
                    var hs_sat26CIsf = new $hs.Data(2);
                    hs_sat26CIsf.data = [hs_sat26CIsg, hs_r26CI5q];
                    var $res = new $hs.Data(2);
                    $res.data = [hs_ys26CI5o, hs_sat26CIsf];
                    return $res;
                };
                return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26CIsd, $hs.modules.GHCziTypes.hs_ZMZN, hs_sat26CIse);
            };
            var hs_sat26CIsa = new $hs.Data(2);
            hs_sat26CIsa.data = [hs_x26CI5k, $hs.modules.GHCziTypes.hs_ZMZN];
            var $res = new $hs.Data(2);
            $res.data = [hs_sat26CIsa, hs_sat26CIsc];
            return $res;
        }
    };
    this.hs_subsequences.evaluate = function (hs_xs26CI5x) {
        var hs_sat26CIsh = new $hs.Thunk();
        hs_sat26CIsh.evaluateOnce = function () {
            return hs_nonEmptySubsequences25sUXd.hscall(hs_xs26CI5x);
        };
        var $res = new $hs.Data(2);
        $res.data = [$hs.modules.GHCziTypes.hs_ZMZN, hs_sat26CIsh];
        return $res;
    };
    this.hs_tails.evaluate = function (hs_xs26CI5A) {
        var hs_sat26CIsi = new $hs.Thunk();
        hs_sat26CIsi.evaluateOnce = function () {
            var hs_wild26CIsk = hs_xs26CI5A;
            if (hs_xs26CI5A.notEvaluated) {
                hs_wild26CIsk = hs_xs26CI5A.hscall();
            }
            switch (hs_wild26CIsk.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_xszq26CI5E = hs_wild26CIsk.data[1];
                return $hs.modules.DataziList.hs_tails.hscall(hs_xszq26CI5E);
            }
        };
        var $res = new $hs.Data(2);
        $res.data = [hs_xs26CI5A, hs_sat26CIsi];
        return $res;
    };
    this.hs_inits.evaluate = function (hs_xs26CI5H) {
        var hs_sat26CIsl = new $hs.Thunk();
        hs_sat26CIsl.evaluateOnce = function () {
            var hs_wild26CIsn = hs_xs26CI5H;
            if (hs_xs26CI5H.notEvaluated) {
                hs_wild26CIsn = hs_xs26CI5H.hscall();
            }
            switch (hs_wild26CIsn.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_x26CI5L = hs_wild26CIsn.data[0];
                var hs_xszq26CI5N = hs_wild26CIsn.data[1];
                var hs_sat26CIso = new $hs.Thunk();
                hs_sat26CIso.evaluateOnce = function () {
                    return $hs.modules.DataziList.hs_inits.hscall(hs_xszq26CI5N);
                };
                var hs_sat26CIsm = new $hs.Func(1);
                hs_sat26CIsm.evaluate = function (hs_eta1cW6l3) {
                    var $res = new $hs.Data(2);
                    $res.data = [hs_x26CI5L, hs_eta1cW6l3];
                    return $res;
                };
                return $hs.modules.GHCziBase.hs_map.hscall(hs_sat26CIsm, hs_sat26CIso);
            }
        };
        var $res = new $hs.Data(2);
        $res.data = [$hs.modules.GHCziTypes.hs_ZMZN, hs_sat26CIsl];
        return $res;
    };
    this.hs_groupBy.evaluate = function (hs_ds26CI5Y, hs_ds126CI5S) {
        var hs_wild26CIsq = hs_ds126CI5S;
        if (hs_ds126CI5S.notEvaluated) {
            hs_wild26CIsq = hs_ds126CI5S.hscall();
        }
        switch (hs_wild26CIsq.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_x26CI5X = hs_wild26CIsq.data[0];
            var hs_xs26CI60 = hs_wild26CIsq.data[1];
            var hs_ds226CI61 = new $hs.Thunk();
            hs_ds226CI61.evaluateOnce = function () {
                var hs_sat26CIsy = new $hs.Thunk();
                hs_sat26CIsy.evaluateOnce = function () {
                    return hs_ds26CI5Y.hscall(hs_x26CI5X);
                };
                return $hs.modules.GHCziList.hs_span.hscall(hs_sat26CIsy, hs_xs26CI60);
            };
            var hs_sat26CIsr = new $hs.Thunk();
            hs_sat26CIsr.evaluateOnce = function () {
                var hs_sat26CIsv = new $hs.Thunk();
                hs_sat26CIsv.evaluateOnce = function () {
                    var hs_wild126CIsx = hs_ds226CI61;
                    if (hs_ds226CI61.notEvaluated) {
                        hs_wild126CIsx = hs_ds226CI61.hscall();
                    }
                    var hs_zzs26CI6b = hs_wild126CIsx.data[1];
                    if (hs_zzs26CI6b.notEvaluated) {
                        return hs_zzs26CI6b.hscall();
                    } else {
                        return hs_zzs26CI6b;
                    }
                };
                return $hs.modules.DataziList.hs_groupBy.hscall(hs_ds26CI5Y, hs_sat26CIsv);
            };
            var hs_sat26CIss = new $hs.Thunk();
            hs_sat26CIss.evaluateOnce = function () {
                var hs_wild126CIsu = hs_ds226CI61;
                if (hs_ds226CI61.notEvaluated) {
                    hs_wild126CIsu = hs_ds226CI61.hscall();
                }
                var hs_ys26CI65 = hs_wild126CIsu.data[0];
                if (hs_ys26CI65.notEvaluated) {
                    return hs_ys26CI65.hscall();
                } else {
                    return hs_ys26CI65;
                }
            };
            var hs_sat26CIsp = new $hs.Data(2);
            hs_sat26CIsp.data = [hs_x26CI5X, hs_sat26CIss];
            var $res = new $hs.Data(2);
            $res.data = [hs_sat26CIsp, hs_sat26CIsr];
            return $res;
        }
    };
    this.hs_group.evaluate = function (hs_zddEq26CI6g, hs_eta26CI6i) {
        var hs_sat26CIsz = new $hs.Thunk();
        hs_sat26CIsz.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26CI6g);
        };
        return $hs.modules.DataziList.hs_groupBy.hscall(hs_sat26CIsz, hs_eta26CI6i);
    };
    this.hs_unzzip7.evaluateOnce = function () {
        var hs_sat26CIsB = new $hs.Data(1);
        hs_sat26CIsB.data = [$hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26CIsA = new $hs.Func(2);
        hs_sat26CIsA.evaluate = function (hs_ds26CI6l, hs_ds126CI6v) {
            var hs_wild26CIsD = hs_ds26CI6l;
            if (hs_ds26CI6l.notEvaluated) {
                hs_wild26CIsD = hs_ds26CI6l.hscall();
            }
            var hs_a26CI6u = hs_wild26CIsD.data[0];
            var hs_b26CI6H = hs_wild26CIsD.data[1];
            var hs_c26CI6T = hs_wild26CIsD.data[2];
            var hs_d26CI75 = hs_wild26CIsD.data[3];
            var hs_e26CI7h = hs_wild26CIsD.data[4];
            var hs_f26CI7t = hs_wild26CIsD.data[5];
            var hs_g26CI7F = hs_wild26CIsD.data[6];
            var hs_sat26CIsE = new $hs.Thunk();
            hs_sat26CIsE.evaluateOnce = function () {
                var hs_wild126CItD = hs_ds126CI6v;
                if (hs_ds126CI6v.notEvaluated) {
                    hs_wild126CItD = hs_ds126CI6v.hscall();
                }
                var hs_gs26CI7O = hs_wild126CItD.data[6];
                if (hs_gs26CI7O.notEvaluated) {
                    return hs_gs26CI7O.hscall();
                } else {
                    return hs_gs26CI7O;
                }
            };
            var hs_sat26CIsF = new $hs.Data(2);
            hs_sat26CIsF.data = [hs_g26CI7F, hs_sat26CIsE];
            var hs_sat26CIsG = new $hs.Thunk();
            hs_sat26CIsG.evaluateOnce = function () {
                var hs_wild126CItw = hs_ds126CI6v;
                if (hs_ds126CI6v.notEvaluated) {
                    hs_wild126CItw = hs_ds126CI6v.hscall();
                }
                var hs_fs26CI7C = hs_wild126CItw.data[5];
                if (hs_fs26CI7C.notEvaluated) {
                    return hs_fs26CI7C.hscall();
                } else {
                    return hs_fs26CI7C;
                }
            };
            var hs_sat26CIsH = new $hs.Data(2);
            hs_sat26CIsH.data = [hs_f26CI7t, hs_sat26CIsG];
            var hs_sat26CIsI = new $hs.Thunk();
            hs_sat26CIsI.evaluateOnce = function () {
                var hs_wild126CItp = hs_ds126CI6v;
                if (hs_ds126CI6v.notEvaluated) {
                    hs_wild126CItp = hs_ds126CI6v.hscall();
                }
                var hs_es26CI7q = hs_wild126CItp.data[4];
                if (hs_es26CI7q.notEvaluated) {
                    return hs_es26CI7q.hscall();
                } else {
                    return hs_es26CI7q;
                }
            };
            var hs_sat26CIsJ = new $hs.Data(2);
            hs_sat26CIsJ.data = [hs_e26CI7h, hs_sat26CIsI];
            var hs_sat26CIsK = new $hs.Thunk();
            hs_sat26CIsK.evaluateOnce = function () {
                var hs_wild126CIti = hs_ds126CI6v;
                if (hs_ds126CI6v.notEvaluated) {
                    hs_wild126CIti = hs_ds126CI6v.hscall();
                }
                var hs_ds226CI7e = hs_wild126CIti.data[3];
                if (hs_ds226CI7e.notEvaluated) {
                    return hs_ds226CI7e.hscall();
                } else {
                    return hs_ds226CI7e;
                }
            };
            var hs_sat26CIsL = new $hs.Data(2);
            hs_sat26CIsL.data = [hs_d26CI75, hs_sat26CIsK];
            var hs_sat26CIsM = new $hs.Thunk();
            hs_sat26CIsM.evaluateOnce = function () {
                var hs_wild126CItb = hs_ds126CI6v;
                if (hs_ds126CI6v.notEvaluated) {
                    hs_wild126CItb = hs_ds126CI6v.hscall();
                }
                var hs_cs26CI72 = hs_wild126CItb.data[2];
                if (hs_cs26CI72.notEvaluated) {
                    return hs_cs26CI72.hscall();
                } else {
                    return hs_cs26CI72;
                }
            };
            var hs_sat26CIsN = new $hs.Data(2);
            hs_sat26CIsN.data = [hs_c26CI6T, hs_sat26CIsM];
            var hs_sat26CIsO = new $hs.Thunk();
            hs_sat26CIsO.evaluateOnce = function () {
                var hs_wild126CIt4 = hs_ds126CI6v;
                if (hs_ds126CI6v.notEvaluated) {
                    hs_wild126CIt4 = hs_ds126CI6v.hscall();
                }
                var hs_bs26CI6Q = hs_wild126CIt4.data[1];
                if (hs_bs26CI6Q.notEvaluated) {
                    return hs_bs26CI6Q.hscall();
                } else {
                    return hs_bs26CI6Q;
                }
            };
            var hs_sat26CIsP = new $hs.Data(2);
            hs_sat26CIsP.data = [hs_b26CI6H, hs_sat26CIsO];
            var hs_sat26CIsQ = new $hs.Thunk();
            hs_sat26CIsQ.evaluateOnce = function () {
                var hs_wild126CIsX = hs_ds126CI6v;
                if (hs_ds126CI6v.notEvaluated) {
                    hs_wild126CIsX = hs_ds126CI6v.hscall();
                }
                var hs_as26CI6E = hs_wild126CIsX.data[0];
                if (hs_as26CI6E.notEvaluated) {
                    return hs_as26CI6E.hscall();
                } else {
                    return hs_as26CI6E;
                }
            };
            var hs_sat26CIsC = new $hs.Data(2);
            hs_sat26CIsC.data = [hs_a26CI6u, hs_sat26CIsQ];
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26CIsC, hs_sat26CIsP, hs_sat26CIsN, hs_sat26CIsL, hs_sat26CIsJ, hs_sat26CIsH, hs_sat26CIsF];
            return $res;
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26CIsA, hs_sat26CIsB);
    };
    this.hs_unzzip6.evaluateOnce = function () {
        var hs_sat26CItF = new $hs.Data(1);
        hs_sat26CItF.data = [$hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26CItE = new $hs.Func(2);
        hs_sat26CItE.evaluate = function (hs_ds26CI7V, hs_ds126CI84) {
            var hs_wild26CItH = hs_ds26CI7V;
            if (hs_ds26CI7V.notEvaluated) {
                hs_wild26CItH = hs_ds26CI7V.hscall();
            }
            var hs_a26CI83 = hs_wild26CItH.data[0];
            var hs_b26CI8f = hs_wild26CItH.data[1];
            var hs_c26CI8q = hs_wild26CItH.data[2];
            var hs_d26CI8B = hs_wild26CItH.data[3];
            var hs_e26CI8M = hs_wild26CItH.data[4];
            var hs_f26CI8X = hs_wild26CItH.data[5];
            var hs_sat26CItI = new $hs.Thunk();
            hs_sat26CItI.evaluateOnce = function () {
                var hs_wild126CIus = hs_ds126CI84;
                if (hs_ds126CI84.notEvaluated) {
                    hs_wild126CIus = hs_ds126CI84.hscall();
                }
                var hs_fs26CI95 = hs_wild126CIus.data[5];
                if (hs_fs26CI95.notEvaluated) {
                    return hs_fs26CI95.hscall();
                } else {
                    return hs_fs26CI95;
                }
            };
            var hs_sat26CItJ = new $hs.Data(2);
            hs_sat26CItJ.data = [hs_f26CI8X, hs_sat26CItI];
            var hs_sat26CItK = new $hs.Thunk();
            hs_sat26CItK.evaluateOnce = function () {
                var hs_wild126CIum = hs_ds126CI84;
                if (hs_ds126CI84.notEvaluated) {
                    hs_wild126CIum = hs_ds126CI84.hscall();
                }
                var hs_es26CI8U = hs_wild126CIum.data[4];
                if (hs_es26CI8U.notEvaluated) {
                    return hs_es26CI8U.hscall();
                } else {
                    return hs_es26CI8U;
                }
            };
            var hs_sat26CItL = new $hs.Data(2);
            hs_sat26CItL.data = [hs_e26CI8M, hs_sat26CItK];
            var hs_sat26CItM = new $hs.Thunk();
            hs_sat26CItM.evaluateOnce = function () {
                var hs_wild126CIug = hs_ds126CI84;
                if (hs_ds126CI84.notEvaluated) {
                    hs_wild126CIug = hs_ds126CI84.hscall();
                }
                var hs_ds226CI8J = hs_wild126CIug.data[3];
                if (hs_ds226CI8J.notEvaluated) {
                    return hs_ds226CI8J.hscall();
                } else {
                    return hs_ds226CI8J;
                }
            };
            var hs_sat26CItN = new $hs.Data(2);
            hs_sat26CItN.data = [hs_d26CI8B, hs_sat26CItM];
            var hs_sat26CItO = new $hs.Thunk();
            hs_sat26CItO.evaluateOnce = function () {
                var hs_wild126CIua = hs_ds126CI84;
                if (hs_ds126CI84.notEvaluated) {
                    hs_wild126CIua = hs_ds126CI84.hscall();
                }
                var hs_cs26CI8y = hs_wild126CIua.data[2];
                if (hs_cs26CI8y.notEvaluated) {
                    return hs_cs26CI8y.hscall();
                } else {
                    return hs_cs26CI8y;
                }
            };
            var hs_sat26CItP = new $hs.Data(2);
            hs_sat26CItP.data = [hs_c26CI8q, hs_sat26CItO];
            var hs_sat26CItQ = new $hs.Thunk();
            hs_sat26CItQ.evaluateOnce = function () {
                var hs_wild126CIu4 = hs_ds126CI84;
                if (hs_ds126CI84.notEvaluated) {
                    hs_wild126CIu4 = hs_ds126CI84.hscall();
                }
                var hs_bs26CI8n = hs_wild126CIu4.data[1];
                if (hs_bs26CI8n.notEvaluated) {
                    return hs_bs26CI8n.hscall();
                } else {
                    return hs_bs26CI8n;
                }
            };
            var hs_sat26CItR = new $hs.Data(2);
            hs_sat26CItR.data = [hs_b26CI8f, hs_sat26CItQ];
            var hs_sat26CItS = new $hs.Thunk();
            hs_sat26CItS.evaluateOnce = function () {
                var hs_wild126CItY = hs_ds126CI84;
                if (hs_ds126CI84.notEvaluated) {
                    hs_wild126CItY = hs_ds126CI84.hscall();
                }
                var hs_as26CI8c = hs_wild126CItY.data[0];
                if (hs_as26CI8c.notEvaluated) {
                    return hs_as26CI8c.hscall();
                } else {
                    return hs_as26CI8c;
                }
            };
            var hs_sat26CItG = new $hs.Data(2);
            hs_sat26CItG.data = [hs_a26CI83, hs_sat26CItS];
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26CItG, hs_sat26CItR, hs_sat26CItP, hs_sat26CItN, hs_sat26CItL, hs_sat26CItJ];
            return $res;
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26CItE, hs_sat26CItF);
    };
    this.hs_unzzip5.evaluateOnce = function () {
        var hs_sat26CIuu = new $hs.Data(1);
        hs_sat26CIuu.data = [$hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26CIut = new $hs.Func(2);
        hs_sat26CIut.evaluate = function (hs_ds26CI9c, hs_ds126CI9k) {
            var hs_wild26CIuw = hs_ds26CI9c;
            if (hs_ds26CI9c.notEvaluated) {
                hs_wild26CIuw = hs_ds26CI9c.hscall();
            }
            var hs_a26CI9j = hs_wild26CIuw.data[0];
            var hs_b26CI9u = hs_wild26CIuw.data[1];
            var hs_c26CI9E = hs_wild26CIuw.data[2];
            var hs_d26CI9O = hs_wild26CIuw.data[3];
            var hs_e26CI9Y = hs_wild26CIuw.data[4];
            var hs_sat26CIux = new $hs.Thunk();
            hs_sat26CIux.evaluateOnce = function () {
                var hs_wild126CIv4 = hs_ds126CI9k;
                if (hs_ds126CI9k.notEvaluated) {
                    hs_wild126CIv4 = hs_ds126CI9k.hscall();
                }
                var hs_es26CIa5 = hs_wild126CIv4.data[4];
                if (hs_es26CIa5.notEvaluated) {
                    return hs_es26CIa5.hscall();
                } else {
                    return hs_es26CIa5;
                }
            };
            var hs_sat26CIuy = new $hs.Data(2);
            hs_sat26CIuy.data = [hs_e26CI9Y, hs_sat26CIux];
            var hs_sat26CIuz = new $hs.Thunk();
            hs_sat26CIuz.evaluateOnce = function () {
                var hs_wild126CIuZ = hs_ds126CI9k;
                if (hs_ds126CI9k.notEvaluated) {
                    hs_wild126CIuZ = hs_ds126CI9k.hscall();
                }
                var hs_ds226CI9V = hs_wild126CIuZ.data[3];
                if (hs_ds226CI9V.notEvaluated) {
                    return hs_ds226CI9V.hscall();
                } else {
                    return hs_ds226CI9V;
                }
            };
            var hs_sat26CIuA = new $hs.Data(2);
            hs_sat26CIuA.data = [hs_d26CI9O, hs_sat26CIuz];
            var hs_sat26CIuB = new $hs.Thunk();
            hs_sat26CIuB.evaluateOnce = function () {
                var hs_wild126CIuU = hs_ds126CI9k;
                if (hs_ds126CI9k.notEvaluated) {
                    hs_wild126CIuU = hs_ds126CI9k.hscall();
                }
                var hs_cs26CI9L = hs_wild126CIuU.data[2];
                if (hs_cs26CI9L.notEvaluated) {
                    return hs_cs26CI9L.hscall();
                } else {
                    return hs_cs26CI9L;
                }
            };
            var hs_sat26CIuC = new $hs.Data(2);
            hs_sat26CIuC.data = [hs_c26CI9E, hs_sat26CIuB];
            var hs_sat26CIuD = new $hs.Thunk();
            hs_sat26CIuD.evaluateOnce = function () {
                var hs_wild126CIuP = hs_ds126CI9k;
                if (hs_ds126CI9k.notEvaluated) {
                    hs_wild126CIuP = hs_ds126CI9k.hscall();
                }
                var hs_bs26CI9B = hs_wild126CIuP.data[1];
                if (hs_bs26CI9B.notEvaluated) {
                    return hs_bs26CI9B.hscall();
                } else {
                    return hs_bs26CI9B;
                }
            };
            var hs_sat26CIuE = new $hs.Data(2);
            hs_sat26CIuE.data = [hs_b26CI9u, hs_sat26CIuD];
            var hs_sat26CIuF = new $hs.Thunk();
            hs_sat26CIuF.evaluateOnce = function () {
                var hs_wild126CIuK = hs_ds126CI9k;
                if (hs_ds126CI9k.notEvaluated) {
                    hs_wild126CIuK = hs_ds126CI9k.hscall();
                }
                var hs_as26CI9r = hs_wild126CIuK.data[0];
                if (hs_as26CI9r.notEvaluated) {
                    return hs_as26CI9r.hscall();
                } else {
                    return hs_as26CI9r;
                }
            };
            var hs_sat26CIuv = new $hs.Data(2);
            hs_sat26CIuv.data = [hs_a26CI9j, hs_sat26CIuF];
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26CIuv, hs_sat26CIuE, hs_sat26CIuC, hs_sat26CIuA, hs_sat26CIuy];
            return $res;
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26CIut, hs_sat26CIuu);
    };
    this.hs_unzzip4.evaluateOnce = function () {
        var hs_sat26CIv6 = new $hs.Data(1);
        hs_sat26CIv6.data = [$hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26CIv5 = new $hs.Func(2);
        hs_sat26CIv5.evaluate = function (hs_ds26CIac, hs_ds126CIaj) {
            var hs_wild26CIv8 = hs_ds26CIac;
            if (hs_ds26CIac.notEvaluated) {
                hs_wild26CIv8 = hs_ds26CIac.hscall();
            }
            var hs_a26CIai = hs_wild26CIv8.data[0];
            var hs_b26CIas = hs_wild26CIv8.data[1];
            var hs_c26CIaB = hs_wild26CIv8.data[2];
            var hs_d26CIaK = hs_wild26CIv8.data[3];
            var hs_sat26CIv9 = new $hs.Thunk();
            hs_sat26CIv9.evaluateOnce = function () {
                var hs_wild126CIvv = hs_ds126CIaj;
                if (hs_ds126CIaj.notEvaluated) {
                    hs_wild126CIvv = hs_ds126CIaj.hscall();
                }
                var hs_ds226CIaQ = hs_wild126CIvv.data[3];
                if (hs_ds226CIaQ.notEvaluated) {
                    return hs_ds226CIaQ.hscall();
                } else {
                    return hs_ds226CIaQ;
                }
            };
            var hs_sat26CIva = new $hs.Data(2);
            hs_sat26CIva.data = [hs_d26CIaK, hs_sat26CIv9];
            var hs_sat26CIvb = new $hs.Thunk();
            hs_sat26CIvb.evaluateOnce = function () {
                var hs_wild126CIvr = hs_ds126CIaj;
                if (hs_ds126CIaj.notEvaluated) {
                    hs_wild126CIvr = hs_ds126CIaj.hscall();
                }
                var hs_cs26CIaH = hs_wild126CIvr.data[2];
                if (hs_cs26CIaH.notEvaluated) {
                    return hs_cs26CIaH.hscall();
                } else {
                    return hs_cs26CIaH;
                }
            };
            var hs_sat26CIvc = new $hs.Data(2);
            hs_sat26CIvc.data = [hs_c26CIaB, hs_sat26CIvb];
            var hs_sat26CIvd = new $hs.Thunk();
            hs_sat26CIvd.evaluateOnce = function () {
                var hs_wild126CIvn = hs_ds126CIaj;
                if (hs_ds126CIaj.notEvaluated) {
                    hs_wild126CIvn = hs_ds126CIaj.hscall();
                }
                var hs_bs26CIay = hs_wild126CIvn.data[1];
                if (hs_bs26CIay.notEvaluated) {
                    return hs_bs26CIay.hscall();
                } else {
                    return hs_bs26CIay;
                }
            };
            var hs_sat26CIve = new $hs.Data(2);
            hs_sat26CIve.data = [hs_b26CIas, hs_sat26CIvd];
            var hs_sat26CIvf = new $hs.Thunk();
            hs_sat26CIvf.evaluateOnce = function () {
                var hs_wild126CIvj = hs_ds126CIaj;
                if (hs_ds126CIaj.notEvaluated) {
                    hs_wild126CIvj = hs_ds126CIaj.hscall();
                }
                var hs_as26CIap = hs_wild126CIvj.data[0];
                if (hs_as26CIap.notEvaluated) {
                    return hs_as26CIap.hscall();
                } else {
                    return hs_as26CIap;
                }
            };
            var hs_sat26CIv7 = new $hs.Data(2);
            hs_sat26CIv7.data = [hs_a26CIai, hs_sat26CIvf];
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26CIv7, hs_sat26CIve, hs_sat26CIvc, hs_sat26CIva];
            return $res;
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26CIv5, hs_sat26CIv6);
    };
    this.hs_zzipWith7.evaluate = function (hs_zz26CIbC, hs_ds26CIb3, hs_ds126CIb7, hs_ds226CIbb, hs_ds326CIbf, hs_ds426CIbj, hs_ds526CIbn, hs_ds626CIbr) {
        var hs_wild26CIvD = hs_ds26CIb3;
        if (hs_ds26CIb3.notEvaluated) {
            hs_wild26CIvD = hs_ds26CIb3.hscall();
        }
        switch (hs_wild26CIvD.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_a26CIbv = hs_wild26CIvD.data[0];
            var hs_as26CIbE = hs_wild26CIvD.data[1];
            var hs_wild126CIvC = hs_ds126CIb7;
            if (hs_ds126CIb7.notEvaluated) {
                hs_wild126CIvC = hs_ds126CIb7.hscall();
            }
            switch (hs_wild126CIvC.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_b26CIbw = hs_wild126CIvC.data[0];
                var hs_bs26CIbF = hs_wild126CIvC.data[1];
                var hs_wild226CIvB = hs_ds226CIbb;
                if (hs_ds226CIbb.notEvaluated) {
                    hs_wild226CIvB = hs_ds226CIbb.hscall();
                }
                switch (hs_wild226CIvB.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_c26CIbx = hs_wild226CIvB.data[0];
                    var hs_cs26CIbG = hs_wild226CIvB.data[1];
                    var hs_wild326CIvA = hs_ds326CIbf;
                    if (hs_ds326CIbf.notEvaluated) {
                        hs_wild326CIvA = hs_ds326CIbf.hscall();
                    }
                    switch (hs_wild326CIvA.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_d26CIby = hs_wild326CIvA.data[0];
                        var hs_ds726CIbH = hs_wild326CIvA.data[1];
                        var hs_wild426CIvz = hs_ds426CIbj;
                        if (hs_ds426CIbj.notEvaluated) {
                            hs_wild426CIvz = hs_ds426CIbj.hscall();
                        }
                        switch (hs_wild426CIvz.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_e26CIbz = hs_wild426CIvz.data[0];
                            var hs_es26CIbI = hs_wild426CIvz.data[1];
                            var hs_wild526CIvy = hs_ds526CIbn;
                            if (hs_ds526CIbn.notEvaluated) {
                                hs_wild526CIvy = hs_ds526CIbn.hscall();
                            }
                            switch (hs_wild526CIvy.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_f26CIbA = hs_wild526CIvy.data[0];
                                var hs_fs26CIbJ = hs_wild526CIvy.data[1];
                                var hs_wild626CIvx = hs_ds626CIbr;
                                if (hs_ds626CIbr.notEvaluated) {
                                    hs_wild626CIvx = hs_ds626CIbr.hscall();
                                }
                                switch (hs_wild626CIvx.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_g26CIbB = hs_wild626CIvx.data[0];
                                    var hs_gs26CIbK = hs_wild626CIvx.data[1];
                                    var hs_sat26CIvE = new $hs.Thunk();
                                    hs_sat26CIvE.evaluateOnce = function () {
                                        return $hs.modules.DataziList.hs_zzipWith7.hscall(hs_zz26CIbC, hs_as26CIbE, hs_bs26CIbF, hs_cs26CIbG, hs_ds726CIbH, hs_es26CIbI, hs_fs26CIbJ, hs_gs26CIbK);
                                    };
                                    var hs_sat26CIvw = new $hs.Thunk();
                                    hs_sat26CIvw.evaluateOnce = function () {
                                        return hs_zz26CIbC.hscall(hs_a26CIbv, hs_b26CIbw, hs_c26CIbx, hs_d26CIby, hs_e26CIbz, hs_f26CIbA, hs_g26CIbB);
                                    };
                                    var $res = new $hs.Data(2);
                                    $res.data = [hs_sat26CIvw, hs_sat26CIvE];
                                    return $res;
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.hs_zzipWith6.evaluate = function (hs_zz26CIcn, hs_ds26CIbT, hs_ds126CIbX, hs_ds226CIc1, hs_ds326CIc5, hs_ds426CIc9, hs_ds526CIcd) {
        var hs_wild26CIvL = hs_ds26CIbT;
        if (hs_ds26CIbT.notEvaluated) {
            hs_wild26CIvL = hs_ds26CIbT.hscall();
        }
        switch (hs_wild26CIvL.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_a26CIch = hs_wild26CIvL.data[0];
            var hs_as26CIcp = hs_wild26CIvL.data[1];
            var hs_wild126CIvK = hs_ds126CIbX;
            if (hs_ds126CIbX.notEvaluated) {
                hs_wild126CIvK = hs_ds126CIbX.hscall();
            }
            switch (hs_wild126CIvK.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_b26CIci = hs_wild126CIvK.data[0];
                var hs_bs26CIcq = hs_wild126CIvK.data[1];
                var hs_wild226CIvJ = hs_ds226CIc1;
                if (hs_ds226CIc1.notEvaluated) {
                    hs_wild226CIvJ = hs_ds226CIc1.hscall();
                }
                switch (hs_wild226CIvJ.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_c26CIcj = hs_wild226CIvJ.data[0];
                    var hs_cs26CIcr = hs_wild226CIvJ.data[1];
                    var hs_wild326CIvI = hs_ds326CIc5;
                    if (hs_ds326CIc5.notEvaluated) {
                        hs_wild326CIvI = hs_ds326CIc5.hscall();
                    }
                    switch (hs_wild326CIvI.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_d26CIck = hs_wild326CIvI.data[0];
                        var hs_ds626CIcs = hs_wild326CIvI.data[1];
                        var hs_wild426CIvH = hs_ds426CIc9;
                        if (hs_ds426CIc9.notEvaluated) {
                            hs_wild426CIvH = hs_ds426CIc9.hscall();
                        }
                        switch (hs_wild426CIvH.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_e26CIcl = hs_wild426CIvH.data[0];
                            var hs_es26CIct = hs_wild426CIvH.data[1];
                            var hs_wild526CIvG = hs_ds526CIcd;
                            if (hs_ds526CIcd.notEvaluated) {
                                hs_wild526CIvG = hs_ds526CIcd.hscall();
                            }
                            switch (hs_wild526CIvG.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_f26CIcm = hs_wild526CIvG.data[0];
                                var hs_fs26CIcu = hs_wild526CIvG.data[1];
                                var hs_sat26CIvM = new $hs.Thunk();
                                hs_sat26CIvM.evaluateOnce = function () {
                                    return $hs.modules.DataziList.hs_zzipWith6.hscall(hs_zz26CIcn, hs_as26CIcp, hs_bs26CIcq, hs_cs26CIcr, hs_ds626CIcs, hs_es26CIct, hs_fs26CIcu);
                                };
                                var hs_sat26CIvF = new $hs.Thunk();
                                hs_sat26CIvF.evaluateOnce = function () {
                                    return hs_zz26CIcn.hscall(hs_a26CIch, hs_b26CIci, hs_c26CIcj, hs_d26CIck, hs_e26CIcl, hs_f26CIcm);
                                };
                                var $res = new $hs.Data(2);
                                $res.data = [hs_sat26CIvF, hs_sat26CIvM];
                                return $res;
                            }
                        }
                    }
                }
            }
        }
    };
    this.hs_zzipWith5.evaluate = function (hs_zz26CId1, hs_ds26CIcC, hs_ds126CIcG, hs_ds226CIcK, hs_ds326CIcO, hs_ds426CIcS) {
        var hs_wild26CIvS = hs_ds26CIcC;
        if (hs_ds26CIcC.notEvaluated) {
            hs_wild26CIvS = hs_ds26CIcC.hscall();
        }
        switch (hs_wild26CIvS.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_a26CIcW = hs_wild26CIvS.data[0];
            var hs_as26CId3 = hs_wild26CIvS.data[1];
            var hs_wild126CIvR = hs_ds126CIcG;
            if (hs_ds126CIcG.notEvaluated) {
                hs_wild126CIvR = hs_ds126CIcG.hscall();
            }
            switch (hs_wild126CIvR.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_b26CIcX = hs_wild126CIvR.data[0];
                var hs_bs26CId4 = hs_wild126CIvR.data[1];
                var hs_wild226CIvQ = hs_ds226CIcK;
                if (hs_ds226CIcK.notEvaluated) {
                    hs_wild226CIvQ = hs_ds226CIcK.hscall();
                }
                switch (hs_wild226CIvQ.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_c26CIcY = hs_wild226CIvQ.data[0];
                    var hs_cs26CId5 = hs_wild226CIvQ.data[1];
                    var hs_wild326CIvP = hs_ds326CIcO;
                    if (hs_ds326CIcO.notEvaluated) {
                        hs_wild326CIvP = hs_ds326CIcO.hscall();
                    }
                    switch (hs_wild326CIvP.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_d26CIcZ = hs_wild326CIvP.data[0];
                        var hs_ds526CId6 = hs_wild326CIvP.data[1];
                        var hs_wild426CIvO = hs_ds426CIcS;
                        if (hs_ds426CIcS.notEvaluated) {
                            hs_wild426CIvO = hs_ds426CIcS.hscall();
                        }
                        switch (hs_wild426CIvO.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_e26CId0 = hs_wild426CIvO.data[0];
                            var hs_es26CId7 = hs_wild426CIvO.data[1];
                            var hs_sat26CIvT = new $hs.Thunk();
                            hs_sat26CIvT.evaluateOnce = function () {
                                return $hs.modules.DataziList.hs_zzipWith5.hscall(hs_zz26CId1, hs_as26CId3, hs_bs26CId4, hs_cs26CId5, hs_ds526CId6, hs_es26CId7);
                            };
                            var hs_sat26CIvN = new $hs.Thunk();
                            hs_sat26CIvN.evaluateOnce = function () {
                                return hs_zz26CId1.hscall(hs_a26CIcW, hs_b26CIcX, hs_c26CIcY, hs_d26CIcZ, hs_e26CId0);
                            };
                            var $res = new $hs.Data(2);
                            $res.data = [hs_sat26CIvN, hs_sat26CIvT];
                            return $res;
                        }
                    }
                }
            }
        }
    };
    this.hs_zzipWith4.evaluate = function (hs_zz26CIdy, hs_ds26CIde, hs_ds126CIdi, hs_ds226CIdm, hs_ds326CIdq) {
        var hs_wild26CIvY = hs_ds26CIde;
        if (hs_ds26CIde.notEvaluated) {
            hs_wild26CIvY = hs_ds26CIde.hscall();
        }
        switch (hs_wild26CIvY.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_a26CIdu = hs_wild26CIvY.data[0];
            var hs_as26CIdA = hs_wild26CIvY.data[1];
            var hs_wild126CIvX = hs_ds126CIdi;
            if (hs_ds126CIdi.notEvaluated) {
                hs_wild126CIvX = hs_ds126CIdi.hscall();
            }
            switch (hs_wild126CIvX.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_b26CIdv = hs_wild126CIvX.data[0];
                var hs_bs26CIdB = hs_wild126CIvX.data[1];
                var hs_wild226CIvW = hs_ds226CIdm;
                if (hs_ds226CIdm.notEvaluated) {
                    hs_wild226CIvW = hs_ds226CIdm.hscall();
                }
                switch (hs_wild226CIvW.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_c26CIdw = hs_wild226CIvW.data[0];
                    var hs_cs26CIdC = hs_wild226CIvW.data[1];
                    var hs_wild326CIvV = hs_ds326CIdq;
                    if (hs_ds326CIdq.notEvaluated) {
                        hs_wild326CIvV = hs_ds326CIdq.hscall();
                    }
                    switch (hs_wild326CIvV.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_d26CIdx = hs_wild326CIvV.data[0];
                        var hs_ds426CIdD = hs_wild326CIvV.data[1];
                        var hs_sat26CIvZ = new $hs.Thunk();
                        hs_sat26CIvZ.evaluateOnce = function () {
                            return $hs.modules.DataziList.hs_zzipWith4.hscall(hs_zz26CIdy, hs_as26CIdA, hs_bs26CIdB, hs_cs26CIdC, hs_ds426CIdD);
                        };
                        var hs_sat26CIvU = new $hs.Thunk();
                        hs_sat26CIvU.evaluateOnce = function () {
                            return hs_zz26CIdy.hscall(hs_a26CIdu, hs_b26CIdv, hs_c26CIdw, hs_d26CIdx);
                        };
                        var $res = new $hs.Data(2);
                        $res.data = [hs_sat26CIvU, hs_sat26CIvZ];
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
    this.hs_genericIndex.evaluate = function (hs_zddIntegral26CIdJ, hs_eta26CIdP, hs_eta126CIdV) {
        var hs_zddReal26CIdK = new $hs.Thunk();
        hs_zddReal26CIdK.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26CIdJ);
        };
        var hs_zddNum26CIdM = new $hs.Thunk();
        hs_zddNum26CIdM.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal26CIdK);
        };
        var hs_zddOrd26CIdO = new $hs.Thunk();
        hs_zddOrd26CIdO.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal26CIdK);
        };
        var hs_wild26CIw0 = hs_eta26CIdP;
        if (hs_eta26CIdP.notEvaluated) {
            hs_wild26CIw0 = hs_eta26CIdP.hscall();
        }
        switch (hs_wild26CIw0.tag) {
        case 1:
            var hs_sat26CIwc = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("List.genericIndex: index too large.\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CIwc);
        case 2:
            var hs_x26CIe7 = hs_wild26CIw0.data[0];
            var hs_ds26CIe3 = hs_wild26CIw0.data[1];
            var hs_sat26CIw1 = new $hs.Thunk();
            hs_sat26CIw1.evaluateOnce = function () {
                var hs_sat26CIwb = new $hs.Thunk();
                hs_sat26CIwb.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26CIdM, hs_sat26CIwb);
            };
            var hs_sat26CIw2 = $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd26CIdO);
            var hs_wild126CIw3 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_sat26CIw2, hs_eta126CIdV, hs_sat26CIw1);
            switch (hs_wild126CIw3.tag) {
            case 1:
                var hs_sat26CIw5 = new $hs.Thunk();
                hs_sat26CIw5.evaluateOnce = function () {
                    var hs_sat26CIwa = new $hs.Thunk();
                    hs_sat26CIwa.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26CIdM, hs_sat26CIwa);
                };
                var hs_wild226CIw6 = $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd26CIdO, hs_eta126CIdV, hs_sat26CIw5);
                switch (hs_wild226CIw6.tag) {
                case 1:
                    var hs_sat26CIw9 = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("List.genericIndex: negative argument.\x00");
                    return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CIw9);
                case 2:
                    var hs_sat26CIw4 = new $hs.Thunk();
                    hs_sat26CIw4.evaluateOnce = function () {
                        var hs_sat26CIw7 = new $hs.Thunk();
                        hs_sat26CIw7.evaluateOnce = function () {
                            var hs_sat26CIw8 = new $hs.Thunk();
                            hs_sat26CIw8.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26CIdM, hs_sat26CIw8);
                        };
                        return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum26CIdM, hs_eta126CIdV, hs_sat26CIw7);
                    };
                    return $hs.modules.DataziList.hs_genericIndex.hscall(hs_zddIntegral26CIdJ, hs_ds26CIe3, hs_sat26CIw4);
                }
            case 2:
                if (hs_x26CIe7.notEvaluated) {
                    return hs_x26CIe7.hscall();
                } else {
                    return hs_x26CIe7;
                }
            }
        }
    };
    this.hs_genericSplitAt.evaluate = function (hs_zddIntegral26CIec, hs_eta26CIeh, hs_eta126CIel) {
        var hs_zddReal26CIed = new $hs.Thunk();
        hs_zddReal26CIed.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26CIec);
        };
        var hs_zddNum26CIef = new $hs.Thunk();
        hs_zddNum26CIef.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal26CIed);
        };
        var hs_sat26CIwd = new $hs.Thunk();
        hs_sat26CIwd.evaluateOnce = function () {
            var hs_sat26CIwr = new $hs.Thunk();
            hs_sat26CIwr.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26CIef, hs_sat26CIwr);
        };
        var hs_sat26CIwe = $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal26CIed);
        var hs_wild26CIwf = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_sat26CIwe, hs_eta26CIeh, hs_sat26CIwd);
        switch (hs_wild26CIwf.tag) {
        case 1:
            var hs_wild126CIwh = hs_eta126CIel;
            if (hs_eta126CIel.notEvaluated) {
                hs_wild126CIwh = hs_eta126CIel.hscall();
            }
            switch (hs_wild126CIwh.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [$hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN];
                return $res;
            case 2:
                var hs_x26CIev = hs_wild126CIwh.data[0];
                var hs_xs26CIet = hs_wild126CIwh.data[1];
                var hs_ds26CIeu = new $hs.Thunk();
                hs_ds26CIeu.evaluateOnce = function () {
                    var hs_sat26CIwo = new $hs.Thunk();
                    hs_sat26CIwo.evaluateOnce = function () {
                        var hs_sat26CIwp = new $hs.Thunk();
                        hs_sat26CIwp.evaluateOnce = function () {
                            var hs_sat26CIwq = new $hs.Thunk();
                            hs_sat26CIwq.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26CIef, hs_sat26CIwq);
                        };
                        return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum26CIef, hs_eta26CIeh, hs_sat26CIwp);
                    };
                    return $hs.modules.DataziList.hs_genericSplitAt.hscall(hs_zddIntegral26CIec, hs_sat26CIwo, hs_xs26CIet);
                };
                var hs_sat26CIwi = new $hs.Thunk();
                hs_sat26CIwi.evaluateOnce = function () {
                    var hs_wild226CIwn = hs_ds26CIeu;
                    if (hs_ds26CIeu.notEvaluated) {
                        hs_wild226CIwn = hs_ds26CIeu.hscall();
                    }
                    var hs_xszqzq26CIeF = hs_wild226CIwn.data[1];
                    if (hs_xszqzq26CIeF.notEvaluated) {
                        return hs_xszqzq26CIeF.hscall();
                    } else {
                        return hs_xszqzq26CIeF;
                    }
                };
                var hs_sat26CIwj = new $hs.Thunk();
                hs_sat26CIwj.evaluateOnce = function () {
                    var hs_wild226CIwl = hs_ds26CIeu;
                    if (hs_ds26CIeu.notEvaluated) {
                        hs_wild226CIwl = hs_ds26CIeu.hscall();
                    }
                    var hs_xszq26CIez = hs_wild226CIwl.data[0];
                    if (hs_xszq26CIez.notEvaluated) {
                        return hs_xszq26CIez.hscall();
                    } else {
                        return hs_xszq26CIez;
                    }
                };
                var hs_sat26CIwg = new $hs.Data(2);
                hs_sat26CIwg.data = [hs_x26CIev, hs_sat26CIwj];
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26CIwg, hs_sat26CIwi];
                return $res;
            }
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [$hs.modules.GHCziTypes.hs_ZMZN, hs_eta126CIel];
            return $res;
        }
    };
    this.hs_genericDrop.evaluate = function (hs_zddIntegral26CIeL, hs_eta26CIeQ, hs_eta126CIeU) {
        var hs_zddReal26CIeM = new $hs.Thunk();
        hs_zddReal26CIeM.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26CIeL);
        };
        var hs_zddNum26CIeO = new $hs.Thunk();
        hs_zddNum26CIeO.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal26CIeM);
        };
        var hs_sat26CIws = new $hs.Thunk();
        hs_sat26CIws.evaluateOnce = function () {
            var hs_sat26CIwA = new $hs.Thunk();
            hs_sat26CIwA.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26CIeO, hs_sat26CIwA);
        };
        var hs_sat26CIwt = $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal26CIeM);
        var hs_wild26CIwu = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_sat26CIwt, hs_eta26CIeQ, hs_sat26CIws);
        switch (hs_wild26CIwu.tag) {
        case 1:
            var hs_wild126CIww = hs_eta126CIeU;
            if (hs_eta126CIeU.notEvaluated) {
                hs_wild126CIww = hs_eta126CIeU.hscall();
            }
            switch (hs_wild126CIww.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_xs26CIf1 = hs_wild126CIww.data[1];
                var hs_sat26CIwv = new $hs.Thunk();
                hs_sat26CIwv.evaluateOnce = function () {
                    var hs_sat26CIwy = new $hs.Thunk();
                    hs_sat26CIwy.evaluateOnce = function () {
                        var hs_sat26CIwz = new $hs.Thunk();
                        hs_sat26CIwz.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26CIeO, hs_sat26CIwz);
                    };
                    return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum26CIeO, hs_eta26CIeQ, hs_sat26CIwy);
                };
                return $hs.modules.DataziList.hs_genericDrop.hscall(hs_zddIntegral26CIeL, hs_sat26CIwv, hs_xs26CIf1);
            }
        case 2:
            if (hs_eta126CIeU.notEvaluated) {
                return hs_eta126CIeU.hscall();
            } else {
                return hs_eta126CIeU;
            }
        }
    };
    this.hs_genericTake.evaluate = function (hs_zddIntegral26CIf6, hs_eta26CIfb, hs_eta126CIff) {
        var hs_zddReal26CIf7 = new $hs.Thunk();
        hs_zddReal26CIf7.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26CIf6);
        };
        var hs_zddNum26CIf9 = new $hs.Thunk();
        hs_zddNum26CIf9.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal26CIf7);
        };
        var hs_sat26CIwB = new $hs.Thunk();
        hs_sat26CIwB.evaluateOnce = function () {
            var hs_sat26CIwJ = new $hs.Thunk();
            hs_sat26CIwJ.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26CIf9, hs_sat26CIwJ);
        };
        var hs_sat26CIwC = $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal26CIf7);
        var hs_wild26CIwD = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_sat26CIwC, hs_eta26CIfb, hs_sat26CIwB);
        switch (hs_wild26CIwD.tag) {
        case 1:
            var hs_wild126CIwF = hs_eta126CIff;
            if (hs_eta126CIff.notEvaluated) {
                hs_wild126CIwF = hs_eta126CIff.hscall();
            }
            switch (hs_wild126CIwF.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_x26CIfj = hs_wild126CIwF.data[0];
                var hs_xs26CIfn = hs_wild126CIwF.data[1];
                var hs_sat26CIwE = new $hs.Thunk();
                hs_sat26CIwE.evaluateOnce = function () {
                    var hs_sat26CIwG = new $hs.Thunk();
                    hs_sat26CIwG.evaluateOnce = function () {
                        var hs_sat26CIwH = new $hs.Thunk();
                        hs_sat26CIwH.evaluateOnce = function () {
                            var hs_sat26CIwI = new $hs.Thunk();
                            hs_sat26CIwI.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26CIf9, hs_sat26CIwI);
                        };
                        return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum26CIf9, hs_eta26CIfb, hs_sat26CIwH);
                    };
                    return $hs.modules.DataziList.hs_genericTake.hscall(hs_zddIntegral26CIf6, hs_sat26CIwG, hs_xs26CIfn);
                };
                var $res = new $hs.Data(2);
                $res.data = [hs_x26CIfj, hs_sat26CIwE];
                return $res;
            }
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    this.hs_genericReplicate.evaluate = function (hs_zddIntegral26CIfs, hs_n26CIft, hs_x26CIfu) {
        var hs_sat26CIwK = new $hs.Thunk();
        hs_sat26CIwK.evaluateOnce = function () {
            return $hs.modules.GHCziList.hs_repeat.hscall(hs_x26CIfu);
        };
        return $hs.modules.DataziList.hs_genericTake.hscall(hs_zddIntegral26CIfs, hs_n26CIft, hs_sat26CIwK);
    };
    hs_strictGenericLength25sUWP.evaluate = function (hs_zddNum26CIfG, hs_l26CIfN) {
        var hs_gl26CIfM = new $hs.Func(2);
        hs_gl26CIfM.evaluate = function (hs_ds26CIfB, hs_a26CIfD) {
            var hs_wild26CIwM = hs_ds26CIfB;
            if (hs_ds26CIfB.notEvaluated) {
                hs_wild26CIwM = hs_ds26CIfB.hscall();
            }
            switch (hs_wild26CIwM.tag) {
            case 1:
                if (hs_a26CIfD.notEvaluated) {
                    return hs_a26CIfD.hscall();
                } else {
                    return hs_a26CIfD;
                }
            case 2:
                var hs_xs26CIfK = hs_wild26CIwM.data[1];
                var hs_sat26CIwO = new $hs.Thunk();
                hs_sat26CIwO.evaluateOnce = function () {
                    var hs_sat26CIwP = new $hs.Thunk();
                    hs_sat26CIwP.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26CIfG, hs_sat26CIwP);
                };
                var hs_azq26CIfL = $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum26CIfG, hs_a26CIfD, hs_sat26CIwO);
                return hs_gl26CIfM.hscall(hs_xs26CIfK, hs_azq26CIfL);
            }
        };
        var hs_sat26CIwL = new $hs.Thunk();
        hs_sat26CIwL.evaluateOnce = function () {
            var hs_sat26CIwQ = new $hs.Thunk();
            hs_sat26CIwQ.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26CIfG, hs_sat26CIwQ);
        };
        return hs_gl26CIfM.hscall(hs_l26CIfN, hs_sat26CIwL);
    };
    this.hs_genericLength.evaluate = function (hs_zddNum26CIfU, hs_ds26CIfS) {
        var hs_wild26CIwS = hs_ds26CIfS;
        if (hs_ds26CIfS.notEvaluated) {
            hs_wild26CIwS = hs_ds26CIfS.hscall();
        }
        switch (hs_wild26CIwS.tag) {
        case 1:
            var hs_sat26CIwW = new $hs.Thunk();
            hs_sat26CIwW.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26CIfU, hs_sat26CIwW);
        case 2:
            var hs_l26CIg0 = hs_wild26CIwS.data[1];
            var hs_sat26CIwU = new $hs.Thunk();
            hs_sat26CIwU.evaluateOnce = function () {
                return $hs.modules.DataziList.hs_genericLength.hscall(hs_zddNum26CIfU, hs_l26CIg0);
            };
            var hs_sat26CIwR = new $hs.Thunk();
            hs_sat26CIwR.evaluateOnce = function () {
                var hs_sat26CIwV = new $hs.Thunk();
                hs_sat26CIwV.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26CIfU, hs_sat26CIwV);
            };
            return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum26CIfU, hs_sat26CIwR, hs_sat26CIwU);
        }
    };
    this.hs_minimumBy.evaluate = function (hs_ds26CIgi, hs_ds126CIg4) {
        var hs_wild26CIg9 = hs_ds126CIg4;
        if (hs_ds126CIg4.notEvaluated) {
            hs_wild26CIg9 = hs_ds126CIg4.hscall();
        }
        switch (hs_wild26CIg9.tag) {
        case 1:
            var hs_sat26CIx3 = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("List.minimumBy: empty list\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CIx3);
        case 2:
            var hs_wild126CIwY = hs_wild26CIg9;
            if (hs_wild26CIg9.notEvaluated) {
                hs_wild126CIwY = hs_wild26CIg9.hscall();
            }
            switch (hs_wild126CIwY.tag) {
            case 1:
                var hs_sat26CIx2 = new $hs.Thunk();
                hs_sat26CIx2.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("foldl1\x00");
                };
                return $hs.modules.GHCziList.hs_errorEmptyList.hscall(hs_sat26CIx2);
            case 2:
                var hs_x26CIgl = hs_wild126CIwY.data[0];
                var hs_xs26CIgm = hs_wild126CIwY.data[1];
                var hs_sat26CIwX = new $hs.Func(2);
                hs_sat26CIwX.evaluate = function (hs_x126CIgg, hs_y26CIgh) {
                    var hs_wild226CIx1 = hs_ds26CIgi.hscall(hs_x126CIgg, hs_y26CIgh);
                    switch (hs_wild226CIx1.tag) {
                    case 3:
                        if (hs_y26CIgh.notEvaluated) {
                            return hs_y26CIgh.hscall();
                        } else {
                            return hs_y26CIgh;
                        }
                    default:
                        if (hs_x126CIgg.notEvaluated) {
                            return hs_x126CIgg.hscall();
                        } else {
                            return hs_x126CIgg;
                        }
                    }
                };
                return $hs.modules.GHCziList.hs_foldl.hscall(hs_sat26CIwX, hs_x26CIgl, hs_xs26CIgm);
            }
        }
    };
    this.hs_maximumBy.evaluate = function (hs_ds26CIgD, hs_ds126CIgp) {
        var hs_wild26CIgu = hs_ds126CIgp;
        if (hs_ds126CIgp.notEvaluated) {
            hs_wild26CIgu = hs_ds126CIgp.hscall();
        }
        switch (hs_wild26CIgu.tag) {
        case 1:
            var hs_sat26CIxa = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("List.maximumBy: empty list\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CIxa);
        case 2:
            var hs_wild126CIx5 = hs_wild26CIgu;
            if (hs_wild26CIgu.notEvaluated) {
                hs_wild126CIx5 = hs_wild26CIgu.hscall();
            }
            switch (hs_wild126CIx5.tag) {
            case 1:
                var hs_sat26CIx9 = new $hs.Thunk();
                hs_sat26CIx9.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("foldl1\x00");
                };
                return $hs.modules.GHCziList.hs_errorEmptyList.hscall(hs_sat26CIx9);
            case 2:
                var hs_x26CIgG = hs_wild126CIx5.data[0];
                var hs_xs26CIgH = hs_wild126CIx5.data[1];
                var hs_sat26CIx4 = new $hs.Func(2);
                hs_sat26CIx4.evaluate = function (hs_x126CIgB, hs_y26CIgC) {
                    var hs_wild226CIx8 = hs_ds26CIgD.hscall(hs_x126CIgB, hs_y26CIgC);
                    switch (hs_wild226CIx8.tag) {
                    case 3:
                        if (hs_x126CIgB.notEvaluated) {
                            return hs_x126CIgB.hscall();
                        } else {
                            return hs_x126CIgB;
                        }
                    default:
                        if (hs_y26CIgC.notEvaluated) {
                            return hs_y26CIgC.hscall();
                        } else {
                            return hs_y26CIgC;
                        }
                    }
                };
                return $hs.modules.GHCziList.hs_foldl.hscall(hs_sat26CIx4, hs_x26CIgG, hs_xs26CIgH);
            }
        }
    };
    hs_strictMinimum25sUWL.evaluate = function (hs_zddOrd26CIgU, hs_ds26CIgK) {
        var hs_wild26CIgP = hs_ds26CIgK;
        if (hs_ds26CIgK.notEvaluated) {
            hs_wild26CIgP = hs_ds26CIgK.hscall();
        }
        switch (hs_wild26CIgP.tag) {
        case 1:
            var hs_sat26CIxg = new $hs.Thunk();
            hs_sat26CIxg.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("minimum\x00");
            };
            return $hs.modules.GHCziList.hs_errorEmptyList.hscall(hs_sat26CIxg);
        case 2:
            var hs_wild126CIxc = hs_wild26CIgP;
            if (hs_wild26CIgP.notEvaluated) {
                hs_wild126CIxc = hs_wild26CIgP.hscall();
            }
            switch (hs_wild126CIxc.tag) {
            case 1:
                var hs_sat26CIxf = new $hs.Thunk();
                hs_sat26CIxf.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("foldl1'\x00");
                };
                return $hs.modules.GHCziList.hs_errorEmptyList.hscall(hs_sat26CIxf);
            case 2:
                var hs_x26CIgW = hs_wild126CIxc.data[0];
                var hs_xs26CIgX = hs_wild126CIxc.data[1];
                var hs_sat26CIxb = new $hs.Thunk();
                hs_sat26CIxb.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_min.hscall(hs_zddOrd26CIgU);
                };
                return $hs.modules.DataziList.hs_foldlzq.hscall(hs_sat26CIxb, hs_x26CIgW, hs_xs26CIgX);
            }
        }
    };
    this.hs_minimum.evaluate = function (hs_zddOrd26CIha, hs_ds26CIh0) {
        var hs_wild26CIh5 = hs_ds26CIh0;
        if (hs_ds26CIh0.notEvaluated) {
            hs_wild26CIh5 = hs_ds26CIh0.hscall();
        }
        switch (hs_wild26CIh5.tag) {
        case 1:
            var hs_sat26CIxm = new $hs.Thunk();
            hs_sat26CIxm.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("minimum\x00");
            };
            return $hs.modules.GHCziList.hs_errorEmptyList.hscall(hs_sat26CIxm);
        case 2:
            var hs_wild126CIxi = hs_wild26CIh5;
            if (hs_wild26CIh5.notEvaluated) {
                hs_wild126CIxi = hs_wild26CIh5.hscall();
            }
            switch (hs_wild126CIxi.tag) {
            case 1:
                var hs_sat26CIxl = new $hs.Thunk();
                hs_sat26CIxl.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("foldl1\x00");
                };
                return $hs.modules.GHCziList.hs_errorEmptyList.hscall(hs_sat26CIxl);
            case 2:
                var hs_x26CIhc = hs_wild126CIxi.data[0];
                var hs_xs26CIhd = hs_wild126CIxi.data[1];
                var hs_sat26CIxh = new $hs.Thunk();
                hs_sat26CIxh.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_min.hscall(hs_zddOrd26CIha);
                };
                return $hs.modules.GHCziList.hs_foldl.hscall(hs_sat26CIxh, hs_x26CIhc, hs_xs26CIhd);
            }
        }
    };
    hs_strictMaximum25sUWJ.evaluate = function (hs_zddOrd26CIhq, hs_ds26CIhg) {
        var hs_wild26CIhl = hs_ds26CIhg;
        if (hs_ds26CIhg.notEvaluated) {
            hs_wild26CIhl = hs_ds26CIhg.hscall();
        }
        switch (hs_wild26CIhl.tag) {
        case 1:
            var hs_sat26CIxs = new $hs.Thunk();
            hs_sat26CIxs.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("maximum\x00");
            };
            return $hs.modules.GHCziList.hs_errorEmptyList.hscall(hs_sat26CIxs);
        case 2:
            var hs_wild126CIxo = hs_wild26CIhl;
            if (hs_wild26CIhl.notEvaluated) {
                hs_wild126CIxo = hs_wild26CIhl.hscall();
            }
            switch (hs_wild126CIxo.tag) {
            case 1:
                var hs_sat26CIxr = new $hs.Thunk();
                hs_sat26CIxr.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("foldl1'\x00");
                };
                return $hs.modules.GHCziList.hs_errorEmptyList.hscall(hs_sat26CIxr);
            case 2:
                var hs_x26CIhs = hs_wild126CIxo.data[0];
                var hs_xs26CIht = hs_wild126CIxo.data[1];
                var hs_sat26CIxn = new $hs.Thunk();
                hs_sat26CIxn.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_max.hscall(hs_zddOrd26CIhq);
                };
                return $hs.modules.DataziList.hs_foldlzq.hscall(hs_sat26CIxn, hs_x26CIhs, hs_xs26CIht);
            }
        }
    };
    this.hs_maximum.evaluate = function (hs_zddOrd26CIhG, hs_ds26CIhw) {
        var hs_wild26CIhB = hs_ds26CIhw;
        if (hs_ds26CIhw.notEvaluated) {
            hs_wild26CIhB = hs_ds26CIhw.hscall();
        }
        switch (hs_wild26CIhB.tag) {
        case 1:
            var hs_sat26CIxy = new $hs.Thunk();
            hs_sat26CIxy.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("maximum\x00");
            };
            return $hs.modules.GHCziList.hs_errorEmptyList.hscall(hs_sat26CIxy);
        case 2:
            var hs_wild126CIxu = hs_wild26CIhB;
            if (hs_wild26CIhB.notEvaluated) {
                hs_wild126CIxu = hs_wild26CIhB.hscall();
            }
            switch (hs_wild126CIxu.tag) {
            case 1:
                var hs_sat26CIxx = new $hs.Thunk();
                hs_sat26CIxx.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("foldl1\x00");
                };
                return $hs.modules.GHCziList.hs_errorEmptyList.hscall(hs_sat26CIxx);
            case 2:
                var hs_x26CIhI = hs_wild126CIxu.data[0];
                var hs_xs26CIhJ = hs_wild126CIxu.data[1];
                var hs_sat26CIxt = new $hs.Thunk();
                hs_sat26CIxt.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_max.hscall(hs_zddOrd26CIhG);
                };
                return $hs.modules.GHCziList.hs_foldl.hscall(hs_sat26CIxt, hs_x26CIhI, hs_xs26CIhJ);
            }
        }
    };
    this.hs_insertBy.evaluate = function (hs_ds26CIhT, hs_x26CIhP, hs_ds126CIhN) {
        var hs_wild26CIhV = hs_ds126CIhN;
        if (hs_ds126CIhN.notEvaluated) {
            hs_wild26CIhV = hs_ds126CIhN.hscall();
        }
        switch (hs_wild26CIhV.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [hs_x26CIhP, $hs.modules.GHCziTypes.hs_ZMZN];
            return $res;
        case 2:
            var hs_y26CIhS = hs_wild26CIhV.data[0];
            var hs_yszq26CIhW = hs_wild26CIhV.data[1];
            var hs_wild126CIxA = hs_ds26CIhT.hscall(hs_x26CIhP, hs_y26CIhS);
            switch (hs_wild126CIxA.tag) {
            case 3:
                var hs_sat26CIxz = new $hs.Thunk();
                hs_sat26CIxz.evaluateOnce = function () {
                    return $hs.modules.DataziList.hs_insertBy.hscall(hs_ds26CIhT, hs_x26CIhP, hs_yszq26CIhW);
                };
                var $res = new $hs.Data(2);
                $res.data = [hs_y26CIhS, hs_sat26CIxz];
                return $res;
            default:
                var $res = new $hs.Data(2);
                $res.data = [hs_x26CIhP, hs_wild26CIhV];
                return $res;
            }
        }
    };
    this.hs_insert.evaluate = function (hs_zddOrd26CIi1, hs_e26CIi3, hs_ls26CIi4) {
        var hs_sat26CIxB = new $hs.Thunk();
        hs_sat26CIxB.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd26CIi1);
        };
        return $hs.modules.DataziList.hs_insertBy.hscall(hs_sat26CIxB, hs_e26CIi3, hs_ls26CIi4);
    };
    this.hs_mapAccumR.evaluate = function (hs_ds26CIie, hs_s26CIia, hs_ds126CIi8) {
        var hs_wild26CIxD = hs_ds126CIi8;
        if (hs_ds126CIi8.notEvaluated) {
            hs_wild26CIxD = hs_ds126CIi8.hscall();
        }
        switch (hs_wild26CIxD.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [hs_s26CIia, $hs.modules.GHCziTypes.hs_ZMZN];
            return $res;
        case 2:
            var hs_x26CIin = hs_wild26CIxD.data[0];
            var hs_xs26CIif = hs_wild26CIxD.data[1];
            var hs_ds226CIig = new $hs.Thunk();
            hs_ds226CIig.evaluateOnce = function () {
                return $hs.modules.DataziList.hs_mapAccumR.hscall(hs_ds26CIie, hs_s26CIia, hs_xs26CIif);
            };
            var hs_ds326CIio = new $hs.Thunk();
            hs_ds326CIio.evaluateOnce = function () {
                var hs_sat26CIxN = new $hs.Thunk();
                hs_sat26CIxN.evaluateOnce = function () {
                    var hs_wild126CIxP = hs_ds226CIig;
                    if (hs_ds226CIig.notEvaluated) {
                        hs_wild126CIxP = hs_ds226CIig.hscall();
                    }
                    var hs_szq26CIil = hs_wild126CIxP.data[0];
                    if (hs_szq26CIil.notEvaluated) {
                        return hs_szq26CIil.hscall();
                    } else {
                        return hs_szq26CIil;
                    }
                };
                return hs_ds26CIie.hscall(hs_sat26CIxN, hs_x26CIin);
            };
            var hs_sat26CIxE = new $hs.Thunk();
            hs_sat26CIxE.evaluateOnce = function () {
                var hs_wild126CIxM = hs_ds226CIig;
                if (hs_ds226CIig.notEvaluated) {
                    hs_wild126CIxM = hs_ds226CIig.hscall();
                }
                var hs_ys26CIiC = hs_wild126CIxM.data[1];
                if (hs_ys26CIiC.notEvaluated) {
                    return hs_ys26CIiC.hscall();
                } else {
                    return hs_ys26CIiC;
                }
            };
            var hs_sat26CIxF = new $hs.Thunk();
            hs_sat26CIxF.evaluateOnce = function () {
                var hs_wild126CIxK = hs_ds326CIio;
                if (hs_ds326CIio.notEvaluated) {
                    hs_wild126CIxK = hs_ds326CIio.hscall();
                }
                var hs_y26CIix = hs_wild126CIxK.data[1];
                if (hs_y26CIix.notEvaluated) {
                    return hs_y26CIix.hscall();
                } else {
                    return hs_y26CIix;
                }
            };
            var hs_sat26CIxG = new $hs.Data(2);
            hs_sat26CIxG.data = [hs_sat26CIxF, hs_sat26CIxE];
            var hs_sat26CIxC = new $hs.Thunk();
            hs_sat26CIxC.evaluateOnce = function () {
                var hs_wild126CIxI = hs_ds326CIio;
                if (hs_ds326CIio.notEvaluated) {
                    hs_wild126CIxI = hs_ds326CIio.hscall();
                }
                var hs_szqzq26CIis = hs_wild126CIxI.data[0];
                if (hs_szqzq26CIis.notEvaluated) {
                    return hs_szqzq26CIis.hscall();
                } else {
                    return hs_szqzq26CIis;
                }
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26CIxC, hs_sat26CIxG];
            return $res;
        }
    };
    this.hs_mapAccumL.evaluate = function (hs_ds26CIiP, hs_s26CIiK, hs_ds126CIiI) {
        var hs_wild26CIxR = hs_ds126CIiI;
        if (hs_ds126CIiI.notEvaluated) {
            hs_wild26CIxR = hs_ds126CIiI.hscall();
        }
        switch (hs_wild26CIxR.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [hs_s26CIiK, $hs.modules.GHCziTypes.hs_ZMZN];
            return $res;
        case 2:
            var hs_x26CIiO = hs_wild26CIxR.data[0];
            var hs_xs26CIiX = hs_wild26CIxR.data[1];
            var hs_ds226CIiQ = new $hs.Thunk();
            hs_ds226CIiQ.evaluateOnce = function () {
                return hs_ds26CIiP.hscall(hs_s26CIiK, hs_x26CIiO);
            };
            var hs_ds326CIiY = new $hs.Thunk();
            hs_ds326CIiY.evaluateOnce = function () {
                var hs_sat26CIy1 = new $hs.Thunk();
                hs_sat26CIy1.evaluateOnce = function () {
                    var hs_wild126CIy3 = hs_ds226CIiQ;
                    if (hs_ds226CIiQ.notEvaluated) {
                        hs_wild126CIy3 = hs_ds226CIiQ.hscall();
                    }
                    var hs_szq26CIiV = hs_wild126CIy3.data[0];
                    if (hs_szq26CIiV.notEvaluated) {
                        return hs_szq26CIiV.hscall();
                    } else {
                        return hs_szq26CIiV;
                    }
                };
                return $hs.modules.DataziList.hs_mapAccumL.hscall(hs_ds26CIiP, hs_sat26CIy1, hs_xs26CIiX);
            };
            var hs_sat26CIxS = new $hs.Thunk();
            hs_sat26CIxS.evaluateOnce = function () {
                var hs_wild126CIy0 = hs_ds326CIiY;
                if (hs_ds326CIiY.notEvaluated) {
                    hs_wild126CIy0 = hs_ds326CIiY.hscall();
                }
                var hs_ys26CIjc = hs_wild126CIy0.data[1];
                if (hs_ys26CIjc.notEvaluated) {
                    return hs_ys26CIjc.hscall();
                } else {
                    return hs_ys26CIjc;
                }
            };
            var hs_sat26CIxT = new $hs.Thunk();
            hs_sat26CIxT.evaluateOnce = function () {
                var hs_wild126CIxY = hs_ds226CIiQ;
                if (hs_ds226CIiQ.notEvaluated) {
                    hs_wild126CIxY = hs_ds226CIiQ.hscall();
                }
                var hs_y26CIj7 = hs_wild126CIxY.data[1];
                if (hs_y26CIj7.notEvaluated) {
                    return hs_y26CIj7.hscall();
                } else {
                    return hs_y26CIj7;
                }
            };
            var hs_sat26CIxU = new $hs.Data(2);
            hs_sat26CIxU.data = [hs_sat26CIxT, hs_sat26CIxS];
            var hs_sat26CIxQ = new $hs.Thunk();
            hs_sat26CIxQ.evaluateOnce = function () {
                var hs_wild126CIxW = hs_ds326CIiY;
                if (hs_ds326CIiY.notEvaluated) {
                    hs_wild126CIxW = hs_ds326CIiY.hscall();
                }
                var hs_szqzq26CIj2 = hs_wild126CIxW.data[0];
                if (hs_szqzq26CIj2.notEvaluated) {
                    return hs_szqzq26CIj2.hscall();
                } else {
                    return hs_szqzq26CIj2;
                }
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26CIxQ, hs_sat26CIxU];
            return $res;
        }
    };
    hs_select25sUWD.evaluate = function (hs_p26CIjj, hs_x26CIji, hs_ds26CIjl) {
        var hs_wild26CIy5 = hs_p26CIjj.hscall(hs_x26CIji);
        switch (hs_wild26CIy5.tag) {
        case 1:
            var hs_sat26CIyd = new $hs.Thunk();
            hs_sat26CIyd.evaluateOnce = function () {
                var hs_wild126CIyi = hs_ds26CIjl;
                if (hs_ds26CIjl.notEvaluated) {
                    hs_wild126CIyi = hs_ds26CIjl.hscall();
                }
                var hs_fs26CIju = hs_wild126CIyi.data[1];
                if (hs_fs26CIju.notEvaluated) {
                    return hs_fs26CIju.hscall();
                } else {
                    return hs_fs26CIju;
                }
            };
            var hs_sat26CIye = new $hs.Data(2);
            hs_sat26CIye.data = [hs_x26CIji, hs_sat26CIyd];
            var hs_sat26CIyc = new $hs.Thunk();
            hs_sat26CIyc.evaluateOnce = function () {
                var hs_wild126CIyg = hs_ds26CIjl;
                if (hs_ds26CIjl.notEvaluated) {
                    hs_wild126CIyg = hs_ds26CIjl.hscall();
                }
                var hs_ts26CIjp = hs_wild126CIyg.data[0];
                if (hs_ts26CIjp.notEvaluated) {
                    return hs_ts26CIjp.hscall();
                } else {
                    return hs_ts26CIjp;
                }
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26CIyc, hs_sat26CIye];
            return $res;
        case 2:
            var hs_sat26CIy6 = new $hs.Thunk();
            hs_sat26CIy6.evaluateOnce = function () {
                var hs_wild126CIyb = hs_ds26CIjl;
                if (hs_ds26CIjl.notEvaluated) {
                    hs_wild126CIyb = hs_ds26CIjl.hscall();
                }
                var hs_fs26CIjG = hs_wild126CIyb.data[1];
                if (hs_fs26CIjG.notEvaluated) {
                    return hs_fs26CIjG.hscall();
                } else {
                    return hs_fs26CIjG;
                }
            };
            var hs_sat26CIy7 = new $hs.Thunk();
            hs_sat26CIy7.evaluateOnce = function () {
                var hs_wild126CIy9 = hs_ds26CIjl;
                if (hs_ds26CIjl.notEvaluated) {
                    hs_wild126CIy9 = hs_ds26CIjl.hscall();
                }
                var hs_ts26CIjA = hs_wild126CIy9.data[0];
                if (hs_ts26CIjA.notEvaluated) {
                    return hs_ts26CIjA.hscall();
                } else {
                    return hs_ts26CIjA;
                }
            };
            var hs_sat26CIy4 = new $hs.Data(2);
            hs_sat26CIy4.data = [hs_x26CIji, hs_sat26CIy7];
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26CIy4, hs_sat26CIy6];
            return $res;
        }
    };
    this.hs_partition.evaluate = function (hs_eta26CIjK, hs_eta126CIjN) {
        var hs_sat26CIyk = new $hs.Data(1);
        hs_sat26CIyk.data = [$hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26CIyj = new $hs.Func(2);
        hs_sat26CIyj.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_select25sUWD.hscall(hs_eta26CIjK, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26CIyj, hs_sat26CIyk, hs_eta126CIjN);
    };
    this.hs_transpose.evaluate = function (hs_ds26CIjP) {
        var hs_wild26CIyn = hs_ds26CIjP;
        if (hs_ds26CIjP.notEvaluated) {
            hs_wild26CIyn = hs_ds26CIjP.hscall();
        }
        switch (hs_wild26CIyn.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_ds126CIjT = hs_wild26CIyn.data[0];
            var hs_xss26CIjV = hs_wild26CIyn.data[1];
            var hs_wild126CIym = hs_ds126CIjT;
            if (hs_ds126CIjT.notEvaluated) {
                hs_wild126CIym = hs_ds126CIjT.hscall();
            }
            switch (hs_wild126CIym.tag) {
            case 1:
                return $hs.modules.DataziList.hs_transpose.hscall(hs_xss26CIjV);
            case 2:
                var hs_x26CIjY = hs_wild126CIym.data[0];
                var hs_xs26CIkf = hs_wild126CIym.data[1];
                var hs_sat26CIyo = new $hs.Thunk();
                hs_sat26CIyo.evaluateOnce = function () {
                    var hs_sat26CIyv = new $hs.Thunk();
                    hs_sat26CIyv.evaluateOnce = function () {
                        var hs_ds226CIkp = new $hs.Func(1);
                        hs_ds226CIkp.evaluate = function (hs_ds326CIki) {
                            var hs_ds426CIyz = hs_ds326CIki;
                            if (hs_ds326CIki.notEvaluated) {
                                hs_ds426CIyz = hs_ds326CIki.hscall();
                            }
                            switch (hs_ds426CIyz.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_ds526CIkm = hs_ds426CIyz.data[0];
                                var hs_ds626CIko = hs_ds426CIyz.data[1];
                                var hs_wild226CIyx = hs_ds526CIkm;
                                if (hs_ds526CIkm.notEvaluated) {
                                    hs_wild226CIyx = hs_ds526CIkm.hscall();
                                }
                                switch (hs_wild226CIyx.tag) {
                                case 1:
                                    return hs_ds226CIkp.hscall(hs_ds626CIko);
                                case 2:
                                    var hs_t26CIks = hs_wild226CIyx.data[1];
                                    var hs_sat26CIyw = new $hs.Thunk();
                                    hs_sat26CIyw.evaluateOnce = function () {
                                        return hs_ds226CIkp.hscall(hs_ds626CIko);
                                    };
                                    var $res = new $hs.Data(2);
                                    $res.data = [hs_t26CIks, hs_sat26CIyw];
                                    return $res;
                                }
                            }
                        };
                        return hs_ds226CIkp.hscall(hs_xss26CIjV);
                    };
                    var hs_sat26CIyu = new $hs.Data(2);
                    hs_sat26CIyu.data = [hs_xs26CIkf, hs_sat26CIyv];
                    return $hs.modules.DataziList.hs_transpose.hscall(hs_sat26CIyu);
                };
                var hs_sat26CIyp = new $hs.Thunk();
                hs_sat26CIyp.evaluateOnce = function () {
                    var hs_ds226CIk8 = new $hs.Func(1);
                    hs_ds226CIk8.evaluate = function (hs_ds326CIk1) {
                        var hs_ds426CIyt = hs_ds326CIk1;
                        if (hs_ds326CIk1.notEvaluated) {
                            hs_ds426CIyt = hs_ds326CIk1.hscall();
                        }
                        switch (hs_ds426CIyt.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_ds526CIk5 = hs_ds426CIyt.data[0];
                            var hs_ds626CIk7 = hs_ds426CIyt.data[1];
                            var hs_wild226CIyr = hs_ds526CIk5;
                            if (hs_ds526CIk5.notEvaluated) {
                                hs_wild226CIyr = hs_ds526CIk5.hscall();
                            }
                            switch (hs_wild226CIyr.tag) {
                            case 1:
                                return hs_ds226CIk8.hscall(hs_ds626CIk7);
                            case 2:
                                var hs_h26CIkb = hs_wild226CIyr.data[0];
                                var hs_sat26CIyq = new $hs.Thunk();
                                hs_sat26CIyq.evaluateOnce = function () {
                                    return hs_ds226CIk8.hscall(hs_ds626CIk7);
                                };
                                var $res = new $hs.Data(2);
                                $res.data = [hs_h26CIkb, hs_sat26CIyq];
                                return $res;
                            }
                        }
                    };
                    return hs_ds226CIk8.hscall(hs_xss26CIjV);
                };
                var hs_sat26CIyl = new $hs.Data(2);
                hs_sat26CIyl.data = [hs_x26CIjY, hs_sat26CIyp];
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26CIyl, hs_sat26CIyo];
                return $res;
            }
        }
    };
    hs_prependToAll25sUWz.evaluate = function (hs_ds26CIkD, hs_ds126CIkz) {
        var hs_wild26CIyB = hs_ds126CIkz;
        if (hs_ds126CIkz.notEvaluated) {
            hs_wild26CIyB = hs_ds126CIkz.hscall();
        }
        switch (hs_wild26CIyB.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_x26CIkE = hs_wild26CIyB.data[0];
            var hs_xs26CIkF = hs_wild26CIyB.data[1];
            var hs_sat26CIyC = new $hs.Thunk();
            hs_sat26CIyC.evaluateOnce = function () {
                return hs_prependToAll25sUWz.hscall(hs_ds26CIkD, hs_xs26CIkF);
            };
            var hs_sat26CIyA = new $hs.Data(2);
            hs_sat26CIyA.data = [hs_x26CIkE, hs_sat26CIyC];
            var $res = new $hs.Data(2);
            $res.data = [hs_ds26CIkD, hs_sat26CIyA];
            return $res;
        }
    };
    this.hs_intersperse.evaluate = function (hs_ds26CIkP, hs_ds126CIkK) {
        var hs_wild26CIyE = hs_ds126CIkK;
        if (hs_ds126CIkK.notEvaluated) {
            hs_wild26CIyE = hs_ds126CIkK.hscall();
        }
        switch (hs_wild26CIyE.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_x26CIkO = hs_wild26CIyE.data[0];
            var hs_xs26CIkQ = hs_wild26CIyE.data[1];
            var hs_sat26CIyD = new $hs.Thunk();
            hs_sat26CIyD.evaluateOnce = function () {
                return hs_prependToAll25sUWz.hscall(hs_ds26CIkP, hs_xs26CIkQ);
            };
            var $res = new $hs.Data(2);
            $res.data = [hs_x26CIkO, hs_sat26CIyD];
            return $res;
        }
    };
    this.hs_intercalate.evaluate = function (hs_xs26CIkU, hs_xss26CIkV) {
        var hs_sat26CIyF = new $hs.Thunk();
        hs_sat26CIyF.evaluateOnce = function () {
            return $hs.modules.DataziList.hs_intersperse.hscall(hs_xs26CIkU, hs_xss26CIkV);
        };
        return $hs.modules.GHCziList.hs_concat.hscall(hs_sat26CIyF);
    };
    this.hs_intersectBy.evaluate = function (hs_ds26CIlf, hs_ds126CIl0, hs_ds226CIl4) {
        var hs_wild26CIlm = hs_ds126CIl0;
        if (hs_ds126CIl0.notEvaluated) {
            hs_wild26CIlm = hs_ds126CIl0.hscall();
        }
        switch (hs_wild26CIlm.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild126CIlh = hs_ds226CIl4;
            if (hs_ds226CIl4.notEvaluated) {
                hs_wild126CIlh = hs_ds226CIl4.hscall();
            }
            switch (hs_wild126CIlh.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_ds326CIlk = new $hs.Func(1);
                hs_ds326CIlk.evaluate = function (hs_ds426CIla) {
                    var hs_ds526CIyH = hs_ds426CIla;
                    if (hs_ds426CIla.notEvaluated) {
                        hs_ds526CIyH = hs_ds426CIla.hscall();
                    }
                    switch (hs_ds526CIyH.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_ds626CIle = hs_ds526CIyH.data[0];
                        var hs_ds726CIlj = hs_ds526CIyH.data[1];
                        var hs_sat26CIyM = new $hs.Thunk();
                        hs_sat26CIyM.evaluateOnce = function () {
                            return hs_ds26CIlf.hscall(hs_ds626CIle);
                        };
                        var hs_wild226CIyN = $hs.modules.GHCziList.hs_any.hscall(hs_sat26CIyM, hs_wild126CIlh);
                        switch (hs_wild226CIyN.tag) {
                        case 1:
                            return hs_ds326CIlk.hscall(hs_ds726CIlj);
                        case 2:
                            var hs_sat26CIyG = new $hs.Thunk();
                            hs_sat26CIyG.evaluateOnce = function () {
                                return hs_ds326CIlk.hscall(hs_ds726CIlj);
                            };
                            var $res = new $hs.Data(2);
                            $res.data = [hs_ds626CIle, hs_sat26CIyG];
                            return $res;
                        }
                    }
                };
                return hs_ds326CIlk.hscall(hs_wild26CIlm);
            }
        }
    };
    this.hs_intersect.evaluate = function (hs_zddEq26CIlq, hs_eta26CIls, hs_eta126CIlt) {
        var hs_sat26CIyO = new $hs.Thunk();
        hs_sat26CIyO.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26CIlq);
        };
        return $hs.modules.DataziList.hs_intersectBy.hscall(hs_sat26CIyO, hs_eta26CIls, hs_eta126CIlt);
    };
    this.hs_deleteBy.evaluate = function (hs_ds26CIlD, hs_ds126CIlB, hs_ds226CIlx) {
        var hs_wild26CIyP = hs_ds226CIlx;
        if (hs_ds226CIlx.notEvaluated) {
            hs_wild26CIyP = hs_ds226CIlx.hscall();
        }
        switch (hs_wild26CIyP.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_y26CIlC = hs_wild26CIyP.data[0];
            var hs_ys26CIlF = hs_wild26CIyP.data[1];
            var hs_wild126CIyQ = hs_ds26CIlD.hscall(hs_ds126CIlB, hs_y26CIlC);
            switch (hs_wild126CIyQ.tag) {
            case 1:
                var hs_sat26CIyR = new $hs.Thunk();
                hs_sat26CIyR.evaluateOnce = function () {
                    return $hs.modules.DataziList.hs_deleteBy.hscall(hs_ds26CIlD, hs_ds126CIlB, hs_ys26CIlF);
                };
                var $res = new $hs.Data(2);
                $res.data = [hs_y26CIlC, hs_sat26CIyR];
                return $res;
            case 2:
                if (hs_ys26CIlF.notEvaluated) {
                    return hs_ys26CIlF.hscall();
                } else {
                    return hs_ys26CIlF;
                }
            }
        }
    };
    this.hs_deleteFirstsBy.evaluate = function (hs_eq26CIlI) {
        var hs_sat26CIyS = new $hs.Thunk();
        hs_sat26CIyS.evaluateOnce = function () {
            var hs_sat26CIyT = new $hs.Func(2);
            hs_sat26CIyT.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
                return $hs.modules.DataziList.hs_deleteBy.hscall(hs_eq26CIlI, hs_eta1cW6l4, hs_eta1cW6l3);
            };
            return $hs.modules.GHCziBase.hs_flip.hscall(hs_sat26CIyT);
        };
        return $hs.modules.GHCziList.hs_foldl.hscall(hs_sat26CIyS);
    };
    this.hs_delete.evaluate = function (hs_zddEq26CIlO, hs_eta26CIlQ, hs_eta126CIlR) {
        var hs_sat26CIyU = new $hs.Thunk();
        hs_sat26CIyU.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26CIlO);
        };
        return $hs.modules.DataziList.hs_deleteBy.hscall(hs_sat26CIyU, hs_eta26CIlQ, hs_eta126CIlR);
    };
    this.hs_zrzr.evaluate = function (hs_zddEq26CIlT) {
        var hs_sat26CIyV = new $hs.Thunk();
        hs_sat26CIyV.evaluateOnce = function () {
            var hs_sat26CIyW = new $hs.Func(2);
            hs_sat26CIyW.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
                return $hs.modules.DataziList.hs_delete.hscall(hs_zddEq26CIlT, hs_eta1cW6l4, hs_eta1cW6l3);
            };
            return $hs.modules.GHCziBase.hs_flip.hscall(hs_sat26CIyW);
        };
        return $hs.modules.GHCziList.hs_foldl.hscall(hs_sat26CIyV);
    };
    hs_elemzuby25sUWq.evaluate = function (hs_ds26CIm5, hs_ds126CIm3, hs_ds226CIlZ) {
        var hs_wild26CIyY = hs_ds226CIlZ;
        if (hs_ds226CIlZ.notEvaluated) {
            hs_wild26CIyY = hs_ds226CIlZ.hscall();
        }
        switch (hs_wild26CIyY.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_x26CIm4 = hs_wild26CIyY.data[0];
            var hs_xs26CIm7 = hs_wild26CIyY.data[1];
            var hs_sat26CIyZ = new $hs.Thunk();
            hs_sat26CIyZ.evaluateOnce = function () {
                return hs_elemzuby25sUWq.hscall(hs_ds26CIm5, hs_ds126CIm3, hs_xs26CIm7);
            };
            var hs_sat26CIyX = new $hs.Thunk();
            hs_sat26CIyX.evaluateOnce = function () {
                return hs_ds26CIm5.hscall(hs_ds126CIm3, hs_x26CIm4);
            };
            return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26CIyX, hs_sat26CIyZ);
        }
    };
    this.hs_nubBy.evaluate = function (hs_eq26CImi, hs_l26CImq) {
        var hs_nubByzq26CImn = new $hs.Func(2);
        hs_nubByzq26CImn.evaluate = function (hs_ds26CIme, hs_ds126CImk) {
            var hs_wild26CIz0 = hs_ds26CIme;
            if (hs_ds26CIme.notEvaluated) {
                hs_wild26CIz0 = hs_ds26CIme.hscall();
            }
            switch (hs_wild26CIz0.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_y26CImj = hs_wild26CIz0.data[0];
                var hs_ys26CImm = hs_wild26CIz0.data[1];
                var hs_wild126CIz1 = hs_elemzuby25sUWq.hscall(hs_eq26CImi, hs_y26CImj, hs_ds126CImk);
                switch (hs_wild126CIz1.tag) {
                case 1:
                    var hs_sat26CIz2 = new $hs.Thunk();
                    hs_sat26CIz2.evaluateOnce = function () {
                        var hs_sat26CIz3 = new $hs.Data(2);
                        hs_sat26CIz3.data = [hs_y26CImj, hs_ds126CImk];
                        return hs_nubByzq26CImn.hscall(hs_ys26CImm, hs_sat26CIz3);
                    };
                    var $res = new $hs.Data(2);
                    $res.data = [hs_y26CImj, hs_sat26CIz2];
                    return $res;
                case 2:
                    return hs_nubByzq26CImn.hscall(hs_ys26CImm, hs_ds126CImk);
                }
            }
        };
        return hs_nubByzq26CImn.hscall(hs_l26CImq, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_unionBy.evaluate = function (hs_eq26CImv, hs_xs26CImu, hs_ys26CImy) {
        var hs_sat26CIz4 = new $hs.Thunk();
        hs_sat26CIz4.evaluateOnce = function () {
            var hs_sat26CIz6 = new $hs.Thunk();
            hs_sat26CIz6.evaluateOnce = function () {
                return $hs.modules.DataziList.hs_nubBy.hscall(hs_eq26CImv, hs_ys26CImy);
            };
            var hs_sat26CIz5 = new $hs.Thunk();
            hs_sat26CIz5.evaluateOnce = function () {
                var hs_sat26CIz7 = new $hs.Func(2);
                hs_sat26CIz7.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
                    return $hs.modules.DataziList.hs_deleteBy.hscall(hs_eq26CImv, hs_eta1cW6l4, hs_eta1cW6l3);
                };
                return $hs.modules.GHCziBase.hs_flip.hscall(hs_sat26CIz7);
            };
            return $hs.modules.GHCziList.hs_foldl.hscall(hs_sat26CIz5, hs_sat26CIz6, hs_xs26CImu);
        };
        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_xs26CImu, hs_sat26CIz4);
    };
    this.hs_union.evaluate = function (hs_zddEq26CImE, hs_eta26CImG, hs_eta126CImH) {
        var hs_sat26CIz8 = new $hs.Thunk();
        hs_sat26CIz8.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26CImE);
        };
        return $hs.modules.DataziList.hs_unionBy.hscall(hs_sat26CIz8, hs_eta26CImG, hs_eta126CImH);
    };
    this.hs_nub.evaluate = function (hs_zddEq26CImR, hs_l26CImZ) {
        var hs_nubzq26CImW = new $hs.Func(2);
        hs_nubzq26CImW.evaluate = function (hs_ds26CImN, hs_ds126CImT) {
            var hs_wild26CIz9 = hs_ds26CImN;
            if (hs_ds26CImN.notEvaluated) {
                hs_wild26CIz9 = hs_ds26CImN.hscall();
            }
            switch (hs_wild26CIz9.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_x26CImS = hs_wild26CIz9.data[0];
                var hs_xs26CImV = hs_wild26CIz9.data[1];
                var hs_wild126CIza = $hs.modules.GHCziList.hs_elem.hscall(hs_zddEq26CImR, hs_x26CImS, hs_ds126CImT);
                switch (hs_wild126CIza.tag) {
                case 1:
                    var hs_sat26CIzb = new $hs.Thunk();
                    hs_sat26CIzb.evaluateOnce = function () {
                        var hs_sat26CIzc = new $hs.Data(2);
                        hs_sat26CIzc.data = [hs_x26CImS, hs_ds126CImT];
                        return hs_nubzq26CImW.hscall(hs_xs26CImV, hs_sat26CIzc);
                    };
                    var $res = new $hs.Data(2);
                    $res.data = [hs_x26CImS, hs_sat26CIzb];
                    return $res;
                case 2:
                    return hs_nubzq26CImW.hscall(hs_xs26CImV, hs_ds126CImT);
                }
            }
        };
        return hs_nubzq26CImW.hscall(hs_l26CImZ, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_isPrefixOf.evaluate = function (hs_zddEq26CInn, hs_ds26CIn7, hs_ds126CInb) {
        var hs_fail26CIn6 = new $hs.Func(1);
        hs_fail26CIn6.evaluate = function (hs_ds226CIn5) {
            return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("/home/titto/cache/haskell/ghc-7.2.1/libraries/base/Data/List.hs:(286,1)-(288,53)|function isPrefixOf\x00");
        };
        var hs_wild26CInf = hs_ds26CIn7;
        if (hs_ds26CIn7.notEvaluated) {
            hs_wild26CInf = hs_ds26CIn7.hscall();
        }
        switch (hs_wild26CInf.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild126CInj = hs_ds126CInb;
            if (hs_ds126CInb.notEvaluated) {
                hs_wild126CInj = hs_ds126CInb.hscall();
            }
            switch (hs_wild126CInj.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild226CIzf = hs_wild26CInf;
                if (hs_wild26CInf.notEvaluated) {
                    hs_wild226CIzf = hs_wild26CInf.hscall();
                }
                switch (hs_wild226CIzf.tag) {
                case 1:
                    return hs_fail26CIn6.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                case 2:
                    var hs_x26CIno = hs_wild226CIzf.data[0];
                    var hs_xs26CInr = hs_wild226CIzf.data[1];
                    var hs_wild326CIze = hs_wild126CInj;
                    if (hs_wild126CInj.notEvaluated) {
                        hs_wild326CIze = hs_wild126CInj.hscall();
                    }
                    switch (hs_wild326CIze.tag) {
                    case 1:
                        return hs_fail26CIn6.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    case 2:
                        var hs_y26CInp = hs_wild326CIze.data[0];
                        var hs_ys26CIns = hs_wild326CIze.data[1];
                        var hs_sat26CIzk = new $hs.Thunk();
                        hs_sat26CIzk.evaluateOnce = function () {
                            return $hs.modules.DataziList.hs_isPrefixOf.hscall(hs_zddEq26CInn, hs_xs26CInr, hs_ys26CIns);
                        };
                        var hs_sat26CIzd = new $hs.Thunk();
                        hs_sat26CIzd.evaluateOnce = function () {
                            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26CInn, hs_x26CIno, hs_y26CInp);
                        };
                        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26CIzd, hs_sat26CIzk);
                    }
                }
            }
        }
    };
    this.hs_isSuffixOf.evaluate = function (hs_zddEq26CInx, hs_x26CIny, hs_y26CInA) {
        var hs_sat26CIzm = new $hs.Thunk();
        hs_sat26CIzm.evaluateOnce = function () {
            return $hs.modules.GHCziList.hs_reverse.hscall(hs_y26CInA);
        };
        var hs_sat26CIzl = new $hs.Thunk();
        hs_sat26CIzl.evaluateOnce = function () {
            return $hs.modules.GHCziList.hs_reverse.hscall(hs_x26CIny);
        };
        return $hs.modules.DataziList.hs_isPrefixOf.hscall(hs_zddEq26CInx, hs_sat26CIzl, hs_sat26CIzm);
    };
    this.hs_isInfixOf.evaluate = function (hs_zddEq26CInF, hs_needle26CInG, hs_haystack26CInI) {
        var hs_sat26CIzo = new $hs.Thunk();
        hs_sat26CIzo.evaluateOnce = function () {
            return $hs.modules.DataziList.hs_tails.hscall(hs_haystack26CInI);
        };
        var hs_sat26CIzn = new $hs.Func(1);
        hs_sat26CIzn.evaluate = function (hs_eta1cW6l3) {
            return $hs.modules.DataziList.hs_isPrefixOf.hscall(hs_zddEq26CInF, hs_needle26CInG, hs_eta1cW6l3);
        };
        return $hs.modules.GHCziList.hs_any.hscall(hs_sat26CIzn, hs_sat26CIzo);
    };
    this.hs_findIndices.evaluate = function (hs_p26CInU, hs_ls26CIo3) {
        var hs_loop26CInX = new $hs.Func(2);
        hs_loop26CInX.evaluate = function (hs_ds26CInW, hs_ds126CInP) {
            var hs_wild26CIzq = hs_ds126CInP;
            if (hs_ds126CInP.notEvaluated) {
                hs_wild26CIzq = hs_ds126CInP.hscall();
            }
            switch (hs_wild26CIzq.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_x26CInT = hs_wild26CIzq.data[0];
                var hs_xs26CInZ = hs_wild26CIzq.data[1];
                var hs_wild126CIzr = hs_p26CInU.hscall(hs_x26CInT);
                switch (hs_wild126CIzr.tag) {
                case 1:
                    var hs_sat26CIzu = ($hs.Int.addCarry(hs_ds26CInW, 1, 0))[0];
                    return hs_loop26CInX.hscall(hs_sat26CIzu, hs_xs26CInZ);
                case 2:
                    var hs_sat26CIzs = new $hs.Thunk();
                    hs_sat26CIzs.evaluateOnce = function () {
                        var hs_sat26CIzt = ($hs.Int.addCarry(hs_ds26CInW, 1, 0))[0];
                        return hs_loop26CInX.hscall(hs_sat26CIzt, hs_xs26CInZ);
                    };
                    var hs_sat26CIzp = new $hs.Data(1);
                    hs_sat26CIzp.data = [hs_ds26CInW];
                    var $res = new $hs.Data(2);
                    $res.data = [hs_sat26CIzp, hs_sat26CIzs];
                    return $res;
                }
            }
        };
        return hs_loop26CInX.hscall(0, hs_ls26CIo3);
    };
    this.hs_findIndex.evaluate = function (hs_p26CIo5) {
        var hs_sat26CIzv = new $hs.Func(1);
        hs_sat26CIzv.evaluate = function (hs_eta1cW6l3) {
            return $hs.modules.DataziList.hs_findIndices.hscall(hs_p26CIo5, hs_eta1cW6l3);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.DataziMaybe.hs_listToMaybe, hs_sat26CIzv);
    };
    this.hs_find.evaluate = function (hs_p26CIo8) {
        var hs_sat26CIzw = new $hs.Thunk();
        hs_sat26CIzw.evaluateOnce = function () {
            return $hs.modules.GHCziList.hs_filter.hscall(hs_p26CIo8);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.DataziMaybe.hs_listToMaybe, hs_sat26CIzw);
    };
    this.hs_elemIndices.evaluate = function (hs_zddEq26CIoc, hs_x26CIod) {
        var hs_sat26CIzx = new $hs.Thunk();
        hs_sat26CIzx.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26CIoc, hs_x26CIod);
        };
        return $hs.modules.DataziList.hs_findIndices.hscall(hs_sat26CIzx);
    };
    this.hs_elemIndex.evaluate = function (hs_zddEq26CIoh, hs_x26CIoi) {
        var hs_sat26CIzz = new $hs.Thunk();
        hs_sat26CIzz.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26CIoh, hs_x26CIoi);
        };
        var hs_sat26CIzy = new $hs.Func(1);
        hs_sat26CIzy.evaluate = function (hs_eta1cW6l3) {
            return $hs.modules.DataziList.hs_findIndices.hscall(hs_sat26CIzz, hs_eta1cW6l3);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.DataziMaybe.hs_listToMaybe, hs_sat26CIzy);
    };
    this.hs_stripPrefix.evaluate = function (hs_zddEq26CIow, hs_ds26CIoo, hs_ys26CIoq) {
        var hs_wild26CIzB = hs_ds26CIoo;
        if (hs_ds26CIoo.notEvaluated) {
            hs_wild26CIzB = hs_ds26CIoo.hscall();
        }
        switch (hs_wild26CIzB.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [hs_ys26CIoq];
            return $res;
        case 2:
            var hs_x26CIox = hs_wild26CIzB.data[0];
            var hs_xs26CIoA = hs_wild26CIzB.data[1];
            var hs_wild126CIzA = hs_ys26CIoq;
            if (hs_ys26CIoq.notEvaluated) {
                hs_wild126CIzA = hs_ys26CIoq.hscall();
            }
            switch (hs_wild126CIzA.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_y26CIoy = hs_wild126CIzA.data[0];
                var hs_ys126CIoB = hs_wild126CIzA.data[1];
                var hs_wild226CIzC = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26CIow, hs_x26CIox, hs_y26CIoy);
                switch (hs_wild226CIzC.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    return $hs.modules.DataziList.hs_stripPrefix.hscall(hs_zddEq26CIow, hs_xs26CIoA, hs_ys126CIoB);
                }
            }
        }
    };
    hs_sum125ujSm.evaluate = function (hs_l26CIoQ) {
        var hs_sumzq26CIoO = new $hs.Func(2);
        hs_sumzq26CIoO.evaluate = function (hs_ds26CIoH, hs_a26CIoJ) {
            var hs_wild26CIzF = hs_ds26CIoH;
            if (hs_ds26CIoH.notEvaluated) {
                hs_wild26CIzF = hs_ds26CIoH.hscall();
            }
            switch (hs_wild26CIzF.tag) {
            case 1:
                if (hs_a26CIoJ.notEvaluated) {
                    return hs_a26CIoJ.hscall();
                } else {
                    return hs_a26CIoJ;
                }
            case 2:
                var hs_x26CIoN = hs_wild26CIzF.data[0];
                var hs_xs26CIoM = hs_wild26CIzF.data[1];
                var hs_sat26CIzE = new $hs.Thunk();
                hs_sat26CIzE.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_a26CIoJ, hs_x26CIoN);
                };
                return hs_sumzq26CIoO.hscall(hs_xs26CIoM, hs_sat26CIzE);
            }
        };
        var hs_sat26CIzD = new $hs.Thunk();
        hs_sat26CIzD.evaluateOnce = function () {
            var hs_sat26CIzG = new $hs.Thunk();
            hs_sat26CIzG.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26CIzG);
        };
        return hs_sumzq26CIoO.hscall(hs_l26CIoQ, hs_sat26CIzD);
    };
    hs_sum225ujSD.evaluate = function (hs_l26CIp7) {
        var hs_sumzq26CIp5 = new $hs.Func(2);
        hs_sumzq26CIp5.evaluate = function (hs_ds26CIoY, hs_a26CIp0) {
            var hs_wild26CIzJ = hs_ds26CIoY;
            if (hs_ds26CIoY.notEvaluated) {
                hs_wild26CIzJ = hs_ds26CIoY.hscall();
            }
            switch (hs_wild26CIzJ.tag) {
            case 1:
                if (hs_a26CIp0.notEvaluated) {
                    return hs_a26CIp0.hscall();
                } else {
                    return hs_a26CIp0;
                }
            case 2:
                var hs_x26CIp4 = hs_wild26CIzJ.data[0];
                var hs_xs26CIp3 = hs_wild26CIzJ.data[1];
                var hs_sat26CIzI = new $hs.Thunk();
                hs_sat26CIzI.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_a26CIp0, hs_x26CIp4);
                };
                return hs_sumzq26CIp5.hscall(hs_xs26CIp3, hs_sat26CIzI);
            }
        };
        var hs_sat26CIzH = new $hs.Thunk();
        hs_sat26CIzH.evaluateOnce = function () {
            var hs_sat26CIzK = new $hs.Thunk();
            hs_sat26CIzK.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26CIzK);
        };
        return hs_sumzq26CIp5.hscall(hs_l26CIp7, hs_sat26CIzH);
    };
    this.hs_sum.evaluate = function (hs_zddNum26CIpl, hs_l26CIpp) {
        var hs_sumzq26CIpn = new $hs.Func(2);
        hs_sumzq26CIpn.evaluate = function (hs_ds26CIpf, hs_a26CIph) {
            var hs_wild26CIzN = hs_ds26CIpf;
            if (hs_ds26CIpf.notEvaluated) {
                hs_wild26CIzN = hs_ds26CIpf.hscall();
            }
            switch (hs_wild26CIzN.tag) {
            case 1:
                if (hs_a26CIph.notEvaluated) {
                    return hs_a26CIph.hscall();
                } else {
                    return hs_a26CIph;
                }
            case 2:
                var hs_x26CIpm = hs_wild26CIzN.data[0];
                var hs_xs26CIpk = hs_wild26CIzN.data[1];
                var hs_sat26CIzM = new $hs.Thunk();
                hs_sat26CIzM.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum26CIpl, hs_a26CIph, hs_x26CIpm);
                };
                return hs_sumzq26CIpn.hscall(hs_xs26CIpk, hs_sat26CIzM);
            }
        };
        var hs_sat26CIzL = new $hs.Thunk();
        hs_sat26CIzL.evaluateOnce = function () {
            var hs_sat26CIzO = new $hs.Thunk();
            hs_sat26CIzO.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26CIpl, hs_sat26CIzO);
        };
        return hs_sumzq26CIpn.hscall(hs_l26CIpp, hs_sat26CIzL);
    };
    hs_product125ujTc.evaluate = function (hs_l26CIpG) {
        var hs_prod26CIpE = new $hs.Func(2);
        hs_prod26CIpE.evaluate = function (hs_ds26CIpx, hs_a26CIpz) {
            var hs_wild26CIzR = hs_ds26CIpx;
            if (hs_ds26CIpx.notEvaluated) {
                hs_wild26CIzR = hs_ds26CIpx.hscall();
            }
            switch (hs_wild26CIzR.tag) {
            case 1:
                if (hs_a26CIpz.notEvaluated) {
                    return hs_a26CIpz.hscall();
                } else {
                    return hs_a26CIpz;
                }
            case 2:
                var hs_x26CIpD = hs_wild26CIzR.data[0];
                var hs_xs26CIpC = hs_wild26CIzR.data[1];
                var hs_sat26CIzQ = new $hs.Thunk();
                hs_sat26CIzQ.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_a26CIpz, hs_x26CIpD);
                };
                return hs_prod26CIpE.hscall(hs_xs26CIpC, hs_sat26CIzQ);
            }
        };
        var hs_sat26CIzP = new $hs.Thunk();
        hs_sat26CIzP.evaluateOnce = function () {
            var hs_sat26CIzS = new $hs.Thunk();
            hs_sat26CIzS.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26CIzS);
        };
        return hs_prod26CIpE.hscall(hs_l26CIpG, hs_sat26CIzP);
    };
    hs_product225ujTt.evaluate = function (hs_l26CIpX) {
        var hs_prod26CIpV = new $hs.Func(2);
        hs_prod26CIpV.evaluate = function (hs_ds26CIpO, hs_a26CIpQ) {
            var hs_wild26CIzV = hs_ds26CIpO;
            if (hs_ds26CIpO.notEvaluated) {
                hs_wild26CIzV = hs_ds26CIpO.hscall();
            }
            switch (hs_wild26CIzV.tag) {
            case 1:
                if (hs_a26CIpQ.notEvaluated) {
                    return hs_a26CIpQ.hscall();
                } else {
                    return hs_a26CIpQ;
                }
            case 2:
                var hs_x26CIpU = hs_wild26CIzV.data[0];
                var hs_xs26CIpT = hs_wild26CIzV.data[1];
                var hs_sat26CIzU = new $hs.Thunk();
                hs_sat26CIzU.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_a26CIpQ, hs_x26CIpU);
                };
                return hs_prod26CIpV.hscall(hs_xs26CIpT, hs_sat26CIzU);
            }
        };
        var hs_sat26CIzT = new $hs.Thunk();
        hs_sat26CIzT.evaluateOnce = function () {
            var hs_sat26CIzW = new $hs.Thunk();
            hs_sat26CIzW.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26CIzW);
        };
        return hs_prod26CIpV.hscall(hs_l26CIpX, hs_sat26CIzT);
    };
    this.hs_product.evaluate = function (hs_zddNum26CIqb, hs_l26CIqf) {
        var hs_prod26CIqd = new $hs.Func(2);
        hs_prod26CIqd.evaluate = function (hs_ds26CIq5, hs_a26CIq7) {
            var hs_wild26CIzZ = hs_ds26CIq5;
            if (hs_ds26CIq5.notEvaluated) {
                hs_wild26CIzZ = hs_ds26CIq5.hscall();
            }
            switch (hs_wild26CIzZ.tag) {
            case 1:
                if (hs_a26CIq7.notEvaluated) {
                    return hs_a26CIq7.hscall();
                } else {
                    return hs_a26CIq7;
                }
            case 2:
                var hs_x26CIqc = hs_wild26CIzZ.data[0];
                var hs_xs26CIqa = hs_wild26CIzZ.data[1];
                var hs_sat26CIzY = new $hs.Thunk();
                hs_sat26CIzY.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum26CIqb, hs_a26CIq7, hs_x26CIqc);
                };
                return hs_prod26CIqd.hscall(hs_xs26CIqa, hs_sat26CIzY);
            }
        };
        var hs_sat26CIzX = new $hs.Thunk();
        hs_sat26CIzX.evaluateOnce = function () {
            var hs_sat26CIA0 = new $hs.Thunk();
            hs_sat26CIA0.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26CIqb, hs_sat26CIA0);
        };
        return hs_prod26CIqd.hscall(hs_l26CIqf, hs_sat26CIzX);
    };
    this.hs_lines.evaluate = function (hs_ds26CIqj) {
        var hs_wild26CIqt = hs_ds26CIqj;
        if (hs_ds26CIqj.notEvaluated) {
            hs_wild26CIqt = hs_ds26CIqj.hscall();
        }
        switch (hs_wild26CIqt.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_ds126CIqE = new $hs.Thunk();
            hs_ds126CIqE.evaluateOnce = function () {
                var hs_ds226CIqp = new $hs.Data(1);
                hs_ds226CIqp.data = ["\n"];
                var hs_sat26CIAa = new $hs.Func(1);
                hs_sat26CIAa.evaluate = function (hs_ds326CIqr) {
                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_ds326CIqr, hs_ds226CIqp);
                };
                var hs_wild126CIAb = $hs.modules.GHCziList.hs_break.hscall(hs_sat26CIAa, hs_wild26CIqt);
                var hs_l26CIqx = hs_wild126CIAb.data[0];
                var hs_szq26CIqy = hs_wild126CIAb.data[1];
                var hs_sat26CIA9 = new $hs.Thunk();
                hs_sat26CIA9.evaluateOnce = function () {
                    var hs_wild226CIAd = hs_szq26CIqy;
                    if (hs_szq26CIqy.notEvaluated) {
                        hs_wild226CIAd = hs_szq26CIqy.hscall();
                    }
                    switch (hs_wild226CIAd.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_szqzq26CIqC = hs_wild226CIAd.data[1];
                        return $hs.modules.DataziList.hs_lines.hscall(hs_szqzq26CIqC);
                    }
                };
                var $res = new $hs.Data(1);
                $res.data = [hs_l26CIqx, hs_sat26CIA9];
                return $res;
            };
            var hs_sat26CIA4 = new $hs.Thunk();
            hs_sat26CIA4.evaluateOnce = function () {
                var hs_wild126CIA8 = hs_ds126CIqE;
                if (hs_ds126CIqE.notEvaluated) {
                    hs_wild126CIA8 = hs_ds126CIqE.hscall();
                }
                var hs_t26CIqN = hs_wild126CIA8.data[1];
                if (hs_t26CIqN.notEvaluated) {
                    return hs_t26CIqN.hscall();
                } else {
                    return hs_t26CIqN;
                }
            };
            var hs_sat26CIA1 = new $hs.Thunk();
            hs_sat26CIA1.evaluateOnce = function () {
                var hs_wild126CIA6 = hs_ds126CIqE;
                if (hs_ds126CIqE.notEvaluated) {
                    hs_wild126CIA6 = hs_ds126CIqE.hscall();
                }
                var hs_h26CIqI = hs_wild126CIA6.data[0];
                if (hs_h26CIqI.notEvaluated) {
                    return hs_h26CIqI.hscall();
                } else {
                    return hs_h26CIqI;
                }
            };
            var $res = new $hs.Data(2);
            $res.data = [hs_sat26CIA1, hs_sat26CIA4];
            return $res;
        }
    };
};
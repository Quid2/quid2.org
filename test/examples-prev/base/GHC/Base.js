
$hs.modules.GHCziBase = new $hs.Module();
$hs.modules.GHCziBase.dependencies = ["GHC.Types", "GHC.Show", "GHC.Err", "GHC.Classes", "GHC.IO"];
$hs.modules.GHCziBase.initBeforeDependencies = function () {
    this.hs_zgzgze = new $hs.Func(1);
    this.hs_zgzg = new $hs.Func(1);
    this.hs_return = new $hs.Func(1);
    this.hs_fail = new $hs.Func(1);
    this.hs_fmap = new $hs.Func(1);
    this.hs_zlzd = new $hs.Func(1);
    this.hs_zddmfail = new $hs.Func(2);
    this.hs_zddmzgzg = new $hs.Func(3);
    this.hs_unpackNByteszh = new $hs.Func(2);
    this.hs_iShiftRLzh = new $hs.Func(2);
    this.hs_iShiftRAzh = new $hs.Func(2);
    this.hs_iShiftLzh = new $hs.Func(2);
    this.hs_shiftRLzh = new $hs.Func(2);
    this.hs_shiftLzh = new $hs.Func(2);
    this.hs_leInt = new $hs.Func(2);
    this.hs_ltInt = new $hs.Func(2);
    this.hs_neInt = new $hs.Func(2);
    this.hs_eqInt = new $hs.Func(2);
    this.hs_geInt = new $hs.Func(2);
    this.hs_gtInt = new $hs.Func(2);
    this.hs_negateInt = new $hs.Func(1);
    this.hs_remInt = new $hs.Func(2);
    this.hs_quotInt = new $hs.Func(2);
    this.hs_timesInt = new $hs.Func(2);
    this.hs_minusInt = new $hs.Func(2);
    this.hs_plusInt = new $hs.Func(2);
    this.hs_modIntzh = new $hs.Func(2);
    this.hs_modInt = new $hs.Func(2);
    this.hs_divIntzh = new $hs.Func(2);
    this.hs_divInt = new $hs.Func(2);
    this.hs_getTag = new $hs.Func(1);
    this.hs_unIO = new $hs.Func(1);
    this.hs_until = new $hs.Func(3);
    this.hs_flip = new $hs.Func(3);
    this.hs_zi = new $hs.Func(3);
    this.hs_const = new $hs.Func(2);
    this.hs_asTypeOf = new $hs.Func(2);
    this.hs_zddmzlzd = new $hs.Func(2);
    this.hs_id = new $hs.Func(1);
    this.hs_compareIntzh = new $hs.Func(2);
    this.hs_compareInt = new $hs.Func(2);
    this.hs_maxInt = new $hs.Data(1);
    this.hs_minInt = new $hs.Data(1);
    this.hs_twoInt = new $hs.Data(1);
    this.hs_oneInt = new $hs.Data(1);
    this.hs_zzeroInt = new $hs.Data(1);
    this.hs_ord = new $hs.Func(1);
    this.hs_unsafeChr = new $hs.Func(1);
    this.hs_mapFB = new $hs.Func(4);
    this.hs_zdfEqInt = new $hs.Data(1);
    this.hs_zdfOrdInt = new $hs.Data(1);
    this.hs_zd = new $hs.Func(2);
    this.hs_breakpointCond = new $hs.Func(2);
    this.hs_breakpoint = new $hs.Func(1);
    this.hs_lazzy = new $hs.Func(1);
    this.hs_thenIO = new $hs.Func(3);
    this.hs_assert = new $hs.Func(2);
    this.hs_otherwise = new $hs.Data(2);
    this.hs_returnIO = new $hs.Func(2);
    this.hs_bindIO = new $hs.Func(3);
    this.hs_zdfMonadIO = new $hs.Data(1);
    this.hs_zdfFunctorIO = new $hs.Data(1);
    this.hs_unpackAppendCStringzh = new $hs.Func(2);
    this.hs_unpackCStringUtf8zh = new $hs.Func(1);
    this.hs_eqString = new $hs.Func(2);
    this.hs_build = new $hs.Func(1);
    this.hs_unpackCStringzh = new $hs.Func(1);
    this.hs_unpackFoldrCStringzh = new $hs.Func(3);
    this.hs_augment = new $hs.Func(2);
    this.hs_map = new $hs.Func(2);
    this.hs_foldr = new $hs.Func(3);
    this.hs_zpzp = new $hs.Func(2);
    this.hs_chr = new $hs.Func(1);
    this.hs_zdfFunctorZMZN = new $hs.Data(1);
    this.hs_zdfMonadZMZN = new $hs.Data(1);
    this.hs_O = new $hs.Func(1);
    this.hs_DZCFunctor = new $hs.Func(2);
    this.hs_DZCMonad = new $hs.Func(4);
    this.hs_zgzgze.notEvaluated = true;
    this.hs_zgzgze.evaluate = function (hs_tpl26D8nP) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_tpl26D8nP);
    };
    this.hs_zgzg.notEvaluated = true;
    this.hs_zgzg.evaluate = function (hs_tpl26D8nX) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_tpl26D8nX);
    };
    this.hs_return.notEvaluated = true;
    this.hs_return.evaluate = function (hs_tpl26D8o5) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_tpl26D8o5);
    };
    this.hs_fail.notEvaluated = true;
    this.hs_fail.evaluate = function (hs_tpl26D8od) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_tpl26D8od);
    };
    this.hs_fmap.notEvaluated = true;
    this.hs_fmap.evaluate = function (hs_tpl26D8ol) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_tpl26D8ol);
    };
    this.hs_zlzd.notEvaluated = true;
    this.hs_zlzd.evaluate = function (hs_tpl26D8or) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_tpl26D8or);
    };
    this.hs_zddmfail.notEvaluated = true;
    this.hs_zddmfail.evaluate = function (hs_zddMonad26D8ox, hs_eta1cW6l3) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_zddMonad26D8ox, hs_eta1cW6l3);
    };
    this.hs_zddmzgzg.notEvaluated = true;
    this.hs_zddmzgzg.evaluate = function (hs_zddMonad26D8oB, hs_m26D8oC, hs_k26D8oE) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_zddMonad26D8oB, hs_m26D8oC, hs_k26D8oE);
    };
    this.hs_unpackNByteszh.notEvaluated = true;
    this.hs_unpackNByteszh.evaluate = function (hs_zuaddr26D8oP, hs_ds26D8oI) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_zuaddr26D8oP, hs_ds26D8oI);
    };
    this.hs_iShiftRLzh.notEvaluated = true;
    this.hs_iShiftRLzh.evaluate = function (hs_a426D8p2, hs_b26D8p0) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_a426D8p2, hs_b26D8p0);
    };
    this.hs_iShiftRAzh.notEvaluated = true;
    this.hs_iShiftRAzh.evaluate = function (hs_a426D8p7, hs_b26D8p5) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_a426D8p7, hs_b26D8p5);
    };
    this.hs_iShiftLzh.notEvaluated = true;
    this.hs_iShiftLzh.evaluate = function (hs_a426D8pd, hs_b26D8pb) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_a426D8pd, hs_b26D8pb);
    };
    this.hs_shiftRLzh.notEvaluated = true;
    this.hs_shiftRLzh.evaluate = function (hs_a426D8pi, hs_b26D8pg) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_a426D8pi, hs_b26D8pg);
    };
    this.hs_shiftLzh.notEvaluated = true;
    this.hs_shiftLzh.evaluate = function (hs_a426D8pn, hs_b26D8pl) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_a426D8pn, hs_b26D8pl);
    };
    this.hs_leInt.notEvaluated = true;
    this.hs_leInt.evaluate = function (hs_ds26D8pq, hs_ds126D8pt) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_ds26D8pq, hs_ds126D8pt);
    };
    this.hs_ltInt.notEvaluated = true;
    this.hs_ltInt.evaluate = function (hs_ds26D8pA, hs_ds126D8pD) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_ds26D8pA, hs_ds126D8pD);
    };
    this.hs_neInt.notEvaluated = true;
    this.hs_neInt.evaluate = function (hs_ds26D8pK, hs_ds126D8pN) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_ds26D8pK, hs_ds126D8pN);
    };
    this.hs_eqInt.notEvaluated = true;
    this.hs_eqInt.evaluate = function (hs_ds26D8pU, hs_ds126D8pX) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_ds26D8pU, hs_ds126D8pX);
    };
    this.hs_geInt.notEvaluated = true;
    this.hs_geInt.evaluate = function (hs_ds26D8q4, hs_ds126D8q7) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_ds26D8q4, hs_ds126D8q7);
    };
    this.hs_gtInt.notEvaluated = true;
    this.hs_gtInt.evaluate = function (hs_ds26D8qe, hs_ds126D8qh) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_ds26D8qe, hs_ds126D8qh);
    };
    this.hs_negateInt.notEvaluated = true;
    this.hs_negateInt.evaluate = function (hs_ds26D8qn) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_ds26D8qn);
    };
    this.hs_remInt.notEvaluated = true;
    this.hs_remInt.evaluate = function (hs_ds26D8qu, hs_ds126D8qx) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_ds26D8qu, hs_ds126D8qx);
    };
    this.hs_quotInt.notEvaluated = true;
    this.hs_quotInt.evaluate = function (hs_ds26D8qG, hs_ds126D8qJ) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_ds26D8qG, hs_ds126D8qJ);
    };
    this.hs_timesInt.notEvaluated = true;
    this.hs_timesInt.evaluate = function (hs_ds26D8qS, hs_ds126D8qV) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_ds26D8qS, hs_ds126D8qV);
    };
    this.hs_minusInt.notEvaluated = true;
    this.hs_minusInt.evaluate = function (hs_ds26D8r3, hs_ds126D8r6) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_ds26D8r3, hs_ds126D8r6);
    };
    this.hs_plusInt.notEvaluated = true;
    this.hs_plusInt.evaluate = function (hs_ds26D8re, hs_ds126D8rh) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_ds26D8re, hs_ds126D8rh);
    };
    this.hs_modIntzh.notEvaluated = true;
    this.hs_modIntzh.evaluate = function (hs_xzh26D8rp, hs_yzh26D8rq) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_xzh26D8rp, hs_yzh26D8rq);
    };
    this.hs_modInt.notEvaluated = true;
    this.hs_modInt.evaluate = function (hs_ds26D8rD, hs_ds126D8rG) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_ds26D8rD, hs_ds126D8rG);
    };
    this.hs_divIntzh.notEvaluated = true;
    this.hs_divIntzh.evaluate = function (hs_xzh26D8rP, hs_yzh26D8rR) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_xzh26D8rP, hs_yzh26D8rR);
    };
    this.hs_divInt.notEvaluated = true;
    this.hs_divInt.evaluate = function (hs_ds26D8s5, hs_ds126D8s8) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_ds26D8s5, hs_ds126D8s8);
    };
    this.hs_getTag.notEvaluated = true;
    this.hs_getTag.evaluate = function (hs_eta26D8sg) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_eta26D8sg);
    };
    this.hs_unIO.notEvaluated = true;
    this.hs_unIO.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_until.notEvaluated = true;
    this.hs_until.evaluate = function (hs_p26D8sr, hs_f26D8st, hs_x26D8sq) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_p26D8sr, hs_f26D8st, hs_x26D8sq);
    };
    this.hs_flip.notEvaluated = true;
    this.hs_flip.evaluate = function (hs_f26D8sA, hs_x26D8sz, hs_y26D8sy) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_f26D8sA, hs_x26D8sz, hs_y26D8sy);
    };
    this.hs_zi.notEvaluated = true;
    this.hs_zi.evaluate = function (hs_eta26D8sG, hs_eta126D8sF, hs_x26D8sE) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_eta26D8sG, hs_eta126D8sF, hs_x26D8sE);
    };
    this.hs_const.notEvaluated = true;
    this.hs_const.evaluate = function (hs_x26D8sK, hs_ds26D8sL) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_x26D8sK, hs_ds26D8sL);
    };
    this.hs_asTypeOf.notEvaluated = true;
    this.hs_asTypeOf.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_zddmzlzd.notEvaluated = true;
    this.hs_zddmzlzd.evaluate = function (hs_zddFunctor26D8sO, hs_x26D8sQ) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_zddFunctor26D8sO, hs_x26D8sQ);
    };
    this.hs_id.notEvaluated = true;
    this.hs_id.evaluate = function (hs_x26D8sT) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_x26D8sT);
    };
    this.hs_compareIntzh.notEvaluated = true;
    this.hs_compareIntzh.evaluate = function (hs_xzh26D8sW, hs_yzh26D8sX) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_xzh26D8sW, hs_yzh26D8sX);
    };
    this.hs_compareInt.notEvaluated = true;
    this.hs_compareInt.evaluate = function (hs_ds26D8t2, hs_ds126D8t5) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_ds26D8t2, hs_ds126D8t5);
    };
    this.hs_maxInt.notEvaluated = true;
    this.hs_maxInt.evaluate = function () {
        $hs.modules.GHCziBase.loadDependencies();
        return this;
    };
    this.hs_minInt.notEvaluated = true;
    this.hs_minInt.evaluate = function () {
        $hs.modules.GHCziBase.loadDependencies();
        return this;
    };
    this.hs_twoInt.notEvaluated = true;
    this.hs_twoInt.evaluate = function () {
        $hs.modules.GHCziBase.loadDependencies();
        return this;
    };
    this.hs_oneInt.notEvaluated = true;
    this.hs_oneInt.evaluate = function () {
        $hs.modules.GHCziBase.loadDependencies();
        return this;
    };
    this.hs_zzeroInt.notEvaluated = true;
    this.hs_zzeroInt.evaluate = function () {
        $hs.modules.GHCziBase.loadDependencies();
        return this;
    };
    this.hs_ord.notEvaluated = true;
    this.hs_ord.evaluate = function (hs_ds26D8tb) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_ds26D8tb);
    };
    this.hs_unsafeChr.notEvaluated = true;
    this.hs_unsafeChr.evaluate = function (hs_ds26D8th) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_ds26D8th);
    };
    this.hs_mapFB.notEvaluated = true;
    this.hs_mapFB.evaluate = function (hs_eta26D8ts, hs_eta126D8tr, hs_x26D8tq, hs_ys26D8tu) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_eta26D8ts, hs_eta126D8tr, hs_x26D8tq, hs_ys26D8tu);
    };
    this.hs_zdfEqInt.notEvaluated = true;
    this.hs_zdfEqInt.evaluate = function () {
        $hs.modules.GHCziBase.loadDependencies();
        return this;
    };
    this.hs_zdfOrdInt.notEvaluated = true;
    this.hs_zdfOrdInt.evaluate = function () {
        $hs.modules.GHCziBase.loadDependencies();
        return this;
    };
    this.hs_zd.notEvaluated = true;
    this.hs_zd.evaluate = function (hs_eta26D8tO, hs_eta126D8tN) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_eta26D8tO, hs_eta126D8tN);
    };
    this.hs_breakpointCond.notEvaluated = true;
    this.hs_breakpointCond.evaluate = function (hs_ds26D8tS, hs_r26D8tR) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_ds26D8tS, hs_r26D8tR);
    };
    this.hs_breakpoint.notEvaluated = true;
    this.hs_breakpoint.evaluate = function (hs_r26D8tU) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_r26D8tU);
    };
    this.hs_lazzy.notEvaluated = true;
    this.hs_lazzy.evaluate = function (hs_x26D8tW) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_x26D8tW);
    };
    this.hs_thenIO.notEvaluated = true;
    this.hs_thenIO.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_assert.notEvaluated = true;
    this.hs_assert.evaluate = function (hs_zupred26D8uc, hs_r26D8ub) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_zupred26D8uc, hs_r26D8ub);
    };
    this.hs_otherwise.notEvaluated = true;
    this.hs_otherwise.evaluate = function () {
        $hs.modules.GHCziBase.loadDependencies();
        return this;
    };
    this.hs_returnIO.notEvaluated = true;
    this.hs_returnIO.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_bindIO.notEvaluated = true;
    this.hs_bindIO.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_zdfMonadIO.notEvaluated = true;
    this.hs_zdfMonadIO.evaluate = function () {
        $hs.modules.GHCziBase.loadDependencies();
        return this;
    };
    this.hs_zdfFunctorIO.notEvaluated = true;
    this.hs_zdfFunctorIO.evaluate = function () {
        $hs.modules.GHCziBase.loadDependencies();
        return this;
    };
    this.hs_unpackAppendCStringzh.notEvaluated = true;
    this.hs_unpackAppendCStringzh.evaluate = function (hs_addr26D8v3, hs_rest26D8vb) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_addr26D8v3, hs_rest26D8vb);
    };
    this.hs_unpackCStringUtf8zh.notEvaluated = true;
    this.hs_unpackCStringUtf8zh.evaluate = function (hs_addr26D8vg) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_addr26D8vg);
    };
    this.hs_eqString.notEvaluated = true;
    this.hs_eqString.evaluate = function (hs_ds26D8x1, hs_ds126D8x3) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_ds26D8x1, hs_ds126D8x3);
    };
    this.hs_build.notEvaluated = true;
    this.hs_build.evaluate = function (hs_eta26D8xj) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_eta26D8xj);
    };
    this.hs_unpackCStringzh.notEvaluated = true;
    this.hs_unpackCStringzh.evaluate = function (hs_addr26D8xo) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_addr26D8xo);
    };
    this.hs_unpackFoldrCStringzh.notEvaluated = true;
    this.hs_unpackFoldrCStringzh.evaluate = function (hs_addr26D8xC, hs_f26D8xG, hs_zz26D8xL) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_addr26D8xC, hs_f26D8xG, hs_zz26D8xL);
    };
    this.hs_augment.notEvaluated = true;
    this.hs_augment.evaluate = function (hs_eta26D8xP, hs_eta126D8xO) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_eta26D8xP, hs_eta126D8xO);
    };
    this.hs_map.notEvaluated = true;
    this.hs_map.evaluate = function (hs_ds26D8xX, hs_ds126D8xS) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_ds26D8xX, hs_ds126D8xS);
    };
    this.hs_foldr.notEvaluated = true;
    this.hs_foldr.evaluate = function (hs_eta26D8ye, hs_eta126D8y8, hs_eta226D8yg) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_eta26D8ye, hs_eta126D8y8, hs_eta226D8yg);
    };
    this.hs_zpzp.notEvaluated = true;
    this.hs_zpzp.evaluate = function (hs_ds26D8yj, hs_ys26D8yl) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_ds26D8yj, hs_ys26D8yl);
    };
    this.hs_chr.notEvaluated = true;
    this.hs_chr.evaluate = function (hs_i26D8ys) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_i26D8ys);
    };
    this.hs_zdfFunctorZMZN.notEvaluated = true;
    this.hs_zdfFunctorZMZN.evaluate = function () {
        $hs.modules.GHCziBase.loadDependencies();
        return this;
    };
    this.hs_zdfMonadZMZN.notEvaluated = true;
    this.hs_zdfMonadZMZN.evaluate = function () {
        $hs.modules.GHCziBase.loadDependencies();
        return this;
    };
    this.hs_O.notEvaluated = true;
    this.hs_O.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_DZCFunctor.notEvaluated = true;
    this.hs_DZCFunctor.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_DZCMonad.notEvaluated = true;
    this.hs_DZCMonad.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
};
$hs.modules.GHCziBase.initAfterDependencies = function () {
    this.hs_zgzgze.notEvaluated = false;
    this.hs_zgzg.notEvaluated = false;
    this.hs_return.notEvaluated = false;
    this.hs_fail.notEvaluated = false;
    this.hs_fmap.notEvaluated = false;
    this.hs_zlzd.notEvaluated = false;
    this.hs_zddmfail.notEvaluated = false;
    this.hs_zddmzgzg.notEvaluated = false;
    this.hs_unpackNByteszh.notEvaluated = false;
    this.hs_iShiftRLzh.notEvaluated = false;
    this.hs_iShiftRAzh.notEvaluated = false;
    this.hs_iShiftLzh.notEvaluated = false;
    this.hs_shiftRLzh.notEvaluated = false;
    this.hs_shiftLzh.notEvaluated = false;
    this.hs_leInt.notEvaluated = false;
    this.hs_ltInt.notEvaluated = false;
    this.hs_neInt.notEvaluated = false;
    this.hs_eqInt.notEvaluated = false;
    this.hs_geInt.notEvaluated = false;
    this.hs_gtInt.notEvaluated = false;
    this.hs_negateInt.notEvaluated = false;
    this.hs_remInt.notEvaluated = false;
    this.hs_quotInt.notEvaluated = false;
    this.hs_timesInt.notEvaluated = false;
    this.hs_minusInt.notEvaluated = false;
    this.hs_plusInt.notEvaluated = false;
    this.hs_modIntzh.notEvaluated = false;
    this.hs_modInt.notEvaluated = false;
    this.hs_divIntzh.notEvaluated = false;
    this.hs_divInt.notEvaluated = false;
    this.hs_getTag.notEvaluated = false;
    this.hs_unIO.notEvaluated = false;
    this.hs_until.notEvaluated = false;
    this.hs_flip.notEvaluated = false;
    this.hs_zi.notEvaluated = false;
    this.hs_const.notEvaluated = false;
    this.hs_asTypeOf.notEvaluated = false;
    this.hs_zddmzlzd.notEvaluated = false;
    this.hs_id.notEvaluated = false;
    this.hs_compareIntzh.notEvaluated = false;
    this.hs_compareInt.notEvaluated = false;
    this.hs_maxInt.notEvaluated = false;
    this.hs_maxInt.evaluate = function () {
        return this;
    };
    this.hs_minInt.notEvaluated = false;
    this.hs_minInt.evaluate = function () {
        return this;
    };
    this.hs_twoInt.notEvaluated = false;
    this.hs_twoInt.evaluate = function () {
        return this;
    };
    this.hs_oneInt.notEvaluated = false;
    this.hs_oneInt.evaluate = function () {
        return this;
    };
    this.hs_zzeroInt.notEvaluated = false;
    this.hs_zzeroInt.evaluate = function () {
        return this;
    };
    this.hs_ord.notEvaluated = false;
    this.hs_unsafeChr.notEvaluated = false;
    this.hs_mapFB.notEvaluated = false;
    this.hs_zdfEqInt.notEvaluated = false;
    this.hs_zdfEqInt.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdInt.notEvaluated = false;
    this.hs_zdfOrdInt.evaluate = function () {
        return this;
    };
    this.hs_zd.notEvaluated = false;
    this.hs_breakpointCond.notEvaluated = false;
    this.hs_breakpoint.notEvaluated = false;
    this.hs_lazzy.notEvaluated = false;
    this.hs_thenIO.notEvaluated = false;
    this.hs_assert.notEvaluated = false;
    this.hs_otherwise.notEvaluated = false;
    this.hs_otherwise.evaluate = function () {
        return this;
    };
    this.hs_returnIO.notEvaluated = false;
    this.hs_bindIO.notEvaluated = false;
    this.hs_zdfMonadIO.notEvaluated = false;
    this.hs_zdfMonadIO.evaluate = function () {
        return this;
    };
    this.hs_zdfFunctorIO.notEvaluated = false;
    this.hs_zdfFunctorIO.evaluate = function () {
        return this;
    };
    this.hs_unpackAppendCStringzh.notEvaluated = false;
    this.hs_unpackCStringUtf8zh.notEvaluated = false;
    this.hs_eqString.notEvaluated = false;
    this.hs_build.notEvaluated = false;
    this.hs_unpackCStringzh.notEvaluated = false;
    this.hs_unpackFoldrCStringzh.notEvaluated = false;
    this.hs_augment.notEvaluated = false;
    this.hs_map.notEvaluated = false;
    this.hs_foldr.notEvaluated = false;
    this.hs_zpzp.notEvaluated = false;
    this.hs_chr.notEvaluated = false;
    this.hs_zdfFunctorZMZN.notEvaluated = false;
    this.hs_zdfFunctorZMZN.evaluate = function () {
        return this;
    };
    this.hs_zdfMonadZMZN.notEvaluated = false;
    this.hs_zdfMonadZMZN.evaluate = function () {
        return this;
    };
    this.hs_O.notEvaluated = false;
    this.hs_DZCFunctor.notEvaluated = false;
    this.hs_DZCMonad.notEvaluated = false;
    var hs_a25uJW4 = new $hs.Func(1);
    var hs_zdcfail25uJXg = new $hs.Func(1);
    var hs_zdcreturn25uJXk = new $hs.Func(1);
    var hs_zdcmin25uJXo = new $hs.Thunk();
    var hs_zdcmax25uJXq = new $hs.Thunk();
    var hs_zdcfail125uJXs = new $hs.Func(1);
    var hs_a125uJXI = new $hs.Func(3);
    var hs_a225uJXY = new $hs.Func(2);
    var hs_zdcreturn125uJY4 = new $hs.Func(2);
    var hs_a325uJY6 = new $hs.Func(3);
    var hs_zdczgzgze25uJYj = new $hs.Func(3);
    var hs_zdczgzg25uJYl = new $hs.Func(2);
    var hs_zdcfmap25uJYt = new $hs.Func(2);
    var hs_zdczlzd25uJYD = new $hs.Func(1);
    var hs_zdczlzd125uK2q = new $hs.Func(1);
    var hs_zdczgzgze125uK2w = new $hs.Func(2);
    var hs_zdczgzg125uK2N = new $hs.Func(2);
    this.hs_zgzgze.evaluate = function (hs_tpl26D8nP) {
        var hs_tpl26D8zh = hs_tpl26D8nP;
        if (hs_tpl26D8nP.notEvaluated) {
            hs_tpl26D8zh = hs_tpl26D8nP.hscall();
        }
        var hs_tpl26D8nV = hs_tpl26D8zh.data[0];
        if (hs_tpl26D8nV.notEvaluated) {
            return hs_tpl26D8nV.hscall();
        } else {
            return hs_tpl26D8nV;
        }
    };
    this.hs_zgzg.evaluate = function (hs_tpl26D8nX) {
        var hs_tpl26D8zm = hs_tpl26D8nX;
        if (hs_tpl26D8nX.notEvaluated) {
            hs_tpl26D8zm = hs_tpl26D8nX.hscall();
        }
        var hs_tpl26D8o3 = hs_tpl26D8zm.data[1];
        if (hs_tpl26D8o3.notEvaluated) {
            return hs_tpl26D8o3.hscall();
        } else {
            return hs_tpl26D8o3;
        }
    };
    this.hs_return.evaluate = function (hs_tpl26D8o5) {
        var hs_tpl26D8zq = hs_tpl26D8o5;
        if (hs_tpl26D8o5.notEvaluated) {
            hs_tpl26D8zq = hs_tpl26D8o5.hscall();
        }
        var hs_tpl26D8ob = hs_tpl26D8zq.data[2];
        if (hs_tpl26D8ob.notEvaluated) {
            return hs_tpl26D8ob.hscall();
        } else {
            return hs_tpl26D8ob;
        }
    };
    this.hs_fail.evaluate = function (hs_tpl26D8od) {
        var hs_tpl26D8zu = hs_tpl26D8od;
        if (hs_tpl26D8od.notEvaluated) {
            hs_tpl26D8zu = hs_tpl26D8od.hscall();
        }
        var hs_tpl26D8oj = hs_tpl26D8zu.data[3];
        if (hs_tpl26D8oj.notEvaluated) {
            return hs_tpl26D8oj.hscall();
        } else {
            return hs_tpl26D8oj;
        }
    };
    this.hs_fmap.evaluate = function (hs_tpl26D8ol) {
        var hs_tpl26D8zx = hs_tpl26D8ol;
        if (hs_tpl26D8ol.notEvaluated) {
            hs_tpl26D8zx = hs_tpl26D8ol.hscall();
        }
        var hs_tpl26D8op = hs_tpl26D8zx.data[0];
        if (hs_tpl26D8op.notEvaluated) {
            return hs_tpl26D8op.hscall();
        } else {
            return hs_tpl26D8op;
        }
    };
    this.hs_zlzd.evaluate = function (hs_tpl26D8or) {
        var hs_tpl26D8zA = hs_tpl26D8or;
        if (hs_tpl26D8or.notEvaluated) {
            hs_tpl26D8zA = hs_tpl26D8or.hscall();
        }
        var hs_tpl26D8ov = hs_tpl26D8zA.data[1];
        if (hs_tpl26D8ov.notEvaluated) {
            return hs_tpl26D8ov.hscall();
        } else {
            return hs_tpl26D8ov;
        }
    };
    this.hs_zddmfail.evaluate = function (hs_zddMonad26D8ox, hs_eta1cW6l3) {
        return $hs.modules.GHCziErr.hs_error.hscall(hs_eta1cW6l3);
    };
    this.hs_zddmzgzg.evaluate = function (hs_zddMonad26D8oB, hs_m26D8oC, hs_k26D8oE) {
        var hs_sat26D8zC = new $hs.Func(1);
        hs_sat26D8zC.evaluate = function (hs_ds26D8zB) {
            if (hs_k26D8oE.notEvaluated) {
                return hs_k26D8oE.hscall();
            } else {
                return hs_k26D8oE;
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26D8oB, hs_m26D8oC, hs_sat26D8zC);
    };
    this.hs_unpackNByteszh.evaluate = function (hs_zuaddr26D8oP, hs_ds26D8oI) {
        var hs_ds126D8oW = hs_ds26D8oI;
        if (hs_ds26D8oI.notEvaluated) {
            hs_ds126D8oW = hs_ds26D8oI.hscall();
        }
        switch (hs_ds126D8oW) {
        case 0:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        default:
            var hs_unpack26D8oT = new $hs.Func(2);
            hs_unpack26D8oT.evaluate = function (hs_acc26D8oS, hs_izh26D8oN) {
                var hs_wild26D8zF = hs_izh26D8oN < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                switch (hs_wild26D8zF.tag) {
                case 1:
                    var hs_sat26D8zE = ($hs.Int.addCarry(hs_izh26D8oN, ~1, 1))[0];
                    var hs_sat26D8zD = hs_zuaddr26D8oP.charAt(hs_izh26D8oN);
                    var hs_sat26D8zG = new $hs.Data(1);
                    hs_sat26D8zG.data = [hs_sat26D8zD];
                    var hs_sat26D8zH = new $hs.Data(2);
                    hs_sat26D8zH.data = [hs_sat26D8zG, hs_acc26D8oS];
                    return hs_unpack26D8oT.hscall(hs_sat26D8zH, hs_sat26D8zE);
                case 2:
                    if (hs_acc26D8oS.notEvaluated) {
                        return hs_acc26D8oS.hscall();
                    } else {
                        return hs_acc26D8oS;
                    }
                }
            };
            var hs_sat26D8zI = ($hs.Int.addCarry(hs_ds126D8oW, ~1, 1))[0];
            return hs_unpack26D8oT.hscall($hs.modules.GHCziTypes.hs_ZMZN, hs_sat26D8zI);
        }
    };
    this.hs_iShiftRLzh.evaluate = function (hs_a426D8p2, hs_b26D8p0) {
        var hs_wild26D8zJ = hs_b26D8p0 >= 32 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26D8zJ.tag) {
        case 1:
            return hs_a426D8p2 >> hs_b26D8p0;
        case 2:
            return 0;
        }
    };
    this.hs_iShiftRAzh.evaluate = function (hs_a426D8p7, hs_b26D8p5) {
        var hs_wild26D8zK = hs_b26D8p5 >= 32 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26D8zK.tag) {
        case 1:
            return hs_a426D8p7 >>> hs_b26D8p5;
        case 2:
            var hs_wild126D8zL = hs_a426D8p7 < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild126D8zL.tag) {
            case 1:
                return 0;
            case 2:
                return -1;
            }
        }
    };
    this.hs_iShiftLzh.evaluate = function (hs_a426D8pd, hs_b26D8pb) {
        var hs_wild26D8zM = hs_b26D8pb >= 32 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26D8zM.tag) {
        case 1:
            return hs_a426D8pd << hs_b26D8pb;
        case 2:
            return 0;
        }
    };
    this.hs_shiftRLzh.evaluate = function (hs_a426D8pi, hs_b26D8pg) {
        var hs_wild26D8zN = hs_b26D8pg >= 32 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26D8zN.tag) {
        case 1:
            return hs_a426D8pi >> hs_b26D8pg;
        case 2:
            return 0;
        }
    };
    this.hs_shiftLzh.evaluate = function (hs_a426D8pn, hs_b26D8pl) {
        var hs_wild26D8zO = hs_b26D8pl >= 32 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26D8zO.tag) {
        case 1:
            return hs_a426D8pn << hs_b26D8pl;
        case 2:
            return 0;
        }
    };
    this.hs_leInt.evaluate = function (hs_ds26D8pq, hs_ds126D8pt) {
        var hs_wild26D8zQ = hs_ds26D8pq;
        if (hs_ds26D8pq.notEvaluated) {
            hs_wild26D8zQ = hs_ds26D8pq.hscall();
        }
        var hs_x26D8pw = hs_wild26D8zQ.data[0];
        var hs_wild126D8zP = hs_ds126D8pt;
        if (hs_ds126D8pt.notEvaluated) {
            hs_wild126D8zP = hs_ds126D8pt.hscall();
        }
        var hs_y26D8px = hs_wild126D8zP.data[0];
        return hs_x26D8pw <= hs_y26D8px ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    this.hs_ltInt.evaluate = function (hs_ds26D8pA, hs_ds126D8pD) {
        var hs_wild26D8zS = hs_ds26D8pA;
        if (hs_ds26D8pA.notEvaluated) {
            hs_wild26D8zS = hs_ds26D8pA.hscall();
        }
        var hs_x26D8pG = hs_wild26D8zS.data[0];
        var hs_wild126D8zR = hs_ds126D8pD;
        if (hs_ds126D8pD.notEvaluated) {
            hs_wild126D8zR = hs_ds126D8pD.hscall();
        }
        var hs_y26D8pH = hs_wild126D8zR.data[0];
        return hs_x26D8pG < hs_y26D8pH ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    this.hs_neInt.evaluate = function (hs_ds26D8pK, hs_ds126D8pN) {
        var hs_wild26D8zU = hs_ds26D8pK;
        if (hs_ds26D8pK.notEvaluated) {
            hs_wild26D8zU = hs_ds26D8pK.hscall();
        }
        var hs_x26D8pQ = hs_wild26D8zU.data[0];
        var hs_wild126D8zT = hs_ds126D8pN;
        if (hs_ds126D8pN.notEvaluated) {
            hs_wild126D8zT = hs_ds126D8pN.hscall();
        }
        var hs_y26D8pR = hs_wild126D8zT.data[0];
        return hs_x26D8pQ != hs_y26D8pR ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    this.hs_eqInt.evaluate = function (hs_ds26D8pU, hs_ds126D8pX) {
        var hs_wild26D8zW = hs_ds26D8pU;
        if (hs_ds26D8pU.notEvaluated) {
            hs_wild26D8zW = hs_ds26D8pU.hscall();
        }
        var hs_x26D8q0 = hs_wild26D8zW.data[0];
        var hs_wild126D8zV = hs_ds126D8pX;
        if (hs_ds126D8pX.notEvaluated) {
            hs_wild126D8zV = hs_ds126D8pX.hscall();
        }
        var hs_y26D8q1 = hs_wild126D8zV.data[0];
        return hs_x26D8q0 == hs_y26D8q1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    this.hs_geInt.evaluate = function (hs_ds26D8q4, hs_ds126D8q7) {
        var hs_wild26D8zY = hs_ds26D8q4;
        if (hs_ds26D8q4.notEvaluated) {
            hs_wild26D8zY = hs_ds26D8q4.hscall();
        }
        var hs_x26D8qa = hs_wild26D8zY.data[0];
        var hs_wild126D8zX = hs_ds126D8q7;
        if (hs_ds126D8q7.notEvaluated) {
            hs_wild126D8zX = hs_ds126D8q7.hscall();
        }
        var hs_y26D8qb = hs_wild126D8zX.data[0];
        return hs_x26D8qa >= hs_y26D8qb ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    this.hs_gtInt.evaluate = function (hs_ds26D8qe, hs_ds126D8qh) {
        var hs_wild26D8A0 = hs_ds26D8qe;
        if (hs_ds26D8qe.notEvaluated) {
            hs_wild26D8A0 = hs_ds26D8qe.hscall();
        }
        var hs_x26D8qk = hs_wild26D8A0.data[0];
        var hs_wild126D8zZ = hs_ds126D8qh;
        if (hs_ds126D8qh.notEvaluated) {
            hs_wild126D8zZ = hs_ds126D8qh.hscall();
        }
        var hs_y26D8ql = hs_wild126D8zZ.data[0];
        return hs_x26D8qk > hs_y26D8ql ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    this.hs_negateInt.evaluate = function (hs_ds26D8qn) {
        var hs_wild26D8A2 = hs_ds26D8qn;
        if (hs_ds26D8qn.notEvaluated) {
            hs_wild26D8A2 = hs_ds26D8qn.hscall();
        }
        var hs_x26D8qq = hs_wild26D8A2.data[0];
        var hs_sat26D8A1 = -hs_x26D8qq;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26D8A1];
        return $res;
    };
    this.hs_remInt.evaluate = function (hs_ds26D8qu, hs_ds126D8qx) {
        var hs_wild26D8A4 = hs_ds26D8qu;
        if (hs_ds26D8qu.notEvaluated) {
            hs_wild26D8A4 = hs_ds26D8qu.hscall();
        }
        var hs_x26D8qA = hs_wild26D8A4.data[0];
        var hs_wild126D8A3 = hs_ds126D8qx;
        if (hs_ds126D8qx.notEvaluated) {
            hs_wild126D8A3 = hs_ds126D8qx.hscall();
        }
        var hs_y26D8qB = hs_wild126D8A3.data[0];
        var hs_wild226D8qD = hs_x26D8qA % hs_y26D8qB;
        var $res = new $hs.Data(1);
        $res.data = [hs_wild226D8qD];
        return $res;
    };
    this.hs_quotInt.evaluate = function (hs_ds26D8qG, hs_ds126D8qJ) {
        var hs_wild26D8A6 = hs_ds26D8qG;
        if (hs_ds26D8qG.notEvaluated) {
            hs_wild26D8A6 = hs_ds26D8qG.hscall();
        }
        var hs_x26D8qM = hs_wild26D8A6.data[0];
        var hs_wild126D8A5 = hs_ds126D8qJ;
        if (hs_ds126D8qJ.notEvaluated) {
            hs_wild126D8A5 = hs_ds126D8qJ.hscall();
        }
        var hs_y26D8qN = hs_wild126D8A5.data[0];
        var hs_wild226D8qP = hs_x26D8qM / hs_y26D8qN & ~0;
        var $res = new $hs.Data(1);
        $res.data = [hs_wild226D8qP];
        return $res;
    };
    this.hs_timesInt.evaluate = function (hs_ds26D8qS, hs_ds126D8qV) {
        var hs_wild26D8A9 = hs_ds26D8qS;
        if (hs_ds26D8qS.notEvaluated) {
            hs_wild26D8A9 = hs_ds26D8qS.hscall();
        }
        var hs_x26D8qY = hs_wild26D8A9.data[0];
        var hs_wild126D8A8 = hs_ds126D8qV;
        if (hs_ds126D8qV.notEvaluated) {
            hs_wild126D8A8 = hs_ds126D8qV.hscall();
        }
        var hs_y26D8qZ = hs_wild126D8A8.data[0];
        var hs_sat26D8A7 = $hs.Int.mul(hs_x26D8qY, hs_y26D8qZ);
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26D8A7];
        return $res;
    };
    this.hs_minusInt.evaluate = function (hs_ds26D8r3, hs_ds126D8r6) {
        var hs_wild26D8Ac = hs_ds26D8r3;
        if (hs_ds26D8r3.notEvaluated) {
            hs_wild26D8Ac = hs_ds26D8r3.hscall();
        }
        var hs_x26D8r9 = hs_wild26D8Ac.data[0];
        var hs_wild126D8Ab = hs_ds126D8r6;
        if (hs_ds126D8r6.notEvaluated) {
            hs_wild126D8Ab = hs_ds126D8r6.hscall();
        }
        var hs_y26D8ra = hs_wild126D8Ab.data[0];
        var hs_sat26D8Aa = ($hs.Int.addCarry(hs_x26D8r9, ~hs_y26D8ra, 1))[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26D8Aa];
        return $res;
    };
    this.hs_plusInt.evaluate = function (hs_ds26D8re, hs_ds126D8rh) {
        var hs_wild26D8Af = hs_ds26D8re;
        if (hs_ds26D8re.notEvaluated) {
            hs_wild26D8Af = hs_ds26D8re.hscall();
        }
        var hs_x26D8rk = hs_wild26D8Af.data[0];
        var hs_wild126D8Ae = hs_ds126D8rh;
        if (hs_ds126D8rh.notEvaluated) {
            hs_wild126D8Ae = hs_ds126D8rh.hscall();
        }
        var hs_y26D8rl = hs_wild126D8Ae.data[0];
        var hs_sat26D8Ad = ($hs.Int.addCarry(hs_x26D8rk, hs_y26D8rl, 0))[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26D8Ad];
        return $res;
    };
    this.hs_modIntzh.evaluate = function (hs_xzh26D8rp, hs_yzh26D8rq) {
        var hs_rzh26D8rz = hs_xzh26D8rp % hs_yzh26D8rq;
        var hs_sat26D8Ai = new $hs.Thunk();
        hs_sat26D8Ai.evaluateOnce = function () {
            var hs_sat26D8Ag = new $hs.Thunk();
            hs_sat26D8Ag.evaluateOnce = function () {
                return hs_yzh26D8rq > 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            };
            var hs_sat26D8Ah = new $hs.Thunk();
            hs_sat26D8Ah.evaluateOnce = function () {
                return hs_xzh26D8rp < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            };
            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26D8Ah, hs_sat26D8Ag);
        };
        var hs_sat26D8Am = new $hs.Thunk();
        hs_sat26D8Am.evaluateOnce = function () {
            var hs_sat26D8Aj = new $hs.Thunk();
            hs_sat26D8Aj.evaluateOnce = function () {
                return hs_yzh26D8rq < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            };
            var hs_sat26D8Ak = new $hs.Thunk();
            hs_sat26D8Ak.evaluateOnce = function () {
                return hs_xzh26D8rp > 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            };
            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26D8Ak, hs_sat26D8Aj);
        };
        var hs_wild26D8Al = $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26D8Am, hs_sat26D8Ai);
        switch (hs_wild26D8Al.tag) {
        case 1:
            if (hs_rzh26D8rz.notEvaluated) {
                return hs_rzh26D8rz.hscall();
            } else {
                return hs_rzh26D8rz;
            }
        case 2:
            var hs_wild126D8An = hs_rzh26D8rz != 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild126D8An.tag) {
            case 1:
                return 0;
            case 2:
                return ($hs.Int.addCarry(hs_rzh26D8rz, hs_yzh26D8rq, 0))[0];
            }
        }
    };
    this.hs_modInt.evaluate = function (hs_ds26D8rD, hs_ds126D8rG) {
        var hs_wild26D8Ap = hs_ds26D8rD;
        if (hs_ds26D8rD.notEvaluated) {
            hs_wild26D8Ap = hs_ds26D8rD.hscall();
        }
        var hs_x26D8rJ = hs_wild26D8Ap.data[0];
        var hs_wild126D8Ao = hs_ds126D8rG;
        if (hs_ds126D8rG.notEvaluated) {
            hs_wild126D8Ao = hs_ds126D8rG.hscall();
        }
        var hs_y26D8rK = hs_wild126D8Ao.data[0];
        var hs_wild226D8rM = $hs.modules.GHCziBase.hs_modIntzh.hscall(hs_x26D8rJ, hs_y26D8rK);
        var $res = new $hs.Data(1);
        $res.data = [hs_wild226D8rM];
        return $res;
    };
    this.hs_divIntzh.evaluate = function (hs_xzh26D8rP, hs_yzh26D8rR) {
        var hs_sat26D8Aq = new $hs.Thunk();
        hs_sat26D8Aq.evaluateOnce = function () {
            return hs_yzh26D8rR < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        };
        var hs_sat26D8As = new $hs.Thunk();
        hs_sat26D8As.evaluateOnce = function () {
            return hs_xzh26D8rP > 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        };
        var hs_wild26D8Ar = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26D8As, hs_sat26D8Aq);
        switch (hs_wild26D8Ar.tag) {
        case 1:
            var hs_sat26D8At = new $hs.Thunk();
            hs_sat26D8At.evaluateOnce = function () {
                return hs_yzh26D8rR > 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            };
            var hs_sat26D8Av = new $hs.Thunk();
            hs_sat26D8Av.evaluateOnce = function () {
                return hs_xzh26D8rP < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            };
            var hs_wild126D8Au = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26D8Av, hs_sat26D8At);
            switch (hs_wild126D8Au.tag) {
            case 1:
                return hs_xzh26D8rP / hs_yzh26D8rR & ~0;
            case 2:
                var hs_sat26D8Aw = ($hs.Int.addCarry(hs_xzh26D8rP, 1, 0))[0];
                var hs_wild226D8rZ = hs_sat26D8Aw / hs_yzh26D8rR & ~0;
                return ($hs.Int.addCarry(hs_wild226D8rZ, ~1, 1))[0];
            }
        case 2:
            var hs_sat26D8Ax = ($hs.Int.addCarry(hs_xzh26D8rP, ~1, 1))[0];
            var hs_wild126D8s2 = hs_sat26D8Ax / hs_yzh26D8rR & ~0;
            return ($hs.Int.addCarry(hs_wild126D8s2, ~1, 1))[0];
        }
    };
    this.hs_divInt.evaluate = function (hs_ds26D8s5, hs_ds126D8s8) {
        var hs_wild26D8Az = hs_ds26D8s5;
        if (hs_ds26D8s5.notEvaluated) {
            hs_wild26D8Az = hs_ds26D8s5.hscall();
        }
        var hs_x26D8sb = hs_wild26D8Az.data[0];
        var hs_wild126D8Ay = hs_ds126D8s8;
        if (hs_ds126D8s8.notEvaluated) {
            hs_wild126D8Ay = hs_ds126D8s8.hscall();
        }
        var hs_y26D8sc = hs_wild126D8Ay.data[0];
        var hs_wild226D8se = $hs.modules.GHCziBase.hs_divIntzh.hscall(hs_x26D8sb, hs_y26D8sc);
        var $res = new $hs.Data(1);
        $res.data = [hs_wild226D8se];
        return $res;
    };
    this.hs_getTag.evaluate = function (hs_eta26D8sg) {
        var hs_x26D8si = hs_eta26D8sg;
        if (hs_eta26D8sg.notEvaluated) {
            hs_x26D8si = hs_eta26D8sg.hscall();
        }
        return hs_x26D8si.tag;
    };
    hs_a25uJW4.evaluate = function (hs_ds26D8sm) {
        if (hs_ds26D8sm.notEvaluated) {
            return hs_ds26D8sm.hscall();
        } else {
            return hs_ds26D8sm;
        }
    };
    this.hs_unIO.evaluate = function (hs_eta1cW6l3) {
        return hs_a25uJW4.hscall(hs_eta1cW6l3);
    };
    this.hs_until.evaluate = function (hs_p26D8sr, hs_f26D8st, hs_x26D8sq) {
        var hs_wild26D8AA = hs_p26D8sr.hscall(hs_x26D8sq);
        switch (hs_wild26D8AA.tag) {
        case 1:
            var hs_sat26D8AB = new $hs.Thunk();
            hs_sat26D8AB.evaluateOnce = function () {
                return hs_f26D8st.hscall(hs_x26D8sq);
            };
            return $hs.modules.GHCziBase.hs_until.hscall(hs_p26D8sr, hs_f26D8st, hs_sat26D8AB);
        case 2:
            if (hs_x26D8sq.notEvaluated) {
                return hs_x26D8sq.hscall();
            } else {
                return hs_x26D8sq;
            }
        }
    };
    this.hs_flip.evaluate = function (hs_f26D8sA, hs_x26D8sz, hs_y26D8sy) {
        return hs_f26D8sA.hscall(hs_y26D8sy, hs_x26D8sz);
    };
    this.hs_zi.evaluate = function (hs_eta26D8sG, hs_eta126D8sF, hs_x26D8sE) {
        var hs_sat26D8AC = new $hs.Thunk();
        hs_sat26D8AC.evaluateOnce = function () {
            return hs_eta126D8sF.hscall(hs_x26D8sE);
        };
        return hs_eta26D8sG.hscall(hs_sat26D8AC);
    };
    this.hs_const.evaluate = function (hs_x26D8sK, hs_ds26D8sL) {
        if (hs_x26D8sK.notEvaluated) {
            return hs_x26D8sK.hscall();
        } else {
            return hs_x26D8sK;
        }
    };
    this.hs_asTypeOf.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return $hs.modules.GHCziBase.hs_const.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_zddmzlzd.evaluate = function (hs_zddFunctor26D8sO, hs_x26D8sQ) {
        var hs_sat26D8AE = new $hs.Func(1);
        hs_sat26D8AE.evaluate = function (hs_ds26D8AD) {
            if (hs_x26D8sQ.notEvaluated) {
                return hs_x26D8sQ.hscall();
            } else {
                return hs_x26D8sQ;
            }
        };
        return $hs.modules.GHCziBase.hs_fmap.hscall(hs_zddFunctor26D8sO, hs_sat26D8AE);
    };
    this.hs_id.evaluate = function (hs_x26D8sT) {
        if (hs_x26D8sT.notEvaluated) {
            return hs_x26D8sT.hscall();
        } else {
            return hs_x26D8sT;
        }
    };
    this.hs_compareIntzh.evaluate = function (hs_xzh26D8sW, hs_yzh26D8sX) {
        var hs_wild26D8AG = hs_xzh26D8sW < hs_yzh26D8sX ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26D8AG.tag) {
        case 1:
            var hs_wild126D8AF = hs_xzh26D8sW == hs_yzh26D8sX ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild126D8AF.tag) {
            case 1:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    this.hs_compareInt.evaluate = function (hs_ds26D8t2, hs_ds126D8t5) {
        var hs_wild26D8AI = hs_ds26D8t2;
        if (hs_ds26D8t2.notEvaluated) {
            hs_wild26D8AI = hs_ds26D8t2.hscall();
        }
        var hs_xzh26D8t8 = hs_wild26D8AI.data[0];
        var hs_wild126D8AH = hs_ds126D8t5;
        if (hs_ds126D8t5.notEvaluated) {
            hs_wild126D8AH = hs_ds126D8t5.hscall();
        }
        var hs_yzh26D8t9 = hs_wild126D8AH.data[0];
        return $hs.modules.GHCziBase.hs_compareIntzh.hscall(hs_xzh26D8t8, hs_yzh26D8t9);
    };
    this.hs_maxInt.data = [2147483647];
    this.hs_minInt.data = [-2147483648];
    this.hs_twoInt.data = [2];
    this.hs_oneInt.data = [1];
    this.hs_zzeroInt.data = [0];
    this.hs_ord.evaluate = function (hs_ds26D8tb) {
        var hs_wild26D8AK = hs_ds26D8tb;
        if (hs_ds26D8tb.notEvaluated) {
            hs_wild26D8AK = hs_ds26D8tb.hscall();
        }
        var hs_czh26D8te = hs_wild26D8AK.data[0];
        var hs_sat26D8AJ = hs_czh26D8te.charCodeAt(0);
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26D8AJ];
        return $res;
    };
    this.hs_unsafeChr.evaluate = function (hs_ds26D8th) {
        var hs_wild26D8AM = hs_ds26D8th;
        if (hs_ds26D8th.notEvaluated) {
            hs_wild26D8AM = hs_ds26D8th.hscall();
        }
        var hs_izh26D8tk = hs_wild26D8AM.data[0];
        var hs_sat26D8AL = String.fromCharCode(hs_izh26D8tk);
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26D8AL];
        return $res;
    };
    this.hs_mapFB.evaluate = function (hs_eta26D8ts, hs_eta126D8tr, hs_x26D8tq, hs_ys26D8tu) {
        var hs_sat26D8AN = new $hs.Thunk();
        hs_sat26D8AN.evaluateOnce = function () {
            return hs_eta126D8tr.hscall(hs_x26D8tq);
        };
        return hs_eta26D8ts.hscall(hs_sat26D8AN, hs_ys26D8tu);
    };
    hs_zdcfail25uJXg.evaluate = function (hs_ds26D8ty) {
        var $res = new $hs.Data(1);
        $res.data = [];
        return $res;
    };
    hs_zdcreturn25uJXk.evaluate = function (hs_x26D8tC) {
        var $res = new $hs.Data(2);
        $res.data = [hs_x26D8tC, $hs.modules.GHCziTypes.hs_ZMZN];
        return $res;
    };
    this.hs_zdfEqInt.data = [$hs.modules.GHCziBase.hs_eqInt, $hs.modules.GHCziBase.hs_neInt];
    this.hs_zdfOrdInt.data = [$hs.modules.GHCziBase.hs_zdfEqInt, $hs.modules.GHCziBase.hs_compareInt, $hs.modules.GHCziBase.hs_ltInt, $hs.modules.GHCziBase.hs_geInt, $hs.modules.GHCziBase.hs_gtInt, $hs.modules.GHCziBase.hs_leInt, hs_zdcmax25uJXq, hs_zdcmin25uJXo];
    hs_zdcmin25uJXo.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmin.hscall($hs.modules.GHCziBase.hs_zdfOrdInt);
    };
    hs_zdcmax25uJXq.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmax.hscall($hs.modules.GHCziBase.hs_zdfOrdInt);
    };
    hs_zdcfail125uJXs.evaluate = function (hs_s26D8tK) {
        return $hs.modules.GHCziIO.hs_failIO.hscall(hs_s26D8tK);
    };
    this.hs_zd.evaluate = function (hs_eta26D8tO, hs_eta126D8tN) {
        return hs_eta26D8tO.hscall(hs_eta126D8tN);
    };
    this.hs_breakpointCond.evaluate = function (hs_ds26D8tS, hs_r26D8tR) {
        if (hs_r26D8tR.notEvaluated) {
            return hs_r26D8tR.hscall();
        } else {
            return hs_r26D8tR;
        }
    };
    this.hs_breakpoint.evaluate = function (hs_r26D8tU) {
        if (hs_r26D8tU.notEvaluated) {
            return hs_r26D8tU.hscall();
        } else {
            return hs_r26D8tU;
        }
    };
    this.hs_lazzy.evaluate = function (hs_x26D8tW) {
        if (hs_x26D8tW.notEvaluated) {
            return hs_x26D8tW.hscall();
        } else {
            return hs_x26D8tW;
        }
    };
    hs_a125uJXI.evaluate = function (hs_ds26D8u3, hs_k26D8u8, hs_s26D8u2) {
        var hs_wild26D8AO = hs_ds26D8u3.hscall(hs_s26D8u2);
        var hs_newzus26D8u7 = hs_wild26D8AO[0];
        return hs_k26D8u8.hscall(hs_newzus26D8u7);
    };
    this.hs_thenIO.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a125uJXI.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_assert.evaluate = function (hs_zupred26D8uc, hs_r26D8ub) {
        if (hs_r26D8ub.notEvaluated) {
            return hs_r26D8ub.hscall();
        } else {
            return hs_r26D8ub;
        }
    };
    this.hs_otherwise.data = [];
    hs_a225uJXY.evaluate = function (hs_x26D8ui, hs_s26D8uh) {
        return [hs_s26D8uh, hs_x26D8ui];
    };
    this.hs_returnIO.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a225uJXY.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_zdcreturn125uJY4.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a225uJXY.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a325uJY6.evaluate = function (hs_ds26D8ur, hs_k26D8ux, hs_s26D8uq) {
        var hs_wild26D8AQ = hs_ds26D8ur.hscall(hs_s26D8uq);
        var hs_newzus26D8uw = hs_wild26D8AQ[0];
        var hs_a426D8uv = hs_wild26D8AQ[1];
        return hs_k26D8ux.hscall(hs_a426D8uv, hs_newzus26D8uw);
    };
    this.hs_bindIO.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a325uJY6.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_zdczgzgze25uJYj.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a325uJY6.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_zdfMonadIO.data = [hs_a325uJY6, hs_zdczgzg25uJYl, hs_a225uJXY, hs_zdcfail125uJXs];
    hs_zdczgzg25uJYl.evaluate = function (hs_eta26D8uE, hs_eta126D8uG) {
        var hs_sat26D8AS = new $hs.Func(1);
        hs_sat26D8AS.evaluate = function (hs_ds26D8AR) {
            if (hs_eta126D8uG.notEvaluated) {
                return hs_eta126D8uG.hscall();
            } else {
                return hs_eta126D8uG;
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_eta26D8uE, hs_sat26D8AS);
    };
    hs_zdcfmap25uJYt.evaluate = function (hs_f26D8uP, hs_x26D8uM) {
        var hs_sat26D8AU = new $hs.Func(1);
        hs_sat26D8AU.evaluate = function (hs_x126D8uO) {
            var hs_sat26D8AT = new $hs.Thunk();
            hs_sat26D8AT.evaluateOnce = function () {
                return hs_f26D8uP.hscall(hs_x126D8uO);
            };
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D8AT);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_x26D8uM, hs_sat26D8AU);
    };
    this.hs_zdfFunctorIO.data = [hs_zdcfmap25uJYt, hs_zdczlzd25uJYD];
    hs_zdczlzd25uJYD.evaluate = function (hs_x26D8uW) {
        var hs_sat26D8AW = new $hs.Func(1);
        hs_sat26D8AW.evaluate = function (hs_ds26D8AV) {
            if (hs_x26D8uW.notEvaluated) {
                return hs_x26D8uW.hscall();
            } else {
                return hs_x26D8uW;
            }
        };
        return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.GHCziBase.hs_zdfFunctorIO, hs_sat26D8AW);
    };
    this.hs_unpackAppendCStringzh.evaluate = function (hs_addr26D8v3, hs_rest26D8vb) {
        var hs_unpack26D8v8 = new $hs.Func(1);
        hs_unpack26D8v8.evaluate = function (hs_nh26D8v4) {
            var hs_ch26D8v5 = hs_addr26D8v3.charAt(hs_nh26D8v4);
            var hs_wild26D8AY = hs_ch26D8v5 == "\x00" ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild26D8AY.tag) {
            case 1:
                var hs_sat26D8AZ = new $hs.Thunk();
                hs_sat26D8AZ.evaluateOnce = function () {
                    var hs_sat26D8AX = ($hs.Int.addCarry(hs_nh26D8v4, 1, 0))[0];
                    return hs_unpack26D8v8.hscall(hs_sat26D8AX);
                };
                var hs_sat26D8B0 = new $hs.Data(1);
                hs_sat26D8B0.data = [hs_ch26D8v5];
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26D8B0, hs_sat26D8AZ];
                return $res;
            case 2:
                if (hs_rest26D8vb.notEvaluated) {
                    return hs_rest26D8vb.hscall();
                } else {
                    return hs_rest26D8vb;
                }
            }
        };
        return hs_unpack26D8v8.hscall(0);
    };
    this.hs_unpackCStringUtf8zh.evaluate = function (hs_addr26D8vg) {
        var hs_unpack26D8w3 = new $hs.Func(1);
        hs_unpack26D8w3.evaluate = function (hs_nh26D8vh) {
            var hs_ch26D8vi = hs_addr26D8vg.charAt(hs_nh26D8vh);
            var hs_wild26D8B5 = hs_ch26D8vi == "\x00" ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild26D8B5.tag) {
            case 1:
                var hs_wild126D8B4 = hs_ch26D8vi <= "\x7f" ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                switch (hs_wild126D8B4.tag) {
                case 1:
                    var hs_wild226D8B3 = hs_ch26D8vi <= "\xdf" ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild226D8B3.tag) {
                    case 1:
                        var hs_wild326D8B2 = hs_ch26D8vi <= "\xef" ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                        switch (hs_wild326D8B2.tag) {
                        case 1:
                            var hs_sat26D8B7 = new $hs.Thunk();
                            hs_sat26D8B7.evaluateOnce = function () {
                                var hs_sat26D8B1 = ($hs.Int.addCarry(hs_nh26D8vh, 4, 0))[0];
                                return hs_unpack26D8w3.hscall(hs_sat26D8B1);
                            };
                            var hs_sat26D8vI = ($hs.Int.addCarry(hs_nh26D8vh, 3, 0))[0];
                            var hs_sat26D8vJ = hs_addr26D8vg.charAt(hs_sat26D8vI);
                            var hs_sat26D8vK = hs_sat26D8vJ.charCodeAt(0);
                            var hs_sat26D8w0 = ($hs.Int.addCarry(hs_sat26D8vK, ~128, 1))[0];
                            var hs_sat26D8vL = ($hs.Int.addCarry(hs_nh26D8vh, 2, 0))[0];
                            var hs_sat26D8vM = hs_addr26D8vg.charAt(hs_sat26D8vL);
                            var hs_sat26D8vN = hs_sat26D8vM.charCodeAt(0);
                            var hs_sat26D8vO = ($hs.Int.addCarry(hs_sat26D8vN, ~128, 1))[0];
                            var hs_sat26D8vY = hs_sat26D8vO << 6;
                            var hs_sat26D8vP = ($hs.Int.addCarry(hs_nh26D8vh, 1, 0))[0];
                            var hs_sat26D8vQ = hs_addr26D8vg.charAt(hs_sat26D8vP);
                            var hs_sat26D8vR = hs_sat26D8vQ.charCodeAt(0);
                            var hs_sat26D8vS = ($hs.Int.addCarry(hs_sat26D8vR, ~128, 1))[0];
                            var hs_sat26D8vW = hs_sat26D8vS << 12;
                            var hs_sat26D8vT = hs_ch26D8vi.charCodeAt(0);
                            var hs_sat26D8vU = ($hs.Int.addCarry(hs_sat26D8vT, ~240, 1))[0];
                            var hs_sat26D8vV = hs_sat26D8vU << 18;
                            var hs_sat26D8vX = ($hs.Int.addCarry(hs_sat26D8vV, hs_sat26D8vW, 0))[0];
                            var hs_sat26D8vZ = ($hs.Int.addCarry(hs_sat26D8vX, hs_sat26D8vY, 0))[0];
                            var hs_sat26D8w1 = ($hs.Int.addCarry(hs_sat26D8vZ, hs_sat26D8w0, 0))[0];
                            var hs_sat26D8B6 = String.fromCharCode(hs_sat26D8w1);
                            var hs_sat26D8B8 = new $hs.Data(1);
                            hs_sat26D8B8.data = [hs_sat26D8B6];
                            var $res = new $hs.Data(2);
                            $res.data = [hs_sat26D8B8, hs_sat26D8B7];
                            return $res;
                        case 2:
                            var hs_sat26D8Bb = new $hs.Thunk();
                            hs_sat26D8Bb.evaluateOnce = function () {
                                var hs_sat26D8B9 = ($hs.Int.addCarry(hs_nh26D8vh, 3, 0))[0];
                                return hs_unpack26D8w3.hscall(hs_sat26D8B9);
                            };
                            var hs_sat26D8wl = ($hs.Int.addCarry(hs_nh26D8vh, 2, 0))[0];
                            var hs_sat26D8wm = hs_addr26D8vg.charAt(hs_sat26D8wl);
                            var hs_sat26D8wn = hs_sat26D8wm.charCodeAt(0);
                            var hs_sat26D8wx = ($hs.Int.addCarry(hs_sat26D8wn, ~128, 1))[0];
                            var hs_sat26D8wo = ($hs.Int.addCarry(hs_nh26D8vh, 1, 0))[0];
                            var hs_sat26D8wp = hs_addr26D8vg.charAt(hs_sat26D8wo);
                            var hs_sat26D8wq = hs_sat26D8wp.charCodeAt(0);
                            var hs_sat26D8wr = ($hs.Int.addCarry(hs_sat26D8wq, ~128, 1))[0];
                            var hs_sat26D8wv = hs_sat26D8wr << 6;
                            var hs_sat26D8ws = hs_ch26D8vi.charCodeAt(0);
                            var hs_sat26D8wt = ($hs.Int.addCarry(hs_sat26D8ws, ~224, 1))[0];
                            var hs_sat26D8wu = hs_sat26D8wt << 12;
                            var hs_sat26D8ww = ($hs.Int.addCarry(hs_sat26D8wu, hs_sat26D8wv, 0))[0];
                            var hs_sat26D8wy = ($hs.Int.addCarry(hs_sat26D8ww, hs_sat26D8wx, 0))[0];
                            var hs_sat26D8Ba = String.fromCharCode(hs_sat26D8wy);
                            var hs_sat26D8Bc = new $hs.Data(1);
                            hs_sat26D8Bc.data = [hs_sat26D8Ba];
                            var $res = new $hs.Data(2);
                            $res.data = [hs_sat26D8Bc, hs_sat26D8Bb];
                            return $res;
                        }
                    case 2:
                        var hs_sat26D8Bf = new $hs.Thunk();
                        hs_sat26D8Bf.evaluateOnce = function () {
                            var hs_sat26D8Bd = ($hs.Int.addCarry(hs_nh26D8vh, 2, 0))[0];
                            return hs_unpack26D8w3.hscall(hs_sat26D8Bd);
                        };
                        var hs_sat26D8wL = ($hs.Int.addCarry(hs_nh26D8vh, 1, 0))[0];
                        var hs_sat26D8wM = hs_addr26D8vg.charAt(hs_sat26D8wL);
                        var hs_sat26D8wN = hs_sat26D8wM.charCodeAt(0);
                        var hs_sat26D8wR = ($hs.Int.addCarry(hs_sat26D8wN, ~128, 1))[0];
                        var hs_sat26D8wO = hs_ch26D8vi.charCodeAt(0);
                        var hs_sat26D8wP = ($hs.Int.addCarry(hs_sat26D8wO, ~192, 1))[0];
                        var hs_sat26D8wQ = hs_sat26D8wP << 6;
                        var hs_sat26D8wS = ($hs.Int.addCarry(hs_sat26D8wQ, hs_sat26D8wR, 0))[0];
                        var hs_sat26D8Be = String.fromCharCode(hs_sat26D8wS);
                        var hs_sat26D8Bg = new $hs.Data(1);
                        hs_sat26D8Bg.data = [hs_sat26D8Be];
                        var $res = new $hs.Data(2);
                        $res.data = [hs_sat26D8Bg, hs_sat26D8Bf];
                        return $res;
                    }
                case 2:
                    var hs_sat26D8Bi = new $hs.Thunk();
                    hs_sat26D8Bi.evaluateOnce = function () {
                        var hs_sat26D8Bh = ($hs.Int.addCarry(hs_nh26D8vh, 1, 0))[0];
                        return hs_unpack26D8w3.hscall(hs_sat26D8Bh);
                    };
                    var hs_sat26D8Bj = new $hs.Data(1);
                    hs_sat26D8Bj.data = [hs_ch26D8vi];
                    var $res = new $hs.Data(2);
                    $res.data = [hs_sat26D8Bj, hs_sat26D8Bi];
                    return $res;
                }
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        };
        return hs_unpack26D8w3.hscall(0);
    };
    this.hs_eqString.evaluate = function (hs_ds26D8x1, hs_ds126D8x3) {
        var hs_wild26D8Bl = hs_ds26D8x1;
        if (hs_ds26D8x1.notEvaluated) {
            hs_wild26D8Bl = hs_ds26D8x1.hscall();
        }
        switch (hs_wild26D8Bl.tag) {
        case 1:
            var hs_wild126D8Bk = hs_ds126D8x3;
            if (hs_ds126D8x3.notEvaluated) {
                hs_wild126D8Bk = hs_ds126D8x3.hscall();
            }
            switch (hs_wild126D8Bk.tag) {
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
            var hs_c126D8xc = hs_wild26D8Bl.data[0];
            var hs_cs126D8xf = hs_wild26D8Bl.data[1];
            var hs_wild126D8Bo = hs_ds126D8x3;
            if (hs_ds126D8x3.notEvaluated) {
                hs_wild126D8Bo = hs_ds126D8x3.hscall();
            }
            switch (hs_wild126D8Bo.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_c226D8xd = hs_wild126D8Bo.data[0];
                var hs_cs226D8xg = hs_wild126D8Bo.data[1];
                var hs_sat26D8Bp = new $hs.Thunk();
                hs_sat26D8Bp.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_eqString.hscall(hs_cs126D8xf, hs_cs226D8xg);
                };
                var hs_sat26D8Bq = new $hs.Thunk();
                hs_sat26D8Bq.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c126D8xc, hs_c226D8xd);
                };
                return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26D8Bq, hs_sat26D8Bp);
            }
        }
    };
    this.hs_build.evaluate = function (hs_eta26D8xj) {
        return hs_eta26D8xj.hscall($hs.modules.GHCziTypes.hs_ZC, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_unpackCStringzh.evaluate = function (hs_addr26D8xo) {
        var hs_unpack26D8xt = new $hs.Func(1);
        hs_unpack26D8xt.evaluate = function (hs_nh26D8xp) {
            var hs_ch26D8xq = hs_addr26D8xo.charAt(hs_nh26D8xp);
            var hs_wild26D8Bs = hs_ch26D8xq == "\x00" ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild26D8Bs.tag) {
            case 1:
                var hs_sat26D8Bt = new $hs.Thunk();
                hs_sat26D8Bt.evaluateOnce = function () {
                    var hs_sat26D8Br = ($hs.Int.addCarry(hs_nh26D8xp, 1, 0))[0];
                    return hs_unpack26D8xt.hscall(hs_sat26D8Br);
                };
                var hs_sat26D8Bu = new $hs.Data(1);
                hs_sat26D8Bu.data = [hs_ch26D8xq];
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26D8Bu, hs_sat26D8Bt];
                return $res;
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        };
        return hs_unpack26D8xt.hscall(0);
    };
    this.hs_unpackFoldrCStringzh.evaluate = function (hs_addr26D8xC, hs_f26D8xG, hs_zz26D8xL) {
        var hs_unpack26D8xI = new $hs.Func(1);
        hs_unpack26D8xI.evaluate = function (hs_nh26D8xD) {
            var hs_ch26D8xE = hs_addr26D8xC.charAt(hs_nh26D8xD);
            var hs_wild26D8Bw = hs_ch26D8xE == "\x00" ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild26D8Bw.tag) {
            case 1:
                var hs_sat26D8Bx = new $hs.Thunk();
                hs_sat26D8Bx.evaluateOnce = function () {
                    var hs_sat26D8Bv = ($hs.Int.addCarry(hs_nh26D8xD, 1, 0))[0];
                    return hs_unpack26D8xI.hscall(hs_sat26D8Bv);
                };
                var hs_sat26D8By = new $hs.Data(1);
                hs_sat26D8By.data = [hs_ch26D8xE];
                return hs_f26D8xG.hscall(hs_sat26D8By, hs_sat26D8Bx);
            case 2:
                if (hs_zz26D8xL.notEvaluated) {
                    return hs_zz26D8xL.hscall();
                } else {
                    return hs_zz26D8xL;
                }
            }
        };
        return hs_unpack26D8xI.hscall(0);
    };
    this.hs_augment.evaluate = function (hs_eta26D8xP, hs_eta126D8xO) {
        return hs_eta26D8xP.hscall($hs.modules.GHCziTypes.hs_ZC, hs_eta126D8xO);
    };
    this.hs_map.evaluate = function (hs_ds26D8xX, hs_ds126D8xS) {
        var hs_wild26D8Bz = hs_ds126D8xS;
        if (hs_ds126D8xS.notEvaluated) {
            hs_wild26D8Bz = hs_ds126D8xS.hscall();
        }
        switch (hs_wild26D8Bz.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_x26D8xW = hs_wild26D8Bz.data[0];
            var hs_xs26D8xZ = hs_wild26D8Bz.data[1];
            var hs_sat26D8BA = new $hs.Thunk();
            hs_sat26D8BA.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_map.hscall(hs_ds26D8xX, hs_xs26D8xZ);
            };
            var hs_sat26D8BB = new $hs.Thunk();
            hs_sat26D8BB.evaluateOnce = function () {
                return hs_ds26D8xX.hscall(hs_x26D8xW);
            };
            var $res = new $hs.Data(2);
            $res.data = [hs_sat26D8BB, hs_sat26D8BA];
            return $res;
        }
    };
    this.hs_foldr.evaluate = function (hs_eta26D8ye, hs_eta126D8y8, hs_eta226D8yg) {
        var hs_go26D8yd = new $hs.Func(1);
        hs_go26D8yd.evaluate = function (hs_ds26D8y6) {
            var hs_wild26D8BC = hs_ds26D8y6;
            if (hs_ds26D8y6.notEvaluated) {
                hs_wild26D8BC = hs_ds26D8y6.hscall();
            }
            switch (hs_wild26D8BC.tag) {
            case 1:
                if (hs_eta126D8y8.notEvaluated) {
                    return hs_eta126D8y8.hscall();
                } else {
                    return hs_eta126D8y8;
                }
            case 2:
                var hs_y26D8yb = hs_wild26D8BC.data[0];
                var hs_ys26D8yc = hs_wild26D8BC.data[1];
                var hs_sat26D8BD = new $hs.Thunk();
                hs_sat26D8BD.evaluateOnce = function () {
                    return hs_go26D8yd.hscall(hs_ys26D8yc);
                };
                return hs_eta26D8ye.hscall(hs_y26D8yb, hs_sat26D8BD);
            }
        };
        return hs_go26D8yd.hscall(hs_eta226D8yg);
    };
    this.hs_zpzp.evaluate = function (hs_ds26D8yj, hs_ys26D8yl) {
        var hs_wild26D8BE = hs_ds26D8yj;
        if (hs_ds26D8yj.notEvaluated) {
            hs_wild26D8BE = hs_ds26D8yj.hscall();
        }
        switch (hs_wild26D8BE.tag) {
        case 1:
            if (hs_ys26D8yl.notEvaluated) {
                return hs_ys26D8yl.hscall();
            } else {
                return hs_ys26D8yl;
            }
        case 2:
            var hs_x26D8yo = hs_wild26D8BE.data[0];
            var hs_xs26D8yp = hs_wild26D8BE.data[1];
            var hs_sat26D8BF = new $hs.Thunk();
            hs_sat26D8BF.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_xs26D8yp, hs_ys26D8yl);
            };
            var $res = new $hs.Data(2);
            $res.data = [hs_x26D8yo, hs_sat26D8BF];
            return $res;
        }
    };
    this.hs_chr.evaluate = function (hs_i26D8ys) {
        var hs_wild26D8yB = hs_i26D8ys;
        if (hs_i26D8ys.notEvaluated) {
            hs_wild26D8yB = hs_i26D8ys.hscall();
        }
        var hs_izh26D8yv = hs_wild26D8yB.data[0];
        var hs_sat26D8BI = 1114111;
        var hs_sat26D8BH = hs_izh26D8yv;
        var hs_wild126D8BG = $hs.Word.le(hs_sat26D8BH, hs_sat26D8BI) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild126D8BG.tag) {
        case 1:
            var hs_sat26D8BK = new $hs.Thunk();
            hs_sat26D8BK.evaluateOnce = function () {
                var hs_sat26D8BJ = new $hs.Data(1);
                hs_sat26D8BJ.data = [9];
                return $hs.modules.GHCziShow.hs_showSignedInt.hscall(hs_sat26D8BJ, hs_wild26D8yB, $hs.modules.GHCziTypes.hs_ZMZN);
            };
            var hs_sat26D8BM = new $hs.Thunk();
            hs_sat26D8BM.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Prelude.chr: bad argument: \x00");
            };
            var hs_sat26D8BL = $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D8BM, hs_sat26D8BK);
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26D8BL);
        case 2:
            var hs_sat26D8BN = String.fromCharCode(hs_izh26D8yv);
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26D8BN];
            return $res;
        }
    };
    this.hs_zdfFunctorZMZN.data = [$hs.modules.GHCziBase.hs_map, hs_zdczlzd125uK2q];
    hs_zdczlzd125uK2q.evaluate = function (hs_x26D8yJ) {
        var hs_sat26D8BP = new $hs.Func(1);
        hs_sat26D8BP.evaluate = function (hs_ds26D8BO) {
            if (hs_x26D8yJ.notEvaluated) {
                return hs_x26D8yJ.hscall();
            } else {
                return hs_x26D8yJ;
            }
        };
        return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.GHCziBase.hs_zdfFunctorZMZN, hs_sat26D8BP);
    };
    hs_zdczgzgze125uK2w.evaluate = function (hs_m26D8z1, hs_k26D8yW) {
        var hs_go26D8yZ = new $hs.Func(1);
        hs_go26D8yZ.evaluate = function (hs_ds26D8yR) {
            var hs_wild26D8BQ = hs_ds26D8yR;
            if (hs_ds26D8yR.notEvaluated) {
                hs_wild26D8BQ = hs_ds26D8yR.hscall();
            }
            switch (hs_wild26D8BQ.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_y26D8yV = hs_wild26D8BQ.data[0];
                var hs_ys26D8yY = hs_wild26D8BQ.data[1];
                var hs_sat26D8BR = new $hs.Thunk();
                hs_sat26D8BR.evaluateOnce = function () {
                    return hs_go26D8yZ.hscall(hs_ys26D8yY);
                };
                var hs_sat26D8BS = new $hs.Thunk();
                hs_sat26D8BS.evaluateOnce = function () {
                    return hs_k26D8yW.hscall(hs_y26D8yV);
                };
                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D8BS, hs_sat26D8BR);
            }
        };
        return hs_go26D8yZ.hscall(hs_m26D8z1);
    };
    hs_zdczgzg125uK2N.evaluate = function (hs_m26D8zg, hs_k26D8zc) {
        var hs_go26D8ze = new $hs.Func(1);
        hs_go26D8ze.evaluate = function (hs_ds26D8z8) {
            var hs_wild26D8BT = hs_ds26D8z8;
            if (hs_ds26D8z8.notEvaluated) {
                hs_wild26D8BT = hs_ds26D8z8.hscall();
            }
            switch (hs_wild26D8BT.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_ys26D8zd = hs_wild26D8BT.data[1];
                var hs_sat26D8BV = new $hs.Thunk();
                hs_sat26D8BV.evaluateOnce = function () {
                    return hs_go26D8ze.hscall(hs_ys26D8zd);
                };
                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_k26D8zc, hs_sat26D8BV);
            }
        };
        return hs_go26D8ze.hscall(hs_m26D8zg);
    };
    this.hs_zdfMonadZMZN.data = [hs_zdczgzgze125uK2w, hs_zdczgzg125uK2N, hs_zdcreturn25uJXk, hs_zdcfail25uJXg];
    this.hs_O.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
    this.hs_DZCFunctor.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_DZCMonad.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
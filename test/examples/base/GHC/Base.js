
$hs.modules.GHCziBase = new $hs.Module();
$hs.modules.GHCziBase.dependencies = ["GHC.Types", "GHC.CString", "GHC.Show", "GHC.Err", "GHC.Classes", "GHC.IO"];
$hs.modules.GHCziBase.initBeforeDependencies = function () {
    this.hs_zgzgze = new $hs.Func(1);
    this.hs_zgzg = new $hs.Func(1);
    this.hs_return = new $hs.Func(1);
    this.hs_fail = new $hs.Func(1);
    this.hs_fmap = new $hs.Func(1);
    this.hs_zlzd = new $hs.Func(1);
    this.hs_zddmfail = new $hs.Func(2);
    this.hs_zddmzgzg = new $hs.Func(3);
    this.hs_iShiftRLzh = new $hs.Func(2);
    this.hs_iShiftRAzh = new $hs.Func(2);
    this.hs_iShiftLzh = new $hs.Func(2);
    this.hs_shiftRLzh = new $hs.Func(2);
    this.hs_shiftLzh = new $hs.Func(2);
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
    this.hs_maxInt = new $hs.Data(1);
    this.hs_minInt = new $hs.Data(1);
    this.hs_twoInt = new $hs.Data(1);
    this.hs_oneInt = new $hs.Data(1);
    this.hs_zzeroInt = new $hs.Data(1);
    this.hs_ord = new $hs.Func(1);
    this.hs_unsafeChr = new $hs.Func(1);
    this.hs_mapFB = new $hs.Func(4);
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
    this.hs_eqString = new $hs.Func(2);
    this.hs_build = new $hs.Func(1);
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
    this.hs_zgzgze.evaluate = function (hs_tpl26CJot) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_tpl26CJot);
    };
    this.hs_zgzg.notEvaluated = true;
    this.hs_zgzg.evaluate = function (hs_tpl26CJoB) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_tpl26CJoB);
    };
    this.hs_return.notEvaluated = true;
    this.hs_return.evaluate = function (hs_tpl26CJoJ) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_tpl26CJoJ);
    };
    this.hs_fail.notEvaluated = true;
    this.hs_fail.evaluate = function (hs_tpl26CJoR) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_tpl26CJoR);
    };
    this.hs_fmap.notEvaluated = true;
    this.hs_fmap.evaluate = function (hs_tpl26CJoZ) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_tpl26CJoZ);
    };
    this.hs_zlzd.notEvaluated = true;
    this.hs_zlzd.evaluate = function (hs_tpl26CJp5) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_tpl26CJp5);
    };
    this.hs_zddmfail.notEvaluated = true;
    this.hs_zddmfail.evaluate = function (hs_zddMonad26CJpd, hs_eta26CJpc) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_zddMonad26CJpd, hs_eta26CJpc);
    };
    this.hs_zddmzgzg.notEvaluated = true;
    this.hs_zddmzgzg.evaluate = function (hs_zddMonad26CJph, hs_m26CJpi, hs_k26CJpk) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_zddMonad26CJph, hs_m26CJpi, hs_k26CJpk);
    };
    this.hs_iShiftRLzh.notEvaluated = true;
    this.hs_iShiftRLzh.evaluate = function (hs_a426CJpr, hs_b26CJpp) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_a426CJpr, hs_b26CJpp);
    };
    this.hs_iShiftRAzh.notEvaluated = true;
    this.hs_iShiftRAzh.evaluate = function (hs_a426CJpw, hs_b26CJpu) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_a426CJpw, hs_b26CJpu);
    };
    this.hs_iShiftLzh.notEvaluated = true;
    this.hs_iShiftLzh.evaluate = function (hs_a426CJpC, hs_b26CJpA) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_a426CJpC, hs_b26CJpA);
    };
    this.hs_shiftRLzh.notEvaluated = true;
    this.hs_shiftRLzh.evaluate = function (hs_a426CJpH, hs_b26CJpF) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_a426CJpH, hs_b26CJpF);
    };
    this.hs_shiftLzh.notEvaluated = true;
    this.hs_shiftLzh.evaluate = function (hs_a426CJpM, hs_b26CJpK) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_a426CJpM, hs_b26CJpK);
    };
    this.hs_negateInt.notEvaluated = true;
    this.hs_negateInt.evaluate = function (hs_ds26CJpO) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_ds26CJpO);
    };
    this.hs_remInt.notEvaluated = true;
    this.hs_remInt.evaluate = function (hs_ds26CJpV, hs_ds126CJpY) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_ds26CJpV, hs_ds126CJpY);
    };
    this.hs_quotInt.notEvaluated = true;
    this.hs_quotInt.evaluate = function (hs_ds26CJq7, hs_ds126CJqa) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_ds26CJq7, hs_ds126CJqa);
    };
    this.hs_timesInt.notEvaluated = true;
    this.hs_timesInt.evaluate = function (hs_ds26CJqj, hs_ds126CJqm) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_ds26CJqj, hs_ds126CJqm);
    };
    this.hs_minusInt.notEvaluated = true;
    this.hs_minusInt.evaluate = function (hs_ds26CJqu, hs_ds126CJqx) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_ds26CJqu, hs_ds126CJqx);
    };
    this.hs_plusInt.notEvaluated = true;
    this.hs_plusInt.evaluate = function (hs_ds26CJqF, hs_ds126CJqI) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_ds26CJqF, hs_ds126CJqI);
    };
    this.hs_modIntzh.notEvaluated = true;
    this.hs_modIntzh.evaluate = function (hs_xzh26CJqQ, hs_yzh26CJqR) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_xzh26CJqQ, hs_yzh26CJqR);
    };
    this.hs_modInt.notEvaluated = true;
    this.hs_modInt.evaluate = function (hs_ds26CJr5, hs_ds126CJr8) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_ds26CJr5, hs_ds126CJr8);
    };
    this.hs_divIntzh.notEvaluated = true;
    this.hs_divIntzh.evaluate = function (hs_xzh26CJrh, hs_yzh26CJrj) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_xzh26CJrh, hs_yzh26CJrj);
    };
    this.hs_divInt.notEvaluated = true;
    this.hs_divInt.evaluate = function (hs_ds26CJrx, hs_ds126CJrA) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_ds26CJrx, hs_ds126CJrA);
    };
    this.hs_getTag.notEvaluated = true;
    this.hs_getTag.evaluate = function (hs_eta26CJrI) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_eta26CJrI);
    };
    this.hs_unIO.notEvaluated = true;
    this.hs_unIO.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_until.notEvaluated = true;
    this.hs_until.evaluate = function (hs_p26CJrT, hs_f26CJrV, hs_x26CJrS) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_p26CJrT, hs_f26CJrV, hs_x26CJrS);
    };
    this.hs_flip.notEvaluated = true;
    this.hs_flip.evaluate = function (hs_f26CJs2, hs_x26CJs1, hs_y26CJs0) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_f26CJs2, hs_x26CJs1, hs_y26CJs0);
    };
    this.hs_zi.notEvaluated = true;
    this.hs_zi.evaluate = function (hs_eta26CJs8, hs_eta126CJs7, hs_x26CJs6) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_eta26CJs8, hs_eta126CJs7, hs_x26CJs6);
    };
    this.hs_const.notEvaluated = true;
    this.hs_const.evaluate = function (hs_x26CJsc, hs_ds26CJsd) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_x26CJsc, hs_ds26CJsd);
    };
    this.hs_asTypeOf.notEvaluated = true;
    this.hs_asTypeOf.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_zddmzlzd.notEvaluated = true;
    this.hs_zddmzlzd.evaluate = function (hs_zddFunctor26CJsg, hs_x26CJsi) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_zddFunctor26CJsg, hs_x26CJsi);
    };
    this.hs_id.notEvaluated = true;
    this.hs_id.evaluate = function (hs_x26CJsm) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_x26CJsm);
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
    this.hs_ord.evaluate = function (hs_ds26CJso) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_ds26CJso);
    };
    this.hs_unsafeChr.notEvaluated = true;
    this.hs_unsafeChr.evaluate = function (hs_ds26CJsu) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_ds26CJsu);
    };
    this.hs_mapFB.notEvaluated = true;
    this.hs_mapFB.evaluate = function (hs_eta26CJsF, hs_eta126CJsE, hs_x26CJsD, hs_ys26CJsH) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_eta26CJsF, hs_eta126CJsE, hs_x26CJsD, hs_ys26CJsH);
    };
    this.hs_zd.notEvaluated = true;
    this.hs_zd.evaluate = function (hs_eta26CJsU, hs_eta126CJsT) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_eta26CJsU, hs_eta126CJsT);
    };
    this.hs_breakpointCond.notEvaluated = true;
    this.hs_breakpointCond.evaluate = function (hs_ds26CJsY, hs_r26CJsX) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_ds26CJsY, hs_r26CJsX);
    };
    this.hs_breakpoint.notEvaluated = true;
    this.hs_breakpoint.evaluate = function (hs_r26CJt0) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_r26CJt0);
    };
    this.hs_lazzy.notEvaluated = true;
    this.hs_lazzy.evaluate = function (hs_x26CJt2) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_x26CJt2);
    };
    this.hs_thenIO.notEvaluated = true;
    this.hs_thenIO.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_assert.notEvaluated = true;
    this.hs_assert.evaluate = function (hs_zupred26CJth, hs_r26CJtg) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_zupred26CJth, hs_r26CJtg);
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
    this.hs_eqString.notEvaluated = true;
    this.hs_eqString.evaluate = function (hs_ds26CJu0, hs_ds126CJu2) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_ds26CJu0, hs_ds126CJu2);
    };
    this.hs_build.notEvaluated = true;
    this.hs_build.evaluate = function (hs_eta26CJui) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_eta26CJui);
    };
    this.hs_augment.notEvaluated = true;
    this.hs_augment.evaluate = function (hs_eta26CJum, hs_eta126CJul) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_eta26CJum, hs_eta126CJul);
    };
    this.hs_map.notEvaluated = true;
    this.hs_map.evaluate = function (hs_ds26CJuu, hs_ds126CJup) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_ds26CJuu, hs_ds126CJup);
    };
    this.hs_foldr.notEvaluated = true;
    this.hs_foldr.evaluate = function (hs_eta26CJuL, hs_eta126CJuF, hs_eta226CJuN) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_eta26CJuL, hs_eta126CJuF, hs_eta226CJuN);
    };
    this.hs_zpzp.notEvaluated = true;
    this.hs_zpzp.evaluate = function (hs_ds26CJuQ, hs_ys26CJuS) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_ds26CJuQ, hs_ys26CJuS);
    };
    this.hs_chr.notEvaluated = true;
    this.hs_chr.evaluate = function (hs_i26CJuZ) {
        $hs.modules.GHCziBase.loadDependencies();
        return this.evaluate(hs_i26CJuZ);
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
    this.hs_iShiftRLzh.notEvaluated = false;
    this.hs_iShiftRAzh.notEvaluated = false;
    this.hs_iShiftLzh.notEvaluated = false;
    this.hs_shiftRLzh.notEvaluated = false;
    this.hs_shiftLzh.notEvaluated = false;
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
    this.hs_eqString.notEvaluated = false;
    this.hs_build.notEvaluated = false;
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
    var hs_a25ukVw = new $hs.Func(1);
    var hs_zdcfail25ukWs = new $hs.Func(1);
    var hs_zdcreturn25ukWv = new $hs.Func(1);
    var hs_zdcfail125ukWy = new $hs.Func(1);
    var hs_a125ukWN = new $hs.Func(3);
    var hs_a225ukX2 = new $hs.Func(2);
    var hs_zdcreturn125ukX7 = new $hs.Func(2);
    var hs_a325ukX8 = new $hs.Func(3);
    var hs_zdczgzgze25ukXk = new $hs.Func(3);
    var hs_zdczgzg25ukXl = new $hs.Func(2);
    var hs_zdcfmap25ukXt = new $hs.Func(2);
    var hs_zdczlzd25ukXC = new $hs.Func(1);
    var hs_zdczlzd125ukYV = new $hs.Func(1);
    var hs_zdczgzgze125ukZ1 = new $hs.Func(2);
    var hs_zdczgzg125ukZh = new $hs.Func(2);
    this.hs_zgzgze.evaluate = function (hs_tpl26CJot) {
        var hs_tpl26CJvO = hs_tpl26CJot;
        if (hs_tpl26CJot.notEvaluated) {
            hs_tpl26CJvO = hs_tpl26CJot.hscall();
        }
        var hs_tpl26CJoz = hs_tpl26CJvO.data[0];
        if (hs_tpl26CJoz.notEvaluated) {
            return hs_tpl26CJoz.hscall();
        } else {
            return hs_tpl26CJoz;
        }
    };
    this.hs_zgzg.evaluate = function (hs_tpl26CJoB) {
        var hs_tpl26CJvS = hs_tpl26CJoB;
        if (hs_tpl26CJoB.notEvaluated) {
            hs_tpl26CJvS = hs_tpl26CJoB.hscall();
        }
        var hs_tpl26CJoH = hs_tpl26CJvS.data[1];
        if (hs_tpl26CJoH.notEvaluated) {
            return hs_tpl26CJoH.hscall();
        } else {
            return hs_tpl26CJoH;
        }
    };
    this.hs_return.evaluate = function (hs_tpl26CJoJ) {
        var hs_tpl26CJvW = hs_tpl26CJoJ;
        if (hs_tpl26CJoJ.notEvaluated) {
            hs_tpl26CJvW = hs_tpl26CJoJ.hscall();
        }
        var hs_tpl26CJoP = hs_tpl26CJvW.data[2];
        if (hs_tpl26CJoP.notEvaluated) {
            return hs_tpl26CJoP.hscall();
        } else {
            return hs_tpl26CJoP;
        }
    };
    this.hs_fail.evaluate = function (hs_tpl26CJoR) {
        var hs_tpl26CJw0 = hs_tpl26CJoR;
        if (hs_tpl26CJoR.notEvaluated) {
            hs_tpl26CJw0 = hs_tpl26CJoR.hscall();
        }
        var hs_tpl26CJoX = hs_tpl26CJw0.data[3];
        if (hs_tpl26CJoX.notEvaluated) {
            return hs_tpl26CJoX.hscall();
        } else {
            return hs_tpl26CJoX;
        }
    };
    this.hs_fmap.evaluate = function (hs_tpl26CJoZ) {
        var hs_tpl26CJw2 = hs_tpl26CJoZ;
        if (hs_tpl26CJoZ.notEvaluated) {
            hs_tpl26CJw2 = hs_tpl26CJoZ.hscall();
        }
        var hs_tpl26CJp3 = hs_tpl26CJw2.data[0];
        if (hs_tpl26CJp3.notEvaluated) {
            return hs_tpl26CJp3.hscall();
        } else {
            return hs_tpl26CJp3;
        }
    };
    this.hs_zlzd.evaluate = function (hs_tpl26CJp5) {
        var hs_tpl26CJw4 = hs_tpl26CJp5;
        if (hs_tpl26CJp5.notEvaluated) {
            hs_tpl26CJw4 = hs_tpl26CJp5.hscall();
        }
        var hs_tpl26CJp9 = hs_tpl26CJw4.data[1];
        if (hs_tpl26CJp9.notEvaluated) {
            return hs_tpl26CJp9.hscall();
        } else {
            return hs_tpl26CJp9;
        }
    };
    this.hs_zddmfail.evaluate = function (hs_zddMonad26CJpd, hs_eta26CJpc) {
        return $hs.modules.GHCziErr.hs_error.hscall(hs_eta26CJpc);
    };
    this.hs_zddmzgzg.evaluate = function (hs_zddMonad26CJph, hs_m26CJpi, hs_k26CJpk) {
        var hs_sat26CJw5 = new $hs.Func(1);
        hs_sat26CJw5.evaluate = function (hs_ds26CJpl) {
            if (hs_k26CJpk.notEvaluated) {
                return hs_k26CJpk.hscall();
            } else {
                return hs_k26CJpk;
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26CJph, hs_m26CJpi, hs_sat26CJw5);
    };
    this.hs_iShiftRLzh.evaluate = function (hs_a426CJpr, hs_b26CJpp) {
        var hs_wild26CJw6 = hs_b26CJpp >= 32 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26CJw6.tag) {
        case 1:
            return hs_a426CJpr >> hs_b26CJpp;
        case 2:
            return 0;
        }
    };
    this.hs_iShiftRAzh.evaluate = function (hs_a426CJpw, hs_b26CJpu) {
        var hs_wild26CJw7 = hs_b26CJpu >= 32 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26CJw7.tag) {
        case 1:
            return hs_a426CJpw >>> hs_b26CJpu;
        case 2:
            var hs_wild126CJw8 = hs_a426CJpw < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild126CJw8.tag) {
            case 1:
                return 0;
            case 2:
                return -1;
            }
        }
    };
    this.hs_iShiftLzh.evaluate = function (hs_a426CJpC, hs_b26CJpA) {
        var hs_wild26CJw9 = hs_b26CJpA >= 32 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26CJw9.tag) {
        case 1:
            return hs_a426CJpC << hs_b26CJpA;
        case 2:
            return 0;
        }
    };
    this.hs_shiftRLzh.evaluate = function (hs_a426CJpH, hs_b26CJpF) {
        var hs_wild26CJwa = hs_b26CJpF >= 32 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26CJwa.tag) {
        case 1:
            return hs_a426CJpH >> hs_b26CJpF;
        case 2:
            return 0;
        }
    };
    this.hs_shiftLzh.evaluate = function (hs_a426CJpM, hs_b26CJpK) {
        var hs_wild26CJwb = hs_b26CJpK >= 32 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26CJwb.tag) {
        case 1:
            return hs_a426CJpM << hs_b26CJpK;
        case 2:
            return 0;
        }
    };
    this.hs_negateInt.evaluate = function (hs_ds26CJpO) {
        var hs_wild26CJwc = hs_ds26CJpO;
        if (hs_ds26CJpO.notEvaluated) {
            hs_wild26CJwc = hs_ds26CJpO.hscall();
        }
        var hs_x26CJpR = hs_wild26CJwc.data[0];
        var hs_sat26CJwd = -hs_x26CJpR;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CJwd];
        return $res;
    };
    this.hs_remInt.evaluate = function (hs_ds26CJpV, hs_ds126CJpY) {
        var hs_wild26CJwf = hs_ds26CJpV;
        if (hs_ds26CJpV.notEvaluated) {
            hs_wild26CJwf = hs_ds26CJpV.hscall();
        }
        var hs_x26CJq1 = hs_wild26CJwf.data[0];
        var hs_wild126CJwe = hs_ds126CJpY;
        if (hs_ds126CJpY.notEvaluated) {
            hs_wild126CJwe = hs_ds126CJpY.hscall();
        }
        var hs_y26CJq2 = hs_wild126CJwe.data[0];
        var hs_wild226CJq4 = hs_x26CJq1 % hs_y26CJq2;
        var $res = new $hs.Data(1);
        $res.data = [hs_wild226CJq4];
        return $res;
    };
    this.hs_quotInt.evaluate = function (hs_ds26CJq7, hs_ds126CJqa) {
        var hs_wild26CJwh = hs_ds26CJq7;
        if (hs_ds26CJq7.notEvaluated) {
            hs_wild26CJwh = hs_ds26CJq7.hscall();
        }
        var hs_x26CJqd = hs_wild26CJwh.data[0];
        var hs_wild126CJwg = hs_ds126CJqa;
        if (hs_ds126CJqa.notEvaluated) {
            hs_wild126CJwg = hs_ds126CJqa.hscall();
        }
        var hs_y26CJqe = hs_wild126CJwg.data[0];
        var hs_wild226CJqg = hs_x26CJqd / hs_y26CJqe & ~0;
        var $res = new $hs.Data(1);
        $res.data = [hs_wild226CJqg];
        return $res;
    };
    this.hs_timesInt.evaluate = function (hs_ds26CJqj, hs_ds126CJqm) {
        var hs_wild26CJwj = hs_ds26CJqj;
        if (hs_ds26CJqj.notEvaluated) {
            hs_wild26CJwj = hs_ds26CJqj.hscall();
        }
        var hs_x26CJqp = hs_wild26CJwj.data[0];
        var hs_wild126CJwi = hs_ds126CJqm;
        if (hs_ds126CJqm.notEvaluated) {
            hs_wild126CJwi = hs_ds126CJqm.hscall();
        }
        var hs_y26CJqq = hs_wild126CJwi.data[0];
        var hs_sat26CJwk = $hs.Int.mul(hs_x26CJqp, hs_y26CJqq);
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CJwk];
        return $res;
    };
    this.hs_minusInt.evaluate = function (hs_ds26CJqu, hs_ds126CJqx) {
        var hs_wild26CJwm = hs_ds26CJqu;
        if (hs_ds26CJqu.notEvaluated) {
            hs_wild26CJwm = hs_ds26CJqu.hscall();
        }
        var hs_x26CJqA = hs_wild26CJwm.data[0];
        var hs_wild126CJwl = hs_ds126CJqx;
        if (hs_ds126CJqx.notEvaluated) {
            hs_wild126CJwl = hs_ds126CJqx.hscall();
        }
        var hs_y26CJqB = hs_wild126CJwl.data[0];
        var hs_sat26CJwn = ($hs.Int.addCarry(hs_x26CJqA, ~hs_y26CJqB, 1))[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CJwn];
        return $res;
    };
    this.hs_plusInt.evaluate = function (hs_ds26CJqF, hs_ds126CJqI) {
        var hs_wild26CJwp = hs_ds26CJqF;
        if (hs_ds26CJqF.notEvaluated) {
            hs_wild26CJwp = hs_ds26CJqF.hscall();
        }
        var hs_x26CJqL = hs_wild26CJwp.data[0];
        var hs_wild126CJwo = hs_ds126CJqI;
        if (hs_ds126CJqI.notEvaluated) {
            hs_wild126CJwo = hs_ds126CJqI.hscall();
        }
        var hs_y26CJqM = hs_wild126CJwo.data[0];
        var hs_sat26CJwq = ($hs.Int.addCarry(hs_x26CJqL, hs_y26CJqM, 0))[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CJwq];
        return $res;
    };
    this.hs_modIntzh.evaluate = function (hs_xzh26CJqQ, hs_yzh26CJqR) {
        var hs_rzh26CJr0 = hs_xzh26CJqQ % hs_yzh26CJqR;
        var hs_sat26CJwr = new $hs.Thunk();
        hs_sat26CJwr.evaluateOnce = function () {
            var hs_sat26CJwx = new $hs.Thunk();
            hs_sat26CJwx.evaluateOnce = function () {
                return hs_yzh26CJqR > 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            };
            var hs_sat26CJww = new $hs.Thunk();
            hs_sat26CJww.evaluateOnce = function () {
                return hs_xzh26CJqQ < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            };
            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26CJww, hs_sat26CJwx);
        };
        var hs_sat26CJws = new $hs.Thunk();
        hs_sat26CJws.evaluateOnce = function () {
            var hs_sat26CJwv = new $hs.Thunk();
            hs_sat26CJwv.evaluateOnce = function () {
                return hs_yzh26CJqR < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            };
            var hs_sat26CJwu = new $hs.Thunk();
            hs_sat26CJwu.evaluateOnce = function () {
                return hs_xzh26CJqQ > 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            };
            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26CJwu, hs_sat26CJwv);
        };
        var hs_wild26CJwt = $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26CJws, hs_sat26CJwr);
        switch (hs_wild26CJwt.tag) {
        case 1:
            if (hs_rzh26CJr0.notEvaluated) {
                return hs_rzh26CJr0.hscall();
            } else {
                return hs_rzh26CJr0;
            }
        case 2:
            var hs_wild126CJr2 = hs_rzh26CJr0;
            if (hs_rzh26CJr0.notEvaluated) {
                hs_wild126CJr2 = hs_rzh26CJr0.hscall();
            }
            switch (hs_wild126CJr2) {
            case 0:
                return 0;
            default:
                return ($hs.Int.addCarry(hs_wild126CJr2, hs_yzh26CJqR, 0))[0];
            }
        }
    };
    this.hs_modInt.evaluate = function (hs_ds26CJr5, hs_ds126CJr8) {
        var hs_wild26CJwz = hs_ds26CJr5;
        if (hs_ds26CJr5.notEvaluated) {
            hs_wild26CJwz = hs_ds26CJr5.hscall();
        }
        var hs_x26CJrb = hs_wild26CJwz.data[0];
        var hs_wild126CJwy = hs_ds126CJr8;
        if (hs_ds126CJr8.notEvaluated) {
            hs_wild126CJwy = hs_ds126CJr8.hscall();
        }
        var hs_y26CJrc = hs_wild126CJwy.data[0];
        var hs_wild226CJre = $hs.modules.GHCziBase.hs_modIntzh.hscall(hs_x26CJrb, hs_y26CJrc);
        var $res = new $hs.Data(1);
        $res.data = [hs_wild226CJre];
        return $res;
    };
    this.hs_divIntzh.evaluate = function (hs_xzh26CJrh, hs_yzh26CJrj) {
        var hs_sat26CJwA = new $hs.Thunk();
        hs_sat26CJwA.evaluateOnce = function () {
            return hs_yzh26CJrj < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        };
        var hs_sat26CJwB = new $hs.Thunk();
        hs_sat26CJwB.evaluateOnce = function () {
            return hs_xzh26CJrh > 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        };
        var hs_wild26CJwC = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26CJwB, hs_sat26CJwA);
        switch (hs_wild26CJwC.tag) {
        case 1:
            var hs_sat26CJwE = new $hs.Thunk();
            hs_sat26CJwE.evaluateOnce = function () {
                return hs_yzh26CJrj > 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            };
            var hs_sat26CJwF = new $hs.Thunk();
            hs_sat26CJwF.evaluateOnce = function () {
                return hs_xzh26CJrh < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            };
            var hs_wild126CJwG = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26CJwF, hs_sat26CJwE);
            switch (hs_wild126CJwG.tag) {
            case 1:
                return hs_xzh26CJrh / hs_yzh26CJrj & ~0;
            case 2:
                var hs_sat26CJwH = ($hs.Int.addCarry(hs_xzh26CJrh, 1, 0))[0];
                var hs_wild226CJrr = hs_sat26CJwH / hs_yzh26CJrj & ~0;
                return ($hs.Int.addCarry(hs_wild226CJrr, ~1, 1))[0];
            }
        case 2:
            var hs_sat26CJwD = ($hs.Int.addCarry(hs_xzh26CJrh, ~1, 1))[0];
            var hs_wild126CJru = hs_sat26CJwD / hs_yzh26CJrj & ~0;
            return ($hs.Int.addCarry(hs_wild126CJru, ~1, 1))[0];
        }
    };
    this.hs_divInt.evaluate = function (hs_ds26CJrx, hs_ds126CJrA) {
        var hs_wild26CJwJ = hs_ds26CJrx;
        if (hs_ds26CJrx.notEvaluated) {
            hs_wild26CJwJ = hs_ds26CJrx.hscall();
        }
        var hs_x26CJrD = hs_wild26CJwJ.data[0];
        var hs_wild126CJwI = hs_ds126CJrA;
        if (hs_ds126CJrA.notEvaluated) {
            hs_wild126CJwI = hs_ds126CJrA.hscall();
        }
        var hs_y26CJrE = hs_wild126CJwI.data[0];
        var hs_wild226CJrG = $hs.modules.GHCziBase.hs_divIntzh.hscall(hs_x26CJrD, hs_y26CJrE);
        var $res = new $hs.Data(1);
        $res.data = [hs_wild226CJrG];
        return $res;
    };
    this.hs_getTag.evaluate = function (hs_eta26CJrI) {
        var hs_x26CJrK = hs_eta26CJrI;
        if (hs_eta26CJrI.notEvaluated) {
            hs_x26CJrK = hs_eta26CJrI.hscall();
        }
        var hs_sat26CJwK = hs_x26CJrK;
        if (hs_x26CJrK.notEvaluated) {
            hs_sat26CJwK = hs_x26CJrK.hscall();
        }
        return hs_sat26CJwK.tag;
    };
    hs_a25ukVw.evaluate = function (hs_ds26CJrO) {
        if (hs_ds26CJrO.notEvaluated) {
            return hs_ds26CJrO.hscall();
        } else {
            return hs_ds26CJrO;
        }
    };
    this.hs_unIO.evaluate = function (hs_eta1cW6l3) {
        return hs_a25ukVw.hscall(hs_eta1cW6l3);
    };
    this.hs_until.evaluate = function (hs_p26CJrT, hs_f26CJrV, hs_x26CJrS) {
        var hs_wild26CJwL = hs_p26CJrT.hscall(hs_x26CJrS);
        switch (hs_wild26CJwL.tag) {
        case 1:
            var hs_sat26CJwM = new $hs.Thunk();
            hs_sat26CJwM.evaluateOnce = function () {
                return hs_f26CJrV.hscall(hs_x26CJrS);
            };
            return $hs.modules.GHCziBase.hs_until.hscall(hs_p26CJrT, hs_f26CJrV, hs_sat26CJwM);
        case 2:
            if (hs_x26CJrS.notEvaluated) {
                return hs_x26CJrS.hscall();
            } else {
                return hs_x26CJrS;
            }
        }
    };
    this.hs_flip.evaluate = function (hs_f26CJs2, hs_x26CJs1, hs_y26CJs0) {
        return hs_f26CJs2.hscall(hs_y26CJs0, hs_x26CJs1);
    };
    this.hs_zi.evaluate = function (hs_eta26CJs8, hs_eta126CJs7, hs_x26CJs6) {
        var hs_sat26CJwN = new $hs.Thunk();
        hs_sat26CJwN.evaluateOnce = function () {
            return hs_eta126CJs7.hscall(hs_x26CJs6);
        };
        return hs_eta26CJs8.hscall(hs_sat26CJwN);
    };
    this.hs_const.evaluate = function (hs_x26CJsc, hs_ds26CJsd) {
        if (hs_x26CJsc.notEvaluated) {
            return hs_x26CJsc.hscall();
        } else {
            return hs_x26CJsc;
        }
    };
    this.hs_asTypeOf.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return $hs.modules.GHCziBase.hs_const.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_zddmzlzd.evaluate = function (hs_zddFunctor26CJsg, hs_x26CJsi) {
        var hs_sat26CJwO = new $hs.Func(1);
        hs_sat26CJwO.evaluate = function (hs_ds26CJsj) {
            if (hs_x26CJsi.notEvaluated) {
                return hs_x26CJsi.hscall();
            } else {
                return hs_x26CJsi;
            }
        };
        return $hs.modules.GHCziBase.hs_fmap.hscall(hs_zddFunctor26CJsg, hs_sat26CJwO);
    };
    this.hs_id.evaluate = function (hs_x26CJsm) {
        if (hs_x26CJsm.notEvaluated) {
            return hs_x26CJsm.hscall();
        } else {
            return hs_x26CJsm;
        }
    };
    this.hs_maxInt.data = [2147483647];
    this.hs_minInt.data = [-2147483648];
    this.hs_twoInt.data = [2];
    this.hs_oneInt.data = [1];
    this.hs_zzeroInt.data = [0];
    this.hs_ord.evaluate = function (hs_ds26CJso) {
        var hs_wild26CJwP = hs_ds26CJso;
        if (hs_ds26CJso.notEvaluated) {
            hs_wild26CJwP = hs_ds26CJso.hscall();
        }
        var hs_czh26CJsr = hs_wild26CJwP.data[0];
        var hs_sat26CJwQ = hs_czh26CJsr.charCodeAt(0);
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CJwQ];
        return $res;
    };
    this.hs_unsafeChr.evaluate = function (hs_ds26CJsu) {
        var hs_wild26CJwR = hs_ds26CJsu;
        if (hs_ds26CJsu.notEvaluated) {
            hs_wild26CJwR = hs_ds26CJsu.hscall();
        }
        var hs_izh26CJsx = hs_wild26CJwR.data[0];
        var hs_sat26CJwS = String.fromCharCode(hs_izh26CJsx);
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CJwS];
        return $res;
    };
    this.hs_mapFB.evaluate = function (hs_eta26CJsF, hs_eta126CJsE, hs_x26CJsD, hs_ys26CJsH) {
        var hs_sat26CJwT = new $hs.Thunk();
        hs_sat26CJwT.evaluateOnce = function () {
            return hs_eta126CJsE.hscall(hs_x26CJsD);
        };
        return hs_eta26CJsF.hscall(hs_sat26CJwT, hs_ys26CJsH);
    };
    hs_zdcfail25ukWs.evaluate = function (hs_ds26CJsK) {
        var $res = new $hs.Data(1);
        $res.data = [];
        return $res;
    };
    hs_zdcreturn25ukWv.evaluate = function (hs_x26CJsN) {
        var $res = new $hs.Data(2);
        $res.data = [hs_x26CJsN, $hs.modules.GHCziTypes.hs_ZMZN];
        return $res;
    };
    hs_zdcfail125ukWy.evaluate = function (hs_s26CJsQ) {
        return $hs.modules.GHCziIO.hs_failIO.hscall(hs_s26CJsQ);
    };
    this.hs_zd.evaluate = function (hs_eta26CJsU, hs_eta126CJsT) {
        return hs_eta26CJsU.hscall(hs_eta126CJsT);
    };
    this.hs_breakpointCond.evaluate = function (hs_ds26CJsY, hs_r26CJsX) {
        if (hs_r26CJsX.notEvaluated) {
            return hs_r26CJsX.hscall();
        } else {
            return hs_r26CJsX;
        }
    };
    this.hs_breakpoint.evaluate = function (hs_r26CJt0) {
        if (hs_r26CJt0.notEvaluated) {
            return hs_r26CJt0.hscall();
        } else {
            return hs_r26CJt0;
        }
    };
    this.hs_lazzy.evaluate = function (hs_x26CJt2) {
        if (hs_x26CJt2.notEvaluated) {
            return hs_x26CJt2.hscall();
        } else {
            return hs_x26CJt2;
        }
    };
    hs_a125ukWN.evaluate = function (hs_ds26CJt8, hs_k26CJtd, hs_s26CJt7) {
        var hs_wild26CJwV = hs_ds26CJt8.hscall(hs_s26CJt7);
        var hs_newzus26CJtc = hs_wild26CJwV[0];
        return hs_k26CJtd.hscall(hs_newzus26CJtc);
    };
    this.hs_thenIO.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a125ukWN.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_assert.evaluate = function (hs_zupred26CJth, hs_r26CJtg) {
        if (hs_r26CJtg.notEvaluated) {
            return hs_r26CJtg.hscall();
        } else {
            return hs_r26CJtg;
        }
    };
    this.hs_otherwise.data = [];
    hs_a225ukX2.evaluate = function (hs_x26CJtm, hs_s26CJtl) {
        return [hs_s26CJtl, hs_x26CJtm];
    };
    this.hs_returnIO.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a225ukX2.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_zdcreturn125ukX7.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a225ukX2.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a325ukX8.evaluate = function (hs_ds26CJtt, hs_k26CJtz, hs_s26CJts) {
        var hs_wild26CJwW = hs_ds26CJtt.hscall(hs_s26CJts);
        var hs_newzus26CJty = hs_wild26CJwW[0];
        var hs_a426CJtx = hs_wild26CJwW[1];
        return hs_k26CJtz.hscall(hs_a426CJtx, hs_newzus26CJty);
    };
    this.hs_bindIO.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a325ukX8.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_zdczgzgze25ukXk.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a325ukX8.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_zdfMonadIO.data = [hs_a325ukX8, hs_zdczgzg25ukXl, hs_a225ukX2, hs_zdcfail125ukWy];
    hs_zdczgzg25ukXl.evaluate = function (hs_eta26CJtE, hs_eta126CJtG) {
        var hs_sat26CJwX = new $hs.Func(1);
        hs_sat26CJwX.evaluate = function (hs_ds26CJtH) {
            if (hs_eta126CJtG.notEvaluated) {
                return hs_eta126CJtG.hscall();
            } else {
                return hs_eta126CJtG;
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_eta26CJtE, hs_sat26CJwX);
    };
    hs_zdcfmap25ukXt.evaluate = function (hs_f26CJtP, hs_x26CJtM) {
        var hs_sat26CJwY = new $hs.Func(1);
        hs_sat26CJwY.evaluate = function (hs_x126CJtO) {
            var hs_sat26CJwZ = new $hs.Thunk();
            hs_sat26CJwZ.evaluateOnce = function () {
                return hs_f26CJtP.hscall(hs_x126CJtO);
            };
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CJwZ);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_x26CJtM, hs_sat26CJwY);
    };
    this.hs_zdfFunctorIO.data = [hs_zdcfmap25ukXt, hs_zdczlzd25ukXC];
    hs_zdczlzd25ukXC.evaluate = function (hs_x26CJtV) {
        var hs_sat26CJx0 = new $hs.Func(1);
        hs_sat26CJx0.evaluate = function (hs_ds26CJtW) {
            if (hs_x26CJtV.notEvaluated) {
                return hs_x26CJtV.hscall();
            } else {
                return hs_x26CJtV;
            }
        };
        return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.GHCziBase.hs_zdfFunctorIO, hs_sat26CJx0);
    };
    this.hs_eqString.evaluate = function (hs_ds26CJu0, hs_ds126CJu2) {
        var hs_wild26CJx3 = hs_ds26CJu0;
        if (hs_ds26CJu0.notEvaluated) {
            hs_wild26CJx3 = hs_ds26CJu0.hscall();
        }
        switch (hs_wild26CJx3.tag) {
        case 1:
            var hs_wild126CJx7 = hs_ds126CJu2;
            if (hs_ds126CJu2.notEvaluated) {
                hs_wild126CJx7 = hs_ds126CJu2.hscall();
            }
            switch (hs_wild126CJx7.tag) {
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
            var hs_c126CJub = hs_wild26CJx3.data[0];
            var hs_cs126CJue = hs_wild26CJx3.data[1];
            var hs_wild126CJx2 = hs_ds126CJu2;
            if (hs_ds126CJu2.notEvaluated) {
                hs_wild126CJx2 = hs_ds126CJu2.hscall();
            }
            switch (hs_wild126CJx2.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_c226CJuc = hs_wild126CJx2.data[0];
                var hs_cs226CJuf = hs_wild126CJx2.data[1];
                var hs_sat26CJx4 = new $hs.Thunk();
                hs_sat26CJx4.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_eqString.hscall(hs_cs126CJue, hs_cs226CJuf);
                };
                var hs_sat26CJx1 = new $hs.Thunk();
                hs_sat26CJx1.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c126CJub, hs_c226CJuc);
                };
                return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26CJx1, hs_sat26CJx4);
            }
        }
    };
    this.hs_build.evaluate = function (hs_eta26CJui) {
        return hs_eta26CJui.hscall($hs.modules.GHCziTypes.hs_ZC, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_augment.evaluate = function (hs_eta26CJum, hs_eta126CJul) {
        return hs_eta26CJum.hscall($hs.modules.GHCziTypes.hs_ZC, hs_eta126CJul);
    };
    this.hs_map.evaluate = function (hs_ds26CJuu, hs_ds126CJup) {
        var hs_wild26CJx9 = hs_ds126CJup;
        if (hs_ds126CJup.notEvaluated) {
            hs_wild26CJx9 = hs_ds126CJup.hscall();
        }
        switch (hs_wild26CJx9.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_x26CJut = hs_wild26CJx9.data[0];
            var hs_xs26CJuw = hs_wild26CJx9.data[1];
            var hs_sat26CJxa = new $hs.Thunk();
            hs_sat26CJxa.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_map.hscall(hs_ds26CJuu, hs_xs26CJuw);
            };
            var hs_sat26CJx8 = new $hs.Thunk();
            hs_sat26CJx8.evaluateOnce = function () {
                return hs_ds26CJuu.hscall(hs_x26CJut);
            };
            var $res = new $hs.Data(2);
            $res.data = [hs_sat26CJx8, hs_sat26CJxa];
            return $res;
        }
    };
    this.hs_foldr.evaluate = function (hs_eta26CJuL, hs_eta126CJuF, hs_eta226CJuN) {
        var hs_go26CJuK = new $hs.Func(1);
        hs_go26CJuK.evaluate = function (hs_ds26CJuD) {
            var hs_wild26CJxc = hs_ds26CJuD;
            if (hs_ds26CJuD.notEvaluated) {
                hs_wild26CJxc = hs_ds26CJuD.hscall();
            }
            switch (hs_wild26CJxc.tag) {
            case 1:
                if (hs_eta126CJuF.notEvaluated) {
                    return hs_eta126CJuF.hscall();
                } else {
                    return hs_eta126CJuF;
                }
            case 2:
                var hs_y26CJuI = hs_wild26CJxc.data[0];
                var hs_ys26CJuJ = hs_wild26CJxc.data[1];
                var hs_sat26CJxb = new $hs.Thunk();
                hs_sat26CJxb.evaluateOnce = function () {
                    return hs_go26CJuK.hscall(hs_ys26CJuJ);
                };
                return hs_eta26CJuL.hscall(hs_y26CJuI, hs_sat26CJxb);
            }
        };
        return hs_go26CJuK.hscall(hs_eta226CJuN);
    };
    this.hs_zpzp.evaluate = function (hs_ds26CJuQ, hs_ys26CJuS) {
        var hs_wild26CJxe = hs_ds26CJuQ;
        if (hs_ds26CJuQ.notEvaluated) {
            hs_wild26CJxe = hs_ds26CJuQ.hscall();
        }
        switch (hs_wild26CJxe.tag) {
        case 1:
            if (hs_ys26CJuS.notEvaluated) {
                return hs_ys26CJuS.hscall();
            } else {
                return hs_ys26CJuS;
            }
        case 2:
            var hs_x26CJuV = hs_wild26CJxe.data[0];
            var hs_xs26CJuW = hs_wild26CJxe.data[1];
            var hs_sat26CJxd = new $hs.Thunk();
            hs_sat26CJxd.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_xs26CJuW, hs_ys26CJuS);
            };
            var $res = new $hs.Data(2);
            $res.data = [hs_x26CJuV, hs_sat26CJxd];
            return $res;
        }
    };
    this.hs_chr.evaluate = function (hs_i26CJuZ) {
        var hs_wild26CJv7 = hs_i26CJuZ;
        if (hs_i26CJuZ.notEvaluated) {
            hs_wild26CJv7 = hs_i26CJuZ.hscall();
        }
        var hs_izh26CJv2 = hs_wild26CJv7.data[0];
        var hs_sat26CJxf = hs_izh26CJv2;
        var hs_wild126CJxg = $hs.Word.le(hs_sat26CJxf, 1114111) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild126CJxg.tag) {
        case 1:
            var hs_sat26CJxi = new $hs.Thunk();
            hs_sat26CJxi.evaluateOnce = function () {
                var hs_sat26CJxl = new $hs.Data(1);
                hs_sat26CJxl.data = [9];
                return $hs.modules.GHCziShow.hs_showSignedInt.hscall(hs_sat26CJxl, hs_wild26CJv7, $hs.modules.GHCziTypes.hs_ZMZN);
            };
            var hs_sat26CJxj = new $hs.Thunk();
            hs_sat26CJxj.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Prelude.chr: bad argument: \x00");
            };
            var hs_sat26CJxk = $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CJxj, hs_sat26CJxi);
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CJxk);
        case 2:
            var hs_sat26CJxh = String.fromCharCode(hs_izh26CJv2);
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26CJxh];
            return $res;
        }
    };
    this.hs_zdfFunctorZMZN.data = [$hs.modules.GHCziBase.hs_map, hs_zdczlzd125ukYV];
    hs_zdczlzd125ukYV.evaluate = function (hs_x26CJve) {
        var hs_sat26CJxm = new $hs.Func(1);
        hs_sat26CJxm.evaluate = function (hs_ds26CJvf) {
            if (hs_x26CJve.notEvaluated) {
                return hs_x26CJve.hscall();
            } else {
                return hs_x26CJve;
            }
        };
        return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.GHCziBase.hs_zdfFunctorZMZN, hs_sat26CJxm);
    };
    hs_zdczgzgze125ukZ1.evaluate = function (hs_m26CJvw, hs_k26CJvr) {
        var hs_go26CJvu = new $hs.Func(1);
        hs_go26CJvu.evaluate = function (hs_ds26CJvm) {
            var hs_wild26CJxo = hs_ds26CJvm;
            if (hs_ds26CJvm.notEvaluated) {
                hs_wild26CJxo = hs_ds26CJvm.hscall();
            }
            switch (hs_wild26CJxo.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_y26CJvq = hs_wild26CJxo.data[0];
                var hs_ys26CJvt = hs_wild26CJxo.data[1];
                var hs_sat26CJxp = new $hs.Thunk();
                hs_sat26CJxp.evaluateOnce = function () {
                    return hs_go26CJvu.hscall(hs_ys26CJvt);
                };
                var hs_sat26CJxn = new $hs.Thunk();
                hs_sat26CJxn.evaluateOnce = function () {
                    return hs_k26CJvr.hscall(hs_y26CJvq);
                };
                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CJxn, hs_sat26CJxp);
            }
        };
        return hs_go26CJvu.hscall(hs_m26CJvw);
    };
    hs_zdczgzg125ukZh.evaluate = function (hs_m26CJvK, hs_k26CJvG) {
        var hs_go26CJvI = new $hs.Func(1);
        hs_go26CJvI.evaluate = function (hs_ds26CJvC) {
            var hs_wild26CJxr = hs_ds26CJvC;
            if (hs_ds26CJvC.notEvaluated) {
                hs_wild26CJxr = hs_ds26CJvC.hscall();
            }
            switch (hs_wild26CJxr.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_ys26CJvH = hs_wild26CJxr.data[1];
                var hs_sat26CJxq = new $hs.Thunk();
                hs_sat26CJxq.evaluateOnce = function () {
                    return hs_go26CJvI.hscall(hs_ys26CJvH);
                };
                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_k26CJvG, hs_sat26CJxq);
            }
        };
        return hs_go26CJvI.hscall(hs_m26CJvK);
    };
    this.hs_zdfMonadZMZN.data = [hs_zdczgzgze125ukZ1, hs_zdczgzg125ukZh, hs_zdcreturn25ukWv, hs_zdcfail25ukWs];
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
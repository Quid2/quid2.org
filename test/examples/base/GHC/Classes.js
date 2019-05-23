
$hs.modules.GHCziClasses = new $hs.Module();
$hs.modules.GHCziClasses.dependencies = ["GHC.Integer"];
$hs.modules.GHCziClasses.initBeforeDependencies = function () {
    this.hs_zeze = new $hs.Func(1);
    this.hs_zsze = new $hs.Func(1);
    this.hs_zdp1Ord = new $hs.Func(1);
    this.hs_compare = new $hs.Func(1);
    this.hs_zl = new $hs.Func(1);
    this.hs_zgze = new $hs.Func(1);
    this.hs_zg = new $hs.Func(1);
    this.hs_zlze = new $hs.Func(1);
    this.hs_max = new $hs.Func(1);
    this.hs_min = new $hs.Func(1);
    this.hs_zddmmin = new $hs.Func(3);
    this.hs_zddmmax = new $hs.Func(3);
    this.hs_zddmzlze = new $hs.Func(3);
    this.hs_zddmzg = new $hs.Func(3);
    this.hs_zddmzgze = new $hs.Func(3);
    this.hs_zddmzl = new $hs.Func(3);
    this.hs_zddmcompare = new $hs.Func(3);
    this.hs_not = new $hs.Func(1);
    this.hs_zddmzeze = new $hs.Func(3);
    this.hs_zddmzsze = new $hs.Func(3);
    this.hs_zbzb = new $hs.Func(2);
    this.hs_zaza = new $hs.Func(2);
    this.hs_compareIntzh = new $hs.Func(2);
    this.hs_compareInt = new $hs.Func(2);
    this.hs_leInt = new $hs.Func(2);
    this.hs_ltInt = new $hs.Func(2);
    this.hs_geInt = new $hs.Func(2);
    this.hs_gtInt = new $hs.Func(2);
    this.hs_neInt = new $hs.Func(2);
    this.hs_eqInt = new $hs.Func(2);
    this.hs_zdfEqChar = new $hs.Data(1);
    this.hs_zdfEqZMZN = new $hs.Func(1);
    this.hs_zdfEqInteger = new $hs.Data(1);
    this.hs_zdfEqFloat = new $hs.Data(1);
    this.hs_zdfEqDouble = new $hs.Data(1);
    this.hs_zdfEqInt = new $hs.Data(1);
    this.hs_zdfOrdChar = new $hs.Data(1);
    this.hs_zdfOrdZMZN = new $hs.Func(1);
    this.hs_zdfOrdInteger = new $hs.Data(1);
    this.hs_zdfOrdFloat = new $hs.Data(1);
    this.hs_zdfOrdDouble = new $hs.Data(1);
    this.hs_zdfOrdInt = new $hs.Data(1);
    this.hs_zdfEqZLZR = new $hs.Data(1);
    this.hs_zdfEqZLz2cUZR = new $hs.Func(2);
    this.hs_zdfEqZLz2cUz2cUZR = new $hs.Func(3);
    this.hs_zdfEqZLz2cUz2cUz2cUZR = new $hs.Func(4);
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUZR = new $hs.Func(5);
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(6);
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(7);
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(8);
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(9);
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(10);
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(11);
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(12);
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(13);
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(14);
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(15);
    this.hs_zdfEqBool = new $hs.Data(1);
    this.hs_zdfEqOrdering = new $hs.Data(1);
    this.hs_zdfOrdZLZR = new $hs.Data(1);
    this.hs_zdfOrdZLz2cUZR = new $hs.Func(2);
    this.hs_zdfOrdZLz2cUz2cUZR = new $hs.Func(3);
    this.hs_zdfOrdZLz2cUz2cUz2cUZR = new $hs.Func(4);
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUZR = new $hs.Func(5);
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(6);
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(7);
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(8);
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(9);
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(10);
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(11);
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(12);
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(13);
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(14);
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(15);
    this.hs_zdfOrdBool = new $hs.Data(1);
    this.hs_zdfOrdOrdering = new $hs.Data(1);
    this.hs_zdfEqArity = new $hs.Data(1);
    this.hs_zdfEqAssociativity = new $hs.Data(1);
    this.hs_zdfEqFixity = new $hs.Data(1);
    this.hs_zdfOrdArity = new $hs.Data(1);
    this.hs_zdfOrdAssociativity = new $hs.Data(1);
    this.hs_zdfOrdFixity = new $hs.Data(1);
    this.hs_DZCEq = new $hs.Func(2);
    this.hs_DZCOrd = new $hs.Func(8);
    this.hs_zeze.notEvaluated = true;
    this.hs_zeze.evaluate = function (hs_tpl26CTjp) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_tpl26CTjp);
    };
    this.hs_zsze.notEvaluated = true;
    this.hs_zsze.evaluate = function (hs_tpl26CTjv) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_tpl26CTjv);
    };
    this.hs_zdp1Ord.notEvaluated = true;
    this.hs_zdp1Ord.evaluate = function (hs_tpl26CTjB) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_tpl26CTjB);
    };
    this.hs_compare.notEvaluated = true;
    this.hs_compare.evaluate = function (hs_tpl26CTjN) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_tpl26CTjN);
    };
    this.hs_zl.notEvaluated = true;
    this.hs_zl.evaluate = function (hs_tpl26CTjZ) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_tpl26CTjZ);
    };
    this.hs_zgze.notEvaluated = true;
    this.hs_zgze.evaluate = function (hs_tpl26CTkb) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_tpl26CTkb);
    };
    this.hs_zg.notEvaluated = true;
    this.hs_zg.evaluate = function (hs_tpl26CTkn) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_tpl26CTkn);
    };
    this.hs_zlze.notEvaluated = true;
    this.hs_zlze.evaluate = function (hs_tpl26CTkz) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_tpl26CTkz);
    };
    this.hs_max.notEvaluated = true;
    this.hs_max.evaluate = function (hs_tpl26CTkL) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_tpl26CTkL);
    };
    this.hs_min.notEvaluated = true;
    this.hs_min.evaluate = function (hs_tpl26CTkX) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_tpl26CTkX);
    };
    this.hs_zddmmin.notEvaluated = true;
    this.hs_zddmmin.evaluate = function (hs_zddOrd726CTlb, hs_x26CTlc, hs_y26CTld) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddOrd726CTlb, hs_x26CTlc, hs_y26CTld);
    };
    this.hs_zddmmax.notEvaluated = true;
    this.hs_zddmmax.evaluate = function (hs_zddOrd726CTli, hs_x26CTlj, hs_y26CTlk) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddOrd726CTli, hs_x26CTlj, hs_y26CTlk);
    };
    this.hs_zddmzlze.notEvaluated = true;
    this.hs_zddmzlze.evaluate = function (hs_zddOrd726CTlp, hs_x26CTlq, hs_y26CTlr) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddOrd726CTlp, hs_x26CTlq, hs_y26CTlr);
    };
    this.hs_zddmzg.notEvaluated = true;
    this.hs_zddmzg.evaluate = function (hs_zddOrd726CTlw, hs_x26CTlx, hs_y26CTly) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddOrd726CTlw, hs_x26CTlx, hs_y26CTly);
    };
    this.hs_zddmzgze.notEvaluated = true;
    this.hs_zddmzgze.evaluate = function (hs_zddOrd726CTlD, hs_x26CTlE, hs_y26CTlF) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddOrd726CTlD, hs_x26CTlE, hs_y26CTlF);
    };
    this.hs_zddmzl.notEvaluated = true;
    this.hs_zddmzl.evaluate = function (hs_zddOrd726CTlK, hs_x26CTlL, hs_y26CTlM) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddOrd726CTlK, hs_x26CTlL, hs_y26CTlM);
    };
    this.hs_zddmcompare.notEvaluated = true;
    this.hs_zddmcompare.evaluate = function (hs_zddOrd726CTlR, hs_eta26CTlT, hs_eta126CTlU) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddOrd726CTlR, hs_eta26CTlT, hs_eta126CTlU);
    };
    this.hs_not.notEvaluated = true;
    this.hs_not.evaluate = function (hs_ds26CTlY) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_ds26CTlY);
    };
    this.hs_zddmzeze.notEvaluated = true;
    this.hs_zddmzeze.evaluate = function (hs_zddEq226CTm3, hs_x26CTm4, hs_y26CTm5) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq226CTm3, hs_x26CTm4, hs_y26CTm5);
    };
    this.hs_zddmzsze.notEvaluated = true;
    this.hs_zddmzsze.evaluate = function (hs_zddEq226CTma, hs_x26CTmb, hs_y26CTmc) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq226CTma, hs_x26CTmb, hs_y26CTmc);
    };
    this.hs_zbzb.notEvaluated = true;
    this.hs_zbzb.evaluate = function (hs_ds26CTmg, hs_ds126CTmi) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_ds26CTmg, hs_ds126CTmi);
    };
    this.hs_zaza.notEvaluated = true;
    this.hs_zaza.evaluate = function (hs_ds26CTml, hs_x26CTmn) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_ds26CTml, hs_x26CTmn);
    };
    this.hs_compareIntzh.notEvaluated = true;
    this.hs_compareIntzh.evaluate = function (hs_xzh26CTmq, hs_yzh26CTmr) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_xzh26CTmq, hs_yzh26CTmr);
    };
    this.hs_compareInt.notEvaluated = true;
    this.hs_compareInt.evaluate = function (hs_ds26CTmw, hs_ds126CTmz) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_ds26CTmw, hs_ds126CTmz);
    };
    this.hs_leInt.notEvaluated = true;
    this.hs_leInt.evaluate = function (hs_ds26CTmG, hs_ds126CTmJ) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_ds26CTmG, hs_ds126CTmJ);
    };
    this.hs_ltInt.notEvaluated = true;
    this.hs_ltInt.evaluate = function (hs_ds26CTmQ, hs_ds126CTmT) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_ds26CTmQ, hs_ds126CTmT);
    };
    this.hs_geInt.notEvaluated = true;
    this.hs_geInt.evaluate = function (hs_ds26CTn0, hs_ds126CTn3) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_ds26CTn0, hs_ds126CTn3);
    };
    this.hs_gtInt.notEvaluated = true;
    this.hs_gtInt.evaluate = function (hs_ds26CTna, hs_ds126CTnd) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_ds26CTna, hs_ds126CTnd);
    };
    this.hs_neInt.notEvaluated = true;
    this.hs_neInt.evaluate = function (hs_ds26CTnk, hs_ds126CTnn) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_ds26CTnk, hs_ds126CTnn);
    };
    this.hs_eqInt.notEvaluated = true;
    this.hs_eqInt.evaluate = function (hs_ds26CTnu, hs_ds126CTnx) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_ds26CTnu, hs_ds126CTnx);
    };
    this.hs_zdfEqChar.notEvaluated = true;
    this.hs_zdfEqChar.evaluate = function () {
        $hs.modules.GHCziClasses.loadDependencies();
        return this;
    };
    this.hs_zdfEqZMZN.notEvaluated = true;
    this.hs_zdfEqZMZN.evaluate = function (hs_zddEq226CTo7) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq226CTo7);
    };
    this.hs_zdfEqInteger.notEvaluated = true;
    this.hs_zdfEqInteger.evaluate = function () {
        $hs.modules.GHCziClasses.loadDependencies();
        return this;
    };
    this.hs_zdfEqFloat.notEvaluated = true;
    this.hs_zdfEqFloat.evaluate = function () {
        $hs.modules.GHCziClasses.loadDependencies();
        return this;
    };
    this.hs_zdfEqDouble.notEvaluated = true;
    this.hs_zdfEqDouble.evaluate = function () {
        $hs.modules.GHCziClasses.loadDependencies();
        return this;
    };
    this.hs_zdfEqInt.notEvaluated = true;
    this.hs_zdfEqInt.evaluate = function () {
        $hs.modules.GHCziClasses.loadDependencies();
        return this;
    };
    this.hs_zdfOrdChar.notEvaluated = true;
    this.hs_zdfOrdChar.evaluate = function () {
        $hs.modules.GHCziClasses.loadDependencies();
        return this;
    };
    this.hs_zdfOrdZMZN.notEvaluated = true;
    this.hs_zdfOrdZMZN.evaluate = function (hs_zddOrd726CTrd) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddOrd726CTrd);
    };
    this.hs_zdfOrdInteger.notEvaluated = true;
    this.hs_zdfOrdInteger.evaluate = function () {
        $hs.modules.GHCziClasses.loadDependencies();
        return this;
    };
    this.hs_zdfOrdFloat.notEvaluated = true;
    this.hs_zdfOrdFloat.evaluate = function () {
        $hs.modules.GHCziClasses.loadDependencies();
        return this;
    };
    this.hs_zdfOrdDouble.notEvaluated = true;
    this.hs_zdfOrdDouble.evaluate = function () {
        $hs.modules.GHCziClasses.loadDependencies();
        return this;
    };
    this.hs_zdfOrdInt.notEvaluated = true;
    this.hs_zdfOrdInt.evaluate = function () {
        $hs.modules.GHCziClasses.loadDependencies();
        return this;
    };
    this.hs_zdfEqZLZR.notEvaluated = true;
    this.hs_zdfEqZLZR.evaluate = function () {
        $hs.modules.GHCziClasses.loadDependencies();
        return this;
    };
    this.hs_zdfEqZLz2cUZR.notEvaluated = true;
    this.hs_zdfEqZLz2cUZR.evaluate = function (hs_zddEq226CTwH, hs_zddEq326CTwI) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq226CTwH, hs_zddEq326CTwI);
    };
    this.hs_zdfEqZLz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfEqZLz2cUz2cUZR.evaluate = function (hs_zddEq226CTxs, hs_zddEq326CTxt, hs_zddEq426CTxu) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq226CTxs, hs_zddEq326CTxt, hs_zddEq426CTxu);
    };
    this.hs_zdfEqZLz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfEqZLz2cUz2cUz2cUZR.evaluate = function (hs_zddEq226CTyo, hs_zddEq326CTyp, hs_zddEq426CTyq, hs_zddEq526CTyr) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq226CTyo, hs_zddEq326CTyp, hs_zddEq426CTyq, hs_zddEq526CTyr);
    };
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq226CTzv, hs_zddEq326CTzw, hs_zddEq426CTzx, hs_zddEq526CTzy, hs_zddEq626CTzz) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq226CTzv, hs_zddEq326CTzw, hs_zddEq426CTzx, hs_zddEq526CTzy, hs_zddEq626CTzz);
    };
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq226CTAN, hs_zddEq326CTAO, hs_zddEq426CTAP, hs_zddEq526CTAQ, hs_zddEq626CTAR, hs_zddEq726CTAS) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq226CTAN, hs_zddEq326CTAO, hs_zddEq426CTAP, hs_zddEq526CTAQ, hs_zddEq626CTAR, hs_zddEq726CTAS);
    };
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq226CTCg, hs_zddEq326CTCh, hs_zddEq426CTCi, hs_zddEq526CTCj, hs_zddEq626CTCk, hs_zddEq726CTCl, hs_zddEq826CTCm) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq226CTCg, hs_zddEq326CTCh, hs_zddEq426CTCi, hs_zddEq526CTCj, hs_zddEq626CTCk, hs_zddEq726CTCl, hs_zddEq826CTCm);
    };
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq226CTDU, hs_zddEq326CTDV, hs_zddEq426CTDW, hs_zddEq526CTDX, hs_zddEq626CTDY, hs_zddEq726CTDZ, hs_zddEq826CTE0, hs_zddEq926CTE1) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq226CTDU, hs_zddEq326CTDV, hs_zddEq426CTDW, hs_zddEq526CTDX, hs_zddEq626CTDY, hs_zddEq726CTDZ, hs_zddEq826CTE0, hs_zddEq926CTE1);
    };
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq226CTFJ, hs_zddEq326CTFK, hs_zddEq426CTFL, hs_zddEq526CTFM, hs_zddEq626CTFN, hs_zddEq726CTFO, hs_zddEq826CTFP, hs_zddEq926CTFQ, hs_zddEq1026CTFR) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq226CTFJ, hs_zddEq326CTFK, hs_zddEq426CTFL, hs_zddEq526CTFM, hs_zddEq626CTFN, hs_zddEq726CTFO, hs_zddEq826CTFP, hs_zddEq926CTFQ, hs_zddEq1026CTFR);
    };
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq226CTHJ, hs_zddEq326CTHK, hs_zddEq426CTHL, hs_zddEq526CTHM, hs_zddEq626CTHN, hs_zddEq726CTHO, hs_zddEq826CTHP, hs_zddEq926CTHQ, hs_zddEq1026CTHR, hs_zddEq1126CTHS) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq226CTHJ, hs_zddEq326CTHK, hs_zddEq426CTHL, hs_zddEq526CTHM, hs_zddEq626CTHN, hs_zddEq726CTHO, hs_zddEq826CTHP, hs_zddEq926CTHQ, hs_zddEq1026CTHR, hs_zddEq1126CTHS);
    };
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq226CTJU, hs_zddEq326CTJV, hs_zddEq426CTJW, hs_zddEq526CTJX, hs_zddEq626CTJY, hs_zddEq726CTJZ, hs_zddEq826CTK0, hs_zddEq926CTK1, hs_zddEq1026CTK2, hs_zddEq1126CTK3, hs_zddEq1226CTK4) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq226CTJU, hs_zddEq326CTJV, hs_zddEq426CTJW, hs_zddEq526CTJX, hs_zddEq626CTJY, hs_zddEq726CTJZ, hs_zddEq826CTK0, hs_zddEq926CTK1, hs_zddEq1026CTK2, hs_zddEq1126CTK3, hs_zddEq1226CTK4);
    };
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq226CTMg, hs_zddEq326CTMh, hs_zddEq426CTMi, hs_zddEq526CTMj, hs_zddEq626CTMk, hs_zddEq726CTMl, hs_zddEq826CTMm, hs_zddEq926CTMn, hs_zddEq1026CTMo, hs_zddEq1126CTMp, hs_zddEq1226CTMq, hs_zddEq1326CTMr) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq226CTMg, hs_zddEq326CTMh, hs_zddEq426CTMi, hs_zddEq526CTMj, hs_zddEq626CTMk, hs_zddEq726CTMl, hs_zddEq826CTMm, hs_zddEq926CTMn, hs_zddEq1026CTMo, hs_zddEq1126CTMp, hs_zddEq1226CTMq, hs_zddEq1326CTMr);
    };
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq226CTON, hs_zddEq326CTOO, hs_zddEq426CTOP, hs_zddEq526CTOQ, hs_zddEq626CTOR, hs_zddEq726CTOS, hs_zddEq826CTOT, hs_zddEq926CTOU, hs_zddEq1026CTOV, hs_zddEq1126CTOW, hs_zddEq1226CTOX, hs_zddEq1326CTOY, hs_zddEq1426CTOZ) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq226CTON, hs_zddEq326CTOO, hs_zddEq426CTOP, hs_zddEq526CTOQ, hs_zddEq626CTOR, hs_zddEq726CTOS, hs_zddEq826CTOT, hs_zddEq926CTOU, hs_zddEq1026CTOV, hs_zddEq1126CTOW, hs_zddEq1226CTOX, hs_zddEq1326CTOY, hs_zddEq1426CTOZ);
    };
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq226CTRv, hs_zddEq326CTRw, hs_zddEq426CTRx, hs_zddEq526CTRy, hs_zddEq626CTRz, hs_zddEq726CTRA, hs_zddEq826CTRB, hs_zddEq926CTRC, hs_zddEq1026CTRD, hs_zddEq1126CTRE, hs_zddEq1226CTRF, hs_zddEq1326CTRG, hs_zddEq1426CTRH, hs_zddEq1526CTRI) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq226CTRv, hs_zddEq326CTRw, hs_zddEq426CTRx, hs_zddEq526CTRy, hs_zddEq626CTRz, hs_zddEq726CTRA, hs_zddEq826CTRB, hs_zddEq926CTRC, hs_zddEq1026CTRD, hs_zddEq1126CTRE, hs_zddEq1226CTRF, hs_zddEq1326CTRG, hs_zddEq1426CTRH, hs_zddEq1526CTRI);
    };
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq226CTUo, hs_zddEq326CTUp, hs_zddEq426CTUq, hs_zddEq526CTUr, hs_zddEq626CTUs, hs_zddEq726CTUt, hs_zddEq826CTUu, hs_zddEq926CTUv, hs_zddEq1026CTUw, hs_zddEq1126CTUx, hs_zddEq1226CTUy, hs_zddEq1326CTUz, hs_zddEq1426CTUA, hs_zddEq1526CTUB, hs_zddEq1626CTUC) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq226CTUo, hs_zddEq326CTUp, hs_zddEq426CTUq, hs_zddEq526CTUr, hs_zddEq626CTUs, hs_zddEq726CTUt, hs_zddEq826CTUu, hs_zddEq926CTUv, hs_zddEq1026CTUw, hs_zddEq1126CTUx, hs_zddEq1226CTUy, hs_zddEq1326CTUz, hs_zddEq1426CTUA, hs_zddEq1526CTUB, hs_zddEq1626CTUC);
    };
    this.hs_zdfEqBool.notEvaluated = true;
    this.hs_zdfEqBool.evaluate = function () {
        $hs.modules.GHCziClasses.loadDependencies();
        return this;
    };
    this.hs_zdfEqOrdering.notEvaluated = true;
    this.hs_zdfEqOrdering.evaluate = function () {
        $hs.modules.GHCziClasses.loadDependencies();
        return this;
    };
    this.hs_zdfOrdZLZR.notEvaluated = true;
    this.hs_zdfOrdZLZR.evaluate = function () {
        $hs.modules.GHCziClasses.loadDependencies();
        return this;
    };
    this.hs_zdfOrdZLz2cUZR.notEvaluated = true;
    this.hs_zdfOrdZLz2cUZR.evaluate = function (hs_zddOrd726CTYh, hs_zddOrd826CTYi) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddOrd726CTYh, hs_zddOrd826CTYi);
    };
    this.hs_zdfOrdZLz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfOrdZLz2cUz2cUZR.evaluate = function (hs_zddOrd726CU1f, hs_zddOrd826CU1g, hs_zddOrd926CU1h) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddOrd726CU1f, hs_zddOrd826CU1g, hs_zddOrd926CU1h);
    };
    this.hs_zdfOrdZLz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfOrdZLz2cUz2cUz2cUZR.evaluate = function (hs_zddOrd726CU4V, hs_zddOrd826CU4W, hs_zddOrd926CU4X, hs_zddOrd1026CU4Y) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddOrd726CU4V, hs_zddOrd826CU4W, hs_zddOrd926CU4X, hs_zddOrd1026CU4Y);
    };
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddOrd726CU9j, hs_zddOrd826CU9k, hs_zddOrd926CU9l, hs_zddOrd1026CU9m, hs_zddOrd1126CU9n) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddOrd726CU9j, hs_zddOrd826CU9k, hs_zddOrd926CU9l, hs_zddOrd1026CU9m, hs_zddOrd1126CU9n);
    };
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddOrd726CUep, hs_zddOrd826CUeq, hs_zddOrd926CUer, hs_zddOrd1026CUes, hs_zddOrd1126CUet, hs_zddOrd1226CUeu) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddOrd726CUep, hs_zddOrd826CUeq, hs_zddOrd926CUer, hs_zddOrd1026CUes, hs_zddOrd1126CUet, hs_zddOrd1226CUeu);
    };
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddOrd726CUkd, hs_zddOrd826CUke, hs_zddOrd926CUkf, hs_zddOrd1026CUkg, hs_zddOrd1126CUkh, hs_zddOrd1226CUki, hs_zddOrd1326CUkj) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddOrd726CUkd, hs_zddOrd826CUke, hs_zddOrd926CUkf, hs_zddOrd1026CUkg, hs_zddOrd1126CUkh, hs_zddOrd1226CUki, hs_zddOrd1326CUkj);
    };
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddOrd726CUqJ, hs_zddOrd826CUqK, hs_zddOrd926CUqL, hs_zddOrd1026CUqM, hs_zddOrd1126CUqN, hs_zddOrd1226CUqO, hs_zddOrd1326CUqP, hs_zddOrd1426CUqQ) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddOrd726CUqJ, hs_zddOrd826CUqK, hs_zddOrd926CUqL, hs_zddOrd1026CUqM, hs_zddOrd1126CUqN, hs_zddOrd1226CUqO, hs_zddOrd1326CUqP, hs_zddOrd1426CUqQ);
    };
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddOrd726CUxX, hs_zddOrd826CUxY, hs_zddOrd926CUxZ, hs_zddOrd1026CUy0, hs_zddOrd1126CUy1, hs_zddOrd1226CUy2, hs_zddOrd1326CUy3, hs_zddOrd1426CUy4, hs_zddOrd1526CUy5) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddOrd726CUxX, hs_zddOrd826CUxY, hs_zddOrd926CUxZ, hs_zddOrd1026CUy0, hs_zddOrd1126CUy1, hs_zddOrd1226CUy2, hs_zddOrd1326CUy3, hs_zddOrd1426CUy4, hs_zddOrd1526CUy5);
    };
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddOrd726CUFT, hs_zddOrd826CUFU, hs_zddOrd926CUFV, hs_zddOrd1026CUFW, hs_zddOrd1126CUFX, hs_zddOrd1226CUFY, hs_zddOrd1326CUFZ, hs_zddOrd1426CUG0, hs_zddOrd1526CUG1, hs_zddOrd1626CUG2) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddOrd726CUFT, hs_zddOrd826CUFU, hs_zddOrd926CUFV, hs_zddOrd1026CUFW, hs_zddOrd1126CUFX, hs_zddOrd1226CUFY, hs_zddOrd1326CUFZ, hs_zddOrd1426CUG0, hs_zddOrd1526CUG1, hs_zddOrd1626CUG2);
    };
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddOrd726CUOx, hs_zddOrd826CUOy, hs_zddOrd926CUOz, hs_zddOrd1026CUOA, hs_zddOrd1126CUOB, hs_zddOrd1226CUOC, hs_zddOrd1326CUOD, hs_zddOrd1426CUOE, hs_zddOrd1526CUOF, hs_zddOrd1626CUOG, hs_zddOrd1726CUOH) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddOrd726CUOx, hs_zddOrd826CUOy, hs_zddOrd926CUOz, hs_zddOrd1026CUOA, hs_zddOrd1126CUOB, hs_zddOrd1226CUOC, hs_zddOrd1326CUOD, hs_zddOrd1426CUOE, hs_zddOrd1526CUOF, hs_zddOrd1626CUOG, hs_zddOrd1726CUOH);
    };
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddOrd726CUXT, hs_zddOrd826CUXU, hs_zddOrd926CUXV, hs_zddOrd1026CUXW, hs_zddOrd1126CUXX, hs_zddOrd1226CUXY, hs_zddOrd1326CUXZ, hs_zddOrd1426CUY0, hs_zddOrd1526CUY1, hs_zddOrd1626CUY2, hs_zddOrd1726CUY3, hs_zddOrd1826CUY4) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddOrd726CUXT, hs_zddOrd826CUXU, hs_zddOrd926CUXV, hs_zddOrd1026CUXW, hs_zddOrd1126CUXX, hs_zddOrd1226CUXY, hs_zddOrd1326CUXZ, hs_zddOrd1426CUY0, hs_zddOrd1526CUY1, hs_zddOrd1626CUY2, hs_zddOrd1726CUY3, hs_zddOrd1826CUY4);
    };
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddOrd726CV7X, hs_zddOrd826CV7Y, hs_zddOrd926CV7Z, hs_zddOrd1026CV80, hs_zddOrd1126CV81, hs_zddOrd1226CV82, hs_zddOrd1326CV83, hs_zddOrd1426CV84, hs_zddOrd1526CV85, hs_zddOrd1626CV86, hs_zddOrd1726CV87, hs_zddOrd1826CV88, hs_zddOrd1926CV89) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddOrd726CV7X, hs_zddOrd826CV7Y, hs_zddOrd926CV7Z, hs_zddOrd1026CV80, hs_zddOrd1126CV81, hs_zddOrd1226CV82, hs_zddOrd1326CV83, hs_zddOrd1426CV84, hs_zddOrd1526CV85, hs_zddOrd1626CV86, hs_zddOrd1726CV87, hs_zddOrd1826CV88, hs_zddOrd1926CV89);
    };
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddOrd726CViJ, hs_zddOrd826CViK, hs_zddOrd926CViL, hs_zddOrd1026CViM, hs_zddOrd1126CViN, hs_zddOrd1226CViO, hs_zddOrd1326CViP, hs_zddOrd1426CViQ, hs_zddOrd1526CViR, hs_zddOrd1626CViS, hs_zddOrd1726CViT, hs_zddOrd1826CViU, hs_zddOrd1926CViV, hs_zddOrd2026CViW) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddOrd726CViJ, hs_zddOrd826CViK, hs_zddOrd926CViL, hs_zddOrd1026CViM, hs_zddOrd1126CViN, hs_zddOrd1226CViO, hs_zddOrd1326CViP, hs_zddOrd1426CViQ, hs_zddOrd1526CViR, hs_zddOrd1626CViS, hs_zddOrd1726CViT, hs_zddOrd1826CViU, hs_zddOrd1926CViV, hs_zddOrd2026CViW);
    };
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddOrd726CVud, hs_zddOrd826CVue, hs_zddOrd926CVuf, hs_zddOrd1026CVug, hs_zddOrd1126CVuh, hs_zddOrd1226CVui, hs_zddOrd1326CVuj, hs_zddOrd1426CVuk, hs_zddOrd1526CVul, hs_zddOrd1626CVum, hs_zddOrd1726CVun, hs_zddOrd1826CVuo, hs_zddOrd1926CVup, hs_zddOrd2026CVuq, hs_zddOrd2126CVur) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddOrd726CVud, hs_zddOrd826CVue, hs_zddOrd926CVuf, hs_zddOrd1026CVug, hs_zddOrd1126CVuh, hs_zddOrd1226CVui, hs_zddOrd1326CVuj, hs_zddOrd1426CVuk, hs_zddOrd1526CVul, hs_zddOrd1626CVum, hs_zddOrd1726CVun, hs_zddOrd1826CVuo, hs_zddOrd1926CVup, hs_zddOrd2026CVuq, hs_zddOrd2126CVur);
    };
    this.hs_zdfOrdBool.notEvaluated = true;
    this.hs_zdfOrdBool.evaluate = function () {
        $hs.modules.GHCziClasses.loadDependencies();
        return this;
    };
    this.hs_zdfOrdOrdering.notEvaluated = true;
    this.hs_zdfOrdOrdering.evaluate = function () {
        $hs.modules.GHCziClasses.loadDependencies();
        return this;
    };
    this.hs_zdfEqArity.notEvaluated = true;
    this.hs_zdfEqArity.evaluate = function () {
        $hs.modules.GHCziClasses.loadDependencies();
        return this;
    };
    this.hs_zdfEqAssociativity.notEvaluated = true;
    this.hs_zdfEqAssociativity.evaluate = function () {
        $hs.modules.GHCziClasses.loadDependencies();
        return this;
    };
    this.hs_zdfEqFixity.notEvaluated = true;
    this.hs_zdfEqFixity.evaluate = function () {
        $hs.modules.GHCziClasses.loadDependencies();
        return this;
    };
    this.hs_zdfOrdArity.notEvaluated = true;
    this.hs_zdfOrdArity.evaluate = function () {
        $hs.modules.GHCziClasses.loadDependencies();
        return this;
    };
    this.hs_zdfOrdAssociativity.notEvaluated = true;
    this.hs_zdfOrdAssociativity.evaluate = function () {
        $hs.modules.GHCziClasses.loadDependencies();
        return this;
    };
    this.hs_zdfOrdFixity.notEvaluated = true;
    this.hs_zdfOrdFixity.evaluate = function () {
        $hs.modules.GHCziClasses.loadDependencies();
        return this;
    };
    this.hs_DZCEq.notEvaluated = true;
    this.hs_DZCEq.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_DZCOrd.notEvaluated = true;
    this.hs_DZCOrd.evaluate = function (hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
};
$hs.modules.GHCziClasses.initAfterDependencies = function () {
    this.hs_zeze.notEvaluated = false;
    this.hs_zsze.notEvaluated = false;
    this.hs_zdp1Ord.notEvaluated = false;
    this.hs_compare.notEvaluated = false;
    this.hs_zl.notEvaluated = false;
    this.hs_zgze.notEvaluated = false;
    this.hs_zg.notEvaluated = false;
    this.hs_zlze.notEvaluated = false;
    this.hs_max.notEvaluated = false;
    this.hs_min.notEvaluated = false;
    this.hs_zddmmin.notEvaluated = false;
    this.hs_zddmmax.notEvaluated = false;
    this.hs_zddmzlze.notEvaluated = false;
    this.hs_zddmzg.notEvaluated = false;
    this.hs_zddmzgze.notEvaluated = false;
    this.hs_zddmzl.notEvaluated = false;
    this.hs_zddmcompare.notEvaluated = false;
    this.hs_not.notEvaluated = false;
    this.hs_zddmzeze.notEvaluated = false;
    this.hs_zddmzsze.notEvaluated = false;
    this.hs_zbzb.notEvaluated = false;
    this.hs_zaza.notEvaluated = false;
    this.hs_compareIntzh.notEvaluated = false;
    this.hs_compareInt.notEvaluated = false;
    this.hs_leInt.notEvaluated = false;
    this.hs_ltInt.notEvaluated = false;
    this.hs_geInt.notEvaluated = false;
    this.hs_gtInt.notEvaluated = false;
    this.hs_neInt.notEvaluated = false;
    this.hs_eqInt.notEvaluated = false;
    this.hs_zdfEqChar.notEvaluated = false;
    this.hs_zdfEqChar.evaluate = function () {
        return this;
    };
    this.hs_zdfEqZMZN.notEvaluated = false;
    this.hs_zdfEqInteger.notEvaluated = false;
    this.hs_zdfEqInteger.evaluate = function () {
        return this;
    };
    this.hs_zdfEqFloat.notEvaluated = false;
    this.hs_zdfEqFloat.evaluate = function () {
        return this;
    };
    this.hs_zdfEqDouble.notEvaluated = false;
    this.hs_zdfEqDouble.evaluate = function () {
        return this;
    };
    this.hs_zdfEqInt.notEvaluated = false;
    this.hs_zdfEqInt.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdChar.notEvaluated = false;
    this.hs_zdfOrdChar.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdZMZN.notEvaluated = false;
    this.hs_zdfOrdInteger.notEvaluated = false;
    this.hs_zdfOrdInteger.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdFloat.notEvaluated = false;
    this.hs_zdfOrdFloat.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdDouble.notEvaluated = false;
    this.hs_zdfOrdDouble.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdInt.notEvaluated = false;
    this.hs_zdfOrdInt.evaluate = function () {
        return this;
    };
    this.hs_zdfEqZLZR.notEvaluated = false;
    this.hs_zdfEqZLZR.evaluate = function () {
        return this;
    };
    this.hs_zdfEqZLz2cUZR.notEvaluated = false;
    this.hs_zdfEqZLz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfEqZLz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfEqBool.notEvaluated = false;
    this.hs_zdfEqBool.evaluate = function () {
        return this;
    };
    this.hs_zdfEqOrdering.notEvaluated = false;
    this.hs_zdfEqOrdering.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdZLZR.notEvaluated = false;
    this.hs_zdfOrdZLZR.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdZLz2cUZR.notEvaluated = false;
    this.hs_zdfOrdZLz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfOrdZLz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfOrdBool.notEvaluated = false;
    this.hs_zdfOrdBool.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdOrdering.notEvaluated = false;
    this.hs_zdfOrdOrdering.evaluate = function () {
        return this;
    };
    this.hs_zdfEqArity.notEvaluated = false;
    this.hs_zdfEqArity.evaluate = function () {
        return this;
    };
    this.hs_zdfEqAssociativity.notEvaluated = false;
    this.hs_zdfEqAssociativity.evaluate = function () {
        return this;
    };
    this.hs_zdfEqFixity.notEvaluated = false;
    this.hs_zdfEqFixity.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdArity.notEvaluated = false;
    this.hs_zdfOrdArity.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdAssociativity.notEvaluated = false;
    this.hs_zdfOrdAssociativity.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdFixity.notEvaluated = false;
    this.hs_zdfOrdFixity.evaluate = function () {
        return this;
    };
    this.hs_DZCEq.notEvaluated = false;
    this.hs_DZCOrd.notEvaluated = false;
    var hs_zdczsze25uuRm = new $hs.Func(2);
    var hs_zdczeze25uuRx = new $hs.Func(2);
    var hs_zdczsze125uuRI = new $hs.Func(3);
    var hs_zdczeze125uuRJ = new $hs.Func(1);
    var hs_zddEq25uuRK = new $hs.Thunk();
    var hs_zdczeze225uuRL = new $hs.Func(2);
    var hs_a25uuRM = new $hs.Func(2);
    var hs_zdczsze225uuRN = new $hs.Func(2);
    var hs_a125uuRO = new $hs.Thunk();
    var hs_zdfEqZMZN125uuRP = new $hs.Data(1);
    var hs_zdczeze325uuSN = new $hs.Func(2);
    var hs_zdczsze325uuSY = new $hs.Func(2);
    var hs_zdczeze425uuT4 = new $hs.Func(2);
    var hs_zdczsze425uuTf = new $hs.Func(2);
    var hs_zdczdp1Ord25uuTl = new $hs.Func(1);
    var hs_zdczlze25uuTp = new $hs.Func(2);
    var hs_zdczg25uuTA = new $hs.Func(2);
    var hs_zdczgze25uuTL = new $hs.Func(2);
    var hs_zdczl25uuTW = new $hs.Func(2);
    var hs_zdcmin25uuU7 = new $hs.Func(2);
    var hs_zdcmax25uuU8 = new $hs.Func(2);
    var hs_zddEq125uuU9 = new $hs.Thunk();
    var hs_zdccompare25uuUa = new $hs.Func(2);
    var hs_a225uuUr = new $hs.Thunk();
    var hs_a325uuUs = new $hs.Thunk();
    var hs_zdcmin125uuUt = new $hs.Func(1);
    var hs_zdcmax125uuUu = new $hs.Func(1);
    var hs_zdczlze125uuUv = new $hs.Func(1);
    var hs_zdczg125uuUw = new $hs.Func(1);
    var hs_zdczgze125uuUx = new $hs.Func(1);
    var hs_zdczl125uuUy = new $hs.Func(1);
    var hs_zdccompare125uuUz = new $hs.Func(1);
    var hs_zddOrd25uuUA = new $hs.Thunk();
    var hs_zdccompare225uuUB = new $hs.Func(2);
    var hs_zddOrd125uuUC = new $hs.Thunk();
    var hs_zdczl225uuUD = new $hs.Func(2);
    var hs_a425uuUE = new $hs.Thunk();
    var hs_zddOrd225uuUF = new $hs.Thunk();
    var hs_zdczgze225uuUG = new $hs.Func(2);
    var hs_a525uuUH = new $hs.Thunk();
    var hs_zddOrd325uuUI = new $hs.Thunk();
    var hs_zdczg225uuUJ = new $hs.Func(2);
    var hs_a625uuUK = new $hs.Thunk();
    var hs_zddOrd425uuUL = new $hs.Thunk();
    var hs_zdczlze225uuUM = new $hs.Func(2);
    var hs_a725uuUN = new $hs.Thunk();
    var hs_zddOrd525uuUO = new $hs.Thunk();
    var hs_zdcmax225uuUP = new $hs.Func(2);
    var hs_a825uuUQ = new $hs.Thunk();
    var hs_zddOrd625uuUR = new $hs.Thunk();
    var hs_zdcmin225uuUS = new $hs.Func(2);
    var hs_a925uuUT = new $hs.Thunk();
    var hs_a1025uuUU = new $hs.Thunk();
    var hs_zdfOrdZMZN125uuUV = new $hs.Data(1);
    var hs_zdcmin325uuXf = new $hs.Func(2);
    var hs_zdcmax325uuXg = new $hs.Func(2);
    var hs_zdczlze325uuXr = new $hs.Func(2);
    var hs_zdczg325uuXC = new $hs.Func(2);
    var hs_zdczgze325uuXN = new $hs.Func(2);
    var hs_zdczl325uuXY = new $hs.Func(2);
    var hs_zdccompare325uuY9 = new $hs.Func(2);
    var hs_zdcmin425uuYm = new $hs.Func(2);
    var hs_zdcmax425uuYn = new $hs.Func(2);
    var hs_zdczlze425uuYy = new $hs.Func(2);
    var hs_zdczg425uuYJ = new $hs.Func(2);
    var hs_zdczgze425uuYU = new $hs.Func(2);
    var hs_zdczl425uuZ5 = new $hs.Func(2);
    var hs_zdccompare425uuZg = new $hs.Func(2);
    var hs_zdcmin525uuZt = new $hs.Func(2);
    var hs_zdcmax525uuZu = new $hs.Func(2);
    var hs_zdcmin625uuZF = new $hs.Func(2);
    var hs_zdcmax625uuZG = new $hs.Func(2);
    var hs_zdczeze525uuZR = new $hs.Func(2);
    var hs_zdczsze525uuZY = new $hs.Func(2);
    var hs_zdczeze625uv04 = new $hs.Func(4);
    var hs_zdczsze625uv0o = new $hs.Func(2);
    var hs_zdczeze725uv0H = new $hs.Func(5);
    var hs_zdczsze725uv18 = new $hs.Func(3);
    var hs_zdczeze825uv1v = new $hs.Func(6);
    var hs_zdczsze825uv23 = new $hs.Func(4);
    var hs_zdczeze925uv2u = new $hs.Func(7);
    var hs_zdczsze925uv39 = new $hs.Func(5);
    var hs_zdczeze1025uv3E = new $hs.Func(8);
    var hs_zdczsze1025uv4q = new $hs.Func(6);
    var hs_zdczeze1125uv4Z = new $hs.Func(9);
    var hs_zdczsze1125uv5S = new $hs.Func(7);
    var hs_zdczeze1225uv6v = new $hs.Func(10);
    var hs_zdczsze1225uv7v = new $hs.Func(8);
    var hs_zdczeze1325uv8c = new $hs.Func(11);
    var hs_zdczsze1325uv9j = new $hs.Func(9);
    var hs_zdczeze1425uva4 = new $hs.Func(12);
    var hs_zdczsze1425uvbi = new $hs.Func(10);
    var hs_zdczeze1525uvc7 = new $hs.Func(13);
    var hs_zdczsze1525uvds = new $hs.Func(11);
    var hs_zdczeze1625uvel = new $hs.Func(14);
    var hs_zdczsze1625uvfN = new $hs.Func(12);
    var hs_zdczeze1725uvgK = new $hs.Func(15);
    var hs_zdczsze1725uvij = new $hs.Func(13);
    var hs_zdczeze1825uvjk = new $hs.Func(16);
    var hs_zdczsze1825uvl0 = new $hs.Func(14);
    var hs_zdczeze1925uvm5 = new $hs.Func(17);
    var hs_zdczsze1925uvnS = new $hs.Func(15);
    var hs_zdczeze2025uvp1 = new $hs.Func(2);
    var hs_zdczsze2025uvp8 = new $hs.Func(2);
    var hs_zdczeze2125uvpe = new $hs.Func(2);
    var hs_zdczsze2125uvpn = new $hs.Func(2);
    var hs_zdczlze525uvpt = new $hs.Func(2);
    var hs_zdczg525uvpA = new $hs.Func(2);
    var hs_zdczgze525uvpH = new $hs.Func(2);
    var hs_zdczl525uvpO = new $hs.Func(2);
    var hs_zdccompare525uvpV = new $hs.Func(2);
    var hs_zdcmin725uvq2 = new $hs.Func(2);
    var hs_zdcmax725uvq3 = new $hs.Func(2);
    var hs_zdczlze625uvqe = new $hs.Func(4);
    var hs_zdczg625uvqy = new $hs.Func(4);
    var hs_zdczgze625uvqS = new $hs.Func(4);
    var hs_zdczl625uvrc = new $hs.Func(4);
    var hs_zdccompare625uvrw = new $hs.Func(4);
    var hs_zdczdp1Ord125uvrQ = new $hs.Func(2);
    var hs_zdcmin825uvrX = new $hs.Func(2);
    var hs_zdcmax825uvrY = new $hs.Func(2);
    var hs_zdczlze725uvsz = new $hs.Func(5);
    var hs_zdczg725uvt0 = new $hs.Func(5);
    var hs_zdczgze725uvtr = new $hs.Func(5);
    var hs_zdczl725uvtS = new $hs.Func(5);
    var hs_zdccompare725uvuj = new $hs.Func(5);
    var hs_zdczdp1Ord225uvuK = new $hs.Func(3);
    var hs_zdcmin925uvuU = new $hs.Func(3);
    var hs_zdcmax925uvuV = new $hs.Func(3);
    var hs_zdczlze825uvvC = new $hs.Func(6);
    var hs_zdczg825uvwa = new $hs.Func(6);
    var hs_zdczgze825uvwI = new $hs.Func(6);
    var hs_zdczl825uvxg = new $hs.Func(6);
    var hs_zdccompare825uvxO = new $hs.Func(6);
    var hs_zdczdp1Ord325uvym = new $hs.Func(4);
    var hs_zdcmin1025uvyz = new $hs.Func(4);
    var hs_zdcmax1025uvyA = new $hs.Func(4);
    var hs_zdczlze925uvzn = new $hs.Func(7);
    var hs_zdczg925uvA2 = new $hs.Func(7);
    var hs_zdczgze925uvAH = new $hs.Func(7);
    var hs_zdczl925uvBm = new $hs.Func(7);
    var hs_zdccompare925uvC1 = new $hs.Func(7);
    var hs_zdczdp1Ord425uvCG = new $hs.Func(5);
    var hs_zdcmin1125uvCW = new $hs.Func(5);
    var hs_zdcmax1125uvCX = new $hs.Func(5);
    var hs_zdczlze1025uvDQ = new $hs.Func(8);
    var hs_zdczg1025uvEC = new $hs.Func(8);
    var hs_zdczgze1025uvFo = new $hs.Func(8);
    var hs_zdczl1025uvGa = new $hs.Func(8);
    var hs_zdccompare1025uvGW = new $hs.Func(8);
    var hs_zdczdp1Ord525uvHI = new $hs.Func(6);
    var hs_zdcmin1225uvI1 = new $hs.Func(6);
    var hs_zdcmax1225uvI2 = new $hs.Func(6);
    var hs_zdczlze1125uvJ1 = new $hs.Func(9);
    var hs_zdczg1125uvJU = new $hs.Func(9);
    var hs_zdczgze1125uvKN = new $hs.Func(9);
    var hs_zdczl1125uvLG = new $hs.Func(9);
    var hs_zdccompare1125uvMz = new $hs.Func(9);
    var hs_zdczdp1Ord625uvNs = new $hs.Func(7);
    var hs_zdcmin1325uvNO = new $hs.Func(7);
    var hs_zdcmax1325uvNP = new $hs.Func(7);
    var hs_zdczlze1225uvOU = new $hs.Func(10);
    var hs_zdczg1225uvPU = new $hs.Func(10);
    var hs_zdczgze1225uvQU = new $hs.Func(10);
    var hs_zdczl1225uvRU = new $hs.Func(10);
    var hs_zdccompare1225uvSU = new $hs.Func(10);
    var hs_zdczdp1Ord725uvTU = new $hs.Func(8);
    var hs_zdcmin1425uvUj = new $hs.Func(8);
    var hs_zdcmax1425uvUk = new $hs.Func(8);
    var hs_zdczlze1325uvVv = new $hs.Func(11);
    var hs_zdczg1325uvWC = new $hs.Func(11);
    var hs_zdczgze1325uvXJ = new $hs.Func(11);
    var hs_zdczl1325uvYQ = new $hs.Func(11);
    var hs_zdccompare1325uvZX = new $hs.Func(11);
    var hs_zdczdp1Ord825uw14 = new $hs.Func(9);
    var hs_zdcmin1525uw1w = new $hs.Func(9);
    var hs_zdcmax1525uw1x = new $hs.Func(9);
    var hs_zdczlze1425uw2O = new $hs.Func(12);
    var hs_zdczg1425uw42 = new $hs.Func(12);
    var hs_zdczgze1425uw5g = new $hs.Func(12);
    var hs_zdczl1425uw6u = new $hs.Func(12);
    var hs_zdccompare1425uw7I = new $hs.Func(12);
    var hs_zdczdp1Ord925uw8W = new $hs.Func(10);
    var hs_zdcmin1625uw9r = new $hs.Func(10);
    var hs_zdcmax1625uw9s = new $hs.Func(10);
    var hs_zdczlze1525uwaP = new $hs.Func(13);
    var hs_zdczg1525uwca = new $hs.Func(13);
    var hs_zdczgze1525uwdv = new $hs.Func(13);
    var hs_zdczl1525uweQ = new $hs.Func(13);
    var hs_zdccompare1525uwgb = new $hs.Func(13);
    var hs_zdczdp1Ord1025uwhw = new $hs.Func(11);
    var hs_zdcmin1725uwi4 = new $hs.Func(11);
    var hs_zdcmax1725uwi5 = new $hs.Func(11);
    var hs_zdczlze1625uwjy = new $hs.Func(14);
    var hs_zdczg1625uwl0 = new $hs.Func(14);
    var hs_zdczgze1625uwms = new $hs.Func(14);
    var hs_zdczl1625uwnU = new $hs.Func(14);
    var hs_zdccompare1625uwpm = new $hs.Func(14);
    var hs_zdczdp1Ord1125uwqO = new $hs.Func(12);
    var hs_zdcmin1825uwrp = new $hs.Func(12);
    var hs_zdcmax1825uwrq = new $hs.Func(12);
    var hs_zdczlze1725uwsZ = new $hs.Func(15);
    var hs_zdczg1725uwuy = new $hs.Func(15);
    var hs_zdczgze1725uww7 = new $hs.Func(15);
    var hs_zdczl1725uwxG = new $hs.Func(15);
    var hs_zdccompare1725uwzf = new $hs.Func(15);
    var hs_zdczdp1Ord1225uwAO = new $hs.Func(13);
    var hs_zdcmin1925uwBs = new $hs.Func(13);
    var hs_zdcmax1925uwBt = new $hs.Func(13);
    var hs_zdczlze1825uwD8 = new $hs.Func(16);
    var hs_zdczg1825uwEO = new $hs.Func(16);
    var hs_zdczgze1825uwGu = new $hs.Func(16);
    var hs_zdczl1825uwIa = new $hs.Func(16);
    var hs_zdccompare1825uwJQ = new $hs.Func(16);
    var hs_zdczdp1Ord1325uwLw = new $hs.Func(14);
    var hs_zdcmin2025uwMd = new $hs.Func(14);
    var hs_zdcmax2025uwMe = new $hs.Func(14);
    var hs_zdczlze1925uwNZ = new $hs.Func(17);
    var hs_zdczg1925uwPM = new $hs.Func(17);
    var hs_zdczgze1925uwRz = new $hs.Func(17);
    var hs_zdczl1925uwTm = new $hs.Func(17);
    var hs_zdccompare1925uwV9 = new $hs.Func(17);
    var hs_zdczdp1Ord1425uwWW = new $hs.Func(15);
    var hs_zdcmin2125uwXG = new $hs.Func(15);
    var hs_zdcmax2125uwXH = new $hs.Func(15);
    var hs_zdczlze2025uwZy = new $hs.Func(2);
    var hs_zdczg2025uwZF = new $hs.Func(2);
    var hs_zdczgze2025uwZN = new $hs.Func(2);
    var hs_zdczl2025uwZV = new $hs.Func(2);
    var hs_zdccompare2025ux02 = new $hs.Func(2);
    var hs_zdcmin2225ux0a = new $hs.Func(2);
    var hs_zdcmax2225ux0b = new $hs.Func(2);
    var hs_zdczlze2125ux0m = new $hs.Func(2);
    var hs_zdczg2125ux0v = new $hs.Func(2);
    var hs_zdczgze2125ux0E = new $hs.Func(2);
    var hs_zdczl2125ux0N = new $hs.Func(2);
    var hs_zdccompare2125ux0W = new $hs.Func(2);
    var hs_zdcmin2325ux15 = new $hs.Func(2);
    var hs_zdcmax2325ux16 = new $hs.Func(2);
    var hs_zdczeze2225ux1h = new $hs.Func(2);
    var hs_zdczsze2225ux1x = new $hs.Func(2);
    var hs_zdczeze2325ux1D = new $hs.Func(2);
    var hs_zdczsze2325ux1M = new $hs.Func(2);
    var hs_zdczeze2425ux1S = new $hs.Func(2);
    var hs_zdczsze2425ux2f = new $hs.Func(2);
    var hs_zdczlze2225ux2l = new $hs.Func(2);
    var hs_zdczg2225ux2y = new $hs.Func(2);
    var hs_zdczgze2225ux2L = new $hs.Func(2);
    var hs_zdczl2225ux2Y = new $hs.Func(2);
    var hs_zdccompare2225ux3b = new $hs.Func(2);
    var hs_zdcmin2425ux3o = new $hs.Func(2);
    var hs_zdcmax2425ux3p = new $hs.Func(2);
    var hs_zdczlze2325ux3A = new $hs.Func(2);
    var hs_zdczg2325ux3J = new $hs.Func(2);
    var hs_zdczgze2325ux3S = new $hs.Func(2);
    var hs_zdczl2325ux41 = new $hs.Func(2);
    var hs_zdccompare2325ux4a = new $hs.Func(2);
    var hs_zdcmin2525ux4j = new $hs.Func(2);
    var hs_zdcmax2525ux4k = new $hs.Func(2);
    var hs_zdczlze2425ux4v = new $hs.Func(2);
    var hs_zdczg2425ux4O = new $hs.Func(2);
    var hs_zdczgze2425ux57 = new $hs.Func(2);
    var hs_zdczl2425ux5q = new $hs.Func(2);
    var hs_zdccompare2425ux5J = new $hs.Func(2);
    var hs_zdcmin2625ux62 = new $hs.Func(2);
    var hs_zdcmax2625ux63 = new $hs.Func(2);
    this.hs_zeze.evaluate = function (hs_tpl26CTjp) {
        var hs_tpl26CVCv = hs_tpl26CTjp;
        if (hs_tpl26CTjp.notEvaluated) {
            hs_tpl26CVCv = hs_tpl26CTjp.hscall();
        }
        var hs_tpl26CTjt = hs_tpl26CVCv.data[0];
        if (hs_tpl26CTjt.notEvaluated) {
            return hs_tpl26CTjt.hscall();
        } else {
            return hs_tpl26CTjt;
        }
    };
    this.hs_zsze.evaluate = function (hs_tpl26CTjv) {
        var hs_tpl26CVCx = hs_tpl26CTjv;
        if (hs_tpl26CTjv.notEvaluated) {
            hs_tpl26CVCx = hs_tpl26CTjv.hscall();
        }
        var hs_tpl26CTjz = hs_tpl26CVCx.data[1];
        if (hs_tpl26CTjz.notEvaluated) {
            return hs_tpl26CTjz.hscall();
        } else {
            return hs_tpl26CTjz;
        }
    };
    this.hs_zdp1Ord.evaluate = function (hs_tpl26CTjB) {
        var hs_tpl26CVCF = hs_tpl26CTjB;
        if (hs_tpl26CTjB.notEvaluated) {
            hs_tpl26CVCF = hs_tpl26CTjB.hscall();
        }
        var hs_tpl26CTjL = hs_tpl26CVCF.data[0];
        if (hs_tpl26CTjL.notEvaluated) {
            return hs_tpl26CTjL.hscall();
        } else {
            return hs_tpl26CTjL;
        }
    };
    this.hs_compare.evaluate = function (hs_tpl26CTjN) {
        var hs_tpl26CVCN = hs_tpl26CTjN;
        if (hs_tpl26CTjN.notEvaluated) {
            hs_tpl26CVCN = hs_tpl26CTjN.hscall();
        }
        var hs_tpl26CTjX = hs_tpl26CVCN.data[1];
        if (hs_tpl26CTjX.notEvaluated) {
            return hs_tpl26CTjX.hscall();
        } else {
            return hs_tpl26CTjX;
        }
    };
    this.hs_zl.evaluate = function (hs_tpl26CTjZ) {
        var hs_tpl26CVCV = hs_tpl26CTjZ;
        if (hs_tpl26CTjZ.notEvaluated) {
            hs_tpl26CVCV = hs_tpl26CTjZ.hscall();
        }
        var hs_tpl26CTk9 = hs_tpl26CVCV.data[2];
        if (hs_tpl26CTk9.notEvaluated) {
            return hs_tpl26CTk9.hscall();
        } else {
            return hs_tpl26CTk9;
        }
    };
    this.hs_zgze.evaluate = function (hs_tpl26CTkb) {
        var hs_tpl26CVD3 = hs_tpl26CTkb;
        if (hs_tpl26CTkb.notEvaluated) {
            hs_tpl26CVD3 = hs_tpl26CTkb.hscall();
        }
        var hs_tpl26CTkl = hs_tpl26CVD3.data[3];
        if (hs_tpl26CTkl.notEvaluated) {
            return hs_tpl26CTkl.hscall();
        } else {
            return hs_tpl26CTkl;
        }
    };
    this.hs_zg.evaluate = function (hs_tpl26CTkn) {
        var hs_tpl26CVDb = hs_tpl26CTkn;
        if (hs_tpl26CTkn.notEvaluated) {
            hs_tpl26CVDb = hs_tpl26CTkn.hscall();
        }
        var hs_tpl26CTkx = hs_tpl26CVDb.data[4];
        if (hs_tpl26CTkx.notEvaluated) {
            return hs_tpl26CTkx.hscall();
        } else {
            return hs_tpl26CTkx;
        }
    };
    this.hs_zlze.evaluate = function (hs_tpl26CTkz) {
        var hs_tpl26CVDj = hs_tpl26CTkz;
        if (hs_tpl26CTkz.notEvaluated) {
            hs_tpl26CVDj = hs_tpl26CTkz.hscall();
        }
        var hs_tpl26CTkJ = hs_tpl26CVDj.data[5];
        if (hs_tpl26CTkJ.notEvaluated) {
            return hs_tpl26CTkJ.hscall();
        } else {
            return hs_tpl26CTkJ;
        }
    };
    this.hs_max.evaluate = function (hs_tpl26CTkL) {
        var hs_tpl26CVDr = hs_tpl26CTkL;
        if (hs_tpl26CTkL.notEvaluated) {
            hs_tpl26CVDr = hs_tpl26CTkL.hscall();
        }
        var hs_tpl26CTkV = hs_tpl26CVDr.data[6];
        if (hs_tpl26CTkV.notEvaluated) {
            return hs_tpl26CTkV.hscall();
        } else {
            return hs_tpl26CTkV;
        }
    };
    this.hs_min.evaluate = function (hs_tpl26CTkX) {
        var hs_tpl26CVDz = hs_tpl26CTkX;
        if (hs_tpl26CTkX.notEvaluated) {
            hs_tpl26CVDz = hs_tpl26CTkX.hscall();
        }
        var hs_tpl26CTl7 = hs_tpl26CVDz.data[7];
        if (hs_tpl26CTl7.notEvaluated) {
            return hs_tpl26CTl7.hscall();
        } else {
            return hs_tpl26CTl7;
        }
    };
    this.hs_zddmmin.evaluate = function (hs_zddOrd726CTlb, hs_x26CTlc, hs_y26CTld) {
        var hs_wild26CVDA = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd726CTlb, hs_x26CTlc, hs_y26CTld);
        switch (hs_wild26CVDA.tag) {
        case 1:
            if (hs_y26CTld.notEvaluated) {
                return hs_y26CTld.hscall();
            } else {
                return hs_y26CTld;
            }
        case 2:
            if (hs_x26CTlc.notEvaluated) {
                return hs_x26CTlc.hscall();
            } else {
                return hs_x26CTlc;
            }
        }
    };
    this.hs_zddmmax.evaluate = function (hs_zddOrd726CTli, hs_x26CTlj, hs_y26CTlk) {
        var hs_wild26CVDB = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd726CTli, hs_x26CTlj, hs_y26CTlk);
        switch (hs_wild26CVDB.tag) {
        case 1:
            if (hs_x26CTlj.notEvaluated) {
                return hs_x26CTlj.hscall();
            } else {
                return hs_x26CTlj;
            }
        case 2:
            if (hs_y26CTlk.notEvaluated) {
                return hs_y26CTlk.hscall();
            } else {
                return hs_y26CTlk;
            }
        }
    };
    this.hs_zddmzlze.evaluate = function (hs_zddOrd726CTlp, hs_x26CTlq, hs_y26CTlr) {
        var hs_wild26CVDC = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CTlp, hs_x26CTlq, hs_y26CTlr);
        switch (hs_wild26CVDC.tag) {
        case 3:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        default:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    this.hs_zddmzg.evaluate = function (hs_zddOrd726CTlw, hs_x26CTlx, hs_y26CTly) {
        var hs_wild26CVDD = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CTlw, hs_x26CTlx, hs_y26CTly);
        switch (hs_wild26CVDD.tag) {
        case 3:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        default:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    this.hs_zddmzgze.evaluate = function (hs_zddOrd726CTlD, hs_x26CTlE, hs_y26CTlF) {
        var hs_wild26CVDE = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CTlD, hs_x26CTlE, hs_y26CTlF);
        switch (hs_wild26CVDE.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        default:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    this.hs_zddmzl.evaluate = function (hs_zddOrd726CTlK, hs_x26CTlL, hs_y26CTlM) {
        var hs_wild26CVDF = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CTlK, hs_x26CTlL, hs_y26CTlM);
        switch (hs_wild26CVDF.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        default:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    this.hs_zddmcompare.evaluate = function (hs_zddOrd726CTlR, hs_eta26CTlT, hs_eta126CTlU) {
        var hs_sat26CVDG = $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd726CTlR);
        var hs_wild26CVDH = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_sat26CVDG, hs_eta26CTlT, hs_eta126CTlU);
        switch (hs_wild26CVDH.tag) {
        case 1:
            var hs_wild126CVDI = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd726CTlR, hs_eta26CTlT, hs_eta126CTlU);
            switch (hs_wild126CVDI.tag) {
            case 1:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 2:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    this.hs_not.evaluate = function (hs_ds26CTlY) {
        var hs_wild26CVDJ = hs_ds26CTlY;
        if (hs_ds26CTlY.notEvaluated) {
            hs_wild26CVDJ = hs_ds26CTlY.hscall();
        }
        switch (hs_wild26CVDJ.tag) {
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
    this.hs_zddmzeze.evaluate = function (hs_zddEq226CTm3, hs_x26CTm4, hs_y26CTm5) {
        var hs_wild26CVDK = $hs.modules.GHCziClasses.hs_zsze.hscall(hs_zddEq226CTm3, hs_x26CTm4, hs_y26CTm5);
        switch (hs_wild26CVDK.tag) {
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
    this.hs_zddmzsze.evaluate = function (hs_zddEq226CTma, hs_x26CTmb, hs_y26CTmc) {
        var hs_wild26CVDL = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq226CTma, hs_x26CTmb, hs_y26CTmc);
        switch (hs_wild26CVDL.tag) {
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
    this.hs_zbzb.evaluate = function (hs_ds26CTmg, hs_ds126CTmi) {
        var hs_wild26CVDM = hs_ds26CTmg;
        if (hs_ds26CTmg.notEvaluated) {
            hs_wild26CVDM = hs_ds26CTmg.hscall();
        }
        switch (hs_wild26CVDM.tag) {
        case 1:
            if (hs_ds126CTmi.notEvaluated) {
                return hs_ds126CTmi.hscall();
            } else {
                return hs_ds126CTmi;
            }
        case 2:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    this.hs_zaza.evaluate = function (hs_ds26CTml, hs_x26CTmn) {
        var hs_wild26CVDN = hs_ds26CTml;
        if (hs_ds26CTml.notEvaluated) {
            hs_wild26CVDN = hs_ds26CTml.hscall();
        }
        switch (hs_wild26CVDN.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            if (hs_x26CTmn.notEvaluated) {
                return hs_x26CTmn.hscall();
            } else {
                return hs_x26CTmn;
            }
        }
    };
    this.hs_compareIntzh.evaluate = function (hs_xzh26CTmq, hs_yzh26CTmr) {
        var hs_wild26CVDO = hs_xzh26CTmq < hs_yzh26CTmr ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26CVDO.tag) {
        case 1:
            var hs_wild126CVDP = hs_xzh26CTmq == hs_yzh26CTmr ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild126CVDP.tag) {
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
    this.hs_compareInt.evaluate = function (hs_ds26CTmw, hs_ds126CTmz) {
        var hs_wild26CVDR = hs_ds26CTmw;
        if (hs_ds26CTmw.notEvaluated) {
            hs_wild26CVDR = hs_ds26CTmw.hscall();
        }
        var hs_xzh26CTmC = hs_wild26CVDR.data[0];
        var hs_wild126CVDQ = hs_ds126CTmz;
        if (hs_ds126CTmz.notEvaluated) {
            hs_wild126CVDQ = hs_ds126CTmz.hscall();
        }
        var hs_yzh26CTmD = hs_wild126CVDQ.data[0];
        return $hs.modules.GHCziClasses.hs_compareIntzh.hscall(hs_xzh26CTmC, hs_yzh26CTmD);
    };
    this.hs_leInt.evaluate = function (hs_ds26CTmG, hs_ds126CTmJ) {
        var hs_wild26CVDT = hs_ds26CTmG;
        if (hs_ds26CTmG.notEvaluated) {
            hs_wild26CVDT = hs_ds26CTmG.hscall();
        }
        var hs_x26CTmM = hs_wild26CVDT.data[0];
        var hs_wild126CVDS = hs_ds126CTmJ;
        if (hs_ds126CTmJ.notEvaluated) {
            hs_wild126CVDS = hs_ds126CTmJ.hscall();
        }
        var hs_y26CTmN = hs_wild126CVDS.data[0];
        return hs_x26CTmM <= hs_y26CTmN ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    this.hs_ltInt.evaluate = function (hs_ds26CTmQ, hs_ds126CTmT) {
        var hs_wild26CVDV = hs_ds26CTmQ;
        if (hs_ds26CTmQ.notEvaluated) {
            hs_wild26CVDV = hs_ds26CTmQ.hscall();
        }
        var hs_x26CTmW = hs_wild26CVDV.data[0];
        var hs_wild126CVDU = hs_ds126CTmT;
        if (hs_ds126CTmT.notEvaluated) {
            hs_wild126CVDU = hs_ds126CTmT.hscall();
        }
        var hs_y26CTmX = hs_wild126CVDU.data[0];
        return hs_x26CTmW < hs_y26CTmX ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    this.hs_geInt.evaluate = function (hs_ds26CTn0, hs_ds126CTn3) {
        var hs_wild26CVDX = hs_ds26CTn0;
        if (hs_ds26CTn0.notEvaluated) {
            hs_wild26CVDX = hs_ds26CTn0.hscall();
        }
        var hs_x26CTn6 = hs_wild26CVDX.data[0];
        var hs_wild126CVDW = hs_ds126CTn3;
        if (hs_ds126CTn3.notEvaluated) {
            hs_wild126CVDW = hs_ds126CTn3.hscall();
        }
        var hs_y26CTn7 = hs_wild126CVDW.data[0];
        return hs_x26CTn6 >= hs_y26CTn7 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    this.hs_gtInt.evaluate = function (hs_ds26CTna, hs_ds126CTnd) {
        var hs_wild26CVDZ = hs_ds26CTna;
        if (hs_ds26CTna.notEvaluated) {
            hs_wild26CVDZ = hs_ds26CTna.hscall();
        }
        var hs_x26CTng = hs_wild26CVDZ.data[0];
        var hs_wild126CVDY = hs_ds126CTnd;
        if (hs_ds126CTnd.notEvaluated) {
            hs_wild126CVDY = hs_ds126CTnd.hscall();
        }
        var hs_y26CTnh = hs_wild126CVDY.data[0];
        return hs_x26CTng > hs_y26CTnh ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    this.hs_neInt.evaluate = function (hs_ds26CTnk, hs_ds126CTnn) {
        var hs_wild26CVE1 = hs_ds26CTnk;
        if (hs_ds26CTnk.notEvaluated) {
            hs_wild26CVE1 = hs_ds26CTnk.hscall();
        }
        var hs_x26CTnq = hs_wild26CVE1.data[0];
        var hs_wild126CVE0 = hs_ds126CTnn;
        if (hs_ds126CTnn.notEvaluated) {
            hs_wild126CVE0 = hs_ds126CTnn.hscall();
        }
        var hs_y26CTnr = hs_wild126CVE0.data[0];
        return hs_x26CTnq != hs_y26CTnr ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    this.hs_eqInt.evaluate = function (hs_ds26CTnu, hs_ds126CTnx) {
        var hs_wild26CVE3 = hs_ds26CTnu;
        if (hs_ds26CTnu.notEvaluated) {
            hs_wild26CVE3 = hs_ds26CTnu.hscall();
        }
        var hs_x26CTnA = hs_wild26CVE3.data[0];
        var hs_wild126CVE2 = hs_ds126CTnx;
        if (hs_ds126CTnx.notEvaluated) {
            hs_wild126CVE2 = hs_ds126CTnx.hscall();
        }
        var hs_y26CTnB = hs_wild126CVE2.data[0];
        return hs_x26CTnA == hs_y26CTnB ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczsze25uuRm.evaluate = function (hs_ds26CTnF, hs_ds126CTnI) {
        var hs_wild26CVE5 = hs_ds26CTnF;
        if (hs_ds26CTnF.notEvaluated) {
            hs_wild26CVE5 = hs_ds26CTnF.hscall();
        }
        var hs_c126CTnL = hs_wild26CVE5.data[0];
        var hs_wild126CVE4 = hs_ds126CTnI;
        if (hs_ds126CTnI.notEvaluated) {
            hs_wild126CVE4 = hs_ds126CTnI.hscall();
        }
        var hs_c226CTnM = hs_wild126CVE4.data[0];
        return hs_c126CTnL != hs_c226CTnM ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczeze25uuRx.evaluate = function (hs_ds26CTnQ, hs_ds126CTnT) {
        var hs_wild26CVE7 = hs_ds26CTnQ;
        if (hs_ds26CTnQ.notEvaluated) {
            hs_wild26CVE7 = hs_ds26CTnQ.hscall();
        }
        var hs_c126CTnW = hs_wild26CVE7.data[0];
        var hs_wild126CVE6 = hs_ds126CTnT;
        if (hs_ds126CTnT.notEvaluated) {
            hs_wild126CVE6 = hs_ds126CTnT.hscall();
        }
        var hs_c226CTnX = hs_wild126CVE6.data[0];
        return hs_c126CTnW == hs_c226CTnX ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    this.hs_zdfEqChar.data = [hs_zdczeze25uuRx, hs_zdczsze25uuRm];
    this.hs_zdfEqZMZN.evaluate = function (hs_zddEq226CTo7) {
        var hs_sat26CVE9 = new $hs.Func(2);
        hs_sat26CVE9.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczsze125uuRI.hscall(hs_zddEq226CTo7, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVE8 = new $hs.Thunk();
        hs_sat26CVE8.evaluateOnce = function () {
            return hs_zdczeze125uuRJ.hscall(hs_zddEq226CTo7);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CVE8, hs_sat26CVE9];
        return $res;
    };
    hs_zdczsze125uuRI.evaluate = function (hs_zddEq226CTod, hs_eta26CTof, hs_eta126CTog) {
        var hs_sat26CVEa = $hs.modules.GHCziClasses.hs_zdfEqZMZN.hscall(hs_zddEq226CTod);
        var hs_wild26CVEb = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_sat26CVEa, hs_eta26CTof, hs_eta126CTog);
        switch (hs_wild26CVEb.tag) {
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
    hs_zdczeze125uuRJ.evaluate = function (hs_zddEq226CTok) {
        var hs_zddEq326CTol = new $hs.Thunk();
        hs_zddEq326CTol.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfEqZMZN.hscall(hs_zddEq226CTok);
        };
        var hs_sat26CVEc = new $hs.Func(2);
        hs_sat26CVEc.evaluate = function (hs_ds26CToo, hs_ds126CToq) {
            var hs_wild26CVEe = hs_ds26CToo;
            if (hs_ds26CToo.notEvaluated) {
                hs_wild26CVEe = hs_ds26CToo.hscall();
            }
            switch (hs_wild26CVEe.tag) {
            case 1:
                var hs_wild126CVEi = hs_ds126CToq;
                if (hs_ds126CToq.notEvaluated) {
                    hs_wild126CVEi = hs_ds126CToq.hscall();
                }
                switch (hs_wild126CVEi.tag) {
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
                var hs_x26CToz = hs_wild26CVEe.data[0];
                var hs_xs26CToC = hs_wild26CVEe.data[1];
                var hs_wild126CVEd = hs_ds126CToq;
                if (hs_ds126CToq.notEvaluated) {
                    hs_wild126CVEd = hs_ds126CToq.hscall();
                }
                switch (hs_wild126CVEd.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_y26CToA = hs_wild126CVEd.data[0];
                    var hs_ys26CToD = hs_wild126CVEd.data[1];
                    var hs_wild226CVEf = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq226CTok, hs_x26CToz, hs_y26CToA);
                    switch (hs_wild226CVEf.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq326CTol, hs_xs26CToC, hs_ys26CToD);
                    }
                }
            }
        };
        if (hs_sat26CVEc.notEvaluated) {
            return hs_sat26CVEc.hscall();
        } else {
            return hs_sat26CVEc;
        }
    };
    hs_zddEq25uuRK.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zdfEqZMZN.hscall($hs.modules.GHCziClasses.hs_zdfEqChar);
    };
    hs_zdczeze225uuRL.evaluate = function (hs_ds26CToH, hs_ds126CToJ) {
        var hs_wild26CVEk = hs_ds26CToH;
        if (hs_ds26CToH.notEvaluated) {
            hs_wild26CVEk = hs_ds26CToH.hscall();
        }
        switch (hs_wild26CVEk.tag) {
        case 1:
            var hs_wild126CVEo = hs_ds126CToJ;
            if (hs_ds126CToJ.notEvaluated) {
                hs_wild126CVEo = hs_ds126CToJ.hscall();
            }
            switch (hs_wild126CVEo.tag) {
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
            var hs_x26CToS = hs_wild26CVEk.data[0];
            var hs_xs26CToV = hs_wild26CVEk.data[1];
            var hs_wild126CVEj = hs_ds126CToJ;
            if (hs_ds126CToJ.notEvaluated) {
                hs_wild126CVEj = hs_ds126CToJ.hscall();
            }
            switch (hs_wild126CVEj.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_y26CToT = hs_wild126CVEj.data[0];
                var hs_ys26CToW = hs_wild126CVEj.data[1];
                var hs_wild226CVEl = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_x26CToS, hs_y26CToT);
                switch (hs_wild226CVEl.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq25uuRK, hs_xs26CToV, hs_ys26CToW);
                }
            }
        }
    };
    hs_a25uuRM.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_zdczsze125uuRI.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_zdczsze225uuRN.evaluate = function (hs_eta26CTp0, hs_eta126CTp1) {
        var hs_sat26CVEp = $hs.modules.GHCziClasses.hs_zdfEqZMZN.hscall($hs.modules.GHCziClasses.hs_zdfEqChar);
        var hs_wild26CVEq = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_sat26CVEp, hs_eta26CTp0, hs_eta126CTp1);
        switch (hs_wild26CVEq.tag) {
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
    hs_a125uuRO.evaluateOnce = function () {
        return hs_zdczeze125uuRJ.hscall($hs.modules.GHCziClasses.hs_zdfEqChar);
    };
    hs_zdfEqZMZN125uuRP.data = [hs_a125uuRO, hs_a25uuRM];
    this.hs_zdfEqInteger.data = [$hs.modules.GHCziInteger.hs_eqInteger, $hs.modules.GHCziInteger.hs_neqInteger];
    hs_zdczeze325uuSN.evaluate = function (hs_ds26CTp6, hs_ds126CTp9) {
        var hs_wild26CVEs = hs_ds26CTp6;
        if (hs_ds26CTp6.notEvaluated) {
            hs_wild26CVEs = hs_ds26CTp6.hscall();
        }
        var hs_x26CTpc = hs_wild26CVEs.data[0];
        var hs_wild126CVEr = hs_ds126CTp9;
        if (hs_ds126CTp9.notEvaluated) {
            hs_wild126CVEr = hs_ds126CTp9.hscall();
        }
        var hs_y26CTpd = hs_wild126CVEr.data[0];
        throw "primitive operation eqFloat#. Not implemeted yet.";
    };
    this.hs_zdfEqFloat.data = [hs_zdczeze325uuSN, hs_zdczsze325uuSY];
    hs_zdczsze325uuSY.evaluate = function (hs_eta26CTph, hs_eta126CTpi) {
        var hs_wild26CVEt = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqFloat, hs_eta26CTph, hs_eta126CTpi);
        switch (hs_wild26CVEt.tag) {
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
    hs_zdczeze425uuT4.evaluate = function (hs_ds26CTpn, hs_ds126CTpq) {
        var hs_wild26CVEv = hs_ds26CTpn;
        if (hs_ds26CTpn.notEvaluated) {
            hs_wild26CVEv = hs_ds26CTpn.hscall();
        }
        var hs_x26CTpt = hs_wild26CVEv.data[0];
        var hs_wild126CVEu = hs_ds126CTpq;
        if (hs_ds126CTpq.notEvaluated) {
            hs_wild126CVEu = hs_ds126CTpq.hscall();
        }
        var hs_y26CTpu = hs_wild126CVEu.data[0];
        throw "primitive operation ==##. Not implemeted yet.";
    };
    this.hs_zdfEqDouble.data = [hs_zdczeze425uuT4, hs_zdczsze425uuTf];
    hs_zdczsze425uuTf.evaluate = function (hs_eta26CTpy, hs_eta126CTpz) {
        var hs_wild26CVEw = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqDouble, hs_eta26CTpy, hs_eta126CTpz);
        switch (hs_wild26CVEw.tag) {
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
    this.hs_zdfEqInt.data = [$hs.modules.GHCziClasses.hs_eqInt, $hs.modules.GHCziClasses.hs_neInt];
    hs_zdczdp1Ord25uuTl.evaluate = function (hs_zddOrd726CTpD) {
        var hs_sat26CVEx = new $hs.Thunk();
        hs_sat26CVEx.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd726CTpD);
        };
        return $hs.modules.GHCziClasses.hs_zdfEqZMZN.hscall(hs_sat26CVEx);
    };
    hs_zdczlze25uuTp.evaluate = function (hs_ds26CTpI, hs_ds126CTpL) {
        var hs_wild26CVEz = hs_ds26CTpI;
        if (hs_ds26CTpI.notEvaluated) {
            hs_wild26CVEz = hs_ds26CTpI.hscall();
        }
        var hs_c126CTpO = hs_wild26CVEz.data[0];
        var hs_wild126CVEy = hs_ds126CTpL;
        if (hs_ds126CTpL.notEvaluated) {
            hs_wild126CVEy = hs_ds126CTpL.hscall();
        }
        var hs_c226CTpP = hs_wild126CVEy.data[0];
        return hs_c126CTpO <= hs_c226CTpP ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczg25uuTA.evaluate = function (hs_ds26CTpT, hs_ds126CTpW) {
        var hs_wild26CVEB = hs_ds26CTpT;
        if (hs_ds26CTpT.notEvaluated) {
            hs_wild26CVEB = hs_ds26CTpT.hscall();
        }
        var hs_c126CTpZ = hs_wild26CVEB.data[0];
        var hs_wild126CVEA = hs_ds126CTpW;
        if (hs_ds126CTpW.notEvaluated) {
            hs_wild126CVEA = hs_ds126CTpW.hscall();
        }
        var hs_c226CTq0 = hs_wild126CVEA.data[0];
        return hs_c126CTpZ > hs_c226CTq0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczgze25uuTL.evaluate = function (hs_ds26CTq4, hs_ds126CTq7) {
        var hs_wild26CVED = hs_ds26CTq4;
        if (hs_ds26CTq4.notEvaluated) {
            hs_wild26CVED = hs_ds26CTq4.hscall();
        }
        var hs_c126CTqa = hs_wild26CVED.data[0];
        var hs_wild126CVEC = hs_ds126CTq7;
        if (hs_ds126CTq7.notEvaluated) {
            hs_wild126CVEC = hs_ds126CTq7.hscall();
        }
        var hs_c226CTqb = hs_wild126CVEC.data[0];
        return hs_c126CTqa >= hs_c226CTqb ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczl25uuTW.evaluate = function (hs_ds26CTqf, hs_ds126CTqi) {
        var hs_wild26CVEF = hs_ds26CTqf;
        if (hs_ds26CTqf.notEvaluated) {
            hs_wild26CVEF = hs_ds26CTqf.hscall();
        }
        var hs_c126CTql = hs_wild26CVEF.data[0];
        var hs_wild126CVEE = hs_ds126CTqi;
        if (hs_ds126CTqi.notEvaluated) {
            hs_wild126CVEE = hs_ds126CTqi.hscall();
        }
        var hs_c226CTqm = hs_wild126CVEE.data[0];
        return hs_c126CTql < hs_c226CTqm ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    this.hs_zdfOrdChar.data = [$hs.modules.GHCziClasses.hs_zdfEqChar, hs_zdccompare25uuUa, hs_zdczl25uuTW, hs_zdczgze25uuTL, hs_zdczg25uuTA, hs_zdczlze25uuTp, hs_zdcmax25uuU8, hs_zdcmin25uuU7];
    hs_zdcmin25uuU7.evaluate = function (hs_x26CTqt, hs_y26CTqu) {
        var hs_wild26CVEG = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_x26CTqt, hs_y26CTqu);
        switch (hs_wild26CVEG.tag) {
        case 1:
            if (hs_y26CTqu.notEvaluated) {
                return hs_y26CTqu.hscall();
            } else {
                return hs_y26CTqu;
            }
        case 2:
            if (hs_x26CTqt.notEvaluated) {
                return hs_x26CTqt.hscall();
            } else {
                return hs_x26CTqt;
            }
        }
    };
    hs_zdcmax25uuU8.evaluate = function (hs_x26CTqy, hs_y26CTqz) {
        var hs_wild26CVEH = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_x26CTqy, hs_y26CTqz);
        switch (hs_wild26CVEH.tag) {
        case 1:
            if (hs_x26CTqy.notEvaluated) {
                return hs_x26CTqy.hscall();
            } else {
                return hs_x26CTqy;
            }
        case 2:
            if (hs_y26CTqz.notEvaluated) {
                return hs_y26CTqz.hscall();
            } else {
                return hs_y26CTqz;
            }
        }
    };
    hs_zddEq125uuU9.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar);
    };
    hs_zdccompare25uuUa.evaluate = function (hs_x26CTqD, hs_y26CTqE) {
        var hs_wild26CVEI = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq125uuU9, hs_x26CTqD, hs_y26CTqE);
        switch (hs_wild26CVEI.tag) {
        case 1:
            var hs_wild126CVEJ = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_x26CTqD, hs_y26CTqE);
            switch (hs_wild126CVEJ.tag) {
            case 1:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 2:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_a225uuUr.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar);
    };
    hs_a325uuUs.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zdfEqZMZN.hscall(hs_a225uuUr);
    };
    this.hs_zdfOrdZMZN.evaluate = function (hs_zddOrd726CTrd) {
        var hs_sat26CVEL = new $hs.Thunk();
        hs_sat26CVEL.evaluateOnce = function () {
            return hs_zdcmin125uuUt.hscall(hs_zddOrd726CTrd);
        };
        var hs_sat26CVEM = new $hs.Thunk();
        hs_sat26CVEM.evaluateOnce = function () {
            return hs_zdcmax125uuUu.hscall(hs_zddOrd726CTrd);
        };
        var hs_sat26CVEN = new $hs.Thunk();
        hs_sat26CVEN.evaluateOnce = function () {
            return hs_zdczlze125uuUv.hscall(hs_zddOrd726CTrd);
        };
        var hs_sat26CVEO = new $hs.Thunk();
        hs_sat26CVEO.evaluateOnce = function () {
            return hs_zdczg125uuUw.hscall(hs_zddOrd726CTrd);
        };
        var hs_sat26CVEP = new $hs.Thunk();
        hs_sat26CVEP.evaluateOnce = function () {
            return hs_zdczgze125uuUx.hscall(hs_zddOrd726CTrd);
        };
        var hs_sat26CVEQ = new $hs.Thunk();
        hs_sat26CVEQ.evaluateOnce = function () {
            return hs_zdczl125uuUy.hscall(hs_zddOrd726CTrd);
        };
        var hs_sat26CVER = new $hs.Thunk();
        hs_sat26CVER.evaluateOnce = function () {
            return hs_zdccompare125uuUz.hscall(hs_zddOrd726CTrd);
        };
        var hs_sat26CVEK = new $hs.Thunk();
        hs_sat26CVEK.evaluateOnce = function () {
            return hs_zdczdp1Ord25uuTl.hscall(hs_zddOrd726CTrd);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CVEK, hs_sat26CVER, hs_sat26CVEQ, hs_sat26CVEP, hs_sat26CVEO, hs_sat26CVEN, hs_sat26CVEM, hs_sat26CVEL];
        return $res;
    };
    hs_zdcmin125uuUt.evaluate = function (hs_zddOrd726CTro) {
        var hs_zddOrd826CTrp = new $hs.Thunk();
        hs_zddOrd826CTrp.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZMZN.hscall(hs_zddOrd726CTro);
        };
        var hs_sat26CVES = new $hs.Func(2);
        hs_sat26CVES.evaluate = function (hs_x26CTrs, hs_y26CTrt) {
            var hs_wild26CVET = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd826CTrp, hs_x26CTrs, hs_y26CTrt);
            switch (hs_wild26CVET.tag) {
            case 1:
                if (hs_y26CTrt.notEvaluated) {
                    return hs_y26CTrt.hscall();
                } else {
                    return hs_y26CTrt;
                }
            case 2:
                if (hs_x26CTrs.notEvaluated) {
                    return hs_x26CTrs.hscall();
                } else {
                    return hs_x26CTrs;
                }
            }
        };
        if (hs_sat26CVES.notEvaluated) {
            return hs_sat26CVES.hscall();
        } else {
            return hs_sat26CVES;
        }
    };
    hs_zdcmax125uuUu.evaluate = function (hs_zddOrd726CTry) {
        var hs_zddOrd826CTrz = new $hs.Thunk();
        hs_zddOrd826CTrz.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZMZN.hscall(hs_zddOrd726CTry);
        };
        var hs_sat26CVEU = new $hs.Func(2);
        hs_sat26CVEU.evaluate = function (hs_x26CTrC, hs_y26CTrD) {
            var hs_wild26CVEV = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd826CTrz, hs_x26CTrC, hs_y26CTrD);
            switch (hs_wild26CVEV.tag) {
            case 1:
                if (hs_x26CTrC.notEvaluated) {
                    return hs_x26CTrC.hscall();
                } else {
                    return hs_x26CTrC;
                }
            case 2:
                if (hs_y26CTrD.notEvaluated) {
                    return hs_y26CTrD.hscall();
                } else {
                    return hs_y26CTrD;
                }
            }
        };
        if (hs_sat26CVEU.notEvaluated) {
            return hs_sat26CVEU.hscall();
        } else {
            return hs_sat26CVEU;
        }
    };
    hs_zdczlze125uuUv.evaluate = function (hs_zddOrd726CTrI) {
        var hs_zddOrd826CTrJ = new $hs.Thunk();
        hs_zddOrd826CTrJ.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZMZN.hscall(hs_zddOrd726CTrI);
        };
        var hs_sat26CVEW = new $hs.Func(2);
        hs_sat26CVEW.evaluate = function (hs_x26CTrM, hs_y26CTrN) {
            var hs_wild26CVEX = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CTrJ, hs_x26CTrM, hs_y26CTrN);
            switch (hs_wild26CVEX.tag) {
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        };
        if (hs_sat26CVEW.notEvaluated) {
            return hs_sat26CVEW.hscall();
        } else {
            return hs_sat26CVEW;
        }
    };
    hs_zdczg125uuUw.evaluate = function (hs_zddOrd726CTrS) {
        var hs_zddOrd826CTrT = new $hs.Thunk();
        hs_zddOrd826CTrT.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZMZN.hscall(hs_zddOrd726CTrS);
        };
        var hs_sat26CVEY = new $hs.Func(2);
        hs_sat26CVEY.evaluate = function (hs_x26CTrW, hs_y26CTrX) {
            var hs_wild26CVEZ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CTrT, hs_x26CTrW, hs_y26CTrX);
            switch (hs_wild26CVEZ.tag) {
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        };
        if (hs_sat26CVEY.notEvaluated) {
            return hs_sat26CVEY.hscall();
        } else {
            return hs_sat26CVEY;
        }
    };
    hs_zdczgze125uuUx.evaluate = function (hs_zddOrd726CTs2) {
        var hs_zddOrd826CTs3 = new $hs.Thunk();
        hs_zddOrd826CTs3.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZMZN.hscall(hs_zddOrd726CTs2);
        };
        var hs_sat26CVF0 = new $hs.Func(2);
        hs_sat26CVF0.evaluate = function (hs_x26CTs6, hs_y26CTs7) {
            var hs_wild26CVF1 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CTs3, hs_x26CTs6, hs_y26CTs7);
            switch (hs_wild26CVF1.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        };
        if (hs_sat26CVF0.notEvaluated) {
            return hs_sat26CVF0.hscall();
        } else {
            return hs_sat26CVF0;
        }
    };
    hs_zdczl125uuUy.evaluate = function (hs_zddOrd726CTsc) {
        var hs_zddOrd826CTsd = new $hs.Thunk();
        hs_zddOrd826CTsd.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZMZN.hscall(hs_zddOrd726CTsc);
        };
        var hs_sat26CVF2 = new $hs.Func(2);
        hs_sat26CVF2.evaluate = function (hs_x26CTsg, hs_y26CTsh) {
            var hs_wild26CVF3 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CTsd, hs_x26CTsg, hs_y26CTsh);
            switch (hs_wild26CVF3.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        };
        if (hs_sat26CVF2.notEvaluated) {
            return hs_sat26CVF2.hscall();
        } else {
            return hs_sat26CVF2;
        }
    };
    hs_zdccompare125uuUz.evaluate = function (hs_zddOrd726CTsm) {
        var hs_zddOrd826CTsn = new $hs.Thunk();
        hs_zddOrd826CTsn.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZMZN.hscall(hs_zddOrd726CTsm);
        };
        var hs_sat26CVF4 = new $hs.Func(2);
        hs_sat26CVF4.evaluate = function (hs_ds26CTsq, hs_ds126CTss) {
            var hs_wild26CVF6 = hs_ds26CTsq;
            if (hs_ds26CTsq.notEvaluated) {
                hs_wild26CVF6 = hs_ds26CTsq.hscall();
            }
            switch (hs_wild26CVF6.tag) {
            case 1:
                var hs_wild126CVF9 = hs_ds126CTss;
                if (hs_ds126CTss.notEvaluated) {
                    hs_wild126CVF9 = hs_ds126CTss.hscall();
                }
                switch (hs_wild126CVF9.tag) {
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
                var hs_ds226CTsB = hs_wild26CVF6.data[0];
                var hs_ds326CTsF = hs_wild26CVF6.data[1];
                var hs_wild126CVF5 = hs_ds126CTss;
                if (hs_ds126CTss.notEvaluated) {
                    hs_wild126CVF5 = hs_ds126CTss.hscall();
                }
                switch (hs_wild126CVF5.tag) {
                case 1:
                    var $res = new $hs.Data(3);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_y26CTsC = hs_wild126CVF5.data[0];
                    var hs_ys26CTsG = hs_wild126CVF5.data[1];
                    var hs_wild226CTsE = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CTsm, hs_ds226CTsB, hs_y26CTsC);
                    switch (hs_wild226CTsE.tag) {
                    case 2:
                        return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CTsn, hs_ds326CTsF, hs_ys26CTsG);
                    default:
                        if (hs_wild226CTsE.notEvaluated) {
                            return hs_wild226CTsE.hscall();
                        } else {
                            return hs_wild226CTsE;
                        }
                    }
                }
            }
        };
        if (hs_sat26CVF4.notEvaluated) {
            return hs_sat26CVF4.hscall();
        } else {
            return hs_sat26CVF4;
        }
    };
    hs_zddOrd25uuUA.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zdfOrdZMZN.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar);
    };
    hs_zdccompare225uuUB.evaluate = function (hs_ds26CTsK, hs_ds126CTsM) {
        var hs_wild26CVFb = hs_ds26CTsK;
        if (hs_ds26CTsK.notEvaluated) {
            hs_wild26CVFb = hs_ds26CTsK.hscall();
        }
        switch (hs_wild26CVFb.tag) {
        case 1:
            var hs_wild126CVFe = hs_ds126CTsM;
            if (hs_ds126CTsM.notEvaluated) {
                hs_wild126CVFe = hs_ds126CTsM.hscall();
            }
            switch (hs_wild126CVFe.tag) {
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
            var hs_ds226CTsV = hs_wild26CVFb.data[0];
            var hs_ds326CTsZ = hs_wild26CVFb.data[1];
            var hs_wild126CVFa = hs_ds126CTsM;
            if (hs_ds126CTsM.notEvaluated) {
                hs_wild126CVFa = hs_ds126CTsM.hscall();
            }
            switch (hs_wild126CVFa.tag) {
            case 1:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            case 2:
                var hs_y26CTsW = hs_wild126CVFa.data[0];
                var hs_ys26CTt0 = hs_wild126CVFa.data[1];
                var hs_wild226CTsY = $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_ds226CTsV, hs_y26CTsW);
                switch (hs_wild226CTsY.tag) {
                case 2:
                    return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd25uuUA, hs_ds326CTsZ, hs_ys26CTt0);
                default:
                    if (hs_wild226CTsY.notEvaluated) {
                        return hs_wild226CTsY.hscall();
                    } else {
                        return hs_wild226CTsY;
                    }
                }
            }
        }
    };
    hs_zddOrd125uuUC.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zdfOrdZMZN.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar);
    };
    hs_zdczl225uuUD.evaluate = function (hs_x26CTt3, hs_y26CTt4) {
        var hs_wild26CVFf = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd125uuUC, hs_x26CTt3, hs_y26CTt4);
        switch (hs_wild26CVFf.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        default:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_a425uuUE.evaluateOnce = function () {
        return hs_zdczl125uuUy.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar);
    };
    hs_zddOrd225uuUF.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zdfOrdZMZN.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar);
    };
    hs_zdczgze225uuUG.evaluate = function (hs_x26CTt8, hs_y26CTt9) {
        var hs_wild26CVFg = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd225uuUF, hs_x26CTt8, hs_y26CTt9);
        switch (hs_wild26CVFg.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        default:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_a525uuUH.evaluateOnce = function () {
        return hs_zdczgze125uuUx.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar);
    };
    hs_zddOrd325uuUI.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zdfOrdZMZN.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar);
    };
    hs_zdczg225uuUJ.evaluate = function (hs_x26CTtd, hs_y26CTte) {
        var hs_wild26CVFh = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd325uuUI, hs_x26CTtd, hs_y26CTte);
        switch (hs_wild26CVFh.tag) {
        case 3:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        default:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_a625uuUK.evaluateOnce = function () {
        return hs_zdczg125uuUw.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar);
    };
    hs_zddOrd425uuUL.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zdfOrdZMZN.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar);
    };
    hs_zdczlze225uuUM.evaluate = function (hs_x26CTti, hs_y26CTtj) {
        var hs_wild26CVFi = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd425uuUL, hs_x26CTti, hs_y26CTtj);
        switch (hs_wild26CVFi.tag) {
        case 3:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        default:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_a725uuUN.evaluateOnce = function () {
        return hs_zdczlze125uuUv.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar);
    };
    hs_zddOrd525uuUO.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zdfOrdZMZN.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar);
    };
    hs_zdcmax225uuUP.evaluate = function (hs_x26CTtn, hs_y26CTto) {
        var hs_wild26CVFj = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd525uuUO, hs_x26CTtn, hs_y26CTto);
        switch (hs_wild26CVFj.tag) {
        case 1:
            if (hs_x26CTtn.notEvaluated) {
                return hs_x26CTtn.hscall();
            } else {
                return hs_x26CTtn;
            }
        case 2:
            if (hs_y26CTto.notEvaluated) {
                return hs_y26CTto.hscall();
            } else {
                return hs_y26CTto;
            }
        }
    };
    hs_a825uuUQ.evaluateOnce = function () {
        return hs_zdcmax125uuUu.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar);
    };
    hs_zddOrd625uuUR.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zdfOrdZMZN.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar);
    };
    hs_zdcmin225uuUS.evaluate = function (hs_x26CTts, hs_y26CTtt) {
        var hs_wild26CVFk = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd625uuUR, hs_x26CTts, hs_y26CTtt);
        switch (hs_wild26CVFk.tag) {
        case 1:
            if (hs_y26CTtt.notEvaluated) {
                return hs_y26CTtt.hscall();
            } else {
                return hs_y26CTtt;
            }
        case 2:
            if (hs_x26CTts.notEvaluated) {
                return hs_x26CTts.hscall();
            } else {
                return hs_x26CTts;
            }
        }
    };
    hs_a925uuUT.evaluateOnce = function () {
        return hs_zdcmin125uuUt.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar);
    };
    hs_a1025uuUU.evaluateOnce = function () {
        return hs_zdccompare125uuUz.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar);
    };
    hs_zdfOrdZMZN125uuUV.data = [hs_a325uuUs, hs_a1025uuUU, hs_a425uuUE, hs_a525uuUH, hs_a625uuUK, hs_a725uuUN, hs_a825uuUQ, hs_a925uuUT];
    this.hs_zdfOrdInteger.data = [$hs.modules.GHCziClasses.hs_zdfEqInteger, $hs.modules.GHCziInteger.hs_compareInteger, $hs.modules.GHCziInteger.hs_ltInteger, $hs.modules.GHCziInteger.hs_geInteger, $hs.modules.GHCziInteger.hs_gtInteger, $hs.modules.GHCziInteger.hs_leInteger, hs_zdcmax325uuXg, hs_zdcmin325uuXf];
    hs_zdcmin325uuXf.evaluate = function (hs_x26CTtz, hs_y26CTtA) {
        var hs_wild26CVFl = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_x26CTtz, hs_y26CTtA);
        switch (hs_wild26CVFl.tag) {
        case 1:
            if (hs_y26CTtA.notEvaluated) {
                return hs_y26CTtA.hscall();
            } else {
                return hs_y26CTtA;
            }
        case 2:
            if (hs_x26CTtz.notEvaluated) {
                return hs_x26CTtz.hscall();
            } else {
                return hs_x26CTtz;
            }
        }
    };
    hs_zdcmax325uuXg.evaluate = function (hs_x26CTtE, hs_y26CTtF) {
        var hs_wild26CVFm = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_x26CTtE, hs_y26CTtF);
        switch (hs_wild26CVFm.tag) {
        case 1:
            if (hs_x26CTtE.notEvaluated) {
                return hs_x26CTtE.hscall();
            } else {
                return hs_x26CTtE;
            }
        case 2:
            if (hs_y26CTtF.notEvaluated) {
                return hs_y26CTtF.hscall();
            } else {
                return hs_y26CTtF;
            }
        }
    };
    hs_zdczlze325uuXr.evaluate = function (hs_ds26CTtK, hs_ds126CTtN) {
        var hs_wild26CVFo = hs_ds26CTtK;
        if (hs_ds26CTtK.notEvaluated) {
            hs_wild26CVFo = hs_ds26CTtK.hscall();
        }
        var hs_x26CTtQ = hs_wild26CVFo.data[0];
        var hs_wild126CVFn = hs_ds126CTtN;
        if (hs_ds126CTtN.notEvaluated) {
            hs_wild126CVFn = hs_ds126CTtN.hscall();
        }
        var hs_y26CTtR = hs_wild126CVFn.data[0];
        throw "primitive operation leFloat#. Not implemeted yet.";
    };
    hs_zdczg325uuXC.evaluate = function (hs_ds26CTtV, hs_ds126CTtY) {
        var hs_wild26CVFq = hs_ds26CTtV;
        if (hs_ds26CTtV.notEvaluated) {
            hs_wild26CVFq = hs_ds26CTtV.hscall();
        }
        var hs_x26CTu1 = hs_wild26CVFq.data[0];
        var hs_wild126CVFp = hs_ds126CTtY;
        if (hs_ds126CTtY.notEvaluated) {
            hs_wild126CVFp = hs_ds126CTtY.hscall();
        }
        var hs_y26CTu2 = hs_wild126CVFp.data[0];
        throw "primitive operation gtFloat#. Not implemeted yet.";
    };
    hs_zdczgze325uuXN.evaluate = function (hs_ds26CTu6, hs_ds126CTu9) {
        var hs_wild26CVFs = hs_ds26CTu6;
        if (hs_ds26CTu6.notEvaluated) {
            hs_wild26CVFs = hs_ds26CTu6.hscall();
        }
        var hs_x26CTuc = hs_wild26CVFs.data[0];
        var hs_wild126CVFr = hs_ds126CTu9;
        if (hs_ds126CTu9.notEvaluated) {
            hs_wild126CVFr = hs_ds126CTu9.hscall();
        }
        var hs_y26CTud = hs_wild126CVFr.data[0];
        throw "primitive operation geFloat#. Not implemeted yet.";
    };
    hs_zdczl325uuXY.evaluate = function (hs_ds26CTuh, hs_ds126CTuk) {
        var hs_wild26CVFu = hs_ds26CTuh;
        if (hs_ds26CTuh.notEvaluated) {
            hs_wild26CVFu = hs_ds26CTuh.hscall();
        }
        var hs_x26CTun = hs_wild26CVFu.data[0];
        var hs_wild126CVFt = hs_ds126CTuk;
        if (hs_ds126CTuk.notEvaluated) {
            hs_wild126CVFt = hs_ds126CTuk.hscall();
        }
        var hs_y26CTuo = hs_wild126CVFt.data[0];
        throw "primitive operation ltFloat#. Not implemeted yet.";
    };
    hs_zdccompare325uuY9.evaluate = function (hs_ds26CTus, hs_ds126CTuv) {
        var hs_wild26CVFw = hs_ds26CTus;
        if (hs_ds26CTus.notEvaluated) {
            hs_wild26CVFw = hs_ds26CTus.hscall();
        }
        var hs_x26CTuy = hs_wild26CVFw.data[0];
        var hs_wild126CVFv = hs_ds126CTuv;
        if (hs_ds126CTuv.notEvaluated) {
            hs_wild126CVFv = hs_ds126CTuv.hscall();
        }
        var hs_y26CTuz = hs_wild126CVFv.data[0];
        throw "primitive operation ltFloat#. Not implemeted yet.";
        switch (hs_wild226CVFx.tag) {
        case 1:
            throw "primitive operation eqFloat#. Not implemeted yet.";
            switch (hs_wild326CVFy.tag) {
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
    this.hs_zdfOrdFloat.data = [$hs.modules.GHCziClasses.hs_zdfEqFloat, hs_zdccompare325uuY9, hs_zdczl325uuXY, hs_zdczgze325uuXN, hs_zdczg325uuXC, hs_zdczlze325uuXr, hs_zdcmax425uuYn, hs_zdcmin425uuYm];
    hs_zdcmin425uuYm.evaluate = function (hs_x26CTuG, hs_y26CTuH) {
        var hs_wild26CVFz = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdFloat, hs_x26CTuG, hs_y26CTuH);
        switch (hs_wild26CVFz.tag) {
        case 1:
            if (hs_y26CTuH.notEvaluated) {
                return hs_y26CTuH.hscall();
            } else {
                return hs_y26CTuH;
            }
        case 2:
            if (hs_x26CTuG.notEvaluated) {
                return hs_x26CTuG.hscall();
            } else {
                return hs_x26CTuG;
            }
        }
    };
    hs_zdcmax425uuYn.evaluate = function (hs_x26CTuL, hs_y26CTuM) {
        var hs_wild26CVFA = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdFloat, hs_x26CTuL, hs_y26CTuM);
        switch (hs_wild26CVFA.tag) {
        case 1:
            if (hs_x26CTuL.notEvaluated) {
                return hs_x26CTuL.hscall();
            } else {
                return hs_x26CTuL;
            }
        case 2:
            if (hs_y26CTuM.notEvaluated) {
                return hs_y26CTuM.hscall();
            } else {
                return hs_y26CTuM;
            }
        }
    };
    hs_zdczlze425uuYy.evaluate = function (hs_ds26CTuR, hs_ds126CTuU) {
        var hs_wild26CVFC = hs_ds26CTuR;
        if (hs_ds26CTuR.notEvaluated) {
            hs_wild26CVFC = hs_ds26CTuR.hscall();
        }
        var hs_x26CTuX = hs_wild26CVFC.data[0];
        var hs_wild126CVFB = hs_ds126CTuU;
        if (hs_ds126CTuU.notEvaluated) {
            hs_wild126CVFB = hs_ds126CTuU.hscall();
        }
        var hs_y26CTuY = hs_wild126CVFB.data[0];
        throw "primitive operation <=##. Not implemeted yet.";
    };
    hs_zdczg425uuYJ.evaluate = function (hs_ds26CTv2, hs_ds126CTv5) {
        var hs_wild26CVFE = hs_ds26CTv2;
        if (hs_ds26CTv2.notEvaluated) {
            hs_wild26CVFE = hs_ds26CTv2.hscall();
        }
        var hs_x26CTv8 = hs_wild26CVFE.data[0];
        var hs_wild126CVFD = hs_ds126CTv5;
        if (hs_ds126CTv5.notEvaluated) {
            hs_wild126CVFD = hs_ds126CTv5.hscall();
        }
        var hs_y26CTv9 = hs_wild126CVFD.data[0];
        throw "primitive operation >##. Not implemeted yet.";
    };
    hs_zdczgze425uuYU.evaluate = function (hs_ds26CTvd, hs_ds126CTvg) {
        var hs_wild26CVFG = hs_ds26CTvd;
        if (hs_ds26CTvd.notEvaluated) {
            hs_wild26CVFG = hs_ds26CTvd.hscall();
        }
        var hs_x26CTvj = hs_wild26CVFG.data[0];
        var hs_wild126CVFF = hs_ds126CTvg;
        if (hs_ds126CTvg.notEvaluated) {
            hs_wild126CVFF = hs_ds126CTvg.hscall();
        }
        var hs_y26CTvk = hs_wild126CVFF.data[0];
        throw "primitive operation >=##. Not implemeted yet.";
    };
    hs_zdczl425uuZ5.evaluate = function (hs_ds26CTvo, hs_ds126CTvr) {
        var hs_wild26CVFI = hs_ds26CTvo;
        if (hs_ds26CTvo.notEvaluated) {
            hs_wild26CVFI = hs_ds26CTvo.hscall();
        }
        var hs_x26CTvu = hs_wild26CVFI.data[0];
        var hs_wild126CVFH = hs_ds126CTvr;
        if (hs_ds126CTvr.notEvaluated) {
            hs_wild126CVFH = hs_ds126CTvr.hscall();
        }
        var hs_y26CTvv = hs_wild126CVFH.data[0];
        throw "primitive operation <##. Not implemeted yet.";
    };
    hs_zdccompare425uuZg.evaluate = function (hs_ds26CTvz, hs_ds126CTvC) {
        var hs_wild26CVFK = hs_ds26CTvz;
        if (hs_ds26CTvz.notEvaluated) {
            hs_wild26CVFK = hs_ds26CTvz.hscall();
        }
        var hs_x26CTvF = hs_wild26CVFK.data[0];
        var hs_wild126CVFJ = hs_ds126CTvC;
        if (hs_ds126CTvC.notEvaluated) {
            hs_wild126CVFJ = hs_ds126CTvC.hscall();
        }
        var hs_y26CTvG = hs_wild126CVFJ.data[0];
        throw "primitive operation <##. Not implemeted yet.";
        switch (hs_wild226CVFL.tag) {
        case 1:
            throw "primitive operation ==##. Not implemeted yet.";
            switch (hs_wild326CVFM.tag) {
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
    this.hs_zdfOrdDouble.data = [$hs.modules.GHCziClasses.hs_zdfEqDouble, hs_zdccompare425uuZg, hs_zdczl425uuZ5, hs_zdczgze425uuYU, hs_zdczg425uuYJ, hs_zdczlze425uuYy, hs_zdcmax525uuZu, hs_zdcmin525uuZt];
    hs_zdcmin525uuZt.evaluate = function (hs_x26CTvN, hs_y26CTvO) {
        var hs_wild26CVFN = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_x26CTvN, hs_y26CTvO);
        switch (hs_wild26CVFN.tag) {
        case 1:
            if (hs_y26CTvO.notEvaluated) {
                return hs_y26CTvO.hscall();
            } else {
                return hs_y26CTvO;
            }
        case 2:
            if (hs_x26CTvN.notEvaluated) {
                return hs_x26CTvN.hscall();
            } else {
                return hs_x26CTvN;
            }
        }
    };
    hs_zdcmax525uuZu.evaluate = function (hs_x26CTvS, hs_y26CTvT) {
        var hs_wild26CVFO = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_x26CTvS, hs_y26CTvT);
        switch (hs_wild26CVFO.tag) {
        case 1:
            if (hs_x26CTvS.notEvaluated) {
                return hs_x26CTvS.hscall();
            } else {
                return hs_x26CTvS;
            }
        case 2:
            if (hs_y26CTvT.notEvaluated) {
                return hs_y26CTvT.hscall();
            } else {
                return hs_y26CTvT;
            }
        }
    };
    this.hs_zdfOrdInt.data = [$hs.modules.GHCziClasses.hs_zdfEqInt, $hs.modules.GHCziClasses.hs_compareInt, $hs.modules.GHCziClasses.hs_ltInt, $hs.modules.GHCziClasses.hs_geInt, $hs.modules.GHCziClasses.hs_gtInt, $hs.modules.GHCziClasses.hs_leInt, hs_zdcmax625uuZG, hs_zdcmin625uuZF];
    hs_zdcmin625uuZF.evaluate = function (hs_x26CTvZ, hs_y26CTw0) {
        var hs_wild26CVFP = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_x26CTvZ, hs_y26CTw0);
        switch (hs_wild26CVFP.tag) {
        case 1:
            if (hs_y26CTw0.notEvaluated) {
                return hs_y26CTw0.hscall();
            } else {
                return hs_y26CTw0;
            }
        case 2:
            if (hs_x26CTvZ.notEvaluated) {
                return hs_x26CTvZ.hscall();
            } else {
                return hs_x26CTvZ;
            }
        }
    };
    hs_zdcmax625uuZG.evaluate = function (hs_x26CTw4, hs_y26CTw5) {
        var hs_wild26CVFQ = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_x26CTw4, hs_y26CTw5);
        switch (hs_wild26CVFQ.tag) {
        case 1:
            if (hs_x26CTw4.notEvaluated) {
                return hs_x26CTw4.hscall();
            } else {
                return hs_x26CTw4;
            }
        case 2:
            if (hs_y26CTw5.notEvaluated) {
                return hs_y26CTw5.hscall();
            } else {
                return hs_y26CTw5;
            }
        }
    };
    hs_zdczeze525uuZR.evaluate = function (hs_a1126CTwa, hs_b26CTwc) {
        var hs_wild26CVFS = hs_a1126CTwa;
        if (hs_a1126CTwa.notEvaluated) {
            hs_wild26CVFS = hs_a1126CTwa.hscall();
        }
        var hs_wild126CVFR = hs_b26CTwc;
        if (hs_b26CTwc.notEvaluated) {
            hs_wild126CVFR = hs_b26CTwc.hscall();
        }
        var $res = new $hs.Data(2);
        $res.data = [];
        return $res;
    };
    this.hs_zdfEqZLZR.data = [hs_zdczeze525uuZR, hs_zdczsze525uuZY];
    hs_zdczsze525uuZY.evaluate = function (hs_a1126CTwh, hs_b26CTwi) {
        var hs_wild26CVFT = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqZLZR, hs_a1126CTwh, hs_b26CTwi);
        switch (hs_wild26CVFT.tag) {
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
    hs_zdczeze625uv04.evaluate = function (hs_zddEq226CTwx, hs_zddEq326CTwB, hs_ds26CTwp, hs_ds126CTwt) {
        var hs_wild26CVFV = hs_ds26CTwp;
        if (hs_ds26CTwp.notEvaluated) {
            hs_wild26CVFV = hs_ds26CTwp.hscall();
        }
        var hs_a1126CTwy = hs_wild26CVFV.data[0];
        var hs_a1226CTwC = hs_wild26CVFV.data[1];
        var hs_wild126CVFU = hs_ds126CTwt;
        if (hs_ds126CTwt.notEvaluated) {
            hs_wild126CVFU = hs_ds126CTwt.hscall();
        }
        var hs_b126CTwz = hs_wild126CVFU.data[0];
        var hs_b226CTwD = hs_wild126CVFU.data[1];
        var hs_wild226CVFW = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq226CTwx, hs_a1126CTwy, hs_b126CTwz);
        switch (hs_wild226CVFW.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq326CTwB, hs_a1226CTwC, hs_b226CTwD);
        }
    };
    this.hs_zdfEqZLz2cUZR.evaluate = function (hs_zddEq226CTwH, hs_zddEq326CTwI) {
        var hs_sat26CVFY = new $hs.Thunk();
        hs_sat26CVFY.evaluateOnce = function () {
            return hs_zdczsze625uv0o.hscall(hs_zddEq226CTwH, hs_zddEq326CTwI);
        };
        var hs_sat26CVFX = new $hs.Func(2);
        hs_sat26CVFX.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczeze625uv04.hscall(hs_zddEq226CTwH, hs_zddEq326CTwI, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CVFX, hs_sat26CVFY];
        return $res;
    };
    hs_zdczsze625uv0o.evaluate = function (hs_zddEq226CTwO, hs_zddEq326CTwP) {
        var hs_zddEq426CTwQ = new $hs.Thunk();
        hs_zddEq426CTwQ.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfEqZLz2cUZR.hscall(hs_zddEq226CTwO, hs_zddEq326CTwP);
        };
        var hs_sat26CVFZ = new $hs.Func(2);
        hs_sat26CVFZ.evaluate = function (hs_a1126CTwT, hs_b26CTwU) {
            var hs_wild26CVG0 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq426CTwQ, hs_a1126CTwT, hs_b26CTwU);
            switch (hs_wild26CVG0.tag) {
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
        if (hs_sat26CVFZ.notEvaluated) {
            return hs_sat26CVFZ.hscall();
        } else {
            return hs_sat26CVFZ;
        }
    };
    hs_zdczeze725uv0H.evaluate = function (hs_zddEq226CTxd, hs_zddEq326CTxh, hs_zddEq426CTxl, hs_ds26CTx3, hs_ds126CTx8) {
        var hs_wild26CVG2 = hs_ds26CTx3;
        if (hs_ds26CTx3.notEvaluated) {
            hs_wild26CVG2 = hs_ds26CTx3.hscall();
        }
        var hs_a1126CTxe = hs_wild26CVG2.data[0];
        var hs_a1226CTxi = hs_wild26CVG2.data[1];
        var hs_a1326CTxm = hs_wild26CVG2.data[2];
        var hs_wild126CVG1 = hs_ds126CTx8;
        if (hs_ds126CTx8.notEvaluated) {
            hs_wild126CVG1 = hs_ds126CTx8.hscall();
        }
        var hs_b126CTxf = hs_wild126CVG1.data[0];
        var hs_b226CTxj = hs_wild126CVG1.data[1];
        var hs_b326CTxn = hs_wild126CVG1.data[2];
        var hs_wild226CVG3 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq226CTxd, hs_a1126CTxe, hs_b126CTxf);
        switch (hs_wild226CVG3.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVG4 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq326CTxh, hs_a1226CTxi, hs_b226CTxj);
            switch (hs_wild326CVG4.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq426CTxl, hs_a1326CTxm, hs_b326CTxn);
            }
        }
    };
    this.hs_zdfEqZLz2cUz2cUZR.evaluate = function (hs_zddEq226CTxs, hs_zddEq326CTxt, hs_zddEq426CTxu) {
        var hs_sat26CVG6 = new $hs.Thunk();
        hs_sat26CVG6.evaluateOnce = function () {
            return hs_zdczsze725uv18.hscall(hs_zddEq226CTxs, hs_zddEq326CTxt, hs_zddEq426CTxu);
        };
        var hs_sat26CVG5 = new $hs.Func(2);
        hs_sat26CVG5.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczeze725uv0H.hscall(hs_zddEq226CTxs, hs_zddEq326CTxt, hs_zddEq426CTxu, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CVG5, hs_sat26CVG6];
        return $res;
    };
    hs_zdczsze725uv18.evaluate = function (hs_zddEq226CTxB, hs_zddEq326CTxC, hs_zddEq426CTxD) {
        var hs_zddEq526CTxE = new $hs.Thunk();
        hs_zddEq526CTxE.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfEqZLz2cUz2cUZR.hscall(hs_zddEq226CTxB, hs_zddEq326CTxC, hs_zddEq426CTxD);
        };
        var hs_sat26CVG7 = new $hs.Func(2);
        hs_sat26CVG7.evaluate = function (hs_a1126CTxH, hs_b26CTxI) {
            var hs_wild26CVG8 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq526CTxE, hs_a1126CTxH, hs_b26CTxI);
            switch (hs_wild26CVG8.tag) {
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
        if (hs_sat26CVG7.notEvaluated) {
            return hs_sat26CVG7.hscall();
        } else {
            return hs_sat26CVG7;
        }
    };
    hs_zdczeze825uv1v.evaluate = function (hs_zddEq226CTy4, hs_zddEq326CTy8, hs_zddEq426CTyc, hs_zddEq526CTyg, hs_ds26CTxS, hs_ds126CTxY) {
        var hs_wild26CVGa = hs_ds26CTxS;
        if (hs_ds26CTxS.notEvaluated) {
            hs_wild26CVGa = hs_ds26CTxS.hscall();
        }
        var hs_a1126CTy5 = hs_wild26CVGa.data[0];
        var hs_a1226CTy9 = hs_wild26CVGa.data[1];
        var hs_a1326CTyd = hs_wild26CVGa.data[2];
        var hs_a1426CTyh = hs_wild26CVGa.data[3];
        var hs_wild126CVG9 = hs_ds126CTxY;
        if (hs_ds126CTxY.notEvaluated) {
            hs_wild126CVG9 = hs_ds126CTxY.hscall();
        }
        var hs_b126CTy6 = hs_wild126CVG9.data[0];
        var hs_b226CTya = hs_wild126CVG9.data[1];
        var hs_b326CTye = hs_wild126CVG9.data[2];
        var hs_b426CTyi = hs_wild126CVG9.data[3];
        var hs_wild226CVGb = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq226CTy4, hs_a1126CTy5, hs_b126CTy6);
        switch (hs_wild226CVGb.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVGc = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq326CTy8, hs_a1226CTy9, hs_b226CTya);
            switch (hs_wild326CVGc.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVGd = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq426CTyc, hs_a1326CTyd, hs_b326CTye);
                switch (hs_wild426CVGd.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq526CTyg, hs_a1426CTyh, hs_b426CTyi);
                }
            }
        }
    };
    this.hs_zdfEqZLz2cUz2cUz2cUZR.evaluate = function (hs_zddEq226CTyo, hs_zddEq326CTyp, hs_zddEq426CTyq, hs_zddEq526CTyr) {
        var hs_sat26CVGf = new $hs.Thunk();
        hs_sat26CVGf.evaluateOnce = function () {
            return hs_zdczsze825uv23.hscall(hs_zddEq226CTyo, hs_zddEq326CTyp, hs_zddEq426CTyq, hs_zddEq526CTyr);
        };
        var hs_sat26CVGe = new $hs.Func(2);
        hs_sat26CVGe.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczeze825uv1v.hscall(hs_zddEq226CTyo, hs_zddEq326CTyp, hs_zddEq426CTyq, hs_zddEq526CTyr, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CVGe, hs_sat26CVGf];
        return $res;
    };
    hs_zdczsze825uv23.evaluate = function (hs_zddEq226CTyz, hs_zddEq326CTyA, hs_zddEq426CTyB, hs_zddEq526CTyC) {
        var hs_zddEq626CTyD = new $hs.Thunk();
        hs_zddEq626CTyD.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfEqZLz2cUz2cUz2cUZR.hscall(hs_zddEq226CTyz, hs_zddEq326CTyA, hs_zddEq426CTyB, hs_zddEq526CTyC);
        };
        var hs_sat26CVGg = new $hs.Func(2);
        hs_sat26CVGg.evaluate = function (hs_a1126CTyG, hs_b26CTyH) {
            var hs_wild26CVGh = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq626CTyD, hs_a1126CTyG, hs_b26CTyH);
            switch (hs_wild26CVGh.tag) {
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
        if (hs_sat26CVGg.notEvaluated) {
            return hs_sat26CVGg.hscall();
        } else {
            return hs_sat26CVGg;
        }
    };
    hs_zdczeze925uv2u.evaluate = function (hs_zddEq226CTz6, hs_zddEq326CTza, hs_zddEq426CTze, hs_zddEq526CTzi, hs_zddEq626CTzm, hs_ds26CTyS, hs_ds126CTyZ) {
        var hs_wild26CVGj = hs_ds26CTyS;
        if (hs_ds26CTyS.notEvaluated) {
            hs_wild26CVGj = hs_ds26CTyS.hscall();
        }
        var hs_a1126CTz7 = hs_wild26CVGj.data[0];
        var hs_a1226CTzb = hs_wild26CVGj.data[1];
        var hs_a1326CTzf = hs_wild26CVGj.data[2];
        var hs_a1426CTzj = hs_wild26CVGj.data[3];
        var hs_a1526CTzn = hs_wild26CVGj.data[4];
        var hs_wild126CVGi = hs_ds126CTyZ;
        if (hs_ds126CTyZ.notEvaluated) {
            hs_wild126CVGi = hs_ds126CTyZ.hscall();
        }
        var hs_b126CTz8 = hs_wild126CVGi.data[0];
        var hs_b226CTzc = hs_wild126CVGi.data[1];
        var hs_b326CTzg = hs_wild126CVGi.data[2];
        var hs_b426CTzk = hs_wild126CVGi.data[3];
        var hs_b526CTzo = hs_wild126CVGi.data[4];
        var hs_wild226CVGk = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq226CTz6, hs_a1126CTz7, hs_b126CTz8);
        switch (hs_wild226CVGk.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVGl = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq326CTza, hs_a1226CTzb, hs_b226CTzc);
            switch (hs_wild326CVGl.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVGm = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq426CTze, hs_a1326CTzf, hs_b326CTzg);
                switch (hs_wild426CVGm.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVGn = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq526CTzi, hs_a1426CTzj, hs_b426CTzk);
                    switch (hs_wild526CVGn.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq626CTzm, hs_a1526CTzn, hs_b526CTzo);
                    }
                }
            }
        }
    };
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq226CTzv, hs_zddEq326CTzw, hs_zddEq426CTzx, hs_zddEq526CTzy, hs_zddEq626CTzz) {
        var hs_sat26CVGp = new $hs.Thunk();
        hs_sat26CVGp.evaluateOnce = function () {
            return hs_zdczsze925uv39.hscall(hs_zddEq226CTzv, hs_zddEq326CTzw, hs_zddEq426CTzx, hs_zddEq526CTzy, hs_zddEq626CTzz);
        };
        var hs_sat26CVGo = new $hs.Func(2);
        hs_sat26CVGo.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczeze925uv2u.hscall(hs_zddEq226CTzv, hs_zddEq326CTzw, hs_zddEq426CTzx, hs_zddEq526CTzy, hs_zddEq626CTzz, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CVGo, hs_sat26CVGp];
        return $res;
    };
    hs_zdczsze925uv39.evaluate = function (hs_zddEq226CTzI, hs_zddEq326CTzJ, hs_zddEq426CTzK, hs_zddEq526CTzL, hs_zddEq626CTzM) {
        var hs_zddEq726CTzN = new $hs.Thunk();
        hs_zddEq726CTzN.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfEqZLz2cUz2cUz2cUz2cUZR.hscall(hs_zddEq226CTzI, hs_zddEq326CTzJ, hs_zddEq426CTzK, hs_zddEq526CTzL, hs_zddEq626CTzM);
        };
        var hs_sat26CVGq = new $hs.Func(2);
        hs_sat26CVGq.evaluate = function (hs_a1126CTzQ, hs_b26CTzR) {
            var hs_wild26CVGr = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq726CTzN, hs_a1126CTzQ, hs_b26CTzR);
            switch (hs_wild26CVGr.tag) {
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
        if (hs_sat26CVGq.notEvaluated) {
            return hs_sat26CVGq.hscall();
        } else {
            return hs_sat26CVGq;
        }
    };
    hs_zdczeze1025uv3E.evaluate = function (hs_zddEq226CTAj, hs_zddEq326CTAn, hs_zddEq426CTAr, hs_zddEq526CTAv, hs_zddEq626CTAz, hs_zddEq726CTAD, hs_ds26CTA3, hs_ds126CTAb) {
        var hs_wild26CVGt = hs_ds26CTA3;
        if (hs_ds26CTA3.notEvaluated) {
            hs_wild26CVGt = hs_ds26CTA3.hscall();
        }
        var hs_a1126CTAk = hs_wild26CVGt.data[0];
        var hs_a1226CTAo = hs_wild26CVGt.data[1];
        var hs_a1326CTAs = hs_wild26CVGt.data[2];
        var hs_a1426CTAw = hs_wild26CVGt.data[3];
        var hs_a1526CTAA = hs_wild26CVGt.data[4];
        var hs_a1626CTAE = hs_wild26CVGt.data[5];
        var hs_wild126CVGs = hs_ds126CTAb;
        if (hs_ds126CTAb.notEvaluated) {
            hs_wild126CVGs = hs_ds126CTAb.hscall();
        }
        var hs_b126CTAl = hs_wild126CVGs.data[0];
        var hs_b226CTAp = hs_wild126CVGs.data[1];
        var hs_b326CTAt = hs_wild126CVGs.data[2];
        var hs_b426CTAx = hs_wild126CVGs.data[3];
        var hs_b526CTAB = hs_wild126CVGs.data[4];
        var hs_b626CTAF = hs_wild126CVGs.data[5];
        var hs_wild226CVGu = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq226CTAj, hs_a1126CTAk, hs_b126CTAl);
        switch (hs_wild226CVGu.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVGv = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq326CTAn, hs_a1226CTAo, hs_b226CTAp);
            switch (hs_wild326CVGv.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVGw = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq426CTAr, hs_a1326CTAs, hs_b326CTAt);
                switch (hs_wild426CVGw.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVGx = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq526CTAv, hs_a1426CTAw, hs_b426CTAx);
                    switch (hs_wild526CVGx.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVGy = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq626CTAz, hs_a1526CTAA, hs_b526CTAB);
                        switch (hs_wild626CVGy.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq726CTAD, hs_a1626CTAE, hs_b626CTAF);
                        }
                    }
                }
            }
        }
    };
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq226CTAN, hs_zddEq326CTAO, hs_zddEq426CTAP, hs_zddEq526CTAQ, hs_zddEq626CTAR, hs_zddEq726CTAS) {
        var hs_sat26CVGA = new $hs.Thunk();
        hs_sat26CVGA.evaluateOnce = function () {
            return hs_zdczsze1025uv4q.hscall(hs_zddEq226CTAN, hs_zddEq326CTAO, hs_zddEq426CTAP, hs_zddEq526CTAQ, hs_zddEq626CTAR, hs_zddEq726CTAS);
        };
        var hs_sat26CVGz = new $hs.Func(2);
        hs_sat26CVGz.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczeze1025uv3E.hscall(hs_zddEq226CTAN, hs_zddEq326CTAO, hs_zddEq426CTAP, hs_zddEq526CTAQ, hs_zddEq626CTAR, hs_zddEq726CTAS, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CVGz, hs_sat26CVGA];
        return $res;
    };
    hs_zdczsze1025uv4q.evaluate = function (hs_zddEq226CTB2, hs_zddEq326CTB3, hs_zddEq426CTB4, hs_zddEq526CTB5, hs_zddEq626CTB6, hs_zddEq726CTB7) {
        var hs_zddEq826CTB8 = new $hs.Thunk();
        hs_zddEq826CTB8.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddEq226CTB2, hs_zddEq326CTB3, hs_zddEq426CTB4, hs_zddEq526CTB5, hs_zddEq626CTB6, hs_zddEq726CTB7);
        };
        var hs_sat26CVGB = new $hs.Func(2);
        hs_sat26CVGB.evaluate = function (hs_a1126CTBb, hs_b26CTBc) {
            var hs_wild26CVGC = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq826CTB8, hs_a1126CTBb, hs_b26CTBc);
            switch (hs_wild26CVGC.tag) {
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
        if (hs_sat26CVGB.notEvaluated) {
            return hs_sat26CVGB.hscall();
        } else {
            return hs_sat26CVGB;
        }
    };
    hs_zdczeze1125uv4Z.evaluate = function (hs_zddEq226CTBH, hs_zddEq326CTBL, hs_zddEq426CTBP, hs_zddEq526CTBT, hs_zddEq626CTBX, hs_zddEq726CTC1, hs_zddEq826CTC5, hs_ds26CTBp, hs_ds126CTBy) {
        var hs_wild26CVGE = hs_ds26CTBp;
        if (hs_ds26CTBp.notEvaluated) {
            hs_wild26CVGE = hs_ds26CTBp.hscall();
        }
        var hs_a1126CTBI = hs_wild26CVGE.data[0];
        var hs_a1226CTBM = hs_wild26CVGE.data[1];
        var hs_a1326CTBQ = hs_wild26CVGE.data[2];
        var hs_a1426CTBU = hs_wild26CVGE.data[3];
        var hs_a1526CTBY = hs_wild26CVGE.data[4];
        var hs_a1626CTC2 = hs_wild26CVGE.data[5];
        var hs_a1726CTC6 = hs_wild26CVGE.data[6];
        var hs_wild126CVGD = hs_ds126CTBy;
        if (hs_ds126CTBy.notEvaluated) {
            hs_wild126CVGD = hs_ds126CTBy.hscall();
        }
        var hs_b126CTBJ = hs_wild126CVGD.data[0];
        var hs_b226CTBN = hs_wild126CVGD.data[1];
        var hs_b326CTBR = hs_wild126CVGD.data[2];
        var hs_b426CTBV = hs_wild126CVGD.data[3];
        var hs_b526CTBZ = hs_wild126CVGD.data[4];
        var hs_b626CTC3 = hs_wild126CVGD.data[5];
        var hs_b726CTC7 = hs_wild126CVGD.data[6];
        var hs_wild226CVGF = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq226CTBH, hs_a1126CTBI, hs_b126CTBJ);
        switch (hs_wild226CVGF.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVGG = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq326CTBL, hs_a1226CTBM, hs_b226CTBN);
            switch (hs_wild326CVGG.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVGH = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq426CTBP, hs_a1326CTBQ, hs_b326CTBR);
                switch (hs_wild426CVGH.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVGI = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq526CTBT, hs_a1426CTBU, hs_b426CTBV);
                    switch (hs_wild526CVGI.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVGJ = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq626CTBX, hs_a1526CTBY, hs_b526CTBZ);
                        switch (hs_wild626CVGJ.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVGK = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq726CTC1, hs_a1626CTC2, hs_b626CTC3);
                            switch (hs_wild726CVGK.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq826CTC5, hs_a1726CTC6, hs_b726CTC7);
                            }
                        }
                    }
                }
            }
        }
    };
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq226CTCg, hs_zddEq326CTCh, hs_zddEq426CTCi, hs_zddEq526CTCj, hs_zddEq626CTCk, hs_zddEq726CTCl, hs_zddEq826CTCm) {
        var hs_sat26CVGM = new $hs.Thunk();
        hs_sat26CVGM.evaluateOnce = function () {
            return hs_zdczsze1125uv5S.hscall(hs_zddEq226CTCg, hs_zddEq326CTCh, hs_zddEq426CTCi, hs_zddEq526CTCj, hs_zddEq626CTCk, hs_zddEq726CTCl, hs_zddEq826CTCm);
        };
        var hs_sat26CVGL = new $hs.Func(2);
        hs_sat26CVGL.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczeze1125uv4Z.hscall(hs_zddEq226CTCg, hs_zddEq326CTCh, hs_zddEq426CTCi, hs_zddEq526CTCj, hs_zddEq626CTCk, hs_zddEq726CTCl, hs_zddEq826CTCm, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CVGL, hs_sat26CVGM];
        return $res;
    };
    hs_zdczsze1125uv5S.evaluate = function (hs_zddEq226CTCx, hs_zddEq326CTCy, hs_zddEq426CTCz, hs_zddEq526CTCA, hs_zddEq626CTCB, hs_zddEq726CTCC, hs_zddEq826CTCD) {
        var hs_zddEq926CTCE = new $hs.Thunk();
        hs_zddEq926CTCE.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddEq226CTCx, hs_zddEq326CTCy, hs_zddEq426CTCz, hs_zddEq526CTCA, hs_zddEq626CTCB, hs_zddEq726CTCC, hs_zddEq826CTCD);
        };
        var hs_sat26CVGN = new $hs.Func(2);
        hs_sat26CVGN.evaluate = function (hs_a1126CTCH, hs_b26CTCI) {
            var hs_wild26CVGO = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq926CTCE, hs_a1126CTCH, hs_b26CTCI);
            switch (hs_wild26CVGO.tag) {
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
        if (hs_sat26CVGN.notEvaluated) {
            return hs_sat26CVGN.hscall();
        } else {
            return hs_sat26CVGN;
        }
    };
    hs_zdczeze1225uv6v.evaluate = function (hs_zddEq226CTDg, hs_zddEq326CTDk, hs_zddEq426CTDo, hs_zddEq526CTDs, hs_zddEq626CTDw, hs_zddEq726CTDA, hs_zddEq826CTDE, hs_zddEq926CTDI, hs_ds26CTCW, hs_ds126CTD6) {
        var hs_wild26CVGQ = hs_ds26CTCW;
        if (hs_ds26CTCW.notEvaluated) {
            hs_wild26CVGQ = hs_ds26CTCW.hscall();
        }
        var hs_a1126CTDh = hs_wild26CVGQ.data[0];
        var hs_a1226CTDl = hs_wild26CVGQ.data[1];
        var hs_a1326CTDp = hs_wild26CVGQ.data[2];
        var hs_a1426CTDt = hs_wild26CVGQ.data[3];
        var hs_a1526CTDx = hs_wild26CVGQ.data[4];
        var hs_a1626CTDB = hs_wild26CVGQ.data[5];
        var hs_a1726CTDF = hs_wild26CVGQ.data[6];
        var hs_a1826CTDJ = hs_wild26CVGQ.data[7];
        var hs_wild126CVGP = hs_ds126CTD6;
        if (hs_ds126CTD6.notEvaluated) {
            hs_wild126CVGP = hs_ds126CTD6.hscall();
        }
        var hs_b126CTDi = hs_wild126CVGP.data[0];
        var hs_b226CTDm = hs_wild126CVGP.data[1];
        var hs_b326CTDq = hs_wild126CVGP.data[2];
        var hs_b426CTDu = hs_wild126CVGP.data[3];
        var hs_b526CTDy = hs_wild126CVGP.data[4];
        var hs_b626CTDC = hs_wild126CVGP.data[5];
        var hs_b726CTDG = hs_wild126CVGP.data[6];
        var hs_b826CTDK = hs_wild126CVGP.data[7];
        var hs_wild226CVGR = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq226CTDg, hs_a1126CTDh, hs_b126CTDi);
        switch (hs_wild226CVGR.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVGS = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq326CTDk, hs_a1226CTDl, hs_b226CTDm);
            switch (hs_wild326CVGS.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVGT = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq426CTDo, hs_a1326CTDp, hs_b326CTDq);
                switch (hs_wild426CVGT.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVGU = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq526CTDs, hs_a1426CTDt, hs_b426CTDu);
                    switch (hs_wild526CVGU.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVGV = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq626CTDw, hs_a1526CTDx, hs_b526CTDy);
                        switch (hs_wild626CVGV.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVGW = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq726CTDA, hs_a1626CTDB, hs_b626CTDC);
                            switch (hs_wild726CVGW.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVGX = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq826CTDE, hs_a1726CTDF, hs_b726CTDG);
                                switch (hs_wild826CVGX.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq926CTDI, hs_a1826CTDJ, hs_b826CTDK);
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq226CTDU, hs_zddEq326CTDV, hs_zddEq426CTDW, hs_zddEq526CTDX, hs_zddEq626CTDY, hs_zddEq726CTDZ, hs_zddEq826CTE0, hs_zddEq926CTE1) {
        var hs_sat26CVGZ = new $hs.Thunk();
        hs_sat26CVGZ.evaluateOnce = function () {
            return hs_zdczsze1225uv7v.hscall(hs_zddEq226CTDU, hs_zddEq326CTDV, hs_zddEq426CTDW, hs_zddEq526CTDX, hs_zddEq626CTDY, hs_zddEq726CTDZ, hs_zddEq826CTE0, hs_zddEq926CTE1);
        };
        var hs_sat26CVGY = new $hs.Func(2);
        hs_sat26CVGY.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczeze1225uv6v.hscall(hs_zddEq226CTDU, hs_zddEq326CTDV, hs_zddEq426CTDW, hs_zddEq526CTDX, hs_zddEq626CTDY, hs_zddEq726CTDZ, hs_zddEq826CTE0, hs_zddEq926CTE1, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CVGY, hs_sat26CVGZ];
        return $res;
    };
    hs_zdczsze1225uv7v.evaluate = function (hs_zddEq226CTEd, hs_zddEq326CTEe, hs_zddEq426CTEf, hs_zddEq526CTEg, hs_zddEq626CTEh, hs_zddEq726CTEi, hs_zddEq826CTEj, hs_zddEq926CTEk) {
        var hs_zddEq1026CTEl = new $hs.Thunk();
        hs_zddEq1026CTEl.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddEq226CTEd, hs_zddEq326CTEe, hs_zddEq426CTEf, hs_zddEq526CTEg, hs_zddEq626CTEh, hs_zddEq726CTEi, hs_zddEq826CTEj, hs_zddEq926CTEk);
        };
        var hs_sat26CVH0 = new $hs.Func(2);
        hs_sat26CVH0.evaluate = function (hs_a1126CTEo, hs_b26CTEp) {
            var hs_wild26CVH1 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1026CTEl, hs_a1126CTEo, hs_b26CTEp);
            switch (hs_wild26CVH1.tag) {
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
        if (hs_sat26CVH0.notEvaluated) {
            return hs_sat26CVH0.hscall();
        } else {
            return hs_sat26CVH0;
        }
    };
    hs_zdczeze1325uv8c.evaluate = function (hs_zddEq226CTF0, hs_zddEq326CTF4, hs_zddEq426CTF8, hs_zddEq526CTFc, hs_zddEq626CTFg, hs_zddEq726CTFk, hs_zddEq826CTFo, hs_zddEq926CTFs, hs_zddEq1026CTFw, hs_ds26CTEE, hs_ds126CTEP) {
        var hs_wild26CVH3 = hs_ds26CTEE;
        if (hs_ds26CTEE.notEvaluated) {
            hs_wild26CVH3 = hs_ds26CTEE.hscall();
        }
        var hs_a1126CTF1 = hs_wild26CVH3.data[0];
        var hs_a1226CTF5 = hs_wild26CVH3.data[1];
        var hs_a1326CTF9 = hs_wild26CVH3.data[2];
        var hs_a1426CTFd = hs_wild26CVH3.data[3];
        var hs_a1526CTFh = hs_wild26CVH3.data[4];
        var hs_a1626CTFl = hs_wild26CVH3.data[5];
        var hs_a1726CTFp = hs_wild26CVH3.data[6];
        var hs_a1826CTFt = hs_wild26CVH3.data[7];
        var hs_a1926CTFx = hs_wild26CVH3.data[8];
        var hs_wild126CVH2 = hs_ds126CTEP;
        if (hs_ds126CTEP.notEvaluated) {
            hs_wild126CVH2 = hs_ds126CTEP.hscall();
        }
        var hs_b126CTF2 = hs_wild126CVH2.data[0];
        var hs_b226CTF6 = hs_wild126CVH2.data[1];
        var hs_b326CTFa = hs_wild126CVH2.data[2];
        var hs_b426CTFe = hs_wild126CVH2.data[3];
        var hs_b526CTFi = hs_wild126CVH2.data[4];
        var hs_b626CTFm = hs_wild126CVH2.data[5];
        var hs_b726CTFq = hs_wild126CVH2.data[6];
        var hs_b826CTFu = hs_wild126CVH2.data[7];
        var hs_b926CTFy = hs_wild126CVH2.data[8];
        var hs_wild226CVH4 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq226CTF0, hs_a1126CTF1, hs_b126CTF2);
        switch (hs_wild226CVH4.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVH5 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq326CTF4, hs_a1226CTF5, hs_b226CTF6);
            switch (hs_wild326CVH5.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVH6 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq426CTF8, hs_a1326CTF9, hs_b326CTFa);
                switch (hs_wild426CVH6.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVH7 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq526CTFc, hs_a1426CTFd, hs_b426CTFe);
                    switch (hs_wild526CVH7.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVH8 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq626CTFg, hs_a1526CTFh, hs_b526CTFi);
                        switch (hs_wild626CVH8.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVH9 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq726CTFk, hs_a1626CTFl, hs_b626CTFm);
                            switch (hs_wild726CVH9.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVHa = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq826CTFo, hs_a1726CTFp, hs_b726CTFq);
                                switch (hs_wild826CVHa.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926CVHb = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq926CTFs, hs_a1826CTFt, hs_b826CTFu);
                                    switch (hs_wild926CVHb.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1026CTFw, hs_a1926CTFx, hs_b926CTFy);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq226CTFJ, hs_zddEq326CTFK, hs_zddEq426CTFL, hs_zddEq526CTFM, hs_zddEq626CTFN, hs_zddEq726CTFO, hs_zddEq826CTFP, hs_zddEq926CTFQ, hs_zddEq1026CTFR) {
        var hs_sat26CVHd = new $hs.Thunk();
        hs_sat26CVHd.evaluateOnce = function () {
            return hs_zdczsze1325uv9j.hscall(hs_zddEq226CTFJ, hs_zddEq326CTFK, hs_zddEq426CTFL, hs_zddEq526CTFM, hs_zddEq626CTFN, hs_zddEq726CTFO, hs_zddEq826CTFP, hs_zddEq926CTFQ, hs_zddEq1026CTFR);
        };
        var hs_sat26CVHc = new $hs.Func(2);
        hs_sat26CVHc.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczeze1325uv8c.hscall(hs_zddEq226CTFJ, hs_zddEq326CTFK, hs_zddEq426CTFL, hs_zddEq526CTFM, hs_zddEq626CTFN, hs_zddEq726CTFO, hs_zddEq826CTFP, hs_zddEq926CTFQ, hs_zddEq1026CTFR, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CVHc, hs_sat26CVHd];
        return $res;
    };
    hs_zdczsze1325uv9j.evaluate = function (hs_zddEq226CTG4, hs_zddEq326CTG5, hs_zddEq426CTG6, hs_zddEq526CTG7, hs_zddEq626CTG8, hs_zddEq726CTG9, hs_zddEq826CTGa, hs_zddEq926CTGb, hs_zddEq1026CTGc) {
        var hs_zddEq1126CTGd = new $hs.Thunk();
        hs_zddEq1126CTGd.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddEq226CTG4, hs_zddEq326CTG5, hs_zddEq426CTG6, hs_zddEq526CTG7, hs_zddEq626CTG8, hs_zddEq726CTG9, hs_zddEq826CTGa, hs_zddEq926CTGb, hs_zddEq1026CTGc);
        };
        var hs_sat26CVHe = new $hs.Func(2);
        hs_sat26CVHe.evaluate = function (hs_a1126CTGg, hs_b26CTGh) {
            var hs_wild26CVHf = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1126CTGd, hs_a1126CTGg, hs_b26CTGh);
            switch (hs_wild26CVHf.tag) {
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
        if (hs_sat26CVHe.notEvaluated) {
            return hs_sat26CVHe.hscall();
        } else {
            return hs_sat26CVHe;
        }
    };
    hs_zdczeze1425uva4.evaluate = function (hs_zddEq226CTGV, hs_zddEq326CTGZ, hs_zddEq426CTH3, hs_zddEq526CTH7, hs_zddEq626CTHb, hs_zddEq726CTHf, hs_zddEq826CTHj, hs_zddEq926CTHn, hs_zddEq1026CTHr, hs_zddEq1126CTHv, hs_ds26CTGx, hs_ds126CTGJ) {
        var hs_wild26CVHh = hs_ds26CTGx;
        if (hs_ds26CTGx.notEvaluated) {
            hs_wild26CVHh = hs_ds26CTGx.hscall();
        }
        var hs_a1126CTGW = hs_wild26CVHh.data[0];
        var hs_a1226CTH0 = hs_wild26CVHh.data[1];
        var hs_a1326CTH4 = hs_wild26CVHh.data[2];
        var hs_a1426CTH8 = hs_wild26CVHh.data[3];
        var hs_a1526CTHc = hs_wild26CVHh.data[4];
        var hs_a1626CTHg = hs_wild26CVHh.data[5];
        var hs_a1726CTHk = hs_wild26CVHh.data[6];
        var hs_a1826CTHo = hs_wild26CVHh.data[7];
        var hs_a1926CTHs = hs_wild26CVHh.data[8];
        var hs_a2026CTHw = hs_wild26CVHh.data[9];
        var hs_wild126CVHg = hs_ds126CTGJ;
        if (hs_ds126CTGJ.notEvaluated) {
            hs_wild126CVHg = hs_ds126CTGJ.hscall();
        }
        var hs_b126CTGX = hs_wild126CVHg.data[0];
        var hs_b226CTH1 = hs_wild126CVHg.data[1];
        var hs_b326CTH5 = hs_wild126CVHg.data[2];
        var hs_b426CTH9 = hs_wild126CVHg.data[3];
        var hs_b526CTHd = hs_wild126CVHg.data[4];
        var hs_b626CTHh = hs_wild126CVHg.data[5];
        var hs_b726CTHl = hs_wild126CVHg.data[6];
        var hs_b826CTHp = hs_wild126CVHg.data[7];
        var hs_b926CTHt = hs_wild126CVHg.data[8];
        var hs_b1026CTHx = hs_wild126CVHg.data[9];
        var hs_wild226CVHi = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq226CTGV, hs_a1126CTGW, hs_b126CTGX);
        switch (hs_wild226CVHi.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVHj = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq326CTGZ, hs_a1226CTH0, hs_b226CTH1);
            switch (hs_wild326CVHj.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVHk = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq426CTH3, hs_a1326CTH4, hs_b326CTH5);
                switch (hs_wild426CVHk.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVHl = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq526CTH7, hs_a1426CTH8, hs_b426CTH9);
                    switch (hs_wild526CVHl.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVHm = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq626CTHb, hs_a1526CTHc, hs_b526CTHd);
                        switch (hs_wild626CVHm.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVHn = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq726CTHf, hs_a1626CTHg, hs_b626CTHh);
                            switch (hs_wild726CVHn.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVHo = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq826CTHj, hs_a1726CTHk, hs_b726CTHl);
                                switch (hs_wild826CVHo.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926CVHp = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq926CTHn, hs_a1826CTHo, hs_b826CTHp);
                                    switch (hs_wild926CVHp.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026CVHq = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1026CTHr, hs_a1926CTHs, hs_b926CTHt);
                                        switch (hs_wild1026CVHq.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1126CTHv, hs_a2026CTHw, hs_b1026CTHx);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq226CTHJ, hs_zddEq326CTHK, hs_zddEq426CTHL, hs_zddEq526CTHM, hs_zddEq626CTHN, hs_zddEq726CTHO, hs_zddEq826CTHP, hs_zddEq926CTHQ, hs_zddEq1026CTHR, hs_zddEq1126CTHS) {
        var hs_sat26CVHs = new $hs.Thunk();
        hs_sat26CVHs.evaluateOnce = function () {
            return hs_zdczsze1425uvbi.hscall(hs_zddEq226CTHJ, hs_zddEq326CTHK, hs_zddEq426CTHL, hs_zddEq526CTHM, hs_zddEq626CTHN, hs_zddEq726CTHO, hs_zddEq826CTHP, hs_zddEq926CTHQ, hs_zddEq1026CTHR, hs_zddEq1126CTHS);
        };
        var hs_sat26CVHr = new $hs.Func(2);
        hs_sat26CVHr.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczeze1425uva4.hscall(hs_zddEq226CTHJ, hs_zddEq326CTHK, hs_zddEq426CTHL, hs_zddEq526CTHM, hs_zddEq626CTHN, hs_zddEq726CTHO, hs_zddEq826CTHP, hs_zddEq926CTHQ, hs_zddEq1026CTHR, hs_zddEq1126CTHS, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CVHr, hs_sat26CVHs];
        return $res;
    };
    hs_zdczsze1425uvbi.evaluate = function (hs_zddEq226CTI6, hs_zddEq326CTI7, hs_zddEq426CTI8, hs_zddEq526CTI9, hs_zddEq626CTIa, hs_zddEq726CTIb, hs_zddEq826CTIc, hs_zddEq926CTId, hs_zddEq1026CTIe, hs_zddEq1126CTIf) {
        var hs_zddEq1226CTIg = new $hs.Thunk();
        hs_zddEq1226CTIg.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddEq226CTI6, hs_zddEq326CTI7, hs_zddEq426CTI8, hs_zddEq526CTI9, hs_zddEq626CTIa, hs_zddEq726CTIb, hs_zddEq826CTIc, hs_zddEq926CTId, hs_zddEq1026CTIe, hs_zddEq1126CTIf);
        };
        var hs_sat26CVHt = new $hs.Func(2);
        hs_sat26CVHt.evaluate = function (hs_a1126CTIj, hs_b26CTIk) {
            var hs_wild26CVHu = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1226CTIg, hs_a1126CTIj, hs_b26CTIk);
            switch (hs_wild26CVHu.tag) {
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
        if (hs_sat26CVHt.notEvaluated) {
            return hs_sat26CVHt.hscall();
        } else {
            return hs_sat26CVHt;
        }
    };
    hs_zdczeze1525uvc7.evaluate = function (hs_zddEq226CTJ1, hs_zddEq326CTJ5, hs_zddEq426CTJ9, hs_zddEq526CTJd, hs_zddEq626CTJh, hs_zddEq726CTJl, hs_zddEq826CTJp, hs_zddEq926CTJt, hs_zddEq1026CTJx, hs_zddEq1126CTJB, hs_zddEq1226CTJF, hs_ds26CTIB, hs_ds126CTIO) {
        var hs_wild26CVHw = hs_ds26CTIB;
        if (hs_ds26CTIB.notEvaluated) {
            hs_wild26CVHw = hs_ds26CTIB.hscall();
        }
        var hs_a1126CTJ2 = hs_wild26CVHw.data[0];
        var hs_a1226CTJ6 = hs_wild26CVHw.data[1];
        var hs_a1326CTJa = hs_wild26CVHw.data[2];
        var hs_a1426CTJe = hs_wild26CVHw.data[3];
        var hs_a1526CTJi = hs_wild26CVHw.data[4];
        var hs_a1626CTJm = hs_wild26CVHw.data[5];
        var hs_a1726CTJq = hs_wild26CVHw.data[6];
        var hs_a1826CTJu = hs_wild26CVHw.data[7];
        var hs_a1926CTJy = hs_wild26CVHw.data[8];
        var hs_a2026CTJC = hs_wild26CVHw.data[9];
        var hs_a2126CTJG = hs_wild26CVHw.data[10];
        var hs_wild126CVHv = hs_ds126CTIO;
        if (hs_ds126CTIO.notEvaluated) {
            hs_wild126CVHv = hs_ds126CTIO.hscall();
        }
        var hs_b126CTJ3 = hs_wild126CVHv.data[0];
        var hs_b226CTJ7 = hs_wild126CVHv.data[1];
        var hs_b326CTJb = hs_wild126CVHv.data[2];
        var hs_b426CTJf = hs_wild126CVHv.data[3];
        var hs_b526CTJj = hs_wild126CVHv.data[4];
        var hs_b626CTJn = hs_wild126CVHv.data[5];
        var hs_b726CTJr = hs_wild126CVHv.data[6];
        var hs_b826CTJv = hs_wild126CVHv.data[7];
        var hs_b926CTJz = hs_wild126CVHv.data[8];
        var hs_b1026CTJD = hs_wild126CVHv.data[9];
        var hs_b1126CTJH = hs_wild126CVHv.data[10];
        var hs_wild226CVHx = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq226CTJ1, hs_a1126CTJ2, hs_b126CTJ3);
        switch (hs_wild226CVHx.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVHy = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq326CTJ5, hs_a1226CTJ6, hs_b226CTJ7);
            switch (hs_wild326CVHy.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVHz = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq426CTJ9, hs_a1326CTJa, hs_b326CTJb);
                switch (hs_wild426CVHz.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVHA = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq526CTJd, hs_a1426CTJe, hs_b426CTJf);
                    switch (hs_wild526CVHA.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVHB = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq626CTJh, hs_a1526CTJi, hs_b526CTJj);
                        switch (hs_wild626CVHB.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVHC = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq726CTJl, hs_a1626CTJm, hs_b626CTJn);
                            switch (hs_wild726CVHC.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVHD = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq826CTJp, hs_a1726CTJq, hs_b726CTJr);
                                switch (hs_wild826CVHD.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926CVHE = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq926CTJt, hs_a1826CTJu, hs_b826CTJv);
                                    switch (hs_wild926CVHE.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026CVHF = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1026CTJx, hs_a1926CTJy, hs_b926CTJz);
                                        switch (hs_wild1026CVHF.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126CVHG = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1126CTJB, hs_a2026CTJC, hs_b1026CTJD);
                                            switch (hs_wild1126CVHG.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1226CTJF, hs_a2126CTJG, hs_b1126CTJH);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq226CTJU, hs_zddEq326CTJV, hs_zddEq426CTJW, hs_zddEq526CTJX, hs_zddEq626CTJY, hs_zddEq726CTJZ, hs_zddEq826CTK0, hs_zddEq926CTK1, hs_zddEq1026CTK2, hs_zddEq1126CTK3, hs_zddEq1226CTK4) {
        var hs_sat26CVHI = new $hs.Thunk();
        hs_sat26CVHI.evaluateOnce = function () {
            return hs_zdczsze1525uvds.hscall(hs_zddEq226CTJU, hs_zddEq326CTJV, hs_zddEq426CTJW, hs_zddEq526CTJX, hs_zddEq626CTJY, hs_zddEq726CTJZ, hs_zddEq826CTK0, hs_zddEq926CTK1, hs_zddEq1026CTK2, hs_zddEq1126CTK3, hs_zddEq1226CTK4);
        };
        var hs_sat26CVHH = new $hs.Func(2);
        hs_sat26CVHH.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczeze1525uvc7.hscall(hs_zddEq226CTJU, hs_zddEq326CTJV, hs_zddEq426CTJW, hs_zddEq526CTJX, hs_zddEq626CTJY, hs_zddEq726CTJZ, hs_zddEq826CTK0, hs_zddEq926CTK1, hs_zddEq1026CTK2, hs_zddEq1126CTK3, hs_zddEq1226CTK4, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CVHH, hs_sat26CVHI];
        return $res;
    };
    hs_zdczsze1525uvds.evaluate = function (hs_zddEq226CTKj, hs_zddEq326CTKk, hs_zddEq426CTKl, hs_zddEq526CTKm, hs_zddEq626CTKn, hs_zddEq726CTKo, hs_zddEq826CTKp, hs_zddEq926CTKq, hs_zddEq1026CTKr, hs_zddEq1126CTKs, hs_zddEq1226CTKt) {
        var hs_zddEq1326CTKu = new $hs.Thunk();
        hs_zddEq1326CTKu.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddEq226CTKj, hs_zddEq326CTKk, hs_zddEq426CTKl, hs_zddEq526CTKm, hs_zddEq626CTKn, hs_zddEq726CTKo, hs_zddEq826CTKp, hs_zddEq926CTKq, hs_zddEq1026CTKr, hs_zddEq1126CTKs, hs_zddEq1226CTKt);
        };
        var hs_sat26CVHJ = new $hs.Func(2);
        hs_sat26CVHJ.evaluate = function (hs_a1126CTKx, hs_b26CTKy) {
            var hs_wild26CVHK = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1326CTKu, hs_a1126CTKx, hs_b26CTKy);
            switch (hs_wild26CVHK.tag) {
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
        if (hs_sat26CVHJ.notEvaluated) {
            return hs_sat26CVHJ.hscall();
        } else {
            return hs_sat26CVHJ;
        }
    };
    hs_zdczeze1625uvel.evaluate = function (hs_zddEq226CTLi, hs_zddEq326CTLm, hs_zddEq426CTLq, hs_zddEq526CTLu, hs_zddEq626CTLy, hs_zddEq726CTLC, hs_zddEq826CTLG, hs_zddEq926CTLK, hs_zddEq1026CTLO, hs_zddEq1126CTLS, hs_zddEq1226CTLW, hs_zddEq1326CTM0, hs_ds26CTKQ, hs_ds126CTL4) {
        var hs_wild26CVHM = hs_ds26CTKQ;
        if (hs_ds26CTKQ.notEvaluated) {
            hs_wild26CVHM = hs_ds26CTKQ.hscall();
        }
        var hs_a1126CTLj = hs_wild26CVHM.data[0];
        var hs_a1226CTLn = hs_wild26CVHM.data[1];
        var hs_a1326CTLr = hs_wild26CVHM.data[2];
        var hs_a1426CTLv = hs_wild26CVHM.data[3];
        var hs_a1526CTLz = hs_wild26CVHM.data[4];
        var hs_a1626CTLD = hs_wild26CVHM.data[5];
        var hs_a1726CTLH = hs_wild26CVHM.data[6];
        var hs_a1826CTLL = hs_wild26CVHM.data[7];
        var hs_a1926CTLP = hs_wild26CVHM.data[8];
        var hs_a2026CTLT = hs_wild26CVHM.data[9];
        var hs_a2126CTLX = hs_wild26CVHM.data[10];
        var hs_a2226CTM1 = hs_wild26CVHM.data[11];
        var hs_wild126CVHL = hs_ds126CTL4;
        if (hs_ds126CTL4.notEvaluated) {
            hs_wild126CVHL = hs_ds126CTL4.hscall();
        }
        var hs_b126CTLk = hs_wild126CVHL.data[0];
        var hs_b226CTLo = hs_wild126CVHL.data[1];
        var hs_b326CTLs = hs_wild126CVHL.data[2];
        var hs_b426CTLw = hs_wild126CVHL.data[3];
        var hs_b526CTLA = hs_wild126CVHL.data[4];
        var hs_b626CTLE = hs_wild126CVHL.data[5];
        var hs_b726CTLI = hs_wild126CVHL.data[6];
        var hs_b826CTLM = hs_wild126CVHL.data[7];
        var hs_b926CTLQ = hs_wild126CVHL.data[8];
        var hs_b1026CTLU = hs_wild126CVHL.data[9];
        var hs_b1126CTLY = hs_wild126CVHL.data[10];
        var hs_b1226CTM2 = hs_wild126CVHL.data[11];
        var hs_wild226CVHN = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq226CTLi, hs_a1126CTLj, hs_b126CTLk);
        switch (hs_wild226CVHN.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVHO = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq326CTLm, hs_a1226CTLn, hs_b226CTLo);
            switch (hs_wild326CVHO.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVHP = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq426CTLq, hs_a1326CTLr, hs_b326CTLs);
                switch (hs_wild426CVHP.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVHQ = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq526CTLu, hs_a1426CTLv, hs_b426CTLw);
                    switch (hs_wild526CVHQ.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVHR = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq626CTLy, hs_a1526CTLz, hs_b526CTLA);
                        switch (hs_wild626CVHR.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVHS = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq726CTLC, hs_a1626CTLD, hs_b626CTLE);
                            switch (hs_wild726CVHS.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVHT = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq826CTLG, hs_a1726CTLH, hs_b726CTLI);
                                switch (hs_wild826CVHT.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926CVHU = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq926CTLK, hs_a1826CTLL, hs_b826CTLM);
                                    switch (hs_wild926CVHU.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026CVHV = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1026CTLO, hs_a1926CTLP, hs_b926CTLQ);
                                        switch (hs_wild1026CVHV.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126CVHW = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1126CTLS, hs_a2026CTLT, hs_b1026CTLU);
                                            switch (hs_wild1126CVHW.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226CVHX = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1226CTLW, hs_a2126CTLX, hs_b1126CTLY);
                                                switch (hs_wild1226CVHX.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1326CTM0, hs_a2226CTM1, hs_b1226CTM2);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq226CTMg, hs_zddEq326CTMh, hs_zddEq426CTMi, hs_zddEq526CTMj, hs_zddEq626CTMk, hs_zddEq726CTMl, hs_zddEq826CTMm, hs_zddEq926CTMn, hs_zddEq1026CTMo, hs_zddEq1126CTMp, hs_zddEq1226CTMq, hs_zddEq1326CTMr) {
        var hs_sat26CVHZ = new $hs.Thunk();
        hs_sat26CVHZ.evaluateOnce = function () {
            return hs_zdczsze1625uvfN.hscall(hs_zddEq226CTMg, hs_zddEq326CTMh, hs_zddEq426CTMi, hs_zddEq526CTMj, hs_zddEq626CTMk, hs_zddEq726CTMl, hs_zddEq826CTMm, hs_zddEq926CTMn, hs_zddEq1026CTMo, hs_zddEq1126CTMp, hs_zddEq1226CTMq, hs_zddEq1326CTMr);
        };
        var hs_sat26CVHY = new $hs.Func(2);
        hs_sat26CVHY.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczeze1625uvel.hscall(hs_zddEq226CTMg, hs_zddEq326CTMh, hs_zddEq426CTMi, hs_zddEq526CTMj, hs_zddEq626CTMk, hs_zddEq726CTMl, hs_zddEq826CTMm, hs_zddEq926CTMn, hs_zddEq1026CTMo, hs_zddEq1126CTMp, hs_zddEq1226CTMq, hs_zddEq1326CTMr, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CVHY, hs_sat26CVHZ];
        return $res;
    };
    hs_zdczsze1625uvfN.evaluate = function (hs_zddEq226CTMH, hs_zddEq326CTMI, hs_zddEq426CTMJ, hs_zddEq526CTMK, hs_zddEq626CTML, hs_zddEq726CTMM, hs_zddEq826CTMN, hs_zddEq926CTMO, hs_zddEq1026CTMP, hs_zddEq1126CTMQ, hs_zddEq1226CTMR, hs_zddEq1326CTMS) {
        var hs_zddEq1426CTMT = new $hs.Thunk();
        hs_zddEq1426CTMT.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddEq226CTMH, hs_zddEq326CTMI, hs_zddEq426CTMJ, hs_zddEq526CTMK, hs_zddEq626CTML, hs_zddEq726CTMM, hs_zddEq826CTMN, hs_zddEq926CTMO, hs_zddEq1026CTMP, hs_zddEq1126CTMQ, hs_zddEq1226CTMR, hs_zddEq1326CTMS);
        };
        var hs_sat26CVI0 = new $hs.Func(2);
        hs_sat26CVI0.evaluate = function (hs_a1126CTMW, hs_b26CTMX) {
            var hs_wild26CVI1 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1426CTMT, hs_a1126CTMW, hs_b26CTMX);
            switch (hs_wild26CVI1.tag) {
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
        if (hs_sat26CVI0.notEvaluated) {
            return hs_sat26CVI0.hscall();
        } else {
            return hs_sat26CVI0;
        }
    };
    hs_zdczeze1725uvgK.evaluate = function (hs_zddEq226CTNK, hs_zddEq326CTNO, hs_zddEq426CTNS, hs_zddEq526CTNW, hs_zddEq626CTO0, hs_zddEq726CTO4, hs_zddEq826CTO8, hs_zddEq926CTOc, hs_zddEq1026CTOg, hs_zddEq1126CTOk, hs_zddEq1226CTOo, hs_zddEq1326CTOs, hs_zddEq1426CTOw, hs_ds26CTNg, hs_ds126CTNv) {
        var hs_wild26CVI3 = hs_ds26CTNg;
        if (hs_ds26CTNg.notEvaluated) {
            hs_wild26CVI3 = hs_ds26CTNg.hscall();
        }
        var hs_a1126CTNL = hs_wild26CVI3.data[0];
        var hs_a1226CTNP = hs_wild26CVI3.data[1];
        var hs_a1326CTNT = hs_wild26CVI3.data[2];
        var hs_a1426CTNX = hs_wild26CVI3.data[3];
        var hs_a1526CTO1 = hs_wild26CVI3.data[4];
        var hs_a1626CTO5 = hs_wild26CVI3.data[5];
        var hs_a1726CTO9 = hs_wild26CVI3.data[6];
        var hs_a1826CTOd = hs_wild26CVI3.data[7];
        var hs_a1926CTOh = hs_wild26CVI3.data[8];
        var hs_a2026CTOl = hs_wild26CVI3.data[9];
        var hs_a2126CTOp = hs_wild26CVI3.data[10];
        var hs_a2226CTOt = hs_wild26CVI3.data[11];
        var hs_a2326CTOx = hs_wild26CVI3.data[12];
        var hs_wild126CVI2 = hs_ds126CTNv;
        if (hs_ds126CTNv.notEvaluated) {
            hs_wild126CVI2 = hs_ds126CTNv.hscall();
        }
        var hs_b126CTNM = hs_wild126CVI2.data[0];
        var hs_b226CTNQ = hs_wild126CVI2.data[1];
        var hs_b326CTNU = hs_wild126CVI2.data[2];
        var hs_b426CTNY = hs_wild126CVI2.data[3];
        var hs_b526CTO2 = hs_wild126CVI2.data[4];
        var hs_b626CTO6 = hs_wild126CVI2.data[5];
        var hs_b726CTOa = hs_wild126CVI2.data[6];
        var hs_b826CTOe = hs_wild126CVI2.data[7];
        var hs_b926CTOi = hs_wild126CVI2.data[8];
        var hs_b1026CTOm = hs_wild126CVI2.data[9];
        var hs_b1126CTOq = hs_wild126CVI2.data[10];
        var hs_b1226CTOu = hs_wild126CVI2.data[11];
        var hs_b1326CTOy = hs_wild126CVI2.data[12];
        var hs_wild226CVI4 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq226CTNK, hs_a1126CTNL, hs_b126CTNM);
        switch (hs_wild226CVI4.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVI5 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq326CTNO, hs_a1226CTNP, hs_b226CTNQ);
            switch (hs_wild326CVI5.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVI6 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq426CTNS, hs_a1326CTNT, hs_b326CTNU);
                switch (hs_wild426CVI6.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVI7 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq526CTNW, hs_a1426CTNX, hs_b426CTNY);
                    switch (hs_wild526CVI7.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVI8 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq626CTO0, hs_a1526CTO1, hs_b526CTO2);
                        switch (hs_wild626CVI8.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVI9 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq726CTO4, hs_a1626CTO5, hs_b626CTO6);
                            switch (hs_wild726CVI9.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVIa = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq826CTO8, hs_a1726CTO9, hs_b726CTOa);
                                switch (hs_wild826CVIa.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926CVIb = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq926CTOc, hs_a1826CTOd, hs_b826CTOe);
                                    switch (hs_wild926CVIb.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026CVIc = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1026CTOg, hs_a1926CTOh, hs_b926CTOi);
                                        switch (hs_wild1026CVIc.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126CVId = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1126CTOk, hs_a2026CTOl, hs_b1026CTOm);
                                            switch (hs_wild1126CVId.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226CVIe = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1226CTOo, hs_a2126CTOp, hs_b1126CTOq);
                                                switch (hs_wild1226CVIe.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    var hs_wild1326CVIf = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1326CTOs, hs_a2226CTOt, hs_b1226CTOu);
                                                    switch (hs_wild1326CVIf.tag) {
                                                    case 1:
                                                        var $res = new $hs.Data(1);
                                                        $res.data = [];
                                                        return $res;
                                                    case 2:
                                                        return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1426CTOw, hs_a2326CTOx, hs_b1326CTOy);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq226CTON, hs_zddEq326CTOO, hs_zddEq426CTOP, hs_zddEq526CTOQ, hs_zddEq626CTOR, hs_zddEq726CTOS, hs_zddEq826CTOT, hs_zddEq926CTOU, hs_zddEq1026CTOV, hs_zddEq1126CTOW, hs_zddEq1226CTOX, hs_zddEq1326CTOY, hs_zddEq1426CTOZ) {
        var hs_sat26CVIh = new $hs.Thunk();
        hs_sat26CVIh.evaluateOnce = function () {
            return hs_zdczsze1725uvij.hscall(hs_zddEq226CTON, hs_zddEq326CTOO, hs_zddEq426CTOP, hs_zddEq526CTOQ, hs_zddEq626CTOR, hs_zddEq726CTOS, hs_zddEq826CTOT, hs_zddEq926CTOU, hs_zddEq1026CTOV, hs_zddEq1126CTOW, hs_zddEq1226CTOX, hs_zddEq1326CTOY, hs_zddEq1426CTOZ);
        };
        var hs_sat26CVIg = new $hs.Func(2);
        hs_sat26CVIg.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczeze1725uvgK.hscall(hs_zddEq226CTON, hs_zddEq326CTOO, hs_zddEq426CTOP, hs_zddEq526CTOQ, hs_zddEq626CTOR, hs_zddEq726CTOS, hs_zddEq826CTOT, hs_zddEq926CTOU, hs_zddEq1026CTOV, hs_zddEq1126CTOW, hs_zddEq1226CTOX, hs_zddEq1326CTOY, hs_zddEq1426CTOZ, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CVIg, hs_sat26CVIh];
        return $res;
    };
    hs_zdczsze1725uvij.evaluate = function (hs_zddEq226CTPg, hs_zddEq326CTPh, hs_zddEq426CTPi, hs_zddEq526CTPj, hs_zddEq626CTPk, hs_zddEq726CTPl, hs_zddEq826CTPm, hs_zddEq926CTPn, hs_zddEq1026CTPo, hs_zddEq1126CTPp, hs_zddEq1226CTPq, hs_zddEq1326CTPr, hs_zddEq1426CTPs) {
        var hs_zddEq1526CTPt = new $hs.Thunk();
        hs_zddEq1526CTPt.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddEq226CTPg, hs_zddEq326CTPh, hs_zddEq426CTPi, hs_zddEq526CTPj, hs_zddEq626CTPk, hs_zddEq726CTPl, hs_zddEq826CTPm, hs_zddEq926CTPn, hs_zddEq1026CTPo, hs_zddEq1126CTPp, hs_zddEq1226CTPq, hs_zddEq1326CTPr, hs_zddEq1426CTPs);
        };
        var hs_sat26CVIi = new $hs.Func(2);
        hs_sat26CVIi.evaluate = function (hs_a1126CTPw, hs_b26CTPx) {
            var hs_wild26CVIj = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1526CTPt, hs_a1126CTPw, hs_b26CTPx);
            switch (hs_wild26CVIj.tag) {
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
        if (hs_sat26CVIi.notEvaluated) {
            return hs_sat26CVIi.hscall();
        } else {
            return hs_sat26CVIi;
        }
    };
    hs_zdczeze1825uvjk.evaluate = function (hs_zddEq226CTQn, hs_zddEq326CTQr, hs_zddEq426CTQv, hs_zddEq526CTQz, hs_zddEq626CTQD, hs_zddEq726CTQH, hs_zddEq826CTQL, hs_zddEq926CTQP, hs_zddEq1026CTQT, hs_zddEq1126CTQX, hs_zddEq1226CTR1, hs_zddEq1326CTR5, hs_zddEq1426CTR9, hs_zddEq1526CTRd, hs_ds26CTPR, hs_ds126CTQ7) {
        var hs_wild26CVIl = hs_ds26CTPR;
        if (hs_ds26CTPR.notEvaluated) {
            hs_wild26CVIl = hs_ds26CTPR.hscall();
        }
        var hs_a1126CTQo = hs_wild26CVIl.data[0];
        var hs_a1226CTQs = hs_wild26CVIl.data[1];
        var hs_a1326CTQw = hs_wild26CVIl.data[2];
        var hs_a1426CTQA = hs_wild26CVIl.data[3];
        var hs_a1526CTQE = hs_wild26CVIl.data[4];
        var hs_a1626CTQI = hs_wild26CVIl.data[5];
        var hs_a1726CTQM = hs_wild26CVIl.data[6];
        var hs_a1826CTQQ = hs_wild26CVIl.data[7];
        var hs_a1926CTQU = hs_wild26CVIl.data[8];
        var hs_a2026CTQY = hs_wild26CVIl.data[9];
        var hs_a2126CTR2 = hs_wild26CVIl.data[10];
        var hs_a2226CTR6 = hs_wild26CVIl.data[11];
        var hs_a2326CTRa = hs_wild26CVIl.data[12];
        var hs_a2426CTRe = hs_wild26CVIl.data[13];
        var hs_wild126CVIk = hs_ds126CTQ7;
        if (hs_ds126CTQ7.notEvaluated) {
            hs_wild126CVIk = hs_ds126CTQ7.hscall();
        }
        var hs_b126CTQp = hs_wild126CVIk.data[0];
        var hs_b226CTQt = hs_wild126CVIk.data[1];
        var hs_b326CTQx = hs_wild126CVIk.data[2];
        var hs_b426CTQB = hs_wild126CVIk.data[3];
        var hs_b526CTQF = hs_wild126CVIk.data[4];
        var hs_b626CTQJ = hs_wild126CVIk.data[5];
        var hs_b726CTQN = hs_wild126CVIk.data[6];
        var hs_b826CTQR = hs_wild126CVIk.data[7];
        var hs_b926CTQV = hs_wild126CVIk.data[8];
        var hs_b1026CTQZ = hs_wild126CVIk.data[9];
        var hs_b1126CTR3 = hs_wild126CVIk.data[10];
        var hs_b1226CTR7 = hs_wild126CVIk.data[11];
        var hs_b1326CTRb = hs_wild126CVIk.data[12];
        var hs_b1426CTRf = hs_wild126CVIk.data[13];
        var hs_wild226CVIm = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq226CTQn, hs_a1126CTQo, hs_b126CTQp);
        switch (hs_wild226CVIm.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVIn = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq326CTQr, hs_a1226CTQs, hs_b226CTQt);
            switch (hs_wild326CVIn.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVIo = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq426CTQv, hs_a1326CTQw, hs_b326CTQx);
                switch (hs_wild426CVIo.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVIp = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq526CTQz, hs_a1426CTQA, hs_b426CTQB);
                    switch (hs_wild526CVIp.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVIq = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq626CTQD, hs_a1526CTQE, hs_b526CTQF);
                        switch (hs_wild626CVIq.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVIr = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq726CTQH, hs_a1626CTQI, hs_b626CTQJ);
                            switch (hs_wild726CVIr.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVIs = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq826CTQL, hs_a1726CTQM, hs_b726CTQN);
                                switch (hs_wild826CVIs.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926CVIt = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq926CTQP, hs_a1826CTQQ, hs_b826CTQR);
                                    switch (hs_wild926CVIt.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026CVIu = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1026CTQT, hs_a1926CTQU, hs_b926CTQV);
                                        switch (hs_wild1026CVIu.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126CVIv = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1126CTQX, hs_a2026CTQY, hs_b1026CTQZ);
                                            switch (hs_wild1126CVIv.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226CVIw = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1226CTR1, hs_a2126CTR2, hs_b1126CTR3);
                                                switch (hs_wild1226CVIw.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    var hs_wild1326CVIx = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1326CTR5, hs_a2226CTR6, hs_b1226CTR7);
                                                    switch (hs_wild1326CVIx.tag) {
                                                    case 1:
                                                        var $res = new $hs.Data(1);
                                                        $res.data = [];
                                                        return $res;
                                                    case 2:
                                                        var hs_wild1426CVIy = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1426CTR9, hs_a2326CTRa, hs_b1326CTRb);
                                                        switch (hs_wild1426CVIy.tag) {
                                                        case 1:
                                                            var $res = new $hs.Data(1);
                                                            $res.data = [];
                                                            return $res;
                                                        case 2:
                                                            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1526CTRd, hs_a2426CTRe, hs_b1426CTRf);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq226CTRv, hs_zddEq326CTRw, hs_zddEq426CTRx, hs_zddEq526CTRy, hs_zddEq626CTRz, hs_zddEq726CTRA, hs_zddEq826CTRB, hs_zddEq926CTRC, hs_zddEq1026CTRD, hs_zddEq1126CTRE, hs_zddEq1226CTRF, hs_zddEq1326CTRG, hs_zddEq1426CTRH, hs_zddEq1526CTRI) {
        var hs_sat26CVIA = new $hs.Thunk();
        hs_sat26CVIA.evaluateOnce = function () {
            return hs_zdczsze1825uvl0.hscall(hs_zddEq226CTRv, hs_zddEq326CTRw, hs_zddEq426CTRx, hs_zddEq526CTRy, hs_zddEq626CTRz, hs_zddEq726CTRA, hs_zddEq826CTRB, hs_zddEq926CTRC, hs_zddEq1026CTRD, hs_zddEq1126CTRE, hs_zddEq1226CTRF, hs_zddEq1326CTRG, hs_zddEq1426CTRH, hs_zddEq1526CTRI);
        };
        var hs_sat26CVIz = new $hs.Func(2);
        hs_sat26CVIz.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczeze1825uvjk.hscall(hs_zddEq226CTRv, hs_zddEq326CTRw, hs_zddEq426CTRx, hs_zddEq526CTRy, hs_zddEq626CTRz, hs_zddEq726CTRA, hs_zddEq826CTRB, hs_zddEq926CTRC, hs_zddEq1026CTRD, hs_zddEq1126CTRE, hs_zddEq1226CTRF, hs_zddEq1326CTRG, hs_zddEq1426CTRH, hs_zddEq1526CTRI, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CVIz, hs_sat26CVIA];
        return $res;
    };
    hs_zdczsze1825uvl0.evaluate = function (hs_zddEq226CTS0, hs_zddEq326CTS1, hs_zddEq426CTS2, hs_zddEq526CTS3, hs_zddEq626CTS4, hs_zddEq726CTS5, hs_zddEq826CTS6, hs_zddEq926CTS7, hs_zddEq1026CTS8, hs_zddEq1126CTS9, hs_zddEq1226CTSa, hs_zddEq1326CTSb, hs_zddEq1426CTSc, hs_zddEq1526CTSd) {
        var hs_zddEq1626CTSe = new $hs.Thunk();
        hs_zddEq1626CTSe.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddEq226CTS0, hs_zddEq326CTS1, hs_zddEq426CTS2, hs_zddEq526CTS3, hs_zddEq626CTS4, hs_zddEq726CTS5, hs_zddEq826CTS6, hs_zddEq926CTS7, hs_zddEq1026CTS8, hs_zddEq1126CTS9, hs_zddEq1226CTSa, hs_zddEq1326CTSb, hs_zddEq1426CTSc, hs_zddEq1526CTSd);
        };
        var hs_sat26CVIB = new $hs.Func(2);
        hs_sat26CVIB.evaluate = function (hs_a1126CTSh, hs_b26CTSi) {
            var hs_wild26CVIC = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1626CTSe, hs_a1126CTSh, hs_b26CTSi);
            switch (hs_wild26CVIC.tag) {
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
        if (hs_sat26CVIB.notEvaluated) {
            return hs_sat26CVIB.hscall();
        } else {
            return hs_sat26CVIB;
        }
    };
    hs_zdczeze1925uvm5.evaluate = function (hs_zddEq226CTTb, hs_zddEq326CTTf, hs_zddEq426CTTj, hs_zddEq526CTTn, hs_zddEq626CTTr, hs_zddEq726CTTv, hs_zddEq826CTTz, hs_zddEq926CTTD, hs_zddEq1026CTTH, hs_zddEq1126CTTL, hs_zddEq1226CTTP, hs_zddEq1326CTTT, hs_zddEq1426CTTX, hs_zddEq1526CTU1, hs_zddEq1626CTU5, hs_ds26CTSD, hs_ds126CTSU) {
        var hs_wild26CVIE = hs_ds26CTSD;
        if (hs_ds26CTSD.notEvaluated) {
            hs_wild26CVIE = hs_ds26CTSD.hscall();
        }
        var hs_a1126CTTc = hs_wild26CVIE.data[0];
        var hs_a1226CTTg = hs_wild26CVIE.data[1];
        var hs_a1326CTTk = hs_wild26CVIE.data[2];
        var hs_a1426CTTo = hs_wild26CVIE.data[3];
        var hs_a1526CTTs = hs_wild26CVIE.data[4];
        var hs_a1626CTTw = hs_wild26CVIE.data[5];
        var hs_a1726CTTA = hs_wild26CVIE.data[6];
        var hs_a1826CTTE = hs_wild26CVIE.data[7];
        var hs_a1926CTTI = hs_wild26CVIE.data[8];
        var hs_a2026CTTM = hs_wild26CVIE.data[9];
        var hs_a2126CTTQ = hs_wild26CVIE.data[10];
        var hs_a2226CTTU = hs_wild26CVIE.data[11];
        var hs_a2326CTTY = hs_wild26CVIE.data[12];
        var hs_a2426CTU2 = hs_wild26CVIE.data[13];
        var hs_a2526CTU6 = hs_wild26CVIE.data[14];
        var hs_wild126CVID = hs_ds126CTSU;
        if (hs_ds126CTSU.notEvaluated) {
            hs_wild126CVID = hs_ds126CTSU.hscall();
        }
        var hs_b126CTTd = hs_wild126CVID.data[0];
        var hs_b226CTTh = hs_wild126CVID.data[1];
        var hs_b326CTTl = hs_wild126CVID.data[2];
        var hs_b426CTTp = hs_wild126CVID.data[3];
        var hs_b526CTTt = hs_wild126CVID.data[4];
        var hs_b626CTTx = hs_wild126CVID.data[5];
        var hs_b726CTTB = hs_wild126CVID.data[6];
        var hs_b826CTTF = hs_wild126CVID.data[7];
        var hs_b926CTTJ = hs_wild126CVID.data[8];
        var hs_b1026CTTN = hs_wild126CVID.data[9];
        var hs_b1126CTTR = hs_wild126CVID.data[10];
        var hs_b1226CTTV = hs_wild126CVID.data[11];
        var hs_b1326CTTZ = hs_wild126CVID.data[12];
        var hs_b1426CTU3 = hs_wild126CVID.data[13];
        var hs_b1526CTU7 = hs_wild126CVID.data[14];
        var hs_wild226CVIF = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq226CTTb, hs_a1126CTTc, hs_b126CTTd);
        switch (hs_wild226CVIF.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVIG = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq326CTTf, hs_a1226CTTg, hs_b226CTTh);
            switch (hs_wild326CVIG.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVIH = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq426CTTj, hs_a1326CTTk, hs_b326CTTl);
                switch (hs_wild426CVIH.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVII = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq526CTTn, hs_a1426CTTo, hs_b426CTTp);
                    switch (hs_wild526CVII.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVIJ = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq626CTTr, hs_a1526CTTs, hs_b526CTTt);
                        switch (hs_wild626CVIJ.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVIK = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq726CTTv, hs_a1626CTTw, hs_b626CTTx);
                            switch (hs_wild726CVIK.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVIL = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq826CTTz, hs_a1726CTTA, hs_b726CTTB);
                                switch (hs_wild826CVIL.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926CVIM = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq926CTTD, hs_a1826CTTE, hs_b826CTTF);
                                    switch (hs_wild926CVIM.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026CVIN = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1026CTTH, hs_a1926CTTI, hs_b926CTTJ);
                                        switch (hs_wild1026CVIN.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126CVIO = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1126CTTL, hs_a2026CTTM, hs_b1026CTTN);
                                            switch (hs_wild1126CVIO.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226CVIP = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1226CTTP, hs_a2126CTTQ, hs_b1126CTTR);
                                                switch (hs_wild1226CVIP.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    var hs_wild1326CVIQ = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1326CTTT, hs_a2226CTTU, hs_b1226CTTV);
                                                    switch (hs_wild1326CVIQ.tag) {
                                                    case 1:
                                                        var $res = new $hs.Data(1);
                                                        $res.data = [];
                                                        return $res;
                                                    case 2:
                                                        var hs_wild1426CVIR = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1426CTTX, hs_a2326CTTY, hs_b1326CTTZ);
                                                        switch (hs_wild1426CVIR.tag) {
                                                        case 1:
                                                            var $res = new $hs.Data(1);
                                                            $res.data = [];
                                                            return $res;
                                                        case 2:
                                                            var hs_wild1526CVIS = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1526CTU1, hs_a2426CTU2, hs_b1426CTU3);
                                                            switch (hs_wild1526CVIS.tag) {
                                                            case 1:
                                                                var $res = new $hs.Data(1);
                                                                $res.data = [];
                                                                return $res;
                                                            case 2:
                                                                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1626CTU5, hs_a2526CTU6, hs_b1526CTU7);
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq226CTUo, hs_zddEq326CTUp, hs_zddEq426CTUq, hs_zddEq526CTUr, hs_zddEq626CTUs, hs_zddEq726CTUt, hs_zddEq826CTUu, hs_zddEq926CTUv, hs_zddEq1026CTUw, hs_zddEq1126CTUx, hs_zddEq1226CTUy, hs_zddEq1326CTUz, hs_zddEq1426CTUA, hs_zddEq1526CTUB, hs_zddEq1626CTUC) {
        var hs_sat26CVIU = new $hs.Thunk();
        hs_sat26CVIU.evaluateOnce = function () {
            return hs_zdczsze1925uvnS.hscall(hs_zddEq226CTUo, hs_zddEq326CTUp, hs_zddEq426CTUq, hs_zddEq526CTUr, hs_zddEq626CTUs, hs_zddEq726CTUt, hs_zddEq826CTUu, hs_zddEq926CTUv, hs_zddEq1026CTUw, hs_zddEq1126CTUx, hs_zddEq1226CTUy, hs_zddEq1326CTUz, hs_zddEq1426CTUA, hs_zddEq1526CTUB, hs_zddEq1626CTUC);
        };
        var hs_sat26CVIT = new $hs.Func(2);
        hs_sat26CVIT.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczeze1925uvm5.hscall(hs_zddEq226CTUo, hs_zddEq326CTUp, hs_zddEq426CTUq, hs_zddEq526CTUr, hs_zddEq626CTUs, hs_zddEq726CTUt, hs_zddEq826CTUu, hs_zddEq926CTUv, hs_zddEq1026CTUw, hs_zddEq1126CTUx, hs_zddEq1226CTUy, hs_zddEq1326CTUz, hs_zddEq1426CTUA, hs_zddEq1526CTUB, hs_zddEq1626CTUC, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CVIT, hs_sat26CVIU];
        return $res;
    };
    hs_zdczsze1925uvnS.evaluate = function (hs_zddEq226CTUV, hs_zddEq326CTUW, hs_zddEq426CTUX, hs_zddEq526CTUY, hs_zddEq626CTUZ, hs_zddEq726CTV0, hs_zddEq826CTV1, hs_zddEq926CTV2, hs_zddEq1026CTV3, hs_zddEq1126CTV4, hs_zddEq1226CTV5, hs_zddEq1326CTV6, hs_zddEq1426CTV7, hs_zddEq1526CTV8, hs_zddEq1626CTV9) {
        var hs_zddEq1726CTVa = new $hs.Thunk();
        hs_zddEq1726CTVa.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddEq226CTUV, hs_zddEq326CTUW, hs_zddEq426CTUX, hs_zddEq526CTUY, hs_zddEq626CTUZ, hs_zddEq726CTV0, hs_zddEq826CTV1, hs_zddEq926CTV2, hs_zddEq1026CTV3, hs_zddEq1126CTV4, hs_zddEq1226CTV5, hs_zddEq1326CTV6, hs_zddEq1426CTV7, hs_zddEq1526CTV8, hs_zddEq1626CTV9);
        };
        var hs_sat26CVIV = new $hs.Func(2);
        hs_sat26CVIV.evaluate = function (hs_a1126CTVd, hs_b26CTVe) {
            var hs_wild26CVIW = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1726CTVa, hs_a1126CTVd, hs_b26CTVe);
            switch (hs_wild26CVIW.tag) {
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
        if (hs_sat26CVIV.notEvaluated) {
            return hs_sat26CVIV.hscall();
        } else {
            return hs_sat26CVIV;
        }
    };
    hs_zdczeze2025uvp1.evaluate = function (hs_a1126CTVk, hs_b26CTVm) {
        var hs_wild26CVIX = hs_a1126CTVk;
        if (hs_a1126CTVk.notEvaluated) {
            hs_wild26CVIX = hs_a1126CTVk.hscall();
        }
        switch (hs_wild26CVIX.tag) {
        case 1:
            var hs_wild126CVIY = hs_b26CTVm;
            if (hs_b26CTVm.notEvaluated) {
                hs_wild126CVIY = hs_b26CTVm.hscall();
            }
            switch (hs_wild126CVIY.tag) {
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
            if (hs_b26CTVm.notEvaluated) {
                return hs_b26CTVm.hscall();
            } else {
                return hs_b26CTVm;
            }
        }
    };
    this.hs_zdfEqBool.data = [hs_zdczeze2025uvp1, hs_zdczsze2025uvp8];
    hs_zdczsze2025uvp8.evaluate = function (hs_a1126CTVr, hs_b26CTVs) {
        var hs_wild26CVIZ = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqBool, hs_a1126CTVr, hs_b26CTVs);
        switch (hs_wild26CVIZ.tag) {
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
    hs_zdczeze2125uvpe.evaluate = function (hs_a1126CTVx, hs_b26CTVz) {
        var hs_wild26CVJ1 = hs_a1126CTVx;
        if (hs_a1126CTVx.notEvaluated) {
            hs_wild26CVJ1 = hs_a1126CTVx.hscall();
        }
        switch (hs_wild26CVJ1.tag) {
        case 1:
            var hs_wild126CVJ3 = hs_b26CTVz;
            if (hs_b26CTVz.notEvaluated) {
                hs_wild126CVJ3 = hs_b26CTVz.hscall();
            }
            switch (hs_wild126CVJ3.tag) {
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
            var hs_wild126CVJ0 = hs_b26CTVz;
            if (hs_b26CTVz.notEvaluated) {
                hs_wild126CVJ0 = hs_b26CTVz.hscall();
            }
            switch (hs_wild126CVJ0.tag) {
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
            var hs_wild126CVJ2 = hs_b26CTVz;
            if (hs_b26CTVz.notEvaluated) {
                hs_wild126CVJ2 = hs_b26CTVz.hscall();
            }
            switch (hs_wild126CVJ2.tag) {
            case 3:
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
    this.hs_zdfEqOrdering.data = [hs_zdczeze2125uvpe, hs_zdczsze2125uvpn];
    hs_zdczsze2125uvpn.evaluate = function (hs_a1126CTVG, hs_b26CTVH) {
        var hs_wild26CVJ4 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqOrdering, hs_a1126CTVG, hs_b26CTVH);
        switch (hs_wild26CVJ4.tag) {
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
    hs_zdczlze525uvpt.evaluate = function (hs_a1126CTVM, hs_b26CTVO) {
        var hs_wild26CVJ6 = hs_a1126CTVM;
        if (hs_a1126CTVM.notEvaluated) {
            hs_wild26CVJ6 = hs_a1126CTVM.hscall();
        }
        var hs_wild126CVJ5 = hs_b26CTVO;
        if (hs_b26CTVO.notEvaluated) {
            hs_wild126CVJ5 = hs_b26CTVO.hscall();
        }
        var $res = new $hs.Data(2);
        $res.data = [];
        return $res;
    };
    hs_zdczg525uvpA.evaluate = function (hs_a1126CTVT, hs_b26CTVV) {
        var hs_wild26CVJ8 = hs_a1126CTVT;
        if (hs_a1126CTVT.notEvaluated) {
            hs_wild26CVJ8 = hs_a1126CTVT.hscall();
        }
        var hs_wild126CVJ7 = hs_b26CTVV;
        if (hs_b26CTVV.notEvaluated) {
            hs_wild126CVJ7 = hs_b26CTVV.hscall();
        }
        var $res = new $hs.Data(1);
        $res.data = [];
        return $res;
    };
    hs_zdczgze525uvpH.evaluate = function (hs_a1126CTW0, hs_b26CTW2) {
        var hs_wild26CVJa = hs_a1126CTW0;
        if (hs_a1126CTW0.notEvaluated) {
            hs_wild26CVJa = hs_a1126CTW0.hscall();
        }
        var hs_wild126CVJ9 = hs_b26CTW2;
        if (hs_b26CTW2.notEvaluated) {
            hs_wild126CVJ9 = hs_b26CTW2.hscall();
        }
        var $res = new $hs.Data(2);
        $res.data = [];
        return $res;
    };
    hs_zdczl525uvpO.evaluate = function (hs_a1126CTW7, hs_b26CTW9) {
        var hs_wild26CVJc = hs_a1126CTW7;
        if (hs_a1126CTW7.notEvaluated) {
            hs_wild26CVJc = hs_a1126CTW7.hscall();
        }
        var hs_wild126CVJb = hs_b26CTW9;
        if (hs_b26CTW9.notEvaluated) {
            hs_wild126CVJb = hs_b26CTW9.hscall();
        }
        var $res = new $hs.Data(1);
        $res.data = [];
        return $res;
    };
    hs_zdccompare525uvpV.evaluate = function (hs_a1126CTWe, hs_b26CTWg) {
        var hs_wild26CVJe = hs_a1126CTWe;
        if (hs_a1126CTWe.notEvaluated) {
            hs_wild26CVJe = hs_a1126CTWe.hscall();
        }
        var hs_wild126CVJd = hs_b26CTWg;
        if (hs_b26CTWg.notEvaluated) {
            hs_wild126CVJd = hs_b26CTWg.hscall();
        }
        var $res = new $hs.Data(2);
        $res.data = [];
        return $res;
    };
    this.hs_zdfOrdZLZR.data = [$hs.modules.GHCziClasses.hs_zdfEqZLZR, hs_zdccompare525uvpV, hs_zdczl525uvpO, hs_zdczgze525uvpH, hs_zdczg525uvpA, hs_zdczlze525uvpt, hs_zdcmax725uvq3, hs_zdcmin725uvq2];
    hs_zdcmin725uvq2.evaluate = function (hs_x26CTWm, hs_y26CTWn) {
        var hs_wild26CVJf = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdZLZR, hs_x26CTWm, hs_y26CTWn);
        switch (hs_wild26CVJf.tag) {
        case 1:
            if (hs_y26CTWn.notEvaluated) {
                return hs_y26CTWn.hscall();
            } else {
                return hs_y26CTWn;
            }
        case 2:
            if (hs_x26CTWm.notEvaluated) {
                return hs_x26CTWm.hscall();
            } else {
                return hs_x26CTWm;
            }
        }
    };
    hs_zdcmax725uvq3.evaluate = function (hs_x26CTWr, hs_y26CTWs) {
        var hs_wild26CVJg = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdZLZR, hs_x26CTWr, hs_y26CTWs);
        switch (hs_wild26CVJg.tag) {
        case 1:
            if (hs_x26CTWr.notEvaluated) {
                return hs_x26CTWr.hscall();
            } else {
                return hs_x26CTWr;
            }
        case 2:
            if (hs_y26CTWs.notEvaluated) {
                return hs_y26CTWs.hscall();
            } else {
                return hs_y26CTWs;
            }
        }
    };
    hs_zdczlze625uvqe.evaluate = function (hs_zddOrd726CTWH, hs_zddOrd826CTWL, hs_a1126CTWz, hs_b26CTWD) {
        var hs_wild26CVJi = hs_a1126CTWz;
        if (hs_a1126CTWz.notEvaluated) {
            hs_wild26CVJi = hs_a1126CTWz.hscall();
        }
        var hs_a1226CTWI = hs_wild26CVJi.data[0];
        var hs_a1326CTWM = hs_wild26CVJi.data[1];
        var hs_wild126CVJh = hs_b26CTWD;
        if (hs_b26CTWD.notEvaluated) {
            hs_wild126CVJh = hs_b26CTWD.hscall();
        }
        var hs_b126CTWJ = hs_wild126CVJh.data[0];
        var hs_b226CTWN = hs_wild126CVJh.data[1];
        var hs_wild226CVJj = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CTWH, hs_a1226CTWI, hs_b126CTWJ);
        switch (hs_wild226CVJj.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd826CTWL, hs_a1326CTWM, hs_b226CTWN);
        case 3:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczg625uvqy.evaluate = function (hs_zddOrd726CTX1, hs_zddOrd826CTX5, hs_a1126CTWT, hs_b26CTWX) {
        var hs_wild26CVJl = hs_a1126CTWT;
        if (hs_a1126CTWT.notEvaluated) {
            hs_wild26CVJl = hs_a1126CTWT.hscall();
        }
        var hs_a1226CTX2 = hs_wild26CVJl.data[0];
        var hs_a1326CTX6 = hs_wild26CVJl.data[1];
        var hs_wild126CVJk = hs_b26CTWX;
        if (hs_b26CTWX.notEvaluated) {
            hs_wild126CVJk = hs_b26CTWX.hscall();
        }
        var hs_b126CTX3 = hs_wild126CVJk.data[0];
        var hs_b226CTX7 = hs_wild126CVJk.data[1];
        var hs_wild226CVJm = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CTX1, hs_a1226CTX2, hs_b126CTX3);
        switch (hs_wild226CVJm.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd826CTX5, hs_a1326CTX6, hs_b226CTX7);
        case 3:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczgze625uvqS.evaluate = function (hs_zddOrd726CTXl, hs_zddOrd826CTXp, hs_a1126CTXd, hs_b26CTXh) {
        var hs_wild26CVJo = hs_a1126CTXd;
        if (hs_a1126CTXd.notEvaluated) {
            hs_wild26CVJo = hs_a1126CTXd.hscall();
        }
        var hs_a1226CTXm = hs_wild26CVJo.data[0];
        var hs_a1326CTXq = hs_wild26CVJo.data[1];
        var hs_wild126CVJn = hs_b26CTXh;
        if (hs_b26CTXh.notEvaluated) {
            hs_wild126CVJn = hs_b26CTXh.hscall();
        }
        var hs_b126CTXn = hs_wild126CVJn.data[0];
        var hs_b226CTXr = hs_wild126CVJn.data[1];
        var hs_wild226CVJp = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CTXl, hs_a1226CTXm, hs_b126CTXn);
        switch (hs_wild226CVJp.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd826CTXp, hs_a1326CTXq, hs_b226CTXr);
        case 3:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczl625uvrc.evaluate = function (hs_zddOrd726CTXF, hs_zddOrd826CTXJ, hs_a1126CTXx, hs_b26CTXB) {
        var hs_wild26CVJr = hs_a1126CTXx;
        if (hs_a1126CTXx.notEvaluated) {
            hs_wild26CVJr = hs_a1126CTXx.hscall();
        }
        var hs_a1226CTXG = hs_wild26CVJr.data[0];
        var hs_a1326CTXK = hs_wild26CVJr.data[1];
        var hs_wild126CVJq = hs_b26CTXB;
        if (hs_b26CTXB.notEvaluated) {
            hs_wild126CVJq = hs_b26CTXB.hscall();
        }
        var hs_b126CTXH = hs_wild126CVJq.data[0];
        var hs_b226CTXL = hs_wild126CVJq.data[1];
        var hs_wild226CVJs = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CTXF, hs_a1226CTXG, hs_b126CTXH);
        switch (hs_wild226CVJs.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd826CTXJ, hs_a1326CTXK, hs_b226CTXL);
        case 3:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdccompare625uvrw.evaluate = function (hs_zddOrd726CTXZ, hs_zddOrd826CTY3, hs_a1126CTXR, hs_b26CTXV) {
        var hs_wild26CVJu = hs_a1126CTXR;
        if (hs_a1126CTXR.notEvaluated) {
            hs_wild26CVJu = hs_a1126CTXR.hscall();
        }
        var hs_a1226CTY0 = hs_wild26CVJu.data[0];
        var hs_a1326CTY4 = hs_wild26CVJu.data[1];
        var hs_wild126CVJt = hs_b26CTXV;
        if (hs_b26CTXV.notEvaluated) {
            hs_wild126CVJt = hs_b26CTXV.hscall();
        }
        var hs_b126CTY1 = hs_wild126CVJt.data[0];
        var hs_b226CTY5 = hs_wild126CVJt.data[1];
        var hs_wild226CVJv = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CTXZ, hs_a1226CTY0, hs_b126CTY1);
        switch (hs_wild226CVJv.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CTY3, hs_a1326CTY4, hs_b226CTY5);
        case 3:
            var $res = new $hs.Data(3);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczdp1Ord125uvrQ.evaluate = function (hs_zddOrd726CTY9, hs_zddOrd826CTYb) {
        var hs_sat26CVJx = new $hs.Thunk();
        hs_sat26CVJx.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd826CTYb);
        };
        var hs_sat26CVJw = new $hs.Thunk();
        hs_sat26CVJw.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd726CTY9);
        };
        return $hs.modules.GHCziClasses.hs_zdfEqZLz2cUZR.hscall(hs_sat26CVJw, hs_sat26CVJx);
    };
    this.hs_zdfOrdZLz2cUZR.evaluate = function (hs_zddOrd726CTYh, hs_zddOrd826CTYi) {
        var hs_sat26CVJz = new $hs.Thunk();
        hs_sat26CVJz.evaluateOnce = function () {
            return hs_zdcmin825uvrX.hscall(hs_zddOrd726CTYh, hs_zddOrd826CTYi);
        };
        var hs_sat26CVJA = new $hs.Thunk();
        hs_sat26CVJA.evaluateOnce = function () {
            return hs_zdcmax825uvrY.hscall(hs_zddOrd726CTYh, hs_zddOrd826CTYi);
        };
        var hs_sat26CVJB = new $hs.Func(2);
        hs_sat26CVJB.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczlze625uvqe.hscall(hs_zddOrd726CTYh, hs_zddOrd826CTYi, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVJC = new $hs.Func(2);
        hs_sat26CVJC.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczg625uvqy.hscall(hs_zddOrd726CTYh, hs_zddOrd826CTYi, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVJD = new $hs.Func(2);
        hs_sat26CVJD.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczgze625uvqS.hscall(hs_zddOrd726CTYh, hs_zddOrd826CTYi, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVJE = new $hs.Func(2);
        hs_sat26CVJE.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczl625uvrc.hscall(hs_zddOrd726CTYh, hs_zddOrd826CTYi, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVJF = new $hs.Func(2);
        hs_sat26CVJF.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdccompare625uvrw.hscall(hs_zddOrd726CTYh, hs_zddOrd826CTYi, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVJy = new $hs.Thunk();
        hs_sat26CVJy.evaluateOnce = function () {
            return hs_zdczdp1Ord125uvrQ.hscall(hs_zddOrd726CTYh, hs_zddOrd826CTYi);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CVJy, hs_sat26CVJF, hs_sat26CVJE, hs_sat26CVJD, hs_sat26CVJC, hs_sat26CVJB, hs_sat26CVJA, hs_sat26CVJz];
        return $res;
    };
    hs_zdcmin825uvrX.evaluate = function (hs_zddOrd726CTYu, hs_zddOrd826CTYv) {
        var hs_zddOrd926CTYw = new $hs.Thunk();
        hs_zddOrd926CTYw.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUZR.hscall(hs_zddOrd726CTYu, hs_zddOrd826CTYv);
        };
        var hs_sat26CVJG = new $hs.Func(2);
        hs_sat26CVJG.evaluate = function (hs_x26CTYz, hs_y26CTYA) {
            var hs_wild26CVJH = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd926CTYw, hs_x26CTYz, hs_y26CTYA);
            switch (hs_wild26CVJH.tag) {
            case 1:
                if (hs_y26CTYA.notEvaluated) {
                    return hs_y26CTYA.hscall();
                } else {
                    return hs_y26CTYA;
                }
            case 2:
                if (hs_x26CTYz.notEvaluated) {
                    return hs_x26CTYz.hscall();
                } else {
                    return hs_x26CTYz;
                }
            }
        };
        if (hs_sat26CVJG.notEvaluated) {
            return hs_sat26CVJG.hscall();
        } else {
            return hs_sat26CVJG;
        }
    };
    hs_zdcmax825uvrY.evaluate = function (hs_zddOrd726CTYG, hs_zddOrd826CTYH) {
        var hs_zddOrd926CTYI = new $hs.Thunk();
        hs_zddOrd926CTYI.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUZR.hscall(hs_zddOrd726CTYG, hs_zddOrd826CTYH);
        };
        var hs_sat26CVJI = new $hs.Func(2);
        hs_sat26CVJI.evaluate = function (hs_x26CTYL, hs_y26CTYM) {
            var hs_wild26CVJJ = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd926CTYI, hs_x26CTYL, hs_y26CTYM);
            switch (hs_wild26CVJJ.tag) {
            case 1:
                if (hs_x26CTYL.notEvaluated) {
                    return hs_x26CTYL.hscall();
                } else {
                    return hs_x26CTYL;
                }
            case 2:
                if (hs_y26CTYM.notEvaluated) {
                    return hs_y26CTYM.hscall();
                } else {
                    return hs_y26CTYM;
                }
            }
        };
        if (hs_sat26CVJI.notEvaluated) {
            return hs_sat26CVJI.hscall();
        } else {
            return hs_sat26CVJI;
        }
    };
    hs_zdczlze725uvsz.evaluate = function (hs_zddOrd726CTZ5, hs_zddOrd826CTZ9, hs_zddOrd926CTZd, hs_a1126CTYV, hs_b26CTZ0) {
        var hs_wild26CVJL = hs_a1126CTYV;
        if (hs_a1126CTYV.notEvaluated) {
            hs_wild26CVJL = hs_a1126CTYV.hscall();
        }
        var hs_a1226CTZ6 = hs_wild26CVJL.data[0];
        var hs_a1326CTZa = hs_wild26CVJL.data[1];
        var hs_a1426CTZe = hs_wild26CVJL.data[2];
        var hs_wild126CVJK = hs_b26CTZ0;
        if (hs_b26CTZ0.notEvaluated) {
            hs_wild126CVJK = hs_b26CTZ0.hscall();
        }
        var hs_b126CTZ7 = hs_wild126CVJK.data[0];
        var hs_b226CTZb = hs_wild126CVJK.data[1];
        var hs_b326CTZf = hs_wild126CVJK.data[2];
        var hs_wild226CVJM = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CTZ5, hs_a1226CTZ6, hs_b126CTZ7);
        switch (hs_wild226CVJM.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVJN = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CTZ9, hs_a1326CTZa, hs_b226CTZb);
            switch (hs_wild326CVJN.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd926CTZd, hs_a1426CTZe, hs_b326CTZf);
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczg725uvt0.evaluate = function (hs_zddOrd726CTZw, hs_zddOrd826CTZA, hs_zddOrd926CTZE, hs_a1126CTZm, hs_b26CTZr) {
        var hs_wild26CVJP = hs_a1126CTZm;
        if (hs_a1126CTZm.notEvaluated) {
            hs_wild26CVJP = hs_a1126CTZm.hscall();
        }
        var hs_a1226CTZx = hs_wild26CVJP.data[0];
        var hs_a1326CTZB = hs_wild26CVJP.data[1];
        var hs_a1426CTZF = hs_wild26CVJP.data[2];
        var hs_wild126CVJO = hs_b26CTZr;
        if (hs_b26CTZr.notEvaluated) {
            hs_wild126CVJO = hs_b26CTZr.hscall();
        }
        var hs_b126CTZy = hs_wild126CVJO.data[0];
        var hs_b226CTZC = hs_wild126CVJO.data[1];
        var hs_b326CTZG = hs_wild126CVJO.data[2];
        var hs_wild226CVJQ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CTZw, hs_a1226CTZx, hs_b126CTZy);
        switch (hs_wild226CVJQ.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVJR = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CTZA, hs_a1326CTZB, hs_b226CTZC);
            switch (hs_wild326CVJR.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd926CTZE, hs_a1426CTZF, hs_b326CTZG);
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczgze725uvtr.evaluate = function (hs_zddOrd726CTZX, hs_zddOrd826CU01, hs_zddOrd926CU05, hs_a1126CTZN, hs_b26CTZS) {
        var hs_wild26CVJT = hs_a1126CTZN;
        if (hs_a1126CTZN.notEvaluated) {
            hs_wild26CVJT = hs_a1126CTZN.hscall();
        }
        var hs_a1226CTZY = hs_wild26CVJT.data[0];
        var hs_a1326CU02 = hs_wild26CVJT.data[1];
        var hs_a1426CU06 = hs_wild26CVJT.data[2];
        var hs_wild126CVJS = hs_b26CTZS;
        if (hs_b26CTZS.notEvaluated) {
            hs_wild126CVJS = hs_b26CTZS.hscall();
        }
        var hs_b126CTZZ = hs_wild126CVJS.data[0];
        var hs_b226CU03 = hs_wild126CVJS.data[1];
        var hs_b326CU07 = hs_wild126CVJS.data[2];
        var hs_wild226CVJU = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CTZX, hs_a1226CTZY, hs_b126CTZZ);
        switch (hs_wild226CVJU.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVJV = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CU01, hs_a1326CU02, hs_b226CU03);
            switch (hs_wild326CVJV.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd926CU05, hs_a1426CU06, hs_b326CU07);
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczl725uvtS.evaluate = function (hs_zddOrd726CU0o, hs_zddOrd826CU0s, hs_zddOrd926CU0w, hs_a1126CU0e, hs_b26CU0j) {
        var hs_wild26CVJX = hs_a1126CU0e;
        if (hs_a1126CU0e.notEvaluated) {
            hs_wild26CVJX = hs_a1126CU0e.hscall();
        }
        var hs_a1226CU0p = hs_wild26CVJX.data[0];
        var hs_a1326CU0t = hs_wild26CVJX.data[1];
        var hs_a1426CU0x = hs_wild26CVJX.data[2];
        var hs_wild126CVJW = hs_b26CU0j;
        if (hs_b26CU0j.notEvaluated) {
            hs_wild126CVJW = hs_b26CU0j.hscall();
        }
        var hs_b126CU0q = hs_wild126CVJW.data[0];
        var hs_b226CU0u = hs_wild126CVJW.data[1];
        var hs_b326CU0y = hs_wild126CVJW.data[2];
        var hs_wild226CVJY = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CU0o, hs_a1226CU0p, hs_b126CU0q);
        switch (hs_wild226CVJY.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVJZ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CU0s, hs_a1326CU0t, hs_b226CU0u);
            switch (hs_wild326CVJZ.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd926CU0w, hs_a1426CU0x, hs_b326CU0y);
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdccompare725uvuj.evaluate = function (hs_zddOrd726CU0P, hs_zddOrd826CU0T, hs_zddOrd926CU0X, hs_a1126CU0F, hs_b26CU0K) {
        var hs_wild26CVK1 = hs_a1126CU0F;
        if (hs_a1126CU0F.notEvaluated) {
            hs_wild26CVK1 = hs_a1126CU0F.hscall();
        }
        var hs_a1226CU0Q = hs_wild26CVK1.data[0];
        var hs_a1326CU0U = hs_wild26CVK1.data[1];
        var hs_a1426CU0Y = hs_wild26CVK1.data[2];
        var hs_wild126CVK0 = hs_b26CU0K;
        if (hs_b26CU0K.notEvaluated) {
            hs_wild126CVK0 = hs_b26CU0K.hscall();
        }
        var hs_b126CU0R = hs_wild126CVK0.data[0];
        var hs_b226CU0V = hs_wild126CVK0.data[1];
        var hs_b326CU0Z = hs_wild126CVK0.data[2];
        var hs_wild226CVK2 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CU0P, hs_a1226CU0Q, hs_b126CU0R);
        switch (hs_wild226CVK2.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVK3 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CU0T, hs_a1326CU0U, hs_b226CU0V);
            switch (hs_wild326CVK3.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CU0X, hs_a1426CU0Y, hs_b326CU0Z);
            case 3:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(3);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczdp1Ord225uvuK.evaluate = function (hs_zddOrd726CU14, hs_zddOrd826CU16, hs_zddOrd926CU18) {
        var hs_sat26CVK5 = new $hs.Thunk();
        hs_sat26CVK5.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd926CU18);
        };
        var hs_sat26CVK6 = new $hs.Thunk();
        hs_sat26CVK6.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd826CU16);
        };
        var hs_sat26CVK4 = new $hs.Thunk();
        hs_sat26CVK4.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd726CU14);
        };
        return $hs.modules.GHCziClasses.hs_zdfEqZLz2cUz2cUZR.hscall(hs_sat26CVK4, hs_sat26CVK6, hs_sat26CVK5);
    };
    this.hs_zdfOrdZLz2cUz2cUZR.evaluate = function (hs_zddOrd726CU1f, hs_zddOrd826CU1g, hs_zddOrd926CU1h) {
        var hs_sat26CVK8 = new $hs.Thunk();
        hs_sat26CVK8.evaluateOnce = function () {
            return hs_zdcmin925uvuU.hscall(hs_zddOrd726CU1f, hs_zddOrd826CU1g, hs_zddOrd926CU1h);
        };
        var hs_sat26CVK9 = new $hs.Thunk();
        hs_sat26CVK9.evaluateOnce = function () {
            return hs_zdcmax925uvuV.hscall(hs_zddOrd726CU1f, hs_zddOrd826CU1g, hs_zddOrd926CU1h);
        };
        var hs_sat26CVKa = new $hs.Func(2);
        hs_sat26CVKa.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczlze725uvsz.hscall(hs_zddOrd726CU1f, hs_zddOrd826CU1g, hs_zddOrd926CU1h, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVKb = new $hs.Func(2);
        hs_sat26CVKb.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczg725uvt0.hscall(hs_zddOrd726CU1f, hs_zddOrd826CU1g, hs_zddOrd926CU1h, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVKc = new $hs.Func(2);
        hs_sat26CVKc.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczgze725uvtr.hscall(hs_zddOrd726CU1f, hs_zddOrd826CU1g, hs_zddOrd926CU1h, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVKd = new $hs.Func(2);
        hs_sat26CVKd.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczl725uvtS.hscall(hs_zddOrd726CU1f, hs_zddOrd826CU1g, hs_zddOrd926CU1h, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVKe = new $hs.Func(2);
        hs_sat26CVKe.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdccompare725uvuj.hscall(hs_zddOrd726CU1f, hs_zddOrd826CU1g, hs_zddOrd926CU1h, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVK7 = new $hs.Thunk();
        hs_sat26CVK7.evaluateOnce = function () {
            return hs_zdczdp1Ord225uvuK.hscall(hs_zddOrd726CU1f, hs_zddOrd826CU1g, hs_zddOrd926CU1h);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CVK7, hs_sat26CVKe, hs_sat26CVKd, hs_sat26CVKc, hs_sat26CVKb, hs_sat26CVKa, hs_sat26CVK9, hs_sat26CVK8];
        return $res;
    };
    hs_zdcmin925uvuU.evaluate = function (hs_zddOrd726CU1u, hs_zddOrd826CU1v, hs_zddOrd926CU1w) {
        var hs_zddOrd1026CU1x = new $hs.Thunk();
        hs_zddOrd1026CU1x.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUZR.hscall(hs_zddOrd726CU1u, hs_zddOrd826CU1v, hs_zddOrd926CU1w);
        };
        var hs_sat26CVKf = new $hs.Func(2);
        hs_sat26CVKf.evaluate = function (hs_x26CU1A, hs_y26CU1B) {
            var hs_wild26CVKg = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1026CU1x, hs_x26CU1A, hs_y26CU1B);
            switch (hs_wild26CVKg.tag) {
            case 1:
                if (hs_y26CU1B.notEvaluated) {
                    return hs_y26CU1B.hscall();
                } else {
                    return hs_y26CU1B;
                }
            case 2:
                if (hs_x26CU1A.notEvaluated) {
                    return hs_x26CU1A.hscall();
                } else {
                    return hs_x26CU1A;
                }
            }
        };
        if (hs_sat26CVKf.notEvaluated) {
            return hs_sat26CVKf.hscall();
        } else {
            return hs_sat26CVKf;
        }
    };
    hs_zdcmax925uvuV.evaluate = function (hs_zddOrd726CU1I, hs_zddOrd826CU1J, hs_zddOrd926CU1K) {
        var hs_zddOrd1026CU1L = new $hs.Thunk();
        hs_zddOrd1026CU1L.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUZR.hscall(hs_zddOrd726CU1I, hs_zddOrd826CU1J, hs_zddOrd926CU1K);
        };
        var hs_sat26CVKh = new $hs.Func(2);
        hs_sat26CVKh.evaluate = function (hs_x26CU1O, hs_y26CU1P) {
            var hs_wild26CVKi = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1026CU1L, hs_x26CU1O, hs_y26CU1P);
            switch (hs_wild26CVKi.tag) {
            case 1:
                if (hs_x26CU1O.notEvaluated) {
                    return hs_x26CU1O.hscall();
                } else {
                    return hs_x26CU1O;
                }
            case 2:
                if (hs_y26CU1P.notEvaluated) {
                    return hs_y26CU1P.hscall();
                } else {
                    return hs_y26CU1P;
                }
            }
        };
        if (hs_sat26CVKh.notEvaluated) {
            return hs_sat26CVKh.hscall();
        } else {
            return hs_sat26CVKh;
        }
    };
    hs_zdczlze825uvvC.evaluate = function (hs_zddOrd726CU2b, hs_zddOrd826CU2f, hs_zddOrd926CU2j, hs_zddOrd1026CU2n, hs_a1126CU1Z, hs_b26CU25) {
        var hs_wild26CVKk = hs_a1126CU1Z;
        if (hs_a1126CU1Z.notEvaluated) {
            hs_wild26CVKk = hs_a1126CU1Z.hscall();
        }
        var hs_a1226CU2c = hs_wild26CVKk.data[0];
        var hs_a1326CU2g = hs_wild26CVKk.data[1];
        var hs_a1426CU2k = hs_wild26CVKk.data[2];
        var hs_a1526CU2o = hs_wild26CVKk.data[3];
        var hs_wild126CVKj = hs_b26CU25;
        if (hs_b26CU25.notEvaluated) {
            hs_wild126CVKj = hs_b26CU25.hscall();
        }
        var hs_b126CU2d = hs_wild126CVKj.data[0];
        var hs_b226CU2h = hs_wild126CVKj.data[1];
        var hs_b326CU2l = hs_wild126CVKj.data[2];
        var hs_b426CU2p = hs_wild126CVKj.data[3];
        var hs_wild226CVKl = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CU2b, hs_a1226CU2c, hs_b126CU2d);
        switch (hs_wild226CVKl.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVKm = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CU2f, hs_a1326CU2g, hs_b226CU2h);
            switch (hs_wild326CVKm.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVKn = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CU2j, hs_a1426CU2k, hs_b326CU2l);
                switch (hs_wild426CVKn.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1026CU2n, hs_a1526CU2o, hs_b426CU2p);
                case 3:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczg825uvwa.evaluate = function (hs_zddOrd726CU2J, hs_zddOrd826CU2N, hs_zddOrd926CU2R, hs_zddOrd1026CU2V, hs_a1126CU2x, hs_b26CU2D) {
        var hs_wild26CVKp = hs_a1126CU2x;
        if (hs_a1126CU2x.notEvaluated) {
            hs_wild26CVKp = hs_a1126CU2x.hscall();
        }
        var hs_a1226CU2K = hs_wild26CVKp.data[0];
        var hs_a1326CU2O = hs_wild26CVKp.data[1];
        var hs_a1426CU2S = hs_wild26CVKp.data[2];
        var hs_a1526CU2W = hs_wild26CVKp.data[3];
        var hs_wild126CVKo = hs_b26CU2D;
        if (hs_b26CU2D.notEvaluated) {
            hs_wild126CVKo = hs_b26CU2D.hscall();
        }
        var hs_b126CU2L = hs_wild126CVKo.data[0];
        var hs_b226CU2P = hs_wild126CVKo.data[1];
        var hs_b326CU2T = hs_wild126CVKo.data[2];
        var hs_b426CU2X = hs_wild126CVKo.data[3];
        var hs_wild226CVKq = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CU2J, hs_a1226CU2K, hs_b126CU2L);
        switch (hs_wild226CVKq.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVKr = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CU2N, hs_a1326CU2O, hs_b226CU2P);
            switch (hs_wild326CVKr.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVKs = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CU2R, hs_a1426CU2S, hs_b326CU2T);
                switch (hs_wild426CVKs.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd1026CU2V, hs_a1526CU2W, hs_b426CU2X);
                case 3:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczgze825uvwI.evaluate = function (hs_zddOrd726CU3h, hs_zddOrd826CU3l, hs_zddOrd926CU3p, hs_zddOrd1026CU3t, hs_a1126CU35, hs_b26CU3b) {
        var hs_wild26CVKu = hs_a1126CU35;
        if (hs_a1126CU35.notEvaluated) {
            hs_wild26CVKu = hs_a1126CU35.hscall();
        }
        var hs_a1226CU3i = hs_wild26CVKu.data[0];
        var hs_a1326CU3m = hs_wild26CVKu.data[1];
        var hs_a1426CU3q = hs_wild26CVKu.data[2];
        var hs_a1526CU3u = hs_wild26CVKu.data[3];
        var hs_wild126CVKt = hs_b26CU3b;
        if (hs_b26CU3b.notEvaluated) {
            hs_wild126CVKt = hs_b26CU3b.hscall();
        }
        var hs_b126CU3j = hs_wild126CVKt.data[0];
        var hs_b226CU3n = hs_wild126CVKt.data[1];
        var hs_b326CU3r = hs_wild126CVKt.data[2];
        var hs_b426CU3v = hs_wild126CVKt.data[3];
        var hs_wild226CVKv = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CU3h, hs_a1226CU3i, hs_b126CU3j);
        switch (hs_wild226CVKv.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVKw = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CU3l, hs_a1326CU3m, hs_b226CU3n);
            switch (hs_wild326CVKw.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVKx = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CU3p, hs_a1426CU3q, hs_b326CU3r);
                switch (hs_wild426CVKx.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd1026CU3t, hs_a1526CU3u, hs_b426CU3v);
                case 3:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczl825uvxg.evaluate = function (hs_zddOrd726CU3P, hs_zddOrd826CU3T, hs_zddOrd926CU3X, hs_zddOrd1026CU41, hs_a1126CU3D, hs_b26CU3J) {
        var hs_wild26CVKz = hs_a1126CU3D;
        if (hs_a1126CU3D.notEvaluated) {
            hs_wild26CVKz = hs_a1126CU3D.hscall();
        }
        var hs_a1226CU3Q = hs_wild26CVKz.data[0];
        var hs_a1326CU3U = hs_wild26CVKz.data[1];
        var hs_a1426CU3Y = hs_wild26CVKz.data[2];
        var hs_a1526CU42 = hs_wild26CVKz.data[3];
        var hs_wild126CVKy = hs_b26CU3J;
        if (hs_b26CU3J.notEvaluated) {
            hs_wild126CVKy = hs_b26CU3J.hscall();
        }
        var hs_b126CU3R = hs_wild126CVKy.data[0];
        var hs_b226CU3V = hs_wild126CVKy.data[1];
        var hs_b326CU3Z = hs_wild126CVKy.data[2];
        var hs_b426CU43 = hs_wild126CVKy.data[3];
        var hs_wild226CVKA = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CU3P, hs_a1226CU3Q, hs_b126CU3R);
        switch (hs_wild226CVKA.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVKB = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CU3T, hs_a1326CU3U, hs_b226CU3V);
            switch (hs_wild326CVKB.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVKC = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CU3X, hs_a1426CU3Y, hs_b326CU3Z);
                switch (hs_wild426CVKC.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd1026CU41, hs_a1526CU42, hs_b426CU43);
                case 3:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdccompare825uvxO.evaluate = function (hs_zddOrd726CU4n, hs_zddOrd826CU4r, hs_zddOrd926CU4v, hs_zddOrd1026CU4z, hs_a1126CU4b, hs_b26CU4h) {
        var hs_wild26CVKE = hs_a1126CU4b;
        if (hs_a1126CU4b.notEvaluated) {
            hs_wild26CVKE = hs_a1126CU4b.hscall();
        }
        var hs_a1226CU4o = hs_wild26CVKE.data[0];
        var hs_a1326CU4s = hs_wild26CVKE.data[1];
        var hs_a1426CU4w = hs_wild26CVKE.data[2];
        var hs_a1526CU4A = hs_wild26CVKE.data[3];
        var hs_wild126CVKD = hs_b26CU4h;
        if (hs_b26CU4h.notEvaluated) {
            hs_wild126CVKD = hs_b26CU4h.hscall();
        }
        var hs_b126CU4p = hs_wild126CVKD.data[0];
        var hs_b226CU4t = hs_wild126CVKD.data[1];
        var hs_b326CU4x = hs_wild126CVKD.data[2];
        var hs_b426CU4B = hs_wild126CVKD.data[3];
        var hs_wild226CVKF = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CU4n, hs_a1226CU4o, hs_b126CU4p);
        switch (hs_wild226CVKF.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVKG = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CU4r, hs_a1326CU4s, hs_b226CU4t);
            switch (hs_wild326CVKG.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVKH = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CU4v, hs_a1426CU4w, hs_b326CU4x);
                switch (hs_wild426CVKH.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CU4z, hs_a1526CU4A, hs_b426CU4B);
                case 3:
                    var $res = new $hs.Data(3);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(3);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczdp1Ord325uvym.evaluate = function (hs_zddOrd726CU4H, hs_zddOrd826CU4J, hs_zddOrd926CU4L, hs_zddOrd1026CU4N) {
        var hs_sat26CVKJ = new $hs.Thunk();
        hs_sat26CVKJ.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1026CU4N);
        };
        var hs_sat26CVKK = new $hs.Thunk();
        hs_sat26CVKK.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd926CU4L);
        };
        var hs_sat26CVKL = new $hs.Thunk();
        hs_sat26CVKL.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd826CU4J);
        };
        var hs_sat26CVKI = new $hs.Thunk();
        hs_sat26CVKI.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd726CU4H);
        };
        return $hs.modules.GHCziClasses.hs_zdfEqZLz2cUz2cUz2cUZR.hscall(hs_sat26CVKI, hs_sat26CVKL, hs_sat26CVKK, hs_sat26CVKJ);
    };
    this.hs_zdfOrdZLz2cUz2cUz2cUZR.evaluate = function (hs_zddOrd726CU4V, hs_zddOrd826CU4W, hs_zddOrd926CU4X, hs_zddOrd1026CU4Y) {
        var hs_sat26CVKN = new $hs.Thunk();
        hs_sat26CVKN.evaluateOnce = function () {
            return hs_zdcmin1025uvyz.hscall(hs_zddOrd726CU4V, hs_zddOrd826CU4W, hs_zddOrd926CU4X, hs_zddOrd1026CU4Y);
        };
        var hs_sat26CVKO = new $hs.Thunk();
        hs_sat26CVKO.evaluateOnce = function () {
            return hs_zdcmax1025uvyA.hscall(hs_zddOrd726CU4V, hs_zddOrd826CU4W, hs_zddOrd926CU4X, hs_zddOrd1026CU4Y);
        };
        var hs_sat26CVKP = new $hs.Func(2);
        hs_sat26CVKP.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczlze825uvvC.hscall(hs_zddOrd726CU4V, hs_zddOrd826CU4W, hs_zddOrd926CU4X, hs_zddOrd1026CU4Y, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVKQ = new $hs.Func(2);
        hs_sat26CVKQ.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczg825uvwa.hscall(hs_zddOrd726CU4V, hs_zddOrd826CU4W, hs_zddOrd926CU4X, hs_zddOrd1026CU4Y, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVKR = new $hs.Func(2);
        hs_sat26CVKR.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczgze825uvwI.hscall(hs_zddOrd726CU4V, hs_zddOrd826CU4W, hs_zddOrd926CU4X, hs_zddOrd1026CU4Y, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVKS = new $hs.Func(2);
        hs_sat26CVKS.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczl825uvxg.hscall(hs_zddOrd726CU4V, hs_zddOrd826CU4W, hs_zddOrd926CU4X, hs_zddOrd1026CU4Y, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVKT = new $hs.Func(2);
        hs_sat26CVKT.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdccompare825uvxO.hscall(hs_zddOrd726CU4V, hs_zddOrd826CU4W, hs_zddOrd926CU4X, hs_zddOrd1026CU4Y, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVKM = new $hs.Thunk();
        hs_sat26CVKM.evaluateOnce = function () {
            return hs_zdczdp1Ord325uvym.hscall(hs_zddOrd726CU4V, hs_zddOrd826CU4W, hs_zddOrd926CU4X, hs_zddOrd1026CU4Y);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CVKM, hs_sat26CVKT, hs_sat26CVKS, hs_sat26CVKR, hs_sat26CVKQ, hs_sat26CVKP, hs_sat26CVKO, hs_sat26CVKN];
        return $res;
    };
    hs_zdcmin1025uvyz.evaluate = function (hs_zddOrd726CU5c, hs_zddOrd826CU5d, hs_zddOrd926CU5e, hs_zddOrd1026CU5f) {
        var hs_zddOrd1126CU5g = new $hs.Thunk();
        hs_zddOrd1126CU5g.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUZR.hscall(hs_zddOrd726CU5c, hs_zddOrd826CU5d, hs_zddOrd926CU5e, hs_zddOrd1026CU5f);
        };
        var hs_sat26CVKU = new $hs.Func(2);
        hs_sat26CVKU.evaluate = function (hs_x26CU5j, hs_y26CU5k) {
            var hs_wild26CVKV = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1126CU5g, hs_x26CU5j, hs_y26CU5k);
            switch (hs_wild26CVKV.tag) {
            case 1:
                if (hs_y26CU5k.notEvaluated) {
                    return hs_y26CU5k.hscall();
                } else {
                    return hs_y26CU5k;
                }
            case 2:
                if (hs_x26CU5j.notEvaluated) {
                    return hs_x26CU5j.hscall();
                } else {
                    return hs_x26CU5j;
                }
            }
        };
        if (hs_sat26CVKU.notEvaluated) {
            return hs_sat26CVKU.hscall();
        } else {
            return hs_sat26CVKU;
        }
    };
    hs_zdcmax1025uvyA.evaluate = function (hs_zddOrd726CU5s, hs_zddOrd826CU5t, hs_zddOrd926CU5u, hs_zddOrd1026CU5v) {
        var hs_zddOrd1126CU5w = new $hs.Thunk();
        hs_zddOrd1126CU5w.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUZR.hscall(hs_zddOrd726CU5s, hs_zddOrd826CU5t, hs_zddOrd926CU5u, hs_zddOrd1026CU5v);
        };
        var hs_sat26CVKW = new $hs.Func(2);
        hs_sat26CVKW.evaluate = function (hs_x26CU5z, hs_y26CU5A) {
            var hs_wild26CVKX = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1126CU5w, hs_x26CU5z, hs_y26CU5A);
            switch (hs_wild26CVKX.tag) {
            case 1:
                if (hs_x26CU5z.notEvaluated) {
                    return hs_x26CU5z.hscall();
                } else {
                    return hs_x26CU5z;
                }
            case 2:
                if (hs_y26CU5A.notEvaluated) {
                    return hs_y26CU5A.hscall();
                } else {
                    return hs_y26CU5A;
                }
            }
        };
        if (hs_sat26CVKW.notEvaluated) {
            return hs_sat26CVKW.hscall();
        } else {
            return hs_sat26CVKW;
        }
    };
    hs_zdczlze925uvzn.evaluate = function (hs_zddOrd726CU5Z, hs_zddOrd826CU63, hs_zddOrd926CU67, hs_zddOrd1026CU6b, hs_zddOrd1126CU6f, hs_a1126CU5L, hs_b26CU5S) {
        var hs_wild26CVKZ = hs_a1126CU5L;
        if (hs_a1126CU5L.notEvaluated) {
            hs_wild26CVKZ = hs_a1126CU5L.hscall();
        }
        var hs_a1226CU60 = hs_wild26CVKZ.data[0];
        var hs_a1326CU64 = hs_wild26CVKZ.data[1];
        var hs_a1426CU68 = hs_wild26CVKZ.data[2];
        var hs_a1526CU6c = hs_wild26CVKZ.data[3];
        var hs_a1626CU6g = hs_wild26CVKZ.data[4];
        var hs_wild126CVKY = hs_b26CU5S;
        if (hs_b26CU5S.notEvaluated) {
            hs_wild126CVKY = hs_b26CU5S.hscall();
        }
        var hs_b126CU61 = hs_wild126CVKY.data[0];
        var hs_b226CU65 = hs_wild126CVKY.data[1];
        var hs_b326CU69 = hs_wild126CVKY.data[2];
        var hs_b426CU6d = hs_wild126CVKY.data[3];
        var hs_b526CU6h = hs_wild126CVKY.data[4];
        var hs_wild226CVL0 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CU5Z, hs_a1226CU60, hs_b126CU61);
        switch (hs_wild226CVL0.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVL1 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CU63, hs_a1326CU64, hs_b226CU65);
            switch (hs_wild326CVL1.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVL2 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CU67, hs_a1426CU68, hs_b326CU69);
                switch (hs_wild426CVL2.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVL3 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CU6b, hs_a1526CU6c, hs_b426CU6d);
                    switch (hs_wild526CVL3.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1126CU6f, hs_a1626CU6g, hs_b526CU6h);
                    case 3:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczg925uvA2.evaluate = function (hs_zddOrd726CU6E, hs_zddOrd826CU6I, hs_zddOrd926CU6M, hs_zddOrd1026CU6Q, hs_zddOrd1126CU6U, hs_a1126CU6q, hs_b26CU6x) {
        var hs_wild26CVL5 = hs_a1126CU6q;
        if (hs_a1126CU6q.notEvaluated) {
            hs_wild26CVL5 = hs_a1126CU6q.hscall();
        }
        var hs_a1226CU6F = hs_wild26CVL5.data[0];
        var hs_a1326CU6J = hs_wild26CVL5.data[1];
        var hs_a1426CU6N = hs_wild26CVL5.data[2];
        var hs_a1526CU6R = hs_wild26CVL5.data[3];
        var hs_a1626CU6V = hs_wild26CVL5.data[4];
        var hs_wild126CVL4 = hs_b26CU6x;
        if (hs_b26CU6x.notEvaluated) {
            hs_wild126CVL4 = hs_b26CU6x.hscall();
        }
        var hs_b126CU6G = hs_wild126CVL4.data[0];
        var hs_b226CU6K = hs_wild126CVL4.data[1];
        var hs_b326CU6O = hs_wild126CVL4.data[2];
        var hs_b426CU6S = hs_wild126CVL4.data[3];
        var hs_b526CU6W = hs_wild126CVL4.data[4];
        var hs_wild226CVL6 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CU6E, hs_a1226CU6F, hs_b126CU6G);
        switch (hs_wild226CVL6.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVL7 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CU6I, hs_a1326CU6J, hs_b226CU6K);
            switch (hs_wild326CVL7.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVL8 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CU6M, hs_a1426CU6N, hs_b326CU6O);
                switch (hs_wild426CVL8.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVL9 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CU6Q, hs_a1526CU6R, hs_b426CU6S);
                    switch (hs_wild526CVL9.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd1126CU6U, hs_a1626CU6V, hs_b526CU6W);
                    case 3:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczgze925uvAH.evaluate = function (hs_zddOrd726CU7j, hs_zddOrd826CU7n, hs_zddOrd926CU7r, hs_zddOrd1026CU7v, hs_zddOrd1126CU7z, hs_a1126CU75, hs_b26CU7c) {
        var hs_wild26CVLb = hs_a1126CU75;
        if (hs_a1126CU75.notEvaluated) {
            hs_wild26CVLb = hs_a1126CU75.hscall();
        }
        var hs_a1226CU7k = hs_wild26CVLb.data[0];
        var hs_a1326CU7o = hs_wild26CVLb.data[1];
        var hs_a1426CU7s = hs_wild26CVLb.data[2];
        var hs_a1526CU7w = hs_wild26CVLb.data[3];
        var hs_a1626CU7A = hs_wild26CVLb.data[4];
        var hs_wild126CVLa = hs_b26CU7c;
        if (hs_b26CU7c.notEvaluated) {
            hs_wild126CVLa = hs_b26CU7c.hscall();
        }
        var hs_b126CU7l = hs_wild126CVLa.data[0];
        var hs_b226CU7p = hs_wild126CVLa.data[1];
        var hs_b326CU7t = hs_wild126CVLa.data[2];
        var hs_b426CU7x = hs_wild126CVLa.data[3];
        var hs_b526CU7B = hs_wild126CVLa.data[4];
        var hs_wild226CVLc = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CU7j, hs_a1226CU7k, hs_b126CU7l);
        switch (hs_wild226CVLc.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVLd = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CU7n, hs_a1326CU7o, hs_b226CU7p);
            switch (hs_wild326CVLd.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVLe = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CU7r, hs_a1426CU7s, hs_b326CU7t);
                switch (hs_wild426CVLe.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVLf = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CU7v, hs_a1526CU7w, hs_b426CU7x);
                    switch (hs_wild526CVLf.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd1126CU7z, hs_a1626CU7A, hs_b526CU7B);
                    case 3:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczl925uvBm.evaluate = function (hs_zddOrd726CU7Y, hs_zddOrd826CU82, hs_zddOrd926CU86, hs_zddOrd1026CU8a, hs_zddOrd1126CU8e, hs_a1126CU7K, hs_b26CU7R) {
        var hs_wild26CVLh = hs_a1126CU7K;
        if (hs_a1126CU7K.notEvaluated) {
            hs_wild26CVLh = hs_a1126CU7K.hscall();
        }
        var hs_a1226CU7Z = hs_wild26CVLh.data[0];
        var hs_a1326CU83 = hs_wild26CVLh.data[1];
        var hs_a1426CU87 = hs_wild26CVLh.data[2];
        var hs_a1526CU8b = hs_wild26CVLh.data[3];
        var hs_a1626CU8f = hs_wild26CVLh.data[4];
        var hs_wild126CVLg = hs_b26CU7R;
        if (hs_b26CU7R.notEvaluated) {
            hs_wild126CVLg = hs_b26CU7R.hscall();
        }
        var hs_b126CU80 = hs_wild126CVLg.data[0];
        var hs_b226CU84 = hs_wild126CVLg.data[1];
        var hs_b326CU88 = hs_wild126CVLg.data[2];
        var hs_b426CU8c = hs_wild126CVLg.data[3];
        var hs_b526CU8g = hs_wild126CVLg.data[4];
        var hs_wild226CVLi = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CU7Y, hs_a1226CU7Z, hs_b126CU80);
        switch (hs_wild226CVLi.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVLj = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CU82, hs_a1326CU83, hs_b226CU84);
            switch (hs_wild326CVLj.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVLk = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CU86, hs_a1426CU87, hs_b326CU88);
                switch (hs_wild426CVLk.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVLl = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CU8a, hs_a1526CU8b, hs_b426CU8c);
                    switch (hs_wild526CVLl.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd1126CU8e, hs_a1626CU8f, hs_b526CU8g);
                    case 3:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdccompare925uvC1.evaluate = function (hs_zddOrd726CU8D, hs_zddOrd826CU8H, hs_zddOrd926CU8L, hs_zddOrd1026CU8P, hs_zddOrd1126CU8T, hs_a1126CU8p, hs_b26CU8w) {
        var hs_wild26CVLn = hs_a1126CU8p;
        if (hs_a1126CU8p.notEvaluated) {
            hs_wild26CVLn = hs_a1126CU8p.hscall();
        }
        var hs_a1226CU8E = hs_wild26CVLn.data[0];
        var hs_a1326CU8I = hs_wild26CVLn.data[1];
        var hs_a1426CU8M = hs_wild26CVLn.data[2];
        var hs_a1526CU8Q = hs_wild26CVLn.data[3];
        var hs_a1626CU8U = hs_wild26CVLn.data[4];
        var hs_wild126CVLm = hs_b26CU8w;
        if (hs_b26CU8w.notEvaluated) {
            hs_wild126CVLm = hs_b26CU8w.hscall();
        }
        var hs_b126CU8F = hs_wild126CVLm.data[0];
        var hs_b226CU8J = hs_wild126CVLm.data[1];
        var hs_b326CU8N = hs_wild126CVLm.data[2];
        var hs_b426CU8R = hs_wild126CVLm.data[3];
        var hs_b526CU8V = hs_wild126CVLm.data[4];
        var hs_wild226CVLo = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CU8D, hs_a1226CU8E, hs_b126CU8F);
        switch (hs_wild226CVLo.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVLp = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CU8H, hs_a1326CU8I, hs_b226CU8J);
            switch (hs_wild326CVLp.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVLq = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CU8L, hs_a1426CU8M, hs_b326CU8N);
                switch (hs_wild426CVLq.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVLr = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CU8P, hs_a1526CU8Q, hs_b426CU8R);
                    switch (hs_wild526CVLr.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CU8T, hs_a1626CU8U, hs_b526CU8V);
                    case 3:
                        var $res = new $hs.Data(3);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(3);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(3);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczdp1Ord425uvCG.evaluate = function (hs_zddOrd726CU92, hs_zddOrd826CU94, hs_zddOrd926CU96, hs_zddOrd1026CU98, hs_zddOrd1126CU9a) {
        var hs_sat26CVLt = new $hs.Thunk();
        hs_sat26CVLt.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1126CU9a);
        };
        var hs_sat26CVLu = new $hs.Thunk();
        hs_sat26CVLu.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1026CU98);
        };
        var hs_sat26CVLv = new $hs.Thunk();
        hs_sat26CVLv.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd926CU96);
        };
        var hs_sat26CVLw = new $hs.Thunk();
        hs_sat26CVLw.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd826CU94);
        };
        var hs_sat26CVLs = new $hs.Thunk();
        hs_sat26CVLs.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd726CU92);
        };
        return $hs.modules.GHCziClasses.hs_zdfEqZLz2cUz2cUz2cUz2cUZR.hscall(hs_sat26CVLs, hs_sat26CVLw, hs_sat26CVLv, hs_sat26CVLu, hs_sat26CVLt);
    };
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddOrd726CU9j, hs_zddOrd826CU9k, hs_zddOrd926CU9l, hs_zddOrd1026CU9m, hs_zddOrd1126CU9n) {
        var hs_sat26CVLy = new $hs.Thunk();
        hs_sat26CVLy.evaluateOnce = function () {
            return hs_zdcmin1125uvCW.hscall(hs_zddOrd726CU9j, hs_zddOrd826CU9k, hs_zddOrd926CU9l, hs_zddOrd1026CU9m, hs_zddOrd1126CU9n);
        };
        var hs_sat26CVLz = new $hs.Thunk();
        hs_sat26CVLz.evaluateOnce = function () {
            return hs_zdcmax1125uvCX.hscall(hs_zddOrd726CU9j, hs_zddOrd826CU9k, hs_zddOrd926CU9l, hs_zddOrd1026CU9m, hs_zddOrd1126CU9n);
        };
        var hs_sat26CVLA = new $hs.Func(2);
        hs_sat26CVLA.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczlze925uvzn.hscall(hs_zddOrd726CU9j, hs_zddOrd826CU9k, hs_zddOrd926CU9l, hs_zddOrd1026CU9m, hs_zddOrd1126CU9n, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVLB = new $hs.Func(2);
        hs_sat26CVLB.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczg925uvA2.hscall(hs_zddOrd726CU9j, hs_zddOrd826CU9k, hs_zddOrd926CU9l, hs_zddOrd1026CU9m, hs_zddOrd1126CU9n, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVLC = new $hs.Func(2);
        hs_sat26CVLC.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczgze925uvAH.hscall(hs_zddOrd726CU9j, hs_zddOrd826CU9k, hs_zddOrd926CU9l, hs_zddOrd1026CU9m, hs_zddOrd1126CU9n, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVLD = new $hs.Func(2);
        hs_sat26CVLD.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczl925uvBm.hscall(hs_zddOrd726CU9j, hs_zddOrd826CU9k, hs_zddOrd926CU9l, hs_zddOrd1026CU9m, hs_zddOrd1126CU9n, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVLE = new $hs.Func(2);
        hs_sat26CVLE.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdccompare925uvC1.hscall(hs_zddOrd726CU9j, hs_zddOrd826CU9k, hs_zddOrd926CU9l, hs_zddOrd1026CU9m, hs_zddOrd1126CU9n, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVLx = new $hs.Thunk();
        hs_sat26CVLx.evaluateOnce = function () {
            return hs_zdczdp1Ord425uvCG.hscall(hs_zddOrd726CU9j, hs_zddOrd826CU9k, hs_zddOrd926CU9l, hs_zddOrd1026CU9m, hs_zddOrd1126CU9n);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CVLx, hs_sat26CVLE, hs_sat26CVLD, hs_sat26CVLC, hs_sat26CVLB, hs_sat26CVLA, hs_sat26CVLz, hs_sat26CVLy];
        return $res;
    };
    hs_zdcmin1125uvCW.evaluate = function (hs_zddOrd726CU9C, hs_zddOrd826CU9D, hs_zddOrd926CU9E, hs_zddOrd1026CU9F, hs_zddOrd1126CU9G) {
        var hs_zddOrd1226CU9H = new $hs.Thunk();
        hs_zddOrd1226CU9H.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUz2cUZR.hscall(hs_zddOrd726CU9C, hs_zddOrd826CU9D, hs_zddOrd926CU9E, hs_zddOrd1026CU9F, hs_zddOrd1126CU9G);
        };
        var hs_sat26CVLF = new $hs.Func(2);
        hs_sat26CVLF.evaluate = function (hs_x26CU9K, hs_y26CU9L) {
            var hs_wild26CVLG = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1226CU9H, hs_x26CU9K, hs_y26CU9L);
            switch (hs_wild26CVLG.tag) {
            case 1:
                if (hs_y26CU9L.notEvaluated) {
                    return hs_y26CU9L.hscall();
                } else {
                    return hs_y26CU9L;
                }
            case 2:
                if (hs_x26CU9K.notEvaluated) {
                    return hs_x26CU9K.hscall();
                } else {
                    return hs_x26CU9K;
                }
            }
        };
        if (hs_sat26CVLF.notEvaluated) {
            return hs_sat26CVLF.hscall();
        } else {
            return hs_sat26CVLF;
        }
    };
    hs_zdcmax1125uvCX.evaluate = function (hs_zddOrd726CU9U, hs_zddOrd826CU9V, hs_zddOrd926CU9W, hs_zddOrd1026CU9X, hs_zddOrd1126CU9Y) {
        var hs_zddOrd1226CU9Z = new $hs.Thunk();
        hs_zddOrd1226CU9Z.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUz2cUZR.hscall(hs_zddOrd726CU9U, hs_zddOrd826CU9V, hs_zddOrd926CU9W, hs_zddOrd1026CU9X, hs_zddOrd1126CU9Y);
        };
        var hs_sat26CVLH = new $hs.Func(2);
        hs_sat26CVLH.evaluate = function (hs_x26CUa2, hs_y26CUa3) {
            var hs_wild26CVLI = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1226CU9Z, hs_x26CUa2, hs_y26CUa3);
            switch (hs_wild26CVLI.tag) {
            case 1:
                if (hs_x26CUa2.notEvaluated) {
                    return hs_x26CUa2.hscall();
                } else {
                    return hs_x26CUa2;
                }
            case 2:
                if (hs_y26CUa3.notEvaluated) {
                    return hs_y26CUa3.hscall();
                } else {
                    return hs_y26CUa3;
                }
            }
        };
        if (hs_sat26CVLH.notEvaluated) {
            return hs_sat26CVLH.hscall();
        } else {
            return hs_sat26CVLH;
        }
    };
    hs_zdczlze1025uvDQ.evaluate = function (hs_zddOrd726CUav, hs_zddOrd826CUaz, hs_zddOrd926CUaD, hs_zddOrd1026CUaH, hs_zddOrd1126CUaL, hs_zddOrd1226CUaP, hs_a1126CUaf, hs_b26CUan) {
        var hs_wild26CVLK = hs_a1126CUaf;
        if (hs_a1126CUaf.notEvaluated) {
            hs_wild26CVLK = hs_a1126CUaf.hscall();
        }
        var hs_a1226CUaw = hs_wild26CVLK.data[0];
        var hs_a1326CUaA = hs_wild26CVLK.data[1];
        var hs_a1426CUaE = hs_wild26CVLK.data[2];
        var hs_a1526CUaI = hs_wild26CVLK.data[3];
        var hs_a1626CUaM = hs_wild26CVLK.data[4];
        var hs_a1726CUaQ = hs_wild26CVLK.data[5];
        var hs_wild126CVLJ = hs_b26CUan;
        if (hs_b26CUan.notEvaluated) {
            hs_wild126CVLJ = hs_b26CUan.hscall();
        }
        var hs_b126CUax = hs_wild126CVLJ.data[0];
        var hs_b226CUaB = hs_wild126CVLJ.data[1];
        var hs_b326CUaF = hs_wild126CVLJ.data[2];
        var hs_b426CUaJ = hs_wild126CVLJ.data[3];
        var hs_b526CUaN = hs_wild126CVLJ.data[4];
        var hs_b626CUaR = hs_wild126CVLJ.data[5];
        var hs_wild226CVLL = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CUav, hs_a1226CUaw, hs_b126CUax);
        switch (hs_wild226CVLL.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVLM = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CUaz, hs_a1326CUaA, hs_b226CUaB);
            switch (hs_wild326CVLM.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVLN = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CUaD, hs_a1426CUaE, hs_b326CUaF);
                switch (hs_wild426CVLN.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVLO = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CUaH, hs_a1526CUaI, hs_b426CUaJ);
                    switch (hs_wild526CVLO.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVLP = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CUaL, hs_a1626CUaM, hs_b526CUaN);
                        switch (hs_wild626CVLP.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        case 2:
                            return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1226CUaP, hs_a1726CUaQ, hs_b626CUaR);
                        case 3:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczg1025uvEC.evaluate = function (hs_zddOrd726CUbh, hs_zddOrd826CUbl, hs_zddOrd926CUbp, hs_zddOrd1026CUbt, hs_zddOrd1126CUbx, hs_zddOrd1226CUbB, hs_a1126CUb1, hs_b26CUb9) {
        var hs_wild26CVLR = hs_a1126CUb1;
        if (hs_a1126CUb1.notEvaluated) {
            hs_wild26CVLR = hs_a1126CUb1.hscall();
        }
        var hs_a1226CUbi = hs_wild26CVLR.data[0];
        var hs_a1326CUbm = hs_wild26CVLR.data[1];
        var hs_a1426CUbq = hs_wild26CVLR.data[2];
        var hs_a1526CUbu = hs_wild26CVLR.data[3];
        var hs_a1626CUby = hs_wild26CVLR.data[4];
        var hs_a1726CUbC = hs_wild26CVLR.data[5];
        var hs_wild126CVLQ = hs_b26CUb9;
        if (hs_b26CUb9.notEvaluated) {
            hs_wild126CVLQ = hs_b26CUb9.hscall();
        }
        var hs_b126CUbj = hs_wild126CVLQ.data[0];
        var hs_b226CUbn = hs_wild126CVLQ.data[1];
        var hs_b326CUbr = hs_wild126CVLQ.data[2];
        var hs_b426CUbv = hs_wild126CVLQ.data[3];
        var hs_b526CUbz = hs_wild126CVLQ.data[4];
        var hs_b626CUbD = hs_wild126CVLQ.data[5];
        var hs_wild226CVLS = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CUbh, hs_a1226CUbi, hs_b126CUbj);
        switch (hs_wild226CVLS.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVLT = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CUbl, hs_a1326CUbm, hs_b226CUbn);
            switch (hs_wild326CVLT.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVLU = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CUbp, hs_a1426CUbq, hs_b326CUbr);
                switch (hs_wild426CVLU.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVLV = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CUbt, hs_a1526CUbu, hs_b426CUbv);
                    switch (hs_wild526CVLV.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVLW = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CUbx, hs_a1626CUby, hs_b526CUbz);
                        switch (hs_wild626CVLW.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd1226CUbB, hs_a1726CUbC, hs_b626CUbD);
                        case 3:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczgze1025uvFo.evaluate = function (hs_zddOrd726CUc3, hs_zddOrd826CUc7, hs_zddOrd926CUcb, hs_zddOrd1026CUcf, hs_zddOrd1126CUcj, hs_zddOrd1226CUcn, hs_a1126CUbN, hs_b26CUbV) {
        var hs_wild26CVLY = hs_a1126CUbN;
        if (hs_a1126CUbN.notEvaluated) {
            hs_wild26CVLY = hs_a1126CUbN.hscall();
        }
        var hs_a1226CUc4 = hs_wild26CVLY.data[0];
        var hs_a1326CUc8 = hs_wild26CVLY.data[1];
        var hs_a1426CUcc = hs_wild26CVLY.data[2];
        var hs_a1526CUcg = hs_wild26CVLY.data[3];
        var hs_a1626CUck = hs_wild26CVLY.data[4];
        var hs_a1726CUco = hs_wild26CVLY.data[5];
        var hs_wild126CVLX = hs_b26CUbV;
        if (hs_b26CUbV.notEvaluated) {
            hs_wild126CVLX = hs_b26CUbV.hscall();
        }
        var hs_b126CUc5 = hs_wild126CVLX.data[0];
        var hs_b226CUc9 = hs_wild126CVLX.data[1];
        var hs_b326CUcd = hs_wild126CVLX.data[2];
        var hs_b426CUch = hs_wild126CVLX.data[3];
        var hs_b526CUcl = hs_wild126CVLX.data[4];
        var hs_b626CUcp = hs_wild126CVLX.data[5];
        var hs_wild226CVLZ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CUc3, hs_a1226CUc4, hs_b126CUc5);
        switch (hs_wild226CVLZ.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVM0 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CUc7, hs_a1326CUc8, hs_b226CUc9);
            switch (hs_wild326CVM0.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVM1 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CUcb, hs_a1426CUcc, hs_b326CUcd);
                switch (hs_wild426CVM1.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVM2 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CUcf, hs_a1526CUcg, hs_b426CUch);
                    switch (hs_wild526CVM2.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVM3 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CUcj, hs_a1626CUck, hs_b526CUcl);
                        switch (hs_wild626CVM3.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd1226CUcn, hs_a1726CUco, hs_b626CUcp);
                        case 3:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczl1025uvGa.evaluate = function (hs_zddOrd726CUcP, hs_zddOrd826CUcT, hs_zddOrd926CUcX, hs_zddOrd1026CUd1, hs_zddOrd1126CUd5, hs_zddOrd1226CUd9, hs_a1126CUcz, hs_b26CUcH) {
        var hs_wild26CVM5 = hs_a1126CUcz;
        if (hs_a1126CUcz.notEvaluated) {
            hs_wild26CVM5 = hs_a1126CUcz.hscall();
        }
        var hs_a1226CUcQ = hs_wild26CVM5.data[0];
        var hs_a1326CUcU = hs_wild26CVM5.data[1];
        var hs_a1426CUcY = hs_wild26CVM5.data[2];
        var hs_a1526CUd2 = hs_wild26CVM5.data[3];
        var hs_a1626CUd6 = hs_wild26CVM5.data[4];
        var hs_a1726CUda = hs_wild26CVM5.data[5];
        var hs_wild126CVM4 = hs_b26CUcH;
        if (hs_b26CUcH.notEvaluated) {
            hs_wild126CVM4 = hs_b26CUcH.hscall();
        }
        var hs_b126CUcR = hs_wild126CVM4.data[0];
        var hs_b226CUcV = hs_wild126CVM4.data[1];
        var hs_b326CUcZ = hs_wild126CVM4.data[2];
        var hs_b426CUd3 = hs_wild126CVM4.data[3];
        var hs_b526CUd7 = hs_wild126CVM4.data[4];
        var hs_b626CUdb = hs_wild126CVM4.data[5];
        var hs_wild226CVM6 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CUcP, hs_a1226CUcQ, hs_b126CUcR);
        switch (hs_wild226CVM6.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVM7 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CUcT, hs_a1326CUcU, hs_b226CUcV);
            switch (hs_wild326CVM7.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVM8 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CUcX, hs_a1426CUcY, hs_b326CUcZ);
                switch (hs_wild426CVM8.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVM9 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CUd1, hs_a1526CUd2, hs_b426CUd3);
                    switch (hs_wild526CVM9.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVMa = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CUd5, hs_a1626CUd6, hs_b526CUd7);
                        switch (hs_wild626CVMa.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        case 2:
                            return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd1226CUd9, hs_a1726CUda, hs_b626CUdb);
                        case 3:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdccompare1025uvGW.evaluate = function (hs_zddOrd726CUdB, hs_zddOrd826CUdF, hs_zddOrd926CUdJ, hs_zddOrd1026CUdN, hs_zddOrd1126CUdR, hs_zddOrd1226CUdV, hs_a1126CUdl, hs_b26CUdt) {
        var hs_wild26CVMc = hs_a1126CUdl;
        if (hs_a1126CUdl.notEvaluated) {
            hs_wild26CVMc = hs_a1126CUdl.hscall();
        }
        var hs_a1226CUdC = hs_wild26CVMc.data[0];
        var hs_a1326CUdG = hs_wild26CVMc.data[1];
        var hs_a1426CUdK = hs_wild26CVMc.data[2];
        var hs_a1526CUdO = hs_wild26CVMc.data[3];
        var hs_a1626CUdS = hs_wild26CVMc.data[4];
        var hs_a1726CUdW = hs_wild26CVMc.data[5];
        var hs_wild126CVMb = hs_b26CUdt;
        if (hs_b26CUdt.notEvaluated) {
            hs_wild126CVMb = hs_b26CUdt.hscall();
        }
        var hs_b126CUdD = hs_wild126CVMb.data[0];
        var hs_b226CUdH = hs_wild126CVMb.data[1];
        var hs_b326CUdL = hs_wild126CVMb.data[2];
        var hs_b426CUdP = hs_wild126CVMb.data[3];
        var hs_b526CUdT = hs_wild126CVMb.data[4];
        var hs_b626CUdX = hs_wild126CVMb.data[5];
        var hs_wild226CVMd = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CUdB, hs_a1226CUdC, hs_b126CUdD);
        switch (hs_wild226CVMd.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVMe = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CUdF, hs_a1326CUdG, hs_b226CUdH);
            switch (hs_wild326CVMe.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVMf = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CUdJ, hs_a1426CUdK, hs_b326CUdL);
                switch (hs_wild426CVMf.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVMg = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CUdN, hs_a1526CUdO, hs_b426CUdP);
                    switch (hs_wild526CVMg.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVMh = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CUdR, hs_a1626CUdS, hs_b526CUdT);
                        switch (hs_wild626CVMh.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CUdV, hs_a1726CUdW, hs_b626CUdX);
                        case 3:
                            var $res = new $hs.Data(3);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(3);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(3);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(3);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczdp1Ord525uvHI.evaluate = function (hs_zddOrd726CUe5, hs_zddOrd826CUe7, hs_zddOrd926CUe9, hs_zddOrd1026CUeb, hs_zddOrd1126CUed, hs_zddOrd1226CUef) {
        var hs_sat26CVMj = new $hs.Thunk();
        hs_sat26CVMj.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1226CUef);
        };
        var hs_sat26CVMk = new $hs.Thunk();
        hs_sat26CVMk.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1126CUed);
        };
        var hs_sat26CVMl = new $hs.Thunk();
        hs_sat26CVMl.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1026CUeb);
        };
        var hs_sat26CVMm = new $hs.Thunk();
        hs_sat26CVMm.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd926CUe9);
        };
        var hs_sat26CVMn = new $hs.Thunk();
        hs_sat26CVMn.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd826CUe7);
        };
        var hs_sat26CVMi = new $hs.Thunk();
        hs_sat26CVMi.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd726CUe5);
        };
        return $hs.modules.GHCziClasses.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_sat26CVMi, hs_sat26CVMn, hs_sat26CVMm, hs_sat26CVMl, hs_sat26CVMk, hs_sat26CVMj);
    };
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddOrd726CUep, hs_zddOrd826CUeq, hs_zddOrd926CUer, hs_zddOrd1026CUes, hs_zddOrd1126CUet, hs_zddOrd1226CUeu) {
        var hs_sat26CVMp = new $hs.Thunk();
        hs_sat26CVMp.evaluateOnce = function () {
            return hs_zdcmin1225uvI1.hscall(hs_zddOrd726CUep, hs_zddOrd826CUeq, hs_zddOrd926CUer, hs_zddOrd1026CUes, hs_zddOrd1126CUet, hs_zddOrd1226CUeu);
        };
        var hs_sat26CVMq = new $hs.Thunk();
        hs_sat26CVMq.evaluateOnce = function () {
            return hs_zdcmax1225uvI2.hscall(hs_zddOrd726CUep, hs_zddOrd826CUeq, hs_zddOrd926CUer, hs_zddOrd1026CUes, hs_zddOrd1126CUet, hs_zddOrd1226CUeu);
        };
        var hs_sat26CVMr = new $hs.Func(2);
        hs_sat26CVMr.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczlze1025uvDQ.hscall(hs_zddOrd726CUep, hs_zddOrd826CUeq, hs_zddOrd926CUer, hs_zddOrd1026CUes, hs_zddOrd1126CUet, hs_zddOrd1226CUeu, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVMs = new $hs.Func(2);
        hs_sat26CVMs.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczg1025uvEC.hscall(hs_zddOrd726CUep, hs_zddOrd826CUeq, hs_zddOrd926CUer, hs_zddOrd1026CUes, hs_zddOrd1126CUet, hs_zddOrd1226CUeu, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVMt = new $hs.Func(2);
        hs_sat26CVMt.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczgze1025uvFo.hscall(hs_zddOrd726CUep, hs_zddOrd826CUeq, hs_zddOrd926CUer, hs_zddOrd1026CUes, hs_zddOrd1126CUet, hs_zddOrd1226CUeu, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVMu = new $hs.Func(2);
        hs_sat26CVMu.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczl1025uvGa.hscall(hs_zddOrd726CUep, hs_zddOrd826CUeq, hs_zddOrd926CUer, hs_zddOrd1026CUes, hs_zddOrd1126CUet, hs_zddOrd1226CUeu, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVMv = new $hs.Func(2);
        hs_sat26CVMv.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdccompare1025uvGW.hscall(hs_zddOrd726CUep, hs_zddOrd826CUeq, hs_zddOrd926CUer, hs_zddOrd1026CUes, hs_zddOrd1126CUet, hs_zddOrd1226CUeu, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVMo = new $hs.Thunk();
        hs_sat26CVMo.evaluateOnce = function () {
            return hs_zdczdp1Ord525uvHI.hscall(hs_zddOrd726CUep, hs_zddOrd826CUeq, hs_zddOrd926CUer, hs_zddOrd1026CUes, hs_zddOrd1126CUet, hs_zddOrd1226CUeu);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CVMo, hs_sat26CVMv, hs_sat26CVMu, hs_sat26CVMt, hs_sat26CVMs, hs_sat26CVMr, hs_sat26CVMq, hs_sat26CVMp];
        return $res;
    };
    hs_zdcmin1225uvI1.evaluate = function (hs_zddOrd726CUeK, hs_zddOrd826CUeL, hs_zddOrd926CUeM, hs_zddOrd1026CUeN, hs_zddOrd1126CUeO, hs_zddOrd1226CUeP) {
        var hs_zddOrd1326CUeQ = new $hs.Thunk();
        hs_zddOrd1326CUeQ.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddOrd726CUeK, hs_zddOrd826CUeL, hs_zddOrd926CUeM, hs_zddOrd1026CUeN, hs_zddOrd1126CUeO, hs_zddOrd1226CUeP);
        };
        var hs_sat26CVMw = new $hs.Func(2);
        hs_sat26CVMw.evaluate = function (hs_x26CUeT, hs_y26CUeU) {
            var hs_wild26CVMx = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1326CUeQ, hs_x26CUeT, hs_y26CUeU);
            switch (hs_wild26CVMx.tag) {
            case 1:
                if (hs_y26CUeU.notEvaluated) {
                    return hs_y26CUeU.hscall();
                } else {
                    return hs_y26CUeU;
                }
            case 2:
                if (hs_x26CUeT.notEvaluated) {
                    return hs_x26CUeT.hscall();
                } else {
                    return hs_x26CUeT;
                }
            }
        };
        if (hs_sat26CVMw.notEvaluated) {
            return hs_sat26CVMw.hscall();
        } else {
            return hs_sat26CVMw;
        }
    };
    hs_zdcmax1225uvI2.evaluate = function (hs_zddOrd726CUf4, hs_zddOrd826CUf5, hs_zddOrd926CUf6, hs_zddOrd1026CUf7, hs_zddOrd1126CUf8, hs_zddOrd1226CUf9) {
        var hs_zddOrd1326CUfa = new $hs.Thunk();
        hs_zddOrd1326CUfa.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddOrd726CUf4, hs_zddOrd826CUf5, hs_zddOrd926CUf6, hs_zddOrd1026CUf7, hs_zddOrd1126CUf8, hs_zddOrd1226CUf9);
        };
        var hs_sat26CVMy = new $hs.Func(2);
        hs_sat26CVMy.evaluate = function (hs_x26CUfd, hs_y26CUfe) {
            var hs_wild26CVMz = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1326CUfa, hs_x26CUfd, hs_y26CUfe);
            switch (hs_wild26CVMz.tag) {
            case 1:
                if (hs_x26CUfd.notEvaluated) {
                    return hs_x26CUfd.hscall();
                } else {
                    return hs_x26CUfd;
                }
            case 2:
                if (hs_y26CUfe.notEvaluated) {
                    return hs_y26CUfe.hscall();
                } else {
                    return hs_y26CUfe;
                }
            }
        };
        if (hs_sat26CVMy.notEvaluated) {
            return hs_sat26CVMy.hscall();
        } else {
            return hs_sat26CVMy;
        }
    };
    hs_zdczlze1125uvJ1.evaluate = function (hs_zddOrd726CUfJ, hs_zddOrd826CUfN, hs_zddOrd926CUfR, hs_zddOrd1026CUfV, hs_zddOrd1126CUfZ, hs_zddOrd1226CUg3, hs_zddOrd1326CUg7, hs_a1126CUfr, hs_b26CUfA) {
        var hs_wild26CVMB = hs_a1126CUfr;
        if (hs_a1126CUfr.notEvaluated) {
            hs_wild26CVMB = hs_a1126CUfr.hscall();
        }
        var hs_a1226CUfK = hs_wild26CVMB.data[0];
        var hs_a1326CUfO = hs_wild26CVMB.data[1];
        var hs_a1426CUfS = hs_wild26CVMB.data[2];
        var hs_a1526CUfW = hs_wild26CVMB.data[3];
        var hs_a1626CUg0 = hs_wild26CVMB.data[4];
        var hs_a1726CUg4 = hs_wild26CVMB.data[5];
        var hs_a1826CUg8 = hs_wild26CVMB.data[6];
        var hs_wild126CVMA = hs_b26CUfA;
        if (hs_b26CUfA.notEvaluated) {
            hs_wild126CVMA = hs_b26CUfA.hscall();
        }
        var hs_b126CUfL = hs_wild126CVMA.data[0];
        var hs_b226CUfP = hs_wild126CVMA.data[1];
        var hs_b326CUfT = hs_wild126CVMA.data[2];
        var hs_b426CUfX = hs_wild126CVMA.data[3];
        var hs_b526CUg1 = hs_wild126CVMA.data[4];
        var hs_b626CUg5 = hs_wild126CVMA.data[5];
        var hs_b726CUg9 = hs_wild126CVMA.data[6];
        var hs_wild226CVMC = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CUfJ, hs_a1226CUfK, hs_b126CUfL);
        switch (hs_wild226CVMC.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVMD = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CUfN, hs_a1326CUfO, hs_b226CUfP);
            switch (hs_wild326CVMD.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVME = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CUfR, hs_a1426CUfS, hs_b326CUfT);
                switch (hs_wild426CVME.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVMF = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CUfV, hs_a1526CUfW, hs_b426CUfX);
                    switch (hs_wild526CVMF.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVMG = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CUfZ, hs_a1626CUg0, hs_b526CUg1);
                        switch (hs_wild626CVMG.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVMH = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CUg3, hs_a1726CUg4, hs_b626CUg5);
                            switch (hs_wild726CVMH.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            case 2:
                                return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1326CUg7, hs_a1826CUg8, hs_b726CUg9);
                            case 3:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            }
                        case 3:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczg1125uvJU.evaluate = function (hs_zddOrd726CUgC, hs_zddOrd826CUgG, hs_zddOrd926CUgK, hs_zddOrd1026CUgO, hs_zddOrd1126CUgS, hs_zddOrd1226CUgW, hs_zddOrd1326CUh0, hs_a1126CUgk, hs_b26CUgt) {
        var hs_wild26CVMJ = hs_a1126CUgk;
        if (hs_a1126CUgk.notEvaluated) {
            hs_wild26CVMJ = hs_a1126CUgk.hscall();
        }
        var hs_a1226CUgD = hs_wild26CVMJ.data[0];
        var hs_a1326CUgH = hs_wild26CVMJ.data[1];
        var hs_a1426CUgL = hs_wild26CVMJ.data[2];
        var hs_a1526CUgP = hs_wild26CVMJ.data[3];
        var hs_a1626CUgT = hs_wild26CVMJ.data[4];
        var hs_a1726CUgX = hs_wild26CVMJ.data[5];
        var hs_a1826CUh1 = hs_wild26CVMJ.data[6];
        var hs_wild126CVMI = hs_b26CUgt;
        if (hs_b26CUgt.notEvaluated) {
            hs_wild126CVMI = hs_b26CUgt.hscall();
        }
        var hs_b126CUgE = hs_wild126CVMI.data[0];
        var hs_b226CUgI = hs_wild126CVMI.data[1];
        var hs_b326CUgM = hs_wild126CVMI.data[2];
        var hs_b426CUgQ = hs_wild126CVMI.data[3];
        var hs_b526CUgU = hs_wild126CVMI.data[4];
        var hs_b626CUgY = hs_wild126CVMI.data[5];
        var hs_b726CUh2 = hs_wild126CVMI.data[6];
        var hs_wild226CVMK = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CUgC, hs_a1226CUgD, hs_b126CUgE);
        switch (hs_wild226CVMK.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVML = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CUgG, hs_a1326CUgH, hs_b226CUgI);
            switch (hs_wild326CVML.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVMM = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CUgK, hs_a1426CUgL, hs_b326CUgM);
                switch (hs_wild426CVMM.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVMN = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CUgO, hs_a1526CUgP, hs_b426CUgQ);
                    switch (hs_wild526CVMN.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVMO = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CUgS, hs_a1626CUgT, hs_b526CUgU);
                        switch (hs_wild626CVMO.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVMP = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CUgW, hs_a1726CUgX, hs_b626CUgY);
                            switch (hs_wild726CVMP.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd1326CUh0, hs_a1826CUh1, hs_b726CUh2);
                            case 3:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            }
                        case 3:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczgze1125uvKN.evaluate = function (hs_zddOrd726CUhv, hs_zddOrd826CUhz, hs_zddOrd926CUhD, hs_zddOrd1026CUhH, hs_zddOrd1126CUhL, hs_zddOrd1226CUhP, hs_zddOrd1326CUhT, hs_a1126CUhd, hs_b26CUhm) {
        var hs_wild26CVMR = hs_a1126CUhd;
        if (hs_a1126CUhd.notEvaluated) {
            hs_wild26CVMR = hs_a1126CUhd.hscall();
        }
        var hs_a1226CUhw = hs_wild26CVMR.data[0];
        var hs_a1326CUhA = hs_wild26CVMR.data[1];
        var hs_a1426CUhE = hs_wild26CVMR.data[2];
        var hs_a1526CUhI = hs_wild26CVMR.data[3];
        var hs_a1626CUhM = hs_wild26CVMR.data[4];
        var hs_a1726CUhQ = hs_wild26CVMR.data[5];
        var hs_a1826CUhU = hs_wild26CVMR.data[6];
        var hs_wild126CVMQ = hs_b26CUhm;
        if (hs_b26CUhm.notEvaluated) {
            hs_wild126CVMQ = hs_b26CUhm.hscall();
        }
        var hs_b126CUhx = hs_wild126CVMQ.data[0];
        var hs_b226CUhB = hs_wild126CVMQ.data[1];
        var hs_b326CUhF = hs_wild126CVMQ.data[2];
        var hs_b426CUhJ = hs_wild126CVMQ.data[3];
        var hs_b526CUhN = hs_wild126CVMQ.data[4];
        var hs_b626CUhR = hs_wild126CVMQ.data[5];
        var hs_b726CUhV = hs_wild126CVMQ.data[6];
        var hs_wild226CVMS = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CUhv, hs_a1226CUhw, hs_b126CUhx);
        switch (hs_wild226CVMS.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVMT = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CUhz, hs_a1326CUhA, hs_b226CUhB);
            switch (hs_wild326CVMT.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVMU = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CUhD, hs_a1426CUhE, hs_b326CUhF);
                switch (hs_wild426CVMU.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVMV = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CUhH, hs_a1526CUhI, hs_b426CUhJ);
                    switch (hs_wild526CVMV.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVMW = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CUhL, hs_a1626CUhM, hs_b526CUhN);
                        switch (hs_wild626CVMW.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVMX = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CUhP, hs_a1726CUhQ, hs_b626CUhR);
                            switch (hs_wild726CVMX.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd1326CUhT, hs_a1826CUhU, hs_b726CUhV);
                            case 3:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            }
                        case 3:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczl1125uvLG.evaluate = function (hs_zddOrd726CUio, hs_zddOrd826CUis, hs_zddOrd926CUiw, hs_zddOrd1026CUiA, hs_zddOrd1126CUiE, hs_zddOrd1226CUiI, hs_zddOrd1326CUiM, hs_a1126CUi6, hs_b26CUif) {
        var hs_wild26CVMZ = hs_a1126CUi6;
        if (hs_a1126CUi6.notEvaluated) {
            hs_wild26CVMZ = hs_a1126CUi6.hscall();
        }
        var hs_a1226CUip = hs_wild26CVMZ.data[0];
        var hs_a1326CUit = hs_wild26CVMZ.data[1];
        var hs_a1426CUix = hs_wild26CVMZ.data[2];
        var hs_a1526CUiB = hs_wild26CVMZ.data[3];
        var hs_a1626CUiF = hs_wild26CVMZ.data[4];
        var hs_a1726CUiJ = hs_wild26CVMZ.data[5];
        var hs_a1826CUiN = hs_wild26CVMZ.data[6];
        var hs_wild126CVMY = hs_b26CUif;
        if (hs_b26CUif.notEvaluated) {
            hs_wild126CVMY = hs_b26CUif.hscall();
        }
        var hs_b126CUiq = hs_wild126CVMY.data[0];
        var hs_b226CUiu = hs_wild126CVMY.data[1];
        var hs_b326CUiy = hs_wild126CVMY.data[2];
        var hs_b426CUiC = hs_wild126CVMY.data[3];
        var hs_b526CUiG = hs_wild126CVMY.data[4];
        var hs_b626CUiK = hs_wild126CVMY.data[5];
        var hs_b726CUiO = hs_wild126CVMY.data[6];
        var hs_wild226CVN0 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CUio, hs_a1226CUip, hs_b126CUiq);
        switch (hs_wild226CVN0.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVN1 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CUis, hs_a1326CUit, hs_b226CUiu);
            switch (hs_wild326CVN1.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVN2 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CUiw, hs_a1426CUix, hs_b326CUiy);
                switch (hs_wild426CVN2.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVN3 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CUiA, hs_a1526CUiB, hs_b426CUiC);
                    switch (hs_wild526CVN3.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVN4 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CUiE, hs_a1626CUiF, hs_b526CUiG);
                        switch (hs_wild626CVN4.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVN5 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CUiI, hs_a1726CUiJ, hs_b626CUiK);
                            switch (hs_wild726CVN5.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            case 2:
                                return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd1326CUiM, hs_a1826CUiN, hs_b726CUiO);
                            case 3:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            }
                        case 3:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdccompare1125uvMz.evaluate = function (hs_zddOrd726CUjh, hs_zddOrd826CUjl, hs_zddOrd926CUjp, hs_zddOrd1026CUjt, hs_zddOrd1126CUjx, hs_zddOrd1226CUjB, hs_zddOrd1326CUjF, hs_a1126CUiZ, hs_b26CUj8) {
        var hs_wild26CVN7 = hs_a1126CUiZ;
        if (hs_a1126CUiZ.notEvaluated) {
            hs_wild26CVN7 = hs_a1126CUiZ.hscall();
        }
        var hs_a1226CUji = hs_wild26CVN7.data[0];
        var hs_a1326CUjm = hs_wild26CVN7.data[1];
        var hs_a1426CUjq = hs_wild26CVN7.data[2];
        var hs_a1526CUju = hs_wild26CVN7.data[3];
        var hs_a1626CUjy = hs_wild26CVN7.data[4];
        var hs_a1726CUjC = hs_wild26CVN7.data[5];
        var hs_a1826CUjG = hs_wild26CVN7.data[6];
        var hs_wild126CVN6 = hs_b26CUj8;
        if (hs_b26CUj8.notEvaluated) {
            hs_wild126CVN6 = hs_b26CUj8.hscall();
        }
        var hs_b126CUjj = hs_wild126CVN6.data[0];
        var hs_b226CUjn = hs_wild126CVN6.data[1];
        var hs_b326CUjr = hs_wild126CVN6.data[2];
        var hs_b426CUjv = hs_wild126CVN6.data[3];
        var hs_b526CUjz = hs_wild126CVN6.data[4];
        var hs_b626CUjD = hs_wild126CVN6.data[5];
        var hs_b726CUjH = hs_wild126CVN6.data[6];
        var hs_wild226CVN8 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CUjh, hs_a1226CUji, hs_b126CUjj);
        switch (hs_wild226CVN8.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVN9 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CUjl, hs_a1326CUjm, hs_b226CUjn);
            switch (hs_wild326CVN9.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVNa = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CUjp, hs_a1426CUjq, hs_b326CUjr);
                switch (hs_wild426CVNa.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVNb = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CUjt, hs_a1526CUju, hs_b426CUjv);
                    switch (hs_wild526CVNb.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVNc = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CUjx, hs_a1626CUjy, hs_b526CUjz);
                        switch (hs_wild626CVNc.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVNd = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CUjB, hs_a1726CUjC, hs_b626CUjD);
                            switch (hs_wild726CVNd.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326CUjF, hs_a1826CUjG, hs_b726CUjH);
                            case 3:
                                var $res = new $hs.Data(3);
                                $res.data = [];
                                return $res;
                            }
                        case 3:
                            var $res = new $hs.Data(3);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(3);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(3);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(3);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczdp1Ord625uvNs.evaluate = function (hs_zddOrd726CUjQ, hs_zddOrd826CUjS, hs_zddOrd926CUjU, hs_zddOrd1026CUjW, hs_zddOrd1126CUjY, hs_zddOrd1226CUk0, hs_zddOrd1326CUk2) {
        var hs_sat26CVNf = new $hs.Thunk();
        hs_sat26CVNf.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1326CUk2);
        };
        var hs_sat26CVNg = new $hs.Thunk();
        hs_sat26CVNg.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1226CUk0);
        };
        var hs_sat26CVNh = new $hs.Thunk();
        hs_sat26CVNh.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1126CUjY);
        };
        var hs_sat26CVNi = new $hs.Thunk();
        hs_sat26CVNi.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1026CUjW);
        };
        var hs_sat26CVNj = new $hs.Thunk();
        hs_sat26CVNj.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd926CUjU);
        };
        var hs_sat26CVNk = new $hs.Thunk();
        hs_sat26CVNk.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd826CUjS);
        };
        var hs_sat26CVNe = new $hs.Thunk();
        hs_sat26CVNe.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd726CUjQ);
        };
        return $hs.modules.GHCziClasses.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_sat26CVNe, hs_sat26CVNk, hs_sat26CVNj, hs_sat26CVNi, hs_sat26CVNh, hs_sat26CVNg, hs_sat26CVNf);
    };
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddOrd726CUkd, hs_zddOrd826CUke, hs_zddOrd926CUkf, hs_zddOrd1026CUkg, hs_zddOrd1126CUkh, hs_zddOrd1226CUki, hs_zddOrd1326CUkj) {
        var hs_sat26CVNm = new $hs.Thunk();
        hs_sat26CVNm.evaluateOnce = function () {
            return hs_zdcmin1325uvNO.hscall(hs_zddOrd726CUkd, hs_zddOrd826CUke, hs_zddOrd926CUkf, hs_zddOrd1026CUkg, hs_zddOrd1126CUkh, hs_zddOrd1226CUki, hs_zddOrd1326CUkj);
        };
        var hs_sat26CVNn = new $hs.Thunk();
        hs_sat26CVNn.evaluateOnce = function () {
            return hs_zdcmax1325uvNP.hscall(hs_zddOrd726CUkd, hs_zddOrd826CUke, hs_zddOrd926CUkf, hs_zddOrd1026CUkg, hs_zddOrd1126CUkh, hs_zddOrd1226CUki, hs_zddOrd1326CUkj);
        };
        var hs_sat26CVNo = new $hs.Func(2);
        hs_sat26CVNo.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczlze1125uvJ1.hscall(hs_zddOrd726CUkd, hs_zddOrd826CUke, hs_zddOrd926CUkf, hs_zddOrd1026CUkg, hs_zddOrd1126CUkh, hs_zddOrd1226CUki, hs_zddOrd1326CUkj, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVNp = new $hs.Func(2);
        hs_sat26CVNp.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczg1125uvJU.hscall(hs_zddOrd726CUkd, hs_zddOrd826CUke, hs_zddOrd926CUkf, hs_zddOrd1026CUkg, hs_zddOrd1126CUkh, hs_zddOrd1226CUki, hs_zddOrd1326CUkj, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVNq = new $hs.Func(2);
        hs_sat26CVNq.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczgze1125uvKN.hscall(hs_zddOrd726CUkd, hs_zddOrd826CUke, hs_zddOrd926CUkf, hs_zddOrd1026CUkg, hs_zddOrd1126CUkh, hs_zddOrd1226CUki, hs_zddOrd1326CUkj, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVNr = new $hs.Func(2);
        hs_sat26CVNr.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczl1125uvLG.hscall(hs_zddOrd726CUkd, hs_zddOrd826CUke, hs_zddOrd926CUkf, hs_zddOrd1026CUkg, hs_zddOrd1126CUkh, hs_zddOrd1226CUki, hs_zddOrd1326CUkj, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVNs = new $hs.Func(2);
        hs_sat26CVNs.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdccompare1125uvMz.hscall(hs_zddOrd726CUkd, hs_zddOrd826CUke, hs_zddOrd926CUkf, hs_zddOrd1026CUkg, hs_zddOrd1126CUkh, hs_zddOrd1226CUki, hs_zddOrd1326CUkj, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVNl = new $hs.Thunk();
        hs_sat26CVNl.evaluateOnce = function () {
            return hs_zdczdp1Ord625uvNs.hscall(hs_zddOrd726CUkd, hs_zddOrd826CUke, hs_zddOrd926CUkf, hs_zddOrd1026CUkg, hs_zddOrd1126CUkh, hs_zddOrd1226CUki, hs_zddOrd1326CUkj);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CVNl, hs_sat26CVNs, hs_sat26CVNr, hs_sat26CVNq, hs_sat26CVNp, hs_sat26CVNo, hs_sat26CVNn, hs_sat26CVNm];
        return $res;
    };
    hs_zdcmin1325uvNO.evaluate = function (hs_zddOrd726CUkA, hs_zddOrd826CUkB, hs_zddOrd926CUkC, hs_zddOrd1026CUkD, hs_zddOrd1126CUkE, hs_zddOrd1226CUkF, hs_zddOrd1326CUkG) {
        var hs_zddOrd1426CUkH = new $hs.Thunk();
        hs_zddOrd1426CUkH.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddOrd726CUkA, hs_zddOrd826CUkB, hs_zddOrd926CUkC, hs_zddOrd1026CUkD, hs_zddOrd1126CUkE, hs_zddOrd1226CUkF, hs_zddOrd1326CUkG);
        };
        var hs_sat26CVNt = new $hs.Func(2);
        hs_sat26CVNt.evaluate = function (hs_x26CUkK, hs_y26CUkL) {
            var hs_wild26CVNu = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1426CUkH, hs_x26CUkK, hs_y26CUkL);
            switch (hs_wild26CVNu.tag) {
            case 1:
                if (hs_y26CUkL.notEvaluated) {
                    return hs_y26CUkL.hscall();
                } else {
                    return hs_y26CUkL;
                }
            case 2:
                if (hs_x26CUkK.notEvaluated) {
                    return hs_x26CUkK.hscall();
                } else {
                    return hs_x26CUkK;
                }
            }
        };
        if (hs_sat26CVNt.notEvaluated) {
            return hs_sat26CVNt.hscall();
        } else {
            return hs_sat26CVNt;
        }
    };
    hs_zdcmax1325uvNP.evaluate = function (hs_zddOrd726CUkW, hs_zddOrd826CUkX, hs_zddOrd926CUkY, hs_zddOrd1026CUkZ, hs_zddOrd1126CUl0, hs_zddOrd1226CUl1, hs_zddOrd1326CUl2) {
        var hs_zddOrd1426CUl3 = new $hs.Thunk();
        hs_zddOrd1426CUl3.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddOrd726CUkW, hs_zddOrd826CUkX, hs_zddOrd926CUkY, hs_zddOrd1026CUkZ, hs_zddOrd1126CUl0, hs_zddOrd1226CUl1, hs_zddOrd1326CUl2);
        };
        var hs_sat26CVNv = new $hs.Func(2);
        hs_sat26CVNv.evaluate = function (hs_x26CUl6, hs_y26CUl7) {
            var hs_wild26CVNw = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1426CUl3, hs_x26CUl6, hs_y26CUl7);
            switch (hs_wild26CVNw.tag) {
            case 1:
                if (hs_x26CUl6.notEvaluated) {
                    return hs_x26CUl6.hscall();
                } else {
                    return hs_x26CUl6;
                }
            case 2:
                if (hs_y26CUl7.notEvaluated) {
                    return hs_y26CUl7.hscall();
                } else {
                    return hs_y26CUl7;
                }
            }
        };
        if (hs_sat26CVNv.notEvaluated) {
            return hs_sat26CVNv.hscall();
        } else {
            return hs_sat26CVNv;
        }
    };
    hs_zdczlze1225uvOU.evaluate = function (hs_zddOrd726CUlF, hs_zddOrd826CUlJ, hs_zddOrd926CUlN, hs_zddOrd1026CUlR, hs_zddOrd1126CUlV, hs_zddOrd1226CUlZ, hs_zddOrd1326CUm3, hs_zddOrd1426CUm7, hs_a1126CUll, hs_b26CUlv) {
        var hs_wild26CVNy = hs_a1126CUll;
        if (hs_a1126CUll.notEvaluated) {
            hs_wild26CVNy = hs_a1126CUll.hscall();
        }
        var hs_a1226CUlG = hs_wild26CVNy.data[0];
        var hs_a1326CUlK = hs_wild26CVNy.data[1];
        var hs_a1426CUlO = hs_wild26CVNy.data[2];
        var hs_a1526CUlS = hs_wild26CVNy.data[3];
        var hs_a1626CUlW = hs_wild26CVNy.data[4];
        var hs_a1726CUm0 = hs_wild26CVNy.data[5];
        var hs_a1826CUm4 = hs_wild26CVNy.data[6];
        var hs_a1926CUm8 = hs_wild26CVNy.data[7];
        var hs_wild126CVNx = hs_b26CUlv;
        if (hs_b26CUlv.notEvaluated) {
            hs_wild126CVNx = hs_b26CUlv.hscall();
        }
        var hs_b126CUlH = hs_wild126CVNx.data[0];
        var hs_b226CUlL = hs_wild126CVNx.data[1];
        var hs_b326CUlP = hs_wild126CVNx.data[2];
        var hs_b426CUlT = hs_wild126CVNx.data[3];
        var hs_b526CUlX = hs_wild126CVNx.data[4];
        var hs_b626CUm1 = hs_wild126CVNx.data[5];
        var hs_b726CUm5 = hs_wild126CVNx.data[6];
        var hs_b826CUm9 = hs_wild126CVNx.data[7];
        var hs_wild226CVNz = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CUlF, hs_a1226CUlG, hs_b126CUlH);
        switch (hs_wild226CVNz.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVNA = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CUlJ, hs_a1326CUlK, hs_b226CUlL);
            switch (hs_wild326CVNA.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVNB = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CUlN, hs_a1426CUlO, hs_b326CUlP);
                switch (hs_wild426CVNB.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVNC = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CUlR, hs_a1526CUlS, hs_b426CUlT);
                    switch (hs_wild526CVNC.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVND = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CUlV, hs_a1626CUlW, hs_b526CUlX);
                        switch (hs_wild626CVND.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVNE = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CUlZ, hs_a1726CUm0, hs_b626CUm1);
                            switch (hs_wild726CVNE.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVNF = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326CUm3, hs_a1826CUm4, hs_b726CUm5);
                                switch (hs_wild826CVNF.tag) {
                                case 1:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1426CUm7, hs_a1926CUm8, hs_b826CUm9);
                                case 3:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                }
                            case 3:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            }
                        case 3:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczg1225uvPU.evaluate = function (hs_zddOrd726CUmF, hs_zddOrd826CUmJ, hs_zddOrd926CUmN, hs_zddOrd1026CUmR, hs_zddOrd1126CUmV, hs_zddOrd1226CUmZ, hs_zddOrd1326CUn3, hs_zddOrd1426CUn7, hs_a1126CUml, hs_b26CUmv) {
        var hs_wild26CVNH = hs_a1126CUml;
        if (hs_a1126CUml.notEvaluated) {
            hs_wild26CVNH = hs_a1126CUml.hscall();
        }
        var hs_a1226CUmG = hs_wild26CVNH.data[0];
        var hs_a1326CUmK = hs_wild26CVNH.data[1];
        var hs_a1426CUmO = hs_wild26CVNH.data[2];
        var hs_a1526CUmS = hs_wild26CVNH.data[3];
        var hs_a1626CUmW = hs_wild26CVNH.data[4];
        var hs_a1726CUn0 = hs_wild26CVNH.data[5];
        var hs_a1826CUn4 = hs_wild26CVNH.data[6];
        var hs_a1926CUn8 = hs_wild26CVNH.data[7];
        var hs_wild126CVNG = hs_b26CUmv;
        if (hs_b26CUmv.notEvaluated) {
            hs_wild126CVNG = hs_b26CUmv.hscall();
        }
        var hs_b126CUmH = hs_wild126CVNG.data[0];
        var hs_b226CUmL = hs_wild126CVNG.data[1];
        var hs_b326CUmP = hs_wild126CVNG.data[2];
        var hs_b426CUmT = hs_wild126CVNG.data[3];
        var hs_b526CUmX = hs_wild126CVNG.data[4];
        var hs_b626CUn1 = hs_wild126CVNG.data[5];
        var hs_b726CUn5 = hs_wild126CVNG.data[6];
        var hs_b826CUn9 = hs_wild126CVNG.data[7];
        var hs_wild226CVNI = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CUmF, hs_a1226CUmG, hs_b126CUmH);
        switch (hs_wild226CVNI.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVNJ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CUmJ, hs_a1326CUmK, hs_b226CUmL);
            switch (hs_wild326CVNJ.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVNK = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CUmN, hs_a1426CUmO, hs_b326CUmP);
                switch (hs_wild426CVNK.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVNL = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CUmR, hs_a1526CUmS, hs_b426CUmT);
                    switch (hs_wild526CVNL.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVNM = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CUmV, hs_a1626CUmW, hs_b526CUmX);
                        switch (hs_wild626CVNM.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVNN = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CUmZ, hs_a1726CUn0, hs_b626CUn1);
                            switch (hs_wild726CVNN.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVNO = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326CUn3, hs_a1826CUn4, hs_b726CUn5);
                                switch (hs_wild826CVNO.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd1426CUn7, hs_a1926CUn8, hs_b826CUn9);
                                case 3:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                }
                            case 3:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            }
                        case 3:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczgze1225uvQU.evaluate = function (hs_zddOrd726CUnF, hs_zddOrd826CUnJ, hs_zddOrd926CUnN, hs_zddOrd1026CUnR, hs_zddOrd1126CUnV, hs_zddOrd1226CUnZ, hs_zddOrd1326CUo3, hs_zddOrd1426CUo7, hs_a1126CUnl, hs_b26CUnv) {
        var hs_wild26CVNQ = hs_a1126CUnl;
        if (hs_a1126CUnl.notEvaluated) {
            hs_wild26CVNQ = hs_a1126CUnl.hscall();
        }
        var hs_a1226CUnG = hs_wild26CVNQ.data[0];
        var hs_a1326CUnK = hs_wild26CVNQ.data[1];
        var hs_a1426CUnO = hs_wild26CVNQ.data[2];
        var hs_a1526CUnS = hs_wild26CVNQ.data[3];
        var hs_a1626CUnW = hs_wild26CVNQ.data[4];
        var hs_a1726CUo0 = hs_wild26CVNQ.data[5];
        var hs_a1826CUo4 = hs_wild26CVNQ.data[6];
        var hs_a1926CUo8 = hs_wild26CVNQ.data[7];
        var hs_wild126CVNP = hs_b26CUnv;
        if (hs_b26CUnv.notEvaluated) {
            hs_wild126CVNP = hs_b26CUnv.hscall();
        }
        var hs_b126CUnH = hs_wild126CVNP.data[0];
        var hs_b226CUnL = hs_wild126CVNP.data[1];
        var hs_b326CUnP = hs_wild126CVNP.data[2];
        var hs_b426CUnT = hs_wild126CVNP.data[3];
        var hs_b526CUnX = hs_wild126CVNP.data[4];
        var hs_b626CUo1 = hs_wild126CVNP.data[5];
        var hs_b726CUo5 = hs_wild126CVNP.data[6];
        var hs_b826CUo9 = hs_wild126CVNP.data[7];
        var hs_wild226CVNR = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CUnF, hs_a1226CUnG, hs_b126CUnH);
        switch (hs_wild226CVNR.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVNS = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CUnJ, hs_a1326CUnK, hs_b226CUnL);
            switch (hs_wild326CVNS.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVNT = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CUnN, hs_a1426CUnO, hs_b326CUnP);
                switch (hs_wild426CVNT.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVNU = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CUnR, hs_a1526CUnS, hs_b426CUnT);
                    switch (hs_wild526CVNU.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVNV = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CUnV, hs_a1626CUnW, hs_b526CUnX);
                        switch (hs_wild626CVNV.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVNW = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CUnZ, hs_a1726CUo0, hs_b626CUo1);
                            switch (hs_wild726CVNW.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVNX = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326CUo3, hs_a1826CUo4, hs_b726CUo5);
                                switch (hs_wild826CVNX.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd1426CUo7, hs_a1926CUo8, hs_b826CUo9);
                                case 3:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                }
                            case 3:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            }
                        case 3:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczl1225uvRU.evaluate = function (hs_zddOrd726CUoF, hs_zddOrd826CUoJ, hs_zddOrd926CUoN, hs_zddOrd1026CUoR, hs_zddOrd1126CUoV, hs_zddOrd1226CUoZ, hs_zddOrd1326CUp3, hs_zddOrd1426CUp7, hs_a1126CUol, hs_b26CUov) {
        var hs_wild26CVNZ = hs_a1126CUol;
        if (hs_a1126CUol.notEvaluated) {
            hs_wild26CVNZ = hs_a1126CUol.hscall();
        }
        var hs_a1226CUoG = hs_wild26CVNZ.data[0];
        var hs_a1326CUoK = hs_wild26CVNZ.data[1];
        var hs_a1426CUoO = hs_wild26CVNZ.data[2];
        var hs_a1526CUoS = hs_wild26CVNZ.data[3];
        var hs_a1626CUoW = hs_wild26CVNZ.data[4];
        var hs_a1726CUp0 = hs_wild26CVNZ.data[5];
        var hs_a1826CUp4 = hs_wild26CVNZ.data[6];
        var hs_a1926CUp8 = hs_wild26CVNZ.data[7];
        var hs_wild126CVNY = hs_b26CUov;
        if (hs_b26CUov.notEvaluated) {
            hs_wild126CVNY = hs_b26CUov.hscall();
        }
        var hs_b126CUoH = hs_wild126CVNY.data[0];
        var hs_b226CUoL = hs_wild126CVNY.data[1];
        var hs_b326CUoP = hs_wild126CVNY.data[2];
        var hs_b426CUoT = hs_wild126CVNY.data[3];
        var hs_b526CUoX = hs_wild126CVNY.data[4];
        var hs_b626CUp1 = hs_wild126CVNY.data[5];
        var hs_b726CUp5 = hs_wild126CVNY.data[6];
        var hs_b826CUp9 = hs_wild126CVNY.data[7];
        var hs_wild226CVO0 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CUoF, hs_a1226CUoG, hs_b126CUoH);
        switch (hs_wild226CVO0.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVO1 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CUoJ, hs_a1326CUoK, hs_b226CUoL);
            switch (hs_wild326CVO1.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVO2 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CUoN, hs_a1426CUoO, hs_b326CUoP);
                switch (hs_wild426CVO2.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVO3 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CUoR, hs_a1526CUoS, hs_b426CUoT);
                    switch (hs_wild526CVO3.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVO4 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CUoV, hs_a1626CUoW, hs_b526CUoX);
                        switch (hs_wild626CVO4.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVO5 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CUoZ, hs_a1726CUp0, hs_b626CUp1);
                            switch (hs_wild726CVO5.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVO6 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326CUp3, hs_a1826CUp4, hs_b726CUp5);
                                switch (hs_wild826CVO6.tag) {
                                case 1:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd1426CUp7, hs_a1926CUp8, hs_b826CUp9);
                                case 3:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                }
                            case 3:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            }
                        case 3:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdccompare1225uvSU.evaluate = function (hs_zddOrd726CUpF, hs_zddOrd826CUpJ, hs_zddOrd926CUpN, hs_zddOrd1026CUpR, hs_zddOrd1126CUpV, hs_zddOrd1226CUpZ, hs_zddOrd1326CUq3, hs_zddOrd1426CUq7, hs_a1126CUpl, hs_b26CUpv) {
        var hs_wild26CVO8 = hs_a1126CUpl;
        if (hs_a1126CUpl.notEvaluated) {
            hs_wild26CVO8 = hs_a1126CUpl.hscall();
        }
        var hs_a1226CUpG = hs_wild26CVO8.data[0];
        var hs_a1326CUpK = hs_wild26CVO8.data[1];
        var hs_a1426CUpO = hs_wild26CVO8.data[2];
        var hs_a1526CUpS = hs_wild26CVO8.data[3];
        var hs_a1626CUpW = hs_wild26CVO8.data[4];
        var hs_a1726CUq0 = hs_wild26CVO8.data[5];
        var hs_a1826CUq4 = hs_wild26CVO8.data[6];
        var hs_a1926CUq8 = hs_wild26CVO8.data[7];
        var hs_wild126CVO7 = hs_b26CUpv;
        if (hs_b26CUpv.notEvaluated) {
            hs_wild126CVO7 = hs_b26CUpv.hscall();
        }
        var hs_b126CUpH = hs_wild126CVO7.data[0];
        var hs_b226CUpL = hs_wild126CVO7.data[1];
        var hs_b326CUpP = hs_wild126CVO7.data[2];
        var hs_b426CUpT = hs_wild126CVO7.data[3];
        var hs_b526CUpX = hs_wild126CVO7.data[4];
        var hs_b626CUq1 = hs_wild126CVO7.data[5];
        var hs_b726CUq5 = hs_wild126CVO7.data[6];
        var hs_b826CUq9 = hs_wild126CVO7.data[7];
        var hs_wild226CVO9 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CUpF, hs_a1226CUpG, hs_b126CUpH);
        switch (hs_wild226CVO9.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVOa = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CUpJ, hs_a1326CUpK, hs_b226CUpL);
            switch (hs_wild326CVOa.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVOb = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CUpN, hs_a1426CUpO, hs_b326CUpP);
                switch (hs_wild426CVOb.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVOc = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CUpR, hs_a1526CUpS, hs_b426CUpT);
                    switch (hs_wild526CVOc.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVOd = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CUpV, hs_a1626CUpW, hs_b526CUpX);
                        switch (hs_wild626CVOd.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVOe = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CUpZ, hs_a1726CUq0, hs_b626CUq1);
                            switch (hs_wild726CVOe.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVOf = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326CUq3, hs_a1826CUq4, hs_b726CUq5);
                                switch (hs_wild826CVOf.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426CUq7, hs_a1926CUq8, hs_b826CUq9);
                                case 3:
                                    var $res = new $hs.Data(3);
                                    $res.data = [];
                                    return $res;
                                }
                            case 3:
                                var $res = new $hs.Data(3);
                                $res.data = [];
                                return $res;
                            }
                        case 3:
                            var $res = new $hs.Data(3);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(3);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(3);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(3);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczdp1Ord725uvTU.evaluate = function (hs_zddOrd726CUqj, hs_zddOrd826CUql, hs_zddOrd926CUqn, hs_zddOrd1026CUqp, hs_zddOrd1126CUqr, hs_zddOrd1226CUqt, hs_zddOrd1326CUqv, hs_zddOrd1426CUqx) {
        var hs_sat26CVOh = new $hs.Thunk();
        hs_sat26CVOh.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1426CUqx);
        };
        var hs_sat26CVOi = new $hs.Thunk();
        hs_sat26CVOi.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1326CUqv);
        };
        var hs_sat26CVOj = new $hs.Thunk();
        hs_sat26CVOj.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1226CUqt);
        };
        var hs_sat26CVOk = new $hs.Thunk();
        hs_sat26CVOk.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1126CUqr);
        };
        var hs_sat26CVOl = new $hs.Thunk();
        hs_sat26CVOl.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1026CUqp);
        };
        var hs_sat26CVOm = new $hs.Thunk();
        hs_sat26CVOm.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd926CUqn);
        };
        var hs_sat26CVOn = new $hs.Thunk();
        hs_sat26CVOn.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd826CUql);
        };
        var hs_sat26CVOg = new $hs.Thunk();
        hs_sat26CVOg.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd726CUqj);
        };
        return $hs.modules.GHCziClasses.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_sat26CVOg, hs_sat26CVOn, hs_sat26CVOm, hs_sat26CVOl, hs_sat26CVOk, hs_sat26CVOj, hs_sat26CVOi, hs_sat26CVOh);
    };
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddOrd726CUqJ, hs_zddOrd826CUqK, hs_zddOrd926CUqL, hs_zddOrd1026CUqM, hs_zddOrd1126CUqN, hs_zddOrd1226CUqO, hs_zddOrd1326CUqP, hs_zddOrd1426CUqQ) {
        var hs_sat26CVOp = new $hs.Thunk();
        hs_sat26CVOp.evaluateOnce = function () {
            return hs_zdcmin1425uvUj.hscall(hs_zddOrd726CUqJ, hs_zddOrd826CUqK, hs_zddOrd926CUqL, hs_zddOrd1026CUqM, hs_zddOrd1126CUqN, hs_zddOrd1226CUqO, hs_zddOrd1326CUqP, hs_zddOrd1426CUqQ);
        };
        var hs_sat26CVOq = new $hs.Thunk();
        hs_sat26CVOq.evaluateOnce = function () {
            return hs_zdcmax1425uvUk.hscall(hs_zddOrd726CUqJ, hs_zddOrd826CUqK, hs_zddOrd926CUqL, hs_zddOrd1026CUqM, hs_zddOrd1126CUqN, hs_zddOrd1226CUqO, hs_zddOrd1326CUqP, hs_zddOrd1426CUqQ);
        };
        var hs_sat26CVOr = new $hs.Func(2);
        hs_sat26CVOr.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczlze1225uvOU.hscall(hs_zddOrd726CUqJ, hs_zddOrd826CUqK, hs_zddOrd926CUqL, hs_zddOrd1026CUqM, hs_zddOrd1126CUqN, hs_zddOrd1226CUqO, hs_zddOrd1326CUqP, hs_zddOrd1426CUqQ, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVOs = new $hs.Func(2);
        hs_sat26CVOs.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczg1225uvPU.hscall(hs_zddOrd726CUqJ, hs_zddOrd826CUqK, hs_zddOrd926CUqL, hs_zddOrd1026CUqM, hs_zddOrd1126CUqN, hs_zddOrd1226CUqO, hs_zddOrd1326CUqP, hs_zddOrd1426CUqQ, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVOt = new $hs.Func(2);
        hs_sat26CVOt.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczgze1225uvQU.hscall(hs_zddOrd726CUqJ, hs_zddOrd826CUqK, hs_zddOrd926CUqL, hs_zddOrd1026CUqM, hs_zddOrd1126CUqN, hs_zddOrd1226CUqO, hs_zddOrd1326CUqP, hs_zddOrd1426CUqQ, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVOu = new $hs.Func(2);
        hs_sat26CVOu.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczl1225uvRU.hscall(hs_zddOrd726CUqJ, hs_zddOrd826CUqK, hs_zddOrd926CUqL, hs_zddOrd1026CUqM, hs_zddOrd1126CUqN, hs_zddOrd1226CUqO, hs_zddOrd1326CUqP, hs_zddOrd1426CUqQ, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVOv = new $hs.Func(2);
        hs_sat26CVOv.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdccompare1225uvSU.hscall(hs_zddOrd726CUqJ, hs_zddOrd826CUqK, hs_zddOrd926CUqL, hs_zddOrd1026CUqM, hs_zddOrd1126CUqN, hs_zddOrd1226CUqO, hs_zddOrd1326CUqP, hs_zddOrd1426CUqQ, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVOo = new $hs.Thunk();
        hs_sat26CVOo.evaluateOnce = function () {
            return hs_zdczdp1Ord725uvTU.hscall(hs_zddOrd726CUqJ, hs_zddOrd826CUqK, hs_zddOrd926CUqL, hs_zddOrd1026CUqM, hs_zddOrd1126CUqN, hs_zddOrd1226CUqO, hs_zddOrd1326CUqP, hs_zddOrd1426CUqQ);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CVOo, hs_sat26CVOv, hs_sat26CVOu, hs_sat26CVOt, hs_sat26CVOs, hs_sat26CVOr, hs_sat26CVOq, hs_sat26CVOp];
        return $res;
    };
    hs_zdcmin1425uvUj.evaluate = function (hs_zddOrd726CUr8, hs_zddOrd826CUr9, hs_zddOrd926CUra, hs_zddOrd1026CUrb, hs_zddOrd1126CUrc, hs_zddOrd1226CUrd, hs_zddOrd1326CUre, hs_zddOrd1426CUrf) {
        var hs_zddOrd1526CUrg = new $hs.Thunk();
        hs_zddOrd1526CUrg.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddOrd726CUr8, hs_zddOrd826CUr9, hs_zddOrd926CUra, hs_zddOrd1026CUrb, hs_zddOrd1126CUrc, hs_zddOrd1226CUrd, hs_zddOrd1326CUre, hs_zddOrd1426CUrf);
        };
        var hs_sat26CVOw = new $hs.Func(2);
        hs_sat26CVOw.evaluate = function (hs_x26CUrj, hs_y26CUrk) {
            var hs_wild26CVOx = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1526CUrg, hs_x26CUrj, hs_y26CUrk);
            switch (hs_wild26CVOx.tag) {
            case 1:
                if (hs_y26CUrk.notEvaluated) {
                    return hs_y26CUrk.hscall();
                } else {
                    return hs_y26CUrk;
                }
            case 2:
                if (hs_x26CUrj.notEvaluated) {
                    return hs_x26CUrj.hscall();
                } else {
                    return hs_x26CUrj;
                }
            }
        };
        if (hs_sat26CVOw.notEvaluated) {
            return hs_sat26CVOw.hscall();
        } else {
            return hs_sat26CVOw;
        }
    };
    hs_zdcmax1425uvUk.evaluate = function (hs_zddOrd726CUrw, hs_zddOrd826CUrx, hs_zddOrd926CUry, hs_zddOrd1026CUrz, hs_zddOrd1126CUrA, hs_zddOrd1226CUrB, hs_zddOrd1326CUrC, hs_zddOrd1426CUrD) {
        var hs_zddOrd1526CUrE = new $hs.Thunk();
        hs_zddOrd1526CUrE.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddOrd726CUrw, hs_zddOrd826CUrx, hs_zddOrd926CUry, hs_zddOrd1026CUrz, hs_zddOrd1126CUrA, hs_zddOrd1226CUrB, hs_zddOrd1326CUrC, hs_zddOrd1426CUrD);
        };
        var hs_sat26CVOy = new $hs.Func(2);
        hs_sat26CVOy.evaluate = function (hs_x26CUrH, hs_y26CUrI) {
            var hs_wild26CVOz = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1526CUrE, hs_x26CUrH, hs_y26CUrI);
            switch (hs_wild26CVOz.tag) {
            case 1:
                if (hs_x26CUrH.notEvaluated) {
                    return hs_x26CUrH.hscall();
                } else {
                    return hs_x26CUrH;
                }
            case 2:
                if (hs_y26CUrI.notEvaluated) {
                    return hs_y26CUrI.hscall();
                } else {
                    return hs_y26CUrI;
                }
            }
        };
        if (hs_sat26CVOy.notEvaluated) {
            return hs_sat26CVOy.hscall();
        } else {
            return hs_sat26CVOy;
        }
    };
    hs_zdczlze1325uvVv.evaluate = function (hs_zddOrd726CUsj, hs_zddOrd826CUsn, hs_zddOrd926CUsr, hs_zddOrd1026CUsv, hs_zddOrd1126CUsz, hs_zddOrd1226CUsD, hs_zddOrd1326CUsH, hs_zddOrd1426CUsL, hs_zddOrd1526CUsP, hs_a1126CUrX, hs_b26CUs8) {
        var hs_wild26CVOB = hs_a1126CUrX;
        if (hs_a1126CUrX.notEvaluated) {
            hs_wild26CVOB = hs_a1126CUrX.hscall();
        }
        var hs_a1226CUsk = hs_wild26CVOB.data[0];
        var hs_a1326CUso = hs_wild26CVOB.data[1];
        var hs_a1426CUss = hs_wild26CVOB.data[2];
        var hs_a1526CUsw = hs_wild26CVOB.data[3];
        var hs_a1626CUsA = hs_wild26CVOB.data[4];
        var hs_a1726CUsE = hs_wild26CVOB.data[5];
        var hs_a1826CUsI = hs_wild26CVOB.data[6];
        var hs_a1926CUsM = hs_wild26CVOB.data[7];
        var hs_a2026CUsQ = hs_wild26CVOB.data[8];
        var hs_wild126CVOA = hs_b26CUs8;
        if (hs_b26CUs8.notEvaluated) {
            hs_wild126CVOA = hs_b26CUs8.hscall();
        }
        var hs_b126CUsl = hs_wild126CVOA.data[0];
        var hs_b226CUsp = hs_wild126CVOA.data[1];
        var hs_b326CUst = hs_wild126CVOA.data[2];
        var hs_b426CUsx = hs_wild126CVOA.data[3];
        var hs_b526CUsB = hs_wild126CVOA.data[4];
        var hs_b626CUsF = hs_wild126CVOA.data[5];
        var hs_b726CUsJ = hs_wild126CVOA.data[6];
        var hs_b826CUsN = hs_wild126CVOA.data[7];
        var hs_b926CUsR = hs_wild126CVOA.data[8];
        var hs_wild226CVOC = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CUsj, hs_a1226CUsk, hs_b126CUsl);
        switch (hs_wild226CVOC.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVOD = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CUsn, hs_a1326CUso, hs_b226CUsp);
            switch (hs_wild326CVOD.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVOE = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CUsr, hs_a1426CUss, hs_b326CUst);
                switch (hs_wild426CVOE.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVOF = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CUsv, hs_a1526CUsw, hs_b426CUsx);
                    switch (hs_wild526CVOF.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVOG = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CUsz, hs_a1626CUsA, hs_b526CUsB);
                        switch (hs_wild626CVOG.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVOH = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CUsD, hs_a1726CUsE, hs_b626CUsF);
                            switch (hs_wild726CVOH.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVOI = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326CUsH, hs_a1826CUsI, hs_b726CUsJ);
                                switch (hs_wild826CVOI.tag) {
                                case 1:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926CVOJ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426CUsL, hs_a1926CUsM, hs_b826CUsN);
                                    switch (hs_wild926CVOJ.tag) {
                                    case 1:
                                        var $res = new $hs.Data(2);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1526CUsP, hs_a2026CUsQ, hs_b926CUsR);
                                    case 3:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    }
                                case 3:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                }
                            case 3:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            }
                        case 3:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczg1325uvWC.evaluate = function (hs_zddOrd726CUtq, hs_zddOrd826CUtu, hs_zddOrd926CUty, hs_zddOrd1026CUtC, hs_zddOrd1126CUtG, hs_zddOrd1226CUtK, hs_zddOrd1326CUtO, hs_zddOrd1426CUtS, hs_zddOrd1526CUtW, hs_a1126CUt4, hs_b26CUtf) {
        var hs_wild26CVOL = hs_a1126CUt4;
        if (hs_a1126CUt4.notEvaluated) {
            hs_wild26CVOL = hs_a1126CUt4.hscall();
        }
        var hs_a1226CUtr = hs_wild26CVOL.data[0];
        var hs_a1326CUtv = hs_wild26CVOL.data[1];
        var hs_a1426CUtz = hs_wild26CVOL.data[2];
        var hs_a1526CUtD = hs_wild26CVOL.data[3];
        var hs_a1626CUtH = hs_wild26CVOL.data[4];
        var hs_a1726CUtL = hs_wild26CVOL.data[5];
        var hs_a1826CUtP = hs_wild26CVOL.data[6];
        var hs_a1926CUtT = hs_wild26CVOL.data[7];
        var hs_a2026CUtX = hs_wild26CVOL.data[8];
        var hs_wild126CVOK = hs_b26CUtf;
        if (hs_b26CUtf.notEvaluated) {
            hs_wild126CVOK = hs_b26CUtf.hscall();
        }
        var hs_b126CUts = hs_wild126CVOK.data[0];
        var hs_b226CUtw = hs_wild126CVOK.data[1];
        var hs_b326CUtA = hs_wild126CVOK.data[2];
        var hs_b426CUtE = hs_wild126CVOK.data[3];
        var hs_b526CUtI = hs_wild126CVOK.data[4];
        var hs_b626CUtM = hs_wild126CVOK.data[5];
        var hs_b726CUtQ = hs_wild126CVOK.data[6];
        var hs_b826CUtU = hs_wild126CVOK.data[7];
        var hs_b926CUtY = hs_wild126CVOK.data[8];
        var hs_wild226CVOM = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CUtq, hs_a1226CUtr, hs_b126CUts);
        switch (hs_wild226CVOM.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVON = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CUtu, hs_a1326CUtv, hs_b226CUtw);
            switch (hs_wild326CVON.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVOO = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CUty, hs_a1426CUtz, hs_b326CUtA);
                switch (hs_wild426CVOO.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVOP = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CUtC, hs_a1526CUtD, hs_b426CUtE);
                    switch (hs_wild526CVOP.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVOQ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CUtG, hs_a1626CUtH, hs_b526CUtI);
                        switch (hs_wild626CVOQ.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVOR = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CUtK, hs_a1726CUtL, hs_b626CUtM);
                            switch (hs_wild726CVOR.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVOS = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326CUtO, hs_a1826CUtP, hs_b726CUtQ);
                                switch (hs_wild826CVOS.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926CVOT = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426CUtS, hs_a1926CUtT, hs_b826CUtU);
                                    switch (hs_wild926CVOT.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd1526CUtW, hs_a2026CUtX, hs_b926CUtY);
                                    case 3:
                                        var $res = new $hs.Data(2);
                                        $res.data = [];
                                        return $res;
                                    }
                                case 3:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                }
                            case 3:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            }
                        case 3:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczgze1325uvXJ.evaluate = function (hs_zddOrd726CUux, hs_zddOrd826CUuB, hs_zddOrd926CUuF, hs_zddOrd1026CUuJ, hs_zddOrd1126CUuN, hs_zddOrd1226CUuR, hs_zddOrd1326CUuV, hs_zddOrd1426CUuZ, hs_zddOrd1526CUv3, hs_a1126CUub, hs_b26CUum) {
        var hs_wild26CVOV = hs_a1126CUub;
        if (hs_a1126CUub.notEvaluated) {
            hs_wild26CVOV = hs_a1126CUub.hscall();
        }
        var hs_a1226CUuy = hs_wild26CVOV.data[0];
        var hs_a1326CUuC = hs_wild26CVOV.data[1];
        var hs_a1426CUuG = hs_wild26CVOV.data[2];
        var hs_a1526CUuK = hs_wild26CVOV.data[3];
        var hs_a1626CUuO = hs_wild26CVOV.data[4];
        var hs_a1726CUuS = hs_wild26CVOV.data[5];
        var hs_a1826CUuW = hs_wild26CVOV.data[6];
        var hs_a1926CUv0 = hs_wild26CVOV.data[7];
        var hs_a2026CUv4 = hs_wild26CVOV.data[8];
        var hs_wild126CVOU = hs_b26CUum;
        if (hs_b26CUum.notEvaluated) {
            hs_wild126CVOU = hs_b26CUum.hscall();
        }
        var hs_b126CUuz = hs_wild126CVOU.data[0];
        var hs_b226CUuD = hs_wild126CVOU.data[1];
        var hs_b326CUuH = hs_wild126CVOU.data[2];
        var hs_b426CUuL = hs_wild126CVOU.data[3];
        var hs_b526CUuP = hs_wild126CVOU.data[4];
        var hs_b626CUuT = hs_wild126CVOU.data[5];
        var hs_b726CUuX = hs_wild126CVOU.data[6];
        var hs_b826CUv1 = hs_wild126CVOU.data[7];
        var hs_b926CUv5 = hs_wild126CVOU.data[8];
        var hs_wild226CVOW = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CUux, hs_a1226CUuy, hs_b126CUuz);
        switch (hs_wild226CVOW.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVOX = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CUuB, hs_a1326CUuC, hs_b226CUuD);
            switch (hs_wild326CVOX.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVOY = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CUuF, hs_a1426CUuG, hs_b326CUuH);
                switch (hs_wild426CVOY.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVOZ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CUuJ, hs_a1526CUuK, hs_b426CUuL);
                    switch (hs_wild526CVOZ.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVP0 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CUuN, hs_a1626CUuO, hs_b526CUuP);
                        switch (hs_wild626CVP0.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVP1 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CUuR, hs_a1726CUuS, hs_b626CUuT);
                            switch (hs_wild726CVP1.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVP2 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326CUuV, hs_a1826CUuW, hs_b726CUuX);
                                switch (hs_wild826CVP2.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926CVP3 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426CUuZ, hs_a1926CUv0, hs_b826CUv1);
                                    switch (hs_wild926CVP3.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd1526CUv3, hs_a2026CUv4, hs_b926CUv5);
                                    case 3:
                                        var $res = new $hs.Data(2);
                                        $res.data = [];
                                        return $res;
                                    }
                                case 3:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                }
                            case 3:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            }
                        case 3:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczl1325uvYQ.evaluate = function (hs_zddOrd726CUvE, hs_zddOrd826CUvI, hs_zddOrd926CUvM, hs_zddOrd1026CUvQ, hs_zddOrd1126CUvU, hs_zddOrd1226CUvY, hs_zddOrd1326CUw2, hs_zddOrd1426CUw6, hs_zddOrd1526CUwa, hs_a1126CUvi, hs_b26CUvt) {
        var hs_wild26CVP5 = hs_a1126CUvi;
        if (hs_a1126CUvi.notEvaluated) {
            hs_wild26CVP5 = hs_a1126CUvi.hscall();
        }
        var hs_a1226CUvF = hs_wild26CVP5.data[0];
        var hs_a1326CUvJ = hs_wild26CVP5.data[1];
        var hs_a1426CUvN = hs_wild26CVP5.data[2];
        var hs_a1526CUvR = hs_wild26CVP5.data[3];
        var hs_a1626CUvV = hs_wild26CVP5.data[4];
        var hs_a1726CUvZ = hs_wild26CVP5.data[5];
        var hs_a1826CUw3 = hs_wild26CVP5.data[6];
        var hs_a1926CUw7 = hs_wild26CVP5.data[7];
        var hs_a2026CUwb = hs_wild26CVP5.data[8];
        var hs_wild126CVP4 = hs_b26CUvt;
        if (hs_b26CUvt.notEvaluated) {
            hs_wild126CVP4 = hs_b26CUvt.hscall();
        }
        var hs_b126CUvG = hs_wild126CVP4.data[0];
        var hs_b226CUvK = hs_wild126CVP4.data[1];
        var hs_b326CUvO = hs_wild126CVP4.data[2];
        var hs_b426CUvS = hs_wild126CVP4.data[3];
        var hs_b526CUvW = hs_wild126CVP4.data[4];
        var hs_b626CUw0 = hs_wild126CVP4.data[5];
        var hs_b726CUw4 = hs_wild126CVP4.data[6];
        var hs_b826CUw8 = hs_wild126CVP4.data[7];
        var hs_b926CUwc = hs_wild126CVP4.data[8];
        var hs_wild226CVP6 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CUvE, hs_a1226CUvF, hs_b126CUvG);
        switch (hs_wild226CVP6.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVP7 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CUvI, hs_a1326CUvJ, hs_b226CUvK);
            switch (hs_wild326CVP7.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVP8 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CUvM, hs_a1426CUvN, hs_b326CUvO);
                switch (hs_wild426CVP8.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVP9 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CUvQ, hs_a1526CUvR, hs_b426CUvS);
                    switch (hs_wild526CVP9.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVPa = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CUvU, hs_a1626CUvV, hs_b526CUvW);
                        switch (hs_wild626CVPa.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVPb = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CUvY, hs_a1726CUvZ, hs_b626CUw0);
                            switch (hs_wild726CVPb.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVPc = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326CUw2, hs_a1826CUw3, hs_b726CUw4);
                                switch (hs_wild826CVPc.tag) {
                                case 1:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926CVPd = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426CUw6, hs_a1926CUw7, hs_b826CUw8);
                                    switch (hs_wild926CVPd.tag) {
                                    case 1:
                                        var $res = new $hs.Data(2);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd1526CUwa, hs_a2026CUwb, hs_b926CUwc);
                                    case 3:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    }
                                case 3:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                }
                            case 3:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            }
                        case 3:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdccompare1325uvZX.evaluate = function (hs_zddOrd726CUwL, hs_zddOrd826CUwP, hs_zddOrd926CUwT, hs_zddOrd1026CUwX, hs_zddOrd1126CUx1, hs_zddOrd1226CUx5, hs_zddOrd1326CUx9, hs_zddOrd1426CUxd, hs_zddOrd1526CUxh, hs_a1126CUwp, hs_b26CUwA) {
        var hs_wild26CVPf = hs_a1126CUwp;
        if (hs_a1126CUwp.notEvaluated) {
            hs_wild26CVPf = hs_a1126CUwp.hscall();
        }
        var hs_a1226CUwM = hs_wild26CVPf.data[0];
        var hs_a1326CUwQ = hs_wild26CVPf.data[1];
        var hs_a1426CUwU = hs_wild26CVPf.data[2];
        var hs_a1526CUwY = hs_wild26CVPf.data[3];
        var hs_a1626CUx2 = hs_wild26CVPf.data[4];
        var hs_a1726CUx6 = hs_wild26CVPf.data[5];
        var hs_a1826CUxa = hs_wild26CVPf.data[6];
        var hs_a1926CUxe = hs_wild26CVPf.data[7];
        var hs_a2026CUxi = hs_wild26CVPf.data[8];
        var hs_wild126CVPe = hs_b26CUwA;
        if (hs_b26CUwA.notEvaluated) {
            hs_wild126CVPe = hs_b26CUwA.hscall();
        }
        var hs_b126CUwN = hs_wild126CVPe.data[0];
        var hs_b226CUwR = hs_wild126CVPe.data[1];
        var hs_b326CUwV = hs_wild126CVPe.data[2];
        var hs_b426CUwZ = hs_wild126CVPe.data[3];
        var hs_b526CUx3 = hs_wild126CVPe.data[4];
        var hs_b626CUx7 = hs_wild126CVPe.data[5];
        var hs_b726CUxb = hs_wild126CVPe.data[6];
        var hs_b826CUxf = hs_wild126CVPe.data[7];
        var hs_b926CUxj = hs_wild126CVPe.data[8];
        var hs_wild226CVPg = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CUwL, hs_a1226CUwM, hs_b126CUwN);
        switch (hs_wild226CVPg.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVPh = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CUwP, hs_a1326CUwQ, hs_b226CUwR);
            switch (hs_wild326CVPh.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVPi = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CUwT, hs_a1426CUwU, hs_b326CUwV);
                switch (hs_wild426CVPi.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVPj = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CUwX, hs_a1526CUwY, hs_b426CUwZ);
                    switch (hs_wild526CVPj.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVPk = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CUx1, hs_a1626CUx2, hs_b526CUx3);
                        switch (hs_wild626CVPk.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVPl = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CUx5, hs_a1726CUx6, hs_b626CUx7);
                            switch (hs_wild726CVPl.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVPm = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326CUx9, hs_a1826CUxa, hs_b726CUxb);
                                switch (hs_wild826CVPm.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926CVPn = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426CUxd, hs_a1926CUxe, hs_b826CUxf);
                                    switch (hs_wild926CVPn.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526CUxh, hs_a2026CUxi, hs_b926CUxj);
                                    case 3:
                                        var $res = new $hs.Data(3);
                                        $res.data = [];
                                        return $res;
                                    }
                                case 3:
                                    var $res = new $hs.Data(3);
                                    $res.data = [];
                                    return $res;
                                }
                            case 3:
                                var $res = new $hs.Data(3);
                                $res.data = [];
                                return $res;
                            }
                        case 3:
                            var $res = new $hs.Data(3);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(3);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(3);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(3);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczdp1Ord825uw14.evaluate = function (hs_zddOrd726CUxu, hs_zddOrd826CUxw, hs_zddOrd926CUxy, hs_zddOrd1026CUxA, hs_zddOrd1126CUxC, hs_zddOrd1226CUxE, hs_zddOrd1326CUxG, hs_zddOrd1426CUxI, hs_zddOrd1526CUxK) {
        var hs_sat26CVPp = new $hs.Thunk();
        hs_sat26CVPp.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1526CUxK);
        };
        var hs_sat26CVPq = new $hs.Thunk();
        hs_sat26CVPq.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1426CUxI);
        };
        var hs_sat26CVPr = new $hs.Thunk();
        hs_sat26CVPr.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1326CUxG);
        };
        var hs_sat26CVPs = new $hs.Thunk();
        hs_sat26CVPs.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1226CUxE);
        };
        var hs_sat26CVPt = new $hs.Thunk();
        hs_sat26CVPt.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1126CUxC);
        };
        var hs_sat26CVPu = new $hs.Thunk();
        hs_sat26CVPu.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1026CUxA);
        };
        var hs_sat26CVPv = new $hs.Thunk();
        hs_sat26CVPv.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd926CUxy);
        };
        var hs_sat26CVPw = new $hs.Thunk();
        hs_sat26CVPw.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd826CUxw);
        };
        var hs_sat26CVPo = new $hs.Thunk();
        hs_sat26CVPo.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd726CUxu);
        };
        return $hs.modules.GHCziClasses.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_sat26CVPo, hs_sat26CVPw, hs_sat26CVPv, hs_sat26CVPu, hs_sat26CVPt, hs_sat26CVPs, hs_sat26CVPr, hs_sat26CVPq, hs_sat26CVPp);
    };
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddOrd726CUxX, hs_zddOrd826CUxY, hs_zddOrd926CUxZ, hs_zddOrd1026CUy0, hs_zddOrd1126CUy1, hs_zddOrd1226CUy2, hs_zddOrd1326CUy3, hs_zddOrd1426CUy4, hs_zddOrd1526CUy5) {
        var hs_sat26CVPy = new $hs.Thunk();
        hs_sat26CVPy.evaluateOnce = function () {
            return hs_zdcmin1525uw1w.hscall(hs_zddOrd726CUxX, hs_zddOrd826CUxY, hs_zddOrd926CUxZ, hs_zddOrd1026CUy0, hs_zddOrd1126CUy1, hs_zddOrd1226CUy2, hs_zddOrd1326CUy3, hs_zddOrd1426CUy4, hs_zddOrd1526CUy5);
        };
        var hs_sat26CVPz = new $hs.Thunk();
        hs_sat26CVPz.evaluateOnce = function () {
            return hs_zdcmax1525uw1x.hscall(hs_zddOrd726CUxX, hs_zddOrd826CUxY, hs_zddOrd926CUxZ, hs_zddOrd1026CUy0, hs_zddOrd1126CUy1, hs_zddOrd1226CUy2, hs_zddOrd1326CUy3, hs_zddOrd1426CUy4, hs_zddOrd1526CUy5);
        };
        var hs_sat26CVPA = new $hs.Func(2);
        hs_sat26CVPA.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczlze1325uvVv.hscall(hs_zddOrd726CUxX, hs_zddOrd826CUxY, hs_zddOrd926CUxZ, hs_zddOrd1026CUy0, hs_zddOrd1126CUy1, hs_zddOrd1226CUy2, hs_zddOrd1326CUy3, hs_zddOrd1426CUy4, hs_zddOrd1526CUy5, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVPB = new $hs.Func(2);
        hs_sat26CVPB.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczg1325uvWC.hscall(hs_zddOrd726CUxX, hs_zddOrd826CUxY, hs_zddOrd926CUxZ, hs_zddOrd1026CUy0, hs_zddOrd1126CUy1, hs_zddOrd1226CUy2, hs_zddOrd1326CUy3, hs_zddOrd1426CUy4, hs_zddOrd1526CUy5, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVPC = new $hs.Func(2);
        hs_sat26CVPC.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczgze1325uvXJ.hscall(hs_zddOrd726CUxX, hs_zddOrd826CUxY, hs_zddOrd926CUxZ, hs_zddOrd1026CUy0, hs_zddOrd1126CUy1, hs_zddOrd1226CUy2, hs_zddOrd1326CUy3, hs_zddOrd1426CUy4, hs_zddOrd1526CUy5, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVPD = new $hs.Func(2);
        hs_sat26CVPD.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczl1325uvYQ.hscall(hs_zddOrd726CUxX, hs_zddOrd826CUxY, hs_zddOrd926CUxZ, hs_zddOrd1026CUy0, hs_zddOrd1126CUy1, hs_zddOrd1226CUy2, hs_zddOrd1326CUy3, hs_zddOrd1426CUy4, hs_zddOrd1526CUy5, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVPE = new $hs.Func(2);
        hs_sat26CVPE.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdccompare1325uvZX.hscall(hs_zddOrd726CUxX, hs_zddOrd826CUxY, hs_zddOrd926CUxZ, hs_zddOrd1026CUy0, hs_zddOrd1126CUy1, hs_zddOrd1226CUy2, hs_zddOrd1326CUy3, hs_zddOrd1426CUy4, hs_zddOrd1526CUy5, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVPx = new $hs.Thunk();
        hs_sat26CVPx.evaluateOnce = function () {
            return hs_zdczdp1Ord825uw14.hscall(hs_zddOrd726CUxX, hs_zddOrd826CUxY, hs_zddOrd926CUxZ, hs_zddOrd1026CUy0, hs_zddOrd1126CUy1, hs_zddOrd1226CUy2, hs_zddOrd1326CUy3, hs_zddOrd1426CUy4, hs_zddOrd1526CUy5);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CVPx, hs_sat26CVPE, hs_sat26CVPD, hs_sat26CVPC, hs_sat26CVPB, hs_sat26CVPA, hs_sat26CVPz, hs_sat26CVPy];
        return $res;
    };
    hs_zdcmin1525uw1w.evaluate = function (hs_zddOrd726CUyo, hs_zddOrd826CUyp, hs_zddOrd926CUyq, hs_zddOrd1026CUyr, hs_zddOrd1126CUys, hs_zddOrd1226CUyt, hs_zddOrd1326CUyu, hs_zddOrd1426CUyv, hs_zddOrd1526CUyw) {
        var hs_zddOrd1626CUyx = new $hs.Thunk();
        hs_zddOrd1626CUyx.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddOrd726CUyo, hs_zddOrd826CUyp, hs_zddOrd926CUyq, hs_zddOrd1026CUyr, hs_zddOrd1126CUys, hs_zddOrd1226CUyt, hs_zddOrd1326CUyu, hs_zddOrd1426CUyv, hs_zddOrd1526CUyw);
        };
        var hs_sat26CVPF = new $hs.Func(2);
        hs_sat26CVPF.evaluate = function (hs_x26CUyA, hs_y26CUyB) {
            var hs_wild26CVPG = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1626CUyx, hs_x26CUyA, hs_y26CUyB);
            switch (hs_wild26CVPG.tag) {
            case 1:
                if (hs_y26CUyB.notEvaluated) {
                    return hs_y26CUyB.hscall();
                } else {
                    return hs_y26CUyB;
                }
            case 2:
                if (hs_x26CUyA.notEvaluated) {
                    return hs_x26CUyA.hscall();
                } else {
                    return hs_x26CUyA;
                }
            }
        };
        if (hs_sat26CVPF.notEvaluated) {
            return hs_sat26CVPF.hscall();
        } else {
            return hs_sat26CVPF;
        }
    };
    hs_zdcmax1525uw1x.evaluate = function (hs_zddOrd726CUyO, hs_zddOrd826CUyP, hs_zddOrd926CUyQ, hs_zddOrd1026CUyR, hs_zddOrd1126CUyS, hs_zddOrd1226CUyT, hs_zddOrd1326CUyU, hs_zddOrd1426CUyV, hs_zddOrd1526CUyW) {
        var hs_zddOrd1626CUyX = new $hs.Thunk();
        hs_zddOrd1626CUyX.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddOrd726CUyO, hs_zddOrd826CUyP, hs_zddOrd926CUyQ, hs_zddOrd1026CUyR, hs_zddOrd1126CUyS, hs_zddOrd1226CUyT, hs_zddOrd1326CUyU, hs_zddOrd1426CUyV, hs_zddOrd1526CUyW);
        };
        var hs_sat26CVPH = new $hs.Func(2);
        hs_sat26CVPH.evaluate = function (hs_x26CUz0, hs_y26CUz1) {
            var hs_wild26CVPI = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1626CUyX, hs_x26CUz0, hs_y26CUz1);
            switch (hs_wild26CVPI.tag) {
            case 1:
                if (hs_x26CUz0.notEvaluated) {
                    return hs_x26CUz0.hscall();
                } else {
                    return hs_x26CUz0;
                }
            case 2:
                if (hs_y26CUz1.notEvaluated) {
                    return hs_y26CUz1.hscall();
                } else {
                    return hs_y26CUz1;
                }
            }
        };
        if (hs_sat26CVPH.notEvaluated) {
            return hs_sat26CVPH.hscall();
        } else {
            return hs_sat26CVPH;
        }
    };
    hs_zdczlze1425uw2O.evaluate = function (hs_zddOrd726CUzF, hs_zddOrd826CUzJ, hs_zddOrd926CUzN, hs_zddOrd1026CUzR, hs_zddOrd1126CUzV, hs_zddOrd1226CUzZ, hs_zddOrd1326CUA3, hs_zddOrd1426CUA7, hs_zddOrd1526CUAb, hs_zddOrd1626CUAf, hs_a1126CUzh, hs_b26CUzt) {
        var hs_wild26CVPK = hs_a1126CUzh;
        if (hs_a1126CUzh.notEvaluated) {
            hs_wild26CVPK = hs_a1126CUzh.hscall();
        }
        var hs_a1226CUzG = hs_wild26CVPK.data[0];
        var hs_a1326CUzK = hs_wild26CVPK.data[1];
        var hs_a1426CUzO = hs_wild26CVPK.data[2];
        var hs_a1526CUzS = hs_wild26CVPK.data[3];
        var hs_a1626CUzW = hs_wild26CVPK.data[4];
        var hs_a1726CUA0 = hs_wild26CVPK.data[5];
        var hs_a1826CUA4 = hs_wild26CVPK.data[6];
        var hs_a1926CUA8 = hs_wild26CVPK.data[7];
        var hs_a2026CUAc = hs_wild26CVPK.data[8];
        var hs_a2126CUAg = hs_wild26CVPK.data[9];
        var hs_wild126CVPJ = hs_b26CUzt;
        if (hs_b26CUzt.notEvaluated) {
            hs_wild126CVPJ = hs_b26CUzt.hscall();
        }
        var hs_b126CUzH = hs_wild126CVPJ.data[0];
        var hs_b226CUzL = hs_wild126CVPJ.data[1];
        var hs_b326CUzP = hs_wild126CVPJ.data[2];
        var hs_b426CUzT = hs_wild126CVPJ.data[3];
        var hs_b526CUzX = hs_wild126CVPJ.data[4];
        var hs_b626CUA1 = hs_wild126CVPJ.data[5];
        var hs_b726CUA5 = hs_wild126CVPJ.data[6];
        var hs_b826CUA9 = hs_wild126CVPJ.data[7];
        var hs_b926CUAd = hs_wild126CVPJ.data[8];
        var hs_b1026CUAh = hs_wild126CVPJ.data[9];
        var hs_wild226CVPL = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CUzF, hs_a1226CUzG, hs_b126CUzH);
        switch (hs_wild226CVPL.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVPM = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CUzJ, hs_a1326CUzK, hs_b226CUzL);
            switch (hs_wild326CVPM.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVPN = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CUzN, hs_a1426CUzO, hs_b326CUzP);
                switch (hs_wild426CVPN.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVPO = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CUzR, hs_a1526CUzS, hs_b426CUzT);
                    switch (hs_wild526CVPO.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVPP = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CUzV, hs_a1626CUzW, hs_b526CUzX);
                        switch (hs_wild626CVPP.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVPQ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CUzZ, hs_a1726CUA0, hs_b626CUA1);
                            switch (hs_wild726CVPQ.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVPR = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326CUA3, hs_a1826CUA4, hs_b726CUA5);
                                switch (hs_wild826CVPR.tag) {
                                case 1:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926CVPS = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426CUA7, hs_a1926CUA8, hs_b826CUA9);
                                    switch (hs_wild926CVPS.tag) {
                                    case 1:
                                        var $res = new $hs.Data(2);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026CVPT = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526CUAb, hs_a2026CUAc, hs_b926CUAd);
                                        switch (hs_wild1026CVPT.tag) {
                                        case 1:
                                            var $res = new $hs.Data(2);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1626CUAf, hs_a2126CUAg, hs_b1026CUAh);
                                        case 3:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        }
                                    case 3:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    }
                                case 3:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                }
                            case 3:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            }
                        case 3:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczg1425uw42.evaluate = function (hs_zddOrd726CUAT, hs_zddOrd826CUAX, hs_zddOrd926CUB1, hs_zddOrd1026CUB5, hs_zddOrd1126CUB9, hs_zddOrd1226CUBd, hs_zddOrd1326CUBh, hs_zddOrd1426CUBl, hs_zddOrd1526CUBp, hs_zddOrd1626CUBt, hs_a1126CUAv, hs_b26CUAH) {
        var hs_wild26CVPV = hs_a1126CUAv;
        if (hs_a1126CUAv.notEvaluated) {
            hs_wild26CVPV = hs_a1126CUAv.hscall();
        }
        var hs_a1226CUAU = hs_wild26CVPV.data[0];
        var hs_a1326CUAY = hs_wild26CVPV.data[1];
        var hs_a1426CUB2 = hs_wild26CVPV.data[2];
        var hs_a1526CUB6 = hs_wild26CVPV.data[3];
        var hs_a1626CUBa = hs_wild26CVPV.data[4];
        var hs_a1726CUBe = hs_wild26CVPV.data[5];
        var hs_a1826CUBi = hs_wild26CVPV.data[6];
        var hs_a1926CUBm = hs_wild26CVPV.data[7];
        var hs_a2026CUBq = hs_wild26CVPV.data[8];
        var hs_a2126CUBu = hs_wild26CVPV.data[9];
        var hs_wild126CVPU = hs_b26CUAH;
        if (hs_b26CUAH.notEvaluated) {
            hs_wild126CVPU = hs_b26CUAH.hscall();
        }
        var hs_b126CUAV = hs_wild126CVPU.data[0];
        var hs_b226CUAZ = hs_wild126CVPU.data[1];
        var hs_b326CUB3 = hs_wild126CVPU.data[2];
        var hs_b426CUB7 = hs_wild126CVPU.data[3];
        var hs_b526CUBb = hs_wild126CVPU.data[4];
        var hs_b626CUBf = hs_wild126CVPU.data[5];
        var hs_b726CUBj = hs_wild126CVPU.data[6];
        var hs_b826CUBn = hs_wild126CVPU.data[7];
        var hs_b926CUBr = hs_wild126CVPU.data[8];
        var hs_b1026CUBv = hs_wild126CVPU.data[9];
        var hs_wild226CVPW = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CUAT, hs_a1226CUAU, hs_b126CUAV);
        switch (hs_wild226CVPW.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVPX = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CUAX, hs_a1326CUAY, hs_b226CUAZ);
            switch (hs_wild326CVPX.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVPY = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CUB1, hs_a1426CUB2, hs_b326CUB3);
                switch (hs_wild426CVPY.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVPZ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CUB5, hs_a1526CUB6, hs_b426CUB7);
                    switch (hs_wild526CVPZ.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVQ0 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CUB9, hs_a1626CUBa, hs_b526CUBb);
                        switch (hs_wild626CVQ0.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVQ1 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CUBd, hs_a1726CUBe, hs_b626CUBf);
                            switch (hs_wild726CVQ1.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVQ2 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326CUBh, hs_a1826CUBi, hs_b726CUBj);
                                switch (hs_wild826CVQ2.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926CVQ3 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426CUBl, hs_a1926CUBm, hs_b826CUBn);
                                    switch (hs_wild926CVQ3.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026CVQ4 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526CUBp, hs_a2026CUBq, hs_b926CUBr);
                                        switch (hs_wild1026CVQ4.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd1626CUBt, hs_a2126CUBu, hs_b1026CUBv);
                                        case 3:
                                            var $res = new $hs.Data(2);
                                            $res.data = [];
                                            return $res;
                                        }
                                    case 3:
                                        var $res = new $hs.Data(2);
                                        $res.data = [];
                                        return $res;
                                    }
                                case 3:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                }
                            case 3:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            }
                        case 3:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczgze1425uw5g.evaluate = function (hs_zddOrd726CUC7, hs_zddOrd826CUCb, hs_zddOrd926CUCf, hs_zddOrd1026CUCj, hs_zddOrd1126CUCn, hs_zddOrd1226CUCr, hs_zddOrd1326CUCv, hs_zddOrd1426CUCz, hs_zddOrd1526CUCD, hs_zddOrd1626CUCH, hs_a1126CUBJ, hs_b26CUBV) {
        var hs_wild26CVQ6 = hs_a1126CUBJ;
        if (hs_a1126CUBJ.notEvaluated) {
            hs_wild26CVQ6 = hs_a1126CUBJ.hscall();
        }
        var hs_a1226CUC8 = hs_wild26CVQ6.data[0];
        var hs_a1326CUCc = hs_wild26CVQ6.data[1];
        var hs_a1426CUCg = hs_wild26CVQ6.data[2];
        var hs_a1526CUCk = hs_wild26CVQ6.data[3];
        var hs_a1626CUCo = hs_wild26CVQ6.data[4];
        var hs_a1726CUCs = hs_wild26CVQ6.data[5];
        var hs_a1826CUCw = hs_wild26CVQ6.data[6];
        var hs_a1926CUCA = hs_wild26CVQ6.data[7];
        var hs_a2026CUCE = hs_wild26CVQ6.data[8];
        var hs_a2126CUCI = hs_wild26CVQ6.data[9];
        var hs_wild126CVQ5 = hs_b26CUBV;
        if (hs_b26CUBV.notEvaluated) {
            hs_wild126CVQ5 = hs_b26CUBV.hscall();
        }
        var hs_b126CUC9 = hs_wild126CVQ5.data[0];
        var hs_b226CUCd = hs_wild126CVQ5.data[1];
        var hs_b326CUCh = hs_wild126CVQ5.data[2];
        var hs_b426CUCl = hs_wild126CVQ5.data[3];
        var hs_b526CUCp = hs_wild126CVQ5.data[4];
        var hs_b626CUCt = hs_wild126CVQ5.data[5];
        var hs_b726CUCx = hs_wild126CVQ5.data[6];
        var hs_b826CUCB = hs_wild126CVQ5.data[7];
        var hs_b926CUCF = hs_wild126CVQ5.data[8];
        var hs_b1026CUCJ = hs_wild126CVQ5.data[9];
        var hs_wild226CVQ7 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CUC7, hs_a1226CUC8, hs_b126CUC9);
        switch (hs_wild226CVQ7.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVQ8 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CUCb, hs_a1326CUCc, hs_b226CUCd);
            switch (hs_wild326CVQ8.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVQ9 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CUCf, hs_a1426CUCg, hs_b326CUCh);
                switch (hs_wild426CVQ9.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVQa = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CUCj, hs_a1526CUCk, hs_b426CUCl);
                    switch (hs_wild526CVQa.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVQb = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CUCn, hs_a1626CUCo, hs_b526CUCp);
                        switch (hs_wild626CVQb.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVQc = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CUCr, hs_a1726CUCs, hs_b626CUCt);
                            switch (hs_wild726CVQc.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVQd = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326CUCv, hs_a1826CUCw, hs_b726CUCx);
                                switch (hs_wild826CVQd.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926CVQe = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426CUCz, hs_a1926CUCA, hs_b826CUCB);
                                    switch (hs_wild926CVQe.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026CVQf = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526CUCD, hs_a2026CUCE, hs_b926CUCF);
                                        switch (hs_wild1026CVQf.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd1626CUCH, hs_a2126CUCI, hs_b1026CUCJ);
                                        case 3:
                                            var $res = new $hs.Data(2);
                                            $res.data = [];
                                            return $res;
                                        }
                                    case 3:
                                        var $res = new $hs.Data(2);
                                        $res.data = [];
                                        return $res;
                                    }
                                case 3:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                }
                            case 3:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            }
                        case 3:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczl1425uw6u.evaluate = function (hs_zddOrd726CUDl, hs_zddOrd826CUDp, hs_zddOrd926CUDt, hs_zddOrd1026CUDx, hs_zddOrd1126CUDB, hs_zddOrd1226CUDF, hs_zddOrd1326CUDJ, hs_zddOrd1426CUDN, hs_zddOrd1526CUDR, hs_zddOrd1626CUDV, hs_a1126CUCX, hs_b26CUD9) {
        var hs_wild26CVQh = hs_a1126CUCX;
        if (hs_a1126CUCX.notEvaluated) {
            hs_wild26CVQh = hs_a1126CUCX.hscall();
        }
        var hs_a1226CUDm = hs_wild26CVQh.data[0];
        var hs_a1326CUDq = hs_wild26CVQh.data[1];
        var hs_a1426CUDu = hs_wild26CVQh.data[2];
        var hs_a1526CUDy = hs_wild26CVQh.data[3];
        var hs_a1626CUDC = hs_wild26CVQh.data[4];
        var hs_a1726CUDG = hs_wild26CVQh.data[5];
        var hs_a1826CUDK = hs_wild26CVQh.data[6];
        var hs_a1926CUDO = hs_wild26CVQh.data[7];
        var hs_a2026CUDS = hs_wild26CVQh.data[8];
        var hs_a2126CUDW = hs_wild26CVQh.data[9];
        var hs_wild126CVQg = hs_b26CUD9;
        if (hs_b26CUD9.notEvaluated) {
            hs_wild126CVQg = hs_b26CUD9.hscall();
        }
        var hs_b126CUDn = hs_wild126CVQg.data[0];
        var hs_b226CUDr = hs_wild126CVQg.data[1];
        var hs_b326CUDv = hs_wild126CVQg.data[2];
        var hs_b426CUDz = hs_wild126CVQg.data[3];
        var hs_b526CUDD = hs_wild126CVQg.data[4];
        var hs_b626CUDH = hs_wild126CVQg.data[5];
        var hs_b726CUDL = hs_wild126CVQg.data[6];
        var hs_b826CUDP = hs_wild126CVQg.data[7];
        var hs_b926CUDT = hs_wild126CVQg.data[8];
        var hs_b1026CUDX = hs_wild126CVQg.data[9];
        var hs_wild226CVQi = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CUDl, hs_a1226CUDm, hs_b126CUDn);
        switch (hs_wild226CVQi.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVQj = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CUDp, hs_a1326CUDq, hs_b226CUDr);
            switch (hs_wild326CVQj.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVQk = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CUDt, hs_a1426CUDu, hs_b326CUDv);
                switch (hs_wild426CVQk.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVQl = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CUDx, hs_a1526CUDy, hs_b426CUDz);
                    switch (hs_wild526CVQl.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVQm = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CUDB, hs_a1626CUDC, hs_b526CUDD);
                        switch (hs_wild626CVQm.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVQn = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CUDF, hs_a1726CUDG, hs_b626CUDH);
                            switch (hs_wild726CVQn.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVQo = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326CUDJ, hs_a1826CUDK, hs_b726CUDL);
                                switch (hs_wild826CVQo.tag) {
                                case 1:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926CVQp = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426CUDN, hs_a1926CUDO, hs_b826CUDP);
                                    switch (hs_wild926CVQp.tag) {
                                    case 1:
                                        var $res = new $hs.Data(2);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026CVQq = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526CUDR, hs_a2026CUDS, hs_b926CUDT);
                                        switch (hs_wild1026CVQq.tag) {
                                        case 1:
                                            var $res = new $hs.Data(2);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd1626CUDV, hs_a2126CUDW, hs_b1026CUDX);
                                        case 3:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        }
                                    case 3:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    }
                                case 3:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                }
                            case 3:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            }
                        case 3:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdccompare1425uw7I.evaluate = function (hs_zddOrd726CUEz, hs_zddOrd826CUED, hs_zddOrd926CUEH, hs_zddOrd1026CUEL, hs_zddOrd1126CUEP, hs_zddOrd1226CUET, hs_zddOrd1326CUEX, hs_zddOrd1426CUF1, hs_zddOrd1526CUF5, hs_zddOrd1626CUF9, hs_a1126CUEb, hs_b26CUEn) {
        var hs_wild26CVQs = hs_a1126CUEb;
        if (hs_a1126CUEb.notEvaluated) {
            hs_wild26CVQs = hs_a1126CUEb.hscall();
        }
        var hs_a1226CUEA = hs_wild26CVQs.data[0];
        var hs_a1326CUEE = hs_wild26CVQs.data[1];
        var hs_a1426CUEI = hs_wild26CVQs.data[2];
        var hs_a1526CUEM = hs_wild26CVQs.data[3];
        var hs_a1626CUEQ = hs_wild26CVQs.data[4];
        var hs_a1726CUEU = hs_wild26CVQs.data[5];
        var hs_a1826CUEY = hs_wild26CVQs.data[6];
        var hs_a1926CUF2 = hs_wild26CVQs.data[7];
        var hs_a2026CUF6 = hs_wild26CVQs.data[8];
        var hs_a2126CUFa = hs_wild26CVQs.data[9];
        var hs_wild126CVQr = hs_b26CUEn;
        if (hs_b26CUEn.notEvaluated) {
            hs_wild126CVQr = hs_b26CUEn.hscall();
        }
        var hs_b126CUEB = hs_wild126CVQr.data[0];
        var hs_b226CUEF = hs_wild126CVQr.data[1];
        var hs_b326CUEJ = hs_wild126CVQr.data[2];
        var hs_b426CUEN = hs_wild126CVQr.data[3];
        var hs_b526CUER = hs_wild126CVQr.data[4];
        var hs_b626CUEV = hs_wild126CVQr.data[5];
        var hs_b726CUEZ = hs_wild126CVQr.data[6];
        var hs_b826CUF3 = hs_wild126CVQr.data[7];
        var hs_b926CUF7 = hs_wild126CVQr.data[8];
        var hs_b1026CUFb = hs_wild126CVQr.data[9];
        var hs_wild226CVQt = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CUEz, hs_a1226CUEA, hs_b126CUEB);
        switch (hs_wild226CVQt.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVQu = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CUED, hs_a1326CUEE, hs_b226CUEF);
            switch (hs_wild326CVQu.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVQv = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CUEH, hs_a1426CUEI, hs_b326CUEJ);
                switch (hs_wild426CVQv.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVQw = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CUEL, hs_a1526CUEM, hs_b426CUEN);
                    switch (hs_wild526CVQw.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVQx = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CUEP, hs_a1626CUEQ, hs_b526CUER);
                        switch (hs_wild626CVQx.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVQy = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CUET, hs_a1726CUEU, hs_b626CUEV);
                            switch (hs_wild726CVQy.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVQz = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326CUEX, hs_a1826CUEY, hs_b726CUEZ);
                                switch (hs_wild826CVQz.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926CVQA = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426CUF1, hs_a1926CUF2, hs_b826CUF3);
                                    switch (hs_wild926CVQA.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026CVQB = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526CUF5, hs_a2026CUF6, hs_b926CUF7);
                                        switch (hs_wild1026CVQB.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626CUF9, hs_a2126CUFa, hs_b1026CUFb);
                                        case 3:
                                            var $res = new $hs.Data(3);
                                            $res.data = [];
                                            return $res;
                                        }
                                    case 3:
                                        var $res = new $hs.Data(3);
                                        $res.data = [];
                                        return $res;
                                    }
                                case 3:
                                    var $res = new $hs.Data(3);
                                    $res.data = [];
                                    return $res;
                                }
                            case 3:
                                var $res = new $hs.Data(3);
                                $res.data = [];
                                return $res;
                            }
                        case 3:
                            var $res = new $hs.Data(3);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(3);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(3);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(3);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczdp1Ord925uw8W.evaluate = function (hs_zddOrd726CUFn, hs_zddOrd826CUFp, hs_zddOrd926CUFr, hs_zddOrd1026CUFt, hs_zddOrd1126CUFv, hs_zddOrd1226CUFx, hs_zddOrd1326CUFz, hs_zddOrd1426CUFB, hs_zddOrd1526CUFD, hs_zddOrd1626CUFF) {
        var hs_sat26CVQD = new $hs.Thunk();
        hs_sat26CVQD.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1626CUFF);
        };
        var hs_sat26CVQE = new $hs.Thunk();
        hs_sat26CVQE.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1526CUFD);
        };
        var hs_sat26CVQF = new $hs.Thunk();
        hs_sat26CVQF.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1426CUFB);
        };
        var hs_sat26CVQG = new $hs.Thunk();
        hs_sat26CVQG.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1326CUFz);
        };
        var hs_sat26CVQH = new $hs.Thunk();
        hs_sat26CVQH.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1226CUFx);
        };
        var hs_sat26CVQI = new $hs.Thunk();
        hs_sat26CVQI.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1126CUFv);
        };
        var hs_sat26CVQJ = new $hs.Thunk();
        hs_sat26CVQJ.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1026CUFt);
        };
        var hs_sat26CVQK = new $hs.Thunk();
        hs_sat26CVQK.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd926CUFr);
        };
        var hs_sat26CVQL = new $hs.Thunk();
        hs_sat26CVQL.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd826CUFp);
        };
        var hs_sat26CVQC = new $hs.Thunk();
        hs_sat26CVQC.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd726CUFn);
        };
        return $hs.modules.GHCziClasses.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_sat26CVQC, hs_sat26CVQL, hs_sat26CVQK, hs_sat26CVQJ, hs_sat26CVQI, hs_sat26CVQH, hs_sat26CVQG, hs_sat26CVQF, hs_sat26CVQE, hs_sat26CVQD);
    };
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddOrd726CUFT, hs_zddOrd826CUFU, hs_zddOrd926CUFV, hs_zddOrd1026CUFW, hs_zddOrd1126CUFX, hs_zddOrd1226CUFY, hs_zddOrd1326CUFZ, hs_zddOrd1426CUG0, hs_zddOrd1526CUG1, hs_zddOrd1626CUG2) {
        var hs_sat26CVQN = new $hs.Thunk();
        hs_sat26CVQN.evaluateOnce = function () {
            return hs_zdcmin1625uw9r.hscall(hs_zddOrd726CUFT, hs_zddOrd826CUFU, hs_zddOrd926CUFV, hs_zddOrd1026CUFW, hs_zddOrd1126CUFX, hs_zddOrd1226CUFY, hs_zddOrd1326CUFZ, hs_zddOrd1426CUG0, hs_zddOrd1526CUG1, hs_zddOrd1626CUG2);
        };
        var hs_sat26CVQO = new $hs.Thunk();
        hs_sat26CVQO.evaluateOnce = function () {
            return hs_zdcmax1625uw9s.hscall(hs_zddOrd726CUFT, hs_zddOrd826CUFU, hs_zddOrd926CUFV, hs_zddOrd1026CUFW, hs_zddOrd1126CUFX, hs_zddOrd1226CUFY, hs_zddOrd1326CUFZ, hs_zddOrd1426CUG0, hs_zddOrd1526CUG1, hs_zddOrd1626CUG2);
        };
        var hs_sat26CVQP = new $hs.Func(2);
        hs_sat26CVQP.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczlze1425uw2O.hscall(hs_zddOrd726CUFT, hs_zddOrd826CUFU, hs_zddOrd926CUFV, hs_zddOrd1026CUFW, hs_zddOrd1126CUFX, hs_zddOrd1226CUFY, hs_zddOrd1326CUFZ, hs_zddOrd1426CUG0, hs_zddOrd1526CUG1, hs_zddOrd1626CUG2, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVQQ = new $hs.Func(2);
        hs_sat26CVQQ.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczg1425uw42.hscall(hs_zddOrd726CUFT, hs_zddOrd826CUFU, hs_zddOrd926CUFV, hs_zddOrd1026CUFW, hs_zddOrd1126CUFX, hs_zddOrd1226CUFY, hs_zddOrd1326CUFZ, hs_zddOrd1426CUG0, hs_zddOrd1526CUG1, hs_zddOrd1626CUG2, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVQR = new $hs.Func(2);
        hs_sat26CVQR.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczgze1425uw5g.hscall(hs_zddOrd726CUFT, hs_zddOrd826CUFU, hs_zddOrd926CUFV, hs_zddOrd1026CUFW, hs_zddOrd1126CUFX, hs_zddOrd1226CUFY, hs_zddOrd1326CUFZ, hs_zddOrd1426CUG0, hs_zddOrd1526CUG1, hs_zddOrd1626CUG2, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVQS = new $hs.Func(2);
        hs_sat26CVQS.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczl1425uw6u.hscall(hs_zddOrd726CUFT, hs_zddOrd826CUFU, hs_zddOrd926CUFV, hs_zddOrd1026CUFW, hs_zddOrd1126CUFX, hs_zddOrd1226CUFY, hs_zddOrd1326CUFZ, hs_zddOrd1426CUG0, hs_zddOrd1526CUG1, hs_zddOrd1626CUG2, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVQT = new $hs.Func(2);
        hs_sat26CVQT.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdccompare1425uw7I.hscall(hs_zddOrd726CUFT, hs_zddOrd826CUFU, hs_zddOrd926CUFV, hs_zddOrd1026CUFW, hs_zddOrd1126CUFX, hs_zddOrd1226CUFY, hs_zddOrd1326CUFZ, hs_zddOrd1426CUG0, hs_zddOrd1526CUG1, hs_zddOrd1626CUG2, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVQM = new $hs.Thunk();
        hs_sat26CVQM.evaluateOnce = function () {
            return hs_zdczdp1Ord925uw8W.hscall(hs_zddOrd726CUFT, hs_zddOrd826CUFU, hs_zddOrd926CUFV, hs_zddOrd1026CUFW, hs_zddOrd1126CUFX, hs_zddOrd1226CUFY, hs_zddOrd1326CUFZ, hs_zddOrd1426CUG0, hs_zddOrd1526CUG1, hs_zddOrd1626CUG2);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CVQM, hs_sat26CVQT, hs_sat26CVQS, hs_sat26CVQR, hs_sat26CVQQ, hs_sat26CVQP, hs_sat26CVQO, hs_sat26CVQN];
        return $res;
    };
    hs_zdcmin1625uw9r.evaluate = function (hs_zddOrd726CUGm, hs_zddOrd826CUGn, hs_zddOrd926CUGo, hs_zddOrd1026CUGp, hs_zddOrd1126CUGq, hs_zddOrd1226CUGr, hs_zddOrd1326CUGs, hs_zddOrd1426CUGt, hs_zddOrd1526CUGu, hs_zddOrd1626CUGv) {
        var hs_zddOrd1726CUGw = new $hs.Thunk();
        hs_zddOrd1726CUGw.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddOrd726CUGm, hs_zddOrd826CUGn, hs_zddOrd926CUGo, hs_zddOrd1026CUGp, hs_zddOrd1126CUGq, hs_zddOrd1226CUGr, hs_zddOrd1326CUGs, hs_zddOrd1426CUGt, hs_zddOrd1526CUGu, hs_zddOrd1626CUGv);
        };
        var hs_sat26CVQU = new $hs.Func(2);
        hs_sat26CVQU.evaluate = function (hs_x26CUGz, hs_y26CUGA) {
            var hs_wild26CVQV = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1726CUGw, hs_x26CUGz, hs_y26CUGA);
            switch (hs_wild26CVQV.tag) {
            case 1:
                if (hs_y26CUGA.notEvaluated) {
                    return hs_y26CUGA.hscall();
                } else {
                    return hs_y26CUGA;
                }
            case 2:
                if (hs_x26CUGz.notEvaluated) {
                    return hs_x26CUGz.hscall();
                } else {
                    return hs_x26CUGz;
                }
            }
        };
        if (hs_sat26CVQU.notEvaluated) {
            return hs_sat26CVQU.hscall();
        } else {
            return hs_sat26CVQU;
        }
    };
    hs_zdcmax1625uw9s.evaluate = function (hs_zddOrd726CUGO, hs_zddOrd826CUGP, hs_zddOrd926CUGQ, hs_zddOrd1026CUGR, hs_zddOrd1126CUGS, hs_zddOrd1226CUGT, hs_zddOrd1326CUGU, hs_zddOrd1426CUGV, hs_zddOrd1526CUGW, hs_zddOrd1626CUGX) {
        var hs_zddOrd1726CUGY = new $hs.Thunk();
        hs_zddOrd1726CUGY.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddOrd726CUGO, hs_zddOrd826CUGP, hs_zddOrd926CUGQ, hs_zddOrd1026CUGR, hs_zddOrd1126CUGS, hs_zddOrd1226CUGT, hs_zddOrd1326CUGU, hs_zddOrd1426CUGV, hs_zddOrd1526CUGW, hs_zddOrd1626CUGX);
        };
        var hs_sat26CVQW = new $hs.Func(2);
        hs_sat26CVQW.evaluate = function (hs_x26CUH1, hs_y26CUH2) {
            var hs_wild26CVQX = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1726CUGY, hs_x26CUH1, hs_y26CUH2);
            switch (hs_wild26CVQX.tag) {
            case 1:
                if (hs_x26CUH1.notEvaluated) {
                    return hs_x26CUH1.hscall();
                } else {
                    return hs_x26CUH1;
                }
            case 2:
                if (hs_y26CUH2.notEvaluated) {
                    return hs_y26CUH2.hscall();
                } else {
                    return hs_y26CUH2;
                }
            }
        };
        if (hs_sat26CVQW.notEvaluated) {
            return hs_sat26CVQW.hscall();
        } else {
            return hs_sat26CVQW;
        }
    };
    hs_zdczlze1525uwaP.evaluate = function (hs_zddOrd726CUHJ, hs_zddOrd826CUHN, hs_zddOrd926CUHR, hs_zddOrd1026CUHV, hs_zddOrd1126CUHZ, hs_zddOrd1226CUI3, hs_zddOrd1326CUI7, hs_zddOrd1426CUIb, hs_zddOrd1526CUIf, hs_zddOrd1626CUIj, hs_zddOrd1726CUIn, hs_a1126CUHj, hs_b26CUHw) {
        var hs_wild26CVQZ = hs_a1126CUHj;
        if (hs_a1126CUHj.notEvaluated) {
            hs_wild26CVQZ = hs_a1126CUHj.hscall();
        }
        var hs_a1226CUHK = hs_wild26CVQZ.data[0];
        var hs_a1326CUHO = hs_wild26CVQZ.data[1];
        var hs_a1426CUHS = hs_wild26CVQZ.data[2];
        var hs_a1526CUHW = hs_wild26CVQZ.data[3];
        var hs_a1626CUI0 = hs_wild26CVQZ.data[4];
        var hs_a1726CUI4 = hs_wild26CVQZ.data[5];
        var hs_a1826CUI8 = hs_wild26CVQZ.data[6];
        var hs_a1926CUIc = hs_wild26CVQZ.data[7];
        var hs_a2026CUIg = hs_wild26CVQZ.data[8];
        var hs_a2126CUIk = hs_wild26CVQZ.data[9];
        var hs_a2226CUIo = hs_wild26CVQZ.data[10];
        var hs_wild126CVQY = hs_b26CUHw;
        if (hs_b26CUHw.notEvaluated) {
            hs_wild126CVQY = hs_b26CUHw.hscall();
        }
        var hs_b126CUHL = hs_wild126CVQY.data[0];
        var hs_b226CUHP = hs_wild126CVQY.data[1];
        var hs_b326CUHT = hs_wild126CVQY.data[2];
        var hs_b426CUHX = hs_wild126CVQY.data[3];
        var hs_b526CUI1 = hs_wild126CVQY.data[4];
        var hs_b626CUI5 = hs_wild126CVQY.data[5];
        var hs_b726CUI9 = hs_wild126CVQY.data[6];
        var hs_b826CUId = hs_wild126CVQY.data[7];
        var hs_b926CUIh = hs_wild126CVQY.data[8];
        var hs_b1026CUIl = hs_wild126CVQY.data[9];
        var hs_b1126CUIp = hs_wild126CVQY.data[10];
        var hs_wild226CVR0 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CUHJ, hs_a1226CUHK, hs_b126CUHL);
        switch (hs_wild226CVR0.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVR1 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CUHN, hs_a1326CUHO, hs_b226CUHP);
            switch (hs_wild326CVR1.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVR2 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CUHR, hs_a1426CUHS, hs_b326CUHT);
                switch (hs_wild426CVR2.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVR3 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CUHV, hs_a1526CUHW, hs_b426CUHX);
                    switch (hs_wild526CVR3.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVR4 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CUHZ, hs_a1626CUI0, hs_b526CUI1);
                        switch (hs_wild626CVR4.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVR5 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CUI3, hs_a1726CUI4, hs_b626CUI5);
                            switch (hs_wild726CVR5.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVR6 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326CUI7, hs_a1826CUI8, hs_b726CUI9);
                                switch (hs_wild826CVR6.tag) {
                                case 1:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926CVR7 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426CUIb, hs_a1926CUIc, hs_b826CUId);
                                    switch (hs_wild926CVR7.tag) {
                                    case 1:
                                        var $res = new $hs.Data(2);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026CVR8 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526CUIf, hs_a2026CUIg, hs_b926CUIh);
                                        switch (hs_wild1026CVR8.tag) {
                                        case 1:
                                            var $res = new $hs.Data(2);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126CVR9 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626CUIj, hs_a2126CUIk, hs_b1026CUIl);
                                            switch (hs_wild1126CVR9.tag) {
                                            case 1:
                                                var $res = new $hs.Data(2);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1726CUIn, hs_a2226CUIo, hs_b1126CUIp);
                                            case 3:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            }
                                        case 3:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        }
                                    case 3:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    }
                                case 3:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                }
                            case 3:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            }
                        case 3:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczg1525uwca.evaluate = function (hs_zddOrd726CUJ4, hs_zddOrd826CUJ8, hs_zddOrd926CUJc, hs_zddOrd1026CUJg, hs_zddOrd1126CUJk, hs_zddOrd1226CUJo, hs_zddOrd1326CUJs, hs_zddOrd1426CUJw, hs_zddOrd1526CUJA, hs_zddOrd1626CUJE, hs_zddOrd1726CUJI, hs_a1126CUIE, hs_b26CUIR) {
        var hs_wild26CVRb = hs_a1126CUIE;
        if (hs_a1126CUIE.notEvaluated) {
            hs_wild26CVRb = hs_a1126CUIE.hscall();
        }
        var hs_a1226CUJ5 = hs_wild26CVRb.data[0];
        var hs_a1326CUJ9 = hs_wild26CVRb.data[1];
        var hs_a1426CUJd = hs_wild26CVRb.data[2];
        var hs_a1526CUJh = hs_wild26CVRb.data[3];
        var hs_a1626CUJl = hs_wild26CVRb.data[4];
        var hs_a1726CUJp = hs_wild26CVRb.data[5];
        var hs_a1826CUJt = hs_wild26CVRb.data[6];
        var hs_a1926CUJx = hs_wild26CVRb.data[7];
        var hs_a2026CUJB = hs_wild26CVRb.data[8];
        var hs_a2126CUJF = hs_wild26CVRb.data[9];
        var hs_a2226CUJJ = hs_wild26CVRb.data[10];
        var hs_wild126CVRa = hs_b26CUIR;
        if (hs_b26CUIR.notEvaluated) {
            hs_wild126CVRa = hs_b26CUIR.hscall();
        }
        var hs_b126CUJ6 = hs_wild126CVRa.data[0];
        var hs_b226CUJa = hs_wild126CVRa.data[1];
        var hs_b326CUJe = hs_wild126CVRa.data[2];
        var hs_b426CUJi = hs_wild126CVRa.data[3];
        var hs_b526CUJm = hs_wild126CVRa.data[4];
        var hs_b626CUJq = hs_wild126CVRa.data[5];
        var hs_b726CUJu = hs_wild126CVRa.data[6];
        var hs_b826CUJy = hs_wild126CVRa.data[7];
        var hs_b926CUJC = hs_wild126CVRa.data[8];
        var hs_b1026CUJG = hs_wild126CVRa.data[9];
        var hs_b1126CUJK = hs_wild126CVRa.data[10];
        var hs_wild226CVRc = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CUJ4, hs_a1226CUJ5, hs_b126CUJ6);
        switch (hs_wild226CVRc.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVRd = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CUJ8, hs_a1326CUJ9, hs_b226CUJa);
            switch (hs_wild326CVRd.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVRe = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CUJc, hs_a1426CUJd, hs_b326CUJe);
                switch (hs_wild426CVRe.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVRf = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CUJg, hs_a1526CUJh, hs_b426CUJi);
                    switch (hs_wild526CVRf.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVRg = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CUJk, hs_a1626CUJl, hs_b526CUJm);
                        switch (hs_wild626CVRg.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVRh = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CUJo, hs_a1726CUJp, hs_b626CUJq);
                            switch (hs_wild726CVRh.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVRi = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326CUJs, hs_a1826CUJt, hs_b726CUJu);
                                switch (hs_wild826CVRi.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926CVRj = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426CUJw, hs_a1926CUJx, hs_b826CUJy);
                                    switch (hs_wild926CVRj.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026CVRk = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526CUJA, hs_a2026CUJB, hs_b926CUJC);
                                        switch (hs_wild1026CVRk.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126CVRl = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626CUJE, hs_a2126CUJF, hs_b1026CUJG);
                                            switch (hs_wild1126CVRl.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd1726CUJI, hs_a2226CUJJ, hs_b1126CUJK);
                                            case 3:
                                                var $res = new $hs.Data(2);
                                                $res.data = [];
                                                return $res;
                                            }
                                        case 3:
                                            var $res = new $hs.Data(2);
                                            $res.data = [];
                                            return $res;
                                        }
                                    case 3:
                                        var $res = new $hs.Data(2);
                                        $res.data = [];
                                        return $res;
                                    }
                                case 3:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                }
                            case 3:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            }
                        case 3:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczgze1525uwdv.evaluate = function (hs_zddOrd726CUKp, hs_zddOrd826CUKt, hs_zddOrd926CUKx, hs_zddOrd1026CUKB, hs_zddOrd1126CUKF, hs_zddOrd1226CUKJ, hs_zddOrd1326CUKN, hs_zddOrd1426CUKR, hs_zddOrd1526CUKV, hs_zddOrd1626CUKZ, hs_zddOrd1726CUL3, hs_a1126CUJZ, hs_b26CUKc) {
        var hs_wild26CVRn = hs_a1126CUJZ;
        if (hs_a1126CUJZ.notEvaluated) {
            hs_wild26CVRn = hs_a1126CUJZ.hscall();
        }
        var hs_a1226CUKq = hs_wild26CVRn.data[0];
        var hs_a1326CUKu = hs_wild26CVRn.data[1];
        var hs_a1426CUKy = hs_wild26CVRn.data[2];
        var hs_a1526CUKC = hs_wild26CVRn.data[3];
        var hs_a1626CUKG = hs_wild26CVRn.data[4];
        var hs_a1726CUKK = hs_wild26CVRn.data[5];
        var hs_a1826CUKO = hs_wild26CVRn.data[6];
        var hs_a1926CUKS = hs_wild26CVRn.data[7];
        var hs_a2026CUKW = hs_wild26CVRn.data[8];
        var hs_a2126CUL0 = hs_wild26CVRn.data[9];
        var hs_a2226CUL4 = hs_wild26CVRn.data[10];
        var hs_wild126CVRm = hs_b26CUKc;
        if (hs_b26CUKc.notEvaluated) {
            hs_wild126CVRm = hs_b26CUKc.hscall();
        }
        var hs_b126CUKr = hs_wild126CVRm.data[0];
        var hs_b226CUKv = hs_wild126CVRm.data[1];
        var hs_b326CUKz = hs_wild126CVRm.data[2];
        var hs_b426CUKD = hs_wild126CVRm.data[3];
        var hs_b526CUKH = hs_wild126CVRm.data[4];
        var hs_b626CUKL = hs_wild126CVRm.data[5];
        var hs_b726CUKP = hs_wild126CVRm.data[6];
        var hs_b826CUKT = hs_wild126CVRm.data[7];
        var hs_b926CUKX = hs_wild126CVRm.data[8];
        var hs_b1026CUL1 = hs_wild126CVRm.data[9];
        var hs_b1126CUL5 = hs_wild126CVRm.data[10];
        var hs_wild226CVRo = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CUKp, hs_a1226CUKq, hs_b126CUKr);
        switch (hs_wild226CVRo.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVRp = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CUKt, hs_a1326CUKu, hs_b226CUKv);
            switch (hs_wild326CVRp.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVRq = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CUKx, hs_a1426CUKy, hs_b326CUKz);
                switch (hs_wild426CVRq.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVRr = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CUKB, hs_a1526CUKC, hs_b426CUKD);
                    switch (hs_wild526CVRr.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVRs = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CUKF, hs_a1626CUKG, hs_b526CUKH);
                        switch (hs_wild626CVRs.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVRt = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CUKJ, hs_a1726CUKK, hs_b626CUKL);
                            switch (hs_wild726CVRt.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVRu = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326CUKN, hs_a1826CUKO, hs_b726CUKP);
                                switch (hs_wild826CVRu.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926CVRv = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426CUKR, hs_a1926CUKS, hs_b826CUKT);
                                    switch (hs_wild926CVRv.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026CVRw = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526CUKV, hs_a2026CUKW, hs_b926CUKX);
                                        switch (hs_wild1026CVRw.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126CVRx = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626CUKZ, hs_a2126CUL0, hs_b1026CUL1);
                                            switch (hs_wild1126CVRx.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd1726CUL3, hs_a2226CUL4, hs_b1126CUL5);
                                            case 3:
                                                var $res = new $hs.Data(2);
                                                $res.data = [];
                                                return $res;
                                            }
                                        case 3:
                                            var $res = new $hs.Data(2);
                                            $res.data = [];
                                            return $res;
                                        }
                                    case 3:
                                        var $res = new $hs.Data(2);
                                        $res.data = [];
                                        return $res;
                                    }
                                case 3:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                }
                            case 3:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            }
                        case 3:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczl1525uweQ.evaluate = function (hs_zddOrd726CULK, hs_zddOrd826CULO, hs_zddOrd926CULS, hs_zddOrd1026CULW, hs_zddOrd1126CUM0, hs_zddOrd1226CUM4, hs_zddOrd1326CUM8, hs_zddOrd1426CUMc, hs_zddOrd1526CUMg, hs_zddOrd1626CUMk, hs_zddOrd1726CUMo, hs_a1126CULk, hs_b26CULx) {
        var hs_wild26CVRz = hs_a1126CULk;
        if (hs_a1126CULk.notEvaluated) {
            hs_wild26CVRz = hs_a1126CULk.hscall();
        }
        var hs_a1226CULL = hs_wild26CVRz.data[0];
        var hs_a1326CULP = hs_wild26CVRz.data[1];
        var hs_a1426CULT = hs_wild26CVRz.data[2];
        var hs_a1526CULX = hs_wild26CVRz.data[3];
        var hs_a1626CUM1 = hs_wild26CVRz.data[4];
        var hs_a1726CUM5 = hs_wild26CVRz.data[5];
        var hs_a1826CUM9 = hs_wild26CVRz.data[6];
        var hs_a1926CUMd = hs_wild26CVRz.data[7];
        var hs_a2026CUMh = hs_wild26CVRz.data[8];
        var hs_a2126CUMl = hs_wild26CVRz.data[9];
        var hs_a2226CUMp = hs_wild26CVRz.data[10];
        var hs_wild126CVRy = hs_b26CULx;
        if (hs_b26CULx.notEvaluated) {
            hs_wild126CVRy = hs_b26CULx.hscall();
        }
        var hs_b126CULM = hs_wild126CVRy.data[0];
        var hs_b226CULQ = hs_wild126CVRy.data[1];
        var hs_b326CULU = hs_wild126CVRy.data[2];
        var hs_b426CULY = hs_wild126CVRy.data[3];
        var hs_b526CUM2 = hs_wild126CVRy.data[4];
        var hs_b626CUM6 = hs_wild126CVRy.data[5];
        var hs_b726CUMa = hs_wild126CVRy.data[6];
        var hs_b826CUMe = hs_wild126CVRy.data[7];
        var hs_b926CUMi = hs_wild126CVRy.data[8];
        var hs_b1026CUMm = hs_wild126CVRy.data[9];
        var hs_b1126CUMq = hs_wild126CVRy.data[10];
        var hs_wild226CVRA = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CULK, hs_a1226CULL, hs_b126CULM);
        switch (hs_wild226CVRA.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVRB = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CULO, hs_a1326CULP, hs_b226CULQ);
            switch (hs_wild326CVRB.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVRC = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CULS, hs_a1426CULT, hs_b326CULU);
                switch (hs_wild426CVRC.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVRD = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CULW, hs_a1526CULX, hs_b426CULY);
                    switch (hs_wild526CVRD.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVRE = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CUM0, hs_a1626CUM1, hs_b526CUM2);
                        switch (hs_wild626CVRE.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVRF = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CUM4, hs_a1726CUM5, hs_b626CUM6);
                            switch (hs_wild726CVRF.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVRG = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326CUM8, hs_a1826CUM9, hs_b726CUMa);
                                switch (hs_wild826CVRG.tag) {
                                case 1:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926CVRH = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426CUMc, hs_a1926CUMd, hs_b826CUMe);
                                    switch (hs_wild926CVRH.tag) {
                                    case 1:
                                        var $res = new $hs.Data(2);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026CVRI = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526CUMg, hs_a2026CUMh, hs_b926CUMi);
                                        switch (hs_wild1026CVRI.tag) {
                                        case 1:
                                            var $res = new $hs.Data(2);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126CVRJ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626CUMk, hs_a2126CUMl, hs_b1026CUMm);
                                            switch (hs_wild1126CVRJ.tag) {
                                            case 1:
                                                var $res = new $hs.Data(2);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd1726CUMo, hs_a2226CUMp, hs_b1126CUMq);
                                            case 3:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            }
                                        case 3:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        }
                                    case 3:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    }
                                case 3:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                }
                            case 3:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            }
                        case 3:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdccompare1525uwgb.evaluate = function (hs_zddOrd726CUN5, hs_zddOrd826CUN9, hs_zddOrd926CUNd, hs_zddOrd1026CUNh, hs_zddOrd1126CUNl, hs_zddOrd1226CUNp, hs_zddOrd1326CUNt, hs_zddOrd1426CUNx, hs_zddOrd1526CUNB, hs_zddOrd1626CUNF, hs_zddOrd1726CUNJ, hs_a1126CUMF, hs_b26CUMS) {
        var hs_wild26CVRL = hs_a1126CUMF;
        if (hs_a1126CUMF.notEvaluated) {
            hs_wild26CVRL = hs_a1126CUMF.hscall();
        }
        var hs_a1226CUN6 = hs_wild26CVRL.data[0];
        var hs_a1326CUNa = hs_wild26CVRL.data[1];
        var hs_a1426CUNe = hs_wild26CVRL.data[2];
        var hs_a1526CUNi = hs_wild26CVRL.data[3];
        var hs_a1626CUNm = hs_wild26CVRL.data[4];
        var hs_a1726CUNq = hs_wild26CVRL.data[5];
        var hs_a1826CUNu = hs_wild26CVRL.data[6];
        var hs_a1926CUNy = hs_wild26CVRL.data[7];
        var hs_a2026CUNC = hs_wild26CVRL.data[8];
        var hs_a2126CUNG = hs_wild26CVRL.data[9];
        var hs_a2226CUNK = hs_wild26CVRL.data[10];
        var hs_wild126CVRK = hs_b26CUMS;
        if (hs_b26CUMS.notEvaluated) {
            hs_wild126CVRK = hs_b26CUMS.hscall();
        }
        var hs_b126CUN7 = hs_wild126CVRK.data[0];
        var hs_b226CUNb = hs_wild126CVRK.data[1];
        var hs_b326CUNf = hs_wild126CVRK.data[2];
        var hs_b426CUNj = hs_wild126CVRK.data[3];
        var hs_b526CUNn = hs_wild126CVRK.data[4];
        var hs_b626CUNr = hs_wild126CVRK.data[5];
        var hs_b726CUNv = hs_wild126CVRK.data[6];
        var hs_b826CUNz = hs_wild126CVRK.data[7];
        var hs_b926CUND = hs_wild126CVRK.data[8];
        var hs_b1026CUNH = hs_wild126CVRK.data[9];
        var hs_b1126CUNL = hs_wild126CVRK.data[10];
        var hs_wild226CVRM = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CUN5, hs_a1226CUN6, hs_b126CUN7);
        switch (hs_wild226CVRM.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVRN = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CUN9, hs_a1326CUNa, hs_b226CUNb);
            switch (hs_wild326CVRN.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVRO = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CUNd, hs_a1426CUNe, hs_b326CUNf);
                switch (hs_wild426CVRO.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVRP = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CUNh, hs_a1526CUNi, hs_b426CUNj);
                    switch (hs_wild526CVRP.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVRQ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CUNl, hs_a1626CUNm, hs_b526CUNn);
                        switch (hs_wild626CVRQ.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVRR = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CUNp, hs_a1726CUNq, hs_b626CUNr);
                            switch (hs_wild726CVRR.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVRS = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326CUNt, hs_a1826CUNu, hs_b726CUNv);
                                switch (hs_wild826CVRS.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926CVRT = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426CUNx, hs_a1926CUNy, hs_b826CUNz);
                                    switch (hs_wild926CVRT.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026CVRU = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526CUNB, hs_a2026CUNC, hs_b926CUND);
                                        switch (hs_wild1026CVRU.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126CVRV = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626CUNF, hs_a2126CUNG, hs_b1026CUNH);
                                            switch (hs_wild1126CVRV.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1726CUNJ, hs_a2226CUNK, hs_b1126CUNL);
                                            case 3:
                                                var $res = new $hs.Data(3);
                                                $res.data = [];
                                                return $res;
                                            }
                                        case 3:
                                            var $res = new $hs.Data(3);
                                            $res.data = [];
                                            return $res;
                                        }
                                    case 3:
                                        var $res = new $hs.Data(3);
                                        $res.data = [];
                                        return $res;
                                    }
                                case 3:
                                    var $res = new $hs.Data(3);
                                    $res.data = [];
                                    return $res;
                                }
                            case 3:
                                var $res = new $hs.Data(3);
                                $res.data = [];
                                return $res;
                            }
                        case 3:
                            var $res = new $hs.Data(3);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(3);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(3);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(3);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczdp1Ord1025uwhw.evaluate = function (hs_zddOrd726CUNY, hs_zddOrd826CUO0, hs_zddOrd926CUO2, hs_zddOrd1026CUO4, hs_zddOrd1126CUO6, hs_zddOrd1226CUO8, hs_zddOrd1326CUOa, hs_zddOrd1426CUOc, hs_zddOrd1526CUOe, hs_zddOrd1626CUOg, hs_zddOrd1726CUOi) {
        var hs_sat26CVRX = new $hs.Thunk();
        hs_sat26CVRX.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1726CUOi);
        };
        var hs_sat26CVRY = new $hs.Thunk();
        hs_sat26CVRY.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1626CUOg);
        };
        var hs_sat26CVRZ = new $hs.Thunk();
        hs_sat26CVRZ.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1526CUOe);
        };
        var hs_sat26CVS0 = new $hs.Thunk();
        hs_sat26CVS0.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1426CUOc);
        };
        var hs_sat26CVS1 = new $hs.Thunk();
        hs_sat26CVS1.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1326CUOa);
        };
        var hs_sat26CVS2 = new $hs.Thunk();
        hs_sat26CVS2.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1226CUO8);
        };
        var hs_sat26CVS3 = new $hs.Thunk();
        hs_sat26CVS3.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1126CUO6);
        };
        var hs_sat26CVS4 = new $hs.Thunk();
        hs_sat26CVS4.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1026CUO4);
        };
        var hs_sat26CVS5 = new $hs.Thunk();
        hs_sat26CVS5.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd926CUO2);
        };
        var hs_sat26CVS6 = new $hs.Thunk();
        hs_sat26CVS6.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd826CUO0);
        };
        var hs_sat26CVRW = new $hs.Thunk();
        hs_sat26CVRW.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd726CUNY);
        };
        return $hs.modules.GHCziClasses.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_sat26CVRW, hs_sat26CVS6, hs_sat26CVS5, hs_sat26CVS4, hs_sat26CVS3, hs_sat26CVS2, hs_sat26CVS1, hs_sat26CVS0, hs_sat26CVRZ, hs_sat26CVRY, hs_sat26CVRX);
    };
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddOrd726CUOx, hs_zddOrd826CUOy, hs_zddOrd926CUOz, hs_zddOrd1026CUOA, hs_zddOrd1126CUOB, hs_zddOrd1226CUOC, hs_zddOrd1326CUOD, hs_zddOrd1426CUOE, hs_zddOrd1526CUOF, hs_zddOrd1626CUOG, hs_zddOrd1726CUOH) {
        var hs_sat26CVS8 = new $hs.Thunk();
        hs_sat26CVS8.evaluateOnce = function () {
            return hs_zdcmin1725uwi4.hscall(hs_zddOrd726CUOx, hs_zddOrd826CUOy, hs_zddOrd926CUOz, hs_zddOrd1026CUOA, hs_zddOrd1126CUOB, hs_zddOrd1226CUOC, hs_zddOrd1326CUOD, hs_zddOrd1426CUOE, hs_zddOrd1526CUOF, hs_zddOrd1626CUOG, hs_zddOrd1726CUOH);
        };
        var hs_sat26CVS9 = new $hs.Thunk();
        hs_sat26CVS9.evaluateOnce = function () {
            return hs_zdcmax1725uwi5.hscall(hs_zddOrd726CUOx, hs_zddOrd826CUOy, hs_zddOrd926CUOz, hs_zddOrd1026CUOA, hs_zddOrd1126CUOB, hs_zddOrd1226CUOC, hs_zddOrd1326CUOD, hs_zddOrd1426CUOE, hs_zddOrd1526CUOF, hs_zddOrd1626CUOG, hs_zddOrd1726CUOH);
        };
        var hs_sat26CVSa = new $hs.Func(2);
        hs_sat26CVSa.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczlze1525uwaP.hscall(hs_zddOrd726CUOx, hs_zddOrd826CUOy, hs_zddOrd926CUOz, hs_zddOrd1026CUOA, hs_zddOrd1126CUOB, hs_zddOrd1226CUOC, hs_zddOrd1326CUOD, hs_zddOrd1426CUOE, hs_zddOrd1526CUOF, hs_zddOrd1626CUOG, hs_zddOrd1726CUOH, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVSb = new $hs.Func(2);
        hs_sat26CVSb.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczg1525uwca.hscall(hs_zddOrd726CUOx, hs_zddOrd826CUOy, hs_zddOrd926CUOz, hs_zddOrd1026CUOA, hs_zddOrd1126CUOB, hs_zddOrd1226CUOC, hs_zddOrd1326CUOD, hs_zddOrd1426CUOE, hs_zddOrd1526CUOF, hs_zddOrd1626CUOG, hs_zddOrd1726CUOH, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVSc = new $hs.Func(2);
        hs_sat26CVSc.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczgze1525uwdv.hscall(hs_zddOrd726CUOx, hs_zddOrd826CUOy, hs_zddOrd926CUOz, hs_zddOrd1026CUOA, hs_zddOrd1126CUOB, hs_zddOrd1226CUOC, hs_zddOrd1326CUOD, hs_zddOrd1426CUOE, hs_zddOrd1526CUOF, hs_zddOrd1626CUOG, hs_zddOrd1726CUOH, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVSd = new $hs.Func(2);
        hs_sat26CVSd.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczl1525uweQ.hscall(hs_zddOrd726CUOx, hs_zddOrd826CUOy, hs_zddOrd926CUOz, hs_zddOrd1026CUOA, hs_zddOrd1126CUOB, hs_zddOrd1226CUOC, hs_zddOrd1326CUOD, hs_zddOrd1426CUOE, hs_zddOrd1526CUOF, hs_zddOrd1626CUOG, hs_zddOrd1726CUOH, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVSe = new $hs.Func(2);
        hs_sat26CVSe.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdccompare1525uwgb.hscall(hs_zddOrd726CUOx, hs_zddOrd826CUOy, hs_zddOrd926CUOz, hs_zddOrd1026CUOA, hs_zddOrd1126CUOB, hs_zddOrd1226CUOC, hs_zddOrd1326CUOD, hs_zddOrd1426CUOE, hs_zddOrd1526CUOF, hs_zddOrd1626CUOG, hs_zddOrd1726CUOH, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVS7 = new $hs.Thunk();
        hs_sat26CVS7.evaluateOnce = function () {
            return hs_zdczdp1Ord1025uwhw.hscall(hs_zddOrd726CUOx, hs_zddOrd826CUOy, hs_zddOrd926CUOz, hs_zddOrd1026CUOA, hs_zddOrd1126CUOB, hs_zddOrd1226CUOC, hs_zddOrd1326CUOD, hs_zddOrd1426CUOE, hs_zddOrd1526CUOF, hs_zddOrd1626CUOG, hs_zddOrd1726CUOH);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CVS7, hs_sat26CVSe, hs_sat26CVSd, hs_sat26CVSc, hs_sat26CVSb, hs_sat26CVSa, hs_sat26CVS9, hs_sat26CVS8];
        return $res;
    };
    hs_zdcmin1725uwi4.evaluate = function (hs_zddOrd726CUP2, hs_zddOrd826CUP3, hs_zddOrd926CUP4, hs_zddOrd1026CUP5, hs_zddOrd1126CUP6, hs_zddOrd1226CUP7, hs_zddOrd1326CUP8, hs_zddOrd1426CUP9, hs_zddOrd1526CUPa, hs_zddOrd1626CUPb, hs_zddOrd1726CUPc) {
        var hs_zddOrd1826CUPd = new $hs.Thunk();
        hs_zddOrd1826CUPd.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddOrd726CUP2, hs_zddOrd826CUP3, hs_zddOrd926CUP4, hs_zddOrd1026CUP5, hs_zddOrd1126CUP6, hs_zddOrd1226CUP7, hs_zddOrd1326CUP8, hs_zddOrd1426CUP9, hs_zddOrd1526CUPa, hs_zddOrd1626CUPb, hs_zddOrd1726CUPc);
        };
        var hs_sat26CVSf = new $hs.Func(2);
        hs_sat26CVSf.evaluate = function (hs_x26CUPg, hs_y26CUPh) {
            var hs_wild26CVSg = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1826CUPd, hs_x26CUPg, hs_y26CUPh);
            switch (hs_wild26CVSg.tag) {
            case 1:
                if (hs_y26CUPh.notEvaluated) {
                    return hs_y26CUPh.hscall();
                } else {
                    return hs_y26CUPh;
                }
            case 2:
                if (hs_x26CUPg.notEvaluated) {
                    return hs_x26CUPg.hscall();
                } else {
                    return hs_x26CUPg;
                }
            }
        };
        if (hs_sat26CVSf.notEvaluated) {
            return hs_sat26CVSf.hscall();
        } else {
            return hs_sat26CVSf;
        }
    };
    hs_zdcmax1725uwi5.evaluate = function (hs_zddOrd726CUPw, hs_zddOrd826CUPx, hs_zddOrd926CUPy, hs_zddOrd1026CUPz, hs_zddOrd1126CUPA, hs_zddOrd1226CUPB, hs_zddOrd1326CUPC, hs_zddOrd1426CUPD, hs_zddOrd1526CUPE, hs_zddOrd1626CUPF, hs_zddOrd1726CUPG) {
        var hs_zddOrd1826CUPH = new $hs.Thunk();
        hs_zddOrd1826CUPH.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddOrd726CUPw, hs_zddOrd826CUPx, hs_zddOrd926CUPy, hs_zddOrd1026CUPz, hs_zddOrd1126CUPA, hs_zddOrd1226CUPB, hs_zddOrd1326CUPC, hs_zddOrd1426CUPD, hs_zddOrd1526CUPE, hs_zddOrd1626CUPF, hs_zddOrd1726CUPG);
        };
        var hs_sat26CVSh = new $hs.Func(2);
        hs_sat26CVSh.evaluate = function (hs_x26CUPK, hs_y26CUPL) {
            var hs_wild26CVSi = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1826CUPH, hs_x26CUPK, hs_y26CUPL);
            switch (hs_wild26CVSi.tag) {
            case 1:
                if (hs_x26CUPK.notEvaluated) {
                    return hs_x26CUPK.hscall();
                } else {
                    return hs_x26CUPK;
                }
            case 2:
                if (hs_y26CUPL.notEvaluated) {
                    return hs_y26CUPL.hscall();
                } else {
                    return hs_y26CUPL;
                }
            }
        };
        if (hs_sat26CVSh.notEvaluated) {
            return hs_sat26CVSh.hscall();
        } else {
            return hs_sat26CVSh;
        }
    };
    hs_zdczlze1625uwjy.evaluate = function (hs_zddOrd726CUQv, hs_zddOrd826CUQz, hs_zddOrd926CUQD, hs_zddOrd1026CUQH, hs_zddOrd1126CUQL, hs_zddOrd1226CUQP, hs_zddOrd1326CUQT, hs_zddOrd1426CUQX, hs_zddOrd1526CUR1, hs_zddOrd1626CUR5, hs_zddOrd1726CUR9, hs_zddOrd1826CURd, hs_a1126CUQ3, hs_b26CUQh) {
        var hs_wild26CVSk = hs_a1126CUQ3;
        if (hs_a1126CUQ3.notEvaluated) {
            hs_wild26CVSk = hs_a1126CUQ3.hscall();
        }
        var hs_a1226CUQw = hs_wild26CVSk.data[0];
        var hs_a1326CUQA = hs_wild26CVSk.data[1];
        var hs_a1426CUQE = hs_wild26CVSk.data[2];
        var hs_a1526CUQI = hs_wild26CVSk.data[3];
        var hs_a1626CUQM = hs_wild26CVSk.data[4];
        var hs_a1726CUQQ = hs_wild26CVSk.data[5];
        var hs_a1826CUQU = hs_wild26CVSk.data[6];
        var hs_a1926CUQY = hs_wild26CVSk.data[7];
        var hs_a2026CUR2 = hs_wild26CVSk.data[8];
        var hs_a2126CUR6 = hs_wild26CVSk.data[9];
        var hs_a2226CURa = hs_wild26CVSk.data[10];
        var hs_a2326CURe = hs_wild26CVSk.data[11];
        var hs_wild126CVSj = hs_b26CUQh;
        if (hs_b26CUQh.notEvaluated) {
            hs_wild126CVSj = hs_b26CUQh.hscall();
        }
        var hs_b126CUQx = hs_wild126CVSj.data[0];
        var hs_b226CUQB = hs_wild126CVSj.data[1];
        var hs_b326CUQF = hs_wild126CVSj.data[2];
        var hs_b426CUQJ = hs_wild126CVSj.data[3];
        var hs_b526CUQN = hs_wild126CVSj.data[4];
        var hs_b626CUQR = hs_wild126CVSj.data[5];
        var hs_b726CUQV = hs_wild126CVSj.data[6];
        var hs_b826CUQZ = hs_wild126CVSj.data[7];
        var hs_b926CUR3 = hs_wild126CVSj.data[8];
        var hs_b1026CUR7 = hs_wild126CVSj.data[9];
        var hs_b1126CURb = hs_wild126CVSj.data[10];
        var hs_b1226CURf = hs_wild126CVSj.data[11];
        var hs_wild226CVSl = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CUQv, hs_a1226CUQw, hs_b126CUQx);
        switch (hs_wild226CVSl.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVSm = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CUQz, hs_a1326CUQA, hs_b226CUQB);
            switch (hs_wild326CVSm.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVSn = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CUQD, hs_a1426CUQE, hs_b326CUQF);
                switch (hs_wild426CVSn.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVSo = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CUQH, hs_a1526CUQI, hs_b426CUQJ);
                    switch (hs_wild526CVSo.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVSp = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CUQL, hs_a1626CUQM, hs_b526CUQN);
                        switch (hs_wild626CVSp.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVSq = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CUQP, hs_a1726CUQQ, hs_b626CUQR);
                            switch (hs_wild726CVSq.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVSr = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326CUQT, hs_a1826CUQU, hs_b726CUQV);
                                switch (hs_wild826CVSr.tag) {
                                case 1:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926CVSs = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426CUQX, hs_a1926CUQY, hs_b826CUQZ);
                                    switch (hs_wild926CVSs.tag) {
                                    case 1:
                                        var $res = new $hs.Data(2);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026CVSt = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526CUR1, hs_a2026CUR2, hs_b926CUR3);
                                        switch (hs_wild1026CVSt.tag) {
                                        case 1:
                                            var $res = new $hs.Data(2);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126CVSu = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626CUR5, hs_a2126CUR6, hs_b1026CUR7);
                                            switch (hs_wild1126CVSu.tag) {
                                            case 1:
                                                var $res = new $hs.Data(2);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226CVSv = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1726CUR9, hs_a2226CURa, hs_b1126CURb);
                                                switch (hs_wild1226CVSv.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(2);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1826CURd, hs_a2326CURe, hs_b1226CURf);
                                                case 3:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [];
                                                    return $res;
                                                }
                                            case 3:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            }
                                        case 3:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        }
                                    case 3:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    }
                                case 3:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                }
                            case 3:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            }
                        case 3:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczg1625uwl0.evaluate = function (hs_zddOrd726CURX, hs_zddOrd826CUS1, hs_zddOrd926CUS5, hs_zddOrd1026CUS9, hs_zddOrd1126CUSd, hs_zddOrd1226CUSh, hs_zddOrd1326CUSl, hs_zddOrd1426CUSp, hs_zddOrd1526CUSt, hs_zddOrd1626CUSx, hs_zddOrd1726CUSB, hs_zddOrd1826CUSF, hs_a1126CURv, hs_b26CURJ) {
        var hs_wild26CVSx = hs_a1126CURv;
        if (hs_a1126CURv.notEvaluated) {
            hs_wild26CVSx = hs_a1126CURv.hscall();
        }
        var hs_a1226CURY = hs_wild26CVSx.data[0];
        var hs_a1326CUS2 = hs_wild26CVSx.data[1];
        var hs_a1426CUS6 = hs_wild26CVSx.data[2];
        var hs_a1526CUSa = hs_wild26CVSx.data[3];
        var hs_a1626CUSe = hs_wild26CVSx.data[4];
        var hs_a1726CUSi = hs_wild26CVSx.data[5];
        var hs_a1826CUSm = hs_wild26CVSx.data[6];
        var hs_a1926CUSq = hs_wild26CVSx.data[7];
        var hs_a2026CUSu = hs_wild26CVSx.data[8];
        var hs_a2126CUSy = hs_wild26CVSx.data[9];
        var hs_a2226CUSC = hs_wild26CVSx.data[10];
        var hs_a2326CUSG = hs_wild26CVSx.data[11];
        var hs_wild126CVSw = hs_b26CURJ;
        if (hs_b26CURJ.notEvaluated) {
            hs_wild126CVSw = hs_b26CURJ.hscall();
        }
        var hs_b126CURZ = hs_wild126CVSw.data[0];
        var hs_b226CUS3 = hs_wild126CVSw.data[1];
        var hs_b326CUS7 = hs_wild126CVSw.data[2];
        var hs_b426CUSb = hs_wild126CVSw.data[3];
        var hs_b526CUSf = hs_wild126CVSw.data[4];
        var hs_b626CUSj = hs_wild126CVSw.data[5];
        var hs_b726CUSn = hs_wild126CVSw.data[6];
        var hs_b826CUSr = hs_wild126CVSw.data[7];
        var hs_b926CUSv = hs_wild126CVSw.data[8];
        var hs_b1026CUSz = hs_wild126CVSw.data[9];
        var hs_b1126CUSD = hs_wild126CVSw.data[10];
        var hs_b1226CUSH = hs_wild126CVSw.data[11];
        var hs_wild226CVSy = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CURX, hs_a1226CURY, hs_b126CURZ);
        switch (hs_wild226CVSy.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVSz = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CUS1, hs_a1326CUS2, hs_b226CUS3);
            switch (hs_wild326CVSz.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVSA = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CUS5, hs_a1426CUS6, hs_b326CUS7);
                switch (hs_wild426CVSA.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVSB = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CUS9, hs_a1526CUSa, hs_b426CUSb);
                    switch (hs_wild526CVSB.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVSC = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CUSd, hs_a1626CUSe, hs_b526CUSf);
                        switch (hs_wild626CVSC.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVSD = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CUSh, hs_a1726CUSi, hs_b626CUSj);
                            switch (hs_wild726CVSD.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVSE = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326CUSl, hs_a1826CUSm, hs_b726CUSn);
                                switch (hs_wild826CVSE.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926CVSF = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426CUSp, hs_a1926CUSq, hs_b826CUSr);
                                    switch (hs_wild926CVSF.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026CVSG = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526CUSt, hs_a2026CUSu, hs_b926CUSv);
                                        switch (hs_wild1026CVSG.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126CVSH = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626CUSx, hs_a2126CUSy, hs_b1026CUSz);
                                            switch (hs_wild1126CVSH.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226CVSI = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1726CUSB, hs_a2226CUSC, hs_b1126CUSD);
                                                switch (hs_wild1226CVSI.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd1826CUSF, hs_a2326CUSG, hs_b1226CUSH);
                                                case 3:
                                                    var $res = new $hs.Data(2);
                                                    $res.data = [];
                                                    return $res;
                                                }
                                            case 3:
                                                var $res = new $hs.Data(2);
                                                $res.data = [];
                                                return $res;
                                            }
                                        case 3:
                                            var $res = new $hs.Data(2);
                                            $res.data = [];
                                            return $res;
                                        }
                                    case 3:
                                        var $res = new $hs.Data(2);
                                        $res.data = [];
                                        return $res;
                                    }
                                case 3:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                }
                            case 3:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            }
                        case 3:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczgze1625uwms.evaluate = function (hs_zddOrd726CUTp, hs_zddOrd826CUTt, hs_zddOrd926CUTx, hs_zddOrd1026CUTB, hs_zddOrd1126CUTF, hs_zddOrd1226CUTJ, hs_zddOrd1326CUTN, hs_zddOrd1426CUTR, hs_zddOrd1526CUTV, hs_zddOrd1626CUTZ, hs_zddOrd1726CUU3, hs_zddOrd1826CUU7, hs_a1126CUSX, hs_b26CUTb) {
        var hs_wild26CVSK = hs_a1126CUSX;
        if (hs_a1126CUSX.notEvaluated) {
            hs_wild26CVSK = hs_a1126CUSX.hscall();
        }
        var hs_a1226CUTq = hs_wild26CVSK.data[0];
        var hs_a1326CUTu = hs_wild26CVSK.data[1];
        var hs_a1426CUTy = hs_wild26CVSK.data[2];
        var hs_a1526CUTC = hs_wild26CVSK.data[3];
        var hs_a1626CUTG = hs_wild26CVSK.data[4];
        var hs_a1726CUTK = hs_wild26CVSK.data[5];
        var hs_a1826CUTO = hs_wild26CVSK.data[6];
        var hs_a1926CUTS = hs_wild26CVSK.data[7];
        var hs_a2026CUTW = hs_wild26CVSK.data[8];
        var hs_a2126CUU0 = hs_wild26CVSK.data[9];
        var hs_a2226CUU4 = hs_wild26CVSK.data[10];
        var hs_a2326CUU8 = hs_wild26CVSK.data[11];
        var hs_wild126CVSJ = hs_b26CUTb;
        if (hs_b26CUTb.notEvaluated) {
            hs_wild126CVSJ = hs_b26CUTb.hscall();
        }
        var hs_b126CUTr = hs_wild126CVSJ.data[0];
        var hs_b226CUTv = hs_wild126CVSJ.data[1];
        var hs_b326CUTz = hs_wild126CVSJ.data[2];
        var hs_b426CUTD = hs_wild126CVSJ.data[3];
        var hs_b526CUTH = hs_wild126CVSJ.data[4];
        var hs_b626CUTL = hs_wild126CVSJ.data[5];
        var hs_b726CUTP = hs_wild126CVSJ.data[6];
        var hs_b826CUTT = hs_wild126CVSJ.data[7];
        var hs_b926CUTX = hs_wild126CVSJ.data[8];
        var hs_b1026CUU1 = hs_wild126CVSJ.data[9];
        var hs_b1126CUU5 = hs_wild126CVSJ.data[10];
        var hs_b1226CUU9 = hs_wild126CVSJ.data[11];
        var hs_wild226CVSL = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CUTp, hs_a1226CUTq, hs_b126CUTr);
        switch (hs_wild226CVSL.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVSM = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CUTt, hs_a1326CUTu, hs_b226CUTv);
            switch (hs_wild326CVSM.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVSN = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CUTx, hs_a1426CUTy, hs_b326CUTz);
                switch (hs_wild426CVSN.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVSO = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CUTB, hs_a1526CUTC, hs_b426CUTD);
                    switch (hs_wild526CVSO.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVSP = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CUTF, hs_a1626CUTG, hs_b526CUTH);
                        switch (hs_wild626CVSP.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVSQ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CUTJ, hs_a1726CUTK, hs_b626CUTL);
                            switch (hs_wild726CVSQ.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVSR = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326CUTN, hs_a1826CUTO, hs_b726CUTP);
                                switch (hs_wild826CVSR.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926CVSS = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426CUTR, hs_a1926CUTS, hs_b826CUTT);
                                    switch (hs_wild926CVSS.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026CVST = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526CUTV, hs_a2026CUTW, hs_b926CUTX);
                                        switch (hs_wild1026CVST.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126CVSU = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626CUTZ, hs_a2126CUU0, hs_b1026CUU1);
                                            switch (hs_wild1126CVSU.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226CVSV = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1726CUU3, hs_a2226CUU4, hs_b1126CUU5);
                                                switch (hs_wild1226CVSV.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd1826CUU7, hs_a2326CUU8, hs_b1226CUU9);
                                                case 3:
                                                    var $res = new $hs.Data(2);
                                                    $res.data = [];
                                                    return $res;
                                                }
                                            case 3:
                                                var $res = new $hs.Data(2);
                                                $res.data = [];
                                                return $res;
                                            }
                                        case 3:
                                            var $res = new $hs.Data(2);
                                            $res.data = [];
                                            return $res;
                                        }
                                    case 3:
                                        var $res = new $hs.Data(2);
                                        $res.data = [];
                                        return $res;
                                    }
                                case 3:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                }
                            case 3:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            }
                        case 3:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczl1625uwnU.evaluate = function (hs_zddOrd726CUUR, hs_zddOrd826CUUV, hs_zddOrd926CUUZ, hs_zddOrd1026CUV3, hs_zddOrd1126CUV7, hs_zddOrd1226CUVb, hs_zddOrd1326CUVf, hs_zddOrd1426CUVj, hs_zddOrd1526CUVn, hs_zddOrd1626CUVr, hs_zddOrd1726CUVv, hs_zddOrd1826CUVz, hs_a1126CUUp, hs_b26CUUD) {
        var hs_wild26CVSX = hs_a1126CUUp;
        if (hs_a1126CUUp.notEvaluated) {
            hs_wild26CVSX = hs_a1126CUUp.hscall();
        }
        var hs_a1226CUUS = hs_wild26CVSX.data[0];
        var hs_a1326CUUW = hs_wild26CVSX.data[1];
        var hs_a1426CUV0 = hs_wild26CVSX.data[2];
        var hs_a1526CUV4 = hs_wild26CVSX.data[3];
        var hs_a1626CUV8 = hs_wild26CVSX.data[4];
        var hs_a1726CUVc = hs_wild26CVSX.data[5];
        var hs_a1826CUVg = hs_wild26CVSX.data[6];
        var hs_a1926CUVk = hs_wild26CVSX.data[7];
        var hs_a2026CUVo = hs_wild26CVSX.data[8];
        var hs_a2126CUVs = hs_wild26CVSX.data[9];
        var hs_a2226CUVw = hs_wild26CVSX.data[10];
        var hs_a2326CUVA = hs_wild26CVSX.data[11];
        var hs_wild126CVSW = hs_b26CUUD;
        if (hs_b26CUUD.notEvaluated) {
            hs_wild126CVSW = hs_b26CUUD.hscall();
        }
        var hs_b126CUUT = hs_wild126CVSW.data[0];
        var hs_b226CUUX = hs_wild126CVSW.data[1];
        var hs_b326CUV1 = hs_wild126CVSW.data[2];
        var hs_b426CUV5 = hs_wild126CVSW.data[3];
        var hs_b526CUV9 = hs_wild126CVSW.data[4];
        var hs_b626CUVd = hs_wild126CVSW.data[5];
        var hs_b726CUVh = hs_wild126CVSW.data[6];
        var hs_b826CUVl = hs_wild126CVSW.data[7];
        var hs_b926CUVp = hs_wild126CVSW.data[8];
        var hs_b1026CUVt = hs_wild126CVSW.data[9];
        var hs_b1126CUVx = hs_wild126CVSW.data[10];
        var hs_b1226CUVB = hs_wild126CVSW.data[11];
        var hs_wild226CVSY = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CUUR, hs_a1226CUUS, hs_b126CUUT);
        switch (hs_wild226CVSY.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVSZ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CUUV, hs_a1326CUUW, hs_b226CUUX);
            switch (hs_wild326CVSZ.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVT0 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CUUZ, hs_a1426CUV0, hs_b326CUV1);
                switch (hs_wild426CVT0.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVT1 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CUV3, hs_a1526CUV4, hs_b426CUV5);
                    switch (hs_wild526CVT1.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVT2 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CUV7, hs_a1626CUV8, hs_b526CUV9);
                        switch (hs_wild626CVT2.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVT3 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CUVb, hs_a1726CUVc, hs_b626CUVd);
                            switch (hs_wild726CVT3.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVT4 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326CUVf, hs_a1826CUVg, hs_b726CUVh);
                                switch (hs_wild826CVT4.tag) {
                                case 1:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926CVT5 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426CUVj, hs_a1926CUVk, hs_b826CUVl);
                                    switch (hs_wild926CVT5.tag) {
                                    case 1:
                                        var $res = new $hs.Data(2);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026CVT6 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526CUVn, hs_a2026CUVo, hs_b926CUVp);
                                        switch (hs_wild1026CVT6.tag) {
                                        case 1:
                                            var $res = new $hs.Data(2);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126CVT7 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626CUVr, hs_a2126CUVs, hs_b1026CUVt);
                                            switch (hs_wild1126CVT7.tag) {
                                            case 1:
                                                var $res = new $hs.Data(2);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226CVT8 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1726CUVv, hs_a2226CUVw, hs_b1126CUVx);
                                                switch (hs_wild1226CVT8.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(2);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd1826CUVz, hs_a2326CUVA, hs_b1226CUVB);
                                                case 3:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [];
                                                    return $res;
                                                }
                                            case 3:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            }
                                        case 3:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        }
                                    case 3:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    }
                                case 3:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                }
                            case 3:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            }
                        case 3:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdccompare1625uwpm.evaluate = function (hs_zddOrd726CUWj, hs_zddOrd826CUWn, hs_zddOrd926CUWr, hs_zddOrd1026CUWv, hs_zddOrd1126CUWz, hs_zddOrd1226CUWD, hs_zddOrd1326CUWH, hs_zddOrd1426CUWL, hs_zddOrd1526CUWP, hs_zddOrd1626CUWT, hs_zddOrd1726CUWX, hs_zddOrd1826CUX1, hs_a1126CUVR, hs_b26CUW5) {
        var hs_wild26CVTa = hs_a1126CUVR;
        if (hs_a1126CUVR.notEvaluated) {
            hs_wild26CVTa = hs_a1126CUVR.hscall();
        }
        var hs_a1226CUWk = hs_wild26CVTa.data[0];
        var hs_a1326CUWo = hs_wild26CVTa.data[1];
        var hs_a1426CUWs = hs_wild26CVTa.data[2];
        var hs_a1526CUWw = hs_wild26CVTa.data[3];
        var hs_a1626CUWA = hs_wild26CVTa.data[4];
        var hs_a1726CUWE = hs_wild26CVTa.data[5];
        var hs_a1826CUWI = hs_wild26CVTa.data[6];
        var hs_a1926CUWM = hs_wild26CVTa.data[7];
        var hs_a2026CUWQ = hs_wild26CVTa.data[8];
        var hs_a2126CUWU = hs_wild26CVTa.data[9];
        var hs_a2226CUWY = hs_wild26CVTa.data[10];
        var hs_a2326CUX2 = hs_wild26CVTa.data[11];
        var hs_wild126CVT9 = hs_b26CUW5;
        if (hs_b26CUW5.notEvaluated) {
            hs_wild126CVT9 = hs_b26CUW5.hscall();
        }
        var hs_b126CUWl = hs_wild126CVT9.data[0];
        var hs_b226CUWp = hs_wild126CVT9.data[1];
        var hs_b326CUWt = hs_wild126CVT9.data[2];
        var hs_b426CUWx = hs_wild126CVT9.data[3];
        var hs_b526CUWB = hs_wild126CVT9.data[4];
        var hs_b626CUWF = hs_wild126CVT9.data[5];
        var hs_b726CUWJ = hs_wild126CVT9.data[6];
        var hs_b826CUWN = hs_wild126CVT9.data[7];
        var hs_b926CUWR = hs_wild126CVT9.data[8];
        var hs_b1026CUWV = hs_wild126CVT9.data[9];
        var hs_b1126CUWZ = hs_wild126CVT9.data[10];
        var hs_b1226CUX3 = hs_wild126CVT9.data[11];
        var hs_wild226CVTb = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CUWj, hs_a1226CUWk, hs_b126CUWl);
        switch (hs_wild226CVTb.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVTc = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CUWn, hs_a1326CUWo, hs_b226CUWp);
            switch (hs_wild326CVTc.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVTd = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CUWr, hs_a1426CUWs, hs_b326CUWt);
                switch (hs_wild426CVTd.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVTe = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CUWv, hs_a1526CUWw, hs_b426CUWx);
                    switch (hs_wild526CVTe.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVTf = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CUWz, hs_a1626CUWA, hs_b526CUWB);
                        switch (hs_wild626CVTf.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVTg = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CUWD, hs_a1726CUWE, hs_b626CUWF);
                            switch (hs_wild726CVTg.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVTh = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326CUWH, hs_a1826CUWI, hs_b726CUWJ);
                                switch (hs_wild826CVTh.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926CVTi = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426CUWL, hs_a1926CUWM, hs_b826CUWN);
                                    switch (hs_wild926CVTi.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026CVTj = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526CUWP, hs_a2026CUWQ, hs_b926CUWR);
                                        switch (hs_wild1026CVTj.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126CVTk = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626CUWT, hs_a2126CUWU, hs_b1026CUWV);
                                            switch (hs_wild1126CVTk.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226CVTl = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1726CUWX, hs_a2226CUWY, hs_b1126CUWZ);
                                                switch (hs_wild1226CVTl.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1826CUX1, hs_a2326CUX2, hs_b1226CUX3);
                                                case 3:
                                                    var $res = new $hs.Data(3);
                                                    $res.data = [];
                                                    return $res;
                                                }
                                            case 3:
                                                var $res = new $hs.Data(3);
                                                $res.data = [];
                                                return $res;
                                            }
                                        case 3:
                                            var $res = new $hs.Data(3);
                                            $res.data = [];
                                            return $res;
                                        }
                                    case 3:
                                        var $res = new $hs.Data(3);
                                        $res.data = [];
                                        return $res;
                                    }
                                case 3:
                                    var $res = new $hs.Data(3);
                                    $res.data = [];
                                    return $res;
                                }
                            case 3:
                                var $res = new $hs.Data(3);
                                $res.data = [];
                                return $res;
                            }
                        case 3:
                            var $res = new $hs.Data(3);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(3);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(3);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(3);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczdp1Ord1125uwqO.evaluate = function (hs_zddOrd726CUXh, hs_zddOrd826CUXj, hs_zddOrd926CUXl, hs_zddOrd1026CUXn, hs_zddOrd1126CUXp, hs_zddOrd1226CUXr, hs_zddOrd1326CUXt, hs_zddOrd1426CUXv, hs_zddOrd1526CUXx, hs_zddOrd1626CUXz, hs_zddOrd1726CUXB, hs_zddOrd1826CUXD) {
        var hs_sat26CVTn = new $hs.Thunk();
        hs_sat26CVTn.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1826CUXD);
        };
        var hs_sat26CVTo = new $hs.Thunk();
        hs_sat26CVTo.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1726CUXB);
        };
        var hs_sat26CVTp = new $hs.Thunk();
        hs_sat26CVTp.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1626CUXz);
        };
        var hs_sat26CVTq = new $hs.Thunk();
        hs_sat26CVTq.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1526CUXx);
        };
        var hs_sat26CVTr = new $hs.Thunk();
        hs_sat26CVTr.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1426CUXv);
        };
        var hs_sat26CVTs = new $hs.Thunk();
        hs_sat26CVTs.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1326CUXt);
        };
        var hs_sat26CVTt = new $hs.Thunk();
        hs_sat26CVTt.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1226CUXr);
        };
        var hs_sat26CVTu = new $hs.Thunk();
        hs_sat26CVTu.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1126CUXp);
        };
        var hs_sat26CVTv = new $hs.Thunk();
        hs_sat26CVTv.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1026CUXn);
        };
        var hs_sat26CVTw = new $hs.Thunk();
        hs_sat26CVTw.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd926CUXl);
        };
        var hs_sat26CVTx = new $hs.Thunk();
        hs_sat26CVTx.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd826CUXj);
        };
        var hs_sat26CVTm = new $hs.Thunk();
        hs_sat26CVTm.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd726CUXh);
        };
        return $hs.modules.GHCziClasses.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_sat26CVTm, hs_sat26CVTx, hs_sat26CVTw, hs_sat26CVTv, hs_sat26CVTu, hs_sat26CVTt, hs_sat26CVTs, hs_sat26CVTr, hs_sat26CVTq, hs_sat26CVTp, hs_sat26CVTo, hs_sat26CVTn);
    };
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddOrd726CUXT, hs_zddOrd826CUXU, hs_zddOrd926CUXV, hs_zddOrd1026CUXW, hs_zddOrd1126CUXX, hs_zddOrd1226CUXY, hs_zddOrd1326CUXZ, hs_zddOrd1426CUY0, hs_zddOrd1526CUY1, hs_zddOrd1626CUY2, hs_zddOrd1726CUY3, hs_zddOrd1826CUY4) {
        var hs_sat26CVTz = new $hs.Thunk();
        hs_sat26CVTz.evaluateOnce = function () {
            return hs_zdcmin1825uwrp.hscall(hs_zddOrd726CUXT, hs_zddOrd826CUXU, hs_zddOrd926CUXV, hs_zddOrd1026CUXW, hs_zddOrd1126CUXX, hs_zddOrd1226CUXY, hs_zddOrd1326CUXZ, hs_zddOrd1426CUY0, hs_zddOrd1526CUY1, hs_zddOrd1626CUY2, hs_zddOrd1726CUY3, hs_zddOrd1826CUY4);
        };
        var hs_sat26CVTA = new $hs.Thunk();
        hs_sat26CVTA.evaluateOnce = function () {
            return hs_zdcmax1825uwrq.hscall(hs_zddOrd726CUXT, hs_zddOrd826CUXU, hs_zddOrd926CUXV, hs_zddOrd1026CUXW, hs_zddOrd1126CUXX, hs_zddOrd1226CUXY, hs_zddOrd1326CUXZ, hs_zddOrd1426CUY0, hs_zddOrd1526CUY1, hs_zddOrd1626CUY2, hs_zddOrd1726CUY3, hs_zddOrd1826CUY4);
        };
        var hs_sat26CVTB = new $hs.Func(2);
        hs_sat26CVTB.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczlze1625uwjy.hscall(hs_zddOrd726CUXT, hs_zddOrd826CUXU, hs_zddOrd926CUXV, hs_zddOrd1026CUXW, hs_zddOrd1126CUXX, hs_zddOrd1226CUXY, hs_zddOrd1326CUXZ, hs_zddOrd1426CUY0, hs_zddOrd1526CUY1, hs_zddOrd1626CUY2, hs_zddOrd1726CUY3, hs_zddOrd1826CUY4, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVTC = new $hs.Func(2);
        hs_sat26CVTC.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczg1625uwl0.hscall(hs_zddOrd726CUXT, hs_zddOrd826CUXU, hs_zddOrd926CUXV, hs_zddOrd1026CUXW, hs_zddOrd1126CUXX, hs_zddOrd1226CUXY, hs_zddOrd1326CUXZ, hs_zddOrd1426CUY0, hs_zddOrd1526CUY1, hs_zddOrd1626CUY2, hs_zddOrd1726CUY3, hs_zddOrd1826CUY4, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVTD = new $hs.Func(2);
        hs_sat26CVTD.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczgze1625uwms.hscall(hs_zddOrd726CUXT, hs_zddOrd826CUXU, hs_zddOrd926CUXV, hs_zddOrd1026CUXW, hs_zddOrd1126CUXX, hs_zddOrd1226CUXY, hs_zddOrd1326CUXZ, hs_zddOrd1426CUY0, hs_zddOrd1526CUY1, hs_zddOrd1626CUY2, hs_zddOrd1726CUY3, hs_zddOrd1826CUY4, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVTE = new $hs.Func(2);
        hs_sat26CVTE.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczl1625uwnU.hscall(hs_zddOrd726CUXT, hs_zddOrd826CUXU, hs_zddOrd926CUXV, hs_zddOrd1026CUXW, hs_zddOrd1126CUXX, hs_zddOrd1226CUXY, hs_zddOrd1326CUXZ, hs_zddOrd1426CUY0, hs_zddOrd1526CUY1, hs_zddOrd1626CUY2, hs_zddOrd1726CUY3, hs_zddOrd1826CUY4, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVTF = new $hs.Func(2);
        hs_sat26CVTF.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdccompare1625uwpm.hscall(hs_zddOrd726CUXT, hs_zddOrd826CUXU, hs_zddOrd926CUXV, hs_zddOrd1026CUXW, hs_zddOrd1126CUXX, hs_zddOrd1226CUXY, hs_zddOrd1326CUXZ, hs_zddOrd1426CUY0, hs_zddOrd1526CUY1, hs_zddOrd1626CUY2, hs_zddOrd1726CUY3, hs_zddOrd1826CUY4, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVTy = new $hs.Thunk();
        hs_sat26CVTy.evaluateOnce = function () {
            return hs_zdczdp1Ord1125uwqO.hscall(hs_zddOrd726CUXT, hs_zddOrd826CUXU, hs_zddOrd926CUXV, hs_zddOrd1026CUXW, hs_zddOrd1126CUXX, hs_zddOrd1226CUXY, hs_zddOrd1326CUXZ, hs_zddOrd1426CUY0, hs_zddOrd1526CUY1, hs_zddOrd1626CUY2, hs_zddOrd1726CUY3, hs_zddOrd1826CUY4);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CVTy, hs_sat26CVTF, hs_sat26CVTE, hs_sat26CVTD, hs_sat26CVTC, hs_sat26CVTB, hs_sat26CVTA, hs_sat26CVTz];
        return $res;
    };
    hs_zdcmin1825uwrp.evaluate = function (hs_zddOrd726CUYq, hs_zddOrd826CUYr, hs_zddOrd926CUYs, hs_zddOrd1026CUYt, hs_zddOrd1126CUYu, hs_zddOrd1226CUYv, hs_zddOrd1326CUYw, hs_zddOrd1426CUYx, hs_zddOrd1526CUYy, hs_zddOrd1626CUYz, hs_zddOrd1726CUYA, hs_zddOrd1826CUYB) {
        var hs_zddOrd1926CUYC = new $hs.Thunk();
        hs_zddOrd1926CUYC.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddOrd726CUYq, hs_zddOrd826CUYr, hs_zddOrd926CUYs, hs_zddOrd1026CUYt, hs_zddOrd1126CUYu, hs_zddOrd1226CUYv, hs_zddOrd1326CUYw, hs_zddOrd1426CUYx, hs_zddOrd1526CUYy, hs_zddOrd1626CUYz, hs_zddOrd1726CUYA, hs_zddOrd1826CUYB);
        };
        var hs_sat26CVTG = new $hs.Func(2);
        hs_sat26CVTG.evaluate = function (hs_x26CUYF, hs_y26CUYG) {
            var hs_wild26CVTH = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1926CUYC, hs_x26CUYF, hs_y26CUYG);
            switch (hs_wild26CVTH.tag) {
            case 1:
                if (hs_y26CUYG.notEvaluated) {
                    return hs_y26CUYG.hscall();
                } else {
                    return hs_y26CUYG;
                }
            case 2:
                if (hs_x26CUYF.notEvaluated) {
                    return hs_x26CUYF.hscall();
                } else {
                    return hs_x26CUYF;
                }
            }
        };
        if (hs_sat26CVTG.notEvaluated) {
            return hs_sat26CVTG.hscall();
        } else {
            return hs_sat26CVTG;
        }
    };
    hs_zdcmax1825uwrq.evaluate = function (hs_zddOrd726CUYW, hs_zddOrd826CUYX, hs_zddOrd926CUYY, hs_zddOrd1026CUYZ, hs_zddOrd1126CUZ0, hs_zddOrd1226CUZ1, hs_zddOrd1326CUZ2, hs_zddOrd1426CUZ3, hs_zddOrd1526CUZ4, hs_zddOrd1626CUZ5, hs_zddOrd1726CUZ6, hs_zddOrd1826CUZ7) {
        var hs_zddOrd1926CUZ8 = new $hs.Thunk();
        hs_zddOrd1926CUZ8.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddOrd726CUYW, hs_zddOrd826CUYX, hs_zddOrd926CUYY, hs_zddOrd1026CUYZ, hs_zddOrd1126CUZ0, hs_zddOrd1226CUZ1, hs_zddOrd1326CUZ2, hs_zddOrd1426CUZ3, hs_zddOrd1526CUZ4, hs_zddOrd1626CUZ5, hs_zddOrd1726CUZ6, hs_zddOrd1826CUZ7);
        };
        var hs_sat26CVTI = new $hs.Func(2);
        hs_sat26CVTI.evaluate = function (hs_x26CUZb, hs_y26CUZc) {
            var hs_wild26CVTJ = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1926CUZ8, hs_x26CUZb, hs_y26CUZc);
            switch (hs_wild26CVTJ.tag) {
            case 1:
                if (hs_x26CUZb.notEvaluated) {
                    return hs_x26CUZb.hscall();
                } else {
                    return hs_x26CUZb;
                }
            case 2:
                if (hs_y26CUZc.notEvaluated) {
                    return hs_y26CUZc.hscall();
                } else {
                    return hs_y26CUZc;
                }
            }
        };
        if (hs_sat26CVTI.notEvaluated) {
            return hs_sat26CVTI.hscall();
        } else {
            return hs_sat26CVTI;
        }
    };
    hs_zdczlze1725uwsZ.evaluate = function (hs_zddOrd726CUZZ, hs_zddOrd826CV03, hs_zddOrd926CV07, hs_zddOrd1026CV0b, hs_zddOrd1126CV0f, hs_zddOrd1226CV0j, hs_zddOrd1326CV0n, hs_zddOrd1426CV0r, hs_zddOrd1526CV0v, hs_zddOrd1626CV0z, hs_zddOrd1726CV0D, hs_zddOrd1826CV0H, hs_zddOrd1926CV0L, hs_a1126CUZv, hs_b26CUZK) {
        var hs_wild26CVTL = hs_a1126CUZv;
        if (hs_a1126CUZv.notEvaluated) {
            hs_wild26CVTL = hs_a1126CUZv.hscall();
        }
        var hs_a1226CV00 = hs_wild26CVTL.data[0];
        var hs_a1326CV04 = hs_wild26CVTL.data[1];
        var hs_a1426CV08 = hs_wild26CVTL.data[2];
        var hs_a1526CV0c = hs_wild26CVTL.data[3];
        var hs_a1626CV0g = hs_wild26CVTL.data[4];
        var hs_a1726CV0k = hs_wild26CVTL.data[5];
        var hs_a1826CV0o = hs_wild26CVTL.data[6];
        var hs_a1926CV0s = hs_wild26CVTL.data[7];
        var hs_a2026CV0w = hs_wild26CVTL.data[8];
        var hs_a2126CV0A = hs_wild26CVTL.data[9];
        var hs_a2226CV0E = hs_wild26CVTL.data[10];
        var hs_a2326CV0I = hs_wild26CVTL.data[11];
        var hs_a2426CV0M = hs_wild26CVTL.data[12];
        var hs_wild126CVTK = hs_b26CUZK;
        if (hs_b26CUZK.notEvaluated) {
            hs_wild126CVTK = hs_b26CUZK.hscall();
        }
        var hs_b126CV01 = hs_wild126CVTK.data[0];
        var hs_b226CV05 = hs_wild126CVTK.data[1];
        var hs_b326CV09 = hs_wild126CVTK.data[2];
        var hs_b426CV0d = hs_wild126CVTK.data[3];
        var hs_b526CV0h = hs_wild126CVTK.data[4];
        var hs_b626CV0l = hs_wild126CVTK.data[5];
        var hs_b726CV0p = hs_wild126CVTK.data[6];
        var hs_b826CV0t = hs_wild126CVTK.data[7];
        var hs_b926CV0x = hs_wild126CVTK.data[8];
        var hs_b1026CV0B = hs_wild126CVTK.data[9];
        var hs_b1126CV0F = hs_wild126CVTK.data[10];
        var hs_b1226CV0J = hs_wild126CVTK.data[11];
        var hs_b1326CV0N = hs_wild126CVTK.data[12];
        var hs_wild226CVTM = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CUZZ, hs_a1226CV00, hs_b126CV01);
        switch (hs_wild226CVTM.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVTN = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CV03, hs_a1326CV04, hs_b226CV05);
            switch (hs_wild326CVTN.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVTO = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CV07, hs_a1426CV08, hs_b326CV09);
                switch (hs_wild426CVTO.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVTP = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CV0b, hs_a1526CV0c, hs_b426CV0d);
                    switch (hs_wild526CVTP.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVTQ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CV0f, hs_a1626CV0g, hs_b526CV0h);
                        switch (hs_wild626CVTQ.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVTR = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CV0j, hs_a1726CV0k, hs_b626CV0l);
                            switch (hs_wild726CVTR.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVTS = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326CV0n, hs_a1826CV0o, hs_b726CV0p);
                                switch (hs_wild826CVTS.tag) {
                                case 1:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926CVTT = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426CV0r, hs_a1926CV0s, hs_b826CV0t);
                                    switch (hs_wild926CVTT.tag) {
                                    case 1:
                                        var $res = new $hs.Data(2);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026CVTU = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526CV0v, hs_a2026CV0w, hs_b926CV0x);
                                        switch (hs_wild1026CVTU.tag) {
                                        case 1:
                                            var $res = new $hs.Data(2);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126CVTV = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626CV0z, hs_a2126CV0A, hs_b1026CV0B);
                                            switch (hs_wild1126CVTV.tag) {
                                            case 1:
                                                var $res = new $hs.Data(2);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226CVTW = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1726CV0D, hs_a2226CV0E, hs_b1126CV0F);
                                                switch (hs_wild1226CVTW.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(2);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    var hs_wild1326CVTX = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1826CV0H, hs_a2326CV0I, hs_b1226CV0J);
                                                    switch (hs_wild1326CVTX.tag) {
                                                    case 1:
                                                        var $res = new $hs.Data(2);
                                                        $res.data = [];
                                                        return $res;
                                                    case 2:
                                                        return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1926CV0L, hs_a2426CV0M, hs_b1326CV0N);
                                                    case 3:
                                                        var $res = new $hs.Data(1);
                                                        $res.data = [];
                                                        return $res;
                                                    }
                                                case 3:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [];
                                                    return $res;
                                                }
                                            case 3:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            }
                                        case 3:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        }
                                    case 3:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    }
                                case 3:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                }
                            case 3:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            }
                        case 3:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczg1725uwuy.evaluate = function (hs_zddOrd726CV1y, hs_zddOrd826CV1C, hs_zddOrd926CV1G, hs_zddOrd1026CV1K, hs_zddOrd1126CV1O, hs_zddOrd1226CV1S, hs_zddOrd1326CV1W, hs_zddOrd1426CV20, hs_zddOrd1526CV24, hs_zddOrd1626CV28, hs_zddOrd1726CV2c, hs_zddOrd1826CV2g, hs_zddOrd1926CV2k, hs_a1126CV14, hs_b26CV1j) {
        var hs_wild26CVTZ = hs_a1126CV14;
        if (hs_a1126CV14.notEvaluated) {
            hs_wild26CVTZ = hs_a1126CV14.hscall();
        }
        var hs_a1226CV1z = hs_wild26CVTZ.data[0];
        var hs_a1326CV1D = hs_wild26CVTZ.data[1];
        var hs_a1426CV1H = hs_wild26CVTZ.data[2];
        var hs_a1526CV1L = hs_wild26CVTZ.data[3];
        var hs_a1626CV1P = hs_wild26CVTZ.data[4];
        var hs_a1726CV1T = hs_wild26CVTZ.data[5];
        var hs_a1826CV1X = hs_wild26CVTZ.data[6];
        var hs_a1926CV21 = hs_wild26CVTZ.data[7];
        var hs_a2026CV25 = hs_wild26CVTZ.data[8];
        var hs_a2126CV29 = hs_wild26CVTZ.data[9];
        var hs_a2226CV2d = hs_wild26CVTZ.data[10];
        var hs_a2326CV2h = hs_wild26CVTZ.data[11];
        var hs_a2426CV2l = hs_wild26CVTZ.data[12];
        var hs_wild126CVTY = hs_b26CV1j;
        if (hs_b26CV1j.notEvaluated) {
            hs_wild126CVTY = hs_b26CV1j.hscall();
        }
        var hs_b126CV1A = hs_wild126CVTY.data[0];
        var hs_b226CV1E = hs_wild126CVTY.data[1];
        var hs_b326CV1I = hs_wild126CVTY.data[2];
        var hs_b426CV1M = hs_wild126CVTY.data[3];
        var hs_b526CV1Q = hs_wild126CVTY.data[4];
        var hs_b626CV1U = hs_wild126CVTY.data[5];
        var hs_b726CV1Y = hs_wild126CVTY.data[6];
        var hs_b826CV22 = hs_wild126CVTY.data[7];
        var hs_b926CV26 = hs_wild126CVTY.data[8];
        var hs_b1026CV2a = hs_wild126CVTY.data[9];
        var hs_b1126CV2e = hs_wild126CVTY.data[10];
        var hs_b1226CV2i = hs_wild126CVTY.data[11];
        var hs_b1326CV2m = hs_wild126CVTY.data[12];
        var hs_wild226CVU0 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CV1y, hs_a1226CV1z, hs_b126CV1A);
        switch (hs_wild226CVU0.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVU1 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CV1C, hs_a1326CV1D, hs_b226CV1E);
            switch (hs_wild326CVU1.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVU2 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CV1G, hs_a1426CV1H, hs_b326CV1I);
                switch (hs_wild426CVU2.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVU3 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CV1K, hs_a1526CV1L, hs_b426CV1M);
                    switch (hs_wild526CVU3.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVU4 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CV1O, hs_a1626CV1P, hs_b526CV1Q);
                        switch (hs_wild626CVU4.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVU5 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CV1S, hs_a1726CV1T, hs_b626CV1U);
                            switch (hs_wild726CVU5.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVU6 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326CV1W, hs_a1826CV1X, hs_b726CV1Y);
                                switch (hs_wild826CVU6.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926CVU7 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426CV20, hs_a1926CV21, hs_b826CV22);
                                    switch (hs_wild926CVU7.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026CVU8 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526CV24, hs_a2026CV25, hs_b926CV26);
                                        switch (hs_wild1026CVU8.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126CVU9 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626CV28, hs_a2126CV29, hs_b1026CV2a);
                                            switch (hs_wild1126CVU9.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226CVUa = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1726CV2c, hs_a2226CV2d, hs_b1126CV2e);
                                                switch (hs_wild1226CVUa.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    var hs_wild1326CVUb = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1826CV2g, hs_a2326CV2h, hs_b1226CV2i);
                                                    switch (hs_wild1326CVUb.tag) {
                                                    case 1:
                                                        var $res = new $hs.Data(1);
                                                        $res.data = [];
                                                        return $res;
                                                    case 2:
                                                        return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd1926CV2k, hs_a2426CV2l, hs_b1326CV2m);
                                                    case 3:
                                                        var $res = new $hs.Data(2);
                                                        $res.data = [];
                                                        return $res;
                                                    }
                                                case 3:
                                                    var $res = new $hs.Data(2);
                                                    $res.data = [];
                                                    return $res;
                                                }
                                            case 3:
                                                var $res = new $hs.Data(2);
                                                $res.data = [];
                                                return $res;
                                            }
                                        case 3:
                                            var $res = new $hs.Data(2);
                                            $res.data = [];
                                            return $res;
                                        }
                                    case 3:
                                        var $res = new $hs.Data(2);
                                        $res.data = [];
                                        return $res;
                                    }
                                case 3:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                }
                            case 3:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            }
                        case 3:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczgze1725uww7.evaluate = function (hs_zddOrd726CV37, hs_zddOrd826CV3b, hs_zddOrd926CV3f, hs_zddOrd1026CV3j, hs_zddOrd1126CV3n, hs_zddOrd1226CV3r, hs_zddOrd1326CV3v, hs_zddOrd1426CV3z, hs_zddOrd1526CV3D, hs_zddOrd1626CV3H, hs_zddOrd1726CV3L, hs_zddOrd1826CV3P, hs_zddOrd1926CV3T, hs_a1126CV2D, hs_b26CV2S) {
        var hs_wild26CVUd = hs_a1126CV2D;
        if (hs_a1126CV2D.notEvaluated) {
            hs_wild26CVUd = hs_a1126CV2D.hscall();
        }
        var hs_a1226CV38 = hs_wild26CVUd.data[0];
        var hs_a1326CV3c = hs_wild26CVUd.data[1];
        var hs_a1426CV3g = hs_wild26CVUd.data[2];
        var hs_a1526CV3k = hs_wild26CVUd.data[3];
        var hs_a1626CV3o = hs_wild26CVUd.data[4];
        var hs_a1726CV3s = hs_wild26CVUd.data[5];
        var hs_a1826CV3w = hs_wild26CVUd.data[6];
        var hs_a1926CV3A = hs_wild26CVUd.data[7];
        var hs_a2026CV3E = hs_wild26CVUd.data[8];
        var hs_a2126CV3I = hs_wild26CVUd.data[9];
        var hs_a2226CV3M = hs_wild26CVUd.data[10];
        var hs_a2326CV3Q = hs_wild26CVUd.data[11];
        var hs_a2426CV3U = hs_wild26CVUd.data[12];
        var hs_wild126CVUc = hs_b26CV2S;
        if (hs_b26CV2S.notEvaluated) {
            hs_wild126CVUc = hs_b26CV2S.hscall();
        }
        var hs_b126CV39 = hs_wild126CVUc.data[0];
        var hs_b226CV3d = hs_wild126CVUc.data[1];
        var hs_b326CV3h = hs_wild126CVUc.data[2];
        var hs_b426CV3l = hs_wild126CVUc.data[3];
        var hs_b526CV3p = hs_wild126CVUc.data[4];
        var hs_b626CV3t = hs_wild126CVUc.data[5];
        var hs_b726CV3x = hs_wild126CVUc.data[6];
        var hs_b826CV3B = hs_wild126CVUc.data[7];
        var hs_b926CV3F = hs_wild126CVUc.data[8];
        var hs_b1026CV3J = hs_wild126CVUc.data[9];
        var hs_b1126CV3N = hs_wild126CVUc.data[10];
        var hs_b1226CV3R = hs_wild126CVUc.data[11];
        var hs_b1326CV3V = hs_wild126CVUc.data[12];
        var hs_wild226CVUe = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CV37, hs_a1226CV38, hs_b126CV39);
        switch (hs_wild226CVUe.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVUf = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CV3b, hs_a1326CV3c, hs_b226CV3d);
            switch (hs_wild326CVUf.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVUg = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CV3f, hs_a1426CV3g, hs_b326CV3h);
                switch (hs_wild426CVUg.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVUh = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CV3j, hs_a1526CV3k, hs_b426CV3l);
                    switch (hs_wild526CVUh.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVUi = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CV3n, hs_a1626CV3o, hs_b526CV3p);
                        switch (hs_wild626CVUi.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVUj = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CV3r, hs_a1726CV3s, hs_b626CV3t);
                            switch (hs_wild726CVUj.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVUk = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326CV3v, hs_a1826CV3w, hs_b726CV3x);
                                switch (hs_wild826CVUk.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926CVUl = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426CV3z, hs_a1926CV3A, hs_b826CV3B);
                                    switch (hs_wild926CVUl.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026CVUm = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526CV3D, hs_a2026CV3E, hs_b926CV3F);
                                        switch (hs_wild1026CVUm.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126CVUn = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626CV3H, hs_a2126CV3I, hs_b1026CV3J);
                                            switch (hs_wild1126CVUn.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226CVUo = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1726CV3L, hs_a2226CV3M, hs_b1126CV3N);
                                                switch (hs_wild1226CVUo.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    var hs_wild1326CVUp = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1826CV3P, hs_a2326CV3Q, hs_b1226CV3R);
                                                    switch (hs_wild1326CVUp.tag) {
                                                    case 1:
                                                        var $res = new $hs.Data(1);
                                                        $res.data = [];
                                                        return $res;
                                                    case 2:
                                                        return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd1926CV3T, hs_a2426CV3U, hs_b1326CV3V);
                                                    case 3:
                                                        var $res = new $hs.Data(2);
                                                        $res.data = [];
                                                        return $res;
                                                    }
                                                case 3:
                                                    var $res = new $hs.Data(2);
                                                    $res.data = [];
                                                    return $res;
                                                }
                                            case 3:
                                                var $res = new $hs.Data(2);
                                                $res.data = [];
                                                return $res;
                                            }
                                        case 3:
                                            var $res = new $hs.Data(2);
                                            $res.data = [];
                                            return $res;
                                        }
                                    case 3:
                                        var $res = new $hs.Data(2);
                                        $res.data = [];
                                        return $res;
                                    }
                                case 3:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                }
                            case 3:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            }
                        case 3:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczl1725uwxG.evaluate = function (hs_zddOrd726CV4G, hs_zddOrd826CV4K, hs_zddOrd926CV4O, hs_zddOrd1026CV4S, hs_zddOrd1126CV4W, hs_zddOrd1226CV50, hs_zddOrd1326CV54, hs_zddOrd1426CV58, hs_zddOrd1526CV5c, hs_zddOrd1626CV5g, hs_zddOrd1726CV5k, hs_zddOrd1826CV5o, hs_zddOrd1926CV5s, hs_a1126CV4c, hs_b26CV4r) {
        var hs_wild26CVUr = hs_a1126CV4c;
        if (hs_a1126CV4c.notEvaluated) {
            hs_wild26CVUr = hs_a1126CV4c.hscall();
        }
        var hs_a1226CV4H = hs_wild26CVUr.data[0];
        var hs_a1326CV4L = hs_wild26CVUr.data[1];
        var hs_a1426CV4P = hs_wild26CVUr.data[2];
        var hs_a1526CV4T = hs_wild26CVUr.data[3];
        var hs_a1626CV4X = hs_wild26CVUr.data[4];
        var hs_a1726CV51 = hs_wild26CVUr.data[5];
        var hs_a1826CV55 = hs_wild26CVUr.data[6];
        var hs_a1926CV59 = hs_wild26CVUr.data[7];
        var hs_a2026CV5d = hs_wild26CVUr.data[8];
        var hs_a2126CV5h = hs_wild26CVUr.data[9];
        var hs_a2226CV5l = hs_wild26CVUr.data[10];
        var hs_a2326CV5p = hs_wild26CVUr.data[11];
        var hs_a2426CV5t = hs_wild26CVUr.data[12];
        var hs_wild126CVUq = hs_b26CV4r;
        if (hs_b26CV4r.notEvaluated) {
            hs_wild126CVUq = hs_b26CV4r.hscall();
        }
        var hs_b126CV4I = hs_wild126CVUq.data[0];
        var hs_b226CV4M = hs_wild126CVUq.data[1];
        var hs_b326CV4Q = hs_wild126CVUq.data[2];
        var hs_b426CV4U = hs_wild126CVUq.data[3];
        var hs_b526CV4Y = hs_wild126CVUq.data[4];
        var hs_b626CV52 = hs_wild126CVUq.data[5];
        var hs_b726CV56 = hs_wild126CVUq.data[6];
        var hs_b826CV5a = hs_wild126CVUq.data[7];
        var hs_b926CV5e = hs_wild126CVUq.data[8];
        var hs_b1026CV5i = hs_wild126CVUq.data[9];
        var hs_b1126CV5m = hs_wild126CVUq.data[10];
        var hs_b1226CV5q = hs_wild126CVUq.data[11];
        var hs_b1326CV5u = hs_wild126CVUq.data[12];
        var hs_wild226CVUs = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CV4G, hs_a1226CV4H, hs_b126CV4I);
        switch (hs_wild226CVUs.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVUt = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CV4K, hs_a1326CV4L, hs_b226CV4M);
            switch (hs_wild326CVUt.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVUu = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CV4O, hs_a1426CV4P, hs_b326CV4Q);
                switch (hs_wild426CVUu.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVUv = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CV4S, hs_a1526CV4T, hs_b426CV4U);
                    switch (hs_wild526CVUv.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVUw = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CV4W, hs_a1626CV4X, hs_b526CV4Y);
                        switch (hs_wild626CVUw.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVUx = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CV50, hs_a1726CV51, hs_b626CV52);
                            switch (hs_wild726CVUx.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVUy = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326CV54, hs_a1826CV55, hs_b726CV56);
                                switch (hs_wild826CVUy.tag) {
                                case 1:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926CVUz = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426CV58, hs_a1926CV59, hs_b826CV5a);
                                    switch (hs_wild926CVUz.tag) {
                                    case 1:
                                        var $res = new $hs.Data(2);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026CVUA = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526CV5c, hs_a2026CV5d, hs_b926CV5e);
                                        switch (hs_wild1026CVUA.tag) {
                                        case 1:
                                            var $res = new $hs.Data(2);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126CVUB = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626CV5g, hs_a2126CV5h, hs_b1026CV5i);
                                            switch (hs_wild1126CVUB.tag) {
                                            case 1:
                                                var $res = new $hs.Data(2);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226CVUC = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1726CV5k, hs_a2226CV5l, hs_b1126CV5m);
                                                switch (hs_wild1226CVUC.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(2);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    var hs_wild1326CVUD = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1826CV5o, hs_a2326CV5p, hs_b1226CV5q);
                                                    switch (hs_wild1326CVUD.tag) {
                                                    case 1:
                                                        var $res = new $hs.Data(2);
                                                        $res.data = [];
                                                        return $res;
                                                    case 2:
                                                        return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd1926CV5s, hs_a2426CV5t, hs_b1326CV5u);
                                                    case 3:
                                                        var $res = new $hs.Data(1);
                                                        $res.data = [];
                                                        return $res;
                                                    }
                                                case 3:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [];
                                                    return $res;
                                                }
                                            case 3:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            }
                                        case 3:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        }
                                    case 3:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    }
                                case 3:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                }
                            case 3:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            }
                        case 3:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdccompare1725uwzf.evaluate = function (hs_zddOrd726CV6f, hs_zddOrd826CV6j, hs_zddOrd926CV6n, hs_zddOrd1026CV6r, hs_zddOrd1126CV6v, hs_zddOrd1226CV6z, hs_zddOrd1326CV6D, hs_zddOrd1426CV6H, hs_zddOrd1526CV6L, hs_zddOrd1626CV6P, hs_zddOrd1726CV6T, hs_zddOrd1826CV6X, hs_zddOrd1926CV71, hs_a1126CV5L, hs_b26CV60) {
        var hs_wild26CVUF = hs_a1126CV5L;
        if (hs_a1126CV5L.notEvaluated) {
            hs_wild26CVUF = hs_a1126CV5L.hscall();
        }
        var hs_a1226CV6g = hs_wild26CVUF.data[0];
        var hs_a1326CV6k = hs_wild26CVUF.data[1];
        var hs_a1426CV6o = hs_wild26CVUF.data[2];
        var hs_a1526CV6s = hs_wild26CVUF.data[3];
        var hs_a1626CV6w = hs_wild26CVUF.data[4];
        var hs_a1726CV6A = hs_wild26CVUF.data[5];
        var hs_a1826CV6E = hs_wild26CVUF.data[6];
        var hs_a1926CV6I = hs_wild26CVUF.data[7];
        var hs_a2026CV6M = hs_wild26CVUF.data[8];
        var hs_a2126CV6Q = hs_wild26CVUF.data[9];
        var hs_a2226CV6U = hs_wild26CVUF.data[10];
        var hs_a2326CV6Y = hs_wild26CVUF.data[11];
        var hs_a2426CV72 = hs_wild26CVUF.data[12];
        var hs_wild126CVUE = hs_b26CV60;
        if (hs_b26CV60.notEvaluated) {
            hs_wild126CVUE = hs_b26CV60.hscall();
        }
        var hs_b126CV6h = hs_wild126CVUE.data[0];
        var hs_b226CV6l = hs_wild126CVUE.data[1];
        var hs_b326CV6p = hs_wild126CVUE.data[2];
        var hs_b426CV6t = hs_wild126CVUE.data[3];
        var hs_b526CV6x = hs_wild126CVUE.data[4];
        var hs_b626CV6B = hs_wild126CVUE.data[5];
        var hs_b726CV6F = hs_wild126CVUE.data[6];
        var hs_b826CV6J = hs_wild126CVUE.data[7];
        var hs_b926CV6N = hs_wild126CVUE.data[8];
        var hs_b1026CV6R = hs_wild126CVUE.data[9];
        var hs_b1126CV6V = hs_wild126CVUE.data[10];
        var hs_b1226CV6Z = hs_wild126CVUE.data[11];
        var hs_b1326CV73 = hs_wild126CVUE.data[12];
        var hs_wild226CVUG = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CV6f, hs_a1226CV6g, hs_b126CV6h);
        switch (hs_wild226CVUG.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVUH = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CV6j, hs_a1326CV6k, hs_b226CV6l);
            switch (hs_wild326CVUH.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVUI = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CV6n, hs_a1426CV6o, hs_b326CV6p);
                switch (hs_wild426CVUI.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVUJ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CV6r, hs_a1526CV6s, hs_b426CV6t);
                    switch (hs_wild526CVUJ.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVUK = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CV6v, hs_a1626CV6w, hs_b526CV6x);
                        switch (hs_wild626CVUK.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVUL = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CV6z, hs_a1726CV6A, hs_b626CV6B);
                            switch (hs_wild726CVUL.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVUM = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326CV6D, hs_a1826CV6E, hs_b726CV6F);
                                switch (hs_wild826CVUM.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926CVUN = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426CV6H, hs_a1926CV6I, hs_b826CV6J);
                                    switch (hs_wild926CVUN.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026CVUO = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526CV6L, hs_a2026CV6M, hs_b926CV6N);
                                        switch (hs_wild1026CVUO.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126CVUP = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626CV6P, hs_a2126CV6Q, hs_b1026CV6R);
                                            switch (hs_wild1126CVUP.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226CVUQ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1726CV6T, hs_a2226CV6U, hs_b1126CV6V);
                                                switch (hs_wild1226CVUQ.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    var hs_wild1326CVUR = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1826CV6X, hs_a2326CV6Y, hs_b1226CV6Z);
                                                    switch (hs_wild1326CVUR.tag) {
                                                    case 1:
                                                        var $res = new $hs.Data(1);
                                                        $res.data = [];
                                                        return $res;
                                                    case 2:
                                                        return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1926CV71, hs_a2426CV72, hs_b1326CV73);
                                                    case 3:
                                                        var $res = new $hs.Data(3);
                                                        $res.data = [];
                                                        return $res;
                                                    }
                                                case 3:
                                                    var $res = new $hs.Data(3);
                                                    $res.data = [];
                                                    return $res;
                                                }
                                            case 3:
                                                var $res = new $hs.Data(3);
                                                $res.data = [];
                                                return $res;
                                            }
                                        case 3:
                                            var $res = new $hs.Data(3);
                                            $res.data = [];
                                            return $res;
                                        }
                                    case 3:
                                        var $res = new $hs.Data(3);
                                        $res.data = [];
                                        return $res;
                                    }
                                case 3:
                                    var $res = new $hs.Data(3);
                                    $res.data = [];
                                    return $res;
                                }
                            case 3:
                                var $res = new $hs.Data(3);
                                $res.data = [];
                                return $res;
                            }
                        case 3:
                            var $res = new $hs.Data(3);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(3);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(3);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(3);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczdp1Ord1225uwAO.evaluate = function (hs_zddOrd726CV7i, hs_zddOrd826CV7k, hs_zddOrd926CV7m, hs_zddOrd1026CV7o, hs_zddOrd1126CV7q, hs_zddOrd1226CV7s, hs_zddOrd1326CV7u, hs_zddOrd1426CV7w, hs_zddOrd1526CV7y, hs_zddOrd1626CV7A, hs_zddOrd1726CV7C, hs_zddOrd1826CV7E, hs_zddOrd1926CV7G) {
        var hs_sat26CVUT = new $hs.Thunk();
        hs_sat26CVUT.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1926CV7G);
        };
        var hs_sat26CVUU = new $hs.Thunk();
        hs_sat26CVUU.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1826CV7E);
        };
        var hs_sat26CVUV = new $hs.Thunk();
        hs_sat26CVUV.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1726CV7C);
        };
        var hs_sat26CVUW = new $hs.Thunk();
        hs_sat26CVUW.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1626CV7A);
        };
        var hs_sat26CVUX = new $hs.Thunk();
        hs_sat26CVUX.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1526CV7y);
        };
        var hs_sat26CVUY = new $hs.Thunk();
        hs_sat26CVUY.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1426CV7w);
        };
        var hs_sat26CVUZ = new $hs.Thunk();
        hs_sat26CVUZ.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1326CV7u);
        };
        var hs_sat26CVV0 = new $hs.Thunk();
        hs_sat26CVV0.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1226CV7s);
        };
        var hs_sat26CVV1 = new $hs.Thunk();
        hs_sat26CVV1.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1126CV7q);
        };
        var hs_sat26CVV2 = new $hs.Thunk();
        hs_sat26CVV2.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1026CV7o);
        };
        var hs_sat26CVV3 = new $hs.Thunk();
        hs_sat26CVV3.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd926CV7m);
        };
        var hs_sat26CVV4 = new $hs.Thunk();
        hs_sat26CVV4.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd826CV7k);
        };
        var hs_sat26CVUS = new $hs.Thunk();
        hs_sat26CVUS.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd726CV7i);
        };
        return $hs.modules.GHCziClasses.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_sat26CVUS, hs_sat26CVV4, hs_sat26CVV3, hs_sat26CVV2, hs_sat26CVV1, hs_sat26CVV0, hs_sat26CVUZ, hs_sat26CVUY, hs_sat26CVUX, hs_sat26CVUW, hs_sat26CVUV, hs_sat26CVUU, hs_sat26CVUT);
    };
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddOrd726CV7X, hs_zddOrd826CV7Y, hs_zddOrd926CV7Z, hs_zddOrd1026CV80, hs_zddOrd1126CV81, hs_zddOrd1226CV82, hs_zddOrd1326CV83, hs_zddOrd1426CV84, hs_zddOrd1526CV85, hs_zddOrd1626CV86, hs_zddOrd1726CV87, hs_zddOrd1826CV88, hs_zddOrd1926CV89) {
        var hs_sat26CVV6 = new $hs.Thunk();
        hs_sat26CVV6.evaluateOnce = function () {
            return hs_zdcmin1925uwBs.hscall(hs_zddOrd726CV7X, hs_zddOrd826CV7Y, hs_zddOrd926CV7Z, hs_zddOrd1026CV80, hs_zddOrd1126CV81, hs_zddOrd1226CV82, hs_zddOrd1326CV83, hs_zddOrd1426CV84, hs_zddOrd1526CV85, hs_zddOrd1626CV86, hs_zddOrd1726CV87, hs_zddOrd1826CV88, hs_zddOrd1926CV89);
        };
        var hs_sat26CVV7 = new $hs.Thunk();
        hs_sat26CVV7.evaluateOnce = function () {
            return hs_zdcmax1925uwBt.hscall(hs_zddOrd726CV7X, hs_zddOrd826CV7Y, hs_zddOrd926CV7Z, hs_zddOrd1026CV80, hs_zddOrd1126CV81, hs_zddOrd1226CV82, hs_zddOrd1326CV83, hs_zddOrd1426CV84, hs_zddOrd1526CV85, hs_zddOrd1626CV86, hs_zddOrd1726CV87, hs_zddOrd1826CV88, hs_zddOrd1926CV89);
        };
        var hs_sat26CVV8 = new $hs.Func(2);
        hs_sat26CVV8.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczlze1725uwsZ.hscall(hs_zddOrd726CV7X, hs_zddOrd826CV7Y, hs_zddOrd926CV7Z, hs_zddOrd1026CV80, hs_zddOrd1126CV81, hs_zddOrd1226CV82, hs_zddOrd1326CV83, hs_zddOrd1426CV84, hs_zddOrd1526CV85, hs_zddOrd1626CV86, hs_zddOrd1726CV87, hs_zddOrd1826CV88, hs_zddOrd1926CV89, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVV9 = new $hs.Func(2);
        hs_sat26CVV9.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczg1725uwuy.hscall(hs_zddOrd726CV7X, hs_zddOrd826CV7Y, hs_zddOrd926CV7Z, hs_zddOrd1026CV80, hs_zddOrd1126CV81, hs_zddOrd1226CV82, hs_zddOrd1326CV83, hs_zddOrd1426CV84, hs_zddOrd1526CV85, hs_zddOrd1626CV86, hs_zddOrd1726CV87, hs_zddOrd1826CV88, hs_zddOrd1926CV89, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVVa = new $hs.Func(2);
        hs_sat26CVVa.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczgze1725uww7.hscall(hs_zddOrd726CV7X, hs_zddOrd826CV7Y, hs_zddOrd926CV7Z, hs_zddOrd1026CV80, hs_zddOrd1126CV81, hs_zddOrd1226CV82, hs_zddOrd1326CV83, hs_zddOrd1426CV84, hs_zddOrd1526CV85, hs_zddOrd1626CV86, hs_zddOrd1726CV87, hs_zddOrd1826CV88, hs_zddOrd1926CV89, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVVb = new $hs.Func(2);
        hs_sat26CVVb.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczl1725uwxG.hscall(hs_zddOrd726CV7X, hs_zddOrd826CV7Y, hs_zddOrd926CV7Z, hs_zddOrd1026CV80, hs_zddOrd1126CV81, hs_zddOrd1226CV82, hs_zddOrd1326CV83, hs_zddOrd1426CV84, hs_zddOrd1526CV85, hs_zddOrd1626CV86, hs_zddOrd1726CV87, hs_zddOrd1826CV88, hs_zddOrd1926CV89, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVVc = new $hs.Func(2);
        hs_sat26CVVc.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdccompare1725uwzf.hscall(hs_zddOrd726CV7X, hs_zddOrd826CV7Y, hs_zddOrd926CV7Z, hs_zddOrd1026CV80, hs_zddOrd1126CV81, hs_zddOrd1226CV82, hs_zddOrd1326CV83, hs_zddOrd1426CV84, hs_zddOrd1526CV85, hs_zddOrd1626CV86, hs_zddOrd1726CV87, hs_zddOrd1826CV88, hs_zddOrd1926CV89, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVV5 = new $hs.Thunk();
        hs_sat26CVV5.evaluateOnce = function () {
            return hs_zdczdp1Ord1225uwAO.hscall(hs_zddOrd726CV7X, hs_zddOrd826CV7Y, hs_zddOrd926CV7Z, hs_zddOrd1026CV80, hs_zddOrd1126CV81, hs_zddOrd1226CV82, hs_zddOrd1326CV83, hs_zddOrd1426CV84, hs_zddOrd1526CV85, hs_zddOrd1626CV86, hs_zddOrd1726CV87, hs_zddOrd1826CV88, hs_zddOrd1926CV89);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CVV5, hs_sat26CVVc, hs_sat26CVVb, hs_sat26CVVa, hs_sat26CVV9, hs_sat26CVV8, hs_sat26CVV7, hs_sat26CVV6];
        return $res;
    };
    hs_zdcmin1925uwBs.evaluate = function (hs_zddOrd726CV8w, hs_zddOrd826CV8x, hs_zddOrd926CV8y, hs_zddOrd1026CV8z, hs_zddOrd1126CV8A, hs_zddOrd1226CV8B, hs_zddOrd1326CV8C, hs_zddOrd1426CV8D, hs_zddOrd1526CV8E, hs_zddOrd1626CV8F, hs_zddOrd1726CV8G, hs_zddOrd1826CV8H, hs_zddOrd1926CV8I) {
        var hs_zddOrd2026CV8J = new $hs.Thunk();
        hs_zddOrd2026CV8J.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddOrd726CV8w, hs_zddOrd826CV8x, hs_zddOrd926CV8y, hs_zddOrd1026CV8z, hs_zddOrd1126CV8A, hs_zddOrd1226CV8B, hs_zddOrd1326CV8C, hs_zddOrd1426CV8D, hs_zddOrd1526CV8E, hs_zddOrd1626CV8F, hs_zddOrd1726CV8G, hs_zddOrd1826CV8H, hs_zddOrd1926CV8I);
        };
        var hs_sat26CVVd = new $hs.Func(2);
        hs_sat26CVVd.evaluate = function (hs_x26CV8M, hs_y26CV8N) {
            var hs_wild26CVVe = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd2026CV8J, hs_x26CV8M, hs_y26CV8N);
            switch (hs_wild26CVVe.tag) {
            case 1:
                if (hs_y26CV8N.notEvaluated) {
                    return hs_y26CV8N.hscall();
                } else {
                    return hs_y26CV8N;
                }
            case 2:
                if (hs_x26CV8M.notEvaluated) {
                    return hs_x26CV8M.hscall();
                } else {
                    return hs_x26CV8M;
                }
            }
        };
        if (hs_sat26CVVd.notEvaluated) {
            return hs_sat26CVVd.hscall();
        } else {
            return hs_sat26CVVd;
        }
    };
    hs_zdcmax1925uwBt.evaluate = function (hs_zddOrd726CV94, hs_zddOrd826CV95, hs_zddOrd926CV96, hs_zddOrd1026CV97, hs_zddOrd1126CV98, hs_zddOrd1226CV99, hs_zddOrd1326CV9a, hs_zddOrd1426CV9b, hs_zddOrd1526CV9c, hs_zddOrd1626CV9d, hs_zddOrd1726CV9e, hs_zddOrd1826CV9f, hs_zddOrd1926CV9g) {
        var hs_zddOrd2026CV9h = new $hs.Thunk();
        hs_zddOrd2026CV9h.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddOrd726CV94, hs_zddOrd826CV95, hs_zddOrd926CV96, hs_zddOrd1026CV97, hs_zddOrd1126CV98, hs_zddOrd1226CV99, hs_zddOrd1326CV9a, hs_zddOrd1426CV9b, hs_zddOrd1526CV9c, hs_zddOrd1626CV9d, hs_zddOrd1726CV9e, hs_zddOrd1826CV9f, hs_zddOrd1926CV9g);
        };
        var hs_sat26CVVf = new $hs.Func(2);
        hs_sat26CVVf.evaluate = function (hs_x26CV9k, hs_y26CV9l) {
            var hs_wild26CVVg = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd2026CV9h, hs_x26CV9k, hs_y26CV9l);
            switch (hs_wild26CVVg.tag) {
            case 1:
                if (hs_x26CV9k.notEvaluated) {
                    return hs_x26CV9k.hscall();
                } else {
                    return hs_x26CV9k;
                }
            case 2:
                if (hs_y26CV9l.notEvaluated) {
                    return hs_y26CV9l.hscall();
                } else {
                    return hs_y26CV9l;
                }
            }
        };
        if (hs_sat26CVVf.notEvaluated) {
            return hs_sat26CVVf.hscall();
        } else {
            return hs_sat26CVVf;
        }
    };
    hs_zdczlze1825uwD8.evaluate = function (hs_zddOrd726CVab, hs_zddOrd826CVaf, hs_zddOrd926CVaj, hs_zddOrd1026CVan, hs_zddOrd1126CVar, hs_zddOrd1226CVav, hs_zddOrd1326CVaz, hs_zddOrd1426CVaD, hs_zddOrd1526CVaH, hs_zddOrd1626CVaL, hs_zddOrd1726CVaP, hs_zddOrd1826CVaT, hs_zddOrd1926CVaX, hs_zddOrd2026CVb1, hs_a1126CV9F, hs_b26CV9V) {
        var hs_wild26CVVi = hs_a1126CV9F;
        if (hs_a1126CV9F.notEvaluated) {
            hs_wild26CVVi = hs_a1126CV9F.hscall();
        }
        var hs_a1226CVac = hs_wild26CVVi.data[0];
        var hs_a1326CVag = hs_wild26CVVi.data[1];
        var hs_a1426CVak = hs_wild26CVVi.data[2];
        var hs_a1526CVao = hs_wild26CVVi.data[3];
        var hs_a1626CVas = hs_wild26CVVi.data[4];
        var hs_a1726CVaw = hs_wild26CVVi.data[5];
        var hs_a1826CVaA = hs_wild26CVVi.data[6];
        var hs_a1926CVaE = hs_wild26CVVi.data[7];
        var hs_a2026CVaI = hs_wild26CVVi.data[8];
        var hs_a2126CVaM = hs_wild26CVVi.data[9];
        var hs_a2226CVaQ = hs_wild26CVVi.data[10];
        var hs_a2326CVaU = hs_wild26CVVi.data[11];
        var hs_a2426CVaY = hs_wild26CVVi.data[12];
        var hs_a2526CVb2 = hs_wild26CVVi.data[13];
        var hs_wild126CVVh = hs_b26CV9V;
        if (hs_b26CV9V.notEvaluated) {
            hs_wild126CVVh = hs_b26CV9V.hscall();
        }
        var hs_b126CVad = hs_wild126CVVh.data[0];
        var hs_b226CVah = hs_wild126CVVh.data[1];
        var hs_b326CVal = hs_wild126CVVh.data[2];
        var hs_b426CVap = hs_wild126CVVh.data[3];
        var hs_b526CVat = hs_wild126CVVh.data[4];
        var hs_b626CVax = hs_wild126CVVh.data[5];
        var hs_b726CVaB = hs_wild126CVVh.data[6];
        var hs_b826CVaF = hs_wild126CVVh.data[7];
        var hs_b926CVaJ = hs_wild126CVVh.data[8];
        var hs_b1026CVaN = hs_wild126CVVh.data[9];
        var hs_b1126CVaR = hs_wild126CVVh.data[10];
        var hs_b1226CVaV = hs_wild126CVVh.data[11];
        var hs_b1326CVaZ = hs_wild126CVVh.data[12];
        var hs_b1426CVb3 = hs_wild126CVVh.data[13];
        var hs_wild226CVVj = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CVab, hs_a1226CVac, hs_b126CVad);
        switch (hs_wild226CVVj.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVVk = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CVaf, hs_a1326CVag, hs_b226CVah);
            switch (hs_wild326CVVk.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVVl = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CVaj, hs_a1426CVak, hs_b326CVal);
                switch (hs_wild426CVVl.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVVm = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CVan, hs_a1526CVao, hs_b426CVap);
                    switch (hs_wild526CVVm.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVVn = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CVar, hs_a1626CVas, hs_b526CVat);
                        switch (hs_wild626CVVn.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVVo = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CVav, hs_a1726CVaw, hs_b626CVax);
                            switch (hs_wild726CVVo.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVVp = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326CVaz, hs_a1826CVaA, hs_b726CVaB);
                                switch (hs_wild826CVVp.tag) {
                                case 1:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926CVVq = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426CVaD, hs_a1926CVaE, hs_b826CVaF);
                                    switch (hs_wild926CVVq.tag) {
                                    case 1:
                                        var $res = new $hs.Data(2);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026CVVr = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526CVaH, hs_a2026CVaI, hs_b926CVaJ);
                                        switch (hs_wild1026CVVr.tag) {
                                        case 1:
                                            var $res = new $hs.Data(2);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126CVVs = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626CVaL, hs_a2126CVaM, hs_b1026CVaN);
                                            switch (hs_wild1126CVVs.tag) {
                                            case 1:
                                                var $res = new $hs.Data(2);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226CVVt = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1726CVaP, hs_a2226CVaQ, hs_b1126CVaR);
                                                switch (hs_wild1226CVVt.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(2);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    var hs_wild1326CVVu = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1826CVaT, hs_a2326CVaU, hs_b1226CVaV);
                                                    switch (hs_wild1326CVVu.tag) {
                                                    case 1:
                                                        var $res = new $hs.Data(2);
                                                        $res.data = [];
                                                        return $res;
                                                    case 2:
                                                        var hs_wild1426CVVv = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1926CVaX, hs_a2426CVaY, hs_b1326CVaZ);
                                                        switch (hs_wild1426CVVv.tag) {
                                                        case 1:
                                                            var $res = new $hs.Data(2);
                                                            $res.data = [];
                                                            return $res;
                                                        case 2:
                                                            return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd2026CVb1, hs_a2526CVb2, hs_b1426CVb3);
                                                        case 3:
                                                            var $res = new $hs.Data(1);
                                                            $res.data = [];
                                                            return $res;
                                                        }
                                                    case 3:
                                                        var $res = new $hs.Data(1);
                                                        $res.data = [];
                                                        return $res;
                                                    }
                                                case 3:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [];
                                                    return $res;
                                                }
                                            case 3:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            }
                                        case 3:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        }
                                    case 3:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    }
                                case 3:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                }
                            case 3:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            }
                        case 3:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczg1825uwEO.evaluate = function (hs_zddOrd726CVbR, hs_zddOrd826CVbV, hs_zddOrd926CVbZ, hs_zddOrd1026CVc3, hs_zddOrd1126CVc7, hs_zddOrd1226CVcb, hs_zddOrd1326CVcf, hs_zddOrd1426CVcj, hs_zddOrd1526CVcn, hs_zddOrd1626CVcr, hs_zddOrd1726CVcv, hs_zddOrd1826CVcz, hs_zddOrd1926CVcD, hs_zddOrd2026CVcH, hs_a1126CVbl, hs_b26CVbB) {
        var hs_wild26CVVx = hs_a1126CVbl;
        if (hs_a1126CVbl.notEvaluated) {
            hs_wild26CVVx = hs_a1126CVbl.hscall();
        }
        var hs_a1226CVbS = hs_wild26CVVx.data[0];
        var hs_a1326CVbW = hs_wild26CVVx.data[1];
        var hs_a1426CVc0 = hs_wild26CVVx.data[2];
        var hs_a1526CVc4 = hs_wild26CVVx.data[3];
        var hs_a1626CVc8 = hs_wild26CVVx.data[4];
        var hs_a1726CVcc = hs_wild26CVVx.data[5];
        var hs_a1826CVcg = hs_wild26CVVx.data[6];
        var hs_a1926CVck = hs_wild26CVVx.data[7];
        var hs_a2026CVco = hs_wild26CVVx.data[8];
        var hs_a2126CVcs = hs_wild26CVVx.data[9];
        var hs_a2226CVcw = hs_wild26CVVx.data[10];
        var hs_a2326CVcA = hs_wild26CVVx.data[11];
        var hs_a2426CVcE = hs_wild26CVVx.data[12];
        var hs_a2526CVcI = hs_wild26CVVx.data[13];
        var hs_wild126CVVw = hs_b26CVbB;
        if (hs_b26CVbB.notEvaluated) {
            hs_wild126CVVw = hs_b26CVbB.hscall();
        }
        var hs_b126CVbT = hs_wild126CVVw.data[0];
        var hs_b226CVbX = hs_wild126CVVw.data[1];
        var hs_b326CVc1 = hs_wild126CVVw.data[2];
        var hs_b426CVc5 = hs_wild126CVVw.data[3];
        var hs_b526CVc9 = hs_wild126CVVw.data[4];
        var hs_b626CVcd = hs_wild126CVVw.data[5];
        var hs_b726CVch = hs_wild126CVVw.data[6];
        var hs_b826CVcl = hs_wild126CVVw.data[7];
        var hs_b926CVcp = hs_wild126CVVw.data[8];
        var hs_b1026CVct = hs_wild126CVVw.data[9];
        var hs_b1126CVcx = hs_wild126CVVw.data[10];
        var hs_b1226CVcB = hs_wild126CVVw.data[11];
        var hs_b1326CVcF = hs_wild126CVVw.data[12];
        var hs_b1426CVcJ = hs_wild126CVVw.data[13];
        var hs_wild226CVVy = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CVbR, hs_a1226CVbS, hs_b126CVbT);
        switch (hs_wild226CVVy.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVVz = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CVbV, hs_a1326CVbW, hs_b226CVbX);
            switch (hs_wild326CVVz.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVVA = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CVbZ, hs_a1426CVc0, hs_b326CVc1);
                switch (hs_wild426CVVA.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVVB = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CVc3, hs_a1526CVc4, hs_b426CVc5);
                    switch (hs_wild526CVVB.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVVC = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CVc7, hs_a1626CVc8, hs_b526CVc9);
                        switch (hs_wild626CVVC.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVVD = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CVcb, hs_a1726CVcc, hs_b626CVcd);
                            switch (hs_wild726CVVD.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVVE = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326CVcf, hs_a1826CVcg, hs_b726CVch);
                                switch (hs_wild826CVVE.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926CVVF = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426CVcj, hs_a1926CVck, hs_b826CVcl);
                                    switch (hs_wild926CVVF.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026CVVG = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526CVcn, hs_a2026CVco, hs_b926CVcp);
                                        switch (hs_wild1026CVVG.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126CVVH = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626CVcr, hs_a2126CVcs, hs_b1026CVct);
                                            switch (hs_wild1126CVVH.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226CVVI = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1726CVcv, hs_a2226CVcw, hs_b1126CVcx);
                                                switch (hs_wild1226CVVI.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    var hs_wild1326CVVJ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1826CVcz, hs_a2326CVcA, hs_b1226CVcB);
                                                    switch (hs_wild1326CVVJ.tag) {
                                                    case 1:
                                                        var $res = new $hs.Data(1);
                                                        $res.data = [];
                                                        return $res;
                                                    case 2:
                                                        var hs_wild1426CVVK = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1926CVcD, hs_a2426CVcE, hs_b1326CVcF);
                                                        switch (hs_wild1426CVVK.tag) {
                                                        case 1:
                                                            var $res = new $hs.Data(1);
                                                            $res.data = [];
                                                            return $res;
                                                        case 2:
                                                            return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd2026CVcH, hs_a2526CVcI, hs_b1426CVcJ);
                                                        case 3:
                                                            var $res = new $hs.Data(2);
                                                            $res.data = [];
                                                            return $res;
                                                        }
                                                    case 3:
                                                        var $res = new $hs.Data(2);
                                                        $res.data = [];
                                                        return $res;
                                                    }
                                                case 3:
                                                    var $res = new $hs.Data(2);
                                                    $res.data = [];
                                                    return $res;
                                                }
                                            case 3:
                                                var $res = new $hs.Data(2);
                                                $res.data = [];
                                                return $res;
                                            }
                                        case 3:
                                            var $res = new $hs.Data(2);
                                            $res.data = [];
                                            return $res;
                                        }
                                    case 3:
                                        var $res = new $hs.Data(2);
                                        $res.data = [];
                                        return $res;
                                    }
                                case 3:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                }
                            case 3:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            }
                        case 3:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczgze1825uwGu.evaluate = function (hs_zddOrd726CVdx, hs_zddOrd826CVdB, hs_zddOrd926CVdF, hs_zddOrd1026CVdJ, hs_zddOrd1126CVdN, hs_zddOrd1226CVdR, hs_zddOrd1326CVdV, hs_zddOrd1426CVdZ, hs_zddOrd1526CVe3, hs_zddOrd1626CVe7, hs_zddOrd1726CVeb, hs_zddOrd1826CVef, hs_zddOrd1926CVej, hs_zddOrd2026CVen, hs_a1126CVd1, hs_b26CVdh) {
        var hs_wild26CVVM = hs_a1126CVd1;
        if (hs_a1126CVd1.notEvaluated) {
            hs_wild26CVVM = hs_a1126CVd1.hscall();
        }
        var hs_a1226CVdy = hs_wild26CVVM.data[0];
        var hs_a1326CVdC = hs_wild26CVVM.data[1];
        var hs_a1426CVdG = hs_wild26CVVM.data[2];
        var hs_a1526CVdK = hs_wild26CVVM.data[3];
        var hs_a1626CVdO = hs_wild26CVVM.data[4];
        var hs_a1726CVdS = hs_wild26CVVM.data[5];
        var hs_a1826CVdW = hs_wild26CVVM.data[6];
        var hs_a1926CVe0 = hs_wild26CVVM.data[7];
        var hs_a2026CVe4 = hs_wild26CVVM.data[8];
        var hs_a2126CVe8 = hs_wild26CVVM.data[9];
        var hs_a2226CVec = hs_wild26CVVM.data[10];
        var hs_a2326CVeg = hs_wild26CVVM.data[11];
        var hs_a2426CVek = hs_wild26CVVM.data[12];
        var hs_a2526CVeo = hs_wild26CVVM.data[13];
        var hs_wild126CVVL = hs_b26CVdh;
        if (hs_b26CVdh.notEvaluated) {
            hs_wild126CVVL = hs_b26CVdh.hscall();
        }
        var hs_b126CVdz = hs_wild126CVVL.data[0];
        var hs_b226CVdD = hs_wild126CVVL.data[1];
        var hs_b326CVdH = hs_wild126CVVL.data[2];
        var hs_b426CVdL = hs_wild126CVVL.data[3];
        var hs_b526CVdP = hs_wild126CVVL.data[4];
        var hs_b626CVdT = hs_wild126CVVL.data[5];
        var hs_b726CVdX = hs_wild126CVVL.data[6];
        var hs_b826CVe1 = hs_wild126CVVL.data[7];
        var hs_b926CVe5 = hs_wild126CVVL.data[8];
        var hs_b1026CVe9 = hs_wild126CVVL.data[9];
        var hs_b1126CVed = hs_wild126CVVL.data[10];
        var hs_b1226CVeh = hs_wild126CVVL.data[11];
        var hs_b1326CVel = hs_wild126CVVL.data[12];
        var hs_b1426CVep = hs_wild126CVVL.data[13];
        var hs_wild226CVVN = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CVdx, hs_a1226CVdy, hs_b126CVdz);
        switch (hs_wild226CVVN.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVVO = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CVdB, hs_a1326CVdC, hs_b226CVdD);
            switch (hs_wild326CVVO.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVVP = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CVdF, hs_a1426CVdG, hs_b326CVdH);
                switch (hs_wild426CVVP.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVVQ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CVdJ, hs_a1526CVdK, hs_b426CVdL);
                    switch (hs_wild526CVVQ.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVVR = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CVdN, hs_a1626CVdO, hs_b526CVdP);
                        switch (hs_wild626CVVR.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVVS = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CVdR, hs_a1726CVdS, hs_b626CVdT);
                            switch (hs_wild726CVVS.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVVT = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326CVdV, hs_a1826CVdW, hs_b726CVdX);
                                switch (hs_wild826CVVT.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926CVVU = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426CVdZ, hs_a1926CVe0, hs_b826CVe1);
                                    switch (hs_wild926CVVU.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026CVVV = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526CVe3, hs_a2026CVe4, hs_b926CVe5);
                                        switch (hs_wild1026CVVV.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126CVVW = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626CVe7, hs_a2126CVe8, hs_b1026CVe9);
                                            switch (hs_wild1126CVVW.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226CVVX = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1726CVeb, hs_a2226CVec, hs_b1126CVed);
                                                switch (hs_wild1226CVVX.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    var hs_wild1326CVVY = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1826CVef, hs_a2326CVeg, hs_b1226CVeh);
                                                    switch (hs_wild1326CVVY.tag) {
                                                    case 1:
                                                        var $res = new $hs.Data(1);
                                                        $res.data = [];
                                                        return $res;
                                                    case 2:
                                                        var hs_wild1426CVVZ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1926CVej, hs_a2426CVek, hs_b1326CVel);
                                                        switch (hs_wild1426CVVZ.tag) {
                                                        case 1:
                                                            var $res = new $hs.Data(1);
                                                            $res.data = [];
                                                            return $res;
                                                        case 2:
                                                            return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd2026CVen, hs_a2526CVeo, hs_b1426CVep);
                                                        case 3:
                                                            var $res = new $hs.Data(2);
                                                            $res.data = [];
                                                            return $res;
                                                        }
                                                    case 3:
                                                        var $res = new $hs.Data(2);
                                                        $res.data = [];
                                                        return $res;
                                                    }
                                                case 3:
                                                    var $res = new $hs.Data(2);
                                                    $res.data = [];
                                                    return $res;
                                                }
                                            case 3:
                                                var $res = new $hs.Data(2);
                                                $res.data = [];
                                                return $res;
                                            }
                                        case 3:
                                            var $res = new $hs.Data(2);
                                            $res.data = [];
                                            return $res;
                                        }
                                    case 3:
                                        var $res = new $hs.Data(2);
                                        $res.data = [];
                                        return $res;
                                    }
                                case 3:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                }
                            case 3:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            }
                        case 3:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczl1825uwIa.evaluate = function (hs_zddOrd726CVfd, hs_zddOrd826CVfh, hs_zddOrd926CVfl, hs_zddOrd1026CVfp, hs_zddOrd1126CVft, hs_zddOrd1226CVfx, hs_zddOrd1326CVfB, hs_zddOrd1426CVfF, hs_zddOrd1526CVfJ, hs_zddOrd1626CVfN, hs_zddOrd1726CVfR, hs_zddOrd1826CVfV, hs_zddOrd1926CVfZ, hs_zddOrd2026CVg3, hs_a1126CVeH, hs_b26CVeX) {
        var hs_wild26CVW1 = hs_a1126CVeH;
        if (hs_a1126CVeH.notEvaluated) {
            hs_wild26CVW1 = hs_a1126CVeH.hscall();
        }
        var hs_a1226CVfe = hs_wild26CVW1.data[0];
        var hs_a1326CVfi = hs_wild26CVW1.data[1];
        var hs_a1426CVfm = hs_wild26CVW1.data[2];
        var hs_a1526CVfq = hs_wild26CVW1.data[3];
        var hs_a1626CVfu = hs_wild26CVW1.data[4];
        var hs_a1726CVfy = hs_wild26CVW1.data[5];
        var hs_a1826CVfC = hs_wild26CVW1.data[6];
        var hs_a1926CVfG = hs_wild26CVW1.data[7];
        var hs_a2026CVfK = hs_wild26CVW1.data[8];
        var hs_a2126CVfO = hs_wild26CVW1.data[9];
        var hs_a2226CVfS = hs_wild26CVW1.data[10];
        var hs_a2326CVfW = hs_wild26CVW1.data[11];
        var hs_a2426CVg0 = hs_wild26CVW1.data[12];
        var hs_a2526CVg4 = hs_wild26CVW1.data[13];
        var hs_wild126CVW0 = hs_b26CVeX;
        if (hs_b26CVeX.notEvaluated) {
            hs_wild126CVW0 = hs_b26CVeX.hscall();
        }
        var hs_b126CVff = hs_wild126CVW0.data[0];
        var hs_b226CVfj = hs_wild126CVW0.data[1];
        var hs_b326CVfn = hs_wild126CVW0.data[2];
        var hs_b426CVfr = hs_wild126CVW0.data[3];
        var hs_b526CVfv = hs_wild126CVW0.data[4];
        var hs_b626CVfz = hs_wild126CVW0.data[5];
        var hs_b726CVfD = hs_wild126CVW0.data[6];
        var hs_b826CVfH = hs_wild126CVW0.data[7];
        var hs_b926CVfL = hs_wild126CVW0.data[8];
        var hs_b1026CVfP = hs_wild126CVW0.data[9];
        var hs_b1126CVfT = hs_wild126CVW0.data[10];
        var hs_b1226CVfX = hs_wild126CVW0.data[11];
        var hs_b1326CVg1 = hs_wild126CVW0.data[12];
        var hs_b1426CVg5 = hs_wild126CVW0.data[13];
        var hs_wild226CVW2 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CVfd, hs_a1226CVfe, hs_b126CVff);
        switch (hs_wild226CVW2.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVW3 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CVfh, hs_a1326CVfi, hs_b226CVfj);
            switch (hs_wild326CVW3.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVW4 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CVfl, hs_a1426CVfm, hs_b326CVfn);
                switch (hs_wild426CVW4.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVW5 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CVfp, hs_a1526CVfq, hs_b426CVfr);
                    switch (hs_wild526CVW5.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVW6 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CVft, hs_a1626CVfu, hs_b526CVfv);
                        switch (hs_wild626CVW6.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVW7 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CVfx, hs_a1726CVfy, hs_b626CVfz);
                            switch (hs_wild726CVW7.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVW8 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326CVfB, hs_a1826CVfC, hs_b726CVfD);
                                switch (hs_wild826CVW8.tag) {
                                case 1:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926CVW9 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426CVfF, hs_a1926CVfG, hs_b826CVfH);
                                    switch (hs_wild926CVW9.tag) {
                                    case 1:
                                        var $res = new $hs.Data(2);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026CVWa = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526CVfJ, hs_a2026CVfK, hs_b926CVfL);
                                        switch (hs_wild1026CVWa.tag) {
                                        case 1:
                                            var $res = new $hs.Data(2);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126CVWb = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626CVfN, hs_a2126CVfO, hs_b1026CVfP);
                                            switch (hs_wild1126CVWb.tag) {
                                            case 1:
                                                var $res = new $hs.Data(2);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226CVWc = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1726CVfR, hs_a2226CVfS, hs_b1126CVfT);
                                                switch (hs_wild1226CVWc.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(2);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    var hs_wild1326CVWd = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1826CVfV, hs_a2326CVfW, hs_b1226CVfX);
                                                    switch (hs_wild1326CVWd.tag) {
                                                    case 1:
                                                        var $res = new $hs.Data(2);
                                                        $res.data = [];
                                                        return $res;
                                                    case 2:
                                                        var hs_wild1426CVWe = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1926CVfZ, hs_a2426CVg0, hs_b1326CVg1);
                                                        switch (hs_wild1426CVWe.tag) {
                                                        case 1:
                                                            var $res = new $hs.Data(2);
                                                            $res.data = [];
                                                            return $res;
                                                        case 2:
                                                            return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd2026CVg3, hs_a2526CVg4, hs_b1426CVg5);
                                                        case 3:
                                                            var $res = new $hs.Data(1);
                                                            $res.data = [];
                                                            return $res;
                                                        }
                                                    case 3:
                                                        var $res = new $hs.Data(1);
                                                        $res.data = [];
                                                        return $res;
                                                    }
                                                case 3:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [];
                                                    return $res;
                                                }
                                            case 3:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            }
                                        case 3:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        }
                                    case 3:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    }
                                case 3:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                }
                            case 3:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            }
                        case 3:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdccompare1825uwJQ.evaluate = function (hs_zddOrd726CVgT, hs_zddOrd826CVgX, hs_zddOrd926CVh1, hs_zddOrd1026CVh5, hs_zddOrd1126CVh9, hs_zddOrd1226CVhd, hs_zddOrd1326CVhh, hs_zddOrd1426CVhl, hs_zddOrd1526CVhp, hs_zddOrd1626CVht, hs_zddOrd1726CVhx, hs_zddOrd1826CVhB, hs_zddOrd1926CVhF, hs_zddOrd2026CVhJ, hs_a1126CVgn, hs_b26CVgD) {
        var hs_wild26CVWg = hs_a1126CVgn;
        if (hs_a1126CVgn.notEvaluated) {
            hs_wild26CVWg = hs_a1126CVgn.hscall();
        }
        var hs_a1226CVgU = hs_wild26CVWg.data[0];
        var hs_a1326CVgY = hs_wild26CVWg.data[1];
        var hs_a1426CVh2 = hs_wild26CVWg.data[2];
        var hs_a1526CVh6 = hs_wild26CVWg.data[3];
        var hs_a1626CVha = hs_wild26CVWg.data[4];
        var hs_a1726CVhe = hs_wild26CVWg.data[5];
        var hs_a1826CVhi = hs_wild26CVWg.data[6];
        var hs_a1926CVhm = hs_wild26CVWg.data[7];
        var hs_a2026CVhq = hs_wild26CVWg.data[8];
        var hs_a2126CVhu = hs_wild26CVWg.data[9];
        var hs_a2226CVhy = hs_wild26CVWg.data[10];
        var hs_a2326CVhC = hs_wild26CVWg.data[11];
        var hs_a2426CVhG = hs_wild26CVWg.data[12];
        var hs_a2526CVhK = hs_wild26CVWg.data[13];
        var hs_wild126CVWf = hs_b26CVgD;
        if (hs_b26CVgD.notEvaluated) {
            hs_wild126CVWf = hs_b26CVgD.hscall();
        }
        var hs_b126CVgV = hs_wild126CVWf.data[0];
        var hs_b226CVgZ = hs_wild126CVWf.data[1];
        var hs_b326CVh3 = hs_wild126CVWf.data[2];
        var hs_b426CVh7 = hs_wild126CVWf.data[3];
        var hs_b526CVhb = hs_wild126CVWf.data[4];
        var hs_b626CVhf = hs_wild126CVWf.data[5];
        var hs_b726CVhj = hs_wild126CVWf.data[6];
        var hs_b826CVhn = hs_wild126CVWf.data[7];
        var hs_b926CVhr = hs_wild126CVWf.data[8];
        var hs_b1026CVhv = hs_wild126CVWf.data[9];
        var hs_b1126CVhz = hs_wild126CVWf.data[10];
        var hs_b1226CVhD = hs_wild126CVWf.data[11];
        var hs_b1326CVhH = hs_wild126CVWf.data[12];
        var hs_b1426CVhL = hs_wild126CVWf.data[13];
        var hs_wild226CVWh = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CVgT, hs_a1226CVgU, hs_b126CVgV);
        switch (hs_wild226CVWh.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVWi = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CVgX, hs_a1326CVgY, hs_b226CVgZ);
            switch (hs_wild326CVWi.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVWj = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CVh1, hs_a1426CVh2, hs_b326CVh3);
                switch (hs_wild426CVWj.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVWk = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CVh5, hs_a1526CVh6, hs_b426CVh7);
                    switch (hs_wild526CVWk.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVWl = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CVh9, hs_a1626CVha, hs_b526CVhb);
                        switch (hs_wild626CVWl.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVWm = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CVhd, hs_a1726CVhe, hs_b626CVhf);
                            switch (hs_wild726CVWm.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVWn = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326CVhh, hs_a1826CVhi, hs_b726CVhj);
                                switch (hs_wild826CVWn.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926CVWo = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426CVhl, hs_a1926CVhm, hs_b826CVhn);
                                    switch (hs_wild926CVWo.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026CVWp = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526CVhp, hs_a2026CVhq, hs_b926CVhr);
                                        switch (hs_wild1026CVWp.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126CVWq = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626CVht, hs_a2126CVhu, hs_b1026CVhv);
                                            switch (hs_wild1126CVWq.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226CVWr = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1726CVhx, hs_a2226CVhy, hs_b1126CVhz);
                                                switch (hs_wild1226CVWr.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    var hs_wild1326CVWs = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1826CVhB, hs_a2326CVhC, hs_b1226CVhD);
                                                    switch (hs_wild1326CVWs.tag) {
                                                    case 1:
                                                        var $res = new $hs.Data(1);
                                                        $res.data = [];
                                                        return $res;
                                                    case 2:
                                                        var hs_wild1426CVWt = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1926CVhF, hs_a2426CVhG, hs_b1326CVhH);
                                                        switch (hs_wild1426CVWt.tag) {
                                                        case 1:
                                                            var $res = new $hs.Data(1);
                                                            $res.data = [];
                                                            return $res;
                                                        case 2:
                                                            return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd2026CVhJ, hs_a2526CVhK, hs_b1426CVhL);
                                                        case 3:
                                                            var $res = new $hs.Data(3);
                                                            $res.data = [];
                                                            return $res;
                                                        }
                                                    case 3:
                                                        var $res = new $hs.Data(3);
                                                        $res.data = [];
                                                        return $res;
                                                    }
                                                case 3:
                                                    var $res = new $hs.Data(3);
                                                    $res.data = [];
                                                    return $res;
                                                }
                                            case 3:
                                                var $res = new $hs.Data(3);
                                                $res.data = [];
                                                return $res;
                                            }
                                        case 3:
                                            var $res = new $hs.Data(3);
                                            $res.data = [];
                                            return $res;
                                        }
                                    case 3:
                                        var $res = new $hs.Data(3);
                                        $res.data = [];
                                        return $res;
                                    }
                                case 3:
                                    var $res = new $hs.Data(3);
                                    $res.data = [];
                                    return $res;
                                }
                            case 3:
                                var $res = new $hs.Data(3);
                                $res.data = [];
                                return $res;
                            }
                        case 3:
                            var $res = new $hs.Data(3);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(3);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(3);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(3);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczdp1Ord1325uwLw.evaluate = function (hs_zddOrd726CVi1, hs_zddOrd826CVi3, hs_zddOrd926CVi5, hs_zddOrd1026CVi7, hs_zddOrd1126CVi9, hs_zddOrd1226CVib, hs_zddOrd1326CVid, hs_zddOrd1426CVif, hs_zddOrd1526CVih, hs_zddOrd1626CVij, hs_zddOrd1726CVil, hs_zddOrd1826CVin, hs_zddOrd1926CVip, hs_zddOrd2026CVir) {
        var hs_sat26CVWv = new $hs.Thunk();
        hs_sat26CVWv.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd2026CVir);
        };
        var hs_sat26CVWw = new $hs.Thunk();
        hs_sat26CVWw.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1926CVip);
        };
        var hs_sat26CVWx = new $hs.Thunk();
        hs_sat26CVWx.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1826CVin);
        };
        var hs_sat26CVWy = new $hs.Thunk();
        hs_sat26CVWy.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1726CVil);
        };
        var hs_sat26CVWz = new $hs.Thunk();
        hs_sat26CVWz.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1626CVij);
        };
        var hs_sat26CVWA = new $hs.Thunk();
        hs_sat26CVWA.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1526CVih);
        };
        var hs_sat26CVWB = new $hs.Thunk();
        hs_sat26CVWB.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1426CVif);
        };
        var hs_sat26CVWC = new $hs.Thunk();
        hs_sat26CVWC.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1326CVid);
        };
        var hs_sat26CVWD = new $hs.Thunk();
        hs_sat26CVWD.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1226CVib);
        };
        var hs_sat26CVWE = new $hs.Thunk();
        hs_sat26CVWE.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1126CVi9);
        };
        var hs_sat26CVWF = new $hs.Thunk();
        hs_sat26CVWF.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1026CVi7);
        };
        var hs_sat26CVWG = new $hs.Thunk();
        hs_sat26CVWG.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd926CVi5);
        };
        var hs_sat26CVWH = new $hs.Thunk();
        hs_sat26CVWH.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd826CVi3);
        };
        var hs_sat26CVWu = new $hs.Thunk();
        hs_sat26CVWu.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd726CVi1);
        };
        return $hs.modules.GHCziClasses.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_sat26CVWu, hs_sat26CVWH, hs_sat26CVWG, hs_sat26CVWF, hs_sat26CVWE, hs_sat26CVWD, hs_sat26CVWC, hs_sat26CVWB, hs_sat26CVWA, hs_sat26CVWz, hs_sat26CVWy, hs_sat26CVWx, hs_sat26CVWw, hs_sat26CVWv);
    };
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddOrd726CViJ, hs_zddOrd826CViK, hs_zddOrd926CViL, hs_zddOrd1026CViM, hs_zddOrd1126CViN, hs_zddOrd1226CViO, hs_zddOrd1326CViP, hs_zddOrd1426CViQ, hs_zddOrd1526CViR, hs_zddOrd1626CViS, hs_zddOrd1726CViT, hs_zddOrd1826CViU, hs_zddOrd1926CViV, hs_zddOrd2026CViW) {
        var hs_sat26CVWJ = new $hs.Thunk();
        hs_sat26CVWJ.evaluateOnce = function () {
            return hs_zdcmin2025uwMd.hscall(hs_zddOrd726CViJ, hs_zddOrd826CViK, hs_zddOrd926CViL, hs_zddOrd1026CViM, hs_zddOrd1126CViN, hs_zddOrd1226CViO, hs_zddOrd1326CViP, hs_zddOrd1426CViQ, hs_zddOrd1526CViR, hs_zddOrd1626CViS, hs_zddOrd1726CViT, hs_zddOrd1826CViU, hs_zddOrd1926CViV, hs_zddOrd2026CViW);
        };
        var hs_sat26CVWK = new $hs.Thunk();
        hs_sat26CVWK.evaluateOnce = function () {
            return hs_zdcmax2025uwMe.hscall(hs_zddOrd726CViJ, hs_zddOrd826CViK, hs_zddOrd926CViL, hs_zddOrd1026CViM, hs_zddOrd1126CViN, hs_zddOrd1226CViO, hs_zddOrd1326CViP, hs_zddOrd1426CViQ, hs_zddOrd1526CViR, hs_zddOrd1626CViS, hs_zddOrd1726CViT, hs_zddOrd1826CViU, hs_zddOrd1926CViV, hs_zddOrd2026CViW);
        };
        var hs_sat26CVWL = new $hs.Func(2);
        hs_sat26CVWL.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczlze1825uwD8.hscall(hs_zddOrd726CViJ, hs_zddOrd826CViK, hs_zddOrd926CViL, hs_zddOrd1026CViM, hs_zddOrd1126CViN, hs_zddOrd1226CViO, hs_zddOrd1326CViP, hs_zddOrd1426CViQ, hs_zddOrd1526CViR, hs_zddOrd1626CViS, hs_zddOrd1726CViT, hs_zddOrd1826CViU, hs_zddOrd1926CViV, hs_zddOrd2026CViW, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVWM = new $hs.Func(2);
        hs_sat26CVWM.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczg1825uwEO.hscall(hs_zddOrd726CViJ, hs_zddOrd826CViK, hs_zddOrd926CViL, hs_zddOrd1026CViM, hs_zddOrd1126CViN, hs_zddOrd1226CViO, hs_zddOrd1326CViP, hs_zddOrd1426CViQ, hs_zddOrd1526CViR, hs_zddOrd1626CViS, hs_zddOrd1726CViT, hs_zddOrd1826CViU, hs_zddOrd1926CViV, hs_zddOrd2026CViW, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVWN = new $hs.Func(2);
        hs_sat26CVWN.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczgze1825uwGu.hscall(hs_zddOrd726CViJ, hs_zddOrd826CViK, hs_zddOrd926CViL, hs_zddOrd1026CViM, hs_zddOrd1126CViN, hs_zddOrd1226CViO, hs_zddOrd1326CViP, hs_zddOrd1426CViQ, hs_zddOrd1526CViR, hs_zddOrd1626CViS, hs_zddOrd1726CViT, hs_zddOrd1826CViU, hs_zddOrd1926CViV, hs_zddOrd2026CViW, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVWO = new $hs.Func(2);
        hs_sat26CVWO.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczl1825uwIa.hscall(hs_zddOrd726CViJ, hs_zddOrd826CViK, hs_zddOrd926CViL, hs_zddOrd1026CViM, hs_zddOrd1126CViN, hs_zddOrd1226CViO, hs_zddOrd1326CViP, hs_zddOrd1426CViQ, hs_zddOrd1526CViR, hs_zddOrd1626CViS, hs_zddOrd1726CViT, hs_zddOrd1826CViU, hs_zddOrd1926CViV, hs_zddOrd2026CViW, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVWP = new $hs.Func(2);
        hs_sat26CVWP.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdccompare1825uwJQ.hscall(hs_zddOrd726CViJ, hs_zddOrd826CViK, hs_zddOrd926CViL, hs_zddOrd1026CViM, hs_zddOrd1126CViN, hs_zddOrd1226CViO, hs_zddOrd1326CViP, hs_zddOrd1426CViQ, hs_zddOrd1526CViR, hs_zddOrd1626CViS, hs_zddOrd1726CViT, hs_zddOrd1826CViU, hs_zddOrd1926CViV, hs_zddOrd2026CViW, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVWI = new $hs.Thunk();
        hs_sat26CVWI.evaluateOnce = function () {
            return hs_zdczdp1Ord1325uwLw.hscall(hs_zddOrd726CViJ, hs_zddOrd826CViK, hs_zddOrd926CViL, hs_zddOrd1026CViM, hs_zddOrd1126CViN, hs_zddOrd1226CViO, hs_zddOrd1326CViP, hs_zddOrd1426CViQ, hs_zddOrd1526CViR, hs_zddOrd1626CViS, hs_zddOrd1726CViT, hs_zddOrd1826CViU, hs_zddOrd1926CViV, hs_zddOrd2026CViW);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CVWI, hs_sat26CVWP, hs_sat26CVWO, hs_sat26CVWN, hs_sat26CVWM, hs_sat26CVWL, hs_sat26CVWK, hs_sat26CVWJ];
        return $res;
    };
    hs_zdcmin2025uwMd.evaluate = function (hs_zddOrd726CVjk, hs_zddOrd826CVjl, hs_zddOrd926CVjm, hs_zddOrd1026CVjn, hs_zddOrd1126CVjo, hs_zddOrd1226CVjp, hs_zddOrd1326CVjq, hs_zddOrd1426CVjr, hs_zddOrd1526CVjs, hs_zddOrd1626CVjt, hs_zddOrd1726CVju, hs_zddOrd1826CVjv, hs_zddOrd1926CVjw, hs_zddOrd2026CVjx) {
        var hs_zddOrd2126CVjy = new $hs.Thunk();
        hs_zddOrd2126CVjy.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddOrd726CVjk, hs_zddOrd826CVjl, hs_zddOrd926CVjm, hs_zddOrd1026CVjn, hs_zddOrd1126CVjo, hs_zddOrd1226CVjp, hs_zddOrd1326CVjq, hs_zddOrd1426CVjr, hs_zddOrd1526CVjs, hs_zddOrd1626CVjt, hs_zddOrd1726CVju, hs_zddOrd1826CVjv, hs_zddOrd1926CVjw, hs_zddOrd2026CVjx);
        };
        var hs_sat26CVWQ = new $hs.Func(2);
        hs_sat26CVWQ.evaluate = function (hs_x26CVjB, hs_y26CVjC) {
            var hs_wild26CVWR = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd2126CVjy, hs_x26CVjB, hs_y26CVjC);
            switch (hs_wild26CVWR.tag) {
            case 1:
                if (hs_y26CVjC.notEvaluated) {
                    return hs_y26CVjC.hscall();
                } else {
                    return hs_y26CVjC;
                }
            case 2:
                if (hs_x26CVjB.notEvaluated) {
                    return hs_x26CVjB.hscall();
                } else {
                    return hs_x26CVjB;
                }
            }
        };
        if (hs_sat26CVWQ.notEvaluated) {
            return hs_sat26CVWQ.hscall();
        } else {
            return hs_sat26CVWQ;
        }
    };
    hs_zdcmax2025uwMe.evaluate = function (hs_zddOrd726CVjU, hs_zddOrd826CVjV, hs_zddOrd926CVjW, hs_zddOrd1026CVjX, hs_zddOrd1126CVjY, hs_zddOrd1226CVjZ, hs_zddOrd1326CVk0, hs_zddOrd1426CVk1, hs_zddOrd1526CVk2, hs_zddOrd1626CVk3, hs_zddOrd1726CVk4, hs_zddOrd1826CVk5, hs_zddOrd1926CVk6, hs_zddOrd2026CVk7) {
        var hs_zddOrd2126CVk8 = new $hs.Thunk();
        hs_zddOrd2126CVk8.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddOrd726CVjU, hs_zddOrd826CVjV, hs_zddOrd926CVjW, hs_zddOrd1026CVjX, hs_zddOrd1126CVjY, hs_zddOrd1226CVjZ, hs_zddOrd1326CVk0, hs_zddOrd1426CVk1, hs_zddOrd1526CVk2, hs_zddOrd1626CVk3, hs_zddOrd1726CVk4, hs_zddOrd1826CVk5, hs_zddOrd1926CVk6, hs_zddOrd2026CVk7);
        };
        var hs_sat26CVWS = new $hs.Func(2);
        hs_sat26CVWS.evaluate = function (hs_x26CVkb, hs_y26CVkc) {
            var hs_wild26CVWT = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd2126CVk8, hs_x26CVkb, hs_y26CVkc);
            switch (hs_wild26CVWT.tag) {
            case 1:
                if (hs_x26CVkb.notEvaluated) {
                    return hs_x26CVkb.hscall();
                } else {
                    return hs_x26CVkb;
                }
            case 2:
                if (hs_y26CVkc.notEvaluated) {
                    return hs_y26CVkc.hscall();
                } else {
                    return hs_y26CVkc;
                }
            }
        };
        if (hs_sat26CVWS.notEvaluated) {
            return hs_sat26CVWS.hscall();
        } else {
            return hs_sat26CVWS;
        }
    };
    hs_zdczlze1925uwNZ.evaluate = function (hs_zddOrd726CVl5, hs_zddOrd826CVl9, hs_zddOrd926CVld, hs_zddOrd1026CVlh, hs_zddOrd1126CVll, hs_zddOrd1226CVlp, hs_zddOrd1326CVlt, hs_zddOrd1426CVlx, hs_zddOrd1526CVlB, hs_zddOrd1626CVlF, hs_zddOrd1726CVlJ, hs_zddOrd1826CVlN, hs_zddOrd1926CVlR, hs_zddOrd2026CVlV, hs_zddOrd2126CVlZ, hs_a1126CVkx, hs_b26CVkO) {
        var hs_wild26CVWV = hs_a1126CVkx;
        if (hs_a1126CVkx.notEvaluated) {
            hs_wild26CVWV = hs_a1126CVkx.hscall();
        }
        var hs_a1226CVl6 = hs_wild26CVWV.data[0];
        var hs_a1326CVla = hs_wild26CVWV.data[1];
        var hs_a1426CVle = hs_wild26CVWV.data[2];
        var hs_a1526CVli = hs_wild26CVWV.data[3];
        var hs_a1626CVlm = hs_wild26CVWV.data[4];
        var hs_a1726CVlq = hs_wild26CVWV.data[5];
        var hs_a1826CVlu = hs_wild26CVWV.data[6];
        var hs_a1926CVly = hs_wild26CVWV.data[7];
        var hs_a2026CVlC = hs_wild26CVWV.data[8];
        var hs_a2126CVlG = hs_wild26CVWV.data[9];
        var hs_a2226CVlK = hs_wild26CVWV.data[10];
        var hs_a2326CVlO = hs_wild26CVWV.data[11];
        var hs_a2426CVlS = hs_wild26CVWV.data[12];
        var hs_a2526CVlW = hs_wild26CVWV.data[13];
        var hs_a2626CVm0 = hs_wild26CVWV.data[14];
        var hs_wild126CVWU = hs_b26CVkO;
        if (hs_b26CVkO.notEvaluated) {
            hs_wild126CVWU = hs_b26CVkO.hscall();
        }
        var hs_b126CVl7 = hs_wild126CVWU.data[0];
        var hs_b226CVlb = hs_wild126CVWU.data[1];
        var hs_b326CVlf = hs_wild126CVWU.data[2];
        var hs_b426CVlj = hs_wild126CVWU.data[3];
        var hs_b526CVln = hs_wild126CVWU.data[4];
        var hs_b626CVlr = hs_wild126CVWU.data[5];
        var hs_b726CVlv = hs_wild126CVWU.data[6];
        var hs_b826CVlz = hs_wild126CVWU.data[7];
        var hs_b926CVlD = hs_wild126CVWU.data[8];
        var hs_b1026CVlH = hs_wild126CVWU.data[9];
        var hs_b1126CVlL = hs_wild126CVWU.data[10];
        var hs_b1226CVlP = hs_wild126CVWU.data[11];
        var hs_b1326CVlT = hs_wild126CVWU.data[12];
        var hs_b1426CVlX = hs_wild126CVWU.data[13];
        var hs_b1526CVm1 = hs_wild126CVWU.data[14];
        var hs_wild226CVWW = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CVl5, hs_a1226CVl6, hs_b126CVl7);
        switch (hs_wild226CVWW.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVWX = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CVl9, hs_a1326CVla, hs_b226CVlb);
            switch (hs_wild326CVWX.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVWY = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CVld, hs_a1426CVle, hs_b326CVlf);
                switch (hs_wild426CVWY.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVWZ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CVlh, hs_a1526CVli, hs_b426CVlj);
                    switch (hs_wild526CVWZ.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVX0 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CVll, hs_a1626CVlm, hs_b526CVln);
                        switch (hs_wild626CVX0.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVX1 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CVlp, hs_a1726CVlq, hs_b626CVlr);
                            switch (hs_wild726CVX1.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVX2 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326CVlt, hs_a1826CVlu, hs_b726CVlv);
                                switch (hs_wild826CVX2.tag) {
                                case 1:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926CVX3 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426CVlx, hs_a1926CVly, hs_b826CVlz);
                                    switch (hs_wild926CVX3.tag) {
                                    case 1:
                                        var $res = new $hs.Data(2);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026CVX4 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526CVlB, hs_a2026CVlC, hs_b926CVlD);
                                        switch (hs_wild1026CVX4.tag) {
                                        case 1:
                                            var $res = new $hs.Data(2);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126CVX5 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626CVlF, hs_a2126CVlG, hs_b1026CVlH);
                                            switch (hs_wild1126CVX5.tag) {
                                            case 1:
                                                var $res = new $hs.Data(2);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226CVX6 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1726CVlJ, hs_a2226CVlK, hs_b1126CVlL);
                                                switch (hs_wild1226CVX6.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(2);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    var hs_wild1326CVX7 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1826CVlN, hs_a2326CVlO, hs_b1226CVlP);
                                                    switch (hs_wild1326CVX7.tag) {
                                                    case 1:
                                                        var $res = new $hs.Data(2);
                                                        $res.data = [];
                                                        return $res;
                                                    case 2:
                                                        var hs_wild1426CVX8 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1926CVlR, hs_a2426CVlS, hs_b1326CVlT);
                                                        switch (hs_wild1426CVX8.tag) {
                                                        case 1:
                                                            var $res = new $hs.Data(2);
                                                            $res.data = [];
                                                            return $res;
                                                        case 2:
                                                            var hs_wild1526CVX9 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd2026CVlV, hs_a2526CVlW, hs_b1426CVlX);
                                                            switch (hs_wild1526CVX9.tag) {
                                                            case 1:
                                                                var $res = new $hs.Data(2);
                                                                $res.data = [];
                                                                return $res;
                                                            case 2:
                                                                return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd2126CVlZ, hs_a2626CVm0, hs_b1526CVm1);
                                                            case 3:
                                                                var $res = new $hs.Data(1);
                                                                $res.data = [];
                                                                return $res;
                                                            }
                                                        case 3:
                                                            var $res = new $hs.Data(1);
                                                            $res.data = [];
                                                            return $res;
                                                        }
                                                    case 3:
                                                        var $res = new $hs.Data(1);
                                                        $res.data = [];
                                                        return $res;
                                                    }
                                                case 3:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [];
                                                    return $res;
                                                }
                                            case 3:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            }
                                        case 3:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        }
                                    case 3:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    }
                                case 3:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                }
                            case 3:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            }
                        case 3:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczg1925uwPM.evaluate = function (hs_zddOrd726CVmS, hs_zddOrd826CVmW, hs_zddOrd926CVn0, hs_zddOrd1026CVn4, hs_zddOrd1126CVn8, hs_zddOrd1226CVnc, hs_zddOrd1326CVng, hs_zddOrd1426CVnk, hs_zddOrd1526CVno, hs_zddOrd1626CVns, hs_zddOrd1726CVnw, hs_zddOrd1826CVnA, hs_zddOrd1926CVnE, hs_zddOrd2026CVnI, hs_zddOrd2126CVnM, hs_a1126CVmk, hs_b26CVmB) {
        var hs_wild26CVXb = hs_a1126CVmk;
        if (hs_a1126CVmk.notEvaluated) {
            hs_wild26CVXb = hs_a1126CVmk.hscall();
        }
        var hs_a1226CVmT = hs_wild26CVXb.data[0];
        var hs_a1326CVmX = hs_wild26CVXb.data[1];
        var hs_a1426CVn1 = hs_wild26CVXb.data[2];
        var hs_a1526CVn5 = hs_wild26CVXb.data[3];
        var hs_a1626CVn9 = hs_wild26CVXb.data[4];
        var hs_a1726CVnd = hs_wild26CVXb.data[5];
        var hs_a1826CVnh = hs_wild26CVXb.data[6];
        var hs_a1926CVnl = hs_wild26CVXb.data[7];
        var hs_a2026CVnp = hs_wild26CVXb.data[8];
        var hs_a2126CVnt = hs_wild26CVXb.data[9];
        var hs_a2226CVnx = hs_wild26CVXb.data[10];
        var hs_a2326CVnB = hs_wild26CVXb.data[11];
        var hs_a2426CVnF = hs_wild26CVXb.data[12];
        var hs_a2526CVnJ = hs_wild26CVXb.data[13];
        var hs_a2626CVnN = hs_wild26CVXb.data[14];
        var hs_wild126CVXa = hs_b26CVmB;
        if (hs_b26CVmB.notEvaluated) {
            hs_wild126CVXa = hs_b26CVmB.hscall();
        }
        var hs_b126CVmU = hs_wild126CVXa.data[0];
        var hs_b226CVmY = hs_wild126CVXa.data[1];
        var hs_b326CVn2 = hs_wild126CVXa.data[2];
        var hs_b426CVn6 = hs_wild126CVXa.data[3];
        var hs_b526CVna = hs_wild126CVXa.data[4];
        var hs_b626CVne = hs_wild126CVXa.data[5];
        var hs_b726CVni = hs_wild126CVXa.data[6];
        var hs_b826CVnm = hs_wild126CVXa.data[7];
        var hs_b926CVnq = hs_wild126CVXa.data[8];
        var hs_b1026CVnu = hs_wild126CVXa.data[9];
        var hs_b1126CVny = hs_wild126CVXa.data[10];
        var hs_b1226CVnC = hs_wild126CVXa.data[11];
        var hs_b1326CVnG = hs_wild126CVXa.data[12];
        var hs_b1426CVnK = hs_wild126CVXa.data[13];
        var hs_b1526CVnO = hs_wild126CVXa.data[14];
        var hs_wild226CVXc = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CVmS, hs_a1226CVmT, hs_b126CVmU);
        switch (hs_wild226CVXc.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVXd = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CVmW, hs_a1326CVmX, hs_b226CVmY);
            switch (hs_wild326CVXd.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVXe = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CVn0, hs_a1426CVn1, hs_b326CVn2);
                switch (hs_wild426CVXe.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVXf = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CVn4, hs_a1526CVn5, hs_b426CVn6);
                    switch (hs_wild526CVXf.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVXg = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CVn8, hs_a1626CVn9, hs_b526CVna);
                        switch (hs_wild626CVXg.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVXh = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CVnc, hs_a1726CVnd, hs_b626CVne);
                            switch (hs_wild726CVXh.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVXi = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326CVng, hs_a1826CVnh, hs_b726CVni);
                                switch (hs_wild826CVXi.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926CVXj = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426CVnk, hs_a1926CVnl, hs_b826CVnm);
                                    switch (hs_wild926CVXj.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026CVXk = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526CVno, hs_a2026CVnp, hs_b926CVnq);
                                        switch (hs_wild1026CVXk.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126CVXl = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626CVns, hs_a2126CVnt, hs_b1026CVnu);
                                            switch (hs_wild1126CVXl.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226CVXm = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1726CVnw, hs_a2226CVnx, hs_b1126CVny);
                                                switch (hs_wild1226CVXm.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    var hs_wild1326CVXn = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1826CVnA, hs_a2326CVnB, hs_b1226CVnC);
                                                    switch (hs_wild1326CVXn.tag) {
                                                    case 1:
                                                        var $res = new $hs.Data(1);
                                                        $res.data = [];
                                                        return $res;
                                                    case 2:
                                                        var hs_wild1426CVXo = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1926CVnE, hs_a2426CVnF, hs_b1326CVnG);
                                                        switch (hs_wild1426CVXo.tag) {
                                                        case 1:
                                                            var $res = new $hs.Data(1);
                                                            $res.data = [];
                                                            return $res;
                                                        case 2:
                                                            var hs_wild1526CVXp = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd2026CVnI, hs_a2526CVnJ, hs_b1426CVnK);
                                                            switch (hs_wild1526CVXp.tag) {
                                                            case 1:
                                                                var $res = new $hs.Data(1);
                                                                $res.data = [];
                                                                return $res;
                                                            case 2:
                                                                return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd2126CVnM, hs_a2626CVnN, hs_b1526CVnO);
                                                            case 3:
                                                                var $res = new $hs.Data(2);
                                                                $res.data = [];
                                                                return $res;
                                                            }
                                                        case 3:
                                                            var $res = new $hs.Data(2);
                                                            $res.data = [];
                                                            return $res;
                                                        }
                                                    case 3:
                                                        var $res = new $hs.Data(2);
                                                        $res.data = [];
                                                        return $res;
                                                    }
                                                case 3:
                                                    var $res = new $hs.Data(2);
                                                    $res.data = [];
                                                    return $res;
                                                }
                                            case 3:
                                                var $res = new $hs.Data(2);
                                                $res.data = [];
                                                return $res;
                                            }
                                        case 3:
                                            var $res = new $hs.Data(2);
                                            $res.data = [];
                                            return $res;
                                        }
                                    case 3:
                                        var $res = new $hs.Data(2);
                                        $res.data = [];
                                        return $res;
                                    }
                                case 3:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                }
                            case 3:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            }
                        case 3:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczgze1925uwRz.evaluate = function (hs_zddOrd726CVoF, hs_zddOrd826CVoJ, hs_zddOrd926CVoN, hs_zddOrd1026CVoR, hs_zddOrd1126CVoV, hs_zddOrd1226CVoZ, hs_zddOrd1326CVp3, hs_zddOrd1426CVp7, hs_zddOrd1526CVpb, hs_zddOrd1626CVpf, hs_zddOrd1726CVpj, hs_zddOrd1826CVpn, hs_zddOrd1926CVpr, hs_zddOrd2026CVpv, hs_zddOrd2126CVpz, hs_a1126CVo7, hs_b26CVoo) {
        var hs_wild26CVXr = hs_a1126CVo7;
        if (hs_a1126CVo7.notEvaluated) {
            hs_wild26CVXr = hs_a1126CVo7.hscall();
        }
        var hs_a1226CVoG = hs_wild26CVXr.data[0];
        var hs_a1326CVoK = hs_wild26CVXr.data[1];
        var hs_a1426CVoO = hs_wild26CVXr.data[2];
        var hs_a1526CVoS = hs_wild26CVXr.data[3];
        var hs_a1626CVoW = hs_wild26CVXr.data[4];
        var hs_a1726CVp0 = hs_wild26CVXr.data[5];
        var hs_a1826CVp4 = hs_wild26CVXr.data[6];
        var hs_a1926CVp8 = hs_wild26CVXr.data[7];
        var hs_a2026CVpc = hs_wild26CVXr.data[8];
        var hs_a2126CVpg = hs_wild26CVXr.data[9];
        var hs_a2226CVpk = hs_wild26CVXr.data[10];
        var hs_a2326CVpo = hs_wild26CVXr.data[11];
        var hs_a2426CVps = hs_wild26CVXr.data[12];
        var hs_a2526CVpw = hs_wild26CVXr.data[13];
        var hs_a2626CVpA = hs_wild26CVXr.data[14];
        var hs_wild126CVXq = hs_b26CVoo;
        if (hs_b26CVoo.notEvaluated) {
            hs_wild126CVXq = hs_b26CVoo.hscall();
        }
        var hs_b126CVoH = hs_wild126CVXq.data[0];
        var hs_b226CVoL = hs_wild126CVXq.data[1];
        var hs_b326CVoP = hs_wild126CVXq.data[2];
        var hs_b426CVoT = hs_wild126CVXq.data[3];
        var hs_b526CVoX = hs_wild126CVXq.data[4];
        var hs_b626CVp1 = hs_wild126CVXq.data[5];
        var hs_b726CVp5 = hs_wild126CVXq.data[6];
        var hs_b826CVp9 = hs_wild126CVXq.data[7];
        var hs_b926CVpd = hs_wild126CVXq.data[8];
        var hs_b1026CVph = hs_wild126CVXq.data[9];
        var hs_b1126CVpl = hs_wild126CVXq.data[10];
        var hs_b1226CVpp = hs_wild126CVXq.data[11];
        var hs_b1326CVpt = hs_wild126CVXq.data[12];
        var hs_b1426CVpx = hs_wild126CVXq.data[13];
        var hs_b1526CVpB = hs_wild126CVXq.data[14];
        var hs_wild226CVXs = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CVoF, hs_a1226CVoG, hs_b126CVoH);
        switch (hs_wild226CVXs.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVXt = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CVoJ, hs_a1326CVoK, hs_b226CVoL);
            switch (hs_wild326CVXt.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVXu = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CVoN, hs_a1426CVoO, hs_b326CVoP);
                switch (hs_wild426CVXu.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVXv = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CVoR, hs_a1526CVoS, hs_b426CVoT);
                    switch (hs_wild526CVXv.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVXw = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CVoV, hs_a1626CVoW, hs_b526CVoX);
                        switch (hs_wild626CVXw.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVXx = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CVoZ, hs_a1726CVp0, hs_b626CVp1);
                            switch (hs_wild726CVXx.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVXy = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326CVp3, hs_a1826CVp4, hs_b726CVp5);
                                switch (hs_wild826CVXy.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926CVXz = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426CVp7, hs_a1926CVp8, hs_b826CVp9);
                                    switch (hs_wild926CVXz.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026CVXA = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526CVpb, hs_a2026CVpc, hs_b926CVpd);
                                        switch (hs_wild1026CVXA.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126CVXB = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626CVpf, hs_a2126CVpg, hs_b1026CVph);
                                            switch (hs_wild1126CVXB.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226CVXC = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1726CVpj, hs_a2226CVpk, hs_b1126CVpl);
                                                switch (hs_wild1226CVXC.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    var hs_wild1326CVXD = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1826CVpn, hs_a2326CVpo, hs_b1226CVpp);
                                                    switch (hs_wild1326CVXD.tag) {
                                                    case 1:
                                                        var $res = new $hs.Data(1);
                                                        $res.data = [];
                                                        return $res;
                                                    case 2:
                                                        var hs_wild1426CVXE = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1926CVpr, hs_a2426CVps, hs_b1326CVpt);
                                                        switch (hs_wild1426CVXE.tag) {
                                                        case 1:
                                                            var $res = new $hs.Data(1);
                                                            $res.data = [];
                                                            return $res;
                                                        case 2:
                                                            var hs_wild1526CVXF = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd2026CVpv, hs_a2526CVpw, hs_b1426CVpx);
                                                            switch (hs_wild1526CVXF.tag) {
                                                            case 1:
                                                                var $res = new $hs.Data(1);
                                                                $res.data = [];
                                                                return $res;
                                                            case 2:
                                                                return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd2126CVpz, hs_a2626CVpA, hs_b1526CVpB);
                                                            case 3:
                                                                var $res = new $hs.Data(2);
                                                                $res.data = [];
                                                                return $res;
                                                            }
                                                        case 3:
                                                            var $res = new $hs.Data(2);
                                                            $res.data = [];
                                                            return $res;
                                                        }
                                                    case 3:
                                                        var $res = new $hs.Data(2);
                                                        $res.data = [];
                                                        return $res;
                                                    }
                                                case 3:
                                                    var $res = new $hs.Data(2);
                                                    $res.data = [];
                                                    return $res;
                                                }
                                            case 3:
                                                var $res = new $hs.Data(2);
                                                $res.data = [];
                                                return $res;
                                            }
                                        case 3:
                                            var $res = new $hs.Data(2);
                                            $res.data = [];
                                            return $res;
                                        }
                                    case 3:
                                        var $res = new $hs.Data(2);
                                        $res.data = [];
                                        return $res;
                                    }
                                case 3:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                }
                            case 3:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            }
                        case 3:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczl1925uwTm.evaluate = function (hs_zddOrd726CVqs, hs_zddOrd826CVqw, hs_zddOrd926CVqA, hs_zddOrd1026CVqE, hs_zddOrd1126CVqI, hs_zddOrd1226CVqM, hs_zddOrd1326CVqQ, hs_zddOrd1426CVqU, hs_zddOrd1526CVqY, hs_zddOrd1626CVr2, hs_zddOrd1726CVr6, hs_zddOrd1826CVra, hs_zddOrd1926CVre, hs_zddOrd2026CVri, hs_zddOrd2126CVrm, hs_a1126CVpU, hs_b26CVqb) {
        var hs_wild26CVXH = hs_a1126CVpU;
        if (hs_a1126CVpU.notEvaluated) {
            hs_wild26CVXH = hs_a1126CVpU.hscall();
        }
        var hs_a1226CVqt = hs_wild26CVXH.data[0];
        var hs_a1326CVqx = hs_wild26CVXH.data[1];
        var hs_a1426CVqB = hs_wild26CVXH.data[2];
        var hs_a1526CVqF = hs_wild26CVXH.data[3];
        var hs_a1626CVqJ = hs_wild26CVXH.data[4];
        var hs_a1726CVqN = hs_wild26CVXH.data[5];
        var hs_a1826CVqR = hs_wild26CVXH.data[6];
        var hs_a1926CVqV = hs_wild26CVXH.data[7];
        var hs_a2026CVqZ = hs_wild26CVXH.data[8];
        var hs_a2126CVr3 = hs_wild26CVXH.data[9];
        var hs_a2226CVr7 = hs_wild26CVXH.data[10];
        var hs_a2326CVrb = hs_wild26CVXH.data[11];
        var hs_a2426CVrf = hs_wild26CVXH.data[12];
        var hs_a2526CVrj = hs_wild26CVXH.data[13];
        var hs_a2626CVrn = hs_wild26CVXH.data[14];
        var hs_wild126CVXG = hs_b26CVqb;
        if (hs_b26CVqb.notEvaluated) {
            hs_wild126CVXG = hs_b26CVqb.hscall();
        }
        var hs_b126CVqu = hs_wild126CVXG.data[0];
        var hs_b226CVqy = hs_wild126CVXG.data[1];
        var hs_b326CVqC = hs_wild126CVXG.data[2];
        var hs_b426CVqG = hs_wild126CVXG.data[3];
        var hs_b526CVqK = hs_wild126CVXG.data[4];
        var hs_b626CVqO = hs_wild126CVXG.data[5];
        var hs_b726CVqS = hs_wild126CVXG.data[6];
        var hs_b826CVqW = hs_wild126CVXG.data[7];
        var hs_b926CVr0 = hs_wild126CVXG.data[8];
        var hs_b1026CVr4 = hs_wild126CVXG.data[9];
        var hs_b1126CVr8 = hs_wild126CVXG.data[10];
        var hs_b1226CVrc = hs_wild126CVXG.data[11];
        var hs_b1326CVrg = hs_wild126CVXG.data[12];
        var hs_b1426CVrk = hs_wild126CVXG.data[13];
        var hs_b1526CVro = hs_wild126CVXG.data[14];
        var hs_wild226CVXI = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CVqs, hs_a1226CVqt, hs_b126CVqu);
        switch (hs_wild226CVXI.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVXJ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CVqw, hs_a1326CVqx, hs_b226CVqy);
            switch (hs_wild326CVXJ.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVXK = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CVqA, hs_a1426CVqB, hs_b326CVqC);
                switch (hs_wild426CVXK.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVXL = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CVqE, hs_a1526CVqF, hs_b426CVqG);
                    switch (hs_wild526CVXL.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVXM = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CVqI, hs_a1626CVqJ, hs_b526CVqK);
                        switch (hs_wild626CVXM.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVXN = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CVqM, hs_a1726CVqN, hs_b626CVqO);
                            switch (hs_wild726CVXN.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVXO = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326CVqQ, hs_a1826CVqR, hs_b726CVqS);
                                switch (hs_wild826CVXO.tag) {
                                case 1:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926CVXP = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426CVqU, hs_a1926CVqV, hs_b826CVqW);
                                    switch (hs_wild926CVXP.tag) {
                                    case 1:
                                        var $res = new $hs.Data(2);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026CVXQ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526CVqY, hs_a2026CVqZ, hs_b926CVr0);
                                        switch (hs_wild1026CVXQ.tag) {
                                        case 1:
                                            var $res = new $hs.Data(2);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126CVXR = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626CVr2, hs_a2126CVr3, hs_b1026CVr4);
                                            switch (hs_wild1126CVXR.tag) {
                                            case 1:
                                                var $res = new $hs.Data(2);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226CVXS = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1726CVr6, hs_a2226CVr7, hs_b1126CVr8);
                                                switch (hs_wild1226CVXS.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(2);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    var hs_wild1326CVXT = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1826CVra, hs_a2326CVrb, hs_b1226CVrc);
                                                    switch (hs_wild1326CVXT.tag) {
                                                    case 1:
                                                        var $res = new $hs.Data(2);
                                                        $res.data = [];
                                                        return $res;
                                                    case 2:
                                                        var hs_wild1426CVXU = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1926CVre, hs_a2426CVrf, hs_b1326CVrg);
                                                        switch (hs_wild1426CVXU.tag) {
                                                        case 1:
                                                            var $res = new $hs.Data(2);
                                                            $res.data = [];
                                                            return $res;
                                                        case 2:
                                                            var hs_wild1526CVXV = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd2026CVri, hs_a2526CVrj, hs_b1426CVrk);
                                                            switch (hs_wild1526CVXV.tag) {
                                                            case 1:
                                                                var $res = new $hs.Data(2);
                                                                $res.data = [];
                                                                return $res;
                                                            case 2:
                                                                return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd2126CVrm, hs_a2626CVrn, hs_b1526CVro);
                                                            case 3:
                                                                var $res = new $hs.Data(1);
                                                                $res.data = [];
                                                                return $res;
                                                            }
                                                        case 3:
                                                            var $res = new $hs.Data(1);
                                                            $res.data = [];
                                                            return $res;
                                                        }
                                                    case 3:
                                                        var $res = new $hs.Data(1);
                                                        $res.data = [];
                                                        return $res;
                                                    }
                                                case 3:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [];
                                                    return $res;
                                                }
                                            case 3:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            }
                                        case 3:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        }
                                    case 3:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    }
                                case 3:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                }
                            case 3:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            }
                        case 3:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdccompare1925uwV9.evaluate = function (hs_zddOrd726CVsf, hs_zddOrd826CVsj, hs_zddOrd926CVsn, hs_zddOrd1026CVsr, hs_zddOrd1126CVsv, hs_zddOrd1226CVsz, hs_zddOrd1326CVsD, hs_zddOrd1426CVsH, hs_zddOrd1526CVsL, hs_zddOrd1626CVsP, hs_zddOrd1726CVsT, hs_zddOrd1826CVsX, hs_zddOrd1926CVt1, hs_zddOrd2026CVt5, hs_zddOrd2126CVt9, hs_a1126CVrH, hs_b26CVrY) {
        var hs_wild26CVXX = hs_a1126CVrH;
        if (hs_a1126CVrH.notEvaluated) {
            hs_wild26CVXX = hs_a1126CVrH.hscall();
        }
        var hs_a1226CVsg = hs_wild26CVXX.data[0];
        var hs_a1326CVsk = hs_wild26CVXX.data[1];
        var hs_a1426CVso = hs_wild26CVXX.data[2];
        var hs_a1526CVss = hs_wild26CVXX.data[3];
        var hs_a1626CVsw = hs_wild26CVXX.data[4];
        var hs_a1726CVsA = hs_wild26CVXX.data[5];
        var hs_a1826CVsE = hs_wild26CVXX.data[6];
        var hs_a1926CVsI = hs_wild26CVXX.data[7];
        var hs_a2026CVsM = hs_wild26CVXX.data[8];
        var hs_a2126CVsQ = hs_wild26CVXX.data[9];
        var hs_a2226CVsU = hs_wild26CVXX.data[10];
        var hs_a2326CVsY = hs_wild26CVXX.data[11];
        var hs_a2426CVt2 = hs_wild26CVXX.data[12];
        var hs_a2526CVt6 = hs_wild26CVXX.data[13];
        var hs_a2626CVta = hs_wild26CVXX.data[14];
        var hs_wild126CVXW = hs_b26CVrY;
        if (hs_b26CVrY.notEvaluated) {
            hs_wild126CVXW = hs_b26CVrY.hscall();
        }
        var hs_b126CVsh = hs_wild126CVXW.data[0];
        var hs_b226CVsl = hs_wild126CVXW.data[1];
        var hs_b326CVsp = hs_wild126CVXW.data[2];
        var hs_b426CVst = hs_wild126CVXW.data[3];
        var hs_b526CVsx = hs_wild126CVXW.data[4];
        var hs_b626CVsB = hs_wild126CVXW.data[5];
        var hs_b726CVsF = hs_wild126CVXW.data[6];
        var hs_b826CVsJ = hs_wild126CVXW.data[7];
        var hs_b926CVsN = hs_wild126CVXW.data[8];
        var hs_b1026CVsR = hs_wild126CVXW.data[9];
        var hs_b1126CVsV = hs_wild126CVXW.data[10];
        var hs_b1226CVsZ = hs_wild126CVXW.data[11];
        var hs_b1326CVt3 = hs_wild126CVXW.data[12];
        var hs_b1426CVt7 = hs_wild126CVXW.data[13];
        var hs_b1526CVtb = hs_wild126CVXW.data[14];
        var hs_wild226CVXY = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726CVsf, hs_a1226CVsg, hs_b126CVsh);
        switch (hs_wild226CVXY.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326CVXZ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826CVsj, hs_a1326CVsk, hs_b226CVsl);
            switch (hs_wild326CVXZ.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426CVY0 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926CVsn, hs_a1426CVso, hs_b326CVsp);
                switch (hs_wild426CVY0.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526CVY1 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026CVsr, hs_a1526CVss, hs_b426CVst);
                    switch (hs_wild526CVY1.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626CVY2 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126CVsv, hs_a1626CVsw, hs_b526CVsx);
                        switch (hs_wild626CVY2.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726CVY3 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226CVsz, hs_a1726CVsA, hs_b626CVsB);
                            switch (hs_wild726CVY3.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826CVY4 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326CVsD, hs_a1826CVsE, hs_b726CVsF);
                                switch (hs_wild826CVY4.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926CVY5 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426CVsH, hs_a1926CVsI, hs_b826CVsJ);
                                    switch (hs_wild926CVY5.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026CVY6 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526CVsL, hs_a2026CVsM, hs_b926CVsN);
                                        switch (hs_wild1026CVY6.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126CVY7 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626CVsP, hs_a2126CVsQ, hs_b1026CVsR);
                                            switch (hs_wild1126CVY7.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226CVY8 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1726CVsT, hs_a2226CVsU, hs_b1126CVsV);
                                                switch (hs_wild1226CVY8.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    var hs_wild1326CVY9 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1826CVsX, hs_a2326CVsY, hs_b1226CVsZ);
                                                    switch (hs_wild1326CVY9.tag) {
                                                    case 1:
                                                        var $res = new $hs.Data(1);
                                                        $res.data = [];
                                                        return $res;
                                                    case 2:
                                                        var hs_wild1426CVYa = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1926CVt1, hs_a2426CVt2, hs_b1326CVt3);
                                                        switch (hs_wild1426CVYa.tag) {
                                                        case 1:
                                                            var $res = new $hs.Data(1);
                                                            $res.data = [];
                                                            return $res;
                                                        case 2:
                                                            var hs_wild1526CVYb = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd2026CVt5, hs_a2526CVt6, hs_b1426CVt7);
                                                            switch (hs_wild1526CVYb.tag) {
                                                            case 1:
                                                                var $res = new $hs.Data(1);
                                                                $res.data = [];
                                                                return $res;
                                                            case 2:
                                                                return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd2126CVt9, hs_a2626CVta, hs_b1526CVtb);
                                                            case 3:
                                                                var $res = new $hs.Data(3);
                                                                $res.data = [];
                                                                return $res;
                                                            }
                                                        case 3:
                                                            var $res = new $hs.Data(3);
                                                            $res.data = [];
                                                            return $res;
                                                        }
                                                    case 3:
                                                        var $res = new $hs.Data(3);
                                                        $res.data = [];
                                                        return $res;
                                                    }
                                                case 3:
                                                    var $res = new $hs.Data(3);
                                                    $res.data = [];
                                                    return $res;
                                                }
                                            case 3:
                                                var $res = new $hs.Data(3);
                                                $res.data = [];
                                                return $res;
                                            }
                                        case 3:
                                            var $res = new $hs.Data(3);
                                            $res.data = [];
                                            return $res;
                                        }
                                    case 3:
                                        var $res = new $hs.Data(3);
                                        $res.data = [];
                                        return $res;
                                    }
                                case 3:
                                    var $res = new $hs.Data(3);
                                    $res.data = [];
                                    return $res;
                                }
                            case 3:
                                var $res = new $hs.Data(3);
                                $res.data = [];
                                return $res;
                            }
                        case 3:
                            var $res = new $hs.Data(3);
                            $res.data = [];
                            return $res;
                        }
                    case 3:
                        var $res = new $hs.Data(3);
                        $res.data = [];
                        return $res;
                    }
                case 3:
                    var $res = new $hs.Data(3);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            }
        case 3:
            var $res = new $hs.Data(3);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczdp1Ord1425uwWW.evaluate = function (hs_zddOrd726CVts, hs_zddOrd826CVtu, hs_zddOrd926CVtw, hs_zddOrd1026CVty, hs_zddOrd1126CVtA, hs_zddOrd1226CVtC, hs_zddOrd1326CVtE, hs_zddOrd1426CVtG, hs_zddOrd1526CVtI, hs_zddOrd1626CVtK, hs_zddOrd1726CVtM, hs_zddOrd1826CVtO, hs_zddOrd1926CVtQ, hs_zddOrd2026CVtS, hs_zddOrd2126CVtU) {
        var hs_sat26CVYd = new $hs.Thunk();
        hs_sat26CVYd.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd2126CVtU);
        };
        var hs_sat26CVYe = new $hs.Thunk();
        hs_sat26CVYe.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd2026CVtS);
        };
        var hs_sat26CVYf = new $hs.Thunk();
        hs_sat26CVYf.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1926CVtQ);
        };
        var hs_sat26CVYg = new $hs.Thunk();
        hs_sat26CVYg.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1826CVtO);
        };
        var hs_sat26CVYh = new $hs.Thunk();
        hs_sat26CVYh.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1726CVtM);
        };
        var hs_sat26CVYi = new $hs.Thunk();
        hs_sat26CVYi.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1626CVtK);
        };
        var hs_sat26CVYj = new $hs.Thunk();
        hs_sat26CVYj.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1526CVtI);
        };
        var hs_sat26CVYk = new $hs.Thunk();
        hs_sat26CVYk.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1426CVtG);
        };
        var hs_sat26CVYl = new $hs.Thunk();
        hs_sat26CVYl.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1326CVtE);
        };
        var hs_sat26CVYm = new $hs.Thunk();
        hs_sat26CVYm.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1226CVtC);
        };
        var hs_sat26CVYn = new $hs.Thunk();
        hs_sat26CVYn.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1126CVtA);
        };
        var hs_sat26CVYo = new $hs.Thunk();
        hs_sat26CVYo.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1026CVty);
        };
        var hs_sat26CVYp = new $hs.Thunk();
        hs_sat26CVYp.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd926CVtw);
        };
        var hs_sat26CVYq = new $hs.Thunk();
        hs_sat26CVYq.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd826CVtu);
        };
        var hs_sat26CVYc = new $hs.Thunk();
        hs_sat26CVYc.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd726CVts);
        };
        return $hs.modules.GHCziClasses.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_sat26CVYc, hs_sat26CVYq, hs_sat26CVYp, hs_sat26CVYo, hs_sat26CVYn, hs_sat26CVYm, hs_sat26CVYl, hs_sat26CVYk, hs_sat26CVYj, hs_sat26CVYi, hs_sat26CVYh, hs_sat26CVYg, hs_sat26CVYf, hs_sat26CVYe, hs_sat26CVYd);
    };
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddOrd726CVud, hs_zddOrd826CVue, hs_zddOrd926CVuf, hs_zddOrd1026CVug, hs_zddOrd1126CVuh, hs_zddOrd1226CVui, hs_zddOrd1326CVuj, hs_zddOrd1426CVuk, hs_zddOrd1526CVul, hs_zddOrd1626CVum, hs_zddOrd1726CVun, hs_zddOrd1826CVuo, hs_zddOrd1926CVup, hs_zddOrd2026CVuq, hs_zddOrd2126CVur) {
        var hs_sat26CVYs = new $hs.Thunk();
        hs_sat26CVYs.evaluateOnce = function () {
            return hs_zdcmin2125uwXG.hscall(hs_zddOrd726CVud, hs_zddOrd826CVue, hs_zddOrd926CVuf, hs_zddOrd1026CVug, hs_zddOrd1126CVuh, hs_zddOrd1226CVui, hs_zddOrd1326CVuj, hs_zddOrd1426CVuk, hs_zddOrd1526CVul, hs_zddOrd1626CVum, hs_zddOrd1726CVun, hs_zddOrd1826CVuo, hs_zddOrd1926CVup, hs_zddOrd2026CVuq, hs_zddOrd2126CVur);
        };
        var hs_sat26CVYt = new $hs.Thunk();
        hs_sat26CVYt.evaluateOnce = function () {
            return hs_zdcmax2125uwXH.hscall(hs_zddOrd726CVud, hs_zddOrd826CVue, hs_zddOrd926CVuf, hs_zddOrd1026CVug, hs_zddOrd1126CVuh, hs_zddOrd1226CVui, hs_zddOrd1326CVuj, hs_zddOrd1426CVuk, hs_zddOrd1526CVul, hs_zddOrd1626CVum, hs_zddOrd1726CVun, hs_zddOrd1826CVuo, hs_zddOrd1926CVup, hs_zddOrd2026CVuq, hs_zddOrd2126CVur);
        };
        var hs_sat26CVYu = new $hs.Func(2);
        hs_sat26CVYu.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczlze1925uwNZ.hscall(hs_zddOrd726CVud, hs_zddOrd826CVue, hs_zddOrd926CVuf, hs_zddOrd1026CVug, hs_zddOrd1126CVuh, hs_zddOrd1226CVui, hs_zddOrd1326CVuj, hs_zddOrd1426CVuk, hs_zddOrd1526CVul, hs_zddOrd1626CVum, hs_zddOrd1726CVun, hs_zddOrd1826CVuo, hs_zddOrd1926CVup, hs_zddOrd2026CVuq, hs_zddOrd2126CVur, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVYv = new $hs.Func(2);
        hs_sat26CVYv.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczg1925uwPM.hscall(hs_zddOrd726CVud, hs_zddOrd826CVue, hs_zddOrd926CVuf, hs_zddOrd1026CVug, hs_zddOrd1126CVuh, hs_zddOrd1226CVui, hs_zddOrd1326CVuj, hs_zddOrd1426CVuk, hs_zddOrd1526CVul, hs_zddOrd1626CVum, hs_zddOrd1726CVun, hs_zddOrd1826CVuo, hs_zddOrd1926CVup, hs_zddOrd2026CVuq, hs_zddOrd2126CVur, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVYw = new $hs.Func(2);
        hs_sat26CVYw.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczgze1925uwRz.hscall(hs_zddOrd726CVud, hs_zddOrd826CVue, hs_zddOrd926CVuf, hs_zddOrd1026CVug, hs_zddOrd1126CVuh, hs_zddOrd1226CVui, hs_zddOrd1326CVuj, hs_zddOrd1426CVuk, hs_zddOrd1526CVul, hs_zddOrd1626CVum, hs_zddOrd1726CVun, hs_zddOrd1826CVuo, hs_zddOrd1926CVup, hs_zddOrd2026CVuq, hs_zddOrd2126CVur, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVYx = new $hs.Func(2);
        hs_sat26CVYx.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczl1925uwTm.hscall(hs_zddOrd726CVud, hs_zddOrd826CVue, hs_zddOrd926CVuf, hs_zddOrd1026CVug, hs_zddOrd1126CVuh, hs_zddOrd1226CVui, hs_zddOrd1326CVuj, hs_zddOrd1426CVuk, hs_zddOrd1526CVul, hs_zddOrd1626CVum, hs_zddOrd1726CVun, hs_zddOrd1826CVuo, hs_zddOrd1926CVup, hs_zddOrd2026CVuq, hs_zddOrd2126CVur, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVYy = new $hs.Func(2);
        hs_sat26CVYy.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdccompare1925uwV9.hscall(hs_zddOrd726CVud, hs_zddOrd826CVue, hs_zddOrd926CVuf, hs_zddOrd1026CVug, hs_zddOrd1126CVuh, hs_zddOrd1226CVui, hs_zddOrd1326CVuj, hs_zddOrd1426CVuk, hs_zddOrd1526CVul, hs_zddOrd1626CVum, hs_zddOrd1726CVun, hs_zddOrd1826CVuo, hs_zddOrd1926CVup, hs_zddOrd2026CVuq, hs_zddOrd2126CVur, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CVYr = new $hs.Thunk();
        hs_sat26CVYr.evaluateOnce = function () {
            return hs_zdczdp1Ord1425uwWW.hscall(hs_zddOrd726CVud, hs_zddOrd826CVue, hs_zddOrd926CVuf, hs_zddOrd1026CVug, hs_zddOrd1126CVuh, hs_zddOrd1226CVui, hs_zddOrd1326CVuj, hs_zddOrd1426CVuk, hs_zddOrd1526CVul, hs_zddOrd1626CVum, hs_zddOrd1726CVun, hs_zddOrd1826CVuo, hs_zddOrd1926CVup, hs_zddOrd2026CVuq, hs_zddOrd2126CVur);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CVYr, hs_sat26CVYy, hs_sat26CVYx, hs_sat26CVYw, hs_sat26CVYv, hs_sat26CVYu, hs_sat26CVYt, hs_sat26CVYs];
        return $res;
    };
    hs_zdcmin2125uwXG.evaluate = function (hs_zddOrd726CVuQ, hs_zddOrd826CVuR, hs_zddOrd926CVuS, hs_zddOrd1026CVuT, hs_zddOrd1126CVuU, hs_zddOrd1226CVuV, hs_zddOrd1326CVuW, hs_zddOrd1426CVuX, hs_zddOrd1526CVuY, hs_zddOrd1626CVuZ, hs_zddOrd1726CVv0, hs_zddOrd1826CVv1, hs_zddOrd1926CVv2, hs_zddOrd2026CVv3, hs_zddOrd2126CVv4) {
        var hs_zddOrd2226CVv5 = new $hs.Thunk();
        hs_zddOrd2226CVv5.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddOrd726CVuQ, hs_zddOrd826CVuR, hs_zddOrd926CVuS, hs_zddOrd1026CVuT, hs_zddOrd1126CVuU, hs_zddOrd1226CVuV, hs_zddOrd1326CVuW, hs_zddOrd1426CVuX, hs_zddOrd1526CVuY, hs_zddOrd1626CVuZ, hs_zddOrd1726CVv0, hs_zddOrd1826CVv1, hs_zddOrd1926CVv2, hs_zddOrd2026CVv3, hs_zddOrd2126CVv4);
        };
        var hs_sat26CVYz = new $hs.Func(2);
        hs_sat26CVYz.evaluate = function (hs_x26CVv8, hs_y26CVv9) {
            var hs_wild26CVYA = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd2226CVv5, hs_x26CVv8, hs_y26CVv9);
            switch (hs_wild26CVYA.tag) {
            case 1:
                if (hs_y26CVv9.notEvaluated) {
                    return hs_y26CVv9.hscall();
                } else {
                    return hs_y26CVv9;
                }
            case 2:
                if (hs_x26CVv8.notEvaluated) {
                    return hs_x26CVv8.hscall();
                } else {
                    return hs_x26CVv8;
                }
            }
        };
        if (hs_sat26CVYz.notEvaluated) {
            return hs_sat26CVYz.hscall();
        } else {
            return hs_sat26CVYz;
        }
    };
    hs_zdcmax2125uwXH.evaluate = function (hs_zddOrd726CVvs, hs_zddOrd826CVvt, hs_zddOrd926CVvu, hs_zddOrd1026CVvv, hs_zddOrd1126CVvw, hs_zddOrd1226CVvx, hs_zddOrd1326CVvy, hs_zddOrd1426CVvz, hs_zddOrd1526CVvA, hs_zddOrd1626CVvB, hs_zddOrd1726CVvC, hs_zddOrd1826CVvD, hs_zddOrd1926CVvE, hs_zddOrd2026CVvF, hs_zddOrd2126CVvG) {
        var hs_zddOrd2226CVvH = new $hs.Thunk();
        hs_zddOrd2226CVvH.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddOrd726CVvs, hs_zddOrd826CVvt, hs_zddOrd926CVvu, hs_zddOrd1026CVvv, hs_zddOrd1126CVvw, hs_zddOrd1226CVvx, hs_zddOrd1326CVvy, hs_zddOrd1426CVvz, hs_zddOrd1526CVvA, hs_zddOrd1626CVvB, hs_zddOrd1726CVvC, hs_zddOrd1826CVvD, hs_zddOrd1926CVvE, hs_zddOrd2026CVvF, hs_zddOrd2126CVvG);
        };
        var hs_sat26CVYB = new $hs.Func(2);
        hs_sat26CVYB.evaluate = function (hs_x26CVvK, hs_y26CVvL) {
            var hs_wild26CVYC = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd2226CVvH, hs_x26CVvK, hs_y26CVvL);
            switch (hs_wild26CVYC.tag) {
            case 1:
                if (hs_x26CVvK.notEvaluated) {
                    return hs_x26CVvK.hscall();
                } else {
                    return hs_x26CVvK;
                }
            case 2:
                if (hs_y26CVvL.notEvaluated) {
                    return hs_y26CVvL.hscall();
                } else {
                    return hs_y26CVvL;
                }
            }
        };
        if (hs_sat26CVYB.notEvaluated) {
            return hs_sat26CVYB.hscall();
        } else {
            return hs_sat26CVYB;
        }
    };
    hs_zdczlze2025uwZy.evaluate = function (hs_a1126CVvR, hs_b26CVvT) {
        var hs_wild26CVYD = hs_a1126CVvR;
        if (hs_a1126CVvR.notEvaluated) {
            hs_wild26CVYD = hs_a1126CVvR.hscall();
        }
        switch (hs_wild26CVYD.tag) {
        case 1:
            var hs_wild126CVYE = hs_b26CVvT;
            if (hs_b26CVvT.notEvaluated) {
                hs_wild126CVYE = hs_b26CVvT.hscall();
            }
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            if (hs_b26CVvT.notEvaluated) {
                return hs_b26CVvT.hscall();
            } else {
                return hs_b26CVvT;
            }
        }
    };
    hs_zdczg2025uwZF.evaluate = function (hs_a1126CVvY, hs_b26CVw0) {
        var hs_wild26CVYG = hs_a1126CVvY;
        if (hs_a1126CVvY.notEvaluated) {
            hs_wild26CVYG = hs_a1126CVvY.hscall();
        }
        switch (hs_wild26CVYG.tag) {
        case 1:
            var hs_wild126CVYH = hs_b26CVw0;
            if (hs_b26CVw0.notEvaluated) {
                hs_wild126CVYH = hs_b26CVw0.hscall();
            }
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild126CVYF = hs_b26CVw0;
            if (hs_b26CVw0.notEvaluated) {
                hs_wild126CVYF = hs_b26CVw0.hscall();
            }
            switch (hs_wild126CVYF.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        }
    };
    hs_zdczgze2025uwZN.evaluate = function (hs_a1126CVw6, hs_b26CVw8) {
        var hs_wild26CVYJ = hs_a1126CVw6;
        if (hs_a1126CVw6.notEvaluated) {
            hs_wild26CVYJ = hs_a1126CVw6.hscall();
        }
        switch (hs_wild26CVYJ.tag) {
        case 1:
            var hs_wild126CVYK = hs_b26CVw8;
            if (hs_b26CVw8.notEvaluated) {
                hs_wild126CVYK = hs_b26CVw8.hscall();
            }
            switch (hs_wild126CVYK.tag) {
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
            var hs_wild126CVYI = hs_b26CVw8;
            if (hs_b26CVw8.notEvaluated) {
                hs_wild126CVYI = hs_b26CVw8.hscall();
            }
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczl2025uwZV.evaluate = function (hs_a1126CVwe, hs_b26CVwg) {
        var hs_wild26CVYM = hs_a1126CVwe;
        if (hs_a1126CVwe.notEvaluated) {
            hs_wild26CVYM = hs_a1126CVwe.hscall();
        }
        switch (hs_wild26CVYM.tag) {
        case 1:
            if (hs_b26CVwg.notEvaluated) {
                return hs_b26CVwg.hscall();
            } else {
                return hs_b26CVwg;
            }
        case 2:
            var hs_wild126CVYL = hs_b26CVwg;
            if (hs_b26CVwg.notEvaluated) {
                hs_wild126CVYL = hs_b26CVwg.hscall();
            }
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdccompare2025ux02.evaluate = function (hs_a1126CVwl, hs_b26CVwn) {
        var hs_wild26CVYO = hs_a1126CVwl;
        if (hs_a1126CVwl.notEvaluated) {
            hs_wild26CVYO = hs_a1126CVwl.hscall();
        }
        switch (hs_wild26CVYO.tag) {
        case 1:
            var hs_wild126CVYP = hs_b26CVwn;
            if (hs_b26CVwn.notEvaluated) {
                hs_wild126CVYP = hs_b26CVwn.hscall();
            }
            switch (hs_wild126CVYP.tag) {
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
            var hs_wild126CVYN = hs_b26CVwn;
            if (hs_b26CVwn.notEvaluated) {
                hs_wild126CVYN = hs_b26CVwn.hscall();
            }
            switch (hs_wild126CVYN.tag) {
            case 1:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        }
    };
    this.hs_zdfOrdBool.data = [$hs.modules.GHCziClasses.hs_zdfEqBool, hs_zdccompare2025ux02, hs_zdczl2025uwZV, hs_zdczgze2025uwZN, hs_zdczg2025uwZF, hs_zdczlze2025uwZy, hs_zdcmax2225ux0b, hs_zdcmin2225ux0a];
    hs_zdcmin2225ux0a.evaluate = function (hs_x26CVwu, hs_y26CVwv) {
        var hs_wild26CVYQ = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdBool, hs_x26CVwu, hs_y26CVwv);
        switch (hs_wild26CVYQ.tag) {
        case 1:
            if (hs_y26CVwv.notEvaluated) {
                return hs_y26CVwv.hscall();
            } else {
                return hs_y26CVwv;
            }
        case 2:
            if (hs_x26CVwu.notEvaluated) {
                return hs_x26CVwu.hscall();
            } else {
                return hs_x26CVwu;
            }
        }
    };
    hs_zdcmax2225ux0b.evaluate = function (hs_x26CVwz, hs_y26CVwA) {
        var hs_wild26CVYR = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdBool, hs_x26CVwz, hs_y26CVwA);
        switch (hs_wild26CVYR.tag) {
        case 1:
            if (hs_x26CVwz.notEvaluated) {
                return hs_x26CVwz.hscall();
            } else {
                return hs_x26CVwz;
            }
        case 2:
            if (hs_y26CVwA.notEvaluated) {
                return hs_y26CVwA.hscall();
            } else {
                return hs_y26CVwA;
            }
        }
    };
    hs_zdczlze2125ux0m.evaluate = function (hs_a1126CVwF, hs_b26CVwH) {
        var hs_wild26CVYT = hs_a1126CVwF;
        if (hs_a1126CVwF.notEvaluated) {
            hs_wild26CVYT = hs_a1126CVwF.hscall();
        }
        switch (hs_wild26CVYT.tag) {
        case 1:
            var hs_wild126CVYV = hs_b26CVwH;
            if (hs_b26CVwH.notEvaluated) {
                hs_wild126CVYV = hs_b26CVwH.hscall();
            }
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild126CVYS = hs_b26CVwH;
            if (hs_b26CVwH.notEvaluated) {
                hs_wild126CVYS = hs_b26CVwH.hscall();
            }
            switch (hs_wild126CVYS.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_wild126CVYU = hs_b26CVwH;
            if (hs_b26CVwH.notEvaluated) {
                hs_wild126CVYU = hs_b26CVwH.hscall();
            }
            switch (hs_wild126CVYU.tag) {
            case 3:
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
    hs_zdczg2125ux0v.evaluate = function (hs_a1126CVwO, hs_b26CVwQ) {
        var hs_wild26CVYX = hs_a1126CVwO;
        if (hs_a1126CVwO.notEvaluated) {
            hs_wild26CVYX = hs_a1126CVwO.hscall();
        }
        switch (hs_wild26CVYX.tag) {
        case 1:
            var hs_wild126CVYZ = hs_b26CVwQ;
            if (hs_b26CVwQ.notEvaluated) {
                hs_wild126CVYZ = hs_b26CVwQ.hscall();
            }
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild126CVYW = hs_b26CVwQ;
            if (hs_b26CVwQ.notEvaluated) {
                hs_wild126CVYW = hs_b26CVwQ.hscall();
            }
            switch (hs_wild126CVYW.tag) {
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
        case 3:
            var hs_wild126CVYY = hs_b26CVwQ;
            if (hs_b26CVwQ.notEvaluated) {
                hs_wild126CVYY = hs_b26CVwQ.hscall();
            }
            switch (hs_wild126CVYY.tag) {
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        }
    };
    hs_zdczgze2125ux0E.evaluate = function (hs_a1126CVwX, hs_b26CVwZ) {
        var hs_wild26CVZ1 = hs_a1126CVwX;
        if (hs_a1126CVwX.notEvaluated) {
            hs_wild26CVZ1 = hs_a1126CVwX.hscall();
        }
        switch (hs_wild26CVZ1.tag) {
        case 1:
            var hs_wild126CVZ3 = hs_b26CVwZ;
            if (hs_b26CVwZ.notEvaluated) {
                hs_wild126CVZ3 = hs_b26CVwZ.hscall();
            }
            switch (hs_wild126CVZ3.tag) {
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
            var hs_wild126CVZ0 = hs_b26CVwZ;
            if (hs_b26CVwZ.notEvaluated) {
                hs_wild126CVZ0 = hs_b26CVwZ.hscall();
            }
            switch (hs_wild126CVZ0.tag) {
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_wild126CVZ2 = hs_b26CVwZ;
            if (hs_b26CVwZ.notEvaluated) {
                hs_wild126CVZ2 = hs_b26CVwZ.hscall();
            }
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczl2125ux0N.evaluate = function (hs_a1126CVx6, hs_b26CVx8) {
        var hs_wild26CVZ5 = hs_a1126CVx6;
        if (hs_a1126CVx6.notEvaluated) {
            hs_wild26CVZ5 = hs_a1126CVx6.hscall();
        }
        switch (hs_wild26CVZ5.tag) {
        case 1:
            var hs_wild126CVZ7 = hs_b26CVx8;
            if (hs_b26CVx8.notEvaluated) {
                hs_wild126CVZ7 = hs_b26CVx8.hscall();
            }
            switch (hs_wild126CVZ7.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_wild126CVZ4 = hs_b26CVx8;
            if (hs_b26CVx8.notEvaluated) {
                hs_wild126CVZ4 = hs_b26CVx8.hscall();
            }
            switch (hs_wild126CVZ4.tag) {
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_wild126CVZ6 = hs_b26CVx8;
            if (hs_b26CVx8.notEvaluated) {
                hs_wild126CVZ6 = hs_b26CVx8.hscall();
            }
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdccompare2125ux0W.evaluate = function (hs_a1126CVxf, hs_b26CVxh) {
        var hs_wild26CVZ9 = hs_a1126CVxf;
        if (hs_a1126CVxf.notEvaluated) {
            hs_wild26CVZ9 = hs_a1126CVxf.hscall();
        }
        switch (hs_wild26CVZ9.tag) {
        case 1:
            var hs_wild126CVZb = hs_b26CVxh;
            if (hs_b26CVxh.notEvaluated) {
                hs_wild126CVZb = hs_b26CVxh.hscall();
            }
            switch (hs_wild126CVZb.tag) {
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
            var hs_wild126CVZ8 = hs_b26CVxh;
            if (hs_b26CVxh.notEvaluated) {
                hs_wild126CVZ8 = hs_b26CVxh.hscall();
            }
            switch (hs_wild126CVZ8.tag) {
            case 1:
                var $res = new $hs.Data(3);
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
            var hs_wild126CVZa = hs_b26CVxh;
            if (hs_b26CVxh.notEvaluated) {
                hs_wild126CVZa = hs_b26CVxh.hscall();
            }
            switch (hs_wild126CVZa.tag) {
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            }
        }
    };
    this.hs_zdfOrdOrdering.data = [$hs.modules.GHCziClasses.hs_zdfEqOrdering, hs_zdccompare2125ux0W, hs_zdczl2125ux0N, hs_zdczgze2125ux0E, hs_zdczg2125ux0v, hs_zdczlze2125ux0m, hs_zdcmax2325ux16, hs_zdcmin2325ux15];
    hs_zdcmin2325ux15.evaluate = function (hs_x26CVxp, hs_y26CVxq) {
        var hs_wild26CVZc = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdOrdering, hs_x26CVxp, hs_y26CVxq);
        switch (hs_wild26CVZc.tag) {
        case 1:
            if (hs_y26CVxq.notEvaluated) {
                return hs_y26CVxq.hscall();
            } else {
                return hs_y26CVxq;
            }
        case 2:
            if (hs_x26CVxp.notEvaluated) {
                return hs_x26CVxp.hscall();
            } else {
                return hs_x26CVxp;
            }
        }
    };
    hs_zdcmax2325ux16.evaluate = function (hs_x26CVxu, hs_y26CVxv) {
        var hs_wild26CVZd = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdOrdering, hs_x26CVxu, hs_y26CVxv);
        switch (hs_wild26CVZd.tag) {
        case 1:
            if (hs_x26CVxu.notEvaluated) {
                return hs_x26CVxu.hscall();
            } else {
                return hs_x26CVxu;
            }
        case 2:
            if (hs_y26CVxv.notEvaluated) {
                return hs_y26CVxv.hscall();
            } else {
                return hs_y26CVxv;
            }
        }
    };
    hs_zdczeze2225ux1h.evaluate = function (hs_ds26CVxA, hs_ds126CVxC) {
        var hs_wild26CVxH = hs_ds26CVxA;
        if (hs_ds26CVxA.notEvaluated) {
            hs_wild26CVxH = hs_ds26CVxA.hscall();
        }
        switch (hs_wild26CVxH.tag) {
        case 1:
            var hs_wild126CVZi = hs_ds126CVxC;
            if (hs_ds126CVxC.notEvaluated) {
                hs_wild126CVZi = hs_ds126CVxC.hscall();
            }
            switch (hs_wild126CVZi.tag) {
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
            var hs_a1126CVxL = hs_wild26CVxH.data[0];
            var hs_wild126CVZe = hs_ds126CVxC;
            if (hs_ds126CVxC.notEvaluated) {
                hs_wild126CVZe = hs_ds126CVxC.hscall();
            }
            switch (hs_wild126CVZe.tag) {
            case 1:
                var hs_wild226CVZg = hs_wild26CVxH;
                if (hs_wild26CVxH.notEvaluated) {
                    hs_wild226CVZg = hs_wild26CVxH.hscall();
                }
                switch (hs_wild226CVZg.tag) {
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
                var hs_b126CVxM = hs_wild126CVZe.data[0];
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_a1126CVxL, hs_b126CVxM);
            }
        }
    };
    this.hs_zdfEqArity.data = [hs_zdczeze2225ux1h, hs_zdczsze2225ux1x];
    hs_zdczsze2225ux1x.evaluate = function (hs_a1126CVxQ, hs_b26CVxR) {
        var hs_wild26CVZj = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqArity, hs_a1126CVxQ, hs_b26CVxR);
        switch (hs_wild26CVZj.tag) {
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
    hs_zdczeze2325ux1D.evaluate = function (hs_a1126CVxW, hs_b26CVxY) {
        var hs_wild26CVZl = hs_a1126CVxW;
        if (hs_a1126CVxW.notEvaluated) {
            hs_wild26CVZl = hs_a1126CVxW.hscall();
        }
        switch (hs_wild26CVZl.tag) {
        case 1:
            var hs_wild126CVZn = hs_b26CVxY;
            if (hs_b26CVxY.notEvaluated) {
                hs_wild126CVZn = hs_b26CVxY.hscall();
            }
            switch (hs_wild126CVZn.tag) {
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
            var hs_wild126CVZk = hs_b26CVxY;
            if (hs_b26CVxY.notEvaluated) {
                hs_wild126CVZk = hs_b26CVxY.hscall();
            }
            switch (hs_wild126CVZk.tag) {
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
            var hs_wild126CVZm = hs_b26CVxY;
            if (hs_b26CVxY.notEvaluated) {
                hs_wild126CVZm = hs_b26CVxY.hscall();
            }
            switch (hs_wild126CVZm.tag) {
            case 3:
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
    this.hs_zdfEqAssociativity.data = [hs_zdczeze2325ux1D, hs_zdczsze2325ux1M];
    hs_zdczsze2325ux1M.evaluate = function (hs_a1126CVy5, hs_b26CVy6) {
        var hs_wild26CVZo = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqAssociativity, hs_a1126CVy5, hs_b26CVy6);
        switch (hs_wild26CVZo.tag) {
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
    hs_zdczeze2425ux1S.evaluate = function (hs_ds26CVyb, hs_ds126CVyd) {
        var hs_wild26CVyk = hs_ds26CVyb;
        if (hs_ds26CVyb.notEvaluated) {
            hs_wild26CVyk = hs_ds26CVyb.hscall();
        }
        switch (hs_wild26CVyk.tag) {
        case 1:
            var hs_wild126CVZw = hs_ds126CVyd;
            if (hs_ds126CVyd.notEvaluated) {
                hs_wild126CVZw = hs_ds126CVyd.hscall();
            }
            switch (hs_wild126CVZw.tag) {
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
            var hs_a1126CVyq = hs_wild26CVyk.data[0];
            var hs_a1226CVyt = hs_wild26CVyk.data[1];
            var hs_wild126CVZp = hs_ds126CVyd;
            if (hs_ds126CVyd.notEvaluated) {
                hs_wild126CVZp = hs_ds126CVyd.hscall();
            }
            switch (hs_wild126CVZp.tag) {
            case 1:
                var hs_wild226CVZt = hs_wild26CVyk;
                if (hs_wild26CVyk.notEvaluated) {
                    hs_wild226CVZt = hs_wild26CVyk.hscall();
                }
                switch (hs_wild226CVZt.tag) {
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
                var hs_b126CVyr = hs_wild126CVZp.data[0];
                var hs_b226CVyu = hs_wild126CVZp.data[1];
                var hs_wild226CVZq = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqAssociativity, hs_a1126CVyq, hs_b126CVyr);
                switch (hs_wild226CVZq.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_a1226CVyt, hs_b226CVyu);
                }
            }
        }
    };
    this.hs_zdfEqFixity.data = [hs_zdczeze2425ux1S, hs_zdczsze2425ux2f];
    hs_zdczsze2425ux2f.evaluate = function (hs_a1126CVyy, hs_b26CVyz) {
        var hs_wild26CVZx = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqFixity, hs_a1126CVyy, hs_b26CVyz);
        switch (hs_wild26CVZx.tag) {
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
    hs_zdczlze2225ux2l.evaluate = function (hs_a1126CVyE, hs_b26CVyG) {
        var hs_wild26CVZz = hs_a1126CVyE;
        if (hs_a1126CVyE.notEvaluated) {
            hs_wild26CVZz = hs_a1126CVyE.hscall();
        }
        switch (hs_wild26CVZz.tag) {
        case 1:
            var hs_wild126CVZB = hs_b26CVyG;
            if (hs_b26CVyG.notEvaluated) {
                hs_wild126CVZB = hs_b26CVyG.hscall();
            }
            switch (hs_wild126CVZB.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_a1226CVyM = hs_wild26CVZz.data[0];
            var hs_wild126CVZy = hs_b26CVyG;
            if (hs_b26CVyG.notEvaluated) {
                hs_wild126CVZy = hs_b26CVyG.hscall();
            }
            switch (hs_wild126CVZy.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_b126CVyN = hs_wild126CVZy.data[0];
                return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_a1226CVyM, hs_b126CVyN);
            }
        }
    };
    hs_zdczg2225ux2y.evaluate = function (hs_a1126CVyR, hs_b26CVyT) {
        var hs_wild26CVZD = hs_a1126CVyR;
        if (hs_a1126CVyR.notEvaluated) {
            hs_wild26CVZD = hs_a1126CVyR.hscall();
        }
        switch (hs_wild26CVZD.tag) {
        case 1:
            var hs_wild126CVZF = hs_b26CVyT;
            if (hs_b26CVyT.notEvaluated) {
                hs_wild126CVZF = hs_b26CVyT.hscall();
            }
            switch (hs_wild126CVZF.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_a1226CVyZ = hs_wild26CVZD.data[0];
            var hs_wild126CVZC = hs_b26CVyT;
            if (hs_b26CVyT.notEvaluated) {
                hs_wild126CVZC = hs_b26CVyT.hscall();
            }
            switch (hs_wild126CVZC.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_b126CVz0 = hs_wild126CVZC.data[0];
                return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_a1226CVyZ, hs_b126CVz0);
            }
        }
    };
    hs_zdczgze2225ux2L.evaluate = function (hs_a1126CVz4, hs_b26CVz6) {
        var hs_wild26CVZH = hs_a1126CVz4;
        if (hs_a1126CVz4.notEvaluated) {
            hs_wild26CVZH = hs_a1126CVz4.hscall();
        }
        switch (hs_wild26CVZH.tag) {
        case 1:
            var hs_wild126CVZJ = hs_b26CVz6;
            if (hs_b26CVz6.notEvaluated) {
                hs_wild126CVZJ = hs_b26CVz6.hscall();
            }
            switch (hs_wild126CVZJ.tag) {
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
            var hs_a1226CVzc = hs_wild26CVZH.data[0];
            var hs_wild126CVZG = hs_b26CVz6;
            if (hs_b26CVz6.notEvaluated) {
                hs_wild126CVZG = hs_b26CVz6.hscall();
            }
            switch (hs_wild126CVZG.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_b126CVzd = hs_wild126CVZG.data[0];
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_a1226CVzc, hs_b126CVzd);
            }
        }
    };
    hs_zdczl2225ux2Y.evaluate = function (hs_a1126CVzh, hs_b26CVzj) {
        var hs_wild26CVZL = hs_a1126CVzh;
        if (hs_a1126CVzh.notEvaluated) {
            hs_wild26CVZL = hs_a1126CVzh.hscall();
        }
        switch (hs_wild26CVZL.tag) {
        case 1:
            var hs_wild126CVZN = hs_b26CVzj;
            if (hs_b26CVzj.notEvaluated) {
                hs_wild126CVZN = hs_b26CVzj.hscall();
            }
            switch (hs_wild126CVZN.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_a1226CVzp = hs_wild26CVZL.data[0];
            var hs_wild126CVZK = hs_b26CVzj;
            if (hs_b26CVzj.notEvaluated) {
                hs_wild126CVZK = hs_b26CVzj.hscall();
            }
            switch (hs_wild126CVZK.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_b126CVzq = hs_wild126CVZK.data[0];
                return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_a1226CVzp, hs_b126CVzq);
            }
        }
    };
    hs_zdccompare2225ux3b.evaluate = function (hs_a1126CVzu, hs_b26CVzw) {
        var hs_wild26CVZP = hs_a1126CVzu;
        if (hs_a1126CVzu.notEvaluated) {
            hs_wild26CVZP = hs_a1126CVzu.hscall();
        }
        switch (hs_wild26CVZP.tag) {
        case 1:
            var hs_wild126CVZR = hs_b26CVzw;
            if (hs_b26CVzw.notEvaluated) {
                hs_wild126CVZR = hs_b26CVzw.hscall();
            }
            switch (hs_wild126CVZR.tag) {
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
            var hs_a1226CVzC = hs_wild26CVZP.data[0];
            var hs_wild126CVZO = hs_b26CVzw;
            if (hs_b26CVzw.notEvaluated) {
                hs_wild126CVZO = hs_b26CVzw.hscall();
            }
            switch (hs_wild126CVZO.tag) {
            case 1:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            case 2:
                var hs_b126CVzD = hs_wild126CVZO.data[0];
                return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_a1226CVzC, hs_b126CVzD);
            }
        }
    };
    this.hs_zdfOrdArity.data = [$hs.modules.GHCziClasses.hs_zdfEqArity, hs_zdccompare2225ux3b, hs_zdczl2225ux2Y, hs_zdczgze2225ux2L, hs_zdczg2225ux2y, hs_zdczlze2225ux2l, hs_zdcmax2425ux3p, hs_zdcmin2425ux3o];
    hs_zdcmin2425ux3o.evaluate = function (hs_x26CVzI, hs_y26CVzJ) {
        var hs_wild26CVZS = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdArity, hs_x26CVzI, hs_y26CVzJ);
        switch (hs_wild26CVZS.tag) {
        case 1:
            if (hs_y26CVzJ.notEvaluated) {
                return hs_y26CVzJ.hscall();
            } else {
                return hs_y26CVzJ;
            }
        case 2:
            if (hs_x26CVzI.notEvaluated) {
                return hs_x26CVzI.hscall();
            } else {
                return hs_x26CVzI;
            }
        }
    };
    hs_zdcmax2425ux3p.evaluate = function (hs_x26CVzN, hs_y26CVzO) {
        var hs_wild26CVZT = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdArity, hs_x26CVzN, hs_y26CVzO);
        switch (hs_wild26CVZT.tag) {
        case 1:
            if (hs_x26CVzN.notEvaluated) {
                return hs_x26CVzN.hscall();
            } else {
                return hs_x26CVzN;
            }
        case 2:
            if (hs_y26CVzO.notEvaluated) {
                return hs_y26CVzO.hscall();
            } else {
                return hs_y26CVzO;
            }
        }
    };
    hs_zdczlze2325ux3A.evaluate = function (hs_a1126CVzT, hs_b26CVzV) {
        var hs_wild26CVZV = hs_a1126CVzT;
        if (hs_a1126CVzT.notEvaluated) {
            hs_wild26CVZV = hs_a1126CVzT.hscall();
        }
        switch (hs_wild26CVZV.tag) {
        case 1:
            var hs_wild126CVZX = hs_b26CVzV;
            if (hs_b26CVzV.notEvaluated) {
                hs_wild126CVZX = hs_b26CVzV.hscall();
            }
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild126CVZU = hs_b26CVzV;
            if (hs_b26CVzV.notEvaluated) {
                hs_wild126CVZU = hs_b26CVzV.hscall();
            }
            switch (hs_wild126CVZU.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_wild126CVZW = hs_b26CVzV;
            if (hs_b26CVzV.notEvaluated) {
                hs_wild126CVZW = hs_b26CVzV.hscall();
            }
            switch (hs_wild126CVZW.tag) {
            case 3:
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
    hs_zdczg2325ux3J.evaluate = function (hs_a1126CVA2, hs_b26CVA4) {
        var hs_wild26CVZZ = hs_a1126CVA2;
        if (hs_a1126CVA2.notEvaluated) {
            hs_wild26CVZZ = hs_a1126CVA2.hscall();
        }
        switch (hs_wild26CVZZ.tag) {
        case 1:
            var hs_wild126CW01 = hs_b26CVA4;
            if (hs_b26CVA4.notEvaluated) {
                hs_wild126CW01 = hs_b26CVA4.hscall();
            }
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild126CVZY = hs_b26CVA4;
            if (hs_b26CVA4.notEvaluated) {
                hs_wild126CVZY = hs_b26CVA4.hscall();
            }
            switch (hs_wild126CVZY.tag) {
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
        case 3:
            var hs_wild126CW00 = hs_b26CVA4;
            if (hs_b26CVA4.notEvaluated) {
                hs_wild126CW00 = hs_b26CVA4.hscall();
            }
            switch (hs_wild126CW00.tag) {
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        }
    };
    hs_zdczgze2325ux3S.evaluate = function (hs_a1126CVAb, hs_b26CVAd) {
        var hs_wild26CW03 = hs_a1126CVAb;
        if (hs_a1126CVAb.notEvaluated) {
            hs_wild26CW03 = hs_a1126CVAb.hscall();
        }
        switch (hs_wild26CW03.tag) {
        case 1:
            var hs_wild126CW05 = hs_b26CVAd;
            if (hs_b26CVAd.notEvaluated) {
                hs_wild126CW05 = hs_b26CVAd.hscall();
            }
            switch (hs_wild126CW05.tag) {
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
            var hs_wild126CW02 = hs_b26CVAd;
            if (hs_b26CVAd.notEvaluated) {
                hs_wild126CW02 = hs_b26CVAd.hscall();
            }
            switch (hs_wild126CW02.tag) {
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_wild126CW04 = hs_b26CVAd;
            if (hs_b26CVAd.notEvaluated) {
                hs_wild126CW04 = hs_b26CVAd.hscall();
            }
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczl2325ux41.evaluate = function (hs_a1126CVAk, hs_b26CVAm) {
        var hs_wild26CW07 = hs_a1126CVAk;
        if (hs_a1126CVAk.notEvaluated) {
            hs_wild26CW07 = hs_a1126CVAk.hscall();
        }
        switch (hs_wild26CW07.tag) {
        case 1:
            var hs_wild126CW09 = hs_b26CVAm;
            if (hs_b26CVAm.notEvaluated) {
                hs_wild126CW09 = hs_b26CVAm.hscall();
            }
            switch (hs_wild126CW09.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_wild126CW06 = hs_b26CVAm;
            if (hs_b26CVAm.notEvaluated) {
                hs_wild126CW06 = hs_b26CVAm.hscall();
            }
            switch (hs_wild126CW06.tag) {
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_wild126CW08 = hs_b26CVAm;
            if (hs_b26CVAm.notEvaluated) {
                hs_wild126CW08 = hs_b26CVAm.hscall();
            }
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdccompare2325ux4a.evaluate = function (hs_a1126CVAt, hs_b26CVAv) {
        var hs_wild26CW0b = hs_a1126CVAt;
        if (hs_a1126CVAt.notEvaluated) {
            hs_wild26CW0b = hs_a1126CVAt.hscall();
        }
        switch (hs_wild26CW0b.tag) {
        case 1:
            var hs_wild126CW0d = hs_b26CVAv;
            if (hs_b26CVAv.notEvaluated) {
                hs_wild126CW0d = hs_b26CVAv.hscall();
            }
            switch (hs_wild126CW0d.tag) {
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
            var hs_wild126CW0a = hs_b26CVAv;
            if (hs_b26CVAv.notEvaluated) {
                hs_wild126CW0a = hs_b26CVAv.hscall();
            }
            switch (hs_wild126CW0a.tag) {
            case 1:
                var $res = new $hs.Data(3);
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
            var hs_wild126CW0c = hs_b26CVAv;
            if (hs_b26CVAv.notEvaluated) {
                hs_wild126CW0c = hs_b26CVAv.hscall();
            }
            switch (hs_wild126CW0c.tag) {
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            }
        }
    };
    this.hs_zdfOrdAssociativity.data = [$hs.modules.GHCziClasses.hs_zdfEqAssociativity, hs_zdccompare2325ux4a, hs_zdczl2325ux41, hs_zdczgze2325ux3S, hs_zdczg2325ux3J, hs_zdczlze2325ux3A, hs_zdcmax2525ux4k, hs_zdcmin2525ux4j];
    hs_zdcmin2525ux4j.evaluate = function (hs_x26CVAD, hs_y26CVAE) {
        var hs_wild26CW0e = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdAssociativity, hs_x26CVAD, hs_y26CVAE);
        switch (hs_wild26CW0e.tag) {
        case 1:
            if (hs_y26CVAE.notEvaluated) {
                return hs_y26CVAE.hscall();
            } else {
                return hs_y26CVAE;
            }
        case 2:
            if (hs_x26CVAD.notEvaluated) {
                return hs_x26CVAD.hscall();
            } else {
                return hs_x26CVAD;
            }
        }
    };
    hs_zdcmax2525ux4k.evaluate = function (hs_x26CVAI, hs_y26CVAJ) {
        var hs_wild26CW0f = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdAssociativity, hs_x26CVAI, hs_y26CVAJ);
        switch (hs_wild26CW0f.tag) {
        case 1:
            if (hs_x26CVAI.notEvaluated) {
                return hs_x26CVAI.hscall();
            } else {
                return hs_x26CVAI;
            }
        case 2:
            if (hs_y26CVAJ.notEvaluated) {
                return hs_y26CVAJ.hscall();
            } else {
                return hs_y26CVAJ;
            }
        }
    };
    hs_zdczlze2425ux4v.evaluate = function (hs_a1126CVAO, hs_b26CVAQ) {
        var hs_wild26CW0h = hs_a1126CVAO;
        if (hs_a1126CVAO.notEvaluated) {
            hs_wild26CW0h = hs_a1126CVAO.hscall();
        }
        switch (hs_wild26CW0h.tag) {
        case 1:
            var hs_wild126CW0l = hs_b26CVAQ;
            if (hs_b26CVAQ.notEvaluated) {
                hs_wild126CW0l = hs_b26CVAQ.hscall();
            }
            switch (hs_wild126CW0l.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_a1226CVAZ = hs_wild26CW0h.data[0];
            var hs_a1326CVB2 = hs_wild26CW0h.data[1];
            var hs_wild126CW0g = hs_b26CVAQ;
            if (hs_b26CVAQ.notEvaluated) {
                hs_wild126CW0g = hs_b26CVAQ.hscall();
            }
            switch (hs_wild126CW0g.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_b126CVB0 = hs_wild126CW0g.data[0];
                var hs_b226CVB3 = hs_wild126CW0g.data[1];
                var hs_wild226CW0i = $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziClasses.hs_zdfOrdAssociativity, hs_a1226CVAZ, hs_b126CVB0);
                switch (hs_wild226CW0i.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_a1326CVB2, hs_b226CVB3);
                case 3:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            }
        }
    };
    hs_zdczg2425ux4O.evaluate = function (hs_a1126CVB7, hs_b26CVB9) {
        var hs_wild26CW0n = hs_a1126CVB7;
        if (hs_a1126CVB7.notEvaluated) {
            hs_wild26CW0n = hs_a1126CVB7.hscall();
        }
        switch (hs_wild26CW0n.tag) {
        case 1:
            var hs_wild126CW0r = hs_b26CVB9;
            if (hs_b26CVB9.notEvaluated) {
                hs_wild126CW0r = hs_b26CVB9.hscall();
            }
            switch (hs_wild126CW0r.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_a1226CVBi = hs_wild26CW0n.data[0];
            var hs_a1326CVBl = hs_wild26CW0n.data[1];
            var hs_wild126CW0m = hs_b26CVB9;
            if (hs_b26CVB9.notEvaluated) {
                hs_wild126CW0m = hs_b26CVB9.hscall();
            }
            switch (hs_wild126CW0m.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_b126CVBj = hs_wild126CW0m.data[0];
                var hs_b226CVBm = hs_wild126CW0m.data[1];
                var hs_wild226CW0o = $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziClasses.hs_zdfOrdAssociativity, hs_a1226CVBi, hs_b126CVBj);
                switch (hs_wild226CW0o.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_a1326CVBl, hs_b226CVBm);
                case 3:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                }
            }
        }
    };
    hs_zdczgze2425ux57.evaluate = function (hs_a1126CVBq, hs_b26CVBs) {
        var hs_wild26CW0t = hs_a1126CVBq;
        if (hs_a1126CVBq.notEvaluated) {
            hs_wild26CW0t = hs_a1126CVBq.hscall();
        }
        switch (hs_wild26CW0t.tag) {
        case 1:
            var hs_wild126CW0x = hs_b26CVBs;
            if (hs_b26CVBs.notEvaluated) {
                hs_wild126CW0x = hs_b26CVBs.hscall();
            }
            switch (hs_wild126CW0x.tag) {
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
            var hs_a1226CVBB = hs_wild26CW0t.data[0];
            var hs_a1326CVBE = hs_wild26CW0t.data[1];
            var hs_wild126CW0s = hs_b26CVBs;
            if (hs_b26CVBs.notEvaluated) {
                hs_wild126CW0s = hs_b26CVBs.hscall();
            }
            switch (hs_wild126CW0s.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_b126CVBC = hs_wild126CW0s.data[0];
                var hs_b226CVBF = hs_wild126CW0s.data[1];
                var hs_wild226CW0u = $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziClasses.hs_zdfOrdAssociativity, hs_a1226CVBB, hs_b126CVBC);
                switch (hs_wild226CW0u.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_a1326CVBE, hs_b226CVBF);
                case 3:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                }
            }
        }
    };
    hs_zdczl2425ux5q.evaluate = function (hs_a1126CVBJ, hs_b26CVBL) {
        var hs_wild26CW0z = hs_a1126CVBJ;
        if (hs_a1126CVBJ.notEvaluated) {
            hs_wild26CW0z = hs_a1126CVBJ.hscall();
        }
        switch (hs_wild26CW0z.tag) {
        case 1:
            var hs_wild126CW0D = hs_b26CVBL;
            if (hs_b26CVBL.notEvaluated) {
                hs_wild126CW0D = hs_b26CVBL.hscall();
            }
            switch (hs_wild126CW0D.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_a1226CVBU = hs_wild26CW0z.data[0];
            var hs_a1326CVBX = hs_wild26CW0z.data[1];
            var hs_wild126CW0y = hs_b26CVBL;
            if (hs_b26CVBL.notEvaluated) {
                hs_wild126CW0y = hs_b26CVBL.hscall();
            }
            switch (hs_wild126CW0y.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_b126CVBV = hs_wild126CW0y.data[0];
                var hs_b226CVBY = hs_wild126CW0y.data[1];
                var hs_wild226CW0A = $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziClasses.hs_zdfOrdAssociativity, hs_a1226CVBU, hs_b126CVBV);
                switch (hs_wild226CW0A.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_a1326CVBX, hs_b226CVBY);
                case 3:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            }
        }
    };
    hs_zdccompare2425ux5J.evaluate = function (hs_a1126CVC2, hs_b26CVC4) {
        var hs_wild26CW0F = hs_a1126CVC2;
        if (hs_a1126CVC2.notEvaluated) {
            hs_wild26CW0F = hs_a1126CVC2.hscall();
        }
        switch (hs_wild26CW0F.tag) {
        case 1:
            var hs_wild126CW0J = hs_b26CVC4;
            if (hs_b26CVC4.notEvaluated) {
                hs_wild126CW0J = hs_b26CVC4.hscall();
            }
            switch (hs_wild126CW0J.tag) {
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
            var hs_a1226CVCd = hs_wild26CW0F.data[0];
            var hs_a1326CVCg = hs_wild26CW0F.data[1];
            var hs_wild126CW0E = hs_b26CVC4;
            if (hs_b26CVC4.notEvaluated) {
                hs_wild126CW0E = hs_b26CVC4.hscall();
            }
            switch (hs_wild126CW0E.tag) {
            case 1:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            case 2:
                var hs_b126CVCe = hs_wild126CW0E.data[0];
                var hs_b226CVCh = hs_wild126CW0E.data[1];
                var hs_wild226CW0G = $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziClasses.hs_zdfOrdAssociativity, hs_a1226CVCd, hs_b126CVCe);
                switch (hs_wild226CW0G.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_a1326CVCg, hs_b226CVCh);
                case 3:
                    var $res = new $hs.Data(3);
                    $res.data = [];
                    return $res;
                }
            }
        }
    };
    this.hs_zdfOrdFixity.data = [$hs.modules.GHCziClasses.hs_zdfEqFixity, hs_zdccompare2425ux5J, hs_zdczl2425ux5q, hs_zdczgze2425ux57, hs_zdczg2425ux4O, hs_zdczlze2425ux4v, hs_zdcmax2625ux63, hs_zdcmin2625ux62];
    hs_zdcmin2625ux62.evaluate = function (hs_x26CVCm, hs_y26CVCn) {
        var hs_wild26CW0K = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdFixity, hs_x26CVCm, hs_y26CVCn);
        switch (hs_wild26CW0K.tag) {
        case 1:
            if (hs_y26CVCn.notEvaluated) {
                return hs_y26CVCn.hscall();
            } else {
                return hs_y26CVCn;
            }
        case 2:
            if (hs_x26CVCm.notEvaluated) {
                return hs_x26CVCm.hscall();
            } else {
                return hs_x26CVCm;
            }
        }
    };
    hs_zdcmax2625ux63.evaluate = function (hs_x26CVCr, hs_y26CVCs) {
        var hs_wild26CW0L = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdFixity, hs_x26CVCr, hs_y26CVCs);
        switch (hs_wild26CW0L.tag) {
        case 1:
            if (hs_x26CVCr.notEvaluated) {
                return hs_x26CVCr.hscall();
            } else {
                return hs_x26CVCr;
            }
        case 2:
            if (hs_y26CVCs.notEvaluated) {
                return hs_y26CVCs.hscall();
            } else {
                return hs_y26CVCs;
            }
        }
    };
    this.hs_DZCEq.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_DZCOrd.evaluate = function (hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};